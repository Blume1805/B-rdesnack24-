create table if not exists public.ki_register (
  key                     text primary key,
  bezeichnung             text not null,
  system                  text not null,
  anbieter                text,
  rolle                   text not null default 'keine'
                            check (rolle in ('keine', 'anbieter', 'betreiber')),
  zweck                   text not null,
  datenkategorien         text[] not null default '{}',
  personenbezug           boolean not null,
  profiling               boolean not null default false,
  ist_ki_system           boolean not null default false,
  ai_act_kategorie        text not null default 'kein_ki_system'
                            check (ai_act_kategorie in
                              ('kein_ki_system','minimal','transparenz','hochrisiko','verboten')),
  dsgvo_risiko            text not null default 'niedrig'
                            check (dsgvo_risiko in ('niedrig','mittel','hoch','unzulaessig')),
  rechtsgrundlage         text,
  kennzeichnung_noetig    boolean not null default false,
  kennzeichnung_umgesetzt boolean not null default false,
  freigabe_noetig         boolean not null default false,
  minderjaehrige          boolean not null default false,
  manipulationsrisiko     boolean not null default false,
  deepfake_risiko         boolean not null default false,
  ampel                   text not null check (ampel in ('gruen','gelb','rot')),
  aktiv                   boolean not null default true,
  begruendung             text not null,
  geprueft_am             date not null,
  geprueft_von            text not null,
  constraint ki_rot_ist_blockiert
    check (not (ampel = 'rot' and aktiv)),
  constraint ki_kategorie_passt
    check ((ist_ki_system and ai_act_kategorie <> 'kein_ki_system')
        or (not ist_ki_system and ai_act_kategorie = 'kein_ki_system')),
  constraint ki_verboten_ist_rot
    check (ai_act_kategorie <> 'verboten' or ampel = 'rot'),
  constraint ki_kennzeichnung_vor_gruen
    check (ampel <> 'gruen' or not kennzeichnung_noetig or kennzeichnung_umgesetzt),
  constraint ki_risiko_nicht_gruen
    check (ampel <> 'gruen' or not (deepfake_risiko or manipulationsrisiko))
);

comment on table public.ki_register is
  'Register aller algorithmischen und KI-gestützten Funktionen im Kundenbereich. '
  'Die CHECK-Bedingungen setzen die Ampellogik durch: rot kann nicht aktiv sein, '
  'verboten ist immer rot, grün setzt umgesetzte Kennzeichnung voraus.';

comment on column public.ki_register.ist_ki_system is
  'KI-System nach Art. 3 Nr. 1 VO (EU) 2024/1689? Regelbasierte Systeme ohne '
  'Lernen/Schlussfolgern sind nach den Kommissionsleitlinien vom 06.02.2025 '
  'ausgenommen — dann false.';

alter table public.ki_register enable row level security;
revoke all on public.ki_register from anon, authenticated;

drop policy if exists ki_register_read on public.ki_register;
create policy ki_register_read on public.ki_register
  for select to anon, authenticated using (aktiv);
grant select on public.ki_register to anon, authenticated;

create or replace function public.ki_funktion_freigegeben(p_key text)
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce(
    (select aktiv and ampel = 'gruen' from public.ki_register where key = p_key),
    false);
$$;

comment on function public.ki_funktion_freigegeben(text) is
  'Gate: true nur bei aktivem, grünem Registereintrag. Unbekannter Schlüssel '
  'ist false — Vergessen sperrt, statt durchzulassen.';

grant execute on function public.ki_funktion_freigegeben(text) to anon, authenticated;
