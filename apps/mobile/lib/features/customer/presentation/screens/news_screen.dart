import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/formatters.dart';
import '../../../../core/widgets/design_system/design_system.dart';
import '../../domain/entities/donations_news.dart';
import '../controllers/customer_providers.dart';

/// Alle veröffentlichten News-Beiträge; jüngste zuerst.
class NewsScreen extends ConsumerWidget {
  const NewsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final news = ref.watch(newsProvider);
    return Scaffold(
      appBar: const HeroAppBar(title: Text('News')),
      body: RefreshIndicator(
        color: AppColors.brand,
        onRefresh: () async => ref.invalidate(newsProvider),
        child: news.when(
          loading: () => const Center(
            child: CircularProgressIndicator(color: AppColors.brand),
          ),
          error: (e, _) => Padding(
            padding: const EdgeInsets.all(AppSpacing.s5),
            child: Text('$e', style: AppTypography.body(size: 14)),
          ),
          data: (list) {
            if (list.isEmpty) {
              return Padding(
                padding: const EdgeInsets.all(AppSpacing.s5),
                child: Text(
                  'Aktuell keine Beiträge.',
                  style:
                      AppTypography.body(size: 14, color: AppColors.textMuted),
                ),
              );
            }
            return ListView.separated(
              padding: const EdgeInsets.fromLTRB(
                AppSpacing.s5,
                AppSpacing.s5,
                AppSpacing.s5,
                AppSpacing.s8,
              ),
              itemCount: list.length,
              separatorBuilder: (_, __) =>
                  const SizedBox(height: AppSpacing.s3),
              itemBuilder: (_, i) => _NewsCard(article: list[i]),
            );
          },
        ),
      ),
    );
  }
}

class _NewsCard extends StatelessWidget {
  const _NewsCard({required this.article});
  final NewsArticle article;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      padding: EdgeInsets.zero,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Bild-Platzhalter (16:9). Sobald `image_url` gepflegt ist, wird
          // automatisch das echte Foto geladen.
          AspectRatio(
            aspectRatio: 16 / 9,
            child: ProductImage.expand(
              imageUrl: article.imageUrl,
              productName: article.title,
              icon: Icons.campaign,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(AppSpacing.s4),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Icon(
                      Icons.article_outlined,
                      size: 16,
                      color: AppColors.brand,
                    ),
                    const SizedBox(width: 4),
                    Text(
                      Formatters.date(article.publishedAt),
                      style: AppTypography.body(
                        size: 11,
                        weight: FontWeight.w700,
                        color: AppColors.textMuted,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  article.title,
                  style: AppTypography.display(
                    size: 20,
                    weight: FontWeight.w800,
                    color: AppColors.ink,
                  ),
                ),
                if (article.summary != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    article.summary!,
                    style: AppTypography.body(
                      size: 14,
                      weight: FontWeight.w700,
                      color: AppColors.textMuted,
                    ),
                  ),
                ],
                const SizedBox(height: AppSpacing.s3),
                Text(
                  article.body,
                  style: AppTypography.body(
                    size: 14,
                    color: AppColors.ink,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
