-- ============================================================================
-- 0095 · Die NULL-Falle in der Rollenprüfung, systematisch
-- ----------------------------------------------------------------------------
-- WAS DIE LÜCKE IST. Sehr viele Funktionen prüfen so:
--
--     select role into v_role from public.profiles where id = auth.uid();
--     if v_role not in ('system_admin','shareholder') then
--       raise exception 'Nicht autorisiert';
--     end if;
--
-- Hat der Aufrufer keine Profilzeile, ist `v_role` NULL. In SQL ergibt
-- `NULL not in (…)` nicht `true`, sondern NULL — und `if NULL then` ist
-- unwahr. Die Ausnahme bleibt aus, die Funktion arbeitet weiter. Dieselbe
-- Falle stellt `v_role <> 'system_admin'`.
--
-- Das ist keine Spitzfindigkeit: Nachgewiesen mit einem angemeldeten
-- Konto ohne Profilzeile konnte über `set_partner_signature_image` die
-- Unterschrift eines Gesellschafters ersetzt werden (0094), und
-- `list_document_approvals` gab die vollständige Freigabeliste heraus
-- (0093).
--
-- Zusätzlich prüfte keine dieser Funktionen `status` und `deleted_at`. Ein
-- deaktiviertes Konto behält seine Rolle in der Zeile.
--
-- ----------------------------------------------------------------------------
-- WARUM ES SO VIELE SIND. 0079 hat diese Klasse schon einmal bearbeitet —
-- damals für RLS-Policies und drei Funktionen. Übersehen wurde, dass
-- dasselbe Muster in weiteren Funktionen steht. Aufgefallen ist es erst,
-- als ich nach 0093/0094 aufhörte, einzeln zu suchen, und stattdessen alle
-- Funktionen der Datenbank nach dem Muster durchsuchte.
--
-- Betroffen waren neun, die im Repository stehen und nie aufgefallen sind:
--   inventory_fifo_lots, inventory_fifo_movements, inventory_report,
--   inventory_summary_by_product, invite_employee_signature,
--   list_document_signature_tasks, list_documents,
--   request_document_review, set_document_valid_until
--
-- Die Lehre steht besser hier als in einem Bericht: Wer eine
-- Sicherheitsklasse repariert, muss die ganze Klasse suchen, nicht die
-- Stellen, die ihm gerade einfallen. Die Suche dauert eine Abfrage.
--
-- ----------------------------------------------------------------------------
-- WARUM PROGRAMMATISCH. Neun Funktionsrümpfe von Hand abzuschreiben wäre
-- die fehleranfälligere Lösung — es geht um Inventurbewertung und
-- Dokumentenfreigaben, nicht um Anzeigetexte. Der DO-Block unten liest die
-- geltende Definition mit `pg_get_functiondef`, ersetzt ausschliesslich die
-- Prüfzeilen und legt sie zurück. Alles andere am Rumpf bleibt Zeichen für
-- Zeichen gleich.
--
-- Der Block zählt mit und bricht ab, wenn er nicht genau die erwartete
-- Zahl von Funktionen findet oder eine Ersetzung nicht greift. Eine
-- Migration, die stillschweigend nichts tut, wäre schlimmer als eine, die
-- scheitert.
--
-- NACH DEM LAUF GEPRÜFT (produktive Datenbank):
--   19 Funktionen mit Rollenprüfung, davon 0 mit offener NULL-Falle,
--   19 prüfen `status = 'active'`.
--   Angriff ohne Profilzeile  -> "Nicht autorisiert"
--   aktiver Gesellschafter    -> 21 Dokumente, 11 Ordner, 94 Inventurzeilen
-- ============================================================================

do $$
declare
  r            record;
  v_def        text;
  v_neu        text;
  v_anzahl     int := 0;
  v_erwartet   int := 9;
  v_offen      int;
begin
  for r in
    select p.oid, p.proname
      from pg_proc p
      join pg_namespace n on n.oid = p.pronamespace
     where n.nspname = 'public'
       and p.prokind = 'f'
       and p.prosrc ~* 'v_role\s+(not in|<>|!=)'
       and p.prosrc !~* 'v_role is null'
     order by p.proname
  loop
    v_def := pg_get_functiondef(r.oid);
    v_neu := v_def;

    -- 1) Beim Laden der Rolle Status und Löschvermerk mitprüfen.
    --    Zwei Schreibweisen, je nachdem ob die Funktion
    --    `#variable_conflict use_column` verwendet.
    v_neu := regexp_replace(
      v_neu,
      'from public\.profiles\s+where\s+id\s*=\s*auth\.uid\(\)\s*;',
      'from public.profiles where id = auth.uid() and status = ''active'' and deleted_at is null;',
      'gi');
    v_neu := regexp_replace(
      v_neu,
      'from public\.profiles\s+where\s+profiles\.id\s*=\s*auth\.uid\(\)\s*;',
      'from public.profiles where profiles.id = auth.uid() and profiles.status = ''active'' and profiles.deleted_at is null;',
      'gi');

    -- 2) Die NULL-Falle schliessen — beide Vergleichsformen.
    v_neu := regexp_replace(v_neu, 'if\s+v_role\s+not\s+in\s*\(',
                            'if v_role is null or v_role not in (', 'gi');
    v_neu := regexp_replace(v_neu, 'if\s+v_role\s*(<>|!=)\s*',
                            'if v_role is null or v_role <> ', 'gi');

    if v_neu = v_def then
      raise exception 'Keine Ersetzung bei % — Muster passt nicht mehr', r.proname;
    end if;
    if v_neu !~* 'v_role is null' then
      raise exception 'NULL-Abfangung fehlt nach der Ersetzung bei %', r.proname;
    end if;

    execute v_neu;
    v_anzahl := v_anzahl + 1;
    raise notice 'repariert: %', r.proname;
  end loop;

  if v_anzahl <> v_erwartet then
    raise exception 'Erwartet waren % Funktionen, bearbeitet wurden %', v_erwartet, v_anzahl;
  end if;

  -- Gegenprobe: Es darf keine Funktion mehr geben, die eine Rollenprüfung
  -- ohne NULL-Abfangung trägt.
  select count(*) into v_offen
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'public' and p.prokind = 'f'
     and p.prosrc ~* 'v_role\s+(not in|<>|!=)'
     and p.prosrc !~* 'v_role is null';
  if v_offen > 0 then
    raise exception 'Es sind noch % Funktionen mit offener NULL-Falle übrig', v_offen;
  end if;

  raise notice 'Fertig: % Funktionen repariert, keine offene NULL-Falle mehr', v_anzahl;
end $$;
