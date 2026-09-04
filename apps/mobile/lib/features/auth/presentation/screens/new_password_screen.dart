import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/router/app_router.dart';
import '../../../../core/security/pwned_password_checker.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Neues Passwort nach einem Link aus der Wiederherstellungs-E-Mail.
///
/// WARUM ES DIESEN BILDSCHIRM GIBT. Ein Wiederherstellungslink ist technisch
/// eine einmalige Anmeldung: Supabase legt beim Öffnen eine Sitzung an. Ohne
/// eigene Maske landete man deshalb wortlos auf der Startseite — angemeldet,
/// aber ohne Passwort und ohne Hinweis darauf, dass jetzt eines zu vergeben
/// wäre. Wer das nicht weiß, ist beim nächsten Öffnen wieder ausgesperrt.
///
/// KEINE ABFRAGE DES ALTEN PASSWORTS. Beim Ändern im Profil wird zuerst mit
/// dem bisherigen Passwort neu angemeldet — dort ist das richtig, denn dort
/// sitzt jemand an einer offenen Sitzung. Hier ist der Link selbst der
/// Nachweis, und bei einem frisch angelegten Konto gibt es überhaupt kein
/// altes Passwort. Eine Abfrage wäre also nicht sicherer, sondern eine
/// unüberwindbare Hürde.
class NewPasswordScreen extends ConsumerStatefulWidget {
  const NewPasswordScreen({super.key});

  @override
  ConsumerState<NewPasswordScreen> createState() => _NewPasswordScreenState();
}

class _NewPasswordScreenState extends ConsumerState<NewPasswordScreen> {
  final _formKey = GlobalKey<FormState>();
  final _neuCtrl = TextEditingController();
  final _wdhCtrl = TextEditingController();
  bool _busy = false;
  bool _sichtbar = false;
  String? _fehler;

  @override
  void dispose() {
    _neuCtrl.dispose();
    _wdhCtrl.dispose();
    super.dispose();
  }

  String? _pruefePasswort(String? wert) {
    final p = wert ?? '';
    if (p.length < 10) return 'Mindestens 10 Zeichen.';
    if (!p.contains(RegExp(r'[A-Za-zÄÖÜäöüß]'))) {
      return 'Mindestens ein Buchstabe.';
    }
    if (!p.contains(RegExp(r'[0-9]'))) return 'Mindestens eine Ziffer.';
    return null;
  }

  Future<void> _speichern() async {
    setState(() => _fehler = null);
    if (!(_formKey.currentState?.validate() ?? false)) return;
    if (_neuCtrl.text != _wdhCtrl.text) {
      setState(() => _fehler = 'Die beiden Eingaben stimmen nicht überein.');
      return;
    }

    setState(() => _busy = true);
    try {
      // Dieselbe Leak-Prüfung wie beim Ändern im Profil. Sie schlägt bewusst
      // fehl-offen: ist der Dienst nicht erreichbar, blockiert das niemanden
      // aus, der gerade sein Konto zurückholen will.
      final treffer = await PwnedPasswordChecker().breachCount(_neuCtrl.text);
      if ((treffer ?? 0) > 0) {
        setState(() {
          _fehler = 'Dieses Passwort ist aus Datenlecks bekannt '
              '($treffer Fundstellen). Bitte wähle ein anderes.';
        });
        return;
      }

      await ref.read(supabaseClientProvider).auth.updateUser(
            UserAttributes(password: _neuCtrl.text),
          );

      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Passwort gesetzt. Du bist angemeldet.'),
        ),
      );
      context.go(AppRoutes.home);
    } on AuthException catch (e) {
      // Häufigster Fall: der Link ist abgelaufen oder schon benutzt.
      setState(() {
        _fehler = 'Das hat nicht geklappt: ${e.message} '
            'Fordere im Zweifel einen neuen Link an.';
      });
    } catch (e) {
      setState(() => _fehler = 'Das hat nicht geklappt: $e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Neues Passwort')),
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 420),
              child: Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text(
                      'Vergib jetzt ein Passwort für dein Konto. '
                      'Danach meldest du dich damit an.',
                      style: AppTypography.body(size: 14),
                    ),
                    const SizedBox(height: AppSpacing.s5),
                    TextFormField(
                      controller: _neuCtrl,
                      obscureText: !_sichtbar,
                      autofillHints: const [AutofillHints.newPassword],
                      decoration: InputDecoration(
                        labelText: 'Neues Passwort',
                        suffixIcon: IconButton(
                          icon: Icon(
                            _sichtbar
                                ? Icons.visibility_off_outlined
                                : Icons.visibility_outlined,
                          ),
                          tooltip: _sichtbar ? 'Verbergen' : 'Anzeigen',
                          onPressed: () =>
                              setState(() => _sichtbar = !_sichtbar),
                        ),
                      ),
                      validator: _pruefePasswort,
                    ),
                    const SizedBox(height: AppSpacing.s3),
                    TextFormField(
                      controller: _wdhCtrl,
                      obscureText: !_sichtbar,
                      autofillHints: const [AutofillHints.newPassword],
                      decoration: const InputDecoration(
                        labelText: 'Wiederholen',
                      ),
                      validator: _pruefePasswort,
                    ),
                    if (_fehler != null) ...[
                      const SizedBox(height: AppSpacing.s3),
                      Text(
                        _fehler!,
                        style: AppTypography.body(
                          size: 13,
                          color: AppColors.statusCritical,
                        ),
                      ),
                    ],
                    const SizedBox(height: AppSpacing.s5),
                    FilledButton(
                      onPressed: _busy ? null : _speichern,
                      child: _busy
                          ? const SizedBox(
                              height: 18,
                              width: 18,
                              child: CircularProgressIndicator(strokeWidth: 2),
                            )
                          : const Text('Passwort speichern'),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
