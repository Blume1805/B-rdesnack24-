import 'package:boerdesnack24/features/management/domain/entities/machine.dart';
import 'package:boerdesnack24/features/management/domain/entities/stock_item.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Machine.fromJson liest Felder', () {
    final m = Machine.fromJson({
      'id': 'm1',
      'code': 'A1',
      'name': 'Automat 1',
      'type': 'cooled',
      'is_cooled': true,
      'city': 'Sülzetal',
      'status': 'active',
    });
    expect(m.code, 'A1');
    expect(m.isCooled, isTrue);
  });

  test('StockItem.fromJson mappt Verfügbarkeit', () {
    final s = StockItem.fromJson({
      'machine_id': 'm1',
      'product_id': 'p1',
      'product_name': 'Riegel',
      'quantity': 0,
      'par_level': 2,
      'availability': 'out',
    });
    expect(s.quantity, 0);
    expect(s.availability, 'out');
  });
}
