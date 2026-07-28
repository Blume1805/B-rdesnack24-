import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/motion/motion.dart';
import '../../../../core/pricing/pricing.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/product_availability.dart';
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
    // Der Begriff wird entprellt in den Filter gespiegelt; Kategorie und
    // Unterkategorie kommen aus dem Provider, damit die Auswahl einen
    // Seitenwechsel (z. B. ins Produktdetail und zurück) übersteht.
    final filter = ref.watch(productFilterProvider).withQuery(_query);
    final results = ref.watch(productSearchProvider(filter));
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
          _FilterBar(filter: filter),
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
                  // Bei aktivem Filter ist fast immer der Filter schuld und
                  // nicht der Suchbegriff — sonst sucht man den Fehler in der
                  // Eingabe, während oben eine Kategorie ausgewählt ist.
                  return _Notice(
                    icon: Icons.search_off_outlined,
                    title: 'Nichts gefunden',
                    text: filter.isFiltered
                        ? 'In dieser Kategorie gibt es dazu nichts. '
                            'Tipp den Filter oben noch einmal an, um ihn '
                            'aufzuheben.'
                        : _query.isEmpty
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
                  product.subcategory ?? product.category,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: AppTypography.body(
                    size: 11,
                    weight: FontWeight.w600,
                    color: AppColors.textMuted,
                  ),
                ),
                const SizedBox(height: 4),
                _AvailabilityLine(product: product),
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

/// Filterleiste: Warengruppen, bei Getränken zusätzlich eine zweite Zeile
/// mit der Feingliederung. Die zweite Zeile erscheint nur, wenn die
/// Hauptkategorie sie überhaupt anbietet — sonst stünden dort tote Chips.
class _FilterBar extends ConsumerWidget {
  const _FilterBar({required this.filter});

  final ProductFilter filter;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final subs = filter.availableSubcategories;
    void update(ProductFilter next) =>
        ref.read(productFilterProvider.notifier).state = next;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          height: 38,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s5),
            children: [
              for (final c in ProductFilter.categories)
                Padding(
                  padding: const EdgeInsets.only(right: AppSpacing.s2),
                  child: _FilterChip(
                    label: c,
                    icon: _iconFor(c),
                    selected: filter.category == c,
                    onTap: () => update(filter.toggleCategory(c)),
                  ),
                ),
            ],
          ),
        ),
        if (subs.isNotEmpty) ...[
          const SizedBox(height: AppSpacing.s2),
          SizedBox(
            height: 34,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s5),
              children: [
                for (final s in subs)
                  Padding(
                    padding: const EdgeInsets.only(right: AppSpacing.s2),
                    child: _FilterChip(
                      label: s,
                      selected: filter.subcategory == s,
                      dense: true,
                      onTap: () => update(filter.toggleSubcategory(s)),
                    ),
                  ),
              ],
            ),
          ),
        ],
        const SizedBox(height: AppSpacing.s3),
      ],
    );
  }

  static IconData _iconFor(String category) => switch (category) {
        'Getränke' => Icons.local_drink_outlined,
        'Süßwaren' => Icons.cookie_outlined,
        'Snacks' => Icons.lunch_dining_outlined,
        'Eis' => Icons.icecream_outlined,
        _ => Icons.category_outlined,
      };
}

class _FilterChip extends StatelessWidget {
  const _FilterChip({
    required this.label,
    required this.selected,
    required this.onTap,
    this.icon,
    this.dense = false,
  });

  final String label;
  final bool selected;
  final VoidCallback onTap;
  final IconData? icon;
  final bool dense;

  @override
  Widget build(BuildContext context) {
    return PressableScale(
      onTap: onTap,
      child: AnimatedContainer(
        duration: Motion.duration(context, AppMotion.fast),
        curve: AppMotion.easeOut,
        padding: EdgeInsets.symmetric(
          horizontal: dense ? AppSpacing.s3 : AppSpacing.s3 + 2,
          vertical: dense ? 6 : 8,
        ),
        decoration: BoxDecoration(
          color: selected ? AppColors.ink : AppColors.surfaceCard,
          border: Border.all(
            color: selected ? AppColors.ink : AppColors.borderSubtle,
          ),
          borderRadius: BorderRadius.circular(AppRadii.pill),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (icon != null) ...[
              Icon(
                icon,
                size: 15,
                color: selected ? AppColors.brand : AppColors.textMuted,
              ),
              const SizedBox(width: 5),
            ],
            Text(
              label,
              style: AppTypography.body(
                size: dense ? 11.5 : 12.5,
                weight: FontWeight.w700,
                color: selected ? AppColors.onDark : AppColors.ink,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Zeigt, an wie vielen Automaten es den Artikel gerade gibt, und öffnet
/// per Tap die Liste der Standorte.
class _AvailabilityLine extends StatelessWidget {
  const _AvailabilityLine({required this.product});

  final RankedProduct product;

  @override
  Widget build(BuildContext context) {
    final n = product.availableMachines;
    final out = n == 0;
    return GestureDetector(
      // Eigener Tap-Handler: die Karte selbst führt ins Produktdetail,
      // hier will der Kunde aber wissen, wo er es bekommt.
      onTap: () => showMachineAvailabilitySheet(context, product),
      behavior: HitTestBehavior.opaque,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            out ? Icons.location_off_outlined : Icons.place_outlined,
            size: 13,
            color: out ? AppColors.textMuted : AppColors.statusPositive,
          ),
          const SizedBox(width: 3),
          Flexible(
            child: Text(
              out
                  ? 'gerade nirgends vorrätig'
                  : n == 1
                      ? 'an 1 Automaten'
                      : 'an $n Automaten',
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: AppTypography.body(
                size: 11,
                weight: FontWeight.w700,
                color: out ? AppColors.textMuted : AppColors.statusPositive,
              ).copyWith(
                decoration: out ? null : TextDecoration.underline,
                decorationColor: AppColors.statusPositive,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Bottom-Sheet mit allen Automaten, die das Produkt führen.
Future<void> showMachineAvailabilitySheet(
  BuildContext context,
  RankedProduct product,
) {
  return showModalBottomSheet<void>(
    context: context,
    showDragHandle: true,
    backgroundColor: AppColors.surfaceCard,
    isScrollControlled: true,
    builder: (_) => _MachineAvailabilitySheet(product: product),
  );
}

class _MachineAvailabilitySheet extends ConsumerWidget {
  const _MachineAvailabilitySheet({required this.product});

  final RankedProduct product;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final async = ref.watch(productAvailabilityProvider(product.id));

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          0,
          AppSpacing.s5,
          AppSpacing.s5,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              product.name,
              style: AppTypography.display(
                size: 18,
                weight: FontWeight.w800,
                color: AppColors.ink,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              'Wo gibt es das gerade?',
              style: AppTypography.body(size: 12.5, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            async.when(
              loading: () => const Padding(
                padding: EdgeInsets.symmetric(vertical: AppSpacing.s5),
                child: Center(
                  child: CircularProgressIndicator(color: AppColors.brand),
                ),
              ),
              error: (e, _) => Text(
                'Bestand gerade nicht abrufbar.',
                style: AppTypography.body(size: 13, color: AppColors.textMuted),
              ),
              data: (rows) {
                if (rows.isEmpty) {
                  return Text(
                    'Dieser Artikel ist aktuell keinem Automaten zugeordnet.',
                    style: AppTypography.body(
                      size: 13,
                      color: AppColors.textMuted,
                    ),
                  );
                }
                return Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    for (final r in rows) ...[
                      _MachineRow(entry: r),
                      if (r != rows.last)
                        const Divider(
                          height: AppSpacing.s4,
                          color: AppColors.borderSubtle,
                        ),
                    ],
                  ],
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _MachineRow extends StatelessWidget {
  const _MachineRow({required this.entry});

  final ProductAvailability entry;

  @override
  Widget build(BuildContext context) {
    final (color, label) = switch (entry.availability) {
      'available' => (AppColors.statusPositive, 'vorrätig'),
      'low' => (AppColors.statusWarning, 'nur noch wenige'),
      _ => (AppColors.textMuted, 'ausverkauft'),
    };
    final address = entry.addressLine;

    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          width: 38,
          height: 38,
          decoration: BoxDecoration(
            color: AppColors.surfaceAlt,
            borderRadius: BorderRadius.circular(AppRadii.sm),
          ),
          alignment: Alignment.center,
          child: Text(
            entry.machineCode,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w800,
              color: AppColors.ink,
            ),
          ),
        ),
        const SizedBox(width: AppSpacing.s3),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                entry.machineName,
                style: AppTypography.body(
                  size: 13.5,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
              if (address != null) ...[
                const SizedBox(height: 1),
                Text(
                  address,
                  style: AppTypography.body(
                    size: 11.5,
                    color: AppColors.textMuted,
                  ),
                ),
              ],
              const SizedBox(height: 3),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 7,
                    height: 7,
                    decoration:
                        BoxDecoration(color: color, shape: BoxShape.circle),
                  ),
                  const SizedBox(width: 5),
                  Text(
                    entry.inStock ? '$label · ${entry.quantity} Stück' : label,
                    style: AppTypography.body(
                      size: 11.5,
                      weight: FontWeight.w700,
                      color: color,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}
