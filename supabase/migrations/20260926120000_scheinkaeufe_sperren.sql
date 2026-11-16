-- ============================================================================
-- 0070 — Scheinkäufe sperren, fremde Kaufbeträge und Bargeld-Soll schützen
--
-- Befund B-1 (Backend-Prüfung 26.09.2026, docs/audit/AUDIT-2026-09-BACKEND.md):
-- `public.dev_add_demo_purchase(text, numeric)` ist ein Entwicklungswerkzeug,
-- das seit 0058 jedem angemeldeten Konto ausführbar ist. Es legt einen Kauf
-- mit frei wählbarem Betrag an. Nachgewiesen am Produktions-Nachbau:
--
--   * Ein Aufruf mit 30 € gibt einem Konto mit Abo sofort vier echte,
--     einlösbare Coupons (5, 10, 15 und 25 %), weil die Treuestufen die
--     Summe aller Käufe des Monats zählen, auch der Demo-Käufe.
--   * Zu dem Scheinkauf erzeugt `receipt-pdf` einen Kassenbon mit
--     Steuernummer, USt-IdNr. und Umsatzsteuer-Ausweis — ohne Hinweis auf
--     „Demo". Ein Beleg mit Steuerausweis ohne Lieferung kann nach
--     § 14c Abs. 2 UStG die ausgewiesene Steuer schulden lassen.
--   * Der Anteil am Spendentopf, den die App anzeigt, steigt mit.
--
-- Die Schaltfläche „Demo-Testkauf" war in der ausgelieferten App sichtbar;
-- ein Angriff brauchte also nicht einmal ein Werkzeug.
--
-- Korrektur: Das Ausführungsrecht wird entzogen. Die Funktion bleibt
-- bestehen (kein Löschen von Code, umkehrbar mit einem `grant`), ist aber nur
-- noch mit Datenbank-Eigentümerrechten aufrufbar — also für Tests, nicht für
-- Kundenkonten.
--
-- Befunde B-2 und B-3 betreffen Funktionen, die es nur in der
-- Produktionslinie gibt (`purchase_net_items`, `purchase_donation_for`,
-- `bar_soll`). Sie werden hier mit Existenzprüfung behandelt, damit dieser
-- Text unverändert in beiden Linien und im SQL-Editor der Produktion läuft
-- (Runbook L in docs/OPERATIONS.md).
-- ============================================================================

revoke execute on function public.dev_add_demo_purchase(text, numeric)
  from public, anon, authenticated;

do $$
begin
  -- B-2: Netto- und Spendenbetrag eines beliebigen Kaufs über dessen ID.
  -- Alle Verwender sind SECURITY DEFINER und rufen mit Eigentümerrechten;
  -- für Kundenkonten ist ein direkter Aufruf nie vorgesehen gewesen.
  if to_regprocedure('public.purchase_net_items(uuid, numeric)') is not null then
    revoke execute on function public.purchase_net_items(uuid, numeric)
      from public, anon, authenticated;
  end if;
  if to_regprocedure('public.purchase_donation_for(uuid, numeric)') is not null then
    revoke execute on function public.purchase_donation_for(uuid, numeric)
      from public, anon, authenticated;
  end if;

  -- B-3: Bargeld-Soll je Automat. Verrät jedem Konto, wie viel Bargeld in
  -- welchem Gerät liegt. Dieselbe Prüfung wie `kassendifferenzen`: nur wer
  -- `cash.collect` oder `finance.view` trägt, bekommt eine Zeile.
  if to_regprocedure('public.bar_soll(uuid)') is not null then
    execute $f$
      create or replace function public.bar_soll(p_machine uuid)
       returns table(seit timestamp with time zone, soll_betrag numeric, anzahl_verkaeufe bigint)
       language sql
       stable security definer
       set search_path to 'public', 'app'
      as $body$
        with letzte as (
          select coalesce(max(c.collected_at), '-infinity'::timestamptz) as zeitpunkt
            from public.cash_collection_logs c
           where c.machine_id = p_machine
        )
        select l.zeitpunkt,
               coalesce(sum((e.nutzlast->>'betrag')::numeric), 0),
               -- count(e.lfd_nr), nicht count(*): Ohne Treffer liefert der Left Join
               -- trotzdem eine Zeile, und count(*) meldete dann einen Verkauf, den
               -- es nicht gibt.
               count(e.lfd_nr)
          from letzte l
          left join public.terminal_ereignisse e
            on e.art = 'verkauf'
           and e.zahlart = 'bar'
           and e.eingegangen_am > l.zeitpunkt
           and jsonb_typeof(e.nutzlast->'betrag') = 'number'
           -- Zuordnung über die Kennung, nicht nur über terminal_id: Ein Ereignis,
           -- dessen Gerät (noch) nicht in `terminals` steht, kommt mit
           -- terminal_id = null an. Zählte es nicht mit, fehlte sein Betrag im
           -- Soll — und der Kassensturz wiese einen Überschuss aus, den es nicht
           -- gibt. Ein zu niedriges Soll ist beim Bargeld der gefährlichere Fehler.
           and (
                 e.terminal_id in (
                   select t.id from public.terminals t where t.machine_id = p_machine
                 )
                 or (e.terminal_id is null and e.terminal_kennung in (
                   select t.terminal_kennung from public.terminals t
                    where t.machine_id = p_machine
                 ))
               )
         -- Befund B-3 (26.09.2026): ohne diese Bedingung sah jedes Konto das
         -- Bargeld im Automaten.
         where (public.auth_has_permission('cash.collect')
                or public.auth_has_permission('finance.view'))
         group by l.zeitpunkt;
      $body$
    $f$;
    revoke all on function public.bar_soll(uuid) from public, anon;
    grant execute on function public.bar_soll(uuid) to authenticated;
  end if;
end $$;
