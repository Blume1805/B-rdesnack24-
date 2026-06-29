# Modul: Kundenbereich (Kategorie 3)

Nur für Rolle **Kunde** sichtbar. Kunden sehen ausschließlich eigene Daten; keine internen
Unternehmensdaten. Pflege (Preise, Angebote, Empfehlungen) erfolgt durch Gesellschafter.

## Datenmodell (Migration 0010)

- `customers` (1:1 zu `profiles`, automatisch per Trigger angelegt), Benachrichtigungs-Prefs.
- `customer_prices` — individuelle Preise (Pflege via `prices.manage`).
- `offers` — Tages-/Wochen-/Sonderaktionen (Pflege via `offers.manage`).
- `purchases` / `purchase_items` — Kaufhistorie (Vorbereitung KI-Auswertung).
- `recommendations` — personalisierte Empfehlungen.
- `contact_messages` — Kontakt/Feedback (Problem/Frage/Lob/Kritik/Vorschlag).
- `consents` — DSGVO-Einwilligungen, **append-only** (analytics/marketing/maps/privacy).

## RLS (Kernprinzip: Eigenzugriff)

Kunden lesen/schreiben nur Zeilen mit `… = auth.uid()`. Angebote sind für alle Angemeldeten
lesbar. Bearbeitung von Preisen/Angeboten/Empfehlungen/Kontaktstatus nur mit den jeweiligen
Management-Permissions. Einwilligungen sind unveränderlich (nur Insert/Select).

## Funktionen (Flutter)

- **Profil:** Stammdaten, Passwort ändern (Supabase Auth), Benachrichtigungen, DSGVO-Einwilligungen.
- **Angebote:** aktive Aktionen.
- **Automatenfinder:** Liste aller Automaten, Navigation via Google Maps (`url_launcher`),
  **Echtzeit-Produktverfügbarkeit** (Realtime auf `inventory`, View `machine_stock`).
- **Verlauf:** individuelle Preise, Kaufhistorie, Empfehlungen.
- **Kontaktformular** und **Google-Bewertung** (`GOOGLE_REVIEW_URL`).

## Echtzeit-Verfügbarkeit

Bestände werden über die Nayax-Telemetrie (Phase 2) fortgeschrieben; der Kundenbereich
abonniert `inventory` und zeigt „verfügbar / bald leer / ausverkauft“.

## Konfiguration

```
GOOGLE_REVIEW_URL=...        # dart-define (Client)
# Karten-Navigation nutzt Google-Maps-Web-URLs (kein API-Key nötig).
```

## Offen (Phase 4)

Eingebettete Karte (`google_maps_flutter`, benötigt API-Key) statt Web-Weiterleitung;
Kopplung der Kaufhistorie an identifizierte Nayax-Käufe (Loyalty); KI-Empfehlungslogik.
