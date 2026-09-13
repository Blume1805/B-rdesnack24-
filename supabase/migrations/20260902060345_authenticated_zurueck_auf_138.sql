-- ===========================================================================
-- Rücknahme eines Fehlers aus 20260902060051.
--
-- Jene Migration hat den Blankett-Grant
--   grant execute on all functions in schema public to authenticated
-- aus Migration 0046 übernommen. Er war dort richtig und hier falsch: Ein
-- Entzug von PUBLIC braucht ihn nicht, ausdrückliche Rechte bleiben
-- unberührt. Die Folge war, dass `authenticated` — also **jedes
-- angemeldete Konto** — Ausführungsrechte auf 18 Funktionen bekam, die
-- vorher bewusst zu waren. Darunter:
--
--   email_enqueue                Post an eine beliebige Adresse einstellen
--   next_invoice_number          Rechnungsnummern verbrauchen — jede Lücke
--                                in der Nummernfolge ist ein GoBD-Problem
--   create_invoice_for_purchase  Rechnung zu einem fremden Kauf erzeugen
--   store_notification_apply     Abo-Meldung des Stores anwenden
--   upsert_finance_balance_synced  Bilanzzahlen schreiben
--   grant_birthday_offer,        Rabatte an eine beliebige Kunden-ID
--   grant_anniversary_offer        vergeben
--   email_unsubscribe_token_for  Abmeldetoken eines fremden Profils holen
--
-- AUFGEFALLEN IST ES NICHT BEIM LESEN. Der Regressionslauf blieb grün, weil
-- er die 48 vorher aufrufbaren Verwaltungs-RPCs prüft — diese 18 waren nie
-- darunter. Gesehen wurde der Fehler allein daran, dass der Fingerabdruck
-- von `authenticated` nach dem Ausrollen von 138 auf 156 sprang. Genau
-- dafür wird verglichen.
--
-- Die Ursache ist in 20260902060051 entfernt; auf einer leeren Datenbank
-- läuft diese Migration deshalb ins Leere. Für die bereits bespielte
-- Produktion nimmt sie die 18 Rechte einzeln zurück — benannt, nicht
-- pauschal, damit nachvollziehbar bleibt, was wieder zugeht.
-- ===========================================================================

revoke execute on function public.card_entitlements(p_token text) from authenticated, anon;
revoke execute on function public.create_invoice_for_purchase(p_purchase_id uuid) from authenticated, anon;
revoke execute on function public.email_enqueue(p_template_key text, p_profile uuid, p_vars jsonb, p_to text, p_scheduled_for timestamp with time zone, p_dedupe_key text) from authenticated, anon;
revoke execute on function public.email_has_consent(p_profile uuid, p_topic text) from authenticated, anon;
revoke execute on function public.email_outbox_claim(p_limit integer) from authenticated, anon;
revoke execute on function public.email_outbox_mark(p_id uuid, p_status text, p_error text, p_log_id uuid) from authenticated, anon;
revoke execute on function public.email_unsubscribe_token_for(p_profile uuid) from authenticated, anon;
revoke execute on function public.generate_daily_offers(p_count integer) from authenticated, anon;
revoke execute on function public.generate_weekly_offers(p_count integer) from authenticated, anon;
revoke execute on function public.grant_anniversary_offer(p_customer_id uuid) from authenticated, anon;
revoke execute on function public.grant_birthday_offer(p_customer_id uuid) from authenticated, anon;
revoke execute on function public.has_paid_subscription(p_profile uuid) from authenticated, anon;
revoke execute on function public.legal_text_abrufen(p_branch text) from authenticated, anon;
revoke execute on function public.legal_text_uebernehmen(p_request_id bigint) from authenticated, anon;
revoke execute on function public.next_invoice_number() from authenticated, anon;
revoke execute on function public.run_daily_special_offers() from authenticated, anon;
revoke execute on function public.store_notification_apply(p_store text, p_notification_id text, p_notification_type text, p_subtype text, p_store_ref text, p_product_id text, p_status text, p_expires_at timestamp with time zone, p_auto_renew boolean, p_environment text, p_event_at timestamp with time zone, p_raw jsonb) from authenticated, anon;
revoke execute on function public.upsert_finance_balance_synced(p_as_of date, p_cash_and_bank numeric, p_receivables numeric, p_inventory_value numeric, p_other_current_assets numeric, p_fixed_assets numeric, p_current_liabilities numeric, p_long_term_liabilities numeric, p_equity numeric) from authenticated, anon;

do $$
declare v_anzahl int; v_fp text;
begin
  select count(*), md5(string_agg(p.proname||'('||pg_get_function_identity_arguments(p.oid)||')', ',' order by p.proname, pg_get_function_identity_arguments(p.oid)))
    into v_anzahl, v_fp
  from pg_proc p
  join pg_namespace n on n.oid = p.pronamespace
  -- Funktionen, die zu einer Erweiterung gehoeren, zaehlen nicht mit: In
  -- der Pruefumgebung liegt pgTAP mit ueber tausend Funktionen in `public`,
  -- in der Produktion nicht. Eine Zusicherung, die nur in einer der beiden
  -- Umgebungen aufgeht, sichert nichts.
  left join pg_depend d on d.objid = p.oid and d.deptype = 'e'
  where n.nspname = 'public' and d.objid is null
    and has_function_privilege('authenticated', p.oid, 'EXECUTE');

  if v_anzahl <> 138 or v_fp <> 'c5f00ccba46d3fdd0ce473c34aa2b81d' then
    raise exception 'authenticated steht bei % Funktionen (%), erwartet 138 (c5f00ccba46d3fdd0ce473c34aa2b81d)', v_anzahl, v_fp;
  end if;
  raise notice 'authenticated ist wieder auf den 138 Funktionen von vorher.';
end $$;
