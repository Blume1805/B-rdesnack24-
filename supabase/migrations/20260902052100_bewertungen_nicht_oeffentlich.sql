-- ===========================================================================
-- S-4: Wer was bewertet hat, ist nicht länger für jeden Angemeldeten
--      lesbar.
--
-- Befund vom 02.09.2026: `ratings_read` stand auf `using (true)`. Als
-- Kunde A gelesen: „<uid von Kunde B> bewertete <Produkt> mit 4". Die
-- Verbindung aus Konto-ID und Produktvorliebe ist ein personenbezogenes
-- Datum, auch wenn nur eine Zahl daran hängt.
--
-- Öffentlich bleiben soll der Durchschnitt — den braucht die Produktseite.
-- Dafür gibt es `product_rating_summary` bereits. Die Sicht stand aber auf
-- `security_invoker = true`, lief also mit den Rechten des Aufrufers:
-- Hätte man nur die Tabelle geschlossen, wäre die Sicht still
-- mitgeschlossen worden und jeder Kunde hätte als „Durchschnitt" seine
-- eigene Bewertung gesehen — eine falsche Zahl ohne Fehlermeldung. Genau
-- das ist die Art von Schaden, die eine Sicherheitskorrektur anrichtet,
-- wenn man ihre Verbraucher nicht sucht.
--
-- Deshalb beides in einem Zug: Rohdaten zu, Aggregat auf die Rechte des
-- Eigentümers umgestellt.
-- ===========================================================================

drop policy if exists "ratings_read" on public.product_ratings;
create policy "ratings_read"
  on public.product_ratings for select
  to authenticated
  using (
    customer_id = (select auth.uid())
    or public.is_internal()
  );

-- Das Aggregat läuft ab jetzt mit den Rechten des Eigentümers und sieht
-- damit alle Bewertungen — aber es gibt ausschließlich Produkt-ID,
-- Durchschnitt und Anzahl heraus, keine Konto-ID.
alter view public.product_rating_summary set (security_invoker = false);

comment on view public.product_rating_summary is
  'Öffentliches Aggregat je Produkt (Durchschnitt, Anzahl). Läuft bewusst '
  'mit Eigentümerrechten, weil die Rohtabelle seit S-4 (02.09.2026) nur '
  'noch die eigenen Bewertungen zeigt. Gibt keine Konto-ID heraus.';

comment on table public.product_ratings is
  'Einzelbewertungen. Lesen nur für die eigene Zeile oder intern '
  '(S-4, 02.09.2026). Durchschnitt und Anzahl kommen aus '
  'product_rating_summary bzw. product_detail.';

do $$
declare v_avg numeric; v_cnt int;
begin
  -- Gegenprobe: das Aggregat muss weiterhin über ALLE Bewertungen rechnen.
  select count(*) into v_cnt from public.product_rating_summary;
  raise notice 'S-4: Aggregat liefert % Produktzeilen (mit Eigentuemerrechten).', v_cnt;
end $$;
