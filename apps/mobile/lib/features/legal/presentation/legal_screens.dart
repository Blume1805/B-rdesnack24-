import 'package:flutter/material.dart';

import 'legal_texts.dart';

/// Wiederverwendbarer Text-Screen für Impressum/Datenschutz/AGB. Bewusst
/// einfach und barrierefrei (Textgröße respektiert System-Einstellung).
class _LegalTextScreen extends StatelessWidget {
  const _LegalTextScreen({required this.title, required this.body});

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
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
