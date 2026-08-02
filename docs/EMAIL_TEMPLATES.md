# E-Mail-Templates — Stand, Auslöser, Inbetriebnahme

Stand: 02.08.2026 · Modul: `supabase/functions/_shared/email/`

Der Auftrag nennt rund 25 Templates. Diese Liste hält fest, was existiert,
was nur eine Vorlage braucht und was vorher eine Produktentscheidung oder
eine Anbindung erfordert. Templates ohne Auslöser wären toter Code.

Legende: ✅ fertig · 🔌 fertig, wartet auf Aktivierung des Hooks ·
❌ kein Auslöser vorhanden

## Konto (Supabase Auth)

Diese Mails löst Supabase Auth aus. Über den **Send-Email-Hook**
(`auth-email-hook`) verschickt sie nicht mehr Supabase mit eigener
Vorlage, sondern unsere Function über Resend — versioniert im Repo und
durch Tests abgedeckt.

| Mail | Status | `email_action_type` |
|---|---|---|
| E-Mail bestätigen (Registrierung) | 🔌 | `signup` |
| Einladung interner Nutzer | 🔌 | `invite` |
| Anmeldelink ohne Passwort | 🔌 | `magiclink` |
| Passwort zurücksetzen | 🔌 | `recovery` |
| E-Mail-Adresse ändern | 🔌 | `email_change` |
| Bestätigungscode (erneute Anmeldung) | 🔌 | `reauthentication` |
| Passwort wurde geändert | 🔌 | `password_changed_notification` |
| E-Mail-Adresse wurde geändert | 🔌 | `email_changed_notification` |
| Telefonnummer wurde geändert | 🔌 | `phone_changed_notification` |
| Anmeldemethode verknüpft/entfernt | 🔌 | `identity_(un)linked_notification` |
| Zwei-Faktor eingerichtet/entfernt | 🔌 | `mfa_factor_(un)enrolled_notification` |

Die sieben Benachrichtigungen tragen keinen Link. Sie sind der
sicherheitsrelevante Teil: Wer eine „Passwort geändert"-Mail bekommt, ohne
es selbst getan zu haben, merkt genau hier, dass etwas nicht stimmt —
deshalb steht in jeder der Weg zum Support.

## Konto (eigene Vorgänge)

| Mail | Status | Auslöser |
|---|---|---|
| Löschantrag eingegangen | ✅ | `account-deletion-request` (Kunde + interne Notiz) |
| Willkommen | ❌ | Kein Ereignis „erste Anmeldung" wird erfasst. Die `signup`-Mail deckt den Moment inhaltlich mit ab. |
| Konto gelöscht (vollzogen) | ❌ | Die Löschung erfolgt manuell in der Verwaltung; kein Vorgang meldet den Abschluss. |

## Premium / Abo

| Mail | Status | Auslöser |
|---|---|---|
| Abo gewählt / gewechselt | ✅ | `subscription-choose` |
| Kündigungsbestätigung | ✅ | `subscription-cancel` (§ 312k Abs. 2 S. 3 BGB) |
| Testphase gestartet / Erinnerung / beendet | ❌ | Es gibt keinen Probemonat im Produkt (offene Geschäftsentscheidung). |
| Kaufbestätigung, Zahlung erfolgreich/fehlgeschlagen, Zahlungsmethode, Verlängerung, Abo endet am … | ❌ | **Es gibt keinen Payment-Webhook.** Abrechnung soll über App Store / Google Play laufen, sobald die App dort ist; bis dahin existiert kein Ereignis, das diese Mails auslösen könnte (vgl. Kommentar in `0073_referral_program.sql`). |

## Support

| Mail | Status | Auslöser |
|---|---|---|
| Supportanfrage eingegangen / Antwort verfügbar | ❌ | Es gibt kein Kontakt-/Ticketformular und keine Tabelle dafür. Support läuft über die im Impressum genannte Adresse. |

## Marketing

| Mail | Status | Auslöser |
|---|---|---|
| Neue Funktionen, Empfehlungsprogramm, Sonderaktionen | ❌ | Zwei Voraussetzungen fehlen: ein Opt-out-Kennzeichen am Profil und ein Werkzeug, um eine Kampagne auszulösen. |

Werbemails brauchen nach § 7 Abs. 2 UWG eine Einwilligung oder die enge
Ausnahme des § 7 Abs. 3, in jedem Fall einen Abmeldelink in **jeder** Mail.
Das Kennzeichen muss in App und Loveable-Web gleichermaßen respektiert
werden.

---

# Send-Email-Hook aktivieren

Die Function `auth-email-hook` ist deployed, aber **inert**: Ohne
`SEND_EMAIL_HOOK_SECRET` antwortet sie mit 500 und arbeitet nicht. Erst
das Einschalten des Hooks im Dashboard leitet die Auth-Mails um.

## Vorher prüfen

1. **Absenderdomain in Resend verifiziert?** Die Function versendet als
   `noreply@boerdesnack24.de`. Lehnt Resend ab, antwortet der Hook mit 500
   — und dann **schlägt die Registrierung fehl**. Die bestehenden
   Abo-Mails nutzen denselben Absender, das ist also der Normalfall; vor
   dem Umschalten trotzdem einmal nachsehen.
2. **`RESEND_API_KEY` als Function-Secret gesetzt?** Ohne Key läuft der
   Versand im Dev-Modus (nur Log) — Supabase bekäme ein 200, der Nutzer
   aber nie eine Mail.

## Reihenfolge (wichtig)

Zwischen „Hook angelegt" und „Secret gesetzt" liegt ein Zeitfenster, in
dem Auth-Mails scheitern. Deshalb möglichst kurz halten:

1. Dashboard → **Authentication → Hooks** → *Send Email hook* anlegen,
   Typ **HTTPS**, URL:
   `https://nnfsyuglkqycwenwxmuw.supabase.co/functions/v1/auth-email-hook`
2. **Generate Secret** klicken und den Wert (`v1,whsec_…`) kopieren.
3. **Sofort** als Function-Secret hinterlegen:
   `supabase secrets set SEND_EMAIL_HOOK_SECRET="v1,whsec_…"`
   (oder Dashboard → Edge Functions → Secrets).
4. Hook aktivieren.

## Danach sofort testen

Mit einer Wegwerf-Adresse registrieren und prüfen:

* Kommt die Bestätigungsmail an, und sieht sie aus wie erwartet?
* Führt der Button tatsächlich zur Bestätigung?
* Funktioniert der 6-stellige Code als Rückfallebene?
* Danach einen Passwort-Reset auslösen (`recovery`).

## Wenn etwas klemmt

**Hook im Dashboard deaktivieren.** Supabase fällt dann sofort auf den
eingebauten Versand zurück — kein Deploy, kein Warten. Das ist der
Rückweg, und er dauert Sekunden.

Logs: Dashboard → Edge Functions → `auth-email-hook`. Die Function loggt
mit dem Präfix `[auth-email-hook/<aktionstyp>]`.

## Verhalten im Fehlerfall (bewusst so gewählt)

| Situation | Antwort | Warum |
|---|---|---|
| Signatur fehlt/falsch | 401 | Ohne Prüfung wäre der Endpunkt offen — jeder könnte Mails mit unserem Absender verschicken. |
| Secret nicht gesetzt | 500 | Lieber gar nicht arbeiten als ungeprüft. |
| Unbekannter Aktionstyp | 200, kein Versand | Eine blockierte Registrierung wäre schlimmer als eine fehlende Randmail. Alle Typen mit Link sind abgedeckt. |
| Resend lehnt ab | 500 | Supabase zeigt dem Nutzer einen Fehler. Ein stilles 200 hieße: Nutzer wartet ewig auf eine Mail, die nie kommt. |

## Fallstrick beim Adresswechsel

Bei `email_change` sind die Feldnamen laut Supabase-Doku **vertauscht**:
`token_hash_new` gehört zur **bisherigen** Adresse, `token_hash` zur
**neuen**. Bei aktivem „Secure Email Change" gehen zwei Mails raus. Die
Zuordnung steckt in `auth-email-hook/index.ts` und ist dort kommentiert —
beim Anfassen bitte nicht nach dem Namen gehen.
