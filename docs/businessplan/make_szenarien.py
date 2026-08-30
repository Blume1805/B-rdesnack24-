# -*- coding: utf-8 -*-
"""Erzeugt die Szenario-Varianten des Finanzmodells als JSON. Ersetzt die
fruehere Monkeypatch-Technik (Quelltext per Regex aendern und exec()en) durch
einen einfachen Funktionsaufruf mit anderem Faktor -- businessplan_model.py
stellt dafuer berechne(umsatz_faktor) bereit.

Skaliert wird ausschliesslich REVENUE_BRUTTO_PRO_MONAT (Bruttoumsatz je
Automat und Monat), die unsicherste Annahme im Modell (siehe Abschnitt 4/6
des Businessplans), alle uebrigen Annahmen bleiben je Szenario unveraendert.
Pessimistisch/optimistisch sind symmetrisch um +/-40 % gewaehlt."""
import json
from businessplan_model import berechne

SZENARIEN = [
    ("pessimistisch", 0.6),
    ("optimistisch", 1.4),
]

for name, faktor in SZENARIEN:
    ergebnisse = berechne(faktor)
    pfad = f"businessplan_zahlen_{name}.json"
    with open(pfad, "w") as f:
        json.dump(ergebnisse, f, indent=2, ensure_ascii=False)
    kum_ebit = sum(r["ebit"] for r in ergebnisse)
    print(f"gespeichert: {pfad} (Faktor {faktor}, EBIT kumuliert {kum_ebit:,.0f} EUR)")
