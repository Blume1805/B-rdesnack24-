-- Korrektur zweier Gegenproben: Nicht die Funktionen sind falsch, meine
-- Erwartung war es. `business_update` und `advertising_campaign_status`
-- sind ausdruecklich INTERN — sie pruefen auf is_admin() bzw. auf die
-- Rechte businesses.manage / advertising.manage, nicht auf die
-- Mitgliedschaft. Ein Firmenkunde pflegt seine Stammdaten also nicht
-- selbst. Die Gegenprobe muss deshalb mit einer internen Rolle laufen —
-- und zusaetzlich pruefen, was ein Firmen-Admin auf der EIGENEN Firma
-- tatsaechlich darf.
delete from pruef.ergebnis where gruppe='Gegenprobe' and test in ('business_update eigene Firma','eigene Kampagne pausieren');
do $$
declare
  A1 uuid := 'f1a00000-0000-0000-0000-000000000001';
  G  uuid := '33333333-3333-3333-3333-333333333333';
  F1 uuid := 'b1000000-0000-0000-0000-0000000000f1';
  C1 uuid := 'c1000000-0000-0000-0000-0000000000f1';
  w text; r text; vorher int; nachher int;
begin
  -- Was der Firmen-Admin auf der eigenen Firma DARF (mitgliedschaftsgebunden)
  -- Gemessen wird die Veraenderung, nicht ein fester Stand: Jeder Lauf legt
  -- eine weitere Einladung an. Eine Zusicherung auf "= 1" waere beim zweiten
  -- Lauf rot geworden, ohne dass sich an der Sache etwas geaendert haette.
  vorher := pruef.wahrheit(format('select count(*)::text from public.business_invitations where business_id=%L', F1))::int;
  w := pruef.schreibe(format('select public.business_invite(%L,''kollege@firma-eins.invalid'')', F1), A1);
  nachher := pruef.wahrheit(format('select count(*)::text from public.business_invitations where business_id=%L', F1))::int;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','business_invite eigene Firma','Admin Firma 1','Firma 1','genau eine Einladung mehr',
           w||' / '||vorher||' -> '||nachher, nachher = vorher + 1);

  w := pruef.schreibe(format('select public.business_budget_set(%L,%L,150)', F1, A1), A1);
  r := pruef.wahrheit(format('select max(monatslimit_brutto)::text from public.business_budgets where business_id=%L', F1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','business_budget_set eigene Firma','Admin Firma 1','Firma 1','Limit 150', w||' / '||r, r like '150%');

  -- Was ausdruecklich INTERN ist, muss der Gesellschafter koennen
  w := pruef.schreibe(format('select public.business_update(%L, ''{"billing_city":"Wanzleben"}''::jsonb)', F1), G);
  r := pruef.wahrheit(format('select coalesce(billing_city,''-'') from public.businesses where id=%L', F1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','business_update (intern)','Gesellschafter','Firma 1','uebernommen', w||' / '||r, r='Wanzleben');

  w := pruef.schreibe(format('select public.advertising_campaign_status(%L,''paused'')', C1), G);
  r := pruef.wahrheit(format('select status::text from public.advertising_campaigns where id=%L', C1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Kampagne pausieren (intern)','Gesellschafter','Kampagne Firma 1','paused', w||' / '||r, r='paused');

  -- Und der Firmen-Admin darf es auf der eigenen Firma NICHT — bewusst
  w := pruef.schreibe(format('select public.business_update(%L, ''{"billing_city":"Selbst"}''::jsonb)', F1), A1);
  r := pruef.wahrheit(format('select coalesce(billing_city,''-'') from public.businesses where id=%L', F1));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Rollenmodell','Firmen-Admin aendert eigene Stammdaten','Admin Firma 1','Firma 1','Abweisung — Pflege ist intern', w||' / '||r, w like 'ERR%' and r='Wanzleben');
end $$;
