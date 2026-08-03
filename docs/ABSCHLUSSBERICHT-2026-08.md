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

### Datenbank-Härtung, zweiter Durchgang (Migration 0076)

Der Advisor-Lauf nach 0075 meldete 83 Treffer einer zweiten Regel:
`SECURITY DEFINER`-Funktionen, die **jedes angemeldete Konto** aufrufen
kann. Angemeldet heißt hier: Kundenkonto — die Registrierung steht offen,
die Rolle `authenticated` sagt nichts über Zugehörigkeit zum Betrieb.

Alle 83 wurden einzeln durchgesehen. Die Mehrheit ist unkritisch: Die
Finanz- und Verwaltungsfunktionen prüfen die Rolle im Rumpf
(`profiles.role in ('system_admin','shareholder')`, dann
`raise exception`). Sie sind aufrufbar, geben aber nichts heraus. Der
Advisor sieht das nicht — er prüft die Rechtevergabe, nicht den Code.

Drei echte Befunde blieben übrig:

* **`list_partner_signatures()` hebelte die eigene Policy aus.** Die
  Tabelle `partner_signatures` hat eine enge Policy (nur system_admin,
  shareholder, employee). Die Funktion ist aber nichts als ein
  `select *` darauf — als `SECURITY DEFINER`. Damit lief sie mit
  Eigentümerrechten, die Policy griff nicht, und jedes Kundenkonto
  konnte Namen **und Unterschriftsbilder** der Partner auslesen.
  Unterschriftsbilder sind nicht bloß personenbezogene Daten, sie sind
  unmittelbar missbrauchbar. Dasselbe Muster, harmloser, bei
  `list_document_folders()`. Beide laufen jetzt als `SECURITY INVOKER` —
  die vorhandene Policy greift wieder.
* **`generate_personal_offer(p_customer_id)` vertraute dem Parameter.**
  Die App schickt die eigene Kunden-ID; ein direkter Aufruf gegen die
  REST-API konnte jede beliebige schicken. Die Antwort enthielt dann das
  offene Angebot des fremden Kontos samt Einlösecode — oder erzeugte
  eines aus dessen Kaufhistorie der letzten 90 Tage, mit dem
  Produktnamen als Titel. Der Code selbst war nicht verwertbar
  (`redeem_personal_offer` löst nur ein, was `customer_id = auth.uid()`
  erfüllt), das Kaufverhalten aber schon. Jetzt mit Prüfung gegen
  `auth.uid()`, interne Rollen ausgenommen.
* **Sieben Server-Funktionen ohne Aufrufer im Client** standen jedem
  offen. Am unangenehmsten `next_invoice_number()`: Ein Aufruf in der
  Schleife verbrennt Rechnungsnummern und reißt Lücken in eine
  Nummernfolge, die nach § 14 Abs. 4 Nr. 4 UStG fortlaufend sein muss —
  vergebene Nummern kommen nicht zurück. Dazu `generate_weekly_offers`,
  das mit einem `delete` auf die Angebote der Folgewoche beginnt. Rechte
  auf `service_role` beschränkt; die Cron-Jobs laufen als `postgres` und
  sind nicht betroffen.

Gegengeprüft statt geglaubt: Als Kundenkonto liefern beide Listen jetzt
0 Zeilen, als `system_admin` und als `shareholder` unverändert 2
Signaturen und 11 Ordner. Der Fremdzugriff auf
`generate_personal_offer` wird mit 42501 abgewiesen, der eigene läuft
durch.

Advisor: **85 → 76 WARN, 0 ERROR.**

### Demo-Käufe flossen in die Buchhaltung (Migrationen 0077/0078)

Beim vollständigen Durchgang durch die verbliebenen 74 Funktionen fiel
`dev_add_demo_purchase()` auf. Der Name klingt nach vergessenem
Entwicklerwerkzeug, ist aber ein sichtbares Feature: im Belege-Screen
steht ein Kasten „Demo-Testkauf" mit vier Zahlungsart-Chips, ohne
Beschränkung für jedes Kundenkonto — gedacht für die Zeit, bis der
Nayax-Webhook echte Käufe liefert.

Geschrieben wurde `source = 'manual'`. Das ist derselbe Wert, den
`purchases.source` als Standard trägt — simulierte und echte Käufe waren
also nicht unterscheidbar. Und `datev_export_rows`, `finance_kpis` und
`finance_summary` lesen die Käufe ohne jeden Filter auf die Herkunft.
Zusammengenommen: Ein Knopfdruck im Kundenkonto erzeugte Zeilen, die im
DATEV-Export und in der BWA landeten.

Ohne Dramatik eingeordnet: Es gibt noch keinen echten Zahlungsweg, alle
acht Käufe in der Datenbank stammen aus diesem Knopf. Das ist also kein
laufender Schaden, sondern ein Punkt, der vor dem Start dicht sein muss —
sobald echte und simulierte Umsätze nebeneinanderliegen, lässt sich beides
nachträglich nicht mehr trennen.

Der Knopf bleibt, er wird nur kenntlich: neue Herkunft `'demo'`,
ausgeschlossen in den drei buchhaltungsrelevanten Funktionen.
Unverändert bleiben Belege, Treuestatus, Gamification und der
DSGVO-Datenexport — dort erfüllt der Demo-Kauf gerade seinen Zweck, und
in eine Auskunft nach Art. 15 gehört ohnehin alles, was zur Person
gespeichert ist.

Gegengeprüft in einer zurückgerollten Transaktion: Ein Demo-Kauf über
99 € erscheint im eigenen Beleg, lässt DATEV-Export und
`revenue_net`/`vat_collected` aber unverändert bei 0. Ein *echter* Kauf
über dieselben 99 € ergibt 92,52 € netto und 6,48 € Umsatzsteuer — der
Filter wirkt also gezielt und sperrt nicht pauschal alles aus.

Die drei Finanzfunktionen wurden nicht abgetippt, sondern über
`pg_get_functiondef` gelesen, gezielt ergänzt und zurückgeschrieben; die
Migration zählt vorher die Fundstellen und bricht ab, statt still das
Falsche zu tun.

`pg_net` bleibt bewusst im `public`-Schema, entgegen der
Advisor-Empfehlung: Alle 15 Objekte der Extension liegen in `net`, in
`public` steht nichts. Dagegen hängt der Cron-Job `weather-sync` an
`net.http_post`. Ein Produktionsjob gegen eine kosmetische Meldung zu
tauschen wäre der falsche Handel.

### Rechteausweitung durch Selbstregistrierung (Migration 0079)

Der schwerwiegendste Fund des gesamten Auftrags, und er kam beiläufig:
Beim Vorbereiten der fehlenden Privat/Unternehmer-Auswahl in der Web-App
sah ich nach, wie die Registrierung ihre Daten übergibt.

Der Trigger `app.handle_new_user` übernimmt die Rolle aus
`raw_user_meta_data`. Bei einer Selbstregistrierung kommen diese Daten
vollständig vom Browser. Wer sich mit
`data: { role: 'system_admin' }` anmeldete, bekam eine Profilzeile mit
dieser Rolle.

Das ist als Einladungsweg so gewollt — `invite-user` prüft
Berechtigungen und übergibt die Rolle auf demselben Weg. Deshalb setzt
der Trigger für interne Rollen `status = 'invited'`: Die Rolle steht da,
gilt aber erst nach Aktivierung. Nur hat diese zweite Hälfte kaum jemand
ausgewertet. `is_admin()`, `is_internal()` und `app_role()` prüfen den
Status — **23 RLS-Policies auf 15 Tabellen und 5 Funktionen** prüften
allein die Rolle.

Nachgestellt statt vermutet. Ein frisch registriertes Konto erhielt:

* `business_customers_csv()` — die B2B-Kundenliste mit Namen, E-Mail,
  Anschrift, Steuernummer und USt-IdNr.
* `datev_export_rows()` — Buchhaltungsdaten
* `partner_signatures` — zwei Zeilen inklusive der Unterschriftsbilder

Ausnutzbar von jedem mit Internetzugang, ohne Vorwissen.

Beim Beheben kam ein zweiter Fund dazu: `business_customers_csv` und
`list_employees_for_signature` prüften `v_role not in (…)`. Bei NULL
ergibt das weder wahr noch falsch — die Bedingung greift nicht, und der
Aufruf läuft an der Prüfung vorbei. Ohne Profilzeile waren beide offen.
Mit behoben: deaktivierte und gelöschte Konten mit interner Rolle kamen
bis dahin durch dieselben Policies.

Gegengeprüft in beide Richtungen: Der Angriff liefert auf allen acht
getesteten Wegen „abgewiesen" oder 0 Zeilen; Gesellschafter und Admin
sehen unverändert alles.

### Abo-Preise lesbar gemacht (Migration 0080)

Für die Preisdarstellung im Web fehlte eine Quelle: Die Preise standen
ausschließlich als CASE-Block im Schreibpfad. Die naheliegende
Alternative `customer_subscriptions` wäre eine Falle gewesen — dort steht
der **historisch vereinbarte** Preis. Im Bestand liegen noch Zeilen mit
1,00 €/Monat und 10,00 €/Jahr neben dem aktuellen 9,99 €. Eine
Ersparnisrechnung daraus hätte je nach Kunde etwas anderes ergeben.

Jetzt eine schmale Tabelle als einzige Quelle, gelesen von der Web-App
**und** von `choose_subscription_plan`. Ein Preiswechsel ist damit ein
UPDATE an einer Stelle statt einer Änderung an Funktion und Frontends.

### Vergessene Unterschriften-Zwischenablagen (0081/0082)

Beim Belegen, dass die neue Preistabelle nicht direkt erreichbar ist,
fielen zwei Tabellen im `app`-Schema auf, die volle Rechte für `anon`
trugen — bis TRUNCATE, ohne RLS. Eine davon enthielt ein PNG, dem Namen
nach ein Unterschriftsbild.

Kein akutes Loch, und das ist gemessen: PostgREST antwortet auf einen
Zugriff mit `Accept-Profile: app` mit `PGRST106 — Only the following
schemas are exposed: public, graphql_public`. Aber „app" zur Liste
hinzuzufügen ist im Dashboard ein Klick. Rechte entzogen (0081); nach
der Auskunft, dass die fehlende Unterschrift später über DocuSign kommt,
die Tabellen verworfen (0082) — ein Unterschriftsbild ohne Zweck ist
Datenhaltung ohne Rechtsgrundlage.

### Zwei Migrationen fehlten im Repository (0027b/0027c)

Beim Abgleich der angewendeten Migrationen (102) gegen die Dateien (80)
fiel auf, dass `0032` ein `alter table public.partner_signatures` enthält,
ohne dass die Tabelle irgendwo erzeugt wird — und dass
`customer_notification_reads` im gesamten Repository nicht vorkommt.

**Zur Einordnung, weil ich es zunächst schärfer formuliert hatte:** Das
heißt *nicht*, dass die Datenbank nicht wiederherstellbar wäre. Supabase
legt zu jeder angewendeten Migration das ausgeführte SQL in
`supabase_migrations.schema_migrations.statements` ab; alle 102 haben es.
Die Datenbank kann sich also aus eigener Kraft neu aufbauen. Was fehlte,
war, dass das **Repository** die Quelle der Wahrheit ist.

Aus demselben Grund wäre der zunächst erwogene Zweig-Datenbank-Test das
falsche Werkzeug gewesen: Er hätte die aufgezeichnete Historie
durchgespielt — die nachweislich vollständig ist — und über die
Repository-Lücke nichts ausgesagt. Kosten für eine Antwort, die schon
vorlag.

Der wirksame Schritt kostete nichts: das Original-SQL aus der Datenbank
zurückholen. Dabei zeigte sich, dass die Lücke größer war als die zwei
Tabellen — es fehlten **fünf produktiv genutzte Funktionen**
(`list_partner_signatures`, `my_notifications`,
`my_notifications_unread_count`, `mark_notification_read`,
`mark_all_notifications_read`) und die Seed-Zeilen der Gesellschafter.

Gegengeprüft: Jede der 73 Tabellen in `public` und `app` hat jetzt ein
`create table` in den Migrationsdateien.

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

**Internes Kommunikationsmodul — entschieden am 03.08.2026: kommt nicht.**
Nachrichten zwischen Gesellschaftern und Mitarbeitern sind ausdrücklich
nicht erwünscht. Damit ist der letzte offene Posten aus dem
ursprünglichen Auftrag geschlossen; für Absprachen bleiben Telefon und
Messenger. Der interne Bereich gilt damit als vollständig — es fehlt
nichts mehr, was gebaut werden müsste.

**Automaten-Stammdaten.** In der Datenbank stehen „Standort 1
(ANPASSEN)" bis „Standort 3 (ANPASSEN)". Die Loveable-App zeigt derzeit
erfundene, aber plausibel klingende Namen. Solange die echten Standorte
fehlen, kann die Automatenliste im Web nicht sinnvoll auf echte Daten
umgestellt werden.

**Probemonat, Payment-Anbindung, Supportformular** — jeweils
Voraussetzung für ganze Mail-Kategorien.

**Demo-Testkauf.** Der Knopf steht jedem Kundenkonto offen. Für die
Buchhaltung ist er seit 0078 harmlos, Treuepunkte und Spendenstände lässt
er weiter wachsen. Vor dem Start ist zu entscheiden: bleibt er (Beta),
wird er auf interne Rollen begrenzt, oder verschwindet er? Dazu die
Frage, was mit den acht vorhandenen Demo-Käufen geschieht, die noch als
`'manual'` in den Zahlen stehen.

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
* Supabase-Advisor: **78 WARN, 0 ERROR**

  Die Zahl ist gegenüber 76 gestiegen, und zwar durch die eigene neue
  Funktion: `subscription_plans()` ist bewusst für `anon` freigegeben und
  wird deshalb unter zwei Regeln gezählt. Alle übrigen Befunde sind in
  `RPC_AUDIT.md` einzeln eingeordnet. Eine sinkende Advisor-Zahl ist kein
  Ziel — die 83 Treffer aus der ersten Runde enthielten überwiegend
  Funktionen, die ihre Rolle im Rumpf prüfen und nichts herausgeben.
* Rechteänderungen aus 0075/0076/0079/0081 nach dem Lauf einzeln
  nachgemessen (`has_function_privilege`) und gegen echte Rollen
  simuliert — Angreifer und legitime Nutzer jeweils getrennt
* Schema-Exposition über die echte REST-API geprüft, nicht angenommen
  (`net.http_get` mit `Accept-Profile`)
* Alle deployten Functions per `pg_net` auf Boot geprüft

## 7 · Nachtrag 03.08.2026 — die Rollenprüfung war systematisch kaputt

Dieser Abschnitt korrigiert den Bericht oben. Was dort unter „umgesetzt"
steht, war richtig, aber unvollständig: Migration 0079 hat eine
Sicherheitsklasse repariert und dabei **siebzehn Stellen übersehen**.

**Die Lücke.** Fast alle Funktionen prüfen die Berechtigung so:

```sql
select role into v_role from public.profiles where id = auth.uid();
if v_role not in ('system_admin','shareholder') then
  raise exception 'Nicht autorisiert';
end if;
```

Hat der Aufrufer keine Profilzeile, ist `v_role` NULL. In SQL ergibt
`NULL not in (…)` nicht `true`, sondern NULL — und `if NULL then` ist
unwahr. Die Ausnahme bleibt aus, die Funktion arbeitet weiter. Dieselbe
Falle stellt `v_role <> 'system_admin'`.

**Nachgewiesen, nicht vermutet.** Mit einem angemeldeten Konto ohne
Profilzeile liess sich

* über `set_partner_signature_image` die Unterschrift eines
  Gesellschafters durch eine beliebige URL ersetzen,
* über `list_document_approvals` die vollständige Freigabeliste auslesen
  (neun Vorgänge mit Titeln, Zeiträumen, Entscheidern, Kommentaren),
* über `rotate_provider_secret` der HMAC-Schlüssel eines
  Telemetrie-Anbieters austauschen — danach kann der Angreifer selbst
  gültig signierte Messwerte einspeisen.

Der Unterschriften-Weg ist derselbe, für den am selben Tag die Function
`install-signature` stillgelegt wurde. Die Lücke war also nie
geschlossen, nur die eine Tür davor.

**Wie es gefunden wurde — und warum erst jetzt.** Nicht durch Nachdenken,
sondern durch einen vollständigen Abgleich: alle Funktionen und Tabellen
der produktiven Datenbank gegen das, was die Migrationen erzeugen.
Ergebnis: Tabellen 77 von 77 abgedeckt, Funktionen 85 von 93. Die acht
fehlenden waren nirgends im Repository — und sechs davon trugen die
Falle. Die anschliessende Mustersuche über den gesamten Bestand fand neun
weitere.

Vorher hatte ich einzeln gesucht und dabei zunächst nur die
`not in`-Form geprüft; die `<>`-Form verhält sich identisch und fiel erst
beim Lesen der Quelltexte auf. Aus drei Treffern wurden so siebzehn.

**Behoben** mit 0093 (drei RPCs zurückgeholt, zwei repariert), 0094 (acht
RPCs zurückgeholt, sechs repariert) und 0095 (neun bestehende
programmatisch über `pg_get_functiondef` gepatcht, statt neun Rümpfe
abzuschreiben — es geht um Inventurbewertung und Dokumentenfreigaben).

**Stand danach:** 19 Funktionen mit Rollenprüfung, **0** mit offener
NULL-Falle, alle 19 prüfen zusätzlich `status = 'active'` und
`deleted_at is null`. Angriff scheitert, berechtigter Zugriff unverändert
(21 Dokumente, 11 Ordner, 94 Inventurzeilen).

**Damit es nicht ein drittes Mal passiert:**
`scripts/check_rollenpruefung.py` sucht das Muster bei jedem CI-Lauf und
macht den Build rot — bewusst ohne `\|\| true`, anders als die übrigen
Schritte dort. Eine Prüfung, die man ignorieren kann, hätte den Fund
nicht verhindert.

**Die eigentliche Lehre** gehört nicht in eine Fussnote: Wer eine
Sicherheitsklasse repariert, muss die ganze Klasse suchen — nicht die
Stellen, die ihm gerade einfallen. Die Suche dauert eine Abfrage. 0079
hat das nicht getan, und die Lücke stand danach noch vier Tage offen.

Dass das Repository die Datenbank nicht vollständig beschrieb, war die
Voraussetzung dafür: Die zwei bzw. sechs schlimmsten Fälle standen in
Funktionen, die es im Repository gar nicht gab, und konnten deshalb von
keiner Codeprüfung gefunden werden. Beides ist jetzt geschlossen.

## 8 · Empfohlene nächste Schritte

1. Automaten-Stammdaten eintragen — Vorlage in
   `docs/AUTOMATEN_VORLAGE.md`, blockiert A9.
2. Liste der Spendenorganisationen liefern — Vorlage in
   `docs/SPENDENORGANISATIONEN_VORLAGE.md`, danach ist A5 startklar.
3. Die vier Mail-Functions ausrollen — erst danach wirken die
   Datenbank-Vorlagen aus 0092 und die Maskierung von `title`/`preheader`
   in `components.ts`. Stand pro Vorlage in `docs/EMAIL_VORLAGEN.md`.
   Sauberer Weg: ein `SUPABASE_ACCESS_TOKEN`, dann alle vier byte-genau
   per CLI von der Platte.
4. Die acht Demo-Käufe mit `source = 'manual'` bereinigen, **bevor** der
   Finanzblock I3 portiert wird — sonst prüft man die neue Anzeige gegen
   falsche Werte und merkt es nicht.
5. Send-Email-Hook aktivieren, mit Wegwerf-Konto gegentesten.
6. Posteingang aktivieren, wenn die Domain bei Resend verifiziert ist —
   vier Schritte in `docs/POSTEINGANG_AKTIVIEREN.md`.
