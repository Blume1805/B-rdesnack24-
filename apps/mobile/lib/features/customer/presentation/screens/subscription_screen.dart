import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../legal/presentation/cancellation_screen.dart';
import '../controllers/customer_providers.dart';

/// „Mein Abo" — Auswahl/Wechsel zwischen den drei Abo-Modellen.
///
/// Regeln (serverseitig in `choose_subscription_plan` durchgesetzt,
/// hier nur gespiegelt):
///   * Monatlich 1 €, jährlich 10 €, Lifetime 60 € einmalig.
///   * Wechsel jederzeit möglich — außer nach Lifetime (endgültig).
///   * Jede Wahl/jeder Wechsel löst eine Bestätigungs-E-Mail an die
///     hinterlegte Konto-Adresse aus (Edge Function subscription-choose).
class SubscriptionScreen extends ConsumerStatefulWidget {
  const SubscriptionScreen({super.key});

  @override
  ConsumerState<SubscriptionScreen> createState() => _SubscriptionScreenState();
}

class _Plan {
  const _Plan({
    required this.key,
    required this.title,
    required this.price,
    required this.cadence,
    required this.description,
    this.badge,
  });
  final String key;
  final String title;
  final String price;
  final String cadence;
  final String description;
  final String? badge;
}

class _SubscriptionScreenState extends ConsumerState<SubscriptionScreen> {
  static const _plans = <_Plan>[
    _Plan(
      key: 'monthly',
      title: 'Monats-Abo',
      price: '1 €',
      cadence: 'pro Monat',
      description: 'Monatlich kündbar, voller Zugang zu allen '
          'Kundenfunktionen. Jederzeit wechselbar.',
    ),
    _Plan(
      key: 'yearly',
      title: 'Jahres-Abo',
      price: '10 €',
      cadence: 'pro Jahr',
      description: 'Ein Jahr voller Zugang — im Vergleich zum Monats-Abo '
          'sind 2 Monate geschenkt. Jederzeit wechselbar.',
      badge: '2 Monate geschenkt',
    ),
    _Plan(
      key: 'lifetime',
      title: 'Lifetime-Abo',
      price: '60 €',
      cadence: 'einmalig',
      description: 'Einmal zahlen, dauerhaft nutzen. Achtung: endgültig — '
          'ein späterer Wechsel ist nicht mehr möglich.',
      badge: 'Einmalzahlung',
    ),
  ];

  String? _currentPlan;
  bool _locked = false;
  bool _loading = true;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final res = await ref.read(supabaseClientProvider).rpc('my_subscription');
      final map = Map<String, dynamic>.from(res as Map);
      if (!mounted) return;
      setState(() {
        _currentPlan = map['plan'] as String?;
        _locked = map['locked'] == true;
        _loading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() => _loading = false);
    }
  }

  /// Kontrollfrage vor jeder Bestellung: nennt die konkreten Konditionen
  /// und verlangt eine ausdrückliche Bestätigung (Button-Lösung analog
  /// § 312j BGB). Bei Lifetime zusätzlich der Endgültigkeits-Hinweis und
  /// die Pflicht-Checkbox nach § 356 Abs. 5 BGB (Zustimmung zur sofortigen
  /// Bereitstellung + Kenntnisnahme vom Erlöschen des Widerrufsrechts) —
  /// ohne Haken bleibt der Bestell-Button deaktiviert; das Flag wird
  /// serverseitig verlangt und revisionssicher gespeichert.
  Future<bool> _confirmOrder(_Plan plan) async {
    final isSwitch = _currentPlan != null;
    final lifetime = plan.key == 'lifetime';
    var withdrawalConsent = false;
    final ok = await showDialog<bool>(
      context: context,
      builder: (dctx) => StatefulBuilder(
        builder: (dctx, setDialog) => AlertDialog(
          title: Text(isSwitch
              ? 'Zum ${plan.title} wechseln?'
              : '${plan.title} bestellen?'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Möchtest du das ${plan.title} zu den folgenden Konditionen '
                  'jetzt verbindlich bestellen?',
                  style:
                      AppTypography.body(size: 14, color: AppColors.textDefault)
                          .copyWith(height: 1.4),
                ),
                const SizedBox(height: AppSpacing.s3),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(AppSpacing.s3),
                  decoration: BoxDecoration(
                    color: AppColors.surfaceAlt,
                    border: const Border(
                      left: BorderSide(color: AppColors.brand, width: 4),
                    ),
                    borderRadius: BorderRadius.circular(AppRadii.sm),
                  ),
                  child: Text(
                    '${plan.title}: ${plan.price} ${plan.cadence}\n'
                    '${lifetime ? 'Einmalzahlung, dauerhafte Nutzung' : 'Verlängert sich automatisch, jederzeit kündbar'}\n'
                    'Preis inkl. gesetzlicher USt.',
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w700,
                      color: AppColors.ink,
                    ).copyWith(height: 1.5),
                  ),
                ),
                if (lifetime) ...[
                  const SizedBox(height: AppSpacing.s3),
                  Text(
                    'Achtung: Das Lifetime-Abo ist endgültig — ein späterer '
                    'Wechsel in ein anderes Abo-Modell ist nicht mehr möglich.',
                    style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w700,
                        color: AppColors.statusCritical),
                  ),
                  const SizedBox(height: AppSpacing.s2),
                  // § 356 Abs. 5 BGB: ohne diesen Haken bleibt der
                  // Bestell-Button deaktiviert (zusätzlich Server-Prüfung).
                  CheckboxListTile(
                    value: withdrawalConsent,
                    onChanged: (v) =>
                        setDialog(() => withdrawalConsent = v ?? false),
                    controlAffinity: ListTileControlAffinity.leading,
                    contentPadding: EdgeInsets.zero,
                    dense: true,
                    activeColor: AppColors.brand,
                    checkColor: AppColors.ink,
                    title: Text(
                      'Ich stimme ausdrücklich zu, dass die Leistung sofort '
                      'bereitgestellt wird, und nehme zur Kenntnis, dass mein '
                      'Widerrufsrecht mit vollständiger Bereitstellung erlischt '
                      '(§ 356 Abs. 5 BGB).',
                      style: AppTypography.body(size: 12, color: AppColors.ink)
                          .copyWith(height: 1.35),
                    ),
                  ),
                ],
                const SizedBox(height: AppSpacing.s3),
                Text(
                  'Die Abrechnung erfolgt über den App Store bzw. Google Play, '
                  'sobald die App dort veröffentlicht ist. Du erhältst eine '
                  'Bestätigung per E-Mail.',
                  style:
                      AppTypography.body(size: 12, color: AppColors.textMuted)
                          .copyWith(height: 1.4),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(dctx).pop(false),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: (lifetime && !withdrawalConsent)
                  ? null
                  : () => Navigator.of(dctx).pop(true),
              child: Text(lifetime
                  ? 'Jetzt endgültig bestellen'
                  : 'Jetzt verbindlich bestellen'),
            ),
          ],
        ),
      ),
    );
    if (ok == true) _pendingWithdrawalConsent = withdrawalConsent;
    return ok == true;
  }

  /// Consent aus dem zuletzt bestätigten Dialog — wird der Edge Function
  /// mitgegeben und dort serverseitig erneut geprüft.
  bool _pendingWithdrawalConsent = false;

  Future<void> _choose(_Plan plan) async {
    if (_busy) return;
    if (!await _confirmOrder(plan)) return;

    setState(() => _busy = true);
    try {
      final res = await ref
          .read(supabaseClientProvider)
          .functions
          .invoke('subscription-choose', body: {
        'plan': plan.key,
        'withdrawal_consent': _pendingWithdrawalConsent,
      });
      final data = Map<String, dynamic>.from(res.data as Map);
      if (data['ok'] != true) {
        throw Exception(data['error'] ?? 'Unbekannter Fehler');
      }
      final emailTo = (data['email_to'] ?? '').toString();
      if (!mounted) return;
      setState(() {
        _currentPlan = plan.key;
        _locked = plan.key == 'lifetime';
      });
      // Gating im Kundenbereich sofort entsperren.
      ref.invalidate(hasSubscriptionProvider);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            '${plan.title} aktiviert. Eine Bestätigung wurde an '
            '$emailTo gesendet.',
          ),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      final msg = e.toString().replaceFirst('Exception: ', '');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text('Abo-Wechsel fehlgeschlagen: $msg'),
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
      appBar: AppBar(title: const Text('Mein Abo')),
      body: _loading
          ? const Center(
              child: CircularProgressIndicator(color: AppColors.brand))
          : ListView(
              padding: const EdgeInsets.all(AppSpacing.s4),
              children: [
                const Eyebrow('Abo-Modelle'),
                const SizedBox(height: 2),
                Text(
                  'Wähle dein Modell',
                  style: AppTypography.display(
                    size: 22,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  _locked
                      ? 'Du nutzt das Lifetime-Abo. Ein Wechsel ist nicht '
                          'mehr möglich.'
                      : 'Ein Wechsel ist jederzeit möglich — nur das '
                          'Lifetime-Abo ist endgültig. Nach jeder Auswahl '
                          'bekommst du eine Bestätigung per E-Mail.',
                  style:
                      AppTypography.body(size: 13, color: AppColors.textMuted),
                ),
                const SizedBox(height: AppSpacing.s4),
                for (final plan in _plans) ...[
                  _PlanCard(
                    plan: plan,
                    active: _currentPlan == plan.key,
                    disabled: _busy || _locked || _currentPlan == plan.key,
                    onChoose: () => _choose(plan),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                ],
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Die Abrechnung erfolgt über den App Store bzw. Google '
                  'Play, sobald die App dort veröffentlicht ist. Preise '
                  'inkl. USt.',
                  style:
                      AppTypography.body(size: 11, color: AppColors.textMuted),
                ),
                const SizedBox(height: AppSpacing.s4),
                // § 312k BGB: Kündigungsmöglichkeit auch im Kundenbereich —
                // öffnet dasselbe Formular mit vorbefüllter Konto-Adresse.
                OutlinedButton.icon(
                  onPressed: () {
                    final email = ref
                        .read(supabaseClientProvider)
                        .auth
                        .currentUser
                        ?.email;
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => CancellationScreen(prefillEmail: email),
                      ),
                    );
                  },
                  icon: const Icon(Icons.cancel_outlined, size: 18),
                  label: const Text('Verträge hier kündigen'),
                ),
              ],
            ),
    );
  }
}

class _PlanCard extends StatelessWidget {
  const _PlanCard({
    required this.plan,
    required this.active,
    required this.disabled,
    required this.onChoose,
  });
  final _Plan plan;
  final bool active;
  final bool disabled;
  final VoidCallback onChoose;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      borderColor: active ? AppColors.brand : null,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  plan.title,
                  style: AppTypography.display(
                    size: 16,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              if (active)
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: AppColors.brand,
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                  child: Text(
                    'AKTIV',
                    style: AppTypography.body(
                      size: 10,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ).copyWith(letterSpacing: 0.8),
                  ),
                )
              else if (plan.badge != null)
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    border: Border.all(color: AppColors.brand, width: 1),
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                  child: Text(
                    plan.badge!.toUpperCase(),
                    style: AppTypography.body(
                      size: 10,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ).copyWith(letterSpacing: 0.6),
                  ),
                ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                plan.price,
                style: AppTypography.display(
                  size: 28,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(width: 6),
              Padding(
                padding: const EdgeInsets.only(bottom: 4),
                child: Text(
                  plan.cadence,
                  style:
                      AppTypography.body(size: 13, color: AppColors.textMuted),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            plan.description,
            style: AppTypography.body(size: 13, color: AppColors.textMuted)
                .copyWith(height: 1.4),
          ),
          const SizedBox(height: AppSpacing.s3),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              onPressed: disabled ? null : onChoose,
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.ink,
                foregroundColor: AppColors.brand,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
              child: Text(active ? 'Aktuelles Abo' : 'Auswählen'),
            ),
          ),
        ],
      ),
    );
  }
}
