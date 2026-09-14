-- Rechtstexte an einer Stelle, lesbar von jedem Frontend.
--
-- Anlass (09.08.2026): Das Lovable-Frontend hatte KEINE Rechtsseiten —
-- die Profil-Kacheln waren Buttons ohne onClick. Die naheliegende Lösung
-- wäre gewesen, die Texte dorthin zu kopieren. Damit gäbe es sie zweimal,
-- und die zweite Kopie wäre beim nächsten Nachziehen vergessen worden.
-- Genau die Drift, gegen die die Regel in CLAUDE.md steht.
--
-- Massgeblich bleibt legal_texts.dart. Diese Tabelle wird daraus befüllt.
create table if not exists public.legal_text (
  slug            text primary key,
  titel           text not null,
  inhalt          text not null check (length(btrim(inhalt)) > 200),
  sortierung      int  not null default 0,
  aktualisiert_am timestamptz not null default now()
);

comment on table public.legal_text is
  'Rechtstexte für alle Frontends. Quelle ist '
  'apps/mobile/lib/features/legal/presentation/legal_texts.dart; diese '
  'Tabelle wird daraus befüllt, damit es nur eine Fassung gibt.';

-- Rechtstexte müssen ohne Anmeldung lesbar sein — ein Impressum hinter
-- einem Login erfüllt § 5 DDG nicht.
alter table public.legal_text enable row level security;
revoke all on public.legal_text from anon, authenticated;
grant select on public.legal_text to anon, authenticated;

drop policy if exists legal_text_read on public.legal_text;
create policy legal_text_read on public.legal_text
  for select to anon, authenticated using (true);
