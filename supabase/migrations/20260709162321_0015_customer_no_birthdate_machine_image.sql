create sequence if not exists public.customer_number_seq
  start with 10001 increment by 1 minvalue 10001 no cycle;

create or replace function app.assign_customer_number()
returns trigger
language plpgsql
as $$
begin
  if new.customer_number is null or trim(new.customer_number) = '' then
    new.customer_number := nextval('public.customer_number_seq')::text;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_customers_assign_number on public.customers;
create trigger trg_customers_assign_number
  before insert on public.customers
  for each row execute function app.assign_customer_number();

do $$
declare c record;
begin
  for c in
    select id from public.customers
    where customer_number is null or trim(customer_number) = ''
    order by created_at asc
  loop
    update public.customers
       set customer_number = nextval('public.customer_number_seq')::text
     where id = c.id;
  end loop;
end $$;

alter table public.profiles
  add column if not exists birth_date date;

alter table public.machines
  add column if not exists image_url text;
