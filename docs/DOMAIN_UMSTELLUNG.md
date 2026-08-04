# Umzug auf `boerdesnack24.de`

Die Domain ist am 03.08.2026 registriert worden. Diese Seite hält fest,
**was wo eingetragen werden muss und in welcher Reihenfolge** — die
Reihenfolge ist der wichtige Teil.

## Grundsatz: eine Einstellung, nicht zwölf

Die Adresse der App steht an **einer** Stelle je Seite:

| Seite | Einstellung | Wirkt |
|---|---|---|
| Server (Edge Functions) | `APP_PUBLIC_URL` als Function-Secret | sofort, **ohne Ausrollen** |
| App (Flutter) | `--dart-define=APP_PUBLIC_URL=…` beim Bauen | mit dem nächsten Release |

Beide Werte müssen **übereinstimmen** und **mit einem Schrägstrich
enden** (`https://boerdesnack24.de/`). Sonst entsteht bei den
Empfehlungslinks `…de#/r/CODE` statt `…de/#/r/CODE`.

Vorher lag die Adresse an vier Stellen im Code verstreut. Beim
Domainwechsel wäre eine davon liegengeblieben — vermutlich die
Freigabe-Benachrichtigung, die niemand täglich sieht. Seit dem
03.08.2026 lesen alle vier aus der Einstellung; im Code stehen nur noch
die beiden Vorgabewerte in `app_config.dart` und
`_shared/email/config.ts`.

---

## Phase 1 · Mail — sofort machbar, risikolos

Nichts hängt davon ab, es kann nichts kaputtgehen.

1. **Resend → Domains → Add Domain** → `boerdesnack24.de`, Region **EU**.
2. Resend zeigt DNS-Einträge (DKIM als `TXT` auf `resend._domainkey`,
   SPF, ggf. `MX` auf einer `send.`-Unteradresse). Die Werte erzeugt
   Resend je Domain — sie stehen nur dort.
3. **Bei Hostinger eintragen.** Drei Fallen:
   * Im Feld *Name* nur den vorderen Teil (`resend._domainkey`), **nicht**
     die ganze Adresse — Hostinger hängt die Domain selbst an.
   * Für die Hauptdomain `@` verwenden.
   * Keine Anführungszeichen um TXT-Werte.
4. **DMARC ergänzen** (gibt Resend meist nicht vor):
   `TXT` auf `_dmarc` →
   `v=DMARC1; p=none; rua=mailto:boerdesnack24@gmail.com`
   `p=none` heisst beobachten, nicht abweisen. Später auf `quarantine`
   verschärfen, wenn die Berichte sauber sind.
5. In Resend auf **Verify** klicken.

> ⚠️ **Noch keine MX-Einträge auf der Hauptdomain.** Ein MX-Eintrag leitet
> den gesamten Posteingang um. Erst wenn entschieden ist, wo die Post
> landen soll — siehe `POSTEINGANG_AKTIVIEREN.md`.

## Phase 2 · Unterstruktur — jetzt entscheiden, nichts eintragen

**Vor dem ersten Aufkleber festlegen.** Vorschlag:

| Adresse | Wofür |
|---|---|
| `boerdesnack24.de` | Kundenbereich — die Adresse für QR-Codes am Automaten |
| `intern.boerdesnack24.de` | internes Werkzeug |
| `noreply@boerdesnack24.de` | Absender (steht bereits im Code) |
| `inbound.boerdesnack24.de` | falls Post später in der App landen soll |

Kurz ist besser: Am Automaten liest jemand `boerdesnack24.de`, nicht
`app.boerdesnack24.de/kunde`.

## Phase 3 · Umschalten — erst wenn dort etwas antwortet

**Nicht vorziehen.** Solange unter der Domain keine App läuft, würden
funktionierende Anmeldelinks gegen tote getauscht.

1. **DNS auf den Hoster zeigen** (Lovable gibt einen `A`- oder
   `CNAME`-Eintrag), Seite im Browser prüfen.
2. **Supabase → Authentication → URL Configuration**: Site URL und
   Redirect URLs auf die neue Adresse.
3. **Supabase → Edge Functions → Secrets**: `APP_PUBLIC_URL` =
   `https://boerdesnack24.de/` — stellt alle Links in allen Mails um,
   **ohne Ausrollen**.
4. **Nächster App-Build** mit
   `--dart-define=APP_PUBLIC_URL=https://boerdesnack24.de/`.

Nach Schritt 3 eine Testmail auslösen und im E-Mail-Protokoll prüfen,
ob die Links stimmen — die Ansicht dafür ist I5a.

---

## Was noch am alten Ort bleibt

Der One-Pager `abo-rechnet-sich.pdf` wird mit dem Web-Build ausgeliefert
(`apps/mobile/web/marketing/`). Er zieht automatisch mit, sobald die
Web-App unter der neuen Adresse liegt — vorausgesetzt, der Build wird
dorthin ausgeliefert. Läuft die Kunden-Web-App künftig aus Lovable und
nicht mehr aus dem Flutter-Web-Build, muss die Datei dort mit
hinterlegt werden, sonst zeigt der Link ins Leere.

## Was der Umzug NICHT automatisch mitnimmt

* **App-Store-Einträge** und Universal Links (`apple-app-site-association`,
  `assetlinks.json`) — die brauchen die Domain und einen neuen Release.
* **Bereits versendete E-Mails.** Deren Links zeigen weiter auf die alte
  Adresse. Solange GitHub Pages erreichbar bleibt, funktionieren sie;
  schaltet man das ab, sind sie tot. Deshalb die alte Adresse nach dem
  Umzug **nicht sofort abschalten** — ein halbes Jahr Überlappung ist
  billiger als eine tote Bestätigungsmail.
