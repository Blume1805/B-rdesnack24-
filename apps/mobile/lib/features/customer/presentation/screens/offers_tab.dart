import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/pricing/pricing.dart';
import '../../../../core/services/install_prompt.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/prices.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../../../core/widgets/motion/motion.dart';
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

class OffersTab extends ConsumerWidget {
  const OffersTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final offers = ref.watch(offersProvider);
    final personals = ref.watch(myPersonalOffersProvider);
    final loyalty = ref.watch(myLoyaltyStatusProvider);
    // Abo-Gating: Basis frei, Vorteile im Abo. Während des Ladens wird
    // nicht gesperrt (kein Lock-Flackern); die Durchsetzung liegt
    // ohnehin zusätzlich serverseitig in den Aktivierungs-RPCs.
    final hasSub = ref.watch(hasBenefitsProvider).valueOrNull ?? true;

    return RefreshIndicator(
      onRefresh: () async {
        ref
          ..invalidate(offersProvider)
          ..invalidate(myPersonalOffersProvider)
          ..invalidate(myLoyaltyStatusProvider)
          ..invalidate(activatedOfferIdsProvider)
          ..invalidate(hasSubscriptionProvider)
          ..invalidate(topProductsProvider('Getränke'))
          ..invalidate(topProductsProvider('Snacks'))
          ..invalidate(topProductsProvider('Süßwaren'))
          ..invalidate(topProductsProvider('Eis'));
      },
      color: AppColors.brand,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s5,
          AppSpacing.s8,
        ),
        children: [
          // 0. ── Suchleiste (öffnet Produktkatalog-Filter) ────────────
          const _ProductSearchBar(),
          const SizedBox(height: AppSpacing.s4),

          // 0.05. ── „Aufs Handy legen" ────────────────────────────────
          // Bördesnack24 läuft als Web-App, nicht über die App-Stores. Wer
          // über den QR-Code am Automaten kommt, landet im Browser und müsste
          // ihn beim nächsten Einkauf wiederfinden. Der Hinweis erscheint nur,
          // wenn das Gerät die Ablage überhaupt anbietet und der Kunde ihn
          // nicht schon weggeklickt hat.
          if (ref.watch(showInstallHintProvider).valueOrNull ?? false) ...[
            InstallHintCard(
              onDismiss: () async {
                await InstallHintPreference.dismiss();
                ref.invalidate(showInstallHintProvider);
              },
            ),
            const SizedBox(height: AppSpacing.s4),
          ],

          // 0.1. ── Key-Facts: Rabatt · Punkte · Coupons auf einen Blick ─
          // Die drei Zahlen, die den Kunden interessieren — ohne Lesen
          // erfassbar, direkt über den Angeboten.
          if (hasSub) ...[
            const Reveal(child: _KeyFactsRow()),
            const SizedBox(height: AppSpacing.s5),
          ],

          // Vorteile stehen seit dem 2026-09-16 allen Kunden offen; der
          // Freischalt-Hinweis erscheint nur noch, wenn der Anspruch aus
          // anderen Gründen fehlt (Schalter Pricing.benefitsFreeForAll).
          if (!hasSub) ...[
            const _SubscriptionLockCard(),
            const SizedBox(height: AppSpacing.s6),
          ],

          if (hasSub) ...[
            // 0.3. ── Frühstücks-Deal + Feierabend-Deal (Karussell) ───
            const Reveal(index: 1, child: _DealsCarousel()),
            const SizedBox(height: AppSpacing.s5),

            // 0.5. ── Hero-Karussell (rotierende Aktionskarten) ───────
            const Reveal(index: 2, child: _HeroCarousel()),
            const SizedBox(height: AppSpacing.s6),
          ],

          // 1. ── News-Teaser (klick öffnet Feed) ─────────────────────
          const Reveal(child: _NewsTeaser()),
          const SizedBox(height: AppSpacing.s6),

          // 2. ── Punktesammler (Loyalty + persönliche Angebote) ──────
          if (hasSub) ...[
            // Offline-Hinweis: Coupons kommen aus dem lokalen Snapshot.
            if (ref.watch(personalOffersOfflineProvider)) ...[
              AppCard(
                color: AppColors.statusWarningTint,
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
                        'Kein Empfang: Deine gespeicherten Coupons und '
                        'Codes werden offline angezeigt.',
                        style: AppTypography.body(
                          size: 12,
                          color: AppColors.textStrong,
                        ),
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
                    : Reveal(child: _LoyaltyProgressCard(status: l)),
              ),
            ),
            if (loyalty.valueOrNull != null)
              const SizedBox(height: AppSpacing.s5),
            personals.when(
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
                        eyebrow: 'Für Dich persönlich',
                        title: 'Sonderangebote',
                        action: _AiSectionBadge(context: context),
                      ),
                      const SizedBox(height: AppSpacing.s4),
                      CardStack(
                        children: [
                          for (final o in specials)
                            _PersonalOfferCard(offer: o),
                        ],
                      ),
                      const SizedBox(height: AppSpacing.s6),
                    ],
                    if (loyalty.isNotEmpty) ...[
                      SectionHeader(
                        eyebrow: 'Belohnung',
                        title: 'Bonus-Angebote',
                        action: _AiSectionBadge(context: context),
                      ),
                      const SizedBox(height: AppSpacing.s4),
                      CardStack(
                        children: [
                          for (final o in loyalty) _PersonalOfferCard(offer: o),
                        ],
                      ),
                      const SizedBox(height: AppSpacing.s6),
                    ],
                    if (basis.isNotEmpty) ...[
                      SectionHeader(
                        eyebrow: 'Nur für Dich',
                        title: 'Dein Angebot',
                        action: _AiSectionBadge(context: context),
                      ),
                      const SizedBox(height: AppSpacing.s4),
                      CardStack(
                        children: [
                          for (final o in basis) _PersonalOfferCard(offer: o),
                        ],
                      ),
                      const SizedBox(height: AppSpacing.s6),
                    ],
                  ],
                );
              },
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
              loading: () => const Center(
                child: Padding(
                  padding: EdgeInsets.all(AppSpacing.s6),
                  child: CircularProgressIndicator(color: AppColors.brand),
                ),
              ),
              error: (e, _) => AppCard(
                color: AppColors.statusCriticalTint,
                borderColor: AppColors.statusCritical,
                child: Text(
                  '$e',
                  style:
                      AppTypography.body(size: 13, color: AppColors.textStrong),
                ),
              ),
              data: (alle) {
                // Nur Angebote mit Bruttopreis; ein Nettopreis sähe aus wie
                // ein Endpreis (§ 3 PAngV).
                final list = alle.where((o) => o.hasPrice).toList();
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
                // 460 statt 440: Platz für die Pfandzeile unter dem Preis
                // (V-016), ohne dass die Karte abgeschnitten wird.
                return FocusCarousel(
                  height: 460,
                  itemExtent: 260 + AppSpacing.s3,
                  itemCount: list.length,
                  itemBuilder: (context, i) => _WeeklyOfferSlot(offer: list[i]),
                  labelFor: (i) => list[i].title,
                  labelStyle: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w800,
                    color: AppColors.textStrong,
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
          const Reveal(child: _FavoritesCarousel()),
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
    final points = ref.watch(myLoyaltyStatusProvider).valueOrNull?.points;
    final coupons = ref.watch(myPersonalOffersProvider).valueOrNull?.length;

    return Row(
      children: [
        Expanded(
          child: _FactTile(
            icon: Icons.sell_outlined,
            number: effRate * 100,
            format: (v) =>
                '${v.toStringAsFixed(effRate * 100 % 1 == 0 ? 0 : 1).replaceAll('.', ',')} %',
            label: 'Dauerrabatt',
          ),
        ),
        const SizedBox(width: AppSpacing.s2),
        Expanded(
          child: _FactTile(
            icon: Icons.stars_outlined,
            number: points?.toDouble(),
            format: (v) => '${v.round()}',
            label: 'Punkte',
          ),
        ),
        const SizedBox(width: AppSpacing.s2),
        Expanded(
          child: _FactTile(
            icon: Icons.confirmation_number_outlined,
            number: coupons?.toDouble(),
            format: (v) => '${v.round()}',
            label: coupons == 1 ? 'Coupon' : 'Coupons',
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
    required this.number,
    required this.format,
    required this.label,
  });
  final IconData icon;

  /// Wert aus der Datenbank; null, solange er lädt.
  final double? number;
  final String Function(double v) format;
  final String label;

  @override
  Widget build(BuildContext context) {
    final style = AppTypography.display(
      size: 20,
      weight: FontWeight.w800,
      color: AppColors.textStrong,
    );
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s2,
        vertical: AppSpacing.s3,
      ),
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        border: Border.all(color: AppColors.borderSubtle),
        borderRadius: BorderRadius.circular(AppRadii.md),
      ),
      child: Column(
        children: [
          Icon(icon, size: 16, color: AppColors.brandDark),
          const SizedBox(height: 4),
          FittedBox(
            fit: BoxFit.scaleDown,
            child: number == null
                ? Text(
                    '…',
                    semanticsLabel: 'wird geladen',
                    style: style,
                  )
                : CountUp(value: number!, format: format, style: style),
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
  }
}

class _PersonalLoading extends StatelessWidget {
  const _PersonalLoading();
  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(vertical: AppSpacing.s6),
      child: Center(child: CircularProgressIndicator(color: AppColors.brand)),
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
        'günstigste Preis für Dich angewandt.',
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
        return (label: 'Nur für Dich', icon: Icons.card_giftcard);
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final remaining = offer.validTo.difference(DateTime.now());
    final days = remaining.inDays;
    final hours = remaining.inHours;
    final validityLabel = days >= 1
        ? 'Noch $days ${days == 1 ? 'Tag' : 'Tage'}'
        : hours >= 1
            ? 'Noch $hours Std.'
            : 'Endet bald';
    final h = _header;
    final isWildcard = offer.isSpecial;

    return AppCard(
      color: AppColors.surfaceInverse,
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
                              'Auf ein Produkt Deiner Wahl',
                              style: AppTypography.body(
                                size: 13,
                                weight: FontWeight.w600,
                                color: AppColors.brandPale,
                              ),
                            ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s4),
                // Ohne Steuersatz kein Preis: lieber nur der Rabatt als ein
                // Nettopreis, der wie ein Endpreis aussieht (§ 3 PAngV).
                if (isWildcard || !offer.hasPrice)
                  Row(
                    children: [
                      Text(
                        '-${offer.discountPercent.toStringAsFixed(0)} %'
                        '${isWildcard ? ' *' : ''}',
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
                            color: AppColors.brandPale,
                          ),
                        ),
                      ),
                    ],
                  )
                else
                  _DarkPriceRow(
                    regular: offer.regularGross!,
                    discounted: offer.offerGross!,
                    percent: offer.discountPercent,
                    depositNote: Prices.depositNote(offer.deposit),
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
          color: AppColors.surfaceInverse,
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
                  color: AppColors.brandPale,
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
                        color: AppColors.onBrand,
                      ),
                    )
                  : const Icon(
                      Icons.add_circle_outline,
                      size: 18,
                      color: AppColors.onBrand,
                    ),
              label: const Text('Aktivieren'),
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.brand,
                foregroundColor: AppColors.onBrand,
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
        color: AppColors.surfaceInverse,
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
          Text(
            'Einlöse-Code',
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.brand,
            ).copyWith(letterSpacing: 0.6),
          ),
          const SizedBox(height: AppSpacing.s2),
          // Muster M11 (motion/MOTION.md): Kopieren mit Bestätigung in der
          // Pill statt Symbol-Schaltfläche und Hinweisleiste.
          CopyPill(
            value: _PersonalOfferCard._formatCode(offer.redemptionCode),
            copyText: offer.redemptionCode,
            semanticLabel: 'Einlöse-Code',
            valueStyle: AppTypography.display(
              size: 26,
              weight: FontWeight.w800,
              color: AppColors.onDark,
            ).copyWith(letterSpacing: 3),
          ),
          const SizedBox(height: AppSpacing.s3),
          _RedeemButton(code: offer.redemptionCode),
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
                      color: AppColors.onStatus,
                    ),
                  )
                : const Icon(
                    Icons.check_circle,
                    size: 18,
                    color: AppColors.onStatus,
                  ),
            label: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Aktiviert',
                  style: AppTypography.body(
                    size: 15,
                    weight: FontWeight.w800,
                    color: AppColors.onStatus,
                  ),
                ),
                Text(
                  '(Tippen zum Deaktivieren)',
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w700,
                    color: AppColors.onStatus,
                  ),
                ),
              ],
            ),
            style: FilledButton.styleFrom(
              backgroundColor: AppColors.statusPositiveFill,
              foregroundColor: AppColors.onStatus,
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
                        ? 'Angebot eingelöst, viel Spaß!'
                        : 'Einlösen fehlgeschlagen: ${err ?? 'unbekannt'}',
                  ),
                ),
              );
            },
      style: FilledButton.styleFrom(
        backgroundColor: AppColors.brand,
        foregroundColor: AppColors.onBrand,
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
                color: AppColors.textStrong,
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
    this.depositNote,
  });
  final double regular;
  final double discounted;
  final double percent;

  /// „zzgl. 0,25 € Pfand" (§ 7 PAngV), sonst `null`.
  final String? depositNote;
  @override
  Widget build(BuildContext context) {
    final row = Row(
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
            color: AppColors.brandPale,
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
    if (depositNote == null) return row;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        row,
        const SizedBox(height: AppSpacing.s1),
        Text(
          depositNote!,
          style: AppTypography.body(
            size: 13,
            weight: FontWeight.w600,
            color: AppColors.brandPale,
          ),
        ),
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
      padding: EdgeInsets.zero,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(AppRadii.lg),
        child: Stack(
          children: [
            // Muster 11: Börde-Silhouette als Tiefenebene. Rein dekorativ.
            Positioned(
              right: -24,
              top: 4,
              child: ExcludeSemantics(
                child: ParallaxLayer(
                  depth: 0.14,
                  child: SizedBox(
                    width: 190,
                    height: 90,
                    child: CustomPaint(
                      painter: BoerdeOutlinePainter(
                        color: AppColors.brand.withValues(alpha: 0.12),
                        stroke: 1.5,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(AppSpacing.s5),
              child: _loyaltyBody(resetDay, resetMonth, tiers),
            ),
          ],
        ),
      ),
    );
  }

  Widget _loyaltyBody(String resetDay, String resetMonth, List<int> tiers) {
    return Column(
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
            CountUp(
              value: status.points.toDouble(),
              format: (v) => '${v.round()}',
              style: AppTypography.display(
                size: 40,
                weight: FontWeight.w800,
                color: AppColors.textStrong,
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
                'Noch ${status.pointsToNext} bis ${status.nextTier}',
                style: AppTypography.body(
                  size: 13,
                  weight: FontWeight.w800,
                  color: AppColors.textStrong,
                ),
              ),
          ],
        ),
        const SizedBox(height: AppSpacing.s3),
        // Meilenstein-Timeline
        _TierTimeline(tiers: tiers, points: status.points),
      ],
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
    // Nur auf der erreichten (goldenen) Kachel verwendet.
    const ink = AppColors.onBrand;
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
            // Symbol über dem Prozentwert. Vorher ein Stack, der nur so groß
            // wie das Symbol war: der Wert lag dadurch auf dem Symbol
            // (Befund Bildschirmfoto 27.09.2026).
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(
                  reached ? Icons.card_giftcard_rounded : Icons.lock_outline,
                  size: 22,
                  color: reached ? ink : AppColors.textMuted,
                ),
                const SizedBox(height: 2),
                Text(
                  '-$percent %',
                  style: AppTypography.body(
                    size: 12,
                    weight: reached ? FontWeight.w800 : FontWeight.w700,
                    color: reached ? ink : AppColors.textMuted,
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
              color: reached ? AppColors.textStrong : AppColors.textMuted,
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
      regularPrice: offer.regularGross ?? 0,
      offerPrice: offer.offerGross ?? 0,
      depositNote: Prices.depositNote(offer.deposit),
      discountPercent: offer.discountPercent ?? 10,
      imageUrl: offer.imageUrl,
      validUntil: offer.validTo,
      width: 260,
      onTap: offer.productId == null ? null : openDetail,
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
                    color: AppColors.onStatus,
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
                  color: AppColors.onStatus,
                ),
              ),
              Text(
                '(Tippen zum Deaktivieren)',
                style: AppTypography.body(
                  size: 11,
                  weight: FontWeight.w700,
                  color: AppColors.onStatus,
                ),
              ),
            ],
          ),
          style: FilledButton.styleFrom(
            backgroundColor: AppColors.statusPositiveFill,
            foregroundColor: AppColors.onStatus,
            padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          ),
        ),
      );
    }
    return SizedBox(
      width: double.infinity,
      child: FilledButton.icon(
        onPressed: busy ? null : onActivate,
        icon: busy
            ? const SizedBox(
                width: 14,
                height: 14,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  color: AppColors.onBrand,
                ),
              )
            : const Icon(Icons.add_circle_outline, size: 18),
        label: const Text('Aktivieren'),
        style: FilledButton.styleFrom(
          backgroundColor: AppColors.brand,
          foregroundColor: AppColors.onBrand,
          textStyle: AppTypography.body(size: 13, weight: FontWeight.w800),
        ),
      ),
    );
  }
}

/// Eure-Favoriten-Sektion pro Kategorie — Top 3 als horizontaler Slider.
/// „Eure Favoriten": die bestbewerteten Produkte je Kategorie in einem
/// Karussell, Muster M07 aus `motion/MOTION.md` (geneigte Nachbarkarten).
///
/// Vorher drei getrennte Reihen für Getränke, Snacks und Eis; Süßwaren
/// fehlten, obwohl der Katalog 13 davon führt (Befund 27.09.2026). Die
/// Überschrift bleibt „Eure Favoriten", nicht „Heute beliebt": Grundlage
/// sind Bewertungen, keine Verkaufszahlen (motion/ABWEICHUNGEN.md, R-4).
class _FavoritesCarousel extends ConsumerWidget {
  const _FavoritesCarousel();

  static const _categories = ['Getränke', 'Snacks', 'Süßwaren', 'Eis'];

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final lists = [
      for (final c in _categories) (c, ref.watch(topProductsProvider(c))),
    ];
    final favorites = [
      for (final (category, list) in lists)
        for (final (i, p)
            in (list.valueOrNull ?? const <RankedProduct>[]).indexed)
          (product: p, rank: i + 1, category: category),
    ];
    if (favorites.isEmpty) {
      if (lists.any((l) => l.$2.isLoading)) {
        return const Padding(
          padding: EdgeInsets.symmetric(vertical: AppSpacing.s4),
          child: Center(
            child: CircularProgressIndicator(color: AppColors.brand),
          ),
        );
      }
      return AppCard(
        color: AppColors.surfaceAlt,
        padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.s4,
          vertical: AppSpacing.s3,
        ),
        child: Text(
          'Noch keine Bewertungen.',
          style: AppTypography.body(size: 13, color: AppColors.textMuted),
        ),
      );
    }
    return FocusCarousel(
      tilt: true,
      // Karte 200 px plus Abstand; Seitenanteil am Telefon etwa 0,62 wie in
      // der Spezifikation. Die Höhe lässt Platz für die geneigten Ecken.
      itemExtent: 212,
      height: 290,
      itemCount: favorites.length,
      itemBuilder: (context, i) => _FavoriteCard(
        product: favorites[i].product,
        rank: favorites[i].rank,
        category: favorites[i].category,
      ),
      labelFor: (i) => favorites[i].product.name,
      labelStyle: AppTypography.body(
        size: 14,
        weight: FontWeight.w800,
        color: AppColors.textStrong,
      ),
    );
  }
}

class _FavoriteCard extends StatelessWidget {
  const _FavoriteCard({
    required this.product,
    required this.rank,
    required this.category,
  });
  final int rank;
  final RankedProduct product;
  final String category;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 200,
      child: AppCard(
        padding: EdgeInsets.zero,
        onTap: () => Navigator.of(context).push(
          MaterialPageRoute(
            builder: (_) => ProductDetailScreen(productId: product.id),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          // Nur so hoch wie der Inhalt; das Karussell ist höher, damit die
          // geneigten Ecken Platz haben.
          mainAxisSize: MainAxisSize.min,
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
                        color: AppColors.onBrand,
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
                    'Platz $rank, $category',
                    style: AppTypography.body(
                      size: 11,
                      weight: FontWeight.w700,
                      color: AppColors.textMuted,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    product.name,
                    style: AppTypography.body(
                      size: 13,
                      weight: FontWeight.w800,
                      color: AppColors.textStrong,
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
        final preview = list.take(2).toList();
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
                            color: AppColors.onBrand,
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
                              color: AppColors.textStrong,
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
        // Bild-Platzhalter für das News-Bild (72×72)
        ProductImage(
          imageUrl: article.imageUrl,
          productName: article.title,
          size: 72,
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
                  color: AppColors.textStrong,
                ),
                maxLines: 3,
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
  const _ProductSearchBar();
  @override
  ConsumerState<_ProductSearchBar> createState() => _ProductSearchBarState();
}

class _ProductSearchBarState extends ConsumerState<_ProductSearchBar> {
  final _ctrl = TextEditingController();
  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
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
    return Container(
      decoration: BoxDecoration(
        color: AppColors.surfaceCard,
        border: Border.all(color: AppColors.borderSubtle),
        borderRadius: BorderRadius.circular(AppRadii.pill),
      ),
      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s3),
      child: Row(
        children: [
          const Icon(Icons.search, color: AppColors.textMuted, size: 22),
          const SizedBox(width: 8),
          Expanded(
            child: TextField(
              controller: _ctrl,
              textInputAction: TextInputAction.search,
              onSubmitted: _search,
              decoration: InputDecoration(
                hintText: 'Finde Dein Lieblingsprodukt',
                hintStyle: AppTypography.body(
                  size: 14,
                  color: AppColors.textMuted,
                ),
                border: InputBorder.none,
                isDense: true,
                contentPadding: const EdgeInsets.symmetric(vertical: 14),
              ),
            ),
          ),
        ],
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
        eyebrow: 'Frühstücks-Deal',
        timeRange: 'Täglich von 6 bis 8 Uhr, an allen Automaten.',
        icon: Icons.wb_sunny_outlined,
      ),
      _TimeDealCard(
        key: CustomerAnchors.feierabendDeal,
        eyebrow: 'Feierabend-Deal',
        timeRange: 'Täglich von 16 bis 17 Uhr, an allen Automaten.',
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
              Icon(icon, size: 18, color: AppColors.onBrand),
              const SizedBox(width: 6),
              Text(
                eyebrow,
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w800,
                  color: AppColors.onBrand,
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
                    color: AppColors.onBrand,
                  ).copyWith(height: 1.1),
                ),
                TextSpan(
                  text: '  *',
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w800,
                    color: AppColors.onBrand,
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
              color: AppColors.onBrand,
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
            'automatisch der günstigste Preis für Dich angewandt.',
            style: AppTypography.body(
              size: 9,
              weight: FontWeight.w600,
              color: AppColors.onBrand,
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
        color: AppColors.surfaceInverse,
        borderRadius: BorderRadius.circular(AppRadii.md),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            label,
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
    final loyalty = ref.watch(myLoyaltyStatusProvider).valueOrNull;
    final news = ref.watch(newsProvider).valueOrNull;
    final donation = ref.watch(myDonationSummaryProvider).valueOrNull;

    final slides = <Widget>[
      _HeroLoyaltyCard(status: loyalty),
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

class _HeroLoyaltyCard extends StatelessWidget {
  const _HeroLoyaltyCard({required this.status});
  final LoyaltyStatus? status;

  /// Coupon je Meilenstein, wie in `_LoyaltyProgressCard._rewards`.
  static const _couponPct = {500: 5, 1200: 10, 2000: 15, 3000: 25};

  /// Vorher stand hier fest „Nächster Meilenstein bringt weitere % Rabatt"
  /// — ohne Zahl (Befund 26.09.2026). Jetzt aus den echten Daten.
  static String _nextLine(LoyaltyStatus? s) {
    final next = s?.nextTier;
    if (s == null) return 'Sammle Punkte bei jedem Kauf.';
    if (next == null) return 'Alle Meilensteine dieses Monats erreicht.';
    final pct = _couponPct[next];
    return pct == null
        ? 'Noch ${s.pointsToNext} Punkte bis zum nächsten Meilenstein.'
        : 'Noch ${s.pointsToNext} Punkte bis zu Deinem $pct-%-Coupon.';
  }

  @override
  Widget build(BuildContext context) {
    final points = status?.points ?? 0;
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [AppColors.brand, Color(0xFFE5A800)],
        ),
        borderRadius: BorderRadius.circular(AppRadii.lg),
      ),
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Row(
        children: [
          Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              color: AppColors.surfaceInverse,
              borderRadius: BorderRadius.circular(AppRadii.md),
            ),
            alignment: Alignment.center,
            child: const Icon(
              Icons.stars_rounded,
              color: AppColors.brand,
              size: 32,
            ),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Dein Punktestand',
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w800,
                    color: AppColors.onBrand,
                  ).copyWith(letterSpacing: 1),
                ),
                Text(
                  '$points Punkte',
                  style: AppTypography.display(
                    size: 26,
                    weight: FontWeight.w800,
                    color: AppColors.onBrand,
                  ),
                ),
                Text(
                  _nextLine(status),
                  style: AppTypography.body(
                    size: 12,
                    color: AppColors.onBrand,
                  ),
                  maxLines: 2,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _HeroNewsCard extends StatelessWidget {
  const _HeroNewsCard({required this.article});
  final NewsArticle article;
  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.surfaceInverse,
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
                child: const Icon(
                  Icons.campaign,
                  color: AppColors.onBrand,
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
                      'Neues von uns',
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
      color: AppColors.statusPositiveFill,
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
                  color: AppColors.onStatus,
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
                      'Dein Beitrag',
                      style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w800,
                        color: AppColors.onStatus,
                      ).copyWith(letterSpacing: 1),
                    ),
                    Text(
                      Formatters.euro(totalDonated),
                      style: AppTypography.display(
                        size: 24,
                        weight: FontWeight.w800,
                        color: AppColors.onStatus,
                      ),
                    ),
                    Text(
                      'gespendet. Empfänger abstimmen',
                      style: AppTypography.body(
                        size: 12,
                        color: AppColors.onStatus,
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
      color: AppColors.surfaceInverse,
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
            'Mit dem Bördesnack24-Abo schaltest Du frei:\n'
            '•  Frühstücks- & Feierabend-Deals\n'
            '•  Wochen- und Aktionsangebote mit Coupons\n'
            '•  Loyalty-Punkte mit Meilenstein-Boni\n'
            '•  Persönliche Angebote nur für Dich',
            style: AppTypography.body(size: 14, color: AppColors.brandPale)
                .copyWith(height: 1.6),
          ),
          const SizedBox(height: AppSpacing.s4),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.brand,
                foregroundColor: AppColors.onBrand,
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
              child: const Text('Vorteile ansehen'),
            ),
          ),
          const SizedBox(height: AppSpacing.s2),
          // Marketing-Rechnung: ab welchem Einkaufswert sich das Abo lohnt.
          SizedBox(
            width: double.infinity,
            child: TextButton.icon(
              style: TextButton.styleFrom(
                foregroundColor: AppColors.brandPale,
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
