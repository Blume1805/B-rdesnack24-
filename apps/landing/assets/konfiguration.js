/* ──────────────────────────────────────────────────────────────────────
   Verbindung zum Anfrage-Endpunkt.
   
   Beide Werte sind öffentlich: der anon-Schlüssel ist genau dafür gedacht,
   im Browser zu stehen, und liegt ohnehin im ausgelieferten App-Bundle.
   Was er darf, entscheidet die Datenbank (RLS), nicht seine Geheimhaltung.
   Der service_role-Schlüssel gehört NIEMALS hierher.
   
   Solange die Werte leer sind, blendet die Seite das Formular aus und
   nennt den direkten Weg per E-Mail. Das ist Absicht: ein Formular, das
   eine Bestätigung zeigt, hinter der niemand steht, ist schlimmer als
   gar keins.
   
   Beim Ausrollen eintragen — siehe apps/landing/README.md.
   ────────────────────────────────────────────────────────────────────── */
window.BS24_KONFIG = {
  url: '',
  schluessel: ''
};
