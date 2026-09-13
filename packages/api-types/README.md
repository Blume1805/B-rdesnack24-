# `database.types.ts` — generierter API-Vertrag

Aus dem Live-Projekt `nnfsyuglkqycwenwxmuw` erzeugt. Die Datei ist
**generiert, nicht handgepflegt** — Änderungen daran werden beim nächsten Lauf
überschrieben.

## Wozu

Das Partnerportal war gegen Parameternamen gebaut, die es nie gab:
`p_business_id` statt `p_business`, `p_payload` statt `p_werte`,
`p_campaign_id` statt `p_campaign`. Sieben von zehn Aufrufen hätten
`PGRST202` geliefert. Die Funktions*namen* waren richtig — nur die
Parameternamen hat niemand übergeben, und PostgREST bindet über den Namen.

Mit dieser Datei fällt so etwas beim Tippen auf, nicht im Betrieb.

## Verwendung

```ts
import type { Database } from "@/types/database.types";

const supabase = createClient<Database>(url, key);

// Falscher Parametername ist jetzt ein Typfehler, kein Laufzeitfehler:
await supabase.rpc("business_dashboard", { p_business: id, p_von, p_bis });
```

## Neu erzeugen

Nach **jeder** Schemaänderung:

```bash
supabase gen types typescript --project-id nnfsyuglkqycwenwxmuw > packages/api-types/database.types.ts
```

Aus einer Umgebung ohne Zugriff auf `api.supabase.com` geht es über die
MCP-Schnittstelle (`generate_typescript_types`).

## Gegenprobe

Die Datei muss die richtigen Parameternamen enthalten und die falschen nicht:

| erwartet | verboten |
| --- | --- |
| `p_business`, `p_von`, `p_bis` | `p_business_id` |
| `p_jahr`, `p_monat` | `p_payload` |
| `p_campaign` | `p_campaign_id`, `p_content_base64` |

Zuletzt geprüft am 01.09.2026: alle vier erwarteten vorhanden, alle vier
verbotenen nicht vorhanden.

Die fachliche Beschreibung der Aufrufe steht in
`docs/API-UNTERNEHMENSBEREICH.md` — dort stehen auch die Rollengates und die
Regeln, die ein Typ nicht ausdrücken kann.
