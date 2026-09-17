# Bördesnack24 — Store-Listing (App Store / Google Play)

Stand: 16.09.2026 · Texte auf Deutsch (einzige Store-Sprache zum Start).

> **Geändert am 16.09.2026.** Die App wird unentgeltlich angeboten; es gibt
> keine Abo-Modelle und keine In-App-Käufe mehr (Beschluss vom selben Tag,
> siehe `docs/COMPLIANCE.md`, V-007). Alle Preisangaben sind aus diesem Text
> entfernt — eine Preisangabe im Store, die es nicht gibt, wäre irreführend
> (§ 5 UWG) und würde die Store-Prüfung zusätzlich angreifbar machen.
>
> ## ⚠️ Eine Store-Einreichung ist derzeit gar nicht vorbereitet
>
> Stand 16.09.2026, geprüft im Repository:
>
> * Es gibt **keine** Ordner `apps/mobile/ios/` und `apps/mobile/android/`.
>   Ohne sie lässt sich weder eine iOS- noch eine Android-App bauen. Vorhanden
>   ist ausschließlich `apps/mobile/web/`.
> * Es besteht **kein** Entwicklerkonto — weder App Store Connect noch Google
>   Play Console (Auskunft des Gesellschafters vom 16.09.2026).
> * Die App läuft als **Web-App** und wird über `scripts/deploy_web.sh` nach
>   GitHub Pages ausgeliefert. `web/manifest.json` ist ein vollständiges
>   PWA-Manifest (`display: standalone`, maskable Icons, Theme-Farbe): Die App
>   lässt sich damit auf dem Startbildschirm ablegen und öffnet sich wie eine
>   installierte App — ohne Store, ohne Konto, ohne Prüfverfahren.
> * Push-Benachrichtigungen sind **nicht** implementiert (`firebase_core` und
>   `firebase_messaging` sind in `pubspec.yaml` auskommentiert).
>
> **Dieses Dokument beschreibt daher einen Weg, der noch nicht beschritten
> wird.** Es bleibt als vorbereiteter Text erhalten, falls eine
> Store-Veröffentlichung später beschlossen wird. Bis dahin ist es kein
> Arbeitsauftrag. Die Screenshots, das 1024er-Icon und der Demo-Zugang fürs
> Review-Team sind für diesen Fall bereits vorhanden.
>
> **Wichtig für die Entscheidung:** Die Unentgeltlichkeit der App beseitigt die
> Pflicht zu In-App-Käufen und die Store-Provision — sie beseitigt **nicht**
> die Kontopflicht. Auch eine kostenlose App braucht für eine Listung ein
> Apple-Entwicklerkonto (Apple Developer Program, derzeit jährliche Gebühr) und
> ein Google-Play-Entwicklerkonto (einmalige Registrierungsgebühr). Wer ohne
> Stores auskommen will, bleibt bei der Web-App — das ist der heutige Zustand
> und funktioniert.

## App-Name & Untertitel

| Feld | Wert | Limit |
|---|---|---|
| App-Name | Bördesnack24 | 30 Z. (App Store) |
| Untertitel (App Store) | Snacks & Getränke — immer 5 % sparen | 30 Z. |
| Kurzbeschreibung (Play) | Snackautomaten in der Börde: 5 % sparen, Deals, Punkte — kostenlos. | 80 Z. |

## Beschreibung (beide Stores)

Bördesnack24 — immer da, wenn der Hunger kommt.

Die App zu den Bördesnack24-Automaten in Sülzetal und Umgebung: Snacks,
Getränke und Kaffeespezialitäten rund um die Uhr — mit der App wird jeder
Einkauf günstiger.

DEINE VORTEILE MIT KOSTENLOSEM KONTO
• Immer 5 % App-Preis auf alle Produkte — an jedem Automaten
• Lebenslanger Status-Rabatt obendrauf: 6 % ab 150 € Gesamtumsatz,
  7,5 % ab 500 €, 10 % ab 1.000 € — ohne Reset
• Frühstücks- & Feierabend-Deals sowie Tages- und Wochenangebote mit
  weiteren 10 % Rabatt
• Treuepunkte: 1 Cent Umsatz = 1 Punkt, Meilenstein-Coupons mit
  5–25 % Rabatt
• Persönliche Angebote und ein Geschenk zum Geburtstag
• Digitale Belege zu jedem Kauf und schnellere Reklamationsabwicklung
• Kein Abo, keine Laufzeit, keine Kündigung — Anmelden genügt

RUND UM DEN EINKAUF (ebenfalls im kostenlosen Konto)
• Automatenfinder mit Navigation
• Produktbestand in Echtzeit — sehen, was da ist, bevor du losgehst
• Produktinfos mit Nährwerten und Allergenen
• News und Community-Favoriten

GUTES TUN INKLUSIVE
5 % jedes Netto-Umsatzes fließen in einen Spendentopf — die Community
entscheidet mit, wohin die Spende geht.

TRANSPARENZ
Personalisierte Empfehlungen sind in der App als „KI" gekennzeichnet;
Details stehen auf der KI-Info-Seite. Der Chat-Assistent ist regelbasiert —
keine generative KI.

Bördesnack24 GbR · Sülldorfer Str. 3A · 39171 Sülzetal OT Osterweddingen

## Keywords (App Store, 100 Z.)

snackautomat,snacks,getränke,kaffee,automat,rabatt,coupons,treuepunkte,börde,magdeburg,sülzetal

Hinweis: „gratis"/„kostenlos" bewusst **nicht** als Keyword — Apple und Google
werten Preisaussagen in Keywords regelmäßig ab, und der Preis steht ohnehin am
Store-Eintrag.

## Kategorie & Altersfreigabe

* Kategorie: Essen & Trinken (primär), Shopping (sekundär)
* Altersfreigabe: 4+ / USK 0 — kein Alkohol-Verkauf über die App selbst;
  Produkte mit Alkohol (Bier) werden nur am Automaten mit
  Altersverifikation abgegeben. Bei der Store-Prüfung ggf. 17+/18+
  wählen, falls die Produktliste in der App als „Alkohol-Bezug" gewertet
  wird — Formulierung im Review-Feld: „Verkauf und Altersprüfung erfolgen
  ausschließlich am Automaten, nicht in der App."

## Datenschutz-Angaben (App Privacy / Data Safety)

* Datenschutzerklärung (URL): in der App unter Profil → Rechtliches;
  öffentliche URL vor Einreichung auf boerdesnack24.de veröffentlichen.
* Erhobene Daten (mit Konto verknüpft): Name, E-Mail, Geburtsdatum
  (optional), Kaufhistorie, Kundennummer.
* Zweck: App-Funktionalität (Konto, Kundenkarte, Rechnungen),
  Personalisierung (Angebote — für angemeldete Konten, Widerspruch möglich).
* Kein Tracking über fremde Apps/Websites, keine Werbe-SDKs,
  keine Datenweitergabe an Dritte außer Auftragsverarbeiter
  (Supabase/EU-Region — AV-Vertrag).
* Löschung: Konto-Deaktivierung über Kontaktformular, Löschung nach
  30 Tagen (in der Datenschutzerklärung beschrieben).

## Screenshots (fertig in `screenshots/`)

| Datei | Format | Motiv |
|---|---|---|
| iphone_1_login.png | 1290×2796 (6,7") | Login mit Marken-Hero |
| iphone_2_kunde.png | 1290×2796 | Kundenbereich: Vorteile + Suche |
| iphone_3_finanzen.png | 1290×2796 | Finanz-Dashboard (interne Ansicht) |
| iphone_4_verwaltung.png | 1290×2796 | Verwaltung: Betriebsprotokolle |
| ipad_1_login.png … | 2048×2732 (12,9") | identische Motive für iPad |

Hinweis: Die Screenshots zeigen Demo-Daten (Mock). Für die Einreichung
empfohlen: Motive 1 und 2 zuerst; die internen Ansichten (3/4) nur
verwenden, wenn die App als Team-App beworben wird — für ein reines
Kunden-Listing besser Bestand/Beispielrechnung vom echten Gerät
nachschießen.

## Sonstiges für die Einreichung

* App-Icon: `app-icon-1024.png` (1024×1024, ohne Alpha für App Store).
* Demo-Zugang für das Review-Team: demo-kunde@boerdesnack24.app +
  Passwort (im App-Store-Connect-Review-Feld hinterlegen, nicht im
  Listing).
* Support-URL/E-Mail: boerdesnack24@gmail.com.
* Hinweis fürs Review (Preise): Die App enthält **keine In-App-Käufe und
  keine Abonnements**. Sie ist vollständig unentgeltlich; die Rabatte gelten
  für Käufe an den eigenen Automaten und werden dort verrechnet, nicht in der
  App. Es ist daher weder StoreKit noch Play Billing eingebunden. In App Store
  Connect ist „In-App-Käufe: Nein" zu setzen, in der Play Console „Enthält
  In-App-Käufe" **aus**.
  Bis zum 16.09.2026 waren drei Abo-Modelle vorgesehen (0,99 €/Monat,
  9,99 €/Jahr, 79,99 € Lifetime). Sie wurden nie verkauft — eine Bezahlanbindung
  bestand zu keinem Zeitpunkt. Falls im Entwicklerkonto bereits IAP-Produkte
  angelegt wurden, sind sie vor der Einreichung zu löschen oder zu
  deaktivieren; sonst prüft der Store gegen eine Zahlungsfunktion, die es nicht
  gibt.
