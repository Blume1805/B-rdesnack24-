"""Schneidet den Automaten aus dem Markenbild (apps/mobile/assets/images/brand_hero_wide.webp) aus.

Im Markenbild liegt die gelbe „24" der Wortmarke vor der Scheibe des Automaten. Sie wird
entfernt, indem die zwei Regalreihen darüber an ihre Stelle kopiert werden (weich
überblendet). Ergebnis: media/automat.png (RGBA, 1,5-fach vergrößert und nachgeschärft).
Aufruf: python3 renders/prepare-automat.py
"""
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter

here = Path(__file__).resolve().parent.parent
src = Image.open(here / "media" / "brand_hero_wide.webp").convert("RGB")
crop = src.crop((840, 160, 1440, 920))  # 600 x 760, Automat mit Boden

# 1. „24" entfernen (liegt bei x 67..230, y 263..373). Obere Hälfte aus zwei Regalreihen
#    darüber, untere Hälfte aus zwei Reihen darunter übernehmen (Reihenabstand 56,5 px), damit
#    die Quelle die „24" selbst nicht enthält. Weich überblendet.
def patch_from(box, dy):
    patch = crop.crop((box[0], box[1] + dy, box[2], box[3] + dy))
    m = Image.new("L", patch.size, 0)
    ImageDraw.Draw(m).rectangle((3, 3, patch.size[0] - 4, patch.size[1] - 4), fill=255)
    crop.paste(patch, box[:2], m.filter(ImageFilter.GaussianBlur(2.5)))
patch_from((48, 244, 248, 332), -113)
patch_from((48, 318, 248, 400), +113)

# 2. Freistellen: Umriss des Automaten, leicht weich, mit Bodenspiegelung
W, H = crop.size
mask = Image.new("L", (W, H), 0)
d = ImageDraw.Draw(mask)
d.polygon([(43, 96), (401, 44), (557, 113), (556, 676), (412, 722), (53, 696)], fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(2.2))
halo = Image.new("L", (W, H), 0)
ImageDraw.Draw(halo).polygon([(40, 90), (401, 36), (566, 107), (565, 684), (412, 730), (49, 702)], fill=150)
halo = halo.filter(ImageFilter.GaussianBlur(9))
floor = Image.new("L", (W, H), 0)
fd = ImageDraw.Draw(floor)
for y in range(690, H):
    a = int(170 * (1 - (y - 690) / (H - 690)) ** 1.6)
    fd.line([(30, y), (W - 20, y)], fill=a)
floor = floor.filter(ImageFilter.GaussianBlur(14))


alpha = ImageChops.lighter(ImageChops.lighter(mask, halo), floor)

out = crop.convert("RGBA")
out.putalpha(alpha)
out = out.resize((W * 3 // 2, H * 3 // 2), Image.LANCZOS)
rgb = out.convert("RGB").filter(ImageFilter.UnsharpMask(radius=1.6, percent=70, threshold=2))
rgb.putalpha(out.getchannel("A"))
rgb.save(here / "media" / "automat.png", optimize=True)
print("media/automat.png", rgb.size)
