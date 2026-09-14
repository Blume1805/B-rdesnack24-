-- ===========================================================================
-- Nachtrag zu S-12: Die neue Tabelle bekommt keine Client-Rechte.
--
-- Der Supabase-Standard vergibt beim Anlegen einer Tabelle automatisch
-- volle DML-Rechte an `anon` und `authenticated`. Für
-- `advertising_redirect_actors` ist das nicht gewollt: Die Tabelle ist
-- ausschließlich über `advertising_redirect_count` (SECURITY DEFINER)
-- erreichbar — so wie `customer_card`, `customer_login_days` und die
-- übrigen RPC-Tabellen dieses Projekts.
--
-- RLS ist aktiv und die Tabelle hat keine Policy, der Zugriff wäre also
-- ohnehin abgewiesen worden. Aber ein Recht, das nur deshalb wirkungslos
-- ist, weil eine zweite Schranke hält, ist eine Falle für den, der später
-- eine Policy ergänzt.
--
-- WIE ES AUFGEFALLEN IST. Nicht durch Nachdenken, sondern durch den
-- Abgleich der Rechte-Fingerabdrücke zwischen Prüfumgebung (1573) und
-- Produktion (1581) nach dem Ausrollen. Die Prüfumgebung kennt die
-- Standardrechte von Supabase nicht und hat deshalb genau die acht
-- Rechte nicht vergeben, die die Produktion still hinzugefügt hat. Genau
-- dafür wird verglichen — die Migration allein sah in beiden Umgebungen
-- gleich aus.
-- ===========================================================================

revoke all on public.advertising_redirect_actors from anon, authenticated;

do $$
declare v_rechte text;
begin
  select string_agg(grantee||':'||privilege_type, ', ') into v_rechte
  from information_schema.table_privileges
  where table_schema='public' and table_name='advertising_redirect_actors'
    and grantee in ('anon','authenticated');
  if v_rechte is not null then
    raise exception 'Rechte bestehen weiter: %', v_rechte;
  end if;
  raise notice 'Nachtrag S-12: advertising_redirect_actors ist nur noch über die RPC erreichbar.';
end $$;
