alter policy "own shares insertable" on public.email_report_share
  with check (created_by = (select auth.uid()));

alter policy "own shares readable" on public.email_report_share
  using (created_by = (select auth.uid()));

alter policy "own shares updatable" on public.email_report_share
  using (created_by = (select auth.uid()))
  with check (created_by = (select auth.uid()));

alter policy "own share access readable" on public.email_report_share_access
  using (
    exists (
      select 1 from public.email_report_share s
       where s.id = email_report_share_access.share_id
         and s.created_by = (select auth.uid())
    )
  );

alter policy "authenticated users can archive their test sends"
  on public.email_test_log
  with check (created_by = (select auth.uid()));

alter policy "own email test log rows are readable" on public.email_test_log
  using (created_by = (select auth.uid()));

alter policy complaints_insert on public.purchase_complaints
  with check (
    customer_id = (select auth.uid())
    and status = 'open'::app.complaint_status
    and exists (
      select 1 from public.purchases pu
       where pu.id = purchase_complaints.purchase_id
         and pu.customer_id = (select auth.uid())
    )
  );

alter policy complaints_read on public.purchase_complaints
  using (
    customer_id = (select auth.uid())
    or exists (
      select 1 from public.profiles p
       where p.status = 'active'::app.profile_status
         and p.deleted_at is null
         and p.id = (select auth.uid())
         and p.role = any (array['system_admin'::app.role_key,
                                 'shareholder'::app.role_key])
    )
  );

alter policy complaints_update on public.purchase_complaints
  using (
    exists (
      select 1 from public.profiles p
       where p.status = 'active'::app.profile_status
         and p.deleted_at is null
         and p.id = (select auth.uid())
         and p.role = any (array['system_admin'::app.role_key,
                                 'shareholder'::app.role_key])
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
       where p.status = 'active'::app.profile_status
         and p.deleted_at is null
         and p.id = (select auth.uid())
         and p.role = any (array['system_admin'::app.role_key,
                                 'shareholder'::app.role_key])
    )
  );

create index if not exists challenges_reward_badge_idx
  on public.challenges (reward_badge);
create index if not exists donation_causes_verified_by_idx
  on public.donation_causes (verified_by);
create index if not exists email_templates_updated_by_idx
  on public.email_templates (updated_by);
create index if not exists email_test_log_created_by_idx
  on public.email_test_log (created_by);
create index if not exists purchase_complaints_updated_by_idx
  on public.purchase_complaints (updated_by);
create index if not exists referral_rewards_referral_id_idx
  on public.referral_rewards (referral_id);
