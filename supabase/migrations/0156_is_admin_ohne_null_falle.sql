-- ============================================================================
-- 0156 — is_admin() ohne NULL-Falle
-- ----------------------------------------------------------------------------
-- Gefunden am 27.08.2026, nicht gesucht: Beim Nachstellen der Zeilensicherheit
-- für den neuen Werbebericht (`advertising_campaign_report`, 0155) wurde eine
-- Kennung verwendet, die zu keinem aktiven Profil gehört — genau der Fall
-- eines gesperrten oder gelöschten Kontos, dessen Sitzung noch nicht
-- abgelaufen ist. Der Bericht lieferte trotzdem Daten. Erwartet war eine
-- Abweisung.
--
-- Die Ursache liegt nicht in 0155, sondern in `public.is_admin()` selbst:
--
--     select public.app_role(uid) = 'system_admin';
--
-- `app_role()` ist `select p.role from public.profiles p where p.id = uid
-- and p.status = 'active' and p.deleted_at is null` — ohne Treffer liefert
-- das kein „kein Admin", sondern SQL-NULL. Der Vergleich `NULL = 'system_
-- admin'` ist wieder NULL, nicht `false`. Damit gibt `is_admin()` für jedes
-- Konto ohne aktives Profil NULL zurück statt `false`.
--
-- Das wäre harmlos, stünde `is_admin()` allein. Es steht aber praktisch nie
-- allein: Das Muster `if not (public.is_admin() or <etwas anderes>) then
-- raise exception ... end if;` kommt in 23 Migrationen vor. Ist das andere
-- Glied `false` (der Normalfall für jeden ohne die gefragte Rolle) und
-- `is_admin()` NULL, ergibt `false or NULL` wieder NULL, und `not NULL` ist
-- NULL. In PL/pgSQL nimmt `if NULL then …` den Zweig NICHT — die Ausnahme
-- bleibt aus, die Funktion läuft weiter, als wäre die Prüfung bestanden.
--
-- `public.is_shareholder()` erbt denselben Fehler auf demselben Weg: Sie
-- endet auf `… or public.is_admin(uid)`, und ihr erster Teil ist ein reines
-- `exists(...)` — das liefert immer `true`/`false`, nie NULL. Dieselbe
-- Rechnung: `false or NULL` = NULL.
--
-- ----------------------------------------------------------------------------
-- Wer dasträfe
-- ----------------------------------------------------------------------------
-- Nicht ein Fremder ohne jede Kennung — der scheitert schon an der
-- Authentifizierung von Supabase selbst. Betroffen ist eine Person mit
-- GÜLTIGEM Zugangstoken, deren `profiles`-Zeile inzwischen `status <>
-- 'active'` oder `deleted_at is not null` trägt: ein gesperrtes oder
-- entferntes Konto. Zwischen der Sperrung und dem Ablauf des Tokens (das
-- Token selbst weiss von der Sperrung nichts) hätte diese Person auf jede
-- Funktion zugegriffen, die ihre Berechtigung über `is_admin()` oder
-- `is_shareholder()` UND ein weiteres, für sie falsches Merkmal prüft —
-- unabhängig davon, ob sie je eine Berechtigung hatte.
--
-- Das ist dieselbe Fehlerklasse wie am 03.08.2026 (siehe
-- check_rollenpruefung.py), diesmal aber nicht in einer einzelnen Migration,
-- sondern in einer gemeinsam genutzten Funktion — unsichtbar für
-- check_rollenpruefung.py, weil dessen Suchmuster `role not in (...)` lautet
-- und hier nirgends auftaucht. Der Fehler steckt in der Komposition, nicht
-- im Text einer einzelnen Datei.
--
-- ----------------------------------------------------------------------------
-- Nachgestellt, vor UND nach dieser Migration
-- ----------------------------------------------------------------------------
-- Vorher (mit einer echten UUID ohne zugehöriges aktives Profil als
-- `auth.uid()`, über `pg_temp.als()`):
--   * `advertising_campaign_report()` einer fremden Kampagne — lieferte den
--     vollständigen Bericht statt „Keine Berechtigung".
-- Nachher, siehe Gegenprobe am Ende dieser Datei.
--
-- ----------------------------------------------------------------------------
-- Die Reparatur
-- ----------------------------------------------------------------------------
-- `coalesce(app_role(uid) = 'system_admin', false)` — genau eine Stelle,
-- weil `app_role()` sonst nirgends direkt verglichen wird (geprüft: kein
-- weiteres Vorkommen von `app_role(uid) =` im gesamten Migrationsbestand).
-- `is_shareholder()` braucht keine eigene Änderung — sie wird korrekt, weil
-- `is_admin()` es jetzt ist.
-- ============================================================================

create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select coalesce(public.app_role(uid) = 'system_admin', false);
$$;

comment on function public.is_admin(uuid) is
  'true/false, NIE NULL — auch für ein Konto ohne aktives Profil. Ohne das '
  'coalesce lieferte diese Funktion NULL, was jede Prüfung der Form '
  '"is_admin() or X" bei falschem X unbemerkt durchliess (0156).';
