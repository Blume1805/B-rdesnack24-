import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';
import '../screens/ai_info_screen.dart';
import '../screens/customer_qr_screen.dart';
import 'customer_anchors.dart';

/// Callback vom CustomerScreen, mit dem der Chatbot in einen bestimmten
/// Tab (Angebote, Automaten, Verlauf, Profil) wechseln kann.
typedef ChatbotTabSelector = void Function(int index);

/// Regelbasierter Q&A-Chat-Assistent für den Kundenbereich.
///
/// **Kein LLM.** Die Antworten sind statisch in [_kFaq] hinterlegt und
/// werden anhand einer Themen-Auswahl (Kategorie → Frage → Antwort)
/// ausgeliefert. Deshalb heißt der Bot bewusst nicht „KI-Assistent",
/// sondern „Automatischer Chat-Assistent" — der User weiß so, dass er
/// keine echte Person und auch kein generatives KI-Modell antwortet.
///
/// Kommt der User mit keinem der Themen zurecht, gibt es einen Handoff-
/// Button, der seine Nachricht ins bestehende Kontaktformular übergibt.
class ChatbotLauncherFab extends StatelessWidget {
  const ChatbotLauncherFab({super.key, this.onSelectTab});

  /// Wird gefeuert, wenn eine Chatbot-Antwort auf einen Kunden-Tab
  /// verweist (Angebote/Automaten/Verlauf/Profil). Null-Fallback: der
  /// Link wird dann als reine Info angezeigt, kein Tab-Wechsel möglich.
  final ChatbotTabSelector? onSelectTab;

  Future<void> _open(BuildContext context) async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _ChatbotSheet(onSelectTab: onSelectTab),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.ink,
      shape: const CircleBorder(),
      elevation: 4,
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: () => _open(context),
        child: const SizedBox(
          width: 48,
          height: 48,
          child:
              Icon(Icons.chat_bubble_outline, color: AppColors.brand, size: 24),
        ),
      ),
    );
  }
}

class _FaqEntry {
  const _FaqEntry(this.question, this.answer, {this.deepLink});
  final String question;
  final String answer;

  /// Optionaler Deep-Link, den der „hier klicken"-Button auslöst.
  /// Unterstützte Schemata (String-Prefix):
  ///   * `route:<path>`        — GoRouter-Push (z. B. `route:/legal/privacy`)
  ///   * `tab:<0..3>`          — CustomerScreen-Tab wechseln
  ///                              (0=Angebote 1=Automaten 2=Verlauf 3=Profil)
  ///   * `tab:<0..3>@<anchor>` — Tab wechseln **und** zum Anker scrollen
  ///                              (z. B. `tab:3@password`).
  ///   * `qr`                  — Kundenkarte öffnen (CustomerQrScreen)
  ///   * `ai-info`             — KI-Info-Seite öffnen
  final String? deepLink;
}

class _FaqCategory {
  const _FaqCategory(this.title, this.icon, this.entries);
  final String title;
  final IconData icon;
  final List<_FaqEntry> entries;
}

const _kFaq = <_FaqCategory>[
  _FaqCategory('Konto & Profil', Icons.person_outline, [
    _FaqEntry(
      'Wie ändere ich mein Passwort?',
      'Im Profil-Tab unter „Zugang & Profil" → „Passwort ändern". '
          'Du bekommst per E-Mail einen Bestätigungs-Link.',
      deepLink: 'tab:3@password',
    ),
    _FaqEntry(
      'Wo finde ich meine Kundennummer?',
      'Deine Kundennummer findest du im Profil-Tab unter „Stammdaten". '
          'Sie ist eine fortlaufende, fünfstellige Zahl ab 10001 — '
          'kein Buchstaben-Präfix davor.',
      deepLink: 'tab:3@kundennummer',
    ),
    _FaqEntry(
      'Wie deaktiviere ich mein Konto?',
      'Nutze bitte das Kontaktformular im Profil-Tab. Wir bestätigen die '
          'Deaktivierung binnen 24 Stunden und löschen deine Daten nach '
          '30 Tagen, falls du nicht widerrufst.',
      deepLink: 'tab:3@kontakt',
    ),
  ]),
  _FaqCategory('Coupons & Angebote', Icons.local_offer_outlined, [
    _FaqEntry(
      'Kann ich mehrere Coupons kombinieren?',
      'Nein. Coupons und Aktionen sind nicht miteinander kombinierbar. Sind '
          'für ein Produkt mehrere Coupons aktiviert, wählt der Automat '
          'automatisch den günstigsten Preis für dich.',
    ),
    _FaqEntry(
      'Wo sehe ich meine aktivierten Coupons?',
      'Alle aktivierten Coupons findest du in deiner Kundenkarte.',
      deepLink: 'qr',
    ),
    _FaqEntry(
      'Wie löse ich einen Coupon am Automaten ein?',
      'Halte deine Kundenkarte (QR-Code) vor den Scanner des Automaten. '
          'Der günstigste aktivierte Coupon für dein gewähltes Produkt wird '
          'automatisch verrechnet.',
      deepLink: 'qr',
    ),
    _FaqEntry(
      'Warum sind meine Coupons plötzlich weg?',
      'Coupons haben ein Ablaufdatum, das dir auf jeder Karte angezeigt wird. '
          'Nach Einlösung oder nach Fristablauf verschwinden sie automatisch. '
          'Aktuelle Wochenangebote siehst du im Angebote-Tab.',
      deepLink: 'tab:0@wochenangebote',
    ),
  ]),
  _FaqCategory('Automaten & Standorte', Icons.place_outlined, [
    _FaqEntry(
      'Wie finde ich den nächsten Automaten?',
      'Im Automaten-Tab siehst du die Karte mit allen Standorten in deiner '
          'Nähe. Tap auf einen Marker öffnet die Navigation.',
      deepLink: 'tab:1',
    ),
    _FaqEntry(
      'Warum sehe ich keine Produkte im Automaten?',
      'Wir aktualisieren die Bestände über die Automaten-Telemetrie mehrmals '
          'täglich. Ist ein Produkt „ausverkauft" markiert, wird beim nächsten '
          'Auffüllen (i. d. R. binnen 48 h) wieder befüllt. Aktuelle Bestände '
          'pro Automat siehst du im Automaten-Tab.',
      deepLink: 'tab:1',
    ),
  ]),
  _FaqCategory('Loyalty-Punkte', Icons.stars_rounded, [
    _FaqEntry(
      'Wie sammle ich Punkte?',
      'Für jeden Kauf am Automaten (Karten-QR gescannt) bekommst du 1 Punkt '
          'pro Cent Umsatz — 1 € Einkauf = 100 Punkte. Sonderaktionen '
          'können deinen Bonus zusätzlich erhöhen. Deinen aktuellen Punkte-'
          'stand siehst du im Angebote-Tab.',
      deepLink: 'tab:0@punkte',
    ),
    _FaqEntry(
      'Wann werden meine Punkte zurückgesetzt?',
      'Du hast jeden Monat Zeit, deine Punkte zu sammeln. Am 1. des '
          'Folgemonats werden die Punkte zurückgesetzt und du beginnst '
          'von vorn. Bereits erreichte Meilenstein-Boni (Coupons) bleiben '
          'aber trotzdem noch 2 Wochen nach Erreichen des Meilensteins '
          'einlösbar.',
      deepLink: 'tab:0@punkte',
    ),
    _FaqEntry(
      'Welche Meilensteine gibt es?',
      'Es gibt vier Meilensteine: 500 Punkte = 5 % Rabatt, 1200 Punkte = 10 %, '
          '2000 Punkte = 15 %, 3000 Punkte = 25 %. Sobald du einen Meilenstein '
          'erreichst, ist dein Rabatt-Coupon 2 Wochen lang einlösbar — auch '
          'wenn zwischenzeitlich der Monatswechsel deinen Punktestand '
          'zurücksetzt. Deine Meilenstein-Übersicht:',
      deepLink: 'tab:0@punkte',
    ),
  ]),
  _FaqCategory('Datenschutz & KI', Icons.shield_outlined, [
    _FaqEntry(
      'Welche Daten speichert ihr über mich?',
      'Wir speichern nur, was für den Betrieb nötig ist: Kaufhistorie, '
          'Kundennummer, freiwillig eingetragene Stammdaten. Details findest du '
          'in der Datenschutzerklärung.',
      deepLink: 'route:${AppRoutes.privacy}',
    ),
    _FaqEntry(
      'Wo lese ich die Datenschutzerklärung?',
      'Direkt hier — oder im Profil-Tab unter „Rechtliches".',
      deepLink: 'route:${AppRoutes.privacy}',
    ),
    _FaqEntry(
      'Nutzt ihr KI, um mir Angebote zu zeigen?',
      'Ja — ein regel-basierter Empfehlungs-Generator. Alle KI-gekennzeichneten '
          'Sections tragen einen goldenen „KI"-Chip. Details, Widerspruch und '
          'Beschwerde-Wege findest du auf der KI-Info-Seite.',
      deepLink: 'ai-info',
    ),
    _FaqEntry(
      'Wie widerspreche ich personalisierten Angeboten?',
      'Auf der KI-Info-Seite (über jedes „KI"-Chip erreichbar) findest du '
          'den genauen Widerspruchs-Weg. Du kannst uns auch per Kontakt-'
          'formular schreiben — wir deaktivieren dann alle personalisierten '
          'Vorschläge für dich.',
      deepLink: 'ai-info',
    ),
  ]),
];

class _ChatbotMsg {
  const _ChatbotMsg({
    required this.role,
    required this.text,
    this.deepLink,
  });
  final String role; // 'bot' | 'user'
  final String text;
  final String? deepLink;
}

class _ChatbotSheet extends ConsumerStatefulWidget {
  const _ChatbotSheet({this.onSelectTab});
  final ChatbotTabSelector? onSelectTab;
  @override
  ConsumerState<_ChatbotSheet> createState() => _ChatbotSheetState();
}

class _ChatbotSheetState extends ConsumerState<_ChatbotSheet> {
  final List<_ChatbotMsg> _log = [
    const _ChatbotMsg(
      role: 'bot',
      text: 'Hallo! Ich bin der automatische Chat-Assistent von '
          'Bördesnack24. Wobei kann ich dir helfen? Wähle unten ein Thema.',
    ),
  ];
  _FaqCategory? _openCategory;
  final _scrollCtrl = ScrollController();

  @override
  void dispose() {
    _scrollCtrl.dispose();
    super.dispose();
  }

  void _pickCategory(_FaqCategory c) {
    setState(() {
      _openCategory = c;
      _log.add(_ChatbotMsg(role: 'user', text: c.title));
      _log.add(_ChatbotMsg(
          role: 'bot',
          text: 'Welche Frage zu „${c.title}" hast du? Tippe auf eine der '
              'folgenden Fragen.'));
    });
    _scrollToBottom();
  }

  void _pickQuestion(_FaqEntry e) {
    setState(() {
      _log.add(_ChatbotMsg(role: 'user', text: e.question));
      _log.add(_ChatbotMsg(role: 'bot', text: e.answer, deepLink: e.deepLink));
    });
    _scrollToBottom();
  }

  void _backToCategories() {
    setState(() {
      _openCategory = null;
      _log.add(const _ChatbotMsg(
        role: 'bot',
        text: 'Alles klar. Womit kann ich dir sonst helfen?',
      ));
    });
    _scrollToBottom();
  }

  /// Führt einen `deepLink`-String aus einer Bot-Antwort aus.
  /// Schließt zuerst das Bottom-Sheet und springt dann ans Ziel.
  Future<void> _handleDeepLink(String link) async {
    // Sheet vor dem Nav-Push schließen — sonst überlagert das Modal
    // den neuen Screen und iOS scrollt in einen leeren Zustand.
    Navigator.of(context).pop();
    final nav = Navigator.of(context, rootNavigator: true);
    if (link == 'qr') {
      nav.push(MaterialPageRoute(builder: (_) => const CustomerQrScreen()));
      return;
    }
    if (link == 'ai-info') {
      nav.push(MaterialPageRoute(builder: (_) => const AiInfoScreen()));
      return;
    }
    if (link.startsWith('tab:')) {
      // Format: tab:<n>   oder   tab:<n>@<anchor>
      final rest = link.substring(4);
      final at = rest.indexOf('@');
      final tabStr = at < 0 ? rest : rest.substring(0, at);
      final anchor = at < 0 ? null : rest.substring(at + 1);
      final idx = int.tryParse(tabStr);
      if (idx != null && widget.onSelectTab != null) {
        widget.onSelectTab!(idx);
      }
      if (anchor != null && anchor.isNotEmpty) {
        // Erst das Sheet-Pop und den Tab-Switch verarbeiten lassen,
        // dann zur Zielposition scrollen.
        await CustomerAnchors.scrollTo(anchor);
      }
      return;
    }
    if (link.startsWith('route:')) {
      context.push(link.substring(6));
      return;
    }
    // Legacy-Format ohne Schema-Präfix: als GoRouter-Push behandeln.
    context.push(link);
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scrollCtrl.hasClients) return;
      _scrollCtrl.animateTo(
        _scrollCtrl.position.maxScrollExtent,
        duration: const Duration(milliseconds: 240),
        curve: Curves.easeOut,
      );
    });
  }

  Future<void> _handoff() async {
    final repo = ref.read(customerRepositoryProvider);
    final transcript = _log
        .map((m) => (m.role == 'user' ? 'Kunde: ' : 'Assistent: ') + m.text)
        .join('\n');
    try {
      await repo.submitContact(
        category: 'frage',
        subject: 'Chat-Assistent — Anfrage konnte nicht abschließend '
            'beantwortet werden',
        body: 'Chatverlauf:\n\n$transcript',
      );
      if (!mounted) return;
      Navigator.of(context).pop();
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Wir haben deine Anfrage an den Support weitergeleitet und '
            'melden uns per E-Mail.',
          ),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Weiterleitung fehlgeschlagen: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      initialChildSize: 0.85,
      minChildSize: 0.5,
      maxChildSize: 0.95,
      expand: false,
      builder: (context, ctrl) {
        return Container(
          decoration: const BoxDecoration(
            color: AppColors.surfaceCard,
            borderRadius:
                BorderRadius.vertical(top: Radius.circular(AppRadii.lg)),
          ),
          child: Column(
            children: [
              // Grip + Header
              Padding(
                padding: const EdgeInsets.only(top: 10, bottom: 6),
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(
                    color: AppColors.borderSubtle,
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              _Header(
                onInfo: () => Navigator.of(context).push(
                  MaterialPageRoute(builder: (_) => const AiInfoScreen()),
                ),
              ),
              const Divider(height: 1, color: AppColors.borderSubtle),

              // Chat-Verlauf
              Expanded(
                child: ListView.separated(
                  controller: _scrollCtrl,
                  padding: const EdgeInsets.all(AppSpacing.s4),
                  itemCount: _log.length,
                  separatorBuilder: (_, __) =>
                      const SizedBox(height: AppSpacing.s3),
                  itemBuilder: (context, i) => _Bubble(
                    msg: _log[i],
                    onLink: _handleDeepLink,
                  ),
                ),
              ),

              const Divider(height: 1, color: AppColors.borderSubtle),

              // Optionen unten: Kategorien / Fragen / Handoff
              Padding(
                padding: const EdgeInsets.fromLTRB(
                  AppSpacing.s4,
                  AppSpacing.s3,
                  AppSpacing.s4,
                  AppSpacing.s3,
                ),
                child: _openCategory == null
                    ? _CategoryChips(
                        onPick: _pickCategory,
                        onHandoff: _handoff,
                      )
                    : _QuestionChips(
                        category: _openCategory!,
                        onPick: _pickQuestion,
                        onBack: _backToCategories,
                        onHandoff: _handoff,
                      ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _Header extends StatelessWidget {
  const _Header({required this.onInfo});
  final VoidCallback onInfo;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s4,
        AppSpacing.s2,
        AppSpacing.s3,
        AppSpacing.s3,
      ),
      child: Row(
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              color: AppColors.brand,
              borderRadius: BorderRadius.circular(AppRadii.pill),
            ),
            alignment: Alignment.center,
            child:
                const Icon(Icons.support_agent, color: AppColors.ink, size: 22),
          ),
          const SizedBox(width: AppSpacing.s3),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Chat-Assistent',
                  style: AppTypography.display(
                    size: 16,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    AiBadge(
                      label: 'Automatisch',
                      dense: true,
                      onTap: onInfo,
                    ),
                    const SizedBox(width: 6),
                    Flexible(
                      child: Text(
                        'Regelbasiert — keine KI',
                        style: AppTypography.body(
                          size: 11,
                          weight: FontWeight.w600,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          IconButton(
            tooltip: 'Schließen',
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(),
          ),
        ],
      ),
    );
  }
}

class _Bubble extends StatelessWidget {
  const _Bubble({required this.msg, required this.onLink});
  final _ChatbotMsg msg;
  final void Function(String link) onLink;
  @override
  Widget build(BuildContext context) {
    final isBot = msg.role == 'bot';
    return Align(
      alignment: isBot ? Alignment.centerLeft : Alignment.centerRight,
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 340),
        child: Container(
          padding: const EdgeInsets.symmetric(
            horizontal: AppSpacing.s3,
            vertical: AppSpacing.s3,
          ),
          decoration: BoxDecoration(
            color: isBot ? AppColors.surfaceAlt : AppColors.brand,
            borderRadius: BorderRadius.only(
              topLeft: const Radius.circular(AppRadii.md),
              topRight: const Radius.circular(AppRadii.md),
              bottomLeft: Radius.circular(isBot ? 4 : AppRadii.md),
              bottomRight: Radius.circular(isBot ? AppRadii.md : 4),
            ),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                msg.text,
                style: AppTypography.body(
                  size: 15,
                  weight: FontWeight.w600,
                  color: AppColors.ink,
                ).copyWith(height: 1.45),
              ),
              if (msg.deepLink != null) ...[
                const SizedBox(height: 8),
                InkWell(
                  onTap: () => onLink(msg.deepLink!),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.touch_app_outlined,
                          size: 16, color: AppColors.ink),
                      const SizedBox(width: 4),
                      Text(
                        'hier klicken',
                        style: AppTypography.body(
                          size: 15,
                          weight: FontWeight.w900,
                          color: AppColors.ink,
                        ).copyWith(
                          decoration: TextDecoration.underline,
                          decorationColor: AppColors.ink,
                          decorationThickness: 2,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

class _CategoryChips extends StatelessWidget {
  const _CategoryChips({required this.onPick, required this.onHandoff});
  final void Function(_FaqCategory) onPick;
  final VoidCallback onHandoff;
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final c in _kFaq)
              ActionChip(
                avatar: Icon(c.icon, size: 16, color: AppColors.ink),
                label: Text(c.title),
                onPressed: () => onPick(c),
                backgroundColor: AppColors.surfaceAlt,
                side: const BorderSide(color: AppColors.borderSubtle),
                labelStyle: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
          ],
        ),
        const SizedBox(height: 6),
        _HandoffLink(onTap: onHandoff),
      ],
    );
  }
}

class _QuestionChips extends StatelessWidget {
  const _QuestionChips({
    required this.category,
    required this.onPick,
    required this.onBack,
    required this.onHandoff,
  });
  final _FaqCategory category;
  final void Function(_FaqEntry) onPick;
  final VoidCallback onBack;
  final VoidCallback onHandoff;
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        for (final e in category.entries)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: OutlinedButton(
              onPressed: () => onPick(e),
              style: OutlinedButton.styleFrom(
                foregroundColor: AppColors.ink,
                alignment: Alignment.centerLeft,
                side: const BorderSide(color: AppColors.borderSubtle),
                padding: const EdgeInsets.symmetric(
                  horizontal: AppSpacing.s3,
                  vertical: 10,
                ),
              ),
              child: Text(
                e.question,
                style: AppTypography.body(
                  size: 12,
                  weight: FontWeight.w700,
                  color: AppColors.ink,
                ),
              ),
            ),
          ),
        const SizedBox(height: 6),
        Row(
          children: [
            Expanded(
              child: TextButton.icon(
                onPressed: onBack,
                icon: const Icon(Icons.arrow_back, size: 16),
                label: const Text('Themen'),
              ),
            ),
            Expanded(child: _HandoffLink(onTap: onHandoff)),
          ],
        ),
      ],
    );
  }
}

class _HandoffLink extends StatelessWidget {
  const _HandoffLink({required this.onTap});
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) {
    return TextButton.icon(
      onPressed: onTap,
      icon: const Icon(Icons.mail_outline, size: 16),
      label: const Text('An Support weiterleiten'),
      style: TextButton.styleFrom(foregroundColor: AppColors.brand),
    );
  }
}
