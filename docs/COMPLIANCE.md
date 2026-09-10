# Legal Impact Matrix

Diese Datei wird bei jeder fachlichen Änderung fortgeschrieben. Sie hält
auch fest, wo **nichts** anzupassen war — „nicht geprüft" und „nicht
betroffen" sind zwei verschiedene Aussagen.

---

## 2026-09-03 — Unternehmensbereich: Werbe- und Sponsoringanfrage mit Auswertung

**Datenklasse:** D3 (personenbezogene Daten des Ansprechpartners beim
anfragenden Unternehmen; pseudonyme Werbekontakte mit `profile_id`).
**Änderungsklasse:** K3 — neue öffentliche Schnittstelle ohne Anmeldung,
neue Tabellen mit Personenbezug, Änderung an `execute_account_deletion` und
an der Rollenprüfung `app.is_business_member`.

### Sachverhalt

Ein Unternehmen sieht auf der Website einen Katalog von Werbe- und
Sponsoringleistungen, wählt daraus aus, nennt Standortwunsch, Laufzeit und
Kontaktdaten und sendet eine **unverbindliche** Anfrage. Es entsteht kein
Vertrag; es wird ein Lead mit Status `new` angelegt. Der Absender erhält
eine Eingangsbestätigung, der Betrieb eine interne Meldung. Später, nach
Vertragsschluss, sieht der Werbekunde in einem geschützten Bereich
ausschließlich zusammengefasste Kampagnenzahlen.

### Matrix

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum | ✓ | Keine neue Anbieterkennzeichnung; Betreiberin unverändert | Nein | |
| AGB | ✓ | Der Anfrageprozess begründet keinen Vertrag. Für den späteren Werbevertrag gelten eigene Vereinbarungen, keine AGB der App | Nein | |
| Nutzungsbedingungen | ✓ | Regeln die Nutzung der App durch Verbraucher. Der Unternehmensbereich ist ein getrennter Weg ohne Konto | Nein | |
| Datenschutzerklärung | ✓ | **Erledigt am 03.09.2026, Fassung v6.** Neu: Abschnitt 1 k) Werbeanfragen, 1 l) Messung von Werbekontakten, Klarstellung zu IP-Adressen in Abschnitt 3, Werbekunden als Nicht-Empfänger in Abschnitt 4, drei Fristen in Abschnitt 6, Abgrenzung der Anzeigenauswahl in Abschnitt 8 | Erledigt | |
| DSGVO Art. 13 | ✓ | Die Informationspflicht bei Erhebung ist am Formular selbst zu erfüllen, nicht nur durch einen Link | **Ja** | Entwicklung + Betreiber |
| DSGVO Art. 6 | ✓ | Anfrage: Art. 6 Abs. 1 lit. b (vorvertragliche Maßnahme auf Anfrage der betroffenen Person). Werbeeinwilligung getrennt über lit. a, serverseitig als eigenes Feld geführt und niemals aus der Anfrage abgeleitet | Nein | |
| DSGVO Art. 17/18 | ✓ | `leads` hatte **bisher keine Löschregel**. Jetzt eingetragen: erledigte Anfragen ohne Geschäft nach einem Jahr | Erledigt | |
| DSGVO Art. 25 | ✓ | Aggregationsschicht mit zweistufiger Unterdrückung; Rohdaten für kein Konto über die Tabelle erreichbar | Erledigt | |
| DSGVO Art. 28 | ✓ | Keine neuen Auftragsverarbeiter. Supabase und Resend waren bereits im Einsatz, der Datenfluss ist derselbe | Nein | |
| DSGVO Art. 30 | ✓ | Neue Verarbeitungstätigkeit „Werbeanfragen" und „Werbekontaktmessung" gehören ins Verzeichnis | **Ja** | Betreiber |
| Verbraucherrecht (§§ 312i–312k BGB) | ✓ | Der Unternehmensbereich richtet sich an Unternehmer. Kein Verbrauchervertrag, keine Kündigungsschaltfläche, kein Widerruf | Nein | |
| Preisangaben (PAngV) | ✓ | Die PAngV knüpft an Angebote gegenüber Letztverbrauchern an. Der Werbekatalog richtet sich an Unternehmen. **Nicht** als „PAngV erfüllt" führen, sondern als nicht einschlägig — die Sachverhaltsprüfung ist bei Änderung der Zielgruppe zu wiederholen | Nein | |
| UWG § 5 | ✓ | Irreführende Preisangaben werden technisch verhindert: Check-Constraints erlauben nicht gleichzeitig „auf Anfrage" und einen Preis, und kein „ab" ohne Preis. Alle zwölf Katalogeinträge stehen derzeit auf „Preis auf Anfrage", weil keine Preise festgelegt sind | Erledigt | |
| UWG § 5a, TMG § 6 | ✓ | **Sobald eine bezahlte Anzeige im Kundenbereich erscheint, muss sie als Werbung erkennbar sein.** Noch keine Anzeige live (0 Kampagnen) | **Ja, vor der ersten Anzeige** | Entwicklung |
| UWG § 7 | ✓ | Beide Mails sind Transaktionsmails zum angefragten Vorgang, keine Werbung. Die Einwilligung für Werbung ist ein eigenes, freiwilliges Feld | Nein | |
| Steuer & Buchführung (§§ 145–147 AO, GoBD) | ✓ | Die Anfrage ist kein Buchungsbeleg. Die Frist ist am 03.09.2026 vom Betreiber auf ein Jahr **entschieden** — in Kenntnis dessen, dass die Frage nach § 147 AO fachlich ungeklärt bleibt. Das ist eine unternehmerische Entscheidung, keine Rechtsauskunft | Entschieden, Rechtsfrage offen | Betreiber |
| Lebensmittelrecht | ✓ | Keine Produktdarstellung berührt | Nein | |
| Jugendschutz | ✓ | B2B-Prozess ohne altersbeschränkte Ware | Nein | |
| Verpackung & Pfand | ✓ | Nicht berührt | Nein | |
| Barrierefreiheit (BFSG, WCAG) | ✓ | Getrennt zu beantworten: (1) Anwendbarkeit des BFSG auf den B2B-Bereich ist nicht geprüft; (2) WCAG 2.1 AA gilt als Qualitätsanforderung für das Formular unabhängig davon | 🟡 **offen** | Betreiber (1), Entwicklung (2) |
| EU AI Act | ✓ | Kein KI-System. Die Anzeigenauswahl ist eine feste Regel ohne lernendes Modell; im `ki_register` als `werbe_ausspielung` mit `ist_ki_system = false` und `ai_act_kategorie = kein_ki_system` eingetragen. Die Kennzeichnung folgt hier nicht aus dem AI Act, sondern aus der Dauerregel des Projekts für algorithmisch ausgewählte Inhalte | **Ja, vor der ersten Anzeige** | Entwicklung |
| Urheber-/Markenrecht | ✓ | Hochgeladene Werbemittel Dritter: die Rechteeinräumung gehört in den Werbevertrag, nicht in Code. Der Upload ist ohnehin noch nicht gebaut | 🟡 **offen** | Betreiber |
| Store-Regeln | ✓ | Nichts im Kundenbereich der App verändert | Nein | |

### Anpassungskategorien

| Kategorie | Offen |
|---|---|
| **Technisch** | Werbekennzeichnung „Anzeige" und KI-Chip an der Anzeigenfläche; Art.-13-Hinweis am Formular; planmäßiger Lauf von `werbe_events_aufraeumen` und `drossel_aufraeumen`. **Erledigt:** Drossel je Absenderadresse |
| **Dokumentarisch** | **Erledigt:** Datenschutzerklärung v6. **Erledigt:** alle sieben Rechtstexte liegen jetzt versioniert im Repository, mit Prüfskript gegen stille Abweichung |
| **Organisatorisch** | Verzeichnis der Verarbeitungstätigkeiten; Klärung § 147 AO; Festlegung der Mindestgruppengröße rechtlich absichern |
| **Vertraglich** | Keine neue Auftragsverarbeitung. Rechteeinräumung an Werbemitteln im Werbevertrag |

### Was ausdrücklich nicht entschieden wurde

* Ob eine erfolglose Werbeanfrage ein empfangener Handelsbrief nach
  § 147 AO ist. Die gesetzte Frist von einem Jahr ist eine betriebliche
  Festlegung, keine Rechtsauskunft.
* Ob eine Mindestgruppengröße von 30 ausreicht. Der Wert ist zentral
  einstellbar und bewusst nicht im Code festgeschrieben, damit eine
  fachliche Prüfung ihn ohne Codeänderung anheben kann.
* Ob das BFSG auf den B2B-Bereich anwendbar ist und ob die
  Kleinstunternehmensausnahme greift.

### Status

🟡 — technisch nachgewiesen, aber vier Bereiche ausdrücklich offen
(Datenschutzerklärung, Verzeichnis, § 147 AO, Werbekennzeichnung vor der
ersten Anzeige). Der Auftrag bleibt insoweit offen. Ohne diese Punkte darf
keine bezahlte Anzeige im Kundenbereich ausgespielt werden.


---

## 2026-09-03, Nachtrag — Drossel je Absenderadresse

**Datenklasse:** D3. Aus einer IP-Adresse wird ein Prüfwert gerechnet.
**Änderungsklasse:** K3.

### Sachverhalt

Das Anfrageformular war nur je E-Mail-Adresse gedrosselt — wer die Adresse
wechselt, wechselt das Kontingent mit. Ergänzt wurde eine Grenze je
Absenderadresse. Gespeichert wird nicht die Adresse, sondern ein HMAC mit
einem täglich wechselnden Geheimnis; beides wird nach sieben Tagen gelöscht.

### Was daran datenschutzrechtlich zählt

Eine IP-Adresse ist ein personenbezogenes Datum, auch wenn sie nur
vorübergehend im Arbeitsspeicher verarbeitet und nie geschrieben wird. Die
Verarbeitung ist deshalb zu benennen und zu begründen — sie steht auf
Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an der Abwehr
missbräuchlicher Formularnutzung.

Das tägliche Wechseln des Geheimnisses ist keine Kosmetik: ohne es wäre der
Prüfwert ein dauerhafter Wiedererkennungswert und damit ein Pseudonym mit
unbegrenzter Lebensdauer. Mit ihm endet die Verknüpfbarkeit nach einem Tag.

### Der Befund, der die Erklärung ausgelöst hat

Abschnitt 3 der Datenschutzerklärung sagte zu: *„Keine IP-Adressen in
unseren Anwendungsdaten."* Nach dem Bau der Drossel stimmte der Satz in
dieser Absolutheit nicht mehr. Die Zusage bleibt der Sache nach richtig — es
wird keine Adresse gespeichert — aber die Verarbeitung findet statt und ist
jetzt ausdrücklich beschrieben. Dokumentation, die etwas anderes sagt als
der Code, ist ein Fehler, auch wenn sie zugunsten des Nutzers irrt.

### Nicht nachgewiesen

**Welche Kopfzeile PostgREST in dieser Installation tatsächlich setzt, ist
nicht belegt.** Der Egress-Proxy dieser Sitzung blockiert die Projekt-URL
mit 403, ein HTTP-Aufruf war von hier nicht möglich, und ein Test gegen die
Produktionsdatenbank ist untersagt. Die Funktion prüft fünf Kopfzeilen in
absteigender Vertrauenswürdigkeit und hält bei jeder Anfrage in
`app.betriebsparameter` fest, welche getragen hat — oder dass keine da war.
Nach der ersten echten Anfrage steht in genau einem der beiden Schlüssel ein
Datum. Bis dahin: **🔴**.

### Status

🟡 — die Drossel ist gebaut und lokal vollständig geprüft, die
Wirksamkeit im Betrieb ist noch nicht belegt. Verantwortlich: Entwicklung.
Fällig: nach der ersten Anfrage über das fertige Formular.


---

## 2026-09-03, Nachtrag — Rechtstexte ins Repository

**Sachverhalt.** Impressum, Datenschutzerklärung, Nutzungsbedingungen,
Widerrufsbelehrung, Zahlungsinformationen, Cookie-Hinweise und
Barrierefreiheitserklärung lagen ausschließlich in der Produktionsdatenbank.
Keine Migration enthielt sie; die lokale Prüfumgebung hatte null Zeilen in
`legal_text`.

**Warum das ein Befund war.** Für sieben Texte, auf die sich das Unternehmen
im Streitfall beruft, gab es keine Versionsgeschichte, keinen Stand außerhalb
der Produktion und keine Möglichkeit, eine Änderung vorher zu prüfen. Wer
einen Satz falsch änderte, konnte nicht mehr sehen, was vorher dastand. Der
Aufwand, eine Änderung an der Datenschutzerklärung vorzunehmen, war deshalb
höher als nötig — sie musste über Ankerprüfungen gegen die Produktion laufen,
statt lokal durchgespielt zu werden.

**Umsetzung.** Alle sieben Texte liegen als lesbare Einzeldateien unter
`docs/rechtstexte/` und als Migration. Die Migration schreibt einen Text
**nur, wenn er fehlt** — sie überschreibt keinen laufenden Text. Eine
Migration, die einen Rechtstext im Betrieb stillschweigend zurücksetzt, wäre
gefährlicher als das Problem, das sie löst.

**Der Preis dieser Entscheidung, und was ihn abfängt.** Weil nicht
überschrieben wird, können Repository und Betrieb auseinanderlaufen, ohne dass
es auffällt. Dagegen steht `app.rechtstext_pruefsummen()` und das Skript
`scripts/pruefumgebung/prueffe_rechtstexte.sh`, das die Prüfsummen der Dateien
gegen die der Datenbank hält. Es meldet jede Abweichung mit einem
Rückgabewert ungleich null.

**Nachweise.** Die sieben Texte wurden zeichengenau übertragen; jede
Übertragung ist einzeln gegen die md5-Summe der Produktion geprüft worden.
209 von 209 Migrationen laufen von Null durch. Der Neuaufbau aus Null ergibt
für alle sieben Texte dieselben Prüfsummen wie die Produktion. Das Prüfskript
wurde positiv (alles gleich) und negativ (ein Text im Betrieb verändert)
getestet.

**Status.** 🟢

**Was dabei aufgefallen ist und offen bleibt:** Die Migration
`20260903101500_datenschutz_werbeanfrage.sql` brach beim Neuaufbau von Null ab,
weil sie einen Text ändern wollte, den es zu diesem Zeitpunkt noch nicht gab.
Behoben — sie überspringt sich jetzt mit einem Hinweis, statt den ganzen
Aufbau scheitern zu lassen. Das ist die Art Fehler, die nur ein
Neuaufbau-Nachweis findet und die im laufenden Betrieb jahrelang unbemerkt
bleibt.

---

## Legal Impact — Werbeplatz auf der Kundenkarte (03.09.2026)

### Sachverhalt

Unternehmen, die digitale Werbung gebucht haben, können ihr Logo auf der
Kundenkarte platzieren. Die Auswahl trifft `public.kundenkarte_werbeplatz`
nach dem Kalendertag; sie liest den Aufrufer nicht. Höchstens zwei Logos,
mit Name des Werbetreibenden, Alternativtext, optionalem https-Ziel und dem
Wort für die Werbekennzeichnung. Gezählt wird über die bestehende
k-anonyme Auswertung.

**Datenklasse:** keine. Die Auswahl verarbeitet keine personenbezogenen
Daten. Die Zählung erzeugt Ereignisdaten ohne Personenbezug in der Ausgabe,
für die bereits eine Löschregel besteht.

### Rechtliche Würdigung

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum | ✓ | Kein neuer Diensteanbieter, keine neue Angabe. | Nein | |
| AGB | ✓ | Kein Vertragsverhältnis zum Kunden berührt. Das Verhältnis zum Werbetreibenden regelt der Werbevertrag, nicht die Kunden-AGB. | Nein | |
| Nutzungsbedingungen | ✓ | Keine neue Nutzungspflicht, keine neue Einschränkung. | Nein | |
| Datenschutzerklärung | ✓ | Die Auswahl verarbeitet keine personenbezogenen Daten. Die Erklärung sagt bereits, dass Werbekampagnen anonym gezählt werden. Die bestehende Aussage bleibt richtig — **wichtig:** sie bleibt es nur, solange die Auswahl nicht personalisiert wird. | Nein, solange nicht personalisiert | Betreiber |
| DSGVO Art. 5/6/13/17/22/28/30/32 | ✓ | Art. 6 wird nicht berührt, weil keine personenbezogenen Daten verarbeitet werden — nachgewiesen über den Funktionsrumpf, nicht nur über das Verhalten. Kein Profiling, keine Einzelfallentscheidung nach Art. 22. Art. 30 betrifft nur die Zählung, die im Verzeichnis bereits geführt werden muss. | Nur Art. 30 | Betreiber |
| Verbraucherrecht (§§ 312i–312k BGB) | ✓ | Keine Bestellung, kein Vertragsschluss, kein Button. | Nein | |
| Preisangaben (PAngV) | ✓ | Es wird kein Preis angezeigt. Ein Logo ist keine Preisangabe. | Nein | |
| Steuer & Buchführung (AO, GoBD, UStG) | ✓ | Der Werbeumsatz ist buchführungsrelevant, aber er entsteht im Werbevertrag, nicht in dieser Anzeigefläche. Die Impressionszahlen sind **keine** Abrechnungsgrundlage, solange nicht nach Leistung abgerechnet wird. Wird das je umgestellt, werden die Zähldaten aufzeichnungspflichtig und unveränderbar zu führen — dann ist die Verfahrensdokumentation nachzuziehen. | Nein, aber Vorbehalt | Betreiber |
| Lebensmittelrecht (LMIV) | ✓ | Kein Lebensmittel dargestellt. | Nein | |
| Jugendschutz | ✓ | Die Kundenkarte ist allen Kontoinhabern zugänglich, auch Minderjährigen. **Offener Punkt:** es gibt heute keine inhaltliche Schranke, die altersbeschränkte Werbung von dieser Fläche fernhält. Solange keine Kampagne gebucht ist, ist das theoretisch; vor der ersten Buchung ist es zu entscheiden. | Ja | Betreiber, vor der ersten Buchung |
| Verpackung & Pfand | ✓ | Nicht berührt. | Nein | |
| Barrierefreiheit (BFSG, WCAG, EN 301 549) | ✓ | Der Alternativtext ist am Motiv durch CHECK erzwungen: ohne ihn lässt sich kein Kundenkarten-Logo speichern. Eine für Screenreader stumme Werbefläche wäre eine nicht gekennzeichnete Werbefläche. Kontrast und Tippfläche prüft die Oberfläche. | In der Oberfläche | Lovable/Flutter |
| EU AI Act | ✓ | **Kein KI-System.** Die Auswahl ist eine Sortierung nach dem Kalendertag; nichts lernt, nichts entscheidet über einen Einzelnen. Art. 50 greift nicht. Ein EU-KI-Symbol an dieser Fläche wäre eine falsche Aussage über das System. | Nein | |
| UWG / Werbung | ✓ | **§ 5a Abs. 4 UWG greift.** Der kommerzielle Zweck ergibt sich auf einer Kundenkarte gerade nicht aus den Umständen: ein fremdes Logo neben der eigenen Kundennummer kann als Partnerschaft, Zahlungsmittel oder Zugehörigkeit gelesen werden. Die Funktion liefert `kennzeichnung` mit; die Oberfläche muss es sichtbar ausgeben. | Ja, in der Oberfläche | Lovable/Flutter |
| Urheber-/Markenrecht | ✓ | Die Logos sind fremde Marken. Sie werden mit Zustimmung des Rechteinhabers und im Rahmen des Werbevertrags gezeigt. **Der Werbevertrag muss die Nutzungsrechte am Logo ausdrücklich einräumen** — sonst zeigt die App eine fremde Marke ohne Erlaubnis. | Ja, im Vertragsmuster | Betreiber |
| Store-Regeln (Apple/Google) | ✓ | Werbung in einer App ist zulässig; beide verlangen, dass sie als solche erkennbar ist und keine irreführende Systemoberfläche imitiert. Ein gekennzeichnetes Logo erfüllt das. **Zu beachten:** Apple verlangt bei Werbung, die auf Kinder zielen könnte, zusätzliche Zusagen — hängt an der Jugendschutzfrage oben. | Nein, aber verknüpft | Betreiber |

### Anpassungskategorien

* **Technisch** — erledigt: Auswahl ohne Aufruferbezug, Alternativtext
  erzwungen, https erzwungen, Flächentrennung der Motivarten, kein SVG im
  öffentlichen Bucket, `anon` ausgeschlossen. Offen: die sichtbare
  Kennzeichnung in beiden Oberflächen.
* **Dokumentarisch** — nichts anzupassen, solange nicht personalisiert wird.
* **Organisatorisch** — Verzeichnis der Verarbeitungstätigkeiten für die
  Zählung; Entscheidung zur altersbeschränkten Werbung vor der ersten
  Buchung.
* **Vertraglich** — Nutzungsrechte am Logo im Werbevertragsmuster.

### Status

🟡 — Backend geprüft und ausgerollt, 19 Prüfungen grün. Gelb, weil die
sichtbare Kennzeichnung noch fehlt und drei Punkte beim Betreiber liegen:
Jugendschutz, Logo-Nutzungsrechte, Verzeichniseintrag. Ohne die sichtbare
Kennzeichnung darf keine Kampagne live gehen — eine ungekennzeichnete
Werbefläche ist der Verstoß, nicht die fehlende Dokumentation dazu.

---

## Legal Impact — Selbstbedienung Rechnungsdaten (03.09.2026)

### Sachverhalt

Ein Firmen-Admin kann Rechnungsanschrift und Rechnungs-E-Mail seiner eigenen
Firma selbst ändern. Identitäts- (Firmierung, Rechtsform), Steuer-
(Steuernummer, USt-IdNr.) und Statusangaben bleiben bei der Verwaltung.

**Datenklasse:** überwiegend Unternehmensdaten. `billing_email` kann
personenbezogen sein, wenn dort eine namentliche Adresse hinterlegt ist.

### Rechtliche Würdigung

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum | ✓ | Nicht berührt. | Nein | |
| AGB | ✓ | Keine Änderung am Vertragsverhältnis; die Pflicht des Kunden, seine Rechnungsdaten aktuell zu halten, besteht ohnehin. Ein Hinweis im Werbevertragsmuster wäre nützlich, nicht nötig. | Nein | |
| Nutzungsbedingungen | ✓ | Nicht berührt. | Nein | |
| Datenschutzerklärung | ✓ | Keine neue Verarbeitung, keine neue Kategorie, kein neuer Empfänger. Der Kunde ändert Daten, die bereits gespeichert sind. | Nein | |
| DSGVO Art. 5/6/16/25/30/32 | ✓ | Art. 5 Abs. 1 lit. d (Richtigkeit) wird eher gestärkt: falsche Rechnungsdaten lassen sich schneller korrigieren. Art. 25: die Änderungsmöglichkeit ist auf das Nötige begrenzt, unbekannte Felder werden abgewiesen statt verworfen. Art. 32: Protokollierung mit Akteur, altem und neuem Wert über `trg_audit`, geprüft. | Nein | |
| Verbraucherrecht | ✓ | Ausschließlich B2B. | Nein | |
| Preisangaben (PAngV) | ✓ | Kein Preis berührt. | Nein | |
| **Steuer & Buchführung (AO, GoBD, UStG)** | ✓ | Der kritische Punkt, und er ist entschärft: `invoices.billing_snapshot` hält die Rechnungsdaten im Zustand der Ausstellung fest. Eine spätere Änderung wirkt **nicht** auf ausgestellte Rechnungen zurück; die Unveränderbarkeit nach GoBD bleibt gewahrt. Genau deshalb bleiben Steuernummer und USt-IdNr. trotzdem außen vor: sie bestimmen, **wie** künftige Rechnungen ausgestellt werden (§ 14 UStG, Reverse Charge), und eine ungeprüfte Selbstauskunft dazu ist ein Fehler mit Folgen für den Aussteller. | Nein, aber die Abgrenzung ist tragend | |
| Lebensmittelrecht | ✓ | Nicht berührt. | Nein | |
| Jugendschutz | ✓ | Nicht berührt. | Nein | |
| Verpackung & Pfand | ✓ | Nicht berührt. | Nein | |
| Barrierefreiheit (BFSG, WCAG) | ✓ | Serverseitige Fehlermeldungen sind in verständlichem Deutsch formuliert und benennen das betroffene Feld — Voraussetzung für eine barrierefreie Fehlerbehandlung. Die Umsetzung im Formular prüft die Oberfläche. | In der Oberfläche | Lovable |
| EU AI Act | ✓ | Kein KI-System, keine automatisierte Entscheidung. | Nein | |
| UWG / Werbung | ✓ | Berührt, und das war der Grund für die engste Entscheidung dieser Änderung: die Firmierung erscheint über `kundenkarte_werbeplatz` als Name des Werbetreibenden in der Kunden-App. Eine frei änderbare Firmierung wäre eine ungeprüfte Identitätsangabe gegenüber Verbrauchern. Deshalb bleibt `name` bei der Verwaltung. | Nein, weil ausgeschlossen | |
| Urheber-/Markenrecht | ✓ | Aus demselben Grund ausgeschlossen: eine frei änderbare Firmierung lädt zur Verwendung fremder Kennzeichen ein. | Nein, weil ausgeschlossen | |
| Store-Regeln | ✓ | Nicht berührt, reine Webanwendung. | Nein | |

### Anpassungskategorien

* **Technisch** — erledigt: Feldbegrenzung, Abweisung unbekannter Felder
  statt stillem Verwerfen, zweite unabhängige Prüfung im Trigger auf den
  tatsächlichen Spaltenwerten, Protokollierung, `anon` ausgeschlossen,
  Mitglieder ohne Adminrolle ausgeschlossen.
* **Dokumentarisch** — nichts anzupassen.
* **Organisatorisch** — der Prozess für Änderungen an Firmierung, Rechtsform
  und Steuerangaben sollte benannt sein (wer prüft was, in welcher Frist).
  Heute steht in der Fehlermeldung nur „wenden Sie sich an Ihren
  Ansprechpartner".
* **Vertraglich** — nichts anzupassen.

### Status

🟢 für das Backend — 21 Prüfungen grün, darunter die Kerngegenprobe, dass
ein von Hand gesetztes Kennzeichen den Trigger nicht öffnet. Regression über
zwölf Suiten ohne Befund.

🟡 für die Funktion insgesamt, bis die Oberfläche im Firmenportal steht. Der
Auftrag dazu liegt fertig in
`docs/lovable/AUFTRAG-2026-09-FIRMENPORTAL-RECHNUNGSDATEN.md` und ist noch
nicht gesendet: der Lovable-Workspace hat keine Credits mehr.

---

## Legal Impact — Kunden-App nach dem Zielkonzept 2027 (10.09.2026)

### Sachverhalt

Die Kunden-App ist nach `docs/analyse/ZIELKONZEPT-KUNDEN-APP-2027.md`
überarbeitet worden. Fünf Änderungen mit rechtlichem Bezug:

1. **Vor-Start-Zustand.** Migration
   `20260910120000_seeddaten_aus_der_kundenansicht.sql`: vier Seed-Automaten
   archiviert, 90 Angebote archiviert, vier Challenges deaktiviert,
   Cron-Job 2 (`generate_daily_offers`) angehalten. Nachgezählt in der
   Produktivdatenbank: sichtbare Automaten 0, aktive Angebote 0, aktive
   Challenges 0, Bestandszeilen 0.
2. **Die Kundenkarte verspricht nichts mehr im Präsens.** Bis heute stand
   dort, Rabatte und Rechnung würden „automatisch verknüpft". Es gibt
   keinen Automaten, keinen Scanner und keine Anbindung.
3. **Das Abo wird vor dem Start nicht mehr angeboten** (`_AboVorStart`).
4. **Neu: Abo-Rechner** — vergleicht die Käufe der letzten 90 Tage mit
   den Abo-Kosten desselben Zeitraums und sagt dem Kunden auch, wenn
   sich das Abo für ihn *nicht* lohnt.
5. **Zwei Angaben über Abo-Vorteile korrigiert** (siehe unten).

**Datenklasse:** keine neue Verarbeitung. Der Abo-Rechner rechnet auf dem
Gerät mit Daten, die der Kunde ohnehin sieht (`myPurchasesProvider`).
Kein neuer Empfänger, keine neue Kategorie, kein Drittland.

### Der Befund, der die Korrektur ausgelöst hat

Zwei Angaben in der Vorteils-Gegenüberstellung waren falsch — in der App
(`app_benefits_compare_screen.dart`, `subscription_value_screen.dart`,
`customer_chatbot.dart`) und wortgleich auf der Landingpage
(`Plans.tsx`):

* **„Digitale Belege" stand als Abo-Vorteil.** `public.my_receipts()`
  (Migration `20260726114602_0062_receipt_archive.sql`) prüft nichts als
  `auth.uid()` und ist an `authenticated` vergeben; die App verlinkt das
  Belegarchiv aus `HistoryTab` ohne Bedingung. Jeder angemeldete Kunde
  hat die Belege, auch ohne Abo.
* **„Status-Rabatt bis 10 %"** — `Pricing.statusBonusRate` gibt für Gold
  `0.05` zurück, also **+5 %**. Die 10 % sind die Summe aus Abo-Rabatt
  (5 %) und Statusstufe.

Beide Angaben standen in der Spalte, mit der zum Abschluss aufgefordert
wird. Das ist der Fall des § 5 Abs. 1, Abs. 2 Nr. 1 UWG: eine
irreführende Angabe über die Vorteile einer entgeltlichen Leistung, an
der Stelle der geschäftlichen Entscheidung. Neu: „Belege als PDF" in der
kostenlosen Spalte, „Status: bis +5 % obendrauf".

### Matrix

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum | ✓ | Nicht berührt. Der offene Punkt „Impressum spricht von dieser App" (Aufgabenliste 1.3) bleibt davon unberührt bestehen. | Nein | |
| AGB | ✓ | Kein Vertragsinhalt geändert. Das Abo wird vor dem Start nicht mehr angeboten — damit entsteht kein Vertrag, dessen Bedingungen zu ändern wären. | Nein | |
| Nutzungsbedingungen | ✓ | Nicht berührt. | Nein | |
| Datenschutzerklärung | ✓ | Keine neue Verarbeitung, kein neuer Empfänger, keine neue Kategorie. Der Abo-Rechner nutzt Daten, die der Kunde ohnehin angezeigt bekommt, und rechnet auf dem Gerät. | Nein | |
| DSGVO Art. 5/6/13/22 | ✓ | Art. 5 Abs. 1 lit. a (Transparenz) wird gestärkt: die Kundenkarte behauptet keinen Betriebszustand mehr, den es nicht gibt. Art. 22 nicht einschlägig — der Abo-Rechner trifft keine Entscheidung über den Kunden, er zeigt ihm eine Rechnung und überlässt ihm die Entscheidung. | Nein | |
| Verbraucherrecht (§§ 312i–312k BGB) | ✓ | Der Kündigungsweg bleibt unverändert und ohne Anmeldung erreichbar. Dass vor dem Start kein Abo abgeschlossen werden kann, verkürzt keine Verbraucherrechte, sondern verhindert Verträge über eine Leistung, die noch nicht erbracht werden kann. | Nein | |
| **Preisangaben (PAngV)** | ✓ | Vor dem Start zeigt die Abo-Seite gar keine Preise mehr, danach unverändert brutto inkl. USt. Der Abo-Rechner nennt keine Preise, sondern Beträge aus den Käufen des Kunden. | Nein | |
| **UWG / Werbung** | ✓ | **Der tragende Bereich.** Drei irreführende Angaben beseitigt: die Belege als vermeintlicher Abo-Vorteil, der zu hoch angesetzte Statusrabatt und das Präsens-Versprechen auf der Kundenkarte. Der Abo-Rechner wirkt in dieselbe Richtung: er sagt dem Kunden, wenn sich das Abo für ihn nicht rechnet. | **Ja — erledigt in der App, offen auf der Landingpage** | Lovable (Auftrag liegt) |
| Steuer & Buchführung (§§ 145–147 AO, GoBD) | ✓ | Die Migration löscht nichts: `status = 'archived'` plus `deleted_at`, kein `delete`. Buchungsrelevant war ohnehin nichts — es gibt keinen Verkauf, die Automaten waren Seed-Daten. Der angehaltene Cron-Job erzeugte Angebote, keine Buchungen. | Nein | |
| Lebensmittelrecht (LMIV) | ✓ | Nicht berührt. Der offene Punkt bleibt: für die 62 geplanten Produkte fehlen Nährwerte und Allergene (Aufgabenliste). | Nein, aber Vorpunkt bleibt offen | Philipp |
| Jugendschutz | ✓ | Die serverseitige Altersschranke am Abo ist unverändert. Dass die Abo-Seite vor dem Start nichts anbietet, ist eine zusätzliche Hürde, keine Ersetzung. | Nein | |
| Verpackung & Pfand | ✓ | Nicht berührt. | Nein | |
| Barrierefreiheit (BFSG, WCAG) | ✓ | Der Chip am Abo-Rechner ist tap-bar mit ausreichender Zielgröße und steht **vor** der Aussage, nicht dahinter. Die geänderten Texte bleiben in der bestehenden Typografie. | Nein | |
| **EU AI Act / Projektregel Art. 50** | ✓ | Der Abo-Rechner erzeugt eine auf den einzelnen Kunden zugeschnittene Aussage nach einer Regel und löst damit die Kennzeichnungspflicht aus den Projektregeln aus. Umgesetzt: `AiBadge` am Kopf des Rechners, Ziel `AiInfoScreen`; dort im Abschnitt „Was wird eingesetzt?" und in der Bereichsliste ergänzt. **Label „Automatisch", nicht „KI"** — es rechnet eine Subtraktion auf dem Gerät, kein AI-System i. S. v. Art. 3 EU AI Act; dieselbe Unterscheidung wie beim regelbasierten Chat-Assistenten. Ein Chip mit „KI" wäre selbst eine falsche Angabe. | **Ja — erledigt** | |
| Urheber-/Markenrecht | ✓ | Nicht berührt. | Nein | |
| Store-Regeln (Apple/Google) | ✓ | Die App ist in keinem Store. Dass vor dem Start kein Abo angeboten wird, entschärft die offene Frage der Vertragspartnerstellung vorerst — sie bleibt zu klären, bevor eingereicht wird. | Nein, Vorfrage bleibt offen | Philipp |

### Anpassungskategorien

* **Technisch** — erledigt: Vor-Start-Zustand über `betriebszustand.dart`,
  Kundenkarten-Text, `_AboVorStart`, Abo-Rechner mit Kennzeichnung,
  drei korrigierte Vorteilsangaben, ergänzter `AiInfoScreen`.
* **Dokumentarisch** — offen auf der Landingpage: dieselben zwei
  Vorteilsangaben stehen dort noch falsch. Auftragstext liegt in
  `docs/lovable/AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md` und ist
  **nicht gesendet** — der Lovable-Workspace hat kein Guthaben.
* **Organisatorisch** — nichts anzupassen.
* **Vertraglich** — nichts anzupassen.

### Zur Pflichtliste Automaten

Geprüft: In `machines` steht kein aktiver Automat (0 sichtbar nach der
Migration). Die Erinnerungspflicht aus den Projektregeln zu
`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` knüpft an den **Kauf des ersten
Automaten** an und ist damit weiterhin nicht ausgelöst.

### Status

🟢 für die App — `flutter analyze` ohne Befund, 22 Tests grün.

🟡 für die Landingpage, bis die beiden Vorteilsangaben dort korrigiert
sind. Blockiert allein am Lovable-Guthaben, nicht an einer offenen
Frage.

---

## Legal Impact — Sortiment um drei Popcorn-Sorten erweitert (10.09.2026)

### Sachverhalt

Migration `20260910180000_sortiment_popcorn.sql`: BS-063 „Popcrn Caramel
Biscuit", BS-064 „Popcrn Caramel & Seasalt", BS-065 „Popcrn Cookies &
Cream", Kategorie Snacks, Steuersatz 7 %, `status = 'active'`. Aktive
Produkte damit 65 (Getränke 26, Eis 20, Süßwaren 13, Snacks 6).

Verkaufspreis, Einkaufspreis, Gewicht, Nährwerte und Allergene sind
**leer**. Quelle der Sortennamen sind zwei Bildschirmfotos von
kreutzers.eu; die dort sichtbaren Preise und Gewichte wurden bewusst
nicht übernommen (fremder Ladenpreis; 100 g und 80 g stehen beide bei
11,96 €/kg, was sich nicht ausgeht).

**Datenklasse:** Stammdaten, kein Personenbezug.

### Matrix

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum / AGB / Nutzungsbedingungen | ✓ | Nicht berührt. Kein Vertragsinhalt, keine neue Leistung. | Nein | |
| Datenschutzerklärung, DSGVO | ✓ | Kein Personenbezug, keine neue Verarbeitung. | Nein | |
| Verbraucherrecht | ✓ | Nichts verkäuflich: kein Automat, kein Bestand. | Nein | |
| **Preisangaben (PAngV)** | ✓ | `list_price_net` ist leer, die App zeigt deshalb keinen Preis (`grossPrice` gibt null zurück, `product_detail.dart`). Ein leerer Preis ist kein Verstoß; ein **falscher** wäre einer. Sobald ein Preis gesetzt wird, gilt Bruttoangabe inkl. USt wie bei den übrigen 62. | Nein, aber vor Preissetzung beachten | Philipp |
| **Steuer (UStG)** | ✓ | 7 % nach Anlage 2 Nr. 32 UStG — Zubereitungen aus Getreide (Kapitel 19). Gleiche Einstufung wie die übrigen Snacks. Ohne `cost_price_net` fehlen für diese drei Positionen Wareneinsatzquote und Rohertragsmarge; das ist eine Kennzahlenlücke, keine Aufzeichnungspflichtverletzung, weil kein Geschäftsvorfall vorliegt. | Nein | |
| **Lebensmittelrecht (LMIV)** | ✓ | Der bestehende offene Punkt wächst von 62 auf 65 Produkte ohne Nährwerte und Allergene. **Bewusst nicht geschätzt:** eine erfundene Allergenangabe ist gefährlicher als keine — „Cookies & Cream" und „Caramel Biscuit" lassen Gluten und Milch vermuten, Vermutung ist aber keine Kennzeichnung. Die Angaben kommen von der Verpackung. | **Ja — offener Punkt, unverändert vor dem ersten Verkauf fällig** | Philipp |
| Jugendschutz, Verpackung/Pfand | ✓ | Keine altersbeschränkte Ware, keine Pfandverpackung. | Nein | |
| Barrierefreiheit, EU AI Act | ✓ | Nicht berührt. | Nein | |
| **UWG / Werbung** | ✓ | Die Landingpage nennt „62 Produkte" und „Snacks 3". Beides ist ab heute falsch. Zahlen in Repo-Dokumenten und in der Wahrheitsschicht des Skills korrigiert; die Seite selbst zieht mit dem wartenden Lovable-Auftrag nach (Punkt 6 in `AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md`). | **Ja — offen auf der Seite** | Lovable (Auftrag liegt) |
| **Urheber-/Markenrecht** | ✓ | „Popcrn" ist eine fremde Marke. In der Datenbank steht sie zur Kalkulation, nicht zur Werbung — wie die übrigen Herstellernamen im Sortiment. **Auf die Landingpage gehört sie nicht**, weil ohne Liefervereinbarung eine Geschäftsbeziehung behauptet würde; die Seite nennt ohnehin nur Warengruppen und Zahlen. | Nein, weil ausgeschlossen | |
| Store-Regeln | ✓ | Nicht berührt. | Nein | |

### Anpassungskategorien

* **Technisch** — erledigt: Migration angewandt und nachgezählt.
* **Dokumentarisch** — Zahlen in `landingpage-inhalte.md`, im
  scrollcraft-Skill (beide Fassungen) und in der Aufgabenliste
  nachgezogen; die Landingpage selbst steht im wartenden Auftrag.
* **Organisatorisch** — Nährwerte und Allergene für drei weitere
  Produkte zu erfassen.
* **Vertraglich** — nichts anzupassen. Es gibt keine Liefervereinbarung
  für diese Ware, und die Aufnahme ins Sortiment begründet keine.

### Zur Pflichtliste Automaten

Erneut geprüft: kein aktiver Automat in `machines`. Die Erinnerung an
`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` knüpft an den Kauf des ersten
Automaten an und ist weiterhin nicht ausgelöst — auch nicht dadurch,
dass hier Sortiment und Bestand zur Sprache kommen.

### Status

🟢 für die Datenbankänderung.

🟡 für die Funktion insgesamt: die Landingpage nennt bis auf Weiteres
eine falsche Produktzahl, und drei Angaben je Sorte (VK, EK, Gewicht)
fehlen. Beides ist zugeordnet und offen geführt.
