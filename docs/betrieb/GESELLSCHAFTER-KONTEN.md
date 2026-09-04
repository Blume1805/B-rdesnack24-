# Gesellschafter-Konten

Stand 03.09.2026.

## Angelegt

| Person | Anmeldung | Rolle | Status |
|---|---|---|---|
| Philipp Blume | `philipp.blume93@gmail.com` | `shareholder` | `active` |
| Pia Schu | `pia.schu.ps@gmail.com` | `shareholder` | `active` |

**Beide Konten haben kein Passwort.** `encrypted_password` ist leer geblieben.
Das ist Absicht: so kennt niemand ausser der Person selbst je ein Passwort zu
ihrem Konto — ich eingeschlossen. Der Weg hinein führt einmalig über
„Passwort vergessen"; die Adresse ist bereits bestätigt, der Link kommt
also ohne Zwischenschritt.

Angelegt wurde über den Einladungsweg (`invited_at` gesetzt), weil
`app.handle_new_user` die Rolle nur dann aus den Metadaten übernimmt — und
weil es zutrifft: diese Konten hat der Betrieb angelegt, niemand hat sich
selbst registriert. Die Statusfreigabe von `invited` auf `active` verlangt
`app.guard_profile_update` einen Administrator; sie ist deshalb in der Haut
des vorhandenen `system_admin` erfolgt und im Protokoll auch so vermerkt.

### Ein Konto wurde korrigiert

Pia war zunächst unter `pia.ps.schu@gmail.com` angelegt — die Adresse war
falsch. Das Konto ist **vollständig gelöscht** und unter
`pia.schu.ps@gmail.com` neu angelegt worden, nicht umbenannt: eine
umgebogene Adresse hinterlässt eine halb korrigierte Identität in
`auth.users`, `auth.identities` und `public.profiles`, und genau daraus
entstehen später Anmeldungen, die niemand erklären kann.

Vor dem Löschen wurde geprüft, dass es sich wirklich um ein unbenutztes
Konto handelte: keine Anmeldung, keine Sitzung, kein Kundendatensatz, keine
Käufe, keine Firmenmitgliedschaft, keine Freigabe. Wäre eines davon
vorhanden gewesen, hätte die Prüfung abgebrochen — ein benutztes Konto
gehört in den Löschprozess mit Aufbewahrungsprüfung, nicht in ein `DELETE`.
Die beiden Protokollzeilen zur Anlage bleiben bestehen; sie halten fest,
dass das Konto existiert hat und entfernt wurde.

Nachgewiesen: die falsche Adresse ist in `auth.users`, `auth.identities`
und `public.profiles` nicht mehr auffindbar.

## Was damit belegt funktioniert

Ausgeführt in der Haut der beiden Konten gegen die Produktionsdatenbank,
nur lesend:

| | Finanzübersicht | Bestandsjournal | Offene Bestandslücken |
|---|---|---|---|
| Philipp | abrufbar | abrufbar | abrufbar |
| Pia | abrufbar | abrufbar | abrufbar |
| Kundenkonto (Gegenprobe) | **abgewiesen** `42501` | **abgewiesen** `P0001` | **abgewiesen** `42501` |

Die Zahlen sind überall null, weil noch kein Kauf existiert. Das ist der
richtige Wert, nicht ein fehlender.

`profiles` zählt derzeit **drei** aktive Gesellschafter: Philipp, Pia und
den Prüfzugang `demo-gs@boerdesnack24.app`. Die Drei ist also kein Fehler,
sondern der noch nicht zurückgebaute Zugang — siehe unten.

## Zwei offene Punkte

### Der Prüfzugang lebt noch — bewusst

`demo-gs@boerdesnack24.app` und `demo-admin@boerdesnack24.app` bestehen
weiter. Sie jetzt zu löschen, bevor Philipp und Pia sich das erste Mal
angemeldet haben, hiesse: kein Schlüssel mehr im Haus, falls beim
Passwort-Zurücksetzen etwas klemmt. Der Rückbau steht bereit unter
`scripts/betrieb/pruefzugang_entfernen.sql` und sollte laufen, sobald sich
beide einmal angemeldet haben.

### Die Vier-Augen-Freigabe hat ein Henne-Ei-Problem

`public.is_shareholder()` verlangt die Rolle **und** eine freigegebene Zeile
in `shareholder_approvals`. Für beide neuen Konten ist sie derzeit `false`.

Das betrifft **nicht** Finanzen und Bestand — die hängen an
`finance.view`, `inventory.view` und der Rolle, und die greifen. Gesperrt
bleibt genau dreierlei: weitere Gesellschafter freigeben
(`approve_shareholder`), die Freigabetabelle selbst lesen und schreiben,
und das E-Mail-Protokoll lesen.

Die Klemme: eine Freigabe anzulegen verlangt selbst `is_shareholder()`.
Ohne bereits freigegebenen Gesellschafter kann also niemand den ersten
freigeben — ausser einem `system_admin`, denn `is_shareholder()` schliesst
`is_admin()` ein.

**Ich habe die Freigaben nicht selbst eingetragen.** Eine Zeile, die
festhält, dass Person A die Person B freigegeben hat, ist eine Aussage über
eine Entscheidung von Menschen. Sie zu erzeugen, weil es technisch bequem
wäre, macht aus einem Freigabeprotokoll eine Behauptung.

Drei Wege, in absteigender Sauberkeit:

1. Philipp oder Pia meldet sich an, und die Freigabe erfolgt über die
   Oberfläche — sobald einer von beiden `is_shareholder()` erfüllt, kann er
   den anderen freigeben. Dafür muss der erste aber über den Administrator
   freigegeben werden.
2. Philipp bekommt zusätzlich die Rolle `system_admin` (er betreibt das
   System ohnehin) und gibt beide frei. Danach ist die Kette selbsttragend.
3. Der Vorgang wird einmalig über den vorhandenen Administrator-Zugang
   ausgeführt, mit Vermerk im Protokoll.

Das ist eine Entscheidung des Betreibers, keine Aufräumarbeit.

### Ein drittes Konto, das bestehen bleibt

`philipp_blume@gmx.de` existiert seit 02.08. als **Kundenkonto** (Rolle
`customer`). Es wurde bewusst nicht umgewidmet: dann ginge die Möglichkeit
verloren, die Kundenseite mit einem echten Konto zu prüfen, und die beiden
Rollen wären in einer Person vermischt.
