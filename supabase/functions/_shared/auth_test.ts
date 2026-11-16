// Prüfungen zu auth.ts. Die Regel entscheidet, wer an Signaturen, Dokumente
// und den Mailversand kommt — sie gehört geprüft, nicht geglaubt.
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { istBerechtigt, NUR_GESELLSCHAFTER, INTERNE_ROLLEN } from "./auth.ts";

interface Zeile { role?: string | null; status?: string | null; deleted_at?: string | null }

/** Nachbau der Aufrufkette des Supabase-Clients, mit Protokoll. */
function fakeDb(zeile: Zeile | null, protokoll: string[] = []) {
  // deno-lint-ignore no-explicit-any
  const kette: any = {
    select(_s: string) { protokoll.push(`select:${_s}`); return kette; },
    eq(k: string, v: string) { protokoll.push(`eq:${k}=${v}`); return kette; },
    maybeSingle() { return Promise.resolve({ data: zeile }); },
  };
  return { from(t: string) { protokoll.push(`from:${t}`); return kette; } };
}

function wirftDb() {
  return { from(_t: string) { throw new Error("Datenbank weg"); } };
}

Deno.test("aktiver system_admin ist berechtigt", async () => {
  const db = fakeDb({ role: "system_admin", status: "active", deleted_at: null });
  assertEquals(await istBerechtigt(db, NUR_GESELLSCHAFTER), true);
});

Deno.test("aktiver shareholder ist berechtigt", async () => {
  const db = fakeDb({ role: "shareholder", status: "active", deleted_at: null });
  assertEquals(await istBerechtigt(db, NUR_GESELLSCHAFTER), true);
});

Deno.test("Kunde ist nicht berechtigt", async () => {
  const db = fakeDb({ role: "customer", status: "active", deleted_at: null });
  assertEquals(await istBerechtigt(db, NUR_GESELLSCHAFTER), false);
});

Deno.test("DER KERNFALL: status invited zaehlt nicht", async () => {
  // Die Rolle stammt bei Selbstregistrierung aus clientseitigen Metadaten.
  // Wer sich selbst 'system_admin' setzt, bleibt 'invited' -- und genau das
  // wertete die alte Pruefung nicht aus.
  const db = fakeDb({ role: "system_admin", status: "invited", deleted_at: null });
  assertEquals(await istBerechtigt(db, NUR_GESELLSCHAFTER), false);
});

Deno.test("geloeschtes Konto zaehlt nicht", async () => {
  const db = fakeDb({ role: "shareholder", status: "active", deleted_at: "2026-01-01T00:00:00Z" });
  assertEquals(await istBerechtigt(db, NUR_GESELLSCHAFTER), false);
});

Deno.test("deaktiviertes Konto zaehlt nicht", async () => {
  const db = fakeDb({ role: "shareholder", status: "disabled", deleted_at: null });
  assertEquals(await istBerechtigt(db, NUR_GESELLSCHAFTER), false);
});

Deno.test("kein Profil, keine Berechtigung", async () => {
  assertEquals(await istBerechtigt(fakeDb(null), NUR_GESELLSCHAFTER), false);
});

Deno.test("ein Fehler wirkt nie wie ein Erfolg", async () => {
  assertEquals(await istBerechtigt(wirftDb(), NUR_GESELLSCHAFTER), false);
});

Deno.test("employee zaehlt nur, wenn er ausdruecklich zugelassen ist", async () => {
  const zeile = { role: "employee", status: "active", deleted_at: null };
  assertEquals(await istBerechtigt(fakeDb(zeile), NUR_GESELLSCHAFTER), false);
  assertEquals(await istBerechtigt(fakeDb(zeile), INTERNE_ROLLEN), true);
});

Deno.test("mit uid wird auf die Kennung eingegrenzt", async () => {
  const p: string[] = [];
  const db = fakeDb({ role: "system_admin", status: "active", deleted_at: null }, p);
  await istBerechtigt(db, NUR_GESELLSCHAFTER, "u-1");
  assertEquals(p.includes("eq:id=u-1"), true);
  assertEquals(p[0], "from:profiles");
});

Deno.test("ohne uid keine Eingrenzung (RLS des Aufrufers greift)", async () => {
  const p: string[] = [];
  const db = fakeDb({ role: "system_admin", status: "active", deleted_at: null }, p);
  await istBerechtigt(db, NUR_GESELLSCHAFTER);
  assertEquals(p.some((x) => x.startsWith("eq:")), false);
});

Deno.test("es werden alle drei Felder gelesen, nicht nur die Rolle", async () => {
  const p: string[] = [];
  await istBerechtigt(fakeDb({ role: "system_admin", status: "active", deleted_at: null }, p));
  assertEquals(p.includes("select:role, status, deleted_at"), true);
});
