import json, sys
sys.path.insert(0, "/root/.claude/skills/synced/8679d439-3b7c-44a2-84d8-50f499b43fd0_0ef6de42-5319-4234-9f65-9ef4d034777c/boerdesnack24-pdf/scripts")
from pdf_builder import _erzeuge_diagramm
import shutil

with open("businessplan_zahlen.json") as f:
    daten = json.load(f)

x = [r["jahr"] for r in daten]
y = [r["summe_erloese"] for r in daten]
png = _erzeuge_diagramm(x, y, x_label="Jahr", y_label="Erlöse in EUR",
                         titel="Umsatzentwicklung, Planungsszenario", art="balken")
shutil.copy(png, "umsatz_balken.png")
print("gespeichert: umsatz_balken.png")
