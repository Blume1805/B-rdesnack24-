# Nachtrag Landingpage: sechs Anpassungen, Prüfung und eine Korrektur

Projekt A (`d5033021-6dce-4044-8bf6-bb50d80aa8ff`), Thread `main`.
Stand 03.09.2026.

| Nachricht | ID | Inhalt |
|---|---|---|
| Nachtrag | `umsg_01m1kwm5sef428tw9cqhhhde6g` | die sechs Punkte unten |
| Korrektur | `umsg_01m1kzz4r9f8tax2gjfztg7tzy` | Widerspruch auf der KI-Info-Seite, E-Mail-Vorlagen freigegeben |

Umgesetzt vom Agenten in Commit `481ca74ce2c758f23bee62c3d704bbaa470d8944`,
10,9 Credits, 100 Tests in 14 Dateien grün, `tsgo` sauber.

## Die sechs Punkte und ihr Nachweis

Geprüft habe ich nicht die Zusammenfassung des Agenten, sondern den Quellcode
auf dem genannten Commit. Jede Zeile unten ist dort nachgelesen.

**1 — Unternehmerbereich wird übersehen.** Eigener Abschnitt mit
`band-ink`-Vollfläche direkt über dem Footer, `aria-labelledby="fuer-unternehmen"`,
Überschrift „Ihre Marke steht dort, wo die Leute stehen.", ein einziges
`cta-pill` auf `/unternehmen/anfrage`, die drei übrigen Seiten untergeordnet
als Navigationsliste. Der Hook trägt die physische, regionale, rund-um-die-Uhr
verfügbare Fläche — **keine Reichweiten- oder Frequenzzahl**, weil es dafür
keine Messdaten gibt. Eine erfundene Zahl an dieser Stelle wäre § 5 UWG.

**2 — KI-Bild.** Das vorhandene Motiv `hero-genuss.jpg` trägt ein
C2PA-Manifest von OpenAI (gpt-image); die offene Frage, ob es Fotografie oder
Erzeugnis ist, ist damit beantwortet — es ist erzeugt. Der Hinweis steht
sichtbar unmittelbar unter dem Bild:

> Gestaltungsbeispiel, mit KI erzeugt. Keine echte Kundin, kein echter Standort.

Dazu `alt="Mit KI erzeugtes Stimmungsbild: eine Person genießt einen Kaffee"`
und ein Abschnitt „Marketingbilder" auf `/app/ki-hinweis`. Der Text hält die
harte Grenze aus dem Register ein: er behauptet keine echte Kundin und keinen
echten Standort. Kein zusätzliches Bild wurde erzeugt.

**3 — Groß- und Kleinschreibung.** Eyebrows und Überschriften über alle Routen:
„Rund um die Uhr in der Börde.", „Das Sortiment.", „Der Unterschied.",
„Für Unternehmen.", „Service und Recht.", „Jetzt loslegen." Die abschließenden
Punkte sind Systemstil, keine Rechtschreibfrage, und bleiben. `type-eyebrow` in
`styles.css` dokumentierte die Regel schon vorher („Keine Textumformung:
deutsche Groß- und Kleinschreibung bleibt erhalten") — das CSS war richtig, die
Zeichenketten widersprachen ihm. Der Fix gehörte deshalb in die Zeichenketten.

Die Flutter-App war nicht betroffen: `grep -rhoP "Eyebrow\(\s*'\K[^']+"` über
`apps/mobile/lib` liefert **0** klein beginnende Labels. „Überall" verengt sich
damit auf Projekt A.

**4 — Bild der Frau zentrieren.** `object-cover object-center`, auf schmalen
Geräten randlos (`-mx-6`) über die volle Breite. Der Zoom läuft weiter, aber
innerhalb eines Rahmens fester Höhe (`ScrollZoom frameClassName="h-[42svh]"`),
sodass nichts springt.

**5 — Keyvisual weiche Kanten.** `object-contain object-center` im
`BoerdeMotif`, dazu `.keyvisual-weich` mit radialer Maske
(`radial-gradient(ellipse at center, #000 40%, #000/55% 62%, transparent 80%)`).
Liegt hinter dem Text mit `pointer-events-none` und `aria-hidden`, Deckkraft
0,05, damit der Kontrast der Schrift darüber unberührt bleibt.

**6 — Platzhalter in den Slides.** `MediaPlaceholder` mit `aspect-[4/3]` und
Hinweis „Foto folgt" in jeder Kategoriezeile der Wischgalerie.
**Ausdrücklich keine erzeugten Produktbilder** — es gibt 63 Produkte und kein
einziges Foto, und ein erzeugtes Produktbild wäre eine Behauptung über Ware,
die so nicht aussieht.

## Der Fehler, den der Nachtrag erzeugt hat

`src/routes/app.ki-hinweis.tsx` behauptet im Fließtext weiterhin, die
Nachbearbeitung von Produktfotos sei „die einzige Funktion dieser Art in der
App" — und listet direkt darunter „Marketingbilder" als zweite. Eine
Pflichtangabe nach Art. 50 EU AI Act, die den KI-Einsatz kleiner darstellt als
er ist, ist unrichtig, und zwar in der gefährlichen Richtung.

Korrektur ist beauftragt: den Absatz auf zwei benannte KI-Systeme umschreiben,
ohne Zählwort, das beim nächsten Bild wieder falsch wird. Beide Abgrenzungen
bleiben erhalten — alles Übrige regelbasiert, der Chat-Assistent ausdrücklich
kein KI-System.

Die Flutter-App ist hier **nicht** betroffen: dort lautet die Formulierung „die
einzige Stelle in **dieser App**", und das Marketingmotiv steht auf der
Landingpage, nicht in der App. Die Aussage ist also korrekt eingegrenzt.

## E-Mail-Vorlagen

Der Agent hatte `src/lib/email/templates.ts` (rund 105 Zeichenketten) für die
Schreibweise offengelassen und nachgefragt. Freigegeben, aber getrennt und
unter Auflagen: ausschließlich Schreibweise, kein Wort und kein Satzzeichen im
rechtlichen Gehalt, keine Umlautumschrift, keine Fristangabe. Dort stehen
Widerrufsbelehrung, Kündigungsbestätigung, Fristen und Beträge. Rückmeldung als
Vorher-Nachher-Liste zum Abgleich gegen die Rechtstexte.

Vorgeschichte: bei der Übertragung von Fehlermeldungen in die Produktion waren
schon einmal „gueltige" und „Datenschutzerklaerung" entstanden. Genau deshalb
die Auflage.

## Register

`marketingbild_ki` liegt in der Live-Datenbank
(`20260903144845_ki_register_marketingbilder.sql`), nachgezogen um den ersten
Anwendungsfall (`20260903160105_…_erster_anwendungsfall.sql`). Beide
Migrationsdateien sind md5-gleich mit dem, was in Produktion lief.

Die Ampel bleibt **gelb**, und das ist kein offener Rest: der Versuch, sie auf
grün zu ziehen, ist am CHECK `ki_risiko_nicht_gruen` gescheitert —

```sql
CHECK (ampel <> 'gruen' OR NOT (deepfake_risiko OR manipulationsrisiko))
```

— und der Constraint hat recht. Die Bedingung, die ich beim Anlegen des
Eintrags formuliert hatte („grün, sobald das erste Motiv gekennzeichnet
ausgeliefert ist"), war zu kurz gedacht. Ein Verfahren, das jederzeit das Bild
eines Menschen erzeugen kann, den es nicht gibt, trägt ein Risiko, das kein
erledigter Einzelfall beendet; es wird bei jedem neuen Motiv erneut eingehalten
oder verletzt. Gelb heißt hier: umgesetzt und unter Aufsicht.
`kennzeichnung_umgesetzt` steht auf `true`. Rot wird der Eintrag, sobald ein
erzeugtes Motiv ohne Hinweis am Bild ausgeliefert wird oder eine erzeugte
Person als Kunde, Referenz, Partner oder Mitarbeitender auftritt.

## Was aus dieser Runde offen bleibt

* Korrektur der KI-Info-Seite und die Vorher-Nachher-Liste der E-Mail-Texte —
  beim Agenten beauftragt, noch nicht geprüft.
* Das C2PA-Manifest habe ich **nicht selbst gelesen**: die Bilddatei ist aus
  dieser Sitzung nicht erreichbar (Egress blockt `lovable.app`, HTTP 000). Die
  Feststellung stammt vom Agenten. Sie wirkt in die vorsichtige Richtung —
  Kennzeichnung statt keine —, deshalb ist sie übernommen; ein eigener Blick in
  die Datei bleibt trotzdem offen.
