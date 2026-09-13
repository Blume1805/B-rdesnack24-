import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'package:bs24_kern/core/di/providers.dart';
import 'package:bs24_kern/core/router/app_routes.dart';
import 'package:bs24_kern/core/security/pwned_password_checker.dart';
import 'package:bs24_kern/core/utils/validators.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:bs24_kern/features/auth/presentation/controllers/auth_providers.dart';
import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/core/widgets/design_system/design_system.dart';

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
  bool _acceptPrivacy = false;
  bool _acceptTerms = false;
  bool _triedSubmit = false;
  bool _passwortSichtbar = false;
  bool _wiederholungSichtbar = false;

  /// Rechnungsland. Vorher ein Freitextfeld mit der Aufschrift
  /// „Land (ISO-Code, z. B. DE)" — eine Zumutung fuer jemanden, der einfach
  /// nur ein Konto anlegen will, und eine offene Fehlerquelle fuer die
  /// Rechnungsstellung. Drei Laender decken den Aufstellraum ab.
  static const _laender = {
    'DE': 'Deutschland',
    'AT': 'Österreich',
    'CH': 'Schweiz',
  };

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

  /// Pflichtfeld-Pruefung fuer die Unternehmerangaben.
  ///
  /// Sie lag vorher gesammelt in [_submit] und meldete sich als SnackBar
  /// („Bitte ausfüllen: Firmenname, PLZ, Steuernummer"). Das ist die
  /// unfreundlichste Form: der Hinweis verschwindet nach Sekunden, er steht
  /// nicht an dem Feld, um das es geht, und ein Screenreader liest ihn dem
  /// Formular nicht zu. Jetzt haengt die Pruefung am Feld.
  String? _pflicht(String? wert, String feld) =>
      (wert == null || wert.trim().isEmpty) ? 'Bitte $feld angeben' : null;

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final isLoading = ref.watch(authControllerProvider).isLoading;
    final istUnternehmer = _customerType == 'business';

    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      body: Stack(
        children: [
          SingleChildScrollView(
            child: Column(
              children: [
                WillkommenHeader(
                  begruessung: l10n.welcome,
                  titel: l10n.registerTitle,
                  untertitel: 'Das Konto ist kostenlos. Felder mit * '
                      'brauchen wir, alles andere ist freiwillig.',
                ),
                Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 460),
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(
                        AppSpacing.s5,
                        AppSpacing.s6,
                        AppSpacing.s5,
                        AppSpacing.s12,
                      ),
                      child: Form(
                        key: _formKey,
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
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
                              onSelectionChanged: (auswahl) =>
                                  setState(() => _customerType = auswahl.first),
                            ),
                            const SizedBox(height: AppSpacing.s6),
                            TextFormField(
                              controller: _nameCtrl,
                              textCapitalization: TextCapitalization.words,
                              textInputAction: TextInputAction.next,
                              autofillHints: const [AutofillHints.name],
                              decoration: InputDecoration(
                                labelText: l10n.fullName,
                                prefixIcon:
                                    const Icon(Icons.badge_outlined, size: 20),
                                helperText: 'Für die persönliche Anrede.',
                              ),
                            ),
                            const SizedBox(height: AppSpacing.s4),
                            TextFormField(
                              controller: _emailCtrl,
                              keyboardType: TextInputType.emailAddress,
                              textInputAction: TextInputAction.next,
                              autocorrect: false,
                              autofillHints: const [AutofillHints.email],
                              decoration: InputDecoration(
                                label: _requiredLabel(l10n.email),
                                prefixIcon:
                                    const Icon(Icons.mail_outline, size: 20),
                                helperMaxLines: 2,
                                helperText: 'Hierhin geht die Bestätigung '
                                    'deiner Anmeldung.',
                              ),
                              validator: (v) => switch (Validators.email(v)) {
                                'required' => l10n.fieldRequired,
                                'invalid' => l10n.emailInvalid,
                                _ => null,
                              },
                            ),
                            const SizedBox(height: AppSpacing.s4),
                            // Der Hinweis auf die Unveraenderlichkeit ist
                            // keine Floskel: der Trigger
                            // `trg_profiles_birth_date_immutable` weist jede
                            // spaetere Aenderung ab. Wer sich hier vertippt,
                            // braucht eine Korrektur von Hand — das gehoert
                            // vorher gesagt, nicht hinterher.
                            InkWell(
                              onTap: _pickBirthDate,
                              child: InputDecorator(
                                decoration: InputDecoration(
                                  label: _requiredLabel('Geburtsdatum'),
                                  prefixIcon:
                                      const Icon(Icons.cake_outlined, size: 20),
                                  helperMaxLines: 3,
                                  helperText: 'Altersnachweis für das '
                                      'kostenpflichtige Abo und Grundlage des '
                                      'Geburtstagsgutscheins. Später nicht '
                                      'mehr änderbar.',
                                  errorText: _triedSubmit && _birthDate == null
                                      ? 'Bitte Geburtsdatum wählen'
                                      : null,
                                ),
                                child: Text(
                                  _birthDate == null
                                      ? 'Tippen zum Auswählen'
                                      : _formatDate(_birthDate!),
                                  style: _birthDate == null
                                      ? const TextStyle(
                                          color: AppColors.textMuted,
                                        )
                                      : null,
                                ),
                              ),
                            ),
                            const SizedBox(height: AppSpacing.s4),
                            TextFormField(
                              controller: _passwordCtrl,
                              obscureText: !_passwortSichtbar,
                              textInputAction: TextInputAction.next,
                              autofillHints: const [AutofillHints.newPassword],
                              decoration: InputDecoration(
                                label: _requiredLabel(l10n.password),
                                prefixIcon:
                                    const Icon(Icons.lock_outline, size: 20),
                                helperMaxLines: 2,
                                helperText: 'Mindestens 8 Zeichen, Groß- und '
                                    'Kleinbuchstaben und eine Ziffer.',
                                suffixIcon: IconButton(
                                  tooltip: _passwortSichtbar
                                      ? 'Passwort verbergen'
                                      : 'Passwort anzeigen',
                                  icon: Icon(
                                    _passwortSichtbar
                                        ? Icons.visibility_off_outlined
                                        : Icons.visibility_outlined,
                                    size: 20,
                                  ),
                                  onPressed: () => setState(
                                    () =>
                                        _passwortSichtbar = !_passwortSichtbar,
                                  ),
                                ),
                              ),
                              validator: (v) =>
                                  switch (Validators.password(v)) {
                                'required' => l10n.fieldRequired,
                                'tooShort' => l10n.passwordTooShort,
                                'complexity' => l10n.passwordComplexity,
                                _ => null,
                              },
                              onChanged: (_) {
                                // Damit der Abgleich unten sofort nachzieht,
                                // wenn oben noch etwas geaendert wird.
                                if (_confirmCtrl.text.isNotEmpty) {
                                  _formKey.currentState?.validate();
                                }
                              },
                            ),
                            const SizedBox(height: AppSpacing.s4),
                            TextFormField(
                              controller: _confirmCtrl,
                              obscureText: !_wiederholungSichtbar,
                              textInputAction: istUnternehmer
                                  ? TextInputAction.next
                                  : TextInputAction.done,
                              decoration: InputDecoration(
                                label: _requiredLabel(l10n.confirmPassword),
                                prefixIcon: const Icon(
                                  Icons.lock_reset_outlined,
                                  size: 20,
                                ),
                                suffixIcon: IconButton(
                                  tooltip: _wiederholungSichtbar
                                      ? 'Passwort verbergen'
                                      : 'Passwort anzeigen',
                                  icon: Icon(
                                    _wiederholungSichtbar
                                        ? Icons.visibility_off_outlined
                                        : Icons.visibility_outlined,
                                    size: 20,
                                  ),
                                  onPressed: () => setState(
                                    () => _wiederholungSichtbar =
                                        !_wiederholungSichtbar,
                                  ),
                                ),
                              ),
                              // Der Abgleich stand vorher in _submit und kam
                              // als SnackBar zurueck — nach dem Absenden,
                              // nicht am Feld.
                              validator: (v) => (v ?? '') != _passwordCtrl.text
                                  ? l10n.passwordsDontMatch
                                  : null,
                              onFieldSubmitted: (_) {
                                if (!istUnternehmer) _submit();
                              },
                            ),
                            if (istUnternehmer) ...[
                              const SizedBox(height: AppSpacing.s8),
                              const Divider(),
                              const SizedBox(height: AppSpacing.s4),
                              Text(
                                'Unternehmensangaben',
                                style: AppTypography.display(
                                  size: 17,
                                  weight: FontWeight.w800,
                                  color: AppColors.ink,
                                ),
                              ),
                              const SizedBox(height: AppSpacing.s2),
                              Text(
                                'Für Rechnungen nach § 14 UStG brauchen wir '
                                'Anschrift und Steuernummer. Die USt-IdNr. '
                                'ist freiwillig.',
                                style: AppTypography.body(
                                  size: 12.5,
                                  color: AppColors.textMuted,
                                ).copyWith(height: 1.45),
                              ),
                              const SizedBox(height: AppSpacing.s5),
                              TextFormField(
                                controller: _companyCtrl,
                                textCapitalization: TextCapitalization.words,
                                textInputAction: TextInputAction.next,
                                autofillHints: const [
                                  AutofillHints.organizationName,
                                ],
                                decoration: InputDecoration(
                                  label: _requiredLabel('Firmenname'),
                                  prefixIcon: const Icon(
                                    Icons.business_outlined,
                                    size: 20,
                                  ),
                                ),
                                validator: (v) =>
                                    _pflicht(v, 'den Firmennamen'),
                              ),
                              const SizedBox(height: AppSpacing.s4),
                              TextFormField(
                                controller: _streetCtrl,
                                textCapitalization: TextCapitalization.words,
                                textInputAction: TextInputAction.next,
                                autofillHints: const [
                                  AutofillHints.streetAddressLine1,
                                ],
                                decoration: InputDecoration(
                                  label: _requiredLabel('Straße + Hausnr.'),
                                  prefixIcon: const Icon(
                                    Icons.location_on_outlined,
                                    size: 20,
                                  ),
                                ),
                                validator: (v) => _pflicht(v, 'die Anschrift'),
                              ),
                              const SizedBox(height: AppSpacing.s4),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(
                                    width: 120,
                                    child: TextFormField(
                                      controller: _zipCtrl,
                                      keyboardType: TextInputType.number,
                                      textInputAction: TextInputAction.next,
                                      autofillHints: const [
                                        AutofillHints.postalCode,
                                      ],
                                      decoration: InputDecoration(
                                        label: _requiredLabel('PLZ'),
                                      ),
                                      validator: (v) => _pflicht(v, 'die PLZ'),
                                    ),
                                  ),
                                  const SizedBox(width: AppSpacing.s3),
                                  Expanded(
                                    child: TextFormField(
                                      controller: _cityCtrl,
                                      textCapitalization:
                                          TextCapitalization.words,
                                      textInputAction: TextInputAction.next,
                                      autofillHints: const [
                                        AutofillHints.addressCity,
                                      ],
                                      decoration: InputDecoration(
                                        label: _requiredLabel('Ort'),
                                      ),
                                      validator: (v) => _pflicht(v, 'den Ort'),
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(height: AppSpacing.s4),
                              DropdownButtonFormField<String>(
                                initialValue:
                                    _laender.containsKey(_countryCtrl.text)
                                        ? _countryCtrl.text
                                        : 'DE',
                                decoration: InputDecoration(
                                  label: _requiredLabel('Land'),
                                  prefixIcon: const Icon(
                                    Icons.public_outlined,
                                    size: 20,
                                  ),
                                ),
                                items: [
                                  for (final eintrag in _laender.entries)
                                    DropdownMenuItem(
                                      value: eintrag.key,
                                      child: Text(eintrag.value),
                                    ),
                                ],
                                onChanged: (v) => _countryCtrl.text = v ?? 'DE',
                              ),
                              const SizedBox(height: AppSpacing.s4),
                              TextFormField(
                                controller: _taxNumberCtrl,
                                textInputAction: TextInputAction.next,
                                decoration: InputDecoration(
                                  label: _requiredLabel('Steuernummer'),
                                  prefixIcon: const Icon(
                                    Icons.receipt_long_outlined,
                                    size: 20,
                                  ),
                                  helperText:
                                      'Pflichtangabe nach §§ 14, 15 UStG',
                                ),
                                validator: (v) =>
                                    _pflicht(v, 'die Steuernummer'),
                              ),
                              const SizedBox(height: AppSpacing.s4),
                              TextFormField(
                                controller: _vatIdCtrl,
                                textCapitalization:
                                    TextCapitalization.characters,
                                textInputAction: TextInputAction.done,
                                decoration: const InputDecoration(
                                  labelText: 'USt-IdNr. (freiwillig)',
                                  prefixIcon:
                                      Icon(Icons.numbers_outlined, size: 20),
                                  helperText: 'z. B. DE123456789',
                                ),
                                onFieldSubmitted: (_) => _submit(),
                              ),
                            ],
                            const SizedBox(height: AppSpacing.s8),
                            _ConsentTile(
                              checked: _acceptPrivacy,
                              onChanged: (v) =>
                                  setState(() => _acceptPrivacy = v ?? false),
                              error: _triedSubmit && !_acceptPrivacy,
                              label: l10n.consentPrivacyLabel,
                              linkLabel: l10n.consentPrivacyLink,
                              onLinkTap: () => context.push(AppRoutes.privacy),
                            ),
                            const SizedBox(height: AppSpacing.s2),
                            _ConsentTile(
                              checked: _acceptTerms,
                              onChanged: (v) =>
                                  setState(() => _acceptTerms = v ?? false),
                              error: _triedSubmit && !_acceptTerms,
                              label: l10n.consentTermsLabel,
                              linkLabel: l10n.consentTermsLink,
                              onLinkTap: () => context.push(AppRoutes.terms),
                            ),
                            const SizedBox(height: AppSpacing.s8),
                            FilledButton(
                              onPressed: isLoading ? null : _submit,
                              child: isLoading
                                  ? const SizedBox(
                                      height: 20,
                                      width: 20,
                                      child: CircularProgressIndicator(
                                        strokeWidth: 2,
                                      ),
                                    )
                                  : Text(l10n.register),
                            ),
                            const SizedBox(height: AppSpacing.s2),
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
              ],
            ),
          ),
          // Zurueck-Pfeil ueber dem Kopfbereich. Liegt im ersten Bildschirm
          // und bleibt damit erreichbar, obwohl der Kopf mitscrollt.
          if (Navigator.of(context).canPop())
            Positioned(
              left: AppSpacing.s1,
              top: MediaQuery.of(context).padding.top + AppSpacing.s1,
              child: IconButton(
                tooltip: MaterialLocalizations.of(context).backButtonTooltip,
                icon: const Icon(Icons.arrow_back, color: AppColors.onDark),
                onPressed: () => Navigator.of(context).pop(),
              ),
            ),
        ],
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
