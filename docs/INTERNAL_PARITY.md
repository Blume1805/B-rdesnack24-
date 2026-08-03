# Interner Bereich — Abgleich gegen die Wunschliste

Stand: 02.08.2026 · Betrifft `apps/mobile/lib/features/management/` und
`.../finance/`

Der Auftrag nennt für die Gesellschafter-/Mitarbeiter-App neun Bereiche.
Diese Liste hält fest, was davon bereits produktiv ist. Ergebnis vorweg:
acht von neun sind da — teils deutlich umfangreicher als die Stichworte
vermuten lassen.

**Einordnung geändert am 02.08.2026 (ADR 0005):** Die frühere Festlegung
„bleibt in der Flutter-App, wird nicht portiert" gilt nicht mehr. Der
interne Bereich wird als **eigene Loveable-App** neu gebaut, getrennt von
der Kunden-App — Kunden sollen keinen Verwaltungscode ausgeliefert
bekommen. Diese Liste ist damit von einer Abgleichsliste zur
**Portierungsliste** geworden: Was hier als ✅ steht, muss drüben
entstehen, bevor die Flutter-App abgeschaltet werden darf.

Reihenfolge laut ADR 0005: zuerst der Kundenbereich, dann diese Liste —
beginnend mit dem täglich Gebrauchten (Inventur, Prozessprotokolle),
zuletzt das Seltene (Jahresabschluss).

| Gefordert | Status | Wo |
|---|---|---|
| Dashboard | ✅ | `finance_screen.dart` + `kpi_dashboard.dart` |
| Finanzen | ✅ | Finance-Modul mit sevDesk-Sync, DATEV-Export, Bilanz-Snapshots |
| Kennzahlen | ✅ | EBITDA-Marge, EK-Quote, Liquidität 1./2./3. Grades, ROI 12 Monate, Rohertragsmarge, operativer Cashflow, Bilanzsumme, aktive Kunden |
| Inventur | ✅ | `inventory`, `inventory_report`, dazu Druck-/Web-Varianten |
| Aufgaben | 🟨 | `my_signature_tasks` (Signaturaufgaben) und `approvals` (Freigaben) decken den Vorgangsteil ab. Eine allgemeine Aufgabenverwaltung („to do" ohne Bezug zu Signatur/Freigabe) gibt es nicht. |
| Dokumentation | ✅ | `documents_screen.dart` (1.140 Zeilen), HACCP-Sets und Marken-Sets werden serverseitig installiert |
| Prozesse | ✅ | Reinigung, Temperatur, Entsorgung, Befüllung, Wartung — je eigener Screen mit Protokoll |
| Auswertungen | ✅ | Inventurberichte, BWA/CSV, Cashflow-Entwicklung, Vergleich Vorjahreszeitraum |
| **Interne Kommunikation** | ❌ | **Kein Modul.** Kommentare gibt es nur gebunden an einen Vorgang (Freigabe, Reklamation, Telemetrie) — keinen freien Nachrichtenkanal zwischen Mitarbeitenden. |

## Weitere Screens, die in der Wunschliste gar nicht vorkommen

Reklamationen, Kassenverwaltung, B2B-Kunden inkl. CSV-Export,
Automatenbestand, Kündigungen, Mitarbeiterverwaltung,
Unterschriftenverwaltung, Telemetrie-Hub.

## Entschieden: internes Kommunikationsmodul kommt nicht

**Entscheidung vom 03.08.2026:** Nachrichten zwischen Gesellschaftern und
Mitarbeitern sind nicht erwünscht. Der Punkt ist damit erledigt und wird
nicht gebaut.

Das war der letzte offene Posten aus dem ursprünglichen Auftrag. Der
interne Bereich ist damit funktional vollständig — was jetzt noch ansteht,
ist Portierung nach Lovable, kein Neubau.

Zur Nachvollziehbarkeit die Abwägung, die zu der Frage geführt hatte: Für
Absprachen gibt es in einem Betrieb dieser Grösse Telefon und Messenger,
ein eigener Kanal in der App wäre eine weitere Stelle, in die man schauen
muss. Dem stand gegenüber, dass vorgangsbezogene Notizen über fünf Screens
verstreut sind. Falls dieses Verstreut-Sein später doch stört, ist der
naheliegende Zuschnitt **nicht** ein Chat, sondern Notizen am Objekt
(Automat, Reklamation, Lieferung) — das löst das Problem, ohne einen
zweiten Posteingang zu erzeugen.
