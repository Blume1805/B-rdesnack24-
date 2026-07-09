// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appTitle => 'Bördesnack24';

  @override
  String get navFinance => 'Finance';

  @override
  String get navManagement => 'Management';

  @override
  String get navCustomer => 'Customer area';

  @override
  String get signInTitle => 'Sign in';

  @override
  String get email => 'Email';

  @override
  String get password => 'Password';

  @override
  String get signIn => 'Sign in';

  @override
  String get signOut => 'Sign out';

  @override
  String get forgotPassword => 'Forgot password?';

  @override
  String get register => 'Create account';

  @override
  String get loading => 'Please wait …';

  @override
  String get errorGeneric => 'Something went wrong.';

  @override
  String get errorInvalidCredentials => 'Email or password is incorrect.';

  @override
  String get fieldRequired => 'Required';

  @override
  String get emailInvalid => 'Please enter a valid email.';

  @override
  String get passwordTooShort => 'At least 10 characters.';

  @override
  String get passwordComplexity =>
      'Must include upper- and lowercase letters and a digit or symbol.';

  @override
  String get welcome => 'Welcome to Bördesnack24';

  @override
  String get registerTitle => 'Create customer account';

  @override
  String get fullName => 'Name';

  @override
  String get confirmPassword => 'Confirm password';

  @override
  String get passwordsDontMatch => 'Passwords do not match.';

  @override
  String get registerSuccess =>
      'Account created. Please confirm your email address.';

  @override
  String get backToSignIn => 'Back to sign in';

  @override
  String get resetTitle => 'Reset password';

  @override
  String get sendResetLink => 'Send link';

  @override
  String get resetSent => 'If the address exists, a link has been sent.';

  @override
  String get consentAnalytics => 'Allow anonymous usage analytics';

  @override
  String get consentAnalyticsHint =>
      'Helps us improve the app. Revocable at any time.';

  @override
  String get consentPrivacyLabel => 'I have read the';

  @override
  String get consentPrivacyLink => 'privacy policy';

  @override
  String get consentTermsLabel => 'I accept the';

  @override
  String get consentTermsLink => 'terms of use';

  @override
  String get consentRequired =>
      'Please accept the terms and the privacy policy.';

  @override
  String get mfaTitle => 'Two-factor authentication';

  @override
  String get mfaScanHint =>
      'Scan the code with your authenticator app and enter the 6-digit code.';

  @override
  String get mfaCode => '6-digit code';

  @override
  String get mfaActivate => 'Activate';

  @override
  String get mfaActivated => 'Two-factor authentication activated.';

  @override
  String get secretManual => 'Manual key';

  @override
  String get legalImprint => 'Imprint';

  @override
  String get legalPrivacy => 'Privacy';

  @override
  String get legalTerms => 'Terms';

  @override
  String get myDataExport => 'Export my data';

  @override
  String get myDataExportDone => 'Export started – file has been shared.';

  @override
  String get accountDeletion => 'Delete account (request)';

  @override
  String get accountDeletionDialogTitle => 'Request account deletion';

  @override
  String get accountDeletionDialogBody =>
      'We process your request manually. Due to legal retention obligations (tax, HACCP), some data may only be deleted after the retention period; until then it will be blocked or anonymised.';

  @override
  String get accountDeletionRequested =>
      'Request submitted. We will contact you via email.';

  @override
  String get contactDataProtectionHint =>
      'Your information is used to process your request (Art. 6 (1) b GDPR). Further information in the privacy policy.';

  @override
  String get cancel => 'Cancel';

  @override
  String get delete => 'Delete';
}
