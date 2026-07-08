import 'package:flutter/material.dart';

import '../../theme/app_typography.dart';
import 'eyebrow.dart';

/// Section-Header: Eyebrow + Titel (+ optionaler Action-Button).
class SectionHeader extends StatelessWidget {
  const SectionHeader({
    super.key,
    required this.eyebrow,
    required this.title,
    this.action,
  });

  final String eyebrow;
  final String title;
  final Widget? action;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Eyebrow(eyebrow),
              const SizedBox(height: 4),
              Text(
                title,
                style: AppTypography.display(
                  size: 22,
                  weight: FontWeight.w700,
                ),
              ),
            ],
          ),
        ),
        if (action != null) action!,
      ],
    );
  }
}
