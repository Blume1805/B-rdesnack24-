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

## Verifikation vor Go-Live

Siehe `docs/DEPLOYMENT.md` (Go-Live-Checkliste) und die Verifikationsabschnitte in
`docs/FINANCE.md`, `docs/MANAGEMENT.md`, `docs/CUSTOMER.md`.
