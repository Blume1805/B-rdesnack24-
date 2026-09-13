create table if not exists public.email_templates (
  key          text primary key,
  label        text not null,
  description  text,
  subject      text,
  body_html    text,
  body_text    text,
  preheader    text,
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
  'Inhaltsteil der E-Mail-Vorlagen. Rahmen, Kopf und Fuss bleiben im Code, damit die Pflichtangaben im Fuss an einer Stelle gepflegt werden. Leerer subject/body_html = die Fassung aus dem Code gilt. Siehe Migration 0092.';
comment on column public.email_templates.legal_note is
  'Warnung für die Bedienoberfläche, wenn der Wortlaut rechtlich vorgegeben ist. Muss angezeigt werden, nicht versteckt.';

insert into public.email_templates (key, label, description, variables, legal_note)
values
  ('subscription_cancel', 'Kündigung: Zugangsbestätigung',
   'Bestätigt den Zugang einer Kündigung, mit Eingangsdatum und Vertragsende.',
   array['email','kind','kindLabel','cancelAt','receivedAt'],
   'ACHTUNG: Der Zugang einer Kündigung muss nach § 312k Abs. 2 S. 3 BGB bestätigt werden, einschliesslich des Zeitpunkts, zu dem der Vertrag endet. Eingangsdatum und Vertragsende dürfen nicht entfallen.'),
  ('subscription_choose', 'Abo: Bestätigung der Wahl',
   'Bestätigt den Abschluss oder Wechsel eines Abonnements.',
   array['firstName','planName','billingLabel','previousPlanName','lifetime'],
   'Der Preis und die Abrechnungsweise gehören in diese Mail (§ 312j BGB sowie PAngV). Bitte nicht zugunsten kürzerer Texte streichen.'),
  ('account_deletion_customer', 'Konto löschen: Eingangsbestätigung an die Kundin/den Kunden',
   'Bestätigt den Eingang eines Löschverlangens und nennt die Frist.',
   array['firstName','receivedAt','deadline','reason'],
   'Die Frist nach Art. 12 Abs. 3 DSGVO (ein Monat) muss genannt bleiben.'),
  ('account_deletion_internal', 'Konto löschen: Meldung an den Betrieb',
   'Interne Benachrichtigung über ein eingegangenes Löschverlangen.',
   array['email','receivedAt','deadline','reason'], null),
  ('auth_signup', 'Anmeldung: E-Mail bestätigen', 'Bestätigungslink nach der Registrierung.',
   array['confirmUrl','otp'], null),
  ('auth_invite', 'Einladung ins interne Werkzeug', 'Einladungslink für Mitarbeitende und Gesellschafter.',
   array['confirmUrl','otp'], null),
  ('auth_magiclink', 'Anmeldung ohne Passwort', 'Einmal-Anmeldelink.',
   array['confirmUrl','otp'], null),
  ('auth_recovery', 'Passwort zurücksetzen', 'Link zum Setzen eines neuen Passworts.',
   array['confirmUrl','otp'], null),
  ('auth_email_change', 'E-Mail-Adresse ändern', 'Bestätigung einer geänderten Adresse.',
   array['confirmUrl','otp'], null),
  ('auth_reauthentication', 'Erneute Bestätigung', 'Code zur erneuten Bestätigung bei sensiblen Änderungen.',
   array['otp'], null)
on conflict (key) do nothing;

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

revoke all on function public.email_template_save(text, text, text, text, text, boolean) from public, anon;
grant execute on function public.email_template_save(text, text, text, text, text, boolean) to authenticated, service_role;

comment on function public.email_template_save(text, text, text, text, text, boolean) is
  'Speichert den Inhaltsteil einer Vorlage. Leerer Betreff oder Inhalt setzt auf NULL zurück — dann gilt wieder die Fassung aus dem Code.';
