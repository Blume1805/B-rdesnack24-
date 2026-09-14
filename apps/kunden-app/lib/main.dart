import 'package:bs24_kern/bootstrap.dart';

import 'package:bs24_kunden/app.dart';

Future<void> main() => bootstrap(
      app: const KundenApp(),
      // Eigener Schluessel je App: beide koennen auf demselben Geraet
      // liegen, die Sitzungen duerfen sich nicht gegenseitig ueberschreiben.
      sitzungsSchluessel: 'sb-boerdesnack24-auth-token',
    );
