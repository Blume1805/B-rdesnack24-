create or replace function public.settle_due_referrals()
returns int language plpgsql security definer set search_path = public, app as $$
declare
  v_cfg public.referral_config%rowtype;
  r public.referrals%rowtype;
  v_paid_year int; v_total int;
  m public.referral_milestones%rowtype;
  v_settled int := 0; v_lifetime boolean;
begin
  if auth.uid() is not null
     and not (coalesce(public.is_admin(), false)
              or coalesce(public.auth_has_permission('users.manage'), false))
  then
    raise exception 'Keine Berechtigung für settle_due_referrals';
  end if;

  select * into v_cfg from public.referral_config where id = 1;
  if not found or not v_cfg.enabled then return 0; end if;

  for r in
    select * from public.referrals
     where status = 'qualified' and payable_at <= now()
     order by payable_at
  loop
    select count(*) into v_paid_year from public.referrals
     where referrer_id = r.referrer_id and status = 'rewarded'
       and rewarded_at > now() - interval '1 year';

    if v_paid_year >= v_cfg.max_rewards_per_year then
      update public.referrals
         set status = 'rejected', reject_reason = 'Jahres-Höchstzahl an Prämien erreicht'
       where id = r.id;
      continue;
    end if;

    select exists (
      select 1 from public.customer_subscriptions
       where customer_id = r.referrer_id and plan = 'lifetime'
    ) into v_lifetime;

    if v_lifetime then
      insert into public.referral_rewards (profile_id, referral_id, kind, months, note)
      values (r.referrer_id, r.id, 'credit', 0, 'Guthaben statt Freimonat (Lifetime-Abo)');
    else
      insert into public.referral_rewards (profile_id, referral_id, kind, months, note)
      values (r.referrer_id, r.id, 'referral', r.referrer_months, 'Erfolgreiche Empfehlung');
    end if;

    if r.referee_months > 0 then
      insert into public.referral_rewards (profile_id, referral_id, kind, months, note)
      values (r.referee_id, r.id, 'referral', r.referee_months, 'Willkommensprämie über Empfehlung');
    end if;

    update public.referrals set status = 'rewarded', rewarded_at = now() where id = r.id;

    select count(*) into v_total from public.referrals
     where referrer_id = r.referrer_id and status = 'rewarded';

    for m in select * from public.referral_milestones where threshold <= v_total order by threshold
    loop
      begin
        if m.grants_lifetime then
          insert into public.referral_rewards (profile_id, kind, months, badge_code, note)
          values (r.referrer_id, 'lifetime', 0, m.badge_code, m.label);
        else
          insert into public.referral_rewards (profile_id, kind, months, badge_code, note)
          values (r.referrer_id, 'milestone', m.bonus_months, m.badge_code, m.label);
        end if;
      exception when unique_violation then null;
      end;
    end loop;

    v_settled := v_settled + 1;
  end loop;
  return v_settled;
end; $$;
revoke all on function public.settle_due_referrals() from public;
grant execute on function public.settle_due_referrals() to authenticated;

create or replace function public.my_referral_status()
returns jsonb language plpgsql stable security definer set search_path = public, app as $$
declare
  v_uid uuid := auth.uid();
  v_cfg public.referral_config%rowtype;
  v_code text; v_rewarded int; v_pending int; v_months int;
  v_next public.referral_milestones%rowtype;
begin
  if v_uid is null then raise exception 'Nicht angemeldet'; end if;
  select * into v_cfg from public.referral_config where id = 1;
  select code into v_code from public.referral_codes where owner_id = v_uid;

  select count(*) filter (where status = 'rewarded'),
         count(*) filter (where status in ('registered', 'qualified'))
    into v_rewarded, v_pending
    from public.referrals where referrer_id = v_uid;

  select coalesce(sum(months), 0) into v_months
    from public.referral_rewards where profile_id = v_uid;

  select * into v_next from public.referral_milestones
   where threshold > v_rewarded order by threshold limit 1;

  return jsonb_build_object(
    'enabled',        coalesce(v_cfg.enabled, false),
    'code',           v_code,
    'rewarded_count', coalesce(v_rewarded, 0),
    'pending_count',  coalesce(v_pending, 0),
    'months_total',   coalesce(v_months, 0),
    'months_monthly', v_cfg.months_monthly,
    'months_yearly',  v_cfg.months_yearly,
    'next_milestone', case when v_next.threshold is null then null else
      jsonb_build_object('threshold', v_next.threshold,
                         'bonus_months', v_next.bonus_months,
                         'badge_code', v_next.badge_code,
                         'label', v_next.label) end,
    'history', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', r.id,
               'name', split_part(coalesce(p.full_name, 'Freund*in'), ' ', 1),
               'status', r.status, 'plan', r.referee_plan,
               'months', r.referrer_months, 'payable_at', r.payable_at,
               'rewarded_at', r.rewarded_at, 'registered_at', r.registered_at)
             order by r.registered_at desc)
        from public.referrals r
        join public.profiles p on p.id = r.referee_id
       where r.referrer_id = v_uid), '[]'::jsonb),
    'rewards', coalesce((
      select jsonb_agg(jsonb_build_object(
               'kind', kind, 'months', months, 'badge_code', badge_code,
               'note', note, 'granted_at', granted_at)
             order by granted_at desc)
        from public.referral_rewards where profile_id = v_uid), '[]'::jsonb)
  );
end; $$;
revoke all on function public.my_referral_status() from public;
grant execute on function public.my_referral_status() to authenticated;

create extension if not exists pg_cron;
select cron.unschedule(jobname) from cron.job where jobname = 'referral-settle';
select cron.schedule('referral-settle', '20 4 * * *',
  $job$ select public.settle_due_referrals(); $job$);
