# Stufe 2 — Produktkern, USP und Killer Feature

Stand: 2026-09-14 · Status: **Konzeptentwurf, nicht beschlossen** · Keine Umsetzung
Kontext: gemeinsamer Re-Think der Kunden-App (Philipp + ChatGPT + Claude).
Stufe 1 (Zahler-Logik) ist vorausgegangen; Stufe 3 (Informationsarchitektur,
Umsetzung) ist ausdrücklich noch nicht begonnen.

Kennzeichnung nach Belegstatus: **FAKT** (aus diesem Repository),
**ANNAHME**, **HYPOTHESE** (testbar), **ZU VERIFIZIEREN** (technisch oder
rechtlich offen). Keine Marktstudien, keine erfundenen Clever-Schnittstellen.

## Vorentscheidungen aus Stufe 1 (Rahmen dieser Analyse)

- Die App darf zunächst vollständig kostenlos sein.
- Ein Endkunden-Abo von 0,99 € gilt nicht mehr als gesetzt.
- Ein späteres Prepaid-/Guthabenmodell bleibt Option.
- „Genießen. Geben. Gutes tun." soll Mechanismus werden, nicht Claim bleiben.
- Das B2B-Werbe- und Partnergeschäft bleibt Bestandteil des Geschäftsmodells.
- Das Standortgeber-Modell wird nicht als eigenständige App-Monetarisierung verfolgt.
- CleverPay/CleverMetrics bleiben Infrastruktur; Clever wird nicht nachgebaut.

## 1. Executive Verdict

Keine der drei Thesen A/B/C trägt in der vorgelegten Form, weil alle drei eine
Verwechslung enthalten: Sie beantworten, **warum jemand bei Bördesnack24 kauft**
(Präferenz), nicht **warum er die App öffnet** (Frequenz). Impact ist ein starker
Präferenz- und ein schwacher Frequenzmechanismus — der individuelle Spendenbetrag
bewegt sich um rund 9 Cent pro Kauf und ist als wiederkehrendes Erlebnis zu klein.
Regionale Vorteile erzeugen Frequenz, sind aber weder differenziert noch bei
1–3 € Warenkorb finanzierbar. Die Kombination A+B klebt zwei mittelstarke Nutzen
zusammen, ohne einen Mechanismus zu erzeugen. Der einzige Nutzen, den weder
Apple Pay noch CleverPay strukturell liefern können, ist die **Beziehung zum
konkreten Automaten**: zu wissen, was drin ist, mitzubestimmen, was hineinkommt,
und bei einer Fehlbuchung nicht allein dazustehen. Empfehlung ist Modell D, mit
Impact als Bedeutungsschicht statt als Produktkern. Wird D nicht gewollt, lautet
die ehrliche Alternative: keine eigenständige App, sondern PWA plus Automaten-QR.

## 2. Vier Produktthesen im Vergleich

| These | Kernnutzen | regelm. Öffnungsgrund | Apple-Pay-Test | emotional | wirtschaftlich | Differenzierung | Risiko (10 = hoch) |
|---|---|---|---|---|---|---|---|
| **A Impact** | Konsum bewirkt regional etwas | 2 | 3 | 8 | 4 | 7 | 7 (Greenwashing, UWG) |
| **B Regionaler Vorteil** | günstiger, Angebote, Partner | 6 | 5 | 3 | 3 | 2 | 6 (Marge, B2B-Vertriebslast) |
| **C Impact + Vorteil** | beides zugleich | 5 | 5 | 6 | 4 | 4 | 7 (Beliebigkeit) |
| **D Mein Automat** | Verlässlichkeit + Mitbestimmung am Gerät | **8** | **8** | 7 | **7** | **9** | 5 (Datenabhängigkeit, Slot-Knappheit) |

Bewertungsgrundlage: ANNAHME, gestützt auf die Rechnung in Abschnitt 6 und den
vorhandenen Funktionsumfang. Keine Marktstudie.

**Zur These A, die entscheidende Zahl.** FAKT: 5 % des Nettoerlöses, Ø-Warenkorb
1–3 € (`core/pricing/pricing.dart`). Bei 2 € brutto sind das rund 9 Cent
Spendenwirkung je Kauf. Ein Kunde mit vier Käufen im Monat erzeugt etwa 36 Cent
monatlich, rund 4,30 € im Jahr. HYPOTHESE: Eine Zahl, die sich um Cent-Beträge
bewegt, trägt keinen wiederkehrenden Öffnungsimpuls. Ein Community-Gesamtwert bei
100 aktiven Kunden läge bei etwa 36 € im Monat; wer den prominent inszeniert,
riskiert den Greenwashing-Vorwurf. ZU VERIFIZIEREN: wettbewerbsrechtliche
Anforderungen an Spendenwerbung (Empfänger, Bezugsgröße, Zeitraum, Höhe müssen
zutreffend und klar sein).

**Zur These B.** Jeder als Rabatt ausgeschüttete Vorteil kostet bei 1–3 €
Warenkorb sofort Rohertrag; jeder Partnervorteil setzt B2B-Vertriebsleistung
voraus, die erst aufgebaut werden muss. ANNAHME: Partner-Coupons skalieren erst
ab einer Nutzerbasis, die es noch nicht gibt — B ist nicht der Start, sondern
eine Folge.

## 3. Die stärkste These: Modell D — „Mein Automat"

**Kernversprechen.** Ein Bördesnack24-Automat ist kein anonymes Gerät, sondern
*dein* Automat: Du weißt vorher, was drin ist und ob er läuft. Du bestimmst mit,
was hineinkommt. Und wenn etwas schiefgeht, bekommst du dein Geld zurück, ohne
jemanden anzurufen.

**Warum D gewinnt.** Apple Pay löst die Bezahlung, CleverPay auch. Beide lösen
nichts von dem, was *vor* und *nach* dem Kauf passiert. Drei Situationen tragen:

*Vorher.* HYPOTHESE, im ländlichen Raum belastbar: Der Automat ist ein Umweg. Wer
abends zur Sporthalle fährt, will wissen, ob das gewünschte Produkt noch da ist.
Der Wert entsteht nicht aus „Automat finden" (das kann jede Karte), sondern aus
**Produktverfügbarkeit am konkreten Gerät**. FAKT: Realtime auf `inventory` und
die View `machine_stock` existieren bereits (`docs/CUSTOMER.md`); die
Datenherkunft aus CleverMetrics ist ZU VERIFIZIEREN (K3).

*Im Störfall.* Geld gebucht, Ware hängt. Bei Apple Pay bleibt der Sticker mit der
Servicenummer. HYPOTHESE: Eine zugesagte, unbürokratische Gutschrift ist der
stärkste einzelne Vertrauensmoment, den ein Automatenbetreiber erzeugen kann —
und der billigste Loyalitätshebel, weil er nur im Ausnahmefall Geld kostet.
ZU VERIFIZIEREN: K5 (wer erstattet, in welcher Frist) und ob Bördesnack24
unabhängig davon aus eigenem Guthaben kulant gutschreiben darf.

*Danach.* Der Kunde beeinflusst das Sortiment seines Automaten — und sieht, dass
es passiert.

**Produktkern:** die Betreiber-Beziehung zum einzelnen Gerät — Verfügbarkeit,
Mitbestimmung, Wiedergutmachung.

**Nicht Produktkern:** Bezahlung (Clever), Punkte, Badges, Challenges,
Statusstufen (FAKT: als `badges`, `challenges`, `status_tiers` implementiert,
Migration 0058 — sie kosten Marge und Komplexität, ohne die Kernfrage zu
beantworten), Coupons als Selbstzweck, Kaufhistorie als eigener Bereich,
Referral. Impact gehört nicht in den Kern, sondern ist die **Bedeutungsschicht**:
Sie erklärt, warum dieser Automat und nicht der Discounter — sie erzeugt aber
keine Öffnung.

## 4. Das Killer Feature: Das Wunschfach

Der Kunde wählt einen Automaten als „seinen" und kann dort Produktwünsche
äußern. Die Wünsche eines Standorts werden gebündelt sichtbar; der Betreiber
entscheidet nach Wirtschaftlichkeit und antwortet jedem Wunsch verbindlich mit
*kommt / kommt nicht / kommt als Test*. Wird ein Wunsch eingeräumt, erhält genau
der Kunde, der ihn geäußert hat, die Nachricht: dein Wunsch steht seit heute im
Automaten. Dieselbe Mechanik trägt die Gegenrichtung: Ist ein Produkt aus, meldet
die App es dem Wünschenden, sobald es wieder da ist.

Der Mechanismus ist stark, weil er eine **echte Konsequenz** hat statt einer
symbolischen. Der Kunde verändert die physische Welt an einem Ort, an dem er
regelmäßig vorbeikommt. Das ist weder gamifiziert noch nachbaubar: Apple Pay hat
keine Sortimentshoheit, CleverPay auch nicht — nur der Betreiber hat sie, und er
verschenkt einen Teil davon bewusst.

## 5. Der Nutzungszyklus

**Auslöser →** Nachricht mit Konsequenz („Dein Wunsch ist ab heute im Automaten
Sporthalle", „Deine Eistee-Sorte ist wieder da", „Diese Woche entscheidet ihr über
zwei freie Fächer").
**App →** Bestand des eigenen Automaten, Status der eigenen Wünsche, offene
Standortabstimmung.
**Handlung →** Wunsch äußern, abstimmen, Verfügbarkeit prüfen, im Störfall
Gutschrift auslösen.
**Nutzen →** Er bekommt tatsächlich, was er wollte; er fährt nicht umsonst; er
verliert kein Geld.
**Nächster Auslöser →** jede Befüllung erzeugt neue Ereignisse: eingelöste
Wünsche, wieder verfügbare Produkte, neue freie Fächer.

Der Zyklus wiederholt sich, weil er an den Warenfluss gekoppelt ist und nicht an
eine Kampagne: Solange nachgefüllt wird, gibt es Anlässe. ANNAHME: ein bis vier
relevante Ereignisse je Kunde und Monat — genug für Bindung, wenig genug, um
nicht als Push-Spam zu wirken.

Betriebswirtschaftlich zahlt derselbe Zyklus zweimal ein: Wunsch- und
Abstimmungsdaten sind **Nachfragedaten vor dem Einkauf** statt Abverkaufsdaten
danach. Das verbessert Sortimentsentscheidungen, senkt Ladenhüter- und
MHD-Verluste und erhöht die Trefferquote bei Neulistungen. HYPOTHESE, messbar
über Abverkauf je Fach nach Wunscheinlösung.

## 6. Membership-Test

Der Kern muss kostenlos bleiben: Verfügbarkeit, Wunschrecht, Abstimmung,
Störfallgutschrift. Wer Mitbestimmung hinter eine Paywall stellt, zerstört die
Glaubwürdigkeit des Mechanismus und die Datenbasis gleich mit.

| Modell | rational begründbar, wenn … | Bewertung |
|---|---|---|
| **Abo 0,99 €** | ein Zusatznutzen existiert, der *nicht* aus Marge finanziert wird | schwach: nach 19 % USt und Store-Provision bleiben etwa 0,58–0,71 €; 5 % Rabatt zehren das ab ca. 12–14 € Monatsumsatz auf, bei Gold-Status (10 %) schon ab 6–7 €. Der treueste Kunde wird zum unrentabelsten. |
| **Prepaid-Guthaben** | Bonus einmalig auf die Aufladung statt dauerhaft auf jeden Kauf | stärkster Kandidat: kalkulierbarer Einmalrabatt, Liquidität im Voraus, Bindung durch liegendes Guthaben, vermutlich ohne Store-Provision. ZU VERIFIZIEREN: K4 (Einlösung über CleverPay), ZAG-Ausnahme begrenztes Netz, Einzweck-/Mehrzweckgutschein nach UStG, Insolvenzsicherung, Verjährung. |
| **komplett kostenlos** | Finanzierung über Vending-Rohertrag und B2B-Werbung | tragfähig für Phase 1, erzwingt aber, dass die App Frequenz und Warenkorb messbar hebt |

Rechnungsgrundlage FAKT: `Pricing.subMonthlyEur = 0.99`, `appDiscountRate = 0.05`,
Statusbonus bis +5 % (Gold) laut `core/pricing/pricing.dart`.

Falls später ein bezahltes Paket: Es darf nur Bequemlichkeit und Ersparnis
enthalten (Guthabenbonus, Vorab-Reservierung falls technisch möglich, erweiterte
Belegfunktionen für Arbeitgeberabrechnung), niemals Stimme oder Wunschrecht.

## 7. Falsifikation der eigenen Empfehlung

**1. Die Verfügbarkeitsdaten kommen nicht.**
*Annahme:* CleverMetrics liefert Bestände je Fach an ein externes Backend (K3).
*Risiko:* Ohne Echtzeitbestand bleibt nur „zuletzt befüllt am …" — der
Vorher-Nutzen bricht weg und damit die Hälfte der Öffnungsanlässe.
*Test:* Schriftliche Anfrage an Automatenland zu K3 vor jeder weiteren
Konzeptarbeit. Zwischenlösung prüfen: Planogramm plus Abverkaufsschätzung,
Genauigkeit gegen manuelle Zählung messen.

**2. Die Wunschmechanik skaliert falsch herum.**
*Annahme:* Wünsche lassen sich überwiegend erfüllen, dadurch entsteht das
Erfolgserlebnis.
*Risiko:* Bei wenigen Kunden ist jeder Wunsch erfüllbar, das Feature wirkt
magisch. Bei vielen Kunden und 30 bis 40 Fächern übersteigen die Wünsche die
Kapazität, die Ablehnungsquote steigt, aus Mitbestimmung wird Enttäuschung. Hinzu
kommen Mindestabnahmemengen im Einkauf und MHD-Risiko bei Nischenwünschen.
*Test:* Ablehnungsquote als Kennzahl führen; ab einem Schwellenwert auf
Standortabstimmung mit begrenzter Fächerzahl umstellen statt auf Einzelwünsche.
Vorab an einem Automaten über acht Wochen erproben.

**3. Der Störfall ist zu selten für Vertrauensaufbau — und zu
missbrauchsanfällig, wenn er häufig ist.**
*Annahme:* Fehlbuchungen sind selten genug, um kulante Gutschriften bezahlbar zu
machen, aber häufig genug, um erlebbar zu sein.
*Risiko:* Bei sehr wenigen Fällen erfährt fast niemand von der Garantie, sie wirkt
nur als Versprechen. Bei Missbrauch entsteht direkter Verlust.
*Test:* Störquote je 1.000 Vorgänge aus den Betriebsdaten ermitteln; Gutschriften
zunächst als Guthaben statt als Geld, mit Häufigkeitsgrenze je Konto und
manueller Prüfung ab dem zweiten Fall im Quartal.

## 8. Die „Keine App"-Gegenposition

**Warum die App falsch sein könnte.** Bei zwei bis drei Automaten und einem
Ø-Warenkorb von 1–3 € steht der App-Aufwand in keinem Verhältnis zum
Deckungsbeitrag: Entwicklung, zwei Store-Konten mit Review-Zyklen, Datenschutz-
und Einwilligungsverwaltung, laufende Pflege, Barrierefreiheitsanforderungen
(ZU VERIFIZIEREN: Anwendbarkeit des BFSG auf diese App). Der gesamte Zyklus aus
Abschnitt 5 ließe sich mit einer mobilen Website plus QR-Code am Gerät und einem
Nachrichtenkanal abbilden — ohne Installationshürde, die bei gelegentlichen
Snackkäufern die größte Barriere ist. Eine App, die einmal im Monat geöffnet
wird, ist auf dem Homescreen ein Löschkandidat.

*Einstellen oder radikal reduzieren, wenn:* nach drei Monaten weniger als etwa
ein Viertel der identifizierbaren Stammkunden die App installiert hat; wenn K1/K2
negativ ausgehen und der Kunde am Automaten gar nicht erkennbar ist; oder wenn
die Verfügbarkeitsdaten nicht verlässlich sind.

**Warum sie trotzdem richtig sein könnte.** Die App ist der einzige Ort, an dem
Bördesnack24 die Kundenbeziehung *gehört*. Clever besitzt die Zahlung, Google die
Suche, der Standortgeber den Ort. Wenn Bördesnack24 in fünf Jahren mehr als eine
Handvoll Automaten betreibt, ist die Frage nicht, ob eine App nützlich ist,
sondern ob man dann noch eine Nutzerbasis aufbauen kann, die man heute günstig
aufbaut. Das Wunschfach ist der einzige Mechanismus im bisherigen Konzept, der
eine installierte App wirklich rechtfertigt — nicht Rabatt, nicht Impact, nicht
Automatenfinder.

## 9. Offene Entscheidungen vor Stufe 3

1. **K3 — Bestands- und Transaktionsdaten:** Liefert CleverMetrics Bestände je
   Fach und Kauftransaktionen an ein externes Backend? Ohne belastbare Antwort
   ist Modell D nur zur Hälfte baubar.
2. **Erstattungshoheit (K5):** Darf Bördesnack24 eigenständig und sofort
   gutschreiben — als Guthaben, unabhängig vom Clever-Erstattungsprozess?
3. **Sortimentshoheit:** Wird ein Teil der Bestückungsentscheidung dauerhaft an
   Kunden abgegeben, inklusive der operativen Folgen im Einkauf (Mindestmengen,
   MHD, Lieferantenbindung)? Ohne klares Ja ist das Killer Feature eine Attrappe.
4. **Rabattarchitektur:** Bleibt der dauerhafte 5-%-Rabatt samt Statusstufen oder
   wird er durch einen einmaligen Prepaid-Bonus ersetzt? Beides gleichzeitig ist
   nach der Rechnung in Abschnitt 6 nicht tragbar.
5. **Spendenkonstruktion:** Standortgebundener Empfänger je Automat oder zentraler
   Pool — und in welcher Rechtsform (Sponsoring als Betriebsausgabe oder Spende
   nach § 10b EStG)? Davon hängt ab, wie der Impact kommuniziert werden darf.

## Nächster Schritt

Stufe 3 (Informationsarchitektur, Priorisierung, Umsetzung) beginnt erst nach
Entscheidung der fünf Punkte. Punkt 5 und die Prepaid-Variante aus Abschnitt 6
sind vorher durch den Skill `boerdesnack24-legal-impact` zu prüfen; technische
Änderungen zusätzlich durch `boerdesnack24-verify`.
