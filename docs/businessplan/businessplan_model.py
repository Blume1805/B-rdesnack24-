\
"""
Bördesnack24 -- Finanzmodell fuer den Businessplan (Jahr 1-10, 2027-2036).
Alle Annahmen sind unten explizit benannt und mit Quelle versehen, wo eine
externe Quelle vorliegt. Es fliesst keine Zahl aus einer echten sevDesk-Buchung
ein -- das Unternehmen hat 0 dokumentierte Verkaeufe (Stand 27.08.2026, siehe
docs/ADVERTISING-MASTERPROMPT-ABGLEICH.md). Das ist ein Planungsmodell, kein
Ist-Abgleich.
"""
import json

YEARS = list(range(2027, 2037))  # 2027..2036, 10 Jahre

# ---------------------------------------------------------------------------
# 1) Automatennetz
# ---------------------------------------------------------------------------
# Vorgabe des Auftraggebers: 3 Automaten zum Start (2 in 2027, 1 in 2028),
# 4. Automat bis 2029, danach +1/Jahr.
# Eigener Vorschlag zur Standortzuordnung (nicht vom Auftraggeber benannt,
# als Annahme markiert):
MACHINES = {
    2027: [
        dict(name="Bahnhof Osterweddingen -- Heißgetränkeautomat", typ="heiss", start_monat=7),
        dict(name="Bahnhof Osterweddingen -- Mixautomat", typ="mix", start_monat=7),
    ],
    2028: [
        dict(name="Freibad Langenweddingen", typ="freibad", start_monat=4),
    ],
    2029: [
        dict(name="Sporthalle Langenweddingen (Handball)", typ="sporthalle", start_monat=6),
    ],
}
# ab 2030: +1 Standard-Automat pro Jahr, Ort noch offen
for y in range(2030, 2037):
    MACHINES[y] = [dict(name=f"Weiterer Standort {y} (Lage offen)", typ="standard", start_monat=6)]

# ---------------------------------------------------------------------------
# 2) Umsatzannahmen je Automatentyp (BRUTTO, Verkaufspreis wie am Automaten)
#    Quelle Bandbreite: GTR Automaten / Maschinenpartner -- 300-1.500 EUR/Monat
#    typisch, bis 5.000 EUR/Monat an Hochfrequenz-Standorten (Bahnhof).
#    Eigene Zuordnung je Standortcharakter, als Planungsannahme markiert.
# ---------------------------------------------------------------------------
REVENUE_BRUTTO_PRO_MONAT = {
    "heiss":      700,   # Bahnhof, Heißgetränke -- Pendlerfrequenz, Nischenprodukt
    "mix":        900,   # Bahnhof, Kombi Snack+Kalt -- bester Einzelstandort
    "freibad_saison":   1400,  # Mai-September (5 Monate)
    "freibad_nebensaison": 150,  # Oktober-April (7 Monate), Bad geschlossen
    "sporthalle": 500,   # Training/Spielbetrieb, planbar aber begrenzt
    "standard":   650,   # künftige Standorte ohne Sonderlage, konservativ
}

# Produktmix je Automatentyp -> Mehrwertsteuersatz (real aus Preisliste)
VAT_HEISS = 0.19
VAT_SNACK = 0.07
VAT_DRINK = 0.19
MIX_SNACK_SHARE = 0.45
MIX_DRINK_SHARE = 0.55
VAT_MIX = MIX_SNACK_SHARE * VAT_SNACK + MIX_DRINK_SHARE * VAT_DRINK  # 13,6 %

WEQ_HEISS = 0.165   # eigene Preisliste, Ø 6 Heißgetränke-Positionen
WEQ_MIX   = 0.340   # eigene Preisliste, Ø 104 Snack/Getränke-Positionen

def vat_and_weq(typ):
    if typ == "heiss":
        return VAT_HEISS, WEQ_HEISS
    return VAT_MIX, WEQ_MIX  # mix, freibad, sporthalle, standard: Snack+Getränk-Mix

# ---------------------------------------------------------------------------
# 3) Betriebskosten je Gerät und Monat
# ---------------------------------------------------------------------------
NAYAX_GRUNDGEBUEHR = 14.0       # EUR/Monat/Terminal (Quelle: Nayax-Shop FAQ)
KARTENANTEIL = 0.85             # Anteil Kartenzahlung am Umsatz (Annahme)
KARTENGEBUEHR_SATZ = 0.03       # 3 % vom Kartenumsatz (Quelle: Nayax Onyx-Spanne 2,3-4 %)
STROM_PRO_MONAT = 40.0          # EUR/Monat/Gerät (Annahme)
WARTUNG_PRO_MONAT = 30.0        # EUR/Monat/Gerät (Annahme)
VERSICHERUNG_PRO_JAHR = 60.0    # EUR/Jahr/Gerät (Annahme)
STANDORTPROVISION_SATZ = 0.05   # 5 % vom Bruttoumsatz an Standortgeber (Branchenannahme)

INVESTITION_PRO_AUTOMAT = 6000.0   # EUR netto, Kombiautomat gekühlt inkl. Kartenterminal
                                    # Quelle Bandbreite: VENDY1/dasvending -- 4.989-9.000 EUR netto
AFA_JAHRE = 8                      # lineare Abschreibungsdauer (Annahme, betriebsgewöhnliche ND)

# ---------------------------------------------------------------------------
# 4) Spenden -- 5 % vom Netto-Produktumsatz (nur Automaten-/App-Verkauf,
#    real im Code: public.donation_rate() = 0.05, migrations/0020)
# ---------------------------------------------------------------------------
DONATION_RATE = 0.05

# ---------------------------------------------------------------------------
# 5) App-Abo-Einnahmen (echte Preise aus app.subscription_plans, 0080).
#    Zum Start werden NUR Monats- und Jahresabo angeboten (Vorgabe
#    Auftraggeber, 30.08.2026) -- das Lifetime-Modell steht zwar in der
#    Datenbank (79,99 EUR einmalig), wird aber vorerst nicht verkauft.
#    Blended Erlös je zahlendem Abonnenten und Monat: Annahme 60 % Jahresabo
#    (9,99 EUR / 12 = 0,833 EUR/Monat) zu 40 % Monatsabo (0,99 EUR/Monat).
# ---------------------------------------------------------------------------
ERLOES_JE_ABONNENT_MONAT = round(0.6 * (9.99 / 12) + 0.4 * 0.99, 4)  # = 0,8958 EUR
ZAHLENDE_ABONNENTEN = {
    2027: 40, 2028: 90, 2029: 160, 2030: 230, 2031: 310,
    2032: 390, 2033: 470, 2034: 550, 2035: 630, 2036: 720,
}
AKTIVE_KONTEN = {  # inkl. Gratis-Nutzung, für Reichweitenstaffel Werbung
    2027: 80, 2028: 180, 2029: 320, 2030: 460, 2031: 620,
    2032: 780, 2033: 940, 2034: 1100, 2035: 1260, 2036: 1440,
}

# ---------------------------------------------------------------------------
# 6) Werbeflächen am Automat (real dokumentiertes Preismodell,
#    docs/ADVERTISING-MASTERPROMPT-ABGLEICH.md: 3 Flächen/Automat,
#    Mischpreis 28 EUR/Fläche/Monat)
# ---------------------------------------------------------------------------
FLAECHEN_PRO_AUTOMAT = 3
MISCHPREIS_FLAECHE_MONAT = 28.0
AUSLASTUNG_WERBEFLAECHEN = {
    2027: 0.0, 2028: 0.0, 2029: 0.15, 2030: 0.25, 2031: 0.35,
    2032: 0.40, 2033: 0.40, 2034: 0.50, 2035: 0.60, 2036: 0.70,
}

# ---------------------------------------------------------------------------
# 7) Digitale Werbe-/Sponsoringpakete (reale Preise aus demselben Dokument),
#    Anzahl Werbekunden als Annahme, gewichtet mit der dort definierten
#    Reichweitenstaffel (Pionier 1,0 / Aufbau 1,5 / Etabliert 2,5).
# ---------------------------------------------------------------------------
WERBEKUNDEN_DIGITAL = {
    2027: 0, 2028: 0, 2029: 1, 2030: 2, 2031: 3,
    2032: 4, 2033: 5, 2034: 6, 2035: 8, 2036: 10,
}
DURCHSCHNITTSPAKET_MONAT = 60.0  # EUR, zwischen Starter (25) und Komplett (149)

def reichweitenfaktor(aktive_konten):
    if aktive_konten < 100:
        return 1.0
    if aktive_konten < 500:
        return 1.5
    return 2.5

# ---------------------------------------------------------------------------
# 8) Personal -- Minijob-Kraft(e) für Befüllung/Logistik ab Netzgröße
# ---------------------------------------------------------------------------
MINIJOB_MONAT = 556.0  # EUR/Monat, gesetzliche Minijob-Grenze 2026

def anzahl_minijobs(automaten_anzahl):
    return automaten_anzahl // 6  # 1 Kraft ab 6, 2. ab 12 usw.

# ===========================================================================
# Berechnung
# ===========================================================================
kumuliert = []
ergebnisse = []
gesamt_automaten = 0

for y in YEARS:
    neue = MACHINES.get(y, [])
    for m in neue:
        m["jahr_start"] = y
    kumuliert.extend(neue)
    gesamt_automaten = len(kumuliert)

    produkt_brutto = 0.0
    produkt_netto = 0.0
    wareneinsatz = 0.0
    strom = 0.0
    wartung = 0.0
    versicherung = 0.0
    kartengebuehr = 0.0
    nayax_grund = 0.0
    standortprovision = 0.0
    investition_jahr = sum(INVESTITION_PRO_AUTOMAT for m in neue)
    afa_jahr = 0.0

    for m in kumuliert:
        start_jahr = m["jahr_start"]
        typ = m["typ"]
        vat, weq = vat_and_weq(typ)

        if start_jahr > y:
            continue
        if start_jahr == y:
            monate_aktiv = 13 - m["start_monat"]  # z.B. Start Monat 7 -> 6 Monate
        else:
            monate_aktiv = 12

        if typ == "freibad":
            # 5 Monate Saison, 7 Monate Nebensaison -- im Startjahr anteilig
            if start_jahr == y:
                # Start April (Monat 4): erreicht noch 5 Saisonmonate + 3 Nebensaison
                saison_monate = 5 if m["start_monat"] <= 4 else max(0, 9 - m["start_monat"])
                neben_monate = monate_aktiv - saison_monate
            else:
                saison_monate, neben_monate = 5, 7
            brutto = (saison_monate * REVENUE_BRUTTO_PRO_MONAT["freibad_saison"]
                      + neben_monate * REVENUE_BRUTTO_PRO_MONAT["freibad_nebensaison"])
        else:
            brutto = monate_aktiv * REVENUE_BRUTTO_PRO_MONAT[typ]

        netto = brutto / (1 + vat)
        produkt_brutto += brutto
        produkt_netto += netto
        wareneinsatz += netto * weq
        strom += monate_aktiv * STROM_PRO_MONAT
        wartung += monate_aktiv * WARTUNG_PRO_MONAT
        versicherung += (monate_aktiv / 12) * VERSICHERUNG_PRO_JAHR
        kartengebuehr += brutto * KARTENANTEIL * KARTENGEBUEHR_SATZ
        nayax_grund += monate_aktiv * NAYAX_GRUNDGEBUEHR
        standortprovision += brutto * STANDORTPROVISION_SATZ
        afa_jahr += INVESTITION_PRO_AUTOMAT / AFA_JAHRE if (y - start_jahr) < AFA_JAHRE else 0.0

    spende = round(produkt_netto * DONATION_RATE, 2)

    app_erlös = ZAHLENDE_ABONNENTEN[y] * ERLOES_JE_ABONNENT_MONAT * 12
    werbeflaechen_erlös = gesamt_automaten * FLAECHEN_PRO_AUTOMAT * MISCHPREIS_FLAECHE_MONAT * 12 * AUSLASTUNG_WERBEFLAECHEN[y]
    faktor = reichweitenfaktor(AKTIVE_KONTEN[y])
    sponsoring_erlös = WERBEKUNDEN_DIGITAL[y] * DURCHSCHNITTSPAKET_MONAT * faktor * 12

    minijobs = anzahl_minijobs(gesamt_automaten)
    personal = minijobs * MINIJOB_MONAT * 12

    summe_erloese = round(produkt_netto - spende + app_erlös + werbeflaechen_erlös + sponsoring_erlös, 2)
    summe_kosten_ohne_afa = round(
        wareneinsatz + strom + wartung + versicherung + kartengebuehr + nayax_grund
        + standortprovision + personal, 2
    )
    ebit = round(summe_erloese - summe_kosten_ohne_afa - afa_jahr, 2)

    ergebnisse.append(dict(
        jahr=y, automaten=gesamt_automaten, neue_automaten=len(neue),
        produkt_brutto=round(produkt_brutto, 2), produkt_netto=round(produkt_netto, 2),
        spende=spende, wareneinsatz=round(wareneinsatz, 2),
        app_erlös=round(app_erlös, 2), werbeflaechen_erlös=round(werbeflaechen_erlös, 2),
        sponsoring_erlös=round(sponsoring_erlös, 2),
        summe_erloese=summe_erloese,
        strom=round(strom, 2), wartung=round(wartung, 2), versicherung=round(versicherung, 2),
        kartengebuehr=round(kartengebuehr, 2), nayax_grund=round(nayax_grund, 2),
        standortprovision=round(standortprovision, 2), personal=round(personal, 2),
        minijobs=minijobs,
        investition_jahr=round(investition_jahr, 2), afa_jahr=round(afa_jahr, 2),
        summe_kosten_ohne_afa=summe_kosten_ohne_afa,
        ebit=ebit,
        aktive_konten=AKTIVE_KONTEN[y], abonnenten=ZAHLENDE_ABONNENTEN[y],
        auslastung_werbeflaechen=AUSLASTUNG_WERBEFLAECHEN[y],
        werbekunden_digital=WERBEKUNDEN_DIGITAL[y],
    ))

for r in ergebnisse:
    print(f"{r['jahr']} | Automaten {r['automaten']:>2} | "
          f"Erlöse {r['summe_erloese']:>9,.0f} EUR | Kosten {r['summe_kosten_ohne_afa']:>8,.0f} EUR | "
          f"AfA {r['afa_jahr']:>6,.0f} | EBIT {r['ebit']:>9,.0f} EUR")

with open("businessplan_zahlen.json", "w") as f:
    json.dump(ergebnisse, f, indent=2, ensure_ascii=False)

print("\ngespeichert: businessplan_zahlen.json")
