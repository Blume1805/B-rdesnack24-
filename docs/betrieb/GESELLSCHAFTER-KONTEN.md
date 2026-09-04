# Gesellschafter-Konten

Stand 03.09.2026.

## Angelegt

| Person | Anmeldung | Rolle | Status |
|---|---|---|---|
| Philipp Blume | `philipp.blume93@gmail.com` | `system_admin` | `active` |
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

### Ein Fehler beim Anlegen, und woran er lag

Die erste „Passwort vergessen"-Anfrage schlug fehl, ohne dass eine E-Mail
ankam. Es lag **nicht** am Mailversand.

GoTrue liest acht Spalten in `auth.users` als Text, nicht als „Text oder
nichts". Beim Anlegen über SQL sind sie leer geblieben, und der Dienst
brach beim Suchen des Kontos ab:

```
POST /recover
error: error finding user: sql: Scan error on column index 3,
       name "confirmation_token": converting NULL to string is unsupported
error_code: unexpected_failure
```

Vier Versuche, viermal derselbe Abbruch — sichtbar nur im Auth-Protokoll des
Projekts, nicht in der Oberfläche. Genau das macht den Fehler unangenehm:
das Konto sieht in jeder SQL-Abfrage richtig aus — Rolle, Status, Rechte,
alles stimmt — und `recovery_sent_at` bleibt leer, weil der Dienst gar nicht
bis zum Versand kommt. Wer beim Mailversand sucht, sucht an der falschen
Stelle.

Betroffen waren `confirmation_token`, `recovery_token`,
`email_change_token_new` und `email_change`; sie stehen jetzt auf `''`. Zum
Vergleich geprüft: bei den über die Oberfläche entstandenen Konten ist keine
dieser Spalten `NULL`. Alle sechs Konten des Projekts sind nachgeprüft.

Damit sich das nicht wiederholt, liegt das korrigierte Muster als
`scripts/betrieb/mitarbeiterkonto_anlegen.sql` bereit — mit der Gegenprobe
am Ende, die nach jeder Anlage laufen sollte.

**Nicht selbst nachgewiesen:** dass der Versand jetzt durchläuft. Der
Egress-Proxy dieser Arbeitsumgebung blockt `supabase.co` mit 403, ich kann
`/recover` von hier nicht aufrufen. Die Ursache ist belegt und beseitigt,
die Wirkung zeigt sich beim nächsten Versuch.

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

| | Finanzen | Bestandsjournal | Bestandslücken | Anträge sichtbar | Darf entscheiden |
|---|---|---|---|---|---|
| Philipp (`system_admin`) | ja | ja | ja | 2 Zeilen | **ja** |
| Pia (`shareholder`, noch nicht freigegeben) | ja | ja | ja | 1 Zeile (die eigene) | nein, `42501` |
| Kundenkonto (Gegenprobe) | **nein** `42501` | **nein** `P0001` | **nein** `42501` | 0 Zeilen | nein, `42501` |

Pias Zugriff auf Finanzen und Bestand hängt **nicht** an der Freigabe — er
folgt aus Rolle und Berechtigung. Die Freigabe entscheidet nur darüber, ob
sie ihrerseits andere freigeben und das E-Mail-Protokoll lesen darf.

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

### Die Vier-Augen-Freigabe — entschieden am 03.09.2026

Der Betreiber hat Weg 2 gewählt: Philipp führt die Rolle `system_admin`.

**Das ist kein Zusatz, sondern ein Wechsel.** `profiles.role` trägt genau
eine Rolle; `system_admin` ersetzt `shareholder`. Geprüft wurde vorher, ob
dabei etwas verlorengeht: jede Stelle, die Gesellschafterrechte verlangt,
nennt entweder `system_admin` ausdrücklich oder geht über
`is_shareholder()`, das `is_admin()` einschliesst. Auch
`business_invoice_release`, das dem Namen nach nur Gesellschaftern gehört,
lässt `is_admin()` zu. Es geht nichts verloren — nachgewiesen, siehe Tabelle
unten.

**Was sich rechtlich ändert, und zwar nicht nur technisch.** Als
`system_admin` erfüllt Philipp `is_shareholder()`, **ohne** eine Freigabe zu
brauchen. Die Vier-Augen-Prüfung greift für ihn also nicht mehr — nicht
weil er sich selbst freigäbe, sondern weil er nie eine Freigabe benötigt.
Der Datenbank-CHECK `chk_no_self_approval` bleibt zwar bestehen und
verhindert weiterhin, dass jemand den eigenen Antrag entscheidet; er läuft
für Philipp nur ins Leere, weil kein Antrag mehr nötig ist. Wer das später
wieder enger haben will, nimmt ihm `system_admin` und lässt sich von Pia
freigeben.

**Pias Antrag steht, entschieden ist er nicht.** In
`shareholder_approvals` liegt eine Zeile mit `status = 'pending'`,
`requested_for = Pia`, `requested_by = Philipp`. Ich habe bewusst nur den
**Antrag** angelegt und keine Entscheidung: `approved_by` und `decided_at`
sind leer. Die Zeile soll Philipps Entscheidung festhalten, nicht meine.

Zu entscheiden ist sie in der App unter **Finanzen → Freigaben**
(`/finance/approvals`). Danach erfüllt auch Pia `is_shareholder()`.

### Eine Lücke in der Oberfläche

Der Freigabe-Bildschirm **entscheidet** bestehende Anträge, er **legt keine
an**. Für ein bereits vorhandenes Profil gibt es in der App keinen Weg,
einen Freigabeantrag zu stellen — deshalb musste Pias Antrag hier von Hand
entstehen. Solange nur zwei Gesellschafter existieren, fällt das nicht ins
Gewicht; für jede weitere Person fehlt der Einstieg. Nicht gebaut, weil es
eine eigene Entscheidung über den Ablauf ist und nicht Teil dieses Auftrags.

### Das ursprüngliche Henne-Ei-Problem

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
