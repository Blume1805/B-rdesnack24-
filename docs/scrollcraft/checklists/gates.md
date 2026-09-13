# Gates

Ein Gate ist bestanden, wenn das Artefakt **im Repository liegt**. Eine
Aussage im Chat zählt nicht. Ein übersprungenes Gate wird nicht nachgeholt,
sondern beendet die Arbeit an der Szene.

---

## G1 — Wahrheit

- [ ] Jede geplante Aussage steht in `references/truth.md`
- [ ] Jede Aussage hat einen Status: IST / GEPLANT / OFFEN / VERBOTEN
- [ ] Zeitform geprüft: keine Präsensaussage über einen nicht bestehenden Zustand
- [ ] Jede Zahl hat eine Quelle
- [ ] Keine Erlösquellen-Zahl in der Copy
- [ ] Zielgruppe der Seite und Rangfolge bestätigt (`audiences.md`)
- [ ] Ein Primärziel, höchstens zwei Sekundärziele
- [ ] Assets inventarisiert, Herkunft und KI-Anteil vermerkt (`assets.md`)
- [ ] `boerdesnack24-legal-impact` durchlaufen, Vermerk abgelegt

**Artefakt:** `truth.md` gefüllt + Prüfvermerk

---

## G2 — Story

- [ ] Jede Szene hat alle zwölf Felder
- [ ] Jede Szene hat genau eine Zielgruppe
- [ ] Jede Szene hat ein Informationsziel — sonst ist sie Dekoration
- [ ] Höchstens ein CTA je Szene, höchstens drei verschiedene auf der Seite
- [ ] Alle sieben Varianten je Szene beschrieben
- [ ] **Prüfsatz bestanden:** Story ohne jede Animation vollständig verständlich
- [ ] Übergänge haben eine benannte Beziehung, nicht nur eine Bewegung
- [ ] Höchstens drei Sticky-Szenen, höchstens eine horizontale Sequenz
- [ ] Impressum und Datenschutz durchgehend erreichbar eingeplant

**Artefakt:** `storyboard.md`

---

## G3 — Prototyp

- [ ] Die **riskanteste** Szene gebaut, nicht die attraktivste
  (höchste technische Unsicherheit × höchste inhaltliche Wichtigkeit)
- [ ] Isoliert gebaut, nicht in `public_html`
- [ ] Baseline der bestehenden Seite gemessen und abgelegt
- [ ] Prototyp gegen Baseline gemessen
- [ ] Alle sieben Varianten geprüft
- [ ] Bewegung beim Sichtbarwerden erkennbar (Zeitgesetz)
- [ ] `scripts/audit_static.py` ohne BLOCKER
- [ ] Screenshots vorher/nachher abgelegt

**Artefakt:** Prototypdatei + Messwerte + Screenshots

---

## G4 — Release

- [ ] `checklists/release.md` vollständig abgearbeitet
- [ ] `checklists/scene-qa.md` je Szene abgearbeitet
- [ ] `scripts/audit_static.py` ohne BLOCKER
- [ ] `boerdesnack24-verify` durchlaufen, Green Gate erreicht
- [ ] `boerdesnack24-legal-impact` erneut durchlaufen, wenn Aussagen geändert wurden
- [ ] `boerdesnack24-security-regression`, falls Formular oder Datenfluss berührt
- [ ] Budgets eingehalten oder Abweichung begründet und freigegeben

**Artefakt:** Auditbericht mit Prioritätenliste

---

## Fast-Track

Änderungen der Klasse K0/K1 nach `boerdesnack24-verify` — Textkorrektur ohne
Aussageänderung, Farbwert, Abstand, Tippfehler — laufen über `scene-qa.md`
und G4.

**Ausnahme ohne Ermessen:** Betrifft die Änderung eine **Aussage**, gilt
immer G1. Auch bei einem einzigen Wort.
