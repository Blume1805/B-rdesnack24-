-- ============================================================================
-- Kontoname der Gesellschafterin an ihre Unterschrift angleichen
-- (Entscheidung Philipp 18.11.2026: „Ja angleichen").
--
-- Auf der Partner-Unterschrift steht der richtige Name; das Anmeldekonto
-- trug einen anderen. Übernommen wird der Name der Unterschrift, die nach
-- 20261118090000 am Gesellschafter-Konto hängt. Kein Name steht hier im
-- Klartext. Ohne zugeordnete Unterschrift (lokaler Nachbau) passiert nichts.
-- Rückweg: alten Namen per Migration wieder setzen (steht im audit_log).
-- ============================================================================

update public.profiles p
   set full_name = ps.full_name
  from public.partner_signatures ps
 where ps.profile_id = p.id
   and p.role = 'shareholder'
   and p.deleted_at is null
   and ps.full_name is not null
   and p.full_name is distinct from ps.full_name;
