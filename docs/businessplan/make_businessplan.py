# -*- coding: utf-8 -*-
import sys, json, re
sys.path.insert(0, "/root/.claude/skills/synced/8679d439-3b7c-44a2-84d8-50f499b43fd0_0ef6de42-5319-4234-9f65-9ef4d034777c/boerdesnack24-pdf/scripts")
import pdf_builder as pb
from pdf_builder import Dokument, _esc
from reportlab.platypus import Paragraph, Table, TableStyle, Spacer, Image
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader

daten = json.load(open("businessplan_zahlen.json"))
daten_kons = json.load(open("businessplan_zahlen_konservativ.json"))

# ---------------------------------------------------------------------
# Kleine Erweiterungen ueber die oeffentliche pdf_builder-API hinaus:
# Fett-Hervorhebung (**wort**) und eine Kennzahlen-Reihe (grosse Zahl +
# kleines Label), beide im selben Stil (Farben/Fonts aus pdf_builder).
# ---------------------------------------------------------------------
def _mark_bold(text):
    escaped = _esc(text)
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", escaped)

def hook(doc, text):
    """Kurzer, fett eingeleiteter Absatz -- der Aufhaenger eines Abschnitts."""
    doc._ensure_portrait()
    doc.story.append(Paragraph(_mark_bold(text), doc.st["body"]))

def kennzahlen_reihe(doc, werte):
    """werte: Liste von (grosse_zahl, label). Grosse goldene Zahl ueber
    grauem Label, ohne Rahmen -- fuer schnelle Fakten statt Fliesstext."""
    doc._ensure_portrait()
    zahl_stil = ParagraphStyle("kz_zahl", fontName=pb.FONT_BOLD, fontSize=19,
                                leading=21, textColor=pb.GOLD_DARK if hasattr(pb, "GOLD_DARK") else colors.HexColor("#8A6E00"),
                                alignment=TA_CENTER)
    label_stil = ParagraphStyle("kz_label", fontName=pb.FONT_REG, fontSize=8,
                                 leading=10, textColor=pb.DUNKELGRAU, alignment=TA_CENTER)
    zelle = lambda z, l: [Paragraph(_esc(z), zahl_stil), Paragraph(_esc(l), label_stil)]
    row = [zelle(z, l) for z, l in werte]
    breite = (pb._W - pb.RAND_LINKS - pb.RAND_RECHTS) / len(werte)
    t = Table([row], colWidths=[breite] * len(werte))
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LINEBELOW", (0, 0), (-1, 0), 0, colors.white),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LINEAFTER", (0, 0), (-2, 0), 0.6, pb.HELLGRAU),
    ]))
    doc.story.append(Spacer(1, 4 * pb.mm))
    doc.story.append(t)
    doc.story.append(Spacer(1, 2 * pb.mm))

GOLD_DARK = colors.HexColor("#8A6E00")

def bild_quer(doc, pfad, unterschrift=None):
    """Vollformatiges Bild auf eigener Querseite -- fuer breite Grafiken,
    die im Hochformat zu klein und unleserlich wuerden. Passt sich an die
    kleinere der beiden Querseiten-Grenzen an (hier: die Hoehe bindet)."""
    doc._nach_quer()
    iw, ih = ImageReader(pfad).getSize()
    aspekt = iw / ih
    max_breite = pb.LANDSCAPE_CONTENT
    max_hoehe = (pb.LAND_H - pb.RAND_OBEN_OHNE_HEADER) - pb.RAND_UNTEN
    if unterschrift:
        max_hoehe -= 14 * pb.mm
    breite, hoehe = max_breite, max_breite / aspekt
    if hoehe > max_hoehe:
        hoehe, breite = max_hoehe, max_hoehe * aspekt
    img = Image(pfad, width=breite, height=hoehe)
    img.hAlign = "CENTER"
    doc.story.append(Spacer(1, 4 * pb.mm))
    doc.story.append(img)
    if unterschrift:
        zentrierte_caption = ParagraphStyle("caption_center", parent=doc.st["caption"], alignment=TA_CENTER)
        doc.story.append(Paragraph(_esc(unterschrift), zentrierte_caption))
    doc._ensure_portrait()

# ---------------------------------------------------------------------
# Grafiken
# ---------------------------------------------------------------------
def erlösmix_diagramm(pfad):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    jahre = [r["jahr"] for r in daten]
    produkt = [r["produkt_netto"] - r["spende"] for r in daten]
    app = [r["app_erlös"] for r in daten]
    werbeflaeche = [r["werbeflaechen_erlös"] for r in daten]
    sponsoring = [r["sponsoring_erlös"] for r in daten]

    fig, ax = plt.subplots(figsize=(7.2, 3.6), dpi=200)
    farben = ["#F3BE21", "#8A6E00", "#000000", "#8C8C8C"]
    labels = ["Snack-/Getränkeverkauf (netto, nach Spende)", "App-Abo", "Werbeflächen am Automat", "Digitale Werbe-/Sponsoringpakete"]
    bottom = [0.0] * len(jahre)
    for werte, farbe, label in zip([produkt, app, werbeflaeche, sponsoring], farben, labels):
        ax.bar(jahre, werte, bottom=bottom, color=farbe, label=label, edgecolor="white", linewidth=0.4)
        bottom = [b + w for b, w in zip(bottom, werte)]

    ax.set_xlabel("Jahr", color="#595959", fontsize=11)
    ax.set_ylabel("Erlöse in EUR", color="#595959", fontsize=11)
    ax.set_title("Erlösmix nach Geschäftsbereich, Planungsszenario", color="#000000", fontsize=12, fontweight="bold")
    ax.tick_params(colors="#595959", labelsize=9)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    for s in ("left", "bottom"):
        ax.spines[s].set_color("#595959")
    ax.grid(axis="y", color="#D9D9D9", linewidth=0.6)
    ax.set_axisbelow(True)
    ax.legend(fontsize=7.5, loc="upper left", frameon=False)
    fig.tight_layout()
    fig.savefig(pfad, bbox_inches="tight", facecolor="white")
    plt.close(fig)

erlösmix_diagramm("erloesmix.png")

# ---------------------------------------------------------------------
# Dokument
# ---------------------------------------------------------------------
doc = Dokument("/mnt/user-data/outputs/Boerdesnack24_Businessplan.pdf",
               titel="Businessplan Bördesnack24 GbR", stammdaten_im_header=True)

doc.hinweis("Planungszeitraum 2027–2036 · Stand 30.08.2026 · alle Annahmen einzeln ausgewiesen und mit Quelle versehen, wo eine externe Quelle vorliegt.")
doc.abstand(3)

hook(doc, "**Ein Automat verkauft. Vier Quellen verdienen.** Snacks und Getränke rund um die Uhr, App-Abo, eine Werbeplattform für regionale Unternehmen und Sponsoring, plus **5 % jedes Warenverkaufs** für eine regionale gemeinnützige Organisation.")
doc.abstand(3)

kennzahlen_reihe(doc, [
    ("62", "Produkte im Sortiment"),
    ("4", "Erlösquellen"),
    ("11", "Automaten bis 2036"),
    ("5 %", "Spendenquote"),
])
doc.bild("iconstrip_trim.png", breite_mm=155)

doc.ueberschrift("1. Zusammenfassung", ebene=1)
hook(doc, "**Bördesnack24 hat heute 0 dokumentierte Verkäufe.** Jede Zahl in diesem Plan ist deshalb eine Annahme, keine Messung, belegt mit der eigenen Preisliste oder einer externen Quelle.")
hook(doc, "**Start: 3 Automaten** (2 in 2027, 1 in 2028), **4. bis 2029, danach +1 pro Jahr.** Bahnhof Osterweddingen, Freibad Langenweddingen, Sporthalle Langenweddingen.")
kennzahlen_reihe(doc, [
    ("8.300 €", "Umsatz 2027"),
    ("103.900 €", "Umsatz 2036"),
    ("223.900 €", "EBIT, 10 Jahre kumuliert"),
    ("124.500 €", "EBIT konservativ, 10 Jahre"),
])
hook(doc, "**Das Betriebsergebnis bleibt in jedem einzelnen der zehn Planjahre positiv**, auch im konservativen Szenario mit 40 % niedrigerem Umsatz je Automat (Abschnitt 6).")

# 2) Geschäftsmodell -----------------------------------------------------
doc.ueberschrift("2. Geschäftsmodell und Standort", ebene=1)
hook(doc, "**Kein Nahversorger hat nachts oder sonntags offen.** Genau diese Lücke füllt Bördesnack24, App-Abo bindet zurück statt jeden Einkauf als Einzelereignis zu behandeln.")
kennzahlen_reihe(doc, [
    ("168.000", "Einwohner Bördekreis"),
    ("9.000", "davon Sülzetal"),
    ("24/7", "Öffnungszeit"),
])
doc.hinweis("Angaben des Auftraggebers; öffentliche Vergleichszahlen (citypopulation.de, Statista) liegen mit rund 171.000 bzw. 8.600–9.900 in derselben Größenordnung.")
doc.ueberschrift("Standort- und Ausbauplan", ebene=2)
hook(doc, "**Vorgabe des Auftraggebers**, wörtlich umgesetzt: 3 Automaten zum Start, 4. bis 2029, danach +1 pro Jahr. **Die Zuordnung der ersten drei Standorte zu den Jahren ist ein Vorschlag dieses Plans**, keine Vorgabe.")

standort_tabelle = [["Jahr", "Neuer Automat", "Standort", "Besonderheit"]]
for jahr, geraete in [
    (2027, [("Heißgetränkeautomat", "Bahnhof Osterweddingen", "Pendlerfrequenz, kein Kühlbedarf"),
            ("Mixautomat", "Bahnhof Osterweddingen", "Snacks + gekühlte Getränke")]),
    (2028, [("Kombiautomat", "Freibad Langenweddingen", "stark saisonal, Mai–September")]),
    (2029, [("Kombiautomat", "Sporthalle Langenweddingen (Handball)", "Trainings- und Spielbetrieb")]),
]:
    for typ, ort, note in geraete:
        standort_tabelle.append([str(jahr), typ, ort, note])
for jahr in range(2030, 2037):
    standort_tabelle.append([str(jahr), "Kombiautomat (Vorschlag)", "Standort noch offen", "+1 Automat/Jahr laut Vorgabe"])
doc.tabelle(standort_tabelle)

doc.diagramm(
    [r["jahr"] for r in daten], [r["automaten"] for r in daten],
    x_label="Jahr", y_label="Automaten im Netz (kumuliert)",
    titel="Ausbau des Automatennetzes", art="linie",
    unterschrift="Abb. 1: 3 Automaten zum Start, +1 pro Jahr ab 2030."
)

# 3) Erlösquellen ---------------------------------------------------------
doc.ueberschrift("3. Die vier Erlösquellen", ebene=1)
hook(doc, "**Keine Quelle steht für sich.** Der Automat bringt Kunden, die App macht sie zählbar, das macht die Werbeplattform wertvoll, Sponsoring bringt neue Standorte zurück zum Automaten.")

bild_quer(doc, "zusammenspiel_pdf.png",
          unterschrift="Abb. 0: Zusammenspiel der vier Erlösquellen als ein System, nicht als vier getrennte Geschäfte.")

kennzahlen_reihe(doc, [
    ("62", "Produkte"),
    ("0,99 € / 9,99 €", "App-Abo Monat/Jahr"),
    ("ab 15 €", "Werbung / Monat"),
    ("149 €", "Komplettpaket"),
])
doc.hinweis("Preise real, bereits entschieden (docs/ADVERTISING-MASTERPROMPT-ABGLEICH.md), nicht Teil dieses Plans neu festgelegt. Vor dem ersten Sponsoring-Vertrag: umsatzsteuerliche Prüfung durch den Steuerberater.")
hook(doc, "**Offener Punkt bei der 5 %-Spende:** Heute kann jedes App-Konto vorschlagen und abstimmen, nicht nur zahlende Abonnenten, wie für diesen Plan angefragt (Abschnitt 7).")

# 4) Annahmen --------------------------------------------------------------
doc.ueberschrift("4. Annahmen dieses Plans", ebene=1)
hook(doc, "**Planungsannahmen, keine gemessenen Werte.** Mit Quelle, wo eine externe existiert, sonst eigene, im Text begründete Schätzung.")
annahmen_tabelle = [
    ["Größe", "Annahme", "Quelle / Begründung"],
    ["Bruttoumsatz je Automat und Monat", "500–1.400 EUR, je nach Standort", "GTR Automaten / Maschinenpartner: 300–1.500 EUR/Monat typisch, bis 5.000 EUR an Hochfrequenz-Standorten"],
    ["Wareneinsatzquote Snacks/Getränke", "34,0 % vom Nettoumsatz", "eigene Preisliste (62 Produkte), am System geprüft"],
    ["Wareneinsatzquote Heißgetränke", "16,5 % vom Nettoumsatz", "eigene Preisliste, Ø 6 Positionen"],
    ["Anschaffung je Automat", "6.000 EUR netto", "VENDY1 / dasvending: gekühlter Kombiautomat inkl. Kartenterminal 4.989–9.000 EUR netto"],
    ["Abschreibungsdauer", "8 Jahre linear", "angenommene betriebsgewöhnliche Nutzungsdauer"],
    ["Nayax-Grundgebühr", "14 EUR/Monat je Terminal", "Nayax-Shop FAQ"],
    ["Kartentransaktionsgebühr", "3 % vom Kartenumsatz, 85 % Kartenanteil", "Nayax Onyx-Spanne 2,3–4 %; Kartenanteil angenommen"],
    ["Strom, Wartung, Versicherung", "40 / 30 EUR je Monat, 60 EUR je Jahr, je Automat", "eigene Schätzung, nicht extern geprüft"],
    ["Standortprovision", "5 % vom Bruttoumsatz", "branchenübliche Annahme, für Bördesnack24 nicht belegt"],
    ["Zahlende App-Abonnenten", "40 (2027) bis 720 (2036)", "eigene Schätzung, an Netzwachstum gekoppelt"],
    ["Ø Erlös je zahlendem Abonnenten", "0,90 EUR/Monat", "60 % Jahresabo (0,833 EUR/Monat) zu 40 % Monatsabo (0,99 EUR), nur die beiden Modelle, die zum Start angeboten werden"],
    ["Auslastung Werbeflächen", "0 % (2027/28) bis 70 % (2036)", "eigene Rampe, obere Marke identisch mit dem Advertising-Dokument, Szenario „20 Automaten, gut vermietet“"],
    ["Digitale Werbekunden", "0 (2027/28) bis 10 (2036), Ø 60 EUR/Monat", "eigene Schätzung; Paketpreise real (Starter 25 bis Komplett 149 EUR)"],
    ["Personal", "1 Minijob-Kraft je 6 Automaten, 556 EUR/Monat", "gesetzliche Minijob-Grenze 2026; Schwelle eigene Annahme"],
]
doc.tabelle(annahmen_tabelle)

# 5) Finanzplan --------------------------------------------------------------
doc.ueberschrift("5. Finanzplan, Jahr 1 bis 10 (Planungsszenario)", ebene=1)
fp_tabelle = [["Jahr", "Automaten", "Erlöse gesamt", "Kosten (o. AfA)", "Abschreibung", "EBIT"]]
for r in daten:
    fp_tabelle.append([
        str(r["jahr"]), str(r["automaten"]),
        f'{r["summe_erloese"]:,.0f} EUR'.replace(",", "."),
        f'{r["summe_kosten_ohne_afa"]:,.0f} EUR'.replace(",", "."),
        f'{r["afa_jahr"]:,.0f} EUR'.replace(",", "."),
        f'{r["ebit"]:,.0f} EUR'.replace(",", "."),
    ])
doc.tabelle(fp_tabelle, zahlen_rechts={1,2,3,4,5})

doc.diagramm(
    [r["jahr"] for r in daten], [r["summe_erloese"] for r in daten],
    x_label="Jahr", y_label="Erlöse in EUR", titel="Umsatzentwicklung, Planungsszenario",
    art="balken", unterschrift="Abb. 2: Summe aller vier Erlösquellen nach Abzug des Spendenanteils."
)
doc.bild("erloesmix.png", unterschrift="Abb. 3: Anteil der vier Geschäftsbereiche am Erlös über den Planungszeitraum.")
doc.diagramm(
    [r["jahr"] for r in daten], [r["ebit"] for r in daten],
    x_label="Jahr", y_label="EBIT in EUR", titel="Betriebsergebnis, Planungsszenario",
    art="balken", unterschrift="Abb. 4: EBIT vor Steuern und Gesellschafterentnahmen; Delle 2031 durch die erste Teilzeitkraft ab dem 6. Automaten."
)

doc.ueberschrift("Spenden und Investitionen im Überblick", ebene=2)
kum_spende = sum(r["spende"] for r in daten)
kum_invest = sum(r["investition_jahr"] for r in daten)
kum_ebit = sum(r["ebit"] for r in daten)
kennzahlen_reihe(doc, [
    (f'{kum_spende:,.0f} €'.replace(",", "."), "Spendentopf, 10 Jahre"),
    (f'{kum_invest:,.0f} €'.replace(",", "."), "Investition, 11 Automaten"),
    (f'{kum_ebit:,.0f} €'.replace(",", "."), "EBIT kumuliert, 10 Jahre"),
])

# 6) Sensitivität -------------------------------------------------------------
doc.ueberschrift("6. Konservatives Szenario", ebene=1)
hook(doc, "**Was, wenn der Umsatz je Automat 40 % niedriger ausfällt?** Die unsicherste Annahme in diesem Plan, mit eigener Spalte durchgerechnet, alle übrigen Annahmen unverändert.")
sens_tabelle = [["Jahr", "EBIT Planungsszenario", "EBIT konservativ (−40 % Umsatz/Automat)"]]
for r, k in zip(daten, daten_kons):
    sens_tabelle.append([
        str(r["jahr"]),
        f'{r["ebit"]:,.0f} EUR'.replace(",", "."),
        f'{k["ebit"]:,.0f} EUR'.replace(",", "."),
    ])
doc.tabelle(sens_tabelle, zahlen_rechts={1,2})
kum_kons = sum(r["ebit"] for r in daten_kons)
_kum_ebit_de = f'{kum_ebit:,.0f}'.replace(",", ".")
_kum_kons_de = f'{kum_kons:,.0f}'.replace(",", ".")
hook(doc, f"**Kumuliert sinkt das EBIT von {_kum_ebit_de} EUR auf {_kum_kons_de} EUR, bleibt aber in jedem einzelnen Jahr positiv.** Die drei zusätzlichen Erlösquellen hängen nicht am Automatenumsatz, das trägt den Unterschied.")

# 7) Risiken und offene Punkte -------------------------------------------------
doc.ueberschrift("7. Risiken und offene Punkte", ebene=1)
hook(doc, "**Ehrlich benannt, statt beschönigt** (interne Arbeitsregel „Behauptungen vorher prüfen“):")
risiken = [
    "**Keine eigenen Ist-Verkaufsdaten.** Die Verkaufsdatenbank enthält 0 echte Zeilen (Stand 27.08.2026); jede Umsatzannahme hier ist extern hergeleitet oder eigene Schätzung.",
    "**Standortzuordnung für Automat 1–3** auf 2027/2028 ist ein Vorschlag dieses Plans, keine Vorgabe des Auftraggebers. Standorte ab Automat 5 (2030) sind offen.",
    "**Vereinsbeteiligung** ist umsatzsteuerlich in der Regel Leistungsaustausch, sobald Sichtbarkeit gewährt wird, vor dem ersten Sponsoring-Vertrag steuerlich zu bestätigen.",
    "**Spendenabstimmung heute offen für alle Konten**, nicht nur zahlende Abonnenten. Die für diesen Plan angefragte Beschränkung ist im System nicht umgesetzt.",
    "**Nayax-Gebühren, Standortprovision, Strom- und Wartungskosten** sind branchenübliche Annahmen, nicht am eigenen Betrieb geprüft (keine laufenden Verträge zum Planungszeitpunkt).",
    "**sevDesk-Kontozuordnung** braucht laut docs/FINANCE.md eine einmalige Prüfung gegen das echte Konto, bevor Ist-Zahlen produktiv genutzt werden.",
]
for r in risiken:
    hook(doc, "• " + r)

doc.speichern()
print("gespeichert:", doc.pfad)
