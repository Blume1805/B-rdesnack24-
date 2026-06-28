// Reine, testbare Hilfen für den Nayax-Webhook (ohne Seiteneffekte).

export interface NormalizedSale {
  source_ref: string;
  terminal_id: string;
  product_ref: string | null;
  quantity: number;
  amount_gross: number | null;
  sold_at: string;
}

/**
 * Normalisiert ein Nayax-Verkaufsereignis. Akzeptiert sowohl Einzelverkäufe als
 * auch Transaktionen mit mehreren Positionen. Feldnamen sind defensiv gewählt
 * und ggf. an das reale Nayax-Format anzupassen (siehe docs/MANAGEMENT.md).
 */
export function normalizeSale(payload: Record<string, unknown>): NormalizedSale[] {
  const txId = String(
    payload.transactionId ?? payload.TransactionId ?? payload.id ?? "",
  );
  const terminal = String(
    payload.terminalId ?? payload.TerminalId ?? payload.machineId ?? "",
  );
  const soldAt = String(
    payload.soldAt ?? payload.TransactionDateTime ?? payload.date ??
      new Date().toISOString(),
  );
  if (!txId || !terminal) return [];

  const items = (payload.items ?? payload.Products ?? payload.products) as
    | Array<Record<string, unknown>>
    | undefined;

  if (Array.isArray(items) && items.length > 0) {
    return items.map((it, idx) => ({
      source_ref: `${txId}:${idx}`,
      terminal_id: terminal,
      product_ref: it.productCode != null
        ? String(it.productCode)
        : it.ProductCode != null
        ? String(it.ProductCode)
        : null,
      quantity: Number(it.quantity ?? it.Quantity ?? 1),
      amount_gross: it.amount != null ? Number(it.amount) : null,
      sold_at: soldAt,
    }));
  }

  // Einzelverkauf
  return [{
    source_ref: txId,
    terminal_id: terminal,
    product_ref: payload.productCode != null ? String(payload.productCode) : null,
    quantity: Number(payload.quantity ?? 1),
    amount_gross: payload.amount != null ? Number(payload.amount) : null,
    sold_at: soldAt,
  }];
}

/** Verifiziert eine HMAC-SHA256-Signatur (hex) über dem Rohbody. */
export async function verifySignature(
  secret: string,
  rawBody: string,
  signatureHex: string,
): Promise<boolean> {
  if (!signatureHex) return false;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(rawBody),
  );
  const computed = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  // Längenkonstanter Vergleich.
  if (computed.length !== signatureHex.length) return false;
  let diff = 0;
  for (let i = 0; i < computed.length; i++) {
    diff |= computed.charCodeAt(i) ^ signatureHex.charCodeAt(i);
  }
  return diff === 0;
}
