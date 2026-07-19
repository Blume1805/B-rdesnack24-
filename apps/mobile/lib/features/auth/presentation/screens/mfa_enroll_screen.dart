import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
  bool _busy = false;

  @override
  void dispose() {
    _codeCtrl.dispose();
    super.dispose();
  }

  Future<void> _confirm(String factorId) async {
    final l10n = AppLocalizations.of(context);
    setState(() => _busy = true);
    try {
      await ref.read(authRepositoryProvider).confirmTotpEnrollment(
            factorId: factorId,
            code: _codeCtrl.text.trim(),
          );
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.mfaActivated)),
      );
      unawaited(Navigator.of(context).maybePop());
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.errorGeneric)),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
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
                        icon: const Icon(Icons.copy),
                        onPressed: () => Clipboard.setData(
                          ClipboardData(text: data.secret),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: _codeCtrl,
                    keyboardType: TextInputType.number,
                    maxLength: 6,
                    decoration: InputDecoration(labelText: l10n.mfaCode),
                  ),
                  const SizedBox(height: 16),
                  FilledButton(
                    onPressed: _busy ? null : () => _confirm(data.factorId),
                    child: _busy
                        ? const SizedBox(
                            height: 20,
                            width: 20,
                            child: CircularProgressIndicator(strokeWidth: 2),
                          )
                        : Text(l10n.mfaActivate),
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
