# Vorteile ohne Abo: Dateien der Produktionslinie (03.11.2026)

Gegenstück zu `supabase/migrations/0065_free_benefits_for_all.sql` (main-Linie)
für die Produktionslinie `claude/bordesnack24-audit-architecture-7xd3d6`.
**Dort noch nicht eingecheckt**, weil der Push auf diesen Zweig eine eigene
Freigabe braucht. Sicherung hier, Ausrollen über Runbook N in
`docs/OPERATIONS.md` (nach Runbook M).

| Datei | Inhalt |
|---|---|
| `20261103100000_vorteile_ohne_abo.sql` | Migration: Schalter `app.benefits_free_for_all()`, Gate `app.has_app_benefits()`, fünf Funktionen mit getauschtem Gate (Rümpfe sonst wörtlich), Abo-Zeiträume Monat/Jahr beendet, Fremdschlüssel `loyalty_bonus_grants_offer_id_fkey` auf `on delete set null` |
| `112_vorteile_ohne_abo.sql` | Prüfskript, 21 Urteile in den Gruppen A bis F (Gate, fünf Vorteile, Abo geschlossen, Gegenprobe Schalter aus, Isolation und Rechte, Löschung) |
| `pruefskripte-zustandsabhaengig.patch` | `90_nachweis_korrekturen.sql` (S-6) und `110_pfand.sql` (A2) prüfen den jeweils geltenden Stand statt eines festen. Anwendbar mit `patch -p1` im Wurzelverzeichnis der Produktionslinie |

## Nachweis (lokale Prüfumgebung, PostgreSQL 16, 03.11.2026)

Neuaufbau der Produktionslinie (236 Migrationen) plus Pfand, Verfügbarkeit
und diese Migration, danach alle Prüfskripte in Zahlenreihenfolge.

| Stand | Ergebnis |
|---|---|
| mit Migration | alle Skripte OK, auch 112 (21/21) und 96/97 (Kontolöschung) |
| ohne Migration | 112 scheitert erwartungsgemäß (Schalter fehlt), alles andere wie oben |

In beiden Ständen gleich und ohne Bezug zur Änderung: `40_lese_isolation`
schreibt eine reine Messtabelle (`ok = null`, Bewertung im Bericht), `94` und
`95` melden zwei Bestandspunkte (gelöschtes Konto in der internen Nutzerliste,
geplante Löschläufe).

## Befund unterwegs

Kontolöschung mit Treuebonus scheiterte am Fremdschlüssel
`loyalty_bonus_grants_offer_id_fkey` (keine Löschregel). Latent, weil ohne Abo
bisher niemand Treueboni bekam. Mit der Freischaltung wäre jede Löschanfrage
eines Kunden mit Bonus gescheitert (Art. 17 DSGVO). Behoben in Abschnitt 4 der
Migration; der Nachweis über die Vergabe bleibt erhalten, nur der Verweis auf
das gelöschte Angebot wird geleert.
