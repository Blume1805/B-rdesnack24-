/// Web-Variante von `InstallPrompt`. Wird nur eingebunden, wenn
/// `dart:js_interop` existiert (bedingter Import in `install_prompt.dart`).
library;

import 'dart:js_interop';

import 'package:web/web.dart' as web;

/// `BeforeInstallPromptEvent` ist in `package:web` nicht typisiert, weil es
/// kein Standard ist, sondern eine Chromium-Erweiterung. Deshalb hier als
/// Extension Type auf dem rohen JS-Objekt.
extension type _BeforeInstallPromptEvent(JSObject _o) implements JSObject {
  external JSPromise<JSAny?> prompt();
}

/// `navigator.standalone` ist eine alte, nicht standardisierte Apple-
/// Eigenschaft und in `package:web` folglich nicht typisiert. Auf anderen
/// Browsern fehlt sie, deshalb der nullbare Typ.
extension type _AppleNavigator(JSObject _o) implements JSObject {
  external JSBoolean? get standalone;
}

/// Das abgefangene Ereignis. Chromium erlaubt genau einen Aufruf von
/// `prompt()`; danach ist es verbraucht und muss verworfen werden.
_BeforeInstallPromptEvent? _deferred;

void initInstallPrompt() {
  web.window.addEventListener(
    'beforeinstallprompt',
    (web.Event event) {
      // Ohne preventDefault zeigt Chromium seine eigene Mini-Leiste am unteren
      // Rand. Wir wollen den Zeitpunkt selbst bestimmen, deshalb abfangen.
      event.preventDefault();
      _deferred = event as _BeforeInstallPromptEvent;
    }.toJS,
  );

  // Nach der Ablage ist der Hinweis gegenstandslos.
  web.window.addEventListener(
    'appinstalled',
    (web.Event _) {
      _deferred = null;
    }.toJS,
  );
}

bool isStandalone() {
  // Der Standardweg: Die App läuft im eigenen Fenster.
  if (web.window.matchMedia('(display-mode: standalone)').matches) return true;
  // iOS kennt `display-mode` in älteren Fassungen nicht und setzt stattdessen
  // `navigator.standalone`.
  final navigator = web.window.navigator as _AppleNavigator;
  return navigator.standalone?.toDart ?? false;
}

bool hasDeferredPrompt() => _deferred != null;

bool isIosSafari() {
  final ua = web.window.navigator.userAgent;
  final isIos = ua.contains('iPhone') ||
      ua.contains('iPad') ||
      // iPadOS meldet sich seit Version 13 als Macintosh. Touchpunkte
      // unterscheiden es von einem echten Mac.
      (ua.contains('Macintosh') && web.window.navigator.maxTouchPoints > 1);
  if (!isIos) return false;
  // Auf iOS benutzen Chrome, Firefox und Edge dieselbe WebKit-Engine, tragen
  // aber eigene Kennungen und bieten die Ablage nicht an. Nur Safari kann es.
  final isOtherBrowser = ua.contains('CriOS') ||
      ua.contains('FxiOS') ||
      ua.contains('EdgiOS') ||
      ua.contains('OPiOS');
  return !isOtherBrowser;
}

Future<bool> showInstallPrompt() async {
  final event = _deferred;
  if (event == null) return false;
  // Vor dem Aufruf verwerfen: Chromium lässt `prompt()` nur einmal zu, und ein
  // zweiter Aufruf wirft. Lehnt der Kunde ab, fragen wir nicht erneut.
  _deferred = null;
  try {
    await event.prompt().toDart;
    return true;
  } catch (_) {
    return false;
  }
}
