-- Werbe-Analytics für Geschäftskunden.
--
-- Die tragende Entscheidung dieser Migration: der Werbekunde bekommt nie
-- Zugriff auf eine Zeile, in der ein einzelner Nutzer vorkommt. Zwischen den
-- Rohdaten und dem Dashboard liegt eine Verdichtungsstufe, und die Rohdaten
-- haben RLS ohne eine einzige Policy — sie sind auch für angemeldete
-- Verwaltungskonten über die Tabelle nicht erreichbar, nur über Funktionen,
-- die ausdrücklich dafür geschrieben wurden.

create type app.werbe_event_art as enum (
  'impression',        -- Werbemittel wurde ausgeliefert
  'view',              -- Werbemittel war sichtbar
  'view_3s',           -- mindestens drei Sekunden sichtbar
  'click',             -- Klick auf den hinterlegten Verweis
  'qr_scan',
  'landingpage_view',
  'coupon_view',
  'coupon_activate',
  'coupon_redeem'
);

create type app.werbe_kanal as enum (
  'app', 'automat_display', 'automat_flaeche', 'qr_code',
  'website', 'social_media', 'coupon'
);

-- ---------------------------------------------------------------------------
-- 1. Rohdaten
-- ---------------------------------------------------------------------------
create table if not exists public.advertising_events (
  id          bigint generated always as identity primary key,
  campaign_id uuid not null references public.advertising_campaigns(id) on delete cascade,
  creative_id uuid references public.advertising_creatives(id) on delete set null,
  location_id uuid references public.locations(id) on delete set null,
  kanal       app.werbe_kanal not null,
  art         app.werbe_event_art not null,
  profile_id  uuid not null,
  dauer_ms    int,
  occurred_at timestamptz not null default now()
);

comment on table public.advertising_events is
  'Rohe Werbekontakte. Enthält personenbezogene Daten (profile_id) und ist '
  'deshalb ausschließlich intern. RLS ist eingeschaltet und es gibt '
  'absichtlich KEINE Policy — kein angemeldetes Konto kommt über die Tabelle '
  'an eine Zeile, auch die Verwaltung nicht. Der Werbekunde sieht nur die '
  'Verdichtung in advertising_daily_metrics.';

comment on column public.advertising_events.profile_id is
  'Nur für die Zählung eindeutiger Kontakte und für die Missbrauchsgrenze. '
  'Verlässt diese Tabelle nie. Wird nach der in app.betriebsparameter '
  'hinterlegten Frist gelöscht, die Verdichtung bleibt.';

create index if not exists advertising_events_verdichtung_idx
  on public.advertising_events (campaign_id, occurred_at);
create index if not exists advertising_events_tag_idx
  on public.advertising_events (((occurred_at at time zone 'Europe/Berlin')::date));

alter table public.advertising_events enable row level security;

-- ---------------------------------------------------------------------------
-- 2. Verdichtung
-- ---------------------------------------------------------------------------
create table if not exists public.advertising_daily_metrics (
  campaign_id uuid not null references public.advertising_campaigns(id) on delete cascade,
  tag         date not null,
  kanal       app.werbe_kanal not null,
  creative_id uuid,
  location_id uuid,
  impressions      int not null default 0,
  views            int not null default 0,
  views_3s         int not null default 0,
  clicks           int not null default 0,
  qr_scans         int not null default 0,
  coupon_views     int not null default 0,
  coupon_aktivierungen int not null default 0,
  coupon_einloesungen  int not null default 0,
  kontakte         int not null default 0,
  verdichtet_am    timestamptz not null default now(),
  primary key (campaign_id, tag, kanal, creative_id, location_id)
);

comment on table public.advertising_daily_metrics is
  'Tagesverdichtung je Kampagne, Kanal, Werbemittel und Standort. Enthält nur '
  'noch Summen. kontakte ist die Zahl unterschiedlicher angemeldeter '
  'Sitzungen an diesem Tag in dieser Zelle — Tageszahlen lassen sich deshalb '
  'nicht zu einer Monatszahl addieren, ohne doppelt zu zählen. Auch diese '
  'Tabelle hat bewusst keine Policy: der Weg zum Werbekunden führt '
  'ausschließlich über advertising_campaign_analytics, weil nur dort die '
  'Mindestgruppengröße greift.';

alter table public.advertising_daily_metrics enable row level security;

-- Der Primärschlüssel verträgt keine NULL-Werte. creative_id und location_id
-- sind aber oft unbekannt, deshalb ein Platzhalter statt NULL.
create or replace function app.werbe_nil() returns uuid
language sql immutable as $$ select '00000000-0000-0000-0000-000000000000'::uuid $$;

-- ---------------------------------------------------------------------------
-- 3. Erfassung
-- ---------------------------------------------------------------------------
create or replace function public.advertising_event_record(
  p_campaign uuid,
  p_art      app.werbe_event_art,
  p_kanal    app.werbe_kanal default 'app',
  p_creative uuid default null,
  p_location uuid default null,
  p_dauer_ms int default null
) returns void
language plpgsql security definer set search_path to 'public','app' as $$
declare
  v_uid    uuid := auth.uid();
  v_heute  int;
  v_grenze int := app.parameter_zahl('analytics.events_je_konto_tag', 500);
begin
  -- Ohne Anmeldung wird nichts gezählt. Das ist eine bewusste Einschränkung:
  -- eine anonyme Zählung ließe sich beliebig aufblasen, und eine Zahl, für
  -- die niemand geradestehen kann, ist im Werbebericht nichts wert. Die
  -- bestehende Klickzählung in advertising_redirect_count hält es genauso.
  if v_uid is null then
    return;
  end if;

  if not exists (select 1 from public.advertising_campaigns
                 where id = p_campaign and deleted_at is null
                   and status in ('active', 'approved')) then
    return;
  end if;

  -- Missbrauchsgrenze: ein einzelnes Konto kann den Bericht nicht fluten.
  select count(*) into v_heute
  from public.advertising_events
  where campaign_id = p_campaign and profile_id = v_uid
    and (occurred_at at time zone 'Europe/Berlin')::date = app.heute();
  if v_heute >= v_grenze then
    return;
  end if;

  -- Drei Sekunden sind drei Sekunden. Wer view_3s meldet, aber weniger
  -- mitschickt, bekommt ein view — die Kennzahl im Bericht heißt so, wie sie
  -- gemessen wurde, oder sie heißt anders.
  insert into public.advertising_events
    (campaign_id, creative_id, location_id, kanal, art, profile_id, dauer_ms)
  values (
    p_campaign, p_creative, p_location, p_kanal,
    case when p_art = 'view_3s' and coalesce(p_dauer_ms, 0) < 3000
         then 'view'::app.werbe_event_art else p_art end,
    v_uid, p_dauer_ms
  );
end;
$$;

comment on function public.advertising_event_record is
  'Nimmt einen Werbekontakt auf. Zählt nur in angemeldeten Sitzungen und nur '
  'für laufende Kampagnen. Meldet nie einen Fehler zurück — ein Werbezähler '
  'darf die Oberfläche nicht stören.';

create or replace function app.werbe_events_verdichten(p_tag date default null)
returns int
language plpgsql security definer set search_path to 'public','app' as $$
declare
  v_tag   date := coalesce(p_tag, app.heute() - 1);
  v_zahl  int;
begin
  delete from public.advertising_daily_metrics where tag = v_tag;

  insert into public.advertising_daily_metrics (
    campaign_id, tag, kanal, creative_id, location_id,
    impressions, views, views_3s, clicks, qr_scans,
    coupon_views, coupon_aktivierungen, coupon_einloesungen, kontakte
  )
  select
    e.campaign_id, v_tag, e.kanal,
    coalesce(e.creative_id, app.werbe_nil()),
    coalesce(e.location_id, app.werbe_nil()),
    count(*) filter (where e.art = 'impression'),
    count(*) filter (where e.art in ('view', 'view_3s')),
    count(*) filter (where e.art = 'view_3s'),
    count(*) filter (where e.art = 'click'),
    count(*) filter (where e.art = 'qr_scan'),
    count(*) filter (where e.art = 'coupon_view'),
    count(*) filter (where e.art = 'coupon_activate'),
    count(*) filter (where e.art = 'coupon_redeem'),
    count(distinct e.profile_id)
  from public.advertising_events e
  where (e.occurred_at at time zone 'Europe/Berlin')::date = v_tag
  group by e.campaign_id, e.kanal,
           coalesce(e.creative_id, app.werbe_nil()),
           coalesce(e.location_id, app.werbe_nil());

  get diagnostics v_zahl = row_count;
  return v_zahl;
end;
$$;

comment on function app.werbe_events_verdichten(date) is
  'Verdichtet einen Tag. Löscht die Zeilen dieses Tages vorher, ist also '
  'wiederholbar. views zählt view und view_3s zusammen, weil ein langer '
  'Kontakt auch ein Kontakt ist — sonst wäre views_3s größer als views.';

create or replace function app.werbe_events_aufraeumen()
returns int
language plpgsql security definer set search_path to 'public','app' as $$
declare v_zahl int;
begin
  delete from public.advertising_events
  where occurred_at < now()
      - make_interval(days => app.parameter_zahl('analytics.rohdaten_tage', 90));
  get diagnostics v_zahl = row_count;
  return v_zahl;
end;
$$;

comment on function app.werbe_events_aufraeumen() is
  'Löscht die personenbezogenen Rohdaten nach Ablauf der Frist. Die '
  'Verdichtung bleibt erhalten — sie enthält keinen Personenbezug mehr. '
  'Muss regelmäßig laufen; ohne diesen Lauf sammeln sich Kontaktdaten an, '
  'für die es keinen Zweck mehr gibt.';

-- ---------------------------------------------------------------------------
-- 4. Datenschutzschicht
-- ---------------------------------------------------------------------------
create or replace function app.analytics_schwelle() returns int
language sql stable security definer set search_path to 'public','app' as $$
  select app.parameter_zahl('analytics.mindestgruppe', 30);
$$;

create or replace function app.analytics_maskieren(p_zeilen jsonb, p_metriken text[])
returns jsonb
language plpgsql immutable set search_path to 'public','app' as $$
declare
  v_k        int := app.analytics_schwelle();
  v_metrik   text;
  v_werte    numeric[];
  v_klein    int;
  v_index    int;
  v_zeilen   jsonb := p_zeilen;
  v_zeile    jsonb;
  v_neu      jsonb := '[]'::jsonb;
  v_zweit    numeric;
begin
  if jsonb_array_length(coalesce(p_zeilen, '[]'::jsonb)) = 0 then
    return '[]'::jsonb;
  end if;

  foreach v_metrik in array p_metriken loop
    -- Werte dieser Kennzahl über alle Zeilen einsammeln.
    select array_agg((z ->> v_metrik)::numeric order by ord)
      into v_werte
    from jsonb_array_elements(v_zeilen) with ordinality as t(z, ord);

    -- Primäre Unterdrückung: alles zwischen 1 und k-1. Eine Null bleibt
    -- stehen — sie sagt „niemand", und niemand ist nicht identifizierbar.
    select count(*) into v_klein
    from unnest(v_werte) w where w > 0 and w < v_k;

    -- Sekundäre Unterdrückung: bleibt genau eine Zelle unterdrückt, lässt
    -- sie sich aus der Summe der übrigen zurückrechnen. Dann muss die
    -- nächstkleinere mit verschwinden. Ohne diesen Schritt ist die
    -- Mindestgruppengröße eine Zierde, kein Schutz.
    v_zweit := null;
    if v_klein = 1 then
      select min(w) into v_zweit from unnest(v_werte) w where w >= v_k;
    end if;

    v_neu := '[]'::jsonb;
    v_index := 0;
    for v_zeile in select z from jsonb_array_elements(v_zeilen) z loop
      v_index := v_index + 1;
      if (v_werte[v_index] > 0 and v_werte[v_index] < v_k)
         or (v_zweit is not null and v_werte[v_index] = v_zweit) then
        v_zeile := jsonb_set(v_zeile, array[v_metrik], 'null'::jsonb);
        v_zeile := jsonb_set(v_zeile, array[v_metrik || '_unter_mindestzahl'], 'true'::jsonb);
        -- Nur einmal sekundär unterdrücken, sonst räumt der Schutz die
        -- ganze Tabelle leer.
        if v_zweit is not null and v_werte[v_index] = v_zweit then
          v_zweit := null;
        end if;
      end if;
      v_neu := v_neu || v_zeile;
    end loop;
    v_zeilen := v_neu;
  end loop;

  return v_zeilen;
end;
$$;

comment on function app.analytics_maskieren(jsonb, text[]) is
  'Wendet die Mindestgruppengröße auf eine Ergebnisliste an, je Kennzahl '
  'getrennt, mit sekundärer Unterdrückung. Die Prüfung läuft hier und '
  'nirgendwo sonst — insbesondere nicht im Frontend, wo sie sich abschalten '
  'ließe.';

-- ---------------------------------------------------------------------------
-- 5. Die Schnittstelle für den Werbekunden
-- ---------------------------------------------------------------------------
create or replace function public.advertising_campaign_analytics(
  p_campaign  uuid,
  p_von       date default null,
  p_bis       date default null,
  p_dimension text default 'gesamt'
) returns jsonb
language plpgsql stable security definer set search_path to 'public','app' as $$
declare
  v_von   date := coalesce(p_von, app.heute() - 29);
  v_bis   date := coalesce(p_bis, app.heute());
  v_k     int  := app.analytics_schwelle();
  v_zeilen jsonb;
  v_summe  jsonb;
  v_metriken constant text[] := array[
    'impressions','views','views_3s','clicks','qr_scans',
    'coupon_views','coupon_aktivierungen','coupon_einloesungen','kontakte'];
begin
  if not app.darf_kampagne_lesen(p_campaign) then
    raise exception 'Keine Berechtigung für diese Kampagne' using errcode = '42501';
  end if;
  if p_dimension not in ('gesamt', 'tag', 'kanal', 'creative', 'standort') then
    raise exception 'Unbekannte Auswertungsebene' using errcode = '22023';
  end if;
  if v_bis < v_von then
    raise exception 'Der Zeitraum ist verdreht' using errcode = '22023';
  end if;
  if v_bis - v_von > 400 then
    raise exception 'Der Zeitraum ist zu lang. Bitte höchstens 400 Tage abfragen.'
      using errcode = '22023';
  end if;

  -- Die Gesamtsumme wird immer mitgeliefert, damit das Dashboard eine
  -- Kopfzeile hat, auch wenn die Aufschlüsselung unterdrückt ist.
  select jsonb_build_object(
    'impressions', coalesce(sum(m.impressions), 0),
    'views', coalesce(sum(m.views), 0),
    'views_3s', coalesce(sum(m.views_3s), 0),
    'clicks', coalesce(sum(m.clicks), 0),
    'qr_scans', coalesce(sum(m.qr_scans), 0),
    'coupon_views', coalesce(sum(m.coupon_views), 0),
    'coupon_aktivierungen', coalesce(sum(m.coupon_aktivierungen), 0),
    'coupon_einloesungen', coalesce(sum(m.coupon_einloesungen), 0),
    'kontakte', coalesce(sum(m.kontakte), 0)
  ) into v_summe
  from public.advertising_daily_metrics m
  where m.campaign_id = p_campaign and m.tag between v_von and v_bis;

  v_summe := (app.analytics_maskieren(jsonb_build_array(v_summe), v_metriken)) -> 0;

  select coalesce(jsonb_agg(z order by z ->> 'gruppe'), '[]'::jsonb) into v_zeilen
  from (
    select jsonb_build_object(
      'gruppe', case p_dimension
        when 'tag'      then m.tag::text
        when 'kanal'    then m.kanal::text
        when 'creative' then coalesce(nullif(m.creative_id, app.werbe_nil())::text, 'ohne Zuordnung')
        when 'standort' then coalesce(l.name, 'ohne Zuordnung')
        else 'gesamt' end,
      'impressions', sum(m.impressions),
      'views', sum(m.views),
      'views_3s', sum(m.views_3s),
      'clicks', sum(m.clicks),
      'qr_scans', sum(m.qr_scans),
      'coupon_views', sum(m.coupon_views),
      'coupon_aktivierungen', sum(m.coupon_aktivierungen),
      'coupon_einloesungen', sum(m.coupon_einloesungen),
      'kontakte', sum(m.kontakte)
    ) as z
    from public.advertising_daily_metrics m
    left join public.locations l
      on l.id = m.location_id and m.location_id <> app.werbe_nil()
    where m.campaign_id = p_campaign and m.tag between v_von and v_bis
    group by case p_dimension
        when 'tag'      then m.tag::text
        when 'kanal'    then m.kanal::text
        when 'creative' then coalesce(nullif(m.creative_id, app.werbe_nil())::text, 'ohne Zuordnung')
        when 'standort' then coalesce(l.name, 'ohne Zuordnung')
        else 'gesamt' end
  ) t;

  return jsonb_build_object(
    'campaign_id', p_campaign,
    'von', v_von, 'bis', v_bis,
    'ebene', p_dimension,
    'mindestgruppe', v_k,
    'summe', v_summe,
    'zeilen', app.analytics_maskieren(v_zeilen, v_metriken),
    -- Die Klickrate wird hier gerechnet und nicht im Frontend, damit
    -- „Klicks geteilt durch was" eine einzige Antwort hat.
    'ctr_prozent', case
      when (v_summe ->> 'impressions') is null or (v_summe ->> 'clicks') is null
        then null
      when (v_summe ->> 'impressions')::numeric = 0 then null
      else round((v_summe ->> 'clicks')::numeric * 100
                 / (v_summe ->> 'impressions')::numeric, 2) end,
    'hinweis', 'Alle Werte sind zusammengefasst und anonym. Bördesnack24 '
      || 'übermittelt keine personenbezogenen Daten seiner Kundinnen und '
      || 'Kunden. Gezählt werden ausschließlich Kontakte in angemeldeten '
      || 'Sitzungen der Bördesnack24-App; Werte unter ' || v_k
      || ' werden nicht ausgewiesen.'
  );
end;
$$;

comment on function public.advertising_campaign_analytics(uuid, date, date, text) is
  'Kampagnenzahlen für den Werbekunden. Liest ausschließlich die '
  'Verdichtung, nie die Rohdaten. Jede Zahl läuft durch die '
  'Mindestgruppengröße samt sekundärer Unterdrückung. Die Angabe der '
  'Auswertungsebene ist auf fünf feste Werte begrenzt — freie '
  'Filterkombinationen gibt es nicht, weil sich damit einzelne Personen '
  'einkreisen ließen.';

-- Kampagnenliste: viewer sollen ihre Kampagnen sehen, um die Auswertung
-- öffnen zu können. Stammdaten der Firma bleiben ihnen verschlossen.
create or replace function public.my_advertising_campaigns()
returns jsonb
language sql stable security definer set search_path to 'public','app' as $$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', c.id, 'firma', b.name, 'name', c.name,
           'welt', c.welt::text, 'status', c.status::text,
           'von', c.von, 'bis', c.bis, 'budget_gesamt', c.budget_gesamt
         ) order by c.von desc), '[]'::jsonb)
  from public.advertising_campaigns c
  join public.businesses b on b.id = c.business_id
  where c.deleted_at is null
    and app.is_business_reader(c.business_id);
$$;

-- ---------------------------------------------------------------------------
-- 6. Die feste 30 im bestehenden Bericht ablösen
-- ---------------------------------------------------------------------------
-- advertising_campaign_report trug die Mindestgruppengröße als Literal im
-- Rumpf. Damit gäbe es zwei Orte für dieselbe Festlegung, und der zweite
-- wird beim Ändern vergessen.
create or replace function public.advertising_campaign_report(p_campaign uuid)
returns jsonb
language plpgsql stable security definer set search_path to 'public','app' as $$
declare
  v_business uuid;
  v_ziel     text;
  je_anlass  jsonb := '[]'::jsonb;
  r          record;
  v_ausgabe  bigint;
  v_einloesung bigint;
  v_aufrufe  bigint;
  mindest    int := app.analytics_schwelle();
begin
  select business_id, ziel_url into v_business, v_ziel
  from public.advertising_campaigns where id = p_campaign and deleted_at is null;
  if v_business is null then
    raise exception 'Kampagne nicht gefunden' using errcode = 'P0002';
  end if;
  if not app.darf_kampagne_lesen(p_campaign) then
    raise exception 'Keine Berechtigung für diese Kampagne' using errcode = '42501';
  end if;

  for r in
    select s.id, s.anlass, s.von, s.bis
    from public.advertising_coupon_sponsorships s
    where s.campaign_id = p_campaign and s.deleted_at is null
    order by s.von
  loop
    if r.anlass = 'tagesangebot' then
      select count(*) into v_ausgabe
      from public.offer_activations a
      join public.offers o on o.id = a.offer_id
      where o.kind = 'daily'
        and a.activated_at::date between r.von and r.bis;
      select count(*) into v_einloesung
      from public.offer_activations a
      join public.offers o on o.id = a.offer_id
      where o.kind = 'daily'
        and a.redeemed_at is not null
        and a.redeemed_at::date between r.von and r.bis;
    else
      select count(*) into v_ausgabe
      from public.personal_offers p
      where p.source = app.coupon_anlass_zu_offer_source(r.anlass)
        and p.created_at::date between r.von and r.bis;
      select count(*) into v_einloesung
      from public.personal_offers p
      where p.source = app.coupon_anlass_zu_offer_source(r.anlass)
        and p.redeemed_at is not null
        and p.redeemed_at::date between r.von and r.bis;
    end if;

    je_anlass := je_anlass || jsonb_build_object(
      'anlass', r.anlass::text,
      'von', r.von, 'bis', r.bis,
      'ausgabe', case when v_ausgabe >= mindest then v_ausgabe else null end,
      'ausgabe_unter_mindestzahl', v_ausgabe < mindest,
      'einloesung', case when v_einloesung >= mindest then v_einloesung else null end,
      'einloesung_unter_mindestzahl', v_einloesung < mindest
    );
  end loop;

  select coalesce(sum(c.count), 0) into v_aufrufe
  from public.advertising_redirect_counts c
  where c.campaign_id = p_campaign;

  return jsonb_build_object(
    'campaign_id', p_campaign,
    'ziel_url', v_ziel,
    'je_anlass', je_anlass,
    'aufrufe', case when v_aufrufe >= mindest then v_aufrufe else null end,
    'aufrufe_unter_mindestzahl', v_aufrufe < mindest,
    'mindestzahl', mindest
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- 7. Parameter für die Analytics
-- ---------------------------------------------------------------------------
insert into app.betriebsparameter (schluessel, wert, beschreibung) values
  ('analytics.rohdaten_tage', '90',
   'So lange bleiben die personenbezogenen Werbekontakte erhalten. Danach '
   'bleibt nur die Verdichtung ohne Personenbezug.'),
  ('analytics.events_je_konto_tag', '500',
   'Höchstzahl gezählter Werbekontakte je Konto und Kampagne und Tag. '
   'Verhindert, dass ein einzelnes Konto den Bericht aufbläht.')
on conflict (schluessel) do nothing;

-- ---------------------------------------------------------------------------
-- 8. Löschregeln
-- ---------------------------------------------------------------------------
-- public.loeschregeln führt nur Tabellen mit Personenbezug — Katalog- und
-- Summentabellen stehen dort bewusst nicht drin. Von den neuen Tabellen
-- trifft das nur auf advertising_events zu. advertising_inquiry_items und
-- advertising_inquiry_locations hängen per ON DELETE CASCADE an leads und
-- verschwinden mit der Anfrage, ohne eigene Regel.
--
-- leads braucht dagegen eine Frist und hat keinen Kontobezug: Der
-- Ansprechpartner einer Firmenanfrage hat kein Konto in dieser App. Die
-- Spalte bezugsspalte war bisher NOT NULL, weil jede bisherige Regel an
-- einem Konto hing. Das wird gelockert — und zugleich abgesichert, damit
-- eine kontobezogene Behandlung nicht versehentlich ohne Bezugsspalte
-- eingetragen werden kann.
alter table public.loeschregeln alter column bezugsspalte drop not null;

alter table public.loeschregeln drop constraint if exists loeschregeln_bezug_wenn_kontobezogen;
alter table public.loeschregeln add constraint loeschregeln_bezug_wenn_kontobezogen
  check (behandlung not in ('loeschen', 'anonymisieren') or bezugsspalte is not null);

comment on column public.loeschregeln.bezugsspalte is
  'Spalte, über die eine Zeile einem Konto zugeordnet ist. NULL bedeutet: '
  'kein Kontobezug — die Regel wirkt dann ausschließlich über die Frist und '
  'nicht über ein Löschverlangen zum Konto.';

-- execute_account_deletion arbeitet die Regeln über bezugsspalte ab. Ohne
-- diese Schranke liefe format('... where %I = $1', NULL) auf einen Fehler
-- und der gesamte Löschlauf bräche ab. Der übrige Rumpf ist unverändert und
-- wurde aus der laufenden Definition übernommen, nicht neu geschrieben.
CREATE OR REPLACE FUNCTION public.execute_account_deletion(p_profile uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'app'
AS $function$
declare
  r            record;
  v_anzahl     bigint;
  v_geloescht  jsonb := '{}'::jsonb;
  v_bleibt     jsonb := '{}'::jsonb;
  v_offen      text[] := '{}';
  v_ausserhalb text[] := '{}';
  v_protokoll  bigint;
begin
  if not (public.is_admin() or public.auth_has_permission('users.manage')) then
    raise exception 'Keine Berechtigung, ein Konto zu löschen' using errcode = '42501';
  end if;
  if p_profile is null then
    raise exception 'Kein Konto angegeben' using errcode = '22023';
  end if;
  if not exists (select 1 from public.profiles where id = p_profile) then
    raise exception 'Konto nicht gefunden' using errcode = 'P0002';
  end if;

  perform set_config('app.konto_loeschung', 'on', true);

  for r in select tabelle, bezugsspalte from public.loeschregeln
            where behandlung = 'loeschen' and bezugsspalte is not null order by tabelle
  loop
    execute format('delete from public.%I where %I = $1', r.tabelle, r.bezugsspalte)
      using p_profile;
    get diagnostics v_anzahl = row_count;
    if v_anzahl > 0 then
      v_geloescht := v_geloescht || jsonb_build_object(r.tabelle, v_anzahl);
    end if;
  end loop;

  for r in select tabelle, bezugsspalte, jahre from public.loeschregeln
            where behandlung = 'aufbewahren' and bezugsspalte is not null order by tabelle
  loop
    execute format('select count(*) from public.%I where %I = $1', r.tabelle, r.bezugsspalte)
      into v_anzahl using p_profile;
    if v_anzahl > 0 then
      v_bleibt := v_bleibt || jsonb_build_object(
        r.tabelle, jsonb_build_object('zeilen', v_anzahl, 'jahre', r.jahre));
    end if;
  end loop;

  select coalesce(array_agg(tabelle order by tabelle), '{}') into v_offen
    from public.loeschregeln where behandlung = 'offen';
  select coalesce(array_agg(tabelle order by tabelle), '{}') into v_ausserhalb
    from public.loeschregeln where behandlung = 'ausserhalb';

  update public.profiles set
      full_name  = 'Gelöschtes Konto',
      email      = 'geloescht+' || replace(p_profile::text, '-', '') || '@invalid',
      phone      = null,
      gender     = null,
      birth_date = null,
      deleted_at = coalesce(deleted_at, now()),
      status     = 'archived'
    where id = p_profile;

  update public.customers set
      billing_street = null,
      billing_zip    = null,
      billing_city   = null,
      company_name   = null,
      tax_number     = null,
      vat_id         = null,
      notify_email   = false,
      notify_push    = false
    where id = p_profile;

  update auth.users set banned_until = 'infinity'::timestamptz where id = p_profile;

  update public.account_deletion_requests
     set status = 'ausgefuehrt', handled_at = now(), handled_by = auth.uid(),
         note = coalesce(note || ' | ', '') || 'ausgeführt am ' || now()::date
   where profile_id = p_profile and status is distinct from 'ausgefuehrt';

  -- ZULETZT: Alles oben hat Protokollzeilen erzeugt, die den Inhalt der
  -- gelöschten und anonymisierten Zeilen tragen — einschließlich des Namens,
  -- den die Anonymisierung gerade entfernt hat. Ohne diesen Schritt stünde
  -- die Löschung im Protokoll wieder drin.
  update public.audit_log a set
      old_data = case when a.old_data is null then null else jsonb_build_object(
        'entfernt', 'Inhalt nach Kontolöschung entfernt',
        'felder', (select jsonb_agg(k order by k) from jsonb_object_keys(a.old_data) k)) end,
      new_data = case when a.new_data is null then null else jsonb_build_object(
        'entfernt', 'Inhalt nach Kontolöschung entfernt',
        'felder', (select jsonb_agg(k order by k) from jsonb_object_keys(a.new_data) k)) end
    where a.table_name in (
            select tabelle from public.loeschregeln
             where behandlung in ('loeschen', 'anonymisieren'))
      and (a.record_id = p_profile::text
           or a.old_data->>'profile_id'  = p_profile::text
           or a.new_data->>'profile_id'  = p_profile::text
           or a.old_data->>'customer_id' = p_profile::text
           or a.new_data->>'customer_id' = p_profile::text
           or a.old_data->>'user_id'     = p_profile::text
           or a.new_data->>'user_id'     = p_profile::text
           or a.old_data->>'owner_id'    = p_profile::text
           or a.new_data->>'owner_id'    = p_profile::text)
      and coalesce(a.old_data->>'entfernt', a.new_data->>'entfernt') is null;
  get diagnostics v_protokoll = row_count;

  perform set_config('app.konto_loeschung', 'off', true);

  return jsonb_build_object(
    'konto',           p_profile,
    'ausgefuehrt_am',  now(),
    'geloescht',       v_geloescht,
    'gesperrt_bis_fristablauf', v_bleibt,
    'protokoll_bereinigt', v_protokoll,
    'ohne_entscheidung', to_jsonb(v_offen),
    'nicht_zustaendig',  to_jsonb(v_ausserhalb),
    'hinweis', case
      when array_length(v_offen, 1) is null then
        'Für jede Tabelle mit Personenbezug liegt eine Regel vor. Die unter '
        || '"nicht_zustaendig" genannten Tabellen sind Beschäftigtendaten und '
        || 'folgen einem eigenen Vorgang.'
      else
        'Die unter "ohne_entscheidung" genannten Tabellen wurden NICHT '
        || 'angefasst. Für sie fehlt die Festlegung.'
      end
  );
end;
$function$;

insert into public.loeschregeln (tabelle, bezugsspalte, zeitspalte, behandlung, jahre, frist_ab, begruendung)
values
  ('advertising_events', 'profile_id', null, 'loeschen', null, null,
   'Werbekontakte eines Kontos werden bei dessen Löschung mitgelöscht. Die '
   'Verdichtung bleibt, weil sie nach dem Verdichtungslauf keinen '
   'Personenbezug mehr enthält.'),
  ('leads', null, 'updated_at', 'aufbewahren', 1,
   $frist$case when t.status in ('lost', 'cancelled') then t.updated_at end$frist$,
   'Die Anfrage enthält Name und Kontaktdaten einer natürlichen Person beim '
   'anfragenden Unternehmen. Erledigte Anfragen ohne Geschäft werden nach '
   'einem Jahr gelöscht; laufende und gewonnene bleiben, weil der Vorgang '
   'nicht abgeschlossen ist. Kein Kontobezug, deshalb keine Bezugsspalte. '
   'OFFEN: ob eine erfolglose Anfrage ein empfangener Handelsbrief im Sinne '
   'von § 147 AO ist und damit sechs Jahre aufzubewahren wäre, ist nicht '
   'abschließend geklärt. Bis zur fachlichen Klärung ist das eine '
   'betriebliche Festlegung, keine Rechtsauskunft.')
on conflict (tabelle) do nothing;

-- ---------------------------------------------------------------------------
-- 9. Ausführungsrechte
-- ---------------------------------------------------------------------------
revoke all on function public.advertising_event_record(uuid, app.werbe_event_art, app.werbe_kanal, uuid, uuid, int) from public, anon, authenticated;
revoke all on function public.advertising_campaign_analytics(uuid, date, date, text) from public, anon, authenticated;
revoke all on function app.werbe_events_verdichten(date) from public, anon, authenticated;
revoke all on function app.werbe_events_aufraeumen() from public, anon, authenticated;
revoke all on function app.analytics_schwelle() from public, anon, authenticated;
revoke all on function app.analytics_maskieren(jsonb, text[]) from public, anon, authenticated;
revoke all on function app.werbe_nil() from public, anon, authenticated;

grant execute on function public.advertising_event_record(uuid, app.werbe_event_art, app.werbe_kanal, uuid, uuid, int) to authenticated;
grant execute on function public.advertising_campaign_analytics(uuid, date, date, text) to authenticated;

-- Kein GRANT auf die beiden Tabellen. Der Werbekunde kommt ausschließlich
-- über die Funktion an Zahlen.
