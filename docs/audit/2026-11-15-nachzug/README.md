# Nachzug: Repository und Produktion auf einen Stand gebracht (15.11.2026)

Auftrag Philipp, 15.11.2026: „die wenigen harmlosen Abweichungen auch
gleichziehen" (Befunde N-1 bis N-3 aus `docs/audit/2026-11-15-ausrollplan/`).

| Datei | Inhalt |
|---|---|
| `20261115100000_nachzug_produktionsstand.sql` | Migration der Produktionslinie, in der Produktion als `nachzug_produktionsstand` verzeichnet. Legt nur an, was fehlt; ändert in der Produktion genau eine Regel (Abschnitt 3b) |
| `probe_upload.sql` | lokaler Nachweis zur Upload-Regel |
| `fingerabdruck.sql` | Vergleich Nachbau gegen Produktion, sortiert unabhängig von der Spracheinstellung der Datenbank |

Auf dem Produktionszweig ist die Datei noch nicht eingecheckt (Push dorthin
braucht eine eigene Freigabe), ebenso wie die Sperre vom selben Tag.

## Was gleichgezogen wurde

| Nr. | Abweichung | Wie gleichgezogen | Änderung an der Produktion |
|---|---|---|---|
| N-1 | Zwei Funktionen in der Produktion weiter als im Repository | Fassung der Produktion ins Repository übernommen, Prüfsumme des Rumpfs identisch | keine |
| N-2 | 8 Zeilenschutz-Regeln nur in der Produktion | ins Repository übernommen, Prüfsummen von Bedingung und Prüfklausel identisch | keine |
| N-3 | Speicherbereich `employee-signatures` mit 2 Regeln nur in der Produktion | ins Repository übernommen (privat, 2 MB, PNG/JPEG) | **eine:** `es_upload` verlangt jetzt zusätzlich `public.is_internal()` und gilt für `authenticated` statt `public` |

Die Upload-Regel wurde nicht unverändert übernommen, weil sie jedes
angemeldete Konto hochladen ließ, auch Kundenkonten. Der Bereich wird nur von
internen Konten benutzt (Unterschriftsaufgaben, `my_signature_tasks_screen`).
Eine bekannte Schwäche ins Repository zu schreiben, um Gleichstand zu
erreichen, wäre der falsche Weg gewesen.

**Bewusst nicht angefasst:** Bei 8 Funktionen fehlen in der Produktion die
Kommentare im Rumpf. Die Logik ist zeichengleich. Dafür Funktionen in der
Produktion neu anzulegen, brächte ein Risiko ohne Nutzen. Der Fingerabdruck
vergleicht deshalb ohne Kommentare und Leerraum.

## Nachweis

**Lokal** (Nachbau auf dem Stand der Produktion, Tabellenrechte auf
`storage.objects` wie in Supabase gesetzt):

| Probe | vorher | nachher |
|---|---|---|
| Kundenkonto lädt in den eigenen Unterordner | gelingt | `ERR:42501` |
| Kundenkonto lädt in fremden Unterordner | `ERR:42501` | `ERR:42501` |
| internes Konto lädt in den eigenen Unterordner | gelingt | gelingt |
| ohne Anmeldung | `ERR:42501` | `ERR:42501` |

Zweiter Lauf der Migration ohne Fehler; auf dem vollen Stand (nach den 14
offenen Migrationen) ebenfalls.

**Produktion gegen Nachbau** nach dem Einspielen, alle fünf Werte identisch:

| Merkmal | Anzahl | Prüfsumme |
|---|---|---|
| Zeilenschutz-Regeln (public, app, storage) mit Bedingungen | 217 | `13d0295b…` |
| Funktionen ohne Kommentare, mit Aufrufrechten | 247 | `7f36f6c3…` |
| Spalten | 1272 | `71289170…` |
| Auslöser | 93 | `796b51c1…` |
| Speicherbereiche | 6 | gleiche Liste |

Die Regeln stimmen trotz verschiedener PostgreSQL-Versionen (16 lokal, 17.6 in
der Produktion) überein.

## Rückweg für die eine Änderung

```sql
drop policy es_upload on storage.objects;
create policy es_upload on storage.objects for insert to public
  with check (bucket_id = 'employee-signatures'
              and split_part(name, '/', 1) = (auth.uid())::text);
```

## Beobachtung für Phase 2

Die App lädt Unterschriften mit „überschreiben erlaubt" hoch (`upsert: true`).
Dafür gibt es im Bereich keine Regel zum Ändern. Ein zweiter Versuch für
dieselbe Aufgabe dürfte deshalb scheitern. Nicht geprüft, nur aus dem Code
gelesen.
