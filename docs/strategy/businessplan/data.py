import json, sys
sys.path.insert(0, '.')
from model import run, Y
out = {}
for key, s in [("plan", 1.0), ("pess", 0.6), ("opt", 1.4)]:
    rows, buys = run(s)
    out[key] = dict(rows=[{k: (round(v) if isinstance(v, float) else v) for k, v in r.items()} for r in rows],
                    buys={str(k): v for k, v in buys.items()})
# Wie viele Automaten bräuchte die 50.000-€-Schwelle 2036 (Planungsszenario, Käufe ab 2030 je einer)?
need = None
for m in range(5, 16):
    fy = {k: min(2036, 2029 + (k - 3)) for k in range(4, m + 1)}
    rows, _ = run(1.0, max_m=m, fixed_years=fy)
    if rows[-1]["ebit"] >= 50000 and need is None:
        need = (m, round(rows[-1]["ebit"]))
out["schwelle50"] = need
json.dump(out, open("data.json", "w"), ensure_ascii=False, indent=1)
for k in ("plan", "pess", "opt"):
    R = out[k]["rows"]
    print(k, "Käufe", {a: b for a, b in out[k]["buys"].items() if int(a) > 3},
          "Erlös", sum(r["erl"] for r in R), "W", sum(r["w"] for r in R), "Wer", sum(r["wer"] for r in R), "Spo", sum(r["spo"] for r in R),
          "EBIT", sum(r["ebit"] for r in R), "JÜ", sum(r["ebit"] - r["zins"] for r in R), "minKasse", min(r["cash"] for r in R))
print("Schwelle 50k:", need)
