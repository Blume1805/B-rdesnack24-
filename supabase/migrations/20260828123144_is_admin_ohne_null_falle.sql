create or replace function public.is_admin(uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select coalesce(public.app_role(uid) = 'system_admin', false);
$$;

comment on function public.is_admin(uuid) is
  'true/false, NIE NULL — auch für ein Konto ohne aktives Profil. Ohne das '
  'coalesce lieferte diese Funktion NULL, was jede Prüfung der Form '
  '"is_admin() or X" bei falschem X unbemerkt durchliess (0156).';
