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
  });

  final Widget child;
  final VoidCallback? onTap;
  final EdgeInsetsGeometry padding;
  final Color? borderColor;
  final Color? color;
  final double radius;

  @override
  Widget build(BuildContext context) {
    final content = Padding(padding: padding, child: child);
    final decoration = BoxDecoration(
      color: color ?? AppColors.surfaceCard,
      borderRadius: BorderRadius.circular(radius),
      border: Border.all(color: borderColor ?? AppColors.borderSubtle, width: 1),
    );

    if (onTap == null) {
      return DecoratedBox(decoration: decoration, child: content);
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
          child: content,
        ),
      ),
    );
  }
}
