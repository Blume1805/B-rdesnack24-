import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bs24_kern/core/theme/app_tokens.dart';
import 'package:bs24_kern/core/theme/app_typography.dart';
import 'package:bs24_kern/core/utils/formatters.dart';
import 'package:bs24_kern/core/widgets/design_system/design_system.dart';
import 'package:bs24_gesellschafter/features/admin/presentation/controllers/admin_providers.dart';
import 'package:bs24_gesellschafter/features/admin/presentation/widgets/admin_shell.dart';

/// Prüft, ob ein Kombiangebot so gespeichert werden darf. Gibt den
/// Fehlertext zurück oder `null`, wenn alles stimmt.
///
/// Bewusst eine reine Funktion und keine Methode im Formular: Dieselben
/// beiden Regeln setzt der Server in `bundle_save` noch einmal durch, und
/// eine Regel, die an zwei Stellen gilt, muss an mindestens einer davon
/// prüfbar sein, ohne dass eine Datenbank läuft.
///
/// Die zweite Regel ist die wichtigere. Ein Kombipreis, der nicht unter der
/// Summe der Einzelpreise liegt, erzeugt beim Kunden einen
/// durchgestrichenen Preis ohne Anlass — eine irreführende Angabe (§ 5
/// UWG). Die Kundenansicht blendet den durchgestrichenen Preis in dem Fall
/// zwar aus, aber der Fehler gehört hier bemerkt und nicht dort verdeckt.
String? bundleFehler({
  required int positionen,
  required double einzelSumme,
  required double kombiPreis,
}) {
  if (positionen < 2) {
    return 'Ein Kombiangebot braucht mindestens zwei Produkte. '
        'Sonst gibt es nichts zu kombinieren.';
  }
  if (kombiPreis <= 0) {
    return 'Bitte einen Preis größer als null eingeben.';
  }
  if (kombiPreis >= einzelSumme) {
    return 'Der Kombipreis liegt nicht unter der Summe der Einzelpreise '
        '(${Formatters.euro(einzelSumme)}). Ein durchgestrichener Preis '
        'wäre dann eine Falschaussage.';
  }
  return null;
}

/// Kombiangebote anlegen und pflegen.
///
/// Die Maske rechnet **nicht** nach. Was ein Bundle je Position kostet,
/// entscheidet `public.bundle_split()` auf dem Server — die Aufteilung geht
/// über zwei Steuersätze und ist buchungsrelevant, also darf sie nur an
/// einer Stelle stehen. Hier steht die Summe der Einzelpreise neben dem
/// Kombipreis, damit sichtbar ist, was der Kunde spart.
class BundlesScreen extends ConsumerWidget {
  const BundlesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bundles = ref.watch(bundlesAdminProvider);

    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        onPressed: () => _bearbeiten(context, ref, null),
        icon: const Icon(Icons.add),
        label: const Text('Neues Kombiangebot'),
      ),
      body: AdminScaffold(
        title: 'Kombiangebote',
        eyebrow: 'Angebote',
        headline: 'Zwei Produkte, ein Preis',
        intro: 'Der Kombipreis wird beim Kauf anteilig auf die Positionen '
            'verteilt, damit Umsatzsteuer und Spendenanteil je Produkt '
            'stimmen. Die Aufteilung macht der Server.',
        onRefresh: () async => ref.invalidate(bundlesAdminProvider),
        child: bundles.when(
          loading: () => const Padding(
            padding: EdgeInsets.symmetric(vertical: AppSpacing.s10),
            child: Center(
              child: CircularProgressIndicator(color: AppColors.brand),
            ),
          ),
          error: (e, _) => AdminErrorCard(error: e),
          data: (list) {
            if (list.isEmpty) {
              return const AdminEmptyCard(
                title: 'Noch kein Kombiangebot angelegt',
                body: 'Ein Kombiangebot fasst mindestens zwei Produkte zu '
                    'einem Preis zusammen. In der Kunden-App erscheint es '
                    'als Coupon mit beiden Produktbildern.',
              );
            }
            return Column(
              children: [
                for (final b in list) ...[
                  _BundleKarte(
                    daten: b,
                    onBearbeiten: () => _bearbeiten(context, ref, b),
                    onZurueckziehen: () => _zurueckziehen(context, ref, b),
                  ),
                  const SizedBox(height: AppSpacing.s3),
                ],
                const SizedBox(height: AppSpacing.s16),
              ],
            );
          },
        ),
      ),
    );
  }

  Future<void> _bearbeiten(
    BuildContext context,
    WidgetRef ref,
    Map<String, dynamic>? vorhanden,
  ) async {
    final gespeichert = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _BundleFormular(vorhanden: vorhanden),
    );
    if (gespeichert ?? false) ref.invalidate(bundlesAdminProvider);
  }

  Future<void> _zurueckziehen(
    BuildContext context,
    WidgetRef ref,
    Map<String, dynamic> b,
  ) async {
    // Vor dem Dialog holen: danach ist der Kontext über einen await hinweg
    // benutzt, und das Blatt kann in der Zwischenzeit weg sein.
    final messenger = ScaffoldMessenger.of(context);
    final ok = await showDialog<bool>(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: const Text('Kombiangebot zurückziehen?'),
        content: Text(
          '„${b['title']}" erscheint danach nicht mehr in der Kunden-App. '
          'Bereits getätigte Käufe behalten ihren Bezug darauf — sonst '
          'ließe sich der abweichende Preis später nicht mehr erklären.',
          style: AppTypography.body(size: 13),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(dialogContext).pop(false),
            child: const Text('Abbrechen'),
          ),
          TextButton(
            onPressed: () => Navigator.of(dialogContext).pop(true),
            child: Text(
              'Zurückziehen',
              style: AppTypography.body(
                size: 14,
                weight: FontWeight.w800,
                color: AppColors.statusCritical,
              ),
            ),
          ),
        ],
      ),
    );
    if (!(ok ?? false)) return;

    try {
      await ref.read(adminDataSourceProvider).deleteBundle(b['id'] as String);
      ref.invalidate(bundlesAdminProvider);
      messenger.showSnackBar(
        const SnackBar(content: Text('Kombiangebot zurückgezogen.')),
      );
    } catch (e) {
      messenger.showSnackBar(SnackBar(content: Text('$e')));
    }
  }
}

/// Ein Kombiangebot in der Liste: Positionen, beide Preise, Zustand.
class _BundleKarte extends StatelessWidget {
  const _BundleKarte({
    required this.daten,
    required this.onBearbeiten,
    required this.onZurueckziehen,
  });

  final Map<String, dynamic> daten;
  final VoidCallback onBearbeiten;
  final VoidCallback onZurueckziehen;

  double _zahl(dynamic v) => v == null ? 0 : double.tryParse('$v') ?? 0;

  @override
  Widget build(BuildContext context) {
    final preis = _zahl(daten['price_gross']);
    final regulaer = _zahl(daten['regular_gross']);
    final ersparnis = regulaer - preis;
    final positionen = (daten['items'] as List?) ?? const [];
    final status = daten['status'] as String? ?? 'active';

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  daten['title'] as String? ?? '',
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              AdminStatusChip(
                label: switch (status) {
                  'active' => 'Aktiv',
                  'inactive' => 'Pausiert',
                  _ => 'Archiviert',
                },
                tone:
                    status == 'active' ? AdminTone.positive : AdminTone.neutral,
              ),
            ],
          ),
          if (daten['code'] != null) ...[
            const SizedBox(height: 2),
            Text(
              daten['code'] as String,
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
          ],
          const SizedBox(height: AppSpacing.s3),
          for (final e in positionen)
            Padding(
              padding: const EdgeInsets.only(bottom: 4),
              child: Row(
                children: [
                  const Icon(
                    Icons.chevron_right,
                    size: 14,
                    color: AppColors.brand,
                  ),
                  const SizedBox(width: 4),
                  Expanded(
                    child: Text(
                      '${(e as Map)['quantity']} × ${e['name']}',
                      style: AppTypography.body(size: 13),
                    ),
                  ),
                  Text(
                    '${Formatters.euro(_zahl(e['regular_gross']))}'
                    ' → ${Formatters.euro(_zahl(e['bundle_gross']))}',
                    style: AppTypography.body(
                      size: 12,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
              ),
            ),
          const Divider(height: AppSpacing.s5),
          AdminValueRow(
            label: 'Einzeln zusammen',
            value: Formatters.euro(regulaer),
          ),
          AdminValueRow(
            label: 'Kombipreis',
            value: Formatters.euro(preis),
            strong: true,
          ),
          AdminValueRow(
            label: 'Ersparnis für den Kunden',
            value: Formatters.euro(ersparnis),
          ),
          if (daten['valid_to'] != null) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Gültig bis ${daten['valid_to']}',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
          ],
          const SizedBox(height: AppSpacing.s3),
          Row(
            children: [
              TextButton.icon(
                onPressed: onBearbeiten,
                icon: const Icon(Icons.edit_outlined, size: 18),
                label: const Text('Bearbeiten'),
              ),
              const Spacer(),
              TextButton(
                onPressed: onZurueckziehen,
                child: Text(
                  'Zurückziehen',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w700,
                    color: AppColors.statusCritical,
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

/// Formular für ein Kombiangebot.
///
/// Die Reihenfolge der Positionen ist die Reihenfolge in der Kunden-App —
/// erst das Bild der ersten Position, dann das Pluszeichen, dann die
/// zweite. Deshalb lässt sie sich hier verschieben.
///
/// Zwei Regeln setzt der Server durch, und zwar auch dann, wenn jemand am
/// Formular vorbei aufruft: mindestens zwei verschiedene Produkte, und der
/// Kombipreis muss unter der Summe der Einzelpreise liegen. Das Formular
/// zeigt beides vorher an, damit niemand erst beim Speichern erfährt, dass
/// es nicht geht.
class _BundleFormular extends ConsumerStatefulWidget {
  const _BundleFormular({this.vorhanden});

  final Map<String, dynamic>? vorhanden;

  @override
  ConsumerState<_BundleFormular> createState() => _BundleFormularState();
}

class _BundleFormularState extends ConsumerState<_BundleFormular> {
  final _formKey = GlobalKey<FormState>();
  late final TextEditingController _titel;
  late final TextEditingController _code;
  late final TextEditingController _beschreibung;
  late final TextEditingController _preis;

  /// Positionen in Anzeigereihenfolge: Produkt-Id und Menge.
  final _positionen = <({String id, int menge})>[];

  DateTime? _gueltigBis;
  String _status = 'active';
  bool _speichert = false;
  String? _fehler;

  @override
  void initState() {
    super.initState();
    final v = widget.vorhanden;
    _titel = TextEditingController(text: v?['title'] as String? ?? '');
    _code = TextEditingController(text: v?['code'] as String? ?? '');
    _beschreibung =
        TextEditingController(text: v?['description'] as String? ?? '');
    _preis = TextEditingController(
      text: v == null
          ? ''
          : (double.tryParse('${v['price_gross']}') ?? 0)
              .toStringAsFixed(2)
              .replaceAll('.', ','),
    );
    _status = v?['status'] as String? ?? 'active';
    if (v?['valid_to'] != null) {
      _gueltigBis = DateTime.tryParse(v!['valid_to'] as String);
    }
    for (final e in (v?['items'] as List?) ?? const []) {
      final m = e as Map;
      final id = m['product_id'] as String;
      final menge = (m['quantity'] as num?)?.toInt() ?? 1;
      _positionen.add((id: id, menge: menge));
    }
  }

  @override
  void dispose() {
    _titel.dispose();
    _code.dispose();
    _beschreibung.dispose();
    _preis.dispose();
    super.dispose();
  }

  double? get _preisWert =>
      double.tryParse(_preis.text.trim().replaceAll(',', '.'));

  double _einzelSumme(List<Map<String, dynamic>> produkte) {
    var summe = 0.0;
    for (final pos in _positionen) {
      final p = produkte.where((e) => e['id'] == pos.id).firstOrNull;
      if (p == null) continue;
      summe += (double.tryParse('${p['gross']}') ?? 0) * pos.menge;
    }
    return summe;
  }

  @override
  Widget build(BuildContext context) {
    final produkte = ref.watch(bundleProductsProvider);

    return DraggableScrollableSheet(
      initialChildSize: 0.92,
      minChildSize: 0.5,
      maxChildSize: 0.95,
      expand: false,
      builder: (context, scrollController) => Container(
        decoration: const BoxDecoration(
          color: AppColors.surfaceCard,
          borderRadius:
              BorderRadius.vertical(top: Radius.circular(AppRadii.xl)),
        ),
        child: produkte.when(
          loading: () => const Center(
            child: CircularProgressIndicator(color: AppColors.brand),
          ),
          error: (e, _) => Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: AdminErrorCard(error: e),
          ),
          data: (liste) => Form(
            key: _formKey,
            child: ListView(
              controller: scrollController,
              padding: const EdgeInsets.all(AppSpacing.s5),
              children: [
                Text(
                  widget.vorhanden == null
                      ? 'Neues Kombiangebot'
                      : 'Kombiangebot bearbeiten',
                  style: AppTypography.display(
                    size: 20,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: AppSpacing.s4),
                TextFormField(
                  controller: _titel,
                  decoration: const InputDecoration(
                    labelText: 'Titel',
                    hintText: 'Cola + Popcorn',
                  ),
                  validator: (v) => (v == null || v.trim().isEmpty)
                      ? 'Bitte einen Titel eingeben.'
                      : null,
                ),
                const SizedBox(height: AppSpacing.s3),
                TextFormField(
                  controller: _beschreibung,
                  decoration: const InputDecoration(
                    labelText: 'Beschreibung (freiwillig)',
                    hintText: 'Der Feierabend-Klassiker.',
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                TextFormField(
                  controller: _code,
                  decoration: const InputDecoration(
                    labelText: 'Kurzzeichen (freiwillig)',
                    hintText: 'KINO',
                  ),
                ),
                const SizedBox(height: AppSpacing.s5),
                const Eyebrow('Produkte im Angebot'),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Die Reihenfolge hier ist die Reihenfolge beim Kunden: '
                  'erst das eine Bild, dann das Pluszeichen, dann das andere.',
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: AppSpacing.s3),
                _Positionen(
                  positionen: _positionen,
                  produkte: liste,
                  onGeaendert: () => setState(() {}),
                ),
                const SizedBox(height: AppSpacing.s3),
                OutlinedButton.icon(
                  onPressed: () => _produktWaehlen(liste),
                  icon: const Icon(Icons.add),
                  label: const Text('Produkt hinzufügen'),
                ),
                const SizedBox(height: AppSpacing.s5),
                const Eyebrow('Preis'),
                const SizedBox(height: AppSpacing.s2),
                TextFormField(
                  controller: _preis,
                  keyboardType:
                      const TextInputType.numberWithOptions(decimal: true),
                  decoration: const InputDecoration(
                    labelText: 'Kombipreis brutto',
                    suffixText: '€',
                  ),
                  onChanged: (_) => setState(() {}),
                  validator: (_) {
                    final w = _preisWert;
                    if (w == null || w <= 0) {
                      return 'Bitte einen Preis größer als null eingeben.';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: AppSpacing.s3),
                _Preisvergleich(
                  einzeln: _einzelSumme(liste),
                  kombi: _preisWert,
                  positionen: _positionen.length,
                ),
                const SizedBox(height: AppSpacing.s5),
                const Eyebrow('Laufzeit und Zustand'),
                const SizedBox(height: AppSpacing.s2),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        onPressed: _datumWaehlen,
                        icon: const Icon(Icons.event_outlined, size: 18),
                        label: Text(
                          _gueltigBis == null
                              ? 'Ohne Enddatum'
                              : 'Bis ${Formatters.date(_gueltigBis!)}',
                        ),
                      ),
                    ),
                    if (_gueltigBis != null)
                      IconButton(
                        onPressed: () => setState(() => _gueltigBis = null),
                        icon: const Icon(Icons.clear),
                        tooltip: 'Enddatum entfernen',
                      ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s3),
                SegmentedButton<String>(
                  segments: const [
                    ButtonSegment(value: 'active', label: Text('Aktiv')),
                    ButtonSegment(value: 'inactive', label: Text('Pausiert')),
                  ],
                  selected: {_status == 'archived' ? 'inactive' : _status},
                  onSelectionChanged: (s) => setState(() => _status = s.first),
                ),
                if (_fehler != null) ...[
                  const SizedBox(height: AppSpacing.s4),
                  AppCard(
                    color: const Color(0xFFF7DBDB),
                    borderColor: AppColors.statusCritical,
                    child: Text(
                      _fehler!,
                      style: AppTypography.body(
                        size: 13,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                ],
                const SizedBox(height: AppSpacing.s5),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.brand,
                      foregroundColor: AppColors.ink,
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    onPressed: _speichert ? null : () => _speichern(liste),
                    child: Text(
                      _speichert ? 'Speichert …' : 'Speichern',
                      style: AppTypography.body(
                        size: 15,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: AppSpacing.s6),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _datumWaehlen() async {
    final heute = DateTime.now();
    final gewaehlt = await showDatePicker(
      context: context,
      initialDate: _gueltigBis ?? heute.add(const Duration(days: 30)),
      firstDate: heute,
      lastDate: DateTime(heute.year + 3),
    );
    if (gewaehlt != null) setState(() => _gueltigBis = gewaehlt);
  }

  Future<void> _produktWaehlen(List<Map<String, dynamic>> produkte) async {
    final schon = _positionen.map((e) => e.id).toSet();
    final frei = produkte.where((p) => !schon.contains(p['id'])).toList();
    if (frei.isEmpty) return;

    final gewaehlt = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _ProduktListe(produkte: frei),
    );
    if (gewaehlt != null) {
      setState(() => _positionen.add((id: gewaehlt, menge: 1)));
    }
  }

  Future<void> _speichern(List<Map<String, dynamic>> produkte) async {
    setState(() => _fehler = null);
    if (!(_formKey.currentState?.validate() ?? false)) return;

    final einzeln = _einzelSumme(produkte);
    final kombi = _preisWert ?? 0;
    final fehler = bundleFehler(
      positionen: _positionen.length,
      einzelSumme: einzeln,
      kombiPreis: kombi,
    );
    if (fehler != null) {
      setState(() => _fehler = fehler);
      return;
    }

    setState(() => _speichert = true);
    final navigator = Navigator.of(context);
    try {
      await ref.read(adminDataSourceProvider).saveBundle(
        id: widget.vorhanden?['id'] as String?,
        title: _titel.text,
        priceGross: kombi,
        code: _code.text.trim().isEmpty ? null : _code.text.trim(),
        description: _beschreibung.text.trim().isEmpty
            ? null
            : _beschreibung.text.trim(),
        validTo: _gueltigBis,
        status: _status,
        items: [
          for (final p in _positionen)
            {'product_id': p.id, 'quantity': p.menge},
        ],
      );
      navigator.pop(true);
    } catch (e) {
      setState(() {
        _speichert = false;
        _fehler = '$e';
      });
    }
  }
}

/// Die gewählten Positionen mit Menge und Reihenfolge.
class _Positionen extends StatelessWidget {
  const _Positionen({
    required this.positionen,
    required this.produkte,
    required this.onGeaendert,
  });

  final List<({String id, int menge})> positionen;
  final List<Map<String, dynamic>> produkte;
  final VoidCallback onGeaendert;

  @override
  Widget build(BuildContext context) {
    if (positionen.isEmpty) {
      return AppCard(
        color: AppColors.surfaceAlt,
        child: Text(
          'Noch kein Produkt gewählt.',
          style: AppTypography.body(size: 13, color: AppColors.textMuted),
        ),
      );
    }

    return Column(
      children: [
        for (var i = 0; i < positionen.length; i++)
          Builder(
            builder: (context) {
              final pos = positionen[i];
              final p = produkte.where((e) => e['id'] == pos.id).firstOrNull;
              final preis = double.tryParse('${p?['gross']}') ?? 0;
              return Padding(
                padding: const EdgeInsets.only(bottom: AppSpacing.s2),
                child: AppCard(
                  padding: const EdgeInsets.symmetric(
                    horizontal: AppSpacing.s3,
                    vertical: AppSpacing.s2,
                  ),
                  color: AppColors.surfaceAlt,
                  child: Row(
                    children: [
                      Text(
                        '${i + 1}.',
                        style: AppTypography.body(
                          size: 13,
                          weight: FontWeight.w800,
                          color: AppColors.brandText,
                        ),
                      ),
                      const SizedBox(width: AppSpacing.s2),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              p?['name'] as String? ?? 'Unbekannt',
                              style: AppTypography.body(
                                size: 13,
                                weight: FontWeight.w700,
                                color: AppColors.ink,
                              ),
                            ),
                            Text(
                              '${Formatters.euro(preis)} · ${p?['category'] ?? ''}',
                              style: AppTypography.body(
                                size: 11,
                                color: AppColors.textMuted,
                              ),
                            ),
                          ],
                        ),
                      ),
                      IconButton(
                        tooltip: 'Weniger',
                        onPressed: pos.menge <= 1
                            ? null
                            : () {
                                positionen[i] =
                                    (id: pos.id, menge: pos.menge - 1);
                                onGeaendert();
                              },
                        icon: const Icon(Icons.remove, size: 18),
                      ),
                      Text(
                        '${pos.menge}',
                        style: AppTypography.body(
                          size: 14,
                          weight: FontWeight.w800,
                          color: AppColors.ink,
                        ),
                      ),
                      IconButton(
                        tooltip: 'Mehr',
                        onPressed: () {
                          positionen[i] = (id: pos.id, menge: pos.menge + 1);
                          onGeaendert();
                        },
                        icon: const Icon(Icons.add, size: 18),
                      ),
                      IconButton(
                        tooltip: 'Nach oben',
                        onPressed: i == 0
                            ? null
                            : () {
                                final w = positionen.removeAt(i);
                                positionen.insert(i - 1, w);
                                onGeaendert();
                              },
                        icon: const Icon(Icons.arrow_upward, size: 18),
                      ),
                      IconButton(
                        tooltip: 'Entfernen',
                        onPressed: () {
                          positionen.removeAt(i);
                          onGeaendert();
                        },
                        icon: const Icon(Icons.close, size: 18),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
      ],
    );
  }
}

/// Einzelsumme gegen Kombipreis, live beim Tippen.
class _Preisvergleich extends StatelessWidget {
  const _Preisvergleich({
    required this.einzeln,
    required this.kombi,
    required this.positionen,
  });

  final double einzeln;
  final double? kombi;
  final int positionen;

  @override
  Widget build(BuildContext context) {
    if (positionen < 2 || einzeln <= 0) return const SizedBox.shrink();
    final k = kombi;
    final spart = k != null && k > 0 && k < einzeln;

    return AppCard(
      color: AppColors.surfaceAlt,
      child: Column(
        children: [
          AdminValueRow(
            label: 'Einzeln zusammen',
            value: Formatters.euro(einzeln),
          ),
          if (k != null && k > 0)
            AdminValueRow(
              label: spart ? 'Ersparnis für den Kunden' : 'Kein Vorteil',
              value: spart
                  ? '${Formatters.euro(einzeln - k)} '
                      '(${((einzeln - k) / einzeln * 100).toStringAsFixed(0)} %)'
                  : 'Der Kombipreis liegt nicht darunter',
              strong: true,
            ),
        ],
      ),
    );
  }
}

/// Produktauswahl.
class _ProduktListe extends StatelessWidget {
  const _ProduktListe({required this.produkte});

  final List<Map<String, dynamic>> produkte;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ListView.builder(
        shrinkWrap: true,
        itemCount: produkte.length,
        itemBuilder: (context, i) {
          final p = produkte[i];
          final nurBundle = p['coupon_eligibility'] == 'bundle_only';
          return ListTile(
            title: Text(p['name'] as String? ?? ''),
            subtitle: Text(
              '${p['category'] ?? ''} · '
              '${Formatters.euro(double.tryParse('${p['gross']}') ?? 0)}'
              '${nurBundle ? ' · nur im Kombiangebot' : ''}',
            ),
            onTap: () => Navigator.of(context).pop(p['id'] as String),
          );
        },
      ),
    );
  }
}
