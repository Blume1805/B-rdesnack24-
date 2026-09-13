-- R-19 aus dem Audit vom 31.08.2026.
--
-- app.coupon_anlass_zu_offer_source() war die einzige Funktion im Projekt
-- ohne fest gesetztes search_path (Supabase-Advisor: function_search_path_
-- mutable). Ohne die Festlegung entscheidet der search_path des Aufrufers,
-- welche Tabelle oder welcher Typ gemeint ist -- bei einer SECURITY-DEFINER-
-- Kette ist das der Ansatzpunkt, um untergeschobene Objekte ausfuehren zu
-- lassen. Alle uebrigen Funktionen wurden in Task #58 bereits gehaertet;
-- diese eine ist durchgerutscht.
--
-- Reines Nachziehen der Haertung, keine Verhaltensaenderung.

alter function app.coupon_anlass_zu_offer_source(app.coupon_anlass)
  set search_path = public, app;
