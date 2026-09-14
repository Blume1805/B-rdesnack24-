insert into public.ki_register (
  key, bezeichnung, system, anbieter, rolle, zweck,
  datenkategorien, personenbezug, profiling, ist_ki_system,
  ai_act_kategorie, dsgvo_risiko, rechtsgrundlage,
  kennzeichnung_noetig, kennzeichnung_umgesetzt, freigabe_noetig,
  minderjaehrige, manipulationsrisiko, deepfake_risiko,
  ampel, aktiv, begruendung, geprueft_am, geprueft_von
) values (
  'loyalty_login_points',
  'Punkte für tägliches Einloggen',
  'Bördesnack24 App und Web',
  null,
  'keine',
  'Wer die App öffnet, sammelt Punkte auf dieselben Meilensteine wie beim Einkauf: 10 je Tag, 100 zusätzlich für eine vollständige Woche. Bei Erreichen eines Meilensteins entsteht ein persönlicher Gutschein.',
  array['login_tag'],
  true,
  true,
  false,
  'kein_ki_system',
  'mittel',
  'Art. 6 Abs. 1 lit. b DSGVO',
  false,
  false,
  false,
  false,
  false,
  false,
  'gelb',
  true,
  'Feste Rechenregel ohne Lernen, Schliessen oder Modellieren — damit kein KI-System nach Art. 3 Nr. 1 EU AI Act und von Art. 50 nicht erfasst. Als Profiling geführt, weil aus dem Nutzungsverhalten ein geldwerter Vorteil abgeleitet wird (Art. 4 Nr. 4 DSGVO, Widerspruchsrecht nach Art. 21). Für Abonnenten Vertragserfüllung nach lit. b, weil das Punktesystem Teil der zugesagten Leistung ist; wer ohne Abo sammelt, erhält keinen Gutschein — dort trägt lit. f. Gespeichert wird nur der Kalendertag, keine Uhrzeit, kein Gerät, keine IP; Löschung nach 90 Tagen durch app.purge_login_days(). Ampel gelb bis der Hinweis-Chip an der Wochenübersicht steht.',
  date '2026-08-17',
  'Claude Code'
)
on conflict (key) do update set
  bezeichnung = excluded.bezeichnung,
  zweck       = excluded.zweck,
  begruendung = excluded.begruendung,
  geprueft_am = excluded.geprueft_am;
