-- Runbook L, Schritt 2 — nur lesen. Zeigt, ob die Sperre wirkt.
select
  case when has_function_privilege('authenticated',
              'public.dev_add_demo_purchase(text,numeric)', 'EXECUTE')
       then 'OFFEN' else 'gesperrt' end as scheinkauf,
  case when to_regprocedure('public.purchase_net_items(uuid,numeric)') is null
       then 'nicht vorhanden'
       when has_function_privilege('authenticated',
              'public.purchase_net_items(uuid,numeric)', 'EXECUTE')
       then 'OFFEN' else 'gesperrt' end as fremde_kaufbetraege,
  case when to_regprocedure('public.bar_soll(uuid)') is null
       then 'nicht vorhanden'
       when (select prosrc from pg_proc
              where oid = to_regprocedure('public.bar_soll(uuid)')) like '%cash.collect%'
       then 'geschützt' else 'OFFEN' end as bargeld_im_automaten;
