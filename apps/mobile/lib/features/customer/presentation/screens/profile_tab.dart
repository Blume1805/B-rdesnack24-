import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../auth/presentation/controllers/auth_providers.dart';
import '../../domain/repositories/customer_repository.dart';
import '../controllers/customer_providers.dart';

class ProfileTab extends ConsumerWidget {
  const ProfileTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final user = ref.watch(currentUserProvider);
    final repo = ref.read(customerRepositoryProvider);

    final u = user.valueOrNull;
    return ListView(
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s5,
        AppSpacing.s5,
        AppSpacing.s5,
        AppSpacing.s8,
      ),
      children: [
        AppCard(
          color: AppColors.ink,
          borderColor: AppColors.ink,
          child: Row(
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: AppColors.brand,
                  borderRadius: BorderRadius.circular(AppRadii.md),
                ),
                alignment: Alignment.center,
                child: Text(
                  (u?.fullName ?? u?.email ?? 'K').substring(0, 1).toUpperCase(),
                  style: AppTypography.display(
                    size: 20,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Eyebrow('mein konto', onDark: true),
                    const SizedBox(height: 2),
                    Text(
                      u?.fullName ?? 'Kunde',
                      style: AppTypography.display(
                        size: 18,
                        weight: FontWeight.w800,
                        color: AppColors.onDark,
                      ),
                    ),
                    Text(
                      u?.email ?? '',
                      style: AppTypography.body(
                        size: 12,
                        color: AppColors.brandLight,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: AppSpacing.s5),
        _ProfileGroup(
          eyebrow: 'zugang & profil',
          children: [
            _ProfileRow(
              icon: Icons.edit_outlined,
              title: 'Stammdaten bearbeiten',
              onTap: () => _editProfile(context, ref),
            ),
            _ProfileRow(
              icon: Icons.lock_outline,
              title: 'Passwort ändern',
              onTap: () => _changePassword(context, repo),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s4),
        _ProfileGroup(
          eyebrow: 'benachrichtigungen',
          children: [_NotificationSection()],
        ),
        const SizedBox(height: AppSpacing.s4),
        _ProfileGroup(
          eyebrow: 'einwilligungen',
          children: [_ConsentSection()],
        ),
        const SizedBox(height: AppSpacing.s4),
        _ProfileGroup(
          eyebrow: 'kontakt',
          children: [
            _ProfileRow(
              icon: Icons.mail_outline,
              title: 'Kontakt / Feedback',
              onTap: () => _contact(context, repo),
            ),
            _ProfileRow(
              icon: Icons.star_outline,
              title: 'Bei Google bewerten',
              iconColor: AppColors.brandDark,
              onTap: () => _review(context, ref),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s4),
        _ProfileGroup(
          eyebrow: 'meine daten (DSGVO)',
          children: [
            _ProfileRow(
              icon: Icons.download_outlined,
              title: 'Meine Daten exportieren',
              subtitle: 'Art. 15 / 20 – Auskunft & Übertragbarkeit',
              onTap: () => _exportMyData(context, ref),
            ),
            _ProfileRow(
              icon: Icons.delete_outline,
              title: 'Konto löschen (Antrag)',
              subtitle: 'Art. 17 – Recht auf Löschung',
              iconColor: AppColors.statusCritical,
              onTap: () => _requestDeletion(context, ref),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s4),
        _ProfileGroup(
          eyebrow: 'rechtliches',
          children: [
            _ProfileRow(
              icon: Icons.gavel_outlined,
              title: 'Impressum',
              onTap: () => context.push(AppRoutes.imprint),
            ),
            _ProfileRow(
              icon: Icons.shield_outlined,
              title: 'Datenschutzerklärung',
              onTap: () => context.push(AppRoutes.privacy),
            ),
            _ProfileRow(
              icon: Icons.article_outlined,
              title: 'Nutzungsbedingungen',
              onTap: () => context.push(AppRoutes.terms),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s5),
        OutlinedButton.icon(
          onPressed: () => ref.read(authControllerProvider.notifier).signOut(),
          icon: const Icon(Icons.logout, size: 18),
          label: const Text('Abmelden'),
        ),
      ],
    );
  }

  Future<void> _exportMyData(BuildContext context, WidgetRef ref) async {
    try {
      final client = ref.read(supabaseClientProvider);
      final result = await client.rpc('export_my_data');
      final jsonStr = const JsonEncoder.withIndent('  ').convert(result);
      await Clipboard.setData(ClipboardData(text: jsonStr));
      if (!context.mounted) return;
      await showDialog<void>(
        context: context,
        builder: (_) => AlertDialog(
          title: const Text('Datenauskunft'),
          content: SizedBox(
            width: 480,
            child: SingleChildScrollView(
              child: SelectableText(
                jsonStr,
                style: const TextStyle(fontFamily: 'monospace', fontSize: 11),
              ),
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Schließen'),
            ),
          ],
        ),
      );
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Export fehlgeschlagen: $e')),
      );
    }
  }

  Future<void> _requestDeletion(BuildContext context, WidgetRef ref) async {
    final reasonCtrl = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Konto zur Löschung anmelden'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text(
              'Wir bearbeiten deinen Antrag manuell. Wegen steuer- und '
              'lebensmittelrechtlicher Aufbewahrungspflichten (§ 147 AO, HACCP) '
              'werden Daten teilweise erst nach Ablauf der Frist gelöscht; bis '
              'dahin werden sie gesperrt oder anonymisiert.',
            ),
            const SizedBox(height: 12),
            TextField(
              controller: reasonCtrl,
              decoration: const InputDecoration(labelText: 'Grund (optional)'),
              maxLines: 2,
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(context, true),
            style: FilledButton.styleFrom(backgroundColor: Colors.red),
            child: const Text('Antrag stellen'),
          ),
        ],
      ),
    );
    if (ok != true) return;
    try {
      await ref.read(supabaseClientProvider).rpc(
        'request_account_deletion',
        params: {'p_reason': reasonCtrl.text.trim().isEmpty ? null : reasonCtrl.text.trim()},
      );
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Antrag gestellt. Wir melden uns per E-Mail.')),
      );
    } catch (e) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Fehlgeschlagen: $e')),
      );
    }
  }

  Future<void> _editProfile(BuildContext context, WidgetRef ref) async {
    final user = ref.read(currentUserProvider).valueOrNull;
    final nameCtrl = TextEditingController(text: user?.fullName ?? '');
    final phoneCtrl = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Stammdaten'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(controller: nameCtrl, decoration: const InputDecoration(labelText: 'Name')),
            TextField(controller: phoneCtrl, decoration: const InputDecoration(labelText: 'Telefon')),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: const Text('Abbrechen')),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: const Text('Speichern')),
        ],
      ),
    );
    if (ok != true) return;
    await ref.read(customerRepositoryProvider).updateProfileName(
          nameCtrl.text.trim(),
          phoneCtrl.text.trim().isEmpty ? null : phoneCtrl.text.trim(),
        );
    ref.invalidate(currentUserProvider);
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Gespeichert.')),
      );
    }
  }

  Future<void> _changePassword(BuildContext context, CustomerRepository repo) async {
    final ctrl = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Neues Passwort'),
        content: TextField(
          controller: ctrl,
          obscureText: true,
          decoration: const InputDecoration(labelText: 'Mind. 10 Zeichen'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: const Text('Abbrechen')),
          FilledButton(onPressed: () => Navigator.pop(context, true), child: const Text('Ändern')),
        ],
      ),
    );
    if (ok != true || ctrl.text.length < 10) return;
    await repo.changePassword(ctrl.text);
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Passwort geändert.')),
      );
    }
  }

  Future<void> _contact(BuildContext context, CustomerRepository repo) async {
    final result = await showModalBottomSheet<_ContactResult>(
      context: context,
      isScrollControlled: true,
      builder: (_) => const _ContactForm(),
    );
    if (result == null) return;
    await repo.submitContact(
      category: result.category,
      subject: result.subject,
      body: result.body,
    );
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Nachricht gesendet. Danke!')),
      );
    }
  }

  Future<void> _review(BuildContext context, WidgetRef ref) async {
    final url = ref.read(appConfigProvider).googleReviewUrl;
    if (url.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Bewertungslink noch nicht konfiguriert.')),
        );
      }
      return;
    }
    await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
  }
}

class _ProfileGroup extends StatelessWidget {
  const _ProfileGroup({required this.eyebrow, required this.children});
  final String eyebrow;
  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 4, bottom: AppSpacing.s2),
          child: Eyebrow(eyebrow),
        ),
        AppCard(
          padding: EdgeInsets.zero,
          child: Column(
            children: [
              for (int i = 0; i < children.length; i++) ...[
                children[i],
                if (i < children.length - 1)
                  const Divider(height: 1, color: AppColors.borderSubtle),
              ],
            ],
          ),
        ),
      ],
    );
  }
}

class _ProfileRow extends StatelessWidget {
  const _ProfileRow({
    required this.icon,
    required this.title,
    this.subtitle,
    this.onTap,
    this.iconColor,
  });

  final IconData icon;
  final String title;
  final String? subtitle;
  final VoidCallback? onTap;
  final Color? iconColor;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s4,
          vertical: AppSpacing.s3,
        ),
        child: Row(
          children: [
            Icon(icon, size: 22, color: iconColor ?? AppColors.brandDark),
            const SizedBox(width: AppSpacing.s3),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w700,
                      color: AppColors.ink,
                    ),
                  ),
                  if (subtitle != null)
                    Padding(
                      padding: const EdgeInsets.only(top: 2),
                      child: Text(
                        subtitle!,
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, color: AppColors.textMuted),
          ],
        ),
      ),
    );
  }
}

class _NotificationSection extends ConsumerStatefulWidget {
  @override
  ConsumerState<_NotificationSection> createState() => _NotificationSectionState();
}

class _NotificationSectionState extends ConsumerState<_NotificationSection> {
  bool _email = true;
  bool _push = true;

  @override
  Widget build(BuildContext context) {
    final cust = ref.watch(myCustomerProvider);
    cust.whenData((c) {
      if (c != null) {
        _email = c['notify_email'] as bool? ?? true;
        _push = c['notify_push'] as bool? ?? true;
      }
    });
    return Column(
      children: [
        SwitchListTile(
          secondary: const Icon(Icons.email),
          title: const Text('Benachrichtigungen per E-Mail'),
          value: _email,
          onChanged: (v) => _save(email: v, push: _push),
        ),
        SwitchListTile(
          secondary: const Icon(Icons.notifications),
          title: const Text('Push-Benachrichtigungen'),
          value: _push,
          onChanged: (v) => _save(email: _email, push: v),
        ),
      ],
    );
  }

  Future<void> _save({required bool email, required bool push}) async {
    setState(() {
      _email = email;
      _push = push;
    });
    await ref.read(customerRepositoryProvider).updateNotifications(email: email, push: push);
    ref.invalidate(myCustomerProvider);
  }
}

class _ConsentSection extends ConsumerStatefulWidget {
  @override
  ConsumerState<_ConsentSection> createState() => _ConsentSectionState();
}

class _ConsentSectionState extends ConsumerState<_ConsentSection> {
  final _state = <String, bool>{'analytics': false, 'marketing': false, 'maps': false};

  static const _labels = {
    'analytics': 'Anonyme Nutzungsanalyse',
    'marketing': 'Marketing-Mitteilungen',
    'maps': 'Karten/Standort (Google Maps)',
  };

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.fromLTRB(16, 8, 16, 4),
          child: Text('Einwilligungen (Art. 6 (1) a DSGVO · § 25 TDDDG)'),
        ),
        const Padding(
          padding: EdgeInsets.fromLTRB(16, 0, 16, 8),
          child: Text(
            'Diese Verarbeitungen erfolgen nur nach deiner ausdrücklichen '
            'Einwilligung und sind jederzeit widerrufbar. Der Widerruf '
            'berührt die Rechtmäßigkeit vergangener Verarbeitungen nicht.',
            style: TextStyle(fontSize: 12),
          ),
        ),
        for (final e in _labels.entries)
          SwitchListTile(
            title: Text(e.value),
            value: _state[e.key]!,
            onChanged: (v) async {
              setState(() => _state[e.key] = v);
              await ref.read(customerRepositoryProvider).recordConsent(e.key, v);
            },
          ),
      ],
    );
  }
}

class _ContactResult {
  const _ContactResult(this.category, this.subject, this.body);
  final String category;
  final String? subject;
  final String body;
}

class _ContactForm extends StatefulWidget {
  const _ContactForm();
  @override
  State<_ContactForm> createState() => _ContactFormState();
}

class _ContactFormState extends State<_ContactForm> {
  final _formKey = GlobalKey<FormState>();
  final _subjectCtrl = TextEditingController();
  final _bodyCtrl = TextEditingController();
  String _category = 'question';

  static const _categories = {
    'problem': 'Problem melden',
    'question': 'Frage',
    'praise': 'Lob',
    'criticism': 'Kritik',
    'suggestion': 'Verbesserungsvorschlag',
  };

  @override
  void dispose() {
    _subjectCtrl.dispose();
    _bodyCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    Navigator.of(context).pop(_ContactResult(
      _category,
      _subjectCtrl.text.trim().isEmpty ? null : _subjectCtrl.text.trim(),
      _bodyCtrl.text.trim(),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Kontakt / Feedback', style: Theme.of(context).textTheme.titleLarge),
              const SizedBox(height: 12),
              DropdownButtonFormField<String>(
                initialValue: _category,
                decoration: const InputDecoration(labelText: 'Anliegen'),
                items: [
                  for (final e in _categories.entries)
                    DropdownMenuItem(value: e.key, child: Text(e.value)),
                ],
                onChanged: (v) => setState(() => _category = v ?? 'question'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _subjectCtrl,
                decoration: const InputDecoration(labelText: 'Betreff (optional)'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _bodyCtrl,
                decoration: const InputDecoration(labelText: 'Nachricht'),
                maxLines: 4,
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Bitte Nachricht eingeben' : null,
              ),
              const SizedBox(height: 12),
              const Text(
                'Deine Angaben werden zur Bearbeitung der Anfrage verarbeitet '
                '(Art. 6 (1) b DSGVO). Details siehe Datenschutzerklärung.',
                style: TextStyle(fontSize: 11),
              ),
              const SizedBox(height: 16),
              FilledButton(onPressed: _submit, child: const Text('Senden')),
            ],
          ),
        ),
      ),
    );
  }
}
