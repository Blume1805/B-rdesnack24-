# KI-Kennzeichnung — Register gegen Oberfläche geprüft

Stand: 02.09.2026. Geprüft wurde, ob jeder Eintrag in `public.ki_register`
in den beiden Kundenoberflächen so gekennzeichnet ist, wie das Register es
behauptet. Grundlage ist die Dauerregel in `CLAUDE.md`: algorithmisch oder
KI-erzeugte Inhalte im Kundenbereich tragen einen sichtbaren Chip **und**
werden auf der KI-Info-Seite textlich benannt.

## Sachverhalt

`public.ki_register` führt acht Funktionen. Genau eine davon ist ein
KI-System im Sinne von Art. 3 EU AI Act; die übrigen sieben sind
regelbasierte SQL-Berechnungen.

| key | ist_ki_system | kennzeichnung_noetig | ampel |
|---|---|---|---|
| `produktbild_bearbeitung` | **ja** | **ja** | gelb |
| `challenge_rewards` | nein | ja | gruen |
| `customer_chatbot` | nein | nein | gruen |
| `generate_daily_offers` | nein | nein | gruen |
| `generate_personal_offer` | nein | nein | gruen |
| `generate_weekly_offers` | nein | nein | gruen |
| `grant_birthday_offer` | nein | nein | gelb |
| `loyalty_login_points` | nein | nein | gelb |

`ki_funktion_freigegeben(p_key)` gibt nur bei `aktiv and ampel = 'gruen'`
ein `true` zurück. Drei Ampeln stehen auf Gelb.

## Befund 1 — Statusbereich war nicht gekennzeichnet (behoben)

`rewards_screen.dart` zeigte Statusstufe, lebenslangen Dauerrabatt,
laufende Challenges und Abzeichen. Alle vier Werte rechnet
`my_gamification_status` serverseitig aus der Kaufhistorie. Kein einziger
Chip war gesetzt, obwohl `challenge_rewards` im Register
`kennzeichnung_noetig = true` **und** `kennzeichnung_umgesetzt = true`
führt. Die Behauptung des Registers traf nicht zu.

Behoben: Chip im Kopf der Statuskarte und an den drei Abschnittstiteln
„Dein Rabatt wächst mit", „Aktuelle Herausforderungen", „Deine Abzeichen".
Alle vier öffnen den `AiInfoScreen`.

Nicht betroffen: `offers_tab.dart` war bereits vollständig gekennzeichnet
— Sonderangebote, Bonus-Angebote, Dein Angebot, Wochenangebote und die
Tages-Deal-Karte tragen den Chip.

Kein Chip nötig für `loyalty_login_points`: die Funktion vergibt Punkte im
Backend, hat aber in der App keine eigene Fläche. Ein Chip ohne Fläche wäre
keine Kennzeichnung. Textlich wird sie trotzdem genannt.

Kein Chip für `customer_chatbot`: regelbasiert, kein KI-System nach
Art. 3 EU AI Act. Bleibt „Automatischer Chat-Assistent".

## Befund 2 — KI-Info-Seite war unvollständig (behoben)

Der `AiInfoScreen` nannte nur den Empfehlungsgenerator, den Kombi-
Algorithmus und den Chat-Assistenten. Nicht genannt waren: Statusstufe,
Dauerrabatt, Challenges, Abzeichen, Login-Punkte, Geburtstagsgutschein
und die KI-Bearbeitung von Produktbildern.

Behoben: zwei neue Abschnitte. „Welche Bereiche das im Einzelnen sind"
listet die sieben regelbasierten Funktionen auf. „Produktbilder" benennt
die Bildbearbeitung ausdrücklich als die einzige Stelle mit einem
KI-System und grenzt sie von den regelbasierten Funktionen ab.

## Befund 3 — das Register behauptet zwei Dinge, die nicht stimmen (offen)

Die Begründung zu `produktbild_bearbeitung` sagt:

> „Zugesagt ist die Kennzeichnung bereits in den Nutzungsbedingungen
> (Abschnitt 8) und auf der KI-Info-Seite."

Nachgeprüft am 02.09.2026:

* **KI-Info-Seite:** traf nicht zu. Mit Befund 2 trifft es jetzt zu.
* **Nutzungsbedingungen Abschnitt 8:** trifft nicht zu. Abschnitt 8 heißt
  „PRODUKTINFORMATIONEN UND PREISE" und behandelt Verfügbarkeit, den am
  Automaten ausgewiesenen Preis und Übertragungsfehler. Zur Bildbearbeitung
  steht dort nichts. Eine Volltextsuche über alle sieben Rechtstexte in
  `public.legal_text` findet weder „Produktbild" noch „Bildbearbeitung".

**Handlungsbedarf — Entscheidung des Betreibers.** Zwei Wege, die sich
ausschließen:

1. Abschnitt 8 der Nutzungsbedingungen um einen Absatz zur KI-Bearbeitung
   von Produktaufnahmen ergänzen. Dann wird die Aussage des Registers wahr.
2. Die Begründung im Register korrigieren, weil die Zusage in den
   Nutzungsbedingungen nie erteilt wurde.

Beides sind Eingriffe in verbindliche Texte; die Entscheidung liegt nicht
bei der Entwicklung. Verantwortlich: Betreiber. Status: **🔴 offen**.

## Der sichtbare Hinweis am Bild ist noch nicht fällig

Gezählt in der Produktionsdatenbank am 02.09.2026:

```
produkte                        63
davon mit image_url              0
Einträge in produktbilder        0
davon kennzeichnungspflichtig    0
```

Die Regel des Betreibers steht in der Register-Begründung:
`kennzeichnung_noetig` wird je Bild gerechnet als „KI verwendet UND Produkt
oder Umgebung verändert". Freistellen, Zuschneiden und Helligkeit lösen sie
nicht aus, weil das Bild den Gegenstand weiterhin so zeigt, wie er ist.

Solange kein Bild existiert, wäre ein pauschaler Hinweis „KI-bearbeitet" an
der Bildfläche eine unzutreffende Angabe. Er ist erst zu führen, wenn das
erste Bild mit `kennzeichnung_noetig = true` veröffentlicht wird, und dann
am einzelnen Bild — nicht an der Fläche und nicht an der Register-Ampel.
Die Ampel bleibt bis dahin zu Recht gelb.

## Was hier ausdrücklich nicht entschieden wurde

Ob die Bildbearbeitung unter Art. 50 Abs. 2 oder Abs. 4 EU AI Act fällt,
ist auslegungsbedürftig und wurde hier **nicht** entschieden. Die
Kennzeichnungspflicht folgt in diesem Dokument nicht aus einer
Rechtsauslegung, sondern aus der Festlegung des Betreibers im Register
(`kennzeichnung_noetig = true`) und aus der Dauerregel in `CLAUDE.md`. Die
fachliche Prüfung der Norm steht aus.

## Nicht nachgewiesen

Die beiden Codeänderungen sind **nicht kompiliert**. In dieser Umgebung ist
keine Flutter- oder Dart-Toolchain vorhanden; `flutter analyze` und
`flutter test` konnten nicht laufen. Der Diff wurde manuell gegen die
bestehenden Muster der Datei geprüft (`_DealAiBadge` in `offers_tab.dart`
als Vorbild), mehr nicht. Vor dem nächsten Release sind
`flutter analyze` und ein Blick auf den Statusbildschirm erforderlich.
Status dieser Änderung: **🔴 unbelegt**, nicht 🟡.
