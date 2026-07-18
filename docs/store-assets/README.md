# Store-Assets · Bördesnack24

Grundausstattung für App Store / Google Play Listings.

| Datei | Zweck |
|---|---|
| `app-icon-1024.png` | App-Icon 1024×1024 (Apple App Store Pflichtformat; Play Store nutzt 512×512 → `apps/mobile/web/icons/Icon-512.png`) |
| `screenshot-splash-1290x2796.png` | Splash/Loader (iPhone 6,7" Format) |
| `screenshot-login-1290x2796.png` | Login mit Marken-Hero (iPhone 6,7" Format) |

## Noch offen für die Store-Einreichung
* Screenshots der eingeloggten Bereiche (Angebote/Deals, Mein Abo,
  Automatenfinder) — auf echtem Gerät oder Simulator aufnehmen; aus der
  CI-Sandbox ist der Supabase-Login netzwerkbedingt nicht möglich.
* Feature-Grafik Google Play (1024×500).
* Store-Beschreibungstexte (kurz/lang) + Keywords.
* Datenschutz-Labels (Apple App Privacy / Play Data Safety) — Datenbasis
  steht in der Datenschutzerklärung der App.

Icon-Quelle: HTML-Template in der Session generiert (Ink-Verlauf #14110E,
Gold #FDC102, „B24" + Wortmarke). Bei Änderungen neu rendern und alle
Größen ableiten (192/512/maskable/180/48).
