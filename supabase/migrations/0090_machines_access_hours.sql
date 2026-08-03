-- ============================================================================
-- 0090 · Zugangszeiten am Automaten
-- ----------------------------------------------------------------------------
-- Die Automaten laufen rund um die Uhr — der Standort nicht unbedingt. Ein
-- Automat im Vorraum eines Marktes ist nur erreichbar, solange der Markt
-- offen ist; einer im Aussenbereich immer.
--
-- Bisher liess sich dieser Unterschied nirgends hinterlegen. Für die
-- Kundenansicht ist er aber der wichtigste Satz an einem Standort: Wer um
-- 22 Uhr vor einer verschlossenen Tür steht, hat ein echtes Problem, und
-- die App hat es ihm nicht gesagt.
--
-- Bewusst als Freitext und nicht als Zeitmodell. Ein Öffnungszeiten-Schema
-- mit Wochentagen, Feiertagen und Ausnahmen wäre für vier Automaten eine
-- Konstruktion, die niemand pflegt. „Rund um die Uhr zugänglich" oder
-- „Mo–Sa 7–20 Uhr (Zugang über den Markt)" ist genau so gut lesbar und
-- kostet keine Pflege. Wird die Zahl der Standorte gross, ist das der
-- Zeitpunkt für ein echtes Modell — nicht vorher.
--
-- NULL bedeutet „nicht gepflegt". Die App soll dann **nichts** anzeigen,
-- nicht etwa „24/7" annehmen: Eine erfundene Zugänglichkeit ist schlimmer
-- als eine fehlende Angabe.
-- ============================================================================

alter table public.machines
  add column if not exists access_hours text;

comment on column public.machines.access_hours is
  'Zugangszeiten am Standort als Freitext, z. B. "Rund um die Uhr '
  'zugänglich" oder "Mo–Sa 7–20 Uhr (Zugang über den Markt)". NULL = nicht '
  'gepflegt; die App zeigt dann nichts an und nimmt insbesondere KEINE '
  'durchgehende Zugänglichkeit an.';
