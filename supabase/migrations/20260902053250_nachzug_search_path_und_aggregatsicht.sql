-- ===========================================================================
-- Nachzug zu den Korrekturen vom 02.09.2026.
--
-- Zwei Meldungen, die der Supabase-Advisor **nach** dem Ausrollen neu
-- zeigte — beide aus den eigenen Änderungen entstanden. Eine Korrektur,
-- die neue Befunde erzeugt, ist erst fertig, wenn auch die weg sind.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- 1) `app.klick_obergrenze_je_konto()` hatte keinen festen `search_path`.
--
-- Die Funktion ist eine Konstante und löst kein einziges Objekt auf, das
-- Risiko ist also gering. Aber R-19 hat genau diese Klasse im August
-- bereinigt; eine neue Funktion darf sie nicht wieder aufmachen. Leerer
-- `search_path`, weil hier nichts aufzulösen ist.
-- ---------------------------------------------------------------------------

create or replace function app.klick_obergrenze_je_konto()
returns integer
language sql
immutable
set search_path = ''
as $$ select 3 $$;

comment on function app.klick_obergrenze_je_konto() is
  'Wie viele Klicks eines Kontos je Kampagne und Tag in den berichteten '
  'Zähler eingehen. Bewusst niedrig: mehr als drei Klicks derselben '
  'Person auf dieselbe Anzeige am selben Tag sind kein Interesse mehr.';

-- ---------------------------------------------------------------------------
-- 2) `product_rating_summary` läuft seit S-4 mit Eigentümerrechten.
--
-- Der Advisor meldet das als ERROR, und im Regelfall zu Recht: eine Sicht
-- mit Eigentümerrechten umgeht RLS.
--
-- WARUM DIE ABWEICHUNG HIER BLEIBT. Die Sicht gibt ausschließlich
-- `product_id`, Durchschnitt und Anzahl heraus — kein personenbezogenes
-- Feld, keine Konto-ID, keine Einzelbewertung. Genau deshalb *darf* sie
-- über alle Zeilen rechnen. Liefe sie mit Aufruferrechten, sähe jeder
-- Kunde seine eigene Bewertung als „Durchschnitt": eine falsche Zahl auf
-- der Produktseite, ohne Fehlermeldung. Das wiegt schwerer als die
-- Warnung, und die Warnung wird deshalb bewusst getragen — dokumentiert
-- in `docs/SECURITY.md`, nicht stillschweigend.
--
-- Was hier trotzdem fällt: die Schreibrechte, die Supabase einer Sicht
-- automatisch mitgibt. Auf einer Sicht mit Eigentümerrechten wären sie
-- der gefährliche Teil — ein Schreibversuch liefe mit den Rechten des
-- Eigentümers. Dass die Sicht wegen `group by` ohnehin nicht beschreibbar
-- ist, ist ein Zufall ihrer Definition und kein Schutz.
-- ---------------------------------------------------------------------------

revoke insert, update, delete, truncate, references, trigger
  on public.product_rating_summary from anon, authenticated;

do $$
declare v_rechte text;
begin
  select string_agg(distinct privilege_type, ', ') into v_rechte
  from information_schema.table_privileges
  where table_schema='public' and table_name='product_rating_summary'
    and grantee in ('anon','authenticated') and privilege_type <> 'SELECT';
  if v_rechte is not null then
    raise exception 'Auf der Aggregatsicht bestehen weiter Schreibrechte: %', v_rechte;
  end if;
  if not has_table_privilege('authenticated','public.product_rating_summary','SELECT') then
    raise exception 'Zu viel entzogen: die Aggregatsicht ist nicht mehr lesbar';
  end if;
  raise notice 'Nachzug: Aggregatsicht nur noch lesbar, search_path fixiert.';
end $$;
