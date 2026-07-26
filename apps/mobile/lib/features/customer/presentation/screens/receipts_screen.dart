import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../management/presentation/widgets/pdf_inline_stub.dart'
    if (dart.library.js_interop) '../../../management/presentation/widgets/pdf_inline_web.dart';
import '../../domain/entities/receipt.dart';
import '../controllers/customer_providers.dart';
import '../widgets/receipt_export_stub.dart'
    if (dart.library.js_interop) '../widgets/receipt_export_web.dart';

/// Belegarchiv: strukturierte, durchsuchbare Übersicht aller Käufe. Freitext-
/// Suche, Kategorie-Filter, Monats-/Gesamtsumme, CSV-Export und je Beleg der
/// digitale Kassenbon (PDF). Faktenbasierte Kaufdaten — keine algorithmisch
/// erzeugten/ausgewählten Inhalte, daher kein KI-Chip nötig.
class ReceiptsScreen extends ConsumerStatefulWidget {
  const ReceiptsScreen({super.key});

  @override
  ConsumerState<ReceiptsScreen> createState() => _ReceiptsScreenState();
}

class _ReceiptsScreenState extends ConsumerState<ReceiptsScreen> {
  String _query = '';
  String? _category; // null = alle
  bool _exporting = false;

  static String _srcLabel(String s) => switch (s) {
        'nayax' => 'Automat',
        'import' => 'Import',
        _ => 'Manuell',
      };

  static String _two(int n) => n.toString().padLeft(2, '0');
  static String _time(DateTime d) => '${_two(d.hour)}:${_two(d.minute)}';

  List<Receipt> _filter(List<Receipt> all) => all
      .where((r) => _category == null || r.category == _category)
      .where((r) => r.matches(_query))
      .toList();

  Future<void> _export(List<Receipt> rows) async {
    if (_exporting || rows.isEmpty) return;
    setState(() => _exporting = true);
    try {
      final csv = _buildCsv(rows);
      final stamp = Formatters.date(DateTime.now()).replaceAll('.', '-');
      final status = await shareCsv(csv, 'belege_$stamp.csv');
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            status == 'downloaded'
                ? '${rows.length} Belege als CSV exportiert.'
                : '${rows.length} Belege als CSV in die Zwischenablage kopiert.',
          ),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text('Export fehlgeschlagen: $e'),
        ),
      );
    } finally {
      if (mounted) setState(() => _exporting = false);
    }
  }

  static String _buildCsv(List<Receipt> rs) {
    String esc(String s) => '"${s.replaceAll('"', '""')}"';
    String eur(double v) => v.toStringAsFixed(2).replaceAll('.', ',');
    final b = StringBuffer('Datum;Uhrzeit;Automat;Kategorie;Artikel;Betrag\n');
    for (final r in rs) {
      final line = [
        esc(Formatters.date(r.purchasedAt)),
        esc(_time(r.purchasedAt)),
        esc(r.machineName ?? '—'),
        esc(r.category),
        esc(r.itemCount.toString()),
        esc(eur(r.totalGross)),
      ].join(';');
      b.writeln(line);
    }
    return b.toString();
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(myReceiptsProvider);
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Belegarchiv')),
      body: async.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Center(
          child: Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text(
              'Belege konnten nicht geladen werden: $e',
              style: AppTypography.body(size: 13, color: AppColors.ink),
            ),
          ),
        ),
        data: (all) {
          final cats = <String>{for (final r in all) r.category}.toList()
            ..sort();
          final rows = _filter(all);
          final sum = rows.fold<double>(0, (a, r) => a + r.totalGross);
          return RefreshIndicator(
            color: AppColors.brand,
            onRefresh: () async => ref.invalidate(myReceiptsProvider),
            child: ListView(
              padding: const EdgeInsets.fromLTRB(
                AppSpacing.s5,
                AppSpacing.s5,
                AppSpacing.s5,
                AppSpacing.s8,
              ),
              children: [
                const SectionHeader(
                  eyebrow: 'Mein Konto',
                  title: 'Belegarchiv',
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Alle Käufe durchsuchbar. Beleg als PDF, Export als CSV.',
                  style:
                      AppTypography.body(size: 13, color: AppColors.textMuted),
                ),
                const SizedBox(height: AppSpacing.s4),
                if (all.isEmpty)
                  AppCard(
                    color: AppColors.surfaceAlt,
                    child: Text(
                      'Noch keine Käufe vorhanden. Sobald du am Automaten '
                      'kaufst, erscheinen deine Belege hier.',
                      style: AppTypography.body(
                        size: 13,
                        color: AppColors.textMuted,
                      ).copyWith(height: 1.4),
                    ),
                  )
                else ...[
                  // Suche
                  TextField(
                    onChanged: (v) => setState(() => _query = v),
                    decoration: InputDecoration(
                      hintText: 'Produkt oder Automat suchen',
                      prefixIcon: const Icon(Icons.search, size: 20),
                      isDense: true,
                      filled: true,
                      fillColor: AppColors.surfaceCard,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(AppRadii.md),
                        borderSide: const BorderSide(
                          color: AppColors.borderSubtle,
                        ),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(AppRadii.md),
                        borderSide: const BorderSide(
                          color: AppColors.borderSubtle,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                  // Kategorie-Filter
                  SizedBox(
                    height: 34,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: [
                        _FilterChip(
                          label: 'Alle',
                          selected: _category == null,
                          onTap: () => setState(() => _category = null),
                        ),
                        for (final c in cats)
                          _FilterChip(
                            label: c,
                            selected: _category == c,
                            onTap: () => setState(() => _category = c),
                          ),
                      ],
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                  // Summenzeile + Export
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          '${rows.length} Belege · ${Formatters.euro(sum)}',
                          style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w700,
                            color: AppColors.ink,
                          ),
                        ),
                      ),
                      TextButton.icon(
                        onPressed: _exporting ? null : () => _export(rows),
                        style: TextButton.styleFrom(
                          foregroundColor: AppColors.brandDark,
                          padding: EdgeInsets.zero,
                        ),
                        icon: const Icon(Icons.download_outlined, size: 18),
                        label: const Text('CSV'),
                      ),
                    ],
                  ),
                  const SizedBox(height: AppSpacing.s2),
                  if (rows.isEmpty)
                    Padding(
                      padding: const EdgeInsets.symmetric(
                        vertical: AppSpacing.s5,
                      ),
                      child: Text(
                        'Keine Belege passen zur Suche.',
                        style: AppTypography.body(
                          size: 13,
                          color: AppColors.textMuted,
                        ),
                      ),
                    )
                  else
                    for (final r in rows) ...[
                      _ReceiptCard(
                        receipt: r,
                        srcLabel: _srcLabel(r.source),
                        onTap: () => _showDetail(r),
                      ),
                      const SizedBox(height: AppSpacing.s3),
                    ],
                ],
                const SizedBox(height: AppSpacing.s6),
                // Demo-Testkäufe: erzeugen einen Kauf am Automaten (Live
                // ersetzt der Nayax-Webhook diesen Trigger). Hier gebündelt
                // mit der Kaufhistorie/den Belegen.
                const Row(
                  children: [
                    Icon(
                      Icons.science_outlined,
                      size: 16,
                      color: AppColors.brand,
                    ),
                    SizedBox(width: 6),
                    Eyebrow('Demo-Testkauf'),
                  ],
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Simuliert einen Kauf am Automaten. Im Live-Betrieb liefert '
                  'der Nayax-Webhook Datum, Produkt, Menge und Zahlungsart '
                  'automatisch.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                const _DemoPurchaseButtons(),
              ],
            ),
          );
        },
      ),
    );
  }

  void _showDetail(Receipt r) {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadii.lg)),
      ),
      builder: (_) => _ReceiptDetailSheet(receipt: r, srcLabel: _srcLabel),
    );
  }
}

class _FilterChip extends StatelessWidget {
  const _FilterChip({
    required this.label,
    required this.selected,
    required this.onTap,
  });
  final String label;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: AppSpacing.s2),
      child: Material(
        color: selected ? AppColors.ink : AppColors.surfaceCard,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        child: InkWell(
          borderRadius: BorderRadius.circular(AppRadii.pill),
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 7),
            child: Text(
              label,
              style: AppTypography.body(
                size: 12,
                weight: FontWeight.w700,
                color: selected ? AppColors.brand : AppColors.textDefault,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _ReceiptCard extends StatelessWidget {
  const _ReceiptCard({
    required this.receipt,
    required this.srcLabel,
    required this.onTap,
  });
  final Receipt receipt;
  final String srcLabel;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final r = receipt;
    return AppCard(
      onTap: onTap,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  Formatters.date(r.purchasedAt),
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              Text(
                Formatters.euro(r.totalGross),
                style: AppTypography.display(
                  size: 18,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Wrap(
            spacing: 6,
            runSpacing: 4,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              _Tag(r.category, filled: true),
              _Tag('${r.itemCount} Artikel'),
              if (r.machineName != null) _Tag(r.machineName!),
              _Tag(srcLabel),
            ],
          ),
        ],
      ),
    );
  }
}

class _Tag extends StatelessWidget {
  const _Tag(this.text, {this.filled = false});
  final String text;
  final bool filled;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: filled ? AppColors.brandLight : AppColors.surfaceAlt,
        borderRadius: BorderRadius.circular(AppRadii.pill),
      ),
      child: Text(
        text,
        style: AppTypography.body(
          size: 10.5,
          weight: FontWeight.w700,
          color: filled ? AppColors.brandDark : AppColors.textMuted,
        ),
      ),
    );
  }
}

class _ReceiptDetailSheet extends ConsumerStatefulWidget {
  const _ReceiptDetailSheet({required this.receipt, required this.srcLabel});
  final Receipt receipt;
  final String Function(String) srcLabel;

  @override
  ConsumerState<_ReceiptDetailSheet> createState() =>
      _ReceiptDetailSheetState();
}

class _ReceiptDetailSheetState extends ConsumerState<_ReceiptDetailSheet> {
  bool _busy = false;

  Future<void> _openPdf() async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      final res = await ref.read(supabaseClientProvider).functions.invoke(
        'receipt-pdf',
        body: {'purchase_id': widget.receipt.id},
      );
      final data = res.data;
      if (data is! Map || data['base64'] is! String) {
        throw Exception((data is Map ? data['error'] : null) ?? 'Kein PDF');
      }
      await sharePdfBytes(
        base64Decode(data['base64'] as String),
        (data['filename'] as String?) ?? 'kassenbon.pdf',
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text('Bon konnte nicht erzeugt werden: $e'),
        ),
      );
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  static ({String label, Color color}) _complaintBadge(String status) {
    switch (status) {
      case 'in_progress':
        return (
          label: 'Reklamation in Bearbeitung',
          color: AppColors.brandDark
        );
      case 'resolved':
        return (label: 'Reklamation erledigt', color: AppColors.statusPositive);
      case 'rejected':
        return (
          label: 'Reklamation abgelehnt',
          color: AppColors.statusCritical
        );
      case 'open':
      default:
        return (label: 'Reklamation eingegangen', color: AppColors.brandDark);
    }
  }

  /// Reklamation zum Kauf melden — Bottom-Sheet mit Problemart + Kommentar.
  Future<void> _reportProblem() async {
    final r = widget.receipt;
    var kind = 'not_received';
    final commentCtrl = TextEditingController();
    const kinds = <(String, String, IconData)>[
      (
        'not_received',
        'Produkt nicht erhalten',
        Icons.remove_shopping_cart_outlined
      ),
      ('damaged', 'Produkt beschädigt', Icons.broken_image_outlined),
      ('wrong_product', 'Falsches Produkt', Icons.swap_horiz_outlined),
      ('other', 'Sonstiges', Icons.help_outline),
    ];
    final submitted = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadii.lg)),
      ),
      builder: (sctx) => StatefulBuilder(
        builder: (sctx, setSheet) => Padding(
          padding: EdgeInsets.only(
            left: AppSpacing.s5,
            right: AppSpacing.s5,
            top: AppSpacing.s5,
            bottom: MediaQuery.of(sctx).viewInsets.bottom + AppSpacing.s5,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Eyebrow('Reklamation'),
              const SizedBox(height: 2),
              Text(
                'Problem mit diesem Kauf melden',
                style: AppTypography.display(
                  size: 18,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(height: AppSpacing.s2),
              Text(
                'Kauf vom ${Formatters.date(r.purchasedAt)} über '
                '${Formatters.euro(r.totalGross)}. Den Status siehst du '
                'danach hier am Beleg.',
                style: AppTypography.body(size: 12, color: AppColors.textMuted)
                    .copyWith(height: 1.4),
              ),
              const SizedBox(height: AppSpacing.s3),
              for (final k in kinds)
                RadioListTile<String>(
                  value: k.$1,
                  // ignore: deprecated_member_use
                  groupValue: kind,
                  // ignore: deprecated_member_use
                  onChanged: (v) => setSheet(() => kind = v ?? kind),
                  dense: true,
                  contentPadding: EdgeInsets.zero,
                  activeColor: AppColors.brand,
                  title: Row(
                    children: [
                      Icon(k.$3, size: 16, color: AppColors.ink),
                      const SizedBox(width: 6),
                      Text(
                        k.$2,
                        style:
                            AppTypography.body(size: 13, color: AppColors.ink),
                      ),
                    ],
                  ),
                ),
              const SizedBox(height: AppSpacing.s2),
              TextField(
                controller: commentCtrl,
                maxLines: 3,
                maxLength: 500,
                decoration: const InputDecoration(
                  labelText: 'Was ist passiert? (optional)',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: AppSpacing.s3),
              SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  onPressed: () => Navigator.of(sctx).pop(true),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.ink,
                    foregroundColor: AppColors.brand,
                  ),
                  icon: const Icon(Icons.send_outlined, size: 18),
                  label: const Text('Reklamation absenden'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
    if (submitted != true) return;
    try {
      final client = ref.read(supabaseClientProvider);
      await client.from('purchase_complaints').insert({
        'purchase_id': r.id,
        'customer_id': client.auth.currentUser!.id,
        'kind': kind,
        'comment':
            commentCtrl.text.trim().isEmpty ? null : commentCtrl.text.trim(),
      });
      ref.invalidate(myComplaintsByPurchaseProvider);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Reklamation eingegangen — wir prüfen das.'),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      final duplicate =
          e.toString().contains('uq_complaints_open_per_purchase');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: duplicate ? AppColors.ink : AppColors.statusCritical,
          content: Text(
            duplicate
                ? 'Zu diesem Kauf läuft bereits eine Reklamation.'
                : 'Reklamation fehlgeschlagen: $e',
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final r = widget.receipt;
    final complaint =
        ref.watch(myComplaintsByPurchaseProvider).valueOrNull?[r.id];
    final warranty = r.warrantyUntil == null
        ? 'Lebensmittel — Gewährleistung an MHD/Verbrauch gebunden.'
        : 'Gewährleistung bis ${Formatters.date(r.warrantyUntil!)} (§ 438 BGB).';
    return Padding(
      padding: EdgeInsets.only(
        left: AppSpacing.s5,
        right: AppSpacing.s5,
        top: AppSpacing.s5,
        bottom: MediaQuery.of(context).viewInsets.bottom + AppSpacing.s6,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Beleg vom ${Formatters.date(r.purchasedAt)}',
            style: AppTypography.display(
              size: 18,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            '${r.machineName ?? 'Automat'} · ${widget.srcLabel(r.source)}',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s4),
          for (final it in r.items)
            Padding(
              padding: const EdgeInsets.only(bottom: AppSpacing.s2),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '${it.quantity}×',
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w800,
                      color: AppColors.textMuted,
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      it.label,
                      style: AppTypography.body(
                        size: 13,
                        weight: FontWeight.w600,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                  Text(
                    Formatters.euro(it.lineGross),
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w700,
                      color: AppColors.ink,
                    ),
                  ),
                ],
              ),
            ),
          const Divider(height: AppSpacing.s5, color: AppColors.borderSubtle),
          Row(
            children: [
              Expanded(
                child: Text(
                  'Gesamt',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              Text(
                Formatters.euro(r.totalGross),
                style: AppTypography.display(
                  size: 20,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Icon(
                Icons.verified_outlined,
                size: 16,
                color: AppColors.textMuted,
              ),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  warranty,
                  style: AppTypography.body(
                    size: 11.5,
                    color: AppColors.textMuted,
                  ).copyWith(height: 1.35),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s4),
          SizedBox(
            width: double.infinity,
            child: FilledButton.icon(
              onPressed: _busy ? null : _openPdf,
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.ink,
                foregroundColor: AppColors.brand,
                padding: const EdgeInsets.symmetric(vertical: 12),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
              icon: _busy
                  ? const SizedBox(
                      width: 16,
                      height: 16,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        color: AppColors.brand,
                      ),
                    )
                  : const Icon(Icons.picture_as_pdf_outlined, size: 18),
              label: const Text('Beleg als PDF'),
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          if (complaint == null)
            SizedBox(
              width: double.infinity,
              child: OutlinedButton.icon(
                onPressed: _reportProblem,
                icon: const Icon(Icons.flag_outlined, size: 18),
                label: const Text('Problem melden'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppColors.ink,
                  side: const BorderSide(color: AppColors.borderSubtle),
                  padding: const EdgeInsets.symmetric(vertical: 11),
                ),
              ),
            )
          else
            Builder(
              builder: (context) {
                final badge =
                    _complaintBadge(complaint['status'] as String? ?? 'open');
                return Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(
                    horizontal: AppSpacing.s3,
                    vertical: 10,
                  ),
                  decoration: BoxDecoration(
                    color: AppColors.surfaceAlt,
                    border: Border.all(color: badge.color),
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    badge.label,
                    style: AppTypography.body(
                      size: 12,
                      weight: FontWeight.w700,
                      color: badge.color,
                    ),
                  ),
                );
              },
            ),
        ],
      ),
    );
  }
}

/// Vier Chip-Buttons zum Anlegen einer Demo-Transaktion je Zahlungsart —
/// erzeugt einen Kauf, der sofort als Beleg erscheint.
class _DemoPurchaseButtons extends ConsumerStatefulWidget {
  const _DemoPurchaseButtons();
  @override
  ConsumerState<_DemoPurchaseButtons> createState() =>
      _DemoPurchaseButtonsState();
}

class _DemoPurchaseButtonsState extends ConsumerState<_DemoPurchaseButtons> {
  bool _busy = false;

  Future<void> _add(String method, String label) async {
    setState(() => _busy = true);
    try {
      await ref
          .read(customerRepositoryProvider)
          .addDemoPurchase(paymentMethod: method);
      ref
        ..invalidate(myReceiptsProvider)
        ..invalidate(myPurchasesProvider)
        ..invalidate(myDonationsByPurchaseProvider)
        ..invalidate(myDonationSummaryProvider)
        ..invalidate(myGamificationProvider);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Demo-Kauf ($label) angelegt.')),
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
    final entries = <(String, String, IconData)>[
      ('cash', 'Bar', Icons.euro_symbol),
      ('card_ec', 'EC', Icons.credit_card),
      ('card_credit', 'Kredit', Icons.credit_card_outlined),
      ('card_contactless', 'Kontaktlos', Icons.contactless_outlined),
    ];
    return Wrap(
      spacing: AppSpacing.s2,
      runSpacing: AppSpacing.s2,
      children: [
        for (final e in entries)
          OutlinedButton.icon(
            onPressed: _busy ? null : () => _add(e.$1, e.$2),
            icon: Icon(e.$3, size: 16, color: AppColors.ink),
            label: Text(e.$2),
            style: OutlinedButton.styleFrom(
              foregroundColor: AppColors.ink,
              side: const BorderSide(color: AppColors.brand),
              padding: const EdgeInsets.symmetric(
                horizontal: AppSpacing.s3,
                vertical: 10,
              ),
            ),
          ),
      ],
    );
  }
}
