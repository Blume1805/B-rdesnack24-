-- ============================================================================
-- 0003 — Audit-Trail (append-only) & generischer Audit-Trigger
-- ----------------------------------------------------------------------------
-- GoBD/DSGVO: lückenlose, unveränderliche Protokollierung von Änderungen.
-- Der Trigger app.audit_row() wird je fachlicher Tabelle aktiviert (ab 0004 ff.).
-- ============================================================================

create table if not exists public.audit_log (
  id          bigint generated always as identity primary key,
  occurred_at timestamptz not null default now(),
  actor_id    uuid,                    -- auth.uid() zum Zeitpunkt der Änderung
  action      text not null,           -- INSERT | UPDATE | DELETE
  table_name  text not null,
  record_id   text,                    -- PK des betroffenen Datensatzes (als Text)
  old_data    jsonb,
  new_data    jsonb
);

comment on table public.audit_log is
  'Append-only Änderungsprotokoll. Kein UPDATE/DELETE (per RLS und Berechtigungen gesperrt).';

create index if not exists idx_audit_table_record on public.audit_log(table_name, record_id);
create index if not exists idx_audit_occurred_at  on public.audit_log(occurred_at);
create index if not exists idx_audit_actor        on public.audit_log(actor_id);

-- ----------------------------------------------------------------------------
-- Generischer Audit-Trigger
-- ----------------------------------------------------------------------------
create or replace function app.audit_row()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
declare
  rec_id text;
begin
  if tg_op = 'DELETE' then
    rec_id := (to_jsonb(old)->>'id');
    insert into public.audit_log(actor_id, action, table_name, record_id, old_data, new_data)
    values (auth.uid(), tg_op, tg_table_name, rec_id, to_jsonb(old), null);
    return old;
  else
    rec_id := (to_jsonb(new)->>'id');
    insert into public.audit_log(actor_id, action, table_name, record_id, old_data, new_data)
    values (
      auth.uid(), tg_op, tg_table_name, rec_id,
      case when tg_op = 'UPDATE' then to_jsonb(old) else null end,
      to_jsonb(new)
    );
    return new;
  end if;
end;
$$;

comment on function app.audit_row() is
  'Generischer Trigger: schreibt jede Änderung in public.audit_log. Pro Tabelle aktivieren.';

-- Convenience: Audit-Trigger für eine Tabelle aktivieren.
create or replace function app.enable_audit(target regclass)
returns void
language plpgsql
as $$
begin
  execute format('drop trigger if exists trg_audit on %s', target);
  execute format(
    'create trigger trg_audit after insert or update or delete on %s
       for each row execute function app.audit_row()', target);
end;
$$;

-- Audit für die Identity-Tabellen aktivieren.
select app.enable_audit('public.profiles');
select app.enable_audit('public.user_permissions');
select app.enable_audit('public.role_permissions');
select app.enable_audit('public.shareholder_approvals');
