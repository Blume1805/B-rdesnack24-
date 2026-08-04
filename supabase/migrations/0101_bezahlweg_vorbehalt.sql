-- ============================================================================
-- 0101 · Die offenen Voraussetzungen der Zahlungs-Mails genauer benennen
-- ----------------------------------------------------------------------------
-- 0100 hat neun Vorlagen mit „Kein Zahlungsanbieter angebunden" gesperrt.
-- Das stimmt weiterhin, ist aber zu knapp: Aus dem Satz lässt sich der
-- falsche Schluss ziehen, es genüge, irgendeinen Anbieter anzubinden — oder
-- umgekehrt, bei Kauf über App Store und Play Store entfielen die Mails
-- ersatzlos.
--
-- Beim Nachprüfen (04.08.2026) kam heraus, dass die zweite Annahme
-- vermutlich gar nicht trägt. Apples Prüfrichtlinie 3.1.3(e) verlangt für
-- **körperliche Waren und Leistungen, die ausserhalb der App verbraucht
-- werden**, ausdrücklich einen anderen Weg als den In-App-Kauf. Der Kern
-- unseres Abos ist der Status-Rabatt am Automaten — also Snacks, die
-- draussen gegessen werden. Google zieht dieselbe Grenze.
--
-- Damit ist wahrscheinlicher, dass diese Mails gebraucht werden, als dass
-- sie entfallen. Gelöscht wird deshalb nichts; nur der Text wird ehrlich.
--
-- Die ganze Abwägung steht in `docs/BEZAHLWEG.md`.
-- ============================================================================

update public.email_templates
   set precondition =
     'Hängt am Bezahlweg (siehe docs/BEZAHLWEG.md). Bei eigenem '
     'Zahlungsanbieter wird diese Mail gebraucht und liegt bei uns. Bei '
     'Abwicklung über App Store / Play Store verschicken Apple und Google '
     'den Beleg selbst — dann entfällt sie. Achtung: Apple 3.1.3(e) '
     'untersagt In-App-Kauf für Leistungen, die ausserhalb der App '
     'verbraucht werden; der Rabatt am Automaten ist so eine.'
 where key in (
   'abo_rechnung',
   'abo_zahlung_erfolgreich',
   'abo_zahlung_fehlgeschlagen',
   'abo_zahlungsmittel_laeuft_ab',
   'abo_zahlungsmittel_geaendert',
   'abo_verlaengert'
 );

update public.email_templates
   set precondition =
     'Setzt ein Testphasen-Modell in den Abodaten voraus, das es nicht '
     'gibt — und zusätzlich einen Bezahlweg (siehe docs/BEZAHLWEG.md). '
     'Bei App Store / Play Store übernehmen Apple und Google die '
     'Vorwarnung vor dem Übergang ins bezahlte Abo.'
 where key in ('abo_test_beginnt', 'abo_test_endet_bald', 'abo_test_beendet');
