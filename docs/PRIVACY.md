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

Auskunft/Löschung/Berichtigung: Konten werden nicht hart gelöscht (GoBD/HACCP-Aufbewahrung),
sondern deaktiviert/archiviert; personenbezogene Felder können auf Anfrage anonymisiert werden,
soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Einwilligungen sind in
`consents` versioniert dokumentiert und jederzeit widerrufbar (Profil → Einwilligungen).

> Hinweis: Dies ist eine technische Zuarbeit, keine Rechtsberatung. Datenschutzerklärung und
> App-Store-Angaben sind vor Veröffentlichung rechtlich zu prüfen.
