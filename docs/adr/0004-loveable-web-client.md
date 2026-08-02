# ADR 0004 — Loveable als zweiter Client auf der geteilten Datenbank

- **Status:** Akzeptiert
- **Datum:** 2026-08-01

## Kontext

Die Flutter-App ist heute der einzige produktive Client gegen die
Supabase-Datenbank (native App-Store-Distribution + Web-Build). Ein
zweites, separates Projekt in Loveable (TanStack Start, Repo nicht Teil
dieses Git-Repos, nur über die Loveable-MCP-Werkzeuge erreichbar) soll die
öffentliche Kunden-Weboberfläche (Landing Page + Kundenbereich) werden und
sich dieselbe Supabase-Instanz teilen. Der interne Bereich (Finance,
HACCP, Management, ~45 Screens) bleibt ausschließlich in Flutter — er wird
nicht dupliziert.

Bevor Loveable an echte Daten darf, war zu klären: Ist die bestehende
RLS-/RPC-Architektur überhaupt auf einen zweiten, unabhängigen Client
(anderer Session-/Cookie-Mechanismus, andere Auth-Flow-Implementierung)
ausgelegt, oder gibt es Annahmen, die nur für den Flutter-Client gelten?

## Befund (Audit vor Anbindung)

1. **RLS ist rollenbasiert, nicht client-spezifisch.** Grep über alle
   `supabase/migrations/*.sql` nach `current_setting`/Header-/User-Agent-
   Bezug: 0 Treffer. Stichprobe der Policies auf `profiles` und
   `customers` (Live-DB, `pg_policies`) zeigt ausschließlich Bedingungen
   auf `auth.uid()` sowie `is_admin()`/`auth_has_permission()` — beide
   Funktionen lesen nur `public.profiles`/`user_permissions`/
   `role_permissions`, keine Client-Metadaten. Ein zweiter Client mit
   normaler Supabase-Auth-Session ist damit grundsätzlich sicher möglich.
2. **DB-seitige Schutzmechanismen sind client-unabhängig.** Die
   Geburtsdatum-Sperre (`0072_birth_date_immutable.sql`, Trigger) und der
   Referral-Missbrauchsschutz (`0073_referral_program.sql`, Constraints +
   zeitversetzte Auszahlung) greifen unabhängig davon, welcher Client
   schreibt.
3. **Security-Advisor-Lauf (`get_advisors`, security) zeigt 90 WARN,
   0 ERROR.** Relevant für die Frage "was darf ein unauthentifizierter
   Web-Besucher schon":
   - 4 `SECURITY DEFINER`-Funktionen sind für `anon` ausführbar
     (`choose_subscription_plan`, `lifetime_founders_status`,
     `my_gamification_status`, `my_receipts`). Code-Review aller vier
     Funktionsbodies: drei brechen explizit mit einer Exception ab, wenn
     `auth.uid()` NULL ist (`choose_subscription_plan`,
     `my_gamification_status`); `lifetime_founders_status()` liefert
     absichtlich nur ein öffentliches Aggregat (Limit/vergeben/frei) ohne
     PII — das ist bereits das Muster, das eine spätere echte
     Spenden-Summe auf der Loveable-Landingpage verwenden sollte
     (öffentliche Aggregat-RPC statt Rohdaten). `my_receipts()` filtert
     `where customer_id = auth.uid()`; bei `anon` ist das NULL, SQL-NULL-
     Semantik liefert `[]` statt eines Lecks — funktional sicher, aber
     unsauber (kein expliziter Guard wie bei den anderen drei). Kleine
     Härtung vorgeschlagen (siehe Konsequenzen), kein Blocker.
   - 83 `SECURITY DEFINER`-Funktionen sind für `authenticated` ausführbar
     — erwartetes Muster dieser Architektur (App-RPCs, die eingeloggte
     Nutzer selbst aufrufen). Kein neues Risiko durch einen zweiten
     Client, da beide Clients denselben Identitäts-/Rollen-Check
     durchlaufen.
   - 3 generische Hardening-Punkte ohne Bezug zum Plattform-Split:
     `app.lifetime_founders_limit` hat einen mutable search_path,
     `pg_net`-Extension liegt im `public`-Schema, "leaked password
     protection" ist in Supabase Auth nicht aktiviert. Nicht blockierend,
     als allgemeiner Backlog-Punkt vorgemerkt (Track C4).
4. **Auth-Redirect-URLs für Loveable** können noch nicht ergänzt werden —
   das Loveable-Projekt ist unveröffentlicht (`is_published: false`), es
   gibt noch keine feste Domain. Muss in A1 nachgeholt werden, sobald eine
   Vorschau-/Produktions-URL feststeht.
5. **JWT-Ablauf/Refresh für lange Web-Tabs** ist keine Backend-Config-
   Frage, sondern Sache des Clients: `@supabase/supabase-js` refresht
   Tokens standardmäßig automatisch (`autoRefreshToken: true`). Für
   TanStack Start (SSR) braucht es einen SSR-tauglichen Cookie-Storage-
   Adapter statt `localStorage` — Implementierungsdetail von A1, kein
   Schema-/Policy-Thema.

## Entscheidung

Loveable darf als zweiter Client an die echte Supabase-Instanz
angebunden werden (A1 im Gesamtplan). Keine RLS-Änderungen nötig, um
diesen zweiten Client sicher zu machen — die bestehende Architektur trägt
das bereits.

## Konsequenzen

- A1 kann ohne vorherige RLS-Umbauten starten.
- Kleine, unabhängige Härtung vorgemerkt (nicht blockierend, Track C4):
  expliziter `auth.uid() is null`-Guard in `my_receipts()` für
  Konsistenz mit den anderen drei anon-erreichbaren Funktionen;
  `search_path` auf `app.lifetime_founders_limit` fixieren; `pg_net` aus
  `public` verschieben; "leaked password protection" in Supabase Auth
  aktivieren.
- `lifetime_founders_status()` dient als Vorlage für eine künftige
  öffentliche Spenden-Summen-RPC (Aggregat ohne PII, `anon`-ausführbar),
  sobald A2 echte Daten auf der Loveable-Landingpage zeigen soll.
- Auth-Redirect-URLs müssen ergänzt werden, sobald Loveable eine feste
  Domain hat — offener Punkt für A1, kein Blocker heute.
