# Anmeldung mit Face ID / Fingerabdruck

Stand: 04.09.2026 · Gilt für Kundenbereich **und** Gesellschafterbereich

## Der Ausgangspunkt, den man kennen muss

Face ID ist eine Schnittstelle von iOS. Sie ist **nur aus einer installierten
App** erreichbar, nicht aus dem Browser. Das Projekt hatte bis heute überhaupt
kein iOS- und kein Android-Ziel — nur den Web-Build. Beides wurde mit dieser
Änderung angelegt.

Daraus folgt unmissverständlich: **Im Browser unter
`blume1805.github.io/B-rdesnack24-/` gibt es keine Face-ID-Anmeldung und wird
es keine geben.** Dort bleibt die Anmeldung mit E-Mail und Passwort. Der
Schalter zeigt das auch an, statt einen Knopf anzubieten, der nichts tut.

## Wie es funktioniert

Die Biometrie ist eine **Schranke vor einem Geheimnis**, keine Anmeldung beim
Server. Wer das umdreht — „Gesicht erkannt, also ist der Nutzer angemeldet" —
baut eine Anmeldung, die sich mit einem veränderten Client umgehen lässt.

```
Einschalten (angemeldet)          Anmelden (nicht angemeldet)
─────────────────────────         ────────────────────────────
Gesichtsprüfung                   Gesichtsprüfung
      ↓ bestanden                       ↓ bestanden
Sitzung → Schlüsselbund           Sitzung ← Schlüsselbund
Bindung {Konto-ID, E-Mail}              ↓
Offene Kopie löschen              recoverSession()
                                        ↓
                                  Gegenprobe: Konto-ID vom Server
                                  == gespeicherte Bindung?
                                        ↓ nein → alles löschen, abmelden
```

Der entscheidende Griff sitzt in `BiometrieSpeicher`: Solange eine
Freischaltung besteht, gibt die Sitzungsablage beim Start **nichts** heraus
(`accessToken()` liefert `null`, obwohl eine Sitzung existiert). Ohne diese
Sperre würde Supabase die Sitzung beim Start von sich aus wiederherstellen und
der Gesichtsdialog wäre bloße Dekoration vor einer bereits offenen Tür.

## Ein Gerät, ein Konto

Es gibt genau **eine** Freischaltung je Installation.

| Ereignis | Folge |
|---|---|
| Freischaltung für ein zweites Konto | ersetzt die erste |
| Passwortanmeldung mit einem anderen Konto | Freischaltung wird gelöscht |
| Abmelden | Freischaltung wird gelöscht |
| Sitzung serverseitig ungültig | Freischaltung wird gelöscht, Hinweis im Klartext |
| Konto-ID vom Server ≠ Bindung | alles gelöscht **und** abgemeldet |

## Was die Änderung ehrlich leistet — und was nicht

**Leistet:** Der Anmeldenachweis liegt bei eingeschalteter Funktion im
Schlüsselbund (iOS) bzw. Keystore/EncryptedSharedPreferences (Android) statt
wie bisher unverschlüsselt in den SharedPreferences. Er ist an Gerät und App
gebunden, wandert nicht ins Backup und wird ohne bestandene Prüfung nicht
herausgegeben. Der Geräte-PIN ist ausdrücklich **kein** Ersatz
(`biometricOnly: true`) — sonst käme man über „Passwort verwenden" ohne
Kenntnis des Kontopassworts in ein fremdes Konto.

**Leistet nicht:** Schutz gegen ein entsperrtes, kompromittiertes Gerät mit
Root-/Jailbreak-Zugriff. Und: Wer eine zweite Person in die Face-ID seines
Geräts einträgt („Alternatives Aussehen", zusätzlicher Fingerabdruck), gibt ihr
damit Zugang zum Konto. Das ist eine Obliegenheit des Nutzers und gehört in die
Nutzungsbedingungen (siehe unten, offen).

## Legal Impact Matrix

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum | ✓ | nicht berührt | Nein | |
| AGB | ✓ | nicht berührt | Nein | |
| Nutzungsbedingungen | ✓ | Obliegenheit: wer fremde Biometrie auf seinem Gerät hinterlegt, gibt Kontozugang | **Ja** | Philipp |
| Datenschutzerklärung | ✓ | neue Ziffer 1a) ergänzt: keine biometrischen Daten, lokale Ablage, Widerruf | erledigt | |
| DSGVO Art. 9 | ✓ | **nicht einschlägig.** Prüfung erfolgt vollständig im Betriebssystem; die App erhält über `local_auth` nur ein Ja/Nein. Es werden keine biometrischen Merkmale erhoben, übertragen oder gespeichert. Verantwortlich für die Biometrie ist der Gerätehersteller. | Nein | |
| DSGVO Art. 6 | ✓ | lit. a — Einwilligung durch Einschalten, Widerruf über denselben Schalter | Nein | |
| DSGVO Art. 32 (TOM) | ✓ | **Verbesserung:** Sitzungstoken wandert von unverschlüsselten SharedPreferences in Schlüsselbund/Keystore | Nein | |
| DSGVO Art. 25 (Privacy by Design) | ✓ | fail-closed, ein Gerät ein Konto, Löschung bei jedem Kontowechsel | Nein | |
| DSGVO Art. 30 (Verzeichnis) | ✓ | Eintrag „Anmeldung" um die lokale Sitzungsablage ergänzen | **Ja** | Philipp |
| Verbraucherrecht | ✓ | nicht berührt | Nein | |
| Preisangaben (PAngV) | ✓ | nicht berührt | Nein | |
| Steuer & Buchführung (AO, GoBD) | ✓ | nicht berührt — keine buchungsrelevanten Daten | Nein | |
| Lebensmittelrecht (LMIV) | ✓ | nicht berührt | Nein | |
| Jugendschutz | ✓ | nicht berührt; die Altersschranke bleibt serverseitig | Nein | |
| Verpackung & Pfand | ✓ | nicht berührt | Nein | |
| Barrierefreiheit (BFSG/WCAG) | ✓ | Die Passwortanmeldung bleibt gleichwertig erhalten — Biometrie ist nie der einzige Weg. Schalter beschriftet, Knopf mit Text statt nur Symbol. | Nein | |
| EU AI Act | ✓ | **nicht berührt.** Ein Ja/Nein aus der Geräte-Biometrie ist kein KI-System i. S. v. Art. 3; es wird nichts erzeugt, empfohlen oder ausgewählt. Kein KI-Chip. | Nein | |
| UWG / Werbung | ✓ | nicht berührt | Nein | |
| Urheber-/Markenrecht | ✓ | „Face ID" ist als Funktionsbezeichnung von Apple verwendet, nicht als Marke im eigenen Auftritt | Nein | |
| Store-Regeln (Apple/Google) | ✓ | `NSFaceIDUsageDescription` gesetzt (Pflicht, sonst beendet iOS die App beim ersten Zugriff kommentarlos). Android: `USE_BIOMETRIC`, `minSdk 23`, `FlutterFragmentActivity`. App Privacy: keine neue Datenkategorie, da nichts erhoben wird. | Nein | |

**Offen, mit Verantwortlichem:** Nutzungsbedingungen um die Obliegenheit
ergänzen; Verzeichnis der Verarbeitungstätigkeiten fortschreiben. Beides
Philipp. Bis dahin bleibt die Funktion für den Produktivbetrieb **🟡**.

## Verifikationsstand

| Prüfung | Ergebnis |
|---|---|
| `flutter analyze` | ohne Befund |
| `flutter test` | 201 grün, davon 25 neu für diese Funktion |
| Web-Release-Build | erfolgreich — der laufende Browser-Betrieb ist unberührt |
| Regel „abgelehnte Prüfung gibt nichts heraus" | grün, mit Gegenprobe |
| Regel „ein Gerät, ein Konto" | grün, mit Gegenprobe |
| Regel „Sitzung wird beim Start nicht herausgegeben" | grün, mit Gegenprobe |
| **Biometrie-Dialog auf einem echten Gerät** | **nicht geprüft** — dafür braucht es einen nativen Build (Mac, Xcode, Apple Developer). Von dieser Arbeitsumgebung aus nicht möglich. |

Der letzte Punkt ist der Grund, warum die Funktion **🟡** und nicht 🟢 steht.
Alles, was ohne Gerät prüfbar ist, ist geprüft; der Dialog selbst ist es nicht.

## Was du zum Ausprobieren brauchst

1. Einen Mac mit Xcode und einen Apple-Developer-Zugang.
2. `cd apps/mobile && flutter build ios` bzw. `flutter run` auf einem
   angeschlossenen iPhone.
3. Anmelden mit E-Mail und Passwort → Profil → **Sicherheit** → Schalter „Mit
   Face ID anmelden".
4. App beenden, neu starten: über den Feldern steht jetzt „Mit Face ID
   anmelden".

Für Android genügt `flutter run` auf einem Gerät mit eingerichtetem
Fingerabdruck; ein Entwicklerzugang ist dafür nicht nötig.

## Dateien

| Datei | Zweck |
|---|---|
| `core/security/biometrie/biometrie_dienst.dart` | Zugang zur Geräte-Biometrie, mit Web-Ersatz, der zu allem Nein sagt |
| `core/security/biometrie/sitzungstresor.dart` | Schlüsselbund/Keystore, Kontobindung |
| `core/security/biometrie/biometrie_anmeldung.dart` | Regeln, Bindung und die Sitzungssperre |
| `core/security/biometrie/biometrie_provider.dart` | Verdrahtung und Ablauf (Ein, Aus, Anmelden) |
| `features/auth/.../security_screen.dart` | Schalter und Erklärung, für beide Bereiche |
| `features/auth/.../sign_in_screen.dart` | Knopf „Mit Face ID anmelden" |
| `ios/Runner/Info.plist` | `NSFaceIDUsageDescription` |
| `android/.../MainActivity.kt` | `FlutterFragmentActivity` — sonst bricht der Dialog zur Laufzeit ab |
