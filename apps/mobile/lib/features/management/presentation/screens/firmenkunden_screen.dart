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
    final werte = await showModalBottomSheet<Map<String, dynamic>>(
      context: context,
      isScrollControlled: true,
      backgroundColor: AppColors.surfaceCard,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (_) => const _FirmaFormular(),
    );
    if (werte == null || !mounted) return;

    try {
      final client = ref.read(supabaseClientProvider);
      await client.rpc('business_create', params: werte);
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
                padding:
                    const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
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
// Formular zum Anlegen
// ═══════════════════════════════════════════════════════════════════════════

class _FirmaFormular extends StatefulWidget {
  const _FirmaFormular();

  @override
  State<_FirmaFormular> createState() => _FirmaFormularState();
}

class _FirmaFormularState extends State<_FirmaFormular> {
  final _name = TextEditingController();
  final _rechtsform = TextEditingController();
  final _strasse = TextEditingController();
  final _plz = TextEditingController();
  final _ort = TextEditingController();
  final _mail = TextEditingController();
  final _steuernummer = TextEditingController();
  final _ustId = TextEditingController();

  @override
  void dispose() {
    for (final c in [
      _name,
      _rechtsform,
      _strasse,
      _plz,
      _ort,
      _mail,
      _steuernummer,
      _ustId,
    ]) {
      c.dispose();
    }
    super.dispose();
  }

  String? _leer(TextEditingController c) =>
      c.text.trim().isEmpty ? null : c.text.trim();

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
              'Firma anlegen',
              style: AppTypography.body(
                size: 18,
                weight: FontWeight.w700,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Die Rechnungsangaben brauchst Du erst zur ersten Abrechnung — '
              'Du kannst sie später ergänzen.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            TextField(
              controller: _name,
              autofocus: true,
              textCapitalization: TextCapitalization.words,
              decoration: const InputDecoration(
                labelText: 'Firmenname',
                hintText: 'Muster GmbH',
              ),
            ),
            TextField(
              controller: _rechtsform,
              decoration: const InputDecoration(
                labelText: 'Rechtsform (freiwillig)',
                hintText: 'GmbH',
              ),
            ),
            TextField(
              controller: _strasse,
              decoration:
                  const InputDecoration(labelText: 'Straße und Hausnummer'),
            ),
            Row(
              children: [
                SizedBox(
                  width: 110,
                  child: TextField(
                    controller: _plz,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(labelText: 'PLZ'),
                  ),
                ),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: TextField(
                    controller: _ort,
                    textCapitalization: TextCapitalization.words,
                    decoration: const InputDecoration(labelText: 'Ort'),
                  ),
                ),
              ],
            ),
            TextField(
              controller: _mail,
              keyboardType: TextInputType.emailAddress,
              decoration: const InputDecoration(
                labelText: 'Rechnungs-E-Mail',
              ),
            ),
            TextField(
              controller: _steuernummer,
              decoration: const InputDecoration(labelText: 'Steuernummer'),
            ),
            TextField(
              controller: _ustId,
              decoration: const InputDecoration(labelText: 'USt-IdNr.'),
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
                    if (_name.text.trim().length < 2) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text(
                            'Der Firmenname braucht mindestens zwei Zeichen.',
                          ),
                        ),
                      );
                      return;
                    }
                    Navigator.pop(context, {
                      'p_name': _name.text.trim(),
                      'p_legal_form': _leer(_rechtsform),
                      'p_billing_street': _leer(_strasse),
                      'p_billing_zip': _leer(_plz),
                      'p_billing_city': _leer(_ort),
                      'p_billing_email': _leer(_mail),
                      'p_tax_number': _leer(_steuernummer),
                      'p_vat_id': _leer(_ustId),
                    });
                  },
                  child: const Text('Anlegen'),
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
