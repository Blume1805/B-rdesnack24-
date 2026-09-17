# ADR 0005 — Auslieferung als PWA ohne App-Store, B2B-Werbung in derselben App

- **Status:** Akzeptiert
- **Datum:** 2026-09-17

## Kontext

Am 17.09.2026 hat der Gesellschafter zwei Punkte klargestellt und eine
Entscheidung getroffen.

**Zur Auslieferung.** Es besteht weder ein Apple- noch ein
Google-Entwicklerkonto, und es gibt keine `ios/`- oder `android/`-Ordner im
Projekt. Die App läuft bereits heute ausschließlich im Browser; `manifest.json`
ist ein vollständiges PWA-Manifest. Die Umstellung auf eine kostenlose App
(V-007) hat zusätzlich den einzigen zwingenden Grund für einen Store beseitigt:
die In-App-Kaufpflicht.

**Zum B2B-Geschäft.** Unternehmenskunden sollen digitale und analoge Werbung
erwerben. Bislang war dafür ein eigenes Lovable-Projekt („Bördesnack24 Partner
Portal") angelegt. Der Gesellschafter hat entschieden, das Angebot stattdessen
**in dieselbe App** zu integrieren.

## Entscheidung

**1. Die App wird als PWA ausgeliefert, nicht über App-Stores.** Der Zugang
erfolgt über eine Adresse im Browser, mit der Möglichkeit, sie auf dem
Startbildschirm abzulegen. Es wird kein Entwicklerkonto angelegt.

**2. Das B2B-Werbeangebot wird Teil derselben App**, getrennt über eine eigene
Rolle. Das Projekt „Partner Portal" wird nicht weiterverfolgt.

## Konsequenzen

### Zur PWA

- Kein Store-Prüfverfahren, keine Jahresgebühr, keine Store-Provision, keine
  zweite und dritte Plattform zu pflegen.
- Keine Entdeckung über die Store-Suche. Für ein lokales Automatengeschäft ist
  das kein Verlust: Niemand sucht im App Store nach Snackautomaten in
  Osterweddingen. Der Einstieg ist der QR-Code am Gerät und die Landingpage.
- **Sprachlich wichtig:** Eine PWA wird nicht „heruntergeladen". Es gibt keine
  Installationsdatei. Wer sie öffnet, kann sie auf den Startbildschirm legen.
  Texte, die von „Download" sprechen, erzeugen eine falsche Erwartung und sind
  entsprechend zu formulieren („App öffnen").
- Push-Benachrichtigungen sind derzeit nicht implementiert. Auf iOS setzen sie
  voraus, dass die App zuvor auf dem Startbildschirm abgelegt wurde. Wer später
  auf Push setzt, muss das einkalkulieren.

### Zur B2B-Werbung in derselben App

- **Das Rollenmodell muss erweitert werden.** `app.role_key` kennt heute
  `system_admin`, `shareholder`, `employee`, `customer`. Für Werbekunden kommt
  eine Rolle hinzu. Das ist eine Änderung an der Sicherheitsschicht und
  durchläuft `boerdesnack24-security-regression` — ein Werbekunde darf unter
  keinen Umständen Kundendaten sehen, und ein Kunde keine Kampagnendaten.
- **In der Datenbank existiert bislang nichts dafür.** Eine Suche über alle 65
  Migrationen nach „werbung", „advertis", „kampagne", „campaign" ergab keinen
  Treffer. Buchung, Kampagne, Werbemittel, Laufzeit, Abrechnung und Nachweis
  sind vollständig neu zu entwerfen.
- **Die Zahlungsabwicklung kehrt zurück**, die mit V-007 gerade entfallen war.
  Anders als beim Verbraucher-Abo ist sie hier einfacher: Werbeleistungen an
  Unternehmen werden per Rechnung abgerechnet, nicht per Checkout. Kein
  Widerrufsrecht, keine Button-Lösung, keine Altersprüfung.
- **Eigene Vertragsbedingungen für Geschäftskunden.** Die Nutzungsbedingungen
  `v3` gelten für Verbraucher. Werbeleistungen brauchen eigene AGB mit
  Leistungsbeschreibung, Laufzeit, Gestaltungsfreigabe, Haftung für
  überlassene Werbemittel und Zahlungsbedingungen.
- **Umsatzsteuer.** Werbeleistungen unterliegen dem Regelsteuersatz von 19 %,
  unabhängig vom Steuersatz der verkauften Waren. Bei Leistungen an Unternehmen
  im EU-Ausland ist das Reverse-Charge-Verfahren zu prüfen. Das ist mit der
  Steuerberatung zu klären, bevor die erste Rechnung gestellt wird.
- **Analoge Werbung am Automaten** (Aufkleber, Displayfläche) ist keine
  digitale Leistung. Sie wird über dieselbe Buchungsstrecke verkauft, aber die
  Leistung erbringt der Betrieb vor Ort. Der Unterschied gehört in die
  Leistungsbeschreibung.

### Offener Einwand, der bestehen bleibt

Die Rechnung aus `docs/strategy/2026-09-15-fundament-und-finanzlogik.md` hat
ergeben, dass In-App-Werbung das Geschäft bei dieser Größenordnung nicht tragen
kann: Bei realistischer Nutzerzahl fehlt etwa der Faktor 28. Das spricht nicht
gegen die Entscheidung, das Angebot in der App zu führen. Es spricht dagegen,
Aufwand dafür einzusetzen, **bevor** Automaten stehen — denn ohne Automaten
gibt es weder Werbefläche noch Reichweite zu verkaufen.

Die Reihenfolge lautet deshalb: erst der Kern der App, dann Standorte, dann
Werbung. Wird sie umgedreht, entsteht ein Verkaufsprodukt ohne Ware.
