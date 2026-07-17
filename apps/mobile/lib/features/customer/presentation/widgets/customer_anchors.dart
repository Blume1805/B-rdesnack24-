import 'package:flutter/material.dart';

/// Zentraler Registry für „Deep-Link-Anker" im Kundenbereich.
///
/// Der Chatbot verwendet diese Keys, um beim Tap auf einen „hier klicken"-
/// Link nicht nur den passenden Tab zu öffnen, sondern zusätzlich zur
/// **konkreten Zeile / Karte** auf dem Screen zu scrollen.
///
/// Vorgehen:
///   1. Die Ziel-Widgets binden ihren Frame an den passenden GlobalKey
///      (z. B. `Container(key: CustomerAnchors.password, …)`).
///   2. Der Chatbot ruft nach dem Tab-Wechsel [scrollTo] auf, das per
///      `Scrollable.ensureVisible` den Screen an die richtige Position
///      bewegt (mit einem kurzen Post-Frame-Delay, damit der IndexedStack
///      erst renderfertig ist).
///
/// Wenn ein Key gerade nicht im Baum liegt (weil der Kunde in einem
/// anderen Tab war), passiert nichts — der Chatbot hat vorher den Tab
/// gewechselt, also läuft der Scroll nach dem nächsten Rebuild.
class CustomerAnchors {
  CustomerAnchors._();

  // ── Angebote-Tab ────────────────────────────────────────────────
  static final GlobalKey fruehstueckDeal = GlobalKey(debugLabel: 'fruehstueck-deal');
  static final GlobalKey feierabendDeal = GlobalKey(debugLabel: 'feierabend-deal');
  static final GlobalKey loyaltyCard = GlobalKey(debugLabel: 'loyalty-card');
  static final GlobalKey weeklyOffers = GlobalKey(debugLabel: 'weekly-offers');

  // ── Profil-Tab ──────────────────────────────────────────────────
  static final GlobalKey profileHeader = GlobalKey(debugLabel: 'profile-header');
  static final GlobalKey kundennummer = GlobalKey(debugLabel: 'kundennummer');
  static final GlobalKey passwordRow = GlobalKey(debugLabel: 'password-row');
  static final GlobalKey contactRow = GlobalKey(debugLabel: 'contact-row');

  /// Nach einem Tab-Wechsel den Screen so scrollen, dass das an [name]
  /// gebundene Widget sichtbar wird. Muss durch einen kurzen Delay
  /// abgesichert werden, damit der neue Tab-Renderbaum bereit ist.
  static Future<void> scrollTo(String name) async {
    // Zwei Frames warten: 1. IndexedStack switcht, 2. Layout ist final.
    await WidgetsBinding.instance.endOfFrame;
    await Future<void>.delayed(const Duration(milliseconds: 60));

    final key = _keys[name];
    final ctx = key?.currentContext;
    if (ctx == null) return;
    await Scrollable.ensureVisible(
      ctx,
      duration: const Duration(milliseconds: 400),
      curve: Curves.easeOutCubic,
      alignment: 0.1, // etwas Kopfabstand
    );
  }

  static final Map<String, GlobalKey> _keys = {
    'fruehstueck': fruehstueckDeal,
    'feierabend': feierabendDeal,
    'punkte': loyaltyCard,
    'wochenangebote': weeklyOffers,
    'profile': profileHeader,
    'kundennummer': kundennummer,
    'password': passwordRow,
    'kontakt': contactRow,
  };
}
