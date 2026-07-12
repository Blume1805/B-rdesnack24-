import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Bördesnack24-Karte — Cream-Surface mit subtiler 1 px-Border, 16 px-Radius,
/// keine Elevation. Optional klickbar mit dezenter Ripple-Animation.
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

  @override
  Widget build(BuildContext context) {
    final content = Padding(padding: padding, child: child);
    final decoration = BoxDecoration(
      color: color ?? AppColors.surfaceCard,
      borderRadius: BorderRadius.circular(radius),
      border: Border.all(color: borderColor ?? AppColors.borderSubtle, width: 1),
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

    if (onTap == null) {
      return ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: DecoratedBox(decoration: decoration, child: stripedContent),
      );
    }

    return Material(
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
}
