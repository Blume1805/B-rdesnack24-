"""Rekonstruiertes Rechenmodell des Businessplans (Stand 30.08.2026) und Neufassung."""
import json, sys
Y = list(range(2027, 2037))
P = lambda t: 1.03 ** (t - 2027)          # Preissteigerung 3 % p. a.
# --- aus dem alten Plan abgeleitet ---
W123 = {2027: 7869}                        # Warenverkauf Automat 1-3, netto nach Spende
for t in Y[1:]: W123[t] = 22093 * P(t)
R123 = {2027: 0.3716}                      # variable Kosten je € Warenverkauf, Automat 1-3
for t in Y[1:]: R123[t] = 0.3936
F123 = {2027: 1067}                        # feste Kosten Automat 1-3 (Nayax, Strom, Wartung, Versicherung)
for t in Y[1:]: F123[t] = 2937
WE123 = 0.3035                             # Anteil Wareneinsatz an R123 (Rest umsatzabhängig)
RS, WES = 0.448, 0.3579                    # weitere Kombiautomaten: variabel, davon Wareneinsatz
FIX_M, FIX_TIME = 1068, 840                # feste Kosten je Automat und Jahr, davon zeitabhängig
SOFT = 1450
L = {4: 4235, 5: 6364}                     # Normalumsatz je Jahr (Preise 2027): Sporthalle, Standardautomat
LS = 6522.5
F1 = 0.78                                  # Anteil im ersten Betriebsjahr (Inbetriebnahme Mitte März)
APP_OLD = [430,967,1719,2472,3331,4191,5051,5910,6770,7737]
WER_OLD = [0,0,642,1377,2382,3272,3852,5579,7661,10127]
SPO_OLD = [0,0,1146,2360,6078,8347,10746,13283,18241,23486]
N_OLD = [2,3,4,5,6,7,8,9,10,11]
CREDIT = {2027: (1488, 0), 2028: (1317, 7500), 2029: (945, 7500), 2030: (574, 7500), 2031: (202, 7500)}
COST = 10000; AFA_Y = 6

def run(s=1.0, mode="new", discount=0.03, scale_ads=True, afa_monthly=True, max_m=5, fixed_years=None):
    """s: Faktor auf den Warenumsatz je Automat (0,6 / 1,0 / 1,4)."""
    rows = []; cash = 0.0
    # Anschaffungen: Monat der Anschaffung (1-12)
    buys = {1: (2027, 8), 2: (2027, 8), 3: (2028, 4)}
    if mode == "old":
        for k in range(4, 12): buys[k] = (2025 + k, 3)
    for t in Y:
        if mode == "new" and fixed_years:
            for k, yy in fixed_years.items():
                buys[k] = (yy, 3)
        n = sum(1 for k, (yy, mm) in buys.items() if yy <= t)
        # Warenverkauf
        w = W123[t] * s; varc = R123[t] * W123[t] * s; we = WE123 * W123[t] * s; fix = F123[t]
        for k, (yy, mm) in buys.items():
            if k < 4 or yy > t: continue
            lvl = L.get(k, LS) * P(t) * s
            f = F1 if yy == t else 1.0
            w += lvl * f
            varc += RS * lvl * f; we += WES * lvl * f
            fix += (FIX_M - FIX_TIME) + FIX_TIME * f
        if mode == "new" and discount:
            # Rabatt mindert Erlös; Wareneinsatz bleibt, umsatzabhängige Kosten sinken mit
            varc = we + (varc - we) * (1 - discount)
            w = w * (1 - discount)
        i = t - 2027
        app = APP_OLD[i] if mode == "old" else 0
        k_ads = (n / N_OLD[i]) if (mode == "new" and scale_ads) else 1.0
        wer = WER_OLD[i] * k_ads; spo = SPO_OLD[i] * k_ads
        erl = w + app + wer + spo
        kost = varc + fix + SOFT
        # Abschreibung
        afa = 0.0
        for k, (yy, mm) in buys.items():
            per = COST / AFA_Y
            if afa_monthly:
                start = yy * 12 + (mm - 1); end = start + AFA_Y * 12
                months = max(0, min(end, t * 12 + 12) - max(start, t * 12))
                afa += COST / (AFA_Y * 12) * months
            elif yy <= t < yy + AFA_Y:
                afa += per
        ebit = erl - kost - afa
        zins, tilg = CREDIT.get(t, (0, 0))
        invest = sum(COST for k, (yy, mm) in buys.items() if yy == t)
        kredit = 30000 if t == 2027 else 0
        cash += ebit + afa - zins - tilg - invest + kredit
        rows.append(dict(t=t, n=n, w=w, app=app, wer=wer, spo=spo, erl=erl, kost=kost, afa=afa, ebit=ebit,
                         zins=zins, tilg=tilg, invest=invest, cash=cash, spende=w / 0.95 * 0.05))
        # Kaufregel: Kasse am Jahresende >= Anschaffung -> Kauf im März des Folgejahres
        if mode == "new" and not fixed_years:
            nk = max(buys) + 1
            committed = sum(COST for k, (yy, mm) in buys.items() if yy > t)  # schon verplant (Automat 3)
            if nk <= max_m and cash - committed >= COST and t < 2036:
                buys[nk] = (t + 1, 3)
    return rows, buys

if __name__ == "__main__":
    rows, _ = run(mode="old", afa_monthly=False)
    OLD_E = [-475,5380,7711,11718,19223,25423,35053,44583,57189,70881]
    OLD_K = [5441,13343,16072,20351,25130,30119,35326,40763,46439,52364]
    OLD_P = [-2453,-140,1252,3643,9285,13518,21072,28412,38709,49967]
    OLD_O = [1503,10900,14170,19793,29160,37328,49034,60755,75670,91794]
    rp, _ = run(0.6, mode="old", afa_monthly=False); ro, _ = run(1.4, mode="old", afa_monthly=False)
    print("Jahr  EBIT alt  rekonstr.  Δ   | Kosten alt rekonstr. | pess Δ | opt Δ")
    for i, r in enumerate(rows):
        print(r["t"], OLD_E[i], round(r["ebit"]), round(r["ebit"] - OLD_E[i]), "|", OLD_K[i], round(r["kost"]), "|",
              round(rp[i]["ebit"] - OLD_P[i]), round(ro[i]["ebit"] - OLD_O[i]))
    print("Summe EBIT rekonstr.", round(sum(r["ebit"] for r in rows)), "alt 276686")
