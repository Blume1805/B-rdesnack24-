-- 0046 — Nachschärfung zu 0045: Funktionen erben execute über PUBLIC.
-- revoke from anon allein greift nicht, weil PUBLIC (und damit anon)
-- das Default-Execute-Recht behält. Deshalb: PUBLIC entziehen und
-- explizit nur authenticated + service_role granten.

revoke execute on all functions in schema public from public;
revoke execute on all functions in schema app    from public;

grant execute on all functions in schema public to authenticated, service_role;
grant execute on all functions in schema app    to authenticated, service_role;

alter default privileges in schema public revoke execute on functions from public;
alter default privileges in schema app    revoke execute on functions from public;
alter default privileges in schema public grant execute on functions to authenticated, service_role;
alter default privileges in schema app    grant execute on functions to authenticated, service_role;
