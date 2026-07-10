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
      appBar: AppBar(title: const Text('Stammdaten')),
      body: data.when(
        loading: () =>
            const Center(child: CircularProgressIndicator(color: AppColors.brand)),
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

          final birthDate = birthDateStr == null
              ? null
              : DateTime.tryParse(birthDateStr);
          final registered = registeredStr == null
              ? null
              : DateTime.tryParse(registeredStr);

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
                style: AppTypography.body(
                    size: 13, color: AppColors.textMuted),
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
                      hint: 'Zum Geburtstag gibt es 50 % Rabatt auf ein Produkt deiner Wahl.',
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
                      value: registered != null
                          ? _formatDate(registered)
                          : '—',
                      hint: 'Am Jahrestag deiner Anmeldung gibt es ein individuelles Angebot.',
                    ),
                  ],
                ),
              ),
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
                  await ref
                      .read(customerRepositoryProvider)
                      .updateGender(g);
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
