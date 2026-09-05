// ============================================================================
// Gemeinsame Berechtigungsprüfung für Edge Functions
// ----------------------------------------------------------------------------
// WARUM ES DIESE DATEI GIBT — die Fassung ist wichtiger als der Code.
//
// Sechs Functions prüften den Aufrufer so:
//
//     const { data: prof } = await admin.from("profiles")
//       .select("role").eq("id", uid).maybeSingle();
//     if (role !== "system_admin" && role !== "shareholder") → 403
//
// Das reicht nicht. `profiles.role` stammt bei der Selbstregistrierung aus
// clientseitigen Metadaten; was davor schützt, ist allein `status = 'invited'`
// (Migration 0079): Eine selbst gesetzte Rolle bleibt wirkungslos, solange das
// Konto nicht freigeschaltet ist. Eine Prüfung, die nur die Rolle liest, hält
// genau diesen Schutz nicht — und lässt zusätzlich gelöschte und deaktivierte
// Konten durch.
//
// In PRODUKTION war das am 03.08.2026 bei zwei Functions nachgezogen worden
// (`signature-retouch`, `docusign-fetch-signature` tragen die strengere
// Prüfung samt Kommentar). Im Repository nicht. Der Gesamtaudit vom 05.09.2026
// hat den Unterschied gefunden — und damit auch, dass ein „Neu-Ausrollen aus
// dem Repository" die Härtung wieder entfernt hätte.
//
// Deshalb steht die Regel jetzt an genau einer Stelle.
// ============================================================================

/** Rollen, die als intern gelten. Kunden sind hier bewusst nicht dabei. */
export const INTERNE_ROLLEN = ["system_admin", "shareholder", "employee"] as const;

/** Die übliche Engführung: nur Geschäftsführung. */
export const NUR_GESELLSCHAFTER = ["system_admin", "shareholder"] as const;

interface ProfilZeile {
  role?: string | null;
  status?: string | null;
  deleted_at?: string | null;
}

/** Minimal-Schnittstelle, damit sowohl der Aufrufer-Client (RLS greift) als
 *  auch der Service-Client übergeben werden können. */
interface Abfragbar {
  // deno-lint-ignore no-explicit-any
  from(tabelle: string): any;
}

/**
 * Ist der Aufrufer berechtigt?
 *
 * @param db      Supabase-Client. Mit dem Aufrufer-Client greift zusätzlich
 *                RLS; mit dem Service-Client muss [uid] gesetzt sein.
 * @param erlaubt Zugelassene Rollen.
 * @param uid     Kennung des Aufrufers. Weglassen, wenn der übergebene Client
 *                per RLS ohnehin nur die eigene Zeile liefert.
 *
 * Gibt `false` zurück, wenn irgendetwas nicht stimmt — kein Profil, gelöscht,
 * nicht aktiv, falsche Rolle. Ein Fehler darf hier nie wie ein Erfolg wirken.
 */
export async function istBerechtigt(
  db: Abfragbar,
  erlaubt: readonly string[] = NUR_GESELLSCHAFTER,
  uid?: string | null,
): Promise<boolean> {
  try {
    let abfrage = db.from("profiles").select("role, status, deleted_at");
    if (uid) abfrage = abfrage.eq("id", uid);
    const { data } = await abfrage.maybeSingle();
    const p = data as ProfilZeile | null;
    if (!p) return false;
    if (p.deleted_at != null) return false;
    if (p.status !== "active") return false;
    return erlaubt.includes(p.role ?? "");
  } catch {
    return false;
  }
}
