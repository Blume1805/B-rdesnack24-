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
| Datenschutzerklärung | ✓ | **Es fehlt ein Abschnitt zur Werbeanfrage**: Zweck, Rechtsgrundlage, Speicherdauer, Empfänger. Ebenso fehlt die Werbekontaktzählung | **Ja** | Betreiber |
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
| Steuer & Buchführung (§§ 145–147 AO, GoBD) | ✓ | Die Anfrage ist kein Buchungsbeleg. **Offen:** ob eine erfolglose Anfrage ein empfangener Handelsbrief nach § 147 AO ist und sechs Jahre aufzubewahren wäre | 🟡 **offen** | Betreiber |
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
| **Technisch** | Werbekennzeichnung „Anzeige" und KI-Chip an der Anzeigenfläche; Art.-13-Hinweis am Formular; IP-Drossel am Rand des Systems; planmäßiger Lauf von `werbe_events_aufraeumen` |
| **Dokumentarisch** | Datenschutzerklärung um Werbeanfrage und Werbekontaktmessung ergänzen |
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
