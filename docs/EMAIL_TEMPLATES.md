# E-Mail-Templates — Stand und offene Auslöser

Stand: 02.08.2026 · Modul: `supabase/functions/_shared/email/`

Der Auftrag nennt rund 25 Templates. Die meisten davon lassen sich heute
nicht sinnvoll bauen — nicht weil das Modul fehlt, sondern weil es **keinen
Auslöser** gibt, der sie versenden würde. Diese Liste hält fest, was
existiert, was nur eine Vorlage braucht und was vorher eine
Produktentscheidung oder eine Anbindung erfordert.

Legende: ✅ fertig · 🚧 Vorlage fehlt, Auslöser da · ❌ kein Auslöser
vorhanden · ⚠ liegt nicht bei uns

## Konto

| Mail | Status | Auslöser |
|---|---|---|
| E-Mail bestätigen | ⚠ | Supabase Auth (GoTrue), `config.toml` → `[auth.email] enable_confirmations = true`. Versendet Supabase mit eigener Vorlage, nicht über Resend. |
| Passwort vergessen | ⚠ | GoTrue Recovery. Wie oben. |
| E-Mail-Adresse geändert | ⚠ | GoTrue, `double_confirm_changes = true`. Wie oben. |
| Einladung interner Nutzer | ⚠ | `invite-user/index.ts` nutzt `admin.inviteUserByEmail` — ebenfalls GoTrue. |
| Löschantrag eingegangen | ✅ | `account-deletion-request` (Kunde + interne Notiz). |
| Willkommen | ❌ | Kein Ereignis „erste Anmeldung" wird erfasst. Bräuchte einen Trigger auf `profiles` oder einen Auth-Hook. |
| Passwort erfolgreich geändert | ❌ | Passwortwechsel läuft im Client gegen GoTrue; die App erfährt davon nichts, was einen Versand auslösen könnte. |
| Neues Login erkannt | ❌ | Es gibt keine Geräte-/Sitzungs-Historie, gegen die „neu" bestimmt werden könnte. |
| Konto gelöscht (vollzogen) | ❌ | Die Löschung erfolgt manuell in der Verwaltung; es gibt keinen Vorgang, der den Abschluss meldet. |

**Zu den vier ⚠-Zeilen:** Diese Mails verschickt Supabase Auth selbst. Sie
im Bördesnack24-Design zu haben, ist möglich, aber eine Entscheidung mit
Folgen — zwei Wege:

1. **Custom SMTP + Dashboard-Vorlagen.** Resend als SMTP-Anbieter in
   Supabase Auth eintragen und die Vorlagen im Dashboard pflegen. Wenig
   Aufwand, aber die Vorlagen liegen dann außerhalb dieses Repos und sind
   nicht versioniert.
2. **Send-Email-Hook.** Supabase ruft eine Edge Function auf, statt selbst
   zu versenden. Dann greift unser Modul auch hier, alles bleibt im Repo
   und im Test. Mehr Aufwand, und ein Fehler im Hook legt Registrierung
   und Passwort-Reset lahm — braucht also Sorgfalt.

Empfehlung: Weg 2, aber erst nachdem das Modul ein paar Wochen im
unkritischen Pfad gelaufen ist.

## Premium / Abo

| Mail | Status | Auslöser |
|---|---|---|
| Abo gewählt / gewechselt | ✅ | `subscription-choose`. |
| Kündigungsbestätigung | ✅ | `subscription-cancel` (§ 312k Abs. 2 S. 3 BGB). |
| Testphase gestartet / Erinnerung / beendet | ❌ | Es gibt keinen Probemonat im Produkt (offene Geschäftsentscheidung). |
| Kaufbestätigung, Zahlung erfolgreich/fehlgeschlagen, Zahlungsmethode, Verlängerung, Abo endet am … | ❌ | **Es gibt keinen Payment-Webhook.** Abrechnung soll über App Store / Google Play laufen, sobald die App dort ist; bis dahin existiert kein Ereignis, das diese Mails auslösen könnte (vgl. Kommentar in `0073_referral_program.sql`). |

## Support

| Mail | Status | Auslöser |
|---|---|---|
| Supportanfrage eingegangen | ❌ | Es gibt kein Kontakt-/Ticketformular und keine Tabelle dafür. Support läuft heute über die im Impressum genannte Adresse. |
| Supportantwort verfügbar | ❌ | Wie oben. |

## Marketing

| Mail | Status | Auslöser |
|---|---|---|
| Neue Funktionen, Empfehlungsprogramm, Sonderaktionen | ❌ | Zwei Voraussetzungen fehlen: ein Opt-out-Kennzeichen am Profil (§ 7 UWG — ohne Einwilligung bzw. Abmeldemöglichkeit kein Versand) und überhaupt ein Werkzeug, um eine Kampagne auszulösen. |

Wichtig für später: Werbemails brauchen nach § 7 Abs. 2 UWG eine
Einwilligung oder die enge Ausnahme des § 7 Abs. 3 UWG, in jedem Fall einen
Abmeldelink in jeder Mail. Das Kennzeichen muss in App **und** Loveable-Web
respektiert werden.

## Nächste sinnvolle Schritte

1. Entscheidung zu den GoTrue-Mails (Weg 1 oder 2 oben) — betrifft vier der
   meistgesehenen Mails überhaupt.
2. Opt-out-Kennzeichen am Profil anlegen, bevor die erste Marketingmail
   gebaut wird.
3. Alles Übrige folgt automatisch, sobald die jeweilige Funktion existiert
   (Payment-Webhook, Supportformular, Probemonat).
