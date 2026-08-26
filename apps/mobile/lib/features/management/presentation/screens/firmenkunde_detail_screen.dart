import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import 'firmenkunden_screen.dart';
import 'firmenabrechnung_print.dart'
    if (dart.library.js_interop) 'firmenabrechnung_print_web.dart';

/// Ein Firmenkunde im Einzelnen: Kennzahlen, Mitglieder, Budget, Abrechnung.
///
/// Alle Zahlen kommen aus `business_dashboard` bzw. `business_statement` —
/// gerechnet wird auf dem Server. Zwei Clients, die verschieden runden, wären
/// zwei Wahrheiten auf einer Rechnung.
class FirmenkundeDetailScreen extends ConsumerStatefulWidget {
  const FirmenkundeDetailScreen({
    super.key,
    required this.firmaId,
    required this.name,
  });

  final String firmaId;
  final String name;

  @override
  ConsumerState<FirmenkundeDetailScreen> createState() =>
      _FirmenkundeDetailScreenState();
}

const _firma = 'Bördesnack24 GbR';
const _steuernummer = '102/178/01635';
const _ustIdNr = 'DE 458804058';

class _FirmenkundeDetailScreenState
    extends ConsumerState<FirmenkundeDetailScreen> {
  Map<String, dynamic>? _daten;
  bool _laedt = false;
  String? _fehler;

  late DateTime _monat = DateTime(DateTime.now().year, DateTime.now().month);

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
        'business_dashboard',
        params: {
          'p_business': widget.firmaId,
          'p_von': _iso(DateTime(_monat.year, _monat.month, 1)),
          'p_bis': _iso(DateTime(_monat.year, _monat.month + 1, 0)),
        },
      );
      _daten = Map<String, dynamic>.from(ergebnis as Map);
    } catch (e) {
      _fehler = e.toString();
      _daten = null;
    } finally {
      if (mounted) setState(() => _laedt = false);
    }
  }

  Map<String, dynamic> get _kennzahlen =>
      Map<String, dynamic>.from((_daten?['kennzahlen'] as Map?) ?? const {});

  List<Map<String, dynamic>> get _mitglieder =>
      ((_daten?['mitglieder'] as List?) ?? const [])
          .cast<Map<String, dynamic>>();

  List<Map<String, dynamic>> get _einladungen =>
      ((_daten?['einladungen'] as List?) ?? const [])
          .cast<Map<String, dynamic>>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: HeroAppBar(title: Text(widget.name)),
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
            _MonatsWahl(
              monat: _monat,
              onWahl: (m) {
                setState(() => _monat = m);
                _laden();
              },
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
              Text(
                'Nicht geladen: ${firmenFehlertext(_fehler!)}',
                style: AppTypography.body(
                  size: 13,
                  color: AppColors.statusCritical,
                ),
              )
            else ...[
              _Kennzahlen(werte: _kennzahlen),
              const SizedBox(height: AppSpacing.s5),
              _Abschnitt(
                'Mitglieder',
                aktion: TextButton.icon(
                  onPressed: _einladen,
                  icon: const Icon(Icons.person_add_alt, size: 18),
                  label: const Text('Einladen'),
                ),
              ),
              if (_mitglieder.isEmpty)
                const _Leerzeile(
                  'Noch niemand. Lade die erste Person als Administrator ein '
                  '— ab da verwaltet die Firma ihre Leute selbst.',
                )
              else
                for (final m in _mitglieder) ...[
                  _MitgliedKarte(
                    mitglied: m,
                    onBudget: () => _budget(m),
                    onRolle: () => _rolle(m),
                  ),
                  const SizedBox(height: AppSpacing.s2),
                ],
              if (_einladungen.isNotEmpty) ...[
                const SizedBox(height: AppSpacing.s5),
                const _Abschnitt('Offene Einladungen'),
                for (final e in _einladungen) ...[
                  _EinladungKarte(
                    einladung: e,
                    onZurueckziehen: () => _zurueckziehen(e),
                  ),
                  const SizedBox(height: AppSpacing.s2),
                ],
              ],
              const SizedBox(height: AppSpacing.s5),
              const _Abschnitt('Standardbudget'),
              _StandardBudget(
                mitglieder: _mitglieder,
                onSetzen: () => _budget(null),
              ),
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
        if (firmenabrechnungDruckMoeglich)
          HeroAction(
            icon: Icons.picture_as_pdf,
            tooltip: 'Abrechnung als PDF',
            iconColor: AppColors.statusCritical,
            borderColor: AppColors.statusCritical,
            onTap: _abrechnungDrucken,
          ),
      ],
    );
  }

  Future<void> _abrechnungDrucken() async {
    try {
      final client = ref.read(supabaseClientProvider);
      final ergebnis = await client.rpc(
        'business_statement',
        params: {
          'p_business': widget.firmaId,
          'p_jahr': _monat.year,
          'p_monat': _monat.month,
        },
      );
      await printFirmenabrechnung(
        daten: Map<String, dynamic>.from(ergebnis as Map),
        firma: _firma,
        steuernummer: _steuernummer,
        ustIdNr: _ustIdNr,
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
          content: Text(firmenFehlertext(e)),
        ),
      );
    }
  }

  Future<void> _einladen() async {
    final eingabe = await showDialog<Map<String, String>>(
      context: context,
      builder: (_) => const _EinladenDialog(),
    );
    if (eingabe == null || !mounted) return;

    try {
      final client = ref.read(supabaseClientProvider);
      final antwort = await client.rpc(
        'business_invite',
        params: {
          'p_business': widget.firmaId,
          'p_email': eingabe['email'],
          'p_role': eingabe['role'],
        },
      );
      final map = Map<String, dynamic>.from(antwort as Map);
      await _laden();
      if (!mounted) return;
      // Der Token steht NUR in dieser Antwort. Deshalb zeigt der Dialog ihn
      // sofort und bietet das Kopieren an — ein zweites Mal gibt es ihn nicht.
      await showDialog<void>(
        context: context,
        builder: (d) => _TokenDialog(
          email: '${map['email']}',
          token: '${map['token']}',
          bis: '${map['expires_at']}',
        ),
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

  Future<void> _zurueckziehen(Map<String, dynamic> e) async {
    await _rufe(
      'business_invitation_revoke',
      {'p_invitation': e['id']},
      'Einladung zurückgezogen',
    );
  }

  Future<void> _rolle(Map<String, dynamic> m) async {
    final wahl = await showDialog<Map<String, String?>>(
      context: context,
      builder: (_) => _RolleDialog(
        name: '${m['name'] ?? m['email']}',
        rolle: '${m['role']}',
        status: '${m['status']}',
      ),
    );
    if (wahl == null || !mounted) return;
    await _rufe(
      'business_member_set',
      {
        'p_business': widget.firmaId,
        'p_profile': m['profile_id'],
        'p_role': wahl['role'],
        'p_status': wahl['status'],
      },
      'Mitglied geändert',
    );
  }

  /// `mitglied == null` setzt das Standardbudget der Firma.
  Future<void> _budget(Map<String, dynamic>? mitglied) async {
    final bisher = mitglied == null
        ? _standard()
        : (mitglied['budget'] as Map?)?.cast<String, dynamic>();
    final werte = await showDialog<Map<String, dynamic>>(
      context: context,
      builder: (_) => _BudgetDialog(
        titel: mitglied == null
            ? 'Standardbudget der Firma'
            : 'Budget für ${mitglied['name'] ?? mitglied['email']}',
        bisher: bisher,
      ),
    );
    if (werte == null || !mounted) return;
    await _rufe(
      'business_budget_set',
      {
        'p_business': widget.firmaId,
        'p_profile': mitglied?['profile_id'],
        ...werte,
      },
      'Budget gesetzt',
    );
  }

  /// Das Standardbudget steht in jedem Mitglied mit `persoenlich = false`.
  /// Gibt es kein Mitglied, ist es von hier aus nicht sichtbar — dann wird
  /// eben neu gesetzt.
  Map<String, dynamic>? _standard() {
    for (final m in _mitglieder) {
      final b = (m['budget'] as Map?)?.cast<String, dynamic>();
      if (b != null && b['persoenlich'] == false) return b;
    }
    return null;
  }
}

String _iso(DateTime d) =>
    '${d.year.toString().padLeft(4, '0')}-'
    '${d.month.toString().padLeft(2, '0')}-'
    '${d.day.toString().padLeft(2, '0')}';

// ═══════════════════════════════════════════════════════════════════════════
// Anzeige
// ═══════════════════════════════════════════════════════════════════════════

class _MonatsWahl extends StatelessWidget {
  const _MonatsWahl({required this.monat, required this.onWahl});

  final DateTime monat;
  final ValueChanged<DateTime> onWahl;

  static const _namen = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
  ];

  @override
  Widget build(BuildContext context) {
    final jetzt = DateTime(DateTime.now().year, DateTime.now().month);
    return Row(
      children: [
        IconButton(
          onPressed: () => onWahl(DateTime(monat.year, monat.month - 1)),
          icon: const Icon(Icons.chevron_left),
          tooltip: 'Vorheriger Monat',
        ),
        Expanded(
          child: Text(
            '${_namen[monat.month - 1]} ${monat.year}',
            textAlign: TextAlign.center,
            style: AppTypography.body(
              size: 15,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
        ),
        IconButton(
          // Kein Blick in die Zukunft: Dort steht ohnehin nichts.
          onPressed: monat.isBefore(jetzt)
              ? () => onWahl(DateTime(monat.year, monat.month + 1))
              : null,
          icon: const Icon(Icons.chevron_right),
          tooltip: 'Nächster Monat',
        ),
      ],
    );
  }
}

class _Kennzahlen extends StatelessWidget {
  const _Kennzahlen({required this.werte});

  final Map<String, dynamic> werte;

  int _z(String k) => (werte[k] as num?)?.toInt() ?? 0;
  double _b(String k) => zuDouble(werte[k]);

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s4,
        vertical: AppSpacing.s2,
      ),
      child: Column(
        children: [
          _Zeile('Aktive Mitglieder', '${_z('mitglieder_aktiv')}'),
          const _Trenner(),
          _Zeile('Offene Einladungen', '${_z('einladungen_offen')}'),
          const _Trenner(),
          _Zeile('Freigegebene Standorte', '${_z('standorte')}'),
          const _Trenner(),
          _Zeile('Käufe im Monat', '${_z('kaeufe')}'),
          const _Trenner(),
          _Zeile('Umsatz brutto', null, betrag: _b('brutto')),
          const _Trenner(),
          _Zeile('davon trägt die Firma', null, betrag: _b('arbeitgeber')),
          const _Trenner(),
          _Zeile(
            'davon tragen die Beschäftigten',
            null,
            betrag: _b('mitarbeiter'),
          ),
        ],
      ),
    );
  }
}

class _Zeile extends StatelessWidget {
  const _Zeile(this.label, this.wert, {this.betrag});

  final String label;
  final String? wert;
  final double? betrag;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: '$label: ${wert ?? Formatters.euro(betrag ?? 0)}',
      excludeSemantics: true,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: AppSpacing.s3),
        child: Row(
          children: [
            Expanded(
              child: Text(
                label,
                style: AppTypography.body(
                  size: 13,
                  color: AppColors.textDefault,
                ),
              ),
            ),
            const SizedBox(width: AppSpacing.s3),
            if (betrag != null)
              UmsatzBetrag(betrag: betrag!, size: 15)
            else
              Text(
                wert ?? '',
                style: AppTypography.display(
                  size: 18,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
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

class _Abschnitt extends StatelessWidget {
  const _Abschnitt(this.titel, {this.aktion});

  final String titel;
  final Widget? aktion;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s2),
      child: Row(
        children: [
          Expanded(
            child: Text(
              titel.toUpperCase(),
              style: AppTypography.body(size: 11, color: AppColors.brandText)
                  .copyWith(letterSpacing: 1.2),
            ),
          ),
          if (aktion != null) aktion!,
        ],
      ),
    );
  }
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

class _MitgliedKarte extends StatelessWidget {
  const _MitgliedKarte({
    required this.mitglied,
    required this.onBudget,
    required this.onRolle,
  });

  final Map<String, dynamic> mitglied;
  final VoidCallback onBudget;
  final VoidCallback onRolle;

  @override
  Widget build(BuildContext context) {
    final budget = (mitglied['budget'] as Map?)?.cast<String, dynamic>();
    final istAdmin = '${mitglied['role']}' == 'admin';
    final status = '${mitglied['status']}';

    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  '${mitglied['name'] ?? mitglied['email']}',
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                ),
              ),
              if (istAdmin)
                const _Marke(text: 'Administrator', farbe: AppColors.brandText),
              if (status != 'active') ...[
                const SizedBox(width: 6),
                _Marke(text: status, farbe: AppColors.statusWarning),
              ],
            ],
          ),
          const SizedBox(height: 2),
          Text(
            '${mitglied['email']}',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            children: [
              Expanded(
                child: Text(
                  '${(mitglied['kaeufe'] as num?)?.toInt() ?? 0} Käufe',
                  style:
                      AppTypography.body(size: 12, color: AppColors.textMuted),
                ),
              ),
              UmsatzBetrag(betrag: zuDouble(mitglied['brutto']), size: 14),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            budget == null
                ? 'Kein Budget — die Firma trägt den vollen Betrag.'
                : _budgetText(budget),
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: onBudget,
                  icon: const Icon(Icons.euro_symbol, size: 16),
                  label: const Text('Budget'),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: onRolle,
                  icon: const Icon(Icons.manage_accounts_outlined, size: 16),
                  label: const Text('Rolle'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  static String _budgetText(Map<String, dynamic> b) {
    final teile = <String>[];
    final zuschuss = zuDouble(b['zuschuss']);
    if (zuschuss < 100) {
      teile.add('${zuschuss.toStringAsFixed(0)} % Zuschuss');
    }
    if (b['monatslimit'] != null) {
      teile.add('${Formatters.euro(zuDouble(b['monatslimit']))} im Monat');
    }
    if (b['tageslimit'] != null) {
      teile.add('${Formatters.euro(zuDouble(b['tageslimit']))} am Tag');
    }
    final herkunft = b['persoenlich'] == true ? 'persönlich' : 'Standard';
    return teile.isEmpty
        ? 'Volle Übernahme ($herkunft)'
        : '${teile.join(' · ')} ($herkunft)';
  }
}

class _EinladungKarte extends StatelessWidget {
  const _EinladungKarte({
    required this.einladung,
    required this.onZurueckziehen,
  });

  final Map<String, dynamic> einladung;
  final VoidCallback onZurueckziehen;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '${einladung['email']}',
                  style: AppTypography.body(size: 13, color: AppColors.ink),
                ),
                Text(
                  'als ${einladung['role']} · gültig bis '
                  '${datumKurz(einladung['expires_at'])}',
                  style:
                      AppTypography.body(size: 11, color: AppColors.textMuted),
                ),
              ],
            ),
          ),
          TextButton(
            onPressed: onZurueckziehen,
            child: const Text(
              'Zurückziehen',
              style: TextStyle(color: AppColors.statusCritical),
            ),
          ),
        ],
      ),
    );
  }
}

class _StandardBudget extends StatelessWidget {
  const _StandardBudget({required this.mitglieder, required this.onSetzen});

  final List<Map<String, dynamic>> mitglieder;
  final VoidCallback onSetzen;

  @override
  Widget build(BuildContext context) {
    Map<String, dynamic>? standard;
    for (final m in mitglieder) {
      final b = (m['budget'] as Map?)?.cast<String, dynamic>();
      if (b != null && b['persoenlich'] == false) {
        standard = b;
        break;
      }
    }
    return AppCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            standard == null
                ? 'Kein Standardbudget. Die Firma trägt jeden Einkauf '
                    'vollständig, solange nichts anderes gesetzt ist.'
                : _MitgliedKarte._budgetText(standard),
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          OutlinedButton.icon(
            onPressed: onSetzen,
            icon: const Icon(Icons.tune, size: 16),
            label: const Text('Standardbudget setzen'),
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
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
        decoration: BoxDecoration(
          color: farbe.withValues(alpha: 0.14),
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: farbe.withValues(alpha: 0.4)),
        ),
        child: Text(text, style: AppTypography.body(size: 10, color: farbe)),
      );
}

// ═══════════════════════════════════════════════════════════════════════════
// Dialoge
// ═══════════════════════════════════════════════════════════════════════════

class _EinladenDialog extends StatefulWidget {
  const _EinladenDialog();
  @override
  State<_EinladenDialog> createState() => _EinladenDialogState();
}

class _EinladenDialogState extends State<_EinladenDialog> {
  final _mail = TextEditingController();
  String _rolle = 'member';

  @override
  void dispose() {
    _mail.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Person einladen'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          TextField(
            controller: _mail,
            autofocus: true,
            keyboardType: TextInputType.emailAddress,
            decoration: const InputDecoration(
              labelText: 'E-Mail-Adresse',
              helperText: 'Nur mit genau dieser Adresse annehmbar',
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          DropdownButtonFormField<String>(
            initialValue: _rolle,
            decoration: const InputDecoration(labelText: 'Rolle'),
            items: const [
              DropdownMenuItem(value: 'member', child: Text('Mitglied')),
              DropdownMenuItem(value: 'admin', child: Text('Administrator')),
            ],
            onChanged: (v) => setState(() => _rolle = v ?? 'member'),
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
            final m = _mail.text.trim().toLowerCase();
            if (!m.contains('@') || m.length < 4) {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Bitte eine E-Mail-Adresse.')),
              );
              return;
            }
            Navigator.pop(context, {'email': m, 'role': _rolle});
          },
          child: const Text('Einladen'),
        ),
      ],
    );
  }
}

/// Zeigt den Einladungs-Token — und sagt dazu, dass er nur einmal zu sehen ist.
class _TokenDialog extends StatelessWidget {
  const _TokenDialog({
    required this.email,
    required this.token,
    required this.bis,
  });

  final String email;
  final String token;
  final String bis;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Einladung erstellt'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Für $email, gültig bis ${datumKurz(bis)}.',
            style: AppTypography.body(size: 13),
          ),
          const SizedBox(height: AppSpacing.s3),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(AppSpacing.s3),
            decoration: BoxDecoration(
              color: AppColors.surfaceAlt,
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: AppColors.borderSubtle),
            ),
            child: SelectableText(
              token,
              style: const TextStyle(fontFamily: 'monospace', fontSize: 11),
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Diesen Code gibt es nur jetzt. In der Datenbank steht er nur '
            'verschlüsselt — wir können ihn nicht noch einmal anzeigen. Geht '
            'er verloren, lädst Du einfach neu ein; die alte Einladung wird '
            'dabei automatisch ungültig.',
            style: AppTypography.body(size: 12, color: AppColors.textMuted),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => tokenKopieren(context, token),
          child: const Text('Kopieren'),
        ),
        FilledButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Fertig'),
        ),
      ],
    );
  }
}

class _RolleDialog extends StatefulWidget {
  const _RolleDialog({
    required this.name,
    required this.rolle,
    required this.status,
  });

  final String name;
  final String rolle;
  final String status;

  @override
  State<_RolleDialog> createState() => _RolleDialogState();
}

class _RolleDialogState extends State<_RolleDialog> {
  late String _rolle = widget.rolle;
  late String _status = widget.status == 'invited' ? 'active' : widget.status;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.name),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          DropdownButtonFormField<String>(
            initialValue: _rolle,
            decoration: const InputDecoration(labelText: 'Rolle'),
            items: const [
              DropdownMenuItem(value: 'member', child: Text('Mitglied')),
              DropdownMenuItem(value: 'admin', child: Text('Administrator')),
            ],
            onChanged: (v) => setState(() => _rolle = v ?? _rolle),
          ),
          const SizedBox(height: AppSpacing.s3),
          DropdownButtonFormField<String>(
            initialValue: _status,
            decoration: const InputDecoration(labelText: 'Status'),
            items: const [
              DropdownMenuItem(value: 'active', child: Text('aktiv')),
              DropdownMenuItem(value: 'suspended', child: Text('gesperrt')),
              DropdownMenuItem(value: 'removed', child: Text('entfernt')),
            ],
            onChanged: (v) => setState(() => _status = v ?? _status),
          ),
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: () =>
              Navigator.pop(context, {'role': _rolle, 'status': _status}),
          child: const Text('Speichern'),
        ),
      ],
    );
  }
}

class _BudgetDialog extends StatefulWidget {
  const _BudgetDialog({required this.titel, required this.bisher});

  final String titel;
  final Map<String, dynamic>? bisher;

  @override
  State<_BudgetDialog> createState() => _BudgetDialogState();
}

class _BudgetDialogState extends State<_BudgetDialog> {
  late final TextEditingController _monat = TextEditingController(
    text: _text(widget.bisher?['monatslimit']),
  );
  late final TextEditingController _tag = TextEditingController(
    text: _text(widget.bisher?['tageslimit']),
  );
  late final TextEditingController _zuschuss = TextEditingController(
    text: widget.bisher == null
        ? '100'
        : zuDouble(widget.bisher!['zuschuss']).toStringAsFixed(0),
  );

  static String _text(dynamic v) =>
      v == null ? '' : zuDouble(v).toStringAsFixed(2).replaceAll('.', ',');

  @override
  void dispose() {
    _monat.dispose();
    _tag.dispose();
    _zuschuss.dispose();
    super.dispose();
  }

  double? _zahl(TextEditingController c) {
    final t = c.text.trim().replaceAll('.', '').replaceAll(',', '.');
    if (t.isEmpty) return null;
    return double.tryParse(t);
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.titel),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Das Budget lädt kein Guthaben auf. Es sagt nur, bis zu welchem '
              'Betrag die Firma den Einkauf trägt. Leere Felder bedeuten: '
              'keine Grenze.',
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s3),
            TextField(
              controller: _zuschuss,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Zuschuss in Prozent',
                helperText: '100 = die Firma trägt alles',
              ),
            ),
            TextField(
              controller: _monat,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(
                labelText: 'Höchstbetrag je Monat in Euro',
              ),
            ),
            TextField(
              controller: _tag,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(
                labelText: 'Höchstbetrag je Tag in Euro',
              ),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Abbrechen'),
        ),
        FilledButton(
          onPressed: () {
            final z = _zahl(_zuschuss);
            if (z == null || z < 0 || z > 100) {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Der Zuschuss liegt zwischen 0 und 100.'),
                ),
              );
              return;
            }
            Navigator.pop(context, {
              'p_monatslimit': _zahl(_monat),
              'p_tageslimit': _zahl(_tag),
              'p_zuschuss': z,
            });
          },
          child: const Text('Speichern'),
        ),
      ],
    );
  }
}
