import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { normalizeSale, verifySignature } from "./parse.ts";

Deno.test("normalizeSale: Einzelverkauf", () => {
  const r = normalizeSale({
    transactionId: "TX1",
    terminalId: "T-100",
    productCode: "SKU-9",
    quantity: 2,
    amount: 3.5,
    soldAt: "2026-06-20T10:00:00Z",
  });
  assertEquals(r.length, 1);
  assertEquals(r[0].source_ref, "TX1");
  assertEquals(r[0].product_ref, "SKU-9");
  assertEquals(r[0].quantity, 2);
});

Deno.test("normalizeSale: Transaktion mit mehreren Positionen", () => {
  const r = normalizeSale({
    transactionId: "TX2",
    terminalId: "T-100",
    items: [
      { productCode: "A", quantity: 1 },
      { productCode: "B", quantity: 3 },
    ],
  });
  assertEquals(r.length, 2);
  assertEquals(r[0].source_ref, "TX2:0");
  assertEquals(r[1].source_ref, "TX2:1");
  assertEquals(r[1].quantity, 3);
});

Deno.test("normalizeSale: ohne Terminal/Transaktion => leer", () => {
  assertEquals(normalizeSale({ quantity: 1 }).length, 0);
});

Deno.test("verifySignature: korrekte HMAC wird akzeptiert", async () => {
  const secret = "geheim";
  const body = '{"a":1}';
  // Referenz-HMAC mit gleichem Verfahren erzeugen.
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
  const hex = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0")).join("");

  assertEquals(await verifySignature(secret, body, hex), true);
  assertEquals(await verifySignature(secret, body, "deadbeef"), false);
});
