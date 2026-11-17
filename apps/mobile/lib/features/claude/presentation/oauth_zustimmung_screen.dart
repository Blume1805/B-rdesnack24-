import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/di/providers.dart';
import '../../../core/router/app_router.dart';
import '../../../core/theme/app_tokens.dart';
import '../../../core/theme/app_typography.dart';
import '../data/zustimmung_dienst.dart';
import '../domain/zustimmung.dart';

final zustimmungDienstProvider = Provider<ZustimmungDienst>((ref) {
  final cfg = ref.watch(appConfigProvider);
  final client = ref.watch(supabaseClientProvider);
  return ZustimmungDienst(
    basisUrl: cfg.supabaseUrl,
    apiKey: cfg.supabaseAnonKey,
    zugangsToken: () => client.auth.currentSession?.accessToken ?? '',
  );
});

/// Öffnet die Rücksprungadresse im selben Fenster (zurück zu Claude).
final weiterleitenProvider = Provider<Future<void> Function(String)>(
  (ref) => (url) async {
    await launchUrl(Uri.parse(url), webOnlyWindowName: '_self');
  },
);

/// Zustimmungsseite für die Claude-Verbindung (Runbook S).
class OAuthZustimmungScreen extends ConsumerStatefulWidget {
  const OAuthZustimmungScreen({super.key});

  @override
  ConsumerState<OAuthZustimmungScreen> createState() =>
      _OAuthZustimmungScreenState();
}

class _OAuthZustimmungScreenState extends ConsumerState<OAuthZustimmungScreen> {
  late final Future<ZustimmungsStand> _stand;
  bool _busy = false;
  String? _fehler;

  String? get _kennung => AusstehendeZustimmung.kennung;

  @override
  void initState() {
    super.initState();
    final k = _kennung;
    _stand = k == null
        ? Future.error(StateError('Keine Anfrage'))
        : ref.read(zustimmungDienstProvider).abrufen(k);
    _stand.then((s) {
      if (s is BereitsZugestimmt) _weiter(s.ruecksprung);
    }).catchError((_) {});
  }

  Future<void> _weiter(String url) async {
    AusstehendeZustimmung.kennung = null;
    await ref.read(weiterleitenProvider)(url);
  }

  Future<void> _entscheiden(bool zustimmen) async {
    final k = _kennung;
    if (k == null) return;
    setState(() {
      _busy = true;
      _fehler = null;
    });
    try {
      final url = await ref
          .read(zustimmungDienstProvider)
          .entscheiden(k, zustimmen: zustimmen);
      await _weiter(url);
    } catch (_) {
      if (mounted) {
        setState(
          () => _fehler = 'Das hat nicht geklappt. Bitte in Claude die '
              'Verbindung neu starten.',
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Verbindung mit Claude')),
      body: FutureBuilder<ZustimmungsStand>(
        future: _stand,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          final s = snap.data;
          if (snap.hasError || s == null) {
            return _Hinweis(
              text: 'Keine gültige Anfrage gefunden. Bitte die Verbindung in '
                  'Claude neu starten.',
              onZurueck: () => context.go(AppRoutes.home),
            );
          }
          if (s is BereitsZugestimmt) {
            return const Center(child: Text('Weiter zu Claude …'));
          }
          final a = (s as ZustimmungNoetig).anfrage;
          return ListView(
            padding: const EdgeInsets.all(AppSpacing.s6),
            children: [
              Text(
                '${a.anwendung} möchte auf die Verwaltung zugreifen',
                style: AppTypography.display(size: 22, weight: FontWeight.w800),
              ),
              const SizedBox(height: AppSpacing.s4),
              const _Punkt(
                ja: true,
                text: 'Protokolle (Temperatur, Reinigung, Vernichtung, '
                    'Befüllung, Wartung, Geldentnahme) als PDF anfordern. '
                    'Claude erhält nur einen Download-Link, nicht den Inhalt.',
              ),
              const _Punkt(
                ja: true,
                text:
                    'Offene Freigaben, Unterschriften und ablaufende Dokumente '
                    'sehen — nur Titel, Zeiträume und Anzahlen.',
              ),
              const _Punkt(
                ja: false,
                text: 'Keine Namen oder Daten von Beschäftigten, keine '
                    'Schulungsnachweise.',
              ),
              const _Punkt(
                ja: false,
                text: 'Nichts freigeben, unterschreiben, ändern oder löschen. '
                    'Freigaben erteilt weiter nur ein Mensch in der App.',
              ),
              const SizedBox(height: AppSpacing.s4),
              Text(
                'Jeder Zugriff wird protokolliert. Du kannst die Verbindung '
                'jederzeit in Claude trennen.',
                style: AppTypography.body(size: 13, color: AppColors.textMuted),
              ),
              if (_fehler != null) ...[
                const SizedBox(height: AppSpacing.s4),
                Text(_fehler!, style: const TextStyle(color: Colors.redAccent)),
              ],
              const SizedBox(height: AppSpacing.s6),
              FilledButton(
                onPressed: _busy ? null : () => _entscheiden(true),
                child: const Text('Erlauben'),
              ),
              const SizedBox(height: AppSpacing.s3),
              OutlinedButton(
                onPressed: _busy ? null : () => _entscheiden(false),
                child: const Text('Ablehnen'),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _Punkt extends StatelessWidget {
  const _Punkt({required this.ja, required this.text});
  final bool ja;
  final String text;

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: AppSpacing.s3),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(
              ja ? Icons.check_circle_outline : Icons.block,
              size: 20,
              color: ja ? Colors.greenAccent : Colors.redAccent,
            ),
            const SizedBox(width: AppSpacing.s3),
            Expanded(child: Text(text)),
          ],
        ),
      );
}

class _Hinweis extends StatelessWidget {
  const _Hinweis({required this.text, required this.onZurueck});
  final String text;
  final VoidCallback onZurueck;

  @override
  Widget build(BuildContext context) => Center(
        child: Padding(
          padding: const EdgeInsets.all(AppSpacing.s6),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(text, textAlign: TextAlign.center),
              const SizedBox(height: AppSpacing.s4),
              TextButton(onPressed: onZurueck, child: const Text('Zur App')),
            ],
          ),
        ),
      );
}
