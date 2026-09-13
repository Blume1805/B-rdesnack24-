-- Startbestand des Werbekatalogs.
--
-- Die Leistungen stehen drin, die Preise nicht. Jeder Eintrag steht auf
-- 'individuell', also „Preis auf Anfrage". Das ist kein Platzhalter, den man
-- vergessen könnte, sondern der ehrliche Zustand: die Preise sind eine
-- unternehmerische Entscheidung des Betreibers und wurden nicht getroffen.
-- Eine erfundene Zahl im Preisaushang wäre eine irreführende Angabe nach
-- § 5 UWG, und ein „ab 199 €" ohne Kalkulation dahinter erst recht.
--
-- Sobald ein Preis feststeht, wird er über advertising_product_set gesetzt;
-- die Check-Constraint der Tabelle sorgt dafür, dass Preis und Preisart
-- zusammenpassen.

insert into public.advertising_products
  (schluessel, name, kategorie, kurzbeschreibung, beschreibung, leistungen,
   zielgruppe, preis, preis_art, sortierung)
values
  -- Analoge Werbung
  ('automat_werbeflaeche', 'Automaten-Werbefläche', 'werbung_analog',
   'Ihre Marke direkt am Point of Sale.',
   'Eine definierte Fläche auf oder am Automaten trägt Ihr Motiv. Front, '
   'Seite oder Teilfläche — je nach Automat und Standort.',
   array['sichtbare Platzierung am Automaten', 'fester Standort',
         'definierte Laufzeit', 'Montage durch uns'],
   'Regionale Unternehmen, Handwerk, Handel', null, 'individuell', 10),

  ('automat_komplettbranding', 'Komplettbranding', 'werbung_analog',
   'Der ganze Automat in Ihrem Erscheinungsbild.',
   'Der Automat wird vollständig nach Ihren Gestaltungsvorgaben beklebt. '
   'Die stärkste analoge Form der Sichtbarkeit.',
   array['Vollflächige Gestaltung', 'Abstimmung des Motivs',
         'Produktion und Montage', 'definierte Laufzeit'],
   'Marken mit eigenem Erscheinungsbild', null, 'individuell', 20),

  ('standortbranding', 'Namensrecht und Standortbranding', 'werbung_analog',
   'Ihr Name am Standort.',
   'Der Standort wird unter Ihrer Beteiligung geführt, zum Beispiel als '
   '„Bördesnack24 [Standort] – präsentiert von [Ihr Unternehmen]".',
   array['Namensnennung am Standort', 'Nennung in der App',
         'längerfristige Bindung'],
   'Unternehmen mit regionaler Verwurzelung', null, 'individuell', 30),

  ('standortpartnerschaft', 'Standortpartnerschaft', 'werbung_analog',
   'Als Partner eines konkreten Standorts sichtbar.',
   'Ihr Unternehmen wird als Partner eines bestimmten Bördesnack24-Standorts '
   'geführt — am Automaten und in der App.',
   array['Partnernennung am Standort', 'Eintrag in der App'],
   'Anlieger, Vermieter, ortsansässige Betriebe', null, 'individuell', 40),

  -- Digitale Werbung
  ('app_platzierung', 'Platzierung in der App', 'werbung_digital',
   'Sichtbarkeit dort, wo unsere Kundschaft ohnehin hinsieht.',
   'Ihre Anzeige erscheint als gekennzeichnete Karte im Kundenbereich der '
   'Bördesnack24-App.',
   array['gekennzeichnete Platzierung', 'Verweis auf Ihre Zielseite',
         'Auswertung der Kontakte und Klicks'],
   'Unternehmen mit digitalem Angebot', null, 'individuell', 50),

  ('unternehmensprofil', 'Unternehmensprofil', 'werbung_digital',
   'Eine eigene Seite in der App.',
   'Ihr Unternehmen bekommt ein Profil mit Logo, Beschreibung und Verweis.',
   array['Profilseite', 'Logo und Text', 'Verweis auf Ihre Seite'],
   'Arbeitgeber, Dienstleister', null, 'individuell', 60),

  ('qr_kampagne', 'QR-Code-Kampagne', 'werbung_digital',
   'Vom Automaten direkt auf Ihre Seite.',
   'Ein QR-Code am Automaten oder in der App führt auf ein Ziel Ihrer Wahl — '
   'Website, Karriereseite, Gutschein oder Veranstaltung.',
   array['QR-Code mit Ihrem Ziel', 'Auswertung der Aufrufe'],
   'Unternehmen mit Kampagnenziel', null, 'individuell', 70),

  ('display_werbung', 'Display-Werbung', 'werbung_digital',
   'Bewegtbild am Automaten, wo technisch vorhanden.',
   'An Automaten mit Bildschirm kann Ihr Motiv zeitgesteuert ausgespielt '
   'werden. WICHTIG: nicht jeder Standort hat einen Bildschirm — welche das '
   'sind, klären wir vor dem Angebot.',
   array['Bild oder Video', 'zeitgesteuerte Ausspielung',
         'Auswertung der Ausspielungen'],
   'Marken mit vorhandenem Bewegtbild', null, 'individuell', 80),

  -- Coupon und Social Media
  ('coupon_kampagne', 'Coupon-Kampagne', 'coupon',
   'Ihr Angebot als Gutschein in der App.',
   'Ihr Coupon wird in der App ausgespielt und kann eingelöst werden. '
   'Ausgabe, Aktivierung und Einlösung werden gezählt.',
   array['Coupon in der App', 'Auswertung von Ausgabe und Einlösung'],
   'Handel und Gastronomie', null, 'individuell', 90),

  ('social_media', 'Social Media', 'social_media',
   'Vorstellung auf unseren Kanälen.',
   'Beitrag, Story oder Reel auf den Bördesnack24-Kanälen. Als Werbung '
   'gekennzeichnet, wie es das UWG verlangt.',
   array['Beitrag, Story oder Reel', 'Abstimmung des Inhalts',
         'Werbekennzeichnung'],
   'Unternehmen mit Neuigkeiten', null, 'individuell', 100),

  -- Sponsoring und Partnerschaft
  ('sponsoring_standort', 'Sponsoring eines Standorts', 'sponsoring',
   'Einen Standort unterstützen und dabei sichtbar sein.',
   'Sie unterstützen einen konkreten Standort — Verein, Freibad, Einrichtung '
   '— und werden dort als Sponsor genannt. Anders als Werbung geht es hier '
   'zuerst um die Unterstützung, die Sichtbarkeit kommt dazu.',
   array['Nennung als Sponsor am Standort', 'Nennung in der App',
         'Abstimmung der Verwendung'],
   'Unternehmen mit regionalem Engagement', null, 'individuell', 110),

  ('partnerschaft', 'Partnerschaft', 'partnerschaft',
   'Längerfristig zusammenarbeiten.',
   'Eine über einzelne Kampagnen hinausgehende Zusammenarbeit. Inhalt und '
   'Umfang werden im Gespräch festgelegt.',
   array['individuelle Vereinbarung'],
   'Unternehmen mit strategischem Interesse', null, 'individuell', 120)
on conflict (schluessel) do nothing;
