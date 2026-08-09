import 'package:flutter/material.dart';

import 'legal_texts.dart';
import '../../../core/widgets/design_system/design_system.dart';

/// Wiederverwendbarer Text-Screen für Impressum/Datenschutz/AGB. Bewusst
/// einfach und barrierefrei (Textgröße respektiert System-Einstellung).
class _LegalTextScreen extends StatelessWidget {
  const _LegalTextScreen({required this.title, required this.body});

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: HeroAppBar(title: Text(title)),
      body: SafeArea(
        child: Semantics(
          label: title,
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: SelectableText(
              body,
              style: Theme.of(context).textTheme.bodyMedium,
            ),
          ),
        ),
      ),
    );
  }
}

class ImprintScreen extends StatelessWidget {
  const ImprintScreen({super.key});
  @override
  Widget build(BuildContext context) =>
      const _LegalTextScreen(title: 'Impressum', body: LegalTexts.imprint);
}

class PrivacyScreen extends StatelessWidget {
  const PrivacyScreen({super.key});
  @override
  Widget build(BuildContext context) => const _LegalTextScreen(
        title: 'Datenschutzerklärung',
        body: LegalTexts.privacy,
      );
}

class TermsScreen extends StatelessWidget {
  const TermsScreen({super.key});
  @override
  Widget build(BuildContext context) => const _LegalTextScreen(
        title: 'Nutzungsbedingungen',
        body: LegalTexts.terms,
      );
}

/// Widerrufsbelehrung — bewusst eine eigene Seite.
///
/// Der Text stand bisher als § 6 in den Nutzungsbedingungen. Dort findet
/// ihn niemand, der ihn braucht: Wer widerrufen will, sucht „Widerruf",
/// nicht Abschnitt sechs eines elfteiligen Vertragswerks.
class WithdrawalScreen extends StatelessWidget {
  const WithdrawalScreen({super.key});
  @override
  Widget build(BuildContext context) => const _LegalTextScreen(
        title: 'Widerrufsbelehrung',
        body: LegalTexts.withdrawal,
      );
}

class PaymentInfoScreen extends StatelessWidget {
  const PaymentInfoScreen({super.key});
  @override
  Widget build(BuildContext context) => const _LegalTextScreen(
        title: 'Zahlungsinformationen',
        body: LegalTexts.payment,
      );
}

class CookiesScreen extends StatelessWidget {
  const CookiesScreen({super.key});
  @override
  Widget build(BuildContext context) => const _LegalTextScreen(
        title: 'Cookies und Tracking',
        body: LegalTexts.cookies,
      );
}

class AccessibilityScreen extends StatelessWidget {
  const AccessibilityScreen({super.key});
  @override
  Widget build(BuildContext context) => const _LegalTextScreen(
        title: 'Barrierefreiheit',
        body: LegalTexts.accessibility,
      );
}
