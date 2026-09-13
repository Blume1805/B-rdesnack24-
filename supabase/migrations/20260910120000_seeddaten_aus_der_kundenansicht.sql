-- Seed-Daten aus der Kundenoberflaeche nehmen (P0-1 des Zielkonzepts)
--
-- Stand 10.09.2026: null Automaten gekauft, null Verkaeufe. In der
-- Produktion stehen aber vier Automaten auf `active`, dazu 94
-- Bestandspositionen mit zusammen 589 Stueck und 90 Wochenangebote,
-- davon zwei aktuell gueltig.
--
-- Ein Kunde saehe damit heute Angebote fuer Produkte, die nicht gekauft
-- sind, an Automaten, die es nicht gibt, mit einem Bestand, den es nicht
-- gibt. Das sind Aussagen ueber einen Betriebszustand, der nicht besteht
-- (§ 5 UWG) -- dieselbe Sorte wie die drei Demo-Nachrichten, die am
-- 07.09.2026 auf unveroeffentlicht gesetzt wurden.
--
-- Zweiter Grund, technischer: Die App leitet ihren Betriebszustand ab
-- 10.09.2026 daraus ab, ob ueberhaupt ein Automat sichtbar ist. Solange
-- Seed-Zeilen darin stehen, haelt die App sich faelschlich fuer live und
-- zeigt Abo, Kundenkarte und Bonusanzeigen, die ins Leere laufen.
--
-- Dieselbe Bedingung haengt an der Erinnerungsregel in CLAUDE.md: sie
-- gilt, "bis in der Tabelle machines mindestens ein aktiver Automat
-- steht". Durch die Seed-Zeilen war sie formal bereits abgelaufen,
-- bevor der erste Automat gekauft ist. Nach dieser Migration greift sie
-- wieder.
--
-- Kein DELETE: Die Zeilen bleiben als Vorlage erhalten und lassen sich
-- zurueckholen. Wirkung ist dieselbe, weil jede Leseregel auf
-- `deleted_at is null` bzw. `status = 'active'` filtert.

-- ── 1) Die vier Seed-Automaten ───────────────────────────────────────
--
-- "Automat 1/2/3" stammen aus dem Seed vom 29.06.2026, der
-- "Heissgetraenkeautomat" vom 18.07.2026. Bewusst ueber die Namen
-- adressiert und nicht ueber das Datum: Wer spaeter einen echten
-- Automaten anlegt, soll von dieser Migration nicht getroffen werden,
-- auch wenn er sie erneut anwendet.
update public.machines
   set status     = 'archived',
       archived_at = coalesce(archived_at, now()),
       deleted_at = coalesce(deleted_at, now())
 where name in ('Automat 1', 'Automat 2', 'Automat 3', 'Heißgetränkeautomat')
   and (status is distinct from 'archived' or deleted_at is null);

-- Der Bestand haengt an den Automaten (machine_stock ist eine Sicht auf
-- inventory_machine). Mit den archivierten Automaten verschwindet er aus
-- jeder Kundenabfrage; die Zeilen selbst bleiben unangetastet.

-- ── 2) Die Wochenangebote ────────────────────────────────────────────
--
-- Alle 90 stammen aus dem Seed. 88 sind ohnehin abgelaufen, zwei waren
-- am 10.09.2026 noch gueltig und damit in der App sichtbar.
--
update public.offers
   set status = 'archived'
 where status = 'active';

-- Die zwei aktuellen stammen nicht aus dem Seed, sondern von einem Job:
-- `cron.job` Nr. 2 ruft naechtlich um 03:50 UTC
-- `public.generate_daily_offers(2)` auf und legt zwei Tages-Deals an.
-- Ohne diesen Schritt stuenden morgen frueh wieder welche in der App.
--
-- Der Job wird angehalten, nicht geloescht. Sobald der erste Automat
-- bestueckt ist, holt ihn eine Zeile zurueck:
--
--   select cron.alter_job(2, active := true);
--
-- Der Wetterabgleich (Job 1) bleibt an: Er erzeugt keine Aussage
-- gegenueber Kunden, sondern fuellt nur eine Hilfstabelle.
do $$
begin
  perform cron.alter_job(2, active := false);
exception
  when undefined_function or insufficient_privilege then
    raise notice 'cron.alter_job nicht verfuegbar - Job 2 bitte von Hand anhalten';
end $$;

-- ── 3) Challenges abschalten (P1-3) ──────────────────────────────────
--
-- Vier aktive Challenges, von denen drei belohnen, was kein Kunde
-- wollen sollte:
--
--   "Morgenmuffel-Kur"  -- drei Kaeufe vormittags in 30 Tagen. Belohnt
--                          eine Uhrzeit, nicht einen Nutzen.
--   "Tour de Automat"   -- drei verschiedene Automaten in 30 Tagen.
--                          Belohnt Umwege; bei vier geplanten Automaten
--                          in einem Landkreis heisst das: fahr weiter
--                          als noetig.
--   "Wochen-Snacker"    -- drei Kaeufe in sieben Tagen. Belohnt Frequenz
--                          ohne Gegenwert; bei Lebensmitteln ist das
--                          eine Aufforderung zum Mehrkonsum.
--
-- "Geschmackstest" (fuenf verschiedene Produkte in 30 Tagen) belohnt
-- immerhin das Ausprobieren des Sortiments, konkurriert aber mit drei
-- anderen Belohnungssystemen. Er wird mit abgeschaltet, damit von acht
-- Mechaniken drei uebrig bleiben: Abo-Rabatt, Status, Meilensteine.
--
-- Die Datensaetze bleiben stehen. Ein `update ... set active = true`
-- holt jede einzelne zurueck.
update public.challenges
   set active = false
 where active;
