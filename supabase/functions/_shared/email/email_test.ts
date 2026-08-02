import {
  assert,
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { escapeHtml, remainingPlaceholders, render, renderText } from "./render.ts";
import { button, page } from "./components.ts";
import { subscriptionCancelConfirmation } from "./templates/subscription_cancel.ts";
import { subscriptionChooseConfirmation } from "./templates/subscription_choose.ts";

Deno.test("escapeHtml maskiert die fünf HTML-Sonderzeichen", () => {
  assertEquals(
    escapeHtml(`<a href="x">&'</a>`),
    "&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;",
  );
  assertEquals(escapeHtml(null), "");
  assertEquals(escapeHtml(undefined), "");
});

Deno.test("render: {{}} escaped, {{{}}} roh", () => {
  const vars = { evil: "<script>", safe: "<b>ok</b>" };
  assertEquals(render("{{evil}}", vars), "&lt;script&gt;");
  assertEquals(render("{{{safe}}}", vars), "<b>ok</b>");
});

Deno.test("render: roh eingesetztes Fragment wird nicht erneut ersetzt", () => {
  // Ein Fragment, das selbst wie ein Platzhalter aussieht, darf in einem
  // einzigen Durchlauf nicht nochmal aufgelöst werden.
  const out = render("{{{frag}}}", { frag: "{{evil}}", evil: "GELEAKT" });
  assertEquals(out, "{{evil}}");
});

Deno.test("render: fehlender Wert bleibt leer statt zu werfen", () => {
  assertEquals(render("A{{fehlt}}B", {}), "AB");
});

Deno.test("renderText escaped nicht", () => {
  assertEquals(renderText("{{v}}", { v: "a&b" }), "a&b");
});

Deno.test("button hält 44 px Mindesthöhe ein (WCAG 2.5.5)", () => {
  const html = button({ href: "https://example.org", label: "Los" });
  const padding = Number(html.match(/padding:(\d+)px/)![1]);
  const lineHeight = Number(html.match(/line-height:(\d+)px/)![1]);
  assert(
    padding * 2 + lineHeight >= 44,
    `Buttonhöhe ${padding * 2 + lineHeight}px < 44px`,
  );
});

Deno.test("page: Grundgerüst für Outlook und Dark Mode", () => {
  const html = page({ title: "T", preheader: "P", content: "<p>Inhalt</p>" });
  assertStringIncludes(html, '<meta charset="utf-8">');
  assertStringIncludes(html, 'name="color-scheme"');
  assertStringIncludes(html, "prefers-color-scheme: dark");
  // Tabellenlayout statt divs — sonst läuft die Karte im Outlook-Desktop
  // über die volle Fensterbreite.
  assertStringIncludes(html, 'role="presentation"');
  assertStringIncludes(html, "<p>Inhalt</p>");
  // Pflichtangaben und zentrale Links.
  assertStringIncludes(html, "Bördesnack24 GbR");
  assertStringIncludes(html, "USt-IdNr.");
  assertStringIncludes(html, "Impressum");
  assertStringIncludes(html, "Datenschutz");
});

Deno.test("Kündigungsbestätigung: Pflichtinhalte nach § 312k BGB", () => {
  const mail = subscriptionCancelConfirmation({
    email: "kunde@example.org",
    kind: "ordentlich",
    cancelAt: "zum nächstmöglichen Zeitpunkt",
    receivedAt: "01.08.2026, 12:30",
  });

  assertEquals(
    mail.subject,
    "Bördesnack24: Bestätigung des Zugangs Ihrer Kündigung",
  );
  for (const needle of [
    "Bestätigung des Zugangs Ihrer Kündigung",
    "§ 312k Abs. 2 BGB",
    "01.08.2026, 12:30",
    "Ordentliche Kündigung",
    "zum nächstmöglichen Zeitpunkt",
    "kunde@example.org",
    "als Nachweis auf",
  ]) {
    assertStringIncludes(mail.html, needle);
    assertStringIncludes(mail.text, needle);
  }
  assertEquals(remainingPlaceholders(mail.html), []);
  assertEquals(remainingPlaceholders(mail.text), []);
});

Deno.test("Kündigungsbestätigung: außerordentlich wird als solche benannt", () => {
  const mail = subscriptionCancelConfirmation({
    email: "a@b.de",
    kind: "ausserordentlich",
    cancelAt: "sofort",
    receivedAt: "01.08.2026, 09:00",
  });
  assertStringIncludes(mail.html, "Außerordentliche Kündigung");
  assertStringIncludes(mail.text, "Außerordentliche Kündigung");
});

Deno.test("Kündigungsbestätigung: E-Mail-Adresse kann kein HTML einschleusen", () => {
  // EMAIL_RE in subscription-cancel lässt `<`/`>` durch (weder Leerzeichen
  // noch @), die alte Inline-Fassung hat den Wert ungeprüft interpoliert.
  const mail = subscriptionCancelConfirmation({
    email: "a<svg/onload=alert(1)>@b.de",
    kind: "ordentlich",
    cancelAt: "x",
    receivedAt: "y",
  });
  assert(!mail.html.includes("<svg"), "rohes <svg> im HTML gelandet");
  assertStringIncludes(mail.html, "&lt;svg/onload=alert(1)&gt;");
});

Deno.test("Abo-Bestätigung: Neuwahl", () => {
  const mail = subscriptionChooseConfirmation({
    firstName: "Erika",
    planName: "Jahres-Abo",
    billingLabel: "9,99 EUR / Jahr",
    previousPlanName: null,
    lifetime: false,
  });
  assertEquals(mail.subject, "Bördesnack24: Dein Jahres-Abo ist aktiv");
  assertStringIncludes(mail.html, "Abo-Auswahl bestätigt");
  assertStringIncludes(mail.html, "Hallo Erika,");
  assertStringIncludes(mail.html, "9,99 EUR / Jahr");
  assertStringIncludes(mail.html, "§§ 106 ff. BGB");
  assertEquals(remainingPlaceholders(mail.html), []);
  assertEquals(remainingPlaceholders(mail.text), []);
});

Deno.test("Abo-Bestätigung: Wechsel nennt beide Modelle", () => {
  const mail = subscriptionChooseConfirmation({
    firstName: "Max",
    planName: "Jahres-Abo",
    billingLabel: "9,99 EUR / Jahr",
    previousPlanName: "Monats-Abo",
    lifetime: false,
  });
  assertEquals(mail.subject, "Bördesnack24: Wechsel zum Jahres-Abo bestätigt");
  assertStringIncludes(mail.html, "Abo-Wechsel bestätigt");
  assertStringIncludes(mail.html, "Monats-Abo");
  assertStringIncludes(mail.text, "Monats-Abo");
});

Deno.test("Abo-Bestätigung: Lifetime nennt § 356 Abs. 5 BGB", () => {
  const mail = subscriptionChooseConfirmation({
    firstName: "Max",
    planName: "Lifetime-Abo (Founders Edition)",
    billingLabel: "79,99 EUR einmalig",
    previousPlanName: null,
    lifetime: true,
  });
  assertStringIncludes(mail.html, "§ 356 Abs. 5 BGB");
  assertStringIncludes(mail.text, "§ 356 Abs. 5 BGB");
  assertStringIncludes(mail.html, "Founders Edition");
});

Deno.test("Abo-Bestätigung: Vorname kann kein HTML einschleusen", () => {
  const mail = subscriptionChooseConfirmation({
    firstName: "<img src=x onerror=alert(1)>",
    planName: "Monats-Abo",
    billingLabel: "0,99 EUR / Monat",
    previousPlanName: null,
    lifetime: false,
  });
  assert(!mail.html.includes("<img src=x"), "rohes <img> im HTML gelandet");
  assertStringIncludes(mail.html, "&lt;img src=x");
});
