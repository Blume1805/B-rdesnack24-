-- ===========================================================================
-- S-19 / S-20: PUBLIC verliert das Ausführungsrecht auf Funktionen — dauerhaft.
--
-- GEFUNDEN DURCH DEN NEUAUFBAU. Migration 0046
-- (20260718112645_security_hardening_public_revoke) hat das Problem 2026
-- schon einmal gelöst: „Funktionen erben execute über PUBLIC, revoke from
-- anon allein greift nicht." Sie entzieht PUBLIC das Recht auf alle damals
-- vorhandenen Funktionen und setzt eine Standardregel für neue.
--
-- Die Standardregel hält nicht. In PostgreSQL bleibt der eingebaute
-- Vorgabewert (PUBLIC darf ausführen) wirksam, wenn das gespeicherte
-- Standardrecht den Eigentümer nicht ausdrücklich mitführt — und genau so
-- hat 0046 es hinterlassen. Nachweisbar geworden ist das erst, als die
-- Migrationen erstmals auf einer LEEREN Datenbank durchliefen:
--
--   Neuaufbau aus dem Repository:  anon darf 8 Funktionen ausführen
--   Produktion:                    anon darf 5 Funktionen ausführen
--
-- Die drei zusätzlichen sind `product_detail`, `finance_balance_kpis` und
-- **`upsert_finance_balance`** — letztere schreibt die Bilanzzahlen. In der
-- Produktion sind sie zu, weil dort irgendwann von Hand nachgezogen wurde;
-- im Repository nicht. Wer also je aus diesem Verzeichnis neu aufbaut,
-- bekommt einen anonym aufrufbaren Schreibzugriff auf Finanzdaten.
--
-- DASSELBE MUSTER IN DER PRODUKTION, kleiner: Elf Funktionen tragen dort
-- heute PUBLIC=X, darunter drei, die am 02.09.2026 im Zuge der
-- Sicherheitskorrekturen entstanden sind (`app.darf_fremdes_konto_beurteilen`,
-- `app.klick_obergrenze_je_konto`, `app.sync_profile_email`). Über die API
-- erreichbar sind sie nicht — PostgREST veröffentlicht nur `public` —, aber
-- sie widersprechen der Regel, die 0046 aufgestellt hat. Eine Korrektur, die
-- das Muster wieder einführt, das sie beseitigen sollte, ist keine.
--
-- Diese Migration räumt beides ab und setzt die Standardregel in der Form,
-- die tatsächlich greift: mit ausdrücklichem Recht für den Eigentümer,
-- damit das gespeicherte Standardrecht vollständig ist und den eingebauten
-- Vorgabewert wirklich ersetzt.
-- ===========================================================================

revoke execute on all functions in schema public from public;
revoke execute on all functions in schema app    from public;

-- Die vier bewusst öffentlichen Endpunkte behalten ihr Recht — sie bekommen
-- es über `anon`, nicht über PUBLIC. (`email_consent_unveraenderlich` ist
-- eine Trigger-Funktion und braucht gar keines.)
grant execute on function public.email_unsubscribe(text)            to anon, authenticated;
grant execute on function public.ki_funktion_freigegeben(text)      to anon, authenticated;
grant execute on function public.subscription_plans()               to anon, authenticated;
grant execute on function public.fetch_email_report_share(text, text, text, text) to anon, authenticated;

-- Eine Trigger-Funktion braucht überhaupt kein Ausführungsrecht für einen
-- Client: Sie wird vom Trigger gerufen, nicht vom Aufrufer. In der
-- Produktion war sie über PUBLIC erreichbar, in der Prüfumgebung über eine
-- ausdrückliche anon-Vergabe. Beides fällt.
revoke execute on function public.email_consent_unveraenderlich() from anon, public;

-- KEIN Blankett-Grant hier. Der erste Anlauf dieser Migration hatte
-- `grant execute on all functions in schema public to authenticated`
-- aus 0046 uebernommen — und damit 18 Funktionen fuer jedes angemeldete
-- Konto geoeffnet, die vorher bewusst zu waren, darunter `email_enqueue`,
-- `next_invoice_number`, `store_notification_apply` und
-- `upsert_finance_balance_synced`. Aufgefallen ist es nur, weil der
-- Fingerabdruck von `authenticated` von 138 auf 156 sprang.
--
-- Ein Entzug von PUBLIC braucht diesen Grant gar nicht: Ausdrueckliche
-- Rechte fuer `authenticated` und `service_role` bleiben davon unberuehrt.

-- Standardrecht neu setzen, diesmal mit dem Eigentümer im Satz.
alter default privileges in schema public revoke execute on functions from public;
alter default privileges in schema public grant  execute on functions to postgres, authenticated, service_role;
alter default privileges in schema app    revoke execute on functions from public;
alter default privileges in schema app    grant  execute on functions to postgres, service_role;

do $$
declare v_public int; v_anon text;
begin
  select count(*) into v_public
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
  where n.nspname in ('public','app')
    and exists (select 1 from unnest(p.proacl) a where a::text like '=X/%');
  if v_public > 0 then
    raise exception 'PUBLIC hat weiterhin Ausführungsrecht auf % Funktionen', v_public;
  end if;

  select string_agg(p.proname, ', ' order by p.proname) into v_anon
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
  where n.nspname = 'public' and has_function_privilege('anon', p.oid, 'EXECUTE');

  if v_anon is distinct from 'email_unsubscribe, fetch_email_report_share, ki_funktion_freigegeben, subscription_plans' then
    raise exception 'Unerwartete anon-Liste: %', coalesce(v_anon, '(leer)');
  end if;

  raise notice 'PUBLIC entzogen. anon darf genau vier Funktionen: %', v_anon;
end $$;
