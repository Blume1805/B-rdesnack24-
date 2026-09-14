-- ============================================================================
-- Bargeld am Automaten und Ausspielung der Preise
-- ----------------------------------------------------------------------------
-- Nachtrag zu 20260914090000. Zwei Angaben Philipps vom 14.09.2026 ändern die
-- Lage:
--
--   1. „Am Automaten kann auch bar bezahlt werden. Es gibt einen Münzzähler
--      und Scheinprüfer."
--   2. „Ja, man kommt auch programmatisch heran." (CleverMetrics-API)
--
-- Die erste Angabe wiegt schwerer, und zwar aus einem Grund, der im ersten
-- Entwurf gar nicht vorkam: **Bargeld erzeugt einen Kassenbestand.** Geld
-- liegt im Gerät, bis jemand es holt. Damit gilt nicht nur die
-- Aufzeichnungspflicht für Umsätze, sondern die Kassensturzfähigkeit: Es
-- muss jederzeit feststellbar sein, wie viel Geld drin sein MÜSSTE, und
-- beim Leeren muss das gegen das gezählte Geld gestellt werden.
--
-- Der erste Entwurf konnte das nicht, und zwar wegen einer Lücke, die erst
-- durch die neue Angabe sichtbar wurde: **An den Ereignissen stand die
-- Zahlart nicht.** Ohne sie lassen sich Bar- und Kartenumsätze nicht
-- trennen, und ohne diese Trennung gibt es kein Soll für die Kasse.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Die Zahlart gehört an jedes Ereignis
-- ----------------------------------------------------------------------------
alter table public.terminal_ereignisse
  add column if not exists zahlart text
    check (zahlart in ('karte', 'bar', 'unbekannt'));

comment on column public.terminal_ereignisse.zahlart is
  'Karte oder Bargeld. Trennt die beiden Geldwege: Kartengeld geht über den '
  'Zahlungsdienstleister aufs Konto, Bargeld bleibt bis zur Leerung im Gerät.';

-- Bestehende Sätze sind Kartenzahlungen — sie kamen vom Terminal.
update public.terminal_ereignisse set zahlart = 'karte' where zahlart is null;

-- ----------------------------------------------------------------------------
-- 2. Die Kasse im Automaten
-- ----------------------------------------------------------------------------
-- `cash_collection_logs` gibt es seit dem 29.06.2026. Sie erfasst, WAS
-- entnommen wurde — aber nicht, was drin sein müsste. Ohne Soll gibt es
-- keine Differenz, und ohne Differenz ist eine Entnahme kein Kassensturz,
-- sondern nur eine Notiz.
--
-- Nachgetragen wird deshalb das, was eine Zählung zum Nachweis macht.
alter table public.cash_collection_logs
  add column if not exists soll_betrag        numeric(12,2),
  add column if not exists differenz          numeric(12,2)
    generated always as (amount_gross - coalesce(soll_betrag, amount_gross)) stored,
  add column if not exists stueckelung        jsonb,
  add column if not exists wechselgeld_danach numeric(12,2),
  add column if not exists bemerkung          text,
  add column if not exists zeitraum_von       timestamptz;

comment on column public.cash_collection_logs.soll_betrag is
  'Summe der Barverkäufe seit der letzten Leerung. Das Soll gegen das Ist.';
comment on column public.cash_collection_logs.differenz is
  'Ist minus Soll. Nicht null heißt: erklären, nicht glattziehen.';
comment on column public.cash_collection_logs.stueckelung is
  'Zählprotokoll je Münz- und Scheinsorte. Der übliche Nachweis dafür, dass '
  'tatsächlich gezählt und nicht geschätzt wurde.';

-- Eine Geldzählung wird nicht nachträglich verbessert. Korrekturen laufen
-- über einen neuen Satz mit Bemerkung, nicht über das Überschreiben des
-- alten — sonst ist der Kassenbericht nicht mehr der, der er war.
create or replace function app.kassenzaehlung_unveraenderbar()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'DELETE' then
    raise exception 'Kassenzählungen werden nicht gelöscht (§§ 145-147 AO).';
  end if;

  if new.machine_id    is distinct from old.machine_id
     or new.collected_at is distinct from old.collected_at
     or new.amount_gross is distinct from old.amount_gross
     or new.change_amount is distinct from old.change_amount
     or new.soll_betrag  is distinct from old.soll_betrag
     or new.stueckelung  is distinct from old.stueckelung
  then
    raise exception 'Eine Kassenzählung wird nicht nachträglich geändert. '
                    'Korrekturen laufen über einen neuen Satz mit Bemerkung.';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_kassenzaehlung_unveraenderbar on public.cash_collection_logs;
create trigger trg_kassenzaehlung_unveraenderbar
  before update or delete on public.cash_collection_logs
  for each row execute function app.kassenzaehlung_unveraenderbar();

-- Was müsste drin sein? Summe der Barverkäufe seit der letzten Leerung.
create or replace function public.bar_soll(p_machine uuid)
returns table (
  seit          timestamptz,
  soll_betrag   numeric,
  anzahl_verkaeufe bigint
)
language sql
stable
security definer
set search_path = public, app
as $$
  with letzte as (
    select coalesce(max(c.collected_at), '-infinity'::timestamptz) as zeitpunkt
      from public.cash_collection_logs c
     where c.machine_id = p_machine
  )
  select l.zeitpunkt,
         coalesce(sum((e.nutzlast->>'betrag')::numeric), 0),
         -- count(e.lfd_nr), nicht count(*): Ohne Treffer liefert der Left Join
         -- trotzdem eine Zeile, und count(*) meldete dann einen Verkauf, den
         -- es nicht gibt.
         count(e.lfd_nr)
    from letzte l
    left join public.terminal_ereignisse e
      on e.art = 'verkauf'
     and e.zahlart = 'bar'
     and e.eingegangen_am > l.zeitpunkt
     and jsonb_typeof(e.nutzlast->'betrag') = 'number'
     -- Zuordnung über die Kennung, nicht nur über terminal_id: Ein Ereignis,
     -- dessen Gerät (noch) nicht in `terminals` steht, kommt mit
     -- terminal_id = null an. Zählte es nicht mit, fehlte sein Betrag im
     -- Soll — und der Kassensturz wiese einen Überschuss aus, den es nicht
     -- gibt. Ein zu niedriges Soll ist beim Bargeld der gefährlichere Fehler.
     and (
           e.terminal_id in (
             select t.id from public.terminals t where t.machine_id = p_machine
           )
           or (e.terminal_id is null and e.terminal_kennung in (
             select t.terminal_kennung from public.terminals t
              where t.machine_id = p_machine
           ))
         )
   group by l.zeitpunkt;
$$;

comment on function public.bar_soll(uuid) is
  'Barverkäufe seit der letzten Leerung. Das Soll für den Kassensturz.';

-- Zählungen mit Differenz. Muss nicht leer sein — muss aber erklärt sein.
create or replace function public.kassendifferenzen(p_tage integer default 180)
returns table (
  machine_id   uuid,
  collected_at timestamptz,
  soll_betrag  numeric,
  ist_betrag   numeric,
  differenz    numeric,
  bemerkung    text
)
language sql
stable
security definer
set search_path = public, app
as $$
  select c.machine_id, c.collected_at, c.soll_betrag, c.amount_gross,
         c.differenz, c.bemerkung
    from public.cash_collection_logs c
   where c.collected_at >= now() - make_interval(days => p_tage)
     and c.soll_betrag is not null
     and c.differenz <> 0
     and (public.auth_has_permission('cash.collect')
          or public.auth_has_permission('finance.view'))
   order by c.collected_at desc;
$$;

comment on function public.kassendifferenzen(integer) is
  'Zählungen, bei denen Ist und Soll auseinandergehen. Eine Differenz ohne '
  'Bemerkung ist der Befund, nicht die Differenz selbst.';

-- ----------------------------------------------------------------------------
-- 3. Welcher Preis galt wann am Automaten?
-- ----------------------------------------------------------------------------
-- Wenn Preise aus der Ferne gesetzt werden, muss nachvollziehbar bleiben,
-- welcher Preis zu welcher Zeit an welchem Fach galt. Sonst lässt sich ein
-- Verkauf von vorletzter Woche nicht mehr nachrechnen — und genau das
-- verlangt die Nachvollziehbarkeit nach GoBD.
--
-- Die Tabelle hält beides: was gelten SOLL (aus `automatenpreis()`) und was
-- der Automat bestätigt hat. Der Unterschied ist wichtig: Ein Preis, den wir
-- gesendet haben, ist noch kein Preis, den das Gerät verlangt.
create table if not exists public.preis_ausspielungen (
  id              uuid primary key default gen_random_uuid(),
  machine_id      uuid not null references public.machines(id) on delete restrict,
  slot_code       text not null,
  product_id      uuid references public.products(id) on delete restrict,
  preis_brutto    numeric(12,2) not null check (preis_brutto >= 0),
  grund           text not null check (grund in ('grundpreis', 'mhd_abschlag', 'aktion', 'manuell')),
  herleitung      jsonb,
  gesendet_am     timestamptz,
  bestaetigt_am   timestamptz,
  fehler          text,
  gilt_ab         timestamptz not null default now(),
  gilt_bis        timestamptz,
  erstellt_am     timestamptz not null default now()
);

create index if not exists idx_preis_ausspielung_aktuell
  on public.preis_ausspielungen (machine_id, slot_code, gilt_ab desc);

create index if not exists idx_preis_ausspielung_offen
  on public.preis_ausspielungen (erstellt_am)
  where bestaetigt_am is null;

comment on table public.preis_ausspielungen is
  'Welcher Preis wann an welchem Fach gelten sollte und ob der Automat es '
  'bestätigt hat. Gesendet ist nicht dasselbe wie gültig.';

-- Was müsste heute an welchem Fach stehen? Vergleich Soll gegen zuletzt
-- bestätigt. Alles, was hier auftaucht, ist ein Fach, an dem der Kunde einen
-- anderen Preis sieht als den, den wir meinen.
create or replace function public.preis_abweichungen(p_machine uuid default null)
returns table (
  machine_id    uuid,
  slot_code     text,
  product_id    uuid,
  soll_brutto   numeric,
  zuletzt_bestaetigt numeric,
  bestaetigt_am timestamptz
)
language sql
stable
security definer
set search_path = public, app
as $$
  with faecher as (
    select ms.machine_id, ms.slot_code, ms.product_id
      from public.machine_slots ms
     where ms.product_id is not null
       and (p_machine is null or ms.machine_id = p_machine)
  ),
  soll as (
    select f.*, (select a.brutto
                   from public.automatenpreis(f.machine_id, f.product_id) a) as brutto
      from faecher f
  ),
  ist as (
    select distinct on (p.machine_id, p.slot_code)
           p.machine_id, p.slot_code, p.preis_brutto, p.bestaetigt_am
      from public.preis_ausspielungen p
     where p.bestaetigt_am is not null
     order by p.machine_id, p.slot_code, p.bestaetigt_am desc
  )
  select s.machine_id, s.slot_code, s.product_id,
         s.brutto, i.preis_brutto, i.bestaetigt_am
    from soll s
    left join ist i
      on i.machine_id = s.machine_id and i.slot_code = s.slot_code
   where s.brutto is not null
     and s.brutto is distinct from i.preis_brutto
     and public.auth_has_permission('prices.manage')
   order by s.machine_id, s.slot_code;
$$;

comment on function public.preis_abweichungen(uuid) is
  'Fächer, an denen der Kunde einen anderen Preis sieht als den gerechneten.';

-- ----------------------------------------------------------------------------
-- 4. Zugriffsschutz und Rechte
-- ----------------------------------------------------------------------------
alter table public.preis_ausspielungen enable row level security;

drop policy if exists pa_ro on public.preis_ausspielungen;
create policy pa_ro on public.preis_ausspielungen
  for select to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid()
                    and p.role in ('system_admin', 'shareholder', 'employee')));

drop policy if exists pa_rw on public.preis_ausspielungen;
create policy pa_rw on public.preis_ausspielungen
  for all to authenticated
  using (public.auth_has_permission('prices.manage'))
  with check (public.auth_has_permission('prices.manage'));

-- Erst alles entziehen, auch `authenticated` (siehe die ausführliche
-- Begründung in 20260914090000): Supabase vergibt Schreibrechte an neue
-- Tabellen automatisch, und ein Revoke ohne diese Rolle lässt sie stehen.
revoke all on public.preis_ausspielungen from public, anon, authenticated;
grant select on public.preis_ausspielungen to authenticated;
-- Schreiben nur, soweit die Policy `prices.manage` verlangt.
grant insert, update, delete on public.preis_ausspielungen to authenticated;

revoke all on function public.bar_soll(uuid)                  from public, anon;
revoke all on function public.kassendifferenzen(integer)      from public, anon;
revoke all on function public.preis_abweichungen(uuid)        from public, anon;
revoke all on function app.kassenzaehlung_unveraenderbar()    from public, anon;

grant execute on function public.bar_soll(uuid)             to authenticated;
grant execute on function public.kassendifferenzen(integer) to authenticated;
grant execute on function public.preis_abweichungen(uuid)   to authenticated;

-- Echtzeit: die Gesellschafter-App soll sehen, wenn ein Preis am Gerät
-- ankommt oder hängen bleibt.
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    begin
      alter publication supabase_realtime add table public.preis_ausspielungen;
    exception when duplicate_object then null;
    end;
  end if;
end;
$$;
