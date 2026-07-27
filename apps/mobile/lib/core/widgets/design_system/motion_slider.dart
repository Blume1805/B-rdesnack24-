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
    final reduced = Motion.reduced(context);

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
              // 0 = im Fokus, 1 = eine Karte daneben.
              final distance = (i - _offset).abs().clamp(0.0, 1.0);
              // Deutlicher Fokus: die Nachbarn schrumpfen auf 84 % und
              // fallen auf 45 % Deckkraft. Schwächere Werte wirken auf dem
              // Handy wie ein Rendering-Zufall statt wie Absicht.
              final scale = reduced ? 1.0 : 1 - 0.16 * distance;
              final opacity = reduced ? 1.0 : 1 - 0.55 * distance;
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 5),
                child: Opacity(
                  opacity: opacity,
                  child: Transform.scale(
                    scale: scale,
                    child: widget.children[i],
                  ),
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
