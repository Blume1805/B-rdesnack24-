import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:printing/printing.dart' show networkImage;

import '../theme/app_tokens.dart';
import 'pdf_hausstil.dart';
import 'pdf_plattform_stub.dart'
    if (dart.library.js_interop) 'pdf_plattform_web.dart' as plattform;

/// Die Hausschrift aus den App-Assets, einmal geladen.
Future<PdfSchriften> pdfSchriftenLaden() async {
  return _schriften ??= PdfSchriften.ausBytes(
    normal: await rootBundle.load(PdfSchriften.pfadNormal),
    fett: await rootBundle.load(PdfSchriften.pfadFett),
    extrafett: await rootBundle.load(PdfSchriften.pfadExtrafett),
  );
}

PdfSchriften? _schriften;

/// Zeigt ein Blatt, das das PDF erzeugt und dann anbietet:
///
///  * **Teilen oder drucken** – Teilen-Menü des Systems mit der PDF-Datei
///    (Drucken, In Dateien sichern, Mail …). Der einzige Weg, der auch in
///    der Home-Bildschirm-App auf dem iPhone funktioniert.
///  * **PDF öffnen** – Betrachter des Browsers bzw. Druckvorschau des
///    Systems. Nicht in der Home-Bildschirm-App (öffnet dort nicht
///    zuverlässig).
///  * **Herunterladen** – nur im Browser, nicht in der Home-Bildschirm-App
///    (hält sie ab iOS 18.4 auf einem „Öffnen in …"-Bildschirm fest).
///
/// Das Teilen muss in einem eigenen Tippen auf die Schaltfläche passieren:
/// Safari öffnet das Teilen-Menü nur direkt nach einer Nutzeraktion, und
/// das Erzeugen dauert zu lange, um es im ersten Tippen zu erledigen.
Future<void> pdfAnbieten(
  BuildContext context, {
  required String titel,
  required String dateiname,
  required Future<Uint8List> Function() erzeugen,
}) {
  return showModalBottomSheet<void>(
    context: context,
    showDragHandle: true,
    builder: (_) => _PdfBlatt(
      titel: titel,
      dateiname: dateiname,
      erzeugen: erzeugen,
    ),
  );
}

class _PdfBlatt extends StatefulWidget {
  const _PdfBlatt({
    required this.titel,
    required this.dateiname,
    required this.erzeugen,
  });

  final String titel;
  final String dateiname;
  final Future<Uint8List> Function() erzeugen;

  @override
  State<_PdfBlatt> createState() => _PdfBlattState();
}

class _PdfBlattState extends State<_PdfBlatt> {
  Uint8List? _pdf;
  Object? _fehler;
  String? _hinweis;

  @override
  void initState() {
    super.initState();
    _erzeugen();
  }

  Future<void> _erzeugen() async {
    // Beim ersten Mal (aus initState) ist der Zustand schon leer; setState
    // ist dort nicht erlaubt.
    if (_pdf != null || _fehler != null) {
      setState(() {
        _pdf = null;
        _fehler = null;
      });
    }
    try {
      final pdf = await widget.erzeugen();
      if (mounted) setState(() => _pdf = pdf);
    } catch (e) {
      if (mounted) setState(() => _fehler = e);
    }
  }

  void _teilen() {
    final pdf = _pdf;
    if (pdf == null) return;
    // Ohne await vor dem Aufruf: Safari braucht die frische Nutzeraktion.
    plattform.pdfTeilen(pdf, widget.dateiname, widget.titel).catchError((
      Object e,
    ) {
      if (mounted) {
        setState(
          () => _hinweis = 'Teilen hat nicht geklappt. '
              '${plattform.pdfOeffnenMoeglich ? 'Versuche „PDF öffnen“.' : ''}',
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final text = Theme.of(context).textTheme;
    final teilen = plattform.pdfTeilenMoeglich;
    final oeffnen = plattform.pdfOeffnenMoeglich;
    final laden = plattform.pdfHerunterladenMoeglich;

    Widget inhalt;
    if (_fehler != null) {
      inhalt = Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Das PDF konnte nicht erstellt werden.',
            style: text.bodyMedium?.copyWith(color: AppColors.statusCritical),
          ),
          const SizedBox(height: AppSpacing.s3),
          OutlinedButton.icon(
            onPressed: _erzeugen,
            icon: const Icon(Icons.refresh),
            label: const Text('Erneut versuchen'),
          ),
        ],
      );
    } else if (_pdf == null) {
      inhalt = const Padding(
        padding: EdgeInsets.symmetric(vertical: AppSpacing.s4),
        child: Row(
          children: [
            SizedBox(
              width: 22,
              height: 22,
              child: CircularProgressIndicator(strokeWidth: 2.5),
            ),
            SizedBox(width: AppSpacing.s3),
            Text('PDF wird erstellt …'),
          ],
        ),
      );
    } else {
      inhalt = Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (teilen) ...[
            FilledButton.icon(
              onPressed: _teilen,
              icon: const Icon(Icons.ios_share),
              label: const Text('Teilen oder drucken'),
            ),
            const SizedBox(height: AppSpacing.s1),
            Text(
              'Im Teilen-Menü findest du „Drucken“ und „In Dateien sichern“.',
              style: text.bodySmall?.copyWith(color: AppColors.textMuted),
            ),
          ],
          if (oeffnen) ...[
            const SizedBox(height: AppSpacing.s3),
            OutlinedButton.icon(
              onPressed: () => plattform.pdfOeffnen(_pdf!, widget.dateiname),
              icon: const Icon(Icons.picture_as_pdf_outlined),
              label: const Text('PDF öffnen'),
            ),
          ],
          if (laden) ...[
            const SizedBox(height: AppSpacing.s2),
            TextButton.icon(
              onPressed: () =>
                  plattform.pdfHerunterladen(_pdf!, widget.dateiname),
              icon: const Icon(Icons.download_outlined),
              label: const Text('Herunterladen'),
            ),
          ],
          if (!teilen && !oeffnen)
            Text(
              'Dieses Gerät bietet in der Home-Bildschirm-App kein '
              'Teilen-Menü an. Öffne die App in Safari '
              '(app.boerdesnack24.de), dort funktioniert „PDF öffnen“.',
              style: text.bodyMedium,
            ),
          if (_hinweis != null) ...[
            const SizedBox(height: AppSpacing.s2),
            Text(
              _hinweis!,
              style: text.bodySmall?.copyWith(color: AppColors.statusWarning),
            ),
          ],
        ],
      );
    }

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(
          AppSpacing.s5,
          0,
          AppSpacing.s5,
          AppSpacing.s5,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(widget.titel, style: text.titleMedium),
            const SizedBox(height: AppSpacing.s1),
            Text(
              widget.dateiname,
              style: text.bodySmall?.copyWith(color: AppColors.textMuted),
            ),
            const SizedBox(height: AppSpacing.s4),
            inhalt,
          ],
        ),
      ),
    );
  }
}

/// Lädt hinterlegte Unterschriften (Bild-URLs je Name) für das PDF. Was
/// nicht lädt, bleibt weg; das Feld bleibt dann zum Unterschreiben leer.
Future<Map<String, pw.ImageProvider>> pdfBilderLaden(
  Map<String, String?> urlJeName,
) async {
  final bilder = <String, pw.ImageProvider>{};
  for (final e in urlJeName.entries) {
    final url = e.value;
    if (url == null || url.isEmpty) continue;
    try {
      bilder[e.key] = await networkImage(url);
    } catch (_) {
      // Ohne Bild weiter.
    }
  }
  return bilder;
}
