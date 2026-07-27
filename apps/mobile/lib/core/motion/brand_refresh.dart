import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart' show ScrollDirection;

import '../theme/app_tokens.dart';
import '../widgets/design_system/brand_marks.dart';
import 'motion.dart';

/// Pull-to-Refresh mit Marken-Animation statt Material-Spinner.
///
/// Beim Ziehen wächst der Bördesnack24-Markenkreis aus dem oberen Rand
/// heraus; ab der Auslöseschwelle gibt es ein haptisches „Klick" und
/// während des Nachladens dreht sich der Kreis. `RefreshIndicator` lässt
/// seinen Indikator nicht austauschen — deshalb hört dieses Widget selbst
/// auf die Scroll-Notifications.
///
/// Behandelt beide Overscroll-Modelle:
///  * **Bouncing** (iOS): die Liste steht real im Minus → `metrics.pixels`.
///  * **Clamping** (Android): kein Minus, stattdessen
///    `OverscrollNotification`.
///
/// Bei reduzierter Bewegung bleibt der Kreis stehen (kein Drehen), die
/// Funktion bleibt identisch.
class BrandRefresh extends StatefulWidget {
  const BrandRefresh({
    super.key,
    required this.onRefresh,
    required this.child,
  });

  final Future<void> Function() onRefresh;
  final Widget child;

  @override
  State<BrandRefresh> createState() => _BrandRefreshState();
}

class _BrandRefreshState extends State<BrandRefresh>
    with SingleTickerProviderStateMixin {
  /// Zugweg, ab dem losgeladen wird.
  static const double _trigger = 84;

  /// Weiter ziehen bringt nichts mehr — begrenzt den Ausschlag.
  static const double _maxPull = 130;

  /// Bewusst in [initState] erzeugt statt `late final`: wird nie gezogen,
  /// würde ein lazy Feld erst in `dispose()` initialisiert — und dort ist
  /// der Element-Baum für den Ticker-Lookup schon abgebaut.
  late final AnimationController _spin;

  double _pull = 0;
  bool _busy = false;

  /// Haptik soll pro Zug nur einmal feuern, nicht bei jedem Pixel.
  bool _armed = false;

  @override
  void initState() {
    super.initState();
    _spin = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1100),
    );
  }

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  void _setPull(double value) {
    final next = value.clamp(0.0, _maxPull);
    if (next == _pull) return;
    setState(() => _pull = next);
    if (!_armed && next >= _trigger) {
      _armed = true;
      Motion.tap();
    } else if (_armed && next < _trigger) {
      _armed = false;
    }
  }

  Future<void> _run() async {
    if (_busy) return;
    setState(() {
      _busy = true;
      _pull = _trigger;
    });
    unawaited(_spin.repeat());
    try {
      await widget.onRefresh();
    } finally {
      if (mounted) {
        _spin.stop();
        setState(() {
          _busy = false;
          _pull = 0;
          _armed = false;
        });
      }
    }
  }

  bool _onNotification(ScrollNotification n) {
    // Nur die äußerste vertikale Liste steuert den Refresh — horizontale
    // Karussells innerhalb der Seite dürfen ihn nicht auslösen.
    if (n.depth != 0 || _busy || n.metrics.axis != Axis.vertical) return false;

    if (n is ScrollStartNotification) {
      // Neue Geste — der Zugweg beginnt bei null.
      if (_pull != 0) _setPull(0);
      _armed = false;
    } else if (n is OverscrollNotification || n is ScrollUpdateNotification) {
      final drag = n is OverscrollNotification
          ? n.dragDetails
          : (n as ScrollUpdateNotification).dragDetails;
      // Nur der echte Finger zählt. Ballistik und Zurückfedern dürfen den
      // Zugweg nicht mitschreiben.
      if (drag == null) return false;
      final m = n.metrics;
      if (m.pixels > m.minScrollExtent + 0.5) {
        // Die Liste scrollt wieder im Inhalt — kein Refresh-Zug mehr.
        if (_pull != 0) _setPull(0);
        return false;
      }
      // Gemessen wird der Fingerweg, nicht der resultierende Pixel-Offset:
      // Bouncing-Physik dämpft den Overscroll stark, die Schwelle wäre
      // sonst auf iOS praktisch unerreichbar.
      _setPull(_pull + (drag.primaryDelta ?? 0));
    } else if (n is UserScrollNotification &&
        n.direction == ScrollDirection.idle) {
      // Der Finger ist gerade losgelassen worden. Genau hier muss die
      // Entscheidung fallen: bei Bouncing-Physik federt die Liste danach
      // zurück und würde den Zugweg sonst auf 0 zurückschreiben, bevor
      // ScrollEnd überhaupt kommt.
      _evaluate();
    } else if (n is ScrollEndNotification) {
      // Clamping-Physik beendet den Overscroll ohne Ballistik — hier ist
      // ScrollEnd der einzige verlässliche Zeitpunkt.
      _evaluate();
    }
    return false;
  }

  void _evaluate() {
    if (_pull >= _trigger) {
      unawaited(_run());
    } else if (_pull > 0) {
      _setPull(0);
    }
  }

  @override
  Widget build(BuildContext context) {
    final progress = (_pull / _trigger).clamp(0.0, 1.0);
    return NotificationListener<ScrollNotification>(
      onNotification: _onNotification,
      child: Stack(
        children: [
          widget.child,
          if (_pull > 0)
            Positioned(
              top: 0,
              left: 0,
              right: 0,
              child: IgnorePointer(
                child: Center(
                  child: Padding(
                    // Der Kreis folgt dem Finger, aber gedämpft.
                    padding: EdgeInsets.only(top: 8 + _pull * 0.35),
                    child: Opacity(
                      opacity: progress,
                      child: Transform.scale(
                        scale: 0.6 + 0.4 * progress,
                        child: Semantics(
                          label: _busy
                              ? 'Wird aktualisiert'
                              : 'Zum Aktualisieren loslassen',
                          child: RotationTransition(
                            turns: Motion.reduced(context)
                                ? const AlwaysStoppedAnimation<double>(0)
                                : _spin,
                            child: const _BrandPuck(),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

/// Der Marken-Puck, der beim Ziehen erscheint.
class _BrandPuck extends StatelessWidget {
  const _BrandPuck();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 44,
      height: 44,
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        shape: BoxShape.circle,
        border: Border.all(color: AppColors.brand, width: 2),
        boxShadow: [
          BoxShadow(
            color: AppColors.ink.withValues(alpha: 0.12),
            blurRadius: 10,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      alignment: Alignment.center,
      child: const BrandIcon(size: 24),
    );
  }
}
