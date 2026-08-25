-- ============================================================================
-- 0129 — Privatentnahmen und -einlagen sind kein Aufwand
-- ----------------------------------------------------------------------------
-- ANLASS (25.08.2026)
--
-- Der Auftraggeber hat gemeldet: Zwei Belege lagen auf „3300 Wareneingang"
-- und damit im Aufwand — 215,00 € und 132,00 €, zusammen 347,00 €. Beide
-- gehören auf 1890 „Privateinlagen". Bei einem stand die Kontonummer sogar
-- im Belegtext („1890 · 31-12-2025").
--
-- 1800 „Privatentnahmen allgemein" und 1890 „Privateinlagen" sind der
-- Kapitalanteil der Entnahmen und Einlagen: Geld, das der Gesellschafter dem
-- Betrieb entnimmt oder zuführt. Das berührt das Kapitalkonto, nicht das
-- Ergebnis. Als Aufwand gebucht senken sie den Gewinn um Beträge, die nie
-- Kosten waren.
--
-- Der Connector setzt die Richtung solcher Buchungen ab sofort auf
-- `liability`; `finance_summary` summiert nur `revenue` und `expense` und
-- lässt sie damit aus Aufwand, Erlös und Ergebnis heraus. Die Oberfläche
-- beschriftet sie als „Privat/Kapital" statt wie bisher pauschal als
-- „Aufwand".
--
-- Der ganze Bereich zählt dazu, nicht nur die beiden genannten Konten:
-- 1800–1899 für Vollhafter, 1900–1999 für Teilhafter. Wer nur 1800 und 1890
-- prüft, lässt Privatsteuern (1810), Sonderausgaben (1820 ff.), Spenden
-- (1840) und unentgeltliche Wertabgaben (1880) durchrutschen.
--
-- Die Bezeichnungen stammen aus dem DATEV-Standardkontenrahmen SKR 03 für
-- 2026 (Art.-Nr. 11174). Bei 1891 ist die Bezeichnung im PDF am
-- Zeilenumbruch getrennt („nur Einzelunterneh-"); sie ist hier vervollständigt.
-- ============================================================================

insert into public.finance_accounts (code, name, direction, default_tax, sort_order) values
  ('1800', 'Privatentnahmen allgemein',                    'liability', null, 1800),
  ('1801', 'Privatentnahmen allgemein',                    'liability', null, 1801),
  ('1810', 'Privatsteuern',                                'liability', null, 1810),
  ('1820', 'Sonderausgaben beschränkt abzugsfähig',        'liability', null, 1820),
  ('1830', 'Sonderausgaben unbeschränkt abzugsfähig',      'liability', null, 1830),
  ('1840', 'Zuwendungen, Spenden',                         'liability', null, 1840),
  ('1850', 'Außergewöhnliche Belastungen',                 'liability', null, 1850),
  ('1860', 'Grundstücksaufwand',                           'liability', null, 1860),
  ('1870', 'Grundstücksertrag',                            'liability', null, 1870),
  ('1880', 'Unentgeltliche Wertabgaben',                   'liability', null, 1880),
  ('1890', 'Privateinlagen',                               'liability', null, 1890),
  ('1891', 'Privateinlagen (nur Einzelunternehmen)',       'liability', null, 1891)
on conflict (code) do update
  set name       = excluded.name,
      direction  = excluded.direction,
      sort_order = excluded.sort_order;

-- Bereits gebuchte Privatkonten geradeziehen, falls welche bestehen.
update public.finance_bookings b
   set direction = 'liability'
  from public.finance_accounts a
 where a.code = b.account_code
   and b.account_code ~ '^1[89][0-9]{2}$'
   and b.direction <> 'liability';

-- Der nächste Sync baut die Buchungen neu auf: Er überspringt jetzt
-- zusätzlich die wiederkehrenden Belege („RV") — Vorlagen, aus denen sevDesk
-- die echten Belege erzeugt. Genau einer davon war im letzten Lauf dabei und
-- hat denselben Vorgang ein zweites Mal gezählt.
delete from public.finance_bookings where source = 'sevdesk';

do $$
declare v_privat int; v_falsch int;
begin
  select count(*) into v_privat from public.finance_accounts
   where code ~ '^1[89][0-9]{2}$';
  select count(*) into v_falsch from public.finance_accounts
   where code ~ '^1[89][0-9]{2}$' and direction <> 'liability';
  if v_falsch > 0 then
    raise exception '% Privatkonten tragen noch eine Ergebnis-Richtung.', v_falsch;
  end if;
  raise notice '% Privatkonten im Stamm, alle als Kapitalkonto gefuehrt.', v_privat;
end $$;
