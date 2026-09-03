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
