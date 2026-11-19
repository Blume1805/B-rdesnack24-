/// Außerhalb des Browsers (Tests, native Builds) gibt es kein Web-Push.
library;

import 'web_push.dart';

Future<PushZustand> zustand() async => PushZustand.nichtUnterstuetzt;

Future<String?> abonnieren(String oeffentlicherSchluessel) async => null;

Future<String?> vorhandenesAbo() async => null;
