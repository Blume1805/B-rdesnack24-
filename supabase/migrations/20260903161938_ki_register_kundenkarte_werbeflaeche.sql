-- Der Werbeplatz auf der Kundenkarte waehlt Inhalte automatisch aus. Nach der
-- Hausregel gehoert jede automatisch ausgewaehlte Flaeche im Kundenbereich
-- ins Register und traegt einen sichtbaren Hinweis, auch wenn keine KI
-- beteiligt ist. Genau das ist hier der Fall: die Auswahl ist eine
-- Sortierung nach Kalendertag, kein lernendes System.

insert into public.ki_register (
  key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling,
  ist_ki_system, ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, manipulationsrisiko, deepfake_risiko,
  ampel, aktiv, begruendung, geprueft_am, geprueft_von
) values (
  'kundenkarte_werbeflaeche',
  'Werbelogos auf der Kundenkarte',
  'Regelbasierte Auswahl in public.kundenkarte_werbeplatz',
  'eigenes System',
  'keine',
  'Anzeige der Logos von Unternehmen, die digitale Werbung gebucht haben, auf der Kundenkarte.',
  array['keine personenbezogenen Eingabedaten'],
  false,
  false,
  false,
  'kein_ki_system',
  'niedrig',
  'Keine Rechtsgrundlage nach Art. 6 DSGVO erforderlich, weil bei der Auswahl keine personenbezogenen Daten verarbeitet werden. Die Kennzeichnungspflicht folgt aus Paragraf 5a Abs. 4 UWG, nicht aus dem Datenschutzrecht.',
  true,
  false,
  false,
  false,
  false,
  false,
  'gelb',
  true,
  'Angelegt am 03.09.2026 mit dem Backend der Flaeche. KEIN KI-SYSTEM: die Auswahl ist eine Sortierung nach dem Kalendertag, es lernt nichts und entscheidet nichts ueber einen Einzelnen. Der Eintrag steht hier trotzdem, weil die Hausregel jede automatisch ausgewaehlte Flaeche im Kundenbereich erfasst, und weil die Frage sonst bei jeder Aenderung neu gestellt wuerde. NICHT PERSONALISIERT, und das ist die tragende Entscheidung: die Funktion liest den Aufrufer nirgends, alle Kunden sehen an einem Tag dieselben Logos in derselben Reihenfolge. Nachgewiesen doppelt, ueber das Verhalten (zwei Kunden erhalten dieselbe Ausgabe) und ueber den Rumpf (er enthaelt weder auth.uid noch einen Profilbezug). Daraus folgt: kein Profiling, keine Einzelfallentscheidung nach Art. 22 DSGVO, und ein Widerspruch gegen personalisierte Anzeige laesst diese Flaeche unberuehrt, weil sie nie personalisiert war. ZWEI HINWEISE SIND PFLICHT, sie sagen Verschiedenes: das Wort Anzeige nach Paragraf 5a Abs. 4 UWG macht den kommerziellen Zweck kenntlich, der Chip nach der Hausregel macht kenntlich, dass die Auswahl automatisch erfolgt ist. Keiner ersetzt den anderen. Ohne den Werbehinweis koennte ein fremdes Logo neben der eigenen Kundennummer als Partnerschaft, Zahlungsmittel oder Zugehoerigkeit gelesen werden. Ein Alternativtext ist am Motiv erzwungen, weil eine fuer Screenreader stumme Werbeflaeche eine nicht gekennzeichnete Werbeflaeche ist. Ampel gelb: das Backend steht und ist geprueft, die sichtbare Umsetzung in Kundenkarte und Gesellschafter-Verwaltung fehlt noch. Sie geht auf gruen, wenn beide Hinweise in der ausgelieferten Oberflaeche stehen. Wird die Auswahl je personalisiert, ist das keine Aenderung an einer Sortierklausel, sondern ein neuer Sachverhalt mit neuer Rechtsgrundlage, und dieser Eintrag ist dann von Grund auf neu zu fassen.',
  '2026-09-03',
  'Claude Code'
)
on conflict (key) do nothing;

select key, ist_ki_system, ai_act_kategorie, kennzeichnung_noetig, ampel
from public.ki_register where key = 'kundenkarte_werbeflaeche';
