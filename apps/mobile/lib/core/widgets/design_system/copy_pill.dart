import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/semantics.dart';
import 'package:flutter/services.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import '../motion/motion.dart';

/// Pattern M11 „Copy-Pill" aus `motion/MOTION.md`: ein Wert in einer Pill,
/// rechts daneben „Kopieren". Nach dem Tippen bestätigt die Pill selbst,
/// ohne Hinweisleiste, mit leichter Haptik, und kehrt nach 1,8 s zurück.
///
/// Bewegt werden nur `transform` und `opacity` (Abschnitt 1 der
/// Spezifikation):
/// * Die Pill springt von [AppMotion.pressScale] mit [AppMotion.easeBounce]
///   auf 1 zurück.
/// * Der goldene Rand der Bestätigung blendet über `opacity` ein; die
///   Randfarbe selbst wird nie animiert.
/// * „Kopieren" und „Kopiert" liegen beide ständig im Layout und blenden nur
///   über. Die Schaltfläche behält damit ihre Breite, nichts daneben
///   verschiebt sich.
///
/// „Bewegung reduzieren": Beschriftung und Rand wechseln sofort, ohne
/// Skalierung. Die Bestätigung selbst bleibt, weil sie Inhalt ist und nicht
/// Bewegung. Bildschirmleser hören „In die Zwischenablage kopiert".
class CopyPill extends StatefulWidget {
  const CopyPill({
    super.key,
    required this.value,
    required this.semanticLabel,
    this.copyText,
    this.valueStyle,
  });

  /// Angezeigter Wert, darf zum Lesen formatiert sein (z. B. „482 130").
  final String value;

  /// Was der Wert ist, für Bildschirmleser (z. B. „Einlöse-Code").
  final String semanticLabel;

  /// Kopierter Text, wenn er vom angezeigten abweicht (z. B. ohne
  /// Leerzeichen). Standard ist [value].
  final String? copyText;

  /// Schrift des Werts. Standard: kräftige Fließtextschrift in [AppColors.textStrong].
  final TextStyle? valueStyle;

  @override
  State<CopyPill> createState() => _CopyPillState();
}

enum _CopyState { idle, copied, failed }

class _CopyPillState extends State<CopyPill>
    with SingleTickerProviderStateMixin {
  /// „nach 1.8s zurück" (`motion/MOTION.md`, M11).
  static const _hold = Duration(milliseconds: 1800);

  late final AnimationController _pop = AnimationController(
    vsync: this,
    duration: AppMotion.base,
    value: 1,
  );
  _CopyState _state = _CopyState.idle;
  Timer? _reset;

  @override
  void dispose() {
    _reset?.cancel();
    _pop.dispose();
    super.dispose();
  }

  Future<void> _copy() async {
    var ok = true;
    try {
      await Clipboard.setData(
        ClipboardData(text: widget.copyText ?? widget.value),
      );
    } catch (_) {
      // Im Browser kann die Zwischenablage gesperrt sein (fehlende
      // Berechtigung, unsichere Verbindung). Dann ehrlich melden.
      ok = false;
    }
    if (!mounted) return;
    if (ok) unawaited(HapticFeedback.lightImpact());
    setState(() => _state = ok ? _CopyState.copied : _CopyState.failed);
    if (ok && motionAllowed(context)) unawaited(_pop.forward(from: 0));
    unawaited(
      SemanticsService.sendAnnouncement(
        View.of(context),
        ok ? 'In die Zwischenablage kopiert' : 'Kopieren nicht möglich',
        Directionality.of(context),
      ),
    );
    _reset?.cancel();
    _reset = Timer(_hold, () {
      if (mounted) setState(() => _state = _CopyState.idle);
    });
  }

  @override
  Widget build(BuildContext context) {
    final fade = motionAllowed(context) ? AppMotion.base : Duration.zero;
    final copied = _state == _CopyState.copied;
    final radius = BorderRadius.circular(AppRadii.pill);

    final pill = Stack(
      children: [
        Container(
          // Innenabstand wie in der Spezifikation: 8 px, links 20 px.
          padding: const EdgeInsets.fromLTRB(20, 8, 8, 8),
          decoration: BoxDecoration(
            borderRadius: radius,
            border: Border.all(color: AppColors.borderSubtle),
          ),
          child: Row(
            children: [
              Expanded(
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(
                    widget.value,
                    maxLines: 1,
                    semanticsLabel: '${widget.semanticLabel}: ${widget.value}',
                    style: widget.valueStyle ??
                        AppTypography.body(
                          size: 15,
                          weight: FontWeight.w700,
                          color: AppColors.textStrong,
                        ),
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              _CopyButton(
                state: _state,
                fade: fade,
                semanticLabel: '${widget.semanticLabel} kopieren',
                onPressed: _copy,
              ),
            ],
          ),
        ),
        // Goldener Rand der Bestätigung: nur opacity, nie die Randfarbe.
        Positioned.fill(
          child: IgnorePointer(
            child: AnimatedOpacity(
              opacity: copied ? 1 : 0,
              duration: fade,
              curve: AppMotion.easeOut,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: radius,
                  border: Border.all(color: AppColors.brand, width: 1.5),
                ),
              ),
            ),
          ),
        ),
      ],
    );

    return AnimatedBuilder(
      animation: _pop,
      child: pill,
      builder: (context, child) {
        final t = AppMotion.easeBounce.transform(_pop.value);
        return Transform.scale(
          scale: AppMotion.pressScale + (1 - AppMotion.pressScale) * t,
          child: child,
        );
      },
    );
  }
}

/// Schaltfläche der Pill. Alle drei Beschriftungen liegen übereinander im
/// Layout; sichtbar ist nur die zum Zustand passende. So bleibt die Breite
/// fest (kein Layout-Sprung).
class _CopyButton extends StatelessWidget {
  const _CopyButton({
    required this.state,
    required this.fade,
    required this.semanticLabel,
    required this.onPressed,
  });

  final _CopyState state;
  final Duration fade;
  final String semanticLabel;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    Widget label(_CopyState s, IconData icon, String text) => AnimatedOpacity(
          opacity: state == s ? 1 : 0,
          duration: fade,
          curve: AppMotion.easeOut,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 18, color: AppColors.onBrand),
              const SizedBox(width: 6),
              Text(text),
            ],
          ),
        );

    return Semantics(
      button: true,
      label: semanticLabel,
      excludeSemantics: true,
      child: FilledButton(
        onPressed: onPressed,
        style: FilledButton.styleFrom(
          backgroundColor: AppColors.brand,
          foregroundColor: AppColors.onBrand,
          // Mindestens 44 × 44 Berührungsfläche.
          minimumSize: const Size(44, 44),
          padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s4),
          shape: const StadiumBorder(),
          textStyle: AppTypography.body(size: 14, weight: FontWeight.w800),
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            label(_CopyState.idle, Icons.copy_outlined, 'Kopieren'),
            label(_CopyState.copied, Icons.check_rounded, 'Kopiert'),
            label(_CopyState.failed, Icons.block_outlined, 'Fehler'),
          ],
        ),
      ),
    );
  }
}
