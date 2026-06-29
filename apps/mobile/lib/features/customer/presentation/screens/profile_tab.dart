import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/di/providers.dart';
import '../../../auth/presentation/controllers/auth_providers.dart';
import '../../domain/repositories/customer_repository.dart';
import '../controllers/customer_providers.dart';

class ProfileTab extends ConsumerWidget {
  const ProfileTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final user = ref.watch(currentUserProvider);
    final repo = ref.read(customerRepositoryProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Profil'),
        actions: [
          IconButton(
            tooltip: 'Abmelden',
            icon: const Icon(Icons.logout),
            onPressed: () => ref.read(authControllerProvider.notifier).signOut(),
          ),
        ],
      ),
      body: ListView(
        children: [
          ListTile(
            leading: const Icon(Icons.account_circle, size: 36),
            title: Text(user.valueOrNull?.fullName ?? 'Kunde'),
            subtitle: Text(user.valueOrNull?.email ?? ''),
          ),
          const Divider(),
          ListTile(
            leading: const Icon(Icons.edit),
            title: const Text('Stammdaten bearbeiten'),
            onTap: () => _editProfile(context, ref),
          ),
          ListTile(
            leading: const Icon(Icons.lock),
            title: const Text('Passwort ändern'),
            onTap: () => _changePassword(context, repo),
          ),
          const Divider(),
          _NotificationSection(),
          const Divider(),
          _ConsentSection(),
          const Divider(),
          ListTile(
            leading: const Icon(Icons.mail),
            title: const Text('Kontakt / Feedback'),
            onTap: () => _contact(context, repo),
          ),
          ListTile(
            leading: const Icon(Icons.star, color: Colors.amber),
            title: const Text('Bei Google bewerten'),
            onTap: () => _review(context, ref),
          ),
        ],
      ),
    );
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
          padding: EdgeInsets.fromLTRB(16, 8, 16, 0),
          child: Text('Einwilligungen (DSGVO)'),
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
              const SizedBox(height: 16),
              FilledButton(onPressed: _submit, child: const Text('Senden')),
            ],
          ),
        ),
      ),
    );
  }
}
