update public.email_templates
   set precondition =
     'Hängt am Bezahlweg (siehe docs/BEZAHLWEG.md). Bei eigenem Zahlungsanbieter wird diese Mail gebraucht und liegt bei uns. Bei Abwicklung über App Store / Play Store verschicken Apple und Google den Beleg selbst — dann entfällt sie. Achtung: Apple 3.1.3(e) untersagt In-App-Kauf für Leistungen, die ausserhalb der App verbraucht werden; der Rabatt am Automaten ist so eine.'
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
     'Setzt ein Testphasen-Modell in den Abodaten voraus, das es nicht gibt — und zusätzlich einen Bezahlweg (siehe docs/BEZAHLWEG.md). Bei App Store / Play Store übernehmen Apple und Google die Vorwarnung vor dem Übergang ins bezahlte Abo.'
 where key in ('abo_test_beginnt', 'abo_test_endet_bald', 'abo_test_beendet');
