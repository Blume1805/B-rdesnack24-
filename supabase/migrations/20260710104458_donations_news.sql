create table if not exists public.news_articles (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  summary      text,
  body         text not null,
  image_url    text,
  published_at timestamptz not null default now(),
  is_published boolean not null default true,
  created_at   timestamptz not null default now()
);

create index if not exists idx_news_published on public.news_articles(published_at desc)
  where is_published;

alter table public.news_articles enable row level security;
drop policy if exists news_read on public.news_articles;
create policy news_read on public.news_articles
  for select to authenticated using (is_published = true);

insert into public.news_articles (title, summary, body, published_at) values
  ('Neuer Automat am Bahnhof Osterweddingen',
   'Ab sofort steht euch am Nordausgang ein weiterer Bördesnack24-Automat zur Verfügung.',
   'Ab sofort findet ihr am Nordausgang des Bahnhofs Osterweddingen einen dritten Bördesnack24-Automaten. Wir haben das Sortiment auf pendlerfreundliche Snacks und Kaltgetränke ausgerichtet. Feedback zu Sortiment und Preisen jederzeit gerne über das Kontaktformular.',
   now() - interval '2 days'),
  ('5 % für den guten Zweck',
   'Wir spenden ab sofort 5 % jedes Netto-Umsatzes — ihr entscheidet, wofür.',
   'Ihr habt uns oft gefragt, ob wir uns sozial engagieren. Ab sofort fließen 5 % jedes Netto-Umsatzes in einen Spendentopf. Über die App könnt ihr Empfänger vorschlagen und abstimmen. Jeden Quartalsabschluss überweisen wir den Topf an den meistgewählten Zweck und veröffentlichen den Nachweis hier.',
   now() - interval '5 days'),
  ('Sommer-Sortiment ist da',
   'Neue Eis-Sorten und erfrischende Getränke: unsere Sommerkarte 2026.',
   'Wir haben unser Kühlautomaten-Sortiment für den Sommer erweitert: Wassereis, Fruchtsorbet und drei neue Iso-Getränke. Alle Neuheiten findet ihr im Angebote-Tab unter „Eure Favoriten -> Eis".',
   now() - interval '10 days')
on conflict do nothing;

create table if not exists public.donation_causes (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  description  text,
  status       text not null default 'suggested'
               check (status in ('suggested','active','archived')),
  suggested_by uuid references public.profiles(id) on delete set null,
  created_at   timestamptz not null default now(),
  deleted_at   timestamptz
);
create index if not exists idx_donation_causes_status
  on public.donation_causes(status) where deleted_at is null;

alter table public.donation_causes enable row level security;
drop policy if exists dc_read on public.donation_causes;
create policy dc_read on public.donation_causes
  for select to authenticated using (deleted_at is null);
drop policy if exists dc_insert on public.donation_causes;
create policy dc_insert on public.donation_causes
  for insert to authenticated with check (suggested_by = auth.uid());

create table if not exists public.donation_votes (
  customer_id uuid not null references public.profiles(id) on delete cascade,
  cause_id    uuid not null references public.donation_causes(id) on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (customer_id, cause_id)
);
create index if not exists idx_donation_votes_cause on public.donation_votes(cause_id);

alter table public.donation_votes enable row level security;
drop policy if exists dv_read on public.donation_votes;
create policy dv_read on public.donation_votes
  for select to authenticated using (true);
drop policy if exists dv_write on public.donation_votes;
create policy dv_write on public.donation_votes
  for all to authenticated
  using (customer_id = auth.uid())
  with check (customer_id = auth.uid());

insert into public.donation_causes (title, description, status) values
  ('Tafel Magdeburg', 'Unterstützt Menschen in Magdeburg und Umgebung mit Lebensmitteln.', 'active'),
  ('Kinderhospiz Magdeburger Elbland', 'Hospiz-Betreuung für Kinder und Familien in Sachsen-Anhalt.', 'active'),
  ('Feuerwehr Sülzetal', 'Ehrenamtliche Feuerwehr in unserer Gemeinde — Ausrüstung und Jugendarbeit.', 'active')
on conflict do nothing;

create or replace function public.donation_rate() returns numeric
language sql immutable as $$ select 0.05::numeric $$;

create or replace function public.purchase_net(p_gross numeric) returns numeric
language sql immutable as $$
  select round(p_gross / 1.07, 2)
$$;

create or replace function public.purchase_donation(p_gross numeric) returns numeric
language sql immutable as $$
  select round(public.purchase_net(p_gross) * public.donation_rate(), 2)
$$;

create or replace function public.my_donation_summary()
returns table(total_donated numeric, purchase_count bigint)
language sql
security definer
set search_path = public, app
as $$
  select
    coalesce(sum(public.purchase_donation(total_gross)), 0)::numeric,
    count(*)::bigint
  from public.purchases
  where customer_id = auth.uid()
$$;

create or replace function public.my_donations_by_purchase()
returns table(
  purchase_id  uuid,
  purchased_at timestamptz,
  total_gross  numeric,
  total_net    numeric,
  donation     numeric,
  share_pct    numeric
)
language sql
security definer
set search_path = public, app
as $$
  with mine as (
    select id, purchased_at, total_gross
    from public.purchases
    where customer_id = auth.uid()
  ),
  agg as (
    select coalesce(sum(public.purchase_donation(total_gross)), 0) as total_don
    from mine
  )
  select
    m.id,
    m.purchased_at,
    m.total_gross,
    public.purchase_net(m.total_gross),
    public.purchase_donation(m.total_gross),
    case when a.total_don = 0 then 0
         else round(public.purchase_donation(m.total_gross) / a.total_don * 100, 1)
    end
  from mine m cross join agg a
  order by m.purchased_at desc
$$;

create or replace function public.donation_causes_list()
returns table(
  id           uuid,
  title        text,
  description  text,
  status       text,
  vote_count   bigint,
  voted_by_me  boolean,
  created_at   timestamptz
)
language sql
security definer
set search_path = public, app
as $$
  select
    c.id, c.title, c.description, c.status,
    coalesce(v.n, 0)::bigint,
    exists(select 1 from public.donation_votes vv
             where vv.cause_id = c.id and vv.customer_id = auth.uid()),
    c.created_at
  from public.donation_causes c
  left join lateral (
    select count(*) n from public.donation_votes v where v.cause_id = c.id
  ) v on true
  where c.deleted_at is null
  order by
    case c.status when 'active' then 0 when 'suggested' then 1 else 2 end,
    coalesce(v.n, 0) desc,
    c.created_at desc
$$;

create or replace function public.suggest_donation_cause(
  p_title text, p_description text
) returns public.donation_causes
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.donation_causes;
begin
  if length(coalesce(p_title, '')) < 3 then
    raise exception 'Titel zu kurz';
  end if;
  insert into public.donation_causes(title, description, status, suggested_by)
  values (trim(p_title), nullif(trim(coalesce(p_description, '')), ''), 'suggested', auth.uid())
  returning * into v_row;
  return v_row;
end;
$$;

create or replace function public.vote_donation_cause(p_cause_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public, app
as $$
declare v_exists boolean;
begin
  select exists(select 1 from public.donation_votes
                 where customer_id = auth.uid() and cause_id = p_cause_id)
  into v_exists;
  if v_exists then
    delete from public.donation_votes
      where customer_id = auth.uid() and cause_id = p_cause_id;
    return false;
  else
    insert into public.donation_votes(customer_id, cause_id)
      values (auth.uid(), p_cause_id);
    return true;
  end if;
end;
$$;

create or replace function public.list_news(p_limit int default 20)
returns setof public.news_articles
language sql
security definer
set search_path = public, app
as $$
  select * from public.news_articles
  where is_published = true
  order by published_at desc
  limit p_limit
$$;

grant execute on function public.my_donation_summary() to authenticated;
grant execute on function public.my_donations_by_purchase() to authenticated;
grant execute on function public.donation_causes_list() to authenticated;
grant execute on function public.suggest_donation_cause(text, text) to authenticated;
grant execute on function public.vote_donation_cause(uuid) to authenticated;
grant execute on function public.list_news(int) to authenticated;
