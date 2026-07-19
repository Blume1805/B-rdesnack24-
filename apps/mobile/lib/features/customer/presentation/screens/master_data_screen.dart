import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';

/// Stammdaten-Anzeige (read-only) mit optionalem Gender-Eintrag.
///
/// Name, Geburtsdatum, E-Mail und Registrierungsdatum wurden bei der
/// Registrierung erfasst und lassen sich nicht mehr ändern.  Das
/// Geschlecht (m/w/d) darf hier einmalig ergänzt bzw. angepasst werden —
/// wir brauchen es für den jährlichen Aktions-Report und Ansprache in
/// Marketing-Mitteilungen.  Das Registrierungsdatum ist bewusst
/// sichtbar, weil der Kunde am Jahrestag ein individuelles Angebot
/// erhält.
class MasterDataScreen extends ConsumerWidget {
  const MasterDataScreen({super.key});

  static const _genderLabels = {
    'm': 'männlich',
    'w': 'weiblich',
    'd': 'divers',
  };

  String _formatDate(DateTime d) =>
      '${d.day.toString().padLeft(2, '0')}.${d.month.toString().padLeft(2, '0')}.${d.year}';

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final data = ref.watch(myCustomerProvider);
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Stammdaten')),
      body: data.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: Text('$e', style: AppTypography.body(size: 14)),
        ),
        data: (row) {
          if (row == null) {
            return Padding(
              padding: const EdgeInsets.all(AppSpacing.s5),
              child: Text(
                'Deine Stammdaten konnten nicht geladen werden.',
                style: AppTypography.body(size: 14, color: AppColors.textMuted),
              ),
            );
          }

          final name = row['full_name'] as String?;
          final email = row['email'] as String?;
          final custNo = row['customer_number'] as String?;
          final birthDateStr = row['birth_date'] as String?;
          final registeredStr = row['registered_at'] as String?;
          final gender = row['gender'] as String?;
          final customerType = (row['customer_type'] as String?) ?? 'private';
          final isBusiness = customerType == 'business';
          final companyName = row['company_name'] as String?;
          final billingStreet = row['billing_street'] as String?;
          final billingZip = row['billing_zip'] as String?;
          final billingCity = row['billing_city'] as String?;
          final billingCountry = (row['billing_country'] as String?) ?? 'DE';
          final taxNumber = row['tax_number'] as String?;
          final vatId = row['vat_id'] as String?;
          final businessComplete = isBusiness &&
              (billingStreet?.isNotEmpty ?? false) &&
              (billingZip?.isNotEmpty ?? false) &&
              (billingCity?.isNotEmpty ?? false) &&
              (taxNumber?.isNotEmpty ?? false);

          final birthDate =
              birthDateStr == null ? null : DateTime.tryParse(birthDateStr);
          final registered =
              registeredStr == null ? null : DateTime.tryParse(registeredStr);

          return ListView(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s8,
            ),
            children: [
              Text(
                'Diese Angaben stammen aus deiner Registrierung und sind '
                'nicht veränderbar. Nur dein Geschlecht kannst du hier '
                'ergänzen.',
                style: AppTypography.body(size: 13, color: AppColors.textMuted),
              ),
              const SizedBox(height: AppSpacing.s5),
              AppCard(
                padding: EdgeInsets.zero,
                child: Column(
                  children: [
                    _DataRow(
                      icon: Icons.person_outline,
                      label: 'Name',
                      value: (name?.isNotEmpty ?? false) ? name! : '—',
                    ),
                    const Divider(height: 1, color: AppColors.borderSubtle),
                    _DataRow(
                      icon: Icons.mail_outline,
                      label: 'E-Mail',
                      value: email ?? '—',
                    ),
                    const Divider(height: 1, color: AppColors.borderSubtle),
                    _DataRow(
                      icon: Icons.cake_outlined,
                      label: 'Geburtsdatum',
                      value: birthDate != null ? _formatDate(birthDate) : '—',
                      hint:
                          'Zum Geburtstag gibt es 50 % Rabatt auf ein Produkt deiner Wahl.',
                    ),
                    const Divider(height: 1, color: AppColors.borderSubtle),
                    _DataRow(
                      icon: Icons.card_membership_outlined,
                      label: 'Kundennummer',
                      value: custNo ?? '—',
                    ),
                    const Divider(height: 1, color: AppColors.borderSubtle),
                    _DataRow(
                      icon: Icons.event_available_outlined,
                      label: 'Kunde seit',
                      value: registered != null ? _formatDate(registered) : '—',
                      hint:
                          'Am Jahrestag deiner Anmeldung gibt es ein individuelles Angebot.',
                    ),
                  ],
                ),
              ),
              if (isBusiness) ...[
                const SizedBox(height: AppSpacing.s5),
                const Row(
                  children: [
                    Icon(
                      Icons.business_center_outlined,
                      size: 16,
                      color: AppColors.ink,
                    ),
                    SizedBox(width: 6),
                    Eyebrow('Unternehmensangaben'),
                  ],
                ),
                const SizedBox(height: AppSpacing.s2),
                if (!businessComplete)
                  AppCard(
                    color: const Color(0xFFFFF3D6),
                    borderColor: AppColors.statusWarning,
                    child: Row(
                      children: [
                        const Icon(
                          Icons.warning_amber_outlined,
                          color: AppColors.statusWarning,
                        ),
                        const SizedBox(width: AppSpacing.s2),
                        Expanded(
                          child: Text(
                            'Anschrift und Steuernummer sind erforderlich, '
                            'damit wir dir eine ordnungsgemäße Rechnung '
                            'nach § 14 UStG ausstellen können.',
                            style: AppTypography.body(
                              size: 12,
                              weight: FontWeight.w700,
                              color: AppColors.ink,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                const SizedBox(height: AppSpacing.s3),
                AppCard(
                  padding: EdgeInsets.zero,
                  child: Column(
                    children: [
                      _DataRow(
                        icon: Icons.business_outlined,
                        label: 'Firmenname',
                        value: (companyName?.isNotEmpty ?? false)
                            ? companyName!
                            : '—',
                      ),
                      const Divider(height: 1, color: AppColors.borderSubtle),
                      _DataRow(
                        icon: Icons.location_on_outlined,
                        label: 'Straße + Hausnr.',
                        value: (billingStreet?.isNotEmpty ?? false)
                            ? billingStreet!
                            : '—',
                      ),
                      const Divider(height: 1, color: AppColors.borderSubtle),
                      _DataRow(
                        icon: Icons.map_outlined,
                        label: 'PLZ + Ort',
                        value: (billingZip ?? '').isEmpty &&
                                (billingCity ?? '').isEmpty
                            ? '—'
                            : '${billingZip ?? ''} ${billingCity ?? ''}'.trim(),
                      ),
                      const Divider(height: 1, color: AppColors.borderSubtle),
                      _DataRow(
                        icon: Icons.public,
                        label: 'Land',
                        value: billingCountry,
                      ),
                      const Divider(height: 1, color: AppColors.borderSubtle),
                      _DataRow(
                        icon: Icons.receipt_long_outlined,
                        label: 'Steuernummer',
                        value:
                            (taxNumber?.isNotEmpty ?? false) ? taxNumber! : '—',
                      ),
                      const Divider(height: 1, color: AppColors.borderSubtle),
                      _DataRow(
                        icon: Icons.badge_outlined,
                        label: 'USt-IdNr.',
                        value: (vatId?.isNotEmpty ?? false) ? vatId! : '—',
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                FilledButton.icon(
                  onPressed: () async {
                    await Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => _EditBusinessDataScreen(row: row),
                      ),
                    );
                    ref.invalidate(myCustomerProvider);
                  },
                  icon: const Icon(Icons.edit_outlined, size: 18),
                  label: const Text('Unternehmensangaben bearbeiten'),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.brand,
                    foregroundColor: AppColors.ink,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                  ),
                ),
              ],
              const SizedBox(height: AppSpacing.s5),
              // Gender — editierbar
              Text(
                'Geschlecht',
                style: AppTypography.body(
                  size: 14,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
              const SizedBox(height: AppSpacing.s3),
              _GenderPicker(
                selected: gender,
                onSelected: (g) async {
                  await ref.read(customerRepositoryProvider).updateGender(g);
                  ref.invalidate(myCustomerProvider);
                },
                labels: _genderLabels,
              ),
            ],
          );
        },
      ),
    );
  }
}

class _DataRow extends StatelessWidget {
  const _DataRow({
    required this.icon,
    required this.label,
    required this.value,
    this.hint,
  });
  final IconData icon;
  final String label;
  final String value;
  final String? hint;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s3,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 22, color: AppColors.ink),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w700,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  value,
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                if (hint != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    hint!,
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w600,
                      color: AppColors.ink,
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _GenderPicker extends StatelessWidget {
  const _GenderPicker({
    required this.selected,
    required this.onSelected,
    required this.labels,
  });
  final String? selected;
  final ValueChanged<String?> onSelected;
  final Map<String, String> labels;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        for (final entry in labels.entries) ...[
          Expanded(
            child: _GenderChoice(
              value: entry.key,
              label: entry.value,
              selected: selected == entry.key,
              onTap: () => onSelected(entry.key),
            ),
          ),
          if (entry.key != labels.keys.last)
            const SizedBox(width: AppSpacing.s2),
        ],
      ],
    );
  }
}

class _GenderChoice extends StatelessWidget {
  const _GenderChoice({
    required this.value,
    required this.label,
    required this.selected,
    required this.onTap,
  });
  final String value;
  final String label;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: selected ? AppColors.brand : AppColors.surfaceCard,
      borderRadius: BorderRadius.circular(AppRadii.md),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppRadii.md),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 14),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            border: Border.all(
              color: selected ? AppColors.brand : AppColors.borderSubtle,
              width: 1.5,
            ),
            borderRadius: BorderRadius.circular(AppRadii.md),
          ),
          child: Text(
            label,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
        ),
      ),
    );
  }
}

/// Bearbeitungsformular für die Unternehmensangaben. Wird über den
/// „Unternehmensangaben bearbeiten"-Button geöffnet, damit auch Kunden,
/// die sich zunächst als Privatperson registriert haben oder bei der
/// Registrierung Anschrift/Steuernummer weggelassen haben, diese nachtragen
/// können. Ohne vollständige Angaben verweigert das Backend die Erstellung
/// einer § 14 UStG-Rechnung.
class _EditBusinessDataScreen extends ConsumerStatefulWidget {
  const _EditBusinessDataScreen({required this.row});
  final Map<String, dynamic> row;
  @override
  ConsumerState<_EditBusinessDataScreen> createState() =>
      _EditBusinessDataScreenState();
}

class _EditBusinessDataScreenState
    extends ConsumerState<_EditBusinessDataScreen> {
  late final _company = TextEditingController(
    text: (widget.row['company_name'] as String?) ?? '',
  );
  late final _street = TextEditingController(
    text: (widget.row['billing_street'] as String?) ?? '',
  );
  late final _zip =
      TextEditingController(text: (widget.row['billing_zip'] as String?) ?? '');
  late final _city = TextEditingController(
    text: (widget.row['billing_city'] as String?) ?? '',
  );
  late final _country = TextEditingController(
    text: (widget.row['billing_country'] as String?) ?? 'DE',
  );
  late final _tax =
      TextEditingController(text: (widget.row['tax_number'] as String?) ?? '');
  late final _vat =
      TextEditingController(text: (widget.row['vat_id'] as String?) ?? '');
  bool _saving = false;

  @override
  void dispose() {
    _company.dispose();
    _street.dispose();
    _zip.dispose();
    _city.dispose();
    _country.dispose();
    _tax.dispose();
    _vat.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    try {
      await ref.read(customerRepositoryProvider).updateBusinessData(
            companyName: _company.text.trim(),
            billingStreet: _street.text.trim(),
            billingZip: _zip.text.trim(),
            billingCity: _city.text.trim(),
            billingCountry: _country.text.trim(),
            taxNumber: _tax.text.trim(),
            vatId: _vat.text.trim(),
          );
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Unternehmensangaben gespeichert.')),
        );
        Navigator.of(context).pop();
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget requiredLabel(String text) => Text.rich(
          TextSpan(
            text: text,
            children: const [
              TextSpan(
                text: ' *',
                style:
                    TextStyle(color: Colors.black, fontWeight: FontWeight.w800),
              ),
            ],
          ),
        );
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Unternehmensangaben')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        children: [
          Text(
            'Diese Daten erscheinen auf allen künftigen Rechnungen. '
            'Firmenname, Anschrift und Steuernummer sind Pflicht — sonst '
            'kann keine ordnungsgemäße Rechnung ausgestellt werden.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s4),
          TextField(
            controller: _company,
            decoration: InputDecoration(label: requiredLabel('Firmenname')),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _street,
            decoration:
                InputDecoration(label: requiredLabel('Straße + Hausnr.')),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              SizedBox(
                width: 100,
                child: TextField(
                  controller: _zip,
                  decoration: InputDecoration(label: requiredLabel('PLZ')),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: TextField(
                  controller: _city,
                  decoration: InputDecoration(label: requiredLabel('Ort')),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _country,
            decoration: InputDecoration(label: requiredLabel('Land')),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _tax,
            decoration: InputDecoration(
              label: requiredLabel('Steuernummer'),
              helperText: 'Pflichtangabe für §§ 14, 15 UStG',
            ),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _vat,
            decoration:
                const InputDecoration(labelText: 'USt-IdNr. (optional)'),
          ),
          const SizedBox(height: AppSpacing.s4),
          FilledButton.icon(
            onPressed: _saving ? null : _save,
            icon: _saving
                ? const SizedBox(
                    width: 16,
                    height: 16,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: AppColors.ink,
                    ),
                  )
                : const Icon(Icons.save_outlined),
            label: const Text('Speichern'),
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
              padding: const EdgeInsets.symmetric(vertical: 14),
            ),
          ),
        ],
      ),
    );
  }
}
