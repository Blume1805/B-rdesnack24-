-- Notifications-Center für den Kundenbereich.
-- Aggregiert: veröffentlichte News, aktivierte Wochen-Coupons, versendete
-- Rechnungen (nur Business), erhaltene persönliche Angebote der letzten
-- 30 Tage. Der Kunde bestätigt Notifications einzeln (read_at).

create table if not exists public.customer_notification_reads (
  customer_id  uuid not null references public.profiles(id) on delete cascade,
  key          text not null,           -- z. B. 'news:<uuid>' oder 'coupon:<uuid>'
  read_at      timestamptz not null default now(),
  primary key (customer_id, key)
);
alter table public.customer_notification_reads enable row level security;
drop policy if exists cnr_all on public.customer_notification_reads;
create policy cnr_all on public.customer_notification_reads
  for all to authenticated
  using (customer_id = auth.uid())
  with check (customer_id = auth.uid());

create or replace function public.my_notifications(p_limit int default 30)
returns table(
  key       text,
  kind      text,   -- 'news' | 'coupon' | 'invoice' | 'offer'
  title     text,
  subtitle  text,
  created_at timestamptz,
  is_read   boolean
)
language sql
security definer
set search_path = public, app
as $$
  with mine as (
    -- News
    select 'news:' || n.id as key, 'news' as kind,
           n.title,
           coalesce(n.summary, left(n.body, 90)) as subtitle,
           n.published_at as created_at
    from public.news_articles n
    where n.is_published
      and n.published_at > now() - interval '30 days'
    union all
    -- persönliche Angebote
    select 'offer:' || po.id, 'offer',
           po.title,
           'Persönliches Angebot · gültig bis '
             || to_char(po.valid_to, 'DD.MM.YYYY'),
           po.valid_from::timestamptz
    from public.personal_offers po
    where po.customer_id = auth.uid()
      and po.valid_from > now() - interval '30 days'
    union all
    -- Aktivierte Wochen-Coupons
    select 'coupon:' || oa.offer_id, 'coupon',
           o.title,
           'Coupon aktiviert',
           oa.activated_at
    from public.offer_activations oa
    join public.offers o on o.id = oa.offer_id
    where oa.customer_id = auth.uid()
      and oa.activated_at > now() - interval '30 days'
    union all
    -- Versendete Rechnungen (Business)
    select 'invoice:' || i.id, 'invoice',
           'Rechnung ' || i.invoice_number,
           'Per E-Mail versendet · '
             || to_char(i.total_gross, 'FM999999999.90') || ' EUR',
           coalesce(i.email_sent_at, i.issued_at)
    from public.invoices i
    where i.customer_id = auth.uid()
      and coalesce(i.email_sent_at, i.issued_at) > now() - interval '30 days'
  )
  select m.key, m.kind, m.title, m.subtitle, m.created_at,
         exists(select 1 from public.customer_notification_reads r
                where r.customer_id = auth.uid() and r.key = m.key) as is_read
  from mine m
  order by m.created_at desc
  limit p_limit;
$$;

create or replace function public.my_notifications_unread_count()
returns int
language sql
security definer
set search_path = public, app
as $$
  select count(*)::int from public.my_notifications(200)
   where is_read = false;
$$;

create or replace function public.mark_notification_read(p_key text)
returns void
language sql
security definer
set search_path = public, app
as $$
  insert into public.customer_notification_reads(customer_id, key)
    values (auth.uid(), p_key)
  on conflict do nothing;
$$;

create or replace function public.mark_all_notifications_read()
returns void
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.customer_notification_reads(customer_id, key)
  select auth.uid(), n.key from public.my_notifications(200) n
  on conflict do nothing;
end;
$$;

grant execute on function public.my_notifications(int) to authenticated;
grant execute on function public.my_notifications_unread_count() to authenticated;
grant execute on function public.mark_notification_read(text) to authenticated;
grant execute on function public.mark_all_notifications_read() to authenticated;
