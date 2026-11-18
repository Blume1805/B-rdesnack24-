import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../controllers/auth_providers.dart';

/// Code-Abfrage nach der Anmeldung für Konten mit eingerichtetem zweiten
/// Faktor. Der Router leitet hierher, solange die Sitzung nur mit Passwort
/// angemeldet ist ([brauchtZweitenFaktor]). Nach erfolgreicher Prüfung meldet
/// Supabase `mfaChallengeVerified`, der Router wertet neu aus und gibt den
/// Weg zur Startseite frei.
class MfaVerifyScreen extends ConsumerStatefulWidget {
  const MfaVerifyScreen({super.key});

  @override
  ConsumerState<MfaVerifyScreen> createState() => _MfaVerifyScreenState();
}

class _MfaVerifyScreenState extends ConsumerState<MfaVerifyScreen> {
  final _codeCtrl = TextEditingController();
  bool _busy = false;
  String? _fehler;

  @override
  void dispose() {
    _codeCtrl.dispose();
    super.dispose();
  }

  String? _faktorId() {
    final faktoren =
        ref.read(supabaseClientProvider).auth.currentUser?.factors ?? const [];
    for (final f in faktoren) {
      if (f.factorType == FactorType.totp &&
          f.status == FactorStatus.verified) {
        return f.id;
      }
    }
    return null;
  }

  Future<void> _pruefen() async {
    final id = _faktorId();
    final code = _codeCtrl.text.trim();
    if (id == null || code.length != 6) {
      setState(() => _fehler = 'Bitte den sechsstelligen Code eingeben.');
      return;
    }
    setState(() {
      _busy = true;
      _fehler = null;
    });
    try {
      // Prüft den Code gegen den bestehenden Faktor (Challenge + Verify) und
      // hebt die Sitzung auf aal2. Dieselbe Methode wie beim Einrichten.
      await ref
          .read(authRepositoryProvider)
          .confirmTotpEnrollment(factorId: id, code: code);
    } catch (_) {
      if (mounted) {
        setState(
          () => _fehler = 'Der Code stimmt nicht. Bitte den aktuellen '
              'Code aus der Authenticator-App eingeben.',
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    return MarkenScaffold(
      appBar: HeroAppBar(title: Text(l10n.mfaTitle)),
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480),
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Text(
                  'Dein Konto ist mit einem zweiten Faktor geschützt. Gib den '
                  'sechsstelligen Code aus Deiner Authenticator-App ein.',
                ),
                const SizedBox(height: 16),
                TextField(
                  key: const Key('mfa-verify-code'),
                  controller: _codeCtrl,
                  keyboardType: TextInputType.number,
                  maxLength: 6,
                  autofocus: true,
                  autofillHints: const [AutofillHints.oneTimeCode],
                  decoration: InputDecoration(
                    labelText: l10n.mfaCode,
                    errorText: _fehler,
                  ),
                  onSubmitted: (_) => _busy ? null : _pruefen(),
                ),
                const SizedBox(height: 16),
                FilledButton(
                  onPressed: _busy ? null : _pruefen,
                  child: _busy
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(strokeWidth: 2),
                        )
                      : const Text('Bestätigen'),
                ),
                const SizedBox(height: 8),
                TextButton(
                  onPressed: _busy
                      ? null
                      : () => ref.read(supabaseClientProvider).auth.signOut(),
                  child: const Text('Abmelden'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
