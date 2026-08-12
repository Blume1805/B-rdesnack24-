# Kundenkarte am Automaten — Rabatt ohne Rückfrage

Stand: 12.08.2026 · Entscheidung des Auftraggebers: Der Automat soll den
Rabatt **ohne Online-Nachfrage** erkennen. Der QR-Code muss die Antwort
also selbst tragen.

Dieses Dokument beschreibt das Format und ist so geschrieben, dass es an
den Automaten- beziehungsweise Terminalhersteller weitergegeben werden
kann.

---

## Das Grundprinzip

Der QR-Code enthält zwei Teile: die Aussage und eine Unterschrift.

```
BS24.1.<Aussage>.<Unterschrift>
```

Die **Aussage** sagt, wer der Kunde ist und was ihm zusteht. Die
**Unterschrift** beweist, dass die Aussage von uns stammt und nicht
verändert wurde.

Der Automat prüft die Unterschrift mit einem Schlüssel, der einmal auf
dem Gerät hinterlegt wird. Er braucht dafür **keine Internetverbindung**
und keine Datenbank.

### Warum unterschrieben und nicht einfach eine Nummer

Ohne Unterschrift wäre der Code beliebig fälschbar: Wer das Muster
einmal sieht, schreibt sich seinen eigenen Code mit 5 % — oder mit 50 %.
Die Unterschrift macht das unmöglich, ohne dass der Automat irgendetwas
nachschlagen muss.

### Warum asymmetrisch und nicht mit einem gemeinsamen Geheimnis

Naheliegend wäre ein gemeinsames Passwort auf beiden Seiten (HMAC). Das
ist einfacher, hat aber einen Haken, der bei Automaten schwer wiegt: Das
Gerät steht im öffentlichen Raum. Wer eines aufbricht und das Geheimnis
ausliest, kann damit **selbst gültige Codes erzeugen** — für jeden
Rabattsatz, unbegrenzt.

Deshalb **Ed25519**: Wir unterschreiben mit einem privaten Schlüssel, der
unser Haus nie verlässt. Auf dem Automaten liegt nur der öffentliche
Schlüssel. Damit lässt sich prüfen, aber nichts erzeugen. Ein
aufgebrochener Automat gibt einem Angreifer nichts, was er nicht ohnehin
öffentlich bekommen könnte.

---

## Der Inhalt der Aussage

Base64url-kodiertes, kompaktes JSON. Kurze Schlüssel, damit der QR-Code
klein und auch auf hellen Bildschirmen zuverlässig lesbar bleibt.

| Feld | Bedeutung | Beispiel |
|---|---|---|
| `k` | Kundennummer, für den Beleg | `"10023"` |
| `d` | Rabattsatz in Prozent | `5` |
| `e` | Ablauf, Unix-Zeit in Sekunden | `1786694400` |
| `v` | Schlüsselkennung (für den Schlüsselwechsel) | `1` |

Beispiel vor der Kodierung:

```json
{"k":"10023","d":5,"e":1786694400,"v":1}
```

Bewusst **nicht** enthalten: Name, E-Mail, Geburtsdatum, Konto-Id. Ein
Automat im öffentlichen Raum ist kein Ort für Personendaten, und der
QR-Code ist auf dem Bildschirm für jeden mitlesbar, der danebensteht. Die
Kundennummer allein sagt einem Fremden nichts.

---

## Was der Automat tun muss

1. QR-Code lesen, an den drei Punkten trennen.
2. Präfix prüfen: beginnt mit `BS24.1.`
3. Unterschrift gegen die Aussage prüfen — Ed25519, öffentlicher
   Schlüssel liegt auf dem Gerät. Passt sie nicht: Code ignorieren.
4. `e` gegen die eigene Uhr prüfen. Abgelaufen: Code ignorieren.
5. `d` Prozent auf den Warenkorb anwenden, `k` auf den Beleg schreiben.

Mehr nicht. Kein Netz, keine Datenbank, keine Zustandshaltung.

---

## Der Preis dieser Lösung, offen benannt

**Eine Kündigung wirkt nicht sofort.** Der Automat kennt nur, was im Code
steht. Wer heute kündigt, behält den Rabatt so lange, wie sein zuletzt
erzeugter Code noch gültig ist. Das ist der Preis dafür, dass keine
Rückfrage stattfindet — er lässt sich nicht wegkonstruieren, nur
begrenzen.

**Vorschlag: 7 Tage Gültigkeit.** Die App erzeugt bei jedem Öffnen der
Kundenkarte einen frischen Code. Wer die App regelmässig nutzt, hat immer
einen aktuellen; wer sie eine Woche nicht öffnet, muss sie einmal öffnen,
bevor er scannt.

Die Abwägung dahinter:

* **Kürzer (24 Stunden)** hiesse: Wer ohne Netz am Automaten steht und
  die App seit gestern nicht geöffnet hat, bekommt keinen Rabatt. Das
  ärgert genau die treuen Kunden.
* **Länger (30 Tage)** hiesse: Ein Gekündigter kauft einen Monat lang
  verbilligt weiter.

Sieben Tage ist der Mittelweg, aber es ist eine Geschäftsentscheidung —
sag Bescheid, wenn du anders abwägst.

**Sperren einzelner Karten geht nicht sofort.** Bei Missbrauch — etwa ein
Code, der öffentlich geteilt wurde — hilft nur, den Schlüssel zu wechseln
(`v` hochzählen, neuen öffentlichen Schlüssel auf die Automaten bringen).
Das entwertet **alle** ausgegebenen Codes gleichzeitig; die Apps erzeugen
beim nächsten Öffnen neue. Deshalb ist die kurze Gültigkeit auch die
Hauptverteidigung gegen Weitergabe.

**Weitergabe bleibt möglich.** Ein Screenshot des Codes funktioniert bei
jedem Automaten, bis er abläuft. Wer das verhindern will, braucht die
Rückfrage — oder einen Code, der sich alle 30 Sekunden ändert und den der
Automat gegen die Uhrzeit prüft. Beides ist hier bewusst nicht gewählt.

---

## Was noch gebaut werden muss

Diese Teile liegen bei uns und sind noch offen:

1. **Schlüsselpaar erzeugen**, privater Schlüssel als Supabase-Secret.
2. **Edge Function `card-token`**, die für den angemeldeten Kunden einen
   unterschriebenen Code ausgibt. Rabattsatz kommt aus
   `app.has_subscription()` — dieselbe Regel wie überall sonst, also
   0 % nach einer Kündigung.
3. **Beide Apps** stellen ihren QR-Inhalt auf diesen Code um. Heute
   kodieren sie Unterschiedliches, und beides ist die rohe Konto-Id:
   * native App: `BS24:<Kundennummer>:<auth-uid>`
   * Web: `https://boerdesnack24.de/karte/<auth-uid>`
4. **Öffentlicher Schlüssel** an den Hersteller, zur Hinterlegung auf den
   Geräten.

Die Kartenkennung aus Migration 0110 (`customer_card`) bleibt nützlich:
Sie ist die sperrbare Kennung für alles, was doch online passiert —
Punkte gutschreiben, Belege zuordnen.

---

## Was der Hersteller beantworten muss

Ohne diese drei Antworten lässt sich der Rest nicht abschliessen:

1. **Kann das Terminal eine Ed25519-Unterschrift prüfen?** Wenn nein:
   welche Verfahren beherrscht es? (Manche Geräte können ausschliesslich
   Zeichenketten lesen und weiterreichen — dann ist dieser Weg
   versperrt.)
2. **Wie kommt der öffentliche Schlüssel auf die Geräte, und wie wird er
   gewechselt?** Ein Schlüsselwechsel muss ohne Vor-Ort-Besuch gehen,
   sonst ist er im Ernstfall wertlos.
3. **Geht die Uhr der Geräte richtig?** Die Ablaufprüfung hängt daran.
   Läuft die Uhr eine Woche nach, gelten abgelaufene Codes weiter.

Fällt Frage 1 negativ aus, bleibt nur die Rückfrage über das Netz — dann
greift `card_entitlements()` aus Migration 0110, und es fehlt lediglich
eine signierte Edge Function als Zugang für den Automaten.
