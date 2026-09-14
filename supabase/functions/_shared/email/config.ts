// Zentrale Konfiguration für alle E-Mails: Absender, Firmendaten, Links.
//
// Jede Mail zieht Impressum/Datenschutz/Kontakt aus dieser Datei — kein
// Template hält eigene URLs. Ändert sich die Domain, reicht hier eine Zeile.

/// Basis der Web-App. Die App läuft mit Hash-Routing, Rechtsseiten hängen
/// deshalb hinter `#`. Gleiche Basis wie der Empfehlungslink in
/// `apps/mobile/lib/features/customer/domain/entities/referral.dart`.
const APP_BASE = Deno.env.get("APP_PUBLIC_URL") ??
  "https://blume1805.github.io/B-rdesnack24-/";

function appLink(route: string): string {
  return `${APP_BASE}#${route}`;
}

export const mailConfig = {
  appName: "Bördesnack24",

  /// Absender. Überschreibbar über EMAIL_FROM — identisch zu dem Wert, den
  /// die Functions bisher einzeln gelesen haben.
  from: Deno.env.get("EMAIL_FROM") ??
    "Bördesnack24 <noreply@boerdesnack24.de>",

  supportEmail: "boerdesnack24@gmail.com",

  /// Pflichtangaben für den Footer (§ 5 TMG / § 5 DDG).
  company: {
    legalName: "Bördesnack24 GbR",
    street: "Sülldorfer Str. 3A",
    city: "39171 Sülzetal OT Osterweddingen",
    taxNumber: "102/178/01635",
    vatId: "DE 458804058",
  },

  links: {
    app: APP_BASE,
    imprint: appLink("/legal/imprint"),
    privacy: appLink("/legal/privacy"),
    terms: appLink("/legal/terms"),
    cancellation: appLink("/legal/kuendigung"),
  },

  /// Social-Profile. Bewusst leer: es gibt derzeit keine offiziellen
  /// Kanäle. Sobald welche existieren, hier eintragen — der Footer blendet
  /// die Zeile automatisch ein.
  social: [] as ReadonlyArray<{ label: string; href: string }>,
} as const;
