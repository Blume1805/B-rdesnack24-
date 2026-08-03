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

Der saubere Weg ist ein `SUPABASE_ACCESS_TOKEN`: Damit lassen sich alle
vier Functions byte-genau von der Platte ausrollen, in einem Durchgang.

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
