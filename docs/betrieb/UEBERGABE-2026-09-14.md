# Übergabe an die nächste Sitzung — Stand 14.09.2026

Dieses Dokument ist für eine **neue Claude-Sitzung** geschrieben, die
diesen Stand ohne Vorgeschichte aufnehmen soll. Es nennt, was getan ist,
was offen ist, und die Fallen, in die ich in dieser Sitzung getappt bin —
damit sie nicht zweimal zuschnappen.

Arbeitszweig: `claude/bordesnack24-audit-architecture-7xd3d6`
Letzte Commits: `f3df9a3`, `fe3d908` (beide gepusht).

---

## 1. Was in dieser Sitzung entstanden ist

### Automatenzahlung und dynamische Preise

Das Bezahlsystem der Automaten ist das **CCV IM30**, betrieben mit der
Software **CleverMetrics** von Automatenland; die Kartenabwicklung läuft
über **CleverPay**. Nicht „CCV" als Ansprechpartner — das Gerät kommt von
CCV, die Schnittstelle von Automatenland.

Die tragende Entscheidung: **Ein Kartenterminal weiß nicht, wer davor
steht, und darf es nach PCI DSS auch nicht wissen.** Daraus folgen zwei
getrennte Preise:

* **Automatenpreis** — produktgebunden: Grundpreis plus MHD-Abschlag
  (10 Tage → 20 %, 3 Tage → 40 %). Steht am Gerät.
* **Kundenpreis** — kontogebunden: zusätzlich Dauerrabatt und Gutscheine.
  Erreicht den Automaten **nur** über den app-geführten Kauf mit einem
  einmaligen Freigabecode (3 Minuten gültig, nur als Hash gespeichert).

Drei Geldwege, die getrennt gebucht werden: Karte → CleverPay → Konto
(abzüglich Gebühren) · Bargeld bleibt im Automaten bis zur Leerung ·
App-Kauf wie Karte, aber mit Kundenzuordnung.

Migrationen: `20260914090000_automat_bezahlung_und_dynamische_preise.sql`,
`20260914140000_bargeld_und_preisausspielung.sql`.
Edge Function: `supabase/functions/terminal-webhook/`.
Architektur: `docs/architektur/AUTOMAT-BEZAHLUNG-UND-PREISE.md`.

### Vier Befunde, die eine Codelektüre nicht gefunden hätte

| ID | Befund | Stand |
| --- | --- | --- |
| **S-25** | Alle fünf neuen Tabellen trugen die Supabase-Standardrechte `SELECT, INSERT, UPDATE, DELETE` für `authenticated`. Ein `revoke … from public, anon` entfernt die **nicht**. Prüfung T3 lieferte `ROWS:0` statt `42501` — kein Datenabfluss, aber das Recht war da | behoben, nachgewiesen |
| **S-26** | `pruef.lies()` wird von acht Prüfskripten aufgerufen und war **nirgends im Repository definiert**. Die Skripte brachen mittendrin ab; ohne `ON_ERROR_STOP` sah der Lauf unauffällig aus | behoben |
| **S-27** | `10_pruefdaten.sql` legte den Automaten `3b9ac0eb…` und die Firma `bb000000…` nicht an, die `102` und `100` voraussetzen | behoben |
| **S-28** | `Pricing.lifetimePubliclyOffered = false` steuerte **nur die Anzeige**. `choose_subscription_plan` kannte den Schalter nicht — ein angemeldetes Konto konnte das Lifetime-Abo zu 79,99 € per direktem RPC-Aufruf abschließen | im Repo behoben, **in der Produktion offen** |

S-28 ist der wichtigste. Gefunden wurde er nicht bei der
Sicherheitsprüfung, sondern beim Nachlesen für einen Rechtstext-Entwurf.

### Angebotszeiträume für Abo-Modelle

Philipps Vorgabe vom 14.09.2026: **Lifetime bleibt im Code und wird
voraussichtlich für einzelne Zeiträume freigeschaltet.**

Umgesetzt als `app.abo_angebotszeitraeume` — kein Zeitraum heißt nicht
wählbar; durchgesetzt in `choose_subscription_plan`; die Kunden-App fragt
über `abo_angebote()` nach, statt es selbst zu wissen. Ohne das bräuchte
jede Aktion einen Store-Durchlauf.

Migration `20260914170000_abo_angebotszeitraeume.sql`.

**Merksatz für die Pflege:** Immer ein `bis` setzen, nie `null`. Ein
offenes Ende ist wieder ein Schalter, nur an anderer Stelle.

---

## 2. Nachweise — was tatsächlich gelaufen ist

Alles gegen einen **Neubau von Null**, nie gegen die Produktion:

* 233 von 233 Migrationen
* 24 von 24 Prüfskripten, **0 psql-Fehler**, 0 Vorfälle
* `105_automat_bezahlung.sql` — 28 Urteile OK
* `106_automat_isolation.sql` — 22 Urteile OK (IDOR/BOLA mit zwei echten
  Kundenkonten)
* `107_abo_angebotszeitraum.sql` — 10 Urteile OK
* `deno test supabase/functions/terminal-webhook/adapter_test.ts` —
  **10 von 10**, zum ersten Mal überhaupt ausgeführt
* Flutter: `bs24_kern` 161, `kunden-app` 39, `gesellschafter-app` 41
* `prueffe_rechtstexte.sh` — 7 von 7 Rechtstexten unverändert

---

## 3. Was offen ist

### Vorrangig

1. **Migration `20260914170000` ausrollen.** Bis dahin kann in der
   Produktion ein angemeldetes Konto ein 79,99-€-Abo abschließen, das
   nicht angeboten wird.
2. **Supabase-Verbindung autorisieren.** Der MCP-Konnektor ist nicht
   angemeldet; **alle** Migrationen dieser Sitzung und mehrere frühere
   sind nicht ausgerollt.
3. **Vertragslage CleverPay klären** — und zuerst, **mit wem**:
   Automatenland, CCV oder ein dritter Zahlungsdienstleister. Davon hängt
   ab, ob CleverPay Auftragsverarbeiter nach Art. 28 DSGVO oder eigener
   Verantwortlicher ist, und daran hängen Vertrag, Rechtsgrundlage,
   Empfängerangabe und Verarbeitungsverzeichnis. **Das ist nicht durch
   Formulieren lösbar** und hat die längste Vorlaufzeit.

### Rechtstexte — Entwürfe liegen vor, Freigabe fehlt

`docs/rechtstexte/ENTWURF-2026-09-AUTOMATENZAHLUNG.md`:

* **Teil A** wirkt sofort: Zusatz „nur zeitweise verfügbar" beim
  Lifetime-Abo in `zahlung.md` und `nutzungsbedingungen.md`.
  `widerruf.md` bleibt unverändert — § 356 Abs. 5 BGB gilt weiter.
* **Teil B** erst bei Inbetriebnahme des ersten Kartenterminals:
  „Wir haben auch keinen Zahlungsdienstleister eingebunden" austauschen,
  Zahlungsdienst als Empfänger aufnehmen, Abschnitt „Preise am Automaten"
  ergänzen, Freigabecodes beschreiben.

**Kein Satz daraus geht ohne Philipps Freigabe in einen Rechtstext.**

Offen ist außerdem die **Fehlermeldung** „Dieses Abo-Modell wird derzeit
nicht angeboten." — von mir gesetzt, damit die Lücke nicht offenbleibt,
während eine Formulierung aussteht. Sichtbarer Text, also Philipps
Entscheidung.

### Technisch offen

* **`vend_freigaben` im Löschkonzept.** Eine nicht eingelöste,
  abgelaufene Freigabe ist kein Beleg → löschen (Vorschlag: 30 Tage).
  Eine eingelöste hängt an einem buchungsrelevanten Vorgang → nach
  Art. 18 DSGVO **sperren**, nicht löschen. Der bestehende Löschprozess
  (CUST-008) kennt die Tabelle nicht. **Erst den Mechanismus bauen, dann
  den Text schreiben.**
* **Negativmatrix N1–N12 für `terminal-webhook`** auf HTTP-Ebene — geht
  erst gegen die ausgerollte Funktion.
* **KI-Chip „Automatisch"** an der Preisanzeige, sobald der Bildschirm
  gebaut wird (Pflicht nach `CLAUDE.md`, Art. 50 EU AI Act), plus Absatz
  im `AiInfoScreen`.
* Aus früheren Sitzungen: acht rote Zeilen in
  `docs/FUNCTION-VERIFICATION.md` (Auth-Einstellungen, Resend-Testpostfach,
  Store-Sandbox), Cremehintergrund-Korrektur auf der Landingpage,
  Teil C der Landingpage (drei Übergänge), die Hub-Befunde.

### Zählstand

```
🔴 ROT: 20   🟡 GELB: 0   🟢 GRÜN: 59
```

Das System Green Gate ist **nicht** erreicht. Die elf AUT-Zeilen sind
nicht rot, weil ein Test fehlschlug — bis auf den HTTP-Lauf sind alle
technischen Nachweise geführt. Sie sind rot, weil der Rechtsteil offen
ist.

---

## 4. Umgebung — was eine neue Sitzung wissen muss

| Sache | Stand |
| --- | --- |
| Flutter 3.47.2 | unter `/opt/flutter`, **nicht** im PATH: `export PATH=/opt/flutter/bin:$PATH` |
| Supabase MCP | **nicht autorisiert.** Migrationen werden geschrieben, nicht ausgerollt |
| Prüfumgebung | `scripts/pruefumgebung/README.md`. `initdb`/`pg_ctl` verweigern root → `su postgres -c …`. BASE `/var/tmp/bs24pg`, Port 55432, `PGBIN=/usr/lib/postgresql/16/bin`. Die Einspielschleife ersetzt `pg_cron` |
| Deno | war **nicht** installiert. Nachinstallieren: `curl -fsSL https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip -o /tmp/deno.zip && unzip -o -q /tmp/deno.zip -d /usr/local/bin` |
| `deno.land` | vom Egress-Proxy **gesperrt**. `jsr.io` ist frei — die Tests beziehen ihre Zusicherungen deshalb von JSR |
| Ebenfalls gesperrt | `automatenland.shop`, Lovable-Vorschauen, `www.google.com` |
| Lovable | Landing `0c068d85-ef58-4450-a511-3e7ac1d0446d`, Hub `d5033021-6dce-4044-8bf6-bb50d80aa8ff`. `send_message` läuft nach 60 s in einen Timeout, **wird aber zugestellt** — nicht erneut senden |

### Fallen, die in dieser Sitzung zugeschnappt sind

1. **Supabase-Standardrechte.** Jede neue Tabelle bekommt automatisch
   Rechte für `authenticated`. `revoke … from public, anon` genügt nicht.
2. **Das Prüfwerkzeug verfällt wie der Code**, nur merkt es niemand: ein
   verfallenes Werkzeug erzeugt keine roten Zeilen, sondern gar keine.
   Der **vollständige** Durchlauf gehört zu jeder Migrationsänderung.
3. **Berechtigungsschlüssel, die es nicht gibt.** `finance.read` und
   `customers.read` existieren nicht. Real sind unter anderem
   `payments.view`, `payments.manage`, `finance.view`, `finance.export`,
   `cash.collect`, `prices.manage`, `customers.manage`,
   `inventory.view/edit`.
4. **`customers.id` **ist** `auth.uid()`.** Es gibt kein
   `customers.user_id` und keine Tabelle `subscriptions` — die aktive
   Mitgliedschaft beantwortet `app.has_subscription(uid)`.
5. **Ein Frontend-Schalter ist keine Sicherheitsmaßnahme** (S-28).

---

## 5. Womit eine neue Sitzung anfangen sollte

Zuerst lesen: `CLAUDE.md`, dann dieses Dokument, dann
`docs/FUNCTION-VERIFICATION.md` (Abschnitte 7 und 8) und
`docs/COMPLIANCE.md` (Nachtrag 14.09.2026).

Die drei Skills sind **Pflicht**, nicht auf Zuruf:
`boerdesnack24-verify`, `boerdesnack24-security-regression`,
`boerdesnack24-legal-impact`. In dieser Sitzung sind sie beim Bauen
zunächst **nicht** gelaufen; nachgeholt haben sie vier Befunde erzeugt.

Und die stehende Regel aus `CLAUDE.md`: Sobald Automaten, Standorte,
Nayax, Bestand oder Umsätze zur Sprache kommen, ist **ungefragt** an
`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` zu erinnern — solange in
`machines` kein aktiver Automat steht.
