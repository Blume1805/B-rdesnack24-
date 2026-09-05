-- Datenschutzerklärung: Werbeanfrage und Werbekontaktmessung ergänzen.
--
-- Zwei Gründe für diese Migration. Erstens beschreibt die Erklärung eine
-- Datenverarbeitung noch nicht, die es künftig gibt. Zweitens — und das
-- wiegt schwerer — enthält Abschnitt 3 eine Zusage, die nach dem Bau der
-- Drossel je Absenderadresse so nicht mehr stimmt: dort steht, wir
-- verarbeiteten keine IP-Adressen. Wir speichern weiterhin keine, aber wir
-- rechnen aus einer einen Schlüssel. Das ist ein Unterschied, den ein Leser
-- kennen muss.
--
-- Der Text wird nicht neu geschrieben, sondern an sechs Stellen geändert.
-- Findet eine Ankerstelle sich nicht, bricht die Migration ab — lieber gar
-- keine Änderung als eine halbe an einem Rechtstext.

do $do$
declare
  v_alt   text;
  v_neu   text;
  v_anker text;
  v_ersatz text;
  v_treffer int := 0;

  v_fehlt   constant text := 'Datenschutzerklärung: Ankertext nicht gefunden — ';
begin
  select inhalt into v_alt from public.legal_text where slug = 'datenschutz';

  -- Beim Neuaufbau von Null gibt es hier noch keinen Text: die Rechtstexte
  -- werden erst von der nachfolgenden Migration eingespielt, und zwar bereits
  -- in der Fassung v6. Dann ist hier nichts zu tun. Kein Abbruch — sonst
  -- liesse sich die Datenbank nicht mehr von Null aufbauen, und genau das ist
  -- der Nachweis, an dem dieses Projekt haengt.
  if v_alt is null then
    raise notice 'Datenschutzerklaerung noch nicht vorhanden — die Fassung v6 '
      'kommt mit der Migration rechtstexte_ins_repository. Nichts zu tun.';
    return;
  end if;
  v_neu := v_alt;

  -- ---------------------------------------------------------------------
  -- 1. Fassung hochzählen
  -- ---------------------------------------------------------------------
  v_anker := '**Datenschutzerklärung (v5 · 2026-08)**';
  if position(v_anker in v_neu) = 0 then
    raise exception '%Fassungszeile', v_fehlt;
  end if;
  v_neu := replace(v_neu, v_anker, '**Datenschutzerklärung (v6 · 2026-09)**');

  -- ---------------------------------------------------------------------
  -- 2. Abschnitt 1: zwei neue Buchstaben nach j)
  -- ---------------------------------------------------------------------
  v_anker := '     Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit LMHV, IfSG, AO, HGB.';
  if position(v_anker in v_neu) = 0 then
    raise exception '%Abschnitt 1 j)', v_fehlt;
  end if;
  v_ersatz := v_anker || E'\n\n'
|| E'  **k) Werbe- und Sponsoringanfragen (betrifft nicht unsere App-Kundschaft)**\n'
|| E'     Stellt ein Unternehmen über unsere Website eine Anfrage zu Werbung,\n'
|| E'     Sponsoring oder einer Partnerschaft, verarbeiten wir: Firmenname, Name der\n'
|| E'     Ansprechperson, E-Mail-Adresse, optional Telefonnummer und Website, die\n'
|| E'     angefragten Leistungen, Standortwünsche, Wunschtermin und Laufzeit,\n'
|| E'     optional eine Budgetangabe sowie den Nachrichtentext.\n'
|| E'     Zweck: Bearbeitung der Anfrage und Erstellung eines Angebots.\n'
|| E'     Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Massnahme auf\n'
|| E'     Ihre Anfrage hin).\n'
|| E'\n'
|| E'     Eine Anfrage ist keine Einwilligung in Werbung. Wir nehmen die Adresse\n'
|| E'     nicht in einen Verteiler auf. Möchten Sie darüber hinaus Informationen,\n'
|| E'     können Sie das im Formular gesondert und freiwillig ankreuzen; das Feld\n'
|| E'     ist nicht vorausgewählt (Art. 6 Abs. 1 lit. a DSGVO, § 7 Abs. 2 Nr. 2 UWG).\n'
|| E'\n'
|| E'     Zum Schutz vor massenhaft versandten Formularen begrenzen wir die Zahl der\n'
|| E'     Anfragen je Tag. Dazu rechnen wir aus Ihrer IP-Adresse einen Prüfwert —\n'
|| E'     siehe dazu den Hinweis unter 3.\n'
|| E'\n'
|| E'  **l) Messung von Werbekontakten**\n'
|| E'     Sobald in der App bezahlte Anzeigen ausgespielt werden, zählen wir, wie oft\n'
|| E'     ein Werbemittel angezeigt, wie lange es sichtbar und wie oft es angetippt\n'
|| E'     wurde. Dabei wird zu jedem Kontakt vorübergehend Ihre Konto-Kennung\n'
|| E'     gespeichert — nur, um mehrfach gezählte Kontakte derselben Sitzung\n'
|| E'     zusammenzufassen und um zu verhindern, dass ein einzelnes Konto die Zahlen\n'
|| E'     verfälscht.\n'
|| E'     Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer\n'
|| E'     nachprüfbaren Abrechnung gegenüber Werbekunden).\n'
|| E'\n'
|| E'     **Werbekunden erhalten diese Daten nicht.** Sie sehen ausschliesslich\n'
|| E'     zusammengefasste Zahlen, und auch die nur, wenn genügend Kontakte\n'
|| E'     zusammenkommen; kleine Gruppen werden gar nicht ausgewiesen. Näheres\n'
|| E'     unter 4.\n'
|| E'\n'
|| E'     Die Kontaktdaten mit Konto-Kennung löschen wir nach 90 Tagen; die\n'
|| E'     zusammengefassten Zahlen bleiben, sie haben dann keinen Bezug mehr zu\n'
|| E'     einer Person. Stand dieser Fassung ist noch keine Anzeige geschaltet, es\n'
|| E'     wird also derzeit nichts gemessen.\n'
|| E'\n'
|| E'     **Sie können dieser Verarbeitung widersprechen (Art. 21 DSGVO)** — formlos an\n'
|| E'     die im Impressum genannte Adresse.';
  v_neu := replace(v_neu, v_anker, v_ersatz);

  -- ---------------------------------------------------------------------
  -- 3. Abschnitt 3: die Zusage zu IP-Adressen richtigstellen
  -- ---------------------------------------------------------------------
  v_anker := '  * Keine IP-Adressen in unseren Anwendungsdaten. Wir speichern sie weder zu' || E'\n'
          || '    Bewertungen noch zu Kontaktanfragen oder Protokolleinträgen.';
  if position(v_anker in v_neu) = 0 then
    raise exception '%Abschnitt 3, IP-Adressen', v_fehlt;
  end if;
  v_ersatz :=
   E'  * Keine IP-Adressen in unseren Anwendungsdaten. Wir speichern sie weder zu\n'
|| E'    Bewertungen noch zu Kontaktanfragen oder Protokolleinträgen.\n'
|| E'\n'
|| E'    Eine Ausnahme, die wir offen benennen: Beim Werbeanfrageformular auf unserer\n'
|| E'    Website begrenzen wir die Zahl der Anfragen je Anschluss und Tag. Dazu wird\n'
|| E'    aus Ihrer IP-Adresse ein Prüfwert berechnet — mit einem Geheimnis, das täglich\n'
|| E'    wechselt. Gespeichert wird nur dieser Prüfwert, nie die Adresse. Aus ihm lässt\n'
|| E'    sich die Adresse nicht zurückrechnen, und derselbe Anschluss ist an zwei\n'
|| E'    verschiedenen Tagen nicht als derselbe erkennbar. Nach sieben Tagen werden\n'
|| E'    Prüfwert und Tagesgeheimnis gelöscht. Wir verwenden das ausschliesslich zur\n'
|| E'    Missbrauchsabwehr, nie zur Wiedererkennung von Personen.';
  v_neu := replace(v_neu, v_anker, v_ersatz);

  -- ---------------------------------------------------------------------
  -- 4. Abschnitt 4: was Werbekunden bekommen — und was nicht
  -- ---------------------------------------------------------------------
  v_anker := '  An Behörden geben wir Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind.';
  if position(v_anker in v_neu) = 0 then
    raise exception '%Abschnitt 4, Behörden', v_fehlt;
  end if;
  v_ersatz :=
   E'  **Werbekunden sind keine Empfänger Ihrer Daten.** Ein Unternehmen, das bei uns\n'
|| E'  Werbung bucht, erhält ausschliesslich zusammengefasste Zahlen zu seiner eigenen\n'
|| E'  Kampagne: wie oft ein Werbemittel angezeigt, wie lange es gesehen und wie oft es\n'
|| E'  angetippt wurde. Es erhält keine Namen, keine E-Mail-Adressen, keine\n'
|| E'  Kundennummern, keine Kaufhistorien und keine Kennungen irgendeiner Art — und\n'
|| E'  auch keine Einzelwerte, aus denen sich eine Person erschliessen liesse: Liegt\n'
|| E'  eine Zahl unter einem festgelegten Mindestwert, wird sie gar nicht erst\n'
|| E'  ausgewiesen. Diese Prüfung findet auf unserem Server statt, nicht in der\n'
|| E'  Anzeige, und lässt sich vom Werbekunden nicht umgehen.\n'
|| E'\n'
|| v_anker;
  v_neu := replace(v_neu, v_anker, v_ersatz);

  -- ---------------------------------------------------------------------
  -- 5. Abschnitt 6: Fristen
  -- ---------------------------------------------------------------------
  v_anker := '  * HACCP- und IfSG-Nachweise: nach den jeweiligen gesetzlichen Vorgaben.';
  if position(v_anker in v_neu) = 0 then
    raise exception '%Abschnitt 6, HACCP', v_fehlt;
  end if;
  v_ersatz := v_anker || E'\n'
|| E'  * Werbekontakte mit Konto-Kennung: 90 Tage. Die zusammengefassten Zahlen bleiben\n'
|| E'    darüber hinaus erhalten, ohne Bezug zu einer Person.\n'
|| E'  * Prüfwerte zur Missbrauchsabwehr am Anfrageformular: sieben Tage.\n'
|| E'  * Werbe- und Sponsoringanfragen von Unternehmen: Anfragen, die zu keinem\n'
|| E'    Geschäft geführt haben, löschen wir ein Jahr nach der letzten Bearbeitung.\n'
|| E'    Laufende und erfolgreiche Anfragen bleiben, solange der Vorgang andauert\n'
|| E'    beziehungsweise soweit Aufbewahrungspflichten bestehen.';
  v_neu := replace(v_neu, v_anker, v_ersatz);

  -- ---------------------------------------------------------------------
  -- 6. Abschnitt 8: auch die Werbeauswahl entscheidet nichts über Sie
  -- ---------------------------------------------------------------------
  v_anker := '  Zahlungsfähigkeit oder Ihres Verhaltens statt.';
  if position(v_anker in v_neu) = 0 then
    raise exception '%Abschnitt 8, Zahlungsfähigkeit', v_fehlt;
  end if;
  v_ersatz := v_anker || E'\n'
|| E'\n'
|| E'  Dasselbe gilt für bezahlte Anzeigen: Welche Anzeige erscheint, richtet sich nach\n'
|| E'  der Laufzeit der jeweiligen Kampagne und dem gebuchten Platz, nicht nach Ihrer\n'
|| E'  Person. Es findet keine Auswertung Ihres Verhaltens statt, um Ihnen eine\n'
|| E'  bestimmte Anzeige zuzuordnen.';
  v_neu := replace(v_neu, v_anker, v_ersatz);

  -- ---------------------------------------------------------------------
  -- Schreiben
  -- ---------------------------------------------------------------------
  if v_neu = v_alt then
    raise exception 'Datenschutzerklärung: nichts geändert — das kann nicht sein';
  end if;

  update public.legal_text
     set inhalt = v_neu, aktualisiert_am = now()
   where slug = 'datenschutz';

  raise notice 'Datenschutzerklärung: % Zeichen vorher, % nachher',
    length(v_alt), length(v_neu);
end $do$;

-- ---------------------------------------------------------------------------
-- Aufbewahrungsfrist erledigter Anfragen: entschieden
-- ---------------------------------------------------------------------------
update public.loeschregeln
   set begruendung =
       'Die Anfrage enthält Name und Kontaktdaten einer natürlichen Person beim '
       'anfragenden Unternehmen. Kein Kontobezug, deshalb keine Bezugsspalte. '
       'ENTSCHIEDEN am 03.09.2026 durch den Betreiber: erledigte Anfragen ohne '
       'Geschäft werden ein Jahr nach der letzten Bearbeitung gelöscht. Laufende '
       'und gewonnene bleiben, weil der Vorgang nicht abgeschlossen ist — der '
       'Ausdruck in frist_ab liefert für sie NULL, der Vergleich wird NULL und die '
       'Zeile bleibt stehen. '
       'Was diese Entscheidung NICHT ist: eine Rechtsauskunft. Die Frage, ob eine '
       'erfolglose Werbeanfrage ein empfangener Handelsbrief im Sinne von § 147 AO '
       'ist und damit sechs Jahre aufzubewahren wäre, bleibt fachlich ungeklärt. '
       'Der Betreiber hat sich in Kenntnis dieser Unklarheit für ein Jahr '
       'entschieden. Fällt die fachliche Prüfung später anders aus, ist allein der '
       'Wert in jahre zu ändern; der Ausdruck trägt beide Fristen.',
       geaendert_am = now()
 where tabelle = 'leads';
