-- ============================================================================
-- 0135 — Anlage zur Ermittlung der individuellen PKW-Kosten
-- ----------------------------------------------------------------------------
-- Auftrag des Auftraggebers vom 25.08.2026: Unter „Steuern" soll es
-- „Anlagen" geben, also Übersichten, die für den Jahresabschluss gebraucht
-- werden. Die erste ist die Ermittlung der individuellen Kilometersätze der
-- beiden privaten PKW, damit betriebliche Fahrten als Nutzungseinlage
-- berücksichtigt werden können.
--
-- DIE RECHNUNG, DIE DAHINTERSTEHT
--   Gesamtkosten eines Jahres ÷ in diesem Jahr gefahrene Kilometer
--     = individueller Satz je Kilometer
--   Satz × betrieblich gefahrene Kilometer = Nutzungseinlage
--
-- WARUM DIE KOSTEN VON HAND ERFASST WERDEN
-- Es sind PRIVATE Fahrzeuge. Genau deshalb braucht es die Nutzungseinlage:
-- Ihre Kosten sind keine Betriebsausgaben und stehen folglich weder in
-- sevDesk noch in `finance_bookings`. Eine automatische Übernahme hätte
-- nichts zu übernehmen. Vom Auftraggeber am 25.08.2026 bestätigt.
--
-- BRUTTO, NICHT NETTO
-- Bei einem privaten PKW gibt es keinen Vorsteuerabzug; die Umsatzsteuer ist
-- Teil der Kosten, die der Gesellschafter tatsächlich getragen hat. Die
-- Spalte heisst deshalb `betrag_brutto` und nicht `betrag` — wer sie später
-- mit einem Nettowert füllt, soll darüber stolpern.
--
-- KEINE ABSCHREIBUNG
-- Beide Wagen sind geleast, die Leasingrate ist die Kostenart. Wäre einer
-- gekauft, fehlte in den Gesamtkosten die jährliche Abschreibung und der
-- Kilometersatz fiele zu niedrig aus. `kostenart` ist bewusst freier Text
-- mit Prüfliste, damit sich das ohne Migration nachtragen lässt.
-- ============================================================================

-- ── Fahrzeuge ───────────────────────────────────────────────────────────────
create table if not exists public.pkw (
  id            uuid primary key default gen_random_uuid(),
  kennzeichen   text not null unique,
  bezeichnung   text,
  aktiv         boolean not null default true,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz
);

comment on table public.pkw is
  'Private PKW der Gesellschafter, deren betriebliche Nutzung über eine '
  'Nutzungseinlage berücksichtigt wird. Keine Betriebsfahrzeuge.';

-- ── Kilometerstände je Fahrzeug und Jahr ────────────────────────────────────
create table if not exists public.pkw_jahr (
  id            uuid primary key default gen_random_uuid(),
  pkw_id        uuid not null references public.pkw(id) on delete cascade,
  jahr          int  not null,

  -- Stand am 01.01. und am 31.12. Die Differenz ergibt die Fahrleistung.
  km_stand_anfang int,
  km_stand_ende   int,

  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),

  unique (pkw_id, jahr),

  -- Ein Kilometerzähler läuft nicht rückwärts. Ohne diese Regel ergäbe die
  -- Division eine negative Fahrleistung und der Satz je Kilometer wäre
  -- negativ, ohne dass es jemandem auffiele.
  constraint pkw_jahr_km_laeuft_vorwaerts
    check (km_stand_anfang is null or km_stand_ende is null
           or km_stand_ende >= km_stand_anfang),
  constraint pkw_jahr_jahr_plausibel check (jahr between 2000 and 2100)
);

-- ── Kosten je Fahrzeug und Jahr ─────────────────────────────────────────────
create table if not exists public.pkw_kosten (
  id            uuid primary key default gen_random_uuid(),
  pkw_id        uuid not null references public.pkw(id) on delete cascade,
  jahr          int  not null,

  -- Freier Text mit Prüfliste: Die sechs Arten des Auftraggebers, plus
  -- 'abschreibung' und 'sonstiges' für den Fall, dass ein Wagen gekauft wird
  -- oder eine Kostenart dazukommt.
  kostenart     text not null
    check (kostenart in ('tanken', 'versicherung', 'kfz_steuer', 'waesche',
                         'reparatur', 'leasing', 'abschreibung', 'sonstiges')),

  beleg_datum   date,
  bezeichnung   text,

  -- BRUTTO. Siehe Kopf.
  betrag_brutto numeric(12,2) not null,

  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,

  constraint pkw_kosten_jahr_plausibel check (jahr between 2000 and 2100)
);

create index if not exists pkw_kosten_pkw_jahr_idx
  on public.pkw_kosten (pkw_id, jahr) where deleted_at is null;

-- ── Betriebliche Fahrten ────────────────────────────────────────────────────
create table if not exists public.pkw_fahrten (
  id            uuid primary key default gen_random_uuid(),
  pkw_id        uuid not null references public.pkw(id),
  fahrt_datum   date not null,
  anlass        text not null,

  -- Hin- UND Rückweg, so vom Auftraggeber vorgegeben.
  kilometer     numeric(10,1) not null check (kilometer > 0),

  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz
);

create index if not exists pkw_fahrten_datum_idx
  on public.pkw_fahrten (fahrt_datum) where deleted_at is null;

-- ── Die beiden Fahrzeuge ────────────────────────────────────────────────────
-- Am 25.08.2026 vom Auftraggeber bestätigt, dass sich die Kennzeichen
-- tatsächlich nur in einem Zeichen unterscheiden.
insert into public.pkw (kennzeichen, bezeichnung, sort_order)
values
  ('BK-AE 2325', 'PKW 1', 1),
  ('BÖ-AE 2325', 'PKW 2', 2)
on conflict (kennzeichen) do nothing;

-- ── Rechte ──────────────────────────────────────────────────────────────────
-- Kein neues Recht: Die Anlage gehört zum Jahresabschluss, und `finance.view`
-- haben genau die beiden Rollen, die ihn erstellen (system_admin,
-- shareholder). Ein eigenes Recht hätte gepflegt werden müssen und wäre beim
-- nächsten Rollenwechsel vergessen worden.
alter table public.pkw          enable row level security;
alter table public.pkw_jahr     enable row level security;
alter table public.pkw_kosten   enable row level security;
alter table public.pkw_fahrten  enable row level security;

do $$
declare t text;
begin
  foreach t in array array['pkw', 'pkw_jahr', 'pkw_kosten', 'pkw_fahrten'] loop
    execute format(
      'create policy %1$s_read on public.%1$s for select to authenticated '
      'using (public.auth_has_permission(''finance.view''))', t);
    execute format(
      'create policy %1$s_write on public.%1$s for all to authenticated '
      'using (public.auth_has_permission(''finance.view'')) '
      'with check (public.auth_has_permission(''finance.view''))', t);
  end loop;
end $$;

-- ── Auswertung ──────────────────────────────────────────────────────────────
-- Die Rechnung gehört auf den Server, nicht in die App: Sie ist die Grundlage
-- eines Dokuments, das unterschrieben wird. Zwei Clients, die unterschiedlich
-- runden, wären zwei Wahrheiten.
create or replace function public.anlage_pkw(p_jahr int)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  ergebnis jsonb;
begin
  if not public.auth_has_permission('finance.view') then
    raise exception 'Keine Berechtigung für Finanzdaten' using errcode = '42501';
  end if;
  if p_jahr < 2000 or p_jahr > 2100 then
    raise exception 'Ungültiges Jahr';
  end if;

  with fahrzeug as (
    select p.id, p.kennzeichen, p.bezeichnung, p.sort_order,
           j.km_stand_anfang, j.km_stand_ende,
           -- Fahrleistung nur, wenn BEIDE Stände da sind. Fehlt einer, ist
           -- der Satz nicht ermittelbar, und das soll sichtbar bleiben statt
           -- als 0 durchzurutschen.
           case
             when j.km_stand_anfang is null or j.km_stand_ende is null then null
             else j.km_stand_ende - j.km_stand_anfang
           end as km_gefahren
    from public.pkw p
    left join public.pkw_jahr j on j.pkw_id = p.id and j.jahr = p_jahr
    where p.deleted_at is null and p.aktiv
  ),
  kosten as (
    select pkw_id, sum(betrag_brutto) as summe
    from public.pkw_kosten
    where jahr = p_jahr and deleted_at is null
    group by pkw_id
  ),
  satz as (
    select f.*,
           coalesce(k.summe, 0) as gesamtkosten,
           case
             when f.km_gefahren is null or f.km_gefahren = 0 then null
             -- Vier Nachkommastellen: Bei rund 0,50 EUR je Kilometer und
             -- dreistelligen Fahrtstrecken verschiebt schon die dritte
             -- Stelle den Betrag um Cent.
             else round(coalesce(k.summe, 0) / f.km_gefahren, 4)
           end as satz_je_km
    from fahrzeug f
    left join kosten k on k.pkw_id = f.id
  ),
  fahrten as (
    select t.id, t.fahrt_datum, t.anlass, t.kilometer, t.pkw_id,
           s.kennzeichen, s.satz_je_km,
           case when s.satz_je_km is null then null
                else round(t.kilometer * s.satz_je_km, 2) end as betrag
    from public.pkw_fahrten t
    join satz s on s.id = t.pkw_id
    where t.deleted_at is null
      and extract(year from t.fahrt_datum)::int = p_jahr
  )
  select jsonb_build_object(
    'jahr', p_jahr,
    'fahrzeuge', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', id, 'kennzeichen', kennzeichen, 'bezeichnung', bezeichnung,
        'km_stand_anfang', km_stand_anfang, 'km_stand_ende', km_stand_ende,
        'km_gefahren', km_gefahren, 'gesamtkosten', gesamtkosten,
        'satz_je_km', satz_je_km,
        'kosten', coalesce((
          select jsonb_agg(jsonb_build_object(
            'id', k.id, 'kostenart', k.kostenart, 'beleg_datum', k.beleg_datum,
            'bezeichnung', k.bezeichnung, 'betrag_brutto', k.betrag_brutto
          ) order by k.kostenart, k.beleg_datum)
          from public.pkw_kosten k
          where k.pkw_id = satz.id and k.jahr = p_jahr and k.deleted_at is null
        ), '[]'::jsonb)
      ) order by sort_order)
      from satz
    ), '[]'::jsonb),
    'fahrten', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', id, 'fahrt_datum', fahrt_datum, 'anlass', anlass,
        'kilometer', kilometer, 'pkw_id', pkw_id, 'kennzeichen', kennzeichen,
        'satz_je_km', satz_je_km, 'betrag', betrag
      ) order by fahrt_datum, id)
      from fahrten
    ), '[]'::jsonb),
    'nutzungseinlage', coalesce((select sum(betrag) from fahrten), 0),
    -- Fahrten, deren Fahrzeug für dieses Jahr keinen Satz hat: Ohne diesen
    -- Hinweis stünde unten eine Summe, in der sie stillschweigend fehlen.
    'fahrten_ohne_satz', coalesce(
      (select count(*) from fahrten where betrag is null), 0)
  ) into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function public.anlage_pkw(int) from public;
grant execute on function public.anlage_pkw(int) to authenticated;
