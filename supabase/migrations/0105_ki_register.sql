-- ============================================================================
-- 0105 · Register der algorithmischen und KI-Funktionen
-- ----------------------------------------------------------------------------
-- Anlass (09.08.2026): Die Compliance-Vorgabe verlangt, dass das System
-- jederzeit beantworten kann, welche KI wofür mit welchen Daten läuft, wie
-- sie eingestuft ist und wer sie freigegeben hat. Ein Dokument kann das
-- nicht: Es veraltet in dem Moment, in dem jemand eine Funktion ergänzt.
--
-- Deshalb steht das Register in der Datenbank, und ein blockierender
-- CI-Schritt (`scripts/check_ki_register.py`) lässt keine neue
-- angebotserzeugende Funktion mehr durch, die hier nicht eingetragen ist.
--
-- ----------------------------------------------------------------------------
-- BEFUND, der die Einstufung trägt
--
-- Keine der hier erfassten Funktionen ist ein KI-System im Sinne von
-- Art. 3 Nr. 1 der Verordnung (EU) 2024/1689. Die Leitlinien der
-- Kommission vom 06.02.2025 zur Definition eines KI-Systems nehmen
-- Systeme aus, die „vordefinierten, expliziten Anweisungen oder Regeln
-- folgen", ohne dass gelernt, geschlossen oder modelliert wird.
--
-- Genau das sind unsere Funktionen: `order by sum(quantity) desc`,
-- `case when serve_temp = v_bias`, ein Datumsvergleich für den
-- Geburtstag. Nachgeprüft an den Live-Definitionen, nicht an der
-- Dokumentation — im gesamten Produktivcode gibt es keine
-- Modellanbindung (0 Treffer für anthropic/openai/gemini).
--
-- Folge: Art. 50 begründet derzeit KEINE Kennzeichnungspflicht. Die
-- vorhandene Kennzeichnung bleibt trotzdem — sie ist freiwillig, ehrlich
-- und richtig, weil die Auswahl für den Kunden sonst unerklärlich wäre.
-- Die tragenden Pflichten kommen aus der DSGVO (Art. 13, 21) und dem UWG,
-- nicht aus dem AI Act.
--
-- Das Register ist so gebaut, dass sich das ändern DARF: Sobald
-- `ist_ki_system` für eine Zeile auf true steht, greifen strengere
-- Bedingungen (siehe CHECK weiter unten).
-- ============================================================================

create table if not exists public.ki_register (
  key                     text primary key,
  bezeichnung             text not null,

  -- Was läuft technisch? 'regelbasiert' oder Anbieter/Modell.
  system                  text not null,
  anbieter                text,

  -- Rolle nach AI Act, sobald ein KI-System vorliegt.
  rolle                   text not null default 'keine'
                            check (rolle in ('keine', 'anbieter', 'betreiber')),

  zweck                   text not null,
  datenkategorien         text[] not null default '{}',
  personenbezug           boolean not null,
  profiling               boolean not null default false,

  -- Der entscheidende Schalter. false = kein KI-System nach Art. 3 Nr. 1.
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

  -- ── Die Regeln, die das Register durchsetzt ────────────────────────────
  -- ROT darf nicht aktiv sein. Das ist der Kern der Blockierungslogik:
  -- eine rot eingestufte Funktion abzuschalten ist nicht Disziplin,
  -- sondern eine Bedingung, an der das INSERT scheitert.
  constraint ki_rot_ist_blockiert
    check (not (ampel = 'rot' and aktiv)),

  -- Ein echtes KI-System kann nicht gleichzeitig „kein KI-System" sein.
  constraint ki_kategorie_passt
    check ((ist_ki_system and ai_act_kategorie <> 'kein_ki_system')
        or (not ist_ki_system and ai_act_kategorie = 'kein_ki_system')),

  -- Verbotene Praktiken nach Art. 5 sind immer rot.
  constraint ki_verboten_ist_rot
    check (ai_act_kategorie <> 'verboten' or ampel = 'rot'),

  -- Wo Kennzeichnung nötig ist, muss sie umgesetzt sein — sonst nicht grün.
  constraint ki_kennzeichnung_vor_gruen
    check (ampel <> 'gruen' or not kennzeichnung_noetig or kennzeichnung_umgesetzt),

  -- Deepfake- oder Manipulationsrisiko schliesst Grün aus.
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

-- Kunden dürfen das Register lesen: Es ist die belastbare Fassung dessen,
-- was die KI-Info-Seite in Prosa erzählt. Transparenz, die man abfragen
-- kann, ist mehr wert als Transparenz, die man glauben muss.
drop policy if exists ki_register_read on public.ki_register;
create policy ki_register_read on public.ki_register
  for select to anon, authenticated using (aktiv);
grant select on public.ki_register to anon, authenticated;

-- Schreiben nur per Migration bzw. service_role. Eine Einstufung, die sich
-- im Dashboard klicken lässt, ist kein Nachweis.

-- ----------------------------------------------------------------------------
-- Gate für die Anwendung
--
-- Liefert true nur für aktive, grüne Einträge. Alles andere — gelb, rot,
-- unbekannter Schlüssel — ist false. Ein unbekannter Schlüssel gilt
-- bewusst als gesperrt: Wer eine Funktion baut und den Registereintrag
-- vergisst, bekommt sie nicht freigeschaltet.
-- ----------------------------------------------------------------------------
create or replace function public.ki_funktion_freigegeben(p_key text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (select aktiv and ampel = 'gruen' from public.ki_register where key = p_key),
    false);
$$;

comment on function public.ki_funktion_freigegeben(text) is
  'Gate: true nur bei aktivem, grünem Registereintrag. Unbekannter Schlüssel '
  'ist false — Vergessen sperrt, statt durchzulassen.';

grant execute on function public.ki_funktion_freigegeben(text) to anon, authenticated;

-- ----------------------------------------------------------------------------
-- Der Ist-Stand vom 09.08.2026, an den Live-Definitionen geprüft
-- ----------------------------------------------------------------------------
insert into public.ki_register (
  key, bezeichnung, system, rolle, zweck, datenkategorien, personenbezug,
  profiling, ist_ki_system, ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, ampel, begruendung, geprueft_am, geprueft_von
) values

('generate_personal_offer',
 'Individuelles Angebot aus der Kaufhistorie',
 'regelbasiert (SQL)', 'keine',
 'Rabatt auf das in 90 Tagen meistgekaufte Produkt',
 array['kaufhistorie_produkt','kaufhistorie_menge','kaufzeitpunkt'], true,
 true, false, 'kein_ki_system', 'mittel', 'Art. 6 Abs. 1 lit. f DSGVO',
 false, true, false,
 true, 'gruen',
 'Profiling nach Art. 4 Nr. 4 DSGVO — die Kaufhistorie wird ausgewertet. '
 'Kein KI-System: order by sum(quantity), kein Lernen. Art. 22 greift nicht, '
 'weil der Rabattsatz mit 10 % fest verdrahtet und für alle gleich ist; es '
 'entscheidet sich nur, WELCHES Produkt vergünstigt wird. Kein Ausschluss, '
 'keine individuelle Preisbildung. Kennzeichnung freiwillig umgesetzt.',
 date '2026-08-09', 'Philipp Blume'),

('generate_daily_offers',
 'Tagesangebot nach Wetterlage',
 'regelbasiert (SQL)', 'keine',
 'Produktauswahl nach Wettervorhersage am Automatenstandort',
 array['wetterdaten_standort_automat'], false,
 false, false, 'kein_ki_system', 'niedrig', 'Art. 6 Abs. 1 lit. f DSGVO',
 false, true, false,
 false, 'gruen',
 'Kein Personenbezug: Das Angebot ist für alle Kunden identisch. Grundlage '
 'ist die DWD-Vorhersage für den Automatenstandort, nicht der Standort des '
 'Nutzers. Kein Profiling, kein KI-System.',
 date '2026-08-09', 'Philipp Blume'),

('generate_weekly_offers',
 'Wochenangebot nach Mindesthaltbarkeitsdatum',
 'regelbasiert (SQL)', 'keine',
 'Abverkauf kurz vor Ablauf, Vermeidung von Lebensmittelverschwendung',
 array['mhd_bestand'], false,
 false, false, 'kein_ki_system', 'niedrig', 'Art. 6 Abs. 1 lit. f DSGVO',
 false, true, false,
 false, 'gruen',
 'Reine Bestandslogik ohne jeden Personenbezug. Für alle Kunden gleich.',
 date '2026-08-09', 'Philipp Blume'),

('grant_birthday_offer',
 'Geburtstagsgutschein',
 'regelbasiert (SQL)', 'keine',
 'Einmal jährlich ein Gutschein am Geburtstag',
 array['geburtsdatum'], true,
 false, false, 'kein_ki_system', 'mittel', 'Art. 6 Abs. 1 lit. f DSGVO',
 false, false, false,
 true, 'gelb',
 'GELB, weil zwei Dinge offen sind. Erstens: Das Geburtsdatum ist ein '
 'personenbezogenes Merkmal, das die KI-Info-Seite bislang NICHT als '
 'Datenquelle nennt — die Transparenzangabe ist insoweit unvollständig. '
 'Zweitens: Minderjährige sind betroffen, und ein Kaufanreiz zum Geburtstag '
 'braucht eine bewusste Entscheidung darüber, ob er für sie gelten soll. '
 'Datumsvergleich, kein KI-System. Freigabe durch Philipp Blume erforderlich.',
 date '2026-08-09', 'Philipp Blume'),

('customer_chatbot',
 'Automatischer Chat-Assistent',
 'regelbasiert (statisches FAQ)', 'keine',
 'Beantwortung häufiger Fragen im Kundenbereich',
 array['keine'], false,
 false, false, 'kein_ki_system', 'niedrig', 'Art. 6 Abs. 1 lit. b DSGVO',
 false, true, false,
 true, 'gruen',
 'Statische Antworten aus einer Konstante, nachgeprüft: kein einziger '
 'Netzwerkaufruf in der Datei, kein Modell. Kein KI-System, daher keine '
 'Pflicht aus Art. 50 Abs. 1. Die Beschriftung "Automatischer '
 'Chat-Assistent" statt "KI" ist deshalb die zutreffende — sie vermeidet '
 'zugleich eine unzutreffende KI-Behauptung nach § 5 UWG.',
 date '2026-08-09', 'Philipp Blume')

on conflict (key) do nothing;
