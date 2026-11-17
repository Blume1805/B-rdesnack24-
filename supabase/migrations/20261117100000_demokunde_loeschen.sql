-- ============================================================================
-- Demo-Kundenkonto löschen (Entscheidung Philipp 17.11.2026)
--
-- Anlass: Die tägliche Betriebsprüfung meldete einen seit 09.07.2026 offenen
-- Löschantrag. Er gehört zum Demo-Kundenkonto demo-kunde@boerdesnack24.app
-- (angelegt 29.06., zuletzt angemeldet 02.08., keine Käufe), nicht zu einer
-- echten Person.
--
-- Weg: der normale Löschweg der App, public.execute_account_deletion. Die
-- Funktion verlangt einen Administrator; sie läuft hier im Namen des einzigen
-- nicht gesperrten Administrator-Kontos (nicht der Demo-Konten). Damit gelten
-- dieselben Löschregeln (loeschregeln), dasselbe Protokoll und derselbe
-- Abschluss des Antrags (status = 'ausgefuehrt') wie bei einer Löschung aus der
-- Verwaltung. Aufzubewahrende Daten bleiben nach ihren Fristen erhalten.
--
-- Unumkehrbar. Im lokalen Nachbau gibt es das Konto nicht; dort passiert
-- nichts.
-- ============================================================================

do $$
declare
  v_kunde uuid;
  v_admin uuid;
  v_n     int;
  v_bericht jsonb;
begin
  select id into v_kunde from auth.users where email = 'demo-kunde@boerdesnack24.app';
  if v_kunde is null then
    raise notice 'Demo-Kundenkonto nicht vorhanden — nichts zu tun.';
    return;
  end if;

  select count(*), min(p.id::text)::uuid into v_n, v_admin
    from public.profiles p join auth.users u on u.id = p.id
   where p.role = 'system_admin' and p.status = 'active' and p.deleted_at is null
     and (u.banned_until is null or u.banned_until < now())
     and u.email not like 'demo-%';
  if v_n <> 1 then
    raise exception 'Erwartet genau ein nicht gesperrtes Administrator-Konto, gefunden: %', v_n;
  end if;

  perform set_config('request.jwt.claims',
    json_build_object('sub', v_admin, 'role', 'authenticated')::text, true);
  v_bericht := public.execute_account_deletion(v_kunde);
  perform set_config('request.jwt.claims', '', true);
  raise notice 'Löschbericht: %', v_bericht;
end $$;
