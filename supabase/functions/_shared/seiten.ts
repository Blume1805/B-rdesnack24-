// Seitenaufteilung für PDFs aus Tabellenzeilen mit Schlussblock
// (Unterschriften o. ä.). Befund 19.11.2026: In den Belegen stand der
// Unterschriftenblock allein auf der letzten Seite, und jede Seite hielt
// unten Platz für Unterschriften frei, auch wo keine standen.
//
// Regeln:
//  * Zeilen füllen jede Seite bis zum normalen Fußrand.
//  * Der Schlussblock steht auf der letzten Seite unter den Zeilen.
//  * Passt er dort nicht mehr hin, beginnt eine neue Seite mit den letzten
//    `mitnehmen` Zeilen (Standard 3) und dem Schluss, nie mit dem Schluss
//    allein. Ausnahme: Seite 1 behält mindestens eine Zeile.
//  * Bei mehreren Seiten stehen auf der letzten mindestens `mitnehmen`
//    Zeilen vor dem Schluss.

export interface Aufteilung {
  /** Zeilenindizes je Seite, in Reihenfolge. */
  seiten: number[][];
}

export function seitenAufteilen(
  hoehen: number[],
  o: { platzErste: number; platzFolge: number; schluss: number; mitnehmen?: number },
): Aufteilung {
  const mitnehmen = o.mitnehmen ?? 3;
  const seiten: number[][] = [[]];
  let rest = o.platzErste;
  hoehen.forEach((h, i) => {
    if (h > rest && seiten[seiten.length - 1].length > 0) {
      seiten.push([]);
      rest = o.platzFolge;
    }
    seiten[seiten.length - 1].push(i);
    rest -= h;
  });
  if (rest >= o.schluss) return { seiten: auffuellen(seiten, hoehen, o.platzFolge, o.schluss, mitnehmen) };

  // Schluss passt nicht: neue Seite mit den letzten Zeilen.
  // Seite 1 behält immer mindestens eine Zeile: Eine Seite nur mit dem Kopf
  // wäre schlimmer als ein Schluss allein (nur bei einzelnen, fast
  // seitenhohen Zeilen denkbar).
  let k = Math.min(mitnehmen, seiten.length === 1 ? hoehen.length - 1 : hoehen.length);
  const summe = (n: number) => hoehen.slice(hoehen.length - n).reduce((a, b) => a + b, 0);
  while (k > 0 && summe(k) + o.schluss > o.platzFolge) k--;
  const neu: number[] = [];
  for (let j = 0; j < k; j++) {
    const letzte = seiten[seiten.length - 1];
    neu.unshift(letzte.pop()!);
    if (letzte.length === 0 && seiten.length > 1) seiten.pop();
  }
  seiten.push(neu);
  return { seiten: auffuellen(seiten, hoehen, o.platzFolge, o.schluss, mitnehmen) };
}

/** Bei mehreren Seiten stehen auf der letzten mindestens `mitnehmen` Zeilen
 *  vor dem Schluss (vorher konnte dort eine einzige Zeile stehen). Gezogen
 *  wird von der vorletzten Seite, solange alles mit dem Schluss passt und
 *  die vorletzte Seite mindestens eine Zeile behält. */
function auffuellen(seiten: number[][], hoehen: number[], platzFolge: number, schluss: number, mitnehmen: number): number[][] {
  if (seiten.length < 2) return seiten;
  const letzte = seiten[seiten.length - 1];
  const vorletzte = seiten[seiten.length - 2];
  const hoehe = (z: number[]) => z.reduce((a, i) => a + hoehen[i], 0);
  while (letzte.length < mitnehmen && vorletzte.length > 1 &&
         hoehe(letzte) + hoehen[vorletzte[vorletzte.length - 1]] + schluss <= platzFolge) {
    letzte.unshift(vorletzte.pop()!);
  }
  return seiten;
}
