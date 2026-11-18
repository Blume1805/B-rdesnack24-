import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import 'kopf_kachel.dart';
import 'marken_kopf_bild.dart';

/// Seitenkopf aller Unterseiten (Referenzbild Philipp 18.11.2026): oben das
/// Markenbild über die volle Breite, darunter mittig die [KopfKachel] mit
/// Symbol, Name und Kurzbeschreibung der Funktion; Knöpfe der Seite rechts
/// in der Kachel, Zurück als runder Knopf oben links auf dem Bild.
///
/// Gleiche Parameter wie früher (`title`, `actions`, `leading`), dazu
/// optional [icon] und [untertitel]. Fehlen sie, kommen sie aus
/// [_funktionen] (gleiche Symbole und Texte wie die Kacheln der
/// Verwaltung). Der Kopf scrollt mit dem Inhalt weg: In [MarkenScaffold]
/// verwenden, nicht als `Scaffold.appBar`.
class HeroAppBar extends StatelessWidget implements PreferredSizeWidget {
  const HeroAppBar({
    super.key,
    this.title,
    this.actions,
    this.leading,
    this.icon,
    this.untertitel,
  });

  final Widget? title;
  final List<Widget>? actions;
  final Widget? leading;
  final IconData? icon;
  final String? untertitel;

  /// Nur noch für Altaufrufe als `appBar`; der Kopf ist höher und gehört in
  /// [MarkenScaffold].
  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  static const _standardSymbol = Icons.article_outlined;

  /// Symbol und Kurzbeschreibung je Seitentitel. Verwaltung: wie die
  /// Kacheln in management_screen.dart. Kundenseiten: nur Symbol, keine
  /// neuen Texte.
  static const Map<String, (IconData, String?)> _funktionen = {
    'Befüllung': (Icons.add_box_outlined, 'Nachfüll-Protokoll'),
    'Temperatur': (Icons.thermostat_outlined, 'HACCP · ≤ 7 °C'),
    'Reinigung': (Icons.cleaning_services_outlined, 'Hygieneplan'),
    'Vernichtung': (Icons.delete_outline, 'MHD / Verderb'),
    'Wartung': (Icons.build_outlined, 'Technik-Protokolle'),
    'Geldentnahme': (Icons.payments_outlined, 'Kassenprotokoll'),
    'Inventur': (Icons.inventory_2_outlined, 'Bestand je Automat'),
    'Inventur — FIFO-Bewegungsreport': (
      Icons.inventory_2_outlined,
      'PDF-Report Zeitraum',
    ),
    'Dokumente': (Icons.folder_outlined, 'Archiv & Versionen'),
    'Mitarbeiter': (Icons.group_outlined, 'Einladen & Schulen'),
    'B2B-Kunden — sevDesk-Export': (
      Icons.download_outlined,
      'sevDesk-CSV-Export',
    ),
    'DATEV-Export': (Icons.receipt_long_outlined, 'Buchungsstapel (CSV)'),
    'Telemetrie / IoT': (Icons.sensors, 'IoT · Live · Slots'),
    'Freigaben': (Icons.rule_folder_outlined, 'Dokumente prüfen'),
    'Kündigungen': (Icons.unsubscribe_outlined, 'Abo-Kündigungen prüfen'),
    'Reklamationen': (Icons.flag_outlined, 'Kundenmeldungen je Kauf'),
    'Zu signieren': (Icons.draw_outlined, 'Belehrungen & Nachweise'),
    'Signaturen': (Icons.draw_outlined, null),
    'Gesellschafter-Freigaben': (Icons.verified_user_outlined, null),
    'Anlagen': (
      Icons.directions_car_outlined,
      'PKW-Kosten · Nutzungseinlage',
    ),
    'Anlage PKW-Kosten': (
      Icons.directions_car_outlined,
      'Kilometersatz und Nutzungseinlage',
    ),
    'KI-Transparenz': (Icons.auto_awesome_outlined, null),
    'Einwilligungen': (Icons.privacy_tip_outlined, null),
    'Meine Kundenkarte': (Icons.qr_code_2, null),
    'Meine Spenden': (Icons.volunteer_activism_outlined, null),
    'Steuerfreier Zuschuss': (Icons.work_outline, null),
    'Stammdaten': (Icons.badge_outlined, null),
    'Unternehmensangaben': (Icons.business_outlined, null),
    'News': (Icons.newspaper_outlined, null),
    'Benachrichtigungen': (Icons.notifications_none, null),
    'Belegarchiv': (Icons.receipt_outlined, null),
    'Status & Belohnungen': (Icons.emoji_events_outlined, null),
    'Deine Vorteile': (Icons.card_giftcard_outlined, null),
    'Mein Abo': (Icons.workspace_premium_outlined, null),
    'Was Du sparst': (Icons.savings_outlined, null),
    'Dein kostenloses Konto': (Icons.person_add_alt_outlined, null),
    'Verträge hier kündigen': (Icons.cancel_outlined, null),
    'Impressum': (Icons.info_outline, null),
    'Datenschutz': (Icons.privacy_tip_outlined, null),
    'AGB': (Icons.gavel_outlined, null),
  };

  String? get _titelText {
    final t = title;
    return t is Text ? t.data : null;
  }

  @override
  Widget build(BuildContext context) {
    final canPop = Navigator.of(context).canPop();
    final eintrag = _funktionen[_titelText];
    final symbol = icon ?? eintrag?.$1 ?? _standardSymbol;
    final unter = untertitel ?? eintrag?.$2;
    final oben = MediaQuery.paddingOf(context).top;

    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(height: oben, color: AppColors.canvas),
        Stack(
          children: [
            const MarkenKopfBild(),
            if (leading != null || canPop)
              Positioned(
                top: AppSpacing.s2,
                left: AppSpacing.s2,
                child: _RunderKnopf(
                  child: leading ??
                      IconButton(
                        tooltip: 'Zurück',
                        icon: const Icon(Icons.arrow_back),
                        onPressed: () => Navigator.of(context).maybePop(),
                      ),
                ),
              ),
          ],
        ),
        const SizedBox(height: AppSpacing.s2),
        KopfKachel(
          symbol: KopfSymbol.funktion(symbol),
          titel: title ?? const SizedBox.shrink(),
          unterzeile: unter == null ? null : Text(unter),
          aktionen: actions ?? const [],
        ),
        const SizedBox(height: AppSpacing.s3),
      ],
    );
  }
}

/// Dunkler runder Hintergrund, damit der Zurück-Knopf auch auf hellen
/// Bildstellen lesbar bleibt.
class _RunderKnopf extends StatelessWidget {
  const _RunderKnopf({required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: BoxDecoration(
        color: AppColors.canvas.withValues(alpha: 0.72),
        shape: BoxShape.circle,
      ),
      child: IconTheme(
        data: const IconThemeData(color: AppColors.onDark),
        child: child,
      ),
    );
  }
}

/// Seitengerüst mit Markenkopf, der beim Scrollen mit dem Inhalt wegrollt
/// (Entscheidung Philipp 18.11.2026, Variante A). Gleiche Parameter wie
/// [Scaffold], soweit die App sie nutzt; [appBar] ist der Kopf (meist
/// [HeroAppBar]) und wird über dem Inhalt angezeigt.
class MarkenScaffold extends StatelessWidget {
  const MarkenScaffold({
    super.key,
    required this.appBar,
    this.body,
    this.floatingActionButton,
    this.floatingActionButtonLocation,
    this.bottomNavigationBar,
    this.backgroundColor,
    this.resizeToAvoidBottomInset,
  });

  final Widget appBar;
  final Widget? body;
  final Widget? floatingActionButton;
  final FloatingActionButtonLocation? floatingActionButtonLocation;
  final Widget? bottomNavigationBar;
  final Color? backgroundColor;
  final bool? resizeToAvoidBottomInset;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: backgroundColor,
      resizeToAvoidBottomInset: resizeToAvoidBottomInset,
      floatingActionButton: floatingActionButton,
      floatingActionButtonLocation: floatingActionButtonLocation,
      bottomNavigationBar: bottomNavigationBar,
      body: NestedScrollView(
        headerSliverBuilder: (context, _) => [
          SliverToBoxAdapter(child: appBar),
        ],
        // Den Abstand zur Statusleiste trägt der Kopf; der Inhalt darunter
        // braucht ihn nicht noch einmal.
        body: MediaQuery.removePadding(
          context: context,
          removeTop: true,
          child: body ?? const SizedBox.shrink(),
        ),
      ),
    );
  }
}
