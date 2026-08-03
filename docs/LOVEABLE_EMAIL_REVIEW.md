# Prüfung des E-Mail-Subsystems in der Loveable-App

Stand: 03.08.2026 · geprüft an Commit `HEAD` des Projekts
`d5033021-6dce-4044-8bf6-bb50d80aa8ff`

Auftrag: „Ich habe weitere Funktionen bzgl. der E-Mails eingebaut. Prüfe,
ob die Funktionen auch technisch funktionieren."

**Kurzantwort: Der Code ist gut gebaut, aber er läuft nicht.** Drei
Voraussetzungen fehlen, und zwei davon merkt man erst im Betrieb.

## Was dazugekommen ist

| Bereich | Dateien |
|---|---|
| Vorschau + Testversand | `routes/email-vorschau.tsx`, `lib/email/{templates,samples,send-log}.ts` |
| Versand | `lib/email/send.server.ts`, `routes/api/public/auth-email.ts` |
| Secure-Share-Links | `lib/email/{share-link,share-access,share-cleanup}.ts`, `routes/report.$token.tsx` |
| Zugriffsprotokoll | `routes/zugriffe.tsx`, `lib/email/export-audit.ts` |
| Datenbank | `supabase/sql/{email_report_share,email_report_share_cleanup,email_test_log}.sql` |

## Was gut gemacht ist

Das ist keine Höflichkeit — diese Punkte sind die, an denen solche
Systeme üblicherweise scheitern:

* **Signaturprüfung** nach Standard Webhooks: HMAC-SHA256 über
  `{id}.{timestamp}.{body}`, Replay-Fenster 300 s, `timingSafeEqual`,
  Längenvergleich vor dem Vergleich. Ohne Secret 500, ohne gültige
  Signatur 401.
* **Kein Schlüssel im Browser.** Beide Schlüssel kommen aus
  `process.env`, die Datei heißt `.server.ts`. Die Debug-Ausgabe
  sammelt Antwort-Header über eine **Positivliste** — Auth-Header können
  also nicht versehentlich mitgeschrieben werden.
* **Starke Tokens**: `crypto.getRandomValues` über 24 Bytes = 192 Bit.
* **Redaktion vor dem Speichern.** `createShareLink` redigiert zuerst
  und legt nur `redacted` ab. Der Kommentar „die Rohdaten verlassen den
  Browser nicht" stimmt tatsächlich.
* **Die SQL ist sauber**: RLS auf beiden Tabellen, eigene Zeilen only,
  öffentlicher Zugriff ausschließlich über eine SECURITY-DEFINER-Funktion
  mit Ablauf, Widerruf und Aufruflimit; **jeder** Zugriff wird
  protokolliert, auch `not_found` — Token-Raten wird damit sichtbar. Und
  der Entzug geht gegen `public`, nicht nur gegen `anon`; genau der
  Fallstrick, über den Migration 0075 gestolpert ist.
* Der Code **erwartet** die fehlende Tabelle und meldet sie verständlich
  (`42P01`/`PGRST205` → „SQL aus … ausführen").

## Was nicht funktioniert

### 1. Keine der drei Tabellen existiert — nachgemessen

```
email_report_share          fehlt
email_report_share_access   fehlt
email_test_log              fehlt
```

Die Dateien tragen es selbst im Kopf: *„Einmalig im Supabase SQL-Editor
der bestehenden Instanz ausführen."* Das ist nicht geschehen.

Damit laufen ins Leere: Archiv-Export der Testversände, Secure-Share-
Links, Zugriffsprotokoll, PDF-Export der Zugriffe, Aufräum-Job.

### 2. Der Auth-Mail-Endpunkt wird nicht bedient

Ein POST auf `/api/public/auth-email` der Vorschau-URL beantwortet die
App mit ihrer **HTML-Hülle und Status 200** — nicht mit 401 („Invalid
signature") oder 500 („Not configured"), wie der Handler es täte.

Das ist der gefährlichste der drei Befunde, weil er still ist: Würde man
den Supabase-Hook auf diese Adresse zeigen lassen, bekäme Supabase ein
**200 zurück und hielte die Mail für zugestellt** — versendet worden wäre
nichts. Registrierungen und Passwort-Resets liefen dann ins Nichts, ohne
Fehlermeldung.

Ursache vermutlich, dass die Vorschau keine Server-Routen ausführt; das
Projekt steht auf `is_published: false`, eine produktive Adresse gibt es
also noch nicht.

### 3. Zwei konkurrierende Umsetzungen desselben Hooks

Es gibt jetzt **zwei** Empfänger für die Supabase-„Send Email"-Hook:

| | Edge Function `auth-email-hook` | Loveable-Route |
|---|---|---|
| Ort | Supabase, im Repo, mit Tests | Loveable-Hosting |
| Ereignistypen | **alle 14** | 5 |
| Unbekannter Typ | nichts senden, 200 | **als `signup` senden** |
| `email_change` | beide Mails, vertauschte Felder korrekt behandelt | nicht berücksichtigt |
| Mailweg | Supabase → Resend | Supabase → Loveable-Gateway → Resend |
| Stand | deployed, inert (kein Secret) | nicht erreichbar |

Supabase kann den Hook nur auf **eine** Adresse zeigen lassen. Eine der
beiden ist damit toter Code.

**Empfehlung: die Edge Function.** Nicht aus Eitelkeit, sondern weil sie
alle Ereignistypen abdeckt, keinen weiteren Dienst in den Mailweg
einzieht, im Repository mit Tests liegt und nicht davon abhängt, dass
das Loveable-Hosting erreichbar ist. Der Versand von Passwort-Reset-Links
ist die falsche Stelle für eine zusätzliche Abhängigkeit.

### 4. Falscher Mailinhalt bei unbekanntem Ereignistyp

Die Loveable-Route kennt `signup`, `recovery`, `magiclink`,
`email_change`, `invite`. Alles andere wird **als `signup` behandelt**:

```ts
const action = ACTIONS.includes(rawAction) ? rawAction : "signup";
```

Eine „Passwort geändert"-Benachrichtigung käme damit als „Bitte bestätige
deine E-Mail-Adresse" an. Das ist schlimmer als gar keine Mail, weil es
den Empfänger in die Irre führt — bei einer Sicherheitsbenachrichtigung
besonders.

### 5. Kleinere Punkte

* **Absender**: ohne `RESEND_FROM` geht Post von
  `onboarding@resend.dev` raus — Resends Sandbox-Domain. Zustellrate und
  Vertrauen leiden; für Vorgangsmails ungeeignet.
* **Dritter im Mailweg**: Der Versand läuft über
  `connector-gateway.lovable.dev`, der Resend-Schlüssel wird dorthin
  übergeben. Damit verarbeitet Loveable Inhalte inklusive
  Passwort-Reset-Links. Das ist Auftragsverarbeitung (Art. 28 DSGVO) und
  gehört ins Verarbeitungsverzeichnis — sofern dieser Weg bleibt.

## Was zu tun ist, in dieser Reihenfolge

1. **Entscheiden**, welcher Hook bleibt (Empfehlung: Edge Function).
   Der andere Pfad wird entfernt, nicht liegengelassen — zwei
   Implementierungen desselben sicherheitskritischen Wegs sind eine
   Fehlerquelle für sich.
2. **Die drei SQL-Dateien anwenden**, wenn Vorschau, Share-Links und
   Protokoll bleiben sollen. Sie sind gut gebaut und können so laufen.
   *Vorschlag:* als Migrationen ins Repository übernehmen statt von Hand
   im SQL-Editor — sonst entsteht dieselbe Lücke wie bei
   `partner_signatures` (siehe 0027b).
3. **`RESEND_FROM`** auf `noreply@boerdesnack24.de` setzen, sobald die
   Domain in Resend verifiziert ist.
4. Falls die Loveable-Route bleiben soll: die restlichen neun
   Ereignistypen ergänzen und unbekannte Typen **ohne Versand**
   durchwinken.

## Was nicht geprüft werden konnte

* Ob `AUTH_EMAIL_HOOK_SECRET`, `RESEND_API_KEY` und `LOVABLE_API_KEY` in
  der Loveable-Umgebung gesetzt sind — Umgebungsvariablen sind von hier
  nicht einsehbar. Der Test hätte es indirekt gezeigt (500 statt 401),
  aber die Route antwortet gar nicht.
* Ob der Supabase-Hook aktiviert und auf eine der beiden Adressen
  gerichtet ist — die Auth-Konfiguration ist über die verfügbaren
  Werkzeuge nicht lesbar.
* Das tatsächliche Rendering der Templates in echten Mailprogrammen.
