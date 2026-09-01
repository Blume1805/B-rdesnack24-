import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Gemeinsame Bausteine der Verwaltungsmodule.
///
/// Sie halten die vier Zustände auseinander, die eine Verwaltungsliste
/// haben kann, und geben jedem eine eigene Darstellung:
///
/// * **lädt** — ruhiger Ladezustand
/// * **Fehler** — Wortlaut der Datenbank, aber ohne Fehlercode im Klartext
/// * **leer** — ehrlicher Leerzustand statt erfundener Beispieldaten
/// * **Daten** — die Liste
///
/// Der Leerzustand ist hier wichtiger als üblich: Werbenetzwerk, Anfragen
/// und Firmenkunden sind vollständig gebaut, aber noch nicht in Betrieb
/// (0 Zeilen, Stand 01.09.2026). Eine Oberfläche, die das verschweigt oder
/// mit Platzhaltern füllt, würde einen Betrieb vortäuschen, den es nicht
/// gibt.

/// Deutet einen Datenbankfehler für Menschen.
///
/// `42501` heißt fehlende Berechtigung, `P0002` „nicht gefunden". Beides
/// sind reguläre Zustände und keine Störungen. Der Code selbst erscheint
/// nie im sichtbaren Text.
String adminErrorText(Object error) {
  final s = error.toString();
  if (s.contains('42501')) {
    return 'Dafür fehlt Ihrem Zugang die Berechtigung. Diese Ansicht ist '
        'Gesellschaftern und der Systemverwaltung vorbehalten.';
  }
  if (s.contains('P0002')) {
    return 'Dazu liegen keine Daten vor.';
  }
  if (s.contains('PGRST202')) {
    return 'Die Datenbank kennt diesen Aufruf nicht. Das ist ein '
        'Programmierfehler und kein Bedienfehler — bitte melden.';
  }
  return 'Die Daten konnten gerade nicht geladen werden. '
      'Bitte versuchen Sie es in einem Moment erneut.';
}

/// Stellt eine Kennzahl dar, die die Datenbank bei kleinen Fallzahlen
/// unterdrückt.
///
/// Liegt ein Wert unter der Mindestzahl, liefert die Datenbank ihn NICHT und
/// setzt stattdessen ein `*_unter_mindestzahl`-Merkmal. Dann steht hier
/// „weniger als 30" — **niemals** die Zahl, **niemals** „0" und **niemals**
/// ein Schätzwert.
///
/// Warum das eine eigene, benannte Funktion ist und keine private Methode
/// im Bildschirm: Diese Regel ist der Unterschied zwischen einer zulässigen
/// und einer unzulässigen Auswertung. Sie gehört an eine Stelle, und sie
/// gehört geprüft.
///
/// `null` ohne Unterdrückung heißt „nicht erhoben" und wird auch so genannt.
/// Eine 0 daraus zu machen wäre eine Behauptung.
String unterdrueckteKennzahl(
  Object? wert,
  bool unterdrueckt,
  int mindestzahl,
) {
  if (unterdrueckt) return 'weniger als $mindestzahl';
  if (wert == null) return 'keine Angabe';
  return wert.toString();
}

/// Grundgerüst eines Verwaltungsschirms mit Titel, Vorspann und
/// Aktualisieren-Geste.
class AdminScaffold extends StatelessWidget {
  const AdminScaffold({
    required this.title,
    required this.eyebrow,
    required this.headline,
    required this.intro,
    required this.child,
    required this.onRefresh,
    super.key,
  });

  final String title;
  final String eyebrow;
  final String headline;
  final String intro;
  final Widget child;
  final Future<void> Function() onRefresh;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: HeroAppBar(title: Text(title)),
      body: RefreshIndicator(
        color: AppColors.brand,
        onRefresh: onRefresh,
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.s4),
          children: [
            Eyebrow(eyebrow),
            const SizedBox(height: 2),
            Text(
              headline,
              style: AppTypography.display(
                size: 22,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              intro,
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            child,
          ],
        ),
      ),
    );
  }
}

/// Zustandsweiche für eine Liste.
class AdminAsyncList<T> extends StatelessWidget {
  const AdminAsyncList({
    required this.value,
    required this.emptyTitle,
    required this.emptyBody,
    required this.builder,
    super.key,
  });

  final AsyncValue<List<T>> value;
  final String emptyTitle;
  final String emptyBody;
  final Widget Function(List<T> items) builder;

  @override
  Widget build(BuildContext context) {
    return value.when(
      loading: () => const Padding(
        padding: EdgeInsets.symmetric(vertical: AppSpacing.s10),
        child: Center(child: CircularProgressIndicator(color: AppColors.brand)),
      ),
      error: (e, _) => AdminErrorCard(error: e),
      data: (items) => items.isEmpty
          ? AdminEmptyCard(title: emptyTitle, body: emptyBody)
          : builder(items),
    );
  }
}

class AdminErrorCard extends StatelessWidget {
  const AdminErrorCard({required this.error, super.key});
  final Object error;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: const Color(0xFFF7DBDB),
      borderColor: AppColors.statusCritical,
      child: Text(
        adminErrorText(error),
        style: AppTypography.body(size: 13, color: AppColors.ink),
      ),
    );
  }
}

/// Ehrlicher Leerzustand. Nennt, dass nichts da ist, und warum das in
/// Ordnung sein kann.
class AdminEmptyCard extends StatelessWidget {
  const AdminEmptyCard({required this.title, required this.body, super.key});
  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            body,
            style: AppTypography.body(size: 13, color: AppColors.textMuted),
          ),
        ],
      ),
    );
  }
}

/// Kleiner Zustands-Chip. Farbe folgt der Bedeutung, nie der Marke.
class AdminStatusChip extends StatelessWidget {
  const AdminStatusChip({required this.label, required this.tone, super.key});

  final String label;
  final AdminTone tone;

  Color get _color => switch (tone) {
        AdminTone.positive => AppColors.statusPositive,
        AdminTone.warning => AppColors.statusWarning,
        AdminTone.critical => AppColors.statusCritical,
        AdminTone.neutral => AppColors.textMuted,
      };

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: _color.withValues(alpha: 0.12),
        border: Border.all(color: _color, width: 0.8),
        borderRadius: BorderRadius.circular(AppRadii.pill),
      ),
      child: Text(
        label.toUpperCase(),
        style: AppTypography.body(
          size: 10,
          weight: FontWeight.w800,
          color: _color,
        ).copyWith(letterSpacing: 0.6),
      ),
    );
  }
}

enum AdminTone { positive, warning, critical, neutral }

/// Zeile aus Beschriftung und Wert, für Kennzahlen und Stammdaten.
class AdminValueRow extends StatelessWidget {
  const AdminValueRow({
    required this.label,
    required this.value,
    this.strong = false,
    super.key,
  });

  final String label;
  final String value;
  final bool strong;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s1),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Text(
              label,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          ),
          const SizedBox(width: AppSpacing.s3),
          Text(
            value,
            style: AppTypography.body(
              size: strong ? 15 : 12,
              weight: strong ? FontWeight.w800 : FontWeight.w700,
              color: AppColors.ink,
            ).copyWith(fontFeatures: const [FontFeature.tabularFigures()]),
          ),
        ],
      ),
    );
  }
}

/// Zeigt den Fehler einer schreibenden Aktion als Schnellhinweis.
void showAdminActionResult(
  BuildContext context,
  AsyncValue<void> state, {
  required String erfolg,
}) {
  if (!context.mounted) return;
  final messenger = ScaffoldMessenger.of(context);
  state.whenOrNull(
    data: (_) => messenger.showSnackBar(SnackBar(content: Text(erfolg))),
    error: (e, _) => messenger.showSnackBar(
      SnackBar(
        backgroundColor: AppColors.statusCritical,
        content: Text(adminErrorText(e)),
      ),
    ),
  );
}
