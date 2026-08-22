-- ============================================================================
-- 0121 · Der Kauf gehört der Firma
-- ----------------------------------------------------------------------------
-- Entscheidung vom 22.08.2026. Kauft ein Firmenmitarbeiter am Automaten, ist
-- das der Kauf SEINER FIRMA und nicht sein privater — die Firma trägt ihn.
--
-- Diese eine Spalte wird vorgezogen, während der Rest der Firmenkunden auf
-- die Automaten wartet. Grund: Sie ist der einzige Teil, der sich nicht
-- nachrüsten lässt. Einladungen, Budgets und Oberfläche kann man später
-- bauen, ohne Bestehendes umzuschreiben. Eine Firmenzuordnung dagegen muss
-- beim Kauf entstehen — steht sie erst später zur Verfügung, müsste jemand
-- bei tausend alten Zeilen raten, welche zu welcher Firma gehörte. Raten
-- kommt bei einer Rechnung nicht in Frage.
--
-- ----------------------------------------------------------------------------
-- Warum `customer_id` bleibt, wie es ist
--
-- Auch ein Firmenkauf wird von einem MENSCHEN getätigt. `customer_id` sagt
-- weiterhin, WER am Automaten stand; `business_id` sagt, WESSEN Rechnung es
-- ist. Beides zu brauchen ist kein Widerspruch, sondern der Normalfall bei
-- Firmenkunden: Die Firma zahlt, der Mensch holt.
--
-- `business_id` ist nullbar. Der Privatkauf trägt keine Firma, und das ist
-- heute jeder einzelne Kauf in der Datenbank.
--
-- ----------------------------------------------------------------------------
-- Was diese Migration bewusst NICHT tut
--
-- Sie ändert die Punkte-, Status- und Aufgabenrechnung NICHT. Alle drei
-- summieren heute `purchases` über `customer_id` — ein Firmenkauf würde dem
-- Mitarbeiter also private Treuepunkte, Statusumsatz und Aufgabenfortschritt
-- auf Kosten der Firma einbringen. Ob das so gewollt ist, ist eine
-- Produktentscheidung und keine technische: Rechnet man es heraus, fühlt
-- sich der Mitarbeiter übergangen; lässt man es drin, sammelt er auf fremde
-- Rechnung.
--
-- Sie lässt sich gefahrlos aufschieben, weil es null Firmen und null
-- Firmenkäufe gibt — es kann sich also nichts Falsches ansammeln, solange
-- die Frage offen ist. Sobald der erste Firmenkauf entsteht, muss sie
-- beantwortet sein.
--
-- Ebenso offen und ausdrücklich benannt: Ein Firmenkauf bedeutet, dass der
-- ARBEITGEBER erfährt, was der Beschäftigte gekauft hat. Das gehört in die
-- Datenschutzerklärung, bevor der erste solche Kauf entsteht — heute wird
-- dort nichts falsch, weil die Spalte leer bleibt.
-- ============================================================================

alter table public.purchases
  add column if not exists business_id uuid references public.businesses(id);

comment on column public.purchases.business_id is
  'Firma, auf deren Rechnung der Kauf geht. NULL = Privatkauf. `customer_id` '
  'bleibt daneben bestehen und sagt, wer am Automaten stand.';

create index if not exists idx_purchases_business
  on public.purchases (business_id, purchased_at desc)
  where business_id is not null;

-- ----------------------------------------------------------------------------
-- Wer den Kauf sehen darf
-- ----------------------------------------------------------------------------
-- Aus der Rechtematrix, Zeile „Firmentransaktionen": Das einfache
-- Firmenmitglied sieht die eigenen, der Firmen-Administrator die der Firma.
-- Die eigenen sind über `customer_id` bereits abgedeckt; hier kommt der
-- Firmenblick dazu.
--
-- Die bisherigen drei Zweige bleiben Wort für Wort erhalten.
drop policy if exists purch_read on public.purchases;
create policy purch_read on public.purchases
  for select to authenticated
  using (
    customer_id = (select auth.uid())
    or (business_id is not null
        and app.is_business_member(business_id, 'admin'))
    or public.is_admin()
    or public.auth_has_permission('customers.manage')
  );

-- Schreiben bleibt unverändert bei Bördesnack24. Ein Firmen-Administrator
-- darf Käufe SEHEN, aber keine anlegen oder umschreiben — sonst könnte er
-- fremde Käufe auf seine Firma ziehen oder eigene davon lösen.

-- ----------------------------------------------------------------------------
-- Die Zuordnung muss stimmen
-- ----------------------------------------------------------------------------
-- Ohne diese Prüfung liesse sich ein Kauf einer beliebigen Firma zuordnen —
-- auch einer, mit der der Käufer nichts zu tun hat. Das ist keine
-- theoretische Sorge: Käufe entstehen aus dem Automaten-Webhook, der mit
-- `service_role` schreibt und damit an JEDER Zugriffsregel vorbeikommt. Ein
-- Fehler bei der Kartenauflösung würde dort still eine falsche Rechnung
-- erzeugen.
--
-- Geprüft wird nur beim Anlegen und beim Ändern der Zuordnung. Wer später
-- aus der Firma ausscheidet, verliert seine alten Käufe nicht rückwirkend —
-- die Rechnung von damals war richtig.
create or replace function app.purchase_business_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
begin
  if new.business_id is null then
    return new;
  end if;

  if tg_op = 'UPDATE' and new.business_id is not distinct from old.business_id then
    return new;
  end if;

  if not exists (
    select 1 from public.business_members m
    where m.business_id = new.business_id
      and m.profile_id  = new.customer_id
      and m.status      = 'active'
  ) then
    raise exception
      'Kauf % kann der Firma % nicht zugeordnet werden: % ist dort kein '
      'aktives Mitglied.', new.id, new.business_id, new.customer_id
      using errcode = 'check_violation';
  end if;

  return new;
end;
$fn$;

comment on function app.purchase_business_pruefen() is
  'Lässt eine Firmenzuordnung nur zu, wenn der Käufer dort aktives Mitglied '
  'ist. Greift auch bei service_role, wo keine Zugriffsregel greift.';

drop trigger if exists trg_purchases_business on public.purchases;
create trigger trg_purchases_business
  before insert or update on public.purchases
  for each row execute function app.purchase_business_pruefen();
