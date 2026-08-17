-- ============================================================================
-- 0113 · Punkte fürs tägliche Einloggen
-- ----------------------------------------------------------------------------
-- Geschäftsentscheidung vom 17.08.2026:
--
--   „Wenn der Nutzer sich täglich in der App einloggt, erhält er einen Punkt
--    für den Meilenstein-Bonus. Für die ersten 6 Tage gibt es jeweils einen
--    Punkt. Loggt er sich jeden Tag innerhalb einer Woche ein, bekommt er
--    10 Extrapunkte."
--
-- Nach Rückfrage präzisiert: Der Massstab wird verzehnfacht, weil ein Punkt
-- in diesem System ein Cent Umsatz ist. Mit 1 und 10 wären es 16 Cent pro
-- Woche gewesen — der erste Meilenstein (500 Punkte) wäre allein durch
-- Logins erst nach 31 Wochen erreicht, der Fortschrittsbalken hätte sich
-- praktisch nicht bewegt. Es gilt daher:
--
--   * je Login-Tag                 10 Punkte, für die ersten 6 Tage der Woche
--   * volle Woche (alle 7 Tage)   100 Punkte zusätzlich
--   * Summe je Woche              160 Punkte
--
-- Die Punkte werden am Monatsersten zurückgesetzt — dieselbe Regel wie bei
-- den Umsatzpunkten, hier fällt sie von selbst an, weil nur der laufende
-- Monat gezählt wird.
--
-- **Nicht 640 im Monat.** Der erste Entwurf dieses Kommentars behauptete
-- das, und der Test hat es widerlegt: Ein Kalendermonat ist keine vier
-- Wochen, sondern 4,4. Wer sich im März 2026 jeden Tag einloggt, kommt auf
-- 670. Über drei Jahre nachgerechnet liegt ein lückenlos besuchter Monat
-- zwischen **640 und 760 Punkten**, im Mittel bei 696 — je nachdem, wie
-- die Wochen im Monat liegen. 640 ist die Untergrenze, nicht die Decke.
-- Wer in der Oberfläche eine Obergrenze nennen will, nennt 160 je Woche;
-- das ist die einzige Zahl, die immer stimmt.
--
-- Sammeln darf jeder. Der Gutschein am Meilenstein bleibt Abo-Vorteil
-- (`grant_loyalty_bonuses` steigt ohne Abo weiterhin mit 0 aus). Das ist
-- die bestehende Regel, konsequent fortgeschrieben — und muss in der
-- Oberfläche stehen, sonst ist der volle Balken ohne Gutschein eine
-- Enttäuschung.
--
-- ----------------------------------------------------------------------------
-- Drei Befunde, die diese Migration mitgeprägt haben
--
-- 1. **Es gibt kein Punktekonto.** `my_loyalty_status()` rechnet die Punkte
--    bei jedem Aufruf aus `sum(purchases.total_gross)` aus. Login-Punkte
--    lassen sich deshalb nirgends „dazubuchen". Diese Migration bleibt bei
--    dem Prinzip und speichert nur die nackte Tatsache „an diesem Tag
--    eingeloggt"; die Punkte werden daraus abgeleitet. Das hat den
--    Nebeneffekt, dass eine geänderte Punkteregel rückwirkend richtig
--    rechnet, statt einen Bestand aus alten Regeln mitzuschleppen.
--
-- 2. **Der Gutschein-Auslöser hing allein am Kauf.** `trg_purchase_loyalty`
--    auf `public.purchases` ist die einzige Stelle, die
--    `grant_loyalty_bonuses` ruft. Ohne Nachziehen wäre ein Meilenstein,
--    den jemand durch Logins erreicht, nie ausgezahlt worden: Balken voll,
--    Gutschein weg. `record_daily_login()` ruft die Vergabe deshalb selbst
--    auf.
--
-- 3. **Zwei von vier Konten haben keine `customers`-Zeile.** Nachgesehen,
--    nicht vermutet: `loyalty_bonus_grants.customer_id` und
--    `personal_offers.customer_id` verweisen auf `public.customers(id)`.
--    Ein ungeprüfter Aufruf aus dem Login-Pfad hätte Admin und
--    Gesellschafter einen Fremdschlüsselfehler beim Anmelden beschert.
--    `record_daily_login()` steigt für solche Konten früh und ruhig aus.
--
-- ----------------------------------------------------------------------------
-- Warum der Tag aus Berlin kommt und nicht vom Gerät
--
-- Die Datenbank läuft auf UTC (nachgesehen: `current_setting('TimeZone')`
-- = UTC). Mit `current_date` zählte ein Login um 01:30 Uhr deutscher Zeit
-- auf den Vortag — im Sommer wäre täglich zwei Stunden lang der falsche
-- Kasten markiert. Gerechnet wird deshalb mit
-- `(now() at time zone 'Europe/Berlin')::date`.
--
-- Vom Client darf das Datum ohnehin nicht kommen: Wer die Uhr seines
-- Telefons vorstellt, hätte sonst in einer Minute eine volle Woche
-- zusammen.
--
-- Der Monatsanfang wird aus demselben Grund auf Berliner Zeit umgestellt.
-- Sonst lägen Tagesgrenze und Monatsgrenze zwei Stunden auseinander, und
-- am Monatsersten zwischen 00:00 und 02:00 gehörten die Punkte eines Tages
-- in den einen, der Tag selbst in den anderen Monat.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Der gemeinsame Kalendertag.
-- ----------------------------------------------------------------------------
create or replace function app.heute()
returns date
language sql
stable
set search_path = public, app
as $$ select (now() at time zone 'Europe/Berlin')::date; $$;

comment on function app.heute() is
  'Heutiger Kalendertag in deutscher Zeit. Die Datenbank läuft auf UTC — '
  'current_date wechselt deshalb um 01:00/02:00 Uhr deutscher Zeit und '
  'nicht um Mitternacht.';

-- ----------------------------------------------------------------------------
-- Die Login-Tage. Eine Zeile je Kunde und Tag, mehr nicht.
-- ----------------------------------------------------------------------------
create table if not exists public.customer_login_days (
  customer_id uuid not null
              references public.customers(id) on delete cascade,
  day         date not null,
  recorded_at timestamptz not null default now(),
  primary key (customer_id, day)
);

comment on table public.customer_login_days is
  'Tage, an denen der Kunde die App geöffnet hat. Grundlage der '
  'Login-Punkte. Bewusst ohne Uhrzeit, ohne Gerät, ohne IP: Für die '
  'Punkteregel genügt der Tag, und was nicht erhoben wird, muss auch '
  'nicht geschützt werden.';

comment on column public.customer_login_days.day is
  'Kalendertag in deutscher Zeit (app.heute()), nicht UTC und nicht vom '
  'Client.';

alter table public.customer_login_days enable row level security;
revoke all on public.customer_login_days from anon, authenticated;

-- Kein direkter Lesezugriff, auch nicht auf die eigenen Zeilen. Der Weg
-- führt ausschliesslich über die Funktionen unten. Eine Tabelle ohne
-- Lesepolicy bleibt für anon und authenticated unsichtbar, selbst wenn
-- später versehentlich ein GRANT gesetzt wird.

-- ----------------------------------------------------------------------------
-- Punkte aus Logins im angegebenen Monat.
-- ----------------------------------------------------------------------------
-- Die Regel ist wochenweise, die Auszahlung monatlich — beides muss
-- zusammenpassen, auch wenn eine Woche über den Monatswechsel läuft.
-- Deshalb wird jeder Tag innerhalb SEINER Woche durchnummeriert:
--
--   Platz 1–6  →  10 Punkte, dem Monat des jeweiligen Tages zugerechnet
--   Platz 7    →   0 Punkte, dafür 100 für die volle Woche, dem Monat
--                  des Sonntags zugerechnet
--
-- Beispiel Woche Mo 29.06. bis So 05.07., alle sieben Tage eingeloggt:
-- Juni bekommt 20 (die Plätze 1 und 2), Juli 40 (Plätze 3 bis 6) plus 100
-- am Sonntag. Zusammen 160, aufgeteilt nach der Regel „Reset am Ersten".
--
-- `date_trunc('week', ...)` beginnt in PostgreSQL am Montag — genau die
-- Woche, die auch in der Übersicht gezeigt wird.
create or replace function app.login_points(p_customer uuid, p_month_start date)
returns int
language sql
stable
set search_path = public, app
as $$
  with tage as (
    select
      d.day,
      row_number() over (
        partition by date_trunc('week', d.day) order by d.day
      ) as platz,
      count(*) over (partition by date_trunc('week', d.day)) as tage_der_woche
    from public.customer_login_days d
    where d.customer_id = p_customer
  )
  select coalesce(sum(
      case when platz <= 6 then 10 else 0 end
    + case when tage_der_woche = 7 and platz = 7 then 100 else 0 end
  ), 0)::int
  from tage
  where day >= p_month_start
    and day <  (p_month_start + interval '1 month')::date;
$$;

comment on function app.login_points(uuid, date) is
  'Punkte aus Logins im angegebenen Monat: 10 je Tag für die ersten sechs '
  'Tage einer Woche, 100 zusätzlich für die volle Woche. 160 je Woche; ein '
  'lückenlos besuchter Kalendermonat ergibt je nach Wochenlage 640 bis 760 '
  'Punkte.';

-- ----------------------------------------------------------------------------
-- Die Wochenübersicht als Bauplan für die Anzeige.
-- ----------------------------------------------------------------------------
-- Liefert sieben Kästen von Montag bis Sonntag mit der Angabe, ob an
-- diesem Tag eingeloggt wurde. Tage in der Zukunft sind ausdrücklich als
-- solche gekennzeichnet, damit die Oberfläche „noch nicht" nicht wie
-- „verpasst" darstellt — das ist der Unterschied zwischen einer
-- Ermutigung und einem Vorwurf.
create or replace function app.login_week(p_customer uuid)
returns jsonb
language sql
stable
set search_path = public, app
as $$
  with grenzen as (
    select
      date_trunc('week', app.heute())::date            as wochenstart,
      (date_trunc('week', app.heute()) + interval '6 days')::date as wochenende,
      date_trunc('month', app.heute())::date           as monatsstart,
      app.heute()                                      as heute
  ),
  kaesten as (
    select
      g.wochenstart + i as tag,
      exists (
        select 1 from public.customer_login_days d
        where d.customer_id = p_customer
          and d.day = g.wochenstart + i
      ) as eingeloggt,
      (g.wochenstart + i) > g.heute as zukunft
    from grenzen g, generate_series(0, 6) as i
  )
  select jsonb_build_object(
    'week_start',      (select wochenstart from grenzen),
    'week_end',        (select wochenende  from grenzen),
    'today',           (select heute       from grenzen),
    'days',            (select jsonb_agg(jsonb_build_object(
                                'day',        tag,
                                'logged_in',  eingeloggt,
                                'future',     zukunft
                              ) order by tag)
                        from kaesten),
    'days_logged_in',  (select count(*) from kaesten where eingeloggt),
    'week_complete',   (select count(*) = 7 from kaesten where eingeloggt),
    'points_per_day',  10,
    'streak_bonus',    100,
    'points_max_week', 160,
    'login_points_month',
                       app.login_points(p_customer,
                                        (select monatsstart from grenzen))
  );
$$;

comment on function app.login_week(uuid) is
  'Sieben Kästen Montag bis Sonntag mit Login-Status, plus die '
  'Punkte-Eckwerte für die Anzeige. Tage in der Zukunft sind markiert, '
  'damit „noch nicht" nicht wie „verpasst" aussieht.';

-- ----------------------------------------------------------------------------
-- Für die Anzeige ohne Buchung — beim erneuten Öffnen am selben Tag.
-- ----------------------------------------------------------------------------
create or replace function public.my_login_week()
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
begin
  if auth.uid() is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;
  return app.login_week(auth.uid());
end;
$$;

comment on function public.my_login_week() is
  'Wochenübersicht des angemeldeten Kunden, ohne etwas zu buchen.';

revoke all on function public.my_login_week() from public, anon;
grant execute on function public.my_login_week() to authenticated;

-- ----------------------------------------------------------------------------
-- Der Login selbst: Tag festhalten, Meilensteine prüfen, Übersicht liefern.
-- ----------------------------------------------------------------------------
-- Darf beliebig oft am Tag aufgerufen werden. Der zweite Aufruf bucht
-- nichts mehr und meldet `awarded = 0` — daran erkennt die Oberfläche, dass
-- sie die Animation nicht erneut abspielen soll. Das ist wichtiger, als es
-- klingt: Supabase feuert `SIGNED_IN` auch beim stündlichen Token-Refresh.
-- Wer die Animation an das Auth-Ereignis hängt, zeigt sie jede Stunde.
create or replace function public.record_daily_login()
returns jsonb
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_uid        uuid := auth.uid();
  v_heute      date := app.heute();
  v_monat      date := date_trunc('month', app.heute())::date;
  v_zeilen     int;
  v_vorher     int;
  v_nachher    int;
  v_woche      jsonb;
begin
  if v_uid is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;

  -- Konten ohne Kundenzeile (Admin, Gesellschafter, Mitarbeiter) nehmen am
  -- Punktesystem nicht teil. Ohne diese Prüfung liefe der Insert unten in
  -- eine Fremdschlüsselverletzung und der Login schlüge fehl.
  if not exists (select 1 from public.customers c where c.id = v_uid) then
    return jsonb_build_object('participates', false);
  end if;

  v_vorher := app.login_points(v_uid, v_monat);

  insert into public.customer_login_days(customer_id, day)
  values (v_uid, v_heute)
  on conflict (customer_id, day) do nothing;
  get diagnostics v_zeilen = row_count;

  v_nachher := app.login_points(v_uid, v_monat);

  -- Nur wenn heute wirklich etwas dazugekommen ist, kann ein Meilenstein
  -- gefallen sein. Die Vergabe prüft das Abo selbst und steigt ohne mit 0
  -- aus — sammeln darf jeder, den Gutschein bekommt nur, wer zahlt.
  if v_zeilen > 0 then
    perform app.grant_loyalty_bonuses(v_uid);
  end if;

  v_woche := app.login_week(v_uid);

  return v_woche || jsonb_build_object(
    'participates',  true,
    -- Heute zum ersten Mal gezählt? Steuert, ob die Animation läuft.
    'counted_today', v_zeilen > 0,
    -- Was gerade gutgeschrieben wurde: 10 an gewöhnlichen Tagen, 110 am
    -- Sonntag einer vollen Woche (der siebte Tag selbst bringt keine
    -- Tagespunkte, dafür die 100 für die Woche).
    'awarded',       v_nachher - v_vorher,
    -- Damit die Oberfläche ehrlich bleiben kann: Ohne Abo wächst der
    -- Balken, aber am Meilenstein kommt kein Gutschein.
    'benefits_active', app.has_subscription(v_uid)
  );
end;
$$;

comment on function public.record_daily_login() is
  'Hält den heutigen Login fest, prüft die Meilensteine und liefert die '
  'Wochenübersicht. Mehrfachaufruf am selben Tag bucht nichts und meldet '
  'awarded = 0 — daran erkennt die Oberfläche, dass die Animation nicht '
  'erneut laufen soll.';

revoke all on function public.record_daily_login() from public, anon;
grant execute on function public.record_daily_login() to authenticated;

-- ----------------------------------------------------------------------------
-- Punktestand: Umsatz plus Logins.
-- ----------------------------------------------------------------------------
-- Vollständige Neudefinition von 0016. Geändert sind genau zwei Dinge:
-- der Monatsanfang kommt aus app.heute(), und die Login-Punkte kommen
-- hinzu. Die Rückgabespalten bleiben unverändert, damit die vorhandenen
-- Aufrufer in App und Web weiterlaufen.
create or replace function public.my_loyalty_status()
returns table (
  points          int,
  next_tier       int,
  points_to_next  int,
  reached_tiers   int[],
  month_start     date,
  next_reset      date
)
language plpgsql
security definer
set search_path = public, app
stable
as $$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
  v_next_reset  date := (date_trunc('month', app.heute()) + interval '1 month')::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_tiers       int[] := app.loyalty_milestones();
  v_reached     int[] := array[]::int[];
  v_next        int;
  v_to_next     int;
  t             int;
begin
  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = auth.uid()
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(auth.uid(), v_month_start);

  foreach t in array v_tiers loop
    if v_pts >= t then
      v_reached := v_reached || t;
    end if;
  end loop;

  v_next := null;
  foreach t in array v_tiers loop
    if v_pts < t then
      v_next := t;
      exit;
    end if;
  end loop;

  if v_next is null then
    v_to_next := 0;
  else
    v_to_next := v_next - v_pts;
  end if;

  return query select
    v_pts, v_next, v_to_next, v_reached, v_month_start, v_next_reset;
end;
$$;

comment on function public.my_loyalty_status() is
  'Punktestand des laufenden Monats: 1 Punkt je Cent Umsatz plus '
  'Login-Punkte (10 je Tag, 100 je voller Woche). Reset am Monatsersten.';

-- ----------------------------------------------------------------------------
-- Meilenstein-Vergabe: gleiche Punktequelle wie die Anzeige.
-- ----------------------------------------------------------------------------
-- Volle Neudefinition auf dem Stand, der tatsächlich in der Datenbank
-- steht (per pg_get_functiondef geholt, nicht aus einer alten Migration
-- abgeschrieben). Geändert sind dieselben zwei Dinge wie oben. Alles
-- andere — Abo-Gate, Produktauswahl, Rabattstufen, 14 Tage Gültigkeit —
-- bleibt Zeichen für Zeichen erhalten.
--
-- Dass Anzeige und Vergabe dieselbe Punktzahl sehen, ist kein Detail: Wenn
-- sie auseinanderlaufen, zeigt die App einen erreichten Meilenstein ohne
-- Gutschein an. Genau dieser Fall musste in 0037 schon einmal repariert
-- werden.
create or replace function app.grant_loyalty_bonuses(p_customer_id uuid)
returns int
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_granted     int := 0;
  v_tier        int;
  v_offer       public.personal_offers;
  v_product     public.products%rowtype;
  v_regular     numeric(12,2);
  v_discount    numeric(5,2);
begin
  if not app.has_subscription(p_customer_id) then
    return 0;
  end if;

  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = p_customer_id
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(p_customer_id, v_month_start);

  foreach v_tier in array app.loyalty_milestones() loop
    exit when v_pts < v_tier;
    if exists (
      select 1 from public.loyalty_bonus_grants
      where customer_id = p_customer_id
        and month_start = v_month_start
        and tier = v_tier
    ) then
      continue;
    end if;

    v_discount := case v_tier
      when 500  then  5.0
      when 1200 then 10.0
      when 2000 then 15.0
      when 3000 then 25.0
      else 5.0
    end;

    select p.* into v_product
    from public.products p
    join public.purchase_items pi on pi.product_id = p.id
    join public.purchases pu       on pu.id = pi.purchase_id
    where pu.customer_id = p_customer_id
      and pu.purchased_at > now() - interval '90 days'
      and p.status = 'active' and p.list_price_net is not null
    group by p.id
    order by sum(pi.quantity) desc, random()
    limit 1;

    if not found then
      select * into v_product
      from public.products
      where status = 'active' and list_price_net is not null and list_price_net > 0
      order by random()
      limit 1;
    end if;
    if not found then continue; end if;

    v_regular := v_product.list_price_net;

    insert into public.personal_offers(
      customer_id, product_id, title,
      regular_price_net, offer_price_net, discount_percent,
      redemption_code, valid_from, valid_to, image_url, source
    ) values (
      p_customer_id, v_product.id, v_product.name,
      v_regular,
      round(v_regular * (1 - v_discount/100.0), 2),
      v_discount,
      app.generate_redemption_code(),
      now(),
      now() + interval '14 days',
      v_product.image_url,
      'loyalty'
    )
    returning * into v_offer;

    insert into public.loyalty_bonus_grants(customer_id, month_start, tier, offer_id)
    values (p_customer_id, v_month_start, v_tier, v_offer.id)
    on conflict do nothing;

    v_granted := v_granted + 1;
  end loop;

  return v_granted;
end;
$$;

comment on function app.grant_loyalty_bonuses(uuid) is
  'Vergibt Meilenstein-Gutscheine. Punktequelle identisch mit '
  'my_loyalty_status(): Umsatz plus Login-Punkte. Ohne aktives Abo werden '
  'keine Gutscheine vergeben — gesammelt wird trotzdem.';

-- ----------------------------------------------------------------------------
-- Aufbewahrung: was nicht mehr gebraucht wird, wird gelöscht.
-- ----------------------------------------------------------------------------
-- Für die Punkte zählt der laufende Monat, für die Übersicht die laufende
-- Woche. Alles, was älter als 90 Tage ist, hat keinen Zweck mehr — und
-- Login-Zeiten sind Verhaltensdaten, die ohne Zweck nicht liegen bleiben
-- dürfen (Art. 5 Abs. 1 lit. e DSGVO). Die 90 Tage geben Luft für
-- Rückfragen zu einem strittigen Gutschein aus dem Vormonat.
create or replace function app.purge_login_days()
returns int
language plpgsql
security definer
set search_path = public, app
as $$
declare v_geloescht int;
begin
  delete from public.customer_login_days
  where day < app.heute() - 90;
  get diagnostics v_geloescht = row_count;
  return v_geloescht;
end;
$$;

comment on function app.purge_login_days() is
  'Löscht Login-Tage älter als 90 Tage. Für Punkte zählt der laufende '
  'Monat, für die Übersicht die laufende Woche — länger gibt es keinen '
  'Zweck (Art. 5 Abs. 1 lit. e DSGVO).';

revoke all on function app.purge_login_days() from public, anon, authenticated;

-- Täglich um 03:15 Uhr, wenn pg_cron vorhanden ist. Der Block schluckt
-- einen fehlenden Scheduler bewusst: Die Migration soll auch auf einer
-- lokalen Instanz ohne pg_cron durchlaufen.
do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule('purge_login_days')
      where exists (select 1 from cron.job where jobname = 'purge_login_days');
    perform cron.schedule('purge_login_days', '15 3 * * *',
                          $job$select app.purge_login_days();$job$);
  end if;
end;
$$;

-- ----------------------------------------------------------------------------
-- KI-Register: neue Quelle für Meilenstein-Gutscheine.
-- ----------------------------------------------------------------------------
-- Hausregel aus CLAUDE.md: Jede algorithmisch oder regelbasiert erzeugte
-- Auswahl im Kundenbereich wird eingetragen und sichtbar gekennzeichnet —
-- unabhängig davon, ob Art. 50 EU AI Act greift. Er greift hier nicht: Die
-- Regel „10 Punkte je Tag" lernt nichts, schliesst nichts und modelliert
-- nichts. Sie ist trotzdem der Grund, warum jemand einen Gutschein
-- bekommt, und das muss der Kunde nachlesen können.
--
-- `kennzeichnung_umgesetzt` steht bewusst auf false: Der Chip an der
-- Wochenübersicht existiert noch nicht, weil die Oberfläche noch nicht
-- gebaut ist. Die Ampel steht deshalb auf gelb und fällt erst auf grün,
-- wenn der Chip steht. Ein Register, das Vorhaben als erledigt führt,
-- wäre schlimmer als keines.
insert into public.ki_register (
  key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling, ist_ki_system,
  ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, manipulationsrisiko, deepfake_risiko,
  ampel, aktiv, begruendung, geprueft_am, geprueft_von
) values (
  'loyalty_login_points',
  'Punkte für tägliches Einloggen',
  'Bördesnack24 App und Web',
  null,
  'keine',
  'Wer die App öffnet, sammelt Punkte auf dieselben Meilensteine wie beim '
  'Einkauf: 10 je Tag, 100 zusätzlich für eine vollständige Woche. Bei '
  'Erreichen eines Meilensteins entsteht ein persönlicher Gutschein.',
  array['login_tag'],
  true,
  true,
  false,
  'kein_ki_system',
  'mittel',
  'Art. 6 Abs. 1 lit. b DSGVO',
  false,
  false,
  false,
  false,
  false,
  false,
  'gelb',
  true,
  'Feste Rechenregel ohne Lernen, Schliessen oder Modellieren — damit kein '
  'KI-System nach Art. 3 Nr. 1 EU AI Act und von Art. 50 nicht erfasst. '
  'Als Profiling geführt, weil aus dem Nutzungsverhalten ein geldwerter '
  'Vorteil abgeleitet wird (Art. 4 Nr. 4 DSGVO, Widerspruchsrecht nach '
  'Art. 21). Für Abonnenten Vertragserfüllung nach lit. b, weil das '
  'Punktesystem Teil der zugesagten Leistung ist; wer ohne Abo sammelt, '
  'erhält keinen Gutschein — dort trägt lit. f. Gespeichert wird nur der '
  'Kalendertag, keine Uhrzeit, kein Gerät, keine IP; Löschung nach 90 '
  'Tagen durch app.purge_login_days(). Ampel gelb bis der Hinweis-Chip an '
  'der Wochenübersicht steht.',
  date '2026-08-17',
  'Claude Code'
)
on conflict (key) do update set
  bezeichnung = excluded.bezeichnung,
  zweck       = excluded.zweck,
  begruendung = excluded.begruendung,
  geprueft_am = excluded.geprueft_am;
