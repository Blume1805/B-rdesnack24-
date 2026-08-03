-- ============================================================================
-- 0087 · Die Rolle kommt nicht mehr aus fremder Hand
-- ----------------------------------------------------------------------------
-- WORUM ES GEHT: `app.handle_new_user` hat die Rolle des neuen Nutzers aus
-- `raw_user_meta_data` übernommen. Bei einer Selbstregistrierung stammt
-- dieses Feld vollständig aus dem Browser — der Anmeldende bestimmte also
-- selbst, mit welcher Rolle seine Profilzeile entsteht. Wer sich mit
--
--     { "role": "system_admin" }
--
-- registrierte, bekam eine Profilzeile mit genau dieser Rolle.
--
-- Geschützt hat davor allein `status`, den der Trigger für interne Rollen
-- auf 'invited' setzt. Das ist eine wirksame Bremse — aber nur an den
-- Stellen, die `status` auch auswerten. Genau daran hakte es:
--
--   * 0079 musste 23 RLS-Policies und 3 Funktionen nachrüsten, weil sie
--     nur `role` prüften.
--   * Danach fanden sich sechs Edge Functions mit demselben Muster
--     (`select("role")` ohne `status`) — darunter `email-send`, über die
--     sich beliebige Post von noreply@boerdesnack24.de verschicken ließ.
--
-- Das ist kein Zufall, sondern die Bauart: Solange eine erfundene Rolle
-- überhaupt in `profiles` landen kann, ist jede Lesestelle im ganzen
-- System eine potenzielle Lücke, und man schließt sie nur so schnell, wie
-- man sie findet. Diese Migration setzt eine Ebene tiefer an.
--
-- DIE ÄNDERUNG: Die Rolle aus den Metadaten gilt nur noch, wenn
-- `new.invited_at` gesetzt ist. GoTrue setzt dieses Feld genau dann, wenn
-- der Nutzer über `inviteUserByEmail` angelegt wurde — im Projekt
-- ausschliesslich über die Edge Function `invite-user`
-- (supabase/functions/invite-user/index.ts:95), die vorher die
-- Berechtigung des Einladenden prüft. Bei jedem anderen Weg, und damit bei
-- jeder Selbstregistrierung, ist die Rolle fest 'customer'.
--
-- Der Einladungsweg bleibt unverändert: Status 'invited', kein
-- `activated_at`, die Aktivierung passiert weiterhin gesondert.
--
-- NACHGEWIESEN in einer zurückgerollten Transaktion, beide Wege in einem
-- Durchlauf:
--
--   | Fall                          | rolle_im_profil | status | intern |
--   |-------------------------------|-----------------|--------|--------|
--   | A · Selbstregistrierung mit   | customer        | active | false  |
--   |     role: 'system_admin'      |                 |        |        |
--   | B · Einladung mit             | employee        | invited| false  |
--   |     role: 'employee'          |                 |        |        |
--
-- Fall A ist der Angriff: die gewünschte Rolle wird verworfen.
-- Fall B muss funktionieren und tut es.
--
-- WAS DAS FÜR DIE EDGE FUNCTIONS BEDEUTET, offen gesagt: Von den sechs
-- Functions mit der `status`-blinden Prüfung sind zum Zeitpunkt dieser
-- Migration drei ausgerollt (email-send, docusign-fetch-signature,
-- signature-retouch) und drei im Repository korrigiert, aber noch nicht
-- deployed (documents-init-templates, documents-install-branded-set,
-- documents-install-haccp-set). Diese Migration macht deren Prüfung nicht
-- überflüssig — sie entzieht ihr nur die Angreifbarkeit, weil die
-- gefälschte Rolle gar nicht mehr in `profiles` entstehen kann. Die
-- Prüfungen dort bleiben trotzdem richtig und werden nachgezogen; zwei
-- unabhängige Schranken sind hier das Ziel, nicht eine.
--
-- Der Funktionskörper wird vollständig neu geschrieben statt gepatcht,
-- damit diese Datei allein die gültige Fassung zeigt.
-- ============================================================================

create or replace function app.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_meta jsonb := new.raw_user_meta_data;
  v_type app.customer_type := coalesce((v_meta->>'customer_type')::app.customer_type, 'private');
  -- Die Rolle aus den Metadaten gilt NUR bei einer Einladung.
  --
  -- Bei einer Selbstregistrierung kommen diese Daten vollständig vom
  -- Browser. Wer sich mit role: 'system_admin' anmeldete, bekam eine
  -- Profilzeile mit dieser Rolle — geschützt hat allein `status`, und den
  -- hat nicht jeder Leser ausgewertet (0079 in der Datenbank, danach sechs
  -- Edge Functions). Statt diese Prüfung an jeder Lesestelle nachzurüsten,
  -- wird die Rolle hier gar nicht erst aus fremder Hand übernommen.
  --
  -- GoTrue setzt `invited_at` genau dann, wenn der Nutzer über
  -- `inviteUserByEmail` angelegt wurde — also über die Edge Function
  -- `invite-user`, die vorher Berechtigungen prüft. Nur dann zählt die
  -- Rolle aus dem Metadata.
  v_role app.role_key := case
    when new.invited_at is not null
      then coalesce((v_meta->>'role')::app.role_key, 'customer')
    else 'customer'
  end;
begin
  insert into public.profiles (id, email, full_name, birth_date, role, status, activated_at)
  values (
    new.id,
    new.email,
    coalesce(v_meta->>'full_name', null),
    case when v_meta ? 'birth_date' and length(v_meta->>'birth_date') = 10
         then (v_meta->>'birth_date')::date else null end,
    v_role,
    (case when v_role = 'customer' then 'active' else 'invited' end)::app.profile_status,
    case when v_role = 'customer' then now() else null end
  )
  on conflict (id) do nothing;

  if v_role = 'customer' then
    insert into public.customers (
      id, customer_type, company_name,
      billing_street, billing_zip, billing_city, billing_country,
      tax_number, vat_id
    ) values (
      new.id, v_type,
      nullif(v_meta->>'company_name',''),
      nullif(v_meta->>'billing_street',''),
      nullif(v_meta->>'billing_zip',''),
      nullif(v_meta->>'billing_city',''),
      coalesce(nullif(v_meta->>'billing_country',''), 'DE'),
      nullif(v_meta->>'tax_number',''),
      nullif(v_meta->>'vat_id','')
    )
    on conflict (id) do update
      set customer_type   = excluded.customer_type,
          company_name    = excluded.company_name,
          billing_street  = excluded.billing_street,
          billing_zip     = excluded.billing_zip,
          billing_city    = excluded.billing_city,
          billing_country = excluded.billing_country,
          tax_number      = excluded.tax_number,
          vat_id          = excluded.vat_id;
  end if;

  return new;
end;
$function$;

comment on function app.handle_new_user() is
  'Legt Profil (und bei Kunden die Kundenzeile) für einen neuen '
  'auth.users-Eintrag an. Die Rolle aus raw_user_meta_data wird nur bei '
  'gesetztem invited_at übernommen — bei Selbstregistrierung immer '
  'customer. Siehe Migration 0087.';
