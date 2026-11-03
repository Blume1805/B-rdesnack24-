# Abgleich Landingpage (Lovable) gegen Backend, App und Dokumentation

Stand 03.11.2026. Geprüft wurde der Lovable-Commit `a9905a6` (zuletzt bearbeitet
am 08.10.2026) gegen:

* die Produktionslinie der Datenbank, also Branch
  `claude/bordesnack24-audit-architecture-7xd3d6` mit 236 Migrationen und dem
  letzten Commit `437dadb`,
* die App `apps/mobile` und die Dokumentation auf
  `claude/bordesnack24-app-strategy-sf5yzy`. Dieser Branch enthält `main`
  vollständig.

Gelesen wurden alle Seitenbausteine:

* `index.tsx`, `Stage.tsx`, `ShareBar.tsx`, `Sortiment.tsx`, `SceneMotion.tsx`
* `HeroClaim.tsx`, `BenefitStack.tsx`, `SiteFooter.tsx`, `MotionPreference.tsx`, `__root.tsx`
* die Daten `site.ts` und `sortiment.ts`
* die fünf Rechtstexte

Das Video `business-teaser.mp4` ließ sich nicht abspielen. Die Lovable-Adressen
sind aus der Arbeitsumgebung gesperrt. Sein Inhalt ist nach Lovables eigener
Beschreibung vom 08.10.2026 bewertet.

## Was Lovable seit dem letzten Abgleich (01.10.2026) geändert hat

Alle Änderungen beauftragte Philipp direkt in Lovable, vom 07. bis 08.10.2026:

| Änderung | Folge für die Dokumentation |
|---|---|
| Überschrift im Kopf: „Genießen. Geben. Gutes tun." statt „Versorgung vor Ort. Wert für den Ort." | Projektwissen, `MOTION.md` und App nennen noch den alten Claim (siehe B-4) |
| Abschnitt „Für Standortgeber": die drei Zusagen (bekommen, kosten, brauchen) und die Scroll-Bühne entfernt, ersetzt durch ein eigenes Lovable-Video (`business-teaser`, KI-Szenen, Musik, Geräusche) | V-017-b „Nichts." hat sich auf der Seite erledigt, weil der Satz entfallen ist. Lovable-Auftrag vom 01.10.2026 (Erklärfilm, Teil B Strom) ist damit gegenstandslos |
| Abschnitt „Wer steht dahinter" entfernt | — |
| Navigation (`SectionNav`) und Schalter „Bewegung" entfernt. Eine früher gespeicherte Wahl wird nur noch gelesen | `MOTION.md`, `scrolling-funktionen.md`, Projektwissen beschreiben beides noch |
| Werbung: Logo auf Coupons und Angeboten, gesponserte Coupons, News als „geplant" | siehe B-6 |
| Kartenstapel der App-Vorteile neu (`BenefitStack`) | — |

## Befunde

| Nr. | Stelle auf der Seite | Backend, App, Dokumentation | Bewertung |
|---|---|---|---|
| **B-1** 🔴 | „5 % Dauerrabatt. Auf jeden Kauf, kostenloses Konto genügt." · „Mit kostenlosem Konto in der App 5 % günstiger." · Nutzungsbedingungen Ziffer 5 und 6: App unentgeltlich, Vorteile für alle Registrierten | **Produktion:** Dauerrabatt (`card_entitlements`, `my_subscription_benefits`), Coupon-Aktivierung (`activate_offer`: „Abo erforderlich") und Treueboni (`grant_loyalty_bonuses`: `return 0`) hängen an `app.has_subscription()`. Monats- und Jahresabo sind in `app.abo_angebotszeitraeume` als „Dauerangebot" offen. Die Freischaltung für alle (`0065_free_benefits_for_all`, 16.09.2026) gibt es **nur in der main-Linie**, die nicht die Produktion ist | Wer heute ein kostenloses Konto anlegt, bekommt weder Dauerrabatt noch Coupons noch Treueboni, und kann ein Abo abschließen, das es laut Seite und Nutzungsbedingungen nicht gibt. Irreführung nach § 5 UWG und Widerspruch zu den eigenen Bedingungen. `docs/COMPLIANCE.md` V-018 |
| **B-2** 🔴 | Video: Push-Meldung „Danke für deine 5%." | Die 5 % spendet Bördesnack24 aus dem Nettoerlös, nicht die Kundschaft (ADR 0007, Projektwissen). Die App hat **keine** Push-Benachrichtigungen (Nutzungsbedingungen Ziffer 2: „Nicht enthalten: Push-Benachrichtigungen") | Der Film zeigt eine Funktion, die es nicht gibt, und schreibt die Spende der Kundin zu. § 5 UWG. Vorschlag: „Danke. 5 % des Nettoerlöses gehen an die Region." als Einblendung, nicht als Push-Meldung. V-018 |
| **B-3** 🔴 | „Automatenfinder: Echtzeit-Bestand, Nährwerte und Allergene." | Nährwerte und Allergene gibt es (`0018`). **Echtzeit-Bestand für Kunden gibt es in der Produktion nicht:** `machine_availability` (V-016-d) liegt nur als vorbereitete Migration vor (Runbook M nicht ausgerollt). Die live laufende App liest `machine_stock`, das Kunden leer zurückgibt | Bekannt als V-016-d. Bis zum Ausrollen „Echtzeit-Bestand" streichen oder „bald" ergänzen |
| **B-4** 🟡 | Kopf-Überschrift „Genießen. Geben. Gutes tun." | App: Anmeldung und Startseite zeigen „Versorgung vor Ort. Wert für den Ort.", ebenso die Briefvorlage `brief_docx.ts`. Projektwissen in Lovable und im Repository, `MOTION.md` und der PDF-Skill nennen den alten Claim | Rechtlich unkritisch. Zwei Leitsätze nebeneinander. Entscheidung P-5 offen: überall umstellen oder nur auf der Landingpage? |
| **B-5** 🟡 | Video: Automat am Bahnhof, Coupon per QR-Code, Kaffee | Bahnhof Osterweddingen ist im Businessplan der erste Standort, aber nicht vereinbart. Die Seite kennzeichnet den Film als „KI-Zukunftsvisualisierung, Menschen und Standorte nicht real, in Vorbereitung" | Durch den Hinweis gedeckt. Der Coupon im Film setzt B-1 voraus |
| **B-6** 🟡 | Werbung „geplant": Logo auf Coupons und wöchentlichen Angeboten, gesponserte Coupons mit eigenen Preisen, News (Stellenanzeigen, Termine) | Werbekatalog der Produktion (`werbekatalog_startbestand`): Unternehmensprofil mit Logo, Coupon-Kampagne, App-Platzierung, QR-Kampagne, Display, Werbefläche, Branding, Sponsoring. **Kein Produkt für News-Beiträge von Firmen**, kein Logo auf wöchentlichen Angeboten | Als „geplant" zulässig. Vor dem Verkauf im Katalog anlegen. „Eigene Preise" bei gesponserten Coupons braucht eine PAngV-Prüfung, wer den Preis setzt und ausweist |
| **B-7** 🟡 | Video startet automatisch, läuft 20 s in Schleife, nur ein Ton-Knopf | Projektwissen und `MOTION.md`: Bewegung abschaltbar. Der Schalter ist entfernt, es zählt nur noch die Geräte-Einstellung | WCAG 2.2.2 verlangt bei automatisch laufender Bewegung über 5 s eine Pause-Möglichkeit. Pause-Knopf ergänzen |
| **B-8** 🟡 | Datenschutzerklärung der Seite | Nennt den Hoster nicht, auch nicht die Speicherdauer der Protokolle und ob Daten in ein Drittland gehen. Der AV-Vertrag mit dem Hoster ist laut COMPLIANCE noch offen | Art. 13 Abs. 1 lit. e und Abs. 2 lit. a DSGVO. Vor der Veröffentlichung ergänzen |
| **B-9** ⚪ | Unbenutzte Videodateien im Projekt: `standortgeber-referenz.mp4` (gesperrt, R-10), `standortgeber.*`, `business-model*` | — | Aufräumen, vor allem das gesperrte Referenzvideo |
| **B-10** ⚪ | Kopfbild trägt den Slogan im Bild, die Überschrift wiederholt ihn | — | Gestaltung, kein Fehler |

## Ohne Abweichung geprüft

| Aussage | Beleg |
|---|---|
| Statusstufen 6 % ab 150 €, 7,5 % ab 500 €, 10 % ab 1.000 € | `app.status_tiers()` (+1 / +2,5 / +5 auf 5 % Dauerrabatt). Gilt erst, wenn B-1 behoben ist |
| Startpreise: Snacks ab 0,80 €, Kaltgetränke ab 1,50 €, Heißgetränke ab 1,30 €, Eis ab 1,00 € | Katalog `product_catalog_price_list` mit `fix_capri_pasta_penne` (Capri ist Eis); alle zwölf Beispielprodukte vorhanden |
| Pfand-Schalter `pfandGetrennt = false` | Runbook M nicht ausgerollt, Stellung richtig |
| Spende: 5 % des Nettoerlöses, Kundschaft schlägt vor und stimmt ab, einmal im Jahr an die drei Zwecke mit den meisten Stimmen | `spende_je_produkt_netto`, `donation_causes_stammdaten`, `spendenvorschlaege_nicht_oeffentlich`; Regel in App und ADR 0007 (26.09.2026); falsche Beispiel-Nachrichten in der Produktion ausgeblendet |
| Betriebsstand „Vorbereitung", kein Automat in Betrieb | `site.betriebsstatus` |
| Impressum, Nutzungsbedingungen, Widerruf, Konto beenden | wortgleich mit Fassung v4 in `docs/legal/` (Stichproben in allen Ziffern) |
| Digitale Belege, Kundenkarte, Coupons, wöchentliche Angebote, Bewertungen | in Produktion und App vorhanden |

## Folgen für andere Dokumente (Stand 03.11.2026, noch nicht nachgezogen)

* `docs/auftraege/lovable-projektwissen.md` und das Projektwissen in Lovable:
  Claim, `SectionNav`, `MotionToggle`, `Stage` als M06 und die Liste der
  aktiven Muster stimmen nicht mehr. Nachziehen erst nach Entscheidung P-5.
* `docs/auftraege/lovable-auftrag-2026-10-01-erklaerfilm.md`: überholt, weil
  Philipp in Lovable ein eigenes Video beauftragt hat.
* `motion/ABWEICHUNGEN.md` R-9: Der Satz „Nichts." steht nicht mehr auf der Seite.
