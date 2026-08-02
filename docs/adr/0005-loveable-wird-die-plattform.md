# ADR 0005 — Loveable wird die Plattform, Flutter wird abgelöst

Datum: 02.08.2026 · Status: **angenommen** · Ersetzt die Plattform-Festlegung
aus ADR 0004 und den Gesamtplan vom selben Tag

## Ausgangslage

Bis heute galt: Loveable baut das öffentliche Kunden-Web, die Flutter-App
bleibt die native App **und** behält den gesamten internen Bereich. Daraus
folgten zwei Oberflächen mit unterschiedlichem Zweck und zwei Links — eine
vollständige, produktive App und eine unfertige zweite.

Der Betrieb hat das anders entschieden.

## Entscheidung

1. **Loveable wird die Plattform.** Kunden- *und* interner Bereich entstehen
   dort. Die Flutter-App wird abgelöst.
2. **Zwei getrennte Oberflächen**, nicht eine mit Rollenweiche:
   * Kunden-App (öffentlich, Registrierung offen)
   * Interne App (Gesellschafter, Mitarbeitende)
3. **Web zuerst, native Verpackung später.** Die fertige Kunden-App wird am
   Ende als native App verpackt (Capacitor o. ä.), damit der
   App-Store-Auftritt erhalten bleibt. Der vorhandene Listing-Entwurf
   (`docs/store-assets/store-listing.md`) bleibt gültig.
4. **Das Backend bleibt, wo es ist.** Supabase — Schema, RLS, RPCs, Edge
   Functions, Migrationen — wird weiter hier gepflegt. Es war nie doppelt;
   beide Oberflächen sprechen dieselbe Instanz an.

## Warum die Trennung in zwei Oberflächen die richtige ist

Sie war nicht die naheliegende Antwort auf „nur eine App", ist aber die
bessere:

* **Kunden bekommen keinen internen Code ausgeliefert.** Bei einer
  gemeinsamen Oberfläche landet der Verwaltungsteil im selben JavaScript-
  Bündel wie der Kundenteil — auch wenn die Rolle ihn nie anzeigt. Wer das
  Bündel liest, kennt Aufbau, Feldnamen und Abläufe der Verwaltung.
* **Ein Fehler im Kundenbereich kann die Verwaltung nicht mitreißen.** Das
  ist bei HACCP-Protokollen und DATEV-Export kein theoretischer Vorteil.
* Die Datenbank trägt beides ohne Änderung: RLS hängt an Rolle und
  `auth.uid()`, nicht am Client (geprüft in ADR 0004).

## Was das kostet — ehrlich beziffert

Die Flutter-App umfasst **39.342 Zeilen in 166 Dateien**:

| Bereich | Screens | Zeilen |
|---|---:|---:|
| Kundenbereich | 24 | 13.395 |
| Verwaltung + Finanzen | 24 | 8.066 |
| Rest (Kern, Widgets, Datenzugriff, Rechtliches) | — | 17.881 |

Der interne Teil ist der schwerere: DATEV-Export, sevDesk-Abgleich,
HACCP-Protokolle, FIFO-Inventur, Unterschriftenverwaltung mit DocuSign,
Vier-Augen-Freigaben, Telemetrie. Das sind viele Sitzungen und viele
Loveable-Credits.

## Reihenfolge

1. **Kundenbereich fertigstellen** (A2a, A2b, A3 — Texte liegen in
   `LOVEABLE_ANWEISUNGEN.md`). Er ist am weitesten und liefert den
   sichtbarsten Fortschritt.
2. **Interne App aufsetzen** als eigenes Loveable-Projekt, Bereich für
   Bereich portiert. Beginnend mit dem, was täglich gebraucht wird
   (Inventur, Prozessprotokolle), zuletzt das Seltene (Jahresabschluss).
3. **Native Verpackung**, wenn der Kundenbereich funktional vollständig ist.
4. **Flutter abschalten** — erst danach.

## Risiken und was dagegen hilft

| Risiko | Umgang |
|---|---|
| Flutter wird zu früh abgeschaltet | Sie bleibt in Betrieb, bis der Ersatz *nachweislich* vollständig ist. Sie ist heute das einzige funktionierende Produkt. |
| Funktionen gehen beim Portieren still verloren | `INTERNAL_PARITY.md` und `LOVEABLE_PARITY.md` als Abgleichliste mitführen, Bereich für Bereich abhaken. |
| Native Fähigkeiten fehlen im Web | Vor der Verpackung prüfen: Unterschriftenerfassung (Zeichnen auf dem Bildschirm), Push (`customers.notify_push`), Kamera. Für keine davon ist heute ein Blocker bekannt, geprüft ist es aber nicht. |
| Zwei Baustellen gleichzeitig | Nacheinander, nicht parallel. Erst Kunde, dann intern. |

## Was sich dadurch **nicht** ändert

Alles, was hier am Backend entstanden ist, bleibt gültig und wird von beiden
Oberflächen genutzt: das E-Mail-Modul mit Resend, der Send-Email-Hook, die
Härtungen aus 0075–0079, die Kündigungsstrecke nach § 312k BGB, die
Geburtsdatum-Sperre, der Referral-Schutz.
