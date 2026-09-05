-- 0047 — Kündigungserklärungen (§ 312k BGB Kündigungsbutton).
--
-- Nimmt Kündigungen von Abo-Verträgen entgegen — auch ohne Login, wie
-- § 312k BGB es für den Kündigungsbutton verlangt. Insert läuft
-- ausschließlich über die Edge Function subscription-cancel
-- (Service-Role, mit Rate-Limit + Zugangsbestätigung per E-Mail);
-- Clients haben keine Insert-Policy.
--
-- Lesen: Kunden sehen die eigenen Erklärungen (wenn beim Absenden
-- angemeldet), Gesellschafter/Admin alles — zur manuellen Bearbeitung,
-- bis die Store-Abrechnung übernimmt.

create table if not exists public.cancellation_requests (
  id              uuid primary key default gen_random_uuid(),
  email           text not null,
  customer_number text,
  customer_id     uuid references public.customers(id),
  kind            text not null default 'ordentlich'
                    check (kind in ('ordentlich', 'ausserordentlich')),
  reason          text,               -- Pflichtangabe bei außerordentlich
  cancel_at       text not null default 'zum nächstmöglichen Zeitpunkt',
  requested_at    timestamptz not null default now(),
  source          text not null default 'app',
  processed_at    timestamptz,
  processed_by    uuid
);

create index if not exists idx_cancellation_requests_email
  on public.cancellation_requests(lower(email), requested_at desc);

select app.enable_audit('public.cancellation_requests');

alter table public.cancellation_requests enable row level security;

drop policy if exists cancel_read on public.cancellation_requests;
create policy cancel_read on public.cancellation_requests for select to authenticated
  using (
    customer_id = auth.uid()
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  );

drop policy if exists cancel_process on public.cancellation_requests;
create policy cancel_process on public.cancellation_requests for update to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  );
