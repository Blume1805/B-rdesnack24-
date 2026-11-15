# Runbook L in der Produktion eingespielt (15.11.2026)

Freigabe: Philipp am 15.11.2026 („Ok. Mach weiter" auf die Frage, ob die beiden
offenen Lücken über die Supabase-Verbindung geschlossen werden dürfen).

| Datei | Inhalt |
|---|---|
| `runbook_l_sperre_scheinkauf_und_kaufbetraege.sql` | genau der eingespielte Text. Entzieht `public`, `anon` und `authenticated` das Aufrufrecht für `dev_add_demo_purchase`, `purchase_net_items`, `purchase_donation_for`. Keine Daten, kein Funktionsrumpf geändert. In der Produktion als Migration gleichen Namens verzeichnet |
| `probe_angriff_und_gegenprobe.sql` | lokaler Nachweis mit zwei Kundenkonten |

## Nachweis

**Lokal** (Nachbau auf dem Stand der Produktion vom 10.09.2026; die Rümpfe der
drei Funktionen stimmen per Prüfsumme mit der Produktion überein):

| Probe | vorher | nachher |
|---|---|---|
| Kunde A erfindet einen Kauf über 999 € | gelingt, Kauf gespeichert | `ERR:42501`, kein Kauf |
| Kunde A liest Nettobetrag eines fremden Kaufs | `11.53` | `ERR:42501` |
| Kunde A liest Spendenbetrag eines fremden Kaufs | `0.58` | `ERR:42501` |
| ohne Anmeldung | `ERR:42501` | `ERR:42501` |
| eigene Spendenübersicht, Spenden je Kauf, Spendentopf | funktionieren | funktionieren |
| Dienstschlüssel (`service_role`) | darf | darf |

**Produktion**, nach dem Einspielen gemessen: `scheinkauf = gesperrt`,
`fremde_kaufbetraege = gesperrt`, `fremde_spendenbetraege = gesperrt`,
Spendenübersicht und Spendentopf weiter aufrufbar, Rumpf unverändert, 0 Käufe,
235 Migrationen.

Vor dem Einspielen geprüft: Die drei Funktionen werden in der Produktion nur
von `donation_pool_summary`, `my_donation_summary` und
`my_donations_by_purchase` verwendet (alle mit Eigentümerrechten), von keiner
Sicht und keiner Zeilenschutz-Regel.

## Rückweg

```sql
grant execute on function public.dev_add_demo_purchase(text, numeric) to authenticated;
grant execute on function public.purchase_net_items(uuid, numeric) to authenticated;
grant execute on function public.purchase_donation_for(uuid, numeric) to authenticated;
```

## Offen

* Die App (`apps/mobile`, `customer_remote_data_source.dart`) enthält den
  Aufruf von `dev_add_demo_purchase` noch. Die Schaltfläche dazu steht hinter
  `kDebugMode` und erscheint in der ausgelieferten Fassung nicht. Aufruf und
  Schaltfläche entfernen: Phase 4.
* B-3 (`bar_soll`) entsteht erst mit `bargeld_und_preisausspielung`; die
  Korrektur steckt in `scheinkaeufe_sperren` und muss in derselben Reihenfolge
  mit ausgerollt werden.
