# -*- coding: utf-8 -*-
import sys, json, re, subprocess
sys.path.insert(0, "/root/.claude/skills/synced/8679d439-3b7c-44a2-84d8-50f499b43fd0_0ef6de42-5319-4234-9f65-9ef4d034777c/boerdesnack24-pdf/scripts")
import pdf_builder as pb
from pdf_builder import Dokument, _esc
from reportlab.platypus import Paragraph, Table, TableStyle, Spacer, Image, KeepTogether, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader

daten = json.load(open("businessplan_zahlen.json"))
daten_kons = json.load(open("businessplan_zahlen_konservativ.json"))
GOLD_DARK = colors.HexColor("#8A6E00")

# ---------------------------------------------------------------------
# Kleine Erweiterungen ueber die oeffentliche pdf_builder-API hinaus:
# Fett-Hervorhebung (**wort**), eine Kennzahlen-Reihe, ein Abschnitt, der
# Ueberschrift+Einleitung als EINEN Block haelt (nie eine Ueberschrift
# allein am Seitenende), ein Vollformat-Bild auf eigener Querseite, und
# ein Inhaltsverzeichnis.
# ---------------------------------------------------------------------
def _mark_bold(text):
    escaped = _esc(text)
    return re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", escaped)

def hook(doc, text):
    """Kurzer, fett eingeleiteter Absatz -- der Aufhaenger eines Abschnitts."""
    doc._ensure_portrait()
    doc.story.append(Paragraph(_mark_bold(text), doc.st["body"]))

def abschnitt(doc, titel, ebene=1, intro=None):
    """Ueberschrift und die einleitende Zeile als EIN Block (KeepTogether),
    damit die Ueberschrift nie allein am Seitenende steht und der Text
    erst auf der naechsten Seite folgt."""
    doc._ensure_portrait()
    key = {1: "h1", 2: "h2", 3: "h3"}.get(ebene, "h1")
    dicke = 1.2 if ebene == 1 else 0.8
    block = [
        Paragraph(_esc(titel), doc.st[key]),
        HRFlowable(width="100%", thickness=dicke, color=pb.GOLD, spaceBefore=(2 if ebene == 1 else 1), spaceAfter=6),
    ]
    if intro:
        block.append(Paragraph(_mark_bold(intro), doc.st["body"]))
    doc.story.append(KeepTogether(block))

def kennzahlen_reihe(doc, werte):
    """werte: Liste von (grosse_zahl, label). Grosse goldene Zahl ueber
    grauem Label, ohne Rahmen -- fuer schnelle Fakten statt Fliesstext."""
    doc._ensure_portrait()
    zahl_stil = ParagraphStyle("kz_zahl", fontName=pb.FONT_BOLD, fontSize=19,
                                leading=21, textColor=GOLD_DARK, alignment=TA_CENTER)
    label_stil = ParagraphStyle("kz_label", fontName=pb.FONT_REG, fontSize=8,
                                 leading=10, textColor=pb.DUNKELGRAU, alignment=TA_CENTER)
    zelle = lambda z, l: [Paragraph(_esc(z), zahl_stil), Paragraph(_esc(l), label_stil)]
    row = [zelle(z, l) for z, l in werte]
    breite = (pb._W - pb.RAND_LINKS - pb.RAND_RECHTS) / len(werte)
    t = Table([row], colWidths=[breite] * len(werte))
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LINEAFTER", (0, 0), (-2, 0), 0.6, pb.HELLGRAU),
    ]))
    doc.story.append(Spacer(1, 4 * pb.mm))
    doc.story.append(t)
    doc.story.append(Spacer(1, 2 * pb.mm))

def bild_quer(doc, pfad, unterschrift=None):
    """Vollformatiges Bild auf eigener Querseite -- fuer breite Grafiken,
    die im Hochformat zu klein und unleserlich wuerden."""
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

def inhaltsverzeichnis(doc, eintraege):
    """eintraege: Liste von (titel, ebene, seite-als-text)."""
    doc._ensure_portrait()
    doc.story.append(Paragraph(_esc("Inhalt"), doc.st["h1"]))
    doc.story.append(HRFlowable(width="100%", thickness=1.2, color=pb.GOLD, spaceBefore=2, spaceAfter=14))
    rows, stile = [], []
    for titel, ebene, seite in eintraege:
        titel_stil = ParagraphStyle(
            f"toc_t_{len(rows)}", fontName=(pb.FONT_BOLD if ebene == 1 else pb.FONT_REG),
            fontSize=(12.5 if ebene == 1 else 10.5), leading=(16 if ebene == 1 else 14),
            textColor=(pb.SCHWARZ if ebene == 1 else pb.DUNKELGRAU),
            leftIndent=(0 if ebene == 1 else 12 * pb.mm))
        seite_stil = ParagraphStyle(f"toc_s_{len(rows)}", parent=titel_stil, alignment=TA_RIGHT, leftIndent=0)
        rows.append([Paragraph(_esc(titel), titel_stil), Paragraph(_esc(str(seite)), seite_stil)])
    breite_gesamt = pb._W - pb.RAND_LINKS - pb.RAND_RECHTS
    t = Table(rows, colWidths=[breite_gesamt - 16 * pb.mm, 16 * pb.mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, pb.HELLGRAU),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    doc.story.append(t)
    doc.seitenumbruch()

# ---------------------------------------------------------------------
# Grafiken (einmal erzeugen, in beiden Bau-Durchgaengen wiederverwendet)
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
# Abschnittstitel fuers Inhaltsverzeichnis (Reihenfolge = Reihenfolge im
# Text; ebene 2 = eingerueckter Unterpunkt)
# ---------------------------------------------------------------------
TOC_ABSCHNITTE = [
    ("1. Zusammenfassung", 1),
    ("2. Geschäftsmodell und Standort", 1),
    ("Standort- und Ausbauplan", 2),
    ("3. Die vier Erlösquellen", 1),
    ("4. Annahmen dieses Plans", 1),
    ("5. Finanzplan, Jahr 1 bis 10", 1),
    ("Spenden und Investitionen im Überblick", 2),
    ("6. Konservatives Szenario", 1),
    ("7. Risiken und offene Punkte", 1),
]

# ---------------------------------------------------------------------
# Annahmen-Tabelle -- bewusst kurz gehalten, damit sie im Hochformat in
# lesbarer Schrift bleibt (keine automatische Querseite noetig).
# ---------------------------------------------------------------------
ANNAHMEN_TABELLE = [
    ["Größe", "Annahme", "Quelle / Begründung"],
    ["Bruttoumsatz/Automat/Monat", "500–1.400 €, je Standort", "GTR Automaten/Maschinenpartner: 300–1.500 €/Monat typisch"],
    ["Wareneinsatz Snacks/Getränke", "34,0 % vom Nettoumsatz", "eigene Preisliste, an DB geprüft"],
    ["Wareneinsatz Heißgetränke", "16,5 % vom Nettoumsatz", "eigene Preisliste, Ø 6 Positionen"],
    ["Anschaffung je Automat", "6.000 € netto", "VENDY1/dasvending: 4.989–9.000 € netto"],
    ["Abschreibungsdauer", "8 Jahre linear", "angenommene Nutzungsdauer"],
    ["Nayax-Grundgebühr", "14 €/Monat je Terminal", "Nayax-Shop FAQ"],
    ["Kartengebühr", "3 % Kartenumsatz, 85 % Anteil", "Nayax Onyx 2,3–4 %, Anteil angenommen"],
    ["Strom/Wartung/Versicherung", "40/30 €/Monat, 60 €/Jahr", "eigene Schätzung, nicht extern geprüft"],
    ["Standortprovision", "5 % vom Bruttoumsatz", "branchenüblich, nicht belegt"],
    ["Zahlende App-Abonnenten", "40 (2027) bis 720 (2036)", "eigene Schätzung, an Wachstum gekoppelt"],
    ["Ø Erlös je Abonnent", "0,90 €/Monat", "60 % Jahres-, 40 % Monatsabo"],
    ["Auslastung Werbeflächen", "0 % (27/28) bis 70 % (36)", "eigene Rampe, Obergrenze wie Advertising-Dok."],
    ["Digitale Werbekunden", "0 (27/28) bis 10 (36), Ø 60 €", "eigene Schätzung, Pakete real"],
    ["Personal", "1 Minijob je 6 Automaten, 556 €", "Minijob-Grenze 2026, Schwelle Annahme"],
]

# =======================================================================
# Inhalt bauen -- als Funktion, damit sie fuer den Entwurf (Seitenzahlen
# ermitteln) und den finalen Bau (echte Seitenzahlen im Inhaltsverzeichnis)
# unveraendert zweimal laufen kann.
# =======================================================================
def baue_inhalt(doc, toc_seiten):
    """toc_seiten: dict Titel -> Seitenzahl-Text. Fehlt ein Titel (erster
    Durchgang), steht ein Platzhalter im Inhaltsverzeichnis -- das aendert
    dessen Hoehe nicht, also bleibt die Seitenzaehlung zwischen beiden
    Durchgaengen gleich."""
    eintraege = [(t, e, toc_seiten.get(t, "–")) for t, e in TOC_ABSCHNITTE]
    inhaltsverzeichnis(doc, eintraege)

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

    abschnitt(doc, "1. Zusammenfassung", 1,
              "**Bördesnack24 hat heute 0 dokumentierte Verkäufe.** Jede Zahl in diesem Plan ist deshalb eine Annahme, keine Messung, belegt mit der eigenen Preisliste oder einer externen Quelle.")
    hook(doc, "**Start: 3 Automaten** (2 in 2027, 1 in 2028), **4. bis 2029, danach +1 pro Jahr.** Bahnhof Osterweddingen, Freibad Langenweddingen, Sporthalle Langenweddingen.")
    kennzahlen_reihe(doc, [
        ("8.300 €", "Umsatz 2027"),
        ("103.900 €", "Umsatz 2036"),
        ("223.900 €", "EBIT, 10 Jahre kumuliert"),
        ("124.500 €", "EBIT konservativ, 10 Jahre"),
    ])
    hook(doc, "**Das Betriebsergebnis bleibt in jedem einzelnen der zehn Planjahre positiv**, auch im konservativen Szenario mit 40 % niedrigerem Umsatz je Automat (Abschnitt 6).")

    # 2) Geschäftsmodell ---------------------------------------------------
    abschnitt(doc, "2. Geschäftsmodell und Standort", 1,
              "**Kein Nahversorger hat nachts oder sonntags offen.** Genau diese Lücke füllt Bördesnack24, App-Abo bindet zurück statt jeden Einkauf als Einzelereignis zu behandeln.")
    kennzahlen_reihe(doc, [
        ("168.000", "Einwohner Bördekreis"),
        ("9.000", "davon Sülzetal"),
        ("24/7", "Öffnungszeit"),
    ])
    doc.hinweis("Angaben des Auftraggebers; öffentliche Vergleichszahlen (citypopulation.de, Statista) liegen mit rund 171.000 bzw. 8.600–9.900 in derselben Größenordnung.")

    abschnitt(doc, "Standort- und Ausbauplan", 2,
              "**Vorgabe des Auftraggebers**, wörtlich umgesetzt: 3 Automaten zum Start, 4. bis 2029, danach +1 pro Jahr. **Die Zuordnung der ersten drei Standorte zu den Jahren ist ein Vorschlag dieses Plans**, keine Vorgabe.")

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

    # 3) Erlösquellen -------------------------------------------------------
    abschnitt(doc, "3. Die vier Erlösquellen", 1,
              "**Keine Quelle steht für sich.** Der Automat bringt Kunden, die App macht sie zählbar, das macht die Werbeplattform wertvoll, Sponsoring bringt neue Standorte zurück zum Automaten.")

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

    # 4) Annahmen -------------------------------------------------------------
    abschnitt(doc, "4. Annahmen dieses Plans", 1,
              "**Planungsannahmen, keine gemessenen Werte.** Mit Quelle, wo eine externe existiert, sonst eigene, im Text begründete Schätzung.")
    doc.tabelle(ANNAHMEN_TABELLE, quer=False)

    # 5) Finanzplan -------------------------------------------------------------
    abschnitt(doc, "5. Finanzplan, Jahr 1 bis 10", 1,
              "**Das Planungsszenario, Jahr für Jahr.** Automatenzahl, Erlöse, Kosten ohne Abschreibung und das Betriebsergebnis.")
    fp_tabelle = [["Jahr", "Automaten", "Erlöse gesamt", "Kosten (o. AfA)", "Abschreibung", "EBIT"]]
    for r in daten:
        fp_tabelle.append([
            str(r["jahr"]), str(r["automaten"]),
            f'{r["summe_erloese"]:,.0f} EUR'.replace(",", "."),
            f'{r["summe_kosten_ohne_afa"]:,.0f} EUR'.replace(",", "."),
            f'{r["afa_jahr"]:,.0f} EUR'.replace(",", "."),
            f'{r["ebit"]:,.0f} EUR'.replace(",", "."),
        ])
    doc.tabelle(fp_tabelle, zahlen_rechts={1, 2, 3, 4, 5})

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

    kum_spende = sum(r["spende"] for r in daten)
    kum_invest = sum(r["investition_jahr"] for r in daten)
    kum_ebit = sum(r["ebit"] for r in daten)
    abschnitt(doc, "Spenden und Investitionen im Überblick", 2,
              "**Drei Zahlen, die den Plan zusammenfassen:**")
    kennzahlen_reihe(doc, [
        (f'{kum_spende:,.0f} €'.replace(",", "."), "Spendentopf, 10 Jahre"),
        (f'{kum_invest:,.0f} €'.replace(",", "."), "Investition, 11 Automaten"),
        (f'{kum_ebit:,.0f} €'.replace(",", "."), "EBIT kumuliert, 10 Jahre"),
    ])

    # 6) Sensitivität -----------------------------------------------------------
    abschnitt(doc, "6. Konservatives Szenario", 1,
              "**Was, wenn der Umsatz je Automat 40 % niedriger ausfällt?** Die unsicherste Annahme in diesem Plan, mit eigener Spalte durchgerechnet, alle übrigen Annahmen unverändert.")
    sens_tabelle = [["Jahr", "EBIT Planungsszenario", "EBIT konservativ (−40 % Umsatz/Automat)"]]
    for r, k in zip(daten, daten_kons):
        sens_tabelle.append([
            str(r["jahr"]),
            f'{r["ebit"]:,.0f} EUR'.replace(",", "."),
            f'{k["ebit"]:,.0f} EUR'.replace(",", "."),
        ])
    doc.tabelle(sens_tabelle, zahlen_rechts={1, 2})
    kum_kons = sum(r["ebit"] for r in daten_kons)
    _kum_ebit_de = f'{kum_ebit:,.0f}'.replace(",", ".")
    _kum_kons_de = f'{kum_kons:,.0f}'.replace(",", ".")
    hook(doc, f"**Kumuliert sinkt das EBIT von {_kum_ebit_de} EUR auf {_kum_kons_de} EUR, bleibt aber in jedem einzelnen Jahr positiv.** Die drei zusätzlichen Erlösquellen hängen nicht am Automatenumsatz, das trägt den Unterschied.")

    # 7) Risiken und offene Punkte -----------------------------------------------
    abschnitt(doc, "7. Risiken und offene Punkte", 1,
              "**Ehrlich benannt, statt beschönigt** (interne Arbeitsregel „Behauptungen vorher prüfen“):")
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


def baue_dokument(pfad, toc_seiten):
    doc = Dokument(pfad, titel="Businessplan Bördesnack24 GbR", stammdaten_im_header=True)
    baue_inhalt(doc, toc_seiten)
    doc.speichern()
    return doc.pfad


def seiten_ermitteln(pdf_pfad, suchbegriffe):
    """Sucht jede Ueberschrift auf den Seiten NACH dem Inhaltsverzeichnis --
    sonst faende die Suche die Ueberschrift als Zeile im Inhaltsverzeichnis
    selbst (Seite 1) und nicht die echte Fundstelle im Text."""
    txt_pfad = "/tmp/_bp_toc_extract.txt"
    subprocess.run(["pdftotext", pdf_pfad, txt_pfad], check=True)
    text = open(txt_pfad, encoding="utf-8").read()
    seiten = text.split("\f")
    toc_seite = next((i for i, s in enumerate(seiten, start=1) if "Inhalt" in s), 1)
    ergebnis = {}
    for begriff in suchbegriffe:
        for i, seite in enumerate(seiten, start=1):
            if i > toc_seite and begriff in seite:
                ergebnis[begriff] = str(i)
                break
    return ergebnis


# Durchgang 1: Platzhalter-Seitenzahlen, um die echten zu ermitteln.
entwurf_pfad = "/tmp/_bp_entwurf.pdf"
baue_dokument(entwurf_pfad, toc_seiten={})
gefundene_seiten = seiten_ermitteln(entwurf_pfad, [t for t, _ in TOC_ABSCHNITTE])
fehlend = [t for t, _ in TOC_ABSCHNITTE if t not in gefundene_seiten]
if fehlend:
    raise RuntimeError(f"Seitenzahl nicht gefunden fuer: {fehlend}")

# Durchgang 2: echtes Dokument mit korrektem Inhaltsverzeichnis.
endgueltiger_pfad = baue_dokument("/mnt/user-data/outputs/Boerdesnack24_Businessplan.pdf", gefundene_seiten)
print("gespeichert:", endgueltiger_pfad)
print("Seitenzahlen im Inhaltsverzeichnis:", gefundene_seiten)
