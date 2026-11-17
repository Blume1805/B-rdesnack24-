-- ============================================================================
-- Claude-Verbindung (MCP) für die Verwaltung — Datenbankteil
-- Entscheidung Philipp 17.11.2026: Claude soll Protokolle als PDF und offene
-- Unterschriften/Freigaben liefern, ohne dass Philipp sich in die App
-- einloggt. Vorgabe: Claude sieht KEINE Daten von Mitarbeitern (dann ist mit
-- Anthropic kein Vertrag zur Auftragsverarbeitung nötig).
--
-- Grundsatz: Was an Claude geht, enthält keine Namen, keine Kennungen von
-- Personen und keine Freitexte. Titel, Zeiträume, Zustände und Anzahlen.
-- Die PDF-Inhalte gehen nie an Claude: Der Verbindungsdienst legt das PDF im
-- gesperrten Speicher `mcp-exporte` ab und gibt nur einen befristeten Link
-- zurück, den Philipp selbst öffnet.
--
-- Rückweg: drop function public.mcp_offene_vorgaenge();
--          drop function public.mcp_aufruf_protokollieren(text, jsonb);
--          delete from storage.buckets where id = 'mcp-exporte';
--          delete from public.ki_register where key = 'claude_verwaltung_mcp';
-- ============================================================================

-- Gesperrter Ablageort für die PDFs. Kein Lese-/Schreibrecht für Clients;
-- nur der Dienstschlüssel legt ab und erzeugt befristete Links.
-- Grenzen wie bei allen Buckets (Audit S-10): nur PDF, höchstens 10 MB.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('mcp-exporte', 'mcp-exporte', false, 10485760, array['application/pdf'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Offene Vorgänge ohne Personenbezug.
create or replace function public.mcp_offene_vorgaenge()
returns jsonb
language plpgsql stable security definer
set search_path = public, app
as $$
declare
  v_ich uuid := auth.uid();
begin
  if not exists (select 1 from public.profiles p
                  where p.id = v_ich and p.status = 'active' and p.deleted_at is null
                    and p.role in ('system_admin', 'shareholder')) then
    raise exception 'Nur für Gesellschafter und Administration' using errcode = '42501';
  end if;

  return jsonb_build_object(
    'stand', now(),
    -- Freigaben (Vier-Augen-Prinzip): nur Titel, Art, Zeitraum, Zählungen
    -- und die EIGENE Entscheidung des Aufrufers.
    'freigaben_offen', coalesce((
      select jsonb_agg(jsonb_build_object(
               'titel', a.title,
               'art', a.document_kind,
               'zeitraum_von', a.period_from,
               'zeitraum_bis', a.period_to,
               'angefordert_am', a.requested_at::date,
               'deine_entscheidung', coalesce((
                  select d.decision::text from public.document_approval_decisions d
                   where d.approval_id = a.id and d.approver_id = v_ich
                   order by d.created_at desc limit 1), 'offen'),
               'zustimmungen', (select count(*) from public.document_approval_decisions d
                                 where d.approval_id = a.id and d.decision = 'approved'),
               'ablehnungen', (select count(*) from public.document_approval_decisions d
                                 where d.approval_id = a.id and d.decision = 'rejected'))
             order by a.requested_at)
        from public.document_approvals a
       where a.status = 'pending' and a.cancelled_at is null), '[]'::jsonb),
    -- Unterschriften von Beschäftigten: je Dokument nur Anzahlen, nie wer.
    'unterschriften_offen', coalesce((
      select jsonb_agg(jsonb_build_object(
               'dokument', x.title,
               'version', x.document_version,
               'offen', x.offen,
               'unterschrieben', x.unterschrieben,
               'aelteste_einladung', x.aelteste) order by x.aelteste)
        from (select d.title, s.document_version,
                     count(*) filter (where s.status = 'pending') as offen,
                     count(*) filter (where s.status = 'signed') as unterschrieben,
                     min(s.invited_at) filter (where s.status = 'pending')::date as aelteste
                from public.document_employee_signatures s
                join public.documents d on d.id = s.document_id
               group by d.title, s.document_version
              having count(*) filter (where s.status = 'pending') > 0) x), '[]'::jsonb),
    -- Dokumente, deren Gültigkeit in 60 Tagen endet oder abgelaufen ist.
    'dokumente_laufen_ab', coalesce((
      select jsonb_agg(jsonb_build_object('dokument', d.title, 'gueltig_bis', d.valid_until)
                       order by d.valid_until)
        from public.documents d
       where d.valid_until is not null and d.archived_at is null
         and coalesce(d.is_template, false) = false
         and d.valid_until <= current_date + 60), '[]'::jsonb),
    -- Rollenfreigaben betreffen Personen: nur die Anzahl.
    'rollenfreigaben_offen', (select count(*) from public.shareholder_approvals
                               where status = 'pending')
  );
end;
$$;
comment on function public.mcp_offene_vorgaenge() is
  'Für die Claude-Verbindung: offene Freigaben, Unterschriften und ablaufende '
  'Dokumente ohne Personenbezug (keine Namen, Kennungen oder Freitexte).';

-- Jeder Aufruf aus der Claude-Verbindung wird festgehalten (wer, was, wann).
create or replace function public.mcp_aufruf_protokollieren(p_werkzeug text, p_parameter jsonb)
returns void
language plpgsql security definer
set search_path = public, app
as $$
begin
  if auth.uid() is null then
    raise exception 'Nicht angemeldet' using errcode = '42501';
  end if;
  insert into public.audit_log (actor_id, action, table_name, record_id, new_data)
  values (auth.uid(), 'mcp:' || left(coalesce(p_werkzeug, '?'), 60), 'claude_verbindung', null,
          coalesce(p_parameter, '{}'::jsonb));
end;
$$;

revoke all on function public.mcp_offene_vorgaenge() from public, anon;
revoke all on function public.mcp_aufruf_protokollieren(text, jsonb) from public, anon;
grant execute on function public.mcp_offene_vorgaenge() to authenticated, service_role;
grant execute on function public.mcp_aufruf_protokollieren(text, jsonb) to authenticated, service_role;

-- KI-Register (Art. 50 KI-VO, Dokumentation): interner Assistent, kein
-- Kundenbereich, kein Personenbezug in den übermittelten Daten.
insert into public.ki_register (key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling, ist_ki_system, ai_act_kategorie,
  dsgvo_risiko, rechtsgrundlage, kennzeichnung_noetig, kennzeichnung_umgesetzt,
  freigabe_noetig, minderjaehrige, manipulationsrisiko, deepfake_risiko, ampel,
  aktiv, begruendung, geprueft_am, geprueft_von)
values ('claude_verwaltung_mcp',
  'Claude als Assistent der Verwaltung (MCP-Verbindung)',
  'Claude (Sprachmodell) über eigene MCP-Schnittstelle', 'Anthropic', 'betreiber',
  'Protokolle als PDF bereitstellen, offene Freigaben und Unterschriften auflisten',
  array['dokumenttitel', 'zeitraeume', 'anzahlen'], false, false, true, 'minimal',
  'niedrig', 'kein Personenbezug übermittelt', false, false, false, false, false, false,
  'gruen', true,
  'Nur interne Nutzung durch Gesellschafter. Keine Mitarbeiterdaten, keine Namen, keine Freitexte; PDF-Inhalte bleiben im eigenen Speicher, Claude erhält nur einen befristeten Link. Keine Entscheidungen durch die KI: Freigaben erteilen weiter nur Menschen in der App.',
  current_date, 'Claude Code, Entscheidung Philipp 17.11.2026')
on conflict (key) do nothing;
