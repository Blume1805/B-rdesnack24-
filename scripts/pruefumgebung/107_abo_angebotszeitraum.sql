-- Angebotszeiträume für Abo-Modelle (Befund S-28).
--
-- Der Kern: Ob ein kostenpflichtiges Modell gewählt werden kann, entscheidet
-- der Server. Vor dieser Migration entschied es die App — und zwar nur für
-- sich selbst. Läuft ausschließlich gegen die Replik.
--
-- Nicht wiederholbar: L2 legt ein Abo an, L6 einen Zeitraum. Braucht davor
-- einen Neubau.
\set ON_ERROR_STOP on
\pset pager off

-- Ausgangslage: Kunde A ohne Abo.
delete from public.customer_subscriptions
 where customer_id = '11111111-1111-1111-1111-111111111111';

\echo '=== L1  Lifetime wird nicht angeboten — Kunde A wird abgewiesen ==='
select case pruef.lies($$
         select public.choose_subscription_plan('lifetime', true, true)::text
       $$, '11111111-1111-1111-1111-111111111111'::uuid)
       when 'ERR:42501' then 'OK — abgewiesen'
       else 'VORFALL — Lifetime war waehlbar, obwohl kein Zeitraum offen ist'
       end as l1_lifetime_zu;

\echo '=== L2  Gegenprobe: das Monats-Abo laeuft dauerhaft und geht durch ==='
select case when pruef.lies($$
         select public.choose_subscription_plan('monthly', false, true)::text
       $$, '11111111-1111-1111-1111-111111111111'::uuid) like '%monthly%'
       then 'OK — angenommen' else 'VORFALL — Dauerangebot wurde abgewiesen' end as l2_monthly_offen;

\echo '=== L3  Wahrheit nach L1/L2: genau ein Abo, und zwar monthly ==='
select pruef.wahrheit($$
  select count(*)||'x '||coalesce(max(plan::text),'-')
    from public.customer_subscriptions
   where customer_id='11111111-1111-1111-1111-111111111111'
$$) as l3_gespeichert;

\echo '=== L4  abo_angebote() weist Lifetime als nicht waehlbar aus ==='
select pruef.wahrheit($$
  select string_agg(plan||'='||waehlbar::text, ' ' order by plan)
    from public.abo_angebote()
$$) as l4_angebote;

\echo '=== L5  Der Zeitraum selbst ist fuer Kunden nicht lesbar ==='
select case pruef.zaehle($$
         select 1 from app.abo_angebotszeitraeume
       $$, '11111111-1111-1111-1111-111111111111'::uuid)
       when -1 then 'OK — abgewiesen'
       else 'VORFALL — Kunde sieht die Angebotszeitraeume'
       end as l5_zeitraeume_zu;

\echo '=== L6  Aktionszeitraum geoeffnet: Lifetime wird waehlbar ==='
insert into app.abo_angebotszeitraeume (plan, von, bis, anlass)
values ('lifetime', now() - interval '1 hour', now() + interval '7 days', 'Pruefaktion');

select case when pruef.lies($$
         select public.choose_subscription_plan('lifetime', true, true)::text
       $$, '22222222-2222-2222-2222-222222222222'::uuid) like '%lifetime%'
       then 'OK — im Zeitraum waehlbar' else 'VORFALL — Zeitraum wirkt nicht' end as l6_aktion_offen;

\echo '=== L7  Ein abgelaufener Zeitraum oeffnet nichts ==='
update app.abo_angebotszeitraeume
   set von = now() - interval '30 days', bis = now() - interval '1 day'
 where plan = 'lifetime';

select case pruef.lies($$
         select public.choose_subscription_plan('lifetime', true, true)::text
       $$, '66666666-6666-6666-6666-666666666666'::uuid)
       when 'ERR:42501' then 'OK — abgelaufen, abgewiesen'
       else 'VORFALL — abgelaufener Zeitraum war noch offen'
       end as l7_abgelaufen;

\echo '=== L8  Ein kuenftiger Zeitraum oeffnet noch nichts ==='
update app.abo_angebotszeitraeume
   set von = now() + interval '10 days', bis = now() + interval '20 days'
 where plan = 'lifetime';

select case pruef.lies($$
         select public.choose_subscription_plan('lifetime', true, true)::text
       $$, '66666666-6666-6666-6666-666666666666'::uuid)
       when 'ERR:42501' then 'OK — noch nicht offen, abgewiesen'
       else 'VORFALL — kuenftiger Zeitraum war schon offen'
       end as l8_zukunft;

\echo '=== L9  Gegenprobe: die Altersschranke greift weiterhin ==='
update app.abo_angebotszeitraeume
   set von = now() - interval '1 hour', bis = null
 where plan = 'lifetime';

select case pruef.lies($$
         select public.choose_subscription_plan('lifetime', true, true)::text
       $$, '44444444-4444-4444-4444-444444444444'::uuid)
       when 'ERR:42501' then 'OK — Minderjaehriger abgewiesen'
       else 'VORFALL — Altersschranke durchlaessig'
       end as l9_minderjaehrig;

\echo '=== L10 Ein Zeitraum, der rueckwaerts laeuft, wird gar nicht erst angelegt ==='
select case pruef.wahrheit($$
         insert into app.abo_angebotszeitraeume (plan, von, bis)
         values ('yearly', now(), now() - interval '1 day')
         returning 'eingefuegt'
       $$)
       when 'ERR:23514' then 'OK — Pruefbedingung greift'
       else 'VORFALL — Zeitraum mit bis <= von wurde angenommen'
       end as l10_reihenfolge;

\echo ''
\echo 'Alle Ergebnisse oben muessen OK lauten. VORFALL = sofort 🔴.'
