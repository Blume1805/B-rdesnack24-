-- ===========================================================================
-- S-10, S-1, S-11 — drei kleinere Härtungen in einem Zug.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- S-10: Buckets bekommen Grenzen.
--
-- Bisher stand bei allen fünf Buckets weder eine Größen- noch eine
-- Typgrenze. Die Policies regeln, WER hochladen darf; WAS hochgeladen
-- wird, war offen. Ein Berechtigter konnte damit beliebig große Dateien
-- beliebigen Typs ablegen — Speicherkosten und ein Ablageort für Inhalte,
-- die dort nichts zu suchen haben.
--
-- Die Typlisten folgen dem, was tatsächlich hochgeladen wird (geprüft
-- über alle Upload-Stellen in Edge Functions und App), nicht dem, was
-- denkbar wäre.
-- ---------------------------------------------------------------------------

update storage.buckets set
  file_size_limit    = 26214400,           -- 25 MiB
  allowed_mime_types = array[
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'image/png', 'image/jpeg'
  ]
where id = 'documents';

update storage.buckets set
  file_size_limit    = 26214400,
  allowed_mime_types = array['application/pdf']
where id = 'signed-documents';

update storage.buckets set
  file_size_limit    = 26214400,
  allowed_mime_types = array['image/jpeg', 'image/png', 'application/pdf']
where id = 'haccp';

update storage.buckets set
  file_size_limit    = 2097152,            -- 2 MiB, eine Unterschrift
  allowed_mime_types = array['image/png', 'image/jpeg']
where id in ('partner-signatures', 'employee-signatures');

-- ---------------------------------------------------------------------------
-- S-1: Freigabelinks für E-Mail-Berichte bekommen ein echtes Geheimnis.
--
-- `email_report_share.token` hatte keinen serverseitigen Vorgabewert und
-- keine Mindestlänge; `fetch_email_report_share` prüfte die Länge nicht
-- (`email_unsubscribe` tut es mit ≥ 20). Ein Konto konnte also eine
-- Freigabe mit dem Token „1" anlegen — anonym abrufbar und in Sekunden
-- zu erraten. Dazu kam eine Laufzeit ohne Obergrenze.
--
-- Die Funktion ist gebaut, aber unbenutzt (0 Zeilen). Genau deshalb ist
-- jetzt der richtige Zeitpunkt: Regeln, die vor der ersten Zeile gelten,
-- brauchen keine Datenwanderung.
-- ---------------------------------------------------------------------------

alter table public.email_report_share
  alter column token set default encode(extensions.gen_random_bytes(24), 'hex');

alter table public.email_report_share
  drop constraint if exists email_report_share_token_laenge;
alter table public.email_report_share
  add constraint email_report_share_token_laenge check (length(token) >= 32);

alter table public.email_report_share
  drop constraint if exists email_report_share_laufzeit;
alter table public.email_report_share
  add constraint email_report_share_laufzeit
  check (expires_at <= created_at + interval '90 days');

comment on column public.email_report_share.token is
  'Zufälliges Geheimnis, serverseitig erzeugt (48 Hex-Zeichen). '
  'Mindestlänge 32 ist erzwungen — ein selbst gewählter kurzer Token '
  'wäre erratbar (S-1, 02.09.2026).';

create or replace function public.fetch_email_report_share(
  p_token text,
  p_user_agent text default null,
  p_referer text default null,
  p_client_hint text default null
)
returns jsonb
language plpgsql
security definer
set search_path to public
as $$
declare
  s public.email_report_share;
  v_views integer := 0;
  v_outcome text;
  v_ua   text := left(p_user_agent,  300);
  v_ref  text := left(p_referer,     300);
  v_hint text := left(p_client_hint, 120);
begin
  -- Zu kurz, um echt zu sein: gar nicht erst nachschlagen und auch nicht
  -- protokollieren — sonst schreibt ein Ratedurchlauf die Zugriffstabelle
  -- voll.
  if p_token is null or length(p_token) < 32 then
    return jsonb_build_object('status', 'not_found');
  end if;

  select * into s from public.email_report_share where token = p_token;

  if not found then
    insert into public.email_report_share_access
      (share_id, token, outcome, user_agent, referer, client_hint)
    values (null, left(coalesce(p_token, ''), 200), 'not_found', v_ua, v_ref, v_hint);
    return jsonb_build_object('status', 'not_found');
  end if;

  select count(*) into v_views
  from public.email_report_share_access a
  where a.share_id = s.id and a.outcome = 'ok';

  if s.revoked_at is not null then
    v_outcome := 'revoked';
  elsif s.expires_at <= now() then
    v_outcome := 'expired';
  elsif s.max_views is not null and v_views >= s.max_views then
    v_outcome := 'view_limit';
  else
    v_outcome := 'ok';
  end if;

  insert into public.email_report_share_access
    (share_id, token, outcome, user_agent, referer, client_hint)
  values (s.id, s.token, v_outcome, v_ua, v_ref, v_hint);

  if v_outcome <> 'ok' then
    return jsonb_build_object('status', v_outcome, 'expires_at', s.expires_at);
  end if;

  return jsonb_build_object(
    'status', 'ok',
    'payload', s.payload,
    'note', s.note,
    'entry_count', s.entry_count,
    'expires_at', s.expires_at,
    'created_at', s.created_at,
    'view_number', v_views + 1,
    'max_views', s.max_views
  );
end;
$$;

-- ---------------------------------------------------------------------------
-- S-11: Kein Auskunftsschalter über fremde Berechtigungen.
--
-- `app_role(uid)`, `is_internal(uid)` und `auth_has_permission(perm, uid)`
-- nahmen eine fremde Konto-ID entgegen und beantworteten sie. Als Kunde A
-- gefragt: `auth_has_permission('finance.view', <uid Gesellschafter>)`
-- → true. Damit lässt sich zu jeder bekannten ID herausfinden, wer
-- welche Rechte hat — eine Zielauswahlhilfe.
--
-- Die Vorgabewerte bleiben, damit alle Policies unverändert
-- weiterlaufen. Nur die Frage nach einem FREMDEN Konto wird abgewiesen,
-- und auch das nur, wenn sie aus einem Client-Request kommt: Aufrufe
-- ohne JWT-Rolle `anon`/`authenticated` — Serverfunktionen, Cron,
-- service_role — dürfen weiterhin über andere Konten urteilen, weil
-- genau das ihre Aufgabe ist.
-- ---------------------------------------------------------------------------

create or replace function app.darf_fremdes_konto_beurteilen(p_uid uuid)
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select
    p_uid is not distinct from (select auth.uid())
    or coalesce(
         nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role',
         'server'
       ) not in ('anon', 'authenticated')
    or exists (
      select 1 from public.profiles me
      where me.id = (select auth.uid())
        and me.status = 'active' and me.deleted_at is null
        and me.role in ('system_admin', 'shareholder', 'employee')
    );
$$;

comment on function app.darf_fremdes_konto_beurteilen(uuid) is
  'Wahr, wenn nach dem eigenen Konto gefragt wird, der Aufruf nicht aus '
  'einem Client-Request stammt, oder der Fragende intern ist. Schliesst '
  'den Auskunftsschalter über fremde Rechte (S-11, 02.09.2026).';

create or replace function public.app_role(uid uuid default auth.uid())
returns app.role_key
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select p.role from public.profiles p
  where p.id = uid and p.status = 'active' and p.deleted_at is null
    and app.darf_fremdes_konto_beurteilen(uid);
$$;

create or replace function public.is_internal(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = uid and p.status = 'active' and p.deleted_at is null
      and p.role in ('system_admin','shareholder','employee')
      and app.darf_fremdes_konto_beurteilen(uid)
  );
$$;

create or replace function public.auth_has_permission(perm text, uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  with me as (
    select p.id, p.role from public.profiles p
    where p.id = uid and p.status = 'active' and p.deleted_at is null
      and app.darf_fremdes_konto_beurteilen(uid)
  )
  select
    case when not exists (select 1 from me) then false
    when exists (select 1 from public.user_permissions up, me
      where up.user_id = me.id and up.permission_key = perm and up.granted = false) then false
    when (select role from me) = 'system_admin' then true
    when exists (select 1 from public.role_permissions rp, me
      where rp.role_key = me.role and rp.permission_key = perm) then true
    when exists (select 1 from public.user_permissions up, me
      where up.user_id = me.id and up.permission_key = perm and up.granted = true) then true
    else false end;
$$;
