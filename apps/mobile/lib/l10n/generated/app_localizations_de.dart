// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for German (`de`).
class AppLocalizationsDe extends AppLocalizations {
  AppLocalizationsDe([String locale = 'de']) : super(locale);

  @override
  String get appTitle => 'Bördesnack24';

  @override
  String get navFinance => 'Finanzen';

  @override
  String get navManagement => 'Verwaltung';

  @override
  String get navCustomer => 'Kundenbereich';

  @override
  String get signInTitle => 'Anmelden';

  @override
  String get email => 'E-Mail';

  @override
  String get password => 'Passwort';

  @override
  String get signIn => 'Anmelden';

  @override
  String get signOut => 'Abmelden';

  @override
  String get forgotPassword => 'Passwort vergessen?';

  @override
  String get register => 'Konto erstellen';

  @override
  String get loading => 'Bitte warten …';

  @override
  String get errorGeneric => 'Es ist ein Fehler aufgetreten.';

  @override
  String get errorInvalidCredentials => 'E-Mail oder Passwort ist falsch.';

  @override
  String get fieldRequired => 'Pflichtfeld';

  @override
  String get emailInvalid => 'Bitte eine gültige E-Mail eingeben.';

  @override
  String get passwordTooShort => 'Mindestens 10 Zeichen.';

  @override
  String get passwordComplexity =>
      'Mindestens ein Groß-, ein Kleinbuchstabe und eine Ziffer oder ein Sonderzeichen.';

  @override
  String get welcome => 'Willkommen bei Bördesnack24';

  @override
  String get registerTitle => 'Kundenkonto erstellen';

  @override
  String get fullName => 'Name';

  @override
  String get confirmPassword => 'Passwort bestätigen';

  @override
  String get passwordsDontMatch => 'Die Passwörter stimmen nicht überein.';

  @override
  String get registerSuccess =>
      'Konto erstellt. Bitte bestätige deine E-Mail-Adresse.';

  @override
  String get backToSignIn => 'Zurück zur Anmeldung';

  @override
  String get resetTitle => 'Passwort zurücksetzen';

  @override
  String get sendResetLink => 'Link senden';

  @override
  String get resetSent =>
      'Falls die Adresse existiert, wurde ein Link versendet.';

  @override
  String get consentAnalytics => 'Anonyme Nutzungsanalyse erlauben';

  @override
  String get consentAnalyticsHint =>
      'Hilft uns, die App zu verbessern. Jederzeit widerrufbar.';

  @override
  String get consentPrivacyLabel => 'Ich habe die';

  @override
  String get consentPrivacyLink => 'Datenschutzerklärung';

  @override
  String get consentTermsLabel => 'Ich akzeptiere die';

  @override
  String get consentTermsLink => 'Nutzungsbedingungen';

  @override
  String get consentRequired =>
      'Bitte den Nutzungsbedingungen und der Datenschutzerklärung zustimmen.';

  @override
  String get mfaTitle => 'Zwei-Faktor-Authentifizierung';

  @override
  String get mfaScanHint =>
      'Scanne den Code mit deiner Authenticator-App und gib den 6-stelligen Code ein.';

  @override
  String get mfaCode => '6-stelliger Code';

  @override
  String get mfaActivate => 'Aktivieren';

  @override
  String get mfaActivated => 'Zwei-Faktor-Authentifizierung aktiviert.';

  @override
  String get secretManual => 'Manueller Schlüssel';

  @override
  String get legalImprint => 'Impressum';

  @override
  String get legalPrivacy => 'Datenschutz';

  @override
  String get legalTerms => 'Nutzungsbedingungen';

  @override
  String get myDataExport => 'Meine Daten exportieren';

  @override
  String get myDataExportDone => 'Export gestartet – Datei wurde geteilt.';

  @override
  String get accountDeletion => 'Konto löschen (Antrag)';

  @override
  String get accountDeletionDialogTitle => 'Konto zur Löschung anmelden';

  @override
  String get accountDeletionDialogBody =>
      'Wir verarbeiten deinen Antrag manuell. Aufgrund gesetzlicher Aufbewahrungsfristen (Steuer, HACCP) werden Daten teilweise erst nach Ablauf gelöscht; bis dahin werden sie gesperrt oder anonymisiert.';

  @override
  String get accountDeletionRequested =>
      'Antrag gestellt. Wir melden uns per E-Mail.';

  @override
  String get contactDataProtectionHint =>
      'Deine Angaben werden zur Bearbeitung deiner Anfrage genutzt. Weitere Informationen in der Datenschutzerklärung.';

  @override
  String get cancel => 'Abbrechen';

  @override
  String get delete => 'Löschen';
}
