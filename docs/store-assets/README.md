# Store-Assets · Bördesnack24

Grundausstattung für App Store / Google Play Listings.

| Datei | Zweck |
|---|---|
| `app-icon-1024.png` | App-Icon 1024×1024 (Apple App Store Pflichtformat; Play Store nutzt 512×512 → `apps/mobile/web/icons/Icon-512.png`) |
| `store-listing.md` | Listing-Texte: Name, Untertitel, Beschreibung, Keywords, Datenschutz-Angaben, Review-Hinweise |
| `screenshots/iphone_*.png` | 4 Motive im iPhone-6,7"-Format (1290×2796): Login, Kundenbereich, Finanzen, Verwaltung |
| `screenshots/ipad_*.png` | dieselben Motive im iPad-12,9"-Format (2048×2732) |
| `screenshot-splash-1290x2796.png` | Splash/Loader (Alt-Bestand) |
| `screenshot-login-1290x2796.png` | Login mit Marken-Hero (Alt-Bestand) |

Die Screenshots in `screenshots/` wurden headless gegen den Live-Build mit
Demo-/Mock-Daten aufgenommen (Supabase gemockt) — Layout und Branding sind
final, die Zahlen sind Beispieldaten.

## Noch offen für die Store-Einreichung
* Optional: Screenshots mit echten Daten vom Gerät nachschießen
  (insb. Bestand/Produktkatalog und Beispielrechnung).
* Feature-Grafik Google Play (1024×500).
* StoreKit-/Play-Billing-Anbindung für die Abo-Modelle (In-App-Purchase);
  bis dahin sind die Abos in der App nur vorgemerkt.
* Datenschutzerklärung als öffentliche URL auf boerdesnack24.de spiegeln
  (Store-Pflichtfeld).

Icon-Quelle: HTML-Template in der Session generiert (Ink-Verlauf #14110E,
Gold #FDC102, „B24" + Wortmarke). Bei Änderungen neu rendern und alle
Größen ableiten (192/512/maskable/180/48).
