// weather-sync — holt die Tages-Vorhersage für den Automaten-Standort und
// schreibt sie nach public.weather_daily.
//
// Quelle: Bright Sky (https://brightsky.dev) — offene Daten des Deutschen
// Wetterdienstes. Kein API-Key, kostenfrei, kommerzielle Nutzung durch die
// DWD-Open-Data-Lizenz gedeckt.
//
// Datenschutz: abgefragt wird ausschließlich der feste Standort der Automaten
// aus public.weather_config, niemals ein Kundenstandort. Deshalb sind hier
// keine personenbezogenen Daten im Spiel.
//
// Aufruf: per Cron (pg_cron + pg_net) einmal täglich über
// app.wetter_abruf_ausloesen(). Idempotent — ein erneuter Lauf aktualisiert
// dieselben Tage.
//
// Zugang (Audit A2-02, 16.11.2026): Jeder Aufruf braucht eine Einmalmarke im
// Kopf `x-bs24-marke`, die die Datenbank unmittelbar vorher angelegt hat.
// Ohne gültige Marke: 401, kein Abruf beim Wetterdienst, kein Schreibvorgang.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';
import { markeAusKopf } from './marke.ts';

// Bewusst inline statt aus ../_shared/cors.ts: der Function-Bundler löst den
// Pfad oberhalb des Function-Ordners nicht auf, der Deploy scheitert sonst.
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type, x-bs24-marke',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

/** Anzahl Tage, die vorausgeholt werden. Weiter als 3 Tage trägt die
 *  Vorhersage ohnehin nicht — der Tages-Deal braucht nur heute und morgen. */
const DAYS_AHEAD = 3;

interface BrightSkyRecord {
  timestamp: string;
  temperature: number | null;
  condition: string | null;
}

/** Fasst die Stundenwerte eines Tages zu Min/Max/Zustand zusammen. */
function summarise(records: BrightSkyRecord[]) {
  const byDay = new Map<string, { temps: number[]; conditions: string[] }>();
  for (const r of records) {
    if (!r.timestamp) continue;
    const day = r.timestamp.slice(0, 10);
    const bucket = byDay.get(day) ?? { temps: [], conditions: [] };
    if (typeof r.temperature === 'number') bucket.temps.push(r.temperature);
    if (r.condition) bucket.conditions.push(r.condition);
    byDay.set(day, bucket);
  }

  return [...byDay.entries()]
    .filter(([, b]) => b.temps.length > 0)
    .map(([day, b]) => {
      // Häufigster Zustand des Tages — aussagekräftiger als der erste Wert.
      const tally = new Map<string, number>();
      for (const c of b.conditions) tally.set(c, (tally.get(c) ?? 0) + 1);
      const condition =
        [...tally.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

      return {
        day,
        temp_max_c: Math.round(Math.max(...b.temps) * 10) / 10,
        temp_min_c: Math.round(Math.min(...b.temps) * 10) / 10,
        condition,
        source: 'dwd/brightsky',
        fetched_at: new Date().toISOString(),
      };
    });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  if (req.method !== 'POST') return json({ ok: false }, 405);

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // Erst die Marke einlösen, dann irgendetwas anderes tun. Fehlt sie oder
    // ist sie verbraucht, wird weder der Wetterdienst gefragt noch
    // geschrieben, und die Antwort verrät nichts über den Grund.
    const marke = markeAusKopf(req.headers);
    if (!marke) return json({ ok: false }, 401);
    const { data: gueltig, error: markeErr } = await supabase.rpc(
      'wetter_marke_einloesen',
      { p_marke: marke },
    );
    if (markeErr || gueltig !== true) return json({ ok: false }, 401);

    const { data: cfg, error: cfgErr } = await supabase
      .from('weather_config')
      .select('lat, lng, enabled')
      .eq('id', 1)
      .single();

    if (cfgErr) {
      console.error(`[weather-sync] weather_config: ${cfgErr.message}`);
      return json({ ok: false }, 500);
    }
    if (!cfg?.enabled) return json({ ok: true, skipped: 'disabled' });

    const from = new Date();
    const to = new Date(from.getTime() + DAYS_AHEAD * 86_400_000);
    const url =
      `https://api.brightsky.dev/weather` +
      `?lat=${cfg.lat}&lon=${cfg.lng}` +
      `&date=${from.toISOString().slice(0, 10)}` +
      `&last_date=${to.toISOString().slice(0, 10)}`;

    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
      // Die abgefragte Adresse bleibt im Protokoll, nicht in der Antwort.
      console.error(`[weather-sync] Bright Sky ${res.status}: ${url}`);
      return json({ ok: false, error: `Bright Sky ${res.status}` }, 502);
    }

    const body = await res.json() as { weather?: BrightSkyRecord[] };
    const rows = summarise(body.weather ?? []);
    if (rows.length === 0) {
      return json({ ok: false, error: 'keine Messwerte erhalten' }, 502);
    }

    const { error: upErr } = await supabase
      .from('weather_daily')
      .upsert(rows, { onConflict: 'day' });
    if (upErr) {
      console.error(`[weather-sync] weather_daily: ${upErr.message}`);
      return json({ ok: false }, 500);
    }

    return json({ ok: true, days: rows.length });
  } catch (e) {
    // Nie hart scheitern: der Tages-Deal fällt sonst auf die Monatsregel
    // zurück, das ist besser als ein abgebrochener Cron-Lauf.
    console.error(`[weather-sync] ${String(e)}`);
    return json({ ok: false }, 500);
  }
});
