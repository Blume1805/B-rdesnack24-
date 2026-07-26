/// Zentral gepflegte Vorlagen für die Rechtsseiten der App.
///
/// **Wichtig:** Diese Texte sind technische Vorlagen und **kein Anwaltsdokument**.
/// Vor Go-Live müssen sie durch einen Fachanwalt für IT-/Datenschutzrecht
/// geprüft und final ergänzt werden (insbesondere gesetzlicher Vertreter,
/// Steuernummer, ggf. USt-ID, Berufshaftpflicht usw. gemäß § 5 DDG).
abstract final class LegalTexts {
  static const version = 'v1 · 2026-06';

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
