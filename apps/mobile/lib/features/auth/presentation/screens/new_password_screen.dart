import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/auth/recovery_state.dart';
import '../../../../core/di/providers.dart';
import '../../../../core/router/app_router.dart';
import '../../../../core/security/pwned_password_checker.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Neues Passwort nach einem Link aus der Wiederherstellungs-E-Mail.
///
/// WARUM ES DIESEN BILDSCHIRM GIBT. Ein Wiederherstellungslink ist technisch
/// eine einmalige Anmeldung. Ohne eigene Maske landete man wortlos auf der
/// Startseite — angemeldet, aber ohne Passwort und ohne Hinweis darauf, dass
/// jetzt eines zu vergeben wäre. Wer das nicht weiß, ist beim nächsten Öffnen
/// wieder ausgesperrt.
///
/// WARUM DER BILDSCHIRM DEN LINK SELBST EINLÖST. Trägt die E-Mail einen
/// Einmal-Token (`token_hash`), löst diese Maske ihn hier ein. Das ist der
/// einzige Weg, der ohne Zutun des Browsers auskommt, in dem der Link
/// angefordert wurde: Der PKCE-Weg, den das SDK von sich aus wählt, braucht
/// einen im selben `localStorage` hinterlegten „Code Verifier" und scheitert,
/// sobald die Mail woanders geöffnet oder zwischendurch ein zweiter Link
/// angefordert wird. Beides ist am 04.09.2026 passiert
/// (`400: code challenge does not match previously saved code verifier`).
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

enum _Lage { pruefen, bereit, gescheitert }

class _NewPasswordScreenState extends ConsumerState<NewPasswordScreen> {
  _Lage _lage = _Lage.pruefen;
  String _grund = '';

  @override
  void initState() {
    super.initState();
    // Nach dem ersten Frame: vorher steht der ProviderScope für ref.read zwar
    // bereit, aber ein setState im initState-Pfad ist unnötig riskant.
    WidgetsBinding.instance.addPostFrameCallback((_) => _vorbereiten());
  }

  static const _standardGrund =
      'Dieser Link lässt sich nicht mehr einlösen. Das passiert, wenn er '
      'bereits benutzt wurde, wenn inzwischen ein neuer angefordert wurde '
      'oder wenn er in einem anderen Browser geöffnet wird als dem, in dem '
      'du ihn angefordert hast. Fordere einfach einen neuen an.';

  Future<void> _vorbereiten() async {
    final Wiederherstellungsweiche weiche;
    final GoTrueClient auth;
    try {
      weiche = ref.read(wiederherstellungProvider);
      auth = ref.read(supabaseClientProvider).auth;
    } catch (e) {
      // bootstrap() laesst die App auch dann starten, wenn Supabase nicht
      // hochkam (harter Timeout). Dann gibt es hier keinen Client -- und
      // eine unbehandelte Ausnahme im Post-Frame-Callback waere ein weisser
      // Bildschirm statt einer Erklaerung.
      if (!mounted) return;
      setState(() {
        _lage = _Lage.gescheitert;
        _grund = 'Die Verbindung zum Konto-Dienst steht gerade nicht. '
            'Bitte lade die Seite neu.';
      });
      return;
    }

    final token = weiche.tokenHash;
    if (token != null && token.isNotEmpty) {
      // Sofort verwerfen: der Token ist einmalig, ein zweiter Versuch
      // scheitert serverseitig mit "One-time token not found".
      weiche.tokenVerbraucht();
      try {
        await auth.verifyOTP(type: OtpType.recovery, tokenHash: token);
        if (!mounted) return;
        setState(() => _lage = _Lage.bereit);
        return;
      } catch (e) {
        if (!mounted) return;
        setState(() {
          _lage = _Lage.gescheitert;
          _grund = '${lesbarerFehler(e)}\n\n$_standardGrund';
        });
        return;
      }
    }

    if (auth.currentSession != null) {
      if (!mounted) return;
      setState(() => _lage = _Lage.bereit);
      return;
    }

    if (!mounted) return;
    setState(() {
      _lage = _Lage.gescheitert;
      final gemeldet = weiche.fehler;
      _grund = gemeldet == null ? _standardGrund : '$gemeldet\n\n$_standardGrund';
    });
  }

  void _neuenLinkAnfordern() {
    try {
      ref.read(wiederherstellungProvider).abschliessen();
    } catch (_) {
      // Ohne Supabase gibt es keine Weiche zu loesen -- der Weg zum Formular
      // darf daran trotzdem nicht scheitern.
    }
    context.go(AppRoutes.forgotPassword);
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
              child: switch (_lage) {
                _Lage.pruefen => const Padding(
                    padding: EdgeInsets.all(AppSpacing.s6),
                    child: Center(child: CircularProgressIndicator()),
                  ),
                _Lage.bereit => const NewPasswordForm(),
                _Lage.gescheitert => _Gescheitert(
                    grund: _grund,
                    onNeuerLink: _neuenLinkAnfordern,
                  ),
              },
            ),
          ),
        ),
      ),
    );
  }
}

/// Der ehrliche Ausgang: sagen, was nicht ging, und einen Weg anbieten.
///
/// Vorher endete genau dieser Fall auf der Startseite, ohne ein Wort. Wer
/// diesen Bildschirm entfernt, stellt das Schweigen wieder her.
class _Gescheitert extends StatelessWidget {
  const _Gescheitert({required this.grund, required this.onNeuerLink});

  final String grund;
  final VoidCallback onNeuerLink;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          'Der Link ist verbraucht',
          style: AppTypography.display(size: 20, weight: FontWeight.w700),
        ),
        const SizedBox(height: AppSpacing.s3),
        Text(grund, style: AppTypography.body(size: 14)),
        const SizedBox(height: AppSpacing.s5),
        FilledButton(
          onPressed: onNeuerLink,
          child: const Text('Neuen Link anfordern'),
        ),
      ],
    );
  }
}

/// Die eigentliche Eingabe. Getrennt vom Bildschirm, damit sie ohne laufende
/// Supabase-Instanz geprüft werden kann.
class NewPasswordForm extends ConsumerStatefulWidget {
  const NewPasswordForm({super.key});

  @override
  ConsumerState<NewPasswordForm> createState() => _NewPasswordFormState();
}

class _NewPasswordFormState extends ConsumerState<NewPasswordForm> {
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

      // Erst die Weiche loesen, dann springen. Andernfalls wirft die
      // Umleitung sofort wieder auf diese Maske zurueck -- eine Schleife.
      ref.read(wiederherstellungProvider).abschliessen();

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
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
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
                onPressed: () => setState(() => _sichtbar = !_sichtbar),
              ),
            ),
            validator: _pruefePasswort,
          ),
          const SizedBox(height: AppSpacing.s3),
          TextFormField(
            controller: _wdhCtrl,
            obscureText: !_sichtbar,
            autofillHints: const [AutofillHints.newPassword],
            decoration: const InputDecoration(labelText: 'Wiederholen'),
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
    );
  }
}
