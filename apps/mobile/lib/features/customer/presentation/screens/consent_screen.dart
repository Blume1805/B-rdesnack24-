import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';

/// Separate Einwilligungs-Seite (erreicht über „Einwilligungen" in der
/// Rechtliches-Sektion).  Zeigt jede Kategorie mit Beschreibung + Zustimmen/
/// Ablehnen-Buttons.  Erfassung ist append-only in `consents` (DSGVO-
/// konform, jede Änderung ist nachvollziehbar).
class ConsentScreen extends ConsumerStatefulWidget {
  const ConsentScreen({super.key});

  @override
  ConsumerState<ConsentScreen> createState() => _ConsentScreenState();
}

class _ConsentScreenState extends ConsumerState<ConsentScreen> {
  final _state = <String, bool?>{
    'analytics': null,
    'marketing': null,
    'maps': null,
  };

  static const _items = <_ConsentItem>[
    _ConsentItem(
      key: 'analytics',
      title: 'Anonyme Nutzungsanalyse',
      description:
          'Wir werten aggregiert aus, welche Funktionen wie oft genutzt '
          'werden, um die App zu verbessern. Keine personen­beziehbaren '
          'Kennungen. Widerruf jederzeit möglich.',
      icon: Icons.insights_outlined,
    ),
    _ConsentItem(
      key: 'marketing',
      title: 'Marketing-Mitteilungen',
      description:
          'Rabatt­aktionen, Wochen­angebote und Neuigkeiten per E-Mail und '
          'Push-Benachrichtigung. Kein Weitergeben deiner Adresse an Dritte.',
      icon: Icons.campaign_outlined,
    ),
    _ConsentItem(
      key: 'maps',
      title: 'Karten & Standort',
      description:
          'Google-Maps-Karten (Automaten­finder + Navigation) werden erst '
          'nach deiner Zustimmung geladen. Ohne Zustimmung siehst du '
          'Adressen als Text; kein Karten-Widget wird eingebettet.',
      icon: Icons.map_outlined,
    ),
  ];

  Future<void> _set(String key, bool granted) async {
    setState(() => _state[key] = granted);
    await ref
        .read(customerRepositoryProvider)
        .recordConsent(key, granted);
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(granted
              ? 'Einwilligung erteilt.'
              : 'Einwilligung widerrufen.'),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Einwilligungen')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          Text(
            'Deine Einwilligungen sind jederzeit widerrufbar. Der Widerruf '
            'wirkt in die Zukunft und lässt bereits erfolgte Verarbeitungen '
            'unberührt.',
            style:
                AppTypography.body(size: 14, color: AppColors.textDefault),
          ),
          const SizedBox(height: AppSpacing.s5),
          for (final item in _items) ...[
            _ConsentCard(
              item: item,
              current: _state[item.key],
              onGrant: () => _set(item.key, true),
              onRevoke: () => _set(item.key, false),
            ),
            const SizedBox(height: AppSpacing.s4),
          ],
        ],
      ),
    );
  }
}

class _ConsentItem {
  const _ConsentItem({
    required this.key,
    required this.title,
    required this.description,
    required this.icon,
  });
  final String key;
  final String title;
  final String description;
  final IconData icon;
}

class _ConsentCard extends StatelessWidget {
  const _ConsentCard({
    required this.item,
    required this.current,
    required this.onGrant,
    required this.onRevoke,
  });
  final _ConsentItem item;
  final bool? current;
  final VoidCallback onGrant;
  final VoidCallback onRevoke;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: AppColors.brandLight,
                  border: Border.all(color: AppColors.brand),
                  borderRadius: BorderRadius.circular(AppRadii.md),
                ),
                alignment: Alignment.center,
                child: Icon(item.icon, color: AppColors.ink, size: 22),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Text(
                  item.title,
                  style: AppTypography.display(
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              if (current != null)
                StatusBadge(
                  label: current! ? 'erteilt' : 'abgelehnt',
                  tone: current! ? StatusTone.positive : StatusTone.neutral,
                  icon: current! ? Icons.check_circle : Icons.cancel_outlined,
                ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            item.description,
            style: AppTypography.body(
              size: 13,
              color: AppColors.textDefault,
            ),
          ),
          const SizedBox(height: AppSpacing.s4),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: onRevoke,
                  icon: const Icon(Icons.close, size: 18),
                  label: const Text('Ablehnen'),
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: FilledButton.icon(
                  onPressed: onGrant,
                  icon: const Icon(Icons.check, size: 18),
                  label: const Text('Zustimmen'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
