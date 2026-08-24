-- ============================================================================
-- 0125 — SKR-03-Kontenstamm erweitern, Einzelbuchungen sichtbar machen
-- ----------------------------------------------------------------------------
-- ANLASS (24.08.2026)
--
-- Der sevDesk-Sync lief zwar, aber die Auswertung blieb aussagelos. Zwei
-- Ursachen, beide hier adressiert:
--
-- 1) Der Kontenstamm kannte acht Konten. Jede Ausgabe wurde deshalb nach
--    Steuersatz auf 3300 oder 3400 gezwungen — Miete, Strom, Versicherung
--    und Wareneinkauf landeten auf demselben Konto. Eine Auswertung, die
--    „Aufwand 3400" sagt, beantwortet keine einzige betriebswirtschaftliche
--    Frage. Der Stamm wird auf die für einen Imbiss-/Automatenbetrieb
--    einschlägigen Konten erweitert; die Bezeichnungen stammen aus dem
--    DATEV-Standardkontenrahmen SKR 03, gültig für 2026 (Art.-Nr. 11174),
--    nicht aus dem Gedächtnis.
--
-- 2) Es gab nur Summen je Konto. Welcher Beleg hinter „3400: 1.240,00 €"
--    steckt, war in der App nicht zu sehen. Dafür die RPC unten.
--
-- Zusätzlich: `finance_bookings.source_account_code` hält fest, welches
-- Konto sevDesk selbst gemeldet hat. Weicht unsere Zuordnung davon ab
-- (weil das Konto im Stamm fehlt), bleibt das nachvollziehbar statt
-- verloren — Voraussetzung für die Verifikationspflicht nach GoBD.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Kontenstamm (SKR 03, Auszug für den Betrieb)
-- ----------------------------------------------------------------------------
insert into public.finance_accounts (code, name, direction, default_tax, sort_order) values
  -- Finanzkonten
  ('1000', 'Kasse',                                             'asset',   null,  100),
  ('1200', 'Bank',                                              'asset',   null,  110),
  -- Wareneingang
  ('3200', 'Wareneingang',                                      'expense', null,  200),
  ('3300', 'Wareneingang 7 % Vorsteuer',                        'expense',  7.0,  210),
  ('3400', 'Wareneingang 19 % Vorsteuer',                       'expense', 19.0,  220),
  -- Personal
  ('4100', 'Löhne und Gehälter',                                'expense',  0.0,  300),
  ('4120', 'Gehälter',                                          'expense',  0.0,  310),
  ('4130', 'Gesetzliche soziale Aufwendungen',                  'expense',  0.0,  320),
  ('4138', 'Beiträge zur Berufsgenossenschaft',                 'expense',  0.0,  330),
  ('4180', 'Bedienungsgelder',                                  'expense',  0.0,  340),
  ('4190', 'Aushilfslöhne',                                     'expense',  0.0,  350),
  -- Raum, Energie, Reinigung
  ('4210', 'Miete (unbewegliche Wirtschaftsgüter)',             'expense',  0.0,  400),
  ('4230', 'Heizung',                                           'expense', 19.0,  410),
  ('4240', 'Gas, Strom, Wasser',                                'expense', 19.0,  420),
  ('4250', 'Reinigung',                                         'expense', 19.0,  430),
  ('4260', 'Instandhaltung betrieblicher Räume',                'expense', 19.0,  440),
  -- Versicherungen, Beiträge, Abgaben
  ('4360', 'Versicherungen',                                    'expense',  0.0,  500),
  ('4380', 'Beiträge',                                          'expense',  0.0,  510),
  ('4390', 'Sonstige Abgaben',                                  'expense',  0.0,  520),
  -- Fahrzeug
  ('4530', 'Laufende Fahrzeug-Betriebskosten',                  'expense', 19.0,  600),
  ('4540', 'Fahrzeug-Reparaturen',                              'expense', 19.0,  610),
  ('4580', 'Sonstige Fahrzeugkosten',                           'expense', 19.0,  620),
  -- Werbung, Reise, Vertrieb
  ('4600', 'Werbekosten',                                       'expense', 19.0,  700),
  ('4650', 'Bewirtungskosten',                                  'expense', 19.0,  710),
  ('4660', 'Reisekosten Arbeitnehmer',                          'expense', 19.0,  720),
  ('4670', 'Reisekosten Unternehmer',                           'expense', 19.0,  730),
  ('4730', 'Ausgangsfrachten',                                  'expense', 19.0,  740),
  -- Instandhaltung, Abschreibung
  ('4805', 'Reparaturen und Instandhaltungen von anderen Anlagen und BGA',
                                                                'expense', 19.0,  800),
  ('4806', 'Wartungskosten für Hard- und Software',             'expense', 19.0,  810),
  ('4830', 'Abschreibungen auf Sachanlagen',                    'expense',  0.0,  820),
  ('4855', 'Sofortabschreibung geringwertiger Wirtschaftsgüter','expense',  0.0,  830),
  -- Sonstige betriebliche Aufwendungen
  ('4900', 'Sonstige betriebliche Aufwendungen',                'expense', 19.0,  900),
  ('4910', 'Porto',                                             'expense',  0.0,  910),
  ('4920', 'Telefon',                                           'expense', 19.0,  920),
  ('4925', 'Internetkosten',                                    'expense', 19.0,  930),
  ('4930', 'Bürobedarf',                                        'expense', 19.0,  940),
  ('4940', 'Zeitschriften, Bücher, digitale Medien',            'expense',  7.0,  950),
  ('4945', 'Fortbildungskosten',                                'expense', 19.0,  960),
  ('4950', 'Rechts- und Beratungskosten',                       'expense', 19.0,  970),
  ('4955', 'Buchführungskosten',                                'expense', 19.0,  980),
  ('4957', 'Abschluss- und Prüfungskosten',                     'expense', 19.0,  990),
  ('4960', 'Mieten für Einrichtungen (bewegliche Wirtschaftsgüter)',
                                                                'expense', 19.0, 1000),
  ('4964', 'Aufwendungen für die zeitlich befristete Überlassung von Rechten',
                                                                'expense', 19.0, 1010),
  ('4970', 'Nebenkosten des Geldverkehrs',                      'expense',  0.0, 1020),
  ('4980', 'Sonstiger Betriebsbedarf',                          'expense', 19.0, 1030),
  -- Erlöse
  ('8100', 'Steuerfreie Umsätze',                               'revenue',  0.0, 1100),
  ('8125', 'Steuerfreie innergemeinschaftliche Lieferungen',    'revenue',  0.0, 1110),
  ('8300', 'Erlöse 7 % USt',                                    'revenue',  7.0, 1120),
  ('8400', 'Erlöse 19 % USt',                                   'revenue', 19.0, 1130),
  ('8900', 'Unentgeltliche Wertabgaben',                        'revenue', 19.0, 1140)
on conflict (code) do update
  set name        = excluded.name,
      direction   = excluded.direction,
      default_tax = excluded.default_tax,
      sort_order  = excluded.sort_order;

-- ----------------------------------------------------------------------------
-- 2) Herkunftskonto festhalten
-- ----------------------------------------------------------------------------
alter table public.finance_bookings
  add column if not exists source_account_code text;

comment on column public.finance_bookings.source_account_code is
  'Kontonummer, wie sie das Quellsystem (sevDesk) gemeldet hat. Weicht sie von '
  'account_code ab, war sie im Kontenstamm nicht vorhanden und es wurde auf ein '
  'Sammelkonto ausgewichen.';

-- ----------------------------------------------------------------------------
-- 3) Sync-Protokoll: was kam überhaupt an?
-- ----------------------------------------------------------------------------
-- Bis hierher stand im Protokoll nur `inserted_count`. Fünf Läufe am
-- 24.08.2026 meldeten „success / 0" — daraus liess sich nicht unterscheiden,
-- ob sevDesk nichts hat, ob der Zeitraumfilter nicht greift oder ob die
-- Zuordnung alles verwirft. Genau diese Unterscheidung braucht der nächste
-- Schritt.
alter table public.sevdesk_sync_runs
  add column if not exists fetched_count int not null default 0;
alter table public.sevdesk_sync_runs
  add column if not exists diagnostics jsonb;

comment on column public.sevdesk_sync_runs.fetched_count is
  'Belege, die sevDesk insgesamt geliefert hat (vor der Zeitraumfilterung).';
comment on column public.sevdesk_sync_runs.diagnostics is
  'Strukturprobe des ersten Belegs (Feldnamen + buchungsrelevante Werte, keine '
  'personenbezogenen Daten) sowie Zählwerte je Verarbeitungsstufe. Nur mit '
  'finance.view lesbar.';

-- ----------------------------------------------------------------------------
-- 4) Einzelbuchungen für einen Zeitraum
-- ----------------------------------------------------------------------------
create or replace function public.finance_bookings_list(
  p_from   date,
  p_to     date,
  p_limit  int default 200,
  p_offset int default 0
)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
declare
  v_limit  int := least(greatest(coalesce(p_limit, 200), 1), 500);
  v_offset int := greatest(coalesce(p_offset, 0), 0);
  v_total  int;
  v_rows   jsonb;
begin
  if not public.auth_has_permission('finance.view') then
    raise exception 'Keine Berechtigung für Finanzdaten' using errcode = '42501';
  end if;
  if p_to < p_from then
    raise exception 'Ungültiger Zeitraum';
  end if;

  select count(*) into v_total
  from public.finance_bookings b
  where b.deleted_at is null
    and b.booking_date between p_from and p_to;

  select coalesce(jsonb_agg(z order by z_date desc, z_code, z_id), '[]'::jsonb)
    into v_rows
  from (
    select b.booking_date as z_date,
           b.account_code as z_code,
           b.id           as z_id,
           jsonb_build_object(
             'id',                 b.id,
             'booking_date',       b.booking_date,
             'account_code',       b.account_code,
             'account_name',       a.name,
             'direction',          b.direction,
             'description',        b.description,
             'amount_net',         b.amount_net,
             'amount_tax',         b.amount_tax,
             'amount_gross',       b.amount_gross,
             'tax_rate',           b.tax_rate,
             'source',             b.source,
             'source_ref',         b.source_ref,
             'source_account_code',b.source_account_code
           ) as z
    from public.finance_bookings b
    join public.finance_accounts a on a.code = b.account_code
    where b.deleted_at is null
      and b.booking_date between p_from and p_to
    order by b.booking_date desc, b.account_code, b.id
    limit v_limit offset v_offset
  ) s;

  return jsonb_build_object(
    'from',   p_from,
    'to',     p_to,
    'total',  v_total,
    'limit',  v_limit,
    'offset', v_offset,
    'rows',   v_rows
  );
end;
$$;

comment on function public.finance_bookings_list(date, date, int, int) is
  'Einzelbuchungen eines Zeitraums (seitenweise); prüft finance.view serverseitig.';

revoke all on function public.finance_bookings_list(date, date, int, int) from public;
grant execute on function public.finance_bookings_list(date, date, int, int) to authenticated;
