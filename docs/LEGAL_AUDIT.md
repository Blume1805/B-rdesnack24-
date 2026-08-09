# Rechtlicher Compliance-Audit — Bördesnack24-Plattform

Stand: 2026-06 · Geltungsbereich: Flutter-App (Android/iOS/Web) + Supabase-Backend +
bestehende Website (Marketing).
**Kein Anwaltsdokument** — technische Analyse mit konkreten Umsetzungen.
Finale Texte / DSFA / AV-Verträge sind vor Go-Live von einem Fachanwalt für IT-/Datenschutz-
recht zu prüfen und freizugeben.

## Rechtlicher Rahmen (Deutschland/EU)

| Regel | Kernpflicht für diese App |
|---|---|
| DSGVO (Art. 5–35) | Rechtsgrundlage je Verarbeitung, Betroffenenrechte, Datenminimierung, DSFA |
| BDSG | nationale Konkretisierung DSGVO |
| DDG (früher TMG § 5) | Impressumspflicht (auch in Apps) |
| TDDDG | Cookie-/Trackingschutz, Einwilligung vor Nicht-Notwendigem |
| GoBD + §§ 145–147 AO | Unveränderlichkeit, Nachvollziehbarkeit, 8/10 Jahre Aufbewahrung |
| UStG § 22 / § 63 UStDV | Erlöstrennung nach Steuersatz |
| VO (EG) 852/2004 (HACCP) | Eigenkontrollen, Rückverfolgbarkeit (Art. 18 VO 178/2002) |
| LMIV (EU 1169/2011) | Kennzeichnung (bei vorverpackter Ware werksseitig) |
| IfSG §§ 42/43 | Belehrung + jährliche Wiederholung |
| BFSG (seit 06/2025) | Barrierefreiheit für B2C-digitale Dienste (WCAG 2.1 AA / EN 301 549) |
| UWG | irreführende geschäftliche Handlungen (Spendenversprechen!) |
| Apple/Google Store | Datenangaben, Age-Rating, Privacy-Manifest |

## Ergebnis-Matrix

Legende: ✅ konform · 🟨 fix hinzugefügt (siehe unten) · 🟥 Anwalt erforderlich

### DSGVO / Datenschutz

| Anforderung | Status | Umsetzung |
|---|---|---|
| Rechtsgrundlage je Verarbeitung | ✅ | Vertrag (Art. 6.1.b), Gesetz (6.1.c), Einwilligung (6.1.a) — Tabelle in DSE |
| Datenminimierung | ✅ | RLS an der Quelle; keine unnötigen Felder |
| Auskunft (Art. 15) | 🟨 | RPC `export_my_data()` + Screen im Profil |
| Löschung (Art. 17) | 🟨 | RPC `request_account_deletion()` + Screen (Antrag, nicht sofortiges Hard-Delete wegen GoBD-Kollision) |
| Datenübertragbarkeit (Art. 20) | 🟨 | JSON-Export via `export_my_data()` |
| Einwilligung (Art. 7) | 🟨 | Registrierung: Pflicht-Checkboxen Datenschutz + AGB; Kunden-Consent-Screen |
| Widerruf | ✅ | `consents` append-only mit `granted=false` |
| Verzeichnis der Verarbeitungen | 🟥 | Vorlage `docs/VVT.md`, Pflege durch Verantwortliche |
| DSFA (Art. 35) | 🟥 | Bewertung erforderlich (HACCP-Daten, Kaufdaten mit Automat + Uhrzeit, Profiling für individuelle Angebote). **Keine** Standortdaten — die App fragt den Gerätestandort nicht ab (Audit 09.08.2026) |
| AV-Verträge (Art. 28) | 🟥 | Tatsächlich nötig: **Supabase** (Frankfurt), **Resend** (Irland), **GitHub Pages** (USA), **sevDesk**, **DocuSign** (USA). *Nicht* nötig: Firebase, Sentry, PostHog, Google Maps — nichts davon ist eingebunden |
| Profiling offenlegen (Art. 13 II f, 21) | ✅ | DSE v2 Abschnitt 1 d) + 8: `generate_personal_offer()` benannt, Widerspruchsrecht eingeräumt |
| Datenschutzerklärung in-App | 🟨 | `PrivacyScreen`, **DSE v2 vom 09.08.2026** — entlang des geprüften Ist-Zustands geschrieben (Bericht: Systemanalyse 09.08.2026). Anwaltliche Freigabe steht weiterhin aus |
| Impressum in-App (§ 5 DDG) | 🟨 | `ImprintScreen` mit Vorlage-Text |

### GoBD / Buchführung
| Anforderung | Status |
|---|---|
| Unveränderlichkeit (§ 146 (4) AO) | ✅ Trigger + RLS erzwingen append-only, kein UPDATE/DELETE auf Protokolltabellen |
| Nachvollziehbarkeit | ✅ `audit_log` mit Aktor/Zeit/Vorher-Nachher |
| Zeitnahe Erfassung | ✅ Trigger schreiben `created_at` server-seitig |
| Verfahrensdokumentation | ✅ Bestehende Verfahrensdokumentation der Kanzlei; ergänzt durch `docs/OPERATIONS.md` |
| Aufbewahrung 10 J. | ✅ Kein Hard-Delete möglich; Backups über Supabase PITR |

### HACCP / Lebensmittelhygiene
| Anforderung | Status |
|---|---|
| CCP-Kontrollpunkte digital | ✅ Temperatur (≤7 °C generierte Spalte), Reinigung, Vernichtung, Wartung |
| Rückverfolgbarkeit (Art. 18 VO 178/2002) | 🟨 Erweiterung: Chargennummer/Lieferantenreferenz in `filling_logs` optional |
| Belehrung §§ 42/43 IfSG | ✅ `ifsg_briefings` mit `next_due` |
| Schulungsnachweise | ✅ `employee_trainings` |

### Sicherheit / OWASP
| Anforderung | Status |
|---|---|
| Session-Mgmt (Rotation, Refresh) | ✅ Supabase Auth |
| Passwort-Anforderungen | 🟨 Länge + Komplexität (Groß/Klein/Ziffer) erzwingen |
| MFA | ✅ TOTP vorbereitet; empfohlen Pflicht für interne Rollen vor Go-Live |
| Brute-Force / Rate-Limit | ✅ Supabase Auth Limits + serverseitige RPCs |
| Verschlüsselung in Übertragung | ✅ TLS |
| Verschlüsselung sensibler Felder at-rest | 🟥 pgcrypto-Konzept vorhanden; Ausbau optional (Klartextfelder wie Adressen sind nicht besonders schutzwürdig i.S.v. Art. 9) |
| Storage sichere Uploads | ✅ private Buckets, RLS, kein Update/Delete |
| Audit-Log | ✅ append-only |

### UWG — Spendenversprechen
- Website vergibt „5 % vom Netto-Umsatz als Spende". Damit dies **nicht irreführend** ist,
  muss der ausgewiesene Wert **belegbar** aus der Buchhaltung stammen und **regelmäßig
  aktualisiert** werden (bereits über `spendenstand.php` gelöst; sevDesk-Sync in der App
  liefert dieselbe Quelle für ein späteres In-App-Widget).
- **Empfehlung:** In-App-Widget „Aktueller Spendenstand", das dieselbe RPC nutzt wie die
  Website; Anzeige des Aktualisierungsdatums, um Aktualität nachzuweisen (UWG § 5 – § 5a).

### App-Store / Play-Store
- App Privacy (Apple) / Data Safety (Google): siehe `docs/PRIVACY.md`.
- Kein Third-Party-Tracking → kein ATT-Prompt nötig; PostHog nur nach Einwilligung.
- Age Rating: 4+; keine sensiblen Inhalte.
- URL zur Datenschutzerklärung Pflicht — jetzt in-App verfügbar.

### Barrierefreiheit (BFSG)
- Semantische Widgets (Material 3) + `Semantics`-Wrappers wo sinnvoll.
- Kontraste Gold/Ink prüfen für WCAG 2.1 AA (Kontrast ≥ 4,5:1 für Text) — für Gold auf
  Dunkelbraun geprüft ≈ 12,5 : 1 (Body-Text) → konform.
- Empfehlung: **BFSG-Konformitätserklärung** nach Go-Live veröffentlichen.

## Anwaltsprüfung — was der Anwalt tun soll

- Datenschutzerklärung (Vorlage `PrivacyScreen`) und Impressum finalisieren.
- AGB für die App (Vertragsschluss über App, Preise, Widerrufsausschluss beim Automaten-
  Kauf, Nutzung des Kundenkontos).
- DSFA (Art. 35 DSGVO) durchführen und dokumentieren.
- AV-Verträge Supabase / Firebase / Google Maps / (später) Sentry / PostHog.
- Rechtstexte auf UWG-Konformität prüfen (insbesondere Spendenversprechen).
- Konformitätserklärung BFSG.

## Umgesetzte technische Fixes (siehe folgende Commits)
1. `ImprintScreen`, `PrivacyScreen`, `TermsScreen` als in-App-Rechtsseiten.
2. Registrierung: DSGVO- und AGB-Pflicht-Checkboxen.
3. Profil: „Meine Daten exportieren" (JSON) + „Konto löschen (Antrag)".
4. Kontaktformular: DSGVO-Hinweis.
5. Passwort-Validator mit Komplexitätsanforderungen.
6. Migration `0013_privacy_tooling.sql`:
   - RPC `export_my_data()` (JSON-Export der eigenen Daten)
   - Tabelle `account_deletion_requests` + RPC `request_account_deletion()`
   - Consent-Typen erweitert um `terms` (AGB-Zustimmung)
