-- ============================================================================
-- 0079 · Rollenprüfungen verlangen ein aktives Profil
-- ----------------------------------------------------------------------------
-- BEFUND: Rechteausweitung durch Selbstregistrierung. Ausnutzbar von jedem
-- mit Internetzugang, ohne Vorwissen.
--
-- Der Trigger `app.handle_new_user` übernimmt die Rolle aus
-- `raw_user_meta_data`:
--
--     coalesce((v_meta->>'role')::app.role_key, 'customer')
--
-- Diese Metadaten kommen bei einer Selbstregistrierung vollständig vom
-- Client. Wer sich mit
--
--     supabase.auth.signUp({ email, password,
--                            options: { data: { role: 'system_admin' } } })
--
-- anmeldet, bekommt eine Profilzeile mit `role = 'system_admin'`.
--
-- Das ist für sich genommen beabsichtigt: Der Einladungsweg
-- (`supabase/functions/invite-user`) prüft Berechtigungen, nutzt den
-- Service-Role-Key und übergibt die Rolle auf demselben Weg. Deshalb setzt
-- der Trigger für alle Nicht-Kunden-Rollen `status = 'invited'` — die Rolle
-- steht da, gilt aber erst nach Aktivierung.
--
-- Genau diese zweite Hälfte hat aber fast niemand ausgewertet. Es gab zwei
-- Sorten Prüfung im Bestand:
--
--   * `is_admin()`, `is_internal()`, `app_role()` — prüfen `status = 'active'`
--     und `deleted_at is null`. Sicher.
--   * 23 RLS-Policies auf 15 Tabellen und 5 Funktionen prüften **nur**
--     `profiles.role`. Unsicher.
--
-- Nachgestellt und bestätigt: Ein frisch registriertes Konto mit
-- `role: 'system_admin'` in den Metadaten erhielt
--
--     business_customers_csv()   → B2B-Kundenliste mit Namen, E-Mail,
--                                  Anschrift, Steuernummer, USt-IdNr.
--     datev_export_rows()        → Buchhaltungsdaten
--     partner_signatures         → 2 Zeilen inkl. Unterschriftsbildern
--
-- Nach dieser Migration liefert derselbe Angriff auf allen Wegen „abgewiesen"
-- bzw. 0 Zeilen; Gesellschafter- und Admin-Konten sehen unverändert alles.
--
-- ZWEITER BEFUND, beim Beheben gefunden: eine NULL-Falle.
-- `business_customers_csv` und `list_employees_for_signature` lasen die Rolle
-- in eine Variable und prüften `if v_role not in ('shareholder','system_admin')`.
-- Bei NULL ergibt `not in` weder wahr noch falsch — die Bedingung greift
-- nicht, und der Aufruf läuft an der Prüfung vorbei. Ohne Profilzeile waren
-- die beiden Funktionen also ebenfalls offen. Jetzt mit `v_role is null or …`.
--
-- MIT BEHOBEN, ohne dass es der Anlass war: Ein deaktiviertes oder gelöschtes
-- Konto mit interner Rolle kam bisher durch dieselben 23 Policies. Auch das
-- ist jetzt zu.
--
-- ZUR FORM: Policies und Funktionen werden aus dem Katalog gelesen, gezielt
-- ergänzt und zurückgeschrieben — kein Abtippen von 23 Bedingungen. Die
-- Migration zählt am Ende nach und bricht ab, wenn auch nur eine Stelle
-- übrig bleibt.
-- ============================================================================
do $$
declare
  r record;
  d text;
  v_q text; v_c text; v_sql text;
  n_pol int := 0;
  n_rest int;
  pat  constant text := 'FROM profiles p\s+WHERE \(\(p\.id = ';
  repl constant text := 'FROM profiles p WHERE ((p.status = ''active''::app.profile_status) '
                        || 'AND (p.deleted_at IS NULL) AND (p.id = ';
begin
  ------------------------------------------------------------------
  -- 1) RLS-Policies
  ------------------------------------------------------------------
  for r in
    select tablename, policyname, qual, with_check
      from pg_policies
     where schemaname = 'public'
       and (coalesce(qual, '') || coalesce(with_check, '')) ~ 'FROM profiles p'
       and (coalesce(qual, '') || coalesce(with_check, '')) !~ 'p\.status'
     order by tablename, policyname
  loop
    v_q := case when r.qual is null then null
                else regexp_replace(r.qual, pat, repl, 'g') end;
    v_c := case when r.with_check is null then null
                else regexp_replace(r.with_check, pat, repl, 'g') end;

    v_sql := format('alter policy %I on public.%I', r.policyname, r.tablename);
    if v_q is not null then v_sql := v_sql || format(' using (%s)', v_q); end if;
    if v_c is not null then v_sql := v_sql || format(' with check (%s)', v_c); end if;
    execute v_sql;
    n_pol := n_pol + 1;
  end loop;

  ------------------------------------------------------------------
  -- 2) Funktionen mit gleichlautender Inline-Prüfung
  ------------------------------------------------------------------
  for d in
    select pg_get_functiondef(p.oid)
      from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
     where ns.nspname = 'public'
       and p.proname in ('datev_export_rows', 'finance_balance_kpis', 'upsert_finance_balance')
  loop
    if position('where p.id = auth.uid() and p.role in' in d) = 0 then
      raise exception 'Erwartete Prüfstelle nicht gefunden — abgebrochen';
    end if;
    d := replace(d,
      'where p.id = auth.uid() and p.role in',
      'where p.id = auth.uid() and p.status = ''active'' and p.deleted_at is null and p.role in');
    execute d;
  end loop;

  ------------------------------------------------------------------
  -- 3) Die beiden Funktionen mit der NULL-Falle
  ------------------------------------------------------------------
  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'business_customers_csv';
  d := replace(d,
    'from public.profiles where id = auth.uid()',
    'from public.profiles where id = auth.uid() and status = ''active'' and deleted_at is null');
  d := replace(d, 'if v_role not in (', 'if v_role is null or v_role not in (');
  execute d;

  select pg_get_functiondef(p.oid) into d
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public' and p.proname = 'list_employees_for_signature';
  d := replace(d,
    'from public.profiles where profiles.id = auth.uid()',
    'from public.profiles where profiles.id = auth.uid()'
    || ' and profiles.status = ''active'' and profiles.deleted_at is null');
  d := replace(d, 'if v_role not in (', 'if v_role is null or v_role not in (');
  execute d;

  ------------------------------------------------------------------
  -- 4) Gegenprobe
  ------------------------------------------------------------------
  select count(*) into n_rest
    from pg_policies
   where schemaname = 'public'
     and (coalesce(qual, '') || coalesce(with_check, '')) ~ 'FROM profiles p'
     and (coalesce(qual, '') || coalesce(with_check, '')) !~ 'p\.status';
  if n_rest <> 0 then
    raise exception 'Noch % Policy(s) ohne Statusprüfung — abgebrochen', n_rest;
  end if;

  select count(*) into n_rest
    from pg_proc p join pg_namespace ns on ns.oid = p.pronamespace
   where ns.nspname = 'public'
     and p.proname in ('datev_export_rows', 'finance_balance_kpis',
                       'upsert_finance_balance', 'business_customers_csv',
                       'list_employees_for_signature')
     and p.prosrc !~ 'status';
  if n_rest <> 0 then
    raise exception 'Noch % Funktion(en) ohne Statusprüfung — abgebrochen', n_rest;
  end if;

  raise notice 'Policies angepasst: %', n_pol;
end $$;

-- ----------------------------------------------------------------------------
-- EMPFEHLUNG, bewusst nicht Teil dieser Migration
-- ----------------------------------------------------------------------------
-- Die Rolle aus clientseitigen Signup-Metadaten zu übernehmen bleibt eine
-- scharfe Kante, auch wenn sie jetzt überall stumpf endet. Der Trigger kann
-- Selbstregistrierung und Einladung nicht unterscheiden — beide laufen über
-- dieselbe GoTrue-Verbindung.
--
-- Sauberer wäre, die Rolle gar nicht erst aus den Metadaten zu ziehen: Der
-- Trigger legt immer `customer` an, und `invite-user` setzt die Rolle direkt
-- nach dem Anlegen mit dem Service-Role-Key. Dann steht in `profiles.role`
-- nie etwas, das ein Fremder hineingeschrieben hat.
--
-- Das ist ein Eingriff in den Einladungsweg und gehört getestet, nicht
-- nebenbei erledigt — deshalb hier nur als Notiz.
