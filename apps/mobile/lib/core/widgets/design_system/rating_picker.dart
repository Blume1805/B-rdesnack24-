import 'package:flutter/material.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Fünfstufige Bewertungsauswahl mit Gesichtern.
///
/// Nachbau der Vorlage „Rate your experience": fünf Stufen von schlecht bis
/// sehr gut, die gewählte Stufe wächst und färbt sich in ihre Stufenfarbe,
/// darunter steht die Bezeichnung. Deutsche Bezeichnungen statt
/// „Terrible/Bad/Ok/Good/Great".
///
/// Anders als [RatingStars], das eine vorhandene Bewertung *anzeigt*, ist
/// das hier das Eingabe-Gegenstück.
class RatingPicker extends StatelessWidget {
  const RatingPicker({
    super.key,
    required this.value,
    required this.onChanged,
    this.enabled = true,
  });

  /// 1–5, oder `null` wenn noch nichts gewählt wurde.
  final int? value;
  final ValueChanged<int> onChanged;
  final bool enabled;

  static const _steps = <_Step>[
    _Step(
      1,
      'Schlecht',
      Icons.sentiment_very_dissatisfied,
      AppColors.statusCritical,
    ),
    _Step(2, 'Geht so', Icons.sentiment_dissatisfied, Color(0xFFD2691E)),
    _Step(3, 'Okay', Icons.sentiment_neutral, AppColors.statusWarning),
    _Step(4, 'Gut', Icons.sentiment_satisfied, Color(0xFF7EA845)),
    _Step(5, 'Super', Icons.sentiment_very_satisfied, AppColors.statusPositive),
  ];

  /// Bezeichnung zu einer Stufe — auch außerhalb nutzbar, damit
  /// Bestätigungstexte dieselben Worte verwenden.
  static String labelFor(int step) =>
      _steps.firstWhere((s) => s.value == step).label;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        for (final step in _steps)
          Expanded(
            child: _StepButton(
              step: step,
              selected: value == step.value,
              // Solange nichts gewählt ist, stehen alle gleichwertig da.
              dimmed: value != null && value != step.value,
              onTap: enabled ? () => onChanged(step.value) : null,
            ),
          ),
      ],
    );
  }
}

class _Step {
  const _Step(this.value, this.label, this.icon, this.color);
  final int value;
  final String label;
  final IconData icon;
  final Color color;
}

class _StepButton extends StatelessWidget {
  const _StepButton({
    required this.step,
    required this.selected,
    required this.dimmed,
    required this.onTap,
  });

  final _Step step;
  final bool selected;
  final bool dimmed;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final color = selected ? step.color : AppColors.textMuted;
    return Semantics(
      button: true,
      selected: selected,
      label: step.label,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: onTap == null
            ? null
            : () {
                Motion.tap();
                onTap!();
              },
        child: AnimatedOpacity(
          // Nicht gewählte Stufen treten zurück, verschwinden aber nicht:
          // man muss weiter umwählen können.
          opacity: dimmed ? 0.45 : 1,
          duration: Motion.duration(context, AppMotion.fast),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              AnimatedScale(
                scale: selected ? 1.18 : 1,
                duration: Motion.duration(context, AppMotion.base),
                curve: AppMotion.easeOut,
                child: AnimatedContainer(
                  duration: Motion.duration(context, AppMotion.base),
                  curve: AppMotion.easeOut,
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(
                    color: selected
                        ? step.color.withValues(alpha: 0.14)
                        : Colors.transparent,
                    shape: BoxShape.circle,
                  ),
                  child: Icon(step.icon, size: 30, color: color),
                ),
              ),
              const SizedBox(height: 6),
              Text(
                step.label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.center,
                style: AppTypography.body(
                  size: 11,
                  weight: selected ? FontWeight.w800 : FontWeight.w600,
                  color: selected ? AppColors.ink : AppColors.textMuted,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
