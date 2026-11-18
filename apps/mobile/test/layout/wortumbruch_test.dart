// Wortumbrüche und Überläufe auf Telefonbreite (Befund Philipp 18.11.2026:
// „Kilometerst-ände" brach mitten im Wort um).
//
// Jede Seite wird in 390 × 844 (iPhone 13) mit den echten Schriften der App
// aufgebaut. Gemeldet wird jedes Wort, das über zwei Zeilen läuft, und jeder
// Überlauf (gelb-schwarze Streifen). Das Netz ist ersetzt; die Seiten zeigen
// leere Listen oder Beispieldaten (PKW-Anlage).

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:boerdesnack24/features/approvals/presentation/screens/approvals_screen.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/forgot_password_screen.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/mfa_enroll_screen.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/register_screen.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/sign_in_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/customer_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/ai_info_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/app_benefits_compare_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/consent_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/customer_qr_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/donations_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/employer_benefit_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/finder_tab.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/history_tab.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/master_data_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/news_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/notifications_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/offers_tab.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/profile_tab.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/receipts_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/rewards_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/subscription_screen.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/subscription_value_screen.dart';
import 'package:boerdesnack24/features/finance/presentation/screens/datev_export_screen.dart';
import 'package:boerdesnack24/features/finance/presentation/screens/finance_screen.dart';
import 'package:boerdesnack24/features/home/presentation/home_shell.dart';
import 'package:boerdesnack24/features/legal/presentation/legal_screens.dart';
import 'package:boerdesnack24/features/management/presentation/management_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/anlage_pkw_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/anlagen_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/approvals_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/cancellations_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/cash_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/cleaning_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/complaints_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/disposal_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/documents_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/employees_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/filling_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/inventory_report_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/inventory_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/maintenance_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/my_signature_tasks_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/signature_management_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/telemetry_hub_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/temperature_screen.dart';
import 'wortumbruch_hilfen.dart';

final Map<String, Widget Function()> seiten = {
  'AiInfoScreen': () => const AiInfoScreen(),
  'AnlagePkwScreen': () => const AnlagePkwScreen(),
  'AnlagenScreen': () => const AnlagenScreen(),
  'AppBenefitsCompareScreen': () => const AppBenefitsCompareScreen(),
  'ApprovalsScreen': () => const ApprovalsScreen(),
  'CancellationsScreen': () => const CancellationsScreen(),
  'CashScreen': () => const CashScreen(),
  'CleaningScreen': () => const CleaningScreen(),
  'ComplaintsScreen': () => const ComplaintsScreen(),
  'ConsentScreen': () => const ConsentScreen(),
  'CustomerQrScreen': () => const CustomerQrScreen(),
  'CustomerScreen': () => const CustomerScreen(),
  'DatevExportScreen': () => const DatevExportScreen(),
  'DisposalScreen': () => const DisposalScreen(),
  'DocumentApprovalsScreen': () => const DocumentApprovalsScreen(),
  'DocumentsScreen': () => const DocumentsScreen(),
  'DonationsScreen': () => const DonationsScreen(),
  'EmployeesScreen': () => const EmployeesScreen(),
  'EmployerBenefitScreen': () => const EmployerBenefitScreen(),
  'FillingScreen': () => const FillingScreen(),
  'FinanceScreen': () => const FinanceScreen(),
  'FinderTab': () => const FinderTab(),
  'ForgotPasswordScreen': () => const ForgotPasswordScreen(),
  'HistoryTab': () => const HistoryTab(),
  'HomeShell': () => const HomeShell(),
  'ImprintScreen': () => const ImprintScreen(),
  'InventoryReportScreen': () => const InventoryReportScreen(),
  'InventoryScreen': () => const InventoryScreen(),
  'MaintenanceScreen': () => const MaintenanceScreen(),
  'ManagementScreen': () => const ManagementScreen(),
  'MasterDataScreen': () => const MasterDataScreen(),
  'MfaEnrollScreen': () => const MfaEnrollScreen(),
  'MySignatureTasksScreen': () => const MySignatureTasksScreen(),
  'NewsScreen': () => const NewsScreen(),
  'NotificationsScreen': () => const NotificationsScreen(),
  'OffersTab': () => const OffersTab(),
  'PrivacyScreen': () => const PrivacyScreen(),
  'ProfileTab': () => const ProfileTab(),
  'ReceiptsScreen': () => const ReceiptsScreen(),
  'RegisterScreen': () => const RegisterScreen(),
  'RewardsScreen': () => const RewardsScreen(),
  'SignInScreen': () => const SignInScreen(),
  'SignatureManagementScreen': () => const SignatureManagementScreen(),
  'SubscriptionScreen': () => const SubscriptionScreen(),
  'SubscriptionValueScreen': () => const SubscriptionValueScreen(),
  'TelemetryHubScreen': () => const TelemetryHubScreen(),
  'TemperatureScreen': () => const TemperatureScreen(),
  'TermsScreen': () => const TermsScreen(),
};

void main() {
  setUpAll(ladeSchriften);

  for (final eintrag in seiten.entries) {
    testWidgets('Telefonbreite: ${eintrag.key}', (tester) async {
      final befunde = await pruefeSeite(tester, eintrag.value());
      expect(befunde, isEmpty, reason: befunde.join('\n'));
    });
  }

  // Dialoge öffnen sich erst auf Tipp; der PKW-Dialog war der Anlass.
  testWidgets('Telefonbreite: Dialog Kilometerstände', (tester) async {
    final befunde = await pruefeSeite(
      tester,
      seiten['AnlagePkwScreen']!(),
      vorher: (t) async {
        final knopf = find.text('Kilometerstände').first;
        await t.ensureVisible(knopf);
        await t.pump(const Duration(milliseconds: 400));
        await t.tap(knopf);
        await t.pump(const Duration(milliseconds: 400));
        await t.enterText(find.byType(TextField).first, '29028');
        await t.pump(const Duration(milliseconds: 400));
      },
    );
    expect(befunde, isEmpty, reason: befunde.join('\n'));
  });
}
