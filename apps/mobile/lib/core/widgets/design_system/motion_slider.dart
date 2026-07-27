import 'package:flutter/material.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';

/// Wischbares Karten-Karussell mit Fokus-Effekt.
///
/// Die mittlere Karte steht auf 100 %, die Nachbarn weichen zurück
/// (kleiner und blasser) — dadurch ist immer eindeutig, welche Karte
/// gemeint ist. Darunter Punkte, die die Position anzeigen.
///
/// Wird für die Status-Stufen (Bronze/Silber/Gold) und die Abo-Modelle
/// verwendet: beides sind vergleichbare Alternativen, die nebeneinander
/// gehören, aber einzeln betrachtet werden wollen.
///
/// Bei reduzierter Bewegung entfallen Skalierung und Blende; gewischt
/// werden kann weiterhin.
class MotionSlider extends StatefulWidget {
  const MotionSlider({
    super.key,
    required this.children,
    required this.height,
    this.initialPage = 0,
    this.viewportFraction = 0.82,
    this.onPageChanged,
  });

  final List<Widget> children;
  final double height;

  /// Karte, die beim Öffnen vorn steht — z. B. die erreichte Stufe.
  final int initialPage;

  final double viewportFraction;
  final ValueChanged<int>? onPageChanged;

  @override
  State<MotionSlider> createState() => _MotionSliderState();
}

class _MotionSliderState extends State<MotionSlider> {
  late final PageController _ctrl;
  late int _page;

  /// Fortlaufende Position inklusive Zwischenwerten beim Wischen — daraus
  /// wird die Skalierung der Nachbarkarten berechnet.
  late double _offset;

  @override
  void initState() {
    super.initState();
    _page = widget.initialPage.clamp(
      0,
      widget.children.isEmpty ? 0 : widget.children.length - 1,
    );
    _offset = _page.toDouble();
    _ctrl = PageController(
      initialPage: _page,
      viewportFraction: widget.viewportFraction,
    )..addListener(_onScroll);
  }

  void _onScroll() {
    if (!_ctrl.hasClients || _ctrl.page == null) return;
    setState(() => _offset = _ctrl.page!);
  }

  @override
  void dispose() {
    _ctrl
      ..removeListener(_onScroll)
      ..dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.children.isEmpty) return const SizedBox.shrink();

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          height: widget.height,
          child: PageView.builder(
            controller: _ctrl,
            itemCount: widget.children.length,
            onPageChanged: (i) {
              Motion.tap();
              setState(() => _page = i);
              widget.onPageChanged?.call(i);
            },
            itemBuilder: (context, i) {
              // Fokus-Effekt (Skalierung + Blende + Weichzeichner) zentral aus
              // CarouselFocus, damit sich alle Karussells identisch anfühlen.
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 5),
                child: CarouselFocus.wrap(
                  context: context,
                  distance: i - _offset,
                  child: widget.children[i],
                ),
              );
            },
          ),
        ),
        if (widget.children.length > 1) ...[
          const SizedBox(height: AppSpacing.s3),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (var i = 0; i < widget.children.length; i++)
                AnimatedContainer(
                  duration: Motion.duration(context, AppMotion.fast),
                  curve: AppMotion.easeOut,
                  margin: const EdgeInsets.symmetric(horizontal: 3),
                  width: _page == i ? 22 : 8,
                  height: 8,
                  decoration: BoxDecoration(
                    color:
                        _page == i ? AppColors.brand : AppColors.borderSubtle,
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
            ],
          ),
        ],
      ],
    );
  }
}

/// Kachel-Raster, seitenweise wischbar.
///
/// Teilt [children] in Seiten zu [rows] × [columns] Kacheln und legt sie in
/// einen [MotionSlider]. Gedacht für Raster, die sonst die Seite in die
/// Länge ziehen — Profil-Aktionen, Abzeichen.
///
/// Wichtig: die erste Seite zeigt die wichtigsten Kacheln vollständig.
/// Anders als bei einem vertikalen Stapel bleibt damit alles Wesentliche
/// ohne Geste sichtbar; gewischt wird nur für den Rest.
class PagedTileGrid extends StatelessWidget {
  const PagedTileGrid({
    super.key,
    required this.children,
    required this.tileHeight,
    this.columns = 3,
    this.rows = 2,
    this.spacing = AppSpacing.s2,
  });

  final List<Widget> children;
  final double tileHeight;
  final int columns;
  final int rows;
  final double spacing;

  @override
  Widget build(BuildContext context) {
    if (children.isEmpty) return const SizedBox.shrink();
    final perPage = columns * rows;
    final pages = <List<Widget>>[
      for (var i = 0; i < children.length; i += perPage)
        children.sublist(
          i,
          i + perPage > children.length ? children.length : i + perPage,
        ),
    ];

    // Passt alles auf eine Seite, braucht es keinen Slider — dann wäre die
    // Punktleiste nur Dekoration.
    if (pages.length == 1) {
      return _GridPage(
        tiles: pages.first,
        columns: columns,
        tileHeight: tileHeight,
        spacing: spacing,
      );
    }

    // Höhe der höchsten Seite: die letzte Seite kann weniger Zeilen haben,
    // der Slider braucht aber eine feste Höhe.
    final maxRows = pages
        .map((p) => (p.length / columns).ceil())
        .reduce((a, b) => a > b ? a : b);
    final height = maxRows * tileHeight + (maxRows - 1) * spacing;

    return MotionSlider(
      height: height,
      viewportFraction: 0.94,
      children: [
        for (final page in pages)
          _GridPage(
            tiles: page,
            columns: columns,
            tileHeight: tileHeight,
            spacing: spacing,
          ),
      ],
    );
  }
}

class _GridPage extends StatelessWidget {
  const _GridPage({
    required this.tiles,
    required this.columns,
    required this.tileHeight,
    required this.spacing,
  });

  final List<Widget> tiles;
  final int columns;
  final double tileHeight;
  final double spacing;

  @override
  Widget build(BuildContext context) {
    final rows = <Widget>[];
    for (var i = 0; i < tiles.length; i += columns) {
      final slice = tiles.sublist(
        i,
        i + columns > tiles.length ? tiles.length : i + columns,
      );
      rows.add(
        SizedBox(
          height: tileHeight,
          child: Row(
            children: [
              for (var c = 0; c < columns; c++) ...[
                if (c > 0) SizedBox(width: spacing),
                // Leere Plätze in der letzten Zeile bleiben frei, damit die
                // Kacheln nicht auf volle Breite auseinandergezogen werden.
                Expanded(child: c < slice.length ? slice[c] : const SizedBox()),
              ],
            ],
          ),
        ),
      );
      if (i + columns < tiles.length) rows.add(SizedBox(height: spacing));
    }
    return Column(mainAxisSize: MainAxisSize.min, children: rows);
  }
}
