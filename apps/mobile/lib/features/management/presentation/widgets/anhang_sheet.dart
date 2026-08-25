import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/services/storage_service.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';

/// Unterlagen zu einer Verwaltungskachel hinzufügen, per Datei oder Kamera.
///
/// Vorgabe des Auftraggebers vom 25.08.2026: „Über Upload oder per Foto soll
/// weitere Unterlagen in die jeweilige Kachel hinzugefügt werden können."
///
/// WOHIN DIE UNTERLAGE GEHT
/// Nicht in einen neuen Anhang-Speicher, sondern in das vorhandene
/// Dokumentenarchiv (`documents` plus `document_versions`, Bucket
/// `documents`), abgelegt im Ordner der jeweiligen Kachel. Ein zweiter
/// Speicher neben dem Archiv hätte eine zweite Rechteprüfung, eine zweite
/// Löschfrist und eine zweite Suche gebraucht, und die Freigabe- und
/// Unterschriftsabläufe hätten ihn nicht gekannt.
///
/// Der Kamera-Weg des HACCP-Protokolls (`PhotoPickerButton`, Bucket `haccp`)
/// bleibt unberührt: Dort hängt das Foto an einem einzelnen Protokolleintrag,
/// hier an der Kachel.
class AnhangSheet {
  const AnhangSheet._();

  /// Öffnet die Auswahl. Gibt `true` zurück, wenn etwas abgelegt wurde.
  static Future<bool> oeffnen(
    BuildContext context, {
    required String ordner,
    required String kachel,
  }) async {
    final ergebnis = await showModalBottomSheet<bool>(
      context: context,
      backgroundColor: AppColors.surfaceCard,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(
          top: Radius.circular(AppRadii.lg),
        ),
      ),
      builder: (_) => _AnhangInhalt(ordner: ordner, kachel: kachel),
    );
    return ergebnis ?? false;
  }
}

class _AnhangInhalt extends ConsumerStatefulWidget {
  const _AnhangInhalt({required this.ordner, required this.kachel});

  final String ordner;
  final String kachel;

  @override
  ConsumerState<_AnhangInhalt> createState() => _AnhangInhaltState();
}

class _AnhangInhaltState extends ConsumerState<_AnhangInhalt> {
  bool _laeuft = false;
  String? _fehler;

  Future<void> _ablegen({
    required Uint8List bytes,
    required String dateiname,
    required String typ,
  }) async {
    setState(() {
      _laeuft = true;
      _fehler = null;
    });
    try {
      final pfad = await ref.read(storageServiceProvider).upload(
            bucket: 'documents',
            filename: dateiname,
            bytes: bytes,
            contentType: typ,
          );
      final client = ref.read(supabaseClientProvider);
      final eingefuegt = await client
          .from('documents')
          .insert({'title': dateiname, 'category': widget.ordner})
          .select('id')
          .single();
      // Die Version nicht selbst einfügen: `add_document_version` setzt
      // Versionsnummer und `current_version` in einem Schritt und ist die
      // Stelle, die das Dokumentenarchiv ohnehin benutzt. Zwei Wege in
      // dieselbe Tabelle laufen früher oder später auseinander.
      await client.rpc(
        'add_document_version',
        params: {
          'p_document': eingefuegt['id'],
          'p_file_path': pfad,
          'p_notes': dateiname,
        },
      );
      if (mounted) Navigator.of(context).pop(true);
    } catch (e) {
      // Der Text nennt den Grund, nicht nur dass etwas schiefging: Ohne ihn
      // ist „Fehlgeschlagen" für den Auftraggeber nicht handhabbar.
      if (mounted) {
        setState(() {
          _fehler = 'Ablegen fehlgeschlagen: $e';
          _laeuft = false;
        });
      }
    }
  }

  Future<void> _datei() async {
    final auswahl = await FilePicker.platform.pickFiles(
      withData: true,
      type: FileType.custom,
      allowedExtensions: const ['pdf', 'docx', 'doc', 'jpg', 'jpeg', 'png'],
    );
    final datei = auswahl?.files.singleOrNull;
    if (datei?.bytes == null) return;
    await _ablegen(
      bytes: datei!.bytes!,
      dateiname: datei.name,
      typ: _typAus(datei.name),
    );
  }

  Future<void> _foto() async {
    final bild = await ImagePicker().pickImage(
      source: ImageSource.camera,
      maxWidth: 2000,
      imageQuality: 85,
    );
    if (bild == null) return;
    await _ablegen(
      bytes: await bild.readAsBytes(),
      dateiname: bild.name,
      typ: 'image/jpeg',
    );
  }

  static String _typAus(String name) {
    final endung = name.toLowerCase().split('.').last;
    switch (endung) {
      case 'pdf':
        return 'application/pdf';
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'doc':
        return 'application/msword';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument'
            '.wordprocessingml.document';
      default:
        return 'application/octet-stream';
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          AppSpacing.s4,
          AppSpacing.s5,
          AppSpacing.s5,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 36,
                height: 4,
                decoration: BoxDecoration(
                  color: AppColors.borderSubtle,
                  borderRadius: BorderRadius.circular(AppRadii.pill),
                ),
              ),
            ),
            const SizedBox(height: AppSpacing.s4),
            Text(
              'Unterlage hinzufügen',
              style: AppTypography.display(size: 18, weight: FontWeight.w700),
            ),
            const SizedBox(height: 4),
            Text(
              'Die Datei landet im Dokumentenarchiv, im Ordner zu '
              '„${widget.kachel}". Du findest sie dort wieder, mit Version '
              'und Datum.',
              style: AppTypography.body(size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s5),
            if (_laeuft)
              const Padding(
                padding: EdgeInsets.symmetric(vertical: AppSpacing.s6),
                child: Center(
                  child: CircularProgressIndicator(color: AppColors.brand),
                ),
              )
            else ...[
              _Weg(
                icon: Icons.upload_file_outlined,
                titel: 'Datei hochladen',
                hinweis: 'PDF, Word oder Bild',
                onTap: _datei,
              ),
              const SizedBox(height: AppSpacing.s3),
              _Weg(
                icon: Icons.photo_camera_outlined,
                titel: 'Foto aufnehmen',
                hinweis: 'Beleg oder Aushang abfotografieren',
                onTap: _foto,
              ),
            ],
            if (_fehler != null) ...[
              const SizedBox(height: AppSpacing.s4),
              Text(
                _fehler!,
                style: AppTypography.body(
                  size: 13,
                  color: AppColors.statusCritical,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _Weg extends StatelessWidget {
  const _Weg({
    required this.icon,
    required this.titel,
    required this.hinweis,
    required this.onTap,
  });

  final IconData icon;
  final String titel;
  final String hinweis;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.surfaceAlt,
      borderRadius: BorderRadius.circular(AppRadii.md),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppRadii.md),
        child: Container(
          padding: const EdgeInsets.all(AppSpacing.s4),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppRadii.md),
            border: Border.all(color: AppColors.borderStrong),
          ),
          child: Row(
            children: [
              Icon(icon, color: AppColors.ink),
              const SizedBox(width: AppSpacing.s3),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      titel,
                      style: AppTypography.body(
                        size: 15,
                        weight: FontWeight.w700,
                        color: AppColors.ink,
                      ),
                    ),
                    Text(
                      hinweis,
                      style: AppTypography.body(
                        size: 12,
                        color: AppColors.textMuted,
                      ),
                    ),
                  ],
                ),
              ),
              const Icon(Icons.chevron_right, color: AppColors.textMuted),
            ],
          ),
        ),
      ),
    );
  }
}
