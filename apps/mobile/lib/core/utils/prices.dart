import 'formatters.dart';

/// Preisangabe gegenüber Kunden nach der Preisangabenverordnung.
///
/// * § 3 PAngV: angezeigt wird der Gesamtpreis **einschließlich**
///   Umsatzsteuer. Die Datenbank führt Nettopreise; umgerechnet wird nur hier.
/// * § 7 PAngV: der Pfand steht **neben** dem Preis, nie darin
///   (COMPLIANCE V-016). Die Preise aus der Datenbank enthalten ihn seit dem
///   27.09.2026 nicht mehr; Rabatte gelten nur für die Ware.
abstract final class Prices {
  /// Bruttopreis auf den Cent, wie ihn der Automat kassiert.
  static double gross(double net, double taxRate) =>
      double.parse((net * (1 + taxRate / 100)).toStringAsFixed(2));

  /// „zzgl. 0,25 € Pfand" oder `null`, wenn das Produkt keinen Pfand hat.
  static String? depositNote(double? deposit) =>
      (deposit ?? 0) > 0 ? 'zzgl. ${Formatters.euro(deposit!)} Pfand' : null;
}
