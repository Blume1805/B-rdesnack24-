import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/motion.dart';
import '../../../../core/pricing/pricing.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/product_detail.dart';
import '../controllers/customer_providers.dart';
import 'product_detail_screen.dart';

/// Produktsuche als eigene Seite.
///
/// Bewusst eine eigene Seite statt eines Suchfelds mitten in der Liste:
/// Das Feld sitzt hier fest ganz oben. Die Tastatur kann es damit nie
/// verdecken — im mobilen Browser verkleinert sie das Layout-Viewport
/// nämlich nicht zuverlässig, weshalb ein Feld weiter unten in der Seite
/// beim Tippen hinter der Tastatur verschwindet.
class ProductSearchScreen extends ConsumerStatefulWidget {
  const ProductSearchScreen({super.key});

  @override
  ConsumerState<ProductSearchScreen> createState() =>
      _ProductSearchScreenState();
}

class _ProductSearchScreenState extends ConsumerState<ProductSearchScreen> {
  final _ctrl = TextEditingController();
  final _focus = FocusNode();

  /// Begriff, mit dem tatsächlich gesucht wird — hinkt der Eingabe um die
  /// Entprellzeit hinterher, damit nicht jeder Tastendruck eine Abfrage
  /// auslöst.
  String _query = '';
  Timer? _debounce;

  @override
  void initState() {
    super.initState();
    _ctrl.addListener(_onTyped);
  }

  @override
  void dispose() {
    _debounce?.cancel();
    _ctrl
      ..removeListener(_onTyped)
      ..dispose();
    _focus.dispose();
    super.dispose();
  }

  void _onTyped() {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 280), () {
      if (!mounted) return;
      final next = _ctrl.text.trim();
      if (next != _query) setState(() => _query = next);
    });
  }

  @override
  Widget build(BuildContext context) {
    final results = ref.watch(productSearchProvider(_query));
    final hasSub = ref.watch(hasSubscriptionProvider).valueOrNull ?? false;
    final rate = ref.watch(myEffectiveDiscountProvider);
    final effRate = rate > 0 ? rate : Pricing.appDiscountRate;

    return Scaffold(
      appBar: const HeroAppBar(title: Text('Produkte suchen')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(
              AppSpacing.s5,
              AppSpacing.s4,
              AppSpacing.s5,
              AppSpacing.s3,
            ),
            child: _SearchField(controller: _ctrl, focusNode: _focus),
          ),
          Expanded(
            child: results.when(
              loading: () => ListView(
                padding: const EdgeInsets.symmetric(
                  horizontal: AppSpacing.s5,
                ),
                children: const [
                  SkeletonCard(),
                  SizedBox(height: AppSpacing.s2),
                  SkeletonCard(),
                  SizedBox(height: AppSpacing.s2),
                  SkeletonCard(),
                ],
              ),
              error: (e, _) => _Notice(
                icon: Icons.cloud_off_outlined,
                title: 'Suche nicht erreichbar',
                text: '$e',
              ),
              data: (list) {
                if (list.isEmpty) {
                  return _Notice(
                    icon: Icons.search_off_outlined,
                    title: 'Nichts gefunden',
                    text: _query.isEmpty
                        ? 'Der Katalog ist gerade leer.'
                        : 'Zu „$_query" gibt es kein Produkt. '
                            'Versuch es mit einem kürzeren Begriff.',
                  );
                }
                return ListView.separated(
                  // Tastatur beim Scrollen schließen — sonst bleibt sie
                  // über den Treffern stehen.
                  keyboardDismissBehavior:
                      ScrollViewKeyboardDismissBehavior.onDrag,
                  padding: const EdgeInsets.fromLTRB(
                    AppSpacing.s5,
                    0,
                    AppSpacing.s5,
                    AppSpacing.s8,
                  ),
                  itemCount: list.length,
                  separatorBuilder: (_, __) =>
                      const SizedBox(height: AppSpacing.s2),
                  itemBuilder: (context, i) => FadeInUp(
                    // Nur die ersten Treffer staffeln — sonst wartet man
                    // bei 40 Ergebnissen auf die letzte Karte.
                    index: i < 6 ? i : 6,
                    child: _ResultTile(
                      product: list[i],
                      hasSubscription: hasSub,
                      effectiveRate: effRate,
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

/// Das Suchfeld selbst — auch von der Angebote-Seite als Optik-Vorlage
/// genutzt, damit der Übergang beim Antippen nahtlos wirkt.
class _SearchField extends StatefulWidget {
  const _SearchField({required this.controller, required this.focusNode});
  final TextEditingController controller;
  final FocusNode focusNode;

  @override
  State<_SearchField> createState() => _SearchFieldState();
}

class _SearchFieldState extends State<_SearchField> {
  @override
  void initState() {
    super.initState();
    widget.focusNode.addListener(_rebuild);
    widget.controller.addListener(_rebuild);
  }

  @override
  void dispose() {
    widget.focusNode.removeListener(_rebuild);
    widget.controller.removeListener(_rebuild);
    super.dispose();
  }

  void _rebuild() {
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final focused = widget.focusNode.hasFocus;
    final hasText = widget.controller.text.isNotEmpty;

    return AnimatedContainer(
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
          Icon(
            Icons.search,
            size: 22,
            color: focused ? AppColors.brandDark : AppColors.textMuted,
          ),
          const SizedBox(width: 8),
          Expanded(
            child: TextField(
              controller: widget.controller,
              focusNode: widget.focusNode,
              autofocus: true,
              textInputAction: TextInputAction.search,
              // Eingabe deutlich dunkler als der Platzhalter — sonst sieht
              // man beim Tippen kaum, was man geschrieben hat.
              style: AppTypography.body(
                size: 15,
                weight: FontWeight.w600,
                color: AppColors.ink,
              ),
              cursorColor: AppColors.brandDark,
              decoration: InputDecoration(
                hintText: 'Finde dein Lieblingsprodukt',
                hintStyle:
                    AppTypography.body(size: 14, color: AppColors.textMuted),
                border: InputBorder.none,
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                filled: false,
                isDense: true,
                contentPadding: const EdgeInsets.symmetric(vertical: 14),
              ),
            ),
          ),
          if (hasText)
            IconButton(
              tooltip: 'Eingabe löschen',
              visualDensity: VisualDensity.compact,
              icon: const Icon(
                Icons.close,
                size: 18,
                color: AppColors.textMuted,
              ),
              onPressed: () {
                Motion.tap();
                widget.controller.clear();
              },
            ),
        ],
      ),
    );
  }
}

/// Ein Treffer: Bild, Name, Kategorie, Preis.
class _ResultTile extends StatelessWidget {
  const _ResultTile({
    required this.product,
    required this.hasSubscription,
    required this.effectiveRate,
  });

  final RankedProduct product;
  final bool hasSubscription;
  final double effectiveRate;

  @override
  Widget build(BuildContext context) {
    final gross = product.grossPrice;
    final appPrice = gross == null
        ? null
        : Pricing.appPriceGross(gross, rate: effectiveRate);

    return AppCard(
      padding: const EdgeInsets.all(AppSpacing.s3),
      onTap: () => Navigator.of(context).push(
        MaterialPageRoute(
          builder: (_) => ProductDetailScreen(productId: product.id),
        ),
      ),
      child: Row(
        children: [
          ProductImage(
            imageUrl: product.imageUrl,
            productName: product.name,
            size: 52,
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  product.name,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: AppTypography.body(
                    size: 14,
                    weight: FontWeight.w700,
                    color: AppColors.ink,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  product.category,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w600,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
            ),
          ),
          if (gross != null) ...[
            const SizedBox(width: AppSpacing.s2),
            // Beide Preise untereinander: oben der Automatenpreis
            // (durchgestrichen), darunter der App-Preis. Auch ohne Abo
            // sichtbar — dort wirbt der App-Preis für den Vorteil, genau
            // wie im Produktdetail.
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  Formatters.euro(gross),
                  style: AppTypography.body(
                    size: 12,
                    weight: FontWeight.w600,
                    color: AppColors.textMuted,
                  ).copyWith(
                    decoration: TextDecoration.lineThrough,
                    decorationColor: AppColors.textMuted,
                  ),
                ),
                Text(
                  Formatters.euro(appPrice!),
                  style: AppTypography.display(
                    size: 17,
                    weight: FontWeight.w800,
                    color: AppColors.brandDark,
                  ).copyWith(height: 1.1),
                ),
                Text(
                  hasSubscription ? 'App-Preis' : 'mit App',
                  style: AppTypography.body(
                    size: 9.5,
                    weight: FontWeight.w700,
                    color: AppColors.brandDark,
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

/// Leer- und Fehlerzustand in einer Form.
class _Notice extends StatelessWidget {
  const _Notice({
    required this.icon,
    required this.title,
    required this.text,
  });

  final IconData icon;
  final String title;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(AppSpacing.s6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 40, color: AppColors.textMuted),
            const SizedBox(height: AppSpacing.s3),
            Text(
              title,
              textAlign: TextAlign.center,
              style: AppTypography.body(
                size: 15,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              text,
              textAlign: TextAlign.center,
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
          ],
        ),
      ),
    );
  }
}
