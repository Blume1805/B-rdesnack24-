((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,E,B={wl:function wl(d){this.a=d},bw0:function bw0(){},v7:function v7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},EC:function EC(d,e,f){this.c=d
this.d=e
this.a=f},alM:function alM(d,e){this.c=d
this.a=e},
bWu(d,e,f,g,h,i,j,k){return new B.P8(f,j,e,k,d,i,g,h,null)},
P8:function P8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
btB:function btB(){},
bW6(d){return new B.zz(d,new A.iy(x.aA),C.dM)},
bvm:function bvm(){},
buv:function buv(){},
Ar:function Ar(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bvp:function bvp(){},
zz:function zz(d,e,f){this.r=d
this.a=e
this.f=f},
aLI:function aLI(d,e,f){this.a=d
this.b=e
this.c=f},
aLJ:function aLJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLK:function aLK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGU(){return new B.zA(null)},
zA:function zA(d){this.a=d},
aLP:function aLP(){},
aLO:function aLO(){},
aLN:function aLN(d){this.a=d},
aLM:function aLM(){},
anC:function anC(d,e){this.c=d
this.a=e},
bhY:function bhY(d){this.a=d},
bhX:function bhX(d,e){this.a=d
this.b=e},
bhW:function bhW(d){this.a=d},
akE:function akE(d){this.a=d},
fI:function fI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ajC:function ajC(d){this.a=d},
bBG(a8,a9,b0,b1,b2,b3){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$bBG=A.m(function(b4,b5){if(b4===1)return A.n(b5,v)
for(;;)switch(w){case 0:a5=a9.h(0,"jahr")
a6=x.g
a7=a6.a(a9.h(0,"fahrzeuge"))
if(a7==null)a7=C.bn
u=x.P
t=J.cG(a7,u)
a7=a6.a(a9.h(0,"fahrten"))
s=J.cG(a7==null?C.bn:a7,u)
r=B.JO(a9.h(0,"nutzungseinlage"))
q=C.d.a0(B.JO(a9.h(0,"fahrten_ohne_satz")))
p=a8!=null&&a8.length!==0
a7=A.i(a5)
o=A.i(a5)
n=B.bAG(b0)
m=B.bAG(b2)
l=B.bAG(b3)
k=A.i(a5)
j=A.i(a5)
i=Date.now()
i='<!doctype html><html lang="de"><head><meta charset="utf-8">'+("<title>Anlage PKW-Kosten "+a7+"</title>")+'<style>  /* Oben randlos NUR auf der ersten Seite: Dort sitzt der Gold-Balken b\xfcndig\n     am Papierrand. Stand hier vorher ohne die Ausnahme, und damit begann\n     auch jede Folgeseite an der Papierkante. Bislang unauff\xe4llig, weil die\n     Anlage auf eine Seite passt \u2014 beim Bildregister, das umbricht, standen\n     die Unterschriftsfelder dadurch oben angeschnitten. Dieselbe Ursache,\n     also hier gleich mit behoben, bevor die Fahrtentabelle lang genug wird. */\n  @page { size: A4 portrait; margin: 18mm 25mm; }\n  @page :first { margin-top: 0; }\n  * { box-sizing: border-box; }\n  body { font-family: Arial, "Liberation Sans", -apple-system,\n                      "Segoe UI", Roboto, sans-serif;\n         color: #14110E; margin: 0; padding: 0; font-size: 10pt; }\n\n  /* Gold-Balken \xfcber der Breite des Satzspiegels, NICHT randabfallend.\n     Der FIFO-Report zieht ihn \xfcber negative R\xe4nder bis an den Papierrand;\n     im Druck beschneidet Chrome das am Seitenrand, und \xfcbrig blieb ein\n     Balken, der willk\xfcrlich k\xfcrzer war als der Text darunter. Am echten\n     PDF nachgesehen, nicht vermutet. \xdcber den Satzspiegel gezogen sitzt er\n     in jeder Druck-Engine gleich. */\n  .topbar { height: 4mm; background: #FDC102; margin: 0 0 7mm;\n            border-radius: 1pt; }\n  .wrap { max-width: 100%; }\n  .brand { font-weight: 900; letter-spacing: 2px; font-size: 10pt;\n           margin-bottom: 8pt; }\n\n  .head { display: flex; justify-content: space-between;\n          align-items: flex-end; gap: 12mm;\n          border-bottom: 1.5pt solid #FDC102; padding-bottom: 6pt; }\n  h1 { margin: 0 0 4pt 0; font-size: 15pt; font-weight: 800;\n       letter-spacing: 0.2px; color: #B8860B; }\n  .stammdaten { font-size: 9pt; color: #6f6a5b; margin: 0; line-height: 1.45; }\n  /* Kein `nowrap`: Die l\xe4ngste Zeile hing sonst am rechten Rand. Der Block\n     bleibt linksb\xfcndig, damit alle Werte an derselben Kante beginnen. */\n  .meta { font-size: 8.5pt; color: #6f6a5b; text-align: left;\n          max-width: 74mm; line-height: 1.45; }\n  .meta > div { display: flex; gap: 2.5mm; margin-bottom: 1pt; }\n  .meta .meta-label { flex: 0 0 18mm; color: #14110E; font-weight: 700; }\n\n  h2 { font-size: 11pt; margin: 14pt 0 4pt 0; color: #14110E;\n       font-weight: 800;\n       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }\n\n  table { width: 100%; border-collapse: collapse; margin-top: 4pt; }\n  th, td { padding: 3.5pt 6pt; text-align: left;\n           border-bottom: 1pt solid #E8E2D6; vertical-align: top; }\n  thead th { background: #14110E; color: #F9F5EC; font-weight: 700;\n             font-size: 9pt; border-bottom: none; }\n  /* Kopf wiederholen, wenn eine Tabelle umbricht. */\n  thead { display: table-header-group; }\n  tr { page-break-inside: avoid; }\n  .l { text-align: left; }\n  .c { text-align: center; }\n  .r { text-align: right; white-space: nowrap; }\n  .klein { font-weight: 400; font-size: 7.5pt; color: #C9C4BC; }\n  .summe td { background: #FFF5CC; font-weight: 800;\n              border-top: 1pt solid #14110E;\n              border-bottom: 1pt solid #14110E; }\n  .leer { color: #6f6a5b; font-style: italic; }\n\n  /* Hinweise: grau, kursiv, zwei Punkt kleiner als der Fliesstext. */\n  .hinweis { font-size: 8pt; color: #595959; font-style: italic;\n             margin: 5pt 0 0 0; line-height: 1.4; }\n  .warnung { font-size: 9pt; color: #B2311C; font-weight: 700;\n             margin: 6pt 0 0 0; }\n\n  /* Freigabe-Stempel, Form wie im FIFO-Report. */\n  section.stamp { margin: 10pt 0 2pt 0; padding: 6pt 10pt;\n                  border: 1pt solid #5C9A3F; border-radius: 6pt;\n                  background: #EEF6E8; }\n  section.stamp .stamp-badge { display: inline-block; font-weight: 800;\n                               letter-spacing: 1px; color: #3E7A25;\n                               font-size: 11pt; }\n  section.stamp .stamp-note { color: #14110E; font-size: 9pt;\n                              margin-top: 2pt; }\n\n  /* Unterschriften mit Vorlauf, damit von Hand gezeichnet werden kann. */\n  .unterschriften { display: flex; gap: 18mm; margin-top: 18mm;\n                    page-break-inside: avoid; }\n  .feld { flex: 1; }\n  .sig-box { height: 22mm; border: 1pt solid #E8E2D6; border-radius: 6pt;\n             background: #FAF6ED; padding: 5pt; display: flex;\n             align-items: flex-end; }\n  .signatur { max-height: 18mm; max-width: 100%; object-fit: contain; }\n  .linie { border-bottom: 1pt solid #14110E; height: 0; margin-top: 3pt; }\n  .name { font-size: 9.5pt; font-weight: 700; margin-top: 3pt; }\n  .rolle { font-size: 8pt; color: #6f6a5b; }\n\n  .fuss { font-size: 7.5pt; color: #6f6a5b; margin-top: 12mm;\n          border-top: 1pt solid #E8E2D6; padding-top: 4pt; }\n</style></head><body onload="window.print()"><div class="topbar"></div><div class="wrap"><div class="brand">B\xd6RDESNACK24</div><div class="head"><div>'+("<h1>Anlage zur Ermittlung der individuellen PKW-Kosten "+o+"</h1>")+'<p class="stammdaten">'+(n+"<br>")+("Steuernummer: "+m+"<br>")+("USt-IdNr.: "+l)+'</p></div><div class="meta">'+('<div><span class="meta-label">Zeitraum</span>01.01.'+k+" bis 31.12."+j+"</div>")+'<div><span class="meta-label">Ermittlung</span>Bruttokosten je gefahrenem Kilometer</div>'+('<div><span class="meta-label">Erstellt am</span>'+$.dp().am(new A.b_(i,0,!1))+"</div>")+"</div></div>"
a7=(p?i+'<section class="stamp"><span class="stamp-badge">FREIGEGEBEN</span><div class="stamp-note">Von beiden Gesellschaftern signiert und freigegeben. Korrekturen sind f\xfcr dieses Jahr gesperrt.</div></section>':i)+'<h2>Fahrzeugkosten und Satz je Kilometer</h2><table><thead><tr><th class="l">Position</th>'
for(o=t.$ti,n=o.i("aK<ag.E>"),m=new A.aK(t,t.gp(0),n),o=o.i("ag.E");m.t();){l=m.d
l=A.i(J.a_(l==null?o.a(l):l,"kennzeichen"))
l=A.ay(l,"&","&amp;")
l=A.ay(l,"<","&lt;")
l=A.ay(l,">","&gt;")
a7+='<th class="r">'+A.ay(l,'"',"&quot;")+"</th>"}a7+="</tr></thead><tbody>"
for(h=0;h<8;++h){g=D.ahE[h]
m=A.ay(g.b,"&","&amp;")
m=A.ay(m,"<","&lt;")
m=A.ay(m,">","&gt;")
a7+='<tr><td class="l">'+A.ay(m,'"',"&quot;")+"</td>"
for(m=new A.aK(t,t.gp(0),n);m.t();){l=m.d
l=a6.a(J.a_(l==null?o.a(l):l,"kosten"))
f=J.cG(l==null?C.bn:l,u)
e=new A.bd(f,new B.bv8(g),f.$ti.i("bd<ag.E>")).fn(0,0,new B.bv9())
a7+='<td class="r">'+(e===0?"\u2014":$.d3().am(e))+"</td>"}a7+="</tr>"}a6=a7+'<tr class="summe"><td class="l">Gesamtkosten (brutto)</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();a6=u){u=a7.d
u=B.JO(J.a_(u==null?o.a(u):u,"gesamtkosten"))
u=a6+('<td class="r">'+$.d3().am(u)+"</td>")}a6+='</tr><tr><td class="l">Kilometerstand 01.01.</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bsy(J.a_(u==null?o.a(u):u,"km_stand_anfang"))+"</td>"}a6+='</tr><tr><td class="l">Kilometerstand 31.12.</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bsy(J.a_(u==null?o.a(u):u,"km_stand_ende"))+"</td>"}a6+='</tr><tr><td class="l">Gefahrene Kilometer</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bsy(J.a_(u==null?o.a(u):u,"km_gefahren"))+"</td>"}a6+='</tr><tr class="summe"><td class="l">Kosten je Kilometer</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bLq(J.a_(u==null?o.a(u):u,"satz_je_km"))+"</td>"}a7=t.a
u=J.V(a7)
a6=a6+'</tr></tbody></table><p class="hinweis">Der Satz je Kilometer ergibt sich aus den Gesamtkosten geteilt durch die in diesem Jahr gefahrenen Kilometer. Die Betr\xe4ge sind Bruttobetr\xe4ge: Bei einem privaten Fahrzeug besteht kein Vorsteuerabzug, die Umsatzsteuer geh\xf6rt damit zu den tats\xe4chlich getragenen Kosten.</p><h2>Betrieblich gefahrene Strecken</h2><table class="fahrten"><thead><tr><th class="l" rowspan="2">Datum</th><th class="l" rowspan="2">Anlass der Fahrt</th><th class="r" rowspan="2">Kilometer<br><span class="klein">Hin- und R\xfcckweg</span></th>'+('<th class="c" colspan="'+u.gp(a7)+'">Kosten je Kilometer</th>')+'<th class="r" rowspan="2">Betrag</th></tr><tr>'
for(m=new A.aK(t,t.gp(0),n);m.t();){l=m.d
l=A.i(J.a_(l==null?o.a(l):l,"kennzeichen"))
l=A.ay(l,"&","&amp;")
l=A.ay(l,"<","&lt;")
l=A.ay(l,">","&gt;")
a6+='<th class="r">'+A.ay(l,'"',"&quot;")+"</th>"}a6+="</tr></thead><tbody>"
if(s.gp(0)===0)a6+='<tr><td class="l leer" colspan="'+(4+u.gp(a7))+'">F\xfcr '+A.i(a5)+" ist keine betriebliche Fahrt erfasst.</td></tr>"
for(m=s.$ti,l=new A.aK(s,s.gp(0),m.i("aK<ag.E>")),m=m.i("ag.E");l.t();a6=k){k=l.d
if(k==null)k=m.a(k)
j=J.V(k)
i=j.h(k,"fahrt_datum")
d=A.eT(A.i(i==null?"":i))
i=d==null?"":$.dp().am(d)
a0=j.h(k,"anlass")
a0=A.i(a0==null?"":a0)
a0=A.ay(a0,"&","&amp;")
a0=A.ay(a0,"<","&lt;")
a0=A.ay(a0,">","&gt;")
a6=a6+"<tr>"+('<td class="l">'+i+"</td>")+('<td class="l">'+A.ay(a0,'"',"&quot;")+"</td>")+('<td class="r">'+B.bsy(j.h(k,"kilometer"))+"</td>")
for(i=new A.aK(t,t.gp(0),n);i.t();){a0=i.d
a6+='<td class="r">'+(J.d(J.a_(a0==null?o.a(a0):a0,"id"),j.h(k,"pkw_id"))?B.bLq(j.h(k,"satz_je_km")):"")+"</td>"}k=j.h(k,"betrag")
if(k==null)k="\u2014"
else{k=B.JO(k)
k=$.d3().am(k)}k=a6+('<td class="r">'+k+"</td></tr>")}a6=a6+('<tr class="summe"><td class="l" colspan="'+(3+u.gp(a7))+'">Nutzungseinlage</td>')+('<td class="r">'+$.d3().am(r)+"</td></tr>")+"</tbody></table>"
if(q>0){a7=q===1?"":"en"
a7=a6+('<p class="warnung">'+q+" Fahrt"+a7+" ohne Kilometersatz: F\xfcr das betreffende Fahrzeug fehlen Kilometerst\xe4nde oder Kosten. Diese Fahrten sind in der Summe nicht enthalten.</p>")
a6=a7}a6+='<div class="unterschriften">'
for(a7=b1.length,h=0;h<b1.length;b1.length===a7||(0,A.G)(b1),++h){a1=b1[h]
u=J.V(a1)
o=u.h(a1,"full_name")
a2=A.i(o==null?"":o)
u=u.h(a1,"role_label")
a3=A.i(u==null?"":u)
a4=p?B.c1U(a8,a2):null
if(a4==null)u=""
else{u=A.ay(a4,"&","&amp;")
u=A.ay(u,"<","&lt;")
u=A.ay(u,">","&gt;")
u='<img class="signatur" src="'+A.ay(u,'"',"&quot;")+'" alt="">'}o=A.ay(a2,"&","&amp;")
o=A.ay(o,"<","&lt;")
o=A.ay(o,">","&gt;")
o=A.ay(o,'"',"&quot;")
n=A.ay(a3,"&","&amp;")
n=A.ay(n,"<","&lt;")
n=A.ay(n,">","&gt;")
a6=a6+'<div class="feld"><div class="sig-box">'+u+'</div><div class="linie"></div>'+('<div class="name">'+o+"</div>")+('<div class="rolle">'+A.ay(n,'"',"&quot;")+"</div>")+"</div>"}a6+='</div><p class="fuss">Die Betr\xe4ge beruhen auf den in der App erfassten Kosten, Kilometerst\xe4nden und Fahrten der B\xf6rdesnack24 GbR. Alle Angaben brutto.</p></div></body></html>'
a6=(self.URL||self.webkitURL).createObjectURL(B.bxi([a6.charCodeAt(0)==0?a6:a6],"text/html"))
a6.toString
a7=window
a7.toString
C.a__.ahI(a7,a6,"_blank")
return A.o(null,v)}})
return A.p($async$bBG,v)},
c1U(d,e){var w,v,u,t,s
if(d==null)return null
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.G)(d),++v){u=d[v]
t=u.h(0,"full_name")
if(A.i(t==null?"":t)===e){t=u.h(0,"signature_url")
s=A.i(t==null?"":t)
if(s.length!==0)return s}}return null},
JO(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fW(J.am(d))
return w==null?0:w},
bsy(d){var w,v,u
if(d==null)return"\u2014"
w=B.JO(d)
if(w===C.d.qT(w))v=C.e.j(C.d.aP(w))
else{u=C.d.ae(w,1)
v=A.ay(u,".",",")}return v+" km"},
bLq(d){var w
if(d==null)return"\u2014"
w=C.d.ae(B.JO(d),4)
return A.ay(w,".",",")+" \u20ac"},
bAG(d){var w=A.ay(d,"&","&amp;")
w=A.ay(w,"<","&lt;")
w=A.ay(w,">","&gt;")
return A.ay(w,'"',"&quot;")},
bv8:function bv8(d){this.a=d},
bv9:function bv9(){},
uj(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fW(J.am(d))
return w==null?0:w},
c4f(d){var w
if(d==null)w="\u2014"
else{w=C.d.ae(B.uj(d),4)
w=A.ay(w,".",",")+" \u20ac"}return w},
bsz(d){var w,v,u
if(d==null)return"\u2014"
w=B.uj(d)
if(w===C.d.qT(w))v=C.e.j(C.d.aP(w))
else{u=C.d.ae(w,1)
v=A.ay(u,".",",")}return v+" km"},
btf(d){return J.d(d==null?null:d.h(0,"gesperrt"),!0)},
avz(d,e){var w=null,v=J.am(e),u=C.c.n(v,"freigegeben und unterschrieben"),t=d.O(x.q).f,s=A.j(u?"Diese Anlage ist freigegeben und unterschrieben. Korrekturen sind nicht mehr m\xf6glich.":"Speichern fehlgeschlagen: "+v,w,w,w,w,w,w,w)
t.b2(A.c5(w,w,w,w,w,C.n,w,s,w,A.e6(0,0,0,u?6:4),w,w,w,w,w,w,w,w,w,w))},
xC:function xC(d){this.a=d},
Tz:function Tz(d){var _=this
_.w=$
_.x=null
_.y=d
_.z=!1
_.Q=null
_.d=$
_.c=_.a=null},
b3Y:function b3Y(d,e){this.a=d
this.b=e},
b3Z:function b3Z(d){this.a=d},
b4_:function b4_(d){this.a=d},
b3U:function b3U(d){this.a=d},
b3X:function b3X(d){this.a=d},
b3V:function b3V(d){this.a=d},
b3W:function b3W(d){this.a=d},
amH:function amH(d,e,f){this.c=d
this.d=e
this.a=f},
bg8:function bg8(d,e){this.a=d
this.b=e},
akS:function akS(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
akR:function akR(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
bch:function bch(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bci:function bci(d,e,f){this.a=d
this.b=e
this.c=f},
bcj:function bcj(d,e,f){this.a=d
this.b=e
this.c=f},
bca:function bca(d,e,f){this.a=d
this.b=e
this.c=f},
bc9:function bc9(d,e,f){this.a=d
this.b=e
this.c=f},
bc5:function bc5(d,e){this.a=d
this.b=e},
bc4:function bc4(d,e){this.a=d
this.b=e},
bc6:function bc6(d){this.a=d},
bc7:function bc7(d){this.a=d},
bc8:function bc8(d){this.a=d},
bc3:function bc3(d,e,f){this.a=d
this.b=e
this.c=f},
bc1:function bc1(d){this.a=d},
bc2:function bc2(d){this.a=d},
bcg:function bcg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcf:function bcf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcc:function bcc(d,e){this.a=d
this.b=e},
bcb:function bcb(d,e){this.a=d
this.b=e},
bcd:function bcd(d){this.a=d},
bce:function bce(d){this.a=d},
akQ:function akQ(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
bc_:function bc_(d,e,f){this.a=d
this.b=e
this.c=f},
bc0:function bc0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbR:function bbR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbQ:function bbQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbL:function bbL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbM:function bbM(d,e){this.a=d
this.b=e},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbN:function bbN(d){this.a=d},
bbO:function bbO(d){this.a=d},
bbP:function bbP(d){this.a=d},
bbZ:function bbZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbY:function bbY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbU:function bbU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbT:function bbT(d,e){this.a=d
this.b=e},
bbV:function bbV(d,e){this.a=d
this.b=e},
bbS:function bbS(d,e){this.a=d
this.b=e},
bbW:function bbW(d){this.a=d},
bbX:function bbX(d){this.a=d},
atI:function atI(d,e){this.c=d
this.a=e},
bqC:function bqC(){},
bqD:function bqD(){},
amI:function amI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
arR:function arR(d,e,f){this.c=d
this.d=e
this.a=f},
boF:function boF(){},
boG:function boG(){},
CE:function CE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aiz:function aiz(d,e,f){this.c=d
this.d=e
this.a=f},
VL:function VL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0u:function a0u(d){this.a=d},
awN:function awN(d){this.a=d},
awM:function awM(){},
brF:function brF(){},
brE:function brE(){},
a4V:function a4V(d){this.a=d},
aCx:function aCx(){},
aCw:function aCw(){},
aCv:function aCv(d){this.a=d},
aCu:function aCu(d){this.a=d},
akD:function akD(d){this.a=d},
ahq:function ahq(d,e){this.e=d
this.a=e},
b4a:function b4a(){},
b49:function b49(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b47:function b47(d,e,f){this.a=d
this.b=e
this.c=f},
b48:function b48(d,e,f){this.a=d
this.b=e
this.c=f},
b46:function b46(d){this.a=d},
b44:function b44(d,e){this.a=d
this.b=e},
b42:function b42(d){this.a=d},
b43:function b43(d,e){this.a=d
this.b=e},
b45:function b45(){},
Co:function Co(d){this.a=d},
Ym:function Ym(){var _=this
_.w=null
_.x=!0
_.y=!1
_.z=null
_.d=$
_.c=_.a=null},
bnS:function bnS(d,e){this.a=d
this.b=e},
bnT:function bnT(d,e){this.a=d
this.b=e},
bnX:function bnX(d){this.a=d},
bnY:function bnY(d,e,f){this.a=d
this.b=e
this.c=f},
bnZ:function bnZ(d,e){this.a=d
this.b=e},
bo_:function bo_(d){this.a=d},
bo0:function bo0(d){this.a=d},
bo1:function bo1(d){this.a=d},
bo2:function bo2(d){this.a=d},
bo3:function bo3(d,e){this.a=d
this.b=e},
bo4:function bo4(d){this.a=d},
bo8:function bo8(){},
bo9:function bo9(d){this.a=d},
boa:function boa(d){this.a=d},
ajK:function ajK(d,e){this.c=d
this.a=e},
KX:function KX(d){this.a=d},
TL:function TL(){var _=this
_.w=null
_.x=!1
_.d=$
_.c=_.a=null},
b4C:function b4C(d){this.a=d},
b4D:function b4D(d,e){this.a=d
this.b=e},
b4E:function b4E(d){this.a=d},
Lm:function Lm(d){this.a=d},
U4:function U4(){var _=this
_.d=_.w=$
_.c=_.a=null},
b6c:function b6c(d){this.a=d},
b6b:function b6b(){},
b6h:function b6h(d){this.a=d},
b6d:function b6d(d){this.a=d},
b6g:function b6g(d){this.a=d},
b6e:function b6e(){},
b6f:function b6f(d,e){this.a=d
this.b=e},
aim:function aim(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1I:function a1I(d){this.a=d},
azh:function azh(){},
azg:function azg(){},
azi:function azi(){},
azf:function azf(){},
Bv:function Bv(d){this.a=d},
U7:function U7(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
b6l:function b6l(d){this.a=d},
b6k:function b6k(d,e){this.a=d
this.b=e},
b6m:function b6m(){},
a23:function a23(d){this.a=d},
azV:function azV(){},
azU:function azU(){},
azW:function azW(){},
azT:function azT(){},
By:function By(d){this.a=d},
Ui:function Ui(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.Q="exterior"
_.as=null
_.d=$
_.c=_.a=null},
b78:function b78(d){this.a=d},
b77:function b77(d,e){this.a=d
this.b=e},
b79:function b79(d){this.a=d},
b76:function b76(d,e){this.a=d
this.b=e},
b7a:function b7a(d){this.a=d},
c05(d){switch(d){case"not_received":return new A.jR(C.EW,"Produkt nicht erhalten")
case"damaged":return new A.jR(C.EI,"Produkt besch\xe4digt")
case"wrong_product":return new A.jR(C.EY,"Falsches Produkt")
default:return new A.jR(C.y3,"Sonstiges")}},
c06(d){switch(d){case"in_progress":return new A.p7(C.cC,"IN BEARBEITUNG")
case"resolved":return new A.p7(C.aE,"ERLEDIGT")
case"rejected":return new A.p7(C.an,"ABGELEHNT")
default:return new A.p7(C.j,"OFFEN")}},
LW:function LW(d){this.a=d},
Uk:function Uk(){var _=this
_.d=_.w=$
_.c=_.a=null},
b7m:function b7m(d,e){this.a=d
this.b=e},
b7k:function b7k(d){this.a=d},
b7l:function b7l(d){this.a=d},
b7n:function b7n(d){this.a=d},
b7s:function b7s(d){this.a=d},
b7r:function b7r(d){this.a=d},
b7o:function b7o(d){this.a=d},
b7q:function b7q(){},
b7p:function b7p(d,e){this.a=d
this.b=e},
HQ:function HQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b7h:function b7h(d){this.a=d},
b7i:function b7i(d){this.a=d},
b7j:function b7j(d){this.a=d},
a4U:function a4U(d){this.a=d},
aCs:function aCs(){},
aCr:function aCr(){},
aCt:function aCt(){},
aCq:function aCq(){},
BG:function BG(d){this.a=d},
V_:function V_(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.as="mhd"
_.ax=_.at=null
_.d=$
_.c=_.a=null},
bab:function bab(d){this.a=d},
baa:function baa(d,e){this.a=d
this.b=e},
bac:function bac(d){this.a=d},
ba9:function ba9(d,e){this.a=d
this.b=e},
ba6:function ba6(d,e,f){this.a=d
this.b=e
this.c=f},
ba5:function ba5(d){this.a=d},
bad:function bad(){},
bae:function bae(){},
baf:function baf(){},
bag:function bag(d){this.a=d},
ba8:function ba8(d,e){this.a=d
this.b=e},
bah:function bah(d,e){this.a=d
this.b=e},
ba7:function ba7(d,e){this.a=d
this.b=e},
bai:function bai(d){this.a=d},
c3j(d){switch(d){case"description":return D.aaN
case"health_and_safety":return D.aaY
case"medical_information":return D.abF
case"cleaning_services":return C.yb
case"store":return D.abm
case"work":return C.EH
case"local_shipping":return D.ab4
case"build":return C.y9
case"shield":return C.o_
case"gavel":return C.yd
case"folder_open":return D.aaV
default:return C.yc}},
bs2:function bs2(){},
bs1:function bs1(d){this.a=d},
bsf:function bsf(){},
bt4:function bt4(){},
ME:function ME(d){this.a=d},
akc:function akc(){var _=this
_.w=""
_.x=null
_.y=!1
_.d=$
_.c=_.a=null},
bb2:function bb2(d){this.a=d},
baZ:function baZ(){},
bb_:function bb_(){},
bb0:function bb0(d,e){this.a=d
this.b=e},
bb1:function bb1(d,e){this.a=d
this.b=e},
baE:function baE(){},
baF:function baF(){},
baH:function baH(){},
baG:function baG(){},
baD:function baD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baC:function baC(){},
baB:function baB(){},
baA:function baA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bap:function bap(d){this.a=d},
baq:function baq(){},
bar:function bar(d){this.a=d},
baz:function baz(d){this.a=d},
bas:function bas(d){this.a=d},
bao:function bao(d,e){this.a=d
this.b=e},
bat:function bat(d){this.a=d},
ban:function ban(d,e){this.a=d
this.b=e},
bau:function bau(d,e,f){this.a=d
this.b=e
this.c=f},
bav:function bav(d,e,f){this.a=d
this.b=e
this.c=f},
baw:function baw(d,e,f){this.a=d
this.b=e
this.c=f},
bax:function bax(d,e,f){this.a=d
this.b=e
this.c=f},
bay:function bay(d,e,f){this.a=d
this.b=e
this.c=f},
baY:function baY(d,e){this.a=d
this.b=e},
baW:function baW(d){this.a=d},
baX:function baX(d){this.a=d},
baV:function baV(d,e){this.a=d
this.b=e},
baU:function baU(d,e){this.a=d
this.b=e},
baR:function baR(d,e,f){this.a=d
this.b=e
this.c=f},
baQ:function baQ(d,e,f){this.a=d
this.b=e
this.c=f},
baS:function baS(d){this.a=d},
baT:function baT(d){this.a=d},
baO:function baO(d){this.a=d},
baP:function baP(d){this.a=d},
baN:function baN(d,e,f){this.a=d
this.b=e
this.c=f},
baM:function baM(d,e,f){this.a=d
this.b=e
this.c=f},
baJ:function baJ(d,e){this.a=d
this.b=e},
baI:function baI(d,e){this.a=d
this.b=e},
baK:function baK(d){this.a=d},
baL:function baL(d){this.a=d},
aqZ:function aqZ(d,e){this.c=d
this.a=e},
alp:function alp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdm:function bdm(d){this.a=d},
bdn:function bdn(d,e){this.a=d
this.b=e},
alq:function alq(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdo:function bdo(){},
bdp:function bdp(d,e){this.a=d
this.b=e},
bdq:function bdq(d,e){this.a=d
this.b=e},
bdr:function bdr(d,e){this.a=d
this.b=e},
bds:function bds(d,e){this.a=d
this.b=e},
bdt:function bdt(d,e){this.a=d
this.b=e},
akb:function akb(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
bam:function bam(){},
bal:function bal(){},
bak:function bak(){},
art:function art(d,e){this.e=d
this.a=e},
bnO:function bnO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
akN:function akN(d,e){this.c=d
this.a=e},
c84(d){var w
A:{if("system_admin"===d){w="Administration"
break A}if("shareholder"===d){w="Gesellschafter"
break A}if("employee"===d){w="Mitarbeiter"
break A}w=d==null?"":d
break A}return w},
c8q(d){var w
A:{if("active"===d){w="aktiv"
break A}if("invited"===d){w="eingeladen"
break A}if("deactivated"===d){w="deaktiviert"
break A}w=d==null?"":d
break A}return w},
bsU:function bsU(){},
a54:function a54(d){this.a=d},
aEb:function aEb(d,e,f){this.a=d
this.b=e
this.c=f},
aEe:function aEe(){},
aEd:function aEd(){},
aEc:function aEc(){},
aEa:function aEa(){},
aE9:function aE9(d){this.a=d},
aE8:function aE8(){},
amx:function amx(d,e,f){this.a=d
this.b=e
this.c=f},
BY:function BY(d){this.a=d},
W1:function W1(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.c=_.a=null},
bfR:function bfR(){},
bfS:function bfS(d,e){this.a=d
this.b=e},
bfQ:function bfQ(d,e,f){this.a=d
this.b=e
this.c=f},
a5n:function a5n(d){this.a=d},
aFx:function aFx(){},
aFw:function aFw(){},
aFy:function aFy(){},
aFv:function aFv(){},
BP:function BP(d){this.a=d},
Vk:function Vk(d,e,f,g,h,i){var _=this
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
bcB:function bcB(d,e){this.a=d
this.b=e},
bcC:function bcC(d,e){this.a=d
this.b=e},
bcI:function bcI(d){this.a=d},
bcH:function bcH(d,e){this.a=d
this.b=e},
bcJ:function bcJ(d){this.a=d},
bcF:function bcF(d){this.a=d},
bcD:function bcD(d,e){this.a=d
this.b=e},
bcG:function bcG(){},
bcK:function bcK(){},
bcL:function bcL(){},
bcM:function bcM(){},
bcN:function bcN(){},
bcO:function bcO(d){this.a=d},
bcE:function bcE(d,e){this.a=d
this.b=e},
bva(e1,e2,e3,e4,e5,e6){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$bva=A.m(function(e7,e8){if(e7===1)return A.n(e8,v)
for(;;)switch(w){case 0:d8=x.N
d9=x.D
e0=A.z(d8,d9)
for(u=e4.$ti,t=new A.aK(e4,e4.gp(0),u.i("aK<ag.E>")),u=u.i("ag.E");t.t();){s=t.d
if(s==null)s=u.a(s)
r=J.a_(s,"product_id")
q=r==null?null:J.am(r)
if(q==null)q=""
J.e4(e0.cl(0,q,new B.bvb()),s)}p=A.z(d8,d9)
for(d8=J.cB(e3),d9=d8.gX(e3);d9.t();){u=d9.gN(d9)
t=J.a_(u,"product_id")
q=t==null?null:J.am(t)
if(q==null)q=""
J.e4(p.cl(0,q,new B.bvc()),u)}o=new B.bvj()
n=new B.bvh()
m=new B.bvf()
l=new B.bvg()
k=new A.di("")
for(d9=new A.e9(e0,e0.$ti.i("e9<1,2>")).gX(0);d9.t();){j=d9.d
i=j.b
u=J.V(i)
if(u.gZ(i))continue
t=J.a_(u.ga2(i),"product_name")
t=t==null?null:J.am(t)
if(t==null)t=""
t=A.ay(t,"&","&amp;")
t=A.ay(t,"<","&lt;")
h=A.ay(t,">","&gt;")
t=J.a_(u.ga2(i),"sku")
t=t==null?null:J.am(t)
if(t==null)t=""
t=A.ay(t,"&","&amp;")
t=A.ay(t,"<","&lt;")
g=A.ay(t,">","&gt;")
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
a3=a2==null?null:J.am(a2)
if(a3==null)a3=""
a2=A.b4(r.h(s,"quantity_delta"))
a4=a2==null?null:C.d.a0(a2)
if(a4==null)a4=0
if(a3==="refill")a5="in"
else a5=a3==="disposal"?"out":""
a2=A.i(m.$1(r.h(s,"occurred_at")))
a6=l.$1(a3)
a6=A.ay(a6,"&","&amp;")
a6=A.ay(a6,"<","&lt;")
a6=A.ay(a6,">","&gt;")
a7=A.i(a4>0?"+"+a4:a4)
if(r.h(s,"unit_cost")==null)a8="\u2014"
else{a8=A.fK(r.h(s,"unit_cost"))
a8=$.d3().am(a8)}a9=r.h(s,"invoice_number")
a9=a9==null?null:J.am(a9)
if(a9==null)a9="\u2014"
a9=A.ay(a9,"&","&amp;")
a9=A.ay(a9,"<","&lt;")
a9=A.ay(a9,">","&gt;")
b0=A.i(m.$1(r.h(s,"invoice_date")))
b1=A.i(m.$1(r.h(s,"lot_expiry")))
s=r.h(s,"reason")
s=s==null?null:J.am(s)
if(s==null)s=""
s=A.ay(s,"&","&amp;")
s=A.ay(s,"<","&lt;")
s='<tr class="'+a5+'"><td>'+a2+'</td><td class="strong">'+a6+'</td><td class="num strong">'+a7+'</td><td class="num">'+a8+"</td><td>"+a9+"</td><td>"+b0+"</td><td>"+b1+'</td><td class="muted">'+A.ay(s,">","&gt;")+"</td></tr>"
k.a+=s}u=(k.a+="</tbody></table>")+"<h3>FIFO-Restlots am Stichtag</h3>"
k.a=u
k.a=u+'<table class="pos"><thead><tr><th>Rechnung</th><th>Rg-Datum</th><th class="num">Rest</th><th class="num">EK/Stk.</th><th>MHD</th><th class="num">Restlaufzeit</th><th class="num">Abschlag %</th><th class="num">AK-Wert</th><th class="num">Abschlag \u20ac</th><th class="num">Bilanz</th></tr></thead><tbody>'
u=J.V(f)
if(u.gZ(f))u=k.a+='<tr><td colspan="10" class="muted">Endbestand 0 \u2014 keine Bewertung.</td></tr>'
else{for(u=u.gX(f);u.t();){s=u.gN(u)
r=J.V(s)
a2=A.b4(r.h(s,"mhd_pct"))
b2=a2==null?null:C.d.a0(a2)
if(b2==null)b2=0
b3=b2>=20
a2=A.b4(r.h(s,"lot_discount"))
b4=a2==null?null:a2
if(b4==null)b4=0
a2=r.h(s,"invoice_number")
a2=a2==null?null:J.am(a2)
if(a2==null)a2="\u2014"
a2=A.ay(a2,"&","&amp;")
a2=A.ay(a2,"<","&lt;")
a2=A.ay(a2,">","&gt;")
a6=A.i(m.$1(r.h(s,"invoice_date")))
a7=A.i(r.h(s,"remaining_qty"))
a8=A.b4(r.h(s,"unit_cost"))
if(a8==null)a8=null
if(a8==null)a8=0
a9=$.d3()
a8=a9.am(a8)
b0=A.i(m.$1(r.h(s,"lot_expiry")))
b1=r.h(s,"mhd_days_left")==null?"\u2014":A.i(r.h(s,"mhd_days_left"))+"d"
b5=b3?"warn":"strong"
b6=A.b4(r.h(s,"lot_gross"))
if(b6==null)b6=null
b6=a9.am(b6==null?0:b6)
b7=b3?"warn":""
b8=b4===0?"\u2014":"\u2212 "+a9.am(b4)
s=A.b4(r.h(s,"lot_net"))
if(s==null)s=null
s="<tr><td>"+a2+"</td><td>"+a6+'</td><td class="num strong">'+a7+'</td><td class="num">'+a8+"</td><td>"+b0+'</td><td class="num">'+b1+'</td><td class="num '+b5+'">'+b2+' %</td><td class="num">'+b6+'</td><td class="num '+b7+'">'+b8+'</td><td class="num strong">'+a9.am(s==null?0:s)+"</td></tr>"
k.a+=s}u=$.d3()
s=u.am(d)
r=a0===0?"\u2014":"\u2212 "+u.am(a0)
u='<tr class="sum"><td colspan="2"><b>Summe '+h+'</b></td><td class="num strong">'+t+'</td><td class="num" colspan="4"></td><td class="num strong">'+s+'</td><td class="num warn strong">'+r+'</td><td class="num strong">'+u.am(a1)+"</td></tr>"
u=k.a+=u}u+="</tbody></table>"
k.a=u
k.a=u+"</section>"}b9=n.$2(e3,"remaining_qty")
c0=o.$2(e3,"lot_gross")
c1=o.$2(e3,"lot_discount")
c2=o.$2(e3,"lot_net")
c3=d8.eQ(e3,new B.bvd(),x.T).hG(0).a
c4=new A.di("")
c4.a=y.k
d8=$.d3()
d9=d8.am(c0)
u=c1===0?"\u2014 0,00 \u20ac":"\u2212 "+d8.am(c1)
c4.a=y.k+('<div class="kpis"><span><b>'+c3+"</b> Produkte im Bestand</span><span><b>"+A.i(b9)+"</b> Einheiten gesamt</span><span>Anschaffungskosten netto <b>"+d9+'</b></span><span class="warn">MHD-Abschlag <b>'+u+"</b></span><span>Bilanzwert netto <b>"+d8.am(c2)+"</b></span></div>")
c5=new A.di("")
c5.a='<section class="matrix-block">'
c5.a='<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2>'
c5.a=y.c
d8=c5.a=y.c+'<table class="pos matrix"><thead><tr><th>Rest-MHD am Stichtag</th><th>Typischer Bewertungsansatz</th><th class="num">B\xf6rdesnack24 wendet an</th><th>Begr\xfcndung</th></tr></thead><tbody>'
for(c6=0;c6<5;++c6){c7=D.akF[c6]
c8=c7[2]
c9=c8==="0 %"?"strong":"strong warn"
d8=c7[0]
d8=A.ay(d8,"&","&amp;")
d8=A.ay(d8,"<","&lt;")
d8=A.ay(d8,">","&gt;")
d9=c7[1]
d9=A.ay(d9,"&","&amp;")
d9=A.ay(d9,"<","&lt;")
d9=A.ay(d9,">","&gt;")
u=A.ay(c8,"&","&amp;")
u=A.ay(u,"<","&lt;")
u=A.ay(u,">","&gt;")
t=c7[3]
t=A.ay(t,"&","&amp;")
t=A.ay(t,"<","&lt;")
d8='<tr><td class="strong">'+d8+"</td><td>"+d9+'</td><td class="num '+c9+'">'+u+"</td><td>"+A.ay(t,">","&gt;")+"</td></tr>"
d8=c5.a+=d8}c5.a=d8+"</tbody></table></section>"
d0=new A.b_(Date.now(),0,!1)
d1=new A.di("")
if(e1!=null&&e1.ey(e1,new B.bve())){d1.a='<section class="stamp">'
d1.a='<section class="stamp"><div class="stamp-badge">FREIGEGEBEN</div>'
d1.a='<section class="stamp"><div class="stamp-badge">FREIGEGEBEN</div><div class="stamp-note">Beide Gesellschafter haben nach Pr\xfcfung digital signiert.</div>'
d1.a='<section class="stamp"><div class="stamp-badge">FREIGEGEBEN</div><div class="stamp-note">Beide Gesellschafter haben nach Pr\xfcfung digital signiert.</div><ul class="stamp-list">'
for(d8=e1.$ti,d9=new A.aK(e1,e1.gp(0),d8.i("aK<ag.E>")),d8=d8.i("ag.E");d9.t();){u=d9.d
if(u==null)u=d8.a(u)
t=J.V(u)
s=t.h(u,"approver_name")
s=s==null?null:J.am(s)
if(s==null)s="?"
s=A.ay(s,"&","&amp;")
s=A.ay(s,"<","&lt;")
h=A.ay(s,">","&gt;")
s=t.h(u,"decision")
d2=(s==null?null:J.am(s))==="approved"?"freigegeben":"abgelehnt"
u=t.h(u,"decided_at")
d3=u==null?null:J.am(u)
d4=d3==null?"":" \xb7 "+A.i(m.$1(d3))
u="<li><b>"+h+"</b> \u2014 "+d2+d4+"</li>"
d1.a+=u}d1.a+="</ul></section>"}d8=J.V(e5)
if(d8.gdz(e5)){d9=(d1.a+='<section class="signatures">')+"<h2>Freigabe / Unterschriften</h2>"
d1.a=d9
d1.a=d9+'<div class="sigrow">'
for(d8=d8.gX(e5);d8.t();){d9=d8.gN(d8)
u=J.V(d9)
d5=A.ak(u.h(d9,"image_url"))
if(d5==null)d5=""
t=A.ak(u.h(d9,"full_name"))
if(t==null)t=""
t=A.ay(t,"&","&amp;")
t=A.ay(t,"<","&lt;")
h=A.ay(t,">","&gt;")
d9=A.ak(u.h(d9,"role_label"))
if(d9==null)d9=""
d9=A.ay(d9,"&","&amp;")
d9=A.ay(d9,"<","&lt;")
d6=A.ay(d9,">","&gt;")
if(d5.length!==0){d9=A.ay(d5,"&","&amp;")
d9=A.ay(d9,"<","&lt;")
d7='<img src="'+A.ay(d9,">","&gt;")+'" alt="Signatur" class="sig-img">'}else d7='<div class="sig-line"></div>'
d9='<div class="sig-slot"><div class="sig-box">'+d7+'</div><div class="sig-name"><b>'+h+'</b></div><div class="sig-meta">'+d6+" \xb7 Datum: "+$.dp().am(d0)+"</div></div>"
d1.a+=d9}d1.a+="</div></section>"}d8=$.dp()
d8=(self.URL||self.webkitURL).createObjectURL(B.bxi(['<!doctype html>\n<html lang="de"><head>\n<meta charset="utf-8">\n<title>FIFO-Inventur '+d8.am(e2)+" \u2013 "+d8.am(e6)+'</title>\n<style>\n  @page { size: A4 landscape; margin: 0 10mm 12mm 10mm; }\n  * { box-sizing: border-box; }\n  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n         color: #14110E; margin: 0; padding: 0; font-size: 9pt; }\n  /* One-Pager-Look: Gold-Topbar + Wortmarke */\n  .topbar { height: 5mm; background: #FDC102; margin: 0 -10mm 6mm; }\n  .brand { font-weight: 900; letter-spacing: 2px; font-size: 11pt;\n           margin-bottom: 6pt; }\n  .wrap { max-width: 100%; margin: 0 auto; }\n  .head { display: flex; justify-content: space-between; align-items: flex-end; }\n  .head h1 { margin: 0; font-size: 17pt; letter-spacing: 0.5px; color: #B8860B; }\n  .meta { color: #6f6a5b; font-size: 9pt; }\n  h2 { font-size: 11pt; margin: 12pt 0 4pt 0; color: #14110E;\n       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }\n  h3 { font-size: 10pt; margin: 8pt 0 2pt 0; color: #6f6a5b;\n       font-weight: 700; letter-spacing: 0.2px; }\n  table.pos { width: 100%; border-collapse: collapse; margin-top: 3pt; }\n  table.pos th, table.pos td { padding: 3pt 5pt; text-align: left;\n                                border-bottom: 1pt solid #E8E2D6; }\n  table.pos th { background: #14110E; color: #F9F5EC; }\n  .num { text-align: right; white-space: nowrap; }\n  .muted { color: #6f6a5b; }\n  .strong { font-weight: 800; }\n  .warn { color: #B2311C; font-weight: 800; }\n  tr.in td   { background: #F3F8ED; }\n  tr.out td  { background: #FAE9E4; }\n  tr.sum td  { background: #FFF5CC; border-top: 1pt solid #14110E;\n                border-bottom: 1pt solid #14110E; }\n  .kpis { display: flex; flex-wrap: wrap; gap: 20pt; margin: 6pt 0;\n          font-size: 10pt; color: #14110E; }\n  .kpis span b { font-size: 12pt; }\n  .kpis .warn { color: #B2311C; }\n  .sigrow { display: flex; flex-wrap: wrap; gap: 24pt; margin-top: 6pt; }\n  .sig-slot { width: 260px; }\n  .sig-box { height: 70px; border: 1pt solid #e6e0cc; border-radius: 6pt;\n             background: #FAF6ED; padding: 6pt; display: flex;\n             align-items: flex-end; }\n  .sig-line { height: 1pt; background: #14110E; width: 100%;\n              margin-bottom: 3pt; }\n  .sig-img { max-height: 60px; max-width: 100%; object-fit: contain; }\n  .sig-name { margin-top: 4pt; font-size: 10pt; }\n  .sig-meta { color: #6f6a5b; font-size: 8pt; }\n  .matrix-intro { color: #6f6a5b; font-size: 9pt; margin: 2pt 0 4pt 0;\n                  max-width: 780px; }\n  /* "Bewertung:" mit zwei Zeilen \u2014 Label steht neben dem Anschaffungs\xad\n     kosten-Text, die zweite Zeile ("MHD-Abschlag vom AK-Wert") wird auf\n     die H\xf6he von "Anschaffungskosten" einger\xfcckt. */\n  .head .meta .bewertung-label { display: inline-block; vertical-align: top; }\n  .head .meta .bewertung-lines { display: inline-block; vertical-align: top;\n                                  margin-left: 4pt; }\n  .head .meta .bewertung-lines > span { display: block; }\n\n  /* Freigabe-Stempel */\n  section.stamp { margin: 8pt 0 4pt 0; padding: 6pt 10pt;\n                  border: 1pt solid #5C9A3F; border-radius: 6pt;\n                  background: #EEF6E8; }\n  section.stamp .stamp-badge {\n    display: inline-block; font-weight: 800; letter-spacing: 1px;\n    color: #3E7A25; font-size: 12pt;\n  }\n  section.stamp .stamp-note { color: #14110E; font-size: 9pt; margin-top: 2pt; }\n  section.stamp .stamp-list { margin: 4pt 0 0 14pt; padding: 0;\n                              font-size: 9pt; color: #14110E; }\n  section.stamp .stamp-list li { margin: 1pt 0; }\n  table.matrix { width: 100%; }\n  table.matrix td, table.matrix th { padding: 4pt 6pt; }\n\n  /* Produkt-Block */\n  section.product { margin: 10pt 0 8pt 0;\n                    padding: 6pt 8pt 8pt 8pt;\n                    border: 1pt solid #e6e0cc;\n                    border-radius: 4pt; }\n  .prod-head { display: flex; justify-content: space-between;\n               align-items: flex-end;\n               border-bottom: 1pt solid #14110E; padding-bottom: 3pt;\n               margin-bottom: 4pt; }\n  .prod-name { font-size: 12pt; font-weight: 800; letter-spacing: 0.2px; }\n  .prod-sku  { color: #6f6a5b; font-size: 8pt; }\n  .prod-end  { color: #14110E; font-size: 10pt; }\n  .prod-end b { color: #b89a00; }\n\n  /* \u2500\u2500 Sauberer Seitenumbruch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n  p, li { orphans: 3; widows: 3; }\n  h1, h2, h3 { page-break-after: avoid; break-after: avoid-page; }\n  thead { display: table-header-group; }\n  tfoot { display: table-footer-group; }\n  table.pos tr { page-break-inside: avoid; break-inside: avoid; }\n  table.pos tr.sum { page-break-before: avoid; break-before: avoid; }\n  section.product { page-break-inside: auto; break-inside: auto; }\n  section.product .prod-head { page-break-after: avoid; break-after: avoid-page; }\n  .sig-slot { page-break-inside: avoid; break-inside: avoid; }\n  .kpis, table.matrix,\n  section.matrix-block, section.signatures {\n    page-break-inside: avoid; break-inside: avoid;\n  }\n</style>\n</head><body onload="window.print()"><div class="topbar"></div><div class="wrap">\n  <div class="brand">B\xd6RDESNACK24</div>\n  <div class="head">\n    <div>\n      <h1>INVENTUR \u2014 FIFO-Bewegungsreport</h1>\n      <div class="meta">Zeitraum: '+d8.am(e2)+" \u2013 "+d8.am(e6)+'</div>\n      <div class="meta">Bewertungsverfahren: <b>FIFO</b> (\xa7256 HGB, Verbrauchsfolge)</div>\n      <div class="meta">\n        <span class="bewertung-label">Bewertung:</span>\n        <span class="bewertung-lines">\n          <span>Anschaffungskosten netto (\xa7253 HGB)</span>\n          <span>MHD-Abschlag vom AK-Wert</span>\n        </span>\n      </div>\n    </div>\n    <div class="meta">\n      B\xf6rdesnack24 GbR<br>\n      S\xfclldorfer Str. 3A \xb7 39171 S\xfclzetal OT Osterweddingen<br>\n      Steuernummer: 102/178/01635<br>\n      USt-IdNr.: DE 458804058<br>\n      Erstellt am '+d8.am(d0)+"\n    </div>\n  </div>\n  "+k.j(0)+"\n  "+c4.j(0)+"\n  "+c5.j(0)+"\n  "+d1.j(0)+"\n</div></body></html>\n"],"text/html"))
d8.toString
d9=window
d9.toString
C.a__.ahI(d9,d8,"_blank")
return A.o(null,v)}})
return A.p($async$bva,v)},
bvb:function bvb(){},
bvc:function bvc(){},
bvj:function bvj(){},
bvk:function bvk(d){this.a=d},
bvh:function bvh(){},
bvi:function bvi(d){this.a=d},
bvf:function bvf(){},
bvg:function bvg(){},
bvd:function bvd(){},
bve:function bve(){},
apc(d){var w,v,u
if(d==null||d.length===0)return"\u2014"
try{w=A.oc(d)
v=$.dp().am(w)
return v}catch(u){v=d.length
return C.c.a_(d,0,v>10?10:v)}},
Od:function Od(d){this.a=d},
W0:function W0(d,e){var _=this
_.w=d
_.x=e
_.Q=_.z=_.y=null
_.as=!1
_.at=null
_.d=$
_.c=_.a=null},
bfH:function bfH(d){this.a=d},
bfI:function bfI(d){this.a=d},
bfJ:function bfJ(d,e){this.a=d
this.b=e},
bfK:function bfK(d,e){this.a=d
this.b=e},
bfN:function bfN(d){this.a=d},
bfL:function bfL(d){this.a=d},
bfM:function bfM(d){this.a=d},
bfG:function bfG(){},
bfO:function bfO(d){this.a=d},
bfP:function bfP(d){this.a=d},
apb:function apb(d,e,f){this.d=d
this.e=e
this.a=f},
bk8:function bk8(){},
bk9:function bk9(){},
bka:function bka(){},
bkb:function bkb(){},
alH:function alH(d,e){this.c=d
this.a=e},
bem:function bem(){},
ben:function ben(){},
beo:function beo(){},
bep:function bep(){},
beq:function beq(){},
wU:function wU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
anv:function anv(d){this.a=d},
wX:function wX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aru:function aru(d,e){this.c=d
this.a=e},
arw:function arw(d,e){this.c=d
this.a=e},
bob:function bob(){},
Iw:function Iw(d){this.a=d},
a6Z:function a6Z(d){this.a=d},
aKk:function aKk(){},
aKj:function aKj(){},
aKi:function aKi(){},
aKh:function aKh(){},
aKg:function aKg(d){this.a=d},
aKf:function aKf(d,e){this.a=d
this.b=e},
aKe:function aKe(d){this.a=d},
zx:function zx(d,e,f){this.d=d
this.e=e
this.a=f},
ane:function ane(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
bh3:function bh3(d){this.a=d},
bh2:function bh2(){},
bh1:function bh1(){},
bh0:function bh0(d){this.a=d},
bh_:function bh_(d){this.a=d},
bgZ:function bgZ(){},
bgY:function bgY(d,e){this.a=d
this.b=e},
bgX:function bgX(d,e,f){this.a=d
this.b=e
this.c=f},
bgW:function bgW(d,e,f){this.a=d
this.b=e
this.c=f},
bgU:function bgU(d){this.a=d},
bgV:function bgV(d,e){this.a=d
this.b=e},
a7B:function a7B(d){this.a=d},
aLF:function aLF(){},
aLE:function aLE(){},
aLG:function aLG(){},
aLD:function aLD(){},
C1:function C1(d){this.a=d},
W9:function W9(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=null
_.at=!1
_.d=$
_.c=_.a=null},
bh6:function bh6(d){this.a=d},
bh5:function bh5(d,e){this.a=d
this.b=e},
bh7:function bh7(){},
bh8:function bh8(d){this.a=d},
bh4:function bh4(d,e){this.a=d
this.b=e},
bJz(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return"\u2014"
try{w=A.oc(J.am(d)).FD()
v=C.c.cZ(C.e.j(A.bV(w)),2,"0")
u=C.c.cZ(C.e.j(A.bi(w)),2,"0")
t=C.c.cZ(C.e.j(A.hA(w)),2,"0")
s=C.c.cZ(C.e.j(A.vR(w)),2,"0")
r=A.i(v)
q=A.i(u)
p=A.i(t)
o=A.i(s)
return r+"."+q+". "+p+":"+o}catch(n){r=J.am(d)
return r}},
Ss:function Ss(d){this.a=d},
asv:function asv(){var _=this
_.w=0
_.d=$
_.c=_.a=null},
bpz:function bpz(d){this.a=d},
bpy:function bpy(d,e){this.a=d
this.b=e},
bsm:function bsm(){},
an4:function an4(d){this.a=d},
bgN:function bgN(){},
bgM:function bgM(){},
bgL:function bgL(d){this.a=d},
bgK:function bgK(d){this.a=d},
alL:function alL(d,e){this.c=d
this.a=e},
C0:function C0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bsV:function bsV(){},
apf:function apf(d){this.a=d},
bks:function bks(d,e,f){this.a=d
this.b=e
this.c=f},
bkv:function bkv(){},
bku:function bku(){},
bkt:function bkt(){},
bkr:function bkr(){},
ape:function ape(d,e){this.c=d
this.a=e},
Cd:function Cd(d){this.a=d},
X0:function X0(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q="generic"
_.d=$
_.c=_.a=null},
bko:function bko(){},
bkp:function bkp(d){this.a=d},
bkn:function bkn(d,e){this.a=d
this.b=e},
bkq:function bkq(){},
bs0:function bs0(){},
ajY:function ajY(d){this.a=d},
b9S:function b9S(d,e,f){this.a=d
this.b=e
this.c=f},
b9V:function b9V(){},
b9U:function b9U(){},
b9T:function b9T(){},
b9R:function b9R(){},
ajX:function ajX(d,e){this.c=d
this.a=e},
BF:function BF(d){this.a=d},
UX:function UX(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.d=$
_.c=_.a=null},
b9M:function b9M(){},
b9L:function b9L(d){this.a=d},
b9J:function b9J(d){this.a=d},
b9G:function b9G(d,e){this.a=d
this.b=e},
b9K:function b9K(){},
b9P:function b9P(){},
b9O:function b9O(){},
b9N:function b9N(d){this.a=d},
b9H:function b9H(d){this.a=d},
b9F:function b9F(d,e){this.a=d
this.b=e},
b9I:function b9I(){},
b9Q:function b9Q(){},
Yo:function Yo(d){this.a=d},
arM:function arM(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
boq:function boq(){},
bop:function bop(d){this.a=d},
boo:function boo(d){this.a=d},
bon:function bon(d,e){this.a=d
this.b=e},
arL:function arL(d,e){this.e=d
this.a=e},
bom:function bom(){},
bol:function bol(d,e){this.a=d
this.b=e},
boj:function boj(d,e,f){this.a=d
this.b=e
this.c=f},
bok:function bok(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boi:function boi(d,e){this.a=d
this.b=e},
arK:function arK(d,e,f){this.c=d
this.d=e
this.a=f},
Cp:function Cp(d,e,f){this.d=d
this.e=e
this.a=f},
Yn:function Yn(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=null
_.d=$
_.c=_.a=null},
bof:function bof(){},
boh:function boh(){},
bog:function bog(d){this.a=d},
boe:function boe(d){this.a=d},
bod:function bod(d,e){this.a=d
this.b=e},
bs7:function bs7(){},
akJ:function akJ(d){this.a=d},
bbF:function bbF(){},
bbE:function bbE(){},
bbD:function bbD(d){this.a=d},
bbC:function bbC(d){this.a=d},
akI:function akI(d,e){this.c=d
this.a=e},
tT:function tT(d,e,f){this.c=d
this.d=e
this.a=f},
ae_:function ae_(d){this.a=d},
b16:function b16(){},
b15:function b15(){},
b17:function b17(){},
b14:function b14(){},
CA:function CA(d){this.a=d},
YR:function YR(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
bpB:function bpB(d){this.a=d},
bpA:function bpA(d,e){this.a=d
this.b=e},
bpC:function bpC(){},
OL(d,e){return new B.a7y(e,d,null)},
a7y:function a7y(d,e,f){this.e=d
this.f=e
this.a=f},
aLB:function aLB(){},
aLA:function aLA(){},
aLz:function aLz(d){this.a=d},
aLy:function aLy(){},
FH:function FH(d,e){this.d=d
this.a=e},
WN:function WN(){var _=this
_.w=!1
_.x=null
_.d=$
_.c=_.a=null},
bjf:function bjf(d){this.a=d},
bjg:function bjg(d,e){this.a=d
this.b=e},
bjh:function bjh(d){this.a=d},
Q3(d,e,f,g,h,i,j){return new B.Q2(j,i,d,e,g,f,h,null)},
Q2:function Q2(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
WX:function WX(){var _=this
_.d=_.w=$
_.c=_.a=null},
bke:function bke(d){this.a=d},
bkc:function bkc(d){this.a=d},
bkd:function bkd(d){this.a=d},
bkj:function bkj(d,e){this.a=d
this.b=e},
bki:function bki(d,e){this.a=d
this.b=e},
bkm:function bkm(){},
bkl:function bkl(){},
bkk:function bkk(d){this.a=d},
bkh:function bkh(d){this.a=d},
bkg:function bkg(){},
bkf:function bkf(d,e){this.a=d
this.b=e},
bEK(d,e,f){return new B.a1N(e,f,d,null)},
a1N:function a1N(d,e,f,g){var _=this
_.d=d
_.r=e
_.as=f
_.a=g},
b6Y:function b6Y(d,e){this.a=d
this.b=e},
a1O:function a1O(d,e,f,g){var _=this
_.d=d
_.r=e
_.x=f
_.a=g},
b6Z:function b6Z(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
b7_:function b7_(d){this.a=d},
bFb(d,e,f){return new B.rb(f,d,e)},
oa(d){return new B.fy(d)},
aBp(d,e,f,g,h,i,j){return new B.a4n(e,g,f,h,i,d,j,B.bT9(e),null)},
bT9(d){var w,v,u
for(w=d.length,v=null,u=0;u<w;++u)if(!d[u].d){if(v!=null)return null
v=u}return v},
bIB(d,e,f,g,h,i){var w=null
return new B.Sk(d,h,w,w,w,w,g,w,w,w,w,w,w,f,e,!0,C.G,w,w,w,w,w,w,i,w,w,!0,!1,w,!1,w,!0,w,w,w)},
fm:function fm(d,e){this.a=d
this.d=e},
rb:function rb(d,e,f){this.b=d
this.f=e
this.r=f},
fy:function fy(d){this.a=d},
a4n:function a4n(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.ay=i
_.CW=j
_.fr=k
_.a=l},
aBu:function aBu(d){this.a=d},
aBq:function aBq(){},
aBr:function aBr(){},
aBs:function aBs(){},
aBt:function aBt(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aBv:function aBv(d,e){this.a=d
this.b=e},
aBw:function aBw(d){this.a=d},
aBx:function aBx(d){this.a=d},
Sk:function Sk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
b0Q:function b0Q(d){this.a=d},
ao1:function ao1(){},
ao6:function ao6(d){this.a=d},
GM:function GM(d,e,f){this.r=d
this.w=e
this.a=f},
Yq:function Yq(){this.d=!1
this.c=this.a=null},
bor:function bor(d){this.a=d},
bou:function bou(d,e,f){this.a=d
this.b=e
this.c=f},
bov:function bov(d,e,f){this.a=d
this.b=e
this.c=f},
bos:function bos(d,e){this.a=d
this.b=e},
bot:function bot(d,e){this.a=d
this.b=e},
ql:function ql(d){this.d=this.b=null
this.a=d},
wn:function wn(){},
Ob:function Ob(d){this.a=d},
a5r:function a5r(d){this.a=d},
a5G:function a5G(){},
wm:function wm(d,e){this.a=d
this.b=e},
w1:function w1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.a4=h
_.aq=i
_.ak=j
_.bx=_.aG=null
_.b9=k
_.aR=l
_.cb=m
_.dc=n
_.dd=o
_.cP=p
_.di=null
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
aWn:function aWn(){},
aWm:function aWm(d){this.a=d},
aWl:function aWl(d){this.a=d},
aWo:function aWo(){},
aWj:function aWj(d,e){this.a=d
this.b=e},
aWk:function aWk(){},
aWp:function aWp(){},
aWq:function aWq(d){this.a=d},
Iq:function Iq(d,e){this.a=d
this.b=e},
bZI(d,e,f,g){var w
if(C.b.ey(e,new B.b0R())){w=A.aa(e).i("ae<1,k_?>")
w=A.Q(new A.ae(e,new B.b0S(),w),w.i("ax.E"))
w.$flags=1
w=w}else w=null
return new B.Si(e,f,d,g,w,null)},
mp:function mp(d,e,f){this.a=d
this.b=e
this.c=f},
ly:function ly(d,e){this.a=d
this.b=e},
Si:function Si(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.y=h
_.a=i},
b0R:function b0R(){},
b0S:function b0S(){},
asm:function asm(d,e,f,g){var _=this
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
bpq:function bpq(d,e){this.a=d
this.b=e},
bpp:function bpp(d,e,f){this.a=d
this.b=e
this.c=f},
bpr:function bpr(){},
bps:function bps(d){this.a=d},
bpo:function bpo(){},
bpn:function bpn(){},
bpt:function bpt(){},
Sj:function Sj(d,e,f){this.c=d
this.d=e
this.a=f},
asl:function asl(d,e,f){this.f=d
this.b=e
this.a=f},
Jt:function Jt(d,e){this.a=d
this.b=e},
av3:function av3(){},
aJy:function aJy(){},
bHv(d){var w=A.bO('[,()"\\\\]',!0,!1,!1)
if(!(w.b.test(d)||d!==C.c.aL(d)))return d
w=A.ay(d,"\\","\\\\")
return'"'+A.ay(w,'"','\\"')+'"'},
ke:function ke(d,e){this.a=d
this.b=e},
aaL:function aaL(d,e,f){this.a=d
this.b=e
this.c=f},
aRN:function aRN(){},
axu(d,e,f,g,h){return A.dz(d,e,new B.axv(f,h),new B.axw(f,h),!1,!0,!1,g,h)},
axv:function axv(d,e){this.a=d
this.b=e},
axw:function axw(d,e){this.a=d
this.b=e},
bT8(d){var w
d.O(x.d)
w=A.W(d)
return w.y2},
bxi(d,e){var w={}
w.type=e
return new self.Blob(d,w)},
bBe(d){var w=0,v=A.q(x.H),u,t
var $async$bBe=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.bxi([A.eK(65279)+d],"text/csv;charset=utf-8"))
t.toString
u=document.createElement("a")
u.href=t
u.download="b2b_customers.csv"
u.click();(self.URL||self.webkitURL).revokeObjectURL(t)
return A.o(null,v)}})
return A.p($async$bBe,v)},
bBL(d,e,f){var w=0,v=A.q(x.H)
var $async$bBL=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:A.bLf(f,null)
return A.o(null,v)}})
return A.p($async$bBL,v)},
a5I(d,e,f,g,h){var w=null
return new A.yF(f,w,e,d,h,w,w,!0,C.a_c,g,w)}},D
J=c[1]
A=c[0]
C=c[2]
F=c[5]
E=c[7]
B=a.updateHolder(c[4],B)
D=c[8]
B.wl.prototype={
FN(d,e,f,g,h){return this.b1w(0,e,f,g,h)},
b1v(d,e,f,g){return this.FN(0,e,f,"application/octet-stream",g)},
b1w(d,e,f,g,h){var w=0,v=A.q(x.N),u,t=this,s,r,q,p
var $async$FN=A.m(function(i,j){if(i===1)return A.n(j,v)
for(;;)switch(w){case 0:q=t.a
p=q.gdY().e.a
p=p==null?null:p.r
s=p==null?null:p.a
if(s==null)s="anon"
r=s+"/"+Date.now()+"_"+h
q=q.ay
q===$&&A.a()
w=3
return A.k(q.cY(e).Aj(r,f,new A.Ep(!1,g)),$async$FN)
case 3:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$FN,v)}}
B.v7.prototype={}
B.EC.prototype={
u(d){var w,v,u,t,s=null,r=this.c
if(r.length===0)return C.ar
w=x.p
v=A.b([],w)
for(u=0;u<r.length;++u){t=A.b([],w)
if(u>0)t.push(C.aZ)
t.push(new B.alM(r[u],s))
C.b.K(v,t)}return new A.aj(this.d,A.ap(v,C.k,s,C.lU,C.h,0,s,s),s)}}
B.alM.prototype={
u(d){var w=null,v=this.c,u=A.aR(12),t=v.f,s=t?w:v.c,r=A.aR(12),q=A.aR(12),p=v.e
p=A.cP(p==null?C.am:p,1)
if(t)t=C.Z2
else t=A.co(v.a,v.d,w,20)
return A.Hh(A.dT(!1,C.a0,!0,u,A.eF(!1,r,!0,A.b9(C.W,t,C.r,w,w,new A.b5(w,w,p,q,w,w,C.G),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,s,w,w,w,w,w,w,w),C.r,C.ae,0,w,w,w,w,w,C.bz),w,v.b,w,w)}}
B.P8.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=C.bt
w=A.aR(12)
v=s.y
v=A.cP(v==null?C.m.f_(0.4):v,1)
u=s.w
if(u==null)u=C.j
t=x.p
w=A.b([A.b9(C.W,A.co(s.c,u,r,22),C.r,r,r,new A.b5(q,r,v,w,r,r,C.G),r,44,r,r,r,r,r,44),C.dG],t)
q=s.r
if(q!=null)w.push(q)
else w.push(C.yn)
q=A.b([A.ap(w,C.k,r,C.f,C.h,0,r,r),C.u,A.j(s.d,1,C.ak,r,A.D(C.j,15,C.S),r,r,r)],t)
C.b.K(q,A.b([C.bW,A.j(s.e,2,C.ak,r,A.D(C.p,12,C.l),r,r,r)],t))
return A.by(r,A.ad(q,C.D,r,C.ip,C.h,0),r,s.f,C.ai,r,3)}}
B.Ar.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.Ar&&e.a===this.a&&e.c.k(0,this.c)&&e.d.k(0,this.d)},
gA(d){return A.a9(this.a,this.c,this.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zz.prototype={
ke(d,e){return this.aP8(d,e)},
aP8(d,e){var w=0,v=A.q(x.y),u,t=this,s,r
var $async$ke=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t.se9(0,C.dw)
w=3
return A.k(A.pm(new B.aLI(t,d,e),x.H),$async$ke)
case 3:t.se9(0,g)
s=t.f
w=s.ght(s)!=null?4:5
break
case 4:r=t.r.aE(0,$.bDw(),x.bX)
w=8
return A.k(r.MY(),$async$ke)
case 8:w=!g?6:7
break
case 6:w=9
return A.k(r.DZ(d,e),$async$ke)
case 9:t.se9(0,C.dM)
u=!0
w=1
break
case 7:case 5:s=t.f
u=s.ght(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$ke,v)},
L8(d,e,f){return this.aSc(d,e,f)},
aSc(d,e,f){var w=0,v=A.q(x.y),u,t=this,s
var $async$L8=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:t.se9(0,C.dw)
w=3
return A.k(A.pm(new B.aLJ(t,e,f,d,null),x.H),$async$L8)
case 3:t.se9(0,h)
s=t.f
u=s.ght(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$L8,v)},
LX(d,e,f){return this.aU1(d,e,f)},
aU1(d,e,f){var w=0,v=A.q(x.aD),u,t=this,s,r
var $async$LX=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:r={}
t.se9(0,C.dw)
r.a=null
w=3
return A.k(A.pm(new B.aLK(r,t,d,e,f),x.H),$async$LX)
case 3:t.se9(0,h)
s=t.f
u=s.ght(s)!=null?null:r.a
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$LX,v)}}
B.zA.prototype={
dg(d,e){return A.dz(e.ap($.bwI(),x.i),new B.aLN(this),new B.aLO(),new B.aLP(),!1,!0,!1,x.C,x.l)},
atG(d){var w="Inventur",v=null,u="customers.manage",t=d.n(0,"inventory.view")||d.n(0,"inventory.edit"),s=d.n(0,"haccp.fill"),r=d.n(0,"haccp.temperature"),q=d.n(0,"haccp.cleaning"),p=d.n(0,"haccp.disposal"),o=d.n(0,"haccp.maintenance"),n=d.n(0,"cash.collect"),m=d.n(0,"documents.view")||d.n(0,"documents.edit"),l=x.af
t=A.Q(new A.bd(A.b([new B.fI(w,"Bestand je Automat",C.jk,D.afn,t,v,v,v,v),new B.fI("Bef\xfcllung","Nachf\xfcll-Protokoll",C.y7,D.a8Y,s,v,v,v,v),new B.fI("Temperatur","HACCP \xb7 \u2264 7 \xb0C",C.EZ,D.aBq,r,v,v,v,v),new B.fI("Reinigung","Hygieneplan",C.yb,D.a3q,q,v,v,v,v),new B.fI("Vernichtung","MHD / Verderb",C.y1,D.a6G,p,v,v,v,v),new B.fI("Wartung","Technik-Protokolle",C.y9,D.apw,o,v,v,v,v),new B.fI("Geldentnahme","Kassenprotokoll",C.yh,D.a3b,n,v,v,v,v),new B.fI("Dokumente","Archiv & Versionen",C.yc,D.a6M,m,v,v,v,v),new B.fI("Mitarbeiter","Einladen & Schulen",C.EO,D.a8l,d.n(0,"employees.manage"),v,v,v,v),new B.fI("B2B-Kunden","sevDesk-CSV-Export",C.nY,D.a01,d.n(0,u),v,v,v,v),new B.fI("DATEV-Export","Buchungsstapel (CSV)",C.fv,E.Di,d.n(0,"finance.export"),C.aE,C.aE.f_(0.12),C.aE.f_(0.4),D.aN7),new B.fI("Anlagen","PKW-Kosten \xb7 Nutzungseinlage",C.nX,D.a_T,d.n(0,"finance.view"),v,v,v,v),new B.fI(w,"PDF-Report Zeitraum",C.jk,D.afm,d.n(0,u),v,v,v,v),new B.fI("Telemetrie","IoT \xb7 Live \xb7 Slots",C.EF,D.aBp,d.n(0,u),v,v,v,v),new B.fI("Freigaben","Dokumente pr\xfcfen",C.fw,D.a6L,d.n(0,u),v,v,v,v),new B.fI("K\xfcndigungen","Abo-K\xfcndigungen pr\xfcfen",C.F_,D.a35,d.n(0,u),v,v,v,v),new B.fI("Reklamationen","Kundenmeldungen je Kauf",C.nZ,D.a5t,d.n(0,u),v,v,v,v),D.aPh],x.ew),new B.aLM(),l),l.i("t.E"))
return t}}
B.anC.prototype={
u(d){var w=null
return A.dF(A.b([D.axT,C.M,A.j("Digitale HACCP-, Reinigungs- und Bestandsprotokolle \u2014 revisionssicher und GoBD-konform.",w,w,w,A.D(C.p,13,C.l),w,w,w),C.aQ,A.i9(new B.bhY(this))],x.p),C.cj,w,C.K,!1)}}
B.akE.prototype={
u(d){var w=null
return A.d_(new A.aj(C.dd,A.ad(A.b([A.b9(w,D.ac0,C.r,w,w,new A.b5(C.bt,w,A.cP(C.m,1),w,w,w,C.eG),w,72,w,w,w,w,w,72),C.L,A.j("Keine Module freigeschaltet",w,w,w,A.c8(C.j,20,C.S),C.cF,w,w),C.M,A.j("F\xfcr Dein Konto sind noch keine Module aktiviert. Bitte wende Dich an einen Gesellschafter.",w,w,w,A.D(C.p,14,C.l),C.cF,w,w)],x.p),C.k,w,C.f,C.H,0),w),w,w)}}
B.fI.prototype={}
B.ajC.prototype={
u(d){var w=null,v=C.aE.f_(0.14),u=A.aR(4),t=A.cP(C.aE.f_(0.5),1)
return A.b9(w,A.j("DATEV",w,w,w,A.D(C.aE,9,C.q).fZ(0.4),w,w,w),C.r,w,w,new A.b5(v,w,t,u,w,w,C.G),w,w,w,w,D.a8i,w,w,w)}}
B.xC.prototype={
W(){return new B.Tz(C.cp)}}
B.Tz.prototype={
gpZ(){var w=this.w
return w===$?this.w=A.aW(new A.b_(Date.now(),0,!1)):w},
au(){this.aM()
this.xn()},
aFk(d){this.J(new B.b3Y(this,d))
this.xn()},
xn(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$xn=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b3Z(r))
u=3
q=r.gc9().aE(0,$.bL(),x.A)
n=x.N
m=x.z
w=6
return A.k(A.k6(A.b([q.ev("anlage_pkw",A.a5(["p_jahr",r.gpZ()],n,m),m),q.h4("list_partner_signatures",m)],x.U),m),$async$xn)
case 6:p=e
r.x=A.dh(x.f.a(J.a_(p,0)),n,m)
m=J.cG(x.j.a(J.a_(p,1)),x.P)
r.y=m.fH(m)
s.push(5)
w=4
break
case 3:u=2
k=t.pop()
o=A.a2(k)
r.Q=J.am(o)
r.x=null
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.b4_(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$xn,v)},
ga4v(){var w=this.x
w=w==null?null:w.h(0,"fahrzeuge")
x.g.a(w)
if(w==null)w=C.bn
return J.cG(w,x.P)},
ga4V(){var w="freigabe",v=this.x
return(v==null?null:v.h(0,w))==null?null:A.dh(x.f.a(this.x.h(0,w)),x.N,x.z)},
gaNs(){var w,v,u,t,s,r,q,p=this.ga4V()
p=p==null?null:p.h(0,"unterzeichner")
x.g.a(p)
w=p==null?C.bn:p
p=J.V(w)
if(p.gZ(w))return null
v=A.b([],x.t)
for(p=p.gX(w),u=x.f,t=x.N,s=x.z;p.t();){r=u.a(p.gN(p))
q=J.V(r)
v.push(A.a5(["full_name",q.h(r,"name"),"signature_url",q.h(r,"unterschrift")],t,s))}return v},
u(d){var w,v,u,t,s,r,q=this,p=null,o=q.gaFr(),n=x.p,m=A.b([new B.amH(q.gpZ(),q.gaFj(),p),C.L],n)
if(q.x!=null&&!q.z)m.push(q.asR())
if(q.z)m.push(E.Tw)
else{w=q.Q
if(w!=null)m.push(new B.VL("Die Anlage konnte nicht geladen werden: "+w,C.an,E.Ex,p))
else{w=A.b([],n)
if(B.btf(q.x))C.b.K(w,A.b([new B.arR(q.gpZ(),q.ga4V(),p),C.L],n))
w.push(new B.akS(q.ga4v(),q.gpZ(),B.btf(q.x),o,p))
w.push(C.bJ)
n=q.x
n=n==null?p:n.h(0,"fahrten")
x.g.a(n)
if(n==null)n=C.bn
n=J.cG(n,x.P)
v=q.ga4v()
u=q.gpZ()
t=B.btf(q.x)
s=q.x
s=B.uj(s==null?p:s.h(0,"nutzungseinlage"))
r=q.x
w.push(new B.akQ(n,v,u,t,s,C.d.a0(B.uj(r==null?p:r.h(0,"fahrten_ohne_satz"))),o,p))
w.push(C.bJ)
w.push(new B.atI(q.y,p))
C.b.K(m,w)}}return A.dS(D.a9k,p,A.ig(A.dF(m,C.cj,p,C.K,!1),C.m,o),p,p)},
asR(){var w=A.b([],x.B)
if(!B.btf(this.x))w.push(new B.v7(C.fw,"Freigabe anfordern",this.gayG(),C.m,null,!1))
w.push(new B.v7(C.i5,"Als PDF drucken",new B.b3U(this),C.an,C.an,!1))
return new B.EC(w,C.dU,null)},
BO(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$BO=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.c
k.toString
w=3
return A.k(A.hj(null,null,!0,null,new B.b3X(r),k,null,!0,!0,x.y),$async$BO)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mL(r.gc9().aE(0,$.bL(),x.A))
k=A.bB(r.gpZ(),1,1,0,0,0,0)
o=A.bB(r.gpZ(),12,31,0,0,0,0)
n=r.gpZ()
m=r.x
if(m==null)m=C.iq
w=8
return A.k(q.wi("anlage_pkw",k,o,m,"Anlage PKW-Kosten "+n),$async$BO)
case 8:k=r.c
if(k!=null)k.O(x.q).f.b2(E.mi)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
k=r.c
if(k!=null)k.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$BO,v)}}
B.amH.prototype={
u(d){var w,v,u=null,t=A.aW(new A.b_(Date.now(),0,!1)),s=this.c,r=A.j("B\xf6rdesnack24 GbR, Steuernummer 102/178/01635, USt-IdNr. DE 458804058",u,u,u,A.D(C.p,12,C.l),u,u,u),q=x.p,p=A.b([],q)
for(w=t-4,v=t;v>=w;--v)p.push(new B.a1O(A.j(""+v,u,u,u,u,u,u,u),new B.bg8(this,v),v===s,u))
return A.ad(A.b([new A.fj("Anlage zum Jahresabschluss","Individuelle PKW-Kosten "+s,u,u),C.M,r,C.L,A.lo(C.cx,p,C.dI,0,8)],q),C.D,u,C.f,C.h,0)}}
B.akS.prototype={
dg(d,e){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=A.b([D.a8z,C.M,A.j("Alle Betr\xe4ge brutto. Bei einem privaten Fahrzeug gibt es keinen Vorsteuerabzug, die Umsatzsteuer geh\xf6rt also zu den Kosten.",p,p,p,A.D(C.p,12,C.l),p,p,p),C.u],o)
for(w=q.e,v=w.$ti,w=new A.aK(w,w.gp(0),v.i("aK<ag.E>")),u=q.f,t=q.r,s=q.w,v=v.i("ag.E");w.t();){r=w.d
C.b.K(n,A.b([new B.akR(r==null?v.a(r):r,u,t,s,p),C.u],o))}return A.ad(n,C.D,p,C.f,C.h,0)}}
B.akR.prototype={
dg(d,e){var w,v,u,t,s,r,q=this,p=null,o="satz_je_km",n=q.e,m=J.V(n),l=x.g.a(m.h(n,"kosten"))
if(l==null)l=C.bn
w=J.cG(l,x.P)
l=x.p
v=A.b([A.ap(A.b([A.aB(A.j(A.i(m.h(n,"kennzeichen")),p,p,p,A.D(C.j,16,C.q),p,p,p),1),new B.aiz(B.c4f(m.h(n,o)),"je Kilometer",p)],l),C.k,p,C.f,C.h,0,p,p),C.u],l)
for(u=w.$ti,t=new A.aK(w,w.gp(0),u.i("aK<ag.E>")),s=q.r,u=u.i("ag.E");t.t();){r=t.d
if(r==null)r=u.a(r)
v.push(new B.amI(r,s,new B.bch(q,d,e,r),p))}if(w.gp(0)===0)v.push(A.j("F\xfcr "+q.f+" ist noch keine Kostenposition erfasst.",p,p,p,A.D(C.p,13,C.l),p,p,p))
v.push(C.Dr)
u=B.uj(m.h(n,"gesamtkosten"))
v.push(new B.CE("Gesamtkosten",$.d3().am(u),!0,p))
v.push(new B.CE("Kilometerstand 01.01.",B.bsz(m.h(n,"km_stand_anfang")),!1,p))
v.push(new B.CE("Kilometerstand 31.12.",B.bsz(m.h(n,"km_stand_ende")),!1,p))
v.push(new B.CE("Gefahrene Kilometer",B.bsz(m.h(n,"km_gefahren")),!0,p))
if(m.h(n,o)==null)C.b.K(v,A.b([C.M,A.j("Ohne beide Kilometerst\xe4nde l\xe4sst sich kein Satz je Kilometer ermitteln. Fahrten mit diesem Fahrzeug bleiben so lange ohne Betrag.",p,p,p,A.D(C.an,12,C.l),p,p,p)],l))
if(!s)C.b.K(v,A.b([C.u,A.ad(A.b([A.fU(D.adv,D.aIg,new B.bci(q,d,e),p),A.fU(D.Fk,D.aHe,new B.bcj(q,d,e),p)],l),C.a8,p,C.f,C.h,8)],l))
return A.by(p,A.ad(v,C.D,p,C.f,C.h,0),p,p,C.C,p,3)},
uF(d,e,f){return this.aFn(d,e,f)},
aFn(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$uF=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:d={}
a0=J.V(a4)
d.a=A.i(a0.h(a4,"kostenart"))
i=C.d.ae(B.uj(a0.h(a4,"betrag_brutto")),2)
i=A.ay(i,".",",")
h=$.af()
q=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=a0.h(a4,"bezeichnung")
i=A.i(i==null?"":i)
p=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=x.N
w=3
return A.k(A.hj(null,null,!0,null,new B.bca(d,q,p),a2,null,!0,!0,i),$async$uF)
case 3:o=a6
if(o==null||o==="abbrechen"){w=1
break}n=a3.aE(0,$.bL(),x.A)
t=5
w=o==="streichen"?8:10
break
case 8:m=A.i(a0.h(a4,"id"))
l=A.a5(["deleted_at",new A.b_(Date.now(),0,!1).dV()],i,i)
w=11
return A.k(n.cY("pkw_kosten").dq(0,l).iL("id",m),$async$uF)
case 11:w=9
break
case 10:i=C.c.aL(q.a.a)
g=A.fW(A.ay(i,",","."))
k=g==null?0:g
if(k<=0){if(a2.e!=null)a2.O(x.q).f.b2(D.Z4)
w=1
break}i=n.cY("pkw_kosten")
d=d.a
h=C.c.aL(p.a.a).length===0?null:C.c.aL(p.a.a)
f=x.z
w=12
return A.k(i.dq(0,A.a5(["kostenart",d,"betrag_brutto",k,"bezeichnung",h,"updated_at",new A.b_(Date.now(),0,!1).dV()],f,f)).iL("id",A.i(a0.h(a4,"id"))),$async$uF)
case 12:case 9:w=13
return A.k(r.w.$0(),$async$uF)
case 13:t=2
w=7
break
case 5:t=4
a1=s.pop()
j=A.a2(a1)
if(a2.e!=null)B.avz(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uF,v)},
xl(d,e){return this.aFm(d,e)},
aFm(a0,a1){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$xl=A.m(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:g=r.e
f=J.V(g)
e=f.h(g,"km_stand_anfang")
e=e==null?null:J.am(e)
if(e==null)e=""
n=$.af()
m=new A.bw(new A.cz(e,C.bb,C.aG),n)
e=f.h(g,"km_stand_ende")
e=e==null?null:J.am(e)
if(e==null)e=""
l=new A.bw(new A.cz(e,C.bb,C.aG),n)
w=3
return A.k(A.hj(null,null,!0,null,new B.bc3(r,m,l),a0,null,!0,!0,x.y),$async$xl)
case 3:if(a3!==!0){w=1
break}q=A.iA(C.c.aL(m.a.a),null)
p=A.iA(C.c.aL(l.a.a),null)
if(q!=null&&p!=null&&p<q){if(a0.e!=null)a0.O(x.q).f.b2(D.aAK)
w=1
break}t=5
e=a1.aE(0,$.bL(),x.A).cY("pkw_jahr")
n=x.N
k=x.z
g=A.a5(["pkw_id",f.h(g,"id"),"jahr",r.f,"km_stand_anfang",q,"km_stand_ende",p],n,k)
f=e.a
j=A.d4(f.b,n,n)
j.m(0,"Prefer","resolution=merge-duplicates")
i=f.a
f=A.z(n,k)
f.m(0,"on_conflict","pkw_id,jahr")
f.K(0,i.ghE())
i=i.tK(0,f)
w=8
return A.k(A.md(e.HH(g,j,C.nS,i),A.l(e).i("t5.T")),$async$xl)
case 8:w=9
return A.k(r.w.$0(),$async$xl)
case 9:t=2
w=7
break
case 5:t=4
d=s.pop()
o=A.a2(d)
if(a0.e!=null)B.avz(a0,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xl,v)},
xm(d,e){return this.aFo(d,e)},
aFo(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xm=A.m(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h={}
h.a="tanken"
n=$.af()
m=new A.bw(C.a7,n)
q=new A.bw(C.a7,n)
w=3
return A.k(A.hj(null,null,!0,null,new B.bcg(h,r,m,q),d,null,!0,!0,x.y),$async$xm)
case 3:if(a0!==!0){w=1
break}n=C.c.aL(m.a.a)
l=A.fW(A.ay(n,",","."))
p=l==null?0:l
if(p<=0){if(d.e!=null)d.O(x.q).f.b2(D.Z4)
w=1
break}t=5
n=e.aE(0,$.bL(),x.A).cY("pkw_kosten")
k=J.a_(r.e,"id")
h=h.a
j=C.c.aL(q.a.a).length===0?null:C.c.aL(q.a.a)
w=8
return A.k(n.iN(0,A.a5(["pkw_id",k,"jahr",r.f,"kostenart",h,"betrag_brutto",p,"bezeichnung",j],x.N,x.z)),$async$xm)
case 8:w=9
return A.k(r.w.$0(),$async$xm)
case 9:t=2
w=7
break
case 5:t=4
g=s.pop()
o=A.a2(g)
if(d.e!=null)B.avz(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xm,v)}}
B.akQ.prototype={
dg(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.p,e=A.b([D.a8r],f),d=h.w
if(!d)e.push(A.nv(D.Fk,D.aH2,h.f.gp(0)===0?g:new B.bc_(h,a0,a1),g))
e=A.b([A.ap(e,C.k,g,C.f,C.h,0,g,g),C.M],f)
w=h.e
if(w.gp(0)===0)e.push(new B.VL("F\xfcr "+h.r+" ist noch keine betriebliche Fahrt erfasst.",C.p,D.abD,g))
else{v=A.b([D.Dh,D.a6b,D.a6k],x.G)
for(u=h.f,t=u.$ti,s=t.i("aK<ag.E>"),r=new A.aK(u,u.gp(0),s),t=t.i("ag.E");r.t();){q=r.d
v.push(new B.fm(A.j(A.i(J.a_(q==null?t.a(q):q,"kennzeichen")),g,g,g,g,g,g,g),!0))}v.push(D.a6c)
r=A.b([],x._)
for(q=w.$ti,w=new A.aK(w,w.gp(0),q.i("aK<ag.E>")),p=x.F,q=q.i("ag.E");w.t();){o=w.d
if(o==null)o=q.a(o)
n=d?g:new B.bc0(h,a0,a1,o)
m=J.V(o)
l=m.h(o,"fahrt_datum")
k=A.eT(A.i(l==null?"":l))
l=A.j(k==null?"":$.dp().am(k),g,g,g,g,g,g,g)
j=m.h(o,"anlass")
l=A.b([new B.fy(l),new B.fy(new A.dQ(D.a0K,A.j(A.i(j==null?"":j),g,C.ak,g,g,g,g,g),g)),new B.fy(A.j(B.bsz(m.h(o,"kilometer")),g,g,g,g,g,g,g))],p)
for(j=new A.aK(u,u.gp(0),s);j.t();){i=j.d
if(J.d(J.a_(i==null?t.a(i):i,"id"),m.h(o,"pkw_id"))){i=m.h(o,"satz_je_km")
if(i==null)i="\u2014"
else{i=C.d.ae(B.uj(i),4)
i=A.ay(i,".",",")+" \u20ac"}}else i=""
l.push(new B.fy(A.j(i,g,g,g,g,g,g,g)))}if(m.h(o,"betrag")==null)o="\u2014"
else{o=B.uj(m.h(o,"betrag"))
o=$.d3().am(o)}l.push(new B.fy(A.j(o,g,g,g,g,g,g,g)))
r.push(new B.rb(n,l,g))}e.push(A.et(B.aBp(16,v,56,40,g,40,r),g,g,g,C.ay))}e.push(C.u)
e.push(A.by(g,A.ap(A.b([A.aB(A.j("Nutzungseinlage "+h.r,g,g,g,A.D(C.j,15,C.q),g,g,g),1),A.j($.d3().am(h.x),g,g,g,A.D(C.j,17,C.q),g,g,g)],f),C.k,g,C.f,C.h,0,g,g),C.ae,g,C.C,g,3))
d=h.y
if(d>0){w=d===1?"":"en"
C.b.K(e,A.b([C.M,A.j(""+d+" Fahrt"+w+" ohne Kilometersatz. Diese Fahrten sind in der Summe nicht enthalten, weil f\xfcr das Fahrzeug Kilometerst\xe4nde oder Kosten fehlen.",g,g,g,A.D(C.an,12,C.l),g,g,g)],f))}return A.ad(e,C.D,g,C.f,C.h,0)},
uC(d,e,f){return this.axR(d,e,f)},
axR(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$uC=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:e={}
d=J.V(a4)
a0=A.eT(A.i(d.h(a4,"fahrt_datum")))
e.a=a0==null?A.bB(r.r,1,1,0,0,0,0):a0
e.b=A.i(d.h(a4,"pkw_id"))
i=d.h(a4,"anlass")
i=A.i(i==null?"":i)
h=$.af()
q=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=C.d.ae(B.uj(d.h(a4,"kilometer")),1)
i=A.ay(i,".",",")
p=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=x.N
w=3
return A.k(A.hj(null,null,!0,null,new B.bbR(e,r,q,p),a2,null,!0,!0,i),$async$uC)
case 3:o=a6
if(o==null||o==="abbrechen"){w=1
break}n=a3.aE(0,$.bL(),x.A)
m=A.i(d.h(a4,"id"))
t=5
w=o==="streichen"?8:10
break
case 8:l=A.a5(["deleted_at",new A.b_(Date.now(),0,!1).dV()],i,i)
w=11
return A.k(n.cY("pkw_fahrten").dq(0,l).iL("id",m),$async$uC)
case 11:w=9
break
case 10:d=C.c.aL(p.a.a)
g=A.fW(A.ay(d,",","."))
k=g==null?0:g
if(k<=0||C.c.aL(q.a.a).length===0){if(a2.e!=null)a2.O(x.q).f.b2(D.Z5)
w=1
break}d=x.z
w=12
return A.k(n.cY("pkw_fahrten").dq(0,A.a5(["pkw_id",e.b,"fahrt_datum",C.c.a_(e.a.dV(),0,10),"anlass",C.c.aL(q.a.a),"kilometer",k,"updated_at",new A.b_(Date.now(),0,!1).dV()],d,d)).iL("id",m),$async$uC)
case 12:case 9:w=13
return A.k(r.z.$0(),$async$uC)
case 13:t=2
w=7
break
case 5:t=4
a1=s.pop()
j=A.a2(a1)
if(a2.e!=null)B.avz(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uC,v)},
xd(d,e){return this.axS(d,e)},
axS(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$xd=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:k={}
j=r.r
i=A.bB(j,A.bi(new A.b_(Date.now(),0,!1)),A.bV(new A.b_(Date.now(),0,!1)),0,0,0,0)
k.a=i
if(A.aW(i)!==j)k.a=A.bB(j,1,1,0,0,0,0)
j=r.f
k.b=A.i(J.a_(j.ga2(j),"id"))
j=$.af()
q=new A.bw(C.a7,j)
n=new A.bw(C.a7,j)
w=3
return A.k(A.hj(null,null,!0,null,new B.bbZ(k,r,q,n),d,null,!0,!0,x.y),$async$xd)
case 3:if(g!==!0){w=1
break}j=C.c.aL(n.a.a)
m=A.fW(A.ay(j,",","."))
p=m==null?0:m
if(p<=0||C.c.aL(q.a.a).length===0){if(d.e!=null)d.O(x.q).f.b2(D.Z5)
w=1
break}t=5
w=8
return A.k(e.aE(0,$.bL(),x.A).cY("pkw_fahrten").iN(0,A.a5(["pkw_id",k.b,"fahrt_datum",C.c.a_(k.a.dV(),0,10),"anlass",C.c.aL(q.a.a),"kilometer",p],x.N,x.aU)),$async$xd)
case 8:w=9
return A.k(r.z.$0(),$async$xd)
case 9:t=2
w=7
break
case 5:t=4
h=s.pop()
o=A.a2(h)
if(d.e!=null)B.avz(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xd,v)}}
B.atI.prototype={
u(d){var w,v,u,t,s,r,q=null,p="Hanken Grotesk",o=this.c,n=A.aa(o),m=n.i("f4<1,f>"),l=A.Q(new A.f4(new A.bd(o,new B.bqC(),n.i("bd<1>")),new B.bqD(),m),m.i("t.E"))
n=x.p
m=A.b([],n)
for(w=o.length,v=0;v<o.length;o.length===w||(0,A.G)(o),++v){u=o[v]
t=A.b9(q,q,C.r,C.p,q,q,q,1,q,D.a7K,q,q,q,q)
s=J.V(u)
r=s.h(u,"full_name")
r=A.i(r==null?"":r)
r=A.j(r,q,q,q,new A.P(!0,C.j,q,p,C.by,q,13,C.S,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)
s=s.h(u,"role_label")
s=A.i(s==null?"":s)
C.b.K(m,A.b([new A.kR(1,C.dX,new A.nW(A.ad(A.b([t,r,A.j(s,q,q,q,new A.P(!0,C.p,q,p,C.by,q,11,C.l,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)],n),C.D,q,C.f,C.h,0),q,C.C,q,q,q,3,q),q),C.aF],n))}o=A.b([D.a8A,C.M,A.ap(m,C.k,q,C.f,C.h,0,q,q)],n)
if(l.length!==0)C.b.K(o,A.b([C.M,A.j("F\xfcr "+C.b.cj(l," und ")+" ist noch keine Unterschrift hinterlegt. Im PDF bleibt die Linie leer, bis die Unterschrift \xfcber DocuSign geholt wurde.",q,q,q,A.D(C.an,12,C.l),q,q,q)],n))
return A.ad(o,C.D,q,C.f,C.h,0)}}
B.amI.prototype={
u(d){var w,v,u,t,s="kostenart",r=null,q=this.c,p=J.V(q),o=D.lV.h(0,A.i(p.h(q,s)))
if(o==null)o=A.i(p.h(q,s))
w=p.h(q,"bezeichnung")
v=C.c.aL(A.i(w==null?"":w))
q=B.uj(p.h(q,"betrag_brutto"))
u=$.d3().am(q)
q=x.p
p=A.b([A.j(o,r,r,r,A.D(C.aU,13,C.l),r,r,r)],q)
if(v.length!==0)p.push(A.j(v,1,C.ak,r,A.D(C.p,11,C.l),r,r,r))
p=A.b([A.aB(A.ad(p,C.D,r,C.f,C.h,0),1),A.j(u,r,r,r,A.D(C.j,13,C.aK),r,r,r)],q)
w=this.d
if(!w)C.b.K(p,A.b([C.cE,D.ads],q))
t=new A.aj(D.a7P,A.ap(p,C.k,r,C.f,C.h,0,r,r),r)
if(w)return t
return A.bC(r,!0,r,A.eF(!1,r,!0,t,r,!0,r,r,r,r,r,r,r,r,r,r,r,this.e,r,r,r,r,r,r,r),!1,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,o+" "+u+" korrigieren",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.P,r)}}
B.arR.prototype={
u(d){var w,v,u=null,t=this.d,s=t==null,r=s?u:t.h(0,"freigegeben_am"),q=A.eT(A.i(r==null?"":r))
t=s?u:t.h(0,"unterzeichner")
x.g.a(t)
if(t==null)t=C.bn
t=J.cW(t,new B.boF(),x.N).B_(0,new B.boG())
w=A.Q(t,t.$ti.i("t.E"))
t=A.j("Freigegeben und unterschrieben",u,u,u,A.D(C.j,14,C.q),u,u,u)
s=q==null?"":" seit "+$.dp().am(q)
r=w.length===0?"":", unterschrieben von "+C.b.cj(w," und ")
v=x.p
return A.by(u,A.ap(A.b([D.acQ,C.aF,A.aB(A.ad(A.b([t,C.bW,A.j("Die Anlage "+this.c+" ist abgeschlossen"+s+r+". Korrekturen sind nicht mehr m\xf6glich, weder hier noch \xfcber einen anderen Weg.",u,u,u,A.D(C.aU,12,C.l),u,u,u),C.b3,A.j("Ist etwas falsch, geh\xf6rt die Berichtigung in eine neue Anlage. Ein unterschriebenes Dokument nachtr\xe4glich zu \xe4ndern, w\xe4re keine Korrektur.",u,u,u,A.D(C.p,12,C.l),u,u,u)],v),C.D,u,C.f,C.h,0),1)],v),C.D,u,C.f,C.h,0,u,u),C.ae,u,C.C,u,3)}}
B.CE.prototype={
u(d){var w=null,v=this.e,u=v?C.S:C.l
u=A.aB(A.j(this.c,w,w,w,A.D(v?C.j:C.aU,13,u),w,w,w),1)
return new A.aj(D.DF,A.ap(A.b([u,A.j(this.d,w,w,w,A.D(C.j,13,v?C.q:C.aK),w,w,w)],x.p),C.k,w,C.f,C.h,0,w,w),w)}}
B.aiz.prototype={
u(d){var w=null,v=A.aR(9999),u=A.cP(C.m.f_(0.5),1)
return A.b9(w,A.ad(A.b([A.j(this.c,w,w,w,A.D(C.m,13,C.q),w,w,w),A.j(this.d,w,w,w,A.D(C.m,9,C.l),w,w,w)],x.p),C.fR,w,C.f,C.h,0),C.r,w,w,new A.b5(C.bt,w,u,v,w,w,C.G),w,w,w,w,D.a7S,w,w,w)}}
B.VL.prototype={
u(d){var w=null
return A.by(w,A.ap(A.b([A.co(this.e,this.d,w,w),C.aF,A.aB(A.j(this.c,w,w,w,A.D(C.j,14,C.l),w,w,w),1)],x.p),C.D,w,C.f,C.h,0,w,w),C.ae,w,C.C,w,3)}}
B.a0u.prototype={
u(d){var w=null
return A.dS(D.a9B,w,A.dF(A.b([D.axL,C.M,A.j("\xdcbersichten, die Dein Steuerberater zum Jahresabschluss braucht. Jede l\xe4sst sich als PDF ausgeben und von beiden Gesellschaftern freigeben.",w,w,w,A.D(C.p,13,C.l),w,w,w),C.aQ,B.bWu(w,"Kilometersatz und Nutzungseinlage",C.nX,w,w,w,"PKW-Kosten",new B.awN(d))],x.p),C.cj,w,C.K,!1),w,w)}}
B.a4V.prototype={
dg(d,e){return A.dS(D.a9f,null,A.dz(e.ap($.bwv(),x.w),new B.aCv(e),new B.aCw(),new B.aCx(),!1,!0,!1,x.D,x.E),null,null)}}
B.akD.prototype={
u(d){return D.a3e}}
B.ahq.prototype={
aMr(d){switch(d){case"approved":return C.aE
case"rejected":return C.an
case"cancelled":return C.p
default:return C.m}},
dg(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=J.V(e),a0=d.h(e,"status"),a1=a0==null?f:J.am(a0)
if(a1==null)a1="pending"
a0=d.h(e,"my_decision")
w=a0==null?f:J.am(a0)
if(w==null)w="pending"
a0=x.g.a(d.h(e,"decisions"))
v=a0==null?f:J.cG(a0,x.P)
if(v==null)v=A.b([],x.t)
u=new B.b4a()
t=u.$1(d.h(e,"period_from"))
s=u.$1(d.h(e,"period_to"))
r=u.$1(d.h(e,"requested_at"))
a0=a1==="approved"
q=a0||a1==="rejected"||a1==="cancelled"
p=d.h(e,"final_pdf_path")
o=p==null?f:J.am(p)
n=a0&&o!=null&&o.length!==0
a0=d.h(e,"signed_url")
m=a0==null?f:J.am(a0)
a0=d.h(e,"document_kind")
l=new B.b49(g,n,a2,a1,a0==null?f:J.am(a0),m,a3,o)
a0=q?l:f
p=g.aMr(a1)
e=d.h(e,"title")
e=e==null?f:J.am(e)
if(e==null)e=""
e=A.aB(A.j(e,f,f,f,A.D(C.j,15,C.q),f,f,f),1)
A:{d="approved"===a1
if(d){k="freigegeben"
break A}if("rejected"===a1){k="abgelehnt"
break A}if("cancelled"===a1){k="abgebrochen"
break A}k="offen"
break A}B:{if(d){d=C.fG
break B}if("rejected"===a1){d=C.ml
break B}if("cancelled"===a1){d=C.mm
break B}d=C.kd
break B}j=x.p
d=A.ap(A.b([e,new A.j7(k,d,f,f)],j),C.k,f,C.f,C.h,0,f,f)
e=t==null?"?":$.dp().am(t)
k=s==null?"?":$.dp().am(s)
i=r==null?"":" \xb7 angefragt "+$.dp().am(r)
i=A.b([d,C.b3,A.j("Zeitraum: "+e+" \u2013 "+k+i,f,f,f,A.D(C.p,11,C.l),f,f,f),C.u],j)
for(e=J.bh(v);e.t();)i.push(new B.ajK(e.gN(e),f))
if(a1==="pending"&&w==="pending")C.b.K(i,A.b([C.u,A.ap(A.b([A.aB(A.ha(C.o3,D.aH6,new B.b47(g,a2,a3),A.dJ(C.kH,C.A,f,f,f,f,f)),1),C.aV,A.aB(A.fU(C.Fb,C.ms,new B.b48(g,a2,a3),A.oD(f,f,f,f,f,f,f,f,f,C.an,f,f,f,f,f,D.Bx,f,f,f,f)),1)],j),C.k,f,C.f,C.h,0,f,f)],j))
if(n)C.b.K(i,A.b([C.u,A.ap(A.b([D.F8,C.aZ,A.aB(A.j("Tippen zum \xd6ffnen des signierten PDFs",f,f,f,A.D(C.m,11,C.S),f,f,f),1),D.adg],j),C.k,f,C.f,C.h,0,f,f)],j))
h=A.by(f,A.ad(i,C.D,f,C.f,C.h,0),f,a0,C.ai,p,3)
return new A.aj(C.dU,q?A.A0(h,0.6):h,f)},
Cq(d,e,f){return this.aHN(d,e,f)},
aHN(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Cq=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(f.length===0){w=1
break}r=d.O(x.q).f
r.b2(D.aAu)
q=e.aE(0,$.bww(),x.u)
t=4
w=7
return A.k(q.GR(f),$async$Cq)
case 7:p=h
if(p==null||p.length===0){m=A.e7("Kein Signed-URL verf\xfcgbar")
throw A.e(m)}w=8
return A.k(A.mG(A.cm(p,0,null),C.em,"_blank"),$async$Cq)
case 8:o=h
if(!o&&d.e!=null)r.b2(A.c5(new B.GM("Link kopieren",new B.b46(p),null),null,null,null,null,C.n,null,D.aGP,null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.a2(k)
if(d.e!=null)r.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cq,v)},
uu(d,e,f){return this.awg(d,e,f)},
awg(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$uu=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:m=null
w=f==="rejected"?3:5
break
case 3:w=6
return A.k(A.hj(null,null,!0,null,new B.b44(new A.bw(C.a7,$.af()),d),d,null,!0,!0,x.N),$async$uu)
case 6:m=h
if(m==null||C.c.aL(m).length<3){w=1
break}w=4
break
case 5:w=7
return A.k(A.kE(null,new B.b45(),d,!0,null,null,x.y),$async$uu)
case 7:if(h!==!0){w=1
break}case 4:t=9
p=e.aE(0,$.bww(),x.u)
o=J.a_(r.e,"id")
o=o==null?null:J.am(o)
if(o==null)o=""
w=12
return A.k(p.Lt(o,m,f),$async$uu)
case 12:if(d.e!=null){p=$.bwv()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(p)
p=d.O(x.q).f
p.b2(A.c5(null,null,null,null,null,C.n,null,A.j(f==="approved"?"Freigegeben \u2014 signiertes PDF wird erzeugt.":"Abgelehnt.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=11
break
case 9:t=8
l=s.pop()
q=A.a2(l)
if(d.e!=null)d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=11
break
case 8:w=2
break
case 11:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uu,v)}}
B.Co.prototype={
W(){return new B.Ym()}}
B.Ym.prototype={
au(){this.aM()
this.ID()},
ID(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ID=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
q=r.gc9().aE(0,$.bL(),x.A)
l=q.gdY().e.a
l=l==null?null:l.r
p=l==null?null:l.a
if(p==null){w=1
break}w=7
return A.k(q.cY("partner_signatures").ho(0,"id, full_name, docusign_signature_uri, image_url, captured_via").iL("profile_id",p),$async$ID)
case 7:o=e
n=J.cG(o,x.P)
r.J(new B.bnS(r,n))
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a2(j)
r.J(new B.bnT(r,m))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$ID,v)},
JO(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$JO=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.bnX(q))
t=4
k=q.gc9().aE(0,$.bL(),x.A).ax
k===$&&A.a()
j=q.w
j.toString
w=7
return A.k(k.hA("docusign-fetch-signature",A.a5(["signature_id",J.a_(j,"id")],x.N,x.z)),$async$JO)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}o=p.a
k=x.f
if(k.b(o)&&J.d(J.a_(o,"ok"),!0)){k=q.c
if(k!=null)A.b6(k,!1).cD(!0)}else{if(k.b(o)){j=J.a_(o,"error")
j=j==null?null:J.am(j)
i=j==null?A.i(o):j}else i=A.i(o)
n=i
if(k.b(o)){k=J.a_(o,"hint")
h=k==null?null:J.am(k)}else h=null
m=h
q.J(new B.bnY(q,m,n))}r.push(6)
w=5
break
case 4:t=3
f=s.pop()
l=A.a2(f)
q.J(new B.bnZ(q,l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bo_(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$JO,v)},
uX(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$uX=A.m(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.bo0(q))
t=4
w=7
return A.k($.aFu.cd().b_1(C.a8W,!0),$async$uX)
case 7:p=a1
if(p==null||J.ev(p.a)){q.J(new B.bo1(q))
r=[1]
w=5
break}o=J.Kh(p.a)
n=o.c
if(n==null){q.J(new B.bo2(q))
r=[1]
w=5
break}m=q.gc9().aE(0,$.bL(),x.A)
h=C.b.gaf(o.b.split(".")).toLowerCase()
l=h
g=q.w
g.toString
k=A.i(J.a_(g,"id"))+"."+A.i(l)
g=m.ay
g===$&&A.a()
g=g.cY("partner-signatures")
f=J.d(l,"jpg")||J.d(l,"jpeg")?"image/jpeg":"image/png"
w=8
return A.k(g.Aj(k,n,new A.Ep(!0,f)),$async$uX)
case 8:f=m.ay
f===$&&A.a()
w=9
return A.k(f.cY("partner-signatures").nR(k,31536e3),$async$uX)
case 9:j=a1
f=q.w
f.toString
g=x.z
w=10
return A.k(m.ev("set_partner_signature_image",A.a5(["p_signature_id",J.a_(f,"id"),"p_image_url",j,"p_captured_via","manual"],x.N,g),g),$async$uX)
case 10:g=q.c
if(g!=null)A.b6(g,!1).cD(!0)
r.push(6)
w=5
break
case 4:t=3
d=s.pop()
i=A.a2(d)
q.J(new B.bo3(q,i))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bo4(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uX,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n="image_url",m=p.w,l=m==null,k=!l
if(k){m=J.a_(m,"docusign_signature_uri")
m=m==null?o:J.am(m).length!==0
w=m===!0}else w=!1
if(k){m=p.w
m.toString
m=J.a_(m,n)
m=m==null?o:J.am(m).length!==0
v=m===!0}else v=!1
m=A.bD(d,o,x.m).w
u=x.p
t=A.b([A.j("Signatur f\xfcr Freigabe w\xe4hlen",o,o,o,A.c8(C.j,20,C.q),o,o,o),C.M,A.j("Deine Unterschrift wird im signierten PDF als Freigabe-Stempel eingebettet.",o,o,o,A.D(C.p,13,C.l),o,o,o),C.L],u)
if(p.x)t.push(C.bF)
else if(l)t.push(A.by(C.an,A.j("F\xfcr Dein Konto ist kein Signatur-Slot verkn\xfcpft. Bitte einen System-Admin bitten, partner_signatures.profile_id auf Deine Profil-ID zu setzen.",o,o,o,A.D(C.j,13,C.l),o,o,o),C.eJ,o,C.C,o,3))
else{l=A.b([],u)
if(v){s=A.cP(C.am,1)
r=A.aR(12)
q=p.w
q.toString
q=J.a_(q,n)
q=q==null?o:J.am(q)
if(q==null)q=""
l.push(A.b9(C.W,A.aJo(q,new B.bo8(),C.w1,o,o,o,o),C.r,o,o,new A.b5(C.ae,o,s,r,o,o,C.G),o,80,o,C.dU,o,o,o,o))}s=p.y||!w?o:p.gaMA()
l.push(A.ha(D.ad8,D.aHE,s,A.dJ(C.m,C.A,o,C.el,o,o,o)))
if(!w)l.push(new A.aj(C.hX,A.j("Kein DocuSign-Signatur-Slot hinterlegt.",o,o,o,A.D(C.p,10,C.l),o,o,o),o))
l.push(C.M)
s=p.y?o:p.gaOh()
l.push(A.fU(D.ach,D.aGA,s,A.oD(o,o,o,o,o,o,o,o,o,C.j,o,o,C.el,o,o,C.w0,o,o,o,o)))
l.push(C.M)
s=p.y?o:new B.bo9(d)
l.push(A.da(A.j(v?"Diese Signatur verwenden":"Ohne Signatur freigeben (Platzhalter)",o,o,o,o,o,o,o),o,o,s,o,o))
C.b.K(t,l)}l=p.z
if(l!=null)C.b.K(t,A.b([C.u,A.j(l,o,o,o,A.D(C.an,12,C.l),o,o,o)],u))
t.push(C.M)
t.push(A.da(C.bZ,o,o,p.y?o:new B.boa(d),o,o))
return new A.aj(new A.al(0,0,0,m.f.d),A.et(A.ad(t,C.a8,o,C.f,C.H,0),o,C.C,o,C.K),o)}}
B.ajK.prototype={
u(d){var w,v,u,t,s=null,r=this.c,q=J.V(r),p=q.h(r,"decision"),o=p==null?s:J.am(p)
if(o==null)o="pending"
p=q.h(r,"approver_name")
w=p==null?s:J.am(p)
if(w==null)w="?"
p=q.h(r,"decided_at")
v=p==null?s:J.am(p)
r=q.h(r,"comment")
u=r==null?s:J.am(r)
A:{r="approved"===o
if(r){q=C.i2
break A}if("rejected"===o){q=C.Eu
break A}q=C.EE
break A}B:{if(r){p=C.aE
break B}if("rejected"===o){p=C.an
break B}p=C.m
break B}p=A.co(q,p,s,16)
C:{if(r){r="freigegeben"
break C}if("rejected"===o){r="abgelehnt"
break C}r="ausstehend"
break C}q=v==null?"":" \xb7 "+v
t=x.p
q=A.b([A.j(w+" \u2014 "+r+q,s,s,s,A.D(C.j,12,C.S),s,s,s)],t)
if((u==null?s:u.length!==0)===!0)q.push(A.j("\u201e"+A.i(u)+'"',s,s,s,A.D(C.p,11,C.l),s,s,s))
return new A.aj(C.a7B,A.ap(A.b([p,C.aZ,A.aB(A.ad(q,C.D,s,C.f,C.h,0),1)],t),C.k,s,C.f,C.h,0,s,s),s)}}
B.KX.prototype={
W(){return new B.TL()}}
B.TL.prototype={
Hq(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m
var $async$Hq=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b4C(r))
u=3
o=r.gc9().aE(0,$.ec(),x.cu)
w=6
return A.k(o.eo(o.a.gaQ1(),x.N),$async$Hq)
case 6:q=e
r.J(new B.b4D(r,q))
s.push(5)
w=4
break
case 3:u=2
m=t.pop()
p=A.a2(m)
o=r.c
if(o!=null)o.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.b4E(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Hq,v)},
HS(){var w=0,v=A.q(x.H),u,t=this,s
var $async$HS=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.w
if(s==null){w=1
break}w=3
return A.k(B.bBe(s),$async$HS)
case 3:case 1:return A.o(u,v)}})
return A.p($async$HS,v)},
u(d){var w,v=this,u=null,t=A.j("Exportiert alle Unternehmer-Kunden (customer_type = business) als CSV-Datei im sevDesk-Import-Format. Semikolon-getrennt, UTF-8, eine Zeile pro Kunde. Import in sevDesk unter Stammdaten \u2192 Kunden \u2192 Importieren.",u,u,u,A.D(C.p,13,C.l),u,u,u),s=v.x,r=s?u:v.gat9()
s=s?C.v_:D.Fd
w=x.p
r=A.b([t,C.aQ,A.ha(s,D.aHa,r,A.dJ(C.m,C.A,u,C.hW,u,u,u)),C.u],w)
if(v.w!=null){t=A.fU(E.F9,D.aH3,v.gax8(),A.oD(u,u,u,u,u,u,u,u,u,C.j,u,u,C.hW,u,u,C.kz,u,u,u,u))
s=v.w
s.toString
C.b.K(r,A.b([t,C.u,A.by(u,A.aYp(s,A.D(C.j,12,C.l).aR8("monospace")),u,u,C.dC,u,3)],w))}return A.dS(D.a9l,u,A.dF(r,C.C,u,C.K,!1),u,u)}}
B.Lm.prototype={
W(){return new B.U4()}}
B.U4.prototype={
au(){this.aM()
this.w=this.wX()},
wX(){var w=0,v=A.q(x.D),u,t=this,s
var $async$wX=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A
w=3
return A.k(t.gc9().aE(0,$.bL(),x.A).cY("cancellation_requests").ho(0,"id, email, customer_number, kind, reason, cancel_at, requested_at, processed_at").qJ(0,"requested_at",!1),$async$wX)
case 3:u=s.eq(e,!0,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$wX,v)},
II(d){return this.aFX(d)},
aFX(d){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$II=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:r=t.gc9().aE(0,$.bL(),x.A)
q=r.cY("cancellation_requests")
p=new A.b_(Date.now(),0,!1).FI().dV()
o=r.gdY().e.a
o=o==null?null:o.r
o=o==null?null:o.a
s=x.z
w=3
return A.k(q.dq(0,A.a5(["processed_at",p,"processed_by",o],s,s)).iL("id",d),$async$II)
case 3:if(t.c==null){w=1
break}t.J(new B.b6c(t))
case 1:return A.o(u,v)}})
return A.p($async$II,v)},
ayq(d){var w,v
if(d==null||d.length===0)return"\u2014"
w=A.eT(d)
v=w==null?null:w.FD()
if(v==null)return d
w=new B.b6b()
return A.i(w.$1(A.bV(v)))+"."+A.i(w.$1(A.bi(v)))+"."+A.aW(v)+", "+A.i(w.$1(A.hA(v)))+":"+A.i(w.$1(A.vR(v)))+" Uhr"},
u(d){var w=this.w
w===$&&A.a()
return A.dS(D.a9h,C.ch,A.ig(A.yQ(new B.b6g(this),w,x.D),C.m,new B.b6h(this)),null,null)}}
B.aim.prototype={
u(d){var w,v,u,t,s,r="processed_at",q=null,p="customer_number",o=this.c,n=J.V(o),m=n.h(o,r)==null,l=!m,k=J.d(n.h(o,"kind"),"ausserordentlich"),j=l?C.am:C.dz,i=n.h(o,"email")
i=A.aB(A.j(J.am(i==null?"":i),q,C.ak,q,A.D(C.j,14,C.q),q,q,q),1)
w=l?C.aE.f_(0.12):C.dz.f_(0.14)
v=A.cP(l?C.aE:C.dz,0.8)
u=A.aR(9999)
t=l?"BEARBEITET":"OFFEN"
s=x.p
u=A.ap(A.b([i,A.b9(q,A.j(t,q,q,q,A.D(l?C.aE:C.dz,10,C.q).fZ(0.6),q,q,q),C.r,q,q,new A.b5(w,q,v,u,q,q,C.G),q,q,q,q,C.xb,q,q,q)],s),C.k,q,C.f,C.h,0,q,q)
i=k?"Au\xdferordentliche":"Ordentliche"
w=n.h(o,"cancel_at")
i=A.j(i+" K\xfcndigung \xb7 "+J.am(w==null?"":w),q,q,q,A.D(C.j,12,C.S),q,q,q)
w=this.d
v=A.i(w.$1(A.ak(n.h(o,"requested_at"))))
t=n.h(o,p)!=null?" \xb7 Kd-Nr. "+A.i(n.h(o,p)):""
t=A.b([u,C.M,i,A.j("Eingegangen: "+v+t,q,q,q,A.D(C.p,12,C.l),q,q,q)],s)
i=n.h(o,"reason")
if(J.am(i==null?"":i).length!==0)C.b.K(t,A.b([C.M,A.j("Grund: "+A.i(n.h(o,"reason")),q,q,q,A.D(C.aU,12,C.l),q,q,q)],s))
if(l)t.push(A.j("Bearbeitet: "+A.i(w.$1(A.ak(n.h(o,r)))),q,q,q,A.D(C.aE,12,C.l),q,q,q))
if(m)C.b.K(t,A.b([C.u,A.fU(D.acG,D.aH1,this.e,q)],s))
return A.by(j,A.ad(t,C.D,q,C.f,C.h,0),q,q,C.C,q,3)}}
B.a1I.prototype={
u(d){return B.Q3("collected_at","cash",new B.azg(),new B.azh(),new B.azi(),"cash_collection_logs","Geldentnahme")}}
B.Bv.prototype={
W(){var w=$.af()
return new B.U7(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(new A.cz("0",C.bb,C.aG),w))}}
B.U7.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ao()},
aup(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hU()
if(s!==!0)return
s=t.c
s.toString
s=A.b6(s,!1)
w=t.z
v=t.x.a.a
v=A.JV(A.ay(v,",","."))
u=t.y.a.a
if(u.length===0)u="0"
s.cD(A.a5(["machine_id",w,"amount_gross",v,"change_amount",A.JV(A.ay(u,",",".")),"collected_at",new A.b_(Date.now(),0,!1).dV()],x.N,x.X))},
u(d){var w=this,v=null
return new A.aj(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.j("Geldentnahme erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OL(new B.b6l(w),w.z),C.u,A.db(v,!1,w.x,D.ae8,v,C.ez,1,!1,v,v,C.X,v,new B.b6m()),C.u,A.db(v,!1,w.y,D.aec,v,C.ez,1,!1,v,v,C.X,v,v),C.L,A.dk(C.dt,w.gauo(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.a23.prototype={
u(d){return B.Q3("cleaned_at","cleaning",new B.azU(),new B.azV(),new B.azW(),"cleaning_logs","Reinigung")}}
B.By.prototype={
W(){var w=$.af()
return new B.Ui(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.Ui.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ao()},
av1(){var w,v,u,t,s=this,r=s.w.ga1()
r=r==null?null:r.hU()
if(r!==!0)return
r=s.c
r.toString
r=A.b6(r,!1)
w=s.z
v=s.Q
u=C.c.aL(s.x.a.a)
if(u.length===0)u=null
t=C.c.aL(s.y.a.a)
if(t.length===0)t=null
r.cD(A.a5(["machine_id",w,"cleaning_type",v,"agent",u,"notes",t,"photo_path",s.as,"cleaned_at",new A.b_(Date.now(),0,!1).dV()],x.N,x.T))},
u(d){var w=this,v=null
return new A.aj(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.j("Reinigung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OL(new B.b78(w),w.z),C.u,A.k1(D.aeW,w.Q,!1,D.ajY,new B.b79(w),v,x.N),C.u,A.db(v,!1,w.x,D.aex,v,v,1,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.y,D.aeh,v,v,2,!1,v,v,C.X,v,v),C.u,new B.FH(new B.b7a(w),v),C.L,A.dk(C.dt,w.gav0(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.LW.prototype={
W(){return new B.Uk()}}
B.Uk.prototype={
au(){this.aM()
this.w=this.wY()},
wY(){var w=0,v=A.q(x.D),u,t=this,s
var $async$wY=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A
w=3
return A.k(t.gc9().aE(0,$.bL(),x.A).cY("purchase_complaints").ho(0,"id, kind, comment, status, resolution_note, created_at, purchase:purchases(purchased_at, total_gross), customer:customers(customer_number)").qJ(0,"created_at",!1),$async$wY)
case 3:u=s.eq(e,!0,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$wY,v)},
xH(d,e,f){return this.aLH(d,e,f)},
aLG(d,e){return this.xH(d,e,!1)},
aLH(d,e,f){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o,n
var $async$xH=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=f?3:5
break
case 3:s=A.ak(J.a_(d,"resolution_note"))
if(s==null)s=""
r=new A.bw(new A.cz(s,C.bb,C.aG),$.af())
s=t.c
s.toString
w=6
return A.k(A.hj(null,null,!0,null,new B.b7m(e,r),s,null,!0,!0,x.y),$async$xH)
case 6:if(h!==!0){w=1
break}q=C.c.aL(r.a.a)
if(q.length===0)q=null
w=4
break
case 5:q=null
case 4:p=t.gc9().aE(0,$.bL(),x.A)
s=p.cY("purchase_complaints")
o=x.z
o=A.z(o,o)
o.m(0,"status",e)
if(f)o.m(0,"resolution_note",q)
n=p.gdY().e.a
n=n==null?null:n.r
o.m(0,"updated_by",n==null?null:n.a)
w=7
return A.k(s.dq(0,o).iL("id",A.aI(J.a_(d,"id"))),$async$xH)
case 7:if(t.c==null){w=1
break}t.J(new B.b7n(t))
case 1:return A.o(u,v)}})
return A.p($async$xH,v)},
u(d){var w=this.w
w===$&&A.a()
return A.dS(D.a9r,C.ch,A.yQ(new B.b7s(this),w,x.D),null,null)}}
B.HQ.prototype={
u(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="resolution_note",d=g.c,a0=J.V(d),a1=A.ak(a0.h(d,"kind"))
if(a1==null)a1="other"
w=g.d.$1(a1)
v=A.ak(a0.h(d,"status"))
if(v==null)v="open"
u=g.e.$1(v)
a1=x.h
t=a1.a(a0.h(d,"purchase"))
s=a1.a(a0.h(d,"customer"))
a1=A.ak(a0.h(d,"created_at"))
r=A.eT(a1==null?"":a1)
a1=t==null
q=A.ak(a1?f:J.a_(t,"purchased_at"))
p=A.eT(q==null?"":q)
q=v==="open"
o=q||v==="in_progress"
n=o?C.m:f
m=A.co(w.a,C.j,f,18)
l=A.aB(A.j(w.b,f,f,f,A.D(C.j,14,C.q),f,f,f),1)
k=u.a
j=A.cP(k,1)
i=A.aR(9999)
h=x.p
i=A.ap(A.b([m,C.aZ,l,A.b9(f,A.j(u.b,f,f,f,A.D(k,10,C.q).fZ(0.6),f,f,f),C.r,f,f,new A.b5(f,f,j,i,f,f,C.G),f,f,f,f,C.xb,f,f,f)],h),C.k,f,C.f,C.h,0,f,f)
m=s==null?f:J.a_(s,"customer_number")
m=A.i(m==null?"\u2014":m)
l=p!=null?$.dp().am(p):"\u2014"
k=A.b4(a1?f:J.a_(t,"total_gross"))
a1=k==null?0:k
a1=$.d3().am(a1)
k=r!=null?$.dp().am(r):"\u2014"
k=A.b([i,C.M,A.j("Kunde "+m+" \xb7 Kauf "+l+" \xfcber "+a1+" \xb7 gemeldet "+k,f,f,f,A.D(C.p,12,C.l),f,f,f)],h)
a1=A.ak(a0.h(d,"comment"))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.M,A.j("\u201e"+A.i(a0.h(d,"comment"))+'"',f,f,f,A.D(C.j,13,C.l).ep(1.4),f,f,f)],h))
a1=A.ak(a0.h(d,e))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.M,A.j("Antwort: "+A.i(a0.h(d,e)),f,f,f,A.D(C.p,12,C.l).ep(1.35),f,f,f)],h))
if(o){d=A.b([],h)
if(q)d.push(A.fU(D.ac3,D.aGj,new B.b7h(g),A.oD(f,f,f,f,f,f,f,f,f,C.j,f,f,f,f,f,C.kz,f,f,f,f)))
d.push(A.ha(D.acC,D.ZF,new B.b7i(g),A.dJ(C.bU,C.m,f,f,f,f,f)))
d.push(A.fU(D.acH,C.ms,new B.b7j(g),A.oD(f,f,f,f,f,f,f,f,f,C.an,f,f,f,f,f,D.Bx,f,f,f,f)))
C.b.K(k,A.b([C.u,A.lo(C.cx,d,C.dI,8,8)],h))}return A.by(f,A.ad(k,C.D,f,C.f,C.h,0),f,f,C.ai,n,3)}}
B.a4U.prototype={
u(d){return B.Q3("disposed_at","disposal",new B.aCr(),new B.aCs(),new B.aCt(),"disposal_logs","Vernichtung")}}
B.BG.prototype={
W(){var w=$.af()
return new B.V_(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.V_.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ao()},
awQ(){var w,v,u,t,s,r,q=this,p=null,o=q.w.ga1()
o=o==null?p:o.hU()
if(o!==!0)return
o=q.c
o.toString
o=A.b6(o,!1)
w=q.z
v=q.Q
u=C.c.aL(q.y.a.a)
if(u.length===0)u=p
t=A.el(q.x.a.a,p)
s=q.as
r=q.at
r=r==null?p:C.c.a_(r.dV(),0,10)
o.cD(A.a5(["machine_id",w,"product_id",v,"product_label",u,"quantity",t,"reason",s,"mhd_date",r,"photo_path",q.ax,"disposed_at",new A.b_(Date.now(),0,!1).dV()],x.N,x.X))},
u(d){var w=this,v=null,u=w.gc9().ap($.bDA(),x.w),t=A.bD(d,v,x.m).w,s=A.j("Vernichtung erfassen",v,v,v,A.W(d).ok.r,v,v,v),r=B.OL(new B.bab(w),w.z),q=B.axu(u,new B.bac(w),new B.bad(),x.D,x.l),p=A.db(v,!1,w.y,D.aed,v,v,1,!1,v,v,C.X,v,new B.bae()),o=A.db(v,!1,w.x,D.aeI,v,C.cY,1,!1,v,v,C.X,v,new B.baf()),n=A.k1(D.aeL,w.as,!1,D.akd,new B.bag(w),v,x.N),m=w.at
return new A.aj(new A.al(0,0,0,t.f.d),A.et(A.k4(v,A.ad(A.b([s,C.L,r,C.u,q,C.u,p,C.u,o,C.u,n,C.M,A.rL(!1,C.a9,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.bah(w,d),!1,v,v,v,v,v,v,A.j(m==null?"MHD-Datum (optional)":"MHD: "+C.c.a_(m.dV(),0,10),v,v,v,v,v,v,v),v,C.yo,v),C.M,new B.FH(new B.bai(w),v),C.M,A.dk(C.dt,w.gawP(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.ME.prototype={
W(){return new B.akc()}}
B.akc.prototype={
au(){this.aM()
if(!$.bJw){$.bJw=!0
A.byb(new B.bb2(this),x.a)}},
u(d){var w=this,v=null,u=w.gc9(),t=x.w,s=u.ap($.K9(),t),r=u.ap($.bwx(),t)
t=B.axu(u.ap($.bwI(),x.i),new B.baZ(),new B.bb_(),x.C,x.y)?B.a5I(C.m,C.A,D.act,D.ZG,new B.bb0(w,d)):v
return A.dS(D.a9D,v,A.ad(A.b([new B.EC(A.b([new B.v7(D.abB,"Pr\xfcfer-Export als ZIP",new B.bb1(w,d),C.m,v,w.y)],x.B),D.DK,v),A.aB(w.atj(0,d,u,s,r),1)],x.p),C.k,v,C.f,C.h,0),v,t)},
atj(d,e,f,g,h){return A.dz(g,new B.baD(this,h,f,B.axu(f.ap($.bwI(),x.i),new B.baE(),new B.baF(),x.C,x.y),e),new B.baG(),new B.baH(),!1,!0,!1,x.D,x.l)},
x5(d,e,f,g){return this.aHK(0,e,f,g)},
aHK(d,e,f,a0){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$x5=A.m(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:j=J.V(a0)
i=j.h(a0,"latest_file_path")
h=i==null?null:J.am(i)
if(h==null||h.length===0){e.O(x.q).f.b2(D.aAp)
w=1
break}i=j.h(a0,"title")
m=i==null?null:J.am(i)
r=m==null?"Dokument":m
l=h.toLowerCase()
q=C.c.hs(l,".pdf")
p=C.c.hs(l,".png")||C.c.hs(l,".jpg")||C.c.hs(l,".jpeg")||C.c.hs(l,".gif")||C.c.hs(l,".webp")
j=j.h(a0,"signed_url")
o=j==null?null:J.am(j)
t=4
w=o==null?7:8
break
case 7:j=f.aE(0,$.bL(),x.A).ay
j===$&&A.a()
w=9
return A.k(j.cY("documents").nR(h,86400),$async$x5)
case 9:o=a2
case 8:if(e.e==null){w=1
break}w=q||p?10:12
break
case 10:w=13
return A.k(B.bBL(e,r,o),$async$x5)
case 13:w=11
break
case 12:w=14
return A.k(A.mG(A.cm(o,0,null),C.em,null),$async$x5)
case 14:if(e.e!=null)e.O(x.q).f.b2(D.aAE)
case 11:t=2
w=6
break
case 4:t=3
g=s.pop()
n=A.a2(g)
if(e.e!=null)e.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x5,v)},
wU(d,e,f){return this.asO(d,e,f)},
asO(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$wU=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.k($.aFu.cd().zD(D.anR,C.xR,!0),$async$wU)
case 3:j=h
if(j==null||J.ev(j.a)){w=1
break}r=J.qU(j.a)
if(r.c==null){w=1
break}t=5
n=e.aE(0,$.bDC(),x.Z)
m=r.b
l=r.c
l.toString
w=8
return A.k(n.b1v(0,"documents",l,m),$async$wU)
case 8:q=h
m=x.z
w=9
return A.k(e.aE(0,$.bL(),x.A).ev("add_document_version",A.a5(["p_document",f,"p_file_path",q,"p_notes",r.b],x.N,m),m),$async$wU)
case 9:if(d.e==null){w=1
break}n=$.K9()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(n)
p=C.c.hs(r.b.toLowerCase(),".pdf")
n=d.O(x.q).f
n.b2(A.c5(null,null,null,null,null,C.n,null,A.j(p?"Neue Version gespeichert.":"Version gespeichert. Hinweis: Nicht-PDFs werden beim \xd6ffnen heruntergeladen \u2014 PDF ist ideal f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
i=s.pop()
o=A.a2(i)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Upload fehlgeschlagen: "+A.i(o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$wU,v)},
CO(d,e,f){return this.aLK(d,e,f)},
aLK(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$CO=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:o=J.V(f)
n=o.h(f,"valid_until")
m=n==null?null:J.am(n)
l=m!=null&&m.length!==0?A.eT(m):null
n=l==null?new A.b_(Date.now(),0,!1).us(31536e9):l
w=3
return A.k(A.pe(d,A.bB(2020,1,1,0,0,0,0),null,n,A.bB(2100,1,1,0,0,0,0),C.eq),$async$CO)
case 3:r=h
if(r==null){w=1
break}t=5
n=x.z
w=8
return A.k(e.aE(0,$.bL(),x.A).ev("set_document_valid_until",A.a5(["p_document",o.h(f,"id"),"p_valid_until",C.c.a_(r.dV(),0,10)],x.N,n),n),$async$CO)
case 8:if(d.e==null){w=1
break}o=$.K9()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(o)
d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("G\xfcltig bis "+$.dp().am(r)+".",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
k=s.pop()
q=A.a2(k)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CO,v)},
CJ(d,e,f){return this.aKc(d,e,f)},
aKc(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o
var $async$CJ=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.k(A.hj(null,null,!0,null,new B.baY(f,d),d,null,!0,!0,x.y),$async$CJ)
case 3:if(h!==!0){w=1
break}t=5
q=x.z
w=8
return A.k(e.aE(0,$.bL(),x.A).ev("request_document_review",A.a5(["p_document",J.a_(f,"id")],x.N,q),q),$async$CJ)
case 8:if(d.e==null){w=1
break}d.O(x.q).f.b2(E.mi)
t=2
w=7
break
case 5:t=4
o=s.pop()
r=A.a2(o)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CJ,v)},
xk(d,e,f){return this.aF2(d,e,f)},
aF2(a3,a4,a5){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$xk=A.m(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:d={}
a0=a4.aE(0,$.bL(),x.A)
d.a=null
t=4
w=7
return A.k(a0.h4("list_employees_for_signature",x.z),$async$xk)
case 7:r=a7
m=d.a=J.cG(x.j.a(r),x.P)
t=2
w=6
break
case 4:t=3
a1=s.pop()
q=A.a2(a1)
if(a3.e!=null)a3.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=1
break
w=6
break
case 3:w=2
break
case 6:if(m.gp(0)===0){if(a3.e!=null)a3.O(x.q).f.b2(D.aAI)
w=1
break}m=x.N
p=A.b3(m)
if(a3.e==null){w=1
break}w=8
return A.k(A.hj(null,null,!0,null,new B.baV(d,p),a3,null,!0,!0,x.y),$async$xk)
case 8:if(a7!==!0||p.a===0){w=1
break}t=10
k=p,k=A.d2(k,k.r,A.l(k).c),j=J.V(a5),i=x.z,h=k.$ti.c
case 13:if(!k.t()){w=14
break}g=k.d
o=g==null?h.a(g):g
g=a0
f=A.a5(["p_document",j.h(a5,"id"),"p_employee",o],m,i)
e=g.CW
e===$&&A.a()
e.b.K(0,A.mT(g.x,m,m))
w=15
return A.k(e.b0C("invite_employee_signature",!1,f,i),$async$xk)
case 15:w=13
break
case 14:if(a3.e==null){w=1
break}m=$.bD3().$1(A.aI(j.h(a5,"id")))
if(a4.e==null)A.U(A.Z(y.b))
a4.gcw().cs(m)
a3.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j(""+p.a+" Mitarbeiter eingeladen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=12
break
case 10:t=9
a2=s.pop()
n=A.a2(a2)
if(a3.e==null){w=1
break}a3.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=12
break
case 9:w=2
break
case 12:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xk,v)},
xb(d,e){return this.axP(d,e)},
axP(d,e){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xb=A.m(function(f,a0){if(f===1){t.push(a0)
w=u}for(;;)switch(w){case 0:r.J(new B.baO(r))
u=3
k=e.aE(0,$.bL(),x.A).ax
k===$&&A.a()
j=r.x
if(j==null){j=x.z
j=A.z(j,j)}else j=A.a5(["category",j],x.N,x.T)
w=6
return A.k(k.hA("documents-zip-export",j),$async$xb)
case 6:q=a0
p=q.a
w=x.f.b(p)&&typeof J.a_(p,"base64")=="string"?7:9
break
case 7:o=C.iV.cG(A.aI(J.a_(p,"base64")))
i=A.ak(J.a_(p,"filename"))
n=i==null?"export.zip":i
m="data:application/zip;base64,"+C.vY.gtb().cG(o)
w=10
return A.k(A.mG(A.cm(m,0,null),C.em,null),$async$xb)
case 10:w=11
return A.k(A.uJ(new A.pv(m)),$async$xb)
case 11:if(d.e!=null)d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j(A.i(n)+" ("+(J.cf(o)/1024|0)+" KB) heruntergeladen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=8
break
case 9:k=A.e7("Ung\xfcltige Antwort: "+A.i(p))
throw A.e(k)
case 8:s.push(5)
w=4
break
case 3:u=2
g=t.pop()
l=A.a2(g)
if(d.e!=null)d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Export fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.baP(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$xb,v)},
Bv(d,e){return this.avT(d,e)},
avT(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Bv=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l={}
k=A.dP(e.aE(0,$.bwx(),x.w))
if(k==null)k=C.cp
r=new A.bw(C.a7,$.af())
p=J.V(k)
l.a=p.gdz(k)?A.aI(J.a_(p.ga2(k),"slug")):"sonstiges"
w=3
return A.k(A.hj(null,null,!0,null,new B.baN(l,r,k),d,null,!0,!0,x.y),$async$Bv)
case 3:if(g!==!0||C.c.aL(r.a.a).length===0){w=1
break}t=5
p=e.aE(0,$.bL(),x.A).cY("documents")
o=C.c.aL(r.a.a)
l=l.a
if(l==null)l="sonstiges"
n=x.N
w=8
return A.k(p.iN(0,A.a5(["title",o,"category",l],n,n)),$async$Bv)
case 8:if(d.e==null){w=1
break}l=$.K9()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(l)
t=2
w=7
break
case 5:t=4
j=s.pop()
q=A.a2(j)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehlgeschlagen: "+A.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Bv,v)}}
B.aqZ.prototype={
u(d){var w=null
return A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),w,w,w,w,w,w,2,A.eG(w,new A.hx(4,A.aR(12),C.dy),w,w,w,w,w,w,!0,new A.hx(4,A.aR(12),C.dy),w,w,w,w,w,C.A,!0,w,w,w,w,new A.hx(4,A.aR(12),D.a0t),w,w,w,w,w,w,w,w,w,"Titel oder Kategorie suchen \u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,D.acX,w,w,w,w,w,w,w,w,w,w,w,w),C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,this.c,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w)}}
B.alp.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.d,p=x.p,o=A.b([s.a38(d,"Alle Ordner",q==null,new B.bdm(s)),C.aZ],p)
for(w=J.bh(s.c);w.t();){v=w.gN(w)
u=J.V(v)
t=u.h(v,"label")
t=t==null?r:J.am(t)
if(t==null)t=""
u=u.h(v,"slug")
C.b.K(o,A.b([s.a38(d,t,q==null?u==null:q===u,new B.bdn(s,v)),C.aZ],p))}return A.et(A.ap(o,C.k,r,C.f,C.h,0,r,r),r,r,r,C.ay)},
a38(d,e,f,g){var w=null,v=A.aR(999),u=f?C.m:C.A,t=A.aR(999),s=A.cP(f?C.m:C.am,1)
return A.eF(!1,v,!0,A.b9(w,A.j(e,w,w,w,A.D(f?C.j:C.aU,12,C.S),w,w,w),C.r,w,w,new A.b5(u,w,s,t,w,w,C.G),w,w,w,w,C.DI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)}}
B.alq.prototype={
u(d){var w,v,u,t=this,s=null,r=t.d,q=J.V(r)
if(q.gZ(r))return C.ar
q.fU(r,new B.bdo())
w=t.c
v=J.V(w)
u=v.h(w,"icon")
u=A.co(B.c3j(u==null?s:J.am(u)),C.j,s,18)
w=v.h(w,"label")
w=w==null?s:J.am(w)
if(w==null)w=""
v=x.p
v=A.b([A.ap(A.b([u,C.aV,A.aB(A.j(w,s,s,s,A.c8(C.j,15,C.q),s,s,s),1),A.j(""+q.gp(r),s,s,s,A.D(C.p,11,C.l),s,s,s)],v),C.k,s,C.f,C.h,0,s,s),C.M],v)
for(r=q.gX(r),q=t.e;r.t();){w=r.gN(r)
v.push(new B.akb(w,q,new B.bdp(t,w),new B.bdq(t,w),new B.bdr(t,w),new B.bds(t,w),new B.bdt(t,w),s))}return new A.aj(C.x4,A.ad(v,C.D,s,C.f,C.h,0),s)}}
B.akb.prototype={
dg(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.e,e=J.V(f),d=e.h(f,"title"),a0=d==null?g:J.am(d)
if(a0==null)a0=""
w=e.h(f,"current_version")
d=e.h(f,"status")
v=d==null?g:J.am(d)
if(v==null)v="draft"
d=e.h(f,"valid_until")
u=d==null?g:J.am(d)
d=e.h(f,"expiry_status")
t=d==null?g:J.am(d)
if(t==null)t="none"
d=e.h(f,"latest_file_path")
d=d==null?g:J.am(d)
s=(d==null?"":d).length!==0
r=J.d(e.h(f,"is_template"),!0)
d=e.h(f,"category")
q=d==null?g:J.am(d)
if(r)p=C.m
else{A:{if("expired"===t){d=C.an
break A}if("expiring"===t){d=C.dz
break A}d=C.am
break A}p=d}o=u!=null&&u.length!==0?A.eT(u):g
n=q==="ifsg"
m=n&&s&&!r?a2.ap($.bD3().$1(A.aI(e.h(f,"id"))),x.w):g
f=r?0:20
e=s?h.r:g
d=x.p
l=A.b([],d)
if(r)C.b.K(l,A.b([D.aui],d))
l.push(A.aB(A.j(a0,2,C.ak,g,A.D(C.j,15,C.q),g,g,g),1))
l.push(C.aV)
if(r)l.push(D.aB0)
else l.push(new B.akN(t,g))
l=A.ap(l,C.D,g,C.f,C.h,0,g,g)
k=A.i(w)
j=o==null?"":" \xb7 g\xfcltig bis "+$.dp().am(o)
j=A.j("v"+k+" \xb7 "+v+j,g,g,g,A.D(C.p,11,C.l),g,g,g)
if(s)k=A.ap(A.b([D.acd,C.cE,new A.hR(1,C.cO,A.j(r?"Vorlage herunterladen":"Tippen zum \xd6ffnen",1,C.ak,g,D.aDw,g,g,g),g)],d),C.k,g,C.f,C.H,0,g,g)
else k=A.j("Noch keine Version hochgeladen",1,C.ak,g,A.D(C.p,11,C.l),g,g,g)
k=A.b([A.aB(k,1)],d)
if(h.f&&!r){i=A.b([A.fn(C.aU,D.mM,D.ad3,g,g,h.x,C.a9,g,g,"G\xfcltigkeit setzen",C.mv),A.fn(C.aU,D.mM,D.adb,g,g,h.w,C.a9,g,g,"Neue Version hochladen",C.mv)],d)
if(n)i.push(A.fn(C.m,D.mM,D.acP,g,g,s?h.z:g,C.a9,g,g,"Mitarbeiter zur Signatur einladen",C.mv))
i.push(A.fn(C.m,D.mM,D.ad4,g,g,s?h.y:g,C.a9,g,g,"Freigabe (2-of-2 Gesellschafter)",C.mv))
k.push(A.lo(C.cx,i,C.dI,0,0))}l=A.b([l,C.d6,j,C.u,A.ap(k,C.k,g,C.f,C.h,0,g,g)],d)
if(m!=null)C.b.K(l,A.b([C.u,C.cN,C.M,A.dz(m,new B.bak(),new B.bal(),new B.bam(),!1,!0,!1,x.D,x.l)],d))
return new A.aj(new A.al(f,0,0,12),A.by(g,A.ad(l,C.D,g,C.f,C.h,0),g,e,C.ai,p,3),g)}}
B.art.prototype={
dg(d,e){var w,v,u,t,s=null,r=this.e,q=J.V(r),p=q.h(r,"employee_name"),o=p==null?s:J.am(p)
if(o==null)o="?"
p=q.h(r,"status")
w=p==null?s:J.am(p)
if(w==null)w="pending"
p=q.h(r,"signed_at")
v=p==null?s:J.am(p)
r=q.h(r,"signed_pdf_path")
u=r==null?s:J.am(r)
t=w==="signed"
r=t?C.i2:D.aa3
r=A.co(r,t?C.aE:C.m,s,16)
if(t){q=v==null?"":" \xb7 "+C.c.a_(v,0,10)
q=o+" \u2014 signiert"+q}else q=o+" \u2014 ausstehend"
q=A.b([r,C.aZ,A.aB(A.j(q,s,s,s,A.D(C.j,12,C.S),s,s,s),1)],x.p)
if(t&&u!=null&&u.length!==0)q.push(A.nv(D.F8,D.aGa,new B.bnO(this,d,e,u),s))
return new A.aj(D.DF,A.ap(q,C.k,s,C.f,C.h,0,s,s),s)},
Bw(d,e,f){return this.aHU(d,e,f)},
aHU(d,e,f){var w=0,v=A.q(x.H),u=1,t=[],s,r,q,p,o
var $async$Bw=A.m(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:u=3
q=e.aE(0,$.bL(),x.A).ay
q===$&&A.a()
w=6
return A.k(q.cY("signed-documents").nR(f,86400),$async$Bw)
case 6:s=h
w=7
return A.k(A.mG(A.cm(s,0,null),C.em,"_blank"),$async$Bw)
case 7:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.a2(o)
if(d.e!=null)d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Bw,v)}}
B.akN.prototype={
u(d){switch(this.c){case"expired":return D.aB_
case"expiring":return D.aAY
case"ok":return D.aAZ
default:return C.ar}}}
B.a54.prototype={
dg(d,e){var w=null,v=e.ap($.bD2(),x.w),u=B.a5I(w,w,D.adj,D.Az,new B.aEb(this,d,e))
return A.dS(D.a9m,w,A.dz(v,new B.aEc(),new B.aEd(),new B.aEe(),!1,!0,!1,x.D,x.E),w,u)},
C5(d,e){return this.aF1(d,e)},
aF1(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n
var $async$C5=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:w=3
return A.k(A.kE(null,new B.aE8(),d,!0,null,null,x.dr),$async$C5)
case 3:o=g
if(o==null){w=1
break}t=5
q=e.aE(0,$.bL(),x.A).ax
q===$&&A.a()
w=8
return A.k(q.hA("invite-user",A.a5(["email",o.a,"role","employee","full_name",o.b,"permissions",o.c],x.N,x.X)),$async$C5)
case 8:if(d.e==null){w=1
break}q=$.bD2()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(q)
d.O(x.q).f.b2(D.aAz)
t=2
w=7
break
case 5:t=4
n=s.pop()
r=A.a2(n)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Einladung fehlgeschlagen: "+A.i(r),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$C5,v)}}
B.amx.prototype={}
B.BY.prototype={
W(){var w=$.af()
return new B.W1(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),A.b3(x.N))}}
B.W1.prototype={
l(){var w=this.e,v=$.af()
w.R$=v
w.S$=0
w=this.f
w.R$=v
w.S$=0
this.ao()},
axv(){var w,v,u,t=this,s=t.d.ga1()
s=s==null?null:s.hU()
if(s!==!0)return
s=t.c
s.toString
s=A.b6(s,!1)
w=C.c.aL(t.e.a.a)
v=C.c.aL(t.f.a.a)
if(v.length===0)v=null
u=t.r
u=A.Q(u,A.l(u).c)
s.cD(new B.amx(w,v,u))},
u(d){var w,v,u,t=this,s=null,r=A.bD(d,s,x.m).w,q=A.b([A.j("Mitarbeiter einladen",s,s,s,A.W(d).ok.r,s,s,s),C.L,A.db(s,!1,t.e,D.aeT,s,C.iE,1,!1,s,s,C.X,s,new B.bfR()),C.u,A.db(s,!1,t.f,D.aea,s,s,1,!1,s,s,C.X,s,s),C.u,A.j("Berechtigungen",s,s,s,A.W(d).ok.w,s,s,s)],x.p)
for(w=D.Su.gi2(D.Su),w=w.gX(w),v=t.r;w.t();){u=w.gN(w)
q.push(A.bEG(s,s,C.a9,s,!0,new B.bfS(t,u),s,A.j(u.b,s,s,s,s,s,s,s),v.n(0,u.a)))}q.push(C.M)
q.push(A.dk(D.Az,t.gaxu(),s))
return new A.aj(new A.al(0,0,0,r.f.d),A.et(A.k4(s,A.ad(q,C.a8,s,C.f,C.H,0),t.d),s,C.ai,s,C.K),s)}}
B.a5n.prototype={
u(d){return B.Q3("filled_at","filling",new B.aFw(),new B.aFx(),new B.aFy(),"filling_logs","Bef\xfcllung")}}
B.BP.prototype={
W(){var w=$.af()
return new B.Vk(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(new A.cz("0",C.bb,C.aG),w),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.b_(Date.now(),0,!1))}}
B.Vk.prototype={
l(){var w=this,v=w.x,u=v.R$=$.af()
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
w.ao()},
J5(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$J5=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ay
w=2
return A.k(A.pe(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.b_(Date.now(),0,!1),C.eq),$async$J5)
case 2:s=e
if(s!=null)u.J(new B.bcB(u,s))
return A.o(null,v)}})
return A.p($async$J5,v)},
J6(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$J6=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ch
if(t==null)t=new A.b_(Date.now(),0,!1).us(7776e9)
w=2
return A.k(A.pe(r,new A.b_(Date.now(),0,!1).us(-2592e9),null,t,A.bB(2030,1,1,0,0,0,0),C.eq),$async$J6)
case 2:s=e
if(s!=null)u.J(new B.bcC(u,s))
return A.o(null,v)}})
return A.p($async$J6,v)},
ay_(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w.ga1()
k=k==null?l:k.hU()
if(k!==!0)return
k=m.at
if(k==null)return
w=m.c
w.toString
w=A.b6(w,!1)
v=m.as
u=A.el(m.x.a.a,l)
t=A.iA(m.y.a.a,l)
if(t==null)t=0
s=m.ax
r=new A.b_(Date.now(),0,!1).dV()
q=m.z.a.a
q=A.fW(A.ay(q,",","."))
p=C.c.aL(m.Q.a.a)
if(p.length===0)p=l
o=C.c.a_(m.ay.dV(),0,10)
n=m.ch
w.cD(A.a5(["machine_id",v,"product_id",k,"quantity",u,"removed_spoiled",t,"mhd_checked",s,"filled_at",r,"unit_cost",q,"invoice_number",p,"invoice_date",o,"lot_expiry",n==null?l:C.c.a_(n.dV(),0,10)],x.N,x.X))},
u(d){var w,v=this,u=null,t=v.gc9().ap($.bDA(),x.w),s=A.bD(d,u,x.m).w,r=A.j("Bef\xfcllung erfassen",u,u,u,A.W(d).ok.r,u,u,u),q=B.OL(new B.bcI(v),v.as),p=B.axu(t,new B.bcJ(v),new B.bcK(),x.D,x.l),o=A.db(u,!1,v.x,D.aes,u,C.cY,1,!1,u,u,C.X,u,new B.bcL()),n=A.db(u,!1,v.y,D.aeK,u,C.cY,1,!1,u,u,C.X,u,u),m=A.db(u,!1,v.z,D.aeO,u,C.ez,1,!1,u,u,C.X,u,new B.bcM()),l=A.db(u,!1,v.Q,D.aep,u,u,1,!1,u,u,C.X,u,new B.bcN()),k=v.ay,j=x.p
k=A.a6V(u,A.ap(A.b([A.aB(A.j(C.c.cZ(C.e.j(A.bV(k)),2,"0")+"."+C.c.cZ(C.e.j(A.bi(k)),2,"0")+"."+A.aW(k),u,u,u,u,u,u,u),1),A.nv(D.li,D.aHW,v.gaIZ(),u)],j),C.k,u,C.f,C.h,0,u,u),D.ae5,!1,!1,!1,!1,u,u)
w=v.ch
return new A.aj(new A.al(0,0,0,s.f.d),A.et(A.k4(u,A.ad(A.b([r,C.L,q,C.u,p,C.u,o,C.u,n,C.u,m,C.u,l,C.u,k,C.u,A.a6V(u,A.ap(A.b([A.aB(A.j(w==null?"\u2014 nicht gesetzt \u2014":C.c.cZ(C.e.j(A.bV(w)),2,"0")+"."+C.c.cZ(C.e.j(A.bi(w)),2,"0")+"."+A.aW(w),u,u,u,u,u,u,u),1),A.nv(D.li,D.aGm,v.gaJ_(),u)],j),C.k,u,C.f,C.h,0,u,u),D.aew,!1,!1,!1,!1,u,u),C.b3,A.b0B(C.a9,new B.bcO(v),u,D.aGe,v.ax),A.dk(C.dt,v.gaxZ(),u)],j),C.a8,u,C.f,C.H,0),v.w),u,C.ai,u,C.K),u)}}
B.Od.prototype={
W(){return new B.W0(new A.b_(Date.now(),0,!1).us(-7776e9),new A.b_(Date.now(),0,!1))}}
B.W0.prototype={
It(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$It=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.bfH(r))
u=3
q=r.gc9().aE(0,$.bL(),x.A)
n=x.N
m=x.z
w=6
return A.k(A.k6(A.b([q.ev("inventory_fifo_movements",A.a5(["p_from",r.w.FI().dV(),"p_to",r.x.FI().dV()],n,m),m),q.ev("inventory_fifo_lots",A.a5(["p_to",r.x.FI().dV()],n,m),m),q.h4("list_partner_signatures",m)],x.U),m),$async$It)
case 6:p=e
m=x.j
n=x.P
r.y=J.cG(m.a(J.a_(p,0)),n)
r.z=J.cG(m.a(J.a_(p,1)),n)
r.Q=J.cG(m.a(J.a_(p,2)),n)
s.push(5)
w=4
break
case 3:u=2
k=t.pop()
o=A.a2(k)
r.at=J.am(o)
r.z=r.y=null
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.bfI(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$It,v)},
J4(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$J4=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.w
w=2
return A.k(A.pe(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.b_(Date.now(),0,!1),C.eq),$async$J4)
case 2:s=e
if(s!=null)u.J(new B.bfJ(u,s))
return A.o(null,v)}})
return A.p($async$J4,v)},
J9(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$J9=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.x
w=2
return A.k(A.pe(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.b_(Date.now(),0,!1),C.eq),$async$J9)
case 2:s=e
if(s!=null)u.J(new B.bfK(u,s))
return A.o(null,v)}})
return A.p($async$J9,v)},
au(){this.aM()
A.byb(this.ga6G(),x.H)},
CH(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$CH=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.y==null){w=1
break}o=r.c
o.toString
w=3
return A.k(A.hj(null,null,!0,null,new B.bfN(r),o,null,!0,!0,x.y),$async$CH)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mL(r.gc9().aE(0,$.bL(),x.A))
o=r.w
n=r.x
m=$.dp()
l=m.am(o)
m=m.am(r.x)
w=8
return A.k(q.wi("inventory_fifo",o,n,A.a5(["movements",r.y,"lots",r.z],x.N,x.z),"Inventur "+l+" \u2013 "+m),$async$CH)
case 8:o=r.c
if(o!=null)o.O(x.q).f.b2(E.mi)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
o=r.c
if(o!=null)o.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CH,v)},
au3(d){var w,v,u,t,s,r=A.z(x.N,x.D)
for(w=d.$ti,v=new A.aK(d,d.gp(0),w.i("aK<ag.E>")),w=w.i("ag.E");v.t();){u=v.d
if(u==null)u=w.a(u)
t=J.a_(u,"product_id")
s=t==null?null:J.am(t)
if(s==null)s=""
J.e4(r.cl(0,s,new B.bfG()),u)}return r},
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.b([],q),o=s.y
if(o!=null&&!o.gZ(o))p.push(new B.EC(A.b([new B.v7(C.fw,"Freigabe anfordern",s.gaK8(),C.m,r,!1),new B.v7(C.i5,"Als PDF drucken",new B.bfO(s),C.an,C.an,!1)],x.B),C.dU,r))
p.push(A.j("FIFO-Inventur \u2014 je Produkt alle Bewegungen chronologisch, Bewertung nach dem Verbrauchsfolgeverfahren (\xa7256 HGB): die \xe4ltesten Zug\xe4nge sind zuerst verbraucht, der Endbestand wird mit den EK-Preisen der j\xfcngsten verbliebenen Lots bewertet. MHD-Abschlag nach Restlaufzeit-Matrix vom AK-Wert.",r,r,r,A.D(C.p,12,C.l),r,r,r))
p.push(C.L)
o=s.w
w=$.dp()
p.push(A.ap(A.b([A.aB(A.fU(D.li,A.j("Von "+w.am(o),r,r,r,r,r,r,r),s.gaIY(),A.oD(r,r,r,r,r,r,r,r,r,C.j,r,r,C.el,r,r,C.kz,r,r,r,r)),1),C.aV,A.aB(A.fU(D.li,A.j("Bis "+w.am(s.x),r,r,r,r,r,r,r),s.gaJ4(),A.oD(r,r,r,r,r,r,r,r,r,C.j,r,r,C.el,r,r,C.kz,r,r,r,r)),1)],q),C.k,r,C.f,C.h,0,r,r))
p.push(C.u)
o=s.as
w=o?r:s.ga6G()
o=o?C.v_:D.Fd
p.push(A.ha(o,D.aIW,w,A.dJ(C.m,C.A,r,C.el,r,r,r)))
p.push(C.L)
o=s.at
if(o!=null)p.push(A.by(C.an,A.j(o,r,r,r,A.D(C.j,13,C.l),r,r,r),C.eJ,r,C.C,r,3))
else{o=s.y
if(o==null)p.push(C.ar)
else if(o.gp(0)===0)p.push(A.by(r,A.j("Keine Bewegungen im gew\xe4hlten Zeitraum.",r,r,r,A.D(C.p,13,C.l),r,r,r),C.ae,r,C.C,r,3))
else{q=A.b([],q)
o=s.y
o.toString
o=s.au3(o)
o=new A.e9(o,A.l(o).i("e9<1,2>")).gX(0)
w=x.t
while(o.t()){v=o.d
u=v.b
t=s.z
if(t==null)t=A.b([],w)
t=J.qV(t,new B.bfP(v))
t=A.Q(t,t.$ti.i("t.E"))
q.push(new B.apb(u,t,r))}q.push(C.aQ)
o=s.z
q.push(new B.alH(o==null?C.cp:o,r))
q.push(C.bJ)
q.push(D.aOV)
q.push(C.bJ)
o=s.Q
if(o!=null&&!o.gZ(o)){o=s.Q
o.toString
q.push(new B.aru(o,r))}C.b.K(p,q)}}return A.dS(D.a9v,r,A.dF(p,C.C,r,C.K,!1),r,r)}}
B.apb.prototype={
u(c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9="Hanken Grotesk",c0=this.d,c1=J.cB(c0),c2=J.a_(c1.ga2(c0),"product_name"),c3=c2==null?b8:J.am(c2)
if(c3==null)c3=""
c2=J.a_(c1.ga2(c0),"sku")
w=c2==null?b8:J.am(c2)
if(w==null)w=""
c2=this.e
v=C.b.fn(c2,0,new B.bk8())
u=C.b.fn(c2,0,new B.bk9())
t=C.b.fn(c2,0,new B.bka())
s=C.b.fn(c2,0,new B.bkb())
r=A.j(c3,b8,b8,b8,A.D(C.j,16,C.q),b8,b8,b8)
q=w.length===0?"":"SKU: "+w
p=x.p
o=""+v
q=A.ap(A.b([A.aB(A.ad(A.b([r,A.j(q,b8,b8,b8,A.D(C.p,11,C.l),b8,b8,b8)],p),C.D,b8,C.f,C.h,0),1),A.j("Endbestand: "+o,b8,b8,b8,A.D(C.m,13,C.q),b8,b8,b8)],p),C.D,b8,C.f,C.h,0,b8,b8)
r=A.j("Bewegungen im Zeitraum",b8,b8,b8,A.D(C.p,12,C.q),b8,b8,b8)
n=x.x
m=x._
l=A.b([],m)
for(c0=c1.gX(c0);c0.t();)l.push(this.aGr(c0.gN(c0)))
c0=A.et(B.aBp(b8,D.aju,40,30,new A.bF(C.ae,n),32,l),b8,b8,b8,C.ay)
c1=A.j("FIFO-Restlots am Stichtag",b8,b8,b8,A.D(C.p,12,C.q),b8,b8,b8)
m=A.b([],m)
for(l=c2.length,k=x.F,j=0;j<c2.length;c2.length===l||(0,A.G)(c2),++j){i=c2[j]
h=J.V(i)
g=h.h(i,"invoice_number")
f=g==null?b8:J.am(g)
if(f==null)f="\u2014"
g=h.h(i,"invoice_date")
e=g==null?b8:J.am(g)
g=A.b4(h.h(i,"remaining_qty"))
d=g==null?b8:C.d.a0(g)
if(d==null)d=0
g=A.b4(h.h(i,"unit_cost"))
a0=g==null?b8:g
if(a0==null)a0=0
g=h.h(i,"lot_expiry")
a1=g==null?b8:J.am(g)
g=A.b4(h.h(i,"mhd_days_left"))
a2=g==null?b8:C.d.a0(g)
g=A.b4(h.h(i,"mhd_pct"))
a3=g==null?b8:C.d.a0(g)
if(a3==null)a3=0
g=A.b4(h.h(i,"lot_gross"))
a4=g==null?b8:g
if(a4==null)a4=0
g=A.b4(h.h(i,"lot_discount"))
a5=g==null?b8:g
if(a5==null)a5=0
h=A.b4(h.h(i,"lot_net"))
a6=h==null?b8:h
if(a6==null)a6=0
a7=a3>=20
h=A.j(f,b8,b8,b8,new A.P(!0,C.j,b8,b9,C.by,b8,11,C.l,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
g=A.j(B.apc(e),b8,b8,b8,b8,b8,b8,b8)
a8=A.j(""+d,b8,b8,b8,new A.P(!0,C.j,b8,b9,C.by,b8,12,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=$.d3()
b0=A.j(a9.am(a0),b8,b8,b8,b8,b8,b8,b8)
b1=A.j(B.apc(a1),b8,b8,b8,b8,b8,b8,b8)
b2=A.j(a2==null?"\u2014":A.i(a2)+"d",b8,b8,b8,b8,b8,b8,b8)
b3=a7?C.an:C.j
b3=A.j(""+a3+" %",b8,b8,b8,new A.P(!0,b3,b8,b9,C.by,b8,12,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
b4=A.j(a9.am(a4),b8,b8,b8,b8,b8,b8,b8)
b5=a5===0?"\u2014":"\u2212 "+a9.am(a5)
b6=a7?C.an:C.j
b5=A.j(b5,b8,b8,b8,new A.P(!0,b6,b8,b9,C.by,b8,12,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=a9.am(a6)
m.push(new B.rb(b8,A.b([new B.fy(h),new B.fy(g),new B.fy(a8),new B.fy(b0),new B.fy(b1),new B.fy(b2),new B.fy(b3),new B.fy(b4),new B.fy(b5),new B.fy(A.j(a9,b8,b8,b8,new A.P(!0,C.j,b8,b9,C.by,b8,13,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8))],k),b8))}b7=A.D(C.j,13,C.q)
c2=B.oa(A.j("Summe",b8,b8,b8,b7,b8,b8,b8))
o=B.oa(A.j(o,b8,b8,b8,b7,b8,b8,b8))
l=$.d3()
h=B.oa(A.j(l.am(u),b8,b8,b8,b7,b8,b8,b8))
g=t===0?"\u2014":"\u2212 "+l.am(t)
m.push(B.bFb(A.b([c2,D.kT,o,D.kT,D.kT,D.kT,D.kT,h,B.oa(A.j(g,b8,b8,b8,b7.cO(C.an),b8,b8,b8)),B.oa(A.j(l.am(s),b8,b8,b8,b7,b8,b8,b8))],k),new A.bF(C.bt,n),b8))
return new A.aj(C.x4,A.by(b8,A.ad(A.b([q,C.u,r,C.b3,c0,C.u,c1,C.b3,A.et(B.aBp(b8,D.ajf,40,30,new A.bF(C.ae,n),32,m),b8,b8,b8,C.ay)],p),C.D,b8,C.f,C.h,0),b8,b8,C.ai,b8,3),b8)},
aGr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.V(d),h=A.ak(i.h(d,"type"))
if(h==null)h=""
A:{if("refill"===h){w="Zugang"
break A}if("sale"===h){w="Verkauf"
break A}if("disposal"===h){w="Vernichtung (MHD)"
break A}if("correction"===h){w="Korrektur"
break A}w=h
break A}v=A.b4(i.h(d,"quantity_delta"))
u=v==null?j:C.d.a0(v)
if(u==null)u=0
t=A.b4(i.h(d,"unit_cost"))
if(t==null)t=j
v=i.h(d,"invoice_number")
s=v==null?j:J.am(v)
if(s==null)s=""
v=i.h(d,"invoice_date")
r=v==null?j:J.am(v)
v=i.h(d,"lot_expiry")
q=v==null?j:J.am(v)
v=i.h(d,"reason")
p=v==null?j:J.am(v)
if(p==null)p=""
i=i.h(d,"occurred_at")
o=i==null?j:J.am(i)
if(h==="refill")n=C.CG
else n=h==="disposal"?C.eJ:j
i=n==null?j:new A.bF(n,x.x)
v=B.oa(A.j(B.apc(o),j,j,j,j,j,j,j))
w=B.oa(A.j(w,j,j,j,A.D(h==="disposal"?C.an:C.j,12,C.q),j,j,j))
m=u>0
l=""+u
if(m)l="+"+l
l=B.oa(A.j(l,j,j,j,A.D(m?C.aE:C.j,12,C.q),j,j,j))
m=B.oa(A.j(t==null?"\u2014":$.d3().am(t),j,j,j,j,j,j,j))
if(s.length===0)k="\u2014"
else k=s+(r==null?"":"  \xb7 "+B.apc(r))
return B.bFb(A.b([v,w,l,m,B.oa(A.j(k,j,j,j,A.D(C.aU,11,C.l),j,j,j)),B.oa(A.j(B.apc(q),j,j,j,j,j,j,j)),B.oa(A.cg(A.j(p,1,C.ak,j,A.D(C.p,11,C.l),j,j,j),j,200))],x.F),i,j)}}
B.alH.prototype={
u(d){var w,v,u=null,t=this.c,s=J.cB(t),r=s.fn(t,0,new B.bem()),q=s.fn(t,0,new B.ben()),p=s.fn(t,0,new B.beo()),o=s.fn(t,0,new B.bep()),n=s.eQ(t,new B.beq(),x.T).hG(0).a
t=$.d3()
s=t.am(q)
w=p===0?"\u2014 0,00 \u20ac":"\u2212 "+t.am(p)
v=x.p
return A.by(C.m,A.ad(A.b([D.axs,C.u,A.lo(C.cx,A.b([new B.wU("Produkte im Bestand",""+n,!1,!1,u),new B.wU("Einheiten gesamt",A.i(r),!1,!1,u),new B.wU("Anschaffungskosten netto",s,!1,!1,u),new B.wU("MHD-Abschlag",w,!0,!1,u),new B.wU("Bilanzwert netto",t.am(o),!1,!0,u)],v),C.dI,8,20)],v),C.D,u,C.f,C.h,0),C.bt,u,C.ai,u,3)}}
B.wU.prototype={
u(d){var w=this,v=null,u=A.aR(12),t=A.cP(C.am,1),s=A.j(w.c,v,v,v,A.D(C.p,10,C.S),v,v,v),r=w.f?17:15
return A.b9(v,A.ad(A.b([s,A.j(w.d,v,v,v,A.D(w.e?C.an:C.j,r,C.q),v,v,v)],x.p),C.D,v,C.f,C.H,0),C.r,v,v,new A.b5(C.A,v,t,u,v,v,C.G),v,v,v,v,C.l1,v,v,v)}}
B.anv.prototype={
u(d){var w,v,u,t,s,r,q,p=null,o="Hanken Grotesk",n=A.j("Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskostenwert eines Lots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.",p,p,p,A.D(C.p,12,C.l),p,p,p),m=A.b([],x._)
for(w=x.F,v=0;v<5;++v){u=D.ans[v]
t=A.j(u.a,p,p,p,new A.P(!0,C.j,p,o,C.by,p,13,C.q,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
s=A.j(u.b,p,p,p,p,p,p,p)
r=u.c
q=r==="0 %"?C.j:C.an
r=A.j(r,p,p,p,new A.P(!0,q,p,o,C.by,p,13,C.q,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
m.push(new B.rb(p,A.b([new B.fy(t),new B.fy(s),new B.fy(r),new B.fy(A.j(u.d,p,p,p,new A.P(!0,C.aU,p,o,C.by,p,12,C.l,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p))],w),p))}return A.by(p,A.ad(A.b([D.axx,C.M,n,C.u,A.et(B.aBp(p,D.anN,44,32,new A.bF(C.ae,x.x),34,m),p,p,p,C.ay)],x.p),C.D,p,C.f,C.h,0),p,p,C.ai,p,3)}}
B.wX.prototype={}
B.aru.prototype={
u(d){var w,v,u,t=null,s=x.p,r=A.b([],s)
for(w=this.c,v=w.$ti,w=new A.aK(w,w.gp(0),v.i("aK<ag.E>")),v=v.i("ag.E");w.t();){u=w.d
r.push(new B.arw(u==null?v.a(u):u,t))}return A.by(t,A.ad(A.b([D.axt,C.L,A.lo(C.cx,r,C.dI,16,20)],s),C.D,t,C.f,C.h,0),t,t,C.ai,t,3)}}
B.arw.prototype={
u(d){var w,v,u=null,t=this.c,s=J.V(t),r=s.h(t,"full_name"),q=r==null?u:J.am(r)
if(q==null)q=""
r=s.h(t,"role_label")
w=r==null?u:J.am(r)
if(w==null)w=""
t=s.h(t,"image_url")
v=t==null?u:J.am(t)
t=A.aR(12)
s=A.cP(C.am,1)
r=v!=null&&v.length!==0?A.aJo(v,new B.bob(),C.w1,u,u,u,u):D.a_k
t=A.b9(C.Bd,r,C.r,u,u,new A.b5(C.ae,u,s,t,u,u,C.G),u,68,u,u,C.fu,u,u,u)
s=A.j(q,u,u,u,A.D(C.j,13,C.q),u,u,u)
r=Date.now()
return A.cg(A.ad(A.b([t,C.d6,s,A.j(w+" \xb7 Datum: "+$.dp().am(new A.b_(r,0,!1)),u,u,u,A.D(C.p,11,C.l),u,u,u)],x.p),C.D,u,C.f,C.h,0),u,260)}}
B.Iw.prototype={
u(d){var w=null
return A.b9(w,w,C.r,C.bU,w,w,w,1,w,D.a7A,w,w,w,w)}}
B.a6Z.prototype={
dg(d,e){return A.dS(D.a9x,null,A.dz(e.ap($.awf(),x.c),new B.aKi(),new B.aKj(),new B.aKk(),!1,!0,!1,x.W,x.E),null,null)}}
B.zx.prototype={
W(){return new B.ane()}}
B.ane.prototype={
au(){var w,v,u,t,s=this
s.aM()
w=s.gc9().aE(0,$.bL(),x.A)
v=s.a.d
u=w.ch
u===$&&A.a()
t=A.bYc("realtime:"+("inventory:"+v),u,C.a2x)
u.Qq()
C.b.E(u.b,t)
s.w=t.aZ4(new B.bh3(s),C.X8,new B.aaL(D.X9,"machine_id",s.a.d),"public","inventory").amz(0)},
l(){var w,v=this.w
if(v!=null){w=this.gc9().aE(0,$.bL(),x.A).ch
w===$&&A.a()
w.Oi(v)}this.ao()},
a75(d,e,f){var w
A:{if("out"===f){w=A.W(e).ax.fy
break A}if("low"===f){w=D.asp
break A}w=C.Ta
break A}return w},
aFq(d){var w
A:{if("out"===d){w="ausverkauft"
break A}if("low"===d){w="bald leer"
break A}w="verf\xfcgbar"
break A}return w},
u(d){var w=this,v=null,u=w.gc9().ap($.bwP().$1(w.a.d),x.bj)
return A.dS(A.rt(v,A.j(w.a.e,v,v,v,v,v,v,v)),v,A.dz(u,new B.bh0(w),new B.bh1(),new B.bh2(),!1,!0,!1,x.e,x.E),v,v)},
Bo(d,e){return this.avO(d,e)},
avO(d,e){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$Bo=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.k(A.hj(null,null,!0,null,new B.bgW(e,new A.bw(C.a7,$.af()),d),d,null,!0,!0,x.v),$async$Bo)
case 3:q=g
if(q==null||q===0){w=1
break}w=4
return A.k(t.gc9().aE(0,$.bwQ().ghR(),x.M).L8(q,e.a,e.b),$async$Bo)
case 4:s=g
if(d.e==null){w=1
break}r=d.O(x.q).f
r.b2(A.c5(null,null,null,null,null,C.n,null,A.j(s?"Korrektur gebucht.":"Fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return A.o(u,v)}})
return A.p($async$Bo,v)}}
B.a7B.prototype={
u(d){return B.Q3("reported_at","maintenance",new B.aLE(),new B.aLF(),new B.aLG(),"maintenance_logs","Wartung")}}
B.C1.prototype={
W(){var w=$.af()
return new B.W9(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.W9.prototype={
l(){var w=this,v=w.x,u=v.R$=$.af()
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
w.ao()},
aFU(){var w,v,u,t,s,r=this,q=null,p=r.w.ga1()
p=p==null?q:p.hU()
if(p!==!0)return
p=r.c
p.toString
p=A.b6(p,!1)
w=r.as
v=C.c.aL(r.x.a.a)
u=C.c.aL(r.y.a.a)
if(u.length===0)u=q
t=C.c.aL(r.z.a.a)
if(t.length===0)t=q
s=r.Q.a.a
if(C.c.aL(s).length===0)s=q
else s=A.fW(A.ay(s,",","."))
p.cD(A.a5(["machine_id",w,"issue",v,"action",u,"performed_by",t,"cost_amount",s,"resolved",r.at,"reported_at",new A.b_(Date.now(),0,!1).dV()],x.N,x.X))},
u(d){var w=this,v=null
return new A.aj(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.j("Wartung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OL(new B.bh6(w),w.as),C.u,A.db(v,!1,w.x,D.aez,v,v,2,!1,v,v,C.X,v,new B.bh7()),C.u,A.db(v,!1,w.y,D.aee,v,v,2,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.z,D.af_,v,v,1,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.Q,D.aeb,v,C.ez,1,!1,v,v,C.X,v,v),A.b0B(C.a9,new B.bh8(w),v,D.ZF,w.at),A.dk(C.dt,w.gaFT(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.Ss.prototype={
W(){return new B.asv()}}
B.asv.prototype={
u(d){var w,v,u=this,t=null,s=A.b([],x.hc)
for(w=x.fl,v=0;v<5;++v)s.push(new A.jm(v,t,A.j(D.al1[v],t,t,t,t,t,t,t),w))
w=x.v
return A.dS(D.a9E,t,A.ad(A.b([new A.aj(D.DK,A.et(A.bzs(new B.bpz(u),s,A.dD([u.w],w),w),t,t,t,C.ay),t),A.aB(u.atk(u.w),1)],x.p),C.k,t,C.f,C.h,0),t,t)},
atk(d){switch(d){case 0:return D.aOI
case 1:return D.aPA
case 2:return D.aNg
case 3:return D.aPX
case 4:return D.aNC
default:return C.ar}}}
B.an4.prototype={
dg(d,e){return A.dz(e.ap($.bCQ(),x.w),new B.bgL(e),new B.bgM(),new B.bgN(),!1,!0,!1,x.D,x.l)}}
B.alL.prototype={
u(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="temperature_c",h="door_state",g="cash_balance_net",f=this.c,e=J.V(f),d=x.h.a(e.h(f,"machine")),a0=d==null
if(a0)u=j
else{t=J.a_(d,"code")
t=t==null?j:J.am(t)
u=t}if(u==null)u="?"
if(a0)s=j
else{a0=J.a_(d,"name")
a0=a0==null?j:J.am(a0)
s=a0}if(s==null)s=""
a0=e.h(f,"last_seen_at")
w=a0==null?j:J.am(a0)
a0=Date.now()
v=null
try{v=w==null?j:A.oc(w)}catch(r){}q=v==null?j:C.e.cF(new A.b_(a0,0,!1).i1(v).a,6e7)
a0=q==null
p=!a0&&q>10
t=x.g.a(e.h(f,"active_alarms"))
o=t==null?j:J.cf(t)
if(o==null)o=0
t=p?C.an:C.m
n=A.aB(A.j(u+" \xb7 "+s,j,j,j,A.D(C.j,16,C.q),j,j,j),1)
if(p)m="offline ("+A.i(q)+"m)"
else m=a0?"unbekannt":"aktiv"
if(p)a0=C.ml
else a0=a0?C.mm:C.fG
l=p?D.aay:C.i3
k=x.p
l=A.ap(A.b([n,new A.j7(m,a0,l,j)],k),C.k,j,C.f,C.h,0,j,j)
a0=A.b([],k)
if(e.h(f,i)!=null)a0.push(new B.C0(D.aat,"Temperatur",A.i(e.h(f,i))+" \xb0C",!1,j))
if(e.h(f,h)!=null){n=e.h(f,h)
n=n==null?j:J.am(n)
a0.push(new B.C0(D.abh,"T\xfcr",n==null?"?":n,!1,j))}if(e.h(f,g)!=null){f=A.fK(e.h(f,g))
a0.push(new B.C0(C.y2,"Kasse",$.d3().am(f),!1,j))}if(o>0)a0.push(new B.C0(D.ab7,"Alarme",""+o,!0,j))
return new A.aj(D.a7z,A.by(j,A.ad(A.b([l,C.u,A.lo(C.cx,a0,C.dI,8,12)],k),C.D,j,C.f,C.h,0),j,j,C.ai,t,3),j)}}
B.C0.prototype={
u(d){var w=this,v=null,u=w.f?C.an:C.j,t=A.aR(12),s=A.cP(C.am,1)
return A.b9(v,A.ap(A.b([A.co(w.c,u,v,16),C.aZ,A.j(w.d+": ",v,v,v,A.D(C.p,11,C.l),v,v,v),A.j(w.e,v,v,v,A.D(u,13,C.q),v,v,v)],x.p),C.k,v,C.f,C.H,0,v,v),C.r,v,v,new A.b5(C.ae,v,s,t,v,v,C.G),v,v,v,v,C.l1,v,v,v)}}
B.apf.prototype={
dg(d,e){var w=null,v=e.ap($.bwC(),x.w),u=B.a5I(C.m,C.A,D.o4,D.aGu,new B.bks(this,d,e))
return A.w6(w,w,A.dz(v,new B.bkt(),new B.bku(),new B.bkv(),!1,!0,!1,x.D,x.E),w,u,w,w)},
IY(d,e){return this.aHL(d,e)},
aHL(d,e){var w=0,v=A.q(x.H),u
var $async$IY=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kE(null,new B.bkr(),d,!0,null,null,x.y),$async$IY)
case 2:if(g===!0){u=$.bwC()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(u)}return A.o(null,v)}})
return A.p($async$IY,v)}}
B.ape.prototype={
u(d){var w,v,u,t=null,s="is_active",r=this.c,q=J.V(r),p=q.h(r,"name")
p=p==null?t:J.am(p)
if(p==null)p=""
p=A.aB(A.j(p,t,t,t,A.D(C.j,15,C.q),t,t,t),1)
w=A.hZ(q.h(r,s))
w=w!==!1?"aktiv":"deaktiviert"
v=A.hZ(q.h(r,s))
v=v!==!1?C.fG:C.mm
u=x.p
v=A.b([A.ap(A.b([p,new A.j7(w,v,t,t)],u),C.k,t,C.f,C.h,0,t,t),C.b3,A.j("Adapter: "+A.i(q.h(r,"adapter"))+" \xb7 Uhr-Toleranz: "+A.i(q.h(r,"time_skew_max_s"))+" s",t,t,t,A.D(C.p,11,C.l),t,t,t)],u)
p=A.ak(q.h(r,"notes"))
if((p==null?t:p.length!==0)===!0){r=q.h(r,"notes")
r=r==null?t:J.am(r)
if(r==null)r=""
C.b.K(v,A.b([C.b3,A.j(r,t,t,t,A.D(C.aU,11,C.l),t,t,t)],u))}return new A.aj(C.dU,A.by(t,A.ad(v,C.D,t,C.f,C.h,0),t,t,C.ai,t,3),t)}}
B.Cd.prototype={
W(){var w=$.af()
return new B.X0(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.X0.prototype={
l(){var w=this,v=w.x,u=v.R$=$.af()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
w.ao()},
lm(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$lm=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.w.ga1()
j=j==null?null:j.hU()
if(j!==!0){w=1
break}q=r.gc9().aE(0,$.bL(),x.A)
t=4
j=C.c.aL(r.x.a.a)
o=r.Q
n=C.c.aL(r.y.a.a)
m=C.c.aL(r.z.a.a)
if(m.length===0)m=null
l=x.z
w=7
return A.k(q.ev("register_telemetry_provider",A.a5(["p_name",j,"p_adapter",o,"p_hmac_secret",n,"p_notes",m],x.N,l),l),$async$lm)
case 7:j=r.c
if(j!=null)A.b6(j,!1).cD(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lm,v)},
u(d){var w=this,v=null
return new A.aj(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.j("Telemetrie-Provider anlegen",v,v,v,A.W(d).ok.r,v,v,v),C.L,A.db(v,!1,w.x,D.aey,v,v,1,!1,v,v,C.X,v,new B.bko()),C.u,A.k1(D.aeg,w.Q,!1,D.all,new B.bkp(w),v,x.N),C.u,A.db(v,!1,w.y,D.aek,v,v,1,!0,v,v,C.X,v,new B.bkq()),C.u,A.db(v,!1,w.z,D.aeQ,v,v,2,!1,v,v,C.X,v,v),C.L,A.dk(D.ZC,w.gCV(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.ajY.prototype={
dg(d,e){var w=null,v=e.ap($.bCN(),x.w),u=B.a5I(C.m,C.A,D.o4,D.aIR,new B.b9S(this,d,e))
return A.w6(w,w,A.dz(v,new B.b9T(),new B.b9U(),new B.b9V(),!1,!0,!1,x.D,x.E),w,u,w,w)},
J_(d,e){return this.aHT(d,e)},
aHT(d,e){var w=0,v=A.q(x.H),u
var $async$J_=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kE(null,new B.b9R(),d,!0,null,null,x.y),$async$J_)
case 2:if(g===!0){u=$.bCN()
if(e.e==null)A.U(A.Z(y.b))
e.gcw().cs(u)}return A.o(null,v)}})
return A.p($async$J_,v)}}
B.ajX.prototype={
u(d){var w,v,u=null,t="firmware_version",s=this.c,r=J.V(s),q=x.h,p=q.a(r.h(s,"machine")),o=q.a(r.h(s,"provider"))
q=p==null
w=q?u:J.a_(p,"code")
w=A.i(w==null?"?":w)
q=q?u:J.a_(p,"name")
q=A.j(w+" \xb7 "+A.i(q==null?"":q),u,u,u,A.D(C.j,14,C.q),u,u,u)
w=o==null
v=A.i(w?u:J.a_(o,"name"))
q=A.b([q,C.bW,A.j("Provider: "+v+" ("+A.i(w?u:J.a_(o,"adapter"))+")",u,u,u,A.D(C.p,11,C.l),u,u,u),A.j("Ger\xe4t: "+A.i(r.h(s,"external_device_id")),u,u,u,A.D(C.p,11,C.l),u,u,u)],x.p)
if(r.h(s,t)!=null)q.push(A.j("Firmware: "+A.i(r.h(s,t)),u,u,u,A.D(C.p,11,C.l),u,u,u))
return new A.aj(C.dU,A.by(u,A.ad(q,C.D,u,C.f,C.h,0),u,u,C.ai,u,3),u)}}
B.BF.prototype={
W(){var w=$.af()
return new B.UX(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.UX.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ao()},
lm(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$lm=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.w.ga1()
j=j==null?null:j.hU()
if(j!==!0){w=1
break}if(r.z==null||r.Q==null){w=1
break}q=r.gc9().aE(0,$.bL(),x.A)
t=4
j=q.cY("machine_devices")
o=r.z
n=r.Q
m=C.c.aL(r.x.a.a)
l=C.c.aL(r.y.a.a)
w=7
return A.k(j.iN(0,A.a5(["machine_id",o,"provider_id",n,"external_device_id",m,"firmware_version",l.length===0?null:l],x.N,x.T)),$async$lm)
case 7:j=r.c
if(j!=null)A.b6(j,!1).cD(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j(A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lm,v)},
u(d){var w=this,v=null,u=w.gc9(),t=u.ap($.bwC(),x.w),s=u.ap($.bL(),x.A)
u=x.D
return new A.aj(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.j("IoT-Ger\xe4t registrieren",v,v,v,A.W(d).ok.r,v,v,v),C.L,A.yQ(new B.b9L(w),s.cY("machines").ho(0,"id, code, name").po(0,"code").cr(new B.b9M(),u),u),C.u,A.dz(t,new B.b9N(w),new B.b9O(),new B.b9P(),!1,!0,!1,u,x.l),C.u,A.db(v,!1,w.x,D.aeM,v,v,1,!1,v,v,C.X,v,new B.b9Q()),C.u,A.db(v,!1,w.y,D.aeP,v,v,1,!1,v,v,C.X,v,v),C.L,A.dk(D.aIz,w.gCV(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.Yo.prototype={
W(){return new B.arM()}}
B.arM.prototype={
u(d){var w,v=x.D
v=A.yQ(new B.bop(this),this.gc9().ap($.bL(),x.A).cY("machines").ho(0,"id, code, name").po(0,"code").cr(new B.boq(),v),v)
w=this.w
return A.ad(A.b([new A.aj(C.C,v,null),A.aB(w==null?D.aNv:new B.arL(w,null),1)],x.p),C.k,null,C.f,C.h,0)}}
B.arL.prototype={
dg(d,e){var w=x.D
return A.yQ(new B.bol(this,e),e.ap($.bL(),x.A).cY("machine_slots").ho(0,"id, slot_code, product_id, unit_price_net, capacity, product:products(id, name, sku)").iL("machine_id",this.e).po(0,"slot_code").cr(new B.bom(),w),w)},
Ct(d,e,f){return this.aHW(d,e,f)},
aHW(d,e,f){var w=0,v=A.q(x.H),u=this
var $async$Ct=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kE(null,new B.boi(u,f),d,!0,null,null,x.H),$async$Ct)
case 2:d.e6()
return A.o(null,v)}})
return A.p($async$Ct,v)}}
B.arK.prototype={
u(d){var w,v,u=null,t="unit_price_net",s=this.c,r=J.V(s),q=x.h.a(r.h(s,"product")),p=A.aR(12),o=r.h(s,"slot_code")
o=o==null?u:J.am(o)
if(o==null)o=""
p=A.b9(C.W,A.j(o,u,u,u,A.D(C.j,14,C.q),u,u,u),C.r,u,u,new A.b5(C.m,u,u,p,u,u,C.G),u,44,u,u,u,u,u,44)
o=q==null
if(o)w=u
else{w=J.a_(q,"name")
w=w==null?u:J.am(w)}if(w==null)w="\u2014 kein Produkt zugeordnet \u2014"
w=A.j(w,u,u,u,A.D(C.j,14,C.q),u,u,u)
o=o?u:J.a_(q,"sku")
o=A.i(o==null?"\u2014":o)
v=A.i(r.h(s,"capacity"))
if(r.h(s,t)==null)s="\u2014"
else{s=A.fK(r.h(s,t))
s=$.d3().am(s)}r=x.p
return new A.aj(C.j8,A.by(u,A.ap(A.b([p,C.aF,A.aB(A.ad(A.b([w,A.j("SKU: "+o+" \xb7 Kapazit\xe4t: "+v+" \xb7 Preis: "+s,u,u,u,A.D(C.p,11,C.l),u,u,u)],r),C.D,u,C.f,C.h,0),1),C.yn],r),C.k,u,C.f,C.h,0,u,u),u,this.d,C.dC,u,3),u)}}
B.Cp.prototype={
W(){var w=$.af()
return new B.Yn(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(new A.cz("12",C.bb,C.aG),w))}}
B.Yn.prototype={
au(){var w,v,u,t=this
t.aM()
w=t.a.e
if(w!=null){v=J.V(w)
u=v.h(w,"slot_code")
u=u==null?null:J.am(u)
if(u==null)u=""
t.x.sew(0,u)
u=v.h(w,"unit_price_net")
u=u==null?null:J.am(u)
if(u==null)u=""
t.y.sew(0,u)
u=v.h(w,"capacity")
u=u==null?null:J.am(u)
if(u==null)u="12"
t.z.sew(0,u)
t.Q=A.ak(v.h(w,"product_id"))}},
l(){var w=this,v=w.x,u=v.R$=$.af()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
w.ao()},
lm(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$lm=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.w.ga1()
i=i==null?null:i.hU()
if(i!==!0){w=1
break}q=r.gc9().aE(0,$.bL(),x.A)
t=4
i=r.a.d
o=C.c.aL(r.x.a.a)
n=r.Q
m=r.y.a.a
m=A.fW(A.ay(m,",","."))
l=A.iA(r.z.a.a,null)
if(l==null)l=12
k=x.z
w=7
return A.k(q.ev("set_machine_slot",A.a5(["p_machine_id",i,"p_slot_code",o,"p_product_id",n,"p_unit_price_net",m,"p_capacity",l],x.N,k),k),$async$lm)
case 7:i=r.c
if(i!=null)A.b6(i,!1).fg()
t=2
w=6
break
case 4:t=3
h=s.pop()
p=A.a2(h)
i=r.c
if(i!=null)i.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j(A.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lm,v)},
u(d){var w=this,v=null,u=w.gc9().ap($.bL(),x.A),t=A.bD(d,v,x.m).w,s=w.a.e==null?"Slot anlegen":"Slot bearbeiten",r=x.D
return new A.aj(new A.al(0,0,0,t.f.d),A.et(A.k4(v,A.ad(A.b([A.j(s,v,v,v,A.W(d).ok.r,v,v,v),C.L,A.db(v,!1,w.x,D.ael,v,v,1,!1,v,v,C.X,v,new B.bof()),C.u,A.yQ(new B.bog(w),u.cY("products").ho(0,"id, name, sku").iL("status","active").po(0,"name").cr(new B.boh(),r),r),C.u,A.db(v,!1,w.y,D.aeF,v,C.ez,1,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.z,D.aeV,v,C.cY,1,!1,v,v,C.X,v,v),C.L,A.dk(C.dt,w.gCV(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.akJ.prototype={
dg(d,e){return A.dz(e.ap($.bCO(),x.w),new B.bbD(e),new B.bbE(),new B.bbF(),!1,!0,!1,x.D,x.l)}}
B.akI.prototype={
u(d){var w,v,u,t,s,r=null,q="slot_code",p="quantity",o="unit_price_net",n="error_reason",m=this.c,l=J.V(m),k=l.h(m,"status"),j=k==null?r:J.am(k)
if(j==null)j=""
k=l.h(m,"event_type")
w=k==null?r:J.am(k)
if(w==null)w=""
v=x.h.a(l.h(m,"machine"))
A:{if("processed"===j){k=C.fG
break A}if("duplicate"===j){k=C.mm
break A}if("rejected"===j){k=C.ml
break A}k=C.kd
break A}u=v==null?r:J.a_(v,"code")
u=A.i(u==null?"?":u)
t=l.h(m,q)!=null?" \xb7 Slot "+A.i(l.h(m,q)):""
s=x.p
s=A.b([A.ap(A.b([A.aB(A.j(w+" \xb7 "+u+t,r,r,r,A.D(C.j,13,C.q),r,r,r),1),new A.j7(j,k,r,r)],s),C.k,r,C.f,C.h,0,r,r),C.bW,A.j("Occurred: "+B.bJz(l.h(m,"occurred_at"))+" \xb7 Received: "+B.bJz(l.h(m,"received_at")),r,r,r,A.D(C.p,11,C.l),r,r,r)],s)
if(l.h(m,p)!=null||l.h(m,o)!=null){k=l.h(m,p)
k=A.i(k==null?"\u2014":k)
if(l.h(m,o)!=null){u=A.fK(l.h(m,o))
u=" \xb7 Preis: "+$.d3().am(u)}else u=""
t=J.d(l.h(m,"dispense_confirmed"),!1)?" \xb7 Auswurf NICHT best\xe4tigt":""
s.push(A.j("Menge: "+k+u+t,r,r,r,A.D(C.aU,11,C.l),r,r,r))}k=A.ak(l.h(m,n))
if((k==null?r:k.length!==0)===!0)s.push(A.j("Fehler: "+A.i(l.h(m,n)),r,r,r,A.D(C.an,11,C.S),r,r,r))
return new A.aj(C.j8,A.by(r,A.ad(s,C.D,r,C.f,C.h,0),r,r,C.dC,r,3),r)}}
B.tT.prototype={
u(d){var w=null
return A.d_(new A.aj(C.dd,A.ad(A.b([A.co(this.c,C.p,w,40),C.M,A.j(this.d,w,w,w,A.D(C.p,13,C.l),C.cF,w,w)],x.p),C.k,w,C.f,C.H,0),w),w,w)}}
B.ae_.prototype={
u(d){return B.Q3("measured_at","temperature",new B.b15(),new B.b16(),new B.b17(),"temperature_logs","Temperaturkontrolle")}}
B.CA.prototype={
W(){var w=$.af()
return new B.YR(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.YR.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ao()},
aMI(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hU()
if(s!==!0)return
s=t.x.a.a
w=A.JV(A.ay(s,",","."))
s=t.c
s.toString
s=A.b6(s,!1)
v=t.z
u=C.c.aL(t.y.a.a)
if(u.length===0)u=null
s.cD(A.a5(["machine_id",v,"temperature_c",w,"corrective_action",u,"measured_at",new A.b_(Date.now(),0,!1).dV()],x.N,x.X))},
u(d){var w=this,v=null
return new A.aj(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.j("Temperatur erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OL(new B.bpB(w),w.z),C.u,A.db(v,!1,w.x,D.aeA,v,D.aBL,1,!1,v,v,C.X,v,new B.bpC()),C.u,A.db(v,!1,w.y,D.aej,v,v,2,!1,v,v,C.X,v,v),C.L,A.dk(C.dt,w.gaMH(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.a7y.prototype={
dg(d,e){return A.dz(e.ap($.awf(),x.c),new B.aLz(this),new B.aLA(),new B.aLB(),!1,!0,!1,x.W,x.l)}}
B.FH.prototype={
W(){return new B.WN()},
aZz(d){return this.d.$1(d)}}
B.WN.prototype={
xw(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$xw=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new B.bjf(q))
t=4
p=new B.aJy()
k=new A.a6P(C.Cm,1600,null,80,!0)
k.arR(80,null,1600,!0)
w=7
return A.k($.bNw().r2(k,C.Fp),$async$xw)
case 7:o=e
if(o==null){r=[1]
w=5
break}w=8
return A.k(o.YN(),$async$xw)
case 8:n=e
w=9
return A.k(q.gc9().aE(0,$.bDC(),x.Z).FN(0,"haccp",n,"image/jpeg",o.b),$async$xw)
case 9:m=e
q.a.aZz(m)
if(q.c!=null)q.J(new B.bjg(q,m))
r.push(6)
w=5
break
case 4:t=3
h=s.pop()
l=A.a2(h)
i=q.c
if(i!=null)i.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Foto-Upload fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bjh(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xw,v)},
u(d){var w=this,v=null,u=w.w,t=u?v:w.gaIU()
if(u)u=D.aA4
else u=A.co(w.x==null?D.aaj:C.ji,v,v,v)
return A.fU(u,A.j(w.x==null?"Foto aufnehmen":"Foto angeh\xe4ngt",v,v,v,v,v,v,v),t,v)}}
B.Q2.prototype={
W(){return new B.WX()},
aX5(d){return this.w.$1(d)},
aX4(d){return this.x.$1(d)},
aYH(d,e){return this.y.$2(d,e)}}
B.WX.prototype={
gk9(){var w=this.w
return w===$?this.w=F.aFF():w},
gJd(){var w=this,v=w.a
return new B.Ar(v.e,v.f,w.gk9().a,A.bB(A.aW(w.gk9().b),A.bi(w.gk9().b),A.bV(w.gk9().b),23,59,59,0))},
Cy(){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$Cy=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:o=t.a
o.toString
s=t.c
s.toString
r=t.gc9()
w=3
return A.k(o.aYH(s,r),$async$Cy)
case 3:q=e
if(q==null){w=1
break}w=4
return A.k(r.aE(0,$.bwQ().ghR(),x.M).ke(t.a.e,q),$async$Cy)
case 4:p=e
o=t.c
if(o==null){w=1
break}if(p){o=$.awj().$1(t.gJd())
if(r.e==null)A.U(A.Z(y.b))
r.gcw().cs(o)
t.c.O(x.q).f.b2(D.aAB)}else o.O(x.q).f.b2(D.aAC)
case 1:return A.o(u,v)}})
return A.p($async$Cy,v)},
Cz(){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$Cz=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a.r
w=3
return A.k(t.gc9().aE(0,$.bwQ().ghR(),x.M).LX(s,t.gk9().a,t.gk9().b),$async$Cz)
case 3:r=e
q=t.c
if(q==null){w=1
break}if(r==null){q.O(x.q).f.b2(D.aAw)
w=1
break}w=4
return A.k(A.bvR(r,s+"_nachweis.pdf"),$async$Cz)
case 4:case 1:return A.o(u,v)}})
return A.p($async$Cz,v)},
CA(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$CA=A.m(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=r.a.r
if(f==null){w=1
break}n=r.c
n.toString
w=3
return A.k(A.hj(null,null,!0,null,new B.bke(r),n,null,!0,!0,x.y),$async$CA)
case 3:if(a0!==!0){w=1
break}n=r.gc9()
m=A.dP(n.aE(0,$.awj().$1(r.gJd()),x.w))
q=m==null?A.b([],x.t):m
t=5
p=new F.mL(n.aE(0,$.bL(),x.A))
n=D.apS.h(0,f)
if(n==null)n="haccp_temperature"
l=r.gk9()
k=r.gk9()
j=r.a.d
i=r.gk9()
h=$.dp()
i=h.am(i.a)
h=h.am(r.gk9().b)
w=8
return A.k(p.wi(n,l.a,k.b,A.a5(["protocol_kind",f,"count",J.cf(q)],x.N,x.z),j+" \xb7 "+i+" \u2013 "+h),$async$CA)
case 8:n=r.c
if(n!=null)n.O(x.q).f.b2(E.mi)
t=2
w=7
break
case 5:t=4
e=s.pop()
o=A.a2(e)
n=r.c
if(n!=null)n.O(x.q).f.b2(A.c5(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CA,v)},
u(d){var w,v,u=this,t=null,s=u.gc9().ap($.awj().$1(u.gJd()),x.w),r=A.j(u.a.d,t,t,t,t,t,t,t),q=x.p,p=A.b([A.fn(t,t,D.acg,t,t,u.gaJm(),t,t,t,"Freigabe anfordern",t),A.fn(t,t,D.adf,t,t,u.gaJl(),t,t,t,"PDF-Nachweis",t)],q)
r=A.rt(p,r)
p=B.a5I(t,t,D.o4,D.ZG,u.gaJk())
w=u.gk9()
v=$.dp()
return A.dS(r,t,A.ad(A.b([new A.aj(C.dC,A.ap(A.b([A.aB(A.j(v.am(w.a)+" \u2013 "+v.am(u.gk9().b),t,t,t,t,t,t,t),1),A.nv(D.li,D.aIt,new B.bkj(u,d),t)],q),C.k,t,C.f,C.h,0,t,t),t),D.kX,A.aB(A.dz(s,new B.bkk(u),new B.bkl(),new B.bkm(),!1,!0,!1,x.D,x.l),1)],q),C.k,t,C.f,C.h,0),t,p)}}
B.a1N.prototype={
u(d){var w=null
return A.bzi(!1,w,C.eH,w,this.as,w,w,C.r,w,w,w,w,w,w,w,w,w,w,!0,this.d,w,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,this.r,w,!1,w,w)}}
B.b6Y.prototype={
L(){return"_ChipVariant."+this.b}}
B.a1O.prototype={
u(d){var w,v,u,t=null,s=A.bEM(d)
A.W(d)
w=this.x
v=w?s.ch:t
u=s.y
if(u==null){A.W(d)
u=!0}return A.bzi(!1,t,C.eH,t,t,t,t,C.r,t,new B.b6Z(d,!0,w,D.hC,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,C.zG,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,!0,this.d,t,v,t,t,t,t,this.r,t,t,w,s.f,t,t,t,u,t,t,!0,t,t)}}
B.b6Z.prototype={
gio(){var w,v=this,u=v.id
if(u===$){w=A.W(v.fr)
v.id!==$&&A.aO()
u=v.id=w.ax}return u},
gez(d){var w
if(this.go===D.hC)w=0
else w=this.fx?1:0
return w},
gzH(){return 1},
gjQ(){var w,v,u,t=this,s=t.k1
if(s===$){w=A.W(t.fr)
t.k1!==$&&A.aO()
s=t.k1=w.ok}w=s.as
if(w==null)w=null
else{if(t.fx)if(t.fy){v=t.gio()
u=v.as
v=u==null?v.z:u}else{v=t.gio()
u=v.rx
v=u==null?v.k3:u}else v=t.gio().k3
v=w.cO(v)
w=v}return w},
gd9(d){return new A.bo(new B.b7_(this),x.b)},
gcc(d){var w
if(this.go===D.hC)w=C.F
else{w=this.gio().x1
if(w==null)w=C.E}return w},
gcp(){return C.F},
gva(){var w,v,u=this
if(u.fx)if(u.fy){w=u.gio()
v=w.as
w=v==null?w.z:v}else w=u.gio().b
else w=u.gio().k3
return w},
gyu(){var w,v,u=this
if(u.fx)if(u.fy){w=u.gio()
v=w.as
w=v==null?w.z:v}else{w=u.gio()
v=w.rx
w=v==null?w.k3:v}else w=u.gio().k3
return w},
geL(){var w,v,u=this
if(u.go===D.hC&&!u.fy)if(u.fx){w=u.gio()
v=w.to
if(v==null){v=w.B
w=v==null?w.k3:v}else w=v
w=new A.bm(w,1,C.U,-1)}else{w=u.gio().k3
w=new A.bm(A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255),1,C.U,-1)}else w=C.Bz
return w},
gfo(){var w,v,u=this,t=null
if(u.fx)if(u.fy){w=u.gio()
v=w.as
w=v==null?w.z:v}else w=u.gio().b
else w=u.gio().k3
return new A.dC(18,t,t,t,t,w,t,t,t)},
gdm(d){return C.fu},
gmf(){var w=this.gjQ(),v=w==null?null:w.r
if(v==null)v=14
w=A.bN(this.fr,C.b4)
w=w==null?null:w.gcQ()
w=A.of(C.eP,C.dV,A.N((w==null?C.aO:w).bo(0,v)/14-1,0,1))
w.toString
return w}}
B.fm.prototype={}
B.rb.prototype={}
B.fy.prototype={}
B.a4n.prototype={
aD3(d,e){var w,v,u,t,s
if(!e)w=d===!0
else w=!0
for(v=this.CW,u=v.length,t=0;t<v.length;v.length===u||(0,A.G)(v),++t){s=v[t].b
if(s!=null&&w)s.$1(w)}},
a2C(d,e,f,g,h,i,j){var w,v,u,t,s=null,r=A.W(e).y2,q=r.x
if(q==null)q=24
w=r.Q
v=w==null?q:w
u=w==null?q/2:w
t=A.bC(s,s,s,new A.aj(new A.dX(v,0,u,0),A.d_(A.bxp(s,!1,s,s,s,!1,s,s,f,s,s,s,s,s,j,d),s,s),s),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.P,s)
return new B.Sj(D.Zj,g!=null?B.bIB(t,i,s,s,g,h):t,s)},
atx(d,e,f,g,h,i){return this.a2C(d,e,f,g,h,null,i)},
u(c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=A.W(c9),c6=B.bT8(c9),c7=c3.Q,c8=c7==null?c6.f:c7
if(c8==null)c8=c5.y2.f
w=c6.b
if(w==null)w=c5.y2.b
c7=c3.CW
v=C.b.ey(c7,new B.aBq())
u=v?new A.bd(c7,new B.aBr(),A.aa(c7).i("bd<1>")):A.b([],x._)
t=J.cB(u)
s=t.il(u,new B.aBs())
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
k=A.bI(o+(v?1:0),D.a2V,!1,x.eA)
j=A.a7q(c7.length+1,new B.aBt(c3,v,w,c8,c9,c6,c5,new A.bo(new B.aBu(c5),x.b),k),!0,x.cZ)
if(v){k[0]=new B.a5r(n+18+m)
o=j[0]
i=q?c4:r
o.c[0]=c3.atx(i,c9,new B.aBv(c3,q),c4,c4,!0)
for(o=c7.length,h=1,g=0;g<c7.length;c7.length===o||(0,A.G)(c7),++g){f=c7[g]
i=j[h]
e=f.b
d=e==null?c4:new B.aBw(f)
a0=f.r
if(a0==null)a0=w
i.c[0]=c3.a2C(!1,c9,e,d,a0,c4,!1);++h}a1=1}else a1=0
for(o=x.f0,a2=c3.y,a3=c3.x,i=x.d,a4=c3.as,e=x.p,d=x.k,a0=c3.fr,a5=l/2,a6=p/2,a7=0;a8=t.length,a7<a8;++a7){a9=t[a7]
A:{b0=0===a7
if(b0)b1=v
else b1=!1
if(b1){b1=a6
break A}if(b0){b1=p
break A}b1=a5
break A}b2=new A.dX(b1,0,a7===a8-1?p:a5,0)
if(a7===a0)k[a1]=D.afk
else k[a1]=D.afl
A.b3(d).E(0,C.I)
a8=j[0]
b1=a9.d
b3=A.W(c9)
c9.O(i)
b4=A.W(c9)
b5=b1?C.b0:c4
b6=A.b([],e)
b6.push(a9.a)
b4=b4.y2.w
b7=b4==null?b3.y2.w:b4
if(b7==null){b4=b3.ok.x
b4.toString
b7=b4}b4=b1?C.hG:C.aW
b8=c9.O(o)
b9=A.b9(b4,A.D4(new A.qh(new A.Rz(c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,C.Yi,c4,C.P,c4,c4,c4,c4),!1,!1,c4,!1,!1,new A.iC(C.ay,C.f,C.h,C.k,b5,C.bA,c4,0,b6,c4),c4),C.av,C.dB,!1,(b8==null?C.j6:b8).w.c3(b7)),C.r,c4,c4,c4,c4,a4,c4,c4,b2,c4,c4,c4)
a8.c[a1]=A.eF(!1,c4,!0,b9,c4,!0,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c8,c4,c4,c4,c4)
for(a8=c7.length,h=1,g=0;g<c7.length;c7.length===a8||(0,A.G)(c7),++g){f=c7[g]
c0=f.f[a7]
b4=j[h]
b5=f.b==null?c4:new B.aBx(f)
b6=f.r
if(b6==null)b6=w
b3=A.W(c9)
c9.O(i)
b8=A.W(c9)
b8=b8.y2.e
c1=b8==null?b3.y2.e:b8
if(c1==null){b8=b3.ok.z
b8.toString
c1=b8}b8=b1?C.hG:C.aW
c2=c9.O(o)
c2=(c2==null?C.j6:c2).w.c3(c1)
b9=A.b9(b8,new A.lQ(c2.cO(c4),c4,!0,C.eb,c4,C.bj,c4,new A.Ea(c0.a,c4),c4),C.r,c4,new A.at(0,1/0,a3,a2),c4,c4,c4,c4,c4,b2,c4,c4,c4)
if(b5!=null)b9=B.bIB(b9,c4,c4,c4,b5,b6)
b4.c[a1]=new B.Sj(c4,b9,c4);++h}++a1}c7=c6.a
if(c7==null)c7=c5.y2.a
return A.b9(c4,A.dT(!1,C.a0,!0,c4,B.bZI(c4,j,new A.j1(k,A.aa(k).i("j1<1>")),D.Zi),C.r,c4,0,c4,c4,c4,c4,c4,C.f8),C.r,c4,c4,c7,c4,c4,c4,c4,c4,c4,c4,c4)}}
B.Sk.prototype={
Az(d){return new B.b0Q(d)},
Lp(d){this.ann(d)
return!0}}
B.ao1.prototype={
EP(d,e){return A.U(A.f7(null))},
EV(d,e){return A.U(A.f7(null))}}
B.ao6.prototype={
d8(d){return A.U(A.f7(null))}}
B.GM.prototype={
W(){return new B.Yq()},
aZ5(){return this.w.$0()}}
B.Yq.prototype={
aCJ(){var w=this
if(w.d)return
w.J(new B.bor(w))
w.a.aZ5()
w.c.O(x.q).f.Xk(D.aAe)},
u(d){var w,v,u,t,s=this,r=null
A.W(d)
w=A.bK6(d)
v=A.bzz(d)
u=new B.bou(s,v,w)
t=A.qp(r,r,r,r,r,r,r,r,r,r,r,r,u.$0(),r,r,r,r,r,r,r,r)
u=u.$0()
u=t.aRK(new B.bos(s,v).$0(),u)
t=s.d?r:s.gaCI()
return A.da(A.j(s.a.r,r,r,r,r,r,r,r),r,r,t,r,u)}}
B.ql.prototype={
j(d){var w=this.AY(0),v=this.b
v=v==null?"default vertical alignment":v.j(0)
return w+"; "+v}}
B.wn.prototype={
WK(d,e){return null},
j(d){return"TableColumnWidth"}}
B.Ob.prototype={
EV(d,e){var w,v,u,t,s
for(w=new A.fl(d.a(),d.$ti.i("fl<1>")),v=0;w.t();){u=w.b
t=u.gcC()
s=C.bk.e7(u.dy,1/0,t)
v=Math.max(v,s)}return v},
EP(d,e){var w,v,u,t,s
for(w=new A.fl(d.a(),d.$ti.i("fl<1>")),v=0;w.t();){u=w.b
t=u.gcm()
s=C.aT.e7(u.dy,1/0,t)
v=Math.max(v,s)}return v},
WK(d,e){return this.a},
j(d){var w=this.a
return"IntrinsicColumnWidth(flex: "+A.i(w==null?null:C.e.ae(w,1))+")"}}
B.a5r.prototype={
EV(d,e){return this.a},
EP(d,e){return this.a},
j(d){return"FixedColumnWidth("+A.lE(this.a)+")"}}
B.a5G.prototype={
EV(d,e){return 0},
EP(d,e){return 0},
WK(d,e){return 1},
j(d){return"FlexColumnWidth("+A.lE(1)+")"}}
B.wm.prototype={
L(){return"TableCellVerticalAlignment."+this.b}}
B.w1.prototype={
saQC(d){var w=this.a3
if(w===d)return
w.gZ(w)
this.a3=d
this.a7()},
saSJ(d){if(this.a4===d)return
this.a4=d
this.a7()},
scI(d){if(this.aq===d)return
this.aq=d
this.a7()},
saPO(d,e){return},
saiO(d){var w,v,u,t=this,s=t.aG
if(s==null?d==null:s===d)return
t.aG=d
s=t.bx
if(s!=null)for(w=s.length,v=0;v<w;++v){u=s[v]
if(u!=null)u.l()}s=t.aG
t.bx=s!=null?A.bI(s.length,null,!1,x.ea):null},
soU(d){if(d.k(0,this.b9))return
this.b9=d
this.bb()},
saSK(d){if(this.aR===d)return
this.aR=d
this.a7()},
sZ8(d,e){return},
h7(d){if(!(d.b instanceof B.ql))d.b=new B.ql(C.t)},
fB(d){this.k5(d)
d.bl=C.ayq
d.e=d.a=d.r=!0},
qi(){this.H5()
this.dd.a8(0)
this.cP.a8(0)},
rX(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=x.aO,b8=A.b([],b7),b9=b6.V,c0=J.l1(b9,x.d7)
for(w=x.cV,v=0;v<b9;++v){u=b6.U
t=A.b(new Array(u),w)
for(s=0;s<u;++s)t[s]=A.b([],b7)
c0[v]=t}r=new B.aWn()
q=new B.aWm(b6)
p=new B.aWl(b6)
o=new B.aWo()
for(w=c3.length,n=b6.dc,m=0;m<c3.length;c3.length===w||(0,A.G)(c3),++m){l=c3[m]
if(n.aF(0,l.b)){k=n.h(0,l.b)
j=k.a
i=k.b
if(j<b6.V&&i<b6.U)c0[j][i].push(l)}else{h=r.$1(l)
j=q.$1(h.b)
i=p.$1(h.a)
if(j!==-1&&i!==-1)c0[j][i].push(l)}}for(w=b6.be,g=b6.cP,f=b6.dd,j=0;j<b6.V;j=a0){e=w[j]
d=b6.fy
d=(d==null?A.U(A.Z("RenderBox was not laid out: "+A.L(b6).j(0)+"#"+A.c7(b6))):d).a
a0=j+1
a1=w[a0]
a2=a1-e
if(a2===0)continue
a3=f.h(0,j)
if(a3==null){a3=A.wg(null,new B.aWj(b6,new A.I(0,e,d,a1)))
f.m(0,j,a3)}a4=A.b([],b7)
for(a1=a2+1e-10,a2=0+a2,i=0;i<b6.U;++i){a5=c0[j][i]
a6=a5.length
if(a6===0)continue
if(a6<=1)a7=C.b.gcJ(a5).U!==C.zV&&C.b.gcJ(a5).U!==C.Yi
else a7=!0
a8=A.ct()
if(!a7){a6=C.b.gcJ(a5)
if(a8.b!==a8)A.U(A.Or(a8.a))
a8.b=a6}else{a6=g.cl(0,new B.Iq(j,i),new B.aWk())
a9=A.ij()
a9.bl=C.zV
a9.r=!0
a6.mp(0,a5,a9)
if(a8.b!==a8)A.U(A.Or(a8.a))
a8.b=a6}a6=b6.U
a9=b6.S
if(i===a6-1){a9.toString
b0=d-J.lJ(a9,i)}else{a9.toString
a6=J.lJ(a9,i+1)
a9=b6.S
a9.toString
b0=a6-J.lJ(a9,i)}if(b0<=0)continue
if(a7){a6=a8.b
if(a6===a8)A.U(A.rG(a8.a))
a9=b6.S
a9.toString
a9=J.lJ(a9,i)
b1=new Float64Array(16)
b2=new A.cJ(b1)
b2.GC()
b1[14]=0
b1[13]=0
b1[12]=a9
if(!A.aOj(a6.d,b2)){a9=A.P2(b2)
a6.d=a9?null:b2
a6.je()}a9=new A.I(0,0,0+b0,a2)
if(!a6.f.k(0,a9)){a6.f=a9
a6.je()}}for(a6=a5.length,m=0;m<a5.length;a5.length===a6||(0,A.G)(a5),++m){l=a5[m]
n.m(0,l.b,new B.Iq(j,i))
b3=r.$1(l)
b4=b3.d>a1?-w[j]:0
b5=0
if(a7){if(b3.a>=b0){a9=b6.S
a9.toString
a9=J.bQZ(J.lJ(a9,i))
b5=a9}}else{a9=b3.c
b1=b6.S
b1.toString
if(a9<=J.lJ(b1,i)){a9=b6.S
a9.toString
a9=J.lJ(a9,i)
b5=a9}}if(b5!==0||b4!==0)o.$3(l,b5,b4)}a6=a8.b
if(a6===a8)A.U(A.rG(a8.a))
a6.x=i
a4.push(a6)}a1=A.ij()
a1.p4=j
a1.r=!0
a1.bl=C.Yh
a3.mp(0,a4,a1)
a1=new Float64Array(16)
a6=new A.cJ(a1)
a6.GC()
a1[14]=0
a1[13]=e
a1[12]=0
if(!A.aOj(a3.d,a6)){e=A.P2(a6)
a3.d=e?null:a6
a3.je()}e=new A.I(0,0,0+d,a2)
if(!a3.f.k(0,e)){a3.f=e
a3.je()}b8.push(a3)}c1.mp(0,b8,c2)},
als(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B
if(e===n&&d===o.U)return
if(d===0||e.length===0){o.U=d
w=n.length
if(w===0)return
for(v=0;v<n.length;n.length===w||(0,A.G)(n),++v){u=n[v]
if(u!=null)o.nU(u)}o.V=0
C.b.a8(o.B)
o.a7()
return}t=A.ep(x.Y)
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
o.kI(w)}}++s}t.aC(0,o.gaTt())
o.U=d
o.V=C.e.h8(e.length,d)
n=A.Q(e,x.dE)
o.B=n
o.a7()},
a_X(d,e,f){var w,v=this,u=d+e*v.U,t=v.B[u]
if(t==f)return
if(t!=null)v.nU(t)
w=v.B
w.$flags&2&&A.T(w)
w[u]=f
if(f!=null)v.kI(f)},
aJ(d){var w,v,u,t
this.fl(d)
for(w=this.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t!=null)t.aJ(d)}},
aD(d){var w,v,u,t,s,r=this
r.f9(0)
w=r.bx
if(w!=null){for(v=w.length,u=0;u<v;++u){t=w[u]
if(t!=null)t.l()}r.bx=A.bI(r.aG.length,null,!1,x.ea)}for(w=r.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){s=w[u]
if(s!=null)s.aD(0)}},
d0(d){var w,v,u,t
for(w=this.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t!=null)d.$1(t)}},
jp(){this.d0(this.gOa())},
cg(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.EV(t.KX(v),1/0)}return w},
ce(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.EP(t.KX(v),1/0)}return w},
cf(d){var w,v,u,t,s,r,q,p,o,n=this
if(n.V*n.U===0)return 0
w=n.HA(A.jl(1/0,d))
for(v=0,u=0;u<n.V;++u){for(t=0,s=0;r=n.U,s<r;++s){q=n.B[s+u*r]
if(q!=null){r=w[s]
p=q.gcL()
o=C.br.e7(q.dy,r,p)
t=Math.max(t,o)}}v+=t}return v},
ck(d){return this.av(C.bB,d,this.gcM())},
i0(d){return this.di},
KX(d){return new A.ir(this.aQB(d),x.gN)},
aQB(d){var w=this
return function(){var v=d
var u=0,t=1,s=[],r,q,p
return function $async$KX(e,f,g){if(f===1){s.push(g)
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
HA(a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=x.gR,a5=A.bI(a3.U,0,!1,a4),a6=A.bI(a3.U,0,!1,a4),a7=A.bI(a3.U,null,!1,x.cD)
for(w=a8.b,v=0,u=0,t=0,s=0;r=a3.U,s<r;++s){q=a3.a3.h(0,s)
if(q==null)q=a3.a4
p=a3.KX(s)
o=q.EP(p,w)
a5[s]=o
v+=o
a6[s]=q.EV(p,w)
n=q.WK(0,p)
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
akI(d){var w=this.be
return new A.I(0,w[d],this.gC(0).a,w[d+1])},
ec(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.V*m.U===0)return l
w=m.HA(d)
for(v=x.L,u=l,t=0;t<m.U;++t){s=m.B[t]
r=A.h5(l,w[t])
if(s==null)continue
q=s.b
q.toString
p=v.a(q).b
if(p==null)p=m.aR
A:{q=l
if(D.aBn===p){q=s.gwZ()
o=C.fP.e7(s.dy,new A.an(r,e),q)
q=o
break A}if(D.aBl===p||D.Zi===p||D.aBm===p||D.Zj===p||D.aBo===p)break A}if(q!=null)n=u==null||u<q
else n=!1
if(n)u=q}return u},
dE(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(l.V*l.U===0)return d.c2(C.ad)
w=l.HA(d)
v=C.b.fn(w,0,new B.aWp())
for(u=x.L,t=0,s=0;s<l.V;++s){for(r=0,q=0;p=l.U,q<p;++q){o=l.B[q+s*p]
if(o!=null){p=o.b
p.toString
p=u.a(p).b
switch((p==null?l.aR:p).a){case 3:return C.ad
case 0:case 1:case 2:case 5:p=A.h5(null,w[q])
n=o.gdr()
m=C.al.e7(o.dy,p,n)
r=Math.max(r,m.b)
break
case 4:break}}}t+=r}return d.c2(new A.J(v,t))},
cv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2="RenderBox was not laid out: ",a3=x.cT.a(A.K.prototype.ga5.call(a1)),a4=a1.V,a5=a1.U
if(a4*a5===0){a1.R=0
a1.fy=a3.c2(C.ad)
return}w=a1.HA(a3)
v=x.gR
u=A.bI(a5,0,!1,v)
switch(a1.aq.a){case 0:u[a5-1]=0
for(t=a5-2;t>=0;--t){s=t+1
u[t]=u[s]+w[s]}a1.S=new A.cE(u,A.aa(u).i("cE<1>"))
a1.R=C.b.ga2(u)+C.b.ga2(w)
break
case 1:u[0]=0
for(t=1;t<a5;++t){s=t-1
u[t]=u[s]+w[s]}a1.S=u
a1.R=C.b.gaf(u)+C.b.gaf(w)
break}s=a1.be
C.b.a8(s)
a1.di=null
for(r=x.L,q=0,p=0;p<a4;++p,q=e){s.push(q)
o=A.bI(a5,0,!1,v)
for(n=p*a5,m=0,l=!1,k=0,j=0,t=0;t<a5;++t){i=a1.B[t+n]
if(i!=null){h=i.b
h.toString
r.a(h)
h.d=p
g=h.b
switch((g==null?a1.aR:g).a){case 3:i.dH(A.h5(null,w[t]),!0)
g=a1.cb
g.toString
f=i.Aq(g,!0)
g=i.fy
if(f!=null){k=Math.max(k,f)
j=Math.max(j,(g==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):g).b-f)
o[t]=f
l=!0}else{m=Math.max(m,(g==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):g).b)
h.a=new A.r(u[t],q)}break
case 0:case 1:case 2:case 5:i.dH(A.h5(null,w[t]),!0)
h=i.fy
m=Math.max(m,(h==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):h).b)
break
case 4:break}}}if(l){if(p===0)a1.di=k
m=Math.max(m,k+j)}for(e=q+m,h=q+k,t=0;t<a5;++t){i=a1.B[t+n]
if(i!=null){g=i.b
g.toString
r.a(g)
d=g.b
switch((d==null?a1.aR:d).a){case 3:g.a=new A.r(u[t],h-o[t])
break
case 0:g.a=new A.r(u[t],q)
break
case 1:d=u[t]
a0=i.fy
g.a=new A.r(d,q+(m-(a0==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):a0).b)/2)
break
case 2:d=u[t]
a0=i.fy
g.a=new A.r(d,e-(a0==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):a0).b)
break
case 4:case 5:i.ib(A.h5(m,w[t]))
g.a=new A.r(u[t],q)
break}}}}s.push(q)
v=a1.R
v===$&&A.a()
a1.fy=a3.c2(new A.J(v,q))},
ee(d,e){var w,v,u,t
for(w=this.B.length-1,v=x.O;w>=0;--w){u=this.B[w]
if(u!=null){t=u.b
t.toString
if(d.lq(new B.aWq(u),v.a(t).a,e))return!0}}return!1},
aO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.V*k.U===0)return
if(k.aG!=null){w=d.gdw(0)
for(v=k.be,u=e.a,t=e.b,s=k.ghl(),r=0;r<k.V;++r){q=k.aG
if(q.length<=r)break
q=q[r]
if(q!=null){p=k.bx
if(p[r]==null)p[r]=q.DC(s)
q=k.bx[r]
q.toString
p=v[r]
o=k.b9
n=k.fy
if(n==null)n=A.U(A.Z("RenderBox was not laid out: "+A.L(k).j(0)+"#"+A.c7(k)))
q.ih(w,new A.r(u,t+p),o.L5(new A.J(n.a,v[r+1]-p)))}}}for(v=x.O,u=e.a,t=e.b,m=0;s=k.B,m<s.length;++m){l=s[m]
if(l!=null){s=l.b
s.toString
s=v.a(s).a
d.eD(l,new A.r(s.a+u,s.b+t))}}}}
B.Iq.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
if(!(e instanceof B.Iq))return!1
return this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.mp.prototype={
j(d){var w,v=this.a
v=v!=null?"TableRow("+(v.j(0)+", "):"TableRow("
v+=this.b.j(0)+", "
w=this.c
v=(w.length===0?v+"no children":v+A.i(w))+")"
return v.charCodeAt(0)==0?v:v}}
B.ly.prototype={}
B.Si.prototype={
d8(d){return new B.asm(D.alM,A.ep(x.dk),this,C.bc)},
bj(d){var w,v,u,t,s,r,q=this,p=q.c,o=p.length
p=o!==0?p[0].c.length:0
w=d.O(x.Q).w
v=A.CM(d,null)
u=x.v
t=x.cQ
s=x.eV
r=A.b([],x.eQ)
p=new B.w1(D.alL,p,o,q.d,D.C0,w,q.r,v,q.w,null,A.z(u,t),A.z(u,s),A.z(t,s),r,new A.bs(),A.aJ(x.cn))
p.bf()
o=A.b([],x.V)
C.b.sp(o,p.U*p.V)
p.B=o
p.saiO(q.y)
return p},
by(d,e){var w,v=this
e.saQC(v.d)
e.saSJ(D.C0)
w=d.O(x.Q).w
e.scI(w)
e.saPO(0,v.r)
e.saiO(v.y)
e.soU(A.CM(d,null))
e.saSK(v.w)
e.sZ8(0,null)}}
B.asm.prototype={
gaj(){return x.S.a(A.bW.prototype.gaj.call(this))},
ie(d,e){var w,v,u=this,t={}
u.p2=!0
u.re(d,e)
t.a=-1
w=u.e
w.toString
w=x.de.a(w).c
v=A.aa(w).i("ae<1,ly>")
t=A.Q(new A.ae(w,new B.bpq(t,u),v),v.i("ax.E"))
t.$flags=1
u.p1=t
u.abe()
u.p2=!1},
mb(d,e){var w=x.S
w.a(A.bW.prototype.gaj.call(this))
if(!(d.b instanceof B.ql))d.b=new B.ql(C.t)
if(!this.p2)w.a(A.bW.prototype.gaj.call(this)).a_X(e.a,e.b,d)},
mh(d,e,f){},
nn(d,e){x.S.a(A.bW.prototype.gaj.call(this)).a_X(e.a,e.b,null)},
dq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.p2=!0
w=x.am
v=A.z(x.f9,w)
for(u=f.p1,t=u.length,s=0;s<u.length;u.length===t||(0,A.G)(u),++s){r=u[s]
q=r.a
if(q!=null)v.m(0,q,r.b)}u=f.p1
t=C.b.gX(u)
p=new A.hg(t,new B.bpr(),A.aa(u).i("hg<1>"))
o=A.b([],x.R)
n=A.b3(w)
for(w=e.c,u=f.p3,q=x.bs,m=0;m<w.length;++m){r=w[m]
l=r.a
k=l==null
if(!k&&v.aF(0,l)){k=v.h(0,l)
k.toString
n.E(0,k)
j=k}else j=k&&p.t()?t.gN(0).b:D.alN
k=r.c
i=k.length
h=A.b(new Array(i),q)
for(g=0;g<i;++g)h[g]=new B.Jt(g,m)
o.push(new B.ly(l,f.Zq(j,k,u,h)))}while(p.t())f.OO(t.gN(0).b,C.rx,u)
for(w=v.$ti.i("cj<2>"),t=new A.cj(v,w).gX(0),w=new A.hg(t,new B.bps(n),w.i("hg<t.E>"));w.t();)f.OO(t.gN(0),C.rx,u)
f.p1=o
f.abe()
u.a8(0)
f.pL(0,e)
f.p2=!1},
abe(){var w=x.S.a(A.bW.prototype.gaj.call(this)),v=this.p1,u=v.length!==0?v[0].b.length:0,t=A.aa(v).i("hq<1,H>")
v=A.Q(new A.hq(v,new B.bpo(),t),t.i("t.E"))
w.als(u,v)},
d0(d){var w,v,u,t
for(w=this.p1,v=A.aa(w),w=new A.n0(C.b.gX(w),new B.bpt(),C.iW,v.i("n0<1,bM>")),u=this.p3,v=v.i("bM");w.t();){t=w.d
if(t==null)t=v.a(t)
if(!u.n(0,t))d.$1(t)}},
kN(d){this.p3.E(0,d)
this.lR(d)
return!0}}
B.Sj.prototype={
u(d){var w=null
return new B.asl(this.c,A.bC(w,w,w,this.d,!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.zV,w,w,w,w,w,w,w,w,C.P,w),w)}}
B.asl.prototype={
v1(d){var w,v=d.b
v.toString
x.L.a(v)
w=this.f
if(v.b!=w){v.b=w
v=d.gbY(d)
if(v!=null)v.a7()}}}
B.Jt.prototype={
k(d,e){if(e==null)return!1
if(J.ai(e)!==A.L(this))return!1
return e instanceof B.Jt&&this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.av3.prototype={}
B.aJy.prototype={}
B.ke.prototype={
L(){return"PostgresChangeFilterType."+this.b},
gb0Y(){var w,v=this
A:{if(D.Xa===v){w="in"
break A}if(D.avs===v){w="is"
break A}if(D.avl===v){w="isdistinct"
break A}if(D.X9===v||D.avi===v||D.avm===v||D.avn===v||D.avo===v||D.avp===v||D.avq===v||D.avr===v||D.avj===v||D.avk===v){w=v.b
break A}w=null}return w}}
B.aaL.prototype={
j(d){var w=this,v=w.a
if(v===D.Xa)return w.b+"=in.("+A.i(x.hf.a(w.c).eQ(0,new B.aRN(),x.N).cj(0,","))+")"
return w.b+"="+v.gb0Y()+"."+B.bHv(w.c)}}
var z=a.updateTypes(["S<~>()","~()","F(F)","A(rb)","S<~>(a3<f,@>,f{askNote:A})","xC(y)","A(fI)","Co(y)","f(f?)","Bv(y)","~(v)","By(y)","wl(dl<wl>)","HQ(y,v)","BG(y)","BY(y)","BP(y)","Iw(y,C,bJ?)","zx(y)","C1(y)","Cd(y)","BF(y)","Cp(y)","CA(y)","+color,label(E,f)(f)","mp(v)","I()(H)","A(y)","S<u<a3<f,@>>>(ck<u<a3<f,@>>>,Ar)","A(mp)","k_?(mp)","ly(mp)","A(ly)","t<H>(ly)","u<bM>(ly)","zz(f5<C?>)","+icon,label(a6,f)(f)","mL(dl<mL>)"])
B.bw0.prototype={
$1(d){return new B.wl(d.ap($.bL(),x.A))},
$S:z+12}
B.btB.prototype={
$1(d){return this.ajY(d)},
ajY(d){var w=0,v=A.q(x.C),u
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=3
return A.k(d.ap($.up().gafq(),x.fY),$async$$1)
case 3:if(f==null){u=A.b3(x.N)
w=1
break}u=d.ap($.qS(),x.cA).qG()
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:977}
B.bvm.prototype={
$1(d){return d.ap($.CS(),x.K).qM()},
$S:978}
B.buv.prototype={
$2(d,e){return d.ap($.CS(),x.K).qD(e)},
$S:979}
B.bvp.prototype={
$2(d,e){return d.ap($.CS(),x.K).N5(e.b,e.c,e.a,e.d)},
$S:z+28}
B.aLI.prototype={
$0(){return this.a.r.aE(0,$.CS(),x.K).ke(this.b,this.c)},
$S:2}
B.aLJ.prototype={
$0(){var w=this
return w.a.r.aE(0,$.CS(),x.K).La(w.d,w.b,w.c,w.e)},
$S:2}
B.aLK.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.k(u.b.r.aE(0,$.CS(),x.K).LY(u.d,u.c,u.e),$async$$0)
case 2:t.a=e
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.aLP.prototype={
$0(){return C.bF},
$S:21}
B.aLO.prototype={
$2(d,e){var w=null
return A.d_(new A.aj(C.dd,A.j(A.i(d),w,w,w,A.D(C.aU,14,C.l),w,w,w),w),w,w)},
$S:32}
B.aLN.prototype={
$1(d){var w=this.a.atG(d)
if(w.length===0)return new B.akE(null)
return new B.anC(w,null)},
$S:980}
B.aLM.prototype={
$1(d){return d.e},
$S:z+6}
B.bhY.prototype={
$2(d,e){var w,v,u,t,s=e.b<500?2:3,r=A.b([],x.p)
for(w=this.a.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
r.push(new B.P8(t.c,t.a,t.b,new B.bhX(d,t),t.x,t.f,t.r,t.w,null))}return A.a6b(1.05,r,s,12,12,C.jX,!0)},
$S:103}
B.bhX.prototype={
$0(){var w=x.z
return A.b6(this.a,!1).es(A.eH(new B.bhW(this.b),null,w),w)},
$S:0}
B.bhW.prototype={
$1(d){return this.a.d},
$S:24}
B.bv8.prototype={
$1(d){return J.d(J.a_(d,"kostenart"),this.a.a)},
$S:64}
B.bv9.prototype={
$2(d,e){return d+B.JO(J.a_(e,"betrag_brutto"))},
$S:65}
B.b3Y.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b3Z.prototype={
$0(){var w=this.a
w.z=!0
w.Q=null},
$S:0}
B.b4_.prototype={
$0(){return this.a.z=!1},
$S:0}
B.b3U.prototype={
$0(){var w,v=this.a,u=v.x
u.toString
w=v.y
return B.bBG(v.gaNs(),u,"B\xf6rdesnack24 GbR",w,"102/178/01635","DE 458804058")},
$S:0}
B.b3X.prototype={
$1(d){var w=null,v=this.a,u=A.j("Die Anlage PKW-Kosten "+v.gpZ()+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach beidseitiger Freigabe wird sie mit den hinterlegten Unterschriften abgeschlossen. Fortfahren?",w,w,w,w,w,w,w)
return A.iu(A.b([A.da(C.bZ,w,w,new B.b3V(v),w,w),A.dk(E.mq,new B.b3W(v),A.dJ(C.m,C.A,w,w,w,w,w))],x.p),w,u,E.mr)},
$S:43}
B.b3V.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cD(!1)
return null},
$S:0}
B.b3W.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cD(!0)
return null},
$S:0}
B.bg8.prototype={
$1(d){return this.a.d.$1(this.b)},
$S:8}
B.bch.prototype={
$0(){var w=this
return w.a.uF(w.b,w.c,w.d)},
$S:0}
B.bci.prototype={
$0(){return this.a.xl(this.b,this.c)},
$S:0}
B.bcj.prototype={
$0(){return this.a.xm(this.b,this.c)},
$S:0}
B.bca.prototype={
$1(d){return new A.ll(new B.bc9(this.a,this.b,this.c),null)},
$S:62}
B.bc9.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=A.b([],x.I)
for(w=D.lV.gi2(D.lV),w=w.gX(w),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dW(u.a,A.j(u.b,t,t,t,t,t,t,t),C.aW,t,v))}w=x.p
s=A.ad(A.b([A.k1(D.Ft,r,!1,q,new B.bc5(s,e),t,x.N),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dN(),this.b,t,t,t,t,t,2,D.Fr,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,C.ez,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.C,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ab,t,C.X,t,t,t,t),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dN(),this.c,t,t,t,t,t,2,D.Fs,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.C,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ab,t,C.X,t,t,t,t)],w),C.k,t,C.f,C.H,16)
return A.iu(A.b([A.da(D.ZA,t,t,new B.bc6(d),t,t),A.da(C.bZ,t,t,new B.bc7(d),t,t),A.dk(C.dt,new B.bc8(d),t)],w),t,s,D.aIu)},
$S:73}
B.bc5.prototype={
$1(d){return this.b.$1(new B.bc4(this.a,d))},
$S:12}
B.bc4.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bc6.prototype={
$0(){A.b6(this.a,!1).cD("streichen")
return null},
$S:0}
B.bc7.prototype={
$0(){A.b6(this.a,!1).cD("abbrechen")
return null},
$S:0}
B.bc8.prototype={
$0(){A.b6(this.a,!1).cD("speichern")
return null},
$S:0}
B.bc3.prototype={
$1(d){var w=null,v=A.j("Kilometerst\xe4nde "+this.a.f,w,w,w,w,w,w,w),u=x.p,t=A.ad(A.b([A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),this.b,w,w,w,w,w,2,D.aeH,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cY,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w),A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),this.c,w,w,w,w,w,2,D.aeR,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cY,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w)],u),C.k,w,C.f,C.H,16)
return A.iu(A.b([A.da(C.bZ,w,w,new B.bc1(d),w,w),A.dk(C.dt,new B.bc2(d),w)],u),w,t,v)},
$S:43}
B.bc1.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.bc2.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.bcg.prototype={
$1(d){var w=this
return new A.ll(new B.bcf(w.a,w.b,w.c,w.d),null)},
$S:62}
B.bcf.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=A.j("Kosten "+A.i(J.a_(t.b.e,"kennzeichen")),s,s,s,s,s,s,s),q=t.a,p=q.a,o=A.b([],x.I)
for(w=D.lV.gi2(D.lV),w=w.gX(w),v=x.r;w.t();){u=w.gN(w)
o.push(new A.dW(u.a,A.j(u.b,s,s,s,s,s,s,s),C.aW,s,v))}w=x.p
q=A.ad(A.b([A.k1(D.Ft,p,!1,o,new B.bcc(q,e),s,x.N),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dN(),t.c,s,s,s,s,s,2,D.Fr,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,C.ez,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.C,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ab,s,C.X,s,s,s,s),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dN(),t.d,s,s,s,s,s,2,D.Fs,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.C,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ab,s,C.X,s,s,s,s)],w),C.k,s,C.f,C.H,16)
return A.iu(A.b([A.da(C.bZ,s,s,new B.bcd(d),s,s),A.dk(D.ZH,new B.bce(d),s)],w),s,q,r)},
$S:73}
B.bcc.prototype={
$1(d){return this.b.$1(new B.bcb(this.a,d))},
$S:12}
B.bcb.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bcd.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.bce.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.bc_.prototype={
$0(){return this.a.xd(this.b,this.c)},
$S:0}
B.bc0.prototype={
$1(d){var w=this
return w.a.uC(w.b,w.c,w.d)},
$S:71}
B.bbR.prototype={
$1(d){var w=this
return new A.ll(new B.bbQ(w.a,w.b,w.c,w.d),null)},
$S:62}
B.bbQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fU(D.Fl,A.j($.dp().am(k),n,n,n,n,n,n,n),new B.bbL(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.c,n,n,n,n,n,2,D.Fx,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.d,n,n,n,n,n,2,D.Fu,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.ez,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.aK(l,l.gp(0),s.i("aK<ag.E>")),r=x.r,s=s.i("ag.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dW(A.i(p.h(q,"id")),A.j(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.et(A.ad(A.b([k,w,v,A.k1(D.Fv,u,!1,t,new B.bbM(m,e),n,x.N)],l),C.a8,n,C.f,C.H,16),n,n,n,C.K)
return A.iu(A.b([A.da(D.ZA,n,n,new B.bbN(d),n,n),A.da(C.bZ,n,n,new B.bbO(d),n,n),A.dk(C.dt,new B.bbP(d),n)],l),n,m,D.aHd)},
$S:73}
B.bbL.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.k(A.pe(u.c,A.bB(r,1,1,0,0,0,0),null,s,A.bB(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbK(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbK.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbM.prototype={
$1(d){return this.b.$1(new B.bbJ(this.a,d))},
$S:12}
B.bbJ.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbN.prototype={
$0(){A.b6(this.a,!1).cD("streichen")
return null},
$S:0}
B.bbO.prototype={
$0(){A.b6(this.a,!1).cD("abbrechen")
return null},
$S:0}
B.bbP.prototype={
$0(){A.b6(this.a,!1).cD("speichern")
return null},
$S:0}
B.bbZ.prototype={
$1(d){var w=this
return new A.ll(new B.bbY(w.a,w.b,w.c,w.d),null)},
$S:62}
B.bbY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fU(D.Fl,A.j($.dp().am(k),n,n,n,n,n,n,n),new B.bbU(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.c,n,n,n,n,n,2,D.Fx,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dN(),o.d,n,n,n,n,n,2,D.Fu,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.ez,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.aK(l,l.gp(0),s.i("aK<ag.E>")),r=x.r,s=s.i("ag.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dW(A.i(p.h(q,"id")),A.j(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.et(A.ad(A.b([k,w,v,A.k1(D.Fv,u,!1,t,new B.bbV(m,e),n,x.N)],l),C.a8,n,C.f,C.H,16),n,n,n,C.K)
return A.iu(A.b([A.da(C.bZ,n,n,new B.bbW(d),n,n),A.dk(D.ZH,new B.bbX(d),n)],l),n,m,D.aGQ)},
$S:73}
B.bbU.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.k(A.pe(u.c,A.bB(r,1,1,0,0,0,0),null,s,A.bB(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbT(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbT.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbV.prototype={
$1(d){return this.b.$1(new B.bbS(this.a,d))},
$S:12}
B.bbS.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbW.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.bbX.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.bqC.prototype={
$1(d){var w=J.a_(d,"image_url")
return A.i(w==null?"":w).length===0},
$S:64}
B.bqD.prototype={
$1(d){return A.i(J.a_(d,"full_name"))},
$S:38}
B.boF.prototype={
$1(d){var w=J.a_(x.f.a(d),"name")
return A.i(w==null?"":w)},
$S:41}
B.boG.prototype={
$1(d){return d.length!==0},
$S:17}
B.awN.prototype={
$0(){var w=x.z
return A.b6(this.a,!1).es(A.eH(new B.awM(),null,w),w)},
$S:0}
B.awM.prototype={
$1(d){return D.a_S},
$S:z+5}
B.brF.prototype={
$1(d){return new F.mL(d.ap($.bL(),x.A))},
$S:z+37}
B.brE.prototype={
$1(d){return d.ap($.bww(),x.u).aXn(0)},
$S:53}
B.aCx.prototype={
$0(){return C.bF},
$S:21}
B.aCw.prototype={
$2(d,e){var w=null
return A.d_(new A.aj(C.dd,A.j(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:32}
B.aCv.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNA
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ahq(v.gN(v),null))
v=A.ig(A.dF(w,C.C,null,C.K,!1),C.m,new B.aCu(this.a))}return v},
$S:87}
B.aCu.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwv()
if(s.e==null)A.U(A.Z(y.b))
s.gcw().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b4a.prototype={
$1(d){return d==null?null:A.eT(J.am(d))},
$S:985}
B.b49.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(!j.b){w=j.c.O(x.q).f
v=j.d
if(v==="rejected")v="Diese Freigabe wurde abgelehnt."
else v=v==="cancelled"?"Diese Freigabe wurde abgebrochen.":"Signiertes PDF wird noch erzeugt \u2026"
w.b2(A.c5(i,i,i,i,i,C.n,i,A.j(v,i,i,i,i,i,i,i),i,C.J,i,i,i,i,i,i,i,i,i,i))
return}if(j.e==="inventory_fifo"){w=j.a.e
v=J.V(w)
u=v.h(w,"snapshot")
if(x.f.b(u)){t=J.V(u)
s=x.g
r=s.a(t.h(u,"movements"))
if(r==null)r=C.bn
q=x.P
p=J.cG(r,q)
t=s.a(t.h(u,"lots"))
o=J.cG(t==null?C.bn:t,q)
t=s.a(v.h(w,"partner_signatures"))
n=J.cG(t==null?C.bn:t,q)
t=s.a(v.h(w,"decisions"))
m=J.cG(t==null?C.bn:t,q)
t=v.h(w,"period_from")
t=t==null?i:J.am(t)
l=A.eT(t==null?"":t)
if(l==null)l=new A.b_(Date.now(),0,!1)
w=v.h(w,"period_to")
w=w==null?i:J.am(w)
k=A.eT(w==null?"":w)
B.bva(m,l,o,p,n,k==null?new A.b_(Date.now(),0,!1):k)
return}}w=j.f
if(w!=null&&w.length!==0)A.mG(A.cm(w,0,i),C.em,"_blank")
else j.a.Cq(j.c,j.r,j.w)},
$S:0}
B.b47.prototype={
$0(){return this.a.uu(this.b,this.c,"approved")},
$S:0}
B.b48.prototype={
$0(){return this.a.uu(this.b,this.c,"rejected")},
$S:0}
B.b46.prototype={
$0(){return A.uJ(new A.pv(this.a))},
$S:0}
B.b44.prototype={
$1(d){var w=null,v=this.a,u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),v,w,w,w,w,w,2,D.aeJ,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w),t=this.b
return A.iu(A.b([A.da(C.bZ,w,w,new B.b42(t),w,w),A.dk(C.ms,new B.b43(v,t),w)],x.p),w,u,D.aH5)},
$S:43}
B.b42.prototype={
$0(){A.b6(this.a,!1).cD(null)
return null},
$S:0}
B.b43.prototype={
$0(){var w=C.c.aL(this.a.a.a)
if(w.length<3)return
A.b6(this.b,!1).cD(w)},
$S:0}
B.b45.prototype={
$1(d){return D.aPW},
$S:z+7}
B.bnS.prototype={
$0(){var w=this.a,v=this.b
w.w=!v.gZ(v)?v.ga2(v):null
w.x=!1},
$S:0}
B.bnT.prototype={
$0(){var w=this.a
w.z=A.i(this.b)
w.x=!1},
$S:0}
B.bnX.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bnY.prototype={
$0(){var w=this.b,v=this.c
w=w==null?v:v+"\n"+w
return this.a.z=w},
$S:0}
B.bnZ.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bo_.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bo0.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bo1.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bo2.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bo3.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bo4.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bo8.prototype={
$3(d,e,f){return D.aIf},
$S:986}
B.bo9.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.boa.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.b4C.prototype={
$0(){return this.a.x=!0},
$S:0}
B.b4D.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b4E.prototype={
$0(){return this.a.x=!1},
$S:0}
B.b6c.prototype={
$0(){var w=this.a
return w.w=w.wX()},
$S:0}
B.b6b.prototype={
$1(d){return C.c.cZ(C.e.j(d),2,"0")},
$S:68}
B.b6h.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b6d(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b6d.prototype={
$0(){var w=this.a
return w.w=w.wX()},
$S:0}
B.b6g.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.c
if(p!=null)return A.dF(A.b([A.by(C.an,A.j("K\xfcndigungen konnten nicht geladen werden: "+A.i(p),q,q,q,q,q,q,q),C.eJ,q,C.C,q,3)],x.p),C.ai,q,C.K,!1)
p=e.b
if(p==null)return C.bF
w=J.cB(p)
v=w.il(p,new B.b6e()).gp(0)
u=A.j("Eingegangene K\xfcndigungen",q,q,q,A.c8(C.j,22,C.q),q,q,q)
t=w.gZ(p)?"Bisher sind keine K\xfcndigungen eingegangen.":""+v+" offen \xb7 "+w.gp(p)+" gesamt. Der Zugang wurde jeweils automatisch per E-Mail best\xe4tigt (\xa7 312k Abs. 2 BGB)."
s=x.p
t=A.b([D.a8M,C.bW,u,C.M,A.j(t,q,q,q,A.D(C.p,13,C.l),q,q,q),C.L],s)
for(p=w.gX(p),w=this.a,u=w.gayp();p.t();){r=p.gN(p)
C.b.K(t,A.b([new B.aim(r,u,new B.b6f(w,r),q),C.u],s))}return A.dF(t,C.ai,q,C.K,!1)},
$S:349}
B.b6e.prototype={
$1(d){return J.a_(d,"processed_at")==null},
$S:64}
B.b6f.prototype={
$0(){return this.a.II(A.aI(J.a_(this.b,"id")))},
$S:0}
B.azh.prototype={
$1(d){return"Netto: "+A.i(J.a_(d,"net_amount"))+" \u20ac"},
$S:38}
B.azg.prototype={
$1(d){var w=J.V(d),v=w.h(d,"collected_at")
v=v==null?"":C.c.a_(C.c.iP(J.am(v),"T"," "),0,16)
return v+" \xb7 Brutto "+A.i(w.h(d,"amount_gross"))+" \u20ac \xb7 Wechselgeld "+A.i(w.h(d,"change_amount"))+" \u20ac"},
$S:38}
B.azi.prototype={
$2(d,e){return A.kE(null,new B.azf(),d,!0,null,null,x.P)},
$S:82}
B.azf.prototype={
$1(d){return D.aMP},
$S:z+9}
B.b6l.prototype={
$1(d){var w=this.a
return w.J(new B.b6k(w,d))},
$S:12}
B.b6k.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b6m.prototype={
$1(d){var w=d==null?"":d
return A.fW(A.ay(w,",","."))==null?"Betrag eingeben":null},
$S:15}
B.azV.prototype={
$1(d){var w="cleaning_type",v=J.V(d),u=D.apQ.h(0,v.h(d,w))
return u==null?A.i(v.h(d,w)):u},
$S:38}
B.azU.prototype={
$1(d){var w,v=J.V(d),u=v.h(d,"cleaned_at")
u=u==null?"":C.c.a_(C.c.iP(J.am(u),"T"," "),0,16)
w=v.h(d,"agent")!=null?" \xb7 "+A.i(v.h(d,"agent")):""
v=v.h(d,"notes")!=null?"\n"+A.i(v.h(d,"notes")):""
return u+w+v},
$S:38}
B.azW.prototype={
$2(d,e){return A.kE(null,new B.azT(),d,!0,null,null,x.P)},
$S:82}
B.azT.prototype={
$1(d){return D.aMZ},
$S:z+11}
B.b78.prototype={
$1(d){var w=this.a
return w.J(new B.b77(w,d))},
$S:12}
B.b77.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b79.prototype={
$1(d){var w=this.a
return w.J(new B.b76(w,d))},
$S:12}
B.b76.prototype={
$0(){var w=this.b
if(w==null)w="exterior"
return this.a.Q=w},
$S:0}
B.b7a.prototype={
$1(d){return this.a.as=d},
$S:31}
B.b7m.prototype={
$1(d){var w=null,v=A.j(this.a==="resolved"?"Reklamation erledigen":"Reklamation ablehnen",w,w,w,w,w,w,w),u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),this.b,w,w,w,w,w,2,D.aem,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,300,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w)
return A.iu(A.b([A.da(C.bZ,w,w,new B.b7k(d),w,w),A.dk(C.dt,new B.b7l(d),w)],x.p),w,u,v)},
$S:43}
B.b7k.prototype={
$0(){return A.b6(this.a,!1).cD(!1)},
$S:0}
B.b7l.prototype={
$0(){return A.b6(this.a,!1).cD(!0)},
$S:0}
B.b7n.prototype={
$0(){var w=this.a
return w.w=w.wY()},
$S:0}
B.b7s.prototype={
$2(d,e){var w,v,u,t=null
if(e.a!==C.j4)return C.bF
w=e.c
if(w!=null)return A.d_(new A.aj(C.C,A.j("Fehler: "+A.i(w),t,t,t,A.D(C.j,13,C.l),t,t,t),t),t,t)
v=e.b
if(v==null)v=C.cp
w=J.V(v)
if(w.gZ(v))return A.d_(A.j("Keine Reklamationen \u2014 sehr gut!",t,t,t,A.D(C.p,13,C.l),t,t,t),t,t)
u=this.a
return A.ig(A.zu(t,new B.b7p(u,v),w.gp(v),C.ai,new B.b7q()),C.m,new B.b7r(u))},
$S:349}
B.b7r.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b7o(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b7o.prototype={
$0(){var w=this.a
return w.w=w.wY()},
$S:0}
B.b7q.prototype={
$2(d,e){return C.u},
$S:124}
B.b7p.prototype={
$2(d,e){return new B.HQ(J.a_(this.b,e),B.c5n(),B.c5o(),this.a.gaLF(),null)},
$S:z+13}
B.b7h.prototype={
$0(){var w=this.a
return w.f.$2(w.c,"in_progress")},
$S:0}
B.b7i.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"resolved",!0)},
$S:0}
B.b7j.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"rejected",!0)},
$S:0}
B.aCs.prototype={
$1(d){var w=J.V(d),v=w.h(d,"product_label")
return A.i(v==null?"Ware":v)+" \xb7 "+A.i(w.h(d,"quantity"))+" Stk."},
$S:38}
B.aCr.prototype={
$1(d){var w,v="mhd_date",u=J.V(d),t=u.h(d,"disposed_at")
t=t==null?"":C.c.a_(C.c.iP(J.am(t),"T"," "),0,16)
w=D.apR.h(0,u.h(d,"reason"))
w=A.i(w==null?u.h(d,"reason"):w)
u=u.h(d,v)!=null?" \xb7 MHD "+A.i(u.h(d,v)):""
return t+" \xb7 "+w+u},
$S:38}
B.aCt.prototype={
$2(d,e){return A.kE(null,new B.aCq(),d,!0,null,null,x.P)},
$S:82}
B.aCq.prototype={
$1(d){return D.aNl},
$S:z+14}
B.bab.prototype={
$1(d){var w=this.a
return w.J(new B.baa(w,d))},
$S:12}
B.baa.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bac.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.Q,o=A.b([D.a6Z],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aI(t.h(u,"id"))
u=A.ak(t.h(u,"name"))
o.push(new A.dW(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.k1(D.aeN,p,!0,o,new B.ba9(q,d),r,x.N)},
$S:194}
B.ba9.prototype={
$1(d){var w=this.a
return w.J(new B.ba6(w,d,this.b))},
$S:12}
B.ba6.prototype={
$0(){var w=this.a,v=w.Q=this.b
if(v!=null){v=A.ak(J.a_(J.bR5(this.c,new B.ba5(v)),"name"))
if(v==null)v=""
w.y.sew(0,v)}},
$S:0}
B.ba5.prototype={
$1(d){return J.d(J.a_(d,"id"),this.a)},
$S:64}
B.bad.prototype={
$0(){return C.ar},
$S:102}
B.bae.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflichtfeld":null},
$S:15}
B.baf.prototype={
$1(d){var w=A.iA(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.bag.prototype={
$1(d){var w=this.a
return w.J(new B.ba8(w,d))},
$S:12}
B.ba8.prototype={
$0(){var w=this.b
if(w==null)w="mhd"
return this.a.as=w},
$S:0}
B.bah.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=new A.b_(Date.now(),0,!1)
w=2
return A.k(A.pe(u.b,A.bB(A.aW(s)-2,1,1,0,0,0,0),null,s,A.bB(A.aW(s)+2,1,1,0,0,0,0),C.eq),$async$$0)
case 2:r=e
if(r!=null){t=u.a
t.J(new B.ba7(t,r))}return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.ba7.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bai.prototype={
$1(d){return this.a.ax=d},
$S:31}
B.bs2.prototype={
$1(d){return this.ajP(d)},
ajP(d){var w=0,v=A.q(x.D),u,t,s,r,q,p
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=$.bL()
s=x.A
q=J
p=x.j
w=3
return A.k(d.aE(0,t,s).h4("list_documents",x.z),$async$$1)
case 3:r=q.cG(p.a(f),x.P)
s=d.aE(0,t,s).ay
s===$&&A.a()
w=4
return A.k(A.k6(new A.ae(r,new B.bs1(s.cY("documents")),r.$ti.i("ae<ag.E,S<bp>>")),x.a),$async$$1)
case 4:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bs1.prototype={
$1(d){return this.ajO(d)},
ajO(d){var w=0,v=A.q(x.a),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$$1=A.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:p=J.V(d)
o=p.h(d,"latest_file_path")
n=o==null?null:J.am(o)
if(n==null||n.length===0){w=1
break}t=4
l=p
k=d
w=7
return A.k(r.a.nR(n,86400),$async$$1)
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
$S:990}
B.bsf.prototype={
$1(d){return this.ajR(d)},
ajR(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
s=x.j
w=3
return A.k(d.aE(0,$.bL(),x.A).h4("list_document_folders",x.z),$async$$1)
case 3:u=t.cG(s.a(f),x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bt4.prototype={
$2(d,e){return this.ajW(d,e)},
ajW(d,e){var w=0,v=A.q(x.D),u,t,s,r
var $async$$2=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t=x.z
s=J
r=x.j
w=3
return A.k(d.aE(0,$.bL(),x.A).ev("list_document_signature_tasks",A.a5(["p_document",e],x.N,t),t),$async$$2)
case 3:u=s.cG(r.a(g),x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$2,v)},
$S:991}
B.bb2.prototype={
$0(){var w=0,v=A.q(x.a),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
r=s.a
q=r.gc9()
p=$.bL()
o=x.A
n=q.aE(0,p,o).ax
n===$&&A.a()
m=x.N
l=x.z
w=6
return A.k(n.hA("documents-init-templates",A.z(m,l)),$async$$0)
case 6:n=q.aE(0,p,o).ax
n===$&&A.a()
w=7
return A.k(n.hA("documents-install-branded-set",A.z(m,l)),$async$$0)
case 7:o=q.aE(0,p,o).ax
o===$&&A.a()
w=8
return A.k(o.hA("documents-install-haccp-set",A.z(m,l)),$async$$0)
case 8:if(r.c!=null){r=$.K9()
if(q.e==null)A.U(A.Z(y.b))
q.gcw().cs(r)}u=1
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
$S:228}
B.baZ.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:350}
B.bb_.prototype={
$0(){return!1},
$S:48}
B.bb0.prototype={
$0(){var w=this.a
return w.Bv(this.b,w.gc9())},
$S:0}
B.bb1.prototype={
$0(){var w=this.a
return w.xb(this.b,w.gc9())},
$S:0}
B.baE.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:350}
B.baF.prototype={
$0(){return!1},
$S:48}
B.baH.prototype={
$0(){return C.bF},
$S:21}
B.baG.prototype={
$2(d,e){var w=null
return new A.aj(C.C,A.j(A.i(d),w,w,w,w,w,w,w),w)},
$S:89}
B.baD.prototype={
$1(d){var w=this
return A.dz(w.b,new B.baA(w.a,d,w.c,w.d,w.e),new B.baB(),new B.baC(),!1,!0,!1,x.D,x.l)},
$S:87}
B.baC.prototype={
$0(){return C.ar},
$S:102}
B.baB.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:112}
B.baA.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=J.qV(m.b,new B.bap(k)),i=A.Q(j,j.$ti.i("t.E")),h=A.z(x.N,x.D)
for(j=i.length,w=0;w<i.length;i.length===j||(0,A.G)(i),++w){v=i[w]
u=A.ak(J.a_(v,"category"))
if(u==null)u="sonstiges"
J.e4(h.cl(0,u,new B.baq()),v)}if(k.x==null)t=d
else{j=J.qV(d,new B.bar(k))
t=A.Q(j,j.$ti.i("t.E"))}j=m.c
s=A.b([new B.aqZ(new B.bas(k),l),C.u,new B.alp(d,k.x,new B.bat(k),l),C.L],x.p)
for(r=J.bh(t),q=m.d,p=m.e;r.t();){o=r.gN(r)
n=h.h(0,J.a_(o,"slug"))
if(n==null)n=C.cp
s.push(new B.alq(o,n,q,new B.bau(k,p,j),new B.bav(k,p,j),new B.baw(k,p,j),new B.bax(k,p,j),new B.bay(k,p,j),l))}s.push(D.aAb)
return A.ig(A.dF(s,C.ai,l,C.K,!1),C.m,new B.baz(j))},
$S:231}
B.bap.prototype={
$1(d){var w,v=J.V(d),u=A.ak(v.h(d,"title"))
if(u==null)u=""
v=A.ak(v.h(d,"category"))
if(v==null)v=""
w=this.a.w.toLowerCase()
return w.length===0||C.c.n(u.toLowerCase(),w)||C.c.n(v.toLowerCase(),w)},
$S:64}
B.baq.prototype={
$0(){return A.b([],x.t)},
$S:137}
B.bar.prototype={
$1(d){return J.d(J.a_(d,"slug"),this.a.x)},
$S:64}
B.baz.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=$.K9()
if(t.e==null)A.U(A.Z(y.b))
t.gcw().cs(s)
s=$.bwx()
if(t.e==null)A.U(A.Z(y.b))
t.gcw().cs(s)
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bas.prototype={
$1(d){var w=this.a
return w.J(new B.bao(w,d))},
$S:31}
B.bao.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bat.prototype={
$1(d){var w=this.a
return w.J(new B.ban(w,d))},
$S:12}
B.ban.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bau.prototype={
$1(d){return this.a.x5(0,this.b,this.c,d)},
$S:84}
B.bav.prototype={
$1(d){return this.a.wU(this.b,this.c,A.aI(J.a_(d,"id")))},
$S:84}
B.baw.prototype={
$1(d){return this.a.CO(this.b,this.c,d)},
$S:84}
B.bax.prototype={
$1(d){return this.a.CJ(this.b,this.c,d)},
$S:84}
B.bay.prototype={
$1(d){return this.a.xk(this.b,this.c,d)},
$S:84}
B.baY.prototype={
$1(d){var w=null,v=this.a,u=J.V(v)
v=A.j("\u201e"+A.i(u.h(v,"title"))+'" (v'+A.i(u.h(v,"current_version"))+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.",w,w,w,w,w,w,w)
u=this.b
return A.iu(A.b([A.da(C.bZ,w,w,new B.baW(u),w,w),A.dk(E.mq,new B.baX(u),A.dJ(C.m,C.A,w,w,w,w,w))],x.p),w,v,E.mr)},
$S:43}
B.baW.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.baX.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.baV.prototype={
$1(d){return new A.ll(new B.baU(this.a,this.b),null)},
$S:62}
B.baU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=x.p,n=A.b([],o)
for(w=this.a.a,v=w.$ti,w=new A.aK(w,w.gp(0),v.i("aK<ag.E>")),u=this.b,v=v.i("ag.E");w.t();){t=w.d
if(t==null)t=v.a(t)
s=J.V(t)
r=u.n(0,s.h(t,"id"))
q=s.h(t,"full_name")
q=q==null?p:J.am(q)
q=A.j(q==null?"?":q,p,p,p,p,p,p,p)
s=s.h(t,"email")
s=s==null?p:J.am(s)
n.push(A.bEG(p,p,p,p,p,new B.baR(e,t,u),A.j(s==null?"":s,p,p,p,p,p,p,p),q,r))}n=A.cg(A.dF(n,p,p,C.K,!0),p,400)
return A.iu(A.b([A.da(C.bZ,p,p,new B.baS(d),p,p),A.dk(D.Az,new B.baT(d),A.dJ(C.m,C.A,p,p,p,p,p))],o),p,n,D.aIn)},
$S:73}
B.baR.prototype={
$1(d){return this.a.$1(new B.baQ(this.b,d,this.c))},
$S:71}
B.baQ.prototype={
$0(){var w=A.aI(J.a_(this.a,"id")),v=this.c
if(this.b===!0)v.E(0,w)
else v.H(0,w)},
$S:0}
B.baS.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.baT.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.baO.prototype={
$0(){return this.a.y=!0},
$S:0}
B.baP.prototype={
$0(){return this.a.y=!1},
$S:0}
B.baN.prototype={
$1(d){return new A.ll(new B.baM(this.a,this.b,this.c),null)},
$S:62}
B.baM.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=A.dH(r,C.aw,!1,r,!0,C.n,r,A.dN(),this.b,r,r,r,r,r,2,D.aeq,C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ab,r,C.X,r,r,r,r),p=this.a,o=p.a,n=A.b([],x.I)
for(w=J.bh(this.c),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aI(t.h(u,"slug"))
u=t.h(u,"label")
u=u==null?r:J.am(u)
n.push(new A.dW(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}w=x.p
p=A.cg(A.ad(A.b([q,C.u,A.k1(D.aeU,o,!1,n,new B.baJ(p,e),r,x.N)],w),C.k,r,C.f,C.H,0),r,400)
return A.iu(A.b([A.da(C.bZ,r,r,new B.baK(d),r,r),A.dk(D.ZC,new B.baL(d),r)],w),r,p,D.aIs)},
$S:73}
B.baJ.prototype={
$1(d){return this.b.$1(new B.baI(this.a,d))},
$S:12}
B.baI.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.baK.prototype={
$0(){A.b6(this.a,!1).cD(!1)
return null},
$S:0}
B.baL.prototype={
$0(){A.b6(this.a,!1).cD(!0)
return null},
$S:0}
B.bdm.prototype={
$0(){return this.a.e.$1(null)},
$S:0}
B.bdn.prototype={
$0(){return this.a.e.$1(A.ak(J.a_(this.b,"slug")))},
$S:0}
B.bdo.prototype={
$2(d,e){var w,v,u="is_template",t="updated_at",s=J.V(d),r=J.d(s.h(d,u),!0)?1:0,q=J.V(e),p=J.d(q.h(e,u),!0)?1:0
if(r!==p)return p-r
s=s.h(d,t)
w=s==null?null:J.am(s)
if(w==null)w=""
s=q.h(e,t)
v=s==null?null:J.am(s)
return C.c.cA(v==null?"":v,w)},
$S:995}
B.bdp.prototype={
$0(){return this.a.f.$1(this.b)},
$S:0}
B.bdq.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
B.bdr.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.bds.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0}
B.bdt.prototype={
$0(){return this.a.y.$1(this.b)},
$S:0}
B.bam.prototype={
$0(){return D.aul},
$S:138}
B.bal.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,A.D(C.an,11,C.l),w,w,w)},
$S:112}
B.bak.prototype={
$1(d){var w,v=null,u=J.V(d)
if(u.gZ(d))return A.j("Noch keine Mitarbeiter eingeladen.",v,v,v,A.D(C.p,11,C.l),v,v,v)
w=A.b([A.j("Mitarbeiter-Signaturen",v,v,v,A.D(C.p,11,C.q),v,v,v),C.b3],x.p)
for(u=u.gX(d);u.t();)w.push(new B.art(u.gN(u),v))
return A.ad(w,C.D,v,C.f,C.h,0)},
$S:87}
B.bnO.prototype={
$0(){var w=this
return w.a.Bw(w.b,w.c,w.d)},
$S:0}
B.bsU.prototype={
$1(d){return this.ajU(d)},
ajU(d){var w=0,v=A.q(x.D),u,t,s,r
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.aE(0,$.bL(),x.A).cY("profiles").ho(0,"id, email, full_name, role, status").Xo("role",D.ann)
s=t.q9("status","neq.archived")
t=A.md(t.ov(s),t.$ti.c)
r=J
w=3
return A.k(A.md(t.ov(t.q9("deleted_at","is.null")),t.$ti.c).po(0,"created_at"),$async$$1)
case 3:u=r.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.aEb.prototype={
$0(){return this.a.C5(this.b,this.c)},
$S:0}
B.aEe.prototype={
$0(){return C.fQ},
$S:21}
B.aEd.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.aEc.prototype={
$1(d){return A.zu(null,new B.aE9(d),J.cf(d),null,new B.aEa())},
$S:997}
B.aEa.prototype={
$2(d,e){return D.kX},
$S:131}
B.aE9.prototype={
$2(d,e){var w=null,v=J.a_(this.a,e),u=J.V(v),t=A.ak(u.h(v,"full_name"))
t=A.j(t==null?A.aI(u.h(v,"email")):t,w,w,w,w,w,w,w)
return A.rL(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,A.j(A.i(u.h(v,"email"))+" \xb7 "+B.c84(A.ak(u.h(v,"role"))),w,w,w,w,w,w,w),w,t,w,B.bEK(w,A.j(B.c8q(A.ak(u.h(v,"status"))),w,w,w,w,w,w,w),w),w)},
$S:132}
B.aE8.prototype={
$1(d){return D.aOr},
$S:z+15}
B.bfR.prototype={
$1(d){return d==null||!C.c.n(d,"@")?"G\xfcltige E-Mail":null},
$S:15}
B.bfS.prototype={
$1(d){var w=this.a
return w.J(new B.bfQ(w,d,this.b))},
$S:71}
B.bfQ.prototype={
$0(){var w=this.a.r,v=this.c.a
if(this.b===!0)w.E(0,v)
else w.H(0,v)},
$S:0}
B.aFx.prototype={
$1(d){var w="removed_spoiled",v=J.V(d),u=A.i(v.h(d,"quantity")),t=v.h(d,w)
v=!J.d(t==null?0:t,0)?" \xb7 Verderb: "+A.i(v.h(d,w)):""
return"Menge: "+u+v},
$S:38}
B.aFw.prototype={
$1(d){var w=J.V(d),v=w.h(d,"filled_at")
v=v==null?"":C.c.a_(C.c.iP(J.am(v),"T"," "),0,16)
return v+(J.d(w.h(d,"mhd_checked"),!0)?" \xb7 MHD gepr\xfcft":"")},
$S:38}
B.aFy.prototype={
$2(d,e){return A.kE(null,new B.aFv(),d,!0,null,null,x.P)},
$S:82}
B.aFv.prototype={
$1(d){return D.aO8},
$S:z+16}
B.bcB.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.bcC.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.bcI.prototype={
$1(d){var w=this.a
return w.J(new B.bcH(w,d))},
$S:12}
B.bcH.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bcJ.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.at,o=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aI(t.h(u,"id"))
u=A.ak(t.h(u,"name"))
o.push(new A.dW(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.k1(D.Fw,p,!0,o,new B.bcF(q),new B.bcG(),x.N)},
$S:194}
B.bcF.prototype={
$1(d){var w=this.a
return w.J(new B.bcD(w,d))},
$S:12}
B.bcD.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bcG.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.bcK.prototype={
$0(){return D.yv},
$S:77}
B.bcL.prototype={
$1(d){var w=A.iA(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.bcM.prototype={
$1(d){var w
if(d==null||C.c.aL(d).length===0)return"Pflichtfeld"
w=A.fW(A.ay(d,",","."))
return w==null||w<=0?"EK > 0":null},
$S:15}
B.bcN.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflichtfeld":null},
$S:15}
B.bcO.prototype={
$1(d){var w=this.a
return w.J(new B.bcE(w,d))},
$S:8}
B.bcE.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bvb.prototype={
$0(){return A.b([],x.t)},
$S:137}
B.bvc.prototype={
$0(){return A.b([],x.t)},
$S:137}
B.bvj.prototype={
$2(d,e){return J.bDM(d,0,new B.bvk(e))},
$S:1000}
B.bvk.prototype={
$2(d,e){var w=A.b4(J.a_(e,this.a))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.bvh.prototype={
$2(d,e){return J.bDM(d,0,new B.bvi(e))},
$S:1001}
B.bvi.prototype={
$2(d,e){var w=A.b4(J.a_(e,this.a))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:200}
B.bvf.prototype={
$1(d){var w,v,u
if(d==null||J.am(d).length===0)return"\u2014"
try{v=A.oc(J.am(d))
v=$.dp().am(v)
return v}catch(u){w=J.am(d)
v=J.cf(w)>10?10:J.cf(w)
return J.bDZ(w,0,v)}},
$S:41}
B.bvg.prototype={
$1(d){var w
A:{if("refill"===d){w="Zugang"
break A}if("sale"===d){w="Verkauf"
break A}if("disposal"===d){w="Vernichtung"
break A}if("correction"===d){w="Korrektur"
break A}w=d
break A}return w},
$S:34}
B.bvd.prototype={
$1(d){var w=J.a_(d,"product_id")
return w==null?null:J.am(w)},
$S:354}
B.bve.prototype={
$1(d){return J.d(J.a_(d,"decision"),"approved")},
$S:64}
B.bfH.prototype={
$0(){var w=this.a
w.as=!0
w.at=null},
$S:0}
B.bfI.prototype={
$0(){return this.a.as=!1},
$S:0}
B.bfJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bfK.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bfN.prototype={
$1(d){var w=null,v=this.a,u=v.w,t=$.dp()
t=A.j("Die Inventur f\xfcr "+t.am(u)+" \u2013 "+t.am(v.x)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.  Nach 2-of-2-Freigabe wird der Report mit den DocuSign-Signaturen finalisiert. Fortfahren?",w,w,w,w,w,w,w)
return A.iu(A.b([A.da(C.bZ,w,w,new B.bfL(v),w,w),A.dk(E.mq,new B.bfM(v),A.dJ(C.m,C.A,w,w,w,w,w))],x.p),w,t,E.mr)},
$S:43}
B.bfL.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cD(!1)
return null},
$S:0}
B.bfM.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cD(!0)
return null},
$S:0}
B.bfG.prototype={
$0(){return A.b([],x.t)},
$S:137}
B.bfO.prototype={
$0(){var w,v,u=this.a,t=u.y
t.toString
w=u.z
if(w==null)w=C.cp
v=u.Q
if(v==null)v=C.cp
return B.bva(null,u.w,w,t,v,u.x)},
$S:0}
B.bfP.prototype={
$1(d){var w=J.a_(d,"product_id")
w=w==null?null:J.am(w)
return w===this.a.a},
$S:64}
B.bk8.prototype={
$2(d,e){var w=A.b4(J.a_(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:200}
B.bk9.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.bka.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.bkb.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.bem.prototype={
$2(d,e){var w=A.b4(J.a_(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:200}
B.ben.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.beo.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.bep.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:65}
B.beq.prototype={
$1(d){var w=J.a_(d,"product_id")
return w==null?null:J.am(w)},
$S:354}
B.bob.prototype={
$3(d,e,f){return D.a_k},
$S:z+17}
B.aKk.prototype={
$0(){return C.fQ},
$S:21}
B.aKj.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.aKi.prototype={
$1(d){return A.zu(null,new B.aKg(d),J.cf(d),null,new B.aKh())},
$S:1004}
B.aKh.prototype={
$2(d,e){return D.kX},
$S:131}
B.aKg.prototype={
$2(d,e){var w=null,v=J.a_(this.a,e),u=A.co(v.e?C.y0:D.aa6,w,w,w),t=A.j(v.b+" \xb7 "+v.c,w,w,w,w,w,w,w),s=v.f
return A.rL(!1,w,w,w,!0,w,w,w,!0,w,u,w,w,w,w,new B.aKf(d,v),!1,w,w,w,w,A.j(s==null?"":s,w,w,w,w,w,w,w),w,t,w,D.adw,w)},
$S:132}
B.aKf.prototype={
$0(){var w=x.z
return A.b6(this.a,!1).es(A.eH(new B.aKe(this.b),null,w),w)},
$S:0}
B.aKe.prototype={
$1(d){var w=this.a
return new B.zx(w.a,w.b+" \xb7 "+w.c,null)},
$S:z+18}
B.bh3.prototype={
$1(d){var w,v=this.a
if(v.c!=null){w=v.gc9()
v=$.bwP().$1(v.a.d)
if(w.e==null)A.U(A.Z(y.b))
w.gcw().cs(v)}},
$S:1005}
B.bh2.prototype={
$0(){return C.fQ},
$S:21}
B.bh1.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.bh0.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a3f
else{w=this.a
w=A.ig(A.zu(null,new B.bgY(w,d),v.gp(d),null,new B.bgZ()),null,new B.bh_(w))
v=w}return v},
$S:1006}
B.bh_.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc9()
s=$.bwP().$1(s.a.d)
if(r.e==null)A.U(A.Z(y.b))
r.gcw().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bgZ.prototype={
$2(d,e){return D.kX},
$S:131}
B.bgY.prototype={
$2(d,e){var w=null,v=J.a_(this.b,e),u=A.j(v.c,w,w,w,w,w,w,w),t=A.j("Bestand: "+v.d+" (Schwelle "+v.e+")",w,w,w,w,w,w,w),s=this.a,r=v.r,q=A.j(s.aFq(r),w,w,w,w,w,w,w)
return A.rL(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,new B.bgX(s,d,v),!1,w,w,w,w,t,w,u,w,B.bEK(s.a75(0,d,r).f_(0.15),q,new A.bm(s.a75(0,d,r),1,C.U,-1)),w)},
$S:132}
B.bgX.prototype={
$0(){return this.a.Bo(this.b,this.c)},
$S:0}
B.bgW.prototype={
$1(d){var w=null,v=A.j("Korrektur: "+this.a.c,w,w,w,w,w,w,w),u=this.b,t=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dN(),u,w,w,w,w,w,2,D.aeX,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,D.aBK,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w),s=this.c
return A.iu(A.b([A.da(C.bZ,w,w,new B.bgU(s),w,w),A.dk(D.aIa,new B.bgV(s,u),w)],x.p),w,t,v)},
$S:43}
B.bgU.prototype={
$0(){A.b6(this.a,!1).cD(null)
return null},
$S:0}
B.bgV.prototype={
$0(){var w=A.iA(this.b.a.a,null)
A.b6(this.a,!1).cD(w)
return null},
$S:0}
B.aLF.prototype={
$1(d){return A.i(J.a_(d,"issue"))},
$S:38}
B.aLE.prototype={
$1(d){var w,v="performed_by",u=J.V(d),t=u.h(d,"reported_at")
t=t==null?"":C.c.a_(C.c.iP(J.am(t),"T"," "),0,16)
w=J.d(u.h(d,"resolved"),!0)?" \xb7 erledigt":" \xb7 offen"
u=u.h(d,v)!=null?" \xb7 "+A.i(u.h(d,v)):""
return t+w+u},
$S:38}
B.aLG.prototype={
$2(d,e){return A.kE(null,new B.aLD(),d,!0,null,null,x.P)},
$S:82}
B.aLD.prototype={
$1(d){return D.aOJ},
$S:z+19}
B.bh6.prototype={
$1(d){var w=this.a
return w.J(new B.bh5(w,d))},
$S:12}
B.bh5.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bh7.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflichtfeld":null},
$S:15}
B.bh8.prototype={
$1(d){var w=this.a
return w.J(new B.bh4(w,d))},
$S:8}
B.bh4.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bpz.prototype={
$1(d){var w=this.a
return w.J(new B.bpy(w,d))},
$S:1007}
B.bpy.prototype={
$0(){var w=this.b
return this.a.w=w.ga2(w)},
$S:0}
B.bsm.prototype={
$1(d){return this.ajS(d)},
ajS(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ap($.bL(),x.A).cY("machine_health").ho(0,"machine_id, last_seen_at, last_heartbeat_at, temperature_c, door_state, cash_balance_net, active_alarms, updated_at, machine:machines(id, code, name, is_cooled)").qJ(0,"updated_at",!1),$async$$1)
case 3:u=t.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bgN.prototype={
$0(){return C.bF},
$S:21}
B.bgM.prototype={
$2(d,e){var w=null
return A.d_(new A.aj(C.dd,A.j(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:32}
B.bgL.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNz
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.alL(v.gN(v),null))
v=A.ig(A.dF(w,C.C,null,C.K,!1),C.m,new B.bgK(this.a))}return v},
$S:87}
B.bgK.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCQ()
if(s.e==null)A.U(A.Z(y.b))
s.gcw().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bsV.prototype={
$1(d){return this.ajV(d)},
ajV(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ap($.bL(),x.A).cY("telemetry_providers").ho(0,"id, name, adapter, is_active, time_skew_max_s, notes, created_at, updated_at").po(0,"name"),$async$$1)
case 3:u=t.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bks.prototype={
$0(){return this.a.IY(this.b,this.c)},
$S:0}
B.bkv.prototype={
$0(){return C.bF},
$S:21}
B.bku.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.bkt.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNy
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ape(v.gN(v),null))
v=A.dF(w,C.C,null,C.K,!1)}return v},
$S:355}
B.bkr.prototype={
$1(d){return D.aPz},
$S:z+20}
B.bko.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflicht":null},
$S:15}
B.bkp.prototype={
$1(d){var w=this.a
return w.J(new B.bkn(w,d))},
$S:12}
B.bkn.prototype={
$0(){var w=this.b
if(w==null)w="generic"
return this.a.Q=w},
$S:0}
B.bkq.prototype={
$1(d){return d==null||C.c.aL(d).length<16?"Min. 16 Zeichen":null},
$S:15}
B.bs0.prototype={
$1(d){return this.ajN(d)},
ajN(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ap($.bL(),x.A).cY("machine_devices").ho(0,"id, external_device_id, firmware_version, last_seen_at, is_active, installed_at, machine:machines(id, code, name), provider:telemetry_providers(id, name, adapter)").qJ(0,"installed_at",!1),$async$$1)
case 3:u=t.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.b9S.prototype={
$0(){return this.a.J_(this.b,this.c)},
$S:0}
B.b9V.prototype={
$0(){return C.bF},
$S:21}
B.b9U.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.b9T.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNx
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ajX(v.gN(v),null))
v=A.dF(w,C.C,null,C.K,!1)}return v},
$S:355}
B.b9R.prototype={
$1(d){return D.aNf},
$S:z+21}
B.b9M.prototype={
$1(d){return J.cG(d,x.P)},
$S:116}
B.b9L.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.z
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dW(A.aI(q.h(r,"id")),A.j(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.k1(D.aeo,v,!1,u,new B.b9J(w),new B.b9K(),x.N)},
$S:202}
B.b9J.prototype={
$1(d){var w=this.a
return w.J(new B.b9G(w,d))},
$S:12}
B.b9G.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b9K.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9P.prototype={
$0(){return D.yv},
$S:77}
B.b9O.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:112}
B.b9N.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.Q,p=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
p.push(new A.dW(A.aI(t.h(u,"id")),A.j(A.i(t.h(u,"name"))+" ("+A.i(t.h(u,"adapter"))+")",s,s,s,s,s,s,s),C.aW,s,v))}return A.k1(D.ae4,q,!1,p,new B.b9H(r),new B.b9I(),x.N)},
$S:194}
B.b9H.prototype={
$1(d){var w=this.a
return w.J(new B.b9F(w,d))},
$S:12}
B.b9F.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.b9I.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9Q.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflicht":null},
$S:15}
B.boq.prototype={
$1(d){return J.cG(d,x.P)},
$S:116}
B.bop.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.w
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dW(A.aI(q.h(r,"id")),A.j(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.k1(D.aeB,v,!1,u,new B.boo(w),p,x.N)},
$S:202}
B.boo.prototype={
$1(d){var w=this.a
return w.J(new B.bon(w,d))},
$S:12}
B.bon.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bom.prototype={
$1(d){return J.cG(d,x.P)},
$S:116}
B.bol.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.b
if(p==null)p=A.b([],x.t)
w=this.a
v=this.b
u=A.ha(D.o4,D.aIO,new B.boj(w,d,v),A.dJ(C.m,C.A,q,q,q,q,q))
t=J.V(p)
if(t.gZ(p))w=D.aNw
else{s=A.b([],x.p)
for(t=t.gX(p);t.t();){r=t.gN(t)
s.push(new B.arK(r,new B.bok(w,d,v,r),q))}w=A.dF(s,C.C,q,C.K,!1)}return A.ad(A.b([new A.aj(D.a85,u,q),A.aB(w,1)],x.p),C.k,q,C.f,C.h,0)},
$S:1011}
B.boj.prototype={
$0(){return this.a.Ct(this.b,this.c,null)},
$S:0}
B.bok.prototype={
$0(){var w=this
return w.a.Ct(w.b,w.c,w.d)},
$S:0}
B.boi.prototype={
$1(d){return new B.Cp(this.a.e,this.b,null)},
$S:z+22}
B.bof.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflicht":null},
$S:15}
B.boh.prototype={
$1(d){return J.cG(d,x.P)},
$S:116}
B.bog.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.Q
u=A.b([D.a6X],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dW(A.aI(q.h(r,"id")),A.j(A.i(q.h(r,"name"))+" ("+A.i(q.h(r,"sku"))+")",p,p,p,p,p,p,p),C.aW,p,s))}return A.k1(D.Fw,v,!1,u,new B.boe(w),p,x.N)},
$S:202}
B.boe.prototype={
$1(d){var w=this.a
return w.J(new B.bod(w,d))},
$S:12}
B.bod.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bs7.prototype={
$1(d){return this.ajQ(d)},
ajQ(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.ap($.bL(),x.A).cY("machine_telemetry_events").ho(0,"id, event_type, status, event_uid, occurred_at, received_at, processed_at, quantity, unit_price_net, dispense_confirmed, temperature_c, error_reason, slot_code, machine:machines(code, name), provider:telemetry_providers(name, adapter)").qJ(0,"received_at",!1)
s=J
w=3
return A.k(A.aaM(t.VR(t.Yn("limit","200")),t.$ti.c),$async$$1)
case 3:u=s.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bbF.prototype={
$0(){return C.bF},
$S:21}
B.bbE.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.bbD.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNB
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.akI(v.gN(v),null))
v=A.ig(A.dF(w,C.C,null,C.K,!1),C.m,new B.bbC(this.a))}return v},
$S:87}
B.bbC.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCO()
if(s.e==null)A.U(A.Z(y.b))
s.gcw().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b16.prototype={
$1(d){var w=J.V(d),v=A.i(w.h(d,"temperature_c"))
w=J.d(w.h(d,"within_limit"),!1)?"  \u26a0\ufe0f \xfcber Grenzwert":""
return v+" \xb0C"+w},
$S:38}
B.b15.prototype={
$1(d){var w="corrective_action",v=J.V(d),u=v.h(d,"measured_at")
u=u==null?"":C.c.a_(C.c.iP(J.am(u),"T"," "),0,16)
return u+(v.h(d,w)!=null?"\n"+A.i(v.h(d,w)):"")},
$S:38}
B.b17.prototype={
$2(d,e){return A.kE(null,new B.b14(),d,!0,null,null,x.P)},
$S:82}
B.b14.prototype={
$1(d){return D.aQ5},
$S:z+23}
B.bpB.prototype={
$1(d){var w=this.a
return w.J(new B.bpA(w,d))},
$S:12}
B.bpA.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bpC.prototype={
$1(d){var w=d==null?"":d
return A.fW(A.ay(w,",","."))==null?"Bitte Temperatur eingeben":null},
$S:15}
B.aLB.prototype={
$0(){return D.yv},
$S:77}
B.aLA.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:112}
B.aLz.prototype={
$1(d){var w,v,u,t=null,s=this.a,r=A.eG(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,"Automat",!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),q=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dW(u.a,A.j(u.b+" \xb7 "+u.c,t,t,t,t,t,t,t),C.aW,t,v))}return A.k1(r,s.e,!0,q,s.f,new B.aLy(),x.N)},
$S:1012}
B.aLy.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.bjf.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bjg.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bjh.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bke.prototype={
$1(d){var w=null,v=this.a,u=v.a.d,t=v.gk9(),s=$.dp()
s=A.j("Das "+u+"-Protokoll ("+s.am(t.a)+" \u2013 "+s.am(v.gk9().b)+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird das signierte PDF automatisch abgelegt.",w,w,w,w,w,w,w)
return A.iu(A.b([A.da(C.bZ,w,w,new B.bkc(v),w,w),A.dk(E.mq,new B.bkd(v),A.dJ(C.m,C.A,w,w,w,w,w))],x.p),w,s,E.mr)},
$S:43}
B.bkc.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cD(!1)
return null},
$S:0}
B.bkd.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cD(!0)
return null},
$S:0}
B.bkj.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q,p
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=new A.b_(Date.now(),0,!1)
s=A.bB(A.aW(t)-5,1,1,0,0,0,0)
r=A.bB(A.aW(t)+1,1,1,0,0,0,0)
q=u.a
w=2
return A.k(F.avU(null,u.b,s,new A.lP(q.gk9().a,q.gk9().b,x.bz),r,C.eq),$async$$0)
case 2:p=e
if(p!=null)q.J(new B.bki(q,p))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bki.prototype={
$0(){var w=this.b
return this.a.w=new F.lV(w.a,w.b)},
$S:0}
B.bkm.prototype={
$0(){return C.fQ},
$S:21}
B.bkl.prototype={
$2(d,e){var w=null
return A.d_(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:32}
B.bkk.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a3i
else{w=this.a
w=A.ig(A.zu(null,new B.bkf(w,d),v.gp(d),null,new B.bkg()),null,new B.bkh(w))
v=w}return v},
$S:87}
B.bkh.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc9()
s=$.awj().$1(s.gJd())
if(r.e==null)A.U(A.Z(y.b))
r.gcw().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bkg.prototype={
$2(d,e){return D.kX},
$S:131}
B.bkf.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=t.a
s.toString
w=this.b
v=J.V(w)
s=A.j(s.aX5(v.h(w,e)),u,u,u,u,u,u,u)
t=t.a
t.toString
return A.rL(!1,u,u,u,!0,u,u,u,!0,u,u,u,u,u,u,u,!1,u,u,u,u,A.j(t.aX4(v.h(w,e)),u,u,u,u,u,u,u),u,s,u,u,u)},
$S:132}
B.b7_.prototype={
$1(d){var w,v,u=this
if(d.n(0,C.T)&&d.n(0,C.I)){w=u.a
if(w.go===D.hC){w=w.gio().k3
w=A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}else{w=w.gio().k3
w=A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.I)){w=u.a
if(w.go===D.hC)w=null
else{w=w.gio().k3
w=A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.T)){w=u.a
if(w.go===D.hC){w=w.gio()
v=w.Q
w=v==null?w.y:v}else{w=w.gio()
v=w.Q
w=v==null?w.y:v}return w}w=u.a
if(w.go===D.hC)w=null
else{w=w.gio()
v=w.p3
w=v==null?w.k2:v}return w},
$S:23}
B.aBu.prototype={
$1(d){if(d.n(0,C.T))return this.a.ax.b.bA(0.08)
return null},
$S:23}
B.aBq.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aBr.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aBs.prototype={
$1(d){return!1},
$S:z+3}
B.aBt.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=d>0,n=o&&q.b&&q.a.CW[d-1].b==null,m=x.k,l=A.b3(m)
if(n)l.E(0,C.I)
if(o){w=q.a.CW[d-1].r
if(w==null)w=q.c
v=w==null?p:w.Y(l)}else v=p
w=q.d
u=w==null?p:w.Y(A.b3(m))
t=o?v:u
o=q.f.z
if(o==null)o=q.r.y2.z
if(o==null)o=1
s=A.bxN(q.e,p,o)
r=d===0?p:new A.fd(s,C.N,C.N,C.N)
o=d===0?$.bNf():p
m=t==null?q.w.a.$1(l):t
return new B.mp(o,new A.b5(m,p,r,p,p,p,C.G),A.bI(q.x.length,D.aPo,!1,x.l))},
$S:z+25}
B.aBv.prototype={
$1(d){return this.a.aD3(d,this.b)},
$S:71}
B.aBw.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.aBx.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.b0Q.prototype={
$0(){var w,v,u,t,s=this.a,r=s.gbY(s),q=A.fS()
for(;;){if(!(r instanceof A.K&&!(r instanceof B.w1)))break
r.eT(s,q)
w=r.gbY(r)
s=r
r=w}if(r instanceof B.w1){v=s.b
v.toString
v=x.L.a(v).d
v.toString
u=r.akI(v)
r.eT(s,q)
t=A.zK(q)
if(t!=null)return u.e8(new A.r(-t.a,-t.b))}return C.aP},
$S:126}
B.bor.prototype={
$0(){this.a.d=!0},
$S:0}
B.bou.prototype={
$0(){var w,v=this,u=v.a
u.a.toString
w=v.b.b
if(w!=null){if(w instanceof A.ud)return w}else{w=v.c
w.grU()
if(w.grU() instanceof A.ud)return x.av.a(w.grU())}return A.JF(new B.bov(u,v.b,v.c))},
$S:1013}
B.bov.prototype={
$1(d){var w,v=this
if(d.n(0,C.I)){v.a.a.toString
w=v.b.c
return w==null?v.c.gDQ():w}v.a.a.toString
w=v.b.b
return w==null?v.c.grU():w},
$S:5}
B.bos.prototype={
$0(){var w,v,u=this.a
u.a.toString
w=this.b
v=w.as
if(v instanceof A.ud)return v
return A.JF(new B.bot(u,w))},
$S:1014}
B.bot.prototype={
$1(d){var w,v=this
if(d.n(0,C.I)){v.a.a.toString
w=v.b.at
return w==null?C.F:w}v.a.a.toString
w=v.b.as
return w==null?C.F:w},
$S:5}
B.aWn.prototype={
$1(d){var w=d.d,v=w!=null?A.zK(w):null
if(v==null)v=C.t
return d.f.e8(v)},
$S:1015}
B.aWm.prototype={
$1(d){var w,v
for(w=this.a,v=w.V-1,w=w.be;v>=0;--v)if(w[v]<=d)return v
return-1},
$S:356}
B.aWl.prototype={
$1(d){var w,v=this.a,u=v.S
if(u==null)return-1
for(w=J.cf(u)-1;w>=0;--w){u=v.S
u.toString
if(J.lJ(u,w)<=d)return w}return-1},
$S:356}
B.aWo.prototype={
$3(d,e,f){var w=d.d,v=w!=null?A.zK(w):null
if(v==null)v=C.t
d.se3(0,A.q_(v.a+e,v.b+f,0))},
$S:1017}
B.aWj.prototype={
$0(){var w=this.a
w.r9(w,this.b)},
$S:0}
B.aWk.prototype={
$0(){return A.wg(null,null)},
$S:1018}
B.aWp.prototype={
$2(d,e){return d+e},
$S:47}
B.aWq.prototype={
$2(d,e){return this.a.dP(d,e)},
$S:22}
B.b0R.prototype={
$1(d){return!0},
$S:z+29}
B.b0S.prototype={
$1(d){return d.b},
$S:z+30}
B.bpq.prototype={
$1(d){var w,v,u,t={}
t.a=0
w=this.a;++w.a
v=d.c
u=A.aa(v).i("ae<1,bM>")
t=A.Q(new A.ae(v,new B.bpp(t,w,this.b),u),u.i("ax.E"))
t.$flags=1
return new B.ly(d.a,t)},
$S:z+31}
B.bpp.prototype={
$1(d){return this.c.z6(d,new B.Jt(this.a.a++,this.b.a))},
$S:1019}
B.bpr.prototype={
$1(d){return d.a==null},
$S:z+32}
B.bps.prototype={
$1(d){return!this.a.n(0,d)},
$S:1020}
B.bpo.prototype={
$1(d){var w=d.b
return new A.ae(w,new B.bpn(),A.aa(w).i("ae<1,H>"))},
$S:z+33}
B.bpn.prototype={
$1(d){var w=d.gaj()
w.toString
return x.Y.a(w)},
$S:1021}
B.bpt.prototype={
$1(d){return d.b},
$S:z+34}
B.aRN.prototype={
$1(d){return B.bHv(d)},
$S:41}
B.axv.prototype={
$2(d,e){return this.a.$0()},
$S(){return this.b.i("0(C,bJ)")}}
B.axw.prototype={
$0(){return this.a.$0()},
$S(){return this.b.i("0()")}};(function installTearOffs(){var w=a._static_1,v=a._instance_1u,u=a._instance_0u,t=a.installInstanceTearOff
w(B,"c7n","bW6",35)
var s
v(s=B.Tz.prototype,"gaFj","aFk",10)
u(s,"gaFr","xn",0)
u(s,"gayG","BO",0)
u(s=B.Ym.prototype,"gaMA","JO",0)
u(s,"gaOh","uX",0)
u(s=B.TL.prototype,"gat9","Hq",0)
u(s,"gax8","HS",0)
v(B.U4.prototype,"gayp","ayq",8)
u(B.U7.prototype,"gauo","aup",1)
u(B.Ui.prototype,"gav0","av1",1)
w(B,"c5n","c05",36)
w(B,"c5o","c06",24)
t(B.Uk.prototype,"gaLF",0,2,null,["$3$askNote","$2"],["xH","aLG"],4,0,0)
u(B.V_.prototype,"gawP","awQ",1)
u(B.W1.prototype,"gaxu","axv",1)
u(s=B.Vk.prototype,"gaIZ","J5",0)
u(s,"gaJ_","J6",0)
u(s,"gaxZ","ay_",1)
u(s=B.W0.prototype,"ga6G","It",0)
u(s,"gaIY","J4",0)
u(s,"gaJ4","J9",0)
u(s,"gaK8","CH",0)
u(B.W9.prototype,"gaFT","aFU",1)
u(B.X0.prototype,"gCV","lm",0)
u(B.UX.prototype,"gCV","lm",0)
u(B.Yn.prototype,"gCV","lm",0)
u(B.YR.prototype,"gaMH","aMI",1)
u(B.WN.prototype,"gaIU","xw",0)
u(s=B.WX.prototype,"gaJk","Cy",0)
u(s,"gaJl","Cz",0)
u(s,"gaJm","CA",0)
v(s=B.Sk.prototype,"gP8","Az",26)
v(s,"gae1","Lp",27)
u(B.Yq.prototype,"gaCI","aCJ",1)
v(s=B.w1.prototype,"gcC","cg",2)
v(s,"gcm","ce",2)
v(s,"gcM","cf",2)
v(s,"gcL","ck",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.C,[B.wl,B.v7,B.Ar,B.fI,B.amx,B.wX,B.fm,B.rb,B.fy,B.wn,B.Iq,B.mp,B.ly,B.av3,B.aJy,B.aaL])
v(A.o8,[B.bw0,B.btB,B.bvm,B.aLN,B.aLM,B.bhW,B.bv8,B.b3X,B.bg8,B.bca,B.bc5,B.bc3,B.bcg,B.bcc,B.bc0,B.bbR,B.bbM,B.bbZ,B.bbV,B.bqC,B.bqD,B.boF,B.boG,B.awM,B.brF,B.brE,B.aCv,B.b4a,B.b44,B.b45,B.bo8,B.b6b,B.b6e,B.azh,B.azg,B.azf,B.b6l,B.b6m,B.azV,B.azU,B.azT,B.b78,B.b79,B.b7a,B.b7m,B.aCs,B.aCr,B.aCq,B.bab,B.bac,B.ba9,B.ba5,B.bae,B.baf,B.bag,B.bai,B.bs2,B.bs1,B.bsf,B.baZ,B.baE,B.baD,B.baA,B.bap,B.bar,B.bas,B.bat,B.bau,B.bav,B.baw,B.bax,B.bay,B.baY,B.baV,B.baR,B.baN,B.baJ,B.bak,B.bsU,B.aEc,B.aE8,B.bfR,B.bfS,B.aFx,B.aFw,B.aFv,B.bcI,B.bcJ,B.bcF,B.bcG,B.bcL,B.bcM,B.bcN,B.bcO,B.bvf,B.bvg,B.bvd,B.bve,B.bfN,B.bfP,B.beq,B.bob,B.aKi,B.aKe,B.bh3,B.bh0,B.bgW,B.aLF,B.aLE,B.aLD,B.bh6,B.bh7,B.bh8,B.bpz,B.bsm,B.bgL,B.bsV,B.bkt,B.bkr,B.bko,B.bkp,B.bkq,B.bs0,B.b9T,B.b9R,B.b9M,B.b9J,B.b9K,B.b9N,B.b9H,B.b9I,B.b9Q,B.boq,B.boo,B.bom,B.boi,B.bof,B.boh,B.boe,B.bs7,B.bbD,B.b16,B.b15,B.b14,B.bpB,B.bpC,B.aLz,B.aLy,B.bke,B.bkk,B.b7_,B.aBu,B.aBq,B.aBr,B.aBs,B.aBt,B.aBv,B.bov,B.bot,B.aWn,B.aWm,B.aWl,B.aWo,B.b0R,B.b0S,B.bpq,B.bpp,B.bpr,B.bps,B.bpo,B.bpn,B.bpt,B.aRN])
v(A.R,[B.EC,B.alM,B.P8,B.anC,B.akE,B.ajC,B.amH,B.atI,B.amI,B.arR,B.CE,B.aiz,B.VL,B.a0u,B.akD,B.ajK,B.aim,B.a1I,B.a23,B.HQ,B.a4U,B.aqZ,B.alp,B.alq,B.akN,B.a5n,B.apb,B.alH,B.wU,B.anv,B.aru,B.arw,B.Iw,B.a7B,B.alL,B.C0,B.ape,B.ajX,B.arK,B.akI,B.tT,B.ae_,B.a1N,B.a1O,B.a4n,B.Sj])
v(A.y_,[B.buv,B.bvp,B.aLO,B.bhY,B.bv9,B.bc9,B.bcf,B.bbQ,B.bbY,B.aCw,B.b6g,B.azi,B.azW,B.b7s,B.b7q,B.b7p,B.aCt,B.bt4,B.baG,B.baB,B.baU,B.baM,B.bdo,B.bal,B.aEd,B.aEa,B.aE9,B.aFy,B.bvj,B.bvk,B.bvh,B.bvi,B.bk8,B.bk9,B.bka,B.bkb,B.bem,B.ben,B.beo,B.bep,B.aKj,B.aKh,B.aKg,B.bh1,B.bgZ,B.bgY,B.aLG,B.bgM,B.bku,B.b9U,B.b9L,B.b9O,B.bop,B.bol,B.bog,B.bbE,B.b17,B.aLA,B.bkl,B.bkg,B.bkf,B.aWp,B.aWq,B.axv])
u(B.zz,A.fF)
v(A.xZ,[B.aLI,B.aLJ,B.aLK,B.aLP,B.bhX,B.b3Y,B.b3Z,B.b4_,B.b3U,B.b3V,B.b3W,B.bch,B.bci,B.bcj,B.bc4,B.bc6,B.bc7,B.bc8,B.bc1,B.bc2,B.bcb,B.bcd,B.bce,B.bc_,B.bbL,B.bbK,B.bbJ,B.bbN,B.bbO,B.bbP,B.bbU,B.bbT,B.bbS,B.bbW,B.bbX,B.awN,B.aCx,B.aCu,B.b49,B.b47,B.b48,B.b46,B.b42,B.b43,B.bnS,B.bnT,B.bnX,B.bnY,B.bnZ,B.bo_,B.bo0,B.bo1,B.bo2,B.bo3,B.bo4,B.bo9,B.boa,B.b4C,B.b4D,B.b4E,B.b6c,B.b6h,B.b6d,B.b6f,B.b6k,B.b77,B.b76,B.b7k,B.b7l,B.b7n,B.b7r,B.b7o,B.b7h,B.b7i,B.b7j,B.baa,B.ba6,B.bad,B.ba8,B.bah,B.ba7,B.bb2,B.bb_,B.bb0,B.bb1,B.baF,B.baH,B.baC,B.baq,B.baz,B.bao,B.ban,B.baW,B.baX,B.baQ,B.baS,B.baT,B.baO,B.baP,B.baI,B.baK,B.baL,B.bdm,B.bdn,B.bdp,B.bdq,B.bdr,B.bds,B.bdt,B.bam,B.bnO,B.aEb,B.aEe,B.bfQ,B.bcB,B.bcC,B.bcH,B.bcD,B.bcK,B.bcE,B.bvb,B.bvc,B.bfH,B.bfI,B.bfJ,B.bfK,B.bfL,B.bfM,B.bfG,B.bfO,B.aKk,B.aKf,B.bh2,B.bh_,B.bgX,B.bgU,B.bgV,B.bh5,B.bh4,B.bpy,B.bgN,B.bgK,B.bks,B.bkv,B.bkn,B.b9S,B.b9V,B.b9G,B.b9P,B.b9F,B.bon,B.boj,B.bok,B.bod,B.bbF,B.bbC,B.bpA,B.aLB,B.bjf,B.bjg,B.bjh,B.bkc,B.bkd,B.bkj,B.bki,B.bkm,B.bkh,B.aBw,B.aBx,B.b0Q,B.bor,B.bou,B.bos,B.aWj,B.aWk,B.axw])
v(A.y7,[B.zA,B.akS,B.akR,B.akQ,B.a4V,B.ahq,B.akb,B.art,B.a54,B.a6Z,B.an4,B.apf,B.ajY,B.arL,B.akJ,B.a7y])
v(A.bf,[B.xC,B.Co,B.KX,B.Lm,B.Bv,B.By,B.LW,B.BG,B.ME,B.BP,B.Od,B.zx,B.C1,B.Ss,B.Cd,B.BF,B.Yo,B.Cp,B.CA,B.FH,B.Q2])
v(A.y6,[B.Tz,B.Ym,B.TL,B.U4,B.U7,B.Ui,B.Uk,B.V_,B.akc,B.Vk,B.W0,B.ane,B.W9,B.asv,B.X0,B.UX,B.arM,B.Yn,B.YR,B.WN,B.WX])
v(A.M,[B.BY,B.GM])
v(A.a1,[B.W1,B.Yq])
v(A.I8,[B.b6Y,B.wm,B.ke])
u(B.b6Z,A.xY)
u(B.Sk,A.vg)
v(B.wn,[B.ao1,B.Ob,B.a5r,B.a5G])
u(B.ao6,A.c)
u(B.ql,A.hM)
u(B.w1,A.H)
u(B.Si,A.aV)
u(B.asm,A.bW)
u(B.asl,A.fV)
u(B.Jt,B.av3)
w(B.av3,A.aP)})()
A.bqA(b.typeUniverse,JSON.parse('{"EC":{"R":[],"c":[]},"alM":{"R":[],"c":[]},"P8":{"R":[],"c":[]},"zz":{"fF":["be<~>"],"fF.T":"be<~>"},"zA":{"bf":[],"M":[],"c":[]},"anC":{"R":[],"c":[]},"akE":{"R":[],"c":[]},"ajC":{"R":[],"c":[]},"xC":{"bf":[],"M":[],"c":[]},"Tz":{"a1":["xC"]},"amH":{"R":[],"c":[]},"akS":{"bf":[],"M":[],"c":[]},"akR":{"bf":[],"M":[],"c":[]},"akQ":{"bf":[],"M":[],"c":[]},"atI":{"R":[],"c":[]},"amI":{"R":[],"c":[]},"arR":{"R":[],"c":[]},"CE":{"R":[],"c":[]},"aiz":{"R":[],"c":[]},"VL":{"R":[],"c":[]},"a0u":{"R":[],"c":[]},"Co":{"bf":[],"M":[],"c":[]},"a4V":{"bf":[],"M":[],"c":[]},"akD":{"R":[],"c":[]},"ahq":{"bf":[],"M":[],"c":[]},"Ym":{"a1":["Co"]},"ajK":{"R":[],"c":[]},"KX":{"bf":[],"M":[],"c":[]},"TL":{"a1":["KX"]},"Lm":{"bf":[],"M":[],"c":[]},"U4":{"a1":["Lm"]},"aim":{"R":[],"c":[]},"Bv":{"bf":[],"M":[],"c":[]},"a1I":{"R":[],"c":[]},"U7":{"a1":["Bv"]},"By":{"bf":[],"M":[],"c":[]},"a23":{"R":[],"c":[]},"Ui":{"a1":["By"]},"LW":{"bf":[],"M":[],"c":[]},"HQ":{"R":[],"c":[]},"Uk":{"a1":["LW"]},"BG":{"bf":[],"M":[],"c":[]},"a4U":{"R":[],"c":[]},"V_":{"a1":["BG"]},"ME":{"bf":[],"M":[],"c":[]},"akc":{"a1":["ME"]},"aqZ":{"R":[],"c":[]},"alp":{"R":[],"c":[]},"alq":{"R":[],"c":[]},"akb":{"bf":[],"M":[],"c":[]},"art":{"bf":[],"M":[],"c":[]},"akN":{"R":[],"c":[]},"BY":{"M":[],"c":[]},"a54":{"bf":[],"M":[],"c":[]},"W1":{"a1":["BY"]},"BP":{"bf":[],"M":[],"c":[]},"a5n":{"R":[],"c":[]},"Vk":{"a1":["BP"]},"Od":{"bf":[],"M":[],"c":[]},"Iw":{"R":[],"c":[]},"W0":{"a1":["Od"]},"apb":{"R":[],"c":[]},"alH":{"R":[],"c":[]},"wU":{"R":[],"c":[]},"anv":{"R":[],"c":[]},"aru":{"R":[],"c":[]},"arw":{"R":[],"c":[]},"a6Z":{"bf":[],"M":[],"c":[]},"zx":{"bf":[],"M":[],"c":[]},"ane":{"a1":["zx"]},"C1":{"bf":[],"M":[],"c":[]},"a7B":{"R":[],"c":[]},"W9":{"a1":["C1"]},"Ss":{"bf":[],"M":[],"c":[]},"Cd":{"bf":[],"M":[],"c":[]},"BF":{"bf":[],"M":[],"c":[]},"Yo":{"bf":[],"M":[],"c":[]},"Cp":{"bf":[],"M":[],"c":[]},"asv":{"a1":["Ss"]},"an4":{"bf":[],"M":[],"c":[]},"alL":{"R":[],"c":[]},"C0":{"R":[],"c":[]},"apf":{"bf":[],"M":[],"c":[]},"ape":{"R":[],"c":[]},"X0":{"a1":["Cd"]},"ajY":{"bf":[],"M":[],"c":[]},"ajX":{"R":[],"c":[]},"UX":{"a1":["BF"]},"arM":{"a1":["Yo"]},"arL":{"bf":[],"M":[],"c":[]},"arK":{"R":[],"c":[]},"Yn":{"a1":["Cp"]},"akJ":{"bf":[],"M":[],"c":[]},"akI":{"R":[],"c":[]},"tT":{"R":[],"c":[]},"CA":{"bf":[],"M":[],"c":[]},"ae_":{"R":[],"c":[]},"YR":{"a1":["CA"]},"a7y":{"bf":[],"M":[],"c":[]},"FH":{"bf":[],"M":[],"c":[]},"WN":{"a1":["FH"]},"Q2":{"bf":[],"M":[],"c":[]},"WX":{"a1":["Q2"]},"a1N":{"R":[],"c":[]},"a1O":{"R":[],"c":[]},"a4n":{"R":[],"c":[]},"Sk":{"R":[],"c":[]},"ao1":{"wn":[]},"ao6":{"c":[]},"GM":{"M":[],"c":[]},"Yq":{"a1":["GM"]},"ql":{"hM":[],"e3":[]},"Ob":{"wn":[]},"a5r":{"wn":[]},"a5G":{"wn":[]},"w1":{"H":[],"K":[],"aT":[]},"Si":{"aV":[],"c":[]},"asm":{"bW":[],"bM":[],"y":[]},"Sj":{"R":[],"c":[]},"asl":{"fV":["ql"],"bq":[],"c":[],"fV.T":"ql"},"bT6":{"bz":[],"bq":[],"c":[]}}'))
var y={k:'<h2 style="margin-top:14pt">Bilanzwert der Vorr\xe4te</h2>',c:'<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2><p class="matrix-intro">Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskosten-wert eines FIFO-Restlots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.</p>',b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.au
return{u:w("mL"),c:w("be<u<hT>>"),w:w("be<u<a3<f,@>>>"),bj:w("be<u<ko>>"),i:w("be<br<f>>"),cA:w("a0W"),cT:w("at"),O:w("hM"),fl:w("jm<v>"),o:w("a4<f,f>"),cn:w("hN"),cu:w("a4m"),d:w("bT6"),bz:w("lP<b_>"),f0:w("lQ"),Q:w("js"),r:w("dW<f>"),dk:w("bM"),fY:w("S<jj?>"),hf:w("t<@>"),hc:w("B<jm<v>>"),F:w("B<fy>"),G:w("B<fm>"),_:w("B<rb>"),I:w("B<dW<f>>"),B:w("B<v7>"),cV:w("B<u<cZ>>"),t:w("B<a3<f,@>>"),U:w("B<FR<@>>"),aO:w("B<cZ>"),s:w("B<f>"),p:w("B<c>"),ew:w("B<fI>"),R:w("B<ly>"),bs:w("B<Jt>"),eQ:w("B<F>"),V:w("B<H?>"),n:w("bl<Ev>"),aA:w("iy<p6<be<~>>>"),am:w("u<bM>"),d7:w("u<u<cZ>>"),W:w("u<hT>"),D:w("u<a3<f,@>>"),e:w("u<ko>"),j:w("u<@>"),f9:w("l4"),M:w("zz"),K:w("a7D"),J:w("bt<f,f>"),P:w("a3<f,@>"),f:w("a3<@,@>"),m:w("ka"),a:w("bp"),aU:w("C"),bX:w("rU"),Y:w("H"),S:w("w1"),eV:w("cZ"),C:w("br<f>"),Z:w("wl"),N:w("f"),A:w("nu"),de:w("Si"),L:w("ql"),eA:w("wn"),cZ:w("mp"),af:w("bd<fI>"),l:w("c"),k:w("d7"),av:w("qw"),x:w("bF<E?>"),cQ:w("Iq"),dr:w("amx"),q:w("x5"),gN:w("ir<H>"),b:w("bo<E?>"),y:w("A"),gR:w("F"),z:w("@"),v:w("v"),ea:w("uF?"),g:w("u<@>?"),h:w("a3<f,@>?"),X:w("C?"),dE:w("H?"),T:w("f?"),aD:w("ip?"),E:w("c?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_S=new B.xC(null)
D.a_T=new B.a0u(null)
D.a01=new B.KX(null)
D.Bx=new A.bm(C.an,1,C.U,-1)
D.a0t=new A.bm(C.m,1.5,C.U,-1)
D.a0K=new A.at(0,180,0,1/0)
D.mM=new A.at(34,1/0,34,1/0)
D.C0=new B.a5G()
D.a2V=new B.ao1()
D.a35=new B.Lm(null)
D.a3b=new B.a1I(null)
D.add=new A.aF(C.fw,40,C.p,null,null)
D.aHK=new A.ab("Keine Freigabe-Anfragen offen.",null,null,null,null,null,null,null,null,null)
D.aiS=w([D.add,C.M,D.aHK],x.p)
D.a5r=new A.jX(C.K,C.f,C.H,C.k,null,C.bA,null,0,D.aiS,null)
D.aum=new A.aj(C.dd,D.a5r,null)
D.a3e=new A.fv(C.W,null,null,D.aum,null)
D.aI3=new A.ab("Kein Bestand erfasst.",null,null,null,null,null,null,null,null,null)
D.a3f=new A.fv(C.W,null,null,D.aI3,null)
D.aIm=new A.ab("Keine Eintr\xe4ge im Zeitraum.",null,null,null,null,null,null,null,null,null)
D.a3i=new A.fv(C.W,null,null,D.aIm,null)
D.a3q=new B.a23(null)
D.a5t=new B.LW(null)
D.aHl=new A.ab("",null,null,null,null,null,null,null,null,null)
D.kT=new B.fy(D.aHl)
D.aGp=new A.ab("Anlass",null,null,null,null,null,null,null,null,null)
D.a6b=new B.fm(D.aGp,!1)
D.aHn=new A.ab("Betrag",null,null,null,null,null,null,null,null,null)
D.a6c=new B.fm(D.aHn,!0)
D.aHu=new A.ab("Datum",null,null,null,null,null,null,null,null,null)
D.Dh=new B.fm(D.aHu,!1)
D.aHV=new A.ab("km",null,null,null,null,null,null,null,null,null)
D.a6k=new B.fm(D.aHV,!0)
D.a6G=new B.a4U(null)
D.kX=new A.mZ(1,null,null)
D.a6L=new B.a4V(null)
D.a6M=new B.ME(null)
D.aGI=new A.ab("\u2014 kein Produkt \u2014",null,null,null,null,null,null,null,null,null)
D.a6X=new A.dW(null,D.aGI,C.aW,null,x.r)
D.aGF=new A.ab("\u2014 freie Eingabe \u2014",null,null,null,null,null,null,null,null,null)
D.a6Z=new A.dW(null,D.aGF,C.aW,null,x.r)
D.a7z=new A.al(0,0,0,16)
D.a7A=new A.al(0,0,0,2)
D.a7K=new A.al(0,28,0,6)
D.DF=new A.al(0,3,0,3)
D.a7P=new A.al(0,5,0,5)
D.a7S=new A.al(10,5,10,5)
D.a85=new A.al(20,0,20,0)
D.DK=new A.al(20,12,20,0)
D.a8i=new A.al(7,3,7,3)
D.a8l=new B.a54(null)
D.a8y=new A.e8("Betriebliche Fahrten",!1,null)
D.a8r=new A.kR(1,C.dX,D.a8y,null)
D.a8z=new A.e8("Fahrzeugkosten",!1,null)
D.a8A=new A.e8("Freigabe",!1,null)
D.a8M=new A.e8("Abo-Verwaltung",!1,null)
D.a8Y=new B.a5n(null)
D.aH7=new A.ab("Freigaben",null,null,null,null,null,null,null,null,null)
D.a9f=new A.ew(D.aH7,null,null)
D.aI5=new A.ab("K\xfcndigungen",null,null,null,null,null,null,null,null,null)
D.a9h=new A.ew(D.aI5,null,null)
D.aIV=new A.ab("Anlage PKW-Kosten",null,null,null,null,null,null,null,null,null)
D.a9k=new A.ew(D.aIV,null,null)
D.aIw=new A.ab("B2B-Kunden \u2014 sevDesk-Export",null,null,null,null,null,null,null,null,null)
D.a9l=new A.ew(D.aIw,null,null)
D.aGW=new A.ab("Mitarbeiter",null,null,null,null,null,null,null,null,null)
D.a9m=new A.ew(D.aGW,null,null)
D.aI_=new A.ab("Reklamationen",null,null,null,null,null,null,null,null,null)
D.a9r=new A.ew(D.aI_,null,null)
D.aIN=new A.ab("Inventur \u2014 FIFO-Bewegungsreport",null,null,null,null,null,null,null,null,null)
D.a9v=new A.ew(D.aIN,null,null)
D.aGU=new A.ab("Inventur",null,null,null,null,null,null,null,null,null)
D.a9x=new A.ew(D.aGU,null,null)
D.aHF=new A.ab("Anlagen",null,null,null,null,null,null,null,null,null)
D.a9B=new A.ew(D.aHF,null,null)
D.aGh=new A.ab("Dokumente",null,null,null,null,null,null,null,null,null)
D.a9D=new A.ew(D.aGh,null,null)
D.aGc=new A.ab("Telemetrie / IoT",null,null,null,null,null,null,null,null,null)
D.a9E=new A.ew(D.aGc,null,null)
D.aa3=new A.a6(58147,"MaterialIcons",null,!1)
D.aa6=new A.a6(58206,"MaterialIcons",null,!1)
D.aaj=new A.a6(58550,"MaterialIcons",null,!1)
D.aat=new A.a6(58966,"MaterialIcons",null,!1)
D.aay=new A.a6(59084,"MaterialIcons",null,!1)
D.aaN=new A.a6(61358,"MaterialIcons",null,!1)
D.aaV=new A.a6(61584,"MaterialIcons",null,!1)
D.aaY=new A.a6(61682,"MaterialIcons",null,!1)
D.ab4=new A.a6(61838,"MaterialIcons",null,!1)
D.ab7=new A.a6(62003,"MaterialIcons",null,!1)
D.abh=new A.a6(62295,"MaterialIcons",null,!1)
D.abm=new A.a6(62446,"MaterialIcons",null,!1)
D.abB=new A.a6(984578,"MaterialIcons",null,!1)
D.abD=new A.a6(984664,"MaterialIcons",null,!1)
D.abF=new A.a6(984828,"MaterialIcons",null,!1)
D.F8=new A.aF(C.i5,16,C.m,null,null)
D.ac0=new A.aF(C.lg,32,C.j,null,null)
D.ac3=new A.aF(C.aa4,16,null,null,null)
D.Fd=new A.aF(C.ED,null,null,null,null)
D.acd=new A.aF(C.i5,14,C.m,null,null)
D.acg=new A.aF(C.fw,null,C.m,null,null)
D.EG=new A.a6(59030,"MaterialIcons",null,!1)
D.ach=new A.aF(D.EG,null,null,null,null)
D.aac=new A.a6(58442,"MaterialIcons",null,!1)
D.act=new A.aF(D.aac,null,null,null,null)
D.Eq=new A.a6(57415,"MaterialIcons",null,!1)
D.o4=new A.aF(D.Eq,null,null,null,null)
D.li=new A.aF(E.Ew,null,null,null,null)
D.acC=new A.aF(C.ji,16,null,null,null)
D.aas=new A.a6(58950,"MaterialIcons",null,!1)
D.acG=new A.aF(D.aas,18,null,null,null)
D.acH=new A.aF(C.i4,16,null,null,null)
D.Fk=new A.aF(D.Eq,18,null,null,null)
D.aai=new A.a6(58516,"MaterialIcons",null,!1)
D.acP=new A.aF(D.aai,20,null,null,null)
D.acQ=new A.aF(C.lg,null,C.aE,null,null)
D.a9Z=new A.a6(57918,"MaterialIcons",null,!1)
D.Fl=new A.aF(D.a9Z,18,null,null,null)
D.acX=new A.aF(C.y5,null,C.p,null,null)
D.aa_=new A.a6(57919,"MaterialIcons",null,!1)
D.ad3=new A.aF(D.aa_,20,null,null,null)
D.ad4=new A.aF(C.fw,20,null,null,null)
D.aaH=new A.a6(61280,"MaterialIcons",null,!1)
D.ad8=new A.aF(D.aaH,null,null,null,null)
D.adb=new A.aF(D.EG,20,null,null,null)
D.adf=new A.aF(C.i5,null,C.an,null,null)
D.adg=new A.aF(C.le,18,C.m,null,null)
D.aah=new A.a6(58514,"MaterialIcons",null,!1)
D.adj=new A.aF(D.aah,null,null,null,null)
D.ads=new A.aF(C.lh,16,C.p,null,null)
D.abk=new A.a6(62403,"MaterialIcons",null,!1)
D.adv=new A.aF(D.abk,18,null,null,null)
D.adw=new A.aF(C.le,null,null,null,null)
D.ae4=new A.c_(null,null,null,"Provider",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae5=new A.c_(null,null,null,"Rechnungsdatum",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae8=new A.c_(null,null,null,"Entnommener Betrag brutto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aea=new A.c_(null,null,null,"Name (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeb=new A.c_(null,null,null,"Kosten (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aec=new A.c_(null,null,null,"Wechselgeld (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aed=new A.c_(null,null,null,"Produktbezeichnung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fr=new A.c_(null,null,null,"Betrag brutto in Euro",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fs=new A.c_(null,null,null,"Bezeichnung (freiwillig)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Ft=new A.c_(null,null,null,"Kostenart",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aee=new A.c_(null,null,null,"Ma\xdfnahme",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeg=new A.c_(null,null,null,"Adapter",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeh=new A.c_(null,null,null,"Bemerkung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aej=new A.c_(null,null,null,"Korrekturma\xdfnahme (bei \xdcberschreitung)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aek=new A.c_(null,null,null,"HMAC-Secret",null,null,null,"Wird zur Signaturpr\xfcfung genutzt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fu=new A.c_(null,null,null,"Kilometer (Hin- und R\xfcckweg)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ael=new A.c_(null,null,null,"Slot-Code (z. B. A3)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aem=new A.c_(null,null,null,"Antwort an den Kunden",null,null,null,"Wird dem Kunden im Verlauf angezeigt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.uu,!0,null,null,null,null)
D.aeo=new A.c_(null,null,null,"Automat",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aep=new A.c_(null,null,null,"Rechnungsnummer",null,null,null,"Nummer der Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeq=new A.c_(null,null,null,"Titel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aes=new A.c_(null,null,null,"Eingelegte Menge",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aew=new A.c_(null,null,null,"MHD des Lots (empfohlen)",null,null,null,"Wird f\xfcr die MHD-Bewertung im Inventurreport genutzt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aex=new A.c_(null,null,null,"Reinigungsmittel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fv=new A.c_(null,null,null,"Fahrzeug",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aey=new A.c_(null,null,null,"Anzeigename",null,null,null,'z. B. \u201eCleverMetrics-Prod"',null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aez=new A.c_(null,null,null,"Fehlerbeschreibung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeA=new A.c_(null,null,null,"Ist-Temperatur (\xb0C)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\xb0C",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fw=new A.c_(null,null,null,"Produkt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeB=new A.c_(null,null,null,"Automat w\xe4hlen",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeF=new A.c_(null,null,null,"VK-Preis netto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeH=new A.c_(null,null,null,"Kilometerstand am 01.01.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fx=new A.c_(null,null,null,"Anlass der Fahrt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeI=new A.c_(null,null,null,"Menge (St\xfcck)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeJ=new A.c_(null,null,null,null,null,null,null,null,null,null,"Kommentar (Pflicht)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeK=new A.c_(null,null,null,"Entnommener Verderb",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeL=new A.c_(null,null,null,"Grund",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeM=new A.c_(null,null,null,"Externe Ger\xe4t-ID / Serien-Nummer",null,null,null,"Wie beim Provider hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeN=new A.c_(null,null,null,"Produkt (optional, koppelt Inventur)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeO=new A.c_(null,null,null,"EK-Preis netto \u20ac/St\xfcck",null,null,null,"Aus Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeP=new A.c_(null,null,null,"Firmware (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeQ=new A.c_(null,null,null,"Notizen (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeR=new A.c_(null,null,null,"Kilometerstand am 31.12.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeT=new A.c_(null,null,null,"E-Mail",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeU=new A.c_(null,null,null,"Ordner",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeV=new A.c_(null,null,null,"Kapazit\xe4t",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeW=new A.c_(null,null,null,"Art",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeX=new A.c_(null,null,null,"Differenz (+ auff\xfcllen / \u2212 abziehen)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af_=new A.c_(null,null,null,"Erledigt durch (Name/Firma)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.afk=new B.Ob(1)
D.afl=new B.Ob(null)
D.afm=new B.Od(null)
D.afn=new B.a6Z(null)
D.yv=new A.rI(null,null,null,null,null,null,null,null)
D.apB=new A.bt("tanken","Tanken",x.J)
D.apE=new A.bt("versicherung","Versicherung",x.J)
D.apD=new A.bt("kfz_steuer","Kfz-Steuer",x.J)
D.apC=new A.bt("waesche","Autow\xe4sche",x.J)
D.apz=new A.bt("reparatur","Reparaturen",x.J)
D.apy=new A.bt("leasing","Leasingraten",x.J)
D.apx=new A.bt("abschreibung","Abschreibung",x.J)
D.apA=new A.bt("sonstiges","Sonstiges",x.J)
D.ahE=w([D.apB,D.apE,D.apD,D.apC,D.apz,D.apy,D.apx,D.apA],A.au("B<bt<f,f>>"))
D.aGs=new A.ab("Rechnung",null,null,null,null,null,null,null,null,null)
D.Dg=new B.fm(D.aGs,!1)
D.aGL=new A.ab("Rg-Datum",null,null,null,null,null,null,null,null,null)
D.a6e=new B.fm(D.aGL,!1)
D.aIA=new A.ab("Rest",null,null,null,null,null,null,null,null,null)
D.a6g=new B.fm(D.aIA,!0)
D.aIe=new A.ab("EK/Stk.",null,null,null,null,null,null,null,null,null)
D.De=new B.fm(D.aIe,!0)
D.aHD=new A.ab("MHD",null,null,null,null,null,null,null,null,null)
D.Df=new B.fm(D.aHD,!1)
D.aHb=new A.ab("Restlaufzeit",null,null,null,null,null,null,null,null,null)
D.a6h=new B.fm(D.aHb,!0)
D.aIG=new A.ab("Abschlag %",null,null,null,null,null,null,null,null,null)
D.a67=new B.fm(D.aIG,!0)
D.aGX=new A.ab("AK-Wert",null,null,null,null,null,null,null,null,null)
D.a6m=new B.fm(D.aGX,!0)
D.aIH=new A.ab("Abschlag \u20ac",null,null,null,null,null,null,null,null,null)
D.a68=new B.fm(D.aIH,!0)
D.aId=new A.ab("Bilanz",null,null,null,null,null,null,null,null,null)
D.a66=new B.fm(D.aId,!0)
D.ajf=w([D.Dg,D.a6e,D.a6g,D.De,D.Df,D.a6h,D.a67,D.a6m,D.a68,D.a66],x.G)
D.aGE=new A.ab("Vorgang",null,null,null,null,null,null,null,null,null)
D.a6i=new B.fm(D.aGE,!1)
D.aGO=new A.ab("Menge",null,null,null,null,null,null,null,null,null)
D.a69=new B.fm(D.aGO,!0)
D.aHM=new A.ab("Bemerkung",null,null,null,null,null,null,null,null,null)
D.a6a=new B.fm(D.aHM,!1)
D.aju=w([D.Dh,D.a6i,D.a69,D.De,D.Dg,D.Df,D.a6a],x.G)
D.aGR=new A.ab("Au\xdfenreinigung",null,null,null,null,null,null,null,null,null)
D.a6R=new A.dW("exterior",D.aGR,C.aW,null,x.r)
D.aGC=new A.ab("Innenreinigung",null,null,null,null,null,null,null,null,null)
D.a6Y=new A.dW("interior",D.aGC,C.aW,null,x.r)
D.aGK=new A.ab("Vollreinigung + Desinfektion",null,null,null,null,null,null,null,null,null)
D.a6U=new A.dW("full",D.aGK,C.aW,null,x.r)
D.ajY=w([D.a6R,D.a6Y,D.a6U],x.I)
D.aGD=new A.ab("MHD \xfcberschritten",null,null,null,null,null,null,null,null,null)
D.a6V=new A.dW("mhd",D.aGD,C.aW,null,x.r)
D.aGZ=new A.ab("Besch\xe4digung",null,null,null,null,null,null,null,null,null)
D.a71=new A.dW("damage",D.aGZ,C.aW,null,x.r)
D.aHY=new A.ab("Hygienemangel",null,null,null,null,null,null,null,null,null)
D.a7_=new A.dW("hygiene",D.aHY,C.aW,null,x.r)
D.aH9=new A.ab("Sonstiges",null,null,null,null,null,null,null,null,null)
D.a72=new A.dW("other",D.aH9,C.aW,null,x.r)
D.akd=w([D.a6V,D.a71,D.a7_,D.a72],x.I)
D.ame=w(["> 4 Wochen","0 % Abschlag","0 %","normale Verwertbarkeit"],x.s)
D.anE=w(["2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit, ggf. erh\xf6hte Preisaktionen"],x.s)
D.alF=w(["1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck"],x.s)
D.aiH=w(["< 1 Woche","50\u201380 %","65 %","Risiko des Nichtverkaufs deutlich erh\xf6ht"],x.s)
D.anx=w(["MHD \xfcberschritten","100 % Abschreibung","100 %","keine wirtschaftliche Verwertbarkeit"],x.s)
D.akF=w([D.ame,D.anE,D.alF,D.aiH,D.anx],A.au("B<u<f>>"))
D.al1=w(["Live","Provider","Ger\xe4te","Slots","Events"],x.s)
D.aHQ=new A.ab("Generic (kanonisch)",null,null,null,null,null,null,null,null,null)
D.a6S=new A.dW("generic",D.aHQ,C.aW,null,x.r)
D.aIi=new A.ab("CleverMetrics",null,null,null,null,null,null,null,null,null)
D.a70=new A.dW("clevermetrics",D.aIi,C.aW,null,x.r)
D.aIh=new A.ab("Nayax",null,null,null,null,null,null,null,null,null)
D.a6T=new A.dW("nayax",D.aIh,C.aW,null,x.r)
D.aGw=new A.ab("Custom",null,null,null,null,null,null,null,null,null)
D.a6W=new A.dW("custom",D.aGw,C.aW,null,x.r)
D.all=w([D.a6S,D.a70,D.a6T,D.a6W],x.I)
D.alN=w([],A.au("B<bM>"))
D.aQM=w([],A.au("B<mp>"))
D.alM=w([],x.R)
D.alL=w([],x.V)
D.ann=w(["system_admin","shareholder","employee"],x.s)
D.aOS=new B.wX("> 4 Wochen","0 %","0 %","normale Verwertbarkeit")
D.aOU=new B.wX("2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit")
D.aOR=new B.wX("1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck")
D.aOQ=new B.wX("< 1 Woche","50\u201380 %","65 %","Risiko Nichtverkauf deutlich erh\xf6ht")
D.aOT=new B.wX("MHD \xfcberschritten","100 %","100 %","keine wirtschaftl. Verwertbarkeit")
D.ans=w([D.aOS,D.aOU,D.aOR,D.aOQ,D.aOT],A.au("B<wX>"))
D.aHX=new A.ab("Rest-MHD am Stichtag",null,null,null,null,null,null,null,null,null)
D.a6d=new B.fm(D.aHX,!1)
D.aIy=new A.ab("Typischer Ansatz",null,null,null,null,null,null,null,null,null)
D.a6f=new B.fm(D.aIy,!1)
D.aHS=new A.ab("B\xf6rdesnack24 wendet an",null,null,null,null,null,null,null,null,null)
D.a6j=new B.fm(D.aHS,!0)
D.aGY=new A.ab("Begr\xfcndung",null,null,null,null,null,null,null,null,null)
D.a6l=new B.fm(D.aGY,!1)
D.anN=w([D.a6d,D.a6f,D.a6j,D.a6l],x.G)
D.anR=w(["pdf","docx","doc","jpg","jpeg","png"],x.s)
D.apw=new B.a7B(null)
D.atj={tanken:0,versicherung:1,kfz_steuer:2,waesche:3,reparatur:4,leasing:5,abschreibung:6,sonstiges:7}
D.lV=new A.a4(D.atj,["Tanken","Versicherung","Kfz-Steuer","Autow\xe4sche","Reparaturen","Leasingraten","Abschreibung","Sonstiges"],x.o)
D.at8={exterior:0,interior:1,full:2}
D.apQ=new A.a4(D.at8,["Au\xdfenreinigung","Innenreinigung","Vollreinigung + Desinfektion"],x.o)
D.atl={mhd:0,damage:1,hygiene:2,other:3}
D.apR=new A.a4(D.atl,["MHD \xfcberschritten","Besch\xe4digung","Hygienemangel","Sonstiges"],x.o)
D.asZ={temperature:0,cleaning:1,disposal:2,filling:3,maintenance:4,cash:5,training:6}
D.apS=new A.a4(D.asZ,["haccp_temperature","haccp_cleaning","haccp_disposal","haccp_filling","haccp_maintenance","haccp_cash","haccp_training"],x.o)
D.atg={"inventory.view":0,"inventory.edit":1,"haccp.fill":2,"haccp.temperature":3,"haccp.cleaning":4,"haccp.disposal":5,"haccp.maintenance":6,"cash.collect":7,"documents.view":8}
D.Su=new A.a4(D.atg,["Inventur ansehen","Inventur bearbeiten","Bef\xfcllung","Temperatur","Reinigung","Vernichtung","Wartung","Geldentnahme","Dokumente ansehen"],x.o)
D.a43=new A.E(1,1,0.9529411764705882,0.8784313725490196,C.i)
D.a4O=new A.E(1,1,0.8784313725490196,0.6980392156862745,C.i)
D.a5o=new A.E(1,1,0.8,0.5019607843137255,C.i)
D.a3E=new A.E(1,1,0.7176470588235294,0.30196078431372547,C.i)
D.a4i=new A.E(1,1,0.6549019607843137,0.14901960784313725,C.i)
D.a4F=new A.E(1,1,0.596078431372549,0,C.i)
D.a4Y=new A.E(1,0.984313725490196,0.5490196078431373,0,C.i)
D.a4c=new A.E(1,0.9607843137254902,0.48627450980392156,0,C.i)
D.a4W=new A.E(1,0.9372549019607843,0.4235294117647059,0,C.i)
D.a3R=new A.E(1,0.9019607843137255,0.3176470588235294,0,C.i)
D.asd=new A.dg([50,D.a43,100,D.a4O,200,D.a5o,300,D.a3E,400,D.a4i,500,D.a4F,600,D.a4Y,700,D.a4c,800,D.a4W,900,D.a3R],A.au("dg<v,E>"))
D.asp=new A.rN(D.asd,1,1,0.596078431372549,0,C.i)
D.a7M=new A.al(0,2,6,0)
D.aal=new A.a6(58612,"MaterialIcons",null,!1)
D.ad6=new A.aF(D.aal,16,C.m,null,null)
D.aui=new A.aj(D.a7M,D.ad6,null)
D.aul=new A.aj(C.ns,C.lr,null)
D.X9=new B.ke(0,"eq")
D.avi=new B.ke(1,"neq")
D.avj=new B.ke(10,"match")
D.avk=new B.ke(11,"imatch")
D.avl=new B.ke(12,"isDistinct")
D.avm=new B.ke(2,"lt")
D.avn=new B.ke(3,"lte")
D.avo=new B.ke(4,"gt")
D.avp=new B.ke(5,"gte")
D.Xa=new B.ke(6,"inFilter")
D.avq=new B.ke(7,"like")
D.avr=new B.ke(8,"ilike")
D.avs=new B.ke(9,"isFilter")
D.aaq=new A.a6(58871,"MaterialIcons",null,!1)
D.acR=new A.aF(D.aaq,18,C.j,null,null)
D.a8H=new A.e8("Bilanzwert der Vorr\xe4te",!1,null)
D.amZ=w([D.acR,C.aZ,D.a8H],x.p)
D.axs=new A.iC(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.amZ,null)
D.ada=new A.aF(C.o2,18,C.j,null,null)
D.a8T=new A.e8("Freigabe / Unterschriften",!1,null)
D.aim=w([D.ada,C.aZ,D.a8T],x.p)
D.axt=new A.iC(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.aim,null)
D.ado=new A.aF(C.fw,18,C.j,null,null)
D.a8R=new A.e8("Bewertungsansatz MHD-Abschlag",!1,null)
D.aig=w([D.ado,C.aZ,D.a8R],x.p)
D.axx=new A.iC(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.aig,null)
D.axL=new A.fj("Steuern","Anlagen zum Jahresabschluss",null,null)
D.axT=new A.fj("Verwaltung","Betriebsprotokolle",null,null)
D.aA4=new A.cy(16,16,C.Co,null)
D.aAb=new A.cy(null,48,null,null)
D.aAe=new A.oN(0,"action")
D.aHm=new A.ab("F\xfcr dieses Dokument ist noch keine Version hochgeladen.",null,null,null,null,null,null,null,null,null)
D.aAp=new A.dG(D.aHm,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aI6=new A.ab("Signiertes PDF wird ge\xf6ffnet \u2026",null,null,null,null,null,null,null,null,null)
D.aAu=new A.dG(D.aI6,null,null,null,null,null,null,null,null,null,null,null,null,C.kY,!1,null,null,null,C.n,null)
D.aGt=new A.ab("Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aAw=new A.dG(D.aGt,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aGy=new A.ab("Bitte einen Betrag \xfcber null angeben.",null,null,null,null,null,null,null,null,null)
D.Z4=new A.dG(D.aGy,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aIj=new A.ab("Einladung versendet.",null,null,null,null,null,null,null,null,null)
D.aAz=new A.dG(D.aIj,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aGG=new A.ab("Anlass und eine Strecke \xfcber null sind n\xf6tig.",null,null,null,null,null,null,null,null,null)
D.Z5=new A.dG(D.aGG,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHB=new A.ab("Eintrag gespeichert.",null,null,null,null,null,null,null,null,null)
D.aAB=new A.dG(D.aHB,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aIv=new A.ab("Speichern fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null,null,null)
D.aAC=new A.dG(D.aIv,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHZ=new A.ab("Format nicht direkt anzeigbar \u2014 Datei wurde heruntergeladen. Tipp: k\xfcnftige Versionen als PDF hochladen f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null,null,null)
D.a7k=new A.bH(5e6)
D.aAE=new A.dG(D.aHZ,null,null,null,null,null,null,null,null,null,null,null,null,D.a7k,!1,null,null,null,C.n,null)
D.aI0=new A.ab('Keine Mitarbeiter angelegt \u2014 zuerst \xfcber \u201eMitarbeiter" einladen.',null,null,null,null,null,null,null,null,null)
D.aAI=new A.dG(D.aI0,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aIL=new A.ab("Der Stand am 31.12. kann nicht kleiner sein als der am 01.01.",null,null,null,null,null,null,null,null,null)
D.aAK=new A.dG(D.aIL,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aAY=new A.j7("l\xe4uft bald",C.kd,null,null)
D.aAZ=new A.j7("g\xfcltig",C.fG,null,null)
D.aB_=new A.j7("abgelaufen",C.ml,null,null)
D.aB0=new A.j7("Vorlage",C.kd,null,null)
D.aBl=new B.wm(0,"top")
D.Zi=new B.wm(1,"middle")
D.aBm=new B.wm(2,"bottom")
D.aBn=new B.wm(3,"baseline")
D.Zj=new B.wm(4,"fill")
D.aBo=new B.wm(5,"intrinsicHeight")
D.aBp=new B.Ss(null)
D.aBq=new B.ae_(null)
D.aBK=new A.iG(2,!0,!1)
D.aBL=new A.iG(2,!0,!0)
D.aDw=new A.P(!0,C.m,null,null,null,null,11,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBZ=new A.P(!0,C.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGa=new A.ab("Nachweis",null,D.aBZ,null,null,null,null,null,null,null)
D.aGe=new A.ab("MHD gepr\xfcft",null,null,null,null,null,null,null,null,null)
D.aF_=new A.P(!0,C.an,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ZA=new A.ab("Streichen",null,D.aF_,null,null,null,null,null,null,null)
D.aGj=new A.ab("In Bearbeitung",null,null,null,null,null,null,null,null,null)
D.aGm=new A.ab("setzen",null,null,null,null,null,null,null,null,null)
D.aGu=new A.ab("Provider anlegen",null,null,null,null,null,null,null,null,null)
D.aGA=new A.ab("Bild hochladen",null,null,null,null,null,null,null,null,null)
D.aGP=new A.ab("PDF konnte nicht ge\xf6ffnet werden.",null,null,null,null,null,null,null,null,null)
D.aGQ=new A.ab("Betriebliche Fahrt",null,null,null,null,null,null,null,null,null)
D.Az=new A.ab("Einladen",null,null,null,null,null,null,null,null,null)
D.aH1=new A.ab("Als bearbeitet markieren",null,null,null,null,null,null,null,null,null)
D.aH2=new A.ab("Fahrt",null,null,null,null,null,null,null,null,null)
D.aH3=new A.ab("CSV herunterladen (b2b_customers.csv)",null,null,null,null,null,null,null,null,null)
D.aH5=new A.ab("Ablehnung begr\xfcnden",null,null,null,null,null,null,null,null,null)
D.aH6=new A.ab("Freigeben",null,null,null,null,null,null,null,null,null)
D.aHa=new A.ab("Datens\xe4tze laden",null,null,null,null,null,null,null,null,null)
D.aHd=new A.ab("Fahrt korrigieren",null,null,null,null,null,null,null,null,null)
D.aHe=new A.ab("Kosten erfassen",null,null,null,null,null,null,null,null,null)
D.ZC=new A.ab("Anlegen",null,null,null,null,null,null,null,null,null)
D.aHE=new A.ab("Aus DocuSign holen",null,null,null,null,null,null,null,null,null)
D.aHW=new A.ab("\xe4ndern",null,null,null,null,null,null,null,null,null)
D.aIa=new A.ab("Buchen",null,null,null,null,null,null,null,null,null)
D.aIf=new A.ab("Bild nicht geladen",null,null,null,null,null,null,null,null,null)
D.aIg=new A.ab("Kilometerst\xe4nde",null,null,null,null,null,null,null,null,null)
D.aIn=new A.ab("Mitarbeiter zur Signatur einladen",null,null,null,null,null,null,null,null,null)
D.aIs=new A.ab("Neues Dokument",null,null,null,null,null,null,null,null,null)
D.aIt=new A.ab("Zeitraum",null,null,null,null,null,null,null,null,null)
D.aIu=new A.ab("Kostenposition korrigieren",null,null,null,null,null,null,null,null,null)
D.ZF=new A.ab("Erledigt",null,null,null,null,null,null,null,null,null)
D.aIz=new A.ab("Registrieren",null,null,null,null,null,null,null,null,null)
D.ZG=new A.ab("Neu",null,null,null,null,null,null,null,null,null)
D.ZH=new A.ab("Hinzuf\xfcgen",null,null,null,null,null,null,null,null,null)
D.aIO=new A.ab("Slot anlegen / bearbeiten",null,null,null,null,null,null,null,null,null)
D.aIR=new A.ab("Ger\xe4t registrieren",null,null,null,null,null,null,null,null,null)
D.aIW=new A.ab("Inventur berechnen",null,null,null,null,null,null,null,null,null)
D.aMP=new B.Bv(null)
D.hC=new B.b6Y(0,"flat")
D.aMZ=new B.By(null)
D.aN7=new B.ajC(null)
D.aNf=new B.BF(null)
D.aNg=new B.ajY(null)
D.aNl=new B.BG(null)
D.aa1=new A.a6(58090,"MaterialIcons",null,!1)
D.aNv=new B.tT(D.aa1,"Automat w\xe4hlen, um die Slot-Belegung zu bearbeiten.",null)
D.aaW=new A.a6(61653,"MaterialIcons",null,!1)
D.aNw=new B.tT(D.aaW,"F\xfcr diesen Automaten sind noch keine Slots konfiguriert.",null)
D.aaO=new A.a6(61364,"MaterialIcons",null,!1)
D.aNx=new B.tT(D.aaO,"Noch kein IoT-Ger\xe4t verkn\xfcpft. Registriere das Gateway eines Automaten mit seiner externen Serien-Nummer beim jeweiligen Provider.",null)
D.a9Q=new A.a6(57630,"MaterialIcons",null,!1)
D.aNy=new B.tT(D.a9Q,'Noch kein Telemetrie-Provider registriert. Lege einen an (z. B. \u201eCleverMetrics-Prod") und trage seinen Webhook-Endpoint bei uns hinterlegten HMAC-Secret ein.',null)
D.aap=new A.a6(58743,"MaterialIcons",null,!1)
D.aNz=new B.tT(D.aap,"Noch keine Telemetrie-Daten empfangen. Automat mit IoT-Modul verkn\xfcpfen und Webhook des Anbieters auf /iot-webhook zeigen lassen.",null)
D.aNA=new B.akD(null)
D.aa2=new A.a6(58134,"MaterialIcons",null,!1)
D.aNB=new B.tT(D.aa2,"Noch keine Telemetrie-Events empfangen.",null)
D.aNC=new B.akJ(null)
D.aO8=new B.BP(null)
D.aOr=new B.BY(null)
D.a_k=new B.Iw(null)
D.aOI=new B.an4(null)
D.aOJ=new B.C1(null)
D.aOV=new B.anv(null)
D.aPh=new B.fI("Zu signieren","Belehrungen & Nachweise",C.o2,C.Th,!0,null,null,null,null)
D.aPo=new B.ao6(null)
D.aPz=new B.Cd(null)
D.aPA=new B.apf(null)
D.aPW=new B.Co(null)
D.aPX=new B.Yo(null)
D.aQ5=new B.CA(null)})();(function staticFields(){$.bJw=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ch8","bDC",()=>A.id(new B.bw0(),x.Z))
w($,"cfU","bwI",()=>A.Nv(new B.btB(),x.C))
w($,"ch_","bDA",()=>A.Nv(new B.bvm(),x.D))
w($,"cgp","bwP",()=>C.aM.yJ(0,new B.buv(),x.e,x.N))
w($,"ch0","awj",()=>C.aM.yJ(0,new B.bvp(),x.D,A.au("Ar")))
w($,"cgr","bwQ",()=>A.b0_(B.c7n(),x.M,A.au("be<~>")))
w($,"cdz","bww",()=>A.id(new B.brF(),x.u))
w($,"cdy","bwv",()=>C.aM.$1$1(new B.brE(),x.D))
w($,"cdP","K9",()=>C.aM.$1$1(new B.bs2(),x.D))
w($,"ce_","bwx",()=>C.aM.$1$1(new B.bsf(),x.D))
w($,"cf1","bD3",()=>C.aM.yJ(0,new B.bt4(),x.D,x.N))
w($,"ceR","bD2",()=>C.aM.$1$1(new B.bsU(),x.D))
w($,"ce5","bCQ",()=>C.aM.$1$1(new B.bsm(),x.D))
w($,"ceS","bwC",()=>C.aM.$1$1(new B.bsV(),x.D))
w($,"cdO","bCN",()=>C.aM.$1$1(new B.bs0(),x.D))
w($,"cdS","bCO",()=>C.aM.$1$1(new B.bs7(),x.D))
w($,"c9E","bNf",()=>A.c_r())})()};
(a=>{a["qx0rvdNUojtiDYc+X9DZxae8bl0="]=a.current})($__dart_deferred_initializers__);