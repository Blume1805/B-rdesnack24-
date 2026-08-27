import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import 'firmenkunden_screen.dart' show UmsatzBetrag, zuDouble;

/// Werbeflächen an unseren Automaten: Inventar, Belegung, Verträge.
///
/// Schritt 5 des B2B-Auftrags, Innensicht. Der Bildschirm zeigt und ändert,
/// gerechnet wird nichts hier: Ob eine Fläche frei ist, sagt
/// `advertising_overview` zum Stichtag — aus den Verträgen, nicht aus einem
/// gespeicherten Kennzeichen. Zwei Stellen, die „frei" verschieden auslegen,
/// wären zwei Wahrheiten über dieselbe Fläche.
///
/// Auch die Doppelbelegung verhindert die Datenbank (Ausschluss über
/// `space_id` und Laufzeit, Migration 0145), nicht diese Oberfläche. Zwei
/// gleichzeitig geöffnete Formulare sehen beide eine freie Fläche; erst das
/// Speichern entscheidet. Die Fehlermeldung dazu steht in
/// [werbungFehlertext] in ganzen Sätzen.
class WerbeflaechenScreen extends ConsumerStatefulWidget {
  const WerbeflaechenScreen({super.key});

  @override
  ConsumerState<WerbeflaechenScreen> createState() =>
      _WerbeflaechenScreenState();
}

class _WerbeflaechenScreenState extends ConsumerState<WerbeflaechenScreen> {
  Map<String, dynamic>? _daten;
  List<Map<String, dynamic>> _automaten = const [];
  List<Map<String, dynamic>> _firmen = const [];
  bool _laedt = false;
  String? _fehler;
  DateTime _stichtag = DateTime.now();

  @override
  void initState() {
    super.initState();
    _laden();
  }

  Future<void> _laden() async {
    setState(() {
      _laedt = true;
      _fehler = null;
    });
    try {
      final client = ref.read(supabaseClientProvider);
      final ergebnis = await client.rpc(
        'advertising_overview',
        params: {'p_stichtag': _iso(_stichtag)},
      );
      _daten = Map<String, dynamic>.from(ergebnis as Map);
      // Die beiden Auswahllisten der Formulare. Sie kommen direkt aus den
      // Tabellen, weil beide ohnehin über die Zeilensicherheit gehen und
      // eine eigene Funktion nichts hinzufügen würde.
      final autos = await client
          .from('machines')
          .select('id, code, name')
          .isFilter('deleted_at', null)
          .order('code');
      _automaten = (autos as List).cast<Map<String, dynamic>>();
      final firmen = await client
          .from('businesses')
          .select('id, name')
          .isFilter('deleted_at', null)
          .order('name');
      _firmen = (firmen as List).cast<Map<String, dynamic>>();
    } catch (e) {
      _fehler = e.toString();
      _daten = null;
    } finally {
      if (mounted) setState(() => _laedt = false);
    }
  }

  static String _iso(DateTime d) =>
      '${d.year.toString().padLeft(4, '0')}-'
      '${d.month.toString().padLeft(2, '0')}-'
      '${d.day.toString().padLeft(2, '0')}';

  Map<String, dynamic> get _kennzahlen =>
      Map<String, dynamic>.from((_daten?['kennzahlen'] as Map?) ?? const {});

  List<Map<String, dynamic>> get _flaechen =>
      ((_daten?['flaechen'] as List?) ?? const [])
          .cast<Map<String, dynamic>>();

  List<Map<String, dynamic>> get _jeAutomat =>
      ((_daten?['je_automat'] as List?) ?? const [])
          .cast<Map<String, dynamic>>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Werbeflächen')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _automaten.isEmpty ? null : () => _flaecheBearbeiten(null),
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        icon: const Icon(Icons.add_photo_alternate_outlined),
        label: const Text('Fläche anlegen'),
      ),
      body: RefreshIndicator(
        onRefresh: _laden,
        color: AppColors.brand,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s10 + 40,
          ),
          children: [
            const SectionHeader(
              eyebrow: 'Vorgänge & Prozesse',
              title: 'Werbeflächen',
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Vermietbare Flächen an unseren Automaten. Ob eine Fläche frei '
              'ist, entscheidet der Stichtag — ein Vertrag, der erst nächsten '
              'Monat beginnt, macht sie heute nicht belegt.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            _StichtagWahl(
              stichtag: _stichtag,
              onWahl: (d) {
                setState(() => _stichtag = d);
                _laden();
              },
            ),
            const SizedBox(height: AppSpacing.s4),
            if (_laedt)
              const Padding(
                padding: EdgeInsets.all(48),
                child: Center(
                  child: CircularProgressIndicator(color: AppColors.brand),
                ),
              )
            else if (_fehler != null)
              Text(
                'Nicht geladen: ${werbungFehlertext(_fehler!)}',
                style: AppTypography.body(
                  size: 13,
                  color: AppColors.statusCritical,
                ),
              )
            else ...[
              WerbeflaechenKennzahlen(werte: _kennzahlen),
              if (_jeAutomat.isNotEmpty) ...[
                const SizedBox(height: AppSpacing.s5),
                const _Abschnitt('Je Automat'),
                for (final a in _jeAutomat) ...[
                  _AutomatZeile(zeile: a),
                  const SizedBox(height: AppSpacing.s2),
                ],
              ],
              const SizedBox(height: AppSpacing.s5),
              const _Abschnitt('Flächen'),
              if (_flaechen.isEmpty)
                const _Leerzeile(
                  'Noch keine Fläche erfasst. Eine Fläche gehört zu einem '
                  'Automaten und einer Position an ihm — front, Seite, oben, '
                  'Rückseite oder Display.',
                )
              else
                for (final f in _flaechen) ...[
                  WerbeflaecheKarte(
                    flaeche: f,
                    onTap: () => _flaecheOeffnen(f),
                  ),
                  const SizedBox(height: AppSpacing.s2),
                ],
            ],
          ],
        ),
      ),
    );
  }

  // ── Aufrufe ────────────────────────────────────────────────────────────

  Future<void> _rufe(
    String fn,
    Map<String, dynamic> params,
    String erfolg,
  ) async {
    try {
      final client = ref.read(supabaseClientProvider);
      await client.rpc(fn, params: params);
      await _laden();
      if (!mounted) return;
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text(erfolg)));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text(werbungFehlertext(e)),
        ),
      );
    }
  }

  Future<void> _flaecheBearbeiten(Map<String, dynamic>? flaeche) async {
    final werte = await showModalBottomSheet<Map<String, dynamic>>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (_) => _FlaecheFormular(
        automaten: _automaten,
        vorgabe: flaeche,
      ),
    );
    if (werte == null || !mounted) return;
    await _rufe('advertising_space_set', werte, 'Fläche gespeichert');
  }

  Future<void> _flaecheOeffnen(Map<String, dynamic> flaeche) async {
    final wahl = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (_) => _FlaecheMenue(flaeche: flaeche),
    );
    if (wahl == null || !mounted) return;

    switch (wahl) {
      case 'aendern':
        await _flaecheBearbeiten(flaeche);
      case 'entfernen':
        await _flaecheEntfernen(flaeche);
      case 'vertrag':
        await _vertragBearbeiten(flaeche);
      case 'motiv':
        await _motivFreigeben(flaeche);
      case 'status':
        await _vertragStatus(flaeche);
    }
  }

  Future<void> _flaecheEntfernen(Map<String, dynamic> flaeche) async {
    final ja = await showDialog<bool>(
      context: context,
      builder: (d) => AlertDialog(
        title: const Text('Fläche entfernen'),
        content: Text(
          'Die Fläche „${_bezeichnung(flaeche)}" wird aus dem Inventar '
          'genommen. Bereits geschlossene Verträge bleiben erhalten — '
          'gelöscht wird nichts, die Fläche verschwindet nur aus der Liste.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(d, false),
            child: const Text('Abbrechen'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(d, true),
            child: const Text('Entfernen'),
          ),
        ],
      ),
    );
    if (ja != true || !mounted) return;
    await _rufe(
      'advertising_space_remove',
      {'p_space': flaeche['id']},
      'Fläche entfernt',
    );
  }

  Future<void> _vertragBearbeiten(Map<String, dynamic> flaeche) async {
    if (_firmen.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Ein Werbevertrag braucht einen Mieter. Lege das Unternehmen '
            'zuerst unter Firmenkunden an.',
          ),
        ),
      );
      return;
    }
    final vertrag = flaeche['vertrag'] == null
        ? null
        : Map<String, dynamic>.from(flaeche['vertrag'] as Map);
    final werte = await showModalBottomSheet<Map<String, dynamic>>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (_) => _VertragFormular(
        firmen: _firmen,
        flaeche: flaeche,
        vorgabe: vertrag,
      ),
    );
    if (werte == null || !mounted) return;
    await _rufe('advertising_contract_set', werte, 'Vertrag gespeichert');
  }

  Future<void> _motivFreigeben(Map<String, dynamic> flaeche) async {
    final vertrag = flaeche['vertrag'] as Map?;
    if (vertrag == null) return;
    final wer = await showDialog<String>(
      context: context,
      builder: (_) => const _MotivDialog(),
    );
    if (wer == null || !mounted) return;
    await _rufe(
      'advertising_motif_approve',
      {'p_contract': vertrag['id'], 'p_wer': wer},
      'Motiv freigegeben',
    );
  }

  Future<void> _vertragStatus(Map<String, dynamic> flaeche) async {
    final vertrag = flaeche['vertrag'] as Map?;
    if (vertrag == null) return;
    final neu = await showDialog<String>(
      context: context,
      builder: (_) => _StatusDialog(aktuell: '${vertrag['status']}'),
    );
    if (neu == null || !mounted) return;
    await _rufe(
      'advertising_contract_status',
      {'p_contract': vertrag['id'], 'p_status': neu},
      'Status gesetzt',
    );
  }
}

String _bezeichnung(Map<String, dynamic> f) {
  final b = '${f['bezeichnung'] ?? ''}'.trim();
  return b.isEmpty
      ? '${f['automat']} · ${werbePosition('${f['position']}')}'
      : b;
}

// ═══════════════════════════════════════════════════════════════════════════
// Übersetzungen — an einer Stelle, damit die Oberfläche überall dasselbe sagt
// ═══════════════════════════════════════════════════════════════════════════

String werbePosition(String key) => switch (key) {
      'front' => 'Front',
      'seite_links' => 'Seite links',
      'seite_rechts' => 'Seite rechts',
      'oben' => 'Oben',
      'rueckseite' => 'Rückseite',
      'display' => 'Display',
      _ => key,
    };

String werbeZustand(String key) => switch (key) {
      'nutzbar' => 'nutzbar',
      'gesperrt' => 'gesperrt',
      'wartung' => 'in Wartung',
      _ => key,
    };

String werbeVertragStatus(String key) => switch (key) {
      'entwurf' => 'Entwurf',
      'zur_unterschrift' => 'Zur Unterschrift',
      'aktiv' => 'Aktiv',
      'beendet' => 'Beendet',
      'gekuendigt' => 'Gekündigt',
      _ => key,
    };

/// Datenbankmeldungen in Sätze, die sagen, was zu tun ist.
///
/// Die beiden wichtigsten sind die, die die Datenbank selbst wirft und die
/// als Fehlercode allein nichts erklären: der Ausschluss gegen Doppelbelegung
/// (23P01) und die Prüfregel, die einen Vertrag ohne Motivfreigabe nicht
/// verbindlich werden lässt (23514).
String werbungFehlertext(Object e) {
  final s = e.toString();
  if (s.contains('23P01') || s.contains('conflicting key value')) {
    return 'Für diese Fläche gibt es in diesem Zeitraum schon einen '
        'verbindlichen Vertrag. Zwei Mieter auf derselben Fläche lässt die '
        'Datenbank nicht zu — Entwürfe dürfen sich überschneiden, ein '
        'unterschriebener Vertrag nicht.';
  }
  if (s.contains('werbevertrag_aktiv_nur_mit_freigabe') ||
      s.contains('23514') && s.contains('freigabe')) {
    return 'Ohne freigegebenes Motiv wird der Vertrag nicht verbindlich. '
        'Erst das Motiv freigeben, dann den Status setzen.';
  }
  if (s.contains('Das Vertragsende liegt vor dem Beginn')) {
    return 'Das Vertragsende liegt vor dem Beginn.';
  }
  if (s.contains('Wer freigibt, muss genannt werden')) {
    return 'Bitte den Namen angeben, der die Freigabe verantwortet.';
  }
  if (s.contains('Automat nicht gefunden')) {
    return 'Diesen Automaten gibt es nicht (mehr).';
  }
  if (s.contains('Werbefläche nicht gefunden') ||
      s.contains('Vertrag nicht gefunden')) {
    return 'Der Eintrag ist inzwischen entfernt worden. Bitte neu laden.';
  }
  if (s.contains('Keine Berechtigung')) {
    return 'Dafür fehlt die Berechtigung „locations.manage".';
  }
  if (s.contains('42501') || s.contains('row-level security')) {
    return 'Dafür fehlt die Berechtigung.';
  }
  return 'Fehlgeschlagen: $s';
}

// ═══════════════════════════════════════════════════════════════════════════
// Anzeige
// ═══════════════════════════════════════════════════════════════════════════

/// Die Kennzahlen als ruhige Liste, nicht als Kachelreihe.
///
/// Dieselbe Lehre wie beim Bildregister (26.08.2026): Vier Kacheln
/// nebeneinander lassen auf dem Telefon rund 18 dp je Beschriftung, und
/// „Auslastung" bricht dort buchstabenweise um. Wörter dieser Länge gehören
/// in eine Zeile mit dem Wert daneben.
class WerbeflaechenKennzahlen extends StatelessWidget {
  const WerbeflaechenKennzahlen({super.key, required this.werte});

  final Map<String, dynamic> werte;

  @override
  Widget build(BuildContext context) {
    final auslastung = werte['auslastung_prozent'];
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _Zeile(
            'Flächen',
            '${werte['flaechen_gesamt'] ?? 0}',
            zusatz: '${werte['nicht_nutzbar'] ?? 0} nicht nutzbar',
          ),
          _Zeile(
            'Vermietet',
            '${werte['vermietet'] ?? 0}',
            zusatz: '${werte['frei'] ?? 0} frei',
          ),
          _Zeile(
            'Auslastung',
            auslastung == null
                ? '—'
                : '${zuDouble(auslastung).toStringAsFixed(1).replaceAll('.', ',')} %',
            zusatz: 'je nutzbarer Fläche',
          ),
          const Divider(height: AppSpacing.s5),
          Row(
            children: [
              Expanded(
                child: Text(
                  'Werbeumsatz monatlich',
                  style:
                      AppTypography.body(size: 12, color: AppColors.textMuted),
                ),
              ),
              UmsatzBetrag(betrag: zuDouble(werte['werbeumsatz_monat'])),
            ],
          ),
          const SizedBox(height: 4),
          Row(
            children: [
              Expanded(
                child: Text(
                  'Frei zum Listenpreis',
                  style:
                      AppTypography.body(size: 12, color: AppColors.textMuted),
                ),
              ),
              Text(
                Formatters.euro(zuDouble(werte['listenwert_frei'])),
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _Zeile extends StatelessWidget {
  const _Zeile(this.titel, this.wert, {this.zusatz});

  final String titel;
  final String wert;
  final String? zusatz;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Text(
              titel,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                wert,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
              if (zusatz != null)
                Text(
                  zusatz!,
                  style:
                      AppTypography.body(size: 11, color: AppColors.textMuted),
                ),
            ],
          ),
        ],
      ),
    );
  }
}

class WerbeflaecheKarte extends StatelessWidget {
  const WerbeflaecheKarte({
    super.key,
    required this.flaeche,
    required this.onTap,
  });

  final Map<String, dynamic> flaeche;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final vertrag = flaeche['vertrag'] as Map?;
    final frei = flaeche['frei'] == true;
    final zustand = '${flaeche['betriebszustand']}';
    final groesse = '${flaeche['groesse_mm'] ?? ''}'.trim();

    return Semantics(
      button: true,
      label: 'Werbefläche ${_bezeichnung(flaeche)} öffnen',
      child: AppCard(
        onTap: onTap,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        '${flaeche['automat']} · '
                        '${werbePosition('${flaeche['position']}')}',
                        style: AppTypography.body(
                          size: 14,
                          weight: FontWeight.w700,
                          color: AppColors.ink,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        [
                          if ('${flaeche['standort'] ?? ''}'.trim().isNotEmpty)
                            '${flaeche['standort']}',
                          if (groesse.isNotEmpty) '$groesse mm',
                        ].join(' · '),
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ],
                  ),
                ),
                _Chip(
                  text: zustand != 'nutzbar'
                      ? werbeZustand(zustand)
                      : (frei ? 'frei' : 'vermietet'),
                  farbe: zustand != 'nutzbar'
                      ? AppColors.textMuted
                      : (frei ? AppColors.statusWarning : AppColors.statusPositive),
                ),
              ],
            ),
            const SizedBox(height: AppSpacing.s2),
            Row(
              children: [
                Expanded(
                  child: Text(
                    vertrag == null
                        ? 'Listenpreis '
                            '${Formatters.euro(zuDouble(flaeche['listenpreis_monat']))} '
                            'je Monat'
                        : '${vertrag['mieter']} · '
                            '${werbeVertragStatus('${vertrag['status']}')}'
                            '${vertrag['motiv_freigegeben_am'] == null ? ' · Motiv offen' : ''}',
                    style: AppTypography.body(
                      size: 12,
                      color: vertrag == null
                          ? AppColors.textMuted
                          : AppColors.ink,
                    ),
                  ),
                ),
                if (vertrag != null)
                  UmsatzBetrag(
                    betrag: zuDouble(vertrag['preis_monat']),
                    size: 13,
                  ),
              ],
            ),
            if (vertrag != null) ...[
              const SizedBox(height: 2),
              Text(
                'Laufzeit ${_datum(vertrag['von'])} – '
                '${vertrag['bis'] == null ? 'unbefristet' : _datum(vertrag['bis'])}',
                style: AppTypography.body(size: 11, color: AppColors.textMuted),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

String _datum(dynamic v) {
  final d = DateTime.tryParse('${v ?? ''}');
  return d == null ? '—' : Formatters.date(d);
}

class _AutomatZeile extends StatelessWidget {
  const _AutomatZeile({required this.zeile});

  final Map<String, dynamic> zeile;

  @override
  Widget build(BuildContext context) {
    final flaechen = zeile['flaechen'] ?? 0;
    final vermietet = zeile['vermietet'] ?? 0;
    return AppCard(
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '${zeile['automat']}',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                ),
                Text(
                  '${zeile['standort'] ?? 'ohne Standort'} · '
                  '$vermietet von $flaechen vermietet',
                  style:
                      AppTypography.body(size: 11, color: AppColors.textMuted),
                ),
              ],
            ),
          ),
          UmsatzBetrag(
            betrag: zuDouble(zeile['werbeumsatz_monat']),
            size: 13,
          ),
        ],
      ),
    );
  }
}

class _Chip extends StatelessWidget {
  const _Chip({required this.text, required this.farbe});

  final String text;
  final Color farbe;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: farbe.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        text,
        style: AppTypography.body(
          size: 10,
          weight: FontWeight.w700,
          color: farbe,
        ),
      ),
    );
  }
}

class _Abschnitt extends StatelessWidget {
  const _Abschnitt(this.titel);
  final String titel;

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: AppSpacing.s2),
        child: Text(
          titel,
          style: AppTypography.body(
            size: 15,
            weight: FontWeight.w700,
            color: AppColors.ink,
          ),
        ),
      );
}

class _Leerzeile extends StatelessWidget {
  const _Leerzeile(this.text);
  final String text;

  @override
  Widget build(BuildContext context) => AppCard(
        child: Text(
          text,
          style: AppTypography.body(size: 12, color: AppColors.textMuted),
        ),
      );
}

class _StichtagWahl extends StatelessWidget {
  const _StichtagWahl({required this.stichtag, required this.onWahl});

  final DateTime stichtag;
  final ValueChanged<DateTime> onWahl;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Row(
        children: [
          const Icon(Icons.event_outlined, color: AppColors.textMuted),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Stichtag',
                  style:
                      AppTypography.body(size: 11, color: AppColors.textMuted),
                ),
                Text(
                  Formatters.date(stichtag),
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                ),
              ],
            ),
          ),
          TextButton(
            onPressed: () async {
              final d = await showDatePicker(
                context: context,
                initialDate: stichtag,
                firstDate: DateTime(2024),
                lastDate: DateTime(2100),
                locale: const Locale('de', 'DE'),
              );
              if (d != null) onWahl(d);
            },
            child: const Text('Ändern'),
          ),
        ],
      ),
    );
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Formulare
// ═══════════════════════════════════════════════════════════════════════════

/// Das Menü zu einer Fläche.
///
/// Kein Bildschirm dahinter: Zu einer Fläche gibt es genau eine laufende
/// Miete, und die steht schon auf der Karte. Was fehlt, sind die Handlungen —
/// dafür reicht eine Liste.
class _FlaecheMenue extends StatelessWidget {
  const _FlaecheMenue({required this.flaeche});

  final Map<String, dynamic> flaeche;

  @override
  Widget build(BuildContext context) {
    final vertrag = flaeche['vertrag'] as Map?;
    final motivOffen = vertrag != null && vertrag['motiv_freigegeben_am'] == null;
    return SafeArea(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: AppSpacing.s3),
          Container(
            width: 36,
            height: 4,
            decoration: BoxDecoration(
              color: AppColors.textMuted.withValues(alpha: 0.4),
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s5),
            child: Text(
              _bezeichnung(flaeche),
              style: AppTypography.body(
                size: 16,
                weight: FontWeight.w700,
                color: AppColors.ink,
              ),
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          ListTile(
            leading: const Icon(Icons.edit_outlined),
            title: const Text('Fläche ändern'),
            onTap: () => Navigator.pop(context, 'aendern'),
          ),
          ListTile(
            leading: const Icon(Icons.handshake_outlined),
            title: Text(vertrag == null ? 'Vertrag anlegen' : 'Vertrag ändern'),
            subtitle: vertrag == null
                ? null
                : Text('${vertrag['mieter']} · '
                    '${werbeVertragStatus('${vertrag['status']}')}'),
            onTap: () => Navigator.pop(context, 'vertrag'),
          ),
          if (vertrag != null)
            ListTile(
              leading: Icon(
                motivOffen ? Icons.pending_outlined : Icons.verified_outlined,
                color: motivOffen ? AppColors.statusWarning : AppColors.statusPositive,
              ),
              title: const Text('Motiv freigeben'),
              subtitle: Text(
                motivOffen
                    ? 'Ohne Freigabe wird der Vertrag nicht verbindlich.'
                    : 'Freigegeben am '
                        '${_datum(vertrag['motiv_freigegeben_am'])}',
              ),
              onTap: () => Navigator.pop(context, 'motiv'),
            ),
          if (vertrag != null)
            ListTile(
              leading: const Icon(Icons.flag_outlined),
              title: const Text('Vertragsstatus setzen'),
              onTap: () => Navigator.pop(context, 'status'),
            ),
          ListTile(
            leading:
                const Icon(Icons.delete_outline, color: AppColors.statusCritical),
            title: const Text('Fläche entfernen'),
            onTap: () => Navigator.pop(context, 'entfernen'),
          ),
          const SizedBox(height: AppSpacing.s3),
        ],
      ),
    );
  }
}

class _FlaecheFormular extends StatefulWidget {
  const _FlaecheFormular({required this.automaten, this.vorgabe});

  final List<Map<String, dynamic>> automaten;
  final Map<String, dynamic>? vorgabe;

  @override
  State<_FlaecheFormular> createState() => _FlaecheFormularState();
}

class _FlaecheFormularState extends State<_FlaecheFormular> {
  late String? _automat = _automatAusVorgabe();
  late String _position = '${widget.vorgabe?['position'] ?? 'front'}';
  late String _zustand =
      '${widget.vorgabe?['betriebszustand'] ?? 'nutzbar'}';

  late final _bezeichnung = TextEditingController(
    text: '${widget.vorgabe?['bezeichnung'] ?? ''}',
  );
  late final _breite = TextEditingController(text: _masse().$1);
  late final _hoehe = TextEditingController(text: _masse().$2);
  late final _preis = TextEditingController(
    text: widget.vorgabe == null
        ? ''
        : '${zuDouble(widget.vorgabe?['listenpreis_monat'])}'
            .replaceAll('.', ','),
  );
  final _bemerkung = TextEditingController();

  /// Die Übersicht liefert den Automaten als Anzeigetext, nicht als Kennung.
  /// Beim Ändern wird er darüber wiedergefunden — schlägt das fehl, bleibt
  /// die Auswahl leer, statt stillschweigend den falschen zu nehmen.
  String? _automatAusVorgabe() {
    final anzeige = '${widget.vorgabe?['automat'] ?? ''}'.trim();
    if (anzeige.isEmpty) return null;
    for (final a in widget.automaten) {
      if ('${a['code']}' == anzeige || '${a['name']}' == anzeige) {
        return '${a['id']}';
      }
    }
    return null;
  }

  (String, String) _masse() {
    final g = '${widget.vorgabe?['groesse_mm'] ?? ''}';
    final teile = g.split(' x ');
    return teile.length == 2 ? (teile[0], teile[1]) : ('', '');
  }

  @override
  void dispose() {
    for (final c in [_bezeichnung, _breite, _hoehe, _preis, _bemerkung]) {
      c.dispose();
    }
    super.dispose();
  }

  int? _zahl(TextEditingController c) => int.tryParse(c.text.trim());

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.85,
        maxChildSize: 0.95,
        builder: (_, scroll) => ListView(
          controller: scroll,
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s4,
            AppSpacing.s5,
            AppSpacing.s6,
          ),
          children: [
            Text(
              widget.vorgabe == null ? 'Fläche anlegen' : 'Fläche ändern',
              style: AppTypography.body(
                size: 18,
                weight: FontWeight.w700,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Automat und Position zusammen bestimmen die Fläche. Gibt es '
              'sie schon, wird sie überschrieben statt verdoppelt.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            DropdownButtonFormField<String>(
              key: const ValueKey('feld_automat'),
              initialValue: _automat,
              decoration: const InputDecoration(labelText: 'Automat'),
              items: [
                for (final a in widget.automaten)
                  DropdownMenuItem(
                    value: '${a['id']}',
                    child: Text('${a['code'] ?? a['name']}'),
                  ),
              ],
              onChanged: (v) => setState(() => _automat = v),
            ),
            DropdownButtonFormField<String>(
              key: const ValueKey('feld_position'),
              initialValue: _position,
              decoration: const InputDecoration(labelText: 'Position'),
              items: [
                for (final p in const [
                  'front',
                  'seite_links',
                  'seite_rechts',
                  'oben',
                  'rueckseite',
                  'display',
                ])
                  DropdownMenuItem(value: p, child: Text(werbePosition(p))),
              ],
              onChanged: (v) => setState(() => _position = v ?? 'front'),
            ),
            TextField(
              controller: _bezeichnung,
              decoration: const InputDecoration(
                labelText: 'Bezeichnung (freiwillig)',
                hintText: 'Großfläche Front rechts',
              ),
            ),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _breite,
                    keyboardType: TextInputType.number,
                    decoration:
                        const InputDecoration(labelText: 'Breite (mm)'),
                  ),
                ),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: TextField(
                    controller: _hoehe,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(labelText: 'Höhe (mm)'),
                  ),
                ),
              ],
            ),
            TextField(
              controller: _preis,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(
                labelText: 'Listenpreis je Monat (€)',
                hintText: '49,00',
              ),
            ),
            DropdownButtonFormField<String>(
              key: const ValueKey('feld_zustand'),
              initialValue: _zustand,
              decoration: const InputDecoration(labelText: 'Betriebszustand'),
              items: [
                for (final z in const ['nutzbar', 'gesperrt', 'wartung'])
                  DropdownMenuItem(value: z, child: Text(werbeZustand(z))),
              ],
              onChanged: (v) => setState(() => _zustand = v ?? 'nutzbar'),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Der Betriebszustand sagt nur, ob die Fläche technisch nutzbar '
              'ist. „Vermietet" gibt es hier nicht — das ergibt sich aus dem '
              'Vertrag.',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            TextField(
              controller: _bemerkung,
              maxLines: 2,
              decoration: const InputDecoration(labelText: 'Bemerkung'),
            ),
            const SizedBox(height: AppSpacing.s5),
            Row(
              children: [
                const Spacer(),
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Abbrechen'),
                ),
                const SizedBox(width: AppSpacing.s2),
                FilledButton(
                  onPressed: () {
                    if (_automat == null) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('Bitte einen Automaten wählen.'),
                        ),
                      );
                      return;
                    }
                    Navigator.pop(context, {
                      'p_machine': _automat,
                      'p_position': _position,
                      'p_bezeichnung': _bezeichnung.text.trim().isEmpty
                          ? null
                          : _bezeichnung.text.trim(),
                      'p_breite_mm': _zahl(_breite),
                      'p_hoehe_mm': _zahl(_hoehe),
                      'p_preis_monat': betragLesen(_preis.text) ?? 0,
                      'p_zustand': _zustand,
                      'p_bemerkung': _bemerkung.text.trim().isEmpty
                          ? null
                          : _bemerkung.text.trim(),
                    });
                  },
                  child: const Text('Speichern'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// Eurobeträge werden hier mit Komma eingegeben.
///
/// `double.tryParse` kennt nur den Punkt und gäbe bei „49,00" still `null`
/// zurück — daraus würde ein Preis von 0, und niemand sähe den Fehler.
double? betragLesen(String eingabe) {
  final t = eingabe.trim().replaceAll('.', '').replaceAll(',', '.');
  if (t.isEmpty) return null;
  return double.tryParse(t);
}

class _VertragFormular extends StatefulWidget {
  const _VertragFormular({
    required this.firmen,
    required this.flaeche,
    this.vorgabe,
  });

  final List<Map<String, dynamic>> firmen;
  final Map<String, dynamic> flaeche;
  final Map<String, dynamic>? vorgabe;

  @override
  State<_VertragFormular> createState() => _VertragFormularState();
}

class _VertragFormularState extends State<_VertragFormular> {
  late String? _firma = widget.vorgabe?['business_id']?.toString();
  late DateTime _von =
      DateTime.tryParse('${widget.vorgabe?['von'] ?? ''}') ?? DateTime.now();
  late DateTime? _bis = DateTime.tryParse('${widget.vorgabe?['bis'] ?? ''}');
  late bool _unbefristet = widget.vorgabe != null && widget.vorgabe!['bis'] == null;

  late final _preis = TextEditingController(
    text: '${zuDouble(widget.vorgabe?['preis_monat'] ?? widget.flaeche['listenpreis_monat'])}'
        .replaceAll('.', ','),
  );
  final _frist = TextEditingController(text: '30');
  final _motiv = TextEditingController();
  final _bemerkung = TextEditingController();

  @override
  void dispose() {
    for (final c in [_preis, _frist, _motiv, _bemerkung]) {
      c.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.85,
        maxChildSize: 0.95,
        builder: (_, scroll) => ListView(
          controller: scroll,
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s4,
            AppSpacing.s5,
            AppSpacing.s6,
          ),
          children: [
            Text(
              widget.vorgabe == null ? 'Vertrag anlegen' : 'Vertrag ändern',
              style: AppTypography.body(
                size: 18,
                weight: FontWeight.w700,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              '${_bezeichnung(widget.flaeche)} · neu angelegt wird der '
              'Vertrag als Entwurf. Verbindlich wird er erst über den Status '
              '— und dafür braucht es die Motivfreigabe.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            DropdownButtonFormField<String>(
              key: const ValueKey('feld_mieter'),
              initialValue: _firma,
              decoration: const InputDecoration(labelText: 'Mieter'),
              items: [
                for (final f in widget.firmen)
                  DropdownMenuItem(
                    value: '${f['id']}',
                    child: Text('${f['name']}'),
                  ),
              ],
              onChanged: (v) => setState(() => _firma = v),
            ),
            const SizedBox(height: AppSpacing.s3),
            _DatumZeile(
              titel: 'Beginn',
              datum: _von,
              onWahl: (d) => setState(() => _von = d),
            ),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              value: _unbefristet,
              onChanged: (v) => setState(() => _unbefristet = v),
              title: Text(
                'Unbefristet',
                style: AppTypography.body(size: 13, color: AppColors.ink),
              ),
              subtitle: Text(
                'Ohne Ende sperrt der Vertrag die Fläche dauerhaft für '
                'weitere verbindliche Verträge.',
                style: AppTypography.body(size: 11, color: AppColors.textMuted),
              ),
            ),
            if (!_unbefristet)
              _DatumZeile(
                titel: 'Ende',
                datum: _bis ?? _von,
                onWahl: (d) => setState(() => _bis = d),
              ),
            TextField(
              controller: _preis,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(
                labelText: 'Preis je Monat (€)',
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Der Preis wird im Vertrag festgeschrieben. Ändert sich später '
              'der Listenpreis der Fläche, ändert sich dieser Vertrag nicht.',
              style: AppTypography.body(size: 11, color: AppColors.textMuted),
            ),
            TextField(
              controller: _frist,
              keyboardType: TextInputType.number,
              decoration:
                  const InputDecoration(labelText: 'Kündigungsfrist (Tage)'),
            ),
            TextField(
              controller: _motiv,
              maxLines: 2,
              decoration: const InputDecoration(
                labelText: 'Motiv (Beschreibung)',
                hintText: 'Logo, Claim, Farbfläche …',
              ),
            ),
            TextField(
              controller: _bemerkung,
              maxLines: 2,
              decoration: const InputDecoration(labelText: 'Bemerkung'),
            ),
            const SizedBox(height: AppSpacing.s5),
            Row(
              children: [
                const Spacer(),
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Abbrechen'),
                ),
                const SizedBox(width: AppSpacing.s2),
                FilledButton(
                  onPressed: () {
                    if (_firma == null) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('Bitte einen Mieter wählen.'),
                        ),
                      );
                      return;
                    }
                    final preis = betragLesen(_preis.text);
                    if (preis == null) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('Der Preis ist keine Zahl.'),
                        ),
                      );
                      return;
                    }
                    Navigator.pop(context, {
                      'p_space': widget.flaeche['id'],
                      'p_business': _firma,
                      'p_von': _isoDatum(_von),
                      'p_bis': _unbefristet ? null : _isoDatum(_bis ?? _von),
                      'p_preis_monat': preis,
                      'p_kuendigungsfrist':
                          int.tryParse(_frist.text.trim()) ?? 30,
                      'p_motiv': _motiv.text.trim().isEmpty
                          ? null
                          : _motiv.text.trim(),
                      'p_bemerkung': _bemerkung.text.trim().isEmpty
                          ? null
                          : _bemerkung.text.trim(),
                      'p_contract': widget.vorgabe?['id'],
                    });
                  },
                  child: const Text('Speichern'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

String _isoDatum(DateTime d) =>
    '${d.year.toString().padLeft(4, '0')}-'
    '${d.month.toString().padLeft(2, '0')}-'
    '${d.day.toString().padLeft(2, '0')}';

class _DatumZeile extends StatelessWidget {
  const _DatumZeile({
    required this.titel,
    required this.datum,
    required this.onWahl,
  });

  final String titel;
  final DateTime datum;
  final ValueChanged<DateTime> onWahl;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        SizedBox(
          width: 90,
          child: Text(
            titel,
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
        ),
        Expanded(
          child: Text(
            Formatters.date(datum),
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w600,
              color: AppColors.ink,
            ),
          ),
        ),
        TextButton(
          onPressed: () async {
            final d = await showDatePicker(
              context: context,
              initialDate: datum,
              firstDate: DateTime(2024),
              lastDate: DateTime(2100),
              locale: const Locale('de', 'DE'),
            );
            if (d != null) onWahl(d);
          },
          child: const Text('Wählen'),
        ),
      ],
    );
  }
}

/// Wer freigibt, wird namentlich festgehalten — die Datenbank verlangt es.
class _MotivDialog extends StatefulWidget {
  const _MotivDialog();

  @override
  State<_MotivDialog> createState() => _MotivDialogState();
}

class _MotivDialogState extends State<_MotivDialog> {
  final _wer = TextEditingController();

  @override
  void dispose() {
    _wer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Motiv freigeben'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Mit der Freigabe bestätigst Du, dass das Motiv geprüft ist. '
            'Ohne sie lässt die Datenbank den Vertrag nicht verbindlich '
            'werden.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          TextField(
            controller: _wer,
            autofocus: true,
            decoration: const InputDecoration(
              labelText: 'Wer gibt frei?',
              hintText: 'Vor- und Nachname',
            ),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: () {
            if (_wer.text.trim().length < 2) return;
            Navigator.pop(context, _wer.text.trim());
          },
          child: const Text('Freigeben'),
        ),
      ],
    );
  }
}

class _StatusDialog extends StatelessWidget {
  const _StatusDialog({required this.aktuell});

  final String aktuell;

  @override
  Widget build(BuildContext context) {
    return SimpleDialog(
      title: const Text('Vertragsstatus'),
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(24, 0, 24, 12),
          child: Text(
            'Entwürfe dürfen sich überschneiden — mehrere Angebote für '
            'denselben Platz sind erlaubt. Verbindlich wird nur einer; ab '
            '„Zur Unterschrift" prüft die Datenbank auf Doppelbelegung.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
        ),
        for (final s in const [
          'entwurf',
          'zur_unterschrift',
          'aktiv',
          'beendet',
          'gekuendigt',
        ])
          SimpleDialogOption(
            onPressed: () => Navigator.pop(context, s),
            child: Row(
              children: [
                Icon(
                  s == aktuell
                      ? Icons.radio_button_checked
                      : Icons.radio_button_unchecked,
                  size: 18,
                  color: s == aktuell ? AppColors.brand : AppColors.textMuted,
                ),
                const SizedBox(width: AppSpacing.s3),
                Text(werbeVertragStatus(s)),
              ],
            ),
          ),
      ],
    );
  }
}
