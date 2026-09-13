# EU-Icons zur Kennzeichnung KI-generierter Inhalte

## Woher die Dateien stammen

Quelle ist die Seite der Europäischen Kommission
„EU icons for labelling AI-generated content":
https://digital-strategy.ec.europa.eu/policies/eu-icons-labelling-ai-generated-content

Die drei PNG in diesem Ordner sind **aus dem PDF-Ausdruck dieser Seite
extrahiert**, den der Betreiber am 03.09.2026 bereitgestellt hat
(PDF vom 07.08.2026, deutsche Maschinenübersetzung des eTranslation-Dienstes).
Extrahiert wurde verlustfrei aus den eingebetteten Bildobjekten, danach auf
die Bildkante beschnitten und auf 128 px Höhe skaliert. **Nichts an den
Motiven selbst wurde verändert** — keine Farbe, keine Form, kein Text.

Die offiziellen Zip-Archive mit allen vier Varianten (schwarz, weiß und beide
mit 50 % Transparenz) in SVG und PNG liegen unter

* SVG: https://ec.europa.eu/newsroom/dae/redirection/document/129546
* PNG: https://ec.europa.eu/newsroom/dae/redirection/document/129547

Beide waren aus der Arbeitsumgebung **nicht erreichbar** (der Egress-Proxy
beantwortet ec.europa.eu mit 403). Sobald sie erreichbar sind, sind die
Dateien hier durch die offiziellen zu ersetzen — vor allem die weiße
Variante, die hier fehlt und die auf dunklem Grund gebraucht wird.

## Lizenz

Die Kommission stellt die Symbole öffentlich zur freien Verwendung bereit,
**ohne dass der Kommission oder dem Amt für Künstliche Intelligenz eine
Namensnennung zugeschrieben werden muss**. Das Dokument selbst steht unter
CC BY 4.0. Eine Urhebernennung am Icon ist daher nicht erforderlich; diese
Datei hält die Herkunft trotzdem fest, weil eine Herkunftsangabe und eine
Lizenzpflicht zwei verschiedene Dinge sind.

## Die drei Motive und wann welches gilt

| Datei | Motiv | Wann |
|---|---|---|
| `eu-ki-basis.png` | Kreis mit „AI" | Wenn KI beteiligt war und daneben eine eigene Textbeschriftung oder eine verlinkte zweite Ebene steht |
| `eu-ki-generiert.png` | Pille „AI GENERATED" | Wenn der Inhalt **vollständig** von KI erzeugt wurde, ohne von Menschen geschaffene Elemente |
| `eu-ki-bearbeitet.png` | Pille „AI MODIFIED" | Wenn **bestehender, von Menschen erstellter** Inhalt teilweise mit KI verändert wurde |

## Drei Punkte aus dem Kommissionstext, die für uns tragen

**Die Verwendung der Symbole ist freiwillig, die Pflicht aus Art. 50 KI-VO
ist es nicht.** Wörtlich: „Die Verwendung dieser Icons stellt für sich
genommen keine Rechtskonformität dar." Ein Icon ersetzt also keine Prüfung,
ob die Offenlegung im Einzelfall klar und erkennbar ist.

**Ein Icon wirkt besser mit Text daneben.** Die Kommission berichtet aus
ihrem Nutzertest, die Leistung habe sich „über alle Maßnahmen hinweg
verbessert, wenn das Basissymbol von einer Textbeschriftung begleitet
wurde". Deshalb verwenden wir hier nicht das nackte Basissymbol, sondern die
beiden beschrifteten Pillen: sie tragen ihre Beschriftung im Motiv.

**Barrierefreiheit ist ausdrücklich verlangt.** Das Symbol soll deutlich
sichtbar sein, eine begleitende Beschriftung soll einfache Sprache
verwenden, und das Symbol soll „durch assistive Technologien mit Alt-Text
oder ARIA-Etiketten lesbar sein". Wo eine zweite Ebene weitere Informationen
trägt, soll das Symbol darauf hinweisen und die zweite Ebene navigierbar
sein. Genau das ist unsere Verlinkung auf die Seite zu KI-Inhalten.

## Was hier bewusst nicht steht

Die Beschriftung der Motive ist **englisch**. Für eine durchgehend deutsche
Oberfläche ist das eine Schwächung gegenüber einem deutschen Satz. Die
Entscheidung, den bisherigen deutschen Hinweistext durch das Icon zu
ersetzen, hat der Betreiber getroffen; sie ist in
`docs/KI-KENNZEICHNUNG.md` mit ihren Folgen festgehalten. Der deutsche
Wortlaut lebt weiter im Alternativtext und auf der verlinkten Seite.
