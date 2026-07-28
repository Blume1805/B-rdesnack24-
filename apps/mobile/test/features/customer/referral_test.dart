import 'package:boerdesnack24/features/customer/domain/entities/referral.dart';
import 'package:flutter_test/flutter_test.dart';

/// Beispiel-Antwort der RPC `my_referral_status`.
Map<String, dynamic> payload({
  int rewarded = 0,
  int pending = 0,
  int months = 0,
  String? code,
  Map<String, dynamic>? next,
  List<Map<String, dynamic>> history = const [],
  List<Map<String, dynamic>> rewards = const [],
}) =>
    {
      'enabled': true,
      'code': code,
      'rewarded_count': rewarded,
      'pending_count': pending,
      'months_total': months,
      'months_monthly': 1,
      'months_yearly': 2,
      'next_milestone': next,
      'history': history,
      'rewards': rewards,
    };

void main() {
  group('ReferralStatusSummary', () {
    test('liest die RPC-Antwort vollständig', () {
      final s = ReferralStatusSummary.fromJson(
        payload(
          code: 'ABCD2345',
          rewarded: 3,
          pending: 1,
          months: 4,
          next: {
            'threshold': 5,
            'bonus_months': 1,
            'badge_code': 'supporter',
            'label': '5 Empfehlungen — Supporter-Badge + 1 Bonusmonat',
          },
        ),
      );

      expect(s.enabled, isTrue);
      expect(s.code, 'ABCD2345');
      expect(s.rewardedCount, 3);
      expect(s.pendingCount, 1);
      expect(s.monthsTotal, 4);
      expect(s.nextMilestone?.threshold, 5);
      expect(s.nextMilestone?.badgeCode, 'supporter');
    });

    test('ohne Code gibt es keinen Teilen-Link', () {
      final s = ReferralStatusSummary.fromJson(payload());
      expect(s.code, isNull);
      expect(s.shareLink, isNull);
    });

    test('der Teilen-Link hängt den Code an die Basis-URL', () {
      final s = ReferralStatusSummary.fromJson(payload(code: 'XYZ12345'));
      expect(s.shareLink, '${ReferralStatusSummary.shareBase}XYZ12345');
    });

    test('Fortschritt und Restweg zum nächsten Meilenstein', () {
      final s = ReferralStatusSummary.fromJson(
        payload(
          rewarded: 3,
          next: {
            'threshold': 5,
            'bonus_months': 1,
            'badge_code': 'supporter',
            'label': 'Supporter',
          },
        ),
      );
      expect(s.milestoneProgress, closeTo(0.6, 0.001));
      expect(s.missingToMilestone, 2);
    });

    test('ohne weiteren Meilenstein ist der Balken voll', () {
      // Nach dem letzten Meilenstein liefert die RPC null — ohne den
      // Sonderfall käme hier eine Division durch null heraus.
      final s = ReferralStatusSummary.fromJson(payload(rewarded: 25));
      expect(s.nextMilestone, isNull);
      expect(s.milestoneProgress, 1);
      expect(s.missingToMilestone, 0);
    });

    test('Fortschritt wird nie über 1 gemeldet', () {
      final s = ReferralStatusSummary.fromJson(
        payload(
          rewarded: 9,
          next: {'threshold': 5, 'bonus_months': 1, 'label': 'x'},
        ),
      );
      expect(s.milestoneProgress, 1);
      expect(s.missingToMilestone, 0);
    });
  });

  group('ReferralEntry', () {
    ReferralEntry entry(String status, {int months = 1}) =>
        ReferralEntry.fromJson({
          'id': 'r1',
          'name': 'Max',
          'status': status,
          'months': months,
          'registered_at': '2026-07-01T10:00:00Z',
        });

    test('Status-Wörter kommen aus der Datenbank', () {
      expect(entry('registered').status, ReferralStatus.registered);
      expect(entry('qualified').status, ReferralStatus.qualified);
      expect(entry('rewarded').status, ReferralStatus.rewarded);
      expect(entry('rejected').status, ReferralStatus.rejected);
      // Unbekanntes fällt auf den harmlosesten Zustand zurück.
      expect(entry('etwas-neues').status, ReferralStatus.registered);
    });

    test('die Belohnungsspalte sagt, worauf noch gewartet wird', () {
      expect(entry('rewarded', months: 2).rewardLabel, '+2 Monate');
      expect(entry('rewarded').rewardLabel, '+1 Monat');
      expect(entry('qualified').rewardLabel, 'Wartet auf Fristablauf');
      expect(entry('registered').rewardLabel, 'Wartet auf Abo');
      expect(entry('rejected').rewardLabel, '—');
    });

    test('ohne Namen bleibt die Historie anonym statt leer', () {
      final e = ReferralEntry.fromJson({
        'id': 'r2',
        'name': '',
        'status': 'registered',
        'months': 0,
        'registered_at': '2026-07-01T10:00:00Z',
      });
      expect(e.name, 'Freund*in');
    });
  });
}
