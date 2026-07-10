import 'package:equatable/equatable.dart';

/// Kumulierte Spendenkennzahl des angemeldeten Kunden.
class DonationSummary extends Equatable {
  const DonationSummary({
    required this.totalDonated,
    required this.purchaseCount,
  });

  final double totalDonated;
  final int purchaseCount;

  factory DonationSummary.fromJson(Map<String, dynamic> j) => DonationSummary(
        totalDonated: (j['total_donated'] as num?)?.toDouble() ?? 0,
        purchaseCount: (j['purchase_count'] as num?)?.toInt() ?? 0,
      );

  @override
  List<Object?> get props => [totalDonated, purchaseCount];
}

/// Kombinierte Spenden-Kennzahl: eigener Beitrag + Gesamtpool aller
/// Kunden (inkl. Nayax-Automaten-Umsätze von Nicht-App-Nutzern).
class DonationPoolSummary extends Equatable {
  const DonationPoolSummary({
    required this.myDonated,
    required this.totalPool,
    required this.mySharePct,
    required this.nonAppGross,
  });

  /// Eigene kumulierte Spende (aus App-Käufen).
  final double myDonated;

  /// Gesamter Spendenpool aller Kunden (App + Nayax-Automaten).
  final double totalPool;

  /// Anteil in Prozent, mit dem der Kunde am Gesamtpool beteiligt ist.
  final double mySharePct;

  /// Umsatz aus Automaten-Käufen, die nicht über die App abgerechnet wurden
  /// (dient nur der Transparenz — der abgeleitete Spendenanteil steckt
  /// bereits in `totalPool`).
  final double nonAppGross;

  factory DonationPoolSummary.fromJson(Map<String, dynamic> j) =>
      DonationPoolSummary(
        myDonated: (j['my_donated'] as num?)?.toDouble() ?? 0,
        totalPool: (j['total_pool'] as num?)?.toDouble() ?? 0,
        mySharePct: (j['my_share_pct'] as num?)?.toDouble() ?? 0,
        nonAppGross: (j['non_app_gross'] as num?)?.toDouble() ?? 0,
      );

  @override
  List<Object?> get props => [myDonated, totalPool, mySharePct, nonAppGross];
}

/// Ein Kauf mit dem daraus abgeleiteten Spendenanteil, der genutzten
/// Zahlungsmethode und einer optionalen Rechnungsverknüpfung (nur bei
/// Unternehmer-Kunden).
class PurchaseDonation extends Equatable {
  const PurchaseDonation({
    required this.purchaseId,
    required this.purchasedAt,
    required this.totalGross,
    required this.totalNet,
    required this.donation,
    required this.sharePct,
    this.paymentMethod = 'cash',
    this.invoiceId,
    this.invoiceNumber,
  });

  final String purchaseId;
  final DateTime purchasedAt;
  final double totalGross;
  final double totalNet;
  final double donation;
  final double sharePct;
  final String paymentMethod; // 'cash' | 'card_ec' | 'card_credit' | 'card_contactless' | 'other'
  final String? invoiceId;
  final String? invoiceNumber;

  bool get hasInvoice => invoiceId != null;

  factory PurchaseDonation.fromJson(Map<String, dynamic> j) => PurchaseDonation(
        purchaseId: j['purchase_id'] as String,
        purchasedAt: DateTime.parse(j['purchased_at'] as String),
        totalGross: (j['total_gross'] as num?)?.toDouble() ?? 0,
        totalNet: (j['total_net'] as num?)?.toDouble() ?? 0,
        donation: (j['donation'] as num?)?.toDouble() ?? 0,
        sharePct: (j['share_pct'] as num?)?.toDouble() ?? 0,
        paymentMethod: j['payment_method'] as String? ?? 'cash',
        invoiceId: j['invoice_id'] as String?,
        invoiceNumber: j['invoice_number'] as String?,
      );

  @override
  List<Object?> get props => [
        purchaseId,
        purchasedAt,
        totalGross,
        totalNet,
        donation,
        sharePct,
        paymentMethod,
        invoiceId,
        invoiceNumber,
      ];
}

/// Spendenzweck mit Abstimmungs-State.
class DonationCause extends Equatable {
  const DonationCause({
    required this.id,
    required this.title,
    required this.status,
    required this.voteCount,
    required this.votedByMe,
    this.description,
  });

  final String id;
  final String title;
  final String? description;
  final String status; // 'active' | 'suggested' | 'archived'
  final int voteCount;
  final bool votedByMe;

  bool get isActive => status == 'active';
  bool get isSuggested => status == 'suggested';

  factory DonationCause.fromJson(Map<String, dynamic> j) => DonationCause(
        id: j['id'] as String,
        title: j['title'] as String? ?? '',
        description: j['description'] as String?,
        status: j['status'] as String? ?? 'suggested',
        voteCount: (j['vote_count'] as num?)?.toInt() ?? 0,
        votedByMe: (j['voted_by_me'] as bool?) ?? false,
      );

  @override
  List<Object?> get props =>
      [id, title, description, status, voteCount, votedByMe];
}

/// News-Beitrag.
class NewsArticle extends Equatable {
  const NewsArticle({
    required this.id,
    required this.title,
    required this.body,
    required this.publishedAt,
    this.summary,
    this.imageUrl,
  });

  final String id;
  final String title;
  final String? summary;
  final String body;
  final DateTime publishedAt;
  final String? imageUrl;

  factory NewsArticle.fromJson(Map<String, dynamic> j) => NewsArticle(
        id: j['id'] as String,
        title: j['title'] as String? ?? '',
        summary: j['summary'] as String?,
        body: j['body'] as String? ?? '',
        publishedAt: DateTime.parse(j['published_at'] as String),
        imageUrl: j['image_url'] as String?,
      );

  @override
  List<Object?> get props => [id, title, summary, body, publishedAt, imageUrl];
}
