import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// App-weiter Hero-Seitenkopf: das Markenbild (Automat + leuchtende
/// Umrisskarte des Bördekreises) füllt als Hintergrund das obere Drittel
/// jeder Seite; Zurück-Pfeil, Titel und Actions liegen darüber.
///
/// Drop-in-Ersatz für `AppBar(title: …, actions: …, leading: …)` —
/// gleiche Parameter, gleiche Semantik (automatischer Back-Button, wenn
/// die Route poppen kann).
class HeroAppBar extends StatelessWidget implements PreferredSizeWidget {
  const HeroAppBar({super.key, this.title, this.actions, this.leading});

  final Widget? title;
  final List<Widget>? actions;
  final Widget? leading;

  /// Höhe des Hero-Bereichs (ohne Status-Leiste) — bewusst großzügig,
  /// damit das Markenbild wie auf der Kunden-Startseite wirkt.
  static const double heroHeight = 200;

  // Farbwelt des brand_hero_wide.png-Hintergrunds (vgl. Kunden-Header).
  static const Color _bg = Color(0xFF0C0A07);

  @override
  Size get preferredSize => const Size.fromHeight(heroHeight);

  @override
  Widget build(BuildContext context) {
    final canPop = Navigator.of(context).canPop();
    final width = MediaQuery.of(context).size.width;
    return Container(
      color: _bg,
      child: Stack(
        children: [
          // Rechte Hälfte: Markenbild (Bördekreis + Wortmarke + Automat).
          Positioned(
            right: -12,
            top: 0,
            bottom: 0,
            width: width * 0.62,
            child: Image.asset(
              'assets/images/brand_hero_wide.png',
              fit: BoxFit.contain,
              alignment: Alignment.centerRight,
              errorBuilder: (_, __, ___) => const SizedBox.shrink(),
            ),
          ),
          // Weicher Übergang von der dunklen Grundfläche ins Bild, damit
          // die Bildkante unsichtbar bleibt (wie im Kunden-Header).
          Positioned(
            left: 0,
            top: 0,
            bottom: 0,
            right: width * 0.24,
            child: const IgnorePointer(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.centerLeft,
                    end: Alignment.centerRight,
                    colors: [_bg, _bg, Color(0x000C0A07)],
                    stops: [0.0, 0.55, 1.0],
                  ),
                ),
              ),
            ),
          ),
          // Bodennebel unten für die Titel-Lesbarkeit.
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            height: 84,
            child: IgnorePointer(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [Color(0xE60C0A07), Color(0x000C0A07)],
                  ),
                ),
              ),
            ),
          ),
          // Inhalt: Toolbar-Zeile oben, Titel unten links.
          SafeArea(
            bottom: false,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    if (leading != null)
                      IconTheme(
                        data: const IconThemeData(color: AppColors.onDark),
                        child: leading!,
                      )
                    else if (canPop)
                      IconButton(
                        tooltip: 'Zurück',
                        icon: const Icon(
                          Icons.arrow_back,
                          color: AppColors.onDark,
                        ),
                        onPressed: () => Navigator.of(context).maybePop(),
                      ),
                    const Spacer(),
                    if (actions != null)
                      IconTheme(
                        data: const IconThemeData(color: AppColors.onDark),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: actions!,
                        ),
                      ),
                  ],
                ),
                const Spacer(),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppSpacing.s5,
                    0,
                    AppSpacing.s5,
                    AppSpacing.s3,
                  ),
                  child: DefaultTextStyle(
                    style: AppTypography.display(
                      size: 21,
                      weight: FontWeight.w800,
                      color: AppColors.onDark,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    child: title ?? const SizedBox.shrink(),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
