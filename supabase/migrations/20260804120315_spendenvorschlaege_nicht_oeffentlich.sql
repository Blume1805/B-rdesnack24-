create or replace function public.donation_causes_list()
returns table (
  id uuid,
  title text,
  description text,
  status text,
  vote_count bigint,
  voted_by_me boolean,
  created_at timestamptz,
  legal_name text,
  purpose text,
  city text,
  website text,
  receipt_eligible boolean
)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  select
    c.id, c.title, c.description, c.status,
    coalesce(v.n, 0)::bigint,
    exists(select 1 from public.donation_votes vv
             where vv.cause_id = c.id and vv.customer_id = (select auth.uid())),
    c.created_at,
    c.legal_name, c.purpose, c.city, c.website, c.receipt_eligible
  from public.donation_causes c
  left join lateral (
    select count(*) n from public.donation_votes v where v.cause_id = c.id
  ) v on true
  where c.deleted_at is null
    and (
      c.status = 'active'
      or (c.status = 'suggested' and c.suggested_by = (select auth.uid()))
      or public.is_internal((select auth.uid()))
    )
  order by
    case c.status when 'active' then 0 when 'suggested' then 1 else 2 end,
    coalesce(v.n, 0) desc,
    c.created_at desc
$function$;

create or replace function public.vote_donation_cause(p_cause_id uuid)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid    uuid := auth.uid();
  v_status text;
  v_exists boolean;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  select c.status into v_status
    from public.donation_causes c
   where c.id = p_cause_id and c.deleted_at is null;

  if v_status is distinct from 'active' then
    raise exception 'Für diesen Zweck kann nicht abgestimmt werden';
  end if;

  select exists(select 1 from public.donation_votes
                 where customer_id = v_uid and cause_id = p_cause_id)
    into v_exists;

  if v_exists then
    delete from public.donation_votes
      where customer_id = v_uid and cause_id = p_cause_id;
    return false;
  else
    insert into public.donation_votes(customer_id, cause_id)
      values (v_uid, p_cause_id);
    return true;
  end if;
end;
$function$;

create or replace function public.suggest_donation_cause(
  p_title text, p_description text
)
returns public.donation_causes
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid  uuid := auth.uid();
  v_open int;
  v_row  public.donation_causes;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  if length(coalesce(p_title, '')) < 3 then
    raise exception 'Titel zu kurz';
  end if;

  select count(*) into v_open
    from public.donation_causes
   where suggested_by = v_uid
     and status = 'suggested'
     and deleted_at is null;

  if v_open >= 3 then
    raise exception 'Es sind bereits drei Vorschläge offen. Bitte warte die Prüfung ab.';
  end if;

  insert into public.donation_causes(title, description, status, suggested_by)
  values (trim(p_title),
          nullif(trim(coalesce(p_description, '')), ''),
          'suggested',
          v_uid)
  returning * into v_row;

  return v_row;
end;
$function$;
