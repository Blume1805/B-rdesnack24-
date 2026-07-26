import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../legal/presentation/cancellation_screen.dart';
import '../controllers/customer_providers.dart';
import 'employer_benefit_screen.dart';
import 'subscription_value_screen.dart';

/// „Mein Abo" — Auswahl/Wechsel zwischen den drei Abo-Modellen.
///
/// Regeln (serverseitig in `choose_subscription_plan` durchgesetzt,
/// hier nur gespiegelt):
///   * Monatlich 0,99 €, jährlich 9,99 €, Lifetime 79,99 € einmalig.
///   * Lifetime ist eine limitierte „Founders Edition": nur die ersten
///     20 Konten (serverseitiges Kontingent, Anzeige der Restplätze).
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
      price: '0,99 €',
      cadence: 'pro Monat',
      description: 'Monatlich kündbar, voller Zugang zu allen '
          'Kundenfunktionen. Jederzeit wechselbar.',
    ),
    _Plan(
      key: 'yearly',
      title: 'Jahres-Abo',
      price: '9,99 €',
      cadence: 'pro Jahr',
      description: 'Ein Jahr voller Zugang — im Vergleich zum Monats-Abo '
          'sind 2 Monate geschenkt. Jederzeit wechselbar.',
      badge: '2 Monate geschenkt',
    ),
    _Plan(
      key: 'lifetime',
      title: 'Lifetime-Abo',
      price: '79,99 €',
      cadence: 'einmalig',
      description: 'Einmal zahlen, für immer nutzen — inkl. aller künftigen '
          'Funktionen. Streng limitiert auf die ersten 20 Konten. Achtung: '
          'endgültig, ein späterer Wechsel ist nicht mehr möglich.',
      badge: 'Founders Edition',
    ),
  ];

  String? _currentPlan;
  bool _locked = false;
  bool _loading = true;
  bool _busy = false;

  // Founders-Edition-Kontingent (serverseitig, nur Anzeige der Restplätze).
  int _foundersRemaining = 20;
  int _foundersLimit = 20;
  bool _foundersSoldOut = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final client = ref.read(supabaseClientProvider);
      final res = await client.rpc('my_subscription');
      final map = Map<String, dynamic>.from(res as Map);
      Map<String, dynamic>? founders;
      try {
        final f = await client.rpc('lifetime_founders_status');
        founders = Map<String, dynamic>.from(f as Map);
      } catch (_) {
        founders = null;
      }
      if (!mounted) return;
      setState(() {
        _currentPlan = map['plan'] as String?;
        _locked = map['locked'] == true;
        if (founders != null) {
          _foundersLimit = (founders['limit'] as num?)?.toInt() ?? 20;
          _foundersRemaining = (founders['remaining'] as num?)?.toInt() ?? 20;
          _foundersSoldOut = founders['sold_out'] == true;
        }
        _loading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() => _loading = false);
    }
  }

  /// Kontrollfrage vor jeder Bestellung: nennt die konkreten Konditionen
  /// und verlangt eine ausdrückliche Bestätigung (Button-Lösung analog
  /// § 312j BGB). Für JEDEN Plan Pflicht: die Altersbestätigung nach
  /// §§ 106 ff. BGB (volljährig oder Zustimmung der gesetzlichen
  /// Vertreter — der Taschengeldparagraph trägt Abos nicht). Bei Lifetime
  /// zusätzlich der Endgültigkeits-Hinweis und die Pflicht-Checkbox nach
  /// § 356 Abs. 5 BGB. Ohne Haken bleibt der Bestell-Button deaktiviert;
  /// beide Flags werden serverseitig verlangt und revisionssicher
  /// gespeichert.
  Future<bool> _confirmOrder(_Plan plan) async {
    final isSwitch = _currentPlan != null;
    final lifetime = plan.key == 'lifetime';
    var withdrawalConsent = false;
    var ageConsent = false;
    final ok = await showDialog<bool>(
      context: context,
      builder: (dctx) => StatefulBuilder(
        builder: (dctx, setDialog) => AlertDialog(
          title: Text(
            isSwitch
                ? 'Zum ${plan.title} wechseln?'
                : '${plan.title} bestellen?',
          ),
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
                      color: AppColors.statusCritical,
                    ),
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
                const SizedBox(height: AppSpacing.s2),
                // §§ 106 ff. BGB: Pflicht-Checkbox für jeden Abschluss —
                // ohne Haken bleibt der Bestell-Button deaktiviert
                // (zusätzlich Server-Prüfung + Speicherung als Nachweis).
                CheckboxListTile(
                  value: ageConsent,
                  onChanged: (v) => setDialog(() => ageConsent = v ?? false),
                  controlAffinity: ListTileControlAffinity.leading,
                  contentPadding: EdgeInsets.zero,
                  dense: true,
                  activeColor: AppColors.brand,
                  checkColor: AppColors.ink,
                  title: Text(
                    'Ich bin mindestens 18 Jahre alt oder handle mit '
                    'Zustimmung meiner gesetzlichen Vertreter.',
                    style: AppTypography.body(size: 12, color: AppColors.ink)
                        .copyWith(height: 1.35),
                  ),
                ),
                const SizedBox(height: AppSpacing.s2),
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
              onPressed: (!ageConsent || (lifetime && !withdrawalConsent))
                  ? null
                  : () => Navigator.of(dctx).pop(true),
              child: Text(
                lifetime
                    ? 'Jetzt endgültig bestellen'
                    : 'Jetzt verbindlich bestellen',
              ),
            ),
          ],
        ),
      ),
    );
    if (ok == true) {
      _pendingWithdrawalConsent = withdrawalConsent;
      _pendingAgeConsent = ageConsent;
    }
    return ok == true;
  }

  /// Consents aus dem zuletzt bestätigten Dialog — werden der Edge Function
  /// mitgegeben und dort serverseitig erneut geprüft.
  bool _pendingWithdrawalConsent = false;
  bool _pendingAgeConsent = false;

  Future<void> _choose(_Plan plan) async {
    if (_busy) return;
    if (!await _confirmOrder(plan)) return;

    setState(() => _busy = true);
    try {
      final res = await ref.read(supabaseClientProvider).functions.invoke(
        'subscription-choose',
        body: {
          'plan': plan.key,
          'withdrawal_consent': _pendingWithdrawalConsent,
          'age_consent': _pendingAgeConsent,
        },
      );
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
      appBar: const HeroAppBar(title: Text('Mein Abo')),
      body: _loading
          ? const Center(
              child: CircularProgressIndicator(color: AppColors.brand),
            )
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
                // Mehrwert klar kommunizieren: alle Abo-Vorteile auf einen
                // Blick + konkretes Amortisationsbeispiel.
                const _BenefitsCard(),
                const SizedBox(height: AppSpacing.s3),
                // Marketing-Rechnung: Break-even konservativ vs. normal.
                Align(
                  alignment: Alignment.centerLeft,
                  child: TextButton.icon(
                    style: TextButton.styleFrom(
                      foregroundColor: AppColors.brandDark,
                      padding: EdgeInsets.zero,
                    ),
                    onPressed: () => Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => const SubscriptionValueScreen(),
                      ),
                    ),
                    icon: const Icon(Icons.calculate_outlined, size: 18),
                    label: const Text('Ab wann rechnet sich das Abo?'),
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                // Marketing-Hinweis: Sachbezugsfreigrenze — Arbeitgeber
                // können Abo + Automaten-Käufe im Rahmen von § 8 Abs. 2
                // Satz 11 EStG steuerfrei mitfinanzieren.
                _EmployerBenefitTeaser(
                  onTap: () => Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (_) => const EmployerBenefitScreen(),
                    ),
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                for (final plan in _plans) ...[
                  _PlanCard(
                    plan: plan,
                    active: _currentPlan == plan.key,
                    disabled: _busy ||
                        _locked ||
                        _currentPlan == plan.key ||
                        (plan.key == 'lifetime' && _foundersSoldOut),
                    foundersRemaining:
                        plan.key == 'lifetime' ? _foundersRemaining : null,
                    foundersLimit:
                        plan.key == 'lifetime' ? _foundersLimit : null,
                    foundersSoldOut: plan.key == 'lifetime' && _foundersSoldOut,
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
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Kostenpflichtige Abos nur für Volljährige bzw. mit '
                  'Zustimmung der Erziehungsberechtigten (§§ 106 ff. BGB). '
                  'App, Bonusprogramm und Rabatte ohne Abo stehen allen '
                  'Altersgruppen offen.',
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

/// Teaser-Karte: verweist auf die 50-€-Sachbezugsfreigrenze, mit der
/// Arbeitgeber Abo und Automaten-Käufe steuerfrei mitfinanzieren können.
class _EmployerBenefitTeaser extends StatelessWidget {
  const _EmployerBenefitTeaser({required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      onTap: onTap,
      topStripeColor: AppColors.brand,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Row(
        children: [
          Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: AppColors.brandLight,
              borderRadius: BorderRadius.circular(AppRadii.sm),
            ),
            child: const Icon(
              Icons.savings_outlined,
              color: AppColors.brandDark,
              size: 22,
            ),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Dein Arbeitgeber kann mitzahlen',
                  style: AppTypography.body(
                    size: 13.5,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  'Bis zu 50 € im Monat steuerfrei — auch fürs Abo nutzbar.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textMuted,
                  ).copyWith(height: 1.35),
                ),
              ],
            ),
          ),
          const Icon(
            Icons.chevron_right,
            color: AppColors.textMuted,
            size: 20,
          ),
        ],
      ),
    );
  }
}

/// Mehrwert-Karte: alle Abo-Vorteile auf einen Blick plus ein konkretes
/// Amortisationsbeispiel (20 € Monatseinkauf) — macht sichtbar, dass sich
/// schon das kleinste Abo rechnet.
class _BenefitsCard extends StatelessWidget {
  const _BenefitsCard();

  static const _benefits = <(IconData, String)>[
    (Icons.percent, '5 % Dauerrabatt auf jeden Einkauf'),
    (Icons.stars_outlined, 'Bonuspunkte für jeden Kauf'),
    (Icons.savings_outlined, 'Cashback-Aktionen'),
    (Icons.receipt_long_outlined, 'Digitale Belege & Kaufhistorie'),
    (Icons.local_offer_outlined, 'Exklusive Angebote & Deals'),
    (Icons.cake_outlined, 'Geburtstagsgutschein'),
    (Icons.auto_awesome_outlined, 'Personalisierte Aktionen'),
    (Icons.support_agent_outlined, 'Schnellere Reklamationsabwicklung'),
  ];

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: AppColors.ink,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Das steckt in deinem Abo',
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w800,
              color: AppColors.brand,
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          for (final (icon, label) in _benefits)
            Padding(
              padding: const EdgeInsets.only(bottom: AppSpacing.s2),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(icon, size: 18, color: AppColors.brand),
                  const SizedBox(width: AppSpacing.s2),
                  Expanded(
                    child: Text(
                      label,
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w600,
                        color: AppColors.onDark,
                      ).copyWith(height: 1.3),
                    ),
                  ),
                ],
              ),
            ),
          const SizedBox(height: AppSpacing.s1),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(AppSpacing.s3),
            decoration: BoxDecoration(
              color: AppColors.brand.withValues(alpha: 0.12),
              borderRadius: BorderRadius.circular(AppRadii.sm),
            ),
            child: Text(
              'Beispiel: Wer im Monat für 20 € am Automaten kauft, spart mit '
              '5 % schon 1 € — mehr als das Monats-Abo (0,99 €) kostet. Ab '
              'dann ist jeder weitere Vorteil geschenkt.',
              style: AppTypography.body(
                size: 12,
                color: AppColors.onDark.withValues(alpha: 0.85),
              ).copyWith(height: 1.4),
            ),
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
    this.foundersRemaining,
    this.foundersLimit,
    this.foundersSoldOut = false,
  });
  final _Plan plan;
  final bool active;
  final bool disabled;
  final VoidCallback onChoose;
  final int? foundersRemaining;
  final int? foundersLimit;
  final bool foundersSoldOut;

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
          if (foundersRemaining != null && foundersLimit != null) ...[
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                Icon(
                  foundersSoldOut ? Icons.lock_outline : Icons.bolt,
                  size: 16,
                  color: foundersSoldOut
                      ? AppColors.textMuted
                      : AppColors.brandDark,
                ),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    foundersSoldOut
                        ? 'Alle $foundersLimit Founders-Plätze vergeben.'
                        : 'Nur noch $foundersRemaining von $foundersLimit '
                            'Plätzen frei.',
                    style: AppTypography.body(
                      size: 12,
                      weight: FontWeight.w800,
                      color: foundersSoldOut
                          ? AppColors.textMuted
                          : AppColors.brandDark,
                    ),
                  ),
                ),
              ],
            ),
          ],
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
              child: Text(
                active
                    ? 'Aktuelles Abo'
                    : foundersSoldOut
                        ? 'Ausverkauft'
                        : 'Auswählen',
              ),
            ),
          ),
        ],
      ),
    );
  }
}
