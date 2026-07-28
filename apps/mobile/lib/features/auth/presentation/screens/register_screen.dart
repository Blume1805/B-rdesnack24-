import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/router/app_router.dart';
import '../../../../core/security/pwned_password_checker.dart';
import '../../../../core/utils/validators.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../../../customer/data/referral_code_inbox.dart';
import '../controllers/auth_providers.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Self-Signup ausschließlich für Kunden. Interne Nutzer werden eingeladen.
/// Registrierung verlangt eine ausdrückliche Zustimmung zu Datenschutz- und
/// Nutzungsbedingungen (Art. 6 (1) a i.V.m. Art. 7 DSGVO). Die Einwilligung
/// wird nach erfolgreicher Anmeldung revisionssicher in `consents` erfasst.
class RegisterScreen extends ConsumerStatefulWidget {
  const RegisterScreen({super.key});

  @override
  ConsumerState<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends ConsumerState<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();
  final _confirmCtrl = TextEditingController();

  // Neu: Kundenart + Unternehmer-Felder
  String _customerType = 'private';
  final _companyCtrl = TextEditingController();
  final _streetCtrl = TextEditingController();
  final _zipCtrl = TextEditingController();
  final _cityCtrl = TextEditingController();
  final _countryCtrl = TextEditingController(text: 'DE');
  final _taxNumberCtrl = TextEditingController();
  final _vatIdCtrl = TextEditingController();

  DateTime? _birthDate;
  final _referralCtrl = TextEditingController();
  bool _acceptPrivacy = false;
  bool _acceptTerms = false;
  bool _triedSubmit = false;

  @override
  void dispose() {
    _nameCtrl.dispose();
    _emailCtrl.dispose();
    _passwordCtrl.dispose();
    _confirmCtrl.dispose();
    _companyCtrl.dispose();
    _streetCtrl.dispose();
    _zipCtrl.dispose();
    _cityCtrl.dispose();
    _countryCtrl.dispose();
    _taxNumberCtrl.dispose();
    _vatIdCtrl.dispose();
    _referralCtrl.dispose();
    super.dispose();
  }

  Future<void> _pickBirthDate() async {
    final now = DateTime.now();
    final picked = await showDatePicker(
      context: context,
      initialDate: _birthDate ?? DateTime(now.year - 25, now.month, now.day),
      firstDate: DateTime(now.year - 120),
      lastDate: DateTime(now.year - 14, now.month, now.day),
      locale: const Locale('de'),
      helpText: 'Geburtsdatum wählen',
    );
    if (picked != null) setState(() => _birthDate = picked);
  }

  String _formatDate(DateTime d) =>
      '${d.day.toString().padLeft(2, '0')}.${d.month.toString().padLeft(2, '0')}.${d.year}';

  /// Baut ein Label mit schwarzem Stern („*") für Pflichtfelder.
  /// Der Rest des Labels erbt die normale Farbe des Formulars.
  Widget _requiredLabel(String text) {
    return Text.rich(
      TextSpan(
        text: text,
        children: const [
          TextSpan(
            text: ' *',
            style: TextStyle(color: Colors.black, fontWeight: FontWeight.w800),
          ),
        ],
      ),
    );
  }

  Future<void> _submit() async {
    setState(() => _triedSubmit = true);
    final l10n = AppLocalizations.of(context);
    if (!(_formKey.currentState?.validate() ?? false)) return;
    if (_passwordCtrl.text != _confirmCtrl.text) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.passwordsDontMatch)),
      );
      return;
    }
    if (_birthDate == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Bitte Geburtsdatum wählen.')),
      );
      return;
    }
    if (!(_acceptPrivacy && _acceptTerms)) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.consentRequired)),
      );
      return;
    }

    // Bei Unternehmer: Firmenname + Anschrift + Steuernummer sind Pflicht.
    if (_customerType == 'business') {
      final missing = <String>[];
      if (_companyCtrl.text.trim().isEmpty) missing.add('Firmenname');
      if (_streetCtrl.text.trim().isEmpty) missing.add('Straße + Hausnr.');
      if (_zipCtrl.text.trim().isEmpty) missing.add('PLZ');
      if (_cityCtrl.text.trim().isEmpty) missing.add('Ort');
      if (_taxNumberCtrl.text.trim().isEmpty) missing.add('Steuernummer');
      if (missing.isNotEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Bitte ausfüllen: ${missing.join(', ')}')),
        );
        return;
      }
    }

    // Leak-Check gegen HaveIBeenPwned (k-Anonymity, fail-open bei
    // Netzwerkfehlern) — Ersatz für die Pro-Plan-Prüfung von Supabase.
    final breaches =
        await PwnedPasswordChecker().breachCount(_passwordCtrl.text);
    if (!mounted) return;
    if ((breaches ?? 0) > 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Dieses Passwort ist aus Datenlecks bekannt '
            '($breaches Fundstellen) und kann nicht verwendet werden. '
            'Bitte wähle ein anderes.',
          ),
        ),
      );
      return;
    }

    final ok = await ref.read(authControllerProvider.notifier).registerCustomer(
          _emailCtrl.text,
          _passwordCtrl.text,
          fullName:
              _nameCtrl.text.trim().isEmpty ? null : _nameCtrl.text.trim(),
          birthDate: _birthDate,
          customerType: _customerType,
          companyName: _companyCtrl.text.trim().isEmpty
              ? null
              : _companyCtrl.text.trim(),
          billingStreet:
              _streetCtrl.text.trim().isEmpty ? null : _streetCtrl.text.trim(),
          billingZip:
              _zipCtrl.text.trim().isEmpty ? null : _zipCtrl.text.trim(),
          billingCity:
              _cityCtrl.text.trim().isEmpty ? null : _cityCtrl.text.trim(),
          billingCountry: _countryCtrl.text.trim().isEmpty
              ? null
              : _countryCtrl.text.trim(),
          taxNumber: _taxNumberCtrl.text.trim().isEmpty
              ? null
              : _taxNumberCtrl.text.trim(),
          vatId: _vatIdCtrl.text.trim().isEmpty ? null : _vatIdCtrl.text.trim(),
        );
    if (!mounted) return;
    if (ok) {
      // Nach erfolgreicher Anmeldung: Consent im Log persistieren
      // (kann fehlschlagen, ohne die Registrierung zu blockieren).
      unawaited(_persistConsents());
      if (_referralCtrl.text.trim().isNotEmpty) {
        unawaited(ReferralCodeInbox.remember(_referralCtrl.text));
      }
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.registerSuccess)),
      );
      context.go(AppRoutes.signIn);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.errorGeneric)),
      );
    }
  }

  Future<void> _persistConsents() async {
    try {
      final client = ref.read(supabaseClientProvider);
      final uid = client.auth.currentUser?.id;
      if (uid == null) return;
      await client.from('consents').insert([
        {'profile_id': uid, 'type': 'privacy', 'granted': true},
        {'profile_id': uid, 'type': 'terms', 'granted': true},
      ]);
    } catch (_) {
      // Nicht kritisch: bei fehlender Verbindung/RLS-Ablehnung ignorieren.
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final isLoading = ref.watch(authControllerProvider).isLoading;

    return Scaffold(
      appBar: HeroAppBar(title: Text(l10n.registerTitle)),
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 420),
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Kundentyp-Umschalter — Privatperson oder Unternehmer
                  SegmentedButton<String>(
                    segments: const [
                      ButtonSegment(
                        value: 'private',
                        icon: Icon(Icons.person_outline),
                        label: Text('Privat'),
                      ),
                      ButtonSegment(
                        value: 'business',
                        icon: Icon(Icons.business_center_outlined),
                        label: Text('Unternehmer'),
                      ),
                    ],
                    selected: {_customerType},
                    onSelectionChanged: (s) =>
                        setState(() => _customerType = s.first),
                  ),
                  const SizedBox(height: 8),
                  if (_customerType == 'business')
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8),
                      child: Text(
                        'Für § 14 UStG-konforme Rechnungen benötigen wir '
                        'Anschrift + Steuernummer. USt-IdNr. ist optional.',
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                    ),
                  const SizedBox(height: 8),
                  TextFormField(
                    controller: _nameCtrl,
                    decoration: InputDecoration(labelText: l10n.fullName),
                  ),
                  const SizedBox(height: 16),
                  // Geburtsdatum — DSGVO Art. 8 (Kinder-Schutz): unter 14
                  // schließt der DatePicker automatisch aus.
                  InkWell(
                    onTap: _pickBirthDate,
                    child: InputDecorator(
                      decoration: InputDecoration(
                        label: _requiredLabel('Geburtsdatum'),
                        prefixIcon: const Icon(Icons.cake_outlined, size: 20),
                        errorText: _triedSubmit && _birthDate == null
                            ? 'Bitte Geburtsdatum wählen'
                            : null,
                      ),
                      child: Text(
                        _birthDate == null ? '' : _formatDate(_birthDate!),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _emailCtrl,
                    keyboardType: TextInputType.emailAddress,
                    decoration:
                        InputDecoration(label: _requiredLabel(l10n.email)),
                    validator: (v) => switch (Validators.email(v)) {
                      'required' => l10n.fieldRequired,
                      'invalid' => l10n.emailInvalid,
                      _ => null,
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _passwordCtrl,
                    obscureText: true,
                    decoration:
                        InputDecoration(label: _requiredLabel(l10n.password)),
                    validator: (v) => switch (Validators.password(v)) {
                      'required' => l10n.fieldRequired,
                      'tooShort' => l10n.passwordTooShort,
                      'complexity' => l10n.passwordComplexity,
                      _ => null,
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _confirmCtrl,
                    obscureText: true,
                    decoration: InputDecoration(
                      label: _requiredLabel(l10n.confirmPassword),
                    ),
                    onFieldSubmitted: (_) => _submit(),
                  ),
                  const SizedBox(height: 16),
                  // Optional: Empfehlungscode. Eingelöst wird er erst nach
                  // dem ersten Login — register_referral braucht eine
                  // angemeldete Sitzung, und dazwischen liegt die
                  // E-Mail-Bestätigung.
                  TextFormField(
                    controller: _referralCtrl,
                    textCapitalization: TextCapitalization.characters,
                    decoration: const InputDecoration(
                      labelText: 'Empfehlungscode (optional)',
                      helperText: 'Von Freunden bekommen? Dann hier eintragen '
                          '— ihr bekommt beide Gratis-Monate.',
                      helperMaxLines: 2,
                    ),
                  ),
                  if (_customerType == 'business') ...[
                    const SizedBox(height: 16),
                    const Divider(),
                    const SizedBox(height: 8),
                    Text(
                      'Unternehmensangaben',
                      style: Theme.of(context).textTheme.titleMedium,
                    ),
                    const SizedBox(height: 12),
                    TextFormField(
                      controller: _companyCtrl,
                      decoration: InputDecoration(
                        label: _requiredLabel('Firmenname'),
                        prefixIcon: const Icon(Icons.business_outlined),
                      ),
                    ),
                    const SizedBox(height: 12),
                    TextFormField(
                      controller: _streetCtrl,
                      textCapitalization: TextCapitalization.words,
                      decoration: InputDecoration(
                        label: _requiredLabel('Straße + Hausnr.'),
                        prefixIcon: const Icon(Icons.location_on_outlined),
                      ),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        SizedBox(
                          width: 110,
                          child: TextFormField(
                            controller: _zipCtrl,
                            keyboardType: TextInputType.number,
                            decoration:
                                InputDecoration(label: _requiredLabel('PLZ')),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: TextFormField(
                            controller: _cityCtrl,
                            textCapitalization: TextCapitalization.words,
                            decoration:
                                InputDecoration(label: _requiredLabel('Ort')),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    TextFormField(
                      controller: _countryCtrl,
                      decoration: InputDecoration(
                        label: _requiredLabel('Land (ISO-Code, z. B. DE)'),
                      ),
                    ),
                    const SizedBox(height: 12),
                    TextFormField(
                      controller: _taxNumberCtrl,
                      decoration: InputDecoration(
                        label: _requiredLabel('Steuernummer'),
                        prefixIcon: const Icon(Icons.receipt_long_outlined),
                        helperText: 'Pflichtangabe für §§ 14, 15 UStG',
                      ),
                    ),
                    const SizedBox(height: 12),
                    TextFormField(
                      controller: _vatIdCtrl,
                      textCapitalization: TextCapitalization.characters,
                      decoration: const InputDecoration(
                        labelText: 'USt-IdNr. (optional)',
                        prefixIcon: Icon(Icons.badge_outlined),
                        helperText: 'z. B. DE123456789',
                      ),
                    ),
                    const SizedBox(height: 8),
                  ],
                  const SizedBox(height: 16),
                  _ConsentTile(
                    checked: _acceptPrivacy,
                    onChanged: (v) =>
                        setState(() => _acceptPrivacy = v ?? false),
                    error: _triedSubmit && !_acceptPrivacy,
                    label: l10n.consentPrivacyLabel,
                    linkLabel: l10n.consentPrivacyLink,
                    onLinkTap: () => context.push(AppRoutes.privacy),
                  ),
                  const SizedBox(height: 8),
                  _ConsentTile(
                    checked: _acceptTerms,
                    onChanged: (v) => setState(() => _acceptTerms = v ?? false),
                    error: _triedSubmit && !_acceptTerms,
                    label: l10n.consentTermsLabel,
                    linkLabel: l10n.consentTermsLink,
                    onLinkTap: () => context.push(AppRoutes.terms),
                  ),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: isLoading ? null : _submit,
                    child: isLoading
                        ? const SizedBox(
                            height: 20,
                            width: 20,
                            child: CircularProgressIndicator(strokeWidth: 2),
                          )
                        : Text(l10n.register),
                  ),
                  TextButton(
                    onPressed: () => context.go(AppRoutes.signIn),
                    child: Text(l10n.backToSignIn),
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

class _ConsentTile extends StatelessWidget {
  const _ConsentTile({
    required this.checked,
    required this.onChanged,
    required this.label,
    required this.linkLabel,
    required this.onLinkTap,
    required this.error,
  });

  final bool checked;
  final ValueChanged<bool?> onChanged;
  final String label;
  final String linkLabel;
  final VoidCallback onLinkTap;
  final bool error;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final linkStyle = TextStyle(
      color: theme.colorScheme.primary,
      decoration: TextDecoration.underline,
    );
    final base = theme.textTheme.bodyMedium ?? const TextStyle();
    return InkWell(
      onTap: () => onChanged(!checked),
      borderRadius: BorderRadius.circular(8),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Checkbox(
              value: checked,
              onChanged: onChanged,
              side: error
                  ? BorderSide(color: theme.colorScheme.error, width: 2)
                  : null,
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(top: 12),
                child: Text.rich(
                  TextSpan(
                    style: base.copyWith(
                      color: error ? theme.colorScheme.error : null,
                    ),
                    children: [
                      TextSpan(text: '$label '),
                      TextSpan(
                        text: linkLabel,
                        style: linkStyle,
                        recognizer: TapGestureRecognizer()..onTap = onLinkTap,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
