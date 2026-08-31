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
// Aufruf: per Cron (pg_cron + pg_net) zweimal täglich. Idempotent — ein
// erneuter Lauf aktualisiert dieselben Tage.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

// Bewusst inline statt aus ../_shared/cors.ts: der Function-Bundler löst den
// Pfad oberhalb des Function-Ordners nicht auf, der Deploy scheitert sonst.
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
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

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: cfg, error: cfgErr } = await supabase
      .from('weather_config')
      .select('lat, lng, enabled')
      .eq('id', 1)
      .single();

    if (cfgErr) return json({ ok: false, error: cfgErr.message }, 500);
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
      return json(
        { ok: false, error: `Bright Sky ${res.status}`, url },
        502,
      );
    }

    const body = await res.json() as { weather?: BrightSkyRecord[] };
    const rows = summarise(body.weather ?? []);
    if (rows.length === 0) {
      return json({ ok: false, error: 'keine Messwerte erhalten' }, 502);
    }

    const { error: upErr } = await supabase
      .from('weather_daily')
      .upsert(rows, { onConflict: 'day' });
    if (upErr) return json({ ok: false, error: upErr.message }, 500);

    return json({ ok: true, days: rows.length, rows });
  } catch (e) {
    // Nie hart scheitern: der Tages-Deal fällt sonst auf die Monatsregel
    // zurück, das ist besser als ein abgebrochener Cron-Lauf.
    return json({ ok: false, error: String(e) }, 500);
  }
});
