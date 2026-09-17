/// Nicht-Web-Variante von [InstallPrompt] (Dart-VM, also auch `flutter test`).
///
/// Es gibt außerhalb des Browsers keinen Startbildschirm-Dialog. Alle
/// Funktionen antworten deshalb neutral, damit der Hinweis dort nie erscheint.
library;

void initInstallPrompt() {}

bool isStandalone() => false;

bool hasDeferredPrompt() => false;

bool isIosSafari() => false;

Future<bool> showInstallPrompt() async => false;
