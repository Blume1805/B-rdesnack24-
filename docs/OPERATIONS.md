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

## Monitoring

- **Sentry** (Fehler/Crashes), **PostHog** (Nutzung, consent-gated).
- Edge-Function-Logs via `supabase functions logs <name>`.

## Verifikation vor Go-Live

Siehe `docs/DEPLOYMENT.md` (Go-Live-Checkliste) und die Verifikationsabschnitte in
`docs/FINANCE.md`, `docs/MANAGEMENT.md`, `docs/CUSTOMER.md`.
