import 'package:flutter/material.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Drei hüpfende Punkte — „schreibt gerade".
///
/// Nachbau des Tippindikators aus der Chat-Vorlage. Dort läuft er rund
/// zwei Sekunden, bevor die Antwort erscheint; diese Pause ist Teil des
/// Effekts und steckt in [TypingBubble.thinkTime].
///
/// Bei reduzierter Bewegung stehen die Punkte still — die Aussage „hier
/// passiert gerade etwas" trägt dann der Text daneben.
class TypingDots extends StatefulWidget {
  const TypingDots({
    super.key,
    this.color = AppColors.textMuted,
    this.size = 7,
  });

  final Color color;
  final double size;

  @override
  State<TypingDots> createState() => _TypingDotsState();
}

class _TypingDotsState extends State<TypingDots>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c;

  @override
  void initState() {
    super.initState();
    _c = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    )..repeat();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final still = Motion.reduced(context);
    return SizedBox(
      height: widget.size * 2.4,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          for (var i = 0; i < 3; i++) ...[
            if (i > 0) SizedBox(width: widget.size * 0.6),
            if (still)
              _Dot(size: widget.size, color: widget.color, lift: 0)
            else
              AnimatedBuilder(
                animation: _c,
                builder: (context, _) {
                  // Jeder Punkt startet ein Drittel später.
                  final phase = (_c.value + i / 3) % 1.0;
                  // Nur im ersten Drittel der Phase heben, dann liegen
                  // bleiben — das ergibt die typische Welle.
                  final lift = phase < 0.34
                      ? Curves.easeOut.transform(phase / 0.34)
                      : phase < 0.68
                          ? 1 - Curves.easeIn.transform((phase - 0.34) / 0.34)
                          : 0.0;
                  return _Dot(
                    size: widget.size,
                    color: widget.color,
                    lift: lift,
                  );
                },
              ),
          ],
        ],
      ),
    );
  }
}

class _Dot extends StatelessWidget {
  const _Dot({required this.size, required this.color, required this.lift});

  final double size;
  final Color color;
  final double lift;

  @override
  Widget build(BuildContext context) {
    return Transform.translate(
      offset: Offset(0, -lift * size * 0.9),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          // Angehobene Punkte sind etwas kräftiger — das verstärkt die
          // Welle, ohne dass sie größer werden müssten.
          color: color.withValues(alpha: 0.45 + 0.55 * lift),
          shape: BoxShape.circle,
        ),
      ),
    );
  }
}

/// Chat-Blase mit Tippindikator, wie sie in der Vorlage vor der Antwort
/// steht.
class TypingBubble extends StatelessWidget {
  const TypingBubble({
    super.key,
    this.label = 'schreibt',
    this.background = AppColors.surfaceAlt,
  });

  /// Dauer, die der Indikator in der Vorlage vor der Antwort läuft.
  /// Von den Aufrufern als Verzögerung verwendet, damit der Chat nicht
  /// unnatürlich sofort antwortet.
  static const Duration thinkTime = Duration(milliseconds: 1400);

  final String label;
  final Color background;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      liveRegion: true,
      label: '$label …',
      child: Container(
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s3,
          vertical: AppSpacing.s3,
        ),
        decoration: BoxDecoration(
          color: background,
          borderRadius: BorderRadius.circular(AppRadii.lg),
          border: Border.all(color: AppColors.borderSubtle),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label,
              style: AppTypography.body(
                size: 12,
                weight: FontWeight.w600,
                color: AppColors.textMuted,
              ),
            ),
            const SizedBox(width: AppSpacing.s2),
            const TypingDots(),
          ],
        ),
      ),
    );
  }
}
