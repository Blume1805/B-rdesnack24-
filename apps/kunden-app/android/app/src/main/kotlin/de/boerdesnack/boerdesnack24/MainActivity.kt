package de.boerdesnack.boerdesnack24

import io.flutter.embedding.android.FlutterFragmentActivity

// FlutterFragmentActivity statt FlutterActivity: das local_auth-Plugin zeigt
// den Biometrie-Dialog als Fragment an. Mit der Standard-FlutterActivity
// bricht der Aufruf zur Laufzeit ab ("no_fragment_activity") -- und zwar erst
// auf dem Geraet, nicht beim Bauen. Wer das hier zurueckdreht, macht die
// Anmeldung per Fingerabdruck auf Android lautlos kaputt.
class MainActivity : FlutterFragmentActivity()
