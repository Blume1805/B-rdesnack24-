# E-Mail-Vorlagen: Stand und Wirksamkeit

Seit Migration 0092 lassen sich Betreff und Inhalt der Mails in der
Datenbank hinterlegen, statt sie im Code zu ändern. Diese Seite hält fest,
**wo das schon greift** — denn eine Vorlage wirkt erst, wenn die Function,
die sie verschickt, den neuen Code trägt.

## Wie es funktioniert

In der Tabelle `email_templates` steht pro Mail eine Zeile. Ist sie leer,
gilt unverändert die Fassung aus dem Code. Erst wer **Betreff und Inhalt**
füllt, übernimmt die Vorlage; `is_active = false` schaltet zurück.

Der heutige Wortlaut wurde bewusst **nicht** in die Datenbank kopiert. Eine
Kopie würde beim nächsten Codewechsel auseinanderlaufen, und niemand wüsste
mehr, welche Fassung gilt.

In der Datenbank steht nur der **Inhaltsteil**. Rahmen, Kopf und Fuss
bleiben im Code, weil im Fuss die Pflichtangaben nach § 5 DDG stehen —
Impressum, Datenschutz, Widerruf. So gilt eine Änderung an der Anschrift
sofort für alle Mails.

## Stand der Umstellung

| Vorlage | Versendet von | Umgestellt im Code | Ausgerollt |
|---|---|---|---|
| `subscription_cancel` | `subscription-cancel` | ✅ | ❌ |
| `subscription_choose` | `subscription-choose` | ✅ | ❌ |
| `account_deletion_customer` | `account-deletion-request` | ✅ | ❌ |
| `account_deletion_internal` | `account-deletion-request` | ✅ | ❌ |
| `auth_signup` … `auth_reauthentication` (6) | `auth-email-hook` | ✅ | ❌ |

**Bis eine Zeile in beiden Spalten ✅ trägt, ändert eine Bearbeitung in der
Oberfläche nichts am tatsächlichen Versand.** Der Katalog ist trotzdem
schon nützlich: Er zeigt, welche Mails es überhaupt gibt, welche
Platzhalter sie kennen und wo der Wortlaut rechtlich vorgegeben ist.

Im Code ist damit alles umgestellt; es fehlt nur noch das Ausrollen der
vier Functions. Danach wirken alle zehn Vorlagen.

### Was bewusst NICHT über die Datenbank läuft

Die reinen Benachrichtigungen aus `auth-email-hook` — „Passwort geändert",
„Zwei-Faktor-Authentifizierung aktiv" und die übrigen sieben. Sie haben
keinen Link, keinen Platzhalter und keinen Gestaltungsspielraum; sie
melden eine sicherheitsrelevante Änderung am Konto. Solche Meldungen
gehören nicht in ein Textfeld, in dem sie jemand abschwächen oder
versehentlich leeren kann.

Ebenso wenig in der Datenbank: der Fall „unbekannter Aktionstyp". Der
Code winkt ihn absichtlich durch, ohne eine Mail zu verschicken — und die
Verdrahtung fragt die Datenbank dort gar nicht erst, damit eine Vorlage
keine Mail für einen Vorgang erzeugt, den der Code nicht kennt.

## Warum das nicht in einem Zug fertig wurde

Ausrollen ist in dieser Arbeitsumgebung der Flaschenhals. Der Deploy-Kanal
nimmt Dateiinhalte nur einzeln entgegen; es gibt weder ein Supabase-CLI-
Token noch eine Deploy-Pipeline (die CI lintet nur). Für eine Function
müssen dabei auch alle geteilten Module mitgeschickt werden — bei den
Mail-Functions rund 28 KB pro Stück.

**Gelöst am 04.08.2026 — aber anders als gedacht.** Ein
`SUPABASE_ACCESS_TOKEN` allein reicht in dieser Arbeitsumgebung nicht: Der
Egress-Proxy lehnt `api.supabase.com` per Richtlinie ab (403), das
Supabase-CLI ist hier also unabhängig vom Token tot. Umgangen wird das
nicht — die Sperre ist eine Entscheidung, keine Panne.

Stattdessen rollt jetzt ein GitHub-Runner aus:
`.github/workflows/deploy-functions.yaml`. Der hat die Beschränkung nicht,
checkt denselben Stand aus, den ihr lest, und rollt ihn unverändert aus.
Damit ist wieder gesichert, dass in Supabase dasselbe läuft wie im
Repository steht.

Einmalig einzurichten: das Secret `SUPABASE_ACCESS_TOKEN` unter
*Settings → Secrets and variables → Actions*. Ausgelöst wird von Hand
(*Actions → Edge Functions ausrollen → Run workflow*) — bewusst nicht bei
jedem Push, weil eine Edge Function sofort und für alle greift.

## Beim Ausrollen mitzunehmen

Zwei Änderungen an den geteilten Modulen warten ebenfalls auf den nächsten
Deploy:

1. **`components.ts`: `title` und `preheader` werden jetzt maskiert.**
   Gefunden hat das ein Test der neuen Vorlagen-Funktion. Solange dort nur
   feste Zeichenketten ankamen, war es gleichgültig; sobald ein Betreff aus
   einer Vorlage stammt und einen Namen aus dem Anmeldeformular enthält,
   ist es das nicht mehr. Ein Name wie `</title><b>` hätte das Gerüst der
   Mail zerlegt. Heute nicht ausnutzbar, weil noch keine Vorlage gefüllt
   ist — aber es muss vor der ersten gefüllten Vorlage draussen sein.
2. **`auth.ts`: `codeBlock()` nimmt kein Argument mehr.** Es hat nie eins
   gebraucht; die Funktion setzt den Platzhalter `{{code}}`, den das
   Rendern füllt. Reine Aufräumarbeit.

## Wenn eine Vorlage bearbeitet wird

Die Änderung greift ab dem nächsten Versand — kein Neustart nötig, kein
Zwischenspeicher. Geht der Griff in die Datenbank schief, wird die Fassung
aus dem Code verschickt: Eine Kündigungsbestätigung darf nicht daran
scheitern, dass eine Vorlagentabelle gerade nicht erreichbar ist.

---

# Automatischer Versand (Migrationen 0099, 0100)

Bis hierher beschreibt diese Seite acht Mails, die je eine Edge Function
selbst verschickt. Für die gewünschten dreiunddreissig trägt das nicht:
Jede neue Mail wäre eine neue Function oder eine Änderung an einer
bestehenden — und jede davon muss ausgerollt werden. Das ist derzeit der
Engpass.

Seit 0100 läuft es andersherum:

```
Ereignis  →  email_enqueue(...)  →  email_outbox  →  ein Versender
```

Wer eine Mail auslösen will, **legt eine Zeile ab statt selbst zu senden**.
Eine neue Mailart ist danach eine Katalogzeile plus eine Vorlage — kein
neuer Dienst. Genau deshalb kann Loveable das Design liefern, ohne dass
jemand Code anfasst: Das HTML landet in `email_templates.body_html`.

## Die Einordnung entscheidet, ob eine Mail rausgeht

`email_templates.category` kennt drei Werte:

| Wert | Was das heisst | Einwilligung? | Abmeldelink? |
|---|---|---|---|
| `transactional` | Vertragspost (Registrierung, Passwort, Kündigung, Rechnung) | nein | **nein** |
| `legal` | Pflichtinformation (AGB-, Datenschutzänderung, Sicherheitshinweis) | nein | **nein** |
| `marketing` | Werbung (Neuigkeiten, Aktionen, Geburtstagsgutschein) | **ja** | **ja** |

Zwei Regeln setzt `email_enqueue` durch — nicht als Bitte an den Aufrufer,
sondern als Sperre dahinter:

1. **Werbung ohne Einwilligung verlässt das Haus nicht.** Die Zeile wird
   angelegt, aber mit `status = 'suppressed'` und
   `suppressed_reason = 'keine_einwilligung'`. Sie wird nicht verschickt —
   und man sieht hinterher, dass und warum jemand übersprungen wurde.
2. **Vertragspost wird von einer Abmeldung nie aufgehalten.** Wer den
   Abmeldelink klickt, bestellt Werbung ab, nicht seine
   Kündigungsbestätigung. Wird das verwechselt, entsteht der Fall, in dem
   jemand widerruft und nie eine Bestätigung bekommt.

Beides ist gegen die Produktivdatenbank nachgestellt: Werbung ohne
Einwilligung → `suppressed`; nach Erteilung → `queued`; nach Klick auf den
Abmeldelink wieder `suppressed`; Vertragspost und Pflichtinformation
im selben Moment weiterhin `queued`.

## Die Einwilligung ist ein Protokoll, kein Häkchen

Art. 7 Abs. 1 DSGVO legt die Beweislast auf euch. Ein `bool` auf `profiles`
kann das nicht: Es sagt, wie es jetzt steht, nicht wie es dazu kam — und
ein Widerruf löscht den Beweis, dass es je anders war.

`email_consent_event` wird deshalb nur angehängt, nie geändert (ein Trigger
verhindert `update`). Festgehalten wird **der Wortlaut, dem zugestimmt
wurde**, denn nachzuweisen ist nicht „ein Haken war gesetzt", sondern wozu.
Eine Einwilligung ohne Nachweistext lässt die Datenbank gar nicht erst zu.

Drei Themen, getrennt wählbar: `produkt_neuigkeiten`, `aktionen`,
`geburtstag`. Der Geburtstagsgruss hat ein eigenes Thema, weil er das
Geburtsdatum zu einem Zweck verarbeitet, für den es nicht erhoben wurde.

Der Abmeldelink funktioniert **ohne Anmeldung** (§ 7 Abs. 3 Nr. 4 UWG) und
lässt sich mehrfach klicken, ohne in einen Fehler zu laufen.

## Was noch nicht versendet wird — und warum

Zwölf der Vorlagen stehen im Katalog, sind aber `is_active = false` und
nennen in `precondition`, was fehlt. `email_enqueue` wirft bei ihnen eine
Ausnahme, statt still zu schlucken — eine Vorlage, die aktiv aussieht, aber
nie ausgelöst wird, ist schlimmer als eine, die ehrlich gesperrt dasteht.

| Gesperrt | Was fehlt |
|---|---|
| `abo_rechnung`, `abo_zahlung_erfolgreich`, `abo_zahlung_fehlgeschlagen`, `abo_zahlungsmittel_laeuft_ab`, `abo_zahlungsmittel_geaendert`, `abo_verlaengert` | **Kein Zahlungsanbieter angebunden.** `0073_referral_program.sql` hält das bereits fest. Ohne Zahlungs-Webhook weiss die Datenbank nicht, ob eine Zahlung geklappt hat. |
| `abo_test_beginnt`, `abo_test_endet_bald`, `abo_test_beendet` | Es gibt kein Testphasen-Modell in den Abodaten. |
| `konto_neue_anmeldung` | Kein Geräte-/Sitzungsverzeichnis — „unbekanntes Gerät" ist nicht feststellbar. |
| `konto_zwei_faktor` | Zwei-Faktor-Anmeldung ist nicht eingeführt. |
| `support_feedback_erhalten` | Kein Feedback-Eingang ausserhalb der Reklamationen. |

Das ist keine Bequemlichkeit: Diese Mails brauchen ein Ereignis, das es
noch nicht gibt. Man kann sie nicht „schon mal vorbereiten" — man kann nur
die Vorlage hinterlegen, und das ist geschehen.

## Was als Nächstes fehlt

1. **Der Versender.** Eine kleine Edge Function, die `email_outbox_claim()`
   ruft, rendert, verschickt und `email_outbox_mark()` zurückmeldet.
   Getaktet über `pg_cron` + `pg_net` (beide vorhanden). Sie kommt mit dem
   nächsten Ausrollen — genau wie die fünf, die schon warten.
2. **Die Auslöser.** Trigger und Zeitpläne, die `email_enqueue` rufen
   (bestätigte Registrierung, Passwortänderung, Ablauferinnerung,
   Geburtstag).
3. **Das Design von Loveable**, das in `body_html` wandert.
4. **Der Einwilligungs-Schalter im Profil** — `email_consent_state()`,
   `email_consent_grant()` und `email_consent_revoke()` stehen bereit,
   die Oberfläche dazu noch nicht.
