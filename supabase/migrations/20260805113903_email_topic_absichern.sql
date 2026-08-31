alter table public.email_topic enable row level security;

revoke all on public.email_topic from anon, authenticated;
grant select on public.email_topic to anon, authenticated;

drop policy if exists email_topic_read on public.email_topic;
create policy email_topic_read on public.email_topic
  for select to anon, authenticated
  using (true);

comment on table public.email_topic is
  'Katalog der Werbethemen (Art. 7 DSGVO, § 7 Abs. 2 Nr. 2 UWG). Nur lesbar; '
  'label/description sind der Wortlaut der Einwilligung und werden '
  'ausschliesslich per Migration geändert.';

alter function public.email_consent_unveraenderlich() set search_path = public;
