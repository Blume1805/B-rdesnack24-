import 'package:flutter/material.dart';

/// Die Gliederung des Verwaltungsbereichs als Daten, nicht als Layout.
///
/// Anlass (25.08.2026): Der Verwaltungsbereich zeigte 17 gleichrangige
/// Kacheln in einem Raster. Wer eine bestimmte Funktion suchte, musste die
/// ganze Wand lesen, und zwei Kacheln hiessen beide „Inventur". Der
/// Auftraggeber hat fünf Oberbegriffe vorgegeben; sie stehen hier, damit
/// Reihenfolge und Zuordnung an genau einer Stelle geändert werden können.
///
/// Warum Daten statt Widgets: Die Zuordnung ist eine fachliche Aussage
/// („Geldentnahme ist ein Protokoll"), keine gestalterische. Sie gehört
/// nicht in eine `build`-Methode, wo sie beim nächsten Umbau des Layouts
/// mitwandert.
enum Oberbegriff { steuern, serviceanliegen, vorgaenge, dokumente, protokolle }

/// Ein Oberbegriff mit Beschriftung und Symbol.
class OberbegriffDaten {
  const OberbegriffDaten({
    required this.id,
    required this.titel,
    required this.beschreibung,
    required this.icon,
  });

  final Oberbegriff id;
  final String titel;

  /// Eine Zeile, die auch im zugeklappten Zustand sagt, was drin ist.
  ///
  /// Ohne sie wäre eine zugeklappte Liste aus fünf Wörtern ein Rätsel: Der
  /// Bildschirm soll übersichtlich sein, nicht leer.
  final String beschreibung;

  final IconData icon;
}

/// Reihenfolge der Oberbegriffe auf dem Bildschirm.
///
/// Nicht alphabetisch, sondern nach Häufigkeit im Alltag: Protokolle werden
/// täglich geführt, Steuern und Dokumente selten geöffnet.
const List<OberbegriffDaten> oberbegriffe = [
  OberbegriffDaten(
    id: Oberbegriff.protokolle,
    titel: 'Protokolle',
    beschreibung: 'Nachweise aus dem laufenden Betrieb',
    icon: Icons.fact_check_outlined,
  ),
  OberbegriffDaten(
    id: Oberbegriff.vorgaenge,
    titel: 'Vorgänge & Prozesse',
    beschreibung: 'Freigaben, Unterschriften, Team und Technik',
    icon: Icons.account_tree_outlined,
  ),
  OberbegriffDaten(
    id: Oberbegriff.serviceanliegen,
    titel: 'Serviceanliegen',
    beschreibung: 'Meldungen von Kundinnen und Kunden',
    icon: Icons.support_agent_outlined,
  ),
  OberbegriffDaten(
    id: Oberbegriff.dokumente,
    titel: 'Dokumente',
    beschreibung: 'Verträge, Bescheide und Nachweise im Archiv',
    icon: Icons.folder_outlined,
  ),
  OberbegriffDaten(
    id: Oberbegriff.steuern,
    titel: 'Steuern',
    beschreibung: 'Auswertungen und Exporte für Buchhaltung und Finanzamt',
    icon: Icons.calculate_outlined,
  ),
];

/// Eine einzelne Funktion unter einem Oberbegriff.
class Verwaltungsfunktion {
  const Verwaltungsfunktion({
    required this.gruppe,
    required this.label,
    required this.beschreibung,
    required this.icon,
    required this.ziel,
    required this.sichtbar,
    required this.ablageOrdner,
    this.iconColor,
    this.iconBackgroundColor,
    this.iconBorderColor,
    this.badge,
  });

  final Oberbegriff gruppe;
  final String label;
  final String beschreibung;
  final IconData icon;

  /// Erst beim Antippen gebaut. Vorher hielt der Bildschirm 17 fertige
  /// Widgets im Speicher, von denen höchstens eines gebraucht wurde.
  final Widget Function() ziel;

  /// Berechtigungsprüfung. Die Kachel verschwindet ohne Recht; die
  /// eigentliche Absicherung bleibt serverseitig (RLS und RPC).
  final bool Function(Set<String> rechte) sichtbar;

  /// In welchen Ordner des Dokumentenarchivs ein Anhang aus dieser Kachel
  /// gelegt wird. `null` bedeutet: Diese Kachel nimmt keine Anhänge.
  final String? ablageOrdner;

  final Color? iconColor;
  final Color? iconBackgroundColor;
  final Color? iconBorderColor;
  final Widget? badge;
}
