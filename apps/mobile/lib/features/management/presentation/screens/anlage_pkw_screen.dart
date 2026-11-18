import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../data/approvals_remote_data_source.dart';
import 'anlage_pkw_print.dart'
    if (dart.library.js_interop) 'anlage_pkw_print_web.dart';

/// Anlage zur Ermittlung der individuellen PKW-Kosten.
///
/// Auftrag des Auftraggebers vom 25.08.2026. Die Rechnung dahinter:
/// Gesamtkosten eines Jahres geteilt durch die in diesem Jahr gefahrenen
/// Kilometer ergibt den individuellen Satz je Kilometer; dieser Satz mal die
/// betrieblich gefahrenen Kilometer ergibt die Nutzungseinlage.
///
/// Gerechnet wird auf dem Server (`anlage_pkw`), nicht hier: Die Zahlen
/// stehen am Ende in einem Dokument, das unterschrieben wird. Zwei Clients,
/// die verschieden runden, wären zwei Wahrheiten.
class AnlagePkwScreen extends ConsumerStatefulWidget {
  const AnlagePkwScreen({super.key});

  @override
  ConsumerState<AnlagePkwScreen> createState() => _AnlagePkwScreenState();
}

/// Die Stammdaten aus dem Impressum. Sie stehen im Kopf des PDF.
const _firma = 'Bördesnack24 GbR';
const _steuernummer = '102/178/01635';
const _ustIdNr = 'DE 458804058';

const _kostenarten = <String, String>{
  'tanken': 'Tanken',
  'versicherung': 'Versicherung',
  'kfz_steuer': 'Kfz-Steuer',
  'waesche': 'Autowäsche',
  'reparatur': 'Reparaturen',
  'leasing': 'Leasingraten',
  'abschreibung': 'Abschreibung',
  'sonstiges': 'Sonstiges',
};

class _AnlagePkwScreenState extends ConsumerState<AnlagePkwScreen> {
  late int _jahr = DateTime.now().year;
  Map<String, dynamic>? _daten;
  List<Map<String, dynamic>> _signaturen = const [];
  bool _laedt = false;
  String? _fehler;

  @override
  void initState() {
    super.initState();
    _laden();
  }

  void _jahrWechseln(int jahr) {
    setState(() => _jahr = jahr);
    _laden();
  }

  Future<void> _laden() async {
    setState(() {
      _laedt = true;
      _fehler = null;
    });
    try {
      final client = ref.read(supabaseClientProvider);
      final ergebnisse = await Future.wait([
        client.rpc('anlage_pkw', params: {'p_jahr': _jahr}),
        client.rpc('list_partner_signatures'),
      ]);
      _daten = Map<String, dynamic>.from(ergebnisse[0] as Map);
      _signaturen =
          (ergebnisse[1] as List).cast<Map<String, dynamic>>().toList();
    } catch (e) {
      _fehler = e.toString();
      _daten = null;
    } finally {
      if (mounted) setState(() => _laedt = false);
    }
  }

  List<Map<String, dynamic>> get _fahrzeuge =>
      ((_daten?['fahrzeuge'] as List?) ?? const [])
          .cast<Map<String, dynamic>>();

  List<Map<String, dynamic>> get _fahrten =>
      ((_daten?['fahrten'] as List?) ?? const []).cast<Map<String, dynamic>>();

  /// Ist die Anlage für dieses Jahr freigegeben und damit unveränderlich?
  ///
  /// Die Angabe kommt aus der Auswertung, nicht aus einer eigenen Abfrage:
  /// Durchgesetzt wird die Sperre ohnehin in der Datenbank, hier geht es nur
  /// darum, sie sichtbar zu machen, statt den Nutzer in einen Fehler laufen
  /// zu lassen.
  bool get _gesperrt => anlageIstGesperrt(_daten);

  Map<String, dynamic>? get _freigabe => _daten?['freigabe'] == null
      ? null
      : Map<String, dynamic>.from(_daten!['freigabe'] as Map);

  /// Wer unterschrieben hat, in der Form, die der Druck erwartet.
  List<Map<String, dynamic>>? get _unterzeichner {
    final liste = (_freigabe?['unterzeichner'] as List?) ?? const [];
    if (liste.isEmpty) return null;
    return [
      for (final e in liste)
        {
          'full_name': (e as Map)['name'],
          'signature_url': e['unterschrift'],
        },
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Anlage PKW-Kosten')),
      body: RefreshIndicator(
        onRefresh: _laden,
        color: AppColors.brand,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s8,
          ),
          children: [
            _Kopf(jahr: _jahr, onJahr: _jahrWechseln),
            const SizedBox(height: AppSpacing.s4),
            if (_daten != null && !_laedt) _aktionen(),
            if (_laedt)
              const Padding(
                padding: EdgeInsets.all(48),
                child: Center(
                  child: CircularProgressIndicator(color: AppColors.brand),
                ),
              )
            else if (_fehler != null)
              _Hinweis(
                text: 'Die Anlage konnte nicht geladen werden: $_fehler',
                farbe: AppColors.statusCritical,
                icon: Icons.error_outline,
              )
            else ...[
              if (_gesperrt) ...[
                _Sperrhinweis(jahr: _jahr, freigabe: _freigabe),
                const SizedBox(height: AppSpacing.s4),
              ],
              _FahrzeugTabelle(
                fahrzeuge: _fahrzeuge,
                jahr: _jahr,
                gesperrt: _gesperrt,
                onAendern: _laden,
              ),
              const SizedBox(height: AppSpacing.s6),
              _FahrtenTabelle(
                fahrten: _fahrten,
                fahrzeuge: _fahrzeuge,
                jahr: _jahr,
                gesperrt: _gesperrt,
                nutzungseinlage: _zahl(_daten?['nutzungseinlage']),
                ohneSatz: _zahl(_daten?['fahrten_ohne_satz']).toInt(),
                onAendern: _laden,
              ),
              const SizedBox(height: AppSpacing.s6),
              _Unterschriften(signaturen: _signaturen),
            ],
          ],
        ),
      ),
    );
  }

  Widget _aktionen() {
    return HeroActionBar(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      actions: [
        // Ist die Anlage schon freigegeben, gibt es nichts mehr anzufordern.
        if (!_gesperrt)
          HeroAction(
            icon: Icons.rule_folder_outlined,
            tooltip: 'Freigabe anfordern',
            iconColor: AppColors.brand,
            onTap: _freigabeAnfordern,
          ),
        // Auf iOS und Android gibt es den Druck noch nicht. Einen Knopf zu
        // zeigen, der nichts tut, ist schlimmer als keiner.
        if (anlageDruckMoeglich)
          HeroAction(
            icon: Icons.picture_as_pdf,
            tooltip: 'Als PDF drucken',
            iconColor: AppColors.statusCritical,
            borderColor: AppColors.statusCritical,
            onTap: () => printAnlagePkw(
              daten: _daten!,
              signatures: _signaturen,
              firma: _firma,
              steuernummer: _steuernummer,
              ustIdNr: _ustIdNr,
              // Ist die Anlage freigegeben, trägt das PDF den Stempel und
              // die Unterschriften aus der Freigabe. Ohne das müsste man
              // sich die endgültige Fassung über den Freigabe-Bildschirm
              // zusammensuchen.
              approvalDecisions: _unterzeichner,
            ),
          ),
      ],
    );
  }

  Future<void> _freigabeAnfordern() async {
    final bestaetigt = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: const Text('Freigabe anfordern'),
        content: Text(
          'Die Anlage PKW-Kosten $_jahr wird beiden Gesellschaftern zur '
          'Prüfung vorgelegt. Nach beidseitiger Freigabe wird sie mit den '
          'hinterlegten Unterschriften abgeschlossen. Fortfahren?',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.brand,
              foregroundColor: AppColors.ink,
            ),
            onPressed: () => Navigator.pop(context, true),
            child: const Text('Anfordern'),
          ),
        ],
      ),
    );
    if (bestaetigt != true) return;
    try {
      final remote =
          ApprovalsRemoteDataSource(ref.read(supabaseClientProvider));
      await remote.requestApproval(
        documentKind: 'anlage_pkw',
        periodFrom: DateTime(_jahr, 1, 1),
        periodTo: DateTime(_jahr, 12, 31),
        title: 'Anlage PKW-Kosten $_jahr',
        snapshot: _daten ?? const {},
      );
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Freigabe angefordert.')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Fehler: $e')),
        );
      }
    }
  }
}

/// Immer derselbe Hinweis, wenn ein Betrag fehlt oder null ist.
const _fahrtUnvollstaendig = SnackBar(
  content: Text('Anlass und eine Strecke über null sind nötig.'),
);

const _betragFehlt = SnackBar(
  content: Text('Bitte einen Betrag über null angeben.'),
);

double _zahl(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}

String _satzText(dynamic v) =>
    v == null ? '—' : '${_zahl(v).toStringAsFixed(4).replaceAll('.', ',')} €';

String _kmText(dynamic v) {
  if (v == null) return '—';
  final n = _zahl(v);
  final t = n == n.roundToDouble()
      ? n.round().toString()
      : n.toStringAsFixed(1).replaceAll('.', ',');
  return '$t km';
}

// ─── Kopf ──────────────────────────────────────────────────────────────────

class _Kopf extends StatelessWidget {
  const _Kopf({required this.jahr, required this.onJahr});

  final int jahr;
  final ValueChanged<int> onJahr;

  @override
  Widget build(BuildContext context) {
    final jetzt = DateTime.now().year;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SectionHeader(
          eyebrow: 'Anlage zum Jahresabschluss',
          title: 'Individuelle PKW-Kosten $jahr',
        ),
        const SizedBox(height: AppSpacing.s2),
        Text(
          '$_firma, Steuernummer $_steuernummer, USt-IdNr. $_ustIdNr',
          style: AppTypography.body(size: 12, color: AppColors.textMuted),
        ),
        const SizedBox(height: AppSpacing.s4),
        Wrap(
          spacing: 8,
          children: [
            for (var j = jetzt; j >= jetzt - 4; j--)
              ChoiceChip(
                label: Text('$j'),
                selected: j == jahr,
                onSelected: (_) => onJahr(j),
              ),
          ],
        ),
      ],
    );
  }
}

// ─── Fahrzeuge ─────────────────────────────────────────────────────────────

class _FahrzeugTabelle extends ConsumerWidget {
  const _FahrzeugTabelle({
    required this.fahrzeuge,
    required this.jahr,
    required this.gesperrt,
    required this.onAendern,
  });

  final List<Map<String, dynamic>> fahrzeuge;
  final int jahr;
  final bool gesperrt;
  final Future<void> Function() onAendern;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Eyebrow('Fahrzeugkosten'),
        const SizedBox(height: AppSpacing.s2),
        Text(
          'Alle Beträge brutto. Bei einem privaten Fahrzeug gibt es keinen '
          'Vorsteuerabzug, die Umsatzsteuer gehört also zu den Kosten.',
          style: AppTypography.body(size: 12, color: AppColors.textMuted),
        ),
        const SizedBox(height: AppSpacing.s3),
        for (final f in fahrzeuge) ...[
          _FahrzeugKarte(
            fahrzeug: f,
            jahr: jahr,
            gesperrt: gesperrt,
            onAendern: onAendern,
          ),
          const SizedBox(height: AppSpacing.s3),
        ],
      ],
    );
  }
}

class _FahrzeugKarte extends ConsumerWidget {
  const _FahrzeugKarte({
    required this.fahrzeug,
    required this.jahr,
    required this.gesperrt,
    required this.onAendern,
  });

  final Map<String, dynamic> fahrzeug;
  final int jahr;
  final bool gesperrt;
  final Future<void> Function() onAendern;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final kosten =
        (fahrzeug['kosten'] as List? ?? const []).cast<Map<String, dynamic>>();

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  '${fahrzeug['kennzeichen']}',
                  style: AppTypography.body(
                    size: 16,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              _Chip(
                text: _satzText(fahrzeug['satz_je_km']),
                hinweis: 'je Kilometer',
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          // Einzelne Zeilen statt nur Summen je Kostenart: Korrigieren kann
          // man nur, was man einzeln anfassen kann.
          for (final k in kosten)
            _KostenZeile(
              kosten: k,
              gesperrt: gesperrt,
              onBearbeiten: () => _kostenBearbeiten(context, ref, k),
            ),
          if (kosten.isEmpty)
            Text(
              'Für $jahr ist noch keine Kostenposition erfasst.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
          const Divider(height: AppSpacing.s5, color: AppColors.borderSubtle),
          _Zeile(
            links: 'Gesamtkosten',
            rechts: Formatters.euro(_zahl(fahrzeug['gesamtkosten'])),
            fett: true,
          ),
          _Zeile(
            links: 'Kilometerstand 01.01.',
            rechts: _kmText(fahrzeug['km_stand_anfang']),
          ),
          _Zeile(
            links: 'Kilometerstand 31.12.',
            rechts: _kmText(fahrzeug['km_stand_ende']),
          ),
          _Zeile(
            links: 'Gefahrene Kilometer',
            rechts: _kmText(fahrzeug['km_gefahren']),
            fett: true,
          ),
          if (fahrzeug['satz_je_km'] == null) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Ohne beide Kilometerstände lässt sich kein Satz je Kilometer '
              'ermitteln. Fahrten mit diesem Fahrzeug bleiben so lange ohne '
              'Betrag.',
              style: AppTypography.body(
                size: 12,
                color: AppColors.statusCritical,
              ),
            ),
          ],
          // Nach der Freigabe gibt es hier nichts mehr zu tun. Eine
          // ausgegraute Schaltfläche wäre eine Einladung, es zu versuchen;
          // der Hinweis oben sagt bereits, warum.
          if (!gesperrt) ...[
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () => _kilometerstaende(context, ref),
                    icon: const Icon(Icons.speed_outlined, size: 18),
                    label: const Text('Kilometerstände'),
                  ),
                ),
                const SizedBox(width: AppSpacing.s2),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () => _kostenErfassen(context, ref),
                    icon: const Icon(Icons.add, size: 18),
                    label: const Text('Kosten'),
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }

  /// Eine Kostenzeile ändern oder streichen.
  ///
  /// Gestrichen wird weich (`deleted_at`), nicht gelöscht: Eine
  /// Buchhaltungsunterlage, aus der Zeilen spurlos verschwinden, ist nach
  /// GoBD gerade das Falsche.
  Future<void> _kostenBearbeiten(
    BuildContext context,
    WidgetRef ref,
    Map<String, dynamic> zeile,
  ) async {
    var art = '${zeile['kostenart']}';
    final betrag = TextEditingController(
      text:
          _zahl(zeile['betrag_brutto']).toStringAsFixed(2).replaceAll('.', ','),
    );
    final bezeichnung =
        TextEditingController(text: '${zeile['bezeichnung'] ?? ''}');

    final wahl = await showDialog<String>(
      context: context,
      builder: (d) => StatefulBuilder(
        builder: (d2, setLocal) => AlertDialog(
          title: const Text('Kostenposition korrigieren'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              DropdownButtonFormField<String>(
                initialValue: art,
                decoration: const InputDecoration(labelText: 'Kostenart'),
                items: [
                  for (final e in _kostenarten.entries)
                    DropdownMenuItem(value: e.key, child: Text(e.value)),
                ],
                onChanged: (v) => setLocal(() => art = v ?? art),
              ),
              TextField(
                controller: betrag,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration:
                    const InputDecoration(labelText: 'Betrag brutto in Euro'),
              ),
              TextField(
                controller: bezeichnung,
                decoration: const InputDecoration(
                  labelText: 'Bezeichnung (freiwillig)',
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(d2, 'streichen'),
              child: const Text(
                'Streichen',
                style: TextStyle(color: AppColors.statusCritical),
              ),
            ),
            TextButton(
              onPressed: () => Navigator.pop(d2, 'abbrechen'),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: () => Navigator.pop(d2, 'speichern'),
              child: const Text('Speichern'),
            ),
          ],
        ),
      ),
    );
    if (wahl == null || wahl == 'abbrechen') return;

    final client = ref.read(supabaseClientProvider);
    try {
      if (wahl == 'streichen') {
        final id = '${zeile['id']}';
        final gestrichen = {
          'deleted_at': DateTime.now().toIso8601String(),
        };
        await client.from('pkw_kosten').update(gestrichen).eq('id', id);
      } else {
        final wert =
            double.tryParse(betrag.text.trim().replaceAll(',', '.')) ?? 0;
        if (wert <= 0) {
          if (context.mounted) {
            ScaffoldMessenger.of(context).showSnackBar(_betragFehlt);
          }
          return;
        }
        await client.from('pkw_kosten').update({
          'kostenart': art,
          'betrag_brutto': wert,
          'bezeichnung':
              bezeichnung.text.trim().isEmpty ? null : bezeichnung.text.trim(),
          'updated_at': DateTime.now().toIso8601String(),
        }).eq('id', '${zeile['id']}');
      }
      await onAendern();
    } catch (err) {
      if (context.mounted) _meldeFehler(context, err);
    }
  }

  Future<void> _kilometerstaende(BuildContext context, WidgetRef ref) async {
    final anfang = TextEditingController(
      text: fahrzeug['km_stand_anfang']?.toString() ?? '',
    );
    final ende = TextEditingController(
      text: fahrzeug['km_stand_ende']?.toString() ?? '',
    );
    final ok = await showDialog<bool>(
      context: context,
      builder: (d) => AlertDialog(
        title: Text('Kilometerstände $jahr'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: anfang,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Stand am 01.01.'),
            ),
            TextField(
              controller: ende,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Stand am 31.12.'),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(d, false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(d, true),
            child: const Text('Speichern'),
          ),
        ],
      ),
    );
    if (ok != true) return;
    final a = int.tryParse(anfang.text.trim());
    final e = int.tryParse(ende.text.trim());
    if (a != null && e != null && e < a) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Der Stand am 31.12. kann nicht kleiner sein als der am 01.01.',
            ),
          ),
        );
      }
      return;
    }
    try {
      await ref.read(supabaseClientProvider).from('pkw_jahr').upsert(
        {
          'pkw_id': fahrzeug['id'],
          'jahr': jahr,
          'km_stand_anfang': a,
          'km_stand_ende': e,
        },
        onConflict: 'pkw_id,jahr',
      );
      await onAendern();
    } catch (err) {
      if (context.mounted) _meldeFehler(context, err);
    }
  }

  Future<void> _kostenErfassen(BuildContext context, WidgetRef ref) async {
    var art = 'tanken';
    final betrag = TextEditingController();
    final bezeichnung = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (d) => StatefulBuilder(
        builder: (d2, setLocal) => AlertDialog(
          title: Text('Kosten ${fahrzeug['kennzeichen']}'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              DropdownButtonFormField<String>(
                initialValue: art,
                decoration: const InputDecoration(labelText: 'Kostenart'),
                items: [
                  for (final e in _kostenarten.entries)
                    DropdownMenuItem(value: e.key, child: Text(e.value)),
                ],
                onChanged: (v) => setLocal(() => art = v ?? art),
              ),
              TextField(
                controller: betrag,
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                decoration:
                    const InputDecoration(labelText: 'Betrag brutto in Euro'),
              ),
              TextField(
                controller: bezeichnung,
                decoration: const InputDecoration(
                  labelText: 'Bezeichnung (freiwillig)',
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(d2, false),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: () => Navigator.pop(d2, true),
              child: const Text('Hinzufügen'),
            ),
          ],
        ),
      ),
    );
    if (ok != true) return;
    final wert = double.tryParse(betrag.text.trim().replaceAll(',', '.')) ?? 0;
    if (wert <= 0) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(_betragFehlt);
      }
      return;
    }
    try {
      await ref.read(supabaseClientProvider).from('pkw_kosten').insert({
        'pkw_id': fahrzeug['id'],
        'jahr': jahr,
        'kostenart': art,
        'betrag_brutto': wert,
        'bezeichnung':
            bezeichnung.text.trim().isEmpty ? null : bezeichnung.text.trim(),
      });
      await onAendern();
    } catch (err) {
      if (context.mounted) _meldeFehler(context, err);
    }
  }
}

// ─── Fahrten ───────────────────────────────────────────────────────────────

class _FahrtenTabelle extends ConsumerWidget {
  const _FahrtenTabelle({
    required this.fahrten,
    required this.fahrzeuge,
    required this.jahr,
    required this.gesperrt,
    required this.nutzungseinlage,
    required this.ohneSatz,
    required this.onAendern,
  });

  final List<Map<String, dynamic>> fahrten;
  final List<Map<String, dynamic>> fahrzeuge;
  final int jahr;
  final bool gesperrt;
  final double nutzungseinlage;
  final int ohneSatz;
  final Future<void> Function() onAendern;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            const Expanded(child: Eyebrow('Betriebliche Fahrten')),
            if (!gesperrt)
              TextButton.icon(
                onPressed: fahrzeuge.isEmpty
                    ? null
                    : () => _fahrtErfassen(context, ref),
                icon: const Icon(Icons.add, size: 18),
                label: const Text('Fahrt'),
              ),
          ],
        ),
        const SizedBox(height: AppSpacing.s2),
        if (fahrten.isEmpty)
          _Hinweis(
            text: 'Für $jahr ist noch keine betriebliche Fahrt erfasst.',
            farbe: AppColors.textMuted,
            icon: Icons.route_outlined,
          )
        else
          // Waagerecht scrollbar: Die Tabelle hat eine Spalte je Fahrzeug
          // und passt auf einem Telefon sonst nicht.
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: DataTable(
              columnSpacing: AppSpacing.s4,
              headingRowHeight: 40,
              dataRowMinHeight: 40,
              dataRowMaxHeight: 56,
              columns: [
                const DataColumn(label: Text('Datum')),
                const DataColumn(label: Text('Anlass')),
                const DataColumn(label: Text('km'), numeric: true),
                for (final f in fahrzeuge)
                  DataColumn(
                    label: Text('${f['kennzeichen']}'),
                    numeric: true,
                  ),
                const DataColumn(label: Text('Betrag'), numeric: true),
              ],
              rows: [
                for (final t in fahrten)
                  DataRow(
                    // Antippen korrigiert die Fahrt, solange die Anlage
                    // offen ist. Nach der Freigabe passiert nichts.
                    onSelectChanged: gesperrt
                        ? null
                        : (_) => _fahrtBearbeiten(context, ref, t),
                    cells: [
                      DataCell(Text(_datumText(t['fahrt_datum']))),
                      DataCell(
                        ConstrainedBox(
                          constraints: const BoxConstraints(maxWidth: 180),
                          child: Text(
                            '${t['anlass'] ?? ''}',
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ),
                      DataCell(Text(_kmText(t['kilometer']))),
                      for (final f in fahrzeuge)
                        DataCell(
                          Text(
                            f['id'] == t['pkw_id']
                                ? _satzText(t['satz_je_km'])
                                : '',
                          ),
                        ),
                      DataCell(
                        Text(
                          t['betrag'] == null
                              ? '—'
                              : Formatters.euro(_zahl(t['betrag'])),
                        ),
                      ),
                    ],
                  ),
              ],
            ),
          ),
        const SizedBox(height: AppSpacing.s3),
        AppCard(
          color: AppColors.surfaceAlt,
          child: Row(
            children: [
              Expanded(
                child: Text(
                  'Nutzungseinlage $jahr',
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              Text(
                Formatters.euro(nutzungseinlage),
                style: AppTypography.body(
                  size: 17,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
              ),
            ],
          ),
        ),
        if (ohneSatz > 0) ...[
          const SizedBox(height: AppSpacing.s2),
          Text(
            '$ohneSatz Fahrt${ohneSatz == 1 ? '' : 'en'} ohne Kilometersatz. '
            'Diese Fahrten sind in der Summe nicht enthalten, weil für das '
            'Fahrzeug Kilometerstände oder Kosten fehlen.',
            style: AppTypography.body(
              size: 12,
              color: AppColors.statusCritical,
            ),
          ),
        ],
      ],
    );
  }

  /// Eine Fahrt korrigieren oder streichen. Weich gestrichen, wie bei den
  /// Kosten: Was einmal in einer Anlage stand, verschwindet nicht spurlos.
  Future<void> _fahrtBearbeiten(
    BuildContext context,
    WidgetRef ref,
    Map<String, dynamic> zeile,
  ) async {
    var datum =
        DateTime.tryParse('${zeile['fahrt_datum']}') ?? DateTime(jahr, 1, 1);
    var pkwId = '${zeile['pkw_id']}';
    final anlass = TextEditingController(text: '${zeile['anlass'] ?? ''}');
    final km = TextEditingController(
      text: _zahl(zeile['kilometer']).toStringAsFixed(1).replaceAll('.', ','),
    );

    final wahl = await showDialog<String>(
      context: context,
      builder: (d) => StatefulBuilder(
        builder: (d2, setLocal) => AlertDialog(
          title: const Text('Fahrt korrigieren'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                OutlinedButton.icon(
                  onPressed: () async {
                    final gewaehlt = await showDatePicker(
                      context: d2,
                      initialDate: datum,
                      firstDate: DateTime(jahr, 1, 1),
                      lastDate: DateTime(jahr, 12, 31),
                    );
                    if (gewaehlt != null) setLocal(() => datum = gewaehlt);
                  },
                  icon: const Icon(Icons.event, size: 18),
                  label: Text(Formatters.date(datum)),
                ),
                TextField(
                  controller: anlass,
                  decoration:
                      const InputDecoration(labelText: 'Anlass der Fahrt'),
                ),
                TextField(
                  controller: km,
                  keyboardType:
                      const TextInputType.numberWithOptions(decimal: true),
                  decoration: const InputDecoration(
                    labelText: 'Kilometer (Hin- und Rückweg)',
                  ),
                ),
                DropdownButtonFormField<String>(
                  initialValue: pkwId,
                  decoration: const InputDecoration(labelText: 'Fahrzeug'),
                  items: [
                    for (final f in fahrzeuge)
                      DropdownMenuItem(
                        value: '${f['id']}',
                        child: Text('${f['kennzeichen']}'),
                      ),
                  ],
                  onChanged: (v) => setLocal(() => pkwId = v ?? pkwId),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(d2, 'streichen'),
              child: const Text(
                'Streichen',
                style: TextStyle(color: AppColors.statusCritical),
              ),
            ),
            TextButton(
              onPressed: () => Navigator.pop(d2, 'abbrechen'),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: () => Navigator.pop(d2, 'speichern'),
              child: const Text('Speichern'),
            ),
          ],
        ),
      ),
    );
    if (wahl == null || wahl == 'abbrechen') return;

    final client = ref.read(supabaseClientProvider);
    final id = '${zeile['id']}';
    try {
      if (wahl == 'streichen') {
        final gestrichen = {
          'deleted_at': DateTime.now().toIso8601String(),
        };
        await client.from('pkw_fahrten').update(gestrichen).eq('id', id);
      } else {
        final strecke =
            double.tryParse(km.text.trim().replaceAll(',', '.')) ?? 0;
        if (strecke <= 0 || anlass.text.trim().isEmpty) {
          if (context.mounted) {
            ScaffoldMessenger.of(context).showSnackBar(_fahrtUnvollstaendig);
          }
          return;
        }
        await client.from('pkw_fahrten').update({
          'pkw_id': pkwId,
          'fahrt_datum': datum.toIso8601String().substring(0, 10),
          'anlass': anlass.text.trim(),
          'kilometer': strecke,
          'updated_at': DateTime.now().toIso8601String(),
        }).eq('id', id);
      }
      await onAendern();
    } catch (err) {
      if (context.mounted) _meldeFehler(context, err);
    }
  }

  Future<void> _fahrtErfassen(BuildContext context, WidgetRef ref) async {
    var datum = DateTime(jahr, DateTime.now().month, DateTime.now().day);
    if (datum.year != jahr) datum = DateTime(jahr, 1, 1);
    var pkwId = '${fahrzeuge.first['id']}';
    final anlass = TextEditingController();
    final km = TextEditingController();

    final ok = await showDialog<bool>(
      context: context,
      builder: (d) => StatefulBuilder(
        builder: (d2, setLocal) => AlertDialog(
          title: const Text('Betriebliche Fahrt'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                OutlinedButton.icon(
                  onPressed: () async {
                    final gewaehlt = await showDatePicker(
                      context: d2,
                      initialDate: datum,
                      firstDate: DateTime(jahr, 1, 1),
                      lastDate: DateTime(jahr, 12, 31),
                    );
                    if (gewaehlt != null) setLocal(() => datum = gewaehlt);
                  },
                  icon: const Icon(Icons.event, size: 18),
                  label: Text(Formatters.date(datum)),
                ),
                TextField(
                  controller: anlass,
                  decoration:
                      const InputDecoration(labelText: 'Anlass der Fahrt'),
                ),
                TextField(
                  controller: km,
                  keyboardType:
                      const TextInputType.numberWithOptions(decimal: true),
                  decoration: const InputDecoration(
                    labelText: 'Kilometer (Hin- und Rückweg)',
                  ),
                ),
                DropdownButtonFormField<String>(
                  initialValue: pkwId,
                  decoration: const InputDecoration(labelText: 'Fahrzeug'),
                  items: [
                    for (final f in fahrzeuge)
                      DropdownMenuItem(
                        value: '${f['id']}',
                        child: Text('${f['kennzeichen']}'),
                      ),
                  ],
                  onChanged: (v) => setLocal(() => pkwId = v ?? pkwId),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(d2, false),
              child: const Text('Abbrechen'),
            ),
            FilledButton(
              onPressed: () => Navigator.pop(d2, true),
              child: const Text('Hinzufügen'),
            ),
          ],
        ),
      ),
    );
    if (ok != true) return;
    final strecke = double.tryParse(km.text.trim().replaceAll(',', '.')) ?? 0;
    if (strecke <= 0 || anlass.text.trim().isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          _fahrtUnvollstaendig,
        );
      }
      return;
    }
    try {
      await ref.read(supabaseClientProvider).from('pkw_fahrten').insert({
        'pkw_id': pkwId,
        'fahrt_datum': datum.toIso8601String().substring(0, 10),
        'anlass': anlass.text.trim(),
        'kilometer': strecke,
      });
      await onAendern();
    } catch (err) {
      if (context.mounted) _meldeFehler(context, err);
    }
  }
}

String _datumText(dynamic v) {
  final d = DateTime.tryParse('${v ?? ''}');
  return d == null ? '' : Formatters.date(d);
}

// ─── Unterschriften ────────────────────────────────────────────────────────

class _Unterschriften extends StatelessWidget {
  const _Unterschriften({required this.signaturen});

  final List<Map<String, dynamic>> signaturen;

  @override
  Widget build(BuildContext context) {
    final ohneBild = signaturen
        .where((s) => '${s['image_url'] ?? ''}'.isEmpty)
        .map((s) => '${s['full_name']}')
        .toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Eyebrow('Freigabe'),
        const SizedBox(height: AppSpacing.s2),
        Row(
          children: [
            for (final s in signaturen) ...[
              Expanded(
                child: AppCard(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        height: 1,
                        color: AppColors.ink,
                        margin: const EdgeInsets.only(bottom: 6, top: 28),
                      ),
                      Text(
                        '${s['full_name'] ?? ''}',
                        style: AppTypography.body(
                          size: 13,
                          weight: FontWeight.w700,
                          color: AppColors.ink,
                        ),
                      ),
                      Text(
                        '${s['role_label'] ?? ''}',
                        style: AppTypography.body(
                          size: 11,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
            ],
          ],
        ),
        if (ohneBild.isNotEmpty) ...[
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Für ${ohneBild.join(' und ')} ist noch keine Unterschrift '
            'hinterlegt. Im PDF bleibt die Linie leer, bis die Unterschrift '
            'über DocuSign geholt wurde.',
            style: AppTypography.body(
              size: 12,
              color: AppColors.statusCritical,
            ),
          ),
        ],
      ],
    );
  }
}

/// Ist diese Anlage freigegeben und damit unveränderlich?
///
/// Die Angabe kommt aus der Auswertung. Fehlt sie, wird NICHT gesperrt:
/// Durchgesetzt wird die Sperre ohnehin in der Datenbank, und eine
/// Oberfläche, die vorsorglich sperrt, nimmt dem Nutzer eine Korrektur weg,
/// die er vornehmen darf.
bool anlageIstGesperrt(Map<String, dynamic>? daten) =>
    daten?['gesperrt'] == true;

/// Kommt dieser Fehler von der Änderungssperre?
///
/// Die Datenbank wirft einen verständlichen Satz. Ihn durch ein allgemeines
/// „Fehlgeschlagen" zu ersetzen, hiesse die einzige Erklärung wegzuwerfen,
/// die der Nutzer bekommt.
bool istSperrfehler(String meldung) =>
    meldung.contains('freigegeben und unterschrieben');

/// Zeigt den Grund, wenn ein Schreibversuch abgelehnt wurde.
///
/// Die Sperre wirft aus der Datenbank einen verständlichen Satz. Ihn durch
/// ein allgemeines „Fehlgeschlagen" zu ersetzen, hiesse die einzige
/// Erklärung wegzuwerfen, die der Nutzer bekommt.
void _meldeFehler(BuildContext context, Object fehler) {
  final text = fehler.toString();
  final gesperrt = istSperrfehler(text);
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(
        gesperrt
            ? 'Diese Anlage ist freigegeben und unterschrieben. '
                'Korrekturen sind nicht mehr möglich.'
            : 'Speichern fehlgeschlagen: $text',
      ),
      duration: Duration(seconds: gesperrt ? 6 : 4),
    ),
  );
}

/// Eine einzelne Kostenposition, antippbar solange nicht freigegeben.
class _KostenZeile extends StatelessWidget {
  const _KostenZeile({
    required this.kosten,
    required this.gesperrt,
    required this.onBearbeiten,
  });

  final Map<String, dynamic> kosten;
  final bool gesperrt;
  final VoidCallback onBearbeiten;

  @override
  Widget build(BuildContext context) {
    final art =
        _kostenarten['${kosten['kostenart']}'] ?? '${kosten['kostenart']}';
    final bezeichnung = '${kosten['bezeichnung'] ?? ''}'.trim();
    final betrag = Formatters.euro(_zahl(kosten['betrag_brutto']));

    final inhalt = Padding(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  art,
                  style: AppTypography.body(
                    size: 13,
                    color: AppColors.textDefault,
                  ),
                ),
                if (bezeichnung.isNotEmpty)
                  Text(
                    bezeichnung,
                    style: AppTypography.body(
                      size: 11,
                      color: AppColors.textMuted,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
              ],
            ),
          ),
          Text(
            betrag,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w600,
              color: AppColors.ink,
            ),
          ),
          if (!gesperrt) ...[
            const SizedBox(width: 4),
            const Icon(
              Icons.edit_outlined,
              size: 16,
              color: AppColors.textMuted,
            ),
          ],
        ],
      ),
    );

    if (gesperrt) return inhalt;
    return Semantics(
      button: true,
      label: '$art $betrag korrigieren',
      child: InkWell(onTap: onBearbeiten, child: inhalt),
    );
  }
}

/// Der Hinweis, dass diese Anlage abgeschlossen ist.
class _Sperrhinweis extends StatelessWidget {
  const _Sperrhinweis({required this.jahr, required this.freigabe});

  final int jahr;
  final Map<String, dynamic>? freigabe;

  @override
  Widget build(BuildContext context) {
    final am = DateTime.tryParse('${freigabe?['freigegeben_am'] ?? ''}');
    final namen = ((freigabe?['unterzeichner'] as List?) ?? const [])
        .map((e) => '${(e as Map)['name'] ?? ''}')
        .where((n) => n.isNotEmpty)
        .toList();

    return AppCard(
      color: AppColors.surfaceAlt,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.lock_outline, color: AppColors.statusPositive),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Freigegeben und unterschrieben',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  'Die Anlage $jahr ist abgeschlossen'
                  '${am == null ? '' : ' seit ${Formatters.date(am)}'}'
                  '${namen.isEmpty ? '' : ', unterschrieben von ${namen.join(' und ')}'}'
                  '. Korrekturen sind nicht mehr möglich, weder hier noch '
                  'über einen anderen Weg.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textDefault,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  'Ist etwas falsch, gehört die Berichtigung in eine neue '
                  'Anlage. Ein unterschriebenes Dokument nachträglich zu '
                  'ändern, wäre keine Korrektur.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ─── Kleinteile ────────────────────────────────────────────────────────────

class _Zeile extends StatelessWidget {
  const _Zeile({required this.links, required this.rechts, this.fett = false});

  final String links;
  final String rechts;
  final bool fett;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3),
      child: Row(
        children: [
          Expanded(
            child: Text(
              links,
              style: AppTypography.body(
                size: 13,
                weight: fett ? FontWeight.w700 : FontWeight.w400,
                color: fett ? AppColors.ink : AppColors.textDefault,
              ),
            ),
          ),
          Text(
            rechts,
            style: AppTypography.body(
              size: 13,
              weight: fett ? FontWeight.w800 : FontWeight.w600,
              color: AppColors.ink,
            ),
          ),
        ],
      ),
    );
  }
}

class _Chip extends StatelessWidget {
  const _Chip({required this.text, required this.hinweis});

  final String text;
  final String hinweis;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: AppColors.brandLight,
        borderRadius: BorderRadius.circular(AppRadii.pill),
        border: Border.all(color: AppColors.brand.withValues(alpha: 0.5)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Text(
            text,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w800,
              color: AppColors.brandText,
            ),
          ),
          Text(
            hinweis,
            style: AppTypography.body(size: 9, color: AppColors.brandText),
          ),
        ],
      ),
    );
  }
}

class _Hinweis extends StatelessWidget {
  const _Hinweis({
    required this.text,
    required this.farbe,
    required this.icon,
  });

  final String text;
  final Color farbe;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      color: AppColors.surfaceAlt,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: farbe),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Text(
              text,
              style: AppTypography.body(size: 14, color: AppColors.ink),
            ),
          ),
        ],
      ),
    );
  }
}
