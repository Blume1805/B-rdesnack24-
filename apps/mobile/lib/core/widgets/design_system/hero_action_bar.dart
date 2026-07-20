import 'package:flutter/material.dart';

import '../../theme/app_tokens.dart';

/// Beschreibung einer Seiten-Aktion (PDF-Export, Freigabe, ZIP-Export …)
/// für die [HeroActionBar].
class HeroAction {
  const HeroAction({
    required this.icon,
    required this.tooltip,
    this.onTap,
    this.iconColor,
    this.borderColor,
    this.busy = false,
  });

  final IconData icon;
  final String tooltip;
  final VoidCallback? onTap;
  final Color? iconColor;
  final Color? borderColor;

  /// Zeigt statt des Icons einen kleinen Spinner (z. B. laufender Export).
  final bool busy;
}

/// Rechtsbündige Aktionszeile UNTERHALB des Hero-Headers.
///
/// Seiten-Aktionen gehören nicht in die Header-Zeile über dem Markenbild —
/// dort gehen sie optisch verloren (User-Feedback). Diese Leiste sitzt als
/// erstes Element im Seiteninhalt und nutzt dieselbe Optik wie die
/// Aktionszeile des Finanz-Dashboards (outlined 40×40-Kacheln).
class HeroActionBar extends StatelessWidget {
  const HeroActionBar({
    super.key,
    required this.actions,
    this.padding = const EdgeInsets.fromLTRB(
      AppSpacing.s5,
      AppSpacing.s3,
      AppSpacing.s5,
      0,
    ),
  });

  final List<HeroAction> actions;
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    if (actions.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: padding,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          for (var i = 0; i < actions.length; i++) ...[
            if (i > 0) const SizedBox(width: 6),
            _HeroActionTile(action: actions[i]),
          ],
        ],
      ),
    );
  }
}

class _HeroActionTile extends StatelessWidget {
  const _HeroActionTile({required this.action});
  final HeroAction action;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: action.tooltip,
      child: Material(
        color: AppColors.surfaceAlt,
        borderRadius: BorderRadius.circular(AppRadii.md),
        child: InkWell(
          onTap: action.busy ? null : action.onTap,
          borderRadius: BorderRadius.circular(AppRadii.md),
          child: Container(
            width: 40,
            height: 40,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(AppRadii.md),
              border: Border.all(
                color: action.borderColor ?? AppColors.borderSubtle,
              ),
            ),
            child: action.busy
                ? const SizedBox(
                    width: 18,
                    height: 18,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      color: AppColors.brand,
                    ),
                  )
                : Icon(
                    action.icon,
                    size: 20,
                    color: action.iconColor ?? AppColors.ink,
                  ),
          ),
        ),
      ),
    );
  }
}
