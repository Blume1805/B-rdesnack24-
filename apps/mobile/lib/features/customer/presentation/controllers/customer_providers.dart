import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/di/providers.dart';
import '../../data/customer_remote_data_source.dart';
import '../../data/customer_repository_impl.dart';
import '../../domain/entities/customer_models.dart';
import '../../domain/entities/offer.dart';
import '../../domain/repositories/customer_repository.dart';

final customerRepositoryProvider = Provider<CustomerRepository>(
  (ref) => CustomerRepositoryImpl(
    CustomerRemoteDataSource(ref.watch(supabaseClientProvider)),
  ),
);

final offersProvider = FutureProvider.autoDispose<List<Offer>>(
  (ref) => ref.watch(customerRepositoryProvider).offers(),
);

final myPricesProvider = FutureProvider.autoDispose<List<CustomerPrice>>(
  (ref) => ref.watch(customerRepositoryProvider).myPrices(),
);

final myPurchasesProvider = FutureProvider.autoDispose<List<Purchase>>(
  (ref) => ref.watch(customerRepositoryProvider).myPurchases(),
);

final myRecommendationsProvider =
    FutureProvider.autoDispose<List<Recommendation>>(
  (ref) => ref.watch(customerRepositoryProvider).myRecommendations(),
);

final myCustomerProvider =
    FutureProvider.autoDispose<Map<String, dynamic>?>(
  (ref) => ref.watch(customerRepositoryProvider).myCustomer(),
);
