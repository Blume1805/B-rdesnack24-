import 'package:flutter/material.dart';

import '../../theme/app_typography.dart';

/// Hochgestelltes Fußnoten-Sternchen.
///
/// Auf der Grundlinie mitlaufend liest sich ein „*" hinter einer Zahl wie ein
/// Multiplikationszeichen („-10 % *"). Hochgestellt ist sofort klar, dass es
/// auf eine Fußnote verweist.
///
/// Umgesetzt als [WidgetSpan] mit [PlaceholderAlignment.top]: die Oberkante
/// des Sternchens liegt damit auf der Oberkante der Zeile. Ein
/// `FontFeature.superscripts` wäre eleganter, greift aber nur, wenn die
/// Schrift den OpenType-Table mitbringt — verlässlich ist das nicht.
InlineSpan footnoteStarSpan({required double fontSize, required Color color}) {
  return WidgetSpan(
    alignment: PlaceholderAlignment.top,
    child: Transform.translate(
      // Minimal nach unten: exakt auf der Oberkante wirkt das Zeichen
      // abgeschnitten, weil der Stern selbst schon oben in seiner Zeile sitzt.
      offset: Offset(1, fontSize * 0.08),
      child: Text(
        '*',
        style: AppTypography.body(
          size: fontSize * 0.6,
          weight: FontWeight.w800,
          color: color,
        ).copyWith(height: 1),
      ),
    ),
  );
}

/// [Text] mit hochgestelltem Sternchen dahinter — der Normalfall für
/// Rabatt-Angaben, deren Bedingungen als Fußnote in derselben Kachel stehen.
class StarredText extends StatelessWidget {
  const StarredText(
    this.text, {
    super.key,
    required this.style,
    this.textAlign,
  });

  final String text;
  final TextStyle style;
  final TextAlign? textAlign;

  @override
  Widget build(BuildContext context) {
    final size = style.fontSize ?? 14;
    return Text.rich(
      TextSpan(
        children: [
          TextSpan(text: text, style: style),
          footnoteStarSpan(
            fontSize: size,
            color: style.color ?? Theme.of(context).colorScheme.onSurface,
          ),
        ],
      ),
      textAlign: textAlign,
    );
  }
}
