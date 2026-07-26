# In-App-Käufe & Jugendschutz-Wartestatus (Ask to Buy / Family Link)

Stand: 2026-07-26 · gilt für die Abo-Modelle im Kundenbereich.

## Ziel

Kostenpflichtige Abos müssen die **nativen Jugendschutz-Freigaben** der Eltern
korrekt auslösen und abwarten:

- **Apple** „Ask to Buy" (StoreKit 2)
- **Google** „Kaufgenehmigungen" (Play Billing / Family Link)

Tippt ein Kind auf „Kaufen", wird die Zahlung **nicht sofort** erfolgreich,
sondern verbleibt im **Wartestatus (pending)**, bis die Eltern auf ihrem Gerät
zustimmen. Bis dahin darf **nichts freigeschaltet** werden.

## Architektur in dieser App

Store-unabhängige Abstraktion in `lib/core/billing/subscription_billing.dart`:

| Baustein | Zweck |
|---|---|
| `PurchasePhase` | `success` · `pending` · `cancelled` · `error` |
| `PurchaseOutcome` | Ergebnis eines Kaufversuchs |
| `PendingPurchase` + `PendingPurchaseStore` | Wartestatus lokal persistieren (übersteht App-Neustart) |
| `SubscriptionBillingService` | Schnittstelle: `purchase()` + `resolvePending()` |
| `EdgeFunctionBillingService` | Aktueller Adapter (Server = Wahrheit über Abo-Status) |

**UI-Verhalten** (`subscription_screen.dart`):

1. `purchase()` → bei `pending`: Ladedialog schließen, Bottom-Sheet
   „Kaufanfrage an deine Eltern gesendet", **keine** Freischaltung.
2. Dauerhaftes Banner „Warte auf Freigabe der Eltern", solange `_pendingPlan`
   gesetzt ist.
3. Beim App-Start ruft der Screen `resolvePending()` — wurde freigegeben,
   entsperrt sich das Abo automatisch (`hasSubscriptionProvider` invalidiert).

## Native Adapter (bei Store-Veröffentlichung zu ergänzen)

Sobald echte Produkt-IDs + Signing vorliegen, werden zwei Adapter ergänzt,
die `SubscriptionBillingService` implementieren. Kernpunkte:

### iOS / StoreKit 2

`product.purchase()` liefert ein `PurchaseResult`. Der Status `.pending` muss
**explizit** abgefangen werden; freigegebene Käufe laufen später über
`Transaction.updates` ein (App muss beim Start nachhören):

```swift
let result = try await product.purchase()
switch result {
case .success(let verification):
    let transaction = try checkVerified(verification)
    await deliverContent(transaction)   // nur hier freischalten
    await transaction.finish()
case .pending:
    showPendingUI()                     // Ask to Buy aktiv
case .userCancelled: break
@unknown default: break
}
```

### Android / Play Billing

Beim Initialisieren `enablePendingPurchases()` **zwingend** aufrufen — sonst
blockiert Google den Kauf für Kinderkonten vorab:

```java
BillingClient billingClient = BillingClient.newBuilder(context)
    .setListener(purchasesUpdatedListener)
    .enablePendingPurchases()           // essenziell für Jugendschutz
    .build();
```

Im `PurchasesUpdatedListener` den Status unterscheiden:

```java
if (purchase.getPurchaseState() == Purchase.PurchaseState.PENDING) {
    showPendingMessageToUser();         // Genehmigung steht aus
} else if (purchase.getPurchaseState() == Purchase.PurchaseState.PURCHASED) {
    handleSuccessfulPurchase(purchase); // erst hier freischalten
}
```

## UI-Best-Practices im Wartestatus

1. Ladebalken/Bezahldialog schließen.
2. Klarer Hinweis: „Deine Kaufanfrage wurde an deine Eltern gesendet. Sobald
   sie zustimmen, wird dein Zugang automatisch freigeschaltet."
3. **Keine** voreilige Freischaltung — erst nach `success` / `PURCHASED` vom
   Store-Server.
