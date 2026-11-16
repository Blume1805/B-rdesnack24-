-- Storage-Bucket für Signaturbilder — nicht public,
-- Zugriff nur für Admin/Gesellschafter über Signed-URLs.
insert into storage.buckets (id, name, public)
values ('partner-signatures', 'partner-signatures', false)
on conflict (id) do nothing;

drop policy if exists "partner_sig_ro" on storage.objects;
create policy "partner_sig_ro"
  on storage.objects for select to authenticated
  using (bucket_id = 'partner-signatures' and exists (
    select 1 from public.profiles p
     where p.id = auth.uid()
       and p.role in ('system_admin','shareholder')
  ));

drop policy if exists "partner_sig_ins" on storage.objects;
create policy "partner_sig_ins"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'partner-signatures' and exists (
    select 1 from public.profiles p
     where p.id = auth.uid()
       and p.role in ('system_admin','shareholder')
  ));

drop policy if exists "partner_sig_upd" on storage.objects;
create policy "partner_sig_upd"
  on storage.objects for update to authenticated
  using (bucket_id = 'partner-signatures' and exists (
    select 1 from public.profiles p
     where p.id = auth.uid()
       and p.role in ('system_admin','shareholder')
  ));

-- RPC zum Setzen von image_url auf partner_signatures nach Upload:
create or replace function public.set_partner_signature_image(
  p_signature_id uuid,
  p_image_url    text,
  p_captured_via text default 'manual'
) returns void
language plpgsql security definer set search_path=public,app as $$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  update public.partner_signatures
     set image_url = p_image_url,
         captured_via = p_captured_via,
         captured_at = now()
   where id = p_signature_id;
end $$;
grant execute on function public.set_partner_signature_image(uuid, text, text) to authenticated;

-- RPC zum Verknüpfen einer Signatur mit einem Profil (falls noch nicht):
create or replace function public.link_partner_signature_profile(
  p_signature_id uuid,
  p_profile_id   uuid
) returns void
language plpgsql security definer set search_path=public,app as $$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role <> 'system_admin' then
    raise exception 'Nicht autorisiert';
  end if;
  update public.partner_signatures
     set profile_id = p_profile_id
   where id = p_signature_id;
end $$;
grant execute on function public.link_partner_signature_profile(uuid, uuid) to authenticated;
