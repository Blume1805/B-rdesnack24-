import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/features/auth/presentation/controllers/auth_providers.dart';
import 'package:bs24_kunden/features/customer/presentation/controllers/customer_providers.dart';
import 'package:bs24_kern/core/widgets/design_system/design_system.dart';

/// Kundenkarte mit QR-Code (Kd.-Nr. + Name).
///
/// **Der Scanvorgang am Automaten existiert noch nicht.** Es gibt keinen
/// Automaten, keinen Scanner und keine Anbindung; der Code enthält einen
/// Bezeichner, mehr nicht. Der Bildschirm hat das bis zum 10.09.2026 im
/// Präsens versprochen („Rabatte und Rechnung werden automatisch
/// verknüpft") — eine Aussage über einen Betriebszustand, den es nicht
/// gibt, an der prominentesten Stelle der App.
///
/// **Offen vor der Anbindung:** Der QR trägt `BS24:<Kd.-Nr.>:<Konto-ID>`
/// — einen Bezeichner ohne Nachweis. Wer ihn abfotografiert, könnte
/// fremde Rabatte einlösen und fremde Käufe zuordnen lassen. Ein
/// Bezeichner darf kein Ausweis sein; die spätere Anbindung braucht
/// einen Nachweis, der nicht abfotografierbar ist (etwa ein kurzlebiges
/// Einmalkennzeichen).
class CustomerQrScreen extends ConsumerWidget {
  const CustomerQrScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final user = ref.watch(currentUserProvider).valueOrNull;
    final row = ref.watch(myCustomerProvider).valueOrNull;
    final customerNo = row?['customer_number'] as String? ?? '—';
    final name = user?.fullName ?? user?.email ?? '';
    final payload = 'BS24:$customerNo:${user?.id ?? ''}';

    return Scaffold(
      backgroundColor: AppColors.ink,
      appBar: const HeroAppBar(title: Text('Meine Kundenkarte')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Meine Kundenkarte',
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w800,
                  color: AppColors.brand,
                ).copyWith(letterSpacing: 1),
              ),
              const SizedBox(height: AppSpacing.s2),
              Text(
                name,
                style: AppTypography.display(
                  size: 22,
                  weight: FontWeight.w800,
                  color: AppColors.onDark,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 4),
              Text(
                'Kd.-Nr. $customerNo',
                style: AppTypography.body(
                  size: 14,
                  weight: FontWeight.w700,
                  color: AppColors.brandLight,
                ),
              ),
              const SizedBox(height: AppSpacing.s6),
              Container(
                padding: const EdgeInsets.all(AppSpacing.s5),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(AppRadii.lg),
                ),
                child: QrImageView(
                  data: payload,
                  version: QrVersions.auto,
                  size: 260,
                  gapless: true,
                  eyeStyle: const QrEyeStyle(
                    eyeShape: QrEyeShape.square,
                    color: AppColors.ink,
                  ),
                  dataModuleStyle: const QrDataModuleStyle(
                    dataModuleShape: QrDataModuleShape.square,
                    color: AppColors.ink,
                  ),
                ),
              ),
              const SizedBox(height: AppSpacing.s6),
              Text(
                'Diese Karte weist dich als Kunde aus. Sobald der erste '
                'Automat steht, ordnet sie deine Käufe und Rabatte '
                'automatisch zu.',
                textAlign: TextAlign.center,
                style: AppTypography.body(
                  size: 12,
                  color: AppColors.brandLight,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
