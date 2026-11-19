/// Gemeinsame Druckregeln für alle Belege, die die App als HTML druckt
/// (PKW-Anlage, FIFO-Inventur, Rechnung). Befund 19.11.2026: Die PKW-Anlage
/// brach so um, dass auf Seite 2 nur noch die Summenzeile und die
/// Unterschriften standen, und eine Überschrift blieb allein am Fuß von
/// Seite 1 stehen.
///
/// Gedruckt wird überwiegend aus Safari auf dem iPhone (WebKit). WebKit
/// beachtet `break-after: avoid` nicht zuverlässig, `break-inside: avoid`
/// dagegen schon. Deshalb arbeiten die Regeln mit unteilbaren Blöcken:
///
/// * `.abschnitt`: Überschrift mit ihrem Inhalt (kurze Tabelle, Absatz).
///   Wird nie getrennt; passt er nicht mehr, beginnt er auf der nächsten
///   Seite.
/// * `.abschnitt.lang`: Inhalt darf umbrechen (lange Tabellen). Die
///   Überschrift reserviert dann über ein unsichtbares Anhängsel Platz für
///   mindestens die ersten Zeilen, damit sie nie allein am Seitenfuß steht.
///   Mehrere Überschriften hintereinander gehören in EINE `.kopf`-Gruppe,
///   sonst hält jede nur ihren eigenen Platz frei.
/// * `.schluss`: Ergebnis, Hinweise und Unterschriften bleiben zusammen.
/// * Tabellenzeilen, Bilder und Unterschriftsfelder werden nie geteilt;
///   Tabellenköpfe wiederholen sich auf Folgeseiten.
const String druckUmbruchCss = '''
  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  p, li { orphans: 3; widows: 3; }
  h1, h2, h3 { page-break-after: avoid; break-after: avoid-page;
               page-break-inside: avoid; break-inside: avoid; }
  thead { display: table-header-group; }
  tfoot { display: table-footer-group; }
  tr, img, .feld, .sig-slot, .kpis, section.stamp, .kopf {
    page-break-inside: avoid; break-inside: avoid; }
  .abschnitt, .schluss { page-break-inside: avoid; break-inside: avoid; }
  .abschnitt.lang { page-break-inside: auto; break-inside: auto; }
  /* Platzhalter unter der Überschrift eines langen Abschnitts: Die
     Überschrift ist unteilbar, also muss das Anhängsel mit auf ihre Seite.
     Fehlen am Seitenfuß 22 mm, wandert sie mit auf die nächste Seite. Der
     negative Rand nimmt den Platz im Fluss sofort wieder zurück. */
  .abschnitt.lang > h2::after, .abschnitt.lang > h3::after,
  .abschnitt.lang > .kopf::after {
    content: ""; display: block; height: 22mm; margin-bottom: -22mm; }
''';

/// Escapt Text für HTML (Inhalt und Attributwerte).
String htmlEsc(Object? v) => '${v ?? ''}'
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
