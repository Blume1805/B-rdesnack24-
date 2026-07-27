import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/feedback.dart';
import '../../../../core/motion/motion.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../../domain/entities/mfa_enrollment.dart';
import '../controllers/auth_providers.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Startet eine TOTP-Einrichtung beim Öffnen des Screens.
final _enrollmentProvider = FutureProvider.autoDispose<MfaEnrollment>((ref) {
  return ref.watch(authRepositoryProvider).startTotpEnrollment();
});

/// MFA-Einrichtung (TOTP). Zeigt den manuellen Schlüssel und verifiziert den Code.
class MfaEnrollScreen extends ConsumerStatefulWidget {
  const MfaEnrollScreen({super.key});

  @override
  ConsumerState<MfaEnrollScreen> createState() => _MfaEnrollScreenState();
}

class _MfaEnrollScreenState extends ConsumerState<MfaEnrollScreen> {
  final _codeCtrl = TextEditingController();
  MorphState _state = MorphState.idle;
  String? _error;

  @override
  void dispose() {
    _codeCtrl.dispose();
    super.dispose();
  }

  Future<void> _confirm(String factorId) async {
    final l10n = AppLocalizations.of(context);
    final code = _codeCtrl.text.trim();
    if (code.length < 6) {
      setState(() => _error = 'Bitte alle 6 Stellen eingeben.');
      return;
    }
    setState(() {
      _state = MorphState.busy;
      _error = null;
    });
    try {
      await ref.read(authRepositoryProvider).confirmTotpEnrollment(
            factorId: factorId,
            code: code,
          );
      if (!mounted) return;
      // Erfolg bleibt am Button stehen, wo der Daumen gerade war —
      // danach erst zurück. Kurz sichtbar lassen, sonst nimmt man den
      // Umschlag nicht wahr.
      setState(() => _state = MorphState.success);
      Motion.success();
      await Future<void>.delayed(const Duration(milliseconds: 900));
      if (!mounted) return;
      showSuccessToast(context, l10n.mfaActivated);
      unawaited(Navigator.of(context).maybePop());
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _state = MorphState.idle;
        _error = 'Code stimmt nicht. Bitte neu eingeben.';
        _codeCtrl.clear();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final enrollment = ref.watch(_enrollmentProvider);

    return Scaffold(
      appBar: HeroAppBar(title: Text(l10n.mfaTitle)),
      body: enrollment.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text(l10n.errorGeneric)),
        data: (data) => Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 480),
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(l10n.mfaScanHint),
                  const SizedBox(height: 16),
                  Card(
                    child: ListTile(
                      title: Text(l10n.secretManual),
                      subtitle: SelectableText(data.secret),
                      trailing: IconButton(
                        tooltip: 'Schlüssel kopieren',
                        icon: const Icon(Icons.copy),
                        onPressed: () => Clipboard.setData(
                          ClipboardData(text: data.secret),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s6),
                  Text(
                    l10n.mfaCode,
                    textAlign: TextAlign.center,
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w700,
                      color: AppColors.textMuted,
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                  // Ziffernweise Eingabe statt einem Textfeld: man sieht
                  // beim Tippen, wie viele Stellen noch fehlen.
                  CodeInput(
                    controller: _codeCtrl,
                    autofocus: true,
                    enabled: _state == MorphState.idle,
                    errorText: _error,
                    onCompleted: (_) => _confirm(data.factorId),
                  ),
                  const SizedBox(height: AppSpacing.s5),
                  MorphButton(
                    label: l10n.mfaActivate,
                    successLabel: 'Aktiviert',
                    state: _state,
                    onPressed: () => _confirm(data.factorId),
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
