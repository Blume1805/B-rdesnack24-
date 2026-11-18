-- ============================================================================
-- Demo-Konten auflösen (Entscheidung Philipp 18.11.2026: „sollst du machen")
--
-- Befund 18.11.2026 (nur gelesen): An den gesperrten Demo-Konten hingen
--   * die beiden Partner-Unterschriften („Philipp Blume / Gesellschafter" am
--     Demo-Gesellschafter, „Pia Blume / Gesellschafterin" am Demo-Admin),
--   * vier seit Juli offene Dokument-Freigaben, angefordert von Demo-Konten,
--   * abgeschlossene Freigaben aus dem Juli (bleiben als Verlauf, GoBD).
-- Dazu ein Kundenkonto ohne Käufe, das gelöscht werden soll.
--
-- Ablauf in app.demokonten_aufloesen():
--   1. Unterschriften auf die echten Konten umhängen: Philipp = einziges
--      aktives, nicht gesperrtes Administrator-Konto außer den Demo-Konten,
--      Pia = einziges solches Gesellschafter-Konto. Gibt es nicht genau eins,
--      bricht alles ab.
--   2. Offene Freigaben der Demo-Konten auf „rejected" mit Vermerk (die
--      Datenbank kennt keinen Status „abgebrochen"; die App wertet
--      cancelled_at nicht aus).
--   3. Die drei Konten über den normalen Löschweg löschen
--      (execute_account_deletion, seit 20261117130000 mit Anmeldedaten).
-- Konten werden über ihre interne Kennung bestimmt, nicht über E-Mail-
-- Adressen (das Repository ist öffentlich).
--
-- Voraussetzung: 20261117130000 ist eingespielt; sonst Abbruch.
-- Unumkehrbar für die drei Konten (gewollt). Im lokalen Nachbau gibt es die
-- Konten nicht; dort passiert beim Einspielen nichts (Prüfskript 119 testet
-- mit nachgebauten Konten).
-- ============================================================================

create or replace function app.demokonten_aufloesen()
returns jsonb
language plpgsql
security definer
set search_path = public, app
as $$
declare
  c_demo_gs    constant uuid := '823852fd-d552-49fd-9563-326040ea53e8';
  c_demo_admin constant uuid := '8b93c2c0-8714-4517-a369-7d3e3ff74b8f';
  c_kunde      constant uuid := 'c4f2ed06-f955-47dc-b262-43b0d8b6a60c';
  v_demo  uuid[] := array[c_demo_gs, c_demo_admin, c_kunde];
  v_philipp uuid;
  v_pia     uuid;
  v_n       int;
  v_umgehaengt int := 0;
  v_abgelehnt  int := 0;
  v_geloescht  text[] := '{}';
  v_id uuid;
begin
  if not exists (select 1 from public.profiles where id = any(v_demo)) then
    return jsonb_build_object('ergebnis', 'keine der Konten vorhanden');
  end if;
  if to_regprocedure('app.anmeldedaten_entfernen(uuid)') is null then
    raise exception 'Erst 20261117130000 (Löschung mit Anmeldedaten) einspielen';
  end if;

  select count(*), min(p.id::text)::uuid into v_n, v_philipp
    from public.profiles p join auth.users u on u.id = p.id
   where p.role = 'system_admin' and p.status = 'active' and p.deleted_at is null
     and (u.banned_until is null or u.banned_until < now())
     and p.id <> all(v_demo);
  if v_n <> 1 then
    raise exception 'Erwartet genau ein aktives Administrator-Konto, gefunden: %', v_n;
  end if;
  select count(*), min(p.id::text)::uuid into v_n, v_pia
    from public.profiles p join auth.users u on u.id = p.id
   where p.role = 'shareholder' and p.status = 'active' and p.deleted_at is null
     and (u.banned_until is null or u.banned_until < now())
     and p.id <> all(v_demo);
  if v_n <> 1 then
    raise exception 'Erwartet genau ein aktives Gesellschafter-Konto, gefunden: %', v_n;
  end if;

  -- 1. Unterschriften
  update public.partner_signatures set profile_id = v_philipp
   where profile_id = c_demo_gs and full_name ilike 'Philipp%';
  get diagnostics v_n = row_count; v_umgehaengt := v_umgehaengt + v_n;
  update public.partner_signatures set profile_id = v_pia
   where profile_id = c_demo_admin and full_name ilike 'Pia%';
  get diagnostics v_n = row_count; v_umgehaengt := v_umgehaengt + v_n;
  if exists (select 1 from public.partner_signatures where profile_id = any(v_demo)) then
    raise exception 'Eine Partner-Unterschrift hängt noch an einem Demo-Konto';
  end if;

  -- 2. Offene Freigaben der Demo-Konten
  update public.document_approvals
     set status = 'rejected', cancelled_at = coalesce(cancelled_at, now()),
         notes = coalesce(notes || ' | ', '')
                 || 'Abgebrochen am ' || current_date
                 || ': angefordert von einem Demo-Konto (Entscheidung Philipp 18.11.2026)'
   where status = 'pending' and requested_by = any(v_demo);
  get diagnostics v_abgelehnt = row_count;

  -- 3. Löschen im Namen des Administrators
  perform set_config('request.jwt.claims',
    json_build_object('sub', v_philipp, 'role', 'authenticated')::text, true);
  foreach v_id in array v_demo loop
    if exists (select 1 from public.profiles where id = v_id and deleted_at is null) then
      perform public.execute_account_deletion(v_id);
      v_geloescht := v_geloescht || v_id::text;
    end if;
  end loop;
  perform set_config('request.jwt.claims', '', true);

  return jsonb_build_object(
    'unterschriften_umgehaengt', v_umgehaengt,
    'freigaben_abgelehnt', v_abgelehnt,
    'konten_geloescht', to_jsonb(v_geloescht));
end;
$$;

revoke all on function app.demokonten_aufloesen() from public, anon, authenticated;

do $$
begin
  raise notice 'Demo-Konten: %', app.demokonten_aufloesen();
end $$;
