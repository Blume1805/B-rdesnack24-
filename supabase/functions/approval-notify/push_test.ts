import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { type PushDb, pushAnAndere } from "./push.ts";

const abo = (endpoint: string) => JSON.stringify({ endpoint, keys: { p256dh: "p", auth: "a" } });

function fakeDb() {
  const log: string[] = [];
  const db: PushDb = {
    empfaenger: (ausser) => Promise.resolve(["philipp", "pia"].filter((k) => k !== ausser)),
    abos: (konten) =>
      Promise.resolve(
        [
          { id: "1", user_id: "pia", token: abo("https://push.example/ok") },
          { id: "2", user_id: "pia", token: abo("https://push.example/weg") },
          { id: "3", user_id: "pia", token: "kaputt" },
          { id: "4", user_id: "philipp", token: abo("https://push.example/philipp") },
        ].filter((a) => konten.includes(a.user_id)),
      ),
    loescheAbo: (id) => {
      log.push(`loesche:${id}`);
      return Promise.resolve();
    },
    hinweis: (k, t) => {
      log.push(`hinweis:${k}:${t}`);
      return Promise.resolve();
    },
  };
  return { db, log };
}

Deno.test("Push geht an den anderen Gesellschafter, nicht an den Anfordernden", async () => {
  const { db, log } = fakeDb();
  const gesendet: string[] = [];
  const r = await pushAnAndere(
    db,
    { id: "f1", title: "Wartung Juli", requested_by: "philipp", status: "pending" },
    (a) => {
      gesendet.push(a.endpoint);
      return Promise.resolve(a.endpoint.endsWith("/weg") ? 410 : 201);
    },
    "https://app.example/",
  );
  assertEquals(gesendet, ["https://push.example/ok", "https://push.example/weg"]);
  assertEquals(r, { empfaenger: 1, zugestellt: 1, entfernt: 1 });
  assertEquals(log, ["hinweis:pia:Freigabe angefordert", "loesche:2"]);
});

Deno.test("Keine Push bei abgeschlossener Freigabe", async () => {
  const { db, log } = fakeDb();
  let n = 0;
  const r = await pushAnAndere(db, { id: "f2", title: "x", requested_by: "pia", status: "approved" }, () => {
    n++;
    return Promise.resolve(201);
  }, "https://app.example/");
  assertEquals([n, r.empfaenger, log.length], [0, 0, 0]);
});

Deno.test("Ein Gerät mit Fehler hält die anderen nicht auf", async () => {
  const { db } = fakeDb();
  const r = await pushAnAndere(db, { id: "f3", title: "x", requested_by: "philipp", status: "pending" }, (a) =>
    a.endpoint.endsWith("/ok") ? Promise.reject(new Error("Netz")) : Promise.resolve(201), "https://app.example/");
  assertEquals(r.zugestellt, 1);
});
