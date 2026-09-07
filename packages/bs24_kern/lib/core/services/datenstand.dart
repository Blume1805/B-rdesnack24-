import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

/// Zähler für „die Daten sind neu zu holen".
///
/// Wer den Zähler beobachtet, baut sich bei jeder Erhöhung neu auf. Genutzt
/// wird er als Schlüssel über dem Inhaltsbereich: ein neuer Schlüssel hängt
/// den Teilbaum ab, `autoDispose`-Provider verlieren damit ihren letzten
/// Zuhörer und laden beim nächsten Aufbau frisch.
final datenstandProvider = StateProvider<int>((ref) => 0);

/// Hängt den Inhaltsbereich neu auf, wenn die App aus dem Hintergrund
/// zurückkommt — damit stehen beim Öffnen keine Zahlen von gestern.
///
/// Zwei bewusste Entscheidungen:
///
/// * **Mindestpause.** Erst ab [mindestPause] im Hintergrund wird
///   aktualisiert. Ein kurzer Blick in die Mitteilungszentrale oder ein
///   Berechtigungsdialog schickt die App ebenfalls durch `inactive` /
///   `paused`; ohne die Schwelle würde bei jedem dieser Wechsel die gerade
///   gesetzte Filterauswahl verworfen.
/// * **Neu aufhängen statt einzeln einsammeln.** Ein Teil der Abfragen liegt
///   in bildschirm-eigenen (privaten) Providern. Die lassen sich von außen
///   nicht benennen — über den Schlüsselwechsel greift die Aktualisierung
///   trotzdem. [zusaetzlich] ist für die wenigen Provider gedacht, die
///   *nicht* `autoDispose` sind und deshalb einen Neuaufbau überleben.
class DatenAktualisierung extends ConsumerStatefulWidget {
  const DatenAktualisierung({
    super.key,
    required this.child,
    this.zusaetzlich = const [],
    this.mindestPause = const Duration(seconds: 20),
  });

  final Widget child;
  final List<ProviderOrFamily> zusaetzlich;
  final Duration mindestPause;

  @override
  ConsumerState<DatenAktualisierung> createState() =>
      _DatenAktualisierungState();
}

class _DatenAktualisierungState extends ConsumerState<DatenAktualisierung>
    with WidgetsBindingObserver {
  DateTime? _pausiertSeit;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused ||
        state == AppLifecycleState.hidden) {
      _pausiertSeit ??= DateTime.now();
      return;
    }
    if (state != AppLifecycleState.resumed) return;
    final seit = _pausiertSeit;
    _pausiertSeit = null;
    if (seit == null) return;
    if (DateTime.now().difference(seit) < widget.mindestPause) return;
    jetztAktualisieren(ref, widget.zusaetzlich);
  }

  @override
  Widget build(BuildContext context) {
    final stand = ref.watch(datenstandProvider);
    return KeyedSubtree(key: ValueKey(stand), child: widget.child);
  }
}

/// Löst eine Aktualisierung von Hand aus (Knopf „Aktualisieren").
void jetztAktualisieren(
  WidgetRef ref, [
  List<ProviderOrFamily> zusaetzlich = const [],
]) {
  for (final p in zusaetzlich) {
    ref.invalidate(p);
  }
  ref.read(datenstandProvider.notifier).state++;
}
