# Spendenorganisationen — was ich von dir brauche

Damit die Abstimmung über die Spenden auf echten Daten läuft, brauche ich zu
jeder Organisation die folgenden Angaben. Die Datenbank ist seit Migration
0088 dafür vorbereitet — sobald deine Liste da ist, ist es reine Dateneingabe.

**Wichtig:** Zur Abstimmung stehen ausschliesslich Organisationen, die eine
Zuwendungsbestätigung („Spendenbescheinigung") ausstellen dürfen. Das ist
keine Vereinbarung mehr, sondern eine Regel in der Datenbank: Eine
Organisation kann gar nicht auf `aktiv` gesetzt werden, solange die
Berechtigung nicht hinterlegt ist.

---

## Die Felder

### Pflicht — ohne das geht es nicht

| Feld | Was gemeint ist | Beispiel |
|---|---|---|
| **Anzeigename** | Kurzer Name, wie er in der App steht | `Tafel Magdeburg` |
| **Rechtsname** | Vollständiger Name laut Register | `Magdeburger Tafel e. V.` |
| **Zweck** | Zweck laut Satzung, 1–2 Sätze | `Sammlung und Verteilung von Lebensmitteln an Bedürftige im Raum Magdeburg.` |
| **Strasse, Hausnr.** | Anschrift laut Register | `Musterstr. 1` |
| **PLZ** | | `39104` |
| **Ort** | | `Magdeburg` |
| **Bescheinigungsberechtigt** | Darf eine Zuwendungsbestätigung ausstellen? | `ja` |

### Nachweis der Berechtigung — für eure Unterlagen

Diese Angaben sieht **kein Kunde**. Sie bleiben intern und dienen dazu, die
Berechtigung belegen zu können, wenn das Finanzamt fragt.

| Feld | Was gemeint ist | Beispiel |
|---|---|---|
| **Registereintrag** | Vereins-/Stiftungsregister mit Gericht | `VR 1234, Amtsgericht Stendal` |
| **Steuernummer** | Steuernummer oder Aktenzeichen des Freistellungsbescheids | `102/141/12345` |
| **Finanzamt** | Zuständiges Finanzamt | `Finanzamt Magdeburg` |

### Freiwillig

| Feld | Was gemeint ist | Beispiel |
|---|---|---|
| **Website** | Wird in der App verlinkt | `https://www.magdeburger-tafel.de` |
| **Kontakt-E-Mail** | Für eure Abstimmung mit der Organisation | `info@…` |

---

## Wer was zu sehen bekommt

Das ist bewusst getrennt, damit in der Abstimmungsliste jedes Kunden nur
steht, was zur Wahlentscheidung gehört:

* **Kundinnen und Kunden sehen:** Anzeigename, Beschreibung, Rechtsname,
  Zweck, Ort, Website, den Hinweis „bescheinigungsberechtigt".
* **Nur intern:** vollständige Anschrift, Registereintrag, Steuernummer,
  Finanzamt, Kontakt-E-Mail, wer die Berechtigung wann geprüft hat.

---

## Format

Am einfachsten füllst du `docs/vorlagen/spendenorganisationen.csv` aus —
eine Zeile pro Organisation, die Kopfzeile bitte stehen lassen. Eine Liste
in einer Mail oder als Tabelle geht genauso; das Format ist mir egal,
solange die Pflichtfelder dabei sind.

## Was danach passiert

1. Ich trage die Organisationen als Migration ein (nachvollziehbar, mit
   Datum und Quelle) und setze `verified_at`, sobald du bestätigst, dass die
   Berechtigung geprüft ist.
2. **A5** wird abgeschickt — die Spendenseite zeigt dann echte
   Organisationen statt Platzhalter.
3. Die drei zurückgezogenen Beispieleinträge (Tafel Magdeburg, Kinderhospiz
   Magdeburger Elbland, Feuerwehr Sülzetal) bleiben gelöscht. Falls eine
   davon tatsächlich mit euch zusammenarbeitet, nimm sie einfach in die
   Liste auf — sie wird dann als echter Eintrag neu angelegt, mit
   vollständigen Stammdaten.

## Ein Hinweis, der euch Ärger sparen kann

Eine Organisation darf nicht ungefragt als Spendenempfängerin beworben
werden. Bevor eine Organisation in der App erscheint, solltet ihr sie
angefragt und eine Zusage haben — sonst steht ihr Name in eurer Werbung,
ohne dass sie davon weiss. Das ist kein technisches Problem, aber es fällt
euch auf die Füsse, nicht mir.
