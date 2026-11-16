-- 0138 — Telefon stand doppelt: fünf Belege, die es in sevDesk nicht mehr gibt.
-- Vollständige Begründung in supabase/migrations/0138_in_sevdesk_geloeschte_belege.sql
update public.finance_bookings
   set deleted_at = now()
 where source = 'sevdesk'
   and deleted_at is null
   and source_ref in (
     '153209946-209405904',
     '153209957-209405916',
     '153209964-209405923',
     '153209970-209405930',
     '153209974-209405935'
   );
