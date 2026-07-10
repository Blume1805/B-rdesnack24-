import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
    final causes = ref.watch(donationCausesProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Meine Spenden')),
      body: RefreshIndicator(
        color: AppColors.brand,
        onRefresh: () async {
          ref
            ..invalidate(myDonationSummaryProvider)
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
            const SizedBox(height: AppSpacing.s6),

            Row(
              children: [
                const Icon(Icons.how_to_vote_outlined,
                    color: AppColors.ink, size: 20),
                const SizedBox(width: 6),
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
                final active =
                    list.where((c) => c.isActive).toList();
                final suggested =
                    list.where((c) => c.isSuggested).toList();
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    for (final c in active)
                      Padding(
                        padding:
                            const EdgeInsets.only(bottom: AppSpacing.s3),
                        child: _CauseCard(cause: c),
                      ),
                    if (suggested.isNotEmpty) ...[
                      const SizedBox(height: AppSpacing.s4),
                      const Eyebrow('Vorschläge von Kund*innen'),
                      const SizedBox(height: AppSpacing.s2),
                      for (final c in suggested)
                        Padding(
                          padding:
                              const EdgeInsets.only(bottom: AppSpacing.s3),
                          child: _CauseCard(cause: c),
                        ),
                    ],
                  ],
                );
              },
            ),

            const SizedBox(height: AppSpacing.s6),
            Row(
              children: [
                const Icon(Icons.lightbulb_outline,
                    color: AppColors.ink, size: 20),
                const SizedBox(width: 6),
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
            child: const Icon(Icons.volunteer_activism,
                color: AppColors.ink, size: 32),
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

class _CauseCard extends ConsumerStatefulWidget {
  const _CauseCard({required this.cause});
  final DonationCause cause;
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
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(
            c.votedByMe ? Icons.favorite : Icons.favorite_border,
            color: c.votedByMe ? AppColors.statusCritical : AppColors.ink,
            size: 26,
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  c.title,
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                if (c.description != null) ...[
                  const SizedBox(height: 2),
                  Text(
                    c.description!,
                    style: AppTypography.body(
                      size: 12,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
                const SizedBox(height: AppSpacing.s2),
                Row(
                  children: [
                    Icon(Icons.people_outline,
                        size: 14, color: AppColors.textMuted),
                    const SizedBox(width: 4),
                    Text(
                      '${c.voteCount} ${c.voteCount == 1 ? 'Stimme' : 'Stimmen'}',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.textMuted,
                      ),
                    ),
                    if (c.isSuggested) ...[
                      const SizedBox(width: AppSpacing.s2),
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: AppColors.brandLight,
                          border: Border.all(color: AppColors.brand),
                          borderRadius:
                              BorderRadius.circular(AppRadii.pill),
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
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(width: AppSpacing.s2),
          FilledButton(
            onPressed: _busy ? null : _toggle,
            style: FilledButton.styleFrom(
              backgroundColor:
                  c.votedByMe ? AppColors.ink : AppColors.brand,
              foregroundColor:
                  c.votedByMe ? AppColors.onDark : AppColors.ink,
              padding: const EdgeInsets.symmetric(
                  horizontal: AppSpacing.s3, vertical: 10),
            ),
            child: _busy
                ? const SizedBox(
                    width: 14,
                    height: 14,
                    child: CircularProgressIndicator(
                        strokeWidth: 2, color: AppColors.onDark),
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
        const SnackBar(content: Text('Bitte einen aussagekräftigen Titel angeben.')),
      );
      return;
    }
    setState(() => _busy = true);
    try {
      await ref
          .read(customerRepositoryProvider)
          .suggestDonationCause(title, _desc.text.trim().isEmpty ? null : _desc.text.trim());
      _title.clear();
      _desc.clear();
      ref.invalidate(donationCausesProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
              content: Text(
                  'Vorschlag eingereicht — er erscheint jetzt unter „Vorschläge".')),
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
                        strokeWidth: 2, color: AppColors.ink),
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
