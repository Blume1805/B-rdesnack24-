-- ===========================================================================
-- Konto für Gesellschafter oder Beschäftigte anlegen
-- ===========================================================================
--
-- Vorlage, weil beim ersten Mal genau eine Kleinigkeit gefehlt hat und das
-- Konto dadurch unbrauchbar war, ohne dass man es ihm ansah.
--
-- DIE FALLE: GoTrue liest acht Spalten in auth.users als Text, nicht als
-- "Text oder nichts". Bleiben sie NULL, bricht der Dienst beim Suchen des
-- Kontos ab:
--
--   error finding user: sql: Scan error on column index 3,
--   name "confirmation_token": converting NULL to string is unsupported
--
-- Die Wirkung ist heimtückisch. Das Konto sieht in jeder SQL-Abfrage richtig
-- aus -- Rolle, Status, Rechte, alles stimmt --, aber "Passwort vergessen"
-- schlägt fehl, und die Oberfläche zeigt nur, dass keine E-Mail ankam. Man
-- sucht dann beim Mailversand, und dort ist nichts kaputt.
--
-- Deshalb: die acht Spalten immer auf '' setzen, nie auf NULL.
--
-- KEIN PASSWORT SETZEN. encrypted_password bleibt leer, damit niemand ausser
-- der Person selbst je eines kennt. Der Weg hinein führt einmalig über
-- "Passwort vergessen"; email_confirmed_at muss dafür gesetzt sein.
--
-- Vor dem Ausführen anpassen: die drei Werte unten.
-- ===========================================================================

do $$
declare
  -- ---- anpassen ----------------------------------------------------------
  v_email  text          := 'vorname.nachname@example.com';
  v_name   text          := 'Vorname Nachname';
  v_rolle  app.role_key  := 'shareholder';   -- oder 'employee', 'system_admin'
  -- ------------------------------------------------------------------------
  v_admin  uuid;
  v_neu    uuid := gen_random_uuid();
begin
  -- Ein vorhandener Administrator. Die Statusfreigabe von 'invited' auf
  -- 'active' laesst app.guard_profile_update nur ihm durchgehen.
  select id into v_admin from public.profiles
   where role = 'system_admin' and status = 'active' and deleted_at is null
   order by created_at limit 1;
  if v_admin is null then
    raise exception 'Kein aktiver Administrator vorhanden. Ohne ihn laesst '
                    'sich kein Konto freischalten.';
  end if;

  if exists (select 1 from auth.users where lower(email) = lower(v_email)) then
    raise exception 'Fuer % besteht bereits ein Konto.', v_email;
  end if;

  perform set_config('request.jwt.claims',
    json_build_object('sub', v_admin, 'role','authenticated')::text, true);

  -- invited_at ist noetig, damit app.handle_new_user die Rolle aus den
  -- Metadaten uebernimmt. Bei einer Selbstregistrierung wird sie bewusst
  -- ignoriert, sonst koennte sich jeder per Browser zum Administrator machen.
  insert into auth.users (
    id, instance_id, aud, role, email, email_confirmed_at, invited_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    -- Die acht Spalten aus der Falle oben:
    confirmation_token, recovery_token,
    email_change_token_new, email_change_token_current, email_change,
    phone_change, phone_change_token, reauthentication_token
  ) values (
    v_neu, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
    lower(btrim(v_email)), now(), now(),
    '{"provider":"email","providers":["email"]}'::jsonb,
    jsonb_build_object('role', v_rolle::text, 'full_name', v_name),
    now(), now(),
    '', '', '', '', '', '', '', ''
  );

  insert into auth.identities (
    id, provider_id, user_id, identity_data, provider, created_at, updated_at
  ) values (
    gen_random_uuid(), v_neu::text, v_neu,
    jsonb_build_object('sub', v_neu::text, 'email', lower(btrim(v_email)),
                       'email_verified', true, 'phone_verified', false),
    'email', now(), now()
  );

  update public.profiles set status = 'active', activated_at = now()
   where id = v_neu;

  perform set_config('request.jwt.claims', '', true);

  raise notice 'Angelegt: % (%) als %. Kein Passwort gesetzt -- die Person '
               'setzt es ueber "Passwort vergessen".', v_name, v_email, v_rolle;
end $$;

-- Pflichtgegenprobe nach jeder Anlage. Schlaegt sie an, ist das Konto
-- unbrauchbar, auch wenn es sonst richtig aussieht.
select u.email,
       not (u.confirmation_token is null or u.recovery_token is null
         or u.email_change_token_new is null or u.email_change_token_current is null
         or u.email_change is null or u.phone_change is null
         or u.phone_change_token is null or u.reauthentication_token is null)
         as passwort_zuruecksetzen_moeglich,
       p.role::text as rolle, p.status::text as status
from auth.users u join public.profiles p on p.id = u.id
order by u.created_at desc
limit 5;
