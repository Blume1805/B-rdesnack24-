# Betrieb & Wartung — Bördesnack24

## Umgebungen

- **dev** — lokaler Supabase-Stack + Flutter (`env/dev.json`).
- **prod** — Supabase EU-Projekt; Builds via Release-Pipeline.

## Secrets (Supabase Function Secrets, niemals im Client)

```
SUPABASE_SERVICE_ROLE_KEY   # serverseitige Schreibzugriffe (Edge Functions)
SEVDESK_API_TOKEN           # Finanzdashboard-Sync
NAYAX_WEBHOOK_SECRET        # Signaturprüfung in nayax-webhook
FCM_SERVICE_ACCOUNT         # Push (Firebase HTTP v1, vollständiges JSON)
```

**Achtung, zwei getrennte Geheimnisse für Telemetrie:** `nayax-webhook` prüft gegen
das Function Secret `NAYAX_WEBHOOK_SECRET`. `iot-webhook` prüft dagegen gegen
`public.telemetry_providers.hmac_secret` — also gegen einen Wert **in der
Datenbank**, einen je Provider. Beide Wege sind getrennt zu pflegen und getrennt
zu rotieren.

GitHub Actions (Release) Secrets:
`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEY_PROPERTIES`,
Apple-Signing (Zertifikat/Provisioning via Fastlane match o. Ä.).

## Deploy-Reihenfolge

1. `supabase db push` (Stand 2026-09-16: Migrationen 0001–0064) und `supabase db reset`
   lokal verifizieren, anschließend `supabase test db`.
2. Edge Functions ausrollen. Es sind **21** Stück; sie werden nicht einzeln von Hand
   aufgezählt, sondern über den Workflow `deploy-functions.yaml` ausgerollt
   (Tag `functions-deploy-*`), der die Liste selbst ermittelt. Manuell:
   `supabase functions deploy <name> --project-ref <ref>`.
3. `supabase secrets set ...` (s. o.).
4. Flutter-Release über `Release`-Workflow (Tag `vX.Y.Z`).

## Wiederkehrende Aufgaben

- **Backups:** Supabase-PITR/Backups aktiv; regelmäßig Restore testen.
- **Advisors:** `get_advisors` (Security/Performance) nach jeder Migration prüfen.
- **sevDesk-Abgleich:** Kennzahlen periodisch gegen sevDesk gegenprüfen (UWG/GoBD).
- **Token-Hygiene:** verwaiste `device_tokens` (FCM-Fehler) entfernen.
- **Audit-Review:** `audit_log` stichprobenartig kontrollieren.
- **RLS-Abdeckung:** nach jeder Migration prüfen, ob neue Tabellen in `public`
  ohne `enable row level security` angelegt wurden — der Befund vom 2026-09-16
  entstand genau so:

  ```sql
  select c.relname
    from pg_class c join pg_namespace n on n.oid = c.relnamespace
   where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity;
  ```
- **Secret-Rotation:** Provider-Geheimnisse turnusmäßig wechseln, siehe Runbook
  weiter unten.

## Runbook A: Sicherheitsregeln für die Telemetrie-Tabellen einspielen

*Geschrieben für den Betrieb, nicht für Entwickler. Dauer etwa 10 Minuten.*

**Warum das gemacht werden muss.**
In der Datenbank gibt es sechs Tabellen mit Betriebsdaten der Automaten —
welches Produkt in welchem Fach liegt, welches Gerät wo hängt, wie warm es im
Automaten ist. Diese Tabellen hatten keine Zugriffsregel. Das heißt: Jeder, der
ein Konto in der App hat, konnte sie auslesen — auch ein Kunde. In einer der
Tabellen steht zusätzlich ein Passwort, mit dem der Automatenanbieter seine
Meldungen an uns unterschreibt. Wer dieses Passwort kennt, könnte uns erfundene
Verkäufe schicken.

**Was passiert, wenn es nicht gemacht wird.**
Sobald die ersten Kunden ein Konto anlegen, sind diese Daten für sie offen. Das
ist kein Datenschutzvorfall im engeren Sinne, weil keine Kundendaten betroffen
sind — es sind Betriebsdaten. Aber das Passwort gehört niemandem außer uns.

**Was die Änderung bewirkt — und was nicht.**
Danach dürfen die sechs Tabellen nur noch von Konten gelesen werden, die das
Recht „Inventur ansehen" haben, also ihr beide. Das Passwort ist für gar kein
Konto mehr lesbar. Der Kundenbereich der App ist davon **nicht** betroffen — er
greift auf diese Tabellen nie zu. Der Telemetrie-Bereich in der Verwaltung
funktioniert unverändert weiter; das wurde vorab getestet.

**Schritt für Schritt**

1. Öffne `https://supabase.com` und melde dich an.
2. Wähle das Projekt **boerdesnack24** aus der Liste.
3. Klicke in der linken Leiste auf **SQL Editor** (Symbol mit Datenbank und
   Bleistift), dann oben auf **New query**.
4. Öffne im Projektordner die Datei
   `supabase/migrations/0064_iot_telemetry_rls.sql`, markiere den **gesamten**
   Inhalt und kopiere ihn.
5. Füge ihn in das leere Feld im SQL Editor ein.
6. Klicke unten rechts auf **Run** (oder Strg + Enter).

**So sieht Erfolg aus.**
Unten erscheint eine grüne Meldung, meist „Success. No rows returned". Einzelne
graue Hinweise mit dem Wort `NOTICE` sind normal — sie bedeuten nur, dass eine
Regel noch nicht existierte und deshalb nicht gelöscht werden musste.

Zur Gegenprobe: neue Abfrage öffnen, folgenden Text einfügen und ausführen.

```sql
select c.relname as tabelle, c.relrowsecurity as geschuetzt
  from pg_class c join pg_namespace n on n.oid = c.relnamespace
 where n.nspname = 'public'
   and c.relname in ('telemetry_providers','machine_devices','machine_slots',
                     'machine_slots_history','machine_telemetry_events','machine_health');
```

Es müssen sechs Zeilen erscheinen, in der Spalte `geschuetzt` überall **true**.

**Wenn etwas schiefgeht.**
Erscheint eine rote Fehlermeldung, ändere nichts weiter und schicke den
Fehlertext. Die Datei darf gefahrlos mehrfach ausgeführt werden — ein zweiter
Durchlauf richtet keinen Schaden an. Es eilt nicht auf die Stunde, sollte aber
vor dem ersten echten Kundenkonto erledigt sein.

## Runbook B: Passwort des Telemetrie-Anbieters wechseln

*Dauer etwa 20 Minuten, plus Abstimmung mit Automatenland. Erst durchführen,
wenn Runbook A erledigt ist.*

**Warum.**
Das Passwort aus Runbook A war eine Zeit lang für jedes Konto lesbar. Ein
Passwort, das offen lag, wird ersetzt — auch wenn nichts passiert ist.

**Das Wichtigste vorweg.**
Dieses Passwort kennen **zwei** Seiten: wir und der Automatenanbieter. Beide
müssen gleichzeitig denselben neuen Wert verwenden. Änderst du es nur bei uns,
werden ab diesem Moment alle Meldungen der Automaten abgewiesen — die
Bestandsdaten stehen dann still, bis die Gegenseite nachgezogen hat.

**Stand 16.09.2026:** Die Prüfung nach Schritt 1 ergab null eingetragene
Anbieter. Es gab also nie ein Geheimnis in dieser Tabelle, und eine Rotation war
nicht nötig. Das Runbook bleibt für den künftigen Bedarf bestehen — und für den
Fall, der als Nächstes eintritt: die **erstmalige Anlage** eines Anbieters,
siehe Runbook C.

**Schritt 1 — Prüfen, ob es überhaupt nötig ist.**
Im SQL Editor ausführen:

```sql
select id, name, is_active, created_at from public.telemetry_providers;
select role, count(*) from public.profiles group by role;
```

Ist die erste Liste leer oder enthält nur einen Testeintrag, und gibt es in der
zweiten Liste keine Zeile `customer`, dann hat nie jemand das Passwort lesen
können. Dann reicht es, vor dem Produktivstart einmal ein sauberes Passwort zu
setzen — Schritt 2 bis 5, ohne Eile.

**Schritt 2 — Neues Passwort erzeugen.**
Nutze einen Passwortgenerator mit mindestens 40 Zeichen, oder frage mich danach.
Notiere es vorübergehend in eurem Passwortmanager, nicht in einer E-Mail.

**Schritt 3 — Mit Automatenland abstimmen.**
Termin vereinbaren, zu dem beide Seiten umstellen. Das Passwort über einen
sicheren Weg übergeben, nicht im E-Mail-Text. Lege den Termin auf eine Zeit mit
wenig Automatenverkauf.

**Schritt 4 — Bei uns setzen.**
Im SQL Editor, wobei du die beiden Platzhalter ersetzt:

```sql
update public.telemetry_providers
   set hmac_secret = 'NEUES-PASSWORT-HIER', updated_at = now()
 where name = 'NAME-DES-ANBIETERS';
```

Erwartete Meldung: `Success. 1 row affected` — steht dort `0 rows`, stimmt der
Name nicht; dann Schritt 1 wiederholen und den Namen genau übernehmen.

**Schritt 5 — Nachweis.**
Automatenland um eine Testmeldung bitten, danach im SQL Editor:

```sql
select event_uid, status, received_at
  from public.machine_telemetry_events
 order by received_at desc limit 5;
```

Erwartet: ein neuer Eintrag mit dem heutigen Datum und dem Status `received`.

**Wenn etwas schiefgeht.**
Kommen keine neuen Einträge, ist das alte Passwort noch bei der Gegenseite
hinterlegt. Setze den alten Wert mit demselben Befehl aus Schritt 4 zurück und
vereinbare einen neuen Termin. Halte den alten Wert deshalb bis zum
erfolgreichen Nachweis bereit.

**Zum Schluss.**
Datum, Anbieter und Anlass in der Verfahrensdokumentation festhalten. Die
Passwörter selbst gehören **nicht** in dieses Protokoll.

## Runbook C: Ersten Telemetrie-Anbieter anlegen

*Fällt an, wenn Automatenland den Datenzugang bereitstellt. Dauer etwa 10 Minuten.*

**Warum das über den SQL-Editor läuft.**
Seit der Absicherung vom 16.09.2026 darf kein Konto der App diese Tabelle
beschreiben — auch eures nicht. Das ist Absicht: Dort steht das Passwort, mit
dem die Automatenmeldungen unterschrieben werden, und es soll nirgends über die
App erreichbar sein. Das Anlegen erfolgt deshalb einmalig von Hand.

**Was du brauchst.** Den Namen, unter dem ihr den Anbieter führen wollt, und das
Passwort, das ihr mit Automatenland vereinbart habt. Erzeuge es mit einem
Passwortgenerator, mindestens 40 Zeichen, und hinterlege es in eurem
Passwortmanager.

**Schritt für Schritt**

1. Supabase öffnen, Projekt **boerdesnack24**, links **SQL Editor**, oben **+**,
   dann **Create a new snippet**.
2. Folgenden Text einfügen und die beiden Platzhalter ersetzen. Bei `adapter`
   trägst du ein, welches System liefert — `clevermetrics`, `nayax`, `generic`
   oder `custom`:

   ```sql
   insert into public.telemetry_providers (name, adapter, hmac_secret)
   values ('NAME-DES-ANBIETERS', 'clevermetrics', 'PASSWORT-HIER');
   ```
3. **Run** klicken.

**So sieht Erfolg aus.** `Success. 1 row affected`. Zur Kontrolle eine neue
Abfrage mit `select id, name, adapter, is_active from public.telemetry_providers;`
— der Anbieter erscheint, das Passwort ist bewusst nicht abfragbar.

**Danach.** Die angezeigte `id` an Automatenland übergeben, falls sie für die
Einrichtung des Datenversands gebraucht wird. Anlass, Datum und Anbieter in der
Verfahrensdokumentation festhalten — das Passwort selbst nicht.

## Runbook D: Die drei fehlenden Datenbank-Objekte nachziehen

**Zeitbedarf:** etwa 20 Minuten. Kein Eingriff in Live-Daten — es wird nur
gelesen und anschließend eine Datei ins Repository gelegt.

### Warum das gemacht werden soll

Die Datenbank wird aus einer Reihe nummerierter Dateien aufgebaut
(„Migrationen", `supabase/migrations/`). Der Gedanke dahinter: Ginge die
Datenbank verloren, ließe sie sich aus diesen Dateien neu erzeugen.

Am 16.09.2026 hat sich beim Ausprobieren gezeigt, dass das **nicht**
funktionierte. Vier Stellen brachen ab. Drei davon sind repariert. Die vierte
Ursache lässt sich nicht im Repository reparieren: **Drei Objekte existieren
nur in der Live-Datenbank.** Jemand hat sie seinerzeit direkt im
Supabase-Dashboard angelegt, statt eine Migrationsdatei dafür zu schreiben.
Mehrere Dateien vermerken das sogar selbst mit dem Satz „Vollständige
Definition siehe Backend-Migration".

Es geht um:

| Objekt | Wofür es gebraucht wird |
|---|---|
| Tabelle `public.partner_signatures` | Unterschriften der Gesellschafter — genutzt von vier Edge Functions (DocuSign-Abruf, Signatur-Nachbearbeitung, Finanz-PDF, Protokoll-PDF) |
| Funktion `app.snapshot_slot_history()` | Historie der Automatenfächer |
| Funktion `app.snapshot_slot_insert()` | dito |

**Was passiert, wenn es nicht gemacht wird:** Im Alltag nichts — die
Live-Datenbank hat diese Objekte ja. Gefährlich wird es genau einmal, nämlich
dann, wenn die Datenbank neu aufgebaut werden muss: nach einem Ausfall, beim
Anlegen einer Testumgebung, oder wenn jemand das Projekt übernimmt. Dann fehlen
die Unterschriften-Funktionen, und zwar ohne Fehlermeldung an der richtigen
Stelle. Es ist die Art von Problem, die man erst bemerkt, wenn man sie am
wenigsten gebrauchen kann.

### Was dabei passiert

Du lässt dir von Supabase anzeigen, wie diese drei Objekte aufgebaut sind, und
schickst mir das Ergebnis. Ich mache daraus eine ordentliche Migrationsdatei.
**Es wird nichts geändert, nichts gelöscht und nichts angelegt** — die Abfragen
lesen ausschließlich.

### Schritt für Schritt

1. Öffne <https://supabase.com/dashboard> und melde dich an.
2. Wähle links oben das Bördesnack24-Projekt aus.
3. Klicke in der linken Leiste auf **SQL Editor** (Symbol mit dem Datenbank-
   Blatt), dann oben auf **New query**.
4. Füge den folgenden Text vollständig in das große Eingabefeld ein:

   ```sql
   -- 1) Aufbau der Tabelle partner_signatures
   select column_name, data_type, is_nullable, column_default
   from information_schema.columns
   where table_schema = 'public' and table_name = 'partner_signatures'
   order by ordinal_position;
   ```

5. Klicke rechts unten auf **Run** (oder drücke Strg+Enter).
6. Unter dem Eingabefeld erscheint eine Tabelle. Klicke auf **Download CSV**
   oder markiere den Inhalt und kopiere ihn.
7. Lösche den Text im Eingabefeld und füge stattdessen diesen ein:

   ```sql
   -- 2) Vollständiger Quelltext der beiden Funktionen
   select pg_get_functiondef(p.oid) as definition
   from pg_proc p
   join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'app'
     and p.proname in ('snapshot_slot_history', 'snapshot_slot_insert');
   ```

8. Wieder auf **Run** klicken. Es sollten **zwei** Zeilen erscheinen. Klicke in
   jede Zelle und kopiere den kompletten Inhalt — das ist jeweils ein längerer
   Text, der mit `CREATE OR REPLACE FUNCTION` beginnt.
9. Schicke mir beide Ergebnisse (die Spaltenliste aus Schritt 6 und die zwei
   Funktionstexte aus Schritt 8).

### So sieht Erfolg aus

Schritt 5 liefert eine Liste von etwa acht bis zwölf Zeilen mit Spaltennamen
wie `id`, `full_name`, `image_url`, `sort_order`. Schritt 8 liefert genau zwei
Zeilen, die mit `CREATE OR REPLACE FUNCTION app.snapshot_slot_` beginnen.

### Wenn etwas schiefgeht

* **„relation does not exist" bei Schritt 5** — dann heißt die Tabelle anders
  oder liegt in einem anderen Schema. Schick mir die Fehlermeldung.
* **Schritt 8 liefert keine Zeilen** — dann existieren die Funktionen auch
  live nicht mehr. Das wäre eine gute Nachricht: Dann können die beiden
  Verweise in `0045` ersatzlos entfallen. Schick mir auch das.
* **Du hast versehentlich etwas geändert** — kann hier nicht passieren, beide
  Abfragen lesen nur. Es gibt nichts rückgängig zu machen.

**Eilt es?** Nein, nicht für den laufenden Betrieb. Aber es sollte vor dem
Go-Live erledigt sein, weil danach der Druck im Ernstfall größer ist.

## Runbook E: Prüfen, ob jemand ein Abo abgeschlossen hat

**Zeitbedarf:** etwa 5 Minuten. Es wird nur gelesen, nichts geändert.

### Warum das gemacht werden soll

Seit dem 16.09.2026 ist die App kostenlos. In den neuen AGB steht der Satz, dass
über die App keine Zahlungen vereinnahmt wurden — und dass wir erstatten, falls
doch. Dieser Satz ist bisher **nicht überprüft**. Er stützt sich darauf, dass
die Bezahlanbindung an Apple und Google nie eingebaut wurde und die Auswahl
eines Abos in der App nur eine Vormerkung war.

Wahrscheinlich stimmt das. Aber eine Zusage in AGB, die niemand nachgesehen
hat, ist eine Behauptung. Fünf Minuten lösen das auf.

**Was passiert, wenn es nicht gemacht wird:** Vermutlich nichts. Im schlechten
Fall hat jemand ein Abo vorgemerkt, bekommt weder Erstattung noch Nachricht,
und wir haben in den AGB etwas zugesagt, das wir nicht eingehalten haben.

### Was passiert dabei

Du lässt dir anzeigen, wie viele Zeilen in der Abo-Tabelle stehen. Eine Zeile
entsteht, sobald jemand in der App ein Modell ausgewählt hat — unabhängig
davon, ob jemals Geld geflossen ist (es ist keines geflossen, weil nie eine
Bezahlanbindung bestand).

### Schritt für Schritt

1. Öffne <https://supabase.com/dashboard> und melde dich an.
2. Wähle links oben das Bördesnack24-Projekt.
3. Klicke links auf **SQL Editor**, dann oben auf **New query**.
4. Füge diesen Text vollständig ein:

   ```sql
   select plan,
          count(*)                as anzahl,
          min(chosen_at)          as erste_wahl,
          max(chosen_at)          as letzte_wahl
   from public.customer_subscriptions
   group by plan
   order by anzahl desc;
   ```

5. Klicke rechts unten auf **Run** (oder Strg+Enter).

### So sieht Erfolg aus

* **„Success. No rows returned"** oder eine leere Ergebnistabelle → niemand hat
  je ein Abo gewählt. Die Zusage in den AGB stimmt, es ist nichts zu tun. Sag
  mir kurz Bescheid, dann hake ich den Punkt in `docs/COMPLIANCE.md` ab.
* **Eine oder mehrere Zeilen** → es gibt Vormerkungen. Dann brauche ich die
  Ausgabe, und wir gehen die betroffenen Konten durch: Jede Person wird
  angeschrieben, und falls wider Erwarten doch abgebucht wurde, wird erstattet.
  Das ist kein Drama, aber es muss aktiv passieren, nicht stillschweigend.

### Wenn etwas schiefgeht

* **„relation ... does not exist"** — dann heißt die Tabelle anders als
  angenommen. Schick mir die Fehlermeldung; der Name stand in meinen Unterlagen
  schon einmal falsch (`app.subscriptions` statt
  `public.customer_subscriptions`), das kann erneut passiert sein.
* **Du hast versehentlich etwas verändert** — ausgeschlossen: `select` liest
  nur. Es gibt nichts rückgängig zu machen.

**Eilt es?** Vor der ersten Veröffentlichung der App, nicht vorher.

## Monitoring

- **Sentry** (Fehler/Crashes), **PostHog** (Nutzung, consent-gated).
- Edge-Function-Logs via `supabase functions logs <name>`.

## Verifikation vor Go-Live

Siehe `docs/DEPLOYMENT.md` (Go-Live-Checkliste) und die Verifikationsabschnitte in
`docs/FINANCE.md`, `docs/MANAGEMENT.md`, `docs/CUSTOMER.md`.
