# Zielbild 4,5 — Dateien vom 16.11.2026

Gehört zu `docs/audit/AUDIT-2026-11-ZIELBILD-4-5.md`.

| Datei | Was |
|---|---|
| `produktionslinie-c8afce4.patch` | Zwei-Faktor-Pflicht (Schalter aus) und Prüfung vor jeder Anfrage |
| `produktionslinie-ba7995c.patch` | Betriebsprüfung, Probe 114 |
| `produktionslinie-00448c5.patch` | Kleinbefunde A2-12, A2-14, Probe 115 |
| `produktionslinie-cdb28ef.patch` | `weather-sync` mit Einmalmarke, Probe 116 |
| `2026111*.sql` | die Migrationen im Wortlaut |
| `11*.sql` | die Proben |
| `weather_sync_handler_probe.ts` | Verhaltensprobe der Funktion mit Ersatz-Client |
| `pruefsummen.txt` | md5 der Migrationen; vor dem Einspielen vergleichen |
| `fingerabdruck_soll.txt` | Sollwert für die Produktion nach dem Einspielen |

Die Patches gehören auf den Zweig `claude/bordesnack24-audit-architecture-7xd3d6`
(Produktionslinie). Dorthin hochladen braucht Philipps ausdrückliche Erlaubnis.

Nachweis am 16.11.2026: frischer Nachbau aus 247 Migrationen (PostgreSQL 16),
33 Prüfskripte, kein falsches Urteil. Deno-Tests der Server-Funktionen 16/16
(lokal, Deno 2.1.4, Prüfhilfe statt Download, weil `deno.land` hier gesperrt ist).
