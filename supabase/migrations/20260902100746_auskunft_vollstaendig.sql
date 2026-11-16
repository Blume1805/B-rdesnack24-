-- ===========================================================================
-- R-13 / CUST-017: Die Auskunft nach Art. 15 DSGVO wird vollständig.
--
-- `export_my_data()` gibt es seit Wochen. Sie deckte **9 von 35** Tabellen
-- ab, die einen Personenbezug auf ein Konto tragen. Nicht enthalten waren
-- unter anderem: Rechnungen, Zahlungen, Positionen der Käufe, Abo-Historie,
-- persönliche Angebote, Bewertungen, Loyalty-Gutschriften, Benachrichtigungen,
-- Einwilligungsverlauf, versandte E-Mails, Reklamationen, Empfehlungen,
-- Spendenstimmen, Anmeldetage und der Löschantrag selbst.
--
-- Art. 15 Abs. 3 DSGVO verlangt eine Kopie **der** personenbezogenen Daten,
-- die verarbeitet werden — nicht eine Auswahl davon. Eine Auskunft, die die
-- Hälfte weglässt, ist keine.
--
-- ZWEI DINGE BLEIBEN BEWUSST DRAUSSEN, und zwar nicht aus Bequemlichkeit:
--
--   `customer_card.token` und `email_unsubscribe_token.token` sind
--   Geheimnisse, mit denen man die Karte bzw. die Abmeldung eines Kontos
--   bedienen kann. Dass sie zu dieser Person gehören, macht sie nicht zu
--   Auskunftsinhalt — ein Auskunftsdokument wandert per Mail, liegt im
--   Download-Ordner und wird weitergeleitet. Ausgegeben wird deshalb, DASS
--   es sie gibt und seit wann, nicht ihr Wert. Wer die Karte braucht,
--   bekommt sie über die App, nicht über die Auskunft.
--
-- Interne Personendaten (`user_permissions`, `partner_signatures`) bleiben
-- ebenfalls draußen: Sie betreffen Beschäftigte in ihrer Rolle, nicht
-- Kunden, und sind über die Verwaltung zugänglich.
-- ===========================================================================

create or replace function public.export_my_data()
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare uid uuid := auth.uid(); result jsonb;
begin
  if uid is null then raise exception 'Nicht angemeldet' using errcode='42501'; end if;

  select jsonb_build_object(
    'erzeugt_am', now(),
    'hinweis', 'Auskunft nach Art. 15 DSGVO. Enthält alle zu diesem Konto '
             || 'gespeicherten personenbezogenen Daten. Nicht enthalten sind '
             || 'Geheimnisse (Kartentoken, Abmeldetoken) — von ihnen wird nur '
             || 'vermerkt, dass sie bestehen.',

    -- Stammdaten
    'profil',            (select to_jsonb(p) from public.profiles p where p.id = uid),
    'kundendaten',       (select to_jsonb(c) from public.customers c where c.id = uid),

    -- Einwilligungen und Kommunikation
    'einwilligungen',    coalesce((select jsonb_agg(to_jsonb(c) order by c.created_at) from public.consents c where c.profile_id = uid), '[]'::jsonb),
    'einwilligungsverlauf', coalesce((select jsonb_agg(to_jsonb(e) order by e.occurred_at) from public.email_consent_event e where e.profile_id = uid), '[]'::jsonb),
    'versandte_nachrichten', coalesce((select jsonb_agg(jsonb_build_object(
                              'vorlage', o.template_key, 'an', o.to_address, 'status', o.status,
                              'unterdrueckt_weil', o.suppressed_reason,
                              'geplant_fuer', o.scheduled_for, 'versandt_am', o.sent_at)
                              order by o.created_at) from public.email_outbox o where o.profile_id = uid), '[]'::jsonb),
    'benachrichtigungen', coalesce((select jsonb_agg(to_jsonb(n) order by n.sent_at) from public.notifications n where n.user_id = uid), '[]'::jsonb),
    'gelesene_hinweise', coalesce((select jsonb_agg(to_jsonb(r)) from public.customer_notification_reads r where r.customer_id = uid), '[]'::jsonb),
    'kontaktnachrichten', coalesce((select jsonb_agg(to_jsonb(m) order by m.created_at) from public.contact_messages m where m.customer_id = uid), '[]'::jsonb),

    -- Käufe, Belege, Zahlungen
    'kaeufe',            coalesce((select jsonb_agg(to_jsonb(p) || jsonb_build_object(
                              'positionen', coalesce((select jsonb_agg(to_jsonb(pi)) from public.purchase_items pi where pi.purchase_id = p.id), '[]'::jsonb))
                              order by p.purchased_at) from public.purchases p where p.customer_id = uid), '[]'::jsonb),
    'rechnungen',        coalesce((select jsonb_agg(to_jsonb(i) order by i.issued_at) from public.invoices i where i.customer_id = uid), '[]'::jsonb),
    'zahlungen',         coalesce((select jsonb_agg(to_jsonb(z) order by z.created_at) from public.payments z where z.payer_profile_id = uid), '[]'::jsonb),
    'reklamationen',     coalesce((select jsonb_agg(to_jsonb(k) order by k.created_at) from public.purchase_complaints k where k.customer_id = uid), '[]'::jsonb),
    'individuelle_preise', coalesce((select jsonb_agg(to_jsonb(cp)) from public.customer_prices cp where cp.customer_id = uid), '[]'::jsonb),

    -- Abo
    'abo_verlauf',       coalesce((select jsonb_agg(to_jsonb(s) order by s.seq) from public.customer_subscriptions s where s.customer_id = uid), '[]'::jsonb),
    'store_abo',         coalesce((select jsonb_agg(to_jsonb(s) order by s.created_at) from public.store_subscription s where s.profile_id = uid), '[]'::jsonb),
    'kuendigungen',      coalesce((select jsonb_agg(to_jsonb(c) order by c.requested_at) from public.cancellation_requests c where c.customer_id = uid), '[]'::jsonb),

    -- Vorteile, Loyalty, Empfehlungen
    'persoenliche_angebote', coalesce((select jsonb_agg(to_jsonb(o) order by o.created_at) from public.personal_offers o where o.customer_id = uid), '[]'::jsonb),
    'aktivierte_angebote', coalesce((select jsonb_agg(to_jsonb(a) order by a.activated_at) from public.offer_activations a where a.customer_id = uid), '[]'::jsonb),
    'bonusstufen',       coalesce((select jsonb_agg(to_jsonb(l) order by l.granted_at) from public.loyalty_bonus_grants l where l.customer_id = uid), '[]'::jsonb),
    'challenge_gutschriften', coalesce((select jsonb_agg(to_jsonb(c) order by c.awarded_at) from public.customer_challenge_awards c where c.customer_id = uid), '[]'::jsonb),
    'anmeldetage',       coalesce((select jsonb_agg(to_jsonb(t) order by t.day) from public.customer_login_days t where t.customer_id = uid), '[]'::jsonb),
    'empfehlungen_fuer_mich', coalesce((select jsonb_agg(to_jsonb(r)) from public.recommendations r where r.customer_id = uid), '[]'::jsonb),
    'bewertungen',       coalesce((select jsonb_agg(to_jsonb(b) order by b.created_at) from public.product_ratings b where b.customer_id = uid), '[]'::jsonb),
    'spendenstimmen',    coalesce((select jsonb_agg(to_jsonb(d) order by d.created_at) from public.donation_votes d where d.customer_id = uid), '[]'::jsonb),
    'werbeklicks',       coalesce((select jsonb_agg(to_jsonb(k) order by k.day) from public.advertising_redirect_actors k where k.profile_id = uid), '[]'::jsonb),

    -- Empfehlungsprogramm
    'mein_empfehlungscode', (select to_jsonb(rc) from public.referral_codes rc where rc.owner_id = uid),
    'empfehlungen_von_mir', coalesce((select jsonb_agg(to_jsonb(r) order by r.registered_at) from public.referrals r where r.referrer_id = uid), '[]'::jsonb),
    'empfehlung_die_mich_warb', (select to_jsonb(r) from public.referrals r where r.referee_id = uid),
    'empfehlungspraemien', coalesce((select jsonb_agg(to_jsonb(rw) order by rw.granted_at) from public.referral_rewards rw where rw.profile_id = uid), '[]'::jsonb),

    -- Firmenzugehörigkeit
    'firmenmitgliedschaften', coalesce((select jsonb_agg(jsonb_build_object(
                              'firma', b.name, 'rolle', m.role, 'status', m.status, 'seit', m.activated_at))
                              from public.business_members m join public.businesses b on b.id = m.business_id
                              where m.profile_id = uid), '[]'::jsonb),

    -- Geräte, Karte, Löschantrag
    'geraete',           coalesce((select jsonb_agg(jsonb_build_object('plattform', d.platform, 'angelegt', d.created_at, 'zuletzt_gesehen', d.last_seen)) from public.device_tokens d where d.user_id = uid), '[]'::jsonb),
    'kundenkarte',       (select jsonb_build_object('besteht_seit', k.issued_at, 'zuletzt_erneuert', k.rotated_at)
                            from public.customer_card k where k.customer_id = uid),
    'abmeldetoken_besteht', exists (select 1 from public.email_unsubscribe_token t where t.profile_id = uid),
    'loeschantraege',    coalesce((select jsonb_agg(to_jsonb(a) order by a.requested_at) from public.account_deletion_requests a where a.profile_id = uid), '[]'::jsonb),

    -- Beschäftigtendaten, soweit vorhanden
    'ifsg_belehrungen',  coalesce((select jsonb_agg(to_jsonb(b) order by b.created_at) from public.ifsg_briefings b where b.profile_id = uid), '[]'::jsonb),
    'schulungen',        coalesce((select jsonb_agg(to_jsonb(t)) from public.employee_trainings t where t.profile_id = uid), '[]'::jsonb)
  ) into result;

  return result;
end;
$function$;

comment on function public.export_my_data() is
  'Auskunft nach Art. 15 DSGVO. Deckt seit dem 02.09.2026 alle Tabellen mit '
  'Personenbezug ab (vorher 9 von 35). Geheimnisse — Kartentoken, '
  'Abmeldetoken — werden nur dem Bestehen nach ausgewiesen, nicht dem Wert '
  'nach: Ein Auskunftsdokument wandert per Mail und liegt im Download-Ordner.';

do $$
declare
  v_bereiche int;
  v_probe    jsonb;
  v_konto    uuid;
  v_geheim   text;
begin
  -- Eine Zusicherung, die nichts prueft, ist schlimmer als keine: Der erste
  -- Anlauf dieser Migration trug genau so eine, und die Funktion war dabei
  -- kaputt (falsche Sortierspalte). Deshalb wird hier tatsaechlich
  -- aufgerufen - in der Haut eines echten Kontos.
  select id into v_konto from public.profiles
   where role = 'customer' and deleted_at is null order by created_at limit 1;

  if v_konto is null then
    raise notice 'R-13: kein Kundenkonto vorhanden, Aufrufprobe uebersprungen.';
    return;
  end if;

  perform set_config('request.jwt.claims', json_build_object('sub', v_konto, 'role', 'authenticated')::text, true);
  v_probe := public.export_my_data();
  perform set_config('request.jwt.claims', '', true);

  select count(*) into v_bereiche from jsonb_object_keys(v_probe);
  if v_bereiche < 30 then
    raise exception 'Die Auskunft nennt nur % Bereiche, erwartet mindestens 30', v_bereiche;
  end if;

  -- Kein Kartentoken im Auskunftsdokument.
  select token into v_geheim from public.customer_card where customer_id = v_konto;
  if v_geheim is not null and v_probe::text like '%'||v_geheim||'%' then
    raise exception 'Der Kartentoken steht in der Auskunft';
  end if;

  raise notice 'R-13: Auskunft liefert % Bereiche, ohne Geheimnisse.', v_bereiche;
end $$;
