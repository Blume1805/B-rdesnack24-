create table if not exists public.customer_card (
  customer_id uuid primary key references auth.users(id) on delete cascade,
  token       text not null unique
              default encode(gen_random_bytes(16), 'hex')
              check (token ~ '^[0-9a-f]{32}$'),
  issued_at   timestamptz not null default now(),
  rotated_at  timestamptz
);

comment on table public.customer_card is
  'Kartenkennung für den QR-Code am Automaten. Bewusst getrennt von der '
  'Konto-Id: Der Scan ist einen Rabatt wert, die Kennung muss deshalb '
  'sperrbar sein, ohne das Konto zu berühren.';

alter table public.customer_card enable row level security;
revoke all on public.customer_card from anon, authenticated;

create or replace function public.my_customer_card()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_token text;
begin
  if auth.uid() is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;

  insert into public.customer_card(customer_id)
  values (auth.uid())
  on conflict (customer_id) do nothing;

  select c.token into v_token
  from public.customer_card c
  where c.customer_id = auth.uid();

  return v_token;
end;
$$;

comment on function public.my_customer_card() is
  'Liefert die Kartenkennung des angemeldeten Kunden und legt sie beim '
  'ersten Aufruf an. Inhalt des QR-Codes in beiden Apps.';

revoke all on function public.my_customer_card() from public, anon;
grant execute on function public.my_customer_card() to authenticated;

create or replace function public.card_entitlements(p_token text)
returns table(customer_number text, discount_percent int)
language sql
stable
security definer
set search_path = public, app
as $$
  select
    cu.customer_number,
    case when app.has_subscription(c.customer_id) then 5 else 0 end
  from public.customer_card c
  left join public.customers cu on cu.id = c.customer_id
  where c.token = p_token;
$$;

comment on function public.card_entitlements(text) is
  'Automaten-Nachschlag: Kartenkennung → Kundennummer und Rabattsatz. '
  'Gibt keine Personendaten zurück. 5 % nur bei aktivem Abo, dieselbe '
  'Regel wie bei allen anderen Abo-Vorteilen.';

revoke all on function public.card_entitlements(text) from public, anon, authenticated;
