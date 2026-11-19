import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { seitenAufteilen } from "./seiten.ts";

const o = { platzErste: 100, platzFolge: 150, schluss: 40 };

Deno.test("Alles passt: eine Seite, Schluss darunter", () => {
  assertEquals(seitenAufteilen([10, 10, 10], o).seiten, [[0, 1, 2]]);
});

Deno.test("Keine Zeilen: eine leere Seite mit Schluss", () => {
  assertEquals(seitenAufteilen([], o).seiten, [[]]);
});

Deno.test("Zeilen füllen Folgeseiten bis zum Fuß, kein Platz für Unterschriften auf Zwischenseiten", () => {
  // 10 + 15 Zeilen à 10: Seite 1 fasst 10, Seite 2 fasst 15; Schluss passt nicht
  // mehr auf Seite 2 -> letzte 3 Zeilen gehen mit auf Seite 3.
  const h = Array(25).fill(10);
  const s = seitenAufteilen(h, o).seiten;
  assertEquals(s.length, 3);
  assertEquals(s[0].length, 10);
  assertEquals(s[1].length, 12);
  assertEquals(s[2], [22, 23, 24]);
});

Deno.test("Schluss steht nie allein: auch bei knapp voller letzter Seite kommen Zeilen mit", () => {
  const h = Array(9).fill(10); // 90 von 100 belegt, Schluss braucht 40
  const s = seitenAufteilen(h, o).seiten;
  assertEquals(s, [[0, 1, 2, 3, 4, 5], [6, 7, 8]]);
});

Deno.test("Hohe letzte Zeilen: nur so viele wandern mit, wie mit dem Schluss auf eine Seite passen", () => {
  // Seite 2: 2 Zeilen à 70 = 140 von 150, Schluss (40) passt nicht. Beide
  // Zeilen plus Schluss (180) passen auf keine Folgeseite, also wandert eine.
  const s = seitenAufteilen([...Array(10).fill(10), 70, 70], o).seiten;
  assertEquals(s, [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10], [11]]);
});

Deno.test("Seite 1 bleibt nie leer", () => {
  const s = seitenAufteilen([95], o).seiten; // einzige Zeile fast seitenhoch
  assertEquals(s, [[0], []]);
});

Deno.test("Reihenfolge bleibt erhalten, keine Zeile geht verloren oder doppelt", () => {
  const h = Array.from({ length: 57 }, (_, i) => 8 + (i % 4) * 6);
  const s = seitenAufteilen(h, { platzErste: 120, platzFolge: 180, schluss: 60 }).seiten;
  assertEquals(s.flat(), h.map((_, i) => i));
});

Deno.test("Letzte Seite hat mindestens drei Zeilen vor dem Schluss", () => {
  // 11 Zeilen: Seite 1 fasst 10, die 11. stünde allein vor dem Schluss.
  const s = seitenAufteilen(Array(11).fill(10), o).seiten;
  assertEquals(s, [[0, 1, 2, 3, 4, 5, 6, 7], [8, 9, 10]]);
});
