import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../theme/app_tokens.dart';
import '../theme/app_typography.dart';
import 'motion.dart';

/// Erfolgs-Toast mit gezeichnetem Haken + Haptik.
///
/// Ersetzt die nüchterne SnackBar bei abgeschlossenen Aktionen (Kauf,
/// Coupon aktiviert, Bonus erhalten). Bewusst code-basiert statt Lottie:
/// keine zusätzliche Abhängigkeit, kein Asset, exakt in Markenfarben.
void showSuccessToast(BuildContext context, String message) =>
    showAppToast(context, message, tone: ToastTone.success);

/// Tonalität einer Kurzmeldung.
///
/// Nachbau des vierteiligen Vorlagen-Sets (Success · Information · Error ·
/// Warning). Die Farben kommen aus den Status-Tokens statt aus der
/// Vorlage — deren Grün/Blau/Rot/Gelb stehen neben dem Marken-Gold sonst
/// wie Fremdkörper.
enum ToastTone {
  success(AppColors.statusPositive, Icons.check_circle),
  info(AppColors.statusInfo, Icons.info),
  warning(AppColors.statusWarning, Icons.warning_amber_rounded),
  error(AppColors.statusCritical, Icons.error);

  const ToastTone(this.accent, this.icon);

  final Color accent;
  final IconData icon;
}

/// Kurzmeldung am unteren Rand — mit farbiger Kante, Symbol und optionalem
/// Titel.
///
/// [title] setzt die Meldung zweizeilig (fette Überschrift, Erklärung
/// darunter) wie in der Vorlage; ohne Titel bleibt es einzeilig.
void showAppToast(
  BuildContext context,
  String message, {
  ToastTone tone = ToastTone.info,
  String? title,
  Duration duration = const Duration(seconds: 3),
}) {
  // Erfolg darf spürbar sein, Fehler auch — Info und Warnung bleiben still,
  // sonst vibriert die App bei jeder Kleinigkeit.
  switch (tone) {
    case ToastTone.success:
      Motion.success();
    case ToastTone.error:
      Motion.tap();
    case ToastTone.info:
    case ToastTone.warning:
      break;
  }

  final messenger = ScaffoldMessenger.maybeOf(context);
  if (messenger == null) return;
  messenger
    ..hideCurrentSnackBar()
    ..showSnackBar(
      SnackBar(
        behavior: SnackBarBehavior.floating,
        backgroundColor: AppColors.ink,
        duration: duration,
        padding: EdgeInsets.zero,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppRadii.md),
        ),
        content: Row(
          children: [
            // Farbige Kante links: die Tonalität ist erkennbar, bevor man
            // liest — genau wie in der Vorlage.
            Container(width: 5, height: 46, color: tone.accent),
            const SizedBox(width: AppSpacing.s3),
            if (tone == ToastTone.success)
              const AnimatedCheck(size: 22)
            else
              Icon(tone.icon, size: 22, color: tone.accent),
            const SizedBox(width: AppSpacing.s3),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: AppSpacing.s3),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (title != null) ...[
                      Text(
                        title,
                        style: AppTypography.body(
                          size: 13.5,
                          weight: FontWeight.w800,
                          color: AppColors.onDark,
                        ),
                      ),
                      const SizedBox(height: 2),
                    ],
                    Text(
                      message,
                      style: AppTypography.body(
                        size: title == null ? 13.5 : 12.5,
                        weight:
                            title == null ? FontWeight.w700 : FontWeight.w500,
                        color: title == null
                            ? AppColors.onDark
                            : AppColors.onDark.withValues(alpha: 0.86),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(width: AppSpacing.s3),
          ],
        ),
      ),
    );
}

/// Haken, der sich selbst zeichnet (Kreis + Häkchen).
class AnimatedCheck extends StatefulWidget {
  const AnimatedCheck({super.key, this.size = 24, this.color});
  final double size;
  final Color? color;

  @override
  State<AnimatedCheck> createState() => _AnimatedCheckState();
}

class _AnimatedCheckState extends State<AnimatedCheck>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 520),
  );

  @override
  void initState() {
    super.initState();
    _c.forward();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final color = widget.color ?? AppColors.brand;
    // Reduzierte Bewegung: fertiger Haken ohne Zeichen-Animation.
    if (Motion.reduced(context)) {
      return Icon(Icons.check_circle, size: widget.size, color: color);
    }
    return AnimatedBuilder(
      animation: _c,
      builder: (context, _) => CustomPaint(
        size: Size.square(widget.size),
        painter: _CheckPainter(progress: _c.value, color: color),
      ),
    );
  }
}

class _CheckPainter extends CustomPainter {
  _CheckPainter({required this.progress, required this.color});
  final double progress;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final stroke = size.width * 0.11;
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    // Phase 1 (0 – 0.6): Kreis zeichnen. Phase 2 (0.5 – 1): Haken.
    final circleT = Curves.easeOutCubic.transform(
      (progress / 0.6).clamp(0.0, 1.0),
    );
    final center = Offset(size.width / 2, size.height / 2);
    final radius = (size.width - stroke) / 2;
    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      -math.pi / 2,
      2 * math.pi * circleT,
      false,
      paint,
    );

    final checkT = Curves.easeOutCubic.transform(
      ((progress - 0.5) / 0.5).clamp(0.0, 1.0),
    );
    if (checkT <= 0) return;

    // Drei Punkte des Häkchens, relativ zur Box.
    final p1 = Offset(size.width * 0.28, size.height * 0.52);
    final p2 = Offset(size.width * 0.44, size.height * 0.68);
    final p3 = Offset(size.width * 0.73, size.height * 0.35);

    final firstLen = (p2 - p1).distance;
    final secondLen = (p3 - p2).distance;
    final total = firstLen + secondLen;
    final drawn = total * checkT;

    final path = Path()..moveTo(p1.dx, p1.dy);
    if (drawn <= firstLen) {
      final t = drawn / firstLen;
      path.lineTo(p1.dx + (p2.dx - p1.dx) * t, p1.dy + (p2.dy - p1.dy) * t);
    } else {
      path.lineTo(p2.dx, p2.dy);
      final t = ((drawn - firstLen) / secondLen).clamp(0.0, 1.0);
      path.lineTo(p2.dx + (p3.dx - p2.dx) * t, p2.dy + (p3.dy - p2.dy) * t);
    }
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(_CheckPainter old) =>
      old.progress != progress || old.color != color;
}

/// Kurzer Konfetti-Regen in Markenfarben — **sparsam einsetzen**.
///
/// Gedacht ausschließlich für echte Meilensteine (Aufstieg Bronze → Silber
/// → Gold). Läuft einmal ~1,6 s und entfernt sich selbst. Bei reduzierter
/// Bewegung passiert nichts.
void showCelebration(BuildContext context) {
  if (Motion.reduced(context)) return;
  final overlay = Overlay.maybeOf(context);
  if (overlay == null) return;
  Motion.success();

  late final OverlayEntry entry;
  entry = OverlayEntry(
    builder: (_) => _ConfettiLayer(onDone: () => entry.remove()),
  );
  overlay.insert(entry);
}

class _ConfettiLayer extends StatefulWidget {
  const _ConfettiLayer({required this.onDone});
  final VoidCallback onDone;

  @override
  State<_ConfettiLayer> createState() => _ConfettiLayerState();
}

class _ConfettiLayerState extends State<_ConfettiLayer>
    with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 1600),
  );
  late final List<_Particle> _particles;

  @override
  void initState() {
    super.initState();
    final rnd = math.Random();
    const colors = [
      AppColors.brand,
      AppColors.brandLight,
      AppColors.brandDark,
      AppColors.ink,
    ];
    _particles = List.generate(38, (i) {
      return _Particle(
        x: rnd.nextDouble(),
        delay: rnd.nextDouble() * 0.25,
        speed: 0.75 + rnd.nextDouble() * 0.5,
        drift: (rnd.nextDouble() - 0.5) * 0.25,
        size: 5 + rnd.nextDouble() * 6,
        spin: (rnd.nextDouble() - 0.5) * 8,
        color: colors[i % colors.length],
      );
    });
    _c.forward().whenComplete(widget.onDone);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // IgnorePointer: die Feier darf Bedienung nie blockieren.
    return IgnorePointer(
      child: AnimatedBuilder(
        animation: _c,
        builder: (context, _) => CustomPaint(
          size: Size.infinite,
          painter: _ConfettiPainter(t: _c.value, particles: _particles),
        ),
      ),
    );
  }
}

class _Particle {
  const _Particle({
    required this.x,
    required this.delay,
    required this.speed,
    required this.drift,
    required this.size,
    required this.spin,
    required this.color,
  });
  final double x;
  final double delay;
  final double speed;
  final double drift;
  final double size;
  final double spin;
  final Color color;
}

class _ConfettiPainter extends CustomPainter {
  _ConfettiPainter({required this.t, required this.particles});
  final double t;
  final List<_Particle> particles;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..style = PaintingStyle.fill;
    for (final p in particles) {
      final local = ((t - p.delay) / (1 - p.delay)).clamp(0.0, 1.0);
      if (local <= 0) continue;
      // Ausblenden im letzten Drittel, damit nichts hart verschwindet.
      final fade = local > 0.7 ? 1 - (local - 0.7) / 0.3 : 1.0;
      final dy = size.height * local * p.speed;
      final dx =
          p.x * size.width + math.sin(local * math.pi * 2) * 26 * p.drift;

      canvas.save();
      canvas.translate(dx, dy - size.height * 0.1);
      canvas.rotate(local * p.spin);
      paint.color = p.color.withValues(alpha: fade.clamp(0.0, 1.0));
      canvas.drawRRect(
        RRect.fromRectAndRadius(
          Rect.fromCenter(
            center: Offset.zero,
            width: p.size,
            height: p.size * 0.6,
          ),
          const Radius.circular(1.5),
        ),
        paint,
      );
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(_ConfettiPainter old) => old.t != t;
}
