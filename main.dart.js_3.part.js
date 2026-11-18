((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,E,B={wg:function wg(d){this.a=d},bvn:function bvn(){},pO:function pO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},yR:function yR(d,e,f){this.c=d
this.d=e
this.a=f},als:function als(d,e){this.c=d
this.a=e},
bVM(d,e,f,g,h,i,j,k){return new B.OX(f,j,e,k,d,i,g,h,null)},
OX:function OX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bsY:function bsY(){},
bVo(d){return new B.zt(d,new A.iw(x.aA),C.dO)},
buJ:function buJ(){},
btS:function btS(){},
Al:function Al(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
buM:function buM(){},
zt:function zt(d,e,f){this.r=d
this.a=e
this.f=f},
aLi:function aLi(d,e,f){this.a=d
this.b=e
this.c=f},
aLj:function aLj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLk:function aLk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGe(){return new B.zu(null)},
zu:function zu(d){this.a=d},
aLp:function aLp(){},
aLo:function aLo(){},
aLn:function aLn(d){this.a=d},
aLm:function aLm(){},
anh:function anh(d,e){this.c=d
this.a=e},
bhv:function bhv(d){this.a=d},
bhu:function bhu(d,e){this.a=d
this.b=e},
bht:function bht(d){this.a=d},
akk:function akk(d){this.a=d},
fF:function fF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aji:function aji(d){this.a=d},
bB2(a8,a9,b0,b1,b2,b3){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$bB2=A.m(function(b4,b5){if(b4===1)return A.n(b5,v)
for(;;)switch(w){case 0:a5=a9.h(0,"jahr")
a6=x.g
a7=a6.a(a9.h(0,"fahrzeuge"))
if(a7==null)a7=C.bm
u=x.P
t=J.cE(a7,u)
a7=a6.a(a9.h(0,"fahrten"))
s=J.cE(a7==null?C.bm:a7,u)
r=B.JF(a9.h(0,"nutzungseinlage"))
q=C.d.a0(B.JF(a9.h(0,"fahrten_ohne_satz")))
p=a8!=null&&a8.length!==0
a7=A.i(a5)
o=A.i(a5)
n=B.bA2(b0)
m=B.bA2(b2)
l=B.bA2(b3)
k=A.i(a5)
j=A.i(a5)
i=Date.now()
i='<!doctype html><html lang="de"><head><meta charset="utf-8">'+("<title>Anlage PKW-Kosten "+a7+"</title>")+'<style>  /* Oben randlos NUR auf der ersten Seite: Dort sitzt der Gold-Balken b\xfcndig\n     am Papierrand. Stand hier vorher ohne die Ausnahme, und damit begann\n     auch jede Folgeseite an der Papierkante. Bislang unauff\xe4llig, weil die\n     Anlage auf eine Seite passt \u2014 beim Bildregister, das umbricht, standen\n     die Unterschriftsfelder dadurch oben angeschnitten. Dieselbe Ursache,\n     also hier gleich mit behoben, bevor die Fahrtentabelle lang genug wird. */\n  @page { size: A4 portrait; margin: 18mm 25mm; }\n  @page :first { margin-top: 0; }\n  * { box-sizing: border-box; }\n  body { font-family: Arial, "Liberation Sans", -apple-system,\n                      "Segoe UI", Roboto, sans-serif;\n         color: #14110E; margin: 0; padding: 0; font-size: 10pt; }\n\n  /* Gold-Balken \xfcber der Breite des Satzspiegels, NICHT randabfallend.\n     Der FIFO-Report zieht ihn \xfcber negative R\xe4nder bis an den Papierrand;\n     im Druck beschneidet Chrome das am Seitenrand, und \xfcbrig blieb ein\n     Balken, der willk\xfcrlich k\xfcrzer war als der Text darunter. Am echten\n     PDF nachgesehen, nicht vermutet. \xdcber den Satzspiegel gezogen sitzt er\n     in jeder Druck-Engine gleich. */\n  .topbar { height: 4mm; background: #FDC102; margin: 0 0 7mm;\n            border-radius: 1pt; }\n  .wrap { max-width: 100%; }\n  .brand { font-weight: 900; letter-spacing: 2px; font-size: 10pt;\n           margin-bottom: 8pt; }\n\n  .head { display: flex; justify-content: space-between;\n          align-items: flex-end; gap: 12mm;\n          border-bottom: 1.5pt solid #FDC102; padding-bottom: 6pt; }\n  h1 { margin: 0 0 4pt 0; font-size: 15pt; font-weight: 800;\n       letter-spacing: 0.2px; color: #B8860B; }\n  .stammdaten { font-size: 9pt; color: #6f6a5b; margin: 0; line-height: 1.45; }\n  /* Kein `nowrap`: Die l\xe4ngste Zeile hing sonst am rechten Rand. Der Block\n     bleibt linksb\xfcndig, damit alle Werte an derselben Kante beginnen. */\n  .meta { font-size: 8.5pt; color: #6f6a5b; text-align: left;\n          max-width: 74mm; line-height: 1.45; }\n  .meta > div { display: flex; gap: 2.5mm; margin-bottom: 1pt; }\n  .meta .meta-label { flex: 0 0 18mm; color: #14110E; font-weight: 700; }\n\n  h2 { font-size: 11pt; margin: 14pt 0 4pt 0; color: #14110E;\n       font-weight: 800;\n       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }\n\n  table { width: 100%; border-collapse: collapse; margin-top: 4pt; }\n  th, td { padding: 3.5pt 6pt; text-align: left;\n           border-bottom: 1pt solid #E8E2D6; vertical-align: top; }\n  thead th { background: #14110E; color: #F9F5EC; font-weight: 700;\n             font-size: 9pt; border-bottom: none; }\n  /* Kopf wiederholen, wenn eine Tabelle umbricht. */\n  thead { display: table-header-group; }\n  tr { page-break-inside: avoid; }\n  .l { text-align: left; }\n  .c { text-align: center; }\n  .r { text-align: right; white-space: nowrap; }\n  .klein { font-weight: 400; font-size: 7.5pt; color: #C9C4BC; }\n  .summe td { background: #FFF5CC; font-weight: 800;\n              border-top: 1pt solid #14110E;\n              border-bottom: 1pt solid #14110E; }\n  .leer { color: #6f6a5b; font-style: italic; }\n\n  /* Hinweise: grau, kursiv, zwei Punkt kleiner als der Fliesstext. */\n  .hinweis { font-size: 8pt; color: #595959; font-style: italic;\n             margin: 5pt 0 0 0; line-height: 1.4; }\n  .warnung { font-size: 9pt; color: #B2311C; font-weight: 700;\n             margin: 6pt 0 0 0; }\n\n  /* Freigabe-Stempel, Form wie im FIFO-Report. */\n  section.stamp { margin: 10pt 0 2pt 0; padding: 6pt 10pt;\n                  border: 1pt solid #5C9A3F; border-radius: 6pt;\n                  background: #EEF6E8; }\n  section.stamp .stamp-badge { display: inline-block; font-weight: 800;\n                               letter-spacing: 1px; color: #3E7A25;\n                               font-size: 11pt; }\n  section.stamp .stamp-note { color: #14110E; font-size: 9pt;\n                              margin-top: 2pt; }\n\n  /* Unterschriften mit Vorlauf, damit von Hand gezeichnet werden kann. */\n  .unterschriften { display: flex; gap: 18mm; margin-top: 18mm;\n                    page-break-inside: avoid; }\n  .feld { flex: 1; }\n  .sig-box { height: 22mm; border: 1pt solid #E8E2D6; border-radius: 6pt;\n             background: #FAF6ED; padding: 5pt; display: flex;\n             align-items: flex-end; }\n  .signatur { max-height: 18mm; max-width: 100%; object-fit: contain; }\n  .linie { border-bottom: 1pt solid #14110E; height: 0; margin-top: 3pt; }\n  .name { font-size: 9.5pt; font-weight: 700; margin-top: 3pt; }\n  .rolle { font-size: 8pt; color: #6f6a5b; }\n\n  .fuss { font-size: 7.5pt; color: #6f6a5b; margin-top: 12mm;\n          border-top: 1pt solid #E8E2D6; padding-top: 4pt; }\n</style></head><body onload="window.print()"><div class="topbar"></div><div class="wrap"><div class="brand">B\xd6RDESNACK24</div><div class="head"><div>'+("<h1>Anlage zur Ermittlung der individuellen PKW-Kosten "+o+"</h1>")+'<p class="stammdaten">'+(n+"<br>")+("Steuernummer: "+m+"<br>")+("USt-IdNr.: "+l)+'</p></div><div class="meta">'+('<div><span class="meta-label">Zeitraum</span>01.01.'+k+" bis 31.12."+j+"</div>")+'<div><span class="meta-label">Ermittlung</span>Bruttokosten je gefahrenem Kilometer</div>'+('<div><span class="meta-label">Erstellt am</span>'+$.dp().al(new A.aZ(i,0,!1))+"</div>")+"</div></div>"
a7=(p?i+'<section class="stamp"><span class="stamp-badge">FREIGEGEBEN</span><div class="stamp-note">Von beiden Gesellschaftern signiert und freigegeben. Korrekturen sind f\xfcr dieses Jahr gesperrt.</div></section>':i)+'<h2>Fahrzeugkosten und Satz je Kilometer</h2><table><thead><tr><th class="l">Position</th>'
for(o=t.$ti,n=o.i("b8<an.E>"),m=new A.b8(t,t.gp(0),n),o=o.i("an.E");m.t();){l=m.d
l=A.i(J.Z(l==null?o.a(l):l,"kennzeichen"))
l=A.ax(l,"&","&amp;")
l=A.ax(l,"<","&lt;")
l=A.ax(l,">","&gt;")
a7+='<th class="r">'+A.ax(l,'"',"&quot;")+"</th>"}a7+="</tr></thead><tbody>"
for(h=0;h<8;++h){g=D.ahv[h]
m=A.ax(g.b,"&","&amp;")
m=A.ax(m,"<","&lt;")
m=A.ax(m,">","&gt;")
a7+='<tr><td class="l">'+A.ax(m,'"',"&quot;")+"</td>"
for(m=new A.b8(t,t.gp(0),n);m.t();){l=m.d
l=a6.a(J.Z(l==null?o.a(l):l,"kosten"))
f=J.cE(l==null?C.bm:l,u)
e=new A.bc(f,new B.buv(g),f.$ti.i("bc<an.E>")).fA(0,0,new B.buw())
a7+='<td class="r">'+(e===0?"\u2014":$.d2().al(e))+"</td>"}a7+="</tr>"}a6=a7+'<tr class="summe"><td class="l">Gesamtkosten (brutto)</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();a6=u){u=a7.d
u=B.JF(J.Z(u==null?o.a(u):u,"gesamtkosten"))
u=a6+('<td class="r">'+$.d2().al(u)+"</td>")}a6+='</tr><tr><td class="l">Kilometerstand 01.01.</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.brX(J.Z(u==null?o.a(u):u,"km_stand_anfang"))+"</td>"}a6+='</tr><tr><td class="l">Kilometerstand 31.12.</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.brX(J.Z(u==null?o.a(u):u,"km_stand_ende"))+"</td>"}a6+='</tr><tr><td class="l">Gefahrene Kilometer</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.brX(J.Z(u==null?o.a(u):u,"km_gefahren"))+"</td>"}a6+='</tr><tr class="summe"><td class="l">Kosten je Kilometer</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bKK(J.Z(u==null?o.a(u):u,"satz_je_km"))+"</td>"}a7=t.a
u=J.V(a7)
a6=a6+'</tr></tbody></table><p class="hinweis">Der Satz je Kilometer ergibt sich aus den Gesamtkosten geteilt durch die in diesem Jahr gefahrenen Kilometer. Die Betr\xe4ge sind Bruttobetr\xe4ge: Bei einem privaten Fahrzeug besteht kein Vorsteuerabzug, die Umsatzsteuer geh\xf6rt damit zu den tats\xe4chlich getragenen Kosten.</p><h2>Betrieblich gefahrene Strecken</h2><table class="fahrten"><thead><tr><th class="l" rowspan="2">Datum</th><th class="l" rowspan="2">Anlass der Fahrt</th><th class="r" rowspan="2">Kilometer<br><span class="klein">Hin- und R\xfcckweg</span></th>'+('<th class="c" colspan="'+u.gp(a7)+'">Kosten je Kilometer</th>')+'<th class="r" rowspan="2">Betrag</th></tr><tr>'
for(m=new A.b8(t,t.gp(0),n);m.t();){l=m.d
l=A.i(J.Z(l==null?o.a(l):l,"kennzeichen"))
l=A.ax(l,"&","&amp;")
l=A.ax(l,"<","&lt;")
l=A.ax(l,">","&gt;")
a6+='<th class="r">'+A.ax(l,'"',"&quot;")+"</th>"}a6+="</tr></thead><tbody>"
if(s.gp(0)===0)a6+='<tr><td class="l leer" colspan="'+(4+u.gp(a7))+'">F\xfcr '+A.i(a5)+" ist keine betriebliche Fahrt erfasst.</td></tr>"
for(m=s.$ti,l=new A.b8(s,s.gp(0),m.i("b8<an.E>")),m=m.i("an.E");l.t();a6=k){k=l.d
if(k==null)k=m.a(k)
j=J.V(k)
i=j.h(k,"fahrt_datum")
d=A.eR(A.i(i==null?"":i))
i=d==null?"":$.dp().al(d)
a0=j.h(k,"anlass")
a0=A.i(a0==null?"":a0)
a0=A.ax(a0,"&","&amp;")
a0=A.ax(a0,"<","&lt;")
a0=A.ax(a0,">","&gt;")
a6=a6+"<tr>"+('<td class="l">'+i+"</td>")+('<td class="l">'+A.ax(a0,'"',"&quot;")+"</td>")+('<td class="r">'+B.brX(j.h(k,"kilometer"))+"</td>")
for(i=new A.b8(t,t.gp(0),n);i.t();){a0=i.d
a6+='<td class="r">'+(J.d(J.Z(a0==null?o.a(a0):a0,"id"),j.h(k,"pkw_id"))?B.bKK(j.h(k,"satz_je_km")):"")+"</td>"}k=j.h(k,"betrag")
if(k==null)k="\u2014"
else{k=B.JF(k)
k=$.d2().al(k)}k=a6+('<td class="r">'+k+"</td></tr>")}a6=a6+('<tr class="summe"><td class="l" colspan="'+(3+u.gp(a7))+'">Nutzungseinlage</td>')+('<td class="r">'+$.d2().al(r)+"</td></tr>")+"</tbody></table>"
if(q>0){a7=q===1?"":"en"
a7=a6+('<p class="warnung">'+q+" Fahrt"+a7+" ohne Kilometersatz: F\xfcr das betreffende Fahrzeug fehlen Kilometerst\xe4nde oder Kosten. Diese Fahrten sind in der Summe nicht enthalten.</p>")
a6=a7}a6+='<div class="unterschriften">'
for(a7=b1.length,h=0;h<b1.length;b1.length===a7||(0,A.G)(b1),++h){a1=b1[h]
u=J.V(a1)
o=u.h(a1,"full_name")
a2=A.i(o==null?"":o)
u=u.h(a1,"role_label")
a3=A.i(u==null?"":u)
a4=p?B.c19(a8,a2):null
if(a4==null)u=""
else{u=A.ax(a4,"&","&amp;")
u=A.ax(u,"<","&lt;")
u=A.ax(u,">","&gt;")
u='<img class="signatur" src="'+A.ax(u,'"',"&quot;")+'" alt="">'}o=A.ax(a2,"&","&amp;")
o=A.ax(o,"<","&lt;")
o=A.ax(o,">","&gt;")
o=A.ax(o,'"',"&quot;")
n=A.ax(a3,"&","&amp;")
n=A.ax(n,"<","&lt;")
n=A.ax(n,">","&gt;")
a6=a6+'<div class="feld"><div class="sig-box">'+u+'</div><div class="linie"></div>'+('<div class="name">'+o+"</div>")+('<div class="rolle">'+A.ax(n,'"',"&quot;")+"</div>")+"</div>"}a6+='</div><p class="fuss">Die Betr\xe4ge beruhen auf den in der App erfassten Kosten, Kilometerst\xe4nden und Fahrten der B\xf6rdesnack24 GbR. Alle Angaben brutto.</p></div></body></html>'
a6=(self.URL||self.webkitURL).createObjectURL(B.bwF([a6.charCodeAt(0)==0?a6:a6],"text/html"))
a6.toString
a7=window
a7.toString
C.ZM.ah4(a7,a6,"_blank")
return A.o(null,v)}})
return A.p($async$bB2,v)},
c19(d,e){var w,v,u,t,s
if(d==null)return null
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.G)(d),++v){u=d[v]
t=u.h(0,"full_name")
if(A.i(t==null?"":t)===e){t=u.h(0,"signature_url")
s=A.i(t==null?"":t)
if(s.length!==0)return s}}return null},
JF(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fT(J.al(d))
return w==null?0:w},
brX(d){var w,v,u
if(d==null)return"\u2014"
w=B.JF(d)
if(w===C.d.qO(w))v=C.e.j(C.d.aO(w))
else{u=C.d.ae(w,1)
v=A.ax(u,".",",")}return v+" km"},
bKK(d){var w
if(d==null)return"\u2014"
w=C.d.ae(B.JF(d),4)
return A.ax(w,".",",")+" \u20ac"},
bA2(d){var w=A.ax(d,"&","&amp;")
w=A.ax(w,"<","&lt;")
w=A.ax(w,">","&gt;")
return A.ax(w,'"',"&quot;")},
buv:function buv(d){this.a=d},
buw:function buw(){},
uf(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fT(J.al(d))
return w==null?0:w},
c3v(d){var w
if(d==null)w="\u2014"
else{w=C.d.ae(B.uf(d),4)
w=A.ax(w,".",",")+" \u20ac"}return w},
brY(d){var w,v,u
if(d==null)return"\u2014"
w=B.uf(d)
if(w===C.d.qO(w))v=C.e.j(C.d.aO(w))
else{u=C.d.ae(w,1)
v=A.ax(u,".",",")}return v+" km"},
bsC(d){return J.d(d==null?null:d.h(0,"gesperrt"),!0)},
av9(d,e){var w=null,v=J.al(e),u=C.c.n(v,"freigegeben und unterschrieben"),t=d.O(x.q).f,s=A.j(u?"Diese Anlage ist freigegeben und unterschrieben. Korrekturen sind nicht mehr m\xf6glich.":"Speichern fehlgeschlagen: "+v,w,w,w,w,w,w,w)
t.b2(A.c6(w,w,w,w,w,C.n,w,s,w,A.e4(0,0,0,u?6:4),w,w,w,w,w,w,w,w,w,w))},
xx:function xx(d){this.a=d},
Tm:function Tm(d){var _=this
_.w=$
_.x=null
_.y=d
_.z=!1
_.Q=null
_.d=$
_.c=_.a=null},
b3v:function b3v(d,e){this.a=d
this.b=e},
b3w:function b3w(d){this.a=d},
b3x:function b3x(d){this.a=d},
b3r:function b3r(d){this.a=d},
b3u:function b3u(d){this.a=d},
b3s:function b3s(d){this.a=d},
b3t:function b3t(d){this.a=d},
amm:function amm(d,e,f){this.c=d
this.d=e
this.a=f},
bfG:function bfG(d,e){this.a=d
this.b=e},
aky:function aky(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
akx:function akx(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
bbP:function bbP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbQ:function bbQ(d,e,f){this.a=d
this.b=e
this.c=f},
bbR:function bbR(d,e,f){this.a=d
this.b=e
this.c=f},
bbI:function bbI(d,e,f){this.a=d
this.b=e
this.c=f},
bbH:function bbH(d,e,f){this.a=d
this.b=e
this.c=f},
bbD:function bbD(d,e){this.a=d
this.b=e},
bbC:function bbC(d,e){this.a=d
this.b=e},
bbE:function bbE(d){this.a=d},
bbF:function bbF(d){this.a=d},
bbG:function bbG(d){this.a=d},
bbB:function bbB(d,e,f){this.a=d
this.b=e
this.c=f},
bbz:function bbz(d){this.a=d},
bbA:function bbA(d){this.a=d},
bbO:function bbO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbN:function bbN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbL:function bbL(d){this.a=d},
bbM:function bbM(d){this.a=d},
akw:function akw(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
bbx:function bbx(d,e,f){this.a=d
this.b=e
this.c=f},
bby:function bby(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbo:function bbo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbn:function bbn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbi:function bbi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbh:function bbh(d,e){this.a=d
this.b=e},
bbj:function bbj(d,e){this.a=d
this.b=e},
bbg:function bbg(d,e){this.a=d
this.b=e},
bbk:function bbk(d){this.a=d},
bbl:function bbl(d){this.a=d},
bbm:function bbm(d){this.a=d},
bbw:function bbw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbv:function bbv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbr:function bbr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbq:function bbq(d,e){this.a=d
this.b=e},
bbs:function bbs(d,e){this.a=d
this.b=e},
bbp:function bbp(d,e){this.a=d
this.b=e},
bbt:function bbt(d){this.a=d},
bbu:function bbu(d){this.a=d},
ati:function ati(d,e){this.c=d
this.a=e},
bq0:function bq0(){},
bq1:function bq1(){},
amn:function amn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
arr:function arr(d,e,f){this.c=d
this.d=e
this.a=f},
bo3:function bo3(){},
bo4:function bo4(){},
Cy:function Cy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aif:function aif(d,e,f){this.c=d
this.d=e
this.a=f},
Vy:function Vy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0g:function a0g(d){this.a=d},
awn:function awn(d){this.a=d},
awm:function awm(){},
br3:function br3(){},
br2:function br2(){},
a4J:function a4J(d){this.a=d},
aC7:function aC7(){},
aC6:function aC6(){},
aC5:function aC5(d){this.a=d},
aC4:function aC4(d){this.a=d},
akj:function akj(d){this.a=d},
ah6:function ah6(d,e){this.e=d
this.a=e},
b3I:function b3I(){},
b3H:function b3H(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b3F:function b3F(d,e,f){this.a=d
this.b=e
this.c=f},
b3G:function b3G(d,e,f){this.a=d
this.b=e
this.c=f},
b3E:function b3E(d){this.a=d},
b3C:function b3C(d,e){this.a=d
this.b=e},
b3A:function b3A(d){this.a=d},
b3B:function b3B(d,e){this.a=d
this.b=e},
b3D:function b3D(){},
Ci:function Ci(d){this.a=d},
Y8:function Y8(){var _=this
_.w=null
_.x=!0
_.y=!1
_.z=null
_.d=$
_.c=_.a=null},
bng:function bng(d,e){this.a=d
this.b=e},
bnh:function bnh(d,e){this.a=d
this.b=e},
bnl:function bnl(d){this.a=d},
bnm:function bnm(d,e,f){this.a=d
this.b=e
this.c=f},
bnn:function bnn(d,e){this.a=d
this.b=e},
bno:function bno(d){this.a=d},
bnp:function bnp(d){this.a=d},
bnq:function bnq(d){this.a=d},
bnr:function bnr(d){this.a=d},
bns:function bns(d,e){this.a=d
this.b=e},
bnt:function bnt(d){this.a=d},
bnx:function bnx(){},
bny:function bny(d){this.a=d},
bnz:function bnz(d){this.a=d},
ajq:function ajq(d,e){this.c=d
this.a=e},
KN:function KN(d){this.a=d},
Ty:function Ty(){var _=this
_.w=null
_.x=!1
_.d=$
_.c=_.a=null},
b49:function b49(d){this.a=d},
b4a:function b4a(d,e){this.a=d
this.b=e},
b4b:function b4b(d){this.a=d},
Lc:function Lc(d){this.a=d},
TS:function TS(){var _=this
_.d=_.w=$
_.c=_.a=null},
b5K:function b5K(d){this.a=d},
b5J:function b5J(){},
b5P:function b5P(d){this.a=d},
b5L:function b5L(d){this.a=d},
b5O:function b5O(d){this.a=d},
b5M:function b5M(){},
b5N:function b5N(d,e){this.a=d
this.b=e},
ai2:function ai2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1v:function a1v(d){this.a=d},
ayS:function ayS(){},
ayR:function ayR(){},
ayT:function ayT(){},
ayQ:function ayQ(){},
Bq:function Bq(d){this.a=d},
TV:function TV(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
b5T:function b5T(d){this.a=d},
b5S:function b5S(d,e){this.a=d
this.b=e},
b5U:function b5U(){},
a1R:function a1R(d){this.a=d},
azv:function azv(){},
azu:function azu(){},
azw:function azw(){},
azt:function azt(){},
Bt:function Bt(d){this.a=d},
U5:function U5(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.Q="exterior"
_.as=null
_.d=$
_.c=_.a=null},
b6G:function b6G(d){this.a=d},
b6F:function b6F(d,e){this.a=d
this.b=e},
b6H:function b6H(d){this.a=d},
b6E:function b6E(d,e){this.a=d
this.b=e},
b6I:function b6I(d){this.a=d},
c_m(d){switch(d){case"not_received":return new A.jO(C.EL,"Produkt nicht erhalten")
case"damaged":return new A.jO(C.Eu,"Produkt besch\xe4digt")
case"wrong_product":return new A.jO(C.EN,"Falsches Produkt")
default:return new A.jO(C.xW,"Sonstiges")}},
c_n(d){switch(d){case"in_progress":return new A.p6(C.cD,"IN BEARBEITUNG")
case"resolved":return new A.p6(C.aE,"ERLEDIGT")
case"rejected":return new A.p6(C.ak,"ABGELEHNT")
default:return new A.p6(C.j,"OFFEN")}},
LM:function LM(d){this.a=d},
U7:function U7(){var _=this
_.d=_.w=$
_.c=_.a=null},
b6U:function b6U(d,e){this.a=d
this.b=e},
b6S:function b6S(d){this.a=d},
b6T:function b6T(d){this.a=d},
b6V:function b6V(d){this.a=d},
b7_:function b7_(d){this.a=d},
b6Z:function b6Z(d){this.a=d},
b6W:function b6W(d){this.a=d},
b6Y:function b6Y(){},
b6X:function b6X(d,e){this.a=d
this.b=e},
HH:function HH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b6P:function b6P(d){this.a=d},
b6Q:function b6Q(d){this.a=d},
b6R:function b6R(d){this.a=d},
a4I:function a4I(d){this.a=d},
aC2:function aC2(){},
aC1:function aC1(){},
aC3:function aC3(){},
aC0:function aC0(){},
BB:function BB(d){this.a=d},
UN:function UN(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.as="mhd"
_.ax=_.at=null
_.d=$
_.c=_.a=null},
b9J:function b9J(d){this.a=d},
b9I:function b9I(d,e){this.a=d
this.b=e},
b9K:function b9K(d){this.a=d},
b9H:function b9H(d,e){this.a=d
this.b=e},
b9E:function b9E(d,e,f){this.a=d
this.b=e
this.c=f},
b9D:function b9D(d){this.a=d},
b9L:function b9L(){},
b9M:function b9M(){},
b9N:function b9N(){},
b9O:function b9O(d){this.a=d},
b9G:function b9G(d,e){this.a=d
this.b=e},
b9P:function b9P(d,e){this.a=d
this.b=e},
b9F:function b9F(d,e){this.a=d
this.b=e},
b9Q:function b9Q(d){this.a=d},
c2z(d){switch(d){case"description":return D.aaD
case"health_and_safety":return D.aaQ
case"medical_information":return D.abx
case"cleaning_services":return D.Ez
case"store":return D.abc
case"work":return D.aap
case"local_shipping":return D.aaX
case"build":return D.Ev
case"shield":return C.nV
case"gavel":return C.EC
case"folder_open":return D.aaM
default:return D.EB}},
brr:function brr(){},
brq:function brq(d){this.a=d},
brE:function brE(){},
bst:function bst(){},
Mt:function Mt(d){this.a=d},
ajT:function ajT(){var _=this
_.w=""
_.x=null
_.y=!1
_.d=$
_.c=_.a=null},
baA:function baA(d){this.a=d},
baw:function baw(){},
bax:function bax(){},
bay:function bay(d,e){this.a=d
this.b=e},
baz:function baz(d,e){this.a=d
this.b=e},
bab:function bab(){},
bac:function bac(){},
bae:function bae(){},
bad:function bad(){},
baa:function baa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ba9:function ba9(){},
ba8:function ba8(){},
ba7:function ba7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b9X:function b9X(d){this.a=d},
b9Y:function b9Y(){},
b9Z:function b9Z(d){this.a=d},
ba6:function ba6(d){this.a=d},
ba_:function ba_(d){this.a=d},
b9W:function b9W(d,e){this.a=d
this.b=e},
ba0:function ba0(d){this.a=d},
b9V:function b9V(d,e){this.a=d
this.b=e},
ba1:function ba1(d,e,f){this.a=d
this.b=e
this.c=f},
ba2:function ba2(d,e,f){this.a=d
this.b=e
this.c=f},
ba3:function ba3(d,e,f){this.a=d
this.b=e
this.c=f},
ba4:function ba4(d,e,f){this.a=d
this.b=e
this.c=f},
ba5:function ba5(d,e,f){this.a=d
this.b=e
this.c=f},
bav:function bav(d,e){this.a=d
this.b=e},
bat:function bat(d){this.a=d},
bau:function bau(d){this.a=d},
bas:function bas(d,e){this.a=d
this.b=e},
bar:function bar(d,e){this.a=d
this.b=e},
bao:function bao(d,e,f){this.a=d
this.b=e
this.c=f},
ban:function ban(d,e,f){this.a=d
this.b=e
this.c=f},
bap:function bap(d){this.a=d},
baq:function baq(d){this.a=d},
bal:function bal(d){this.a=d},
bam:function bam(d){this.a=d},
bak:function bak(d,e,f){this.a=d
this.b=e
this.c=f},
baj:function baj(d,e,f){this.a=d
this.b=e
this.c=f},
bag:function bag(d,e){this.a=d
this.b=e},
baf:function baf(d,e){this.a=d
this.b=e},
bah:function bah(d){this.a=d},
bai:function bai(d){this.a=d},
aqA:function aqA(d,e){this.c=d
this.a=e},
al5:function al5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcU:function bcU(d){this.a=d},
bcV:function bcV(d,e){this.a=d
this.b=e},
al6:function al6(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcW:function bcW(){},
bcX:function bcX(d,e){this.a=d
this.b=e},
bcY:function bcY(d,e){this.a=d
this.b=e},
bcZ:function bcZ(d,e){this.a=d
this.b=e},
bd_:function bd_(d,e){this.a=d
this.b=e},
bd0:function bd0(d,e){this.a=d
this.b=e},
ajS:function ajS(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
b9U:function b9U(){},
b9T:function b9T(){},
b9S:function b9S(){},
ar4:function ar4(d,e){this.e=d
this.a=e},
bnc:function bnc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
akt:function akt(d,e){this.c=d
this.a=e},
c7j(d){var w
A:{if("system_admin"===d){w="Administration"
break A}if("shareholder"===d){w="Gesellschafter"
break A}if("employee"===d){w="Mitarbeiter"
break A}w=d==null?"":d
break A}return w},
c7F(d){var w
A:{if("active"===d){w="aktiv"
break A}if("invited"===d){w="eingeladen"
break A}if("deactivated"===d){w="deaktiviert"
break A}w=d==null?"":d
break A}return w},
bsi:function bsi(){},
a4U:function a4U(d){this.a=d},
aDN:function aDN(d,e,f){this.a=d
this.b=e
this.c=f},
aDQ:function aDQ(){},
aDP:function aDP(){},
aDO:function aDO(){},
aDM:function aDM(){},
aDL:function aDL(d){this.a=d},
aDK:function aDK(){},
amc:function amc(d,e,f){this.a=d
this.b=e
this.c=f},
BT:function BT(d){this.a=d},
VP:function VP(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.c=_.a=null},
bfo:function bfo(){},
bfp:function bfp(d,e){this.a=d
this.b=e},
bfn:function bfn(d,e,f){this.a=d
this.b=e
this.c=f},
a5c:function a5c(d){this.a=d},
aF8:function aF8(){},
aF7:function aF7(){},
aF9:function aF9(){},
aF6:function aF6(){},
BK:function BK(d){this.a=d},
V7:function V7(d,e,f,g,h,i){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.at=_.as=null
_.ax=!0
_.ay=i
_.ch=null
_.d=$
_.c=_.a=null},
bc8:function bc8(d,e){this.a=d
this.b=e},
bc9:function bc9(d,e){this.a=d
this.b=e},
bcf:function bcf(d){this.a=d},
bce:function bce(d,e){this.a=d
this.b=e},
bcg:function bcg(d){this.a=d},
bcc:function bcc(d){this.a=d},
bca:function bca(d,e){this.a=d
this.b=e},
bcd:function bcd(){},
bch:function bch(){},
bci:function bci(){},
bcj:function bcj(){},
bck:function bck(){},
bcl:function bcl(d){this.a=d},
bcb:function bcb(d,e){this.a=d
this.b=e},
bux(e1,e2,e3,e4,e5,e6){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$bux=A.m(function(e7,e8){if(e7===1)return A.n(e8,v)
for(;;)switch(w){case 0:d8=x.N
d9=x.D
e0=A.z(d8,d9)
for(u=e4.$ti,t=new A.b8(e4,e4.gp(0),u.i("b8<an.E>")),u=u.i("an.E");t.t();){s=t.d
if(s==null)s=u.a(s)
r=J.Z(s,"product_id")
q=r==null?null:J.al(r)
if(q==null)q=""
J.e2(e0.cl(0,q,new B.buy()),s)}p=A.z(d8,d9)
for(d8=J.cy(e3),d9=d8.gX(e3);d9.t();){u=d9.gN(d9)
t=J.Z(u,"product_id")
q=t==null?null:J.al(t)
if(q==null)q=""
J.e2(p.cl(0,q,new B.buz()),u)}o=new B.buG()
n=new B.buE()
m=new B.buC()
l=new B.buD()
k=new A.di("")
for(d9=new A.e7(e0,e0.$ti.i("e7<1,2>")).gX(0);d9.t();){j=d9.d
i=j.b
u=J.V(i)
if(u.gZ(i))continue
t=J.Z(u.ga2(i),"product_name")
t=t==null?null:J.al(t)
if(t==null)t=""
t=A.ax(t,"&","&amp;")
t=A.ax(t,"<","&lt;")
h=A.ax(t,">","&gt;")
t=J.Z(u.ga2(i),"sku")
t=t==null?null:J.al(t)
if(t==null)t=""
t=A.ax(t,"&","&amp;")
t=A.ax(t,"<","&lt;")
g=A.ax(t,">","&gt;")
f=p.h(0,j.a)
if(f==null)f=C.cp
e=n.$2(f,"remaining_qty")
d=o.$2(f,"lot_gross")
a0=o.$2(f,"lot_discount")
a1=o.$2(f,"lot_net")
t=A.i(e)
s=(k.a+='<section class="product">')+('<div class="prod-head"><div><div class="prod-name">'+h+'</div><div class="prod-sku">SKU: '+g+'</div></div><div class="prod-end">Endbestand: <b>'+t+"</b></div></div>")
k.a=s
s+="<h3>Bewegungen im Zeitraum</h3>"
k.a=s
k.a=s+'<table class="pos"><thead><tr><th>Datum</th><th>Vorgang</th><th class="num">Menge</th><th class="num">EK/Stk.</th><th>Rechnung</th><th>Rg-Datum</th><th>MHD</th><th>Bemerkung</th></tr></thead><tbody>'
for(u=u.gX(i);u.t();){s=u.gN(u)
r=J.V(s)
a2=r.h(s,"type")
a3=a2==null?null:J.al(a2)
if(a3==null)a3=""
a2=A.b3(r.h(s,"quantity_delta"))
a4=a2==null?null:C.d.a0(a2)
if(a4==null)a4=0
if(a3==="refill")a5="in"
else a5=a3==="disposal"?"out":""
a2=A.i(m.$1(r.h(s,"occurred_at")))
a6=l.$1(a3)
a6=A.ax(a6,"&","&amp;")
a6=A.ax(a6,"<","&lt;")
a6=A.ax(a6,">","&gt;")
a7=A.i(a4>0?"+"+a4:a4)
if(r.h(s,"unit_cost")==null)a8="\u2014"
else{a8=A.fH(r.h(s,"unit_cost"))
a8=$.d2().al(a8)}a9=r.h(s,"invoice_number")
a9=a9==null?null:J.al(a9)
if(a9==null)a9="\u2014"
a9=A.ax(a9,"&","&amp;")
a9=A.ax(a9,"<","&lt;")
a9=A.ax(a9,">","&gt;")
b0=A.i(m.$1(r.h(s,"invoice_date")))
b1=A.i(m.$1(r.h(s,"lot_expiry")))
s=r.h(s,"reason")
s=s==null?null:J.al(s)
if(s==null)s=""
s=A.ax(s,"&","&amp;")
s=A.ax(s,"<","&lt;")
s='<tr class="'+a5+'"><td>'+a2+'</td><td class="strong">'+a6+'</td><td class="num strong">'+a7+'</td><td class="num">'+a8+"</td><td>"+a9+"</td><td>"+b0+"</td><td>"+b1+'</td><td class="muted">'+A.ax(s,">","&gt;")+"</td></tr>"
k.a+=s}u=(k.a+="</tbody></table>")+"<h3>FIFO-Restlots am Stichtag</h3>"
k.a=u
k.a=u+'<table class="pos"><thead><tr><th>Rechnung</th><th>Rg-Datum</th><th class="num">Rest</th><th class="num">EK/Stk.</th><th>MHD</th><th class="num">Restlaufzeit</th><th class="num">Abschlag %</th><th class="num">AK-Wert</th><th class="num">Abschlag \u20ac</th><th class="num">Bilanz</th></tr></thead><tbody>'
u=J.V(f)
if(u.gZ(f))u=k.a+='<tr><td colspan="10" class="muted">Endbestand 0 \u2014 keine Bewertung.</td></tr>'
else{for(u=u.gX(f);u.t();){s=u.gN(u)
r=J.V(s)
a2=A.b3(r.h(s,"mhd_pct"))
b2=a2==null?null:C.d.a0(a2)
if(b2==null)b2=0
b3=b2>=20
a2=A.b3(r.h(s,"lot_discount"))
b4=a2==null?null:a2
if(b4==null)b4=0
a2=r.h(s,"invoice_number")
a2=a2==null?null:J.al(a2)
if(a2==null)a2="\u2014"
a2=A.ax(a2,"&","&amp;")
a2=A.ax(a2,"<","&lt;")
a2=A.ax(a2,">","&gt;")
a6=A.i(m.$1(r.h(s,"invoice_date")))
a7=A.i(r.h(s,"remaining_qty"))
a8=A.b3(r.h(s,"unit_cost"))
if(a8==null)a8=null
if(a8==null)a8=0
a9=$.d2()
a8=a9.al(a8)
b0=A.i(m.$1(r.h(s,"lot_expiry")))
b1=r.h(s,"mhd_days_left")==null?"\u2014":A.i(r.h(s,"mhd_days_left"))+"d"
b5=b3?"warn":"strong"
b6=A.b3(r.h(s,"lot_gross"))
if(b6==null)b6=null
b6=a9.al(b6==null?0:b6)
b7=b3?"warn":""
b8=b4===0?"\u2014":"\u2212 "+a9.al(b4)
s=A.b3(r.h(s,"lot_net"))
if(s==null)s=null
s="<tr><td>"+a2+"</td><td>"+a6+'</td><td class="num strong">'+a7+'</td><td class="num">'+a8+"</td><td>"+b0+'</td><td class="num">'+b1+'</td><td class="num '+b5+'">'+b2+' %</td><td class="num">'+b6+'</td><td class="num '+b7+'">'+b8+'</td><td class="num strong">'+a9.al(s==null?0:s)+"</td></tr>"
k.a+=s}u=$.d2()
s=u.al(d)
r=a0===0?"\u2014":"\u2212 "+u.al(a0)
u='<tr class="sum"><td colspan="2"><b>Summe '+h+'</b></td><td class="num strong">'+t+'</td><td class="num" colspan="4"></td><td class="num strong">'+s+'</td><td class="num warn strong">'+r+'</td><td class="num strong">'+u.al(a1)+"</td></tr>"
u=k.a+=u}u+="</tbody></table>"
k.a=u
k.a=u+"</section>"}b9=n.$2(e3,"remaining_qty")
c0=o.$2(e3,"lot_gross")
c1=o.$2(e3,"lot_discount")
c2=o.$2(e3,"lot_net")
c3=d8.eP(e3,new B.buA(),x.T).hD(0).a
c4=new A.di("")
c4.a=y.k
d8=$.d2()
d9=d8.al(c0)
u=c1===0?"\u2014 0,00 \u20ac":"\u2212 "+d8.al(c1)
c4.a=y.k+('<div class="kpis"><span><b>'+c3+"</b> Produkte im Bestand</span><span><b>"+A.i(b9)+"</b> Einheiten gesamt</span><span>Anschaffungskosten netto <b>"+d9+'</b></span><span class="warn">MHD-Abschlag <b>'+u+"</b></span><span>Bilanzwert netto <b>"+d8.al(c2)+"</b></span></div>")
c5=new A.di("")
c5.a='<section class="matrix-block">'
c5.a='<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2>'
c5.a=y.c
d8=c5.a=y.c+'<table class="pos matrix"><thead><tr><th>Rest-MHD am Stichtag</th><th>Typischer Bewertungsansatz</th><th class="num">B\xf6rdesnack24 wendet an</th><th>Begr\xfcndung</th></tr></thead><tbody>'
for(c6=0;c6<5;++c6){c7=D.akw[c6]
c8=c7[2]
c9=c8==="0 %"?"strong":"strong warn"
d8=c7[0]
d8=A.ax(d8,"&","&amp;")
d8=A.ax(d8,"<","&lt;")
d8=A.ax(d8,">","&gt;")
d9=c7[1]
d9=A.ax(d9,"&","&amp;")
d9=A.ax(d9,"<","&lt;")
d9=A.ax(d9,">","&gt;")
u=A.ax(c8,"&","&amp;")
u=A.ax(u,"<","&lt;")
u=A.ax(u,">","&gt;")
t=c7[3]
t=A.ax(t,"&","&amp;")
t=A.ax(t,"<","&lt;")
d8='<tr><td class="strong">'+d8+"</td><td>"+d9+'</td><td class="num '+c9+'">'+u+"</td><td>"+A.ax(t,">","&gt;")+"</td></tr>"
d8=c5.a+=d8}c5.a=d8+"</tbody></table></section>"
d0=new A.aZ(Date.now(),0,!1)
d1=new A.di("")
if(e1!=null&&e1.ev(e1,new B.buB())){d1.a='<section class="stamp">'
d1.a='<section class="stamp"><div class="stamp-badge">FREIGEGEBEN</div>'
d1.a='<section class="stamp"><div class="stamp-badge">FREIGEGEBEN</div><div class="stamp-note">Beide Gesellschafter haben nach Pr\xfcfung digital signiert.</div>'
d1.a='<section class="stamp"><div class="stamp-badge">FREIGEGEBEN</div><div class="stamp-note">Beide Gesellschafter haben nach Pr\xfcfung digital signiert.</div><ul class="stamp-list">'
for(d8=e1.$ti,d9=new A.b8(e1,e1.gp(0),d8.i("b8<an.E>")),d8=d8.i("an.E");d9.t();){u=d9.d
if(u==null)u=d8.a(u)
t=J.V(u)
s=t.h(u,"approver_name")
s=s==null?null:J.al(s)
if(s==null)s="?"
s=A.ax(s,"&","&amp;")
s=A.ax(s,"<","&lt;")
h=A.ax(s,">","&gt;")
s=t.h(u,"decision")
d2=(s==null?null:J.al(s))==="approved"?"freigegeben":"abgelehnt"
u=t.h(u,"decided_at")
d3=u==null?null:J.al(u)
d4=d3==null?"":" \xb7 "+A.i(m.$1(d3))
u="<li><b>"+h+"</b> \u2014 "+d2+d4+"</li>"
d1.a+=u}d1.a+="</ul></section>"}d8=J.V(e5)
if(d8.gdw(e5)){d9=(d1.a+='<section class="signatures">')+"<h2>Freigabe / Unterschriften</h2>"
d1.a=d9
d1.a=d9+'<div class="sigrow">'
for(d8=d8.gX(e5);d8.t();){d9=d8.gN(d8)
u=J.V(d9)
d5=A.aj(u.h(d9,"image_url"))
if(d5==null)d5=""
t=A.aj(u.h(d9,"full_name"))
if(t==null)t=""
t=A.ax(t,"&","&amp;")
t=A.ax(t,"<","&lt;")
h=A.ax(t,">","&gt;")
d9=A.aj(u.h(d9,"role_label"))
if(d9==null)d9=""
d9=A.ax(d9,"&","&amp;")
d9=A.ax(d9,"<","&lt;")
d6=A.ax(d9,">","&gt;")
if(d5.length!==0){d9=A.ax(d5,"&","&amp;")
d9=A.ax(d9,"<","&lt;")
d7='<img src="'+A.ax(d9,">","&gt;")+'" alt="Signatur" class="sig-img">'}else d7='<div class="sig-line"></div>'
d9='<div class="sig-slot"><div class="sig-box">'+d7+'</div><div class="sig-name"><b>'+h+'</b></div><div class="sig-meta">'+d6+" \xb7 Datum: "+$.dp().al(d0)+"</div></div>"
d1.a+=d9}d1.a+="</div></section>"}d8=$.dp()
d8=(self.URL||self.webkitURL).createObjectURL(B.bwF(['<!doctype html>\n<html lang="de"><head>\n<meta charset="utf-8">\n<title>FIFO-Inventur '+d8.al(e2)+" \u2013 "+d8.al(e6)+'</title>\n<style>\n  @page { size: A4 landscape; margin: 0 10mm 12mm 10mm; }\n  * { box-sizing: border-box; }\n  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n         color: #14110E; margin: 0; padding: 0; font-size: 9pt; }\n  /* One-Pager-Look: Gold-Topbar + Wortmarke */\n  .topbar { height: 5mm; background: #FDC102; margin: 0 -10mm 6mm; }\n  .brand { font-weight: 900; letter-spacing: 2px; font-size: 11pt;\n           margin-bottom: 6pt; }\n  .wrap { max-width: 100%; margin: 0 auto; }\n  .head { display: flex; justify-content: space-between; align-items: flex-end; }\n  .head h1 { margin: 0; font-size: 17pt; letter-spacing: 0.5px; color: #B8860B; }\n  .meta { color: #6f6a5b; font-size: 9pt; }\n  h2 { font-size: 11pt; margin: 12pt 0 4pt 0; color: #14110E;\n       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }\n  h3 { font-size: 10pt; margin: 8pt 0 2pt 0; color: #6f6a5b;\n       font-weight: 700; letter-spacing: 0.2px; }\n  table.pos { width: 100%; border-collapse: collapse; margin-top: 3pt; }\n  table.pos th, table.pos td { padding: 3pt 5pt; text-align: left;\n                                border-bottom: 1pt solid #E8E2D6; }\n  table.pos th { background: #14110E; color: #F9F5EC; }\n  .num { text-align: right; white-space: nowrap; }\n  .muted { color: #6f6a5b; }\n  .strong { font-weight: 800; }\n  .warn { color: #B2311C; font-weight: 800; }\n  tr.in td   { background: #F3F8ED; }\n  tr.out td  { background: #FAE9E4; }\n  tr.sum td  { background: #FFF5CC; border-top: 1pt solid #14110E;\n                border-bottom: 1pt solid #14110E; }\n  .kpis { display: flex; flex-wrap: wrap; gap: 20pt; margin: 6pt 0;\n          font-size: 10pt; color: #14110E; }\n  .kpis span b { font-size: 12pt; }\n  .kpis .warn { color: #B2311C; }\n  .sigrow { display: flex; flex-wrap: wrap; gap: 24pt; margin-top: 6pt; }\n  .sig-slot { width: 260px; }\n  .sig-box { height: 70px; border: 1pt solid #e6e0cc; border-radius: 6pt;\n             background: #FAF6ED; padding: 6pt; display: flex;\n             align-items: flex-end; }\n  .sig-line { height: 1pt; background: #14110E; width: 100%;\n              margin-bottom: 3pt; }\n  .sig-img { max-height: 60px; max-width: 100%; object-fit: contain; }\n  .sig-name { margin-top: 4pt; font-size: 10pt; }\n  .sig-meta { color: #6f6a5b; font-size: 8pt; }\n  .matrix-intro { color: #6f6a5b; font-size: 9pt; margin: 2pt 0 4pt 0;\n                  max-width: 780px; }\n  /* "Bewertung:" mit zwei Zeilen \u2014 Label steht neben dem Anschaffungs\xad\n     kosten-Text, die zweite Zeile ("MHD-Abschlag vom AK-Wert") wird auf\n     die H\xf6he von "Anschaffungskosten" einger\xfcckt. */\n  .head .meta .bewertung-label { display: inline-block; vertical-align: top; }\n  .head .meta .bewertung-lines { display: inline-block; vertical-align: top;\n                                  margin-left: 4pt; }\n  .head .meta .bewertung-lines > span { display: block; }\n\n  /* Freigabe-Stempel */\n  section.stamp { margin: 8pt 0 4pt 0; padding: 6pt 10pt;\n                  border: 1pt solid #5C9A3F; border-radius: 6pt;\n                  background: #EEF6E8; }\n  section.stamp .stamp-badge {\n    display: inline-block; font-weight: 800; letter-spacing: 1px;\n    color: #3E7A25; font-size: 12pt;\n  }\n  section.stamp .stamp-note { color: #14110E; font-size: 9pt; margin-top: 2pt; }\n  section.stamp .stamp-list { margin: 4pt 0 0 14pt; padding: 0;\n                              font-size: 9pt; color: #14110E; }\n  section.stamp .stamp-list li { margin: 1pt 0; }\n  table.matrix { width: 100%; }\n  table.matrix td, table.matrix th { padding: 4pt 6pt; }\n\n  /* Produkt-Block */\n  section.product { margin: 10pt 0 8pt 0;\n                    padding: 6pt 8pt 8pt 8pt;\n                    border: 1pt solid #e6e0cc;\n                    border-radius: 4pt; }\n  .prod-head { display: flex; justify-content: space-between;\n               align-items: flex-end;\n               border-bottom: 1pt solid #14110E; padding-bottom: 3pt;\n               margin-bottom: 4pt; }\n  .prod-name { font-size: 12pt; font-weight: 800; letter-spacing: 0.2px; }\n  .prod-sku  { color: #6f6a5b; font-size: 8pt; }\n  .prod-end  { color: #14110E; font-size: 10pt; }\n  .prod-end b { color: #b89a00; }\n\n  /* \u2500\u2500 Sauberer Seitenumbruch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n  p, li { orphans: 3; widows: 3; }\n  h1, h2, h3 { page-break-after: avoid; break-after: avoid-page; }\n  thead { display: table-header-group; }\n  tfoot { display: table-footer-group; }\n  table.pos tr { page-break-inside: avoid; break-inside: avoid; }\n  table.pos tr.sum { page-break-before: avoid; break-before: avoid; }\n  section.product { page-break-inside: auto; break-inside: auto; }\n  section.product .prod-head { page-break-after: avoid; break-after: avoid-page; }\n  .sig-slot { page-break-inside: avoid; break-inside: avoid; }\n  .kpis, table.matrix,\n  section.matrix-block, section.signatures {\n    page-break-inside: avoid; break-inside: avoid;\n  }\n</style>\n</head><body onload="window.print()"><div class="topbar"></div><div class="wrap">\n  <div class="brand">B\xd6RDESNACK24</div>\n  <div class="head">\n    <div>\n      <h1>INVENTUR \u2014 FIFO-Bewegungsreport</h1>\n      <div class="meta">Zeitraum: '+d8.al(e2)+" \u2013 "+d8.al(e6)+'</div>\n      <div class="meta">Bewertungsverfahren: <b>FIFO</b> (\xa7256 HGB, Verbrauchsfolge)</div>\n      <div class="meta">\n        <span class="bewertung-label">Bewertung:</span>\n        <span class="bewertung-lines">\n          <span>Anschaffungskosten netto (\xa7253 HGB)</span>\n          <span>MHD-Abschlag vom AK-Wert</span>\n        </span>\n      </div>\n    </div>\n    <div class="meta">\n      B\xf6rdesnack24 GbR<br>\n      S\xfclldorfer Str. 3A \xb7 39171 S\xfclzetal OT Osterweddingen<br>\n      Steuernummer: 102/178/01635<br>\n      USt-IdNr.: DE 458804058<br>\n      Erstellt am '+d8.al(d0)+"\n    </div>\n  </div>\n  "+k.j(0)+"\n  "+c4.j(0)+"\n  "+c5.j(0)+"\n  "+d1.j(0)+"\n</div></body></html>\n"],"text/html"))
d8.toString
d9=window
d9.toString
C.ZM.ah4(d9,d8,"_blank")
return A.o(null,v)}})
return A.p($async$bux,v)},
buy:function buy(){},
buz:function buz(){},
buG:function buG(){},
buH:function buH(d){this.a=d},
buE:function buE(){},
buF:function buF(d){this.a=d},
buC:function buC(){},
buD:function buD(){},
buA:function buA(){},
buB:function buB(){},
aoR(d){var w,v,u
if(d==null||d.length===0)return"\u2014"
try{w=A.o9(d)
v=$.dp().al(w)
return v}catch(u){v=d.length
return C.c.a_(d,0,v>10?10:v)}},
O2:function O2(d){this.a=d},
VO:function VO(d,e){var _=this
_.w=d
_.x=e
_.Q=_.z=_.y=null
_.as=!1
_.at=null
_.d=$
_.c=_.a=null},
bfe:function bfe(d){this.a=d},
bff:function bff(d){this.a=d},
bfg:function bfg(d,e){this.a=d
this.b=e},
bfh:function bfh(d,e){this.a=d
this.b=e},
bfk:function bfk(d){this.a=d},
bfi:function bfi(d){this.a=d},
bfj:function bfj(d){this.a=d},
bfd:function bfd(){},
bfl:function bfl(d){this.a=d},
bfm:function bfm(d){this.a=d},
aoQ:function aoQ(d,e,f){this.d=d
this.e=e
this.a=f},
bjx:function bjx(){},
bjy:function bjy(){},
bjz:function bjz(){},
bjA:function bjA(){},
aln:function aln(d,e){this.c=d
this.a=e},
bdU:function bdU(){},
bdV:function bdV(){},
bdW:function bdW(){},
bdX:function bdX(){},
bdY:function bdY(){},
wP:function wP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ana:function ana(d){this.a=d},
wS:function wS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ar5:function ar5(d,e){this.c=d
this.a=e},
ar7:function ar7(d,e){this.c=d
this.a=e},
bnA:function bnA(){},
In:function In(d){this.a=d},
a6O:function a6O(d){this.a=d},
aJW:function aJW(){},
aJV:function aJV(){},
aJU:function aJU(){},
aJT:function aJT(){},
aJS:function aJS(d){this.a=d},
aJR:function aJR(d,e){this.a=d
this.b=e},
aJQ:function aJQ(d){this.a=d},
zr:function zr(d,e,f){this.d=d
this.e=e
this.a=f},
amU:function amU(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
bgB:function bgB(d){this.a=d},
bgA:function bgA(){},
bgz:function bgz(){},
bgy:function bgy(d){this.a=d},
bgx:function bgx(d){this.a=d},
bgw:function bgw(){},
bgv:function bgv(d,e){this.a=d
this.b=e},
bgu:function bgu(d,e,f){this.a=d
this.b=e
this.c=f},
bgt:function bgt(d,e,f){this.a=d
this.b=e
this.c=f},
bgr:function bgr(d){this.a=d},
bgs:function bgs(d,e){this.a=d
this.b=e},
a7q:function a7q(d){this.a=d},
aLf:function aLf(){},
aLe:function aLe(){},
aLg:function aLg(){},
aLd:function aLd(){},
BX:function BX(d){this.a=d},
VX:function VX(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=null
_.at=!1
_.d=$
_.c=_.a=null},
bgE:function bgE(d){this.a=d},
bgD:function bgD(d,e){this.a=d
this.b=e},
bgF:function bgF(){},
bgG:function bgG(d){this.a=d},
bgC:function bgC(d,e){this.a=d
this.b=e},
bIU(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return"\u2014"
try{w=A.o9(J.al(d)).Fo()
v=C.c.cX(C.e.j(A.bU(w)),2,"0")
u=C.c.cX(C.e.j(A.bi(w)),2,"0")
t=C.c.cX(C.e.j(A.hz(w)),2,"0")
s=C.c.cX(C.e.j(A.vN(w)),2,"0")
r=A.i(v)
q=A.i(u)
p=A.i(t)
o=A.i(s)
return r+"."+q+". "+p+":"+o}catch(n){r=J.al(d)
return r}},
Sh:function Sh(d){this.a=d},
as5:function as5(){var _=this
_.w=0
_.d=$
_.c=_.a=null},
boY:function boY(d){this.a=d},
boX:function boX(d,e){this.a=d
this.b=e},
brL:function brL(){},
amK:function amK(d){this.a=d},
bgk:function bgk(){},
bgj:function bgj(){},
bgi:function bgi(d){this.a=d},
bgh:function bgh(d){this.a=d},
alr:function alr(d,e){this.c=d
this.a=e},
BW:function BW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bsj:function bsj(){},
aoU:function aoU(d){this.a=d},
bjR:function bjR(d,e,f){this.a=d
this.b=e
this.c=f},
bjU:function bjU(){},
bjT:function bjT(){},
bjS:function bjS(){},
bjQ:function bjQ(){},
aoT:function aoT(d,e){this.c=d
this.a=e},
C7:function C7(d){this.a=d},
WN:function WN(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q="generic"
_.d=$
_.c=_.a=null},
bjN:function bjN(){},
bjO:function bjO(d){this.a=d},
bjM:function bjM(d,e){this.a=d
this.b=e},
bjP:function bjP(){},
brp:function brp(){},
ajE:function ajE(d){this.a=d},
b9p:function b9p(d,e,f){this.a=d
this.b=e
this.c=f},
b9s:function b9s(){},
b9r:function b9r(){},
b9q:function b9q(){},
b9o:function b9o(){},
ajD:function ajD(d,e){this.c=d
this.a=e},
BA:function BA(d){this.a=d},
UK:function UK(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.d=$
_.c=_.a=null},
b9j:function b9j(){},
b9i:function b9i(d){this.a=d},
b9g:function b9g(d){this.a=d},
b9d:function b9d(d,e){this.a=d
this.b=e},
b9h:function b9h(){},
b9m:function b9m(){},
b9l:function b9l(){},
b9k:function b9k(d){this.a=d},
b9e:function b9e(d){this.a=d},
b9c:function b9c(d,e){this.a=d
this.b=e},
b9f:function b9f(){},
b9n:function b9n(){},
Ya:function Ya(d){this.a=d},
arm:function arm(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
bnP:function bnP(){},
bnO:function bnO(d){this.a=d},
bnN:function bnN(d){this.a=d},
bnM:function bnM(d,e){this.a=d
this.b=e},
arl:function arl(d,e){this.e=d
this.a=e},
bnL:function bnL(){},
bnK:function bnK(d,e){this.a=d
this.b=e},
bnI:function bnI(d,e,f){this.a=d
this.b=e
this.c=f},
bnJ:function bnJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnH:function bnH(d,e){this.a=d
this.b=e},
ark:function ark(d,e,f){this.c=d
this.d=e
this.a=f},
Cj:function Cj(d,e,f){this.d=d
this.e=e
this.a=f},
Y9:function Y9(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=null
_.d=$
_.c=_.a=null},
bnE:function bnE(){},
bnG:function bnG(){},
bnF:function bnF(d){this.a=d},
bnD:function bnD(d){this.a=d},
bnC:function bnC(d,e){this.a=d
this.b=e},
brw:function brw(){},
akp:function akp(d){this.a=d},
bbc:function bbc(){},
bbb:function bbb(){},
bba:function bba(d){this.a=d},
bb9:function bb9(d){this.a=d},
ako:function ako(d,e){this.c=d
this.a=e},
tP:function tP(d,e,f){this.c=d
this.d=e
this.a=f},
adF:function adF(d){this.a=d},
b0D:function b0D(){},
b0C:function b0C(){},
b0E:function b0E(){},
b0B:function b0B(){},
Cu:function Cu(d){this.a=d},
YD:function YD(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
bp_:function bp_(d){this.a=d},
boZ:function boZ(d,e){this.a=d
this.b=e},
bp0:function bp0(){},
OA(d,e){return new B.a7n(e,d,null)},
a7n:function a7n(d,e,f){this.e=d
this.f=e
this.a=f},
aLb:function aLb(){},
aLa:function aLa(){},
aL9:function aL9(d){this.a=d},
aL8:function aL8(){},
Fz:function Fz(d,e){this.d=d
this.a=e},
Wy:function Wy(){var _=this
_.w=!1
_.x=null
_.d=$
_.c=_.a=null},
biE:function biE(d){this.a=d},
biF:function biF(d,e){this.a=d
this.b=e},
biG:function biG(d){this.a=d},
PR(d,e,f,g,h,i,j){return new B.PQ(j,i,d,e,g,f,h,null)},
PQ:function PQ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
WJ:function WJ(){var _=this
_.d=_.w=$
_.c=_.a=null},
bjD:function bjD(d){this.a=d},
bjB:function bjB(d){this.a=d},
bjC:function bjC(d){this.a=d},
bjI:function bjI(d,e){this.a=d
this.b=e},
bjH:function bjH(d,e){this.a=d
this.b=e},
bjL:function bjL(){},
bjK:function bjK(){},
bjJ:function bjJ(d){this.a=d},
bjG:function bjG(d){this.a=d},
bjF:function bjF(){},
bjE:function bjE(d,e){this.a=d
this.b=e},
bE6(d,e,f){return new B.a1A(e,f,d,null)},
a1A:function a1A(d,e,f,g){var _=this
_.d=d
_.r=e
_.as=f
_.a=g},
b6v:function b6v(d,e){this.a=d
this.b=e},
a1B:function a1B(d,e,f,g){var _=this
_.d=d
_.r=e
_.x=f
_.a=g},
b6w:function b6w(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
_.fr=d
_.fx=e
_.fy=f
_.go=g
_.k1=_.id=$
_.a=h
_.b=i
_.c=j
_.d=k
_.e=l
_.f=m
_.r=n
_.w=o
_.x=p
_.y=q
_.z=r
_.Q=s
_.as=t
_.at=u
_.ax=v
_.ay=w
_.ch=a0
_.CW=a1
_.cx=a2
_.cy=a3
_.db=a4
_.dx=a5
_.dy=a6},
b6x:function b6x(d){this.a=d},
bEy(d,e,f){return new B.r6(f,d,e)},
o7(d){return new B.fw(d)},
aB_(d,e,f,g,h,i,j){return new B.a4b(e,g,f,h,i,d,j,B.bSr(e),null)},
bSr(d){var w,v,u
for(w=d.length,v=null,u=0;u<w;++u)if(!d[u].d){if(v!=null)return null
v=u}return v},
bHW(d,e,f,g,h,i){var w=null
return new B.S9(d,h,w,w,w,w,g,w,w,w,w,w,w,f,e,!0,C.G,w,w,w,w,w,w,i,w,w,!0,!1,w,!1,w,!0,w,w,w)},
fl:function fl(d,e){this.a=d
this.d=e},
r6:function r6(d,e,f){this.b=d
this.f=e
this.r=f},
fw:function fw(d){this.a=d},
a4b:function a4b(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.ay=i
_.CW=j
_.fr=k
_.a=l},
aB4:function aB4(d){this.a=d},
aB0:function aB0(){},
aB1:function aB1(){},
aB2:function aB2(){},
aB3:function aB3(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aB5:function aB5(d,e){this.a=d
this.b=e},
aB6:function aB6(d){this.a=d},
aB7:function aB7(d){this.a=d},
S9:function S9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.CW=s
_.cx=t
_.cy=u
_.db=v
_.dx=w
_.dy=a0
_.fr=a1
_.fx=a2
_.fy=a3
_.go=a4
_.id=a5
_.k1=a6
_.k2=a7
_.k3=a8
_.k4=a9
_.ok=b0
_.p1=b1
_.p2=b2
_.p3=b3
_.a=b4},
b0m:function b0m(d){this.a=d},
anH:function anH(){},
anM:function anM(d){this.a=d},
GD:function GD(d,e,f){this.r=d
this.w=e
this.a=f},
Yc:function Yc(){this.d=!1
this.c=this.a=null},
bnQ:function bnQ(d){this.a=d},
bnT:function bnT(d,e,f){this.a=d
this.b=e
this.c=f},
bnU:function bnU(d,e,f){this.a=d
this.b=e
this.c=f},
bnR:function bnR(d,e){this.a=d
this.b=e},
bnS:function bnS(d,e){this.a=d
this.b=e},
qi:function qi(d){this.d=this.b=null
this.a=d},
wi:function wi(){},
O0:function O0(d){this.a=d},
a5g:function a5g(d){this.a=d},
a5v:function a5v(){},
wh:function wh(d,e){this.a=d
this.b=e},
vY:function vY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.a4=h
_.ar=i
_.ak=j
_.bx=_.aG=null
_.b9=k
_.aQ=l
_.ca=m
_.da=n
_.dc=o
_.cO=p
_.dh=null
_.be=q
_.S=null
_.R=$
_.dy=r
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=s
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aVU:function aVU(){},
aVT:function aVT(d){this.a=d},
aVS:function aVS(d){this.a=d},
aVV:function aVV(){},
aVQ:function aVQ(d,e){this.a=d
this.b=e},
aVR:function aVR(){},
aVW:function aVW(){},
aVX:function aVX(d){this.a=d},
Ih:function Ih(d,e){this.a=d
this.b=e},
bYZ(d,e,f,g){var w
if(C.b.ev(e,new B.b0n())){w=A.af(e).i("ad<1,jX?>")
w=A.Q(new A.ad(e,new B.b0o(),w),w.i("aw.E"))
w.$flags=1
w=w}else w=null
return new B.S7(e,f,d,g,w,null)},
mn:function mn(d,e,f){this.a=d
this.b=e
this.c=f},
lu:function lu(d,e){this.a=d
this.b=e},
S7:function S7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.y=h
_.a=i},
b0n:function b0n(){},
b0o:function b0o(){},
arX:function arX(d,e,f,g){var _=this
_.p1=d
_.p2=!1
_.p3=e
_.c=_.b=_.a=_.CW=_.ay=null
_.d=$
_.e=f
_.r=_.f=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.at=!1},
boP:function boP(d,e){this.a=d
this.b=e},
boO:function boO(d,e,f){this.a=d
this.b=e
this.c=f},
boQ:function boQ(){},
boR:function boR(d){this.a=d},
boN:function boN(){},
boM:function boM(){},
boS:function boS(){},
S8:function S8(d,e,f){this.c=d
this.d=e
this.a=f},
arW:function arW(d,e,f){this.f=d
this.b=e
this.a=f},
Jk:function Jk(d,e){this.a=d
this.b=e},
auE:function auE(){},
aJ9:function aJ9(){},
bGQ(d){var w=A.bP('[,()"\\\\]',!0,!1,!1)
if(!(w.b.test(d)||d!==C.c.aK(d)))return d
w=A.ax(d,"\\","\\\\")
return'"'+A.ax(w,'"','\\"')+'"'},
ka:function ka(d,e){this.a=d
this.b=e},
aay:function aay(d,e,f){this.a=d
this.b=e
this.c=f},
aRi:function aRi(){},
ax4(d,e,f,g,h){return A.dz(d,e,new B.ax5(f,h),new B.ax6(f,h),!1,!0,!1,g,h)},
ax5:function ax5(d,e){this.a=d
this.b=e},
ax6:function ax6(d,e){this.a=d
this.b=e},
bSq(d){var w
d.O(x.d)
w=A.W(d)
return w.y2},
bwF(d,e){var w={}
w.type=e
return new self.Blob(d,w)},
bAB(d){var w=0,v=A.q(x.H),u,t
var $async$bAB=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.bwF([A.eI(65279)+d],"text/csv;charset=utf-8"))
t.toString
u=document.createElement("a")
u.href=t
u.download="b2b_customers.csv"
u.click();(self.URL||self.webkitURL).revokeObjectURL(t)
return A.o(null,v)}})
return A.p($async$bAB,v)},
bB7(d,e,f){var w=0,v=A.q(x.H)
var $async$bB7=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:A.bKz(f,null)
return A.o(null,v)}})
return A.p($async$bB7,v)},
a5x(d,e,f,g,h){var w=null
return new A.yy(f,w,e,d,h,w,w,!0,C.ZZ,g,w)}},D
J=c[1]
A=c[0]
C=c[2]
F=c[5]
E=c[7]
B=a.updateHolder(c[4],B)
D=c[8]
B.wg.prototype={
Fy(d,e,f,g,h){return this.b0U(0,e,f,g,h)},
b0T(d,e,f,g){return this.Fy(0,e,f,"application/octet-stream",g)},
b0U(d,e,f,g,h){var w=0,v=A.q(x.N),u,t=this,s,r,q,p
var $async$Fy=A.m(function(i,j){if(i===1)return A.n(j,v)
for(;;)switch(w){case 0:q=t.a
p=q.gdX().e.a
p=p==null?null:p.r
s=p==null?null:p.a
if(s==null)s="anon"
r=s+"/"+Date.now()+"_"+h
q=q.ay
q===$&&A.a()
w=3
return A.k(q.cW(e).A3(r,f,new A.Ei(!1,g)),$async$Fy)
case 3:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$Fy,v)}}
B.pO.prototype={}
B.yR.prototype={
u(d){var w,v,u,t,s=null,r=this.c
if(r.length===0)return C.ar
w=x.p
v=A.b([],w)
for(u=0;u<r.length;++u){t=A.b([],w)
if(u>0)t.push(C.b2)
t.push(new B.als(r[u],s))
C.b.K(v,t)}return new A.ah(this.d,A.ao(v,C.k,s,C.lT,C.h,0,s,s),s)}}
B.als.prototype={
u(d){var w=null,v=this.c,u=A.aR(12),t=v.f,s=t?w:v.c,r=A.aR(12),q=A.aR(12),p=v.e
p=A.cU(p==null?C.ao:p,1)
if(t)t=C.YO
else t=A.cp(v.a,v.d,w,20)
return A.H8(A.dR(!1,C.a0,!0,u,A.eD(!1,r,!0,A.bf(C.W,t,C.t,w,w,new A.b4(w,w,p,q,w,w,C.G),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,s,w,w,w,w,w,w,w),C.t,C.ae,0,w,w,w,w,w,C.bx),w,v.b,w,w)}}
B.OX.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=C.bF
w=A.aR(12)
v=s.y
v=A.cU(v==null?C.m.eI(0.4):v,1)
u=s.w
if(u==null)u=C.j
t=x.p
w=A.b([A.bf(C.W,A.cp(s.c,u,r,22),C.t,r,r,new A.b4(q,r,v,w,r,r,C.G),r,44,r,r,r,r,r,44),C.cY],t)
q=s.r
if(q!=null)w.push(q)
else w.push(C.y7)
q=A.b([A.ao(w,C.k,r,C.f,C.h,0,r,r),C.v,A.j(s.d,1,C.ai,r,A.D(C.j,15,C.S),r,r,r)],t)
C.b.K(q,A.b([C.bM,A.j(s.e,2,C.ai,r,A.D(C.q,12,C.l),r,r,r)],t))
return A.by(r,A.ac(q,C.C,r,C.io,C.h,0),r,s.f,C.aj,r,3)}}
B.Al.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.Al&&e.a===this.a&&e.c.k(0,this.c)&&e.d.k(0,this.d)},
gA(d){return A.a9(this.a,this.c,this.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zt.prototype={
k6(d,e){return this.aOw(d,e)},
aOw(d,e){var w=0,v=A.q(x.y),u,t=this,s,r
var $async$k6=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t.se8(0,C.dz)
w=3
return A.k(A.pl(new B.aLi(t,d,e),x.H),$async$k6)
case 3:t.se8(0,g)
s=t.f
w=s.ghp(s)!=null?4:5
break
case 4:r=t.r.aD(0,$.bCT(),x.bX)
w=8
return A.k(r.MB(),$async$k6)
case 8:w=!g?6:7
break
case 6:w=9
return A.k(r.DK(d,e),$async$k6)
case 9:t.se8(0,C.dO)
u=!0
w=1
break
case 7:case 5:s=t.f
u=s.ghp(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$k6,v)},
KM(d,e,f){return this.aRC(d,e,f)},
aRC(d,e,f){var w=0,v=A.q(x.y),u,t=this,s
var $async$KM=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:t.se8(0,C.dz)
w=3
return A.k(A.pl(new B.aLj(t,e,f,d,null),x.H),$async$KM)
case 3:t.se8(0,h)
s=t.f
u=s.ghp(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$KM,v)},
LA(d,e,f){return this.aTr(d,e,f)},
aTr(d,e,f){var w=0,v=A.q(x.aD),u,t=this,s,r
var $async$LA=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:r={}
t.se8(0,C.dz)
r.a=null
w=3
return A.k(A.pl(new B.aLk(r,t,d,e,f),x.H),$async$LA)
case 3:t.se8(0,h)
s=t.f
u=s.ghp(s)!=null?null:r.a
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$LA,v)}}
B.zu.prototype={
df(d,e){return A.dz(e.ao($.bw4(),x.i),new B.aLn(this),new B.aLo(),new B.aLp(),!1,!0,!1,x.C,x.l)},
at5(d){var w="Inventur",v=null,u="customers.manage",t=d.n(0,"inventory.view")||d.n(0,"inventory.edit"),s=d.n(0,"haccp.fill"),r=d.n(0,"haccp.temperature"),q=d.n(0,"haccp.cleaning"),p=d.n(0,"haccp.disposal"),o=d.n(0,"haccp.maintenance"),n=d.n(0,"cash.collect"),m=d.n(0,"documents.view")||d.n(0,"documents.edit"),l=x.af
t=A.Q(new A.bc(A.b([new B.fF(w,"Bestand je Automat",C.nU,D.afd,t,v,v,v,v),new B.fF("Bef\xfcllung","Nachf\xfcll-Protokoll",C.Es,D.a8N,s,v,v,v,v),new B.fF("Temperatur","HACCP \xb7 \u2264 7 \xb0C",D.abd,D.aAP,r,v,v,v,v),new B.fF("Reinigung","Hygieneplan",D.Ez,D.a3c,q,v,v,v,v),new B.fF("Vernichtung","MHD / Verderb",C.Ei,D.a6t,p,v,v,v,v),new B.fF("Wartung","Technik-Protokolle",D.Ev,D.app,o,v,v,v,v),new B.fF("Geldentnahme","Kassenprotokoll",C.EI,D.a2Y,n,v,v,v,v),new B.fF("Dokumente","Archiv & Versionen",D.EB,D.a6z,m,v,v,v,v),new B.fF("Mitarbeiter","Einladen & Schulen",D.aaO,D.a8a,d.n(0,"employees.manage"),v,v,v,v),new B.fF("B2B-Kunden","sevDesk-CSV-Export",C.xZ,D.a_N,d.n(0,u),v,v,v,v),new B.fF("DATEV-Export","Buchungsstapel (CSV)",C.fR,E.D4,d.n(0,"finance.export"),C.aE,C.aE.eI(0.12),C.aE.eI(0.4),D.aMu),new B.fF("Anlagen","PKW-Kosten \xb7 Nutzungseinlage",D.EA,D.a_E,d.n(0,"finance.view"),v,v,v,v),new B.fF(w,"PDF-Report Zeitraum",C.nU,D.afc,d.n(0,u),v,v,v,v),new B.fF("Telemetrie","IoT \xb7 Live \xb7 Slots",D.aae,D.aAO,d.n(0,u),v,v,v,v),new B.fF("Freigaben","Dokumente pr\xfcfen",E.fS,D.a6y,d.n(0,u),v,v,v,v),new B.fF("K\xfcndigungen","Abo-K\xfcndigungen pr\xfcfen",D.abg,D.a2S,d.n(0,u),v,v,v,v),new B.fF("Reklamationen","Kundenmeldungen je Kauf",C.y_,D.a5f,d.n(0,u),v,v,v,v),D.aOE],x.ew),new B.aLm(),l),l.i("t.E"))
return t}}
B.anh.prototype={
u(d){var w=null
return A.dF(A.b([D.axe,C.P,A.j("Digitale HACCP-, Reinigungs- und Bestandsprotokolle \u2014 revisionssicher und GoBD-konform.",w,w,w,A.D(C.q,13,C.l),w,w,w),C.aQ,A.iZ(new B.bhv(this))],x.p),C.cj,w,C.M,!1)}}
B.akk.prototype={
u(d){var w=null
return A.cZ(new A.ah(C.dg,A.ac(A.b([A.bf(w,D.abW,C.t,w,w,new A.b4(C.bF,w,A.cU(C.m,1),w,w,w,C.fh),w,72,w,w,w,w,w,72),C.K,A.j("Keine Module freigeschaltet",w,w,w,A.c3(C.j,20,C.S),C.cG,w,w),C.P,A.j("F\xfcr Dein Konto sind noch keine Module aktiviert. Bitte wende Dich an einen Gesellschafter.",w,w,w,A.D(C.q,14,C.l),C.cG,w,w)],x.p),C.k,w,C.f,C.H,0),w),w,w)}}
B.fF.prototype={}
B.aji.prototype={
u(d){var w=null,v=C.aE.eI(0.14),u=A.aR(4),t=A.cU(C.aE.eI(0.5),1)
return A.bf(w,A.j("DATEV",w,w,w,A.D(C.aE,9,C.p).fV(0.4),w,w,w),C.t,w,w,new A.b4(v,w,t,u,w,w,C.G),w,w,w,w,D.a86,w,w,w)}}
B.xx.prototype={
W(){return new B.Tm(C.cp)}}
B.Tm.prototype={
gpR(){var w=this.w
return w===$?this.w=A.aU(new A.aZ(Date.now(),0,!1)):w},
av(){this.aL()
this.xb()},
aEI(d){this.J(new B.b3v(this,d))
this.xb()},
xb(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$xb=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b3w(r))
u=3
q=r.gc8().aD(0,$.bL(),x.A)
n=x.N
m=x.z
w=6
return A.k(A.kT(A.b([q.er("anlage_pkw",A.a4(["p_jahr",r.gpR()],n,m),m),q.h_("list_partner_signatures",m)],x.U),m),$async$xb)
case 6:p=e
r.x=A.dh(x.f.a(J.Z(p,0)),n,m)
m=J.cE(x.j.a(J.Z(p,1)),x.P)
r.y=m.fM(m)
s.push(5)
w=4
break
case 3:u=2
k=t.pop()
o=A.a2(k)
r.Q=J.al(o)
r.x=null
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.b3x(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$xb,v)},
ga4_(){var w=this.x
w=w==null?null:w.h(0,"fahrzeuge")
x.g.a(w)
if(w==null)w=C.bm
return J.cE(w,x.P)},
ga4p(){var w="freigabe",v=this.x
return(v==null?null:v.h(0,w))==null?null:A.dh(x.f.a(this.x.h(0,w)),x.N,x.z)},
gaMQ(){var w,v,u,t,s,r,q,p=this.ga4p()
p=p==null?null:p.h(0,"unterzeichner")
x.g.a(p)
w=p==null?C.bm:p
p=J.V(w)
if(p.gZ(w))return null
v=A.b([],x.t)
for(p=p.gX(w),u=x.f,t=x.N,s=x.z;p.t();){r=u.a(p.gN(p))
q=J.V(r)
v.push(A.a4(["full_name",q.h(r,"name"),"signature_url",q.h(r,"unterschrift")],t,s))}return v},
u(d){var w,v,u,t,s,r,q=this,p=null,o=q.gaEP(),n=x.p,m=A.b([new B.amm(q.gpR(),q.gaEH(),p),C.K],n)
if(q.x!=null&&!q.z)m.push(q.ash())
if(q.z)m.push(E.Ti)
else{w=q.Q
if(w!=null)m.push(new B.Vy("Die Anlage konnte nicht geladen werden: "+w,C.ak,E.Ej,p))
else{w=A.b([],n)
if(B.bsC(q.x))C.b.K(w,A.b([new B.arr(q.gpR(),q.ga4p(),p),C.K],n))
w.push(new B.aky(q.ga4_(),q.gpR(),B.bsC(q.x),o,p))
w.push(C.bL)
n=q.x
n=n==null?p:n.h(0,"fahrten")
x.g.a(n)
if(n==null)n=C.bm
n=J.cE(n,x.P)
v=q.ga4_()
u=q.gpR()
t=B.bsC(q.x)
s=q.x
s=B.uf(s==null?p:s.h(0,"nutzungseinlage"))
r=q.x
w.push(new B.akw(n,v,u,t,s,C.d.a0(B.uf(r==null?p:r.h(0,"fahrten_ohne_satz"))),o,p))
w.push(C.bL)
w.push(new B.ati(q.y,p))
C.b.K(m,w)}}return A.dd(D.a99,p,A.id(A.dF(m,C.cj,p,C.M,!1),C.m,o),p,p,p)},
ash(){var w=A.b([],x.x)
if(!B.bsC(this.x))w.push(new B.pO(E.fS,"Freigabe anfordern",this.gay5(),C.m,null,!1))
w.push(new B.pO(C.i4,"Als PDF drucken",new B.b3r(this),C.ak,C.ak,!1))
return new B.yR(w,C.dV,null)},
By(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$By=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.c
k.toString
w=3
return A.k(A.hh(null,null,!0,null,new B.b3u(r),k,null,!0,!0,x.y),$async$By)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mJ(r.gc8().aD(0,$.bL(),x.A))
k=A.bB(r.gpR(),1,1,0,0,0,0)
o=A.bB(r.gpR(),12,31,0,0,0,0)
n=r.gpR()
m=r.x
if(m==null)m=C.ip
w=8
return A.k(q.w7("anlage_pkw",k,o,m,"Anlage PKW-Kosten "+n),$async$By)
case 8:k=r.c
if(k!=null)k.O(x.q).f.b2(E.mf)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
k=r.c
if(k!=null)k.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$By,v)}}
B.amm.prototype={
u(d){var w,v,u=null,t=A.aU(new A.aZ(Date.now(),0,!1)),s=this.c,r=A.j("B\xf6rdesnack24 GbR, Steuernummer 102/178/01635, USt-IdNr. DE 458804058",u,u,u,A.D(C.q,12,C.l),u,u,u),q=x.p,p=A.b([],q)
for(w=t-4,v=t;v>=w;--v)p.push(new B.a1B(A.j(""+v,u,u,u,u,u,u,u),new B.bfG(this,v),v===s,u))
return A.ac(A.b([new A.fi("Anlage zum Jahresabschluss","Individuelle PKW-Kosten "+s,u,u),C.P,r,C.K,A.ll(C.cx,p,C.dK,0,8)],q),C.C,u,C.f,C.h,0)}}
B.aky.prototype={
df(d,e){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=A.b([D.a8o,C.P,A.j("Alle Betr\xe4ge brutto. Bei einem privaten Fahrzeug gibt es keinen Vorsteuerabzug, die Umsatzsteuer geh\xf6rt also zu den Kosten.",p,p,p,A.D(C.q,12,C.l),p,p,p),C.v],o)
for(w=q.e,v=w.$ti,w=new A.b8(w,w.gp(0),v.i("b8<an.E>")),u=q.f,t=q.r,s=q.w,v=v.i("an.E");w.t();){r=w.d
C.b.K(n,A.b([new B.akx(r==null?v.a(r):r,u,t,s,p),C.v],o))}return A.ac(n,C.C,p,C.f,C.h,0)}}
B.akx.prototype={
df(d,e){var w,v,u,t,s,r,q=this,p=null,o="satz_je_km",n=q.e,m=J.V(n),l=x.g.a(m.h(n,"kosten"))
if(l==null)l=C.bm
w=J.cE(l,x.P)
l=x.p
v=A.b([A.ao(A.b([A.aA(A.j(A.i(m.h(n,"kennzeichen")),p,p,p,A.D(C.j,16,C.p),p,p,p),1),new B.aif(B.c3v(m.h(n,o)),"je Kilometer",p)],l),C.k,p,C.f,C.h,0,p,p),C.v],l)
for(u=w.$ti,t=new A.b8(w,w.gp(0),u.i("b8<an.E>")),s=q.r,u=u.i("an.E");t.t();){r=t.d
if(r==null)r=u.a(r)
v.push(new B.amn(r,s,new B.bbP(q,d,e,r),p))}if(w.gp(0)===0)v.push(A.j("F\xfcr "+q.f+" ist noch keine Kostenposition erfasst.",p,p,p,A.D(C.q,13,C.l),p,p,p))
v.push(C.Dd)
u=B.uf(m.h(n,"gesamtkosten"))
v.push(new B.Cy("Gesamtkosten",$.d2().al(u),!0,p))
v.push(new B.Cy("Kilometerstand 01.01.",B.brY(m.h(n,"km_stand_anfang")),!1,p))
v.push(new B.Cy("Kilometerstand 31.12.",B.brY(m.h(n,"km_stand_ende")),!1,p))
v.push(new B.Cy("Gefahrene Kilometer",B.brY(m.h(n,"km_gefahren")),!0,p))
if(m.h(n,o)==null)C.b.K(v,A.b([C.P,A.j("Ohne beide Kilometerst\xe4nde l\xe4sst sich kein Satz je Kilometer ermitteln. Fahrten mit diesem Fahrzeug bleiben so lange ohne Betrag.",p,p,p,A.D(C.ak,12,C.l),p,p,p)],l))
if(!s)C.b.K(v,A.b([C.v,A.ac(A.b([A.fR(D.adl,D.aHD,new B.bbQ(q,d,e),p),A.fR(D.F7,D.aGB,new B.bbR(q,d,e),p)],l),C.a9,p,C.f,C.h,8)],l))
return A.by(p,A.ac(v,C.C,p,C.f,C.h,0),p,p,C.D,p,3)},
uA(d,e,f){return this.aEL(d,e,f)},
aEL(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$uA=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:d={}
a0=J.V(a4)
d.a=A.i(a0.h(a4,"kostenart"))
i=C.d.ae(B.uf(a0.h(a4,"betrag_brutto")),2)
i=A.ax(i,".",",")
h=$.ag()
q=new A.bv(new A.cx(i,C.bb,C.aG),h)
i=a0.h(a4,"bezeichnung")
i=A.i(i==null?"":i)
p=new A.bv(new A.cx(i,C.bb,C.aG),h)
i=x.N
w=3
return A.k(A.hh(null,null,!0,null,new B.bbI(d,q,p),a2,null,!0,!0,i),$async$uA)
case 3:o=a6
if(o==null||o==="abbrechen"){w=1
break}n=a3.aD(0,$.bL(),x.A)
t=5
w=o==="streichen"?8:10
break
case 8:m=A.i(a0.h(a4,"id"))
l=A.a4(["deleted_at",new A.aZ(Date.now(),0,!1).dU()],i,i)
w=11
return A.k(n.cW("pkw_kosten").dm(0,l).iE("id",m),$async$uA)
case 11:w=9
break
case 10:i=C.c.aK(q.a.a)
g=A.fT(A.ax(i,",","."))
k=g==null?0:g
if(k<=0){if(a2.e!=null)a2.O(x.q).f.b2(D.YR)
w=1
break}i=n.cW("pkw_kosten")
d=d.a
h=C.c.aK(p.a.a).length===0?null:C.c.aK(p.a.a)
f=x.z
w=12
return A.k(i.dm(0,A.a4(["kostenart",d,"betrag_brutto",k,"bezeichnung",h,"updated_at",new A.aZ(Date.now(),0,!1).dU()],f,f)).iE("id",A.i(a0.h(a4,"id"))),$async$uA)
case 12:case 9:w=13
return A.k(r.w.$0(),$async$uA)
case 13:t=2
w=7
break
case 5:t=4
a1=s.pop()
j=A.a2(a1)
if(a2.e!=null)B.av9(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uA,v)},
x9(d,e){return this.aEK(d,e)},
aEK(a0,a1){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$x9=A.m(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:g=r.e
f=J.V(g)
e=f.h(g,"km_stand_anfang")
e=e==null?null:J.al(e)
if(e==null)e=""
n=$.ag()
m=new A.bv(new A.cx(e,C.bb,C.aG),n)
e=f.h(g,"km_stand_ende")
e=e==null?null:J.al(e)
if(e==null)e=""
l=new A.bv(new A.cx(e,C.bb,C.aG),n)
w=3
return A.k(A.hh(null,null,!0,null,new B.bbB(r,m,l),a0,null,!0,!0,x.y),$async$x9)
case 3:if(a3!==!0){w=1
break}q=A.iy(C.c.aK(m.a.a),null)
p=A.iy(C.c.aK(l.a.a),null)
if(q!=null&&p!=null&&p<q){if(a0.e!=null)a0.O(x.q).f.b2(D.aA8)
w=1
break}t=5
e=a1.aD(0,$.bL(),x.A).cW("pkw_jahr")
n=x.N
k=x.z
g=A.a4(["pkw_id",f.h(g,"id"),"jahr",r.f,"km_stand_anfang",q,"km_stand_ende",p],n,k)
f=e.a
j=A.d3(f.b,n,n)
j.m(0,"Prefer","resolution=merge-duplicates")
i=f.a
f=A.z(n,k)
f.m(0,"on_conflict","pkw_id,jahr")
f.K(0,i.ghB())
i=i.tF(0,f)
w=8
return A.k(A.ma(e.Ho(g,j,C.nO,i),A.l(e).i("t0.T")),$async$x9)
case 8:w=9
return A.k(r.w.$0(),$async$x9)
case 9:t=2
w=7
break
case 5:t=4
d=s.pop()
o=A.a2(d)
if(a0.e!=null)B.av9(a0,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x9,v)},
xa(d,e){return this.aEM(d,e)},
aEM(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xa=A.m(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h={}
h.a="tanken"
n=$.ag()
m=new A.bv(C.a8,n)
q=new A.bv(C.a8,n)
w=3
return A.k(A.hh(null,null,!0,null,new B.bbO(h,r,m,q),d,null,!0,!0,x.y),$async$xa)
case 3:if(a0!==!0){w=1
break}n=C.c.aK(m.a.a)
l=A.fT(A.ax(n,",","."))
p=l==null?0:l
if(p<=0){if(d.e!=null)d.O(x.q).f.b2(D.YR)
w=1
break}t=5
n=e.aD(0,$.bL(),x.A).cW("pkw_kosten")
k=J.Z(r.e,"id")
h=h.a
j=C.c.aK(q.a.a).length===0?null:C.c.aK(q.a.a)
w=8
return A.k(n.iG(0,A.a4(["pkw_id",k,"jahr",r.f,"kostenart",h,"betrag_brutto",p,"bezeichnung",j],x.N,x.z)),$async$xa)
case 8:w=9
return A.k(r.w.$0(),$async$xa)
case 9:t=2
w=7
break
case 5:t=4
g=s.pop()
o=A.a2(g)
if(d.e!=null)B.av9(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xa,v)}}
B.akw.prototype={
df(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.p,e=A.b([D.a8g],f),d=h.w
if(!d)e.push(A.nr(D.F7,D.aGp,h.f.gp(0)===0?g:new B.bbx(h,a0,a1),g))
e=A.b([A.ao(e,C.k,g,C.f,C.h,0,g,g),C.P],f)
w=h.e
if(w.gp(0)===0)e.push(new B.Vy("F\xfcr "+h.r+" ist noch keine betriebliche Fahrt erfasst.",C.q,D.abv,g))
else{v=A.b([D.D3,D.a5Y,D.a66],x.G)
for(u=h.f,t=u.$ti,s=t.i("b8<an.E>"),r=new A.b8(u,u.gp(0),s),t=t.i("an.E");r.t();){q=r.d
v.push(new B.fl(A.j(A.i(J.Z(q==null?t.a(q):q,"kennzeichen")),g,g,g,g,g,g,g),!0))}v.push(D.a5Z)
r=A.b([],x._)
for(q=w.$ti,w=new A.b8(w,w.gp(0),q.i("b8<an.E>")),p=x.F,q=q.i("an.E");w.t();){o=w.d
if(o==null)o=q.a(o)
n=d?g:new B.bby(h,a0,a1,o)
m=J.V(o)
l=m.h(o,"fahrt_datum")
k=A.eR(A.i(l==null?"":l))
l=A.j(k==null?"":$.dp().al(k),g,g,g,g,g,g,g)
j=m.h(o,"anlass")
l=A.b([new B.fw(l),new B.fw(new A.dP(D.a0v,A.j(A.i(j==null?"":j),g,C.ai,g,g,g,g,g),g)),new B.fw(A.j(B.brY(m.h(o,"kilometer")),g,g,g,g,g,g,g))],p)
for(j=new A.b8(u,u.gp(0),s);j.t();){i=j.d
if(J.d(J.Z(i==null?t.a(i):i,"id"),m.h(o,"pkw_id"))){i=m.h(o,"satz_je_km")
if(i==null)i="\u2014"
else{i=C.d.ae(B.uf(i),4)
i=A.ax(i,".",",")+" \u20ac"}}else i=""
l.push(new B.fw(A.j(i,g,g,g,g,g,g,g)))}if(m.h(o,"betrag")==null)o="\u2014"
else{o=B.uf(m.h(o,"betrag"))
o=$.d2().al(o)}l.push(new B.fw(A.j(o,g,g,g,g,g,g,g)))
r.push(new B.r6(n,l,g))}e.push(A.ev(B.aB_(16,v,56,40,g,40,r),g,g,g,C.ay))}e.push(C.v)
e.push(A.by(g,A.ao(A.b([A.aA(A.j("Nutzungseinlage "+h.r,g,g,g,A.D(C.j,15,C.p),g,g,g),1),A.j($.d2().al(h.x),g,g,g,A.D(C.j,17,C.p),g,g,g)],f),C.k,g,C.f,C.h,0,g,g),C.ae,g,C.D,g,3))
d=h.y
if(d>0){w=d===1?"":"en"
C.b.K(e,A.b([C.P,A.j(""+d+" Fahrt"+w+" ohne Kilometersatz. Diese Fahrten sind in der Summe nicht enthalten, weil f\xfcr das Fahrzeug Kilometerst\xe4nde oder Kosten fehlen.",g,g,g,A.D(C.ak,12,C.l),g,g,g)],f))}return A.ac(e,C.C,g,C.f,C.h,0)},
ux(d,e,f){return this.axg(d,e,f)},
axg(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ux=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:e={}
d=J.V(a4)
a0=A.eR(A.i(d.h(a4,"fahrt_datum")))
e.a=a0==null?A.bB(r.r,1,1,0,0,0,0):a0
e.b=A.i(d.h(a4,"pkw_id"))
i=d.h(a4,"anlass")
i=A.i(i==null?"":i)
h=$.ag()
q=new A.bv(new A.cx(i,C.bb,C.aG),h)
i=C.d.ae(B.uf(d.h(a4,"kilometer")),1)
i=A.ax(i,".",",")
p=new A.bv(new A.cx(i,C.bb,C.aG),h)
i=x.N
w=3
return A.k(A.hh(null,null,!0,null,new B.bbo(e,r,q,p),a2,null,!0,!0,i),$async$ux)
case 3:o=a6
if(o==null||o==="abbrechen"){w=1
break}n=a3.aD(0,$.bL(),x.A)
m=A.i(d.h(a4,"id"))
t=5
w=o==="streichen"?8:10
break
case 8:l=A.a4(["deleted_at",new A.aZ(Date.now(),0,!1).dU()],i,i)
w=11
return A.k(n.cW("pkw_fahrten").dm(0,l).iE("id",m),$async$ux)
case 11:w=9
break
case 10:d=C.c.aK(p.a.a)
g=A.fT(A.ax(d,",","."))
k=g==null?0:g
if(k<=0||C.c.aK(q.a.a).length===0){if(a2.e!=null)a2.O(x.q).f.b2(D.YS)
w=1
break}d=x.z
w=12
return A.k(n.cW("pkw_fahrten").dm(0,A.a4(["pkw_id",e.b,"fahrt_datum",C.c.a_(e.a.dU(),0,10),"anlass",C.c.aK(q.a.a),"kilometer",k,"updated_at",new A.aZ(Date.now(),0,!1).dU()],d,d)).iE("id",m),$async$ux)
case 12:case 9:w=13
return A.k(r.z.$0(),$async$ux)
case 13:t=2
w=7
break
case 5:t=4
a1=s.pop()
j=A.a2(a1)
if(a2.e!=null)B.av9(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$ux,v)},
x_(d,e){return this.axh(d,e)},
axh(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$x_=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:k={}
j=r.r
i=A.bB(j,A.bi(new A.aZ(Date.now(),0,!1)),A.bU(new A.aZ(Date.now(),0,!1)),0,0,0,0)
k.a=i
if(A.aU(i)!==j)k.a=A.bB(j,1,1,0,0,0,0)
j=r.f
k.b=A.i(J.Z(j.ga2(j),"id"))
j=$.ag()
q=new A.bv(C.a8,j)
n=new A.bv(C.a8,j)
w=3
return A.k(A.hh(null,null,!0,null,new B.bbw(k,r,q,n),d,null,!0,!0,x.y),$async$x_)
case 3:if(g!==!0){w=1
break}j=C.c.aK(n.a.a)
m=A.fT(A.ax(j,",","."))
p=m==null?0:m
if(p<=0||C.c.aK(q.a.a).length===0){if(d.e!=null)d.O(x.q).f.b2(D.YS)
w=1
break}t=5
w=8
return A.k(e.aD(0,$.bL(),x.A).cW("pkw_fahrten").iG(0,A.a4(["pkw_id",k.b,"fahrt_datum",C.c.a_(k.a.dU(),0,10),"anlass",C.c.aK(q.a.a),"kilometer",p],x.N,x.aU)),$async$x_)
case 8:w=9
return A.k(r.z.$0(),$async$x_)
case 9:t=2
w=7
break
case 5:t=4
h=s.pop()
o=A.a2(h)
if(d.e!=null)B.av9(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x_,v)}}
B.ati.prototype={
u(d){var w,v,u,t,s,r,q=null,p="Hanken Grotesk",o=this.c,n=A.af(o),m=n.i("f3<1,f>"),l=A.Q(new A.f3(new A.bc(o,new B.bq0(),n.i("bc<1>")),new B.bq1(),m),m.i("t.E"))
n=x.p
m=A.b([],n)
for(w=o.length,v=0;v<o.length;o.length===w||(0,A.G)(o),++v){u=o[v]
t=A.bf(q,q,C.t,C.q,q,q,q,1,q,D.a7x,q,q,q,q)
s=J.V(u)
r=s.h(u,"full_name")
r=A.i(r==null?"":r)
r=A.j(r,q,q,q,new A.O(!0,C.j,q,p,C.bw,q,13,C.S,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)
s=s.h(u,"role_label")
s=A.i(s==null?"":s)
C.b.K(m,A.b([new A.kO(1,C.dY,new A.nT(A.ac(A.b([t,r,A.j(s,q,q,q,new A.O(!0,C.q,q,p,C.bw,q,11,C.l,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)],n),C.C,q,C.f,C.h,0),q,C.D,q,q,q,3,q),q),C.aF],n))}o=A.b([D.a8p,C.P,A.ao(m,C.k,q,C.f,C.h,0,q,q)],n)
if(l.length!==0)C.b.K(o,A.b([C.P,A.j("F\xfcr "+C.b.cj(l," und ")+" ist noch keine Unterschrift hinterlegt. Im PDF bleibt die Linie leer, bis die Unterschrift \xfcber DocuSign geholt wurde.",q,q,q,A.D(C.ak,12,C.l),q,q,q)],n))
return A.ac(o,C.C,q,C.f,C.h,0)}}
B.amn.prototype={
u(d){var w,v,u,t,s="kostenart",r=null,q=this.c,p=J.V(q),o=D.lU.h(0,A.i(p.h(q,s)))
if(o==null)o=A.i(p.h(q,s))
w=p.h(q,"bezeichnung")
v=C.c.aK(A.i(w==null?"":w))
q=B.uf(p.h(q,"betrag_brutto"))
u=$.d2().al(q)
q=x.p
p=A.b([A.j(o,r,r,r,A.D(C.aU,13,C.l),r,r,r)],q)
if(v.length!==0)p.push(A.j(v,1,C.ai,r,A.D(C.q,11,C.l),r,r,r))
p=A.b([A.aA(A.ac(p,C.C,r,C.f,C.h,0),1),A.j(u,r,r,r,A.D(C.j,13,C.aI),r,r,r)],q)
w=this.d
if(!w)C.b.K(p,A.b([C.cF,D.adi],q))
t=new A.ah(D.a7C,A.ao(p,C.k,r,C.f,C.h,0,r,r),r)
if(w)return t
return A.bC(r,!0,r,A.eD(!1,r,!0,t,r,!0,r,r,r,r,r,r,r,r,r,r,r,this.e,r,r,r,r,r,r,r),!1,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,o+" "+u+" korrigieren",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.O,r)}}
B.arr.prototype={
u(d){var w,v,u=null,t=this.d,s=t==null,r=s?u:t.h(0,"freigegeben_am"),q=A.eR(A.i(r==null?"":r))
t=s?u:t.h(0,"unterzeichner")
x.g.a(t)
if(t==null)t=C.bm
t=J.cV(t,new B.bo3(),x.N).AK(0,new B.bo4())
w=A.Q(t,t.$ti.i("t.E"))
t=A.j("Freigegeben und unterschrieben",u,u,u,A.D(C.j,14,C.p),u,u,u)
s=q==null?"":" seit "+$.dp().al(q)
r=w.length===0?"":", unterschrieben von "+C.b.cj(w," und ")
v=x.p
return A.by(u,A.ao(A.b([D.acI,C.aF,A.aA(A.ac(A.b([t,C.bM,A.j("Die Anlage "+this.c+" ist abgeschlossen"+s+r+". Korrekturen sind nicht mehr m\xf6glich, weder hier noch \xfcber einen anderen Weg.",u,u,u,A.D(C.aU,12,C.l),u,u,u),C.b6,A.j("Ist etwas falsch, geh\xf6rt die Berichtigung in eine neue Anlage. Ein unterschriebenes Dokument nachtr\xe4glich zu \xe4ndern, w\xe4re keine Korrektur.",u,u,u,A.D(C.q,12,C.l),u,u,u)],v),C.C,u,C.f,C.h,0),1)],v),C.C,u,C.f,C.h,0,u,u),C.ae,u,C.D,u,3)}}
B.Cy.prototype={
u(d){var w=null,v=this.e,u=v?C.S:C.l
u=A.aA(A.j(this.c,w,w,w,A.D(v?C.j:C.aU,13,u),w,w,w),1)
return new A.ah(D.Dr,A.ao(A.b([u,A.j(this.d,w,w,w,A.D(C.j,13,v?C.p:C.aI),w,w,w)],x.p),C.k,w,C.f,C.h,0,w,w),w)}}
B.aif.prototype={
u(d){var w=null,v=A.aR(9999),u=A.cU(C.m.eI(0.5),1)
return A.bf(w,A.ac(A.b([A.j(this.c,w,w,w,A.D(C.m,13,C.p),w,w,w),A.j(this.d,w,w,w,A.D(C.m,9,C.l),w,w,w)],x.p),C.fN,w,C.f,C.h,0),C.t,w,w,new A.b4(C.bF,w,u,v,w,w,C.G),w,w,w,w,D.a7F,w,w,w)}}
B.Vy.prototype={
u(d){var w=null
return A.by(w,A.ao(A.b([A.cp(this.e,this.d,w,w),C.aF,A.aA(A.j(this.c,w,w,w,A.D(C.j,14,C.l),w,w,w),1)],x.p),C.C,w,C.f,C.h,0,w,w),C.ae,w,C.D,w,3)}}
B.a0g.prototype={
u(d){var w=null
return A.dd(D.a9q,w,A.dF(A.b([D.ax6,C.P,A.j("\xdcbersichten, die Dein Steuerberater zum Jahresabschluss braucht. Jede l\xe4sst sich als PDF ausgeben und von beiden Gesellschaftern freigeben.",w,w,w,A.D(C.q,13,C.l),w,w,w),C.aQ,B.bVM(w,"Kilometersatz und Nutzungseinlage",D.EA,w,w,w,"PKW-Kosten",new B.awn(d))],x.p),C.cj,w,C.M,!1),w,w,w)}}
B.a4J.prototype={
df(d,e){var w=null
return A.dd(D.a94,w,A.dz(e.ao($.bvS(),x.w),new B.aC5(e),new B.aC6(),new B.aC7(),!1,!0,!1,x.D,x.E),w,w,w)}}
B.akj.prototype={
u(d){return D.a30}}
B.ah6.prototype={
aLP(d){switch(d){case"approved":return C.aE
case"rejected":return C.ak
case"cancelled":return C.q
default:return C.m}},
df(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=J.V(e),a0=d.h(e,"status"),a1=a0==null?f:J.al(a0)
if(a1==null)a1="pending"
a0=d.h(e,"my_decision")
w=a0==null?f:J.al(a0)
if(w==null)w="pending"
a0=x.g.a(d.h(e,"decisions"))
v=a0==null?f:J.cE(a0,x.P)
if(v==null)v=A.b([],x.t)
u=new B.b3I()
t=u.$1(d.h(e,"period_from"))
s=u.$1(d.h(e,"period_to"))
r=u.$1(d.h(e,"requested_at"))
a0=a1==="approved"
q=a0||a1==="rejected"||a1==="cancelled"
p=d.h(e,"final_pdf_path")
o=p==null?f:J.al(p)
n=a0&&o!=null&&o.length!==0
a0=d.h(e,"signed_url")
m=a0==null?f:J.al(a0)
a0=d.h(e,"document_kind")
l=new B.b3H(g,n,a2,a1,a0==null?f:J.al(a0),m,a3,o)
a0=q?l:f
p=g.aLP(a1)
e=d.h(e,"title")
e=e==null?f:J.al(e)
if(e==null)e=""
e=A.aA(A.j(e,f,f,f,A.D(C.j,15,C.p),f,f,f),1)
A:{d="approved"===a1
if(d){k="freigegeben"
break A}if("rejected"===a1){k="abgelehnt"
break A}if("cancelled"===a1){k="abgebrochen"
break A}k="offen"
break A}B:{if(d){d=C.fB
break B}if("rejected"===a1){d=C.mi
break B}if("cancelled"===a1){d=C.mj
break B}d=C.ka
break B}j=x.p
d=A.ao(A.b([e,new A.j5(k,d,f,f)],j),C.k,f,C.f,C.h,0,f,f)
e=t==null?"?":$.dp().al(t)
k=s==null?"?":$.dp().al(s)
i=r==null?"":" \xb7 angefragt "+$.dp().al(r)
i=A.b([d,C.b6,A.j("Zeitraum: "+e+" \u2013 "+k+i,f,f,f,A.D(C.q,11,C.l),f,f,f),C.v],j)
for(e=J.bh(v);e.t();)i.push(new B.ajq(e.gN(e),f))
if(a1==="pending"&&w==="pending")C.b.K(i,A.b([C.v,A.ao(A.b([A.aA(A.h7(C.nY,D.aGt,new B.b3F(g,a2,a3),A.dK(C.kE,C.B,f,f,f,f,f)),1),C.aV,A.aA(A.fR(C.EZ,C.mp,new B.b3G(g,a2,a3),A.oC(f,f,f,f,f,f,f,f,f,C.ak,f,f,f,f,f,D.Bi,f,f,f,f)),1)],j),C.k,f,C.f,C.h,0,f,f)],j))
if(n)C.b.K(i,A.b([C.v,A.ao(A.b([D.EW,C.b2,A.aA(A.j("Tippen zum \xd6ffnen des signierten PDFs",f,f,f,A.D(C.m,11,C.S),f,f,f),1),D.ad6],j),C.k,f,C.f,C.h,0,f,f)],j))
h=A.by(f,A.ac(i,C.C,f,C.f,C.h,0),f,a0,C.aj,p,3)
return new A.ah(C.dV,q?A.zV(h,0.6):h,f)},
Ca(d,e,f){return this.aHa(d,e,f)},
aHa(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Ca=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(f.length===0){w=1
break}r=d.O(x.q).f
r.b2(D.azT)
q=e.aD(0,$.bvT(),x.u)
t=4
w=7
return A.k(q.Gz(f),$async$Ca)
case 7:p=h
if(p==null||p.length===0){m=A.e5("Kein Signed-URL verf\xfcgbar")
throw A.e(m)}w=8
return A.k(A.mE(A.cm(p,0,null),C.en,"_blank"),$async$Ca)
case 8:o=h
if(!o&&d.e!=null)r.b2(A.c6(new B.GD("Link kopieren",new B.b3E(p),null),null,null,null,null,C.n,null,D.aGb,null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.a2(k)
if(d.e!=null)r.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Ca,v)},
uo(d,e,f){return this.avG(d,e,f)},
avG(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$uo=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:m=null
w=f==="rejected"?3:5
break
case 3:w=6
return A.k(A.hh(null,null,!0,null,new B.b3C(new A.bv(C.a8,$.ag()),d),d,null,!0,!0,x.N),$async$uo)
case 6:m=h
if(m==null||C.c.aK(m).length<3){w=1
break}w=4
break
case 5:w=7
return A.k(A.kA(null,new B.b3D(),d,!0,null,null,x.y),$async$uo)
case 7:if(h!==!0){w=1
break}case 4:t=9
p=e.aD(0,$.bvT(),x.u)
o=J.Z(r.e,"id")
o=o==null?null:J.al(o)
if(o==null)o=""
w=12
return A.k(p.L5(o,m,f),$async$uo)
case 12:if(d.e!=null){p=$.bvS()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(p)
p=d.O(x.q).f
p.b2(A.c6(null,null,null,null,null,C.n,null,A.j(f==="approved"?"Freigegeben \u2014 signiertes PDF wird erzeugt.":"Abgelehnt.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=11
break
case 9:t=8
l=s.pop()
q=A.a2(l)
if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=11
break
case 8:w=2
break
case 11:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uo,v)}}
B.Ci.prototype={
W(){return new B.Y8()}}
B.Y8.prototype={
av(){this.aL()
this.Ik()},
Ik(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Ik=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
q=r.gc8().aD(0,$.bL(),x.A)
l=q.gdX().e.a
l=l==null?null:l.r
p=l==null?null:l.a
if(p==null){w=1
break}w=7
return A.k(q.cW("partner_signatures").hj(0,"id, full_name, docusign_signature_uri, image_url, captured_via").iE("profile_id",p),$async$Ik)
case 7:o=e
n=J.cE(o,x.P)
r.J(new B.bng(r,n))
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a2(j)
r.J(new B.bnh(r,m))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Ik,v)},
Jv(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$Jv=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.bnl(q))
t=4
k=q.gc8().aD(0,$.bL(),x.A).ax
k===$&&A.a()
j=q.w
j.toString
w=7
return A.k(k.hw("docusign-fetch-signature",A.a4(["signature_id",J.Z(j,"id")],x.N,x.z)),$async$Jv)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}o=p.a
k=x.f
if(k.b(o)&&J.d(J.Z(o,"ok"),!0)){k=q.c
if(k!=null)A.b5(k,!1).cC(!0)}else{if(k.b(o)){j=J.Z(o,"error")
j=j==null?null:J.al(j)
i=j==null?A.i(o):j}else i=A.i(o)
n=i
if(k.b(o)){k=J.Z(o,"hint")
h=k==null?null:J.al(k)}else h=null
m=h
q.J(new B.bnm(q,m,n))}r.push(6)
w=5
break
case 4:t=3
f=s.pop()
l=A.a2(f)
q.J(new B.bnn(q,l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bno(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Jv,v)},
uS(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$uS=A.m(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.bnp(q))
t=4
w=7
return A.k($.aF5.cd().aZq(C.a8L,!0),$async$uS)
case 7:p=a1
if(p==null||J.er(p.a)){q.J(new B.bnq(q))
r=[1]
w=5
break}o=J.K7(p.a)
n=o.c
if(n==null){q.J(new B.bnr(q))
r=[1]
w=5
break}m=q.gc8().aD(0,$.bL(),x.A)
h=C.b.gaf(o.b.split(".")).toLowerCase()
l=h
g=q.w
g.toString
k=A.i(J.Z(g,"id"))+"."+A.i(l)
g=m.ay
g===$&&A.a()
g=g.cW("partner-signatures")
f=J.d(l,"jpg")||J.d(l,"jpeg")?"image/jpeg":"image/png"
w=8
return A.k(g.A3(k,n,new A.Ei(!0,f)),$async$uS)
case 8:f=m.ay
f===$&&A.a()
w=9
return A.k(f.cW("partner-signatures").nK(k,31536e3),$async$uS)
case 9:j=a1
f=q.w
f.toString
g=x.z
w=10
return A.k(m.er("set_partner_signature_image",A.a4(["p_signature_id",J.Z(f,"id"),"p_image_url",j,"p_captured_via","manual"],x.N,g),g),$async$uS)
case 10:g=q.c
if(g!=null)A.b5(g,!1).cC(!0)
r.push(6)
w=5
break
case 4:t=3
d=s.pop()
i=A.a2(d)
q.J(new B.bns(q,i))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bnt(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uS,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n="image_url",m=p.w,l=m==null,k=!l
if(k){m=J.Z(m,"docusign_signature_uri")
m=m==null?o:J.al(m).length!==0
w=m===!0}else w=!1
if(k){m=p.w
m.toString
m=J.Z(m,n)
m=m==null?o:J.al(m).length!==0
v=m===!0}else v=!1
m=A.bF(d,o,x.m).w
u=x.p
t=A.b([A.j("Signatur f\xfcr Freigabe w\xe4hlen",o,o,o,A.c3(C.j,20,C.p),o,o,o),C.P,A.j("Deine Unterschrift wird im signierten PDF als Freigabe-Stempel eingebettet.",o,o,o,A.D(C.q,13,C.l),o,o,o),C.K],u)
if(p.x)t.push(C.bE)
else if(l)t.push(A.by(C.ak,A.j("F\xfcr Dein Konto ist kein Signatur-Slot verkn\xfcpft. Bitte einen System-Admin bitten, partner_signatures.profile_id auf Deine Profil-ID zu setzen.",o,o,o,A.D(C.j,13,C.l),o,o,o),C.eJ,o,C.D,o,3))
else{l=A.b([],u)
if(v){s=A.cU(C.ao,1)
r=A.aR(12)
q=p.w
q.toString
q=J.Z(q,n)
q=q==null?o:J.al(q)
if(q==null)q=""
l.push(A.bf(C.W,A.aJ_(q,new B.bnx(),C.By,o,o,o,o),C.t,o,o,new A.b4(C.ae,o,s,r,o,o,C.G),o,80,o,C.dV,o,o,o,o))}s=p.y||!w?o:p.gaLY()
l.push(A.h7(D.ad_,D.aH0,s,A.dK(C.m,C.B,o,C.em,o,o,o)))
if(!w)l.push(new A.ah(C.hW,A.j("Kein DocuSign-Signatur-Slot hinterlegt.",o,o,o,A.D(C.q,10,C.l),o,o,o),o))
l.push(C.P)
s=p.y?o:p.gaNF()
l.push(A.fR(D.acb,D.aFX,s,A.oC(o,o,o,o,o,o,o,o,o,C.j,o,o,C.em,o,o,C.vV,o,o,o,o)))
l.push(C.P)
s=p.y?o:new B.bny(d)
l.push(A.d9(A.j(v?"Diese Signatur verwenden":"Ohne Signatur freigeben (Platzhalter)",o,o,o,o,o,o,o),o,o,s,o,o))
C.b.K(t,l)}l=p.z
if(l!=null)C.b.K(t,A.b([C.v,A.j(l,o,o,o,A.D(C.ak,12,C.l),o,o,o)],u))
t.push(C.P)
t.push(A.d9(C.c_,o,o,p.y?o:new B.bnz(d),o,o))
return new A.ah(new A.ak(0,0,0,m.f.d),A.ev(A.ac(t,C.a9,o,C.f,C.H,0),o,C.D,o,C.M),o)}}
B.ajq.prototype={
u(d){var w,v,u,t,s=null,r=this.c,q=J.V(r),p=q.h(r,"decision"),o=p==null?s:J.al(p)
if(o==null)o="pending"
p=q.h(r,"approver_name")
w=p==null?s:J.al(p)
if(w==null)w="?"
p=q.h(r,"decided_at")
v=p==null?s:J.al(p)
r=q.h(r,"comment")
u=r==null?s:J.al(r)
A:{r="approved"===o
if(r){q=C.i1
break A}if("rejected"===o){q=C.Ef
break A}q=C.Eq
break A}B:{if(r){p=C.aE
break B}if("rejected"===o){p=C.ak
break B}p=C.m
break B}p=A.cp(q,p,s,16)
C:{if(r){r="freigegeben"
break C}if("rejected"===o){r="abgelehnt"
break C}r="ausstehend"
break C}q=v==null?"":" \xb7 "+v
t=x.p
q=A.b([A.j(w+" \u2014 "+r+q,s,s,s,A.D(C.j,12,C.S),s,s,s)],t)
if((u==null?s:u.length!==0)===!0)q.push(A.j("\u201e"+A.i(u)+'"',s,s,s,A.D(C.q,11,C.l),s,s,s))
return new A.ah(C.a7o,A.ao(A.b([p,C.b2,A.aA(A.ac(q,C.C,s,C.f,C.h,0),1)],t),C.k,s,C.f,C.h,0,s,s),s)}}
B.KN.prototype={
W(){return new B.Ty()}}
B.Ty.prototype={
H7(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m
var $async$H7=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b49(r))
u=3
o=r.gc8().aD(0,$.ea(),x.cu)
w=6
return A.k(o.em(o.a.gaPs(),x.N),$async$H7)
case 6:q=e
r.J(new B.b4a(r,q))
s.push(5)
w=4
break
case 3:u=2
m=t.pop()
p=A.a2(m)
o=r.c
if(o!=null)o.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.b4b(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$H7,v)},
Hz(){var w=0,v=A.q(x.H),u,t=this,s
var $async$Hz=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.w
if(s==null){w=1
break}w=3
return A.k(B.bAB(s),$async$Hz)
case 3:case 1:return A.o(u,v)}})
return A.p($async$Hz,v)},
u(d){var w,v=this,u=null,t=A.j("Exportiert alle Unternehmer-Kunden (customer_type = business) als CSV-Datei im sevDesk-Import-Format. Semikolon-getrennt, UTF-8, eine Zeile pro Kunde. Import in sevDesk unter Stammdaten \u2192 Kunden \u2192 Importieren.",u,u,u,A.D(C.q,13,C.l),u,u,u),s=v.x,r=s?u:v.gasA()
s=s?C.uT:D.F0
w=x.p
r=A.b([t,C.aQ,A.h7(s,D.aGx,r,A.dK(C.m,C.B,u,C.hV,u,u,u)),C.v],w)
if(v.w!=null){t=A.fR(E.EX,D.aGq,v.gawy(),A.oC(u,u,u,u,u,u,u,u,u,C.j,u,u,C.hV,u,u,C.kw,u,u,u,u))
s=v.w
s.toString
C.b.K(r,A.b([t,C.v,A.by(u,A.aXW(s,A.D(C.j,12,C.l).aQy("monospace")),u,u,C.dF,u,3)],w))}return A.dd(D.a9a,u,A.dF(r,C.D,u,C.M,!1),u,u,u)}}
B.Lc.prototype={
W(){return new B.TS()}}
B.TS.prototype={
av(){this.aL()
this.w=this.wL()},
wL(){var w=0,v=A.q(x.D),u,t=this,s
var $async$wL=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A
w=3
return A.k(t.gc8().aD(0,$.bL(),x.A).cW("cancellation_requests").hj(0,"id, email, customer_number, kind, reason, cancel_at, requested_at, processed_at").qE(0,"requested_at",!1),$async$wL)
case 3:u=s.en(e,!0,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$wL,v)},
Ip(d){return this.aFk(d)},
aFk(d){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$Ip=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:r=t.gc8().aD(0,$.bL(),x.A)
q=r.cW("cancellation_requests")
p=new A.aZ(Date.now(),0,!1).Ft().dU()
o=r.gdX().e.a
o=o==null?null:o.r
o=o==null?null:o.a
s=x.z
w=3
return A.k(q.dm(0,A.a4(["processed_at",p,"processed_by",o],s,s)).iE("id",d),$async$Ip)
case 3:if(t.c==null){w=1
break}t.J(new B.b5K(t))
case 1:return A.o(u,v)}})
return A.p($async$Ip,v)},
axQ(d){var w,v
if(d==null||d.length===0)return"\u2014"
w=A.eR(d)
v=w==null?null:w.Fo()
if(v==null)return d
w=new B.b5J()
return A.i(w.$1(A.bU(v)))+"."+A.i(w.$1(A.bi(v)))+"."+A.aU(v)+", "+A.i(w.$1(A.hz(v)))+":"+A.i(w.$1(A.vN(v)))+" Uhr"},
u(d){var w=this.w
w===$&&A.a()
return A.dd(D.a96,C.c4,A.id(A.yJ(new B.b5O(this),w,x.D),C.m,new B.b5P(this)),null,null,null)}}
B.ai2.prototype={
u(d){var w,v,u,t,s,r="processed_at",q=null,p="customer_number",o=this.c,n=J.V(o),m=n.h(o,r)==null,l=!m,k=J.d(n.h(o,"kind"),"ausserordentlich"),j=l?C.ao:C.dC,i=n.h(o,"email")
i=A.aA(A.j(J.al(i==null?"":i),q,C.ai,q,A.D(C.j,14,C.p),q,q,q),1)
w=l?C.aE.eI(0.12):C.dC.eI(0.14)
v=A.cU(l?C.aE:C.dC,0.8)
u=A.aR(9999)
t=l?"BEARBEITET":"OFFEN"
s=x.p
u=A.ao(A.b([i,A.bf(q,A.j(t,q,q,q,A.D(l?C.aE:C.dC,10,C.p).fV(0.6),q,q,q),C.t,q,q,new A.b4(w,q,v,u,q,q,C.G),q,q,q,q,C.x4,q,q,q)],s),C.k,q,C.f,C.h,0,q,q)
i=k?"Au\xdferordentliche":"Ordentliche"
w=n.h(o,"cancel_at")
i=A.j(i+" K\xfcndigung \xb7 "+J.al(w==null?"":w),q,q,q,A.D(C.j,12,C.S),q,q,q)
w=this.d
v=A.i(w.$1(A.aj(n.h(o,"requested_at"))))
t=n.h(o,p)!=null?" \xb7 Kd-Nr. "+A.i(n.h(o,p)):""
t=A.b([u,C.P,i,A.j("Eingegangen: "+v+t,q,q,q,A.D(C.q,12,C.l),q,q,q)],s)
i=n.h(o,"reason")
if(J.al(i==null?"":i).length!==0)C.b.K(t,A.b([C.P,A.j("Grund: "+A.i(n.h(o,"reason")),q,q,q,A.D(C.aU,12,C.l),q,q,q)],s))
if(l)t.push(A.j("Bearbeitet: "+A.i(w.$1(A.aj(n.h(o,r)))),q,q,q,A.D(C.aE,12,C.l),q,q,q))
if(m)C.b.K(t,A.b([C.v,A.fR(D.acy,D.aGo,this.e,q)],s))
return A.by(j,A.ac(t,C.C,q,C.f,C.h,0),q,q,C.D,q,3)}}
B.a1v.prototype={
u(d){return B.PR("collected_at","cash",new B.ayR(),new B.ayS(),new B.ayT(),"cash_collection_logs","Geldentnahme")}}
B.Bq.prototype={
W(){var w=$.ag()
return new B.TV(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(new A.cx("0",C.bb,C.aG),w))}}
B.TV.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
atP(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hS()
if(s!==!0)return
s=t.c
s.toString
s=A.b5(s,!1)
w=t.z
v=t.x.a.a
v=A.JM(A.ax(v,",","."))
u=t.y.a.a
if(u.length===0)u="0"
s.cC(A.a4(["machine_id",w,"amount_gross",v,"change_amount",A.JM(A.ax(u,",",".")),"collected_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ah(new A.ak(0,0,0,A.bF(d,v,x.m).w.f.d),A.ev(A.k0(v,A.ac(A.b([A.j("Geldentnahme erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.OA(new B.b5T(w),w.z),C.v,A.da(v,!1,w.x,D.adZ,v,C.eA,1,!1,v,v,C.X,v,new B.b5U()),C.v,A.da(v,!1,w.y,D.ae2,v,C.eA,1,!1,v,v,C.X,v,v),C.K,A.dk(C.dw,w.gatO(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.a1R.prototype={
u(d){return B.PR("cleaned_at","cleaning",new B.azu(),new B.azv(),new B.azw(),"cleaning_logs","Reinigung")}}
B.Bt.prototype={
W(){var w=$.ag()
return new B.U5(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.U5.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
aur(){var w,v,u,t,s=this,r=s.w.ga1()
r=r==null?null:r.hS()
if(r!==!0)return
r=s.c
r.toString
r=A.b5(r,!1)
w=s.z
v=s.Q
u=C.c.aK(s.x.a.a)
if(u.length===0)u=null
t=C.c.aK(s.y.a.a)
if(t.length===0)t=null
r.cC(A.a4(["machine_id",w,"cleaning_type",v,"agent",u,"notes",t,"photo_path",s.as,"cleaned_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.T))},
u(d){var w=this,v=null
return new A.ah(new A.ak(0,0,0,A.bF(d,v,x.m).w.f.d),A.ev(A.k0(v,A.ac(A.b([A.j("Reinigung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.OA(new B.b6G(w),w.z),C.v,A.jY(D.aeM,w.Q,!1,D.ajP,new B.b6H(w),v,x.N),C.v,A.da(v,!1,w.x,D.aen,v,v,1,!1,v,v,C.X,v,v),C.v,A.da(v,!1,w.y,D.ae7,v,v,2,!1,v,v,C.X,v,v),C.v,new B.Fz(new B.b6I(w),v),C.K,A.dk(C.dw,w.gauq(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.LM.prototype={
W(){return new B.U7()}}
B.U7.prototype={
av(){this.aL()
this.w=this.wM()},
wM(){var w=0,v=A.q(x.D),u,t=this,s
var $async$wM=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A
w=3
return A.k(t.gc8().aD(0,$.bL(),x.A).cW("purchase_complaints").hj(0,"id, kind, comment, status, resolution_note, created_at, purchase:purchases(purchased_at, total_gross), customer:customers(customer_number)").qE(0,"created_at",!1),$async$wM)
case 3:u=s.en(e,!0,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$wM,v)},
xv(d,e,f){return this.aL4(d,e,f)},
aL3(d,e){return this.xv(d,e,!1)},
aL4(d,e,f){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o,n
var $async$xv=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=f?3:5
break
case 3:s=A.aj(J.Z(d,"resolution_note"))
if(s==null)s=""
r=new A.bv(new A.cx(s,C.bb,C.aG),$.ag())
s=t.c
s.toString
w=6
return A.k(A.hh(null,null,!0,null,new B.b6U(e,r),s,null,!0,!0,x.y),$async$xv)
case 6:if(h!==!0){w=1
break}q=C.c.aK(r.a.a)
if(q.length===0)q=null
w=4
break
case 5:q=null
case 4:p=t.gc8().aD(0,$.bL(),x.A)
s=p.cW("purchase_complaints")
o=x.z
o=A.z(o,o)
o.m(0,"status",e)
if(f)o.m(0,"resolution_note",q)
n=p.gdX().e.a
n=n==null?null:n.r
o.m(0,"updated_by",n==null?null:n.a)
w=7
return A.k(s.dm(0,o).iE("id",A.aG(J.Z(d,"id"))),$async$xv)
case 7:if(t.c==null){w=1
break}t.J(new B.b6V(t))
case 1:return A.o(u,v)}})
return A.p($async$xv,v)},
u(d){var w=this.w
w===$&&A.a()
return A.dd(D.a9g,C.c4,A.yJ(new B.b7_(this),w,x.D),null,null,null)}}
B.HH.prototype={
u(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="resolution_note",d=g.c,a0=J.V(d),a1=A.aj(a0.h(d,"kind"))
if(a1==null)a1="other"
w=g.d.$1(a1)
v=A.aj(a0.h(d,"status"))
if(v==null)v="open"
u=g.e.$1(v)
a1=x.h
t=a1.a(a0.h(d,"purchase"))
s=a1.a(a0.h(d,"customer"))
a1=A.aj(a0.h(d,"created_at"))
r=A.eR(a1==null?"":a1)
a1=t==null
q=A.aj(a1?f:J.Z(t,"purchased_at"))
p=A.eR(q==null?"":q)
q=v==="open"
o=q||v==="in_progress"
n=o?C.m:f
m=A.cp(w.a,C.j,f,18)
l=A.aA(A.j(w.b,f,f,f,A.D(C.j,14,C.p),f,f,f),1)
k=u.a
j=A.cU(k,1)
i=A.aR(9999)
h=x.p
i=A.ao(A.b([m,C.b2,l,A.bf(f,A.j(u.b,f,f,f,A.D(k,10,C.p).fV(0.6),f,f,f),C.t,f,f,new A.b4(f,f,j,i,f,f,C.G),f,f,f,f,C.x4,f,f,f)],h),C.k,f,C.f,C.h,0,f,f)
m=s==null?f:J.Z(s,"customer_number")
m=A.i(m==null?"\u2014":m)
l=p!=null?$.dp().al(p):"\u2014"
k=A.b3(a1?f:J.Z(t,"total_gross"))
a1=k==null?0:k
a1=$.d2().al(a1)
k=r!=null?$.dp().al(r):"\u2014"
k=A.b([i,C.P,A.j("Kunde "+m+" \xb7 Kauf "+l+" \xfcber "+a1+" \xb7 gemeldet "+k,f,f,f,A.D(C.q,12,C.l),f,f,f)],h)
a1=A.aj(a0.h(d,"comment"))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.P,A.j("\u201e"+A.i(a0.h(d,"comment"))+'"',f,f,f,A.D(C.j,13,C.l).en(1.4),f,f,f)],h))
a1=A.aj(a0.h(d,e))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.P,A.j("Antwort: "+A.i(a0.h(d,e)),f,f,f,A.D(C.q,12,C.l).en(1.35),f,f,f)],h))
if(o){d=A.b([],h)
if(q)d.push(A.fR(D.abZ,D.aFG,new B.b6P(g),A.oC(f,f,f,f,f,f,f,f,f,C.j,f,f,f,f,f,C.kw,f,f,f,f)))
d.push(A.h7(D.acv,D.Zr,new B.b6Q(g),A.dK(C.bW,C.m,f,f,f,f,f)))
d.push(A.fR(D.acz,C.mp,new B.b6R(g),A.oC(f,f,f,f,f,f,f,f,f,C.ak,f,f,f,f,f,D.Bi,f,f,f,f)))
C.b.K(k,A.b([C.v,A.ll(C.cx,d,C.dK,8,8)],h))}return A.by(f,A.ac(k,C.C,f,C.f,C.h,0),f,f,C.aj,n,3)}}
B.a4I.prototype={
u(d){return B.PR("disposed_at","disposal",new B.aC1(),new B.aC2(),new B.aC3(),"disposal_logs","Vernichtung")}}
B.BB.prototype={
W(){var w=$.ag()
return new B.UN(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.UN.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
awf(){var w,v,u,t,s,r,q=this,p=null,o=q.w.ga1()
o=o==null?p:o.hS()
if(o!==!0)return
o=q.c
o.toString
o=A.b5(o,!1)
w=q.z
v=q.Q
u=C.c.aK(q.y.a.a)
if(u.length===0)u=p
t=A.ej(q.x.a.a,p)
s=q.as
r=q.at
r=r==null?p:C.c.a_(r.dU(),0,10)
o.cC(A.a4(["machine_id",w,"product_id",v,"product_label",u,"quantity",t,"reason",s,"mhd_date",r,"photo_path",q.ax,"disposed_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null,u=w.gc8().ao($.bCX(),x.w),t=A.bF(d,v,x.m).w,s=A.j("Vernichtung erfassen",v,v,v,A.W(d).ok.r,v,v,v),r=B.OA(new B.b9J(w),w.z),q=B.ax4(u,new B.b9K(w),new B.b9L(),x.D,x.l),p=A.da(v,!1,w.y,D.ae3,v,v,1,!1,v,v,C.X,v,new B.b9M()),o=A.da(v,!1,w.x,D.aey,v,C.cZ,1,!1,v,v,C.X,v,new B.b9N()),n=A.jY(D.aeB,w.as,!1,D.ak4,new B.b9O(w),v,x.N),m=w.at
return new A.ah(new A.ak(0,0,0,t.f.d),A.ev(A.k0(v,A.ac(A.b([s,C.K,r,C.v,q,C.v,p,C.v,o,C.v,n,C.P,A.rG(!1,C.a7,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.b9P(w,d),!1,v,v,v,v,v,v,A.j(m==null?"MHD-Datum (optional)":"MHD: "+C.c.a_(m.dU(),0,10),v,v,v,v,v,v,v),v,C.y8,v),C.P,new B.Fz(new B.b9Q(w),v),C.P,A.dk(C.dw,w.gawe(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.Mt.prototype={
W(){return new B.ajT()}}
B.ajT.prototype={
av(){this.aL()
if(!$.bIR){$.bIR=!0
A.bxy(new B.baA(this),x.a)}},
u(d){var w=this,v=null,u=w.gc8(),t=x.w,s=u.ao($.K0(),t),r=u.ao($.bvU(),t)
t=B.ax4(u.ao($.bw4(),x.i),new B.baw(),new B.bax(),x.C,x.y)?B.a5x(C.m,C.B,D.acm,D.Zs,new B.bay(w,d)):v
return A.dd(D.a9s,v,A.ac(A.b([new B.yR(A.b([new B.pO(D.abu,"Pr\xfcfer-Export als ZIP",new B.baz(w,d),C.m,v,w.y)],x.x),D.x0,v),A.aA(w.asJ(0,d,u,s,r),1)],x.p),C.k,v,C.f,C.h,0),v,t,v)},
asJ(d,e,f,g,h){return A.dz(g,new B.baa(this,h,f,B.ax4(f.ao($.bw4(),x.i),new B.bab(),new B.bac(),x.C,x.y),e),new B.bad(),new B.bae(),!1,!0,!1,x.D,x.l)},
wS(d,e,f,g){return this.aH7(0,e,f,g)},
aH7(d,e,f,a0){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$wS=A.m(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:j=J.V(a0)
i=j.h(a0,"latest_file_path")
h=i==null?null:J.al(i)
if(h==null||h.length===0){e.O(x.q).f.b2(D.azO)
w=1
break}i=j.h(a0,"title")
m=i==null?null:J.al(i)
r=m==null?"Dokument":m
l=h.toLowerCase()
q=C.c.ho(l,".pdf")
p=C.c.ho(l,".png")||C.c.ho(l,".jpg")||C.c.ho(l,".jpeg")||C.c.ho(l,".gif")||C.c.ho(l,".webp")
j=j.h(a0,"signed_url")
o=j==null?null:J.al(j)
t=4
w=o==null?7:8
break
case 7:j=f.aD(0,$.bL(),x.A).ay
j===$&&A.a()
w=9
return A.k(j.cW("documents").nK(h,86400),$async$wS)
case 9:o=a2
case 8:if(e.e==null){w=1
break}w=q||p?10:12
break
case 10:w=13
return A.k(B.bB7(e,r,o),$async$wS)
case 13:w=11
break
case 12:w=14
return A.k(A.mE(A.cm(o,0,null),C.en,null),$async$wS)
case 14:if(e.e!=null)e.O(x.q).f.b2(D.aA2)
case 11:t=2
w=6
break
case 4:t=3
g=s.pop()
n=A.a2(g)
if(e.e!=null)e.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$wS,v)},
wI(d,e,f){return this.ase(d,e,f)},
ase(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$wI=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.k($.aF5.cd().zo(D.anK,C.xK,!0),$async$wI)
case 3:j=h
if(j==null||J.er(j.a)){w=1
break}r=J.qP(j.a)
if(r.c==null){w=1
break}t=5
n=e.aD(0,$.bCZ(),x.Z)
m=r.b
l=r.c
l.toString
w=8
return A.k(n.b0T(0,"documents",l,m),$async$wI)
case 8:q=h
m=x.z
w=9
return A.k(e.aD(0,$.bL(),x.A).er("add_document_version",A.a4(["p_document",f,"p_file_path",q,"p_notes",r.b],x.N,m),m),$async$wI)
case 9:if(d.e==null){w=1
break}n=$.K0()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(n)
p=C.c.ho(r.b.toLowerCase(),".pdf")
n=d.O(x.q).f
n.b2(A.c6(null,null,null,null,null,C.n,null,A.j(p?"Neue Version gespeichert.":"Version gespeichert. Hinweis: Nicht-PDFs werden beim \xd6ffnen heruntergeladen \u2014 PDF ist ideal f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
i=s.pop()
o=A.a2(i)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Upload fehlgeschlagen: "+A.i(o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$wI,v)},
Cy(d,e,f){return this.aL7(d,e,f)},
aL7(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Cy=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:o=J.V(f)
n=o.h(f,"valid_until")
m=n==null?null:J.al(n)
l=m!=null&&m.length!==0?A.eR(m):null
n=l==null?new A.aZ(Date.now(),0,!1).um(31536e9):l
w=3
return A.k(A.pd(d,A.bB(2020,1,1,0,0,0,0),null,n,A.bB(2100,1,1,0,0,0,0),C.er),$async$Cy)
case 3:r=h
if(r==null){w=1
break}t=5
n=x.z
w=8
return A.k(e.aD(0,$.bL(),x.A).er("set_document_valid_until",A.a4(["p_document",o.h(f,"id"),"p_valid_until",C.c.a_(r.dU(),0,10)],x.N,n),n),$async$Cy)
case 8:if(d.e==null){w=1
break}o=$.K0()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(o)
d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("G\xfcltig bis "+$.dp().al(r)+".",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
k=s.pop()
q=A.a2(k)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cy,v)},
Ct(d,e,f){return this.aJA(d,e,f)},
aJA(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o
var $async$Ct=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.k(A.hh(null,null,!0,null,new B.bav(f,d),d,null,!0,!0,x.y),$async$Ct)
case 3:if(h!==!0){w=1
break}t=5
q=x.z
w=8
return A.k(e.aD(0,$.bL(),x.A).er("request_document_review",A.a4(["p_document",J.Z(f,"id")],x.N,q),q),$async$Ct)
case 8:if(d.e==null){w=1
break}d.O(x.q).f.b2(E.mf)
t=2
w=7
break
case 5:t=4
o=s.pop()
r=A.a2(o)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Ct,v)},
x8(d,e,f){return this.aEq(d,e,f)},
aEq(a3,a4,a5){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$x8=A.m(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:d={}
a0=a4.aD(0,$.bL(),x.A)
d.a=null
t=4
w=7
return A.k(a0.h_("list_employees_for_signature",x.z),$async$x8)
case 7:r=a7
m=d.a=J.cE(x.j.a(r),x.P)
t=2
w=6
break
case 4:t=3
a1=s.pop()
q=A.a2(a1)
if(a3.e!=null)a3.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=1
break
w=6
break
case 3:w=2
break
case 6:if(m.gp(0)===0){if(a3.e!=null)a3.O(x.q).f.b2(D.aA6)
w=1
break}m=x.N
p=A.b2(m)
if(a3.e==null){w=1
break}w=8
return A.k(A.hh(null,null,!0,null,new B.bas(d,p),a3,null,!0,!0,x.y),$async$x8)
case 8:if(a7!==!0||p.a===0){w=1
break}t=10
k=p,k=A.d1(k,k.r,A.l(k).c),j=J.V(a5),i=x.z,h=k.$ti.c
case 13:if(!k.t()){w=14
break}g=k.d
o=g==null?h.a(g):g
g=a0
f=A.a4(["p_document",j.h(a5,"id"),"p_employee",o],m,i)
e=g.CW
e===$&&A.a()
e.b.K(0,A.mR(g.x,m,m))
w=15
return A.k(e.b0_("invite_employee_signature",!1,f,i),$async$x8)
case 15:w=13
break
case 14:if(a3.e==null){w=1
break}m=$.bCq().$1(A.aG(j.h(a5,"id")))
if(a4.e==null)A.U(A.a_(y.b))
a4.gcv().cs(m)
a3.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(""+p.a+" Mitarbeiter eingeladen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=12
break
case 10:t=9
a2=s.pop()
n=A.a2(a2)
if(a3.e==null){w=1
break}a3.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=12
break
case 9:w=2
break
case 12:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x8,v)},
wY(d,e){return this.axe(d,e)},
axe(d,e){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$wY=A.m(function(f,a0){if(f===1){t.push(a0)
w=u}for(;;)switch(w){case 0:r.J(new B.bal(r))
u=3
k=e.aD(0,$.bL(),x.A).ax
k===$&&A.a()
j=r.x
if(j==null){j=x.z
j=A.z(j,j)}else j=A.a4(["category",j],x.N,x.T)
w=6
return A.k(k.hw("documents-zip-export",j),$async$wY)
case 6:q=a0
p=q.a
w=x.f.b(p)&&typeof J.Z(p,"base64")=="string"?7:9
break
case 7:o=C.iU.cF(A.aG(J.Z(p,"base64")))
i=A.aj(J.Z(p,"filename"))
n=i==null?"export.zip":i
m="data:application/zip;base64,"+C.vS.gt6().cF(o)
w=10
return A.k(A.mE(A.cm(m,0,null),C.en,null),$async$wY)
case 10:w=11
return A.k(A.uG(new A.pu(m)),$async$wY)
case 11:if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(A.i(n)+" ("+(J.cg(o)/1024|0)+" KB) heruntergeladen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=8
break
case 9:k=A.e5("Ung\xfcltige Antwort: "+A.i(p))
throw A.e(k)
case 8:s.push(5)
w=4
break
case 3:u=2
g=t.pop()
l=A.a2(g)
if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Export fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.bam(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$wY,v)},
Bf(d,e){return this.avi(d,e)},
avi(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Bf=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l={}
k=A.dJ(e.aD(0,$.bvU(),x.w))
if(k==null)k=C.cp
r=new A.bv(C.a8,$.ag())
p=J.V(k)
l.a=p.gdw(k)?A.aG(J.Z(p.ga2(k),"slug")):"sonstiges"
w=3
return A.k(A.hh(null,null,!0,null,new B.bak(l,r,k),d,null,!0,!0,x.y),$async$Bf)
case 3:if(g!==!0||C.c.aK(r.a.a).length===0){w=1
break}t=5
p=e.aD(0,$.bL(),x.A).cW("documents")
o=C.c.aK(r.a.a)
l=l.a
if(l==null)l="sonstiges"
n=x.N
w=8
return A.k(p.iG(0,A.a4(["title",o,"category",l],n,n)),$async$Bf)
case 8:if(d.e==null){w=1
break}l=$.K0()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(l)
t=2
w=7
break
case 5:t=4
j=s.pop()
q=A.a2(j)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehlgeschlagen: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Bf,v)}}
B.aqA.prototype={
u(d){var w=null
return A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),w,w,w,w,w,w,2,A.eE(w,new A.hw(4,A.aR(12),C.dB),w,w,w,w,w,w,!0,new A.hw(4,A.aR(12),C.dB),w,w,w,w,w,C.B,!0,w,w,w,w,new A.hw(4,A.aR(12),D.a0e),w,w,w,w,w,w,w,w,w,"Titel oder Kategorie suchen \u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,D.acP,w,w,w,w,w,w,w,w,w,w,w,w),C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,this.c,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w)}}
B.al5.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.d,p=x.p,o=A.b([s.a2D(d,"Alle Ordner",q==null,new B.bcU(s)),C.b2],p)
for(w=J.bh(s.c);w.t();){v=w.gN(w)
u=J.V(v)
t=u.h(v,"label")
t=t==null?r:J.al(t)
if(t==null)t=""
u=u.h(v,"slug")
C.b.K(o,A.b([s.a2D(d,t,q==null?u==null:q===u,new B.bcV(s,v)),C.b2],p))}return A.ev(A.ao(o,C.k,r,C.f,C.h,0,r,r),r,r,r,C.ay)},
a2D(d,e,f,g){var w=null,v=A.aR(999),u=f?C.m:C.B,t=A.aR(999),s=A.cU(f?C.m:C.ao,1)
return A.eD(!1,v,!0,A.bf(w,A.j(e,w,w,w,A.D(f?C.j:C.aU,12,C.S),w,w,w),C.t,w,w,new A.b4(u,w,s,t,w,w,C.G),w,w,w,w,C.Du,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)}}
B.al6.prototype={
u(d){var w,v,u,t=this,s=null,r=t.d,q=J.V(r)
if(q.gZ(r))return C.ar
q.fR(r,new B.bcW())
w=t.c
v=J.V(w)
u=v.h(w,"icon")
u=A.cp(B.c2z(u==null?s:J.al(u)),C.j,s,18)
w=v.h(w,"label")
w=w==null?s:J.al(w)
if(w==null)w=""
v=x.p
v=A.b([A.ao(A.b([u,C.aV,A.aA(A.j(w,s,s,s,A.c3(C.j,15,C.p),s,s,s),1),A.j(""+q.gp(r),s,s,s,A.D(C.q,11,C.l),s,s,s)],v),C.k,s,C.f,C.h,0,s,s),C.P],v)
for(r=q.gX(r),q=t.e;r.t();){w=r.gN(r)
v.push(new B.ajS(w,q,new B.bcX(t,w),new B.bcY(t,w),new B.bcZ(t,w),new B.bd_(t,w),new B.bd0(t,w),s))}return new A.ah(C.wY,A.ac(v,C.C,s,C.f,C.h,0),s)}}
B.ajS.prototype={
df(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.e,e=J.V(f),d=e.h(f,"title"),a0=d==null?g:J.al(d)
if(a0==null)a0=""
w=e.h(f,"current_version")
d=e.h(f,"status")
v=d==null?g:J.al(d)
if(v==null)v="draft"
d=e.h(f,"valid_until")
u=d==null?g:J.al(d)
d=e.h(f,"expiry_status")
t=d==null?g:J.al(d)
if(t==null)t="none"
d=e.h(f,"latest_file_path")
d=d==null?g:J.al(d)
s=(d==null?"":d).length!==0
r=J.d(e.h(f,"is_template"),!0)
d=e.h(f,"category")
q=d==null?g:J.al(d)
if(r)p=C.m
else{A:{if("expired"===t){d=C.ak
break A}if("expiring"===t){d=C.dC
break A}d=C.ao
break A}p=d}o=u!=null&&u.length!==0?A.eR(u):g
n=q==="ifsg"
m=n&&s&&!r?a2.ao($.bCq().$1(A.aG(e.h(f,"id"))),x.w):g
f=r?0:20
e=s?h.r:g
d=x.p
l=A.b([],d)
if(r)C.b.K(l,A.b([D.aub],d))
l.push(A.aA(A.j(a0,2,C.ai,g,A.D(C.j,15,C.p),g,g,g),1))
l.push(C.aV)
if(r)l.push(D.aAp)
else l.push(new B.akt(t,g))
l=A.ao(l,C.C,g,C.f,C.h,0,g,g)
k=A.i(w)
j=o==null?"":" \xb7 g\xfcltig bis "+$.dp().al(o)
j=A.j("v"+k+" \xb7 "+v+j,g,g,g,A.D(C.q,11,C.l),g,g,g)
if(s)k=A.ao(A.b([D.ac8,C.cF,new A.hP(1,C.cO,A.j(r?"Vorlage herunterladen":"Tippen zum \xd6ffnen",1,C.ai,g,D.aCV,g,g,g),g)],d),C.k,g,C.f,C.H,0,g,g)
else k=A.j("Noch keine Version hochgeladen",1,C.ai,g,A.D(C.q,11,C.l),g,g,g)
k=A.b([A.aA(k,1)],d)
if(h.f&&!r){i=A.b([A.fO(C.aU,D.mJ,D.acV,g,g,h.x,C.a7,g,g,"G\xfcltigkeit setzen",C.ms),A.fO(C.aU,D.mJ,D.ad2,g,g,h.w,C.a7,g,g,"Neue Version hochladen",C.ms)],d)
if(n)i.push(A.fO(C.m,D.mJ,D.acH,g,g,s?h.z:g,C.a7,g,g,"Mitarbeiter zur Signatur einladen",C.ms))
i.push(A.fO(C.m,D.mJ,D.acW,g,g,s?h.y:g,C.a7,g,g,"Freigabe (2-of-2 Gesellschafter)",C.ms))
k.push(A.ll(C.cx,i,C.dK,0,0))}l=A.b([l,C.d7,j,C.v,A.ao(k,C.k,g,C.f,C.h,0,g,g)],d)
if(m!=null)C.b.K(l,A.b([C.v,C.cN,C.P,A.dz(m,new B.b9S(),new B.b9T(),new B.b9U(),!1,!0,!1,x.D,x.l)],d))
return new A.ah(new A.ak(f,0,0,12),A.by(g,A.ac(l,C.C,g,C.f,C.h,0),g,e,C.aj,p,3),g)}}
B.ar4.prototype={
df(d,e){var w,v,u,t,s=null,r=this.e,q=J.V(r),p=q.h(r,"employee_name"),o=p==null?s:J.al(p)
if(o==null)o="?"
p=q.h(r,"status")
w=p==null?s:J.al(p)
if(w==null)w="pending"
p=q.h(r,"signed_at")
v=p==null?s:J.al(p)
r=q.h(r,"signed_pdf_path")
u=r==null?s:J.al(r)
t=w==="signed"
r=t?C.i1:D.a9T
r=A.cp(r,t?C.aE:C.m,s,16)
if(t){q=v==null?"":" \xb7 "+C.c.a_(v,0,10)
q=o+" \u2014 signiert"+q}else q=o+" \u2014 ausstehend"
q=A.b([r,C.b2,A.aA(A.j(q,s,s,s,A.D(C.j,12,C.S),s,s,s),1)],x.p)
if(t&&u!=null&&u.length!==0)q.push(A.nr(D.EW,D.aFy,new B.bnc(this,d,e,u),s))
return new A.ah(D.Dr,A.ao(q,C.k,s,C.f,C.h,0,s,s),s)},
Bg(d,e,f){return this.aHh(d,e,f)},
aHh(d,e,f){var w=0,v=A.q(x.H),u=1,t=[],s,r,q,p,o
var $async$Bg=A.m(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:u=3
q=e.aD(0,$.bL(),x.A).ay
q===$&&A.a()
w=6
return A.k(q.cW("signed-documents").nK(f,86400),$async$Bg)
case 6:s=h
w=7
return A.k(A.mE(A.cm(s,0,null),C.en,"_blank"),$async$Bg)
case 7:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.a2(o)
if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Bg,v)}}
B.akt.prototype={
u(d){switch(this.c){case"expired":return D.aAo
case"expiring":return D.aAm
case"ok":return D.aAn
default:return C.ar}}}
B.a4U.prototype={
df(d,e){var w=null,v=e.ao($.bCp(),x.w),u=B.a5x(w,w,D.ad9,D.Al,new B.aDN(this,d,e))
return A.dd(D.a9b,w,A.dz(v,new B.aDO(),new B.aDP(),new B.aDQ(),!1,!0,!1,x.D,x.E),w,u,w)},
BQ(d,e){return this.aEp(d,e)},
aEp(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n
var $async$BQ=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:w=3
return A.k(A.kA(null,new B.aDK(),d,!0,null,null,x.dr),$async$BQ)
case 3:o=g
if(o==null){w=1
break}t=5
q=e.aD(0,$.bL(),x.A).ax
q===$&&A.a()
w=8
return A.k(q.hw("invite-user",A.a4(["email",o.a,"role","employee","full_name",o.b,"permissions",o.c],x.N,x.X)),$async$BQ)
case 8:if(d.e==null){w=1
break}q=$.bCp()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(q)
d.O(x.q).f.b2(D.azY)
t=2
w=7
break
case 5:t=4
n=s.pop()
r=A.a2(n)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Einladung fehlgeschlagen: "+A.i(r),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$BQ,v)}}
B.amc.prototype={}
B.BT.prototype={
W(){var w=$.ag()
return new B.VP(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),A.b2(x.N))}}
B.VP.prototype={
l(){var w=this.e,v=$.ag()
w.R$=v
w.S$=0
w=this.f
w.R$=v
w.S$=0
this.ap()},
awV(){var w,v,u,t=this,s=t.d.ga1()
s=s==null?null:s.hS()
if(s!==!0)return
s=t.c
s.toString
s=A.b5(s,!1)
w=C.c.aK(t.e.a.a)
v=C.c.aK(t.f.a.a)
if(v.length===0)v=null
u=t.r
u=A.Q(u,A.l(u).c)
s.cC(new B.amc(w,v,u))},
u(d){var w,v,u,t=this,s=null,r=A.bF(d,s,x.m).w,q=A.b([A.j("Mitarbeiter einladen",s,s,s,A.W(d).ok.r,s,s,s),C.K,A.da(s,!1,t.e,D.aeJ,s,C.iD,1,!1,s,s,C.X,s,new B.bfo()),C.v,A.da(s,!1,t.f,D.ae0,s,s,1,!1,s,s,C.X,s,s),C.v,A.j("Berechtigungen",s,s,s,A.W(d).ok.w,s,s,s)],x.p)
for(w=D.Sh.ghZ(D.Sh),w=w.gX(w),v=t.r;w.t();){u=w.gN(w)
q.push(A.bE2(s,s,C.a7,s,!0,new B.bfp(t,u),s,A.j(u.b,s,s,s,s,s,s,s),v.n(0,u.a)))}q.push(C.P)
q.push(A.dk(D.Al,t.gawU(),s))
return new A.ah(new A.ak(0,0,0,r.f.d),A.ev(A.k0(s,A.ac(q,C.a9,s,C.f,C.H,0),t.d),s,C.aj,s,C.M),s)}}
B.a5c.prototype={
u(d){return B.PR("filled_at","filling",new B.aF7(),new B.aF8(),new B.aF9(),"filling_logs","Bef\xfcllung")}}
B.BK.prototype={
W(){var w=$.ag()
return new B.V7(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(new A.cx("0",C.bb,C.aG),w),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.aZ(Date.now(),0,!1))}}
B.V7.prototype={
l(){var w=this,v=w.x,u=v.R$=$.ag()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
v=w.Q
v.R$=u
v.S$=0
w.ap()},
IN(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IN=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ay
w=2
return A.k(A.pd(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.aZ(Date.now(),0,!1),C.er),$async$IN)
case 2:s=e
if(s!=null)u.J(new B.bc8(u,s))
return A.o(null,v)}})
return A.p($async$IN,v)},
IO(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IO=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ch
if(t==null)t=new A.aZ(Date.now(),0,!1).um(7776e9)
w=2
return A.k(A.pd(r,new A.aZ(Date.now(),0,!1).um(-2592e9),null,t,A.bB(2030,1,1,0,0,0,0),C.er),$async$IO)
case 2:s=e
if(s!=null)u.J(new B.bc9(u,s))
return A.o(null,v)}})
return A.p($async$IO,v)},
axp(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w.ga1()
k=k==null?l:k.hS()
if(k!==!0)return
k=m.at
if(k==null)return
w=m.c
w.toString
w=A.b5(w,!1)
v=m.as
u=A.ej(m.x.a.a,l)
t=A.iy(m.y.a.a,l)
if(t==null)t=0
s=m.ax
r=new A.aZ(Date.now(),0,!1).dU()
q=m.z.a.a
q=A.fT(A.ax(q,",","."))
p=C.c.aK(m.Q.a.a)
if(p.length===0)p=l
o=C.c.a_(m.ay.dU(),0,10)
n=m.ch
w.cC(A.a4(["machine_id",v,"product_id",k,"quantity",u,"removed_spoiled",t,"mhd_checked",s,"filled_at",r,"unit_cost",q,"invoice_number",p,"invoice_date",o,"lot_expiry",n==null?l:C.c.a_(n.dU(),0,10)],x.N,x.X))},
u(d){var w,v=this,u=null,t=v.gc8().ao($.bCX(),x.w),s=A.bF(d,u,x.m).w,r=A.j("Bef\xfcllung erfassen",u,u,u,A.W(d).ok.r,u,u,u),q=B.OA(new B.bcf(v),v.as),p=B.ax4(t,new B.bcg(v),new B.bch(),x.D,x.l),o=A.da(u,!1,v.x,D.aei,u,C.cZ,1,!1,u,u,C.X,u,new B.bci()),n=A.da(u,!1,v.y,D.aeA,u,C.cZ,1,!1,u,u,C.X,u,u),m=A.da(u,!1,v.z,D.aeE,u,C.eA,1,!1,u,u,C.X,u,new B.bcj()),l=A.da(u,!1,v.Q,D.aef,u,u,1,!1,u,u,C.X,u,new B.bck()),k=v.ay,j=x.p
k=A.a6K(u,A.ao(A.b([A.aA(A.j(C.c.cX(C.e.j(A.bU(k)),2,"0")+"."+C.c.cX(C.e.j(A.bi(k)),2,"0")+"."+A.aU(k),u,u,u,u,u,u,u),1),A.nr(D.lh,D.aHi,v.gaIm(),u)],j),C.k,u,C.f,C.h,0,u,u),D.adW,!1,!1,!1,!1,u,u)
w=v.ch
return new A.ah(new A.ak(0,0,0,s.f.d),A.ev(A.k0(u,A.ac(A.b([r,C.K,q,C.v,p,C.v,o,C.v,n,C.v,m,C.v,l,C.v,k,C.v,A.a6K(u,A.ao(A.b([A.aA(A.j(w==null?"\u2014 nicht gesetzt \u2014":C.c.cX(C.e.j(A.bU(w)),2,"0")+"."+C.c.cX(C.e.j(A.bi(w)),2,"0")+"."+A.aU(w),u,u,u,u,u,u,u),1),A.nr(D.lh,D.aFJ,v.gaIn(),u)],j),C.k,u,C.f,C.h,0,u,u),D.aem,!1,!1,!1,!1,u,u),C.b6,A.b07(C.a7,new B.bcl(v),u,D.aFB,v.ax),A.dk(C.dw,v.gaxo(),u)],j),C.a9,u,C.f,C.H,0),v.w),u,C.aj,u,C.M),u)}}
B.O2.prototype={
W(){return new B.VO(new A.aZ(Date.now(),0,!1).um(-7776e9),new A.aZ(Date.now(),0,!1))}}
B.VO.prototype={
Ia(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$Ia=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.bfe(r))
u=3
q=r.gc8().aD(0,$.bL(),x.A)
n=x.N
m=x.z
w=6
return A.k(A.kT(A.b([q.er("inventory_fifo_movements",A.a4(["p_from",r.w.Ft().dU(),"p_to",r.x.Ft().dU()],n,m),m),q.er("inventory_fifo_lots",A.a4(["p_to",r.x.Ft().dU()],n,m),m),q.h_("list_partner_signatures",m)],x.U),m),$async$Ia)
case 6:p=e
m=x.j
n=x.P
r.y=J.cE(m.a(J.Z(p,0)),n)
r.z=J.cE(m.a(J.Z(p,1)),n)
r.Q=J.cE(m.a(J.Z(p,2)),n)
s.push(5)
w=4
break
case 3:u=2
k=t.pop()
o=A.a2(k)
r.at=J.al(o)
r.z=r.y=null
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.bff(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Ia,v)},
IM(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IM=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.w
w=2
return A.k(A.pd(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.aZ(Date.now(),0,!1),C.er),$async$IM)
case 2:s=e
if(s!=null)u.J(new B.bfg(u,s))
return A.o(null,v)}})
return A.p($async$IM,v)},
IR(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IR=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.x
w=2
return A.k(A.pd(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.aZ(Date.now(),0,!1),C.er),$async$IR)
case 2:s=e
if(s!=null)u.J(new B.bfh(u,s))
return A.o(null,v)}})
return A.p($async$IR,v)},
av(){this.aL()
A.bxy(this.ga69(),x.H)},
Cr(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Cr=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.y==null){w=1
break}o=r.c
o.toString
w=3
return A.k(A.hh(null,null,!0,null,new B.bfk(r),o,null,!0,!0,x.y),$async$Cr)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mJ(r.gc8().aD(0,$.bL(),x.A))
o=r.w
n=r.x
m=$.dp()
l=m.al(o)
m=m.al(r.x)
w=8
return A.k(q.w7("inventory_fifo",o,n,A.a4(["movements",r.y,"lots",r.z],x.N,x.z),"Inventur "+l+" \u2013 "+m),$async$Cr)
case 8:o=r.c
if(o!=null)o.O(x.q).f.b2(E.mf)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
o=r.c
if(o!=null)o.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cr,v)},
att(d){var w,v,u,t,s,r=A.z(x.N,x.D)
for(w=d.$ti,v=new A.b8(d,d.gp(0),w.i("b8<an.E>")),w=w.i("an.E");v.t();){u=v.d
if(u==null)u=w.a(u)
t=J.Z(u,"product_id")
s=t==null?null:J.al(t)
if(s==null)s=""
J.e2(r.cl(0,s,new B.bfd()),u)}return r},
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.b([],q),o=s.y
if(o!=null&&!o.gZ(o))p.push(new B.yR(A.b([new B.pO(E.fS,"Freigabe anfordern",s.gaJw(),C.m,r,!1),new B.pO(C.i4,"Als PDF drucken",new B.bfl(s),C.ak,C.ak,!1)],x.x),C.dV,r))
p.push(A.j("FIFO-Inventur \u2014 je Produkt alle Bewegungen chronologisch, Bewertung nach dem Verbrauchsfolgeverfahren (\xa7256 HGB): die \xe4ltesten Zug\xe4nge sind zuerst verbraucht, der Endbestand wird mit den EK-Preisen der j\xfcngsten verbliebenen Lots bewertet. MHD-Abschlag nach Restlaufzeit-Matrix vom AK-Wert.",r,r,r,A.D(C.q,12,C.l),r,r,r))
p.push(C.K)
o=s.w
w=$.dp()
p.push(A.ao(A.b([A.aA(A.fR(D.lh,A.j("Von "+w.al(o),r,r,r,r,r,r,r),s.gaIl(),A.oC(r,r,r,r,r,r,r,r,r,C.j,r,r,C.em,r,r,C.kw,r,r,r,r)),1),C.aV,A.aA(A.fR(D.lh,A.j("Bis "+w.al(s.x),r,r,r,r,r,r,r),s.gaIs(),A.oC(r,r,r,r,r,r,r,r,r,C.j,r,r,C.em,r,r,C.kw,r,r,r,r)),1)],q),C.k,r,C.f,C.h,0,r,r))
p.push(C.v)
o=s.as
w=o?r:s.ga69()
o=o?C.uT:D.F0
p.push(A.h7(o,D.aIi,w,A.dK(C.m,C.B,r,C.em,r,r,r)))
p.push(C.K)
o=s.at
if(o!=null)p.push(A.by(C.ak,A.j(o,r,r,r,A.D(C.j,13,C.l),r,r,r),C.eJ,r,C.D,r,3))
else{o=s.y
if(o==null)p.push(C.ar)
else if(o.gp(0)===0)p.push(A.by(r,A.j("Keine Bewegungen im gew\xe4hlten Zeitraum.",r,r,r,A.D(C.q,13,C.l),r,r,r),C.ae,r,C.D,r,3))
else{q=A.b([],q)
o=s.y
o.toString
o=s.att(o)
o=new A.e7(o,A.l(o).i("e7<1,2>")).gX(0)
w=x.t
while(o.t()){v=o.d
u=v.b
t=s.z
if(t==null)t=A.b([],w)
t=J.qQ(t,new B.bfm(v))
t=A.Q(t,t.$ti.i("t.E"))
q.push(new B.aoQ(u,t,r))}q.push(C.aQ)
o=s.z
q.push(new B.aln(o==null?C.cp:o,r))
q.push(C.bL)
q.push(D.aOh)
q.push(C.bL)
o=s.Q
if(o!=null&&!o.gZ(o)){o=s.Q
o.toString
q.push(new B.ar5(o,r))}C.b.K(p,q)}}return A.dd(D.a9k,r,A.dF(p,C.D,r,C.M,!1),r,r,r)}}
B.aoQ.prototype={
u(c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9="Hanken Grotesk",c0=this.d,c1=J.cy(c0),c2=J.Z(c1.ga2(c0),"product_name"),c3=c2==null?b8:J.al(c2)
if(c3==null)c3=""
c2=J.Z(c1.ga2(c0),"sku")
w=c2==null?b8:J.al(c2)
if(w==null)w=""
c2=this.e
v=C.b.fA(c2,0,new B.bjx())
u=C.b.fA(c2,0,new B.bjy())
t=C.b.fA(c2,0,new B.bjz())
s=C.b.fA(c2,0,new B.bjA())
r=A.j(c3,b8,b8,b8,A.D(C.j,16,C.p),b8,b8,b8)
q=w.length===0?"":"SKU: "+w
p=x.p
o=""+v
q=A.ao(A.b([A.aA(A.ac(A.b([r,A.j(q,b8,b8,b8,A.D(C.q,11,C.l),b8,b8,b8)],p),C.C,b8,C.f,C.h,0),1),A.j("Endbestand: "+o,b8,b8,b8,A.D(C.m,13,C.p),b8,b8,b8)],p),C.C,b8,C.f,C.h,0,b8,b8)
r=A.j("Bewegungen im Zeitraum",b8,b8,b8,A.D(C.q,12,C.p),b8,b8,b8)
n=x.v
m=x._
l=A.b([],m)
for(c0=c1.gX(c0);c0.t();)l.push(this.aFP(c0.gN(c0)))
c0=A.ev(B.aB_(b8,D.ajl,40,30,new A.bE(C.ae,n),32,l),b8,b8,b8,C.ay)
c1=A.j("FIFO-Restlots am Stichtag",b8,b8,b8,A.D(C.q,12,C.p),b8,b8,b8)
m=A.b([],m)
for(l=c2.length,k=x.F,j=0;j<c2.length;c2.length===l||(0,A.G)(c2),++j){i=c2[j]
h=J.V(i)
g=h.h(i,"invoice_number")
f=g==null?b8:J.al(g)
if(f==null)f="\u2014"
g=h.h(i,"invoice_date")
e=g==null?b8:J.al(g)
g=A.b3(h.h(i,"remaining_qty"))
d=g==null?b8:C.d.a0(g)
if(d==null)d=0
g=A.b3(h.h(i,"unit_cost"))
a0=g==null?b8:g
if(a0==null)a0=0
g=h.h(i,"lot_expiry")
a1=g==null?b8:J.al(g)
g=A.b3(h.h(i,"mhd_days_left"))
a2=g==null?b8:C.d.a0(g)
g=A.b3(h.h(i,"mhd_pct"))
a3=g==null?b8:C.d.a0(g)
if(a3==null)a3=0
g=A.b3(h.h(i,"lot_gross"))
a4=g==null?b8:g
if(a4==null)a4=0
g=A.b3(h.h(i,"lot_discount"))
a5=g==null?b8:g
if(a5==null)a5=0
h=A.b3(h.h(i,"lot_net"))
a6=h==null?b8:h
if(a6==null)a6=0
a7=a3>=20
h=A.j(f,b8,b8,b8,new A.O(!0,C.j,b8,b9,C.bw,b8,11,C.l,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
g=A.j(B.aoR(e),b8,b8,b8,b8,b8,b8,b8)
a8=A.j(""+d,b8,b8,b8,new A.O(!0,C.j,b8,b9,C.bw,b8,12,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=$.d2()
b0=A.j(a9.al(a0),b8,b8,b8,b8,b8,b8,b8)
b1=A.j(B.aoR(a1),b8,b8,b8,b8,b8,b8,b8)
b2=A.j(a2==null?"\u2014":A.i(a2)+"d",b8,b8,b8,b8,b8,b8,b8)
b3=a7?C.ak:C.j
b3=A.j(""+a3+" %",b8,b8,b8,new A.O(!0,b3,b8,b9,C.bw,b8,12,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
b4=A.j(a9.al(a4),b8,b8,b8,b8,b8,b8,b8)
b5=a5===0?"\u2014":"\u2212 "+a9.al(a5)
b6=a7?C.ak:C.j
b5=A.j(b5,b8,b8,b8,new A.O(!0,b6,b8,b9,C.bw,b8,12,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=a9.al(a6)
m.push(new B.r6(b8,A.b([new B.fw(h),new B.fw(g),new B.fw(a8),new B.fw(b0),new B.fw(b1),new B.fw(b2),new B.fw(b3),new B.fw(b4),new B.fw(b5),new B.fw(A.j(a9,b8,b8,b8,new A.O(!0,C.j,b8,b9,C.bw,b8,13,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8))],k),b8))}b7=A.D(C.j,13,C.p)
c2=B.o7(A.j("Summe",b8,b8,b8,b7,b8,b8,b8))
o=B.o7(A.j(o,b8,b8,b8,b7,b8,b8,b8))
l=$.d2()
h=B.o7(A.j(l.al(u),b8,b8,b8,b7,b8,b8,b8))
g=t===0?"\u2014":"\u2212 "+l.al(t)
m.push(B.bEy(A.b([c2,D.kQ,o,D.kQ,D.kQ,D.kQ,D.kQ,h,B.o7(A.j(g,b8,b8,b8,b7.cN(C.ak),b8,b8,b8)),B.o7(A.j(l.al(s),b8,b8,b8,b7,b8,b8,b8))],k),new A.bE(C.bF,n),b8))
return new A.ah(C.wY,A.by(b8,A.ac(A.b([q,C.v,r,C.b6,c0,C.v,c1,C.b6,A.ev(B.aB_(b8,D.aj6,40,30,new A.bE(C.ae,n),32,m),b8,b8,b8,C.ay)],p),C.C,b8,C.f,C.h,0),b8,b8,C.aj,b8,3),b8)},
aFP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.V(d),h=A.aj(i.h(d,"type"))
if(h==null)h=""
A:{if("refill"===h){w="Zugang"
break A}if("sale"===h){w="Verkauf"
break A}if("disposal"===h){w="Vernichtung (MHD)"
break A}if("correction"===h){w="Korrektur"
break A}w=h
break A}v=A.b3(i.h(d,"quantity_delta"))
u=v==null?j:C.d.a0(v)
if(u==null)u=0
t=A.b3(i.h(d,"unit_cost"))
if(t==null)t=j
v=i.h(d,"invoice_number")
s=v==null?j:J.al(v)
if(s==null)s=""
v=i.h(d,"invoice_date")
r=v==null?j:J.al(v)
v=i.h(d,"lot_expiry")
q=v==null?j:J.al(v)
v=i.h(d,"reason")
p=v==null?j:J.al(v)
if(p==null)p=""
i=i.h(d,"occurred_at")
o=i==null?j:J.al(i)
if(h==="refill")n=C.Cr
else n=h==="disposal"?C.eJ:j
i=n==null?j:new A.bE(n,x.v)
v=B.o7(A.j(B.aoR(o),j,j,j,j,j,j,j))
w=B.o7(A.j(w,j,j,j,A.D(h==="disposal"?C.ak:C.j,12,C.p),j,j,j))
m=u>0
l=""+u
if(m)l="+"+l
l=B.o7(A.j(l,j,j,j,A.D(m?C.aE:C.j,12,C.p),j,j,j))
m=B.o7(A.j(t==null?"\u2014":$.d2().al(t),j,j,j,j,j,j,j))
if(s.length===0)k="\u2014"
else k=s+(r==null?"":"  \xb7 "+B.aoR(r))
return B.bEy(A.b([v,w,l,m,B.o7(A.j(k,j,j,j,A.D(C.aU,11,C.l),j,j,j)),B.o7(A.j(B.aoR(q),j,j,j,j,j,j,j)),B.o7(A.ce(A.j(p,1,C.ai,j,A.D(C.q,11,C.l),j,j,j),j,200))],x.F),i,j)}}
B.aln.prototype={
u(d){var w,v,u=null,t=this.c,s=J.cy(t),r=s.fA(t,0,new B.bdU()),q=s.fA(t,0,new B.bdV()),p=s.fA(t,0,new B.bdW()),o=s.fA(t,0,new B.bdX()),n=s.eP(t,new B.bdY(),x.T).hD(0).a
t=$.d2()
s=t.al(q)
w=p===0?"\u2014 0,00 \u20ac":"\u2212 "+t.al(p)
v=x.p
return A.by(C.m,A.ac(A.b([D.awO,C.v,A.ll(C.cx,A.b([new B.wP("Produkte im Bestand",""+n,!1,!1,u),new B.wP("Einheiten gesamt",A.i(r),!1,!1,u),new B.wP("Anschaffungskosten netto",s,!1,!1,u),new B.wP("MHD-Abschlag",w,!0,!1,u),new B.wP("Bilanzwert netto",t.al(o),!1,!0,u)],v),C.dK,8,20)],v),C.C,u,C.f,C.h,0),C.bF,u,C.aj,u,3)}}
B.wP.prototype={
u(d){var w=this,v=null,u=A.aR(12),t=A.cU(C.ao,1),s=A.j(w.c,v,v,v,A.D(C.q,10,C.S),v,v,v),r=w.f?17:15
return A.bf(v,A.ac(A.b([s,A.j(w.d,v,v,v,A.D(w.e?C.ak:C.j,r,C.p),v,v,v)],x.p),C.C,v,C.f,C.H,0),C.t,v,v,new A.b4(C.B,v,t,u,v,v,C.G),v,v,v,v,C.kZ,v,v,v)}}
B.ana.prototype={
u(d){var w,v,u,t,s,r,q,p=null,o="Hanken Grotesk",n=A.j("Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskostenwert eines Lots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.",p,p,p,A.D(C.q,12,C.l),p,p,p),m=A.b([],x._)
for(w=x.F,v=0;v<5;++v){u=D.ank[v]
t=A.j(u.a,p,p,p,new A.O(!0,C.j,p,o,C.bw,p,13,C.p,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
s=A.j(u.b,p,p,p,p,p,p,p)
r=u.c
q=r==="0 %"?C.j:C.ak
r=A.j(r,p,p,p,new A.O(!0,q,p,o,C.bw,p,13,C.p,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
m.push(new B.r6(p,A.b([new B.fw(t),new B.fw(s),new B.fw(r),new B.fw(A.j(u.d,p,p,p,new A.O(!0,C.aU,p,o,C.bw,p,12,C.l,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p))],w),p))}return A.by(p,A.ac(A.b([D.awT,C.P,n,C.v,A.ev(B.aB_(p,D.anG,44,32,new A.bE(C.ae,x.v),34,m),p,p,p,C.ay)],x.p),C.C,p,C.f,C.h,0),p,p,C.aj,p,3)}}
B.wS.prototype={}
B.ar5.prototype={
u(d){var w,v,u,t=null,s=x.p,r=A.b([],s)
for(w=this.c,v=w.$ti,w=new A.b8(w,w.gp(0),v.i("b8<an.E>")),v=v.i("an.E");w.t();){u=w.d
r.push(new B.ar7(u==null?v.a(u):u,t))}return A.by(t,A.ac(A.b([D.awP,C.K,A.ll(C.cx,r,C.dK,16,20)],s),C.C,t,C.f,C.h,0),t,t,C.aj,t,3)}}
B.ar7.prototype={
u(d){var w,v,u=null,t=this.c,s=J.V(t),r=s.h(t,"full_name"),q=r==null?u:J.al(r)
if(q==null)q=""
r=s.h(t,"role_label")
w=r==null?u:J.al(r)
if(w==null)w=""
t=s.h(t,"image_url")
v=t==null?u:J.al(t)
t=A.aR(12)
s=A.cU(C.ao,1)
r=v!=null&&v.length!==0?A.aJ_(v,new B.bnA(),C.By,u,u,u,u):D.a_6
t=A.bf(C.AZ,r,C.t,u,u,new A.b4(C.ae,u,s,t,u,u,C.G),u,68,u,u,C.fs,u,u,u)
s=A.j(q,u,u,u,A.D(C.j,13,C.p),u,u,u)
r=Date.now()
return A.ce(A.ac(A.b([t,C.d7,s,A.j(w+" \xb7 Datum: "+$.dp().al(new A.aZ(r,0,!1)),u,u,u,A.D(C.q,11,C.l),u,u,u)],x.p),C.C,u,C.f,C.h,0),u,260)}}
B.In.prototype={
u(d){var w=null
return A.bf(w,w,C.t,C.bW,w,w,w,1,w,D.a7n,w,w,w,w)}}
B.a6O.prototype={
df(d,e){var w=null
return A.dd(D.a9m,w,A.dz(e.ao($.avQ(),x.c),new B.aJU(),new B.aJV(),new B.aJW(),!1,!0,!1,x.W,x.E),w,w,w)}}
B.zr.prototype={
W(){return new B.amU()}}
B.amU.prototype={
av(){var w,v,u,t,s=this
s.aL()
w=s.gc8().aD(0,$.bL(),x.A)
v=s.a.d
u=w.ch
u===$&&A.a()
t=A.bXu("realtime:"+("inventory:"+v),u,C.a2j)
u.Q3()
C.b.E(u.b,t)
s.w=t.aYt(new B.bgB(s),C.WW,new B.aay(D.WX,"machine_id",s.a.d),"public","inventory").alX(0)},
l(){var w,v=this.w
if(v!=null){w=this.gc8().aD(0,$.bL(),x.A).ch
w===$&&A.a()
w.NX(v)}this.ap()},
a6z(d,e,f){var w
A:{if("out"===f){w=A.W(e).ax.fy
break A}if("low"===f){w=D.asj
break A}w=C.SX
break A}return w},
aEO(d){var w
A:{if("out"===d){w="ausverkauft"
break A}if("low"===d){w="bald leer"
break A}w="verf\xfcgbar"
break A}return w},
u(d){var w=this,v=null,u=w.gc8().ao($.bwb().$1(w.a.d),x.bj)
return A.dd(A.ro(v,A.j(w.a.e,v,v,v,v,v,v,v)),v,A.dz(u,new B.bgy(w),new B.bgz(),new B.bgA(),!1,!0,!1,x.e,x.E),v,v,v)},
B8(d,e){return this.avc(d,e)},
avc(d,e){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$B8=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.k(A.hh(null,null,!0,null,new B.bgt(e,new A.bv(C.a8,$.ag()),d),d,null,!0,!0,x.B),$async$B8)
case 3:q=g
if(q==null||q===0){w=1
break}w=4
return A.k(t.gc8().aD(0,$.bwc().ghP(),x.M).KM(q,e.a,e.b),$async$B8)
case 4:s=g
if(d.e==null){w=1
break}r=d.O(x.q).f
r.b2(A.c6(null,null,null,null,null,C.n,null,A.j(s?"Korrektur gebucht.":"Fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return A.o(u,v)}})
return A.p($async$B8,v)}}
B.a7q.prototype={
u(d){return B.PR("reported_at","maintenance",new B.aLe(),new B.aLf(),new B.aLg(),"maintenance_logs","Wartung")}}
B.BX.prototype={
W(){var w=$.ag()
return new B.VX(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.VX.prototype={
l(){var w=this,v=w.x,u=v.R$=$.ag()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
v=w.Q
v.R$=u
v.S$=0
w.ap()},
aFh(){var w,v,u,t,s,r=this,q=null,p=r.w.ga1()
p=p==null?q:p.hS()
if(p!==!0)return
p=r.c
p.toString
p=A.b5(p,!1)
w=r.as
v=C.c.aK(r.x.a.a)
u=C.c.aK(r.y.a.a)
if(u.length===0)u=q
t=C.c.aK(r.z.a.a)
if(t.length===0)t=q
s=r.Q.a.a
if(C.c.aK(s).length===0)s=q
else s=A.fT(A.ax(s,",","."))
p.cC(A.a4(["machine_id",w,"issue",v,"action",u,"performed_by",t,"cost_amount",s,"resolved",r.at,"reported_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ah(new A.ak(0,0,0,A.bF(d,v,x.m).w.f.d),A.ev(A.k0(v,A.ac(A.b([A.j("Wartung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.OA(new B.bgE(w),w.as),C.v,A.da(v,!1,w.x,D.aep,v,v,2,!1,v,v,C.X,v,new B.bgF()),C.v,A.da(v,!1,w.y,D.ae4,v,v,2,!1,v,v,C.X,v,v),C.v,A.da(v,!1,w.z,D.aeQ,v,v,1,!1,v,v,C.X,v,v),C.v,A.da(v,!1,w.Q,D.ae1,v,C.eA,1,!1,v,v,C.X,v,v),A.b07(C.a7,new B.bgG(w),v,D.Zr,w.at),A.dk(C.dw,w.gaFg(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.Sh.prototype={
W(){return new B.as5()}}
B.as5.prototype={
u(d){var w,v,u=this,t=null,s=A.b([],x.hc)
for(w=x.fl,v=0;v<5;++v)s.push(new A.jk(v,t,A.j(D.akU[v],t,t,t,t,t,t,t),w))
w=x.B
return A.dd(D.a9t,t,A.ac(A.b([new A.ah(D.x0,A.ev(A.byP(new B.boY(u),s,A.dD([u.w],w),w),t,t,t,C.ay),t),A.aA(u.asK(u.w),1)],x.p),C.k,t,C.f,C.h,0),t,t,t)},
asK(d){switch(d){case 0:return D.aO4
case 1:return D.aOV
case 2:return D.aMD
case 3:return D.aPh
case 4:return D.aMZ
default:return C.ar}}}
B.amK.prototype={
df(d,e){return A.dz(e.ao($.bCc(),x.w),new B.bgi(e),new B.bgj(),new B.bgk(),!1,!0,!1,x.D,x.l)}}
B.alr.prototype={
u(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="temperature_c",h="door_state",g="cash_balance_net",f=this.c,e=J.V(f),d=x.h.a(e.h(f,"machine")),a0=d==null
if(a0)u=j
else{t=J.Z(d,"code")
t=t==null?j:J.al(t)
u=t}if(u==null)u="?"
if(a0)s=j
else{a0=J.Z(d,"name")
a0=a0==null?j:J.al(a0)
s=a0}if(s==null)s=""
a0=e.h(f,"last_seen_at")
w=a0==null?j:J.al(a0)
a0=Date.now()
v=null
try{v=w==null?j:A.o9(w)}catch(r){}q=v==null?j:C.e.cE(new A.aZ(a0,0,!1).hY(v).a,6e7)
a0=q==null
p=!a0&&q>10
t=x.g.a(e.h(f,"active_alarms"))
o=t==null?j:J.cg(t)
if(o==null)o=0
t=p?C.ak:C.m
n=A.aA(A.j(u+" \xb7 "+s,j,j,j,A.D(C.j,16,C.p),j,j,j),1)
if(p)m="offline ("+A.i(q)+"m)"
else m=a0?"unbekannt":"aktiv"
if(p)a0=C.mi
else a0=a0?C.mj:C.fB
l=p?D.aao:C.i2
k=x.p
l=A.ao(A.b([n,new A.j5(m,a0,l,j)],k),C.k,j,C.f,C.h,0,j,j)
a0=A.b([],k)
if(e.h(f,i)!=null)a0.push(new B.BW(D.aaj,"Temperatur",A.i(e.h(f,i))+" \xb0C",!1,j))
if(e.h(f,h)!=null){n=e.h(f,h)
n=n==null?j:J.al(n)
a0.push(new B.BW(D.ab7,"T\xfcr",n==null?"?":n,!1,j))}if(e.h(f,g)!=null){f=A.fH(e.h(f,g))
a0.push(new B.BW(C.xV,"Kasse",$.d2().al(f),!1,j))}if(o>0)a0.push(new B.BW(D.ab_,"Alarme",""+o,!0,j))
return new A.ah(D.a7m,A.by(j,A.ac(A.b([l,C.v,A.ll(C.cx,a0,C.dK,8,12)],k),C.C,j,C.f,C.h,0),j,j,C.aj,t,3),j)}}
B.BW.prototype={
u(d){var w=this,v=null,u=w.f?C.ak:C.j,t=A.aR(12),s=A.cU(C.ao,1)
return A.bf(v,A.ao(A.b([A.cp(w.c,u,v,16),C.b2,A.j(w.d+": ",v,v,v,A.D(C.q,11,C.l),v,v,v),A.j(w.e,v,v,v,A.D(u,13,C.p),v,v,v)],x.p),C.k,v,C.f,C.H,0,v,v),C.t,v,v,new A.b4(C.ae,v,s,t,v,v,C.G),v,v,v,v,C.kZ,v,v,v)}}
B.aoU.prototype={
df(d,e){var w=null,v=e.ao($.bvZ(),x.w),u=B.a5x(C.m,C.B,D.nZ,D.aFR,new B.bjR(this,d,e))
return A.dd(w,w,A.dz(v,new B.bjS(),new B.bjT(),new B.bjU(),!1,!0,!1,x.D,x.E),w,u,w)},
IF(d,e){return this.aH8(d,e)},
aH8(d,e){var w=0,v=A.q(x.H),u
var $async$IF=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kA(null,new B.bjQ(),d,!0,null,null,x.y),$async$IF)
case 2:if(g===!0){u=$.bvZ()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(u)}return A.o(null,v)}})
return A.p($async$IF,v)}}
B.aoT.prototype={
u(d){var w,v,u,t=null,s="is_active",r=this.c,q=J.V(r),p=q.h(r,"name")
p=p==null?t:J.al(p)
if(p==null)p=""
p=A.aA(A.j(p,t,t,t,A.D(C.j,15,C.p),t,t,t),1)
w=A.hY(q.h(r,s))
w=w!==!1?"aktiv":"deaktiviert"
v=A.hY(q.h(r,s))
v=v!==!1?C.fB:C.mj
u=x.p
v=A.b([A.ao(A.b([p,new A.j5(w,v,t,t)],u),C.k,t,C.f,C.h,0,t,t),C.b6,A.j("Adapter: "+A.i(q.h(r,"adapter"))+" \xb7 Uhr-Toleranz: "+A.i(q.h(r,"time_skew_max_s"))+" s",t,t,t,A.D(C.q,11,C.l),t,t,t)],u)
p=A.aj(q.h(r,"notes"))
if((p==null?t:p.length!==0)===!0){r=q.h(r,"notes")
r=r==null?t:J.al(r)
if(r==null)r=""
C.b.K(v,A.b([C.b6,A.j(r,t,t,t,A.D(C.aU,11,C.l),t,t,t)],u))}return new A.ah(C.dV,A.by(t,A.ac(v,C.C,t,C.f,C.h,0),t,t,C.aj,t,3),t)}}
B.C7.prototype={
W(){var w=$.ag()
return new B.WN(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.WN.prototype={
l(){var w=this,v=w.x,u=v.R$=$.ag()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
w.ap()},
lf(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$lf=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.w.ga1()
j=j==null?null:j.hS()
if(j!==!0){w=1
break}q=r.gc8().aD(0,$.bL(),x.A)
t=4
j=C.c.aK(r.x.a.a)
o=r.Q
n=C.c.aK(r.y.a.a)
m=C.c.aK(r.z.a.a)
if(m.length===0)m=null
l=x.z
w=7
return A.k(q.er("register_telemetry_provider",A.a4(["p_name",j,"p_adapter",o,"p_hmac_secret",n,"p_notes",m],x.N,l),l),$async$lf)
case 7:j=r.c
if(j!=null)A.b5(j,!1).cC(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lf,v)},
u(d){var w=this,v=null
return new A.ah(new A.ak(0,0,0,A.bF(d,v,x.m).w.f.d),A.ev(A.k0(v,A.ac(A.b([A.j("Telemetrie-Provider anlegen",v,v,v,A.W(d).ok.r,v,v,v),C.K,A.da(v,!1,w.x,D.aeo,v,v,1,!1,v,v,C.X,v,new B.bjN()),C.v,A.jY(D.ae6,w.Q,!1,D.alc,new B.bjO(w),v,x.N),C.v,A.da(v,!1,w.y,D.aea,v,v,1,!0,v,v,C.X,v,new B.bjP()),C.v,A.da(v,!1,w.z,D.aeG,v,v,2,!1,v,v,C.X,v,v),C.K,A.dk(D.Zo,w.gCF(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.ajE.prototype={
df(d,e){var w=null,v=e.ao($.bC9(),x.w),u=B.a5x(C.m,C.B,D.nZ,D.aId,new B.b9p(this,d,e))
return A.dd(w,w,A.dz(v,new B.b9q(),new B.b9r(),new B.b9s(),!1,!0,!1,x.D,x.E),w,u,w)},
IH(d,e){return this.aHg(d,e)},
aHg(d,e){var w=0,v=A.q(x.H),u
var $async$IH=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kA(null,new B.b9o(),d,!0,null,null,x.y),$async$IH)
case 2:if(g===!0){u=$.bC9()
if(e.e==null)A.U(A.a_(y.b))
e.gcv().cs(u)}return A.o(null,v)}})
return A.p($async$IH,v)}}
B.ajD.prototype={
u(d){var w,v,u=null,t="firmware_version",s=this.c,r=J.V(s),q=x.h,p=q.a(r.h(s,"machine")),o=q.a(r.h(s,"provider"))
q=p==null
w=q?u:J.Z(p,"code")
w=A.i(w==null?"?":w)
q=q?u:J.Z(p,"name")
q=A.j(w+" \xb7 "+A.i(q==null?"":q),u,u,u,A.D(C.j,14,C.p),u,u,u)
w=o==null
v=A.i(w?u:J.Z(o,"name"))
q=A.b([q,C.bM,A.j("Provider: "+v+" ("+A.i(w?u:J.Z(o,"adapter"))+")",u,u,u,A.D(C.q,11,C.l),u,u,u),A.j("Ger\xe4t: "+A.i(r.h(s,"external_device_id")),u,u,u,A.D(C.q,11,C.l),u,u,u)],x.p)
if(r.h(s,t)!=null)q.push(A.j("Firmware: "+A.i(r.h(s,t)),u,u,u,A.D(C.q,11,C.l),u,u,u))
return new A.ah(C.dV,A.by(u,A.ac(q,C.C,u,C.f,C.h,0),u,u,C.aj,u,3),u)}}
B.BA.prototype={
W(){var w=$.ag()
return new B.UK(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.UK.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
lf(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$lf=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.w.ga1()
j=j==null?null:j.hS()
if(j!==!0){w=1
break}if(r.z==null||r.Q==null){w=1
break}q=r.gc8().aD(0,$.bL(),x.A)
t=4
j=q.cW("machine_devices")
o=r.z
n=r.Q
m=C.c.aK(r.x.a.a)
l=C.c.aK(r.y.a.a)
w=7
return A.k(j.iG(0,A.a4(["machine_id",o,"provider_id",n,"external_device_id",m,"firmware_version",l.length===0?null:l],x.N,x.T)),$async$lf)
case 7:j=r.c
if(j!=null)A.b5(j,!1).cC(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lf,v)},
u(d){var w=this,v=null,u=w.gc8(),t=u.ao($.bvZ(),x.w),s=u.ao($.bL(),x.A)
u=x.D
return new A.ah(new A.ak(0,0,0,A.bF(d,v,x.m).w.f.d),A.ev(A.k0(v,A.ac(A.b([A.j("IoT-Ger\xe4t registrieren",v,v,v,A.W(d).ok.r,v,v,v),C.K,A.yJ(new B.b9i(w),s.cW("machines").hj(0,"id, code, name").pf(0,"code").cr(new B.b9j(),u),u),C.v,A.dz(t,new B.b9k(w),new B.b9l(),new B.b9m(),!1,!0,!1,u,x.l),C.v,A.da(v,!1,w.x,D.aeC,v,v,1,!1,v,v,C.X,v,new B.b9n()),C.v,A.da(v,!1,w.y,D.aeF,v,v,1,!1,v,v,C.X,v,v),C.K,A.dk(D.aHW,w.gCF(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.Ya.prototype={
W(){return new B.arm()}}
B.arm.prototype={
u(d){var w,v=x.D
v=A.yJ(new B.bnO(this),this.gc8().ao($.bL(),x.A).cW("machines").hj(0,"id, code, name").pf(0,"code").cr(new B.bnP(),v),v)
w=this.w
return A.ac(A.b([new A.ah(C.D,v,null),A.aA(w==null?D.aMS:new B.arl(w,null),1)],x.p),C.k,null,C.f,C.h,0)}}
B.arl.prototype={
df(d,e){var w=x.D
return A.yJ(new B.bnK(this,e),e.ao($.bL(),x.A).cW("machine_slots").hj(0,"id, slot_code, product_id, unit_price_net, capacity, product:products(id, name, sku)").iE("machine_id",this.e).pf(0,"slot_code").cr(new B.bnL(),w),w)},
Cd(d,e,f){return this.aHj(d,e,f)},
aHj(d,e,f){var w=0,v=A.q(x.H),u=this
var $async$Cd=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kA(null,new B.bnH(u,f),d,!0,null,null,x.H),$async$Cd)
case 2:d.e5()
return A.o(null,v)}})
return A.p($async$Cd,v)}}
B.ark.prototype={
u(d){var w,v,u=null,t="unit_price_net",s=this.c,r=J.V(s),q=x.h.a(r.h(s,"product")),p=A.aR(12),o=r.h(s,"slot_code")
o=o==null?u:J.al(o)
if(o==null)o=""
p=A.bf(C.W,A.j(o,u,u,u,A.D(C.j,14,C.p),u,u,u),C.t,u,u,new A.b4(C.m,u,u,p,u,u,C.G),u,44,u,u,u,u,u,44)
o=q==null
if(o)w=u
else{w=J.Z(q,"name")
w=w==null?u:J.al(w)}if(w==null)w="\u2014 kein Produkt zugeordnet \u2014"
w=A.j(w,u,u,u,A.D(C.j,14,C.p),u,u,u)
o=o?u:J.Z(q,"sku")
o=A.i(o==null?"\u2014":o)
v=A.i(r.h(s,"capacity"))
if(r.h(s,t)==null)s="\u2014"
else{s=A.fH(r.h(s,t))
s=$.d2().al(s)}r=x.p
return new A.ah(C.j7,A.by(u,A.ao(A.b([p,C.aF,A.aA(A.ac(A.b([w,A.j("SKU: "+o+" \xb7 Kapazit\xe4t: "+v+" \xb7 Preis: "+s,u,u,u,A.D(C.q,11,C.l),u,u,u)],r),C.C,u,C.f,C.h,0),1),C.y7],r),C.k,u,C.f,C.h,0,u,u),u,this.d,C.dF,u,3),u)}}
B.Cj.prototype={
W(){var w=$.ag()
return new B.Y9(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(new A.cx("12",C.bb,C.aG),w))}}
B.Y9.prototype={
av(){var w,v,u,t=this
t.aL()
w=t.a.e
if(w!=null){v=J.V(w)
u=v.h(w,"slot_code")
u=u==null?null:J.al(u)
if(u==null)u=""
t.x.ses(0,u)
u=v.h(w,"unit_price_net")
u=u==null?null:J.al(u)
if(u==null)u=""
t.y.ses(0,u)
u=v.h(w,"capacity")
u=u==null?null:J.al(u)
if(u==null)u="12"
t.z.ses(0,u)
t.Q=A.aj(v.h(w,"product_id"))}},
l(){var w=this,v=w.x,u=v.R$=$.ag()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
w.ap()},
lf(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$lf=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.w.ga1()
i=i==null?null:i.hS()
if(i!==!0){w=1
break}q=r.gc8().aD(0,$.bL(),x.A)
t=4
i=r.a.d
o=C.c.aK(r.x.a.a)
n=r.Q
m=r.y.a.a
m=A.fT(A.ax(m,",","."))
l=A.iy(r.z.a.a,null)
if(l==null)l=12
k=x.z
w=7
return A.k(q.er("set_machine_slot",A.a4(["p_machine_id",i,"p_slot_code",o,"p_product_id",n,"p_unit_price_net",m,"p_capacity",l],x.N,k),k),$async$lf)
case 7:i=r.c
if(i!=null)A.b5(i,!1).fd()
t=2
w=6
break
case 4:t=3
h=s.pop()
p=A.a2(h)
i=r.c
if(i!=null)i.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lf,v)},
u(d){var w=this,v=null,u=w.gc8().ao($.bL(),x.A),t=A.bF(d,v,x.m).w,s=w.a.e==null?"Slot anlegen":"Slot bearbeiten",r=x.D
return new A.ah(new A.ak(0,0,0,t.f.d),A.ev(A.k0(v,A.ac(A.b([A.j(s,v,v,v,A.W(d).ok.r,v,v,v),C.K,A.da(v,!1,w.x,D.aeb,v,v,1,!1,v,v,C.X,v,new B.bnE()),C.v,A.yJ(new B.bnF(w),u.cW("products").hj(0,"id, name, sku").iE("status","active").pf(0,"name").cr(new B.bnG(),r),r),C.v,A.da(v,!1,w.y,D.aev,v,C.eA,1,!1,v,v,C.X,v,v),C.v,A.da(v,!1,w.z,D.aeL,v,C.cZ,1,!1,v,v,C.X,v,v),C.K,A.dk(C.dw,w.gCF(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.akp.prototype={
df(d,e){return A.dz(e.ao($.bCa(),x.w),new B.bba(e),new B.bbb(),new B.bbc(),!1,!0,!1,x.D,x.l)}}
B.ako.prototype={
u(d){var w,v,u,t,s,r=null,q="slot_code",p="quantity",o="unit_price_net",n="error_reason",m=this.c,l=J.V(m),k=l.h(m,"status"),j=k==null?r:J.al(k)
if(j==null)j=""
k=l.h(m,"event_type")
w=k==null?r:J.al(k)
if(w==null)w=""
v=x.h.a(l.h(m,"machine"))
A:{if("processed"===j){k=C.fB
break A}if("duplicate"===j){k=C.mj
break A}if("rejected"===j){k=C.mi
break A}k=C.ka
break A}u=v==null?r:J.Z(v,"code")
u=A.i(u==null?"?":u)
t=l.h(m,q)!=null?" \xb7 Slot "+A.i(l.h(m,q)):""
s=x.p
s=A.b([A.ao(A.b([A.aA(A.j(w+" \xb7 "+u+t,r,r,r,A.D(C.j,13,C.p),r,r,r),1),new A.j5(j,k,r,r)],s),C.k,r,C.f,C.h,0,r,r),C.bM,A.j("Occurred: "+B.bIU(l.h(m,"occurred_at"))+" \xb7 Received: "+B.bIU(l.h(m,"received_at")),r,r,r,A.D(C.q,11,C.l),r,r,r)],s)
if(l.h(m,p)!=null||l.h(m,o)!=null){k=l.h(m,p)
k=A.i(k==null?"\u2014":k)
if(l.h(m,o)!=null){u=A.fH(l.h(m,o))
u=" \xb7 Preis: "+$.d2().al(u)}else u=""
t=J.d(l.h(m,"dispense_confirmed"),!1)?" \xb7 Auswurf NICHT best\xe4tigt":""
s.push(A.j("Menge: "+k+u+t,r,r,r,A.D(C.aU,11,C.l),r,r,r))}k=A.aj(l.h(m,n))
if((k==null?r:k.length!==0)===!0)s.push(A.j("Fehler: "+A.i(l.h(m,n)),r,r,r,A.D(C.ak,11,C.S),r,r,r))
return new A.ah(C.j7,A.by(r,A.ac(s,C.C,r,C.f,C.h,0),r,r,C.dF,r,3),r)}}
B.tP.prototype={
u(d){var w=null
return A.cZ(new A.ah(C.dg,A.ac(A.b([A.cp(this.c,C.q,w,40),C.P,A.j(this.d,w,w,w,A.D(C.q,13,C.l),C.cG,w,w)],x.p),C.k,w,C.f,C.H,0),w),w,w)}}
B.adF.prototype={
u(d){return B.PR("measured_at","temperature",new B.b0C(),new B.b0D(),new B.b0E(),"temperature_logs","Temperaturkontrolle")}}
B.Cu.prototype={
W(){var w=$.ag()
return new B.YD(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.YD.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
aM5(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hS()
if(s!==!0)return
s=t.x.a.a
w=A.JM(A.ax(s,",","."))
s=t.c
s.toString
s=A.b5(s,!1)
v=t.z
u=C.c.aK(t.y.a.a)
if(u.length===0)u=null
s.cC(A.a4(["machine_id",v,"temperature_c",w,"corrective_action",u,"measured_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ah(new A.ak(0,0,0,A.bF(d,v,x.m).w.f.d),A.ev(A.k0(v,A.ac(A.b([A.j("Temperatur erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.OA(new B.bp_(w),w.z),C.v,A.da(v,!1,w.x,D.aeq,v,D.aB9,1,!1,v,v,C.X,v,new B.bp0()),C.v,A.da(v,!1,w.y,D.ae9,v,v,2,!1,v,v,C.X,v,v),C.K,A.dk(C.dw,w.gaM4(),v)],x.p),C.a9,v,C.f,C.H,0),w.w),v,C.aj,v,C.M),v)}}
B.a7n.prototype={
df(d,e){return A.dz(e.ao($.avQ(),x.c),new B.aL9(this),new B.aLa(),new B.aLb(),!1,!0,!1,x.W,x.l)}}
B.Fz.prototype={
W(){return new B.Wy()},
aYY(d){return this.d.$1(d)}}
B.Wy.prototype={
xj(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$xj=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new B.biE(q))
t=4
p=new B.aJ9()
k=new A.a6E(C.C6,1600,null,80,!0)
k.arh(80,null,1600,!0)
w=7
return A.k($.bMP().qY(k,C.Fd),$async$xj)
case 7:o=e
if(o==null){r=[1]
w=5
break}w=8
return A.k(o.Yp(),$async$xj)
case 8:n=e
w=9
return A.k(q.gc8().aD(0,$.bCZ(),x.Z).Fy(0,"haccp",n,"image/jpeg",o.b),$async$xj)
case 9:m=e
q.a.aYY(m)
if(q.c!=null)q.J(new B.biF(q,m))
r.push(6)
w=5
break
case 4:t=3
h=s.pop()
l=A.a2(h)
i=q.c
if(i!=null)i.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Foto-Upload fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.biG(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xj,v)},
u(d){var w=this,v=null,u=w.w,t=u?v:w.gaIh()
if(u)u=D.azu
else u=A.cp(w.x==null?D.aa8:C.jh,v,v,v)
return A.fR(u,A.j(w.x==null?"Foto aufnehmen":"Foto angeh\xe4ngt",v,v,v,v,v,v,v),t,v)}}
B.PQ.prototype={
W(){return new B.WJ()},
aWu(d){return this.w.$1(d)},
aWt(d){return this.x.$1(d)},
aY5(d,e){return this.y.$2(d,e)}}
B.WJ.prototype={
gjY(){var w=this.w
return w===$?this.w=F.aFg():w},
gIV(){var w=this,v=w.a
return new B.Al(v.e,v.f,w.gjY().a,A.bB(A.aU(w.gjY().b),A.bi(w.gjY().b),A.bU(w.gjY().b),23,59,59,0))},
Ci(){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$Ci=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:o=t.a
o.toString
s=t.c
s.toString
r=t.gc8()
w=3
return A.k(o.aY5(s,r),$async$Ci)
case 3:q=e
if(q==null){w=1
break}w=4
return A.k(r.aD(0,$.bwc().ghP(),x.M).k6(t.a.e,q),$async$Ci)
case 4:p=e
o=t.c
if(o==null){w=1
break}if(p){o=$.avU().$1(t.gIV())
if(r.e==null)A.U(A.a_(y.b))
r.gcv().cs(o)
t.c.O(x.q).f.b2(D.aA_)}else o.O(x.q).f.b2(D.aA0)
case 1:return A.o(u,v)}})
return A.p($async$Ci,v)},
Cj(){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$Cj=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a.r
w=3
return A.k(t.gc8().aD(0,$.bwc().ghP(),x.M).LA(s,t.gjY().a,t.gjY().b),$async$Cj)
case 3:r=e
q=t.c
if(q==null){w=1
break}if(r==null){q.O(x.q).f.b2(D.azV)
w=1
break}w=4
return A.k(A.bvd(r,s+"_nachweis.pdf"),$async$Cj)
case 4:case 1:return A.o(u,v)}})
return A.p($async$Cj,v)},
Ck(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ck=A.m(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=r.a.r
if(f==null){w=1
break}n=r.c
n.toString
w=3
return A.k(A.hh(null,null,!0,null,new B.bjD(r),n,null,!0,!0,x.y),$async$Ck)
case 3:if(a0!==!0){w=1
break}n=r.gc8()
m=A.dJ(n.aD(0,$.avU().$1(r.gIV()),x.w))
q=m==null?A.b([],x.t):m
t=5
p=new F.mJ(n.aD(0,$.bL(),x.A))
n=D.apK.h(0,f)
if(n==null)n="haccp_temperature"
l=r.gjY()
k=r.gjY()
j=r.a.d
i=r.gjY()
h=$.dp()
i=h.al(i.a)
h=h.al(r.gjY().b)
w=8
return A.k(p.w7(n,l.a,k.b,A.a4(["protocol_kind",f,"count",J.cg(q)],x.N,x.z),j+" \xb7 "+i+" \u2013 "+h),$async$Ck)
case 8:n=r.c
if(n!=null)n.O(x.q).f.b2(E.mf)
t=2
w=7
break
case 5:t=4
e=s.pop()
o=A.a2(e)
n=r.c
if(n!=null)n.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Ck,v)},
u(d){var w,v,u=this,t=null,s=u.gc8().ao($.avU().$1(u.gIV()),x.w),r=A.ro(t,A.j(u.a.d,t,t,t,t,t,t,t)),q=B.a5x(t,t,D.nZ,D.Zs,u.gaII()),p=x.p,o=A.b([],p)
u.a.toString
o.push(new B.yR(A.b([new B.pO(E.fS,"Freigabe anfordern",u.gaIK(),C.m,t,!1),new B.pO(C.i4,"PDF-Nachweis",u.gaIJ(),C.ak,C.ak,!1)],x.x),D.x0,t))
w=u.gjY()
v=$.dp()
o.push(new A.ah(C.dF,A.ao(A.b([A.aA(A.j(v.al(w.a)+" \u2013 "+v.al(u.gjY().b),t,t,t,t,t,t,t),1),A.nr(D.lh,D.aHQ,new B.bjI(u,d),t)],p),C.k,t,C.f,C.h,0,t,t),t))
o.push(D.kU)
o.push(A.aA(A.dz(s,new B.bjJ(u),new B.bjK(),new B.bjL(),!1,!0,!1,x.D,x.l),1))
return A.dd(r,t,A.ac(o,C.k,t,C.f,C.h,0),t,q,t)}}
B.a1A.prototype={
u(d){var w=null
return A.byF(!1,w,C.eH,w,this.as,w,w,C.t,w,w,w,w,w,w,w,w,w,w,!0,this.d,w,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,this.r,w,!1,w,w)}}
B.b6v.prototype={
L(){return"_ChipVariant."+this.b}}
B.a1B.prototype={
u(d){var w,v,u,t=null,s=A.bE8(d)
A.W(d)
w=this.x
v=w?s.ch:t
u=s.y
if(u==null){A.W(d)
u=!0}return A.byF(!1,t,C.eH,t,t,t,t,C.t,t,new B.b6w(d,!0,w,D.hC,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,C.zr,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,!0,this.d,t,v,t,t,t,t,this.r,t,t,w,s.f,t,t,t,u,t,t,!0,t,t)}}
B.b6w.prototype={
gii(){var w,v=this,u=v.id
if(u===$){w=A.W(v.fr)
v.id!==$&&A.aN()
u=v.id=w.ax}return u},
gew(d){var w
if(this.go===D.hC)w=0
else w=this.fx?1:0
return w},
gzr(){return 1},
gjH(){var w,v,u,t=this,s=t.k1
if(s===$){w=A.W(t.fr)
t.k1!==$&&A.aN()
s=t.k1=w.ok}w=s.as
if(w==null)w=null
else{if(t.fx)if(t.fy){v=t.gii()
u=v.as
v=u==null?v.z:u}else{v=t.gii()
u=v.rx
v=u==null?v.k3:u}else v=t.gii().k3
v=w.cN(v)
w=v}return w},
gd8(d){return new A.bo(new B.b6x(this),x.b)},
gcb(d){var w
if(this.go===D.hC)w=C.F
else{w=this.gii().x1
if(w==null)w=C.E}return w},
gco(){return C.F},
gv3(){var w,v,u=this
if(u.fx)if(u.fy){w=u.gii()
v=w.as
w=v==null?w.z:v}else w=u.gii().b
else w=u.gii().k3
return w},
gyg(){var w,v,u=this
if(u.fx)if(u.fy){w=u.gii()
v=w.as
w=v==null?w.z:v}else{w=u.gii()
v=w.rx
w=v==null?w.k3:v}else w=u.gii().k3
return w},
geK(){var w,v,u=this
if(u.go===D.hC&&!u.fy)if(u.fx){w=u.gii()
v=w.to
if(v==null){v=w.B
w=v==null?w.k3:v}else w=v
w=new A.bm(w,1,C.U,-1)}else{w=u.gii().k3
w=new A.bm(A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255),1,C.U,-1)}else w=C.Bk
return w},
gfk(){var w,v,u=this,t=null
if(u.fx)if(u.fy){w=u.gii()
v=w.as
w=v==null?w.z:v}else w=u.gii().b
else w=u.gii().k3
return new A.dC(18,t,t,t,t,w,t,t,t)},
gdl(d){return C.fs},
gm8(){var w=this.gjH(),v=w==null?null:w.r
if(v==null)v=14
w=A.bN(this.fr,C.b3)
w=w==null?null:w.gcP()
w=A.oe(C.fr,C.dW,A.P((w==null?C.aO:w).bm(0,v)/14-1,0,1))
w.toString
return w}}
B.fl.prototype={}
B.r6.prototype={}
B.fw.prototype={}
B.a4b.prototype={
aCr(d,e){var w,v,u,t,s
if(!e)w=d===!0
else w=!0
for(v=this.CW,u=v.length,t=0;t<v.length;v.length===u||(0,A.G)(v),++t){s=v[t].b
if(s!=null&&w)s.$1(w)}},
a26(d,e,f,g,h,i,j){var w,v,u,t,s=null,r=A.W(e).y2,q=r.x
if(q==null)q=24
w=r.Q
v=w==null?q:w
u=w==null?q/2:w
t=A.bC(s,s,s,new A.ah(new A.dV(v,0,u,0),A.cZ(A.bwL(s,!1,s,s,s,!1,s,s,f,s,s,s,s,s,j,d),s,s),s),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.O,s)
return new B.S8(D.Z5,g!=null?B.bHW(t,i,s,s,g,h):t,s)},
asX(d,e,f,g,h,i){return this.a26(d,e,f,g,h,null,i)},
u(c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=A.W(c9),c6=B.bSq(c9),c7=c3.Q,c8=c7==null?c6.f:c7
if(c8==null)c8=c5.y2.f
w=c6.b
if(w==null)w=c5.y2.b
c7=c3.CW
v=C.b.ev(c7,new B.aB0())
u=v?new A.bc(c7,new B.aB1(),A.af(c7).i("bc<1>")):A.b([],x._)
t=J.cy(u)
s=t.ig(u,new B.aB2())
r=v&&s.gp(0)===t.gp(u)
q=v&&!s.gZ(0)&&!r
t=c6.x
p=t==null?c5.y2.x:t
if(p==null)p=24
t=c6.Q
o=t==null
n=o?c5.y2.Q:t
if(n==null)n=p
m=o?c5.y2.Q:t
if(m==null)m=p/2
t=c3.ay
if(t==null)t=c6.y
l=t==null?c5.y2.y:t
if(l==null)l=56
t=c3.c
o=t.length
k=A.bI(o+(v?1:0),D.a2H,!1,x.eA)
j=A.a7f(c7.length+1,new B.aB3(c3,v,w,c8,c9,c6,c5,new A.bo(new B.aB4(c5),x.b),k),!0,x.cZ)
if(v){k[0]=new B.a5g(n+18+m)
o=j[0]
i=q?c4:r
o.c[0]=c3.asX(i,c9,new B.aB5(c3,q),c4,c4,!0)
for(o=c7.length,h=1,g=0;g<c7.length;c7.length===o||(0,A.G)(c7),++g){f=c7[g]
i=j[h]
e=f.b
d=e==null?c4:new B.aB6(f)
a0=f.r
if(a0==null)a0=w
i.c[0]=c3.a26(!1,c9,e,d,a0,c4,!1);++h}a1=1}else a1=0
for(o=x.f0,a2=c3.y,a3=c3.x,i=x.d,a4=c3.as,e=x.p,d=x.k,a0=c3.fr,a5=l/2,a6=p/2,a7=0;a8=t.length,a7<a8;++a7){a9=t[a7]
A:{b0=0===a7
if(b0)b1=v
else b1=!1
if(b1){b1=a6
break A}if(b0){b1=p
break A}b1=a5
break A}b2=new A.dV(b1,0,a7===a8-1?p:a5,0)
if(a7===a0)k[a1]=D.afa
else k[a1]=D.afb
A.b2(d).E(0,C.I)
a8=j[0]
b1=a9.d
b3=A.W(c9)
c9.O(i)
b4=A.W(c9)
b5=b1?C.b_:c4
b6=A.b([],e)
b6.push(a9.a)
b4=b4.y2.w
b7=b4==null?b3.y2.w:b4
if(b7==null){b4=b3.ok.x
b4.toString
b7=b4}b4=b1?C.fJ:C.aW
b8=c9.O(o)
b9=A.bf(b4,A.D_(new A.qf(new A.Ro(c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,C.Y4,c4,C.O,c4,c4,c4,c4),!1,!1,c4,!1,!1,new A.iA(C.ay,C.f,C.h,C.k,b5,C.bz,c4,0,b6,c4),c4),C.av,C.dE,!1,(b8==null?C.j5:b8).w.c3(b7)),C.t,c4,c4,c4,c4,a4,c4,c4,b2,c4,c4,c4)
a8.c[a1]=A.eD(!1,c4,!0,b9,c4,!0,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c8,c4,c4,c4,c4)
for(a8=c7.length,h=1,g=0;g<c7.length;c7.length===a8||(0,A.G)(c7),++g){f=c7[g]
c0=f.f[a7]
b4=j[h]
b5=f.b==null?c4:new B.aB7(f)
b6=f.r
if(b6==null)b6=w
b3=A.W(c9)
c9.O(i)
b8=A.W(c9)
b8=b8.y2.e
c1=b8==null?b3.y2.e:b8
if(c1==null){b8=b3.ok.z
b8.toString
c1=b8}b8=b1?C.fJ:C.aW
c2=c9.O(o)
c2=(c2==null?C.j5:c2).w.c3(c1)
b9=A.bf(b8,new A.ob(c2.cN(c4),c4,!0,C.eb,c4,C.by,c4,new A.E3(c0.a,c4),c4),C.t,c4,new A.av(0,1/0,a3,a2),c4,c4,c4,c4,c4,b2,c4,c4,c4)
if(b5!=null)b9=B.bHW(b9,c4,c4,c4,b5,b6)
b4.c[a1]=new B.S8(c4,b9,c4);++h}++a1}c7=c6.a
if(c7==null)c7=c5.y2.a
return A.bf(c4,A.dR(!1,C.a0,!0,c4,B.bYZ(c4,j,new A.j_(k,A.af(k).i("j_<1>")),D.Z4),C.t,c4,0,c4,c4,c4,c4,c4,C.f7),C.t,c4,c4,c7,c4,c4,c4,c4,c4,c4,c4,c4)}}
B.S9.prototype={
Aj(d){return new B.b0m(d)},
L1(d){this.amL(d)
return!0}}
B.anH.prototype={
Ez(d,e){return A.U(A.f6(null))},
EF(d,e){return A.U(A.f6(null))}}
B.anM.prototype={
d7(d){return A.U(A.f6(null))}}
B.GD.prototype={
W(){return new B.Yc()},
aYu(){return this.w.$0()}}
B.Yc.prototype={
aC6(){var w=this
if(w.d)return
w.J(new B.bnQ(w))
w.a.aYu()
w.c.O(x.q).f.WV(D.azD)},
u(d){var w,v,u,t,s=this,r=null
A.W(d)
w=A.bJq(d)
v=A.byW(d)
u=new B.bnT(s,v,w)
t=A.qm(r,r,r,r,r,r,r,r,r,r,r,r,u.$0(),r,r,r,r,r,r,r,r)
u=u.$0()
u=t.aR9(new B.bnR(s,v).$0(),u)
t=s.d?r:s.gaC5()
return A.d9(A.j(s.a.r,r,r,r,r,r,r,r),r,r,t,r,u)}}
B.qi.prototype={
j(d){var w=this.AI(0),v=this.b
v=v==null?"default vertical alignment":v.j(0)
return w+"; "+v}}
B.wi.prototype={
Wj(d,e){return null},
j(d){return"TableColumnWidth"}}
B.O0.prototype={
EF(d,e){var w,v,u,t,s
for(w=new A.fk(d.a(),d.$ti.i("fk<1>")),v=0;w.t();){u=w.b
t=u.gcB()
s=C.bk.e6(u.dy,1/0,t)
v=Math.max(v,s)}return v},
Ez(d,e){var w,v,u,t,s
for(w=new A.fk(d.a(),d.$ti.i("fk<1>")),v=0;w.t();){u=w.b
t=u.gcm()
s=C.aT.e6(u.dy,1/0,t)
v=Math.max(v,s)}return v},
Wj(d,e){return this.a},
j(d){var w=this.a
return"IntrinsicColumnWidth(flex: "+A.i(w==null?null:C.e.ae(w,1))+")"}}
B.a5g.prototype={
EF(d,e){return this.a},
Ez(d,e){return this.a},
j(d){return"FixedColumnWidth("+A.lA(this.a)+")"}}
B.a5v.prototype={
EF(d,e){return 0},
Ez(d,e){return 0},
Wj(d,e){return 1},
j(d){return"FlexColumnWidth("+A.lA(1)+")"}}
B.wh.prototype={
L(){return"TableCellVerticalAlignment."+this.b}}
B.vY.prototype={
saQ1(d){var w=this.a3
if(w===d)return
w.gZ(w)
this.a3=d
this.a7()},
saS8(d){if(this.a4===d)return
this.a4=d
this.a7()},
scH(d){if(this.ar===d)return
this.ar=d
this.a7()},
saPd(d,e){return},
saib(d){var w,v,u,t=this,s=t.aG
if(s==null?d==null:s===d)return
t.aG=d
s=t.bx
if(s!=null)for(w=s.length,v=0;v<w;++v){u=s[v]
if(u!=null)u.l()}s=t.aG
t.bx=s!=null?A.bI(s.length,null,!1,x.ea):null},
soL(d){if(d.k(0,this.b9))return
this.b9=d
this.bb()},
saS9(d){if(this.aQ===d)return
this.aQ=d
this.a7()},
sYL(d,e){return},
hk(d){if(!(d.b instanceof B.qi))d.b=new B.qi(C.r)},
fw(d){this.jU(d)
d.bi=C.axM
d.e=d.a=d.r=!0},
qb(){this.GO()
this.dc.a8(0)
this.cO.a8(0)},
rS(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=x.aO,b8=A.b([],b7),b9=b6.V,c0=J.l0(b9,x.d7)
for(w=x.cV,v=0;v<b9;++v){u=b6.U
t=A.b(new Array(u),w)
for(s=0;s<u;++s)t[s]=A.b([],b7)
c0[v]=t}r=new B.aVU()
q=new B.aVT(b6)
p=new B.aVS(b6)
o=new B.aVV()
for(w=c3.length,n=b6.da,m=0;m<c3.length;c3.length===w||(0,A.G)(c3),++m){l=c3[m]
if(n.aE(0,l.b)){k=n.h(0,l.b)
j=k.a
i=k.b
if(j<b6.V&&i<b6.U)c0[j][i].push(l)}else{h=r.$1(l)
j=q.$1(h.b)
i=p.$1(h.a)
if(j!==-1&&i!==-1)c0[j][i].push(l)}}for(w=b6.be,g=b6.cO,f=b6.dc,j=0;j<b6.V;j=a0){e=w[j]
d=b6.fy
d=(d==null?A.U(A.a_("RenderBox was not laid out: "+A.K(b6).j(0)+"#"+A.c8(b6))):d).a
a0=j+1
a1=w[a0]
a2=a1-e
if(a2===0)continue
a3=f.h(0,j)
if(a3==null){a3=A.wa(null,new B.aVQ(b6,new A.H(0,e,d,a1)))
f.m(0,j,a3)}a4=A.b([],b7)
for(a1=a2+1e-10,a2=0+a2,i=0;i<b6.U;++i){a5=c0[j][i]
a6=a5.length
if(a6===0)continue
if(a6<=1)a7=C.b.gcI(a5).U!==C.zI&&C.b.gcI(a5).U!==C.Y4
else a7=!0
a8=A.ct()
if(!a7){a6=C.b.gcI(a5)
if(a8.b!==a8)A.U(A.Og(a8.a))
a8.b=a6}else{a6=g.cl(0,new B.Ih(j,i),new B.aVR())
a9=A.ih()
a9.bi=C.zI
a9.r=!0
a6.mk(0,a5,a9)
if(a8.b!==a8)A.U(A.Og(a8.a))
a8.b=a6}a6=b6.U
a9=b6.S
if(i===a6-1){a9.toString
b0=d-J.lF(a9,i)}else{a9.toString
a6=J.lF(a9,i+1)
a9=b6.S
a9.toString
b0=a6-J.lF(a9,i)}if(b0<=0)continue
if(a7){a6=a8.b
if(a6===a8)A.U(A.rA(a8.a))
a9=b6.S
a9.toString
a9=J.lF(a9,i)
b1=new Float64Array(16)
b2=new A.cH(b1)
b2.Gl()
b1[14]=0
b1[13]=0
b1[12]=a9
if(!A.aNS(a6.d,b2)){a9=A.OR(b2)
a6.d=a9?null:b2
a6.j6()}a9=new A.H(0,0,0+b0,a2)
if(!a6.f.k(0,a9)){a6.f=a9
a6.j6()}}for(a6=a5.length,m=0;m<a5.length;a5.length===a6||(0,A.G)(a5),++m){l=a5[m]
n.m(0,l.b,new B.Ih(j,i))
b3=r.$1(l)
b4=b3.d>a1?-w[j]:0
b5=0
if(a7){if(b3.a>=b0){a9=b6.S
a9.toString
a9=J.bQh(J.lF(a9,i))
b5=a9}}else{a9=b3.c
b1=b6.S
b1.toString
if(a9<=J.lF(b1,i)){a9=b6.S
a9.toString
a9=J.lF(a9,i)
b5=a9}}if(b5!==0||b4!==0)o.$3(l,b5,b4)}a6=a8.b
if(a6===a8)A.U(A.rA(a8.a))
a6.x=i
a4.push(a6)}a1=A.ih()
a1.p4=j
a1.r=!0
a1.bi=C.Y3
a3.mk(0,a4,a1)
a1=new Float64Array(16)
a6=new A.cH(a1)
a6.Gl()
a1[14]=0
a1[13]=e
a1[12]=0
if(!A.aNS(a3.d,a6)){e=A.OR(a6)
a3.d=e?null:a6
a3.j6()}e=new A.H(0,0,0+d,a2)
if(!a3.f.k(0,e)){a3.f=e
a3.j6()}b8.push(a3)}c1.mk(0,b8,c2)},
akO(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B
if(e===n&&d===o.U)return
if(d===0||e.length===0){o.U=d
w=n.length
if(w===0)return
for(v=0;v<n.length;n.length===w||(0,A.G)(n),++v){u=n[v]
if(u!=null)o.nM(u)}o.V=0
C.b.a8(o.B)
o.a7()
return}t=A.em(x.Y)
for(s=0;s<o.V;++s)for(n=s*d,r=0;w=o.U,r<w;++r){q=r+n
w=o.B[r+s*w]
if(w!=null)p=r>=d||q>=e.length||w!==e[q]
else p=!1
if(p)t.E(0,w)}for(s=0;n=s*d,n<e.length;){for(r=0;r<d;++r){q=r+n
w=o.U
p=e[q]
if(p!=null)w=r>=w||s>=o.V||o.B[r+s*w]!==p
else w=!1
if(w)if(!t.H(0,p)){w=e[q]
w.toString
o.kB(w)}}++s}t.aB(0,o.gaST())
o.U=d
o.V=C.e.h2(e.length,d)
n=A.Q(e,x.dE)
o.B=n
o.a7()},
a_A(d,e,f){var w,v=this,u=d+e*v.U,t=v.B[u]
if(t==f)return
if(t!=null)v.nM(t)
w=v.B
w.$flags&2&&A.S(w)
w[u]=f
if(f!=null)v.kB(f)},
aM(d){var w,v,u,t
this.fq(d)
for(w=this.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t!=null)t.aM(d)}},
aF(d){var w,v,u,t,s,r=this
r.fi(0)
w=r.bx
if(w!=null){for(v=w.length,u=0;u<v;++u){t=w[u]
if(t!=null)t.l()}r.bx=A.bI(r.aG.length,null,!1,x.ea)}for(w=r.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){s=w[u]
if(s!=null)s.aF(0)}},
cZ(d){var w,v,u,t
for(w=this.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t!=null)d.$1(t)}},
jg(){this.cZ(this.gNP())},
cg(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.EF(t.KA(v),1/0)}return w},
ce(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.Ez(t.KA(v),1/0)}return w},
cf(d){var w,v,u,t,s,r,q,p,o,n=this
if(n.V*n.U===0)return 0
w=n.Hh(A.jj(1/0,d))
for(v=0,u=0;u<n.V;++u){for(t=0,s=0;r=n.U,s<r;++s){q=n.B[s+u*r]
if(q!=null){r=w[s]
p=q.gcK()
o=C.bq.e6(q.dy,r,p)
t=Math.max(t,o)}}v+=t}return v},
ck(d){return this.au(C.bA,d,this.gcL())},
hX(d){return this.dh},
KA(d){return new A.ip(this.aQ0(d),x.gN)},
aQ0(d){var w=this
return function(){var v=d
var u=0,t=1,s=[],r,q,p
return function $async$KA(e,f,g){if(f===1){s.push(g)
u=t}for(;;)switch(u){case 0:r=0
case 2:if(!(r<w.V)){u=4
break}q=w.U
p=w.B[v+r*q]
u=p!=null?5:6
break
case 5:u=7
return e.b=p,1
case 7:case 6:case 3:++r
u=2
break
case 4:return 0
case 1:return e.c=s.at(-1),3}}}},
Hh(a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=x.gR,a5=A.bI(a3.U,0,!1,a4),a6=A.bI(a3.U,0,!1,a4),a7=A.bI(a3.U,null,!1,x.cD)
for(w=a8.b,v=0,u=0,t=0,s=0;r=a3.U,s<r;++s){q=a3.a3.h(0,s)
if(q==null)q=a3.a4
p=a3.KA(s)
o=q.Ez(p,w)
a5[s]=o
v+=o
a6[s]=q.EF(p,w)
n=q.Wj(0,p)
if(n!=null){a7[s]=n
t+=n}else u+=o}m=a8.a
if(t>0){l=isFinite(w)?w:m
if(v<l){k=l-u
for(s=0;s<r;++s){a4=a7[s]
if(a4!=null){j=k*a4/t
a4=a5[s]
if(a4<j){v+=j-a4
a5[s]=j}}}}}else if(v<m){i=(m-v)/r
for(s=0;s<r;++s)a5[s]=a5[s]+i
v=m}if(v>w){h=v-w
g=r
for(;;){if(!(h>1e-10&&t>1e-10))break
for(f=0,s=0;s<r;++s){a4=a7[s]
if(a4!=null){e=a5[s]
d=e-h*a4/t
a0=a6[s]
if(d<=a0){h-=e-a0
a5[s]=a0
a7[s]=null;--g}else{h-=e-d
a5[s]=d
f+=a4}}}t=f}for(;;){if(!(h>1e-10&&g>0))break
i=h/g
for(a1=0,s=0;s<r;++s){a4=a5[s]
e=a6[s]
a2=a4-e
if(a2>0)if(a2<=i){h-=a2
a5[s]=e}else{h-=i
a5[s]=a4-i;++a1}}g=a1}}return a5},
ak3(d){var w=this.be
return new A.H(0,w[d],this.gC(0).a,w[d+1])},
eb(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.V*m.U===0)return l
w=m.Hh(d)
for(v=x.L,u=l,t=0;t<m.U;++t){s=m.B[t]
r=A.h2(l,w[t])
if(s==null)continue
q=s.b
q.toString
p=v.a(q).b
if(p==null)p=m.aQ
A:{q=l
if(D.aAM===p){q=s.gwN()
o=C.fL.e6(s.dy,new A.aI(r,e),q)
q=o
break A}if(D.aAK===p||D.Z4===p||D.aAL===p||D.Z5===p||D.aAN===p)break A}if(q!=null)n=u==null||u<q
else n=!1
if(n)u=q}return u},
dD(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(l.V*l.U===0)return d.c2(C.ac)
w=l.Hh(d)
v=C.b.fA(w,0,new B.aVW())
for(u=x.L,t=0,s=0;s<l.V;++s){for(r=0,q=0;p=l.U,q<p;++q){o=l.B[q+s*p]
if(o!=null){p=o.b
p.toString
p=u.a(p).b
switch((p==null?l.aQ:p).a){case 3:return C.ac
case 0:case 1:case 2:case 5:p=A.h2(null,w[q])
n=o.gdn()
m=C.am.e6(o.dy,p,n)
r=Math.max(r,m.b)
break
case 4:break}}}t+=r}return d.c2(new A.I(v,t))},
cA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2="RenderBox was not laid out: ",a3=x.cT.a(A.L.prototype.ga6.call(a1)),a4=a1.V,a5=a1.U
if(a4*a5===0){a1.R=0
a1.fy=a3.c2(C.ac)
return}w=a1.Hh(a3)
v=x.gR
u=A.bI(a5,0,!1,v)
switch(a1.ar.a){case 0:u[a5-1]=0
for(t=a5-2;t>=0;--t){s=t+1
u[t]=u[s]+w[s]}a1.S=new A.cA(u,A.af(u).i("cA<1>"))
a1.R=C.b.ga2(u)+C.b.ga2(w)
break
case 1:u[0]=0
for(t=1;t<a5;++t){s=t-1
u[t]=u[s]+w[s]}a1.S=u
a1.R=C.b.gaf(u)+C.b.gaf(w)
break}s=a1.be
C.b.a8(s)
a1.dh=null
for(r=x.L,q=0,p=0;p<a4;++p,q=e){s.push(q)
o=A.bI(a5,0,!1,v)
for(n=p*a5,m=0,l=!1,k=0,j=0,t=0;t<a5;++t){i=a1.B[t+n]
if(i!=null){h=i.b
h.toString
r.a(h)
h.d=p
g=h.b
switch((g==null?a1.aQ:g).a){case 3:i.dM(A.h2(null,w[t]),!0)
g=a1.ca
g.toString
f=i.Aa(g,!0)
g=i.fy
if(f!=null){k=Math.max(k,f)
j=Math.max(j,(g==null?A.U(A.a_(a2+A.K(i).j(0)+"#"+A.c8(i))):g).b-f)
o[t]=f
l=!0}else{m=Math.max(m,(g==null?A.U(A.a_(a2+A.K(i).j(0)+"#"+A.c8(i))):g).b)
h.a=new A.r(u[t],q)}break
case 0:case 1:case 2:case 5:i.dM(A.h2(null,w[t]),!0)
h=i.fy
m=Math.max(m,(h==null?A.U(A.a_(a2+A.K(i).j(0)+"#"+A.c8(i))):h).b)
break
case 4:break}}}if(l){if(p===0)a1.dh=k
m=Math.max(m,k+j)}for(e=q+m,h=q+k,t=0;t<a5;++t){i=a1.B[t+n]
if(i!=null){g=i.b
g.toString
r.a(g)
d=g.b
switch((d==null?a1.aQ:d).a){case 3:g.a=new A.r(u[t],h-o[t])
break
case 0:g.a=new A.r(u[t],q)
break
case 1:d=u[t]
a0=i.fy
g.a=new A.r(d,q+(m-(a0==null?A.U(A.a_(a2+A.K(i).j(0)+"#"+A.c8(i))):a0).b)/2)
break
case 2:d=u[t]
a0=i.fy
g.a=new A.r(d,e-(a0==null?A.U(A.a_(a2+A.K(i).j(0)+"#"+A.c8(i))):a0).b)
break
case 4:case 5:i.is(A.h2(m,w[t]))
g.a=new A.r(u[t],q)
break}}}}s.push(q)
v=a1.R
v===$&&A.a()
a1.fy=a3.c2(new A.I(v,q))},
ed(d,e){var w,v,u,t
for(w=this.B.length-1,v=x.O;w>=0;--w){u=this.B[w]
if(u!=null){t=u.b
t.toString
if(d.lj(new B.aVX(u),v.a(t).a,e))return!0}}return!1},
aR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.V*k.U===0)return
if(k.aG!=null){w=d.gdv(0)
for(v=k.be,u=e.a,t=e.b,s=k.ghg(),r=0;r<k.V;++r){q=k.aG
if(q.length<=r)break
q=q[r]
if(q!=null){p=k.bx
if(p[r]==null)p[r]=q.Dp(s)
q=k.bx[r]
q.toString
p=v[r]
o=k.b9
n=k.fy
if(n==null)n=A.U(A.a_("RenderBox was not laid out: "+A.K(k).j(0)+"#"+A.c8(k)))
q.ia(w,new A.r(u,t+p),o.KJ(new A.I(n.a,v[r+1]-p)))}}}for(v=x.O,u=e.a,t=e.b,m=0;s=k.B,m<s.length;++m){l=s[m]
if(l!=null){s=l.b
s.toString
s=v.a(s).a
d.eH(l,new A.r(s.a+u,s.b+t))}}}}
B.Ih.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
if(!(e instanceof B.Ih))return!1
return this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.mn.prototype={
j(d){var w,v=this.a
v=v!=null?"TableRow("+(v.j(0)+", "):"TableRow("
v+=this.b.j(0)+", "
w=this.c
v=(w.length===0?v+"no children":v+A.i(w))+")"
return v.charCodeAt(0)==0?v:v}}
B.lu.prototype={}
B.S7.prototype={
d7(d){return new B.arX(D.alC,A.em(x.dk),this,C.bc)},
bk(d){var w,v,u,t,s,r,q=this,p=q.c,o=p.length
p=o!==0?p[0].c.length:0
w=d.O(x.Q).w
v=A.CG(d,null)
u=x.B
t=x.cQ
s=x.eV
r=A.b([],x.eQ)
p=new B.vY(D.alB,p,o,q.d,D.BM,w,q.r,v,q.w,null,A.z(u,t),A.z(u,s),A.z(t,s),r,new A.bs(),A.aM(x.cn))
p.bj()
o=A.b([],x.V)
C.b.sp(o,p.U*p.V)
p.B=o
p.saib(q.y)
return p},
bz(d,e){var w,v=this
e.saQ1(v.d)
e.saS8(D.BM)
w=d.O(x.Q).w
e.scH(w)
e.saPd(0,v.r)
e.saib(v.y)
e.soL(A.CG(d,null))
e.saS9(v.w)
e.sYL(0,null)}}
B.arX.prototype={
gai(){return x.S.a(A.bW.prototype.gai.call(this))},
i8(d,e){var w,v,u=this,t={}
u.p2=!0
u.r8(d,e)
t.a=-1
w=u.e
w.toString
w=x.de.a(w).c
v=A.af(w).i("ad<1,lu>")
t=A.Q(new A.ad(w,new B.boP(t,u),v),v.i("aw.E"))
t.$flags=1
u.p1=t
u.aaH()
u.p2=!1},
m5(d,e){var w=x.S
w.a(A.bW.prototype.gai.call(this))
if(!(d.b instanceof B.qi))d.b=new B.qi(C.r)
if(!this.p2)w.a(A.bW.prototype.gai.call(this)).a_A(e.a,e.b,d)},
mc(d,e,f){},
nf(d,e){x.S.a(A.bW.prototype.gai.call(this)).a_A(e.a,e.b,null)},
dm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.p2=!0
w=x.am
v=A.z(x.f9,w)
for(u=f.p1,t=u.length,s=0;s<u.length;u.length===t||(0,A.G)(u),++s){r=u[s]
q=r.a
if(q!=null)v.m(0,q,r.b)}u=f.p1
t=C.b.gX(u)
p=new A.he(t,new B.boQ(),A.af(u).i("he<1>"))
o=A.b([],x.R)
n=A.b2(w)
for(w=e.c,u=f.p3,q=x.bs,m=0;m<w.length;++m){r=w[m]
l=r.a
k=l==null
if(!k&&v.aE(0,l)){k=v.h(0,l)
k.toString
n.E(0,k)
j=k}else j=k&&p.t()?t.gN(0).b:D.alD
k=r.c
i=k.length
h=A.b(new Array(i),q)
for(g=0;g<i;++g)h[g]=new B.Jk(g,m)
o.push(new B.lu(l,f.Z2(j,k,u,h)))}while(p.t())f.Oq(t.gN(0).b,C.yz,u)
for(w=v.$ti.i("cj<2>"),t=new A.cj(v,w).gX(0),w=new A.he(t,new B.boR(n),w.i("he<t.E>"));w.t();)f.Oq(t.gN(0),C.yz,u)
f.p1=o
f.aaH()
u.a8(0)
f.pD(0,e)
f.p2=!1},
aaH(){var w=x.S.a(A.bW.prototype.gai.call(this)),v=this.p1,u=v.length!==0?v[0].b.length:0,t=A.af(v).i("hp<1,J>")
v=A.Q(new A.hp(v,new B.boN(),t),t.i("t.E"))
w.akO(u,v)},
cZ(d){var w,v,u,t
for(w=this.p1,v=A.af(w),w=new A.mZ(C.b.gX(w),new B.boS(),C.iV,v.i("mZ<1,bM>")),u=this.p3,v=v.i("bM");w.t();){t=w.d
if(t==null)t=v.a(t)
if(!u.n(0,t))d.$1(t)}},
kH(d){this.p3.E(0,d)
this.lL(d)
return!0}}
B.S8.prototype={
u(d){var w=null
return new B.arW(this.c,A.bC(w,w,w,this.d,!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.zI,w,w,w,w,w,w,w,w,C.O,w),w)}}
B.arW.prototype={
uW(d){var w,v=d.b
v.toString
x.L.a(v)
w=this.f
if(v.b!=w){v.b=w
v=d.gbY(d)
if(v!=null)v.a7()}}}
B.Jk.prototype={
k(d,e){if(e==null)return!1
if(J.ai(e)!==A.K(this))return!1
return e instanceof B.Jk&&this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.auE.prototype={}
B.aJ9.prototype={}
B.ka.prototype={
L(){return"PostgresChangeFilterType."+this.b},
gb0l(){var w,v=this
A:{if(D.WY===v){w="in"
break A}if(D.avp===v){w="is"
break A}if(D.avi===v){w="isdistinct"
break A}if(D.WX===v||D.avf===v||D.avj===v||D.avk===v||D.avl===v||D.avm===v||D.avn===v||D.avo===v||D.avg===v||D.avh===v){w=v.b
break A}w=null}return w}}
B.aay.prototype={
j(d){var w=this,v=w.a
if(v===D.WY)return w.b+"=in.("+A.i(x.hf.a(w.c).eP(0,new B.aRi(),x.N).cj(0,","))+")"
return w.b+"="+v.gb0l()+"."+B.bGQ(w.c)}}
var z=a.updateTypes(["R<~>()","~()","F(F)","A(r6)","R<~>(a3<f,@>,f{askNote:A})","xx(y)","A(fF)","Ci(y)","f(f?)","Bq(y)","~(u)","Bt(y)","wg(dl<wg>)","HH(y,u)","BB(y)","BT(y)","BK(y)","In(y,C,bJ?)","zr(y)","BX(y)","C7(y)","BA(y)","Cj(y)","Cu(y)","+color,label(E,f)(f)","mn(u)","H()(J)","A(y)","R<v<a3<f,@>>>(ck<v<a3<f,@>>>,Al)","A(mn)","jX?(mn)","lu(mn)","A(lu)","t<J>(lu)","v<bM>(lu)","zt(f4<C?>)","+icon,label(a7,f)(f)","mJ(dl<mJ>)"])
B.bvn.prototype={
$1(d){return new B.wg(d.ao($.bL(),x.A))},
$S:z+12}
B.bsY.prototype={
$1(d){return this.ajj(d)},
ajj(d){var w=0,v=A.q(x.C),u
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=3
return A.k(d.ao($.um().gaeQ(),x.fY),$async$$1)
case 3:if(f==null){u=A.b2(x.N)
w=1
break}u=d.ao($.qN(),x.cA).qB()
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:968}
B.buJ.prototype={
$1(d){return d.ao($.CM(),x.K).qH()},
$S:969}
B.btS.prototype={
$2(d,e){return d.ao($.CM(),x.K).qy(e)},
$S:970}
B.buM.prototype={
$2(d,e){return d.ao($.CM(),x.K).MK(e.b,e.c,e.a,e.d)},
$S:z+28}
B.aLi.prototype={
$0(){return this.a.r.aD(0,$.CM(),x.K).k6(this.b,this.c)},
$S:2}
B.aLj.prototype={
$0(){var w=this
return w.a.r.aD(0,$.CM(),x.K).KO(w.d,w.b,w.c,w.e)},
$S:2}
B.aLk.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.k(u.b.r.aD(0,$.CM(),x.K).LB(u.d,u.c,u.e),$async$$0)
case 2:t.a=e
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.aLp.prototype={
$0(){return C.bE},
$S:21}
B.aLo.prototype={
$2(d,e){var w=null
return A.cZ(new A.ah(C.dg,A.j(A.i(d),w,w,w,A.D(C.aU,14,C.l),w,w,w),w),w,w)},
$S:34}
B.aLn.prototype={
$1(d){var w=this.a.at5(d)
if(w.length===0)return new B.akk(null)
return new B.anh(w,null)},
$S:971}
B.aLm.prototype={
$1(d){return d.e},
$S:z+6}
B.bhv.prototype={
$2(d,e){var w,v,u,t,s=e.b<500?2:3,r=A.b([],x.p)
for(w=this.a.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
r.push(new B.OX(t.c,t.a,t.b,new B.bhu(d,t),t.x,t.f,t.r,t.w,null))}return A.a60(1.05,r,s,12,12,C.jT,!0)},
$S:101}
B.bhu.prototype={
$0(){var w=x.z
return A.b5(this.a,!1).ep(A.eF(new B.bht(this.b),null,w),w)},
$S:0}
B.bht.prototype={
$1(d){return this.a.d},
$S:24}
B.buv.prototype={
$1(d){return J.d(J.Z(d,"kostenart"),this.a.a)},
$S:64}
B.buw.prototype={
$2(d,e){return d+B.JF(J.Z(e,"betrag_brutto"))},
$S:60}
B.b3v.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b3w.prototype={
$0(){var w=this.a
w.z=!0
w.Q=null},
$S:0}
B.b3x.prototype={
$0(){return this.a.z=!1},
$S:0}
B.b3r.prototype={
$0(){var w,v=this.a,u=v.x
u.toString
w=v.y
return B.bB2(v.gaMQ(),u,"B\xf6rdesnack24 GbR",w,"102/178/01635","DE 458804058")},
$S:0}
B.b3u.prototype={
$1(d){var w=null,v=this.a,u=A.j("Die Anlage PKW-Kosten "+v.gpR()+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach beidseitiger Freigabe wird sie mit den hinterlegten Unterschriften abgeschlossen. Fortfahren?",w,w,w,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.b3s(v),w,w),A.dk(E.mn,new B.b3t(v),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,u,E.mo)},
$S:45}
B.b3s.prototype={
$0(){var w=this.a.c
w.toString
A.b5(w,!1).cC(!1)
return null},
$S:0}
B.b3t.prototype={
$0(){var w=this.a.c
w.toString
A.b5(w,!1).cC(!0)
return null},
$S:0}
B.bfG.prototype={
$1(d){return this.a.d.$1(this.b)},
$S:8}
B.bbP.prototype={
$0(){var w=this
return w.a.uA(w.b,w.c,w.d)},
$S:0}
B.bbQ.prototype={
$0(){return this.a.x9(this.b,this.c)},
$S:0}
B.bbR.prototype={
$0(){return this.a.xa(this.b,this.c)},
$S:0}
B.bbI.prototype={
$1(d){return new A.li(new B.bbH(this.a,this.b,this.c),null)},
$S:63}
B.bbH.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=A.b([],x.I)
for(w=D.lU.ghZ(D.lU),w=w.gX(w),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dU(u.a,A.j(u.b,t,t,t,t,t,t,t),C.aW,t,v))}w=x.p
s=A.ac(A.b([A.jY(D.Fh,r,!1,q,new B.bbD(s,e),t,x.N),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dN(),this.b,t,t,t,t,t,2,D.Ff,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,C.eA,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.D,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ad,t,C.X,t,t,t,t),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dN(),this.c,t,t,t,t,t,2,D.Fg,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.D,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ad,t,C.X,t,t,t,t)],w),C.k,t,C.f,C.H,16)
return A.is(A.b([A.d9(D.Zm,t,t,new B.bbE(d),t,t),A.d9(C.c_,t,t,new B.bbF(d),t,t),A.dk(C.dw,new B.bbG(d),t)],w),t,s,D.aHR)},
$S:72}
B.bbD.prototype={
$1(d){return this.b.$1(new B.bbC(this.a,d))},
$S:12}
B.bbC.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bbE.prototype={
$0(){A.b5(this.a,!1).cC("streichen")
return null},
$S:0}
B.bbF.prototype={
$0(){A.b5(this.a,!1).cC("abbrechen")
return null},
$S:0}
B.bbG.prototype={
$0(){A.b5(this.a,!1).cC("speichern")
return null},
$S:0}
B.bbB.prototype={
$1(d){var w=null,v=A.j("Kilometerst\xe4nde "+this.a.f,w,w,w,w,w,w,w),u=x.p,t=A.ac(A.b([A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),this.b,w,w,w,w,w,2,D.aex,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cZ,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w),A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),this.c,w,w,w,w,w,2,D.aeH,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cZ,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w)],u),C.k,w,C.f,C.H,16)
return A.is(A.b([A.d9(C.c_,w,w,new B.bbz(d),w,w),A.dk(C.dw,new B.bbA(d),w)],u),w,t,v)},
$S:45}
B.bbz.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.bbA.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bbO.prototype={
$1(d){var w=this
return new A.li(new B.bbN(w.a,w.b,w.c,w.d),null)},
$S:63}
B.bbN.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=A.j("Kosten "+A.i(J.Z(t.b.e,"kennzeichen")),s,s,s,s,s,s,s),q=t.a,p=q.a,o=A.b([],x.I)
for(w=D.lU.ghZ(D.lU),w=w.gX(w),v=x.r;w.t();){u=w.gN(w)
o.push(new A.dU(u.a,A.j(u.b,s,s,s,s,s,s,s),C.aW,s,v))}w=x.p
q=A.ac(A.b([A.jY(D.Fh,p,!1,o,new B.bbK(q,e),s,x.N),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dN(),t.c,s,s,s,s,s,2,D.Ff,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,C.eA,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.D,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ad,s,C.X,s,s,s,s),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dN(),t.d,s,s,s,s,s,2,D.Fg,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.D,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ad,s,C.X,s,s,s,s)],w),C.k,s,C.f,C.H,16)
return A.is(A.b([A.d9(C.c_,s,s,new B.bbL(d),s,s),A.dk(D.Zt,new B.bbM(d),s)],w),s,q,r)},
$S:72}
B.bbK.prototype={
$1(d){return this.b.$1(new B.bbJ(this.a,d))},
$S:12}
B.bbJ.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bbL.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.bbM.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bbx.prototype={
$0(){return this.a.x_(this.b,this.c)},
$S:0}
B.bby.prototype={
$1(d){var w=this
return w.a.ux(w.b,w.c,w.d)},
$S:67}
B.bbo.prototype={
$1(d){var w=this
return new A.li(new B.bbn(w.a,w.b,w.c,w.d),null)},
$S:63}
B.bbn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fR(D.F8,A.j($.dp().al(k),n,n,n,n,n,n,n),new B.bbi(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.c,n,n,n,n,n,2,D.Fl,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.d,n,n,n,n,n,2,D.Fi,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.eA,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.b8(l,l.gp(0),s.i("b8<an.E>")),r=x.r,s=s.i("an.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dU(A.i(p.h(q,"id")),A.j(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.ev(A.ac(A.b([k,w,v,A.jY(D.Fj,u,!1,t,new B.bbj(m,e),n,x.N)],l),C.a9,n,C.f,C.H,16),n,n,n,C.M)
return A.is(A.b([A.d9(D.Zm,n,n,new B.bbk(d),n,n),A.d9(C.c_,n,n,new B.bbl(d),n,n),A.dk(C.dw,new B.bbm(d),n)],l),n,m,D.aGA)},
$S:72}
B.bbi.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.k(A.pd(u.c,A.bB(r,1,1,0,0,0,0),null,s,A.bB(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbh(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbh.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbj.prototype={
$1(d){return this.b.$1(new B.bbg(this.a,d))},
$S:12}
B.bbg.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbk.prototype={
$0(){A.b5(this.a,!1).cC("streichen")
return null},
$S:0}
B.bbl.prototype={
$0(){A.b5(this.a,!1).cC("abbrechen")
return null},
$S:0}
B.bbm.prototype={
$0(){A.b5(this.a,!1).cC("speichern")
return null},
$S:0}
B.bbw.prototype={
$1(d){var w=this
return new A.li(new B.bbv(w.a,w.b,w.c,w.d),null)},
$S:63}
B.bbv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fR(D.F8,A.j($.dp().al(k),n,n,n,n,n,n,n),new B.bbr(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.c,n,n,n,n,n,2,D.Fl,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.d,n,n,n,n,n,2,D.Fi,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.eA,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.b8(l,l.gp(0),s.i("b8<an.E>")),r=x.r,s=s.i("an.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dU(A.i(p.h(q,"id")),A.j(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.ev(A.ac(A.b([k,w,v,A.jY(D.Fj,u,!1,t,new B.bbs(m,e),n,x.N)],l),C.a9,n,C.f,C.H,16),n,n,n,C.M)
return A.is(A.b([A.d9(C.c_,n,n,new B.bbt(d),n,n),A.dk(D.Zt,new B.bbu(d),n)],l),n,m,D.aGc)},
$S:72}
B.bbr.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.k(A.pd(u.c,A.bB(r,1,1,0,0,0,0),null,s,A.bB(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbq(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbq.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbs.prototype={
$1(d){return this.b.$1(new B.bbp(this.a,d))},
$S:12}
B.bbp.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbt.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.bbu.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bq0.prototype={
$1(d){var w=J.Z(d,"image_url")
return A.i(w==null?"":w).length===0},
$S:64}
B.bq1.prototype={
$1(d){return A.i(J.Z(d,"full_name"))},
$S:39}
B.bo3.prototype={
$1(d){var w=J.Z(x.f.a(d),"name")
return A.i(w==null?"":w)},
$S:38}
B.bo4.prototype={
$1(d){return d.length!==0},
$S:16}
B.awn.prototype={
$0(){var w=x.z
return A.b5(this.a,!1).ep(A.eF(new B.awm(),null,w),w)},
$S:0}
B.awm.prototype={
$1(d){return D.a_D},
$S:z+5}
B.br3.prototype={
$1(d){return new F.mJ(d.ao($.bL(),x.A))},
$S:z+37}
B.br2.prototype={
$1(d){return d.ao($.bvT(),x.u).aWM(0)},
$S:55}
B.aC7.prototype={
$0(){return C.bE},
$S:21}
B.aC6.prototype={
$2(d,e){var w=null
return A.cZ(new A.ah(C.dg,A.j(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:34}
B.aC5.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMX
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ah6(v.gN(v),null))
v=A.id(A.dF(w,C.D,null,C.M,!1),C.m,new B.aC4(this.a))}return v},
$S:79}
B.aC4.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bvS()
if(s.e==null)A.U(A.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b3I.prototype={
$1(d){return d==null?null:A.eR(J.al(d))},
$S:976}
B.b3H.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(!j.b){w=j.c.O(x.q).f
v=j.d
if(v==="rejected")v="Diese Freigabe wurde abgelehnt."
else v=v==="cancelled"?"Diese Freigabe wurde abgebrochen.":"Signiertes PDF wird noch erzeugt \u2026"
w.b2(A.c6(i,i,i,i,i,C.n,i,A.j(v,i,i,i,i,i,i,i),i,C.J,i,i,i,i,i,i,i,i,i,i))
return}if(j.e==="inventory_fifo"){w=j.a.e
v=J.V(w)
u=v.h(w,"snapshot")
if(x.f.b(u)){t=J.V(u)
s=x.g
r=s.a(t.h(u,"movements"))
if(r==null)r=C.bm
q=x.P
p=J.cE(r,q)
t=s.a(t.h(u,"lots"))
o=J.cE(t==null?C.bm:t,q)
t=s.a(v.h(w,"partner_signatures"))
n=J.cE(t==null?C.bm:t,q)
t=s.a(v.h(w,"decisions"))
m=J.cE(t==null?C.bm:t,q)
t=v.h(w,"period_from")
t=t==null?i:J.al(t)
l=A.eR(t==null?"":t)
if(l==null)l=new A.aZ(Date.now(),0,!1)
w=v.h(w,"period_to")
w=w==null?i:J.al(w)
k=A.eR(w==null?"":w)
B.bux(m,l,o,p,n,k==null?new A.aZ(Date.now(),0,!1):k)
return}}w=j.f
if(w!=null&&w.length!==0)A.mE(A.cm(w,0,i),C.en,"_blank")
else j.a.Ca(j.c,j.r,j.w)},
$S:0}
B.b3F.prototype={
$0(){return this.a.uo(this.b,this.c,"approved")},
$S:0}
B.b3G.prototype={
$0(){return this.a.uo(this.b,this.c,"rejected")},
$S:0}
B.b3E.prototype={
$0(){return A.uG(new A.pu(this.a))},
$S:0}
B.b3C.prototype={
$1(d){var w=null,v=this.a,u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),v,w,w,w,w,w,2,D.aez,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w),t=this.b
return A.is(A.b([A.d9(C.c_,w,w,new B.b3A(t),w,w),A.dk(C.mp,new B.b3B(v,t),w)],x.p),w,u,D.aGs)},
$S:45}
B.b3A.prototype={
$0(){A.b5(this.a,!1).cC(null)
return null},
$S:0}
B.b3B.prototype={
$0(){var w=C.c.aK(this.a.a.a)
if(w.length<3)return
A.b5(this.b,!1).cC(w)},
$S:0}
B.b3D.prototype={
$1(d){return D.aPg},
$S:z+7}
B.bng.prototype={
$0(){var w=this.a,v=this.b
w.w=!v.gZ(v)?v.ga2(v):null
w.x=!1},
$S:0}
B.bnh.prototype={
$0(){var w=this.a
w.z=A.i(this.b)
w.x=!1},
$S:0}
B.bnl.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bnm.prototype={
$0(){var w=this.b,v=this.c
w=w==null?v:v+"\n"+w
return this.a.z=w},
$S:0}
B.bnn.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bno.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bnp.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bnq.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bnr.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bns.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bnt.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bnx.prototype={
$3(d,e,f){return D.aHC},
$S:977}
B.bny.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bnz.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.b49.prototype={
$0(){return this.a.x=!0},
$S:0}
B.b4a.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b4b.prototype={
$0(){return this.a.x=!1},
$S:0}
B.b5K.prototype={
$0(){var w=this.a
return w.w=w.wL()},
$S:0}
B.b5J.prototype={
$1(d){return C.c.cX(C.e.j(d),2,"0")},
$S:66}
B.b5P.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b5L(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b5L.prototype={
$0(){var w=this.a
return w.w=w.wL()},
$S:0}
B.b5O.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.c
if(p!=null)return A.dF(A.b([A.by(C.ak,A.j("K\xfcndigungen konnten nicht geladen werden: "+A.i(p),q,q,q,q,q,q,q),C.eJ,q,C.D,q,3)],x.p),C.aj,q,C.M,!1)
p=e.b
if(p==null)return C.bE
w=J.cy(p)
v=w.ig(p,new B.b5M()).gp(0)
u=A.j("Eingegangene K\xfcndigungen",q,q,q,A.c3(C.j,22,C.p),q,q,q)
t=w.gZ(p)?"Bisher sind keine K\xfcndigungen eingegangen.":""+v+" offen \xb7 "+w.gp(p)+" gesamt. Der Zugang wurde jeweils automatisch per E-Mail best\xe4tigt (\xa7 312k Abs. 2 BGB)."
s=x.p
t=A.b([D.a8B,C.bM,u,C.P,A.j(t,q,q,q,A.D(C.q,13,C.l),q,q,q),C.K],s)
for(p=w.gX(p),w=this.a,u=w.gaxP();p.t();){r=p.gN(p)
C.b.K(t,A.b([new B.ai2(r,u,new B.b5N(w,r),q),C.v],s))}return A.dF(t,C.aj,q,C.M,!1)},
$S:347}
B.b5M.prototype={
$1(d){return J.Z(d,"processed_at")==null},
$S:64}
B.b5N.prototype={
$0(){return this.a.Ip(A.aG(J.Z(this.b,"id")))},
$S:0}
B.ayS.prototype={
$1(d){return"Netto: "+A.i(J.Z(d,"net_amount"))+" \u20ac"},
$S:39}
B.ayR.prototype={
$1(d){var w=J.V(d),v=w.h(d,"collected_at")
v=v==null?"":C.c.a_(C.c.iI(J.al(v),"T"," "),0,16)
return v+" \xb7 Brutto "+A.i(w.h(d,"amount_gross"))+" \u20ac \xb7 Wechselgeld "+A.i(w.h(d,"change_amount"))+" \u20ac"},
$S:39}
B.ayT.prototype={
$2(d,e){return A.kA(null,new B.ayQ(),d,!0,null,null,x.P)},
$S:89}
B.ayQ.prototype={
$1(d){return D.aMb},
$S:z+9}
B.b5T.prototype={
$1(d){var w=this.a
return w.J(new B.b5S(w,d))},
$S:12}
B.b5S.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b5U.prototype={
$1(d){var w=d==null?"":d
return A.fT(A.ax(w,",","."))==null?"Betrag eingeben":null},
$S:15}
B.azv.prototype={
$1(d){var w="cleaning_type",v=J.V(d),u=D.apI.h(0,v.h(d,w))
return u==null?A.i(v.h(d,w)):u},
$S:39}
B.azu.prototype={
$1(d){var w,v=J.V(d),u=v.h(d,"cleaned_at")
u=u==null?"":C.c.a_(C.c.iI(J.al(u),"T"," "),0,16)
w=v.h(d,"agent")!=null?" \xb7 "+A.i(v.h(d,"agent")):""
v=v.h(d,"notes")!=null?"\n"+A.i(v.h(d,"notes")):""
return u+w+v},
$S:39}
B.azw.prototype={
$2(d,e){return A.kA(null,new B.azt(),d,!0,null,null,x.P)},
$S:89}
B.azt.prototype={
$1(d){return D.aMl},
$S:z+11}
B.b6G.prototype={
$1(d){var w=this.a
return w.J(new B.b6F(w,d))},
$S:12}
B.b6F.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b6H.prototype={
$1(d){var w=this.a
return w.J(new B.b6E(w,d))},
$S:12}
B.b6E.prototype={
$0(){var w=this.b
if(w==null)w="exterior"
return this.a.Q=w},
$S:0}
B.b6I.prototype={
$1(d){return this.a.as=d},
$S:31}
B.b6U.prototype={
$1(d){var w=null,v=A.j(this.a==="resolved"?"Reklamation erledigen":"Reklamation ablehnen",w,w,w,w,w,w,w),u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),this.b,w,w,w,w,w,2,D.aec,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,300,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.b6S(d),w,w),A.dk(C.dw,new B.b6T(d),w)],x.p),w,u,v)},
$S:45}
B.b6S.prototype={
$0(){return A.b5(this.a,!1).cC(!1)},
$S:0}
B.b6T.prototype={
$0(){return A.b5(this.a,!1).cC(!0)},
$S:0}
B.b6V.prototype={
$0(){var w=this.a
return w.w=w.wM()},
$S:0}
B.b7_.prototype={
$2(d,e){var w,v,u,t=null
if(e.a!==C.j3)return C.bE
w=e.c
if(w!=null)return A.cZ(new A.ah(C.D,A.j("Fehler: "+A.i(w),t,t,t,A.D(C.j,13,C.l),t,t,t),t),t,t)
v=e.b
if(v==null)v=C.cp
w=J.V(v)
if(w.gZ(v))return A.cZ(A.j("Keine Reklamationen \u2014 sehr gut!",t,t,t,A.D(C.q,13,C.l),t,t,t),t,t)
u=this.a
return A.id(A.zo(t,new B.b6X(u,v),w.gp(v),C.aj,new B.b6Y()),C.m,new B.b6Z(u))},
$S:347}
B.b6Z.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b6W(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b6W.prototype={
$0(){var w=this.a
return w.w=w.wM()},
$S:0}
B.b6Y.prototype={
$2(d,e){return C.v},
$S:127}
B.b6X.prototype={
$2(d,e){return new B.HH(J.Z(this.b,e),B.c4C(),B.c4D(),this.a.gaL2(),null)},
$S:z+13}
B.b6P.prototype={
$0(){var w=this.a
return w.f.$2(w.c,"in_progress")},
$S:0}
B.b6Q.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"resolved",!0)},
$S:0}
B.b6R.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"rejected",!0)},
$S:0}
B.aC2.prototype={
$1(d){var w=J.V(d),v=w.h(d,"product_label")
return A.i(v==null?"Ware":v)+" \xb7 "+A.i(w.h(d,"quantity"))+" Stk."},
$S:39}
B.aC1.prototype={
$1(d){var w,v="mhd_date",u=J.V(d),t=u.h(d,"disposed_at")
t=t==null?"":C.c.a_(C.c.iI(J.al(t),"T"," "),0,16)
w=D.apJ.h(0,u.h(d,"reason"))
w=A.i(w==null?u.h(d,"reason"):w)
u=u.h(d,v)!=null?" \xb7 MHD "+A.i(u.h(d,v)):""
return t+" \xb7 "+w+u},
$S:39}
B.aC3.prototype={
$2(d,e){return A.kA(null,new B.aC0(),d,!0,null,null,x.P)},
$S:89}
B.aC0.prototype={
$1(d){return D.aMI},
$S:z+14}
B.b9J.prototype={
$1(d){var w=this.a
return w.J(new B.b9I(w,d))},
$S:12}
B.b9I.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b9K.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.Q,o=A.b([D.a6M],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aG(t.h(u,"id"))
u=A.aj(t.h(u,"name"))
o.push(new A.dU(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.jY(D.aeD,p,!0,o,new B.b9H(q,d),r,x.N)},
$S:159}
B.b9H.prototype={
$1(d){var w=this.a
return w.J(new B.b9E(w,d,this.b))},
$S:12}
B.b9E.prototype={
$0(){var w=this.a,v=w.Q=this.b
if(v!=null){v=A.aj(J.Z(J.bQo(this.c,new B.b9D(v)),"name"))
if(v==null)v=""
w.y.ses(0,v)}},
$S:0}
B.b9D.prototype={
$1(d){return J.d(J.Z(d,"id"),this.a)},
$S:64}
B.b9L.prototype={
$0(){return C.ar},
$S:107}
B.b9M.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflichtfeld":null},
$S:15}
B.b9N.prototype={
$1(d){var w=A.iy(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.b9O.prototype={
$1(d){var w=this.a
return w.J(new B.b9G(w,d))},
$S:12}
B.b9G.prototype={
$0(){var w=this.b
if(w==null)w="mhd"
return this.a.as=w},
$S:0}
B.b9P.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=new A.aZ(Date.now(),0,!1)
w=2
return A.k(A.pd(u.b,A.bB(A.aU(s)-2,1,1,0,0,0,0),null,s,A.bB(A.aU(s)+2,1,1,0,0,0,0),C.er),$async$$0)
case 2:r=e
if(r!=null){t=u.a
t.J(new B.b9F(t,r))}return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.b9F.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.b9Q.prototype={
$1(d){return this.a.ax=d},
$S:31}
B.brr.prototype={
$1(d){return this.aja(d)},
aja(d){var w=0,v=A.q(x.D),u,t,s,r,q,p
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=$.bL()
s=x.A
q=J
p=x.j
w=3
return A.k(d.aD(0,t,s).h_("list_documents",x.z),$async$$1)
case 3:r=q.cE(p.a(f),x.P)
s=d.aD(0,t,s).ay
s===$&&A.a()
w=4
return A.k(A.kT(new A.ad(r,new B.brq(s.cW("documents")),r.$ti.i("ad<an.E,R<bp>>")),x.a),$async$$1)
case 4:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.brq.prototype={
$1(d){return this.aj9(d)},
aj9(d){var w=0,v=A.q(x.a),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$$1=A.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:p=J.V(d)
o=p.h(d,"latest_file_path")
n=o==null?null:J.al(o)
if(n==null||n.length===0){w=1
break}t=4
l=p
k=d
w=7
return A.k(r.a.nK(n,86400),$async$$1)
case 7:l.m(k,"signed_url",f)
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$$1,v)},
$S:981}
B.brE.prototype={
$1(d){return this.ajc(d)},
ajc(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
s=x.j
w=3
return A.k(d.aD(0,$.bL(),x.A).h_("list_document_folders",x.z),$async$$1)
case 3:u=t.cE(s.a(f),x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.bst.prototype={
$2(d,e){return this.ajh(d,e)},
ajh(d,e){var w=0,v=A.q(x.D),u,t,s,r
var $async$$2=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t=x.z
s=J
r=x.j
w=3
return A.k(d.aD(0,$.bL(),x.A).er("list_document_signature_tasks",A.a4(["p_document",e],x.N,t),t),$async$$2)
case 3:u=s.cE(r.a(g),x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$2,v)},
$S:982}
B.baA.prototype={
$0(){var w=0,v=A.q(x.a),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
r=s.a
q=r.gc8()
p=$.bL()
o=x.A
n=q.aD(0,p,o).ax
n===$&&A.a()
m=x.N
l=x.z
w=6
return A.k(n.hw("documents-init-templates",A.z(m,l)),$async$$0)
case 6:n=q.aD(0,p,o).ax
n===$&&A.a()
w=7
return A.k(n.hw("documents-install-branded-set",A.z(m,l)),$async$$0)
case 7:o=q.aD(0,p,o).ax
o===$&&A.a()
w=8
return A.k(o.hw("documents-install-haccp-set",A.z(m,l)),$async$$0)
case 8:if(r.c!=null){r=$.K0()
if(q.e==null)A.U(A.a_(y.b))
q.gcv().cs(r)}u=1
w=5
break
case 3:u=2
j=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$$0,v)},
$S:282}
B.baw.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:361}
B.bax.prototype={
$0(){return!1},
$S:50}
B.bay.prototype={
$0(){var w=this.a
return w.Bf(this.b,w.gc8())},
$S:0}
B.baz.prototype={
$0(){var w=this.a
return w.wY(this.b,w.gc8())},
$S:0}
B.bab.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:361}
B.bac.prototype={
$0(){return!1},
$S:50}
B.bae.prototype={
$0(){return C.bE},
$S:21}
B.bad.prototype={
$2(d,e){var w=null
return new A.ah(C.D,A.j(A.i(d),w,w,w,w,w,w,w),w)},
$S:87}
B.baa.prototype={
$1(d){var w=this
return A.dz(w.b,new B.ba7(w.a,d,w.c,w.d,w.e),new B.ba8(),new B.ba9(),!1,!0,!1,x.D,x.l)},
$S:79}
B.ba9.prototype={
$0(){return C.ar},
$S:107}
B.ba8.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:133}
B.ba7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=J.qQ(m.b,new B.b9X(k)),i=A.Q(j,j.$ti.i("t.E")),h=A.z(x.N,x.D)
for(j=i.length,w=0;w<i.length;i.length===j||(0,A.G)(i),++w){v=i[w]
u=A.aj(J.Z(v,"category"))
if(u==null)u="sonstiges"
J.e2(h.cl(0,u,new B.b9Y()),v)}if(k.x==null)t=d
else{j=J.qQ(d,new B.b9Z(k))
t=A.Q(j,j.$ti.i("t.E"))}j=m.c
s=A.b([new B.aqA(new B.ba_(k),l),C.v,new B.al5(d,k.x,new B.ba0(k),l),C.K],x.p)
for(r=J.bh(t),q=m.d,p=m.e;r.t();){o=r.gN(r)
n=h.h(0,J.Z(o,"slug"))
if(n==null)n=C.cp
s.push(new B.al6(o,n,q,new B.ba1(k,p,j),new B.ba2(k,p,j),new B.ba3(k,p,j),new B.ba4(k,p,j),new B.ba5(k,p,j),l))}s.push(D.azA)
return A.id(A.dF(s,C.aj,l,C.M,!1),C.m,new B.ba6(j))},
$S:343}
B.b9X.prototype={
$1(d){var w,v=J.V(d),u=A.aj(v.h(d,"title"))
if(u==null)u=""
v=A.aj(v.h(d,"category"))
if(v==null)v=""
w=this.a.w.toLowerCase()
return w.length===0||C.c.n(u.toLowerCase(),w)||C.c.n(v.toLowerCase(),w)},
$S:64}
B.b9Y.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.b9Z.prototype={
$1(d){return J.d(J.Z(d,"slug"),this.a.x)},
$S:64}
B.ba6.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=$.K0()
if(t.e==null)A.U(A.a_(y.b))
t.gcv().cs(s)
s=$.bvU()
if(t.e==null)A.U(A.a_(y.b))
t.gcv().cs(s)
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.ba_.prototype={
$1(d){var w=this.a
return w.J(new B.b9W(w,d))},
$S:31}
B.b9W.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ba0.prototype={
$1(d){var w=this.a
return w.J(new B.b9V(w,d))},
$S:12}
B.b9V.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ba1.prototype={
$1(d){return this.a.wS(0,this.b,this.c,d)},
$S:86}
B.ba2.prototype={
$1(d){return this.a.wI(this.b,this.c,A.aG(J.Z(d,"id")))},
$S:86}
B.ba3.prototype={
$1(d){return this.a.Cy(this.b,this.c,d)},
$S:86}
B.ba4.prototype={
$1(d){return this.a.Ct(this.b,this.c,d)},
$S:86}
B.ba5.prototype={
$1(d){return this.a.x8(this.b,this.c,d)},
$S:86}
B.bav.prototype={
$1(d){var w=null,v=this.a,u=J.V(v)
v=A.j("\u201e"+A.i(u.h(v,"title"))+'" (v'+A.i(u.h(v,"current_version"))+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.",w,w,w,w,w,w,w)
u=this.b
return A.is(A.b([A.d9(C.c_,w,w,new B.bat(u),w,w),A.dk(E.mn,new B.bau(u),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,v,E.mo)},
$S:45}
B.bat.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.bau.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bas.prototype={
$1(d){return new A.li(new B.bar(this.a,this.b),null)},
$S:63}
B.bar.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=x.p,n=A.b([],o)
for(w=this.a.a,v=w.$ti,w=new A.b8(w,w.gp(0),v.i("b8<an.E>")),u=this.b,v=v.i("an.E");w.t();){t=w.d
if(t==null)t=v.a(t)
s=J.V(t)
r=u.n(0,s.h(t,"id"))
q=s.h(t,"full_name")
q=q==null?p:J.al(q)
q=A.j(q==null?"?":q,p,p,p,p,p,p,p)
s=s.h(t,"email")
s=s==null?p:J.al(s)
n.push(A.bE2(p,p,p,p,p,new B.bao(e,t,u),A.j(s==null?"":s,p,p,p,p,p,p,p),q,r))}n=A.ce(A.dF(n,p,p,C.M,!0),p,400)
return A.is(A.b([A.d9(C.c_,p,p,new B.bap(d),p,p),A.dk(D.Al,new B.baq(d),A.dK(C.m,C.B,p,p,p,p,p))],o),p,n,D.aHK)},
$S:72}
B.bao.prototype={
$1(d){return this.a.$1(new B.ban(this.b,d,this.c))},
$S:67}
B.ban.prototype={
$0(){var w=A.aG(J.Z(this.a,"id")),v=this.c
if(this.b===!0)v.E(0,w)
else v.H(0,w)},
$S:0}
B.bap.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.baq.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bal.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bam.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bak.prototype={
$1(d){return new A.li(new B.baj(this.a,this.b,this.c),null)},
$S:63}
B.baj.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=A.dH(r,C.aw,!1,r,!0,C.n,r,A.dN(),this.b,r,r,r,r,r,2,D.aeg,C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ad,r,C.X,r,r,r,r),p=this.a,o=p.a,n=A.b([],x.I)
for(w=J.bh(this.c),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aG(t.h(u,"slug"))
u=t.h(u,"label")
u=u==null?r:J.al(u)
n.push(new A.dU(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}w=x.p
p=A.ce(A.ac(A.b([q,C.v,A.jY(D.aeK,o,!1,n,new B.bag(p,e),r,x.N)],w),C.k,r,C.f,C.H,0),r,400)
return A.is(A.b([A.d9(C.c_,r,r,new B.bah(d),r,r),A.dk(D.Zo,new B.bai(d),r)],w),r,p,D.aHP)},
$S:72}
B.bag.prototype={
$1(d){return this.b.$1(new B.baf(this.a,d))},
$S:12}
B.baf.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bah.prototype={
$0(){A.b5(this.a,!1).cC(!1)
return null},
$S:0}
B.bai.prototype={
$0(){A.b5(this.a,!1).cC(!0)
return null},
$S:0}
B.bcU.prototype={
$0(){return this.a.e.$1(null)},
$S:0}
B.bcV.prototype={
$0(){return this.a.e.$1(A.aj(J.Z(this.b,"slug")))},
$S:0}
B.bcW.prototype={
$2(d,e){var w,v,u="is_template",t="updated_at",s=J.V(d),r=J.d(s.h(d,u),!0)?1:0,q=J.V(e),p=J.d(q.h(e,u),!0)?1:0
if(r!==p)return p-r
s=s.h(d,t)
w=s==null?null:J.al(s)
if(w==null)w=""
s=q.h(e,t)
v=s==null?null:J.al(s)
return C.c.cw(v==null?"":v,w)},
$S:986}
B.bcX.prototype={
$0(){return this.a.f.$1(this.b)},
$S:0}
B.bcY.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
B.bcZ.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.bd_.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0}
B.bd0.prototype={
$0(){return this.a.y.$1(this.b)},
$S:0}
B.b9U.prototype={
$0(){return D.aue},
$S:135}
B.b9T.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,A.D(C.ak,11,C.l),w,w,w)},
$S:133}
B.b9S.prototype={
$1(d){var w,v=null,u=J.V(d)
if(u.gZ(d))return A.j("Noch keine Mitarbeiter eingeladen.",v,v,v,A.D(C.q,11,C.l),v,v,v)
w=A.b([A.j("Mitarbeiter-Signaturen",v,v,v,A.D(C.q,11,C.p),v,v,v),C.b6],x.p)
for(u=u.gX(d);u.t();)w.push(new B.ar4(u.gN(u),v))
return A.ac(w,C.C,v,C.f,C.h,0)},
$S:79}
B.bnc.prototype={
$0(){var w=this
return w.a.Bg(w.b,w.c,w.d)},
$S:0}
B.bsi.prototype={
$1(d){return this.ajf(d)},
ajf(d){var w=0,v=A.q(x.D),u,t,s,r
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.aD(0,$.bL(),x.A).cW("profiles").hj(0,"id, email, full_name, role, status").X_("role",D.ane)
s=t.q2("status","neq.archived")
t=A.ma(t.oo(s),t.$ti.c)
r=J
w=3
return A.k(A.ma(t.oo(t.q2("deleted_at","is.null")),t.$ti.c).pf(0,"created_at"),$async$$1)
case 3:u=r.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.aDN.prototype={
$0(){return this.a.BQ(this.b,this.c)},
$S:0}
B.aDQ.prototype={
$0(){return C.fM},
$S:21}
B.aDP.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.aDO.prototype={
$1(d){return A.zo(null,new B.aDL(d),J.cg(d),null,new B.aDM())},
$S:988}
B.aDM.prototype={
$2(d,e){return D.kU},
$S:136}
B.aDL.prototype={
$2(d,e){var w=null,v=J.Z(this.a,e),u=J.V(v),t=A.aj(u.h(v,"full_name"))
t=A.j(t==null?A.aG(u.h(v,"email")):t,w,w,w,w,w,w,w)
return A.rG(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,A.j(A.i(u.h(v,"email"))+" \xb7 "+B.c7j(A.aj(u.h(v,"role"))),w,w,w,w,w,w,w),w,t,w,B.bE6(w,A.j(B.c7F(A.aj(u.h(v,"status"))),w,w,w,w,w,w,w),w),w)},
$S:137}
B.aDK.prototype={
$1(d){return D.aNO},
$S:z+15}
B.bfo.prototype={
$1(d){return d==null||!C.c.n(d,"@")?"G\xfcltige E-Mail":null},
$S:15}
B.bfp.prototype={
$1(d){var w=this.a
return w.J(new B.bfn(w,d,this.b))},
$S:67}
B.bfn.prototype={
$0(){var w=this.a.r,v=this.c.a
if(this.b===!0)w.E(0,v)
else w.H(0,v)},
$S:0}
B.aF8.prototype={
$1(d){var w="removed_spoiled",v=J.V(d),u=A.i(v.h(d,"quantity")),t=v.h(d,w)
v=!J.d(t==null?0:t,0)?" \xb7 Verderb: "+A.i(v.h(d,w)):""
return"Menge: "+u+v},
$S:39}
B.aF7.prototype={
$1(d){var w=J.V(d),v=w.h(d,"filled_at")
v=v==null?"":C.c.a_(C.c.iI(J.al(v),"T"," "),0,16)
return v+(J.d(w.h(d,"mhd_checked"),!0)?" \xb7 MHD gepr\xfcft":"")},
$S:39}
B.aF9.prototype={
$2(d,e){return A.kA(null,new B.aF6(),d,!0,null,null,x.P)},
$S:89}
B.aF6.prototype={
$1(d){return D.aNv},
$S:z+16}
B.bc8.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.bc9.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.bcf.prototype={
$1(d){var w=this.a
return w.J(new B.bce(w,d))},
$S:12}
B.bce.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bcg.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.at,o=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aG(t.h(u,"id"))
u=A.aj(t.h(u,"name"))
o.push(new A.dU(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.jY(D.Fk,p,!0,o,new B.bcc(q),new B.bcd(),x.N)},
$S:159}
B.bcc.prototype={
$1(d){var w=this.a
return w.J(new B.bca(w,d))},
$S:12}
B.bca.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bcd.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.bch.prototype={
$0(){return D.yf},
$S:75}
B.bci.prototype={
$1(d){var w=A.iy(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.bcj.prototype={
$1(d){var w
if(d==null||C.c.aK(d).length===0)return"Pflichtfeld"
w=A.fT(A.ax(d,",","."))
return w==null||w<=0?"EK > 0":null},
$S:15}
B.bck.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflichtfeld":null},
$S:15}
B.bcl.prototype={
$1(d){var w=this.a
return w.J(new B.bcb(w,d))},
$S:8}
B.bcb.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.buy.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.buz.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.buG.prototype={
$2(d,e){return J.bD8(d,0,new B.buH(e))},
$S:991}
B.buH.prototype={
$2(d,e){var w=A.b3(J.Z(e,this.a))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.buE.prototype={
$2(d,e){return J.bD8(d,0,new B.buF(e))},
$S:992}
B.buF.prototype={
$2(d,e){var w=A.b3(J.Z(e,this.a))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:158}
B.buC.prototype={
$1(d){var w,v,u
if(d==null||J.al(d).length===0)return"\u2014"
try{v=A.o9(J.al(d))
v=$.dp().al(v)
return v}catch(u){w=J.al(d)
v=J.cg(w)>10?10:J.cg(w)
return J.bDl(w,0,v)}},
$S:38}
B.buD.prototype={
$1(d){var w
A:{if("refill"===d){w="Zugang"
break A}if("sale"===d){w="Verkauf"
break A}if("disposal"===d){w="Vernichtung"
break A}if("correction"===d){w="Korrektur"
break A}w=d
break A}return w},
$S:33}
B.buA.prototype={
$1(d){var w=J.Z(d,"product_id")
return w==null?null:J.al(w)},
$S:225}
B.buB.prototype={
$1(d){return J.d(J.Z(d,"decision"),"approved")},
$S:64}
B.bfe.prototype={
$0(){var w=this.a
w.as=!0
w.at=null},
$S:0}
B.bff.prototype={
$0(){return this.a.as=!1},
$S:0}
B.bfg.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bfh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bfk.prototype={
$1(d){var w=null,v=this.a,u=v.w,t=$.dp()
t=A.j("Die Inventur f\xfcr "+t.al(u)+" \u2013 "+t.al(v.x)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.  Nach 2-of-2-Freigabe wird der Report mit den DocuSign-Signaturen finalisiert. Fortfahren?",w,w,w,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.bfi(v),w,w),A.dk(E.mn,new B.bfj(v),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,t,E.mo)},
$S:45}
B.bfi.prototype={
$0(){var w=this.a.c
w.toString
A.b5(w,!1).cC(!1)
return null},
$S:0}
B.bfj.prototype={
$0(){var w=this.a.c
w.toString
A.b5(w,!1).cC(!0)
return null},
$S:0}
B.bfd.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.bfl.prototype={
$0(){var w,v,u=this.a,t=u.y
t.toString
w=u.z
if(w==null)w=C.cp
v=u.Q
if(v==null)v=C.cp
return B.bux(null,u.w,w,t,v,u.x)},
$S:0}
B.bfm.prototype={
$1(d){var w=J.Z(d,"product_id")
w=w==null?null:J.al(w)
return w===this.a.a},
$S:64}
B.bjx.prototype={
$2(d,e){var w=A.b3(J.Z(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:158}
B.bjy.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.bjz.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.bjA.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.bdU.prototype={
$2(d,e){var w=A.b3(J.Z(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:158}
B.bdV.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.bdW.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.bdX.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:60}
B.bdY.prototype={
$1(d){var w=J.Z(d,"product_id")
return w==null?null:J.al(w)},
$S:225}
B.bnA.prototype={
$3(d,e,f){return D.a_6},
$S:z+17}
B.aJW.prototype={
$0(){return C.fM},
$S:21}
B.aJV.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.aJU.prototype={
$1(d){return A.zo(null,new B.aJS(d),J.cg(d),null,new B.aJT())},
$S:995}
B.aJT.prototype={
$2(d,e){return D.kU},
$S:136}
B.aJS.prototype={
$2(d,e){var w=null,v=J.Z(this.a,e),u=A.cp(v.e?C.xU:D.a9W,w,w,w),t=A.j(v.b+" \xb7 "+v.c,w,w,w,w,w,w,w),s=v.f
return A.rG(!1,w,w,w,!0,w,w,w,!0,w,u,w,w,w,w,new B.aJR(d,v),!1,w,w,w,w,A.j(s==null?"":s,w,w,w,w,w,w,w),w,t,w,D.adm,w)},
$S:137}
B.aJR.prototype={
$0(){var w=x.z
return A.b5(this.a,!1).ep(A.eF(new B.aJQ(this.b),null,w),w)},
$S:0}
B.aJQ.prototype={
$1(d){var w=this.a
return new B.zr(w.a,w.b+" \xb7 "+w.c,null)},
$S:z+18}
B.bgB.prototype={
$1(d){var w,v=this.a
if(v.c!=null){w=v.gc8()
v=$.bwb().$1(v.a.d)
if(w.e==null)A.U(A.a_(y.b))
w.gcv().cs(v)}},
$S:996}
B.bgA.prototype={
$0(){return C.fM},
$S:21}
B.bgz.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.bgy.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a31
else{w=this.a
w=A.id(A.zo(null,new B.bgv(w,d),v.gp(d),null,new B.bgw()),null,new B.bgx(w))
v=w}return v},
$S:997}
B.bgx.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc8()
s=$.bwb().$1(s.a.d)
if(r.e==null)A.U(A.a_(y.b))
r.gcv().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bgw.prototype={
$2(d,e){return D.kU},
$S:136}
B.bgv.prototype={
$2(d,e){var w=null,v=J.Z(this.b,e),u=A.j(v.c,w,w,w,w,w,w,w),t=A.j("Bestand: "+v.d+" (Schwelle "+v.e+")",w,w,w,w,w,w,w),s=this.a,r=v.r,q=A.j(s.aEO(r),w,w,w,w,w,w,w)
return A.rG(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,new B.bgu(s,d,v),!1,w,w,w,w,t,w,u,w,B.bE6(s.a6z(0,d,r).eI(0.15),q,new A.bm(s.a6z(0,d,r),1,C.U,-1)),w)},
$S:137}
B.bgu.prototype={
$0(){return this.a.B8(this.b,this.c)},
$S:0}
B.bgt.prototype={
$1(d){var w=null,v=A.j("Korrektur: "+this.a.c,w,w,w,w,w,w,w),u=this.b,t=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),u,w,w,w,w,w,2,D.aeN,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,D.aB8,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w),s=this.c
return A.is(A.b([A.d9(C.c_,w,w,new B.bgr(s),w,w),A.dk(D.aHx,new B.bgs(s,u),w)],x.p),w,t,v)},
$S:45}
B.bgr.prototype={
$0(){A.b5(this.a,!1).cC(null)
return null},
$S:0}
B.bgs.prototype={
$0(){var w=A.iy(this.b.a.a,null)
A.b5(this.a,!1).cC(w)
return null},
$S:0}
B.aLf.prototype={
$1(d){return A.i(J.Z(d,"issue"))},
$S:39}
B.aLe.prototype={
$1(d){var w,v="performed_by",u=J.V(d),t=u.h(d,"reported_at")
t=t==null?"":C.c.a_(C.c.iI(J.al(t),"T"," "),0,16)
w=J.d(u.h(d,"resolved"),!0)?" \xb7 erledigt":" \xb7 offen"
u=u.h(d,v)!=null?" \xb7 "+A.i(u.h(d,v)):""
return t+w+u},
$S:39}
B.aLg.prototype={
$2(d,e){return A.kA(null,new B.aLd(),d,!0,null,null,x.P)},
$S:89}
B.aLd.prototype={
$1(d){return D.aO5},
$S:z+19}
B.bgE.prototype={
$1(d){var w=this.a
return w.J(new B.bgD(w,d))},
$S:12}
B.bgD.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bgF.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflichtfeld":null},
$S:15}
B.bgG.prototype={
$1(d){var w=this.a
return w.J(new B.bgC(w,d))},
$S:8}
B.bgC.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.boY.prototype={
$1(d){var w=this.a
return w.J(new B.boX(w,d))},
$S:998}
B.boX.prototype={
$0(){var w=this.b
return this.a.w=w.ga2(w)},
$S:0}
B.brL.prototype={
$1(d){return this.ajd(d)},
ajd(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ao($.bL(),x.A).cW("machine_health").hj(0,"machine_id, last_seen_at, last_heartbeat_at, temperature_c, door_state, cash_balance_net, active_alarms, updated_at, machine:machines(id, code, name, is_cooled)").qE(0,"updated_at",!1),$async$$1)
case 3:u=t.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.bgk.prototype={
$0(){return C.bE},
$S:21}
B.bgj.prototype={
$2(d,e){var w=null
return A.cZ(new A.ah(C.dg,A.j(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:34}
B.bgi.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMW
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.alr(v.gN(v),null))
v=A.id(A.dF(w,C.D,null,C.M,!1),C.m,new B.bgh(this.a))}return v},
$S:79}
B.bgh.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCc()
if(s.e==null)A.U(A.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bsj.prototype={
$1(d){return this.ajg(d)},
ajg(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ao($.bL(),x.A).cW("telemetry_providers").hj(0,"id, name, adapter, is_active, time_skew_max_s, notes, created_at, updated_at").pf(0,"name"),$async$$1)
case 3:u=t.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.bjR.prototype={
$0(){return this.a.IF(this.b,this.c)},
$S:0}
B.bjU.prototype={
$0(){return C.bE},
$S:21}
B.bjT.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.bjS.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMV
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.aoT(v.gN(v),null))
v=A.dF(w,C.D,null,C.M,!1)}return v},
$S:346}
B.bjQ.prototype={
$1(d){return D.aOU},
$S:z+20}
B.bjN.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflicht":null},
$S:15}
B.bjO.prototype={
$1(d){var w=this.a
return w.J(new B.bjM(w,d))},
$S:12}
B.bjM.prototype={
$0(){var w=this.b
if(w==null)w="generic"
return this.a.Q=w},
$S:0}
B.bjP.prototype={
$1(d){return d==null||C.c.aK(d).length<16?"Min. 16 Zeichen":null},
$S:15}
B.brp.prototype={
$1(d){return this.aj8(d)},
aj8(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ao($.bL(),x.A).cW("machine_devices").hj(0,"id, external_device_id, firmware_version, last_seen_at, is_active, installed_at, machine:machines(id, code, name), provider:telemetry_providers(id, name, adapter)").qE(0,"installed_at",!1),$async$$1)
case 3:u=t.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.b9p.prototype={
$0(){return this.a.IH(this.b,this.c)},
$S:0}
B.b9s.prototype={
$0(){return C.bE},
$S:21}
B.b9r.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.b9q.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMU
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ajD(v.gN(v),null))
v=A.dF(w,C.D,null,C.M,!1)}return v},
$S:346}
B.b9o.prototype={
$1(d){return D.aMC},
$S:z+21}
B.b9j.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.b9i.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.z
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dU(A.aG(q.h(r,"id")),A.j(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.jY(D.aee,v,!1,u,new B.b9g(w),new B.b9h(),x.N)},
$S:185}
B.b9g.prototype={
$1(d){var w=this.a
return w.J(new B.b9d(w,d))},
$S:12}
B.b9d.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b9h.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9m.prototype={
$0(){return D.yf},
$S:75}
B.b9l.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:133}
B.b9k.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.Q,p=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
p.push(new A.dU(A.aG(t.h(u,"id")),A.j(A.i(t.h(u,"name"))+" ("+A.i(t.h(u,"adapter"))+")",s,s,s,s,s,s,s),C.aW,s,v))}return A.jY(D.adV,q,!1,p,new B.b9e(r),new B.b9f(),x.N)},
$S:159}
B.b9e.prototype={
$1(d){var w=this.a
return w.J(new B.b9c(w,d))},
$S:12}
B.b9c.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.b9f.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9n.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflicht":null},
$S:15}
B.bnP.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.bnO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.w
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dU(A.aG(q.h(r,"id")),A.j(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.jY(D.aer,v,!1,u,new B.bnN(w),p,x.N)},
$S:185}
B.bnN.prototype={
$1(d){var w=this.a
return w.J(new B.bnM(w,d))},
$S:12}
B.bnM.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bnL.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.bnK.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.b
if(p==null)p=A.b([],x.t)
w=this.a
v=this.b
u=A.h7(D.nZ,D.aIa,new B.bnI(w,d,v),A.dK(C.m,C.B,q,q,q,q,q))
t=J.V(p)
if(t.gZ(p))w=D.aMT
else{s=A.b([],x.p)
for(t=t.gX(p);t.t();){r=t.gN(t)
s.push(new B.ark(r,new B.bnJ(w,d,v,r),q))}w=A.dF(s,C.D,q,C.M,!1)}return A.ac(A.b([new A.ah(D.a7S,u,q),A.aA(w,1)],x.p),C.k,q,C.f,C.h,0)},
$S:1002}
B.bnI.prototype={
$0(){return this.a.Cd(this.b,this.c,null)},
$S:0}
B.bnJ.prototype={
$0(){var w=this
return w.a.Cd(w.b,w.c,w.d)},
$S:0}
B.bnH.prototype={
$1(d){return new B.Cj(this.a.e,this.b,null)},
$S:z+22}
B.bnE.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflicht":null},
$S:15}
B.bnG.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.bnF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.Q
u=A.b([D.a6K],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dU(A.aG(q.h(r,"id")),A.j(A.i(q.h(r,"name"))+" ("+A.i(q.h(r,"sku"))+")",p,p,p,p,p,p,p),C.aW,p,s))}return A.jY(D.Fk,v,!1,u,new B.bnD(w),p,x.N)},
$S:185}
B.bnD.prototype={
$1(d){var w=this.a
return w.J(new B.bnC(w,d))},
$S:12}
B.bnC.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.brw.prototype={
$1(d){return this.ajb(d)},
ajb(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.ao($.bL(),x.A).cW("machine_telemetry_events").hj(0,"id, event_type, status, event_uid, occurred_at, received_at, processed_at, quantity, unit_price_net, dispense_confirmed, temperature_c, error_reason, slot_code, machine:machines(code, name), provider:telemetry_providers(name, adapter)").qE(0,"received_at",!1)
s=J
w=3
return A.k(A.aaz(t.Vs(t.XZ("limit","200")),t.$ti.c),$async$$1)
case 3:u=s.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:55}
B.bbc.prototype={
$0(){return C.bE},
$S:21}
B.bbb.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.bba.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMY
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ako(v.gN(v),null))
v=A.id(A.dF(w,C.D,null,C.M,!1),C.m,new B.bb9(this.a))}return v},
$S:79}
B.bb9.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCa()
if(s.e==null)A.U(A.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b0D.prototype={
$1(d){var w=J.V(d),v=A.i(w.h(d,"temperature_c"))
w=J.d(w.h(d,"within_limit"),!1)?"  \u26a0\ufe0f \xfcber Grenzwert":""
return v+" \xb0C"+w},
$S:39}
B.b0C.prototype={
$1(d){var w="corrective_action",v=J.V(d),u=v.h(d,"measured_at")
u=u==null?"":C.c.a_(C.c.iI(J.al(u),"T"," "),0,16)
return u+(v.h(d,w)!=null?"\n"+A.i(v.h(d,w)):"")},
$S:39}
B.b0E.prototype={
$2(d,e){return A.kA(null,new B.b0B(),d,!0,null,null,x.P)},
$S:89}
B.b0B.prototype={
$1(d){return D.aPq},
$S:z+23}
B.bp_.prototype={
$1(d){var w=this.a
return w.J(new B.boZ(w,d))},
$S:12}
B.boZ.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bp0.prototype={
$1(d){var w=d==null?"":d
return A.fT(A.ax(w,",","."))==null?"Bitte Temperatur eingeben":null},
$S:15}
B.aLb.prototype={
$0(){return D.yf},
$S:75}
B.aLa.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:133}
B.aL9.prototype={
$1(d){var w,v,u,t=null,s=this.a,r=A.eE(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,"Automat",!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),q=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dU(u.a,A.j(u.b+" \xb7 "+u.c,t,t,t,t,t,t,t),C.aW,t,v))}return A.jY(r,s.e,!0,q,s.f,new B.aL8(),x.N)},
$S:1003}
B.aL8.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.biE.prototype={
$0(){return this.a.w=!0},
$S:0}
B.biF.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.biG.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bjD.prototype={
$1(d){var w=null,v=this.a,u=v.a.d,t=v.gjY(),s=$.dp()
s=A.j("Das "+u+"-Protokoll ("+s.al(t.a)+" \u2013 "+s.al(v.gjY().b)+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird das signierte PDF automatisch abgelegt.",w,w,w,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.bjB(v),w,w),A.dk(E.mn,new B.bjC(v),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,s,E.mo)},
$S:45}
B.bjB.prototype={
$0(){var w=this.a.c
w.toString
A.b5(w,!1).cC(!1)
return null},
$S:0}
B.bjC.prototype={
$0(){var w=this.a.c
w.toString
A.b5(w,!1).cC(!0)
return null},
$S:0}
B.bjI.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q,p
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=new A.aZ(Date.now(),0,!1)
s=A.bB(A.aU(t)-5,1,1,0,0,0,0)
r=A.bB(A.aU(t)+1,1,1,0,0,0,0)
q=u.a
w=2
return A.k(F.avu(null,u.b,s,new A.lL(q.gjY().a,q.gjY().b,x.bz),r,C.er),$async$$0)
case 2:p=e
if(p!=null)q.J(new B.bjH(q,p))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bjH.prototype={
$0(){var w=this.b
return this.a.w=new F.lQ(w.a,w.b)},
$S:0}
B.bjL.prototype={
$0(){return C.fM},
$S:21}
B.bjK.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:34}
B.bjJ.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a34
else{w=this.a
w=A.id(A.zo(null,new B.bjE(w,d),v.gp(d),null,new B.bjF()),null,new B.bjG(w))
v=w}return v},
$S:79}
B.bjG.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc8()
s=$.avU().$1(s.gIV())
if(r.e==null)A.U(A.a_(y.b))
r.gcv().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bjF.prototype={
$2(d,e){return D.kU},
$S:136}
B.bjE.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=t.a
s.toString
w=this.b
v=J.V(w)
s=A.j(s.aWu(v.h(w,e)),u,u,u,u,u,u,u)
t=t.a
t.toString
return A.rG(!1,u,u,u,!0,u,u,u,!0,u,u,u,u,u,u,u,!1,u,u,u,u,A.j(t.aWt(v.h(w,e)),u,u,u,u,u,u,u),u,s,u,u,u)},
$S:137}
B.b6x.prototype={
$1(d){var w,v,u=this
if(d.n(0,C.T)&&d.n(0,C.I)){w=u.a
if(w.go===D.hC){w=w.gii().k3
w=A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}else{w=w.gii().k3
w=A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.I)){w=u.a
if(w.go===D.hC)w=null
else{w=w.gii().k3
w=A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.T)){w=u.a
if(w.go===D.hC){w=w.gii()
v=w.Q
w=v==null?w.y:v}else{w=w.gii()
v=w.Q
w=v==null?w.y:v}return w}w=u.a
if(w.go===D.hC)w=null
else{w=w.gii()
v=w.p3
w=v==null?w.k2:v}return w},
$S:23}
B.aB4.prototype={
$1(d){if(d.n(0,C.T))return this.a.ax.b.bA(0.08)
return null},
$S:23}
B.aB0.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aB1.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aB2.prototype={
$1(d){return!1},
$S:z+3}
B.aB3.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=d>0,n=o&&q.b&&q.a.CW[d-1].b==null,m=x.k,l=A.b2(m)
if(n)l.E(0,C.I)
if(o){w=q.a.CW[d-1].r
if(w==null)w=q.c
v=w==null?p:w.Y(l)}else v=p
w=q.d
u=w==null?p:w.Y(A.b2(m))
t=o?v:u
o=q.f.z
if(o==null)o=q.r.y2.z
if(o==null)o=1
s=A.bx8(q.e,p,o)
r=d===0?p:new A.fc(s,C.L,C.L,C.L)
o=d===0?$.bMy():p
m=t==null?q.w.a.$1(l):t
return new B.mn(o,new A.b4(m,p,r,p,p,p,C.G),A.bI(q.x.length,D.aOJ,!1,x.l))},
$S:z+25}
B.aB5.prototype={
$1(d){return this.a.aCr(d,this.b)},
$S:67}
B.aB6.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.aB7.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.b0m.prototype={
$0(){var w,v,u,t,s=this.a,r=s.gbY(s),q=A.fQ()
for(;;){if(!(r instanceof A.L&&!(r instanceof B.vY)))break
r.eZ(s,q)
w=r.gbY(r)
s=r
r=w}if(r instanceof B.vY){v=s.b
v.toString
v=x.L.a(v).d
v.toString
u=r.ak3(v)
r.eZ(s,q)
t=A.zE(q)
if(t!=null)return u.e7(new A.r(-t.a,-t.b))}return C.aP},
$S:116}
B.bnQ.prototype={
$0(){this.a.d=!0},
$S:0}
B.bnT.prototype={
$0(){var w,v=this,u=v.a
u.a.toString
w=v.b.b
if(w!=null){if(w instanceof A.u9)return w}else{w=v.c
w.grP()
if(w.grP() instanceof A.u9)return x.av.a(w.grP())}return A.Jw(new B.bnU(u,v.b,v.c))},
$S:1004}
B.bnU.prototype={
$1(d){var w,v=this
if(d.n(0,C.I)){v.a.a.toString
w=v.b.c
return w==null?v.c.gDB():w}v.a.a.toString
w=v.b.b
return w==null?v.c.grP():w},
$S:5}
B.bnR.prototype={
$0(){var w,v,u=this.a
u.a.toString
w=this.b
v=w.as
if(v instanceof A.u9)return v
return A.Jw(new B.bnS(u,w))},
$S:1005}
B.bnS.prototype={
$1(d){var w,v=this
if(d.n(0,C.I)){v.a.a.toString
w=v.b.at
return w==null?C.F:w}v.a.a.toString
w=v.b.as
return w==null?C.F:w},
$S:5}
B.aVU.prototype={
$1(d){var w=d.d,v=w!=null?A.zE(w):null
if(v==null)v=C.r
return d.f.e7(v)},
$S:1006}
B.aVT.prototype={
$1(d){var w,v
for(w=this.a,v=w.V-1,w=w.be;v>=0;--v)if(w[v]<=d)return v
return-1},
$S:313}
B.aVS.prototype={
$1(d){var w,v=this.a,u=v.S
if(u==null)return-1
for(w=J.cg(u)-1;w>=0;--w){u=v.S
u.toString
if(J.lF(u,w)<=d)return w}return-1},
$S:313}
B.aVV.prototype={
$3(d,e,f){var w=d.d,v=w!=null?A.zE(w):null
if(v==null)v=C.r
d.se2(0,A.pZ(v.a+e,v.b+f,0))},
$S:1008}
B.aVQ.prototype={
$0(){var w=this.a
w.r4(w,this.b)},
$S:0}
B.aVR.prototype={
$0(){return A.wa(null,null)},
$S:1009}
B.aVW.prototype={
$2(d,e){return d+e},
$S:43}
B.aVX.prototype={
$2(d,e){return this.a.dL(d,e)},
$S:22}
B.b0n.prototype={
$1(d){return!0},
$S:z+29}
B.b0o.prototype={
$1(d){return d.b},
$S:z+30}
B.boP.prototype={
$1(d){var w,v,u,t={}
t.a=0
w=this.a;++w.a
v=d.c
u=A.af(v).i("ad<1,bM>")
t=A.Q(new A.ad(v,new B.boO(t,w,this.b),u),u.i("aw.E"))
t.$flags=1
return new B.lu(d.a,t)},
$S:z+31}
B.boO.prototype={
$1(d){return this.c.yT(d,new B.Jk(this.a.a++,this.b.a))},
$S:1010}
B.boQ.prototype={
$1(d){return d.a==null},
$S:z+32}
B.boR.prototype={
$1(d){return!this.a.n(0,d)},
$S:1011}
B.boN.prototype={
$1(d){var w=d.b
return new A.ad(w,new B.boM(),A.af(w).i("ad<1,J>"))},
$S:z+33}
B.boM.prototype={
$1(d){var w=d.gai()
w.toString
return x.Y.a(w)},
$S:1012}
B.boS.prototype={
$1(d){return d.b},
$S:z+34}
B.aRi.prototype={
$1(d){return B.bGQ(d)},
$S:38}
B.ax5.prototype={
$2(d,e){return this.a.$0()},
$S(){return this.b.i("0(C,bJ)")}}
B.ax6.prototype={
$0(){return this.a.$0()},
$S(){return this.b.i("0()")}};(function installTearOffs(){var w=a._static_1,v=a._instance_1u,u=a._instance_0u,t=a.installInstanceTearOff
w(B,"c6C","bVo",35)
var s
v(s=B.Tm.prototype,"gaEH","aEI",10)
u(s,"gaEP","xb",0)
u(s,"gay5","By",0)
u(s=B.Y8.prototype,"gaLY","Jv",0)
u(s,"gaNF","uS",0)
u(s=B.Ty.prototype,"gasA","H7",0)
u(s,"gawy","Hz",0)
v(B.TS.prototype,"gaxP","axQ",8)
u(B.TV.prototype,"gatO","atP",1)
u(B.U5.prototype,"gauq","aur",1)
w(B,"c4C","c_m",36)
w(B,"c4D","c_n",24)
t(B.U7.prototype,"gaL2",0,2,null,["$3$askNote","$2"],["xv","aL3"],4,0,0)
u(B.UN.prototype,"gawe","awf",1)
u(B.VP.prototype,"gawU","awV",1)
u(s=B.V7.prototype,"gaIm","IN",0)
u(s,"gaIn","IO",0)
u(s,"gaxo","axp",1)
u(s=B.VO.prototype,"ga69","Ia",0)
u(s,"gaIl","IM",0)
u(s,"gaIs","IR",0)
u(s,"gaJw","Cr",0)
u(B.VX.prototype,"gaFg","aFh",1)
u(B.WN.prototype,"gCF","lf",0)
u(B.UK.prototype,"gCF","lf",0)
u(B.Y9.prototype,"gCF","lf",0)
u(B.YD.prototype,"gaM4","aM5",1)
u(B.Wy.prototype,"gaIh","xj",0)
u(s=B.WJ.prototype,"gaII","Ci",0)
u(s,"gaIJ","Cj",0)
u(s,"gaIK","Ck",0)
v(s=B.S9.prototype,"gOM","Aj",26)
v(s,"gadr","L1",27)
u(B.Yc.prototype,"gaC5","aC6",1)
v(s=B.vY.prototype,"gcB","cg",2)
v(s,"gcm","ce",2)
v(s,"gcL","cf",2)
v(s,"gcK","ck",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.C,[B.wg,B.pO,B.Al,B.fF,B.amc,B.wS,B.fl,B.r6,B.fw,B.wi,B.Ih,B.mn,B.lu,B.auE,B.aJ9,B.aay])
v(A.o5,[B.bvn,B.bsY,B.buJ,B.aLn,B.aLm,B.bht,B.buv,B.b3u,B.bfG,B.bbI,B.bbD,B.bbB,B.bbO,B.bbK,B.bby,B.bbo,B.bbj,B.bbw,B.bbs,B.bq0,B.bq1,B.bo3,B.bo4,B.awm,B.br3,B.br2,B.aC5,B.b3I,B.b3C,B.b3D,B.bnx,B.b5J,B.b5M,B.ayS,B.ayR,B.ayQ,B.b5T,B.b5U,B.azv,B.azu,B.azt,B.b6G,B.b6H,B.b6I,B.b6U,B.aC2,B.aC1,B.aC0,B.b9J,B.b9K,B.b9H,B.b9D,B.b9M,B.b9N,B.b9O,B.b9Q,B.brr,B.brq,B.brE,B.baw,B.bab,B.baa,B.ba7,B.b9X,B.b9Z,B.ba_,B.ba0,B.ba1,B.ba2,B.ba3,B.ba4,B.ba5,B.bav,B.bas,B.bao,B.bak,B.bag,B.b9S,B.bsi,B.aDO,B.aDK,B.bfo,B.bfp,B.aF8,B.aF7,B.aF6,B.bcf,B.bcg,B.bcc,B.bcd,B.bci,B.bcj,B.bck,B.bcl,B.buC,B.buD,B.buA,B.buB,B.bfk,B.bfm,B.bdY,B.bnA,B.aJU,B.aJQ,B.bgB,B.bgy,B.bgt,B.aLf,B.aLe,B.aLd,B.bgE,B.bgF,B.bgG,B.boY,B.brL,B.bgi,B.bsj,B.bjS,B.bjQ,B.bjN,B.bjO,B.bjP,B.brp,B.b9q,B.b9o,B.b9j,B.b9g,B.b9h,B.b9k,B.b9e,B.b9f,B.b9n,B.bnP,B.bnN,B.bnL,B.bnH,B.bnE,B.bnG,B.bnD,B.brw,B.bba,B.b0D,B.b0C,B.b0B,B.bp_,B.bp0,B.aL9,B.aL8,B.bjD,B.bjJ,B.b6x,B.aB4,B.aB0,B.aB1,B.aB2,B.aB3,B.aB5,B.bnU,B.bnS,B.aVU,B.aVT,B.aVS,B.aVV,B.b0n,B.b0o,B.boP,B.boO,B.boQ,B.boR,B.boN,B.boM,B.boS,B.aRi])
v(A.T,[B.yR,B.als,B.OX,B.anh,B.akk,B.aji,B.amm,B.ati,B.amn,B.arr,B.Cy,B.aif,B.Vy,B.a0g,B.akj,B.ajq,B.ai2,B.a1v,B.a1R,B.HH,B.a4I,B.aqA,B.al5,B.al6,B.akt,B.a5c,B.aoQ,B.aln,B.wP,B.ana,B.ar5,B.ar7,B.In,B.a7q,B.alr,B.BW,B.aoT,B.ajD,B.ark,B.ako,B.tP,B.adF,B.a1A,B.a1B,B.a4b,B.S8])
v(A.xV,[B.btS,B.buM,B.aLo,B.bhv,B.buw,B.bbH,B.bbN,B.bbn,B.bbv,B.aC6,B.b5O,B.ayT,B.azw,B.b7_,B.b6Y,B.b6X,B.aC3,B.bst,B.bad,B.ba8,B.bar,B.baj,B.bcW,B.b9T,B.aDP,B.aDM,B.aDL,B.aF9,B.buG,B.buH,B.buE,B.buF,B.bjx,B.bjy,B.bjz,B.bjA,B.bdU,B.bdV,B.bdW,B.bdX,B.aJV,B.aJT,B.aJS,B.bgz,B.bgw,B.bgv,B.aLg,B.bgj,B.bjT,B.b9r,B.b9i,B.b9l,B.bnO,B.bnK,B.bnF,B.bbb,B.b0E,B.aLa,B.bjK,B.bjF,B.bjE,B.aVW,B.aVX,B.ax5])
u(B.zt,A.fC)
v(A.xU,[B.aLi,B.aLj,B.aLk,B.aLp,B.bhu,B.b3v,B.b3w,B.b3x,B.b3r,B.b3s,B.b3t,B.bbP,B.bbQ,B.bbR,B.bbC,B.bbE,B.bbF,B.bbG,B.bbz,B.bbA,B.bbJ,B.bbL,B.bbM,B.bbx,B.bbi,B.bbh,B.bbg,B.bbk,B.bbl,B.bbm,B.bbr,B.bbq,B.bbp,B.bbt,B.bbu,B.awn,B.aC7,B.aC4,B.b3H,B.b3F,B.b3G,B.b3E,B.b3A,B.b3B,B.bng,B.bnh,B.bnl,B.bnm,B.bnn,B.bno,B.bnp,B.bnq,B.bnr,B.bns,B.bnt,B.bny,B.bnz,B.b49,B.b4a,B.b4b,B.b5K,B.b5P,B.b5L,B.b5N,B.b5S,B.b6F,B.b6E,B.b6S,B.b6T,B.b6V,B.b6Z,B.b6W,B.b6P,B.b6Q,B.b6R,B.b9I,B.b9E,B.b9L,B.b9G,B.b9P,B.b9F,B.baA,B.bax,B.bay,B.baz,B.bac,B.bae,B.ba9,B.b9Y,B.ba6,B.b9W,B.b9V,B.bat,B.bau,B.ban,B.bap,B.baq,B.bal,B.bam,B.baf,B.bah,B.bai,B.bcU,B.bcV,B.bcX,B.bcY,B.bcZ,B.bd_,B.bd0,B.b9U,B.bnc,B.aDN,B.aDQ,B.bfn,B.bc8,B.bc9,B.bce,B.bca,B.bch,B.bcb,B.buy,B.buz,B.bfe,B.bff,B.bfg,B.bfh,B.bfi,B.bfj,B.bfd,B.bfl,B.aJW,B.aJR,B.bgA,B.bgx,B.bgu,B.bgr,B.bgs,B.bgD,B.bgC,B.boX,B.bgk,B.bgh,B.bjR,B.bjU,B.bjM,B.b9p,B.b9s,B.b9d,B.b9m,B.b9c,B.bnM,B.bnI,B.bnJ,B.bnC,B.bbc,B.bb9,B.boZ,B.aLb,B.biE,B.biF,B.biG,B.bjB,B.bjC,B.bjI,B.bjH,B.bjL,B.bjG,B.aB6,B.aB7,B.b0m,B.bnQ,B.bnT,B.bnR,B.aVQ,B.aVR,B.ax6])
v(A.y2,[B.zu,B.aky,B.akx,B.akw,B.a4J,B.ah6,B.ajS,B.ar4,B.a4U,B.a6O,B.amK,B.aoU,B.ajE,B.arl,B.akp,B.a7n])
v(A.be,[B.xx,B.Ci,B.KN,B.Lc,B.Bq,B.Bt,B.LM,B.BB,B.Mt,B.BK,B.O2,B.zr,B.BX,B.Sh,B.C7,B.BA,B.Ya,B.Cj,B.Cu,B.Fz,B.PQ])
v(A.y1,[B.Tm,B.Y8,B.Ty,B.TS,B.TV,B.U5,B.U7,B.UN,B.ajT,B.V7,B.VO,B.amU,B.VX,B.as5,B.WN,B.UK,B.arm,B.Y9,B.YD,B.Wy,B.WJ])
v(A.M,[B.BT,B.GD])
v(A.a1,[B.VP,B.Yc])
v(A.I_,[B.b6v,B.wh,B.ka])
u(B.b6w,A.xT)
u(B.S9,A.vd)
v(B.wi,[B.anH,B.O0,B.a5g,B.a5v])
u(B.anM,A.c)
u(B.qi,A.hK)
u(B.vY,A.J)
u(B.S7,A.aX)
u(B.arX,A.bW)
u(B.arW,A.fS)
u(B.Jk,B.auE)
w(B.auE,A.aO)})()
A.bpZ(b.typeUniverse,JSON.parse('{"yR":{"T":[],"c":[]},"als":{"T":[],"c":[]},"OX":{"T":[],"c":[]},"zt":{"fC":["bd<~>"],"fC.T":"bd<~>"},"zu":{"be":[],"M":[],"c":[]},"anh":{"T":[],"c":[]},"akk":{"T":[],"c":[]},"aji":{"T":[],"c":[]},"xx":{"be":[],"M":[],"c":[]},"Tm":{"a1":["xx"]},"amm":{"T":[],"c":[]},"aky":{"be":[],"M":[],"c":[]},"akx":{"be":[],"M":[],"c":[]},"akw":{"be":[],"M":[],"c":[]},"ati":{"T":[],"c":[]},"amn":{"T":[],"c":[]},"arr":{"T":[],"c":[]},"Cy":{"T":[],"c":[]},"aif":{"T":[],"c":[]},"Vy":{"T":[],"c":[]},"a0g":{"T":[],"c":[]},"Ci":{"be":[],"M":[],"c":[]},"a4J":{"be":[],"M":[],"c":[]},"akj":{"T":[],"c":[]},"ah6":{"be":[],"M":[],"c":[]},"Y8":{"a1":["Ci"]},"ajq":{"T":[],"c":[]},"KN":{"be":[],"M":[],"c":[]},"Ty":{"a1":["KN"]},"Lc":{"be":[],"M":[],"c":[]},"TS":{"a1":["Lc"]},"ai2":{"T":[],"c":[]},"Bq":{"be":[],"M":[],"c":[]},"a1v":{"T":[],"c":[]},"TV":{"a1":["Bq"]},"Bt":{"be":[],"M":[],"c":[]},"a1R":{"T":[],"c":[]},"U5":{"a1":["Bt"]},"LM":{"be":[],"M":[],"c":[]},"HH":{"T":[],"c":[]},"U7":{"a1":["LM"]},"BB":{"be":[],"M":[],"c":[]},"a4I":{"T":[],"c":[]},"UN":{"a1":["BB"]},"Mt":{"be":[],"M":[],"c":[]},"ajT":{"a1":["Mt"]},"aqA":{"T":[],"c":[]},"al5":{"T":[],"c":[]},"al6":{"T":[],"c":[]},"ajS":{"be":[],"M":[],"c":[]},"ar4":{"be":[],"M":[],"c":[]},"akt":{"T":[],"c":[]},"BT":{"M":[],"c":[]},"a4U":{"be":[],"M":[],"c":[]},"VP":{"a1":["BT"]},"BK":{"be":[],"M":[],"c":[]},"a5c":{"T":[],"c":[]},"V7":{"a1":["BK"]},"O2":{"be":[],"M":[],"c":[]},"In":{"T":[],"c":[]},"VO":{"a1":["O2"]},"aoQ":{"T":[],"c":[]},"aln":{"T":[],"c":[]},"wP":{"T":[],"c":[]},"ana":{"T":[],"c":[]},"ar5":{"T":[],"c":[]},"ar7":{"T":[],"c":[]},"a6O":{"be":[],"M":[],"c":[]},"zr":{"be":[],"M":[],"c":[]},"amU":{"a1":["zr"]},"BX":{"be":[],"M":[],"c":[]},"a7q":{"T":[],"c":[]},"VX":{"a1":["BX"]},"Sh":{"be":[],"M":[],"c":[]},"C7":{"be":[],"M":[],"c":[]},"BA":{"be":[],"M":[],"c":[]},"Ya":{"be":[],"M":[],"c":[]},"Cj":{"be":[],"M":[],"c":[]},"as5":{"a1":["Sh"]},"amK":{"be":[],"M":[],"c":[]},"alr":{"T":[],"c":[]},"BW":{"T":[],"c":[]},"aoU":{"be":[],"M":[],"c":[]},"aoT":{"T":[],"c":[]},"WN":{"a1":["C7"]},"ajE":{"be":[],"M":[],"c":[]},"ajD":{"T":[],"c":[]},"UK":{"a1":["BA"]},"arm":{"a1":["Ya"]},"arl":{"be":[],"M":[],"c":[]},"ark":{"T":[],"c":[]},"Y9":{"a1":["Cj"]},"akp":{"be":[],"M":[],"c":[]},"ako":{"T":[],"c":[]},"tP":{"T":[],"c":[]},"Cu":{"be":[],"M":[],"c":[]},"adF":{"T":[],"c":[]},"YD":{"a1":["Cu"]},"a7n":{"be":[],"M":[],"c":[]},"Fz":{"be":[],"M":[],"c":[]},"Wy":{"a1":["Fz"]},"PQ":{"be":[],"M":[],"c":[]},"WJ":{"a1":["PQ"]},"a1A":{"T":[],"c":[]},"a1B":{"T":[],"c":[]},"a4b":{"T":[],"c":[]},"S9":{"T":[],"c":[]},"anH":{"wi":[]},"anM":{"c":[]},"GD":{"M":[],"c":[]},"Yc":{"a1":["GD"]},"qi":{"hK":[],"e1":[]},"O0":{"wi":[]},"a5g":{"wi":[]},"a5v":{"wi":[]},"vY":{"J":[],"L":[],"aT":[]},"S7":{"aX":[],"c":[]},"arX":{"bW":[],"bM":[],"y":[]},"S8":{"T":[],"c":[]},"arW":{"fS":["qi"],"bq":[],"c":[],"fS.T":"qi"},"bSo":{"bz":[],"bq":[],"c":[]}}'))
var y={k:'<h2 style="margin-top:14pt">Bilanzwert der Vorr\xe4te</h2>',c:'<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2><p class="matrix-intro">Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskosten-wert eines FIFO-Restlots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.</p>',b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.at
return{u:w("mJ"),c:w("bd<v<hR>>"),w:w("bd<v<a3<f,@>>>"),bj:w("bd<v<kj>>"),i:w("bd<br<f>>"),cA:w("a0I"),cT:w("av"),O:w("hK"),fl:w("jk<u>"),o:w("a5<f,f>"),cn:w("hL"),cu:w("a4a"),d:w("bSo"),bz:w("lL<aZ>"),f0:w("ob"),Q:w("jq"),r:w("dU<f>"),dk:w("bM"),fY:w("R<jh?>"),hf:w("t<@>"),hc:w("B<jk<u>>"),F:w("B<fw>"),G:w("B<fl>"),_:w("B<r6>"),I:w("B<dU<f>>"),x:w("B<pO>"),cV:w("B<v<cY>>"),t:w("B<a3<f,@>>"),U:w("B<FJ<@>>"),aO:w("B<cY>"),s:w("B<f>"),p:w("B<c>"),ew:w("B<fF>"),R:w("B<lu>"),bs:w("B<Jk>"),eQ:w("B<F>"),V:w("B<J?>"),n:w("bl<Eo>"),aA:w("iw<p5<bd<~>>>"),am:w("v<bM>"),d7:w("v<v<cY>>"),W:w("v<hR>"),D:w("v<a3<f,@>>"),e:w("v<kj>"),j:w("v<@>"),f9:w("l3"),M:w("zt"),K:w("a7s"),J:w("bt<f,f>"),P:w("a3<f,@>"),f:w("a3<@,@>"),m:w("k6"),a:w("bp"),aU:w("C"),bX:w("rP"),Y:w("J"),S:w("vY"),eV:w("cY"),C:w("br<f>"),Z:w("wg"),N:w("f"),A:w("nq"),de:w("S7"),L:w("qi"),eA:w("wi"),cZ:w("mn"),af:w("bc<fF>"),l:w("c"),k:w("d6"),av:w("qs"),v:w("bE<E?>"),cQ:w("Ih"),dr:w("amc"),q:w("x0"),gN:w("ip<J>"),b:w("bo<E?>"),y:w("A"),gR:w("F"),z:w("@"),B:w("u"),ea:w("uC?"),g:w("v<@>?"),h:w("a3<f,@>?"),X:w("C?"),dE:w("J?"),T:w("f?"),aD:w("im?"),E:w("c?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_D=new B.xx(null)
D.a_E=new B.a0g(null)
D.a_N=new B.KN(null)
D.Bi=new A.bm(C.ak,1,C.U,-1)
D.a0e=new A.bm(C.m,1.5,C.U,-1)
D.a0v=new A.av(0,180,0,1/0)
D.mJ=new A.av(34,1/0,34,1/0)
D.BM=new B.a5v()
D.a2H=new B.anH()
D.a2S=new B.Lc(null)
D.a2Y=new B.a1v(null)
D.ad4=new A.aH(E.fS,40,C.q,null,null)
D.aH6=new A.ab("Keine Freigabe-Anfragen offen.",null,null,null,null,null,null,null,null,null)
D.aiJ=w([D.ad4,C.P,D.aH6],x.p)
D.a5d=new A.jU(C.M,C.f,C.H,C.k,null,C.bz,null,0,D.aiJ,null)
D.auf=new A.ah(C.dg,D.a5d,null)
D.a30=new A.ft(C.W,null,null,D.auf,null)
D.aHq=new A.ab("Kein Bestand erfasst.",null,null,null,null,null,null,null,null,null)
D.a31=new A.ft(C.W,null,null,D.aHq,null)
D.aHJ=new A.ab("Keine Eintr\xe4ge im Zeitraum.",null,null,null,null,null,null,null,null,null)
D.a34=new A.ft(C.W,null,null,D.aHJ,null)
D.a3c=new B.a1R(null)
D.a5f=new B.LM(null)
D.aGI=new A.ab("",null,null,null,null,null,null,null,null,null)
D.kQ=new B.fw(D.aGI)
D.aFM=new A.ab("Anlass",null,null,null,null,null,null,null,null,null)
D.a5Y=new B.fl(D.aFM,!1)
D.aGK=new A.ab("Betrag",null,null,null,null,null,null,null,null,null)
D.a5Z=new B.fl(D.aGK,!0)
D.aGR=new A.ab("Datum",null,null,null,null,null,null,null,null,null)
D.D3=new B.fl(D.aGR,!1)
D.aHh=new A.ab("km",null,null,null,null,null,null,null,null,null)
D.a66=new B.fl(D.aHh,!0)
D.a6t=new B.a4I(null)
D.kU=new A.mX(1,null,null)
D.a6y=new B.a4J(null)
D.a6z=new B.Mt(null)
D.aG4=new A.ab("\u2014 kein Produkt \u2014",null,null,null,null,null,null,null,null,null)
D.a6K=new A.dU(null,D.aG4,C.aW,null,x.r)
D.aG1=new A.ab("\u2014 freie Eingabe \u2014",null,null,null,null,null,null,null,null,null)
D.a6M=new A.dU(null,D.aG1,C.aW,null,x.r)
D.a7m=new A.ak(0,0,0,16)
D.a7n=new A.ak(0,0,0,2)
D.a7x=new A.ak(0,28,0,6)
D.Dr=new A.ak(0,3,0,3)
D.a7C=new A.ak(0,5,0,5)
D.a7F=new A.ak(10,5,10,5)
D.a7S=new A.ak(20,0,20,0)
D.x0=new A.ak(20,12,20,0)
D.a86=new A.ak(7,3,7,3)
D.a8a=new B.a4U(null)
D.a8n=new A.e6("Betriebliche Fahrten",!1,null)
D.a8g=new A.kO(1,C.dY,D.a8n,null)
D.a8o=new A.e6("Fahrzeugkosten",!1,null)
D.a8p=new A.e6("Freigabe",!1,null)
D.a8B=new A.e6("Abo-Verwaltung",!1,null)
D.a8N=new B.a5c(null)
D.aGu=new A.ab("Freigaben",null,null,null,null,null,null,null,null,null)
D.a94=new A.et(D.aGu,null,null)
D.aHs=new A.ab("K\xfcndigungen",null,null,null,null,null,null,null,null,null)
D.a96=new A.et(D.aHs,null,null)
D.aIh=new A.ab("Anlage PKW-Kosten",null,null,null,null,null,null,null,null,null)
D.a99=new A.et(D.aIh,null,null)
D.aHT=new A.ab("B2B-Kunden \u2014 sevDesk-Export",null,null,null,null,null,null,null,null,null)
D.a9a=new A.et(D.aHT,null,null)
D.aGi=new A.ab("Mitarbeiter",null,null,null,null,null,null,null,null,null)
D.a9b=new A.et(D.aGi,null,null)
D.aHm=new A.ab("Reklamationen",null,null,null,null,null,null,null,null,null)
D.a9g=new A.et(D.aHm,null,null)
D.aI9=new A.ab("Inventur \u2014 FIFO-Bewegungsreport",null,null,null,null,null,null,null,null,null)
D.a9k=new A.et(D.aI9,null,null)
D.aGg=new A.ab("Inventur",null,null,null,null,null,null,null,null,null)
D.a9m=new A.et(D.aGg,null,null)
D.aH1=new A.ab("Anlagen",null,null,null,null,null,null,null,null,null)
D.a9q=new A.et(D.aH1,null,null)
D.aFE=new A.ab("Dokumente",null,null,null,null,null,null,null,null,null)
D.a9s=new A.et(D.aFE,null,null)
D.aFz=new A.ab("Telemetrie / IoT",null,null,null,null,null,null,null,null,null)
D.a9t=new A.et(D.aFz,null,null)
D.a9T=new A.a7(58147,"MaterialIcons",null,!1)
D.a9W=new A.a7(58206,"MaterialIcons",null,!1)
D.aa8=new A.a7(58550,"MaterialIcons",null,!1)
D.aae=new A.a7(58742,"MaterialIcons",null,!1)
D.aaj=new A.a7(58966,"MaterialIcons",null,!1)
D.aao=new A.a7(59084,"MaterialIcons",null,!1)
D.aap=new A.a7(59124,"MaterialIcons",null,!1)
D.Ev=new A.a7(61190,"MaterialIcons",null,!1)
D.Ez=new A.a7(61270,"MaterialIcons",null,!1)
D.aaD=new A.a7(61358,"MaterialIcons",null,!1)
D.EA=new A.a7(61382,"MaterialIcons",null,!1)
D.aaM=new A.a7(61584,"MaterialIcons",null,!1)
D.EB=new A.a7(61585,"MaterialIcons",null,!1)
D.aaO=new A.a7(61657,"MaterialIcons",null,!1)
D.aaQ=new A.a7(61682,"MaterialIcons",null,!1)
D.aaX=new A.a7(61838,"MaterialIcons",null,!1)
D.ab_=new A.a7(62003,"MaterialIcons",null,!1)
D.ab7=new A.a7(62295,"MaterialIcons",null,!1)
D.abc=new A.a7(62446,"MaterialIcons",null,!1)
D.abd=new A.a7(62522,"MaterialIcons",null,!1)
D.abg=new A.a7(62579,"MaterialIcons",null,!1)
D.abu=new A.a7(984578,"MaterialIcons",null,!1)
D.abv=new A.a7(984664,"MaterialIcons",null,!1)
D.abx=new A.a7(984828,"MaterialIcons",null,!1)
D.EW=new A.aH(C.i4,16,C.m,null,null)
D.abW=new A.aH(C.ld,32,C.j,null,null)
D.abZ=new A.aH(C.a9U,16,null,null,null)
D.F0=new A.aH(C.Ep,null,null,null,null)
D.ac8=new A.aH(C.i4,14,C.m,null,null)
D.Er=new A.a7(59030,"MaterialIcons",null,!1)
D.acb=new A.aH(D.Er,null,null,null,null)
D.aa0=new A.a7(58442,"MaterialIcons",null,!1)
D.acm=new A.aH(D.aa0,null,null,null,null)
D.Eb=new A.a7(57415,"MaterialIcons",null,!1)
D.nZ=new A.aH(D.Eb,null,null,null,null)
D.lh=new A.aH(E.Eh,null,null,null,null)
D.acv=new A.aH(C.jh,16,null,null,null)
D.aai=new A.a7(58950,"MaterialIcons",null,!1)
D.acy=new A.aH(D.aai,18,null,null,null)
D.acz=new A.aH(C.i3,16,null,null,null)
D.F7=new A.aH(D.Eb,18,null,null,null)
D.aa7=new A.a7(58516,"MaterialIcons",null,!1)
D.acH=new A.aH(D.aa7,20,null,null,null)
D.acI=new A.aH(C.ld,null,C.aE,null,null)
D.a9O=new A.a7(57918,"MaterialIcons",null,!1)
D.F8=new A.aH(D.a9O,18,null,null,null)
D.acP=new A.aH(C.xX,null,C.q,null,null)
D.a9P=new A.a7(57919,"MaterialIcons",null,!1)
D.acV=new A.aH(D.a9P,20,null,null,null)
D.acW=new A.aH(E.fS,20,null,null,null)
D.aax=new A.a7(61280,"MaterialIcons",null,!1)
D.ad_=new A.aH(D.aax,null,null,null,null)
D.ad2=new A.aH(D.Er,20,null,null,null)
D.ad6=new A.aH(C.lc,18,C.m,null,null)
D.aa6=new A.a7(58514,"MaterialIcons",null,!1)
D.ad9=new A.aH(D.aa6,null,null,null,null)
D.adi=new A.aH(C.lf,16,C.q,null,null)
D.aba=new A.a7(62403,"MaterialIcons",null,!1)
D.adl=new A.aH(D.aba,18,null,null,null)
D.adm=new A.aH(C.lc,null,null,null,null)
D.adV=new A.c_(null,null,null,"Provider",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.adW=new A.c_(null,null,null,"Rechnungsdatum",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.adZ=new A.c_(null,null,null,"Entnommener Betrag brutto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae0=new A.c_(null,null,null,"Name (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae1=new A.c_(null,null,null,"Kosten (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae2=new A.c_(null,null,null,"Wechselgeld (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae3=new A.c_(null,null,null,"Produktbezeichnung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Ff=new A.c_(null,null,null,"Betrag brutto in Euro",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fg=new A.c_(null,null,null,"Bezeichnung (freiwillig)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fh=new A.c_(null,null,null,"Kostenart",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae4=new A.c_(null,null,null,"Ma\xdfnahme",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae6=new A.c_(null,null,null,"Adapter",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae7=new A.c_(null,null,null,"Bemerkung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae9=new A.c_(null,null,null,"Korrekturma\xdfnahme (bei \xdcberschreitung)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aea=new A.c_(null,null,null,"HMAC-Secret",null,null,null,"Wird zur Signaturpr\xfcfung genutzt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fi=new A.c_(null,null,null,"Kilometer (Hin- und R\xfcckweg)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeb=new A.c_(null,null,null,"Slot-Code (z. B. A3)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aec=new A.c_(null,null,null,"Antwort an den Kunden",null,null,null,"Wird dem Kunden im Verlauf angezeigt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.un,!0,null,null,null,null)
D.aee=new A.c_(null,null,null,"Automat",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aef=new A.c_(null,null,null,"Rechnungsnummer",null,null,null,"Nummer der Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeg=new A.c_(null,null,null,"Titel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aei=new A.c_(null,null,null,"Eingelegte Menge",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aem=new A.c_(null,null,null,"MHD des Lots (empfohlen)",null,null,null,"Wird f\xfcr die MHD-Bewertung im Inventurreport genutzt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aen=new A.c_(null,null,null,"Reinigungsmittel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fj=new A.c_(null,null,null,"Fahrzeug",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeo=new A.c_(null,null,null,"Anzeigename",null,null,null,'z. B. \u201eCleverMetrics-Prod"',null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aep=new A.c_(null,null,null,"Fehlerbeschreibung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeq=new A.c_(null,null,null,"Ist-Temperatur (\xb0C)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\xb0C",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fk=new A.c_(null,null,null,"Produkt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aer=new A.c_(null,null,null,"Automat w\xe4hlen",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aev=new A.c_(null,null,null,"VK-Preis netto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aex=new A.c_(null,null,null,"Kilometerstand am 01.01.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fl=new A.c_(null,null,null,"Anlass der Fahrt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aey=new A.c_(null,null,null,"Menge (St\xfcck)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aez=new A.c_(null,null,null,null,null,null,null,null,null,null,"Kommentar (Pflicht)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeA=new A.c_(null,null,null,"Entnommener Verderb",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeB=new A.c_(null,null,null,"Grund",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeC=new A.c_(null,null,null,"Externe Ger\xe4t-ID / Serien-Nummer",null,null,null,"Wie beim Provider hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeD=new A.c_(null,null,null,"Produkt (optional, koppelt Inventur)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeE=new A.c_(null,null,null,"EK-Preis netto \u20ac/St\xfcck",null,null,null,"Aus Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeF=new A.c_(null,null,null,"Firmware (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeG=new A.c_(null,null,null,"Notizen (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeH=new A.c_(null,null,null,"Kilometerstand am 31.12.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeJ=new A.c_(null,null,null,"E-Mail",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeK=new A.c_(null,null,null,"Ordner",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeL=new A.c_(null,null,null,"Kapazit\xe4t",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeM=new A.c_(null,null,null,"Art",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeN=new A.c_(null,null,null,"Differenz (+ auff\xfcllen / \u2212 abziehen)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeQ=new A.c_(null,null,null,"Erledigt durch (Name/Firma)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.afa=new B.O0(1)
D.afb=new B.O0(null)
D.afc=new B.O2(null)
D.afd=new B.a6O(null)
D.yf=new A.rC(null,null,null,null,null,null,null,null)
D.apu=new A.bt("tanken","Tanken",x.J)
D.apx=new A.bt("versicherung","Versicherung",x.J)
D.apw=new A.bt("kfz_steuer","Kfz-Steuer",x.J)
D.apv=new A.bt("waesche","Autow\xe4sche",x.J)
D.aps=new A.bt("reparatur","Reparaturen",x.J)
D.apr=new A.bt("leasing","Leasingraten",x.J)
D.apq=new A.bt("abschreibung","Abschreibung",x.J)
D.apt=new A.bt("sonstiges","Sonstiges",x.J)
D.ahv=w([D.apu,D.apx,D.apw,D.apv,D.aps,D.apr,D.apq,D.apt],A.at("B<bt<f,f>>"))
D.aFP=new A.ab("Rechnung",null,null,null,null,null,null,null,null,null)
D.D2=new B.fl(D.aFP,!1)
D.aG7=new A.ab("Rg-Datum",null,null,null,null,null,null,null,null,null)
D.a60=new B.fl(D.aG7,!1)
D.aHX=new A.ab("Rest",null,null,null,null,null,null,null,null,null)
D.a62=new B.fl(D.aHX,!0)
D.aHB=new A.ab("EK/Stk.",null,null,null,null,null,null,null,null,null)
D.D0=new B.fl(D.aHB,!0)
D.aH_=new A.ab("MHD",null,null,null,null,null,null,null,null,null)
D.D1=new B.fl(D.aH_,!1)
D.aGy=new A.ab("Restlaufzeit",null,null,null,null,null,null,null,null,null)
D.a63=new B.fl(D.aGy,!0)
D.aI2=new A.ab("Abschlag %",null,null,null,null,null,null,null,null,null)
D.a5U=new B.fl(D.aI2,!0)
D.aGj=new A.ab("AK-Wert",null,null,null,null,null,null,null,null,null)
D.a68=new B.fl(D.aGj,!0)
D.aI3=new A.ab("Abschlag \u20ac",null,null,null,null,null,null,null,null,null)
D.a5V=new B.fl(D.aI3,!0)
D.aHA=new A.ab("Bilanz",null,null,null,null,null,null,null,null,null)
D.a5T=new B.fl(D.aHA,!0)
D.aj6=w([D.D2,D.a60,D.a62,D.D0,D.D1,D.a63,D.a5U,D.a68,D.a5V,D.a5T],x.G)
D.aG0=new A.ab("Vorgang",null,null,null,null,null,null,null,null,null)
D.a64=new B.fl(D.aG0,!1)
D.aGa=new A.ab("Menge",null,null,null,null,null,null,null,null,null)
D.a5W=new B.fl(D.aGa,!0)
D.aH8=new A.ab("Bemerkung",null,null,null,null,null,null,null,null,null)
D.a5X=new B.fl(D.aH8,!1)
D.ajl=w([D.D3,D.a64,D.a5W,D.D0,D.D2,D.D1,D.a5X],x.G)
D.aGd=new A.ab("Au\xdfenreinigung",null,null,null,null,null,null,null,null,null)
D.a6E=new A.dU("exterior",D.aGd,C.aW,null,x.r)
D.aFZ=new A.ab("Innenreinigung",null,null,null,null,null,null,null,null,null)
D.a6L=new A.dU("interior",D.aFZ,C.aW,null,x.r)
D.aG6=new A.ab("Vollreinigung + Desinfektion",null,null,null,null,null,null,null,null,null)
D.a6H=new A.dU("full",D.aG6,C.aW,null,x.r)
D.ajP=w([D.a6E,D.a6L,D.a6H],x.I)
D.aG_=new A.ab("MHD \xfcberschritten",null,null,null,null,null,null,null,null,null)
D.a6I=new A.dU("mhd",D.aG_,C.aW,null,x.r)
D.aGl=new A.ab("Besch\xe4digung",null,null,null,null,null,null,null,null,null)
D.a6P=new A.dU("damage",D.aGl,C.aW,null,x.r)
D.aHk=new A.ab("Hygienemangel",null,null,null,null,null,null,null,null,null)
D.a6N=new A.dU("hygiene",D.aHk,C.aW,null,x.r)
D.aGw=new A.ab("Sonstiges",null,null,null,null,null,null,null,null,null)
D.a6Q=new A.dU("other",D.aGw,C.aW,null,x.r)
D.ak4=w([D.a6I,D.a6P,D.a6N,D.a6Q],x.I)
D.am5=w(["> 4 Wochen","0 % Abschlag","0 %","normale Verwertbarkeit"],x.s)
D.anx=w(["2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit, ggf. erh\xf6hte Preisaktionen"],x.s)
D.alw=w(["1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck"],x.s)
D.aiy=w(["< 1 Woche","50\u201380 %","65 %","Risiko des Nichtverkaufs deutlich erh\xf6ht"],x.s)
D.anp=w(["MHD \xfcberschritten","100 % Abschreibung","100 %","keine wirtschaftliche Verwertbarkeit"],x.s)
D.akw=w([D.am5,D.anx,D.alw,D.aiy,D.anp],A.at("B<v<f>>"))
D.akU=w(["Live","Provider","Ger\xe4te","Slots","Events"],x.s)
D.aHc=new A.ab("Generic (kanonisch)",null,null,null,null,null,null,null,null,null)
D.a6F=new A.dU("generic",D.aHc,C.aW,null,x.r)
D.aHF=new A.ab("CleverMetrics",null,null,null,null,null,null,null,null,null)
D.a6O=new A.dU("clevermetrics",D.aHF,C.aW,null,x.r)
D.aHE=new A.ab("Nayax",null,null,null,null,null,null,null,null,null)
D.a6G=new A.dU("nayax",D.aHE,C.aW,null,x.r)
D.aFT=new A.ab("Custom",null,null,null,null,null,null,null,null,null)
D.a6J=new A.dU("custom",D.aFT,C.aW,null,x.r)
D.alc=w([D.a6F,D.a6O,D.a6G,D.a6J],x.I)
D.alD=w([],A.at("B<bM>"))
D.aQ7=w([],A.at("B<mn>"))
D.alC=w([],x.R)
D.alB=w([],x.V)
D.ane=w(["system_admin","shareholder","employee"],x.s)
D.aOe=new B.wS("> 4 Wochen","0 %","0 %","normale Verwertbarkeit")
D.aOg=new B.wS("2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit")
D.aOd=new B.wS("1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck")
D.aOc=new B.wS("< 1 Woche","50\u201380 %","65 %","Risiko Nichtverkauf deutlich erh\xf6ht")
D.aOf=new B.wS("MHD \xfcberschritten","100 %","100 %","keine wirtschaftl. Verwertbarkeit")
D.ank=w([D.aOe,D.aOg,D.aOd,D.aOc,D.aOf],A.at("B<wS>"))
D.aHj=new A.ab("Rest-MHD am Stichtag",null,null,null,null,null,null,null,null,null)
D.a6_=new B.fl(D.aHj,!1)
D.aHV=new A.ab("Typischer Ansatz",null,null,null,null,null,null,null,null,null)
D.a61=new B.fl(D.aHV,!1)
D.aHe=new A.ab("B\xf6rdesnack24 wendet an",null,null,null,null,null,null,null,null,null)
D.a65=new B.fl(D.aHe,!0)
D.aGk=new A.ab("Begr\xfcndung",null,null,null,null,null,null,null,null,null)
D.a67=new B.fl(D.aGk,!1)
D.anG=w([D.a6_,D.a61,D.a65,D.a67],x.G)
D.anK=w(["pdf","docx","doc","jpg","jpeg","png"],x.s)
D.app=new B.a7q(null)
D.atc={tanken:0,versicherung:1,kfz_steuer:2,waesche:3,reparatur:4,leasing:5,abschreibung:6,sonstiges:7}
D.lU=new A.a5(D.atc,["Tanken","Versicherung","Kfz-Steuer","Autow\xe4sche","Reparaturen","Leasingraten","Abschreibung","Sonstiges"],x.o)
D.at2={exterior:0,interior:1,full:2}
D.apI=new A.a5(D.at2,["Au\xdfenreinigung","Innenreinigung","Vollreinigung + Desinfektion"],x.o)
D.ate={mhd:0,damage:1,hygiene:2,other:3}
D.apJ=new A.a5(D.ate,["MHD \xfcberschritten","Besch\xe4digung","Hygienemangel","Sonstiges"],x.o)
D.asT={temperature:0,cleaning:1,disposal:2,filling:3,maintenance:4,cash:5,training:6}
D.apK=new A.a5(D.asT,["haccp_temperature","haccp_cleaning","haccp_disposal","haccp_filling","haccp_maintenance","haccp_cash","haccp_training"],x.o)
D.at9={"inventory.view":0,"inventory.edit":1,"haccp.fill":2,"haccp.temperature":3,"haccp.cleaning":4,"haccp.disposal":5,"haccp.maintenance":6,"cash.collect":7,"documents.view":8}
D.Sh=new A.a5(D.at9,["Inventur ansehen","Inventur bearbeiten","Bef\xfcllung","Temperatur","Reinigung","Vernichtung","Wartung","Geldentnahme","Dokumente ansehen"],x.o)
D.a3R=new A.E(1,1,0.9529411764705882,0.8784313725490196,C.i)
D.a4B=new A.E(1,1,0.8784313725490196,0.6980392156862745,C.i)
D.a5a=new A.E(1,1,0.8,0.5019607843137255,C.i)
D.a3q=new A.E(1,1,0.7176470588235294,0.30196078431372547,C.i)
D.a45=new A.E(1,1,0.6549019607843137,0.14901960784313725,C.i)
D.a4s=new A.E(1,1,0.596078431372549,0,C.i)
D.a4L=new A.E(1,0.984313725490196,0.5490196078431373,0,C.i)
D.a4_=new A.E(1,0.9607843137254902,0.48627450980392156,0,C.i)
D.a4J=new A.E(1,0.9372549019607843,0.4235294117647059,0,C.i)
D.a3D=new A.E(1,0.9019607843137255,0.3176470588235294,0,C.i)
D.as5=new A.dg([50,D.a3R,100,D.a4B,200,D.a5a,300,D.a3q,400,D.a45,500,D.a4s,600,D.a4L,700,D.a4_,800,D.a4J,900,D.a3D],A.at("dg<u,E>"))
D.asj=new A.rI(D.as5,1,1,0.596078431372549,0,C.i)
D.a7z=new A.ak(0,2,6,0)
D.aaa=new A.a7(58612,"MaterialIcons",null,!1)
D.acY=new A.aH(D.aaa,16,C.m,null,null)
D.aub=new A.ah(D.a7z,D.acY,null)
D.aue=new A.ah(C.np,C.lq,null)
D.WX=new B.ka(0,"eq")
D.avf=new B.ka(1,"neq")
D.avg=new B.ka(10,"match")
D.avh=new B.ka(11,"imatch")
D.avi=new B.ka(12,"isDistinct")
D.avj=new B.ka(2,"lt")
D.avk=new B.ka(3,"lte")
D.avl=new B.ka(4,"gt")
D.avm=new B.ka(5,"gte")
D.WY=new B.ka(6,"inFilter")
D.avn=new B.ka(7,"like")
D.avo=new B.ka(8,"ilike")
D.avp=new B.ka(9,"isFilter")
D.aag=new A.a7(58871,"MaterialIcons",null,!1)
D.acJ=new A.aH(D.aag,18,C.j,null,null)
D.a8w=new A.e6("Bilanzwert der Vorr\xe4te",!1,null)
D.amQ=w([D.acJ,C.b2,D.a8w],x.p)
D.awO=new A.iA(C.ay,C.f,C.h,C.k,null,C.bz,null,0,D.amQ,null)
D.ET=new A.a7(984557,"MaterialIcons",null,!1)
D.ad1=new A.aH(D.ET,18,C.j,null,null)
D.a8I=new A.e6("Freigabe / Unterschriften",!1,null)
D.aid=w([D.ad1,C.b2,D.a8I],x.p)
D.awP=new A.iA(C.ay,C.f,C.h,C.k,null,C.bz,null,0,D.aid,null)
D.ade=new A.aH(E.fS,18,C.j,null,null)
D.a8G=new A.e6("Bewertungsansatz MHD-Abschlag",!1,null)
D.ai7=w([D.ade,C.b2,D.a8G],x.p)
D.awT=new A.iA(C.ay,C.f,C.h,C.k,null,C.bz,null,0,D.ai7,null)
D.ax6=new A.fi("Steuern","Anlagen zum Jahresabschluss",null,null)
D.axe=new A.fi("Verwaltung","Betriebsprotokolle",null,null)
D.azu=new A.cI(16,16,C.C8,null)
D.azA=new A.cI(null,48,null,null)
D.azD=new A.oM(0,"action")
D.aGJ=new A.ab("F\xfcr dieses Dokument ist noch keine Version hochgeladen.",null,null,null,null,null,null,null,null,null)
D.azO=new A.dG(D.aGJ,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHt=new A.ab("Signiertes PDF wird ge\xf6ffnet \u2026",null,null,null,null,null,null,null,null,null)
D.azT=new A.dG(D.aHt,null,null,null,null,null,null,null,null,null,null,null,null,C.kV,!1,null,null,null,C.n,null)
D.aFQ=new A.ab("Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azV=new A.dG(D.aFQ,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aFV=new A.ab("Bitte einen Betrag \xfcber null angeben.",null,null,null,null,null,null,null,null,null)
D.YR=new A.dG(D.aFV,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHG=new A.ab("Einladung versendet.",null,null,null,null,null,null,null,null,null)
D.azY=new A.dG(D.aHG,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aG2=new A.ab("Anlass und eine Strecke \xfcber null sind n\xf6tig.",null,null,null,null,null,null,null,null,null)
D.YS=new A.dG(D.aG2,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aGY=new A.ab("Eintrag gespeichert.",null,null,null,null,null,null,null,null,null)
D.aA_=new A.dG(D.aGY,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHS=new A.ab("Speichern fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null,null,null)
D.aA0=new A.dG(D.aHS,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHl=new A.ab("Format nicht direkt anzeigbar \u2014 Datei wurde heruntergeladen. Tipp: k\xfcnftige Versionen als PDF hochladen f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null,null,null)
D.a77=new A.bH(5e6)
D.aA2=new A.dG(D.aHl,null,null,null,null,null,null,null,null,null,null,null,null,D.a77,!1,null,null,null,C.n,null)
D.aHn=new A.ab('Keine Mitarbeiter angelegt \u2014 zuerst \xfcber \u201eMitarbeiter" einladen.',null,null,null,null,null,null,null,null,null)
D.aA6=new A.dG(D.aHn,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aI7=new A.ab("Der Stand am 31.12. kann nicht kleiner sein als der am 01.01.",null,null,null,null,null,null,null,null,null)
D.aA8=new A.dG(D.aI7,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aAm=new A.j5("l\xe4uft bald",C.ka,null,null)
D.aAn=new A.j5("g\xfcltig",C.fB,null,null)
D.aAo=new A.j5("abgelaufen",C.mi,null,null)
D.aAp=new A.j5("Vorlage",C.ka,null,null)
D.aAK=new B.wh(0,"top")
D.Z4=new B.wh(1,"middle")
D.aAL=new B.wh(2,"bottom")
D.aAM=new B.wh(3,"baseline")
D.Z5=new B.wh(4,"fill")
D.aAN=new B.wh(5,"intrinsicHeight")
D.aAO=new B.Sh(null)
D.aAP=new B.adF(null)
D.aB8=new A.iE(2,!0,!1)
D.aB9=new A.iE(2,!0,!0)
D.aCV=new A.O(!0,C.m,null,null,null,null,11,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBn=new A.O(!0,C.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFy=new A.ab("Nachweis",null,D.aBn,null,null,null,null,null,null,null)
D.aFB=new A.ab("MHD gepr\xfcft",null,null,null,null,null,null,null,null,null)
D.aEn=new A.O(!0,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Zm=new A.ab("Streichen",null,D.aEn,null,null,null,null,null,null,null)
D.aFG=new A.ab("In Bearbeitung",null,null,null,null,null,null,null,null,null)
D.aFJ=new A.ab("setzen",null,null,null,null,null,null,null,null,null)
D.aFR=new A.ab("Provider anlegen",null,null,null,null,null,null,null,null,null)
D.aFX=new A.ab("Bild hochladen",null,null,null,null,null,null,null,null,null)
D.aGb=new A.ab("PDF konnte nicht ge\xf6ffnet werden.",null,null,null,null,null,null,null,null,null)
D.aGc=new A.ab("Betriebliche Fahrt",null,null,null,null,null,null,null,null,null)
D.Al=new A.ab("Einladen",null,null,null,null,null,null,null,null,null)
D.aGo=new A.ab("Als bearbeitet markieren",null,null,null,null,null,null,null,null,null)
D.aGp=new A.ab("Fahrt",null,null,null,null,null,null,null,null,null)
D.aGq=new A.ab("CSV herunterladen (b2b_customers.csv)",null,null,null,null,null,null,null,null,null)
D.aGs=new A.ab("Ablehnung begr\xfcnden",null,null,null,null,null,null,null,null,null)
D.aGt=new A.ab("Freigeben",null,null,null,null,null,null,null,null,null)
D.aGx=new A.ab("Datens\xe4tze laden",null,null,null,null,null,null,null,null,null)
D.aGA=new A.ab("Fahrt korrigieren",null,null,null,null,null,null,null,null,null)
D.aGB=new A.ab("Kosten erfassen",null,null,null,null,null,null,null,null,null)
D.Zo=new A.ab("Anlegen",null,null,null,null,null,null,null,null,null)
D.aH0=new A.ab("Aus DocuSign holen",null,null,null,null,null,null,null,null,null)
D.aHi=new A.ab("\xe4ndern",null,null,null,null,null,null,null,null,null)
D.aHx=new A.ab("Buchen",null,null,null,null,null,null,null,null,null)
D.aHC=new A.ab("Bild nicht geladen",null,null,null,null,null,null,null,null,null)
D.aHD=new A.ab("Kilometerst\xe4nde",null,null,null,null,null,null,null,null,null)
D.aHK=new A.ab("Mitarbeiter zur Signatur einladen",null,null,null,null,null,null,null,null,null)
D.aHP=new A.ab("Neues Dokument",null,null,null,null,null,null,null,null,null)
D.aHQ=new A.ab("Zeitraum",null,null,null,null,null,null,null,null,null)
D.aHR=new A.ab("Kostenposition korrigieren",null,null,null,null,null,null,null,null,null)
D.Zr=new A.ab("Erledigt",null,null,null,null,null,null,null,null,null)
D.aHW=new A.ab("Registrieren",null,null,null,null,null,null,null,null,null)
D.Zs=new A.ab("Neu",null,null,null,null,null,null,null,null,null)
D.Zt=new A.ab("Hinzuf\xfcgen",null,null,null,null,null,null,null,null,null)
D.aIa=new A.ab("Slot anlegen / bearbeiten",null,null,null,null,null,null,null,null,null)
D.aId=new A.ab("Ger\xe4t registrieren",null,null,null,null,null,null,null,null,null)
D.aIi=new A.ab("Inventur berechnen",null,null,null,null,null,null,null,null,null)
D.aMb=new B.Bq(null)
D.hC=new B.b6v(0,"flat")
D.aMl=new B.Bt(null)
D.aMu=new B.aji(null)
D.aMC=new B.BA(null)
D.aMD=new B.ajE(null)
D.aMI=new B.BB(null)
D.a9R=new A.a7(58090,"MaterialIcons",null,!1)
D.aMS=new B.tP(D.a9R,"Automat w\xe4hlen, um die Slot-Belegung zu bearbeiten.",null)
D.aaN=new A.a7(61653,"MaterialIcons",null,!1)
D.aMT=new B.tP(D.aaN,"F\xfcr diesen Automaten sind noch keine Slots konfiguriert.",null)
D.aaE=new A.a7(61364,"MaterialIcons",null,!1)
D.aMU=new B.tP(D.aaE,"Noch kein IoT-Ger\xe4t verkn\xfcpft. Registriere das Gateway eines Automaten mit seiner externen Serien-Nummer beim jeweiligen Provider.",null)
D.a9F=new A.a7(57630,"MaterialIcons",null,!1)
D.aMV=new B.tP(D.a9F,'Noch kein Telemetrie-Provider registriert. Lege einen an (z. B. \u201eCleverMetrics-Prod") und trage seinen Webhook-Endpoint bei uns hinterlegten HMAC-Secret ein.',null)
D.aaf=new A.a7(58743,"MaterialIcons",null,!1)
D.aMW=new B.tP(D.aaf,"Noch keine Telemetrie-Daten empfangen. Automat mit IoT-Modul verkn\xfcpfen und Webhook des Anbieters auf /iot-webhook zeigen lassen.",null)
D.aMX=new B.akj(null)
D.a9S=new A.a7(58134,"MaterialIcons",null,!1)
D.aMY=new B.tP(D.a9S,"Noch keine Telemetrie-Events empfangen.",null)
D.aMZ=new B.akp(null)
D.aNv=new B.BK(null)
D.aNO=new B.BT(null)
D.a_6=new B.In(null)
D.aO4=new B.amK(null)
D.aO5=new B.BX(null)
D.aOh=new B.ana(null)
D.aOE=new B.fF("Zu signieren","Belehrungen & Nachweise",D.ET,C.T3,!0,null,null,null,null)
D.aOJ=new B.anM(null)
D.aOU=new B.C7(null)
D.aOV=new B.aoU(null)
D.aPg=new B.Ci(null)
D.aPh=new B.Ya(null)
D.aPq=new B.Cu(null)})();(function staticFields(){$.bIR=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cgn","bCZ",()=>A.ib(new B.bvn(),x.Z))
w($,"cf8","bw4",()=>A.Nk(new B.bsY(),x.C))
w($,"cge","bCX",()=>A.Nk(new B.buJ(),x.D))
w($,"cfE","bwb",()=>C.aM.yv(0,new B.btS(),x.e,x.N))
w($,"cgf","avU",()=>C.aM.yv(0,new B.buM(),x.D,A.at("Al")))
w($,"cfG","bwc",()=>A.b_w(B.c6C(),x.M,A.at("bd<~>")))
w($,"ccO","bvT",()=>A.ib(new B.br3(),x.u))
w($,"ccN","bvS",()=>C.aM.$1$1(new B.br2(),x.D))
w($,"cd3","K0",()=>C.aM.$1$1(new B.brr(),x.D))
w($,"cde","bvU",()=>C.aM.$1$1(new B.brE(),x.D))
w($,"ceg","bCq",()=>C.aM.yv(0,new B.bst(),x.D,x.N))
w($,"ce5","bCp",()=>C.aM.$1$1(new B.bsi(),x.D))
w($,"cdk","bCc",()=>C.aM.$1$1(new B.brL(),x.D))
w($,"ce6","bvZ",()=>C.aM.$1$1(new B.bsj(),x.D))
w($,"cd2","bC9",()=>C.aM.$1$1(new B.brp(),x.D))
w($,"cd6","bCa",()=>C.aM.$1$1(new B.brw(),x.D))
w($,"c8T","bMy",()=>A.bZI())})()};
(a=>{a["4O6QaF/KKpcy+dWRD0c499ZCZII="]=a.current})($__dart_deferred_initializers__);