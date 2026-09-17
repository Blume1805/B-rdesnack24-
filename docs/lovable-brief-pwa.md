# Briefing für Lovable — Bördesnack24-PWA (Kundenbereich und B2B)

Projektanweisung und Abnahmegrundlage. Stand 17.09.2026.

Grundlage sind ADR 0004 (Kundenfrontend auf React) und ADR 0005 (PWA ohne
Store, B2B in derselben App).

## Was gebaut wird

Die Bördesnack24-App als **Progressive Web App** in React, TypeScript und
Tailwind. Sie ersetzt das heutige Flutter-Frontend für alles, was nach außen
wirkt.

**Sie wird nicht heruntergeladen.** Es gibt keinen App-Store und keine
Installationsdatei. Wer die Adresse öffnet, kann die App über das Browsermenü
auf den Startbildschirm legen. Jeder Text muss das widerspiegeln: „app öffnen",
niemals „app herunterladen".

## Was ausdrücklich NICHT gebaut wird

Der interne Bereich bleibt vorerst in Flutter und ist **kein** Teil dieses
Auftrags: Inventur, HACCP-Protokolle, Dokumentenverwaltung, Mitarbeiter,
Finanzdashboard, Dokumentenfreigaben. Wer dort etwas entwirft, arbeitet
umsonst.

Ebenfalls nicht: Zahlungsabwicklung für Verbraucher, Abo, In-App-Käufe. Die App
ist für Endkunden kostenlos und bleibt es.

## Die drei Rollen

| Rolle | Was sie sieht | Anmeldung |
|---|---|---|
| **Gast** | nichts außer Impressum, Datenschutz, AGB, Kündigungsseite | nein |
| **Kunde** | den kompletten Kundenbereich unten | ja |
| **Werbekunde** | ausschließlich den B2B-Bereich | ja, eigene Rolle |

**Ein Werbekunde darf niemals Kundendaten sehen, ein Kunde niemals
Kampagnendaten.** Das wird serverseitig durchgesetzt, nicht im Frontend — der
Entwurf muss die Trennung aber sichtbar machen: getrennte Navigation, getrennte
Einstiegsseite nach der Anmeldung.

## Der Kundenbereich

Aus der Bestandsaufnahme der heutigen App (41 Dateien). Gebaut wird derselbe
Funktionsumfang, nicht mehr:

**Einstieg und Konto**
* Anmelden, Registrieren, Passwort vergessen
* Einwilligungen verwalten
* Stammdaten, Kundennummer (fortlaufend ab 10001)
* Onboarding in wenigen Schritten beim ersten Start

**Kaufen und sparen**
* Automatenfinder mit Navigation
* Verfügbarkeit je Automat, in Echtzeit
* Produktdetail mit Nährwerten, Allergenen, Bewertung (1 bis 5 Sterne, keine
  Freitexte)
* Persönliche Preise: Automatenpreis und App-Preis nebeneinander
* Angebote, Deals, persönliche Coupons mit Einlösecode
* Digitale Kundenkarte als QR-Code
* Treuestatus mit Meilensteinen und Stufen

**Nach dem Kauf**
* Kaufhistorie
* Belegarchiv mit Suche und Filter
* Rechnungen
* Reklamation zu einem Kauf melden

**Drumherum**
* Nachrichten und Benachrichtigungen
* Spendentopf: Stand und Abstimmung über den Empfänger
* Arbeitgeber-Sachbezug (Informationsseite)
* Chat-Assistent, regelbasiert
* KI-Transparenzseite

## Der B2B-Bereich (neu)

Bislang existiert dafür **nichts**: keine Tabelle, keine Rolle, kein Entwurf im
Code. Eine Suche über alle 65 Datenbank-Migrationen nach „werbung", „advertis",
„kampagne" und „campaign" ergab keinen Treffer. Alles hier ist neu zu entwerfen.

**Für diesen Entwurf gilt: Oberfläche ja, Funktion nein.** Es wird gezeigt, wie
es aussehen soll. Buchung, Abrechnung und Rechnungsstellung baut Lovable
**nicht** — das hängt an Steuerfragen, die noch offen sind.

* Übersicht: laufende und vergangene Buchungen
* Werbefläche wählen: digital (in der App) oder analog (am Automaten)
* Automat und Zeitraum wählen
* Werbemittel hochladen, mit Angabe der zulässigen Formate
* Status einer Buchung: eingereicht, in Prüfung, freigegeben, läuft, beendet
* Nachweis: wo die Werbung erschienen ist, in welchem Zeitraum
* Stammdaten des Unternehmens, Rechnungsanschrift, Steuernummer

**Keine erfundenen Reichweitenzahlen.** Es gibt noch keinen Automaten und damit
keine Kontaktzahlen. Wo im Entwurf eine Zahl stehen müsste, steht ein
erkennbarer Platzhalter mit dem Hinweis, dass die Messung noch aussteht. Eine
erfundene Reichweite wäre gegenüber einem Werbekunden eine Falschangabe.

## Was die App vom Server holt

Die Datenbank bleibt unverändert. Der Entwurf muss sich daran halten, was es
gibt. Vorhandene Server-Funktionen für den Kundenbereich:

`my_subscription`, `my_receipts`, `my_gamification_status`, `my_loyalty_status`,
`my_invoices`, `my_notifications`, `my_notifications_unread_count`,
`mark_notification_read`, `mark_all_notifications_read`,
`my_active_personal_offer`, `my_active_personal_offers`,
`ensure_my_special_offers`, `activate_offer`, `deactivate_offer`,
`my_donation_summary`, `my_donations_by_purchase`, `donation_pool_summary`,
`donation_causes_list`, `vote_donation_cause`, `list_news`, `my_permissions`

Direkt gelesene Tabellen: `customers`, `customer_prices`, `purchases`,
`purchase_complaints`, `offers`, `offer_activations`, `recommendations`,
`profiles`, `consents`, `contact_messages`.

**Nichts dazuerfinden.** Fehlt eine Funktion für eine Idee, ist die Idee nicht
Teil dieses Entwurfs.

## Gestaltung

Dieselben Marken-Tokens wie Landingpage und Automatenseite, damit alles als ein
Produkt erkennbar ist:

| Zweck | Wert |
|---|---|
| Primär, Schaltflächen | Gold `#FDC102` |
| Text, dunkle Flächen | Ink `#202321` |
| Flächen, Karten | Cream `#FBF8F4` |
| Linien | Börde-Grau `#DCD8D3` |
| Positive Zustände | Frisch-Grün `#5C9A3F` |

Überschriften *Bricolage Grotesque*, Fließtext *Hanken Grotesk*, **selbst
ausgeliefert** aus `public/fonts`. Keine Schrift über ein CDN.

**Sprache im Kundenbereich:** deutsch, Anrede „Du" (groß), Überschriften mit
Punkt, keine Emoji, keine Ausrufezeichen. **Sprache im B2B-Bereich:** Sie-Form.

**Keine erfundenen Zahlen.** Belegt und verwendbar sind ausschließlich:
Grundrabatt 5 %, Stufen 6 % ab 150 €, 7,5 % ab 500 €, 10 % ab 1.000 €
Gesamtumsatz. Alles andere kommt aus echten Daten oder gar nicht.

**Produktfotos gibt es nicht.** Platzhalterflächen verwenden, keine
Fremdbilder, keine generierten Bilder.

## Technik

* React, TypeScript, Tailwind. Supabase als Backend, wie gehabt.
* **Zielgröße erster Aufruf: unter 300 KB komprimiert.** Zum Vergleich: Der
  heutige Flutter-Build lädt 2,8 bis 4,1 MB. Dieses Ziel ist der halbe Grund
  für die Umstellung; wird es verfehlt, ist der Umbau umsonst.
* Vollständiges PWA-Manifest: `display: standalone`, maskable Icons,
  Theme-Farbe. Hinweis „Zum Startbildschirm hinzufügen" für Android und iOS
  getrennt, weil iOS keine Schnittstelle dafür anbietet.
* Offlinefähigkeit für das Wichtigste: Kundenkarte und aktivierte Coupons müssen
  am Automaten auch ohne Empfang anzeigbar sein. Die heutige App löst das über
  einen lokalen Zwischenspeicher; das bleibt so.
* Barrierefreiheit WCAG 2.1 AA: Kontrast ≥ 4,5:1, Bedienelemente ≥ 3:1,
  Schaltflächen mindestens 44 × 44 px, volle Tastaturbedienung, sichtbarer
  Fokus.
* Kein Tracking, keine Analysewerkzeuge, keine Werbe-Cookies. Gespeichert wird
  nur die Anmeldesitzung und Anzeigeeinstellungen — beides nach § 25 Abs. 2
  Nr. 2 TDDDG einwilligungsfrei.

## Rechtstexte

Impressum, Datenschutzerklärung und Nutzungsbedingungen kommen **aus
`docs/legal/`**, erzeugt aus einer einzigen Quelle. Sie werden nicht neu
geschrieben und nicht abgeschrieben. Fassung `v3 · 2026-09`.

## KI-Kennzeichnung

Persönliche Angebote, Empfehlungen und die Deal-Auswahl entstehen regelbasiert
und sind nach Art. 50 EU AI Act zu kennzeichnen: ein sichtbarer Chip an der
betroffenen Section, der eine Infoseite öffnet. Der Chat-Assistent trägt das
Label „Automatischer Chat-Assistent", nicht „KI" — er ist kein KI-System im
Sinne von Art. 3.

## Abnahme

* Bleibt der erste Aufruf unter 300 KB?
* Lässt sich die App auf den Startbildschirm legen und startet sie dann im
  eigenen Fenster?
* Sind Kundenkarte und aktivierte Coupons ohne Empfang sichtbar?
* Sieht ein Werbekunde nirgends Kundendaten und umgekehrt?
* Steht nirgends „herunterladen"?
* Steht nirgends eine erfundene Zahl, insbesondere keine Reichweite?
* Kommen die Rechtstexte unverändert aus `docs/legal/`?
* Tragen die algorithmisch erzeugten Bereiche den KI-Chip?
* Halten Kontraste und Bedienelemente die Mindestwerte ein?

## Reihenfolge

Nicht alles auf einmal. In dieser Folge, jeweils abnahmefähig:

1. **Kern:** Anmelden, Registrieren, Automatenfinder, Verfügbarkeit,
   Preisanzeige, Kundenkarte. Damit kann die App die heutige ablösen.
2. **Sparen:** Angebote, Coupons, Treuestatus, Meilensteine.
3. **Nach dem Kauf:** Historie, Belege, Rechnungen, Reklamation.
4. **Drumherum:** Nachrichten, Spendentopf, Sachbezug, Chat, KI-Info.
5. **B2B:** der Werbebereich, als Letztes — ohne Automaten gibt es keine
   Werbefläche zu verkaufen.
