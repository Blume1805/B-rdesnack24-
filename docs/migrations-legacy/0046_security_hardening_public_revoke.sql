-- 0046 — Nachschärfung zu 0045: Funktionen erben execute über PUBLIC.
--
-- Der Verifikationstest nach 0045 zeigte: revoke from anon allein greift
-- nicht, weil Postgres-Funktionen standardmäßig execute an PUBLIC geben
-- und anon dieses Recht erbt. Deshalb: PUBLIC entziehen und explizit nur
-- authenticated + service_role granten — auch als Default für künftige
-- Funktionen.
--
-- Getestet: anon → insufficient_privilege bei RPC-Aufruf;
-- authenticated → donation_rate/my_subscription/finance_summary laufen.

revoke execute on all functions in schema public from public;
revoke execute on all functions in schema app    from public;

grant execute on all functions in schema public to authenticated, service_role;
grant execute on all functions in schema app    to authenticated, service_role;

alter default privileges in schema public revoke execute on functions from public;
alter default privileges in schema app    revoke execute on functions from public;
alter default privileges in schema public grant execute on functions to authenticated, service_role;
alter default privileges in schema app    grant execute on functions to authenticated, service_role;
