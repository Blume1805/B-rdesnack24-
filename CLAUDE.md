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
  **Erledigt am 25.08.2026:** `docs/VERARBEITUNGSVERZEICHNIS.md`, Fassung 1.
  Jede Angabe am laufenden System abgefragt, nicht aus einer Vorlage. Es ist
  jetzt Bereich 8 der Prüfliste oben.

  Aus dem Verzeichnis sind dabei **fünf weitere offene Punkte** entstanden,
  die es vorher nicht sichtbar gab. Sie stehen dort in Abschnitt 5, hier nur
  als Verweis: keine Löschfrist für `audit_log` und `email_log` (Art. 5
  Abs. 1 lit. e); `nayax_sales.raw` speichert die vollständige Webhook-Nutzlast
  und ist **vor dem ersten echten Verkauf** darauf zu prüfen, ob Nayax
  Personenbezogenes mitsendet; kein Wiederherstellungstest der Sicherungen;
  die sevDesk-Verifikationspflicht; keine anwaltliche Freigabe.
