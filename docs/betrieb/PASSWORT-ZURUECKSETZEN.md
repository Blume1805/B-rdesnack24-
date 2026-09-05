# Passwort zurücksetzen — Ursache, Fix und die eine offene Handgriff-Aufgabe

Stand: 04.09.2026

## Was passiert ist

Der Klick auf den Link in der Wiederherstellungs-E-Mail führte auf die
Startseite. Keine Maske, keine Fehlermeldung, kein Hinweis.

## Beleg (Auth-Log des Projekts, nicht Vermutung)

```
20:31:21  POST /recover                        ok            (neue Mail verschickt)
20:31:42  POST /token?grant_type=pkce   400: code challenge does not match previously saved code verifier
20:31:42  POST /token?grant_type=pkce   422: invalid flow state, flow state has expired
20:32:05  GET  /verify                  403: One-time token not found
20:34:31  GET  /verify                  403: One-time token not found
```

## Ursache

Das Supabase-SDK verwendet standardmäßig das **PKCE**-Verfahren. Dabei
funktioniert der Link in der E-Mail **nur zusammen mit einem Geheimnis, das
im `localStorage` genau des Browsers liegt, in dem der Link angefordert
wurde** („Code Verifier", `gotrue_client-code-verifier`).

Dieses Geheimnis geht in drei ganz gewöhnlichen Situationen verloren:

1. **Zweite Anforderung.** Jeder Klick auf „Passwort vergessen" überschreibt
   den Verifier. Die vorherige Mail wird damit unbrauchbar — genau der Fall
   um 20:31:42.
2. **Anderer Browser.** Wer die Mail im Mail-Programm, im In-App-Browser
   (Gmail, Instagram, WhatsApp) oder auf einem zweiten Gerät öffnet, hat dort
   kein Geheimnis. Das Einlösen scheitert.
3. **Zweiter Klick.** Der Token ist einmalig; danach antwortet der Server mit
   `403: One-time token not found`.

Erschwerend: das SDK verschluckt den Fehler. Er landet als Fehler im
Auth-Strom, den vorher niemand ausgewertet hat — deshalb das Schweigen.

## Was geändert wurde (Code, bereits umgesetzt)

| Datei | Zweck |
|---|---|
| `core/auth/recovery_link.dart` | Erkennt einen Wiederherstellungslink an der Adresse — in der echten Abfrage, in der Abfrage der Hash-Route und im Fragment. |
| `core/auth/recovery_state.dart` | Führt den Zustand aus drei Quellen: Adresse, SDK-Ereignis, **SDK-Fehler**. Ein gescheitertes Einlösen führt jetzt auf die Maske statt ins Nichts. |
| `bootstrap.dart` | Hält die Startadresse fest, **bevor** Supabase sie ausräumt (`clearAuthUrlParameters`). Ohne das ist ein gescheiterter Link nicht mehr von einem normalen Aufruf zu unterscheiden. |
| `core/router/app_router.dart` | Die Weichenregel als reine, prüfbare Funktion `authUmleitung`. „Passwort vergessen" bleibt während einer Wiederherstellung erreichbar — sonst säße man mit verbrauchtem Link fest. |
| `features/auth/.../new_password_screen.dart` | Löst einen `token_hash` selbst ein (`verifyOTP`), zeigt sonst im Klartext, was schiefging, und bietet „Neuen Link anfordern". Löst die Weiche nach dem Speichern — sonst gäbe es eine Endlosschleife zurück auf die Maske. |

Geprüft: `flutter analyze` ohne Befund, 173 Tests grün, darunter 30 neue für
genau diese Fälle (`test/core/auth/`, `test/core/router/`).

## Der eine Handgriff, der noch fehlt (Dashboard)

Der Code kommt jetzt mit beiden Linkarten zurecht. Die **fragile** Linkart
verschwindet aber erst mit einer Änderung an der E-Mail-Vorlage. Supabase
empfiehlt genau das für den PKCE-Betrieb: die Mail trägt statt des Codes
einen Einmal-Token, den die App direkt gegen den Server einlöst — ohne
irgendetwas aus dem Browser.

**Supabase → Authentication → Emails → Reset Password → Message body:**

```html
<h2>Passwort zurücksetzen</h2>

<p>Du hast für Bördesnack24 ein neues Passwort angefordert.</p>

<p>
  <a href="https://blume1805.github.io/B-rdesnack24-/#/passwort-neu?token_hash={{ .TokenHash }}&type=recovery">
    Neues Passwort festlegen
  </a>
</p>

<p>
  Der Link gilt einmalig. Wenn du das nicht warst, kannst du diese E-Mail
  einfach ignorieren — dein Passwort bleibt dann unverändert.
</p>
```

Danach funktioniert der Link in jedem Browser, auf jedem Gerät und aus jeder
Mail-App. Die Adresse muss **exakt** so stehen; sie ist unter
Authentication → URL Configuration → Redirect URLs bereits freigegeben.

Nicht selbst nachgewiesen: der Weg über `token_hash` ließ sich von hier aus
nicht durchspielen, weil die Netzsperre dieser Arbeitsumgebung Aufrufe an
`*.supabase.co` blockiert. Belegt ist er durch die Supabase-Dokumentation
(„If you're using PKCE flow, edit the email template to send a token hash",
Auth → Email Templates / Passwordless Login) und durch den Code des SDK
(`GoTrueClient.verifyOTP`, Zweig `isRecoveryWithTokenHash`).

## Wenn es doch wieder klemmt

Der häufigste Fall bleibt: **die älteste Mail anklicken.** Es zählt immer die
zuletzt angeforderte. Ab jetzt sagt die App das auch, statt zu schweigen.
