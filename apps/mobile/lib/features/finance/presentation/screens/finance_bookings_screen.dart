import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/finance_booking.dart';
import '../controllers/finance_providers.dart';

/// Einzelbuchungen des gewählten Zeitraums — jeder sevDesk-Beleg und jede
/// manuelle Erfassung einzeln, statt nur als Summe je Konto.
///
/// Optional auf ein Konto vorgefiltert: Aus dem Dashboard führt ein Tipp auf
/// eine Kontozeile direkt hierher, damit „3400: 1.240,00 €" beantwortbar
/// wird. Serverseitig ist der Zugriff über `finance.view` beschränkt
/// (RPC `finance_bookings_list`).
class FinanceBookingsScreen extends ConsumerStatefulWidget {
  const FinanceBookingsScreen({super.key, this.accountCode});

  /// Vorauswahl: nur Buchungen auf dieses SKR-03-Konto zeigen.
  final String? accountCode;

  @override
  ConsumerState<FinanceBookingsScreen> createState() =>
      _FinanceBookingsScreenState();
}

enum _Filter { alle, aufwand, erloes, privat }

class _FinanceBookingsScreenState extends ConsumerState<FinanceBookingsScreen> {
  _Filter _filter = _Filter.alle;
  late String? _konto = widget.accountCode;

  @override
  Widget build(BuildContext context) {
    final period = ref.watch(selectedPeriodProvider);
    final buchungen = ref.watch(financeBookingsProvider);

    return Scaffold(
      appBar: const HeroAppBar(title: Text('Einzelbuchungen')),
      body: RefreshIndicator(
        onRefresh: () async => ref.invalidate(financeBookingsProvider),
        color: AppColors.brand,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s8,
          ),
          children: [
            SectionHeader(
              eyebrow: 'Zeitraum',
              title: '${Formatters.date(period.from)} – '
                  '${Formatters.date(period.to)}',
            ),
            const SizedBox(height: AppSpacing.s4),
            _FilterLeiste(
              filter: _filter,
              konto: _konto,
              onFilter: (f) => setState(() => _filter = f),
              onKontoLoeschen: () => setState(() => _konto = null),
            ),
            const SizedBox(height: AppSpacing.s5),
            buchungen.when(
              loading: () => const Padding(
                padding: EdgeInsets.all(48),
                child: Center(
                  child: CircularProgressIndicator(color: AppColors.brand),
                ),
              ),
              error: (e, _) => _Hinweis(
                text: 'Buchungen konnten nicht geladen werden: $e',
                farbe: AppColors.statusCritical,
                icon: Icons.error_outline,
              ),
              data: (seite) => _Liste(
                seite: seite,
                gefiltert: _anwenden(seite.bookings),
              ),
            ),
          ],
        ),
      ),
    );
  }

  List<FinanceBooking> _anwenden(List<FinanceBooking> alle) {
    return alle.where((b) {
      if (_konto != null && b.accountCode != _konto) return false;
      switch (_filter) {
        case _Filter.alle:
          return true;
        case _Filter.aufwand:
          return b.isExpense;
        case _Filter.erloes:
          return b.isRevenue;
        case _Filter.privat:
          return b.isNeutral;
      }
    }).toList();
  }
}

class _FilterLeiste extends StatelessWidget {
  const _FilterLeiste({
    required this.filter,
    required this.konto,
    required this.onFilter,
    required this.onKontoLoeschen,
  });

  final _Filter filter;
  final String? konto;
  final ValueChanged<_Filter> onFilter;
  final VoidCallback onKontoLoeschen;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 6,
      children: [
        _Chip(
          label: 'Alle',
          aktiv: filter == _Filter.alle,
          onTap: () => onFilter(_Filter.alle),
        ),
        _Chip(
          label: 'Ausgaben',
          aktiv: filter == _Filter.aufwand,
          onTap: () => onFilter(_Filter.aufwand),
        ),
        _Chip(
          label: 'Erlöse',
          aktiv: filter == _Filter.erloes,
          onTap: () => onFilter(_Filter.erloes),
        ),
        _Chip(
          label: 'Privat',
          aktiv: filter == _Filter.privat,
          onTap: () => onFilter(_Filter.privat),
        ),
        if (konto != null)
          _Chip(
            label: 'Konto $konto ×',
            aktiv: true,
            onTap: onKontoLoeschen,
          ),
      ],
    );
  }
}

class _Chip extends StatelessWidget {
  const _Chip({required this.label, required this.aktiv, required this.onTap});

  final String label;
  final bool aktiv;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    // Ein InkWell mit Text darin ist für den Screenreader nur Text: Weder
    // dass es sich antippen lässt noch ob es gerade gewählt ist, käme an.
    return Semantics(
      button: true,
      selected: aktiv,
      label: 'Filter $label',
      child: _rahmen(),
    );
  }

  Widget _rahmen() {
    return Material(
      color: aktiv ? AppColors.brandLight : AppColors.surfaceAlt,
      borderRadius: BorderRadius.circular(AppRadii.pill),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        child: Container(
          padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s3,
            vertical: 8,
          ),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppRadii.pill),
            border: Border.all(
              color: aktiv ? AppColors.brand : AppColors.borderSubtle,
            ),
          ),
          child: Text(
            label,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ),
      ),
    );
  }
}

class _Liste extends StatelessWidget {
  const _Liste({required this.seite, required this.gefiltert});

  final FinanceBookingPage seite;
  final List<FinanceBooking> gefiltert;

  @override
  Widget build(BuildContext context) {
    if (seite.isEmpty) {
      return const _Hinweis(
        text: 'Im gewählten Zeitraum ist keine Buchung erfasst. Über die '
            'Aktion „sevDesk synchronisieren" im Dashboard werden Belege aus '
            'sevDesk übernommen.',
        farbe: AppColors.textMuted,
        icon: Icons.info_outline,
      );
    }
    if (gefiltert.isEmpty) {
      return const _Hinweis(
        text: 'Keine Buchung passt zu dieser Auswahl.',
        farbe: AppColors.textMuted,
        icon: Icons.filter_alt_off_outlined,
      );
    }

    final summeAufwand = gefiltert
        .where((b) => b.isExpense)
        .fold<double>(0, (s, b) => s + b.net);
    final summeErloes = gefiltert
        .where((b) => b.isRevenue)
        .fold<double>(0, (s, b) => s + b.net);
    final summePrivat = gefiltert
        .where((b) => b.isNeutral)
        .fold<double>(0, (s, b) => s + b.net);
    final geschaetzt = gefiltert.where((b) => b.kontoGeschaetzt).length;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        AppCard(
          color: AppColors.surfaceAlt,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                '${gefiltert.length} Buchungen · Erlöse '
                '${Formatters.euro(summeErloes)} · Aufwand '
                '${Formatters.euro(summeAufwand)}'
                // Privatentnahmen und -einlagen gehören in keine der beiden
                // Summen. Sie zu verschweigen wäre aber genauso falsch wie
                // sie mitzurechnen.
                '${summePrivat == 0 ? '' : ' · Privat ${Formatters.euro(summePrivat)}'}',
                style: AppTypography.body(
                  size: 14,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
              if (seite.notShown > 0) ...[
                const SizedBox(height: 4),
                Text(
                  '${seite.notShown} weitere Buchungen im Zeitraum werden '
                  'nicht angezeigt — die Liste ist serverseitig begrenzt. '
                  'Zeitraum eingrenzen, um sie zu sehen.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
              if (geschaetzt > 0) ...[
                const SizedBox(height: 4),
                Text(
                  '$geschaetzt Buchungen sitzen auf einem Sammelkonto: '
                  'sevDesk hat zu ihnen kein Konto mitgeliefert, das im '
                  'Kontenstamm steht. Das Konto ist dort nach Steuersatz '
                  'gesetzt, nicht übernommen.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.statusCritical,
                  ),
                ),
              ],
            ],
          ),
        ),
        const SizedBox(height: AppSpacing.s4),
        for (final b in gefiltert) ...[
          _BuchungsZeile(buchung: b),
          const SizedBox(height: AppSpacing.s2),
        ],
      ],
    );
  }
}

class _BuchungsZeile extends StatelessWidget {
  const _BuchungsZeile({required this.buchung});

  final FinanceBooking buchung;

  @override
  Widget build(BuildContext context) {
    final b = buchung;
    return AppCard(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Text(
                  b.description?.trim().isNotEmpty == true
                      ? b.description!.trim()
                      : 'Ohne Bezeichnung',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
              Text(
                Formatters.euro(b.net),
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w700,
                  color: b.isRevenue ? AppColors.statusPositive : AppColors.ink,
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            '${Formatters.date(b.date)} · ${b.accountCode} ${b.accountName} '
            '· ${b.directionLabel}',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          const SizedBox(height: 2),
          Text(
            'USt ${b.taxRate.toStringAsFixed(1)} % '
            '(${Formatters.euro(b.tax)}) · brutto '
            '${Formatters.euro(b.gross)} · ${b.sourceLabel}'
            '${b.sourceRef == null ? '' : ' #${b.sourceRef}'}',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          if (b.kontoGeschaetzt) ...[
            const SizedBox(height: 4),
            Row(
              children: [
                const Icon(
                  Icons.help_outline,
                  size: 14,
                  color: AppColors.statusCritical,
                ),
                const SizedBox(width: 4),
                Expanded(
                  child: Text(
                    'Konto nach Steuersatz gesetzt, nicht aus sevDesk '
                    'übernommen.',
                    style: AppTypography.body(
                      size: 11,
                      color: AppColors.statusCritical,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

class _Hinweis extends StatelessWidget {
  const _Hinweis({
    required this.text,
    required this.farbe,
    required this.icon,
  });

  final String text;
  final Color farbe;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: AppColors.surfaceAlt,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: farbe),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Text(
              text,
              style: AppTypography.body(size: 14, color: AppColors.ink),
            ),
          ),
        ],
      ),
    );
  }
}
