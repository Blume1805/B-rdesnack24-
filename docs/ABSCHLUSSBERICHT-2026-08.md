# Abschlussbericht — Auftrag „Loveable-Hauptversion, Mailsystem, Compliance"

Stand: 02.08.2026 · Branch `claude/bordesnack24-platform-setup-qtqvho`

Dieser Bericht schließt Phase 7 des Auftrags ab. Er hält fest, was gebaut
wurde, was bewusst anders gelöst wurde als beauftragt, was offen ist und
warum — und welche Risiken bleiben.

## 1 · Was umgesetzt wurde

### E-Mail-System (Resend)

Vorher hatte jede versendende Edge Function ihr HTML als eigene Kopie.
`subscription-cancel` und `subscription-choose` trugen zwei praktisch
identische `confirmationHtml()`-Funktionen, die bereits auseinandergelaufen
waren, und denselben Resend-Vorspann dreimal.

Neu unter `supabase/functions/_shared/email/`: Theme, zentrale
Konfiguration, Renderer mit Escaping, neun Layout-Bausteine,
Resend-Transport, Signaturprüfung. Templates für Kündigung, Abo-Wechsel,
Löschantrag (Kunde + intern) und alle vierzehn Auth-Ereignisse.

Drei inhaltliche Verbesserungen fielen dabei an:

* **HTML-Injection geschlossen.** Die alte Fassung interpolierte die
  E-Mail-Adresse ungeprüft in den Mailtext, und `EMAIL_RE` lässt spitze
  Klammern durch (weder Leerzeichen noch @) — `a<svg/onload=…>@b.de`
  passiert die Prüfung. Jetzt wird standardmäßig escaped, mit Tests für
  beide Einfallstore.
* **Outlook.** Die Bestandsmails waren div-basiert; Outlook für Windows
  rendert mit der Word-Engine und ignoriert `max-width`, die Karte lief
  dort über die volle Fensterbreite. Jetzt Tabellenlayout.
* **Textfassung, Preheader, 44-px-Buttons, `meta charset`** — letzteres
  löst den Umlaut-Zwiespalt der beiden Bestandsfassungen auf (die eine
  maskierte als Entities, die andere nicht).

Der Wortlaut aller Rechtstexte (§ 312k Abs. 2, § 356 Abs. 5, §§ 106 ff.
BGB) wurde unverändert übernommen und per Abgleich alt/neu geprüft: kein
Satz der bisherigen Mails fehlt.

### Löschantrag — ein gebrochenes Versprechen repariert

Der Antragsdialog im Profil sagte „Antrag gestellt. Wir melden uns per
E-Mail." Der Aufruf ging direkt auf die RPC, und die kann keine Mail
senden. Es kam nie eine. Bei einem Antrag nach Art. 17 DSGVO ist das mehr
als unschön: Art. 12 Abs. 3 verlangt eine Unterrichtung binnen eines
Monats, und ohne Bestätigung hat die betroffene Person keinen Nachweis.

Neu: Edge Function `account-deletion-request` mit Eingangsbestätigung
(Zeitstempel, Fristdatum, Aufbewahrungshinweis im Wortlaut der
Datenschutzerklärung) und interner Notiz — Letztere, weil die Anträge
bisher nur in der Tabelle standen und niemand mitbekam, dass die Frist
läuft.

### Send-Email-Hook

Auf Entscheidung „Weg 2" gebaut: Supabase ruft `auth-email-hook` auf,
statt selbst zu versenden. Signaturprüfung nach Standard Webhooks bewusst
selbst implementiert (Web Crypto) statt der Bibliothek aus dem offiziellen
Beispiel — eine Fremdabhängigkeit im sicherheitskritischen Pfad wäre ein
schlechter Tausch, und so ist sie testbar.

Beim Lesen der Doku kam ein Fund dazu: Der Hook liefert auch
`password_changed_notification`, `email_changed_notification` und die
MFA-/Identity-Ereignisse — genau die Mails, die zuvor als „kein Auslöser
vorhanden" eingestuft waren. Sieben Sicherheitsbenachrichtigungen mehr,
jede mit dem Weg zum Support.

**Die Function ist deployed, aber inert.** Ohne Secret antwortet sie 500
und tut nichts. Aktivierung siehe Abschnitt 4.

### Datenbank-Härtung (Migration 0075)

Vier `SECURITY DEFINER`-RPCs waren für `anon` ausführbar. Kein Datenleck —
drei brechen ohne `auth.uid()` selbst ab —, aber `my_receipts()` verließ
sich allein auf SQL-NULL-Semantik: unbeabsichtigt richtig, und beim
nächsten Umbau des Filters weg.

Dabei über eine Falle gestolpert, die auch das bestehende Muster im Repo
betrifft: `revoke execute … from anon` **wirkt nicht**. Postgres grantet
`EXECUTE` automatisch an `PUBLIC`, worüber `anon` weitererbt. Der erste
Migrationslauf ging fehlerfrei durch und bewirkte nichts — aufgefallen nur,
weil danach nachgemessen wurde. Der Entzug muss gegen `PUBLIC` gehen.

Advisor: **90 → 85 WARN, 0 ERROR.**

`pg_net` bleibt bewusst im `public`-Schema, entgegen der
Advisor-Empfehlung: Alle 15 Objekte der Extension liegen in `net`, in
`public` steht nichts. Dagegen hängt der Cron-Job `weather-sync` an
`net.http_post`. Ein Produktionsjob gegen eine kosmetische Meldung zu
tauschen wäre der falsche Handel.

### Barrierefreiheit

Statt weiter von Hand `semanticLabel` zu verteilen — was bei
Fortschrittsbalken mit danebenstehendem Text zu **doppelter** Ansage
geführt hätte — laufen jetzt Flutters eigene Prüfregeln über die echten
Widgets.

Genau ein Befund, dafür ein handfester: `StatusBadge` nutzte die vollen
Statusfarben als Beschriftung. Auf dem hellen Chip: grün 2,94:1, gelb
**1,90:1**, blau 4,47:1. „Achtung" auf gelbem Chip war praktisch
unlesbar. Gelöst mit abgedunkelten Textvarianten bei rund 4,75:1.

Nebenbei: `google_fonts` versuchte in jedem Widget-Test, Schriften über
das Netz zu laden — der echte Befund verschwand im Rauschen. Der Schalter
liegt jetzt in `test/flutter_test_config.dart` und gilt für alle Tests.

### Marke und Header

Rechteck-Artefakt im Marken-Motiv entfernt (Folge einer früheren Retusche
mit linearer Interpolation über eine Bildstruktur; jetzt per Inpainting),
Slogan-Zeile lesbar gemacht, Marke im Kunden-Header rund 50 % größer über
ein eigenes Header-Asset, Abmelden-Symbol ergänzt. Dabei ein Altfehler
gefunden: „Guten Morgen," war zu breit für die linke Spalte und wurde
abgeschnitten — Slogan und Anrede skalieren jetzt herunter statt zu kürzen.

## 2 · Wo bewusst vom Auftrag abgewichen wurde

| Auftrag | Umsetzung | Grund |
|---|---|---|
| ~25 Mail-Templates | 4 Vorgangs- + 14 Auth-Templates | Für Premium-, Support- und Marketingmails existiert kein Auslöser (kein Payment-Webhook, kein Ticketsystem, kein Opt-out-Kennzeichen). Templates ohne Auslöser sind toter Code. Vollständige Aufstellung in `EMAIL_TEMPLATES.md`. |
| Vergleichsmatrix als Dokument | lebende Kurzlisten | Eine Momentaufnahme veraltet nach wenigen Schritten. Stattdessen `LOVEABLE_PARITY.md` und `INTERNAL_PARITY.md`, die mitgepflegt werden. |
| Interne App für Gesellschafter/Mitarbeiter | Abgleich statt Neubau | Acht von neun geforderten Bereichen sind produktiv vorhanden, teils deutlich umfangreicher als die Stichworte. |
| „semanticLabel-Abdeckung erhöhen" | automatisierte Prüfregeln | Blindes Nachrüsten hätte Screenreader doppelt vorlesen lassen. |
| Rechtsdokumente (DSFA, VVT, AV-Verträge) | nicht angefasst | Auf deine Entscheidung: nur technische Mechanismen. |

## 3 · Offen, weil es an einer Entscheidung hängt

**Internes Kommunikationsmodul.** Einzige echte Lücke im internen
Bereich. Empfehlung steht in `INTERNAL_PARITY.md`: Bei einem Betrieb
dieser Größe wäre ein Chat vermutlich der falsche Zuschnitt — er erzeugt
einen weiteren Posteingang. Das eigentliche Problem ist, dass
vorgangsbezogene Notizen über fünf Screens verstreut sind.

**Automaten-Stammdaten.** In der Datenbank stehen „Standort 1
(ANPASSEN)" bis „Standort 3 (ANPASSEN)". Die Loveable-App zeigt derzeit
erfundene, aber plausibel klingende Namen. Solange die echten Standorte
fehlen, kann die Automatenliste im Web nicht sinnvoll auf echte Daten
umgestellt werden.

**Probemonat, Payment-Anbindung, Supportformular** — jeweils
Voraussetzung für ganze Mail-Kategorien.

## 4 · Was nur im Dashboard erledigt werden kann

1. **Auth-Redirect-URLs** für die Loveable-App eintragen. Achtung: Die
   Domain heißt `lovable.app`, nicht `loveable.app`. Site URL dabei
   **nicht** ändern — sie zeigt auf die produktive Flutter-Web-App.
   Kein Wildcard über alle Subdomains (offenes Weiterleitungsziel für
   Anmeldedaten).
2. **Leaked Password Protection** einschalten — letzter offener
   Advisor-Punkt.
3. **Send-Email-Hook aktivieren.** Reihenfolge und Rückweg in
   `EMAIL_TEMPLATES.md`. Vorher prüfen, ob `noreply@boerdesnack24.de` in
   Resend verifiziert ist — sonst schlägt die Registrierung fehl.

## 5 · Technische Risiken

| Risiko | Einschätzung |
|---|---|
| Send-Email-Hook im kritischen Pfad | Ein Fehler blockiert Registrierung und Passwort-Reset. Deshalb inert ausgeliefert, Fehlerverhalten bewusst asymmetrisch (unbekannter Typ → durchwinken), Rückweg per Dashboard-Schalter in Sekunden. |
| Edge-Function-Tests nur über Node-Shim geprüft | Deno ließ sich hier nicht installieren (deno.land von der Netzwerk-Policy blockiert). Reine String-Verarbeitung auf identischer V8-Semantik; zusätzlich `tsc --strict` und Boot-Prüfung der deployten Functions über `pg_net`. In CI laufen sie unter echtem Deno. |
| CI-Gate für Edge Functions zahnlos | `deno lint`/`deno test` laufen dort mit `\|\| true` — Fehlschläge brechen den Build nicht. Nicht angefasst, weil hier nicht verifizierbar. Empfehlung: nach einem grünen CI-Lauf entfernen. |
| Zwei Clients auf einer Datenbank | Geprüft und unkritisch (ADR 0004): Policies hängen an Rolle und `auth.uid()`, nicht am Client; Geburtsdatum-Sperre und Referral-Schutz sind DB-seitig. |

## 6 · Prüfstand

* `flutter analyze` (lib + test): keine Befunde
* `flutter test`: **164 grün** (zu Beginn 154)
* E-Mail-Modul: **18 Tests**, Webhook/Auth-Templates: **16 Tests**
* Supabase-Advisor: 85 WARN, **0 ERROR**
* Alle deployten Functions per `pg_net` auf Boot geprüft

## 7 · Empfohlene nächste Schritte

1. Automaten-Stammdaten eintragen — blockiert einen ganzen Web-Baustein.
2. Redirect-URLs setzen, dann A1 in Loveable (Anweisung liegt fertig vor).
3. Send-Email-Hook aktivieren, mit Wegwerf-Konto gegentesten.
4. Entscheiden, ob das Kommunikationsmodul kommt — und falls ja, als
   Notizen am Objekt statt als Chat.
