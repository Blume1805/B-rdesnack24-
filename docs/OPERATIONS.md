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

**Vorbereitung.** Du brauchst nur einen Browser und dein Supabase-Passwort.
Alles Folgende **liest nur** — es wird nichts geändert, nichts gelöscht und
nichts angelegt. Es gibt deshalb auch nichts rückgängig zu machen.

1. Öffne <https://supabase.com/dashboard> und melde dich an.
2. Klicke oben links auf das Bördesnack24-Projekt (falls mehrere zur Auswahl
   stehen — das Testprojekt aus Runbook I gibt es noch nicht).
3. Klicke in der schmalen Leiste ganz links auf **SQL Editor**. Das Symbol
   sieht aus wie ein Blatt Papier mit einer Datenbank-Tonne.
4. Klicke oben auf **+ New query**. Es öffnet sich ein großes leeres Feld.
5. Markiere den gesamten folgenden Block, kopiere ihn und füge ihn in das
   leere Feld ein. Er sieht länger aus, als er ist — es ist eine einzige
   Abfrage, die alles auf einmal holt:

   ```sql
   select 'TABELLE public.partner_signatures — Spalten' as objekt,
          string_agg(column_name || '  |  ' || data_type || '  |  nullable=' || is_nullable ||
                     '  |  default=' || coalesce(column_default, '-'), E'\n' order by ordinal_position) as definition
     from information_schema.columns
    where table_schema = 'public' and table_name = 'partner_signatures'
   union all
   select 'TABELLE public.partner_signatures — Constraints',
          string_agg(conname || '  ::  ' || pg_get_constraintdef(c.oid), E'\n')
     from pg_constraint c
     join pg_class t on t.oid = c.conrelid
     join pg_namespace n on n.oid = t.relnamespace
    where n.nspname = 'public' and t.relname = 'partner_signatures'
   union all
   select 'TABELLE public.partner_signatures — Indizes',
          string_agg(indexdef, E'\n')
     from pg_indexes where schemaname = 'public' and tablename = 'partner_signatures'
   union all
   select 'TABELLE public.partner_signatures — RLS-Policies',
          coalesce(string_agg(policyname || '  ::  ' || cmd || '  ::  using(' || coalesce(qual, '-') ||
                   ')  ::  check(' || coalesce(with_check, '-') || ')', E'\n'), '(keine)')
     from pg_policies where schemaname = 'public' and tablename = 'partner_signatures'
   union all
   select 'FUNKTION app.' || p.proname, pg_get_functiondef(p.oid)
     from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'app' and p.proname in ('snapshot_slot_history', 'snapshot_slot_insert');
   ```

6. Klicke rechts unten auf **Run** (oder drücke Strg+Enter).
7. Unter dem Feld erscheint eine Tabelle mit sechs Zeilen und zwei Spalten.
   Klicke auf **Download CSV** — das ist der zuverlässigste Weg, weil die
   Funktionstexte lang sind und beim Markieren leicht abgeschnitten werden.
   Schicke mir die heruntergeladene Datei.

**Noch offen aus Runbook E — kostet dich dabei 30 Sekunden.** Wenn du schon im
SQL Editor bist: Lösche den Text im Feld, füge stattdessen diese eine Zeile ein
und klicke wieder auf **Run**:

   ```sql
   select count(*) as vormerkungen from public.customer_subscriptions;
   ```

   Steht dort `0`, ist der Punkt endgültig geschlossen. Steht dort eine Zahl
   größer als null, schick sie mir — dann sind die betroffenen Personen über
   das Ende des Abo-Modells zu unterrichten. Geld ist in keinem Fall geflossen;
   das ist bereits durch den Code belegt (`docs/COMPLIANCE.md`, V-007).

### So sieht Erfolg aus

Die Ergebnistabelle hat **sechs Zeilen**:

| Zeile | Was darin stehen sollte |
|---|---|
| Spalten | acht bis zwölf Zeilen mit Namen wie `id`, `full_name`, `image_url`, `sort_order` |
| Constraints | mindestens ein `PRIMARY KEY` |
| Indizes | mindestens eine Zeile, beginnend mit `CREATE UNIQUE INDEX` |
| RLS-Policies | eine oder mehrere Regeln — oder `(keine)` |
| `app.snapshot_slot_history` | ein längerer Text, beginnend mit `CREATE OR REPLACE FUNCTION` |
| `app.snapshot_slot_insert` | dasselbe |

Erscheinen nur **vier** Zeilen, fehlen die beiden Funktionen — siehe unten.

### Wenn etwas schiefgeht

* **Die ersten vier Zeilen sind leer** — dann heißt die Tabelle anders oder
  liegt in einem anderen Schema. Schick mir die Ausgabe, wie sie ist.
* **Es kommen nur vier Zeilen statt sechs** — dann existieren die beiden
  Funktionen auch live nicht mehr. Das wäre eine gute Nachricht: Dann können
  die beiden Verweise in `0045` ersatzlos entfallen. Schick mir auch das.
* **Eine Fehlermeldung in roter Schrift** — kopiere sie vollständig und schick
  sie mir. Kaputtgehen kann nichts; die Abfrage liest ausschließlich.
* **Du hast versehentlich etwas geändert** — kann hier nicht passieren, beide
  Abfragen lesen nur. Es gibt nichts rückgängig zu machen.

**Eilt es?** Nein, nicht für den laufenden Betrieb. Aber es sollte vor dem
Go-Live erledigt sein, weil danach der Druck im Ernstfall größer ist.

## Runbook D, Teil 2: Zwei Restfragen klären (30 Sekunden)

**Stand 17.09.2026:** Teil 1 ist erledigt — die drei Objekte sind exportiert und
liegen als `0068_partner_signatures_and_slot_snapshots.sql` im Repository. Zwei
Dinge hat der Export nicht mit abgedeckt.

### Warum das gemacht werden soll

**Frage 1 — sind die Unterschriften wirklich geschützt?** Auf der Tabelle
`partner_signatures` liegt eine Leseregel, die den Zugriff auf interne Rollen
beschränkt. So eine Regel wirkt aber nur, wenn der Zugriffsschutz auf der
Tabelle überhaupt eingeschaltet ist. Ist er es nicht, ist die Regel bloß
Dekoration und **jedes angemeldete Konto** könnte die Unterschriften lesen.
Aus dem Export geht nicht hervor, welcher Fall vorliegt.

**Frage 2 — wird die Fachhistorie überhaupt geschrieben?** Die beiden
exportierten Funktionen halten fest, welches Produkt wann in welchem
Automatenfach lag. Sie laufen nicht von selbst, sondern müssen an die Tabelle
`machine_slots` angehängt sein („Trigger"). Ob diese Verbindung ebenfalls nur
im Live-System existiert, ist offen. Fehlt sie nach einem Neuaufbau, bleibt die
Historie still leer — und das fällt erst auf, wenn man sie braucht.

### Schritt für Schritt

1. <https://supabase.com/dashboard> öffnen, Bördesnack24-Projekt wählen.
2. **SQL Editor → + New query**.
3. Diesen Text einfügen und auf **Run** klicken:

   ```sql
   select 'Zugriffsschutz auf partner_signatures' as frage,
          case when relrowsecurity then 'AN' else 'AUS' end as antwort
     from pg_class where oid = 'public.partner_signatures'::regclass
   union all
   select 'Trigger auf machine_slots', coalesce(string_agg(tgname || '  ::  ' ||
          pg_get_triggerdef(t.oid), E'\n'), '(keine)')
     from pg_trigger t
     join pg_class c on c.oid = t.tgrelid
    where c.relname = 'machine_slots' and not t.tgisinternal;
   ```

4. **Download CSV** und mir schicken — oder einfach abtippen, es sind zwei
   Zeilen.

### So sieht Erfolg aus

Zwei Zeilen. Die erste sollte **AN** sagen. Die zweite sollte mindestens einen
Eintrag enthalten, der `snapshot_slot` im Namen trägt.

### Wenn etwas schiefgeht

* **Erste Zeile sagt AUS** — dann sind die Unterschriften derzeit für jedes
  angemeldete Konto lesbar. Das ist zu beheben, und zwar zügig. Sag mir
  Bescheid, ich bereite die Anweisung vor; sie ist eine Zeile und ändert an den
  Daten nichts.
* **Zweite Zeile sagt `(keine)`** — dann wird die Fachhistorie auch live nicht
  geschrieben. Dann brauchen wir die Trigger neu, nicht bloß abgeschrieben.
* Beide Abfragen **lesen nur**. Es kann nichts kaputtgehen.

**Eilt es?** Frage 1 ja, sobald echte Unterschriften in der Tabelle liegen.
Frage 2 nein, aber vor dem ersten Automaten.

---

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

## Runbook F: Eigene Adresse für die App einrichten (vor dem Aufkleber-Druck)

**Zeitbedarf:** 15 Minuten Arbeit, danach bis zu 24 Stunden Wartezeit, bis die
Adresse überall bekannt ist. Kein Eingriff in die App selbst.

### Warum das gemacht werden soll

Die App ist heute unter dieser Adresse erreichbar:

```
https://blume1805.github.io/B-rdesnack24-/
```

Diese Adresse taugt nicht für einen Aufkleber am Automaten. Drei Gründe:

1. **Sie wirkt nicht wie Bördesnack24.** Ein Kunde, der am Automaten steht,
   sieht einen fremden Namen und eine kryptische Zeichenfolge. Das kostet
   Vertrauen genau in dem Moment, in dem er sich entscheidet.
2. **Sie hängt an einem privaten Konto.** Der Teil `blume1805` ist ein
   persönlicher GitHub-Benutzername. Ändert er sich, ist die Adresse weg.
3. **Ein Aufkleber lässt sich nicht ändern.** Klebt er einmal an zwanzig
   Automaten und die Adresse zieht um, ist jeder einzelne tot. Deshalb muss die
   Adresse **vor** dem ersten Druck endgültig sein.

Empfehlung: `app.boerdesnack24.de`. Die Domain besitzt ihr bereits, es kommt
nur eine Unteradresse dazu. Die Hauptseite `www.boerdesnack24.de` bleibt
unberührt.

**Was passiert, wenn es nicht gemacht wird:** Der Aufkleber müsste die lange
GitHub-Adresse tragen, oder es gibt keinen Aufkleber. Beides bremst genau den
Weg, der Kunden bringt.

### Was dabei passiert

Ihr sagt eurem Domain-Anbieter, dass `app.boerdesnack24.de` auf GitHub zeigen
soll, und sagt GitHub, dass es diese Adresse annehmen soll. Danach ist die App
unter beiden Adressen erreichbar, die alte funktioniert weiter.

**Wichtig:** Zwischen den beiden Schritten kann die Seite kurz nicht erreichbar
sein. Legt das nicht auf einen Tag, an dem ihr Werbung schaltet.

### Schritt für Schritt

**Teil 1: beim Domain-Anbieter (Hostinger)**

1. Melde dich bei <https://hpanel.hostinger.com> an.
2. Wähle oben **Domains** und dann `boerdesnack24.de`.
3. Klicke auf **DNS / Nameserver** und dort auf **DNS-Einträge verwalten**.
4. Klicke auf **Eintrag hinzufügen** und trage genau das ein:
   * Typ: **CNAME**
   * Name: **app**
   * Ziel (auch „Points to" oder „Wert"): **blume1805.github.io**
     (mit einem Punkt am Ende, falls das Feld einen verlangt)
   * TTL: den Standardwert stehen lassen
5. Auf **Hinzufügen** bzw. **Speichern** klicken.

**Teil 2: bei GitHub**

6. Öffne <https://github.com/Blume1805/B-rdesnack24-/settings/pages>.
7. Unter **Custom domain** `app.boerdesnack24.de` eintragen und auf **Save**
   klicken.
8. Warte, bis unter dem Feld ein grüner Haken erscheint (kann bis zu einer
   Stunde dauern). Setze dann das Häkchen bei **Enforce HTTPS**. Ist es noch
   ausgegraut, warte und komm später zurück.

**Teil 3: sagt mir Bescheid**

9. Wenn beides steht, gib mir Bescheid. Ich stelle das Veröffentlichungsskript
   um (`CUSTOM_DOMAIN=app.boerdesnack24.de`) und veröffentliche neu. Das ist
   nötig, weil die App sonst unter der neuen Adresse eine weiße Seite zeigt.
   Erst danach drucke ich den Aufkleber ohne Wasserzeichen.

### So sieht Erfolg aus

* `https://app.boerdesnack24.de` öffnet die App, mit Schloss-Symbol in der
  Adresszeile.
* Die alte GitHub-Adresse funktioniert weiterhin.

### Wenn etwas schiefgeht

* **„Domain does not resolve to the GitHub Pages server"** bei Schritt 7 —
  der DNS-Eintrag ist noch nicht überall bekannt. Das ist normal. Warte eine
  Stunde und klicke erneut auf Save.
* **Weiße Seite unter der neuen Adresse** — genau dafür ist Schritt 9 da. Die
  App muss einmal neu veröffentlicht werden. Das ist kein Schaden, nur ein
  fehlender Schritt.
* **Die alte Adresse geht nicht mehr** — sollte nicht passieren. Falls doch:
  Bei GitHub unter Schritt 7 das Feld leeren und Save klicken, dann ist der
  alte Zustand wiederhergestellt.

**Eilt es?** Nur, wenn der Aufkleber gedruckt werden soll. Ohne ihn läuft alles
weiter wie bisher.

## Die Adressen von Bördesnack24 (Zielbild)

**Eine Domain, mehrere Häuser.** `boerdesnack24.de` ist entgeltlich erworben und
trägt alles; es wird keine zweite Domain gebraucht. Die Unteradressen
(„Subdomains") kosten nichts und sind voneinander unabhängig — jede kann bei
einem anderen Anbieter liegen.

| Adresse | Inhalt | Anbieter | Stand 17.09.2026 |
|---|---|---|---|
| `boerdesnack24.de` | Landingpage | Hostinger | ✅ eingerichtet (A-Eintrag → `2.57.91.91`) |
| `www.boerdesnack24.de` | dasselbe | Hostinger | ✅ eingerichtet (CNAME → `boerdesnack24.de`) |
| `app.boerdesnack24.de` | Kunden-App (PWA) | GitHub Pages | ✅ eingerichtet (CNAME → `blume1805.github.io`). Der Eintrag war am 17.09.2026 von 18:13 bis 18:28 Uhr ohne Antwort; nach Löschen und Neuanlegen antwortet er seit 18:37 Uhr stabil — sechs Abfragen über eine Minute, alle beantwortet, alle auf GitHub-Pages-Adressen (185.199.108–111.153 bzw. 2606:50c0:8001::153). |
| `send.boerdesnack24.de` | E-Mail-Versand | Resend / Amazon SES | ✅ eingerichtet (SPF, DKIM, MX) |
| `verwaltung.boerdesnack24.de` | Gesellschafter-App (PWA) | offen | ⚠️ **am 17.09.2026 bereits angelegt, obwohl es die Anwendung noch nicht gibt.** Der Name zeigt auf GitHub Pages, wo ihn kein Projekt beansprucht. Siehe Hinweis unten — bis zum Bau der internen PWA besser wieder entfernen. |

### Warum `verwaltung.` noch nicht angelegt wird

Zwei Gründe, beide sachlich:

1. **Die Anwendung gibt es noch nicht.** ADR 0006 hat entschieden, dass der
   interne Bereich eine eigene PWA wird; gebaut ist sie nicht. Ein Eintrag,
   der auf nichts zeigt, ist kein halber Fortschritt, sondern eine Fehlerquelle.
2. **GitHub Pages bedient je Projekt nur *eine* eigene Adresse** (die Datei
   `CNAME` im ausgelieferten Zweig trägt genau einen Namen). Ein zweiter Eintrag
   auf dasselbe Projekt würde nicht bedient. Die interne PWA braucht also ein
   eigenes Zuhause — eigenes GitHub-Projekt, Hostinger oder ein anderer
   Anbieter. Das wird mit ihr zusammen entschieden.

Sobald sie steht, ist es eine Zeile: Typ `CNAME`, Name `verwaltung`, Ziel = die
Adresse des neuen Zuhauses.

**Der voraussichtlich einfachste Weg** ist ein zweites, eigenes GitHub-Projekt
für die interne PWA. GitHub Pages entscheidet anhand der `CNAME`-Datei im
jeweiligen Projekt, welche Adresse es bedient — zwei Projekte können deshalb
zwei verschiedene Adressen tragen, die beide auf denselben Zielnamen zeigen.
Der DNS-Eintrag sähe dann genauso aus wie der für die Kunden-App:

| Feld | Wert |
|---|---|
| Typ | `CNAME` |
| Name | `verwaltung` |
| Zeigt auf | `blume1805.github.io` |
| TTL | 300 |

Entschieden wird das zusammen mit dem Bau der internen PWA, nicht vorher.

### Nach dem Anlegen: das Zertifikat kommt später

Sobald eine Adresse zum ersten Mal auf GitHub Pages zeigt, meldet der Browser
für eine Weile **„Diese Verbindung ist nicht privat"**. Das ist kein Fehler und
kein Angriff, sondern die normale Reihenfolge:

1. Die Adresse zeigt auf GitHub (DNS) — sofort wirksam.
2. GitHub prüft das nach und beantragt einen kostenlosen Ausweis
   („Let's-Encrypt-Zertifikat") für genau diesen Namen — **10 bis 60 Minuten**.
3. Bis dahin liefert GitHub den Ausweis aus, den es für seine eigene Adresse
   hat. Der passt nicht zum Namen, und der Browser warnt zu Recht.

Beobachtet am 17.09.2026: DNS ab 18:37 Uhr stabil, Safari meldete um 18:40 Uhr
noch die Warnung.

**Nicht auf „diese Website trotzdem besuchen" tippen** — nicht wegen der Gefahr
in diesem Fall, sondern weil es die Gewohnheit einübt, solche Warnungen
wegzuklicken. Genau darauf zielen echte Angriffe.

**Beschleunigen** lässt sich Schritt 2 durch eine erneute Auslieferung: Dabei
wird die Datei `CNAME` neu geschrieben, und GitHub startet die Prüfung neu.

**Kontrollieren** lässt es sich unter *Repository → Settings → Pages*:
Steht dort unter *Custom domain* der Name mit grünem Haken und ist das Kästchen
*Enforce HTTPS* anklickbar (statt ausgegraut), ist der Ausweis da. Eine rote
Meldung an dieser Stelle nennt die Ursache im Klartext.

### Warum ein Name, der ins Leere zeigt, nicht harmlos ist

Zeigt `verwaltung.boerdesnack24.de` auf GitHub Pages, ohne dass ein Projekt
diesen Namen beansprucht, ist das ein sogenannter **hängender Verweis**. Bei
GitHub Pages bedient das Projekt eine Adresse, sobald es sie in seiner
`CNAME`-Datei trägt und die DNS-Abfrage dorthin führt. Beides ist hier für
Fremde erfüllbar: Die DNS-Seite steht bereits, das Projekt kann jeder anlegen.
Wer schneller ist, veröffentlicht eigene Inhalte unter einer Bördesnack24-
Adresse — mit allem, was daran hängt (Vertrauen, Suchmaschinen, Cookies auf der
Domain).

Drei Wege, geordnet nach Aufwand:

1. **Eintrag löschen**, bis die interne PWA existiert. Ein Klick, keine
   Nebenwirkung. Für den jetzigen Stand die richtige Wahl.
2. **Namen selbst belegen**: ein leeres GitHub-Projekt anlegen, das
   `verwaltung.boerdesnack24.de` in seiner `CNAME`-Datei trägt. Dann kann ihn
   niemand sonst beanspruchen.
3. **Domain bei GitHub verifizieren** (*Settings → Pages → Verified domains*).
   Danach darf kein fremdes Konto mehr eine Adresse unter
   `boerdesnack24.de` bedienen. Das ist die saubere Dauerlösung und lohnt sich
   spätestens, wenn mehrere Unteradressen auf GitHub zeigen.

### Wer darf was ändern

DNS-Einträge liegen ausschließlich im Hostinger-Konto. Von der Entwicklungs-
seite aus sind sie **nicht** erreichbar — jede Änderung dort macht der
Gesellschafter selbst. Umgekehrt braucht die App-Seite nichts von Hostinger:
Der Name `app.boerdesnack24.de` steht im Auslieferungs-Workflow
(`CUSTOM_DOMAIN`) und wandert bei jedem Ausliefern als Datei `CNAME` mit.

---

## Runbook G: Automatenaufkleber drucken und anbringen

**Voraussetzungen:** Runbook F ist abgeschlossen, die Adresse ist endgültig —
**und** die Frage unten ist entschieden.

### Warum

Der Aufkleber ist einer von zwei Wegen, auf denen ein Kunde die App findet. Der
zweite ist die Landingpage. Store-Suche gibt es nicht, weil wir keine
Store-App anbieten. Der Kunde am Automaten steht bereits davor, alles was ihn
jetzt aufhält, kostet ihn.

### ⚠️ Vor der ersten Auflage zu klären: Wohin zeigt der Code?

Die App ist ohne Konto vollständig verschlossen. Wer heute den Code scannt,
sieht als Erstes ein Anmeldeformular, bevor er einen Grund hatte, sich
anzumelden (`docs/ARCHITECTURE.md`, Befund A-8). Ein paar Dutzend Aufkleber auf
diesen Zustand zu kleben, verschenkt genau die Kunden, die schon vor dem Gerät
stehen.

Vorgesehen ist dafür die öffentliche Automatenseite aus Phase 1 des
Umsetzungsplans: eine sehr leichte Seite je Automat, ohne Konto, mit Standort,
Bestand und Störungsmeldung, die von dort in die App führt. Sie ist noch nicht
gebaut.

Bis dahin gilt: **Einzelne Aufkleber zum Ausprobieren ja, Auflage nein.**

### Erzeugen

Der Aufkleber wird aus einem Skript erzeugt, nicht von Hand gestaltet, damit
Adresse und QR-Code nie auseinanderlaufen können:

```
pip install segno
python3 scripts/automatenaufkleber.py --url https://app.boerdesnack24.de
```

Ohne `--entwurf` entsteht die Druckfassung ohne Wasserzeichen. Daraus das PDF
drucken (Befehl steht im Kopf des Skripts) und vor dem Druck gegenprüfen:

```
python3 scripts/pdf_text_pruefen.py docs/marketing/automatenaufkleber.pdf \
  --erwartet "Bördesnack24" "app.boerdesnack24.de"
```

### Vor dem Druck unbedingt selbst scannen

Mit dem eigenen Handy den QR-Code vom Bildschirm scannen und prüfen, ob die
richtige Seite aufgeht. Ein falsch gedruckter Aufkleber fällt sonst erst am
Automaten auf, und dann ist die ganze Auflage Altpapier.

### Anbringen und prüfen

* Auf Augenhöhe neben das Bezahlfeld, nicht auf eine Scheibe, hinter der eine
  Leuchte sitzt: Spiegelungen machen den Code unlesbar.
* Nach dem Kleben einmal aus etwa einem Meter Entfernung scannen.

### Haltbarkeit

Gemessen am 17.09.2026 mit einem automatischen Lesegerät, das strenger ist als
eine Handy-Kamera:

| Zustand | Ergebnis |
|---|---|
| Foto aus Entfernung, sehr klein (300 px Breite) | lesbar |
| um 12 Grad schräg fotografiert | lesbar |
| bei 60 Prozent Helligkeit | lesbar |
| rund 10 Prozent der Fläche verkratzt oder überklebt | lesbar |
| rund 15 Prozent der Fläche beschädigt | **nicht mehr lesbar** |
| eines der drei Eck-Quadrate beschädigt | **nicht mehr lesbar** |

Daraus die Regel für den Automatenbesuch: **Sind eines der drei großen Quadrate
in den Ecken oder mehr als etwa ein Zehntel der Fläche beschädigt, Aufkleber
austauschen.** Ein halb lesbarer Code ist schlimmer als keiner, weil der Kunde
es einmal versucht und dann aufgibt.

## Monitoring

- **Sentry** (Fehler/Crashes), **PostHog** (Nutzung, consent-gated).
- Edge-Function-Logs via `supabase functions logs <name>`.

## Runbook H: Zwei-Faktor-Anmeldung für Pia und dich einschalten

> **Ersetzt am 16.11.2026 durch Runbook O.** Runbook H war für die frühere
> Datenbank-Linie (`main`) geschrieben und nennt zwei Personen. In der echten
> Datenbank gibt es vier interne Konten, und die App fragt den Code inzwischen
> selbst ab. Geprüft gegen den Code am 16.11.2026: Tabelle, Schlüssel und
> Schalter-Text unten stimmen mit der Produktionslinie überein; der Verweis auf
> `supabase/tests/mfa_gate_test.sql` gilt nur für `main`, in der
> Produktionslinie heißt die Probe `scripts/pruefumgebung/113_zwei_faktor_pflicht.sql`.

**Zeitbedarf:** 20 Minuten, davon 5 Minuten je Person. Beide Personen müssen
gleichzeitig verfügbar sein.

**Dringlichkeit:** vor Go-Live. Solange es keine echten Umsätze gibt, ist das
Risiko klein — aber der Schalter gehört umgelegt, bevor der erste Automat läuft.

### Warum das gemacht werden soll

Heute reicht ein Passwort, um in den Verwaltungsbereich zu kommen. Wer dein
Passwort hat — durch eine Phishing-Mail, ein altes Datenleck, einen Blick über
die Schulter —, sieht Umsätze, Einkaufspreise, Verträge und Unterschriften.

Zwei-Faktor bedeutet: Zusätzlich zum Passwort braucht man eine sechsstellige
Zahl, die eine App auf deinem Telefon alle 30 Sekunden neu erzeugt. Ohne dein
Telefon kommt niemand hinein, auch nicht mit dem richtigen Passwort.

### Was dabei passiert — und was nicht

Es passiert: Verwaltung, Finanzen und Freigaben verlangen ab dem Einschalten
eine Anmeldung mit zweitem Faktor.

Es passiert **nicht**: Kunden merken nichts. Für sie ändert sich kein einziger
Handgriff — sie melden sich weiter nur mit E-Mail und Passwort an. Das ist
geprüft und in `supabase/tests/mfa_gate_test.sql` festgehalten.

### Schritt für Schritt

**Teil 1 — die Authenticator-App einrichten (jede Person für sich, 5 Minuten)**

1. Auf dem Telefon eine Authenticator-App installieren. Empfehlung: „Google
   Authenticator" oder „Aegis" (Android) beziehungsweise die in iOS eingebaute
   Funktion unter *Einstellungen → Passwörter*. Alle drei sind kostenlos.
2. In der Bördesnack24-App anmelden wie immer.
3. Oben im Startbildschirm steht der Hinweis „Konto absichern:
   Zwei-Faktor-Authentifizierung einrichten." Auf die Schaltfläche daneben
   tippen. Ist der Hinweis nicht zu sehen, wurde er früher einmal weggetippt:
   Dann in der Adresszeile des Browsers hinter die App-Adresse `/security/mfa`
   anhängen und die Eingabetaste drücken.
4. Es erscheint ein QR-Code. In der Authenticator-App auf „+" beziehungsweise
   „Code hinzufügen" tippen und den QR-Code abfotografieren.
5. Die App zeigt nun eine sechsstellige Zahl. Diese Zahl in das Feld in der
   Bördesnack24-App eintippen und bestätigen.
6. **Wichtig:** Der Hinweis oben verschwindet erst nach dem Neuladen der Seite.
   Erst wenn er weg ist, ist der Faktor bestätigt.

**Teil 2 — beide Personen prüfen (2 Minuten)**

7. Beide melden sich einmal komplett neu an (abmelden, wieder anmelden) und
   geben dabei die sechsstellige Zahl ein. Erst wenn das bei **beiden** geklappt
   hat, weiter mit Teil 3. Wird dieser Schritt übersprungen, sperrt Teil 3 unter
   Umständen beide aus.

**Teil 3 — den Schalter umlegen (3 Minuten, nur eine Person)**

8. <https://supabase.com/dashboard> öffnen und am Projekt anmelden.
9. Links auf **SQL Editor** klicken, dann auf **New query**.
10. Diesen Text genau so einfügen:

```sql
update app.security_settings
   set enabled = true, updated_at = now()
 where key = 'require_mfa_internal';
```

11. Auf **Run** klicken (grüne Schaltfläche rechts unten).

### So sieht Erfolg aus

Unter dem Eingabefeld steht `Success. No rows returned` oder `UPDATE 1`.

Danach die Gegenprobe: In der App abmelden und nur mit Passwort anmelden
(die Authenticator-Zahl weglassen, falls das Anmeldefenster sie nicht ohnehin
verlangt). Verwaltung und Finanzen müssen leer bleiben oder eine Fehlermeldung
zeigen. Nach Eingabe der Zahl sind sie wieder da.

### Wenn etwas schiefgeht

**Fall 1 — ihr seid ausgesperrt** (das Telefon ist weg, die Authenticator-App
gelöscht, die Zahl wird nicht angenommen). Dann im SQL Editor denselben Text
noch einmal einfügen, aber mit `false` statt `true`:

```sql
update app.security_settings
   set enabled = false, updated_at = now()
 where key = 'require_mfa_internal';
```

Danach ist alles wie vorher. Der Zugang zum SQL Editor hängt **nicht** an der
App und **nicht** am zweiten Faktor der App — er ist der Rückweg. Deshalb ist
das Supabase-Passwort selbst besonders zu schützen.

**Fall 2 — der QR-Code erscheint nicht.** Dann ist die Einrichtung in der App
noch nicht freigeschaltet. In diesem Fall Teil 3 **nicht** ausführen und
Bescheid geben.

Es eilt in beiden Fällen nicht, solange kein Automat läuft.

---

## Runbook I: Zweites Supabase-Projekt als Testumgebung anlegen

**Zeitbedarf:** 30 Minuten. Danach einmalig etwa 15 Minuten je Monat für
Auffrischung.

**Dringlichkeit:** vor der ersten Änderung, die echte Umsätze berührt.

### Warum das gemacht werden soll

Es gibt heute genau eine Datenbank, und das ist die echte. Jede Änderung an
Preisen, Rabatten oder Tabellen wird unmittelbar an echten Daten wirksam. Geht
etwas schief, geht es an den echten Daten schief.

Eine Testumgebung ist eine zweite, leere Kopie derselben Struktur — ohne echte
Kunden, ohne echte Umsätze. Dort lässt sich ausprobieren, was ausprobiert
werden muss.

**Ausdrücklich nicht** dient dieses zweite Projekt dazu, Kunden-App und
Gesellschafter-App voneinander zu trennen. Beide Anwendungen arbeiten weiterhin
gegen dasselbe Produktivprojekt (ADR 0006).

### Was dabei passiert — und was nicht

Es passiert: Ein zweites, leeres Projekt entsteht. Es kostet im kostenlosen
Tarif nichts.

Es passiert **nicht**: Am Produktivprojekt ändert sich nichts. Keine Daten
werden kopiert, keine Kunden umgezogen, keine Adresse umgebogen.

### Schritt für Schritt

1. <https://supabase.com/dashboard> öffnen und anmelden.
2. Oben auf **New project** klicken.
3. Ausfüllen:
   - *Name:* `boerdesnack24-test`
   - *Database Password:* auf **Generate a password** klicken und das Ergebnis
     sofort im Passwortmanager speichern. Es wird kein zweites Mal angezeigt.
   - *Region:* `Central EU (Frankfurt)` — dieselbe wie beim Produktivprojekt.
     Grund: personenbezogene Daten bleiben in der EU (Art. 44 ff. DSGVO), auch
     wenn hier nur Testdaten liegen.
4. Auf **Create new project** klicken und etwa zwei Minuten warten.
5. Links auf **Project Settings → API** klicken. Dort stehen zwei Werte:
   *Project URL* und *anon public*. Beide kopieren. Im Projekt liegt die Vorlage
   `apps/mobile/env/staging.example.json`; daraus eine Kopie namens
   `staging.json` im selben Ordner anlegen und die beiden Werte eintragen.
   (`staging.json` selbst gehört nicht ins Repository — die Vorlage schon.)
   Wer das nicht selbst machen möchte: die beiden Werte schicken genügt.
6. **Nicht** den Wert unter *service_role* kopieren oder verschicken. Das ist
   der Generalschlüssel; er gehört ausschließlich in die Servereinstellungen.

### So sieht Erfolg aus

Im Dashboard stehen zwei Projekte untereinander: das bisherige und
`boerdesnack24-test`. Das neue zeigt unter *Table Editor* keine Tabellen —
das ist richtig so, die Struktur spiele ich anschließend ein.

### Wenn etwas schiefgeht

Ein leeres Projekt lässt sich folgenlos löschen: *Project Settings → General →
Delete project*. Solange keine Daten darin liegen, geht dabei nichts verloren.
Das Produktivprojekt bleibt davon unberührt.

Es eilt nicht — aber es sollte vor der nächsten Preis- oder Rabattänderung
stehen.

---

## Runbook J: Die zwei Zugangsdaten für die Auslieferung hinterlegen

**Zeitbedarf:** 5 Minuten. Danach läuft jede Auslieferung von selbst.

**Dringlichkeit:** Ohne diesen Schritt kommt keine neue Fassung der App ins
Netz. Der Live-Stand bleibt auf dem 04.09.2026 stehen — also auf der alten
Fassung mit dem Abo für 9,99 €.

### Warum das gemacht werden soll

Die App muss wissen, wo ihre Datenbank steht. Diese Angabe darf aus gutem Grund
nicht im Programmcode liegen (sie stünde sonst für jeden lesbar auf GitHub),
sondern wird beim Bauen von außen zugesteckt. GitHub hat dafür einen
Tresor — „Secrets". Für dieses Projekt ist er leer.

Solange er leer ist, bricht die Auslieferung ab. Das ist Absicht: Lieber ein
sichtbarer Abbruch als eine veröffentlichte App, die sich mit nichts verbinden
kann und dem Kunden nur „nicht konfiguriert" zeigt.

### Was dabei passiert — und was nicht

Es passiert: Zwei Werte werden in GitHubs Tresor gelegt. Ab dann baut GitHub
die App bei jeder Änderung selbst und stellt sie online.

Es passiert **nicht**: An der Datenbank ändert sich nichts. Die beiden Werte
sind keine Passwörter — der eine ist eine Adresse, der andere ein öffentlicher
Schlüssel, der auch heute schon in jeder ausgelieferten App steht. Wer was
sehen darf, entscheidet weiterhin die Datenbank anhand des angemeldeten Kontos.

⚠️ **Die Generalschlüssel im Supabase-Dashboard gehören hier NICHT hinein** —
weder `service_role` (alter Reiter) noch `sb_secret_…` (neuer Reiter). Sie
hebeln jeden Schutz aus und dürfen niemals in eine App gebaut werden.

### Schritt für Schritt

**Teil 1 — den Schlüssel holen (2 Minuten)**

Die Adresse musst du nicht suchen, sie steht ohnehin in jeder ausgelieferten
App und lautet:

```
https://nnfsyuglkqycwenwxmuw.supabase.co
```

Bleibt der Schlüssel. Supabase hat die Oberfläche 2025 umgestellt und zeigt
jetzt zwei Sorten an — die alte und die neue. **Gebraucht wird die alte.**

1. <https://supabase.com/dashboard> öffnen, Bördesnack24-Projekt wählen.
2. **Project Settings → API Keys**.
3. Oben stehen zwei Reiter nebeneinander:
   *Publishable and secret API keys* und *Legacy anon, service_role*.
   Auf den **rechten** tippen: **Legacy anon, service_role**.
4. Dort den Eintrag **anon** **public** kopieren. Er ist lang und beginnt mit
   `eyJ`.

**Warum die alte Sorte und nicht die neue?** Weil nachweislich sie es ist, die
funktioniert: Im ausgelieferten Stand vom 04.09.2026 steckt genau ein solcher
Schlüssel (`role: anon`, Projekt `nnfsyuglkqycwenwxmuw`, gültig bis 2036). Ob
die neue Sorte (`sb_publishable_…`) mit der eingesetzten Client-Fassung
(`supabase_flutter 2.17.2`) ebenfalls funktioniert, ist nicht geprüft — und eine
Auslieferung ins Netz ist der falsche Ort für einen Versuch. Der Wechsel auf die
neue Sorte ist ein eigener Punkt für später, kein Teil dieser Aufgabe.

⚠️ **Zwei Werte auf derselben Seite dürfen hier nicht verwendet werden:**
`service_role` (alter Reiter) und `sb_secret_…` (neuer Reiter). Beide sind
Generalschlüssel, die jeden Schutz aushebeln.

**Teil 2 — die Werte in GitHub hinterlegen (3 Minuten)**

5. <https://github.com/Blume1805/B-rdesnack24-/settings/secrets/actions>
   öffnen. (Falls GitHub nach Anmeldung fragt: dein GitHub-Konto, nicht das
   Supabase-Konto.)
6. Rechts oben auf den grünen Knopf **New repository secret**.
7. Ins Feld **Name** genau das hier eintippen — Groß- und Kleinschreibung
   zählt, keine Leerzeichen:

   ```
   SUPABASE_URL
   ```

8. Ins große Feld **Secret** die *Project URL* aus Schritt 3 einfügen.
9. Auf **Add secret** klicken.
10. Erneut auf **New repository secret**. Diesmal als **Name**:

    ```
    SUPABASE_ANON_KEY
    ```

11. Ins Feld **Secret** den langen Schlüssel aus Schritt 4 einfügen.
12. Auf **Add secret** klicken.

### So sieht Erfolg aus

Auf der Seite stehen jetzt zwei Einträge untereinander: `SUPABASE_ANON_KEY` und
`SUPABASE_URL`, jeweils mit „Updated now". Die Werte selbst zeigt GitHub nie
wieder an — das ist richtig so.

Sag mir danach Bescheid: Ich löse die Auslieferung aus und melde, ob sie
durchgelaufen ist. Rund drei Minuten später ist die neue Fassung im Netz.

### Wenn etwas schiefgeht

* **„Secrets" ist im Menü nicht zu finden** — dann bist du nicht als Eigentümer
  des Repositorys angemeldet. Prüfe rechts oben, mit welchem Konto du
  eingeloggt bist.
* **Der Name wurde vertippt** — dann greift die Auslieferung ins Leere und
  bricht mit derselben Meldung ab. Eintrag löschen (Mülleimer-Symbol) und neu
  anlegen. Kaputtgehen kann nichts.
* **Du hast versehentlich den `service_role`-Wert eingefügt** — dann sofort
  löschen und mir Bescheid geben. Der Schlüssel muss anschließend im
  Supabase-Dashboard erneuert werden. Das ist kein Drama, aber es sollte am
  selben Tag passieren.

---

## Verifikation vor Go-Live

Siehe `docs/DEPLOYMENT.md` (Go-Live-Checkliste) und die Verifikationsabschnitte in
`docs/FINANCE.md`, `docs/MANAGEMENT.md`, `docs/CUSTOMER.md`.

## Runbook K: Drei falsche Beispiel-Nachrichten in der App ausblenden

**Zeitbedarf:** 3 Minuten.

**Dringlichkeit:** zeitnah, am besten diese Woche. Solange es nicht gemacht ist,
kann jede angemeldete Person in der App eine Nachricht lesen, die behauptet, es
stehe ein neuer Automat am Bahnhof Osterweddingen.

### Warum das gemacht werden soll

Beim Aufbau der App wurden drei Beispiel-Nachrichten in die Datenbank
geschrieben, damit der Nachrichtenbereich nicht leer aussieht. Sie stehen auch in
Ihrer echten Datenbank und sind in der App unter „News" sichtbar. Alle drei
stimmen nicht:

* „Neuer Automat am Bahnhof Osterweddingen" — es ist noch kein Automat in Betrieb.
* „5 % für den guten Zweck" — sagt „ab sofort" und nennt eine vierteljährliche
  Auszahlung an einen einzigen Zweck. Beschlossen ist: einmal jährlich, zu
  gleichen Teilen an die drei Zwecke mit den meisten Stimmen.
* „Sommer-Sortiment ist da" — ein Sortiment, das es nicht gibt.

Eine falsche Aussage über den eigenen Betrieb gilt als irreführende Werbung und
ist abmahnfähig.

### Was dabei passiert — und was nicht

Die drei Nachrichten werden **ausgeblendet, nicht gelöscht.** Sie bleiben in der
Datenbank und lassen sich jederzeit wieder einblenden. Nichts anderes wird
verändert: keine Kundendaten, keine Käufe, keine anderen Nachrichten.

### Schritt für Schritt

1. Öffnen Sie `https://supabase.com/dashboard` und melden Sie sich an.
2. Klicken Sie auf Ihr Projekt (die Adresse endet auf `nnfsyuglkqycwenwxmuw`).
3. Klicken Sie links in der Leiste auf **SQL Editor** (das Symbol mit den
   eckigen Klammern).
4. Klicken Sie oben auf **New query**.
5. Kopieren Sie den folgenden Text vollständig und fügen Sie ihn in das leere
   Feld ein:

   ```sql
   update public.news_articles
      set is_published = false
    where is_published
      and (
            (title = 'Neuer Automat am Bahnhof Osterweddingen'
             and body like 'Ab sofort findet ihr am Nordausgang des Bahnhofs Osterweddingen%')
         or (title = '5 % für den guten Zweck'
             and body like 'Ihr habt uns oft gefragt, ob wir uns sozial engagieren.%')
         or (title = 'Sommer-Sortiment ist da'
             and body like 'Wir haben unser Kühlautomaten-Sortiment für den Sommer erweitert%')
          );
   ```

6. Klicken Sie unten rechts auf **Run**.

### So sieht Erfolg aus

Unten erscheint „Success" und eine Zahl betroffener Zeilen:

* **3** — alle drei Nachrichten waren sichtbar und sind jetzt ausgeblendet.
* **0** — sie waren in Ihrer Datenbank gar nicht vorhanden oder schon
  ausgeblendet. Auch das ist in Ordnung.

Zur Kontrolle können Sie danach in der App den Bereich „News" öffnen: Die drei
Beiträge sind weg.

Sagen Sie mir die Zahl, dann trage ich den Punkt als erledigt ein.

### Wenn etwas schiefgeht

Erscheint eine rote Fehlermeldung, ist nichts verändert worden — schicken Sie
mir ein Bildschirmfoto. Wollen Sie die Nachrichten wieder einblenden, geht das
mit demselben Text, in dem Sie `false` durch `true` und `where is_published`
durch `where not is_published` ersetzen.

Technischer Hintergrund: Migration `0069_demo_news_ausblenden.sql`, Test
`supabase/tests/demo_news_test.sql`, COMPLIANCE V-012.


## Runbook L: Erfundene Käufe und zwei Sicherheitslücken in der Datenbank sperren

> **✅ Erledigt am 15.11.2026.** Die Sperre ist in der echten Datenbank
> eingespielt und nachgemessen (Scheinkauf, fremde Kaufbeträge, fremde
> Spendenbeträge: alle „gesperrt"; 0 Käufe, es ist nie etwas erfunden worden).
> Du musst hier nichts mehr tun. Nachweis: `docs/audit/2026-11-15-runbook-l/`.
> Der Teil zum Bargeld (`bar_soll`) betrifft eine Funktion, die es in der
> echten Datenbank noch nicht gibt; er wird mit den übrigen Änderungen
> ausgerollt.

**Zeitbedarf:** 10 Minuten.

**Dringlichkeit:** hoch — bitte **heute oder morgen**. Solange es nicht gemacht
ist, kann jede Person mit einem App-Konto Käufe erfinden und sich damit echte
Rabatt-Coupons holen.

### Warum das gemacht werden soll

Beim Aufbau der App gab es eine Test-Schaltfläche „Demo-Testkauf". Sie legt
einen Kauf an, ohne dass etwas gekauft wurde. Diese Schaltfläche ist in der
echten App auf der Beleg-Seite sichtbar, und die Datenbank führt den Befehl
für **jedes** Konto aus — auch direkt, ohne App, mit einem beliebigen Betrag.

Das hat drei Folgen:

* **Rabatte ohne Einkauf.** Sieben Klicks reichen für einen 25-%-Coupon.
* **Kassenbons ohne Verkauf.** Zu jedem erfundenen Kauf erzeugt die App einen
  Kassenbon als PDF — mit Steuernummer und USt-IdNr. von Bördesnack24 und
  ausgewiesener Umsatzsteuer. Für Umsatzsteuer auf einem solchen Beleg kann
  Bördesnack24 haften, obwohl nichts verkauft wurde (§ 14c UStG).
* **Falsche Zahlen.** Treuepunkte, Spendenanteil und Bestand rechnen die
  erfundenen Käufe mit.

Dieselbe Änderung schließt zwei weitere Lücken, sofern es die betroffenen
Funktionen in Deiner Datenbank schon gibt: Man konnte den Betrag eines
**fremden** Einkaufs abfragen, und man konnte sehen, **wie viel Bargeld** in
einem Automaten liegt.

### Was dabei passiert — und was nicht

* Die Test-Funktion wird für Kundenkonten **gesperrt, nicht gelöscht.** Sie
  lässt sich jederzeit wieder freigeben.
* Die Bargeld-Anzeige bleibt für Dich und Pia sichtbar; nur Kundenkonten
  sehen nichts mehr.
* Es werden **keine Daten** verändert oder gelöscht: keine Käufe, keine
  Coupons, keine Konten.
* Die App funktioniert danach genauso wie vorher. Drückt jemand noch die alte
  Test-Schaltfläche, erscheint eine Fehlermeldung. Mit der nächsten
  App-Version verschwindet die Schaltfläche ganz.

### Schritt für Schritt

1. Öffne `https://supabase.com/dashboard` und melde Dich an.
2. Klicke auf Dein Projekt (die Adresse endet auf `nnfsyuglkqycwenwxmuw`).
3. Klicke links in der Leiste auf **SQL Editor** (das Symbol mit den eckigen
   Klammern).
4. Klicke oben auf **New query**.

**Schritt 1 — sperren.** Kopiere den folgenden Text vollständig und füge ihn
in das leere Feld ein. Er ist lang; wichtig ist, dass er von der ersten bis
zur letzten Zeile komplett drin ist.

   ```sql
   revoke execute on function public.dev_add_demo_purchase(text, numeric)
     from public, anon, authenticated;

   do $$
   begin
     -- B-2: Netto- und Spendenbetrag eines beliebigen Kaufs über dessen ID.
     -- Alle Verwender sind SECURITY DEFINER und rufen mit Eigentümerrechten;
     -- für Kundenkonten ist ein direkter Aufruf nie vorgesehen gewesen.
     if to_regprocedure('public.purchase_net_items(uuid, numeric)') is not null then
       revoke execute on function public.purchase_net_items(uuid, numeric)
         from public, anon, authenticated;
     end if;
     if to_regprocedure('public.purchase_donation_for(uuid, numeric)') is not null then
       revoke execute on function public.purchase_donation_for(uuid, numeric)
         from public, anon, authenticated;
     end if;

     -- B-3: Bargeld-Soll je Automat. Verrät jedem Konto, wie viel Bargeld in
     -- welchem Gerät liegt. Dieselbe Prüfung wie `kassendifferenzen`: nur wer
     -- `cash.collect` oder `finance.view` trägt, bekommt eine Zeile.
     if to_regprocedure('public.bar_soll(uuid)') is not null then
       execute $f$
         create or replace function public.bar_soll(p_machine uuid)
          returns table(seit timestamp with time zone, soll_betrag numeric, anzahl_verkaeufe bigint)
          language sql
          stable security definer
          set search_path to 'public', 'app'
         as $body$
           with letzte as (
             select coalesce(max(c.collected_at), '-infinity'::timestamptz) as zeitpunkt
               from public.cash_collection_logs c
              where c.machine_id = p_machine
           )
           select l.zeitpunkt,
                  coalesce(sum((e.nutzlast->>'betrag')::numeric), 0),
                  -- count(e.lfd_nr), nicht count(*): Ohne Treffer liefert der Left Join
                  -- trotzdem eine Zeile, und count(*) meldete dann einen Verkauf, den
                  -- es nicht gibt.
                  count(e.lfd_nr)
             from letzte l
             left join public.terminal_ereignisse e
               on e.art = 'verkauf'
              and e.zahlart = 'bar'
              and e.eingegangen_am > l.zeitpunkt
              and jsonb_typeof(e.nutzlast->'betrag') = 'number'
              -- Zuordnung über die Kennung, nicht nur über terminal_id: Ein Ereignis,
              -- dessen Gerät (noch) nicht in `terminals` steht, kommt mit
              -- terminal_id = null an. Zählte es nicht mit, fehlte sein Betrag im
              -- Soll — und der Kassensturz wiese einen Überschuss aus, den es nicht
              -- gibt. Ein zu niedriges Soll ist beim Bargeld der gefährlichere Fehler.
              and (
                    e.terminal_id in (
                      select t.id from public.terminals t where t.machine_id = p_machine
                    )
                    or (e.terminal_id is null and e.terminal_kennung in (
                      select t.terminal_kennung from public.terminals t
                       where t.machine_id = p_machine
                    ))
                  )
            -- Befund B-3 (26.09.2026): ohne diese Bedingung sah jedes Konto das
            -- Bargeld im Automaten.
            where (public.auth_has_permission('cash.collect')
                   or public.auth_has_permission('finance.view'))
            group by l.zeitpunkt;
         $body$
       $f$;
       revoke all on function public.bar_soll(uuid) from public, anon;
       grant execute on function public.bar_soll(uuid) to authenticated;
     end if;
   end $$;
   ```

5. Klicke unten rechts auf **Run**. Unten erscheint „Success. No rows
   returned". Das ist richtig so.

**Schritt 2 — kontrollieren.** Lösche den Text im Feld (Strg+A, dann
Entf) und füge diesen ein:

   ```sql
   select
     case when has_function_privilege('authenticated',
                 'public.dev_add_demo_purchase(text,numeric)', 'EXECUTE')
          then 'OFFEN' else 'gesperrt' end as scheinkauf,
     case when to_regprocedure('public.purchase_net_items(uuid,numeric)') is null
          then 'nicht vorhanden'
          when has_function_privilege('authenticated',
                 'public.purchase_net_items(uuid,numeric)', 'EXECUTE')
          then 'OFFEN' else 'gesperrt' end as fremde_kaufbetraege,
     case when to_regprocedure('public.bar_soll(uuid)') is null
          then 'nicht vorhanden'
          when (select prosrc from pg_proc
                 where oid = to_regprocedure('public.bar_soll(uuid)')) like '%cash.collect%'
          then 'geschützt' else 'OFFEN' end as bargeld_im_automaten;
   ```

6. Klicke auf **Run**. Unten erscheint eine Tabelle mit einer Zeile.

**Schritt 3 — zählen.** Lösche den Text wieder und füge diesen ein. Er ändert
nichts, er zählt nur:

   ```sql
   -- Zählt, ob und in welchem Umfang in der echten Datenbank Demo-Käufe liegen
   -- und welche Folgen sie ausgelöst haben (Befund B-1, 26.09.2026).
   -- Nutzt nur Tabellen, die vor dem 02.09.2026 angelegt wurden und damit
   -- sicher in der Produktion stehen.
   select
     (select count(*) from public.purchases where source = 'demo')
       as demo_kaeufe,
     (select count(distinct customer_id) from public.purchases where source = 'demo')
       as betroffene_konten,
     (select count(*) from public.purchases pu
        join public.profiles p on p.id = pu.customer_id
       where pu.source = 'demo' and p.role = 'customer')
       as davon_von_kundenkonten,
     (select coalesce(sum(total_gross), 0) from public.purchases where source = 'demo')
       as summe_brutto_euro,
     (select coalesce(max(total_gross), 0) from public.purchases where source = 'demo')
       as hoechster_einzelbetrag,
     (select count(*) from public.invoices i
        join public.purchases pu on pu.id = i.purchase_id
       where pu.source = 'demo')
       as rechnungen_zu_demo_kaeufen,
     (select count(*) from public.loyalty_bonus_grants g
       where exists (select 1 from public.purchases pu
                      where pu.customer_id = g.customer_id
                        and pu.source = 'demo'
                        and date_trunc('month', pu.purchased_at)::date = g.month_start))
       as treuestufen_in_monaten_mit_demo,
     (select min(purchased_at)::date from public.purchases where source = 'demo')
       as erster_demo_kauf,
     (select max(purchased_at)::date from public.purchases where source = 'demo')
       as letzter_demo_kauf;
   ```

7. Klicke auf **Run** und mache ein Bildschirmfoto der Tabelle.

### So sieht Erfolg aus

Nach Schritt 2 steht in der Tabelle:

| Spalte | richtig ist |
| --- | --- |
| `scheinkauf` | `gesperrt` |
| `fremde_kaufbetraege` | `gesperrt` oder `nicht vorhanden` |
| `bargeld_im_automaten` | `geschützt` oder `nicht vorhanden` |

Steht irgendwo `OFFEN`, hat Schritt 1 nicht gewirkt — schick mir ein
Bildschirmfoto.

Schritt 3 zeigt, ob in Deiner Datenbank schon erfundene Käufe liegen. Schick
mir das Bildschirmfoto:

* **`demo_kaeufe` = 0** — es ist nichts passiert. Der Punkt ist erledigt.
* **`demo_kaeufe` größer als 0** — dann entscheiden wir gemeinsam, was mit
  diesen Käufen passiert (ausblenden oder entfernen). Ist zusätzlich
  **`davon_von_kundenkonten` größer als 0**, frag bitte Dein Steuerbüro, ob zu
  diesen Käufen ein Kassenbon mit Umsatzsteuer entstanden sein kann und was
  zu tun ist (Stichwort „§ 14c Abs. 2 UStG, Kassenbon ohne Lieferung").

### Wenn etwas schiefgeht

Erscheint bei Schritt 1 eine rote Fehlermeldung, ist **nichts** verändert
worden — schick mir ein Bildschirmfoto. Die Schritte 2 und 3 lesen nur und
können nichts kaputt machen.

Willst Du die Sperre rückgängig machen (zum Beispiel, weil etwas in der App
nicht mehr geht), genügt diese eine Zeile im SQL Editor:

   ```sql
   grant execute on function public.dev_add_demo_purchase(text, numeric) to authenticated;
   ```

Technischer Hintergrund: Migration `0070_scheinkaeufe_sperren.sql`, Test
`supabase/tests/scheinkauf_test.sql`, Prüfbericht
`docs/audit/AUDIT-2026-09-BACKEND.md` (Befunde B-1 bis B-3), COMPLIANCE V-014.

## Runbook M: Pfand getrennt vom Preis führen

> **✅ Erledigt am 15.11.2026.** Alle Schritte dieses Runbooks sind in der
> echten Datenbank eingespielt und nachgemessen (18 Produkte mit Pfand, Cola
> 2,05 € + 0,25 €, kein Gesamtpreis verändert). Du musst hier nichts mehr tun,
> außer die Preisschilder (Schritt 9) vor dem ersten Automaten. Nachweis:
> `docs/audit/2026-11-15-ausrollplan/README.md`, Abschnitt 5.

**Zeitbedarf:** 15 Minuten in Supabase, dazu die Preisschilder am Automaten.

**Dringlichkeit:** vor dem ersten Automaten in Betrieb. **Reihenfolge
beachten:** erst muss das App-Update live sein (ich sage Dir Bescheid), dann
dieses Runbook. Andersherum zeigt die alte App kurzzeitig 2,05 € für eine Cola
ohne den Hinweis auf den Pfand.

### Warum das gemacht werden soll

In unserer Preisliste steckt bei 18 Getränken (Flaschen und Dosen) der Pfand
von 0,25 € im Preis. Das Gesetz verlangt, den Pfand **neben** dem Preis zu
nennen, nicht darin (§ 7 Preisangabenverordnung). Dazu kamen zwei Folgefehler:

* **Rabatte auf den Pfand.** Jeder Rabatt (5 % in der App, Tagesangebote,
  Coupons, MHD-Abschlag) wurde auch auf die 0,25 € gewährt.
* **Spende auf den Pfand.** Die 5 % für die Region wurden auch vom Pfand
  gerechnet. Entschieden ist am 27.09.2026: ohne Pfand.

Beim Prüfen sind zwei weitere Fehler aufgefallen, die diese Änderung gleich
mit behebt:

* Die Bezahlung per App am Automaten („Freigabe") brach bei **jedem** Versuch
  mit einem Fehler ab. Bisher hat das niemand gemerkt, weil noch kein Automat
  läuft.
* Bei Automatenkäufen wurde die Spende mit 7 % Umsatzsteuer gerechnet, auch
  bei Getränken, für die 19 % gelten. Die Spende fiel dadurch zu hoch aus.

### Was dabei passiert — und was nicht

* **Der Kunde zahlt am Automaten genau so viel wie vorher.** Aus „Cola 2,30 €"
  wird „Cola 2,05 € zzgl. 0,25 € Pfand". Die Datenbank prüft das beim
  Einspielen selbst für jedes Produkt und bricht ab, wenn auch nur ein Cent
  nicht stimmt.
* Rabatte gelten danach nur noch für die Ware. Beispiel mit 5 % App-Rabatt:
  vorher 2,18 €, jetzt 2,05 € − 0,10 € + 0,25 € = 2,20 €.
* Die Spende wird ohne Pfand gerechnet. **Umsatzsteuer, Rechnungen und
  Buchhaltung bleiben unverändert**: Für das Finanzamt gehört der Pfand zum
  Verkaufspreis und wird mit versteuert.
* Es wird nichts gelöscht. Offene Angebote werden auf den Preis ohne Pfand
  umgerechnet, abgelaufene und eingelöste bleiben, wie sie waren.

### Schritt für Schritt

Die beiden Texte zum Einfügen sind lang. Du kopierst sie jeweils als Ganzes
von GitHub.

1. Öffne `https://supabase.com/dashboard`, melde Dich an und klicke auf Dein
   Projekt (die Adresse endet auf `nnfsyuglkqycwenwxmuw`).
2. Klicke links auf **SQL Editor** und oben auf **New query**.
3. Öffne in einem zweiten Browser-Tab diese Adresse:
   `https://github.com/Blume1805/B-rdesnack24-/blob/claude/bordesnack24-audit-architecture-7xd3d6/supabase/migrations/20260926121000_terminal_webhook_anbindung.sql`
4. Klicke dort rechts oben über dem Text auf das Symbol **Copy raw file**
   (zwei überlappende Rechtecke). Der ganze Text ist jetzt kopiert.
5. Zurück im SQL Editor: ins leere Feld klicken, **Strg+V**, dann unten
   rechts **Run**. Unten erscheint „Success. No rows returned".
6. Feld leeren (Strg+A, Entf). Dann dasselbe mit dieser Datei:
   `https://github.com/Blume1805/B-rdesnack24-/blob/claude/bordesnack24-app-strategy-sf5yzy/docs/audit/2026-09-27-pfand/20260927200000_pfand_getrennt.sql`
   → **Copy raw file** → Strg+V → **Run**. Das dauert einige Sekunden.
6b. Feld leeren. Dasselbe mit der dritten Datei, die Kunden im
   Automatenfinder zeigt, ob ein Produkt da ist (ohne Stückzahlen):
   `https://github.com/Blume1805/B-rdesnack24-/blob/claude/bordesnack24-app-strategy-sf5yzy/docs/audit/2026-09-29-verfuegbarkeit/20260929100000_verfuegbarkeit_fuer_kunden.sql`
   → **Copy raw file** → Strg+V → **Run**.
7. Feld leeren und diesen Text einfügen. Er trägt alle drei Änderungen in
   die Liste der eingespielten Änderungen ein, damit sie später nicht noch
   einmal laufen:

   ```sql
   insert into supabase_migrations.schema_migrations (version, name)
   values ('20260926121000', 'terminal_webhook_anbindung'),
          ('20260927200000', 'pfand_getrennt'),
          ('20260929100000', 'verfuegbarkeit_fuer_kunden')
   on conflict (version) do nothing;
   ```

   → **Run**.
8. **Kontrolle.** Feld leeren, diesen Text einfügen, **Run**. Er liest nur:

   ```sql
   select
     (select count(*) from public.products where deposit > 0) as produkte_mit_pfand,
     (select round(list_price_net * (1 + tax_rate / 100), 2)
        from public.products where sku = 'BS-004') as cola_ware,
     (select deposit from public.products where sku = 'BS-004') as cola_pfand,
     (select deposit from public.products where sku = 'BS-006') as durstloescher_pfand;
   ```

9. **Preisschilder am Automaten**, bevor er in Betrieb geht: je Getränk mit
   Pfand der Warenpreis und daneben der Pfand, zum Beispiel
   **„Coca-Cola 0,5 l  2,05 €  zzgl. 0,25 € Pfand"**. Der Preis, den Du im
   Automaten selbst einstellst, bleibt der **Gesamtbetrag** (2,30 €): Der
   Automat kassiert Ware und Pfand zusammen. Die aktuelle Liste liefert der
   Text aus Schritt 8, wenn Du `where sku = 'BS-004'` weglässt; oder frag mich
   nach einer fertigen Druckvorlage.
10. **Landingpage umschalten.** Sag mir hier im Chat „Runbook M ist durch".
    Ich lege dann bei Lovable den Schalter `pfandGetrennt` um. Danach zeigt die
    Seite „Kaltgetränke ab 1,25 € zzgl. 0,25 € Pfand", den Hinweis „Rabatte
    gelten nicht für den Pfand." und „Nettoerlös heißt: Umsatz ohne
    Umsatzsteuer und ohne Pfand." Erst danach veröffentlichen.

### So sieht Erfolg aus

Nach Schritt 8 steht in der Tabelle:

| Spalte | richtig ist |
| --- | --- |
| `produkte_mit_pfand` | `18` |
| `cola_ware` | `2.05` |
| `cola_pfand` | `0.25` |
| `durstloescher_pfand` | `0.00` |

In der App steht danach bei der Cola „2,05 €" und darunter „zzgl. 0,25 €
Pfand"; auf dem Kassenbon steht der Pfand als eigene Zeile.

### Wenn etwas schiefgeht

* **Rote Meldung in Schritt 5 oder 6:** Es ist **nichts** verändert worden.
  Die Änderung läuft ganz oder gar nicht. Schick mir ein Bildschirmfoto.
  Zwei Meldungen sind gewollt und harmlos:
  * „Zuerst 20260926121000 … ausrollen": Schritt 5 fehlt, bitte nachholen.
  * „Pfand-Migration ist bereits angewandt": Sie ist schon drin. Weiter mit
    Schritt 7.
* **Etwas anderes als in der Erfolgstabelle:** nicht weitermachen, Foto an
  mich.
* Rückgängig machen bitte **nicht selbst**: Das hieße Spalten zu entfernen, und
  das mache ich mit Dir gemeinsam. Es eilt dabei nie; der Kunde zahlt in jedem
  Fall den richtigen Betrag.

Technischer Hintergrund: Migration
`20260927200000_pfand_getrennt.sql` (Produktionslinie, Zweig
`claude/bordesnack24-audit-architecture-7xd3d6`), Nachweis
`scripts/pruefumgebung/110_pfand.sql` (23 Fälle) und Neuaufbau mit allen
Prüfskripten, COMPLIANCE V-016.

## Runbook N: App-Vorteile für jedes kostenlose Konto freischalten

> **✅ Erledigt am 15.11.2026.** Die Änderung ist in der echten Datenbank
> eingespielt und nachgemessen: Vorteile für alle Konten `true`, Monats- und
> Jahresabo nicht mehr angeboten, Löschregel `n`. Ein Konto hat einen
> Abo-Eintrag; das ist ein Testkonto. Du musst hier nichts mehr tun. Nachweis:
> `docs/audit/2026-11-15-ausrollplan/README.md`, Abschnitt 5.

**Zeitbedarf:** 10 Minuten in Supabase.

**Dringlichkeit:** vor der Veröffentlichung der Landingpage und vor dem ersten
Automaten in Betrieb. **Reihenfolge:** erst Runbook M, dann dieses Runbook.
Andersherum bricht es ohne Änderung ab und sagt das auch.

### Warum das gemacht werden soll

Die Landingpage und unsere Nutzungsbedingungen versprechen: Wer ein
kostenloses Konto hat, bekommt 5 % Rabatt, Coupons und Treueboni. In der
echten Datenbank hängen diese Vorteile aber noch am alten Abo. Ein neuer Kunde
bekäme heute also nichts davon, könnte aber ein Abo abschließen, das es laut
Seite gar nicht mehr gibt. Das ist irreführende Werbung (§ 5 UWG, das Gesetz
gegen unlauteren Wettbewerb) und widerspricht unseren eigenen Bedingungen.

Die Freischaltung vom 16.09.2026 war nur in der Testdatenbank angekommen,
nicht in der echten.

### Was dabei passiert und was nicht

* Jedes **angemeldete** Konto bekommt die Vorteile: 5 % Dauerrabatt, Coupons
  aktivieren, Treueboni, Statusstufen. Wer nicht angemeldet ist, bekommt
  weiter nichts.
* Monats- und Jahresabo lassen sich **nicht mehr neu abschließen**. Es wird
  dabei nichts gelöscht, die Angebotszeiträume werden nur beendet.
* Wer schon einen Abo-Eintrag hat, behält ihn. Die Kontrolle in Schritt 6
  zählt, wie viele das sind.
* Nebenbei behoben: Ein Kunde mit Treuebonus konnte sein Konto nicht löschen,
  weil die Datenbank das daran hängende Angebot nicht freigab. Das fiel bisher
  nicht auf, weil ohne Abo niemand Treueboni bekam.
* Die App muss nicht neu veröffentlicht werden. Sie ist schon auf
  „Vorteile für alle" eingestellt.

### Schritt für Schritt

1. Öffne `https://supabase.com/dashboard`, melde Dich an und klicke auf Dein
   Projekt (die Adresse endet auf `nnfsyuglkqycwenwxmuw`).
2. Klicke links auf **SQL Editor** und oben auf **New query**.
3. Öffne in einem zweiten Browser-Tab diese Adresse:
   `https://github.com/Blume1805/B-rdesnack24-/blob/claude/bordesnack24-app-strategy-sf5yzy/docs/audit/2026-11-03-vorteile/20261103100000_vorteile_ohne_abo.sql`
4. Klicke dort rechts oben über dem Text auf das Symbol **Copy raw file**
   (zwei überlappende Rechtecke). Der ganze Text ist jetzt kopiert.
5. Zurück im SQL Editor: ins leere Feld klicken, **Strg+V**, dann unten
   rechts **Run**. Unten erscheint „Success. No rows returned".
6. Feld leeren (Strg+A, Entf) und diesen Text einfügen. Er trägt die Änderung
   in die Liste der eingespielten Änderungen ein und liest danach nur:

   ```sql
   insert into supabase_migrations.schema_migrations (version, name)
   values ('20261103100000', 'vorteile_ohne_abo')
   on conflict (version) do nothing;

   select
     app.benefits_free_for_all()          as vorteile_fuer_alle,
     app.abo_wird_angeboten('monthly')    as monatsabo_angeboten,
     app.abo_wird_angeboten('yearly')     as jahresabo_angeboten,
     (select confdeltype from pg_constraint
       where conname = 'loyalty_bonus_grants_offer_id_fkey') as loeschregel,
     (select count(distinct customer_id)
        from public.customer_subscriptions) as konten_mit_abo_eintrag;
   ```

   → **Run**.

### So sieht Erfolg aus

| Spalte | richtig ist |
| --- | --- |
| `vorteile_fuer_alle` | `true` |
| `monatsabo_angeboten` | `false` |
| `jahresabo_angeboten` | `false` |
| `loeschregel` | `n` |
| `konten_mit_abo_eintrag` | eine Zahl, bitte mir nennen |

Steht bei `konten_mit_abo_eintrag` mehr als `0`, sag es mir. Dann klären wir
gemeinsam, ob diese Konten schon etwas bezahlt haben und eine Erstattung
fällig ist. Das ist eine Entscheidung für Dich, nicht für die Technik.

In der App lässt sich danach mit einem frisch angelegten Konto im Tab
„Angebote" ein Coupon mit **Aktivieren** freischalten. Vorher kam dabei die
Meldung „Abo erforderlich".

### Wenn etwas schiefgeht

* **Rote Meldung in Schritt 5:** Es ist **nichts** verändert worden. Die
  Änderung läuft ganz oder gar nicht. Schick mir ein Bildschirmfoto.
  Eine Meldung ist gewollt und harmlos: „Zuerst Runbook M … ausrollen. Abbruch
  ohne Änderung." Dann bitte erst Runbook M.
* **Etwas anderes als in der Erfolgstabelle:** nicht weitermachen, Foto an
  mich.
* **Zurückstellen** geht ohne Datenverlust: Mit einem einzigen Satz in der
  Datenbank gilt wieder die alte Abo-Regel. Den schreibe ich Dir, falls nötig.
  Es eilt dabei nie.
* Schritt 5 zweimal ausgeführt? Harmlos, die Änderung ist wiederholbar.

Technischer Hintergrund: Migration `20261103100000_vorteile_ohne_abo.sql`
(Produktionslinie, gesichert in `docs/audit/2026-11-03-vorteile/`), Nachweis
`112_vorteile_ohne_abo.sql` (21 Fälle) und Neuaufbau mit allen Prüfskripten,
COMPLIANCE V-018-a.

---

## Runbook O: Zwei-Faktor-Anmeldung für die internen Konten (Stand 17.11.2026)

**Zeitbedarf:** 5 Minuten je Person. Danach schalte ich die Pflicht ein
(2 Minuten). Ihr müsst nicht gleichzeitig da sein.

**Dringlichkeit:** vor dem ersten echten Verkauf (Audit A2-01, wichtigster
offener Sicherheitspunkt).

### Lage am 17.11.2026 (gemessen, ohne persönliche Daten)

* Es gibt **zwei** interne Konten, die sich anmelden können: ein
  Administrator (Philipp) und eine Gesellschafterin (Pia). Die beiden
  Demo-Konten mit internen Rollen sind seit 16.11. gesperrt und zählen nicht
  mehr.
* Keines der beiden Konten hat einen bestätigten zweiten Faktor.
* Philipps Konto hat eine früher **abgebrochene** Einrichtung. Das stört
  nicht: Die App legt beim nächsten Versuch einen neuen Faktor an.
* Pias Konto war **noch nie angemeldet**. Sie setzt zuerst ein Passwort
  (Schritt 2 unten).

### Warum

Heute reicht ein Passwort, um Umsätze, Einkaufspreise, Verträge und
Kundendaten zu sehen. Ein zweiter Faktor ist eine sechsstellige Zahl aus
einer App auf dem Telefon, die sich alle 30 Sekunden ändert. Ohne das
Telefon kommt niemand hinein, auch nicht mit dem richtigen Passwort.

### Was passiert dabei — und was nicht

* Es passiert: Nach dem Einschalten bekommt ein internes Konto ohne die
  sechsstellige Zahl keine Daten mehr. Die App fragt die Zahl direkt nach
  dem Passwort ab.
* Es passiert **nicht**: Kunden merken nichts. Das ist mit Prüfskript 113
  nachgewiesen.
* Der Rückweg (Schalter aus) hängt nicht an der App und nicht am Telefon.

### Teil 1 — jede Person für sich (5 Minuten)

1. Auf dem Telefon eine Authenticator-App installieren: „Google
   Authenticator" oder „Aegis" (Android), auf dem iPhone geht auch
   *Einstellungen → Passwörter*. Alle kostenlos.
2. **Nur Pia, beim ersten Mal:** `https://app.boerdesnack24.de` öffnen →
   **Passwort vergessen?** → ihre E-Mail-Adresse eingeben → Link in der
   E-Mail öffnen → neues Passwort festlegen. (Kommt keine E-Mail, im
   Spam-Ordner nachsehen; sonst Philipp Bescheid geben.)
3. `https://app.boerdesnack24.de/#/security/mfa` öffnen und anmelden. Oder
   nach der Anmeldung oben auf „Konto absichern: Zwei-Faktor-Authentifizierung
   einrichten" tippen.
4. Es erscheint ein QR-Code (ein quadratisches Strichmuster). In der
   Authenticator-App auf „+" tippen und den QR-Code abfotografieren. Ein
   Telefon kann sich nicht selbst fotografieren: Dann unter dem QR-Code den
   angezeigten Schlüssel abtippen („Schlüssel eingeben" in der
   Authenticator-App).
5. Die sechsstellige Zahl aus der Authenticator-App in das Feld eintippen →
   **Bestätigen**.
6. Abmelden und neu anmelden. Nach dem Passwort fragt die App jetzt nach der
   Zahl → Zahl eingeben. Klappt das, ist der Faktor richtig eingerichtet.

**Wichtig:** Telefon nicht verlieren. Wer das Telefon wechselt, richtet den
Faktor vorher neu ein oder meldet sich, dann setzen wir ihn zurück.

> **Entscheidung 17.11.2026: Schalter ohne Pia einschalten.** Philipp richtet
> seinen Faktor ein, danach wird eingeschaltet. Pia sieht bis zu ihrer eigenen
> Einrichtung keine Daten (die Datenbank weist ihr Konto ab), kann sich aber
> anmelden und unter `https://app.boerdesnack24.de/#/security/mfa` jederzeit
> den Faktor einrichten: Die Einrichtung läuft über die Anmeldung, nicht über
> die gesperrte Datenschnittstelle. Danach Schritt 6, dann ist alles da.

### Teil 2 — mir Bescheid geben (1 Minute)

7. Im Chat schreiben: „Beide haben den zweiten Faktor." Ich messe in der
   Datenbank nach. Erwartet: **2 von 2** internen Konten mit bestätigtem
   Faktor (seit 17.11. genügt Philipps Konto, siehe Hinweis oben). Ist die
   Zahl kleiner, sage ich, wer noch fehlt, und es geht **nicht** weiter.

### Teil 3 — Schalter an (mache ich, 2 Minuten)

**Erledigt am 19.11.2026.** Gemessen: Schalter an
(`app.require_mfa_internal()` = true); die Schnittstelle antwortet nicht
angemeldeten Besuchern mit 200; Fingerabdruck der Produktion = Sollwert. Bei
der Messung hatte nur Philipps Konto einen Faktor (1 von 2). Pia richtet ihren
Faktor nach Teil 2 ein. Bis dahin sieht ihr Konto keine Daten (so beschlossen
am 17.11.2026).

8. Ich schalte die Pflicht ein (eine Datenbank-Änderung, die Du im Chat mit
   einem Klick bestätigst) und messe danach:
   * Schalter steht auf an,
   * die Schnittstelle antwortet für nicht angemeldete Besucher normal,
   * der Fingerabdruck ist unverändert (der Schalter ist ein Datenwert, kein
     Teil des Schemas).
9. Gegenprobe durch Dich: abmelden, neu anmelden, bei der Zahl auf
   **Abmelden** tippen statt Bestätigen. Man landet wieder bei der
   Anmeldung, nicht im Verwaltungsbereich. Mit der Zahl ist alles da.

### So sieht Erfolg aus

Beim Anmelden fragt die App nach Passwort **und** Zahl. Die tägliche
Betriebsprüfung zeigt „Zwei-Faktor-Pflicht: an" und „interne Konten mit
Faktor: 2 von 2".

### Wenn etwas schiefgeht

Telefon weg oder Zahl wird nicht angenommen: Mir schreiben, ich schalte die
Pflicht sofort ab. Ohne mich: <https://supabase.com/dashboard> → Projekt
**boerdesnack24-app** → **SQL Editor** → **New query** → einfügen → **Run**:

```sql
update app.security_settings
   set enabled = false, updated_at = now()
 where key = 'require_mfa_internal';
```

Danach ist alles wie vorher. Das Supabase-Konto selbst braucht deshalb
ebenfalls einen zweiten Faktor (Supabase → Profilbild oben rechts →
*Account preferences* → *Security*), sonst ist der Rückweg die
Schwachstelle.

Ausstehende Server-Lücke (Zielbild S7): Vier Funktionen zur
Dokumentenverwaltung prüfen die Rolle selbst und gehen an der Pflicht
vorbei. Sie werden mit dem Abgleich der Server-Funktionen (A2-05)
angepasst; bis dahin schützt der Schalter Daten und Dateien, nicht diese
vier Aktionen.

---

## Runbook P: Anmelde-Adressen in Supabase richtig einstellen (5 Minuten)

### Warum

Wenn ein Kunde sich registriert oder sein Passwort vergisst, schickt Supabase
eine E-Mail mit einem Link. Wohin dieser Link führt, steht in den
Einstellungen. Auf Deinen Bildschirmfotos vom 16.11.2026 steht dort noch die
alte Adresse `https://blume1805.github.io/B-rdesnack24-/`, und es sind zwei
Lovable-Adressen als erlaubtes Ziel eingetragen, die nicht zur App gehören.
Die App selbst gibt beim Registrieren und beim Passwort-Zurücksetzen kein
eigenes Ziel an (geprüft im Code am 16.11.2026), sie verlässt sich also
vollständig auf diese Einstellung.

### Was passiert dabei — und was nicht

* Es passiert: Bestätigungs- und Passwort-Links führen auf
  `https://app.boerdesnack24.de`. Fremde Seiten können nicht mehr als Ziel
  eines Anmelde-Links dienen.
* Es passiert **nicht**: Niemand wird abgemeldet, kein Konto ändert sich.
  Links, die schon verschickt wurden, funktionieren weiter bis zum Ablauf.

### Schritt für Schritt

1. <https://supabase.com/dashboard> öffnen, Projekt **boerdesnack24-app**.
2. Links **Authentication** → **URL Configuration**.
3. Feld **Site URL**: den Inhalt löschen und genau das einfügen:
   `https://app.boerdesnack24.de` → **Save**.
4. Darunter **Redirect URLs** → **Add URL** → einfügen:
   `https://app.boerdesnack24.de/**` → **Save URLs**.
5. In derselben Liste bei `https://snack-aid-app.lovable.app/**` rechts auf
   das Papierkorb-Symbol klicken und bestätigen. Dasselbe bei dem Eintrag,
   der mit `https://id-preview--d5033021` beginnt.
6. Den Eintrag `https://blume1805.github.io/B-rdesnack24-/**` **stehen
   lassen**, bis die alte Adresse abgeschaltet ist.
7. Links **Authentication** → **Sign In / Providers** → Abschnitt **Email**
   aufklappen und nachsehen, ob **Confirm email** eingeschaltet ist (Schalter
   grün). Wenn nicht: einschalten → **Save**. Auf dem Bildschirmfoto war
   dieser Schalter abgeschnitten.

### So sieht Erfolg aus

Site URL zeigt `https://app.boerdesnack24.de`; in der Liste stehen genau
zwei Einträge (`app.boerdesnack24.de/**` und `blume1805.github.io/…/**`).
Probe: mit einer eigenen Zweit-Adresse „Passwort vergessen" auslösen — der
Link in der E-Mail beginnt mit `https://app.boerdesnack24.de`.

### Wenn etwas schiefgeht

Führt der Link ins Leere, die alte Site URL
`https://blume1805.github.io/B-rdesnack24-/` wieder eintragen und mir
Bescheid geben. Es eilt nicht; wichtig ist es vor dem ersten echten Kunden.

---

## Runbook Q: Repository privat stellen — Entscheidung nötig

### Warum

Das Repository (der Ordner auf GitHub, in dem der ganze Code liegt) ist
öffentlich. Jeder kann Businessplan, Finanzrechnung und die Audit-Berichte
mit den Sicherheitsbefunden lesen (Audit A2-03). Du hast am 16.11.2026
entschieden: privat stellen.

### Der Haken

Die App unter `app.boerdesnack24.de` wird heute von **GitHub Pages**
ausgeliefert, einem kostenlosen Webspeicher von GitHub. Im kostenlosen
GitHub-Tarif geht das nur aus öffentlichen Repositories. Wird das Repository
privat, ist die App offline, bis einer dieser Wege umgesetzt ist:

| Weg | Was | Kosten | Aufwand |
|---|---|---|---|
| A | GitHub-Tarif „Pro" — GitHub Pages läuft dann auch aus dem privaten Repository | rund 4 US-Dollar im Monat | 5 Minuten, Philipp |
| B | Ein zweites, öffentliches Repository nur mit der fertig gebauten App (kein Quelltext, keine Unterlagen) | 0 € | 30 Minuten, ich; Philipp legt das Repository an |
| C | Die App ebenfalls zu Hostinger legen (wie die Landingpage), Ablauf per FTPS wie für die Landingpage | 0 € zusätzlich | 1 Stunde, ich; Philipp trägt eine DNS-Zeile bei Hostinger ein |

> **Entschieden am 16.11.2026: Weg C** (Philipp). Umsetzung: Runbook R.

**Meine Empfehlung: C.** Ihr zahlt Hostinger ohnehin, alles liegt dann an
einem Ort, und die Sicherheits-Kopfzeilen (CSP, HSTS) stehen in derselben
`.htaccess` wie bei der Landingpage. Weg A ist der schnellste Notbehelf.

### Reihenfolge (egal welcher Weg)

1. Erst den neuen Auslieferungsweg einrichten und prüfen.
2. Dann das Repository privat stellen: GitHub → Repository → **Settings** →
   ganz unten **Danger Zone** → **Change visibility** → **Make private**.
3. Danach prüfe ich `app.boerdesnack24.de` und die Landingpage.

**Wichtig:** Schritt 2 nicht vor Schritt 1 — sonst ist die App offline.
Außerdem holt die echte Datenbank bei Ausrollungen Dateien direkt von GitHub
(15.11.2026); nach dem Privatstellen geht das nicht mehr ohne Schlüssel. Das
ist gewollt: künftige Änderungen spiele ich über den Bestätigungsweg ein.

---

## Runbook R: App zu Hostinger umziehen (Weg C aus Runbook Q)

**Zeitbedarf für Dich:** etwa 15 Minuten in Teil 1, 5 Minuten in Teil 3.
Dazwischen arbeite ich (Teil 2), Du musst nicht warten.

### Warum

Die App unter `app.boerdesnack24.de` kommt heute von GitHub Pages, dem
kostenlosen Webspeicher von GitHub. Das funktioniert nur, solange das
Repository öffentlich ist. Damit wir es privat stellen können
(Businessplan, Finanzen und Sicherheitsberichte sollen nicht mehr
öffentlich lesbar sein), muss die App vorher woanders liegen: bei Hostinger,
wo auch die Landingpage liegt.

### Was passiert dabei — und was nicht

* Es passiert: Die App-Dateien liegen danach bei Hostinger. Die Adresse
  bleibt `app.boerdesnack24.de`.
* Es passiert **nicht**: Niemand wird abgemeldet (die Anmeldung hängt an der
  Adresse, nicht am Server). Konten, Datenbank und Inhalte ändern sich nicht.
* Bis Teil 3 läuft die alte App unverändert weiter. Wir testen erst unter
  einer Probe-Adresse `app-neu.boerdesnack24.de`.

### Teil 1 — Du bei Hostinger und GitHub (15 Minuten)

Die Bezeichnungen in hPanel (so heißt die Verwaltungsseite von Hostinger)
können leicht abweichen; gemeint ist jeweils der sinngemäße Menüpunkt.

**A. Probe-Adresse anlegen**

1. <https://hpanel.hostinger.com> öffnen und anmelden.
2. Oben **Websites** → bei `boerdesnack24.de` auf **Dashboard**.
3. Links **Domains** → **Subdomains**.
4. Ins Feld für den Namen `app-neu` schreiben. Wird ein Ordner angeboten,
   den Vorschlag stehen lassen. Auf **Create** (Erstellen) klicken.
5. Den angezeigten Ordner notieren, etwa
   `public_html/app-neu` oder `domains/app-neu.boerdesnack24.de/public_html`.

**B. Eigenes Hochlade-Konto nur für diesen Ordner**

Ein FTP-Konto ist ein Zugang, über den Dateien hochgeladen werden. Ein
eigenes Konto nur für die App sorgt dafür, dass es nichts anderes sehen oder
überschreiben kann — auch nicht die Landingpage.

6. Links **Files** (Dateien) → **FTP Accounts** (FTP-Konten).
7. Bei **Create a new FTP account**: Benutzername z. B. `app`, ein langes
   Passwort erzeugen lassen und **sicher notieren** (Passwort-Manager).
   Als Verzeichnis den Ordner aus Schritt 5 wählen. **Create** klicken.
8. Oben auf derselben Seite stehen **FTP IP / Hostname** und der vollständige
   **FTP username** (bei Hostinger oft mit Zahlen davor, z. B.
   `u123456789.app`). Beides notieren.

**C. Die Werte bei GitHub hinterlegen**

Ein „Secret" ist bei GitHub ein verschlossenes Feld: Der Ablauf kann es
benutzen, aber niemand kann es danach wieder lesen, auch ich nicht.

9. <https://github.com/Blume1805/B-rdesnack24-> öffnen → oben **Settings**
   → links **Secrets and variables** → **Actions**.
10. **New repository secret** — viermal, jeweils Name und Wert genau so:

| Name | Wert |
|---|---|
| `APP_FTP_SERVER` | der Hostname aus Schritt 8, ohne `ftp://` |
| `APP_FTP_USERNAME` | der vollständige Benutzername aus Schritt 8 |
| `APP_FTP_PASSWORD` | das Passwort aus Schritt 7 |
| `APP_FTP_ZIELORDNER` | `.` (ein einzelner Punkt) |

11. Mir im Chat schreiben: „Hostinger Teil 1 erledigt". **Das Passwort
    nicht in den Chat schreiben.**

**So sieht Erfolg aus:** Unter Actions-Secrets stehen vier Einträge mit
`APP_FTP_…`. Die Probe-Adresse zeigt im Browser eine leere Seite oder eine
Hostinger-Platzhalterseite — das ist richtig, die App kommt in Teil 2.

### Teil 2 — ich (etwa 1 Stunde, ohne Dich)

* Ablauf **App zu Hostinger ausliefern (von Hand)** einmal mit „nur bauen"
  starten, dann mit Hochladen.
* `app-neu.boerdesnack24.de` prüfen: Startseite auf Handy- und
  Computerbreite, Anmeldung, Unterseiten, Marketing-PDFs, Sicherheitsregeln
  (am 16.11.2026 lokal bereits ohne einen einzigen Verstoß geprüft).
* Bericht an Dich mit Bildschirmfotos.

### Teil 3 — Du: die Adresse umstellen (5 Minuten, am besten abends)

12. hPanel → **Domains** → `boerdesnack24.de` → **DNS / Nameservers**
    (DNS-Einträge sind die Wegweiser, welche Adresse zu welchem Server führt).
13. Den Eintrag Typ **CNAME**, Name `app`, Ziel `blume1805.github.io`
    suchen und **löschen** (Papierkorb).
14. Zurück zu **Websites** → `boerdesnack24.de` → **Domains** →
    **Subdomains** → neue Subdomain `app` anlegen und **denselben Ordner wie
    `app-neu`** wählen (Schritt 5).
15. Warten, bis `https://app.boerdesnack24.de` die App zeigt. Meist wenige
    Minuten, selten bis zu einigen Stunden; das Sicherheitszertifikat
    (das Schloss im Browser) stellt Hostinger selbst aus.
16. Mir schreiben: „Adresse umgestellt". Ich prüfe alles und sage Dir dann,
    dass Du das Repository privat stellen kannst (Runbook Q, Schritt 2).

**So sieht Erfolg aus:** `app.boerdesnack24.de` zeigt die Anmeldeseite mit
Schloss-Symbol. Unten in der Seite steht keine Liste „Demo-Zugänge".

### Wenn etwas schiefgeht

* **Teil 1/2:** nichts kann kaputtgehen, die alte App läuft weiter.
* **Teil 3, die App ist nicht erreichbar:** Subdomain `app` wieder löschen,
  den CNAME-Eintrag `app` → `blume1805.github.io` neu anlegen. Dann läuft
  wieder die alte App (bis zu einer Stunde Wartezeit, bis alle Geräte den
  Wegweiser neu kennen). Mir Bescheid geben; es eilt, weil Kunden die App in
  der Zeit nicht erreichen.


---

## Runbook S: Claude mit der Verwaltung verbinden (Stand 17.11.2026)

**Zeitbedarf für Dich:** etwa 20 Minuten, am Desktop. Vorher muss Runbook P
erledigt sein (Site URL `https://app.boerdesnack24.de`).

### Warum

Du möchtest Claude sagen können „Schick mir das Reinigungsprotokoll für
Oktober" oder „Was muss ich noch freigeben?", ohne Dich selbst in die
Verwaltung einzuloggen. Dafür gibt es jetzt eine Verbindung (MCP, das ist
eine Steckdose, über die Claude mit einer fremden App sprechen darf). Ohne
diese Einrichtung bleibt alles wie bisher: Du holst Protokolle selbst in der App.

### Was passiert dabei — und was nicht

* Es passiert: Claude bekommt **zwei** Werkzeuge.
  1. **Protokoll als PDF** für einen Zeitraum (höchstens ein Jahr, nichts in
     der Zukunft): Temperatur, Reinigung, Vernichtung, Befüllung, Wartung,
     Geldentnahme. Claude bekommt nur einen **Link**, der 24 Stunden gilt.
     Den Link öffnest Du; Claude ist angewiesen, ihn nicht selbst zu öffnen.
  2. **Offene Vorgänge:** welche Freigaben noch auf Dich oder Pia warten (Titel,
     Zeitraum, Deine Entscheidung, Anzahl Zustimmungen), bei welchen
     Dokumenten Unterschriften fehlen (**nur die Anzahl**, keine Namen), und
     welche Dokumente in den nächsten 60 Tagen ablaufen.
* Es passiert **nicht**: Claude sieht keine Namen, E-Mail-Adressen oder
  Kennungen von Beschäftigten, keine Schulungsnachweise, keine Kundendaten,
  keine Zahlen aus Einkauf und Umsatz. Claude kann nichts freigeben,
  unterschreiben, ändern oder löschen. Es gilt dieselbe Rechteprüfung wie in
  der App: Claude arbeitet mit **Deinen** Rechten, nicht mit mehr.
* Jeder Aufruf wird im Änderungsprotokoll festgehalten (Werkzeug, Zeitraum).
* Die PDFs liegen in einem gesperrten Ablageort und werden gelöscht, sobald
  ihr Link abgelaufen ist (beim nächsten Export).
* **Deine Regel dafür:** In Titel von Dokumenten und Freigaben keine Namen von
  Personen schreiben („Reinigungsplan Automat 2", nicht „Reinigung Erika").
  Titel sind das Einzige, was Claude im Klartext sieht.

### Schritt für Schritt

**Teil 1 — mit mir zusammen, am Desktop (5 Minuten):**

1. Mir schreiben: „Claude-Verbindung einspielen, bin am Desktop".
2. Ich spiele die Datenbank-Änderung `20261117120000_claude_verbindung` ein
   und liefere den Dienst `verwaltung-mcp` aus. Du bekommst dafür zwei
   Bestätigungsfragen auf dem Bildschirm, jeweils innerhalb einer Minute auf
   **Erlauben** klicken. Danach messe ich nach (Fingerabdruck, siehe CLAUDE.md).

**Teil 2 — in Supabase (5 Minuten):**

3. <https://supabase.com/dashboard> öffnen, Projekt **boerdesnack24-app**.
4. Links **Authentication** → **OAuth Server** (falls der Punkt fehlt: unter
   **Authentication** → **Settings** nach „OAuth Server" suchen).
5. Schalter **Enable the Supabase OAuth Server** einschalten.
6. Feld **Authorization Path**: genau das eintragen: `/oauth/consent`
7. Schalter **Allow Dynamic OAuth Apps** einschalten (damit darf sich Claude
   selbst als App anmelden; ohne ihn müsstest Du Schlüssel von Hand
   übertragen).
8. **Save**.

**Teil 3 — in Claude (10 Minuten):**

9. In Claude (claude.ai im Browser oder Desktop-App) links unten auf Deinen
   Namen → **Einstellungen** → **Konnektoren** (englisch „Connectors").
10. **Benutzerdefinierten Konnektor hinzufügen** („Add custom connector").
11. Name: `Bördesnack24 Verwaltung`
    Adresse (URL): `https://nnfsyuglkqycwenwxmuw.supabase.co/functions/v1/verwaltung-mcp`
    → **Hinzufügen**.
12. Auf **Verbinden** klicken. Es öffnet sich die Verwaltungs-App. Dort mit
    E-Mail, Passwort und dem 6-stelligen Code aus Deiner Authentifizierungs-App
    anmelden.
13. Die Seite „Claude möchte auf die Verwaltung zugreifen" zeigt, was Claude
    darf und was nicht. Auf **Erlauben** tippen. Du landest wieder in Claude.
14. In Claude unter **Einstellungen** → **Datenschutz** den Schalter „Claude
    verbessern helfen" (Nutzung Deiner Chats zum Training) **ausschalten**,
    falls er an ist. Das ist keine Pflicht, aber für Firmeninhalte sinnvoll.

### So sieht Erfolg aus

* In einem neuen Chat: „Welche Freigaben sind in der Verwaltung offen?" —
  Claude nennt Titel und Zustand, keine Namen.
* „Erstelle das Temperaturprotokoll vom 1. bis 31. Oktober 2026 als PDF" —
  Claude gibt einen Link zurück; der Link öffnet ein PDF, das so aussieht wie
  der Export in der App.

### Wenn etwas schiefgeht

* **Nach „Verbinden" erscheint eine Fehlerseite statt der Anmeldung:**
  Runbook P prüfen (Site URL). Mir ein Bildschirmfoto schicken; es eilt nicht.
* **Claude meldet „Zwei-Faktor nötig" oder „keine Berechtigung":** Noch
  ungeklärt ist, ob die Anmeldung über Claude den zweiten Faktor mitnimmt.
  Mir Bescheid geben; ich passe dann die Prüfung an. Die Verbindung kann
  nichts kaputt machen, sie liest nur.
* **Verbindung beenden:** In Claude → **Einstellungen** → **Konnektoren** →
  `Bördesnack24 Verwaltung` → **Trennen**. Zusätzlich in Supabase
  (Schritt 5) den Schalter wieder ausschalten. Danach kann Claude nichts mehr
  abrufen, alle bisher verschickten Links laufen nach 24 Stunden ab. Die
  PDFs selbst löscht der Dienst bei jedem neuen Export, sobald ihr Link
  abgelaufen ist; nach dem Trennen bleiben die letzten liegen — mir sagen,
  dann räume ich den Ordner `mcp-exporte` leer.
* **Rückweg in der Datenbank:** steht im Kopf der Migration
  `20261117120000_claude_verbindung.sql`; nur nach Absprache.

---

## Runbook T: Push-Benachrichtigung bei Freigaben einschalten (Stand 19.11.2026)

**Zeitbedarf:** 5 Minuten je Person (Philipp und Pia), am eigenen Handy.

### Warum

Wenn einer von Euch ein Dokument zur Freigabe anfordert, soll der andere es
sofort merken, ohne in die App schauen zu müssen. Bisher kam nur eine E-Mail
an die Firmenadresse.

### Was passiert dabei — und was nicht

* Es passiert: Fordert einer eine Freigabe an, bekommen **alle anderen**
  aktiven Gesellschafter-/Admin-Konten eine Mitteilung „Freigabe angefordert
  – <Titel> – bitte prüfen und freigeben". Der Anfordernde selbst bekommt
  keine. Zusätzlich erscheint die Mitteilung in der App-Liste.
* Der Inhalt ist verschlüsselt. Apple bzw. Google leiten ihn nur weiter und
  können ihn nicht lesen. Auf dem Sperrbildschirm steht nur der
  Dokumenttitel; deshalb keine Personennamen in Titeln.
* Es passiert **nicht**: Kunden bekommen keine solche Mitteilung. Die
  E-Mail an die Firmenadresse bleibt wie bisher.

### Teil 1 — Schlüssel (entfällt seit 19.11.2026)

Für Push braucht der Server einen Absenderausweis (zwei Schlüssel). Bis
19.11.2026 sollten sie von Hand als Geheimnis eingetragen werden. Das
Eingabefenster dafür erschien nicht, und die App meldete „Push konnte nicht
eingeschaltet werden". Seitdem erzeugt der Server die Schlüssel beim ersten
Einschalten selbst und legt sie im gesperrten Teil der Datenbank ab
(Migration `20261119100000`). Niemand muss etwas eintragen, und niemand sieht
den geheimen Teil. Die frühere Datei `push_schluessel_eintragen.txt` wird
nicht mehr gebraucht. Bitte löschen, falls gespeichert.

### Teil 2 — jeder an seinem iPhone

1. Die App **vom Home-Bildschirm** öffnen (nicht aus Safari). Ist sie noch
   nicht dort: in Safari `app.boerdesnack24.de` öffnen → unten auf das
   Teilen-Symbol (Quadrat mit Pfeil nach oben) → **Zum Home-Bildschirm** →
   **Hinzufügen**. Danach die App über das neue Symbol öffnen.
2. Anmelden. Unter dem Kopf steht der goldene Hinweis „Push-Benachrichtigung
   einschalten …" → auf **Einschalten** tippen.
3. iPhone fragt „… möchte Mitteilungen senden" → **Erlauben**.

### So sieht Erfolg aus

Der goldene Hinweis verschwindet. Probe: Pia fordert in **Verwaltung →
Reinigung** (oder einem anderen Protokoll) über das Ordner-Symbol oben in der
Kachel eine Freigabe an; Philipps Handy zeigt innerhalb weniger Sekunden
„Freigabe angefordert".

### Wenn etwas schiefgeht

* **Statt „Einschalten" steht „Teilen → Zum Home-Bildschirm …":** Die App
  läuft im Safari-Tab. Schritt 1 von Teil 2.
* **„Push-Benachrichtigungen sind blockiert":** iPhone → Einstellungen →
  Mitteilungen → Bördesnack24 → Mitteilungen erlauben einschalten. Danach
  App neu öffnen.
* **Keine Mitteilung bei der Probe:** Mir sagen; ich sehe in der Antwort der
  Funktion, wie viele Geräte erreicht wurden. Die E-Mail an die Firmenadresse
  kommt in jedem Fall.
* **Abschalten:** iPhone → Einstellungen → Mitteilungen → Bördesnack24 →
  aus. Nichts eilt.

## Runbook U: Fünf Test-PDFs aus dem Speicher löschen (Stand 19.11.2026)

**Zeitbedarf:** 3 Minuten, am Desktop. **Eilt nicht.**

### Warum

Die Test-Freigaben vom Juli sind aus der Datenbank gelöscht. Dazu gehörten
fünf unterschriebene PDFs. Supabase lässt Dateien aus Sicherheitsgründen nicht
per Datenbank-Befehl löschen, nur über seine Oberfläche. Ohne diesen Schritt
liegen die fünf Dateien nutzlos im Speicher. In der App sind sie nicht mehr
erreichbar.

### Was passiert dabei — und was nicht

* Es passiert: Der Speicherbereich **signed-documents** wird geleert. Darin
  liegen genau diese fünf Dateien und sonst nichts (gemessen am 19.11.2026).
  Ihre Namen sind lange Zeichenketten, die mit `.pdf` enden.
* Es passiert **nicht**: Dokumente, Vorlagen, Unterschriften und der Bereich
  **documents** bleiben unberührt. Dort liegen die Originale.

### Schritt für Schritt

1. Im Browser <https://supabase.com/dashboard/project/nnfsyuglkqycwenwxmuw/storage/buckets>
   öffnen und anmelden.
2. Links in der Liste auf **signed-documents** klicken.
3. Es erscheinen fünf Dateien, die mit `.pdf` enden. Oben links das
   Kästchen zum Auswählen aller Einträge anklicken.
4. Auf **Delete** (Papierkorb) klicken und mit **Delete** bestätigen.

### So sieht Erfolg aus

Der Bereich **signed-documents** ist leer. Mir „Speicher geleert" schreiben;
ich messe nach.

### Wenn etwas schiefgeht

Stehen dort mehr als fünf Dateien, oder heißt der Bereich anders: nichts
löschen, mir ein Bildschirmfoto schicken. Versehentlich in einem anderen
Bereich gelöscht: sofort melden. Gelöschte Dateien lassen sich nicht
wiederherstellen.
