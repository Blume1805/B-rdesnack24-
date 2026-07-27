import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../motion/motion.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';

/// Ziffernweise Code-Eingabe mit einzelnen Feldern.
///
/// Nachbau der Vorlage „Security Verification": die Kästchen füllen sich
/// eins nach dem anderen, das aktive Feld hebt sich durch Gold-Rahmen und
/// leichten Schein hervor, eine eingetippte Ziffer springt kurz auf.
///
/// Bewusst ein einzelnes, unsichtbares [TextField] hinter den Kästchen statt
/// [length] echter Felder: nur so funktionieren Einfügen aus der
/// Zwischenablage, SMS-Autofill und die Rücktaste über Feldgrenzen hinweg
/// zuverlässig. Die Kästchen sind reine Darstellung.
class CodeInput extends StatefulWidget {
  const CodeInput({
    super.key,
    required this.controller,
    this.length = 6,
    this.onCompleted,
    this.enabled = true,
    this.autofocus = false,
    this.errorText,
  });

  final TextEditingController controller;
  final int length;

  /// Wird gerufen, sobald alle Stellen befüllt sind.
  final ValueChanged<String>? onCompleted;

  final bool enabled;
  final bool autofocus;

  /// Bei gesetztem Text färben sich die Kästchen rot und wackeln einmal.
  final String? errorText;

  @override
  State<CodeInput> createState() => _CodeInputState();
}

class _CodeInputState extends State<CodeInput>
    with SingleTickerProviderStateMixin {
  final _focus = FocusNode();
  late final AnimationController _shake;

  @override
  void initState() {
    super.initState();
    _shake = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 420),
    );
    widget.controller.addListener(_onChanged);
    _focus.addListener(_rebuild);
  }

  @override
  void didUpdateWidget(CodeInput old) {
    super.didUpdateWidget(old);
    if (old.controller != widget.controller) {
      old.controller.removeListener(_onChanged);
      widget.controller.addListener(_onChanged);
    }
    // Neuer Fehler → einmal wackeln. Nicht bei reduzierter Bewegung.
    final gotError = widget.errorText != null && old.errorText == null;
    if (gotError && !Motion.reduced(context)) {
      _shake.forward(from: 0);
    }
  }

  @override
  void dispose() {
    widget.controller.removeListener(_onChanged);
    _focus
      ..removeListener(_rebuild)
      ..dispose();
    _shake.dispose();
    super.dispose();
  }

  void _rebuild() {
    if (mounted) setState(() {});
  }

  void _onChanged() {
    if (!mounted) return;
    setState(() {});
    final text = widget.controller.text;
    if (text.length == widget.length) {
      Motion.tap();
      widget.onCompleted?.call(text);
    }
  }

  @override
  Widget build(BuildContext context) {
    final code = widget.controller.text;
    final hasError = widget.errorText != null;

    final boxes = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        for (var i = 0; i < widget.length; i++) ...[
          if (i > 0) const SizedBox(width: AppSpacing.s2),
          Flexible(
            child: _CodeBox(
              digit: i < code.length ? code[i] : null,
              // Aktiv ist das erste leere Feld, solange der Fokus liegt.
              active: widget.enabled && _focus.hasFocus && i == code.length,
              hasError: hasError,
            ),
          ),
        ],
      ],
    );

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Stack(
          children: [
            AnimatedBuilder(
              animation: _shake,
              builder: (context, child) {
                // Abklingender Ausschlag: zwei volle Schwingungen.
                final t = _shake.value;
                final dx = t == 0 ? 0.0 : (1 - t) * 8 * _sin4Pi(t);
                return Transform.translate(
                  offset: Offset(dx, 0),
                  child: child,
                );
              },
              child: boxes,
            ),
            // Das echte Eingabefeld liegt unsichtbar über den Kästchen und
            // fängt Tastatur, Autofill und Einfügen ab.
            Positioned.fill(
              child: Opacity(
                opacity: 0,
                child: TextField(
                  controller: widget.controller,
                  focusNode: _focus,
                  enabled: widget.enabled,
                  autofocus: widget.autofocus,
                  keyboardType: TextInputType.number,
                  autofillHints: const [AutofillHints.oneTimeCode],
                  enableInteractiveSelection: false,
                  showCursor: false,
                  maxLength: widget.length,
                  style: const TextStyle(height: 1),
                  inputFormatters: [
                    FilteringTextInputFormatter.digitsOnly,
                    LengthLimitingTextInputFormatter(widget.length),
                  ],
                  decoration: const InputDecoration(
                    counterText: '',
                    border: InputBorder.none,
                  ),
                ),
              ),
            ),
          ],
        ),
        if (hasError) ...[
          const SizedBox(height: AppSpacing.s2),
          Text(
            widget.errorText!,
            textAlign: TextAlign.center,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.statusCritical,
            ),
          ),
        ],
      ],
    );
  }

  /// sin(4π·t) ohne dart:math-Import — zwei Schwingungen über [0,1].
  static double _sin4Pi(double t) {
    // Dreieckswelle statt echtem Sinus: für einen Shake nicht
    // unterscheidbar und ohne Zusatzimport.
    final x = (t * 4) % 1.0;
    return x < 0.5 ? (x * 4 - 1) : (3 - x * 4);
  }
}

/// Ein einzelnes Ziffernkästchen.
class _CodeBox extends StatelessWidget {
  const _CodeBox({
    required this.digit,
    required this.active,
    required this.hasError,
  });

  final String? digit;
  final bool active;
  final bool hasError;

  @override
  Widget build(BuildContext context) {
    final filled = digit != null;
    final border = hasError
        ? AppColors.statusCritical
        : active
            ? AppColors.brand
            : filled
                ? AppColors.ink
                : AppColors.borderSubtle;

    return AnimatedContainer(
      duration: Motion.duration(context, AppMotion.fast),
      curve: AppMotion.easeOut,
      height: 58,
      constraints: const BoxConstraints(maxWidth: 56),
      decoration: BoxDecoration(
        color: filled ? AppColors.surfaceCard : AppColors.surfaceAlt,
        borderRadius: BorderRadius.circular(AppRadii.md),
        border: Border.all(color: border, width: active || filled ? 2 : 1),
        boxShadow: active ? AppShadows.gold : null,
      ),
      alignment: Alignment.center,
      child: AnimatedSwitcher(
        duration: Motion.duration(context, AppMotion.fast),
        transitionBuilder: (child, animation) => ScaleTransition(
          // Frisch getippte Ziffer springt kurz auf.
          scale: Tween<double>(begin: 0.6, end: 1).animate(
            CurvedAnimation(parent: animation, curve: AppMotion.easeOut),
          ),
          child: FadeTransition(opacity: animation, child: child),
        ),
        child: Text(
          digit ?? '',
          key: ValueKey(digit),
          style: AppTypography.display(
            size: 24,
            weight: FontWeight.w800,
            color: AppColors.ink,
          ),
        ),
      ),
    );
  }
}

/// Zustand eines [MorphButton].
enum MorphState { idle, busy, success }

/// Aktions-Button, der nach Erfolg in eine Bestätigung umklappt.
///
/// Nachbau des „Continue → Success"-Umschlags aus der Vorlage: derselbe
/// Button wechselt Farbe und Beschriftung, statt dass eine Meldung an
/// anderer Stelle erscheint — die Rückmeldung bleibt dort, wo der Daumen
/// gerade war.
class MorphButton extends StatelessWidget {
  const MorphButton({
    super.key,
    required this.label,
    required this.successLabel,
    required this.state,
    this.onPressed,
  });

  final String label;
  final String successLabel;
  final MorphState state;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final success = state == MorphState.success;
    final busy = state == MorphState.busy;

    return AnimatedContainer(
      duration: Motion.duration(context, AppMotion.base),
      curve: AppMotion.easeOut,
      height: 52,
      decoration: BoxDecoration(
        color: success ? AppColors.statusPositive : AppColors.ink,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        boxShadow: success ? null : AppShadows.base,
      ),
      clipBehavior: Clip.antiAlias,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: success || busy ? null : onPressed,
          child: Center(
            child: AnimatedSwitcher(
              duration: Motion.duration(context, AppMotion.base),
              child: busy
                  ? const SizedBox(
                      key: ValueKey('busy'),
                      height: 20,
                      width: 20,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        color: AppColors.brand,
                      ),
                    )
                  : Row(
                      key: ValueKey(success),
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        if (success) ...[
                          const Icon(
                            Icons.check_circle,
                            color: AppColors.onDark,
                            size: 20,
                          ),
                          const SizedBox(width: AppSpacing.s2),
                        ],
                        Text(
                          success ? successLabel : label,
                          style: AppTypography.body(
                            size: 15,
                            weight: FontWeight.w800,
                            color: success ? AppColors.onDark : AppColors.brand,
                          ),
                        ),
                      ],
                    ),
            ),
          ),
        ),
      ),
    );
  }
}
