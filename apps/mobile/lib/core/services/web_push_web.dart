/// Browser-Teil von `web_push.dart` (nur mit `dart:js_interop`).
library;

import 'dart:async';
import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import 'web_push.dart';

@JS('JSON.stringify')
external JSString _stringify(JSAny wert);

bool get _kannPush =>
    web.window.has('PushManager') &&
    web.window.navigator.has('serviceWorker') &&
    web.window.has('Notification');

bool get _istIos {
  final ua = web.window.navigator.userAgent;
  return ua.contains('iPhone') || ua.contains('iPad') || ua.contains('iPod');
}

/// Wartet auf den Service Worker, aber nicht ewig (ohne Worker, z. B. in
/// der lokalen Entwicklung, würde `ready` nie fertig).
Future<web.ServiceWorkerRegistration?> _registrierung() async {
  try {
    return await web.window.navigator.serviceWorker.ready.toDart
        .timeout(const Duration(seconds: 5));
  } catch (_) {
    return null;
  }
}

Future<PushZustand> zustand() async {
  if (!_kannPush) {
    return _istIos
        ? PushZustand.homeBildschirmNoetig
        : PushZustand.nichtUnterstuetzt;
  }
  if (web.Notification.permission == 'denied') return PushZustand.abgelehnt;
  final reg = await _registrierung();
  if (reg == null) return PushZustand.nichtUnterstuetzt;
  final abo = await reg.pushManager.getSubscription().toDart;
  return abo != null && web.Notification.permission == 'granted'
      ? PushZustand.aktiv
      : PushZustand.aus;
}

Uint8List _vonB64u(String s) {
  var t = s.replaceAll('-', '+').replaceAll('_', '/');
  while (t.length % 4 != 0) {
    t += '=';
  }
  return base64.decode(t);
}

Future<String?> abonnieren(String oeffentlicherSchluessel) async {
  if (!_kannPush) return null;
  final erlaubnis = (await web.Notification.requestPermission().toDart).toDart;
  if (erlaubnis != 'granted') return null;
  final reg = await _registrierung();
  if (reg == null) return null;
  final abo = await reg.pushManager
      .subscribe(
        web.PushSubscriptionOptionsInit(
          userVisibleOnly: true,
          applicationServerKey: _vonB64u(oeffentlicherSchluessel).toJS,
        ),
      )
      .toDart;
  return _stringify(abo.toJSON()).toDart;
}

Future<String?> vorhandenesAbo() async {
  if (!_kannPush || web.Notification.permission != 'granted') return null;
  final reg = await _registrierung();
  if (reg == null) return null;
  final abo = await reg.pushManager.getSubscription().toDart;
  return abo == null ? null : _stringify(abo.toJSON()).toDart;
}
