import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import 'bildregister_print.dart'
    if (dart.library.js_interop) 'bildregister_print_web.dart';

/// Bildregister: Herkunft und Bearbeitung jedes Produktbildes.
///
/// Auftrag des Auftraggebers vom 26.08.2026. Wozu es dient, in einem Satz:
/// Bei einer urheber- oder markenrechtlichen Auseinandersetzung ist die
/// Aufzeichnung der Beweis, dass das Bild selbst aufgenommen wurde und was
/// daran verändert worden ist — die Erinnerung ist es nicht.
///
/// Die Einschätzung „Kennzeichnung erforderlich" wird NICHT hier gebildet.
/// Sie ist eine generierte Spalte der Datenbank (Migration 0139), damit sie
/// für jedes Bild dieselbe ist. Dieser Bildschirm zeigt sie nur an.
class BildregisterScreen extends ConsumerStatefulWidget {
  const BildregisterScreen({super.key});

  @override
  ConsumerState<BildregisterScreen> createState() => _BildregisterScreenState();
}

/// Die Stammdaten aus dem Impressum. Sie stehen im Kopf des PDF.
const _firma = 'Bördesnack24 GbR';
const _steuernummer = '102/178/01635';
const _ustIdNr = 'DE 458804058';

class _BildregisterScreenState extends ConsumerState<BildregisterScreen> {
  Map<String, dynamic>? _daten;
  bool _laedt = false;
  String? _fehler;

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
      final ergebnis = await client.rpc('produktbild_register');
      _daten = Map<String, dynamic>.from(ergebnis as Map);
    } catch (e) {
      _fehler = e.toString();
      _daten = null;
    } finally {
      if (mounted) setState(() => _laedt = false);
    }
  }

  List<Map<String, dynamic>> get _bilder =>
      ((_daten?['bilder'] as List?) ?? const []).cast<Map<String, dynamic>>();

  Map<String, dynamic> get _kennzahlen =>
      Map<String, dynamic>.from((_daten?['kennzahlen'] as Map?) ?? const {});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Bilder')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => _bearbeiten(null),
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        icon: const Icon(Icons.add_a_photo_outlined),
        label: const Text('Bild aufnehmen'),
      ),
      body: RefreshIndicator(
        onRefresh: _laden,
        color: AppColors.brand,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(
            AppSpacing.s5,
            AppSpacing.s5,
            AppSpacing.s5,
            // Platz für den Knopf, sonst verdeckt er den letzten Eintrag.
            AppSpacing.s10 + 40,
          ),
          children: [
            const SectionHeader(
              eyebrow: 'Vorgänge & Prozesse',
              title: 'Bildregister',
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Herkunft, Bearbeitung und Freigabe je Produktbild.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
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
                text: 'Das Register liess sich nicht laden: $_fehler',
                farbe: AppColors.statusCritical,
                icon: Icons.error_outline,
              )
            else ...[
              BildregisterKennzahlen(werte: _kennzahlen),
              const SizedBox(height: AppSpacing.s4),
              if (_bilder.isEmpty)
                const _Leer()
              else
                for (final bild in _bilder) ...[
                  BildregisterKarte(bild: bild, onTap: () => _bearbeiten(bild)),
                  const SizedBox(height: AppSpacing.s3),
                ],
              // Die Begründung steht UNTER dem Bestand, nicht darüber: Wer
              // den Bildschirm öffnet, will die Bilder sehen. Vorher lagen
              // drei Absätze Recht davor, und die erste Bildkarte war auf
              // dem Telefon nur mit Scrollen erreichbar.
              const SizedBox(height: AppSpacing.s3),
              const _Rechtshinweis(),
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
        // Auf iOS und Android gibt es den Druck noch nicht. Einen Knopf zu
        // zeigen, der nichts tut, ist schlimmer als keiner.
        if (bildregisterDruckMoeglich)
          HeroAction(
            icon: Icons.picture_as_pdf,
            tooltip: 'Als PDF drucken',
            iconColor: AppColors.statusCritical,
            borderColor: AppColors.statusCritical,
            onTap: () => printBildregister(
              daten: _daten!,
              firma: _firma,
              steuernummer: _steuernummer,
              ustIdNr: _ustIdNr,
            ),
          ),
      ],
    );
  }

  /// Anlegen (`bild == null`) oder Ändern.
  ///
  /// Gestrichen wird weich (`deleted_at`): Ein Register, aus dem Zeilen
  /// spurlos verschwinden, taugt als Nachweis nichts — gerade dann, wenn
  /// jemand behauptet, ein Bild sei nie dokumentiert worden.
  Future<void> _bearbeiten(Map<String, dynamic>? bild) async {
    final ergebnis = await showModalBottomSheet<_Formularergebnis>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (_) => _BildFormular(bild: bild),
    );
    if (ergebnis == null || !mounted) return;

    final client = ref.read(supabaseClientProvider);
    try {
      if (ergebnis.streichen) {
        await client
            .from('produktbilder')
            .update({'deleted_at': DateTime.now().toIso8601String()})
            .eq('id', bild!['id'] as Object);
      } else if (bild == null) {
        await client.from('produktbilder').insert(ergebnis.werte);
      } else {
        await client
            .from('produktbilder')
            .update(ergebnis.werte)
            .eq('id', bild['id'] as Object);
      }
      await _laden();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            ergebnis.streichen ? 'Eintrag gestrichen' : 'Eintrag gespeichert',
          ),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text(_fehlertext(e)),
        ),
      );
    }
  }
}

/// Aus einer Datenbankmeldung eine Zeile machen, die etwas erklärt.
///
/// Die Prüfregeln der Tabelle sind der eigentliche Schutz; sie melden sich
/// aber als `produktbilder_ki_system_stimmig`, und damit kann niemand etwas
/// anfangen. Die Übersetzung steht hier, damit sie an einer Stelle steht.
String _fehlertext(Object e) {
  final s = e.toString();
  if (s.contains('produktbilder_ki_system_stimmig')) {
    return 'Wenn KI verwendet wurde, muss das System genannt werden — und '
        'ohne KI darf keines dastehen.';
  }
  if (s.contains('produktbilder_ki_folgen_stimmig')) {
    return 'Ohne KI kann die KI weder ein Produkt noch eine Umgebung '
        'erzeugt haben.';
  }
  if (s.contains('produktbilder_freigabe_vollstaendig')) {
    return 'Zur Freigabe gehören beide Angaben: wer freigegeben hat und wann.';
  }
  if (s.contains('produktbilder_freigabe_erst_nach_pruefung')) {
    return 'Vor der Freigabe ist zu bestätigen, dass Art. 50 EU AI Act '
        'geprüft wurde.';
  }
  if (s.contains('produktbilder_freigabe_nicht_vor_aufnahme')) {
    return 'Ein Bild kann nicht freigegeben sein, bevor es aufgenommen wurde.';
  }
  if (s.contains('42501') || s.contains('row-level security')) {
    return 'Dafür fehlt die Berechtigung „inventory.edit".';
  }
  return 'Speichern fehlgeschlagen: $s';
}

// ═══════════════════════════════════════════════════════════════════════════
// Anzeige
// ═══════════════════════════════════════════════════════════════════════════

/// Die vier Zahlen über dem Register.
///
/// KEINE Kachelreihe, und das war eine Korrektur: Zuerst standen hier vier
/// `KpiCard`s wie im Finanzbereich. Auf dem Telefon blieben je Kachel rund
/// 18 dp für die Beschriftung, und „zu kennzeichnen" brach buchstabenweise
/// senkrecht um — vom Auftraggeber am Gerät gemeldet. Ein zweispaltiges
/// Raster half nur halb: bei 390 dp passte es, bei 320 dp lief die Kachel
/// wieder über. Das Bauteil ist für kurze Beschriftungen gedacht
/// („Aufwand"), nicht für vier lange.
///
/// Vier Zahlen brauchen keine vier Kacheln. Eine Karte mit vier Zeilen kann
/// nicht überlaufen — die Beschriftung darf umbrechen, die Zahl steht rechts
/// — und sie braucht ein Drittel der Höhe, sodass die erste Bildkarte ohne
/// Scrollen sichtbar bleibt.
///
/// Öffentlich, damit ein Test sie in Telefonbreite rendern kann: Der
/// Bildschirm selbst braucht eine Supabase-Verbindung.
class BildregisterKennzahlen extends StatelessWidget {
  const BildregisterKennzahlen({super.key, required this.werte});

  final Map<String, dynamic> werte;

  int _z(String k) => (werte[k] as num?)?.toInt() ?? 0;

  @override
  Widget build(BuildContext context) {
    final pflicht = _z('kennzeichnungspflicht');
    final offen = _z('ohne_freigabe');

    return AppCard(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s2,
      ),
      child: Column(
        children: [
          _Kennzahl(
            icon: Icons.photo_library_outlined,
            label: 'Dokumentierte Bilder',
            wert: _z('gesamt'),
          ),
          const _Trenner(),
          _Kennzahl(
            icon: Icons.auto_awesome_outlined,
            label: 'davon mit KI bearbeitet',
            wert: _z('mit_ki'),
          ),
          const _Trenner(),
          _Kennzahl(
            icon: Icons.campaign_outlined,
            label: 'zu kennzeichnen',
            wert: pflicht,
            // Nur hervorheben, wenn es etwas hervorzuheben gibt. Eine
            // dauerhaft gelbe Null gewöhnt einem die Farbe ab.
            warnung: pflicht > 0,
          ),
          const _Trenner(),
          _Kennzahl(
            icon: Icons.pending_outlined,
            label: 'ohne Freigabe',
            wert: offen,
            warnung: offen > 0,
          ),
        ],
      ),
    );
  }
}

class _Kennzahl extends StatelessWidget {
  const _Kennzahl({
    required this.icon,
    required this.label,
    required this.wert,
    this.warnung = false,
  });

  final IconData icon;
  final String label;
  final int wert;
  final bool warnung;

  @override
  Widget build(BuildContext context) {
    final farbe = warnung ? AppColors.statusWarning : AppColors.ink;
    return Semantics(
      label: '$label: $wert',
      excludeSemantics: true,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: AppSpacing.s3),
        child: Row(
          children: [
            Icon(icon, size: 18, color: warnung ? farbe : AppColors.brand),
            const SizedBox(width: AppSpacing.s3),
            Expanded(
              child: Text(
                label,
                style: AppTypography.body(size: 13, color: AppColors.textDefault),
              ),
            ),
            const SizedBox(width: AppSpacing.s3),
            Text(
              '$wert',
              style: AppTypography.display(
                size: 20,
                weight: FontWeight.w700,
                color: farbe,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Trenner extends StatelessWidget {
  const _Trenner();

  @override
  Widget build(BuildContext context) =>
      const Divider(height: 1, thickness: 1, color: AppColors.borderSubtle);
}

/// Warum es dieses Register gibt — einmal ausgeschrieben, im Bildschirm.
///
/// Nicht als Fussnote: Wer hier Bilder einträgt, soll wissen, wogegen die
/// Angaben schützen. Sonst wird das Formular abgehakt statt ausgefüllt.
class _Rechtshinweis extends StatelessWidget {
  const _Rechtshinweis();

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(
                Icons.gavel_outlined,
                size: 18,
                color: AppColors.brand,
              ),
              const SizedBox(width: AppSpacing.s2),
              Text(
                'Wogegen das schützt',
                style: AppTypography.body(size: 14, weight: FontWeight.w700, color: AppColors.ink),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          const _Punkt(
            titel: 'Urheberrecht',
            text: 'Fotograf und Aufnahmedatum belegen, dass die Aufnahme von '
                'uns stammt. Ohne diesen Nachweis steht Aussage gegen '
                'Aussage.',
          ),
          const _Punkt(
            titel: 'Markenrecht',
            text: 'Fremde Marken dürfen wir zeigen, weil wir die Ware '
                'verkaufen (§§ 23, 24 MarkenG). Nicht erlaubt ist alles, was '
                'eine Geschäftsbeziehung nahelegt — deshalb wird festgehalten, '
                'ob am Produkt selbst etwas verändert wurde.',
          ),
          const _Punkt(
            titel: 'EU AI Act',
            text: 'Art. 50 Abs. 4 verlangt einen Hinweis, wenn KI ein Bild so '
                'erzeugt oder verändert hat, dass es echt wirkt, ohne es zu '
                'sein. Freistellen und Zuschneiden fällt nicht darunter, eine '
                'erfundene Umgebung schon.',
          ),
        ],
      ),
    );
  }
}

class _Punkt extends StatelessWidget {
  const _Punkt({required this.titel, required this.text});

  final String titel;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: RichText(
        text: TextSpan(
          style: AppTypography.body(size: 12, color: AppColors.textMuted),
          children: [
            TextSpan(
              text: '$titel — ',
              style: AppTypography.body(size: 12, weight: FontWeight.w700, color: AppColors.ink),
            ),
            TextSpan(text: text),
          ],
        ),
      ),
    );
  }
}

class _Leer extends StatelessWidget {
  const _Leer();

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Column(
        children: [
          const Icon(
            Icons.photo_camera_outlined,
            size: 32,
            color: AppColors.textMuted,
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Noch kein Bild dokumentiert',
            style: AppTypography.body(size: 14, weight: FontWeight.w700, color: AppColors.ink),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Jedes Produktbild, das in der App oder in Werbung erscheint, '
            'gehört hier hinein — auch die, die schon im Einsatz sind.',
            textAlign: TextAlign.center,
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
        ],
      ),
    );
  }
}

/// Ein Eintrag des Registers.
///
/// Öffentlich aus demselben Grund wie [BildregisterKennzahlen]: Der
/// Bildschirm braucht eine Supabase-Verbindung, die Karte nicht — und genau
/// hier entscheidet sich, ob das Format auf einem Telefon hält.
class BildregisterKarte extends StatelessWidget {
  const BildregisterKarte({
    super.key,
    required this.bild,
    required this.onTap,
  });

  final Map<String, dynamic> bild;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final kiVerwendet = bild['ki_verwendet'] == true;
    final pflicht = bild['kennzeichnung_noetig'] == true;
    final freigabe = bild['freigabe_am']?.toString();

    return Semantics(
      button: true,
      label: 'Eintrag ${bild['produkt']} bearbeiten',
      child: AppCard(
        onTap: onTap,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Text(
                    '${bild['produkt']}',
                    style: AppTypography.body(size: 15, weight: FontWeight.w700, color: AppColors.ink),
                  ),
                ),
                if (pflicht)
                  const _Marke(
                    text: 'kennzeichnen',
                    farbe: AppColors.statusWarning,
                  )
                else if (kiVerwendet)
                  const _Marke(text: 'KI', farbe: AppColors.brand),
              ],
            ),
            const SizedBox(height: AppSpacing.s1),
            Text(
              '${bild['originalfoto']} · ${bild['fotograf']} · '
              '${_datum(bild['aufnahmedatum'])}',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s3),
            _Zeile(
              links: 'Bearbeitung',
              rechts: '${bild['bearbeitung'] ?? '—'}',
            ),
            _Zeile(
              links: 'KI-System',
              rechts: kiVerwendet ? '${bild['ki_system']}' : 'keine KI',
            ),
            _Zeile(
              links: 'Produkt verändert',
              rechts: bild['produkt_veraendert'] == true ? 'Ja' : 'Nein',
              betont: bild['produkt_veraendert'] == true,
            ),
            _Zeile(
              links: 'Kennzeichnung erforderlich',
              rechts: pflicht ? 'Ja' : 'Nein',
              betont: pflicht,
            ),
            _Zeile(
              links: 'Freigabe',
              rechts: freigabe == null
                  ? 'offen'
                  : '${bild['freigegeben_von']} · ${_datum(freigabe)}',
              betont: freigabe == null,
            ),
          ],
        ),
      ),
    );
  }
}

class _Zeile extends StatelessWidget {
  const _Zeile({
    required this.links,
    required this.rechts,
    this.betont = false,
  });

  final String links;
  final String rechts;
  final bool betont;

  @override
  Widget build(BuildContext context) {
    // Keine feste Breite für die Beschriftung: 150 dp gegen eine Karte, die
    // von 320 bis 1200 dp breit sein kann, ist derselbe Fehler wie bei den
    // Kennzahlen. Beide Seiten teilen sich den Platz im Verhältnis.
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            flex: 5,
            child: Text(
              links,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            flex: 6,
            child: Text(
              rechts,
              style: AppTypography.body(
                size: 12,
                color: betont ? AppColors.statusWarning : AppColors.ink,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _Marke extends StatelessWidget {
  const _Marke({required this.text, required this.farbe});

  final String text;
  final Color farbe;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: farbe.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: farbe.withValues(alpha: 0.45)),
      ),
      child: Text(
        text,
        style: AppTypography.body(size: 10, color: farbe),
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
    return Container(
      padding: const EdgeInsets.all(AppSpacing.s3),
      decoration: BoxDecoration(
        color: farbe.withValues(alpha: 0.10),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: farbe.withValues(alpha: 0.35)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 18, color: farbe),
          const SizedBox(width: AppSpacing.s2),
          Expanded(
            child: Text(
              text,
              style: AppTypography.body(size: 12, color: AppColors.ink),
            ),
          ),
        ],
      ),
    );
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Formular
// ═══════════════════════════════════════════════════════════════════════════

class _Formularergebnis {
  const _Formularergebnis({required this.werte, this.streichen = false});

  final Map<String, dynamic> werte;
  final bool streichen;
}

class _BildFormular extends StatefulWidget {
  const _BildFormular({required this.bild});

  final Map<String, dynamic>? bild;

  @override
  State<_BildFormular> createState() => _BildFormularState();
}

class _BildFormularState extends State<_BildFormular> {
  late final TextEditingController _produkt;
  late final TextEditingController _originalfoto;
  late final TextEditingController _fotograf;
  late final TextEditingController _kiSystem;
  late final TextEditingController _bearbeitung;
  late final TextEditingController _freigegebenVon;
  late final TextEditingController _bemerkung;

  late DateTime _aufnahme;
  DateTime? _freigabe;
  late bool _kiVerwendet;
  late bool _produktVeraendert;
  late bool _kiNeuesProdukt;
  late bool _kiNeueUmgebung;
  late bool _art50;

  bool get _neu => widget.bild == null;

  /// Dieselbe Regel wie die generierte Spalte in der Datenbank, nur für die
  /// Vorschau im Formular. Sie ist bewusst NICHT die massgebliche: Gespeichert
  /// wird, was die Datenbank rechnet.
  bool get _kennzeichnungVoraussichtlich =>
      _kiVerwendet && (_produktVeraendert || _kiNeuesProdukt || _kiNeueUmgebung);

  @override
  void initState() {
    super.initState();
    final b = widget.bild;
    _produkt = TextEditingController(text: '${b?['produkt'] ?? ''}');
    _originalfoto = TextEditingController(text: '${b?['originalfoto'] ?? ''}');
    _fotograf =
        TextEditingController(text: '${b?['fotograf'] ?? 'Bördesnack24'}');
    _kiSystem = TextEditingController(text: '${b?['ki_system'] ?? ''}');
    _bearbeitung = TextEditingController(text: '${b?['bearbeitung'] ?? ''}');
    _freigegebenVon =
        TextEditingController(text: '${b?['freigegeben_von'] ?? ''}');
    _bemerkung = TextEditingController(text: '${b?['bemerkung'] ?? ''}');

    _aufnahme = _parse(b?['aufnahmedatum']) ?? DateTime.now();
    _freigabe = _parse(b?['freigabe_am']);
    _kiVerwendet = b?['ki_verwendet'] == true;
    _produktVeraendert = b?['produkt_veraendert'] == true;
    _kiNeuesProdukt = b?['ki_neues_produkt'] == true;
    _kiNeueUmgebung = b?['ki_neue_umgebung'] == true;
    _art50 = b?['art50_geprueft'] == true;
  }

  @override
  void dispose() {
    _produkt.dispose();
    _originalfoto.dispose();
    _fotograf.dispose();
    _kiSystem.dispose();
    _bearbeitung.dispose();
    _freigegebenVon.dispose();
    _bemerkung.dispose();
    super.dispose();
  }

  Future<void> _datumWaehlen({required bool freigabe}) async {
    final gewaehlt = await showDatePicker(
      context: context,
      initialDate: freigabe ? (_freigabe ?? DateTime.now()) : _aufnahme,
      firstDate: DateTime(2020),
      lastDate: DateTime(DateTime.now().year + 1, 12, 31),
    );
    if (gewaehlt == null) return;
    setState(() {
      if (freigabe) {
        _freigabe = gewaehlt;
      } else {
        _aufnahme = gewaehlt;
      }
    });
  }

  void _speichern() {
    final produkt = _produkt.text.trim();
    final foto = _originalfoto.text.trim();
    if (produkt.isEmpty || foto.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Produkt und Originalfoto sind Pflichtangaben.'),
        ),
      );
      return;
    }

    final freigeber = _freigegebenVon.text.trim();
    Navigator.pop(
      context,
      _Formularergebnis(
        werte: {
          'produkt': produkt,
          'originalfoto': foto,
          'fotograf': _fotograf.text.trim().isEmpty
              ? 'Bördesnack24'
              : _fotograf.text.trim(),
          'aufnahmedatum': _iso(_aufnahme),
          'ki_verwendet': _kiVerwendet,
          // Ohne KI darf kein System dastehen — die Tabelle prüft es, aber
          // ein Feld leerräumen ist freundlicher als eine Fehlermeldung.
          'ki_system': _kiVerwendet && _kiSystem.text.trim().isNotEmpty
              ? _kiSystem.text.trim()
              : null,
          'bearbeitung': _leerZuNull(_bearbeitung.text),
          'produkt_veraendert': _produktVeraendert,
          'ki_neues_produkt': _kiVerwendet && _kiNeuesProdukt,
          'ki_neue_umgebung': _kiVerwendet && _kiNeueUmgebung,
          'art50_geprueft': _art50,
          'freigegeben_von': freigeber.isEmpty ? null : freigeber,
          'freigabe_am': freigeber.isEmpty || _freigabe == null
              ? null
              : _iso(_freigabe!),
          'bemerkung': _leerZuNull(_bemerkung.text),
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final unten = MediaQuery.of(context).viewInsets.bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: unten),
      child: DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.9,
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
            Center(
              child: Container(
                width: 36,
                height: 4,
                decoration: BoxDecoration(
                  color: AppColors.textMuted.withValues(alpha: 0.4),
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.s4),
            Text(
              _neu ? 'Bild dokumentieren' : 'Eintrag korrigieren',
              style: AppTypography.body(size: 18, weight: FontWeight.w700, color: AppColors.ink),
            ),
            const SizedBox(height: AppSpacing.s4),

            // ── Herkunft ────────────────────────────────────────────────
            const _Abschnitt('Herkunft'),
            TextField(
              controller: _produkt,
              textCapitalization: TextCapitalization.sentences,
              decoration: const InputDecoration(
                labelText: 'Produkt',
                hintText: 'Coca-Cola 0,5 l',
              ),
            ),
            TextField(
              controller: _originalfoto,
              decoration: const InputDecoration(
                labelText: 'Originalfoto',
                hintText: 'IMG_1234.JPG',
                helperText: 'Der Dateiname der unbearbeiteten Aufnahme',
              ),
            ),
            TextField(
              controller: _fotograf,
              decoration: const InputDecoration(labelText: 'Fotograf'),
            ),
            const SizedBox(height: AppSpacing.s2),
            _DatumZeile(
              label: 'Aufnahmedatum',
              wert: Formatters.date(_aufnahme),
              onTap: () => _datumWaehlen(freigabe: false),
            ),

            // ── Bearbeitung ─────────────────────────────────────────────
            const _Abschnitt('Bearbeitung'),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              activeThumbColor: AppColors.brand,
              title: const Text('KI verwendet'),
              value: _kiVerwendet,
              onChanged: (v) => setState(() {
                _kiVerwendet = v;
                if (!v) {
                  _kiSystem.clear();
                  _kiNeuesProdukt = false;
                  _kiNeueUmgebung = false;
                }
              }),
            ),
            if (_kiVerwendet)
              TextField(
                controller: _kiSystem,
                decoration: const InputDecoration(
                  labelText: 'KI-System',
                  hintText: 'ChatGPT',
                ),
              ),
            TextField(
              controller: _bearbeitung,
              textCapitalization: TextCapitalization.sentences,
              decoration: const InputDecoration(
                labelText: 'Bearbeitung',
                hintText: 'Hintergrund entfernt',
              ),
            ),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              activeThumbColor: AppColors.brand,
              title: const Text('Produkt verändert'),
              subtitle: const Text(
                'Aufmachung, Etikett oder Füllmenge weichen vom Original ab',
              ),
              value: _produktVeraendert,
              onChanged: (v) => setState(() => _produktVeraendert = v),
            ),
            if (_kiVerwendet) ...[
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                activeThumbColor: AppColors.brand,
                title: const Text('KI erzeugt neues Produkt'),
                value: _kiNeuesProdukt,
                onChanged: (v) => setState(() => _kiNeuesProdukt = v),
              ),
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                activeThumbColor: AppColors.brand,
                title: const Text('KI erzeugt neue Umgebung'),
                value: _kiNeueUmgebung,
                onChanged: (v) => setState(() => _kiNeueUmgebung = v),
              ),
            ],

            // ── Einordnung ──────────────────────────────────────────────
            const _Abschnitt('Einordnung'),
            _Hinweis(
              text: _kennzeichnungVoraussichtlich
                  ? 'Kennzeichnung erforderlich: Ja. Überall dort, wo dieses '
                      'Bild im Kundenbereich erscheint, gehört ein sichtbarer '
                      'Hinweis dazu.'
                  : 'Kennzeichnung erforderlich: Nein. Das Produkt und seine '
                      'Umgebung werden gezeigt, wie sie sind.',
              farbe: _kennzeichnungVoraussichtlich
                  ? AppColors.statusWarning
                  : AppColors.statusPositive,
              icon: _kennzeichnungVoraussichtlich
                  ? Icons.campaign_outlined
                  : Icons.check_circle_outline,
            ),
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              activeThumbColor: AppColors.brand,
              title: const Text('Art. 50 EU AI Act geprüft'),
              subtitle: const Text(
                'Erforderlich, bevor eine Freigabe eingetragen werden kann',
              ),
              value: _art50,
              onChanged: (v) => setState(() => _art50 = v),
            ),

            // ── Freigabe ────────────────────────────────────────────────
            const _Abschnitt('Freigabe'),
            TextField(
              controller: _freigegebenVon,
              textCapitalization: TextCapitalization.words,
              decoration: const InputDecoration(
                labelText: 'Freigegeben durch',
                hintText: 'Philipp Blume',
              ),
              onChanged: (_) => setState(() {}),
            ),
            const SizedBox(height: AppSpacing.s2),
            _DatumZeile(
              label: 'Freigabedatum',
              wert: _freigabe == null ? 'offen' : Formatters.date(_freigabe!),
              onTap: () => _datumWaehlen(freigabe: true),
            ),
            const SizedBox(height: AppSpacing.s3),
            TextField(
              controller: _bemerkung,
              maxLines: 2,
              textCapitalization: TextCapitalization.sentences,
              decoration: const InputDecoration(
                labelText: 'Bemerkung (freiwillig)',
              ),
            ),

            const SizedBox(height: AppSpacing.s5),
            Row(
              children: [
                if (!_neu)
                  TextButton(
                    onPressed: () => Navigator.pop(
                      context,
                      const _Formularergebnis(werte: {}, streichen: true),
                    ),
                    child: const Text(
                      'Streichen',
                      style: TextStyle(color: AppColors.statusCritical),
                    ),
                  ),
                const Spacer(),
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Abbrechen'),
                ),
                const SizedBox(width: AppSpacing.s2),
                FilledButton(
                  onPressed: _speichern,
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

class _Abschnitt extends StatelessWidget {
  const _Abschnitt(this.titel);

  final String titel;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        top: AppSpacing.s5,
        bottom: AppSpacing.s2,
      ),
      child: Text(
        titel.toUpperCase(),
        style: AppTypography.body(
          size: 11,
          color: AppColors.brand,
        ).copyWith(letterSpacing: 1.2),
      ),
    );
  }
}

class _DatumZeile extends StatelessWidget {
  const _DatumZeile({
    required this.label,
    required this.wert,
    required this.onTap,
  });

  final String label;
  final String wert;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: '$label, aktuell $wert, zum Ändern antippen',
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(10),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: AppSpacing.s3),
          child: Row(
            children: [
              const Icon(
                Icons.event_outlined,
                size: 18,
                color: AppColors.textMuted,
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: Text(
                  label,
                  style: AppTypography.body(size: 13),
                ),
              ),
              Text(
                wert,
                style: AppTypography.body(size: 13, weight: FontWeight.w700, color: AppColors.ink),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Hilfen
// ═══════════════════════════════════════════════════════════════════════════

DateTime? _parse(dynamic v) =>
    v == null ? null : DateTime.tryParse(v.toString());

String _iso(DateTime d) =>
    '${d.year.toString().padLeft(4, '0')}-'
    '${d.month.toString().padLeft(2, '0')}-'
    '${d.day.toString().padLeft(2, '0')}';

String _datum(dynamic v) {
  final d = _parse(v);
  return d == null ? '—' : Formatters.date(d);
}

String? _leerZuNull(String s) => s.trim().isEmpty ? null : s.trim();
