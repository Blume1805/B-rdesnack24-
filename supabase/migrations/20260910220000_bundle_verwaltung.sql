-- ===========================================================================
-- Bundles anlegen und pflegen — Maske in der Gesellschafter-App.
--
-- Geschrieben wird ueber RPCs, nicht ueber die Tabelle. Grund ist derselbe
-- wie ueberall sonst in diesem Projekt: Ein direkter Tabellenzugriff nimmt
-- entgegen, was der Client schickt. Eine Funktion nimmt entgegen, was sie
-- als Parameter kennt -- alles andere fliegt beim Aufruf auf, nicht still
-- in einer Spalte.
--
-- `bundle_save` schreibt Kopf UND Positionen in einem Aufruf. Zwei Aufrufe
-- koennten auf halbem Weg abbrechen und ein Bundle mit einer einzigen
-- Position hinterlassen, also ein Kombiangebot, das nichts kombiniert.
-- ===========================================================================

create or replace function app.darf_bundles_pflegen()
returns boolean
language sql
stable
as $$
  select coalesce(public.is_admin(), false)
      or coalesce(public.auth_has_permission('offers.manage'), false);
$$;

-- ── Auswahlliste fuer die Maske ────────────────────────────────────────
create or replace function public.bundle_products()
returns table(
  id                 uuid,
  sku                text,
  name               text,
  category           text,
  tax_rate           numeric,
  list_price_net     numeric,
  gross              numeric,
  coupon_eligibility text
)
language sql
stable
security definer
set search_path = public, app
as $$
  select p.id, p.sku, p.name, p.category, p.tax_rate, p.list_price_net,
         round(p.list_price_net * (1 + p.tax_rate / 100), 2) as gross,
         p.coupon_eligibility
    from public.products p
   where p.deleted_at is null
     and p.status = 'active'
     and p.list_price_net is not null
     and p.list_price_net > 0
     and app.darf_bundles_pflegen()
   order by p.category nulls last, p.name;
$$;

comment on function public.bundle_products() is
  'Produkte, die in ein Bundle koennen: aktiv, mit Preis. Auch solche mit '
  'coupon_eligibility = bundle_only -- das Bundle ist fuer sie der '
  'vorgesehene Weg. Ohne Berechtigung kommt eine leere Liste zurueck, '
  'keine Fehlermeldung mit Inhalt.';

-- ── Uebersicht fuer die Maske ──────────────────────────────────────────
create or replace function public.bundles_admin()
returns table(
  id            uuid,
  code          text,
  title         text,
  description   text,
  price_gross   numeric,
  regular_gross numeric,
  valid_from    date,
  valid_to      date,
  status        text,
  items         jsonb
)
language sql
stable
security definer
set search_path = public, app
as $$
  select b.id, b.code, b.title, b.description, b.price_gross,
         (select sum(s.regular_line_gross) from public.bundle_split(b.id) s),
         b.valid_from, b.valid_to, b.status::text,
         (select coalesce(jsonb_agg(jsonb_build_object(
                   'product_id',    s.product_id,
                   'name',          s.product_name,
                   'image_url',     s.image_url,
                   'quantity',      s.quantity,
                   'regular_gross', s.regular_line_gross,
                   'bundle_gross',  s.bundle_line_gross
                 ) order by s.position), '[]'::jsonb)
            from public.bundle_split(b.id) s)
    from public.bundles b
   where b.deleted_at is null
     and app.darf_bundles_pflegen()
   order by b.status, b.valid_from desc, b.title;
$$;

-- ── Anlegen und aendern ────────────────────────────────────────────────
create or replace function public.bundle_save(
  p_title       text,
  p_price_gross numeric,
  p_items       jsonb,
  p_id          uuid    default null,
  p_code        text    default null,
  p_description text    default null,
  p_valid_from  date    default null,
  p_valid_to    date    default null,
  p_status      text    default 'active'
)
returns uuid
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_id      uuid := p_id;
  v_anzahl  int;
  v_regular numeric;
  rec       record;
  v_pos     smallint := 0;
begin
  if not app.darf_bundles_pflegen() then
    raise exception 'Keine Berechtigung fuer Kombiangebote'
      using errcode = '42501';
  end if;

  if coalesce(trim(p_title), '') = '' then
    raise exception 'Das Kombiangebot braucht einen Titel.';
  end if;
  if p_price_gross is null or p_price_gross <= 0 then
    raise exception 'Der Preis muss groesser als null sein.';
  end if;
  if p_status not in ('active', 'inactive', 'archived') then
    raise exception 'Unbekannter Status: %', p_status;
  end if;

  select count(*) into v_anzahl
  from jsonb_array_elements(coalesce(p_items, '[]'::jsonb));

  -- Ein Kombiangebot mit einer Position kombiniert nichts. Der Kunde saehe
  -- ein Bild, ein Pluszeichen ins Leere und einen durchgestrichenen Preis
  -- ohne Anlass.
  if v_anzahl < 2 then
    raise exception 'Ein Kombiangebot braucht mindestens zwei Produkte.';
  end if;

  if v_anzahl <> (
    select count(distinct (e->>'product_id'))
    from jsonb_array_elements(p_items) e
  ) then
    raise exception 'Jedes Produkt darf nur einmal im Kombiangebot stehen.';
  end if;

  -- Preise pruefen, bevor gespeichert wird: ein Bundle, das teurer ist als
  -- der Einzelkauf, darf nicht mit durchgestrichenem Preis werben. Die
  -- Kundenansicht blendet den durchgestrichenen Preis dann zwar aus, aber
  -- der Fehler gehoert hier bemerkt und nicht dort verdeckt.
  select sum(round(p.list_price_net * (1 + p.tax_rate / 100), 2)
             * coalesce((e->>'quantity')::int, 1))
    into v_regular
  from jsonb_array_elements(p_items) e
  join public.products p on p.id = (e->>'product_id')::uuid
  where p.deleted_at is null and p.status = 'active'
    and p.list_price_net is not null;

  if v_regular is null then
    raise exception 'Mindestens ein Produkt ist unbekannt, inaktiv oder ohne Preis.';
  end if;
  if p_price_gross >= v_regular then
    raise exception
      'Der Kombipreis (%) liegt nicht unter der Summe der Einzelpreise (%).',
      p_price_gross, v_regular;
  end if;

  if v_id is null then
    insert into public.bundles(
      code, title, description, price_gross, valid_from, valid_to, status,
      created_by, updated_by
    ) values (
      nullif(trim(coalesce(p_code, '')), ''), trim(p_title),
      nullif(trim(coalesce(p_description, '')), ''),
      p_price_gross, coalesce(p_valid_from, current_date), p_valid_to,
      p_status::app.entity_status, auth.uid(), auth.uid()
    )
    returning id into v_id;
  else
    update public.bundles set
      code        = nullif(trim(coalesce(p_code, '')), ''),
      title       = trim(p_title),
      description = nullif(trim(coalesce(p_description, '')), ''),
      price_gross = p_price_gross,
      valid_from  = coalesce(p_valid_from, valid_from),
      valid_to    = p_valid_to,
      status      = p_status::app.entity_status,
      updated_by  = auth.uid()
    where id = v_id and deleted_at is null;
    if not found then
      raise exception 'Kombiangebot nicht gefunden.';
    end if;
    delete from public.bundle_items where bundle_id = v_id;
  end if;

  for rec in
    select (e->>'product_id')::uuid as pid,
           greatest(coalesce((e->>'quantity')::int, 1), 1) as menge
    from jsonb_array_elements(p_items) with ordinality as t(e, ord)
    order by t.ord
  loop
    v_pos := v_pos + 1;
    insert into public.bundle_items(bundle_id, product_id, quantity, position)
    values (v_id, rec.pid, rec.menge, v_pos);
  end loop;

  return v_id;
end;
$$;

comment on function public.bundle_save(text, numeric, jsonb, uuid, text, text, date, date, text) is
  'Legt ein Kombiangebot an oder aendert es, Kopf und Positionen in einem '
  'Vorgang. p_items ist ein Array aus {product_id, quantity}; die '
  'Reihenfolge im Array ist die Reihenfolge in der Kundenansicht.';

-- ── Zurueckziehen ──────────────────────────────────────────────────────
create or replace function public.bundle_delete(p_id uuid)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
begin
  if not app.darf_bundles_pflegen() then
    raise exception 'Keine Berechtigung fuer Kombiangebote'
      using errcode = '42501';
  end if;

  -- Soft delete: ein Bundle, unter dem schon gekauft wurde, wird ueber
  -- purchase_items.bundle_id gebraucht, um den abweichenden Preis zu
  -- erklaeren. Ein echtes DELETE nimmt der Buchung ihre Begruendung.
  update public.bundles
     set deleted_at = now(), status = 'archived', updated_by = auth.uid()
   where id = p_id and deleted_at is null;
end;
$$;

revoke execute on function app.darf_bundles_pflegen()      from public, anon;
revoke execute on function public.bundle_products()        from public, anon;
revoke execute on function public.bundles_admin()          from public, anon;
revoke execute on function public.bundle_delete(uuid)      from public, anon;
revoke execute on function public.bundle_save(text, numeric, jsonb, uuid, text, text, date, date, text)
  from public, anon;

grant execute on function public.bundle_products()   to authenticated, service_role;
grant execute on function public.bundles_admin()     to authenticated, service_role;
grant execute on function public.bundle_delete(uuid) to authenticated, service_role;
grant execute on function public.bundle_save(text, numeric, jsonb, uuid, text, text, date, date, text)
  to authenticated, service_role;
