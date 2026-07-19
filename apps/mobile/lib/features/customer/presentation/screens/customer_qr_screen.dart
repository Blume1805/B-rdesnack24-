import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:qr_flutter/qr_flutter.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../auth/presentation/controllers/auth_providers.dart';
import '../controllers/customer_providers.dart';

/// Kundenkarte mit QR-Code (Kd.-Nr. + Name). Wird am Automaten gescannt zur
/// Verifizierung des Kunden (zukünftige Nayax-Integration).
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
      appBar: AppBar(
        backgroundColor: AppColors.ink,
        foregroundColor: AppColors.onDark,
        elevation: 0,
        title: const Text('Meine Kundenkarte'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Am Automaten scannen',
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
                'Halte den QR-Code an den Scanner des Automaten. '
                'Rabatte und Rechnung werden automatisch verknüpft.',
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
