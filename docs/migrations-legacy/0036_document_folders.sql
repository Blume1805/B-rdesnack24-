-- 0036 — Feste Ordnerstruktur für Dokumente + Blanko-Vorlagen
--
-- Ordner sind vorgegebene Kategorien (Slug + Anzeige-Name + Sortier-Rang
-- + Icon). Blanko-Vorlagen werden pro Ordner mit is_template=true
-- markiert und in der Liste ganz oben fixiert.

alter table public.documents
  add column if not exists is_template boolean not null default false;

create table if not exists public.document_folders (
  slug        text primary key,
  label       text not null,
  sort_order  int  not null,
  icon        text
);

insert into public.document_folders(slug, label, sort_order, icon) values
  ('verfahrensdoku', 'Verfahrensdokumentation (GoBD)',       10, 'description'),
  ('haccp_konzept',  'HACCP-Konzept & Hygieneplan',          20, 'health_and_safety'),
  ('ifsg',           'IfSG-Belehrungen',                     30, 'medical_information'),
  ('reinigung',      'Reinigungspläne',                       40, 'cleaning_services'),
  ('miete',          'Mietverträge (Automaten-Standorte)',   50, 'store'),
  ('arbeitsvertrag', 'Arbeitsverträge',                       60, 'work'),
  ('lieferant',      'Lieferantenverträge',                   70, 'local_shipping'),
  ('wartung',        'Wartungsverträge (Automaten)',          80, 'build'),
  ('versicherung',   'Versicherungspolicen',                  90, 'shield'),
  ('steuern',        'Steuerbescheide & Betriebsprüfungen',  100, 'gavel'),
  ('sonstiges',      'Sonstiges',                           1000, 'folder_open')
on conflict (slug) do update set label=excluded.label, sort_order=excluded.sort_order, icon=excluded.icon;

grant select on public.document_folders to authenticated;

-- Bestandsdaten: falls keine Kategorie oder freie Kategorie → auf 'sonstiges'
-- setzen; das eine bekannte Hygienekonzept nach 'haccp_konzept'.
update public.documents
   set category = 'haccp_konzept'
 where lower(title) like '%hygiene%'
   and (category is null or category not in (select slug from public.document_folders));

update public.documents
   set category = 'sonstiges'
 where category is null
    or category not in (select slug from public.document_folders);

-- ── list_documents neu: liefert folder_slug, folder_label, folder_order,
--    is_template. Blanko-Vorlagen sortieren INNERHALB des Ordners zuerst.
drop function if exists public.list_documents();
create function public.list_documents()
returns table(
  id                 uuid,
  title              text,
  category           text,
  folder_label       text,
  folder_order       int,
  is_template        boolean,
  current_version    integer,
  status             text,
  valid_until        date,
  expiry_status      text,
  latest_file_path   text,
  updated_at         timestamptz
)
language plpgsql
security definer
set search_path = public, app
as $$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  return query
    select d.id, d.title, d.category,
           coalesce(f.label, 'Sonstiges'),
           coalesce(f.sort_order, 1000),
           d.is_template,
           d.current_version, d.status::text,
           d.valid_until,
           case
             when d.valid_until is null                              then 'none'
             when d.valid_until <  current_date                      then 'expired'
             when d.valid_until <= current_date + interval '30 days' then 'expiring'
             else 'ok'
           end as expiry_status,
           (select v.file_path from public.document_versions v
             where v.document_id = d.id and v.version = d.current_version
             limit 1) as latest_file_path,
           d.updated_at
      from public.documents d
      left join public.document_folders f on f.slug = d.category
     where d.archived_at is null
     order by coalesce(f.sort_order, 1000),
              d.is_template desc,        -- Blanko ganz oben
              d.updated_at desc nulls last,
              d.title;
end;
$$;
grant execute on function public.list_documents() to authenticated;

-- RPC: alle Ordner ausliefern (für den Dropdown im „Neu"-Dialog)
create or replace function public.list_document_folders()
returns table(slug text, label text, sort_order int, icon text)
language sql security definer
set search_path = public
as $$
  select slug, label, sort_order, icon
    from public.document_folders
   order by sort_order;
$$;
grant execute on function public.list_document_folders() to authenticated;
