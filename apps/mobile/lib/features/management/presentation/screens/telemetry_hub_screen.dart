import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Telemetrie-Hub: Verwaltung der IoT-Anbindung — Provider, Geräte, Slots,
/// Live-Zustand, Event-Log. Ein Screen mit fünf Reitern; die schweren
/// Sub-Widgets bleiben getrennt für bessere Rebuild-Performance.
class TelemetryHubScreen extends ConsumerStatefulWidget {
  const TelemetryHubScreen({super.key});
  @override
  ConsumerState<TelemetryHubScreen> createState() => _TelemetryHubScreenState();
}

class _TelemetryHubScreenState extends ConsumerState<TelemetryHubScreen> {
  int _tab = 0;
  static const _labels = ['Live', 'Provider', 'Geräte', 'Slots', 'Events'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Telemetrie / IoT'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s3,
              AppSpacing.s5,
              0,
            ),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: SegmentedButton<int>(
                segments: [
                  for (int i = 0; i < _labels.length; i++)
                    ButtonSegment(value: i, label: Text(_labels[i])),
                ],
                selected: {_tab},
                onSelectionChanged: (s) => setState(() => _tab = s.first),
              ),
            ),
          ),
          Expanded(child: _bodyForTab(_tab)),
        ],
      ),
    );
  }

  Widget _bodyForTab(int tab) {
    switch (tab) {
      case 0:
        return const _LiveTab();
      case 1:
        return const _ProvidersTab();
      case 2:
        return const _DevicesTab();
      case 3:
        return const _SlotsTab();
      case 4:
        return const _EventsTab();
      default:
        return const SizedBox.shrink();
    }
  }
}

// ── Live-Dashboard ────────────────────────────────────────────────────
final _healthProvider = FutureProvider.autoDispose<List<Map<String, dynamic>>>(
  (ref) async {
    final client = ref.watch(supabaseClientProvider);
    final rows = await client
        .from('machine_health')
        .select('machine_id, last_seen_at, last_heartbeat_at, temperature_c, '
            'door_state, cash_balance_net, active_alarms, updated_at, '
            'machine:machines(id, code, name, is_cooled)')
        .order('updated_at', ascending: false);
    return (rows as List).cast<Map<String, dynamic>>();
  },
);

class _LiveTab extends ConsumerWidget {
  const _LiveTab();
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final health = ref.watch(_healthProvider);
    return health.when(
      loading: () => const Center(
        child: CircularProgressIndicator(color: AppColors.brand),
      ),
      error: (e, _) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Text('$e'),
        ),
      ),
      data: (rows) => rows.isEmpty
          ? const _EmptyHint(
              icon: Icons.sensors_off,
              text: 'Noch keine Telemetrie-Daten empfangen. Automat mit '
                  'IoT-Modul verknüpfen und Webhook des Anbieters auf '
                  '/iot-webhook zeigen lassen.',
            )
          : RefreshIndicator(
              onRefresh: () async => ref.invalidate(_healthProvider),
              color: AppColors.brand,
              child: ListView(
                padding: const EdgeInsets.all(AppSpacing.s5),
                children: [for (final r in rows) _HealthCard(row: r)],
              ),
            ),
    );
  }
}

class _HealthCard extends StatelessWidget {
  const _HealthCard({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context) {
    final m = row['machine'] as Map<String, dynamic>?;
    final code = m?['code']?.toString() ?? '?';
    final name = m?['name']?.toString() ?? '';
    final lastSeen = row['last_seen_at']?.toString();
    final now = DateTime.now();
    DateTime? lastSeenDt;
    try {
      lastSeenDt = lastSeen == null ? null : DateTime.parse(lastSeen);
    } catch (_) {}
    final minsSince =
        lastSeenDt == null ? null : now.difference(lastSeenDt).inMinutes;
    final stale = minsSince != null && minsSince > 10;
    final alarms = (row['active_alarms'] as List?)?.length ?? 0;

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s4),
      child: AppCard(
        topStripeColor: stale ? AppColors.statusCritical : AppColors.brand,
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    '$code · $name',
                    style: AppTypography.body(
                      size: 16,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                ),
                StatusBadge(
                  label: stale
                      ? 'offline (${minsSince}m)'
                      : (minsSince == null ? 'unbekannt' : 'aktiv'),
                  tone: stale
                      ? StatusTone.critical
                      : (minsSince == null
                          ? StatusTone.neutral
                          : StatusTone.positive),
                  icon:
                      stale ? Icons.warning_amber : Icons.check_circle_outline,
                ),
              ],
            ),
            const SizedBox(height: AppSpacing.s3),
            Wrap(
              spacing: AppSpacing.s3,
              runSpacing: AppSpacing.s2,
              children: [
                if (row['temperature_c'] != null)
                  _Kv(
                    icon: Icons.thermostat,
                    label: 'Temperatur',
                    value: '${row['temperature_c']} °C',
                  ),
                if (row['door_state'] != null)
                  _Kv(
                    icon: Icons.sensor_door_outlined,
                    label: 'Tür',
                    value: row['door_state']?.toString() ?? '?',
                  ),
                if (row['cash_balance_net'] != null)
                  _Kv(
                    icon: Icons.euro_symbol,
                    label: 'Kasse',
                    value: Formatters.euro(
                      (row['cash_balance_net'] as num).toDouble(),
                    ),
                  ),
                if (alarms > 0)
                  _Kv(
                    icon: Icons.notification_important_outlined,
                    label: 'Alarme',
                    value: '$alarms',
                    warn: true,
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _Kv extends StatelessWidget {
  const _Kv({
    required this.icon,
    required this.label,
    required this.value,
    this.warn = false,
  });
  final IconData icon;
  final String label;
  final String value;
  final bool warn;
  @override
  Widget build(BuildContext context) {
    final c = warn ? AppColors.statusCritical : AppColors.ink;
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s3,
        vertical: AppSpacing.s2,
      ),
      decoration: BoxDecoration(
        color: AppColors.surfaceAlt,
        borderRadius: BorderRadius.circular(AppRadii.md),
        border: Border.all(color: AppColors.borderSubtle),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 16, color: c),
          const SizedBox(width: 6),
          Text(
            '$label: ',
            style: AppTypography.body(size: 11, color: AppColors.textMuted),
          ),
          Text(
            value,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w800,
              color: c,
            ),
          ),
        ],
      ),
    );
  }
}

// ── Provider-Tab ───────────────────────────────────────────────────
final _providersProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>((ref) async {
  final client = ref.watch(supabaseClientProvider);
  final rows = await client
      .from('telemetry_providers')
      .select('id, name, adapter, is_active, time_skew_max_s, notes, '
          'created_at, updated_at')
      .order('name');
  return (rows as List).cast<Map<String, dynamic>>();
});

class _ProvidersTab extends ConsumerWidget {
  const _ProvidersTab();
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final providers = ref.watch(_providersProvider);
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => _openCreateProvider(context, ref),
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        icon: const Icon(Icons.add),
        label: const Text('Provider anlegen'),
      ),
      body: providers.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Center(child: Text('$e')),
        data: (rows) => rows.isEmpty
            ? const _EmptyHint(
                icon: Icons.cable,
                text: 'Noch kein Telemetrie-Provider registriert. Lege '
                    'einen an (z. B. „CleverMetrics-Prod") und trage '
                    'seinen Webhook-Endpoint bei uns hinterlegten '
                    'HMAC-Secret ein.',
              )
            : ListView(
                padding: const EdgeInsets.all(AppSpacing.s5),
                children: [for (final r in rows) _ProviderCard(row: r)],
              ),
      ),
    );
  }

  Future<void> _openCreateProvider(BuildContext context, WidgetRef ref) async {
    final ok = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      builder: (_) => const _ProviderForm(),
    );
    if (ok == true) ref.invalidate(_providersProvider);
  }
}

class _ProviderCard extends StatelessWidget {
  const _ProviderCard({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: AppCard(
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    row['name']?.toString() ?? '',
                    style: AppTypography.body(
                      size: 15,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                ),
                StatusBadge(
                  label: (row['is_active'] as bool? ?? true)
                      ? 'aktiv'
                      : 'deaktiviert',
                  tone: (row['is_active'] as bool? ?? true)
                      ? StatusTone.positive
                      : StatusTone.neutral,
                ),
              ],
            ),
            const SizedBox(height: 4),
            Text(
              'Adapter: ${row['adapter']} · '
              'Uhr-Toleranz: ${row['time_skew_max_s']} s',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            if ((row['notes'] as String?)?.isNotEmpty == true) ...[
              const SizedBox(height: 4),
              Text(
                row['notes']?.toString() ?? '',
                style: AppTypography.body(
                  size: 11,
                  color: AppColors.textDefault,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _ProviderForm extends ConsumerStatefulWidget {
  const _ProviderForm();
  @override
  ConsumerState<_ProviderForm> createState() => _ProviderFormState();
}

class _ProviderFormState extends ConsumerState<_ProviderForm> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _secretCtrl = TextEditingController();
  final _notesCtrl = TextEditingController();
  String _adapter = 'generic';

  @override
  void dispose() {
    _nameCtrl.dispose();
    _secretCtrl.dispose();
    _notesCtrl.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    final client = ref.read(supabaseClientProvider);
    try {
      await client.rpc(
        'register_telemetry_provider',
        params: {
          'p_name': _nameCtrl.text.trim(),
          'p_adapter': _adapter,
          'p_hmac_secret': _secretCtrl.text.trim(),
          'p_notes':
              _notesCtrl.text.trim().isEmpty ? null : _notesCtrl.text.trim(),
        },
      );
      if (mounted) Navigator.of(context).pop(true);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Telemetrie-Provider anlegen',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _nameCtrl,
                decoration: const InputDecoration(
                  labelText: 'Anzeigename',
                  helperText: 'z. B. „CleverMetrics-Prod"',
                ),
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Pflicht' : null,
              ),
              const SizedBox(height: 12),
              DropdownButtonFormField<String>(
                initialValue: _adapter,
                decoration: const InputDecoration(labelText: 'Adapter'),
                items: const [
                  DropdownMenuItem(
                    value: 'generic',
                    child: Text('Generic (kanonisch)'),
                  ),
                  DropdownMenuItem(
                    value: 'clevermetrics',
                    child: Text('CleverMetrics'),
                  ),
                  DropdownMenuItem(value: 'nayax', child: Text('Nayax')),
                  DropdownMenuItem(value: 'custom', child: Text('Custom')),
                ],
                onChanged: (v) => setState(() => _adapter = v ?? 'generic'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _secretCtrl,
                obscureText: true,
                decoration: const InputDecoration(
                  labelText: 'HMAC-Secret',
                  helperText: 'Wird zur Signaturprüfung genutzt.',
                ),
                validator: (v) => (v == null || v.trim().length < 16)
                    ? 'Min. 16 Zeichen'
                    : null,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _notesCtrl,
                decoration:
                    const InputDecoration(labelText: 'Notizen (optional)'),
                maxLines: 2,
              ),
              const SizedBox(height: 16),
              FilledButton(
                onPressed: _submit,
                child: const Text('Anlegen'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Geräte-Tab ─────────────────────────────────────────────────────
final _devicesProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>((ref) async {
  final client = ref.watch(supabaseClientProvider);
  final rows = await client
      .from('machine_devices')
      .select('id, external_device_id, firmware_version, last_seen_at, '
          'is_active, installed_at, '
          'machine:machines(id, code, name), '
          'provider:telemetry_providers(id, name, adapter)')
      .order('installed_at', ascending: false);
  return (rows as List).cast<Map<String, dynamic>>();
});

class _DevicesTab extends ConsumerWidget {
  const _DevicesTab();
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final devices = ref.watch(_devicesProvider);
    return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => _openRegister(context, ref),
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        icon: const Icon(Icons.add),
        label: const Text('Gerät registrieren'),
      ),
      body: devices.when(
        loading: () => const Center(
          child: CircularProgressIndicator(color: AppColors.brand),
        ),
        error: (e, _) => Center(child: Text('$e')),
        data: (rows) => rows.isEmpty
            ? const _EmptyHint(
                icon: Icons.developer_board_off_outlined,
                text: 'Noch kein IoT-Gerät verknüpft. Registriere das '
                    'Gateway eines Automaten mit seiner externen '
                    'Serien-Nummer beim jeweiligen Provider.',
              )
            : ListView(
                padding: const EdgeInsets.all(AppSpacing.s5),
                children: [for (final r in rows) _DeviceCard(row: r)],
              ),
      ),
    );
  }

  Future<void> _openRegister(BuildContext context, WidgetRef ref) async {
    final ok = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      builder: (_) => const _DeviceForm(),
    );
    if (ok == true) ref.invalidate(_devicesProvider);
  }
}

class _DeviceCard extends StatelessWidget {
  const _DeviceCard({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context) {
    final m = row['machine'] as Map<String, dynamic>?;
    final p = row['provider'] as Map<String, dynamic>?;
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: AppCard(
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '${m?['code'] ?? '?'} · ${m?['name'] ?? ''}',
              style: AppTypography.body(
                size: 14,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              'Provider: ${p?['name']} (${p?['adapter']})',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            Text(
              'Gerät: ${row['external_device_id']}',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            if (row['firmware_version'] != null)
              Text(
                'Firmware: ${row['firmware_version']}',
                style: AppTypography.body(size: 11, color: AppColors.textMuted),
              ),
          ],
        ),
      ),
    );
  }
}

class _DeviceForm extends ConsumerStatefulWidget {
  const _DeviceForm();
  @override
  ConsumerState<_DeviceForm> createState() => _DeviceFormState();
}

class _DeviceFormState extends ConsumerState<_DeviceForm> {
  final _formKey = GlobalKey<FormState>();
  final _deviceIdCtrl = TextEditingController();
  final _firmwareCtrl = TextEditingController();
  String? _machineId;
  String? _providerId;

  @override
  void dispose() {
    _deviceIdCtrl.dispose();
    _firmwareCtrl.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    if (_machineId == null || _providerId == null) return;
    final client = ref.read(supabaseClientProvider);
    try {
      await client.from('machine_devices').insert({
        'machine_id': _machineId,
        'provider_id': _providerId,
        'external_device_id': _deviceIdCtrl.text.trim(),
        'firmware_version': _firmwareCtrl.text.trim().isEmpty
            ? null
            : _firmwareCtrl.text.trim(),
      });
      if (mounted) Navigator.of(context).pop(true);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('$e')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final providers = ref.watch(_providersProvider);
    final client = ref.watch(supabaseClientProvider);
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'IoT-Gerät registrieren',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              FutureBuilder<List<Map<String, dynamic>>>(
                future: client
                    .from('machines')
                    .select('id, code, name')
                    .order('code')
                    .then((r) => (r as List).cast<Map<String, dynamic>>()),
                builder: (context, snap) {
                  final list = snap.data ?? [];
                  return DropdownButtonFormField<String>(
                    initialValue: _machineId,
                    decoration: const InputDecoration(labelText: 'Automat'),
                    items: [
                      for (final m in list)
                        DropdownMenuItem(
                          value: m['id'] as String,
                          child: Text('${m['code']} · ${m['name']}'),
                        ),
                    ],
                    onChanged: (v) => setState(() => _machineId = v),
                    validator: (v) => v == null ? 'Pflicht' : null,
                  );
                },
              ),
              const SizedBox(height: 12),
              providers.when(
                loading: () => const LinearProgressIndicator(),
                error: (e, _) => Text('$e'),
                data: (list) => DropdownButtonFormField<String>(
                  initialValue: _providerId,
                  decoration: const InputDecoration(labelText: 'Provider'),
                  items: [
                    for (final p in list)
                      DropdownMenuItem(
                        value: p['id'] as String,
                        child: Text('${p['name']} (${p['adapter']})'),
                      ),
                  ],
                  onChanged: (v) => setState(() => _providerId = v),
                  validator: (v) => v == null ? 'Pflicht' : null,
                ),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _deviceIdCtrl,
                decoration: const InputDecoration(
                  labelText: 'Externe Gerät-ID / Serien-Nummer',
                  helperText: 'Wie beim Provider hinterlegt',
                ),
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Pflicht' : null,
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _firmwareCtrl,
                decoration:
                    const InputDecoration(labelText: 'Firmware (optional)'),
              ),
              const SizedBox(height: 16),
              FilledButton(
                onPressed: _submit,
                child: const Text('Registrieren'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Slot-Konfiguration ─────────────────────────────────────────────
class _SlotsTab extends ConsumerStatefulWidget {
  const _SlotsTab();
  @override
  ConsumerState<_SlotsTab> createState() => _SlotsTabState();
}

class _SlotsTabState extends ConsumerState<_SlotsTab> {
  String? _machineId;

  @override
  Widget build(BuildContext context) {
    final client = ref.watch(supabaseClientProvider);
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(AppSpacing.s5),
          child: FutureBuilder<List<Map<String, dynamic>>>(
            future: client
                .from('machines')
                .select('id, code, name')
                .order('code')
                .then((r) => (r as List).cast<Map<String, dynamic>>()),
            builder: (context, snap) {
              final list = snap.data ?? [];
              return DropdownButtonFormField<String>(
                initialValue: _machineId,
                decoration: const InputDecoration(labelText: 'Automat wählen'),
                items: [
                  for (final m in list)
                    DropdownMenuItem(
                      value: m['id'] as String,
                      child: Text('${m['code']} · ${m['name']}'),
                    ),
                ],
                onChanged: (v) => setState(() => _machineId = v),
              );
            },
          ),
        ),
        Expanded(
          child: _machineId == null
              ? const _EmptyHint(
                  icon: Icons.grid_view,
                  text: 'Automat wählen, um die Slot-Belegung zu bearbeiten.',
                )
              : _SlotList(machineId: _machineId!),
        ),
      ],
    );
  }
}

class _SlotList extends ConsumerWidget {
  const _SlotList({required this.machineId});
  final String machineId;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final client = ref.watch(supabaseClientProvider);
    return FutureBuilder<List<Map<String, dynamic>>>(
      future: client
          .from('machine_slots')
          .select('id, slot_code, product_id, unit_price_net, capacity, '
              'product:products(id, name, sku)')
          .eq('machine_id', machineId)
          .order('slot_code')
          .then((r) => (r as List).cast<Map<String, dynamic>>()),
      builder: (context, snap) {
        final list = snap.data ?? [];
        return Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s5),
              child: FilledButton.icon(
                onPressed: () => _openSlotForm(context, ref, null),
                icon: const Icon(Icons.add),
                label: const Text('Slot anlegen / bearbeiten'),
                style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink,
                ),
              ),
            ),
            Expanded(
              child: list.isEmpty
                  ? const _EmptyHint(
                      icon: Icons.grid_off_outlined,
                      text: 'Für diesen Automaten sind noch keine Slots '
                          'konfiguriert.',
                    )
                  : ListView(
                      padding: const EdgeInsets.all(AppSpacing.s5),
                      children: [
                        for (final s in list)
                          _SlotCard(
                            row: s,
                            onTap: () => _openSlotForm(context, ref, s),
                          ),
                      ],
                    ),
            ),
          ],
        );
      },
    );
  }

  Future<void> _openSlotForm(
    BuildContext context,
    WidgetRef ref,
    Map<String, dynamic>? existing,
  ) async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _SlotForm(machineId: machineId, existing: existing),
    );
    // ignore: invalid_use_of_protected_member, use_build_context_synchronously
    (context as Element).markNeedsBuild();
  }
}

class _SlotCard extends StatelessWidget {
  const _SlotCard({required this.row, required this.onTap});
  final Map<String, dynamic> row;
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) {
    final p = row['product'] as Map<String, dynamic>?;
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s2),
      child: AppCard(
        onTap: onTap,
        padding: const EdgeInsets.all(AppSpacing.s3),
        child: Row(
          children: [
            Container(
              width: 44,
              height: 44,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: AppColors.brand,
                borderRadius: BorderRadius.circular(AppRadii.md),
              ),
              child: Text(
                row['slot_code']?.toString() ?? '',
                style: AppTypography.body(
                  size: 14,
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
                  Text(
                    p?['name']?.toString() ?? '— kein Produkt zugeordnet —',
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                  Text(
                    'SKU: ${p?['sku'] ?? '—'} · '
                    'Kapazität: ${row['capacity']} · '
                    'Preis: ${row['unit_price_net'] == null ? '—' : Formatters.euro((row['unit_price_net'] as num).toDouble())}',
                    style: AppTypography.body(
                      size: 11,
                      color: AppColors.textMuted,
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

class _SlotForm extends ConsumerStatefulWidget {
  const _SlotForm({required this.machineId, this.existing});
  final String machineId;
  final Map<String, dynamic>? existing;
  @override
  ConsumerState<_SlotForm> createState() => _SlotFormState();
}

class _SlotFormState extends ConsumerState<_SlotForm> {
  final _formKey = GlobalKey<FormState>();
  final _slotCtrl = TextEditingController();
  final _priceCtrl = TextEditingController();
  final _capCtrl = TextEditingController(text: '12');
  String? _productId;

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    if (e != null) {
      _slotCtrl.text = e['slot_code']?.toString() ?? '';
      _priceCtrl.text = e['unit_price_net']?.toString() ?? '';
      _capCtrl.text = e['capacity']?.toString() ?? '12';
      _productId = e['product_id'] as String?;
    }
  }

  @override
  void dispose() {
    _slotCtrl.dispose();
    _priceCtrl.dispose();
    _capCtrl.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    final client = ref.read(supabaseClientProvider);
    try {
      await client.rpc(
        'set_machine_slot',
        params: {
          'p_machine_id': widget.machineId,
          'p_slot_code': _slotCtrl.text.trim(),
          'p_product_id': _productId,
          'p_unit_price_net':
              double.tryParse(_priceCtrl.text.replaceAll(',', '.')),
          'p_capacity': int.tryParse(_capCtrl.text) ?? 12,
        },
      );
      if (mounted) Navigator.of(context).pop();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('$e')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final client = ref.watch(supabaseClientProvider);
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                widget.existing == null ? 'Slot anlegen' : 'Slot bearbeiten',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _slotCtrl,
                decoration:
                    const InputDecoration(labelText: 'Slot-Code (z. B. A3)'),
                validator: (v) =>
                    (v == null || v.trim().isEmpty) ? 'Pflicht' : null,
              ),
              const SizedBox(height: 12),
              FutureBuilder<List<Map<String, dynamic>>>(
                future: client
                    .from('products')
                    .select('id, name, sku')
                    .eq('status', 'active')
                    .order('name')
                    .then((r) => (r as List).cast<Map<String, dynamic>>()),
                builder: (context, snap) {
                  final list = snap.data ?? [];
                  return DropdownButtonFormField<String>(
                    initialValue: _productId,
                    decoration: const InputDecoration(labelText: 'Produkt'),
                    items: [
                      const DropdownMenuItem(
                        value: null,
                        child: Text('— kein Produkt —'),
                      ),
                      for (final p in list)
                        DropdownMenuItem(
                          value: p['id'] as String,
                          child: Text('${p['name']} (${p['sku']})'),
                        ),
                    ],
                    onChanged: (v) => setState(() => _productId = v),
                  );
                },
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _priceCtrl,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration:
                    const InputDecoration(labelText: 'VK-Preis netto (€)'),
              ),
              const SizedBox(height: 12),
              TextFormField(
                controller: _capCtrl,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Kapazität'),
              ),
              const SizedBox(height: 16),
              FilledButton(onPressed: _submit, child: const Text('Speichern')),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Event-Log ──────────────────────────────────────────────────────
final _eventsProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>((ref) async {
  final client = ref.watch(supabaseClientProvider);
  final rows = await client
      .from('machine_telemetry_events')
      .select('id, event_type, status, event_uid, occurred_at, received_at, '
          'processed_at, quantity, unit_price_net, dispense_confirmed, '
          'temperature_c, error_reason, slot_code, '
          'machine:machines(code, name), '
          'provider:telemetry_providers(name, adapter)')
      .order('received_at', ascending: false)
      .limit(200);
  return (rows as List).cast<Map<String, dynamic>>();
});

class _EventsTab extends ConsumerWidget {
  const _EventsTab();
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final events = ref.watch(_eventsProvider);
    return events.when(
      loading: () => const Center(
        child: CircularProgressIndicator(color: AppColors.brand),
      ),
      error: (e, _) => Center(child: Text('$e')),
      data: (rows) => rows.isEmpty
          ? const _EmptyHint(
              icon: Icons.history_toggle_off,
              text: 'Noch keine Telemetrie-Events empfangen.',
            )
          : RefreshIndicator(
              onRefresh: () async => ref.invalidate(_eventsProvider),
              color: AppColors.brand,
              child: ListView(
                padding: const EdgeInsets.all(AppSpacing.s5),
                children: [for (final r in rows) _EventCard(row: r)],
              ),
            ),
    );
  }
}

class _EventCard extends StatelessWidget {
  const _EventCard({required this.row});
  final Map<String, dynamic> row;

  @override
  Widget build(BuildContext context) {
    final status = row['status']?.toString() ?? '';
    final type = row['event_type']?.toString() ?? '';
    final m = row['machine'] as Map<String, dynamic>?;
    final tone = switch (status) {
      'processed' => StatusTone.positive,
      'duplicate' => StatusTone.neutral,
      'rejected' => StatusTone.critical,
      _ => StatusTone.warning,
    };
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s2),
      child: AppCard(
        padding: const EdgeInsets.all(AppSpacing.s3),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    '$type · ${m?['code'] ?? '?'}${row['slot_code'] != null ? ' · Slot ${row['slot_code']}' : ''}',
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                ),
                StatusBadge(label: status, tone: tone),
              ],
            ),
            const SizedBox(height: 2),
            Text(
              'Occurred: ${_short(row['occurred_at'])} · '
              'Received: ${_short(row['received_at'])}',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            if (row['quantity'] != null || row['unit_price_net'] != null)
              Text(
                'Menge: ${row['quantity'] ?? '—'}'
                '${row['unit_price_net'] != null ? ' · Preis: ${Formatters.euro((row['unit_price_net'] as num).toDouble())}' : ''}'
                '${row['dispense_confirmed'] == false ? ' · Auswurf NICHT bestätigt' : ''}',
                style: AppTypography.body(
                  size: 11,
                  color: AppColors.textDefault,
                ),
              ),
            if ((row['error_reason'] as String?)?.isNotEmpty == true)
              Text(
                'Fehler: ${row['error_reason']}',
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.statusCritical,
                ),
              ),
          ],
        ),
      ),
    );
  }

  static String _short(dynamic v) {
    if (v == null) return '—';
    try {
      final d = DateTime.parse(v.toString()).toLocal();
      final dd = d.day.toString().padLeft(2, '0');
      final mm = d.month.toString().padLeft(2, '0');
      final hh = d.hour.toString().padLeft(2, '0');
      final mi = d.minute.toString().padLeft(2, '0');
      return '$dd.$mm. $hh:$mi';
    } catch (_) {
      return v.toString();
    }
  }
}

// ── Utility: Empty-Hint ───────────────────────────────────────────
class _EmptyHint extends StatelessWidget {
  const _EmptyHint({required this.icon, required this.text});
  final IconData icon;
  final String text;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(AppSpacing.s6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 40, color: AppColors.textMuted),
            const SizedBox(height: AppSpacing.s2),
            Text(
              text,
              textAlign: TextAlign.center,
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
          ],
        ),
      ),
    );
  }
}
