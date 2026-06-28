import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { mapToAccount, parseVoucher } from "./mapping.ts";

Deno.test("mapToAccount: SKR-03-Zuordnung nach Richtung/USt", () => {
  assertEquals(mapToAccount("revenue", 7), "8300");
  assertEquals(mapToAccount("revenue", 19), "8400");
  assertEquals(mapToAccount("expense", 7), "3300");
  assertEquals(mapToAccount("expense", 19), "3400");
});

Deno.test("parseVoucher: Einnahme korrekt normalisiert", () => {
  const r = parseVoucher({
    id: "123",
    creditDebit: "C",
    voucherDate: "2026-06-15T00:00:00.000Z",
    sumNet: 100,
    sumTax: 7,
    taxRate: 7,
    description: "Verkauf",
  });
  assertEquals(r?.direction, "revenue");
  assertEquals(r?.booking_date, "2026-06-15");
  assertEquals(r?.tax_rate, 7);
  assertEquals(r?.amount_net, 100);
});

Deno.test("parseVoucher: ohne id => null", () => {
  assertEquals(parseVoucher({ creditDebit: "D" }), null);
});

Deno.test("parseVoucher: Ausgabe und USt aus Beträgen abgeleitet", () => {
  const r = parseVoucher({
    id: "9",
    creditDebit: "D",
    voucherDate: "2026-01-02",
    sumNet: 100,
    sumTax: 19,
  });
  assertEquals(r?.direction, "expense");
  assertEquals(r?.tax_rate, 19);
});
