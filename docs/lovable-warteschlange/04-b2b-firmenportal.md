# Auftrag 04 — Firmenportal (Bördesnack24 Business)

*Einzeln senden. Nichts anderes in diesem Durchgang.*

**Stand: 26.08.2026.** Das Backend dafür steht vollständig (Migrationen 0141
und 0142, angewandt und durchgespielt). Dieser Auftrag baut die Oberfläche
dazu — sonst nichts.

---

## Was der Auftraggeber will

Ein Bereich, in dem ein Unternehmen sieht, was seine Beschäftigten an einem
Automaten auf dem eigenen Gelände gekauft haben, wer dazugehört, welches
Budget gilt und was am Monatsende zu zahlen ist.

## Die eine Regel, die nicht verhandelbar ist

**Lege keine Tabelle an und ändere kein Schema.** Alles Nötige existiert.
Wenn dir etwas zu fehlen scheint, sage es — dann kommt es als Migration aus
dem Repository, nicht aus deinem Sandkasten. Zwei Schemata, die
auseinanderlaufen, sind der teuerste Fehler, den dieses Projekt machen kann.

Alles läuft über RPC-Aufrufe (`supabase.rpc(...)`). Kein direktes `select`
auf die Firmentabellen: Die Zeilensicherheit lässt es teilweise zu, aber die
RPC liefert die Zahlen fertig gerechnet, und zwar für App und Web gleich.

## Was ich vorher geprüft habe, damit du dieselbe Runde nicht drehst

Alles am laufenden System nachgestellt, nicht aus dem Gedächtnis:

* **Es gibt heute 0 Firmenkunden, 0 Mitglieder, 0 Firmenkäufe.** Der leere
  Zustand ist also nicht der Ausnahmefall, sondern der, den du beim ersten
  Öffnen siehst. Er gehört gebaut wie die gefüllte Ansicht — und er muss
  sagen, was als Nächstes zu tun ist.
* **Eine Firma kann sich nicht selbst registrieren.** `business_create`
  verlangt `businesses.manage` (Gesellschafter, Systemadministrator). Ein
  Unternehmen wird Kunde durch einen Vertrag. Baue also **keinen**
  Registrierungs-Bildschirm für Firmen — nur den Weg für den Eingeladenen.
* **Die Firmenzuordnung eines Kaufs entsteht aus dem Standort des Automaten**,
  nicht aus der Person. Ein Beschäftigter, der am öffentlichen Automaten
  kauft, kauft privat; sein Arbeitgeber erfährt davon nichts. Das darf die
  Oberfläche nirgends anders darstellen.
* **Die Stammdaten der Firma gehören nicht ins Portal.** Name, Anschrift,
  Steuernummern und die sevDesk-Kontaktnummer sind Vertragsdaten; geändert
  werden sie bei uns, nicht vom Kunden. Seit Migration 0151 weist die
  Datenbank jeden Schreibversuch auf `businesses` ab, der nicht aus der
  Verwaltung kommt — auch den eines Firmen-Administrators. Zeige die Angaben
  ruhig an; baue **kein** Formular dafür, es liefe in eine Fehlermeldung.
  Eine Adressänderung meldet der Kunde uns, wir tragen sie ein.
* **Das Budget ist kein Guthaben.** Es wird nichts aufgeladen. Es sagt nur,
  bis zu welchem Betrag der Arbeitgeber trägt. Vermeide jedes Wort, das nach
  Konto klingt — kein „Guthaben", kein „Aufladen", kein „Restbetrag auf der
  Karte". Richtig: „Budget", „vom Arbeitgeber getragen", „Ihr Anteil".

---

## Die Aufrufe, ausgeschrieben

### Für die eingeladene Person

```ts
// 1) Einladung annehmen — der Token kommt aus dem Link in der E-Mail
const { data, error } = await supabase.rpc("business_invitation_accept", {
  p_token: tokenAusDerUrl,
});
// data: { business_id, role: "admin" | "member", name }
```

Fehler, die du abfangen musst, mit genau dieser Bedeutung:

| Code | Bedeutung | Was der Nutzer lesen soll |
|---|---|---|
| `P0002` | Token unbekannt, zurückgezogen oder abgelaufen | „Diese Einladung ist nicht mehr gültig. Bitte den Firmen-Administrator um eine neue." |
| `42501` mit „anderen E-Mail-Adresse" | angemeldet mit einem anderen Konto | „Diese Einladung gehört zu einer anderen E-Mail-Adresse. Melde dich mit der Adresse an, an die die Einladung ging." |
| `42501` „Nicht angemeldet" | keine Sitzung | Erst anmelden, Token dabei behalten und danach erneut aufrufen. |

Absichtlich unterscheidet die Antwort **nicht** zwischen „gibt es nicht" und
„abgelaufen". Rate nicht daran herum und zeige beides gleich.

```ts
// 2) Wo bin ich Mitglied?
const { data } = await supabase.rpc("my_businesses");
// [{ id, name, role, status, seit }]
```

Ist die Liste leer, gibt es kein Firmenportal für diesen Nutzer. Zeige den
Einstieg dann gar nicht erst an, statt ihn in eine Fehlermeldung laufen zu
lassen.

### Für den Firmen-Administrator

```ts
// 3) Übersicht
const { data } = await supabase.rpc("business_dashboard", {
  p_business: firmaId,
  p_von: "2026-08-01",   // weglassen = laufender Monat bis heute
  p_bis: "2026-08-31",
});
```

Antwort:

```jsonc
{
  "business":  { "id": "…", "name": "Muster GmbH", "status": "active" },
  "zeitraum":  { "von": "2026-08-01", "bis": "2026-08-31" },
  "kennzahlen": {
    "mitglieder_aktiv": 12, "einladungen_offen": 3, "standorte": 1,
    "kaeufe": 482, "brutto": 2430.00,
    "arbeitgeber": 1200.00, "mitarbeiter": 1230.00
  },
  "mitglieder": [{
    "profile_id": "…", "name": "…", "email": "…",
    "role": "admin" | "member", "status": "invited" | "active" | "suspended",
    "kaeufe": 41, "brutto": 190.50, "arbeitgeber": 120.00, "mitarbeiter": 70.50,
    "budget": { "monatslimit": 30, "tageslimit": 10, "zuschuss": 100,
                "persoenlich": false }   // false = Standardbudget der Firma
  }],
  "einladungen": [{ "id": "…", "email": "…", "role": "member",
                    "expires_at": "…" }]
}
```

**Alle Beträge sind brutto** und kommen als Zahl, nicht als Text. Formatiere
mit `Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })`.

**`budget: null`** bedeutet: kein Budget gesetzt, der Arbeitgeber trägt
alles. Schreibe das aus — „trägt den vollen Betrag" —, statt ein leeres Feld
zu zeigen.

```ts
// 4) Einladen. Gibt den Klartext-Token EINMAL zurück.
const { data } = await supabase.rpc("business_invite", {
  p_business: firmaId, p_email: "max@muster.example",
  p_role: "member",        // oder "admin"
  p_tage: 14,              // 1 bis 90
});
// { id, email, role, token, expires_at }
```

Der Token steht **nur in dieser Antwort**. In der Datenbank liegt er als
SHA-256. Wer ihn verliert, lädt neu ein — ein zweiter Aufruf für dieselbe
Adresse zieht die vorherige Einladung automatisch zurück, es gibt also nie
zwei gültige Links.

Den Versand der E-Mail machst **nicht du**. Gib den Token an den vorhandenen
Mailweg weiter oder zeige ihn dem Administrator zum Kopieren, bis die
Mailvorlage steht.

```ts
// 5) Einladung zurückziehen
await supabase.rpc("business_invitation_revoke", { p_invitation: id });

// 6) Mitglied ändern
await supabase.rpc("business_member_set", {
  p_business: firmaId, p_profile: profilId,
  p_role: "admin",          // null = unverändert
  p_status: "suspended",    // null = unverändert
});

// 7) Budget setzen (null = Standard für alle Mitglieder)
await supabase.rpc("business_budget_set", {
  p_business: firmaId, p_profile: null,
  p_monatslimit: 30, p_tageslimit: 10, p_zuschuss: 100,
  p_gueltig_von: "2026-09-01", p_gueltig_bis: null,
});

// 8) Monatsabrechnung
const { data } = await supabase.rpc("business_statement", {
  p_business: firmaId, p_jahr: 2026, p_monat: 8,
});
// { business, zeitraum, summen, zeilen: [{ gekauft_am, wer, automat,
//   standort, artikel: [{bezeichnung, menge, einzelpreis}],
//   brutto, arbeitgeber, mitarbeiter }] }
```

Zwei Fehler, die du bei 6) sauber anzeigen musst:

* `23514` „letzte Administrator" — die Firma darf nicht ohne Administrator
  zurückbleiben. Zeige den Satz aus der Meldung; er sagt bereits, was zu tun
  ist.
* `P0002` „Mitglied nicht gefunden" — die Liste ist veraltet, neu laden.

---

## Was die Oberfläche zeigen soll

Navigation im Firmenportal, in dieser Reihenfolge:

**ÜBERSICHT · MITARBEITER · BUDGETS · ABRECHNUNG**

Mehr nicht. Standorte, Verträge und Reports kommen später und werden hier
nicht als leere Menüpunkte vorweggenommen.

* **Übersicht** — die vier Kennzahlen aus `kennzahlen`, darunter die
  Mitgliederliste mit Umsatz je Person. Primäre Handlung: **Mitarbeiter
  einladen**.
* **Mitarbeiter** — Liste mit Rolle, Status, offenen Einladungen. Handlungen:
  einladen, Rolle ändern, sperren, Einladung zurückziehen.
* **Budgets** — Standardbudget der Firma plus abweichende je Person. Zeige
  immer beides und mache sichtbar, welches greift (`persoenlich`).
* **Abrechnung** — Monat wählen, Summen oben, Einzelzeilen darunter, Ausgabe
  als PDF und CSV. Die Spalten: Datum, Wer, Automat, Artikel, Brutto,
  Arbeitgeberanteil, Mitarbeiteranteil.

## Ton und Gestaltung

Der Firmenbereich darf **sachlicher** wirken als der Kundenbereich: klar,
ruhig, datenorientiert. Die Marke bleibt — Gold `#FDC102` und Ink `#14110E`
wie überall —, aber ohne die verspielten Elemente des Kundenbereichs. Keine
Countdown-Timer, keine künstliche Verknappung, keine vorangekreuzten
Häkchen.

**Ausgaben rot mit Minus.** Das ist Hausregel im ganzen Projekt: Was Geld
kostet, steht rot und mit `−` davor. Für den Arbeitgeber ist der
Arbeitgeberanteil eine Ausgabe.

## Woran ich es nachprüfe

Nach deinem Durchgang lese ich `get_diff` und prüfe einzeln:

1. Kein `create table`, kein `alter table`, keine neue Migration.
2. Alle acht Aufrufe genau mit den oben genannten Parameternamen.
3. Der leere Zustand ist gebaut und sagt, was zu tun ist.
4. Die drei Fehlerfälle beim Annehmen sind unterschieden.
5. Beträge über `Intl.NumberFormat`, nicht selbstgebaut.
6. Nirgends das Wort „Guthaben" oder „aufladen".
