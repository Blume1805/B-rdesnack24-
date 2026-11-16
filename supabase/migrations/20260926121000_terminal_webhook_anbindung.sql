-- ============================================================================
-- Terminal-Webhook an die Datenbank anschließen (Befunde B-4 und B-5)
--
-- NUR Produktionslinie (Migrationsverzeichnis mit Zeitstempel-Namen).
-- Voraussetzung: 20260914090000_automat_bezahlung_und_dynamische_preise.sql.
-- Backend-Prüfung 26.09.2026, docs/audit/AUDIT-2026-09-BACKEND.md.
--
-- `supabase/functions/terminal-webhook/index.ts` verbucht einen app-geführten
-- Automatenkauf in zwei Schritten. Beide scheiterten an der Datenbank, und
-- keiner der beiden Fehler war in einem Test sichtbar, weil die Function nie
-- gegen die Datenbank gelaufen ist:
--
-- B-5  `admin.rpc("vend_freigabe_einloesen", …)` sucht die Funktion im
--      Schema `public`. Sie liegt aber in `app`, und `app` ist über die
--      Schnittstelle bewusst nicht erreichbar. Folge: Fehler 42883, `data`
--      ist leer, JEDER Freigabecode gilt als ungültig, jeder app-geführte
--      Kauf wird als anonymer Kauf verbucht — ohne Kundenzuordnung, ohne
--      Treuepunkte, ohne Spendenanteil in der App.
--      Prüfskript 105 rief `app.vend_freigabe_einloesen` direkt als
--      Datenbank-Eigentümer auf und hat deshalb nicht den Weg des Webhooks
--      geprüft.
--
-- B-4  Der Kauf wird mit `source = 'machine'` angelegt. Der Enum
--      `app.purchase_source` kennt nur nayax, manual, import und demo.
--      Folge: Fehler 22P02 — und zwar NACHDEM der Freigabecode schon
--      eingelöst ist. Der Code wäre verbraucht, der Kauf fehlte.
--
-- Korrektur: ein schmaler Durchgang in `public`, ausführbar ausschließlich
-- mit dem Dienstschlüssel, und der fehlende Enum-Wert. Beides additiv.
--
-- Offen und NICHT Teil dieser Migration (Empfehlung im Prüfbericht):
-- Einlösen und Verbuchen gehören in EINE Transaktion. Solange der Webhook
-- beides nacheinander über die Schnittstelle tut, bleibt bei einem Fehler
-- im zweiten Schritt ein eingelöster Code ohne Kauf zurück. Er ist über
-- `terminal_ereignisse_offen()` sichtbar und nachträglich verbuchbar.
-- ============================================================================

alter type app.purchase_source add value if not exists 'machine';

create or replace function public.vend_freigabe_einloesen(
  p_code            text,
  p_machine         uuid,
  p_ereignis_lfd_nr bigint default null
)
returns table (
  freigabe_id   uuid,
  customer_id   uuid,
  product_id    uuid,
  betrag_brutto numeric
)
language sql
security definer
set search_path = public, app, extensions
as $$
  select * from app.vend_freigabe_einloesen(p_code, p_machine, p_ereignis_lfd_nr);
$$;

comment on function public.vend_freigabe_einloesen(text, uuid, bigint) is
  'Durchgang für die Edge Function terminal-webhook zu '
  'app.vend_freigabe_einloesen. Nur Dienstschlüssel.';

-- Supabase gibt neuen Funktionen in `public` automatisch anon und
-- authenticated. Ein Kunde, der Codes einlösen könnte, könnte Käufe auf
-- sich umbuchen — deshalb ausdrücklich nur service_role.
revoke all on function public.vend_freigabe_einloesen(text, uuid, bigint)
  from public, anon, authenticated;
grant execute on function public.vend_freigabe_einloesen(text, uuid, bigint)
  to service_role;
