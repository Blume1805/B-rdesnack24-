# Konzeptstand v1 — nach Rückmeldung Automatenland

Stand: 2026-09-15 · Status: **Arbeitsstand, nicht beschlossen**
Baut auf `2026-09-14-stufe-2-produktkern.md` und der anschließenden
Red-Team-Prüfung auf. Neu eingearbeitet: die Rückmeldung von Automatenland
vom 14./15.09.2026 sowie die Messung des Flutter-Web-Builds.

Kennzeichnung: **FAKT** · **ANNAHME** · **HYPOTHESE** · **ZU VERIFIZIEREN**

## 1. Quellenlage und Belastbarkeit

FAKT: Die Rückmeldungen stammen aus drei E-Mails von `info@automatenland.de`
(14.09., 15.09. vormittags, 15.09. abends). Die erste Nachricht stellt den
Absender ausdrücklich vor: „Ich bin Automatenland AI, der AI Agent von
Automatenland". Die dritte Nachricht beantwortet den Fragenkatalog und
verwendet mehrfach die Formulierung „in den verfügbaren Informationen nicht
beschrieben" sowie Verweise auf Shop-Produktseiten (ONYX Bezahlsystem,
IM30 Bezahlsystem, CleverPay-Kartenterminals, API Integration, G-Snack Budget,
Selfly Model 3 Freezer).

**Bewertung:** Die Antworten sind eine automatisierte Auskunft auf Basis von
Marketing- und Shopmaterial, keine technische Zusage und keine Aussage eines
Menschen mit Systemkenntnis. Sie taugen zur Vorsortierung, nicht als Grundlage
für eine Architekturentscheidung. Jede der folgenden Aussagen behält den Status
**ZU VERIFIZIEREN**, bis sie schriftlich von einer benannten Person oder aus
einer API-Dokumentation bestätigt ist.

## 2. Was geantwortet wurde — und was es tatsächlich belegt

| Frage | Antwort Automatenland | Was das tatsächlich belegt | Status |
|---|---|---|---|
| **K1 Kundenerkennung** | ja — IM30 unterstützt NFC (Apple/Google Pay), Chipkarten und QR-Codes; Kamera zur Altersverifikation integriert | Die Hardware kann QR und Chipkarten **lesen**. Ob ein *von uns erzeugter* Identifier verarbeitet und einem Konto zugeordnet wird, ist damit nicht gesagt | teilweise beantwortet |
| **K2 Zuordnung zur Transaktion** | ja — Transaktionen werden im CleverPay-Portal erfasst, einsehbar und exportierbar | **Antwortet nicht auf die Frage.** Export aus einem Portal ist keine Zuordnung eines App-Kunden zu einem Kauf | ausweichend |
| **K3 Preise und Rabatte** | ja — Preise, Promo-Codes und Sortiment über Dashboard fernaktualisierbar | Bestätigt **generische** Promo-Codes und Fernpflege. Ein *kundenindividueller* Preis ist etwas anderes und bleibt offen | teilweise beantwortet |
| **K4 Guthaben** | **derzeit nicht, aber geplant** — native Prepaid-Funktion nicht beschrieben | Klare Negativauskunft | beantwortet (negativ) |
| **K5 Erstattung** | ja — Kartenumsätze im CleverPay-Portal verwaltbar, für Auszahlungen und Buchhaltung nutzbar | **Antwortet nicht auf die Frage.** Keine Aussage zu Erstattungsprozess, Frist oder eigener Erstattungsbefugnis | ausweichend |
| B1 Schnittstellen | ja — RESTful API mit über 50 Endpoints, Echtzeit-Webhooks | Substanziell, aber ohne Dokumentation nicht prüfbar | ZU VERIFIZIEREN |
| B2 Datenumfang | ja — Umsätze, Transaktionen, Telemetrie | **Bestand je Fach nicht genannt** — genau die Angabe, die wir brauchen | offen |
| B3 Schreibender Zugriff | ja — über das Dashboard | „über das Dashboard" ist kein API-Zugriff | ausweichend |
| B4 Störungsereignisse | ja — Telemetrie und Events | kein bestätigtes „vend failed"-Ereignis | offen |
| B5 Produktsperren | nicht beschrieben | — | offen |
| B6 Datenschutz | nicht beschrieben | — | offen |
| B7 Buchführung | ja — Transaktionsdaten und Exporte im Portal | brauchbar, Format und Unveränderbarkeit offen | teilweise |
| B8 Kosten, Vertrag | nicht beschrieben | — | offen |
| B9 Ansprechpartner | nicht beschrieben | — | offen |

**Zusatzfunde aus den Mails**

- FAKT: Das Bezahlsystem, um das es geht, heißt **IM30**; Philipp hatte es in der
  Erstanfrage bereits benannt, Automatenland bestätigt es.
- FAKT: Im IM30 ist eine **Kamera zur Altersverifikation** verbaut. Das ist für
  die Standorte Sporthalle, Schwimmbad und Bahnhof erheblich — Jugendschutz
  lässt sich damit möglicherweise geräteseitig lösen statt kontoseitig.
- HYPOTHESE, dringend zu klären: Unter den verlinkten Produkten steht auch das
  **ONYX-Bezahlsystem**. Falls Automatenland Hardware oder Backend eines
  Drittanbieters weiterverkauft, wäre zu prüfen, welches Zahlungs-Backend hinter
  CleverPay tatsächlich steht. Das entscheidet, ob der im Repository vorhandene
  Nayax-Webhook (`supabase/functions/nayax-webhook/`) Altlast oder
  wiederverwendbar ist.

## 3. Was sich dadurch am Konzept ändert

**a) Das Guthabenmodell fällt — und damit die Empfehlung der Red-Team-Prüfung.**
K4 war das benannte Kill-Kriterium. Ohne Prepaid über CleverPay gibt es keine
„Snackkasse", kein Eltern-Guthaben für Kinder, keinen Float und keinen
Aufladebonus als Ersatz für den Dauerrabatt. Der dort vorgeschlagene Pull-Anker
existiert nicht. Die Aussage „geplant" ist kein Planungsgrund.

**b) Der kundengebundene Vorteil am Automaten rückt an dessen Stelle — mit
einem ungelösten Kern.** Bestätigt sind generische Promo-Codes. Ein Code, den
jeder weitergeben kann, taugt nicht als Mitgliedsvorteil: Er wird geteilt, und
der Rabatt geht an alle. Die entscheidende Frage lautet deshalb neu:
**Lässt sich ein Vorteil an einen Kunden binden — über eine Chipkarte, einen
personengebundenen QR-Code oder einen einmalig einlösbaren Code?** Erst wenn
das mit Ja beantwortet ist, hat ein Kundenkonto am Automaten überhaupt einen
Zweck.

**c) Die Verfügbarkeitsanzeige bleibt unbestätigt.** „Telemetrie" wurde genannt,
Bestand je Fach nicht. Damit steht der stärkste Öffnungsgrund aus Modell D auf
unsicherem Grund.

**d) Die Störfall-Gutschrift bleibt Hypothese.** K5 wurde nicht beantwortet.

**e) Jugendschutz entspannt sich möglicherweise.** Die Kamera zur
Altersverifikation im IM30 könnte die kontobezogene Produktsperre ersetzen —
ZU VERIFIZIEREN, auch rechtlich (Biometrie, DSGVO, Erforderlichkeit).

## 4. Konzeptstand

**Produktkern (unverändert tragfähig):** die Beziehung zum konkreten Automaten —
wissen, was drin ist; mitbestimmen, was hineinkommt; im Störfall nicht allein
dastehen. Ebene 3 im Vier-Ebenen-Modell; Clever bleibt Ebene 2 und wird nicht
nachgebaut.

**Bestätigt baubar (nach heutigem Auskunftsstand):** Fernpflege von Preisen und
Sortiment, Promo-Code-Aktionen, Auslesen von Umsatz-, Transaktions- und
Telemetriedaten, Erkennung von QR und Chipkarte am Gerät, Export für die
Buchhaltung.

**Nicht baubar:** Prepaid-Guthaben über CleverPay.

**Offen und entscheidungsrelevant:** Kundenbindung des Vorteils, Bestand je
Fach, Erstattungsbefugnis, Kontobezug von Sperren, Datenschutzrollen, Kosten.

**Monetarisierung:** Endkunden-Abo bleibt zurückgestellt. Die Rechnung aus
Stufe 2 gilt unverändert — nach Umsatzsteuer und Store-Provision bleiben von
0,99 € rund 0,58 bis 0,71 €, und der Dauerrabatt übersteigt diesen Betrag ab
etwa 12 bis 14 € Monatsumsatz, bei Gold-Status ab 6 bis 7 €. Ohne
Prepaid-Alternative heißt das: Die App wird zunächst über Vending-Rohertrag und
das B2B-Werbegeschäft finanziert, nicht über Nutzergebühren.

**Auslieferungsform:** PWA-first. FAKT aus der Messung vom 15.09.2026: Der
Flutter-Web-Release-Build ist 44 MB groß; beim Erstaufruf gehen gzip-komprimiert
rund 2,8 MB (moderner Browser, skwasm) bis 4,1 MB (CanvasKit-Fallback) über die
Leitung — `main.dart.js` allein 1,19 MB gzip, der Renderer 1,47 bis 2,78 MB.
Bei schwachem Netz in Halle, Schwimmbad oder Bahnhof sind das geschätzt 10 bis
19 Sekunden bis zur ersten Anzeige (ANNAHME, reine Datenrechnung). Für den
QR-Einstieg am Automaten ist das zu schwer. Konsequenz: eine sehr kleine
statische Einstiegsseite für den Sofortbedarf, die vollständige App erst
dahinter.

## 5. Nachfassen bei Automatenland — an einen Menschen, nicht an den Agenten

Die drei ausweichenden Antworten (K2, K5, B3) und die fehlende Angabe zum
Bestand je Fach sind so zu stellen, dass eine Textbaustein-Antwort nicht mehr
möglich ist:

1. Bitte um Weiterleitung an eine technisch verantwortliche Person mit Namen
   und um Zusendung der API-Dokumentation, gern unter Vertraulichkeitsvereinbarung.
2. Kann ein Rabatt oder Preis an einen einzelnen Kunden gebunden werden —
   über Chipkarte, personengebundenen QR-Code oder einmalig einlösbaren Code?
   Falls nur generische Promo-Codes möglich sind: bitte ausdrücklich bestätigen.
3. Liefert die API den **Bestand je Fach** (Planogramm mit Füllstand), oder nur
   Umsatz- und Verkaufsdaten?
4. Erhalten wir über Webhook ein Ereignis bei bezahltem, aber nicht ausgegebenem
   Produkt — und dürfen wir als Betreiber eigenständig erstatten oder gutschreiben?
5. Welches Zahlungs-Backend steht hinter CleverPay, und in welchem Verhältnis
   stehen CleverPay, IM30 und ONYX zueinander?
6. Wann ist die angekündigte Prepaid-Funktion verfügbar, und in welcher Form
   (von Automatenland geführt oder für externe Guthaben offen)?

## 6. Entscheidungsvorlage

Vor der nächsten Konzeptstufe sind zu entscheiden:

- **E1** Wird der Endkundenvorteil weiterverfolgt, obwohl seine Kundenbindung
  technisch unbestätigt ist — oder wird die App bis zur Klärung ohne
  Vorteilsmechanik gedacht?
- **E2** Physische Chipkarte als Identifikationsweg (robust, aber Kosten und
  Ausgabe) oder ausschließlich QR auf dem Handy?
- **E3** Wird die Verfügbarkeitsanzeige zum Kern erklärt, obwohl der Bestand je
  Fach nicht bestätigt ist?
- **E4** PWA-first mit kleiner Einstiegsseite — ja oder nein?
- **E5** Bleibt das Abo-Modell ausgesetzt, bis eine tragfähige Gegenleistung
  existiert?

Die rechtliche Prüfung der Spendenkonstruktion, der Altersverifikation per
Kamera und einer etwaigen späteren Guthabenfunktion erfolgt über
`boerdesnack24-legal-impact`, technische Änderungen über `boerdesnack24-verify`.
