revoke all on public.donation_causes from anon, authenticated;
revoke all on public.donation_votes  from anon, authenticated;

drop policy if exists dc_read on public.donation_causes;
create policy dc_read on public.donation_causes
  for select to authenticated
  using (
    deleted_at is null
    and (
      status = 'active'
      or (status = 'suggested' and suggested_by = (select auth.uid()))
      or public.is_internal((select auth.uid()))
    )
  );

drop policy if exists dc_insert on public.donation_causes;
create policy dc_insert on public.donation_causes
  for insert to authenticated
  with check (public.is_internal((select auth.uid())));

drop policy if exists dv_read on public.donation_votes;
create policy dv_read on public.donation_votes
  for select to authenticated
  using (customer_id = (select auth.uid()));

grant execute on function public.donation_causes_list()            to authenticated;
grant execute on function public.vote_donation_cause(uuid)         to authenticated;
grant execute on function public.suggest_donation_cause(text,text) to authenticated;

revoke all on function public.donation_causes_list()            from public, anon;
revoke all on function public.vote_donation_cause(uuid)         from public, anon;
revoke all on function public.suggest_donation_cause(text,text) from public, anon;

comment on table public.donation_causes is
  'Nur über die RPCs erreichbar (0098). Direkte Tabellenrechte sind anon und authenticated entzogen, weil sonst Stammdaten wie tax_number und contact_email mitlesbar wären und status frei setzbar war.';
comment on table public.donation_votes is
  'Nur über die RPCs erreichbar (0098). Wer für welchen Zweck gestimmt hat, ist eine Aussage über die Person und geht andere Kund*innen nichts an.';
