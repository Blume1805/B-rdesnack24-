# Posteingang aktivieren

Die Function `email-inbound` ist gebaut und ausgerollt, aber **absichtlich
noch stumm**: Ohne das Secret `INBOUND_WEBHOOK_SECRET` antwortet sie mit 500
und tut nichts. Das ist kein Fehler, sondern die Reihenfolge — sie soll
nicht arbeiten, bevor der Weg dorthin gesichert ist.

Sobald die Domain bei Resend verifiziert ist, sind es vier Schritte.

---

## 1. Domain verifizieren

Bei Resend unter *Domains* `boerdesnack24.de` anlegen und die angezeigten
DNS-Einträge beim Domain-Anbieter eintragen. Für **ausgehende** Post sind
das SPF-, DKIM- und DMARC-Einträge; für **eingehende** kommt ein
**MX-Eintrag** dazu, der auf Resend zeigt.

> Der MX-Eintrag ist der eigentliche Schalter. Ohne ihn nimmt niemand Post
> für `boerdesnack24.de` entgegen — die Function kann so gut gebaut sein
> wie sie will.

**Achtung, wenn ihr an dieser Domain schon Mail empfangt:** Ein MX-Eintrag
leitet den gesamten Posteingang der Domain um. Falls dort heute ein
Postfach hängt, das ihr benutzt, klärt das vorher — sonst landen eure
Mails ab dem Moment bei Resend statt im gewohnten Postfach. Die
Support-Adresse ist derzeit `boerdesnack24@gmail.com`, also eine andere
Domain; betroffen wäre nur, was direkt an `@boerdesnack24.de` geht.

## 2. Webhook einrichten

Bei Resend unter *Webhooks* einen Endpunkt anlegen:

```
https://nnfsyuglkqycwenwxmuw.supabase.co/functions/v1/email-inbound
```

Als Ereignis den Posteingang auswählen (`email.received` oder wie es dort
heißt). Resend zeigt danach ein **Signing Secret** in der Form
`whsec_…` — das wird im nächsten Schritt gebraucht.

## 3. Secret hinterlegen

Im Supabase-Dashboard unter *Edge Functions → Secrets*:

| Name | Wert |
|---|---|
| `INBOUND_WEBHOOK_SECRET` | das `whsec_…` aus Schritt 2 |

Ab diesem Moment arbeitet die Function. Ein Neu-Ausrollen ist nicht nötig.

## 4. Gegenprüfen

Schreib eine Mail an eine Adresse auf `@boerdesnack24.de` und sieh im
E-Mail-Protokoll nach (Filter *Richtung: eingehend*). Die Mail muss dort
innerhalb weniger Sekunden auftauchen.

---

## Was beim ersten echten Eingang zu tun ist

**Bitte einmal die Rohnutzlast ansehen.** Die genaue Form der Daten, die
Resend schickt, liess sich beim Bau nicht nachschlagen — die
Dokumentation war aus der Bauumgebung nicht erreichbar. Die Zuordnung auf
Betreff, Absender und Empfänger ist deshalb bewusst nachsichtig gebaut und
probiert mehrere übliche Schreibweisen durch.

Damit dabei nichts verlorengehen kann, wird die **vollständige Nutzlast**
in `email_log.raw` mitgeschrieben (Migration 0091). Nach dem ersten echten
Eingang also:

```sql
select raw from public.email_log
where direction = 'in'
order by occurred_at desc limit 1;
```

Stimmen Betreff, Absender und Empfänger in den normalen Spalten? Dann
passt die Zuordnung. Falls nicht, steht in `raw`, wie die Felder wirklich
heissen — dann wird `supabase/functions/email-inbound/parse.ts` angepasst
und die schon empfangenen Zeilen lassen sich aus `raw` nachziehen. Es geht
nichts verloren, es sieht nur eine Weile unaufgeräumt aus.

---

## Wie die Function sich schützt

Sie läuft mit `verify_jwt = false` — ein Webhook kann sich nicht anmelden.
Damit trägt sie ihre Zugangsprüfung selbst, und das ist genau die Bauart,
die bei `install-signature` schiefgegangen ist. Deshalb drei Regeln, die
dort verletzt waren:

1. **Kein Rückfallwert für das Secret.** Fehlt es, wird nicht gearbeitet.
   Ein Geheimnis mit Rückfallwert ist kein Geheimnis — bei
   `install-signature` stand es dadurch im ausgelieferten Code.
2. **Echte HMAC-Signatur über den Rumpf**, kein Vergleich eines
   mitgeschickten Kennworts. Ein Kennwort im Header genügt mitzulesen.
3. **Der Zeitstempel wird mitgeprüft** (Fenster: 5 Minuten), damit eine
   einmal mitgeschnittene Anfrage sich nicht beliebig oft wiedereinspielen
   lässt.

Dazu ein eindeutiger Index auf `provider_id` für eingehende Post: Stellt
Resend denselben Eingang nach einer Zeitüberschreitung erneut zu, entsteht
keine zweite Zeile. Die Function antwortet dann mit 200, damit die
Wiederholungen aufhören.

---

# Die Support-Adresse — Entscheidung vom 24.08.2026

Der Auftraggeber hat entschieden: **Die Support-Adresse zieht auf die
eigene Domain.** Anlass war die Rechtsprüfung — `boerdesnack24@gmail.com`
macht Google zum Empfänger jeder Kundenanfrage, und für privates Gmail
gibt es keinen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Seit die
Antwortadresse gesetzt ist, ist dieses Postfach zudem der eingebaute
Rückkanal jeder Systemnachricht, nicht mehr nur eine veröffentlichte
Adresse.

## Die Umstellung darf erst NACH dem Postfach passieren

`mailConfig.supportEmail` ist eine Zeile. Sie zu ändern ist trotzdem der
**letzte** Schritt, nicht der erste. Die Adresse steckt an neun Stellen,
acht davon Text in Mails — und an einer echt: `account-deletion-request`
schickt die interne Benachrichtigung über einen Löschantrag dorthin.

Wird umgestellt, bevor das Postfach Post annimmt, steht die neue Adresse
sofort im Fuß jeder Mail und in jedem `Reply-To` — und Kundenanfragen wie
Löschanträge nach Art. 17 DSGVO laufen ins Nichts. Das ist schlechter als
der Ausgangszustand, weil vorher wenigstens jemand mitlas.

## Der MX-Konflikt

Eine Domain hat **einen** MX-Eintrag. Er kann auf ein Postfach zeigen
oder auf Resend — nicht auf beides:

| | MX → Postfach (z. B. Hostinger) | MX → Resend |
|---|---|---|
| Wer liest die Post? | ein Mensch, im Mailprogramm | niemand — sie liegt in `email_log` |
| Google als Empfänger | raus | raus |
| Aufwand | Postfach buchen, MX setzen | MX, Webhook, Secret, **plus Oberfläche bauen** |
| `email-inbound` | bleibt stumm | wird scharf |

Der zweite Weg klingt vollständiger, ist aber heute unbrauchbar:
`email-inbound` schreibt ausschliesslich nach `email_log`, und **es gibt
keine Oberfläche, die das anzeigt** — `email_log_list`,
`email_log_detail` und `email-export` kommen in `apps/mobile/lib` an
keiner Stelle vor. Support wäre blind.

Wer beides will, gibt Resend eine **Unterdomain** (`inbound.boerdesnack24.de`);
dann hat jede Seite ihren eigenen MX. Übliches Muster, hier aber nicht
gegen die Resend-Dokumentation geprüft — `resend.com` ist aus der
Arbeitsumgebung gesperrt.

## Reihenfolge

1. **Postfach anlegen** für `kontakt@boerdesnack24.de` bei einem
   EU-Anbieter mit AV-Vertrag (Hostinger bietet Mailhosting an).
2. **MX-Eintrag** dorthin setzen. ⚠️ Läuft an dieser Domain schon Post,
   vorher klären — ein MX leitet den gesamten Posteingang um.
3. **Probe:** von aussen an `kontakt@boerdesnack24.de` schreiben und
   nachsehen, ob es ankommt. Erst wenn das steht, weiter.
4. **Dann erst** `mailConfig.supportEmail` umstellen. `Reply-To`, alle
   Mailfüsse und die Löschantrag-Benachrichtigung ziehen automatisch mit.
5. **Rechtstexte nachziehen** — und zwar in beide Richtungen:
   * Impressum und die sechs weiteren Stellen mit der Kontaktadresse.
   * Datenschutzerklärung Abschnitt 4: den neuen Anbieter als Empfänger
     benennen (Google entfällt, war ohnehin nie eingetragen).
   * Abschnitt 5 („zwei US-Empfänger") bleibt bei zwei — der neue
     Anbieter sitzt in der EU.
   * `LegalTexts.version` hochziehen.
6. **Offenen Punkt in `CLAUDE.md` streichen** („Google als Empfänger").

## Was bis dahin gilt

`boerdesnack24@gmail.com` bleibt in Betrieb. Die Lücke ist benannt und
liegt beim Auftraggeber — sie wird **nicht** durch einen Textbaustein
kaschiert, der Google als Empfänger benennt, während der AV-Vertrag
fehlt.
