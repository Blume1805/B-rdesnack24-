create table if not exists public.store_subscription (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid references public.profiles(id) on delete set null,
  store       text not null check (store in ('apple','google')),
  store_ref   text not null,
  product_id  text not null,
  status      text not null default 'unknown'
              check (status in ('unknown','active','in_grace','on_hold','paused','expired','revoked','refunded')),
  expires_at  timestamptz,
  auto_renew  boolean,
  environment text not null default 'production'
              check (environment in ('sandbox','production')),
  purchased_at timestamptz,
  cancelled_at timestamptz,
  revoked_at   timestamptz,
  last_event_at     timestamptz,
  last_notification text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (store, store_ref)
);

create index if not exists store_subscription_profil_idx on public.store_subscription (profile_id);
create index if not exists store_subscription_ablauf_idx
  on public.store_subscription (expires_at) where status in ('active','in_grace');

comment on table public.store_subscription is
  'Was der Laden über das Abo sagt: ob und bis wann bezahlt ist. Die Frage, was der Kunde gewählt und wozu er zugestimmt hat, beantwortet weiterhin customer_subscriptions — das sind zwei Dinge und bleiben getrennt.';

alter table public.store_subscription enable row level security;
revoke all on public.store_subscription from anon, authenticated;

drop policy if exists store_sub_read on public.store_subscription;
create policy store_sub_read on public.store_subscription
  for select to authenticated
  using (profile_id = (select auth.uid()) or public.is_internal((select auth.uid())));
grant select on public.store_subscription to authenticated;

create table if not exists public.store_notification (
  id            uuid primary key default gen_random_uuid(),
  store         text not null check (store in ('apple','google')),
  notification_id text not null,
  notification_type text,
  subtype           text,
  store_ref         text,
  event_at          timestamptz,
  outcome       text not null,
  note          text,
  raw           jsonb not null,
  received_at   timestamptz not null default now(),
  unique (store, notification_id)
);

create index if not exists store_notification_ref_idx
  on public.store_notification (store, store_ref, event_at desc);

alter table public.store_notification enable row level security;
revoke all on public.store_notification from anon, authenticated;

drop policy if exists store_notif_read on public.store_notification;
create policy store_notif_read on public.store_notification
  for select to authenticated
  using (public.is_internal((select auth.uid())));
grant select on public.store_notification to authenticated;

create or replace function public.store_notification_apply(
  p_store             text,
  p_notification_id   text,
  p_notification_type text,
  p_subtype           text,
  p_store_ref         text,
  p_product_id        text,
  p_status            text,
  p_expires_at        timestamptz,
  p_auto_renew        boolean,
  p_environment       text,
  p_event_at          timestamptz,
  p_raw               jsonb
)
returns text
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_vorher_event timestamptz;
  v_profil       uuid;
  v_ergebnis     text;
begin
  if p_store not in ('apple','google') then
    raise exception 'Unbekannter Laden: %', p_store;
  end if;

  if exists (select 1 from public.store_notification
              where store = p_store and notification_id = p_notification_id) then
    return 'duplicate';
  end if;

  select last_event_at, profile_id
    into v_vorher_event, v_profil
    from public.store_subscription
   where store = p_store and store_ref = p_store_ref;

  if v_vorher_event is not null
     and p_event_at is not null
     and p_event_at < v_vorher_event then
    v_ergebnis := 'stale';
  else
    insert into public.store_subscription
      (profile_id, store, store_ref, product_id, status, expires_at,
       auto_renew, environment, last_event_at, last_notification, updated_at)
    values
      (v_profil, p_store, p_store_ref, p_product_id,
       coalesce(p_status, 'unknown'), p_expires_at, p_auto_renew,
       coalesce(p_environment, 'production'), p_event_at, p_notification_type, now())
    on conflict (store, store_ref) do update set
      product_id        = excluded.product_id,
      status            = excluded.status,
      expires_at        = excluded.expires_at,
      auto_renew        = excluded.auto_renew,
      environment       = excluded.environment,
      last_event_at     = excluded.last_event_at,
      last_notification = excluded.last_notification,
      cancelled_at      = case when excluded.auto_renew is false
                                 and store_subscription.cancelled_at is null
                               then now()
                               else store_subscription.cancelled_at end,
      revoked_at        = case when excluded.status in ('revoked','refunded')
                               then now()
                               else store_subscription.revoked_at end,
      updated_at        = now();

    v_ergebnis := case when v_profil is null then 'unmatched' else 'applied' end;
  end if;

  insert into public.store_notification
    (store, notification_id, notification_type, subtype, store_ref,
     event_at, outcome, raw)
  values
    (p_store, p_notification_id, p_notification_type, p_subtype, p_store_ref,
     p_event_at, v_ergebnis, coalesce(p_raw, '{}'::jsonb));

  return v_ergebnis;
end;
$function$;

comment on function public.store_notification_apply is
  'Nimmt eine Store-Benachrichtigung entgegen. Wiederholungen ergeben "duplicate", vertauschte Reihenfolge "stale" — beides ohne Fehler, damit der Laden aufhört zu wiederholen.';

create or replace function public.store_subscription_claim(p_store text, p_store_ref text)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid    uuid := auth.uid();
  v_bisher uuid;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;
  if p_store not in ('apple','google') then
    raise exception 'Unbekannter Laden: %', p_store;
  end if;

  select profile_id into v_bisher
    from public.store_subscription
   where store = p_store and store_ref = p_store_ref;

  if not found then
    insert into public.store_subscription
      (profile_id, store, store_ref, product_id, status)
    values (v_uid, p_store, p_store_ref, 'unbekannt', 'unknown');
    return true;
  end if;

  if v_bisher is not null and v_bisher <> v_uid then
    raise exception 'Dieser Kauf gehört bereits zu einem anderen Konto';
  end if;

  update public.store_subscription
     set profile_id = v_uid, updated_at = now()
   where store = p_store and store_ref = p_store_ref;

  return true;
end;
$function$;

create or replace function public.has_paid_subscription(p_profile uuid)
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select exists (
    select 1 from public.store_subscription s
     where s.profile_id = p_profile
       and s.environment = 'production'
       and s.status in ('active','in_grace')
       and (s.expires_at is null or s.expires_at > now())
       and s.revoked_at is null
  );
$function$;

create or replace function public.my_store_subscription()
returns table (
  store text, product_id text, status text,
  expires_at timestamptz, auto_renew boolean, bezahlt boolean
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select s.store, s.product_id, s.status, s.expires_at, s.auto_renew,
         (s.environment = 'production'
          and s.status in ('active','in_grace')
          and (s.expires_at is null or s.expires_at > now())
          and s.revoked_at is null)
    from public.store_subscription s
   where s.profile_id = (select auth.uid())
   order by s.updated_at desc;
$function$;

update public.email_templates
   set is_active = false,
       precondition =
         'Entfällt: Bezahlt wird über App Store und Play Store, und beide verschicken Beleg, Zahlungsmeldung und Verlängerungshinweis selbst. Eine zweite Mail von uns zur selben Sache wäre doppelt und im Zweifel widersprüchlich. Wird nur gebraucht, falls doch einmal ein eigener Zahlungsweg dazukommt — etwa für die Web-App, wo weder Apple noch Google kassieren kann.'
 where key in (
   'abo_rechnung','abo_zahlung_erfolgreich','abo_zahlung_fehlgeschlagen',
   'abo_zahlungsmittel_laeuft_ab','abo_zahlungsmittel_geaendert','abo_verlaengert',
   'abo_test_beginnt','abo_test_endet_bald','abo_test_beendet'
 );

revoke all on function public.store_notification_apply(
  text,text,text,text,text,text,text,timestamptz,boolean,text,timestamptz,jsonb)
  from public, anon, authenticated;
revoke all on function public.has_paid_subscription(uuid) from public, anon, authenticated;
revoke all on function public.store_subscription_claim(text,text) from public, anon;
revoke all on function public.my_store_subscription() from public, anon;

grant execute on function public.store_subscription_claim(text,text) to authenticated;
grant execute on function public.my_store_subscription() to authenticated;
