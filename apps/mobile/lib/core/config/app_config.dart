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
    this.environment = 'dev',
  });

  final String supabaseUrl;
  final String supabaseAnonKey;
  final String sentryDsn;
  final String posthogApiKey;
  final String posthogHost;
  final String environment;

  bool get hasSentry => sentryDsn.isNotEmpty;
  bool get hasAnalytics => posthogApiKey.isNotEmpty;
  bool get isProduction => environment == 'prod';

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
      environment: String.fromEnvironment('APP_ENV', defaultValue: 'dev'),
    );
  }

  bool get isValid => supabaseUrl.isNotEmpty && supabaseAnonKey.isNotEmpty;
}
