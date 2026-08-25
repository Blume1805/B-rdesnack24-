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
    this.demoLoginEmail = '',
    this.demoLoginPassword = '',
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

  /// Zugangsdaten des öffentlichen Demokontos für den Anmeldebildschirm.
  ///
  /// Bewusst leer voreingestellt und NICHT im Quelltext hinterlegt. Bis zum
  /// 24.08.2026 standen drei Paare fest im Anmeldebildschirm — darunter eines
  /// für `system_admin` und eines für `shareholder`. Dieses Repository ist
  /// öffentlich, und die Web-Demo ist es auch: Damit stand die Kombination
  /// aus Rolle, Adresse und Kennwort an zwei öffentlichen Stellen.
  ///
  /// Ein Demokonto darf nur ein Kundenkonto sein, und sein Kennwort gehört
  /// in die Build-Konfiguration, wo es sich ohne Codeänderung wechseln lässt.
  /// Ist eines der beiden Felder leer, zeigt der Anmeldebildschirm gar keine
  /// Demo-Schaltfläche — das ist der sichere Ausgangszustand.
  final String demoLoginEmail;
  final String demoLoginPassword;

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
      demoLoginEmail: String.fromEnvironment('DEMO_LOGIN_EMAIL'),
      demoLoginPassword: String.fromEnvironment('DEMO_LOGIN_PASSWORD'),
    );
  }

  bool get isValid => supabaseUrl.isNotEmpty && supabaseAnonKey.isNotEmpty;

  /// Nur wahr, wenn BEIDE Felder gefüllt sind. Ein halb gesetztes Paar
  /// ergäbe eine Schaltfläche, die verlässlich scheitert — genau das ist am
  /// 24.08.2026 passiert, als die fest verdrahteten Kennwörter längst
  /// gewechselt waren und der Anmeldebildschirm sie trotzdem noch anbot.
  bool get hasDemoLogin =>
      demoLoginEmail.isNotEmpty && demoLoginPassword.isNotEmpty;
}
