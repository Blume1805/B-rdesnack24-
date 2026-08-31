-- ============================================================================
-- 0014 — Wöchentliche Zufalls-Angebote + individuelle Kunden-Angebote
-- ----------------------------------------------------------------------------
-- * products bekommen einen Normalpreis (list_price_net) + optionales
--   Produkt-Bild (image_url).  Wochenangebote greifen automatisch auf
--   diesen Preis zu und rabattieren pauschal 10 %.
-- * offers wird um product_id + Preisspalten erweitert, damit die App
--   den alten Preis durchgestrichen und den prozentualen Rabatt anzeigen
--   kann (ohne Client-seitige Preisberechnung).
-- * personal_offers ist eine neue Tabelle für individuelle 3-Tage-Angebote
--   pro Kunde inkl. 6-stelligem Einlöse-Zahlencode.  Nach Einlösung
--   (redeemed_at gesetzt) wird über einen Cron-Job bzw. RPC am Folgetag
--   ein neues erzeugt — basierend auf dem Konsumverhalten (Top-Produkte
--   aus purchases + purchase_items).
-- * Drei RPC-Funktionen fassen das Ganze zusammen und sind so gepolt,
--   dass sie sowohl aus Edge Functions (Cron) als auch direkt aus dem
--   Client (Demo/Manuelle Auslösung) aufgerufen werden können.
-- ============================================================================

-- 1) Produkte: Normalpreis + Bild --------------------------------------------
alter table public.products
  add column if not exists list_price_net numeric(12,2),
  add column if not exists image_url      text;

-- 2) Wochenangebote: an Produkt koppeln, Preisdaten mitführen ---------------
alter table public.offers
  add column if not exists product_id         uuid references public.products(id),
  add column if not exists regular_price_net  numeric(12,2),
  add column if not exists offer_price_net    numeric(12,2),
  add column if not exists discount_percent   numeric(5,2),
  add column if not exists image_url          text;

-- 3) Individuelle Kunden-Angebote --------------------------------------------
create table if not exists public.personal_offers (
  id                  uuid primary key default gen_random_uuid(),
  customer_id         uuid not null references public.customers(id) on delete cascade,
  product_id          uuid not null references public.products(id) on delete restrict,
  title               text not null,
  regular_price_net   numeric(12,2) not null,
  offer_price_net     numeric(12,2) not null,
  discount_percent    numeric(5,2)  not null,
  redemption_code     text          not null,
  valid_from          timestamptz   not null default now(),
  valid_to            timestamptz   not null,
  redeemed_at         timestamptz,
  redeemed_at_machine uuid references public.machines(id),
  image_url           text,
  created_at          timestamptz   not null default now(),
  created_by          uuid
);

create index if not exists idx_personal_offers_customer
  on public.personal_offers(customer_id, valid_to desc);

-- Ein Kunde darf maximal EIN nicht-eingelöstes Angebot gleichzeitig haben.
create unique index if not exists uq_personal_offers_active
  on public.personal_offers(customer_id) where redeemed_at is null;

-- Einlösecodes sind global über den nicht-eingelösten Zeitraum eindeutig,
-- damit Automatenbedienung eindeutig ist.  Alte, eingelöste Codes dürfen
-- später wiederverwendet werden.
create unique index if not exists uq_personal_offers_code_active
  on public.personal_offers(redemption_code) where redeemed_at is null;

select app.enable_audit('public.personal_offers');

-- 4) RLS ---------------------------------------------------------------------
alter table public.personal_offers enable row level security;

drop policy if exists poff_customer_read on public.personal_offers;
create policy poff_customer_read on public.personal_offers for select to authenticated
  using (
    customer_id = auth.uid()
    or public.is_admin()
    or public.auth_has_permission('offers.manage')
  );

drop policy if exists poff_manage_write on public.personal_offers;
create policy poff_manage_write on public.personal_offers for all to authenticated
  using (public.is_admin() or public.auth_has_permission('offers.manage'))
  with check (public.is_admin() or public.auth_has_permission('offers.manage'));

-- 5) Hilfsfunktion: 6-stelliger Zahlencode ----------------------------------
create or replace function app.generate_redemption_code()
returns text
language plpgsql
as $$
declare
  code text;
  tries int := 0;
begin
  loop
    code := lpad((floor(random() * 1000000))::int::text, 6, '0');
    exit when not exists (
      select 1 from public.personal_offers
      where redemption_code = code and redeemed_at is null
    );
    tries := tries + 1;
    if tries > 20 then
      -- extrem unwahrscheinlich, aber safe fallback
      code := lpad(floor(extract(epoch from clock_timestamp())::int % 1000000)::text, 6, '0');
      exit;
    end if;
  end loop;
  return code;
end;
$$;

-- 6) Wöchentliche Zufalls-Angebote generieren --------------------------------
-- Wählt N zufällige aktive Produkte mit gesetztem list_price_net und legt sie
-- als kind='weekly' offers für die kommende Woche an. Bestehende zukünftige
-- Wochenangebote (kind='weekly', valid_from >= today) werden vorher gelöscht,
-- damit ein erneuter Aufruf idempotent ist.
create or replace function public.generate_weekly_offers(p_count int default 5)
returns setof public.offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_start date := (date_trunc('week', current_date) + interval '7 days')::date;
  v_end   date := v_start + 6;
  rec record;
  v_regular numeric(12,2);
  v_offer   numeric(12,2);
begin
  -- Nächste Woche „aufräumen"
  delete from public.offers
    where kind = 'weekly'
      and coalesce(valid_from, current_date) >= v_start
      and coalesce(valid_to, current_date) <= v_end;

  for rec in (
    select id, name, list_price_net, image_url
    from public.products
    where status = 'active' and list_price_net is not null and list_price_net > 0
    order by random()
    limit greatest(p_count, 1)
  ) loop
    v_regular := rec.list_price_net;
    v_offer   := round(v_regular * 0.90, 2);
    return query
      insert into public.offers(
        title, description, kind, valid_from, valid_to,
        product_id, regular_price_net, offer_price_net, discount_percent, image_url
      ) values (
        rec.name,
        '10 % Rabatt für die ganze Woche.',
        'weekly',
        v_start, v_end,
        rec.id, v_regular, v_offer, 10.0, rec.image_url
      )
      returning *;
  end loop;
end;
$$;

-- 7) Individuelles Angebot für einen Kunden generieren ----------------------
-- Basiert auf dem Konsumverhalten: das am häufigsten gekaufte Produkt der
-- letzten 90 Tage (Fallback: das teuerste aktive Produkt).  Legt genau ein
-- neues personal_offer an — falls bereits eines aktiv ist, wird der bestehende
-- Datensatz zurückgegeben (kein Duplikat).  3 Tage gültig.
create or replace function public.generate_personal_offer(p_customer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_existing public.personal_offers;
  v_product public.products%rowtype;
  v_new public.personal_offers;
  v_regular numeric(12,2);
  v_offer   numeric(12,2);
begin
  -- Sichere Kundenreferenz
  if not exists (select 1 from public.customers where id = p_customer_id) then
    raise exception 'Kunde nicht gefunden';
  end if;

  -- Bereits aktives Angebot? → direkt zurückgeben
  select * into v_existing
  from public.personal_offers
  where customer_id = p_customer_id and redeemed_at is null
  limit 1;
  if found then
    return v_existing;
  end if;

  -- Neuer Ausgangspunkt: am häufigsten gekaufte Produkte der letzten 90 Tage
  select p.* into v_product
  from public.products p
  join public.purchase_items pi on pi.product_id = p.id
  join public.purchases pu       on pu.id = pi.purchase_id
  where pu.customer_id = p_customer_id
    and pu.purchased_at > now() - interval '90 days'
    and p.status = 'active' and p.list_price_net is not null
  group by p.id
  order by sum(pi.quantity) desc, random()
  limit 1;

  -- Fallback: irgendein aktives Produkt
  if not found then
    select * into v_product
    from public.products
    where status = 'active' and list_price_net is not null and list_price_net > 0
    order by random()
    limit 1;
  end if;

  if not found then
    raise exception 'Kein Produkt für individuelles Angebot gefunden';
  end if;

  v_regular := v_product.list_price_net;
  v_offer   := round(v_regular * 0.90, 2);

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url
  ) values (
    p_customer_id, v_product.id, v_product.name,
    v_regular, v_offer, 10.0,
    app.generate_redemption_code(),
    now(), now() + interval '3 days', v_product.image_url
  )
  returning * into v_new;

  return v_new;
end;
$$;

-- 8) Einlöse-Funktion --------------------------------------------------------
-- Client ruft mit dem eingegebenen Code auf. Erfolg: markiert redeemed_at,
-- gibt das Angebot zurück. Fehler bei ungültig/abgelaufen/eingelöst.
create or replace function public.redeem_personal_offer(
  p_code text,
  p_machine_id uuid default null
)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_offer public.personal_offers;
begin
  if p_code is null or length(trim(p_code)) < 4 then
    raise exception 'Ungültiger Code';
  end if;

  select * into v_offer
  from public.personal_offers
  where redemption_code = trim(p_code)
    and redeemed_at is null
    and valid_to > now()
    and (
      customer_id = auth.uid()
      or public.is_admin()
      or public.auth_has_permission('offers.manage')
    )
  for update;

  if not found then
    raise exception 'Code ungültig, bereits eingelöst oder abgelaufen';
  end if;

  update public.personal_offers
     set redeemed_at = now(),
         redeemed_at_machine = p_machine_id
   where id = v_offer.id
   returning * into v_offer;

  return v_offer;
end;
$$;

-- 9) „Mein Angebot"-Provider für den Client ---------------------------------
create or replace function public.my_active_personal_offer()
returns public.personal_offers
language sql
security definer
set search_path = public, app
stable
as $$
  select *
  from public.personal_offers
  where customer_id = auth.uid()
    and redeemed_at is null
    and valid_to > now()
  order by valid_from desc
  limit 1;
$$;

-- 10) Seed: Zufallssortiment (bis das echte kommt) --------------------------
-- Idempotent per ON CONFLICT (sku) — spätere Aufrufe aktualisieren nur die
-- fehlenden Felder (Preis/Bild), damit ein manueller Test der App direkt
-- funktioniert.
insert into public.products (sku, name, category, tax_rate, list_price_net, image_url)
values
  ('SN-001', 'Kartoffelchips „Salt & Vinegar" 40 g', 'Snacks',    7.0, 1.29, null),
  ('SN-002', 'Salzstangen 100 g',                     'Snacks',    7.0, 1.09, null),
  ('SN-003', 'Erdnüsse geröstet 100 g',              'Snacks',    7.0, 1.79, null),
  ('SN-004', 'Studentenfutter 125 g',                'Snacks',    7.0, 2.19, null),
  ('SU-001', 'Schoko-Riegel 40 g',                    'Süßes',    7.0, 1.49, null),
  ('SU-002', 'Nussriegel 45 g',                       'Süßes',    7.0, 1.69, null),
  ('SU-003', 'Fruchtgummi 100 g',                     'Süßes',    7.0, 1.29, null),
  ('SU-004', 'Kekse mit Schoko 3-er Pack',            'Süßes',    7.0, 1.19, null),
  ('DR-001', 'Cola 0,33 l Dose',                      'Getränke', 19.0, 1.49, null),
  ('DR-002', 'Cola Zero 0,33 l Dose',                 'Getränke', 19.0, 1.49, null),
  ('DR-003', 'Mineralwasser 0,5 l',                   'Getränke', 19.0, 1.19, null),
  ('DR-004', 'Apfelschorle 0,5 l',                    'Getränke', 19.0, 1.59, null),
  ('DR-005', 'Eistee Pfirsich 0,5 l',                 'Getränke', 19.0, 1.79, null),
  ('DR-006', 'Energydrink 0,25 l',                    'Getränke', 19.0, 1.89, null),
  ('DR-007', 'Kaffee-Milchdrink 0,25 l',              'Getränke', 19.0, 1.99, null)
on conflict (sku) do update
  set list_price_net = coalesce(public.products.list_price_net, excluded.list_price_net),
      image_url      = coalesce(public.products.image_url,      excluded.image_url),
      category       = coalesce(public.products.category,       excluded.category);
