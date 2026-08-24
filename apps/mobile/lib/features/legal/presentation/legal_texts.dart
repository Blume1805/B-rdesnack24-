/// Zentral gepflegte Vorlagen für die Rechtsseiten der App.
///
/// **Wichtig:** Diese Texte sind technische Vorlagen und **kein Anwaltsdokument**.
/// Vor Go-Live müssen sie durch einen Fachanwalt für IT-/Datenschutzrecht
/// geprüft und final ergänzt werden (insbesondere gesetzlicher Vertreter,
/// Steuernummer, ggf. USt-ID, Berufshaftpflicht usw. gemäß § 5 DDG).
///
/// ## Datenschutzerklärung: Stand v2 (09.08.2026)
///
/// Die Fassung v1 beschrieb vier Verarbeitungen, die es nachweislich nicht
/// gibt — Push-Gerätetokens, Nutzungsanalyse, Standortabfrage und
/// Empfehlungen — und nannte mit Firebase Cloud Messaging und Google Maps
/// zwei Empfänger, die nirgends eingebunden sind. Umgekehrt fehlten die
/// Empfänger, die tatsächlich Daten sehen (Resend, GitHub Pages, sevDesk,
/// DocuSign), die Drittlandübermittlung in die USA und vor allem die
/// Offenlegung des Profilings für individuelle Angebote.
///
/// Eine Datenschutzerklärung, die nicht vorhandene Verarbeitungen aufzählt,
/// ist genauso falsch wie eine, die vorhandene verschweigt: Sie verlangt
/// Einwilligungen ins Leere und verdeckt gleichzeitig, was wirklich
/// geschieht. v2 beschreibt ausschliesslich das, was im Code, in der
/// Datenbank und in den ausgerollten Functions nachgewiesen wurde.
///
/// Grundlage ist der technische Ist-Zustandsbericht vom 09.08.2026. Wird
/// eine der dort genannten Funktionen aktiviert — insbesondere Push,
/// Analytics oder ein Zahlungsdienstleister —, muss dieser Text VOR der
/// Aktivierung nachgezogen werden.
abstract final class LegalTexts {
  // v4 (09.08.2026): Die Rechtsseiten liegen jetzt hinter einer gemeinsamen
  // Übersicht (`/legal`) statt als sieben Einzelzeilen im Profil. Dabei fiel
  // auf, dass die Zahl in Abschnitt 4 der Barrierefreiheitserklärung nicht
  // mehr stimmte — sie ist nachgemessen und korrigiert.
  //
  // v5 (09.08.2026): Überschriften und die Stellen, auf die es ankommt,
  // sind mit `**…**` ausgezeichnet und werden fett dargestellt. Am Wortlaut
  // ändert sich nichts — `legal_rich_text_test.dart` prüft für jeden Text,
  // dass beim Zerlegen kein Zeichen verlorengeht. Wer hier weiterschreibt:
  // Die Auszeichnung endet an der Zeilengrenze, ein Paar über zwei Zeilen
  // bleibt sichtbar stehen.
  //
  // v6 (17.08.2026): Punkte fürs tägliche Einloggen (Migration 0113). Neu
  // gespeichert wird der Kalendertag, an dem die App geöffnet wurde —
  // Verhaltensdaten, aus denen ein geldwerter Vorteil abgeleitet wird.
  // Deshalb: eigener Buchstabe k) in Abschnitt 1, Speicherdauer von 90
  // Tagen in Abschnitt 6, Widerspruchsrecht in Abschnitt 7 und die
  // Ergänzung des Profiling-Abschnitts 8. Ausdrücklich mit aufgenommen ist
  // die Einschränkung, dass ohne Abo zwar gesammelt, aber kein Gutschein
  // vergeben wird — sonst weckt ein voller Fortschrittsbalken eine
  // Erwartung, die die Datenbank nicht einlöst.
  static const version = 'v10 · 2026-08';

  // ── Impressum (§ 5 DDG) ────────────────────────────────────────────────────
  static const imprint = '''
**Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)**

Bördesnack24 GbR
Sülldorfer Str. 3A
39171 Sülzetal OT Osterweddingen
Deutschland

Vertretungsberechtigte Gesellschafter
Philipp Blume
Pia Blume


**KONTAKT**

E-Mail: boerdesnack24@gmail.com
Telefon: 0157 30065762
Telefon: 0151 21076771

Wir antworten auf E-Mails in der Regel innerhalb eines Werktages.


**UNTERNEHMENSANGABEN**

Rechtsform: Gesellschaft bürgerlichen Rechts (GbR)
Die Bördesnack24 GbR ist nicht im Handelsregister eingetragen.

Steuernummer: 102/178/01635
Umsatzsteuer-Identifikationsnummer nach § 27a UStG: DE 458804058


**VERANTWORTLICH FÜR DEN INHALT (§ 18 Abs. 2 MStV)**

Philipp Blume
Sülldorfer Str. 3A
39171 Sülzetal OT Osterweddingen
E-Mail: boerdesnack24@gmail.com


**ZUSTÄNDIGE AUFSICHTSBEHÖRDE FÜR LEBENSMITTELRECHT**

Landkreis Börde
Amt für Gesundheit und Verbraucherschutz
Bornsche Straße 2
39340 Haldensleben


**VERBRAUCHERSTREITBEILEGUNG**

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
https://ec.europa.eu/consumers/odr

Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
Verbraucherschlichtungsstelle teilzunehmen.


**VERANTWORTLICHKEIT FÜR INHALTE**

Wir halten die Informationen in dieser App nach bestem Wissen aktuell, richtig und
vollständig. Eine Gewähr dafür können wir jedoch nicht übernehmen, soweit das
gesetzlich zulässig ist. Gesetzliche Haftungsansprüche bleiben unberührt.

Für die Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.


**URHEBERRECHT**

Die von der Bördesnack24 GbR erstellten Inhalte und Werke in dieser App unterliegen
dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede
Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer vorherigen
Zustimmung, soweit das Gesetz nichts anderes bestimmt.

Soweit Inhalte nicht von uns erstellt wurden, beachten wir die Rechte Dritter und
kennzeichnen sie, wo es erforderlich ist.


**WEITERE RECHTSTEXTE**

Datenschutzerklärung, Nutzungsbedingungen, Widerrufsbelehrung,
Zahlungsinformationen, Cookie- und Tracking-Hinweise, Barrierefreiheitserklärung
sowie die Hinweise zur automatisierten Auswahl stehen als eigene Seiten im
Bereich „Rechtliches" — bewusst getrennt, damit jede Angabe dort steht, wo man
sie sucht.
''';

  // ── Datenschutzerklärung (Art. 12/13 DSGVO, § 25 TDDDG) ────────────────────
  static const privacy = '''
**Datenschutzerklärung ($version)**

Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist die Bördesnack24 GbR,
Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen (Kontakt siehe Impressum).

Wir haben diese Erklärung entlang des tatsächlichen Systems geschrieben, nicht entlang
einer Vorlage. Sie beschreibt deshalb auch ausdrücklich, was wir NICHT tun — siehe
Abschnitt 3. Wir halten das für ehrlicher als eine lange Liste von Klauseln auf Vorrat.


**1) WELCHE DATEN WIR VERARBEITEN**

  **a) Kontodaten**
     E-Mail-Adresse, Name, optional Telefonnummer, Geburtsdatum, optional Anrede.
     Zweck: Konto anlegen, anmelden, Zugriff steuern.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag).

     Zum Geburtsdatum: Wir erheben es als Altersnachweis, weil kostenpflichtige Abos
     Volljährigkeit voraussetzen, und für den Geburtstagsgutschein. Es lässt sich nach
     der Registrierung technisch nicht mehr ändern — die Datenbank weist jede Änderung
     zurück. Ist es falsch erfasst, korrigieren wir es auf Anfrage von Hand
     (Art. 16 DSGVO).

  **b) Kundenstammdaten**
     Kundennummer sowie bei Geschäftskunden Firmenname, Rechnungsanschrift,
     Steuernummer und Umsatzsteuer-Identifikationsnummer.
     Zweck: Abrechnung und Rechnungsstellung.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO (§ 14 UStG).

  **c) Kaufdaten**
     Gekaufte Produkte, Menge, Einzel- und Gesamtpreis, Zeitpunkt, Automat und die
     Zahlungsart als Kategorie.
     Zweck: Kaufabwicklung, digitaler Kassenbon, Buchhaltung.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO.

     Bitte beachten: Weil zu jedem Kauf Automat und Uhrzeit gespeichert werden, lässt
     sich daraus nachvollziehen, wann Sie an welchem Automaten waren. Das ist kein
     Standortdatum Ihres Geräts — wir fragen Ihren Standort nie ab —, kann in der
     Zusammenschau aber einen ähnlichen Aussagewert haben. Wir nennen das hier
     ausdrücklich, weil es nicht auf der Hand liegt.

  **d) Individuelle Angebote (Profiling)**
     Wir werten Ihre Kaufhistorie der letzten 90 Tage aus, um das von Ihnen am
     häufigsten gekaufte Produkt zu ermitteln, und bieten Ihnen genau darauf einen
     Rabatt an. Verwendet werden ausschliesslich Produkt und Menge Ihrer eigenen
     Käufe aus diesem Zeitraum.

     Der Rabatt beträgt fest 10 Prozent und ist für alle Kundinnen und Kunden gleich
     hoch. Es entscheidet sich also nur, WELCHES Produkt vergünstigt wird — nicht, ob
     oder wie stark. Haben Sie in den 90 Tagen nichts gekauft, wählen wir ein
     zufälliges Produkt; dann findet keine Auswertung statt.

     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
     Kundenbindung und an einem Angebot, das zu Ihnen passt).

     **Sie können dieser Verarbeitung jederzeit widersprechen (Art. 21 DSGVO)** — formlos
     an die im Impressum genannte Adresse. Danach erhalten Sie nur noch allgemeine
     Angebote. Ein Nachteil entsteht Ihnen dadurch nicht.

  **e) Geburtstags- und Jubiläumsgutscheine**
     Auf Grundlage Ihres Geburtsdatums beziehungsweise des Anmeldedatums.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO; Widerspruch wie unter d).

  **f) Produktbewertungen**
     Ausschliesslich eine Bewertungszahl zu einem Produkt. Wir speichern dazu keinen
     Freitext, keinen Namen und keine IP-Adresse. Bewertungen werden nicht mit Ihrem
     Namen veröffentlicht.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Sortimentsgestaltung).

  **g) Kontaktanfragen**
     Kategorie, Betreff und Nachrichtentext.
     Zweck: Bearbeitung Ihres Anliegens.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b beziehungsweise lit. f DSGVO.

  **h) E-Mail-Versand**
     Wir versenden Systemnachrichten (Bestätigung der Registrierung, Passwort
     zurücksetzen, Abo- und Kündigungsbestätigungen). Diese sind zur Vertragserfüllung
     erforderlich, Art. 6 Abs. 1 lit. b DSGVO, teils gesetzlich vorgeschrieben
     (§ 312k Abs. 2 BGB).

     Werbliche E-Mails erhalten Sie nur mit Ihrer vorherigen Einwilligung, getrennt
     nach Themen (Produktneuheiten, Aktionen, Geburtstagsgruss). Die Einwilligung ist
     freiwillig, jederzeit über den Abmeldelink in jeder Werbemail oder in den
     Kontoeinstellungen widerrufbar — und der Widerruf ist genauso einfach wie die
     Erteilung. Wir dokumentieren Zeitpunkt und Wortlaut jeder Einwilligung als
     Nachweis (Art. 7 Abs. 1 DSGVO). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO,
     § 7 Abs. 2 Nr. 2 UWG.

  **i) Protokolle**
     Ein Änderungsprotokoll hält fest, wer welchen Datensatz wann geändert hat,
     einschliesslich des Standes vor und nach der Änderung. Ein Versandprotokoll hält
     fest, welche E-Mail wann an wen mit welchem Inhalt verschickt wurde.
     **Eine Ausnahme:** Bei Mails, die einen Anmeldelink oder einen Einmalcode
     enthalten — Passwort zurücksetzen, Anmeldelink, Einladung, Bestätigung der
     Registrierung, Adresswechsel —, protokollieren wir Empfänger, Betreff,
     Zeitpunkt und Zustellstatus, **nicht aber den Inhalt.** Sonst stünde der
     Zugang zu Ihrem Konto in einem Protokoll, das unsere Beschäftigten lesen
     können.
     Zweck: Nachvollziehbarkeit, Missbrauchserkennung, Nachweis des Versands.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f und lit. c DSGVO.

  **j) Betriebliche Nachweise (betrifft nur Beschäftigte und Gesellschafter)**
     HACCP- und Hygieneprotokolle, Belehrungen nach IfSG, Wartungs- und
     Reinigungsnachweise, Buchhaltungsdaten, elektronische Unterschriften.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit LMHV, IfSG, AO, HGB.

  **k) Punkte für tägliches Einloggen**
     Öffnen Sie die App an einem Tag, speichern wir **diesen Kalendertag** — mehr
     nicht. Keine Uhrzeit, kein Gerät, keine IP-Adresse, kein Standort. Daraus
     berechnen wir Punkte auf dieselben Meilensteine wie beim Einkauf: 10 Punkte je
     Tag für die ersten sechs Tage einer Woche und 100 Punkte zusätzlich, wenn Sie
     an allen sieben Tagen einer Woche da waren.

     Zweck: Kundenbindung. Wird ein Meilenstein erreicht, entsteht ein persönlicher
     Gutschein — **allerdings nur bei aktivem Abo.** Ohne Abo sammeln Sie sichtbar
     mit, erhalten am Meilenstein aber keinen Gutschein. Wir sagen das hier
     ausdrücklich, damit der volle Fortschrittsbalken keine falsche Erwartung weckt.

     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), soweit das
     Punktesystem Teil Ihres Abos ist; sammeln Sie ohne Abo, stützen wir uns auf
     Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kundenbindung).

     Die Auswertung Ihrer Öffnungstage ist **Profiling nach Art. 4 Nr. 4 DSGVO**,
     weil aus Ihrem Nutzungsverhalten ein geldwerter Vorteil abgeleitet
     wird. **Sie können ihr jederzeit widersprechen (Art. 21 DSGVO)** — formlos an die
     im Impressum genannte Adresse. Danach zeichnen wir Ihre Öffnungstage nicht mehr
     auf; Punkte sammeln Sie dann nur noch über Ihre Einkäufe.

  **l) Punkte für erfüllte Aufgaben**
     Der Belohnungs-Bereich zeigt Aufgaben wie „Wochen-Snacker" (drei Käufe in sieben
     Tagen) oder „Morgenmuffel-Kur" (drei Käufe zwischen 7 und 9 Uhr). Erfüllen Sie
     eine solche Aufgabe zum ersten Mal, schreiben wir Ihnen einmalig die dort
     genannten Punkte gut — 300 beziehungsweise 200.
     **Jede Aufgabe zahlt genau einmal aus**, eine Wiederholung gibt es nicht.

     Dafür werten wir aus, wie viele Käufe Sie im jeweiligen Zeitfenster getätigt
     haben, wann diese Käufe stattfanden und an welchem Automaten. Es entstehen
     **keine neuen Daten**: Wir rechnen ausschliesslich mit Angaben, die ohnehin zu
     Ihrem Kauf gespeichert sind. Gespeichert wird zusätzlich nur, welche Aufgabe
     Ihnen wann wie viele Punkte gebracht hat — solange Ihr Konto besteht, weil
     daran die Einmaligkeit hängt.

     Zweck: Kundenbindung. Wie bei den übrigen Punkten gilt: Sammeln können alle,
     der Meilenstein-Gutschein entsteht aber nur bei aktivem Abo.

     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), soweit das
     Punktesystem Teil Ihres Abos ist; sonst Art. 6 Abs. 1 lit. f DSGVO
     (berechtigtes Interesse an Kundenbindung).

     Auch diese Auswertung ist **Profiling nach Art. 4 Nr. 4 DSGVO**, weil aus Ihrem
     Kaufverhalten ein geldwerter Vorteil abgeleitet wird.
     **Sie können ihr jederzeit widersprechen (Art. 21 DSGVO)** — formlos an die
     im Impressum genannte Adresse.
     Danach prüfen wir Ihre Käufe nicht mehr auf die Aufgaben; bereits
     gutgeschriebene Punkte bleiben Ihnen erhalten.

  **m) Einkauf an einem Automaten auf dem Gelände Ihres Arbeitgebers**
     Steht ein Automat auf dem Gelände eines Unternehmens, das mit uns einen
     Vertrag hat, und sind Sie dort als Beschäftigte oder Beschäftigter
     hinterlegt, dann gilt für einen Einkauf an **diesem** Automaten etwas
     anderes als sonst:

     * Der Kauf geht **auf Rechnung Ihres Arbeitgebers**, nicht auf Ihre.
     * **Ihr Arbeitgeber erfährt von diesem Kauf.** Übermittelt werden
       Zeitpunkt, Betrag, Automat und die gekauften Artikel. Einsehen können
       das die Personen, die Ihr Arbeitgeber bei uns als Firmen-Administrator
       benannt hat.
     * Sie sammeln dafür **keine** Treuepunkte, keinen Statusumsatz, keinen
       Aufgabenfortschritt und keine Spendenzuschreibung. Dieser Kauf zählt
       für Ihr privates Konto nicht mit — wir schreiben Ihnen keinen Vorteil
       gut, den ein anderer bezahlt hat.
     * In Ihrer Beleg-Übersicht erscheint der Kauf weiterhin. Sie haben ihn
       getätigt und sollen nachsehen können, was Sie entnommen haben.

     Maßgeblich ist allein der **Standort des Automaten**, nicht Ihre Person
     und nicht Ihre Kundenkarte. Kaufen Sie mit derselben Karte an einem
     öffentlichen Automaten, ist das ein ganz normaler Privatkauf: Ihr
     Arbeitgeber erfährt davon nichts, und Sie sammeln wie immer.

     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO — die Abwicklung des Kaufs
     ist Erfüllung des Vertrages zwischen uns und Ihrem Arbeitgeber, den Sie
     an diesem Automaten in Anspruch nehmen. Für die Abrechnung selbst
     kommt Art. 6 Abs. 1 lit. f DSGVO hinzu (berechtigtes Interesse an einer
     nachvollziehbaren Rechnung).

     Wir weisen ausdrücklich darauf hin, weil der Unterschied am Automaten
     nicht sichtbar ist:
     **Wollen Sie nicht, dass Ihr Arbeitgeber von einem Einkauf erfährt, nutzen Sie einen öffentlichen Automaten.**
     Welche
     Regelungen zwischen Ihnen und Ihrem Arbeitgeber gelten — etwa ein
     Verpflegungszuschuss und dessen Grenzen —, ist Sache Ihres
     Arbeitsverhältnisses und nicht unsere.


**2) WAS AUF IHREM GERÄT GESPEICHERT WIRD (§ 25 TDDDG)**

  Die App speichert Ihre Anmeldesitzung und Ihre Anzeigeeinstellungen lokal auf Ihrem
  Gerät. Beides ist für den von Ihnen ausdrücklich gewünschten Dienst unbedingt
  erforderlich; es gilt die Ausnahme des § 25 Abs. 2 Nr. 2 TDDDG.

  Darüber hinaus greifen wir nicht auf Ihr Endgerät zu. Es gibt keine Analyse- oder
  Werbecookies, keine Zählpixel, keine Geräte- oder Werbe-Kennungen. Deshalb fragt die
  App auch nicht nach einer Cookie-Einwilligung — es gibt nichts, wozu wir sie
  bräuchten.


**3) WAS WIR AUSDRÜCKLICH NICHT TUN**

  Wir haben unser System daraufhin geprüft und halten hier fest:

  * Keine Analyse- oder Tracking-Dienste. Weder Google Analytics noch Firebase,
    Sentry, PostHog, Matomo, Meta, TikTok oder vergleichbare Werkzeuge sind
    eingebunden — auch nicht deaktiviert im Hintergrund.
  * Keine Push-Benachrichtigungen. Die App verschickt keine, und es ist kein
    Push-Dienst eingebunden.
  * Keine Standortabfrage. Die App fordert keine Standortberechtigung an und
    erhebt weder GPS-, WLAN- noch Bluetooth-Position.
  * Keine IP-Adressen in unseren Anwendungsdaten. Wir speichern sie weder zu
    Bewertungen noch zu Kontaktanfragen oder Protokolleinträgen.
  * **Keine künstliche Intelligenz.** Es werden keine Daten an Sprachmodelle oder
    KI-Dienste übermittelt. Die individuellen Angebote entstehen durch eine feste
    Rechenregel in unserer Datenbank, nicht durch KI.
  * Keine Zahlungsdaten. Wir speichern weder Kartennummer noch IBAN noch
    Zahlungstoken und binden keinen Zahlungsdienstleister ein. Gespeichert wird
    ausschliesslich die Zahlungsart als Kategorie (bar, EC-Karte, Kreditkarte,
    kontaktlos, andere). Die eigentliche Zahlung wickelt der Automat
    beziehungsweise Ihr Kartenanbieter ab; wir erfahren davon nur, dass und womit
    bezahlt wurde.
  * Keine Schriftarten von externen Servern. Alle Schriften liegen in der App;
    Anfragen an Google-Schriftserver werden technisch unterbunden.
  * Kein Verkauf und keine Weitergabe Ihrer Daten zu Werbezwecken Dritter.


**4) WER IHRE DATEN ZU SEHEN BEKOMMT**

  * Supabase (Datenbank, Anmeldung, Serverfunktionen). Verarbeitung in der Region
    Frankfurt am Main. Auftragsverarbeitung nach Art. 28 DSGVO.
  * Resend (E-Mail-Versand). Verarbeitung in der EU-Region Irland. Übermittelt
    werden Empfängeradresse, Betreff und Inhalt der jeweiligen E-Mail.
  * GitHub Pages (Auslieferung der Web-Version). Beim Aufruf der Web-App wird Ihre
    IP-Adresse technisch bedingt an GitHub Inc., USA übertragen.
  * sevDesk (Buchhaltung, Deutschland) — Rechnungsdaten.
  * DocuSign (elektronische Unterschriften, USA) — betrifft ausschliesslich
    Beschäftigte und Gesellschafter, keine Kundendaten.

  Für Wetterdaten zur Absatzplanung nutzen wir den Dienst Bright Sky auf Basis von
  Daten des Deutschen Wetterdienstes. Dabei werden keine personenbezogenen Daten
  übermittelt.

  An Behörden geben wir Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind.

  Hinweis zu Kartenlinks: Im Automatenfinder können Sie eine Route öffnen. Dabei
  verlassen Sie unsere App und rufen Google Maps auf; Google erhält dann Ihre
  IP-Adresse und das Ziel. Wir betten keine Karte ein und übermitteln von uns aus
  nichts — der Aufruf erfolgt erst, wenn Sie den Link antippen.


**5) ÜBERMITTLUNG IN DIE USA**

  Zwei der oben genannten Empfänger sitzen in den USA: GitHub (Auslieferung der
  Web-App) und DocuSign (interne Unterschriften). Für diese Übermittlungen stützen wir
  uns auf die Standardvertragsklauseln der EU-Kommission beziehungsweise auf die
  Zertifizierung nach dem EU-US Data Privacy Framework.

  Die native App für iOS und Android lädt ihre Oberfläche nicht über GitHub; wer die
  App aus dem Store nutzt, ist von dieser Übermittlung nicht betroffen.


**6) WIE LANGE WIR SPEICHERN**

  * Konto- und Kundenstammdaten: bis zur Löschung des Kontos, danach nur noch, soweit
    gesetzliche Aufbewahrungspflichten bestehen.
  * **Kauf- und Rechnungsdaten: 10 Jahre (§ 147 AO, § 257 HGB).**
  * Einwilligungen und deren Widerruf: bis zum Ablauf möglicher Nachweispflichten.
  * Individuelle Angebote: drei Tage Gültigkeit; der Datensatz bleibt zur
    Missbrauchsvermeidung darüber hinaus bestehen.
  * **Öffnungstage der App: 90 Tage.** Für die Punkte zählt der laufende Monat, für
    die Wochenübersicht die laufende Woche. Die 90 Tage geben Luft für Rückfragen zu
    einem Gutschein aus dem Vormonat; danach wird täglich automatisch gelöscht.
  * HACCP- und IfSG-Nachweise: nach den jeweiligen gesetzlichen Vorgaben.
  * Änderungs- und Versandprotokoll: Für diese beiden Protokolle ist derzeit keine
    automatische Löschfrist eingerichtet. Wir sagen das offen, statt eine Frist zu
    behaupten, die technisch nicht durchgesetzt wird. Eine Frist wird eingeführt; bis
    dahin löschen wir Protokolleinträge auf begründetes Verlangen, soweit keine
    Nachweispflicht entgegensteht.


**7) IHRE RECHTE**

  * Auskunft (Art. 15): In der App unter „Meine Daten exportieren" erhalten Sie
    sofort eine vollständige Kopie Ihrer gespeicherten Daten.
  * Berichtigung (Art. 16), auch für das gesperrte Geburtsdatum — bitte an den
    Kundenservice wenden.
  * Löschung (Art. 17): In der App unter „Kontolöschung beantragen". Sie erhalten
    umgehend eine Eingangsbestätigung per E-Mail; wir bearbeiten den Antrag
    unverzüglich, **spätestens binnen eines Monats (Art. 12 Abs. 3 DSGVO)**. Daten, die
    wir handels- oder steuerrechtlich aufbewahren müssen, werden für die weitere
    Verwendung gesperrt und erst nach Fristablauf gelöscht.
  * Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20).
  * Widerspruch (Art. 21) gegen die individuellen Angebote, die
    Geburtstagsgutscheine und die Punkte für tägliches Einloggen — siehe
    Abschnitt 1 d) und 1 k).
  * Widerruf jeder Einwilligung mit Wirkung für die Zukunft; die Rechtmässigkeit der
    bis dahin erfolgten Verarbeitung bleibt unberührt.
  * Beschwerde bei einer Aufsichtsbehörde (Art. 77), für uns zuständig:
    Landesbeauftragte für den Datenschutz Sachsen-Anhalt, Leiterstr. 9, 39104 Magdeburg.


**8) AUTOMATISIERTE ENTSCHEIDUNGEN**

  Eine automatisierte Entscheidung im Sinne von Art. 22 DSGVO, die Ihnen gegenüber
  rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt,
  findet nicht statt.

  Die unter 1 d) beschriebene Auswertung Ihrer Kaufhistorie und die unter 1 k)
  beschriebene Auswertung Ihrer Öffnungstage sind Profiling im Sinne von
  Art. 4 Nr. 4 DSGVO — das benennen wir ausdrücklich. Beide führen aber zu keiner
  Entscheidung über Sie: Der Rabattsatz ist für alle gleich, die Punkteregel gilt für
  alle gleich, niemand wird ausgeschlossen, bevorzugt oder anders bepreist, und es
  findet keine Bewertung Ihrer Zahlungsfähigkeit oder Ihres Verhaltens statt.


**9) SICHERHEIT**

  **Alle Verbindungen sind mit TLS verschlüsselt.** Passwörter speichern wir ausschliesslich
  als bcrypt-Hash, nie im Klartext. Der Zugriff auf Daten ist in der Datenbank selbst
  zeilenweise abgesichert (Row Level Security): Jede Abfrage kann technisch nur die
  Daten des jeweils angemeldeten Kontos zurückgeben — auch dann, wenn jemand die
  Kennung eines fremden Kontos kennt. Wir haben das mit echten Testkonten überprüft.


**10) ÄNDERUNGEN**

  Diese Erklärung hat den oben genannten Stand. Ändert sich die Verarbeitung —
  insbesondere bei Aktivierung von Push-Nachrichten, einer Nutzungsanalyse oder eines
  Zahlungsdienstleisters —, aktualisieren wir sie vorher und weisen in der App darauf
  hin. Frühere Fassungen halten wir vor.
''';

  // ── Widerrufsbelehrung (§§ 355 ff. BGB) ────────────────────────────────────
  //
  // Eigene Seite statt eines Abschnitts in den AGB: Die Belehrung muss
  // auffindbar sein, und in einem 11-Punkte-Vertragswerk findet sie
  // niemand. Der Inhalt ist mit § 6 der Nutzungsbedingungen abgestimmt.
  static const withdrawal = '''
**Widerrufsbelehrung ($version)**


**WAREN AUS DEM AUTOMATEN**

Für Waren, die du unmittelbar am Automaten entnimmst, **besteht kein Widerrufsrecht**.
Die Ware wird dir sofort übergeben; ein Fernabsatzvertrag im Sinne der §§ 355 ff. BGB
kommt dabei nicht zustande.

Ist eine Ware verdorben, beschädigt oder wurde sie nicht ausgegeben, gelten deine
gesetzlichen Gewährleistungsrechte. Melde das bitte über das Kontaktformular in der
App oder per E-Mail — wir erstatten oder ersetzen.


**ABONNEMENTS (DIGITALE DIENSTLEISTUNG)**

**Widerrufsrecht**

Du hast das Recht, **binnen vierzehn Tagen ohne Angabe von Gründen** diesen Vertrag zu
widerrufen. **Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.**

Um dein Widerrufsrecht auszuüben, musst du uns

  Bördesnack24 GbR
  Sülldorfer Str. 3A
  39171 Sülzetal OT Osterweddingen
  E-Mail: boerdesnack24@gmail.com
  Telefon: 0157 30065762

mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine
E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst
dafür das unten stehende Muster-Widerrufsformular verwenden, das aber nicht
vorgeschrieben ist.

Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung
des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.

**Folgen des Widerrufs**

Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir
erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist.
Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der
ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich
etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte
berechnet.

**Vorzeitiger Beginn der Leistung**

Hast du verlangt, dass die Leistung während der Widerrufsfrist beginnen soll, so hast
du uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zum Widerruf bereits
erbrachten Leistung im Vergleich zum Gesamtumfang der vertraglich vereinbarten Leistung
entspricht.

**Erlöschen beim Lifetime-Abo**

Beim Lifetime-Abo **erlischt dein Widerrufsrecht**, wenn wir die Leistung vollständig
bereitgestellt haben und du zuvor ausdrücklich zugestimmt hast, dass wir vor Ablauf der
Widerrufsfrist beginnen, und du bestätigt hast, dass du dein Widerrufsrecht damit
verlierst (§ 356 Abs. 5 BGB). Wir holen beide Bestätigungen vor dem Abschluss
ausdrücklich ein.


**MUSTER-WIDERRUFSFORMULAR**

Wenn du den Vertrag widerrufen willst, fülle dieses Formular aus und sende es zurück.

  An:
  Bördesnack24 GbR, Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen
  E-Mail: boerdesnack24@gmail.com

  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über
  den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):

  ______________________________________________________________

  Bestellt am (*) / erhalten am (*):  ______________________
  Name des/der Verbraucher(s):        ______________________
  Anschrift des/der Verbraucher(s):   ______________________

  Unterschrift (nur bei Mitteilung auf Papier): ______________________
  Datum:                                        ______________________

  (*) Unzutreffendes streichen.


**KÜNDIGUNG IST ETWAS ANDERES**

Der Widerruf beendet den Vertrag rückwirkend innerhalb der ersten 14 Tage. Willst du
ein laufendes Abo zum Ende des Abrechnungszeitraums beenden, ist das eine Kündigung —
dafür gibt es in der App die Schaltfläche „Verträge hier kündigen", die auch ohne
Anmeldung erreichbar ist (§ 312k BGB).
''';

  // ── Zahlungsinformationen ──────────────────────────────────────────────────
  static const payment = '''
**Zahlungsinformationen ($version)**


**AM AUTOMATEN**

Du kannst an unseren Automaten wie folgt bezahlen:

  • bar
  • EC-/Girocard
  • Kreditkarte
  • kontaktlos

Alle Preise verstehen sich als Endpreise einschließlich der gesetzlichen
Umsatzsteuer. **Der am Automaten angezeigte Preis gilt.**

**Welche Daten wir dabei bekommen**

Wir speichern zu deinem Kauf ausschließlich die Zahlungsart als Kategorie — also
etwa „EC-Karte" — zusammen mit Betrag, Zeitpunkt und Automat.

**Wir speichern KEINE Kartennummer, KEINE IBAN und KEINE Zahlungstoken.** Wir haben
auch keinen Zahlungsdienstleister eingebunden. Die Zahlung selbst wickeln das
Kartenterminal am Automaten und dein Kartenanbieter ab; wir erfahren davon nur,
dass und womit bezahlt wurde.


**ABONNEMENTS**

Für erweiterte App-Funktionen bieten wir drei Modelle an, alle Preise inklusive
gesetzlicher Umsatzsteuer:

  • Monats-Abo    **0,99 € pro Monat**
  • Jahres-Abo    **9,99 € pro Jahr**
  • Lifetime-Abo  **79,99 € einmalig**

Das Jahres-Abo entspricht rechnerisch zehn Monatsbeiträgen; zwei Monate sind
darin geschenkt.

**Abrechnung**

Nach Veröffentlichung der App im Apple App Store und bei Google Play läuft die
Abrechnung ausschließlich über den jeweiligen Store. Es gelten ergänzend dessen
Zahlungs- und Abo-Bedingungen; die Verwaltung und Kündigung deines Abos ist dann
auch in den Store-Einstellungen möglich.

Bis dahin ist die Auswahl eines Abo-Modells in der App eine unverbindliche
Vormerkung. **Es wird nichts abgebucht, und es entsteht keine Zahlungspflicht.**

**Mindestalter**

**Kostenpflichtige Abos können nur volljährige Personen abschließen.** Minderjährige
brauchen die Zustimmung ihrer gesetzlichen Vertreter. Die kostenlose Nutzung der
App sowie das Bonus- und Rabattprogramm stehen allen Altersgruppen offen.


**RECHNUNGEN UND BELEGE**

Den digitalen Kassenbon zu einem Kauf kannst du in der App jederzeit erzeugen. Er
wird bei jedem Abruf neu erstellt und nicht dauerhaft als Datei gespeichert.

Der digitale Kassenbon ist ein Nachweis für dich, aber kein steuerlicher Beleg im
Sinne der Kassensicherungsverordnung. Brauchst du eine Rechnung nach § 14 UStG,
melde dich bitte über das Kontaktformular.
''';

  // ── Cookies und Tracking (§ 25 TDDDG) ──────────────────────────────────────
  //
  // Der Text ist kurz, weil der Befund kurz ist. Er wurde am 09.08.2026 am
  // Code geprüft: kein Analytics-Paket in pubspec.yaml, keine Tracking-SDKs,
  // Google Fonts durch einen Shim in web/index.html unterbunden.
  static const cookies = '''
**Cookies und Tracking ($version)**


**DIE KURZE ANTWORT**

**Wir setzen keine Cookies zu Analyse- oder Werbezwecken.** Wir binden keine
Tracking-Dienste ein. Deshalb fragt dich diese App auch nicht nach einer
Cookie-Einwilligung — es gibt nichts, wofür wir sie bräuchten.


**WAS AUF DEINEM GERÄT GESPEICHERT WIRD**

Zwei Dinge, beide technisch notwendig:

  • Deine Anmeldesitzung, damit du nicht bei jedem Start neu eingeben musst,
    wer du bist.
  • Deine Anzeigeeinstellungen in der App.

Beides ist für den von dir gewünschten Dienst unbedingt erforderlich. Es gilt
die Ausnahme des § 25 Abs. 2 Nr. 2 TDDDG; eine Einwilligung ist dafür nicht
nötig. Meldest du dich ab, wird die Sitzung gelöscht.


**WAS WIR NICHT EINSETZEN**

Wir haben unseren Code darauf geprüft. Keines der folgenden Werkzeuge ist
eingebunden — auch nicht abgeschaltet im Hintergrund:

  • Google Analytics, Google Tag Manager
  • Firebase, Crashlytics
  • Sentry, PostHog, Matomo, Mixpanel, Amplitude
  • Meta-, TikTok- oder andere Werbe-SDKs
  • Hotjar, FullStory, Microsoft Clarity, Smartlook
  • Werbe-IDs oder Geräte-Kennungen

Auch Schriftarten laden wir nicht von fremden Servern nach: Alle Schriften
liegen in der App, und Anfragen an Google-Schriftserver werden technisch
unterbunden. Deine IP-Adresse geht damit auch nicht auf diesem Weg an Dritte.


**WENN SICH DAS ÄNDERT**

Sollten wir künftig eine Reichweitenmessung einsetzen wollen, holen wir vorher
deine Einwilligung ein — getrennt, freiwillig und genauso einfach widerrufbar
wie erteilt. Bis dahin gilt diese Seite.
''';

  // ── Barrierefreiheitserklärung (BFSG) ──────────────────────────────────────
  //
  // Fassung 2 (09.08.2026). Die erste Fassung liess offen, dass die
  // Bördesnack24 GbR als Kleinstunternehmen nach § 3 Abs. 3 BFSG von der
  // Dienstleistungspflicht ausgenommen ist — geprüft: keine Beschäftigten,
  // nur zwei Gesellschafter.
  //
  // Die Ausnahme wird hier trotzdem NICHT als Freibrief formuliert. Ein
  // Text, der im Wesentlichen sagt „wir müssen nicht", hilft niemandem,
  // der die App nicht bedienen kann. Deshalb bleibt die Erklärung
  // konkret: was messbar umgesetzt ist, und was messbar fehlt.
  static const accessibility = '''
**Erklärung zur Barrierefreiheit ($version)**

Gilt für die Bördesnack24-App und ihre Web-Fassung.


**1) DIE RECHTSLAGE, EHRLICH VORWEG**

Die Bördesnack24 GbR ist ein Kleinstunternehmen im Sinne von § 2 Nr. 17
Barrierefreiheitsstärkungsgesetz (BFSG): Sie beschäftigt keine Arbeitnehmerinnen
und Arbeitnehmer — sie besteht aus zwei Gesellschaftern — und liegt deutlich
unter den Schwellen von 2 Millionen Euro Jahresumsatz beziehungsweise
Jahresbilanzsumme.

Nach § 3 Abs. 3 BFSG gilt die Pflicht aus § 3 Abs. 1 BFSG nicht für
Kleinstunternehmen, die Dienstleistungen anbieten oder erbringen. Diese App ist
eine Dienstleistung im elektronischen Geschäftsverkehr. Wir sind insoweit von der
gesetzlichen Pflicht ausgenommen, und diese Erklärung ist deshalb KEINE
Konformitätserklärung nach dem BFSG.

Wichtig zur Einordnung: Die Ausnahme gilt für Dienstleistungen, nicht für
Produkte. Für Produkte, die unter § 1 Abs. 2 BFSG fallen, treffen die Pflichten
Hersteller, Einführer und Händler. Wir betreiben unsere Verkaufsautomaten, wir
bringen sie nicht in Verkehr.

Und das Wichtigste: **Dass wir nicht müssen, heisst nicht, dass wir nicht wollen.**
Der Rest dieser Seite sagt konkret, wie weit wir sind — mit Zahlen, nicht mit
Absichtserklärungen.


**2) WAS DIE APP KANN**

Damit klar ist, worauf sich diese Erklärung bezieht:

  • Produkte, Preise und Verfügbarkeit an unseren Automaten ansehen
  • Angebote, Rabatte und Coupons abrufen, darunter individuelle Angebote
  • Punkte fürs tägliche Einloggen sammeln und die Wochenübersicht einsehen
  • die digitale Kundenkarte als QR-Code nutzen
  • den digitalen Kassenbon zu einem Kauf abrufen
  • Produkte bewerten
  • Standorte unserer Automaten finden
  • Konto, Abo und Einwilligungen verwalten

Nicht enthalten: Push-Benachrichtigungen und Unternehmensbewertungen. Beides
gibt es in dieser App nicht — wir führen es hier auf, weil ältere
Beschreibungen etwas anderes nahegelegt haben.


**3) WAS MESSBAR UMGESETZT IST**

  • Bedienelemente sind mindestens 44 x 44 Punkt gross. Das wird automatisch
    geprüft: Die Testfälle laufen bei jeder Codeänderung gegen Apples und
    Googles Mindestgrössen, und ein Verstoss lässt den Build scheitern.
  • Farbkontraste erfüllen WCAG 2.1 Stufe AA für Fliesstext. Auch das läuft
    automatisch mit, für alle Zustände unserer Bausteine.
  • Die Schriftgrösse folgt deiner Systemeinstellung. Vergrösserst du sie im
    Betriebssystem, wächst der Text in der App mit.
  • Rechtstexte sind markierbarer Fliesstext, kein Bild — dein Screenreader
    kann sie vorlesen, du kannst sie kopieren.
  • Farbe ist nie das einzige Unterscheidungsmerkmal; Status wird zusätzlich
    benannt.
  • Fehlermeldungen sagen, was zu tun ist, statt nur dass etwas schieflief.


**4) WO WIR NOCH NICHT SIND**

Wir nennen das mit Zahlen, weil eine vage Formulierung niemandem hilft:

  • Screenreader-Beschriftungen sind bislang in 14 von 167 Quelldateien
    gepflegt. Die Bausteine des Design-Systems und der Kundenbereich sind am
    weitesten; die internen Verwaltungsansichten sind es nicht. Für Kundinnen
    und Kunden ist der wichtigere Teil abgedeckt, vollständig ist es nicht.
  • Die automatische Prüfung deckt die Bausteine des Design-Systems und die
    Rechtstexte ab, nicht jeden einzelnen Bildschirm.
  • PDF-Dokumente, die die App erzeugt — etwa der digitale Kassenbon —, sind
    nicht als barrierefreies PDF/UA ausgezeichnet.
  • Diagramme in den Auswertungen haben noch keine gleichwertige
    Textalternative.
  • Ein unabhängiges externes Audit gab es nicht. Grundlage dieser Erklärung
    sind unsere eigenen automatisierten Tests und eine Durchsicht des Codes.

Brauchst du eine Information, die du wegen einer dieser Lücken nicht erreichst,
schreib oder ruf uns an — wir geben sie dir in einer Form, die für dich
funktioniert. Das ist kein Zugeständnis, sondern der schnellere Weg, solange die
Lücke besteht.


**5) BARRIERE MELDEN**

Sag uns bitte Bescheid, wenn du etwas nicht bedienen konntest. Hilfreich sind:

  • welche Funktion betroffen war
  • was genau nicht ging
  • welches Gerät und welches Betriebssystem du nutzt
  • welche assistive Technologie im Einsatz war, falls zutreffend

  E-Mail: boerdesnack24@gmail.com
  Telefon: 0157 30065762
  Bördesnack24 GbR, Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen

**Wir antworten innerhalb von zwei Wochen.**


**6) WENN UNSERE ANTWORT NICHT REICHT**

Für Barrierefreiheit von Produkten und Dienstleistungen ist bundesweit die
Marktüberwachungsstelle der Länder zuständig:

  MLBF
  Carl-Miller-Straße 6, 39112 Magdeburg
  kontakt@mlbf-barrierefrei.de, 0391 289 230 23

Hinweis der Fairness halber: Weil wir als Kleinstunternehmen von der
Dienstleistungspflicht ausgenommen sind, wird die MLBF unsere App
voraussichtlich nicht als Verstoss verfolgen können. Deine Rückmeldung an uns
ist deshalb der wirksamere Weg — und uns ist sie willkommen.


**7) STAND**

Erstellt und zuletzt geprüft am 9. August 2026. Wir überprüfen diese Erklärung,
wenn sich die App wesentlich ändert, wenn wir Beschäftigte einstellen — dann
entfällt die Ausnahme — oder wenn sich die Rechtslage ändert.
''';

  // ── Nutzungsbedingungen ────────────────────────────────────────────────────
  //
  // Fassung 3 (09.08.2026). Gegenüber der Vorfassung strukturell erweitert
  // (verbotene Nutzungen, Rechte an der App, höhere Gewalt, Änderungs-
  // vorbehalt mit sachlichem Grund, Schlussbestimmungen) und inhaltlich
  // am Code geprüft.
  //
  // Was aus dem Entwurf bewusst NICHT übernommen wurde, weil es die
  // Funktionen nicht gibt: ein Abschnitt zu Push-Mitteilungen, die
  // Bewertung von Unternehmen und Verkaufsstellen, und der ganze Block
  // zu veröffentlichten Nutzerinhalten samt Rechteeinräumung und
  // DSA-Meldeweg. `product_ratings` trägt eine Zahl von 1 bis 5 und
  // sonst nichts — es gibt in dieser App keinen einzigen Ort, an dem
  // Nutzer Text veröffentlichen.
  //
  // Ebenfalls korrigiert: Der Entwurf beschränkte die Nutzung auf private
  // Zwecke. Die Registrierung kennt aber ausdrücklich Geschäftskunden mit
  // Firmenname, Rechnungsanschrift, Steuernummer und USt-IdNr.
  static const terms = '''
**Nutzungsbedingungen ($version)**


**1) WER WIR SIND UND WOFÜR DIESE BEDINGUNGEN GELTEN**

Betreiberin der Bördesnack24-App ist die Bördesnack24 GbR, Sülldorfer Str. 3A,
39171 Sülzetal OT Osterweddingen, boerdesnack24@gmail.com (nachfolgend „wir").

Diese Bedingungen regeln die Nutzung der App. Für den Kauf von Waren am
Automaten gelten sie nicht — dieser Vertrag kommt unmittelbar am Automaten
zustande.

Ergänzend gelten als eigene Dokumente, die du im Bereich „Rechtliches" findest:
Datenschutzerklärung, Widerrufsbelehrung, Zahlungsinformationen, Cookie- und
Tracking-Hinweise sowie die Barrierefreiheitserklärung. Wo diese Bedingungen
darauf verweisen, ist der dortige Text massgeblich.


**2) WAS DIE APP KANN**

  • Produkte, Preise und Verfügbarkeit an unseren Automaten ansehen
  • Automatenstandorte finden
  • Angebote, Rabatte und Coupons abrufen, darunter individuelle Angebote
  • Punkte fürs tägliche Einloggen sammeln und die Wochenübersicht einsehen
  • die digitale Kundenkarte als QR-Code nutzen
  • den digitalen Kassenbon zu einem Kauf abrufen
  • Produkte mit 1 bis 5 Sternen bewerten
  • Konto, Abo und Einwilligungen verwalten
  • Fragen über den automatischen Chat-Assistenten oder das Kontaktformular
    stellen

Nicht enthalten: Push-Benachrichtigungen sowie die Bewertung von Unternehmen
oder Verkaufsstellen. Beides gibt es in dieser App nicht. Wir nennen das
ausdrücklich, weil ältere Beschreibungen etwas anderes nahegelegt haben.

Der Funktionsumfang kann sich durch Weiterentwicklung ändern; Abschnitt 10
regelt, was dabei gilt.


**3) WER DIE APP NUTZEN DARF**

Die App steht Privatpersonen und Geschäftskunden offen. Bei der Registrierung
wählst du aus, als was du dich anmeldest; als Geschäftskunde erheben wir
zusätzlich Firmenname, Rechnungsanschrift und Steuernummer.

Angaben bei der Registrierung müssen wahr und vollständig sein. Ändern sie
sich, aktualisiere sie bitte im Profil.

Jede Person führt nur ein Konto. Mehrere Konten anzulegen, um Rabatte, Coupons
oder Empfehlungsprämien mehrfach zu erhalten, ist unzulässig.

Für die Nutzung brauchst du ein geeignetes Gerät und eine Internetverbindung.
Die Kosten dafür trägst du selbst.

Kostenlose Nutzung, Bonusprogramm und Rabatte stehen allen Altersgruppen offen.
Für kostenpflichtige Abos gilt Abschnitt 6.


**4) KONTO UND ZUGANG**

Manche Funktionen setzen ein Konto voraus. Bei der Registrierung erheben wir
Name, E-Mail-Adresse, Passwort und Geburtsdatum; welche Daten wir wozu
verarbeiten, steht in der Datenschutzerklärung.

Zum Geburtsdatum: Es lässt sich nach der Registrierung technisch nicht mehr
ändern — die Datenbank weist jede Änderung zurück. Ist es falsch erfasst,
korrigieren wir es auf Anfrage von Hand.

Halte deine Zugangsdaten geheim und gib dein Konto nicht weiter. Besteht der
Verdacht, dass jemand anderes darauf zugreift, sag uns bitte sofort Bescheid.

Wir dürfen ein Konto sperren oder löschen, wenn konkrete Anhaltspunkte für
einen erheblichen Verstoss gegen diese Bedingungen oder gegen geltendes Recht
bestehen. Wir nennen dir dabei den Grund, soweit uns das rechtlich möglich ist.


**5) KUNDENKARTE, COUPONS UND INDIVIDUELLE ANGEBOTE**

Die digitale Kundenkarte ist ein QR-Code in deinem Konto. Damit verbundene
Rabatte und Coupons zeigen wir dir in der App mit ihren Bedingungen an —
Gültigkeitsdauer, teilnehmende Produkte und Einlösegrenzen.

Coupons sind personengebunden. Sie dürfen nicht verkauft, gewerblich
weitergegeben oder vervielfältigt werden. Eine Barauszahlung ist
ausgeschlossen.

Ein Anspruch darauf, dass eine bestimmte Aktion dauerhaft angeboten wird,
besteht nicht. Wir können Aktionen aus sachlichem Grund ändern oder beenden;
bereits eingelöste Vorteile und entstandene gesetzliche Ansprüche bleiben davon
unberührt.

Zu den individuellen Angeboten, offen gesagt: Wir werten aus, welches Produkt du
in den letzten 90 Tagen am häufigsten gekauft hast, und rabattieren genau
dieses. Der Rabatt beträgt immer 10 Prozent und ist für alle gleich — es
entscheidet sich nur, welches Produkt vergünstigt wird, nicht wie stark. Du
kannst dieser Auswertung jederzeit widersprechen (Art. 21 DSGVO) und siehst dann
nur noch allgemeine Angebote. Einzelheiten stehen in der Datenschutzerklärung
und auf der Info-Seite zur automatisierten Auswahl.


**6) ABONNEMENTS**

Wir bieten drei Modelle an, alle Preise inklusive gesetzlicher Umsatzsteuer:

  • Monats-Abo    **0,99 € pro Monat**
  • Jahres-Abo    **9,99 € pro Jahr**
  • Lifetime-Abo  **79,99 € einmalig**

Laufzeit: Das Monats-Abo verlängert sich um je einen Monat, das Jahres-Abo um je
ein Jahr, wenn du nicht zum Ende des laufenden Abrechnungszeitraums kündigst.
**Das Lifetime-Abo ist eine Einmalzahlung ohne Verlängerung.**

Kontingent Lifetime („Founders Edition"): Dieses Modell ist auf insgesamt
20 Konten begrenzt. Ist das Kontingent ausgeschöpft, steht es nicht mehr zur
Auswahl; einen Anspruch auf Abschluss gibt es nicht. Die Zahl der freien Plätze
zeigen wir in der App an.

Wechsel: Zwischen Monats- und Jahres-Abo kannst du jederzeit wechseln, wirksam
zum nächsten Abrechnungszeitraum. Nach Abschluss des Lifetime-Abos ist ein
Wechsel ausgeschlossen; darauf weisen wir vorher gesondert hin.

**Jede Auswahl und jeder Wechsel wird per E-Mail bestätigt.**

**Mindestalter: Kostenpflichtige Abos können nur volljährige Personen abschliessen.**
Minderjährige brauchen die Zustimmung ihrer gesetzlichen Vertreter (§§ 106 ff.
BGB); der Taschengeldparagraph (§ 110 BGB) greift bei laufenden Abos in der
Regel nicht. Vor jedem Abschluss ist die Volljährigkeit beziehungsweise das
Vorliegen der Zustimmung zu bestätigen.

Abrechnung und Zahlung: siehe die Seite „Zahlungsinformationen". Kurz: Nach
Veröffentlichung in den Stores läuft die Abrechnung über Apple beziehungsweise
Google; bis dahin ist die Auswahl eine unverbindliche Vormerkung ohne
Abbuchung.


**7) KÜNDIGUNG UND WIDERRUF**

**Kündigen kannst du jederzeit zum Ende des laufenden Abrechnungszeitraums** — über
die Schaltfläche „Verträge hier kündigen", die auch ohne Anmeldung erreichbar
ist (§ 312k BGB), im Kundenbereich unter „Mein Abo", und nach der
Store-Veröffentlichung zusätzlich über die Abo-Verwaltung des Stores. Den Zugang
deiner Kündigung bestätigen wir sofort in Textform mit Datum und Uhrzeit. Das
Recht zur ausserordentlichen Kündigung bleibt unberührt.

Der Widerruf ist etwas anderes als die Kündigung: Er beendet den Vertrag
rückwirkend innerhalb der ersten 14 Tage. Die vollständige Belehrung samt
Musterformular steht auf der Seite „Widerrufsbelehrung".


**8) PRODUKTINFORMATIONEN UND PREISE**

Verfügbarkeiten können sich kurzfristig ändern; eine Anzeige in der App ist
deshalb keine Zusicherung, dass das Produkt beim Kauf noch vorrätig ist.

Massgeblich für den zu zahlenden Preis ist der am Automaten ausgewiesene Preis
zum Zeitpunkt des Kaufs.

Wir halten Produktangaben aktuell und richtig. Für offensichtliche Schreib- oder
Übertragungsfehler übernehmen wir keine Gewähr; gesetzliche Ansprüche bleiben
unberührt.


**9) BEWERTUNGEN**

Du kannst ein Produkt mit 1 bis 5 Sternen bewerten, ein Mal je Produkt, und die
Bewertung später ändern. Ein Freitextfeld gibt es nicht: Wir speichern
ausschliesslich die Zahl, keinen Namen und keine IP-Adresse.

Deshalb gibt es in dieser App auch keine von Nutzern veröffentlichten Inhalte,
keine Kommentare und keine Bewertungstexte — und folglich weder eine
Rechteeinräumung an solchen Inhalten noch einen Meldeweg für rechtswidrige
Beiträge. Sollte sich das ändern, ziehen wir diese Bedingungen vorher nach.

Bewertungen sollen auf eigener Erfahrung beruhen. Bewertungen mehrfach
abzugeben, indem man mehrere Konten anlegt, ist unzulässig.


**10) VERFÜGBARKEIT, UPDATES UND ÄNDERUNGEN**

Wir bemühen uns um hohe Verfügbarkeit, können sie aber nicht ununterbrochen
zusichern. Einschränkungen können durch Wartung, Störungen, Sicherheitsmassnahmen
oder Ausfälle von Diensten entstehen, auf die wir keinen Einfluss haben.

Wir können die App weiterentwickeln, Funktionen ergänzen, ändern oder einstellen.
Bei Änderungen, die deine Nutzungsmöglichkeiten erheblich beeinträchtigen,
informieren wir dich vorher.

Diese Bedingungen können wir ändern, wenn dafür ein sachlicher Grund besteht —
etwa geänderte Gesetze oder Rechtsprechung, technische Weiterentwicklung,
Änderungen bei eingesetzten Diensten oder das Schliessen einer Regelungslücke.
Wir zeigen dir die Änderung vorher an. Wesentliche vertragliche Rechte schränken
wir ohne deine ausdrückliche Zustimmung nicht nachträglich ein.


**11) WAS NICHT ERLAUBT IST**

  • Daten automatisiert oder massenhaft auslesen, etwa per Bot oder Scraper
  • Sicherheits- oder Zugangsmechanismen umgehen
  • Schwachstellen ausnutzen, statt sie uns zu melden
  • Schadsoftware einschleusen
  • Coupons oder Rabattcodes vervielfältigen oder weiterverkaufen
  • mehrere Konten anlegen, um Beschränkungen zu umgehen
  • Inhalte der App entgegen diesen Bedingungen gewerblich verwerten

Findest du eine Sicherheitslücke, schreib uns bitte, bevor du sie
veröffentlichst. Wir gehen solchen Hinweisen nach und bedanken uns dafür.


**12) RECHTE AN DER APP**

App, Software, Texte, Grafiken, Logos und Datenbanken sind urheber- oder
sonst schutzrechtlich geschützt. Die Rechte liegen bei uns oder bei den
jeweiligen Rechteinhabern.

Du erhältst das einfache, nicht übertragbare Recht, die App bestimmungsgemäss zu
nutzen. Weitergehende Verwertung ist nur zulässig, soweit das Gesetz sie
erlaubt oder wir ausdrücklich zustimmen.


**13) DATENSCHUTZ**

Was wir wozu verarbeiten, steht in der Datenschutzerklärung. Sie gehört zu den
rechtlichen Informationen der App, ist aber kein Bestandteil dieser
Nutzungsbedingungen.

Zum Zugriff auf dein Endgerät: Wir speichern dort nur deine Anmeldesitzung und
deine Anzeigeeinstellungen. Beides ist für den von dir gewünschten Dienst
erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Analyse- oder Werbecookies setzen wir
nicht, und deshalb fragt die App auch nicht nach einer Einwilligung. Einzelheiten
auf der Seite „Cookies und Tracking".


**14) KONTO LÖSCHEN**

Du kannst die Löschung deines Kontos jederzeit in der App beantragen. Du
erhältst umgehend eine Eingangsbestätigung; wir bearbeiten den Antrag
unverzüglich, spätestens binnen eines Monats.

Mit der Löschung entfallen Coupons, Kundenkarte, individuelle Angebote und
Bewertungen. Daten, die wir handels- oder steuerrechtlich aufbewahren müssen,
bleiben für die Dauer der Fristen gespeichert und werden für die weitere
Verwendung gesperrt.


**15) HAFTUNG**

Für Schäden aus der Verletzung von Leben, Körper oder Gesundheit haften wir
unbeschränkt, ebenso bei Vorsatz und grober Fahrlässigkeit.

Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen
Vertragspflicht, und der Höhe nach begrenzt auf den vertragstypischen,
vorhersehbaren Schaden.

Die Haftung nach dem Produkthaftungsgesetz und weitergehende zwingende
gesetzliche Haftung bleiben unberührt.

Für Leistungsstörungen durch Ereignisse ausserhalb unseres zumutbaren
Einflussbereichs — etwa Ausfälle von Strom-, Telekommunikations- oder
Hostingdiensten, Cyberangriffe oder behördliche Massnahmen — haften wir nicht.
Deine gesetzlichen Ansprüche bleiben unberührt.


**16) VERBRAUCHERRECHTE UND SCHLUSSBESTIMMUNGEN**

Zwingende Verbraucherrechte — Gewährleistung, Widerruf, Kündigung, Datenschutz —
werden durch diese Bedingungen nicht eingeschränkt.

Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
einer Verbraucherschlichtungsstelle teilzunehmen. Die Plattform der
EU-Kommission zur Online-Streitbeilegung findest du unter
https://ec.europa.eu/consumers/odr

Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Als Verbraucher
verlierst du dadurch nicht den Schutz zwingender Vorschriften deines
Aufenthaltsstaates. Für Verbraucher gelten die gesetzlichen Gerichtsstände.

Ist eine Bestimmung dieser Bedingungen unwirksam, bleiben die übrigen wirksam;
an die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.

Diese Bedingungen gelten ab ihrer Veröffentlichung in der App.
''';
}
