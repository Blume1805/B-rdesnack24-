import json, sys
sys.path.insert(0, "/root/.claude/skills/synced/8679d439-3b7c-44a2-84d8-50f499b43fd0_0ef6de42-5319-4234-9f65-9ef4d034777c/boerdesnack24-pdf/scripts")
from pdf_builder import _erzeuge_diagramm
import shutil

with open("businessplan_zahlen.json") as f:
    daten = json.load(f)

x = [r["jahr"] for r in daten]
y = [r["ebit"] for r in daten]
png = _erzeuge_diagramm(x, y, x_label="Jahr", y_label="EBIT in EUR",
                         titel="Betriebsergebnis, Planungsszenario", art="balken")
shutil.copy(png, "ebit_balken.png")
print("gespeichert: ebit_balken.png")
