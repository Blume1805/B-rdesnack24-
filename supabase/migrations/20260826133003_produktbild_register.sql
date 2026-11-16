create table if not exists public.produktbilder (
  id                uuid primary key default gen_random_uuid(),
  produkt_id        uuid references public.products(id) on delete set null,
  produkt           text not null check (length(btrim(produkt)) between 1 and 200),
  originalfoto      text not null check (length(btrim(originalfoto)) between 1 and 200),
  fotograf          text not null default 'Bördesnack24'
                    check (length(btrim(fotograf)) between 1 and 120),
  aufnahmedatum     date not null check (aufnahmedatum >= date '2020-01-01'),
  ki_verwendet      boolean not null default false,
  ki_system         text check (ki_system is null or length(btrim(ki_system)) between 1 and 120),
  bearbeitung       text check (bearbeitung is null or length(bearbeitung) <= 500),
  produkt_veraendert boolean not null default false,
  ki_neues_produkt   boolean not null default false,
  ki_neue_umgebung   boolean not null default false,
  art50_geprueft    boolean not null default false,
  kennzeichnung_noetig boolean
    generated always as (
      ki_verwendet and (produkt_veraendert or ki_neues_produkt or ki_neue_umgebung)
    ) stored,
  freigegeben_von   text check (freigegeben_von is null or length(btrim(freigegeben_von)) between 1 and 120),
  freigabe_am       date,
  bildpfad          text,
  bemerkung         text check (bemerkung is null or length(bemerkung) <= 1000),
  created_at        timestamptz not null default now(),
  created_by        uuid references public.profiles(id),
  updated_at        timestamptz not null default now(),
  updated_by        uuid references public.profiles(id),
  deleted_at        timestamptz,
  constraint produktbilder_ki_system_stimmig check (
    (ki_verwendet and ki_system is not null and length(btrim(ki_system)) > 0)
    or (not ki_verwendet and ki_system is null)
  ),
  constraint produktbilder_ki_folgen_stimmig check (
    ki_verwendet or (not ki_neues_produkt and not ki_neue_umgebung)
  ),
  constraint produktbilder_freigabe_vollstaendig check (
    (freigegeben_von is null) = (freigabe_am is null)
  ),
  constraint produktbilder_freigabe_erst_nach_pruefung check (
    freigabe_am is null or art50_geprueft
  ),
  constraint produktbilder_freigabe_nicht_vor_aufnahme check (
    freigabe_am is null or freigabe_am >= aufnahmedatum
  )
);

comment on table public.produktbilder is
  'Bildregister: Herkunft, Bearbeitung, KI-Einsatz und Freigabe je Produktbild. Grundlage für den urheber- und markenrechtlichen Nachweis und für die Kennzeichnungspflicht nach Art. 50 Abs. 4 EU AI Act.';

comment on column public.produktbilder.kennzeichnung_noetig is
  'Gerechnet, nicht eingetragen: KI verwendet UND Produkt oder Umgebung verändert. Ist sie wahr, gehört ein sichtbarer Hinweis an jede Stelle, an der das Bild im Kundenbereich erscheint.';

create index if not exists produktbilder_produkt_idx
  on public.produktbilder (produkt_id) where deleted_at is null;
create index if not exists produktbilder_datum_idx
  on public.produktbilder (aufnahmedatum desc) where deleted_at is null;

drop trigger if exists produktbilder_updated_at on public.produktbilder;
create trigger produktbilder_updated_at
  before update on public.produktbilder
  for each row execute function app.set_updated_at();

alter table public.produktbilder enable row level security;

drop policy if exists produktbilder_read on public.produktbilder;
create policy produktbilder_read on public.produktbilder
  for select to authenticated
  using (public.auth_has_permission('inventory.view'));

drop policy if exists produktbilder_write on public.produktbilder;
create policy produktbilder_write on public.produktbilder
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

create or replace function public.produktbild_register()
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  ergebnis jsonb;
begin
  if not public.auth_has_permission('inventory.view') then
    raise exception 'Keine Berechtigung für den Produktkatalog'
      using errcode = '42501';
  end if;

  select jsonb_build_object(
    'stand', to_char(now() at time zone 'Europe/Berlin', 'YYYY-MM-DD"T"HH24:MI:SS'),
    'kennzahlen', jsonb_build_object(
      'gesamt',              count(*),
      'mit_ki',              count(*) filter (where b.ki_verwendet),
      'kennzeichnungspflicht', count(*) filter (where b.kennzeichnung_noetig),
      'ohne_freigabe',       count(*) filter (where b.freigabe_am is null),
      'ohne_art50_pruefung', count(*) filter (where not b.art50_geprueft)
    ),
    'bilder', coalesce(
      jsonb_agg(
        jsonb_build_object(
          'id', b.id,
          'produkt_id', b.produkt_id,
          'produkt', b.produkt,
          'originalfoto', b.originalfoto,
          'fotograf', b.fotograf,
          'aufnahmedatum', b.aufnahmedatum,
          'ki_verwendet', b.ki_verwendet,
          'ki_system', b.ki_system,
          'bearbeitung', b.bearbeitung,
          'produkt_veraendert', b.produkt_veraendert,
          'ki_neues_produkt', b.ki_neues_produkt,
          'ki_neue_umgebung', b.ki_neue_umgebung,
          'art50_geprueft', b.art50_geprueft,
          'kennzeichnung_noetig', b.kennzeichnung_noetig,
          'freigegeben_von', b.freigegeben_von,
          'freigabe_am', b.freigabe_am,
          'bildpfad', b.bildpfad,
          'bemerkung', b.bemerkung
        )
        order by b.aufnahmedatum desc, b.produkt
      ),
      '[]'::jsonb
    )
  )
  into ergebnis
  from public.produktbilder b
  where b.deleted_at is null;

  return ergebnis;
end;
$function$;

revoke all on function public.produktbild_register() from public;
grant execute on function public.produktbild_register() to authenticated;

comment on function public.produktbild_register() is
  'Bildregister als JSON: Kennzahlen und alle nicht gelöschten Einträge. Grundlage für die Ansicht in der App und für den PDF-Ausdruck.';
