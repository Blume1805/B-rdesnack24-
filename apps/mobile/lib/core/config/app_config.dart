/// Zentrale, build-zeitlich injizierte Konfiguration.
///
/// Werte werden über `--dart-define`/`--dart-define-from-file` gesetzt; es
/// werden ausschließlich client-sichere Werte (URL, anon key, DSN) verwendet.
/// Secrets liegen serverseitig (Supabase Function Secrets).
class AppConfig {
  const AppConfig({
    required this.supabaseUrl,
    required this.supabaseAnonKey,
    this.sentryDsn = '',
    this.posthogApiKey = '',
    this.posthogHost = 'https://eu.posthog.com',
    this.googleReviewUrl = '',
    this.appPublicUrl = defaultAppPublicUrl,
    this.environment = 'dev',
  });

  /// Adresse, unter der die Web-App erreichbar ist.
  ///
  /// Bis zum Umzug auf die eigene Domain zeigt sie auf GitHub Pages. Der
  /// Wert steht bewusst hier und nicht verstreut im Code: Er taucht in
  /// Empfehlungslinks und in verlinkten PDFs auf, und beim Domainwechsel
  /// ist genau so eine verstreute Konstante die, die man übersieht.
  ///
  /// Muss zum serverseitigen `APP_PUBLIC_URL` passen (siehe
  /// `supabase/functions/_shared/email/config.ts`) — sonst zeigen Links
  /// aus E-Mails woandershin als Links aus der App.
  static const defaultAppPublicUrl =
      'https://blume1805.github.io/B-rdesnack24-/';

  final String supabaseUrl;
  final String supabaseAnonKey;
  final String sentryDsn;
  final String posthogApiKey;
  final String posthogHost;
  final String googleReviewUrl;
  final String appPublicUrl;
  final String environment;

  bool get hasSentry => sentryDsn.isNotEmpty;
  bool get hasAnalytics => posthogApiKey.isNotEmpty;
  bool get isProduction => environment == 'prod';

  /// Basis für Links in die App, immer mit genau einem Schrägstrich am
  /// Ende — damit `${appBase}#/r/CODE` nicht zu `…de//#/r/CODE` wird.
  String get appBase =>
      appPublicUrl.endsWith('/') ? appPublicUrl : '$appPublicUrl/';

  factory AppConfig.fromEnvironment() {
    return const AppConfig(
      supabaseUrl: String.fromEnvironment('SUPABASE_URL'),
      supabaseAnonKey: String.fromEnvironment('SUPABASE_ANON_KEY'),
      sentryDsn: String.fromEnvironment('SENTRY_DSN'),
      posthogApiKey: String.fromEnvironment('POSTHOG_API_KEY'),
      posthogHost: String.fromEnvironment(
        'POSTHOG_HOST',
        defaultValue: 'https://eu.posthog.com',
      ),
      googleReviewUrl: String.fromEnvironment('GOOGLE_REVIEW_URL'),
      appPublicUrl: String.fromEnvironment(
        'APP_PUBLIC_URL',
        defaultValue: defaultAppPublicUrl,
      ),
      environment: String.fromEnvironment('APP_ENV', defaultValue: 'dev'),
    );
  }

  bool get isValid => supabaseUrl.isNotEmpty && supabaseAnonKey.isNotEmpty;
}
