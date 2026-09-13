# Datenschutz & App-Store-Datenangaben

Grundlage: DSGVO, deutsches Datenschutzrecht. Server in der **EU** (Supabase EU-Region,
AV-Vertrag). Analytics (PostHog) und Karten werden **erst nach Einwilligung** aktiv.

## Verarbeitete Datenkategorien

| Kategorie | Zweck | Rechtsgrundlage |
|---|---|---|
| Konto (E-Mail, Name, Rolle) | Authentifizierung, Zugriffssteuerung | Art. 6 (1) b DSGVO |
| Kundenprofil/Preise/Käufe | Vertragsdurchführung, Kaufhistorie | Art. 6 (1) b |
| HACCP-/GoBD-Protokolle | gesetzliche Pflichten (LMHV, AO) | Art. 6 (1) c |
| Gerätetokens (FCM) | Push-Benachrichtigungen | Art. 6 (1) a (Einwilligung) |
| Nutzungsanalyse (PostHog) | Produktverbesserung | Art. 6 (1) a (Einwilligung) |
| Standort/Karten (Google Maps) | Automatenfinder/Navigation | Art. 6 (1) a (Einwilligung) |
| Fehlerdiagnose (Sentry, ohne PII) | Stabilität | Art. 6 (1) f |

## Apple App Privacy (App Store Connect)

- **Kontakt:** Name, E-Mail → App-Funktionalität (verknüpft mit Nutzer).
- **Käufe/Nutzungsverlauf:** → App-Funktionalität / Analyse (nur mit Einwilligung).
- **Kennungen:** Push-Token → App-Funktionalität.
- **Diagnose:** Crash-Daten (Sentry, ohne PII) → Analyse.
- Kein Tracking über Apps Dritter hinweg (kein ATT-Tracking).

## Google Play Data Safety

- Erhobene Daten: persönliche Infos (Name/E-Mail), App-Aktivität, Geräte-IDs (Push).
- Verschlüsselung bei Übertragung: **ja** (TLS). Löschung anforderbar: **ja**.
- Daten werden nicht verkauft/an Dritte zu Werbezwecken weitergegeben.

## Betroffenenrechte

**Auskunft (Art. 15 DSGVO):** `export_my_data()` gibt dem angemeldeten Konto
seinen vollständigen Bestand über 38 Bereiche aus; erreichbar in der App unter
Profil → Meine Daten.

**Löschung (Art. 17 DSGVO):** Seit dem 02.09.2026 ist der Ablauf umgesetzt und
nicht mehr nur entgegengenommen. Für **jede** der 36 Tabellen mit Personenbezug
steht in `public.loeschregeln` fest, was geschieht — die Regel ist Datenbestand,
nicht Programmtext, und damit prüfbar:

| Behandlung | Anzahl | Was passiert |
| --- | --- | --- |
| `loeschen` | 13 | wird sofort entfernt |
| `aufbewahren` | 18 | bleibt bis zum Ablauf der Frist (sechs oder acht Jahre), dann automatisch entfernt |
| `anonymisieren` | 3 | Zeile bleibt, der Personenbezug fällt weg (`profiles`, `customers`, `audit_log`) |
| `ausserhalb` | 2 | Beschäftigtendaten (IfSG-Belehrungen, Schulungen) — eigener Vorgang zum Ende des Arbeitsverhältnisses, nicht Teil der Kundenlöschung |

Der Zugang wird gesperrt (`auth.users.banned_until`), Name, E-Mail, Telefon,
Geburtsdatum und Rechnungsanschrift werden ersetzt oder geleert. Das
Änderungsprotokoll behält, wer wann welchen Datensatz geändert hat, verliert
aber den protokollierten Inhalt, soweit dieser aus einer gelöschten oder
anonymisierten Tabelle stammt.

**Fristbeginn:** Die Aufbewahrungsfrist läuft ab dem **Ende** des Vorgangs
(§ 147 Abs. 4 AO), nicht ab seiner Anlage. Ein laufendes Abo, eine geltende
Einwilligung und eine bestehende Firmenmitgliedschaft werden deshalb nicht
gelöscht, solange sie laufen. Ein nächtlicher Lauf (03:40) entfernt, was seine
Frist überschritten hat; er lässt sich für eine Betriebsprüfung anhalten
(Ablaufhemmung, § 147 Abs. 3 Satz 5 AO).

**Berichtigung:** Stammdaten sind im Profil selbst änderbar. Die E-Mail-Adresse
folgt der Anmeldung und wird über Supabase doppelt bestätigt.

**Einwilligungen** sind in `consents` versioniert dokumentiert und jederzeit
widerrufbar (Profil → Einwilligungen). Werbung an ein gelöschtes Konto wird
unterdrückt; Vertrags- und Rechtsnachrichten gehen weiter hinaus, weil Art. 18
DSGVO die Verarbeitung einschränkt und nicht verbietet.

Nachweise und Messwerte: `docs/SECURITY.md`, Abschnitte 16 und 18.

> Hinweis: Dies ist eine technische Zuarbeit, keine Rechtsberatung. Datenschutzerklärung und
> App-Store-Angaben sind vor Veröffentlichung rechtlich zu prüfen.
