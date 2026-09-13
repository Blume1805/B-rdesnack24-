-- Gesellschafter-Unterschriften für PDF-Reports
create table if not exists public.partner_signatures (
  id                     uuid primary key default gen_random_uuid(),
  full_name              text not null,
  role_label             text not null default 'Gesellschafter',
  docusign_user_id       text,
  docusign_account_id    text,
  docusign_signature_uri text,   -- z.B. /users/xxx/signatures/yyy/signature_image
  image_url              text,   -- Supabase Storage URL, falls Bild eingespielt
  sort_order             int not null default 0,
  created_at             timestamptz not null default now()
);

alter table public.partner_signatures enable row level security;
drop policy if exists ps_read on public.partner_signatures;
create policy ps_read on public.partner_signatures
  for select to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid()
                    and p.role in ('system_admin','shareholder','employee')));

-- Seed: Pia + Philipp (Philipps DocuSign-URI aus MCP-Konnektor)
insert into public.partner_signatures(full_name, role_label, docusign_user_id, docusign_account_id, docusign_signature_uri, sort_order)
values
  ('Pia Blume', 'Gesellschafterin',
   null, null, null, 1),
  ('Philipp Blume', 'Gesellschafter',
   '7c998655-7597-408c-8b65-d37b37ab8c53',
   'd66bd608-cbc3-4677-84f0-e17fc2be8e2a',
   '/users/7c998655-7597-408c-8b65-d37b37ab8c53/signatures/55561321-e780-4b8d-8ee2-f8a901954572/signature_image',
   2)
on conflict do nothing;

create or replace function public.list_partner_signatures()
returns setof public.partner_signatures
language sql
security definer
set search_path = public, app
as $$
  select * from public.partner_signatures order by sort_order, full_name
$$;

grant execute on function public.list_partner_signatures() to authenticated;
