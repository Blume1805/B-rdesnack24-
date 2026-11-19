((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,E,B={wm:function wm(d){this.a=d},bwh:function bwh(){},v8:function v8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},EF:function EF(d,e,f){this.c=d
this.d=e
this.a=f},alU:function alU(d,e){this.c=d
this.a=e},
bWO(d,e,f,g,h,i,j,k){return new B.Pb(f,j,e,k,d,i,g,h,null)},
Pb:function Pb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
btP:function btP(){},
bWq(d){return new B.zB(d,new A.iy(x.aA),C.dM)},
bvB:function bvB(){},
buJ:function buJ(){},
At:function At(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bvE:function bvE(){},
zB:function zB(d,e,f){this.r=d
this.a=e
this.f=f},
aLQ:function aLQ(d,e,f){this.a=d
this.b=e
this.c=f},
aLR:function aLR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLS:function aLS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bHd(){return new B.zC(null)},
zC:function zC(d){this.a=d},
aLX:function aLX(){},
aLW:function aLW(){},
aLV:function aLV(d){this.a=d},
aLU:function aLU(){},
anK:function anK(d,e){this.c=d
this.a=e},
bi8:function bi8(d){this.a=d},
bi7:function bi7(d,e){this.a=d
this.b=e},
bi6:function bi6(d){this.a=d},
akM:function akM(d){this.a=d},
fJ:function fJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ajK:function ajK(d){this.a=d},
bBZ(a8,a9,b0,b1,b2,b3){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$bBZ=A.m(function(b4,b5){if(b4===1)return A.n(b5,v)
for(;;)switch(w){case 0:a5=a9.h(0,"jahr")
a6=x.g
a7=a6.a(a9.h(0,"fahrzeuge"))
if(a7==null)a7=C.bo
u=x.P
t=J.cG(a7,u)
a7=a6.a(a9.h(0,"fahrten"))
s=J.cG(a7==null?C.bo:a7,u)
r=B.JR(a9.h(0,"nutzungseinlage"))
q=C.d.a0(B.JR(a9.h(0,"fahrten_ohne_satz")))
p=a8!=null&&a8.length!==0
a7=A.i(a5)
o=A.i(a5)
n=B.bAY(b0)
m=B.bAY(b2)
l=B.bAY(b3)
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
for(h=0;h<8;++h){g=D.ahN[h]
m=A.ay(g.b,"&","&amp;")
m=A.ay(m,"<","&lt;")
m=A.ay(m,">","&gt;")
a7+='<tr><td class="l">'+A.ay(m,'"',"&quot;")+"</td>"
for(m=new A.aK(t,t.gp(0),n);m.t();){l=m.d
l=a6.a(J.a_(l==null?o.a(l):l,"kosten"))
f=J.cG(l==null?C.bo:l,u)
e=new A.bd(f,new B.bvm(g),f.$ti.i("bd<ag.E>")).fn(0,0,new B.bvn())
a7+='<td class="r">'+(e===0?"\u2014":$.d3().am(e))+"</td>"}a7+="</tr>"}a6=a7+'<tr class="summe"><td class="l">Gesamtkosten (brutto)</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();a6=u){u=a7.d
u=B.JR(J.a_(u==null?o.a(u):u,"gesamtkosten"))
u=a6+('<td class="r">'+$.d3().am(u)+"</td>")}a6+='</tr><tr><td class="l">Kilometerstand 01.01.</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bsM(J.a_(u==null?o.a(u):u,"km_stand_anfang"))+"</td>"}a6+='</tr><tr><td class="l">Kilometerstand 31.12.</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bsM(J.a_(u==null?o.a(u):u,"km_stand_ende"))+"</td>"}a6+='</tr><tr><td class="l">Gefahrene Kilometer</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bsM(J.a_(u==null?o.a(u):u,"km_gefahren"))+"</td>"}a6+='</tr><tr class="summe"><td class="l">Kosten je Kilometer</td>'
for(a7=new A.aK(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bLK(J.a_(u==null?o.a(u):u,"satz_je_km"))+"</td>"}a7=t.a
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
a6=a6+"<tr>"+('<td class="l">'+i+"</td>")+('<td class="l">'+A.ay(a0,'"',"&quot;")+"</td>")+('<td class="r">'+B.bsM(j.h(k,"kilometer"))+"</td>")
for(i=new A.aK(t,t.gp(0),n);i.t();){a0=i.d
a6+='<td class="r">'+(J.d(J.a_(a0==null?o.a(a0):a0,"id"),j.h(k,"pkw_id"))?B.bLK(j.h(k,"satz_je_km")):"")+"</td>"}k=j.h(k,"betrag")
if(k==null)k="\u2014"
else{k=B.JR(k)
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
a4=p?B.c2d(a8,a2):null
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
a6=(self.URL||self.webkitURL).createObjectURL(B.bxB([a6.charCodeAt(0)==0?a6:a6],"text/html"))
a6.toString
a7=window
a7.toString
C.a_6.ahO(a7,a6,"_blank")
return A.o(null,v)}})
return A.p($async$bBZ,v)},
c2d(d,e){var w,v,u,t,s
if(d==null)return null
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.G)(d),++v){u=d[v]
t=u.h(0,"full_name")
if(A.i(t==null?"":t)===e){t=u.h(0,"signature_url")
s=A.i(t==null?"":t)
if(s.length!==0)return s}}return null},
JR(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fX(J.am(d))
return w==null?0:w},
bsM(d){var w,v,u
if(d==null)return"\u2014"
w=B.JR(d)
if(w===C.d.qU(w))v=C.e.j(C.d.aP(w))
else{u=C.d.ae(w,1)
v=A.ay(u,".",",")}return v+" km"},
bLK(d){var w
if(d==null)return"\u2014"
w=C.d.ae(B.JR(d),4)
return A.ay(w,".",",")+" \u20ac"},
bAY(d){var w=A.ay(d,"&","&amp;")
w=A.ay(w,"<","&lt;")
w=A.ay(w,">","&gt;")
return A.ay(w,'"',"&quot;")},
bvm:function bvm(d){this.a=d},
bvn:function bvn(){},
uk(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fX(J.am(d))
return w==null?0:w},
c4z(d){var w
if(d==null)w="\u2014"
else{w=C.d.ae(B.uk(d),4)
w=A.ay(w,".",",")+" \u20ac"}return w},
bsN(d){var w,v,u
if(d==null)return"\u2014"
w=B.uk(d)
if(w===C.d.qU(w))v=C.e.j(C.d.aP(w))
else{u=C.d.ae(w,1)
v=A.ay(u,".",",")}return v+" km"},
btt(d){return J.d(d==null?null:d.h(0,"gesperrt"),!0)},
avH(d,e){var w=null,v=J.am(e),u=C.c.n(v,"freigegeben und unterschrieben"),t=d.O(x.q).f,s=A.k(u?"Diese Anlage ist freigegeben und unterschrieben. Korrekturen sind nicht mehr m\xf6glich.":"Speichern fehlgeschlagen: "+v,w,w,w,w,w,w,w)
t.aW(A.c5(w,w,w,w,w,C.n,w,s,w,A.e6(0,0,0,u?6:4),w,w,w,w,w,w,w,w,w,w))},
xE:function xE(d){this.a=d},
TD:function TD(d){var _=this
_.w=$
_.x=null
_.y=d
_.z=!1
_.Q=null
_.d=$
_.c=_.a=null},
b46:function b46(d,e){this.a=d
this.b=e},
b47:function b47(d){this.a=d},
b48:function b48(d){this.a=d},
b42:function b42(d){this.a=d},
b45:function b45(d){this.a=d},
b43:function b43(d){this.a=d},
b44:function b44(d){this.a=d},
amP:function amP(d,e,f){this.c=d
this.d=e
this.a=f},
bgj:function bgj(d,e){this.a=d
this.b=e},
al_:function al_(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
akZ:function akZ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
bcs:function bcs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bct:function bct(d,e,f){this.a=d
this.b=e
this.c=f},
bcu:function bcu(d,e,f){this.a=d
this.b=e
this.c=f},
bcl:function bcl(d,e,f){this.a=d
this.b=e
this.c=f},
bck:function bck(d,e,f){this.a=d
this.b=e
this.c=f},
bcg:function bcg(d,e){this.a=d
this.b=e},
bcf:function bcf(d,e){this.a=d
this.b=e},
bch:function bch(d){this.a=d},
bci:function bci(d){this.a=d},
bcj:function bcj(d){this.a=d},
bce:function bce(d,e,f){this.a=d
this.b=e
this.c=f},
bcc:function bcc(d){this.a=d},
bcd:function bcd(d){this.a=d},
bcr:function bcr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcq:function bcq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcn:function bcn(d,e){this.a=d
this.b=e},
bcm:function bcm(d,e){this.a=d
this.b=e},
bco:function bco(d){this.a=d},
bcp:function bcp(d){this.a=d},
akY:function akY(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
bca:function bca(d,e,f){this.a=d
this.b=e
this.c=f},
bcb:function bcb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc1:function bc1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc0:function bc0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbW:function bbW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbV:function bbV(d,e){this.a=d
this.b=e},
bbX:function bbX(d,e){this.a=d
this.b=e},
bbU:function bbU(d,e){this.a=d
this.b=e},
bbY:function bbY(d){this.a=d},
bbZ:function bbZ(d){this.a=d},
bc_:function bc_(d){this.a=d},
bc9:function bc9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc8:function bc8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc4:function bc4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc3:function bc3(d,e){this.a=d
this.b=e},
bc5:function bc5(d,e){this.a=d
this.b=e},
bc2:function bc2(d,e){this.a=d
this.b=e},
bc6:function bc6(d){this.a=d},
bc7:function bc7(d){this.a=d},
atQ:function atQ(d,e){this.c=d
this.a=e},
bqQ:function bqQ(){},
bqR:function bqR(){},
amQ:function amQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
arZ:function arZ(d,e,f){this.c=d
this.d=e
this.a=f},
boT:function boT(){},
boU:function boU(){},
CG:function CG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aiH:function aiH(d,e,f){this.c=d
this.d=e
this.a=f},
VP:function VP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0C:function a0C(d){this.a=d},
awW:function awW(d){this.a=d},
awV:function awV(){},
brT:function brT(){},
brS:function brS(){},
a52:function a52(d){this.a=d},
aCG:function aCG(){},
aCF:function aCF(){},
aCE:function aCE(d){this.a=d},
aCD:function aCD(d){this.a=d},
akL:function akL(d){this.a=d},
ahy:function ahy(d,e){this.e=d
this.a=e},
b4j:function b4j(){},
b4i:function b4i(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b4g:function b4g(d,e,f){this.a=d
this.b=e
this.c=f},
b4h:function b4h(d,e,f){this.a=d
this.b=e
this.c=f},
b4f:function b4f(d){this.a=d},
b4d:function b4d(d,e){this.a=d
this.b=e},
b4b:function b4b(d){this.a=d},
b4c:function b4c(d,e){this.a=d
this.b=e},
b4e:function b4e(){},
Cq:function Cq(d){this.a=d},
Yr:function Yr(){var _=this
_.w=null
_.x=!0
_.y=!1
_.z=null
_.d=$
_.c=_.a=null},
bo5:function bo5(d,e){this.a=d
this.b=e},
bo6:function bo6(d,e){this.a=d
this.b=e},
boa:function boa(d){this.a=d},
bob:function bob(d,e,f){this.a=d
this.b=e
this.c=f},
boc:function boc(d,e){this.a=d
this.b=e},
bod:function bod(d){this.a=d},
boe:function boe(d){this.a=d},
bof:function bof(d){this.a=d},
bog:function bog(d){this.a=d},
boh:function boh(d,e){this.a=d
this.b=e},
boi:function boi(d){this.a=d},
bom:function bom(){},
bon:function bon(d){this.a=d},
boo:function boo(d){this.a=d},
ajS:function ajS(d,e){this.c=d
this.a=e},
L_:function L_(d){this.a=d},
TP:function TP(){var _=this
_.w=null
_.x=!1
_.d=$
_.c=_.a=null},
b4L:function b4L(d){this.a=d},
b4M:function b4M(d,e){this.a=d
this.b=e},
b4N:function b4N(d){this.a=d},
Lp:function Lp(d){this.a=d},
U8:function U8(){var _=this
_.d=_.w=$
_.c=_.a=null},
b6l:function b6l(d){this.a=d},
b6k:function b6k(){},
b6q:function b6q(d){this.a=d},
b6m:function b6m(d){this.a=d},
b6p:function b6p(d){this.a=d},
b6n:function b6n(){},
b6o:function b6o(d,e){this.a=d
this.b=e},
aiu:function aiu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1Q:function a1Q(d){this.a=d},
azq:function azq(){},
azp:function azp(){},
azr:function azr(){},
azo:function azo(){},
Bx:function Bx(d){this.a=d},
Ub:function Ub(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
b6u:function b6u(d){this.a=d},
b6t:function b6t(d,e){this.a=d
this.b=e},
b6v:function b6v(){},
a2b:function a2b(d){this.a=d},
aA3:function aA3(){},
aA2:function aA2(){},
aA4:function aA4(){},
aA1:function aA1(){},
BA:function BA(d){this.a=d},
Um:function Um(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.Q="exterior"
_.as=null
_.d=$
_.c=_.a=null},
b7h:function b7h(d){this.a=d},
b7g:function b7g(d,e){this.a=d
this.b=e},
b7i:function b7i(d){this.a=d},
b7f:function b7f(d,e){this.a=d
this.b=e},
b7j:function b7j(d){this.a=d},
c0p(d){switch(d){case"not_received":return new A.jR(C.F0,"Produkt nicht erhalten")
case"damaged":return new A.jR(C.EN,"Produkt besch\xe4digt")
case"wrong_product":return new A.jR(C.F2,"Falsches Produkt")
default:return new A.jR(C.y3,"Sonstiges")}},
c0q(d){switch(d){case"in_progress":return new A.p8(C.cC,"IN BEARBEITUNG")
case"resolved":return new A.p8(C.aE,"ERLEDIGT")
case"rejected":return new A.p8(C.an,"ABGELEHNT")
default:return new A.p8(C.j,"OFFEN")}},
LZ:function LZ(d){this.a=d},
Uo:function Uo(){var _=this
_.d=_.w=$
_.c=_.a=null},
b7v:function b7v(d,e){this.a=d
this.b=e},
b7t:function b7t(d){this.a=d},
b7u:function b7u(d){this.a=d},
b7w:function b7w(d){this.a=d},
b7B:function b7B(d){this.a=d},
b7A:function b7A(d){this.a=d},
b7x:function b7x(d){this.a=d},
b7z:function b7z(){},
b7y:function b7y(d,e){this.a=d
this.b=e},
HT:function HT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b7q:function b7q(d){this.a=d},
b7r:function b7r(d){this.a=d},
b7s:function b7s(d){this.a=d},
a51:function a51(d){this.a=d},
aCB:function aCB(){},
aCA:function aCA(){},
aCC:function aCC(){},
aCz:function aCz(){},
BI:function BI(d){this.a=d},
V3:function V3(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.as="mhd"
_.ax=_.at=null
_.d=$
_.c=_.a=null},
bak:function bak(d){this.a=d},
baj:function baj(d,e){this.a=d
this.b=e},
bal:function bal(d){this.a=d},
bai:function bai(d,e){this.a=d
this.b=e},
baf:function baf(d,e,f){this.a=d
this.b=e
this.c=f},
bae:function bae(d){this.a=d},
bam:function bam(){},
ban:function ban(){},
bao:function bao(){},
bap:function bap(d){this.a=d},
bah:function bah(d,e){this.a=d
this.b=e},
baq:function baq(d,e){this.a=d
this.b=e},
bag:function bag(d,e){this.a=d
this.b=e},
bar:function bar(d){this.a=d},
c3D(d){switch(d){case"description":return D.aaU
case"health_and_safety":return D.ab4
case"medical_information":return D.abN
case"cleaning_services":return C.yb
case"store":return D.abu
case"work":return C.EM
case"local_shipping":return D.abb
case"build":return C.y9
case"shield":return C.o_
case"gavel":return C.yd
case"folder_open":return D.ab1
default:return C.yc}},
bsg:function bsg(){},
bsf:function bsf(d){this.a=d},
bst:function bst(){},
bti:function bti(){},
MH:function MH(d){this.a=d},
akk:function akk(){var _=this
_.w=""
_.x=null
_.y=!1
_.d=$
_.c=_.a=null},
bbd:function bbd(d){this.a=d},
bb9:function bb9(){},
bba:function bba(){},
bbb:function bbb(d,e){this.a=d
this.b=e},
bbc:function bbc(d,e){this.a=d
this.b=e},
baN:function baN(){},
baO:function baO(){},
baQ:function baQ(){},
baP:function baP(){},
baM:function baM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baL:function baL(){},
baK:function baK(){},
baJ:function baJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bay:function bay(d){this.a=d},
baz:function baz(){},
baA:function baA(d){this.a=d},
baI:function baI(d){this.a=d},
baB:function baB(d){this.a=d},
bax:function bax(d,e){this.a=d
this.b=e},
baC:function baC(d){this.a=d},
baw:function baw(d,e){this.a=d
this.b=e},
baD:function baD(d,e,f){this.a=d
this.b=e
this.c=f},
baE:function baE(d,e,f){this.a=d
this.b=e
this.c=f},
baF:function baF(d,e,f){this.a=d
this.b=e
this.c=f},
baG:function baG(d,e,f){this.a=d
this.b=e
this.c=f},
baH:function baH(d,e,f){this.a=d
this.b=e
this.c=f},
bb6:function bb6(d,e){this.a=d
this.b=e},
bb4:function bb4(d){this.a=d},
bb5:function bb5(d){this.a=d},
bb7:function bb7(){},
bb8:function bb8(){},
bb3:function bb3(d,e){this.a=d
this.b=e},
bb2:function bb2(d,e){this.a=d
this.b=e},
bb_:function bb_(d,e,f){this.a=d
this.b=e
this.c=f},
baZ:function baZ(d,e,f){this.a=d
this.b=e
this.c=f},
bb0:function bb0(d){this.a=d},
bb1:function bb1(d){this.a=d},
baX:function baX(d){this.a=d},
baY:function baY(d){this.a=d},
baW:function baW(d,e,f){this.a=d
this.b=e
this.c=f},
baV:function baV(d,e,f){this.a=d
this.b=e
this.c=f},
baS:function baS(d,e){this.a=d
this.b=e},
baR:function baR(d,e){this.a=d
this.b=e},
baT:function baT(d){this.a=d},
baU:function baU(d){this.a=d},
ar6:function ar6(d,e){this.c=d
this.a=e},
alx:function alx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdx:function bdx(d){this.a=d},
bdy:function bdy(d,e){this.a=d
this.b=e},
aly:function aly(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdz:function bdz(){},
bdA:function bdA(d,e){this.a=d
this.b=e},
bdB:function bdB(d,e){this.a=d
this.b=e},
bdC:function bdC(d,e){this.a=d
this.b=e},
bdD:function bdD(d,e){this.a=d
this.b=e},
bdE:function bdE(d,e){this.a=d
this.b=e},
akj:function akj(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
bav:function bav(){},
bau:function bau(){},
bat:function bat(){},
arB:function arB(d,e){this.e=d
this.a=e},
bo1:function bo1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
akV:function akV(d,e){this.c=d
this.a=e},
c8p(d){var w
A:{if("system_admin"===d){w="Administration"
break A}if("shareholder"===d){w="Gesellschafter"
break A}if("employee"===d){w="Mitarbeiter"
break A}w=d==null?"":d
break A}return w},
c8L(d){var w
A:{if("active"===d){w="aktiv"
break A}if("invited"===d){w="eingeladen"
break A}if("deactivated"===d){w="deaktiviert"
break A}w=d==null?"":d
break A}return w},
bt7:function bt7(){},
a5c:function a5c(d){this.a=d},
aEk:function aEk(d,e,f){this.a=d
this.b=e
this.c=f},
aEn:function aEn(){},
aEm:function aEm(){},
aEl:function aEl(){},
aEj:function aEj(){},
aEi:function aEi(d){this.a=d},
aEh:function aEh(){},
amF:function amF(d,e,f){this.a=d
this.b=e
this.c=f},
C_:function C_(d){this.a=d},
W5:function W5(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.c=_.a=null},
bg1:function bg1(){},
bg2:function bg2(d,e){this.a=d
this.b=e},
bg0:function bg0(d,e,f){this.a=d
this.b=e
this.c=f},
a5v:function a5v(d){this.a=d},
aFG:function aFG(){},
aFF:function aFF(){},
aFH:function aFH(){},
aFE:function aFE(){},
BR:function BR(d){this.a=d},
Vo:function Vo(d,e,f,g,h,i){var _=this
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
bcM:function bcM(d,e){this.a=d
this.b=e},
bcN:function bcN(d,e){this.a=d
this.b=e},
bcT:function bcT(d){this.a=d},
bcS:function bcS(d,e){this.a=d
this.b=e},
bcU:function bcU(d){this.a=d},
bcQ:function bcQ(d){this.a=d},
bcO:function bcO(d,e){this.a=d
this.b=e},
bcR:function bcR(){},
bcV:function bcV(){},
bcW:function bcW(){},
bcX:function bcX(){},
bcY:function bcY(){},
bcZ:function bcZ(d){this.a=d},
bcP:function bcP(d,e){this.a=d
this.b=e},
bvo(e1,e2,e3,e4,e5,e6){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$bvo=A.m(function(e7,e8){if(e7===1)return A.n(e8,v)
for(;;)switch(w){case 0:d8=x.N
d9=x.D
e0=A.z(d8,d9)
for(u=e4.$ti,t=new A.aK(e4,e4.gp(0),u.i("aK<ag.E>")),u=u.i("ag.E");t.t();){s=t.d
if(s==null)s=u.a(s)
r=J.a_(s,"product_id")
q=r==null?null:J.am(r)
if(q==null)q=""
J.e4(e0.cl(0,q,new B.bvp()),s)}p=A.z(d8,d9)
for(d8=J.cB(e3),d9=d8.gX(e3);d9.t();){u=d9.gN(d9)
t=J.a_(u,"product_id")
q=t==null?null:J.am(t)
if(q==null)q=""
J.e4(p.cl(0,q,new B.bvq()),u)}o=new B.bvx()
n=new B.bvv()
m=new B.bvt()
l=new B.bvu()
k=new A.dj("")
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
else{a8=A.fL(r.h(s,"unit_cost"))
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
c3=d8.eQ(e3,new B.bvr(),x.T).hG(0).a
c4=new A.dj("")
c4.a=y.k
d8=$.d3()
d9=d8.am(c0)
u=c1===0?"\u2014 0,00 \u20ac":"\u2212 "+d8.am(c1)
c4.a=y.k+('<div class="kpis"><span><b>'+c3+"</b> Produkte im Bestand</span><span><b>"+A.i(b9)+"</b> Einheiten gesamt</span><span>Anschaffungskosten netto <b>"+d9+'</b></span><span class="warn">MHD-Abschlag <b>'+u+"</b></span><span>Bilanzwert netto <b>"+d8.am(c2)+"</b></span></div>")
c5=new A.dj("")
c5.a='<section class="matrix-block">'
c5.a='<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2>'
c5.a=y.c
d8=c5.a=y.c+'<table class="pos matrix"><thead><tr><th>Rest-MHD am Stichtag</th><th>Typischer Bewertungsansatz</th><th class="num">B\xf6rdesnack24 wendet an</th><th>Begr\xfcndung</th></tr></thead><tbody>'
for(c6=0;c6<5;++c6){c7=D.akO[c6]
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
d1=new A.dj("")
if(e1!=null&&e1.ey(e1,new B.bvs())){d1.a='<section class="stamp">'
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
if(d8.gdA(e5)){d9=(d1.a+='<section class="signatures">')+"<h2>Freigabe / Unterschriften</h2>"
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
d8=(self.URL||self.webkitURL).createObjectURL(B.bxB(['<!doctype html>\n<html lang="de"><head>\n<meta charset="utf-8">\n<title>FIFO-Inventur '+d8.am(e2)+" \u2013 "+d8.am(e6)+'</title>\n<style>\n  @page { size: A4 landscape; margin: 0 10mm 12mm 10mm; }\n  * { box-sizing: border-box; }\n  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n         color: #14110E; margin: 0; padding: 0; font-size: 9pt; }\n  /* One-Pager-Look: Gold-Topbar + Wortmarke */\n  .topbar { height: 5mm; background: #FDC102; margin: 0 -10mm 6mm; }\n  .brand { font-weight: 900; letter-spacing: 2px; font-size: 11pt;\n           margin-bottom: 6pt; }\n  .wrap { max-width: 100%; margin: 0 auto; }\n  .head { display: flex; justify-content: space-between; align-items: flex-end; }\n  .head h1 { margin: 0; font-size: 17pt; letter-spacing: 0.5px; color: #B8860B; }\n  .meta { color: #6f6a5b; font-size: 9pt; }\n  h2 { font-size: 11pt; margin: 12pt 0 4pt 0; color: #14110E;\n       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }\n  h3 { font-size: 10pt; margin: 8pt 0 2pt 0; color: #6f6a5b;\n       font-weight: 700; letter-spacing: 0.2px; }\n  table.pos { width: 100%; border-collapse: collapse; margin-top: 3pt; }\n  table.pos th, table.pos td { padding: 3pt 5pt; text-align: left;\n                                border-bottom: 1pt solid #E8E2D6; }\n  table.pos th { background: #14110E; color: #F9F5EC; }\n  .num { text-align: right; white-space: nowrap; }\n  .muted { color: #6f6a5b; }\n  .strong { font-weight: 800; }\n  .warn { color: #B2311C; font-weight: 800; }\n  tr.in td   { background: #F3F8ED; }\n  tr.out td  { background: #FAE9E4; }\n  tr.sum td  { background: #FFF5CC; border-top: 1pt solid #14110E;\n                border-bottom: 1pt solid #14110E; }\n  .kpis { display: flex; flex-wrap: wrap; gap: 20pt; margin: 6pt 0;\n          font-size: 10pt; color: #14110E; }\n  .kpis span b { font-size: 12pt; }\n  .kpis .warn { color: #B2311C; }\n  .sigrow { display: flex; flex-wrap: wrap; gap: 24pt; margin-top: 6pt; }\n  .sig-slot { width: 260px; }\n  .sig-box { height: 70px; border: 1pt solid #e6e0cc; border-radius: 6pt;\n             background: #FAF6ED; padding: 6pt; display: flex;\n             align-items: flex-end; }\n  .sig-line { height: 1pt; background: #14110E; width: 100%;\n              margin-bottom: 3pt; }\n  .sig-img { max-height: 60px; max-width: 100%; object-fit: contain; }\n  .sig-name { margin-top: 4pt; font-size: 10pt; }\n  .sig-meta { color: #6f6a5b; font-size: 8pt; }\n  .matrix-intro { color: #6f6a5b; font-size: 9pt; margin: 2pt 0 4pt 0;\n                  max-width: 780px; }\n  /* "Bewertung:" mit zwei Zeilen \u2014 Label steht neben dem Anschaffungs\xad\n     kosten-Text, die zweite Zeile ("MHD-Abschlag vom AK-Wert") wird auf\n     die H\xf6he von "Anschaffungskosten" einger\xfcckt. */\n  .head .meta .bewertung-label { display: inline-block; vertical-align: top; }\n  .head .meta .bewertung-lines { display: inline-block; vertical-align: top;\n                                  margin-left: 4pt; }\n  .head .meta .bewertung-lines > span { display: block; }\n\n  /* Freigabe-Stempel */\n  section.stamp { margin: 8pt 0 4pt 0; padding: 6pt 10pt;\n                  border: 1pt solid #5C9A3F; border-radius: 6pt;\n                  background: #EEF6E8; }\n  section.stamp .stamp-badge {\n    display: inline-block; font-weight: 800; letter-spacing: 1px;\n    color: #3E7A25; font-size: 12pt;\n  }\n  section.stamp .stamp-note { color: #14110E; font-size: 9pt; margin-top: 2pt; }\n  section.stamp .stamp-list { margin: 4pt 0 0 14pt; padding: 0;\n                              font-size: 9pt; color: #14110E; }\n  section.stamp .stamp-list li { margin: 1pt 0; }\n  table.matrix { width: 100%; }\n  table.matrix td, table.matrix th { padding: 4pt 6pt; }\n\n  /* Produkt-Block */\n  section.product { margin: 10pt 0 8pt 0;\n                    padding: 6pt 8pt 8pt 8pt;\n                    border: 1pt solid #e6e0cc;\n                    border-radius: 4pt; }\n  .prod-head { display: flex; justify-content: space-between;\n               align-items: flex-end;\n               border-bottom: 1pt solid #14110E; padding-bottom: 3pt;\n               margin-bottom: 4pt; }\n  .prod-name { font-size: 12pt; font-weight: 800; letter-spacing: 0.2px; }\n  .prod-sku  { color: #6f6a5b; font-size: 8pt; }\n  .prod-end  { color: #14110E; font-size: 10pt; }\n  .prod-end b { color: #b89a00; }\n\n  /* \u2500\u2500 Sauberer Seitenumbruch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n  p, li { orphans: 3; widows: 3; }\n  h1, h2, h3 { page-break-after: avoid; break-after: avoid-page; }\n  thead { display: table-header-group; }\n  tfoot { display: table-footer-group; }\n  table.pos tr { page-break-inside: avoid; break-inside: avoid; }\n  table.pos tr.sum { page-break-before: avoid; break-before: avoid; }\n  section.product { page-break-inside: auto; break-inside: auto; }\n  section.product .prod-head { page-break-after: avoid; break-after: avoid-page; }\n  .sig-slot { page-break-inside: avoid; break-inside: avoid; }\n  .kpis, table.matrix,\n  section.matrix-block, section.signatures {\n    page-break-inside: avoid; break-inside: avoid;\n  }\n</style>\n</head><body onload="window.print()"><div class="topbar"></div><div class="wrap">\n  <div class="brand">B\xd6RDESNACK24</div>\n  <div class="head">\n    <div>\n      <h1>INVENTUR \u2014 FIFO-Bewegungsreport</h1>\n      <div class="meta">Zeitraum: '+d8.am(e2)+" \u2013 "+d8.am(e6)+'</div>\n      <div class="meta">Bewertungsverfahren: <b>FIFO</b> (\xa7256 HGB, Verbrauchsfolge)</div>\n      <div class="meta">\n        <span class="bewertung-label">Bewertung:</span>\n        <span class="bewertung-lines">\n          <span>Anschaffungskosten netto (\xa7253 HGB)</span>\n          <span>MHD-Abschlag vom AK-Wert</span>\n        </span>\n      </div>\n    </div>\n    <div class="meta">\n      B\xf6rdesnack24 GbR<br>\n      S\xfclldorfer Str. 3A \xb7 39171 S\xfclzetal OT Osterweddingen<br>\n      Steuernummer: 102/178/01635<br>\n      USt-IdNr.: DE 458804058<br>\n      Erstellt am '+d8.am(d0)+"\n    </div>\n  </div>\n  "+k.j(0)+"\n  "+c4.j(0)+"\n  "+c5.j(0)+"\n  "+d1.j(0)+"\n</div></body></html>\n"],"text/html"))
d8.toString
d9=window
d9.toString
C.a_6.ahO(d9,d8,"_blank")
return A.o(null,v)}})
return A.p($async$bvo,v)},
bvp:function bvp(){},
bvq:function bvq(){},
bvx:function bvx(){},
bvy:function bvy(d){this.a=d},
bvv:function bvv(){},
bvw:function bvw(d){this.a=d},
bvt:function bvt(){},
bvu:function bvu(){},
bvr:function bvr(){},
bvs:function bvs(){},
apk(d){var w,v,u
if(d==null||d.length===0)return"\u2014"
try{w=A.od(d)
v=$.dp().am(w)
return v}catch(u){v=d.length
return C.c.a_(d,0,v>10?10:v)}},
Og:function Og(d){this.a=d},
W4:function W4(d,e){var _=this
_.w=d
_.x=e
_.Q=_.z=_.y=null
_.as=!1
_.at=null
_.d=$
_.c=_.a=null},
bfS:function bfS(d){this.a=d},
bfT:function bfT(d){this.a=d},
bfU:function bfU(d,e){this.a=d
this.b=e},
bfV:function bfV(d,e){this.a=d
this.b=e},
bfY:function bfY(d){this.a=d},
bfW:function bfW(d){this.a=d},
bfX:function bfX(d){this.a=d},
bfR:function bfR(){},
bfZ:function bfZ(d){this.a=d},
bg_:function bg_(d){this.a=d},
apj:function apj(d,e,f){this.d=d
this.e=e
this.a=f},
bkj:function bkj(){},
bkk:function bkk(){},
bkl:function bkl(){},
bkm:function bkm(){},
alP:function alP(d,e){this.c=d
this.a=e},
bex:function bex(){},
bey:function bey(){},
bez:function bez(){},
beA:function beA(){},
beB:function beB(){},
wW:function wW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
anD:function anD(d){this.a=d},
wZ:function wZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
arC:function arC(d,e){this.c=d
this.a=e},
arE:function arE(d,e){this.c=d
this.a=e},
bop:function bop(){},
Iz:function Iz(d){this.a=d},
a76:function a76(d){this.a=d},
aKs:function aKs(){},
aKr:function aKr(){},
aKq:function aKq(){},
aKp:function aKp(){},
aKo:function aKo(d){this.a=d},
aKn:function aKn(d,e){this.a=d
this.b=e},
aKm:function aKm(d){this.a=d},
zz:function zz(d,e,f){this.d=d
this.e=e
this.a=f},
anm:function anm(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
bhe:function bhe(d){this.a=d},
bhd:function bhd(){},
bhc:function bhc(){},
bhb:function bhb(d){this.a=d},
bha:function bha(d){this.a=d},
bh9:function bh9(){},
bh8:function bh8(d,e){this.a=d
this.b=e},
bh7:function bh7(d,e,f){this.a=d
this.b=e
this.c=f},
bh6:function bh6(d,e,f){this.a=d
this.b=e
this.c=f},
bh4:function bh4(d){this.a=d},
bh5:function bh5(d,e){this.a=d
this.b=e},
a7J:function a7J(d){this.a=d},
aLN:function aLN(){},
aLM:function aLM(){},
aLO:function aLO(){},
aLL:function aLL(){},
C3:function C3(d){this.a=d},
Wd:function Wd(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=null
_.at=!1
_.d=$
_.c=_.a=null},
bhh:function bhh(d){this.a=d},
bhg:function bhg(d,e){this.a=d
this.b=e},
bhi:function bhi(){},
bhj:function bhj(d){this.a=d},
bhf:function bhf(d,e){this.a=d
this.b=e},
bJT(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return"\u2014"
try{w=A.od(J.am(d)).FM()
v=C.c.cZ(C.e.j(A.bV(w)),2,"0")
u=C.c.cZ(C.e.j(A.bi(w)),2,"0")
t=C.c.cZ(C.e.j(A.hB(w)),2,"0")
s=C.c.cZ(C.e.j(A.vS(w)),2,"0")
r=A.i(v)
q=A.i(u)
p=A.i(t)
o=A.i(s)
return r+"."+q+". "+p+":"+o}catch(n){r=J.am(d)
return r}},
Sw:function Sw(d){this.a=d},
asD:function asD(){var _=this
_.w=0
_.d=$
_.c=_.a=null},
bpN:function bpN(d){this.a=d},
bpM:function bpM(d,e){this.a=d
this.b=e},
bsA:function bsA(){},
anc:function anc(d){this.a=d},
bgY:function bgY(){},
bgX:function bgX(){},
bgW:function bgW(d){this.a=d},
bgV:function bgV(d){this.a=d},
alT:function alT(d,e){this.c=d
this.a=e},
C2:function C2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bt8:function bt8(){},
apn:function apn(d){this.a=d},
bkD:function bkD(d,e,f){this.a=d
this.b=e
this.c=f},
bkG:function bkG(){},
bkF:function bkF(){},
bkE:function bkE(){},
bkC:function bkC(){},
apm:function apm(d,e){this.c=d
this.a=e},
Cf:function Cf(d){this.a=d},
X4:function X4(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q="generic"
_.d=$
_.c=_.a=null},
bkz:function bkz(){},
bkA:function bkA(d){this.a=d},
bky:function bky(d,e){this.a=d
this.b=e},
bkB:function bkB(){},
bse:function bse(){},
ak5:function ak5(d){this.a=d},
ba0:function ba0(d,e,f){this.a=d
this.b=e
this.c=f},
ba3:function ba3(){},
ba2:function ba2(){},
ba1:function ba1(){},
ba_:function ba_(){},
ak4:function ak4(d,e){this.c=d
this.a=e},
BH:function BH(d){this.a=d},
V0:function V0(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.d=$
_.c=_.a=null},
b9V:function b9V(){},
b9U:function b9U(d){this.a=d},
b9S:function b9S(d){this.a=d},
b9P:function b9P(d,e){this.a=d
this.b=e},
b9T:function b9T(){},
b9Y:function b9Y(){},
b9X:function b9X(){},
b9W:function b9W(d){this.a=d},
b9Q:function b9Q(d){this.a=d},
b9O:function b9O(d,e){this.a=d
this.b=e},
b9R:function b9R(){},
b9Z:function b9Z(){},
Yt:function Yt(d){this.a=d},
arU:function arU(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
boE:function boE(){},
boD:function boD(d){this.a=d},
boC:function boC(d){this.a=d},
boB:function boB(d,e){this.a=d
this.b=e},
arT:function arT(d,e){this.e=d
this.a=e},
boA:function boA(){},
boz:function boz(d,e){this.a=d
this.b=e},
box:function box(d,e,f){this.a=d
this.b=e
this.c=f},
boy:function boy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bow:function bow(d,e){this.a=d
this.b=e},
arS:function arS(d,e,f){this.c=d
this.d=e
this.a=f},
Cr:function Cr(d,e,f){this.d=d
this.e=e
this.a=f},
Ys:function Ys(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=null
_.d=$
_.c=_.a=null},
bot:function bot(){},
bov:function bov(){},
bou:function bou(d){this.a=d},
bos:function bos(d){this.a=d},
bor:function bor(d,e){this.a=d
this.b=e},
bsl:function bsl(){},
akR:function akR(d){this.a=d},
bbQ:function bbQ(){},
bbP:function bbP(){},
bbO:function bbO(d){this.a=d},
bbN:function bbN(d){this.a=d},
akQ:function akQ(d,e){this.c=d
this.a=e},
tU:function tU(d,e,f){this.c=d
this.d=e
this.a=f},
ae7:function ae7(d){this.a=d},
b1f:function b1f(){},
b1e:function b1e(){},
b1g:function b1g(){},
b1d:function b1d(){},
CC:function CC(d){this.a=d},
YW:function YW(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
bpP:function bpP(d){this.a=d},
bpO:function bpO(d,e){this.a=d
this.b=e},
bpQ:function bpQ(){},
OO(d,e){return new B.a7G(e,d,null)},
a7G:function a7G(d,e,f){this.e=d
this.f=e
this.a=f},
aLJ:function aLJ(){},
aLI:function aLI(){},
aLH:function aLH(d){this.a=d},
aLG:function aLG(){},
FK:function FK(d,e){this.d=d
this.a=e},
WR:function WR(){var _=this
_.w=!1
_.x=null
_.d=$
_.c=_.a=null},
bjq:function bjq(d){this.a=d},
bjr:function bjr(d,e){this.a=d
this.b=e},
bjs:function bjs(d){this.a=d},
Q6(d,e,f,g,h,i,j){return new B.Q5(j,i,d,e,g,f,h,null)},
Q5:function Q5(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
X0:function X0(){var _=this
_.d=_.w=$
_.c=_.a=null},
bkp:function bkp(d){this.a=d},
bkn:function bkn(d){this.a=d},
bko:function bko(d){this.a=d},
bku:function bku(d,e){this.a=d
this.b=e},
bkt:function bkt(d,e){this.a=d
this.b=e},
bkx:function bkx(){},
bkw:function bkw(){},
bkv:function bkv(d){this.a=d},
bks:function bks(d){this.a=d},
bkr:function bkr(){},
bkq:function bkq(d,e){this.a=d
this.b=e},
bF3(d,e,f){return new B.a1V(e,f,d,null)},
a1V:function a1V(d,e,f,g){var _=this
_.d=d
_.r=e
_.as=f
_.a=g},
b76:function b76(d,e){this.a=d
this.b=e},
a1W:function a1W(d,e,f,g){var _=this
_.d=d
_.r=e
_.x=f
_.a=g},
b77:function b77(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
b78:function b78(d){this.a=d},
bFv(d,e,f){return new B.rc(f,d,e)},
ob(d){return new B.fz(d)},
aBy(d,e,f,g,h,i,j){return new B.a4v(e,g,f,h,i,d,j,B.bTt(e),null)},
bTt(d){var w,v,u
for(w=d.length,v=null,u=0;u<w;++u)if(!d[u].d){if(v!=null)return null
v=u}return v},
bIV(d,e,f,g,h,i){var w=null
return new B.So(d,h,w,w,w,w,g,w,w,w,w,w,w,f,e,!0,C.G,w,w,w,w,w,w,i,w,w,!0,!1,w,!1,w,!0,w,w,w)},
fn:function fn(d,e){this.a=d
this.d=e},
rc:function rc(d,e,f){this.b=d
this.f=e
this.r=f},
fz:function fz(d){this.a=d},
a4v:function a4v(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.ay=i
_.CW=j
_.fr=k
_.a=l},
aBD:function aBD(d){this.a=d},
aBz:function aBz(){},
aBA:function aBA(){},
aBB:function aBB(){},
aBC:function aBC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aBE:function aBE(d,e){this.a=d
this.b=e},
aBF:function aBF(d){this.a=d},
aBG:function aBG(d){this.a=d},
So:function So(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
b0Z:function b0Z(d){this.a=d},
ao9:function ao9(){},
aoe:function aoe(d){this.a=d},
GP:function GP(d,e,f){this.r=d
this.w=e
this.a=f},
Yv:function Yv(){this.d=!1
this.c=this.a=null},
boF:function boF(d){this.a=d},
boI:function boI(d,e,f){this.a=d
this.b=e
this.c=f},
boJ:function boJ(d,e,f){this.a=d
this.b=e
this.c=f},
boG:function boG(d,e){this.a=d
this.b=e},
boH:function boH(d,e){this.a=d
this.b=e},
qm:function qm(d){this.d=this.b=null
this.a=d},
wo:function wo(){},
Oe:function Oe(d){this.a=d},
a5z:function a5z(d){this.a=d},
a5O:function a5O(){},
wn:function wn(d,e){this.a=d
this.b=e},
w2:function w2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
aWv:function aWv(){},
aWu:function aWu(d){this.a=d},
aWt:function aWt(d){this.a=d},
aWw:function aWw(){},
aWr:function aWr(d,e){this.a=d
this.b=e},
aWs:function aWs(){},
aWx:function aWx(){},
aWy:function aWy(d){this.a=d},
It:function It(d,e){this.a=d
this.b=e},
c_1(d,e,f,g){var w
if(C.b.ey(e,new B.b1_())){w=A.aa(e).i("ae<1,k_?>")
w=A.Q(new A.ae(e,new B.b10(),w),w.i("ax.E"))
w.$flags=1
w=w}else w=null
return new B.Sm(e,f,d,g,w,null)},
mq:function mq(d,e,f){this.a=d
this.b=e
this.c=f},
ly:function ly(d,e){this.a=d
this.b=e},
Sm:function Sm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.y=h
_.a=i},
b1_:function b1_(){},
b10:function b10(){},
asu:function asu(d,e,f,g){var _=this
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
bpE:function bpE(d,e){this.a=d
this.b=e},
bpD:function bpD(d,e,f){this.a=d
this.b=e
this.c=f},
bpF:function bpF(){},
bpG:function bpG(d){this.a=d},
bpC:function bpC(){},
bpB:function bpB(){},
bpH:function bpH(){},
Sn:function Sn(d,e,f){this.c=d
this.d=e
this.a=f},
ast:function ast(d,e,f){this.f=d
this.b=e
this.a=f},
Jw:function Jw(d,e){this.a=d
this.b=e},
avb:function avb(){},
aJG:function aJG(){},
bHP(d){var w=A.bO('[,()"\\\\]',!0,!1,!1)
if(!(w.b.test(d)||d!==C.c.aL(d)))return d
w=A.ay(d,"\\","\\\\")
return'"'+A.ay(w,'"','\\"')+'"'},
ke:function ke(d,e){this.a=d
this.b=e},
aaT:function aaT(d,e,f){this.a=d
this.b=e
this.c=f},
aRV:function aRV(){},
axD(d,e,f,g,h){return A.dz(d,e,new B.axE(f,h),new B.axF(f,h),!1,!0,!1,g,h)},
axE:function axE(d,e){this.a=d
this.b=e},
axF:function axF(d,e){this.a=d
this.b=e},
bTs(d){var w
d.O(x.d)
w=A.W(d)
return w.y2},
bxB(d,e){var w={}
w.type=e
return new self.Blob(d,w)},
bBx(d){var w=0,v=A.q(x.H),u,t
var $async$bBx=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.bxB([A.eK(65279)+d],"text/csv;charset=utf-8"))
t.toString
u=document.createElement("a")
u.href=t
u.download="b2b_customers.csv"
u.click();(self.URL||self.webkitURL).revokeObjectURL(t)
return A.o(null,v)}})
return A.p($async$bBx,v)},
bC2(d,e,f){var w=0,v=A.q(x.H)
var $async$bC2=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:A.bLz(f,null)
return A.o(null,v)}})
return A.p($async$bC2,v)},
a5Q(d,e,f,g,h){var w=null
return new A.yH(f,w,e,d,h,w,w,!0,C.a_j,g,w)}},D
J=c[1]
A=c[0]
C=c[2]
F=c[5]
E=c[7]
B=a.updateHolder(c[4],B)
D=c[8]
B.wm.prototype={
FV(d,e,f,g,h){return this.b1K(0,e,f,g,h)},
b1J(d,e,f,g){return this.FV(0,e,f,"application/octet-stream",g)},
b1K(d,e,f,g,h){var w=0,v=A.q(x.N),u,t=this,s,r,q,p
var $async$FV=A.m(function(i,j){if(i===1)return A.n(j,v)
for(;;)switch(w){case 0:q=t.a
p=q.gdX().e.a
p=p==null?null:p.r
s=p==null?null:p.a
if(s==null)s="anon"
r=s+"/"+Date.now()+"_"+h
q=q.ay
q===$&&A.a()
w=3
return A.j(q.cV(e).Am(r,f,new A.Er(!1,g)),$async$FV)
case 3:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$FV,v)}}
B.v8.prototype={}
B.EF.prototype={
u(d){var w,v,u,t,s=null,r=this.c
if(r.length===0)return C.ap
w=x.p
v=A.b([],w)
for(u=0;u<r.length;++u){t=A.b([],w)
if(u>0)t.push(C.aZ)
t.push(new B.alU(r[u],s))
C.b.K(v,t)}return new A.ai(this.d,A.ap(v,C.k,s,C.lU,C.h,0,s,s),s)}}
B.alU.prototype={
u(d){var w=null,v=this.c,u=A.aR(12),t=v.f,s=t?w:v.c,r=A.aR(12),q=A.aR(12),p=v.e
p=A.cP(p==null?C.am:p,1)
if(t)t=C.Z9
else t=A.co(v.a,v.d,w,20)
return A.Hk(A.dL(!1,C.a_,!0,u,A.eF(!1,r,!0,A.b9(C.W,t,C.r,w,w,new A.b5(w,w,p,q,w,w,C.G),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,s,w,w,w,w,w,w,w),C.r,C.ae,0,w,w,w,w,w,C.br),w,v.b,w,w)}}
B.Pb.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=C.bm
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
q=A.b([A.ap(w,C.k,r,C.f,C.h,0,r,r),C.u,A.k(s.d,1,C.ak,r,A.D(C.j,15,C.S),r,r,r)],t)
C.b.K(q,A.b([C.bW,A.k(s.e,2,C.ak,r,A.D(C.p,12,C.l),r,r,r)],t))
return A.by(r,A.ad(q,C.D,r,C.iq,C.h,0),r,s.f,C.ai,r,3)}}
B.At.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.At&&e.a===this.a&&e.c.k(0,this.c)&&e.d.k(0,this.d)},
gA(d){return A.a9(this.a,this.c,this.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zB.prototype={
ke(d,e){return this.aPh(d,e)},
aPh(d,e){var w=0,v=A.q(x.y),u,t=this,s,r
var $async$ke=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t.se9(0,C.dw)
w=3
return A.j(A.pn(new B.aLQ(t,d,e),x.H),$async$ke)
case 3:t.se9(0,g)
s=t.f
w=s.ght(s)!=null?4:5
break
case 4:r=t.r.aD(0,$.bDO(),x.bX)
w=8
return A.j(r.N6(),$async$ke)
case 8:w=!g?6:7
break
case 6:w=9
return A.j(r.E4(d,e),$async$ke)
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
Li(d,e,f){return this.aSl(d,e,f)},
aSl(d,e,f){var w=0,v=A.q(x.y),u,t=this,s
var $async$Li=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:t.se9(0,C.dw)
w=3
return A.j(A.pn(new B.aLR(t,e,f,d,null),x.H),$async$Li)
case 3:t.se9(0,h)
s=t.f
u=s.ght(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$Li,v)},
M5(d,e,f){return this.aUb(d,e,f)},
aUb(d,e,f){var w=0,v=A.q(x.aD),u,t=this,s,r
var $async$M5=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:r={}
t.se9(0,C.dw)
r.a=null
w=3
return A.j(A.pn(new B.aLS(r,t,d,e,f),x.H),$async$M5)
case 3:t.se9(0,h)
s=t.f
u=s.ght(s)!=null?null:r.a
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$M5,v)}}
B.zC.prototype={
dg(d,e){return A.dz(e.an($.bx_(),x.i),new B.aLV(this),new B.aLW(),new B.aLX(),!1,!0,!1,x.C,x.l)},
atN(d){var w="Inventur",v=null,u="customers.manage",t=d.n(0,"inventory.view")||d.n(0,"inventory.edit"),s=d.n(0,"haccp.fill"),r=d.n(0,"haccp.temperature"),q=d.n(0,"haccp.cleaning"),p=d.n(0,"haccp.disposal"),o=d.n(0,"haccp.maintenance"),n=d.n(0,"cash.collect"),m=d.n(0,"documents.view")||d.n(0,"documents.edit"),l=x.af
t=A.Q(new A.bd(A.b([new B.fJ(w,"Bestand je Automat",C.jk,D.afw,t,v,v,v,v),new B.fJ("Bef\xfcllung","Nachf\xfcll-Protokoll",C.y7,D.a92,s,v,v,v,v),new B.fJ("Temperatur","HACCP \xb7 \u2264 7 \xb0C",C.F3,D.aBB,r,v,v,v,v),new B.fJ("Reinigung","Hygieneplan",C.yb,D.a3x,q,v,v,v,v),new B.fJ("Vernichtung","MHD / Verderb",C.y1,D.a6N,p,v,v,v,v),new B.fJ("Wartung","Technik-Protokolle",C.y9,D.apF,o,v,v,v,v),new B.fJ("Geldentnahme","Kassenprotokoll",C.yh,D.a3i,n,v,v,v,v),new B.fJ("Dokumente","Archiv & Versionen",C.yc,D.a6T,m,v,v,v,v),new B.fJ("Mitarbeiter","Einladen & Schulen",C.ET,D.a8q,d.n(0,"employees.manage"),v,v,v,v),new B.fJ("B2B-Kunden","sevDesk-CSV-Export",C.nY,D.a08,d.n(0,u),v,v,v,v),new B.fJ("DATEV-Export","Buchungsstapel (CSV)",C.fv,E.Dl,d.n(0,"finance.export"),C.aE,C.aE.f_(0.12),C.aE.f_(0.4),D.aNk),new B.fJ("Anlagen","PKW-Kosten \xb7 Nutzungseinlage",C.nX,D.a0_,d.n(0,"finance.view"),v,v,v,v),new B.fJ(w,"PDF-Report Zeitraum",C.jk,D.afv,d.n(0,u),v,v,v,v),new B.fJ("Telemetrie","IoT \xb7 Live \xb7 Slots",C.EK,D.aBA,d.n(0,u),v,v,v,v),new B.fJ("Freigaben","Dokumente pr\xfcfen",C.fw,D.a6S,d.n(0,u),v,v,v,v),new B.fJ("K\xfcndigungen","Abo-K\xfcndigungen pr\xfcfen",C.F4,D.a3c,d.n(0,u),v,v,v,v),new B.fJ("Reklamationen","Kundenmeldungen je Kauf",C.nZ,D.a5A,d.n(0,u),v,v,v,v),D.aPu],x.ew),new B.aLU(),l),l.i("t.E"))
return t}}
B.anK.prototype={
u(d){var w=null
return A.dG(A.b([D.ay2,C.M,A.k("Digitale HACCP-, Reinigungs- und Bestandsprotokolle \u2014 revisionssicher und GoBD-konform.",w,w,w,A.D(C.p,13,C.l),w,w,w),C.aQ,A.ia(new B.bi8(this))],x.p),C.cj,w,C.K,!1)}}
B.akM.prototype={
u(d){var w=null
return A.d_(new A.ai(C.dd,A.ad(A.b([A.b9(w,D.ac9,C.r,w,w,new A.b5(C.bm,w,A.cP(C.m,1),w,w,w,C.eG),w,72,w,w,w,w,w,72),C.L,A.k("Keine Module freigeschaltet",w,w,w,A.c8(C.j,20,C.S),C.cF,w,w),C.M,A.k("F\xfcr Dein Konto sind noch keine Module aktiviert. Bitte wende Dich an einen Gesellschafter.",w,w,w,A.D(C.p,14,C.l),C.cF,w,w)],x.p),C.k,w,C.f,C.H,0),w),w,w)}}
B.fJ.prototype={}
B.ajK.prototype={
u(d){var w=null,v=C.aE.f_(0.14),u=A.aR(4),t=A.cP(C.aE.f_(0.5),1)
return A.b9(w,A.k("DATEV",w,w,w,A.D(C.aE,9,C.q).fZ(0.4),w,w,w),C.r,w,w,new A.b5(v,w,t,u,w,w,C.G),w,w,w,w,D.a8n,w,w,w)}}
B.xE.prototype={
W(){return new B.TD(C.cp)}}
B.TD.prototype={
gq_(){var w=this.w
return w===$?this.w=A.aW(new A.b_(Date.now(),0,!1)):w},
au(){this.aM()
this.xp()},
aFs(d){this.J(new B.b46(this,d))
this.xp()},
xp(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$xp=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b47(r))
u=3
q=r.gc3().aD(0,$.bH(),x.A)
n=x.N
m=x.z
w=6
return A.j(A.k6(A.b([q.ev("anlage_pkw",A.a4(["p_jahr",r.gq_()],n,m),m),q.h4("list_partner_signatures",m)],x.U),m),$async$xp)
case 6:p=e
r.x=A.di(x.f.a(J.a_(p,0)),n,m)
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
if(r.c!=null)r.J(new B.b48(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$xp,v)},
ga4B(){var w=this.x
w=w==null?null:w.h(0,"fahrzeuge")
x.g.a(w)
if(w==null)w=C.bo
return J.cG(w,x.P)},
ga50(){var w="freigabe",v=this.x
return(v==null?null:v.h(0,w))==null?null:A.di(x.f.a(this.x.h(0,w)),x.N,x.z)},
gaNB(){var w,v,u,t,s,r,q,p=this.ga50()
p=p==null?null:p.h(0,"unterzeichner")
x.g.a(p)
w=p==null?C.bo:p
p=J.V(w)
if(p.gZ(w))return null
v=A.b([],x.t)
for(p=p.gX(w),u=x.f,t=x.N,s=x.z;p.t();){r=u.a(p.gN(p))
q=J.V(r)
v.push(A.a4(["full_name",q.h(r,"name"),"signature_url",q.h(r,"unterschrift")],t,s))}return v},
u(d){var w,v,u,t,s,r,q=this,p=null,o=q.gaFz(),n=x.p,m=A.b([new B.amP(q.gq_(),q.gaFr(),p),C.L],n)
if(q.x!=null&&!q.z)m.push(q.asY())
if(q.z)m.push(E.TA)
else{w=q.Q
if(w!=null)m.push(new B.VP("Die Anlage konnte nicht geladen werden: "+w,C.an,E.EC,p))
else{w=A.b([],n)
if(B.btt(q.x))C.b.K(w,A.b([new B.arZ(q.gq_(),q.ga50(),p),C.L],n))
w.push(new B.al_(q.ga4B(),q.gq_(),B.btt(q.x),o,p))
w.push(C.bJ)
n=q.x
n=n==null?p:n.h(0,"fahrten")
x.g.a(n)
if(n==null)n=C.bo
n=J.cG(n,x.P)
v=q.ga4B()
u=q.gq_()
t=B.btt(q.x)
s=q.x
s=B.uk(s==null?p:s.h(0,"nutzungseinlage"))
r=q.x
w.push(new B.akY(n,v,u,t,s,C.d.a0(B.uk(r==null?p:r.h(0,"fahrten_ohne_satz"))),o,p))
w.push(C.bJ)
w.push(new B.atQ(q.y,p))
C.b.K(m,w)}}return A.dT(D.a9p,p,A.ig(A.dG(m,C.cj,p,C.K,!1),C.m,o),p,p)},
asY(){var w=A.b([],x.B)
if(!B.btt(this.x))w.push(new B.v8(C.fw,"Freigabe anfordern",this.gayO(),C.m,null,!1))
w.push(new B.v8(C.i6,"Als PDF drucken",new B.b42(this),C.an,C.an,!1))
return new B.EF(w,C.dU,null)},
BR(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$BR=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.c
k.toString
w=3
return A.j(A.hk(null,null,!0,null,new B.b45(r),k,null,!0,!0,x.y),$async$BR)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mM(r.gc3().aD(0,$.bH(),x.A))
k=A.bB(r.gq_(),1,1,0,0,0,0)
o=A.bB(r.gq_(),12,31,0,0,0,0)
n=r.gq_()
m=r.x
if(m==null)m=C.ir
w=8
return A.j(q.wk("anlage_pkw",k,o,m,"Anlage PKW-Kosten "+n),$async$BR)
case 8:k=r.c
if(k!=null)k.O(x.q).f.aW(E.mi)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
k=r.c
if(k!=null)k.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$BR,v)}}
B.amP.prototype={
u(d){var w,v,u=null,t=A.aW(new A.b_(Date.now(),0,!1)),s=this.c,r=A.k("B\xf6rdesnack24 GbR, Steuernummer 102/178/01635, USt-IdNr. DE 458804058",u,u,u,A.D(C.p,12,C.l),u,u,u),q=x.p,p=A.b([],q)
for(w=t-4,v=t;v>=w;--v)p.push(new B.a1W(A.k(""+v,u,u,u,u,u,u,u),new B.bgj(this,v),v===s,u))
return A.ad(A.b([new A.fk("Anlage zum Jahresabschluss","Individuelle PKW-Kosten "+s,u,u),C.M,r,C.L,A.lo(C.cx,p,C.dI,0,8)],q),C.D,u,C.f,C.h,0)}}
B.al_.prototype={
dg(d,e){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=A.b([D.a8E,C.M,A.k("Alle Betr\xe4ge brutto. Bei einem privaten Fahrzeug gibt es keinen Vorsteuerabzug, die Umsatzsteuer geh\xf6rt also zu den Kosten.",p,p,p,A.D(C.p,12,C.l),p,p,p),C.u],o)
for(w=q.e,v=w.$ti,w=new A.aK(w,w.gp(0),v.i("aK<ag.E>")),u=q.f,t=q.r,s=q.w,v=v.i("ag.E");w.t();){r=w.d
C.b.K(n,A.b([new B.akZ(r==null?v.a(r):r,u,t,s,p),C.u],o))}return A.ad(n,C.D,p,C.f,C.h,0)}}
B.akZ.prototype={
dg(d,e){var w,v,u,t,s,r,q=this,p=null,o="satz_je_km",n=q.e,m=J.V(n),l=x.g.a(m.h(n,"kosten"))
if(l==null)l=C.bo
w=J.cG(l,x.P)
l=x.p
v=A.b([A.ap(A.b([A.az(A.k(A.i(m.h(n,"kennzeichen")),p,p,p,A.D(C.j,16,C.q),p,p,p),1),new B.aiH(B.c4z(m.h(n,o)),"je Kilometer",p)],l),C.k,p,C.f,C.h,0,p,p),C.u],l)
for(u=w.$ti,t=new A.aK(w,w.gp(0),u.i("aK<ag.E>")),s=q.r,u=u.i("ag.E");t.t();){r=t.d
if(r==null)r=u.a(r)
v.push(new B.amQ(r,s,new B.bcs(q,d,e,r),p))}if(w.gp(0)===0)v.push(A.k("F\xfcr "+q.f+" ist noch keine Kostenposition erfasst.",p,p,p,A.D(C.p,13,C.l),p,p,p))
v.push(C.Du)
u=B.uk(m.h(n,"gesamtkosten"))
v.push(new B.CG("Gesamtkosten",$.d3().am(u),!0,p))
v.push(new B.CG("Kilometerstand 01.01.",B.bsN(m.h(n,"km_stand_anfang")),!1,p))
v.push(new B.CG("Kilometerstand 31.12.",B.bsN(m.h(n,"km_stand_ende")),!1,p))
v.push(new B.CG("Gefahrene Kilometer",B.bsN(m.h(n,"km_gefahren")),!0,p))
if(m.h(n,o)==null)C.b.K(v,A.b([C.M,A.k("Ohne beide Kilometerst\xe4nde l\xe4sst sich kein Satz je Kilometer ermitteln. Fahrten mit diesem Fahrzeug bleiben so lange ohne Betrag.",p,p,p,A.D(C.an,12,C.l),p,p,p)],l))
if(!s)C.b.K(v,A.b([C.u,A.ad(A.b([A.fV(D.adE,D.aIt,new B.bct(q,d,e),p),A.fV(D.Fo,D.aHp,new B.bcu(q,d,e),p)],l),C.a8,p,C.f,C.h,8)],l))
return A.by(p,A.ad(v,C.D,p,C.f,C.h,0),p,p,C.C,p,3)},
uH(d,e,f){return this.aFv(d,e,f)},
aFv(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$uH=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:d={}
a0=J.V(a4)
d.a=A.i(a0.h(a4,"kostenart"))
i=C.d.ae(B.uk(a0.h(a4,"betrag_brutto")),2)
i=A.ay(i,".",",")
h=$.af()
q=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=a0.h(a4,"bezeichnung")
i=A.i(i==null?"":i)
p=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=x.N
w=3
return A.j(A.hk(null,null,!0,null,new B.bcl(d,q,p),a2,null,!0,!0,i),$async$uH)
case 3:o=a6
if(o==null||o==="abbrechen"){w=1
break}n=a3.aD(0,$.bH(),x.A)
t=5
w=o==="streichen"?8:10
break
case 8:m=A.i(a0.h(a4,"id"))
l=A.a4(["deleted_at",new A.b_(Date.now(),0,!1).dS()],i,i)
w=11
return A.j(n.cV("pkw_kosten").dq(0,l).iK("id",m),$async$uH)
case 11:w=9
break
case 10:i=C.c.aL(q.a.a)
g=A.fX(A.ay(i,",","."))
k=g==null?0:g
if(k<=0){if(a2.e!=null)a2.O(x.q).f.aW(D.Zb)
w=1
break}i=n.cV("pkw_kosten")
d=d.a
h=C.c.aL(p.a.a).length===0?null:C.c.aL(p.a.a)
f=x.z
w=12
return A.j(i.dq(0,A.a4(["kostenart",d,"betrag_brutto",k,"bezeichnung",h,"updated_at",new A.b_(Date.now(),0,!1).dS()],f,f)).iK("id",A.i(a0.h(a4,"id"))),$async$uH)
case 12:case 9:w=13
return A.j(r.w.$0(),$async$uH)
case 13:t=2
w=7
break
case 5:t=4
a1=s.pop()
j=A.a2(a1)
if(a2.e!=null)B.avH(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uH,v)},
xn(d,e){return this.aFu(d,e)},
aFu(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xn=A.m(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:j=r.e
i=J.V(j)
h=i.h(j,"km_stand_anfang")
h=h==null?null:J.am(h)
if(h==null)h=""
n=$.af()
m=new A.bw(new A.cz(h,C.bb,C.aG),n)
h=i.h(j,"km_stand_ende")
h=h==null?null:J.am(h)
if(h==null)h=""
l=new A.bw(new A.cz(h,C.bb,C.aG),n)
w=3
return A.j(A.hk(null,null,!0,null,new B.bce(r,m,l),d,null,!0,!0,x.y),$async$xn)
case 3:if(a0!==!0){w=1
break}q=A.iA(C.c.aL(m.a.a),null)
p=A.iA(C.c.aL(l.a.a),null)
if(q!=null&&p!=null&&p<q){if(d.e!=null)d.O(x.q).f.aW(D.aAV)
w=1
break}t=5
w=8
return A.j(e.aD(0,$.bH(),x.A).cV("pkw_jahr").ajv(A.a4(["pkw_id",i.h(j,"id"),"jahr",r.f,"km_stand_anfang",q,"km_stand_ende",p],x.N,x.z),"pkw_id,jahr"),$async$xn)
case 8:w=9
return A.j(r.w.$0(),$async$xn)
case 9:t=2
w=7
break
case 5:t=4
g=s.pop()
o=A.a2(g)
if(d.e!=null)B.avH(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xn,v)},
xo(d,e){return this.aFw(d,e)},
aFw(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xo=A.m(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h={}
h.a="tanken"
n=$.af()
m=new A.bw(C.a7,n)
q=new A.bw(C.a7,n)
w=3
return A.j(A.hk(null,null,!0,null,new B.bcr(h,r,m,q),d,null,!0,!0,x.y),$async$xo)
case 3:if(a0!==!0){w=1
break}n=C.c.aL(m.a.a)
l=A.fX(A.ay(n,",","."))
p=l==null?0:l
if(p<=0){if(d.e!=null)d.O(x.q).f.aW(D.Zb)
w=1
break}t=5
n=e.aD(0,$.bH(),x.A).cV("pkw_kosten")
k=J.a_(r.e,"id")
h=h.a
j=C.c.aL(q.a.a).length===0?null:C.c.aL(q.a.a)
w=8
return A.j(n.iM(0,A.a4(["pkw_id",k,"jahr",r.f,"kostenart",h,"betrag_brutto",p,"bezeichnung",j],x.N,x.z)),$async$xo)
case 8:w=9
return A.j(r.w.$0(),$async$xo)
case 9:t=2
w=7
break
case 5:t=4
g=s.pop()
o=A.a2(g)
if(d.e!=null)B.avH(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xo,v)}}
B.akY.prototype={
dg(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.p,e=A.b([D.a8w],f),d=h.w
if(!d)e.push(A.nw(D.Fo,D.aHd,h.f.gp(0)===0?g:new B.bca(h,a0,a1),g))
e=A.b([A.ap(e,C.k,g,C.f,C.h,0,g,g),C.M],f)
w=h.e
if(w.gp(0)===0)e.push(new B.VP("F\xfcr "+h.r+" ist noch keine betriebliche Fahrt erfasst.",C.p,D.abL,g))
else{v=A.b([D.Dk,D.a6i,D.a6r],x.G)
for(u=h.f,t=u.$ti,s=t.i("aK<ag.E>"),r=new A.aK(u,u.gp(0),s),t=t.i("ag.E");r.t();){q=r.d
v.push(new B.fn(A.k(A.i(J.a_(q==null?t.a(q):q,"kennzeichen")),g,g,g,g,g,g,g),!0))}v.push(D.a6j)
r=A.b([],x._)
for(q=w.$ti,w=new A.aK(w,w.gp(0),q.i("aK<ag.E>")),p=x.F,q=q.i("ag.E");w.t();){o=w.d
if(o==null)o=q.a(o)
n=d?g:new B.bcb(h,a0,a1,o)
m=J.V(o)
l=m.h(o,"fahrt_datum")
k=A.eT(A.i(l==null?"":l))
l=A.k(k==null?"":$.dp().am(k),g,g,g,g,g,g,g)
j=m.h(o,"anlass")
l=A.b([new B.fz(l),new B.fz(new A.dR(D.a0R,A.k(A.i(j==null?"":j),g,C.ak,g,g,g,g,g),g)),new B.fz(A.k(B.bsN(m.h(o,"kilometer")),g,g,g,g,g,g,g))],p)
for(j=new A.aK(u,u.gp(0),s);j.t();){i=j.d
if(J.d(J.a_(i==null?t.a(i):i,"id"),m.h(o,"pkw_id"))){i=m.h(o,"satz_je_km")
if(i==null)i="\u2014"
else{i=C.d.ae(B.uk(i),4)
i=A.ay(i,".",",")+" \u20ac"}}else i=""
l.push(new B.fz(A.k(i,g,g,g,g,g,g,g)))}if(m.h(o,"betrag")==null)o="\u2014"
else{o=B.uk(m.h(o,"betrag"))
o=$.d3().am(o)}l.push(new B.fz(A.k(o,g,g,g,g,g,g,g)))
r.push(new B.rc(n,l,g))}e.push(A.et(B.aBy(16,v,56,40,g,40,r),g,g,g,C.ay))}e.push(C.u)
e.push(A.by(g,A.ap(A.b([A.az(A.k("Nutzungseinlage "+h.r,g,g,g,A.D(C.j,15,C.q),g,g,g),1),A.k($.d3().am(h.x),g,g,g,A.D(C.j,17,C.q),g,g,g)],f),C.k,g,C.f,C.h,0,g,g),C.ae,g,C.C,g,3))
d=h.y
if(d>0){w=d===1?"":"en"
C.b.K(e,A.b([C.M,A.k(""+d+" Fahrt"+w+" ohne Kilometersatz. Diese Fahrten sind in der Summe nicht enthalten, weil f\xfcr das Fahrzeug Kilometerst\xe4nde oder Kosten fehlen.",g,g,g,A.D(C.an,12,C.l),g,g,g)],f))}return A.ad(e,C.D,g,C.f,C.h,0)},
uE(d,e,f){return this.axZ(d,e,f)},
axZ(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$uE=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:e={}
d=J.V(a4)
a0=A.eT(A.i(d.h(a4,"fahrt_datum")))
e.a=a0==null?A.bB(r.r,1,1,0,0,0,0):a0
e.b=A.i(d.h(a4,"pkw_id"))
i=d.h(a4,"anlass")
i=A.i(i==null?"":i)
h=$.af()
q=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=C.d.ae(B.uk(d.h(a4,"kilometer")),1)
i=A.ay(i,".",",")
p=new A.bw(new A.cz(i,C.bb,C.aG),h)
i=x.N
w=3
return A.j(A.hk(null,null,!0,null,new B.bc1(e,r,q,p),a2,null,!0,!0,i),$async$uE)
case 3:o=a6
if(o==null||o==="abbrechen"){w=1
break}n=a3.aD(0,$.bH(),x.A)
m=A.i(d.h(a4,"id"))
t=5
w=o==="streichen"?8:10
break
case 8:l=A.a4(["deleted_at",new A.b_(Date.now(),0,!1).dS()],i,i)
w=11
return A.j(n.cV("pkw_fahrten").dq(0,l).iK("id",m),$async$uE)
case 11:w=9
break
case 10:d=C.c.aL(p.a.a)
g=A.fX(A.ay(d,",","."))
k=g==null?0:g
if(k<=0||C.c.aL(q.a.a).length===0){if(a2.e!=null)a2.O(x.q).f.aW(D.Zc)
w=1
break}d=x.z
w=12
return A.j(n.cV("pkw_fahrten").dq(0,A.a4(["pkw_id",e.b,"fahrt_datum",C.c.a_(e.a.dS(),0,10),"anlass",C.c.aL(q.a.a),"kilometer",k,"updated_at",new A.b_(Date.now(),0,!1).dS()],d,d)).iK("id",m),$async$uE)
case 12:case 9:w=13
return A.j(r.z.$0(),$async$uE)
case 13:t=2
w=7
break
case 5:t=4
a1=s.pop()
j=A.a2(a1)
if(a2.e!=null)B.avH(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uE,v)},
xf(d,e){return this.ay_(d,e)},
ay_(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$xf=A.m(function(f,g){if(f===1){s.push(g)
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
return A.j(A.hk(null,null,!0,null,new B.bc9(k,r,q,n),d,null,!0,!0,x.y),$async$xf)
case 3:if(g!==!0){w=1
break}j=C.c.aL(n.a.a)
m=A.fX(A.ay(j,",","."))
p=m==null?0:m
if(p<=0||C.c.aL(q.a.a).length===0){if(d.e!=null)d.O(x.q).f.aW(D.Zc)
w=1
break}t=5
w=8
return A.j(e.aD(0,$.bH(),x.A).cV("pkw_fahrten").iM(0,A.a4(["pkw_id",k.b,"fahrt_datum",C.c.a_(k.a.dS(),0,10),"anlass",C.c.aL(q.a.a),"kilometer",p],x.N,x.aU)),$async$xf)
case 8:w=9
return A.j(r.z.$0(),$async$xf)
case 9:t=2
w=7
break
case 5:t=4
h=s.pop()
o=A.a2(h)
if(d.e!=null)B.avH(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xf,v)}}
B.atQ.prototype={
u(d){var w,v,u,t,s,r,q=null,p="Hanken Grotesk",o=this.c,n=A.aa(o),m=n.i("f4<1,f>"),l=A.Q(new A.f4(new A.bd(o,new B.bqQ(),n.i("bd<1>")),new B.bqR(),m),m.i("t.E"))
n=x.p
m=A.b([],n)
for(w=o.length,v=0;v<o.length;o.length===w||(0,A.G)(o),++v){u=o[v]
t=A.b9(q,q,C.r,C.p,q,q,q,1,q,D.a7Q,q,q,q,q)
s=J.V(u)
r=s.h(u,"full_name")
r=A.i(r==null?"":r)
r=A.k(r,q,q,q,new A.P(!0,C.j,q,p,C.bz,q,13,C.S,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)
s=s.h(u,"role_label")
s=A.i(s==null?"":s)
C.b.K(m,A.b([new A.kR(1,C.dX,new A.nX(A.ad(A.b([t,r,A.k(s,q,q,q,new A.P(!0,C.p,q,p,C.bz,q,11,C.l,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)],n),C.D,q,C.f,C.h,0),q,C.C,q,q,q,3,q),q),C.aF],n))}o=A.b([D.a8F,C.M,A.ap(m,C.k,q,C.f,C.h,0,q,q)],n)
if(l.length!==0)C.b.K(o,A.b([C.M,A.k("F\xfcr "+C.b.cj(l," und ")+" ist noch keine Unterschrift hinterlegt. Im PDF bleibt die Linie leer, bis die Unterschrift \xfcber DocuSign geholt wurde.",q,q,q,A.D(C.an,12,C.l),q,q,q)],n))
return A.ad(o,C.D,q,C.f,C.h,0)}}
B.amQ.prototype={
u(d){var w,v,u,t,s="kostenart",r=null,q=this.c,p=J.V(q),o=D.lV.h(0,A.i(p.h(q,s)))
if(o==null)o=A.i(p.h(q,s))
w=p.h(q,"bezeichnung")
v=C.c.aL(A.i(w==null?"":w))
q=B.uk(p.h(q,"betrag_brutto"))
u=$.d3().am(q)
q=x.p
p=A.b([A.k(o,r,r,r,A.D(C.aU,13,C.l),r,r,r)],q)
if(v.length!==0)p.push(A.k(v,1,C.ak,r,A.D(C.p,11,C.l),r,r,r))
p=A.b([A.az(A.ad(p,C.D,r,C.f,C.h,0),1),A.k(u,r,r,r,A.D(C.j,13,C.aI),r,r,r)],q)
w=this.d
if(!w)C.b.K(p,A.b([C.cE,D.adB],q))
t=new A.ai(D.a7V,A.ap(p,C.k,r,C.f,C.h,0,r,r),r)
if(w)return t
return A.bC(r,!0,r,A.eF(!1,r,!0,t,r,!0,r,r,r,r,r,r,r,r,r,r,r,this.e,r,r,r,r,r,r,r),!1,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,o+" "+u+" korrigieren",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.P,r)}}
B.arZ.prototype={
u(d){var w,v,u=null,t=this.d,s=t==null,r=s?u:t.h(0,"freigegeben_am"),q=A.eT(A.i(r==null?"":r))
t=s?u:t.h(0,"unterzeichner")
x.g.a(t)
if(t==null)t=C.bo
t=J.cW(t,new B.boT(),x.N).B2(0,new B.boU())
w=A.Q(t,t.$ti.i("t.E"))
t=A.k("Freigegeben und unterschrieben",u,u,u,A.D(C.j,14,C.q),u,u,u)
s=q==null?"":" seit "+$.dp().am(q)
r=w.length===0?"":", unterschrieben von "+C.b.cj(w," und ")
v=x.p
return A.by(u,A.ap(A.b([D.acZ,C.aF,A.az(A.ad(A.b([t,C.bW,A.k("Die Anlage "+this.c+" ist abgeschlossen"+s+r+". Korrekturen sind nicht mehr m\xf6glich, weder hier noch \xfcber einen anderen Weg.",u,u,u,A.D(C.aU,12,C.l),u,u,u),C.b3,A.k("Ist etwas falsch, geh\xf6rt die Berichtigung in eine neue Anlage. Ein unterschriebenes Dokument nachtr\xe4glich zu \xe4ndern, w\xe4re keine Korrektur.",u,u,u,A.D(C.p,12,C.l),u,u,u)],v),C.D,u,C.f,C.h,0),1)],v),C.D,u,C.f,C.h,0,u,u),C.ae,u,C.C,u,3)}}
B.CG.prototype={
u(d){var w=null,v=this.e,u=v?C.S:C.l
u=A.az(A.k(this.c,w,w,w,A.D(v?C.j:C.aU,13,u),w,w,w),1)
return new A.ai(D.DJ,A.ap(A.b([u,A.k(this.d,w,w,w,A.D(C.j,13,v?C.q:C.aI),w,w,w)],x.p),C.k,w,C.f,C.h,0,w,w),w)}}
B.aiH.prototype={
u(d){var w=null,v=A.aR(9999),u=A.cP(C.m.f_(0.5),1)
return A.b9(w,A.ad(A.b([A.k(this.c,w,w,w,A.D(C.m,13,C.q),w,w,w),A.k(this.d,w,w,w,A.D(C.m,9,C.l),w,w,w)],x.p),C.fR,w,C.f,C.h,0),C.r,w,w,new A.b5(C.bm,w,u,v,w,w,C.G),w,w,w,w,D.a7Y,w,w,w)}}
B.VP.prototype={
u(d){var w=null
return A.by(w,A.ap(A.b([A.co(this.e,this.d,w,w),C.aF,A.az(A.k(this.c,w,w,w,A.D(C.j,14,C.l),w,w,w),1)],x.p),C.D,w,C.f,C.h,0,w,w),C.ae,w,C.C,w,3)}}
B.a0C.prototype={
u(d){var w=null
return A.dT(D.a9G,w,A.dG(A.b([D.axV,C.M,A.k("\xdcbersichten, die Dein Steuerberater zum Jahresabschluss braucht. Jede l\xe4sst sich als PDF ausgeben und von beiden Gesellschaftern freigeben.",w,w,w,A.D(C.p,13,C.l),w,w,w),C.aQ,B.bWO(w,"Kilometersatz und Nutzungseinlage",C.nX,w,w,w,"PKW-Kosten",new B.awW(d))],x.p),C.cj,w,C.K,!1),w,w)}}
B.a52.prototype={
dg(d,e){return A.dT(D.a9k,null,A.dz(e.an($.bwN(),x.w),new B.aCE(e),new B.aCF(),new B.aCG(),!1,!0,!1,x.D,x.E),null,null)}}
B.akL.prototype={
u(d){return D.a3l}}
B.ahy.prototype={
aMA(d){switch(d){case"approved":return C.aE
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
u=new B.b4j()
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
l=new B.b4i(g,n,a2,a1,a0==null?f:J.am(a0),m,a3,o)
a0=q?l:f
p=g.aMA(a1)
e=d.h(e,"title")
e=e==null?f:J.am(e)
if(e==null)e=""
e=A.az(A.k(e,f,f,f,A.D(C.j,15,C.q),f,f,f),1)
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
i=A.b([d,C.b3,A.k("Zeitraum: "+e+" \u2013 "+k+i,f,f,f,A.D(C.p,11,C.l),f,f,f),C.u],j)
for(e=J.bh(v);e.t();)i.push(new B.ajS(e.gN(e),f))
if(a1==="pending"&&w==="pending")C.b.K(i,A.b([C.u,A.ap(A.b([A.az(A.hb(C.o3,D.aHh,new B.b4g(g,a2,a3),A.dK(C.kH,C.A,f,f,f,f,f)),1),C.aV,A.az(A.fV(C.Fg,C.ms,new B.b4h(g,a2,a3),A.oE(f,f,f,f,f,f,f,f,f,C.an,f,f,f,f,f,D.BA,f,f,f,f)),1)],j),C.k,f,C.f,C.h,0,f,f)],j))
if(n)C.b.K(i,A.b([C.u,A.ap(A.b([D.Fd,C.aZ,A.az(A.k("Tippen zum \xd6ffnen des signierten PDFs",f,f,f,A.D(C.m,11,C.S),f,f,f),1),D.adp],j),C.k,f,C.f,C.h,0,f,f)],j))
h=A.by(f,A.ad(i,C.D,f,C.f,C.h,0),f,a0,C.ai,p,3)
return new A.ai(C.dU,q?A.A2(h,0.6):h,f)},
Ct(d,e,f){return this.aHV(d,e,f)},
aHV(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Ct=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(f.length===0){w=1
break}r=d.O(x.q).f
r.aW(D.aAE)
q=e.aD(0,$.bwO(),x.u)
t=4
w=7
return A.j(q.GZ(f),$async$Ct)
case 7:p=h
if(p==null||p.length===0){m=A.e7("Kein Signed-URL verf\xfcgbar")
throw A.e(m)}w=8
return A.j(A.mH(A.cm(p,0,null),C.em,"_blank"),$async$Ct)
case 8:o=h
if(!o&&d.e!=null)r.aW(A.c5(new B.GP("Link kopieren",new B.b4f(p),null),null,null,null,null,C.n,null,D.aH_,null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.a2(k)
if(d.e!=null)r.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Ct,v)},
uw(d,e,f){return this.awn(d,e,f)},
awn(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$uw=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:m=null
w=f==="rejected"?3:5
break
case 3:w=6
return A.j(A.hk(null,null,!0,null,new B.b4d(new A.bw(C.a7,$.af()),d),d,null,!0,!0,x.N),$async$uw)
case 6:m=h
if(m==null||C.c.aL(m).length<3){w=1
break}w=4
break
case 5:w=7
return A.j(A.kE(null,new B.b4e(),d,!0,null,null,x.y),$async$uw)
case 7:if(h!==!0){w=1
break}case 4:t=9
p=e.aD(0,$.bwO(),x.u)
o=J.a_(r.e,"id")
o=o==null?null:J.am(o)
if(o==null)o=""
w=12
return A.j(p.LD(o,m,f),$async$uw)
case 12:if(d.e!=null){p=$.bwN()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(p)
p=d.O(x.q).f
p.aW(A.c5(null,null,null,null,null,C.n,null,A.k(f==="approved"?"Freigegeben \u2014 signiertes PDF wird erzeugt.":"Abgelehnt.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=11
break
case 9:t=8
l=s.pop()
q=A.a2(l)
if(d.e!=null)d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=11
break
case 8:w=2
break
case 11:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uw,v)}}
B.Cq.prototype={
W(){return new B.Yr()}}
B.Yr.prototype={
au(){this.aM()
this.IM()},
IM(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$IM=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
q=r.gc3().aD(0,$.bH(),x.A)
l=q.gdX().e.a
l=l==null?null:l.r
p=l==null?null:l.a
if(p==null){w=1
break}w=7
return A.j(q.cV("partner_signatures").ho(0,"id, full_name, docusign_signature_uri, image_url, captured_via").iK("profile_id",p),$async$IM)
case 7:o=e
n=J.cG(o,x.P)
r.J(new B.bo5(r,n))
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a2(j)
r.J(new B.bo6(r,m))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$IM,v)},
JY(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$JY=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.boa(q))
t=4
k=q.gc3().aD(0,$.bH(),x.A).ax
k===$&&A.a()
j=q.w
j.toString
w=7
return A.j(k.jP("docusign-fetch-signature",A.a4(["signature_id",J.a_(j,"id")],x.N,x.z)),$async$JY)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}o=p.a
k=x.f
if(k.b(o)&&J.d(J.a_(o,"ok"),!0)){k=q.c
if(k!=null)A.b6(k,!1).cE(!0)}else{if(k.b(o)){j=J.a_(o,"error")
j=j==null?null:J.am(j)
i=j==null?A.i(o):j}else i=A.i(o)
n=i
if(k.b(o)){k=J.a_(o,"hint")
h=k==null?null:J.am(k)}else h=null
m=h
q.J(new B.bob(q,m,n))}r.push(6)
w=5
break
case 4:t=3
f=s.pop()
l=A.a2(f)
q.J(new B.boc(q,l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bod(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$JY,v)},
uZ(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$uZ=A.m(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.boe(q))
t=4
w=7
return A.j($.aFD.cd().b_d(C.a90,!0),$async$uZ)
case 7:p=a1
if(p==null||J.ev(p.a)){q.J(new B.bof(q))
r=[1]
w=5
break}o=J.Kk(p.a)
n=o.c
if(n==null){q.J(new B.bog(q))
r=[1]
w=5
break}m=q.gc3().aD(0,$.bH(),x.A)
h=C.b.gaf(o.b.split(".")).toLowerCase()
l=h
g=q.w
g.toString
k=A.i(J.a_(g,"id"))+"."+A.i(l)
g=m.ay
g===$&&A.a()
g=g.cV("partner-signatures")
f=J.d(l,"jpg")||J.d(l,"jpeg")?"image/jpeg":"image/png"
w=8
return A.j(g.Am(k,n,new A.Er(!0,f)),$async$uZ)
case 8:f=m.ay
f===$&&A.a()
w=9
return A.j(f.cV("partner-signatures").nR(k,31536e3),$async$uZ)
case 9:j=a1
f=q.w
f.toString
g=x.z
w=10
return A.j(m.ev("set_partner_signature_image",A.a4(["p_signature_id",J.a_(f,"id"),"p_image_url",j,"p_captured_via","manual"],x.N,g),g),$async$uZ)
case 10:g=q.c
if(g!=null)A.b6(g,!1).cE(!0)
r.push(6)
w=5
break
case 4:t=3
d=s.pop()
i=A.a2(d)
q.J(new B.boh(q,i))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.boi(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uZ,v)},
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
t=A.b([A.k("Signatur f\xfcr Freigabe w\xe4hlen",o,o,o,A.c8(C.j,20,C.q),o,o,o),C.M,A.k("Deine Unterschrift wird im signierten PDF als Freigabe-Stempel eingebettet.",o,o,o,A.D(C.p,13,C.l),o,o,o),C.L],u)
if(p.x)t.push(C.bF)
else if(l)t.push(A.by(C.an,A.k("F\xfcr Dein Konto ist kein Signatur-Slot verkn\xfcpft. Bitte einen System-Admin bitten, partner_signatures.profile_id auf Deine Profil-ID zu setzen.",o,o,o,A.D(C.j,13,C.l),o,o,o),C.eJ,o,C.C,o,3))
else{l=A.b([],u)
if(v){s=A.cP(C.am,1)
r=A.aR(12)
q=p.w
q.toString
q=J.a_(q,n)
q=q==null?o:J.am(q)
if(q==null)q=""
l.push(A.b9(C.W,A.aJw(q,new B.bom(),C.w1,o,o,o,o),C.r,o,o,new A.b5(C.ae,o,s,r,o,o,C.G),o,80,o,C.dU,o,o,o,o))}s=p.y||!w?o:p.gaMJ()
l.push(A.hb(D.adh,D.aHR,s,A.dK(C.m,C.A,o,C.el,o,o,o)))
if(!w)l.push(new A.ai(C.hY,A.k("Kein DocuSign-Signatur-Slot hinterlegt.",o,o,o,A.D(C.p,10,C.l),o,o,o),o))
l.push(C.M)
s=p.y?o:p.gaOq()
l.push(A.fV(D.acq,D.aGL,s,A.oE(o,o,o,o,o,o,o,o,o,C.j,o,o,C.el,o,o,C.w0,o,o,o,o)))
l.push(C.M)
s=p.y?o:new B.bon(d)
l.push(A.d7(A.k(v?"Diese Signatur verwenden":"Ohne Signatur freigeben (Platzhalter)",o,o,o,o,o,o,o),o,o,s,o,o))
C.b.K(t,l)}l=p.z
if(l!=null)C.b.K(t,A.b([C.u,A.k(l,o,o,o,A.D(C.an,12,C.l),o,o,o)],u))
t.push(C.M)
t.push(A.d7(C.bZ,o,o,p.y?o:new B.boo(d),o,o))
return new A.ai(new A.al(0,0,0,m.f.d),A.et(A.ad(t,C.a8,o,C.f,C.H,0),o,C.C,o,C.K),o)}}
B.ajS.prototype={
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
if(r){q=C.i3
break A}if("rejected"===o){q=C.Ez
break A}q=C.EJ
break A}B:{if(r){p=C.aE
break B}if("rejected"===o){p=C.an
break B}p=C.m
break B}p=A.co(q,p,s,16)
C:{if(r){r="freigegeben"
break C}if("rejected"===o){r="abgelehnt"
break C}r="ausstehend"
break C}q=v==null?"":" \xb7 "+v
t=x.p
q=A.b([A.k(w+" \u2014 "+r+q,s,s,s,A.D(C.j,12,C.S),s,s,s)],t)
if((u==null?s:u.length!==0)===!0)q.push(A.k("\u201e"+A.i(u)+'"',s,s,s,A.D(C.p,11,C.l),s,s,s))
return new A.ai(C.a7H,A.ap(A.b([p,C.aZ,A.az(A.ad(q,C.D,s,C.f,C.h,0),1)],t),C.k,s,C.f,C.h,0,s,s),s)}}
B.L_.prototype={
W(){return new B.TP()}}
B.TP.prototype={
Hy(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m
var $async$Hy=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b4L(r))
u=3
o=r.gc3().aD(0,$.ec(),x.cu)
w=6
return A.j(o.eo(o.a.gaQa(),x.N),$async$Hy)
case 6:q=e
r.J(new B.b4M(r,q))
s.push(5)
w=4
break
case 3:u=2
m=t.pop()
p=A.a2(m)
o=r.c
if(o!=null)o.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.b4N(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Hy,v)},
I_(){var w=0,v=A.q(x.H),u,t=this,s
var $async$I_=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.w
if(s==null){w=1
break}w=3
return A.j(B.bBx(s),$async$I_)
case 3:case 1:return A.o(u,v)}})
return A.p($async$I_,v)},
u(d){var w,v=this,u=null,t=A.k("Exportiert alle Unternehmer-Kunden (customer_type = business) als CSV-Datei im sevDesk-Import-Format. Semikolon-getrennt, UTF-8, eine Zeile pro Kunde. Import in sevDesk unter Stammdaten \u2192 Kunden \u2192 Importieren.",u,u,u,A.D(C.p,13,C.l),u,u,u),s=v.x,r=s?u:v.gatg()
s=s?C.v_:D.Fi
w=x.p
r=A.b([t,C.aQ,A.hb(s,D.aHl,r,A.dK(C.m,C.A,u,C.hX,u,u,u)),C.u],w)
if(v.w!=null){t=A.fV(E.Fe,D.aHe,v.gaxf(),A.oE(u,u,u,u,u,u,u,u,u,C.j,u,u,C.hX,u,u,C.kz,u,u,u,u))
s=v.w
s.toString
C.b.K(r,A.b([t,C.u,A.by(u,A.aYx(s,A.D(C.j,12,C.l).aRh("monospace")),u,u,C.dC,u,3)],w))}return A.dT(D.a9q,u,A.dG(r,C.C,u,C.K,!1),u,u)}}
B.Lp.prototype={
W(){return new B.U8()}}
B.U8.prototype={
au(){this.aM()
this.w=this.wZ()},
wZ(){var w=0,v=A.q(x.D),u,t=this,s
var $async$wZ=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A
w=3
return A.j(t.gc3().aD(0,$.bH(),x.A).cV("cancellation_requests").ho(0,"id, email, customer_number, kind, reason, cancel_at, requested_at, processed_at").qK(0,"requested_at",!1),$async$wZ)
case 3:u=s.eq(e,!0,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$wZ,v)},
IR(d){return this.aG4(d)},
aG4(d){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$IR=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:r=t.gc3().aD(0,$.bH(),x.A)
q=r.cV("cancellation_requests")
p=new A.b_(Date.now(),0,!1).A9().dS()
o=r.gdX().e.a
o=o==null?null:o.r
o=o==null?null:o.a
s=x.z
w=3
return A.j(q.dq(0,A.a4(["processed_at",p,"processed_by",o],s,s)).iK("id",d),$async$IR)
case 3:if(t.c==null){w=1
break}t.J(new B.b6l(t))
case 1:return A.o(u,v)}})
return A.p($async$IR,v)},
ayy(d){var w,v
if(d==null||d.length===0)return"\u2014"
w=A.eT(d)
v=w==null?null:w.FM()
if(v==null)return d
w=new B.b6k()
return A.i(w.$1(A.bV(v)))+"."+A.i(w.$1(A.bi(v)))+"."+A.aW(v)+", "+A.i(w.$1(A.hB(v)))+":"+A.i(w.$1(A.vS(v)))+" Uhr"},
u(d){var w=this.w
w===$&&A.a()
return A.dT(D.a9m,C.ch,A.ig(A.yS(new B.b6p(this),w,x.D),C.m,new B.b6q(this)),null,null)}}
B.aiu.prototype={
u(d){var w,v,u,t,s,r="processed_at",q=null,p="customer_number",o=this.c,n=J.V(o),m=n.h(o,r)==null,l=!m,k=J.d(n.h(o,"kind"),"ausserordentlich"),j=l?C.am:C.dz,i=n.h(o,"email")
i=A.az(A.k(J.am(i==null?"":i),q,C.ak,q,A.D(C.j,14,C.q),q,q,q),1)
w=l?C.aE.f_(0.12):C.dz.f_(0.14)
v=A.cP(l?C.aE:C.dz,0.8)
u=A.aR(9999)
t=l?"BEARBEITET":"OFFEN"
s=x.p
u=A.ap(A.b([i,A.b9(q,A.k(t,q,q,q,A.D(l?C.aE:C.dz,10,C.q).fZ(0.6),q,q,q),C.r,q,q,new A.b5(w,q,v,u,q,q,C.G),q,q,q,q,C.xb,q,q,q)],s),C.k,q,C.f,C.h,0,q,q)
i=k?"Au\xdferordentliche":"Ordentliche"
w=n.h(o,"cancel_at")
i=A.k(i+" K\xfcndigung \xb7 "+J.am(w==null?"":w),q,q,q,A.D(C.j,12,C.S),q,q,q)
w=this.d
v=A.i(w.$1(A.ak(n.h(o,"requested_at"))))
t=n.h(o,p)!=null?" \xb7 Kd-Nr. "+A.i(n.h(o,p)):""
t=A.b([u,C.M,i,A.k("Eingegangen: "+v+t,q,q,q,A.D(C.p,12,C.l),q,q,q)],s)
i=n.h(o,"reason")
if(J.am(i==null?"":i).length!==0)C.b.K(t,A.b([C.M,A.k("Grund: "+A.i(n.h(o,"reason")),q,q,q,A.D(C.aU,12,C.l),q,q,q)],s))
if(l)t.push(A.k("Bearbeitet: "+A.i(w.$1(A.ak(n.h(o,r)))),q,q,q,A.D(C.aE,12,C.l),q,q,q))
if(m)C.b.K(t,A.b([C.u,A.fV(D.acP,D.aHc,this.e,q)],s))
return A.by(j,A.ad(t,C.D,q,C.f,C.h,0),q,q,C.C,q,3)}}
B.a1Q.prototype={
u(d){return B.Q6("collected_at","cash",new B.azp(),new B.azq(),new B.azr(),"cash_collection_logs","Geldentnahme")}}
B.Bx.prototype={
W(){var w=$.af()
return new B.Ub(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(new A.cz("0",C.bb,C.aG),w))}}
B.Ub.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
auw(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hT()
if(s!==!0)return
s=t.c
s.toString
s=A.b6(s,!1)
w=t.z
v=t.x.a.a
v=A.JY(A.ay(v,",","."))
u=t.y.a.a
if(u.length===0)u="0"
s.cE(A.a4(["machine_id",w,"amount_gross",v,"change_amount",A.JY(A.ay(u,",",".")),"collected_at",new A.b_(Date.now(),0,!1).dS()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ai(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.k("Geldentnahme erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OO(new B.b6u(w),w.z),C.u,A.db(v,!1,w.x,D.aeh,v,C.ez,1,!1,v,v,C.X,v,new B.b6v()),C.u,A.db(v,!1,w.y,D.ael,v,C.ez,1,!1,v,v,C.X,v,v),C.L,A.dl(C.dt,w.gauv(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.a2b.prototype={
u(d){return B.Q6("cleaned_at","cleaning",new B.aA2(),new B.aA3(),new B.aA4(),"cleaning_logs","Reinigung")}}
B.BA.prototype={
W(){var w=$.af()
return new B.Um(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.Um.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
av8(){var w,v,u,t,s=this,r=s.w.ga1()
r=r==null?null:r.hT()
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
r.cE(A.a4(["machine_id",w,"cleaning_type",v,"agent",u,"notes",t,"photo_path",s.as,"cleaned_at",new A.b_(Date.now(),0,!1).dS()],x.N,x.T))},
u(d){var w=this,v=null
return new A.ai(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.k("Reinigung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OO(new B.b7h(w),w.z),C.u,A.k1(D.af4,w.Q,!1,D.ak6,new B.b7i(w),v,x.N),C.u,A.db(v,!1,w.x,D.aeG,v,v,1,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.y,D.aeq,v,v,2,!1,v,v,C.X,v,v),C.u,new B.FK(new B.b7j(w),v),C.L,A.dl(C.dt,w.gav7(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.LZ.prototype={
W(){return new B.Uo()}}
B.Uo.prototype={
au(){this.aM()
this.w=this.x_()},
x_(){var w=0,v=A.q(x.D),u,t=this,s
var $async$x_=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A
w=3
return A.j(t.gc3().aD(0,$.bH(),x.A).cV("purchase_complaints").ho(0,"id, kind, comment, status, resolution_note, created_at, purchase:purchases(purchased_at, total_gross), customer:customers(customer_number)").qK(0,"created_at",!1),$async$x_)
case 3:u=s.eq(e,!0,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$x_,v)},
xJ(d,e,f){return this.aLP(d,e,f)},
aLO(d,e){return this.xJ(d,e,!1)},
aLP(d,e,f){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o,n
var $async$xJ=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=f?3:5
break
case 3:s=A.ak(J.a_(d,"resolution_note"))
if(s==null)s=""
r=new A.bw(new A.cz(s,C.bb,C.aG),$.af())
s=t.c
s.toString
w=6
return A.j(A.hk(null,null,!0,null,new B.b7v(e,r),s,null,!0,!0,x.y),$async$xJ)
case 6:if(h!==!0){w=1
break}q=C.c.aL(r.a.a)
if(q.length===0)q=null
w=4
break
case 5:q=null
case 4:p=t.gc3().aD(0,$.bH(),x.A)
s=p.cV("purchase_complaints")
o=x.z
o=A.z(o,o)
o.m(0,"status",e)
if(f)o.m(0,"resolution_note",q)
n=p.gdX().e.a
n=n==null?null:n.r
o.m(0,"updated_by",n==null?null:n.a)
w=7
return A.j(s.dq(0,o).iK("id",A.aI(J.a_(d,"id"))),$async$xJ)
case 7:if(t.c==null){w=1
break}t.J(new B.b7w(t))
case 1:return A.o(u,v)}})
return A.p($async$xJ,v)},
u(d){var w=this.w
w===$&&A.a()
return A.dT(D.a9w,C.ch,A.yS(new B.b7B(this),w,x.D),null,null)}}
B.HT.prototype={
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
l=A.az(A.k(w.b,f,f,f,A.D(C.j,14,C.q),f,f,f),1)
k=u.a
j=A.cP(k,1)
i=A.aR(9999)
h=x.p
i=A.ap(A.b([m,C.aZ,l,A.b9(f,A.k(u.b,f,f,f,A.D(k,10,C.q).fZ(0.6),f,f,f),C.r,f,f,new A.b5(f,f,j,i,f,f,C.G),f,f,f,f,C.xb,f,f,f)],h),C.k,f,C.f,C.h,0,f,f)
m=s==null?f:J.a_(s,"customer_number")
m=A.i(m==null?"\u2014":m)
l=p!=null?$.dp().am(p):"\u2014"
k=A.b4(a1?f:J.a_(t,"total_gross"))
a1=k==null?0:k
a1=$.d3().am(a1)
k=r!=null?$.dp().am(r):"\u2014"
k=A.b([i,C.M,A.k("Kunde "+m+" \xb7 Kauf "+l+" \xfcber "+a1+" \xb7 gemeldet "+k,f,f,f,A.D(C.p,12,C.l),f,f,f)],h)
a1=A.ak(a0.h(d,"comment"))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.M,A.k("\u201e"+A.i(a0.h(d,"comment"))+'"',f,f,f,A.D(C.j,13,C.l).ep(1.4),f,f,f)],h))
a1=A.ak(a0.h(d,e))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.M,A.k("Antwort: "+A.i(a0.h(d,e)),f,f,f,A.D(C.p,12,C.l).ep(1.35),f,f,f)],h))
if(o){d=A.b([],h)
if(q)d.push(A.fV(D.acc,D.aGu,new B.b7q(g),A.oE(f,f,f,f,f,f,f,f,f,C.j,f,f,f,f,f,C.kz,f,f,f,f)))
d.push(A.hb(D.acL,D.ZM,new B.b7r(g),A.dK(C.bU,C.m,f,f,f,f,f)))
d.push(A.fV(D.acQ,C.ms,new B.b7s(g),A.oE(f,f,f,f,f,f,f,f,f,C.an,f,f,f,f,f,D.BA,f,f,f,f)))
C.b.K(k,A.b([C.u,A.lo(C.cx,d,C.dI,8,8)],h))}return A.by(f,A.ad(k,C.D,f,C.f,C.h,0),f,f,C.ai,n,3)}}
B.a51.prototype={
u(d){return B.Q6("disposed_at","disposal",new B.aCA(),new B.aCB(),new B.aCC(),"disposal_logs","Vernichtung")}}
B.BI.prototype={
W(){var w=$.af()
return new B.V3(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.V3.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
awX(){var w,v,u,t,s,r,q=this,p=null,o=q.w.ga1()
o=o==null?p:o.hT()
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
r=r==null?p:C.c.a_(r.dS(),0,10)
o.cE(A.a4(["machine_id",w,"product_id",v,"product_label",u,"quantity",t,"reason",s,"mhd_date",r,"photo_path",q.ax,"disposed_at",new A.b_(Date.now(),0,!1).dS()],x.N,x.X))},
u(d){var w=this,v=null,u=w.gc3().an($.bDS(),x.w),t=A.bD(d,v,x.m).w,s=A.k("Vernichtung erfassen",v,v,v,A.W(d).ok.r,v,v,v),r=B.OO(new B.bak(w),w.z),q=B.axD(u,new B.bal(w),new B.bam(),x.D,x.l),p=A.db(v,!1,w.y,D.aem,v,v,1,!1,v,v,C.X,v,new B.ban()),o=A.db(v,!1,w.x,D.aeR,v,C.cY,1,!1,v,v,C.X,v,new B.bao()),n=A.k1(D.aeU,w.as,!1,D.akm,new B.bap(w),v,x.N),m=w.at
return new A.ai(new A.al(0,0,0,t.f.d),A.et(A.k4(v,A.ad(A.b([s,C.L,r,C.u,q,C.u,p,C.u,o,C.u,n,C.M,A.rM(!1,C.a9,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.baq(w,d),!1,v,v,v,v,v,v,A.k(m==null?"MHD-Datum (optional)":"MHD: "+C.c.a_(m.dS(),0,10),v,v,v,v,v,v,v),v,C.yp,v),C.M,new B.FK(new B.bar(w),v),C.M,A.dl(C.dt,w.gawW(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.MH.prototype={
W(){return new B.akk()}}
B.akk.prototype={
au(){this.aM()
if(!$.bJQ){$.bJQ=!0
A.byu(new B.bbd(this),x.a)}},
u(d){var w=this,v=null,u=w.gc3(),t=x.w,s=u.an($.Kc(),t),r=u.an($.bwP(),t)
t=B.axD(u.an($.bx_(),x.i),new B.bb9(),new B.bba(),x.C,x.y)?B.a5Q(C.m,C.A,D.acC,D.ZN,new B.bbb(w,d)):v
return A.dT(D.a9I,v,A.ad(A.b([new B.EF(A.b([new B.v8(D.abJ,"Pr\xfcfer-Export als ZIP",new B.bbc(w,d),C.m,v,w.y)],x.B),D.DP,v),A.az(w.atq(0,d,u,s,r),1)],x.p),C.k,v,C.f,C.h,0),v,t)},
atq(d,e,f,g,h){return A.dz(g,new B.baM(this,h,f,B.axD(f.an($.bx_(),x.i),new B.baN(),new B.baO(),x.C,x.y),e),new B.baP(),new B.baQ(),!1,!0,!1,x.D,x.l)},
x7(d,e,f,g){return this.aHS(0,e,f,g)},
aHS(d,e,f,a0){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$x7=A.m(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:j=J.V(a0)
i=j.h(a0,"latest_file_path")
h=i==null?null:J.am(i)
if(h==null||h.length===0){e.O(x.q).f.aW(D.aAz)
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
case 7:j=f.aD(0,$.bH(),x.A).ay
j===$&&A.a()
w=9
return A.j(j.cV("documents").nR(h,86400),$async$x7)
case 9:o=a2
case 8:if(e.e==null){w=1
break}w=q||p?10:12
break
case 10:w=13
return A.j(B.bC2(e,r,o),$async$x7)
case 13:w=11
break
case 12:w=14
return A.j(A.mH(A.cm(o,0,null),C.em,null),$async$x7)
case 14:if(e.e!=null)e.O(x.q).f.aW(D.aAP)
case 11:t=2
w=6
break
case 4:t=3
g=s.pop()
n=A.a2(g)
if(e.e!=null)e.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x7,v)},
wW(d,e,f){return this.asV(d,e,f)},
asV(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$wW=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.j($.aFD.cd().zG(D.ao_,C.xR,!0),$async$wW)
case 3:j=h
if(j==null||J.ev(j.a)){w=1
break}r=J.qV(j.a)
if(r.c==null){w=1
break}t=5
n=e.aD(0,$.bDW(),x.Z)
m=r.b
l=r.c
l.toString
w=8
return A.j(n.b1J(0,"documents",l,m),$async$wW)
case 8:q=h
m=x.z
w=9
return A.j(e.aD(0,$.bH(),x.A).ev("add_document_version",A.a4(["p_document",f,"p_file_path",q,"p_notes",r.b],x.N,m),m),$async$wW)
case 9:if(d.e==null){w=1
break}n=$.Kc()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(n)
p=C.c.hs(r.b.toLowerCase(),".pdf")
n=d.O(x.q).f
n.aW(A.c5(null,null,null,null,null,C.n,null,A.k(p?"Neue Version gespeichert.":"Version gespeichert. Hinweis: Nicht-PDFs werden beim \xd6ffnen heruntergeladen \u2014 PDF ist ideal f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
i=s.pop()
o=A.a2(i)
if(d.e==null){w=1
break}d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Upload fehlgeschlagen: "+A.i(o),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$wW,v)},
CR(d,e,f){return this.aLS(d,e,f)},
aLS(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$CR=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:o=J.V(f)
n=o.h(f,"valid_until")
m=n==null?null:J.am(n)
l=m!=null&&m.length!==0?A.eT(m):null
n=l==null?new A.b_(Date.now(),0,!1).uu(31536e9):l
w=3
return A.j(A.pf(d,A.bB(2020,1,1,0,0,0,0),null,n,A.bB(2100,1,1,0,0,0,0),C.eq),$async$CR)
case 3:r=h
if(r==null){w=1
break}t=5
n=x.z
w=8
return A.j(e.aD(0,$.bH(),x.A).ev("set_document_valid_until",A.a4(["p_document",o.h(f,"id"),"p_valid_until",C.c.a_(r.dS(),0,10)],x.N,n),n),$async$CR)
case 8:if(d.e==null){w=1
break}o=$.Kc()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(o)
d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("G\xfcltig bis "+$.dp().am(r)+".",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
k=s.pop()
q=A.a2(k)
if(d.e==null){w=1
break}d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CR,v)},
CM(d,e,f){return this.aKk(d,e,f)},
aKk(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$CM=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.j(A.hk(null,null,!0,null,new B.bb6(f,d),d,null,!0,!0,x.y),$async$CM)
case 3:if(h!==!0){w=1
break}t=5
r=e.aD(0,$.bH(),x.A)
o=x.N
n=x.z
w=8
return A.j(r.ev("request_document_review",A.a4(["p_document",J.a_(f,"id")],o,n),n),$async$CM)
case 8:q=h
n=r.ax
n===$&&A.a()
n.jP("approval-notify",A.a4(["approval_id",J.am(q),"phase","requested"],o,o)).dw(new B.bb7(),new B.bb8(),x.H)
if(d.e==null){w=1
break}d.O(x.q).f.aW(E.mi)
t=2
w=7
break
case 5:t=4
l=s.pop()
p=A.a2(l)
if(d.e==null){w=1
break}d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CM,v)},
xm(d,e,f){return this.aFa(d,e,f)},
aFa(a3,a4,a5){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$xm=A.m(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:d={}
a0=a4.aD(0,$.bH(),x.A)
d.a=null
t=4
w=7
return A.j(a0.h4("list_employees_for_signature",x.z),$async$xm)
case 7:r=a7
m=d.a=J.cG(x.j.a(r),x.P)
t=2
w=6
break
case 4:t=3
a1=s.pop()
q=A.a2(a1)
if(a3.e!=null)a3.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=1
break
w=6
break
case 3:w=2
break
case 6:if(m.gp(0)===0){if(a3.e!=null)a3.O(x.q).f.aW(D.aAT)
w=1
break}m=x.N
p=A.b3(m)
if(a3.e==null){w=1
break}w=8
return A.j(A.hk(null,null,!0,null,new B.bb3(d,p),a3,null,!0,!0,x.y),$async$xm)
case 8:if(a7!==!0||p.a===0){w=1
break}t=10
k=p,k=A.d2(k,k.r,A.l(k).c),j=J.V(a5),i=x.z,h=k.$ti.c
case 13:if(!k.t()){w=14
break}g=k.d
o=g==null?h.a(g):g
g=a0
f=A.a4(["p_document",j.h(a5,"id"),"p_employee",o],m,i)
e=g.CW
e===$&&A.a()
e.b.K(0,A.mU(g.x,m,m))
w=15
return A.j(e.b0Q("invite_employee_signature",!1,f,i),$async$xm)
case 15:w=13
break
case 14:if(a3.e==null){w=1
break}m=$.bDl().$1(A.aI(j.h(a5,"id")))
if(a4.e==null)A.U(A.Z(y.b))
a4.gcv().cs(m)
a3.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k(""+p.a+" Mitarbeiter eingeladen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=12
break
case 10:t=9
a2=s.pop()
n=A.a2(a2)
if(a3.e==null){w=1
break}a3.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=12
break
case 9:w=2
break
case 12:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xm,v)},
xd(d,e){return this.axX(d,e)},
axX(d,e){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xd=A.m(function(f,a0){if(f===1){t.push(a0)
w=u}for(;;)switch(w){case 0:r.J(new B.baX(r))
u=3
k=e.aD(0,$.bH(),x.A).ax
k===$&&A.a()
j=r.x
if(j==null){j=x.z
j=A.z(j,j)}else j=A.a4(["category",j],x.N,x.T)
w=6
return A.j(k.jP("documents-zip-export",j),$async$xd)
case 6:q=a0
p=q.a
w=x.f.b(p)&&typeof J.a_(p,"base64")=="string"?7:9
break
case 7:o=C.hM.cD(A.aI(J.a_(p,"base64")))
i=A.ak(J.a_(p,"filename"))
n=i==null?"export.zip":i
m="data:application/zip;base64,"+C.vY.gtc().cD(o)
w=10
return A.j(A.mH(A.cm(m,0,null),C.em,null),$async$xd)
case 10:w=11
return A.j(A.uK(new A.pw(m)),$async$xd)
case 11:if(d.e!=null)d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k(A.i(n)+" ("+(J.cf(o)/1024|0)+" KB) heruntergeladen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
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
if(d.e!=null)d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Export fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.baY(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$xd,v)},
By(d,e){return this.aw_(d,e)},
aw_(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$By=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l={}
k=A.dJ(e.aD(0,$.bwP(),x.w))
if(k==null)k=C.cp
r=new A.bw(C.a7,$.af())
p=J.V(k)
l.a=p.gdA(k)?A.aI(J.a_(p.ga2(k),"slug")):"sonstiges"
w=3
return A.j(A.hk(null,null,!0,null,new B.baW(l,r,k),d,null,!0,!0,x.y),$async$By)
case 3:if(g!==!0||C.c.aL(r.a.a).length===0){w=1
break}t=5
p=e.aD(0,$.bH(),x.A).cV("documents")
o=C.c.aL(r.a.a)
l=l.a
if(l==null)l="sonstiges"
n=x.N
w=8
return A.j(p.iM(0,A.a4(["title",o,"category",l],n,n)),$async$By)
case 8:if(d.e==null){w=1
break}l=$.Kc()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(l)
t=2
w=7
break
case 5:t=4
j=s.pop()
q=A.a2(j)
if(d.e==null){w=1
break}d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehlgeschlagen: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$By,v)}}
B.ar6.prototype={
u(d){var w=null
return A.dH(w,C.aw,!1,w,!0,C.n,w,A.dP(),w,w,w,w,w,w,2,A.eG(w,new A.hy(4,A.aR(12),C.dy),w,w,w,w,w,w,!0,new A.hy(4,A.aR(12),C.dy),w,w,w,w,w,C.A,!0,w,w,w,w,new A.hy(4,A.aR(12),D.a0A),w,w,w,w,w,w,w,w,w,"Titel oder Kategorie suchen \u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,D.ad5,w,w,w,w,w,w,w,w,w,w,w,w),C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,this.c,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w)}}
B.alx.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.d,p=x.p,o=A.b([s.a3e(d,"Alle Ordner",q==null,new B.bdx(s)),C.aZ],p)
for(w=J.bh(s.c);w.t();){v=w.gN(w)
u=J.V(v)
t=u.h(v,"label")
t=t==null?r:J.am(t)
if(t==null)t=""
u=u.h(v,"slug")
C.b.K(o,A.b([s.a3e(d,t,q==null?u==null:q===u,new B.bdy(s,v)),C.aZ],p))}return A.et(A.ap(o,C.k,r,C.f,C.h,0,r,r),r,r,r,C.ay)},
a3e(d,e,f,g){var w=null,v=A.aR(999),u=f?C.m:C.A,t=A.aR(999),s=A.cP(f?C.m:C.am,1)
return A.eF(!1,v,!0,A.b9(w,A.k(e,w,w,w,A.D(f?C.j:C.aU,12,C.S),w,w,w),C.r,w,w,new A.b5(u,w,s,t,w,w,C.G),w,w,w,w,C.DM,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)}}
B.aly.prototype={
u(d){var w,v,u,t=this,s=null,r=t.d,q=J.V(r)
if(q.gZ(r))return C.ap
q.fU(r,new B.bdz())
w=t.c
v=J.V(w)
u=v.h(w,"icon")
u=A.co(B.c3D(u==null?s:J.am(u)),C.j,s,18)
w=v.h(w,"label")
w=w==null?s:J.am(w)
if(w==null)w=""
v=x.p
v=A.b([A.ap(A.b([u,C.aV,A.az(A.k(w,s,s,s,A.c8(C.j,15,C.q),s,s,s),1),A.k(""+q.gp(r),s,s,s,A.D(C.p,11,C.l),s,s,s)],v),C.k,s,C.f,C.h,0,s,s),C.M],v)
for(r=q.gX(r),q=t.e;r.t();){w=r.gN(r)
v.push(new B.akj(w,q,new B.bdA(t,w),new B.bdB(t,w),new B.bdC(t,w),new B.bdD(t,w),new B.bdE(t,w),s))}return new A.ai(C.x4,A.ad(v,C.D,s,C.f,C.h,0),s)}}
B.akj.prototype={
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
m=n&&s&&!r?a2.an($.bDl().$1(A.aI(e.h(f,"id"))),x.w):g
f=r?0:20
e=s?h.r:g
d=x.p
l=A.b([],d)
if(r)C.b.K(l,A.b([D.aur],d))
l.push(A.az(A.k(a0,2,C.ak,g,A.D(C.j,15,C.q),g,g,g),1))
l.push(C.aV)
if(r)l.push(D.aBb)
else l.push(new B.akV(t,g))
l=A.ap(l,C.D,g,C.f,C.h,0,g,g)
k=A.i(w)
j=o==null?"":" \xb7 g\xfcltig bis "+$.dp().am(o)
j=A.k("v"+k+" \xb7 "+v+j,g,g,g,A.D(C.p,11,C.l),g,g,g)
if(s)k=A.ap(A.b([D.acm,C.cE,new A.hS(1,C.cO,A.k(r?"Vorlage herunterladen":"Tippen zum \xd6ffnen",1,C.ak,g,D.aDH,g,g,g),g)],d),C.k,g,C.f,C.H,0,g,g)
else k=A.k("Noch keine Version hochgeladen",1,C.ak,g,A.D(C.p,11,C.l),g,g,g)
k=A.b([A.az(k,1)],d)
if(h.f&&!r){i=A.b([A.fg(C.aU,D.mM,D.adc,g,g,h.x,C.a9,g,g,"G\xfcltigkeit setzen",C.mv),A.fg(C.aU,D.mM,D.adk,g,g,h.w,C.a9,g,g,"Neue Version hochladen",C.mv)],d)
if(n)i.push(A.fg(C.m,D.mM,D.acY,g,g,s?h.z:g,C.a9,g,g,"Mitarbeiter zur Signatur einladen",C.mv))
i.push(A.fg(C.m,D.mM,D.add,g,g,s?h.y:g,C.a9,g,g,"Freigabe (2-of-2 Gesellschafter)",C.mv))
k.push(A.lo(C.cx,i,C.dI,0,0))}l=A.b([l,C.d6,j,C.u,A.ap(k,C.k,g,C.f,C.h,0,g,g)],d)
if(m!=null)C.b.K(l,A.b([C.u,C.cN,C.M,A.dz(m,new B.bat(),new B.bau(),new B.bav(),!1,!0,!1,x.D,x.l)],d))
return new A.ai(new A.al(f,0,0,12),A.by(g,A.ad(l,C.D,g,C.f,C.h,0),g,e,C.ai,p,3),g)}}
B.arB.prototype={
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
r=t?C.i3:D.aaa
r=A.co(r,t?C.aE:C.m,s,16)
if(t){q=v==null?"":" \xb7 "+C.c.a_(v,0,10)
q=o+" \u2014 signiert"+q}else q=o+" \u2014 ausstehend"
q=A.b([r,C.aZ,A.az(A.k(q,s,s,s,A.D(C.j,12,C.S),s,s,s),1)],x.p)
if(t&&u!=null&&u.length!==0)q.push(A.nw(D.Fd,D.aGl,new B.bo1(this,d,e,u),s))
return new A.ai(D.DJ,A.ap(q,C.k,s,C.f,C.h,0,s,s),s)},
Bz(d,e,f){return this.aI1(d,e,f)},
aI1(d,e,f){var w=0,v=A.q(x.H),u=1,t=[],s,r,q,p,o
var $async$Bz=A.m(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:u=3
q=e.aD(0,$.bH(),x.A).ay
q===$&&A.a()
w=6
return A.j(q.cV("signed-documents").nR(f,86400),$async$Bz)
case 6:s=h
w=7
return A.j(A.mH(A.cm(s,0,null),C.em,"_blank"),$async$Bz)
case 7:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.a2(o)
if(d.e!=null)d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Bz,v)}}
B.akV.prototype={
u(d){switch(this.c){case"expired":return D.aBa
case"expiring":return D.aB8
case"ok":return D.aB9
default:return C.ap}}}
B.a5c.prototype={
dg(d,e){var w=null,v=e.an($.bDk(),x.w),u=B.a5Q(w,w,D.ads,D.AC,new B.aEk(this,d,e))
return A.dT(D.a9r,w,A.dz(v,new B.aEl(),new B.aEm(),new B.aEn(),!1,!0,!1,x.D,x.E),w,u)},
C8(d,e){return this.aF9(d,e)},
aF9(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n
var $async$C8=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:w=3
return A.j(A.kE(null,new B.aEh(),d,!0,null,null,x.dr),$async$C8)
case 3:o=g
if(o==null){w=1
break}t=5
q=e.aD(0,$.bH(),x.A).ax
q===$&&A.a()
w=8
return A.j(q.jP("invite-user",A.a4(["email",o.a,"role","employee","full_name",o.b,"permissions",o.c],x.N,x.X)),$async$C8)
case 8:if(d.e==null){w=1
break}q=$.bDk()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(q)
d.O(x.q).f.aW(D.aAK)
t=2
w=7
break
case 5:t=4
n=s.pop()
r=A.a2(n)
if(d.e==null){w=1
break}d.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Einladung fehlgeschlagen: "+A.i(r),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$C8,v)}}
B.amF.prototype={}
B.C_.prototype={
W(){var w=$.af()
return new B.W5(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),A.b3(x.N))}}
B.W5.prototype={
l(){var w=this.e,v=$.af()
w.R$=v
w.S$=0
w=this.f
w.R$=v
w.S$=0
this.ap()},
axD(){var w,v,u,t=this,s=t.d.ga1()
s=s==null?null:s.hT()
if(s!==!0)return
s=t.c
s.toString
s=A.b6(s,!1)
w=C.c.aL(t.e.a.a)
v=C.c.aL(t.f.a.a)
if(v.length===0)v=null
u=t.r
u=A.Q(u,A.l(u).c)
s.cE(new B.amF(w,v,u))},
u(d){var w,v,u,t=this,s=null,r=A.bD(d,s,x.m).w,q=A.b([A.k("Mitarbeiter einladen",s,s,s,A.W(d).ok.r,s,s,s),C.L,A.db(s,!1,t.e,D.af1,s,C.iF,1,!1,s,s,C.X,s,new B.bg1()),C.u,A.db(s,!1,t.f,D.aej,s,s,1,!1,s,s,C.X,s,s),C.u,A.k("Berechtigungen",s,s,s,A.W(d).ok.w,s,s,s)],x.p)
for(w=D.Sy.gi1(D.Sy),w=w.gX(w),v=t.r;w.t();){u=w.gN(w)
q.push(A.bF_(s,s,C.a9,s,!0,new B.bg2(t,u),s,A.k(u.b,s,s,s,s,s,s,s),v.n(0,u.a)))}q.push(C.M)
q.push(A.dl(D.AC,t.gaxC(),s))
return new A.ai(new A.al(0,0,0,r.f.d),A.et(A.k4(s,A.ad(q,C.a8,s,C.f,C.H,0),t.d),s,C.ai,s,C.K),s)}}
B.a5v.prototype={
u(d){return B.Q6("filled_at","filling",new B.aFF(),new B.aFG(),new B.aFH(),"filling_logs","Bef\xfcllung")}}
B.BR.prototype={
W(){var w=$.af()
return new B.Vo(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(new A.cz("0",C.bb,C.aG),w),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.b_(Date.now(),0,!1))}}
B.Vo.prototype={
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
w.ap()},
Jf(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$Jf=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ay
w=2
return A.j(A.pf(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.b_(Date.now(),0,!1),C.eq),$async$Jf)
case 2:s=e
if(s!=null)u.J(new B.bcM(u,s))
return A.o(null,v)}})
return A.p($async$Jf,v)},
Jg(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$Jg=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ch
if(t==null)t=new A.b_(Date.now(),0,!1).uu(7776e9)
w=2
return A.j(A.pf(r,new A.b_(Date.now(),0,!1).uu(-2592e9),null,t,A.bB(2030,1,1,0,0,0,0),C.eq),$async$Jg)
case 2:s=e
if(s!=null)u.J(new B.bcN(u,s))
return A.o(null,v)}})
return A.p($async$Jg,v)},
ay7(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w.ga1()
k=k==null?l:k.hT()
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
r=new A.b_(Date.now(),0,!1).dS()
q=m.z.a.a
q=A.fX(A.ay(q,",","."))
p=C.c.aL(m.Q.a.a)
if(p.length===0)p=l
o=C.c.a_(m.ay.dS(),0,10)
n=m.ch
w.cE(A.a4(["machine_id",v,"product_id",k,"quantity",u,"removed_spoiled",t,"mhd_checked",s,"filled_at",r,"unit_cost",q,"invoice_number",p,"invoice_date",o,"lot_expiry",n==null?l:C.c.a_(n.dS(),0,10)],x.N,x.X))},
u(d){var w,v=this,u=null,t=v.gc3().an($.bDS(),x.w),s=A.bD(d,u,x.m).w,r=A.k("Bef\xfcllung erfassen",u,u,u,A.W(d).ok.r,u,u,u),q=B.OO(new B.bcT(v),v.as),p=B.axD(t,new B.bcU(v),new B.bcV(),x.D,x.l),o=A.db(u,!1,v.x,D.aeB,u,C.cY,1,!1,u,u,C.X,u,new B.bcW()),n=A.db(u,!1,v.y,D.aeT,u,C.cY,1,!1,u,u,C.X,u,u),m=A.db(u,!1,v.z,D.aeX,u,C.ez,1,!1,u,u,C.X,u,new B.bcX()),l=A.db(u,!1,v.Q,D.aey,u,u,1,!1,u,u,C.X,u,new B.bcY()),k=v.ay,j=x.p
k=A.a72(u,A.ap(A.b([A.az(A.k(C.c.cZ(C.e.j(A.bV(k)),2,"0")+"."+C.c.cZ(C.e.j(A.bi(k)),2,"0")+"."+A.aW(k),u,u,u,u,u,u,u),1),A.nw(D.li,D.aI8,v.gaJ6(),u)],j),C.k,u,C.f,C.h,0,u,u),D.aee,!1,!1,!1,!1,u,u)
w=v.ch
return new A.ai(new A.al(0,0,0,s.f.d),A.et(A.k4(u,A.ad(A.b([r,C.L,q,C.u,p,C.u,o,C.u,n,C.u,m,C.u,l,C.u,k,C.u,A.a72(u,A.ap(A.b([A.az(A.k(w==null?"\u2014 nicht gesetzt \u2014":C.c.cZ(C.e.j(A.bV(w)),2,"0")+"."+C.c.cZ(C.e.j(A.bi(w)),2,"0")+"."+A.aW(w),u,u,u,u,u,u,u),1),A.nw(D.li,D.aGx,v.gaJ7(),u)],j),C.k,u,C.f,C.h,0,u,u),D.aeF,!1,!1,!1,!1,u,u),C.b3,A.b0K(C.a9,new B.bcZ(v),u,D.aGp,v.ax),A.dl(C.dt,v.gay6(),u)],j),C.a8,u,C.f,C.H,0),v.w),u,C.ai,u,C.K),u)}}
B.Og.prototype={
W(){return new B.W4(new A.b_(Date.now(),0,!1).uu(-7776e9),new A.b_(Date.now(),0,!1))}}
B.W4.prototype={
IC(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$IC=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.bfS(r))
u=3
q=r.gc3().aD(0,$.bH(),x.A)
n=x.N
m=x.z
w=6
return A.j(A.k6(A.b([q.ev("inventory_fifo_movements",A.a4(["p_from",r.w.A9().dS(),"p_to",r.x.A9().dS()],n,m),m),q.ev("inventory_fifo_lots",A.a4(["p_to",r.x.A9().dS()],n,m),m),q.h4("list_partner_signatures",m)],x.U),m),$async$IC)
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
if(r.c!=null)r.J(new B.bfT(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$IC,v)},
Je(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$Je=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.w
w=2
return A.j(A.pf(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.b_(Date.now(),0,!1),C.eq),$async$Je)
case 2:s=e
if(s!=null)u.J(new B.bfU(u,s))
return A.o(null,v)}})
return A.p($async$Je,v)},
Jj(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$Jj=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.x
w=2
return A.j(A.pf(r,A.bB(2024,1,1,0,0,0,0),null,t,new A.b_(Date.now(),0,!1),C.eq),$async$Jj)
case 2:s=e
if(s!=null)u.J(new B.bfV(u,s))
return A.o(null,v)}})
return A.p($async$Jj,v)},
au(){this.aM()
A.byu(this.ga6M(),x.H)},
CK(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$CK=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.y==null){w=1
break}o=r.c
o.toString
w=3
return A.j(A.hk(null,null,!0,null,new B.bfY(r),o,null,!0,!0,x.y),$async$CK)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mM(r.gc3().aD(0,$.bH(),x.A))
o=r.w
n=r.x
m=$.dp()
l=m.am(o)
m=m.am(r.x)
w=8
return A.j(q.wk("inventory_fifo",o,n,A.a4(["movements",r.y,"lots",r.z],x.N,x.z),"Inventur "+l+" \u2013 "+m),$async$CK)
case 8:o=r.c
if(o!=null)o.O(x.q).f.aW(E.mi)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
o=r.c
if(o!=null)o.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CK,v)},
aua(d){var w,v,u,t,s,r=A.z(x.N,x.D)
for(w=d.$ti,v=new A.aK(d,d.gp(0),w.i("aK<ag.E>")),w=w.i("ag.E");v.t();){u=v.d
if(u==null)u=w.a(u)
t=J.a_(u,"product_id")
s=t==null?null:J.am(t)
if(s==null)s=""
J.e4(r.cl(0,s,new B.bfR()),u)}return r},
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.b([],q),o=s.y
if(o!=null&&!o.gZ(o))p.push(new B.EF(A.b([new B.v8(C.fw,"Freigabe anfordern",s.gaKg(),C.m,r,!1),new B.v8(C.i6,"Als PDF drucken",new B.bfZ(s),C.an,C.an,!1)],x.B),C.dU,r))
p.push(A.k("FIFO-Inventur \u2014 je Produkt alle Bewegungen chronologisch, Bewertung nach dem Verbrauchsfolgeverfahren (\xa7256 HGB): die \xe4ltesten Zug\xe4nge sind zuerst verbraucht, der Endbestand wird mit den EK-Preisen der j\xfcngsten verbliebenen Lots bewertet. MHD-Abschlag nach Restlaufzeit-Matrix vom AK-Wert.",r,r,r,A.D(C.p,12,C.l),r,r,r))
p.push(C.L)
o=s.w
w=$.dp()
p.push(A.ap(A.b([A.az(A.fV(D.li,A.k("Von "+w.am(o),r,r,r,r,r,r,r),s.gaJ5(),A.oE(r,r,r,r,r,r,r,r,r,C.j,r,r,C.el,r,r,C.kz,r,r,r,r)),1),C.aV,A.az(A.fV(D.li,A.k("Bis "+w.am(s.x),r,r,r,r,r,r,r),s.gaJc(),A.oE(r,r,r,r,r,r,r,r,r,C.j,r,r,C.el,r,r,C.kz,r,r,r,r)),1)],q),C.k,r,C.f,C.h,0,r,r))
p.push(C.u)
o=s.as
w=o?r:s.ga6M()
o=o?C.v_:D.Fi
p.push(A.hb(o,D.aJ8,w,A.dK(C.m,C.A,r,C.el,r,r,r)))
p.push(C.L)
o=s.at
if(o!=null)p.push(A.by(C.an,A.k(o,r,r,r,A.D(C.j,13,C.l),r,r,r),C.eJ,r,C.C,r,3))
else{o=s.y
if(o==null)p.push(C.ap)
else if(o.gp(0)===0)p.push(A.by(r,A.k("Keine Bewegungen im gew\xe4hlten Zeitraum.",r,r,r,A.D(C.p,13,C.l),r,r,r),C.ae,r,C.C,r,3))
else{q=A.b([],q)
o=s.y
o.toString
o=s.aua(o)
o=new A.e9(o,A.l(o).i("e9<1,2>")).gX(0)
w=x.t
while(o.t()){v=o.d
u=v.b
t=s.z
if(t==null)t=A.b([],w)
t=J.qW(t,new B.bg_(v))
t=A.Q(t,t.$ti.i("t.E"))
q.push(new B.apj(u,t,r))}q.push(C.aQ)
o=s.z
q.push(new B.alP(o==null?C.cp:o,r))
q.push(C.bJ)
q.push(D.aP7)
q.push(C.bJ)
o=s.Q
if(o!=null&&!o.gZ(o)){o=s.Q
o.toString
q.push(new B.arC(o,r))}C.b.K(p,q)}}return A.dT(D.a9A,r,A.dG(p,C.C,r,C.K,!1),r,r)}}
B.apj.prototype={
u(c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9="Hanken Grotesk",c0=this.d,c1=J.cB(c0),c2=J.a_(c1.ga2(c0),"product_name"),c3=c2==null?b8:J.am(c2)
if(c3==null)c3=""
c2=J.a_(c1.ga2(c0),"sku")
w=c2==null?b8:J.am(c2)
if(w==null)w=""
c2=this.e
v=C.b.fn(c2,0,new B.bkj())
u=C.b.fn(c2,0,new B.bkk())
t=C.b.fn(c2,0,new B.bkl())
s=C.b.fn(c2,0,new B.bkm())
r=A.k(c3,b8,b8,b8,A.D(C.j,16,C.q),b8,b8,b8)
q=w.length===0?"":"SKU: "+w
p=x.p
o=""+v
q=A.ap(A.b([A.az(A.ad(A.b([r,A.k(q,b8,b8,b8,A.D(C.p,11,C.l),b8,b8,b8)],p),C.D,b8,C.f,C.h,0),1),A.k("Endbestand: "+o,b8,b8,b8,A.D(C.m,13,C.q),b8,b8,b8)],p),C.D,b8,C.f,C.h,0,b8,b8)
r=A.k("Bewegungen im Zeitraum",b8,b8,b8,A.D(C.p,12,C.q),b8,b8,b8)
n=x.x
m=x._
l=A.b([],m)
for(c0=c1.gX(c0);c0.t();)l.push(this.aGz(c0.gN(c0)))
c0=A.et(B.aBy(b8,D.ajD,40,30,new A.bF(C.ae,n),32,l),b8,b8,b8,C.ay)
c1=A.k("FIFO-Restlots am Stichtag",b8,b8,b8,A.D(C.p,12,C.q),b8,b8,b8)
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
h=A.k(f,b8,b8,b8,new A.P(!0,C.j,b8,b9,C.bz,b8,11,C.l,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
g=A.k(B.apk(e),b8,b8,b8,b8,b8,b8,b8)
a8=A.k(""+d,b8,b8,b8,new A.P(!0,C.j,b8,b9,C.bz,b8,12,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=$.d3()
b0=A.k(a9.am(a0),b8,b8,b8,b8,b8,b8,b8)
b1=A.k(B.apk(a1),b8,b8,b8,b8,b8,b8,b8)
b2=A.k(a2==null?"\u2014":A.i(a2)+"d",b8,b8,b8,b8,b8,b8,b8)
b3=a7?C.an:C.j
b3=A.k(""+a3+" %",b8,b8,b8,new A.P(!0,b3,b8,b9,C.bz,b8,12,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
b4=A.k(a9.am(a4),b8,b8,b8,b8,b8,b8,b8)
b5=a5===0?"\u2014":"\u2212 "+a9.am(a5)
b6=a7?C.an:C.j
b5=A.k(b5,b8,b8,b8,new A.P(!0,b6,b8,b9,C.bz,b8,12,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=a9.am(a6)
m.push(new B.rc(b8,A.b([new B.fz(h),new B.fz(g),new B.fz(a8),new B.fz(b0),new B.fz(b1),new B.fz(b2),new B.fz(b3),new B.fz(b4),new B.fz(b5),new B.fz(A.k(a9,b8,b8,b8,new A.P(!0,C.j,b8,b9,C.bz,b8,13,C.q,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8))],k),b8))}b7=A.D(C.j,13,C.q)
c2=B.ob(A.k("Summe",b8,b8,b8,b7,b8,b8,b8))
o=B.ob(A.k(o,b8,b8,b8,b7,b8,b8,b8))
l=$.d3()
h=B.ob(A.k(l.am(u),b8,b8,b8,b7,b8,b8,b8))
g=t===0?"\u2014":"\u2212 "+l.am(t)
m.push(B.bFv(A.b([c2,D.kT,o,D.kT,D.kT,D.kT,D.kT,h,B.ob(A.k(g,b8,b8,b8,b7.cO(C.an),b8,b8,b8)),B.ob(A.k(l.am(s),b8,b8,b8,b7,b8,b8,b8))],k),new A.bF(C.bm,n),b8))
return new A.ai(C.x4,A.by(b8,A.ad(A.b([q,C.u,r,C.b3,c0,C.u,c1,C.b3,A.et(B.aBy(b8,D.ajo,40,30,new A.bF(C.ae,n),32,m),b8,b8,b8,C.ay)],p),C.D,b8,C.f,C.h,0),b8,b8,C.ai,b8,3),b8)},
aGz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.V(d),h=A.ak(i.h(d,"type"))
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
if(h==="refill")n=C.CJ
else n=h==="disposal"?C.eJ:j
i=n==null?j:new A.bF(n,x.x)
v=B.ob(A.k(B.apk(o),j,j,j,j,j,j,j))
w=B.ob(A.k(w,j,j,j,A.D(h==="disposal"?C.an:C.j,12,C.q),j,j,j))
m=u>0
l=""+u
if(m)l="+"+l
l=B.ob(A.k(l,j,j,j,A.D(m?C.aE:C.j,12,C.q),j,j,j))
m=B.ob(A.k(t==null?"\u2014":$.d3().am(t),j,j,j,j,j,j,j))
if(s.length===0)k="\u2014"
else k=s+(r==null?"":"  \xb7 "+B.apk(r))
return B.bFv(A.b([v,w,l,m,B.ob(A.k(k,j,j,j,A.D(C.aU,11,C.l),j,j,j)),B.ob(A.k(B.apk(q),j,j,j,j,j,j,j)),B.ob(A.ch(A.k(p,1,C.ak,j,A.D(C.p,11,C.l),j,j,j),j,200))],x.F),i,j)}}
B.alP.prototype={
u(d){var w,v,u=null,t=this.c,s=J.cB(t),r=s.fn(t,0,new B.bex()),q=s.fn(t,0,new B.bey()),p=s.fn(t,0,new B.bez()),o=s.fn(t,0,new B.beA()),n=s.eQ(t,new B.beB(),x.T).hG(0).a
t=$.d3()
s=t.am(q)
w=p===0?"\u2014 0,00 \u20ac":"\u2212 "+t.am(p)
v=x.p
return A.by(C.m,A.ad(A.b([D.axC,C.u,A.lo(C.cx,A.b([new B.wW("Produkte im Bestand",""+n,!1,!1,u),new B.wW("Einheiten gesamt",A.i(r),!1,!1,u),new B.wW("Anschaffungskosten netto",s,!1,!1,u),new B.wW("MHD-Abschlag",w,!0,!1,u),new B.wW("Bilanzwert netto",t.am(o),!1,!0,u)],v),C.dI,8,20)],v),C.D,u,C.f,C.h,0),C.bm,u,C.ai,u,3)}}
B.wW.prototype={
u(d){var w=this,v=null,u=A.aR(12),t=A.cP(C.am,1),s=A.k(w.c,v,v,v,A.D(C.p,10,C.S),v,v,v),r=w.f?17:15
return A.b9(v,A.ad(A.b([s,A.k(w.d,v,v,v,A.D(w.e?C.an:C.j,r,C.q),v,v,v)],x.p),C.D,v,C.f,C.H,0),C.r,v,v,new A.b5(C.A,v,t,u,v,v,C.G),v,v,v,v,C.l1,v,v,v)}}
B.anD.prototype={
u(d){var w,v,u,t,s,r,q,p=null,o="Hanken Grotesk",n=A.k("Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskostenwert eines Lots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.",p,p,p,A.D(C.p,12,C.l),p,p,p),m=A.b([],x._)
for(w=x.F,v=0;v<5;++v){u=D.anB[v]
t=A.k(u.a,p,p,p,new A.P(!0,C.j,p,o,C.bz,p,13,C.q,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
s=A.k(u.b,p,p,p,p,p,p,p)
r=u.c
q=r==="0 %"?C.j:C.an
r=A.k(r,p,p,p,new A.P(!0,q,p,o,C.bz,p,13,C.q,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
m.push(new B.rc(p,A.b([new B.fz(t),new B.fz(s),new B.fz(r),new B.fz(A.k(u.d,p,p,p,new A.P(!0,C.aU,p,o,C.bz,p,12,C.l,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p))],w),p))}return A.by(p,A.ad(A.b([D.axH,C.M,n,C.u,A.et(B.aBy(p,D.anW,44,32,new A.bF(C.ae,x.x),34,m),p,p,p,C.ay)],x.p),C.D,p,C.f,C.h,0),p,p,C.ai,p,3)}}
B.wZ.prototype={}
B.arC.prototype={
u(d){var w,v,u,t=null,s=x.p,r=A.b([],s)
for(w=this.c,v=w.$ti,w=new A.aK(w,w.gp(0),v.i("aK<ag.E>")),v=v.i("ag.E");w.t();){u=w.d
r.push(new B.arE(u==null?v.a(u):u,t))}return A.by(t,A.ad(A.b([D.axD,C.L,A.lo(C.cx,r,C.dI,16,20)],s),C.D,t,C.f,C.h,0),t,t,C.ai,t,3)}}
B.arE.prototype={
u(d){var w,v,u=null,t=this.c,s=J.V(t),r=s.h(t,"full_name"),q=r==null?u:J.am(r)
if(q==null)q=""
r=s.h(t,"role_label")
w=r==null?u:J.am(r)
if(w==null)w=""
t=s.h(t,"image_url")
v=t==null?u:J.am(t)
t=A.aR(12)
s=A.cP(C.am,1)
r=v!=null&&v.length!==0?A.aJw(v,new B.bop(),C.w1,u,u,u,u):D.a_r
t=A.b9(C.Bg,r,C.r,u,u,new A.b5(C.ae,u,s,t,u,u,C.G),u,68,u,u,C.fu,u,u,u)
s=A.k(q,u,u,u,A.D(C.j,13,C.q),u,u,u)
r=Date.now()
return A.ch(A.ad(A.b([t,C.d6,s,A.k(w+" \xb7 Datum: "+$.dp().am(new A.b_(r,0,!1)),u,u,u,A.D(C.p,11,C.l),u,u,u)],x.p),C.D,u,C.f,C.h,0),u,260)}}
B.Iz.prototype={
u(d){var w=null
return A.b9(w,w,C.r,C.bU,w,w,w,1,w,D.a7G,w,w,w,w)}}
B.a76.prototype={
dg(d,e){return A.dT(D.a9C,null,A.dz(e.an($.awo(),x.c),new B.aKq(),new B.aKr(),new B.aKs(),!1,!0,!1,x.W,x.E),null,null)}}
B.zz.prototype={
W(){return new B.anm()}}
B.anm.prototype={
au(){var w,v,u,t,s=this
s.aM()
w=s.gc3().aD(0,$.bH(),x.A)
v=s.a.d
u=w.ch
u===$&&A.a()
t=A.bYw("realtime:"+("inventory:"+v),u,C.a2E)
u.Qw()
C.b.E(u.b,t)
s.w=t.aZf(new B.bhe(s),C.Xc,new B.aaT(D.Xd,"machine_id",s.a.d),"public","inventory").amG(0)},
l(){var w,v=this.w
if(v!=null){w=this.gc3().aD(0,$.bH(),x.A).ch
w===$&&A.a()
w.Oo(v)}this.ap()},
a7b(d,e,f){var w
A:{if("out"===f){w=A.W(e).ax.fy
break A}if("low"===f){w=D.asy
break A}w=C.Te
break A}return w},
aFy(d){var w
A:{if("out"===d){w="ausverkauft"
break A}if("low"===d){w="bald leer"
break A}w="verf\xfcgbar"
break A}return w},
u(d){var w=this,v=null,u=w.gc3().an($.bx6().$1(w.a.d),x.bj)
return A.dT(A.ru(v,A.k(w.a.e,v,v,v,v,v,v,v)),v,A.dz(u,new B.bhb(w),new B.bhc(),new B.bhd(),!1,!0,!1,x.e,x.E),v,v)},
Br(d,e){return this.avV(d,e)},
avV(d,e){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$Br=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.j(A.hk(null,null,!0,null,new B.bh6(e,new A.bw(C.a7,$.af()),d),d,null,!0,!0,x.v),$async$Br)
case 3:q=g
if(q==null||q===0){w=1
break}w=4
return A.j(t.gc3().aD(0,$.bx7().ghC(),x.M).Li(q,e.a,e.b),$async$Br)
case 4:s=g
if(d.e==null){w=1
break}r=d.O(x.q).f
r.aW(A.c5(null,null,null,null,null,C.n,null,A.k(s?"Korrektur gebucht.":"Fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
case 1:return A.o(u,v)}})
return A.p($async$Br,v)}}
B.a7J.prototype={
u(d){return B.Q6("reported_at","maintenance",new B.aLM(),new B.aLN(),new B.aLO(),"maintenance_logs","Wartung")}}
B.C3.prototype={
W(){var w=$.af()
return new B.Wd(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.Wd.prototype={
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
w.ap()},
aG1(){var w,v,u,t,s,r=this,q=null,p=r.w.ga1()
p=p==null?q:p.hT()
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
else s=A.fX(A.ay(s,",","."))
p.cE(A.a4(["machine_id",w,"issue",v,"action",u,"performed_by",t,"cost_amount",s,"resolved",r.at,"reported_at",new A.b_(Date.now(),0,!1).dS()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ai(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.k("Wartung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OO(new B.bhh(w),w.as),C.u,A.db(v,!1,w.x,D.aeI,v,v,2,!1,v,v,C.X,v,new B.bhi()),C.u,A.db(v,!1,w.y,D.aen,v,v,2,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.z,D.af8,v,v,1,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.Q,D.aek,v,C.ez,1,!1,v,v,C.X,v,v),A.b0K(C.a9,new B.bhj(w),v,D.ZM,w.at),A.dl(C.dt,w.gaG0(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.Sw.prototype={
W(){return new B.asD()}}
B.asD.prototype={
u(d){var w,v,u=this,t=null,s=A.b([],x.hc)
for(w=x.fl,v=0;v<5;++v)s.push(new A.jm(v,t,A.k(D.ala[v],t,t,t,t,t,t,t),w))
w=x.v
return A.dT(D.a9J,t,A.ad(A.b([new A.ai(D.DP,A.et(A.bzL(new B.bpN(u),s,A.dD([u.w],w),w),t,t,t,C.ay),t),A.az(u.atr(u.w),1)],x.p),C.k,t,C.f,C.h,0),t,t)},
atr(d){switch(d){case 0:return D.aOV
case 1:return D.aPN
case 2:return D.aNt
case 3:return D.aQ9
case 4:return D.aNP
default:return C.ap}}}
B.anc.prototype={
dg(d,e){return A.dz(e.an($.bD7(),x.w),new B.bgW(e),new B.bgX(),new B.bgY(),!1,!0,!1,x.D,x.l)}}
B.alT.prototype={
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
try{v=w==null?j:A.od(w)}catch(r){}q=v==null?j:C.e.cG(new A.b_(a0,0,!1).i0(v).a,6e7)
a0=q==null
p=!a0&&q>10
t=x.g.a(e.h(f,"active_alarms"))
o=t==null?j:J.cf(t)
if(o==null)o=0
t=p?C.an:C.m
n=A.az(A.k(u+" \xb7 "+s,j,j,j,A.D(C.j,16,C.q),j,j,j),1)
if(p)m="offline ("+A.i(q)+"m)"
else m=a0?"unbekannt":"aktiv"
if(p)a0=C.ml
else a0=a0?C.mm:C.fG
l=p?D.aaF:C.i4
k=x.p
l=A.ap(A.b([n,new A.j7(m,a0,l,j)],k),C.k,j,C.f,C.h,0,j,j)
a0=A.b([],k)
if(e.h(f,i)!=null)a0.push(new B.C2(D.aaA,"Temperatur",A.i(e.h(f,i))+" \xb0C",!1,j))
if(e.h(f,h)!=null){n=e.h(f,h)
n=n==null?j:J.am(n)
a0.push(new B.C2(D.abp,"T\xfcr",n==null?"?":n,!1,j))}if(e.h(f,g)!=null){f=A.fL(e.h(f,g))
a0.push(new B.C2(C.y2,"Kasse",$.d3().am(f),!1,j))}if(o>0)a0.push(new B.C2(D.abe,"Alarme",""+o,!0,j))
return new A.ai(D.a7F,A.by(j,A.ad(A.b([l,C.u,A.lo(C.cx,a0,C.dI,8,12)],k),C.D,j,C.f,C.h,0),j,j,C.ai,t,3),j)}}
B.C2.prototype={
u(d){var w=this,v=null,u=w.f?C.an:C.j,t=A.aR(12),s=A.cP(C.am,1)
return A.b9(v,A.ap(A.b([A.co(w.c,u,v,16),C.aZ,A.k(w.d+": ",v,v,v,A.D(C.p,11,C.l),v,v,v),A.k(w.e,v,v,v,A.D(u,13,C.q),v,v,v)],x.p),C.k,v,C.f,C.H,0,v,v),C.r,v,v,new A.b5(C.ae,v,s,t,v,v,C.G),v,v,v,v,C.l1,v,v,v)}}
B.apn.prototype={
dg(d,e){var w=null,v=e.an($.bwU(),x.w),u=B.a5Q(C.m,C.A,D.o4,D.aGF,new B.bkD(this,d,e))
return A.w7(w,w,A.dz(v,new B.bkE(),new B.bkF(),new B.bkG(),!1,!0,!1,x.D,x.E),w,u,w,w)},
J7(d,e){return this.aHT(d,e)},
aHT(d,e){var w=0,v=A.q(x.H),u
var $async$J7=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.j(A.kE(null,new B.bkC(),d,!0,null,null,x.y),$async$J7)
case 2:if(g===!0){u=$.bwU()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(u)}return A.o(null,v)}})
return A.p($async$J7,v)}}
B.apm.prototype={
u(d){var w,v,u,t=null,s="is_active",r=this.c,q=J.V(r),p=q.h(r,"name")
p=p==null?t:J.am(p)
if(p==null)p=""
p=A.az(A.k(p,t,t,t,A.D(C.j,15,C.q),t,t,t),1)
w=A.i0(q.h(r,s))
w=w!==!1?"aktiv":"deaktiviert"
v=A.i0(q.h(r,s))
v=v!==!1?C.fG:C.mm
u=x.p
v=A.b([A.ap(A.b([p,new A.j7(w,v,t,t)],u),C.k,t,C.f,C.h,0,t,t),C.b3,A.k("Adapter: "+A.i(q.h(r,"adapter"))+" \xb7 Uhr-Toleranz: "+A.i(q.h(r,"time_skew_max_s"))+" s",t,t,t,A.D(C.p,11,C.l),t,t,t)],u)
p=A.ak(q.h(r,"notes"))
if((p==null?t:p.length!==0)===!0){r=q.h(r,"notes")
r=r==null?t:J.am(r)
if(r==null)r=""
C.b.K(v,A.b([C.b3,A.k(r,t,t,t,A.D(C.aU,11,C.l),t,t,t)],u))}return new A.ai(C.dU,A.by(t,A.ad(v,C.D,t,C.f,C.h,0),t,t,C.ai,t,3),t)}}
B.Cf.prototype={
W(){var w=$.af()
return new B.X4(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.X4.prototype={
l(){var w=this,v=w.x,u=v.R$=$.af()
v.S$=0
v=w.y
v.R$=u
v.S$=0
v=w.z
v.R$=u
v.S$=0
w.ap()},
lm(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$lm=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.w.ga1()
j=j==null?null:j.hT()
if(j!==!0){w=1
break}q=r.gc3().aD(0,$.bH(),x.A)
t=4
j=C.c.aL(r.x.a.a)
o=r.Q
n=C.c.aL(r.y.a.a)
m=C.c.aL(r.z.a.a)
if(m.length===0)m=null
l=x.z
w=7
return A.j(q.ev("register_telemetry_provider",A.a4(["p_name",j,"p_adapter",o,"p_hmac_secret",n,"p_notes",m],x.N,l),l),$async$lm)
case 7:j=r.c
if(j!=null)A.b6(j,!1).cE(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lm,v)},
u(d){var w=this,v=null
return new A.ai(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.k("Telemetrie-Provider anlegen",v,v,v,A.W(d).ok.r,v,v,v),C.L,A.db(v,!1,w.x,D.aeH,v,v,1,!1,v,v,C.X,v,new B.bkz()),C.u,A.k1(D.aep,w.Q,!1,D.alu,new B.bkA(w),v,x.N),C.u,A.db(v,!1,w.y,D.aet,v,v,1,!0,v,v,C.X,v,new B.bkB()),C.u,A.db(v,!1,w.z,D.aeZ,v,v,2,!1,v,v,C.X,v,v),C.L,A.dl(D.ZJ,w.gD_(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.ak5.prototype={
dg(d,e){var w=null,v=e.an($.bD4(),x.w),u=B.a5Q(C.m,C.A,D.o4,D.aJ3,new B.ba0(this,d,e))
return A.w7(w,w,A.dz(v,new B.ba1(),new B.ba2(),new B.ba3(),!1,!0,!1,x.D,x.E),w,u,w,w)},
J9(d,e){return this.aI0(d,e)},
aI0(d,e){var w=0,v=A.q(x.H),u
var $async$J9=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.j(A.kE(null,new B.ba_(),d,!0,null,null,x.y),$async$J9)
case 2:if(g===!0){u=$.bD4()
if(e.e==null)A.U(A.Z(y.b))
e.gcv().cs(u)}return A.o(null,v)}})
return A.p($async$J9,v)}}
B.ak4.prototype={
u(d){var w,v,u=null,t="firmware_version",s=this.c,r=J.V(s),q=x.h,p=q.a(r.h(s,"machine")),o=q.a(r.h(s,"provider"))
q=p==null
w=q?u:J.a_(p,"code")
w=A.i(w==null?"?":w)
q=q?u:J.a_(p,"name")
q=A.k(w+" \xb7 "+A.i(q==null?"":q),u,u,u,A.D(C.j,14,C.q),u,u,u)
w=o==null
v=A.i(w?u:J.a_(o,"name"))
q=A.b([q,C.bW,A.k("Provider: "+v+" ("+A.i(w?u:J.a_(o,"adapter"))+")",u,u,u,A.D(C.p,11,C.l),u,u,u),A.k("Ger\xe4t: "+A.i(r.h(s,"external_device_id")),u,u,u,A.D(C.p,11,C.l),u,u,u)],x.p)
if(r.h(s,t)!=null)q.push(A.k("Firmware: "+A.i(r.h(s,t)),u,u,u,A.D(C.p,11,C.l),u,u,u))
return new A.ai(C.dU,A.by(u,A.ad(q,C.D,u,C.f,C.h,0),u,u,C.ai,u,3),u)}}
B.BH.prototype={
W(){var w=$.af()
return new B.V0(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.V0.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
lm(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$lm=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.w.ga1()
j=j==null?null:j.hT()
if(j!==!0){w=1
break}if(r.z==null||r.Q==null){w=1
break}q=r.gc3().aD(0,$.bH(),x.A)
t=4
j=q.cV("machine_devices")
o=r.z
n=r.Q
m=C.c.aL(r.x.a.a)
l=C.c.aL(r.y.a.a)
w=7
return A.j(j.iM(0,A.a4(["machine_id",o,"provider_id",n,"external_device_id",m,"firmware_version",l.length===0?null:l],x.N,x.T)),$async$lm)
case 7:j=r.c
if(j!=null)A.b6(j,!1).cE(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k(A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lm,v)},
u(d){var w=this,v=null,u=w.gc3(),t=u.an($.bwU(),x.w),s=u.an($.bH(),x.A)
u=x.D
return new A.ai(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.k("IoT-Ger\xe4t registrieren",v,v,v,A.W(d).ok.r,v,v,v),C.L,A.yS(new B.b9U(w),s.cV("machines").ho(0,"id, code, name").pp(0,"code").cr(new B.b9V(),u),u),C.u,A.dz(t,new B.b9W(w),new B.b9X(),new B.b9Y(),!1,!0,!1,u,x.l),C.u,A.db(v,!1,w.x,D.aeV,v,v,1,!1,v,v,C.X,v,new B.b9Z()),C.u,A.db(v,!1,w.y,D.aeY,v,v,1,!1,v,v,C.X,v,v),C.L,A.dl(D.aIM,w.gD_(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.Yt.prototype={
W(){return new B.arU()}}
B.arU.prototype={
u(d){var w,v=x.D
v=A.yS(new B.boD(this),this.gc3().an($.bH(),x.A).cV("machines").ho(0,"id, code, name").pp(0,"code").cr(new B.boE(),v),v)
w=this.w
return A.ad(A.b([new A.ai(C.C,v,null),A.az(w==null?D.aNI:new B.arT(w,null),1)],x.p),C.k,null,C.f,C.h,0)}}
B.arT.prototype={
dg(d,e){var w=x.D
return A.yS(new B.boz(this,e),e.an($.bH(),x.A).cV("machine_slots").ho(0,"id, slot_code, product_id, unit_price_net, capacity, product:products(id, name, sku)").iK("machine_id",this.e).pp(0,"slot_code").cr(new B.boA(),w),w)},
Cw(d,e,f){return this.aI3(d,e,f)},
aI3(d,e,f){var w=0,v=A.q(x.H),u=this
var $async$Cw=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=2
return A.j(A.kE(null,new B.bow(u,f),d,!0,null,null,x.H),$async$Cw)
case 2:d.e6()
return A.o(null,v)}})
return A.p($async$Cw,v)}}
B.arS.prototype={
u(d){var w,v,u=null,t="unit_price_net",s=this.c,r=J.V(s),q=x.h.a(r.h(s,"product")),p=A.aR(12),o=r.h(s,"slot_code")
o=o==null?u:J.am(o)
if(o==null)o=""
p=A.b9(C.W,A.k(o,u,u,u,A.D(C.j,14,C.q),u,u,u),C.r,u,u,new A.b5(C.m,u,u,p,u,u,C.G),u,44,u,u,u,u,u,44)
o=q==null
if(o)w=u
else{w=J.a_(q,"name")
w=w==null?u:J.am(w)}if(w==null)w="\u2014 kein Produkt zugeordnet \u2014"
w=A.k(w,u,u,u,A.D(C.j,14,C.q),u,u,u)
o=o?u:J.a_(q,"sku")
o=A.i(o==null?"\u2014":o)
v=A.i(r.h(s,"capacity"))
if(r.h(s,t)==null)s="\u2014"
else{s=A.fL(r.h(s,t))
s=$.d3().am(s)}r=x.p
return new A.ai(C.j8,A.by(u,A.ap(A.b([p,C.aF,A.az(A.ad(A.b([w,A.k("SKU: "+o+" \xb7 Kapazit\xe4t: "+v+" \xb7 Preis: "+s,u,u,u,A.D(C.p,11,C.l),u,u,u)],r),C.D,u,C.f,C.h,0),1),C.yn],r),C.k,u,C.f,C.h,0,u,u),u,this.d,C.dC,u,3),u)}}
B.Cr.prototype={
W(){var w=$.af()
return new B.Ys(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w),new A.bw(new A.cz("12",C.bb,C.aG),w))}}
B.Ys.prototype={
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
w.ap()},
lm(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$lm=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.w.ga1()
i=i==null?null:i.hT()
if(i!==!0){w=1
break}q=r.gc3().aD(0,$.bH(),x.A)
t=4
i=r.a.d
o=C.c.aL(r.x.a.a)
n=r.Q
m=r.y.a.a
m=A.fX(A.ay(m,",","."))
l=A.iA(r.z.a.a,null)
if(l==null)l=12
k=x.z
w=7
return A.j(q.ev("set_machine_slot",A.a4(["p_machine_id",i,"p_slot_code",o,"p_product_id",n,"p_unit_price_net",m,"p_capacity",l],x.N,k),k),$async$lm)
case 7:i=r.c
if(i!=null)A.b6(i,!1).fg()
t=2
w=6
break
case 4:t=3
h=s.pop()
p=A.a2(h)
i=r.c
if(i!=null)i.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k(A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lm,v)},
u(d){var w=this,v=null,u=w.gc3().an($.bH(),x.A),t=A.bD(d,v,x.m).w,s=w.a.e==null?"Slot anlegen":"Slot bearbeiten",r=x.D
return new A.ai(new A.al(0,0,0,t.f.d),A.et(A.k4(v,A.ad(A.b([A.k(s,v,v,v,A.W(d).ok.r,v,v,v),C.L,A.db(v,!1,w.x,D.aeu,v,v,1,!1,v,v,C.X,v,new B.bot()),C.u,A.yS(new B.bou(w),u.cV("products").ho(0,"id, name, sku").iK("status","active").pp(0,"name").cr(new B.bov(),r),r),C.u,A.db(v,!1,w.y,D.aeO,v,C.ez,1,!1,v,v,C.X,v,v),C.u,A.db(v,!1,w.z,D.af3,v,C.cY,1,!1,v,v,C.X,v,v),C.L,A.dl(C.dt,w.gD_(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.akR.prototype={
dg(d,e){return A.dz(e.an($.bD5(),x.w),new B.bbO(e),new B.bbP(),new B.bbQ(),!1,!0,!1,x.D,x.l)}}
B.akQ.prototype={
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
s=A.b([A.ap(A.b([A.az(A.k(w+" \xb7 "+u+t,r,r,r,A.D(C.j,13,C.q),r,r,r),1),new A.j7(j,k,r,r)],s),C.k,r,C.f,C.h,0,r,r),C.bW,A.k("Occurred: "+B.bJT(l.h(m,"occurred_at"))+" \xb7 Received: "+B.bJT(l.h(m,"received_at")),r,r,r,A.D(C.p,11,C.l),r,r,r)],s)
if(l.h(m,p)!=null||l.h(m,o)!=null){k=l.h(m,p)
k=A.i(k==null?"\u2014":k)
if(l.h(m,o)!=null){u=A.fL(l.h(m,o))
u=" \xb7 Preis: "+$.d3().am(u)}else u=""
t=J.d(l.h(m,"dispense_confirmed"),!1)?" \xb7 Auswurf NICHT best\xe4tigt":""
s.push(A.k("Menge: "+k+u+t,r,r,r,A.D(C.aU,11,C.l),r,r,r))}k=A.ak(l.h(m,n))
if((k==null?r:k.length!==0)===!0)s.push(A.k("Fehler: "+A.i(l.h(m,n)),r,r,r,A.D(C.an,11,C.S),r,r,r))
return new A.ai(C.j8,A.by(r,A.ad(s,C.D,r,C.f,C.h,0),r,r,C.dC,r,3),r)}}
B.tU.prototype={
u(d){var w=null
return A.d_(new A.ai(C.dd,A.ad(A.b([A.co(this.c,C.p,w,40),C.M,A.k(this.d,w,w,w,A.D(C.p,13,C.l),C.cF,w,w)],x.p),C.k,w,C.f,C.H,0),w),w,w)}}
B.ae7.prototype={
u(d){return B.Q6("measured_at","temperature",new B.b1e(),new B.b1f(),new B.b1g(),"temperature_logs","Temperaturkontrolle")}}
B.CC.prototype={
W(){var w=$.af()
return new B.YW(new A.bl(null,x.n),new A.bw(C.a7,w),new A.bw(C.a7,w))}}
B.YW.prototype={
l(){var w=this.x,v=$.af()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
aMR(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hT()
if(s!==!0)return
s=t.x.a.a
w=A.JY(A.ay(s,",","."))
s=t.c
s.toString
s=A.b6(s,!1)
v=t.z
u=C.c.aL(t.y.a.a)
if(u.length===0)u=null
s.cE(A.a4(["machine_id",v,"temperature_c",w,"corrective_action",u,"measured_at",new A.b_(Date.now(),0,!1).dS()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ai(new A.al(0,0,0,A.bD(d,v,x.m).w.f.d),A.et(A.k4(v,A.ad(A.b([A.k("Temperatur erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.L,B.OO(new B.bpP(w),w.z),C.u,A.db(v,!1,w.x,D.aeJ,v,D.aBW,1,!1,v,v,C.X,v,new B.bpQ()),C.u,A.db(v,!1,w.y,D.aes,v,v,2,!1,v,v,C.X,v,v),C.L,A.dl(C.dt,w.gaMQ(),v)],x.p),C.a8,v,C.f,C.H,0),w.w),v,C.ai,v,C.K),v)}}
B.a7G.prototype={
dg(d,e){return A.dz(e.an($.awo(),x.c),new B.aLH(this),new B.aLI(),new B.aLJ(),!1,!0,!1,x.W,x.l)}}
B.FK.prototype={
W(){return new B.WR()},
aZK(d){return this.d.$1(d)}}
B.WR.prototype={
xy(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$xy=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new B.bjq(q))
t=4
p=new B.aJG()
k=new A.a6X(C.Cp,1600,null,80,!0)
k.arY(80,null,1600,!0)
w=7
return A.j($.bNQ().r3(k,C.Ft),$async$xy)
case 7:o=e
if(o==null){r=[1]
w=5
break}w=8
return A.j(o.YT(),$async$xy)
case 8:n=e
w=9
return A.j(q.gc3().aD(0,$.bDW(),x.Z).FV(0,"haccp",n,"image/jpeg",o.b),$async$xy)
case 9:m=e
q.a.aZK(m)
if(q.c!=null)q.J(new B.bjr(q,m))
r.push(6)
w=5
break
case 4:t=3
h=s.pop()
l=A.a2(h)
i=q.c
if(i!=null)i.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Foto-Upload fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bjs(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xy,v)},
u(d){var w=this,v=null,u=w.w,t=u?v:w.gaJ1()
if(u)u=D.aAe
else u=A.co(w.x==null?D.aaq:C.ji,v,v,v)
return A.fV(u,A.k(w.x==null?"Foto aufnehmen":"Foto angeh\xe4ngt",v,v,v,v,v,v,v),t,v)}}
B.Q5.prototype={
W(){return new B.X0()},
aXg(d){return this.w.$1(d)},
aXf(d){return this.x.$1(d)},
aYS(d,e){return this.y.$2(d,e)}}
B.X0.prototype={
gk9(){var w=this.w
return w===$?this.w=F.aFO():w},
gJn(){var w=this,v=w.a
return new B.At(v.e,v.f,w.gk9().a,A.bB(A.aW(w.gk9().b),A.bi(w.gk9().b),A.bV(w.gk9().b),23,59,59,0))},
CB(){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$CB=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:o=t.a
o.toString
s=t.c
s.toString
r=t.gc3()
w=3
return A.j(o.aYS(s,r),$async$CB)
case 3:q=e
if(q==null){w=1
break}w=4
return A.j(r.aD(0,$.bx7().ghC(),x.M).ke(t.a.e,q),$async$CB)
case 4:p=e
o=t.c
if(o==null){w=1
break}if(p){o=$.aws().$1(t.gJn())
if(r.e==null)A.U(A.Z(y.b))
r.gcv().cs(o)
t.c.O(x.q).f.aW(D.aAM)}else o.O(x.q).f.aW(D.aAN)
case 1:return A.o(u,v)}})
return A.p($async$CB,v)},
CC(){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$CC=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a.r
w=3
return A.j(t.gc3().aD(0,$.bx7().ghC(),x.M).M5(s,t.gk9().a,t.gk9().b),$async$CC)
case 3:r=e
q=t.c
if(q==null){w=1
break}if(r==null){q.O(x.q).f.aW(D.aAG)
w=1
break}w=4
return A.j(A.bw7(r,s+"_nachweis.pdf"),$async$CC)
case 4:case 1:return A.o(u,v)}})
return A.p($async$CC,v)},
CD(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$CD=A.m(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=r.a.r
if(f==null){w=1
break}n=r.c
n.toString
w=3
return A.j(A.hk(null,null,!0,null,new B.bkp(r),n,null,!0,!0,x.y),$async$CD)
case 3:if(a0!==!0){w=1
break}n=r.gc3()
m=A.dJ(n.aD(0,$.aws().$1(r.gJn()),x.w))
q=m==null?A.b([],x.t):m
t=5
p=new F.mM(n.aD(0,$.bH(),x.A))
n=D.aq0.h(0,f)
if(n==null)n="haccp_temperature"
l=r.gk9()
k=r.gk9()
j=r.a.d
i=r.gk9()
h=$.dp()
i=h.am(i.a)
h=h.am(r.gk9().b)
w=8
return A.j(p.wk(n,l.a,k.b,A.a4(["protocol_kind",f,"count",J.cf(q)],x.N,x.z),j+" \xb7 "+i+" \u2013 "+h),$async$CD)
case 8:n=r.c
if(n!=null)n.O(x.q).f.aW(E.mi)
t=2
w=7
break
case 5:t=4
e=s.pop()
o=A.a2(e)
n=r.c
if(n!=null)n.O(x.q).f.aW(A.c5(null,null,null,null,null,C.n,null,A.k("Fehler: "+A.i(o),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$CD,v)},
u(d){var w,v,u=this,t=null,s=u.gc3().an($.aws().$1(u.gJn()),x.w),r=A.k(u.a.d,t,t,t,t,t,t,t),q=x.p,p=A.b([A.fg(t,t,D.acp,t,t,u.gaJu(),t,t,t,"Freigabe anfordern",t),A.fg(t,t,D.ado,t,t,u.gaJt(),t,t,t,"PDF-Nachweis",t)],q)
r=A.ru(p,r)
p=B.a5Q(t,t,D.o4,D.ZN,u.gaJs())
w=u.gk9()
v=$.dp()
return A.dT(r,t,A.ad(A.b([new A.ai(C.dC,A.ap(A.b([A.az(A.k(v.am(w.a)+" \u2013 "+v.am(u.gk9().b),t,t,t,t,t,t,t),1),A.nw(D.li,D.aIG,new B.bku(u,d),t)],q),C.k,t,C.f,C.h,0,t,t),t),D.kX,A.az(A.dz(s,new B.bkv(u),new B.bkw(),new B.bkx(),!1,!0,!1,x.D,x.l),1)],q),C.k,t,C.f,C.h,0),t,p)}}
B.a1V.prototype={
u(d){var w=null
return A.bzB(!1,w,C.eH,w,this.as,w,w,C.r,w,w,w,w,w,w,w,w,w,w,!0,this.d,w,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,this.r,w,!1,w,w)}}
B.b76.prototype={
L(){return"_ChipVariant."+this.b}}
B.a1W.prototype={
u(d){var w,v,u,t=null,s=A.bF5(d)
A.W(d)
w=this.x
v=w?s.ch:t
u=s.y
if(u==null){A.W(d)
u=!0}return A.bzB(!1,t,C.eH,t,t,t,t,C.r,t,new B.b77(d,!0,w,D.hC,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,C.zJ,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,!0,this.d,t,v,t,t,t,t,this.r,t,t,w,s.f,t,t,t,u,t,t,!0,t,t)}}
B.b77.prototype={
gim(){var w,v=this,u=v.id
if(u===$){w=A.W(v.fr)
v.id!==$&&A.aO()
u=v.id=w.ax}return u},
gez(d){var w
if(this.go===D.hC)w=0
else w=this.fx?1:0
return w},
gzK(){return 1},
gjQ(){var w,v,u,t=this,s=t.k1
if(s===$){w=A.W(t.fr)
t.k1!==$&&A.aO()
s=t.k1=w.ok}w=s.as
if(w==null)w=null
else{if(t.fx)if(t.fy){v=t.gim()
u=v.as
v=u==null?v.z:u}else{v=t.gim()
u=v.rx
v=u==null?v.k3:u}else v=t.gim().k3
v=w.cO(v)
w=v}return w},
gd9(d){return new A.bp(new B.b78(this),x.b)},
gcc(d){var w
if(this.go===D.hC)w=C.F
else{w=this.gim().x1
if(w==null)w=C.E}return w},
gcp(){return C.F},
gvc(){var w,v,u=this
if(u.fx)if(u.fy){w=u.gim()
v=w.as
w=v==null?w.z:v}else w=u.gim().b
else w=u.gim().k3
return w},
gyw(){var w,v,u=this
if(u.fx)if(u.fy){w=u.gim()
v=w.as
w=v==null?w.z:v}else{w=u.gim()
v=w.rx
w=v==null?w.k3:v}else w=u.gim().k3
return w},
geL(){var w,v,u=this
if(u.go===D.hC&&!u.fy)if(u.fx){w=u.gim()
v=w.to
if(v==null){v=w.B
w=v==null?w.k3:v}else w=v
w=new A.bm(w,1,C.U,-1)}else{w=u.gim().k3
w=new A.bm(A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255),1,C.U,-1)}else w=C.BC
return w},
gfo(){var w,v,u=this,t=null
if(u.fx)if(u.fy){w=u.gim()
v=w.as
w=v==null?w.z:v}else w=u.gim().b
else w=u.gim().k3
return new A.dC(18,t,t,t,t,w,t,t,t)},
gdm(d){return C.fu},
gmf(){var w=this.gjQ(),v=w==null?null:w.r
if(v==null)v=14
w=A.bN(this.fr,C.b4)
w=w==null?null:w.gcQ()
w=A.og(C.eP,C.dV,A.N((w==null?C.aO:w).bo(0,v)/14-1,0,1))
w.toString
return w}}
B.fn.prototype={}
B.rc.prototype={}
B.fz.prototype={}
B.a4v.prototype={
aDb(d,e){var w,v,u,t,s
if(!e)w=d===!0
else w=!0
for(v=this.CW,u=v.length,t=0;t<v.length;v.length===u||(0,A.G)(v),++t){s=v[t].b
if(s!=null&&w)s.$1(w)}},
a2I(d,e,f,g,h,i,j){var w,v,u,t,s=null,r=A.W(e).y2,q=r.x
if(q==null)q=24
w=r.Q
v=w==null?q:w
u=w==null?q/2:w
t=A.bC(s,s,s,new A.ai(new A.dX(v,0,u,0),A.d_(A.bxI(s,!1,s,s,s,!1,s,s,f,s,s,s,s,s,j,d),s,s),s),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.P,s)
return new B.Sn(D.Zq,g!=null?B.bIV(t,i,s,s,g,h):t,s)},
atE(d,e,f,g,h,i){return this.a2I(d,e,f,g,h,null,i)},
u(c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=A.W(c9),c6=B.bTs(c9),c7=c3.Q,c8=c7==null?c6.f:c7
if(c8==null)c8=c5.y2.f
w=c6.b
if(w==null)w=c5.y2.b
c7=c3.CW
v=C.b.ey(c7,new B.aBz())
u=v?new A.bd(c7,new B.aBA(),A.aa(c7).i("bd<1>")):A.b([],x._)
t=J.cB(u)
s=t.ik(u,new B.aBB())
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
k=A.bJ(o+(v?1:0),D.a31,!1,x.eA)
j=A.a7y(c7.length+1,new B.aBC(c3,v,w,c8,c9,c6,c5,new A.bp(new B.aBD(c5),x.b),k),!0,x.cZ)
if(v){k[0]=new B.a5z(n+18+m)
o=j[0]
i=q?c4:r
o.c[0]=c3.atE(i,c9,new B.aBE(c3,q),c4,c4,!0)
for(o=c7.length,h=1,g=0;g<c7.length;c7.length===o||(0,A.G)(c7),++g){f=c7[g]
i=j[h]
e=f.b
d=e==null?c4:new B.aBF(f)
a0=f.r
if(a0==null)a0=w
i.c[0]=c3.a2I(!1,c9,e,d,a0,c4,!1);++h}a1=1}else a1=0
for(o=x.f0,a2=c3.y,a3=c3.x,i=x.d,a4=c3.as,e=x.p,d=x.k,a0=c3.fr,a5=l/2,a6=p/2,a7=0;a8=t.length,a7<a8;++a7){a9=t[a7]
A:{b0=0===a7
if(b0)b1=v
else b1=!1
if(b1){b1=a6
break A}if(b0){b1=p
break A}b1=a5
break A}b2=new A.dX(b1,0,a7===a8-1?p:a5,0)
if(a7===a0)k[a1]=D.aft
else k[a1]=D.afu
A.b3(d).E(0,C.J)
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
b9=A.b9(b4,A.D6(new A.qi(new A.RD(c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,C.Yp,c4,C.P,c4,c4,c4,c4),!1,!1,c4,!1,!1,new A.iC(C.ay,C.f,C.h,C.k,b5,C.bA,c4,0,b6,c4),c4),C.av,C.dB,!1,(b8==null?C.j6:b8).w.c4(b7)),C.r,c4,c4,c4,c4,a4,c4,c4,b2,c4,c4,c4)
a8.c[a1]=A.eF(!1,c4,!0,b9,c4,!0,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c8,c4,c4,c4,c4)
for(a8=c7.length,h=1,g=0;g<c7.length;c7.length===a8||(0,A.G)(c7),++g){f=c7[g]
c0=f.f[a7]
b4=j[h]
b5=f.b==null?c4:new B.aBG(f)
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
c2=(c2==null?C.j6:c2).w.c4(c1)
b9=A.b9(b8,new A.lQ(c2.cO(c4),c4,!0,C.eb,c4,C.bj,c4,new A.Ec(c0.a,c4),c4),C.r,c4,new A.at(0,1/0,a3,a2),c4,c4,c4,c4,c4,b2,c4,c4,c4)
if(b5!=null)b9=B.bIV(b9,c4,c4,c4,b5,b6)
b4.c[a1]=new B.Sn(c4,b9,c4);++h}++a1}c7=c6.a
if(c7==null)c7=c5.y2.a
return A.b9(c4,A.dL(!1,C.a_,!0,c4,B.c_1(c4,j,new A.j1(k,A.aa(k).i("j1<1>")),D.Zp),C.r,c4,0,c4,c4,c4,c4,c4,C.f8),C.r,c4,c4,c7,c4,c4,c4,c4,c4,c4,c4,c4)}}
B.So.prototype={
AC(d){return new B.b0Z(d)},
Lz(d){this.anu(d)
return!0}}
B.ao9.prototype={
EV(d,e){return A.U(A.f7(null))},
F0(d,e){return A.U(A.f7(null))}}
B.aoe.prototype={
d8(d){return A.U(A.f7(null))}}
B.GP.prototype={
W(){return new B.Yv()},
aZg(){return this.w.$0()}}
B.Yv.prototype={
aCR(){var w=this
if(w.d)return
w.J(new B.boF(w))
w.a.aZg()
w.c.O(x.q).f.Xq(D.aAo)},
u(d){var w,v,u,t,s=this,r=null
A.W(d)
w=A.bKq(d)
v=A.bzS(d)
u=new B.boI(s,v,w)
t=A.qq(r,r,r,r,r,r,r,r,r,r,r,r,u.$0(),r,r,r,r,r,r,r,r)
u=u.$0()
u=t.aRT(new B.boG(s,v).$0(),u)
t=s.d?r:s.gaCQ()
return A.d7(A.k(s.a.r,r,r,r,r,r,r,r),r,r,t,r,u)}}
B.qm.prototype={
j(d){var w=this.B0(0),v=this.b
v=v==null?"default vertical alignment":v.j(0)
return w+"; "+v}}
B.wo.prototype={
WQ(d,e){return null},
j(d){return"TableColumnWidth"}}
B.Oe.prototype={
F0(d,e){var w,v,u,t,s
for(w=new A.fm(d.a(),d.$ti.i("fm<1>")),v=0;w.t();){u=w.b
t=u.gcC()
s=C.bk.e7(u.dy,1/0,t)
v=Math.max(v,s)}return v},
EV(d,e){var w,v,u,t,s
for(w=new A.fm(d.a(),d.$ti.i("fm<1>")),v=0;w.t();){u=w.b
t=u.gcm()
s=C.aT.e7(u.dy,1/0,t)
v=Math.max(v,s)}return v},
WQ(d,e){return this.a},
j(d){var w=this.a
return"IntrinsicColumnWidth(flex: "+A.i(w==null?null:C.e.ae(w,1))+")"}}
B.a5z.prototype={
F0(d,e){return this.a},
EV(d,e){return this.a},
j(d){return"FixedColumnWidth("+A.lE(this.a)+")"}}
B.a5O.prototype={
F0(d,e){return 0},
EV(d,e){return 0},
WQ(d,e){return 1},
j(d){return"FlexColumnWidth("+A.lE(1)+")"}}
B.wn.prototype={
L(){return"TableCellVerticalAlignment."+this.b}}
B.w2.prototype={
saQL(d){var w=this.a3
if(w===d)return
w.gZ(w)
this.a3=d
this.a7()},
saSS(d){if(this.a4===d)return
this.a4=d
this.a7()},
scI(d){if(this.aq===d)return
this.aq=d
this.a7()},
saPX(d,e){return},
saiU(d){var w,v,u,t=this,s=t.aG
if(s==null?d==null:s===d)return
t.aG=d
s=t.bx
if(s!=null)for(w=s.length,v=0;v<w;++v){u=s[v]
if(u!=null)u.l()}s=t.aG
t.bx=s!=null?A.bJ(s.length,null,!1,x.ea):null},
soU(d){if(d.k(0,this.b9))return
this.b9=d
this.bb()},
saST(d){if(this.aR===d)return
this.aR=d
this.a7()},
sZe(d,e){return},
h7(d){if(!(d.b instanceof B.qm))d.b=new B.qm(C.t)},
fB(d){this.k5(d)
d.bl=C.ayA
d.e=d.a=d.r=!0},
qj(){this.Hd()
this.dd.a8(0)
this.cP.a8(0)},
rY(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=x.aO,b8=A.b([],b7),b9=b6.V,c0=J.l1(b9,x.d7)
for(w=x.cV,v=0;v<b9;++v){u=b6.U
t=A.b(new Array(u),w)
for(s=0;s<u;++s)t[s]=A.b([],b7)
c0[v]=t}r=new B.aWv()
q=new B.aWu(b6)
p=new B.aWt(b6)
o=new B.aWw()
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
if(a3==null){a3=A.wh(null,new B.aWr(b6,new A.I(0,e,d,a1)))
f.m(0,j,a3)}a4=A.b([],b7)
for(a1=a2+1e-10,a2=0+a2,i=0;i<b6.U;++i){a5=c0[j][i]
a6=a5.length
if(a6===0)continue
if(a6<=1)a7=C.b.gcJ(a5).U!==C.zY&&C.b.gcJ(a5).U!==C.Yp
else a7=!0
a8=A.ct()
if(!a7){a6=C.b.gcJ(a5)
if(a8.b!==a8)A.U(A.Ou(a8.a))
a8.b=a6}else{a6=g.cl(0,new B.It(j,i),new B.aWs())
a9=A.ij()
a9.bl=C.zY
a9.r=!0
a6.mp(0,a5,a9)
if(a8.b!==a8)A.U(A.Ou(a8.a))
a8.b=a6}a6=b6.U
a9=b6.S
if(i===a6-1){a9.toString
b0=d-J.lJ(a9,i)}else{a9.toString
a6=J.lJ(a9,i+1)
a9=b6.S
a9.toString
b0=a6-J.lJ(a9,i)}if(b0<=0)continue
if(a7){a6=a8.b
if(a6===a8)A.U(A.rH(a8.a))
a9=b6.S
a9.toString
a9=J.lJ(a9,i)
b1=new Float64Array(16)
b2=new A.cJ(b1)
b2.GK()
b1[14]=0
b1[13]=0
b1[12]=a9
if(!A.aOr(a6.d,b2)){a9=A.P5(b2)
a6.d=a9?null:b2
a6.jd()}a9=new A.I(0,0,0+b0,a2)
if(!a6.f.k(0,a9)){a6.f=a9
a6.jd()}}for(a6=a5.length,m=0;m<a5.length;a5.length===a6||(0,A.G)(a5),++m){l=a5[m]
n.m(0,l.b,new B.It(j,i))
b3=r.$1(l)
b4=b3.d>a1?-w[j]:0
b5=0
if(a7){if(b3.a>=b0){a9=b6.S
a9.toString
a9=J.bRi(J.lJ(a9,i))
b5=a9}}else{a9=b3.c
b1=b6.S
b1.toString
if(a9<=J.lJ(b1,i)){a9=b6.S
a9.toString
a9=J.lJ(a9,i)
b5=a9}}if(b5!==0||b4!==0)o.$3(l,b5,b4)}a6=a8.b
if(a6===a8)A.U(A.rH(a8.a))
a6.x=i
a4.push(a6)}a1=A.ij()
a1.p4=j
a1.r=!0
a1.bl=C.Yo
a3.mp(0,a4,a1)
a1=new Float64Array(16)
a6=new A.cJ(a1)
a6.GK()
a1[14]=0
a1[13]=e
a1[12]=0
if(!A.aOr(a3.d,a6)){e=A.P5(a6)
a3.d=e?null:a6
a3.jd()}e=new A.I(0,0,0+d,a2)
if(!a3.f.k(0,e)){a3.f=e
a3.jd()}b8.push(a3)}c1.mp(0,b8,c2)},
alA(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B
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
o.kI(w)}}++s}t.aC(0,o.gaTD())
o.U=d
o.V=C.e.h8(e.length,d)
n=A.Q(e,x.dE)
o.B=n
o.a7()},
a02(d,e,f){var w,v=this,u=d+e*v.U,t=v.B[u]
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
aE(d){var w,v,u,t,s,r=this
r.f9(0)
w=r.bx
if(w!=null){for(v=w.length,u=0;u<v;++u){t=w[u]
if(t!=null)t.l()}r.bx=A.bJ(r.aG.length,null,!1,x.ea)}for(w=r.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){s=w[u]
if(s!=null)s.aE(0)}},
d0(d){var w,v,u,t
for(w=this.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t!=null)d.$1(t)}},
jo(){this.d0(this.gOg())},
cg(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.F0(t.L6(v),1/0)}return w},
ce(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.EV(t.L6(v),1/0)}return w},
cf(d){var w,v,u,t,s,r,q,p,o,n=this
if(n.V*n.U===0)return 0
w=n.HI(A.jl(1/0,d))
for(v=0,u=0;u<n.V;++u){for(t=0,s=0;r=n.U,s<r;++s){q=n.B[s+u*r]
if(q!=null){r=w[s]
p=q.gcL()
o=C.bt.e7(q.dy,r,p)
t=Math.max(t,o)}}v+=t}return v},
ck(d){return this.av(C.bB,d,this.gcM())},
i_(d){return this.di},
L6(d){return new A.ir(this.aQK(d),x.gN)},
aQK(d){var w=this
return function(){var v=d
var u=0,t=1,s=[],r,q,p
return function $async$L6(e,f,g){if(f===1){s.push(g)
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
HI(a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=x.gR,a5=A.bJ(a3.U,0,!1,a4),a6=A.bJ(a3.U,0,!1,a4),a7=A.bJ(a3.U,null,!1,x.cD)
for(w=a8.b,v=0,u=0,t=0,s=0;r=a3.U,s<r;++s){q=a3.a3.h(0,s)
if(q==null)q=a3.a4
p=a3.L6(s)
o=q.EV(p,w)
a5[s]=o
v+=o
a6[s]=q.F0(p,w)
n=q.WQ(0,p)
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
akP(d){var w=this.be
return new A.I(0,w[d],this.gC(0).a,w[d+1])},
ec(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.V*m.U===0)return l
w=m.HI(d)
for(v=x.L,u=l,t=0;t<m.U;++t){s=m.B[t]
r=A.h6(l,w[t])
if(s==null)continue
q=s.b
q.toString
p=v.a(q).b
if(p==null)p=m.aR
A:{q=l
if(D.aBy===p){q=s.gx0()
o=C.fP.e7(s.dy,new A.an(r,e),q)
q=o
break A}if(D.aBw===p||D.Zp===p||D.aBx===p||D.Zq===p||D.aBz===p)break A}if(q!=null)n=u==null||u<q
else n=!1
if(n)u=q}return u},
dE(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(l.V*l.U===0)return d.c2(C.ad)
w=l.HI(d)
v=C.b.fn(w,0,new B.aWx())
for(u=x.L,t=0,s=0;s<l.V;++s){for(r=0,q=0;p=l.U,q<p;++q){o=l.B[q+s*p]
if(o!=null){p=o.b
p.toString
p=u.a(p).b
switch((p==null?l.aR:p).a){case 3:return C.ad
case 0:case 1:case 2:case 5:p=A.h6(null,w[q])
n=o.gdr()
m=C.al.e7(o.dy,p,n)
r=Math.max(r,m.b)
break
case 4:break}}}t+=r}return d.c2(new A.J(v,t))},
cw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2="RenderBox was not laid out: ",a3=x.cT.a(A.K.prototype.ga5.call(a1)),a4=a1.V,a5=a1.U
if(a4*a5===0){a1.R=0
a1.fy=a3.c2(C.ad)
return}w=a1.HI(a3)
v=x.gR
u=A.bJ(a5,0,!1,v)
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
o=A.bJ(a5,0,!1,v)
for(n=p*a5,m=0,l=!1,k=0,j=0,t=0;t<a5;++t){i=a1.B[t+n]
if(i!=null){h=i.b
h.toString
r.a(h)
h.d=p
g=h.b
switch((g==null?a1.aR:g).a){case 3:i.dH(A.h6(null,w[t]),!0)
g=a1.cb
g.toString
f=i.At(g,!0)
g=i.fy
if(f!=null){k=Math.max(k,f)
j=Math.max(j,(g==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):g).b-f)
o[t]=f
l=!0}else{m=Math.max(m,(g==null?A.U(A.Z(a2+A.L(i).j(0)+"#"+A.c7(i))):g).b)
h.a=new A.r(u[t],q)}break
case 0:case 1:case 2:case 5:i.dH(A.h6(null,w[t]),!0)
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
case 4:case 5:i.ia(A.h6(m,w[t]))
g.a=new A.r(u[t],q)
break}}}}s.push(q)
v=a1.R
v===$&&A.a()
a1.fy=a3.c2(new A.J(v,q))},
ee(d,e){var w,v,u,t
for(w=this.B.length-1,v=x.O;w>=0;--w){u=this.B[w]
if(u!=null){t=u.b
t.toString
if(d.lq(new B.aWy(u),v.a(t).a,e))return!0}}return!1},
aO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.V*k.U===0)return
if(k.aG!=null){w=d.gdz(0)
for(v=k.be,u=e.a,t=e.b,s=k.ghl(),r=0;r<k.V;++r){q=k.aG
if(q.length<=r)break
q=q[r]
if(q!=null){p=k.bx
if(p[r]==null)p[r]=q.DH(s)
q=k.bx[r]
q.toString
p=v[r]
o=k.b9
n=k.fy
if(n==null)n=A.U(A.Z("RenderBox was not laid out: "+A.L(k).j(0)+"#"+A.c7(k)))
q.ig(w,new A.r(u,t+p),o.Lf(new A.J(n.a,v[r+1]-p)))}}}for(v=x.O,u=e.a,t=e.b,m=0;s=k.B,m<s.length;++m){l=s[m]
if(l!=null){s=l.b
s.toString
s=v.a(s).a
d.eD(l,new A.r(s.a+u,s.b+t))}}}}
B.It.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
if(!(e instanceof B.It))return!1
return this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.mq.prototype={
j(d){var w,v=this.a
v=v!=null?"TableRow("+(v.j(0)+", "):"TableRow("
v+=this.b.j(0)+", "
w=this.c
v=(w.length===0?v+"no children":v+A.i(w))+")"
return v.charCodeAt(0)==0?v:v}}
B.ly.prototype={}
B.Sm.prototype={
d8(d){return new B.asu(D.alV,A.ep(x.dk),this,C.bc)},
bj(d){var w,v,u,t,s,r,q=this,p=q.c,o=p.length
p=o!==0?p[0].c.length:0
w=d.O(x.Q).w
v=A.CO(d,null)
u=x.v
t=x.cQ
s=x.eV
r=A.b([],x.eQ)
p=new B.w2(D.alU,p,o,q.d,D.C3,w,q.r,v,q.w,null,A.z(u,t),A.z(u,s),A.z(t,s),r,new A.bs(),A.aJ(x.cn))
p.bf()
o=A.b([],x.V)
C.b.sp(o,p.U*p.V)
p.B=o
p.saiU(q.y)
return p},
by(d,e){var w,v=this
e.saQL(v.d)
e.saSS(D.C3)
w=d.O(x.Q).w
e.scI(w)
e.saPX(0,v.r)
e.saiU(v.y)
e.soU(A.CO(d,null))
e.saST(v.w)
e.sZe(0,null)}}
B.asu.prototype={
gaj(){return x.S.a(A.bW.prototype.gaj.call(this))},
ic(d,e){var w,v,u=this,t={}
u.p2=!0
u.rf(d,e)
t.a=-1
w=u.e
w.toString
w=x.de.a(w).c
v=A.aa(w).i("ae<1,ly>")
t=A.Q(new A.ae(w,new B.bpE(t,u),v),v.i("ax.E"))
t.$flags=1
u.p1=t
u.abk()
u.p2=!1},
mb(d,e){var w=x.S
w.a(A.bW.prototype.gaj.call(this))
if(!(d.b instanceof B.qm))d.b=new B.qm(C.t)
if(!this.p2)w.a(A.bW.prototype.gaj.call(this)).a02(e.a,e.b,d)},
mh(d,e,f){},
nn(d,e){x.S.a(A.bW.prototype.gaj.call(this)).a02(e.a,e.b,null)},
dq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.p2=!0
w=x.am
v=A.z(x.f9,w)
for(u=f.p1,t=u.length,s=0;s<u.length;u.length===t||(0,A.G)(u),++s){r=u[s]
q=r.a
if(q!=null)v.m(0,q,r.b)}u=f.p1
t=C.b.gX(u)
p=new A.hh(t,new B.bpF(),A.aa(u).i("hh<1>"))
o=A.b([],x.R)
n=A.b3(w)
for(w=e.c,u=f.p3,q=x.bs,m=0;m<w.length;++m){r=w[m]
l=r.a
k=l==null
if(!k&&v.aF(0,l)){k=v.h(0,l)
k.toString
n.E(0,k)
j=k}else j=k&&p.t()?t.gN(0).b:D.alW
k=r.c
i=k.length
h=A.b(new Array(i),q)
for(g=0;g<i;++g)h[g]=new B.Jw(g,m)
o.push(new B.ly(l,f.Zw(j,k,u,h)))}while(p.t())f.OU(t.gN(0).b,C.rx,u)
for(w=v.$ti.i("ck<2>"),t=new A.ck(v,w).gX(0),w=new A.hh(t,new B.bpG(n),w.i("hh<t.E>"));w.t();)f.OU(t.gN(0),C.rx,u)
f.p1=o
f.abk()
u.a8(0)
f.pM(0,e)
f.p2=!1},
abk(){var w=x.S.a(A.bW.prototype.gaj.call(this)),v=this.p1,u=v.length!==0?v[0].b.length:0,t=A.aa(v).i("hr<1,H>")
v=A.Q(new A.hr(v,new B.bpC(),t),t.i("t.E"))
w.alA(u,v)},
d0(d){var w,v,u,t
for(w=this.p1,v=A.aa(w),w=new A.n1(C.b.gX(w),new B.bpH(),C.iW,v.i("n1<1,bM>")),u=this.p3,v=v.i("bM");w.t();){t=w.d
if(t==null)t=v.a(t)
if(!u.n(0,t))d.$1(t)}},
kN(d){this.p3.E(0,d)
this.lR(d)
return!0}}
B.Sn.prototype={
u(d){var w=null
return new B.ast(this.c,A.bC(w,w,w,this.d,!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.zY,w,w,w,w,w,w,w,w,C.P,w),w)}}
B.ast.prototype={
v3(d){var w,v=d.b
v.toString
x.L.a(v)
w=this.f
if(v.b!=w){v.b=w
v=d.gbY(d)
if(v!=null)v.a7()}}}
B.Jw.prototype={
k(d,e){if(e==null)return!1
if(J.aj(e)!==A.L(this))return!1
return e instanceof B.Jw&&this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.avb.prototype={}
B.aJG.prototype={}
B.ke.prototype={
L(){return"PostgresChangeFilterType."+this.b},
gb1b(){var w,v=this
A:{if(D.Xe===v){w="in"
break A}if(D.avB===v){w="is"
break A}if(D.avu===v){w="isdistinct"
break A}if(D.Xd===v||D.avr===v||D.avv===v||D.avw===v||D.avx===v||D.avy===v||D.avz===v||D.avA===v||D.avs===v||D.avt===v){w=v.b
break A}w=null}return w}}
B.aaT.prototype={
j(d){var w=this,v=w.a
if(v===D.Xe)return w.b+"=in.("+A.i(x.hf.a(w.c).eQ(0,new B.aRV(),x.N).cj(0,","))+")"
return w.b+"="+v.gb1b()+"."+B.bHP(w.c)}}
var z=a.updateTypes(["R<~>()","~()","F(F)","A(rc)","R<~>(a3<f,@>,f{askNote:A})","xE(y)","A(fJ)","Cq(y)","f(f?)","Bx(y)","~(v)","BA(y)","wm(dd<wm>)","HT(y,v)","BI(y)","C_(y)","BR(y)","Iz(y,C,bK?)","zz(y)","C3(y)","Cf(y)","BH(y)","Cr(y)","CC(y)","+color,label(E,f)(f)","mq(v)","I()(H)","A(y)","R<u<a3<f,@>>>(cg<u<a3<f,@>>>,At)","A(mq)","k_?(mq)","ly(mq)","A(ly)","t<H>(ly)","u<bM>(ly)","zB(f5<C?>)","+icon,label(a6,f)(f)","mM(dd<mM>)"])
B.bwh.prototype={
$1(d){return new B.wm(d.an($.bH(),x.A))},
$S:z+12}
B.btP.prototype={
$1(d){return this.ak4(d)},
ak4(d){var w=0,v=A.q(x.C),u
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=3
return A.j(d.an($.uq().gafw(),x.fY),$async$$1)
case 3:if(f==null){u=A.b3(x.N)
w=1
break}u=d.an($.qT(),x.cA).qH()
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:979}
B.bvB.prototype={
$1(d){return d.an($.CU(),x.K).qN()},
$S:980}
B.buJ.prototype={
$2(d,e){return d.an($.CU(),x.K).qE(e)},
$S:981}
B.bvE.prototype={
$2(d,e){return d.an($.CU(),x.K).Ne(e.b,e.c,e.a,e.d)},
$S:z+28}
B.aLQ.prototype={
$0(){return this.a.r.aD(0,$.CU(),x.K).ke(this.b,this.c)},
$S:2}
B.aLR.prototype={
$0(){var w=this
return w.a.r.aD(0,$.CU(),x.K).Lk(w.d,w.b,w.c,w.e)},
$S:2}
B.aLS.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.j(u.b.r.aD(0,$.CU(),x.K).M6(u.d,u.c,u.e),$async$$0)
case 2:t.a=e
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.aLX.prototype={
$0(){return C.bF},
$S:20}
B.aLW.prototype={
$2(d,e){var w=null
return A.d_(new A.ai(C.dd,A.k(A.i(d),w,w,w,A.D(C.aU,14,C.l),w,w,w),w),w,w)},
$S:35}
B.aLV.prototype={
$1(d){var w=this.a.atN(d)
if(w.length===0)return new B.akM(null)
return new B.anK(w,null)},
$S:982}
B.aLU.prototype={
$1(d){return d.e},
$S:z+6}
B.bi8.prototype={
$2(d,e){var w,v,u,t,s=e.b<500?2:3,r=A.b([],x.p)
for(w=this.a.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
r.push(new B.Pb(t.c,t.a,t.b,new B.bi7(d,t),t.x,t.f,t.r,t.w,null))}return A.a6i(1.05,r,s,12,12,C.jX,!0)},
$S:104}
B.bi7.prototype={
$0(){var w=x.z
return A.b6(this.a,!1).es(A.eH(new B.bi6(this.b),null,w),w)},
$S:0}
B.bi6.prototype={
$1(d){return this.a.d},
$S:25}
B.bvm.prototype={
$1(d){return J.d(J.a_(d,"kostenart"),this.a.a)},
$S:66}
B.bvn.prototype={
$2(d,e){return d+B.JR(J.a_(e,"betrag_brutto"))},
$S:67}
B.b46.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b47.prototype={
$0(){var w=this.a
w.z=!0
w.Q=null},
$S:0}
B.b48.prototype={
$0(){return this.a.z=!1},
$S:0}
B.b42.prototype={
$0(){var w,v=this.a,u=v.x
u.toString
w=v.y
return B.bBZ(v.gaNB(),u,"B\xf6rdesnack24 GbR",w,"102/178/01635","DE 458804058")},
$S:0}
B.b45.prototype={
$1(d){var w=null,v=this.a,u=A.k("Die Anlage PKW-Kosten "+v.gq_()+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach beidseitiger Freigabe wird sie mit den hinterlegten Unterschriften abgeschlossen. Fortfahren?",w,w,w,w,w,w,w)
return A.iu(A.b([A.d7(C.bZ,w,w,new B.b43(v),w,w),A.dl(E.mq,new B.b44(v),A.dK(C.m,C.A,w,w,w,w,w))],x.p),w,u,E.mr)},
$S:44}
B.b43.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cE(!1)
return null},
$S:0}
B.b44.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cE(!0)
return null},
$S:0}
B.bgj.prototype={
$1(d){return this.a.d.$1(this.b)},
$S:8}
B.bcs.prototype={
$0(){var w=this
return w.a.uH(w.b,w.c,w.d)},
$S:0}
B.bct.prototype={
$0(){return this.a.xn(this.b,this.c)},
$S:0}
B.bcu.prototype={
$0(){return this.a.xo(this.b,this.c)},
$S:0}
B.bcl.prototype={
$1(d){return new A.ll(new B.bck(this.a,this.b,this.c),null)},
$S:62}
B.bck.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=A.b([],x.I)
for(w=D.lV.gi1(D.lV),w=w.gX(w),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dW(u.a,A.k(u.b,t,t,t,t,t,t,t),C.aW,t,v))}w=x.p
s=A.ad(A.b([A.k1(D.Fx,r,!1,q,new B.bcg(s,e),t,x.N),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dP(),this.b,t,t,t,t,t,2,D.Fv,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,C.ez,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.C,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ab,t,C.X,t,t,t,t),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dP(),this.c,t,t,t,t,t,2,D.Fw,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.C,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ab,t,C.X,t,t,t,t)],w),C.k,t,C.f,C.H,16)
return A.iu(A.b([A.d7(D.ZH,t,t,new B.bch(d),t,t),A.d7(C.bZ,t,t,new B.bci(d),t,t),A.dl(C.dt,new B.bcj(d),t)],w),t,s,D.aIH)},
$S:74}
B.bcg.prototype={
$1(d){return this.b.$1(new B.bcf(this.a,d))},
$S:12}
B.bcf.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bch.prototype={
$0(){A.b6(this.a,!1).cE("streichen")
return null},
$S:0}
B.bci.prototype={
$0(){A.b6(this.a,!1).cE("abbrechen")
return null},
$S:0}
B.bcj.prototype={
$0(){A.b6(this.a,!1).cE("speichern")
return null},
$S:0}
B.bce.prototype={
$1(d){var w=null,v=A.k("Kilometerst\xe4nde "+this.a.f,w,w,w,w,w,w,w),u=x.p,t=A.ad(A.b([A.dH(w,C.aw,!1,w,!0,C.n,w,A.dP(),this.b,w,w,w,w,w,2,D.aeQ,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cY,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w),A.dH(w,C.aw,!1,w,!0,C.n,w,A.dP(),this.c,w,w,w,w,w,2,D.af_,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cY,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w)],u),C.k,w,C.f,C.H,16)
return A.iu(A.b([A.d7(C.bZ,w,w,new B.bcc(d),w,w),A.dl(C.dt,new B.bcd(d),w)],u),w,t,v)},
$S:44}
B.bcc.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.bcd.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.bcr.prototype={
$1(d){var w=this
return new A.ll(new B.bcq(w.a,w.b,w.c,w.d),null)},
$S:62}
B.bcq.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=A.k("Kosten "+A.i(J.a_(t.b.e,"kennzeichen")),s,s,s,s,s,s,s),q=t.a,p=q.a,o=A.b([],x.I)
for(w=D.lV.gi1(D.lV),w=w.gX(w),v=x.r;w.t();){u=w.gN(w)
o.push(new A.dW(u.a,A.k(u.b,s,s,s,s,s,s,s),C.aW,s,v))}w=x.p
q=A.ad(A.b([A.k1(D.Fx,p,!1,o,new B.bcn(q,e),s,x.N),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dP(),t.c,s,s,s,s,s,2,D.Fv,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,C.ez,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.C,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ab,s,C.X,s,s,s,s),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dP(),t.d,s,s,s,s,s,2,D.Fw,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.C,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ab,s,C.X,s,s,s,s)],w),C.k,s,C.f,C.H,16)
return A.iu(A.b([A.d7(C.bZ,s,s,new B.bco(d),s,s),A.dl(D.ZO,new B.bcp(d),s)],w),s,q,r)},
$S:74}
B.bcn.prototype={
$1(d){return this.b.$1(new B.bcm(this.a,d))},
$S:12}
B.bcm.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bco.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.bcp.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.bca.prototype={
$0(){return this.a.xf(this.b,this.c)},
$S:0}
B.bcb.prototype={
$1(d){var w=this
return w.a.uE(w.b,w.c,w.d)},
$S:64}
B.bc1.prototype={
$1(d){var w=this
return new A.ll(new B.bc0(w.a,w.b,w.c,w.d),null)},
$S:62}
B.bc0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fV(D.Fp,A.k($.dp().am(k),n,n,n,n,n,n,n),new B.bbW(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dP(),o.c,n,n,n,n,n,2,D.FB,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dP(),o.d,n,n,n,n,n,2,D.Fy,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.ez,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.aK(l,l.gp(0),s.i("aK<ag.E>")),r=x.r,s=s.i("ag.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dW(A.i(p.h(q,"id")),A.k(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.et(A.ad(A.b([k,w,v,A.k1(D.Fz,u,!1,t,new B.bbX(m,e),n,x.N)],l),C.a8,n,C.f,C.H,16),n,n,n,C.K)
return A.iu(A.b([A.d7(D.ZH,n,n,new B.bbY(d),n,n),A.d7(C.bZ,n,n,new B.bbZ(d),n,n),A.dl(C.dt,new B.bc_(d),n)],l),n,m,D.aHo)},
$S:74}
B.bbW.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.j(A.pf(u.c,A.bB(r,1,1,0,0,0,0),null,s,A.bB(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbV(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbV.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbX.prototype={
$1(d){return this.b.$1(new B.bbU(this.a,d))},
$S:12}
B.bbU.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbY.prototype={
$0(){A.b6(this.a,!1).cE("streichen")
return null},
$S:0}
B.bbZ.prototype={
$0(){A.b6(this.a,!1).cE("abbrechen")
return null},
$S:0}
B.bc_.prototype={
$0(){A.b6(this.a,!1).cE("speichern")
return null},
$S:0}
B.bc9.prototype={
$1(d){var w=this
return new A.ll(new B.bc8(w.a,w.b,w.c,w.d),null)},
$S:62}
B.bc8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fV(D.Fp,A.k($.dp().am(k),n,n,n,n,n,n,n),new B.bc4(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dP(),o.c,n,n,n,n,n,2,D.FB,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dP(),o.d,n,n,n,n,n,2,D.Fy,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.ez,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.C,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ab,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.aK(l,l.gp(0),s.i("aK<ag.E>")),r=x.r,s=s.i("ag.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dW(A.i(p.h(q,"id")),A.k(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.et(A.ad(A.b([k,w,v,A.k1(D.Fz,u,!1,t,new B.bc5(m,e),n,x.N)],l),C.a8,n,C.f,C.H,16),n,n,n,C.K)
return A.iu(A.b([A.d7(C.bZ,n,n,new B.bc6(d),n,n),A.dl(D.ZO,new B.bc7(d),n)],l),n,m,D.aH0)},
$S:74}
B.bc4.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.j(A.pf(u.c,A.bB(r,1,1,0,0,0,0),null,s,A.bB(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bc3(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bc3.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bc5.prototype={
$1(d){return this.b.$1(new B.bc2(this.a,d))},
$S:12}
B.bc2.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bc6.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.bc7.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.bqQ.prototype={
$1(d){var w=J.a_(d,"image_url")
return A.i(w==null?"":w).length===0},
$S:66}
B.bqR.prototype={
$1(d){return A.i(J.a_(d,"full_name"))},
$S:41}
B.boT.prototype={
$1(d){var w=J.a_(x.f.a(d),"name")
return A.i(w==null?"":w)},
$S:38}
B.boU.prototype={
$1(d){return d.length!==0},
$S:17}
B.awW.prototype={
$0(){var w=x.z
return A.b6(this.a,!1).es(A.eH(new B.awV(),null,w),w)},
$S:0}
B.awV.prototype={
$1(d){return D.a_Z},
$S:z+5}
B.brT.prototype={
$1(d){return new F.mM(d.an($.bH(),x.A))},
$S:z+37}
B.brS.prototype={
$1(d){return d.an($.bwO(),x.u).aXy(0)},
$S:53}
B.aCG.prototype={
$0(){return C.bF},
$S:20}
B.aCF.prototype={
$2(d,e){var w=null
return A.d_(new A.ai(C.dd,A.k(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:35}
B.aCE.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNN
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ahy(v.gN(v),null))
v=A.ig(A.dG(w,C.C,null,C.K,!1),C.m,new B.aCD(this.a))}return v},
$S:80}
B.aCD.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwN()
if(s.e==null)A.U(A.Z(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b4j.prototype={
$1(d){return d==null?null:A.eT(J.am(d))},
$S:987}
B.b4i.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(!j.b){w=j.c.O(x.q).f
v=j.d
if(v==="rejected")v="Diese Freigabe wurde abgelehnt."
else v=v==="cancelled"?"Diese Freigabe wurde abgebrochen.":"Signiertes PDF wird noch erzeugt \u2026"
w.aW(A.c5(i,i,i,i,i,C.n,i,A.k(v,i,i,i,i,i,i,i),i,C.I,i,i,i,i,i,i,i,i,i,i))
return}if(j.e==="inventory_fifo"){w=j.a.e
v=J.V(w)
u=v.h(w,"snapshot")
if(x.f.b(u)){t=J.V(u)
s=x.g
r=s.a(t.h(u,"movements"))
if(r==null)r=C.bo
q=x.P
p=J.cG(r,q)
t=s.a(t.h(u,"lots"))
o=J.cG(t==null?C.bo:t,q)
t=s.a(v.h(w,"partner_signatures"))
n=J.cG(t==null?C.bo:t,q)
t=s.a(v.h(w,"decisions"))
m=J.cG(t==null?C.bo:t,q)
t=v.h(w,"period_from")
t=t==null?i:J.am(t)
l=A.eT(t==null?"":t)
if(l==null)l=new A.b_(Date.now(),0,!1)
w=v.h(w,"period_to")
w=w==null?i:J.am(w)
k=A.eT(w==null?"":w)
B.bvo(m,l,o,p,n,k==null?new A.b_(Date.now(),0,!1):k)
return}}w=j.f
if(w!=null&&w.length!==0)A.mH(A.cm(w,0,i),C.em,"_blank")
else j.a.Ct(j.c,j.r,j.w)},
$S:0}
B.b4g.prototype={
$0(){return this.a.uw(this.b,this.c,"approved")},
$S:0}
B.b4h.prototype={
$0(){return this.a.uw(this.b,this.c,"rejected")},
$S:0}
B.b4f.prototype={
$0(){return A.uK(new A.pw(this.a))},
$S:0}
B.b4d.prototype={
$1(d){var w=null,v=this.a,u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dP(),v,w,w,w,w,w,2,D.aeS,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w),t=this.b
return A.iu(A.b([A.d7(C.bZ,w,w,new B.b4b(t),w,w),A.dl(C.ms,new B.b4c(v,t),w)],x.p),w,u,D.aHg)},
$S:44}
B.b4b.prototype={
$0(){A.b6(this.a,!1).cE(null)
return null},
$S:0}
B.b4c.prototype={
$0(){var w=C.c.aL(this.a.a.a)
if(w.length<3)return
A.b6(this.b,!1).cE(w)},
$S:0}
B.b4e.prototype={
$1(d){return D.aQ8},
$S:z+7}
B.bo5.prototype={
$0(){var w=this.a,v=this.b
w.w=!v.gZ(v)?v.ga2(v):null
w.x=!1},
$S:0}
B.bo6.prototype={
$0(){var w=this.a
w.z=A.i(this.b)
w.x=!1},
$S:0}
B.boa.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bob.prototype={
$0(){var w=this.b,v=this.c
w=w==null?v:v+"\n"+w
return this.a.z=w},
$S:0}
B.boc.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bod.prototype={
$0(){return this.a.y=!1},
$S:0}
B.boe.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bof.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bog.prototype={
$0(){return this.a.y=!1},
$S:0}
B.boh.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.boi.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bom.prototype={
$3(d,e,f){return D.aIs},
$S:988}
B.bon.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.boo.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.b4L.prototype={
$0(){return this.a.x=!0},
$S:0}
B.b4M.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b4N.prototype={
$0(){return this.a.x=!1},
$S:0}
B.b6l.prototype={
$0(){var w=this.a
return w.w=w.wZ()},
$S:0}
B.b6k.prototype={
$1(d){return C.c.cZ(C.e.j(d),2,"0")},
$S:69}
B.b6q.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b6m(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b6m.prototype={
$0(){var w=this.a
return w.w=w.wZ()},
$S:0}
B.b6p.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.c
if(p!=null)return A.dG(A.b([A.by(C.an,A.k("K\xfcndigungen konnten nicht geladen werden: "+A.i(p),q,q,q,q,q,q,q),C.eJ,q,C.C,q,3)],x.p),C.ai,q,C.K,!1)
p=e.b
if(p==null)return C.bF
w=J.cB(p)
v=w.ik(p,new B.b6n()).gp(0)
u=A.k("Eingegangene K\xfcndigungen",q,q,q,A.c8(C.j,22,C.q),q,q,q)
t=w.gZ(p)?"Bisher sind keine K\xfcndigungen eingegangen.":""+v+" offen \xb7 "+w.gp(p)+" gesamt. Der Zugang wurde jeweils automatisch per E-Mail best\xe4tigt (\xa7 312k Abs. 2 BGB)."
s=x.p
t=A.b([D.a8R,C.bW,u,C.M,A.k(t,q,q,q,A.D(C.p,13,C.l),q,q,q),C.L],s)
for(p=w.gX(p),w=this.a,u=w.gayx();p.t();){r=p.gN(p)
C.b.K(t,A.b([new B.aiu(r,u,new B.b6o(w,r),q),C.u],s))}return A.dG(t,C.ai,q,C.K,!1)},
$S:350}
B.b6n.prototype={
$1(d){return J.a_(d,"processed_at")==null},
$S:66}
B.b6o.prototype={
$0(){return this.a.IR(A.aI(J.a_(this.b,"id")))},
$S:0}
B.azq.prototype={
$1(d){return"Netto: "+A.i(J.a_(d,"net_amount"))+" \u20ac"},
$S:41}
B.azp.prototype={
$1(d){var w=J.V(d),v=w.h(d,"collected_at")
v=v==null?"":C.c.a_(C.c.iO(J.am(v),"T"," "),0,16)
return v+" \xb7 Brutto "+A.i(w.h(d,"amount_gross"))+" \u20ac \xb7 Wechselgeld "+A.i(w.h(d,"change_amount"))+" \u20ac"},
$S:41}
B.azr.prototype={
$2(d,e){return A.kE(null,new B.azo(),d,!0,null,null,x.P)},
$S:84}
B.azo.prototype={
$1(d){return D.aN1},
$S:z+9}
B.b6u.prototype={
$1(d){var w=this.a
return w.J(new B.b6t(w,d))},
$S:12}
B.b6t.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b6v.prototype={
$1(d){var w=d==null?"":d
return A.fX(A.ay(w,",","."))==null?"Betrag eingeben":null},
$S:15}
B.aA3.prototype={
$1(d){var w="cleaning_type",v=J.V(d),u=D.apZ.h(0,v.h(d,w))
return u==null?A.i(v.h(d,w)):u},
$S:41}
B.aA2.prototype={
$1(d){var w,v=J.V(d),u=v.h(d,"cleaned_at")
u=u==null?"":C.c.a_(C.c.iO(J.am(u),"T"," "),0,16)
w=v.h(d,"agent")!=null?" \xb7 "+A.i(v.h(d,"agent")):""
v=v.h(d,"notes")!=null?"\n"+A.i(v.h(d,"notes")):""
return u+w+v},
$S:41}
B.aA4.prototype={
$2(d,e){return A.kE(null,new B.aA1(),d,!0,null,null,x.P)},
$S:84}
B.aA1.prototype={
$1(d){return D.aNb},
$S:z+11}
B.b7h.prototype={
$1(d){var w=this.a
return w.J(new B.b7g(w,d))},
$S:12}
B.b7g.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b7i.prototype={
$1(d){var w=this.a
return w.J(new B.b7f(w,d))},
$S:12}
B.b7f.prototype={
$0(){var w=this.b
if(w==null)w="exterior"
return this.a.Q=w},
$S:0}
B.b7j.prototype={
$1(d){return this.a.as=d},
$S:30}
B.b7v.prototype={
$1(d){var w=null,v=A.k(this.a==="resolved"?"Reklamation erledigen":"Reklamation ablehnen",w,w,w,w,w,w,w),u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dP(),this.b,w,w,w,w,w,2,D.aev,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,300,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w)
return A.iu(A.b([A.d7(C.bZ,w,w,new B.b7t(d),w,w),A.dl(C.dt,new B.b7u(d),w)],x.p),w,u,v)},
$S:44}
B.b7t.prototype={
$0(){return A.b6(this.a,!1).cE(!1)},
$S:0}
B.b7u.prototype={
$0(){return A.b6(this.a,!1).cE(!0)},
$S:0}
B.b7w.prototype={
$0(){var w=this.a
return w.w=w.x_()},
$S:0}
B.b7B.prototype={
$2(d,e){var w,v,u,t=null
if(e.a!==C.j4)return C.bF
w=e.c
if(w!=null)return A.d_(new A.ai(C.C,A.k("Fehler: "+A.i(w),t,t,t,A.D(C.j,13,C.l),t,t,t),t),t,t)
v=e.b
if(v==null)v=C.cp
w=J.V(v)
if(w.gZ(v))return A.d_(A.k("Keine Reklamationen \u2014 sehr gut!",t,t,t,A.D(C.p,13,C.l),t,t,t),t,t)
u=this.a
return A.ig(A.zw(t,new B.b7y(u,v),w.gp(v),C.ai,new B.b7z()),C.m,new B.b7A(u))},
$S:350}
B.b7A.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b7x(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b7x.prototype={
$0(){var w=this.a
return w.w=w.x_()},
$S:0}
B.b7z.prototype={
$2(d,e){return C.u},
$S:126}
B.b7y.prototype={
$2(d,e){return new B.HT(J.a_(this.b,e),B.c5I(),B.c5J(),this.a.gaLN(),null)},
$S:z+13}
B.b7q.prototype={
$0(){var w=this.a
return w.f.$2(w.c,"in_progress")},
$S:0}
B.b7r.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"resolved",!0)},
$S:0}
B.b7s.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"rejected",!0)},
$S:0}
B.aCB.prototype={
$1(d){var w=J.V(d),v=w.h(d,"product_label")
return A.i(v==null?"Ware":v)+" \xb7 "+A.i(w.h(d,"quantity"))+" Stk."},
$S:41}
B.aCA.prototype={
$1(d){var w,v="mhd_date",u=J.V(d),t=u.h(d,"disposed_at")
t=t==null?"":C.c.a_(C.c.iO(J.am(t),"T"," "),0,16)
w=D.aq_.h(0,u.h(d,"reason"))
w=A.i(w==null?u.h(d,"reason"):w)
u=u.h(d,v)!=null?" \xb7 MHD "+A.i(u.h(d,v)):""
return t+" \xb7 "+w+u},
$S:41}
B.aCC.prototype={
$2(d,e){return A.kE(null,new B.aCz(),d,!0,null,null,x.P)},
$S:84}
B.aCz.prototype={
$1(d){return D.aNy},
$S:z+14}
B.bak.prototype={
$1(d){var w=this.a
return w.J(new B.baj(w,d))},
$S:12}
B.baj.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bal.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.Q,o=A.b([D.a75],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aI(t.h(u,"id"))
u=A.ak(t.h(u,"name"))
o.push(new A.dW(s,A.k(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.k1(D.aeW,p,!0,o,new B.bai(q,d),r,x.N)},
$S:195}
B.bai.prototype={
$1(d){var w=this.a
return w.J(new B.baf(w,d,this.b))},
$S:12}
B.baf.prototype={
$0(){var w=this.a,v=w.Q=this.b
if(v!=null){v=A.ak(J.a_(J.bRp(this.c,new B.bae(v)),"name"))
if(v==null)v=""
w.y.sew(0,v)}},
$S:0}
B.bae.prototype={
$1(d){return J.d(J.a_(d,"id"),this.a)},
$S:66}
B.bam.prototype={
$0(){return C.ap},
$S:101}
B.ban.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflichtfeld":null},
$S:15}
B.bao.prototype={
$1(d){var w=A.iA(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.bap.prototype={
$1(d){var w=this.a
return w.J(new B.bah(w,d))},
$S:12}
B.bah.prototype={
$0(){var w=this.b
if(w==null)w="mhd"
return this.a.as=w},
$S:0}
B.baq.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=new A.b_(Date.now(),0,!1)
w=2
return A.j(A.pf(u.b,A.bB(A.aW(s)-2,1,1,0,0,0,0),null,s,A.bB(A.aW(s)+2,1,1,0,0,0,0),C.eq),$async$$0)
case 2:r=e
if(r!=null){t=u.a
t.J(new B.bag(t,r))}return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bag.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bar.prototype={
$1(d){return this.a.ax=d},
$S:30}
B.bsg.prototype={
$1(d){return this.ajW(d)},
ajW(d){var w=0,v=A.q(x.D),u,t,s,r,q,p
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=$.bH()
s=x.A
q=J
p=x.j
w=3
return A.j(d.aD(0,t,s).h4("list_documents",x.z),$async$$1)
case 3:r=q.cG(p.a(f),x.P)
s=d.aD(0,t,s).ay
s===$&&A.a()
w=4
return A.j(A.k6(new A.ae(r,new B.bsf(s.cV("documents")),r.$ti.i("ae<ag.E,R<bn>>")),x.a),$async$$1)
case 4:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bsf.prototype={
$1(d){return this.ajV(d)},
ajV(d){var w=0,v=A.q(x.a),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$$1=A.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:p=J.V(d)
o=p.h(d,"latest_file_path")
n=o==null?null:J.am(o)
if(n==null||n.length===0){w=1
break}t=4
l=p
k=d
w=7
return A.j(r.a.nR(n,86400),$async$$1)
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
$S:992}
B.bst.prototype={
$1(d){return this.ajY(d)},
ajY(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
s=x.j
w=3
return A.j(d.aD(0,$.bH(),x.A).h4("list_document_folders",x.z),$async$$1)
case 3:u=t.cG(s.a(f),x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bti.prototype={
$2(d,e){return this.ak2(d,e)},
ak2(d,e){var w=0,v=A.q(x.D),u,t,s,r
var $async$$2=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t=x.z
s=J
r=x.j
w=3
return A.j(d.aD(0,$.bH(),x.A).ev("list_document_signature_tasks",A.a4(["p_document",e],x.N,t),t),$async$$2)
case 3:u=s.cG(r.a(g),x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$2,v)},
$S:993}
B.bbd.prototype={
$0(){var w=0,v=A.q(x.a),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
r=s.a
q=r.gc3()
p=$.bH()
o=x.A
n=q.aD(0,p,o).ax
n===$&&A.a()
m=x.N
l=x.z
w=6
return A.j(n.jP("documents-init-templates",A.z(m,l)),$async$$0)
case 6:n=q.aD(0,p,o).ax
n===$&&A.a()
w=7
return A.j(n.jP("documents-install-branded-set",A.z(m,l)),$async$$0)
case 7:o=q.aD(0,p,o).ax
o===$&&A.a()
w=8
return A.j(o.jP("documents-install-haccp-set",A.z(m,l)),$async$$0)
case 8:if(r.c!=null){r=$.Kc()
if(q.e==null)A.U(A.Z(y.b))
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
$S:227}
B.bb9.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:352}
B.bba.prototype={
$0(){return!1},
$S:48}
B.bbb.prototype={
$0(){var w=this.a
return w.By(this.b,w.gc3())},
$S:0}
B.bbc.prototype={
$0(){var w=this.a
return w.xd(this.b,w.gc3())},
$S:0}
B.baN.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:352}
B.baO.prototype={
$0(){return!1},
$S:48}
B.baQ.prototype={
$0(){return C.bF},
$S:20}
B.baP.prototype={
$2(d,e){var w=null
return new A.ai(C.C,A.k(A.i(d),w,w,w,w,w,w,w),w)},
$S:83}
B.baM.prototype={
$1(d){var w=this
return A.dz(w.b,new B.baJ(w.a,d,w.c,w.d,w.e),new B.baK(),new B.baL(),!1,!0,!1,x.D,x.l)},
$S:80}
B.baL.prototype={
$0(){return C.ap},
$S:101}
B.baK.prototype={
$2(d,e){var w=null
return A.k(A.i(d),w,w,w,w,w,w,w)},
$S:138}
B.baJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=J.qW(m.b,new B.bay(k)),i=A.Q(j,j.$ti.i("t.E")),h=A.z(x.N,x.D)
for(j=i.length,w=0;w<i.length;i.length===j||(0,A.G)(i),++w){v=i[w]
u=A.ak(J.a_(v,"category"))
if(u==null)u="sonstiges"
J.e4(h.cl(0,u,new B.baz()),v)}if(k.x==null)t=d
else{j=J.qW(d,new B.baA(k))
t=A.Q(j,j.$ti.i("t.E"))}j=m.c
s=A.b([new B.ar6(new B.baB(k),l),C.u,new B.alx(d,k.x,new B.baC(k),l),C.L],x.p)
for(r=J.bh(t),q=m.d,p=m.e;r.t();){o=r.gN(r)
n=h.h(0,J.a_(o,"slug"))
if(n==null)n=C.cp
s.push(new B.aly(o,n,q,new B.baD(k,p,j),new B.baE(k,p,j),new B.baF(k,p,j),new B.baG(k,p,j),new B.baH(k,p,j),l))}s.push(D.aAl)
return A.ig(A.dG(s,C.ai,l,C.K,!1),C.m,new B.baI(j))},
$S:232}
B.bay.prototype={
$1(d){var w,v=J.V(d),u=A.ak(v.h(d,"title"))
if(u==null)u=""
v=A.ak(v.h(d,"category"))
if(v==null)v=""
w=this.a.w.toLowerCase()
return w.length===0||C.c.n(u.toLowerCase(),w)||C.c.n(v.toLowerCase(),w)},
$S:66}
B.baz.prototype={
$0(){return A.b([],x.t)},
$S:120}
B.baA.prototype={
$1(d){return J.d(J.a_(d,"slug"),this.a.x)},
$S:66}
B.baI.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=$.Kc()
if(t.e==null)A.U(A.Z(y.b))
t.gcv().cs(s)
s=$.bwP()
if(t.e==null)A.U(A.Z(y.b))
t.gcv().cs(s)
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.baB.prototype={
$1(d){var w=this.a
return w.J(new B.bax(w,d))},
$S:30}
B.bax.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.baC.prototype={
$1(d){var w=this.a
return w.J(new B.baw(w,d))},
$S:12}
B.baw.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.baD.prototype={
$1(d){return this.a.x7(0,this.b,this.c,d)},
$S:92}
B.baE.prototype={
$1(d){return this.a.wW(this.b,this.c,A.aI(J.a_(d,"id")))},
$S:92}
B.baF.prototype={
$1(d){return this.a.CR(this.b,this.c,d)},
$S:92}
B.baG.prototype={
$1(d){return this.a.CM(this.b,this.c,d)},
$S:92}
B.baH.prototype={
$1(d){return this.a.xm(this.b,this.c,d)},
$S:92}
B.bb6.prototype={
$1(d){var w=null,v=this.a,u=J.V(v)
v=A.k("\u201e"+A.i(u.h(v,"title"))+'" (v'+A.i(u.h(v,"current_version"))+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.",w,w,w,w,w,w,w)
u=this.b
return A.iu(A.b([A.d7(C.bZ,w,w,new B.bb4(u),w,w),A.dl(E.mq,new B.bb5(u),A.dK(C.m,C.A,w,w,w,w,w))],x.p),w,v,E.mr)},
$S:44}
B.bb4.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.bb5.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.bb7.prototype={
$1(d){},
$S:997}
B.bb8.prototype={
$1(d){},
$S:24}
B.bb3.prototype={
$1(d){return new A.ll(new B.bb2(this.a,this.b),null)},
$S:62}
B.bb2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=x.p,n=A.b([],o)
for(w=this.a.a,v=w.$ti,w=new A.aK(w,w.gp(0),v.i("aK<ag.E>")),u=this.b,v=v.i("ag.E");w.t();){t=w.d
if(t==null)t=v.a(t)
s=J.V(t)
r=u.n(0,s.h(t,"id"))
q=s.h(t,"full_name")
q=q==null?p:J.am(q)
q=A.k(q==null?"?":q,p,p,p,p,p,p,p)
s=s.h(t,"email")
s=s==null?p:J.am(s)
n.push(A.bF_(p,p,p,p,p,new B.bb_(e,t,u),A.k(s==null?"":s,p,p,p,p,p,p,p),q,r))}n=A.ch(A.dG(n,p,p,C.K,!0),p,400)
return A.iu(A.b([A.d7(C.bZ,p,p,new B.bb0(d),p,p),A.dl(D.AC,new B.bb1(d),A.dK(C.m,C.A,p,p,p,p,p))],o),p,n,D.aIA)},
$S:74}
B.bb_.prototype={
$1(d){return this.a.$1(new B.baZ(this.b,d,this.c))},
$S:64}
B.baZ.prototype={
$0(){var w=A.aI(J.a_(this.a,"id")),v=this.c
if(this.b===!0)v.E(0,w)
else v.H(0,w)},
$S:0}
B.bb0.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.bb1.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.baX.prototype={
$0(){return this.a.y=!0},
$S:0}
B.baY.prototype={
$0(){return this.a.y=!1},
$S:0}
B.baW.prototype={
$1(d){return new A.ll(new B.baV(this.a,this.b,this.c),null)},
$S:62}
B.baV.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=A.dH(r,C.aw,!1,r,!0,C.n,r,A.dP(),this.b,r,r,r,r,r,2,D.aez,C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ab,r,C.X,r,r,r,r),p=this.a,o=p.a,n=A.b([],x.I)
for(w=J.bh(this.c),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aI(t.h(u,"slug"))
u=t.h(u,"label")
u=u==null?r:J.am(u)
n.push(new A.dW(s,A.k(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}w=x.p
p=A.ch(A.ad(A.b([q,C.u,A.k1(D.af2,o,!1,n,new B.baS(p,e),r,x.N)],w),C.k,r,C.f,C.H,0),r,400)
return A.iu(A.b([A.d7(C.bZ,r,r,new B.baT(d),r,r),A.dl(D.ZJ,new B.baU(d),r)],w),r,p,D.aIF)},
$S:74}
B.baS.prototype={
$1(d){return this.b.$1(new B.baR(this.a,d))},
$S:12}
B.baR.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.baT.prototype={
$0(){A.b6(this.a,!1).cE(!1)
return null},
$S:0}
B.baU.prototype={
$0(){A.b6(this.a,!1).cE(!0)
return null},
$S:0}
B.bdx.prototype={
$0(){return this.a.e.$1(null)},
$S:0}
B.bdy.prototype={
$0(){return this.a.e.$1(A.ak(J.a_(this.b,"slug")))},
$S:0}
B.bdz.prototype={
$2(d,e){var w,v,u="is_template",t="updated_at",s=J.V(d),r=J.d(s.h(d,u),!0)?1:0,q=J.V(e),p=J.d(q.h(e,u),!0)?1:0
if(r!==p)return p-r
s=s.h(d,t)
w=s==null?null:J.am(s)
if(w==null)w=""
s=q.h(e,t)
v=s==null?null:J.am(s)
return C.c.cA(v==null?"":v,w)},
$S:998}
B.bdA.prototype={
$0(){return this.a.f.$1(this.b)},
$S:0}
B.bdB.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
B.bdC.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.bdD.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0}
B.bdE.prototype={
$0(){return this.a.y.$1(this.b)},
$S:0}
B.bav.prototype={
$0(){return D.auu},
$S:124}
B.bau.prototype={
$2(d,e){var w=null
return A.k(A.i(d),w,w,w,A.D(C.an,11,C.l),w,w,w)},
$S:138}
B.bat.prototype={
$1(d){var w,v=null,u=J.V(d)
if(u.gZ(d))return A.k("Noch keine Mitarbeiter eingeladen.",v,v,v,A.D(C.p,11,C.l),v,v,v)
w=A.b([A.k("Mitarbeiter-Signaturen",v,v,v,A.D(C.p,11,C.q),v,v,v),C.b3],x.p)
for(u=u.gX(d);u.t();)w.push(new B.arB(u.gN(u),v))
return A.ad(w,C.D,v,C.f,C.h,0)},
$S:80}
B.bo1.prototype={
$0(){var w=this
return w.a.Bz(w.b,w.c,w.d)},
$S:0}
B.bt7.prototype={
$1(d){return this.ak0(d)},
ak0(d){var w=0,v=A.q(x.D),u,t,s,r
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.aD(0,$.bH(),x.A).cV("profiles").ho(0,"id, email, full_name, role, status").Xu("role",D.anw)
s=t.qa("status","neq.archived")
t=A.md(t.ov(s),t.$ti.c)
r=J
w=3
return A.j(A.md(t.ov(t.qa("deleted_at","is.null")),t.$ti.c).pp(0,"created_at"),$async$$1)
case 3:u=r.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.aEk.prototype={
$0(){return this.a.C8(this.b,this.c)},
$S:0}
B.aEn.prototype={
$0(){return C.fQ},
$S:20}
B.aEm.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.aEl.prototype={
$1(d){return A.zw(null,new B.aEi(d),J.cf(d),null,new B.aEj())},
$S:1000}
B.aEj.prototype={
$2(d,e){return D.kX},
$S:123}
B.aEi.prototype={
$2(d,e){var w=null,v=J.a_(this.a,e),u=J.V(v),t=A.ak(u.h(v,"full_name"))
t=A.k(t==null?A.aI(u.h(v,"email")):t,w,w,w,w,w,w,w)
return A.rM(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,A.k(A.i(u.h(v,"email"))+" \xb7 "+B.c8p(A.ak(u.h(v,"role"))),w,w,w,w,w,w,w),w,t,w,B.bF3(w,A.k(B.c8L(A.ak(u.h(v,"status"))),w,w,w,w,w,w,w),w),w)},
$S:134}
B.aEh.prototype={
$1(d){return D.aOE},
$S:z+15}
B.bg1.prototype={
$1(d){return d==null||!C.c.n(d,"@")?"G\xfcltige E-Mail":null},
$S:15}
B.bg2.prototype={
$1(d){var w=this.a
return w.J(new B.bg0(w,d,this.b))},
$S:64}
B.bg0.prototype={
$0(){var w=this.a.r,v=this.c.a
if(this.b===!0)w.E(0,v)
else w.H(0,v)},
$S:0}
B.aFG.prototype={
$1(d){var w="removed_spoiled",v=J.V(d),u=A.i(v.h(d,"quantity")),t=v.h(d,w)
v=!J.d(t==null?0:t,0)?" \xb7 Verderb: "+A.i(v.h(d,w)):""
return"Menge: "+u+v},
$S:41}
B.aFF.prototype={
$1(d){var w=J.V(d),v=w.h(d,"filled_at")
v=v==null?"":C.c.a_(C.c.iO(J.am(v),"T"," "),0,16)
return v+(J.d(w.h(d,"mhd_checked"),!0)?" \xb7 MHD gepr\xfcft":"")},
$S:41}
B.aFH.prototype={
$2(d,e){return A.kE(null,new B.aFE(),d,!0,null,null,x.P)},
$S:84}
B.aFE.prototype={
$1(d){return D.aOl},
$S:z+16}
B.bcM.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.bcN.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.bcT.prototype={
$1(d){var w=this.a
return w.J(new B.bcS(w,d))},
$S:12}
B.bcS.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bcU.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.at,o=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aI(t.h(u,"id"))
u=A.ak(t.h(u,"name"))
o.push(new A.dW(s,A.k(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.k1(D.FA,p,!0,o,new B.bcQ(q),new B.bcR(),x.N)},
$S:195}
B.bcQ.prototype={
$1(d){var w=this.a
return w.J(new B.bcO(w,d))},
$S:12}
B.bcO.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bcR.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.bcV.prototype={
$0(){return D.yw},
$S:73}
B.bcW.prototype={
$1(d){var w=A.iA(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.bcX.prototype={
$1(d){var w
if(d==null||C.c.aL(d).length===0)return"Pflichtfeld"
w=A.fX(A.ay(d,",","."))
return w==null||w<=0?"EK > 0":null},
$S:15}
B.bcY.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflichtfeld":null},
$S:15}
B.bcZ.prototype={
$1(d){var w=this.a
return w.J(new B.bcP(w,d))},
$S:8}
B.bcP.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.bvp.prototype={
$0(){return A.b([],x.t)},
$S:120}
B.bvq.prototype={
$0(){return A.b([],x.t)},
$S:120}
B.bvx.prototype={
$2(d,e){return J.bE5(d,0,new B.bvy(e))},
$S:1003}
B.bvy.prototype={
$2(d,e){var w=A.b4(J.a_(e,this.a))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.bvv.prototype={
$2(d,e){return J.bE5(d,0,new B.bvw(e))},
$S:1004}
B.bvw.prototype={
$2(d,e){var w=A.b4(J.a_(e,this.a))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:201}
B.bvt.prototype={
$1(d){var w,v,u
if(d==null||J.am(d).length===0)return"\u2014"
try{v=A.od(J.am(d))
v=$.dp().am(v)
return v}catch(u){w=J.am(d)
v=J.cf(w)>10?10:J.cf(w)
return J.bEi(w,0,v)}},
$S:38}
B.bvu.prototype={
$1(d){var w
A:{if("refill"===d){w="Zugang"
break A}if("sale"===d){w="Verkauf"
break A}if("disposal"===d){w="Vernichtung"
break A}if("correction"===d){w="Korrektur"
break A}w=d
break A}return w},
$S:34}
B.bvr.prototype={
$1(d){var w=J.a_(d,"product_id")
return w==null?null:J.am(w)},
$S:354}
B.bvs.prototype={
$1(d){return J.d(J.a_(d,"decision"),"approved")},
$S:66}
B.bfS.prototype={
$0(){var w=this.a
w.as=!0
w.at=null},
$S:0}
B.bfT.prototype={
$0(){return this.a.as=!1},
$S:0}
B.bfU.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bfV.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bfY.prototype={
$1(d){var w=null,v=this.a,u=v.w,t=$.dp()
t=A.k("Die Inventur f\xfcr "+t.am(u)+" \u2013 "+t.am(v.x)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.  Nach 2-of-2-Freigabe wird der Report mit den DocuSign-Signaturen finalisiert. Fortfahren?",w,w,w,w,w,w,w)
return A.iu(A.b([A.d7(C.bZ,w,w,new B.bfW(v),w,w),A.dl(E.mq,new B.bfX(v),A.dK(C.m,C.A,w,w,w,w,w))],x.p),w,t,E.mr)},
$S:44}
B.bfW.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cE(!1)
return null},
$S:0}
B.bfX.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cE(!0)
return null},
$S:0}
B.bfR.prototype={
$0(){return A.b([],x.t)},
$S:120}
B.bfZ.prototype={
$0(){var w,v,u=this.a,t=u.y
t.toString
w=u.z
if(w==null)w=C.cp
v=u.Q
if(v==null)v=C.cp
return B.bvo(null,u.w,w,t,v,u.x)},
$S:0}
B.bg_.prototype={
$1(d){var w=J.a_(d,"product_id")
w=w==null?null:J.am(w)
return w===this.a.a},
$S:66}
B.bkj.prototype={
$2(d,e){var w=A.b4(J.a_(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:201}
B.bkk.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.bkl.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.bkm.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.bex.prototype={
$2(d,e){var w=A.b4(J.a_(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:201}
B.bey.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.bez.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.beA.prototype={
$2(d,e){var w=A.b4(J.a_(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:67}
B.beB.prototype={
$1(d){var w=J.a_(d,"product_id")
return w==null?null:J.am(w)},
$S:354}
B.bop.prototype={
$3(d,e,f){return D.a_r},
$S:z+17}
B.aKs.prototype={
$0(){return C.fQ},
$S:20}
B.aKr.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.aKq.prototype={
$1(d){return A.zw(null,new B.aKo(d),J.cf(d),null,new B.aKp())},
$S:1007}
B.aKp.prototype={
$2(d,e){return D.kX},
$S:123}
B.aKo.prototype={
$2(d,e){var w=null,v=J.a_(this.a,e),u=A.co(v.e?C.y0:D.aad,w,w,w),t=A.k(v.b+" \xb7 "+v.c,w,w,w,w,w,w,w),s=v.f
return A.rM(!1,w,w,w,!0,w,w,w,!0,w,u,w,w,w,w,new B.aKn(d,v),!1,w,w,w,w,A.k(s==null?"":s,w,w,w,w,w,w,w),w,t,w,D.adF,w)},
$S:134}
B.aKn.prototype={
$0(){var w=x.z
return A.b6(this.a,!1).es(A.eH(new B.aKm(this.b),null,w),w)},
$S:0}
B.aKm.prototype={
$1(d){var w=this.a
return new B.zz(w.a,w.b+" \xb7 "+w.c,null)},
$S:z+18}
B.bhe.prototype={
$1(d){var w,v=this.a
if(v.c!=null){w=v.gc3()
v=$.bx6().$1(v.a.d)
if(w.e==null)A.U(A.Z(y.b))
w.gcv().cs(v)}},
$S:1008}
B.bhd.prototype={
$0(){return C.fQ},
$S:20}
B.bhc.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.bhb.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a3m
else{w=this.a
w=A.ig(A.zw(null,new B.bh8(w,d),v.gp(d),null,new B.bh9()),null,new B.bha(w))
v=w}return v},
$S:1009}
B.bha.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc3()
s=$.bx6().$1(s.a.d)
if(r.e==null)A.U(A.Z(y.b))
r.gcv().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bh9.prototype={
$2(d,e){return D.kX},
$S:123}
B.bh8.prototype={
$2(d,e){var w=null,v=J.a_(this.b,e),u=A.k(v.c,w,w,w,w,w,w,w),t=A.k("Bestand: "+v.d+" (Schwelle "+v.e+")",w,w,w,w,w,w,w),s=this.a,r=v.r,q=A.k(s.aFy(r),w,w,w,w,w,w,w)
return A.rM(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,new B.bh7(s,d,v),!1,w,w,w,w,t,w,u,w,B.bF3(s.a7b(0,d,r).f_(0.15),q,new A.bm(s.a7b(0,d,r),1,C.U,-1)),w)},
$S:134}
B.bh7.prototype={
$0(){return this.a.Br(this.b,this.c)},
$S:0}
B.bh6.prototype={
$1(d){var w=null,v=A.k("Korrektur: "+this.a.c,w,w,w,w,w,w,w),u=this.b,t=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dP(),u,w,w,w,w,w,2,D.af5,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,D.aBV,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.C,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ab,w,C.X,w,w,w,w),s=this.c
return A.iu(A.b([A.d7(C.bZ,w,w,new B.bh4(s),w,w),A.dl(D.aIn,new B.bh5(s,u),w)],x.p),w,t,v)},
$S:44}
B.bh4.prototype={
$0(){A.b6(this.a,!1).cE(null)
return null},
$S:0}
B.bh5.prototype={
$0(){var w=A.iA(this.b.a.a,null)
A.b6(this.a,!1).cE(w)
return null},
$S:0}
B.aLN.prototype={
$1(d){return A.i(J.a_(d,"issue"))},
$S:41}
B.aLM.prototype={
$1(d){var w,v="performed_by",u=J.V(d),t=u.h(d,"reported_at")
t=t==null?"":C.c.a_(C.c.iO(J.am(t),"T"," "),0,16)
w=J.d(u.h(d,"resolved"),!0)?" \xb7 erledigt":" \xb7 offen"
u=u.h(d,v)!=null?" \xb7 "+A.i(u.h(d,v)):""
return t+w+u},
$S:41}
B.aLO.prototype={
$2(d,e){return A.kE(null,new B.aLL(),d,!0,null,null,x.P)},
$S:84}
B.aLL.prototype={
$1(d){return D.aOW},
$S:z+19}
B.bhh.prototype={
$1(d){var w=this.a
return w.J(new B.bhg(w,d))},
$S:12}
B.bhg.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bhi.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflichtfeld":null},
$S:15}
B.bhj.prototype={
$1(d){var w=this.a
return w.J(new B.bhf(w,d))},
$S:8}
B.bhf.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bpN.prototype={
$1(d){var w=this.a
return w.J(new B.bpM(w,d))},
$S:1010}
B.bpM.prototype={
$0(){var w=this.b
return this.a.w=w.ga2(w)},
$S:0}
B.bsA.prototype={
$1(d){return this.ajZ(d)},
ajZ(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.j(d.an($.bH(),x.A).cV("machine_health").ho(0,"machine_id, last_seen_at, last_heartbeat_at, temperature_c, door_state, cash_balance_net, active_alarms, updated_at, machine:machines(id, code, name, is_cooled)").qK(0,"updated_at",!1),$async$$1)
case 3:u=t.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bgY.prototype={
$0(){return C.bF},
$S:20}
B.bgX.prototype={
$2(d,e){var w=null
return A.d_(new A.ai(C.dd,A.k(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:35}
B.bgW.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNM
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.alT(v.gN(v),null))
v=A.ig(A.dG(w,C.C,null,C.K,!1),C.m,new B.bgV(this.a))}return v},
$S:80}
B.bgV.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bD7()
if(s.e==null)A.U(A.Z(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bt8.prototype={
$1(d){return this.ak1(d)},
ak1(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.j(d.an($.bH(),x.A).cV("telemetry_providers").ho(0,"id, name, adapter, is_active, time_skew_max_s, notes, created_at, updated_at").pp(0,"name"),$async$$1)
case 3:u=t.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bkD.prototype={
$0(){return this.a.J7(this.b,this.c)},
$S:0}
B.bkG.prototype={
$0(){return C.bF},
$S:20}
B.bkF.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.bkE.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNL
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.apm(v.gN(v),null))
v=A.dG(w,C.C,null,C.K,!1)}return v},
$S:355}
B.bkC.prototype={
$1(d){return D.aPM},
$S:z+20}
B.bkz.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflicht":null},
$S:15}
B.bkA.prototype={
$1(d){var w=this.a
return w.J(new B.bky(w,d))},
$S:12}
B.bky.prototype={
$0(){var w=this.b
if(w==null)w="generic"
return this.a.Q=w},
$S:0}
B.bkB.prototype={
$1(d){return d==null||C.c.aL(d).length<16?"Min. 16 Zeichen":null},
$S:15}
B.bse.prototype={
$1(d){return this.ajU(d)},
ajU(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.j(d.an($.bH(),x.A).cV("machine_devices").ho(0,"id, external_device_id, firmware_version, last_seen_at, is_active, installed_at, machine:machines(id, code, name), provider:telemetry_providers(id, name, adapter)").qK(0,"installed_at",!1),$async$$1)
case 3:u=t.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.ba0.prototype={
$0(){return this.a.J9(this.b,this.c)},
$S:0}
B.ba3.prototype={
$0(){return C.bF},
$S:20}
B.ba2.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.ba1.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNK
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.ak4(v.gN(v),null))
v=A.dG(w,C.C,null,C.K,!1)}return v},
$S:355}
B.ba_.prototype={
$1(d){return D.aNs},
$S:z+21}
B.b9V.prototype={
$1(d){return J.cG(d,x.P)},
$S:133}
B.b9U.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.z
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dW(A.aI(q.h(r,"id")),A.k(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.k1(D.aex,v,!1,u,new B.b9S(w),new B.b9T(),x.N)},
$S:203}
B.b9S.prototype={
$1(d){var w=this.a
return w.J(new B.b9P(w,d))},
$S:12}
B.b9P.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b9T.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9Y.prototype={
$0(){return D.yw},
$S:73}
B.b9X.prototype={
$2(d,e){var w=null
return A.k(A.i(d),w,w,w,w,w,w,w)},
$S:138}
B.b9W.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.Q,p=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
p.push(new A.dW(A.aI(t.h(u,"id")),A.k(A.i(t.h(u,"name"))+" ("+A.i(t.h(u,"adapter"))+")",s,s,s,s,s,s,s),C.aW,s,v))}return A.k1(D.aed,q,!1,p,new B.b9Q(r),new B.b9R(),x.N)},
$S:195}
B.b9Q.prototype={
$1(d){var w=this.a
return w.J(new B.b9O(w,d))},
$S:12}
B.b9O.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.b9R.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9Z.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflicht":null},
$S:15}
B.boE.prototype={
$1(d){return J.cG(d,x.P)},
$S:133}
B.boD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.w
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dW(A.aI(q.h(r,"id")),A.k(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.k1(D.aeK,v,!1,u,new B.boC(w),p,x.N)},
$S:203}
B.boC.prototype={
$1(d){var w=this.a
return w.J(new B.boB(w,d))},
$S:12}
B.boB.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.boA.prototype={
$1(d){return J.cG(d,x.P)},
$S:133}
B.boz.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.b
if(p==null)p=A.b([],x.t)
w=this.a
v=this.b
u=A.hb(D.o4,D.aJ0,new B.box(w,d,v),A.dK(C.m,C.A,q,q,q,q,q))
t=J.V(p)
if(t.gZ(p))w=D.aNJ
else{s=A.b([],x.p)
for(t=t.gX(p);t.t();){r=t.gN(t)
s.push(new B.arS(r,new B.boy(w,d,v,r),q))}w=A.dG(s,C.C,q,C.K,!1)}return A.ad(A.b([new A.ai(D.a8a,u,q),A.az(w,1)],x.p),C.k,q,C.f,C.h,0)},
$S:1014}
B.box.prototype={
$0(){return this.a.Cw(this.b,this.c,null)},
$S:0}
B.boy.prototype={
$0(){var w=this
return w.a.Cw(w.b,w.c,w.d)},
$S:0}
B.bow.prototype={
$1(d){return new B.Cr(this.a.e,this.b,null)},
$S:z+22}
B.bot.prototype={
$1(d){return d==null||C.c.aL(d).length===0?"Pflicht":null},
$S:15}
B.bov.prototype={
$1(d){return J.cG(d,x.P)},
$S:133}
B.bou.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.Q
u=A.b([D.a73],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dW(A.aI(q.h(r,"id")),A.k(A.i(q.h(r,"name"))+" ("+A.i(q.h(r,"sku"))+")",p,p,p,p,p,p,p),C.aW,p,s))}return A.k1(D.FA,v,!1,u,new B.bos(w),p,x.N)},
$S:203}
B.bos.prototype={
$1(d){var w=this.a
return w.J(new B.bor(w,d))},
$S:12}
B.bor.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bsl.prototype={
$1(d){return this.ajX(d)},
ajX(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.an($.bH(),x.A).cV("machine_telemetry_events").ho(0,"id, event_type, status, event_uid, occurred_at, received_at, processed_at, quantity, unit_price_net, dispense_confirmed, temperature_c, error_reason, slot_code, machine:machines(code, name), provider:telemetry_providers(name, adapter)").qK(0,"received_at",!1)
s=J
w=3
return A.j(A.aaU(t.VX(t.Yt("limit","200")),t.$ti.c),$async$$1)
case 3:u=s.cG(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:53}
B.bbQ.prototype={
$0(){return C.bF},
$S:20}
B.bbP.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.bbO.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aNO
else{w=A.b([],x.p)
for(v=v.gX(d);v.t();)w.push(new B.akQ(v.gN(v),null))
v=A.ig(A.dG(w,C.C,null,C.K,!1),C.m,new B.bbN(this.a))}return v},
$S:80}
B.bbN.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bD5()
if(s.e==null)A.U(A.Z(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b1f.prototype={
$1(d){var w=J.V(d),v=A.i(w.h(d,"temperature_c"))
w=J.d(w.h(d,"within_limit"),!1)?"  \u26a0\ufe0f \xfcber Grenzwert":""
return v+" \xb0C"+w},
$S:41}
B.b1e.prototype={
$1(d){var w="corrective_action",v=J.V(d),u=v.h(d,"measured_at")
u=u==null?"":C.c.a_(C.c.iO(J.am(u),"T"," "),0,16)
return u+(v.h(d,w)!=null?"\n"+A.i(v.h(d,w)):"")},
$S:41}
B.b1g.prototype={
$2(d,e){return A.kE(null,new B.b1d(),d,!0,null,null,x.P)},
$S:84}
B.b1d.prototype={
$1(d){return D.aQi},
$S:z+23}
B.bpP.prototype={
$1(d){var w=this.a
return w.J(new B.bpO(w,d))},
$S:12}
B.bpO.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bpQ.prototype={
$1(d){var w=d==null?"":d
return A.fX(A.ay(w,",","."))==null?"Bitte Temperatur eingeben":null},
$S:15}
B.aLJ.prototype={
$0(){return D.yw},
$S:73}
B.aLI.prototype={
$2(d,e){var w=null
return A.k(A.i(d),w,w,w,w,w,w,w)},
$S:138}
B.aLH.prototype={
$1(d){var w,v,u,t=null,s=this.a,r=A.eG(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,"Automat",!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),q=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dW(u.a,A.k(u.b+" \xb7 "+u.c,t,t,t,t,t,t,t),C.aW,t,v))}return A.k1(r,s.e,!0,q,s.f,new B.aLG(),x.N)},
$S:1015}
B.aLG.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.bjq.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bjr.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bjs.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bkp.prototype={
$1(d){var w=null,v=this.a,u=v.a.d,t=v.gk9(),s=$.dp()
s=A.k("Das "+u+"-Protokoll ("+s.am(t.a)+" \u2013 "+s.am(v.gk9().b)+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird das signierte PDF automatisch abgelegt.",w,w,w,w,w,w,w)
return A.iu(A.b([A.d7(C.bZ,w,w,new B.bkn(v),w,w),A.dl(E.mq,new B.bko(v),A.dK(C.m,C.A,w,w,w,w,w))],x.p),w,s,E.mr)},
$S:44}
B.bkn.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cE(!1)
return null},
$S:0}
B.bko.prototype={
$0(){var w=this.a.c
w.toString
A.b6(w,!1).cE(!0)
return null},
$S:0}
B.bku.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q,p
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=new A.b_(Date.now(),0,!1)
s=A.bB(A.aW(t)-5,1,1,0,0,0,0)
r=A.bB(A.aW(t)+1,1,1,0,0,0,0)
q=u.a
w=2
return A.j(F.aw1(null,u.b,s,new A.lP(q.gk9().a,q.gk9().b,x.bz),r,C.eq),$async$$0)
case 2:p=e
if(p!=null)q.J(new B.bkt(q,p))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bkt.prototype={
$0(){var w=this.b
return this.a.w=new F.lV(w.a,w.b)},
$S:0}
B.bkx.prototype={
$0(){return C.fQ},
$S:20}
B.bkw.prototype={
$2(d,e){var w=null
return A.d_(A.k(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:35}
B.bkv.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a3p
else{w=this.a
w=A.ig(A.zw(null,new B.bkq(w,d),v.gp(d),null,new B.bkr()),null,new B.bks(w))
v=w}return v},
$S:80}
B.bks.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc3()
s=$.aws().$1(s.gJn())
if(r.e==null)A.U(A.Z(y.b))
r.gcv().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bkr.prototype={
$2(d,e){return D.kX},
$S:123}
B.bkq.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=t.a
s.toString
w=this.b
v=J.V(w)
s=A.k(s.aXg(v.h(w,e)),u,u,u,u,u,u,u)
t=t.a
t.toString
return A.rM(!1,u,u,u,!0,u,u,u,!0,u,u,u,u,u,u,u,!1,u,u,u,u,A.k(t.aXf(v.h(w,e)),u,u,u,u,u,u,u),u,s,u,u,u)},
$S:134}
B.b78.prototype={
$1(d){var w,v,u=this
if(d.n(0,C.T)&&d.n(0,C.J)){w=u.a
if(w.go===D.hC){w=w.gim().k3
w=A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}else{w=w.gim().k3
w=A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.J)){w=u.a
if(w.go===D.hC)w=null
else{w=w.gim().k3
w=A.aD(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.T)){w=u.a
if(w.go===D.hC){w=w.gim()
v=w.Q
w=v==null?w.y:v}else{w=w.gim()
v=w.Q
w=v==null?w.y:v}return w}w=u.a
if(w.go===D.hC)w=null
else{w=w.gim()
v=w.p3
w=v==null?w.k2:v}return w},
$S:22}
B.aBD.prototype={
$1(d){if(d.n(0,C.T))return this.a.ax.b.bA(0.08)
return null},
$S:22}
B.aBz.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aBA.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aBB.prototype={
$1(d){return!1},
$S:z+3}
B.aBC.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=d>0,n=o&&q.b&&q.a.CW[d-1].b==null,m=x.k,l=A.b3(m)
if(n)l.E(0,C.J)
if(o){w=q.a.CW[d-1].r
if(w==null)w=q.c
v=w==null?p:w.Y(l)}else v=p
w=q.d
u=w==null?p:w.Y(A.b3(m))
t=o?v:u
o=q.f.z
if(o==null)o=q.r.y2.z
if(o==null)o=1
s=A.by5(q.e,p,o)
r=d===0?p:new A.fd(s,C.N,C.N,C.N)
o=d===0?$.bNz():p
m=t==null?q.w.a.$1(l):t
return new B.mq(o,new A.b5(m,p,r,p,p,p,C.G),A.bJ(q.x.length,D.aPB,!1,x.l))},
$S:z+25}
B.aBE.prototype={
$1(d){return this.a.aDb(d,this.b)},
$S:64}
B.aBF.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.aBG.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.b0Z.prototype={
$0(){var w,v,u,t,s=this.a,r=s.gbY(s),q=A.fT()
for(;;){if(!(r instanceof A.K&&!(r instanceof B.w2)))break
r.eT(s,q)
w=r.gbY(r)
s=r
r=w}if(r instanceof B.w2){v=s.b
v.toString
v=x.L.a(v).d
v.toString
u=r.akP(v)
r.eT(s,q)
t=A.zM(q)
if(t!=null)return u.e8(new A.r(-t.a,-t.b))}return C.aP},
$S:127}
B.boF.prototype={
$0(){this.a.d=!0},
$S:0}
B.boI.prototype={
$0(){var w,v=this,u=v.a
u.a.toString
w=v.b.b
if(w!=null){if(w instanceof A.ue)return w}else{w=v.c
w.grV()
if(w.grV() instanceof A.ue)return x.av.a(w.grV())}return A.JI(new B.boJ(u,v.b,v.c))},
$S:1016}
B.boJ.prototype={
$1(d){var w,v=this
if(d.n(0,C.J)){v.a.a.toString
w=v.b.c
return w==null?v.c.gDW():w}v.a.a.toString
w=v.b.b
return w==null?v.c.grV():w},
$S:5}
B.boG.prototype={
$0(){var w,v,u=this.a
u.a.toString
w=this.b
v=w.as
if(v instanceof A.ue)return v
return A.JI(new B.boH(u,w))},
$S:1017}
B.boH.prototype={
$1(d){var w,v=this
if(d.n(0,C.J)){v.a.a.toString
w=v.b.at
return w==null?C.F:w}v.a.a.toString
w=v.b.as
return w==null?C.F:w},
$S:5}
B.aWv.prototype={
$1(d){var w=d.d,v=w!=null?A.zM(w):null
if(v==null)v=C.t
return d.f.e8(v)},
$S:1018}
B.aWu.prototype={
$1(d){var w,v
for(w=this.a,v=w.V-1,w=w.be;v>=0;--v)if(w[v]<=d)return v
return-1},
$S:357}
B.aWt.prototype={
$1(d){var w,v=this.a,u=v.S
if(u==null)return-1
for(w=J.cf(u)-1;w>=0;--w){u=v.S
u.toString
if(J.lJ(u,w)<=d)return w}return-1},
$S:357}
B.aWw.prototype={
$3(d,e,f){var w=d.d,v=w!=null?A.zM(w):null
if(v==null)v=C.t
d.se3(0,A.q0(v.a+e,v.b+f,0))},
$S:1020}
B.aWr.prototype={
$0(){var w=this.a
w.ra(w,this.b)},
$S:0}
B.aWs.prototype={
$0(){return A.wh(null,null)},
$S:1021}
B.aWx.prototype={
$2(d,e){return d+e},
$S:46}
B.aWy.prototype={
$2(d,e){return this.a.dP(d,e)},
$S:23}
B.b1_.prototype={
$1(d){return!0},
$S:z+29}
B.b10.prototype={
$1(d){return d.b},
$S:z+30}
B.bpE.prototype={
$1(d){var w,v,u,t={}
t.a=0
w=this.a;++w.a
v=d.c
u=A.aa(v).i("ae<1,bM>")
t=A.Q(new A.ae(v,new B.bpD(t,w,this.b),u),u.i("ax.E"))
t.$flags=1
return new B.ly(d.a,t)},
$S:z+31}
B.bpD.prototype={
$1(d){return this.c.z9(d,new B.Jw(this.a.a++,this.b.a))},
$S:1022}
B.bpF.prototype={
$1(d){return d.a==null},
$S:z+32}
B.bpG.prototype={
$1(d){return!this.a.n(0,d)},
$S:1023}
B.bpC.prototype={
$1(d){var w=d.b
return new A.ae(w,new B.bpB(),A.aa(w).i("ae<1,H>"))},
$S:z+33}
B.bpB.prototype={
$1(d){var w=d.gaj()
w.toString
return x.Y.a(w)},
$S:1024}
B.bpH.prototype={
$1(d){return d.b},
$S:z+34}
B.aRV.prototype={
$1(d){return B.bHP(d)},
$S:38}
B.axE.prototype={
$2(d,e){return this.a.$0()},
$S(){return this.b.i("0(C,bK)")}}
B.axF.prototype={
$0(){return this.a.$0()},
$S(){return this.b.i("0()")}};(function installTearOffs(){var w=a._static_1,v=a._instance_1u,u=a._instance_0u,t=a.installInstanceTearOff
w(B,"c7I","bWq",35)
var s
v(s=B.TD.prototype,"gaFr","aFs",10)
u(s,"gaFz","xp",0)
u(s,"gayO","BR",0)
u(s=B.Yr.prototype,"gaMJ","JY",0)
u(s,"gaOq","uZ",0)
u(s=B.TP.prototype,"gatg","Hy",0)
u(s,"gaxf","I_",0)
v(B.U8.prototype,"gayx","ayy",8)
u(B.Ub.prototype,"gauv","auw",1)
u(B.Um.prototype,"gav7","av8",1)
w(B,"c5I","c0p",36)
w(B,"c5J","c0q",24)
t(B.Uo.prototype,"gaLN",0,2,null,["$3$askNote","$2"],["xJ","aLO"],4,0,0)
u(B.V3.prototype,"gawW","awX",1)
u(B.W5.prototype,"gaxC","axD",1)
u(s=B.Vo.prototype,"gaJ6","Jf",0)
u(s,"gaJ7","Jg",0)
u(s,"gay6","ay7",1)
u(s=B.W4.prototype,"ga6M","IC",0)
u(s,"gaJ5","Je",0)
u(s,"gaJc","Jj",0)
u(s,"gaKg","CK",0)
u(B.Wd.prototype,"gaG0","aG1",1)
u(B.X4.prototype,"gD_","lm",0)
u(B.V0.prototype,"gD_","lm",0)
u(B.Ys.prototype,"gD_","lm",0)
u(B.YW.prototype,"gaMQ","aMR",1)
u(B.WR.prototype,"gaJ1","xy",0)
u(s=B.X0.prototype,"gaJs","CB",0)
u(s,"gaJt","CC",0)
u(s,"gaJu","CD",0)
v(s=B.So.prototype,"gPe","AC",26)
v(s,"gae7","Lz",27)
u(B.Yv.prototype,"gaCQ","aCR",1)
v(s=B.w2.prototype,"gcC","cg",2)
v(s,"gcm","ce",2)
v(s,"gcM","cf",2)
v(s,"gcL","ck",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.C,[B.wm,B.v8,B.At,B.fJ,B.amF,B.wZ,B.fn,B.rc,B.fz,B.wo,B.It,B.mq,B.ly,B.avb,B.aJG,B.aaT])
v(A.o9,[B.bwh,B.btP,B.bvB,B.aLV,B.aLU,B.bi6,B.bvm,B.b45,B.bgj,B.bcl,B.bcg,B.bce,B.bcr,B.bcn,B.bcb,B.bc1,B.bbX,B.bc9,B.bc5,B.bqQ,B.bqR,B.boT,B.boU,B.awV,B.brT,B.brS,B.aCE,B.b4j,B.b4d,B.b4e,B.bom,B.b6k,B.b6n,B.azq,B.azp,B.azo,B.b6u,B.b6v,B.aA3,B.aA2,B.aA1,B.b7h,B.b7i,B.b7j,B.b7v,B.aCB,B.aCA,B.aCz,B.bak,B.bal,B.bai,B.bae,B.ban,B.bao,B.bap,B.bar,B.bsg,B.bsf,B.bst,B.bb9,B.baN,B.baM,B.baJ,B.bay,B.baA,B.baB,B.baC,B.baD,B.baE,B.baF,B.baG,B.baH,B.bb6,B.bb7,B.bb8,B.bb3,B.bb_,B.baW,B.baS,B.bat,B.bt7,B.aEl,B.aEh,B.bg1,B.bg2,B.aFG,B.aFF,B.aFE,B.bcT,B.bcU,B.bcQ,B.bcR,B.bcW,B.bcX,B.bcY,B.bcZ,B.bvt,B.bvu,B.bvr,B.bvs,B.bfY,B.bg_,B.beB,B.bop,B.aKq,B.aKm,B.bhe,B.bhb,B.bh6,B.aLN,B.aLM,B.aLL,B.bhh,B.bhi,B.bhj,B.bpN,B.bsA,B.bgW,B.bt8,B.bkE,B.bkC,B.bkz,B.bkA,B.bkB,B.bse,B.ba1,B.ba_,B.b9V,B.b9S,B.b9T,B.b9W,B.b9Q,B.b9R,B.b9Z,B.boE,B.boC,B.boA,B.bow,B.bot,B.bov,B.bos,B.bsl,B.bbO,B.b1f,B.b1e,B.b1d,B.bpP,B.bpQ,B.aLH,B.aLG,B.bkp,B.bkv,B.b78,B.aBD,B.aBz,B.aBA,B.aBB,B.aBC,B.aBE,B.boJ,B.boH,B.aWv,B.aWu,B.aWt,B.aWw,B.b1_,B.b10,B.bpE,B.bpD,B.bpF,B.bpG,B.bpC,B.bpB,B.bpH,B.aRV])
v(A.S,[B.EF,B.alU,B.Pb,B.anK,B.akM,B.ajK,B.amP,B.atQ,B.amQ,B.arZ,B.CG,B.aiH,B.VP,B.a0C,B.akL,B.ajS,B.aiu,B.a1Q,B.a2b,B.HT,B.a51,B.ar6,B.alx,B.aly,B.akV,B.a5v,B.apj,B.alP,B.wW,B.anD,B.arC,B.arE,B.Iz,B.a7J,B.alT,B.C2,B.apm,B.ak4,B.arS,B.akQ,B.tU,B.ae7,B.a1V,B.a1W,B.a4v,B.Sn])
v(A.y1,[B.buJ,B.bvE,B.aLW,B.bi8,B.bvn,B.bck,B.bcq,B.bc0,B.bc8,B.aCF,B.b6p,B.azr,B.aA4,B.b7B,B.b7z,B.b7y,B.aCC,B.bti,B.baP,B.baK,B.bb2,B.baV,B.bdz,B.bau,B.aEm,B.aEj,B.aEi,B.aFH,B.bvx,B.bvy,B.bvv,B.bvw,B.bkj,B.bkk,B.bkl,B.bkm,B.bex,B.bey,B.bez,B.beA,B.aKr,B.aKp,B.aKo,B.bhc,B.bh9,B.bh8,B.aLO,B.bgX,B.bkF,B.ba2,B.b9U,B.b9X,B.boD,B.boz,B.bou,B.bbP,B.b1g,B.aLI,B.bkw,B.bkr,B.bkq,B.aWx,B.aWy,B.axE])
u(B.zB,A.fG)
v(A.y0,[B.aLQ,B.aLR,B.aLS,B.aLX,B.bi7,B.b46,B.b47,B.b48,B.b42,B.b43,B.b44,B.bcs,B.bct,B.bcu,B.bcf,B.bch,B.bci,B.bcj,B.bcc,B.bcd,B.bcm,B.bco,B.bcp,B.bca,B.bbW,B.bbV,B.bbU,B.bbY,B.bbZ,B.bc_,B.bc4,B.bc3,B.bc2,B.bc6,B.bc7,B.awW,B.aCG,B.aCD,B.b4i,B.b4g,B.b4h,B.b4f,B.b4b,B.b4c,B.bo5,B.bo6,B.boa,B.bob,B.boc,B.bod,B.boe,B.bof,B.bog,B.boh,B.boi,B.bon,B.boo,B.b4L,B.b4M,B.b4N,B.b6l,B.b6q,B.b6m,B.b6o,B.b6t,B.b7g,B.b7f,B.b7t,B.b7u,B.b7w,B.b7A,B.b7x,B.b7q,B.b7r,B.b7s,B.baj,B.baf,B.bam,B.bah,B.baq,B.bag,B.bbd,B.bba,B.bbb,B.bbc,B.baO,B.baQ,B.baL,B.baz,B.baI,B.bax,B.baw,B.bb4,B.bb5,B.baZ,B.bb0,B.bb1,B.baX,B.baY,B.baR,B.baT,B.baU,B.bdx,B.bdy,B.bdA,B.bdB,B.bdC,B.bdD,B.bdE,B.bav,B.bo1,B.aEk,B.aEn,B.bg0,B.bcM,B.bcN,B.bcS,B.bcO,B.bcV,B.bcP,B.bvp,B.bvq,B.bfS,B.bfT,B.bfU,B.bfV,B.bfW,B.bfX,B.bfR,B.bfZ,B.aKs,B.aKn,B.bhd,B.bha,B.bh7,B.bh4,B.bh5,B.bhg,B.bhf,B.bpM,B.bgY,B.bgV,B.bkD,B.bkG,B.bky,B.ba0,B.ba3,B.b9P,B.b9Y,B.b9O,B.boB,B.box,B.boy,B.bor,B.bbQ,B.bbN,B.bpO,B.aLJ,B.bjq,B.bjr,B.bjs,B.bkn,B.bko,B.bku,B.bkt,B.bkx,B.bks,B.aBF,B.aBG,B.b0Z,B.boF,B.boI,B.boG,B.aWr,B.aWs,B.axF])
v(A.y9,[B.zC,B.al_,B.akZ,B.akY,B.a52,B.ahy,B.akj,B.arB,B.a5c,B.a76,B.anc,B.apn,B.ak5,B.arT,B.akR,B.a7G])
v(A.bf,[B.xE,B.Cq,B.L_,B.Lp,B.Bx,B.BA,B.LZ,B.BI,B.MH,B.BR,B.Og,B.zz,B.C3,B.Sw,B.Cf,B.BH,B.Yt,B.Cr,B.CC,B.FK,B.Q5])
v(A.y8,[B.TD,B.Yr,B.TP,B.U8,B.Ub,B.Um,B.Uo,B.V3,B.akk,B.Vo,B.W4,B.anm,B.Wd,B.asD,B.X4,B.V0,B.arU,B.Ys,B.YW,B.WR,B.X0])
v(A.M,[B.C_,B.GP])
v(A.a0,[B.W5,B.Yv])
v(A.Ib,[B.b76,B.wn,B.ke])
u(B.b77,A.y_)
u(B.So,A.vh)
v(B.wo,[B.ao9,B.Oe,B.a5z,B.a5O])
u(B.aoe,A.c)
u(B.qm,A.hN)
u(B.w2,A.H)
u(B.Sm,A.aV)
u(B.asu,A.bW)
u(B.ast,A.fW)
u(B.Jw,B.avb)
w(B.avb,A.aP)})()
A.bqO(b.typeUniverse,JSON.parse('{"EF":{"S":[],"c":[]},"alU":{"S":[],"c":[]},"Pb":{"S":[],"c":[]},"zB":{"fG":["be<~>"],"fG.T":"be<~>"},"zC":{"bf":[],"M":[],"c":[]},"anK":{"S":[],"c":[]},"akM":{"S":[],"c":[]},"ajK":{"S":[],"c":[]},"xE":{"bf":[],"M":[],"c":[]},"TD":{"a0":["xE"]},"amP":{"S":[],"c":[]},"al_":{"bf":[],"M":[],"c":[]},"akZ":{"bf":[],"M":[],"c":[]},"akY":{"bf":[],"M":[],"c":[]},"atQ":{"S":[],"c":[]},"amQ":{"S":[],"c":[]},"arZ":{"S":[],"c":[]},"CG":{"S":[],"c":[]},"aiH":{"S":[],"c":[]},"VP":{"S":[],"c":[]},"a0C":{"S":[],"c":[]},"Cq":{"bf":[],"M":[],"c":[]},"a52":{"bf":[],"M":[],"c":[]},"akL":{"S":[],"c":[]},"ahy":{"bf":[],"M":[],"c":[]},"Yr":{"a0":["Cq"]},"ajS":{"S":[],"c":[]},"L_":{"bf":[],"M":[],"c":[]},"TP":{"a0":["L_"]},"Lp":{"bf":[],"M":[],"c":[]},"U8":{"a0":["Lp"]},"aiu":{"S":[],"c":[]},"Bx":{"bf":[],"M":[],"c":[]},"a1Q":{"S":[],"c":[]},"Ub":{"a0":["Bx"]},"BA":{"bf":[],"M":[],"c":[]},"a2b":{"S":[],"c":[]},"Um":{"a0":["BA"]},"LZ":{"bf":[],"M":[],"c":[]},"HT":{"S":[],"c":[]},"Uo":{"a0":["LZ"]},"BI":{"bf":[],"M":[],"c":[]},"a51":{"S":[],"c":[]},"V3":{"a0":["BI"]},"MH":{"bf":[],"M":[],"c":[]},"akk":{"a0":["MH"]},"ar6":{"S":[],"c":[]},"alx":{"S":[],"c":[]},"aly":{"S":[],"c":[]},"akj":{"bf":[],"M":[],"c":[]},"arB":{"bf":[],"M":[],"c":[]},"akV":{"S":[],"c":[]},"C_":{"M":[],"c":[]},"a5c":{"bf":[],"M":[],"c":[]},"W5":{"a0":["C_"]},"BR":{"bf":[],"M":[],"c":[]},"a5v":{"S":[],"c":[]},"Vo":{"a0":["BR"]},"Og":{"bf":[],"M":[],"c":[]},"Iz":{"S":[],"c":[]},"W4":{"a0":["Og"]},"apj":{"S":[],"c":[]},"alP":{"S":[],"c":[]},"wW":{"S":[],"c":[]},"anD":{"S":[],"c":[]},"arC":{"S":[],"c":[]},"arE":{"S":[],"c":[]},"a76":{"bf":[],"M":[],"c":[]},"zz":{"bf":[],"M":[],"c":[]},"anm":{"a0":["zz"]},"C3":{"bf":[],"M":[],"c":[]},"a7J":{"S":[],"c":[]},"Wd":{"a0":["C3"]},"Sw":{"bf":[],"M":[],"c":[]},"Cf":{"bf":[],"M":[],"c":[]},"BH":{"bf":[],"M":[],"c":[]},"Yt":{"bf":[],"M":[],"c":[]},"Cr":{"bf":[],"M":[],"c":[]},"asD":{"a0":["Sw"]},"anc":{"bf":[],"M":[],"c":[]},"alT":{"S":[],"c":[]},"C2":{"S":[],"c":[]},"apn":{"bf":[],"M":[],"c":[]},"apm":{"S":[],"c":[]},"X4":{"a0":["Cf"]},"ak5":{"bf":[],"M":[],"c":[]},"ak4":{"S":[],"c":[]},"V0":{"a0":["BH"]},"arU":{"a0":["Yt"]},"arT":{"bf":[],"M":[],"c":[]},"arS":{"S":[],"c":[]},"Ys":{"a0":["Cr"]},"akR":{"bf":[],"M":[],"c":[]},"akQ":{"S":[],"c":[]},"tU":{"S":[],"c":[]},"CC":{"bf":[],"M":[],"c":[]},"ae7":{"S":[],"c":[]},"YW":{"a0":["CC"]},"a7G":{"bf":[],"M":[],"c":[]},"FK":{"bf":[],"M":[],"c":[]},"WR":{"a0":["FK"]},"Q5":{"bf":[],"M":[],"c":[]},"X0":{"a0":["Q5"]},"a1V":{"S":[],"c":[]},"a1W":{"S":[],"c":[]},"a4v":{"S":[],"c":[]},"So":{"S":[],"c":[]},"ao9":{"wo":[]},"aoe":{"c":[]},"GP":{"M":[],"c":[]},"Yv":{"a0":["GP"]},"qm":{"hN":[],"e3":[]},"Oe":{"wo":[]},"a5z":{"wo":[]},"a5O":{"wo":[]},"w2":{"H":[],"K":[],"aT":[]},"Sm":{"aV":[],"c":[]},"asu":{"bW":[],"bM":[],"y":[]},"Sn":{"S":[],"c":[]},"ast":{"fW":["qm"],"bq":[],"c":[],"fW.T":"qm"},"bTq":{"bz":[],"bq":[],"c":[]}}'))
var y={k:'<h2 style="margin-top:14pt">Bilanzwert der Vorr\xe4te</h2>',c:'<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2><p class="matrix-intro">Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskosten-wert eines FIFO-Restlots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.</p>',b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.au
return{u:w("mM"),c:w("be<u<hU>>"),w:w("be<u<a3<f,@>>>"),bj:w("be<u<ko>>"),i:w("be<br<f>>"),cA:w("a13"),cT:w("at"),O:w("hN"),fl:w("jm<v>"),o:w("a5<f,f>"),cn:w("hO"),cu:w("a4u"),d:w("bTq"),bz:w("lP<b_>"),f0:w("lQ"),Q:w("js"),r:w("dW<f>"),dk:w("bM"),fY:w("R<jj?>"),hf:w("t<@>"),hc:w("B<jm<v>>"),F:w("B<fz>"),G:w("B<fn>"),_:w("B<rc>"),I:w("B<dW<f>>"),B:w("B<v8>"),cV:w("B<u<cZ>>"),t:w("B<a3<f,@>>"),U:w("B<FU<@>>"),aO:w("B<cZ>"),s:w("B<f>"),p:w("B<c>"),ew:w("B<fJ>"),R:w("B<ly>"),bs:w("B<Jw>"),eQ:w("B<F>"),V:w("B<H?>"),n:w("bl<Ex>"),aA:w("iy<p7<be<~>>>"),am:w("u<bM>"),d7:w("u<u<cZ>>"),W:w("u<hU>"),D:w("u<a3<f,@>>"),e:w("u<ko>"),j:w("u<@>"),f9:w("l4"),M:w("zB"),K:w("a7L"),J:w("bt<f,f>"),P:w("a3<f,@>"),f:w("a3<@,@>"),m:w("ka"),a:w("bn"),aU:w("C"),bX:w("rV"),Y:w("H"),S:w("w2"),eV:w("cZ"),C:w("br<f>"),Z:w("wm"),N:w("f"),A:w("nv"),de:w("Sm"),L:w("qm"),eA:w("wo"),cZ:w("mq"),af:w("bd<fJ>"),l:w("c"),k:w("d8"),av:w("qx"),x:w("bF<E?>"),cQ:w("It"),dr:w("amF"),q:w("x7"),gN:w("ir<H>"),b:w("bp<E?>"),y:w("A"),gR:w("F"),z:w("@"),v:w("v"),ea:w("uG?"),g:w("u<@>?"),h:w("a3<f,@>?"),X:w("C?"),dE:w("H?"),T:w("f?"),aD:w("ip?"),E:w("c?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_Z=new B.xE(null)
D.a0_=new B.a0C(null)
D.a08=new B.L_(null)
D.BA=new A.bm(C.an,1,C.U,-1)
D.a0A=new A.bm(C.m,1.5,C.U,-1)
D.a0R=new A.at(0,180,0,1/0)
D.mM=new A.at(34,1/0,34,1/0)
D.C3=new B.a5O()
D.a31=new B.ao9()
D.a3c=new B.Lp(null)
D.a3i=new B.a1Q(null)
D.adm=new A.aF(C.fw,40,C.p,null,null)
D.aHX=new A.ab("Keine Freigabe-Anfragen offen.",null,null,null,null,null,null,null,null,null)
D.aj0=w([D.adm,C.M,D.aHX],x.p)
D.a5y=new A.jX(C.K,C.f,C.H,C.k,null,C.bA,null,0,D.aj0,null)
D.auv=new A.ai(C.dd,D.a5y,null)
D.a3l=new A.fw(C.W,null,null,D.auv,null)
D.aIg=new A.ab("Kein Bestand erfasst.",null,null,null,null,null,null,null,null,null)
D.a3m=new A.fw(C.W,null,null,D.aIg,null)
D.aIz=new A.ab("Keine Eintr\xe4ge im Zeitraum.",null,null,null,null,null,null,null,null,null)
D.a3p=new A.fw(C.W,null,null,D.aIz,null)
D.a3x=new B.a2b(null)
D.a5A=new B.LZ(null)
D.aHx=new A.ab("",null,null,null,null,null,null,null,null,null)
D.kT=new B.fz(D.aHx)
D.aGA=new A.ab("Anlass",null,null,null,null,null,null,null,null,null)
D.a6i=new B.fn(D.aGA,!1)
D.aHz=new A.ab("Betrag",null,null,null,null,null,null,null,null,null)
D.a6j=new B.fn(D.aHz,!0)
D.aHH=new A.ab("Datum",null,null,null,null,null,null,null,null,null)
D.Dk=new B.fn(D.aHH,!1)
D.aI7=new A.ab("km",null,null,null,null,null,null,null,null,null)
D.a6r=new B.fn(D.aI7,!0)
D.a6N=new B.a51(null)
D.kX=new A.n_(1,null,null)
D.a6S=new B.a52(null)
D.a6T=new B.MH(null)
D.aGT=new A.ab("\u2014 kein Produkt \u2014",null,null,null,null,null,null,null,null,null)
D.a73=new A.dW(null,D.aGT,C.aW,null,x.r)
D.aGQ=new A.ab("\u2014 freie Eingabe \u2014",null,null,null,null,null,null,null,null,null)
D.a75=new A.dW(null,D.aGQ,C.aW,null,x.r)
D.a7F=new A.al(0,0,0,16)
D.a7G=new A.al(0,0,0,2)
D.a7Q=new A.al(0,28,0,6)
D.DJ=new A.al(0,3,0,3)
D.a7V=new A.al(0,5,0,5)
D.a7Y=new A.al(10,5,10,5)
D.a8a=new A.al(20,0,20,0)
D.DP=new A.al(20,12,20,0)
D.a8n=new A.al(7,3,7,3)
D.a8q=new B.a5c(null)
D.a8D=new A.e8("Betriebliche Fahrten",!1,null)
D.a8w=new A.kR(1,C.dX,D.a8D,null)
D.a8E=new A.e8("Fahrzeugkosten",!1,null)
D.a8F=new A.e8("Freigabe",!1,null)
D.a8R=new A.e8("Abo-Verwaltung",!1,null)
D.a92=new B.a5v(null)
D.aHi=new A.ab("Freigaben",null,null,null,null,null,null,null,null,null)
D.a9k=new A.ew(D.aHi,null,null)
D.aIi=new A.ab("K\xfcndigungen",null,null,null,null,null,null,null,null,null)
D.a9m=new A.ew(D.aIi,null,null)
D.aJ7=new A.ab("Anlage PKW-Kosten",null,null,null,null,null,null,null,null,null)
D.a9p=new A.ew(D.aJ7,null,null)
D.aIJ=new A.ab("B2B-Kunden \u2014 sevDesk-Export",null,null,null,null,null,null,null,null,null)
D.a9q=new A.ew(D.aIJ,null,null)
D.aH6=new A.ab("Mitarbeiter",null,null,null,null,null,null,null,null,null)
D.a9r=new A.ew(D.aH6,null,null)
D.aIc=new A.ab("Reklamationen",null,null,null,null,null,null,null,null,null)
D.a9w=new A.ew(D.aIc,null,null)
D.aJ_=new A.ab("Inventur \u2014 FIFO-Bewegungsreport",null,null,null,null,null,null,null,null,null)
D.a9A=new A.ew(D.aJ_,null,null)
D.aH4=new A.ab("Inventur",null,null,null,null,null,null,null,null,null)
D.a9C=new A.ew(D.aH4,null,null)
D.aHS=new A.ab("Anlagen",null,null,null,null,null,null,null,null,null)
D.a9G=new A.ew(D.aHS,null,null)
D.aGs=new A.ab("Dokumente",null,null,null,null,null,null,null,null,null)
D.a9I=new A.ew(D.aGs,null,null)
D.aGn=new A.ab("Telemetrie / IoT",null,null,null,null,null,null,null,null,null)
D.a9J=new A.ew(D.aGn,null,null)
D.aaa=new A.a6(58147,"MaterialIcons",null,!1)
D.aad=new A.a6(58206,"MaterialIcons",null,!1)
D.aaq=new A.a6(58550,"MaterialIcons",null,!1)
D.aaA=new A.a6(58966,"MaterialIcons",null,!1)
D.aaF=new A.a6(59084,"MaterialIcons",null,!1)
D.aaU=new A.a6(61358,"MaterialIcons",null,!1)
D.ab1=new A.a6(61584,"MaterialIcons",null,!1)
D.ab4=new A.a6(61682,"MaterialIcons",null,!1)
D.abb=new A.a6(61838,"MaterialIcons",null,!1)
D.abe=new A.a6(62003,"MaterialIcons",null,!1)
D.abp=new A.a6(62295,"MaterialIcons",null,!1)
D.abu=new A.a6(62446,"MaterialIcons",null,!1)
D.abJ=new A.a6(984578,"MaterialIcons",null,!1)
D.abL=new A.a6(984664,"MaterialIcons",null,!1)
D.abN=new A.a6(984828,"MaterialIcons",null,!1)
D.Fd=new A.aF(C.i6,16,C.m,null,null)
D.ac9=new A.aF(C.lg,32,C.j,null,null)
D.acc=new A.aF(C.aab,16,null,null,null)
D.Fi=new A.aF(C.EI,null,null,null,null)
D.acm=new A.aF(C.i6,14,C.m,null,null)
D.acp=new A.aF(C.fw,null,C.m,null,null)
D.EL=new A.a6(59030,"MaterialIcons",null,!1)
D.acq=new A.aF(D.EL,null,null,null,null)
D.aaj=new A.a6(58442,"MaterialIcons",null,!1)
D.acC=new A.aF(D.aaj,null,null,null,null)
D.Ev=new A.a6(57415,"MaterialIcons",null,!1)
D.o4=new A.aF(D.Ev,null,null,null,null)
D.li=new A.aF(E.EB,null,null,null,null)
D.acL=new A.aF(C.ji,16,null,null,null)
D.aaz=new A.a6(58950,"MaterialIcons",null,!1)
D.acP=new A.aF(D.aaz,18,null,null,null)
D.acQ=new A.aF(C.i5,16,null,null,null)
D.Fo=new A.aF(D.Ev,18,null,null,null)
D.aap=new A.a6(58516,"MaterialIcons",null,!1)
D.acY=new A.aF(D.aap,20,null,null,null)
D.acZ=new A.aF(C.lg,null,C.aE,null,null)
D.aa5=new A.a6(57918,"MaterialIcons",null,!1)
D.Fp=new A.aF(D.aa5,18,null,null,null)
D.ad5=new A.aF(C.y5,null,C.p,null,null)
D.aa6=new A.a6(57919,"MaterialIcons",null,!1)
D.adc=new A.aF(D.aa6,20,null,null,null)
D.add=new A.aF(C.fw,20,null,null,null)
D.aaO=new A.a6(61280,"MaterialIcons",null,!1)
D.adh=new A.aF(D.aaO,null,null,null,null)
D.adk=new A.aF(D.EL,20,null,null,null)
D.ado=new A.aF(C.i6,null,C.an,null,null)
D.adp=new A.aF(C.le,18,C.m,null,null)
D.aao=new A.a6(58514,"MaterialIcons",null,!1)
D.ads=new A.aF(D.aao,null,null,null,null)
D.adB=new A.aF(C.lh,16,C.p,null,null)
D.abs=new A.a6(62403,"MaterialIcons",null,!1)
D.adE=new A.aF(D.abs,18,null,null,null)
D.adF=new A.aF(C.le,null,null,null,null)
D.aed=new A.c_(null,null,null,"Provider",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aee=new A.c_(null,null,null,"Rechnungsdatum",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeh=new A.c_(null,null,null,"Entnommener Betrag brutto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aej=new A.c_(null,null,null,"Name (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aek=new A.c_(null,null,null,"Kosten (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ael=new A.c_(null,null,null,"Wechselgeld (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aem=new A.c_(null,null,null,"Produktbezeichnung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fv=new A.c_(null,null,null,"Betrag brutto in Euro",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fw=new A.c_(null,null,null,"Bezeichnung (freiwillig)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fx=new A.c_(null,null,null,"Kostenart",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aen=new A.c_(null,null,null,"Ma\xdfnahme",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aep=new A.c_(null,null,null,"Adapter",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeq=new A.c_(null,null,null,"Bemerkung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aes=new A.c_(null,null,null,"Korrekturma\xdfnahme (bei \xdcberschreitung)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aet=new A.c_(null,null,null,"HMAC-Secret",null,null,null,"Wird zur Signaturpr\xfcfung genutzt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fy=new A.c_(null,null,null,"Kilometer (Hin- und R\xfcckweg)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeu=new A.c_(null,null,null,"Slot-Code (z. B. A3)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aev=new A.c_(null,null,null,"Antwort an den Kunden",null,null,null,"Wird dem Kunden im Verlauf angezeigt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.uu,!0,null,null,null,null)
D.aex=new A.c_(null,null,null,"Automat",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aey=new A.c_(null,null,null,"Rechnungsnummer",null,null,null,"Nummer der Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aez=new A.c_(null,null,null,"Titel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeB=new A.c_(null,null,null,"Eingelegte Menge",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeF=new A.c_(null,null,null,"MHD des Lots (empfohlen)",null,null,null,"Wird f\xfcr die MHD-Bewertung im Inventurreport genutzt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeG=new A.c_(null,null,null,"Reinigungsmittel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fz=new A.c_(null,null,null,"Fahrzeug",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeH=new A.c_(null,null,null,"Anzeigename",null,null,null,'z. B. \u201eCleverMetrics-Prod"',null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeI=new A.c_(null,null,null,"Fehlerbeschreibung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeJ=new A.c_(null,null,null,"Ist-Temperatur (\xb0C)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\xb0C",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.FA=new A.c_(null,null,null,"Produkt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeK=new A.c_(null,null,null,"Automat w\xe4hlen",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeO=new A.c_(null,null,null,"VK-Preis netto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeQ=new A.c_(null,null,null,"Kilometerstand am 01.01.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.FB=new A.c_(null,null,null,"Anlass der Fahrt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeR=new A.c_(null,null,null,"Menge (St\xfcck)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeS=new A.c_(null,null,null,null,null,null,null,null,null,null,"Kommentar (Pflicht)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeT=new A.c_(null,null,null,"Entnommener Verderb",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeU=new A.c_(null,null,null,"Grund",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeV=new A.c_(null,null,null,"Externe Ger\xe4t-ID / Serien-Nummer",null,null,null,"Wie beim Provider hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeW=new A.c_(null,null,null,"Produkt (optional, koppelt Inventur)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeX=new A.c_(null,null,null,"EK-Preis netto \u20ac/St\xfcck",null,null,null,"Aus Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeY=new A.c_(null,null,null,"Firmware (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeZ=new A.c_(null,null,null,"Notizen (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af_=new A.c_(null,null,null,"Kilometerstand am 31.12.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af1=new A.c_(null,null,null,"E-Mail",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af2=new A.c_(null,null,null,"Ordner",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af3=new A.c_(null,null,null,"Kapazit\xe4t",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af4=new A.c_(null,null,null,"Art",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af5=new A.c_(null,null,null,"Differenz (+ auff\xfcllen / \u2212 abziehen)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.af8=new A.c_(null,null,null,"Erledigt durch (Name/Firma)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aft=new B.Oe(1)
D.afu=new B.Oe(null)
D.afv=new B.Og(null)
D.afw=new B.a76(null)
D.yw=new A.rJ(null,null,null,null,null,null,null,null)
D.apK=new A.bt("tanken","Tanken",x.J)
D.apN=new A.bt("versicherung","Versicherung",x.J)
D.apM=new A.bt("kfz_steuer","Kfz-Steuer",x.J)
D.apL=new A.bt("waesche","Autow\xe4sche",x.J)
D.apI=new A.bt("reparatur","Reparaturen",x.J)
D.apH=new A.bt("leasing","Leasingraten",x.J)
D.apG=new A.bt("abschreibung","Abschreibung",x.J)
D.apJ=new A.bt("sonstiges","Sonstiges",x.J)
D.ahN=w([D.apK,D.apN,D.apM,D.apL,D.apI,D.apH,D.apG,D.apJ],A.au("B<bt<f,f>>"))
D.aGD=new A.ab("Rechnung",null,null,null,null,null,null,null,null,null)
D.Dj=new B.fn(D.aGD,!1)
D.aGW=new A.ab("Rg-Datum",null,null,null,null,null,null,null,null,null)
D.a6l=new B.fn(D.aGW,!1)
D.aIN=new A.ab("Rest",null,null,null,null,null,null,null,null,null)
D.a6n=new B.fn(D.aIN,!0)
D.aIr=new A.ab("EK/Stk.",null,null,null,null,null,null,null,null,null)
D.Dh=new B.fn(D.aIr,!0)
D.aHQ=new A.ab("MHD",null,null,null,null,null,null,null,null,null)
D.Di=new B.fn(D.aHQ,!1)
D.aHm=new A.ab("Restlaufzeit",null,null,null,null,null,null,null,null,null)
D.a6o=new B.fn(D.aHm,!0)
D.aIT=new A.ab("Abschlag %",null,null,null,null,null,null,null,null,null)
D.a6e=new B.fn(D.aIT,!0)
D.aH7=new A.ab("AK-Wert",null,null,null,null,null,null,null,null,null)
D.a6t=new B.fn(D.aH7,!0)
D.aIU=new A.ab("Abschlag \u20ac",null,null,null,null,null,null,null,null,null)
D.a6f=new B.fn(D.aIU,!0)
D.aIq=new A.ab("Bilanz",null,null,null,null,null,null,null,null,null)
D.a6d=new B.fn(D.aIq,!0)
D.ajo=w([D.Dj,D.a6l,D.a6n,D.Dh,D.Di,D.a6o,D.a6e,D.a6t,D.a6f,D.a6d],x.G)
D.aGP=new A.ab("Vorgang",null,null,null,null,null,null,null,null,null)
D.a6p=new B.fn(D.aGP,!1)
D.aGZ=new A.ab("Menge",null,null,null,null,null,null,null,null,null)
D.a6g=new B.fn(D.aGZ,!0)
D.aHZ=new A.ab("Bemerkung",null,null,null,null,null,null,null,null,null)
D.a6h=new B.fn(D.aHZ,!1)
D.ajD=w([D.Dk,D.a6p,D.a6g,D.Dh,D.Dj,D.Di,D.a6h],x.G)
D.aH1=new A.ab("Au\xdfenreinigung",null,null,null,null,null,null,null,null,null)
D.a6Y=new A.dW("exterior",D.aH1,C.aW,null,x.r)
D.aGN=new A.ab("Innenreinigung",null,null,null,null,null,null,null,null,null)
D.a74=new A.dW("interior",D.aGN,C.aW,null,x.r)
D.aGV=new A.ab("Vollreinigung + Desinfektion",null,null,null,null,null,null,null,null,null)
D.a70=new A.dW("full",D.aGV,C.aW,null,x.r)
D.ak6=w([D.a6Y,D.a74,D.a70],x.I)
D.aGO=new A.ab("MHD \xfcberschritten",null,null,null,null,null,null,null,null,null)
D.a71=new A.dW("mhd",D.aGO,C.aW,null,x.r)
D.aH9=new A.ab("Besch\xe4digung",null,null,null,null,null,null,null,null,null)
D.a78=new A.dW("damage",D.aH9,C.aW,null,x.r)
D.aIa=new A.ab("Hygienemangel",null,null,null,null,null,null,null,null,null)
D.a76=new A.dW("hygiene",D.aIa,C.aW,null,x.r)
D.aHk=new A.ab("Sonstiges",null,null,null,null,null,null,null,null,null)
D.a79=new A.dW("other",D.aHk,C.aW,null,x.r)
D.akm=w([D.a71,D.a78,D.a76,D.a79],x.I)
D.amn=w(["> 4 Wochen","0 % Abschlag","0 %","normale Verwertbarkeit"],x.s)
D.anN=w(["2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit, ggf. erh\xf6hte Preisaktionen"],x.s)
D.alO=w(["1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck"],x.s)
D.aiQ=w(["< 1 Woche","50\u201380 %","65 %","Risiko des Nichtverkaufs deutlich erh\xf6ht"],x.s)
D.anG=w(["MHD \xfcberschritten","100 % Abschreibung","100 %","keine wirtschaftliche Verwertbarkeit"],x.s)
D.akO=w([D.amn,D.anN,D.alO,D.aiQ,D.anG],A.au("B<u<f>>"))
D.ala=w(["Live","Provider","Ger\xe4te","Slots","Events"],x.s)
D.aI2=new A.ab("Generic (kanonisch)",null,null,null,null,null,null,null,null,null)
D.a6Z=new A.dW("generic",D.aI2,C.aW,null,x.r)
D.aIv=new A.ab("CleverMetrics",null,null,null,null,null,null,null,null,null)
D.a77=new A.dW("clevermetrics",D.aIv,C.aW,null,x.r)
D.aIu=new A.ab("Nayax",null,null,null,null,null,null,null,null,null)
D.a7_=new A.dW("nayax",D.aIu,C.aW,null,x.r)
D.aGH=new A.ab("Custom",null,null,null,null,null,null,null,null,null)
D.a72=new A.dW("custom",D.aGH,C.aW,null,x.r)
D.alu=w([D.a6Z,D.a77,D.a7_,D.a72],x.I)
D.alW=w([],A.au("B<bM>"))
D.aQY=w([],A.au("B<mq>"))
D.alV=w([],x.R)
D.alU=w([],x.V)
D.anw=w(["system_admin","shareholder","employee"],x.s)
D.aP4=new B.wZ("> 4 Wochen","0 %","0 %","normale Verwertbarkeit")
D.aP6=new B.wZ("2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit")
D.aP3=new B.wZ("1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck")
D.aP2=new B.wZ("< 1 Woche","50\u201380 %","65 %","Risiko Nichtverkauf deutlich erh\xf6ht")
D.aP5=new B.wZ("MHD \xfcberschritten","100 %","100 %","keine wirtschaftl. Verwertbarkeit")
D.anB=w([D.aP4,D.aP6,D.aP3,D.aP2,D.aP5],A.au("B<wZ>"))
D.aI9=new A.ab("Rest-MHD am Stichtag",null,null,null,null,null,null,null,null,null)
D.a6k=new B.fn(D.aI9,!1)
D.aIL=new A.ab("Typischer Ansatz",null,null,null,null,null,null,null,null,null)
D.a6m=new B.fn(D.aIL,!1)
D.aI4=new A.ab("B\xf6rdesnack24 wendet an",null,null,null,null,null,null,null,null,null)
D.a6q=new B.fn(D.aI4,!0)
D.aH8=new A.ab("Begr\xfcndung",null,null,null,null,null,null,null,null,null)
D.a6s=new B.fn(D.aH8,!1)
D.anW=w([D.a6k,D.a6m,D.a6q,D.a6s],x.G)
D.ao_=w(["pdf","docx","doc","jpg","jpeg","png"],x.s)
D.apF=new B.a7J(null)
D.ats={tanken:0,versicherung:1,kfz_steuer:2,waesche:3,reparatur:4,leasing:5,abschreibung:6,sonstiges:7}
D.lV=new A.a5(D.ats,["Tanken","Versicherung","Kfz-Steuer","Autow\xe4sche","Reparaturen","Leasingraten","Abschreibung","Sonstiges"],x.o)
D.ath={exterior:0,interior:1,full:2}
D.apZ=new A.a5(D.ath,["Au\xdfenreinigung","Innenreinigung","Vollreinigung + Desinfektion"],x.o)
D.atu={mhd:0,damage:1,hygiene:2,other:3}
D.aq_=new A.a5(D.atu,["MHD \xfcberschritten","Besch\xe4digung","Hygienemangel","Sonstiges"],x.o)
D.at7={temperature:0,cleaning:1,disposal:2,filling:3,maintenance:4,cash:5,training:6}
D.aq0=new A.a5(D.at7,["haccp_temperature","haccp_cleaning","haccp_disposal","haccp_filling","haccp_maintenance","haccp_cash","haccp_training"],x.o)
D.atp={"inventory.view":0,"inventory.edit":1,"haccp.fill":2,"haccp.temperature":3,"haccp.cleaning":4,"haccp.disposal":5,"haccp.maintenance":6,"cash.collect":7,"documents.view":8}
D.Sy=new A.a5(D.atp,["Inventur ansehen","Inventur bearbeiten","Bef\xfcllung","Temperatur","Reinigung","Vernichtung","Wartung","Geldentnahme","Dokumente ansehen"],x.o)
D.a4a=new A.E(1,1,0.9529411764705882,0.8784313725490196,C.i)
D.a4V=new A.E(1,1,0.8784313725490196,0.6980392156862745,C.i)
D.a5v=new A.E(1,1,0.8,0.5019607843137255,C.i)
D.a3L=new A.E(1,1,0.7176470588235294,0.30196078431372547,C.i)
D.a4p=new A.E(1,1,0.6549019607843137,0.14901960784313725,C.i)
D.a4M=new A.E(1,1,0.596078431372549,0,C.i)
D.a54=new A.E(1,0.984313725490196,0.5490196078431373,0,C.i)
D.a4j=new A.E(1,0.9607843137254902,0.48627450980392156,0,C.i)
D.a52=new A.E(1,0.9372549019607843,0.4235294117647059,0,C.i)
D.a3Y=new A.E(1,0.9019607843137255,0.3176470588235294,0,C.i)
D.asm=new A.dh([50,D.a4a,100,D.a4V,200,D.a5v,300,D.a3L,400,D.a4p,500,D.a4M,600,D.a54,700,D.a4j,800,D.a52,900,D.a3Y],A.au("dh<v,E>"))
D.asy=new A.rO(D.asm,1,1,0.596078431372549,0,C.i)
D.a7S=new A.al(0,2,6,0)
D.aas=new A.a6(58612,"MaterialIcons",null,!1)
D.adf=new A.aF(D.aas,16,C.m,null,null)
D.aur=new A.ai(D.a7S,D.adf,null)
D.auu=new A.ai(C.ns,C.lr,null)
D.Xd=new B.ke(0,"eq")
D.avr=new B.ke(1,"neq")
D.avs=new B.ke(10,"match")
D.avt=new B.ke(11,"imatch")
D.avu=new B.ke(12,"isDistinct")
D.avv=new B.ke(2,"lt")
D.avw=new B.ke(3,"lte")
D.avx=new B.ke(4,"gt")
D.avy=new B.ke(5,"gte")
D.Xe=new B.ke(6,"inFilter")
D.avz=new B.ke(7,"like")
D.avA=new B.ke(8,"ilike")
D.avB=new B.ke(9,"isFilter")
D.aax=new A.a6(58871,"MaterialIcons",null,!1)
D.ad_=new A.aF(D.aax,18,C.j,null,null)
D.a8M=new A.e8("Bilanzwert der Vorr\xe4te",!1,null)
D.an7=w([D.ad_,C.aZ,D.a8M],x.p)
D.axC=new A.iC(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.an7,null)
D.adj=new A.aF(C.o2,18,C.j,null,null)
D.a8Y=new A.e8("Freigabe / Unterschriften",!1,null)
D.aiv=w([D.adj,C.aZ,D.a8Y],x.p)
D.axD=new A.iC(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.aiv,null)
D.adx=new A.aF(C.fw,18,C.j,null,null)
D.a8W=new A.e8("Bewertungsansatz MHD-Abschlag",!1,null)
D.aip=w([D.adx,C.aZ,D.a8W],x.p)
D.axH=new A.iC(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.aip,null)
D.axV=new A.fk("Steuern","Anlagen zum Jahresabschluss",null,null)
D.ay2=new A.fk("Verwaltung","Betriebsprotokolle",null,null)
D.aAe=new A.cy(16,16,C.Cr,null)
D.aAl=new A.cy(null,48,null,null)
D.aAo=new A.oO(0,"action")
D.aHy=new A.ab("F\xfcr dieses Dokument ist noch keine Version hochgeladen.",null,null,null,null,null,null,null,null,null)
D.aAz=new A.dE(D.aHy,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aIj=new A.ab("Signiertes PDF wird ge\xf6ffnet \u2026",null,null,null,null,null,null,null,null,null)
D.aAE=new A.dE(D.aIj,null,null,null,null,null,null,null,null,null,null,null,null,C.kY,!1,null,null,null,C.n,null)
D.aGE=new A.ab("Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aAG=new A.dE(D.aGE,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aGJ=new A.ab("Bitte einen Betrag \xfcber null angeben.",null,null,null,null,null,null,null,null,null)
D.Zb=new A.dE(D.aGJ,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aIw=new A.ab("Einladung versendet.",null,null,null,null,null,null,null,null,null)
D.aAK=new A.dE(D.aIw,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aGR=new A.ab("Anlass und eine Strecke \xfcber null sind n\xf6tig.",null,null,null,null,null,null,null,null,null)
D.Zc=new A.dE(D.aGR,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHO=new A.ab("Eintrag gespeichert.",null,null,null,null,null,null,null,null,null)
D.aAM=new A.dE(D.aHO,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aII=new A.ab("Speichern fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null,null,null)
D.aAN=new A.dE(D.aII,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aIb=new A.ab("Format nicht direkt anzeigbar \u2014 Datei wurde heruntergeladen. Tipp: k\xfcnftige Versionen als PDF hochladen f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null,null,null)
D.aAP=new A.dE(D.aIb,null,null,null,null,null,null,null,null,null,null,null,null,C.DB,!1,null,null,null,C.n,null)
D.aId=new A.ab('Keine Mitarbeiter angelegt \u2014 zuerst \xfcber \u201eMitarbeiter" einladen.',null,null,null,null,null,null,null,null,null)
D.aAT=new A.dE(D.aId,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aIY=new A.ab("Der Stand am 31.12. kann nicht kleiner sein als der am 01.01.",null,null,null,null,null,null,null,null,null)
D.aAV=new A.dE(D.aIY,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aB8=new A.j7("l\xe4uft bald",C.kd,null,null)
D.aB9=new A.j7("g\xfcltig",C.fG,null,null)
D.aBa=new A.j7("abgelaufen",C.ml,null,null)
D.aBb=new A.j7("Vorlage",C.kd,null,null)
D.aBw=new B.wn(0,"top")
D.Zp=new B.wn(1,"middle")
D.aBx=new B.wn(2,"bottom")
D.aBy=new B.wn(3,"baseline")
D.Zq=new B.wn(4,"fill")
D.aBz=new B.wn(5,"intrinsicHeight")
D.aBA=new B.Sw(null)
D.aBB=new B.ae7(null)
D.aBV=new A.iG(2,!0,!1)
D.aBW=new A.iG(2,!0,!0)
D.aDH=new A.P(!0,C.m,null,null,null,null,11,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aC9=new A.P(!0,C.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGl=new A.ab("Nachweis",null,D.aC9,null,null,null,null,null,null,null)
D.aGp=new A.ab("MHD gepr\xfcft",null,null,null,null,null,null,null,null,null)
D.aFa=new A.P(!0,C.an,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ZH=new A.ab("Streichen",null,D.aFa,null,null,null,null,null,null,null)
D.aGu=new A.ab("In Bearbeitung",null,null,null,null,null,null,null,null,null)
D.aGx=new A.ab("setzen",null,null,null,null,null,null,null,null,null)
D.aGF=new A.ab("Provider anlegen",null,null,null,null,null,null,null,null,null)
D.aGL=new A.ab("Bild hochladen",null,null,null,null,null,null,null,null,null)
D.aH_=new A.ab("PDF konnte nicht ge\xf6ffnet werden.",null,null,null,null,null,null,null,null,null)
D.aH0=new A.ab("Betriebliche Fahrt",null,null,null,null,null,null,null,null,null)
D.AC=new A.ab("Einladen",null,null,null,null,null,null,null,null,null)
D.aHc=new A.ab("Als bearbeitet markieren",null,null,null,null,null,null,null,null,null)
D.aHd=new A.ab("Fahrt",null,null,null,null,null,null,null,null,null)
D.aHe=new A.ab("CSV herunterladen (b2b_customers.csv)",null,null,null,null,null,null,null,null,null)
D.aHg=new A.ab("Ablehnung begr\xfcnden",null,null,null,null,null,null,null,null,null)
D.aHh=new A.ab("Freigeben",null,null,null,null,null,null,null,null,null)
D.aHl=new A.ab("Datens\xe4tze laden",null,null,null,null,null,null,null,null,null)
D.aHo=new A.ab("Fahrt korrigieren",null,null,null,null,null,null,null,null,null)
D.aHp=new A.ab("Kosten erfassen",null,null,null,null,null,null,null,null,null)
D.ZJ=new A.ab("Anlegen",null,null,null,null,null,null,null,null,null)
D.aHR=new A.ab("Aus DocuSign holen",null,null,null,null,null,null,null,null,null)
D.aI8=new A.ab("\xe4ndern",null,null,null,null,null,null,null,null,null)
D.aIn=new A.ab("Buchen",null,null,null,null,null,null,null,null,null)
D.aIs=new A.ab("Bild nicht geladen",null,null,null,null,null,null,null,null,null)
D.aIt=new A.ab("Kilometerst\xe4nde",null,null,null,null,null,null,null,null,null)
D.aIA=new A.ab("Mitarbeiter zur Signatur einladen",null,null,null,null,null,null,null,null,null)
D.aIF=new A.ab("Neues Dokument",null,null,null,null,null,null,null,null,null)
D.aIG=new A.ab("Zeitraum",null,null,null,null,null,null,null,null,null)
D.aIH=new A.ab("Kostenposition korrigieren",null,null,null,null,null,null,null,null,null)
D.ZM=new A.ab("Erledigt",null,null,null,null,null,null,null,null,null)
D.aIM=new A.ab("Registrieren",null,null,null,null,null,null,null,null,null)
D.ZN=new A.ab("Neu",null,null,null,null,null,null,null,null,null)
D.ZO=new A.ab("Hinzuf\xfcgen",null,null,null,null,null,null,null,null,null)
D.aJ0=new A.ab("Slot anlegen / bearbeiten",null,null,null,null,null,null,null,null,null)
D.aJ3=new A.ab("Ger\xe4t registrieren",null,null,null,null,null,null,null,null,null)
D.aJ8=new A.ab("Inventur berechnen",null,null,null,null,null,null,null,null,null)
D.aN1=new B.Bx(null)
D.hC=new B.b76(0,"flat")
D.aNb=new B.BA(null)
D.aNk=new B.ajK(null)
D.aNs=new B.BH(null)
D.aNt=new B.ak5(null)
D.aNy=new B.BI(null)
D.aa8=new A.a6(58090,"MaterialIcons",null,!1)
D.aNI=new B.tU(D.aa8,"Automat w\xe4hlen, um die Slot-Belegung zu bearbeiten.",null)
D.ab2=new A.a6(61653,"MaterialIcons",null,!1)
D.aNJ=new B.tU(D.ab2,"F\xfcr diesen Automaten sind noch keine Slots konfiguriert.",null)
D.aaV=new A.a6(61364,"MaterialIcons",null,!1)
D.aNK=new B.tU(D.aaV,"Noch kein IoT-Ger\xe4t verkn\xfcpft. Registriere das Gateway eines Automaten mit seiner externen Serien-Nummer beim jeweiligen Provider.",null)
D.a9X=new A.a6(57630,"MaterialIcons",null,!1)
D.aNL=new B.tU(D.a9X,'Noch kein Telemetrie-Provider registriert. Lege einen an (z. B. \u201eCleverMetrics-Prod") und trage seinen Webhook-Endpoint bei uns hinterlegten HMAC-Secret ein.',null)
D.aaw=new A.a6(58743,"MaterialIcons",null,!1)
D.aNM=new B.tU(D.aaw,"Noch keine Telemetrie-Daten empfangen. Automat mit IoT-Modul verkn\xfcpfen und Webhook des Anbieters auf /iot-webhook zeigen lassen.",null)
D.aNN=new B.akL(null)
D.aa9=new A.a6(58134,"MaterialIcons",null,!1)
D.aNO=new B.tU(D.aa9,"Noch keine Telemetrie-Events empfangen.",null)
D.aNP=new B.akR(null)
D.aOl=new B.BR(null)
D.aOE=new B.C_(null)
D.a_r=new B.Iz(null)
D.aOV=new B.anc(null)
D.aOW=new B.C3(null)
D.aP7=new B.anD(null)
D.aPu=new B.fJ("Zu signieren","Belehrungen & Nachweise",C.o2,C.Tl,!0,null,null,null,null)
D.aPB=new B.aoe(null)
D.aPM=new B.Cf(null)
D.aPN=new B.apn(null)
D.aQ8=new B.Cq(null)
D.aQ9=new B.Yt(null)
D.aQi=new B.CC(null)})();(function staticFields(){$.bJQ=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"chv","bDW",()=>A.hV(new B.bwh(),x.Z))
w($,"cge","bx_",()=>A.Ny(new B.btP(),x.C))
w($,"chk","bDS",()=>A.Ny(new B.bvB(),x.D))
w($,"cgK","bx6",()=>C.aL.yM(0,new B.buJ(),x.e,x.N))
w($,"chl","aws",()=>C.aL.yM(0,new B.bvE(),x.D,A.au("At")))
w($,"cgM","bx7",()=>A.b07(B.c7I(),x.M,A.au("be<~>")))
w($,"cdU","bwO",()=>A.hV(new B.brT(),x.u))
w($,"cdT","bwN",()=>C.aL.$1$1(new B.brS(),x.D))
w($,"ce9","Kc",()=>C.aL.$1$1(new B.bsg(),x.D))
w($,"cek","bwP",()=>C.aL.$1$1(new B.bst(),x.D))
w($,"cfm","bDl",()=>C.aL.yM(0,new B.bti(),x.D,x.N))
w($,"cfb","bDk",()=>C.aL.$1$1(new B.bt7(),x.D))
w($,"ceq","bD7",()=>C.aL.$1$1(new B.bsA(),x.D))
w($,"cfc","bwU",()=>C.aL.$1$1(new B.bt8(),x.D))
w($,"ce8","bD4",()=>C.aL.$1$1(new B.bse(),x.D))
w($,"cec","bD5",()=>C.aL.$1$1(new B.bsl(),x.D))
w($,"c9Z","bNz",()=>A.c_L())})()};
(a=>{a["8i5tCQsyz4MaO79wl2yGsgd/iPU="]=a.current})($__dart_deferred_initializers__);