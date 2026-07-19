import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/di/providers.dart';
import '../../../core/theme/app_tokens.dart';
import '../../../core/theme/app_typography.dart';
import '../../../core/widgets/design_system/design_system.dart';

/// Kündigungsformular nach § 312k BGB („Verträge hier kündigen").
///
/// Muss ohne Anmeldung erreichbar sein — die Route ist öffentlich und
/// die Edge Function subscription-cancel akzeptiert anonyme Aufrufe.
/// Nach dem Absenden wird der Zugang der Kündigung sofort mit Datum und
/// Uhrzeit angezeigt und zusätzlich per E-Mail bestätigt
/// (§ 312k Abs. 2 S. 3 BGB).
class CancellationScreen extends ConsumerStatefulWidget {
  const CancellationScreen({super.key, this.prefillEmail});

  /// Aus dem Kundenbereich heraus wird die Konto-Adresse vorbefüllt.
  final String? prefillEmail;

  @override
  ConsumerState<CancellationScreen> createState() => _CancellationScreenState();
}

class _CancellationScreenState extends ConsumerState<CancellationScreen> {
  final _formKey = GlobalKey<FormState>();
  late final TextEditingController _emailCtrl;
  final _customerNumberCtrl = TextEditingController();
  final _reasonCtrl = TextEditingController();
  String _kind = 'ordentlich';
  bool _busy = false;

  // Nach erfolgreichem Absenden: Zugangsbestätigung anzeigen.
  String? _receivedAt;
  String? _emailTo;

  @override
  void initState() {
    super.initState();
    _emailCtrl = TextEditingController(text: widget.prefillEmail ?? '');
  }

  @override
  void dispose() {
    _emailCtrl.dispose();
    _customerNumberCtrl.dispose();
    _reasonCtrl.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    setState(() => _busy = true);
    try {
      final res = await ref.read(supabaseClientProvider).functions.invoke(
        'subscription-cancel',
        body: {
          'email': _emailCtrl.text.trim(),
          'customer_number': _customerNumberCtrl.text.trim(),
          'kind': _kind,
          'reason': _reasonCtrl.text.trim(),
        },
      );
      final data = Map<String, dynamic>.from(res.data as Map);
      if (data['ok'] != true) {
        throw Exception(data['error'] ?? 'Unbekannter Fehler');
      }
      if (!mounted) return;
      setState(() {
        _receivedAt = (data['received_at'] ?? '').toString();
        _emailTo = (data['email_to'] ?? '').toString();
      });
    } catch (e) {
      if (!mounted) return;
      final msg = e.toString().replaceFirst('Exception: ', '');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text('Kündigung konnte nicht übermittelt werden: $msg'),
        ),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: AppBar(title: const Text('Verträge hier kündigen')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s4),
        children: [
          if (_receivedAt != null)
            _ConfirmationCard(receivedAt: _receivedAt!, emailTo: _emailTo ?? '')
          else ...[
            const Eyebrow('Kündigung'),
            const SizedBox(height: 2),
            Text(
              'Abo-Vertrag kündigen',
              style: AppTypography.display(
                size: 22,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Hier können Sie Ihr Bördesnack24-Abo kündigen — auch ohne '
              'Anmeldung. Den Zugang Ihrer Kündigung bestätigen wir sofort '
              'mit Datum und Uhrzeit sowie per E-Mail.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted)
                  .copyWith(height: 1.4),
            ),
            const SizedBox(height: AppSpacing.s4),
            AppCard(
              child: Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    TextFormField(
                      controller: _emailCtrl,
                      keyboardType: TextInputType.emailAddress,
                      decoration: const InputDecoration(
                        labelText: 'E-Mail-Adresse *',
                        helperText: 'Die zum Vertrag gehörende E-Mail-Adresse',
                        prefixIcon: Icon(Icons.mail_outline, size: 20),
                      ),
                      validator: (v) {
                        final s = (v ?? '').trim();
                        if (s.isEmpty) return 'E-Mail-Adresse erforderlich';
                        if (!RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')
                            .hasMatch(s)) {
                          return 'Bitte gültige E-Mail-Adresse angeben';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: AppSpacing.s3),
                    TextFormField(
                      controller: _customerNumberCtrl,
                      decoration: const InputDecoration(
                        labelText: 'Kundennummer (optional)',
                        prefixIcon: Icon(Icons.badge_outlined, size: 20),
                      ),
                    ),
                    const SizedBox(height: AppSpacing.s4),
                    Text(
                      'ART DER KÜNDIGUNG',
                      style: AppTypography.body(
                        size: 10,
                        weight: FontWeight.w800,
                        color: AppColors.textMuted,
                      ).copyWith(letterSpacing: 0.6),
                    ),
                    RadioListTile<String>(
                      value: 'ordentlich',
                      // RadioGroup-Migration folgt mit dem nächsten
                      // Flutter-Upgrade.
                      // ignore: deprecated_member_use
                      groupValue: _kind,
                      dense: true,
                      contentPadding: EdgeInsets.zero,
                      activeColor: AppColors.brand,
                      title: Text(
                        'Ordentliche Kündigung',
                        style: AppTypography.body(
                          size: 14,
                          weight: FontWeight.w700,
                        ),
                      ),
                      subtitle: Text(
                        'zum nächstmöglichen Zeitpunkt',
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                      // ignore: deprecated_member_use
                      onChanged: (v) => setState(() => _kind = v!),
                    ),
                    RadioListTile<String>(
                      value: 'ausserordentlich',
                      // ignore: deprecated_member_use
                      groupValue: _kind,
                      dense: true,
                      contentPadding: EdgeInsets.zero,
                      activeColor: AppColors.brand,
                      title: Text(
                        'Außerordentliche Kündigung',
                        style: AppTypography.body(
                          size: 14,
                          weight: FontWeight.w700,
                        ),
                      ),
                      subtitle: Text(
                        'aus wichtigem Grund',
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                      // ignore: deprecated_member_use
                      onChanged: (v) => setState(() => _kind = v!),
                    ),
                    if (_kind == 'ausserordentlich') ...[
                      const SizedBox(height: AppSpacing.s2),
                      TextFormField(
                        controller: _reasonCtrl,
                        maxLines: 3,
                        decoration: const InputDecoration(
                          labelText: 'Wichtiger Grund *',
                          alignLabelWithHint: true,
                        ),
                        validator: (v) => _kind == 'ausserordentlich' &&
                                (v ?? '').trim().length < 3
                            ? 'Bitte den wichtigen Grund angeben'
                            : null,
                      ),
                    ],
                    const SizedBox(height: AppSpacing.s5),
                    // § 312k BGB: Bestätigungsschaltfläche muss eindeutig
                    // beschriftet sein — „jetzt kündigen".
                    FilledButton(
                      onPressed: _busy ? null : _submit,
                      style: FilledButton.styleFrom(
                        backgroundColor: AppColors.ink,
                        foregroundColor: AppColors.brand,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(AppRadii.pill),
                        ),
                      ),
                      child: _busy
                          ? const SizedBox(
                              height: 18,
                              width: 18,
                              child: CircularProgressIndicator(
                                strokeWidth: 2,
                                color: AppColors.brand,
                              ),
                            )
                          : const Text('Jetzt kündigen'),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            Text(
              'Hinweis: Nach Veröffentlichung in den App-Stores kann ein '
              'dort abgeschlossenes Abo zusätzlich über die Abo-Verwaltung '
              'des jeweiligen Stores gekündigt werden.',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
          ],
        ],
      ),
    );
  }
}

/// Zugangsbestätigung (§ 312k Abs. 2 S. 3 BGB) — Datum, Uhrzeit, E-Mail.
class _ConfirmationCard extends StatelessWidget {
  const _ConfirmationCard({required this.receivedAt, required this.emailTo});
  final String receivedAt;
  final String emailTo;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      borderColor: AppColors.statusPositive,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(
                Icons.check_circle_outline,
                color: AppColors.statusPositive,
                size: 28,
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: Text(
                  'Kündigung eingegangen',
                  style: AppTypography.display(
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Ihre Kündigungserklärung ist am $receivedAt Uhr bei uns '
            'eingegangen (Bestätigung gemäß § 312k Abs. 2 BGB). '
            'Eine Bestätigung in Textform wurde an $emailTo gesendet — '
            'bitte als Nachweis aufbewahren.',
            style: AppTypography.body(size: 14, color: AppColors.textDefault)
                .copyWith(height: 1.45),
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Die Kündigung wird zum nächstmöglichen Zeitpunkt wirksam. '
            'Wir melden uns, falls Rückfragen bestehen.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s4),
          OutlinedButton(
            onPressed: () => Navigator.of(context).maybePop(),
            child: const Text('Zurück'),
          ),
        ],
      ),
    );
  }
}
