import 'package:intl/intl.dart';

/// Zentrale Formatierungen (de-DE).
abstract final class Formatters {
  static final _euro = NumberFormat.currency(locale: 'de_DE', symbol: '€');
  static final _date = DateFormat('dd.MM.yyyy', 'de_DE');

  static String euro(double value) => _euro.format(value);
  static String date(DateTime value) => _date.format(value);
}
