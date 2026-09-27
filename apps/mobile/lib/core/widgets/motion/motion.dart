import 'dart:math' as math;

import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Bewegungsbausteine der App nach dem Kanon `scrollcraft`
/// (docs/scrolling-funktionen.md, Abschnitt 4, Staffelplan vom 26.09.2026).
///
/// Drei Regeln gelten für jeden Baustein hier:
///
/// 1. **Kein Inhalt nur in der Bewegung.** Jeder Baustein zeigt ohne
///    Bewegung denselben Inhalt im Endzustand.
/// 2. **„Bewegung reduzieren" wird befolgt.** Ist die Systemeinstellung
///    aktiv ([MediaQueryData.disableAnimations]), springt alles sofort in den
///    Endzustand.
/// 3. **Kein Scroll-Hijacking.** Scrollgebundene Bausteine lesen die
///    Scrollposition nur; sie verändern sie nie.
///
/// Muster-Nummern in den Kommentaren beziehen sich auf den Kanon.

/// Ob Bewegung erlaubt ist.
bool motionAllowed(BuildContext context) =>
    !(MediaQuery.maybeOf(context)?.disableAnimations ?? false);

/// Kurve des Kanons für Einblendungen: `cubic-bezier(.16,1,.3,1)`.
const Curve kRevealCurve = Cubic(0.16, 1, 0.3, 1);

// ── 01 Reveal · 02 Stagger ───────────────────────────────────────────────

/// Muster 01 (und 02 mit [index]): Inhalt steigt beim ersten Aufbau leicht
/// auf. In Listen werden Kinder erst kurz vor dem Sichtbarwerden gebaut, der
/// Aufbau fällt damit mit dem Hereinscrollen zusammen.
///
/// [index] staffelt um je 60 ms, höchstens fünf Stufen (Kanon 02).
class Reveal extends StatefulWidget {
  const Reveal({super.key, required this.child, this.index = 0});

  final Widget child;
  final int index;

  @override
  State<Reveal> createState() => _RevealState();
}

class _RevealState extends State<Reveal> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 500),
  );
  late final Animation<double> _t =
      CurvedAnimation(parent: _c, curve: kRevealCurve);
  bool _started = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (_started) return;
    _started = true;
    if (!motionAllowed(context)) {
      _c.value = 1;
      return;
    }
    final delay = Duration(milliseconds: 60 * math.min(widget.index, 4));
    Future.delayed(delay, () {
      if (mounted) _c.forward();
    });
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _t,
      child: widget.child,
      builder: (context, child) => Opacity(
        opacity: _t.value,
        child: Transform.translate(
          offset: Offset(0, 14 * (1 - _t.value)),
          child: child,
        ),
      ),
    );
  }
}

// ── 03 Zähler ────────────────────────────────────────────────────────────

/// Muster 03: Eine Zahl läuft von null auf ihren Wert. Nur für echte Werte
/// aus der Datenbank. Der Endwert steht immer in der Semantik, damit
/// Bildschirmleser nie eine Zwischenzahl vorlesen.
class CountUp extends StatelessWidget {
  const CountUp({
    super.key,
    required this.value,
    required this.format,
    required this.style,
    this.textAlign,
  });

  final double value;
  final String Function(double v) format;
  final TextStyle style;
  final TextAlign? textAlign;

  @override
  Widget build(BuildContext context) {
    final end = format(value);
    if (!motionAllowed(context)) {
      return Text(end, style: style, textAlign: textAlign);
    }
    return Semantics(
      label: end,
      excludeSemantics: true,
      child: TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: value),
        duration: const Duration(milliseconds: 900),
        curve: Curves.easeOutCubic,
        builder: (context, v, _) =>
            Text(format(v), style: style, textAlign: textAlign),
      ),
    );
  }
}

// ── 05 Mikrointeraktion ──────────────────────────────────────────────────

/// Muster 05: Beim Drücken leicht verkleinert. Ändert nichts an der
/// Bedienung; die eigentliche Tippfläche bleibt das Kind.
class Pressable extends StatefulWidget {
  const Pressable({super.key, required this.child});

  final Widget child;

  @override
  State<Pressable> createState() => _PressableState();
}

class _PressableState extends State<Pressable> {
  bool _down = false;

  void _set(bool v) {
    if (_down != v && motionAllowed(context)) setState(() => _down = v);
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (_) => _set(true),
      onPointerUp: (_) => _set(false),
      onPointerCancel: (_) => _set(false),
      child: AnimatedScale(
        scale: _down ? 0.98 : 1,
        duration: AppMotion.fast,
        curve: AppMotion.easeOut,
        child: widget.child,
      ),
    );
  }
}

// ── Scrollgebundene Bausteine ────────────────────────────────────────────

/// Liest die Scrollposition des nächsten [Scrollable] und baut bei jeder
/// Änderung neu. Verändert die Position nie.
abstract class _ScrollLinked extends StatefulWidget {
  const _ScrollLinked({super.key});
}

abstract class _ScrollLinkedState<T extends _ScrollLinked> extends State<T> {
  ScrollPosition? _position;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final next = Scrollable.maybeOf(context)?.position;
    if (next != _position) {
      _position?.removeListener(_onScroll);
      _position = next;
      _position?.addListener(_onScroll);
    }
  }

  void _onScroll() {
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    _position?.removeListener(_onScroll);
    super.dispose();
  }

  /// Rechteck des Widgets in Koordinaten des Scrollbereichs, oder null vor
  /// dem ersten Layout.
  Rect? rectInViewport() {
    final box = context.findRenderObject();
    final scrollBox = Scrollable.maybeOf(context)?.context.findRenderObject();
    if (box is! RenderBox || !box.hasSize) return null;
    if (scrollBox is! RenderBox || !scrollBox.hasSize) return null;
    final topLeft = box.localToGlobal(Offset.zero, ancestor: scrollBox);
    return topLeft & box.size;
  }

  double get viewportHeight {
    final scrollBox = Scrollable.maybeOf(context)?.context.findRenderObject();
    return scrollBox is RenderBox && scrollBox.hasSize
        ? scrollBox.size.height
        : 800;
  }

  /// Fortschritt nach dem Zeitgesetz des Kanons: beginnt beim Hereinkommen
  /// (Anlauf 0,62 Bildschirmhöhen), hält am Ende (26 %).
  double progress() {
    final r = rectInViewport();
    if (r == null) return 1;
    final h = viewportHeight;
    const entry = 0.62, tail = 0.26;
    final lead = h * entry;
    final travel = math.max(1.0, (r.height - h) + lead + h * 0.5);
    final raw = ((-r.top + h - lead) / travel).clamp(0.0, 1.0);
    return (raw / (1 - tail)).clamp(0.0, 1.0);
  }
}

// ── 07 Horizontale Sequenz ───────────────────────────────────────────────

/// Muster 07: Vertikales Scrollen schiebt einen Streifen, der breiter ist
/// als der Bildschirm, nach links. Nur für Reihen mit natürlicher Ordnung.
///
/// Der Streifen bleibt zusätzlich von Hand wischbar. So ist jede Karte auch
/// dann erreichbar, wenn die Seite zu kurz ist, um weit genug zu scrollen,
/// und bei „Bewegung reduzieren" ist er eine gewöhnliche wischbare Reihe.
class ScrollLinkedStrip extends _ScrollLinked {
  const ScrollLinkedStrip({
    super.key,
    required this.children,
    required this.height,
    this.gap = AppSpacing.s3,
  });

  final List<Widget> children;
  final double height;
  final double gap;

  @override
  State<ScrollLinkedStrip> createState() => _ScrollLinkedStripState();
}

class _ScrollLinkedStripState extends _ScrollLinkedState<ScrollLinkedStrip> {
  final _h = ScrollController();
  double? _lastP;

  @override
  void dispose() {
    _h.dispose();
    super.dispose();
  }

  /// Fortschritt über 40 % der Bildschirmhöhe: Start, wenn die Oberkante
  /// die Anlauflinie des Kanons (62 %) kreuzt, Ende bei 22 %.
  double _stripProgress() {
    final r = rectInViewport();
    if (r == null) return 0;
    final h = viewportHeight;
    return ((h * 0.62 - r.top) / (h * 0.4)).clamp(0.0, 1.0);
  }

  void _follow() {
    if (!mounted || !_h.hasClients || !motionAllowed(context)) return;
    final p = _stripProgress();
    final last = _lastP;
    _lastP = p;
    // Nur nachführen, wenn sich die Seite bewegt hat; ein Wischen von Hand
    // bleibt stehen, bis wieder vertikal gescrollt wird.
    if (last == null || (p - last).abs() < 0.001) return;
    final pos = _h.position;
    pos.jumpTo(p * pos.maxScrollExtent);
  }

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback((_) => _follow());
    return SizedBox(
      height: widget.height,
      child: SingleChildScrollView(
        controller: _h,
        scrollDirection: Axis.horizontal,
        physics: const BouncingScrollPhysics(),
        child: Row(
          children: [
            for (var i = 0; i < widget.children.length; i++) ...[
              if (i > 0) SizedBox(width: widget.gap),
              widget.children[i],
            ],
          ],
        ),
      ),
    );
  }
}

// ── 08 Kartenstapel ──────────────────────────────────────────────────────

/// Muster 08: Karten bleiben am oberen Rand stehen, die nächste schiebt sich
/// darüber. Höchstens vier Karten (Kanon); bei mehr wird normal gelistet.
class CardStack extends StatefulWidget {
  const CardStack({super.key, required this.children, this.spacing = 16});

  final List<Widget> children;
  final double spacing;

  @override
  State<CardStack> createState() => _CardStackState();
}

class _CardStackScope extends InheritedWidget {
  const _CardStackScope({required this.groupKey, required super.child});
  final GlobalKey groupKey;
  @override
  bool updateShouldNotify(_CardStackScope old) => false;
}

class _CardStackState extends State<CardStack> {
  final _groupKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    final stack = widget.children.length <= 4 && motionAllowed(context);
    return _CardStackScope(
      groupKey: _groupKey,
      child: Column(
        key: _groupKey,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          for (var i = 0; i < widget.children.length; i++)
            Padding(
              padding: EdgeInsets.only(
                bottom: i == widget.children.length - 1 ? 0 : widget.spacing,
              ),
              child: stack && i < widget.children.length - 1
                  ? _StackedCard(depth: i, child: widget.children[i])
                  : widget.children[i],
            ),
        ],
      ),
    );
  }
}

class _StackedCard extends _ScrollLinked {
  const _StackedCard({required this.depth, required this.child});
  final int depth;
  final Widget child;
  @override
  State<_StackedCard> createState() => _StackedCardState();
}

class _StackedCardState extends _ScrollLinkedState<_StackedCard> {
  @override
  Widget build(BuildContext context) {
    final r = rectInViewport();
    final scope = context.dependOnInheritedWidgetOfExactType<_CardStackScope>();
    final groupBox = scope?.groupKey.currentContext?.findRenderObject();
    final scrollBox = Scrollable.maybeOf(context)?.context.findRenderObject();
    var shift = 0.0;
    if (r != null &&
        groupBox is RenderBox &&
        groupBox.hasSize &&
        scrollBox is RenderBox) {
      final groupBottom =
          groupBox.localToGlobal(Offset.zero, ancestor: scrollBox).dy +
              groupBox.size.height;
      // Versatz 5 / 7,5 / 10 vh wie im Kanon, damit die Kanten sichtbar
      // bleiben.
      final stickTop = viewportHeight * (0.05 + 0.025 * widget.depth);
      shift = math.max(0, stickTop - r.top);
      shift = math.min(shift, math.max(0, groupBottom - r.bottom));
    }
    final t = r == null ? 0.0 : (shift / r.height).clamp(0.0, 1.0);
    return Transform.translate(
      offset: Offset(0, shift),
      child: Transform.scale(
        scale: 1 - 0.05 * t,
        alignment: Alignment.topCenter,
        child: widget.child,
      ),
    );
  }
}

// ── 11 Parallax-Tiefe ────────────────────────────────────────────────────

/// Muster 11: Eine dekorative Ebene bewegt sich langsamer als der Inhalt.
/// Amplitude mobil 210 px × [depth] (Kanon: Tiefen 0,06 bis 0,62). Trägt
/// keine Information; ohne Bewegung steht sie still.
class ParallaxLayer extends _ScrollLinked {
  const ParallaxLayer({super.key, required this.child, this.depth = 0.12});

  final Widget child;
  final double depth;

  @override
  State<ParallaxLayer> createState() => _ParallaxLayerState();
}

class _ParallaxLayerState extends _ScrollLinkedState<ParallaxLayer> {
  @override
  Widget build(BuildContext context) {
    if (!motionAllowed(context)) return widget.child;
    final dy = (0.5 - progress()) * 210 * widget.depth;
    return Transform.translate(offset: Offset(0, dy), child: widget.child);
  }
}

// ── 13 Produktwechsel · 15 Objekt-Label ──────────────────────────────────

/// Muster 13: Produkte wechseln im Fokus statt im Raster. Die Karte in der
/// Mitte ist voll, die Nachbarn treten zurück.
///
/// Muster 15: Unter dem Karussell steht der Name des Produkts im Fokus und
/// wandert mit dem Wechsel. Der Name steht zusätzlich auf jeder Karte, damit
/// die Zuordnung ohne Bewegung erhalten bleibt.
class FocusCarousel extends StatefulWidget {
  const FocusCarousel({
    super.key,
    required this.itemCount,
    required this.itemBuilder,
    required this.labelFor,
    required this.height,
    required this.itemExtent,
    required this.labelStyle,
  });

  final int itemCount;
  final IndexedWidgetBuilder itemBuilder;
  final String Function(int index) labelFor;
  final double height;

  /// Breite einer Seite samt Abstand. Daraus wird der Seitenanteil am
  /// Bildschirm berechnet, damit die Karten auf Telefon und Tablet gleich
  /// dicht stehen.
  final double itemExtent;
  final TextStyle labelStyle;

  @override
  State<FocusCarousel> createState() => _FocusCarouselState();
}

class _FocusCarouselState extends State<FocusCarousel> {
  PageController? _c;
  double _fraction = 0;
  int _page = 0;

  PageController _controllerFor(double width) {
    final fraction = (widget.itemExtent / width).clamp(0.2, 1.0);
    final current = _c;
    if (current != null && (fraction - _fraction).abs() < 0.01) return current;
    _fraction = fraction;
    final next = PageController(viewportFraction: fraction, initialPage: _page);
    _c = next;
    if (current != null) {
      WidgetsBinding.instance.addPostFrameCallback((_) => current.dispose());
    }
    return next;
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final moving = motionAllowed(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          height: widget.height,
          child: LayoutBuilder(
            builder: (context, box) {
              final c = _controllerFor(box.maxWidth);
              return PageView.builder(
                controller: c,
                padEnds: false,
                itemCount: widget.itemCount,
                onPageChanged: (i) => setState(() => _page = i),
                itemBuilder: (context, i) => AnimatedBuilder(
                  animation: c,
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: widget.itemBuilder(context, i),
                  ),
                  builder: (context, child) {
                    if (!moving) return child!;
                    final page = c.hasClients && c.position.haveDimensions
                        ? (c.page ?? 0)
                        : _page.toDouble();
                    final d = (page - i).abs().clamp(0.0, 1.0);
                    // Nur Größe und leichte Abblendung. Die Nachbarn bleiben
                    // lesbar (Kontrast bei d = 1 weiter über 4,5:1).
                    return Opacity(
                      opacity: 1 - 0.2 * d,
                      child: Transform.scale(
                        scale: 1 - 0.06 * d,
                        alignment: Alignment.centerLeft,
                        child: child,
                      ),
                    );
                  },
                ),
              );
            },
          ),
        ),
        const SizedBox(height: AppSpacing.s3),
        AnimatedSwitcher(
          duration: moving ? AppMotion.base : Duration.zero,
          transitionBuilder: (child, a) => FadeTransition(
            opacity: a,
            child: SlideTransition(
              position: Tween(
                begin: const Offset(0.08, 0),
                end: Offset.zero,
              ).animate(a),
              child: child,
            ),
          ),
          child: Row(
            key: ValueKey(_page),
            children: [
              Expanded(
                child: Text(
                  widget.labelFor(_page),
                  style: widget.labelStyle,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              Text(
                '${_page + 1} von ${widget.itemCount}',
                style: widget.labelStyle.copyWith(
                  fontWeight: FontWeight.w600,
                  color: AppColors.textMuted,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
