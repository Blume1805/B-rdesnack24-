-- ===========================================================================
-- Popcorn: Verkaufspreis 4,00 EUR brutto (Entscheidung Philipp, 10.09.2026).
--
-- Die duenne Marge ist bekannt und bewusst in Kauf genommen. Begruendung:
-- seltenes, auffaelliges Produkt, das den Automaten von einem
-- Standardsortiment unterscheidet, und Traeger fuer Kombiangebote.
--
-- Was daraus rechnerisch folgt (EK netto 2,7944 aus 2,99 brutto):
--
--   Listenpreis 4,00      netto 3,7383   Wareneinsatz 74,8 %   Rohertrag 0,94
--   mit Abo -5 %          netto 3,5514   Wareneinsatz 78,7 %   Rohertrag 0,76
--   Abo + Gold -10 %      netto 3,3645   Wareneinsatz 83,1 %   Rohertrag 0,57
--   Abo + Gold + Deal     netto 3,0280   Wareneinsatz 92,3 %   Rohertrag 0,23
--
-- Nach Abzug der Spende (5 % vom Nettopreis) bleiben in der letzten Zeile
-- 8 Cent. Das traegt noch, wenn auch knapp.
--
-- ES TRAEGT NICHT MEHR, SOBALD EIN MEILENSTEIN-COUPON DARAUF FAELLT:
--   Coupon 25 % auf Listenpreis   netto 2,8037   Wareneinsatz  99,7 %
--   Coupon 25 % auf Abo-Preis     netto 2,6636   Wareneinsatz 104,9 %
-- Im zweiten Fall liegt der Verkauf unter dem Einkauf, und die Spende faellt
-- trotzdem an: minus 26 Cent je Packung. Ob Coupons und Deals auf dieses
-- Produkt gelten duerfen, ist deshalb zu entscheiden -- der Preis allein
-- entscheidet es nicht. Steht in `docs/betrieb/AUFGABEN-PHILIPP.md`.
--
-- Der Wert wird als 4,00 / 1,07 berechnet und nicht als Zahl geschrieben,
-- damit die Herleitung sichtbar bleibt. Gleiches Muster wie beim
-- Einkaufspreis in der Migration davor.
-- ===========================================================================

update public.products
   set list_price_net = round(4.00 / 1.07, 4),
       updated_at = now()
 where sku in ('BS-063', 'BS-064', 'BS-065', 'BS-066');
