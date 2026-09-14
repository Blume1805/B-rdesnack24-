create or replace function app.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_meta jsonb := new.raw_user_meta_data;
  v_type app.customer_type := coalesce((v_meta->>'customer_type')::app.customer_type, 'private');
  -- Die Rolle aus den Metadaten gilt NUR bei einer Einladung.
  --
  -- Bei einer Selbstregistrierung kommen diese Daten vollständig vom
  -- Browser. Wer sich mit role: 'system_admin' anmeldete, bekam eine
  -- Profilzeile mit dieser Rolle — geschützt hat allein `status`, und den
  -- hat nicht jeder Leser ausgewertet (0079 in der Datenbank, danach sechs
  -- Edge Functions). Statt diese Prüfung an jeder Lesestelle nachzurüsten,
  -- wird die Rolle hier gar nicht erst aus fremder Hand übernommen.
  --
  -- GoTrue setzt `invited_at` genau dann, wenn der Nutzer über
  -- `inviteUserByEmail` angelegt wurde — also über die Edge Function
  -- `invite-user`, die vorher Berechtigungen prüft. Nur dann zählt die
  -- Rolle aus dem Metadata.
  v_role app.role_key := case
    when new.invited_at is not null
      then coalesce((v_meta->>'role')::app.role_key, 'customer')
    else 'customer'
  end;
begin
  insert into public.profiles (id, email, full_name, birth_date, role, status, activated_at)
  values (
    new.id,
    new.email,
    coalesce(v_meta->>'full_name', null),
    case when v_meta ? 'birth_date' and length(v_meta->>'birth_date') = 10
         then (v_meta->>'birth_date')::date else null end,
    v_role,
    (case when v_role = 'customer' then 'active' else 'invited' end)::app.profile_status,
    case when v_role = 'customer' then now() else null end
  )
  on conflict (id) do nothing;

  if v_role = 'customer' then
    insert into public.customers (
      id, customer_type, company_name,
      billing_street, billing_zip, billing_city, billing_country,
      tax_number, vat_id
    ) values (
      new.id, v_type,
      nullif(v_meta->>'company_name',''),
      nullif(v_meta->>'billing_street',''),
      nullif(v_meta->>'billing_zip',''),
      nullif(v_meta->>'billing_city',''),
      coalesce(nullif(v_meta->>'billing_country',''), 'DE'),
      nullif(v_meta->>'tax_number',''),
      nullif(v_meta->>'vat_id','')
    )
    on conflict (id) do update
      set customer_type   = excluded.customer_type,
          company_name    = excluded.company_name,
          billing_street  = excluded.billing_street,
          billing_zip     = excluded.billing_zip,
          billing_city    = excluded.billing_city,
          billing_country = excluded.billing_country,
          tax_number      = excluded.tax_number,
          vat_id          = excluded.vat_id;
  end if;

  return new;
end;
$$;
