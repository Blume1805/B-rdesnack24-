import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../legal/presentation/cancellation_screen.dart';

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

  Future<void> _choose(_Plan plan) async {
    if (_busy) return;
    // Lifetime ist endgültig — vorher unmissverständlich bestätigen lassen.
    if (plan.key == 'lifetime') {
      final ok = await showDialog<bool>(
        context: context,
        builder: (dctx) => AlertDialog(
          title: const Text('Lifetime-Abo wählen?'),
          content: const Text(
            'Das Lifetime-Abo kostet einmalig 60 € und gilt dauerhaft. '
            'Ein späterer Wechsel in ein anderes Abo-Modell ist danach '
            'nicht mehr möglich.',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(dctx).pop(false),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: () => Navigator.of(dctx).pop(true),
              child: const Text('Endgültig wählen'),
            ),
          ],
        ),
      );
      if (ok != true) return;
    }

    setState(() => _busy = true);
    try {
      final res = await ref
          .read(supabaseClientProvider)
          .functions
          .invoke('subscription-choose', body: {'plan': plan.key});
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
