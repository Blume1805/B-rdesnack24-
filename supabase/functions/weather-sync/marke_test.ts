import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { markeAusKopf, MARKEN_KOPF } from './marke.ts';

const kopf = (w?: string) => {
  const h = new Headers();
  if (w !== undefined) h.set(MARKEN_KOPF, w);
  return h;
};

Deno.test('ohne Kopf: keine Marke', () => {
  assertEquals(markeAusKopf(kopf()), null);
});

Deno.test('leerer Kopf: keine Marke', () => {
  assertEquals(markeAusKopf(kopf('')), null);
});

Deno.test('kein UUID-Format: keine Marke', () => {
  assertEquals(markeAusKopf(kopf("1' or '1'='1")), null);
  assertEquals(markeAusKopf(kopf('123e4567-e89b-12d3-a456-42661417400')), null);
});

Deno.test('gültiges Format wird klein geschrieben weitergegeben', () => {
  assertEquals(
    markeAusKopf(kopf(' 123E4567-E89B-12D3-A456-426614174000 ')),
    '123e4567-e89b-12d3-a456-426614174000',
  );
});
