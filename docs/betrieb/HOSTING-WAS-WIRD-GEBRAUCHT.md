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

**Empfehlung: Webhosting → Premium, 2,99 EUR/Monat.**

Stand 08.09.2026, aus den Screenshots der deutschen Preisseite. Preise
sind Aktionspreise mit 48 Monaten Vorauszahlung.

| | Premium | Unlimited |
|---|---|---|
| Aktionspreis | 2,99 EUR/Mon | 3,99 EUR/Mon |
| 48 Monate im Voraus | 143,52 EUR | 191,52 EUR |
| **Verlängerung danach** | **9,99 EUR/Mon** | **16,99 EUR/Mon** |
| Websites | 3 | unbegrenzt |
| Speicher | 20 GB SSD | 50 GB NVMe |
| Backups | wöchentlich | täglich |
| CDN, E-Commerce, KI-Tools | nein | ja |

Gebraucht wird **eine** Website von wenigen hundert Kilobyte. Premium
ist damit bereits um Größenordnungen überdimensioniert; Unlimited löst
kein Problem, das wir haben.

Was in Unlimited zusätzlich steckt, brauchen wir nicht:

- **Tägliche statt wöchentliche Backups.** Die Seite liegt vollständig
  im Git-Repository. Geht auf dem Server etwas kaputt, wird sie neu
  hochgeladen — das Backup des Hosters ist nicht die Sicherung, auf die
  es ankommt.
- **CDN.** Sinnvoll bei weltweitem Publikum. Unseres wohnt im Sülzetal.
- **E-Commerce.** Es wird nichts über die Website verkauft.
- **KI-Tools / AI Builder.** Gebaut wird in Lovable und hier.
- **Unbegrenzte Postfächer.** Zwei Adressen genügen.

**Der eigentliche Unterschied ist nicht der Aktionspreis, sondern die
Verlängerung.** Heute trennt beide 1 EUR im Monat, ab Jahr fünf sind es
7 EUR — rund 84 EUR im Jahr für Funktionen, die ungenutzt bleiben.

Falls links von Premium noch ein kleinerer Tarif steht (ein Tarif für
eine einzelne Website), tut der es genauso, sofern er Postfächer
enthält.

### Vor dem Klick auf „Plan wählen"

**Der Auftragsverarbeitungsvertrag ist geklärt.** Philipp hat am
08.09.2026 die AGB gelesen: Hostinger sieht darin eine Auftragsver-
arbeitung nach Art. 28 DSGVO vor. Damit fällt der Einwand weg, an dem
Lovable gescheitert ist. Ich konnte das nicht selbst nachlesen —
hostinger.com ist aus meiner Umgebung gesperrt —, die Feststellung
stammt aus der Primärquelle und von demjenigen, der den Vertrag
schliesst.

Zwei Dinge gehören trotzdem noch dazu:

1. **Kommt der Vertrag automatisch mit den AGB zustande, oder muss er
   gesondert angefordert werden?** Beides ist üblich. Ein AVV in den AGB
   ist wirksam — Art. 28 Abs. 9 DSGVO lässt elektronische Form zu —,
   aber wenn Hostinger eine gesonderte Erklärung verlangt, ist er ohne
   sie eben nicht geschlossen.
2. **Eine datierte Kopie sichern**, in der Fassung, die beim
   Vertragsschluss galt. AGB ändern sich. Wer später nachweisen muss,
   was vereinbart war, braucht das Dokument, nicht den Link
   (Rechenschaftspflicht, Art. 5 Abs. 2 DSGVO).

Offen bleibt unabhängig davon:

3. **Rechenzentrum in der EU.** Der AVV sagt nichts darüber, wo die
   Server stehen — das wird bei der Einrichtung gewählt. Steht der
   Server ausserhalb, braucht die Datenschutzerklärung einen Abschnitt
   zum Drittlandtransfer, den sie nicht hat.
4. **Sind im Premium-Tarif Postfächer enthalten?** Auf dem Screenshot
   ist die Zeile nicht zu sehen. Nur wichtig, falls
   `info@boerdesnack24.de` gewünscht ist.

Nicht ausschlaggebend: „Domain – 1 Jahr kostenlos". `boerdesnack24.de`
ist bereits gekauft.

### Warum nicht „Web-App Hosting"

Der Menüpunkt heisst dort „Web-App Hosting" und stellt Node.js-
Anwendungen aus GitHub bereit. Er **würde** funktionieren: das
Lovable-Projekt ist eine Node-Anwendung, sie liesse sich direkt so
betreiben.

Trotzdem ist gewöhnliches Webhosting die bessere Wahl. Eine Seite aus
sechs Textseiten braucht keinen laufenden Server. Was nicht läuft, kann
nicht abstürzen, muss nicht aktualisiert werden und bietet keine
Angriffsfläche. Statische Dateien sind ausserdem schneller als jede
serverseitige Erzeugung.

Ebenfalls nicht nötig: VPS, Cloud Hosting, WooCommerce, Managed
WordPress. Kein WordPress im Spiel, kein Shop, kein Root-Zugriff nötig.

## Der statische Build steht

Seit 10.09.2026 rendert das Lovable-Projekt alle sechs Seiten vor. Der
Ordner, der zu Hostinger hochgeladen wird, heisst **`dist/client`**.
Keine Laufzeitumgebung, kein Node auf dem Zielserver — genau das, wofuer
gewoehnliches Webhosting gedacht ist.

Falls beim Hochladen doch etwas klemmt, liegt im Repository unter
`apps/landing/` eine fertige statische Fassung (index.html,
impressum.html, datenschutz.html, CSS, JavaScript). Sie war als
Referenzfassung gedacht und laesst sich unveraendert hochladen.

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
