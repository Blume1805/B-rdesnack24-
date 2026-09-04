import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/security/biometrie/biometrie_dienst.dart';
import '../../../../core/security/biometrie/biometrie_provider.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/app_user.dart';
import '../controllers/auth_providers.dart';

/// Sicherheitseinstellungen — für Kunden wie für Gesellschafter dieselbe
/// Seite.
///
/// Beide Bereiche liegen in derselben App; getrennte Bildschirme wären zwei
/// Orte, an denen dieselbe Regel gepflegt werden müsste, und einer davon
/// würde irgendwann vergessen. Unterschiedlich ist nur, was zusätzlich
/// angeboten wird: interne Rollen bekommen hier auch den Weg zur
/// Zwei-Faktor-Anmeldung.
class SecurityScreen extends ConsumerStatefulWidget {
  const SecurityScreen({super.key});

  @override
  ConsumerState<SecurityScreen> createState() => _SecurityScreenState();
}

class _SecurityScreenState extends ConsumerState<SecurityScreen> {
  bool _busy = false;

  Future<void> _umschalten(bool ein) async {
    setState(() => _busy = true);
    try {
      final c = ref.read(biometrieControllerProvider);
      if (!ein) {
        await c.ausschalten();
        _melde('Die biometrische Anmeldung ist ausgeschaltet.');
        return;
      }
      final fehler = await c.einschalten();
      final text = switch (fehler) {
        null => 'Eingerichtet. Beim nächsten Start genügt dein Gesicht '
            'oder dein Fingerabdruck.',
        Einschaltfehler.nichtAngemeldet => 'Dafür musst du angemeldet sein.',
        Einschaltfehler.keineBiometrie =>
          'Auf diesem Gerät ist keine Biometrie eingerichtet. Lege sie '
              'zuerst in den Systemeinstellungen an.',
        Einschaltfehler.abgebrochen =>
          'Abgebrochen — es wurde nichts gespeichert.',
      };
      _melde(text);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  void _melde(String text) {
    if (!mounted) return;
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(text)));
  }

  @override
  Widget build(BuildContext context) {
    final art =
        ref.watch(biometrieArtProvider).valueOrNull ?? BiometrieArt.keine;
    final verfuegbar = ref.watch(biometrieVerfuegbarProvider).valueOrNull;
    final bindung = ref.watch(biometrieBindungProvider).valueOrNull;
    final nutzer = ref.watch(currentUserProvider).valueOrNull;
    final intern = nutzer != null && nutzer.role != UserRole.customer;

    return Scaffold(
      backgroundColor: AppColors.surfaceAlt,
      appBar: const HeroAppBar(title: Text('Sicherheit')),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(AppSpacing.s5),
          children: [
            _BiometrieKarte(
              art: art,
              verfuegbar: verfuegbar,
              gebundenAn: bindung?.email,
              busy: _busy,
              onChanged: _umschalten,
            ),
            if (intern) ...[
              const SizedBox(height: AppSpacing.s4),
              Card(
                child: ListTile(
                  leading: const Icon(Icons.verified_user_outlined),
                  title: const Text('Zwei-Faktor-Anmeldung'),
                  subtitle: const Text(
                    'Zusätzlicher Code aus einer Authenticator-App. '
                    'Für Rollen mit Zugriff auf Finanzen und Verwaltung.',
                  ),
                  trailing: const Icon(Icons.chevron_right),
                  onTap: () => GoRouter.of(context).push(AppRoutes.mfaEnroll),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _BiometrieKarte extends StatelessWidget {
  const _BiometrieKarte({
    required this.art,
    required this.verfuegbar,
    required this.gebundenAn,
    required this.busy,
    required this.onChanged,
  });

  final BiometrieArt art;
  final bool? verfuegbar;
  final String? gebundenAn;
  final bool busy;
  final ValueChanged<bool> onChanged;

  @override
  Widget build(BuildContext context) {
    final aktiv = gebundenAn != null;
    final name = art.bezeichnung;

    return Card(
      child: Padding(
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              value: aktiv,
              onChanged: (busy || verfuegbar == false) ? null : onChanged,
              title: Text('Mit $name anmelden'),
              subtitle: Text(
                aktiv
                    ? 'Aktiv für $gebundenAn'
                    : 'Ohne Passwort in dein Konto',
              ),
              secondary: Icon(
                art == BiometrieArt.faceId
                    ? Icons.face_outlined
                    : Icons.fingerprint,
              ),
            ),
            if (verfuegbar == false) ...[
              const SizedBox(height: AppSpacing.s2),
              Text(
                'Dieses Gerät bietet keine Biometrie an — im Browser gibt es '
                'sie grundsätzlich nicht. Nutze die installierte App auf '
                'deinem Telefon.',
                style: AppTypography.body(size: 13),
              ),
            ],
            const SizedBox(height: AppSpacing.s3),
            const Divider(height: 1),
            const SizedBox(height: AppSpacing.s3),
            Text('Was dabei passiert', style: AppTypography.display(size: 15)),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Dein Gesicht beziehungsweise dein Fingerabdruck wird '
              'ausschließlich von deinem Gerät geprüft. Bördesnack24 '
              'bekommt davon nur ein Ja oder Nein — kein Bild, keine '
              'Merkmale, nichts, was übertragen oder gespeichert würde.\n\n'
              'Auf dem Gerät liegt deine Anmeldung danach im geschützten '
              'Speicher des Betriebssystems statt wie bisher offen daneben. '
              'Herausgegeben wird sie erst nach bestandener Prüfung.\n\n'
              'Es gilt ein Gerät, ein Konto: Meldet sich hier jemand anderes '
              'an, wird die Freischaltung gelöscht und muss neu erteilt '
              'werden. Beim Abmelden ebenso.',
              style: AppTypography.body(size: 13),
            ),
          ],
        ),
      ),
    );
  }
}
