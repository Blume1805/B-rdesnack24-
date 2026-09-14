/* ──────────────────────────────────────────────────────────────────────
   Bördesnack24 — Landingpage
   Ein einziger Scroll-Handler, rAF-gedrosselt, {passive:true}.
   Ohne dieses Skript ist die Seite vollständig lesbar und das Formular
   nennt den direkten Weg. Bewegung ändert nur Sichtbarkeit, nie Inhalt.
   ────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var wurzel = document.documentElement;
  wurzel.classList.add('js');

  /* ── Bewegungsschalter ────────────────────────────────────────────── */

  var SCHLUESSEL = 'bs24-bewegung';
  var schalter = document.getElementById('schalter');
  var ruhigGewaehlt = null;
  try { ruhigGewaehlt = localStorage.getItem(SCHLUESSEL); } catch (e) { /* privater Modus */ }

  var systemRuhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ruhig = ruhigGewaehlt === null ? systemRuhig : ruhigGewaehlt === 'aus';

  function schalterZeigen() {
    if (!schalter) return;
    schalter.hidden = false;
    schalter.textContent = ruhig ? 'Bewegung an' : 'Bewegung aus';
    schalter.setAttribute('aria-pressed', ruhig ? 'true' : 'false');
    wurzel.classList.toggle('ruhig', ruhig);
  }
  schalterZeigen();

  if (schalter) {
    schalter.addEventListener('click', function () {
      ruhig = !ruhig;
      try { localStorage.setItem(SCHLUESSEL, ruhig ? 'aus' : 'an'); } catch (e) { /* egal */ }
      schalterZeigen();
      if (!ruhig) { aufbauen(); bild(); }
    });
  }

  /* ── Gemeinsame Rechenkerne (scrollcraft, references/tech.md) ─────── */

  var ENTRY = 0.62, TAIL = 0.26;
  function clamp(v) { return Math.min(1, Math.max(0, v)); }

  /* Fortschritt einer Szene: beginnt beim Hereinkommen, hält am Ende */
  function prog(el) {
    var r = el.getBoundingClientRect();
    var lead = innerHeight * ENTRY;
    var travel = Math.max(1, (r.height - innerHeight) + lead);
    return clamp(clamp((-r.top + lead) / travel) / (1 - TAIL));
  }

  /* Zustandsindex: n Zustände auf die ersten `spread`, Rest ist Halten */
  function phase(p, n, spread) {
    return Math.min(n - 1, Math.floor(clamp(p / (spread || 0.56)) * n));
  }

  /* ── Auftritt der Abschnitte ──────────────────────────────────────── */

  var beobachter = null;

  function aufbauen() {
    var stuecke = document.querySelectorAll('.tritt-auf');
    if (ruhig || !('IntersectionObserver' in window)) {
      for (var i = 0; i < stuecke.length; i++) stuecke[i].classList.add('da');
      return;
    }
    if (beobachter) beobachter.disconnect();
    beobachter = new IntersectionObserver(function (eintraege) {
      for (var j = 0; j < eintraege.length; j++) {
        if (!eintraege[j].isIntersecting) continue;
        eintraege[j].target.classList.add('da');
        beobachter.unobserve(eintraege[j].target);
      }
    }, { rootMargin: '0px 0px -4% 0px', threshold: 0.01 });
    for (var k = 0; k < stuecke.length; k++) beobachter.observe(stuecke[k]);

    // Rettungsleine. Der Auftritt setzt die Stuecke zunaechst auf
    // opacity:0 -- wenn der Beobachter aus irgendeinem Grund nicht
    // ausloest (fremder Browser, Erweiterung, Fehler weiter oben), bliebe
    // die Seite leer. Das ist der einzige Zustand, den es hier nicht geben
    // darf: lieber Text ohne Bewegung als Bewegung ohne Text.
    setTimeout(function () {
      var rest = document.querySelectorAll('.tritt-auf:not(.da)');
      for (var m = 0; m < rest.length; m++) rest[m].classList.add('da');
    }, 2500);
  }
  aufbauen();

  /* ── Szene 04: der Anteilsbalken ──────────────────────────────────── */

  var anteil = document.getElementById('anteil');

  /* ── Szene 06: die Sticky-Bühne ───────────────────────────────────── */

  var buehne = document.getElementById('mehr');
  var ebenen = document.querySelectorAll('#ebenen .ebene');

  /* ── Der eine Handler ─────────────────────────────────────────────── */

  var laeuft = false;

  function bild() {
    laeuft = false;

    if (anteil) {
      // Der Balken füllt sich, sobald die Szene im Blick ist — 0,05 ist
      // der Anteil selbst, nicht ein hübscherer Wert.
      var sichtbar = anteil.getBoundingClientRect().top < innerHeight * 0.9;
      anteil.style.setProperty('--anteil', (ruhig || sichtbar) ? '0.05' : '0');
    }

    if (buehne && ebenen.length && !ruhig) {
      var aktiv = phase(prog(buehne), ebenen.length);
      for (var i = 0; i < ebenen.length; i++) {
        ebenen[i].setAttribute('data-aktiv', i === aktiv ? '1' : '0');
      }
    } else if (ebenen.length) {
      for (var j = 0; j < ebenen.length; j++) ebenen[j].setAttribute('data-aktiv', '1');
    }
  }

  addEventListener('scroll', function () {
    if (!laeuft) { laeuft = true; requestAnimationFrame(bild); }
  }, { passive: true });
  addEventListener('resize', bild, { passive: true });
  addEventListener('orientationchange', function () { setTimeout(bild, 250); });
  bild();

  /* ── Das Anfrageformular ──────────────────────────────────────────── */

  var formular = document.getElementById('anfrage');
  var meldung = document.getElementById('anfrage-meldung');
  var konfig = window.BS24_KONFIG || null;

  function sagen(text, art) {
    if (!meldung) return;
    meldung.textContent = text;
    meldung.className = 'meldung meldung--' + art;
    meldung.hidden = false;
  }

  if (formular) {
    // Ohne hinterlegte Adresse gäbe es keinen Empfänger. Dann ist der
    // ehrlichere Zustand, das Formular gar nicht erst anzubieten, statt
    // eine Absendebestätigung zu zeigen, hinter der nichts steht.
    if (!konfig || !konfig.url || !konfig.schluessel) {
      formular.hidden = true;
      sagen('Das Formular ist auf dieser Umgebung nicht eingerichtet. '
        + 'Bitte schreib uns direkt eine E-Mail.', 'sorge');
    } else {
      formular.addEventListener('submit', function (e) {
        e.preventDefault();
        var d = new FormData(formular);
        var knopf = formular.querySelector('button[type=submit]');

        if (!d.get('datenschutz')) {
          sagen('Ohne die Zustimmung zur Datenschutzerklärung können wir '
            + 'die Anfrage nicht entgegennehmen.', 'sorge');
          return;
        }

        if (knopf) { knopf.disabled = true; }
        sagen('Wird gesendet …', 'gut');

        fetch(konfig.url.replace(/\/+$/, '') + '/rest/v1/rpc/advertising_inquiry_submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': konfig.schluessel,
            'Authorization': 'Bearer ' + konfig.schluessel
          },
          body: JSON.stringify({
            p_kind: 'ad_space',
            p_company_name: d.get('firma') || '',
            p_contact_name: d.get('name') || '',
            p_email: d.get('email') || '',
            p_phone: d.get('telefon') || null,
            p_message: d.get('nachricht') || null,
            p_datenschutz: true,
            p_hp: d.get('hp') || null
          })
        }).then(function (a) {
          return a.json().then(function (koerper) { return { ok: a.ok, koerper: koerper }; });
        }).then(function (r) {
          if (!r.ok) {
            // Die Datenbank formuliert ihre Prüfmeldungen bereits für
            // Menschen ("Bitte den Firmennamen angeben."). Sie hier durch
            // einen allgemeinen Satz zu ersetzen, würde dem Absender die
            // einzige brauchbare Auskunft nehmen.
            throw new Error((r.koerper && (r.koerper.message || r.koerper.hint)) || '');
          }
          var nr = r.koerper && r.koerper.anfrage_nummer;
          formular.reset();
          sagen('Danke — die Anfrage ist da'
            + (nr ? ' (Nummer ' + nr + ')' : '')
            + '. Wir melden uns in der Regel innerhalb eines Werktages.', 'gut');
        }).catch(function (f) {
          sagen((f && f.message)
            ? f.message
            : 'Das hat gerade nicht geklappt. Bitte schreib uns direkt eine '
              + 'E-Mail an boerdesnack24@gmail.com.', 'sorge');
        }).then(function () {
          if (knopf) { knopf.disabled = false; }
        });
      });
    }
  }
})();
