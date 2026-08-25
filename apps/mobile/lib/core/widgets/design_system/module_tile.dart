import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';
import '../../theme/app_typography.dart';
import 'app_card.dart';

/// Modulkachel für die Verwaltungs- und Kunden-Übersicht.
/// Icon-Badge in Gold, Titel + kurze Beschreibung, subtiler Chevron.
class ModuleTile extends StatelessWidget {
  const ModuleTile({
    super.key,
    required this.icon,
    required this.label,
    this.description,
    this.onTap,
    this.badge,
    this.iconColor,
    this.iconBackgroundColor,
    this.iconBorderColor,
    this.onAnhang,
    this.anhangTooltip = 'Unterlage hinzufügen',
  });

  final IconData icon;
  final String label;
  final String? description;
  final VoidCallback? onTap;
  final Widget? badge;

  /// Optionale Farbüberschreibung des Icon-Badges — z. B. Grün für den
  /// DATEV-Export. Standard bleibt Gold (Marken-Look aller Kacheln).
  final Color? iconColor;
  final Color? iconBackgroundColor;
  final Color? iconBorderColor;

  /// Zweite Aktion in der Kachel: Unterlage hinzufügen, per Datei oder Foto.
  ///
  /// Vorgabe vom 25.08.2026: „in die jeweilige Kachel hinzugefügt werden".
  /// Deshalb sitzt sie hier und nicht auf dem Bildschirm dahinter, den man
  /// erst öffnen müsste.
  final VoidCallback? onAnhang;
  final String anhangTooltip;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      onTap: onTap,
      padding: const EdgeInsets.all(AppSpacing.s4),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: iconBackgroundColor ?? AppColors.brandLight,
                  borderRadius: BorderRadius.circular(AppRadii.md),
                  border: Border.all(
                    color: iconBorderColor ??
                        AppColors.brand.withValues(alpha: 0.4),
                  ),
                ),
                alignment: Alignment.center,
                child: Icon(icon, size: 22, color: iconColor ?? AppColors.ink),
              ),
              const Spacer(),
              if (badge != null)
                badge!
              else if (onAnhang != null)
                // 40x40 statt eines nackten Icons: Unter 44 dp trifft man
                // auf einer Kachel, die selbst antippbar ist, regelmässig
                // daneben und landet im Modul statt im Anhang.
                Semantics(
                  button: true,
                  label: anhangTooltip,
                  child: Tooltip(
                    message: anhangTooltip,
                    child: Material(
                      color: AppColors.surfaceAlt,
                      shape: const CircleBorder(
                        side: BorderSide(color: AppColors.borderStrong),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: InkWell(
                        onTap: onAnhang,
                        child: const SizedBox(
                          width: 40,
                          height: 40,
                          child: Icon(
                            Icons.add,
                            size: 20,
                            color: AppColors.ink,
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              else
                const Icon(Icons.chevron_right, color: AppColors.textMuted),
            ],
          ),
          const SizedBox(height: AppSpacing.s3),
          Text(
            label,
            style: AppTypography.body(
              size: 15,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          if (description != null) ...[
            const SizedBox(height: 2),
            Text(
              description!,
              style: AppTypography.body(size: 12, color: AppColors.textMuted),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ],
        ],
      ),
    );
  }
}
