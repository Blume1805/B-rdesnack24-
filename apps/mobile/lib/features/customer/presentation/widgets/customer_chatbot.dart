import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../controllers/customer_providers.dart';
import '../screens/ai_info_screen.dart';

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
  const ChatbotLauncherFab({super.key});

  Future<void> _open(BuildContext context) async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => const _ChatbotSheet(),
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
          child: Icon(Icons.chat_bubble_outline,
              color: AppColors.brand, size: 24),
        ),
      ),
    );
  }
}

class _FaqEntry {
  const _FaqEntry(this.question, this.answer, {this.deepLink});
  final String question;
  final String answer;
  final String? deepLink; // Optionaler App-Route (z. B. AppRoutes.imprint)
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
      'Öffne den Reiter „Profil" und wähle unter „Sicherheit" den Punkt '
          '„Passwort ändern". Du bekommst per E-Mail einen Bestätigungs-Link.',
    ),
    _FaqEntry(
      'Wo finde ich meine Kundennummer?',
      'Deine Kundennummer siehst du im Profil-Tab ganz oben unter deinem '
          'Namen. Sie beginnt mit „B24-".',
    ),
    _FaqEntry(
      'Wie deaktiviere ich mein Konto?',
      'Nutze bitte das Kontaktformular. Wir bestätigen die Deaktivierung '
          'binnen 24 Stunden und löschen deine Daten nach 30 Tagen, falls du '
          'nicht widerrufst.',
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
      'Alle aktivierten Coupons findest du in deiner Kundenkarte. Öffne die '
          'Karte über den gold-schwarzen QR-Button unten in der Mitte.',
    ),
    _FaqEntry(
      'Wie löse ich einen Coupon am Automaten ein?',
      'Halte deine Kundenkarte (QR-Code) vor den Scanner des Automaten. '
          'Der günstigste aktivierte Coupon für dein gewähltes Produkt wird '
          'automatisch verrechnet.',
    ),
    _FaqEntry(
      'Warum sind meine Coupons plötzlich weg?',
      'Coupons haben ein Ablaufdatum, das dir auf jeder Karte angezeigt wird. '
          'Nach Einlösung oder nach Fristablauf verschwinden sie automatisch.',
    ),
  ]),
  _FaqCategory('Automaten & Standorte', Icons.place_outlined, [
    _FaqEntry(
      'Wie finde ich den nächsten Automaten?',
      'Wechsle in den Reiter „Automaten". Die Karte zeigt dir alle Standorte '
          'in deiner Nähe. Tap auf einen Marker öffnet die Navigation.',
    ),
    _FaqEntry(
      'Warum sehe ich keine Produkte im Automaten?',
      'Wir aktualisieren die Bestände über die Automaten-Telemetrie mehrmals '
          'täglich. Ist ein Produkt „ausverkauft" markiert, wird beim nächsten '
          'Auffüllen (i. d. R. binnen 48 h) wieder befüllt.',
    ),
  ]),
  _FaqCategory('Loyalty-Punkte', Icons.stars_rounded, [
    _FaqEntry(
      'Wie sammle ich Punkte?',
      'Für jeden Kauf am Automaten (Karten-QR gescannt) bekommst du 1 Punkt '
          'pro 10 Cent Umsatz. Sonderaktionen können deinen Bonus erhöhen.',
    ),
    _FaqEntry(
      'Wann werden meine Punkte zurückgesetzt?',
      'Punkte werden jährlich zum Reset-Datum (siehe Punktekarte) '
          'zurückgesetzt. Nicht eingelöste Meilenstein-Boni verfallen dann.',
    ),
    _FaqEntry(
      'Welche Meilensteine gibt es?',
      'Es gibt vier Meilensteine: 500 Punkte = 5 % Rabatt, 1200 Punkte = 10 %, '
          '2000 Punkte = 15 %, 3000 Punkte = 25 %. Rabatte gelten für 4 Wochen '
          'nach Erreichen des Meilensteins.',
    ),
  ]),
  _FaqCategory('Datenschutz & KI', Icons.shield_outlined, [
    _FaqEntry(
      'Welche Daten speichert ihr über mich?',
      'Wir speichern nur, was für den Betrieb nötig ist: Kaufhistorie, '
          'Kundennummer, freiwillig eingetragene Stammdaten. Details findest du '
          'in der Datenschutzerklärung.',
      deepLink: AppRoutes.privacy,
    ),
    _FaqEntry(
      'Wo lese ich die Datenschutzerklärung?',
      'Im Profil-Tab unter „Rechtliches" oder direkt hier.',
      deepLink: AppRoutes.privacy,
    ),
    _FaqEntry(
      'Nutzt ihr KI, um mir Angebote zu zeigen?',
      'Ja — ein regel-basierter Empfehlungs-Generator. Alle KI-gekennzeichneten '
          'Sections tragen einen goldenen „KI"-Chip. Details, Widerspruch und '
          'Beschwerde-Wege findest du auf der KI-Info-Seite.',
    ),
    _FaqEntry(
      'Wie widerspreche ich personalisierten Angeboten?',
      'Öffne die KI-Info-Seite (über jedes „KI"-Chip erreichbar) oder schreib '
          'uns per Kontaktformular. Wir deaktivieren dann alle '
          'personalisierten Vorschläge für dich.',
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
  const _ChatbotSheet();
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
      _log.add(_ChatbotMsg(
          role: 'bot', text: e.answer, deepLink: e.deepLink));
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
                  itemBuilder: (context, i) => _Bubble(msg: _log[i]),
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
            child: const Icon(Icons.support_agent,
                color: AppColors.ink, size: 22),
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
  const _Bubble({required this.msg});
  final _ChatbotMsg msg;
  @override
  Widget build(BuildContext context) {
    final isBot = msg.role == 'bot';
    return Align(
      alignment: isBot ? Alignment.centerLeft : Alignment.centerRight,
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 300),
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
                  size: 13,
                  weight: FontWeight.w600,
                  color: AppColors.ink,
                ).copyWith(height: 1.4),
              ),
              if (msg.deepLink != null) ...[
                const SizedBox(height: 6),
                InkWell(
                  onTap: () {
                    Navigator.of(context).pop();
                    context.push(msg.deepLink!);
                  },
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.open_in_new,
                          size: 14, color: AppColors.ink),
                      const SizedBox(width: 4),
                      Text(
                        'Direkt öffnen',
                        style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w800,
                          color: AppColors.ink,
                        ).copyWith(
                          decoration: TextDecoration.underline,
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
