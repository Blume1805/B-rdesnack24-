-- ===========================================================================
-- Welche Abo-Modelle wählbar sind, entscheidet der Server — nicht die App.
--
-- Befund S-28 vom 14.09.2026, reproduziert in der lokalen Replik:
-- `Pricing.lifetimePubliclyOffered = false` blendet die Lifetime-Karte in
-- der Kunden-App aus. Das war alles, was es tat. Ein angemeldeter Kunde
-- konnte `choose_subscription_plan('lifetime', true, true)` direkt
-- aufrufen und hatte danach ein Lifetime-Abo zu 79,99 € in
-- `customer_subscriptions` stehen. Geprüft wurden Alter, Einwilligung,
-- Kontingent und Wechselverbot — nicht aber, ob das Modell überhaupt
-- angeboten wird.
--
-- Eine ausgeblendete Karte ist kein geschlossenes Angebot. Wer einen
-- HTTP-Client bedienen kann, hat das Abo trotzdem bekommen.
--
-- Zugleich ist das der Mechanismus, den Philipp am 14.09.2026 beschrieben
-- hat: Lifetime bleibt im Code und wird „eventuell in Zukunft für
-- bestimmte Zeiträume freigeschaltet". Genau das steht jetzt hier — als
-- Zeiträume in einer Tabelle, nicht als Konstante in einer App, die für
-- jede Aktion durch den Store müsste.
--
-- Die Regel ist bewusst einfach: Ein Modell ist wählbar, wenn für den
-- Zeitpunkt der Wahl ein Zeitraum eingetragen ist. Kein Zeitraum heißt
-- nicht wählbar. Damit ist der Zustand nicht ein Schalter, den jemand
-- vergisst zurückzustellen, sondern ein Datum, das von selbst abläuft.
-- ===========================================================================

create table if not exists app.abo_angebotszeitraeume (
  id         bigint generated always as identity primary key,
  plan       app.subscription_plan not null,
  von        timestamptz not null,
  bis        timestamptz,           -- null = offen, kein Ende vorgesehen
  anlass     text,                  -- wofür der Zeitraum geöffnet wurde
  angelegt_am timestamptz not null default now(),
  angelegt_von uuid references public.profiles(id),
  constraint abo_zeitraum_reihenfolge check (bis is null or bis > von)
);

comment on table app.abo_angebotszeitraeume is
  'Zeiträume, in denen ein Abo-Modell gewählt werden kann. Kein Zeitraum '
  '= nicht wählbar. Einzige Quelle dafür; die App fragt, sie entscheidet '
  'nicht (Befund S-28, 14.09.2026).';

create index if not exists idx_abo_zeitraum_plan
  on app.abo_angebotszeitraeume (plan, von desc);

-- Ausgangslage: Monats- und Jahres-Abo laufen dauerhaft. Lifetime bekommt
-- KEINEN Zeitraum — das ist der Zustand, den die App bisher nur vorgab.
insert into app.abo_angebotszeitraeume (plan, von, bis, anlass)
select 'monthly', '-infinity'::timestamptz, null, 'Dauerangebot'
 where not exists (select 1 from app.abo_angebotszeitraeume where plan = 'monthly');

insert into app.abo_angebotszeitraeume (plan, von, bis, anlass)
select 'yearly', '-infinity'::timestamptz, null, 'Dauerangebot'
 where not exists (select 1 from app.abo_angebotszeitraeume where plan = 'yearly');

-- ---------------------------------------------------------------------------
-- Die Frage, die überall dieselbe Antwort geben muss.
-- ---------------------------------------------------------------------------
create or replace function app.abo_wird_angeboten(
  p_plan app.subscription_plan,
  p_zeitpunkt timestamptz default now()
) returns boolean
language sql stable
set search_path to 'app', 'public'
as $$
  select exists (
    select 1 from app.abo_angebotszeitraeume z
     where z.plan = p_plan
       and z.von <= p_zeitpunkt
       and (z.bis is null or z.bis > p_zeitpunkt)
  );
$$;

comment on function app.abo_wird_angeboten(app.subscription_plan, timestamptz) is
  'Ist dieses Abo-Modell zu diesem Zeitpunkt wählbar? Einzige Stelle, die '
  'das beantwortet.';

-- ---------------------------------------------------------------------------
-- Was die App fragen soll, statt es selbst zu wissen.
--
-- Gibt nur Preis, Bezeichnung und Verfügbarkeit heraus — keine Zeiträume
-- und keinen Anlass. Warum ein Modell gerade nicht angeboten wird, geht
-- den Kunden nichts an und wäre außerdem ein Hinweis darauf, wann sich
-- Warten lohnt.
-- ---------------------------------------------------------------------------
create or replace function public.abo_angebote()
returns table (
  plan          text,
  price_cents   int,
  billing_label text,
  waehlbar      boolean,
  sort_order    int
)
language sql stable
security definer
set search_path to 'public', 'app'
as $$
  select sp.plan::text,
         sp.price_cents,
         sp.billing_label,
         app.abo_wird_angeboten(sp.plan),
         sp.sort_order
    from app.subscription_plans sp
   order by sp.sort_order, sp.plan::text;
$$;

comment on function public.abo_angebote() is
  'Abo-Modelle mit Preis und der Angabe, ob sie jetzt wählbar sind. Die '
  'Kunden-App liest das, statt die Verfügbarkeit selbst zu kennen — sonst '
  'braucht jede Aktion einen Store-Durchlauf.';

-- ---------------------------------------------------------------------------
-- Das Tor selbst.
-- ---------------------------------------------------------------------------
create or replace function public.choose_subscription_plan(
  p_plan text,
  p_withdrawal_consent boolean default false,
  p_age_consent boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid      uuid := auth.uid();
  v_plan     app.subscription_plan;
  v_current  app.subscription_plan;
  v_price    int;
  v_label    text;
  v_taken    int;
  v_limit    int := app.lifetime_founders_limit();
  v_birth    date;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet' using errcode = '42501';
  end if;
  if not exists (select 1 from public.customers c where c.id = v_uid) then
    raise exception 'Nur Kundenkonten können ein Abo wählen' using errcode = '42501';
  end if;

  begin
    v_plan := p_plan::app.subscription_plan;
  exception when others then
    raise exception 'Unbekanntes Abo-Modell: %', p_plan;
  end;

  -- NEU (S-28): Wird dieses Modell überhaupt angeboten? Diese Prüfung steht
  -- bewusst vor allen anderen — ein nicht angebotenes Modell soll nicht
  -- erst nach der Altersprüfung auffallen, sonst verrät die Reihenfolge der
  -- Fehlermeldungen, welche Prüfung wie weit kam.
  if not app.abo_wird_angeboten(v_plan) then
    raise exception 'Dieses Abo-Modell wird derzeit nicht angeboten.'
      using errcode = '42501';
  end if;

  -- Altersschranke: erst das gespeicherte Datum, dann die Erklärung.
  -- Die Reihenfolge ist Absicht — wer minderjährig ist, soll nicht durch
  -- Setzen eines Häkchens weiterkommen.
  select p.birth_date into v_birth
    from public.profiles p where p.id = v_uid;

  if v_birth is null then
    raise exception
      'Für ein kostenpflichtiges Abo brauchen wir dein Geburtsdatum. '
      'Bitte trage es in deinen Stammdaten nach — es lässt sich danach '
      'nicht mehr ändern.'
      using errcode = 'P0001';
  end if;

  if v_birth > (current_date - interval '18 years') then
    raise exception
      'Bördesnack24 Plus ist volljährigen Kundinnen und Kunden vorbehalten. '
      'Alle kostenfreien Vorteile stehen dir weiterhin offen.'
      using errcode = '42501';
  end if;

  if not coalesce(p_age_consent, false) then
    raise exception 'Bitte bestätige, dass du volljährig bist oder mit Zustimmung deiner gesetzlichen Vertreter handelst.';
  end if;

  if v_plan = 'lifetime' and not coalesce(p_withdrawal_consent, false) then
    raise exception 'Für das Lifetime-Abo ist die Zustimmung zum Erlöschen des Widerrufsrechts erforderlich.';
  end if;

  select plan into v_current
  from public.customer_subscriptions
  where customer_id = v_uid
  order by seq desc
  limit 1;

  if v_current = 'lifetime' then
    raise exception 'Lifetime-Abo ist endgültig — kein Wechsel mehr möglich';
  end if;
  if v_current = v_plan then
    raise exception 'Dieses Abo-Modell ist bereits aktiv';
  end if;

  if v_plan = 'lifetime' then
    select count(distinct customer_id) into v_taken
    from public.customer_subscriptions
    where plan = 'lifetime';
    if v_taken >= v_limit then
      raise exception 'Die Lifetime Founders Edition ist ausverkauft (% von % Plätzen vergeben).',
        v_taken, v_limit;
    end if;
  end if;

  -- Preise stehen seit 0080 in app.subscription_plans, damit Web-App,
  -- native App und diese RPC dieselbe Quelle lesen.
  select sp.price_cents, sp.billing_label
    into v_price, v_label
    from app.subscription_plans sp
   where sp.plan::text = v_plan::text;
  if v_price is null then
    raise exception 'Unbekanntes Abo-Modell: %', v_plan;
  end if;

  insert into public.customer_subscriptions
    (customer_id, plan, price_cents, billing_label, previous_plan,
     withdrawal_consent, age_consent)
  values (v_uid, v_plan, v_price, v_label, v_current,
          coalesce(p_withdrawal_consent, false),
          coalesce(p_age_consent, false));

  return jsonb_build_object(
    'plan',          v_plan,
    'price_cents',   v_price,
    'billing_label', v_label,
    'previous_plan', v_current,
    'chosen_at',     now()
  );
end;
$function$;

comment on function public.choose_subscription_plan(text, boolean, boolean) is
  'Wahl eines Abo-Modells. Prüft Angebotszeitraum (S-28), Alter, '
  'Einwilligungen, Wechselverbot und das Founders-Kontingent — '
  'ausnahmslos serverseitig.';

-- ---------------------------------------------------------------------------
-- Rechte.
--
-- Supabase gibt jeder neuen Tabelle automatisch SELECT/INSERT/UPDATE/DELETE
-- für `authenticated`. Ein `revoke ... from public, anon` entfernt die
-- NICHT — das war Befund S-25 vom selben Tag. Deshalb hier ausdrücklich
-- auch von `authenticated`.
--
-- Die Zeiträume liest niemand direkt: Kunden bekommen `abo_angebote()`,
-- und wer sie pflegt, tut das mit dem Dienstschlüssel. Wann eine Aktion
-- endet, ist eine Geschäftsinformation und keine Kundenanzeige.
-- ---------------------------------------------------------------------------
revoke all on table app.abo_angebotszeitraeume from public, anon, authenticated;

alter table app.abo_angebotszeitraeume enable row level security;

revoke all on function public.abo_angebote() from public, anon;
grant execute on function public.abo_angebote() to authenticated, anon;
