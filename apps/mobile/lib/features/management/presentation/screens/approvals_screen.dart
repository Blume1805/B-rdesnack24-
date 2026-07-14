import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../data/approvals_remote_data_source.dart';

final _approvalsRemoteProvider =
    Provider<ApprovalsRemoteDataSource>((ref) =>
        ApprovalsRemoteDataSource(ref.watch(supabaseClientProvider)));

final _approvalsListProvider =
    FutureProvider.autoDispose<List<Map<String, dynamic>>>(
        (ref) => ref.watch(_approvalsRemoteProvider).list());

/// Freigaben-Übersicht: alle offenen und erledigten Anfragen. Gesellschafter
/// sehen ihre eigenen offenen Entscheidungen ganz oben.
class DocumentApprovalsScreen extends ConsumerWidget {
  const DocumentApprovalsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final approvals = ref.watch(_approvalsListProvider);
    return Scaffold(
      appBar: AppBar(title: const Text('Freigaben')),
      body: approvals.when(
        loading: () => const Center(
            child: CircularProgressIndicator(color: AppColors.brand)),
        error: (e, _) => Center(
            child: Padding(padding: const EdgeInsets.all(AppSpacing.s6),
                child: Text('$e'))),
        data: (rows) => rows.isEmpty
            ? const _EmptyHint()
            : RefreshIndicator(
                onRefresh: () async => ref.invalidate(_approvalsListProvider),
                color: AppColors.brand,
                child: ListView(
                  padding: const EdgeInsets.all(AppSpacing.s5),
                  children: [
                    for (final r in rows) _ApprovalCard(row: r),
                  ],
                ),
              ),
      ),
    );
  }
}

class _EmptyHint extends StatelessWidget {
  const _EmptyHint();
  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Padding(
        padding: EdgeInsets.all(AppSpacing.s6),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Icon(Icons.rule_folder_outlined,
              size: 40, color: AppColors.textMuted),
          SizedBox(height: 8),
          Text('Keine Freigabe-Anfragen offen.'),
        ]),
      ),
    );
  }
}

class _ApprovalCard extends ConsumerWidget {
  const _ApprovalCard({required this.row});
  final Map<String, dynamic> row;

  Color _statusColor(String status) {
    switch (status) {
      case 'approved': return AppColors.statusPositive;
      case 'rejected': return AppColors.statusCritical;
      case 'cancelled': return AppColors.textMuted;
      default: return AppColors.brand;
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final status = row['status']?.toString() ?? 'pending';
    final myDec = row['my_decision']?.toString() ?? 'pending';
    final decisions =
        (row['decisions'] as List?)?.cast<Map<String, dynamic>>() ?? [];

    DateTime? parseDate(dynamic v) =>
        v == null ? null : DateTime.tryParse(v.toString());
    final from = parseDate(row['period_from']);
    final to = parseDate(row['period_to']);
    final requestedAt = parseDate(row['requested_at']);

    // Erledigt = approved / rejected / cancelled → Karte ausgegraut
    // dargestellt (Opacity 0.6), bleibt aber vollständig anklickbar.
    // Bei approved öffnet der Tap direkt das finale signierte PDF.
    final isDone =
        status == 'approved' || status == 'rejected' || status == 'cancelled';
    final finalPath = row['final_pdf_path']?.toString();
    final hasFinal = status == 'approved' &&
        finalPath != null && finalPath.isNotEmpty;

    // Signed-URL wurde bereits im List-Load geholt und ist in row
    // hinterlegt. Damit ist der Tap-Handler synchron und iOS Safari
    // blockt window.open nicht.
    final signedUrl = row['signed_url']?.toString();

    // Tap-Handler: bei approved öffnet er das finale signierte PDF; bei
    // rejected / cancelled zeigt er den Status als SnackBar; ohne PDF-Pfad
    // gibt es einen „wird noch erzeugt"-Hinweis.
    void handleTap() {
      if (hasFinal) {
        if (signedUrl != null && signedUrl.isNotEmpty) {
          // Synchroner Aufruf innerhalb der User-Gesture — kein await
          // zwischen Tap und launchUrl, damit iOS Safari nicht blockt.
          launchUrl(
            Uri.parse(signedUrl),
            mode: LaunchMode.externalApplication,
            webOnlyWindowName: '_blank',
          );
        } else {
          // URL noch nicht bereit — Fallback (holt async und öffnet dann,
          // Popup-Blocker greift eventuell). Nach Refresh sollte der URL
          // beim nächsten Tap sofort da sein.
          _openFinal(context, ref, finalPath);
        }
      } else {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text(status == 'rejected'
                ? 'Diese Freigabe wurde abgelehnt.'
                : status == 'cancelled'
                    ? 'Diese Freigabe wurde abgebrochen.'
                    : 'Signiertes PDF wird noch erzeugt …')));
      }
    }

    final card = AppCard(
      // AppCard.onTap wird nur für erledigte Karten gesetzt — dadurch
      // wird die gesamte Karte tappbar und das interne Ink-/InkWell-Setup
      // von AppCard sorgt für den korrekten Splash.
      onTap: isDone ? handleTap : null,
      topStripeColor: _statusColor(status),
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(row['title']?.toString() ?? '',
                    style: AppTypography.body(
                        size: 15,
                        weight: FontWeight.w800,
                        color: AppColors.ink)),
              ),
              StatusBadge(
                label: switch (status) {
                  'approved' => 'freigegeben',
                  'rejected' => 'abgelehnt',
                  'cancelled' => 'abgebrochen',
                  _ => 'offen',
                },
                tone: switch (status) {
                  'approved' => StatusTone.positive,
                  'rejected' => StatusTone.critical,
                  'cancelled' => StatusTone.neutral,
                  _ => StatusTone.warning,
                },
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            'Zeitraum: ${from == null ? '?' : Formatters.date(from)} – '
            '${to == null ? '?' : Formatters.date(to)}'
            '${requestedAt == null ? '' : ' · angefragt ${Formatters.date(requestedAt)}'}',
            style: AppTypography.body(size: 11, color: AppColors.textMuted),
          ),
          const SizedBox(height: AppSpacing.s3),
          for (final d in decisions) _DecisionRow(row: d),
          if (status == 'pending' && myDec == 'pending') ...[
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                Expanded(
                  child: FilledButton.icon(
                    onPressed: () => _decide(context, ref, 'approved'),
                    icon: const Icon(Icons.check),
                    label: const Text('Freigeben'),
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.statusPositive,
                      foregroundColor: Colors.white,
                    ),
                  ),
                ),
                const SizedBox(width: AppSpacing.s2),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () => _decide(context, ref, 'rejected'),
                    icon: const Icon(Icons.close),
                    label: const Text('Ablehnen'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: AppColors.statusCritical,
                      side: const BorderSide(color: AppColors.statusCritical),
                    ),
                  ),
                ),
              ],
            ),
          ],
          if (hasFinal) ...[
            const SizedBox(height: AppSpacing.s3),
            Row(
              children: [
                const Icon(Icons.picture_as_pdf,
                    size: 16, color: AppColors.brand),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    'Tippen zum Öffnen des signierten PDFs',
                    style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w700,
                        color: AppColors.brand),
                  ),
                ),
                const Icon(Icons.chevron_right,
                    size: 18, color: AppColors.brand),
              ],
            ),
          ],
        ],
      ),
    );

    // Ausgegrautes Erscheinungsbild für erledigte Karten. Opacity blockt
    // keine Hit-Tests, daher bleibt die AppCard.onTap-Fläche tappbar.
    return Padding(
      padding: const EdgeInsets.only(bottom: AppSpacing.s3),
      child: isDone ? Opacity(opacity: 0.6, child: card) : card,
    );
  }

  Future<void> _openFinal(BuildContext context, WidgetRef ref, String path) async {
    if (path.isEmpty) return;
    final messenger = ScaffoldMessenger.of(context);
    // Feedback anzeigen, während der Signed-URL geholt wird — sonst
    // wirkt der Tap ins Leere, bis der Browser das neue Fenster öffnet.
    messenger.showSnackBar(const SnackBar(
      duration: Duration(seconds: 2),
      content: Text('Signiertes PDF wird geöffnet …'),
    ));
    final remote = ref.read(_approvalsRemoteProvider);
    try {
      final url = await remote.signedUrl(path);
      if (url == null || url.isEmpty) {
        throw Exception('Kein Signed-URL verfügbar');
      }
      // webOnlyWindowName='_blank' erzwingt einen neuen Tab auf Web und
      // umgeht Pop-up-Blocker, weil launchUrl direkt window.open aufruft.
      final ok = await launchUrl(
        Uri.parse(url),
        mode: LaunchMode.externalApplication,
        webOnlyWindowName: '_blank',
      );
      if (!ok && context.mounted) {
        messenger.showSnackBar(SnackBar(
          content: const Text('PDF konnte nicht geöffnet werden.'),
          action: SnackBarAction(
            label: 'Link kopieren',
            onPressed: () => Clipboard.setData(ClipboardData(text: url)),
          ),
        ));
      }
    } catch (e) {
      if (context.mounted) {
        messenger.showSnackBar(SnackBar(content: Text('Fehler: $e')));
      }
    }
  }

  Future<void> _decide(BuildContext context, WidgetRef ref, String decision) async {
    String? comment;
    if (decision == 'rejected') {
      final ctrl = TextEditingController();
      comment = await showDialog<String>(
        context: context,
        builder: (_) => AlertDialog(
          title: const Text('Ablehnung begründen'),
          content: TextField(
            controller: ctrl,
            maxLines: 3,
            decoration: const InputDecoration(hintText: 'Kommentar (Pflicht)'),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context, null),
                child: const Text('Abbrechen')),
            FilledButton(
              onPressed: () {
                if (ctrl.text.trim().length < 3) return;
                Navigator.pop(context, ctrl.text.trim());
              },
              child: const Text('Ablehnen'),
            ),
          ],
        ),
      );
      if (comment == null || comment.trim().length < 3) return;
    } else {
      // Vor der Freigabe die Signatur bereitstellen — DocuSign holen ODER
      // Bild hochladen ODER bewusst ohne Signatur (Italic-Platzhalter).
      final okSig = await showModalBottomSheet<bool>(
        context: context,
        isScrollControlled: true,
        builder: (_) => const _SignatureSheet(),
      );
      if (okSig != true) return;
    }
    try {
      await ref.read(_approvalsRemoteProvider).decide(
        approvalId: row['id']?.toString() ?? '',
        decision: decision,
        comment: comment,
      );
      if (context.mounted) {
        ref.invalidate(_approvalsListProvider);
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text(decision == 'approved'
                ? 'Freigegeben — signiertes PDF wird erzeugt.'
                : 'Abgelehnt.')));
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Fehler: $e')));
      }
    }
  }
}

/// Bottom-Sheet zur Signaturwahl vor einer Freigabe. Findet den zu meinem
/// Profil verknüpften Signatur-Slot (partner_signatures.profile_id =
/// auth.uid()) und bietet:
///   • Aus DocuSign holen — ruft docusign-fetch-signature auf (nur wenn
///     docusign_signature_uri hinterlegt ist)
///   • Bild hochladen — File-Picker, PNG/JPG in Storage
///   • Ohne Signatur — decide läuft ohne Signaturbild, PDF nutzt den
///     Italic-Platzhalter mit dem Namen
class _SignatureSheet extends ConsumerStatefulWidget {
  const _SignatureSheet();
  @override
  ConsumerState<_SignatureSheet> createState() => _SignatureSheetState();
}

class _SignatureSheetState extends ConsumerState<_SignatureSheet> {
  Map<String, dynamic>? _slot;
  bool _loading = true;
  bool _busy = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadSlot();
  }

  Future<void> _loadSlot() async {
    try {
      final client = ref.read(supabaseClientProvider);
      final uid = client.auth.currentUser?.id;
      if (uid == null) return;
      final rows = await client
          .from('partner_signatures')
          .select('id, full_name, docusign_signature_uri, image_url, captured_via')
          .eq('profile_id', uid);
      final list = (rows as List).cast<Map<String, dynamic>>();
      setState(() {
        _slot = list.isNotEmpty ? list.first : null;
        _loading = false;
      });
    } catch (e) {
      setState(() {
        _error = '$e';
        _loading = false;
      });
    }
  }

  Future<void> _syncDocuSign() async {
    if (_slot == null) return;
    setState(() => _busy = true);
    try {
      final res = await ref.read(supabaseClientProvider).functions.invoke(
        'docusign-fetch-signature',
        body: {'signature_id': _slot!['id']},
      );
      if (!mounted) return;
      final data = res.data;
      if (data is Map && data['ok'] == true) {
        if (mounted) Navigator.pop(context, true);
      } else {
        final msg = data is Map ? (data['error']?.toString() ?? '$data') : '$data';
        final hint = data is Map ? data['hint']?.toString() : null;
        setState(() => _error = hint == null ? msg : '$msg\n$hint');
      }
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _uploadImage() async {
    if (_slot == null) return;
    setState(() => _busy = true);
    try {
      final picked = await FilePicker.platform.pickFiles(
        type: FileType.image, withData: true);
      if (picked == null || picked.files.isEmpty) {
        setState(() => _busy = false);
        return;
      }
      final file = picked.files.single;
      final Uint8List? bytes = file.bytes;
      if (bytes == null) {
        setState(() => _busy = false);
        return;
      }
      final client = ref.read(supabaseClientProvider);
      final ext = file.extension?.toLowerCase() ?? 'png';
      final path = '${_slot!['id']}.$ext';
      await client.storage.from('partner-signatures').uploadBinary(
            path, bytes,
            fileOptions: FileOptions(
              contentType: (ext == 'jpg' || ext == 'jpeg')
                  ? 'image/jpeg' : 'image/png',
              upsert: true,
            ),
          );
      final signed = await client.storage
          .from('partner-signatures')
          .createSignedUrl(path, 60 * 60 * 24 * 365);
      await client.rpc('set_partner_signature_image', params: {
        'p_signature_id': _slot!['id'],
        'p_image_url': signed,
        'p_captured_via': 'manual',
      });
      if (mounted) Navigator.pop(context, true);
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final hasSlot = _slot != null;
    final hasDs = hasSlot &&
        (_slot!['docusign_signature_uri']?.toString().isNotEmpty ?? false);
    final hasImage = hasSlot &&
        (_slot!['image_url']?.toString().isNotEmpty ?? false);

    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(AppSpacing.s5),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Signatur für Freigabe wählen',
                style: AppTypography.display(
                    size: 20,
                    weight: FontWeight.w800,
                    color: AppColors.ink)),
            const SizedBox(height: AppSpacing.s2),
            Text(
              'Deine Unterschrift wird im signierten PDF als Freigabe-Stempel '
              'eingebettet.',
              style: AppTypography.body(
                  size: 13, color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            if (_loading)
              const Center(child: CircularProgressIndicator(color: AppColors.brand))
            else if (!hasSlot)
              AppCard(
                color: const Color(0xFFFAE9E4),
                borderColor: AppColors.statusCritical,
                child: Text(
                  'Für dein Konto ist kein Signatur-Slot verknüpft. Bitte '
                  'einen System-Admin bitten, partner_signatures.profile_id '
                  'auf deine Profil-ID zu setzen.',
                  style: AppTypography.body(size: 13, color: AppColors.ink),
                ),
              )
            else ...[
              if (hasImage)
                Container(
                  margin: const EdgeInsets.only(bottom: AppSpacing.s3),
                  height: 80,
                  decoration: BoxDecoration(
                    color: AppColors.surfaceAlt,
                    border: Border.all(color: AppColors.borderSubtle),
                    borderRadius: BorderRadius.circular(AppRadii.md),
                  ),
                  alignment: Alignment.center,
                  child: Image.network(
                    _slot!['image_url']?.toString() ?? '',
                    fit: BoxFit.contain,
                    errorBuilder: (_, __, ___) =>
                        const Text('Bild nicht geladen'),
                  ),
                ),
              FilledButton.icon(
                onPressed: (_busy || !hasDs) ? null : _syncDocuSign,
                icon: const Icon(Icons.cloud_download_outlined),
                label: const Text('Aus DocuSign holen'),
                style: FilledButton.styleFrom(
                  backgroundColor: AppColors.brand,
                  foregroundColor: AppColors.ink,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
              if (!hasDs)
                Padding(
                  padding: const EdgeInsets.only(top: 4),
                  child: Text(
                    'Kein DocuSign-Signatur-Slot hinterlegt.',
                    style: AppTypography.body(
                        size: 10, color: AppColors.textMuted),
                  ),
                ),
              const SizedBox(height: AppSpacing.s2),
              OutlinedButton.icon(
                onPressed: _busy ? null : _uploadImage,
                icon: const Icon(Icons.upload_file),
                label: const Text('Bild hochladen'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppColors.ink,
                  side: const BorderSide(color: AppColors.ink),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
              const SizedBox(height: AppSpacing.s2),
              TextButton(
                onPressed: _busy ? null : () => Navigator.pop(context, true),
                child: Text(
                  hasImage
                      ? 'Diese Signatur verwenden'
                      : 'Ohne Signatur freigeben (Platzhalter)',
                ),
              ),
            ],
            if (_error != null) ...[
              const SizedBox(height: AppSpacing.s3),
              Text(_error!, style: AppTypography.body(
                  size: 12, color: AppColors.statusCritical)),
            ],
            const SizedBox(height: AppSpacing.s2),
            TextButton(
              onPressed: _busy ? null : () => Navigator.pop(context, false),
              child: const Text('Abbrechen'),
            ),
          ],
        ),
      ),
    );
  }
}

class _DecisionRow extends StatelessWidget {
  const _DecisionRow({required this.row});
  final Map<String, dynamic> row;
  @override
  Widget build(BuildContext context) {
    final decision = row['decision']?.toString() ?? 'pending';
    final name = row['approver_name']?.toString() ?? '?';
    final at = row['decided_at']?.toString();
    final comment = row['comment']?.toString();
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          Icon(
            switch (decision) {
              'approved' => Icons.check_circle,
              'rejected' => Icons.cancel,
              _ => Icons.schedule,
            },
            size: 16,
            color: switch (decision) {
              'approved' => AppColors.statusPositive,
              'rejected' => AppColors.statusCritical,
              _ => AppColors.brand,
            },
          ),
          const SizedBox(width: 6),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '$name — ${switch (decision) {
                    'approved' => 'freigegeben',
                    'rejected' => 'abgelehnt',
                    _ => 'ausstehend',
                  }}${at == null ? '' : ' · $at'}',
                  style: AppTypography.body(
                      size: 12,
                      weight: FontWeight.w700,
                      color: AppColors.ink),
                ),
                if (comment?.isNotEmpty == true)
                  Text('„$comment"',
                      style: AppTypography.body(
                          size: 11, color: AppColors.textMuted)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
