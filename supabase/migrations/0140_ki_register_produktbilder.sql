-- ============================================================================
-- 0140 — KI-Bearbeitung von Produktbildern ins KI-Register
-- ----------------------------------------------------------------------------
-- Mit dem Bildregister (0139) wird die KI-Bearbeitung von Produktfotos zur
-- geregelten Praxis: Die Nutzungsbedingungen sagen sie zu, die Info-Seite im
-- Kundenbereich beschreibt sie. Was in den Texten steht, gehört auch ins
-- Register — sonst ist die Einstufung eine Behauptung im Fliesstext.
--
-- WARUM GELB UND NICHT GRÜN
--
-- Ein Bildwerkzeug wie ChatGPT ist anders als alles bisher Eingetragene ein
-- ECHTES KI-System (Art. 3 Nr. 1), und wir sind sein Betreiber. Damit greift
-- Art. 50 Abs. 4 unmittelbar: Erzeugt oder verändert KI ein Bild so, dass es
-- echt wirkt, ohne es zu sein, ist das offenzulegen. Die Möglichkeit besteht,
-- solange das Werkzeug im Einsatz ist — `deepfake_risiko` ist deshalb wahr,
-- und die Ampel kann nach `ki_risiko_nicht_gruen` gar nicht grün stehen.
--
-- Grün wird sie auch nicht dadurch, dass heute nichts betroffen ist. Der
-- Nachweis, dass die Kennzeichnung wirklich erscheint, lässt sich erst am
-- ersten betroffenen Bild führen — und dann am Bild, nicht hier.
--
-- WAS HEUTE TATSÄCHLICH IST (abgefragt, nicht angenommen)
--
--   * 62 Produkte im Katalog, davon 0 mit hinterlegtem Bild.
--   * 0 Einträge im Bildregister.
--
-- Es ist also noch kein einziges Produktfoto im Kundenbereich, weder mit noch
-- ohne KI. Die Einstufung greift dem vor, statt hinterherzulaufen.
-- ============================================================================

insert into public.ki_register (
  key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling,
  ist_ki_system, ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, manipulationsrisiko, deepfake_risiko,
  ampel, aktiv, begruendung, geprueft_am, geprueft_von
) values (
  'produktbild_bearbeitung',
  'KI-Bearbeitung von Produktfotos',
  'Bildbearbeitung mit generativer KI (z. B. ChatGPT, Adobe Firefly)',
  'externe Anbieter, je Werkzeug verschieden',
  'betreiber',
  'Freistellen, Zuschneiden und Aufhellen eigener Produktaufnahmen für die '
    'Darstellung in App und Werbung.',
  array['Produktfotos'],
  false,
  false,
  true,
  'transparenz',
  'niedrig',
  'Art. 6 Abs. 1 lit. f DSGVO nicht einschlägig — keine personenbezogenen '
    'Daten; Grundlage ist § 23 Abs. 1 Nr. 3 MarkenG für die Darstellung '
    'fremder Marken.',
  true,
  false,
  false,
  false,
  false,
  true,
  'gelb',
  true,
  'Jedes Produktbild wird in public.produktbilder dokumentiert. Die Spalte '
    'kennzeichnung_noetig wird dort gerechnet: KI verwendet UND Produkt oder '
    'Umgebung verändert. Freistellen, Zuschneiden und Helligkeit lösen sie '
    'nicht aus, weil das Bild den Gegenstand weiterhin zeigt, wie er ist. '
    'Stand 26.08.2026: 62 Produkte, davon 0 mit Bild, und 0 Einträge im '
    'Bildregister — es ist noch kein Produktfoto im Kundenbereich. '
    'kennzeichnung_umgesetzt bleibt deshalb falsch und die Ampel gelb: Der '
    'sichtbare Hinweis am Bild ist erst zu führen, wenn das erste Bild mit '
    'kennzeichnung_noetig = true veröffentlicht wird. Zugesagt ist die '
    'Kennzeichnung bereits in den Nutzungsbedingungen (Abschnitt 8) und auf '
    'der KI-Info-Seite.',
  date '2026-08-26',
  'Bördesnack24 GbR'
)
on conflict (key) do nothing;
