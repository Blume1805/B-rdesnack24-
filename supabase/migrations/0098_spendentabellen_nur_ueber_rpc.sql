-- ============================================================================
-- 0098 · Die Spendentabellen hinter die RPCs legen
-- ----------------------------------------------------------------------------
-- 0097 hat `donation_causes_list()` so eingestellt, dass fremde Vorschläge
-- nicht mehr herauskommen. Das war nötig, aber es war nur die halbe Miete:
-- die RPC ist eine Tür, die Tabelle daneben stand offen.
--
-- Der Befund aus `pg_policy` (Stand vor dieser Migration):
--
--   dc_read    select  authenticated  using (deleted_at is null)
--   dc_insert  insert  authenticated  with check (suggested_by = auth.uid())
--   dv_read    select  authenticated  using (true)
--   dv_write   all     authenticated  using/check (customer_id = auth.uid())
--
-- Was damit möglich war — nicht theoretisch, sondern mit einem einzigen
-- HTTP-Aufruf gegen PostgREST, mit dem Schlüssel, der ohnehin im Browser
-- liegt:
--
-- 1. `GET /rest/v1/donation_causes?select=*` liefert JEDE Spalte JEDER
--    nicht gelöschten Zeile. Also auch `street`, `zip`, `contact_email`,
--    `tax_number`, `tax_office`, `registration_ref` — die Stammdaten, die
--    0088 angelegt hat. In 0088 steht ausdrücklich, `donation_causes_list()`
--    sei „die Sicht", die entscheidet, was öffentlich ist. Die Tabelle war
--    nie darauf eingestellt. Die Steuernummer und das Finanzamt eines
--    Vereins gehören nicht in eine Antwort, die jede angemeldete Person
--    abrufen kann.
--
-- 2. `POST /rest/v1/donation_causes` mit `suggested_by = eigene id` war
--    erlaubt, und die Policy sagt NICHTS über `status`. Wer also
--    `status = 'active'` und `receipt_eligible = true` mitschickt, hängt
--    eine frei erfundene Organisation samt Rechtsname und Steuernummer
--    direkt in die Liste, die allen Kund*innen angezeigt wird — an
--    `suggest_donation_cause` vorbei, also auch an der Titelprüfung und
--    an der Obergrenze aus 0097 vorbei. Das ist der eigentliche Fund.
--
-- 3. `GET /rest/v1/donation_votes?select=*` gab die komplette
--    Abstimmungsliste heraus: welche `customer_id` für welchen Zweck
--    gestimmt hat. Wofür jemand spendet, ist eine Aussage über die
--    Person. Dass jede andere Kundin das auslesen konnte, hat keine
--    Grundlage (Art. 5 Abs. 1 lit. c DSGVO, Datenminimierung). Die App
--    braucht es auch nicht: sie zeigt nur die Summe und die eigene Stimme,
--    und beides liefert die RPC.
--
-- ----------------------------------------------------------------------------
-- Warum abriegeln und nicht feiner schneiden
--
-- RLS wirkt auf Zeilen, nicht auf Spalten. Selbst mit einer korrekten
-- Zeilenregel könnte man von einem freigegebenen Zweck weiterhin
-- `tax_number` mitlesen. Man könnte einzelne Spaltenrechte entziehen —
-- aber dann muss jede neue Spalte daran denken, und die vergisst man.
--
-- Deshalb der einfache Schnitt: Es gibt keinen Client, der diese beiden
-- Tabellen direkt anfasst. Geprüft am 04.08.2026 über den gesamten Baum —
-- Flutter greift ausschliesslich über `rpc('donation_causes_list')` zu
-- (`customer_remote_data_source.dart:141`), das Web über `src/lib/donations.ts`,
-- und in `supabase/functions/` kommt „donation" gar nicht vor. Also werden
-- die Tabellenrechte entzogen, und der Zugang läuft über die RPCs, die
-- SECURITY DEFINER sind und deshalb weiterhin funktionieren.
--
-- Die Policies werden trotzdem mit verschärft, nicht gelöscht. Wenn jemand
-- später ein `grant select` setzt, weil er schnell etwas braucht, soll die
-- zweite Absicherung noch stehen. Eine Sicherung, die man beim Entfernen
-- der ersten mitverliert, ist keine.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Tabellenrechte entziehen — der Zugang läuft über die RPCs
-- ----------------------------------------------------------------------------
revoke all on public.donation_causes from anon, authenticated;
revoke all on public.donation_votes  from anon, authenticated;

-- ----------------------------------------------------------------------------
-- 2) Policies trotzdem verschärfen (zweite Absicherung)
-- ----------------------------------------------------------------------------

-- Lesen: freigegebene Zwecke, der eigene Vorschlag, sonst intern.
-- Gleiche Regel wie in `donation_causes_list()` aus 0097.
drop policy if exists dc_read on public.donation_causes;
create policy dc_read on public.donation_causes
  for select to authenticated
  using (
    deleted_at is null
    and (
      status = 'active'
      or (status = 'suggested' and suggested_by = (select auth.uid()))
      or public.is_internal((select auth.uid()))
    )
  );

-- Einfügen: nur noch intern. Kundenvorschläge gehen über
-- `suggest_donation_cause` — die Funktion ist SECURITY DEFINER und
-- braucht diese Policy nicht. Damit greifen Titelprüfung und Obergrenze
-- aus 0097 wieder für jeden Weg, den ein Client gehen kann.
drop policy if exists dc_insert on public.donation_causes;
create policy dc_insert on public.donation_causes
  for insert to authenticated
  with check (public.is_internal((select auth.uid())));

-- Stimmen: nur die eigenen. Die Gesamtzahl je Zweck kommt als
-- `vote_count` aus der RPC, dafür muss niemand fremde Zeilen sehen.
drop policy if exists dv_read on public.donation_votes;
create policy dv_read on public.donation_votes
  for select to authenticated
  using (customer_id = (select auth.uid()));

-- `dv_write` bleibt inhaltlich wie gehabt (nur eigene Zeilen), ist aber
-- durch den Rechteentzug oben ohnehin nicht mehr direkt erreichbar.

-- ----------------------------------------------------------------------------
-- 3) Die RPCs behalten ihr Ausführungsrecht
-- ----------------------------------------------------------------------------
grant execute on function public.donation_causes_list()            to authenticated;
grant execute on function public.vote_donation_cause(uuid)         to authenticated;
grant execute on function public.suggest_donation_cause(text,text) to authenticated;

revoke all on function public.donation_causes_list()            from public, anon;
revoke all on function public.vote_donation_cause(uuid)         from public, anon;
revoke all on function public.suggest_donation_cause(text,text) from public, anon;

comment on table public.donation_causes is
  'Nur über die RPCs erreichbar (0098). Direkte Tabellenrechte sind anon '
  'und authenticated entzogen, weil sonst Stammdaten wie tax_number und '
  'contact_email mitlesbar wären und status frei setzbar war.';
comment on table public.donation_votes is
  'Nur über die RPCs erreichbar (0098). Wer für welchen Zweck gestimmt '
  'hat, ist eine Aussage über die Person und geht andere Kund*innen '
  'nichts an.';
