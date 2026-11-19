-- ============================================================================
-- Test-Freigaben vom Juli 2026 löschen (Entscheidung Philipp 19.11.2026)
--
-- Philipp: „Das waren alles nur Test-Dokumente, die freigegeben werden
-- sollten. Die ursprünglichen Dokumente bleiben erhalten, müssen aber nicht
-- freigegeben werden."
--
-- Gelöscht: die 9 Freigaben vom 14./15.07.2026 (5 freigegeben, 4 abgelehnt;
-- angefordert und entschieden von inzwischen gelöschten Demo-Konten) samt
-- ihren 9 Entscheidungen (Fremdschlüssel mit ON DELETE CASCADE). Es gibt keine
-- Freigabe nach Juli. Das Änderungsprotokoll (trg_audit) hält die Löschung fest.
--
-- NICHT gelöscht: alle Dokumente und ihre Dateien. Zwei der Freigaben verweisen
-- als Entwurf auf Original-Dateien im Speicher `documents` (Hygienekonzept als
-- Word-Datei, IfSG-Belehrung als PDF); diese bleiben.
-- Die 5 unterschriebenen Test-PDFs im Speicher `signed-documents` lassen sich
-- nicht per SQL löschen (die Datei bliebe verwaist liegen); sie werden über
-- den Speicherdienst gelöscht (Runbook U).
--
-- Abgrenzung über feste Kennungen, zusätzlich gesichert über Zeitraum und
-- Status: Eine Freigabe, die nach Juli angelegt wurde oder noch offen ist,
-- wird nie getroffen. Im lokalen Nachbau gibt es die Kennungen nicht; dort
-- löscht die Migration nichts.
-- Unumkehrbar (gewollt). Ein Datenwert, kein Schema: Fingerabdruck unverändert.
-- ============================================================================

delete from public.document_approvals a
 where a.id in (
         'b60d2a13-b236-4722-b34d-3f1e6bd34f39', -- Inventur 15.04.–14.07.2026 (abgelehnt)
         '82c5774a-39d0-4791-bea2-7028c66f971d', -- Inventur 15.04.–14.07.2026 (abgelehnt)
         'c9da24bd-f377-42ec-9b70-30443a38c4e8', -- Inventur 15.04.–14.07.2026 (freigegeben)
         '1aee8e6d-9d27-4ac1-bb1c-e7198bdd924b', -- Wartung Juli (abgelehnt)
         '604bbbb6-2bbd-4d36-9a65-9a0a2f2d67a3', -- Wartung Juli (freigegeben)
         '7443a00a-5eef-4a1f-b5c2-eb00fded8726', -- Vernichtung Juli (abgelehnt)
         '38ba153c-b0f1-47a7-89d9-56adb3520974', -- Vernichtung Juli (freigegeben)
         'e70b3fbd-1c40-41bc-b35d-3adb7f557e0c', -- Hygienekonzept v1 (freigegeben)
         '21ac46a4-a03f-4db7-9d70-643d35ac8cd5'  -- Belehrung § 43 IfSG v1 (freigegeben)
       )
   and a.requested_at < timestamptz '2026-08-01 00:00+00'
   and a.status::text in ('approved', 'rejected');
