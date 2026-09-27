-- ============================================================================
-- 108 — Scheinkäufe, fremde Kaufbeträge, Bargeld-Soll (Befunde B-1 bis B-3)
--
-- Backend-Prüfung vom 26.09.2026, docs/audit/AUDIT-2026-09-BACKEND.md.
-- Zwei echte Kundenkonten (A, B) und der Gesellschafter (G) aus
-- 10_pruefdaten.sql. Jede Abweisung wird am GESPEICHERTEN Zustand
-- nachgemessen, nicht am Fehlercode allein — Prüfskript 81 hatte
-- `dev_add_demo_purchase` als „abgewiesen" gewertet, obwohl der Aufruf nur an
-- einer fehlenden Testvoraussetzung scheiterte (23502).
--
-- Wiederholbar: Alles, was angelegt wird, wird am Ende wieder entfernt.
-- Terminal-Ereignisse sind unveränderbar; deshalb läuft der Bargeld-Teil in
-- einer Untertransaktion, die zurückgerollt wird.
-- ============================================================================
truncate pruef.ergebnis restart identity;

do $$
declare
  A  uuid := '11111111-1111-1111-1111-111111111111';
  Bk uuid := '22222222-2222-2222-2222-222222222222';
  G  uuid := '33333333-3333-3333-3333-333333333333';
  w text; r text; n_vor int; n_nach int; c_vor int; c_nach int; kauf_b uuid;
begin
  -- ── B-1 Scheinkauf ───────────────────────────────────────────────────────
  -- Voraussetzung, an der 81 gescheitert war: ein aktiver Automat. Ohne ihn
  -- scheitert der Aufruf an machine_id und der Test bestünde aus dem
  -- falschen Grund.
  if not exists (select 1 from public.machines where status='active' and deleted_at is null) then
    raise exception 'Voraussetzung fehlt: kein aktiver Automat';
  end if;

  -- In einer Untertransaktion, die am Ende zurückgerollt wird: Gelingt der
  -- Angriff, soll der Scheinkauf nicht im Prüfbestand liegen bleiben.
  begin
    -- Die Treuestufen gelten nur mit Abo. Ohne Abo bliebe die
    -- Coupon-Prüfung grün, auch wenn der Scheinkauf durchginge.
    if not app.has_subscription(A) then
      insert into public.customer_subscriptions
        (customer_id, plan, price_cents, billing_label, age_consent, withdrawal_consent)
      values (A, 'monthly', 299, 'Prüfung 108', true, true);
    end if;
    if not app.has_subscription(A) then
      raise exception 'Voraussetzung fehlt: Abo für Kunde A';
    end if;
    select count(*) into n_vor from public.purchases where customer_id = A;
    select count(*) into c_vor from public.personal_offers where customer_id = A;
    w := pruef.schreibe('select public.dev_add_demo_purchase(''card_ec'', 30)', A);
    select count(*) into n_nach from public.purchases where customer_id = A;
    select count(*) into c_nach from public.personal_offers where customer_id = A;
    raise exception using errcode = 'P0108', message = 'zurückrollen';
  exception when sqlstate 'P0108' then null;
  end;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
  values ('B-1','Scheinkauf per RPC','Kunde A','eigenes Konto',
          '42501 und kein neuer Kauf', w||' / Käufe '||n_vor||'→'||n_nach,
          w like 'ERR:42501%' and n_nach = n_vor),
         ('B-1','keine Treue-Coupons aus dem Versuch','Kunde A (mit Abo)','personal_offers',
          'unverändert', 'Coupons '||c_vor||'→'||c_nach, c_nach = c_vor);

  w := pruef.schreibe('select public.dev_add_demo_purchase(''card_ec'', 30)', null, 'anon');
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
  values ('B-1','Scheinkauf ohne Anmeldung','anon','—','42501', w, w like 'ERR:42501%');

  -- ── B-2 Fremder Kaufbetrag über die Kauf-ID ──────────────────────────────
  select id into kauf_b from public.purchases where customer_id = Bk limit 1;
  if kauf_b is null then raise exception 'Voraussetzung fehlt: Kauf von B'; end if;

  r := pruef.lies(format('select public.purchase_net_items(%L, 0)::text', kauf_b), A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
  values ('B-2','Nettobetrag fremder Kauf','Kunde A','Kauf von B','42501', r, r like 'ERR:42501%');

  r := pruef.lies(format('select public.purchase_donation_for(%L, 0)::text', kauf_b), A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
  values ('B-2','Spendenbetrag fremder Kauf','Kunde A','Kauf von B','42501', r, r like 'ERR:42501%');

  -- Gegenprobe: Die Kundensicht auf den eigenen Spendenanteil läuft weiter.
  -- Die Funktionen rufen mit Eigentümerrechten und sind vom Entzug nicht
  -- betroffen.
  r := pruef.lies('select my_donated::text from public.donation_pool_summary()', Bk);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
  values ('Gegenprobe','eigener Spendenanteil','Kunde B','donation_pool_summary',
          'Betrag > 0', r, r not like 'ERR%' and r <> '<null>' and r::numeric > 0);

  r := pruef.lies('select count(*)::text from public.my_donations_by_purchase()', Bk);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
  values ('Gegenprobe','Spende je eigenem Kauf','Kunde B','my_donations_by_purchase',
          'mindestens 1 Zeile', r, r not like 'ERR%' and r::int >= 1);
end $$;

-- ── B-3 Bargeld-Soll ───────────────────────────────────────────────────────
-- Terminal-Ereignisse sind absichtlich unveränderbar; ein Testeintrag bliebe
-- sonst für immer stehen. Deshalb läuft der Barverkauf in einer
-- Untertransaktion, die am Ende bewusst zurückgerollt wird. Die gemessenen
-- Werte überleben das in Variablen.
do $$
declare
  M  uuid := 'aaaa0000-0000-4000-8000-000000000001';
  q  text;
  ra text; rn text; rg text;
begin
  q := format('select coalesce(sum(soll_betrag),0)::text||''/''||count(*) from public.bar_soll(%L)', M);
  begin
    insert into public.terminal_ereignisse
      (hersteller, terminal_kennung, idempotenz_schluessel, anbieter_lfd_nr, art, zahlart, nutzlast)
    select 'clevermetrics', t.terminal_kennung, 'pruef-108-bar', 9108, 'verkauf', 'bar',
           '{"betrag": 187.50}'::jsonb
      from public.terminals t where t.machine_id = M limit 1;
    if not found then raise exception 'Voraussetzung fehlt: Terminal an Automat %', M; end if;

    ra := pruef.lies(q, '11111111-1111-1111-1111-111111111111');
    rn := pruef.lies(q, null, 'anon');
    rg := pruef.lies(q, '33333333-3333-3333-3333-333333333333');
    raise exception using errcode = 'P0108', message = 'zurückrollen';
  exception when sqlstate 'P0108' then null;
  end;

  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok) values
   ('B-3','Bargeld im Automaten','Kunde A','bar_soll','keine Zeile', ra, ra = '0/0'),
   ('B-3','Bargeld im Automaten','anon','bar_soll','42501', rn, rn like 'ERR:42501%'),
   ('Gegenprobe','Bargeld im Automaten','Gesellschafter','bar_soll',
    'Betrag sichtbar (cash.collect)', rg,
    rg not like 'ERR%' and split_part(rg,'/',1)::numeric >= 187.50);
end $$;

select gruppe, test, akteur, erwartet, gemessen,
       case when ok then 'OK' else 'ROT' end as urteil
  from pruef.ergebnis order by id;
