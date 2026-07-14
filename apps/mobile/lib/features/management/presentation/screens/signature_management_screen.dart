import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/widgets/design_system/design_system.dart';

/// Verwaltet die hinterlegten Gesellschafter-Signaturen (partner_signatures).
///   • Bild-Vorschau (Signed-URL aus partner-signatures-Bucket)
///   • „Aus DocuSign holen"-Button → docusign-fetch-signature Edge Function
///   • Manuell hochladen (PNG/JPG) → Storage + set_partner_signature_image
///   • Zuordnung Signatur ↔ Profil (per full_name schnell verlinkbar)
class SignatureManagementScreen extends ConsumerStatefulWidget {
  const SignatureManagementScreen({super.key});
  @override
  ConsumerState<SignatureManagementScreen> createState() =>
      _SignatureManagementScreenState();
}

class _SignatureManagementScreenState
    extends ConsumerState<SignatureManagementScreen> {
  final Map<String, bool> _busy = {};

  Future<List<Map<String, dynamic>>> _fetch() async {
    final client = ref.read(supabaseClientProvider);
    final rows = await client
        .from('partner_signatures')
        .select('id, full_name, role_label, image_url, docusign_signature_uri, '
                'captured_via, captured_at, profile_id, '
                'profile:profiles(full_name)')
        .order('sort_order');
    return (rows as List).cast<Map<String, dynamic>>();
  }

  Future<void> _syncDocuSign(String signatureId) async {
    setState(() => _busy[signatureId] = true);
    try {
      final res = await ref.read(supabaseClientProvider).functions.invoke(
        'docusign-fetch-signature',
        body: {'signature_id': signatureId},
      );
      if (!mounted) return;
      final data = res.data;
      if (data is Map && data['ok'] == true) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
            content: Text('Signatur aus DocuSign übernommen.')));
        setState(() {});
      } else {
        final msg = data is Map ? (data['error']?.toString() ?? '$data') : '$data';
        final hint = data is Map ? data['hint']?.toString() : null;
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text(hint == null ? msg : '$msg\n\n$hint'),
            duration: const Duration(seconds: 6)));
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('$e')));
      }
    } finally {
      if (mounted) setState(() => _busy[signatureId] = false);
    }
  }

  Future<void> _uploadImage(String signatureId) async {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.image,
      withData: true,
    );
    if (result == null || result.files.isEmpty) return;
    final file = result.files.single;
    final Uint8List? bytes = file.bytes;
    if (bytes == null) return;
    setState(() => _busy[signatureId] = true);
    try {
      final client = ref.read(supabaseClientProvider);
      final ext = file.extension?.toLowerCase() ?? 'png';
      final path = '$signatureId.$ext';
      await client.storage.from('partner-signatures').uploadBinary(
            path, bytes,
            fileOptions: FileOptions(
              contentType: ext == 'jpg' || ext == 'jpeg'
                  ? 'image/jpeg' : 'image/png',
              upsert: true,
            ),
          );
      final signed = await client.storage
          .from('partner-signatures')
          .createSignedUrl(path, 60 * 60 * 24 * 365);
      await client.rpc('set_partner_signature_image', params: {
        'p_signature_id': signatureId,
        'p_image_url': signed,
        'p_captured_via': 'manual',
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Signatur hochgeladen.')));
        setState(() {});
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    } finally {
      if (mounted) setState(() => _busy[signatureId] = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Signaturen')),
      body: FutureBuilder<List<Map<String, dynamic>>>(
        future: _fetch(),
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Center(
                child: CircularProgressIndicator(color: AppColors.brand));
          }
          if (snap.hasError) {
            return Center(child: Padding(
                padding: const EdgeInsets.all(AppSpacing.s6),
                child: Text('${snap.error}')));
          }
          final rows = snap.data ?? [];
          if (rows.isEmpty) {
            return const Center(child: Text('Noch keine Signatur-Slots.'));
          }
          return RefreshIndicator(
            onRefresh: () async => setState(() {}),
            color: AppColors.brand,
            child: ListView(
              padding: const EdgeInsets.all(AppSpacing.s5),
              children: [
                Padding(
                  padding: const EdgeInsets.only(bottom: AppSpacing.s3),
                  child: Text(
                    'Die hier gepflegten Signaturbilder werden in signierte '
                    'PDFs eingebettet (Freigabe-Workflow). Bilder können '
                    'automatisch aus DocuSign gezogen oder manuell '
                    'hochgeladen werden. PNG mit transparentem Hintergrund '
                    'sieht am besten aus.',
                    style: AppTypography.body(
                        size: 12, color: AppColors.textMuted),
                  ),
                ),
                for (final r in rows) _SignatureCard(
                  row: r,
                  busy: _busy[r['id']?.toString()] ?? false,
                  onSync: () => _syncDocuSign(r['id']?.toString() ?? ''),
                  onUpload: () => _uploadImage(r['id']?.toString() ?? ''),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class _SignatureCard extends StatelessWidget {
  const _SignatureCard({
    required this.row,
    required this.busy,
    required this.onSync,
    required this.onUpload,
  });
  final Map<String, dynamic> row;
  final bool busy;
  final VoidCallback onSync;
  final VoidCallback onUpload;

  @override
  Widget build(BuildContext context) {
    final imageUrl = row['image_url']?.toString();
    final hasImage = imageUrl != null && imageUrl.isNotEmpty;
    final dsUri = row['docusign_signature_uri']?.toString();
    final hasDs = dsUri != null && dsUri.isNotEmpty;
    final capturedVia = row['captured_via']?.toString();
    final profileName =
        (row['profile'] as Map<String, dynamic>?)?['full_name']?.toString();

    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s4),
      child: AppCard(
        padding: const EdgeInsets.all(AppSpacing.s4),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(row['full_name']?.toString() ?? '',
                          style: AppTypography.body(
                              size: 15,
                              weight: FontWeight.w800,
                              color: AppColors.ink)),
                      Text(
                        '${row['role_label'] ?? ''}'
                        '${profileName == null ? '' : ' · verknüpft mit „$profileName"'}',
                        style: AppTypography.body(
                            size: 11, color: AppColors.textMuted),
                      ),
                    ],
                  ),
                ),
                if (hasImage)
                  StatusBadge(
                    label: capturedVia == 'docusign' ? 'DocuSign' :
                           capturedVia == 'manual'   ? 'manuell'  : 'gesetzt',
                    tone: StatusTone.positive,
                    icon: Icons.check_circle_outline,
                  )
                else
                  const StatusBadge(
                    label: 'kein Bild',
                    tone: StatusTone.warning,
                    icon: Icons.warning_amber,
                  ),
              ],
            ),
            const SizedBox(height: AppSpacing.s3),
            Container(
              height: 80,
              decoration: BoxDecoration(
                color: AppColors.surfaceAlt,
                border: Border.all(color: AppColors.borderSubtle),
                borderRadius: BorderRadius.circular(AppRadii.md),
              ),
              alignment: Alignment.center,
              child: hasImage
                  ? Image.network(imageUrl,
                      fit: BoxFit.contain,
                      errorBuilder: (_, __, ___) =>
                          const Text('Bild konnte nicht geladen werden'))
                  : Text('— noch keine Signatur —',
                      style: AppTypography.body(
                          size: 12, color: AppColors.textMuted)),
            ),
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                Expanded(
                  child: FilledButton.icon(
                    onPressed: (busy || !hasDs) ? null : onSync,
                    icon: const Icon(Icons.cloud_download_outlined),
                    label: const Text('Aus DocuSign holen'),
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.brand,
                      foregroundColor: AppColors.ink,
                    ),
                  ),
                ),
                const SizedBox(width: AppSpacing.s2),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: busy ? null : onUpload,
                    icon: const Icon(Icons.upload_file),
                    label: const Text('Manuell hochladen'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: AppColors.ink,
                      side: const BorderSide(color: AppColors.ink),
                    ),
                  ),
                ),
              ],
            ),
            if (!hasDs) ...[
              const SizedBox(height: 6),
              Text('Kein docusign_signature_uri hinterlegt — nur '
                   'manueller Upload verfügbar.',
                  style: AppTypography.body(
                      size: 10, color: AppColors.textMuted)),
            ],
          ],
        ),
      ),
    );
  }
}
