import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Bördesnack24-Karte — Cream-Surface mit subtiler 1 px-Border, 16 px-Radius
/// und zweischichtigem Schatten ([AppShadows.card]), der die Karte plastisch
/// vom Hintergrund abhebt. Optional klickbar mit dezenter Ripple-Animation.
class AppCard extends StatelessWidget {
  const AppCard({
    super.key,
    required this.child,
    this.onTap,
    this.padding = const EdgeInsets.all(AppSpacing.s5),
    this.borderColor,
    this.color,
    this.radius = AppRadii.lg,
    this.topStripeColor,
    this.topStripeHeight = 3,
    this.shadow,
  });

  final Widget child;
  final VoidCallback? onTap;
  final EdgeInsetsGeometry padding;
  final Color? borderColor;
  final Color? color;
  final double radius;

  /// Optionaler farbiger Streifen am oberen Rand (z. B. Gold für Standort-
  /// Karten im Kundenbereich).
  final Color? topStripeColor;
  final double topStripeHeight;

  /// Abweichender Schatten. `null` = [AppShadows.card]; eine leere Liste
  /// schaltet den Schatten ab (z. B. für Karten in einer Liste, die sonst
  /// ihre Nachbarn überlagern würden).
  final List<BoxShadow>? shadow;

  @override
  Widget build(BuildContext context) {
    final content = Padding(padding: padding, child: child);

    // Antippbare Karten bekommen die kräftige Kante. Grund: Karte und
    // Hintergrund tragen beide Weiß, die Karte ist also allein an ihrer Kante
    // zu erkennen — und für die Begrenzung eines Bedienelements verlangt
    // WCAG 1.4.11 mindestens 3:1. Die Haarlinie liegt bei 1,33:1.
    // Ein ausdrücklich gesetztes [borderColor] hat weiterhin Vorrang.
    final effectiveBorder = borderColor ??
        (onTap == null ? AppColors.borderSubtle : AppColors.borderStrong);

    final decoration = BoxDecoration(
      color: color ?? AppColors.surfaceCard,
      borderRadius: BorderRadius.circular(radius),
      border: Border.all(color: effectiveBorder, width: 1),
    );

    Widget stripedContent = content;
    if (topStripeColor != null) {
      stripedContent = Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            height: topStripeHeight,
            decoration: BoxDecoration(
              color: topStripeColor,
              borderRadius: BorderRadius.vertical(top: Radius.circular(radius)),
            ),
          ),
          content,
        ],
      );
    }

    final Widget surface;
    if (onTap == null) {
      surface = ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: DecoratedBox(decoration: decoration, child: stripedContent),
      );
    } else {
      surface = Material(
        color: Colors.transparent,
        child: Ink(
          decoration: decoration,
          child: InkWell(
            onTap: onTap,
            borderRadius: BorderRadius.circular(radius),
            splashColor: AppColors.brandLight.withValues(alpha: 0.35),
            highlightColor: AppColors.brandLight.withValues(alpha: 0.15),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(radius),
              child: stripedContent,
            ),
          ),
        ),
      );
    }

    final shadows = shadow ?? AppShadows.card;
    if (shadows.isEmpty) return surface;

    // Der Schatten MUSS außerhalb des ClipRRect liegen — innen würde ihn der
    // Clip exakt an der Kartenkante abschneiden und die Karte bliebe flach.
    return DecoratedBox(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(radius),
        boxShadow: shadows,
      ),
      child: surface,
    );
  }
}
