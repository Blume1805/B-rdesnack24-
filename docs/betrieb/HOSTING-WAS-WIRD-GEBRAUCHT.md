# Was bei Hostinger gebraucht wird — und was nicht

Stand 08.09.2026. Anlass: die Frage, welches Hostinger-Produkt für
Landingpage, Gesellschafter-App und Kunden-App nötig ist.

## Die kurze Antwort

**Von Hostinger wird genau ein Ding gebraucht: ein einfaches
Webhosting-Paket für die Landingpage.** Für die beiden Apps braucht es
dort nichts.

| | Was es ist | Wo es läuft | Hostinger nötig? |
|---|---|---|---|
| Landingpage | statische Seite | Hostinger | **ja** |
| Kunden-App | Flutter-App | App Store, Google Play | nein |
| Web-Demo der Kunden-App | Flutter Web | GitHub Pages (kostenlos) | nein |
| Gesellschafter-App | Flutter-App | direkt auf den beiden Telefonen | nein |
| Datenbank, Anmeldung, Dateien | Supabase | Supabase (Frankfurt) | nein |

## Warum die Apps kein Hosting brauchen

Eine App wird **installiert**, nicht aufgerufen. Sie liegt auf dem
Telefon und redet von dort aus über das Internet mit Supabase. Es gibt
keinen Server, der sie ausliefern müsste — deshalb gibt es auch nichts
zu hosten.

**Gesellschafter-App.** Sie hat bewusst **kein** Web-Ziel. Aus
`docs/ARCHITEKTUR-ZWEI-APPS.md`:

> Für die Gesellschafter-App ist bewusst kein Web-Ziel eingerichtet —
> eine öffentlich erreichbare Adresse würde genau das offenlegen, was die
> Trennung verbirgt.

Nachgeprüft am 08.09.2026: `apps/gesellschafter-app/` enthält die Ordner
`android` und `ios`, aber **kein** `web`. Sie lässt sich technisch gar
nicht als Website ausliefern.

„Von überall darauf zugreifen" ist trotzdem erfüllt, und zwar schon
heute: Die App verbindet sich von jedem Netz aus mit Supabase. Was
„überall" verhindern würde, wäre eine Datenbank im eigenen Wohnzimmer —
die gibt es nicht.

Die APK zum Installieren entsteht im Workflow `release.yaml` als
Artefakt und wird von GitHub heruntergeladen. Auch dafür wird kein
Webspace gebraucht.

**Kunden-App.** Die geht in die Stores. Die Web-Demo läuft auf GitHub
Pages und kostet nichts; sie dorthin umzuziehen, brächte keinen Vorteil
und würde die Datenschutzerklärung erneut ändern.

## Welches Paket für die Landingpage

Die Seite ist **reiner Inhalt**: sechs Seiten, kein Formular, keine
Anmeldung, keine Datenbank. Ausgeliefert werden fertige HTML-Dateien.

**Nicht nötig ist „Webanwendungs-Hosting".** Das ist für Anwendungen
gedacht, die auf dem Server laufen (Node, PHP, Python). Unsere Seite
läuft im Browser des Besuchers, nicht auf dem Server. Wer das bucht,
bezahlt eine Laufzeitumgebung, die absichtlich nicht benutzt wird.

Das billigste gewöhnliche Webhosting genügt — **wenn** es diese vier
Punkte erfüllt:

1. **Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.** Das ist der
   Grund, aus dem Lovable als Hoster ausgeschieden ist. Vor dem Kauf
   prüfen, nicht danach.
2. **Rechenzentrum in der EU** — und zwar auswählbar. Steht der Server
   ausserhalb, braucht die Datenschutzerklärung einen ganzen Abschnitt
   zum Drittlandtransfer.
3. **Eigene Domain und kostenloses SSL-Zertifikat.** Ohne HTTPS zeigt
   jeder Browser eine Warnung.
4. **Eine Website reicht.** Mehr wird nicht gebraucht.

Speicherplatz, Besucherzahlen und Arbeitsspeicher sind bei dieser Seite
kein Kriterium: Sie ist wenige hundert Kilobyte gross.

## Sicherheitsnetz, falls der statische Build klemmt

Das Lovable-Projekt baut derzeit über Nitro für Cloudflare. Für
Hostinger muss daraus ein statischer Build werden — das steht noch aus.

Falls das nicht auf Anhieb klappt, gibt es bereits eine fertige
statische Fassung im Repository unter `apps/landing/` (index.html,
impressum.html, datenschutz.html, CSS, JavaScript). Sie war als
Referenzfassung gedacht und lässt sich unverändert hochladen.

Ein einfaches Webhosting-Paket ist also in keinem Fall die falsche
Entscheidung.

## Was sonst noch Geld kostet (nicht bei Hostinger)

| Posten | Wofür | Grössenordnung |
|---|---|---|
| Apple Developer Program | Kunden-App im App Store | jährlich |
| Google Play Developer | Kunden-App bei Google Play | einmalig |
| Supabase Pro | steht schon auf der Liste (Abschnitt 3) | monatlich |

Preise absichtlich ohne Zahlen — sie ändern sich, und ich kann sie von
hier aus nicht nachschlagen.

**Für iPhones ist die Gesellschafter-App der schwierigere Fall.** Android
nimmt eine signierte APK direkt an. Apple lässt das nicht zu: Ohne Store
geht es dort nur über das Apple Developer Program, entweder per TestFlight
oder über eine Geräteregistrierung. Das Entwicklerkonto wird für die
Kunden-App ohnehin gebraucht, es entstehen also keine zusätzlichen
Kosten — aber der Weg ist ein anderer als bei Android.

Offen: Nutzen Philipp und Pia Android oder iPhone? Davon hängt ab, wie
die App auf die Geräte kommt, nicht was gekauft werden muss.

## E-Mail-Adressen unter der eigenen Domain

Im Impressum steht heute `boerdesnack24@gmail.com`. Zulässig ist das —
eine geschäftliche Adresse unter der eigenen Domain wirkt aber anders.
Wer das will, achtet beim Tarif auf enthaltene Postfächer oder bucht den
Dienst getrennt. Keine Pflicht, nur eine Überlegung beim Kauf.
