# Wahrheitsschicht

Einzige zulässige Quelle für Aussagen auf der Landingpage.

**Befüllungsregel:** Einträge entstehen ausschließlich aus Quelldokumenten
(Businessplan, Preisliste, Verträge, Zusagen) oder aus einer ausdrücklichen
Aussage von Philipp. **Nie** aus dem Gedächtnis eines Modells, nie aus einer
früheren Fassung dieses Skills, nie aus einer Formulierung, die schon auf der
Website steht. Eine Aussage, die hier nicht steht, wird nicht geschrieben,
sondern erfragt.

Status: `IST` belegt und aktuell · `GEPLANT` belegt, noch nicht eingetreten ·
`OFFEN` nicht belegt, Freigabe nötig · `VERBOTEN` darf nicht verwendet werden

Stand: 06.09.2026

---

## 1 Marke

| Feld | Wert | Status | Quelle |
|---|---|---|---|
| Firma | Bördesnack24 GbR, Sülzetal, Sachsen-Anhalt | IST | Businessplan |
| Claim | **Genießen. Geben. Gutes tun.** | IST | Philipp, 09/2026 |
| Alter Claim „Immer da, wenn der Hunger kommt." | — | **VERBOTEN** | abgelöst, Philipp 09/2026 |
| Geschäftszweck | Automaten für Snacks, Getränke, Eis, Heißgetränke | GEPLANT ab 2027 | Businessplan |
| Fresh Food | — | **VERBOTEN** | nicht Teil des Geschäftsmodells |

Der alte Claim ist endgültig abgelöst — auch nach Inbetriebnahme nicht wieder
verwendbar. Er steht noch in `boerdesnack24-design`; dort zu korrigieren.

---

## 2 Betriebszustand — der Zeitform-Filter

| Sachverhalt | Stand 09/2026 |
|---|---|
| Automaten in Betrieb | **0** |
| Dokumentierte Verkäufe | **0** |
| Bestätigte Standorte | **0** |
| App im App Store / Play Store | **nein** |
| Echte Fotos von Automat oder Standort | **nein** |

### Was heute erlaubt ist

| Aussage | Heute | Erlaubt ab |
|---|---|---|
| „Genießen. Geben. Gutes tun." | JA, Haltungsversprechen | — |
| „24/7 verfügbar" | NEIN | erster Automat in Betrieb |
| „66 Produkte im Sortiment" | NEIN, nur „geplantes Sortiment" | erster Automat bestückt |
| „App herunterladen" | NEIN, nur „App vormerken" | Store-Freigabe |
| „Ab 2027 in Osterweddingen" | JA, als Plan gekennzeichnet | — |
| „5 % vom Nettopreis jedes Produkts gehen an gemeinnützige Organisationen aus der Region" | JA | — |
| Foto eines Automaten an einem Standort | NEIN | echte Aufnahme vorhanden |
| Nennung eines Standortpartners | NEIN | schriftliche Zusage |

---

## 3 Erlösquellen

Vier belegte Quellen. **Erzählt werden nur drei** (Entscheidung Philipp,
09/2026) — Sponsoring ist visuell schwach und bleibt aus der Story heraus.

| Quelle | Status | Anteil 10 J. | In der Story |
|---|---|---|---|
| Warenverkauf am Automaten | GEPLANT ab 2027 | 75,7 % | ja |
| App-Abo | GEPLANT ab 2027 | 6,0 % | ja |
| Werbeflächen analog + digital | GEPLANT ab 2029 | 5,4 % | ja |
| Sponsoring | GEPLANT ab 2029 | 12,9 % | **nein** |

**Copy-Regel:** Die Seite nennt **keine Zahl** von Erlösquellen. „Drei
Quellen" wäre falsch, weil es vier gibt; „vier Quellen" wäre unverständlich,
weil nur drei gezeigt werden. Also: zeigen, nicht zählen.

Quelle aller Werte: Businessplan Bördesnack24 GbR, Stand 30.08.2026,
Abschnitt 3. Sämtliche Werte sind **Planannahmen, keine Messungen**.

---

## 4 Spendenmodell

| Feld | Wert | Status |
|---|---|---|
| Quote | 5 % | IST |
| Bezugsgröße | **Nettopreis des jeweiligen Produkts** | IST (Philipp, 07.09.2026) |
| Empfängerkreis | gemeinnützige Organisationen aus der Region | IST |
| Auswahl des Empfängers | Vorschlag und Abstimmung durch die Community | IST |
| Zugang zur Abstimmung | **jedes angemeldete Konto, auch kostenlos** | IST (Philipp, 07.09.2026) |
| Nachweisform gegenüber Kunden | — | **OFFEN** |
| Konkreter Empfänger | — | **OFFEN** |
| Liste möglicher Empfänger (60+) | — | **OFFEN**, liegt nicht im Repo |

**Berechnung, wie sie in der Datenbank steht** (Migration
`20260907110000_spende_je_produkt_netto.sql`, Nachweis in
`scripts/pruefumgebung/104_spende_je_produkt.sql`):

```
Nettopreis der Position = round(menge * bruttoeinzelpreis / (1 + satz/100), 2)
Spende des Kaufs        = round(summe der Nettopreise * 5 %, 2)
```

Der Steuersatz kommt aus `products.tax_rate` (Prozentwert). Bis zum
07.09.2026 rechnete die Datenbank aus dem Bruttobetrag des ganzen Kaufs mit
fest unterstellten 7 % — bei Getränken (19 %) fiel die Spende dadurch zu
hoch aus.

**Zur Mitbestimmung:** Sie hängt **nicht** am kostenpflichtigen Abo.
`vote_donation_cause` und `suggest_donation_cause` prüfen nur, ob jemand
angemeldet ist. Eine frühere Fassung dieser Tabelle behauptete das
Gegenteil und leitete daraus eine Offenlegungspflicht ab; die entfällt
damit. Wird die Schranke später doch gebaut, muss der Hinweis an derselben
Stelle stehen wie die Werbung mit der Mitbestimmung — nicht erst in den
AGB. Vor jeder Änderung daran: `boerdesnack24-legal-impact`.

---

## 5 Standorte (Planung)

| Jahr | Standort | Status |
|---|---|---|
| 2027 | Bahnhof Osterweddingen, Heißgetränke- und Mixautomat | GEPLANT, keine Zusage |
| 2028 | Freibad Langenweddingen, saisonal Mai–September | GEPLANT, keine Zusage |
| 2029 | Sporthalle Langenweddingen | GEPLANT, keine Zusage |
| ab 2030 | ein Automat pro Jahr, Flächen offen | GEPLANT |

Standorte dürfen als **Absicht** dargestellt werden („geplant für"), nie als
Bestand. Kein Partnername ohne schriftliche Zusage.

---

## 6 Verbotene Aussagen

- alles im Präsens über einen nicht bestehenden Betriebszustand
- Reichweiten, Passantenzahlen, Werbepreise ohne amtliche oder vertragliche Quelle
- App-Funktionen, die nicht ausgeliefert sind
- Kundenstimmen, Bewertungen, Nutzerzahlen — es gibt keine
- Fresh Food als Geschäftsbereich
- der alte Claim
- eine Zahl von Erlösquellen
- Namen realer Partner oder Marken ohne Freigabe

---

## 7 Offene Punkte

- [ ] Nachweisform der 5 % gegenüber Kunden (Bezugsgröße ist seit 07.09.2026 entschieden)
- [ ] Die Liste mit 60+ Organisationen liegt nicht im Repo — Philipp muss sie erneut bereitstellen
- [ ] Erste Standortzusage
- [ ] Store-Termin der App und ausgelieferter Funktionsumfang
- [ ] Werbeflächen: was ohne Reichweitenangabe zusagbar ist
- [ ] Echte Fotos von Automat und Standort
