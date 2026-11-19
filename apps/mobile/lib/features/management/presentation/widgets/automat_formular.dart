import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../data/automaten_verwaltung.dart';
import '../../domain/entities/machine.dart';
import '../controllers/management_providers.dart';

/// Öffnet das Formular für einen neuen ([automat] leer) oder bestehenden
/// Automaten. Ergebnis `true`, wenn gespeichert wurde.
Future<bool?> automatBearbeiten(
  BuildContext context, {
  Machine? automat,
  required List<String> vorhandeneKennungen,
}) {
  return showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    showDragHandle: true,
    builder: (_) => AutomatFormular(
      automat: automat,
      vorhandeneKennungen: vorhandeneKennungen,
    ),
  );
}

const _neuerStandort = '__neu__';
const _ohneStandort = '';

class AutomatFormular extends ConsumerStatefulWidget {
  const AutomatFormular({
    super.key,
    this.automat,
    required this.vorhandeneKennungen,
  });

  final Machine? automat;
  final List<String> vorhandeneKennungen;

  @override
  ConsumerState<AutomatFormular> createState() => _AutomatFormularState();
}

class _AutomatFormularState extends ConsumerState<AutomatFormular> {
  final _form = GlobalKey<FormState>();
  late final TextEditingController _code;
  late final TextEditingController _name;
  late String _type;
  late bool _gekuehlt;
  late bool _inBetrieb;
  String _standortId = _ohneStandort;
  bool _speichert = false;
  String? _fehler;
  // Baut die Standortauswahl neu auf, wenn „Neuen Standort anlegen"
  // abgebrochen wurde; sonst bliebe dieser Eintrag ausgewählt stehen.
  int _auswahlAufbau = 0;

  bool get _neu => widget.automat == null;

  @override
  void initState() {
    super.initState();
    final a = widget.automat;
    _code = TextEditingController(
      text: a?.code ?? naechsteAutomatenKennung(widget.vorhandeneKennungen),
    );
    _name = TextEditingController(text: a?.name ?? '');
    _type = automatenArten.containsKey(a?.type) ? a!.type : 'snack';
    _gekuehlt = a?.isCooled ?? false;
    _inBetrieb = a?.inBetrieb ?? true;
    _standortId = a?.locationId ?? _ohneStandort;
  }

  @override
  void dispose() {
    _code.dispose();
    _name.dispose();
    super.dispose();
  }

  Standort? _gewaehlt(List<Standort> liste) {
    for (final s in liste) {
      if (s.id == _standortId) return s;
    }
    return null;
  }

  Future<void> _standortFormular(Standort? vorlage) async {
    final s = await standortBearbeiten(context, standort: vorlage);
    if (!mounted) return;
    setState(() {
      if (s != null) _standortId = s.id;
      _auswahlAufbau++;
    });
  }

  Future<void> _speichern(List<Standort> standorte) async {
    if (!(_form.currentState?.validate() ?? false)) return;
    setState(() {
      _speichert = true;
      _fehler = null;
    });
    try {
      await ref.read(automatenVerwaltungProvider).automatSpeichern(
            id: widget.automat?.id,
            code: _code.text,
            name: _name.text,
            type: _type,
            isCooled: _gekuehlt,
            status: _inBetrieb ? 'active' : 'inactive',
            standort: _gewaehlt(standorte),
          );
      ref.invalidate(machinesProvider);
      if (mounted) Navigator.of(context).pop(true);
    } catch (e) {
      if (mounted) {
        setState(() {
          _speichert = false;
          _fehler = automatFehlerText(e);
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final text = Theme.of(context).textTheme;
    final standorte = ref.watch(standorteProvider);
    final liste = standorte.valueOrNull ?? const <Standort>[];
    final gewaehlt = _gewaehlt(liste);
    // Ein Standort, der nicht mehr in der Liste steht (archiviert), wird
    // nicht still überschrieben, sondern als „ohne Standort" angezeigt.
    final wert = gewaehlt == null ? _ohneStandort : _standortId;

    return Padding(
      padding: EdgeInsets.only(
        bottom: MediaQuery.of(context).viewInsets.bottom,
      ),
      child: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            0,
            AppSpacing.s5,
            AppSpacing.s5,
          ),
          child: Form(
            key: _form,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  _neu ? 'Neuer Automat' : 'Automat bearbeiten',
                  style: text.titleLarge,
                ),
                const SizedBox(height: AppSpacing.s4),
                TextFormField(
                  controller: _name,
                  decoration: const InputDecoration(
                    labelText: 'Name',
                    hintText: 'z. B. Snackautomat Sportplatz',
                  ),
                  textCapitalization: TextCapitalization.sentences,
                  validator: (v) => (v == null || v.trim().isEmpty)
                      ? 'Bitte einen Namen eingeben'
                      : null,
                ),
                const SizedBox(height: AppSpacing.s3),
                TextFormField(
                  controller: _code,
                  decoration: const InputDecoration(
                    labelText: 'Kennung',
                    helperText:
                        'Kurz und eindeutig, z. B. A1. Steht auf Belegen.',
                  ),
                  textCapitalization: TextCapitalization.characters,
                  validator: (v) {
                    final t = v?.trim() ?? '';
                    if (t.isEmpty) return 'Bitte eine Kennung eingeben';
                    if (t.length > 20) return 'Höchstens 20 Zeichen';
                    return null;
                  },
                ),
                const SizedBox(height: AppSpacing.s3),
                DropdownButtonFormField<String>(
                  initialValue: _type,
                  decoration: const InputDecoration(labelText: 'Art'),
                  items: [
                    for (final e in automatenArten.entries)
                      DropdownMenuItem(value: e.key, child: Text(e.value)),
                  ],
                  onChanged: (v) => setState(() => _type = v ?? _type),
                ),
                SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  title: const Text('Gekühlt'),
                  value: _gekuehlt,
                  onChanged: (v) => setState(() => _gekuehlt = v),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text('Standort', style: text.titleSmall),
                const SizedBox(height: AppSpacing.s2),
                if (standorte.isLoading)
                  const LinearProgressIndicator()
                else
                  DropdownButtonFormField<String>(
                    key: ValueKey(
                      'standort-$wert-${liste.length}-$_auswahlAufbau',
                    ),
                    initialValue: wert,
                    isExpanded: true,
                    decoration: const InputDecoration(labelText: 'Standort'),
                    items: [
                      const DropdownMenuItem(
                        value: _ohneStandort,
                        child: Text('Ohne Standort'),
                      ),
                      for (final s in liste)
                        DropdownMenuItem(
                          value: s.id,
                          child: Text(
                            s.adresse.isEmpty
                                ? s.name
                                : '${s.name} · ${s.adresse}',
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      const DropdownMenuItem(
                        value: _neuerStandort,
                        child: Text('+ Neuen Standort anlegen …'),
                      ),
                    ],
                    onChanged: (v) {
                      if (v == _neuerStandort) {
                        _standortFormular(null);
                      } else {
                        setState(() => _standortId = v ?? _ohneStandort);
                      }
                    },
                  ),
                if (gewaehlt != null)
                  Align(
                    alignment: Alignment.centerLeft,
                    child: TextButton.icon(
                      onPressed: () => _standortFormular(gewaehlt),
                      icon: const Icon(Icons.edit_location_alt_outlined),
                      label: const Text('Adresse dieses Standorts ändern'),
                    ),
                  ),
                if (!_neu &&
                    gewaehlt == null &&
                    (widget.automat?.locationName ?? '').isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: AppSpacing.s1),
                    child: Text(
                      'Bisher: ${widget.automat!.locationName} '
                      '(nicht mehr in der Standortliste)',
                      style:
                          text.bodySmall?.copyWith(color: AppColors.textMuted),
                    ),
                  ),
                const SizedBox(height: AppSpacing.s3),
                Text('Betrieb', style: text.titleSmall),
                const SizedBox(height: AppSpacing.s2),
                SegmentedButton<bool>(
                  segments: const [
                    ButtonSegment(
                      value: true,
                      icon: Icon(Icons.check_circle_outline),
                      label: Text('In Betrieb'),
                    ),
                    ButtonSegment(
                      value: false,
                      icon: Icon(Icons.pause_circle_outline),
                      label: Text('Stillgelegt'),
                    ),
                  ],
                  selected: {_inBetrieb},
                  onSelectionChanged: (s) =>
                      setState(() => _inBetrieb = s.first),
                ),
                const SizedBox(height: AppSpacing.s1),
                Text(
                  _inBetrieb
                      ? 'Erscheint im Automaten-Finder der Kunden-App.'
                      : 'Für Kunden ausgeblendet. Bestand, Protokolle und '
                          'Verkäufe bleiben gespeichert.',
                  style: text.bodySmall?.copyWith(color: AppColors.textMuted),
                ),
                if (_fehler != null) ...[
                  const SizedBox(height: AppSpacing.s3),
                  Text(
                    _fehler!,
                    style: text.bodyMedium
                        ?.copyWith(color: AppColors.statusCritical),
                  ),
                ],
                const SizedBox(height: AppSpacing.s4),
                FilledButton(
                  onPressed: _speichert ? null : () => _speichern(liste),
                  child: _speichert
                      ? const SizedBox(
                          width: 20,
                          height: 20,
                          child: CircularProgressIndicator(strokeWidth: 2),
                        )
                      : Text(_neu ? 'Automat anlegen' : 'Speichern'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// Dialog zum Anlegen ([standort] leer) oder Ändern eines Standorts.
/// Ergebnis: der gespeicherte Standort oder `null` bei Abbruch.
Future<Standort?> standortBearbeiten(
  BuildContext context, {
  Standort? standort,
}) {
  return showDialog<Standort>(
    context: context,
    builder: (_) => _StandortDialog(standort: standort),
  );
}

class _StandortDialog extends ConsumerStatefulWidget {
  const _StandortDialog({this.standort});
  final Standort? standort;

  @override
  ConsumerState<_StandortDialog> createState() => _StandortDialogState();
}

class _StandortDialogState extends ConsumerState<_StandortDialog> {
  final _form = GlobalKey<FormState>();
  late final _name = TextEditingController(text: widget.standort?.name);
  late final _strasse = TextEditingController(text: widget.standort?.street);
  late final _plz = TextEditingController(text: widget.standort?.zip);
  late final _ort = TextEditingController(text: widget.standort?.city);
  late final _zeiten =
      TextEditingController(text: widget.standort?.accessHours);
  bool _speichert = false;
  String? _fehler;

  @override
  void dispose() {
    for (final c in [_name, _strasse, _plz, _ort, _zeiten]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _speichern() async {
    if (!(_form.currentState?.validate() ?? false)) return;
    setState(() {
      _speichert = true;
      _fehler = null;
    });
    try {
      final s = await ref.read(automatenVerwaltungProvider).standortSpeichern(
            id: widget.standort?.id,
            name: _name.text,
            street: _strasse.text,
            zip: _plz.text,
            city: _ort.text,
            accessHours: _zeiten.text,
          );
      ref
        ..invalidate(standorteProvider)
        ..invalidate(machinesProvider);
      if (mounted) Navigator.of(context).pop(s);
    } catch (e) {
      if (mounted) {
        setState(() {
          _speichert = false;
          _fehler = automatFehlerText(e);
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final aendern = widget.standort != null;
    return AlertDialog(
      title: Text(aendern ? 'Standort ändern' : 'Neuer Standort'),
      content: Form(
        key: _form,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextFormField(
                controller: _name,
                decoration: const InputDecoration(
                  labelText: 'Name des Standorts',
                  hintText: 'z. B. Sportplatz Osterweddingen',
                ),
                validator: (v) => (v == null || v.trim().isEmpty)
                    ? 'Bitte einen Namen eingeben'
                    : null,
              ),
              TextFormField(
                controller: _strasse,
                decoration: const InputDecoration(labelText: 'Straße und Nr.'),
              ),
              Row(
                children: [
                  SizedBox(
                    width: 90,
                    child: TextFormField(
                      controller: _plz,
                      keyboardType: TextInputType.number,
                      decoration: const InputDecoration(labelText: 'PLZ'),
                    ),
                  ),
                  const SizedBox(width: AppSpacing.s3),
                  Expanded(
                    child: TextFormField(
                      controller: _ort,
                      decoration: const InputDecoration(labelText: 'Ort'),
                    ),
                  ),
                ],
              ),
              TextFormField(
                controller: _zeiten,
                decoration: const InputDecoration(
                  labelText: 'Zugang (optional)',
                  hintText: 'z. B. rund um die Uhr',
                ),
              ),
              if (aendern) ...[
                const SizedBox(height: AppSpacing.s3),
                Text(
                  'Die neue Adresse gilt für alle Automaten an diesem Standort.',
                  style: Theme.of(context)
                      .textTheme
                      .bodySmall
                      ?.copyWith(color: AppColors.textMuted),
                ),
              ],
              if (_fehler != null) ...[
                const SizedBox(height: AppSpacing.s3),
                Text(
                  _fehler!,
                  style: Theme.of(context)
                      .textTheme
                      .bodyMedium
                      ?.copyWith(color: AppColors.statusCritical),
                ),
              ],
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: _speichert ? null : () => Navigator.of(context).pop(),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: _speichert ? null : _speichern,
          child: Text(aendern ? 'Speichern' : 'Anlegen'),
        ),
      ],
    );
  }
}
