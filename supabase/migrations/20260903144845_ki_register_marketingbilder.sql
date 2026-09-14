insert into public.ki_register (
  key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling,
  ist_ki_system, ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, manipulationsrisiko, deepfake_risiko,
  ampel, aktiv, begruendung, geprueft_am, geprueft_von
) values (
  'marketingbild_ki',
  'KI-erzeugte Bilder in Marketing und Landingpage',
  'Bildgenerierung mit generativer KI',
  'externe Anbieter, je Werkzeug verschieden',
  'betreiber',
  'Erzeugung von Motiven fuer Landingpage, Unternehmensbereich und Werbung, wo keine eigene Aufnahme vorliegt.',
  array['keine personenbezogenen Eingabedaten'],
  false,
  false,
  true,
  'transparenz',
  'niedrig',
  'Kein Personenbezug bei der Erzeugung. Die Kennzeichnung folgt nicht aus der DSGVO, sondern aus Art. 50 EU AI Act und aus Paragraf 5 UWG: ein synthetisches Bild darf nicht als Aufnahme eines echten Vorgangs erscheinen.',
  true,
  false,
  false,
  false,
  true,
  true,
  'gelb',
  true,
  'Angelegt am 03.09.2026, bevor das erste solche Bild existiert. Abgrenzung zu produktbild_bearbeitung: dort geht es um die Nachbearbeitung EIGENER Aufnahmen (Freistellen, Zuschneiden, Aufhellen), hier um vollstaendig erzeugte Motive. Der Unterschied ist erheblich, weil ein erzeugtes Motiv einen Vorgang zeigt, den es nie gegeben hat. ZWEI PFLICHTEN, die auseinanderzuhalten sind. Erstens Art. 50 Abs. 4 EU AI Act: wer ein KI-System einsetzt, das Bildinhalte erzeugt, die einen Deepfake darstellen, muss offenlegen, dass der Inhalt kuenstlich erzeugt ist. Ob ein erzeugtes Motiv im Einzelfall unter Art. 3 Nr. 60 faellt, ist auslegungsbeduerftig und hier NICHT entschieden; die Kennzeichnung wird unabhaengig davon gefuehrt, weil die zweite Pflicht ohnehin greift. Zweitens Paragraf 5 UWG: ein erzeugtes Bild, das wie die Aufnahme eines echten Kunden, einer echten Werbeflaeche oder eines echten Standorts wirkt, ist eine irrefuehrende Angabe ueber die geschaeftlichen Verhaeltnisse. HARTE GRENZE, die unabhaengig von jeder Kennzeichnung gilt: kein erzeugtes Bild einer Person darf als Kunde, Referenz, Partner oder Mitarbeitender dargestellt werden, und kein erzeugtes Bild darf einen Standort oder eine Werbeflaeche zeigen, die es nicht gibt. Eine Kennzeichnung heilt eine falsche Aussage nicht, sie macht sie nur transparent falsch. Zulaessig ist ein erzeugtes Motiv als erkennbares Gestaltungsbeispiel, sichtbar am Bild beschriftet. Ampel bleibt gelb: Stand 03.09.2026 existiert kein solches Bild. Sie geht auf gruen, wenn das erste erzeugte Motiv mit sichtbarem Hinweis am Bild und mit einem Eintrag auf der KI-Info-Seite ausgeliefert wird. OFFEN und dem Betreiber vorgelegt: ob das bereits verwendete Motiv hero-genuss.jpg (Frau mit Kaffeebecher) eine Fotografie oder ein erzeugtes Bild ist. Ist es erzeugt, greift diese Regel bereits heute und die Ampel steht zu Unrecht auf einem Zustand ohne Anwendungsfall.',
  '2026-09-03',
  'Claude Code'
)
on conflict (key) do nothing;

select key, ist_ki_system, kennzeichnung_noetig, kennzeichnung_umgesetzt, ampel
from public.ki_register order by key;
