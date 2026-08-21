Nächster Auftrag: **nur der Demozugang. Kein Slider, keine Bewegung, kein Lottie.**

Heute bleibt im Demozugang die halbe App leer — der Hinweis in `src/routes/app.tsx` sagt es selbst: „Persönliche Bereiche wie Abo und Bons bleiben leer." Genau die kann der Auftraggeber deshalb nicht beurteilen. Das ist der Zweck dieses Auftrags.

**Bau `src/lib/demo/fixtures.ts`** als vollständigen, festen Beispieldatensatz und lass jede Datenquelle im Demomodus daraus lesen statt aus Supabase. Abgedeckt sein müssen mindestens:

- Kundenkarte mit QR-Code, Name, Kundennummer
- Bonusübersicht mit einem Punktestand **zwischen zwei Meilensteinen** — nicht bei 0 und nicht am Maximum, dazwischen sieht man am meisten
- Wochenübersicht „Täglich einloggen" mit vier von sieben Tagen, darunter **ein verpasster und zwei noch offene**, damit alle drei Zustände sichtbar sind
- Gutscheine, Bonushistorie, Belege, Abo (aktiv), Spendenbereich, Freunde werben

## Drei Regeln ohne Spielraum

**a) Im Demomodus wird nichts geschrieben.** `record_daily_login()` und jeder andere schreibende RPC bleibt aus.

Dabei bitte die Bedingung in `daily-login-gate.tsx` reparieren: `if (!user || (demo && !user)) return;` — der zweite Teil ist wirkungslos, weil der erste bei fehlendem `user` schon abbricht. Richtig ist „Session vorhanden **und** kein Demo-Flag". Sonst bucht ein angemeldeter Nutzer mit gesetztem Demo-Flag tatsächlich in die Datenbank.

**b) Beispieldaten sehen nie wie echte aus.** Der bestehende Hinweisstreifen bleibt auf jeder Seite sichtbar, und die Werte bekommen erkennbare Namen — keine echt wirkende Kundennummer, kein echt wirkender Kontostand. Wer einen Screenshot aus dem Demozugang sieht, muss erkennen können, dass es einer ist.

**c) Kein Demo-Zustand für Angemeldete.** Wer eine Session hat, sieht seine echten Daten — auch wenn das Flag im Speicher steht.

## Der Umschalter

Dezent, unten im Profil, **nur im Demomodus vorhanden**. Damit lassen sich Zustände durchspielen, ohne dass jemand Daten anlegt:

- mit Abo / ohne Abo
- Woche vollständig / lückenhaft
- mit Gutscheinen / leer

Das ist kein Spielzeug, sondern der eigentliche Zweck: Der Auftraggeber soll die Varianten sehen und beurteilen können, bevor sie echte Nutzer erreichen.

---

Zum Schluss: sag mir, welche Datenquellen du auf die Fixtures umgestellt hast und ob eine übrig geblieben ist, die im Demomodus weiterhin leer bleibt. Wenn ja, welche und warum.
