"""Erzeugt den Businessplan 2027 bis 2036 als HTML (Druckvorlage) aus dem Rechenmodell.

Aufruf (im Ordner docs/strategy/businessplan):
    python3 data.py            # Modell rechnen -> data.json
    python3 build.py           # data.json -> businessplan.html
    node print.mjs             # businessplan.html -> Businessplan-Boerdesnack24-2027-2036.pdf
Gestaltung wie die Fassung vom 30.08.2026 (Bricolage Grotesque, Hanken Grotesk, Gold/Ink/Creme).
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
D = json.loads((HERE / "data.json").read_text())
Y = list(range(2027, 2037))
STAND = "01.11.2026"
GOLD, INK, CREAM, GREEN, GREY, RED = "#FDC102", "#202321", "#F6F3EE", "#5C9A3F", "#8A8580", "#C0392B"

NB = "\u00a0"
def eur(v, bold=False):
    s = f"{abs(round(v)):,}".replace(",", ".") + NB + "€"
    return ("\u2013\u2060" if round(v) < 0 else "") + s

def pct(v, nd=1):
    s = f"{abs(v):,.{nd}f}".replace(",", "X").replace(".", ",").replace("X", ".") + NB + "%"
    return ("\u2013\u2060" if v < 0 else "") + s

def cell(v, neg_red=True, bold=False):
    cls = []
    if neg_red and round(v) < 0: cls.append("neg")
    if bold: cls.append("b")
    return f'<td class="num {" ".join(cls)}">{eur(v)}</td>'

R = {k: D[k]["rows"] for k in ("plan", "pess", "opt")}
B = {k: {int(a): b for a, b in D[k]["buys"].items()} for k in ("plan", "pess", "opt")}
S = lambda k, f: sum(r[f] for r in R[k])
P = R["plan"]
erl_sum = S("plan", "erl"); w_sum = S("plan", "w"); wer_sum = S("plan", "wer"); spo_sum = S("plan", "spo")
ebit = {k: S(k, "ebit") for k in R}
jue = {k: sum(r["ebit"] - r["zins"] for r in R[k]) for k in R}
spende = S("plan", "spende")
kauf = {k: (B[k][4][0], B[k][5][0]) for k in B}
mincash = {k: min(R[k], key=lambda r: r["cash"]) for k in R}
marge = {k: [r["ebit"] / r["erl"] * 100 for r in R[k]] for k in R}
marge_cum = {k: ebit[k] / S(k, "erl") * 100 for k in R}
share = lambda v: v / erl_sum * 100
neg_years = {k: [r["t"] for r in R[k] if r["ebit"] < 0] for k in R}
schwelle_n, schwelle_ebit = D["schwelle50"]

# ---------------- Diagramme (SVG) ----------------
def bar_chart(vals, w=580, h=105, title="", fmt=str):
    mx = max(vals) * 1.15; bw = w / len(vals) * 0.66; gap = w / len(vals)
    out = [f'<svg viewBox="0 0 {w} {h+40}" class="chart">', f'<text x="0" y="10" class="ct">{title}</text>']
    base = h + 18
    for i, v in enumerate(vals):
        bh = v / mx * (h - 20); x = i * gap + (gap - bw) / 2
        out.append(f'<rect x="{x:.1f}" y="{base-bh:.1f}" width="{bw:.1f}" height="{bh:.1f}" fill="{GOLD}"/>')
        out.append(f'<text x="{x+bw/2:.1f}" y="{base-bh-5:.1f}" class="vl">{fmt(v)}</text>')
        out.append(f'<text x="{x+bw/2:.1f}" y="{base+14:.1f}" class="xl">{Y[i]}</text>')
    out.append(f'<line x1="0" y1="{base}" x2="{w}" y2="{base}" stroke="{INK}" stroke-width="1"/></svg>')
    return "".join(out)

def axis(w, h, mx, mn=0, step=None, top=18, left=44, fmtv=lambda v: f"{v:,.0f}".replace(",", ".")):
    out = []
    ys = []
    v = mn
    while v <= mx + 1e-9:
        ys.append(v); v += step
    for v in ys:
        y = top + (mx - v) / (mx - mn) * h
        out.append(f'<line x1="{left}" y1="{y:.1f}" x2="{w}" y2="{y:.1f}" stroke="#E6E2DC" stroke-width="0.7"/>')
        out.append(f'<text x="{left-6}" y="{y+3:.1f}" class="yl">{fmtv(v)}</text>')
    return out

def stacked_chart(series, colors, labels, w=580, h=150, mx=70000, step=17500):
    left, top = 44, 18
    out = [f'<svg viewBox="0 0 {w} {h+62}" class="chart">', f'<text x="0" y="10" class="ct">Erlöse in €</text>']
    out += axis(w, h, mx, 0, step, top, left)
    n = len(Y); gap = (w - left) / n; bw = gap * 0.66
    for i in range(n):
        x = left + i * gap + (gap - bw) / 2; acc = 0
        for s, c in zip(series, colors):
            v = s[i]; bh = v / mx * h
            out.append(f'<rect x="{x:.1f}" y="{top+h-(acc+v)/mx*h:.1f}" width="{bw:.1f}" height="{bh:.1f}" fill="{c}"/>')
            acc += v
        out.append(f'<text x="{x+bw/2:.1f}" y="{top+h+13:.1f}" class="xl">{Y[i]}</text>')
    out.append(f'<line x1="{left}" y1="{top+h}" x2="{w}" y2="{top+h}" stroke="{INK}" stroke-width="1"/>')
    lx = left
    for lab, c in zip(labels, colors):
        out.append(f'<rect x="{lx}" y="{top+h+28}" width="8" height="8" fill="{c}"/><text x="{lx+12}" y="{top+h+35}" class="lg">{lab}</text>')
        lx += 22 + len(lab) * 5.2
    out.append("</svg>")
    return "".join(out)

def scenario_chart(w=580, h=140, mx=100000, mn=-6000):
    left, top = 44, 18
    out = [f'<svg viewBox="0 0 {w} {h+62}" class="chart">', f'<text x="0" y="10" class="ct">EBIT in €</text>']
    for v in range(0, mx + 1, 20000):
        yy = top + (mx - v) / (mx - mn) * h
        out.append(f'<line x1="{left}" y1="{yy:.1f}" x2="{w}" y2="{yy:.1f}" stroke="#E6E2DC" stroke-width="0.7"/><text x="{left-6}" y="{yy+3:.1f}" class="yl">{v:,}</text>'.replace(',', '.'))
    zero = top + mx / (mx - mn) * h
    def yv(v): return top + (mx - v) / (mx - mn) * h
    for val, col, txt in ((80000, "#8B6B00", "Schwelle Umwandlung Kapitalgesellschaft, 80.000 €"), (50000, INK, "Schwelle Minimarket, 50.000 €")):
        out.append(f'<line x1="{left}" y1="{yv(val):.1f}" x2="{w}" y2="{yv(val):.1f}" stroke="{col}" stroke-dasharray="4 3" stroke-width="1"/>')
        out.append(f'<text x="{left+4}" y="{yv(val)-3:.1f}" class="lg" fill="{col}">{txt}</text>')
    n = len(Y); gap = (w - left) / n; bw = gap * 0.24
    for i in range(n):
        for j, (k, c) in enumerate((("pess", GREY), ("plan", GOLD), ("opt", GREEN))):
            v = R[k][i]["ebit"]; x = left + i * gap + gap * 0.14 + j * bw
            y0, y1 = (yv(v), zero) if v >= 0 else (zero, yv(v))
            out.append(f'<rect x="{x:.1f}" y="{y0:.1f}" width="{bw-1:.1f}" height="{max(0.6, y1-y0):.1f}" fill="{RED if v < 0 else c}"/>')
        out.append(f'<text x="{left+i*gap+gap/2:.1f}" y="{top+h+13:.1f}" class="xl">{Y[i]}</text>')
    out.append(f'<line x1="{left}" y1="{zero:.1f}" x2="{w}" y2="{zero:.1f}" stroke="{INK}" stroke-width="1"/>')
    lx = left
    for lab, c in (("pessimistisch", GREY), ("Planungsszenario", GOLD), ("optimistisch", GREEN)):
        out.append(f'<rect x="{lx}" y="{top+h+28}" width="8" height="8" fill="{c}"/><text x="{lx+12}" y="{top+h+35}" class="lg">{lab}</text>')
        lx += 30 + len(lab) * 5.2
    out.append("</svg>")
    return "".join(out)

def margin_chart(w=580, h=120, mx=60, mn=-40):
    left, top = 44, 18
    out = [f'<svg viewBox="0 0 {w} {h+58}" class="chart">', f'<text x="0" y="10" class="ct">EBIT-Marge</text>']
    def yv(v): return top + (mx - v) / (mx - mn) * h
    out.append(f'<rect x="{left}" y="{yv(42):.1f}" width="{w-left}" height="{yv(38)-yv(42):.1f}" fill="{GOLD}" opacity=".35"/>')
    out.append(f'<text x="{left+4}" y="{yv(42)-3:.1f}" class="lg" fill="#8B6B00">Zielkorridor 38 bis 42 %</text>')
    out += axis(w, h, mx, mn, 20, top, left, fmtv=lambda v: f"{v:.0f} %".replace("-", "–"))
    out.append(f'<line x1="{left}" y1="{yv(0):.1f}" x2="{w}" y2="{yv(0):.1f}" stroke="{INK}" stroke-width="1"/>')
    n = len(Y); gap = (w - left) / n
    xs = [left + i * gap + gap / 2 for i in range(n)]
    for k, c, dash, sw in (("pess", GREY, "4 3", 1.4), ("opt", GREEN, "", 1.4), ("plan", INK, "", 2)):
        pts = " ".join(f"{xs[i]:.1f},{yv(max(mn, marge[k][i])):.1f}" for i in range(n))
        out.append(f'<polyline points="{pts}" fill="none" stroke="{c}" stroke-width="{sw}" stroke-dasharray="{dash}"/>')
        if k == "plan":
            out += [f'<circle cx="{xs[i]:.1f}" cy="{yv(marge[k][i]):.1f}" r="2" fill="{INK}"/>' for i in range(n)]
    for i in range(n): out.append(f'<text x="{xs[i]:.1f}" y="{top+h+13:.1f}" class="xl">{Y[i]}</text>')
    lx = left
    for lab, c in (("pessimistisch", GREY), ("Planungsszenario", INK), ("optimistisch", GREEN)):
        out.append(f'<line x1="{lx}" y1="{top+h+31}" x2="{lx+16}" y2="{top+h+31}" stroke="{c}" stroke-width="1.6"/><text x="{lx+20}" y="{top+h+34}" class="lg">{lab}</text>')
        lx += 36 + len(lab) * 5.2
    out.append("</svg>")
    return "".join(out)

# ---------------- Bausteine ----------------
def section(num, title, body, first=False):
    return f'<section class="sec{" first" if first else ""}"><h2><span class="no">{num}</span>{title}</h2>{body}</section>'

def table(head, rows, cls=""):
    th = "".join(f'<th class="{"num" if i and "plain" not in cls else ""}">{h}</th>' for i, h in enumerate(head))
    return f'<table class="{cls}"><thead><tr>{th}</tr></thead><tbody>{"".join(rows)}</tbody></table>'

def kpis(items, cls="kpi4"):
    return f'<div class="{cls}">' + "".join(
        f'<div class="k" style="border-top-color:{c}"><div class="kv">{v}</div><div class="kl">{l}</div></div>' for v, l, c in items) + "</div>"

def growth(vals):
    return [(vals[i] / vals[i - 1] - 1) * 100 for i in range(1, len(vals))]

def ebit_growth(vals):
    out = []
    for i in range(1, len(vals)):
        a, b = vals[i - 1], vals[i]
        out.append(None if a <= 0 else (b / a - 1) * 100)
    return out

# ---------------- Inhalt ----------------
n_plan = [r["n"] for r in P]
p = []

# Deckblatt
p.append(f'''
<section class="cover">
  <div class="topline"><span>BÖRDESNACK24 GBR</span><span>BUSINESSPLAN 2027 BIS 2036</span><span>STAND {STAND}</span></div>
  <div class="head">
    <h1>Businessplan<br>2027 bis 2036.</h1>
    <div class="addr">Sülldorfer Str. 3A<br>39171 Sülzetal<br>Boerdesnack24@gmail.com<br>St.-Nr. 102/178/01635<br>USt-IdNr. DE 458804058</div>
  </div>
  <div class="goldrule"></div>
  <div class="intro">
    <div>
      <h3>Ein Automat verkauft.<br>Drei Quellen verdienen.</h3>
      <p>Snacks und Getränke rund um die Uhr, eine Werbeplattform für regionale Unternehmen und Sponsoring. Die Kundenapp ist kostenlos. 5 % des Nettoerlöses aus dem Warenverkauf gehen als Spende an gemeinnützige Vereine und Organisationen der Region, über die Empfänger stimmt die Kundschaft ab. Planungszeitraum 2027 bis 2036, jede Annahme einzeln ausgewiesen und mit Quelle versehen, wo eine externe Quelle vorliegt.</p>
    </div>
    <div class="grid4">
      <div class="g"><div class="gv">62</div><div class="gl">PRODUKTE IM SORTIMENT</div></div>
      <div class="g"><div class="gv">3</div><div class="gl">ERLÖSQUELLEN</div></div>
      <div class="g"><div class="gv">5</div><div class="gl">AUTOMATEN BIS 2036</div></div>
      <div class="g gold"><div class="gv">5 %</div><div class="gl">SPENDENQUOTE</div></div>
    </div>
  </div>
  <div class="dark"><div class="ic">!</div><div><b>Bördesnack24 hat heute 0 dokumentierte Verkäufe.</b><br>Jede Zahl in diesem Plan ist eine Annahme, keine Messung. Belegt ist sie mit der eigenen Preisliste oder einer externen Quelle. Abschnitt 4 führt jede Annahme mit ihrer Herkunft auf, Abschnitt 6 rechnet die unsicherste in drei Szenarien durch.</div></div>
</section>''')

# Inhalt
toc = [("1", "Zusammenfassung"), ("2", "Geschäftsmodell und Standort"), ("3", "Die drei Erlösquellen"), ("4", "Annahmen der Kalkulation"),
       ("5", "Finanzplan, Jahr 1 bis 10"), ("6", "Szenariovergleich"), ("7", "Marge und Finanzierung"), ("8", "Schwellen für den nächsten Schritt"), ("A", "Anhang, Detailtabellen")]
p.append('<section class="sec toc"><div class="eyebrow">BÖRDESNACK24 GBR</div><h2 class="plain">Inhalt.</h2><div class="goldrule"></div><ol>' +
         "".join(f'<li><span class="no">{a}</span>{b}</li>' for a, b in toc) + "</ol></section>")

# 1
k4, k5 = kauf["plan"]
mc = mincash["pess"]
p.append(section("1", "Zusammenfassung.", f'''
<p>Start mit 3 Automaten, zwei davon 2027, der dritte 2028. Automat 4 und 5 folgen erst, wenn sie aus dem Cashflow bezahlt werden können: im Planungsszenario {k4} und {k5}. Danach bleibt es vorerst bei fünf Automaten. Die ersten Standorte: Bahnhof Osterweddingen, Freibad Langenweddingen, Sporthalle Langenweddingen.</p>
{kpis([(eur(P[0]["erl"]), "UMSATZ 2027", GOLD), (eur(P[-1]["erl"]), "UMSATZ 2036", GOLD), (eur(ebit["plan"]), "EBIT KUMULIERT, 10 JAHRE", INK), (eur(ebit["pess"]), "EBIT PESSIMISTISCH, 10 JAHRE", GREY)])}
<p>Im Planungsszenario ist das Betriebsergebnis in jedem Jahr positiv, schon im Startjahr mit {eur(P[0]["ebit"])}. Im pessimistischen Szenario bleiben {" und ".join(str(y) for y in neg_years["pess"])} negativ, ab {neg_years["pess"][-1] + 1} dreht es ins Plus. Das optimistische Szenario ist ab dem ersten Jahr positiv und erreicht kumuliert {eur(ebit["opt"])}. Im pessimistischen Szenario reicht der Cashflow einige Jahre nicht für die KfW-Tilgung, der Kassenstand fällt auf bis zu {eur(mc["cash"])} ({mc["t"]}). Die Schwellen für Minimarkets ab 50.000 € und für die Kapitalgesellschaft ab 80.000 € Gewinn erreicht mit fünf Automaten kein Szenario im Planungszeitraum. Abschnitt 8 rechnet beide Schwellen gegen die Szenarien.</p>
<div class="callout"><b>Geändert gegenüber der Fassung vom 30.08.2026.</b> Die Kundenapp ist kostenlos, das App-Abo entfällt als Erlösquelle. Ihre Rabatte mindern den Warenerlös, gerechnet mit 3 %. Ausgebaut wird auf fünf statt elf Automaten, Automat 4 und 5 werden aus dem Cashflow bezahlt. Werbeflächen und Sponsoring wachsen deshalb nur mit fünf Automaten. Die Abschreibung läuft monatsgenau ab Anschaffung. Neu ausgewiesen ist der Kassenstand, weil der Kaufzeitpunkt davon abhängt.</div>
''', first=True))

# 2
rows2 = [
    ("2027", "Heißgetränkeautomat", "Bahnhof Osterweddingen", "Pendlerfrequenz, kein Kühlbedarf"),
    ("2027", "Mixautomat", "Bahnhof Osterweddingen", "Snacks und gekühlte Getränke"),
    ("2028", "Kombiautomat", "Freibad Langenweddingen", "stark saisonal, Mai bis September"),
    (f"{k4}*", "Kombiautomat", "Sporthalle Langenweddingen, Handball", "Trainings- und Spielbetrieb, aus dem Cashflow"),
    (f"{k5}*", "Kombiautomat", "Standort noch offen", "aus dem Cashflow, danach vorerst kein weiterer Ausbau"),
]
o4, o5 = kauf["opt"]; s4, s5 = kauf["pess"]
p.append(section("2", "Geschäftsmodell und Standort.", f'''
<p>Nachts, sonntags und an Feiertagen hat im Ort kein Nahversorger offen. Genau diese Lücke füllt Bördesnack24. Die kostenlose App bindet Kunden zurück, mit 5 % Dauerrabatt, Statusstufen und Coupons, statt jeden Einkauf als Einzelereignis zu behandeln.</p>
<div class="kpi3">
 <div class="g"><div class="gv">170.984</div><div class="gl">EINWOHNER BÖRDEKREIS</div></div>
 <div class="g"><div class="gv">8.841</div><div class="gl">DAVON SÜLZETAL</div></div>
 <div class="g"><div class="gv">24/7</div><div class="gl">ÖFFNUNGSZEIT</div></div>
</div>
<p class="src">Öffentliche Vergleichszahlen: Bördekreis, Statistisches Landesamt Sachsen-Anhalt, Stand 31.12.2025. Sülzetal, Gemeinde Sülzetal und citypopulation.de, Stand 01.01.2026.</p>
<h3>Standort- und Ausbauplan.</h3>
<p>Der Ausbau folgt keinem festen Takt mehr: 3 Automaten zum Start, danach wird nur gekauft, was der Cashflow bezahlt, bis fünf Automaten stehen. Welcher Standort in welchem Jahr belegt wird, hängt an der Verfügbarkeit der Flächen.</p>
{table(["JAHR", "NEUER AUTOMAT", "STANDORT", "BESONDERHEIT"], [f"<tr><td>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td></tr>" for a, b, c, d in rows2], "plain")}
<p class="src">* Kaufjahr im Planungsszenario. Optimistisch {o4} und {o5}, pessimistisch {s4} und {s5}.</p>
<figure>{bar_chart(n_plan, title="Automaten im Betrieb")}<figcaption>Abb. 1: Automatenzahl je Jahr, Planungsszenario. 3 Automaten zum Start, Automat 4 und 5 aus dem Cashflow.</figcaption></figure>
'''))

# 3
sw, swe, ssp = share(w_sum), share(wer_sum), share(spo_sum)
p.append(section("3", "Die drei Erlösquellen.", f'''
<p>Der Warenverkauf trägt gut vier Fünftel der Erlöse. Werbeflächen und Sponsoring hängen an eigenen Planzahlen und nicht am Umsatz je Automat, was den Ausschlag der Szenarien in beide Richtungen dämpft. Die App bringt keinen Erlös. Sie kostet über ihre Rabatte Umsatz und soll dafür Kunden binden.</p>
<div class="cards">
 <div class="card" style="border-top-color:{GOLD}"><div class="ico"><svg viewBox="0 0 24 24"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6h3v3H8zM13 6h3v3h-3zM8 11h3v3H8zM13 11h3v3h-3zM9 18h6"/></svg></div><h4>Snacks und Getränke</h4><p>Warenverkauf am Automaten, 24 Stunden. Wareneinsatz 34,0 % bei Snacks und Getränken, 16,5 % bei Heißgetränken. App-Rabatte mindern den Erlös um 3 %. {eur(w_sum)} in zehn Jahren, {pct(sw)} der Erlöse.</p></div>
 <div class="card" style="border-top-color:{INK}"><div class="ico"><svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/></svg></div><h4>Kundenapp, kostenlos</h4><p>Kein Abo, kein Erlös. 5 % Dauerrabatt mit kostenlosem Konto, Statusstufen mit 6 %, 7,5 % und 10 %, persönliche Coupons, Abstimmung über die Spende. Im Plan als Erlösminderung beim Warenverkauf gerechnet.</p></div>
 <div class="card" style="border-top-color:{GREY}"><div class="ico"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M6 8h6M6 11h4"/></svg></div><h4>Werbeflächen</h4><p>Fläche am Automaten und digitale Pakete für regionale Unternehmen. Auslastung 0 % in 2027 und 2028, 70 % bis 2036, angepasst an fünf Automaten. {eur(wer_sum)} in zehn Jahren, {pct(swe)}.</p></div>
 <div class="card" style="border-top-color:{GREEN}"><div class="ico"><svg viewBox="0 0 24 24"><path d="M3 17l5-6 4 4 4-6 5 6"/><path d="M3 20h18"/></svg></div><h4>Sponsoring</h4><p>Partnerschaften mit regionalen Unternehmen, erstmals 2029, angepasst an fünf Automaten. {eur(spo_sum)} in zehn Jahren, {pct(ssp)}. Die zweitgrößte Quelle.</p></div>
</div>
<div class="sharebar"><div style="flex:{sw};background:{GOLD};color:{INK}"><b>Snacks und Getränke</b><br>{pct(sw)}</div><div style="flex:{ssp};background:{GREEN};color:#fff">Sponsoring<br>{pct(ssp)}</div><div style="flex:{swe};background:{GREY};color:#fff">Werbung<br>{pct(swe)}</div></div>
<p class="cap">Abb. 2: Anteil der drei Quellen an {eur(erl_sum)} Erlös, kumuliert über zehn Jahre, Planungsszenario.</p>
'''))

# 4
A = [
    ("Bruttoumsatz je Automat und Monat", "500 bis 1.400 €, je Standort, Preisstand 2027", "GTR Automaten und Maschinenpartner: 300 bis 1.500 € pro Monat typisch"),
    ("Preissteigerung", "3 % p. a. auf Automat, Werbefläche, Sponsoring", "eigene Preisstrategie"),
    ("Wareneinsatz Snacks und Getränke", "34,0 % vom Nettoumsatz", "eigene Preisliste"),
    ("Wareneinsatz Heißgetränke", "16,5 % vom Nettoumsatz", "eigene Preisliste, Ø 6 Positionen"),
    ("App-Rabatte", "die Hälfte der Käufe über die App, Ø 6 % Rabatt: Warenerlös −3 %, Wareneinsatz unverändert", "Rabattmodell der App (5 % Dauerrabatt, Stufen 6 %, 7,5 %, 10 %), Anteil eigene Schätzung"),
    ("Kundenapp", "kostenlos, kein Abo, kein Erlös", "Gesellschafterbeschluss September 2026"),
    ("Spende", "5 % des Nettoerlöses aus dem Warenverkauf, vom Erlös abgezogen", "Gesellschafterbeschluss 22.09.2026"),
    ("Anschaffung je Automat", "10.000 € netto", "Angebotsstand Automatenhandel"),
    ("Inbetriebnahme", "Automat 1 und 2 im August 2027, Automat 3 im April 2028, Automat 4 und 5 im März des Kaufjahres; im ersten Jahr 78 % des Normalumsatzes", "abgeleitet aus der Fassung vom 30.08.2026"),
    ("Abschreibungsdauer", "6 Jahre linear, monatsgenau ab Anschaffung", "betriebsgewöhnliche Nutzungsdauer, § 7 Abs. 1 EStG"),
    ("KfW-Gründerkredit", "30.000 € für Automat 1 bis 3. 4,96 % Sollzins, 5,08 % effektiv, 5 Jahre Laufzeit, erstes Jahr tilgungsfrei, danach 625 € Tilgung pro Monat", "KfW-Tilgungsplan, Zusage 2026"),
    ("Finanzierung Automat 4 und 5", "aus dem Cashflow: Kauf im März, sobald am Vorjahresende 10.000 € frei verfügbar sind, nach Zinsen und Tilgung, ohne Entnahmen", "Gesellschafterbeschluss 01.11.2026"),
    ("Ausbauziel", "5 Automaten, danach vorerst kein weiterer Kauf", "Gesellschafterbeschluss 01.11.2026"),
    ("Nayax-Grundgebühr", "14 € pro Monat je Terminal", "Nayax-Shop FAQ"),
    ("Kartengebühr", "3 % Kartenumsatz, 85 % Anteil", "Nayax Onyx, 2,3 bis 4 %"),
    ("Strom, Wartung, Versicherung", "40 € und 30 € pro Monat, 60 € pro Jahr. Den Strom zahlt Bördesnack24", "eigene Schätzung, Beschluss 01.10.2026"),
    ("Standortvergütung", "5 % vom Bruttoumsatz als Planwert, je Standort als Miete oder Umsatzbeteiligung verhandelt", "branchenüblich, Beschluss 22.09.2026"),
    ("Auslastung Werbeflächen", "0 % in 2027 und 2028 bis 70 % in 2036, Erlös im Verhältnis zur Automatenzahl", "Obergrenze wie im Advertising-Dokument"),
    ("Digitale Werbekunden", "0 in 2027 und 2028, bis 10 in 2036 bei 11 Automaten, anteilig für 5 Automaten, Ø 60 €", "Paketpreise real"),
    ("Sponsoring", "erstmals 2029, Planwerte der Fassung vom 30.08.2026 im Verhältnis zur Automatenzahl", "eigene Planzahlen"),
    ("Software, KI-Tools und Domain", "1.400 bis 1.500 € pro Jahr, gerechnet mit 1.450 €, einschließlich Kundenapp. Lovable, Claude, Google, Apple, Microsoft, Higgsfield, Domain", "laufende Abo-Kosten"),
    ("Steuerberatung", "0 €, Buchhaltung und Abschluss werden selbst erstellt", "Eigenleistung"),
    ("Personal", "kein Personal, der Betrieb wird von den Gesellschaftern selbst geführt", "Eigenleistung"),
]
p.append(section("4", "Annahmen der Kalkulation.", '<p>Planungsannahmen, keine gemessenen Werte. Externe Quellen sind benannt, wo eine vorliegt, sonst steht die betriebliche Grundlage der Schätzung.</p>' +
                 table(["GRÖSSE", "ANNAHME", "QUELLE ODER BEGRÜNDUNG"], [f"<tr><td>{a}</td><td>{b}</td><td>{c}</td></tr>" for a, b, c in A], "plain assumptions")))

# 5
rows5 = [f'<tr><td>{r["t"]}</td><td class="num">{r["n"]}</td>{cell(r["erl"])}{cell(r["kost"])}{cell(r["afa"])}{cell(r["ebit"], bold=True)}</tr>' for r in P]
rows5b = [f'<tr><td>{r["t"]}</td>{cell(r["w"])}{cell(r["wer"])}{cell(r["spo"])}{cell(r["erl"], bold=True)}</tr>' for r in P]
p.append(section("5", "Finanzplan, Jahr 1 bis 10.", f'''
<p>Das Planungsszenario, Jahr für Jahr: Automatenzahl, Erlöse, Kosten ohne Abschreibung, Abschreibung und Betriebsergebnis.</p>
{table(["JAHR", "AUTOMATEN", "ERLÖSE GESAMT", "KOSTEN OHNE AFA", "ABSCHREIBUNG", "EBIT"], rows5)}
<figure>{stacked_chart([[r["w"] for r in P], [r["wer"] for r in P], [r["spo"] for r in P]], [GOLD, GREY, GREEN], ["Snacks und Getränke", "Werbeflächen", "Sponsoring"])}
<figcaption>Abb. 3: Erlöse je Jahr nach Geschäftsbereich, Planungsszenario, nach Abzug des Spendenanteils und der App-Rabatte.</figcaption></figure>
<p>Die Werte hinter Abb. 3, Bereich für Bereich und Jahr für Jahr.</p>
<div class="pb"></div>
{table(["JAHR", "SNACKS UND GETRÄNKE", "WERBEFLÄCHEN", "SPONSORING", "SUMME"], rows5b)}
<h3>Spenden und Investitionen im Überblick.</h3>
{kpis([(eur(spende), "SPENDENTOPF, 10 JAHRE", GREEN), (eur(50000), "INVESTITION, 5 AUTOMATEN", INK), (eur(ebit["plan"]), "EBIT KUMULIERT, 10 JAHRE", GOLD)], "kpi3l")}
'''))

# 6
rows6 = [f'<tr><td>{Y[i]}</td>{cell(R["pess"][i]["ebit"])}{cell(R["plan"][i]["ebit"])}{cell(R["opt"][i]["ebit"])}</tr>' for i in range(10)]
rows6.append(f'<tr class="sum"><td>Kumuliert</td>{cell(ebit["pess"], bold=True)}{cell(ebit["plan"], bold=True)}{cell(ebit["opt"], bold=True)}</tr>')
wer_s = {k: S(k, "wer") for k in R}; spo_s = {k: S(k, "spo") for k in R}; w_s = {k: S(k, "w") for k in R}
p.append(section("6", "Szenariovergleich.", f'''
<p>Was passiert, wenn der Umsatz je Automat abweicht? Die unsicherste Annahme des Plans, in drei Szenarien durchgerechnet: pessimistisch mit –40 %, das Planungsszenario als Basis und optimistisch mit +40 %. Alle übrigen Annahmen bleiben unverändert. Weil Automat 4 und 5 aus dem Cashflow bezahlt werden, verschiebt sich mit dem Umsatz auch ihr Kaufjahr: optimistisch {o4} und {o5}, im Planungsszenario {k4} und {k5}, pessimistisch {s4} und {s5}.</p>
{table(["JAHR", "EBIT PESSIMISTISCH, –40 %", "EBIT PLANUNGSSZENARIO", "EBIT OPTIMISTISCH, +40 %"], rows6)}
<figure>{scenario_chart()}<figcaption>Abb. 4: EBIT je Jahr in allen drei Szenarien, dazu die beiden Wachstumsschwellen aus Abschnitt 8. Mit fünf Automaten bleibt jedes Szenario unter beiden Schwellen. Rote Balken markieren negative Jahre.</figcaption></figure>
<p>Nur der Warenverkauf skaliert mit dem Bruttoumsatz je Automat. Über zehn Jahre summiert er sich auf {eur(w_s["pess"])} im pessimistischen, {eur(w_s["plan"])} im Planungs- und {eur(w_s["opt"])} im optimistischen Szenario. Werbeflächen und Sponsoring hängen an eigenen Planzahlen und an der Automatenzahl, die sich mit dem Kaufjahr verschiebt: zusammen {eur(wer_s["pess"] + spo_s["pess"])} pessimistisch, {eur(wer_s["plan"] + spo_s["plan"])} im Planungs- und {eur(wer_s["opt"] + spo_s["opt"])} im optimistischen Szenario.</p>
'''))

# 7
mp = marge["plan"]
in_corr = 38 <= marge_cum["plan"] <= 42
corr_txt = ("liegt damit im Korridor" if in_corr else ("liegt damit unter dem Korridor" if marge_cum["plan"] < 38 else "übertrifft den Korridor"))
rows7 = []
for r in P:
    rows7.append(f'<tr><td>{r["t"]}</td>{cell(30000 - sum(x["tilg"] for x in P if x["t"] <= r["t"]), False)}{cell(r["zins"], False)}{cell(r["tilg"], False)}{cell(r["cash"], True)}</tr>')
rows7.append(f'<tr class="sum"><td>Summe</td><td class="num">–</td>{cell(sum(r["zins"] for r in P), bold=True)}{cell(sum(r["tilg"] for r in P), bold=True)}<td class="num">–</td></tr>')
mcp, mco = mincash["plan"], mincash["opt"]
p.append(section("7", "Marge und Finanzierung.", f'''
<p>Der Zielkorridor liegt bei 38 bis 42 % EBIT-Marge. Kumuliert über zehn Jahre erreicht der Plan {pct(marge_cum["pess"])} im pessimistischen Szenario, {pct(marge_cum["plan"])} im Planungsszenario und {pct(marge_cum["opt"])} im optimistischen Szenario. Das Planungsszenario {corr_txt}. Je Jahr schwankt die Marge deutlich stärker: von {pct(min(mp))} bis {pct(max(mp))} im Planungsszenario. Sie steigt mit der Automatenzahl und springt, wenn die ersten Automaten ab 2033 abgeschrieben sind. Ein flaches Band über alle zehn Jahre und alle drei Szenarien ist mit den hier dokumentierten Kostenannahmen nicht erreichbar, ohne eine davon ohne Beleg zu ändern.</p>
<figure>{margin_chart()}<figcaption>Abb. 5: EBIT-Marge je Jahr gegen den Zielkorridor. Ohne Personalkosten steigt sie in allen drei Szenarien mit der Zeit, weil die festen Kosten je Automat gering sind.</figcaption></figure>
<div class="pb"></div>
<h3>Finanzierung der Automaten.</h3>
<p>Die ersten drei Automaten laufen über einen KfW-Gründerkredit von 30.000 €, abgerufen 2027. Konditionen aus dem vorliegenden Tilgungsplan: 4,96 % Sollzins bei 5,08 % Effektivzins, fünf Jahre Laufzeit, das erste Jahr tilgungsfrei. Ab Monat 13 werden monatlich 625 € getilgt, die Rate sinkt von 749 € auf 628 €. Zusammen fallen 4.526 € Zinsen an, die Gesamtbelastung liegt bei 34.526 €. Automat 4 und 5 werden aus dem Cashflow bezahlt, ohne Kredit und ohne Zinsen, sobald am Jahresende 10.000 € frei verfügbar sind. Zins und Tilgung sind vom Szenario unabhängig, der Kassenstand nicht.</p>
<div class="fin">
 <div>{table(["JAHR", "KREDIT OFFEN", "ZINSEN", "TILGUNG", "KASSE ENDE"], rows7, "small")}<p class="src">Kasse Ende: Planungsszenario, nach Zinsen, Tilgung und Anschaffungen, ohne Entnahmen. 2027 einschließlich 10.000 € aus dem KfW-Kredit für Automat 3, der 2028 gekauft wird.</p></div>
 <div>
  <div class="box"><div class="bh">JAHRESÜBERSCHUSS NACH ZINSEN, 10 JAHRE KUMULIERT</div>
   <div class="br"><span>pessimistisch</span><b>{eur(jue["pess"])}</b></div>
   <div class="br hl"><span>Planungsszenario</span><b>{eur(jue["plan"])}</b></div>
   <div class="br"><span>optimistisch</span><b>{eur(jue["opt"])}</b></div>
   <p class="bn">EBIT abzüglich 4.526 € Kreditzinsen aus den Jahren 2027 bis 2031, danach ist der Kredit vollständig getilgt.</p></div>
  <div class="box"><div class="bh">NIEDRIGSTER KASSENSTAND</div>
   <div class="br"><span>pessimistisch, {mc["t"]}</span><b class="neg">{eur(mc["cash"])}</b></div>
   <div class="br hl"><span>Planungsszenario, {mcp["t"]}</span><b>{eur(mcp["cash"])}</b></div>
   <div class="br"><span>optimistisch, {mco["t"]}</span><b>{eur(mco["cash"])}</b></div>
   <p class="bn">Im pessimistischen Szenario reichen die Überschüsse von {min(r["t"] for r in R["pess"] if r["cash"] < 0)} bis {max(r["t"] for r in R["pess"] if r["cash"] < 0)} nicht für Zins und Tilgung. Bis zu {eur(-mc["cash"])} müssen aus Eigenmitteln oder einem Kontokorrentrahmen kommen.</p></div>
 </div>
</div>
'''))

# 8
mx_opt = max(R["opt"], key=lambda r: r["ebit"])
p.append(section("8", "Schwellen für den nächsten Schritt.", f'''
<p>Die beiden nächsten Schritte hängen nicht am Kalender, sondern am Gewinn. Sie werden ausgelöst, sobald das Betriebsergebnis die jeweilige Schwelle erreicht, und sind in der Kalkulation noch nicht enthalten.</p>
<div class="cards">
 <div class="card" style="border-top-color:{GOLD}"><div class="ico"><svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20H4z"/><path d="M10 20v-5h4v5"/></svg></div><h4>Ab 50.000 € Gewinn: 1 bis 2 Minimarkets</h4><p>Aus dem Automatennetz werden ein bis zwei Minimarkets. Die Immobilien kauft eine eigene Immobilien-GmbH und vermietet sie an den Betrieb. Besitz und Betrieb bleiben damit steuerlich und haftungsrechtlich getrennt.</p></div>
 <div class="card" style="border-top-color:{GREEN}"><div class="ico"><svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3"/></svg></div><h4>Ab 80.000 € Gewinn: Kapitalgesellschaft</h4><p>Die GbR wird in eine Kapitalgesellschaft umgewandelt. Die Haftung ist dann auf das Gesellschaftsvermögen begrenzt, und Gewinne können im Unternehmen bleiben, statt vollständig bei den Gesellschaftern anzufallen.</p></div>
</div>
<div class="quote">Wann greifen die Schwellen? Mit fünf Automaten in keinem Szenario. Das höchste Betriebsergebnis erreicht das optimistische Szenario {mx_opt["t"]} mit {eur(mx_opt["ebit"])}, das Planungsszenario 2036 mit {eur(P[-1]["ebit"])}. Für 50.000 € wären im Planungsszenario rund {schwelle_n} Automaten nötig, also etwa der Ausbaupfad der Fassung vom 30.08.2026. Die Schwellen sind damit eine Frage des nächsten Ausbauschritts nach dem fünften Automaten. Weder Umwandlungskosten noch die Investition in einen Minimarket sind in diesem Plan gerechnet.</div>
'''))

# Anhang
rowsA = [f'<tr><td>{Y[i]}</td>{cell(R["pess"][i]["w"])}{cell(R["plan"][i]["w"])}{cell(R["opt"][i]["w"])}</tr>' for i in range(10)]
rowsA.append(f'<tr class="sum"><td>Summe</td>{cell(w_s["pess"], bold=True)}{cell(w_s["plan"], bold=True)}{cell(w_s["opt"], bold=True)}</tr>')
rowsM = [f'<tr><td>{Y[i]}</td><td class="num">{pct(marge["pess"][i])}</td><td class="num">{pct(marge["plan"][i])}</td><td class="num">{pct(marge["opt"][i])}</td></tr>' for i in range(10)]
rowsM.append(f'<tr class="sum"><td>10 Jahre</td><td class="num b">{pct(marge_cum["pess"])}</td><td class="num b">{pct(marge_cum["plan"])}</td><td class="num b">{pct(marge_cum["opt"])}</td></tr>')
ug = {k: growth([r["erl"] for r in R[k]]) for k in R}
eg = {k: ebit_growth([r["ebit"] for r in R[k]]) for k in R}
f = lambda v: "n. a." if v is None else pct(v)
rowsU = [f'<tr><td>{Y[i+1]}</td><td class="num">{pct(ug["pess"][i])}</td><td class="num">{pct(ug["plan"][i])}</td><td class="num">{pct(ug["opt"][i])}</td></tr>' for i in range(9)]
rowsG = [f'<tr><td>{Y[i+1]}</td><td class="num">{f(eg["pess"][i])}</td><td class="num">{f(eg["plan"][i])}</td><td class="num">{f(eg["opt"][i])}</td></tr>' for i in range(9)]
p.append(section("A", "Anhang, Detailtabellen.", f'''
<h3>Warenverkauf je Szenario.</h3>
{table(["JAHR", "PESSIMISTISCH, –40 %", "PLANUNGSSZENARIO", "OPTIMISTISCH, +40 %"], rowsA)}
<div class="pb"></div>
<h3>EBIT-Marge je Jahr.</h3>
{table(["JAHR", "MARGE PESSIMISTISCH", "MARGE PLANUNGSSZENARIO", "MARGE OPTIMISTISCH"], rowsM)}
<div class="pb"></div>
<div class="two">
 <div><h3>Umsatzwachstum.</h3><p class="small">2027 ist das Startjahr ohne Vorjahr, deshalb beginnt die Tabelle 2028.</p>{table(["JAHR", "PESS.", "PLAN", "OPT."], rowsU, "small")}</div>
 <div><h3>Gewinnwachstum, EBIT.</h3><p class="small">„n. a." dort, wo das EBIT im Vorjahr negativ oder null ist. Eine Prozentzahl wäre dort irreführend.</p>{table(["JAHR", "PESS.", "PLAN", "OPT."], rowsG, "small")}</div>
</div>
'''))

CSS = f'''
@font-face {{ font-family: Bricolage; font-weight: 700; src: url("../../../apps/mobile/assets/fonts/BricolageGrotesque-Bold.ttf"); }}
@font-face {{ font-family: Bricolage; font-weight: 800; src: url("../../../apps/mobile/assets/fonts/BricolageGrotesque-ExtraBold.ttf"); }}
@font-face {{ font-family: Hanken; font-weight: 400; src: url("../../../apps/mobile/assets/fonts/HankenGrotesk-Regular.ttf"); }}
@font-face {{ font-family: Hanken; font-weight: 600; src: url("../../../apps/mobile/assets/fonts/HankenGrotesk-SemiBold.ttf"); }}
@font-face {{ font-family: Hanken; font-weight: 700; src: url("../../../apps/mobile/assets/fonts/HankenGrotesk-Bold.ttf"); }}
@page {{ size: A4; margin: 30mm 30mm 24mm 30mm; }}
* {{ box-sizing: border-box; }}
body {{ margin: 0; font-family: Hanken, sans-serif; color: {INK}; font-size: 10.5pt; line-height: 1.5; }}
p {{ margin: 0 0 10pt; max-width: 135mm; }}
.sec {{ break-before: page; }}
.sec.first {{ break-before: page; }}
.pb {{ break-after: page; }}
h1 {{ font-family: Bricolage; font-weight: 800; font-size: 34pt; line-height: 1.02; letter-spacing: -0.03em; margin: 0; }}
h2 {{ font-family: Bricolage; font-weight: 800; font-size: 17pt; letter-spacing: -0.02em; margin: 0 0 12pt; padding-top: 8pt; border-top: 1.5pt solid {INK}; display: flex; align-items: baseline; gap: 8pt; }}
h2.plain {{ border: 0; font-size: 24pt; padding: 0; margin: 6pt 0 10pt; }}
h2 .no {{ color: {GOLD}; font-size: 22pt; }}
h3 {{ font-family: Bricolage; font-weight: 800; font-size: 13pt; letter-spacing: -0.02em; margin: 16pt 0 6pt; }}
h4 {{ font-family: Bricolage; font-weight: 800; font-size: 11.5pt; margin: 6pt 0 4pt; }}
.eyebrow {{ color: #856A00; font-size: 8pt; font-weight: 700; letter-spacing: .25em; }}
.goldrule {{ height: 2.5pt; background: {GOLD}; margin: 8pt 0 16pt; }}
.topline {{ display: flex; justify-content: space-between; font-size: 7.5pt; letter-spacing: .08em; color: #555; border-top: .6pt solid #ccc; padding-top: 4pt; }}
.head {{ display: flex; justify-content: space-between; align-items: flex-start; margin-top: 2pt; }}
.addr {{ font-size: 8pt; color: #555; line-height: 1.55; width: 42mm; }}
.intro {{ display: grid; grid-template-columns: 1fr 63mm; gap: 8mm; }}
.intro h3 {{ margin-top: 0; font-size: 15pt; line-height: 1.2; }}
.grid4 {{ display: grid; grid-template-columns: 1fr 1fr; border: .6pt solid #ddd; align-self: start; }}
.g {{ background: #FBF8F4; border: .6pt solid #ddd; padding: 8pt 10pt 12pt; min-height: 22mm; }}
.g.gold {{ background: {GOLD}; }}
.gv {{ font-family: Bricolage; font-weight: 800; font-size: 20pt; }}
.gl {{ font-size: 7pt; letter-spacing: .06em; color: #555; margin-top: 2pt; }}
.g.gold .gl {{ color: {INK}; }}
.dark {{ background: {INK}; color: #E9E4DC; padding: 14pt 18pt 16pt 52pt; position: relative; margin-top: 18pt; font-size: 11.5pt; line-height: 1.55; }}
.dark b {{ color: #fff; font-size: 10.5pt; }}
.dark .ic {{ position: absolute; left: 18pt; top: 14pt; width: 16pt; height: 16pt; border: 1.4pt solid {GOLD}; border-radius: 50%; color: {GOLD}; font-size: 9pt; text-align: center; line-height: 14pt; font-weight: 700; }}
.toc ol {{ list-style: none; padding: 0; margin: 12pt 0; }}
.toc li {{ display: flex; gap: 14pt; font-size: 11pt; font-weight: 600; margin: 0 0 13pt; }}
.toc .no {{ color: {GOLD}; font-family: Bricolage; font-weight: 800; font-size: 14pt; width: 14pt; }}
.kpi4, .kpi3l {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 5mm; margin: 6pt 0 14pt; }}
.kpi3l {{ grid-template-columns: repeat(3, 1fr); }}
.k {{ border-top: 2.5pt solid; padding-top: 6pt; }}
.kv {{ font-family: Bricolage; font-weight: 800; font-size: 15pt; letter-spacing: -0.02em; }}
.kl {{ font-size: 7pt; letter-spacing: .05em; color: #555; }}
.kpi3 {{ display: grid; grid-template-columns: repeat(3, 1fr); border: .6pt solid #ddd; margin: 10pt 0 4pt; }}
.kpi3 .g {{ min-height: 18mm; }}
.src, .cap, figcaption {{ font-size: 8pt; font-style: italic; color: #555; max-width: 150mm; }}
.callout, .quote {{ background: #FBF8F4; border-left: 3pt solid {GOLD}; padding: 10pt 14pt; margin: 12pt 0; font-size: 10pt; }}
.quote {{ font-size: 11pt; line-height: 1.55; }}
table {{ width: 100%; border-collapse: collapse; margin: 6pt 0 10pt; font-size: 9pt; font-variant-numeric: tabular-nums; }}
th {{ background: {CREAM}; text-align: left; font-size: 7pt; letter-spacing: .06em; padding: 6pt 6pt; border-bottom: 1.4pt solid {INK}; vertical-align: bottom; }}
td {{ padding: 6pt 6pt; border-bottom: .5pt solid #DDD8D0; vertical-align: top; }}
tbody tr:last-child td {{ border-bottom: 1pt solid {INK}; }}
.num {{ text-align: right; white-space: nowrap; }}
td.b, .b {{ font-weight: 700; }}
.neg {{ color: {RED}; }}
tr.sum td {{ font-weight: 700; }}
table.plain td {{ padding: 5pt 6pt; }} table.plain td:nth-child(1) {{ width: 13%; }}
table.assumptions td {{ font-size: 8.6pt; padding: 5pt 6pt; }}
table.assumptions td:nth-child(1) {{ width: 26%; }} table.assumptions td:nth-child(2) {{ width: 40%; }}
table.small {{ font-size: 8.6pt; }}
figure {{ margin: 10pt 0 6pt; break-inside: avoid; }}
.chart {{ width: 100%; height: auto; display: block; font-family: Hanken; }}
.chart .ct {{ font-size: 7px; fill: #555; }}
.chart .xl {{ font-size: 7px; fill: #555; text-anchor: middle; }}
.chart .yl {{ font-size: 7px; fill: #555; text-anchor: end; }}
.chart .vl {{ font-size: 8px; font-weight: 700; text-anchor: middle; fill: {INK}; }}
.chart .lg {{ font-size: 7px; fill: #444; }}
.cards {{ display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin: 10pt 0; }}
.card {{ border: .6pt solid #ddd; border-top: 3pt solid; padding: 10pt 12pt 12pt; break-inside: avoid; }}
.card p {{ font-size: 9pt; margin: 0; }}
.ico svg {{ width: 15pt; height: 15pt; fill: none; stroke: #444; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }}
.sharebar {{ display: flex; height: 16mm; margin: 12pt 0 4pt; font-size: 7.5pt; text-align: center; }}
.sharebar div {{ display: flex; flex-direction: column; justify-content: center; line-height: 1.3; min-width: 13mm; }}
.fin {{ display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; align-items: start; }}
.box {{ border: .6pt solid #ddd; padding: 10pt 12pt; margin-bottom: 5mm; }}
.bh {{ font-size: 7pt; letter-spacing: .06em; color: #555; margin-bottom: 8pt; }}
.br {{ display: flex; justify-content: space-between; font-size: 9.5pt; padding: 4pt 4pt; }}
.br.hl {{ background: {GOLD}; }}
.bn {{ font-size: 8pt; font-style: italic; color: #555; margin: 8pt 0 0; }}
.two {{ display: grid; grid-template-columns: 1fr 1fr; gap: 7mm; }}
p.small {{ font-size: 8.6pt; min-height: 34pt; }}
'''
import re
body = re.sub(r'(\d) (%|€)', lambda m: m.group(1) + NB + m.group(2), "".join(p))
html = f'<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Businessplan Bördesnack24 2027 bis 2036</title><style>{CSS}</style></head><body>{body}</body></html>'
(HERE / "businessplan.html").write_text(html)
print("businessplan.html geschrieben")
