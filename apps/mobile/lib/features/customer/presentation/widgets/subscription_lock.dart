import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';
import '../screens/subscription_screen.dart';

/// Sperrt einen abo-pflichtigen Bereich für Nutzer:innen ohne Abo.
///
/// Bewusst **nicht** ausblenden: der Bereich bleibt sichtbar, damit klar
/// wird, was die kostenpflichtige Version bietet. Er wird aber entsättigt
/// und abgeblendet, nimmt keine Eingaben mehr an, und darüber liegt der
/// Hinweis samt Wechsel-Link auf die Abo-Seite.
///
/// Die Sperre ist reine Anzeige-Logik. Die Durchsetzung liegt zusätzlich
/// serverseitig in den Aktivierungs-RPCs — ein manipulierter Client käme
/// über die UI-Sperre hinaus trotzdem nicht an die Vorteile.
class SubscriptionLock extends ConsumerWidget {
  const SubscriptionLock({
    super.key,
    required this.locked,
    required this.child,
    this.note,
    this.dense = false,
  });

  /// Sperren? `false` gibt [child] unverändert durch (kein Overhead für
  /// Abonnent:innen).
  final bool locked;

  /// Was in diesem Bereich freigeschaltet wird — eine kurze Zeile, z. B.
  /// „Frühstücks- & Feierabend-Deals".
  final String? note;

  /// Kompakte Variante für kleine Bereiche (einzelne Karte statt Sektion):
  /// kleinere Schrift, weniger Innenabstand.
  final bool dense;

  final Widget child;

  /// Graustufen-Matrix. Entsättigen statt nur abblenden, weil das gelbe
  /// Marken-Gold sonst auch bei 40 % Deckkraft noch „aktiv" wirkt.
  static const _greyscale = ColorFilter.matrix(<double>[
    0.2126, 0.7152, 0.0722, 0, 0, //
    0.2126, 0.7152, 0.0722, 0, 0, //
    0.2126, 0.7152, 0.0722, 0, 0, //
    0, 0, 0, 1, 0, //
  ]);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (!locked) return child;

    // Beide Kinder sind bewusst unpositioniert: der Stack nimmt dann die
    // Größe des höheren an. Mit `Positioned.fill` für den Hinweis würde die
    // Box nur so hoch wie der gesperrte Inhalt — bei flachen Bereichen läuft
    // der Hinweis dann unten heraus.
    // Unten statt mittig: so bleibt der obere Teil des gesperrten Bereichs
    // sichtbar. Genau das ist der Zweck der Sperre — zeigen, was fehlt.
    return Stack(
      alignment: Alignment.bottomCenter,
      children: [
        // ExcludeSemantics: für Screenreader ist der gesperrte Inhalt
        // Dekoration — vorgelesen wird der Hinweis darüber.
        ExcludeSemantics(
          child: IgnorePointer(
            child: Opacity(
              opacity: 0.4,
              child: ColorFiltered(colorFilter: _greyscale, child: child),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(AppSpacing.s3),
          child: _LockHint(note: note, dense: dense),
        ),
      ],
    );
  }
}

/// Der Hinweis-Kasten über dem gesperrten Bereich.
class _LockHint extends ConsumerWidget {
  const _LockHint({required this.note, required this.dense});

  final String? note;
  final bool dense;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    Future<void> openSubscription() async {
      await Navigator.of(context).push(
        MaterialPageRoute(builder: (_) => const SubscriptionScreen()),
      );
      // Nach der Rückkehr neu prüfen: wurde ein Abo gewählt, entsperrt
      // sich der Bereich sofort.
      ref.invalidate(hasSubscriptionProvider);
    }

    return ConstrainedBox(
      constraints: const BoxConstraints(maxWidth: 320),
      child: AppCard(
        color: AppColors.ink,
        borderColor: AppColors.brand,
        shadow: AppShadows.raised,
        padding: EdgeInsets.all(dense ? AppSpacing.s3 : AppSpacing.s4),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(
                  Icons.lock_outline,
                  size: dense ? 16 : 18,
                  color: AppColors.brand,
                ),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    'Nur in der kostenpflichtigen Version',
                    style: AppTypography.body(
                      size: dense ? 12 : 13,
                      weight: FontWeight.w800,
                      color: AppColors.brand,
                    ).copyWith(height: 1.25),
                  ),
                ),
              ],
            ),
            if (note != null) ...[
              const SizedBox(height: 6),
              Text(
                note!,
                style: AppTypography.body(
                  size: dense ? 11.5 : 12.5,
                  color: AppColors.onDark,
                ).copyWith(height: 1.35),
              ),
            ],
            SizedBox(height: dense ? AppSpacing.s2 : AppSpacing.s3),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink,
                  padding: EdgeInsets.symmetric(vertical: dense ? 9 : 12),
                  textStyle: AppTypography.body(
                    size: dense ? 12.5 : 13.5,
                    weight: FontWeight.w800,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                ),
                onPressed: openSubscription,
                child: const Text('Zur kostenpflichtigen Version wechseln'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Neutraler Platzhalter für gesperrte Bereiche, deren echte Inhalte es
/// ohne Abo gar nicht gibt (persönliche Coupons, Punktestand).
///
/// Bewusst ohne erfundene Zahlen: eine ausgegraute „340 Punkte"-Karte
/// würde einen Kontostand vortäuschen, den es nicht gibt.
class LockedSectionPreview extends StatelessWidget {
  const LockedSectionPreview({
    super.key,
    required this.icon,
    required this.text,
    this.height = 150,
  });

  final IconData icon;
  final String text;
  final double height;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      child: AppCard(
        color: AppColors.surfaceAlt,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 30, color: AppColors.textMuted),
              const SizedBox(height: AppSpacing.s2),
              Text(
                text,
                textAlign: TextAlign.center,
                style: AppTypography.body(size: 13, color: AppColors.textMuted)
                    .copyWith(height: 1.35),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
