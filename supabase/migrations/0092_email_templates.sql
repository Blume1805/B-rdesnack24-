-- ============================================================================
-- 0092 · E-Mail-Vorlagen in die Datenbank
-- ----------------------------------------------------------------------------
-- ZIEL: Betreff und Inhalt einer Mail ändern zu können, ohne Code
-- anzufassen und ohne auszurollen. Diese Sitzung hat sehr deutlich gezeigt,
-- warum das nötig ist: Ausrollen ist hier der Flaschenhals, und ein
-- Tippfehler in einer Betreffzeile sollte kein Deploy kosten.
--
-- Es ist ausserdem die Voraussetzung dafür, dass die Inhalte von aussen
-- gestaltet werden können — wer den Text schreibt, braucht keinen Zugriff
-- auf das Repository.
--
-- ----------------------------------------------------------------------------
-- DIE ENTSCHEIDENDE GESTALTUNGSFRAGE: Was gehört in die Datenbank?
--
-- Nicht die ganze Mail. In der Datenbank steht nur der **Inhaltsteil** —
-- Betreff, Fliesstext, Vorschauzeile. Rahmen, Kopf und Fuss bleiben im
-- Code (`components.ts`, `page()`).
--
-- Der Grund ist der Fuss: Dort stehen die Pflichtangaben nach § 5 DDG,
-- Impressum, Datenschutz und Widerruf. Läge die vollständige Mail als Kopie
-- in der Datenbank, müsste jede dieser Kopien einzeln nachgezogen werden,
-- wenn sich die Anschrift ändert — und eine würde vergessen. So gilt eine
-- Änderung am Fuss sofort für alle Mails, und der Inhalt bleibt trotzdem
-- frei bearbeitbar.
--
-- ----------------------------------------------------------------------------
-- LEER HEISST: DER CODE GILT.
--
-- `subject` und `body_html` sind absichtlich NULL-fähig. Eine Zeile ohne
-- Inhalt ist ein **Katalogeintrag**: Sie sagt, dass es diese Mail gibt,
-- welche Platzhalter sie kennt und wofür sie da ist — mehr nicht. Versendet
-- wird dann unverändert die Fassung aus dem Code.
--
-- Erst wer Betreff und Inhalt füllt, übernimmt die Vorlage. Damit gibt es
-- keine Verdopplung: Der heutige Wortlaut wird NICHT in die Datenbank
-- kopiert. Eine Kopie würde beim nächsten Codewechsel auseinanderlaufen,
-- und niemand wüsste mehr, welche Fassung gilt.
--
-- `is_active = false` schaltet eine gefüllte Vorlage zurück auf den Code,
-- ohne sie zu löschen — der Rückweg, wenn eine Änderung sich als schlecht
-- erweist.
--
-- ----------------------------------------------------------------------------
-- EINE WARNUNG, die in der Bedienoberfläche stehen muss:
--
-- Der Wortlaut der Kündigungsbestätigung ist rechtlich vorgegeben
-- (§ 312k Abs. 2 S. 3 BGB: Zugangsbestätigung mit Vertragsende). Wer ihn
-- frei umschreibt, kann eine Formvorschrift verletzen. Deshalb trägt jede
-- Zeile ein `legal_note`, das genau davor warnt — und die Oberfläche muss
-- es anzeigen, nicht verstecken.
-- ============================================================================

create table if not exists public.email_templates (
  key          text primary key,
  label        text not null,
  description  text,
  -- Leer = die Fassung aus dem Code gilt.
  subject      text,
  body_html    text,
  body_text    text,
  preheader    text,
  -- Welche Platzhalter diese Mail kennt. Reine Dokumentation für die
  -- Oberfläche; ein unbekannter Platzhalter wird beim Rendern zu leer.
  variables    text[] not null default '{}',
  legal_note   text,
  is_active    boolean not null default true,
  updated_at   timestamptz not null default now(),
  updated_by   uuid references public.profiles(id)
);

alter table public.email_templates enable row level security;

revoke all on public.email_templates from anon, authenticated, public;
grant select on public.email_templates to authenticated;
grant all on public.email_templates to service_role;

drop policy if exists email_templates_read_internal on public.email_templates;
create policy email_templates_read_internal
  on public.email_templates for select
  to authenticated
  using (public.is_internal((select auth.uid())));

comment on table public.email_templates is
  'Inhaltsteil der E-Mail-Vorlagen. Rahmen, Kopf und Fuss bleiben im Code, '
  'damit die Pflichtangaben im Fuss an einer Stelle gepflegt werden. Leerer '
  'subject/body_html = die Fassung aus dem Code gilt. Siehe Migration 0092.';
comment on column public.email_templates.legal_note is
  'Warnung für die Bedienoberfläche, wenn der Wortlaut rechtlich '
  'vorgegeben ist. Muss angezeigt werden, nicht versteckt.';

-- ----------------------------------------------------------------------------
-- Katalog der Mails, die es gibt. Bewusst OHNE Inhalt — siehe oben.
-- ----------------------------------------------------------------------------
insert into public.email_templates (key, label, description, variables, legal_note)
values
  ('subscription_cancel',
   'Kündigung: Zugangsbestätigung',
   'Bestätigt den Zugang einer Kündigung, mit Eingangsdatum und Vertragsende.',
   array['email','kind','kindLabel','cancelAt','receivedAt'],
   'ACHTUNG: Der Zugang einer Kündigung muss nach § 312k Abs. 2 S. 3 BGB '
   'bestätigt werden, einschliesslich des Zeitpunkts, zu dem der Vertrag '
   'endet. Eingangsdatum und Vertragsende dürfen nicht entfallen.'),

  ('subscription_choose',
   'Abo: Bestätigung der Wahl',
   'Bestätigt den Abschluss oder Wechsel eines Abonnements.',
   array['firstName','planName','billingLabel','previousPlanName','lifetime'],
   'Der Preis und die Abrechnungsweise gehören in diese Mail (§ 312j BGB '
   'sowie PAngV). Bitte nicht zugunsten kürzerer Texte streichen.'),

  ('account_deletion_customer',
   'Konto löschen: Eingangsbestätigung an die Kundin/den Kunden',
   'Bestätigt den Eingang eines Löschverlangens und nennt die Frist.',
   array['firstName','receivedAt','deadline','reason'],
   'Die Frist nach Art. 12 Abs. 3 DSGVO (ein Monat) muss genannt bleiben.'),

  ('account_deletion_internal',
   'Konto löschen: Meldung an den Betrieb',
   'Interne Benachrichtigung über ein eingegangenes Löschverlangen.',
   array['email','receivedAt','deadline','reason'],
   null),

  ('auth_signup',      'Anmeldung: E-Mail bestätigen',
   'Bestätigungslink nach der Registrierung.',
   array['confirmUrl','otp'], null),
  ('auth_invite',      'Einladung ins interne Werkzeug',
   'Einladungslink für Mitarbeitende und Gesellschafter.',
   array['confirmUrl','otp'], null),
  ('auth_magiclink',   'Anmeldung ohne Passwort',
   'Einmal-Anmeldelink.',
   array['confirmUrl','otp'], null),
  ('auth_recovery',    'Passwort zurücksetzen',
   'Link zum Setzen eines neuen Passworts.',
   array['confirmUrl','otp'], null),
  ('auth_email_change','E-Mail-Adresse ändern',
   'Bestätigung einer geänderten Adresse.',
   array['confirmUrl','otp'], null),
  ('auth_reauthentication', 'Erneute Bestätigung',
   'Code zur erneuten Bestätigung bei sensiblen Änderungen.',
   array['otp'], null)
on conflict (key) do nothing;

-- ----------------------------------------------------------------------------
-- Bearbeiten. Als DEFINER, weil `updated_by` gesetzt und die
-- Berechtigung an einer Stelle geprüft werden soll — die Prüfung steht
-- ausdrücklich im Rumpf, nicht implizit in einer Policy.
-- ----------------------------------------------------------------------------
create or replace function public.email_template_save(
  p_key       text,
  p_subject   text,
  p_body_html text,
  p_body_text text default null,
  p_preheader text default null,
  p_is_active boolean default true
)
returns public.email_templates
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_row public.email_templates;
begin
  if not public.is_internal(auth.uid()) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  update public.email_templates set
    subject    = nullif(btrim(coalesce(p_subject, '')), ''),
    body_html  = nullif(btrim(coalesce(p_body_html, '')), ''),
    body_text  = nullif(btrim(coalesce(p_body_text, '')), ''),
    preheader  = nullif(btrim(coalesce(p_preheader, '')), ''),
    is_active  = coalesce(p_is_active, true),
    updated_at = now(),
    updated_by = auth.uid()
  where key = p_key
  returning * into v_row;

  if not found then
    raise exception 'Unbekannte Vorlage: %', p_key using errcode = '22023';
  end if;

  return v_row;
end;
$$;

revoke all on function public.email_template_save(text, text, text, text, text, boolean)
  from public, anon;
grant execute on function public.email_template_save(text, text, text, text, text, boolean)
  to authenticated, service_role;

comment on function public.email_template_save(text, text, text, text, text, boolean) is
  'Speichert den Inhaltsteil einer Vorlage. Leerer Betreff oder Inhalt '
  'setzt auf NULL zurück — dann gilt wieder die Fassung aus dem Code.';
