-- Die offene Frage aus dem Eintrag marketingbild_ki ist beantwortet:
-- hero-genuss.jpg traegt ein C2PA-Manifest von OpenAI (gpt-image), das Bild
-- ist erzeugt und nicht fotografiert. Damit greift die Regel nicht erst in
-- der Zukunft, sondern heute.
--
-- Ich wollte die Ampel daraufhin auf gruen ziehen, weil beide Bedingungen
-- des Eintrags erfuellt sind: sichtbarer Hinweis am Bild und Eintrag auf der
-- KI-Info-Seite. Der CHECK ki_risiko_nicht_gruen hat das abgewiesen:
--
--   CHECK (ampel <> 'gruen' OR NOT (deepfake_risiko OR manipulationsrisiko))
--
-- Der Constraint hat recht und die Bedingung im Eintrag war zu kurz gedacht.
-- Ein Verfahren, das jederzeit ein Bild eines Menschen erzeugen kann, das es
-- nicht gibt, traegt ein dauerhaftes Risiko. Das laesst sich nicht durch
-- einen erledigten Einzelfall abhaken, sondern nur bei jedem neuen Bild
-- erneut einhalten. Gelb ist hier deshalb kein offener Rest, sondern der
-- richtige Dauerzustand: die Kennzeichnung ist umgesetzt, die Aufsicht ueber
-- kuenftige Motive bleibt bestehen. Der Constraint wird nicht aufgeweicht.

update public.ki_register set
  kennzeichnung_umgesetzt = true,
  geprueft_am = '2026-09-03',
  begruendung = replace(
    begruendung,
    'Ampel bleibt gelb: Stand 03.09.2026 existiert kein solches Bild. Sie geht auf gruen, wenn das erste erzeugte Motiv mit sichtbarem Hinweis am Bild und mit einem Eintrag auf der KI-Info-Seite ausgeliefert wird. OFFEN und dem Betreiber vorgelegt: ob das bereits verwendete Motiv hero-genuss.jpg (Frau mit Kaffeebecher) eine Fotografie oder ein erzeugtes Bild ist. Ist es erzeugt, greift diese Regel bereits heute und die Ampel steht zu Unrecht auf einem Zustand ohne Anwendungsfall.',
    'ERSTER ANWENDUNGSFALL, geklaert am 03.09.2026: das Motiv hero-genuss.jpg (Frau mit Kaffeebecher) auf der Landingpage ist erzeugt, nicht fotografiert. Nachweis ist ein C2PA-Manifest von OpenAI (gpt-image) in der Bilddatei; geprueft wurde es im Lovable-Projekt A, aus der Pruefsitzung selbst war die Datei nicht erreichbar. Die Kennzeichnung ist umgesetzt und im Quellcode auf Commit 481ca74 nachgelesen: erstens ein sichtbarer Hinweis unmittelbar unter dem Bild, der es als Gestaltungsbeispiel ausweist und ausdruecklich sagt, dass es keine echte Kundin und keinen echten Standort zeigt, zweitens ein eigener Abschnitt Marketingbilder auf der KI-Info-Seite. AMPEL BLEIBT DAUERHAFT GELB, und zwar nicht wegen eines offenen Restes. Die urspruengliche Bedingung in diesem Eintrag, gruen sobald das erste Motiv gekennzeichnet ausgeliefert ist, war zu kurz gedacht; der CHECK ki_risiko_nicht_gruen hat sie abgewiesen und hat damit recht. Ein Verfahren, das jederzeit das Bild eines Menschen erzeugen kann, den es nicht gibt, traegt ein Risiko, das kein erledigter Einzelfall beendet. Es wird bei jedem neuen Motiv erneut eingehalten oder verletzt. Gelb ist hier der richtige Dauerzustand: umgesetzt und unter Aufsicht. Rot wird der Eintrag, sobald ein erzeugtes Motiv ohne Hinweis am Bild ausgeliefert wird oder eine erzeugte Person als Kunde, Referenz, Partner oder Mitarbeitender auftritt.'
  )
where key = 'marketingbild_ki';

select key, ist_ki_system, kennzeichnung_noetig, kennzeichnung_umgesetzt, ampel,
       position('ERSTER ANWENDUNGSFALL' in begruendung) > 0 as neuer_text_da,
       position('OFFEN und dem Betreiber' in begruendung) > 0 as alte_frage_noch_da,
       length(begruendung) as laenge
from public.ki_register where key = 'marketingbild_ki';
