import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../widgets/receipt_export_stub.dart'
    if (dart.library.js_interop) '../widgets/receipt_export_web.dart';

/// Auskunft nach Art. 15 DSGVO.
///
/// Die Datenbankfunktion `export_my_data()` gab es seit Wochen — nur rief
/// sie niemand auf. Eine Auskunft, die technisch vorbereitet und praktisch
/// nicht erreichbar ist, erfüllt Art. 15 nicht; die Vorschrift verlangt,
/// dass der Betroffene sie **bekommt**, nicht dass sie berechenbar wäre.
///
/// Der Bildschirm zeigt zuerst, was drinsteht — Bereich für Bereich mit
/// Anzahl. Das ist mehr als Höflichkeit: Wer eine Auskunft anfordert, will
/// in aller Regel wissen, *was* gespeichert ist, und nicht eine Datei mit
/// 4000 Zeilen JSON deuten müssen. Die Datei gibt es dann zusätzlich.
class DataExportScreen extends ConsumerStatefulWidget {
  const DataExportScreen({super.key});

  @override
  ConsumerState<DataExportScreen> createState() => _DataExportScreenState();
}

class _DataExportScreenState extends ConsumerState<DataExportScreen> {
  Map<String, dynamic>? _daten;
  bool _laeuft = false;
  String? _fehler;

  Future<void> _anfordern() async {
    setState(() {
      _laeuft = true;
      _fehler = null;
    });
    try {
      final antwort =
          await ref.read(supabaseClientProvider).rpc('export_my_data');
      if (!mounted) return;
      setState(() {
        _daten = Map<String, dynamic>.from(antwort as Map);
        _laeuft = false;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _laeuft = false;
        _fehler = auskunftFehlertext(e);
      });
    }
  }

  Future<void> _sichern() async {
    final daten = _daten;
    if (daten == null) return;
    final stamp = DateTime.now().toIso8601String().substring(0, 10);
    final inhalt = const JsonEncoder.withIndent('  ').convert(daten);
    final status = await shareCsv(
      inhalt,
      'boerdesnack24_auskunft_$stamp.json',
      mimeType: 'application/json;charset=utf-8',
    );
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          status == 'downloaded'
              ? 'Datei gespeichert.'
              : 'In die Zwischenablage kopiert — von dort in eine Datei einfügen.',
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Meine Daten')),
      body: ListView(
        padding: const EdgeInsets.all(AppSpacing.s4),
        children: [
          const Eyebrow('Auskunft'),
          const SizedBox(height: 2),
          Text(
            'Was wir über dich gespeichert haben',
            style: AppTypography.display(
              size: 22,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Du hast das Recht, eine Kopie aller Daten zu bekommen, die wir '
            'zu deinem Konto verarbeiten (Art. 15 DSGVO). Die Auskunft wird '
            'in dem Moment erstellt, in dem du sie anforderst — sie ist '
            'also immer aktuell.',
            style: AppTypography.body(size: 13, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s4),
          if (_daten == null) ...[
            FilledButton.icon(
              onPressed: _laeuft ? null : _anfordern,
              icon: _laeuft
                  ? const SizedBox(
                      width: 16,
                      height: 16,
                      child: CircularProgressIndicator(strokeWidth: 2),
                    )
                  : const Icon(Icons.download_outlined, size: 18),
              label: Text(_laeuft ? 'Wird erstellt…' : 'Auskunft erstellen'),
            ),
            if (_fehler != null) ...[
              const SizedBox(height: AppSpacing.s3),
              AppCard(
                color: const Color(0xFFF7DBDB),
                borderColor: AppColors.statusCritical,
                child: Text(
                  _fehler!,
                  style: AppTypography.body(size: 13, color: AppColors.ink),
                ),
              ),
            ],
          ] else ...[
            AppCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Erstellt am ${_zeitpunkt(_daten!['erzeugt_am'])}',
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
                  const SizedBox(height: AppSpacing.s1),
                  Text(
                    'Kartennummer und Abmeldelink sind bewusst nicht '
                    'enthalten — mit ihnen könnte jemand, dem die Datei in '
                    'die Hände fällt, dein Konto bedienen. Dass es sie gibt, '
                    'steht drin.',
                    style: AppTypography.body(
                      size: 12,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            ..._bereiche(_daten!).map(
              (b) => Padding(
                padding: const EdgeInsets.only(bottom: AppSpacing.s1),
                child: AppCard(
                  child: Row(
                    children: [
                      Expanded(
                        child: Text(
                          b.titel,
                          style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w700,
                            color: AppColors.ink,
                          ),
                        ),
                      ),
                      Text(
                        b.beschreibung,
                        style: AppTypography.body(
                          size: 13,
                          color: b.leer
                              ? AppColors.textMuted
                              : AppColors.ink,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.s3),
            FilledButton.icon(
              onPressed: _sichern,
              icon: const Icon(Icons.save_alt_outlined, size: 18),
              label: const Text('Als Datei sichern'),
            ),
            const SizedBox(height: AppSpacing.s2),
            TextButton(
              onPressed: _anfordern,
              child: const Text('Erneut erstellen'),
            ),
          ],
        ],
      ),
    );
  }

  String _zeitpunkt(Object? wert) {
    final d = DateTime.tryParse(wert?.toString() ?? '');
    if (d == null) return 'unbekannt';
    final l = d.toLocal();
    return '${l.day.toString().padLeft(2, '0')}.${l.month.toString().padLeft(2, '0')}.${l.year}, '
        '${l.hour.toString().padLeft(2, '0')}:${l.minute.toString().padLeft(2, '0')} Uhr';
  }
}

/// Ein Bereich der Auskunft, wie er in der Liste erscheint.
class AuskunftBereich {
  const AuskunftBereich(this.titel, this.beschreibung, {this.leer = false});
  final String titel;
  final String beschreibung;
  final bool leer;
}

/// Übersetzt die Rohantwort in eine lesbare Liste.
///
/// Bewusst ohne feste Liste erwarteter Schlüssel: Kommt in der Datenbank ein
/// Bereich dazu, taucht er hier automatisch auf. Eine Auskunft, die still
/// einen Bereich unterschlägt, weil die App ihn nicht kennt, wäre genau der
/// Fehler, den diese Funktion beheben soll.
List<AuskunftBereich> bereicheAusAuskunft(Map<String, dynamic> daten) {
  const uebersetzung = <String, String>{
    'profil': 'Profil',
    'kundendaten': 'Kundendaten',
    'einwilligungen': 'Einwilligungen',
    'einwilligungsverlauf': 'Verlauf der Einwilligungen',
    'versandte_nachrichten': 'Versandte E-Mails',
    'benachrichtigungen': 'Benachrichtigungen',
    'gelesene_hinweise': 'Gelesene Hinweise',
    'kontaktnachrichten': 'Kontaktnachrichten',
    'kaeufe': 'Käufe',
    'rechnungen': 'Rechnungen',
    'zahlungen': 'Zahlungen',
    'reklamationen': 'Reklamationen',
    'individuelle_preise': 'Individuelle Preise',
    'abo_verlauf': 'Abo-Verlauf',
    'store_abo': 'Abo über den App-Store',
    'kuendigungen': 'Kündigungen',
    'persoenliche_angebote': 'Persönliche Angebote',
    'aktivierte_angebote': 'Aktivierte Angebote',
    'bonusstufen': 'Bonusstufen',
    'challenge_gutschriften': 'Challenge-Gutschriften',
    'anmeldetage': 'Anmeldetage',
    'empfehlungen_fuer_mich': 'Produktempfehlungen',
    'bewertungen': 'Meine Bewertungen',
    'spendenstimmen': 'Spendenstimmen',
    'werbeklicks': 'Klicks auf Anzeigen',
    'mein_empfehlungscode': 'Mein Empfehlungscode',
    'empfehlungen_von_mir': 'Von mir geworbene Personen',
    'empfehlung_die_mich_warb': 'Wer mich geworben hat',
    'empfehlungspraemien': 'Empfehlungsprämien',
    'firmenmitgliedschaften': 'Firmenzugehörigkeit',
    'geraete': 'Angemeldete Geräte',
    'kundenkarte': 'Kundenkarte',
    'abmeldetoken_besteht': 'Abmeldelink hinterlegt',
    'loeschantraege': 'Löschanträge',
    'ifsg_belehrungen': 'IfSG-Belehrungen',
    'schulungen': 'Schulungen',
  };

  final ergebnis = <AuskunftBereich>[];
  for (final eintrag in daten.entries) {
    if (eintrag.key == 'erzeugt_am' || eintrag.key == 'hinweis') continue;
    final titel = uebersetzung[eintrag.key] ?? eintrag.key;
    final wert = eintrag.value;

    if (wert is List) {
      ergebnis.add(
        AuskunftBereich(
          titel,
          wert.isEmpty ? 'nichts gespeichert' : '${wert.length} Einträge',
          leer: wert.isEmpty,
        ),
      );
    } else if (wert is bool) {
      ergebnis.add(
        AuskunftBereich(titel, wert ? 'ja' : 'nein', leer: !wert),
      );
    } else if (wert == null) {
      ergebnis.add(AuskunftBereich(titel, 'nichts gespeichert', leer: true));
    } else {
      ergebnis.add(AuskunftBereich(titel, 'vorhanden'));
    }
  }
  ergebnis.sort((a, b) => a.titel.compareTo(b.titel));
  return ergebnis;
}

List<AuskunftBereich> _bereiche(Map<String, dynamic> daten) =>
    bereicheAusAuskunft(daten);

/// Deutet einen Fehler der Auskunft für Menschen. Kein Code im Klartext.
String auskunftFehlertext(Object error) {
  final s = error.toString();
  if (s.contains('42501')) {
    return 'Dafür musst du angemeldet sein. Bitte melde dich neu an und '
        'versuche es noch einmal.';
  }
  return 'Die Auskunft konnte gerade nicht erstellt werden. Bitte versuche '
      'es in einem Moment erneut — deine Daten sind davon nicht berührt.';
}
