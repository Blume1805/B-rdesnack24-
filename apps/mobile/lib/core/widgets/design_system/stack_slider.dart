import 'package:flutter/material.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Vertikaler Karten-Stapel zum Durchwischen.
///
/// Nachbau der Vorlage „Article Stack": drei Karten liegen in festen Slots
/// übereinander, die vorderste voll sichtbar, die dahinter angeschnitten,
/// kleiner und blasser. Beim Weiterschalten rückt jede Karte einen Slot
/// nach vorn (~0,8 s in der Vorlage).
///
/// Gedacht für Listen, die sonst die Seite zuwachsen lassen — Coupons,
/// Automaten, Herausforderungen. Der Stapel zeigt auf einen Blick, dass es
/// weitergeht, ohne dass man scrollen muss.
///
/// **Zugänglichkeit:** Der Stapel darf nie der einzige Weg zum Inhalt sein.
/// Deshalb gibt es Pfeiltasten, eine Zählanzeige („2 von 7") und mit
/// [onShowAll] einen Ausweg in die vollständige Liste. Bei reduzierter
/// Bewegung entfallen Versatz und Skalierung; gewischt werden kann weiter.
class StackSlider extends StatefulWidget {
  const StackSlider({
    super.key,
    required this.children,
    required this.height,
    this.onShowAll,
    this.showAllLabel = 'Alle anzeigen',
  });

  final List<Widget> children;

  /// Höhe der vordersten Karte. Der Stapel darunter braucht zusätzlich
  /// [_stackTail] Pixel — die rechnet das Widget selbst dazu.
  final double height;

  /// Öffnet die vollständige Liste. Ohne Angabe entfällt der Link.
  final VoidCallback? onShowAll;
  final String showAllLabel;

  /// Sichtbarer Rest der hinteren Karten unterhalb der vordersten.
  static const double _stackTail = 26;

  @override
  State<StackSlider> createState() => _StackSliderState();
}

class _StackSliderState extends State<StackSlider> {
  late final PageController _ctrl;
  int _page = 0;
  double _offset = 0;

  @override
  void initState() {
    super.initState();
    // viewportFraction 1.0: es wird immer genau eine Karte „geblättert",
    // die Staffelung entsteht durch die Transformation, nicht durch das
    // Viewport.
    _ctrl = PageController()..addListener(_onScroll);
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

  Future<void> _to(int index) async {
    if (index < 0 || index >= widget.children.length) return;
    Motion.tap();
    await _ctrl.animateToPage(
      index,
      duration: Motion.duration(context, const Duration(milliseconds: 380)),
      curve: AppMotion.easeOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    final items = widget.children;
    if (items.isEmpty) return const SizedBox.shrink();
    // Ein einzelnes Element braucht keinen Stapel.
    if (items.length == 1) return items.first;

    final reduced = Motion.reduced(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          height: widget.height + StackSlider._stackTail,
          child: PageView.builder(
            controller: _ctrl,
            scrollDirection: Axis.vertical,
            itemCount: items.length,
            onPageChanged: (i) {
              Motion.tap();
              setState(() => _page = i);
            },
            itemBuilder: (context, i) {
              final d = (i - _offset);
              // Karten oberhalb der Fokuskarte sind bereits „raus" — sie
              // dürfen den Stapel nicht von unten aufblähen.
              final behind = d.clamp(0.0, 2.0);
              final scale = reduced ? 1.0 : 1 - 0.05 * behind;
              final dy = reduced ? 0.0 : behind * (StackSlider._stackTail / 2);
              final opacity = reduced ? 1.0 : 1 - 0.30 * behind;
              return Align(
                alignment: Alignment.topCenter,
                child: Transform.translate(
                  offset: Offset(0, dy),
                  child: Transform.scale(
                    scale: scale,
                    alignment: Alignment.topCenter,
                    child: Opacity(
                      opacity: opacity.clamp(0.0, 1.0),
                      child: SizedBox(
                        height: widget.height,
                        child: items[i],
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: AppSpacing.s2),
        _StackControls(
          index: _page,
          total: items.length,
          onPrev: _page > 0 ? () => _to(_page - 1) : null,
          onNext: _page < items.length - 1 ? () => _to(_page + 1) : null,
          onShowAll: widget.onShowAll,
          showAllLabel: widget.showAllLabel,
        ),
      ],
    );
  }
}

/// Zähler, Pfeile und Ausweg in die vollständige Liste.
///
/// Ohne diese Leiste wäre der Stapel eine reine Wischgeste — nicht
/// erkennbar, nicht per Tastatur bedienbar und für Screenreader wertlos.
class _StackControls extends StatelessWidget {
  const _StackControls({
    required this.index,
    required this.total,
    required this.onPrev,
    required this.onNext,
    required this.onShowAll,
    required this.showAllLabel,
  });

  final int index;
  final int total;
  final VoidCallback? onPrev;
  final VoidCallback? onNext;
  final VoidCallback? onShowAll;
  final String showAllLabel;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        _ArrowButton(
          icon: Icons.keyboard_arrow_up,
          tooltip: 'Vorherige Karte',
          onTap: onPrev,
        ),
        const SizedBox(width: 4),
        _ArrowButton(
          icon: Icons.keyboard_arrow_down,
          tooltip: 'Nächste Karte',
          onTap: onNext,
        ),
        const SizedBox(width: AppSpacing.s2),
        Text(
          '${index + 1} von $total',
          style: AppTypography.body(
            size: 12,
            weight: FontWeight.w700,
            color: AppColors.textMuted,
          ),
        ),
        const Spacer(),
        if (onShowAll != null)
          TextButton(
            onPressed: onShowAll,
            style: TextButton.styleFrom(
              visualDensity: VisualDensity.compact,
              padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s2),
            ),
            child: Text(
              showAllLabel,
              style: AppTypography.body(
                size: 12,
                weight: FontWeight.w800,
                color: AppColors.brandText,
              ),
            ),
          ),
      ],
    );
  }
}

class _ArrowButton extends StatelessWidget {
  const _ArrowButton({
    required this.icon,
    required this.tooltip,
    required this.onTap,
  });

  final IconData icon;
  final String tooltip;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final enabled = onTap != null;
    return Tooltip(
      message: tooltip,
      child: Material(
        color: enabled ? AppColors.surfaceAlt : Colors.transparent,
        shape: const CircleBorder(),
        child: InkWell(
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: SizedBox(
            width: 32,
            height: 32,
            child: Icon(
              icon,
              size: 20,
              color: enabled ? AppColors.ink : AppColors.borderSubtle,
            ),
          ),
        ),
      ),
    );
  }
}
