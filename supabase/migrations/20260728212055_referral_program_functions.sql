create or replace function app.new_referral_code()
returns text language plpgsql volatile set search_path = public, app as $$
declare
  v_alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v_code text; v_try int := 0;
begin
  loop
    v_code := '';
    for i in 1..8 loop
      v_code := v_code || substr(v_alphabet, 1 + floor(random() * length(v_alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from public.referral_codes where code = v_code);
    v_try := v_try + 1;
    if v_try > 50 then raise exception 'Konnte keinen freien Empfehlungscode erzeugen'; end if;
  end loop;
  return v_code;
end; $$;

create or replace function public.my_referral_code()
returns text language plpgsql security definer set search_path = public, app as $$
declare v_uid uuid := auth.uid(); v_code text;
begin
  if v_uid is null then raise exception 'Nicht angemeldet'; end if;
  select code into v_code from public.referral_codes where owner_id = v_uid;
  if v_code is not null then return v_code; end if;
  v_code := app.new_referral_code();
  insert into public.referral_codes (owner_id, code) values (v_uid, v_code)
  on conflict (owner_id) do nothing;
  select code into v_code from public.referral_codes where owner_id = v_uid;
  return v_code;
end; $$;
revoke all on function public.my_referral_code() from public;
grant execute on function public.my_referral_code() to authenticated;

create or replace function public.register_referral(p_code text)
returns jsonb language plpgsql security definer set search_path = public, app as $$
declare
  v_uid uuid := auth.uid();
  v_cfg public.referral_config%rowtype;
  v_referrer uuid; v_my_email text; v_ref_email text; v_has_sub boolean;
begin
  if v_uid is null then raise exception 'Nicht angemeldet'; end if;
  select * into v_cfg from public.referral_config where id = 1;
  if not found or not v_cfg.enabled then
    return jsonb_build_object('ok', false, 'reason', 'programm_inaktiv');
  end if;

  select owner_id into v_referrer from public.referral_codes
   where code = upper(trim(p_code));
  if v_referrer is null then
    return jsonb_build_object('ok', false, 'reason', 'code_unbekannt');
  end if;
  if v_referrer = v_uid then
    return jsonb_build_object('ok', false, 'reason', 'eigenwerbung');
  end if;

  select email into v_my_email  from public.profiles where id = v_uid;
  select email into v_ref_email from public.profiles where id = v_referrer;
  if lower(coalesce(v_my_email, '')) = lower(coalesce(v_ref_email, '')) then
    return jsonb_build_object('ok', false, 'reason', 'eigenwerbung');
  end if;

  select exists (select 1 from public.customer_subscriptions where customer_id = v_referrer)
    into v_has_sub;
  if not v_has_sub then
    return jsonb_build_object('ok', false, 'reason', 'werber_ohne_abo');
  end if;

  if exists (select 1 from public.customer_subscriptions where customer_id = v_uid) then
    return jsonb_build_object('ok', false, 'reason', 'schon_abonnent');
  end if;

  insert into public.referrals (referrer_id, referee_id, code)
  values (v_referrer, v_uid, upper(trim(p_code)))
  on conflict (referee_id) do nothing;
  if not found then
    return jsonb_build_object('ok', false, 'reason', 'bereits_geworben');
  end if;
  return jsonb_build_object('ok', true, 'reason', 'registriert');
end; $$;
revoke all on function public.register_referral(text) from public;
grant execute on function public.register_referral(text) to authenticated;

create or replace function app.qualify_referral_for(p_customer uuid, p_plan app.subscription_plan)
returns void language plpgsql security definer set search_path = public, app as $$
declare
  v_cfg public.referral_config%rowtype;
  v_ref public.referrals%rowtype;
  v_count int; v_months smallint;
begin
  select * into v_cfg from public.referral_config where id = 1;
  if not found or not v_cfg.enabled then return; end if;
  select * into v_ref from public.referrals
   where referee_id = p_customer and status = 'registered';
  if not found then return; end if;

  select count(*) into v_count from public.customer_subscriptions where customer_id = p_customer;
  if v_count <> 1 then
    update public.referrals set status = 'rejected', reject_reason = 'nicht das erste Abo'
     where id = v_ref.id;
    return;
  end if;

  v_months := case p_plan
    when 'monthly' then v_cfg.months_monthly
    when 'yearly'  then v_cfg.months_yearly
    else 0 end;

  update public.referrals
     set status = 'qualified', referee_plan = p_plan,
         referrer_months = v_months, referee_months = v_months,
         qualified_at = now(),
         payable_at = now() + (v_cfg.withdrawal_days || ' days')::interval
   where id = v_ref.id;
end; $$;

comment on function app.qualify_referral_for(uuid, app.subscription_plan) is
  'Stuft eine offene Empfehlung beim ersten Abo hoch. Einstiegspunkt für einen späteren Payment-Webhook.';

create or replace function app.tg_referral_on_subscription()
returns trigger language plpgsql security definer set search_path = public, app as $$
begin
  perform app.qualify_referral_for(new.customer_id, new.plan);
  return new;
end; $$;

drop trigger if exists trg_referral_on_subscription on public.customer_subscriptions;
create trigger trg_referral_on_subscription
  after insert on public.customer_subscriptions
  for each row execute function app.tg_referral_on_subscription();
