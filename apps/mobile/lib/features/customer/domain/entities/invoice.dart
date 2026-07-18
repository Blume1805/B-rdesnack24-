import 'package:equatable/equatable.dart';

/// § 14 UStG-Rechnung, die an einen Unternehmer-Kunden gestellt wurde.
/// Enthält alle für die Rechnungserstellung nötigen Beträge sowie einen
/// Snapshot der Rechnungsanschrift (Kunde) und des Rechnungsausstellers
/// (Bördesnack24 GbR).
class Invoice extends Equatable {
  const Invoice({
    required this.id,
    required this.purchaseId,
    required this.invoiceNumber,
    required this.issuedAt,
    required this.totalNet7,
    required this.totalVat7,
    required this.totalNet19,
    required this.totalVat19,
    required this.totalGross,
    required this.paymentMethod,
    required this.billingSnapshot,
    this.emailSentAt,
  });

  final String id;
  final String purchaseId;
  final String invoiceNumber;
  final DateTime issuedAt;
  final double totalNet7;
  final double totalVat7;
  final double totalNet19;
  final double totalVat19;
  final double totalGross;
  final String paymentMethod;
  final Map<String, dynamic> billingSnapshot;
  final DateTime? emailSentAt;

  factory Invoice.fromJson(Map<String, dynamic> j) => Invoice(
        id: j['id'] as String,
        purchaseId: j['purchase_id'] as String,
        invoiceNumber: j['invoice_number'] as String,
        issuedAt: DateTime.parse(j['issued_at'] as String),
        totalNet7: (j['total_net_7'] as num?)?.toDouble() ?? 0,
        totalVat7: (j['total_vat_7'] as num?)?.toDouble() ?? 0,
        totalNet19: (j['total_net_19'] as num?)?.toDouble() ?? 0,
        totalVat19: (j['total_vat_19'] as num?)?.toDouble() ?? 0,
        totalGross: (j['total_gross'] as num?)?.toDouble() ?? 0,
        paymentMethod: j['payment_method'] as String? ?? 'cash',
        billingSnapshot: Map<String, dynamic>.from(
            j['billing_snapshot'] as Map? ?? const {}),
        emailSentAt: j['email_sent_at'] == null
            ? null
            : DateTime.tryParse(j['email_sent_at'].toString()),
      );

  @override
  List<Object?> get props => [id, invoiceNumber, issuedAt, totalGross];
}
