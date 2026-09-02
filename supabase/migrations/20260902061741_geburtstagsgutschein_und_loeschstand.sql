-- ===========================================================================
-- S-21: Der beworbene Geburtstagsgutschein konnte nicht erzeugt werden.
-- CUST-008: Ein gelöschtes Konto wird aus Werbung und Angeboten genommen.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- S-21 — der Gutschein, den es nicht geben konnte
--
-- `app.wildcard_product()` legt bei Bedarf das Platzhalterprodukt
-- „Produkt deiner Wahl" an, auf das Geburtstags- und Jubiläumsgutschein
-- verweisen. Es setzt dabei `category = 'Aktion'`. Am 28.07.2026 kam die
-- Regel `products_category_check` dazu, die genau vier Kategorien erlaubt —
-- Getränke, Süßwaren, Snacks, Eis. „Aktion" ist keine davon.
--
-- Seither scheitert jeder Aufruf von `grant_birthday_offer` und
-- `grant_anniversary_offer` an dieser Regel. Aufgefallen ist es nie, weil
-- bis heute kein einziges Profil ein Geburtsdatum trägt und der Pfad damit
-- nie erreicht wurde. Das ändert sich jetzt: Seit S-6 verlangt das
-- kostenpflichtige Abo ein hinterlegtes Geburtsdatum.
--
-- Das ist mehr als ein Fehler. Die Stammdatenseite verspricht „Zum
-- Geburtstag gibt es 50 % Rabatt auf ein Produkt deiner Wahl", und der
-- Abo-Vergleich führt den Geburtstagsgutschein als Leistung auf. Ein
-- zugesagter Vorteil, der technisch nicht entstehen kann, ist keine
-- Kleinigkeit — er ist eine Angabe über das eigene Angebot, die nicht
-- stimmt.
--
-- Die Behebung ist die kleinstmögliche: Das Platzhalterprodukt bekommt
-- **keine** Kategorie. Es ist kein Sortimentsartikel, sondern ein
-- technischer Anker für den Gutschein — es hat schlicht keine. Beide
-- Prüfregeln lassen NULL zu (geprüft), die vier Kategorien der Kundensicht
-- bleiben unverändert, und der Artikel bleibt `archived` und damit aus
-- jeder Katalogabfrage draußen.
-- ---------------------------------------------------------------------------

create or replace function app.wildcard_product()
returns products
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  p public.products;
begin
  select * into p from public.products where sku = 'WILDCARD' limit 1;
  if not found then
    insert into public.products(sku, name, category, tax_rate, list_price_net, status)
    values ('WILDCARD', 'Produkt deiner Wahl', null, 7.0, 0, 'archived')
    returning * into p;
  end if;
  return p;
end;
$function$;

comment on function app.wildcard_product() is
  'Technischer Anker für Geburtstags- und Jubiläumsgutschein. Bewusst ohne '
  'Kategorie: kein Sortimentsartikel (S-21, 02.09.2026). Bleibt archived '
  'und taucht in keiner Katalogabfrage auf.';

-- Einmal anlegen, statt auf den ersten Geburtstag zu warten.
insert into public.products (sku, name, category, tax_rate, list_price_net, status)
select 'WILDCARD', 'Produkt deiner Wahl', null, 7.0, 0, 'archived'
where not exists (select 1 from public.products where sku = 'WILDCARD');

-- ---------------------------------------------------------------------------
-- CUST-008 — ein gelöschtes Konto wird aus Werbung und Angeboten genommen
--
-- Gemessen am 02.09.2026: Ein Konto mit gesetztem `deleted_at` bekam
-- weiterhin Post in die Warteschlange gestellt. `email_enqueue` liest die
-- Adresse aus `profiles`, ohne den Löschstand anzusehen.
--
-- Die Regel unterscheidet bewusst nach Art der Nachricht. Art. 18 DSGVO
-- verlangt, die Verarbeitung einzuschränken — nicht, sie zu unterbinden:
-- Der Betroffene ist über das Ergebnis seines Löschverlangens zu
-- informieren, und Nachrichten zu einem noch laufenden Vertrag bleiben
-- zulässig. Gesperrt wird deshalb **Werbung**, nicht die Nachricht selbst.
--
-- Der Grund steht im Datensatz (`suppressed_reason`), damit später
-- nachvollziehbar ist, warum eine Nachricht nicht hinausging.
-- ---------------------------------------------------------------------------

create or replace function public.email_enqueue(
  p_template_key text,
  p_profile uuid,
  p_vars jsonb default '{}'::jsonb,
  p_to text default null,
  p_scheduled_for timestamptz default now(),
  p_dedupe_key text default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_category text;
  v_topic    text;
  v_aktiv    boolean;
  v_voraus   text;
  v_to       text;
  v_id       uuid;
  v_grund    text;
  v_geloescht boolean := false;
begin
  select t.category, t.topic_key, t.is_active, t.precondition
    into v_category, v_topic, v_aktiv, v_voraus
    from public.email_templates t
   where t.key = p_template_key;

  if v_category is null then
    raise exception 'Unbekannte Vorlage: %', p_template_key;
  end if;

  if not v_aktiv then
    raise exception 'Vorlage % ist nicht freigeschaltet. Offene Voraussetzung: %',
      p_template_key, coalesce(v_voraus, '(nicht angegeben)');
  end if;

  v_to := coalesce(
    nullif(trim(coalesce(p_to, '')), ''),
    (select p.email::text from public.profiles p where p.id = p_profile)
  );

  if v_to is null then
    raise exception 'Keine Empfängeradresse: weder übergeben noch am Profil % zu finden', p_profile;
  end if;

  if p_profile is not null then
    select (p.deleted_at is not null) into v_geloescht
      from public.profiles p where p.id = p_profile;
  end if;

  if v_category = 'marketing' then
    if p_profile is null then
      v_grund := 'werbung_ohne_profil';
    elsif coalesce(v_geloescht, false) then
      -- Eingeschränkte Verarbeitung: kein Marketing an ein gelöschtes Konto.
      v_grund := 'konto_geloescht';
    elsif not public.email_has_consent(p_profile, v_topic) then
      v_grund := 'keine_einwilligung';
    end if;
  end if;

  insert into public.email_outbox
    (template_key, profile_id, to_address, vars, scheduled_for, dedupe_key, status, suppressed_reason)
  values
    (p_template_key, p_profile, v_to, coalesce(p_vars, '{}'::jsonb),
     coalesce(p_scheduled_for, now()), p_dedupe_key,
     case when v_grund is null then 'queued' else 'suppressed' end, v_grund)
  on conflict (dedupe_key) where dedupe_key is not null do nothing
  returning id into v_id;

  return v_id;
end;
$function$;

comment on function public.email_enqueue(text, uuid, jsonb, text, timestamptz, text) is
  'Stellt eine Nachricht in die Warteschlange. Werbung an ein gelöschtes '
  'Konto wird mit dem Grund konto_geloescht unterdrückt (CUST-008, '
  '02.09.2026); Nachrichten zum Vertrag und zur Löschung selbst gehen '
  'weiterhin hinaus — Art. 18 DSGVO schränkt die Verarbeitung ein, er '
  'verbietet sie nicht.';

-- Gutscheine entstehen nicht mehr für gelöschte Konten.
create or replace function public.grant_birthday_offer(p_customer_id uuid)
returns personal_offers
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_birth   date;
  v_offer   public.personal_offers;
  v_wild    public.products;
begin
  select bp.birth_date into v_birth
  from public.profiles bp
  where bp.id = p_customer_id and bp.deleted_at is null;
  if v_birth is null then return null; end if;

  if extract(month from v_birth) <> extract(month from current_date)
     or extract(day from v_birth) <> extract(day from current_date) then
    return null;
  end if;

  if exists (
    select 1 from public.personal_offers
    where customer_id = p_customer_id
      and source = 'birthday'
      and valid_from >= date_trunc('year', current_date)
  ) then return null; end if;

  v_wild := app.wildcard_product();

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url, source
  ) values (
    p_customer_id, v_wild.id, 'Alles Gute zum Geburtstag!',
    0, 0, 50.0,
    app.generate_redemption_code(),
    now(), now() + interval '14 days', v_wild.image_url,
    'birthday'
  )
  returning * into v_offer;
  return v_offer;
end;
$function$;

do $$
declare v_kat text; v_id uuid;
begin
  select category into v_kat from public.products where sku = 'WILDCARD';
  if v_kat is not null then
    raise exception 'Das Platzhalterprodukt trägt eine Kategorie: %', v_kat;
  end if;
  select id into v_id from public.products where sku = 'WILDCARD';
  if v_id is null then
    raise exception 'Das Platzhalterprodukt fehlt';
  end if;
  raise notice 'S-21: Platzhalterprodukt vorhanden, ohne Kategorie. Gutscheine können entstehen.';
end $$;
