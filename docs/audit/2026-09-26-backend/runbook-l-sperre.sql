-- Runbook L, Schritt 1 — Sperre. Wortgleich mit Migration 0070 ab der ersten Anweisung.

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
