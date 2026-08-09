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
  static const version = 'v2 · 2026-08';

  // ── Impressum (§ 5 DDG) ────────────────────────────────────────────────────
  static const imprint = '''
Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)

Bördesnack24 GbR
Sülldorfer Str. 3A
39171 Sülzetal OT Osterweddingen
Deutschland

Vertretungsberechtigte Gesellschafter
Philipp Blume
Pia Blume


KONTAKT

E-Mail: boerdesnack24@gmail.com
Telefon: 0157 30065762
Telefon: 0151 21076771

Wir antworten auf E-Mails in der Regel innerhalb eines Werktages.


UNTERNEHMENSANGABEN

Rechtsform: Gesellschaft bürgerlichen Rechts (GbR)
Die Bördesnack24 GbR ist nicht im Handelsregister eingetragen.

Steuernummer: 102/178/01635
Umsatzsteuer-Identifikationsnummer nach § 27a UStG: DE 458804058


VERANTWORTLICH FÜR DEN INHALT (§ 18 Abs. 2 MStV)

Philipp Blume
Sülldorfer Str. 3A
39171 Sülzetal OT Osterweddingen
E-Mail: boerdesnack24@gmail.com


ZUSTÄNDIGE AUFSICHTSBEHÖRDE FÜR LEBENSMITTELRECHT

Landkreis Börde
Amt für Gesundheit und Verbraucherschutz
Bornsche Straße 2
39340 Haldensleben


VERBRAUCHERSTREITBEILEGUNG

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
https://ec.europa.eu/consumers/odr

Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
Verbraucherschlichtungsstelle teilzunehmen.


VERANTWORTLICHKEIT FÜR INHALTE

Wir halten die Informationen in dieser App nach bestem Wissen aktuell, richtig und
vollständig. Eine Gewähr dafür können wir jedoch nicht übernehmen, soweit das
gesetzlich zulässig ist. Gesetzliche Haftungsansprüche bleiben unberührt.

Für die Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.


URHEBERRECHT

Die von der Bördesnack24 GbR erstellten Inhalte und Werke in dieser App unterliegen
dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede
Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer vorherigen
Zustimmung, soweit das Gesetz nichts anderes bestimmt.

Soweit Inhalte nicht von uns erstellt wurden, beachten wir die Rechte Dritter und
kennzeichnen sie, wo es erforderlich ist.


WEITERE RECHTSTEXTE

Datenschutzerklärung, Nutzungsbedingungen, Widerrufsbelehrung,
Zahlungsinformationen, Cookie- und Tracking-Hinweise, Barrierefreiheitserklärung
sowie die Hinweise zur automatisierten Auswahl stehen als eigene Seiten im
Bereich „Rechtliches" — bewusst getrennt, damit jede Angabe dort steht, wo man
sie sucht.
''';

  // ── Datenschutzerklärung (Art. 12/13 DSGVO, § 25 TDDDG) ────────────────────
  static const privacy = '''
Datenschutzerklärung ($version)

Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist die Bördesnack24 GbR,
Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen (Kontakt siehe Impressum).

Wir haben diese Erklärung entlang des tatsächlichen Systems geschrieben, nicht entlang
einer Vorlage. Sie beschreibt deshalb auch ausdrücklich, was wir NICHT tun — siehe
Abschnitt 3. Wir halten das für ehrlicher als eine lange Liste von Klauseln auf Vorrat.


1) WELCHE DATEN WIR VERARBEITEN

  a) Kontodaten
     E-Mail-Adresse, Name, optional Telefonnummer, Geburtsdatum, optional Anrede.
     Zweck: Konto anlegen, anmelden, Zugriff steuern.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag).

     Zum Geburtsdatum: Wir erheben es als Altersnachweis, weil kostenpflichtige Abos
     Volljährigkeit voraussetzen, und für den Geburtstagsgutschein. Es lässt sich nach
     der Registrierung technisch nicht mehr ändern — die Datenbank weist jede Änderung
     zurück. Ist es falsch erfasst, korrigieren wir es auf Anfrage von Hand
     (Art. 16 DSGVO).

  b) Kundenstammdaten
     Kundennummer sowie bei Geschäftskunden Firmenname, Rechnungsanschrift,
     Steuernummer und Umsatzsteuer-Identifikationsnummer.
     Zweck: Abrechnung und Rechnungsstellung.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO (§ 14 UStG).

  c) Kaufdaten
     Gekaufte Produkte, Menge, Einzel- und Gesamtpreis, Zeitpunkt, Automat und die
     Zahlungsart als Kategorie.
     Zweck: Kaufabwicklung, digitaler Kassenbon, Buchhaltung.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO.

     Bitte beachten: Weil zu jedem Kauf Automat und Uhrzeit gespeichert werden, lässt
     sich daraus nachvollziehen, wann Sie an welchem Automaten waren. Das ist kein
     Standortdatum Ihres Geräts — wir fragen Ihren Standort nie ab —, kann in der
     Zusammenschau aber einen ähnlichen Aussagewert haben. Wir nennen das hier
     ausdrücklich, weil es nicht auf der Hand liegt.

  d) Individuelle Angebote (Profiling)
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

     Sie können dieser Verarbeitung jederzeit widersprechen (Art. 21 DSGVO) — formlos
     an die im Impressum genannte Adresse. Danach erhalten Sie nur noch allgemeine
     Angebote. Ein Nachteil entsteht Ihnen dadurch nicht.

  e) Geburtstags- und Jubiläumsgutscheine
     Auf Grundlage Ihres Geburtsdatums beziehungsweise des Anmeldedatums.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO; Widerspruch wie unter d).

  f) Produktbewertungen
     Ausschliesslich eine Bewertungszahl zu einem Produkt. Wir speichern dazu keinen
     Freitext, keinen Namen und keine IP-Adresse. Bewertungen werden nicht mit Ihrem
     Namen veröffentlicht.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Sortimentsgestaltung).

  g) Kontaktanfragen
     Kategorie, Betreff und Nachrichtentext.
     Zweck: Bearbeitung Ihres Anliegens.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b beziehungsweise lit. f DSGVO.

  h) E-Mail-Versand
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

  i) Protokolle
     Ein Änderungsprotokoll hält fest, wer welchen Datensatz wann geändert hat,
     einschliesslich des Standes vor und nach der Änderung. Ein Versandprotokoll hält
     fest, welche E-Mail wann an wen mit welchem Inhalt verschickt wurde.
     Zweck: Nachvollziehbarkeit, Missbrauchserkennung, Nachweis des Versands.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f und lit. c DSGVO.

  j) Betriebliche Nachweise (betrifft nur Beschäftigte und Gesellschafter)
     HACCP- und Hygieneprotokolle, Belehrungen nach IfSG, Wartungs- und
     Reinigungsnachweise, Buchhaltungsdaten, elektronische Unterschriften.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit LMHV, IfSG, AO, HGB.


2) WAS AUF IHREM GERÄT GESPEICHERT WIRD (§ 25 TDDDG)

  Die App speichert Ihre Anmeldesitzung und Ihre Anzeigeeinstellungen lokal auf Ihrem
  Gerät. Beides ist für den von Ihnen ausdrücklich gewünschten Dienst unbedingt
  erforderlich; es gilt die Ausnahme des § 25 Abs. 2 Nr. 2 TDDDG.

  Darüber hinaus greifen wir nicht auf Ihr Endgerät zu. Es gibt keine Analyse- oder
  Werbecookies, keine Zählpixel, keine Geräte- oder Werbe-Kennungen. Deshalb fragt die
  App auch nicht nach einer Cookie-Einwilligung — es gibt nichts, wozu wir sie
  bräuchten.


3) WAS WIR AUSDRÜCKLICH NICHT TUN

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
  * Keine künstliche Intelligenz. Es werden keine Daten an Sprachmodelle oder
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


4) WER IHRE DATEN ZU SEHEN BEKOMMT

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


5) ÜBERMITTLUNG IN DIE USA

  Zwei der oben genannten Empfänger sitzen in den USA: GitHub (Auslieferung der
  Web-App) und DocuSign (interne Unterschriften). Für diese Übermittlungen stützen wir
  uns auf die Standardvertragsklauseln der EU-Kommission beziehungsweise auf die
  Zertifizierung nach dem EU-US Data Privacy Framework.

  Die native App für iOS und Android lädt ihre Oberfläche nicht über GitHub; wer die
  App aus dem Store nutzt, ist von dieser Übermittlung nicht betroffen.


6) WIE LANGE WIR SPEICHERN

  * Konto- und Kundenstammdaten: bis zur Löschung des Kontos, danach nur noch, soweit
    gesetzliche Aufbewahrungspflichten bestehen.
  * Kauf- und Rechnungsdaten: 10 Jahre (§ 147 AO, § 257 HGB).
  * Einwilligungen und deren Widerruf: bis zum Ablauf möglicher Nachweispflichten.
  * Individuelle Angebote: drei Tage Gültigkeit; der Datensatz bleibt zur
    Missbrauchsvermeidung darüber hinaus bestehen.
  * HACCP- und IfSG-Nachweise: nach den jeweiligen gesetzlichen Vorgaben.
  * Änderungs- und Versandprotokoll: Für diese beiden Protokolle ist derzeit keine
    automatische Löschfrist eingerichtet. Wir sagen das offen, statt eine Frist zu
    behaupten, die technisch nicht durchgesetzt wird. Eine Frist wird eingeführt; bis
    dahin löschen wir Protokolleinträge auf begründetes Verlangen, soweit keine
    Nachweispflicht entgegensteht.


7) IHRE RECHTE

  * Auskunft (Art. 15): In der App unter „Meine Daten exportieren" erhalten Sie
    sofort eine vollständige Kopie Ihrer gespeicherten Daten.
  * Berichtigung (Art. 16), auch für das gesperrte Geburtsdatum — bitte an den
    Kundenservice wenden.
  * Löschung (Art. 17): In der App unter „Kontolöschung beantragen". Sie erhalten
    umgehend eine Eingangsbestätigung per E-Mail; wir bearbeiten den Antrag
    unverzüglich, spätestens binnen eines Monats (Art. 12 Abs. 3 DSGVO). Daten, die
    wir handels- oder steuerrechtlich aufbewahren müssen, werden für die weitere
    Verwendung gesperrt und erst nach Fristablauf gelöscht.
  * Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20).
  * Widerspruch (Art. 21) gegen die individuellen Angebote und die
    Geburtstagsgutscheine — siehe Abschnitt 1 d).
  * Widerruf jeder Einwilligung mit Wirkung für die Zukunft; die Rechtmässigkeit der
    bis dahin erfolgten Verarbeitung bleibt unberührt.
  * Beschwerde bei einer Aufsichtsbehörde (Art. 77), für uns zuständig:
    Landesbeauftragte für den Datenschutz Sachsen-Anhalt, Leiterstr. 9, 39104 Magdeburg.


8) AUTOMATISIERTE ENTSCHEIDUNGEN

  Eine automatisierte Entscheidung im Sinne von Art. 22 DSGVO, die Ihnen gegenüber
  rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt,
  findet nicht statt.

  Die unter 1 d) beschriebene Auswertung Ihrer Kaufhistorie ist Profiling im Sinne von
  Art. 4 Nr. 4 DSGVO — das benennen wir ausdrücklich. Sie führt aber zu keiner
  Entscheidung über Sie: Der Rabattsatz ist für alle gleich, niemand wird
  ausgeschlossen, bevorzugt oder anders bepreist, und es findet keine Bewertung Ihrer
  Zahlungsfähigkeit oder Ihres Verhaltens statt.


9) SICHERHEIT

  Alle Verbindungen sind mit TLS verschlüsselt. Passwörter speichern wir ausschliesslich
  als bcrypt-Hash, nie im Klartext. Der Zugriff auf Daten ist in der Datenbank selbst
  zeilenweise abgesichert (Row Level Security): Jede Abfrage kann technisch nur die
  Daten des jeweils angemeldeten Kontos zurückgeben — auch dann, wenn jemand die
  Kennung eines fremden Kontos kennt. Wir haben das mit echten Testkonten überprüft.


10) ÄNDERUNGEN

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
Widerrufsbelehrung ($version)


WAREN AUS DEM AUTOMATEN

Für Waren, die du unmittelbar am Automaten entnimmst, besteht kein Widerrufsrecht.
Die Ware wird dir sofort übergeben; ein Fernabsatzvertrag im Sinne der §§ 355 ff. BGB
kommt dabei nicht zustande.

Ist eine Ware verdorben, beschädigt oder wurde sie nicht ausgegeben, gelten deine
gesetzlichen Gewährleistungsrechte. Melde das bitte über das Kontaktformular in der
App oder per E-Mail — wir erstatten oder ersetzen.


ABONNEMENTS (DIGITALE DIENSTLEISTUNG)

Widerrufsrecht

Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.

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

Folgen des Widerrufs

Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir
erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist.
Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der
ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich
etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte
berechnet.

Vorzeitiger Beginn der Leistung

Hast du verlangt, dass die Leistung während der Widerrufsfrist beginnen soll, so hast
du uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zum Widerruf bereits
erbrachten Leistung im Vergleich zum Gesamtumfang der vertraglich vereinbarten Leistung
entspricht.

Erlöschen beim Lifetime-Abo

Beim Lifetime-Abo erlischt dein Widerrufsrecht, wenn wir die Leistung vollständig
bereitgestellt haben und du zuvor ausdrücklich zugestimmt hast, dass wir vor Ablauf der
Widerrufsfrist beginnen, und du bestätigt hast, dass du dein Widerrufsrecht damit
verlierst (§ 356 Abs. 5 BGB). Wir holen beide Bestätigungen vor dem Abschluss
ausdrücklich ein.


MUSTER-WIDERRUFSFORMULAR

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


KÜNDIGUNG IST ETWAS ANDERES

Der Widerruf beendet den Vertrag rückwirkend innerhalb der ersten 14 Tage. Willst du
ein laufendes Abo zum Ende des Abrechnungszeitraums beenden, ist das eine Kündigung —
dafür gibt es in der App die Schaltfläche „Verträge hier kündigen", die auch ohne
Anmeldung erreichbar ist (§ 312k BGB).
''';

  // ── Zahlungsinformationen ──────────────────────────────────────────────────
  static const payment = '''
Zahlungsinformationen ($version)


AM AUTOMATEN

Du kannst an unseren Automaten wie folgt bezahlen:

  • bar
  • EC-/Girocard
  • Kreditkarte
  • kontaktlos

Alle Preise verstehen sich als Endpreise einschließlich der gesetzlichen
Umsatzsteuer. Der am Automaten angezeigte Preis gilt.

Welche Daten wir dabei bekommen

Wir speichern zu deinem Kauf ausschließlich die Zahlungsart als Kategorie — also
etwa „EC-Karte" — zusammen mit Betrag, Zeitpunkt und Automat.

Wir speichern KEINE Kartennummer, KEINE IBAN und KEINE Zahlungstoken. Wir haben
auch keinen Zahlungsdienstleister eingebunden. Die Zahlung selbst wickeln das
Kartenterminal am Automaten und dein Kartenanbieter ab; wir erfahren davon nur,
dass und womit bezahlt wurde.


ABONNEMENTS

Für erweiterte App-Funktionen bieten wir drei Modelle an, alle Preise inklusive
gesetzlicher Umsatzsteuer:

  • Monats-Abo    0,99 € pro Monat
  • Jahres-Abo    9,99 € pro Jahr
  • Lifetime-Abo  79,99 € einmalig

Das Jahres-Abo entspricht rechnerisch zehn Monatsbeiträgen; zwei Monate sind
darin geschenkt.

Abrechnung

Nach Veröffentlichung der App im Apple App Store und bei Google Play läuft die
Abrechnung ausschließlich über den jeweiligen Store. Es gelten ergänzend dessen
Zahlungs- und Abo-Bedingungen; die Verwaltung und Kündigung deines Abos ist dann
auch in den Store-Einstellungen möglich.

Bis dahin ist die Auswahl eines Abo-Modells in der App eine unverbindliche
Vormerkung. Es wird nichts abgebucht, und es entsteht keine Zahlungspflicht.

Mindestalter

Kostenpflichtige Abos können nur volljährige Personen abschließen. Minderjährige
brauchen die Zustimmung ihrer gesetzlichen Vertreter. Die kostenlose Nutzung der
App sowie das Bonus- und Rabattprogramm stehen allen Altersgruppen offen.


RECHNUNGEN UND BELEGE

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
Cookies und Tracking ($version)


DIE KURZE ANTWORT

Wir setzen keine Cookies zu Analyse- oder Werbezwecken. Wir binden keine
Tracking-Dienste ein. Deshalb fragt dich diese App auch nicht nach einer
Cookie-Einwilligung — es gibt nichts, wofür wir sie bräuchten.


WAS AUF DEINEM GERÄT GESPEICHERT WIRD

Zwei Dinge, beide technisch notwendig:

  • Deine Anmeldesitzung, damit du nicht bei jedem Start neu eingeben musst,
    wer du bist.
  • Deine Anzeigeeinstellungen in der App.

Beides ist für den von dir gewünschten Dienst unbedingt erforderlich. Es gilt
die Ausnahme des § 25 Abs. 2 Nr. 2 TDDDG; eine Einwilligung ist dafür nicht
nötig. Meldest du dich ab, wird die Sitzung gelöscht.


WAS WIR NICHT EINSETZEN

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


WENN SICH DAS ÄNDERT

Sollten wir künftig eine Reichweitenmessung einsetzen wollen, holen wir vorher
deine Einwilligung ein — getrennt, freiwillig und genauso einfach widerrufbar
wie erteilt. Bis dahin gilt diese Seite.
''';

  // ── Barrierefreiheitserklärung (BFSG) ──────────────────────────────────────
  static const accessibility = '''
Erklärung zur Barrierefreiheit ($version)

Diese Erklärung gilt für die Bördesnack24-App und ihre Web-Fassung. Grundlage ist
das Barrierefreiheitsstärkungsgesetz (BFSG), das seit dem 28. Juni 2025 für
Dienstleistungen im elektronischen Geschäftsverkehr gilt.


UNSER ANSPRUCH

Wir wollen, dass die App für alle bedienbar ist — auch mit Screenreader, mit
vergrößerter Schrift, mit eingeschränktem Sehvermögen oder ohne Maus. Wir
orientieren uns an EN 301 549 und den WCAG 2.1 auf Stufe AA.


WAS WIR UMGESETZT HABEN

  • Alle Bedienelemente sind mindestens 44 x 44 Punkt groß und damit auch mit
    motorischen Einschränkungen sicher treffbar.
  • Farbkontraste sind gegen die Anforderungen der WCAG 2.1 AA geprüft. Die
    Prüfung läuft automatisch bei jeder Codeänderung mit — ein Verstoß lässt
    den Build scheitern, statt unbemerkt zu bleiben.
  • Bedienelemente tragen Beschriftungen für Screenreader.
  • Die Schriftgröße folgt deiner Systemeinstellung. Vergrößerst du sie im
    Betriebssystem, wächst der Text in der App mit.
  • Rechtstexte sind als Fließtext markierbar und vorlesbar, nicht als Bild.
  • Farbe ist nie das einzige Unterscheidungsmerkmal.


WAS NOCH NICHT VOLLSTÄNDIG BARRIEREFREI IST

Wir nennen das offen, statt Vollständigkeit zu behaupten:

  • Die Screenreader-Beschriftungen sind noch nicht in jedem Bereich der App
    gleich sorgfältig gepflegt. Der Kundenbereich ist weiter als die internen
    Verwaltungsansichten.
  • PDF-Dokumente, die die App erzeugt (etwa der digitale Kassenbon), sind
    noch nicht als barrierefreie PDF/UA ausgezeichnet.
  • Einzelne Diagramme in den Auswertungen haben noch keine gleichwertige
    Textalternative.

An allen drei Punkten arbeiten wir. Brauchst du eine der genannten
Informationen in anderer Form, melde dich — wir liefern sie dir.


BARRIERE MELDEN

Ist dir etwas aufgefallen, das du nicht bedienen konntest, sag uns bitte
Bescheid. Das ist für uns der schnellste Weg, es zu beheben.

  E-Mail: boerdesnack24@gmail.com
  Telefon: 0157 30065762

Wir melden uns innerhalb von zwei Wochen zurück.


DURCHSETZUNGSVERFAHREN

Hilft dir unsere Antwort nicht weiter, kannst du dich an die
Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und
Dienstleistungen wenden:

  MLBF
  Carl-Miller-Straße 6
  39112 Magdeburg
  E-Mail: kontakt@mlbf-barrierefrei.de
  Telefon: 0391 289 230 23


STAND

Diese Erklärung wurde am 9. August 2026 erstellt. Grundlage ist eine Prüfung
unseres eigenen Codes und der automatisierten Barrierefreiheitstests, nicht ein
externes Audit. Ein unabhängiges Audit steht noch aus; sobald es vorliegt,
aktualisieren wir diese Seite.
''';

  // ── AGB (Vorlage) ──────────────────────────────────────────────────────────
  static const terms = '''
Nutzungsbedingungen (Vorlage · $version)

1) Geltungsbereich
Diese Nutzungsbedingungen gelten für die Nutzung der Bördesnack24-App durch registrierte
Nutzerinnen und Nutzer.

2) Registrierung und Konto
  * Für die Nutzung der Kundenfunktionen ist eine Registrierung erforderlich.
  * Angaben sind wahrheitsgemäß zu machen. Das Konto ist gegen unbefugten Zugriff zu
    schützen.
  * Ein Anspruch auf Registrierung besteht nicht. Wir dürfen Konten sperren, wenn ein
    berechtigter Grund vorliegt (z. B. Missbrauch).

3) Leistungsumfang
Die App zeigt Angebote, Standorte, Produktverfügbarkeiten und individuelle Preise an.
Kauf und Warenausgabe erfolgen am jeweiligen Automaten und unterliegen der Verfügbarkeit.
Rechtsgeschäfte über Waren kommen am Automaten zustande.

4) Abo-Modelle
  a) Für erweiterte App-Funktionen bieten wir drei Abo-Modelle an
     (alle Preise inklusive gesetzlicher Umsatzsteuer):
       * Monats-Abo:  0,99 € pro Monat
       * Jahres-Abo:  9,99 € pro Jahr
       * Lifetime-Abo: 79,99 € einmalig, dauerhafte Nutzung
  b) Laufzeit und Verlängerung: Das Monats-Abo verlängert sich jeweils um einen
     Monat, das Jahres-Abo jeweils um ein Jahr, sofern nicht zum Ende des laufenden
     Abrechnungszeitraums gekündigt wird. Das Lifetime-Abo ist eine Einmalzahlung
     ohne Verlängerung.
  c) Kontingent Lifetime-Abo („Founders Edition"): Das Lifetime-Abo wird nur in
     begrenzter Stückzahl angeboten. Insgesamt können höchstens 20 Kundenkonten
     ein Lifetime-Abo abschließen. Ist das Kontingent ausgeschöpft, steht das
     Modell nicht mehr zur Auswahl; ein Anspruch auf Abschluss besteht nicht.
     Die Zahl der verbleibenden Plätze wird in der App angezeigt.
  d) Wechsel: Ein Wechsel zwischen Monats- und Jahres-Abo ist jederzeit möglich und
     wird zum nächsten Abrechnungszeitraum wirksam. Nach Abschluss des Lifetime-Abos
     ist ein Wechsel ausgeschlossen; hierauf wird vor Abschluss gesondert hingewiesen.
  e) Jede Auswahl und jeder Wechsel wird per E-Mail an die hinterlegte Adresse
     bestätigt.
  f) Zahlungsabwicklung: Nach Veröffentlichung der App in den Stores erfolgt die
     Abrechnung über den Apple App Store bzw. Google Play; ergänzend gelten deren
     Bedingungen. Bis dahin ist die Auswahl eine unverbindliche Vormerkung, es
     erfolgt keine Abbuchung.
  g) Mindestalter: Kostenpflichtige Abonnements können nur von volljährigen
     Personen abgeschlossen werden. Minderjährige benötigen die Zustimmung
     ihrer gesetzlichen Vertreter (§§ 106 ff. BGB); der Taschengeldparagraph
     (§ 110 BGB) findet auf fortlaufende Abonnements regelmäßig keine
     Anwendung. Vor jedem Abschluss ist die Volljährigkeit bzw. das Vorliegen
     der Zustimmung zu bestätigen. Die kostenlose Nutzung der App sowie das
     Bonus- und Rabattprogramm ohne Abo stehen allen Altersgruppen offen.

5) Kündigung der Abos
  a) Monats- und Jahres-Abo können jederzeit zum Ende des laufenden
     Abrechnungszeitraums gekündigt werden; das Recht zur außerordentlichen
     Kündigung aus wichtigem Grund bleibt unberührt.
  b) Die Kündigung ist möglich über die Schaltfläche „Verträge hier kündigen"
     in der App (auch ohne Anmeldung erreichbar, § 312k BGB), im Kundenbereich
     unter „Mein Abo" sowie — nach Store-Veröffentlichung — über die
     Abo-Verwaltung des jeweiligen Stores.
  c) Den Zugang einer über die App erklärten Kündigung bestätigen wir sofort
     elektronisch in Textform (E-Mail) unter Angabe von Datum und Uhrzeit.

6) Widerrufsrecht
  a) Waren, die am Automaten unmittelbar entnommen werden, sind vom Widerrufsrecht
     ausgenommen (unmittelbare Übergabe der Ware, §§ 355 ff. BGB finden insoweit
     keine Anwendung).
  b) Für Abos (digitale Dienstleistung) gilt: Verbraucher haben das Recht, binnen
     14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Frist beginnt
     mit Vertragsschluss. Zur Ausübung genügt eine eindeutige Erklärung (z. B.
     E-Mail an kontakt@boerdesnack24.de). Im Fall des Widerrufs erstatten wir
     bereits geleistete Zahlungen unverzüglich, spätestens binnen 14 Tagen.
  c) Verlangt die Kundin/der Kunde ausdrücklich, dass die Leistung vor Ablauf der
     Widerrufsfrist beginnt, ist bei Widerruf ein anteiliger Betrag für die bereits
     erbrachte Leistung zu zahlen. Beim Lifetime-Abo erlischt das Widerrufsrecht
     mit vollständiger Bereitstellung, wenn zuvor ausdrücklich zugestimmt und die
     Kenntnis vom Erlöschen bestätigt wurde (§ 356 Abs. 5 BGB).

7) Preise
Preise gelten wie am Automaten und in der App angezeigt. Für Bestandskundinnen können
individuelle Preise hinterlegt sein; diese sind in der App einsehbar.

8) Haftung
Wir haften nach den gesetzlichen Vorschriften für Vorsatz und grobe Fahrlässigkeit sowie
bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Im Übrigen ist die
Haftung – soweit gesetzlich zulässig – ausgeschlossen.

9) Verfügbarkeit
Wir bemühen uns um eine hohe Verfügbarkeit, garantieren jedoch keine ununterbrochene
Erreichbarkeit.

10) Änderungen dieser Bedingungen
Änderungen werden rechtzeitig angekündigt. Widerspricht die/der Nutzer:in nicht innerhalb
der gesetzten Frist, gelten die Änderungen als genehmigt.

11) Anwendbares Recht / Gerichtsstand
Es gilt deutsches Recht. Verbraucherinnen und Verbrauchern stehen zwingend geltende
Schutzvorschriften ihres Aufenthaltsstaates zu.

Diese Bedingungen sind eine technische Vorlage und werden vor Live-Betrieb anwaltlich
finalisiert.
''';
}
