import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/brand_refresh.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/donations_news.dart';
import '../controllers/customer_providers.dart';

/// Spenden-Screen: eigener Spendenstand, Abstimmung über Empfänger,
/// Vorschlags-Formular für neue Zwecke.
class DonationsScreen extends ConsumerWidget {
  const DonationsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final summary = ref.watch(myDonationSummaryProvider);
    final pool = ref.watch(donationPoolSummaryProvider);
    final causes = ref.watch(donationCausesProvider);

    return Scaffold(
      appBar: const HeroAppBar(title: Text('Meine Spenden')),
      body: BrandRefresh(
        onRefresh: () async {
          ref
            ..invalidate(myDonationSummaryProvider)
            ..invalidate(donationPoolSummaryProvider)
            ..invalidate(donationCausesProvider);
        },
        child: ListView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s8,
          ),
          children: [
            const SectionHeader(
              eyebrow: '5 % Netto-Umsatz',
              title: 'Dein Spendenbeitrag',
            ),
            const SizedBox(height: AppSpacing.s4),
            summary.when(
              loading: () =>
                  const LinearProgressIndicator(color: AppColors.brand),
              error: (e, _) => _errorCard('$e'),
              data: (s) => _SummaryCard(summary: s),
            ),
            const SizedBox(height: AppSpacing.s4),
            pool.when(
              loading: () => const SizedBox.shrink(),
              error: (e, _) => _errorCard('$e'),
              data: (p) => _PoolCard(pool: p),
            ),
            const SizedBox(height: AppSpacing.s6),
            const Row(
              children: [
                Icon(
                  Icons.how_to_vote_outlined,
                  color: AppColors.ink,
                  size: 20,
                ),
                SizedBox(width: 6),
                Eyebrow('Wofür soll gespendet werden?'),
              ],
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Wähle einen oder mehrere Zwecke — jede Stimme zählt gleich. '
              'Du kannst deine Stimme jederzeit widerrufen oder eigene '
              'Vorschläge einreichen.',
              style: AppTypography.body(
                size: 13,
                color: AppColors.textMuted,
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            causes.when(
              loading: () =>
                  const LinearProgressIndicator(color: AppColors.brand),
              error: (e, _) => _errorCard('$e'),
              data: (list) {
                final active = list.where((c) => c.isActive).toList()
                  ..sort((a, b) => b.voteCount.compareTo(a.voteCount));
                final suggested = list.where((c) => c.isSuggested).toList();
                final top3 = active.take(3).toList();
                final rest = active.length > 3
                    ? active.sublist(3)
                    : const <DonationCause>[];

                final totalPool = pool.valueOrNull?.totalPool ?? 0;
                // Gleichmäßige Verteilung auf drei Empfänger — bei
                // weniger als drei aktiven Zwecken auf die tatsächlich
                // aktive Zahl. Zielwert je Projekt: 500 €.
                final divisor = top3.isEmpty ? 1 : top3.length;
                final sharePerProject = totalPool / divisor;

                return Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    if (top3.isNotEmpty) ...[
                      _DistributionExplainerCard(
                        share: sharePerProject,
                        totalPool: totalPool,
                        activeCount: top3.length,
                      ),
                      const SizedBox(height: AppSpacing.s4),
                      Eyebrow('Aktuelle Empfänger (Top ${top3.length})'),
                      const SizedBox(height: AppSpacing.s2),
                      for (final c in top3)
                        Padding(
                          padding: const EdgeInsets.only(bottom: AppSpacing.s3),
                          child: _CauseCard(
                            cause: c,
                            share: sharePerProject,
                            showProgress: true,
                          ),
                        ),
                    ],
                    if (rest.isNotEmpty) ...[
                      const SizedBox(height: AppSpacing.s4),
                      const Eyebrow('Weitere Zwecke — jetzt abstimmen'),
                      const SizedBox(height: AppSpacing.s2),
                      for (final c in rest)
                        Padding(
                          padding: const EdgeInsets.only(bottom: AppSpacing.s3),
                          child: _CauseCard(cause: c),
                        ),
                    ],
                    if (suggested.isNotEmpty) ...[
                      const SizedBox(height: AppSpacing.s4),
                      const Eyebrow('Vorschläge von Kund*innen'),
                      const SizedBox(height: AppSpacing.s2),
                      for (final c in suggested)
                        Padding(
                          padding: const EdgeInsets.only(bottom: AppSpacing.s3),
                          child: _CauseCard(cause: c),
                        ),
                    ],
                  ],
                );
              },
            ),
            const SizedBox(height: AppSpacing.s6),
            const Row(
              children: [
                Icon(
                  Icons.lightbulb_outline,
                  color: AppColors.ink,
                  size: 20,
                ),
                SizedBox(width: 6),
                Eyebrow('Eigenen Vorschlag einreichen'),
              ],
            ),
            const SizedBox(height: AppSpacing.s3),
            const _SuggestForm(),
          ],
        ),
      ),
    );
  }

  Widget _errorCard(String message) => AppCard(
        color: const Color(0xFFF7DBDB),
        borderColor: AppColors.statusCritical,
        child: Text(
          message,
          style: AppTypography.body(size: 13, color: AppColors.ink),
        ),
      );
}

class _SummaryCard extends StatelessWidget {
  const _SummaryCard({required this.summary});
  final DonationSummary summary;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s5),
      child: Row(
        children: [
          Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              color: AppColors.brand,
              borderRadius: BorderRadius.circular(AppRadii.md),
            ),
            alignment: Alignment.center,
            child: const Icon(
              Icons.volunteer_activism,
              color: AppColors.ink,
              size: 32,
            ),
          ),
          const SizedBox(width: AppSpacing.s4),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  Formatters.euro(summary.totalDonated),
                  style: AppTypography.display(
                    size: 28,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                Text(
                  'aus ${summary.purchaseCount} '
                  '${summary.purchaseCount == 1 ? 'Einkauf' : 'Einkäufen'} '
                  'gespendet',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w600,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Zeigt den Gesamt-Spendenpool aller Kunden (App-Käufe + Automaten-Umsätze
/// aus Nayax) und dein prozentuales Verhältnis dazu — als Zahlenpaar und
/// als horizontaler Fortschrittsbalken.
class _PoolCard extends StatelessWidget {
  const _PoolCard({required this.pool});
  final DonationPoolSummary pool;

  @override
  Widget build(BuildContext context) {
    final share = (pool.mySharePct / 100).clamp(0.0, 1.0);
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: AppColors.brandLight,
                  border: Border.all(color: AppColors.brand),
                  borderRadius: BorderRadius.circular(AppRadii.md),
                ),
                alignment: Alignment.center,
                child: const Icon(
                  Icons.groups_outlined,
                  color: AppColors.ink,
                  size: 22,
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Gesamt aller Kunden',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w800,
                        color: AppColors.textMuted,
                      ).copyWith(letterSpacing: 0.3),
                    ),
                    Text(
                      Formatters.euro(pool.totalPool),
                      style: AppTypography.display(
                        size: 22,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Enthält Automaten-Umsätze (${Formatters.euro(pool.nonAppGross)} '
            'brutto der letzten 90 Tage) von Kunden ohne App. Datenquelle: '
            'Nayax → Bördesnack24-Backend.',
            style: AppTypography.body(size: 11, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s4),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                'Dein Anteil: ',
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
              Text(
                '${pool.mySharePct.toStringAsFixed(2).replaceAll('.', ',')} %',
                style: AppTypography.body(
                  size: 14,
                  weight: FontWeight.w800,
                  color: AppColors.statusPositive,
                ),
              ),
              const Spacer(),
              Text(
                '${Formatters.euro(pool.myDonated)} von '
                '${Formatters.euro(pool.totalPool)}',
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: LinearProgressIndicator(
              value: share,
              minHeight: 12,
              backgroundColor: AppColors.borderSubtle,
              valueColor:
                  const AlwaysStoppedAnimation<Color>(AppColors.statusPositive),
            ),
          ),
        ],
      ),
    );
  }
}

/// Zielbetrag pro Empfänger-Projekt. Sobald jedes der drei aktuellen
/// Empfänger 500 € erreicht hat, wird die Spende ausgezahlt — solange
/// darunter, sammelt sich der Pool weiter an.
const double _kProjectGoal = 500.0;

/// Kleiner Info-Block über den Empfänger-Karten, der die Verteil-Regel
/// transparent erklärt (jedes Projekt bekommt 1/3 des Pools; Auszahlung
/// erst wenn 500 € pro Projekt zusammengekommen sind).
class _DistributionExplainerCard extends StatelessWidget {
  const _DistributionExplainerCard({
    required this.share,
    required this.totalPool,
    required this.activeCount,
  });
  final double share;
  final double totalPool;
  final int activeCount;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: AppColors.brandLight,
      borderColor: AppColors.brand,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.balance, color: AppColors.ink, size: 20),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  'So wird verteilt',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            'Der Gesamt-Spendenpool wird zu gleichen Teilen auf die aktuell '
            'gewählten $activeCount Empfänger verteilt. Zielwert je Projekt: '
            '${Formatters.euro(_kProjectGoal)}. Erst wenn jedes Projekt '
            '${Formatters.euro(_kProjectGoal)} erreicht hat, wird '
            'ausgezahlt — bis dahin sammelt sich der Anteil weiter.',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w600,
              color: AppColors.ink,
            ).copyWith(height: 1.4),
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            children: [
              Expanded(
                child: _MiniStat(
                  label: 'Anteil je Projekt',
                  value: Formatters.euro(share),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: _MiniStat(
                  label: 'Gesamt-Pool',
                  value: Formatters.euro(totalPool),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _MiniStat extends StatelessWidget {
  const _MiniStat({required this.label, required this.value});
  final String label;
  final String value;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 10),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        border: Border.all(color: AppColors.brand),
        borderRadius: BorderRadius.circular(AppRadii.md),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label.toUpperCase(),
            style: AppTypography.body(
              size: 10,
              weight: FontWeight.w800,
              color: AppColors.textMuted,
            ).copyWith(letterSpacing: 0.6),
          ),
          const SizedBox(height: 2),
          Text(
            value,
            style: AppTypography.display(
              size: 18,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

/// Logo-Header für eine Cause-Card. Das Logo liegt oben über die volle
/// Kartenbreite und nimmt etwa das obere Drittel ein (AspectRatio 5:2).
/// Ohne hinterlegtes Logo rendert ein Cream-Platzhalter mit
/// Herz-Icon und „Logo folgt"-Beschriftung.
///
/// Rechts oben liegt der Voting-Status-Chip: gelber Herz-Kreis, wenn
/// der Kunde für den Zweck gestimmt hat; sonst ein transparenter
/// Umriss-Kreis mit dem Herz-Umriss.
class _CauseLogoHeader extends StatelessWidget {
  const _CauseLogoHeader({required this.cause});
  final DonationCause cause;
  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 5 / 2,
      child: Stack(
        children: [
          Positioned.fill(
            child: cause.logoUrl != null && cause.logoUrl!.isNotEmpty
                ? Image.network(
                    cause.logoUrl!,
                    fit: BoxFit.cover,
                    errorBuilder: (_, __, ___) => const _LogoPlaceholder(),
                  )
                : const _LogoPlaceholder(),
          ),
          Positioned(
            top: 8,
            right: 8,
            child: _VoteStatusChip(voted: cause.votedByMe),
          ),
        ],
      ),
    );
  }
}

class _VoteStatusChip extends StatelessWidget {
  const _VoteStatusChip({required this.voted});
  final bool voted;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 30,
      height: 30,
      decoration: BoxDecoration(
        color: voted ? AppColors.brand : AppColors.surfaceCard,
        border: Border.all(color: AppColors.ink, width: 1.2),
        borderRadius: BorderRadius.circular(15),
      ),
      alignment: Alignment.center,
      child: Icon(
        voted ? Icons.favorite : Icons.favorite_border,
        size: 16,
        color: voted ? AppColors.statusCritical : AppColors.textMuted,
      ),
    );
  }
}

class _LogoPlaceholder extends StatelessWidget {
  const _LogoPlaceholder();
  @override
  Widget build(BuildContext context) {
    return Container(
      color: AppColors.surfaceAlt,
      alignment: Alignment.center,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(
            Icons.volunteer_activism,
            color: AppColors.brand,
            size: 30,
          ),
          const SizedBox(height: 4),
          Text(
            'Logo folgt',
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w800,
              color: AppColors.textMuted,
            ).copyWith(letterSpacing: 0.4),
          ),
        ],
      ),
    );
  }
}

class _CauseCard extends ConsumerStatefulWidget {
  const _CauseCard({
    required this.cause,
    this.share,
    this.showProgress = false,
  });
  final DonationCause cause;

  /// Nur gesetzt für die Top-3-Empfänger — bestimmt Fortschritts-Anzeige.
  final double? share;
  final bool showProgress;

  @override
  ConsumerState<_CauseCard> createState() => _CauseCardState();
}

class _CauseCardState extends ConsumerState<_CauseCard> {
  bool _busy = false;

  Future<void> _toggle() async {
    setState(() => _busy = true);
    try {
      await ref
          .read(customerRepositoryProvider)
          .voteDonationCause(widget.cause.id);
      ref.invalidate(donationCausesProvider);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.cause;
    return AppCard(
      color: c.votedByMe ? AppColors.brandLight : AppColors.surfaceCard,
      borderColor: c.votedByMe ? AppColors.brand : AppColors.borderSubtle,
      // Kein Card-Padding — der Header greift bis an die Kartenränder;
      // das Padding kommt im _CauseCardBody dahinter.
      padding: EdgeInsets.zero,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Oberes Drittel: Logo/Bild-Header.
          _CauseLogoHeader(cause: c),
          // Unterer Bereich (~2/3): Titel, Beschreibung, Progress und
          // Voting-Footer, jeweils sauber gepaddet und durchgängig
          // vertikal ausgerichtet.
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s4,
              AppSpacing.s4,
              AppSpacing.s4,
              AppSpacing.s4,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  c.title,
                  style: AppTypography.display(
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                if (c.description != null && c.description!.isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Text(
                    c.description!,
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w600,
                      color: AppColors.textMuted,
                    ).copyWith(height: 1.35),
                  ),
                ],
                if (widget.showProgress && widget.share != null) ...[
                  const SizedBox(height: AppSpacing.s4),
                  _GoalProgress(collected: widget.share!),
                ],
                const SizedBox(height: AppSpacing.s4),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Icon(
                      Icons.people_outline,
                      size: 16,
                      color: AppColors.textMuted,
                    ),
                    const SizedBox(width: 4),
                    Text(
                      '${c.voteCount} ${c.voteCount == 1 ? 'Stimme' : 'Stimmen'}',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w800,
                        color: AppColors.textMuted,
                      ),
                    ),
                    if (c.isSuggested) ...[
                      const SizedBox(width: AppSpacing.s2),
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 8,
                          vertical: 2,
                        ),
                        decoration: BoxDecoration(
                          color: AppColors.brandLight,
                          border: Border.all(color: AppColors.brand),
                          borderRadius: BorderRadius.circular(AppRadii.pill),
                        ),
                        child: Text(
                          'Vorschlag',
                          style: AppTypography.body(
                            size: 10,
                            weight: FontWeight.w800,
                            color: AppColors.ink,
                          ),
                        ),
                      ),
                    ],
                    const Spacer(),
                    FilledButton(
                      onPressed: _busy ? null : _toggle,
                      style: FilledButton.styleFrom(
                        backgroundColor:
                            c.votedByMe ? AppColors.ink : AppColors.brand,
                        foregroundColor:
                            c.votedByMe ? AppColors.onDark : AppColors.ink,
                        padding: const EdgeInsets.symmetric(
                          horizontal: AppSpacing.s3,
                          vertical: 10,
                        ),
                      ),
                      child: _busy
                          ? const SizedBox(
                              width: 14,
                              height: 14,
                              child: CircularProgressIndicator(
                                strokeWidth: 2,
                                color: AppColors.onDark,
                              ),
                            )
                          : Text(
                              c.votedByMe ? 'Stimme entfernen' : 'Abstimmen',
                              style: AppTypography.body(
                                size: 12,
                                weight: FontWeight.w800,
                              ),
                            ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Fortschrittsanzeige eines Empfänger-Projekts gegen den 500 €-Zielwert.
///
/// Zeigt den bereits **absolut** gesammelten Betrag (linke Zahl) und
/// den **relativen** Fortschritt in Prozent (rechte Zahl). Ist der Anteil
/// kleiner als das Ziel, bleibt der Balken innerhalb 100 % — überschreitet
/// er das Ziel, gibt es einen zweiten Balken-Abschnitt in einem
/// abweichenden Farbton für den „Bonus"-Anteil.
class _GoalProgress extends StatelessWidget {
  const _GoalProgress({required this.collected});
  final double collected;

  @override
  Widget build(BuildContext context) {
    final baseFrac = (collected / _kProjectGoal).clamp(0.0, 1.0);
    final overshootFrac =
        collected > _kProjectGoal ? (collected / _kProjectGoal) - 1.0 : 0.0;
    // Der Fortschritts-Anteil wird auf max. 100 % + 100 % (also
    // 500 → 1000 €) skaliert für die visuelle Anzeige.
    final overshootShown = overshootFrac.clamp(0.0, 1.0);
    final pctText = (collected / _kProjectGoal * 100)
        .toStringAsFixed(0)
        .replaceAll('-', '');
    final reached = collected >= _kProjectGoal;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            Text(
              Formatters.euro(collected),
              style: AppTypography.display(
                size: 20,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(width: 6),
            Expanded(
              child: Text(
                '/ ${Formatters.euro(_kProjectGoal)} Ziel',
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
            ),
            Text(
              '$pctText %',
              style: AppTypography.body(
                size: 14,
                weight: FontWeight.w800,
                color: reached ? AppColors.statusPositive : AppColors.ink,
              ),
            ),
          ],
        ),
        const SizedBox(height: 6),
        ClipRRect(
          borderRadius: BorderRadius.circular(6),
          child: Stack(
            children: [
              Container(
                height: 12,
                color: AppColors.borderSubtle,
              ),
              FractionallySizedBox(
                widthFactor: baseFrac,
                child: Container(
                  height: 12,
                  color: reached ? AppColors.statusPositive : AppColors.brand,
                ),
              ),
              if (overshootShown > 0)
                FractionallySizedBox(
                  widthFactor: overshootShown,
                  child: Container(
                    height: 12,
                    decoration: BoxDecoration(
                      color: AppColors.statusPositive.withValues(alpha: 0.5),
                    ),
                  ),
                ),
            ],
          ),
        ),
        const SizedBox(height: 5),
        if (reached)
          Text(
            'Ziel erreicht — Auszahlung, sobald alle drei Projekte '
            '${Formatters.euro(_kProjectGoal)} haben.',
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w700,
              color: AppColors.statusPositive,
            ),
          )
        else
          // Der handlungsleitende Wert: was noch fehlt — als Zahl, nicht
          // als Rechenaufgabe aus Ist und Ziel.
          Text(
            'noch ${Formatters.euro(_kProjectGoal - collected)} bis zur '
            'Auszahlung',
            style: AppTypography.body(
              size: 11,
              weight: FontWeight.w700,
              color: AppColors.textMuted,
            ),
          ),
      ],
    );
  }
}

class _SuggestForm extends ConsumerStatefulWidget {
  const _SuggestForm();
  @override
  ConsumerState<_SuggestForm> createState() => _SuggestFormState();
}

class _SuggestFormState extends ConsumerState<_SuggestForm> {
  final _title = TextEditingController();
  final _desc = TextEditingController();
  bool _busy = false;

  @override
  void dispose() {
    _title.dispose();
    _desc.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    final title = _title.text.trim();
    if (title.length < 3) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Bitte einen aussagekräftigen Titel angeben.'),
        ),
      );
      return;
    }
    setState(() => _busy = true);
    try {
      await ref.read(customerRepositoryProvider).suggestDonationCause(
            title,
            _desc.text.trim().isEmpty ? null : _desc.text.trim(),
          );
      _title.clear();
      _desc.clear();
      ref.invalidate(donationCausesProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Vorschlag eingereicht — er erscheint jetzt unter „Vorschläge".',
            ),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          TextField(
            controller: _title,
            textCapitalization: TextCapitalization.sentences,
            decoration: const InputDecoration(
              labelText: 'Titel des Zwecks',
              hintText: 'z. B. Tierheim Magdeburg',
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          TextField(
            controller: _desc,
            maxLines: 3,
            textCapitalization: TextCapitalization.sentences,
            decoration: const InputDecoration(
              labelText: 'Kurzbeschreibung (optional)',
              hintText: 'Wem und wofür sollen die Mittel helfen?',
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          FilledButton.icon(
            onPressed: _busy ? null : _submit,
            icon: _busy
                ? const SizedBox(
                    width: 14,
                    height: 14,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: AppColors.ink,
                    ),
                  )
                : const Icon(Icons.send_outlined, size: 18),
            label: const Text('Vorschlag einreichen'),
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
              padding: const EdgeInsets.symmetric(vertical: 12),
            ),
          ),
        ],
      ),
    );
  }
}
