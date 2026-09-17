import 'package:flutter/material.dart';

import '../../services/install_prompt.dart';
import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'app_card.dart';

/// Hinweis „Zum Startbildschirm hinzufügen".
///
/// Bördesnack24 läuft als Web-App. Wer über den QR-Code am Automaten kommt,
/// landet im Browser. Ohne Ablage auf dem Startbildschirm muss er beim
/// nächsten Einkauf erneut den Weg über den Browser suchen, und genau dort
/// gehen Kunden verloren.
///
/// Die Karte zeigt sich nur, wenn sie etwas bewirken kann:
/// bei Android/Chrome mit einem Knopf, der den Browser-Dialog auslöst, bei
/// iOS/Safari mit der Erklärung des Teilen-Menüs. Läuft die App bereits im
/// eigenen Fenster oder kann das Gerät es nicht, erscheint nichts.
///
/// [onDismiss] wird beim Schließen aufgerufen; der aufrufende Screen merkt
/// sich das dauerhaft, damit der Hinweis nicht bei jedem Start wiederkehrt.
class InstallHintCard extends StatefulWidget {
  const InstallHintCard({super.key, required this.onDismiss});

  final VoidCallback onDismiss;

  @override
  State<InstallHintCard> createState() => _InstallHintCardState();
}

class _InstallHintCardState extends State<InstallHintCard> {
  late InstallMethod _method = InstallPrompt.method;
  bool _busy = false;

  Future<void> _install() async {
    setState(() => _busy = true);
    final shown = await InstallPrompt.show();
    if (!mounted) return;
    setState(() {
      _busy = false;
      // Nach dem Dialog ist das Ereignis verbraucht. Ob der Kunde zugestimmt
      // hat, meldet der Browser nicht verlässlich zurück, deshalb blenden wir
      // die Karte in beiden Fällen aus statt nachzufassen.
      if (shown) _method = InstallMethod.none;
    });
    if (shown) widget.onDismiss();
  }

  @override
  Widget build(BuildContext context) {
    if (_method == InstallMethod.none) return const SizedBox.shrink();

    return AppCard(
      color: AppColors.ink,
      borderColor: AppColors.brand,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Icon(
                Icons.add_to_home_screen_outlined,
                size: 20,
                color: AppColors.brand,
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: Text(
                  'Bördesnack24 aufs Handy legen',
                  style: AppTypography.display(
                    size: 16,
                    weight: FontWeight.w800,
                    color: AppColors.onDark,
                  ),
                ),
              ),
              InkWell(
                onTap: widget.onDismiss,
                borderRadius: BorderRadius.circular(AppRadii.sm),
                child: Padding(
                  padding: const EdgeInsets.all(2),
                  child: Icon(
                    Icons.close,
                    size: 18,
                    color: AppColors.onDark.withValues(alpha: 0.6),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: AppSpacing.s2),
          Text(
            _method == InstallMethod.browserPrompt
                ? 'Dann startest Du beim nächsten Einkauf direkt, ohne den '
                    'Browser zu suchen. Kostet nichts und belegt keinen '
                    'Speicher wie eine heruntergeladene App.'
                : 'Dann startest Du beim nächsten Einkauf direkt, ohne den '
                    'Browser zu suchen. Safari legt dafür ein Symbol auf '
                    'Deinen Startbildschirm.',
            style: AppTypography.body(
              size: 12.5,
              color: AppColors.brandLight,
            ).copyWith(height: 1.45),
          ),
          const SizedBox(height: AppSpacing.s3),
          if (_method == InstallMethod.browserPrompt)
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(AppRadii.pill),
                  ),
                ),
                onPressed: _busy ? null : _install,
                child: _busy
                    ? const SizedBox(
                        height: 16,
                        width: 16,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          color: AppColors.ink,
                        ),
                      )
                    : const Text('Auf den Startbildschirm'),
              ),
            )
          else
            const _IosSteps(),
        ],
      ),
    );
  }
}

/// iOS lässt die Ablage nur über das Teilen-Menü zu. Es gibt dafür keine
/// Schnittstelle, die wir auslösen könnten, deshalb der erklärte Weg.
class _IosSteps extends StatelessWidget {
  const _IosSteps();

  @override
  Widget build(BuildContext context) {
    Widget step(int n, String text, IconData? icon) => Padding(
          padding: const EdgeInsets.only(bottom: AppSpacing.s2),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 18,
                height: 18,
                alignment: Alignment.center,
                decoration: const BoxDecoration(
                  color: AppColors.brand,
                  shape: BoxShape.circle,
                ),
                child: Text(
                  '$n',
                  style: AppTypography.body(
                    size: 10,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.s2),
              Expanded(
                child: Text(
                  text,
                  style: AppTypography.body(
                    size: 12.5,
                    color: AppColors.onDark,
                  ).copyWith(height: 1.4),
                ),
              ),
              if (icon != null) ...[
                const SizedBox(width: AppSpacing.s1),
                Icon(icon, size: 16, color: AppColors.brand),
              ],
            ],
          ),
        );

    return Column(
      children: [
        step(
          1,
          'Unten in Safari auf das Teilen-Symbol tippen',
          Icons.ios_share,
        ),
        step(
          2,
          'In der Liste „Zum Home-Bildschirm" wählen',
          Icons.add_box_outlined,
        ),
        step(3, 'Oben rechts mit „Hinzufügen" bestätigen', null),
      ],
    );
  }
}
