import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../finance/presentation/widgets/betrag_text.dart';
import 'firmenkunde_detail_screen.dart';

/// Firmenkunden — die Gesellschafter-Sicht auf Bördesnack24 Business.
///
/// Warum dieser Bildschirm in der App liegt und nicht bei Lovable: Eine Firma
/// wird bei uns angelegt, nicht von ihr selbst (`business_create` verlangt
/// `businesses.manage`). Das ist eine interne Handlung, und interne
/// Handlungen liegen im Verwaltungsbereich. Lovable baut das Portal für die
/// Firmenkunden selbst; das hier ist die Gegenseite.
class FirmenkundenScreen extends ConsumerStatefulWidget {
  const FirmenkundenScreen({super.key});

  @override
  ConsumerState<FirmenkundenScreen> createState() => _FirmenkundenScreenState();
}

class _FirmenkundenScreenState extends ConsumerState<FirmenkundenScreen> {
  List<Map<String, dynamic>> _firmen = const [];
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
      // Direkt auf die Tabelle: Die Zeilensicherheit aus 0117 lässt
      // `businesses.manage` alles sehen, und für eine reine Liste braucht es
      // keine eigene Funktion. Die Kennzahlen je Firma kommen erst im Detail
      // — sie über alle Firmen zu rechnen wäre eine Abfrage je Zeile.
      final rows = await client
          .from('businesses')
          .select('id, name, legal_form, status, billing_city, created_at')
          .isFilter('deleted_at', null)
          .order('name');
      _firmen = (rows as List).cast<Map<String, dynamic>>();
    } catch (e) {
      _fehler = e.toString();
      _firmen = const [];
    } finally {
      if (mounted) setState(() => _laedt = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const HeroAppBar(title: Text('Firmenkunden')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _anlegen,
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        icon: const Icon(Icons.domain_add_outlined),
        label: const Text('Firma anlegen'),
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
              title: 'Firmenkunden',
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Unternehmen, deren Beschäftigte an einem Automaten auf dem '
              'eigenen Gelände auf Firmenrechnung einkaufen.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
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
              _Hinweis(
                text: 'Die Liste liess sich nicht laden: $_fehler',
                farbe: AppColors.statusCritical,
                icon: Icons.error_outline,
              )
            else if (_firmen.isEmpty)
              const _NochKeine()
            else
              for (final f in _firmen) ...[
                _FirmenKarte(
                  firma: f,
                  onTap: () async {
                    await Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => FirmenkundeDetailScreen(
                          firmaId: '${f['id']}',
                          name: '${f['name']}',
                        ),
                      ),
                    );
                    await _laden();
                  },
                ),
                const SizedBox(height: AppSpacing.s3),
              ],
          ],
        ),
      ),
    );
  }

  Future<void> _anlegen() async {
    final werte = await firmaFormularOeffnen(context);
    if (werte == null || !mounted) return;

    try {
      final client = ref.read(supabaseClientProvider);
      await client.rpc(
        'business_create',
        params: {
          'p_name': werte['name'],
          'p_legal_form': werte['legal_form'],
          'p_billing_street': werte['billing_street'],
          'p_billing_zip': werte['billing_zip'],
          'p_billing_city': werte['billing_city'],
          'p_billing_email': werte['billing_email'],
          'p_tax_number': werte['tax_number'],
          'p_vat_id': werte['vat_id'],
        },
      );
      await _laden();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Firma angelegt')),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: AppColors.statusCritical,
          content: Text(firmenFehlertext(e)),
        ),
      );
    }
  }
}

/// Datenbankmeldungen in Sätze übersetzen, die etwas erklären.
///
/// An einer Stelle, weil beide Bildschirme dieselben Fehler bekommen können.
String firmenFehlertext(Object e) {
  final s = e.toString();
  if (s.contains('Keine Berechtigung, Firmenkunden anzulegen')) {
    return 'Dafür fehlt die Berechtigung „businesses.manage".';
  }
  if (s.contains('bereits Mitglied')) {
    return 'Diese Person ist in dieser Firma schon aktives Mitglied.';
  }
  if (s.contains('letzte Administrator')) {
    return 'Das ist der letzte Administrator dieser Firma. Erst einen '
        'weiteren benennen, dann ändern.';
  }
  if (s.contains('kein Mitglied')) {
    return 'Ein Budget lässt sich nur für Mitglieder dieser Firma setzen.';
  }
  if (s.contains('Firmenname fehlt')) {
    return 'Der Firmenname braucht mindestens zwei Zeichen.';
  }
  if (s.contains('Keine Berechtigung, Firmenkunden zu ändern') ||
      s.contains('ändert nur Bördesnack24')) {
    return 'Stammdaten eines Firmenkunden ändert nur die Verwaltung '
        '(Berechtigung „businesses.manage").';
  }
  if (s.contains('Unbekanntes Feld') || s.contains('Unbekannter Status')) {
    return 'Diese Angabe kennt die Datenbank nicht: $s';
  }
  if (s.contains('kein sevDesk-Kontakt hinterlegt')) {
    return 'Für diese Firma fehlt die sevDesk-Kontaktnummer. Trage sie unter '
        'Stammdaten ein — ohne sie lässt sich dort keine Rechnung '
        'adressieren.';
  }
  if (s.contains('Rechnungsanschrift des Firmenkunden ist unvollständig')) {
    return 'Die Rechnungsanschrift ist unvollständig (Straße, PLZ, Ort). '
        'Ohne sie entsteht keine ordnungsgemäße Rechnung nach § 14 UStG.';
  }
  if (s.contains('42501') || s.contains('row-level security')) {
    return 'Dafür fehlt die Berechtigung.';
  }
  return 'Fehlgeschlagen: $s';
}

// ═══════════════════════════════════════════════════════════════════════════

class _FirmenKarte extends StatelessWidget {
  const _FirmenKarte({required this.firma, required this.onTap});

  final Map<String, dynamic> firma;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final status = '${firma['status']}';
    final ort = '${firma['billing_city'] ?? ''}'.trim();
    return Semantics(
      button: true,
      label: 'Firmenkunde ${firma['name']} öffnen',
      child: AppCard(
        onTap: onTap,
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '${firma['name']}',
                    style: AppTypography.body(
                      size: 15,
                      weight: FontWeight.w700,
                      color: AppColors.ink,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    [
                      if ('${firma['legal_form'] ?? ''}'.trim().isNotEmpty)
                        '${firma['legal_form']}',
                      if (ort.isNotEmpty) ort,
                    ].join(' · '),
                    style: AppTypography.body(
                      size: 12,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
              ),
            ),
            if (status != 'active')
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: AppColors.textMuted.withValues(alpha: 0.12),
                  borderRadius: BorderRadius.circular(999),
                ),
                child: Text(
                  status,
                  style: AppTypography.body(
                    size: 10,
                    color: AppColors.textMuted,
                  ),
                ),
              ),
            const SizedBox(width: AppSpacing.s2),
            const Icon(Icons.chevron_right, color: AppColors.textMuted),
          ],
        ),
      ),
    );
  }
}

class _NochKeine extends StatelessWidget {
  const _NochKeine();

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Column(
        children: [
          const Icon(
            Icons.domain_outlined,
            size: 32,
            color: AppColors.textMuted,
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Noch kein Firmenkunde',
            style: AppTypography.body(
              size: 14,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            'Ein Unternehmen wird hier angelegt, nachdem der Vertrag steht. '
            'Danach lädst Du die erste Person als Administrator ein — ab da '
            'verwaltet die Firma ihre Leute selbst.',
            textAlign: TextAlign.center,
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
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
// Formular zum Anlegen und Ändern
// ═══════════════════════════════════════════════════════════════════════════

/// Öffnet das Stammdatenformular.
///
/// Ohne `vorgabe` legt es an, mit `vorgabe` ändert es. Zurück kommen in
/// beiden Fällen Spaltennamen (`name`, `billing_city`, …) — beim Ändern nur
/// die Felder, die der Benutzer wirklich angefasst hat. Das passt zu
/// `business_update`: Was nicht mitkommt, bleibt stehen; ein mitgeschicktes
/// `null` leert das Feld.
Future<Map<String, dynamic>?> firmaFormularOeffnen(
  BuildContext context, {
  Map<String, dynamic>? vorgabe,
}) {
  return showModalBottomSheet<Map<String, dynamic>>(
    context: context,
    isScrollControlled: true,
    backgroundColor: AppColors.surfaceCard,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
    ),
    builder: (_) => _FirmaFormular(vorgabe: vorgabe),
  );
}

class _FirmaFormular extends StatefulWidget {
  const _FirmaFormular({this.vorgabe});

  final Map<String, dynamic>? vorgabe;

  @override
  State<_FirmaFormular> createState() => _FirmaFormularState();
}

class _FirmaFormularState extends State<_FirmaFormular> {
  late final Map<String, TextEditingController> _felder = {
    for (final spalte in const [
      'name',
      'legal_form',
      'billing_street',
      'billing_zip',
      'billing_city',
      'billing_email',
      'tax_number',
      'vat_id',
      'sevdesk_contact_id',
    ])
      spalte: TextEditingController(
        text: '${widget.vorgabe?[spalte] ?? ''}',
      ),
  };

  bool get _aendern => widget.vorgabe != null;

  TextEditingController _c(String spalte) => _felder[spalte]!;

  @override
  void dispose() {
    for (final c in _felder.values) {
      c.dispose();
    }
    super.dispose();
  }

  String? _wert(String spalte) {
    final t = _c(spalte).text.trim();
    return t.isEmpty ? null : t;
  }

  /// Beim Anlegen alles, beim Ändern nur das Geänderte.
  ///
  /// Der Unterschied ist nicht Kosmetik: `business_update` fasst nur die
  /// übergebenen Schlüssel an. Wer nur die sevDesk-Nummer einträgt, soll
  /// nicht nebenbei die Anschrift neu schreiben — und ein Feld, das ein
  /// späterer Bildschirm gar nicht kennt, bleibt unangetastet.
  Map<String, dynamic> _ergebnis() {
    final werte = <String, dynamic>{};
    for (final spalte in _felder.keys) {
      final neu = _wert(spalte);
      if (!_aendern) {
        if (spalte == 'sevdesk_contact_id') continue;
        werte[spalte] = neu;
        continue;
      }
      final alt = '${widget.vorgabe?[spalte] ?? ''}'.trim();
      if (neu != (alt.isEmpty ? null : alt)) werte[spalte] = neu;
    }
    return werte;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
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
              _aendern ? 'Stammdaten ändern' : 'Firma anlegen',
              style: AppTypography.body(
                size: 18,
                weight: FontWeight.w700,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              _aendern
                  ? 'Diese Angaben stehen auf der Rechnung. Geändert wird '
                      'nur, was Du hier anfasst.'
                  : 'Die Rechnungsangaben brauchst Du erst zur ersten '
                      'Abrechnung — Du kannst sie später ergänzen.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            TextField(
              key: const ValueKey('feld_name'),
              controller: _c('name'),
              autofocus: !_aendern,
              textCapitalization: TextCapitalization.words,
              decoration: const InputDecoration(
                labelText: 'Firmenname',
                hintText: 'Muster GmbH',
              ),
            ),
            TextField(
              key: const ValueKey('feld_legal_form'),
              controller: _c('legal_form'),
              decoration: const InputDecoration(
                labelText: 'Rechtsform (freiwillig)',
                hintText: 'GmbH',
              ),
            ),
            TextField(
              key: const ValueKey('feld_billing_street'),
              controller: _c('billing_street'),
              decoration:
                  const InputDecoration(labelText: 'Straße und Hausnummer'),
            ),
            Row(
              children: [
                SizedBox(
                  width: 110,
                  child: TextField(
                    key: const ValueKey('feld_billing_zip'),
                    controller: _c('billing_zip'),
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(labelText: 'PLZ'),
                  ),
                ),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: TextField(
                    key: const ValueKey('feld_billing_city'),
                    controller: _c('billing_city'),
                    textCapitalization: TextCapitalization.words,
                    decoration: const InputDecoration(labelText: 'Ort'),
                  ),
                ),
              ],
            ),
            TextField(
              key: const ValueKey('feld_billing_email'),
              controller: _c('billing_email'),
              keyboardType: TextInputType.emailAddress,
              decoration: const InputDecoration(
                labelText: 'Rechnungs-E-Mail',
              ),
            ),
            TextField(
              key: const ValueKey('feld_tax_number'),
              controller: _c('tax_number'),
              decoration: const InputDecoration(labelText: 'Steuernummer'),
            ),
            TextField(
              key: const ValueKey('feld_vat_id'),
              controller: _c('vat_id'),
              decoration: const InputDecoration(labelText: 'USt-IdNr.'),
            ),
            if (_aendern) ...[
              const SizedBox(height: AppSpacing.s4),
              Text(
                'sevDesk',
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
              TextField(
                key: const ValueKey('feld_sevdesk_contact_id'),
                controller: _c('sevdesk_contact_id'),
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(
                  labelText: 'Kontaktnummer in sevDesk',
                  hintText: 'z. B. 1000123',
                ),
              ),
              const SizedBox(height: AppSpacing.s2),
              Text(
                'Die Nummer des Kontakts, den sevDesk für diese Firma führt. '
                'Ohne sie lässt sich dort keine Rechnung adressieren — das '
                'Anfordern bricht vorher ab, statt eine zweite Kundenakte zu '
                'erzeugen. Zu finden in sevDesk unter Kontakte in der '
                'Adresszeile des Browsers.',
                style: AppTypography.body(size: 11, color: AppColors.textMuted),
              ),
            ],
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
                    if (_c('name').text.trim().length < 2) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text(
                            'Der Firmenname braucht mindestens zwei Zeichen.',
                          ),
                        ),
                      );
                      return;
                    }
                    final werte = _ergebnis();
                    if (_aendern && werte.isEmpty) {
                      Navigator.pop(context);
                      return;
                    }
                    Navigator.pop(context, werte);
                  },
                  child: Text(_aendern ? 'Speichern' : 'Anlegen'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// Betrag in der Gesellschafter-Sicht.
///
/// Aus unserer Sicht ist alles, was ein Firmenkunde kauft, Umsatz — also
/// grün und ohne Vorzeichen. Für den Arbeitgeber selbst wäre derselbe Betrag
/// eine Ausgabe; das ist die Sicht, die Lovable im Firmenportal baut, nicht
/// diese hier. Über `BetragText`, damit die Hausregel an einer Stelle bleibt.
class UmsatzBetrag extends StatelessWidget {
  const UmsatzBetrag({super.key, required this.betrag, this.size = 15});

  final double betrag;
  final double size;

  @override
  Widget build(BuildContext context) => BetragText(
        betrag: betrag,
        direction: 'revenue',
        accountCode: '',
        size: size,
      );
}

/// Kleine Hilfe für beide Bildschirme.
double zuDouble(dynamic v) {
  if (v == null) return 0;
  if (v is num) return v.toDouble();
  return double.tryParse(v.toString()) ?? 0;
}

String datumKurz(dynamic v) {
  final d = DateTime.tryParse('${v ?? ''}');
  return d == null ? '—' : Formatters.date(d);
}

/// Token in die Zwischenablage — er ist nur einmal zu sehen.
Future<void> tokenKopieren(BuildContext context, String token) async {
  await Clipboard.setData(ClipboardData(text: token));
  if (!context.mounted) return;
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(content: Text('Einladungslink kopiert')),
  );
}
