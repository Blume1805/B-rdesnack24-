-- ============================================================================
-- 0080 · Abo-Preise lesbar machen (eine Quelle statt zwei)
-- ----------------------------------------------------------------------------
-- ANLASS
-- Für A3 (Jahresabo als beste Wahl darstellen) braucht die Web-App die
-- aktuell angebotenen Preise. Beim Nachsehen, woher sie die nehmen könnte,
-- stellte sich heraus: nirgendwoher.
--
-- Die Preise standen ausschließlich als CASE-Block in
-- `choose_subscription_plan` — also im Schreibpfad, für keinen Client
-- lesbar. Die naheliegende Alternative wäre `customer_subscriptions`
-- gewesen, aber das ist eine Falle: Dort steht der **historisch
-- vereinbarte** Preis des jeweiligen Kunden, nicht das aktuelle Angebot.
-- Der Bestand belegt das:
--
--     monthly  → 100 Cent · '1 EUR / Monat'      (alt)
--     yearly   → 1000 Cent · '10 EUR / Jahr'     (alt)
--     yearly   →  999 Cent · '9,99 EUR / Jahr'   (aktuell)
--
-- Beides ist richtig so — wer zum alten Preis abgeschlossen hat, zahlt den
-- alten Preis. Eine Ersparnisrechnung („zwei Monate geschenkt") aus diesen
-- Zeilen zu bauen, hätte je nach Kunde etwas anderes ergeben.
--
-- Ohne diese Migration bliebe nur, die Preise im Frontend fest zu
-- verdrahten — dann laufen Anzeige und Abrechnung beim nächsten
-- Preiswechsel auseinander, und zwar unbemerkt.
--
-- LÖSUNG
-- Eine schmale Tabelle als einzige Quelle, dazu eine lesende RPC. Die
-- RPC `choose_subscription_plan` liest jetzt aus derselben Tabelle statt
-- aus ihrem eigenen CASE — ein Preiswechsel ist damit ein UPDATE an einer
-- Stelle, nicht eine Änderung an Funktion und zwei Frontends.
--
-- Warum die Lese-RPC auch für `anon` freigegeben ist: Die Preise stehen
-- ohnehin auf der öffentlichen Landing Page. Die Marketingseite muss sie
-- zeigen können, bevor jemand angemeldet ist. Kein Personenbezug, kein
-- Rückschluss auf Kunden — das ist derselbe Zuschnitt, den 0075 für
-- `lifetime_founders_status()` als Vorlage beschrieben hat.
--
-- GEGENPROBE (in einer zurückgerollten Transaktion, für alle drei Modelle):
-- Die RPC schreibt nach der Umstellung exakt dieselben Werte wie vorher —
-- 99 / '0,99 EUR / Monat', 999 / '9,99 EUR / Jahr', 7999 / '79,99 EUR
-- einmalig (Lifetime · Founders Edition)'. Das Trennzeichen im
-- Lifetime-Text ist ein `·`, kein Bindestrich; beim ersten Befüllen war
-- das falsch und ist hier korrigiert.
-- ============================================================================

create table if not exists app.subscription_plans (
  plan          app.subscription_plan primary key,
  price_cents   integer not null check (price_cents >= 0),
  billing_label text    not null,
  sort_order    integer not null default 0,
  updated_at    timestamptz not null default now()
);

insert into app.subscription_plans (plan, price_cents, billing_label, sort_order) values
  ('monthly',    99, '0,99 EUR / Monat',                                1),
  ('yearly',    999, '9,99 EUR / Jahr',                                 2),
  ('lifetime', 7999, '79,99 EUR einmalig (Lifetime · Founders Edition)', 3)
on conflict (plan) do update
  set price_cents   = excluded.price_cents,
      billing_label = excluded.billing_label,
      sort_order    = excluded.sort_order,
      updated_at    = now();

-- ----------------------------------------------------------------------------
-- Lesezugriff
-- ----------------------------------------------------------------------------
create or replace function public.subscription_plans()
returns table (plan text, price_cents integer, billing_label text, sort_order integer)
language sql
stable
security definer
set search_path = public, app
as $$
  select p.plan::text, p.price_cents, p.billing_label, p.sort_order
    from app.subscription_plans p
   order by p.sort_order;
$$;

revoke execute on function public.subscription_plans() from public;
grant execute on function public.subscription_plans() to anon, authenticated, service_role;

comment on function public.subscription_plans() is
  'Aktuell angebotene Abo-Modelle mit Preis in Cent. Bewusst auch für anon '
  'freigegeben: die Preise stehen ohnehin auf der öffentlichen Landing Page. '
  'Kein Personenbezug. Nicht zu verwechseln mit customer_subscriptions.price_cents '
  '— das ist der historisch vereinbarte Preis des jeweiligen Kunden.';

-- ----------------------------------------------------------------------------
-- Schreibpfad auf dieselbe Quelle umstellen
-- ----------------------------------------------------------------------------
-- Der CASE-Block wird wortgleich gesucht und ersetzt; wird er nicht
-- gefunden, bricht die Migration ab, statt still nichts zu tun.
do $$
declare
  d text;
  alt_preis constant text :=
    E'  v_price := case v_plan\n'
    '    when ''monthly''  then 99\n'
    '    when ''yearly''   then 999\n'
    '    when ''lifetime'' then 7999\n'
    '  end;\n'
    '  v_label := case v_plan\n'
    '    when ''monthly''  then ''0,99 EUR / Monat''\n'
    '    when ''yearly''   then ''9,99 EUR / Jahr''\n'
    '    when ''lifetime'' then ''79,99 EUR einmalig (Lifetime · Founders Edition)''\n'
    '  end;';
  neu constant text :=
    E'  -- Preise stehen seit 0080 in app.subscription_plans, damit Web-App,\n'
    '  -- native App und diese RPC dieselbe Quelle lesen.\n'
    '  select sp.price_cents, sp.billing_label\n'
    '    into v_price, v_label\n'
    '    from app.subscription_plans sp\n'
    '   where sp.plan::text = v_plan::text;\n'
    '  if v_price is null then\n'
    '    raise exception ''Unbekanntes Abo-Modell: %'', v_plan;\n'
    '  end if;';
begin
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'choose_subscription_plan';

  if position(alt_preis in d) = 0 then
    raise exception 'Preisblock nicht wortgleich gefunden — abgebrochen';
  end if;

  d := replace(d, alt_preis, neu);
  execute d;

  if (select count(*) from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
       where ns.nspname = 'public' and p.proname = 'choose_subscription_plan'
         and p.prosrc like '%app.subscription_plans%') <> 1 then
    raise exception 'Umstellung nicht wirksam — abgebrochen';
  end if;
end $$;

-- `create or replace` setzt die ACL zurück — der Entzug aus 0075 muss
-- deshalb erneuert werden, sonst steht die Funktion wieder über PUBLIC offen.
revoke execute on function public.choose_subscription_plan(text, boolean, boolean)
  from public, anon;
grant execute on function public.choose_subscription_plan(text, boolean, boolean)
  to authenticated, service_role;

-- ----------------------------------------------------------------------------
-- OFFEN: die Tabelle hat noch keine RLS-Policy und ist nur über die
-- SECURITY-DEFINER-RPC lesbar. Das genügt, solange niemand direkt auf
-- app.subscription_plans zugreift — das Schema `app` ist nicht Teil der
-- exponierten REST-API. Sollte sich das ändern, braucht sie eine.
-- ----------------------------------------------------------------------------
