# Bördesnack24 — Arbeitsregeln für Claude

Dieses Dokument sammelt dauerhafte Vorgaben, die für **jede** Änderung
am Projekt gelten. Neue Regeln unten anhängen.

## KI-Kennzeichnung im Kundenbereich (Pflicht, ohne Nachfrage)

> **Korrektur der Rechtsgrundlage (09.08.2026).** Diese Regel hiess bis
> dahin „KI-Transparenz nach Art. 50 EU AI Act". Das war falsch zitiert:
> Die Leitlinien der Kommission vom 06.02.2025 nehmen Systeme aus, die
> vordefinierten expliziten Regeln folgen, ohne zu lernen, zu schliessen
> oder zu modellieren. Unsere Angebotslogik ist genau das — Art. 50
> verpflichtet uns derzeit zu nichts. Die Kennzeichnung bleibt trotzdem
> Hauspflicht, weil sonst für den Kunden nicht erkennbar wäre, warum ihm
> gerade dieses Angebot erscheint. Sobald ein echtes KI-System dazukommt,
> greift Art. 50 wirklich; das Register `public.ki_register` ist darauf
> vorbereitet (`ist_ki_system`).

Immer wenn im Kundenbereich neue Inhalte hinzukommen, die **algorithmisch,
regelbasiert oder KI-basiert** erzeugt/ausgewählt werden — Coupons,
Empfehlungen, Angebote, generierter Text, dynamisch gewählte Produkt-
Kombinationen, personalisierte Nachrichten —, ist **automatisch** ein
sichtbarer KI-Chip an der betroffenen Section zu platzieren.

* Widget: `AiBadge` aus `core/widgets/design_system/ai_badge.dart`
* Ziel: `AiInfoScreen` (`features/customer/presentation/screens/ai_info_screen.dart`);
  dort im Abschnitt „Was wird eingesetzt?" die neue Funktion **auch
  textlich** ergänzen, damit die Info-Seite vollständig bleibt.
* Kein Nachfragen beim User nötig. Standard: `dense: true` als Chip
  neben Section-Header (oder im Header-Row der Karte), `onTap` öffnet
  `AiInfoScreen` per `MaterialPageRoute`.

Der regelbasierte Chatbot bleibt bewusst als „Automatischer
Chat-Assistent" gekennzeichnet — nicht als „KI", weil er kein
AI-System i. S. v. Art. 3 EU AI Act ist. Für zukünftige LLM-Backends
das gleiche Prinzip anwenden.

## Produktbilder: jedes Bild wird dokumentiert (Pflicht, ohne Nachfrage)

Vorgabe des Auftraggebers vom 26.08.2026: „Zukünftig sollen alle
Produktbilder in dem Format dokumentiert werden, um urheberrechtlich und
markenrechtlich geschützt zu sein."

Jedes Produktfoto, das in der App, im Web oder in Werbung erscheint,
bekommt vorher einen Eintrag in `public.produktbilder` — erreichbar über
Verwaltung → Vorgänge & Prozesse → **Bilder**. Ohne Eintrag kein Einsatz.
Wer ein Bild einbaut, legt den Eintrag mit an; das ist kein
Nachdokumentieren „bei Gelegenheit", sondern Teil derselben Änderung.

**Die Einstufung wird nicht eingetragen, sondern gerechnet.**
`kennzeichnung_noetig` ist eine generierte Spalte (Migration 0139):
KI verwendet UND (Produkt verändert ODER KI-Produkt ODER KI-Umgebung).
Freistellen, Zuschneiden und Helligkeit lösen sie nicht aus — das Bild
zeigt den Gegenstand weiterhin, wie er ist. Wer die Einschätzung ändern
will, ändert die Regel und nicht 200 Häkchen.

**Steht sie einmal auf „Ja", ist ein `AiBadge` fällig** — an jeder Stelle
im Kundenbereich, an der dieses Bild erscheint, plus ein Satz im
`AiInfoScreen`. Das ist derselbe Automatismus wie oben, nur ausgelöst
durch ein Bild statt durch eine Funktion. Solange kein Bild die Marke
trägt, wird auch keine gesetzt: Ein Hinweis auf etwas, das es nicht gibt,
ist genauso falsch wie ein fehlender.

Zugesagt ist beides bereits nach aussen — Nutzungsbedingungen Abschnitt 8
(„Produktbilder stammen von uns", „Die abgebildeten Marken gehören nicht
uns") und der Abschnitt „Und die Produktbilder?" im `AiInfoScreen`. Ändert
sich die Praxis, sind diese beiden Texte mitzuziehen; das Register führt
`produktbild_bearbeitung` mit gelber Ampel, bis die Kennzeichnung am
ersten betroffenen Bild wirklich nachgewiesen ist.

## Behauptungen vorher prüfen (Pflicht, ohne Nachfrage)

**Nichts behaupten, was sich nachsehen lässt, ohne es nachgesehen zu
haben.** Das gilt für Aussagen über Code, Datenbankzustand, Konfiguration
und darüber, was ein Ablauf tatsächlich tut.

Anlass (04.08.2026): Behauptet wurde, ein grüner Trockenlauf des
Ausroll-Ablaufs beweise, dass der Supabase-Token gültig ist. Ein Blick in
die eigene Workflow-Datei hätte gezeigt, dass dort nur auf „Secret nicht
leer" geprüft wurde und der Ausroll-Schritt beim Trockenlauf übersprungen
wird — die Aussage war also falsch, und zwar nachprüfbar falsch. Solche
Fehler kosten eine ganze Runde: Der User handelt danach, es geht schief,
und alles wird noch einmal aufgerollt.

Konkret heisst das:

* **Über eigenen Code**: die Datei lesen, nicht aus der Absicht beim
  Schreiben schliessen. Die Absicht und das Ergebnis gehen auseinander.
* **Über den Datenbankzustand**: abfragen. Nicht aus der Migration
  ableiten, die man gerade geschrieben hat — sie kann fehlgeschlagen,
  überschrieben oder nie angewandt worden sein.
* **Über Sicherheitseigenschaften**: nachstellen, mit echten Identitäten.
  Ein Test, der das erwartete Ergebnis fest verdrahtet, prüft nichts.
* **Über fremde Systeme** (Apple, Google, Resend, Hostinger): die
  Dokumentation abrufen. Aus dem Gedächtnis zitierte Richtlinien und
  Preise sind veraltet oder erfunden.
* **Über den Ausgang eines Laufs**: das Ergebnis ansehen, nicht den
  grünen Haken. Ein Schritt kann bestehen, ohne das zu prüfen, wofür man
  ihn hält — genau das war der Anlass.

Wenn eine Prüfung nicht möglich ist, wird die Unsicherheit **benannt**
statt weggelassen: „ungeprüft, weil …" ist brauchbar, eine glatte
Behauptung ohne Grundlage nicht.

Gilt auch für das Melden von Fehlern: Bevor ein Befund gemeldet wird,
erst prüfen, ob er wirklich besteht. Ein Fehlalarm kostet den User
dieselbe Zeit wie ein echter Fehler.

## Geld: ein Geldfluss, eine Buchung — Ausgaben rot mit Vorzeichen (Pflicht, ohne Nachfrage)

Zwei Vorgaben des Auftraggebers vom 25.08.2026, wörtlich:

> „Ausgaben möchte ich immer in rot angezeigt bekommen mit einem `-` davor."

> „Merke dir das, dass immer nur eine Ein- oder Auszahlung da stehen darf.
> Das Konto 1780 ist richtig."

**Darstellung.** Alles, wobei Geld abfliesst, steht rot
(`AppColors.statusCritical`) und mit einem `-` davor — in den
Einzelbuchungen, in der Kontoübersicht und in den Kennzahlen gleich.
Erlöse grün, Bestands- und Kapitalkonten gedämpft. Die Regel steht an
genau einer Stelle: `geldFliesstAb` in
`features/finance/domain/entities/finance_direction.dart`, angewandt über
das Widget `BetragText`. Neue Geldansichten benutzen dieses Widget, statt
sich eine eigene Bedingung zu bauen — „immer" hält sonst bis zur nächsten
Änderung an einer der Stellen.

Bei den Privat-/Kapitalkonten des SKR 03 entscheidet das Konto, nicht die
Buchungsrichtung: 1890/1990 ff. sind Einlagen (Geld herein, kein
Vorzeichen), 1800–1889 und 1900–1989 Entnahmen (Geld hinaus, mit `-`).
Beide tragen `direction = 'liability'`.

**Doppelte Geldflüsse.** Derselbe Geldfluss darf nur einmal in der
Auswertung stehen. sevDesk führt zu jeder Umsatzsteuer-Voranmeldung zwei
Belege — die Anmeldung und die Zahlung; die Einnahmen waren dadurch um
146,66 € zu hoch. Unterdrückt wird in
`doppelteZahlungenFinden` (`supabase/functions/sevdesk-sync/mapping.ts`),
weich (`deleted_at`), und nur im nachgewiesenen Fall: beide Buchungen auf
einem Umsatzsteuer-Zahlkonto (1700–1799), gleicher Bruttobetrag, gleiche
Zahlungsrichtung, gleicher Partner, höchstens 14 Tage auseinander. Es
bleibt die Buchung auf 1780, sonst die frühere.

**Und was dabei nicht passieren darf:** Eine breitere Regel — „gleicher
Partner, gleicher Betrag, nahes Datum" — hätte im selben Bestand echte
Vorgänge geschluckt: zwei Gebührenbescheide der Gemeinde Sülzetal über je
25,00 € am selben Tag (verschiedene Belegnummern), und eine Privateinlage
plus eine Privatentnahme über je 215,00 € am selben Tag (entgegengesetzte
Richtung). Alles ausserhalb des engen Falls wird deshalb nur **gemeldet**
(`doppelte_zahlungen_verdacht` im Sync-Protokoll), nicht angefasst. Wer
eine Doppelerkennung erweitert, muss vorher am echten Bestand nachsehen,
was sie mitnimmt — siehe „Behauptungen vorher prüfen".

**Konto und Kennzeichen sagen verschiedene Dinge.** Das Konto sagt, WOHIN
gebucht wird; `creditDebit` sagt, in WELCHE RICHTUNG das Geld läuft.
Beides wird gebraucht. Am 25.08.2026 hatte das Konto Vorrang und das
Kennzeichen wurde verworfen — damit war eine Rückerstattung nicht mehr
von einem Kauf zu unterscheiden: Zwei Amazon-Belege mit derselben
Rechnungsnummer standen beide als Aufwand, Bürobedarf war um 45,42 € zu
hoch.

**Ein Widerspruch allein ist aber noch keine Gutschrift.** Der erste
Anlauf negierte jeden Beleg, der auf einem Erfolgskonto gegen seine
Kontorichtung läuft. Das hätte die **Homeoffice-Pauschale** getroffen:
Sie wird als Aufwand gegen ein Kapitalkonto gebucht, meldet deshalb „Geld
herein" und ist trotzdem eine echte Betriebsausgabe. Nachgewiesen ist
eine Erstattung erst mit **Gegenbuchung** — gleiches Konto, gleicher
Partner, gleiche Rechnungsnummer, gleicher Betrag
(`gutschriftenFinden`). Dann bekommt die Buchung, die gegen die
Kontorichtung läuft, einen negativen Betrag und bleibt auf ihrem Konto;
eine Erstattung ist kein Erlös, sie mindert den Aufwand. Ohne
Gegenbuchung wird nur gemeldet (`gutschrift_ohne_gegenbuchung`).

In der Darstellung dreht ein negativer Betrag den Geldfluss um
(`geldfluss`): Eine Erstattung steht grün und **ohne** Minus, nicht rot.

**Was im Partnerfeld steht, ist nicht das Buchungskonto.** Ein Beleg
trug als `supplierName` die Zeichenfolge `1890`, und daraus wurde
geschlossen, er gehöre auf das Konto „Privateinlagen". Falsch: `1890`
war das **Gegenkonto**; das Buchungskonto 4651 stimmte. Die daraus
gebaute Regel `privatkontoAusPartner` ist wieder entfallen (Migration
0133). Sie war aus einem einzigen Beleg hergeleitet, ohne die Bedeutung
des Feldes zu prüfen — und sie hätte die App an genau der Stelle von
sevDesk abweichen lassen, an der sevDesk recht hatte. Aus einem Feld,
das man nicht versteht, wird keine Buchungsregel.

**Eine Quelle für die Richtung.** `finance_summary` und
`finance_bookings_list` nehmen beide `finance_bookings.direction`, nicht
`finance_accounts.direction`. Vorher war 0480 im Kontenstamm „asset" und
in der Buchung „expense" — dieselbe Anschaffung stand in einer Ansicht
rot, in der anderen grau (Migration 0131).

## Nach jeder Neuerung den Link mitschicken (Pflicht, ohne Nachfrage)

Vorgabe des Auftraggebers vom 26.08.2026: „Sende den aktuellen Link immer,
wenn es Neuerungen gibt."

Sobald eine Änderung ausgerollt ist, gehört die Adresse der Web-Demo in die
Antwort, vollständig und anklickbar:

**https://blume1805.github.io/B-rdesnack24-/**

Der Bindestrich am Ende gehört zum Repositoriumsnamen und damit zur
Adresse. Ohne ihn läuft der Aufruf ins Leere.

Nicht aus dem Gedächtnis zitieren, sondern vor dem Senden nachsehen, ob sie
noch stimmt: `base href` in `index.html` auf `gh-pages` und die An- oder
Abwesenheit einer `CNAME`-Datei entscheiden darüber. Zieht die Adresse
einmal auf die eigene Domain um (siehe `CUSTOM_DOMAIN` in
`scripts/deploy_web.sh`), ändert sich beides, und diese Regel hier ist
mitzuziehen.

Dazu gehört, den Stand ehrlich zu nennen: ob der Ausroll-Lauf durch ist,
und ob ein zweiter Aufruf nötig ist, weil der Service Worker erst bei der
nächsten Navigation übernimmt. Ein Link ohne diese Angabe schickt den
Auftraggeber auf eine Seite, die noch die alte Fassung zeigt.

## Rechtstexte mitziehen (Pflicht, ohne Nachfrage)

**Nach jeder inhaltlichen, funktionalen oder strukturellen Änderung ist
zu prüfen, ob ein Rechtstext nachgezogen werden muss — und die Prüfung
gehört in denselben Commit wie die Änderung.**

Anlass (09.08.2026): Die Datenschutzerklärung beschrieb vier
Verarbeitungen, die es nicht gab (Push, Nutzungsanalyse, Standortabfrage,
Empfehlungen) und nannte zwei Empfänger, die nirgends eingebunden waren
(Firebase Cloud Messaging, Google Maps). Gleichzeitig fehlte alles, was
tatsächlich stattfand: Resend, GitHub Pages, sevDesk, DocuSign und vor
allem das Profiling für individuelle Angebote. Die KI-Info-Seite nannte
Loyalty-Punkte und Kategorie-Präferenzen als Datenquellen, die kein
Generator verwendet, verschwieg aber das Geburtsdatum, das verwendet
wird. Das Impressum nannte den falschen Landkreis.

Nichts davon war Absicht. Es war Drift: Der Code wanderte, die Texte
blieben stehen. Ein Rechtstext, der Verarbeitungen erfindet, ist genauso
falsch wie einer, der welche verschweigt — er verlangt Einwilligungen
ins Leere und verdeckt zugleich das Tatsächliche.

Die Prüfliste — was löst was aus:

| Änderung | Nachziehen |
|---|---|
| Neue Abhängigkeit, neues SDK, neuer externer Dienst | Datenschutzerklärung (Empfänger, Drittland), Cookie-Seite |
| Neue Tabelle/Spalte mit Personenbezug | Datenschutzerklärung (Datenkategorien, Speicherdauer) |
| Neue Angebots-, Empfehlungs- oder Auswahllogik | `public.ki_register`, `AiInfoScreen`, Datenschutzerklärung (Profiling, Art. 21) |
| Neue automatische E-Mail | Datenschutzerklärung, ggf. Einwilligungspflicht |
| Preis-, Abo- oder Kündigungsänderung | AGB, Widerrufsbelehrung, Zahlungsinformationen |
| Neue Bezahlart | Zahlungsinformationen, Datenschutzerklärung |
| Neue Kundenfunktion | Barrierefreiheitserklärung (Funktionsliste) |
| Adresse, Kontakt, Rechtsform, Vertretung | Impressum, alle Texte mit Kontaktangabe |
| Beschäftigte eingestellt | Barrierefreiheitserklärung — die Kleinstunternehmen-Ausnahme nach § 3 Abs. 3 BFSG entfällt |
| Entfernte Funktion | Denselben Text prüfen wie beim Hinzufügen. Das wird regelmässig vergessen. |

Zwei Regeln dazu:

* **Keine Funktion beschreiben, die es nicht gibt.** Vor dem Formulieren
  am Code nachsehen, nicht aus der Roadmap schreiben.
* **Lücken beziffern statt beschönigen.** „11 von rund 160 Dateien" ist
  brauchbar, „nicht überall gleich sorgfältig" nicht.

Die Rechtstexte liegen in
`apps/mobile/lib/features/legal/presentation/legal_texts.dart`
(Impressum, Datenschutz, AGB, Widerruf, Zahlung, Cookies,
Barrierefreiheit) und in `ai_info_screen.dart`. Wird einer geändert, die
Versionskennung `LegalTexts.version` hochziehen.

`scripts/check_rechtstexte.py` fängt den häufigsten Fall automatisch ab:
eine neue Abhängigkeit ohne datenschutzrechtliche Einordnung. Das Skript
ersetzt die Prüfung nicht — es kennt nur Abhängigkeiten, nicht Bedeutung.

## Rechtsprüfung sichtbar machen (Pflicht, ohne Nachfrage)

Die Regel darüber sagt, **dass** nach jeder Änderung geprüft wird. Diese
hier sagt, **wie das Ergebnis aussieht** — denn eine Prüfung, die nur als
Halbsatz in einer Commit-Nachricht auftaucht („Rechtstexte geprüft, keine
Änderung nötig"), ist für den Auftraggeber nicht nachvollziehbar. Er kann
nicht sehen, was geprüft wurde, und ein übersehener Bereich fällt
niemandem auf.

Anlass (24.08.2026): Vier Commits an einem Tag — Auth-Mail-Protokoll,
Antwortadresse, CSV-Absicherung. Jeder trug die Zeile „Rechtstexte
geprüft". Erst auf Nachfrage, welche Bereiche das umfasst, kam heraus:
Die Antwortadresse macht ein **Gmail-Postfach zum eingebauten Rückkanal
jeder Systemnachricht**, und Google steht in der Empfängerliste der
Datenschutzerklärung nicht. Die Lücke bestand schon vorher, weil die
Adresse im Impressum steht — aber die Änderung hat sie von „jemand
könnte" zu „die Software gibt es vor" gemacht. Die pauschale Zeile hatte
sie verdeckt.

**Nach jeder Änderung sind diese sieben Bereiche einzeln durchzugehen**,
und das Ergebnis gehört in die Antwort an den User — je Bereich ein
Befund, nicht eine Sammelaussage:

1. **Datenschutzerklärung** — neue Datenkategorie, neuer Zweck, neue
   Rechtsgrundlage, neuer **Empfänger**, neue Speicherdauer, Profiling.
2. **AGB / Nutzungsbedingungen** — Leistung, Preis, Laufzeit, Kündigung,
   Kommunikationswege.
3. **Lizenzen** — neue Abhängigkeit, neues SDK, neuer Dienst.
4. **EU AI Act / Kennzeichnung** — algorithmisch oder KI-erzeugte Inhalte
   hinzugefügt **oder entfernt**; `public.ki_register` und `AiInfoScreen`.
5. **DSGVO über die Texte hinaus** — Art. 5 (Datenminimierung), Art. 32
   (TOM), Art. 30 (Verarbeitungsverzeichnis), Art. 33/34 (Meldepflicht).
6. **Barrierefreiheitserklärung** — Funktionsliste, Beschäftigtenzahl.
7. **Impressum** — Anschrift, Rechtsform, Vertretung, Kontakt.
8. **Verarbeitungsverzeichnis** (`docs/VERARBEITUNGSVERZEICHNIS.md`) — neue
   Tabelle oder Spalte mit Personenbezug, neuer Empfänger, neue automatische
   E-Mail, neue Auswahllogik, geänderte Löschfrist, **entfernte Funktion**.
   Wird es geändert, die Fassungsnummer im Kopf hochziehen.

Zwei Regeln zum Ergebnis:

* **„Keine Änderung nötig" braucht eine Begründung.** Nicht „geprüft",
  sondern „keine neue Abhängigkeit in allen vier Commits, Wächter grün".
  Ein Satz, der sich nachprüfen lässt.
* **Eine Lücke, die man nicht durch Text schliessen kann, wird gemeldet
  statt bebildert.** Google als Empfänger zu benennen, solange kein
  AV-Vertrag nach Art. 28 existiert, dokumentiert die Lücke — es behebt
  sie nicht. Solche Fälle gehören dem Auftraggeber vorgelegt, mit den
  Wegen, die es gibt (hier: Support-Adresse auf die eigene Domain, oder
  Google Workspace).

Beim Prüfen von Bereich 5 gilt die Nachweisregel aus „Behauptungen vorher
prüfen": Ob ein Vorfall meldepflichtig ist, entscheidet sich an Zahlen —
wie viele Zeilen, welche Empfänger, welche Rollen konnten lesen, gab es
diese Rollen überhaupt. Diese Zahlen werden abgefragt, nicht geschätzt.

### Offen, Stand 24.08.2026

* **Google als Empfänger** (Support-Postfach `boerdesnack24@gmail.com`)
  fehlt in Abschnitt 4 der Datenschutzerklärung; Abschnitt 5 nennt „zwei"
  US-Empfänger, mit Google wären es drei; Abschnitt g) sagt nicht, wo
  Kontaktanfragen landen. **Entscheidung vom 24.08.2026: Die Adresse zieht
  auf die eigene Domain**, damit entfällt Google statt benannt zu werden.
  Reihenfolge und der MX-Konflikt stehen in
  `docs/POSTEINGANG_AKTIVIEREN.md`. Bis das Postfach Post annimmt, bleibt
  `boerdesnack24@gmail.com` in Betrieb und die Lücke offen —
  `mailConfig.supportEmail` wird **zuletzt** umgestellt, nicht zuerst.
* ~~Kein Verarbeitungsverzeichnis nach Art. 30 im Repository.~~
  **Erledigt am 25.08.2026:** `docs/VERARBEITUNGSVERZEICHNIS.md` (Fassung 2 seit 0126).
  Jede Angabe am laufenden System abgefragt, nicht aus einer Vorlage. Es ist
  jetzt Bereich 8 der Prüfliste oben.

  Aus dem Verzeichnis sind dabei **fünf weitere offene Punkte** entstanden,
  die es vorher nicht sichtbar gab. Sie stehen dort in Abschnitt 5, hier nur
  als Verweis: ~~keine Löschfrist für `audit_log` und `email_log`~~
  (**erledigt am 25.08.2026**, Migration 0126: 10 Jahre bzw. 12 Monate mit
  Ausnahmeliste); `nayax_sales.raw` speichert die vollständige Webhook-Nutzlast
  und ist **vor dem ersten echten Verkauf** darauf zu prüfen, ob Nayax
  Personenbezogenes mitsendet; kein Wiederherstellungstest der Sicherungen;
  die sevDesk-Verifikationspflicht; keine anwaltliche Freigabe.

## Eine gemeinsame Rollenfunktion kann jede Prüfung stumm durchlassen (Pflicht, ohne Nachfrage)

Migration 0079 und 0095/0096 haben die NULL-Falle in **einzelnen**
Rollenprüfungen behoben (`role not in (...)` lässt ein Konto ohne Profilzeile
durch, weil der Vergleich mit NULL wieder NULL ist, nicht `false`).
`check_rollenpruefung.py` sucht seither genau dieses Textmuster in jeder
Migration ab 0096.

Am 27.08.2026 zeigte sich beim Nachstellen der Zeilensicherheit für den
Werbebericht (`advertising_campaign_report`, 0155) dieselbe Fehlerklasse an
einer Stelle, die dieser Wächter **nicht sieht**: nicht im Text einer neuen
Migration, sondern in der gemeinsam genutzten Funktion `public.is_admin()`
selbst, definiert schon in Migration 0002. `app_role(uid)` liefert für ein
Konto ohne aktives Profil (gesperrt, gelöscht — nicht „gibt es nicht") NULL
statt einer Rolle; `NULL = 'system_admin'` ist wieder NULL. Für sich allein
harmlos — aber `is_admin()` steht praktisch nie allein. Das Muster
`if not (public.is_admin() or <etwas anderes>) then raise exception … end
if;` steht in 23 Migrationen. Ist `<etwas anderes>` für die aufrufende
Person `false` (der Normalfall für jeden ohne die gefragte Rolle) und
`is_admin()` NULL, ergibt `false or NULL` wieder NULL, `not NULL` ist NULL,
und `if NULL then` nimmt in PL/pgSQL den Zweig **nicht** — die Ausnahme
bleibt aus. `public.is_shareholder()` erbte denselben Fehler, weil sie mit
`… or public.is_admin(uid)` endet.

Betroffen wäre eine Person mit einem noch gültigen Zugangstoken, deren
`profiles`-Zeile inzwischen gesperrt oder gelöscht ist — zwischen der
Sperrung und dem Ablauf des Tokens hätte sie auf jede Funktion zugegriffen,
die ihre Berechtigung über `is_admin()`/`is_shareholder()` **und** ein
weiteres, für sie falsches Merkmal prüft, unabhängig davon, ob sie je eine
Berechtigung hatte. Gefunden nicht durch Lesen, sondern durch Nachstellen
mit einer echten, aber inaktiven Kennung — Migration 0156 (`coalesce(...,
false)`) schliesst es an der einen Stelle, an der `app_role()` verglichen
wird; danach mit derselben Kennung und einer Gegenprobe über alle
booleschen `security definer`-Funktionen in `public`/`app` erneut geprüft.

**Was daraus folgt:** „Nachstellen mit echten Identitäten" (siehe
„Behauptungen vorher prüfen") heisst nicht nur, den Fall zu prüfen, den man
gerade baut, sondern auch den Fall einer Kennung, die es *fast* gibt — ein
gesperrtes oder gelöschtes Konto, nicht nur ein völlig fremdes. Ein
Textmuster-Wächter wie `check_rollenpruefung.py` findet nur, was er
kennengelernt hat; eine Komposition aus zwei für sich genommen unauffälligen
Funktionen findet er nicht. Das ersetzt das Nachstellen nicht, es ergänzt es.
