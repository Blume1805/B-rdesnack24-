-- ============================================================================
-- 0031b · Nachtrag: zwei Tabellen, die im Repository nie angelegt wurden
-- ----------------------------------------------------------------------------
-- BEFUND
-- Beim Abgleich der angewendeten Migrationen (102) gegen die Dateien im
-- Repository (80) fielen zwei Tabellen auf, die in der produktiven
-- Datenbank existieren, aber von keiner Datei erzeugt werden:
--
--   * public.partner_signatures        — 0032 macht `alter table` darauf,
--                                        ohne dass sie je erzeugt wurde
--   * public.customer_notification_reads — kommt im gesamten Repository
--                                        kein einziges Mal vor
--
-- Folge: **Ein Neuaufbau der Datenbank aus dem Repository bricht ab.**
-- Nicht „läuft durch und weicht ab" — 0032 scheitert mit einem Fehler an
-- `alter table public.partner_signatures`.
--
-- Das ist keine Kleinigkeit mehr, seit laut ADR 0005 eine zweite
-- Oberfläche gegen dieselbe Datenbank gebaut wird: Der naheliegende Weg,
-- so etwas gefahrlos zu testen, ist eine Zweig- oder Staging-Datenbank —
-- und genau die ließe sich derzeit nicht erzeugen.
--
-- Die Ursache liegt vor dieser Arbeit: Ein Teil der frühen Migrationen
-- wurde offenbar direkt im Dashboard angewendet, ohne die zugehörige Datei
-- abzulegen. Diese Datei holt das für die beiden Tabellen nach, deren
-- Fehlen den Neuaufbau tatsächlich blockiert.
--
-- WARUM DIE NUMMER 0031b
-- Migrationen laufen in Dateinamen-Reihenfolge. Die Tabelle muss vor 0032
-- stehen, sonst hilft der Nachtrag beim Neuaufbau nicht.
--
-- GEGEN DIE LAUFENDE DATENBANK IST DIESE DATEI EIN LEERLAUF.
-- Alles ist mit `if not exists` bzw. einer Existenzprüfung abgesichert;
-- sie wurde deshalb bewusst NICHT auf die Produktivdatenbank angewendet —
-- dort sind beide Tabellen vorhanden.
--
-- ZUM ZUSCHNITT
-- `partner_signatures` wird hier ohne die vier Spalten angelegt, die 0032
-- per `add column if not exists` ergänzt (captured_via,
-- docusign_envelope_id, captured_at, profile_id). Andernfalls würde 0032
-- die Spalten überspringen — und mit ihnen den Fremdschlüssel auf
-- `profiles`, der dort an `profile_id` hängt.
--
-- Die Policy wird dagegen gleich in der **gehärteten** Fassung angelegt
-- (mit `status = 'active'` und `deleted_at is null`, siehe 0079) statt in
-- der historischen. Bei einer Reparaturdatei ist der sichere Zustand
-- wichtiger als die getreue Nacherzählung — und 0079 stört das nicht, die
-- Migration zählt dort nur Policies *ohne* Statusprüfung.
-- ============================================================================

create table if not exists public.partner_signatures (
  id                     uuid primary key default gen_random_uuid(),
  full_name              text not null,
  role_label             text not null default 'Gesellschafter',
  docusign_user_id       text,
  docusign_account_id    text,
  docusign_signature_uri text,
  image_url              text,
  sort_order             integer not null default 0,
  created_at             timestamptz not null default now()
);

alter table public.partner_signatures enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
     where schemaname = 'public' and tablename = 'partner_signatures'
       and policyname = 'ps_read'
  ) then
    create policy ps_read on public.partner_signatures
      for select to authenticated
      using (exists (
        select 1 from public.profiles p
         where p.status = 'active'
           and p.deleted_at is null
           and p.id = (select auth.uid())
           and p.role = any (array['system_admin'::app.role_key,
                                   'shareholder'::app.role_key,
                                   'employee'::app.role_key])
      ));
  end if;
end $$;

-- ----------------------------------------------------------------------------

create table if not exists public.customer_notification_reads (
  customer_id uuid not null references public.profiles(id) on delete cascade,
  key         text not null,
  read_at     timestamptz not null default now(),
  primary key (customer_id, key)
);

alter table public.customer_notification_reads enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
     where schemaname = 'public' and tablename = 'customer_notification_reads'
       and policyname = 'cnr_all'
  ) then
    create policy cnr_all on public.customer_notification_reads
      for all to authenticated
      using (customer_id = (select auth.uid()))
      with check (customer_id = (select auth.uid()));
  end if;
end $$;

-- ----------------------------------------------------------------------------
-- WEITERHIN OFFEN
-- ----------------------------------------------------------------------------
-- Damit läuft der Neuaufbau über diese beiden Stellen hinweg. Ob er danach
-- vollständig durchläuft, ist NICHT geprüft — dafür bräuchte es eine
-- Zweig-Datenbank, und die kostet. 36 weitere angewendete Migrationen haben
-- keine gleichnamige Datei; bei den meisten ist der Inhalt in einer anderen
-- Datei aufgegangen (mehrere Anwendungen, eine Datei), geprüft ist das aber
-- nur für die Objekte, die hier auffielen.
--
-- Empfehlung: einmal eine Supabase-Zweig-Datenbank erzeugen und den
-- Neuaufbau tatsächlich durchlaufen lassen. Das ist die einzige
-- belastbare Antwort auf die Frage, ob sich diese Datenbank
-- wiederherstellen lässt.
