-- ============================================================================
-- 0096 · auth.uid() einmal statt pro Zeile — und sechs fehlende FK-Indizes
-- ----------------------------------------------------------------------------
-- Aus dem Performance-Advisor (03.08.2026): 87 Befunde, kein ERROR. Zwei
-- Gruppen davon sind echte Arbeit wert, der Rest bewusst nicht — siehe
-- unten.
--
-- ----------------------------------------------------------------------------
-- 1) auth_rls_initplan — neun Policies
--
-- Steht `auth.uid()` blank in einer RLS-Bedingung, wertet Postgres den
-- Aufruf für JEDE geprüfte Zeile erneut aus. Schreibt man
-- `(select auth.uid())`, erkennt der Planer einen InitPlan: einmal
-- ausrechnen, Ergebnis wiederverwenden.
--
-- Das Ergebnis ist identisch — es geht ausschliesslich um die Laufzeit.
-- Bei den heutigen Datenmengen merkt das niemand; bei einer Tabelle mit
-- 100.000 Kaufreklamationen ist es der Unterschied zwischen einer
-- Abfrage und einer Beschwerde. Solche Dinge repariert man, solange sie
-- billig sind.
--
-- Betroffen sind die drei Tabellen aus der Lovable-Zuarbeit (0083, 0084)
-- und `purchase_complaints` (0057). Die eigenen neueren Policies
-- (`email_log`, `email_templates`) schreiben bereits `(select auth.uid())`.
--
-- ----------------------------------------------------------------------------
-- 2) unindexed_foreign_keys — sechs Stück
--
-- Ein Fremdschlüssel ohne Index bedeutet: Beim Löschen der referenzierten
-- Zeile durchsucht Postgres die abhängige Tabelle vollständig. Zwei der
-- sechs stammen aus dieser Sitzung (`donation_causes.verified_by`,
-- `email_templates.updated_by`) — nachgeholt.
--
-- ----------------------------------------------------------------------------
-- WAS BEWUSST NICHT GEMACHT WIRD
--
-- **42 × unused_index.** Diese Indizes sind „ungenutzt", weil in den
-- Tabellen kaum Daten stehen und der Planer bei kleinen Tabellen ohnehin
-- sequenziell liest. Sie jetzt zu löschen, hiesse die Vorsorge für den
-- Zustand abzubauen, auf den man hinarbeitet. Erneut ansehen, wenn echte
-- Verkäufe laufen — dann sagt die Statistik etwas.
--
-- **30 × multiple_permissive_policies.** Mehrere erlaubende Policies auf
-- derselben Tabelle werden alle ausgewertet und mit ODER verknüpft. Sie
-- zusammenzufassen wäre schneller, ändert aber die Bedeutung: Aus zwei
-- getrennt lesbaren Regeln („eigene Zeilen" / „intern") würde eine lange
-- Bedingung, die niemand mehr im Kopf prüfen kann. Nach den Funden dieser
-- Sitzung — 17 Funktionen mit einer Rollenprüfung, die stillschweigend
-- durchliess — ist Lesbarkeit an dieser Stelle mehr wert als Laufzeit.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- email_report_share
-- ----------------------------------------------------------------------------
alter policy "own shares insertable" on public.email_report_share
  with check (created_by = (select auth.uid()));

alter policy "own shares readable" on public.email_report_share
  using (created_by = (select auth.uid()));

alter policy "own shares updatable" on public.email_report_share
  using (created_by = (select auth.uid()))
  with check (created_by = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- email_report_share_access
-- ----------------------------------------------------------------------------
alter policy "own share access readable" on public.email_report_share_access
  using (
    exists (
      select 1 from public.email_report_share s
       where s.id = email_report_share_access.share_id
         and s.created_by = (select auth.uid())
    )
  );

-- ----------------------------------------------------------------------------
-- email_test_log
-- ----------------------------------------------------------------------------
alter policy "authenticated users can archive their test sends"
  on public.email_test_log
  with check (created_by = (select auth.uid()));

alter policy "own email test log rows are readable" on public.email_test_log
  using (created_by = (select auth.uid()));

-- ----------------------------------------------------------------------------
-- purchase_complaints
--
-- Hier steckt die Rollenprüfung mit drin, die 0079 nachgerüstet hat
-- (`status = 'active'` und `deleted_at is null`). Sie bleibt Wort für
-- Wort erhalten — geändert wird ausschliesslich die Auswertung von
-- auth.uid().
-- ----------------------------------------------------------------------------
alter policy complaints_insert on public.purchase_complaints
  with check (
    customer_id = (select auth.uid())
    and status = 'open'::app.complaint_status
    and exists (
      select 1 from public.purchases pu
       where pu.id = purchase_complaints.purchase_id
         and pu.customer_id = (select auth.uid())
    )
  );

alter policy complaints_read on public.purchase_complaints
  using (
    customer_id = (select auth.uid())
    or exists (
      select 1 from public.profiles p
       where p.status = 'active'::app.profile_status
         and p.deleted_at is null
         and p.id = (select auth.uid())
         and p.role = any (array['system_admin'::app.role_key,
                                 'shareholder'::app.role_key])
    )
  );

alter policy complaints_update on public.purchase_complaints
  using (
    exists (
      select 1 from public.profiles p
       where p.status = 'active'::app.profile_status
         and p.deleted_at is null
         and p.id = (select auth.uid())
         and p.role = any (array['system_admin'::app.role_key,
                                 'shareholder'::app.role_key])
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
       where p.status = 'active'::app.profile_status
         and p.deleted_at is null
         and p.id = (select auth.uid())
         and p.role = any (array['system_admin'::app.role_key,
                                 'shareholder'::app.role_key])
    )
  );

-- ----------------------------------------------------------------------------
-- Fehlende Indizes auf Fremdschlüsseln
-- ----------------------------------------------------------------------------
create index if not exists challenges_reward_badge_idx
  on public.challenges (reward_badge);
create index if not exists donation_causes_verified_by_idx
  on public.donation_causes (verified_by);
create index if not exists email_templates_updated_by_idx
  on public.email_templates (updated_by);
create index if not exists email_test_log_created_by_idx
  on public.email_test_log (created_by);
create index if not exists purchase_complaints_updated_by_idx
  on public.purchase_complaints (updated_by);
create index if not exists referral_rewards_referral_id_idx
  on public.referral_rewards (referral_id);
