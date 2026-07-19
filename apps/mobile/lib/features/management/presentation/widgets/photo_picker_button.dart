import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';

import '../../../../core/services/storage_service.dart';

/// Nimmt ein Foto auf (Kamera), lädt es in den 'haccp'-Bucket und meldet den
/// Storage-Pfad über [onUploaded]. Für Foto-Dokumentation (HACCP).
class PhotoPickerButton extends ConsumerStatefulWidget {
  const PhotoPickerButton({required this.onUploaded, super.key});

  final ValueChanged<String> onUploaded;

  @override
  ConsumerState<PhotoPickerButton> createState() => _PhotoPickerButtonState();
}

class _PhotoPickerButtonState extends ConsumerState<PhotoPickerButton> {
  bool _busy = false;
  String? _path;

  Future<void> _pick() async {
    setState(() => _busy = true);
    try {
      final picker = ImagePicker();
      final file = await picker.pickImage(
        source: ImageSource.camera,
        maxWidth: 1600,
        imageQuality: 80,
      );
      if (file == null) return;
      final bytes = await file.readAsBytes();
      final path = await ref.read(storageServiceProvider).upload(
            bucket: 'haccp',
            filename: file.name,
            bytes: bytes,
            contentType: 'image/jpeg',
          );
      widget.onUploaded(path);
      if (mounted) setState(() => _path = path);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Foto-Upload fehlgeschlagen: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      onPressed: _busy ? null : _pick,
      icon: _busy
          ? const SizedBox(
              height: 16,
              width: 16,
              child: CircularProgressIndicator(strokeWidth: 2))
          : Icon(_path == null ? Icons.photo_camera : Icons.check),
      label: Text(_path == null ? 'Foto aufnehmen' : 'Foto angehängt'),
    );
  }
}
