# -*- coding: utf-8 -*-
import sys, json, re, subprocess
sys.path.insert(0, "/root/.claude/skills/synced/8679d439-3b7c-44a2-84d8-50f499b43fd0_0ef6de42-5319-4234-9f65-9ef4d034777c/boerdesnack24-pdf/scripts")
import pdf_builder as pb
from pdf_builder import Dokument, _esc
from reportlab.platypus import Paragraph, Table, TableStyle, Spacer, Image, KeepTogether, HRFlowable, PageBreak, NextPageTemplate
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader

daten = json.load(open("businessplan_zahlen.json"))
daten_pess = json.load(open("businessplan_zahlen_pessimistisch.json"))
daten_opt = json.load(open("businessplan_zahlen_optimistisch.json"))
GOLD_DARK = colors.HexColor("#8A6E00")
GRUEN = colors.HexColor("#5C9A3F")

import pyphen
_TRENN_DIC = pyphen.Pyphen(lang="de_DE")
def _trenn(text):
    """Fuegt weiche Trennzeichen (U+00AD) an den von pyphen erkannten
    Silbengrenzen ein. reportlab bricht Zeilen an dieser Stelle mit
    sichtbarem Bindestrich um, statt ein einzelnes Zeichen (oder generell
    eine unschoene Stelle) auf eine neue Zeile zu werfen -- Vorgabe des
    Auftraggebers (30.08.2026): ordentliche Silbentrennung in Tabellen,
    kein einzelnes Zeichen auf einer neuen Zeile."""
    return " ".join(_TRENN_DIC.inserted(w, hyphen="­") for w in str(text).split(" "))

def trenn_tabelle(zeilen):
    """Wendet _trenn() auf jede Zellen-Zeichenkette einer Tabelle an."""
    return [[_trenn(zelle) for zelle in zeile] for zeile in zeilen]

# doc.tabelle() schaetzt die noetige Spaltenbreite (fuer Schriftgroesse UND
# die automatische Hoch-/Querformat-Entscheidung) ueber pdfmetrics.stringWidth
# auf dem rohen Zellentext. Das Zeichen U+00AD (weiche Trennung) ist beim
# tatsaechlichen Zeilenumbruch unsichtbar/breitenlos, solange dort kein
# Umbruch stattfindet -- pdfmetrics.stringWidth weiss das nicht und zaehlt es
# mit, was Tabellen mit Silbentrennung faelschlich zu breit schaetzt und
# unnoetig ins Querformat schickt (beobachtet: Standort-Tabelle). Patch
# entfernt die weichen Trennzeichen nur fuer die Breitenschaetzung.
_orig_spaltenbreiten = pb._spaltenbreiten
def _spaltenbreiten_ohne_trennzeichen(daten, fs, kopfzeile, pad):
    ohne = [[str(z).replace("­", "") for z in zeile] for zeile in daten]
    return _orig_spaltenbreiten(ohne, fs, kopfzeile, pad)
pb._spaltenbreiten = _spaltenbreiten_ohne_trennzeichen

def tabelle_seite(doc, daten, **kwargs):
    """Wie doc.tabelle(), haelt die Tabelle aber als Ganzes zusammen: passt
    sie nicht mehr auf die aktuelle Seite, beginnt eine neue Seite, statt
    die Tabelle über zwei Seiten zu brechen -- Vorgabe des Auftraggebers
    (30.08.2026): Tabellen laufen nie über mehrere Seiten. doc.tabelle()
    kann dabei selbst einen Format-Wechsel (Hoch-/Querformat) ausloesen --
    dessen NextPageTemplate/PageBreak bleibt bewusst AUSSERHALB des
    KeepTogether, sonst verwirrt das reportlabs eigene Seitenumbruch-Logik."""
    start = len(doc.story)
    doc.tabelle(daten, **kwargs)
    neu = doc.story[start:]
    del doc.story[start:]
    wechsel = [f for f in neu if isinstance(f, (NextPageTemplate, PageBreak))]
    rest = [f for f in neu if not isinstance(f, (NextPageTemplate, PageBreak))]
    doc.story.extend(wechsel)
    doc.story.append(KeepTogether(rest))

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

def abschnitt_bild_quer(doc, titel, pfad, unterschrift=None):
    """Ueberschrift UND ein Vollformat-Bild zusammen auf einer eigenen
    Querseite -- fuer breite Grafiken, die im Hochformat zu klein und
    unleserlich wuerden, aber trotzdem mit ihrer Ueberschrift auf
    derselben Seite stehen sollen (nicht die Ueberschrift auf der
    vorherigen Hochformat-Seite)."""
    doc._nach_quer()
    doc.story.append(Paragraph(_esc(titel), doc.st["h1"]))
    doc.story.append(HRFlowable(width="100%", thickness=1.2, color=pb.GOLD, spaceBefore=2, spaceAfter=6))
    iw, ih = ImageReader(pfad).getSize()
    aspekt = iw / ih
    max_breite = pb.LANDSCAPE_CONTENT
    max_hoehe = (pb.LAND_H - pb.RAND_OBEN_OHNE_HEADER) - pb.RAND_UNTEN - 22 * pb.mm
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

def szenario_diagramm(pfad):
    """Gruppierte Balken: EBIT je Jahr in allen drei Szenarien nebeneinander
    -- pessimistisch/Planungsszenario/optimistisch, dieselbe Aufteilung wie
    in der Vergleichstabelle in Abschnitt 6."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    import numpy as np
    jahre = [r["jahr"] for r in daten]
    pess = [r["ebit"] for r in daten_pess]
    normal = [r["ebit"] for r in daten]
    opt = [r["ebit"] for r in daten_opt]

    x = np.arange(len(jahre))
    breite = 0.27
    fig, ax = plt.subplots(figsize=(7.2, 4.0), dpi=200)
    ax.bar(x - breite, pess, breite, color="#8C8C8C", edgecolor="#000000", linewidth=0.5, label="Pessimistisch (−40 %)")
    ax.bar(x, normal, breite, color="#F3BE21", edgecolor="#000000", linewidth=0.5, label="Planungsszenario")
    ax.bar(x + breite, opt, breite, color="#5C9A3F", edgecolor="#000000", linewidth=0.5, label="Optimistisch (+40 %)")
    ax.axhline(0, color="#595959", linewidth=0.8)

    ax.set_xlabel("Jahr", color="#595959", fontsize=11)
    ax.set_ylabel("EBIT in EUR", color="#595959", fontsize=11)
    ax.set_title("Szenariovergleich: EBIT pessimistisch / Planungsszenario / optimistisch", color="#000000", fontsize=12, fontweight="bold")
    ax.set_xticks(x)
    ax.set_xticklabels([str(j) for j in jahre])
    ax.tick_params(colors="#595959", labelsize=9)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    for s in ("left", "bottom"):
        ax.spines[s].set_color("#595959")
    ax.grid(axis="y", color="#D9D9D9", linewidth=0.6)
    ax.set_axisbelow(True)
    ax.legend(fontsize=8, loc="upper left", frameon=False)
    fig.tight_layout()
    fig.savefig(pfad, bbox_inches="tight", facecolor="white")
    plt.close(fig)

szenario_diagramm("szenariovergleich.png")

def _erlösmix_jahre(daten_liste):
    """Je Jahr die vier Geschäftsbereiche -- dieselbe Aufteilung wie in
    erlösmix_diagramm(), als vier Listen (eine je Bereich, ein Wert je Jahr)
    statt zu einer 10-Jahres-Summe verdichtet."""
    produkt = [r["produkt_netto"] - r["spende"] for r in daten_liste]
    app = [r["app_erlös"] for r in daten_liste]
    werbeflaeche = [r["werbeflaechen_erlös"] for r in daten_liste]
    sponsoring = [r["sponsoring_erlös"] for r in daten_liste]
    return produkt, app, werbeflaeche, sponsoring

def erlösmix_szenario_diagramm(pfad):
    """Drei Erlösmix-Charts nebeneinander (pessimistisch/Planungsszenario/
    optimistisch), jedes wie erlösmix_diagramm() -- je Jahr gestapelt nach
    Geschäftsbereich, gleiche y-Achse fuer alle drei, damit die Entwicklung
    über die Jahre UND der Unterschied zwischen den Szenarien auf einen
    Blick vergleichbar sind (Vorgabe des Auftraggebers, 30.08.2026: nicht
    nur die 10-Jahres-Summe, sondern die Entwicklung je Jahr)."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    jahre = [r["jahr"] for r in daten]
    farben = ["#F3BE21", "#8A6E00", "#000000", "#8C8C8C"]
    labels = ["Snack-/Getränkeverkauf", "App-Abo", "Werbeflächen", "Sponsoring"]
    szenarien = [
        ("Pessimistisch (−40 %)", _erlösmix_jahre(daten_pess)),
        ("Planungsszenario", _erlösmix_jahre(daten)),
        ("Optimistisch (+40 %)", _erlösmix_jahre(daten_opt)),
    ]
    y_max = max(sum(jahres_werte) for _, mix in szenarien for jahres_werte in zip(*mix))

    fig, achsen = plt.subplots(1, 3, figsize=(10.8, 3.8), dpi=200, sharey=True)
    for ax, (titel, mix) in zip(achsen, szenarien):
        bottom = [0.0] * len(jahre)
        for werte, farbe in zip(mix, farben):
            ax.bar(jahre, werte, bottom=bottom, color=farbe, edgecolor="white", linewidth=0.3)
            bottom = [b + w for b, w in zip(bottom, werte)]
        ax.set_title(titel, color="#000000", fontsize=10.5, fontweight="bold")
        ax.set_xlabel("Jahr", color="#595959", fontsize=9)
        ax.set_xticks(jahre[::2])
        ax.set_xticklabels([str(j) for j in jahre[::2]], fontsize=7.5, rotation=45)
        ax.tick_params(colors="#595959", labelsize=8)
        ax.set_ylim(0, y_max * 1.05)
        for s in ("top", "right"):
            ax.spines[s].set_visible(False)
        for s in ("left", "bottom"):
            ax.spines[s].set_color("#595959")
        ax.grid(axis="y", color="#D9D9D9", linewidth=0.6)
        ax.set_axisbelow(True)
    achsen[0].set_ylabel("Erlöse in EUR", color="#595959", fontsize=9)
    handles = [plt.Rectangle((0, 0), 1, 1, color=f) for f in farben]
    fig.legend(handles, labels, fontsize=8, loc="upper center", ncol=4, frameon=False, bbox_to_anchor=(0.5, 1.06))
    fig.tight_layout()
    fig.savefig(pfad, bbox_inches="tight", facecolor="white")
    plt.close(fig)

erlösmix_szenario_diagramm("erloesmix_szenario.png")

def marge_diagramm(pfad):
    """Linienchart: EBIT-Marge je Jahr in allen drei Szenarien -- zeigt auf
    einen Blick, dass die Marge nicht flach bei 38-42 % liegt, sondern mit
    der Automatenzahl von deutlich darunter (Anlaufjahre) auf deutlich
    darueber (Skaleneffekt) steigt (30.08.2026, Auftraggeber-Zielkorridor
    38-42 %, hier ehrlich mit den tatsaechlichen Werten abgeglichen statt
    erzwungen)."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    jahre = [r["jahr"] for r in daten]
    fig, ax = plt.subplots(figsize=(7.2, 4.0), dpi=200)
    ax.plot(jahre, [r["ebit_marge"] for r in daten_pess], color="#8C8C8C", linewidth=2.2, marker="o", markersize=4, label="Pessimistisch (−40 %)")
    ax.plot(jahre, [r["ebit_marge"] for r in daten], color="#F3BE21", linewidth=2.2, marker="o", markersize=4, label="Planungsszenario")
    ax.plot(jahre, [r["ebit_marge"] for r in daten_opt], color="#5C9A3F", linewidth=2.2, marker="o", markersize=4, label="Optimistisch (+40 %)")
    ax.axhspan(38, 42, color="#F3BE21", alpha=0.12, zorder=0)
    ax.axhline(38, color="#8A6E00", linewidth=0.8, linestyle="--")
    ax.axhline(42, color="#8A6E00", linewidth=0.8, linestyle="--")
    ax.text(jahre[0], 40, " Zielkorridor 38–42 %", color="#8A6E00", fontsize=8, va="center")

    ax.set_xlabel("Jahr", color="#595959", fontsize=11)
    ax.set_ylabel("EBIT-Marge in %", color="#595959", fontsize=11)
    ax.set_title("EBIT-Marge je Jahr -- Zielkorridor vs. tatsächlicher Verlauf", color="#000000", fontsize=12, fontweight="bold")
    ax.tick_params(colors="#595959", labelsize=9)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    for s in ("left", "bottom"):
        ax.spines[s].set_color("#595959")
    ax.grid(axis="y", color="#D9D9D9", linewidth=0.6)
    ax.set_axisbelow(True)
    ax.legend(fontsize=8, loc="lower right", frameon=False)
    fig.tight_layout()
    fig.savefig(pfad, bbox_inches="tight", facecolor="white")
    plt.close(fig)

marge_diagramm("marge_verlauf.png")

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
    ("6. Szenariovergleich", 1),
    ("7. Wachstumsraten und Marge", 1),
]

# ---------------------------------------------------------------------
# Annahmen-Tabelle -- bewusst kurz gehalten, damit sie im Hochformat in
# lesbarer Schrift bleibt (keine automatische Querseite noetig).
# ---------------------------------------------------------------------
ANNAHMEN_TABELLE = [
    ["Größe", "Annahme", "Quelle / Begründung"],
    ["Bruttoumsatz/Automat/Monat", "500–1.400 €, je Standort, Preisstand 2027", "GTR Automaten/Maschinenpartner: 300–1.500 €/Monat typisch"],
    ["Preissteigerung", "3 % p.a. auf Automat, Werbefläche, Sponsoring; App-Abo ausgenommen", "Angabe des Auftraggebers"],
    ["Wareneinsatz Snacks/Getränke", "34,0 % vom Nettoumsatz", "eigene Preisliste"],
    ["Wareneinsatz Heißgetränke", "16,5 % vom Nettoumsatz", "eigene Preisliste, Ø 6 Positionen"],
    ["Anschaffung je Automat", "10.000 € netto", "Angabe des Auftraggebers"],
    ["Abschreibungsdauer", "6 Jahre linear", "Angabe des Auftraggebers"],
    ["KfW-Gründerkredit", "3 % Zinsen, 2 Jahre tilgungsfrei, Laufzeit 3 Jahre, nur Automat 1–3", "Angabe des Auftraggebers"],
    ["Finanzierung Automat 4–11", "sofort aus dem Cashflow, ohne Kredit", "Angabe des Auftraggebers"],
    ["Nayax-Grundgebühr", "14 €/Monat je Terminal", "Nayax-Shop FAQ"],
    ["Kartengebühr", "3 % Kartenumsatz, 85 % Anteil", "Nayax Onyx 2,3–4 %"],
    ["Strom/Wartung/Versicherung", "40/30 €/Monat, 60 €/Jahr", ""],
    ["Standortprovision", "5 % vom Bruttoumsatz", "branchenüblich"],
    ["Zahlende App-Abonnenten", "40 (2027) bis 720 (2036)", "an Netzwachstum gekoppelt"],
    ["Ø Erlös je Abonnent", "0,90 €/Monat", "60 % Jahres-, 40 % Monatsabo"],
    ["Auslastung Werbeflächen", "0 % (27/28) bis 70 % (36)", "Obergrenze wie Advertising-Dok."],
    ["Digitale Werbekunden", "0 (27/28) bis 10 (36), Ø 60 €", "Paketpreise real"],
    ["Personal", "1 Minijob je 6 Automaten, 603 €", "Minijob-Grenze 2026"],
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

    umsatz_2027 = f'{daten[0]["summe_erloese"]:,.0f} €'.replace(",", ".")
    umsatz_2036 = f'{daten[-1]["summe_erloese"]:,.0f} €'.replace(",", ".")
    ebit_kum = sum(r["ebit"] for r in daten)
    ebit_kum_pess = sum(r["ebit"] for r in daten_pess)
    ebit_kum_opt = sum(r["ebit"] for r in daten_opt)
    ebit_kum_de = f'{ebit_kum:,.0f} €'.replace(",", ".")
    ebit_kum_pess_de = f'{ebit_kum_pess:,.0f} €'.replace(",", ".")
    ebit_kum_opt_de = f'{ebit_kum_opt:,.0f} €'.replace(",", ".")

    def _negative_info(szenario_daten):
        """Liste der Jahre mit negativem EBIT + deutschsprachiger Text zum
        ersten negativen Betrag, oder (None, None) wenn kein Jahr negativ ist."""
        jahre = [r["jahr"] for r in szenario_daten if r["ebit"] < 0]
        if not jahre:
            return [], None
        erster = next(r["ebit"] for r in szenario_daten if r["ebit"] < 0)
        betrag = f'{erster:,.0f} €'.replace(",", ".").replace("-", "−")
        return jahre, betrag

    negative_jahre_pess, erstes_neg_betrag_pess = _negative_info(daten_pess)
    negative_jahre_opt, erstes_neg_betrag_opt = _negative_info(daten_opt)

    abschnitt(doc, "1. Zusammenfassung", 1,
              "**Bördesnack24 hat heute 0 dokumentierte Verkäufe.** Jede Zahl in diesem Plan ist deshalb eine Annahme, keine Messung, belegt mit der eigenen Preisliste oder einer externen Quelle.")
    hook(doc, "**Start: 3 Automaten** (2 in 2027, 1 in 2028), **4. bis 2029, danach +1 pro Jahr.** Bahnhof Osterweddingen, Freibad Langenweddingen, Sporthalle Langenweddingen.")
    kennzahlen_reihe(doc, [
        (umsatz_2027, "Umsatz 2027"),
        (umsatz_2036, "Umsatz 2036"),
        (ebit_kum_de, "EBIT, 10 Jahre kumuliert"),
        (ebit_kum_pess_de, "EBIT pessimistisch, 10 Jahre"),
    ])
    if negative_jahre_pess:
        jahre_text_pess = ", ".join(str(j) for j in negative_jahre_pess)
        hook(doc, f"**Im Planungsszenario ist das Betriebsergebnis in jedem der zehn Jahre positiv.** Im pessimistischen Szenario (Abschnitt 6) ist einzig {jahre_text_pess} leicht negativ ({erstes_neg_betrag_pess}), alle übrigen Jahre bleiben positiv. Im optimistischen Szenario bleibt es durchgehend positiv, kumuliert {ebit_kum_opt_de}.")
    else:
        hook(doc, "**Das Betriebsergebnis bleibt in allen drei Szenarien in jedem einzelnen der zehn Planjahre positiv** — pessimistisch, Planungsszenario und optimistisch (Abschnitt 6).")

    # 2) Geschäftsmodell ---------------------------------------------------
    abschnitt(doc, "2. Geschäftsmodell und Standort", 1,
              "**Kein Nahversorger hat nachts oder sonntags offen.** Genau diese Lücke füllt Bördesnack24, App-Abo bindet zurück statt jeden Einkauf als Einzelereignis zu behandeln.")
    kennzahlen_reihe(doc, [
        ("170.984", "Einwohner Bördekreis"),
        ("8.841", "davon Sülzetal"),
        ("24/7", "Öffnungszeit"),
    ])
    doc.hinweis("Öffentliche Vergleichszahlen: Bördekreis, Statistisches Landesamt Sachsen-Anhalt (Stand 31.12.2025); Sülzetal, Gemeinde Sülzetal / citypopulation.de (Stand 01.01.2026).")

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
    tabelle_seite(doc, trenn_tabelle(standort_tabelle))

    doc.diagramm(
        [r["jahr"] for r in daten], [r["automaten"] for r in daten],
        x_label="Jahr", y_label="Automaten im Netz (kumuliert)",
        titel="Ausbau des Automatennetzes", art="linie",
        unterschrift="Abb. 1: 3 Automaten zum Start, +1 pro Jahr ab 2030."
    )

    # 3) Erlösquellen -------------------------------------------------------
    abschnitt_bild_quer(doc, "3. Die vier Erlösquellen", "zusammenspiel_pdf.png")

    # 4) Annahmen -------------------------------------------------------------
    abschnitt(doc, "4. Annahmen dieses Plans", 1,
              "**Planungsannahmen, keine gemessenen Werte.** Mit Quelle, wo eine externe existiert, sonst eigene, im Text begründete Schätzung.")
    tabelle_seite(doc, trenn_tabelle(ANNAHMEN_TABELLE), quer=False)

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
    tabelle_seite(doc, trenn_tabelle(fp_tabelle), zahlen_rechts={1, 2, 3, 4, 5})

    doc.diagramm(
        [r["jahr"] for r in daten], [r["summe_erloese"] for r in daten],
        x_label="Jahr", y_label="Erlöse in EUR", titel="Umsatzentwicklung, Planungsszenario",
        art="balken", unterschrift="Abb. 2: Summe aller vier Erlösquellen nach Abzug des Spendenanteils."
    )
    doc.bild("erloesmix.png", unterschrift="Abb. 3: Anteil der vier Geschäftsbereiche am Erlös über den Planungszeitraum.")

    pess_produkt, pess_app, pess_werbe, pess_spons = _erlösmix_jahre(daten_pess)
    normal_produkt, normal_app, normal_werbe, normal_spons = _erlösmix_jahre(daten)
    opt_produkt, opt_app, opt_werbe, opt_spons = _erlösmix_jahre(daten_opt)

    hook(doc, "**Die genauen Werte zum Diagramm oben, Planungsszenario:** Aus dem gestapelten Balken allein lässt sich der Beitrag der einzelnen Geschäftsbereiche schwer ablesen.")
    erlösmix_tabelle = [["Jahr", "Snack-/Getränke", "App-Abo", "Werbeflächen", "Sponsoring", "Summe"]]
    for i, r in enumerate(daten):
        erlösmix_tabelle.append([
            str(r["jahr"]),
            f'{normal_produkt[i]:,.0f} €'.replace(",", "."),
            f'{normal_app[i]:,.0f} €'.replace(",", "."),
            f'{normal_werbe[i]:,.0f} €'.replace(",", "."),
            f'{normal_spons[i]:,.0f} €'.replace(",", "."),
            f'{r["summe_erloese"]:,.0f} €'.replace(",", "."),
        ])
    tabelle_seite(doc, trenn_tabelle(erlösmix_tabelle), zahlen_rechts={1, 2, 3, 4, 5})
    _app_de = f'{sum(normal_app):,.0f} €'.replace(",", ".")
    _werbe_de = f'{sum(normal_werbe):,.0f} €'.replace(",", ".")
    _spons_de = f'{sum(normal_spons):,.0f} €'.replace(",", ".")
    hook(doc, f"**Der Erlösmix verschiebt sich mit dem Szenario — aber nur zum Teil, und nicht nur als 10-Jahres-Summe, sondern schon Jahr für Jahr sichtbar.** Nur der Automatenumsatz (Snack-/Getränkeverkauf) skaliert mit dem Bruttoumsatz je Automat, deshalb einzeln nach Jahr unten. App-Abo ({_app_de}), Werbeflächen ({_werbe_de}) und Sponsoring ({_spons_de}) hängen an eigenen Planzahlen (Abonnenten, Auslastung, Werbekunden) und sind, 10 Jahre kumuliert, in allen drei Szenarien identisch.")
    mix_tabelle = [["Jahr", "Snack-/Getränke pessimistisch (−40 %)", "Snack-/Getränke Planungsszenario", "Snack-/Getränke optimistisch (+40 %)"]]
    for i, r in enumerate(daten):
        mix_tabelle.append([
            str(r["jahr"]),
            f'{pess_produkt[i]:,.0f} €'.replace(",", "."),
            f'{normal_produkt[i]:,.0f} €'.replace(",", "."),
            f'{opt_produkt[i]:,.0f} €'.replace(",", "."),
        ])
    mix_tabelle.append([
        "Summe, 10 Jahre",
        f'{sum(pess_produkt):,.0f} €'.replace(",", "."),
        f'{sum(normal_produkt):,.0f} €'.replace(",", "."),
        f'{sum(opt_produkt):,.0f} €'.replace(",", "."),
    ])
    tabelle_seite(doc, trenn_tabelle(mix_tabelle), zahlen_rechts={1, 2, 3})
    doc.bild("erloesmix_szenario.png", unterschrift="Abb. 4: Erlösmix je Jahr, nebeneinander für alle drei Szenarien (gleiche y-Achse).")

    doc.diagramm(
        [r["jahr"] for r in daten], [r["ebit"] for r in daten],
        x_label="Jahr", y_label="EBIT in EUR", titel="Betriebsergebnis, Planungsszenario",
        art="balken", unterschrift="Abb. 5: EBIT vor Steuern und Gesellschafterentnahmen; Delle 2031 durch die erste Teilzeitkraft ab dem 6. Automaten."
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

    # 6) Szenariovergleich --------------------------------------------------
    abschnitt(doc, "6. Szenariovergleich", 1,
              "**Was, wenn der Umsatz je Automat abweicht?** Die unsicherste Annahme in diesem Plan, in drei Szenarien durchgerechnet: pessimistisch (−40 %), Planungsszenario (Basis) und optimistisch (+40 %), alle übrigen Annahmen unverändert.")
    sens_tabelle = [["Jahr", "EBIT pessimistisch (−40 %)", "EBIT Planungsszenario", "EBIT optimistisch (+40 %)"]]
    for r, p, o in zip(daten, daten_pess, daten_opt):
        sens_tabelle.append([
            str(r["jahr"]),
            f'{p["ebit"]:,.0f} EUR'.replace(",", ".").replace("-", "−"),
            f'{r["ebit"]:,.0f} EUR'.replace(",", ".").replace("-", "−"),
            f'{o["ebit"]:,.0f} EUR'.replace(",", ".").replace("-", "−"),
        ])
    tabelle_seite(doc, trenn_tabelle(sens_tabelle), zahlen_rechts={1, 2, 3})

    doc.bild("szenariovergleich.png", unterschrift="Abb. 6: EBIT je Jahr in allen drei Szenarien; die drei zusätzlichen Erlösquellen hängen nicht am Automatenumsatz, das dämpft den Ausschlag nach unten und oben.")

    _kum_ebit_de = f'{ebit_kum:,.0f}'.replace(",", ".")
    if negative_jahre_pess:
        jahre_text_pess = ", ".join(str(j) for j in negative_jahre_pess)
        hook(doc, f"**Kumuliert reicht das EBIT von {ebit_kum_pess_de} (pessimistisch) über {_kum_ebit_de} EUR (Planungsszenario) bis {ebit_kum_opt_de} (optimistisch).** Nur im pessimistischen Szenario ist {jahre_text_pess} leicht negativ ({erstes_neg_betrag_pess}), alle übrigen Jahre bleiben in allen drei Szenarien positiv.")
    else:
        hook(doc, f"**Kumuliert reicht das EBIT von {ebit_kum_pess_de} (pessimistisch) über {_kum_ebit_de} EUR (Planungsszenario) bis {ebit_kum_opt_de} (optimistisch), bleibt aber in allen drei Szenarien in jedem einzelnen Jahr positiv.** Die drei zusätzlichen Erlösquellen hängen nicht am Automatenumsatz, das dämpft den Ausschlag nach unten und oben.")

    # 7) Wachstumsraten und Marge --------------------------------------------
    def _wachstum_prozent(werte):
        """werte: 10 Jahreswerte. Gibt 9 Prozent-Strings zurueck (2028..2036
        gegen das jeweilige Vorjahr). Bei Vorzeichenwechsel (z. B. EBIT von
        negativ auf positiv) ist eine Prozentzahl irrefuehrend -- "n. a."
        statt einer falsch lesbaren Zahl."""
        ergebnis = []
        for i in range(1, len(werte)):
            v0, v1 = werte[i - 1], werte[i]
            if v0 == 0 or (v0 < 0) != (v1 < 0):
                ergebnis.append("n. a.")
            else:
                wert = (v1 / v0 - 1) * 100
                ergebnis.append(f'{wert:.1f} %'.replace(".", ",").replace("-", "−"))
        return ergebnis

    abschnitt(doc, "7. Wachstumsraten und Marge", 1,
              "**Wie schnell wächst das Geschäft, und wie viel bleibt hängen?** Umsatz- und Gewinnwachstum je Jahr in allen drei Szenarien, dazu die Finanzierung der ersten drei Automaten und die tatsächliche Marge im Vergleich zum Zielkorridor.")

    hook(doc, "**Umsatzwachstum, Jahr für Jahr.** 2027 ist das Startjahr ohne Vorjahr, deshalb beginnt die Tabelle 2028.")
    u_pess = [r["summe_erloese"] for r in daten_pess]
    u_norm = [r["summe_erloese"] for r in daten]
    u_opt = [r["summe_erloese"] for r in daten_opt]
    wg_pess, wg_norm, wg_opt = _wachstum_prozent(u_pess), _wachstum_prozent(u_norm), _wachstum_prozent(u_opt)
    umsatzwachstum_tabelle = [["Jahr", "Pessimistisch (−40 %)", "Planungsszenario", "Optimistisch (+40 %)"]]
    for i in range(1, len(daten)):
        umsatzwachstum_tabelle.append([str(daten[i]["jahr"]), wg_pess[i - 1], wg_norm[i - 1], wg_opt[i - 1]])
    tabelle_seite(doc, trenn_tabelle(umsatzwachstum_tabelle), zahlen_rechts={1, 2, 3})

    hook(doc, "**Gewinnwachstum (EBIT), Jahr für Jahr.** „n. a.“ dort, wo das EBIT von negativ auf positiv wechselt (pessimistisch, 2028) — eine Prozentzahl wäre dort irreführend, nicht aussagekräftig.")
    e_pess = [r["ebit"] for r in daten_pess]
    e_norm = [r["ebit"] for r in daten]
    e_opt = [r["ebit"] for r in daten_opt]
    eg_pess, eg_norm, eg_opt = _wachstum_prozent(e_pess), _wachstum_prozent(e_norm), _wachstum_prozent(e_opt)
    gewinnwachstum_tabelle = [["Jahr", "Pessimistisch (−40 %)", "Planungsszenario", "Optimistisch (+40 %)"]]
    for i in range(1, len(daten)):
        gewinnwachstum_tabelle.append([str(daten[i]["jahr"]), eg_pess[i - 1], eg_norm[i - 1], eg_opt[i - 1]])
    tabelle_seite(doc, trenn_tabelle(gewinnwachstum_tabelle), zahlen_rechts={1, 2, 3})

    hook(doc, "**Finanzierung: KfW-Gründerkredit für die ersten drei Automaten.** 3 % Zinsen, 2 Jahre tilgungsfrei, Laufzeit 3 Jahre je Tranche (2027: 20.000 € für 2 Automaten, 2028: 10.000 € für den dritten) — endfällig, die volle Tilgung fällt im jeweils letzten Jahr der Laufzeit. Automat 4 bis 11 werden sofort aus dem Cashflow bezahlt, ohne Kredit und ohne Zinsen. Zinsen und Tilgung sind unabhängig vom Szenario, dieselbe Summe in allen dreien.")
    kredit_tabelle = [["Jahr", "Kredit offen (Jahresende)", "Zinsen", "Tilgung"]]
    for r in daten:
        kredit_tabelle.append([
            str(r["jahr"]),
            f'{r["kredit_offen"]:,.0f} €'.replace(",", "."),
            f'{r["zinsen_jahr"]:,.0f} €'.replace(",", "."),
            f'{r["tilgung_jahr"]:,.0f} €'.replace(",", "."),
        ])
    tabelle_seite(doc, trenn_tabelle(kredit_tabelle), zahlen_rechts={1, 2, 3})

    kum_ueberschuss_pess = sum(r["jahresueberschuss"] for r in daten_pess)
    kum_ueberschuss_norm = sum(r["jahresueberschuss"] for r in daten)
    kum_ueberschuss_opt = sum(r["jahresueberschuss"] for r in daten_opt)
    _zinsen_de = f'{sum(r["zinsen_jahr"] for r in daten):,.0f} €'.replace(",", ".")
    hook(doc, f"**Jahresüberschuss nach Zinsen, 10 Jahre kumuliert** — EBIT abzüglich der {_zinsen_de} Kreditzinsen (2027–2030, danach 0):")
    kennzahlen_reihe(doc, [
        (f'{kum_ueberschuss_pess:,.0f} €'.replace(",", "."), "Pessimistisch, 10 Jahre"),
        (f'{kum_ueberschuss_norm:,.0f} €'.replace(",", "."), "Planungsszenario, 10 Jahre"),
        (f'{kum_ueberschuss_opt:,.0f} €'.replace(",", "."), "Optimistisch, 10 Jahre"),
    ])

    marge_kum_pess = sum(r["ebit"] for r in daten_pess) / sum(r["summe_erloese"] for r in daten_pess) * 100
    marge_kum_norm = ebit_kum / sum(r["summe_erloese"] for r in daten) * 100
    marge_kum_opt = sum(r["ebit"] for r in daten_opt) / sum(r["summe_erloese"] for r in daten_opt) * 100
    _marge_min_de = f"{min(r['ebit_marge'] for r in daten_pess):.1f}".replace(".", ",").replace("-", "−")
    _marge_max_de = f"{max(r['ebit_marge'] for r in daten_opt):.1f}".replace(".", ",")
    _marge_kum_pess_de = f"{marge_kum_pess:.1f}".replace(".", ",")
    _marge_kum_norm_de = f"{marge_kum_norm:.1f}".replace(".", ",")
    _marge_kum_opt_de = f"{marge_kum_opt:.1f}".replace(".", ",")
    hook(doc, f"**Zielkorridor 38–42 % EBIT-Marge — ehrlich abgeglichen, nicht erzwungen.** Kumuliert über 10 Jahre: {_marge_kum_pess_de} % (pessimistisch, unter dem Korridor), {_marge_kum_norm_de} % (Planungsszenario, im Korridor), {_marge_kum_opt_de} % (optimistisch, knapp darüber). Je Jahr schwankt die Marge deutlich stärker — von {_marge_min_de} % im ersten Jahr (wenige Automaten, hohe Abschreibung relativ zum Umsatz) bis {_marge_max_de} % im letzten (Skaleneffekt). Ein flaches Band über alle zehn Jahre und alle drei Szenarien ist mit den hier dokumentierten, einzeln belegten Kostenannahmen nicht erreichbar, ohne eine davon ohne Beleg zu ändern.")
    marge_tabelle = [["Jahr", "Marge pessimistisch", "Marge Planungsszenario", "Marge optimistisch"]]
    for r, p, o in zip(daten, daten_pess, daten_opt):
        marge_tabelle.append([
            str(r["jahr"]),
            f'{p["ebit_marge"]:.1f} %'.replace(".", ",").replace("-", "−"),
            f'{r["ebit_marge"]:.1f} %'.replace(".", ",").replace("-", "−"),
            f'{o["ebit_marge"]:.1f} %'.replace(".", ",").replace("-", "−"),
        ])
    tabelle_seite(doc, trenn_tabelle(marge_tabelle), zahlen_rechts={1, 2, 3})
    doc.bild("marge_verlauf.png", unterschrift="Abb. 7: EBIT-Marge je Jahr gegen den Zielkorridor 38–42 %; die Marge wächst mit der Automatenzahl, statt flach zu bleiben.")


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
