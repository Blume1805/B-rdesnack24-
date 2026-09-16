/// Zentral gepflegte Vorlagen für die Rechtsseiten der App.
///
/// **Wichtig:** Diese Texte sind technische Vorlagen und **kein Anwaltsdokument**.
/// Vor Go-Live müssen sie durch einen Fachanwalt für IT-/Datenschutzrecht
/// geprüft und final ergänzt werden (insbesondere gesetzlicher Vertreter,
/// Steuernummer, ggf. USt-ID, Berufshaftpflicht usw. gemäß § 5 DDG).
abstract final class LegalTexts {
  static const version = 'v2 · 2026-09';

  // ── Impressum (§ 5 DDG) ────────────────────────────────────────────────────
  static const imprint = '''
Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)

Bördesnack24 GbR
Pia Blume, Philipp Blume (vertretungsberechtigte Gesellschafter)
Sülldorfer Str. 3A
39171 Sülzetal OT Osterweddingen

Kontakt
E-Mail: kontakt@boerdesnack24.de
Website: https://www.boerdesnack24.de

Umsatzsteuer / Steuernummer
Steuernummer: 102/178/01635
Umsatzsteuer-Identifikationsnummer nach § 27a UStG: DE 458804058

Zuständige Aufsichtsbehörde für Lebensmittelrecht
Veterinär- und Lebensmittelüberwachungsamt (VLÜA) Salzlandkreis

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
Pia Blume, Philipp Blume, Anschrift wie oben.

Streitbeilegung
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
https://ec.europa.eu/consumers/odr
Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer
Verbraucherschlichtungsstelle teilzunehmen.

Haftungshinweis
Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
verantwortlich.
''';

  // ── Datenschutzerklärung (Art. 12/13 DSGVO, § 25 TDDDG) ────────────────────
  static const privacy = '''
Datenschutzerklärung (Vorlage · $version)

Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO ist die Bördesnack24 GbR (Kontakt siehe
Impressum).

1) Verarbeitete Datenkategorien und Zwecke

  a) Konto- und Kontaktdaten (Name, E-Mail, Telefon, Rolle)
     Zweck: Registrierung, Authentifizierung, Zugriffssteuerung.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/vorvertragliche Maßnahmen).

  b) Kundenprofil, individuelle Preise, Kaufhistorie, Empfehlungen
     Zweck: Vertragsdurchführung, individuelle Angebote.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

  c) HACCP-/GoBD-Protokolle (Temperatur, Reinigung, Vernichtung, Wartung,
     Geldentnahme, Belehrungen), Audit-Log
     Zweck: Erfüllung gesetzlicher Pflichten (LMHV, HACCP, AO, HGB).
     Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit den o. g. Gesetzen.

  d) Push-Gerätetokens (nur nach Einwilligung)
     Zweck: App-Benachrichtigungen.
     Rechtsgrundlage: § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO.

  e) Nutzungsanalyse (nur nach Einwilligung, aktuell deaktiviert)
     Zweck: Produktverbesserung.
     Rechtsgrundlage: § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO.

  f) Kartendarstellung / Standortabfrage (nur nach Einwilligung)
     Zweck: Automatenfinder / Navigation.
     Rechtsgrundlage: § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO.

  g) Diagnose-/Fehlerdaten (ohne personenbezogene Rohdaten)
     Zweck: Stabilität und IT-Sicherheit.
     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).

2) Empfänger / Auftragsverarbeiter

  * Supabase (EU-Region, Hosting/Datenbank/Auth/Storage) — Auftragsverarbeitung gem. Art. 28 DSGVO.
  * Firebase Cloud Messaging (Push) — nur nativ, nach Einwilligung.
  * Google Maps (Kartenanzeige) — nur nach Einwilligung.
  Weitergaben an Behörden erfolgen nur bei gesetzlicher Verpflichtung.

3) Speicherdauer

  Vertrags-/Kontodaten: bis zur Vertragsbeendigung + gesetzliche Aufbewahrungsfristen.
  Buchhaltung und Nachweise: 10 Jahre (§ 147 AO).
  HACCP-Protokolle: gemäß VLÜA-Vorgaben.
  Einwilligungen: bis Widerruf; Nachweisdokumentation im Audit-Log.

4) Ihre Rechte (DSGVO)

  * Auskunft (Art. 15) — in der App: „Meine Daten exportieren"
  * Berichtigung (Art. 16)
  * Löschung (Art. 17) — in der App: „Kontolöschung beantragen".
    Hinweis: Aufgrund handels- und steuerrechtlicher Aufbewahrungspflichten
    (§§ 147 AO, 257 HGB) erfolgt die Löschung ggf. erst nach Ablauf dieser Fristen;
    zwischenzeitlich erfolgt Sperrung/Anonymisierung.
  * Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21)
  * Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.
  * Beschwerde bei einer Aufsichtsbehörde (Art. 77), z. B. LfD Sachsen-Anhalt.

5) Sicherheit
  Verschlüsselte Übertragung (TLS), Server-Standort EU, rollenbasierter Zugriff mit
  Row-Level-Security, Audit-Trail, MFA vorbereitet.

6) Änderungen
  Diese Erklärung ist eine Vorlage und wird vor Live-Betrieb durch einen Fachanwalt
  finalisiert. Änderungen werden versioniert.
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

4) Unentgeltlichkeit der App und Vorteilsprogramm
  a) Die Bördesnack24-App wird unentgeltlich bereitgestellt. Es gibt kein
     Abonnement, keine Grund-, Nutzungs- oder Freischaltgebühr und keine
     kostenpflichtigen Zusatzfunktionen. Für die Nutzung der App entstehen
     lediglich die Verbindungsentgelte des jeweiligen Mobilfunk- oder
     Internetanbieters.
  b) Vorteilsprogramm: Registrierten Nutzerinnen und Nutzern gewähren wir auf
     Käufe an unseren Automaten einen Dauerrabatt, zeitlich befristete
     Aktionsangebote, persönliche Coupons sowie ein Treueprogramm mit
     Meilensteinen und Statusstufen. Die jeweils geltenden Rabattsätze,
     Bedingungen und Gültigkeitszeiträume werden in der App angezeigt.
     Maßgeblich ist stets die Anzeige in der App zum Zeitpunkt des Kaufs.
  c) Kein Rechtsanspruch auf Fortbestand: Das Vorteilsprogramm ist eine
     freiwillige Leistung. Wir dürfen einzelne Bestandteile ändern, ersetzen
     oder einstellen. Änderungen zum Nachteil der Nutzerinnen und Nutzer
     kündigen wir mindestens vier Wochen vorher in der App oder per E-Mail an.
     Bereits gewährte, noch nicht eingelöste Coupons bleiben bis zu ihrem
     Ablaufdatum bestehen.
  d) Keine Barauszahlung: Rabatte, Coupons und Statusvorteile werden
     ausschließlich beim Kauf am Automaten verrechnet. Eine Auszahlung in Geld,
     eine Übertragung auf andere Konten oder eine Kombination mehrerer Coupons
     auf denselben Artikel ist ausgeschlossen. Sind für ein Produkt mehrere
     Vorteile aktiviert, wird automatisch der für die Kundin oder den Kunden
     günstigste Preis berechnet.
  e) Mindestalter: Die Registrierung setzt ein Alter von mindestens 16 Jahren
     voraus. Hintergrund ist Art. 8 DSGVO: Für Dienste der
     Informationsgesellschaft können Einwilligungen erst ab diesem Alter
     wirksam allein erteilt werden. Jüngere Personen benötigen die Zustimmung
     der Sorgeberechtigten. Der Kauf am Automaten selbst ist von der
     Registrierung unabhängig und steht allen Altersgruppen offen, soweit
     keine produktbezogenen Abgabebeschränkungen entgegenstehen.
  f) Frühere Abo-Modelle: Bis zum 16.09.2026 sahen diese Bedingungen
     kostenpflichtige Abo-Modelle vor. Diese werden nicht mehr angeboten. Es
     wurden hierüber keine Zahlungen vereinnahmt; eine bloße Vormerkung in der
     App begründete keine Zahlungspflicht. Sollte im Einzelfall dennoch ein
     entgeltliches Abonnement zustande gekommen sein, endet es ohne
     Kündigungserfordernis mit Wirkung zum 16.09.2026; etwaige Zahlungen
     erstatten wir vollständig.

5) Laufzeit, Beendigung und Löschung des Kontos
  a) Das Nutzungsverhältnis über die App wird auf unbestimmte Zeit geschlossen
     und ist unentgeltlich. Es besteht keine Mindestlaufzeit und keine
     automatische Verlängerung; es gibt nichts zu kündigen, um Kosten zu
     vermeiden.
  b) Nutzerinnen und Nutzer können das Nutzungsverhältnis jederzeit ohne Frist
     und ohne Angabe von Gründen beenden — über das Kontaktformular in der App,
     über die Schaltfläche „Verträge hier kündigen" oder formlos per E-Mail an
     kontakt@boerdesnack24.de.
  c) Die Schaltfläche „Verträge hier kündigen" ist auch ohne Anmeldung
     erreichbar. Wir halten sie freiwillig vor. Eine gesetzliche Pflicht nach
     § 312k BGB besteht seit dem Wegfall der entgeltlichen Abonnements nicht
     mehr, weil die Vorschrift entgeltliche Dauerschuldverhältnisse voraussetzt.
  d) Den Zugang einer über die App erklärten Beendigung bestätigen wir sofort
     elektronisch in Textform (E-Mail) unter Angabe von Datum und Uhrzeit.
  e) Nach Beendigung deaktivieren wir das Konto und löschen die
     personenbezogenen Daten nach Ablauf der gesetzlichen Aufbewahrungsfristen;
     Einzelheiten regelt die Datenschutzerklärung. Noch nicht eingelöste
     Coupons und der erreichte Status verfallen mit der Beendigung.
  f) Wir können das Nutzungsverhältnis mit einer Frist von vier Wochen
     kündigen; das Recht zur außerordentlichen Kündigung aus wichtigem Grund
     (insbesondere bei Missbrauch) bleibt unberührt.

6) Widerrufsrecht
  a) Waren, die am Automaten unmittelbar entnommen werden, sind vom Widerrufsrecht
     ausgenommen (unmittelbare Übergabe der Ware, §§ 355 ff. BGB finden insoweit
     keine Anwendung).
  b) Für die Nutzung der App selbst ist kein Entgelt zu zahlen. Ein
     Widerrufsrecht nach §§ 312g, 355 BGB setzt grundsätzlich einen
     entgeltlichen Verbrauchervertrag voraus. Da bei der Registrierung jedoch
     personenbezogene Daten bereitgestellt werden, kann § 312 Abs. 1a BGB
     eingreifen. Wir räumen deshalb vorsorglich und unabhängig von der
     rechtlichen Einordnung ein Widerrufsrecht von 14 Tagen ab Registrierung
     ein. Zur Ausübung genügt eine eindeutige Erklärung, zum Beispiel per
     E-Mail an kontakt@boerdesnack24.de. Wertersatz fällt nicht an, weil keine
     Zahlung geschuldet ist.
  c) Unabhängig vom Widerrufsrecht kann das Konto jederzeit und ohne Frist
     beendet werden (Ziffer 5). Der praktische Unterschied ist damit gering.
  d) Gewährleistung für digitale Produkte: Auch bei unentgeltlicher
     Bereitstellung gelten die §§ 327 ff. BGB, soweit personenbezogene Daten
     bereitgestellt werden. Die Pflichten zur Mangelfreiheit und zur
     Aktualisierung der App bleiben davon unberührt.

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
