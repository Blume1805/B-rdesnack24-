import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../theme/app_tokens.dart';

/// Zentrale Motion-Regeln der App.
///
/// Grundsätze (bewusst eng gefasst, damit Animation nie Selbstzweck wird):
///  * **Einheitliche Dauer/Easing** aus [AppMotion] — keine Ad-hoc-Werte.
///  * **Nie blockierend**: Animationen laufen über bereits vorhandenem
///    Inhalt; Daten warten nie auf eine Animation.
///  * **Barrierefrei**: Ist im System „Bewegung reduzieren" aktiv
///    (`MediaQuery.disableAnimations`, entspricht `prefers-reduced-motion`),
///    werden Bewegungen auf Dauer `Duration.zero` gesetzt bzw. auf ein
///    reines Ein-/Ausblenden reduziert.
abstract final class Motion {
  /// True, wenn der Nutzer reduzierte Bewegung angefordert hat.
  static bool reduced(BuildContext context) =>
      MediaQuery.maybeDisableAnimationsOf(context) ?? false;

  /// Dauer, die reduzierte Bewegung respektiert.
  static Duration duration(BuildContext context, Duration wanted) =>
      reduced(context) ? Duration.zero : wanted;

  /// Versatz für Slide-Animationen — bei reduzierter Bewegung 0 (reines Fade).
  static double offset(BuildContext context, double wanted) =>
      reduced(context) ? 0 : wanted;

  /// Haptisches Feedback für wichtige Aktionen. Fehler werden geschluckt:
  /// auf Web/Desktop gibt es keine Haptik, das darf nie den Flow stören.
  static void tap() {
    try {
      HapticFeedback.selectionClick();
    } catch (_) {/* keine Haptik verfügbar */}
  }

  /// Stärkeres Feedback für Erfolge (Kauf, Bonus, Stufenaufstieg).
  static void success() {
    try {
      HapticFeedback.mediumImpact();
    } catch (_) {/* keine Haptik verfügbar */}
  }
}

/// Seitenwechsel mit Fade + leichtem Slide-Up (16 px).
///
/// Wird als globaler `pageTransitionsTheme`-Ersatz für MaterialPageRoute
/// genutzt; respektiert reduzierte Bewegung (dann nur Fade).
class FadeSlidePageTransitionsBuilder extends PageTransitionsBuilder {
  const FadeSlidePageTransitionsBuilder();

  @override
  Widget buildTransitions<T>(
    PageRoute<T> route,
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child,
  ) {
    final curved = CurvedAnimation(
      parent: animation,
      curve: AppMotion.easeOut,
      reverseCurve: AppMotion.easeInOut,
    );
    final slide = Motion.reduced(context) ? 0.0 : 0.02; // ~16 px
    return FadeTransition(
      opacity: curved,
      child: SlideTransition(
        position: Tween<Offset>(
          begin: Offset(0, slide),
          end: Offset.zero,
        ).animate(curved),
        child: child,
      ),
    );
  }
}

/// Skaliert das Kind beim Antippen kurz herunter und federt zurück.
///
/// Spec: Karten/Buttons/Icons reagieren spürbar auf Berührung. Wir skalieren
/// beim Drücken auf 0.96 und lassen mit einer Feder zurückschwingen — das
/// wirkt wertiger als ein reines Aufblähen und verdeckt nichts.
class PressableScale extends StatefulWidget {
  const PressableScale({
    super.key,
    required this.child,
    this.onTap,
    this.haptic = true,
    this.pressedScale = 0.96,
  });

  final Widget child;
  final VoidCallback? onTap;
  final bool haptic;
  final double pressedScale;

  @override
  State<PressableScale> createState() => _PressableScaleState();
}

class _PressableScaleState extends State<PressableScale> {
  bool _down = false;

  void _set(bool v) {
    if (widget.onTap == null || !mounted) return;
    setState(() => _down = v);
  }

  @override
  Widget build(BuildContext context) {
    final enabled = widget.onTap != null;
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTapDown: (_) => _set(true),
      onTapUp: (_) => _set(false),
      onTapCancel: () => _set(false),
      onTap: enabled
          ? () {
              if (widget.haptic) Motion.tap();
              widget.onTap!.call();
            }
          : null,
      child: AnimatedScale(
        scale: _down ? widget.pressedScale : 1.0,
        duration: Motion.duration(context, AppMotion.fast),
        curve: AppMotion.easeOut,
        child: widget.child,
      ),
    );
  }
}

/// Zählt einen Zahlenwert animiert hoch/runter.
///
/// Für Preise, Punkte, Guthaben und Ersparnisse. [format] bestimmt die
/// Darstellung (z. B. `Formatters.euro`), damit die Komponente nichts über
/// Währungen wissen muss. Bei reduzierter Bewegung wird der Zielwert sofort
/// gesetzt.
class AnimatedCountUp extends StatelessWidget {
  const AnimatedCountUp({
    super.key,
    required this.value,
    required this.format,
    this.style,
    this.duration,
    this.maxLines = 1,
  });

  final double value;
  final String Function(double) format;
  final TextStyle? style;
  final Duration? duration;
  final int maxLines;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
      tween: Tween<double>(begin: value, end: value),
      duration: Motion.duration(context, duration ?? AppMotion.slow),
      curve: AppMotion.easeOut,
      builder: (context, v, _) => Text(
        format(v),
        style: style,
        maxLines: maxLines,
        overflow: TextOverflow.ellipsis,
      ),
    );
  }
}

/// Platzhalter-Fläche mit Shimmer — ersetzt Spinner beim Erstladen.
///
/// Bewusst ohne Zusatzpaket: ein LinearGradient wandert per
/// AnimationController über die Fläche. Bei reduzierter Bewegung bleibt eine
/// statische graue Fläche (kein Flackern).
class SkeletonBox extends StatefulWidget {
  const SkeletonBox({
    super.key,
    this.width,
    this.height = 14,
    this.radius = AppRadii.sm,
  });

  final double? width;
  final double height;
  final double radius;

  @override
  State<SkeletonBox> createState() => _SkeletonBoxState();
}

class _SkeletonBoxState extends State<SkeletonBox>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 1300),
  );

  @override
  void initState() {
    super.initState();
    _c.repeat();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const base = AppColors.borderSubtle;
    final radius = BorderRadius.circular(widget.radius);
    if (Motion.reduced(context)) {
      return Container(
        width: widget.width,
        height: widget.height,
        decoration: BoxDecoration(color: base, borderRadius: radius),
      );
    }
    return AnimatedBuilder(
      animation: _c,
      builder: (context, _) {
        // Der Glanzstreifen wandert von links nach rechts durch die Fläche.
        final t = _c.value * 2 - 1;
        return Container(
          width: widget.width,
          height: widget.height,
          decoration: BoxDecoration(
            borderRadius: radius,
            gradient: LinearGradient(
              begin: Alignment(t - 0.6, 0),
              end: Alignment(t + 0.6, 0),
              colors: [
                base,
                AppColors.surfaceCard.withValues(alpha: 0.85),
                base,
              ],
              stops: const [0.0, 0.5, 1.0],
            ),
          ),
        );
      },
    );
  }
}

/// Blendet das Kind beim Erscheinen weich ein und schiebt es dabei leicht
/// nach oben.
///
/// [index] staffelt den Start (Stagger), damit Listen nicht als Block
/// aufploppen, sondern nacheinander „einlaufen". Umgesetzt über eine
/// [Interval]-Kurve statt Timer — dadurch bleibt das Widget stateless und
/// es laufen keine Timer weiter, wenn die Liste vorher weggeräumt wird.
class FadeInUp extends StatelessWidget {
  const FadeInUp({
    super.key,
    required this.child,
    this.index = 0,
    this.offset = 12,
    this.duration,
    this.step = const Duration(milliseconds: 70),
  });

  final Widget child;
  final int index;
  final double offset;

  /// Eigene Laufzeit. Ohne Angabe [AppMotion.slow] — für den Einlauf
  /// ganzer Seiten darf es länger sein, sonst nimmt man ihn nicht wahr.
  final Duration? duration;

  /// Versatz zwischen den gestaffelten Elementen.
  final Duration step;

  @override
  Widget build(BuildContext context) {
    final step = this.step;
    final delay = step * index;
    final total = (duration ?? AppMotion.slow) + delay;
    final start = delay.inMilliseconds / total.inMilliseconds;
    final dy = Motion.offset(context, offset);
    return TweenAnimationBuilder<double>(
      tween: Tween<double>(begin: 0, end: 1),
      duration: Motion.duration(context, total),
      curve: Interval(start, 1, curve: AppMotion.easeOut),
      builder: (context, t, child) => Opacity(
        opacity: t.clamp(0.0, 1.0),
        child: Transform.translate(
          offset: Offset(0, (1 - t) * dy),
          child: child,
        ),
      ),
      child: child,
    );
  }
}

/// Ruhiger Puls-Ring um ein Element — signalisiert „hier passiert etwas".
///
/// Eingesetzt am QR-Code der Kundenkarte: der wandernde Glow lenkt den Blick
/// auf die Fläche, die an den Scanner gehalten werden soll. Bewusst langsam
/// (1,8 s) und mit geringer Deckkraft, damit es nicht blinkt. Bei reduzierter
/// Bewegung entfällt der Puls komplett.
class PulseGlow extends StatefulWidget {
  const PulseGlow({
    super.key,
    required this.child,
    this.color = AppColors.brand,
    this.maxSpread = 18,
  });

  final Widget child;
  final Color color;
  final double maxSpread;

  @override
  State<PulseGlow> createState() => _PulseGlowState();
}

class _PulseGlowState extends State<PulseGlow>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 1800),
  );

  @override
  void initState() {
    super.initState();
    _c.repeat(reverse: true);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (Motion.reduced(context)) return widget.child;
    return AnimatedBuilder(
      animation: CurvedAnimation(parent: _c, curve: AppMotion.easeInOut),
      builder: (context, child) {
        final t = Curves.easeInOut.transform(_c.value);
        return DecoratedBox(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppRadii.lg),
            boxShadow: [
              BoxShadow(
                color: widget.color.withValues(alpha: 0.10 + 0.22 * t),
                blurRadius: 12 + widget.maxSpread * t,
                spreadRadius: widget.maxSpread * t * 0.5,
              ),
            ],
          ),
          child: child,
        );
      },
      child: widget.child,
    );
  }
}

/// Fertige Skeleton-Karte für Listen (Bild-/Textzeilen-Platzhalter).
class SkeletonCard extends StatelessWidget {
  const SkeletonCard({super.key, this.height = 92});
  final double height;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.s3),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        border: Border.all(color: AppColors.borderSubtle),
        borderRadius: BorderRadius.circular(AppRadii.md),
      ),
      child: Row(
        children: [
          SkeletonBox(width: height - 24, height: height - 24),
          const SizedBox(width: AppSpacing.s3),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SkeletonBox(height: 12),
                SizedBox(height: 8),
                SkeletonBox(width: 120, height: 10),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
