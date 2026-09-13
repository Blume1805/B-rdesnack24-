-- Eigene Migration, weil ein mit ALTER TYPE ADD VALUE angelegter Wert in
-- derselben Transaktion nicht verwendet werden darf.
--
-- creative_kind bekommt kundenkarte_logo. Die vorhandenen Werte coupon_logo
-- und profil_logo passen nicht: coupon_logo sitzt auf einem Gutschein,
-- profil_logo im Unternehmensprofil. Die Kundenkarte ist eine dritte Flaeche
-- mit eigenen Regeln, vor allem einer eigenen Groesse und einem eigenen
-- Alternativtext. Ein gemeinsamer Wert wuerde bedeuten, dass ein fuer den
-- Gutschein freigegebenes Logo ohne weitere Pruefung auf der Kundenkarte
-- erscheint. Freigaben sollen flaechenbezogen bleiben.

alter type app.creative_kind add value if not exists 'kundenkarte_logo';
