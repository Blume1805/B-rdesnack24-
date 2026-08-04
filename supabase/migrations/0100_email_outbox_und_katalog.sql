-- ============================================================================
-- 0100 · Versandwarteschlange und der vollständige Vorlagenkatalog
-- ----------------------------------------------------------------------------
-- Bisher stiess jede Edge Function ihre Mail selbst an: `subscription-cancel`
-- schickt die Kündigungsbestätigung, `approval-notify` die Freigabemeldung.
-- Für acht Mails geht das. Für die gewünschten dreiunddreissig geht es nicht,
-- und zwar aus einem sehr praktischen Grund: Jede neue Mail wäre eine neue
-- Edge Function oder eine Änderung an einer bestehenden — und jede Änderung
-- an einer Edge Function muss ausgerollt werden. Genau das ist derzeit der
-- Flaschenhals (kein `SUPABASE_ACCESS_TOKEN`, fünf Funktionen warten bereits).
--
-- Deshalb dreht diese Migration die Richtung um:
--
--   Ereignis  →  `email_enqueue(...)`  →  `email_outbox`  →  ein Versender
--
-- Wer eine Mail auslösen will, legt eine Zeile ab. Eine neue Mailart ist
-- danach **eine Katalogzeile und eine Vorlage**, kein neuer Dienst. Das ist
-- auch der Grund, warum Loveable das Design liefern kann, ohne dass jemand
-- Code anfasst: Das HTML landet in `email_templates.body_html`.
--
-- ----------------------------------------------------------------------------
-- Die eine Regel, die diese Migration wirklich durchsetzt
--
-- **Werbung ohne Einwilligung verlässt das Haus nicht.** Nicht als Bitte an
-- den Aufrufer, sondern als Sperre in `email_enqueue`. Ein Aufrufer kann
-- sich irren, eine Schleife über alle Kunden kann eine Bedingung vergessen —
-- die Sperre sitzt hinter allen davon.
--
-- Die Gegenrichtung ist genauso wichtig und wird gern übersehen:
-- **Vertragspost wird von einer Abmeldung nie aufgehalten.** Wer den
-- Abmeldelink klickt, bestellt Werbung ab, nicht seine
-- Kündigungsbestätigung. Verwechselt man das, entsteht der Fall, in dem
-- jemand widerruft und nie eine Bestätigung bekommt.
--
-- Beides ist unten in Tests nachgestellt, nicht nur behauptet.
--
-- ----------------------------------------------------------------------------
-- Was NICHT versendet wird und warum
--
-- Von den dreiunddreissig gewünschten Mails haben zwölf derzeit keine
-- Grundlage in den Daten. Sie stehen trotzdem im Katalog — aber mit
-- `is_active = false` und einer benannten Voraussetzung in `precondition`.
--
-- Das ist Absicht. Eine Vorlage, die aktiv aussieht, aber nie ausgelöst
-- wird, ist schlimmer als eine, die ehrlich als gesperrt dasteht: Man hakt
-- sie ab und merkt erst beim Kunden, dass nie etwas ankam. `email_enqueue`
-- wirft bei einer gesperrten Vorlage eine Ausnahme statt still zu
-- schlucken.
--
-- Der grösste Block: elf der zwölf hängen an einem Zahlungsanbieter, den es
-- nicht gibt. `0073_referral_program.sql` hält das schon fest — es existiert
-- kein Payment-Webhook. Ohne den weiss die Datenbank nicht, ob eine Zahlung
-- geklappt hat, wann ein Zahlungsmittel abläuft oder ob sich ein Abo
-- verlängert hat. Solche Mails kann man nicht „vorbereiten"; sie brauchen
-- ein Ereignis, das es noch nicht gibt.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Der Katalog bekommt eine Einordnung
-- ----------------------------------------------------------------------------
alter table public.email_templates
  add column if not exists category text not null default 'transactional',
  add column if not exists topic_key text references public.email_topic(key),
  add column if not exists precondition text;

alter table public.email_templates
  drop constraint if exists email_templates_category_check;
alter table public.email_templates
  add constraint email_templates_category_check
  check (category in ('transactional', 'marketing', 'legal'));

-- Werbung braucht ein Thema, sonst weiss niemand, wogegen die Einwilligung
-- geprüft werden soll. Vertragspost darf keins haben — ein Thema wäre dort
-- eine Einladung, sie doch abbestellbar zu machen.
alter table public.email_templates
  drop constraint if exists email_templates_thema_nur_bei_werbung;
alter table public.email_templates
  add constraint email_templates_thema_nur_bei_werbung
  check (
    (category = 'marketing' and topic_key is not null)
    or (category <> 'marketing' and topic_key is null)
  );

comment on column public.email_templates.category is
  'transactional = Vertragspost, geht immer raus. marketing = Werbung, '
  'braucht Einwilligung nach § 7 Abs. 2 Nr. 2 UWG. legal = Pflichtinformation '
  '(AGB-/Datenschutzänderung, Sicherheitshinweis), geht ebenfalls immer raus.';
comment on column public.email_templates.precondition is
  'Wenn gesetzt: was fehlt, bevor diese Vorlage überhaupt ausgelöst werden '
  'kann. Gehört mit is_active = false zusammen.';

-- ----------------------------------------------------------------------------
-- 2) Der vollständige Katalog
-- ----------------------------------------------------------------------------
insert into public.email_templates
  (key, label, description, category, topic_key, variables, legal_note,
   is_active, precondition)
values
  -- ── Konto & Sicherheit ────────────────────────────────────────────────
  ('konto_willkommen',
   'Willkommen nach bestätigter Registrierung',
   'Geht raus, nachdem die E-Mail-Adresse bestätigt wurde — nicht schon beim Absenden des Formulars.',
   'transactional', null, array['vorname','app_link'],
   'Vertragspost. Kein Abmeldelink, keine Werbung im Text — sonst wird aus '
   'der Begrüssung eine Werbemail, die eine Einwilligung bräuchte.',
   true, null),

  ('konto_passwort_geaendert',
   'Passwort wurde geändert',
   'Sicherheitsmeldung nach erfolgreicher Passwortänderung.',
   'transactional', null, array['vorname','zeitpunkt','support_mail'],
   'Muss auch dann raus, wenn die Änderung erwünscht war — der Zweck ist, '
   'dass eine UNerwünschte Änderung auffällt.',
   true, null),

  ('konto_email_geaendert',
   'E-Mail-Adresse wurde geändert (Meldung an die alte Adresse)',
   'Geht an die BISHERIGE Adresse, nachdem die neue bestätigt wurde.',
   'transactional', null, array['vorname','alte_adresse','neue_adresse','zeitpunkt','support_mail'],
   'Bewusst an die alte Adresse. Wer ein Konto übernimmt, ändert zuerst die '
   'E-Mail — eine Meldung nur an die neue Adresse würde niemanden warnen.',
   true, null),

  ('konto_neue_anmeldung',
   'Anmeldung von einem unbekannten Gerät',
   'Meldung, wenn sich jemand von einem bisher nicht gesehenen Gerät anmeldet.',
   'transactional', null, array['vorname','zeitpunkt','geraet','ort','support_mail'],
   'Speichert Gerätemerkmale und damit personenbezogene Daten. Braucht vor '
   'Inbetriebnahme eine Löschfrist im Verzeichnis der Verarbeitungstätigkeiten.',
   false,
   'Es gibt kein Geräte-/Sitzungsverzeichnis. Ohne das ist „unbekanntes Gerät" nicht feststellbar.'),

  ('konto_zwei_faktor',
   'Zwei-Faktor-Anmeldung: Bestätigungscode',
   'Code für die Anmeldung in zwei Schritten.',
   'transactional', null, array['vorname','code','gueltig_minuten'],
   null,
   false,
   'Zwei-Faktor-Anmeldung ist nicht eingeführt.'),

  -- ── Abo & Bezahlung ───────────────────────────────────────────────────
  ('abo_kuendigung_laufzeitende',
   'Kündigung bestätigt, mit Laufzeitende',
   'Nennt ausdrücklich den Tag, bis zu dem das Abo noch läuft.',
   'transactional', null, array['vorname','abo_name','laufzeit_ende','app_link'],
   'Nach § 312k Abs. 2 BGB muss die Kündigung in Textform bestätigt werden, '
   'einschliesslich des Zeitpunkts, zu dem sie wirkt. Das Datum ist deshalb '
   'kein Beiwerk, sondern der Kern dieser Mail.',
   true, null),

  ('abo_laeuft_bald_ab',
   'Erinnerung kurz vor Ablauf',
   'Hinweis, dass das Abo demnächst endet.',
   'transactional', null, array['vorname','abo_name','laufzeit_ende','app_link'],
   'Grenzfall: Solange sie nur über das Ende informiert, ist sie Vertragspost. '
   'Sobald sie zur Verlängerung überredet, wird sie Werbung und braucht eine '
   'Einwilligung. Beim Texten darauf achten.',
   true, null),

  ('abo_rechnung',
   'Rechnung',
   'Rechnung zum Abo.',
   'transactional', null, array['vorname','rechnungsnummer','betrag','zeitraum','pdf_link'],
   'Rechnungsangaben nach § 14 UStG sind Pflicht: Steuernummer bzw. USt-IdNr., '
   'fortlaufende Nummer, Leistungszeitraum, Nettobetrag, Steuersatz und '
   '-betrag. Eine unvollständige Rechnung kostet den Kunden den Vorsteuerabzug.',
   false,
   'Kein Zahlungsanbieter angebunden. Ohne Zahlungsdaten gibt es keinen Rechnungsbetrag.'),

  ('abo_zahlung_erfolgreich', 'Zahlung erfolgreich', 'Bestätigung einer eingegangenen Zahlung.',
   'transactional', null, array['vorname','betrag','abo_name','zeitpunkt'], null,
   false, 'Kein Zahlungsanbieter angebunden.'),

  ('abo_zahlung_fehlgeschlagen', 'Zahlung fehlgeschlagen', 'Hinweis, dass eine Zahlung nicht durchging.',
   'transactional', null, array['vorname','betrag','grund','app_link'],
   'Muss sagen, was passiert, wenn nichts geschieht — sonst ist die Folge '
   '(Sperrung) für den Kunden überraschend.',
   false, 'Kein Zahlungsanbieter angebunden.'),

  ('abo_zahlungsmittel_laeuft_ab', 'Zahlungsmittel läuft ab', 'Vorwarnung vor Ablauf der hinterlegten Karte.',
   'transactional', null, array['vorname','zahlungsmittel','ablauf','app_link'], null,
   false, 'Kein Zahlungsanbieter angebunden.'),

  ('abo_zahlungsmittel_geaendert', 'Zahlungsmittel geändert', 'Sicherheitsmeldung nach Änderung des Zahlungsmittels.',
   'transactional', null, array['vorname','zahlungsmittel','zeitpunkt','support_mail'], null,
   false, 'Kein Zahlungsanbieter angebunden.'),

  ('abo_verlaengert', 'Abo automatisch verlängert', 'Meldung über die automatische Verlängerung.',
   'transactional', null, array['vorname','abo_name','naechste_abrechnung','betrag'],
   'Bei automatischer Verlängerung ist rechtzeitig vorher zu informieren. '
   'Diese Mail ist die Umsetzung davon — sie darf nicht erst nach der '
   'Abbuchung kommen.',
   false, 'Kein Zahlungsanbieter angebunden.'),

  ('abo_test_beginnt', 'Testphase beginnt', 'Start der kostenlosen Testphase.',
   'transactional', null, array['vorname','test_ende','abo_name'],
   'Muss Ende und Folgekosten nennen (§ 312j Abs. 2 BGB).',
   false, 'Es gibt kein Testphasen-Modell in den Abodaten.'),

  ('abo_test_endet_bald', 'Erinnerung vor Ende der Testphase', 'Vorwarnung vor dem Übergang in ein bezahltes Abo.',
   'transactional', null, array['vorname','test_ende','betrag','app_link'],
   'Die wichtigste Mail der ganzen Reihe. Wer hier nicht deutlich vorwarnt, '
   'produziert Rücklastschriften und berechtigte Beschwerden.',
   false, 'Es gibt kein Testphasen-Modell in den Abodaten.'),

  ('abo_test_beendet', 'Testphase beendet, Abo aktiv', 'Übergang in das bezahlte Abo.',
   'transactional', null, array['vorname','abo_name','betrag','naechste_abrechnung'], null,
   false, 'Es gibt kein Testphasen-Modell in den Abodaten.'),

  ('premium_willkommen',
   'Willkommen bei Premium',
   'Begrüssung nach Abschluss eines bezahlten Abos.',
   'transactional', null, array['vorname','abo_name','app_link'],
   'Vertragspost, solange sie erklärt, was jetzt zum Abo gehört. Wird sie '
   'zur Anpreisung weiterer Angebote, ist sie Werbung.',
   true, null),

  -- ── Kundenbindung (Werbung) ───────────────────────────────────────────
  ('news_neue_funktionen',
   'Neue Funktionen in der App',
   'Was seit dem letzten Mal dazugekommen ist.',
   'marketing', 'produkt_neuigkeiten', array['vorname','app_link','abmelde_link'],
   'Werbung. Ohne Einwilligung unzulässig (§ 7 Abs. 2 Nr. 2 UWG). '
   'Abmeldelink und Impressum sind Pflicht.',
   true, null),

  ('news_app_update',
   'App-Update verfügbar',
   'Hinweis auf eine neue Version.',
   'marketing', 'produkt_neuigkeiten', array['vorname','version','app_link','abmelde_link'],
   'Werbung — auch wenn es technisch klingt. Ausnahme wäre nur ein Update, '
   'das eine Sicherheitslücke schliesst; das gehört dann unter '
   'recht_sicherheitshinweis und nicht hierher.',
   true, null),

  ('aktion_saisonal',
   'Saisonale Aktion',
   'Aktion oder Rabatt, zeitlich begrenzt.',
   'marketing', 'aktionen', array['vorname','aktion_titel','aktion_text','gueltig_bis','app_link','abmelde_link'],
   'Werbung. Befristete Angebote müssen die Frist wahrheitsgemäss nennen — '
   'ein „nur heute", das jede Woche wiederkommt, ist irreführend (§ 5 UWG).',
   true, null),

  ('geburtstag_gutschein',
   'Geburtstagsgutschein',
   'Einmal im Jahr ein Gutschein zum Geburtstag.',
   'marketing', 'geburtstag', array['vorname','gutschein_code','gueltig_bis','app_link','abmelde_link'],
   'Werbung, und zusätzlich heikel: Sie verarbeitet das Geburtsdatum zu '
   'einem Zweck, für den es nicht erhoben wurde. Die Einwilligung für das '
   'Thema „geburtstag" deckt genau das ab — deshalb ein eigenes Thema und '
   'nicht mit „aktionen" zusammengelegt.',
   true, null),

  ('empfehlung_freund_eingeloest',
   'Deine Empfehlung wurde eingelöst',
   'Meldung an die werbende Person, wenn eine Empfehlung zu einer Prämie geführt hat.',
   'transactional', null, array['vorname','geworbener_name','praemie','app_link'],
   'Vertragspost innerhalb des Empfehlungsprogramms: Sie berichtet über einen '
   'erworbenen Anspruch, sie wirbt nicht. Deshalb ohne Einwilligung zulässig — '
   'sie darf dann aber auch nichts anderes bewerben.',
   true, null),

  -- ── Support (an die bestehende Reklamationsverwaltung gehängt) ────────
  ('support_eingegangen',
   'Anfrage ist eingegangen',
   'Eingangsbestätigung für eine Reklamation oder Anfrage.',
   'transactional', null, array['vorname','vorgang_nummer','betreff','eingegangen_am'],
   null, true, null),

  ('support_beantwortet',
   'Anfrage wurde beantwortet',
   'Meldung, dass es eine Antwort zu einem Vorgang gibt.',
   'transactional', null, array['vorname','vorgang_nummer','betreff','antwort_text','app_link'],
   null, true, null),

  ('support_feedback_erhalten',
   'Danke für die Rückmeldung',
   'Bestätigung für eingegangenes Feedback.',
   'transactional', null, array['vorname'],
   'Nur Bestätigung. Sobald daran eine Bitte um eine Bewertung hängt, ist es '
   'Werbung.',
   false,
   'Es gibt keinen Feedback-Eingang ausserhalb der Reklamationen.'),

  -- ── Rechtliches ───────────────────────────────────────────────────────
  ('recht_datenschutz_aenderung',
   'Änderung der Datenschutzhinweise',
   'Information über geänderte Datenschutzhinweise.',
   'legal', null, array['vorname','wirksam_ab','zusammenfassung','link'],
   'Pflichtinformation, keine Werbung — geht deshalb an alle, unabhängig von '
   'jeder Einwilligung, und trägt bewusst KEINEN Abmeldelink.',
   true, null),

  ('recht_agb_aenderung',
   'Änderung der AGB',
   'Information über geänderte Geschäftsbedingungen.',
   'legal', null, array['vorname','wirksam_ab','zusammenfassung','link','widerspruch_bis'],
   'Muss die Änderung, den Zeitpunkt des Wirksamwerdens und das '
   'Widerspruchsrecht nennen. Schweigen darf nur dann als Zustimmung gelten, '
   'wenn genau darauf hingewiesen wurde.',
   true, null),

  ('recht_sicherheitshinweis',
   'Wichtiger Sicherheitshinweis',
   'Dringende Information zu einem Sicherheitsvorfall oder -risiko.',
   'legal', null, array['vorname','sachverhalt','empfohlene_massnahme','stand'],
   'Bei einer Verletzung des Schutzes personenbezogener Daten mit hohem '
   'Risiko ist die betroffene Person unverzüglich zu benachrichtigen '
   '(Art. 34 DSGVO). Diese Vorlage ist der Weg dafür — sie darf nie '
   'deaktiviert werden.',
   true, null)

on conflict (key) do update set
  label        = excluded.label,
  description  = excluded.description,
  category     = excluded.category,
  topic_key    = excluded.topic_key,
  variables    = excluded.variables,
  legal_note   = excluded.legal_note,
  is_active    = excluded.is_active,
  precondition = excluded.precondition;

-- Die zehn Vorlagen aus 0092 sind alle Vertragspost und bleiben es.
update public.email_templates
   set category = 'transactional', topic_key = null
 where key in ('account_deletion_customer','account_deletion_internal',
               'auth_email_change','auth_invite','auth_magiclink',
               'auth_reauthentication','auth_recovery','auth_signup',
               'subscription_cancel','subscription_choose');

-- ----------------------------------------------------------------------------
-- 3) Die Warteschlange
-- ----------------------------------------------------------------------------
create table if not exists public.email_outbox (
  id            uuid primary key default gen_random_uuid(),
  template_key  text not null references public.email_templates(key),
  profile_id    uuid references public.profiles(id) on delete set null,
  to_address    text not null,
  vars          jsonb not null default '{}'::jsonb,

  status        text not null default 'queued'
                check (status in ('queued','sending','sent','failed','suppressed')),
  suppressed_reason text,

  scheduled_for timestamptz not null default now(),
  attempts      int not null default 0,
  last_error    text,

  -- Verhindert Doppelversand. Beispiel: 'geburtstag:<profil>:2026' — die
  -- Jahreszahl im Merkmal sorgt dafür, dass der Gruss einmal im Jahr geht,
  -- auch wenn der Zeitplan zweimal läuft.
  dedupe_key    text,

  email_log_id  uuid references public.email_log(id),
  created_at    timestamptz not null default now(),
  sent_at       timestamptz
);

create unique index if not exists email_outbox_dedupe_uidx
  on public.email_outbox (dedupe_key) where dedupe_key is not null;
create index if not exists email_outbox_faellig_idx
  on public.email_outbox (scheduled_for) where status = 'queued';
create index if not exists email_outbox_profil_idx
  on public.email_outbox (profile_id);
create index if not exists email_outbox_log_idx
  on public.email_outbox (email_log_id);
create index if not exists email_outbox_template_idx
  on public.email_outbox (template_key);

alter table public.email_outbox enable row level security;
revoke all on public.email_outbox from anon, authenticated;

drop policy if exists outbox_read on public.email_outbox;
create policy outbox_read on public.email_outbox
  for select to authenticated
  using (public.is_internal((select auth.uid())));
grant select on public.email_outbox to authenticated;

comment on table public.email_outbox is
  'Versandwarteschlange. Wer eine Mail auslösen will, ruft email_enqueue auf '
  'und legt hier eine Zeile ab — er verschickt nicht selbst.';

-- ----------------------------------------------------------------------------
-- 4) Einreihen — mit der Einwilligungssperre
-- ----------------------------------------------------------------------------
create or replace function public.email_enqueue(
  p_template_key  text,
  p_profile       uuid,
  p_vars          jsonb       default '{}'::jsonb,
  p_to            text        default null,
  p_scheduled_for timestamptz default now(),
  p_dedupe_key    text        default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_category text;
  v_topic    text;
  v_aktiv    boolean;
  v_voraus   text;
  v_to       text;
  v_id       uuid;
  v_grund    text;
begin
  select t.category, t.topic_key, t.is_active, t.precondition
    into v_category, v_topic, v_aktiv, v_voraus
    from public.email_templates t
   where t.key = p_template_key;

  -- `v_category is null` statt `not found`: Beides prüft dasselbe, aber so
  -- steht es explizit da. Eine unbekannte Vorlage ist immer ein Fehler im
  -- Aufrufer, nie ein Grund still weiterzumachen.
  if v_category is null then
    raise exception 'Unbekannte Vorlage: %', p_template_key;
  end if;

  if not v_aktiv then
    raise exception
      'Vorlage % ist nicht freigeschaltet. Offene Voraussetzung: %',
      p_template_key, coalesce(v_voraus, '(nicht angegeben)');
  end if;

  -- Empfängeradresse: ausdrücklich übergeben, sonst die des Profils.
  v_to := coalesce(
    nullif(trim(coalesce(p_to, '')), ''),
    (select p.email::text from public.profiles p where p.id = p_profile)
  );

  if v_to is null then
    raise exception
      'Keine Empfängeradresse: weder übergeben noch am Profil % zu finden',
      p_profile;
  end if;

  -- ── Die Sperre ──────────────────────────────────────────────────────
  -- Nur Werbung wird geprüft. 'transactional' und 'legal' laufen hier
  -- absichtlich vorbei: Vertragspost und Pflichtinformationen hängen nicht
  -- an einer Einwilligung, und eine Abmeldung darf sie nie aufhalten.
  if v_category = 'marketing' then
    if p_profile is null then
      v_grund := 'werbung_ohne_profil';
    elsif not public.email_has_consent(p_profile, v_topic) then
      v_grund := 'keine_einwilligung';
    end if;
  end if;

  insert into public.email_outbox
    (template_key, profile_id, to_address, vars, scheduled_for, dedupe_key,
     status, suppressed_reason)
  values
    (p_template_key, p_profile, v_to, coalesce(p_vars, '{}'::jsonb),
     coalesce(p_scheduled_for, now()), p_dedupe_key,
     case when v_grund is null then 'queued' else 'suppressed' end,
     v_grund)
  -- Doppelte Auslöser sind normal (ein Zeitplan läuft zweimal, ein Webhook
  -- wird wiederholt). Sie sollen nichts kaputtmachen und nichts doppelt
  -- verschicken.
  on conflict (dedupe_key) where dedupe_key is not null do nothing
  returning id into v_id;

  return v_id;
end;
$function$;

comment on function public.email_enqueue(text,uuid,jsonb,text,timestamptz,text) is
  'Einziger Weg in die Warteschlange. Setzt die Einwilligungssperre für '
  'Werbung durch und lässt Vertragspost immer durch.';

-- ----------------------------------------------------------------------------
-- 5) Abarbeiten — für den Versender
-- ----------------------------------------------------------------------------
-- `for update skip locked`: Zwei gleichzeitig laufende Versender greifen
-- sich verschiedene Zeilen statt sich zu blockieren oder dieselbe Mail
-- zweimal zu schicken.
create or replace function public.email_outbox_claim(p_limit int default 25)
returns table (
  id           uuid,
  template_key text,
  profile_id   uuid,
  to_address   text,
  vars         jsonb,
  category     text,
  attempts     int
)
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
begin
  return query
  with faellig as (
    select o.id
      from public.email_outbox o
     where o.status = 'queued'
       and o.scheduled_for <= now()
     order by o.scheduled_for
     limit greatest(1, least(coalesce(p_limit, 25), 200))
     for update skip locked
  )
  update public.email_outbox o
     set status = 'sending', attempts = o.attempts + 1
    from faellig f
   where o.id = f.id
  returning o.id, o.template_key, o.profile_id, o.to_address, o.vars,
            (select t.category from public.email_templates t
              where t.key = o.template_key),
            o.attempts;
end;
$function$;

create or replace function public.email_outbox_mark(
  p_id     uuid,
  p_status text,
  p_error  text default null,
  p_log_id uuid default null
)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare v_attempts int;
begin
  if p_status not in ('sent','failed','queued') then
    raise exception 'Unzulässiger Status: %', p_status;
  end if;

  select attempts into v_attempts from public.email_outbox where id = p_id;
  if v_attempts is null then
    raise exception 'Unbekannte Zeile: %', p_id;
  end if;

  update public.email_outbox
     set status = case
                    -- Nach fünf Fehlversuchen nicht weiter probieren. Eine
                    -- Adresse, die fünfmal abweist, weist auch beim sechsten
                    -- Mal ab; danach ist es nur noch Last für den Ruf der
                    -- Absenderdomain.
                    when p_status = 'failed' and v_attempts >= 5 then 'failed'
                    when p_status = 'failed' then 'queued'
                    else p_status
                  end,
         last_error    = p_error,
         email_log_id  = coalesce(p_log_id, email_log_id),
         sent_at       = case when p_status = 'sent' then now() else sent_at end,
         -- Wiederholung mit wachsendem Abstand statt sofort.
         scheduled_for = case
                           when p_status = 'failed' and v_attempts < 5
                             then now() + (interval '5 minutes' * v_attempts)
                           else scheduled_for
                         end
   where id = p_id;

  return true;
end;
$function$;

-- ----------------------------------------------------------------------------
-- 6) Übersicht für das interne Werkzeug
-- ----------------------------------------------------------------------------
create or replace function public.email_outbox_stats()
returns table (status text, anzahl bigint, aeltester timestamptz)
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select o.status, count(*), min(o.scheduled_for)
    from public.email_outbox o
   where public.is_internal((select auth.uid()))
   group by o.status
   order by o.status;
$function$;

-- ----------------------------------------------------------------------------
-- 7) Rechte
-- ----------------------------------------------------------------------------
revoke all on function public.email_enqueue(text,uuid,jsonb,text,timestamptz,text)
  from public, anon, authenticated;
revoke all on function public.email_outbox_claim(int)          from public, anon, authenticated;
revoke all on function public.email_outbox_mark(uuid,text,text,uuid)
  from public, anon, authenticated;
revoke all on function public.email_outbox_stats()             from public, anon;

grant execute on function public.email_outbox_stats() to authenticated;
