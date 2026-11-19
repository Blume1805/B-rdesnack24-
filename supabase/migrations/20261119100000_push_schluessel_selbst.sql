-- ============================================================================
-- Push-Schlüssel erzeugt der Server selbst (Befund 19.11.2026)
--
-- Sachverhalt: Die Push-Benachrichtigung (V-022) brauchte zwei Schlüssel als
-- Geheimnisse der Server-Funktionen. Das Eintragen ging nur über ein
-- Eingabefenster, das beim Betreiber dreimal nicht erschien; der Wert hätte
-- sonst von Hand aus einer Datei kopiert werden müssen. Ergebnis in der App:
-- „Push konnte nicht eingeschaltet werden" (Server: 503, nicht eingerichtet).
--
-- Änderung: Die Funktion approval-notify erzeugt beim ersten Bedarf selbst ein
-- Schlüsselpaar (P-256) und legt es hier ab. Der private Teil verlässt den
-- Server nie; kein Mensch sieht oder kopiert ihn. Sind die Geheimnisse
-- VAPID_PUBLIC_KEY/VAPID_PRIVATE_D doch gesetzt, haben sie Vorrang.
--
-- Schutz: Tabelle mit Zeilenschutz und ohne Rechte für anon/authenticated.
-- Lesen und Anlegen nur über zwei Funktionen, die ausschließlich der
-- Dienstschlüssel (service_role) ausführen darf. Wer zuerst anlegt, gewinnt;
-- jeder spätere Aufruf erhält dasselbe Paar (kein Überschreiben).
--
-- Rückweg: drop function public.web_push_schluessel();
--          drop function public.web_push_schluessel_anlegen(text, text);
--          drop table app.web_push_schluessel;
-- (Danach sind alle gespeicherten Push-Abonnements wertlos, weil sie an den
-- öffentlichen Schlüssel gebunden sind; die App fragt dann neu an.)
-- ============================================================================

create table if not exists app.web_push_schluessel (
  id          smallint primary key default 1 check (id = 1),
  oeffentlich text not null check (length(oeffentlich) = 87),
  privat_d    text not null check (length(privat_d) = 43),
  erstellt_am timestamptz not null default now()
);
alter table app.web_push_schluessel enable row level security;
revoke all on app.web_push_schluessel from public, anon, authenticated;

comment on table app.web_push_schluessel is
  'Absenderschlüssel für Web-Push (VAPID). Vom Server selbst erzeugt; nur '
  'service_role über public.web_push_schluessel(_anlegen).';

create or replace function public.web_push_schluessel()
returns jsonb
language sql stable security definer
set search_path = public, app
as $$
  select jsonb_build_object('oeffentlich', k.oeffentlich, 'privat_d', k.privat_d)
    from app.web_push_schluessel k where k.id = 1;
$$;

create or replace function public.web_push_schluessel_anlegen(p_oeffentlich text, p_privat_d text)
returns jsonb
language plpgsql security definer
set search_path = public, app
as $$
begin
  insert into app.web_push_schluessel (id, oeffentlich, privat_d)
  values (1, p_oeffentlich, p_privat_d)
  on conflict (id) do nothing;
  -- Immer das gespeicherte Paar zurück: Bei zwei gleichzeitigen ersten
  -- Aufrufen benutzen beide dasselbe.
  return public.web_push_schluessel();
end;
$$;

revoke all on function public.web_push_schluessel() from public, anon, authenticated;
revoke all on function public.web_push_schluessel_anlegen(text, text) from public, anon, authenticated;
grant execute on function public.web_push_schluessel() to service_role;
grant execute on function public.web_push_schluessel_anlegen(text, text) to service_role;
