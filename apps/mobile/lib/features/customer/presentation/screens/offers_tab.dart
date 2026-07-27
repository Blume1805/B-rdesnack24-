import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/feedback.dart';
import '../../../../core/motion/motion.dart';
import '../../../../core/pricing/pricing.dart';
import '../../../../core/motion/brand_refresh.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../../core/utils/formatters.dart';
import '../../domain/entities/donations_news.dart';
import '../../domain/entities/loyalty_status.dart';
import '../../domain/entities/offer.dart';
import '../../domain/entities/product_detail.dart';
import '../controllers/customer_providers.dart';
import '../widgets/customer_anchors.dart';
import 'ai_info_screen.dart';
import 'donations_screen.dart';
import 'subscription_screen.dart';
import 'subscription_value_screen.dart';
import 'news_screen.dart';
import 'product_detail_screen.dart';
import 'rewards_screen.dart';

/// Soll die Suchleiste sichtbar sein?
///
/// Ausgelagert und öffentlich, weil genau diese Regel schon einmal falsch
/// war: beim Öffnen der Tastatur scrollt Flutter das fokussierte Feld in
/// den sichtbaren Bereich. Das zählte als „nach unten gescrollt" und
/// klappte die Suche auf Höhe null — man tippte blind. [focused] hat
/// deshalb Vorrang vor allem anderen.
@visibleForTesting
bool searchBarVisible({
  required bool focused,
  required bool scrollingDown,
  required double offset,
}) {
  if (focused) return true;
  // Ganz oben bleibt die Suche immer stehen.
  return !scrollingDown || offset < 80;
}

class OffersTab extends ConsumerStatefulWidget {
  const OffersTab({super.key});

  @override
  ConsumerState<OffersTab> createState() => _OffersTabState();
}

class _OffersTabState extends ConsumerState<OffersTab> {
  final _scroll = ScrollController();

  /// Sichtbarkeit der Suchleiste: blendet beim Herunterscrollen weich aus
  /// und beim Hochscrollen wieder ein — mehr Platz für die Inhalte, ohne
  /// die Suche zu verstecken.
  bool _searchVisible = true;
  double _lastOffset = 0;

  /// Hat das Suchfeld gerade den Fokus? Dann darf der Scroll-Ausblender
  /// **nie** greifen: beim Öffnen der Tastatur scrollt Flutter das Feld
  /// selbst in den sichtbaren Bereich, das zählte bisher als „nach unten
  /// gescrollt" — und klappte das Feld auf Höhe null zusammen, während man
  /// hineintippte.
  bool _searchFocused = false;

  void _onSearchFocusChange(bool focused) {
    if (!mounted || focused == _searchFocused) return;
    setState(() {
      _searchFocused = focused;
      if (focused) _searchVisible = true;
    });
  }

  @override
  void initState() {
    super.initState();
    _scroll.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scroll
      ..removeListener(_onScroll)
      ..dispose();
    super.dispose();
  }

  void _onScroll() {
    // Solange getippt wird, bleibt die Suche stehen — egal wie gescrollt
    // wird. Sonst verschwindet das Feld unter dem eigenen Finger.
    if (_searchFocused) return;
    final offset = _scroll.offset;
    // Kleine Schwelle: verhindert Flackern bei minimalen Bewegungen.
    if ((offset - _lastOffset).abs() < 12) return;
    final scrollingDown = offset > _lastOffset;
    _lastOffset = offset;
    final visible = searchBarVisible(
      focused: _searchFocused,
      scrollingDown: scrollingDown,
      offset: offset,
    );
    if (visible != _searchVisible) {
      setState(() => _searchVisible = visible);
    }
  }

  @override
  Widget build(BuildContext context) {
    final offers = ref.watch(offersProvider);
    final personals = ref.watch(myPersonalOffersProvider);
    final loyalty = ref.watch(myLoyaltyStatusProvider);
    // Abo-Gating: Basis frei, Vorteile im Abo. Während des Ladens wird
    // nicht gesperrt (kein Lock-Flackern); die Durchsetzung liegt
    // ohnehin zusätzlich serverseitig in den Aktivierungs-RPCs.
    final hasSub = ref.watch(hasSubscriptionProvider).valueOrNull ?? true;

    return BrandRefresh(
      onRefresh: () async {
        ref
          ..invalidate(offersProvider)
          ..invalidate(myPersonalOffersProvider)
          ..invalidate(myLoyaltyStatusProvider)
          ..invalidate(activatedOfferIdsProvider)
          ..invalidate(hasSubscriptionProvider)
          ..invalidate(topProductsProvider('Getränke'))
          ..invalidate(topProductsProvider('Snacks'))
          ..invalidate(topProductsProvider('Eis'));
      },
      child: ListView(
        controller: _scroll,
        // Die Tastatur überdeckt sonst das untere Drittel der Liste. Ihr
        // Inset kommt als zusätzlicher Innenabstand dazu, damit man auch
        // bei offener Tastatur bis zum letzten Element scrollen kann.
        padding: EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8 + MediaQuery.viewInsetsOf(context).bottom,
        ),
        children: [
          // 0. ── Suchleiste (öffnet Produktkatalog-Filter) ────────────
          // Blendet beim Herunterscrollen weich aus (Höhe + Deckkraft),
          // damit die Angebote mehr Platz bekommen. Bei reduzierter
          // Bewegung schaltet AnimatedSize/Opacity auf Duration.zero.
          ClipRect(
            child: AnimatedAlign(
              alignment: Alignment.topCenter,
              heightFactor: _searchVisible ? 1 : 0,
              duration: Motion.duration(context, AppMotion.base),
              curve: AppMotion.easeOut,
              child: AnimatedOpacity(
                opacity: _searchVisible ? 1 : 0,
                duration: Motion.duration(context, AppMotion.fast),
                child: Padding(
                  padding: const EdgeInsets.only(bottom: AppSpacing.s4),
                  child: _ProductSearchBar(
                    onFocusChange: _onSearchFocusChange,
                  ),
                ),
              ),
            ),
          ),

          // 0.1. ── Key-Facts: Rabatt · Punkte · Coupons auf einen Blick ─
          // Die drei Zahlen, die den Kunden interessieren — ohne Lesen
          // erfassbar, direkt über den Angeboten.
          if (hasSub) ...[
            const _KeyFactsRow(),
            const SizedBox(height: AppSpacing.s5),
          ],

          // Ohne Abo: ein Freischalt-Hinweis ersetzt die Abo-Vorteile
          // (Deals, Aktionen, Loyalty, persönliche + Wochenangebote).
          if (!hasSub) ...[
            const _SubscriptionLockCard(),
            const SizedBox(height: AppSpacing.s6),
          ],

          if (hasSub) ...[
            // 0.3. ── Frühstücks-Deal + Feierabend-Deal (Karussell) ───
            const _DealsCarousel(),
            const SizedBox(height: AppSpacing.s5),

            // 0.5. ── Hero-Karussell (rotierende Aktionskarten) ───────
            const _HeroCarousel(),
            const SizedBox(height: AppSpacing.s6),
          ],

          // 1. ── News-Teaser (klick öffnet Feed) ─────────────────────
          const _NewsTeaser(),
          const SizedBox(height: AppSpacing.s6),

          // 2. ── Punktesammler (Loyalty + persönliche Angebote) ──────
          if (hasSub) ...[
            // Offline-Hinweis: Coupons kommen aus dem lokalen Snapshot.
            if (ref.watch(personalOffersOfflineProvider)) ...[
              AppCard(
                color: const Color(0xFFFFF3D6),
                borderColor: AppColors.statusWarning,
                padding: const EdgeInsets.all(AppSpacing.s3),
                child: Row(
                  children: [
                    const Icon(
                      Icons.wifi_off_outlined,
                      size: 20,
                      color: AppColors.statusWarning,
                    ),
                    const SizedBox(width: AppSpacing.s2),
                    Expanded(
                      child: Text(
                        'Kein Empfang — deine gespeicherten Coupons und '
                        'Codes werden offline angezeigt.',
                        style:
                            AppTypography.body(size: 12, color: AppColors.ink),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: AppSpacing.s4),
            ],
            KeyedSubtree(
              key: CustomerAnchors.loyaltyCard,
              child: loyalty.when(
                loading: () => const SizedBox.shrink(),
                error: (_, __) => const SizedBox.shrink(),
                data: (l) => l == null
                    ? const SizedBox.shrink()
                    : _LoyaltyProgressCard(status: l),
              ),
            ),
            if (loyalty.valueOrNull != null)
              const SizedBox(height: AppSpacing.s5),
            // Sprungziel der Coupons-Kachel oben.
            KeyedSubtree(
              key: CustomerAnchors.coupons,
              child: personals.when(
                loading: () => const _PersonalLoading(),
                error: (_, __) => const SizedBox.shrink(),
                data: (list) {
                  final specials = list.where((o) => o.isSpecial).toList();
                  final loyalty = list
                      .where((o) => o.source == PersonalOfferSource.loyalty)
                      .toList();
                  final basis = list
                      .where((o) => o.source == PersonalOfferSource.auto)
                      .toList();
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      if (specials.isNotEmpty) ...[
                        SectionHeader(
                          eyebrow: 'Für dich persönlich',
                          title: 'Sonderangebote',
                          action: _AiSectionBadge(context: context),
                        ),
                        const SizedBox(height: AppSpacing.s4),
                        for (final o in specials)
                          Padding(
                            padding:
                                const EdgeInsets.only(bottom: AppSpacing.s4),
                            child: _PersonalOfferCard(offer: o),
                          ),
                        const SizedBox(height: AppSpacing.s5),
                      ],
                      if (loyalty.isNotEmpty) ...[
                        SectionHeader(
                          eyebrow: 'Belohnung',
                          title: 'Bonus-Angebote',
                          action: _AiSectionBadge(context: context),
                        ),
                        const SizedBox(height: AppSpacing.s4),
                        for (final o in loyalty)
                          Padding(
                            padding:
                                const EdgeInsets.only(bottom: AppSpacing.s4),
                            child: _PersonalOfferCard(offer: o),
                          ),
                        const SizedBox(height: AppSpacing.s5),
                      ],
                      if (basis.isNotEmpty) ...[
                        SectionHeader(
                          eyebrow: 'Nur für dich',
                          title: 'Dein Angebot',
                          action: _AiSectionBadge(context: context),
                        ),
                        const SizedBox(height: AppSpacing.s4),
                        for (final o in basis)
                          Padding(
                            padding:
                                const EdgeInsets.only(bottom: AppSpacing.s4),
                            child: _PersonalOfferCard(offer: o),
                          ),
                        const SizedBox(height: AppSpacing.s5),
                      ],
                    ],
                  );
                },
              ),
            ),

            // 3. ── Wochenangebote als horizontale Scroll-Karten ────────
            SectionHeader(
              key: CustomerAnchors.weeklyOffers,
              eyebrow: 'Für alle',
              title: 'Wochen­angebote',
              action: _AiSectionBadge(context: context),
            ),
            const SizedBox(height: AppSpacing.s4),
            offers.when(
              // Skeleton statt Spinner: die Seite behält ihre Form, der
              // Inhalt „füllt sich" — kein Layout-Sprung beim Eintreffen.
              loading: () => SizedBox(
                height: 440,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: 3,
                  separatorBuilder: (_, __) =>
                      const SizedBox(width: AppSpacing.s3),
                  itemBuilder: (_, __) => const _OfferCardSkeleton(),
                ),
              ),
              error: (e, _) => AppCard(
                color: const Color(0xFFF7DBDB),
                borderColor: AppColors.statusCritical,
                child: Text(
                  '$e',
                  style: AppTypography.body(size: 13, color: AppColors.ink),
                ),
              ),
              data: (list) {
                if (list.isEmpty) {
                  return AppCard(
                    color: AppColors.surfaceAlt,
                    child: Text(
                      'Aktuell sind keine Wochen­angebote verfügbar. Schau bald wieder vorbei.',
                      style: AppTypography.body(
                        size: 14,
                        color: AppColors.textMuted,
                      ),
                    ),
                  );
                }
                return SizedBox(
                  height: 440,
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    // Snap-Verhalten: jede Karte rastet ein, statt frei
                    // auszulaufen — wirkt dynamischer und lässt keine
                    // halben Karten am Rand stehen.
                    physics: const _CardSnapPhysics(
                      itemExtent: _weeklyCardWidth + AppSpacing.s3,
                    ),
                    itemCount: list.length,
                    separatorBuilder: (_, __) =>
                        const SizedBox(width: AppSpacing.s3),
                    itemBuilder: (context, i) => _CarouselItem(
                      index: i,
                      itemExtent: _weeklyCardWidth + AppSpacing.s3,
                      child: _WeeklyOfferSlot(offer: list[i]),
                    ),
                  ),
                );
              },
            ),
            const _CouponFootnote(),
            const SizedBox(height: AppSpacing.s4),
          ],

          // 4. ── Bewertung der Community (Eure Favoriten) ────────────
          const SectionHeader(
            eyebrow: 'Bewertet von der Community',
            title: 'Eure Favoriten',
          ),
          const SizedBox(height: AppSpacing.s4),
          const _FavoritesSection(category: 'Getränke'),
          const SizedBox(height: AppSpacing.s4),
          const _FavoritesSection(category: 'Snacks'),
          const SizedBox(height: AppSpacing.s4),
          const _FavoritesSection(category: 'Eis'),
        ],
      ),
    );
  }
}

/// Key-Facts-Zeile über den Angeboten: Dauerrabatt, Punktestand und Anzahl
/// verfügbarer Coupons als drei große Zahlen. Marketing-Prinzip: die Fakten
/// stehen vorn, der Kontext klein darunter — kein Fließtext.
class _KeyFactsRow extends ConsumerWidget {
  const _KeyFactsRow();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final rate = ref.watch(myEffectiveDiscountProvider);
    final effRate = rate > 0 ? rate : Pricing.appDiscountRate;
    final pct = (effRate * 100)
        .toStringAsFixed(effRate * 100 % 1 == 0 ? 0 : 1)
        .replaceAll('.', ',');
    final points = ref.watch(myLoyaltyStatusProvider).valueOrNull?.points;
    final coupons = ref.watch(myPersonalOffersProvider).valueOrNull?.length;

    // Jede Kennzahl führt dorthin, wo man etwas damit anfangen kann —
    // die Zahl allein wirft sonst nur eine Frage auf, die man nirgends
    // beantwortet bekommt.
    return Row(
      children: [
        Expanded(
          child: _FactTile(
            icon: Icons.sell_outlined,
            value: '$pct %',
            numeric: effRate * 100,
            format: (v) =>
                '${v.toStringAsFixed(v % 1 == 0 ? 0 : 1).replaceAll('.', ',')} %',
            label: 'Dauerrabatt',
            semanticHint: 'Abo und Status-Rabatt ansehen',
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const SubscriptionScreen()),
            ),
          ),
        ),
        const SizedBox(width: AppSpacing.s2),
        Expanded(
          child: _FactTile(
            icon: Icons.stars_outlined,
            value: points == null ? '—' : '$points',
            numeric: points?.toDouble(),
            format: (v) => v.round().toString(),
            label: 'Punkte',
            semanticHint: 'Status und Challenges ansehen',
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const RewardsScreen()),
            ),
          ),
        ),
        const SizedBox(width: AppSpacing.s2),
        Expanded(
          child: _FactTile(
            icon: Icons.confirmation_number_outlined,
            value: coupons == null ? '—' : '$coupons',
            numeric: coupons?.toDouble(),
            format: (v) => v.round().toString(),
            label: coupons == 1 ? 'Coupon' : 'Coupons',
            semanticHint: 'Zu deinen Coupons springen',
            // Die Coupons stehen weiter unten auf derselben Seite —
            // scrollen statt eine neue Seite öffnen.
            onTap: () => CustomerAnchors.scrollTo('coupons'),
          ),
        ),
      ],
    );
  }
}

/// Einzelne Fakten-Kachel: Zahl groß, Label klein — bewusst ohne Satz.
class _FactTile extends StatelessWidget {
  const _FactTile({
    required this.icon,
    required this.value,
    required this.label,
    this.numeric,
    this.format,
    this.onTap,
    this.semanticHint,
  });
  final IconData icon;
  final String value;
  final String label;

  /// Sprungziel der Kachel. `null` = reine Anzeige.
  final VoidCallback? onTap;

  /// Wohin es geht — für Screenreader, weil „6 %" allein nichts über das
  /// Ziel aussagt.
  final String? semanticHint;

  /// Optionaler Zahlenwert — wenn gesetzt, wird animiert hochgezählt
  /// (sonst steht [value] statisch, z. B. „—" beim Laden).
  final double? numeric;
  final String Function(double)? format;

  @override
  Widget build(BuildContext context) {
    final tile = Container(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s2,
        vertical: AppSpacing.s3,
      ),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        border: Border.all(
          // Anklickbare Kacheln bekommen einen Gold-Rand — man sieht der
          // Kachel dann an, dass dahinter etwas liegt.
          color: onTap == null ? AppColors.borderSubtle : AppColors.brand,
        ),
        borderRadius: BorderRadius.circular(AppRadii.md),
        boxShadow: onTap == null ? null : AppShadows.sm,
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 16, color: AppColors.brandDark),
              if (onTap != null) ...[
                const SizedBox(width: 2),
                const Icon(
                  Icons.chevron_right,
                  size: 14,
                  color: AppColors.textMuted,
                ),
              ],
            ],
          ),
          const SizedBox(height: 4),
          FittedBox(
            fit: BoxFit.scaleDown,
            // Zahlen zählen beim Erscheinen hoch — der Blick bleibt an der
            // Kennzahl hängen, ohne dass der Wert später „springt".
            child: numeric == null
                ? Text(
                    value,
                    maxLines: 1,
                    style: AppTypography.display(
                      size: 20,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  )
                : AnimatedCountUp(
                    value: numeric!,
                    format: format!,
                    style: AppTypography.display(
                      size: 20,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                  ),
          ),
          const SizedBox(height: 1),
          Text(
            label,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.body(
              size: 10.5,
              weight: FontWeight.w700,
              color: AppColors.textMuted,
            ),
          ),
        ],
      ),
    );

    if (onTap == null) return tile;
    return Semantics(
      button: true,
      label: '$value $label',
      hint: semanticHint,
      child: PressableScale(onTap: onTap, child: tile),
    );
  }
}

/// Platzhalter einer Angebotskarte während des Ladens — gleiche Maße wie
/// die echte Karte, damit beim Eintreffen nichts springt.
class _OfferCardSkeleton extends StatelessWidget {
  const _OfferCardSkeleton();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: _weeklyCardWidth,
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.surfaceCard,
          border: Border.all(color: AppColors.borderSubtle),
          borderRadius: BorderRadius.circular(AppRadii.lg),
        ),
        clipBehavior: Clip.antiAlias,
        child: const Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            AspectRatio(
              aspectRatio: 1.1,
              child: SkeletonBox(radius: 0, height: double.infinity),
            ),
            Padding(
              padding: EdgeInsets.all(AppSpacing.s3),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SkeletonBox(height: 22),
                  SizedBox(height: AppSpacing.s3),
                  SkeletonBox(height: 14),
                  SizedBox(height: 8),
                  SkeletonBox(width: 130, height: 12),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PersonalLoading extends StatelessWidget {
  const _PersonalLoading();
  @override
  Widget build(BuildContext context) {
    // Skeleton statt Spinner — die Liste behält ihre Form beim Laden.
    return const Column(
      children: [
        SkeletonCard(),
        SizedBox(height: AppSpacing.s2),
        SkeletonCard(),
      ],
    );
  }
}

/// KI-Chip für den `action`-Slot eines SectionHeader.
///
/// Benötigt den [BuildContext] der ListView, um bei Tap direkt in den
/// AiInfoScreen zu navigieren, ohne Riverpod-Refs zu binden.
class _AiSectionBadge extends StatelessWidget {
  const _AiSectionBadge({required this.context});
  // Ignore-Reason: der SectionHeader.action nimmt ein Widget entgegen und
  // hat selbst keinen BuildContext-Zugriff; wir reichen ihn hier durch,
  // um den bequemen Callback-Navigator zu ermöglichen. Kein Anti-Pattern
  // im Ergebnis, weil das Widget stateless und nicht in Isolation
  // wiederverwendet wird.
  final BuildContext context;

  void _openInfo() {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => const AiInfoScreen()),
    );
  }

  @override
  Widget build(BuildContext _) {
    return AiBadge(onTap: _openInfo, dense: true);
  }
}

/// Fußnote unter Coupon-/Angebots-Sektionen. Bezieht sich auf das „*"
/// hinter jedem Rabatt und macht die Kombinierbarkeits-Einschränkung
/// transparent. Wird nach jeder Coupon-Liste gerendert.
class _CouponFootnote extends StatelessWidget {
  const _CouponFootnote();
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: AppSpacing.s2, bottom: AppSpacing.s3),
      child: Text(
        '* Nicht mit anderen Coupons/Aktionen kombinierbar. Sind mehrere '
        'Coupons für dasselbe Produkt aktiviert, wird automatisch der '
        'günstigste Preis für dich angewandt.',
        style: AppTypography.body(
          size: 11,
          weight: FontWeight.w600,
          color: AppColors.textMuted,
        ).copyWith(height: 1.35),
      ),
    );
  }
}

/// Personalisiertes Angebot — dunkle Ink-Karte, prominenter Preisunterschied,
/// 6-stelliger Code, „Einlösen"-Button.  Styling wird durch `source` bestimmt.
class _PersonalOfferCard extends ConsumerWidget {
  const _PersonalOfferCard({required this.offer});
  final PersonalOffer offer;

  ({String label, IconData icon}) get _header {
    switch (offer.source) {
      case PersonalOfferSource.birthday:
        return (label: 'Herzlichen Glückwunsch', icon: Icons.celebration);
      case PersonalOfferSource.anniversary:
        return (label: 'Dein Jahres-Angebot', icon: Icons.emoji_events);
      case PersonalOfferSource.loyalty:
        return (label: 'Meilenstein-Bonus', icon: Icons.workspace_premium);
      case PersonalOfferSource.auto:
        return (label: 'Nur für dich', icon: Icons.card_giftcard);
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final remaining = offer.validTo.difference(DateTime.now());
    final days = remaining.inDays;
    final hours = remaining.inHours;
    final validityLabel = days >= 1
        ? 'noch $days ${days == 1 ? 'Tag' : 'Tage'}'
        : hours >= 1
            ? 'noch $hours Std.'
            : 'endet bald';
    final h = _header;
    final isWildcard = offer.isSpecial;

    return AppCard(
      color: AppColors.ink,
      borderColor: AppColors.brand,
      padding: EdgeInsets.zero,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s5,
              AppSpacing.s4,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(h.icon, color: AppColors.brand, size: 20),
                    const SizedBox(width: 6),
                    Text(
                      h.label,
                      style: AppTypography.body(
                        size: 16,
                        weight: FontWeight.w800,
                        color: AppColors.brand,
                      ),
                    ),
                    const Spacer(),
                    StatusBadge(
                      label: validityLabel,
                      tone: StatusTone.brand,
                      icon: Icons.schedule,
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s3),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    ProductImage(
                      imageUrl: offer.imageUrl,
                      productName: offer.title,
                      size: 56,
                    ),
                    const SizedBox(width: AppSpacing.s3),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            offer.title,
                            style: AppTypography.display(
                              size: 20,
                              weight: FontWeight.w800,
                              color: AppColors.onDark,
                            ),
                          ),
                          if (isWildcard)
                            Text(
                              'Auf ein Produkt deiner Wahl',
                              style: AppTypography.body(
                                size: 13,
                                weight: FontWeight.w600,
                                color: AppColors.brandLight,
                              ),
                            ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s4),
                if (isWildcard)
                  Row(
                    children: [
                      Text(
                        '-${offer.discountPercent.toStringAsFixed(0)} % *',
                        style: AppTypography.display(
                          size: 40,
                          weight: FontWeight.w800,
                          color: AppColors.brand,
                        ).copyWith(height: 1),
                      ),
                      const SizedBox(width: AppSpacing.s3),
                      Expanded(
                        child: Text(
                          'am Automaten einlösen',
                          style: AppTypography.body(
                            size: 13,
                            weight: FontWeight.w700,
                            color: AppColors.brandLight,
                          ),
                        ),
                      ),
                    ],
                  )
                else
                  _DarkPriceRow(
                    regular: offer.regularPriceNet,
                    discounted: offer.offerPriceNet,
                    percent: offer.discountPercent,
                  ),
              ],
            ),
          ),
          _PersonalActivationFooter(offer: offer),
        ],
      ),
    );
  }

  static String _formatCode(String c) =>
      c.length == 6 ? '${c.substring(0, 3)} ${c.substring(3)}' : c;
}

/// Footer der PersonalOfferCard: Vor Aktivierung nur Aktivieren-Button;
/// nach Aktivierung erscheint der Einlöse-Code und der Einlösen-Button.
class _PersonalActivationFooter extends ConsumerWidget {
  const _PersonalActivationFooter({required this.offer});
  final PersonalOffer offer;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final busy = ref.watch(offerActivationActionsProvider).isLoading;

    if (!offer.isActivated) {
      return Container(
        decoration: const BoxDecoration(
          color: Color(0xFF14110E),
          border: Border(top: BorderSide(color: AppColors.brand, width: 1)),
        ),
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s5,
          vertical: AppSpacing.s4,
        ),
        child: Row(
          children: [
            Expanded(
              child: Text(
                'Aktiviere den Coupon, um am Automaten einzulösen.',
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.brandLight,
                ),
              ),
            ),
            const SizedBox(width: AppSpacing.s3),
            FilledButton.icon(
              onPressed: busy
                  ? null
                  : () async {
                      await ref
                          .read(offerActivationActionsProvider.notifier)
                          .activatePersonal(offer.id);
                      ref.invalidate(myPersonalOffersProvider);
                    },
              icon: busy
                  ? const SizedBox(
                      width: 14,
                      height: 14,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        color: AppColors.ink,
                      ),
                    )
                  : const Icon(
                      Icons.add_circle_outline,
                      size: 18,
                      color: AppColors.ink,
                    ),
              label: const Text('Aktivieren'),
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.brand,
                foregroundColor: AppColors.ink,
                textStyle:
                    AppTypography.body(size: 13, weight: FontWeight.w800),
              ),
            ),
          ],
        ),
      );
    }

    return Container(
      decoration: const BoxDecoration(
        color: Color(0xFF14110E),
        border: Border(top: BorderSide(color: AppColors.brand, width: 1)),
      ),
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s5,
        vertical: AppSpacing.s4,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Einlöse-Code',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.brand,
                      ).copyWith(letterSpacing: 0.6),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      _PersonalOfferCard._formatCode(offer.redemptionCode),
                      style: AppTypography.display(
                        size: 28,
                        weight: FontWeight.w800,
                        color: AppColors.onDark,
                      ).copyWith(letterSpacing: 3),
                    ),
                  ],
                ),
              ),
              IconButton(
                tooltip: 'Code kopieren',
                icon: const Icon(Icons.copy_outlined, color: AppColors.brand),
                onPressed: () async {
                  await Clipboard.setData(
                    ClipboardData(text: offer.redemptionCode),
                  );
                  if (context.mounted) {
                    showSuccessToast(context, 'Code kopiert.');
                  }
                },
              ),
              const SizedBox(width: 4),
              _RedeemButton(code: offer.redemptionCode),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          FilledButton.icon(
            onPressed: busy
                ? null
                : () async {
                    await ref
                        .read(offerActivationActionsProvider.notifier)
                        .deactivatePersonal(offer.id);
                    ref.invalidate(myPersonalOffersProvider);
                  },
            icon: busy
                ? const SizedBox(
                    width: 14,
                    height: 14,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: AppColors.onDark,
                    ),
                  )
                : const Icon(
                    Icons.check_circle,
                    size: 18,
                    color: AppColors.onDark,
                  ),
            label: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Aktiviert',
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
                Text(
                  '(Tippen zum Deaktivieren)',
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w700,
                    color: AppColors.onDark,
                  ),
                ),
              ],
            ),
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.statusPositive,
              foregroundColor: AppColors.onDark,
              padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
            ),
          ),
        ],
      ),
    );
  }
}

class _RedeemButton extends ConsumerWidget {
  const _RedeemButton({required this.code});
  final String code;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final busy = ref.watch(personalOfferActionsProvider).isLoading;
    return FilledButton.icon(
      onPressed: busy
          ? null
          : () async {
              final ctx = context;
              final offer = await ref
                  .read(personalOfferActionsProvider.notifier)
                  .redeem(code);
              if (!ctx.mounted) return;
              final err = ref.read(personalOfferActionsProvider).error;
              ref.invalidate(myPersonalOffersProvider);
              ScaffoldMessenger.of(ctx).showSnackBar(
                SnackBar(
                  content: Text(
                    offer != null
                        ? 'Angebot eingelöst — viel Spaß!'
                        : 'Einlösen fehlgeschlagen: ${err ?? 'unbekannt'}',
                  ),
                ),
              );
            },
      style: FilledButton.styleFrom(
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.ink,
        padding:
            const EdgeInsets.symmetric(horizontal: AppSpacing.s4, vertical: 10),
        textStyle: AppTypography.body(size: 13, weight: FontWeight.w800),
      ),
      icon: busy
          ? const SizedBox(
              width: 14,
              height: 14,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                color: AppColors.ink,
              ),
            )
          : const Icon(Icons.check_circle_outline, size: 18),
      label: const Text('Einlösen'),
    );
  }
}

class _DarkPriceRow extends StatelessWidget {
  const _DarkPriceRow({
    required this.regular,
    required this.discounted,
    required this.percent,
  });
  final double regular;
  final double discounted;
  final double percent;
  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          _euro(discounted),
          style: AppTypography.display(
            size: 30,
            weight: FontWeight.w800,
            color: AppColors.brand,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        Text(
          _euro(regular),
          style: AppTypography.body(
            size: 16,
            weight: FontWeight.w600,
            color: AppColors.brandLight,
          ).copyWith(
            decoration: TextDecoration.lineThrough,
            decorationColor: AppColors.brandLight,
            decorationThickness: 2,
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        DiscountBadge(percent: percent),
      ],
    );
  }

  static String _euro(double v) {
    final s = v.toStringAsFixed(2).replaceAll('.', ',');
    return '$s €';
  }
}

/// Loyalty-Fortschritt: Punktzahl links, Meilensteine als Timeline rechts.
class _LoyaltyProgressCard extends StatelessWidget {
  const _LoyaltyProgressCard({required this.status});
  final LoyaltyStatus status;

  @override
  Widget build(BuildContext context) {
    const tiers = [500, 1200, 2000, 3000];
    final resetDay = status.nextReset.day.toString().padLeft(2, '0');
    final resetMonth = status.nextReset.month.toString().padLeft(2, '0');
    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.stars_rounded, color: AppColors.brand, size: 22),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  'Deine Punkte',
                  style: AppTypography.body(
                    size: 16,
                    weight: FontWeight.w800,
                    color: AppColors.brand,
                  ),
                ),
              ),
              Text(
                'Reset $resetDay.$resetMonth.',
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                '${status.points}',
                style: AppTypography.display(
                  size: 40,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ).copyWith(height: 1),
              ),
              const SizedBox(width: 6),
              Text(
                'Pkt.',
                style: AppTypography.body(
                  size: 16,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
              const Spacer(),
              if (status.nextTier != null)
                Text(
                  'noch ${status.pointsToNext} bis ${status.nextTier}',
                  style: AppTypography.body(
                    size: 13,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          // Meilenstein-Timeline
          _TierTimeline(tiers: tiers, points: status.points),
        ],
      ),
    );
  }
}

class _TierTimeline extends StatelessWidget {
  const _TierTimeline({required this.tiers, required this.points});
  final List<int> tiers;
  final int points;

  /// Rabattprozent je Meilenstein — muss mit der DB-Funktion
  /// app.grant_loyalty_bonuses() übereinstimmen (5/10/15/25 %).
  static const _rewards = {500: 5, 1200: 10, 2000: 15, 3000: 25};

  @override
  Widget build(BuildContext context) {
    final maxTier = tiers.last;
    final progress = (points / maxTier).clamp(0.0, 1.0);
    return Column(
      children: [
        // Fortschrittsbalken
        Stack(
          alignment: Alignment.centerLeft,
          children: [
            Container(
              height: 6,
              decoration: BoxDecoration(
                color: AppColors.surfaceAlt,
                borderRadius: BorderRadius.circular(AppRadii.pill),
                border: Border.all(color: AppColors.borderSubtle),
              ),
            ),
            LayoutBuilder(
              builder: (context, c) => Container(
                height: 6,
                width: c.maxWidth * progress,
                decoration: BoxDecoration(
                  color: AppColors.brand,
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s3),
        // Belohnungs-Kacheln je Meilenstein
        LayoutBuilder(
          builder: (context, c) {
            final w = (c.maxWidth - AppSpacing.s2 * (tiers.length - 1)) /
                tiers.length;
            return Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                for (final t in tiers)
                  _MilestoneChip(
                    width: w,
                    tier: t,
                    percent: _rewards[t] ?? 0,
                    reached: points >= t,
                  ),
              ],
            );
          },
        ),
      ],
    );
  }
}

/// Einzelne Meilenstein-Kachel: Sparbüchsen-Icon in gold gefüllter oder
/// grauer Kachel, Rabattprozent groß, Punktzahl klein darunter.
class _MilestoneChip extends StatelessWidget {
  const _MilestoneChip({
    required this.width,
    required this.tier,
    required this.percent,
    required this.reached,
  });

  final double width;
  final int tier;
  final int percent;
  final bool reached;

  @override
  Widget build(BuildContext context) {
    const ink = AppColors.ink;
    return SizedBox(
      width: width,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            height: 68,
            decoration: BoxDecoration(
              color: reached ? AppColors.brand : AppColors.surfaceAlt,
              border: Border.all(
                color: reached ? AppColors.brand : AppColors.borderSubtle,
                width: 1.5,
              ),
              borderRadius: BorderRadius.circular(AppRadii.md),
            ),
            alignment: Alignment.center,
            child: Stack(
              alignment: Alignment.center,
              children: [
                Icon(
                  reached ? Icons.card_giftcard_rounded : Icons.lock_outline,
                  size: 24,
                  color: reached ? ink : AppColors.textMuted,
                ),
                if (reached)
                  Positioned(
                    bottom: 4,
                    child: Text(
                      '-$percent %',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w800,
                        color: ink,
                      ),
                    ),
                  )
                else
                  Positioned(
                    bottom: 4,
                    child: Text(
                      '-$percent %',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w700,
                        color: AppColors.textMuted,
                      ),
                    ),
                  ),
              ],
            ),
          ),
          const SizedBox(height: 4),
          Text(
            '$tier',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color: reached ? AppColors.ink : AppColors.textMuted,
            ),
          ),
          Text(
            'Punkte',
            style: AppTypography.body(
              size: 10,
              weight: FontWeight.w600,
              color: AppColors.textMuted,
            ),
          ),
        ],
      ),
    );
  }
}

/// Breite einer Wochenangebots-Karte — auch Basis für das Snap-Raster.
const double _weeklyCardWidth = 260;

/// Karussell-Effekt: die Karte am linken Rand (Fokusposition) steht auf
/// 100 %, weiter außen liegende Karten werden leicht verkleinert und in der
/// Deckkraft reduziert. Dadurch führt der Blick automatisch zur aktiven
/// Karte, ohne dass Inhalte verschwinden.
///
/// Umgesetzt über die Scroll-Position statt über einen PageView, damit die
/// Liste lazy bleibt. Bei „Bewegung reduzieren" wird der Effekt deaktiviert.
class _CarouselItem extends StatelessWidget {
  const _CarouselItem({
    required this.index,
    required this.itemExtent,
    required this.child,
  });

  final int index;
  final double itemExtent;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    if (Motion.reduced(context)) return child;
    final position = Scrollable.maybeOf(context)?.position;
    if (position == null) return child;

    return AnimatedBuilder(
      animation: position,
      builder: (context, inner) {
        // Abstand dieser Karte zur Fokusposition in Karten-Einheiten.
        final offset = position.hasPixels
            ? (index * itemExtent - position.pixels) / itemExtent
            : 0.0;
        final d = offset.abs().clamp(0.0, 1.0);
        final scale = 1.0 - 0.06 * d; // 100 % → 94 %
        final opacity = 1.0 - 0.35 * d; // 100 % → 65 %
        return Opacity(
          opacity: opacity,
          child: Transform.scale(
            scale: scale,
            alignment: Alignment.center,
            child: inner,
          ),
        );
      },
      child: child,
    );
  }
}

/// Scroll-Physik, die auf ganze Karten einrastet (wie ein Karussell), aber
/// mehrere Karten pro Wisch erlaubt. Bewusst leichtgewichtig statt PageView:
/// die Liste bleibt eine normale ListView mit Lazy-Building.
class _CardSnapPhysics extends ScrollPhysics {
  const _CardSnapPhysics({required this.itemExtent, super.parent});

  final double itemExtent;

  @override
  _CardSnapPhysics applyTo(ScrollPhysics? ancestor) =>
      _CardSnapPhysics(itemExtent: itemExtent, parent: buildParent(ancestor));

  double _target(ScrollMetrics position, double velocity) {
    final raw = position.pixels + velocity * 0.15;
    final index = (raw / itemExtent).roundToDouble();
    return (index * itemExtent)
        .clamp(position.minScrollExtent, position.maxScrollExtent);
  }

  @override
  Simulation? createBallisticSimulation(
    ScrollMetrics position,
    double velocity,
  ) {
    // Über-/Unterscroll dem Parent überlassen (Bounce am Rand bleibt).
    if ((velocity <= 0.0 && position.pixels <= position.minScrollExtent) ||
        (velocity >= 0.0 && position.pixels >= position.maxScrollExtent)) {
      return super.createBallisticSimulation(position, velocity);
    }
    final target = _target(position, velocity);
    if ((target - position.pixels).abs() < 0.5) return null;
    return ScrollSpringSimulation(
      spring,
      position.pixels,
      target,
      velocity,
      tolerance: toleranceFor(position),
    );
  }

  @override
  bool get allowImplicitScrolling => false;
}

/// Wochenangebots-Slot mit Rating, Aktivieren-Button und Tap→Produkt-Detail.
class _WeeklyOfferSlot extends ConsumerWidget {
  const _WeeklyOfferSlot({required this.offer});
  final Offer offer;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final activatedIds =
        ref.watch(activatedOfferIdsProvider).valueOrNull ?? const <String>{};
    final activated = activatedIds.contains(offer.id);
    final busy = ref.watch(offerActivationActionsProvider).isLoading;
    final ratingSummary = offer.productId == null
        ? null
        : ref.watch(productDetailProvider(offer.productId!)).valueOrNull;

    Future<void> openDetail() async {
      if (offer.productId == null) return;
      await Navigator.of(context).push(
        MaterialPageRoute(
          builder: (_) => ProductDetailScreen(productId: offer.productId!),
        ),
      );
    }

    return OfferCard(
      title: offer.title,
      regularPrice: offer.regularPriceNet ?? 0,
      offerPrice: offer.offerPriceNet ?? 0,
      discountPercent: offer.discountPercent ?? 10,
      imageUrl: offer.imageUrl,
      validUntil: offer.validTo,
      width: _weeklyCardWidth,
      onTap: offer.productId == null ? null : openDetail,
      heroTag: offer.productId == null ? null : 'product-${offer.productId}',
      rating: ratingSummary?.avgRating,
      reviewCount: ratingSummary?.reviewCount,
      footer: _ActivationButton(
        activated: activated,
        busy: busy,
        onActivate: () async {
          await ref
              .read(offerActivationActionsProvider.notifier)
              .activateWeekly(offer.id);
          ref.invalidate(activatedOfferIdsProvider);
        },
        onDeactivate: () async {
          await ref
              .read(offerActivationActionsProvider.notifier)
              .deactivateWeekly(offer.id);
          ref.invalidate(activatedOfferIdsProvider);
        },
      ),
    );
  }
}

/// Aktivierungs-Button: gelb im inaktiven Zustand, grün wenn aktiviert.
/// Ein Klick auf den grünen Button deaktiviert den Coupon wieder.
class _ActivationButton extends StatelessWidget {
  const _ActivationButton({
    required this.activated,
    required this.busy,
    required this.onActivate,
    required this.onDeactivate,
  });
  final bool activated;
  final bool busy;
  final Future<void> Function() onActivate;
  final Future<void> Function() onDeactivate;

  @override
  Widget build(BuildContext context) {
    if (activated) {
      return SizedBox(
        width: double.infinity,
        child: FilledButton.icon(
          onPressed: busy ? null : onDeactivate,
          icon: busy
              ? const SizedBox(
                  width: 14,
                  height: 14,
                  child: CircularProgressIndicator(
                    strokeWidth: 2,
                    color: AppColors.onDark,
                  ),
                )
              : const Icon(Icons.check_circle, size: 18),
          label: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Aktiviert',
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w800,
                  color: AppColors.onDark,
                ),
              ),
              Text(
                '(Tippen zum Deaktivieren)',
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.onDark,
                ),
              ),
            ],
          ),
          style: FilledButton.styleFrom(
            backgroundColor: AppColors.statusPositive,
            foregroundColor: AppColors.onDark,
            padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          ),
        ),
      );
    }
    return SizedBox(
      width: double.infinity,
      child: FilledButton.icon(
        // Erfolgs-Feedback direkt an der Aktion: Haken-Toast + Haptik.
        onPressed: busy
            ? null
            : () async {
                await onActivate();
                if (context.mounted) {
                  showSuccessToast(context, 'Coupon aktiviert.');
                }
              },
        icon: busy
            ? const SizedBox(
                width: 14,
                height: 14,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  color: AppColors.ink,
                ),
              )
            : const Icon(Icons.add_circle_outline, size: 18),
        label: const Text('Aktivieren'),
        style: FilledButton.styleFrom(
          backgroundColor: AppColors.brand,
          foregroundColor: AppColors.ink,
          textStyle: AppTypography.body(size: 13, weight: FontWeight.w800),
        ),
      ),
    );
  }
}

/// Eure-Favoriten-Sektion pro Kategorie — Top 3 als horizontaler Slider.
class _FavoritesSection extends ConsumerWidget {
  const _FavoritesSection({required this.category});
  final String category;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final top = ref.watch(topProductsProvider(category));
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Icon(_iconFor(category), size: 18, color: AppColors.brand),
            const SizedBox(width: 6),
            Text(
              category,
              style: AppTypography.body(
                size: 16,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
          ],
        ),
        const SizedBox(height: AppSpacing.s2),
        // Weicher Wechsel Skeleton → Karten: kein Sprung, keine leere
        // Lücke zwischen Ladezustand und Inhalt.
        AnimatedSwitcher(
          duration: Motion.duration(context, AppMotion.base),
          switchInCurve: AppMotion.easeOut,
          switchOutCurve: AppMotion.easeOut,
          child: top.when(
            loading: () => const _FavoritesSkeleton(),
            error: (_, __) => const SizedBox.shrink(),
            data: (list) => list.isEmpty
                ? AppCard(
                    color: AppColors.surfaceAlt,
                    padding: const EdgeInsets.symmetric(
                      horizontal: AppSpacing.s4,
                      vertical: AppSpacing.s3,
                    ),
                    child: Text(
                      'Noch keine Bewertungen in dieser Kategorie.',
                      style: AppTypography.body(
                        size: 13,
                        color: AppColors.textMuted,
                      ),
                    ),
                  )
                : SizedBox(
                    key: ValueKey('fav-$category-${list.length}'),
                    height: 220,
                    child: ListView.separated(
                      scrollDirection: Axis.horizontal,
                      itemCount: list.length,
                      separatorBuilder: (_, __) =>
                          const SizedBox(width: AppSpacing.s3),
                      // Gestaffeltes Einlaufen: Platz 1 zuerst, dann 2 und 3.
                      itemBuilder: (context, i) => FadeInUp(
                        index: i,
                        child: _FavoriteCard(
                          product: list[i],
                          rank: i + 1,
                        ),
                      ),
                    ),
                  ),
          ),
        ),
      ],
    );
  }

  IconData _iconFor(String c) => switch (c) {
        'Getränke' => Icons.local_drink_outlined,
        'Snacks' => Icons.cookie_outlined,
        'Eis' => Icons.icecream_outlined,
        _ => Icons.category_outlined,
      };
}

/// Ladezustand der Favoriten-Sektion: drei Karten-Platzhalter in exakt der
/// Größe der echten Karten, damit beim Datenwechsel nichts springt.
class _FavoritesSkeleton extends StatelessWidget {
  const _FavoritesSkeleton();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 220,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        physics: const NeverScrollableScrollPhysics(),
        itemCount: 3,
        separatorBuilder: (_, __) => const SizedBox(width: AppSpacing.s3),
        itemBuilder: (context, __) => const SizedBox(
          width: 180,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              SkeletonBox(height: 135, radius: AppRadii.md),
              SizedBox(height: AppSpacing.s3),
              SkeletonBox(height: 12),
              SizedBox(height: 8),
              SkeletonBox(width: 90, height: 10),
            ],
          ),
        ),
      ),
    );
  }
}

class _FavoriteCard extends StatelessWidget {
  const _FavoriteCard({required this.product, required this.rank});
  final int rank;
  final RankedProduct product;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 180,
      child: AppCard(
        padding: EdgeInsets.zero,
        onTap: () => Navigator.of(context).push(
          MaterialPageRoute(
            builder: (_) => ProductDetailScreen(productId: product.id),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Stack(
              children: [
                AspectRatio(
                  aspectRatio: 4 / 3,
                  child: ProductImage.expand(
                    imageUrl: product.imageUrl,
                    productName: product.name,
                  ),
                ),
                Positioned(
                  top: 6,
                  left: 6,
                  child: Container(
                    width: 32,
                    height: 32,
                    decoration: const BoxDecoration(
                      color: AppColors.brand,
                      shape: BoxShape.circle,
                    ),
                    alignment: Alignment.center,
                    child: Text(
                      '$rank',
                      style: AppTypography.display(
                        size: 16,
                        weight: FontWeight.w800,
                        color: AppColors.ink,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(AppSpacing.s3),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    product.name,
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w800,
                      color: AppColors.ink,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 4),
                  RatingStars(
                    rating: product.avgRating,
                    count: product.reviewCount,
                    size: 12,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Aktivierungs-Aktionen (StateNotifier) — für Loading-State beim Klick.
class OfferActivationActions extends StateNotifier<AsyncValue<void>> {
  OfferActivationActions(this._ref) : super(const AsyncData(null));
  final Ref _ref;

  Future<void> activateWeekly(String id) async {
    state = const AsyncLoading();
    try {
      await _ref.read(customerRepositoryProvider).activateWeeklyOffer(id);
      state = const AsyncData(null);
    } catch (e, st) {
      state = AsyncError(e, st);
    }
  }

  Future<void> deactivateWeekly(String id) async {
    state = const AsyncLoading();
    try {
      await _ref.read(customerRepositoryProvider).deactivateWeeklyOffer(id);
      state = const AsyncData(null);
    } catch (e, st) {
      state = AsyncError(e, st);
    }
  }

  Future<void> activatePersonal(String id) async {
    state = const AsyncLoading();
    try {
      await _ref.read(customerRepositoryProvider).activatePersonalOffer(id);
      state = const AsyncData(null);
    } catch (e, st) {
      state = AsyncError(e, st);
    }
  }

  Future<void> deactivatePersonal(String id) async {
    state = const AsyncLoading();
    try {
      await _ref.read(customerRepositoryProvider).deactivatePersonalOffer(id);
      state = const AsyncData(null);
    } catch (e, st) {
      state = AsyncError(e, st);
    }
  }
}

final offerActivationActionsProvider =
    StateNotifierProvider.autoDispose<OfferActivationActions, AsyncValue<void>>(
  (ref) => OfferActivationActions(ref),
);

/// News-Vorschau auf der Kunden-Startseite. Zeigt bis zu 2 aktuelle
/// Beiträge im Titel-/Datums-Format und einen „Alle Beiträge lesen"-Button
/// zur vollständigen News-Übersicht.
class _NewsTeaser extends ConsumerWidget {
  const _NewsTeaser();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final news = ref.watch(newsProvider);
    void openAll() {
      Navigator.of(context).push(
        MaterialPageRoute(builder: (_) => const NewsScreen()),
      );
    }

    return news.when(
      loading: () => const SizedBox.shrink(),
      error: (_, __) => const SizedBox.shrink(),
      data: (list) {
        if (list.isEmpty) return const SizedBox.shrink();
        final preview = list.take(3).toList();
        return AppCard(
          padding: EdgeInsets.zero,
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(AppRadii.lg),
              onTap: openAll,
              child: Padding(
                padding: const EdgeInsets.all(AppSpacing.s4),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(6),
                          decoration: BoxDecoration(
                            color: AppColors.brand,
                            borderRadius: BorderRadius.circular(AppRadii.sm),
                          ),
                          child: const Icon(
                            Icons.campaign,
                            color: AppColors.ink,
                            size: 18,
                          ),
                        ),
                        const SizedBox(width: AppSpacing.s2),
                        Expanded(
                          child: Text(
                            'News',
                            style: AppTypography.display(
                              size: 20,
                              weight: FontWeight.w800,
                              color: AppColors.ink,
                            ),
                          ),
                        ),
                        const Icon(Icons.arrow_forward, color: AppColors.brand),
                      ],
                    ),
                    const SizedBox(height: AppSpacing.s3),
                    for (final n in preview) ...[
                      _NewsPreviewRow(article: n),
                      if (n != preview.last) ...[
                        const SizedBox(height: 8),
                        const Divider(height: 1, color: AppColors.borderSubtle),
                        const SizedBox(height: 8),
                      ],
                    ],
                    const SizedBox(height: AppSpacing.s3),
                    Align(
                      alignment: Alignment.centerRight,
                      child: Text(
                        'Alle Beiträge lesen »',
                        style: AppTypography.body(
                          size: 13,
                          weight: FontWeight.w800,
                          color: AppColors.brand,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _NewsPreviewRow extends StatelessWidget {
  const _NewsPreviewRow({required this.article});
  final NewsArticle article;
  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Kompakter Teaser: Bild klein halten, damit drei Meldungen in
        // die Karte passen, ohne dass die Startseite zuwächst.
        ProductImage(
          imageUrl: article.imageUrl,
          productName: article.title,
          size: 56,
          icon: Icons.campaign,
        ),
        const SizedBox(width: AppSpacing.s3),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                Formatters.date(article.publishedAt),
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.textMuted,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                article.title,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
      ],
    );
  }
}

/// Suchleiste oben im Angebote-Tab. Filtert die Community-Favoriten-Sektion
/// nach eingegebenem Text (leichtgewichtige Suche ohne Backend-Roundtrip).
class _ProductSearchBar extends ConsumerStatefulWidget {
  const _ProductSearchBar({this.onFocusChange});

  /// Meldet dem Tab, ob gerade getippt wird — der Scroll-Ausblender muss
  /// dann pausieren, sonst klappt das Feld unter dem Finger zu.
  final ValueChanged<bool>? onFocusChange;

  @override
  ConsumerState<_ProductSearchBar> createState() => _ProductSearchBarState();
}

class _ProductSearchBarState extends ConsumerState<_ProductSearchBar> {
  final _ctrl = TextEditingController();
  final _focus = FocusNode();

  @override
  void initState() {
    super.initState();
    _focus
      ..addListener(_rebuild)
      ..addListener(_notifyFocus);
    _ctrl.addListener(_rebuild);
  }

  @override
  void dispose() {
    _focus
      ..removeListener(_rebuild)
      ..removeListener(_notifyFocus)
      ..dispose();
    _ctrl
      ..removeListener(_rebuild)
      ..dispose();
    super.dispose();
  }

  void _rebuild() {
    if (mounted) setState(() {});
  }

  void _notifyFocus() {
    widget.onFocusChange?.call(_focus.hasFocus);
  }

  void _search(String value) {
    // Spring zur Favoriten-Sektion und filtere (Frontend-Filter).
    // Aktuell simuliert: SnackBar zeigt die Query. Für die volle
    // Umsetzung wird eine Produkt-Detail-Suche später ergänzt.
    if (value.trim().isEmpty) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('Suche nach: „${value.trim()}"'),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final focused = _focus.hasFocus;
    final hasText = _ctrl.text.isNotEmpty;

    // Fokus-Choreografie nach Vorlage: das Feld sackt beim Antippen kurz
    // ein und kommt gefedert zurück, Rahmen und Lupe wechseln auf Gold.
    return AnimatedScale(
      scale: focused ? 1.0 : 0.995,
      duration: Motion.duration(context, AppMotion.base),
      curve: AppMotion.easeOut,
      child: AnimatedContainer(
        duration: Motion.duration(context, AppMotion.base),
        curve: AppMotion.easeOut,
        decoration: BoxDecoration(
          color: AppColors.surfaceCard,
          border: Border.all(
            color: focused ? AppColors.brand : AppColors.borderSubtle,
            width: focused ? 2 : 1,
          ),
          borderRadius: BorderRadius.circular(AppRadii.pill),
          boxShadow: focused ? AppShadows.gold : AppShadows.sm,
        ),
        padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s3),
        child: Row(
          children: [
            AnimatedScale(
              scale: focused ? 1.12 : 1,
              duration: Motion.duration(context, AppMotion.base),
              curve: AppMotion.easeOut,
              child: Icon(
                Icons.search,
                color: focused ? AppColors.brandDark : AppColors.textMuted,
                size: 22,
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: TextField(
                controller: _ctrl,
                focusNode: _focus,
                textInputAction: TextInputAction.search,
                onSubmitted: _search,
                // Textstil explizit: die Eingabe muss deutlich dunkler
                // stehen als der Platzhalter, sonst sieht man beim Tippen
                // kaum, was man geschrieben hat.
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w600,
                  color: AppColors.ink,
                ),
                cursorColor: AppColors.brandDark,
                decoration: InputDecoration(
                  hintText: 'Finde dein Lieblingsprodukt',
                  hintStyle: AppTypography.body(
                    size: 14,
                    color: AppColors.textMuted,
                  ),
                  border: InputBorder.none,
                  enabledBorder: InputBorder.none,
                  focusedBorder: InputBorder.none,
                  filled: false,
                  isDense: true,
                  contentPadding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
            ),
            // Löschen erscheint erst, wenn etwas drinsteht.
            AnimatedSize(
              duration: Motion.duration(context, AppMotion.fast),
              curve: AppMotion.easeOut,
              child: hasText
                  ? IconButton(
                      tooltip: 'Eingabe löschen',
                      visualDensity: VisualDensity.compact,
                      icon: const Icon(
                        Icons.close,
                        size: 18,
                        color: AppColors.textMuted,
                      ),
                      onPressed: () {
                        Motion.tap();
                        _ctrl.clear();
                      },
                    )
                  : const SizedBox.shrink(),
            ),
          ],
        ),
      ),
    );
  }
}

/// Vollflächige, goldgelbe Deal-Karte im Stil der Design-Mockups. Eyebrow
/// Horizontales Karussell mit dem Frühstücks- und dem Feierabend-Deal.
///
/// Beide Karten werden mit ihrem Anker-Key gerendert, damit der Chatbot
/// per `tab:0@fruehstueck` / `tab:0@feierabend` an sie scrollen kann.
class _DealsCarousel extends StatefulWidget {
  const _DealsCarousel();
  @override
  State<_DealsCarousel> createState() => _DealsCarouselState();
}

class _DealsCarouselState extends State<_DealsCarousel> {
  final _ctrl = PageController(viewportFraction: 0.94);
  int _page = 0;

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final slides = <Widget>[
      _TimeDealCard(
        key: CustomerAnchors.fruehstueckDeal,
        eyebrow: 'FRÜHSTÜCKS-DEAL',
        timeRange: 'Täglich von 6 bis 8 Uhr — an allen Automaten.',
        icon: Icons.wb_sunny_outlined,
      ),
      _TimeDealCard(
        key: CustomerAnchors.feierabendDeal,
        eyebrow: 'FEIERABEND-DEAL',
        timeRange: 'Täglich von 16 bis 17 Uhr — an allen Automaten.',
        icon: Icons.nights_stay_outlined,
      ),
    ];
    return Column(
      children: [
        SizedBox(
          height: 440,
          child: PageView.builder(
            controller: _ctrl,
            itemCount: slides.length,
            onPageChanged: (i) => setState(() => _page = i),
            itemBuilder: (_, i) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4),
              child: slides[i],
            ),
          ),
        ),
        const SizedBox(height: AppSpacing.s3),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            for (int i = 0; i < slides.length; i++)
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                margin: const EdgeInsets.symmetric(horizontal: 3),
                width: _page == i ? 22 : 8,
                height: 8,
                decoration: BoxDecoration(
                  color: _page == i ? AppColors.brand : AppColors.borderSubtle,
                  borderRadius: BorderRadius.circular(4),
                ),
              ),
          ],
        ),
      ],
    );
  }
}

/// Zeitgebundener Kombi-Deal mit zwei Slots: **Getränk + Snack**.
///
/// Die konkrete Auswahl wird täglich zufällig neu getriggert
/// (Client-seitiger Date-Seed über die Top-Community-Favoriten). Da wir
/// aktuell noch keine echten Produktbilder pflegen, bleiben die zwei
/// Slots als Bild-Platzhalter mit Bördesnack24-Markenkreis stehen —
/// sobald echte Assets hinterlegt sind, ziehen sie automatisch nach.
class _TimeDealCard extends ConsumerWidget {
  const _TimeDealCard({
    super.key,
    required this.eyebrow,
    required this.timeRange,
    required this.icon,
  });

  final String eyebrow;
  final String timeRange;
  final IconData icon;

  RankedProduct? _pickDaily(List<RankedProduct> list) {
    if (list.isEmpty) return null;
    // Deterministischer „Tages-Zufall": alle Kunden sehen am gleichen
    // Tag die gleiche Kombi, aber sie wechselt zum Datumswechsel.
    final today = DateTime.now();
    final seed = today.year * 10000 + today.month * 100 + today.day;
    return list[seed % list.length];
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final drinks =
        ref.watch(topProductsProvider('Getränke')).valueOrNull ?? const [];
    final snacks =
        ref.watch(topProductsProvider('Snacks')).valueOrNull ?? const [];
    final drink = _pickDaily(drinks);
    final snack = _pickDaily(snacks);

    return AppCard(
      color: AppColors.brand,
      borderColor: AppColors.brand,
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s5,
        AppSpacing.s5,
        AppSpacing.s5,
        AppSpacing.s5,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, size: 18, color: AppColors.ink),
              const SizedBox(width: 6),
              Text(
                eyebrow,
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w800,
                  color: AppColors.ink,
                ).copyWith(letterSpacing: 2, height: 1),
              ),
              const Spacer(),
              // Kennzeichnung nach Art. 50 EU AI Act: die tägliche
              // Getränk-/Snack-Kombi wird algorithmisch ausgewählt →
              // KI-Chip mit Sprung in die AI-Info-Seite.
              const _DealAiBadge(),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text.rich(
            TextSpan(
              children: [
                TextSpan(
                  text: 'Getränk + Snack.',
                  style: AppTypography.display(
                    size: 22,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ).copyWith(height: 1.1),
                ),
                TextSpan(
                  text: '  *',
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            timeRange,
            style: AppTypography.body(
              size: 13,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
          ),
          const SizedBox(height: AppSpacing.s4),
          IntrinsicHeight(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Expanded(
                  child: _DealSlot(
                    label: 'Getränk',
                    product: drink,
                  ),
                ),
                const SizedBox(width: AppSpacing.s3),
                Expanded(
                  child: _DealSlot(
                    label: 'Snack',
                    product: snack,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            '* Nicht mit anderen Coupons/Aktionen kombinierbar. Sind '
            'mehrere Coupons für dasselbe Produkt aktiviert, wird '
            'automatisch der günstigste Preis für dich angewandt.',
            style: AppTypography.body(
              size: 9,
              weight: FontWeight.w600,
              color: AppColors.ink,
            ).copyWith(height: 1.3),
          ),
        ],
      ),
    );
  }
}

/// KI-Chip auf der Deal-Karte. Öffnet die AI-Info-Seite mit Art.-50-
/// Angaben. Muss ein eigenes Widget sein, weil `_TimeDealCard` als
/// ConsumerWidget keinen direkten BuildContext-Push macht — wir wollen
/// den Chip als kleinen Header-Action verbauen.
class _DealAiBadge extends StatelessWidget {
  const _DealAiBadge();
  @override
  Widget build(BuildContext context) {
    return AiBadge(
      dense: true,
      onTap: () => Navigator.of(context).push(
        MaterialPageRoute(builder: (_) => const AiInfoScreen()),
      ),
    );
  }
}

/// Ein Deal-Slot (Bild-Platzhalter + Produktname), wie er in Frühstücks-
/// und Feierabend-Deal-Karte eingesetzt wird. Falls kein Produkt geladen
/// werden konnte, bleibt der Slot bei „wird generiert".
///
/// Der Slot wird über `IntrinsicHeight + CrossAxisAlignment.stretch` in
/// der Row auf die Höhe des jeweils höheren Nachbarn gezogen. Damit
/// sowohl die Bild-Kachel gleich groß bleibt (AspectRatio 1:1) als auch
/// die zwei Slots exakt gleich hoch aussehen, füllt eine `Spacer`-Zeile
/// den freien Raum zwischen Bild und Produktname aus.
class _DealSlot extends StatelessWidget {
  const _DealSlot({required this.label, required this.product});
  final String label;
  final RankedProduct? product;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.s2),
      decoration: BoxDecoration(
        color: AppColors.ink,
        borderRadius: BorderRadius.circular(AppRadii.md),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            label.toUpperCase(),
            style: AppTypography.body(
              size: 10,
              weight: FontWeight.w800,
              color: AppColors.brand,
            ).copyWith(letterSpacing: 1.2),
          ),
          const SizedBox(height: 6),
          AspectRatio(
            aspectRatio: 1,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(AppRadii.sm),
              child: ProductImage.expand(
                imageUrl: product?.imageUrl,
                productName: product?.name ?? label,
              ),
            ),
          ),
          const SizedBox(height: 6),
          Expanded(
            child: Align(
              alignment: Alignment.topLeft,
              child: Text(
                product?.name ?? 'wird täglich generiert',
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w800,
                  color: AppColors.onDark,
                ).copyWith(height: 1.2),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Hero-Karussell mit 3 wechselnden Aktionskarten. Zeigt (1) Punkte­stand,
/// (2) aktuellste News, (3) größten Spendenzweck-Aufruf. Punktindikator
/// darunter.
class _HeroCarousel extends ConsumerStatefulWidget {
  const _HeroCarousel();
  @override
  ConsumerState<_HeroCarousel> createState() => _HeroCarouselState();
}

class _HeroCarouselState extends ConsumerState<_HeroCarousel> {
  final _pageCtrl = PageController(viewportFraction: 0.92);
  int _page = 0;

  @override
  void dispose() {
    _pageCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final news = ref.watch(newsProvider).valueOrNull;
    final donation = ref.watch(myDonationSummaryProvider).valueOrNull;

    // Punktestand ist raus: die Zahl steht schon oben in der
    // Key-Facts-Zeile, und die ist von dort aus anklickbar. Zweimal
    // dieselbe Kennzahl auf einem Screen ist Verwässerung.
    final slides = <Widget>[
      if (news != null && news.isNotEmpty) _HeroNewsCard(article: news.first),
      _HeroDonationCard(totalDonated: donation?.totalDonated ?? 0),
    ];
    return Column(
      children: [
        SizedBox(
          height: 160,
          child: PageView.builder(
            controller: _pageCtrl,
            itemCount: slides.length,
            onPageChanged: (i) => setState(() => _page = i),
            itemBuilder: (_, i) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4),
              child: slides[i],
            ),
          ),
        ),
        const SizedBox(height: 8),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            for (int i = 0; i < slides.length; i++)
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                margin: const EdgeInsets.symmetric(horizontal: 3),
                width: _page == i ? 22 : 8,
                height: 8,
                decoration: BoxDecoration(
                  color: _page == i ? AppColors.brand : AppColors.borderSubtle,
                  borderRadius: BorderRadius.circular(4),
                ),
              ),
          ],
        ),
      ],
    );
  }
}

class _HeroNewsCard extends StatelessWidget {
  const _HeroNewsCard({required this.article});
  final NewsArticle article;
  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.ink,
      borderRadius: BorderRadius.circular(AppRadii.lg),
      child: InkWell(
        borderRadius: BorderRadius.circular(AppRadii.lg),
        onTap: () => Navigator.of(context).push(
          MaterialPageRoute(builder: (_) => const NewsScreen()),
        ),
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s4),
          child: Row(
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  color: AppColors.brand,
                  borderRadius: BorderRadius.circular(AppRadii.md),
                ),
                alignment: Alignment.center,
                child:
                    const Icon(Icons.campaign, color: AppColors.ink, size: 30),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'NEUES VON UNS',
                      style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w800,
                        color: AppColors.brand,
                      ).copyWith(letterSpacing: 1),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      article.title,
                      style: AppTypography.display(
                        size: 18,
                        weight: FontWeight.w800,
                        color: AppColors.onDark,
                      ),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Mehr erfahren »',
                      style: AppTypography.body(
                        size: 12,
                        weight: FontWeight.w800,
                        color: AppColors.brand,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _HeroDonationCard extends StatelessWidget {
  const _HeroDonationCard({required this.totalDonated});
  final double totalDonated;
  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.statusPositive,
      borderRadius: BorderRadius.circular(AppRadii.lg),
      child: InkWell(
        borderRadius: BorderRadius.circular(AppRadii.lg),
        onTap: () => Navigator.of(context).push(
          MaterialPageRoute(builder: (_) => const DonationsScreen()),
        ),
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s4),
          child: Row(
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  color: AppColors.onDark,
                  borderRadius: BorderRadius.circular(AppRadii.md),
                ),
                alignment: Alignment.center,
                child: const Icon(
                  Icons.volunteer_activism,
                  color: AppColors.statusPositive,
                  size: 30,
                ),
              ),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'DEIN GUTES TUN',
                      style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w800,
                        color: AppColors.onDark,
                      ).copyWith(letterSpacing: 1),
                    ),
                    Text(
                      Formatters.euro(totalDonated),
                      style: AppTypography.display(
                        size: 24,
                        weight: FontWeight.w800,
                        color: AppColors.onDark,
                      ),
                    ),
                    Text(
                      'gespendet · Empfänger abstimmen',
                      style: AppTypography.body(
                        size: 12,
                        color: AppColors.onDark,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Freischalt-Hinweis für Nicht-Abonnenten: ersetzt die Abo-Vorteile
/// (Deals, Aktionen, Loyalty, persönliche + Wochenangebote) durch eine
/// prominente Karte mit CTA zum Abo-Screen.
class _SubscriptionLockCard extends ConsumerWidget {
  const _SubscriptionLockCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return AppCard(
      color: AppColors.ink,
      borderColor: AppColors.brand,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(
                Icons.workspace_premium_outlined,
                color: AppColors.brand,
                size: 26,
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: Text(
                  'Deine Vorteile warten',
                  style: AppTypography.display(
                    size: 18,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            'Mit dem Bördesnack24-Abo schaltest du frei:\n'
            '•  Frühstücks- & Feierabend-Deals\n'
            '•  Wochen- und Aktionsangebote mit Coupons\n'
            '•  Loyalty-Punkte mit Meilenstein-Boni\n'
            '•  Persönliche Angebote nur für dich',
            style: AppTypography.body(size: 14, color: AppColors.brandLight)
                .copyWith(height: 1.6),
          ),
          const SizedBox(height: AppSpacing.s4),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.brand,
                foregroundColor: AppColors.ink,
                padding: const EdgeInsets.symmetric(vertical: 13),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
              onPressed: () async {
                await Navigator.of(context).push(
                  MaterialPageRoute(builder: (_) => const SubscriptionScreen()),
                );
                // Nach Rückkehr neu prüfen — bei Abo-Wahl entsperrt der
                // Tab sofort.
                ref.invalidate(hasSubscriptionProvider);
              },
              child: const Text('Abo wählen — ab 0,99 € im Monat'),
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          // Marketing-Rechnung: ab welchem Einkaufswert sich das Abo lohnt.
          SizedBox(
            width: double.infinity,
            child: TextButton.icon(
              style: TextButton.styleFrom(
                foregroundColor: AppColors.brandLight,
              ),
              onPressed: () => Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (_) => const SubscriptionValueScreen(),
                ),
              ),
              icon: const Icon(Icons.calculate_outlined, size: 18),
              label: const Text('Ab wann rechnet sich das? Zur Rechnung'),
            ),
          ),
        ],
      ),
    );
  }
}
