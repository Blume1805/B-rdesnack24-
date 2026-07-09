import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localizations_de.dart';
import 'app_localizations_en.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalizations
/// returned by `AppLocalizations.of(context)`.
///
/// Applications need to include `AppLocalizations.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'generated/app_localizations.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalizations.localizationsDelegates,
///   supportedLocales: AppLocalizations.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the AppLocalizations.supportedLocales
/// property.
abstract class AppLocalizations {
  AppLocalizations(String locale)
      : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalizations of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations)!;
  }

  static const LocalizationsDelegate<AppLocalizations> delegate =
      _AppLocalizationsDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates =
      <LocalizationsDelegate<dynamic>>[
    delegate,
    GlobalMaterialLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('de'),
    Locale('en')
  ];

  /// No description provided for @appTitle.
  ///
  /// In de, this message translates to:
  /// **'Bördesnack24'**
  String get appTitle;

  /// No description provided for @navFinance.
  ///
  /// In de, this message translates to:
  /// **'Finanzen'**
  String get navFinance;

  /// No description provided for @navManagement.
  ///
  /// In de, this message translates to:
  /// **'Verwaltung'**
  String get navManagement;

  /// No description provided for @navCustomer.
  ///
  /// In de, this message translates to:
  /// **'Kundenbereich'**
  String get navCustomer;

  /// No description provided for @signInTitle.
  ///
  /// In de, this message translates to:
  /// **'Anmelden'**
  String get signInTitle;

  /// No description provided for @email.
  ///
  /// In de, this message translates to:
  /// **'E-Mail'**
  String get email;

  /// No description provided for @password.
  ///
  /// In de, this message translates to:
  /// **'Passwort'**
  String get password;

  /// No description provided for @signIn.
  ///
  /// In de, this message translates to:
  /// **'Anmelden'**
  String get signIn;

  /// No description provided for @signOut.
  ///
  /// In de, this message translates to:
  /// **'Abmelden'**
  String get signOut;

  /// No description provided for @forgotPassword.
  ///
  /// In de, this message translates to:
  /// **'Passwort vergessen?'**
  String get forgotPassword;

  /// No description provided for @register.
  ///
  /// In de, this message translates to:
  /// **'Konto erstellen'**
  String get register;

  /// No description provided for @loading.
  ///
  /// In de, this message translates to:
  /// **'Bitte warten …'**
  String get loading;

  /// No description provided for @errorGeneric.
  ///
  /// In de, this message translates to:
  /// **'Es ist ein Fehler aufgetreten.'**
  String get errorGeneric;

  /// No description provided for @errorInvalidCredentials.
  ///
  /// In de, this message translates to:
  /// **'E-Mail oder Passwort ist falsch.'**
  String get errorInvalidCredentials;

  /// No description provided for @fieldRequired.
  ///
  /// In de, this message translates to:
  /// **'Pflichtfeld'**
  String get fieldRequired;

  /// No description provided for @emailInvalid.
  ///
  /// In de, this message translates to:
  /// **'Bitte eine gültige E-Mail eingeben.'**
  String get emailInvalid;

  /// No description provided for @passwordTooShort.
  ///
  /// In de, this message translates to:
  /// **'Mindestens 10 Zeichen.'**
  String get passwordTooShort;

  /// No description provided for @passwordComplexity.
  ///
  /// In de, this message translates to:
  /// **'Mindestens ein Groß-, ein Kleinbuchstabe und eine Ziffer oder ein Sonderzeichen.'**
  String get passwordComplexity;

  /// No description provided for @welcome.
  ///
  /// In de, this message translates to:
  /// **'Willkommen bei Bördesnack24'**
  String get welcome;

  /// No description provided for @registerTitle.
  ///
  /// In de, this message translates to:
  /// **'Kundenkonto erstellen'**
  String get registerTitle;

  /// No description provided for @fullName.
  ///
  /// In de, this message translates to:
  /// **'Name'**
  String get fullName;

  /// No description provided for @confirmPassword.
  ///
  /// In de, this message translates to:
  /// **'Passwort bestätigen'**
  String get confirmPassword;

  /// No description provided for @passwordsDontMatch.
  ///
  /// In de, this message translates to:
  /// **'Die Passwörter stimmen nicht überein.'**
  String get passwordsDontMatch;

  /// No description provided for @registerSuccess.
  ///
  /// In de, this message translates to:
  /// **'Konto erstellt. Bitte bestätige deine E-Mail-Adresse.'**
  String get registerSuccess;

  /// No description provided for @backToSignIn.
  ///
  /// In de, this message translates to:
  /// **'Zurück zur Anmeldung'**
  String get backToSignIn;

  /// No description provided for @resetTitle.
  ///
  /// In de, this message translates to:
  /// **'Passwort zurücksetzen'**
  String get resetTitle;

  /// No description provided for @sendResetLink.
  ///
  /// In de, this message translates to:
  /// **'Link senden'**
  String get sendResetLink;

  /// No description provided for @resetSent.
  ///
  /// In de, this message translates to:
  /// **'Falls die Adresse existiert, wurde ein Link versendet.'**
  String get resetSent;

  /// No description provided for @consentAnalytics.
  ///
  /// In de, this message translates to:
  /// **'Anonyme Nutzungsanalyse erlauben'**
  String get consentAnalytics;

  /// No description provided for @consentAnalyticsHint.
  ///
  /// In de, this message translates to:
  /// **'Hilft uns, die App zu verbessern. Jederzeit widerrufbar.'**
  String get consentAnalyticsHint;

  /// No description provided for @consentPrivacyLabel.
  ///
  /// In de, this message translates to:
  /// **'Ich habe die'**
  String get consentPrivacyLabel;

  /// No description provided for @consentPrivacyLink.
  ///
  /// In de, this message translates to:
  /// **'Datenschutzerklärung'**
  String get consentPrivacyLink;

  /// No description provided for @consentTermsLabel.
  ///
  /// In de, this message translates to:
  /// **'Ich akzeptiere die'**
  String get consentTermsLabel;

  /// No description provided for @consentTermsLink.
  ///
  /// In de, this message translates to:
  /// **'Nutzungsbedingungen'**
  String get consentTermsLink;

  /// No description provided for @consentRequired.
  ///
  /// In de, this message translates to:
  /// **'Bitte den Nutzungsbedingungen und der Datenschutzerklärung zustimmen.'**
  String get consentRequired;

  /// No description provided for @mfaTitle.
  ///
  /// In de, this message translates to:
  /// **'Zwei-Faktor-Authentifizierung'**
  String get mfaTitle;

  /// No description provided for @mfaScanHint.
  ///
  /// In de, this message translates to:
  /// **'Scanne den Code mit deiner Authenticator-App und gib den 6-stelligen Code ein.'**
  String get mfaScanHint;

  /// No description provided for @mfaCode.
  ///
  /// In de, this message translates to:
  /// **'6-stelliger Code'**
  String get mfaCode;

  /// No description provided for @mfaActivate.
  ///
  /// In de, this message translates to:
  /// **'Aktivieren'**
  String get mfaActivate;

  /// No description provided for @mfaActivated.
  ///
  /// In de, this message translates to:
  /// **'Zwei-Faktor-Authentifizierung aktiviert.'**
  String get mfaActivated;

  /// No description provided for @secretManual.
  ///
  /// In de, this message translates to:
  /// **'Manueller Schlüssel'**
  String get secretManual;

  /// No description provided for @legalImprint.
  ///
  /// In de, this message translates to:
  /// **'Impressum'**
  String get legalImprint;

  /// No description provided for @legalPrivacy.
  ///
  /// In de, this message translates to:
  /// **'Datenschutz'**
  String get legalPrivacy;

  /// No description provided for @legalTerms.
  ///
  /// In de, this message translates to:
  /// **'Nutzungsbedingungen'**
  String get legalTerms;

  /// No description provided for @myDataExport.
  ///
  /// In de, this message translates to:
  /// **'Meine Daten exportieren'**
  String get myDataExport;

  /// No description provided for @myDataExportDone.
  ///
  /// In de, this message translates to:
  /// **'Export gestartet – Datei wurde geteilt.'**
  String get myDataExportDone;

  /// No description provided for @accountDeletion.
  ///
  /// In de, this message translates to:
  /// **'Konto löschen (Antrag)'**
  String get accountDeletion;

  /// No description provided for @accountDeletionDialogTitle.
  ///
  /// In de, this message translates to:
  /// **'Konto zur Löschung anmelden'**
  String get accountDeletionDialogTitle;

  /// No description provided for @accountDeletionDialogBody.
  ///
  /// In de, this message translates to:
  /// **'Wir verarbeiten deinen Antrag manuell. Aufgrund gesetzlicher Aufbewahrungsfristen (Steuer, HACCP) werden Daten teilweise erst nach Ablauf gelöscht; bis dahin werden sie gesperrt oder anonymisiert.'**
  String get accountDeletionDialogBody;

  /// No description provided for @accountDeletionRequested.
  ///
  /// In de, this message translates to:
  /// **'Antrag gestellt. Wir melden uns per E-Mail.'**
  String get accountDeletionRequested;

  /// No description provided for @contactDataProtectionHint.
  ///
  /// In de, this message translates to:
  /// **'Deine Angaben werden zur Bearbeitung deiner Anfrage genutzt. Weitere Informationen in der Datenschutzerklärung.'**
  String get contactDataProtectionHint;

  /// No description provided for @cancel.
  ///
  /// In de, this message translates to:
  /// **'Abbrechen'**
  String get cancel;

  /// No description provided for @delete.
  ///
  /// In de, this message translates to:
  /// **'Löschen'**
  String get delete;
}

class _AppLocalizationsDelegate
    extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  Future<AppLocalizations> load(Locale locale) {
    return SynchronousFuture<AppLocalizations>(lookupAppLocalizations(locale));
  }

  @override
  bool isSupported(Locale locale) =>
      <String>['de', 'en'].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationsDelegate old) => false;
}

AppLocalizations lookupAppLocalizations(Locale locale) {
  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'de':
      return AppLocalizationsDe();
    case 'en':
      return AppLocalizationsEn();
  }

  throw FlutterError(
      'AppLocalizations.delegate failed to load unsupported locale "$locale". This is likely '
      'an issue with the localizations generation tool. Please file an issue '
      'on GitHub with a reproducible sample app and the gen-l10n configuration '
      'that was used.');
}
