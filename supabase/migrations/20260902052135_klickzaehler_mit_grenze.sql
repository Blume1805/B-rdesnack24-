-- ===========================================================================
-- S-12: Der Klickzähler des Werbenetzes lässt sich nicht mehr beliebig
--       hochzählen.
--
-- Vorgeschichte: R-2 hat der Rolle `anon` das Ausführungsrecht entzogen —
-- vorher konnte jeder ohne Konto zählen. Geblieben war: jedes
-- **angemeldete** Konto konnte `advertising_redirect_count` beliebig oft
-- für eine beliebige Kampagne aufrufen. Im Durchlauf über alle 48
-- Verwaltungs-RPCs war es die einzige Funktion, die einen Kundenaufruf
-- nicht abgewiesen hat.
--
-- Warum das mehr als ein Schönheitsfehler ist: Der Zähler ist die
-- Grundlage der Berichte an Werbekunden — `advertising_campaign_report`
-- liest ihn. Eine Zahl, die der Empfänger der Rechnung selbst erhöhen
-- kann (oder ein Wettbewerber zu seinen Lasten), ist als Nachweis
-- wertlos und als Abrechnungsgrundlage angreifbar.
--
-- Die Korrektur zählt weiterhin Klicks, aber je Konto und Tag höchstens
-- `app.klick_obergrenze_je_konto()`. Was darüber liegt, wird im
-- Detailsatz mitgeschrieben (damit Missbrauch sichtbar wird), fließt aber
-- nicht in den berichteten Wert ein. Das ist bewusst keine
-- Betrugserkennung, sondern die einfachste Regel, die die Zahl wieder
-- belastbar macht.
--
-- Nicht gelöst ist damit der anonyme Fall: Wer den Weiterleitungslink
-- ohne Anmeldung öffnet, wird gar nicht gezählt. Der ehrliche Weg dorthin
-- ist eine Edge Function mit eigener Frequenzbegrenzung — sie steht in
-- der Roadmap und ist hier ausdrücklich nicht behauptet.
-- ===========================================================================

create or replace function app.klick_obergrenze_je_konto()
returns integer language sql immutable as $$ select 3 $$;

comment on function app.klick_obergrenze_je_konto() is
  'Wie viele Klicks eines Kontos je Kampagne und Tag in den berichteten '
  'Zähler eingehen. Bewusst niedrig: mehr als drei Klicks derselben '
  'Person auf dieselbe Anzeige am selben Tag sind kein Interesse mehr.';

create table if not exists public.advertising_redirect_actors (
  campaign_id uuid not null references public.advertising_campaigns (id) on delete cascade,
  day         date not null default current_date,
  profile_id  uuid not null references public.profiles (id) on delete cascade,
  count       integer not null default 0,
  gezaehlt    integer not null default 0,
  primary key (campaign_id, day, profile_id)
);

comment on table public.advertising_redirect_actors is
  'Klicks je Konto, Kampagne und Tag. `count` sind alle Aufrufe, '
  '`gezaehlt` die davon in den Bericht eingegangenen. Die Differenz ist '
  'der Missbrauchsverdacht (S-12, 02.09.2026).';

alter table public.advertising_redirect_actors enable row level security;

-- Kein GRANT für anon/authenticated: die Tabelle ist ausschliesslich über
-- die SECURITY-DEFINER-Funktion erreichbar. Intern lesen darf, wer auch
-- den Zähler lesen darf.
grant select on public.advertising_redirect_actors to service_role;
grant all    on public.advertising_redirect_actors to service_role;

create or replace function public.advertising_redirect_count(p_campaign uuid)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid    uuid := auth.uid();
  v_grenze int  := app.klick_obergrenze_je_konto();
  v_bisher int;
begin
  if v_uid is null then
    -- Ohne Konto wird nicht gezählt. Kein Fehler nach aussen: die
    -- Weiterleitung selbst soll funktionieren, auch wenn sie nicht in
    -- die Statistik eingeht.
    return;
  end if;

  if not exists (select 1 from public.advertising_campaigns
                 where id = p_campaign and deleted_at is null) then
    return;
  end if;

  insert into public.advertising_redirect_actors (campaign_id, day, profile_id, count)
  values (p_campaign, current_date, v_uid, 1)
  on conflict (campaign_id, day, profile_id) do update
    set count = advertising_redirect_actors.count + 1
  returning count into v_bisher;

  if v_bisher > v_grenze then
    -- Über der Grenze: mitschreiben, aber nicht berichten.
    return;
  end if;

  update public.advertising_redirect_actors
     set gezaehlt = gezaehlt + 1
   where campaign_id = p_campaign and day = current_date and profile_id = v_uid;

  insert into public.advertising_redirect_counts (campaign_id, day, count)
  values (p_campaign, current_date, 1)
  on conflict (campaign_id, day) do update
    set count = advertising_redirect_counts.count + 1;
end;
$function$;

comment on function public.advertising_redirect_count(uuid) is
  'Zählt einen Klick. Je Konto, Kampagne und Tag gehen höchstens '
  'app.klick_obergrenze_je_konto() Klicks in den berichteten Zähler ein '
  '(S-12, 02.09.2026). Aufrufe ohne Anmeldung zählen nicht.';
