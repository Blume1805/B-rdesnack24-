import 'package:flutter/material.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/core/widgets/design_system/brand_marks.dart';

/// Kopf der Anmelde- und Registrierungsseite: Bördeumriss mit Automat,
/// Wortmarke, Claim und Begrüßung.
///
/// Bewusst **kein** [AppBar], sondern ein Widget im Scrollbereich. Die
/// Registrierung ist ein langes Formular; ein fest stehender Kopf von 260
/// Punkten würde auf einem Telefon im Querformat mehr als die halbe Fläche
/// belegen und den ersten Fehlerhinweis aus dem Blick schieben. So scrollt
/// er mit weg, sobald jemand tippt.
///
/// Der Zurück-Pfeil liegt darüber und bleibt erreichbar, weil er im ersten
/// Bildschirm sitzt.
class WillkommenHeader extends StatelessWidget {
  const WillkommenHeader({
    super.key,
    required this.begruessung,
    required this.titel,
    this.untertitel,
  });

  /// „Herzlich willkommen" — die Zeile über dem eigentlichen Titel.
  final String begruessung;

  /// Wozu die Seite da ist, z. B. „Kundenkonto erstellen".
  final String titel;

  /// Optionaler Satz darunter, der den nächsten Schritt einordnet.
  final String? untertitel;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        color: AppColors.heroInk,
        gradient: RadialGradient(
          center: Alignment(-0.4, 1.6),
          radius: 1.4,
          colors: [
            Color(0xFF3A2C10),
            Color(0xFF1A1409),
            AppColors.heroInk,
          ],
          stops: [0.0, 0.35, 0.85],
        ),
      ),
      child: SafeArea(
        bottom: false,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s10,
            AppSpacing.s5,
            AppSpacing.s8,
          ),
          child: Column(
            children: [
              const _BoerdeMitAutomat(groesse: 132),
              const SizedBox(height: AppSpacing.s4),
              // Die Wortmarke ist eine Row mit fester Schriftgroesse und
              // laeuft unter 320 Punkten Breite rechts heraus. Das ist
              // kein Randfall: wer unter Android "Anzeigegroesse: sehr
              // gross" stellt, landet auf einem 360-Punkte-Geraet bei
              // rund 300. scaleDown verkleinert nur, wenn der Platz
              // fehlt, und laesst den Normalfall unveraendert.
              const FittedBox(
                fit: BoxFit.scaleDown,
                child: WordmarkLarge(size: 22),
              ),
              const SizedBox(height: AppSpacing.s2),
              // Der Claim. Gold auf #0C0A07 sind 12,1:1 — deutlich über den
              // 4,5:1, die WCAG 1.4.3 verlangt.
              Text(
                'Genießen. Geben. Gutes tun.',
                textAlign: TextAlign.center,
                style: AppTypography.body(
                  size: 12.5,
                  weight: FontWeight.w700,
                  color: AppColors.brand,
                ).copyWith(letterSpacing: 0.3),
              ),
              const SizedBox(height: AppSpacing.s8),
              Text(
                begruessung,
                textAlign: TextAlign.center,
                style: AppTypography.display(
                  size: 26,
                  weight: FontWeight.w800,
                  color: AppColors.onDark,
                ).copyWith(height: 1.1),
              ),
              const SizedBox(height: AppSpacing.s1),
              Text(
                titel,
                textAlign: TextAlign.center,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w600,
                  color: AppColors.brandLight,
                ),
              ),
              if (untertitel != null) ...[
                const SizedBox(height: AppSpacing.s3),
                Text(
                  untertitel!,
                  textAlign: TextAlign.center,
                  style: AppTypography.body(
                    size: 13,
                    color: AppColors.brandLight,
                  ).copyWith(height: 1.45),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

/// Der Umriss des Bördekreises mit dem Automaten darin — das Zeichen, das
/// Philipp als Logo für diese Seite benannt hat.
///
/// Beide Teile gibt es bereits einzeln ([BoerdeOutlinePainter],
/// [VendingMachineGlyph]); hier werden sie nur zusammengesetzt, damit die
/// Geometrie an einer Stelle liegt und nicht in jedem Bildschirm neu
/// erfunden wird.
class _BoerdeMitAutomat extends StatelessWidget {
  const _BoerdeMitAutomat({required this.groesse});

  final double groesse;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: groesse,
      height: groesse,
      child: Semantics(
        label: 'Bördesnack24 — Automat im Umriss des Bördekreises',
        image: true,
        child: Stack(
          alignment: Alignment.center,
          children: [
            CustomPaint(
              size: Size.square(groesse),
              painter: BoerdeOutlinePainter(stroke: 2.5),
            ),
            // 0,36 der Umrissbreite: der Automat ist 1,4-mal so hoch wie
            // breit und bleibt damit innerhalb des Polygons, auch an der
            // schmalsten Stelle.
            VendingMachineGlyph(
              size: groesse * 0.36,
              background: Colors.transparent,
            ),
          ],
        ),
      ),
    );
  }
}
