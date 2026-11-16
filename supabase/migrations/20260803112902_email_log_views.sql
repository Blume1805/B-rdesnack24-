create or replace function public.email_log_list(
  p_direction text        default null,
  p_status    text        default null,
  p_search    text        default null,
  p_from      timestamptz default null,
  p_to        timestamptz default null,
  p_limit     integer     default 50,
  p_offset    integer     default 0
)
returns table(
  id uuid, direction text, tag text, from_address text, to_addresses text[],
  subject text, status text, provider_id text, error text,
  occurred_at timestamptz, has_html boolean, has_text boolean, total_count bigint
)
language sql stable
set search_path = public, app
as $$
  select
    l.id, l.direction, l.tag, l.from_address, l.to_addresses, l.subject,
    l.status, l.provider_id, l.error, l.occurred_at,
    (l.html is not null and l.html <> ''),
    (l.text_body is not null and l.text_body <> ''),
    count(*) over ()::bigint
  from public.email_log l
  where (p_direction is null or l.direction = p_direction)
    and (p_status    is null or l.status    = p_status)
    and (p_from      is null or l.occurred_at >= p_from)
    and (p_to        is null or l.occurred_at <  p_to)
    and (
      p_search is null or p_search = '' or
      l.subject      ilike '%' || p_search || '%' or
      l.from_address ilike '%' || p_search || '%' or
      l.tag          ilike '%' || p_search || '%' or
      array_to_string(l.to_addresses, ' ') ilike '%' || p_search || '%'
    )
  order by l.occurred_at desc
  limit  greatest(1, least(coalesce(p_limit, 50), 500))
  offset greatest(0, coalesce(p_offset, 0))
$$;

create or replace function public.email_log_detail(p_id uuid)
returns table(
  id uuid, direction text, tag text, from_address text, to_addresses text[],
  subject text, html text, text_body text, status text, provider_id text,
  error text, occurred_at timestamptz, created_at timestamptz
)
language sql stable
set search_path = public, app
as $$
  select l.id, l.direction, l.tag, l.from_address, l.to_addresses, l.subject,
         l.html, l.text_body, l.status, l.provider_id, l.error,
         l.occurred_at, l.created_at
  from public.email_log l
  where l.id = p_id
$$;

create or replace function public.email_log_stats()
returns table(
  gesamt bigint, ausgehend bigint, eingehend bigint,
  gescheitert bigint, simuliert bigint, letzte_mail timestamptz
)
language sql stable
set search_path = public, app
as $$
  select
    count(*)::bigint,
    count(*) filter (where direction = 'out')::bigint,
    count(*) filter (where direction = 'in')::bigint,
    count(*) filter (where status = 'failed')::bigint,
    count(*) filter (where status = 'dev')::bigint,
    max(occurred_at)
  from public.email_log
$$;

revoke all on function public.email_log_list(text, text, text, timestamptz, timestamptz, integer, integer) from public, anon;
revoke all on function public.email_log_detail(uuid) from public, anon;
revoke all on function public.email_log_stats() from public, anon;

grant execute on function public.email_log_list(text, text, text, timestamptz, timestamptz, integer, integer) to authenticated, service_role;
grant execute on function public.email_log_detail(uuid) to authenticated, service_role;
grant execute on function public.email_log_stats() to authenticated, service_role;

comment on function public.email_log_list(text, text, text, timestamptz, timestamptz, integer, integer) is
  'Gefilterte Liste des E-Mail-Protokolls ohne Mailinhalt. Läuft mit den Rechten des Aufrufers — die RLS-Regel auf email_log entscheidet über Sichtbarkeit.';
comment on function public.email_log_detail(uuid) is
  'Eine einzelne Mail vollständig inklusive HTML- und Textfassung.';

create index if not exists email_log_tag_idx on public.email_log (tag);
