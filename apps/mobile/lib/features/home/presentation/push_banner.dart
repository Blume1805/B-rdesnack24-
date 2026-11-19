import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/di/providers.dart';
import '../../../core/services/web_push.dart';
import '../../../core/theme/app_tokens.dart';
import '../../../core/theme/app_typography.dart';

final webPushProvider =
    Provider<WebPush>((ref) => WebPush(ref.watch(supabaseClientProvider)));

final pushZustandProvider = FutureProvider.autoDispose<PushZustand>(
  (ref) => ref.watch(webPushProvider).zustand(),
);

/// „Später" gilt für die laufende Sitzung.
final pushHinweisWeggeklicktProvider = StateProvider<bool>((ref) => false);

/// Hinweis für interne Konten, Push für Freigaben einzuschalten (Wunsch
/// Philipp 19.11.2026). Verschwindet, sobald Push aktiv ist oder das Gerät
/// es nicht kann.
class PushBanner extends ConsumerStatefulWidget {
  const PushBanner({super.key});

  @override
  ConsumerState<PushBanner> createState() => _PushBannerState();
}

class _PushBannerState extends ConsumerState<PushBanner> {
  bool _abgeglichen = false;
  bool _laeuft = false;

  Future<void> _einschalten() async {
    setState(() => _laeuft = true);
    try {
      await ref.read(webPushProvider).einschalten();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Push konnte nicht eingeschaltet werden. Bitte später noch '
              'einmal versuchen.',
            ),
          ),
        );
      }
    } finally {
      ref.invalidate(pushZustandProvider);
      if (mounted) setState(() => _laeuft = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final zustand = ref.watch(pushZustandProvider).valueOrNull;
    if (zustand == PushZustand.aktiv && !_abgeglichen) {
      _abgeglichen = true;
      ref.read(webPushProvider).abgleichen();
    }
    if (ref.watch(pushHinweisWeggeklicktProvider)) {
      return const SizedBox.shrink();
    }
    final text = switch (zustand) {
      PushZustand.aus =>
        'Push-Benachrichtigung einschalten, wenn Dokumente auf Deine '
            'Freigabe warten.',
      PushZustand.homeBildschirmNoetig =>
        'Für Push-Benachrichtigungen: Teilen → „Zum Home-Bildschirm" und '
            'die App von dort öffnen.',
      PushZustand.abgelehnt =>
        'Push-Benachrichtigungen sind blockiert. In den Einstellungen des '
            'Geräts für Bördesnack24 erlauben.',
      _ => null,
    };
    if (text == null) return const SizedBox.shrink();

    return Material(
      color: AppColors.brandLight,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s4,
          AppSpacing.s2,
          AppSpacing.s2,
          AppSpacing.s2,
        ),
        child: Row(
          children: [
            const Icon(
              Icons.notifications_active_outlined,
              size: 18,
              color: AppColors.brandText,
            ),
            const SizedBox(width: AppSpacing.s2),
            Expanded(
              child: Text(
                text,
                style: AppTypography.body(
                  size: 12.5,
                  weight: FontWeight.w600,
                  color: AppColors.textStrong,
                ),
              ),
            ),
            if (zustand == PushZustand.aus)
              TextButton(
                onPressed: _laeuft ? null : _einschalten,
                child: const Text('Einschalten'),
              ),
            IconButton(
              tooltip: 'Später',
              icon: const Icon(Icons.close, size: 18),
              onPressed: () => ref
                  .read(pushHinweisWeggeklicktProvider.notifier)
                  .state = true,
            ),
          ],
        ),
      ),
    );
  }
}
