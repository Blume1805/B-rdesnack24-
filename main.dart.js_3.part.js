((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,E,B={wh:function wh(d){this.a=d},bvu:function bvu(){},pM:function pM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},yR:function yR(d,e,f){this.c=d
this.d=e
this.a=f},alr:function alr(d,e){this.c=d
this.a=e},
bVU(d,e,f,g,h,i,j,k){return new B.OW(f,j,e,k,d,i,g,h,null)},
OW:function OW(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bt4:function bt4(){},
bVw(d){return new B.zt(d,new A.iw(x.aA),C.dL)},
buQ:function buQ(){},
btZ:function btZ(){},
Al:function Al(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
buT:function buT(){},
zt:function zt(d,e,f){this.r=d
this.a=e
this.f=f},
aLo:function aLo(d,e,f){this.a=d
this.b=e
this.c=f},
aLp:function aLp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLq:function aLq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGj(){return new B.zu(null)},
zu:function zu(d){this.a=d},
aLv:function aLv(){},
aLu:function aLu(){},
aLt:function aLt(d){this.a=d},
aLs:function aLs(){},
ang:function ang(d,e){this.c=d
this.a=e},
bhC:function bhC(d){this.a=d},
bhB:function bhB(d,e){this.a=d
this.b=e},
bhA:function bhA(d){this.a=d},
akj:function akj(d){this.a=d},
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
ajh:function ajh(d){this.a=d},
bB7(a8,a9,b0,b1,b2,b3){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$bB7=A.m(function(b4,b5){if(b4===1)return A.n(b5,v)
for(;;)switch(w){case 0:a5=a9.h(0,"jahr")
a6=x.g
a7=a6.a(a9.h(0,"fahrzeuge"))
if(a7==null)a7=C.bl
u=x.P
t=J.cE(a7,u)
a7=a6.a(a9.h(0,"fahrten"))
s=J.cE(a7==null?C.bl:a7,u)
r=B.JE(a9.h(0,"nutzungseinlage"))
q=C.d.a0(B.JE(a9.h(0,"fahrten_ohne_satz")))
p=a8!=null&&a8.length!==0
a7=A.i(a5)
o=A.i(a5)
n=B.bA8(b0)
m=B.bA8(b2)
l=B.bA8(b3)
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
for(h=0;h<8;++h){g=D.ahw[h]
m=A.ax(g.b,"&","&amp;")
m=A.ax(m,"<","&lt;")
m=A.ax(m,">","&gt;")
a7+='<tr><td class="l">'+A.ax(m,'"',"&quot;")+"</td>"
for(m=new A.b8(t,t.gp(0),n);m.t();){l=m.d
l=a6.a(J.Z(l==null?o.a(l):l,"kosten"))
f=J.cE(l==null?C.bl:l,u)
e=new A.bd(f,new B.buC(g),f.$ti.i("bd<an.E>")).fA(0,0,new B.buD())
a7+='<td class="r">'+(e===0?"\u2014":$.d2().al(e))+"</td>"}a7+="</tr>"}a6=a7+'<tr class="summe"><td class="l">Gesamtkosten (brutto)</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();a6=u){u=a7.d
u=B.JE(J.Z(u==null?o.a(u):u,"gesamtkosten"))
u=a6+('<td class="r">'+$.d2().al(u)+"</td>")}a6+='</tr><tr><td class="l">Kilometerstand 01.01.</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bs3(J.Z(u==null?o.a(u):u,"km_stand_anfang"))+"</td>"}a6+='</tr><tr><td class="l">Kilometerstand 31.12.</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bs3(J.Z(u==null?o.a(u):u,"km_stand_ende"))+"</td>"}a6+='</tr><tr><td class="l">Gefahrene Kilometer</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bs3(J.Z(u==null?o.a(u):u,"km_gefahren"))+"</td>"}a6+='</tr><tr class="summe"><td class="l">Kosten je Kilometer</td>'
for(a7=new A.b8(t,t.gp(0),n);a7.t();){u=a7.d
a6+='<td class="r">'+B.bKS(J.Z(u==null?o.a(u):u,"satz_je_km"))+"</td>"}a7=t.a
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
d=A.eQ(A.i(i==null?"":i))
i=d==null?"":$.dp().al(d)
a0=j.h(k,"anlass")
a0=A.i(a0==null?"":a0)
a0=A.ax(a0,"&","&amp;")
a0=A.ax(a0,"<","&lt;")
a0=A.ax(a0,">","&gt;")
a6=a6+"<tr>"+('<td class="l">'+i+"</td>")+('<td class="l">'+A.ax(a0,'"',"&quot;")+"</td>")+('<td class="r">'+B.bs3(j.h(k,"kilometer"))+"</td>")
for(i=new A.b8(t,t.gp(0),n);i.t();){a0=i.d
a6+='<td class="r">'+(J.d(J.Z(a0==null?o.a(a0):a0,"id"),j.h(k,"pkw_id"))?B.bKS(j.h(k,"satz_je_km")):"")+"</td>"}k=j.h(k,"betrag")
if(k==null)k="\u2014"
else{k=B.JE(k)
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
a4=p?B.c1h(a8,a2):null
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
a6=(self.URL||self.webkitURL).createObjectURL(B.bwL([a6.charCodeAt(0)==0?a6:a6],"text/html"))
a6.toString
a7=window
a7.toString
C.ZO.aha(a7,a6,"_blank")
return A.o(null,v)}})
return A.p($async$bB7,v)},
c1h(d,e){var w,v,u,t,s
if(d==null)return null
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.G)(d),++v){u=d[v]
t=u.h(0,"full_name")
if(A.i(t==null?"":t)===e){t=u.h(0,"signature_url")
s=A.i(t==null?"":t)
if(s.length!==0)return s}}return null},
JE(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fT(J.al(d))
return w==null?0:w},
bs3(d){var w,v,u
if(d==null)return"\u2014"
w=B.JE(d)
if(w===C.d.qO(w))v=C.e.j(C.d.aO(w))
else{u=C.d.ae(w,1)
v=A.ax(u,".",",")}return v+" km"},
bKS(d){var w
if(d==null)return"\u2014"
w=C.d.ae(B.JE(d),4)
return A.ax(w,".",",")+" \u20ac"},
bA8(d){var w=A.ax(d,"&","&amp;")
w=A.ax(w,"<","&lt;")
w=A.ax(w,">","&gt;")
return A.ax(w,'"',"&quot;")},
buC:function buC(d){this.a=d},
buD:function buD(){},
uf(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=A.fT(J.al(d))
return w==null?0:w},
c3A(d){var w
if(d==null)w="\u2014"
else{w=C.d.ae(B.uf(d),4)
w=A.ax(w,".",",")+" \u20ac"}return w},
bs4(d){var w,v,u
if(d==null)return"\u2014"
w=B.uf(d)
if(w===C.d.qO(w))v=C.e.j(C.d.aO(w))
else{u=C.d.ae(w,1)
v=A.ax(u,".",",")}return v+" km"},
bsJ(d){return J.d(d==null?null:d.h(0,"gesperrt"),!0)},
av8(d,e){var w=null,v=J.al(e),u=C.c.n(v,"freigegeben und unterschrieben"),t=d.O(x.q).f,s=A.j(u?"Diese Anlage ist freigegeben und unterschrieben. Korrekturen sind nicht mehr m\xf6glich.":"Speichern fehlgeschlagen: "+v,w,w,w,w,w,w,w)
t.b2(A.c6(w,w,w,w,w,C.n,w,s,w,A.e4(0,0,0,u?6:4),w,w,w,w,w,w,w,w,w,w))},
xx:function xx(d){this.a=d},
Tk:function Tk(d){var _=this
_.w=$
_.x=null
_.y=d
_.z=!1
_.Q=null
_.d=$
_.c=_.a=null},
b3B:function b3B(d,e){this.a=d
this.b=e},
b3C:function b3C(d){this.a=d},
b3D:function b3D(d){this.a=d},
b3x:function b3x(d){this.a=d},
b3A:function b3A(d){this.a=d},
b3y:function b3y(d){this.a=d},
b3z:function b3z(d){this.a=d},
aml:function aml(d,e,f){this.c=d
this.d=e
this.a=f},
bfN:function bfN(d,e){this.a=d
this.b=e},
akx:function akx(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
akw:function akw(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
bbW:function bbW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbX:function bbX(d,e,f){this.a=d
this.b=e
this.c=f},
bbY:function bbY(d,e,f){this.a=d
this.b=e
this.c=f},
bbP:function bbP(d,e,f){this.a=d
this.b=e
this.c=f},
bbO:function bbO(d,e,f){this.a=d
this.b=e
this.c=f},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbL:function bbL(d){this.a=d},
bbM:function bbM(d){this.a=d},
bbN:function bbN(d){this.a=d},
bbI:function bbI(d,e,f){this.a=d
this.b=e
this.c=f},
bbG:function bbG(d){this.a=d},
bbH:function bbH(d){this.a=d},
bbV:function bbV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbU:function bbU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbR:function bbR(d,e){this.a=d
this.b=e},
bbQ:function bbQ(d,e){this.a=d
this.b=e},
bbS:function bbS(d){this.a=d},
bbT:function bbT(d){this.a=d},
akv:function akv(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
bbE:function bbE(d,e,f){this.a=d
this.b=e
this.c=f},
bbF:function bbF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbv:function bbv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbu:function bbu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbp:function bbp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbo:function bbo(d,e){this.a=d
this.b=e},
bbq:function bbq(d,e){this.a=d
this.b=e},
bbn:function bbn(d,e){this.a=d
this.b=e},
bbr:function bbr(d){this.a=d},
bbs:function bbs(d){this.a=d},
bbt:function bbt(d){this.a=d},
bbD:function bbD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbC:function bbC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bby:function bby(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbx:function bbx(d,e){this.a=d
this.b=e},
bbz:function bbz(d,e){this.a=d
this.b=e},
bbw:function bbw(d,e){this.a=d
this.b=e},
bbA:function bbA(d){this.a=d},
bbB:function bbB(d){this.a=d},
ath:function ath(d,e){this.c=d
this.a=e},
bq7:function bq7(){},
bq8:function bq8(){},
amm:function amm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
arq:function arq(d,e,f){this.c=d
this.d=e
this.a=f},
boa:function boa(){},
bob:function bob(){},
Cy:function Cy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aie:function aie(d,e,f){this.c=d
this.d=e
this.a=f},
Vw:function Vw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0e:function a0e(d){this.a=d},
awp:function awp(d){this.a=d},
awo:function awo(){},
bra:function bra(){},
br9:function br9(){},
a4G:function a4G(d){this.a=d},
aCc:function aCc(){},
aCb:function aCb(){},
aCa:function aCa(d){this.a=d},
aC9:function aC9(d){this.a=d},
aki:function aki(d){this.a=d},
ah5:function ah5(d,e){this.e=d
this.a=e},
b3O:function b3O(){},
b3N:function b3N(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
b3L:function b3L(d,e,f){this.a=d
this.b=e
this.c=f},
b3M:function b3M(d,e,f){this.a=d
this.b=e
this.c=f},
b3K:function b3K(d){this.a=d},
b3I:function b3I(d,e){this.a=d
this.b=e},
b3G:function b3G(d){this.a=d},
b3H:function b3H(d,e){this.a=d
this.b=e},
b3J:function b3J(){},
Ci:function Ci(d){this.a=d},
Y6:function Y6(){var _=this
_.w=null
_.x=!0
_.y=!1
_.z=null
_.d=$
_.c=_.a=null},
bnn:function bnn(d,e){this.a=d
this.b=e},
bno:function bno(d,e){this.a=d
this.b=e},
bns:function bns(d){this.a=d},
bnt:function bnt(d,e,f){this.a=d
this.b=e
this.c=f},
bnu:function bnu(d,e){this.a=d
this.b=e},
bnv:function bnv(d){this.a=d},
bnw:function bnw(d){this.a=d},
bnx:function bnx(d){this.a=d},
bny:function bny(d){this.a=d},
bnz:function bnz(d,e){this.a=d
this.b=e},
bnA:function bnA(d){this.a=d},
bnE:function bnE(){},
bnF:function bnF(d){this.a=d},
bnG:function bnG(d){this.a=d},
ajp:function ajp(d,e){this.c=d
this.a=e},
KM:function KM(d){this.a=d},
Tw:function Tw(){var _=this
_.w=null
_.x=!1
_.d=$
_.c=_.a=null},
b4f:function b4f(d){this.a=d},
b4g:function b4g(d,e){this.a=d
this.b=e},
b4h:function b4h(d){this.a=d},
Lb:function Lb(d){this.a=d},
TQ:function TQ(){var _=this
_.d=_.w=$
_.c=_.a=null},
b5R:function b5R(d){this.a=d},
b5Q:function b5Q(){},
b5W:function b5W(d){this.a=d},
b5S:function b5S(d){this.a=d},
b5V:function b5V(d){this.a=d},
b5T:function b5T(){},
b5U:function b5U(d,e){this.a=d
this.b=e},
ai1:function ai1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1t:function a1t(d){this.a=d},
ayU:function ayU(){},
ayT:function ayT(){},
ayV:function ayV(){},
ayS:function ayS(){},
Bq:function Bq(d){this.a=d},
TT:function TT(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
b6_:function b6_(d){this.a=d},
b5Z:function b5Z(d,e){this.a=d
this.b=e},
b60:function b60(){},
a1P:function a1P(d){this.a=d},
azz:function azz(){},
azy:function azy(){},
azA:function azA(){},
azx:function azx(){},
Bt:function Bt(d){this.a=d},
U3:function U3(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.Q="exterior"
_.as=null
_.d=$
_.c=_.a=null},
b6N:function b6N(d){this.a=d},
b6M:function b6M(d,e){this.a=d
this.b=e},
b6O:function b6O(d){this.a=d},
b6L:function b6L(d,e){this.a=d
this.b=e},
b6P:function b6P(d){this.a=d},
c_u(d){switch(d){case"not_received":return new A.jQ(C.EO,"Produkt nicht erhalten")
case"damaged":return new A.jQ(C.Ex,"Produkt besch\xe4digt")
case"wrong_product":return new A.jQ(C.EQ,"Falsches Produkt")
default:return new A.jQ(C.xX,"Sonstiges")}},
c_v(d){switch(d){case"in_progress":return new A.p4(C.cC,"IN BEARBEITUNG")
case"resolved":return new A.p4(C.aE,"ERLEDIGT")
case"rejected":return new A.p4(C.ak,"ABGELEHNT")
default:return new A.p4(C.j,"OFFEN")}},
LK:function LK(d){this.a=d},
U5:function U5(){var _=this
_.d=_.w=$
_.c=_.a=null},
b70:function b70(d,e){this.a=d
this.b=e},
b6Z:function b6Z(d){this.a=d},
b7_:function b7_(d){this.a=d},
b71:function b71(d){this.a=d},
b76:function b76(d){this.a=d},
b75:function b75(d){this.a=d},
b72:function b72(d){this.a=d},
b74:function b74(){},
b73:function b73(d,e){this.a=d
this.b=e},
HG:function HG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b6W:function b6W(d){this.a=d},
b6X:function b6X(d){this.a=d},
b6Y:function b6Y(d){this.a=d},
a4F:function a4F(d){this.a=d},
aC7:function aC7(){},
aC6:function aC6(){},
aC8:function aC8(){},
aC5:function aC5(){},
BB:function BB(d){this.a=d},
UL:function UL(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.as="mhd"
_.ax=_.at=null
_.d=$
_.c=_.a=null},
b9Q:function b9Q(d){this.a=d},
b9P:function b9P(d,e){this.a=d
this.b=e},
b9R:function b9R(d){this.a=d},
b9O:function b9O(d,e){this.a=d
this.b=e},
b9L:function b9L(d,e,f){this.a=d
this.b=e
this.c=f},
b9K:function b9K(d){this.a=d},
b9S:function b9S(){},
b9T:function b9T(){},
b9U:function b9U(){},
b9V:function b9V(d){this.a=d},
b9N:function b9N(d,e){this.a=d
this.b=e},
b9W:function b9W(d,e){this.a=d
this.b=e},
b9M:function b9M(d,e){this.a=d
this.b=e},
b9X:function b9X(d){this.a=d},
c2G(d){switch(d){case"description":return D.aaE
case"health_and_safety":return D.aaR
case"medical_information":return D.aby
case"cleaning_services":return D.EC
case"store":return D.abd
case"work":return D.aaq
case"local_shipping":return D.aaY
case"build":return D.Ey
case"shield":return C.nX
case"gavel":return C.EF
case"folder_open":return D.aaN
default:return D.EE}},
bry:function bry(){},
brx:function brx(d){this.a=d},
brL:function brL(){},
bsA:function bsA(){},
Mr:function Mr(d){this.a=d},
ajS:function ajS(){var _=this
_.w=""
_.x=null
_.y=!1
_.d=$
_.c=_.a=null},
baH:function baH(d){this.a=d},
baD:function baD(){},
baE:function baE(){},
baF:function baF(d,e){this.a=d
this.b=e},
baG:function baG(d,e){this.a=d
this.b=e},
bai:function bai(){},
baj:function baj(){},
bal:function bal(){},
bak:function bak(){},
bah:function bah(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bag:function bag(){},
baf:function baf(){},
bae:function bae(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ba3:function ba3(d){this.a=d},
ba4:function ba4(){},
ba5:function ba5(d){this.a=d},
bad:function bad(d){this.a=d},
ba6:function ba6(d){this.a=d},
ba2:function ba2(d,e){this.a=d
this.b=e},
ba7:function ba7(d){this.a=d},
ba1:function ba1(d,e){this.a=d
this.b=e},
ba8:function ba8(d,e,f){this.a=d
this.b=e
this.c=f},
ba9:function ba9(d,e,f){this.a=d
this.b=e
this.c=f},
baa:function baa(d,e,f){this.a=d
this.b=e
this.c=f},
bab:function bab(d,e,f){this.a=d
this.b=e
this.c=f},
bac:function bac(d,e,f){this.a=d
this.b=e
this.c=f},
baC:function baC(d,e){this.a=d
this.b=e},
baA:function baA(d){this.a=d},
baB:function baB(d){this.a=d},
baz:function baz(d,e){this.a=d
this.b=e},
bay:function bay(d,e){this.a=d
this.b=e},
bav:function bav(d,e,f){this.a=d
this.b=e
this.c=f},
bau:function bau(d,e,f){this.a=d
this.b=e
this.c=f},
baw:function baw(d){this.a=d},
bax:function bax(d){this.a=d},
bas:function bas(d){this.a=d},
bat:function bat(d){this.a=d},
bar:function bar(d,e,f){this.a=d
this.b=e
this.c=f},
baq:function baq(d,e,f){this.a=d
this.b=e
this.c=f},
ban:function ban(d,e){this.a=d
this.b=e},
bam:function bam(d,e){this.a=d
this.b=e},
bao:function bao(d){this.a=d},
bap:function bap(d){this.a=d},
aqz:function aqz(d,e){this.c=d
this.a=e},
al4:function al4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd0:function bd0(d){this.a=d},
bd1:function bd1(d,e){this.a=d
this.b=e},
al5:function al5(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bd2:function bd2(){},
bd3:function bd3(d,e){this.a=d
this.b=e},
bd4:function bd4(d,e){this.a=d
this.b=e},
bd5:function bd5(d,e){this.a=d
this.b=e},
bd6:function bd6(d,e){this.a=d
this.b=e},
bd7:function bd7(d,e){this.a=d
this.b=e},
ajR:function ajR(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k},
ba0:function ba0(){},
ba_:function ba_(){},
b9Z:function b9Z(){},
ar3:function ar3(d,e){this.e=d
this.a=e},
bnj:function bnj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aks:function aks(d,e){this.c=d
this.a=e},
c7n(d){var w
A:{if("system_admin"===d){w="Administration"
break A}if("shareholder"===d){w="Gesellschafter"
break A}if("employee"===d){w="Mitarbeiter"
break A}w=d==null?"":d
break A}return w},
c7J(d){var w
A:{if("active"===d){w="aktiv"
break A}if("invited"===d){w="eingeladen"
break A}if("deactivated"===d){w="deaktiviert"
break A}w=d==null?"":d
break A}return w},
bsp:function bsp(){},
a4R:function a4R(d){this.a=d},
aDS:function aDS(d,e,f){this.a=d
this.b=e
this.c=f},
aDV:function aDV(){},
aDU:function aDU(){},
aDT:function aDT(){},
aDR:function aDR(){},
aDQ:function aDQ(d){this.a=d},
aDP:function aDP(){},
amb:function amb(d,e,f){this.a=d
this.b=e
this.c=f},
BT:function BT(d){this.a=d},
VN:function VN(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.c=_.a=null},
bfv:function bfv(){},
bfw:function bfw(d,e){this.a=d
this.b=e},
bfu:function bfu(d,e,f){this.a=d
this.b=e
this.c=f},
a59:function a59(d){this.a=d},
aFd:function aFd(){},
aFc:function aFc(){},
aFe:function aFe(){},
aFb:function aFb(){},
BK:function BK(d){this.a=d},
V5:function V5(d,e,f,g,h,i){var _=this
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
bcf:function bcf(d,e){this.a=d
this.b=e},
bcg:function bcg(d,e){this.a=d
this.b=e},
bcm:function bcm(d){this.a=d},
bcl:function bcl(d,e){this.a=d
this.b=e},
bcn:function bcn(d){this.a=d},
bcj:function bcj(d){this.a=d},
bch:function bch(d,e){this.a=d
this.b=e},
bck:function bck(){},
bco:function bco(){},
bcp:function bcp(){},
bcq:function bcq(){},
bcr:function bcr(){},
bcs:function bcs(d){this.a=d},
bci:function bci(d,e){this.a=d
this.b=e},
buE(e1,e2,e3,e4,e5,e6){var w=0,v=A.q(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0
var $async$buE=A.m(function(e7,e8){if(e7===1)return A.n(e8,v)
for(;;)switch(w){case 0:d8=x.N
d9=x.D
e0=A.z(d8,d9)
for(u=e4.$ti,t=new A.b8(e4,e4.gp(0),u.i("b8<an.E>")),u=u.i("an.E");t.t();){s=t.d
if(s==null)s=u.a(s)
r=J.Z(s,"product_id")
q=r==null?null:J.al(r)
if(q==null)q=""
J.e2(e0.cl(0,q,new B.buF()),s)}p=A.z(d8,d9)
for(d8=J.cy(e3),d9=d8.gY(e3);d9.t();){u=d9.gN(d9)
t=J.Z(u,"product_id")
q=t==null?null:J.al(t)
if(q==null)q=""
J.e2(p.cl(0,q,new B.buG()),u)}o=new B.buN()
n=new B.buL()
m=new B.buJ()
l=new B.buK()
k=new A.di("")
for(d9=new A.e7(e0,e0.$ti.i("e7<1,2>")).gY(0);d9.t();){j=d9.d
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
if(f==null)f=C.co
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
for(u=u.gY(i);u.t();){s=u.gN(u)
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
else{for(u=u.gY(f);u.t();){s=u.gN(u)
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
c3=d8.eQ(e3,new B.buH(),x.T).hE(0).a
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
for(c6=0;c6<5;++c6){c7=D.akx[c6]
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
if(e1!=null&&e1.ev(e1,new B.buI())){d1.a='<section class="stamp">'
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
for(d8=d8.gY(e5);d8.t();){d9=d8.gN(d8)
u=J.V(d9)
d5=A.ak(u.h(d9,"image_url"))
if(d5==null)d5=""
t=A.ak(u.h(d9,"full_name"))
if(t==null)t=""
t=A.ax(t,"&","&amp;")
t=A.ax(t,"<","&lt;")
h=A.ax(t,">","&gt;")
d9=A.ak(u.h(d9,"role_label"))
if(d9==null)d9=""
d9=A.ax(d9,"&","&amp;")
d9=A.ax(d9,"<","&lt;")
d6=A.ax(d9,">","&gt;")
if(d5.length!==0){d9=A.ax(d5,"&","&amp;")
d9=A.ax(d9,"<","&lt;")
d7='<img src="'+A.ax(d9,">","&gt;")+'" alt="Signatur" class="sig-img">'}else d7='<div class="sig-line"></div>'
d9='<div class="sig-slot"><div class="sig-box">'+d7+'</div><div class="sig-name"><b>'+h+'</b></div><div class="sig-meta">'+d6+" \xb7 Datum: "+$.dp().al(d0)+"</div></div>"
d1.a+=d9}d1.a+="</div></section>"}d8=$.dp()
d8=(self.URL||self.webkitURL).createObjectURL(B.bwL(['<!doctype html>\n<html lang="de"><head>\n<meta charset="utf-8">\n<title>FIFO-Inventur '+d8.al(e2)+" \u2013 "+d8.al(e6)+'</title>\n<style>\n  @page { size: A4 landscape; margin: 0 10mm 12mm 10mm; }\n  * { box-sizing: border-box; }\n  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n         color: #14110E; margin: 0; padding: 0; font-size: 9pt; }\n  /* One-Pager-Look: Gold-Topbar + Wortmarke */\n  .topbar { height: 5mm; background: #FDC102; margin: 0 -10mm 6mm; }\n  .brand { font-weight: 900; letter-spacing: 2px; font-size: 11pt;\n           margin-bottom: 6pt; }\n  .wrap { max-width: 100%; margin: 0 auto; }\n  .head { display: flex; justify-content: space-between; align-items: flex-end; }\n  .head h1 { margin: 0; font-size: 17pt; letter-spacing: 0.5px; color: #B8860B; }\n  .meta { color: #6f6a5b; font-size: 9pt; }\n  h2 { font-size: 11pt; margin: 12pt 0 4pt 0; color: #14110E;\n       border-bottom: 1.5pt solid #FDC102; padding-bottom: 2pt; }\n  h3 { font-size: 10pt; margin: 8pt 0 2pt 0; color: #6f6a5b;\n       font-weight: 700; letter-spacing: 0.2px; }\n  table.pos { width: 100%; border-collapse: collapse; margin-top: 3pt; }\n  table.pos th, table.pos td { padding: 3pt 5pt; text-align: left;\n                                border-bottom: 1pt solid #E8E2D6; }\n  table.pos th { background: #14110E; color: #F9F5EC; }\n  .num { text-align: right; white-space: nowrap; }\n  .muted { color: #6f6a5b; }\n  .strong { font-weight: 800; }\n  .warn { color: #B2311C; font-weight: 800; }\n  tr.in td   { background: #F3F8ED; }\n  tr.out td  { background: #FAE9E4; }\n  tr.sum td  { background: #FFF5CC; border-top: 1pt solid #14110E;\n                border-bottom: 1pt solid #14110E; }\n  .kpis { display: flex; flex-wrap: wrap; gap: 20pt; margin: 6pt 0;\n          font-size: 10pt; color: #14110E; }\n  .kpis span b { font-size: 12pt; }\n  .kpis .warn { color: #B2311C; }\n  .sigrow { display: flex; flex-wrap: wrap; gap: 24pt; margin-top: 6pt; }\n  .sig-slot { width: 260px; }\n  .sig-box { height: 70px; border: 1pt solid #e6e0cc; border-radius: 6pt;\n             background: #FAF6ED; padding: 6pt; display: flex;\n             align-items: flex-end; }\n  .sig-line { height: 1pt; background: #14110E; width: 100%;\n              margin-bottom: 3pt; }\n  .sig-img { max-height: 60px; max-width: 100%; object-fit: contain; }\n  .sig-name { margin-top: 4pt; font-size: 10pt; }\n  .sig-meta { color: #6f6a5b; font-size: 8pt; }\n  .matrix-intro { color: #6f6a5b; font-size: 9pt; margin: 2pt 0 4pt 0;\n                  max-width: 780px; }\n  /* "Bewertung:" mit zwei Zeilen \u2014 Label steht neben dem Anschaffungs\xad\n     kosten-Text, die zweite Zeile ("MHD-Abschlag vom AK-Wert") wird auf\n     die H\xf6he von "Anschaffungskosten" einger\xfcckt. */\n  .head .meta .bewertung-label { display: inline-block; vertical-align: top; }\n  .head .meta .bewertung-lines { display: inline-block; vertical-align: top;\n                                  margin-left: 4pt; }\n  .head .meta .bewertung-lines > span { display: block; }\n\n  /* Freigabe-Stempel */\n  section.stamp { margin: 8pt 0 4pt 0; padding: 6pt 10pt;\n                  border: 1pt solid #5C9A3F; border-radius: 6pt;\n                  background: #EEF6E8; }\n  section.stamp .stamp-badge {\n    display: inline-block; font-weight: 800; letter-spacing: 1px;\n    color: #3E7A25; font-size: 12pt;\n  }\n  section.stamp .stamp-note { color: #14110E; font-size: 9pt; margin-top: 2pt; }\n  section.stamp .stamp-list { margin: 4pt 0 0 14pt; padding: 0;\n                              font-size: 9pt; color: #14110E; }\n  section.stamp .stamp-list li { margin: 1pt 0; }\n  table.matrix { width: 100%; }\n  table.matrix td, table.matrix th { padding: 4pt 6pt; }\n\n  /* Produkt-Block */\n  section.product { margin: 10pt 0 8pt 0;\n                    padding: 6pt 8pt 8pt 8pt;\n                    border: 1pt solid #e6e0cc;\n                    border-radius: 4pt; }\n  .prod-head { display: flex; justify-content: space-between;\n               align-items: flex-end;\n               border-bottom: 1pt solid #14110E; padding-bottom: 3pt;\n               margin-bottom: 4pt; }\n  .prod-name { font-size: 12pt; font-weight: 800; letter-spacing: 0.2px; }\n  .prod-sku  { color: #6f6a5b; font-size: 8pt; }\n  .prod-end  { color: #14110E; font-size: 10pt; }\n  .prod-end b { color: #b89a00; }\n\n  /* \u2500\u2500 Sauberer Seitenumbruch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n  p, li { orphans: 3; widows: 3; }\n  h1, h2, h3 { page-break-after: avoid; break-after: avoid-page; }\n  thead { display: table-header-group; }\n  tfoot { display: table-footer-group; }\n  table.pos tr { page-break-inside: avoid; break-inside: avoid; }\n  table.pos tr.sum { page-break-before: avoid; break-before: avoid; }\n  section.product { page-break-inside: auto; break-inside: auto; }\n  section.product .prod-head { page-break-after: avoid; break-after: avoid-page; }\n  .sig-slot { page-break-inside: avoid; break-inside: avoid; }\n  .kpis, table.matrix,\n  section.matrix-block, section.signatures {\n    page-break-inside: avoid; break-inside: avoid;\n  }\n</style>\n</head><body onload="window.print()"><div class="topbar"></div><div class="wrap">\n  <div class="brand">B\xd6RDESNACK24</div>\n  <div class="head">\n    <div>\n      <h1>INVENTUR \u2014 FIFO-Bewegungsreport</h1>\n      <div class="meta">Zeitraum: '+d8.al(e2)+" \u2013 "+d8.al(e6)+'</div>\n      <div class="meta">Bewertungsverfahren: <b>FIFO</b> (\xa7256 HGB, Verbrauchsfolge)</div>\n      <div class="meta">\n        <span class="bewertung-label">Bewertung:</span>\n        <span class="bewertung-lines">\n          <span>Anschaffungskosten netto (\xa7253 HGB)</span>\n          <span>MHD-Abschlag vom AK-Wert</span>\n        </span>\n      </div>\n    </div>\n    <div class="meta">\n      B\xf6rdesnack24 GbR<br>\n      S\xfclldorfer Str. 3A \xb7 39171 S\xfclzetal OT Osterweddingen<br>\n      Steuernummer: 102/178/01635<br>\n      USt-IdNr.: DE 458804058<br>\n      Erstellt am '+d8.al(d0)+"\n    </div>\n  </div>\n  "+k.j(0)+"\n  "+c4.j(0)+"\n  "+c5.j(0)+"\n  "+d1.j(0)+"\n</div></body></html>\n"],"text/html"))
d8.toString
d9=window
d9.toString
C.ZO.aha(d9,d8,"_blank")
return A.o(null,v)}})
return A.p($async$buE,v)},
buF:function buF(){},
buG:function buG(){},
buN:function buN(){},
buO:function buO(d){this.a=d},
buL:function buL(){},
buM:function buM(d){this.a=d},
buJ:function buJ(){},
buK:function buK(){},
buH:function buH(){},
buI:function buI(){},
aoQ(d){var w,v,u
if(d==null||d.length===0)return"\u2014"
try{w=A.o8(d)
v=$.dp().al(w)
return v}catch(u){v=d.length
return C.c.a_(d,0,v>10?10:v)}},
O1:function O1(d){this.a=d},
VM:function VM(d,e){var _=this
_.w=d
_.x=e
_.Q=_.z=_.y=null
_.as=!1
_.at=null
_.d=$
_.c=_.a=null},
bfl:function bfl(d){this.a=d},
bfm:function bfm(d){this.a=d},
bfn:function bfn(d,e){this.a=d
this.b=e},
bfo:function bfo(d,e){this.a=d
this.b=e},
bfr:function bfr(d){this.a=d},
bfp:function bfp(d){this.a=d},
bfq:function bfq(d){this.a=d},
bfk:function bfk(){},
bfs:function bfs(d){this.a=d},
bft:function bft(d){this.a=d},
aoP:function aoP(d,e,f){this.d=d
this.e=e
this.a=f},
bjE:function bjE(){},
bjF:function bjF(){},
bjG:function bjG(){},
bjH:function bjH(){},
alm:function alm(d,e){this.c=d
this.a=e},
be0:function be0(){},
be1:function be1(){},
be2:function be2(){},
be3:function be3(){},
be4:function be4(){},
wQ:function wQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
an9:function an9(d){this.a=d},
wT:function wT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ar4:function ar4(d,e){this.c=d
this.a=e},
ar6:function ar6(d,e){this.c=d
this.a=e},
bnH:function bnH(){},
Im:function Im(d){this.a=d},
a6M:function a6M(d){this.a=d},
aK1:function aK1(){},
aK0:function aK0(){},
aK_:function aK_(){},
aJZ:function aJZ(){},
aJY:function aJY(d){this.a=d},
aJX:function aJX(d,e){this.a=d
this.b=e},
aJW:function aJW(d){this.a=d},
zr:function zr(d,e,f){this.d=d
this.e=e
this.a=f},
amT:function amT(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
bgI:function bgI(d){this.a=d},
bgH:function bgH(){},
bgG:function bgG(){},
bgF:function bgF(d){this.a=d},
bgE:function bgE(d){this.a=d},
bgD:function bgD(){},
bgC:function bgC(d,e){this.a=d
this.b=e},
bgB:function bgB(d,e,f){this.a=d
this.b=e
this.c=f},
bgA:function bgA(d,e,f){this.a=d
this.b=e
this.c=f},
bgy:function bgy(d){this.a=d},
bgz:function bgz(d,e){this.a=d
this.b=e},
a7o:function a7o(d){this.a=d},
aLl:function aLl(){},
aLk:function aLk(){},
aLm:function aLm(){},
aLj:function aLj(){},
BX:function BX(d){this.a=d},
VV:function VV(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=null
_.at=!1
_.d=$
_.c=_.a=null},
bgL:function bgL(d){this.a=d},
bgK:function bgK(d,e){this.a=d
this.b=e},
bgM:function bgM(){},
bgN:function bgN(d){this.a=d},
bgJ:function bgJ(d,e){this.a=d
this.b=e},
bJ_(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return"\u2014"
try{w=A.o8(J.al(d)).Fq()
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
Sf:function Sf(d){this.a=d},
as4:function as4(){var _=this
_.w=0
_.d=$
_.c=_.a=null},
bp4:function bp4(d){this.a=d},
bp3:function bp3(d,e){this.a=d
this.b=e},
brS:function brS(){},
amJ:function amJ(d){this.a=d},
bgr:function bgr(){},
bgq:function bgq(){},
bgp:function bgp(d){this.a=d},
bgo:function bgo(d){this.a=d},
alq:function alq(d,e){this.c=d
this.a=e},
BW:function BW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bsq:function bsq(){},
aoT:function aoT(d){this.a=d},
bjY:function bjY(d,e,f){this.a=d
this.b=e
this.c=f},
bk0:function bk0(){},
bk_:function bk_(){},
bjZ:function bjZ(){},
bjX:function bjX(){},
aoS:function aoS(d,e){this.c=d
this.a=e},
C7:function C7(d){this.a=d},
WL:function WL(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q="generic"
_.d=$
_.c=_.a=null},
bjU:function bjU(){},
bjV:function bjV(d){this.a=d},
bjT:function bjT(d,e){this.a=d
this.b=e},
bjW:function bjW(){},
brw:function brw(){},
ajD:function ajD(d){this.a=d},
b9w:function b9w(d,e,f){this.a=d
this.b=e
this.c=f},
b9z:function b9z(){},
b9y:function b9y(){},
b9x:function b9x(){},
b9v:function b9v(){},
ajC:function ajC(d,e){this.c=d
this.a=e},
BA:function BA(d){this.a=d},
UI:function UI(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.Q=_.z=null
_.d=$
_.c=_.a=null},
b9q:function b9q(){},
b9p:function b9p(d){this.a=d},
b9n:function b9n(d){this.a=d},
b9k:function b9k(d,e){this.a=d
this.b=e},
b9o:function b9o(){},
b9t:function b9t(){},
b9s:function b9s(){},
b9r:function b9r(d){this.a=d},
b9l:function b9l(d){this.a=d},
b9j:function b9j(d,e){this.a=d
this.b=e},
b9m:function b9m(){},
b9u:function b9u(){},
Y8:function Y8(d){this.a=d},
arl:function arl(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
bnW:function bnW(){},
bnV:function bnV(d){this.a=d},
bnU:function bnU(d){this.a=d},
bnT:function bnT(d,e){this.a=d
this.b=e},
ark:function ark(d,e){this.e=d
this.a=e},
bnS:function bnS(){},
bnR:function bnR(d,e){this.a=d
this.b=e},
bnP:function bnP(d,e,f){this.a=d
this.b=e
this.c=f},
bnQ:function bnQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnO:function bnO(d,e){this.a=d
this.b=e},
arj:function arj(d,e,f){this.c=d
this.d=e
this.a=f},
Cj:function Cj(d,e,f){this.d=d
this.e=e
this.a=f},
Y7:function Y7(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=null
_.d=$
_.c=_.a=null},
bnL:function bnL(){},
bnN:function bnN(){},
bnM:function bnM(d){this.a=d},
bnK:function bnK(d){this.a=d},
bnJ:function bnJ(d,e){this.a=d
this.b=e},
brD:function brD(){},
ako:function ako(d){this.a=d},
bbj:function bbj(){},
bbi:function bbi(){},
bbh:function bbh(d){this.a=d},
bbg:function bbg(d){this.a=d},
akn:function akn(d,e){this.c=d
this.a=e},
tP:function tP(d,e,f){this.c=d
this.d=e
this.a=f},
adE:function adE(d){this.a=d},
b0J:function b0J(){},
b0I:function b0I(){},
b0K:function b0K(){},
b0H:function b0H(){},
Cu:function Cu(d){this.a=d},
YB:function YB(d,e,f){var _=this
_.w=d
_.x=e
_.y=f
_.z=null
_.d=$
_.c=_.a=null},
bp6:function bp6(d){this.a=d},
bp5:function bp5(d,e){this.a=d
this.b=e},
bp7:function bp7(){},
Oz(d,e){return new B.a7l(e,d,null)},
a7l:function a7l(d,e,f){this.e=d
this.f=e
this.a=f},
aLh:function aLh(){},
aLg:function aLg(){},
aLf:function aLf(d){this.a=d},
aLe:function aLe(){},
Fy:function Fy(d,e){this.d=d
this.a=e},
Ww:function Ww(){var _=this
_.w=!1
_.x=null
_.d=$
_.c=_.a=null},
biL:function biL(d){this.a=d},
biM:function biM(d,e){this.a=d
this.b=e},
biN:function biN(d){this.a=d},
PQ(d,e,f,g,h,i,j){return new B.PP(j,i,d,e,g,f,h,null)},
PP:function PP(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.a=k},
WH:function WH(){var _=this
_.d=_.w=$
_.c=_.a=null},
bjK:function bjK(d){this.a=d},
bjI:function bjI(d){this.a=d},
bjJ:function bjJ(d){this.a=d},
bjP:function bjP(d,e){this.a=d
this.b=e},
bjO:function bjO(d,e){this.a=d
this.b=e},
bjS:function bjS(){},
bjR:function bjR(){},
bjQ:function bjQ(d){this.a=d},
bjN:function bjN(d){this.a=d},
bjM:function bjM(){},
bjL:function bjL(d,e){this.a=d
this.b=e},
bEb(d,e,f){return new B.a1y(e,f,d,null)},
a1y:function a1y(d,e,f,g){var _=this
_.d=d
_.r=e
_.as=f
_.a=g},
b6C:function b6C(d,e){this.a=d
this.b=e},
a1z:function a1z(d,e,f,g){var _=this
_.d=d
_.r=e
_.x=f
_.a=g},
b6D:function b6D(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
b6E:function b6E(d){this.a=d},
bED(d,e,f){return new B.r5(f,d,e)},
o6(d){return new B.fw(d)},
aB4(d,e,f,g,h,i,j){return new B.a48(e,g,f,h,i,d,j,B.bSy(e),null)},
bSy(d){var w,v,u
for(w=d.length,v=null,u=0;u<w;++u)if(!d[u].d){if(v!=null)return null
v=u}return v},
bI1(d,e,f,g,h,i){var w=null
return new B.S7(d,h,w,w,w,w,g,w,w,w,w,w,w,f,e,!0,C.G,w,w,w,w,w,w,i,w,w,!0,!1,w,!1,w,!0,w,w,w)},
fk:function fk(d,e){this.a=d
this.d=e},
r5:function r5(d,e,f){this.b=d
this.f=e
this.r=f},
fw:function fw(d){this.a=d},
a48:function a48(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.x=e
_.y=f
_.Q=g
_.as=h
_.ay=i
_.CW=j
_.fr=k
_.a=l},
aB9:function aB9(d){this.a=d},
aB5:function aB5(){},
aB6:function aB6(){},
aB7:function aB7(){},
aB8:function aB8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aBa:function aBa(d,e){this.a=d
this.b=e},
aBb:function aBb(d){this.a=d},
aBc:function aBc(d){this.a=d},
S7:function S7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
b0s:function b0s(d){this.a=d},
anG:function anG(){},
anL:function anL(d){this.a=d},
GC:function GC(d,e,f){this.r=d
this.w=e
this.a=f},
Ya:function Ya(){this.d=!1
this.c=this.a=null},
bnX:function bnX(d){this.a=d},
bo_:function bo_(d,e,f){this.a=d
this.b=e
this.c=f},
bo0:function bo0(d,e,f){this.a=d
this.b=e
this.c=f},
bnY:function bnY(d,e){this.a=d
this.b=e},
bnZ:function bnZ(d,e){this.a=d
this.b=e},
qh:function qh(d){this.d=this.b=null
this.a=d},
wj:function wj(){},
O_:function O_(d){this.a=d},
a5d:function a5d(d){this.a=d},
a5s:function a5s(){},
wi:function wi(d,e){this.a=d
this.b=e},
vZ:function vZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.a4=h
_.ar=i
_.ak=j
_.bC=_.aG=null
_.b9=k
_.aQ=l
_.ci=m
_.da=n
_.dc=o
_.cO=p
_.dh=null
_.bd=q
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
aW_:function aW_(){},
aVZ:function aVZ(d){this.a=d},
aVY:function aVY(d){this.a=d},
aW0:function aW0(){},
aVW:function aVW(d,e){this.a=d
this.b=e},
aVX:function aVX(){},
aW1:function aW1(){},
aW2:function aW2(d){this.a=d},
Ig:function Ig(d,e){this.a=d
this.b=e},
bZ6(d,e,f,g){var w
if(C.b.ev(e,new B.b0t())){w=A.af(e).i("ad<1,k_?>")
w=A.Q(new A.ad(e,new B.b0u(),w),w.i("aw.E"))
w.$flags=1
w=w}else w=null
return new B.S5(e,f,d,g,w,null)},
ml:function ml(d,e,f){this.a=d
this.b=e
this.c=f},
lu:function lu(d,e){this.a=d
this.b=e},
S5:function S5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.y=h
_.a=i},
b0t:function b0t(){},
b0u:function b0u(){},
arW:function arW(d,e,f,g){var _=this
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
boW:function boW(d,e){this.a=d
this.b=e},
boV:function boV(d,e,f){this.a=d
this.b=e
this.c=f},
boX:function boX(){},
boY:function boY(d){this.a=d},
boU:function boU(){},
boT:function boT(){},
boZ:function boZ(){},
S6:function S6(d,e,f){this.c=d
this.d=e
this.a=f},
arV:function arV(d,e,f){this.f=d
this.b=e
this.a=f},
Jj:function Jj(d,e){this.a=d
this.b=e},
auD:function auD(){},
aJf:function aJf(){},
bGV(d){var w=A.bP('[,()"\\\\]',!0,!1,!1)
if(!(w.b.test(d)||d!==C.c.aK(d)))return d
w=A.ax(d,"\\","\\\\")
return'"'+A.ax(w,'"','\\"')+'"'},
kc:function kc(d,e){this.a=d
this.b=e},
aaw:function aaw(d,e,f){this.a=d
this.b=e
this.c=f},
aRn:function aRn(){},
ax6(d,e,f,g,h){return A.dz(d,e,new B.ax7(f,h),new B.ax8(f,h),!1,!0,!1,g,h)},
ax7:function ax7(d,e){this.a=d
this.b=e},
ax8:function ax8(d,e){this.a=d
this.b=e},
bSx(d){var w
d.O(x.d)
w=A.W(d)
return w.y2},
bwL(d,e){var w={}
w.type=e
return new self.Blob(d,w)},
bAG(d){var w=0,v=A.q(x.H),u,t
var $async$bAG=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.bwL([A.eI(65279)+d],"text/csv;charset=utf-8"))
t.toString
u=document.createElement("a")
u.href=t
u.download="b2b_customers.csv"
u.click();(self.URL||self.webkitURL).revokeObjectURL(t)
return A.o(null,v)}})
return A.p($async$bAG,v)},
bBc(d,e,f){var w=0,v=A.q(x.H)
var $async$bBc=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:A.bKG(f,null)
return A.o(null,v)}})
return A.p($async$bBc,v)},
a5u(d,e,f,g,h){var w=null
return new A.yy(f,w,e,d,h,w,w,!0,C.a_0,g,w)}},D
J=c[1]
A=c[0]
C=c[2]
F=c[5]
E=c[7]
B=a.updateHolder(c[4],B)
D=c[8]
B.wh.prototype={
FA(d,e,f,g,h){return this.b0Z(0,e,f,g,h)},
b0Y(d,e,f,g){return this.FA(0,e,f,"application/octet-stream",g)},
b0Z(d,e,f,g,h){var w=0,v=A.q(x.N),u,t=this,s,r,q,p
var $async$FA=A.m(function(i,j){if(i===1)return A.n(j,v)
for(;;)switch(w){case 0:q=t.a
p=q.gdX().e.a
p=p==null?null:p.r
s=p==null?null:p.a
if(s==null)s="anon"
r=s+"/"+Date.now()+"_"+h
q=q.ay
q===$&&A.a()
w=3
return A.k(q.cW(e).A3(r,f,new A.Ei(!1,g)),$async$FA)
case 3:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$FA,v)}}
B.pM.prototype={}
B.yR.prototype={
u(d){var w,v,u,t,s=null,r=this.c
if(r.length===0)return C.ar
w=x.p
v=A.b([],w)
for(u=0;u<r.length;++u){t=A.b([],w)
if(u>0)t.push(C.b2)
t.push(new B.alr(r[u],s))
C.b.K(v,t)}return new A.ah(this.d,A.ao(v,C.k,s,C.lV,C.h,0,s,s),s)}}
B.alr.prototype={
u(d){var w=null,v=this.c,u=A.aR(12),t=v.f,s=t?w:v.c,r=A.aR(12),q=A.aR(12),p=v.e
p=A.cU(p==null?C.ao:p,1)
if(t)t=C.YQ
else t=A.cp(v.a,v.d,w,20)
return A.H7(A.dS(!1,C.a0,!0,u,A.eD(!1,r,!0,A.ba(C.W,t,C.t,w,w,new A.b7(w,w,p,q,w,w,C.G),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,s,w,w,w,w,w,w,w),C.t,C.ae,0,w,w,w,w,w,C.bx),w,v.b,w,w)}}
B.OW.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=C.bG
w=A.aR(12)
v=s.y
v=A.cU(v==null?C.m.fl(0.4):v,1)
u=s.w
if(u==null)u=C.j
t=x.p
w=A.b([A.ba(C.W,A.cp(s.c,u,r,22),C.t,r,r,new A.b7(q,r,v,w,r,r,C.G),r,44,r,r,r,r,r,44),C.cY],t)
q=s.r
if(q!=null)w.push(q)
else w.push(C.y8)
q=A.b([A.ao(w,C.k,r,C.f,C.h,0,r,r),C.u,A.j(s.d,1,C.ah,r,A.C(C.j,15,C.N),r,r,r)],t)
C.b.K(q,A.b([C.bV,A.j(s.e,2,C.ah,r,A.C(C.q,12,C.l),r,r,r)],t))
return A.bz(r,A.ac(q,C.C,r,C.io,C.h,0),r,s.f,C.aj,r,3)}}
B.Al.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.Al&&e.a===this.a&&e.c.k(0,this.c)&&e.d.k(0,this.d)},
gA(d){return A.a9(this.a,this.c,this.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zt.prototype={
k6(d,e){return this.aOB(d,e)},
aOB(d,e){var w=0,v=A.q(x.y),u,t=this,s,r
var $async$k6=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:t.se8(0,C.dx)
w=3
return A.k(A.pj(new B.aLo(t,d,e),x.H),$async$k6)
case 3:t.se8(0,g)
s=t.f
w=s.ghq(s)!=null?4:5
break
case 4:r=t.r.aD(0,$.bCY(),x.bX)
w=8
return A.k(r.ME(),$async$k6)
case 8:w=!g?6:7
break
case 6:w=9
return A.k(r.DM(d,e),$async$k6)
case 9:t.se8(0,C.dL)
u=!0
w=1
break
case 7:case 5:s=t.f
u=s.ghq(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$k6,v)},
KP(d,e,f){return this.aRH(d,e,f)},
aRH(d,e,f){var w=0,v=A.q(x.y),u,t=this,s
var $async$KP=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:t.se8(0,C.dx)
w=3
return A.k(A.pj(new B.aLp(t,e,f,d,null),x.H),$async$KP)
case 3:t.se8(0,h)
s=t.f
u=s.ghq(s)==null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$KP,v)},
LD(d,e,f){return this.aTw(d,e,f)},
aTw(d,e,f){var w=0,v=A.q(x.aD),u,t=this,s,r
var $async$LD=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:r={}
t.se8(0,C.dx)
r.a=null
w=3
return A.k(A.pj(new B.aLq(r,t,d,e,f),x.H),$async$LD)
case 3:t.se8(0,h)
s=t.f
u=s.ghq(s)!=null?null:r.a
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$LD,v)}}
B.zu.prototype={
df(d,e){return A.dz(e.ao($.bwa(),x.i),new B.aLt(this),new B.aLu(),new B.aLv(),!1,!0,!1,x.C,x.l)},
at9(d){var w="Inventur",v=null,u="customers.manage",t=d.n(0,"inventory.view")||d.n(0,"inventory.edit"),s=d.n(0,"haccp.fill"),r=d.n(0,"haccp.temperature"),q=d.n(0,"haccp.cleaning"),p=d.n(0,"haccp.disposal"),o=d.n(0,"haccp.maintenance"),n=d.n(0,"cash.collect"),m=d.n(0,"documents.view")||d.n(0,"documents.edit"),l=x.af
t=A.Q(new A.bd(A.b([new B.fF(w,"Bestand je Automat",C.nW,D.afe,t,v,v,v,v),new B.fF("Bef\xfcllung","Nachf\xfcll-Protokoll",C.Ev,D.a8O,s,v,v,v,v),new B.fF("Temperatur","HACCP \xb7 \u2264 7 \xb0C",D.abe,D.aAK,r,v,v,v,v),new B.fF("Reinigung","Hygieneplan",D.EC,D.a3c,q,v,v,v,v),new B.fF("Vernichtung","MHD / Verderb",C.El,D.a6t,p,v,v,v,v),new B.fF("Wartung","Technik-Protokolle",D.Ey,D.apr,o,v,v,v,v),new B.fF("Geldentnahme","Kassenprotokoll",C.EL,D.a2Y,n,v,v,v,v),new B.fF("Dokumente","Archiv & Versionen",D.EE,D.a6z,m,v,v,v,v),new B.fF("Mitarbeiter","Einladen & Schulen",D.aaP,D.a8b,d.n(0,"employees.manage"),v,v,v,v),new B.fF("B2B-Kunden","sevDesk-CSV-Export",C.y_,D.a_P,d.n(0,u),v,v,v,v),new B.fF("DATEV-Export","Buchungsstapel (CSV)",C.fR,E.D7,d.n(0,"finance.export"),C.aE,C.aE.fl(0.12),C.aE.fl(0.4),D.aMp),new B.fF("Anlagen","PKW-Kosten \xb7 Nutzungseinlage",D.ED,D.a_G,d.n(0,"finance.view"),v,v,v,v),new B.fF(w,"PDF-Report Zeitraum",C.nW,D.afd,d.n(0,u),v,v,v,v),new B.fF("Telemetrie","IoT \xb7 Live \xb7 Slots",D.aaf,D.aAJ,d.n(0,u),v,v,v,v),new B.fF("Freigaben","Dokumente pr\xfcfen",E.fS,D.a6y,d.n(0,u),v,v,v,v),new B.fF("K\xfcndigungen","Abo-K\xfcndigungen pr\xfcfen",D.abh,D.a2S,d.n(0,u),v,v,v,v),new B.fF("Reklamationen","Kundenmeldungen je Kauf",C.y0,D.a5f,d.n(0,u),v,v,v,v),D.aOz],x.ew),new B.aLs(),l),l.i("t.E"))
return t}}
B.ang.prototype={
u(d){var w=null
return A.dF(A.b([D.axb,C.Q,A.j("Digitale HACCP-, Reinigungs- und Bestandsprotokolle \u2014 revisionssicher und GoBD-konform.",w,w,w,A.C(C.q,13,C.l),w,w,w),C.aQ,A.j_(new B.bhC(this))],x.p),C.ci,w,C.M,!1)}}
B.akj.prototype={
u(d){var w=null
return A.cZ(new A.ah(C.dd,A.ac(A.b([A.ba(w,D.abX,C.t,w,w,new A.b7(C.bG,w,A.cU(C.m,1),w,w,w,C.fh),w,72,w,w,w,w,w,72),C.K,A.j("Keine Module freigeschaltet",w,w,w,A.c0(C.j,20,C.N),C.cF,w,w),C.Q,A.j("F\xfcr Dein Konto sind noch keine Module aktiviert. Bitte wende Dich an einen Gesellschafter.",w,w,w,A.C(C.q,14,C.l),C.cF,w,w)],x.p),C.k,w,C.f,C.J,0),w),w,w)}}
B.fF.prototype={}
B.ajh.prototype={
u(d){var w=null,v=C.aE.fl(0.14),u=A.aR(4),t=A.cU(C.aE.fl(0.5),1)
return A.ba(w,A.j("DATEV",w,w,w,A.C(C.aE,9,C.p).fV(0.4),w,w,w),C.t,w,w,new A.b7(v,w,t,u,w,w,C.G),w,w,w,w,D.a87,w,w,w)}}
B.xx.prototype={
W(){return new B.Tk(C.co)}}
B.Tk.prototype={
gpR(){var w=this.w
return w===$?this.w=A.aU(new A.aZ(Date.now(),0,!1)):w},
av(){this.aL()
this.xb()},
aEM(d){this.J(new B.b3B(this,d))
this.xb()},
xb(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$xb=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b3C(r))
u=3
q=r.gc8().aD(0,$.bL(),x.A)
n=x.N
m=x.z
w=6
return A.k(A.kV(A.b([q.er("anlage_pkw",A.a4(["p_jahr",r.gpR()],n,m),m),q.h_("list_partner_signatures",m)],x.U),m),$async$xb)
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
if(r.c!=null)r.J(new B.b3D(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$xb,v)},
ga46(){var w=this.x
w=w==null?null:w.h(0,"fahrzeuge")
x.g.a(w)
if(w==null)w=C.bl
return J.cE(w,x.P)},
ga4w(){var w="freigabe",v=this.x
return(v==null?null:v.h(0,w))==null?null:A.dh(x.f.a(this.x.h(0,w)),x.N,x.z)},
gaMU(){var w,v,u,t,s,r,q,p=this.ga4w()
p=p==null?null:p.h(0,"unterzeichner")
x.g.a(p)
w=p==null?C.bl:p
p=J.V(w)
if(p.gZ(w))return null
v=A.b([],x.t)
for(p=p.gY(w),u=x.f,t=x.N,s=x.z;p.t();){r=u.a(p.gN(p))
q=J.V(r)
v.push(A.a4(["full_name",q.h(r,"name"),"signature_url",q.h(r,"unterschrift")],t,s))}return v},
u(d){var w,v,u,t,s,r,q=this,p=null,o=q.gaET(),n=x.p,m=A.b([new B.aml(q.gpR(),q.gaEL(),p),C.K],n)
if(q.x!=null&&!q.z)m.push(q.asl())
if(q.z)m.push(E.Tk)
else{w=q.Q
if(w!=null)m.push(new B.Vw("Die Anlage konnte nicht geladen werden: "+w,C.ak,E.Em,p))
else{w=A.b([],n)
if(B.bsJ(q.x))C.b.K(w,A.b([new B.arq(q.gpR(),q.ga4w(),p),C.K],n))
w.push(new B.akx(q.ga46(),q.gpR(),B.bsJ(q.x),o,p))
w.push(C.bK)
n=q.x
n=n==null?p:n.h(0,"fahrten")
x.g.a(n)
if(n==null)n=C.bl
n=J.cE(n,x.P)
v=q.ga46()
u=q.gpR()
t=B.bsJ(q.x)
s=q.x
s=B.uf(s==null?p:s.h(0,"nutzungseinlage"))
r=q.x
w.push(new B.akv(n,v,u,t,s,C.d.a0(B.uf(r==null?p:r.h(0,"fahrten_ohne_satz"))),o,p))
w.push(C.bK)
w.push(new B.ath(q.y,p))
C.b.K(m,w)}}return A.dd(D.a9a,p,A.ie(A.dF(m,C.ci,p,C.M,!1),C.m,o),p,p,p)},
asl(){var w=A.b([],x.x)
if(!B.bsJ(this.x))w.push(new B.pM(E.fS,"Freigabe anfordern",this.gay9(),C.m,null,!1))
w.push(new B.pM(C.i4,"Als PDF drucken",new B.b3x(this),C.ak,C.ak,!1))
return new B.yR(w,C.dT,null)},
By(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$By=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.c
k.toString
w=3
return A.k(A.hi(null,null,!0,null,new B.b3A(r),k,null,!0,!0,x.y),$async$By)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mH(r.gc8().aD(0,$.bL(),x.A))
k=A.bC(r.gpR(),1,1,0,0,0,0)
o=A.bC(r.gpR(),12,31,0,0,0,0)
n=r.gpR()
m=r.x
if(m==null)m=C.ip
w=8
return A.k(q.w7("anlage_pkw",k,o,m,"Anlage PKW-Kosten "+n),$async$By)
case 8:k=r.c
if(k!=null)k.O(x.q).f.b2(E.mh)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
k=r.c
if(k!=null)k.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$By,v)}}
B.aml.prototype={
u(d){var w,v,u=null,t=A.aU(new A.aZ(Date.now(),0,!1)),s=this.c,r=A.j("B\xf6rdesnack24 GbR, Steuernummer 102/178/01635, USt-IdNr. DE 458804058",u,u,u,A.C(C.q,12,C.l),u,u,u),q=x.p,p=A.b([],q)
for(w=t-4,v=t;v>=w;--v)p.push(new B.a1z(A.j(""+v,u,u,u,u,u,u,u),new B.bfN(this,v),v===s,u))
return A.ac(A.b([new A.fh("Anlage zum Jahresabschluss","Individuelle PKW-Kosten "+s,u,u),C.Q,r,C.K,A.ll(C.cw,p,C.dI,0,8)],q),C.C,u,C.f,C.h,0)}}
B.akx.prototype={
df(d,e){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=A.b([D.a8p,C.Q,A.j("Alle Betr\xe4ge brutto. Bei einem privaten Fahrzeug gibt es keinen Vorsteuerabzug, die Umsatzsteuer geh\xf6rt also zu den Kosten.",p,p,p,A.C(C.q,12,C.l),p,p,p),C.u],o)
for(w=q.e,v=w.$ti,w=new A.b8(w,w.gp(0),v.i("b8<an.E>")),u=q.f,t=q.r,s=q.w,v=v.i("an.E");w.t();){r=w.d
C.b.K(n,A.b([new B.akw(r==null?v.a(r):r,u,t,s,p),C.u],o))}return A.ac(n,C.C,p,C.f,C.h,0)}}
B.akw.prototype={
df(d,e){var w,v,u,t,s,r,q=this,p=null,o="satz_je_km",n=q.e,m=J.V(n),l=x.g.a(m.h(n,"kosten"))
if(l==null)l=C.bl
w=J.cE(l,x.P)
l=x.p
v=A.b([A.ao(A.b([A.aA(A.j(A.i(m.h(n,"kennzeichen")),p,p,p,A.C(C.j,16,C.p),p,p,p),1),new B.aie(B.c3A(m.h(n,o)),"je Kilometer",p)],l),C.k,p,C.f,C.h,0,p,p),C.u],l)
for(u=w.$ti,t=new A.b8(w,w.gp(0),u.i("b8<an.E>")),s=q.r,u=u.i("an.E");t.t();){r=t.d
if(r==null)r=u.a(r)
v.push(new B.amm(r,s,new B.bbW(q,d,e,r),p))}if(w.gp(0)===0)v.push(A.j("F\xfcr "+q.f+" ist noch keine Kostenposition erfasst.",p,p,p,A.C(C.q,13,C.l),p,p,p))
v.push(C.Dg)
u=B.uf(m.h(n,"gesamtkosten"))
v.push(new B.Cy("Gesamtkosten",$.d2().al(u),!0,p))
v.push(new B.Cy("Kilometerstand 01.01.",B.bs4(m.h(n,"km_stand_anfang")),!1,p))
v.push(new B.Cy("Kilometerstand 31.12.",B.bs4(m.h(n,"km_stand_ende")),!1,p))
v.push(new B.Cy("Gefahrene Kilometer",B.bs4(m.h(n,"km_gefahren")),!0,p))
if(m.h(n,o)==null)C.b.K(v,A.b([C.Q,A.j("Ohne beide Kilometerst\xe4nde l\xe4sst sich kein Satz je Kilometer ermitteln. Fahrten mit diesem Fahrzeug bleiben so lange ohne Betrag.",p,p,p,A.C(C.ak,12,C.l),p,p,p)],l))
if(!s)C.b.K(v,A.b([C.u,A.ac(A.b([A.fR(D.adm,D.aHy,new B.bbX(q,d,e),p),A.fR(D.Fa,D.aGw,new B.bbY(q,d,e),p)],l),C.a9,p,C.f,C.h,8)],l))
return A.bz(p,A.ac(v,C.C,p,C.f,C.h,0),p,p,C.D,p,3)},
uA(d,e,f){return this.aEP(d,e,f)},
aEP(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
return A.k(A.hi(null,null,!0,null,new B.bbP(d,q,p),a2,null,!0,!0,i),$async$uA)
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
if(k<=0){if(a2.e!=null)a2.O(x.q).f.b2(D.YT)
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
if(a2.e!=null)B.av8(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uA,v)},
x9(d,e){return this.aEO(d,e)},
aEO(a0,a1){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
return A.k(A.hi(null,null,!0,null,new B.bbI(r,m,l),a0,null,!0,!0,x.y),$async$x9)
case 3:if(a3!==!0){w=1
break}q=A.iz(C.c.aK(m.a.a),null)
p=A.iz(C.c.aK(l.a.a),null)
if(q!=null&&p!=null&&p<q){if(a0.e!=null)a0.O(x.q).f.b2(D.aA4)
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
f.K(0,i.ghC())
i=i.tF(0,f)
w=8
return A.k(A.m8(e.Hq(g,j,C.nQ,i),A.l(e).i("t0.T")),$async$x9)
case 8:w=9
return A.k(r.w.$0(),$async$x9)
case 9:t=2
w=7
break
case 5:t=4
d=s.pop()
o=A.a2(d)
if(a0.e!=null)B.av8(a0,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x9,v)},
xa(d,e){return this.aEQ(d,e)},
aEQ(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$xa=A.m(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h={}
h.a="tanken"
n=$.ag()
m=new A.bv(C.a8,n)
q=new A.bv(C.a8,n)
w=3
return A.k(A.hi(null,null,!0,null,new B.bbV(h,r,m,q),d,null,!0,!0,x.y),$async$xa)
case 3:if(a0!==!0){w=1
break}n=C.c.aK(m.a.a)
l=A.fT(A.ax(n,",","."))
p=l==null?0:l
if(p<=0){if(d.e!=null)d.O(x.q).f.b2(D.YT)
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
if(d.e!=null)B.av8(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xa,v)}}
B.akv.prototype={
df(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.p,e=A.b([D.a8h],f),d=h.w
if(!d)e.push(A.nq(D.Fa,D.aGk,h.f.gp(0)===0?g:new B.bbE(h,a0,a1),g))
e=A.b([A.ao(e,C.k,g,C.f,C.h,0,g,g),C.Q],f)
w=h.e
if(w.gp(0)===0)e.push(new B.Vw("F\xfcr "+h.r+" ist noch keine betriebliche Fahrt erfasst.",C.q,D.abw,g))
else{v=A.b([D.D6,D.a5Y,D.a66],x.G)
for(u=h.f,t=u.$ti,s=t.i("b8<an.E>"),r=new A.b8(u,u.gp(0),s),t=t.i("an.E");r.t();){q=r.d
v.push(new B.fk(A.j(A.i(J.Z(q==null?t.a(q):q,"kennzeichen")),g,g,g,g,g,g,g),!0))}v.push(D.a5Z)
r=A.b([],x._)
for(q=w.$ti,w=new A.b8(w,w.gp(0),q.i("b8<an.E>")),p=x.F,q=q.i("an.E");w.t();){o=w.d
if(o==null)o=q.a(o)
n=d?g:new B.bbF(h,a0,a1,o)
m=J.V(o)
l=m.h(o,"fahrt_datum")
k=A.eQ(A.i(l==null?"":l))
l=A.j(k==null?"":$.dp().al(k),g,g,g,g,g,g,g)
j=m.h(o,"anlass")
l=A.b([new B.fw(l),new B.fw(new A.dQ(D.a0v,A.j(A.i(j==null?"":j),g,C.ah,g,g,g,g,g),g)),new B.fw(A.j(B.bs4(m.h(o,"kilometer")),g,g,g,g,g,g,g))],p)
for(j=new A.b8(u,u.gp(0),s);j.t();){i=j.d
if(J.d(J.Z(i==null?t.a(i):i,"id"),m.h(o,"pkw_id"))){i=m.h(o,"satz_je_km")
if(i==null)i="\u2014"
else{i=C.d.ae(B.uf(i),4)
i=A.ax(i,".",",")+" \u20ac"}}else i=""
l.push(new B.fw(A.j(i,g,g,g,g,g,g,g)))}if(m.h(o,"betrag")==null)o="\u2014"
else{o=B.uf(m.h(o,"betrag"))
o=$.d2().al(o)}l.push(new B.fw(A.j(o,g,g,g,g,g,g,g)))
r.push(new B.r5(n,l,g))}e.push(A.ev(B.aB4(16,v,56,40,g,40,r),g,g,g,C.ay))}e.push(C.u)
e.push(A.bz(g,A.ao(A.b([A.aA(A.j("Nutzungseinlage "+h.r,g,g,g,A.C(C.j,15,C.p),g,g,g),1),A.j($.d2().al(h.x),g,g,g,A.C(C.j,17,C.p),g,g,g)],f),C.k,g,C.f,C.h,0,g,g),C.ae,g,C.D,g,3))
d=h.y
if(d>0){w=d===1?"":"en"
C.b.K(e,A.b([C.Q,A.j(""+d+" Fahrt"+w+" ohne Kilometersatz. Diese Fahrten sind in der Summe nicht enthalten, weil f\xfcr das Fahrzeug Kilometerst\xe4nde oder Kosten fehlen.",g,g,g,A.C(C.ak,12,C.l),g,g,g)],f))}return A.ac(e,C.C,g,C.f,C.h,0)},
ux(d,e,f){return this.axk(d,e,f)},
axk(a2,a3,a4){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ux=A.m(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:e={}
d=J.V(a4)
a0=A.eQ(A.i(d.h(a4,"fahrt_datum")))
e.a=a0==null?A.bC(r.r,1,1,0,0,0,0):a0
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
return A.k(A.hi(null,null,!0,null,new B.bbv(e,r,q,p),a2,null,!0,!0,i),$async$ux)
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
if(k<=0||C.c.aK(q.a.a).length===0){if(a2.e!=null)a2.O(x.q).f.b2(D.YU)
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
if(a2.e!=null)B.av8(a2,j)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$ux,v)},
x_(d,e){return this.axl(d,e)},
axl(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$x_=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:k={}
j=r.r
i=A.bC(j,A.bi(new A.aZ(Date.now(),0,!1)),A.bU(new A.aZ(Date.now(),0,!1)),0,0,0,0)
k.a=i
if(A.aU(i)!==j)k.a=A.bC(j,1,1,0,0,0,0)
j=r.f
k.b=A.i(J.Z(j.ga2(j),"id"))
j=$.ag()
q=new A.bv(C.a8,j)
n=new A.bv(C.a8,j)
w=3
return A.k(A.hi(null,null,!0,null,new B.bbD(k,r,q,n),d,null,!0,!0,x.y),$async$x_)
case 3:if(g!==!0){w=1
break}j=C.c.aK(n.a.a)
m=A.fT(A.ax(j,",","."))
p=m==null?0:m
if(p<=0||C.c.aK(q.a.a).length===0){if(d.e!=null)d.O(x.q).f.b2(D.YU)
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
if(d.e!=null)B.av8(d,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x_,v)}}
B.ath.prototype={
u(d){var w,v,u,t,s,r,q=null,p="Hanken Grotesk",o=this.c,n=A.af(o),m=n.i("f2<1,f>"),l=A.Q(new A.f2(new A.bd(o,new B.bq7(),n.i("bd<1>")),new B.bq8(),m),m.i("t.E"))
n=x.p
m=A.b([],n)
for(w=o.length,v=0;v<o.length;o.length===w||(0,A.G)(o),++v){u=o[v]
t=A.ba(q,q,C.t,C.q,q,q,q,1,q,D.a7x,q,q,q,q)
s=J.V(u)
r=s.h(u,"full_name")
r=A.i(r==null?"":r)
r=A.j(r,q,q,q,new A.O(!0,C.j,q,p,C.bw,q,13,C.N,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)
s=s.h(u,"role_label")
s=A.i(s==null?"":s)
C.b.K(m,A.b([new A.kQ(1,C.dW,new A.nS(A.ac(A.b([t,r,A.j(s,q,q,q,new A.O(!0,C.q,q,p,C.bw,q,11,C.l,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q)],n),C.C,q,C.f,C.h,0),q,C.D,q,q,q,3,q),q),C.aF],n))}o=A.b([D.a8q,C.Q,A.ao(m,C.k,q,C.f,C.h,0,q,q)],n)
if(l.length!==0)C.b.K(o,A.b([C.Q,A.j("F\xfcr "+C.b.cg(l," und ")+" ist noch keine Unterschrift hinterlegt. Im PDF bleibt die Linie leer, bis die Unterschrift \xfcber DocuSign geholt wurde.",q,q,q,A.C(C.ak,12,C.l),q,q,q)],n))
return A.ac(o,C.C,q,C.f,C.h,0)}}
B.amm.prototype={
u(d){var w,v,u,t,s="kostenart",r=null,q=this.c,p=J.V(q),o=D.lW.h(0,A.i(p.h(q,s)))
if(o==null)o=A.i(p.h(q,s))
w=p.h(q,"bezeichnung")
v=C.c.aK(A.i(w==null?"":w))
q=B.uf(p.h(q,"betrag_brutto"))
u=$.d2().al(q)
q=x.p
p=A.b([A.j(o,r,r,r,A.C(C.aU,13,C.l),r,r,r)],q)
if(v.length!==0)p.push(A.j(v,1,C.ah,r,A.C(C.q,11,C.l),r,r,r))
p=A.b([A.aA(A.ac(p,C.C,r,C.f,C.h,0),1),A.j(u,r,r,r,A.C(C.j,13,C.aI),r,r,r)],q)
w=this.d
if(!w)C.b.K(p,A.b([C.cE,D.adj],q))
t=new A.ah(D.a7C,A.ao(p,C.k,r,C.f,C.h,0,r,r),r)
if(w)return t
return A.bD(r,!0,r,A.eD(!1,r,!0,t,r,!0,r,r,r,r,r,r,r,r,r,r,r,this.e,r,r,r,r,r,r,r),!1,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,o+" "+u+" korrigieren",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.P,r)}}
B.arq.prototype={
u(d){var w,v,u=null,t=this.d,s=t==null,r=s?u:t.h(0,"freigegeben_am"),q=A.eQ(A.i(r==null?"":r))
t=s?u:t.h(0,"unterzeichner")
x.g.a(t)
if(t==null)t=C.bl
t=J.cV(t,new B.boa(),x.N).AK(0,new B.bob())
w=A.Q(t,t.$ti.i("t.E"))
t=A.j("Freigegeben und unterschrieben",u,u,u,A.C(C.j,14,C.p),u,u,u)
s=q==null?"":" seit "+$.dp().al(q)
r=w.length===0?"":", unterschrieben von "+C.b.cg(w," und ")
v=x.p
return A.bz(u,A.ao(A.b([D.acJ,C.aF,A.aA(A.ac(A.b([t,C.bV,A.j("Die Anlage "+this.c+" ist abgeschlossen"+s+r+". Korrekturen sind nicht mehr m\xf6glich, weder hier noch \xfcber einen anderen Weg.",u,u,u,A.C(C.aU,12,C.l),u,u,u),C.b6,A.j("Ist etwas falsch, geh\xf6rt die Berichtigung in eine neue Anlage. Ein unterschriebenes Dokument nachtr\xe4glich zu \xe4ndern, w\xe4re keine Korrektur.",u,u,u,A.C(C.q,12,C.l),u,u,u)],v),C.C,u,C.f,C.h,0),1)],v),C.C,u,C.f,C.h,0,u,u),C.ae,u,C.D,u,3)}}
B.Cy.prototype={
u(d){var w=null,v=this.e,u=v?C.N:C.l
u=A.aA(A.j(this.c,w,w,w,A.C(v?C.j:C.aU,13,u),w,w,w),1)
return new A.ah(D.Du,A.ao(A.b([u,A.j(this.d,w,w,w,A.C(C.j,13,v?C.p:C.aI),w,w,w)],x.p),C.k,w,C.f,C.h,0,w,w),w)}}
B.aie.prototype={
u(d){var w=null,v=A.aR(9999),u=A.cU(C.m.fl(0.5),1)
return A.ba(w,A.ac(A.b([A.j(this.c,w,w,w,A.C(C.m,13,C.p),w,w,w),A.j(this.d,w,w,w,A.C(C.m,9,C.l),w,w,w)],x.p),C.fN,w,C.f,C.h,0),C.t,w,w,new A.b7(C.bG,w,u,v,w,w,C.G),w,w,w,w,D.a7F,w,w,w)}}
B.Vw.prototype={
u(d){var w=null
return A.bz(w,A.ao(A.b([A.cp(this.e,this.d,w,w),C.aF,A.aA(A.j(this.c,w,w,w,A.C(C.j,14,C.l),w,w,w),1)],x.p),C.C,w,C.f,C.h,0,w,w),C.ae,w,C.D,w,3)}}
B.a0e.prototype={
u(d){var w=null
return A.dd(D.a9r,w,A.dF(A.b([D.ax3,C.Q,A.j("\xdcbersichten, die Dein Steuerberater zum Jahresabschluss braucht. Jede l\xe4sst sich als PDF ausgeben und von beiden Gesellschaftern freigeben.",w,w,w,A.C(C.q,13,C.l),w,w,w),C.aQ,B.bVU(w,"Kilometersatz und Nutzungseinlage",D.ED,w,w,w,"PKW-Kosten",new B.awp(d))],x.p),C.ci,w,C.M,!1),w,w,w)}}
B.a4G.prototype={
df(d,e){var w=null
return A.dd(D.a95,w,A.dz(e.ao($.bvZ(),x.w),new B.aCa(e),new B.aCb(),new B.aCc(),!1,!0,!1,x.D,x.E),w,w,w)}}
B.aki.prototype={
u(d){return D.a30}}
B.ah5.prototype={
aLT(d){switch(d){case"approved":return C.aE
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
u=new B.b3O()
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
l=new B.b3N(g,n,a2,a1,a0==null?f:J.al(a0),m,a3,o)
a0=q?l:f
p=g.aLT(a1)
e=d.h(e,"title")
e=e==null?f:J.al(e)
if(e==null)e=""
e=A.aA(A.j(e,f,f,f,A.C(C.j,15,C.p),f,f,f),1)
A:{d="approved"===a1
if(d){k="freigegeben"
break A}if("rejected"===a1){k="abgelehnt"
break A}if("cancelled"===a1){k="abgebrochen"
break A}k="offen"
break A}B:{if(d){d=C.fB
break B}if("rejected"===a1){d=C.mk
break B}if("cancelled"===a1){d=C.ml
break B}d=C.kb
break B}j=x.p
d=A.ao(A.b([e,new A.j7(k,d,f,f)],j),C.k,f,C.f,C.h,0,f,f)
e=t==null?"?":$.dp().al(t)
k=s==null?"?":$.dp().al(s)
i=r==null?"":" \xb7 angefragt "+$.dp().al(r)
i=A.b([d,C.b6,A.j("Zeitraum: "+e+" \u2013 "+k+i,f,f,f,A.C(C.q,11,C.l),f,f,f),C.u],j)
for(e=J.bh(v);e.t();)i.push(new B.ajp(e.gN(e),f))
if(a1==="pending"&&w==="pending")C.b.K(i,A.b([C.u,A.ao(A.b([A.aA(A.h8(C.o_,D.aGo,new B.b3L(g,a2,a3),A.dK(C.kF,C.B,f,f,f,f,f)),1),C.aV,A.aA(A.fR(C.F1,C.mr,new B.b3M(g,a2,a3),A.oA(f,f,f,f,f,f,f,f,f,C.ak,f,f,f,f,f,D.Bk,f,f,f,f)),1)],j),C.k,f,C.f,C.h,0,f,f)],j))
if(n)C.b.K(i,A.b([C.u,A.ao(A.b([D.EZ,C.b2,A.aA(A.j("Tippen zum \xd6ffnen des signierten PDFs",f,f,f,A.C(C.m,11,C.N),f,f,f),1),D.ad7],j),C.k,f,C.f,C.h,0,f,f)],j))
h=A.bz(f,A.ac(i,C.C,f,C.f,C.h,0),f,a0,C.aj,p,3)
return new A.ah(C.dT,q?A.zV(h,0.6):h,f)},
Cb(d,e,f){return this.aHe(d,e,f)},
aHe(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Cb=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(f.length===0){w=1
break}r=d.O(x.q).f
r.b2(D.azP)
q=e.aD(0,$.bw_(),x.u)
t=4
w=7
return A.k(q.GB(f),$async$Cb)
case 7:p=h
if(p==null||p.length===0){m=A.e5("Kein Signed-URL verf\xfcgbar")
throw A.e(m)}w=8
return A.k(A.mC(A.cm(p,0,null),C.en,"_blank"),$async$Cb)
case 8:o=h
if(!o&&d.e!=null)r.b2(A.c6(new B.GC("Link kopieren",new B.b3K(p),null),null,null,null,null,C.n,null,D.aG6,null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.a2(k)
if(d.e!=null)r.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cb,v)},
uo(d,e,f){return this.avK(d,e,f)},
avK(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$uo=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:m=null
w=f==="rejected"?3:5
break
case 3:w=6
return A.k(A.hi(null,null,!0,null,new B.b3I(new A.bv(C.a8,$.ag()),d),d,null,!0,!0,x.N),$async$uo)
case 6:m=h
if(m==null||C.c.aK(m).length<3){w=1
break}w=4
break
case 5:w=7
return A.k(A.kC(null,new B.b3J(),d,!0,null,null,x.y),$async$uo)
case 7:if(h!==!0){w=1
break}case 4:t=9
p=e.aD(0,$.bw_(),x.u)
o=J.Z(r.e,"id")
o=o==null?null:J.al(o)
if(o==null)o=""
w=12
return A.k(p.L8(o,m,f),$async$uo)
case 12:if(d.e!=null){p=$.bvZ()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(p)
p=d.O(x.q).f
p.b2(A.c6(null,null,null,null,null,C.n,null,A.j(f==="approved"?"Freigegeben \u2014 signiertes PDF wird erzeugt.":"Abgelehnt.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=11
break
case 9:t=8
l=s.pop()
q=A.a2(l)
if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=11
break
case 8:w=2
break
case 11:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$uo,v)}}
B.Ci.prototype={
W(){return new B.Y6()}}
B.Y6.prototype={
av(){this.aL()
this.Im()},
Im(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Im=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
q=r.gc8().aD(0,$.bL(),x.A)
l=q.gdX().e.a
l=l==null?null:l.r
p=l==null?null:l.a
if(p==null){w=1
break}w=7
return A.k(q.cW("partner_signatures").hj(0,"id, full_name, docusign_signature_uri, image_url, captured_via").iE("profile_id",p),$async$Im)
case 7:o=e
n=J.cE(o,x.P)
r.J(new B.bnn(r,n))
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a2(j)
r.J(new B.bno(r,m))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Im,v)},
Jx(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$Jx=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.bns(q))
t=4
k=q.gc8().aD(0,$.bL(),x.A).ax
k===$&&A.a()
j=q.w
j.toString
w=7
return A.k(k.hx("docusign-fetch-signature",A.a4(["signature_id",J.Z(j,"id")],x.N,x.z)),$async$Jx)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}o=p.a
k=x.f
if(k.b(o)&&J.d(J.Z(o,"ok"),!0)){k=q.c
if(k!=null)A.b4(k,!1).cC(!0)}else{if(k.b(o)){j=J.Z(o,"error")
j=j==null?null:J.al(j)
i=j==null?A.i(o):j}else i=A.i(o)
n=i
if(k.b(o)){k=J.Z(o,"hint")
h=k==null?null:J.al(k)}else h=null
m=h
q.J(new B.bnt(q,m,n))}r.push(6)
w=5
break
case 4:t=3
f=s.pop()
l=A.a2(f)
q.J(new B.bnu(q,l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bnv(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Jx,v)},
uS(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$uS=A.m(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:if(q.w==null){w=1
break}q.J(new B.bnw(q))
t=4
w=7
return A.k($.aFa.cc().aZv(C.a8M,!0),$async$uS)
case 7:p=a1
if(p==null||J.er(p.a)){q.J(new B.bnx(q))
r=[1]
w=5
break}o=J.K6(p.a)
n=o.c
if(n==null){q.J(new B.bny(q))
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
if(g!=null)A.b4(g,!1).cC(!0)
r.push(6)
w=5
break
case 4:t=3
d=s.pop()
i=A.a2(d)
q.J(new B.bnz(q,i))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.bnA(q))
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
m=A.bx(d,o,x.m).w
u=x.p
t=A.b([A.j("Signatur f\xfcr Freigabe w\xe4hlen",o,o,o,A.c0(C.j,20,C.p),o,o,o),C.Q,A.j("Deine Unterschrift wird im signierten PDF als Freigabe-Stempel eingebettet.",o,o,o,A.C(C.q,13,C.l),o,o,o),C.K],u)
if(p.x)t.push(C.bF)
else if(l)t.push(A.bz(C.ak,A.j("F\xfcr Dein Konto ist kein Signatur-Slot verkn\xfcpft. Bitte einen System-Admin bitten, partner_signatures.profile_id auf Deine Profil-ID zu setzen.",o,o,o,A.C(C.j,13,C.l),o,o,o),C.eI,o,C.D,o,3))
else{l=A.b([],u)
if(v){s=A.cU(C.ao,1)
r=A.aR(12)
q=p.w
q.toString
q=J.Z(q,n)
q=q==null?o:J.al(q)
if(q==null)q=""
l.push(A.ba(C.W,A.aJ5(q,new B.bnE(),C.iU,o,o,o,o),C.t,o,o,new A.b7(C.ae,o,s,r,o,o,C.G),o,80,o,C.dT,o,o,o,o))}s=p.y||!w?o:p.gaM1()
l.push(A.h8(D.ad0,D.aGW,s,A.dK(C.m,C.B,o,C.em,o,o,o)))
if(!w)l.push(new A.ah(C.hW,A.j("Kein DocuSign-Signatur-Slot hinterlegt.",o,o,o,A.C(C.q,10,C.l),o,o,o),o))
l.push(C.Q)
s=p.y?o:p.gaNK()
l.push(A.fR(D.acc,D.aFS,s,A.oA(o,o,o,o,o,o,o,o,o,C.j,o,o,C.em,o,o,C.vX,o,o,o,o)))
l.push(C.Q)
s=p.y?o:new B.bnF(d)
l.push(A.d9(A.j(v?"Diese Signatur verwenden":"Ohne Signatur freigeben (Platzhalter)",o,o,o,o,o,o,o),o,o,s,o,o))
C.b.K(t,l)}l=p.z
if(l!=null)C.b.K(t,A.b([C.u,A.j(l,o,o,o,A.C(C.ak,12,C.l),o,o,o)],u))
t.push(C.Q)
t.push(A.d9(C.c_,o,o,p.y?o:new B.bnG(d),o,o))
return new A.ah(new A.aj(0,0,0,m.f.d),A.ev(A.ac(t,C.a9,o,C.f,C.J,0),o,C.D,o,C.M),o)}}
B.ajp.prototype={
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
break A}if("rejected"===o){q=C.Ei
break A}q=C.Et
break A}B:{if(r){p=C.aE
break B}if("rejected"===o){p=C.ak
break B}p=C.m
break B}p=A.cp(q,p,s,16)
C:{if(r){r="freigegeben"
break C}if("rejected"===o){r="abgelehnt"
break C}r="ausstehend"
break C}q=v==null?"":" \xb7 "+v
t=x.p
q=A.b([A.j(w+" \u2014 "+r+q,s,s,s,A.C(C.j,12,C.N),s,s,s)],t)
if((u==null?s:u.length!==0)===!0)q.push(A.j("\u201e"+A.i(u)+'"',s,s,s,A.C(C.q,11,C.l),s,s,s))
return new A.ah(C.a7o,A.ao(A.b([p,C.b2,A.aA(A.ac(q,C.C,s,C.f,C.h,0),1)],t),C.k,s,C.f,C.h,0,s,s),s)}}
B.KM.prototype={
W(){return new B.Tw()}}
B.Tw.prototype={
H9(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m
var $async$H9=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.b4f(r))
u=3
o=r.gc8().aD(0,$.ea(),x.cu)
w=6
return A.k(o.en(o.a.gaPx(),x.N),$async$H9)
case 6:q=e
r.J(new B.b4g(r,q))
s.push(5)
w=4
break
case 3:u=2
m=t.pop()
p=A.a2(m)
o=r.c
if(o!=null)o.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.b4h(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$H9,v)},
HB(){var w=0,v=A.q(x.H),u,t=this,s
var $async$HB=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.w
if(s==null){w=1
break}w=3
return A.k(B.bAG(s),$async$HB)
case 3:case 1:return A.o(u,v)}})
return A.p($async$HB,v)},
u(d){var w,v=this,u=null,t=A.j("Exportiert alle Unternehmer-Kunden (customer_type = business) als CSV-Datei im sevDesk-Import-Format. Semikolon-getrennt, UTF-8, eine Zeile pro Kunde. Import in sevDesk unter Stammdaten \u2192 Kunden \u2192 Importieren.",u,u,u,A.C(C.q,13,C.l),u,u,u),s=v.x,r=s?u:v.gasE()
s=s?C.uV:D.F3
w=x.p
r=A.b([t,C.aQ,A.h8(s,D.aGs,r,A.dK(C.m,C.B,u,C.hV,u,u,u)),C.u],w)
if(v.w!=null){t=A.fR(E.F_,D.aGl,v.gawC(),A.oA(u,u,u,u,u,u,u,u,u,C.j,u,u,C.hV,u,u,C.kx,u,u,u,u))
s=v.w
s.toString
C.b.K(r,A.b([t,C.u,A.bz(u,A.aY1(s,A.C(C.j,12,C.l).aQD("monospace")),u,u,C.dD,u,3)],w))}return A.dd(D.a9b,u,A.dF(r,C.D,u,C.M,!1),u,u,u)}}
B.Lb.prototype={
W(){return new B.TQ()}}
B.TQ.prototype={
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
Ir(d){return this.aFo(d)},
aFo(d){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$Ir=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:r=t.gc8().aD(0,$.bL(),x.A)
q=r.cW("cancellation_requests")
p=new A.aZ(Date.now(),0,!1).Fv().dU()
o=r.gdX().e.a
o=o==null?null:o.r
o=o==null?null:o.a
s=x.z
w=3
return A.k(q.dm(0,A.a4(["processed_at",p,"processed_by",o],s,s)).iE("id",d),$async$Ir)
case 3:if(t.c==null){w=1
break}t.J(new B.b5R(t))
case 1:return A.o(u,v)}})
return A.p($async$Ir,v)},
axU(d){var w,v
if(d==null||d.length===0)return"\u2014"
w=A.eQ(d)
v=w==null?null:w.Fq()
if(v==null)return d
w=new B.b5Q()
return A.i(w.$1(A.bU(v)))+"."+A.i(w.$1(A.bi(v)))+"."+A.aU(v)+", "+A.i(w.$1(A.hz(v)))+":"+A.i(w.$1(A.vN(v)))+" Uhr"},
u(d){var w=this.w
w===$&&A.a()
return A.dd(D.a97,C.ej,A.ie(A.yJ(new B.b5V(this),w,x.D),C.m,new B.b5W(this)),null,null,null)}}
B.ai1.prototype={
u(d){var w,v,u,t,s,r="processed_at",q=null,p="customer_number",o=this.c,n=J.V(o),m=n.h(o,r)==null,l=!m,k=J.d(n.h(o,"kind"),"ausserordentlich"),j=l?C.ao:C.dA,i=n.h(o,"email")
i=A.aA(A.j(J.al(i==null?"":i),q,C.ah,q,A.C(C.j,14,C.p),q,q,q),1)
w=l?C.aE.fl(0.12):C.dA.fl(0.14)
v=A.cU(l?C.aE:C.dA,0.8)
u=A.aR(9999)
t=l?"BEARBEITET":"OFFEN"
s=x.p
u=A.ao(A.b([i,A.ba(q,A.j(t,q,q,q,A.C(l?C.aE:C.dA,10,C.p).fV(0.6),q,q,q),C.t,q,q,new A.b7(w,q,v,u,q,q,C.G),q,q,q,q,C.x5,q,q,q)],s),C.k,q,C.f,C.h,0,q,q)
i=k?"Au\xdferordentliche":"Ordentliche"
w=n.h(o,"cancel_at")
i=A.j(i+" K\xfcndigung \xb7 "+J.al(w==null?"":w),q,q,q,A.C(C.j,12,C.N),q,q,q)
w=this.d
v=A.i(w.$1(A.ak(n.h(o,"requested_at"))))
t=n.h(o,p)!=null?" \xb7 Kd-Nr. "+A.i(n.h(o,p)):""
t=A.b([u,C.Q,i,A.j("Eingegangen: "+v+t,q,q,q,A.C(C.q,12,C.l),q,q,q)],s)
i=n.h(o,"reason")
if(J.al(i==null?"":i).length!==0)C.b.K(t,A.b([C.Q,A.j("Grund: "+A.i(n.h(o,"reason")),q,q,q,A.C(C.aU,12,C.l),q,q,q)],s))
if(l)t.push(A.j("Bearbeitet: "+A.i(w.$1(A.ak(n.h(o,r)))),q,q,q,A.C(C.aE,12,C.l),q,q,q))
if(m)C.b.K(t,A.b([C.u,A.fR(D.acz,D.aGj,this.e,q)],s))
return A.bz(j,A.ac(t,C.C,q,C.f,C.h,0),q,q,C.D,q,3)}}
B.a1t.prototype={
u(d){return B.PQ("collected_at","cash",new B.ayT(),new B.ayU(),new B.ayV(),"cash_collection_logs","Geldentnahme")}}
B.Bq.prototype={
W(){var w=$.ag()
return new B.TT(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(new A.cx("0",C.bb,C.aG),w))}}
B.TT.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
atT(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hT()
if(s!==!0)return
s=t.c
s.toString
s=A.b4(s,!1)
w=t.z
v=t.x.a.a
v=A.JL(A.ax(v,",","."))
u=t.y.a.a
if(u.length===0)u="0"
s.cC(A.a4(["machine_id",w,"amount_gross",v,"change_amount",A.JL(A.ax(u,",",".")),"collected_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ah(new A.aj(0,0,0,A.bx(d,v,x.m).w.f.d),A.ev(A.k3(v,A.ac(A.b([A.j("Geldentnahme erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.Oz(new B.b6_(w),w.z),C.u,A.da(v,!1,w.x,D.ae_,v,C.ez,1,!1,v,v,C.X,v,new B.b60()),C.u,A.da(v,!1,w.y,D.ae3,v,C.ez,1,!1,v,v,C.X,v,v),C.K,A.dk(C.dt,w.gatS(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.a1P.prototype={
u(d){return B.PQ("cleaned_at","cleaning",new B.azy(),new B.azz(),new B.azA(),"cleaning_logs","Reinigung")}}
B.Bt.prototype={
W(){var w=$.ag()
return new B.U3(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.U3.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
auv(){var w,v,u,t,s=this,r=s.w.ga1()
r=r==null?null:r.hT()
if(r!==!0)return
r=s.c
r.toString
r=A.b4(r,!1)
w=s.z
v=s.Q
u=C.c.aK(s.x.a.a)
if(u.length===0)u=null
t=C.c.aK(s.y.a.a)
if(t.length===0)t=null
r.cC(A.a4(["machine_id",w,"cleaning_type",v,"agent",u,"notes",t,"photo_path",s.as,"cleaned_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.T))},
u(d){var w=this,v=null
return new A.ah(new A.aj(0,0,0,A.bx(d,v,x.m).w.f.d),A.ev(A.k3(v,A.ac(A.b([A.j("Reinigung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.Oz(new B.b6N(w),w.z),C.u,A.k0(D.aeN,w.Q,!1,D.ajQ,new B.b6O(w),v,x.N),C.u,A.da(v,!1,w.x,D.aeo,v,v,1,!1,v,v,C.X,v,v),C.u,A.da(v,!1,w.y,D.ae8,v,v,2,!1,v,v,C.X,v,v),C.u,new B.Fy(new B.b6P(w),v),C.K,A.dk(C.dt,w.gauu(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.LK.prototype={
W(){return new B.U5()}}
B.U5.prototype={
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
xv(d,e,f){return this.aL8(d,e,f)},
aL7(d,e){return this.xv(d,e,!1)},
aL8(d,e,f){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o,n
var $async$xv=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=f?3:5
break
case 3:s=A.ak(J.Z(d,"resolution_note"))
if(s==null)s=""
r=new A.bv(new A.cx(s,C.bb,C.aG),$.ag())
s=t.c
s.toString
w=6
return A.k(A.hi(null,null,!0,null,new B.b70(e,r),s,null,!0,!0,x.y),$async$xv)
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
break}t.J(new B.b71(t))
case 1:return A.o(u,v)}})
return A.p($async$xv,v)},
u(d){var w=this.w
w===$&&A.a()
return A.dd(D.a9h,C.ej,A.yJ(new B.b76(this),w,x.D),null,null,null)}}
B.HG.prototype={
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
r=A.eQ(a1==null?"":a1)
a1=t==null
q=A.ak(a1?f:J.Z(t,"purchased_at"))
p=A.eQ(q==null?"":q)
q=v==="open"
o=q||v==="in_progress"
n=o?C.m:f
m=A.cp(w.a,C.j,f,18)
l=A.aA(A.j(w.b,f,f,f,A.C(C.j,14,C.p),f,f,f),1)
k=u.a
j=A.cU(k,1)
i=A.aR(9999)
h=x.p
i=A.ao(A.b([m,C.b2,l,A.ba(f,A.j(u.b,f,f,f,A.C(k,10,C.p).fV(0.6),f,f,f),C.t,f,f,new A.b7(f,f,j,i,f,f,C.G),f,f,f,f,C.x5,f,f,f)],h),C.k,f,C.f,C.h,0,f,f)
m=s==null?f:J.Z(s,"customer_number")
m=A.i(m==null?"\u2014":m)
l=p!=null?$.dp().al(p):"\u2014"
k=A.b3(a1?f:J.Z(t,"total_gross"))
a1=k==null?0:k
a1=$.d2().al(a1)
k=r!=null?$.dp().al(r):"\u2014"
k=A.b([i,C.Q,A.j("Kunde "+m+" \xb7 Kauf "+l+" \xfcber "+a1+" \xb7 gemeldet "+k,f,f,f,A.C(C.q,12,C.l),f,f,f)],h)
a1=A.ak(a0.h(d,"comment"))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.Q,A.j("\u201e"+A.i(a0.h(d,"comment"))+'"',f,f,f,A.C(C.j,13,C.l).ek(1.4),f,f,f)],h))
a1=A.ak(a0.h(d,e))
if((a1==null?f:a1.length!==0)===!0)C.b.K(k,A.b([C.Q,A.j("Antwort: "+A.i(a0.h(d,e)),f,f,f,A.C(C.q,12,C.l).ek(1.35),f,f,f)],h))
if(o){d=A.b([],h)
if(q)d.push(A.fR(D.ac_,D.aFB,new B.b6W(g),A.oA(f,f,f,f,f,f,f,f,f,C.j,f,f,f,f,f,C.kx,f,f,f,f)))
d.push(A.h8(D.acw,D.Zt,new B.b6X(g),A.dK(C.bN,C.m,f,f,f,f,f)))
d.push(A.fR(D.acA,C.mr,new B.b6Y(g),A.oA(f,f,f,f,f,f,f,f,f,C.ak,f,f,f,f,f,D.Bk,f,f,f,f)))
C.b.K(k,A.b([C.u,A.ll(C.cw,d,C.dI,8,8)],h))}return A.bz(f,A.ac(k,C.C,f,C.f,C.h,0),f,f,C.aj,n,3)}}
B.a4F.prototype={
u(d){return B.PQ("disposed_at","disposal",new B.aC6(),new B.aC7(),new B.aC8(),"disposal_logs","Vernichtung")}}
B.BB.prototype={
W(){var w=$.ag()
return new B.UL(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.UL.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
awj(){var w,v,u,t,s,r,q=this,p=null,o=q.w.ga1()
o=o==null?p:o.hT()
if(o!==!0)return
o=q.c
o.toString
o=A.b4(o,!1)
w=q.z
v=q.Q
u=C.c.aK(q.y.a.a)
if(u.length===0)u=p
t=A.ej(q.x.a.a,p)
s=q.as
r=q.at
r=r==null?p:C.c.a_(r.dU(),0,10)
o.cC(A.a4(["machine_id",w,"product_id",v,"product_label",u,"quantity",t,"reason",s,"mhd_date",r,"photo_path",q.ax,"disposed_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null,u=w.gc8().ao($.bD1(),x.w),t=A.bx(d,v,x.m).w,s=A.j("Vernichtung erfassen",v,v,v,A.W(d).ok.r,v,v,v),r=B.Oz(new B.b9Q(w),w.z),q=B.ax6(u,new B.b9R(w),new B.b9S(),x.D,x.l),p=A.da(v,!1,w.y,D.ae4,v,v,1,!1,v,v,C.X,v,new B.b9T()),o=A.da(v,!1,w.x,D.aez,v,C.cZ,1,!1,v,v,C.X,v,new B.b9U()),n=A.k0(D.aeC,w.as,!1,D.ak5,new B.b9V(w),v,x.N),m=w.at
return new A.ah(new A.aj(0,0,0,t.f.d),A.ev(A.k3(v,A.ac(A.b([s,C.K,r,C.u,q,C.u,p,C.u,o,C.u,n,C.Q,A.rG(!1,C.a7,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.b9W(w,d),!1,v,v,v,v,v,v,A.j(m==null?"MHD-Datum (optional)":"MHD: "+C.c.a_(m.dU(),0,10),v,v,v,v,v,v,v),v,C.y9,v),C.Q,new B.Fy(new B.b9X(w),v),C.Q,A.dk(C.dt,w.gawi(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.Mr.prototype={
W(){return new B.ajS()}}
B.ajS.prototype={
av(){this.aL()
if(!$.bIX){$.bIX=!0
A.bxE(new B.baH(this),x.a)}},
u(d){var w=this,v=null,u=w.gc8(),t=x.w,s=u.ao($.K_(),t),r=u.ao($.bw0(),t)
t=B.ax6(u.ao($.bwa(),x.i),new B.baD(),new B.baE(),x.C,x.y)?B.a5u(C.m,C.B,D.acn,D.Zu,new B.baF(w,d)):v
return A.dd(D.a9t,v,A.ac(A.b([new B.yR(A.b([new B.pM(D.abv,"Pr\xfcfer-Export als ZIP",new B.baG(w,d),C.m,v,w.y)],x.x),D.x1,v),A.aA(w.asN(0,d,u,s,r),1)],x.p),C.k,v,C.f,C.h,0),v,t,v)},
asN(d,e,f,g,h){return A.dz(g,new B.bah(this,h,f,B.ax6(f.ao($.bwa(),x.i),new B.bai(),new B.baj(),x.C,x.y),e),new B.bak(),new B.bal(),!1,!0,!1,x.D,x.l)},
wS(d,e,f,g){return this.aHb(0,e,f,g)},
aHb(d,e,f,a0){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$wS=A.m(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:j=J.V(a0)
i=j.h(a0,"latest_file_path")
h=i==null?null:J.al(i)
if(h==null||h.length===0){e.O(x.q).f.b2(D.azK)
w=1
break}i=j.h(a0,"title")
m=i==null?null:J.al(i)
r=m==null?"Dokument":m
l=h.toLowerCase()
q=C.c.hp(l,".pdf")
p=C.c.hp(l,".png")||C.c.hp(l,".jpg")||C.c.hp(l,".jpeg")||C.c.hp(l,".gif")||C.c.hp(l,".webp")
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
return A.k(B.bBc(e,r,o),$async$wS)
case 13:w=11
break
case 12:w=14
return A.k(A.mC(A.cm(o,0,null),C.en,null),$async$wS)
case 14:if(e.e!=null)e.O(x.q).f.b2(D.azZ)
case 11:t=2
w=6
break
case 4:t=3
g=s.pop()
n=A.a2(g)
if(e.e!=null)e.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$wS,v)},
wI(d,e,f){return this.asi(d,e,f)},
asi(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$wI=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.k($.aFa.cc().zo(D.anM,C.xL,!0),$async$wI)
case 3:j=h
if(j==null||J.er(j.a)){w=1
break}r=J.qO(j.a)
if(r.c==null){w=1
break}t=5
n=e.aD(0,$.bD3(),x.Z)
m=r.b
l=r.c
l.toString
w=8
return A.k(n.b0Y(0,"documents",l,m),$async$wI)
case 8:q=h
m=x.z
w=9
return A.k(e.aD(0,$.bL(),x.A).er("add_document_version",A.a4(["p_document",f,"p_file_path",q,"p_notes",r.b],x.N,m),m),$async$wI)
case 9:if(d.e==null){w=1
break}n=$.K_()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(n)
p=C.c.hp(r.b.toLowerCase(),".pdf")
n=d.O(x.q).f
n.b2(A.c6(null,null,null,null,null,C.n,null,A.j(p?"Neue Version gespeichert.":"Version gespeichert. Hinweis: Nicht-PDFs werden beim \xd6ffnen heruntergeladen \u2014 PDF ist ideal f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
i=s.pop()
o=A.a2(i)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Upload fehlgeschlagen: "+A.i(o),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$wI,v)},
Cz(d,e,f){return this.aLb(d,e,f)},
aLb(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Cz=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:o=J.V(f)
n=o.h(f,"valid_until")
m=n==null?null:J.al(n)
l=m!=null&&m.length!==0?A.eQ(m):null
n=l==null?new A.aZ(Date.now(),0,!1).um(31536e9):l
w=3
return A.k(A.pb(d,A.bC(2020,1,1,0,0,0,0),null,n,A.bC(2100,1,1,0,0,0,0),C.er),$async$Cz)
case 3:r=h
if(r==null){w=1
break}t=5
n=x.z
w=8
return A.k(e.aD(0,$.bL(),x.A).er("set_document_valid_until",A.a4(["p_document",o.h(f,"id"),"p_valid_until",C.c.a_(r.dU(),0,10)],x.N,n),n),$async$Cz)
case 8:if(d.e==null){w=1
break}o=$.K_()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(o)
d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("G\xfcltig bis "+$.dp().al(r)+".",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=7
break
case 5:t=4
k=s.pop()
q=A.a2(k)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cz,v)},
Cu(d,e,f){return this.aJE(d,e,f)},
aJE(d,e,f){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o
var $async$Cu=A.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return A.k(A.hi(null,null,!0,null,new B.baC(f,d),d,null,!0,!0,x.y),$async$Cu)
case 3:if(h!==!0){w=1
break}t=5
q=x.z
w=8
return A.k(e.aD(0,$.bL(),x.A).er("request_document_review",A.a4(["p_document",J.Z(f,"id")],x.N,q),q),$async$Cu)
case 8:if(d.e==null){w=1
break}d.O(x.q).f.b2(E.mh)
t=2
w=7
break
case 5:t=4
o=s.pop()
r=A.a2(o)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cu,v)},
x8(d,e,f){return this.aEu(d,e,f)},
aEu(a3,a4,a5){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
if(a3.e!=null)a3.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=1
break
w=6
break
case 3:w=2
break
case 6:if(m.gp(0)===0){if(a3.e!=null)a3.O(x.q).f.b2(D.aA2)
w=1
break}m=x.N
p=A.b2(m)
if(a3.e==null){w=1
break}w=8
return A.k(A.hi(null,null,!0,null,new B.baz(d,p),a3,null,!0,!0,x.y),$async$x8)
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
e.b.K(0,A.mP(g.x,m,m))
w=15
return A.k(e.b04("invite_employee_signature",!1,f,i),$async$x8)
case 15:w=13
break
case 14:if(a3.e==null){w=1
break}m=$.bCw().$1(A.aG(j.h(a5,"id")))
if(a4.e==null)A.T(A.a0(y.b))
a4.gcv().cs(m)
a3.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(""+p.a+" Mitarbeiter eingeladen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=12
break
case 10:t=9
a2=s.pop()
n=A.a2(a2)
if(a3.e==null){w=1
break}a3.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(n),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=12
break
case 9:w=2
break
case 12:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$x8,v)},
wY(d,e){return this.axi(d,e)},
axi(d,e){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$wY=A.m(function(f,a0){if(f===1){t.push(a0)
w=u}for(;;)switch(w){case 0:r.J(new B.bas(r))
u=3
k=e.aD(0,$.bL(),x.A).ax
k===$&&A.a()
j=r.x
if(j==null){j=x.z
j=A.z(j,j)}else j=A.a4(["category",j],x.N,x.T)
w=6
return A.k(k.hx("documents-zip-export",j),$async$wY)
case 6:q=a0
p=q.a
w=x.f.b(p)&&typeof J.Z(p,"base64")=="string"?7:9
break
case 7:o=C.iV.cF(A.aG(J.Z(p,"base64")))
i=A.ak(J.Z(p,"filename"))
n=i==null?"export.zip":i
m="data:application/zip;base64,"+C.vU.gt6().cF(o)
w=10
return A.k(A.mC(A.cm(m,0,null),C.en,null),$async$wY)
case 10:w=11
return A.k(A.uG(new A.ps(m)),$async$wY)
case 11:if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(A.i(n)+" ("+(J.cg(o)/1024|0)+" KB) heruntergeladen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
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
if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Export fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(5)
w=4
break
case 2:s=[1]
case 4:u=1
if(r.c!=null)r.J(new B.bat(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$wY,v)},
Bf(d,e){return this.avm(d,e)},
avm(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Bf=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l={}
k=A.dJ(e.aD(0,$.bw0(),x.w))
if(k==null)k=C.co
r=new A.bv(C.a8,$.ag())
p=J.V(k)
l.a=p.gdw(k)?A.aG(J.Z(p.ga2(k),"slug")):"sonstiges"
w=3
return A.k(A.hi(null,null,!0,null,new B.bar(l,r,k),d,null,!0,!0,x.y),$async$Bf)
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
break}l=$.K_()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(l)
t=2
w=7
break
case 5:t=4
j=s.pop()
q=A.a2(j)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehlgeschlagen: "+A.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Bf,v)}}
B.aqz.prototype={
u(d){var w=null
return A.dH(w,C.aw,!1,w,!0,C.n,w,A.dO(),w,w,w,w,w,w,2,A.eE(w,new A.hw(4,A.aR(12),C.dz),w,w,w,w,w,w,!0,new A.hw(4,A.aR(12),C.dz),w,w,w,w,w,C.B,!0,w,w,w,w,new A.hw(4,A.aR(12),D.a0e),w,w,w,w,w,w,w,w,w,"Titel oder Kategorie suchen \u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,D.acQ,w,w,w,w,w,w,w,w,w,w,w,w),C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,this.c,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w)}}
B.al4.prototype={
u(d){var w,v,u,t,s=this,r=null,q=s.d,p=x.p,o=A.b([s.a2K(d,"Alle Ordner",q==null,new B.bd0(s)),C.b2],p)
for(w=J.bh(s.c);w.t();){v=w.gN(w)
u=J.V(v)
t=u.h(v,"label")
t=t==null?r:J.al(t)
if(t==null)t=""
u=u.h(v,"slug")
C.b.K(o,A.b([s.a2K(d,t,q==null?u==null:q===u,new B.bd1(s,v)),C.b2],p))}return A.ev(A.ao(o,C.k,r,C.f,C.h,0,r,r),r,r,r,C.ay)},
a2K(d,e,f,g){var w=null,v=A.aR(999),u=f?C.m:C.B,t=A.aR(999),s=A.cU(f?C.m:C.ao,1)
return A.eD(!1,v,!0,A.ba(w,A.j(e,w,w,w,A.C(f?C.j:C.aU,12,C.N),w,w,w),C.t,w,w,new A.b7(u,w,s,t,w,w,C.G),w,w,w,w,C.Dx,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)}}
B.al5.prototype={
u(d){var w,v,u,t=this,s=null,r=t.d,q=J.V(r)
if(q.gZ(r))return C.ar
q.fR(r,new B.bd2())
w=t.c
v=J.V(w)
u=v.h(w,"icon")
u=A.cp(B.c2G(u==null?s:J.al(u)),C.j,s,18)
w=v.h(w,"label")
w=w==null?s:J.al(w)
if(w==null)w=""
v=x.p
v=A.b([A.ao(A.b([u,C.aV,A.aA(A.j(w,s,s,s,A.c0(C.j,15,C.p),s,s,s),1),A.j(""+q.gp(r),s,s,s,A.C(C.q,11,C.l),s,s,s)],v),C.k,s,C.f,C.h,0,s,s),C.Q],v)
for(r=q.gY(r),q=t.e;r.t();){w=r.gN(r)
v.push(new B.ajR(w,q,new B.bd3(t,w),new B.bd4(t,w),new B.bd5(t,w),new B.bd6(t,w),new B.bd7(t,w),s))}return new A.ah(C.wZ,A.ac(v,C.C,s,C.f,C.h,0),s)}}
B.ajR.prototype={
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
break A}if("expiring"===t){d=C.dA
break A}d=C.ao
break A}p=d}o=u!=null&&u.length!==0?A.eQ(u):g
n=q==="ifsg"
m=n&&s&&!r?a2.ao($.bCw().$1(A.aG(e.h(f,"id"))),x.w):g
f=r?0:20
e=s?h.r:g
d=x.p
l=A.b([],d)
if(r)C.b.K(l,A.b([D.aua],d))
l.push(A.aA(A.j(a0,2,C.ah,g,A.C(C.j,15,C.p),g,g,g),1))
l.push(C.aV)
if(r)l.push(D.aAk)
else l.push(new B.aks(t,g))
l=A.ao(l,C.C,g,C.f,C.h,0,g,g)
k=A.i(w)
j=o==null?"":" \xb7 g\xfcltig bis "+$.dp().al(o)
j=A.j("v"+k+" \xb7 "+v+j,g,g,g,A.C(C.q,11,C.l),g,g,g)
if(s)k=A.ao(A.b([D.ac9,C.cE,new A.hQ(1,C.cN,A.j(r?"Vorlage herunterladen":"Tippen zum \xd6ffnen",1,C.ah,g,D.aCQ,g,g,g),g)],d),C.k,g,C.f,C.J,0,g,g)
else k=A.j("Noch keine Version hochgeladen",1,C.ah,g,A.C(C.q,11,C.l),g,g,g)
k=A.b([A.aA(k,1)],d)
if(h.f&&!r){i=A.b([A.fO(C.aU,D.mL,D.acW,g,g,h.x,C.a7,g,g,"G\xfcltigkeit setzen",C.mu),A.fO(C.aU,D.mL,D.ad3,g,g,h.w,C.a7,g,g,"Neue Version hochladen",C.mu)],d)
if(n)i.push(A.fO(C.m,D.mL,D.acI,g,g,s?h.z:g,C.a7,g,g,"Mitarbeiter zur Signatur einladen",C.mu))
i.push(A.fO(C.m,D.mL,D.acX,g,g,s?h.y:g,C.a7,g,g,"Freigabe (2-of-2 Gesellschafter)",C.mu))
k.push(A.ll(C.cw,i,C.dI,0,0))}l=A.b([l,C.cX,j,C.u,A.ao(k,C.k,g,C.f,C.h,0,g,g)],d)
if(m!=null)C.b.K(l,A.b([C.u,C.cM,C.Q,A.dz(m,new B.b9Z(),new B.ba_(),new B.ba0(),!1,!0,!1,x.D,x.l)],d))
return new A.ah(new A.aj(f,0,0,12),A.bz(g,A.ac(l,C.C,g,C.f,C.h,0),g,e,C.aj,p,3),g)}}
B.ar3.prototype={
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
r=t?C.i1:D.a9U
r=A.cp(r,t?C.aE:C.m,s,16)
if(t){q=v==null?"":" \xb7 "+C.c.a_(v,0,10)
q=o+" \u2014 signiert"+q}else q=o+" \u2014 ausstehend"
q=A.b([r,C.b2,A.aA(A.j(q,s,s,s,A.C(C.j,12,C.N),s,s,s),1)],x.p)
if(t&&u!=null&&u.length!==0)q.push(A.nq(D.EZ,D.aFt,new B.bnj(this,d,e,u),s))
return new A.ah(D.Du,A.ao(q,C.k,s,C.f,C.h,0,s,s),s)},
Bg(d,e,f){return this.aHl(d,e,f)},
aHl(d,e,f){var w=0,v=A.q(x.H),u=1,t=[],s,r,q,p,o
var $async$Bg=A.m(function(g,h){if(g===1){t.push(h)
w=u}for(;;)switch(w){case 0:u=3
q=e.aD(0,$.bL(),x.A).ay
q===$&&A.a()
w=6
return A.k(q.cW("signed-documents").nK(f,86400),$async$Bg)
case 6:s=h
w=7
return A.k(A.mC(A.cm(s,0,null),C.en,"_blank"),$async$Bg)
case 7:u=1
w=5
break
case 3:u=2
o=t.pop()
r=A.a2(o)
if(d.e!=null)d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(r),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=5
break
case 2:w=1
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Bg,v)}}
B.aks.prototype={
u(d){switch(this.c){case"expired":return D.aAj
case"expiring":return D.aAh
case"ok":return D.aAi
default:return C.ar}}}
B.a4R.prototype={
df(d,e){var w=null,v=e.ao($.bCu(),x.w),u=B.a5u(w,w,D.ada,D.An,new B.aDS(this,d,e))
return A.dd(D.a9c,w,A.dz(v,new B.aDT(),new B.aDU(),new B.aDV(),!1,!0,!1,x.D,x.E),w,u,w)},
BR(d,e){return this.aEt(d,e)},
aEt(d,e){var w=0,v=A.q(x.H),u,t=2,s=[],r,q,p,o,n
var $async$BR=A.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:w=3
return A.k(A.kC(null,new B.aDP(),d,!0,null,null,x.dr),$async$BR)
case 3:o=g
if(o==null){w=1
break}t=5
q=e.aD(0,$.bL(),x.A).ax
q===$&&A.a()
w=8
return A.k(q.hx("invite-user",A.a4(["email",o.a,"role","employee","full_name",o.b,"permissions",o.c],x.N,x.X)),$async$BR)
case 8:if(d.e==null){w=1
break}q=$.bCu()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(q)
d.O(x.q).f.b2(D.azU)
t=2
w=7
break
case 5:t=4
n=s.pop()
r=A.a2(n)
if(d.e==null){w=1
break}d.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Einladung fehlgeschlagen: "+A.i(r),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$BR,v)}}
B.amb.prototype={}
B.BT.prototype={
W(){var w=$.ag()
return new B.VN(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),A.b2(x.N))}}
B.VN.prototype={
l(){var w=this.e,v=$.ag()
w.R$=v
w.S$=0
w=this.f
w.R$=v
w.S$=0
this.ap()},
awZ(){var w,v,u,t=this,s=t.d.ga1()
s=s==null?null:s.hT()
if(s!==!0)return
s=t.c
s.toString
s=A.b4(s,!1)
w=C.c.aK(t.e.a.a)
v=C.c.aK(t.f.a.a)
if(v.length===0)v=null
u=t.r
u=A.Q(u,A.l(u).c)
s.cC(new B.amb(w,v,u))},
u(d){var w,v,u,t=this,s=null,r=A.bx(d,s,x.m).w,q=A.b([A.j("Mitarbeiter einladen",s,s,s,A.W(d).ok.r,s,s,s),C.K,A.da(s,!1,t.e,D.aeK,s,C.iD,1,!1,s,s,C.X,s,new B.bfv()),C.u,A.da(s,!1,t.f,D.ae1,s,s,1,!1,s,s,C.X,s,s),C.u,A.j("Berechtigungen",s,s,s,A.W(d).ok.w,s,s,s)],x.p)
for(w=D.Sj.ghZ(D.Sj),w=w.gY(w),v=t.r;w.t();){u=w.gN(w)
q.push(A.bE7(s,s,C.a7,s,!0,new B.bfw(t,u),s,A.j(u.b,s,s,s,s,s,s,s),v.n(0,u.a)))}q.push(C.Q)
q.push(A.dk(D.An,t.gawY(),s))
return new A.ah(new A.aj(0,0,0,r.f.d),A.ev(A.k3(s,A.ac(q,C.a9,s,C.f,C.J,0),t.d),s,C.aj,s,C.M),s)}}
B.a59.prototype={
u(d){return B.PQ("filled_at","filling",new B.aFc(),new B.aFd(),new B.aFe(),"filling_logs","Bef\xfcllung")}}
B.BK.prototype={
W(){var w=$.ag()
return new B.V5(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(new A.cx("0",C.bb,C.aG),w),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.aZ(Date.now(),0,!1))}}
B.V5.prototype={
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
IP(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IP=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ay
w=2
return A.k(A.pb(r,A.bC(2024,1,1,0,0,0,0),null,t,new A.aZ(Date.now(),0,!1),C.er),$async$IP)
case 2:s=e
if(s!=null)u.J(new B.bcf(u,s))
return A.o(null,v)}})
return A.p($async$IP,v)},
IQ(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IQ=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.ch
if(t==null)t=new A.aZ(Date.now(),0,!1).um(7776e9)
w=2
return A.k(A.pb(r,new A.aZ(Date.now(),0,!1).um(-2592e9),null,t,A.bC(2030,1,1,0,0,0,0),C.er),$async$IQ)
case 2:s=e
if(s!=null)u.J(new B.bcg(u,s))
return A.o(null,v)}})
return A.p($async$IQ,v)},
axt(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w.ga1()
k=k==null?l:k.hT()
if(k!==!0)return
k=m.at
if(k==null)return
w=m.c
w.toString
w=A.b4(w,!1)
v=m.as
u=A.ej(m.x.a.a,l)
t=A.iz(m.y.a.a,l)
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
u(d){var w,v=this,u=null,t=v.gc8().ao($.bD1(),x.w),s=A.bx(d,u,x.m).w,r=A.j("Bef\xfcllung erfassen",u,u,u,A.W(d).ok.r,u,u,u),q=B.Oz(new B.bcm(v),v.as),p=B.ax6(t,new B.bcn(v),new B.bco(),x.D,x.l),o=A.da(u,!1,v.x,D.aej,u,C.cZ,1,!1,u,u,C.X,u,new B.bcp()),n=A.da(u,!1,v.y,D.aeB,u,C.cZ,1,!1,u,u,C.X,u,u),m=A.da(u,!1,v.z,D.aeF,u,C.ez,1,!1,u,u,C.X,u,new B.bcq()),l=A.da(u,!1,v.Q,D.aeg,u,u,1,!1,u,u,C.X,u,new B.bcr()),k=v.ay,j=x.p
k=A.a6I(u,A.ao(A.b([A.aA(A.j(C.c.cX(C.e.j(A.bU(k)),2,"0")+"."+C.c.cX(C.e.j(A.bi(k)),2,"0")+"."+A.aU(k),u,u,u,u,u,u,u),1),A.nq(D.lj,D.aHd,v.gaIq(),u)],j),C.k,u,C.f,C.h,0,u,u),D.adX,!1,!1,!1,!1,u,u)
w=v.ch
return new A.ah(new A.aj(0,0,0,s.f.d),A.ev(A.k3(u,A.ac(A.b([r,C.K,q,C.u,p,C.u,o,C.u,n,C.u,m,C.u,l,C.u,k,C.u,A.a6I(u,A.ao(A.b([A.aA(A.j(w==null?"\u2014 nicht gesetzt \u2014":C.c.cX(C.e.j(A.bU(w)),2,"0")+"."+C.c.cX(C.e.j(A.bi(w)),2,"0")+"."+A.aU(w),u,u,u,u,u,u,u),1),A.nq(D.lj,D.aFE,v.gaIr(),u)],j),C.k,u,C.f,C.h,0,u,u),D.aen,!1,!1,!1,!1,u,u),C.b6,A.b0d(C.a7,new B.bcs(v),u,D.aFw,v.ax),A.dk(C.dt,v.gaxs(),u)],j),C.a9,u,C.f,C.J,0),v.w),u,C.aj,u,C.M),u)}}
B.O1.prototype={
W(){return new B.VM(new A.aZ(Date.now(),0,!1).um(-7776e9),new A.aZ(Date.now(),0,!1))}}
B.VM.prototype={
Ic(){var w=0,v=A.q(x.H),u=1,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$Ic=A.m(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:r.J(new B.bfl(r))
u=3
q=r.gc8().aD(0,$.bL(),x.A)
n=x.N
m=x.z
w=6
return A.k(A.kV(A.b([q.er("inventory_fifo_movements",A.a4(["p_from",r.w.Fv().dU(),"p_to",r.x.Fv().dU()],n,m),m),q.er("inventory_fifo_lots",A.a4(["p_to",r.x.Fv().dU()],n,m),m),q.h_("list_partner_signatures",m)],x.U),m),$async$Ic)
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
if(r.c!=null)r.J(new B.bfm(r))
w=s.pop()
break
case 5:return A.o(null,v)
case 1:return A.n(t.at(-1),v)}})
return A.p($async$Ic,v)},
IO(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IO=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.w
w=2
return A.k(A.pb(r,A.bC(2024,1,1,0,0,0,0),null,t,new A.aZ(Date.now(),0,!1),C.er),$async$IO)
case 2:s=e
if(s!=null)u.J(new B.bfn(u,s))
return A.o(null,v)}})
return A.p($async$IO,v)},
IT(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$IT=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.x
w=2
return A.k(A.pb(r,A.bC(2024,1,1,0,0,0,0),null,t,new A.aZ(Date.now(),0,!1),C.er),$async$IT)
case 2:s=e
if(s!=null)u.J(new B.bfo(u,s))
return A.o(null,v)}})
return A.p($async$IT,v)},
av(){this.aL()
A.bxE(this.ga6g(),x.H)},
Cs(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Cs=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.y==null){w=1
break}o=r.c
o.toString
w=3
return A.k(A.hi(null,null,!0,null,new B.bfr(r),o,null,!0,!0,x.y),$async$Cs)
case 3:if(e!==!0){w=1
break}t=5
q=new F.mH(r.gc8().aD(0,$.bL(),x.A))
o=r.w
n=r.x
m=$.dp()
l=m.al(o)
m=m.al(r.x)
w=8
return A.k(q.w7("inventory_fifo",o,n,A.a4(["movements",r.y,"lots",r.z],x.N,x.z),"Inventur "+l+" \u2013 "+m),$async$Cs)
case 8:o=r.c
if(o!=null)o.O(x.q).f.b2(E.mh)
t=2
w=7
break
case 5:t=4
j=s.pop()
p=A.a2(j)
o=r.c
if(o!=null)o.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cs,v)},
atx(d){var w,v,u,t,s,r=A.z(x.N,x.D)
for(w=d.$ti,v=new A.b8(d,d.gp(0),w.i("b8<an.E>")),w=w.i("an.E");v.t();){u=v.d
if(u==null)u=w.a(u)
t=J.Z(u,"product_id")
s=t==null?null:J.al(t)
if(s==null)s=""
J.e2(r.cl(0,s,new B.bfk()),u)}return r},
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.b([],q),o=s.y
if(o!=null&&!o.gZ(o))p.push(new B.yR(A.b([new B.pM(E.fS,"Freigabe anfordern",s.gaJA(),C.m,r,!1),new B.pM(C.i4,"Als PDF drucken",new B.bfs(s),C.ak,C.ak,!1)],x.x),C.dT,r))
p.push(A.j("FIFO-Inventur \u2014 je Produkt alle Bewegungen chronologisch, Bewertung nach dem Verbrauchsfolgeverfahren (\xa7256 HGB): die \xe4ltesten Zug\xe4nge sind zuerst verbraucht, der Endbestand wird mit den EK-Preisen der j\xfcngsten verbliebenen Lots bewertet. MHD-Abschlag nach Restlaufzeit-Matrix vom AK-Wert.",r,r,r,A.C(C.q,12,C.l),r,r,r))
p.push(C.K)
o=s.w
w=$.dp()
p.push(A.ao(A.b([A.aA(A.fR(D.lj,A.j("Von "+w.al(o),r,r,r,r,r,r,r),s.gaIp(),A.oA(r,r,r,r,r,r,r,r,r,C.j,r,r,C.em,r,r,C.kx,r,r,r,r)),1),C.aV,A.aA(A.fR(D.lj,A.j("Bis "+w.al(s.x),r,r,r,r,r,r,r),s.gaIw(),A.oA(r,r,r,r,r,r,r,r,r,C.j,r,r,C.em,r,r,C.kx,r,r,r,r)),1)],q),C.k,r,C.f,C.h,0,r,r))
p.push(C.u)
o=s.as
w=o?r:s.ga6g()
o=o?C.uV:D.F3
p.push(A.h8(o,D.aId,w,A.dK(C.m,C.B,r,C.em,r,r,r)))
p.push(C.K)
o=s.at
if(o!=null)p.push(A.bz(C.ak,A.j(o,r,r,r,A.C(C.j,13,C.l),r,r,r),C.eI,r,C.D,r,3))
else{o=s.y
if(o==null)p.push(C.ar)
else if(o.gp(0)===0)p.push(A.bz(r,A.j("Keine Bewegungen im gew\xe4hlten Zeitraum.",r,r,r,A.C(C.q,13,C.l),r,r,r),C.ae,r,C.D,r,3))
else{q=A.b([],q)
o=s.y
o.toString
o=s.atx(o)
o=new A.e7(o,A.l(o).i("e7<1,2>")).gY(0)
w=x.t
while(o.t()){v=o.d
u=v.b
t=s.z
if(t==null)t=A.b([],w)
t=J.qP(t,new B.bft(v))
t=A.Q(t,t.$ti.i("t.E"))
q.push(new B.aoP(u,t,r))}q.push(C.aQ)
o=s.z
q.push(new B.alm(o==null?C.co:o,r))
q.push(C.bK)
q.push(D.aOc)
q.push(C.bK)
o=s.Q
if(o!=null&&!o.gZ(o)){o=s.Q
o.toString
q.push(new B.ar4(o,r))}C.b.K(p,q)}}return A.dd(D.a9l,r,A.dF(p,C.D,r,C.M,!1),r,r,r)}}
B.aoP.prototype={
u(c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9="Hanken Grotesk",c0=this.d,c1=J.cy(c0),c2=J.Z(c1.ga2(c0),"product_name"),c3=c2==null?b8:J.al(c2)
if(c3==null)c3=""
c2=J.Z(c1.ga2(c0),"sku")
w=c2==null?b8:J.al(c2)
if(w==null)w=""
c2=this.e
v=C.b.fA(c2,0,new B.bjE())
u=C.b.fA(c2,0,new B.bjF())
t=C.b.fA(c2,0,new B.bjG())
s=C.b.fA(c2,0,new B.bjH())
r=A.j(c3,b8,b8,b8,A.C(C.j,16,C.p),b8,b8,b8)
q=w.length===0?"":"SKU: "+w
p=x.p
o=""+v
q=A.ao(A.b([A.aA(A.ac(A.b([r,A.j(q,b8,b8,b8,A.C(C.q,11,C.l),b8,b8,b8)],p),C.C,b8,C.f,C.h,0),1),A.j("Endbestand: "+o,b8,b8,b8,A.C(C.m,13,C.p),b8,b8,b8)],p),C.C,b8,C.f,C.h,0,b8,b8)
r=A.j("Bewegungen im Zeitraum",b8,b8,b8,A.C(C.q,12,C.p),b8,b8,b8)
n=x.v
m=x._
l=A.b([],m)
for(c0=c1.gY(c0);c0.t();)l.push(this.aFT(c0.gN(c0)))
c0=A.ev(B.aB4(b8,D.ajm,40,30,new A.bF(C.ae,n),32,l),b8,b8,b8,C.ay)
c1=A.j("FIFO-Restlots am Stichtag",b8,b8,b8,A.C(C.q,12,C.p),b8,b8,b8)
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
g=A.j(B.aoQ(e),b8,b8,b8,b8,b8,b8,b8)
a8=A.j(""+d,b8,b8,b8,new A.O(!0,C.j,b8,b9,C.bw,b8,12,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=$.d2()
b0=A.j(a9.al(a0),b8,b8,b8,b8,b8,b8,b8)
b1=A.j(B.aoQ(a1),b8,b8,b8,b8,b8,b8,b8)
b2=A.j(a2==null?"\u2014":A.i(a2)+"d",b8,b8,b8,b8,b8,b8,b8)
b3=a7?C.ak:C.j
b3=A.j(""+a3+" %",b8,b8,b8,new A.O(!0,b3,b8,b9,C.bw,b8,12,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
b4=A.j(a9.al(a4),b8,b8,b8,b8,b8,b8,b8)
b5=a5===0?"\u2014":"\u2212 "+a9.al(a5)
b6=a7?C.ak:C.j
b5=A.j(b5,b8,b8,b8,new A.O(!0,b6,b8,b9,C.bw,b8,12,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8)
a9=a9.al(a6)
m.push(new B.r5(b8,A.b([new B.fw(h),new B.fw(g),new B.fw(a8),new B.fw(b0),new B.fw(b1),new B.fw(b2),new B.fw(b3),new B.fw(b4),new B.fw(b5),new B.fw(A.j(a9,b8,b8,b8,new A.O(!0,C.j,b8,b9,C.bw,b8,13,C.p,b8,b8,b8,b8,1.5,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8),b8,b8,b8))],k),b8))}b7=A.C(C.j,13,C.p)
c2=B.o6(A.j("Summe",b8,b8,b8,b7,b8,b8,b8))
o=B.o6(A.j(o,b8,b8,b8,b7,b8,b8,b8))
l=$.d2()
h=B.o6(A.j(l.al(u),b8,b8,b8,b7,b8,b8,b8))
g=t===0?"\u2014":"\u2212 "+l.al(t)
m.push(B.bED(A.b([c2,D.kS,o,D.kS,D.kS,D.kS,D.kS,h,B.o6(A.j(g,b8,b8,b8,b7.cN(C.ak),b8,b8,b8)),B.o6(A.j(l.al(s),b8,b8,b8,b7,b8,b8,b8))],k),new A.bF(C.bG,n),b8))
return new A.ah(C.wZ,A.bz(b8,A.ac(A.b([q,C.u,r,C.b6,c0,C.u,c1,C.b6,A.ev(B.aB4(b8,D.aj7,40,30,new A.bF(C.ae,n),32,m),b8,b8,b8,C.ay)],p),C.C,b8,C.f,C.h,0),b8,b8,C.aj,b8,3),b8)},
aFT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.V(d),h=A.ak(i.h(d,"type"))
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
if(h==="refill")n=C.Cu
else n=h==="disposal"?C.eI:j
i=n==null?j:new A.bF(n,x.v)
v=B.o6(A.j(B.aoQ(o),j,j,j,j,j,j,j))
w=B.o6(A.j(w,j,j,j,A.C(h==="disposal"?C.ak:C.j,12,C.p),j,j,j))
m=u>0
l=""+u
if(m)l="+"+l
l=B.o6(A.j(l,j,j,j,A.C(m?C.aE:C.j,12,C.p),j,j,j))
m=B.o6(A.j(t==null?"\u2014":$.d2().al(t),j,j,j,j,j,j,j))
if(s.length===0)k="\u2014"
else k=s+(r==null?"":"  \xb7 "+B.aoQ(r))
return B.bED(A.b([v,w,l,m,B.o6(A.j(k,j,j,j,A.C(C.aU,11,C.l),j,j,j)),B.o6(A.j(B.aoQ(q),j,j,j,j,j,j,j)),B.o6(A.ce(A.j(p,1,C.ah,j,A.C(C.q,11,C.l),j,j,j),j,200))],x.F),i,j)}}
B.alm.prototype={
u(d){var w,v,u=null,t=this.c,s=J.cy(t),r=s.fA(t,0,new B.be0()),q=s.fA(t,0,new B.be1()),p=s.fA(t,0,new B.be2()),o=s.fA(t,0,new B.be3()),n=s.eQ(t,new B.be4(),x.T).hE(0).a
t=$.d2()
s=t.al(q)
w=p===0?"\u2014 0,00 \u20ac":"\u2212 "+t.al(p)
v=x.p
return A.bz(C.m,A.ac(A.b([D.awL,C.u,A.ll(C.cw,A.b([new B.wQ("Produkte im Bestand",""+n,!1,!1,u),new B.wQ("Einheiten gesamt",A.i(r),!1,!1,u),new B.wQ("Anschaffungskosten netto",s,!1,!1,u),new B.wQ("MHD-Abschlag",w,!0,!1,u),new B.wQ("Bilanzwert netto",t.al(o),!1,!0,u)],v),C.dI,8,20)],v),C.C,u,C.f,C.h,0),C.bG,u,C.aj,u,3)}}
B.wQ.prototype={
u(d){var w=this,v=null,u=A.aR(12),t=A.cU(C.ao,1),s=A.j(w.c,v,v,v,A.C(C.q,10,C.N),v,v,v),r=w.f?17:15
return A.ba(v,A.ac(A.b([s,A.j(w.d,v,v,v,A.C(w.e?C.ak:C.j,r,C.p),v,v,v)],x.p),C.C,v,C.f,C.J,0),C.t,v,v,new A.b7(C.B,v,t,u,v,v,C.G),v,v,v,v,C.l0,v,v,v)}}
B.an9.prototype={
u(d){var w,v,u,t,s,r,q,p=null,o="Hanken Grotesk",n=A.j("Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskostenwert eines Lots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.",p,p,p,A.C(C.q,12,C.l),p,p,p),m=A.b([],x._)
for(w=x.F,v=0;v<5;++v){u=D.ann[v]
t=A.j(u.a,p,p,p,new A.O(!0,C.j,p,o,C.bw,p,13,C.p,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
s=A.j(u.b,p,p,p,p,p,p,p)
r=u.c
q=r==="0 %"?C.j:C.ak
r=A.j(r,p,p,p,new A.O(!0,q,p,o,C.bw,p,13,C.p,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
m.push(new B.r5(p,A.b([new B.fw(t),new B.fw(s),new B.fw(r),new B.fw(A.j(u.d,p,p,p,new A.O(!0,C.aU,p,o,C.bw,p,12,C.l,p,p,p,p,1.5,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p))],w),p))}return A.bz(p,A.ac(A.b([D.awQ,C.Q,n,C.u,A.ev(B.aB4(p,D.anI,44,32,new A.bF(C.ae,x.v),34,m),p,p,p,C.ay)],x.p),C.C,p,C.f,C.h,0),p,p,C.aj,p,3)}}
B.wT.prototype={}
B.ar4.prototype={
u(d){var w,v,u,t=null,s=x.p,r=A.b([],s)
for(w=this.c,v=w.$ti,w=new A.b8(w,w.gp(0),v.i("b8<an.E>")),v=v.i("an.E");w.t();){u=w.d
r.push(new B.ar6(u==null?v.a(u):u,t))}return A.bz(t,A.ac(A.b([D.awM,C.K,A.ll(C.cw,r,C.dI,16,20)],s),C.C,t,C.f,C.h,0),t,t,C.aj,t,3)}}
B.ar6.prototype={
u(d){var w,v,u=null,t=this.c,s=J.V(t),r=s.h(t,"full_name"),q=r==null?u:J.al(r)
if(q==null)q=""
r=s.h(t,"role_label")
w=r==null?u:J.al(r)
if(w==null)w=""
t=s.h(t,"image_url")
v=t==null?u:J.al(t)
t=A.aR(12)
s=A.cU(C.ao,1)
r=v!=null&&v.length!==0?A.aJ5(v,new B.bnH(),C.iU,u,u,u,u):D.a_8
t=A.ba(C.B0,r,C.t,u,u,new A.b7(C.ae,u,s,t,u,u,C.G),u,68,u,u,C.fs,u,u,u)
s=A.j(q,u,u,u,A.C(C.j,13,C.p),u,u,u)
r=Date.now()
return A.ce(A.ac(A.b([t,C.cX,s,A.j(w+" \xb7 Datum: "+$.dp().al(new A.aZ(r,0,!1)),u,u,u,A.C(C.q,11,C.l),u,u,u)],x.p),C.C,u,C.f,C.h,0),u,260)}}
B.Im.prototype={
u(d){var w=null
return A.ba(w,w,C.t,C.bN,w,w,w,1,w,D.a7n,w,w,w,w)}}
B.a6M.prototype={
df(d,e){var w=null
return A.dd(D.a9n,w,A.dz(e.ao($.avS(),x.c),new B.aK_(),new B.aK0(),new B.aK1(),!1,!0,!1,x.W,x.E),w,w,w)}}
B.zr.prototype={
W(){return new B.amT()}}
B.amT.prototype={
av(){var w,v,u,t,s=this
s.aL()
w=s.gc8().aD(0,$.bL(),x.A)
v=s.a.d
u=w.ch
u===$&&A.a()
t=A.bXC("realtime:"+("inventory:"+v),u,C.a2j)
u.Q8()
C.b.E(u.b,t)
s.w=t.aYy(new B.bgI(s),C.WY,new B.aaw(D.WZ,"machine_id",s.a.d),"public","inventory").am1(0)},
l(){var w,v=this.w
if(v!=null){w=this.gc8().aD(0,$.bL(),x.A).ch
w===$&&A.a()
w.O_(v)}this.ap()},
a6G(d,e,f){var w
A:{if("out"===f){w=A.W(e).ax.fy
break A}if("low"===f){w=D.asi
break A}w=C.SZ
break A}return w},
aES(d){var w
A:{if("out"===d){w="ausverkauft"
break A}if("low"===d){w="bald leer"
break A}w="verf\xfcgbar"
break A}return w},
u(d){var w=this,v=null,u=w.gc8().ao($.bwh().$1(w.a.d),x.bj)
return A.dd(A.ro(v,A.j(w.a.e,v,v,v,v,v,v,v)),v,A.dz(u,new B.bgF(w),new B.bgG(),new B.bgH(),!1,!0,!1,x.e,x.E),v,v,v)},
B8(d,e){return this.avh(d,e)},
avh(d,e){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$B8=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.k(A.hi(null,null,!0,null,new B.bgA(e,new A.bv(C.a8,$.ag()),d),d,null,!0,!0,x.B),$async$B8)
case 3:q=g
if(q==null||q===0){w=1
break}w=4
return A.k(t.gc8().aD(0,$.bwi().ghQ(),x.M).KP(q,e.a,e.b),$async$B8)
case 4:s=g
if(d.e==null){w=1
break}r=d.O(x.q).f
r.b2(A.c6(null,null,null,null,null,C.n,null,A.j(s?"Korrektur gebucht.":"Fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
case 1:return A.o(u,v)}})
return A.p($async$B8,v)}}
B.a7o.prototype={
u(d){return B.PQ("reported_at","maintenance",new B.aLk(),new B.aLl(),new B.aLm(),"maintenance_logs","Wartung")}}
B.BX.prototype={
W(){var w=$.ag()
return new B.VV(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.VV.prototype={
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
aFl(){var w,v,u,t,s,r=this,q=null,p=r.w.ga1()
p=p==null?q:p.hT()
if(p!==!0)return
p=r.c
p.toString
p=A.b4(p,!1)
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
return new A.ah(new A.aj(0,0,0,A.bx(d,v,x.m).w.f.d),A.ev(A.k3(v,A.ac(A.b([A.j("Wartung erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.Oz(new B.bgL(w),w.as),C.u,A.da(v,!1,w.x,D.aeq,v,v,2,!1,v,v,C.X,v,new B.bgM()),C.u,A.da(v,!1,w.y,D.ae5,v,v,2,!1,v,v,C.X,v,v),C.u,A.da(v,!1,w.z,D.aeR,v,v,1,!1,v,v,C.X,v,v),C.u,A.da(v,!1,w.Q,D.ae2,v,C.ez,1,!1,v,v,C.X,v,v),A.b0d(C.a7,new B.bgN(w),v,D.Zt,w.at),A.dk(C.dt,w.gaFk(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.Sf.prototype={
W(){return new B.as4()}}
B.as4.prototype={
u(d){var w,v,u=this,t=null,s=A.b([],x.hc)
for(w=x.fl,v=0;v<5;++v)s.push(new A.jm(v,t,A.j(D.akW[v],t,t,t,t,t,t,t),w))
w=x.B
return A.dd(D.a9u,t,A.ac(A.b([new A.ah(D.x1,A.ev(A.byV(new B.bp4(u),s,A.dD([u.w],w),w),t,t,t,C.ay),t),A.aA(u.asO(u.w),1)],x.p),C.k,t,C.f,C.h,0),t,t,t)},
asO(d){switch(d){case 0:return D.aO_
case 1:return D.aOQ
case 2:return D.aMy
case 3:return D.aPc
case 4:return D.aMU
default:return C.ar}}}
B.amJ.prototype={
df(d,e){return A.dz(e.ao($.bCh(),x.w),new B.bgp(e),new B.bgq(),new B.bgr(),!1,!0,!1,x.D,x.l)}}
B.alq.prototype={
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
try{v=w==null?j:A.o8(w)}catch(r){}q=v==null?j:C.e.cE(new A.aZ(a0,0,!1).hY(v).a,6e7)
a0=q==null
p=!a0&&q>10
t=x.g.a(e.h(f,"active_alarms"))
o=t==null?j:J.cg(t)
if(o==null)o=0
t=p?C.ak:C.m
n=A.aA(A.j(u+" \xb7 "+s,j,j,j,A.C(C.j,16,C.p),j,j,j),1)
if(p)m="offline ("+A.i(q)+"m)"
else m=a0?"unbekannt":"aktiv"
if(p)a0=C.mk
else a0=a0?C.ml:C.fB
l=p?D.aap:C.i2
k=x.p
l=A.ao(A.b([n,new A.j7(m,a0,l,j)],k),C.k,j,C.f,C.h,0,j,j)
a0=A.b([],k)
if(e.h(f,i)!=null)a0.push(new B.BW(D.aak,"Temperatur",A.i(e.h(f,i))+" \xb0C",!1,j))
if(e.h(f,h)!=null){n=e.h(f,h)
n=n==null?j:J.al(n)
a0.push(new B.BW(D.ab8,"T\xfcr",n==null?"?":n,!1,j))}if(e.h(f,g)!=null){f=A.fH(e.h(f,g))
a0.push(new B.BW(C.xW,"Kasse",$.d2().al(f),!1,j))}if(o>0)a0.push(new B.BW(D.ab0,"Alarme",""+o,!0,j))
return new A.ah(D.a7m,A.bz(j,A.ac(A.b([l,C.u,A.ll(C.cw,a0,C.dI,8,12)],k),C.C,j,C.f,C.h,0),j,j,C.aj,t,3),j)}}
B.BW.prototype={
u(d){var w=this,v=null,u=w.f?C.ak:C.j,t=A.aR(12),s=A.cU(C.ao,1)
return A.ba(v,A.ao(A.b([A.cp(w.c,u,v,16),C.b2,A.j(w.d+": ",v,v,v,A.C(C.q,11,C.l),v,v,v),A.j(w.e,v,v,v,A.C(u,13,C.p),v,v,v)],x.p),C.k,v,C.f,C.J,0,v,v),C.t,v,v,new A.b7(C.ae,v,s,t,v,v,C.G),v,v,v,v,C.l0,v,v,v)}}
B.aoT.prototype={
df(d,e){var w=null,v=e.ao($.bw5(),x.w),u=B.a5u(C.m,C.B,D.o0,D.aFM,new B.bjY(this,d,e))
return A.dd(w,w,A.dz(v,new B.bjZ(),new B.bk_(),new B.bk0(),!1,!0,!1,x.D,x.E),w,u,w)},
IH(d,e){return this.aHc(d,e)},
aHc(d,e){var w=0,v=A.q(x.H),u
var $async$IH=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kC(null,new B.bjX(),d,!0,null,null,x.y),$async$IH)
case 2:if(g===!0){u=$.bw5()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(u)}return A.o(null,v)}})
return A.p($async$IH,v)}}
B.aoS.prototype={
u(d){var w,v,u,t=null,s="is_active",r=this.c,q=J.V(r),p=q.h(r,"name")
p=p==null?t:J.al(p)
if(p==null)p=""
p=A.aA(A.j(p,t,t,t,A.C(C.j,15,C.p),t,t,t),1)
w=A.hZ(q.h(r,s))
w=w!==!1?"aktiv":"deaktiviert"
v=A.hZ(q.h(r,s))
v=v!==!1?C.fB:C.ml
u=x.p
v=A.b([A.ao(A.b([p,new A.j7(w,v,t,t)],u),C.k,t,C.f,C.h,0,t,t),C.b6,A.j("Adapter: "+A.i(q.h(r,"adapter"))+" \xb7 Uhr-Toleranz: "+A.i(q.h(r,"time_skew_max_s"))+" s",t,t,t,A.C(C.q,11,C.l),t,t,t)],u)
p=A.ak(q.h(r,"notes"))
if((p==null?t:p.length!==0)===!0){r=q.h(r,"notes")
r=r==null?t:J.al(r)
if(r==null)r=""
C.b.K(v,A.b([C.b6,A.j(r,t,t,t,A.C(C.aU,11,C.l),t,t,t)],u))}return new A.ah(C.dT,A.bz(t,A.ac(v,C.C,t,C.f,C.h,0),t,t,C.aj,t,3),t)}}
B.C7.prototype={
W(){var w=$.ag()
return new B.WL(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.WL.prototype={
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
j=j==null?null:j.hT()
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
if(j!=null)A.b4(j,!1).cC(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lf,v)},
u(d){var w=this,v=null
return new A.ah(new A.aj(0,0,0,A.bx(d,v,x.m).w.f.d),A.ev(A.k3(v,A.ac(A.b([A.j("Telemetrie-Provider anlegen",v,v,v,A.W(d).ok.r,v,v,v),C.K,A.da(v,!1,w.x,D.aep,v,v,1,!1,v,v,C.X,v,new B.bjU()),C.u,A.k0(D.ae7,w.Q,!1,D.alf,new B.bjV(w),v,x.N),C.u,A.da(v,!1,w.y,D.aeb,v,v,1,!0,v,v,C.X,v,new B.bjW()),C.u,A.da(v,!1,w.z,D.aeH,v,v,2,!1,v,v,C.X,v,v),C.K,A.dk(D.Zq,w.gCG(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.ajD.prototype={
df(d,e){var w=null,v=e.ao($.bCe(),x.w),u=B.a5u(C.m,C.B,D.o0,D.aI8,new B.b9w(this,d,e))
return A.dd(w,w,A.dz(v,new B.b9x(),new B.b9y(),new B.b9z(),!1,!0,!1,x.D,x.E),w,u,w)},
IJ(d,e){return this.aHk(d,e)},
aHk(d,e){var w=0,v=A.q(x.H),u
var $async$IJ=A.m(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kC(null,new B.b9v(),d,!0,null,null,x.y),$async$IJ)
case 2:if(g===!0){u=$.bCe()
if(e.e==null)A.T(A.a0(y.b))
e.gcv().cs(u)}return A.o(null,v)}})
return A.p($async$IJ,v)}}
B.ajC.prototype={
u(d){var w,v,u=null,t="firmware_version",s=this.c,r=J.V(s),q=x.h,p=q.a(r.h(s,"machine")),o=q.a(r.h(s,"provider"))
q=p==null
w=q?u:J.Z(p,"code")
w=A.i(w==null?"?":w)
q=q?u:J.Z(p,"name")
q=A.j(w+" \xb7 "+A.i(q==null?"":q),u,u,u,A.C(C.j,14,C.p),u,u,u)
w=o==null
v=A.i(w?u:J.Z(o,"name"))
q=A.b([q,C.bV,A.j("Provider: "+v+" ("+A.i(w?u:J.Z(o,"adapter"))+")",u,u,u,A.C(C.q,11,C.l),u,u,u),A.j("Ger\xe4t: "+A.i(r.h(s,"external_device_id")),u,u,u,A.C(C.q,11,C.l),u,u,u)],x.p)
if(r.h(s,t)!=null)q.push(A.j("Firmware: "+A.i(r.h(s,t)),u,u,u,A.C(C.q,11,C.l),u,u,u))
return new A.ah(C.dT,A.bz(u,A.ac(q,C.C,u,C.f,C.h,0),u,u,C.aj,u,3),u)}}
B.BA.prototype={
W(){var w=$.ag()
return new B.UI(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.UI.prototype={
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
j=j==null?null:j.hT()
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
if(j!=null)A.b4(j,!1).cC(!0)
t=2
w=6
break
case 4:t=3
i=s.pop()
p=A.a2(i)
j=r.c
if(j!=null)j.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lf,v)},
u(d){var w=this,v=null,u=w.gc8(),t=u.ao($.bw5(),x.w),s=u.ao($.bL(),x.A)
u=x.D
return new A.ah(new A.aj(0,0,0,A.bx(d,v,x.m).w.f.d),A.ev(A.k3(v,A.ac(A.b([A.j("IoT-Ger\xe4t registrieren",v,v,v,A.W(d).ok.r,v,v,v),C.K,A.yJ(new B.b9p(w),s.cW("machines").hj(0,"id, code, name").pf(0,"code").cr(new B.b9q(),u),u),C.u,A.dz(t,new B.b9r(w),new B.b9s(),new B.b9t(),!1,!0,!1,u,x.l),C.u,A.da(v,!1,w.x,D.aeD,v,v,1,!1,v,v,C.X,v,new B.b9u()),C.u,A.da(v,!1,w.y,D.aeG,v,v,1,!1,v,v,C.X,v,v),C.K,A.dk(D.aHR,w.gCG(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.Y8.prototype={
W(){return new B.arl()}}
B.arl.prototype={
u(d){var w,v=x.D
v=A.yJ(new B.bnV(this),this.gc8().ao($.bL(),x.A).cW("machines").hj(0,"id, code, name").pf(0,"code").cr(new B.bnW(),v),v)
w=this.w
return A.ac(A.b([new A.ah(C.D,v,null),A.aA(w==null?D.aMN:new B.ark(w,null),1)],x.p),C.k,null,C.f,C.h,0)}}
B.ark.prototype={
df(d,e){var w=x.D
return A.yJ(new B.bnR(this,e),e.ao($.bL(),x.A).cW("machine_slots").hj(0,"id, slot_code, product_id, unit_price_net, capacity, product:products(id, name, sku)").iE("machine_id",this.e).pf(0,"slot_code").cr(new B.bnS(),w),w)},
Ce(d,e,f){return this.aHn(d,e,f)},
aHn(d,e,f){var w=0,v=A.q(x.H),u=this
var $async$Ce=A.m(function(g,h){if(g===1)return A.n(h,v)
for(;;)switch(w){case 0:w=2
return A.k(A.kC(null,new B.bnO(u,f),d,!0,null,null,x.H),$async$Ce)
case 2:d.e5()
return A.o(null,v)}})
return A.p($async$Ce,v)}}
B.arj.prototype={
u(d){var w,v,u=null,t="unit_price_net",s=this.c,r=J.V(s),q=x.h.a(r.h(s,"product")),p=A.aR(12),o=r.h(s,"slot_code")
o=o==null?u:J.al(o)
if(o==null)o=""
p=A.ba(C.W,A.j(o,u,u,u,A.C(C.j,14,C.p),u,u,u),C.t,u,u,new A.b7(C.m,u,u,p,u,u,C.G),u,44,u,u,u,u,u,44)
o=q==null
if(o)w=u
else{w=J.Z(q,"name")
w=w==null?u:J.al(w)}if(w==null)w="\u2014 kein Produkt zugeordnet \u2014"
w=A.j(w,u,u,u,A.C(C.j,14,C.p),u,u,u)
o=o?u:J.Z(q,"sku")
o=A.i(o==null?"\u2014":o)
v=A.i(r.h(s,"capacity"))
if(r.h(s,t)==null)s="\u2014"
else{s=A.fH(r.h(s,t))
s=$.d2().al(s)}r=x.p
return new A.ah(C.j8,A.bz(u,A.ao(A.b([p,C.aF,A.aA(A.ac(A.b([w,A.j("SKU: "+o+" \xb7 Kapazit\xe4t: "+v+" \xb7 Preis: "+s,u,u,u,A.C(C.q,11,C.l),u,u,u)],r),C.C,u,C.f,C.h,0),1),C.y8],r),C.k,u,C.f,C.h,0,u,u),u,this.d,C.dD,u,3),u)}}
B.Cj.prototype={
W(){var w=$.ag()
return new B.Y7(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w),new A.bv(new A.cx("12",C.bb,C.aG),w))}}
B.Y7.prototype={
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
t.Q=A.ak(v.h(w,"product_id"))}},
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
i=i==null?null:i.hT()
if(i!==!0){w=1
break}q=r.gc8().aD(0,$.bL(),x.A)
t=4
i=r.a.d
o=C.c.aK(r.x.a.a)
n=r.Q
m=r.y.a.a
m=A.fT(A.ax(m,",","."))
l=A.iz(r.z.a.a,null)
if(l==null)l=12
k=x.z
w=7
return A.k(q.er("set_machine_slot",A.a4(["p_machine_id",i,"p_slot_code",o,"p_product_id",n,"p_unit_price_net",m,"p_capacity",l],x.N,k),k),$async$lf)
case 7:i=r.c
if(i!=null)A.b4(i,!1).fc()
t=2
w=6
break
case 4:t=3
h=s.pop()
p=A.a2(h)
i=r.c
if(i!=null)i.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j(A.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$lf,v)},
u(d){var w=this,v=null,u=w.gc8().ao($.bL(),x.A),t=A.bx(d,v,x.m).w,s=w.a.e==null?"Slot anlegen":"Slot bearbeiten",r=x.D
return new A.ah(new A.aj(0,0,0,t.f.d),A.ev(A.k3(v,A.ac(A.b([A.j(s,v,v,v,A.W(d).ok.r,v,v,v),C.K,A.da(v,!1,w.x,D.aec,v,v,1,!1,v,v,C.X,v,new B.bnL()),C.u,A.yJ(new B.bnM(w),u.cW("products").hj(0,"id, name, sku").iE("status","active").pf(0,"name").cr(new B.bnN(),r),r),C.u,A.da(v,!1,w.y,D.aew,v,C.ez,1,!1,v,v,C.X,v,v),C.u,A.da(v,!1,w.z,D.aeM,v,C.cZ,1,!1,v,v,C.X,v,v),C.K,A.dk(C.dt,w.gCG(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.ako.prototype={
df(d,e){return A.dz(e.ao($.bCf(),x.w),new B.bbh(e),new B.bbi(),new B.bbj(),!1,!0,!1,x.D,x.l)}}
B.akn.prototype={
u(d){var w,v,u,t,s,r=null,q="slot_code",p="quantity",o="unit_price_net",n="error_reason",m=this.c,l=J.V(m),k=l.h(m,"status"),j=k==null?r:J.al(k)
if(j==null)j=""
k=l.h(m,"event_type")
w=k==null?r:J.al(k)
if(w==null)w=""
v=x.h.a(l.h(m,"machine"))
A:{if("processed"===j){k=C.fB
break A}if("duplicate"===j){k=C.ml
break A}if("rejected"===j){k=C.mk
break A}k=C.kb
break A}u=v==null?r:J.Z(v,"code")
u=A.i(u==null?"?":u)
t=l.h(m,q)!=null?" \xb7 Slot "+A.i(l.h(m,q)):""
s=x.p
s=A.b([A.ao(A.b([A.aA(A.j(w+" \xb7 "+u+t,r,r,r,A.C(C.j,13,C.p),r,r,r),1),new A.j7(j,k,r,r)],s),C.k,r,C.f,C.h,0,r,r),C.bV,A.j("Occurred: "+B.bJ_(l.h(m,"occurred_at"))+" \xb7 Received: "+B.bJ_(l.h(m,"received_at")),r,r,r,A.C(C.q,11,C.l),r,r,r)],s)
if(l.h(m,p)!=null||l.h(m,o)!=null){k=l.h(m,p)
k=A.i(k==null?"\u2014":k)
if(l.h(m,o)!=null){u=A.fH(l.h(m,o))
u=" \xb7 Preis: "+$.d2().al(u)}else u=""
t=J.d(l.h(m,"dispense_confirmed"),!1)?" \xb7 Auswurf NICHT best\xe4tigt":""
s.push(A.j("Menge: "+k+u+t,r,r,r,A.C(C.aU,11,C.l),r,r,r))}k=A.ak(l.h(m,n))
if((k==null?r:k.length!==0)===!0)s.push(A.j("Fehler: "+A.i(l.h(m,n)),r,r,r,A.C(C.ak,11,C.N),r,r,r))
return new A.ah(C.j8,A.bz(r,A.ac(s,C.C,r,C.f,C.h,0),r,r,C.dD,r,3),r)}}
B.tP.prototype={
u(d){var w=null
return A.cZ(new A.ah(C.dd,A.ac(A.b([A.cp(this.c,C.q,w,40),C.Q,A.j(this.d,w,w,w,A.C(C.q,13,C.l),C.cF,w,w)],x.p),C.k,w,C.f,C.J,0),w),w,w)}}
B.adE.prototype={
u(d){return B.PQ("measured_at","temperature",new B.b0I(),new B.b0J(),new B.b0K(),"temperature_logs","Temperaturkontrolle")}}
B.Cu.prototype={
W(){var w=$.ag()
return new B.YB(new A.bl(null,x.n),new A.bv(C.a8,w),new A.bv(C.a8,w))}}
B.YB.prototype={
l(){var w=this.x,v=$.ag()
w.R$=v
w.S$=0
w=this.y
w.R$=v
w.S$=0
this.ap()},
aM9(){var w,v,u,t=this,s=t.w.ga1()
s=s==null?null:s.hT()
if(s!==!0)return
s=t.x.a.a
w=A.JL(A.ax(s,",","."))
s=t.c
s.toString
s=A.b4(s,!1)
v=t.z
u=C.c.aK(t.y.a.a)
if(u.length===0)u=null
s.cC(A.a4(["machine_id",v,"temperature_c",w,"corrective_action",u,"measured_at",new A.aZ(Date.now(),0,!1).dU()],x.N,x.X))},
u(d){var w=this,v=null
return new A.ah(new A.aj(0,0,0,A.bx(d,v,x.m).w.f.d),A.ev(A.k3(v,A.ac(A.b([A.j("Temperatur erfassen",v,v,v,A.W(d).ok.r,v,v,v),C.K,B.Oz(new B.bp6(w),w.z),C.u,A.da(v,!1,w.x,D.aer,v,D.aB4,1,!1,v,v,C.X,v,new B.bp7()),C.u,A.da(v,!1,w.y,D.aea,v,v,2,!1,v,v,C.X,v,v),C.K,A.dk(C.dt,w.gaM8(),v)],x.p),C.a9,v,C.f,C.J,0),w.w),v,C.aj,v,C.M),v)}}
B.a7l.prototype={
df(d,e){return A.dz(e.ao($.avS(),x.c),new B.aLf(this),new B.aLg(),new B.aLh(),!1,!0,!1,x.W,x.l)}}
B.Fy.prototype={
W(){return new B.Ww()},
aZ2(d){return this.d.$1(d)}}
B.Ww.prototype={
xj(){var w=0,v=A.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$xj=A.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new B.biL(q))
t=4
p=new B.aJf()
k=new A.a6C(C.C9,1600,null,80,!0)
k.arm(80,null,1600,!0)
w=7
return A.k($.bMW().qY(k,C.Ff),$async$xj)
case 7:o=e
if(o==null){r=[1]
w=5
break}w=8
return A.k(o.Yu(),$async$xj)
case 8:n=e
w=9
return A.k(q.gc8().aD(0,$.bD3(),x.Z).FA(0,"haccp",n,"image/jpeg",o.b),$async$xj)
case 9:m=e
q.a.aZ2(m)
if(q.c!=null)q.J(new B.biM(q,m))
r.push(6)
w=5
break
case 4:t=3
h=s.pop()
l=A.a2(h)
i=q.c
if(i!=null)i.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Foto-Upload fehlgeschlagen: "+A.i(l),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new B.biN(q))
w=r.pop()
break
case 6:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$xj,v)},
u(d){var w=this,v=null,u=w.w,t=u?v:w.gaIl()
if(u)u=D.azr
else u=A.cp(w.x==null?D.aa9:C.ji,v,v,v)
return A.fR(u,A.j(w.x==null?"Foto aufnehmen":"Foto angeh\xe4ngt",v,v,v,v,v,v,v),t,v)}}
B.PP.prototype={
W(){return new B.WH()},
aWz(d){return this.w.$1(d)},
aWy(d){return this.x.$1(d)},
aYa(d,e){return this.y.$2(d,e)}}
B.WH.prototype={
gjY(){var w=this.w
return w===$?this.w=F.aFl():w},
gIX(){var w=this,v=w.a
return new B.Al(v.e,v.f,w.gjY().a,A.bC(A.aU(w.gjY().b),A.bi(w.gjY().b),A.bU(w.gjY().b),23,59,59,0))},
Cj(){var w=0,v=A.q(x.H),u,t=this,s,r,q,p,o
var $async$Cj=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:o=t.a
o.toString
s=t.c
s.toString
r=t.gc8()
w=3
return A.k(o.aYa(s,r),$async$Cj)
case 3:q=e
if(q==null){w=1
break}w=4
return A.k(r.aD(0,$.bwi().ghQ(),x.M).k6(t.a.e,q),$async$Cj)
case 4:p=e
o=t.c
if(o==null){w=1
break}if(p){o=$.avW().$1(t.gIX())
if(r.e==null)A.T(A.a0(y.b))
r.gcv().cs(o)
t.c.O(x.q).f.b2(D.azW)}else o.O(x.q).f.b2(D.azX)
case 1:return A.o(u,v)}})
return A.p($async$Cj,v)},
Ck(){var w=0,v=A.q(x.H),u,t=this,s,r,q
var $async$Ck=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a.r
w=3
return A.k(t.gc8().aD(0,$.bwi().ghQ(),x.M).LD(s,t.gjY().a,t.gjY().b),$async$Ck)
case 3:r=e
q=t.c
if(q==null){w=1
break}if(r==null){q.O(x.q).f.b2(D.azR)
w=1
break}w=4
return A.k(A.bvk(r,s+"_nachweis.pdf"),$async$Ck)
case 4:case 1:return A.o(u,v)}})
return A.p($async$Ck,v)},
Cl(){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Cl=A.m(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=r.a.r
if(f==null){w=1
break}n=r.c
n.toString
w=3
return A.k(A.hi(null,null,!0,null,new B.bjK(r),n,null,!0,!0,x.y),$async$Cl)
case 3:if(a0!==!0){w=1
break}n=r.gc8()
m=A.dJ(n.aD(0,$.avW().$1(r.gIX()),x.w))
q=m==null?A.b([],x.t):m
t=5
p=new F.mH(n.aD(0,$.bL(),x.A))
n=D.apM.h(0,f)
if(n==null)n="haccp_temperature"
l=r.gjY()
k=r.gjY()
j=r.a.d
i=r.gjY()
h=$.dp()
i=h.al(i.a)
h=h.al(r.gjY().b)
w=8
return A.k(p.w7(n,l.a,k.b,A.a4(["protocol_kind",f,"count",J.cg(q)],x.N,x.z),j+" \xb7 "+i+" \u2013 "+h),$async$Cl)
case 8:n=r.c
if(n!=null)n.O(x.q).f.b2(E.mh)
t=2
w=7
break
case 5:t=4
e=s.pop()
o=A.a2(e)
n=r.c
if(n!=null)n.O(x.q).f.b2(A.c6(null,null,null,null,null,C.n,null,A.j("Fehler: "+A.i(o),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Cl,v)},
u(d){var w,v,u=this,t=null,s=u.gc8().ao($.avW().$1(u.gIX()),x.w),r=A.ro(t,A.j(u.a.d,t,t,t,t,t,t,t)),q=B.a5u(t,t,D.o0,D.Zu,u.gaIM()),p=x.p,o=A.b([],p)
u.a.toString
o.push(new B.yR(A.b([new B.pM(E.fS,"Freigabe anfordern",u.gaIO(),C.m,t,!1),new B.pM(C.i4,"PDF-Nachweis",u.gaIN(),C.ak,C.ak,!1)],x.x),D.x1,t))
w=u.gjY()
v=$.dp()
o.push(new A.ah(C.dD,A.ao(A.b([A.aA(A.j(v.al(w.a)+" \u2013 "+v.al(u.gjY().b),t,t,t,t,t,t,t),1),A.nq(D.lj,D.aHL,new B.bjP(u,d),t)],p),C.k,t,C.f,C.h,0,t,t),t))
o.push(D.kW)
o.push(A.aA(A.dz(s,new B.bjQ(u),new B.bjR(),new B.bjS(),!1,!0,!1,x.D,x.l),1))
return A.dd(r,t,A.ac(o,C.k,t,C.f,C.h,0),t,q,t)}}
B.a1y.prototype={
u(d){var w=null
return A.byL(!1,w,C.eG,w,this.as,w,w,C.t,w,w,w,w,w,w,w,w,w,w,!0,this.d,w,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,this.r,w,!1,w,w)}}
B.b6C.prototype={
L(){return"_ChipVariant."+this.b}}
B.a1z.prototype={
u(d){var w,v,u,t=null,s=A.bEd(d)
A.W(d)
w=this.x
v=w?s.ch:t
u=s.y
if(u==null){A.W(d)
u=!0}return A.byL(!1,t,C.eG,t,t,t,t,C.t,t,new B.b6D(d,!0,w,D.hC,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,C.zt,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,!0,this.d,t,v,t,t,t,t,this.r,t,t,w,s.f,t,t,t,u,t,t,!0,t,t)}}
B.b6D.prototype={
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
gd8(d){return new A.bo(new B.b6E(this),x.b)},
gca(d){var w
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
geJ(){var w,v,u=this
if(u.go===D.hC&&!u.fy)if(u.fx){w=u.gii()
v=w.to
if(v==null){v=w.B
w=v==null?w.k3:v}else w=v
w=new A.bm(w,1,C.U,-1)}else{w=u.gii().k3
w=new A.bm(A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255),1,C.U,-1)}else w=C.Bm
return w},
gfj(){var w,v,u=this,t=null
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
w=A.oc(C.fr,C.dU,A.P((w==null?C.aO:w).bh(0,v)/14-1,0,1))
w.toString
return w}}
B.fk.prototype={}
B.r5.prototype={}
B.fw.prototype={}
B.a48.prototype={
aCv(d,e){var w,v,u,t,s
if(!e)w=d===!0
else w=!0
for(v=this.CW,u=v.length,t=0;t<v.length;v.length===u||(0,A.G)(v),++t){s=v[t].b
if(s!=null&&w)s.$1(w)}},
a2d(d,e,f,g,h,i,j){var w,v,u,t,s=null,r=A.W(e).y2,q=r.x
if(q==null)q=24
w=r.Q
v=w==null?q:w
u=w==null?q/2:w
t=A.bD(s,s,s,new A.ah(new A.dW(v,0,u,0),A.cZ(A.bwR(s,!1,s,s,s,!1,s,s,f,s,s,s,s,s,j,d),s,s),s),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.P,s)
return new B.S6(D.Z7,g!=null?B.bI1(t,i,s,s,g,h):t,s)},
at0(d,e,f,g,h,i){return this.a2d(d,e,f,g,h,null,i)},
u(c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=A.W(c9),c6=B.bSx(c9),c7=c3.Q,c8=c7==null?c6.f:c7
if(c8==null)c8=c5.y2.f
w=c6.b
if(w==null)w=c5.y2.b
c7=c3.CW
v=C.b.ev(c7,new B.aB5())
u=v?new A.bd(c7,new B.aB6(),A.af(c7).i("bd<1>")):A.b([],x._)
t=J.cy(u)
s=t.ig(u,new B.aB7())
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
k=A.bH(o+(v?1:0),D.a2H,!1,x.eA)
j=A.a7d(c7.length+1,new B.aB8(c3,v,w,c8,c9,c6,c5,new A.bo(new B.aB9(c5),x.b),k),!0,x.cZ)
if(v){k[0]=new B.a5d(n+18+m)
o=j[0]
i=q?c4:r
o.c[0]=c3.at0(i,c9,new B.aBa(c3,q),c4,c4,!0)
for(o=c7.length,h=1,g=0;g<c7.length;c7.length===o||(0,A.G)(c7),++g){f=c7[g]
i=j[h]
e=f.b
d=e==null?c4:new B.aBb(f)
a0=f.r
if(a0==null)a0=w
i.c[0]=c3.a2d(!1,c9,e,d,a0,c4,!1);++h}a1=1}else a1=0
for(o=x.f0,a2=c3.y,a3=c3.x,i=x.d,a4=c3.as,e=x.p,d=x.k,a0=c3.fr,a5=l/2,a6=p/2,a7=0;a8=t.length,a7<a8;++a7){a9=t[a7]
A:{b0=0===a7
if(b0)b1=v
else b1=!1
if(b1){b1=a6
break A}if(b0){b1=p
break A}b1=a5
break A}b2=new A.dW(b1,0,a7===a8-1?p:a5,0)
if(a7===a0)k[a1]=D.afb
else k[a1]=D.afc
A.b2(d).E(0,C.H)
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
b7=b4}b4=b1?C.eg:C.aW
b8=c9.O(o)
b9=A.ba(b4,A.D_(new A.qe(new A.Rn(c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,C.Y6,c4,C.P,c4,c4,c4,c4),!1,!1,c4,!1,!1,new A.iB(C.ay,C.f,C.h,C.k,b5,C.bA,c4,0,b6,c4),c4),C.av,C.dC,!1,(b8==null?C.j6:b8).w.c3(b7)),C.t,c4,c4,c4,c4,a4,c4,c4,b2,c4,c4,c4)
a8.c[a1]=A.eD(!1,c4,!0,b9,c4,!0,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c8,c4,c4,c4,c4)
for(a8=c7.length,h=1,g=0;g<c7.length;c7.length===a8||(0,A.G)(c7),++g){f=c7[g]
c0=f.f[a7]
b4=j[h]
b5=f.b==null?c4:new B.aBc(f)
b6=f.r
if(b6==null)b6=w
b3=A.W(c9)
c9.O(i)
b8=A.W(c9)
b8=b8.y2.e
c1=b8==null?b3.y2.e:b8
if(c1==null){b8=b3.ok.z
b8.toString
c1=b8}b8=b1?C.eg:C.aW
c2=c9.O(o)
c2=(c2==null?C.j6:c2).w.c3(c1)
b9=A.ba(b8,new A.o9(c2.cN(c4),c4,!0,C.ea,c4,C.bz,c4,new A.E4(c0.a,c4),c4),C.t,c4,new A.av(0,1/0,a3,a2),c4,c4,c4,c4,c4,b2,c4,c4,c4)
if(b5!=null)b9=B.bI1(b9,c4,c4,c4,b5,b6)
b4.c[a1]=new B.S6(c4,b9,c4);++h}++a1}c7=c6.a
if(c7==null)c7=c5.y2.a
return A.ba(c4,A.dS(!1,C.a0,!0,c4,B.bZ6(c4,j,new A.j1(k,A.af(k).i("j1<1>")),D.Z6),C.t,c4,0,c4,c4,c4,c4,c4,C.f6),C.t,c4,c4,c7,c4,c4,c4,c4,c4,c4,c4,c4)}}
B.S7.prototype={
Aj(d){return new B.b0s(d)},
L4(d){this.amQ(d)
return!0}}
B.anG.prototype={
EB(d,e){return A.T(A.f5(null))},
EH(d,e){return A.T(A.f5(null))}}
B.anL.prototype={
d7(d){return A.T(A.f5(null))}}
B.GC.prototype={
W(){return new B.Ya()},
aYz(){return this.w.$0()}}
B.Ya.prototype={
aCa(){var w=this
if(w.d)return
w.J(new B.bnX(w))
w.a.aYz()
w.c.O(x.q).f.X_(D.azz)},
u(d){var w,v,u,t,s=this,r=null
A.W(d)
w=A.bJw(d)
v=A.bz1(d)
u=new B.bo_(s,v,w)
t=A.ql(r,r,r,r,r,r,r,r,r,r,r,r,u.$0(),r,r,r,r,r,r,r,r)
u=u.$0()
u=t.aRe(new B.bnY(s,v).$0(),u)
t=s.d?r:s.gaC9()
return A.d9(A.j(s.a.r,r,r,r,r,r,r,r),r,r,t,r,u)}}
B.qh.prototype={
j(d){var w=this.AI(0),v=this.b
v=v==null?"default vertical alignment":v.j(0)
return w+"; "+v}}
B.wj.prototype={
Wn(d,e){return null},
j(d){return"TableColumnWidth"}}
B.O_.prototype={
EH(d,e){var w,v,u,t,s
for(w=new A.fj(d.a(),d.$ti.i("fj<1>")),v=0;w.t();){u=w.b
t=u.gcB()
s=C.bj.e6(u.dy,1/0,t)
v=Math.max(v,s)}return v},
EB(d,e){var w,v,u,t,s
for(w=new A.fj(d.a(),d.$ti.i("fj<1>")),v=0;w.t();){u=w.b
t=u.gcm()
s=C.aT.e6(u.dy,1/0,t)
v=Math.max(v,s)}return v},
Wn(d,e){return this.a},
j(d){var w=this.a
return"IntrinsicColumnWidth(flex: "+A.i(w==null?null:C.e.ae(w,1))+")"}}
B.a5d.prototype={
EH(d,e){return this.a},
EB(d,e){return this.a},
j(d){return"FixedColumnWidth("+A.jT(this.a)+")"}}
B.a5s.prototype={
EH(d,e){return 0},
EB(d,e){return 0},
Wn(d,e){return 1},
j(d){return"FlexColumnWidth("+A.jT(1)+")"}}
B.wi.prototype={
L(){return"TableCellVerticalAlignment."+this.b}}
B.vZ.prototype={
saQ6(d){var w=this.a3
if(w===d)return
w.gZ(w)
this.a3=d
this.a7()},
saSd(d){if(this.a4===d)return
this.a4=d
this.a7()},
scH(d){if(this.ar===d)return
this.ar=d
this.a7()},
saPi(d,e){return},
saih(d){var w,v,u,t=this,s=t.aG
if(s==null?d==null:s===d)return
t.aG=d
s=t.bC
if(s!=null)for(w=s.length,v=0;v<w;++v){u=s[v]
if(u!=null)u.l()}s=t.aG
t.bC=s!=null?A.bH(s.length,null,!1,x.ea):null},
soL(d){if(d.k(0,this.b9))return
this.b9=d
this.be()},
saSe(d){if(this.aQ===d)return
this.aQ=d
this.a7()},
sYQ(d,e){return},
hk(d){if(!(d.b instanceof B.qh))d.b=new B.qh(C.r)},
fw(d){this.jU(d)
d.bj=C.axJ
d.e=d.a=d.r=!0},
qb(){this.GQ()
this.dc.a8(0)
this.cO.a8(0)},
rS(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=x.aO,b8=A.b([],b7),b9=b6.V,c0=J.l1(b9,x.d7)
for(w=x.cV,v=0;v<b9;++v){u=b6.U
t=A.b(new Array(u),w)
for(s=0;s<u;++s)t[s]=A.b([],b7)
c0[v]=t}r=new B.aW_()
q=new B.aVZ(b6)
p=new B.aVY(b6)
o=new B.aW0()
for(w=c3.length,n=b6.da,m=0;m<c3.length;c3.length===w||(0,A.G)(c3),++m){l=c3[m]
if(n.aE(0,l.b)){k=n.h(0,l.b)
j=k.a
i=k.b
if(j<b6.V&&i<b6.U)c0[j][i].push(l)}else{h=r.$1(l)
j=q.$1(h.b)
i=p.$1(h.a)
if(j!==-1&&i!==-1)c0[j][i].push(l)}}for(w=b6.bd,g=b6.cO,f=b6.dc,j=0;j<b6.V;j=a0){e=w[j]
d=b6.fy
d=(d==null?A.T(A.a0("RenderBox was not laid out: "+A.K(b6).j(0)+"#"+A.c8(b6))):d).a
a0=j+1
a1=w[a0]
a2=a1-e
if(a2===0)continue
a3=f.h(0,j)
if(a3==null){a3=A.wb(null,new B.aVW(b6,new A.H(0,e,d,a1)))
f.m(0,j,a3)}a4=A.b([],b7)
for(a1=a2+1e-10,a2=0+a2,i=0;i<b6.U;++i){a5=c0[j][i]
a6=a5.length
if(a6===0)continue
if(a6<=1)a7=C.b.gcI(a5).U!==C.zK&&C.b.gcI(a5).U!==C.Y6
else a7=!0
a8=A.ct()
if(!a7){a6=C.b.gcI(a5)
if(a8.b!==a8)A.T(A.Of(a8.a))
a8.b=a6}else{a6=g.cl(0,new B.Ig(j,i),new B.aVX())
a9=A.ii()
a9.bj=C.zK
a9.r=!0
a6.mk(0,a5,a9)
if(a8.b!==a8)A.T(A.Of(a8.a))
a8.b=a6}a6=b6.U
a9=b6.S
if(i===a6-1){a9.toString
b0=d-J.lE(a9,i)}else{a9.toString
a6=J.lE(a9,i+1)
a9=b6.S
a9.toString
b0=a6-J.lE(a9,i)}if(b0<=0)continue
if(a7){a6=a8.b
if(a6===a8)A.T(A.rA(a8.a))
a9=b6.S
a9.toString
a9=J.lE(a9,i)
b1=new Float64Array(16)
b2=new A.cH(b1)
b2.Gn()
b1[14]=0
b1[13]=0
b1[12]=a9
if(!A.aNX(a6.d,b2)){a9=A.OQ(b2)
a6.d=a9?null:b2
a6.j6()}a9=new A.H(0,0,0+b0,a2)
if(!a6.f.k(0,a9)){a6.f=a9
a6.j6()}}for(a6=a5.length,m=0;m<a5.length;a5.length===a6||(0,A.G)(a5),++m){l=a5[m]
n.m(0,l.b,new B.Ig(j,i))
b3=r.$1(l)
b4=b3.d>a1?-w[j]:0
b5=0
if(a7){if(b3.a>=b0){a9=b6.S
a9.toString
a9=J.bQo(J.lE(a9,i))
b5=a9}}else{a9=b3.c
b1=b6.S
b1.toString
if(a9<=J.lE(b1,i)){a9=b6.S
a9.toString
a9=J.lE(a9,i)
b5=a9}}if(b5!==0||b4!==0)o.$3(l,b5,b4)}a6=a8.b
if(a6===a8)A.T(A.rA(a8.a))
a6.x=i
a4.push(a6)}a1=A.ii()
a1.p4=j
a1.r=!0
a1.bj=C.Y5
a3.mk(0,a4,a1)
a1=new Float64Array(16)
a6=new A.cH(a1)
a6.Gn()
a1[14]=0
a1[13]=e
a1[12]=0
if(!A.aNX(a3.d,a6)){e=A.OQ(a6)
a3.d=e?null:a6
a3.j6()}e=new A.H(0,0,0+d,a2)
if(!a3.f.k(0,e)){a3.f=e
a3.j6()}b8.push(a3)}c1.mk(0,b8,c2)},
akT(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B
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
o.kB(w)}}++s}t.aB(0,o.gaSY())
o.U=d
o.V=C.e.h2(e.length,d)
n=A.Q(e,x.dE)
o.B=n
o.a7()},
a_F(d,e,f){var w,v=this,u=d+e*v.U,t=v.B[u]
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
r.fh(0)
w=r.bC
if(w!=null){for(v=w.length,u=0;u<v;++u){t=w[u]
if(t!=null)t.l()}r.bC=A.bH(r.aG.length,null,!1,x.ea)}for(w=r.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){s=w[u]
if(s!=null)s.aF(0)}},
cZ(d){var w,v,u,t
for(w=this.B,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t!=null)d.$1(t)}},
jg(){this.cZ(this.gNS())},
cf(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.EH(t.KC(v),1/0)}return w},
cd(d){var w,v,u,t=this
if(t.V*t.U===0)return 0
for(w=0,v=0;v<t.U;++v){u=t.a3.h(0,v)
if(u==null)u=t.a4
w+=u.EB(t.KC(v),1/0)}return w},
ce(d){var w,v,u,t,s,r,q,p,o,n=this
if(n.V*n.U===0)return 0
w=n.Hj(A.jl(1/0,d))
for(v=0,u=0;u<n.V;++u){for(t=0,s=0;r=n.U,s<r;++s){q=n.B[s+u*r]
if(q!=null){r=w[s]
p=q.gcK()
o=C.bp.e6(q.dy,r,p)
t=Math.max(t,o)}}v+=t}return v},
ck(d){return this.au(C.bB,d,this.gcL())},
hX(d){return this.dh},
KC(d){return new A.iq(this.aQ5(d),x.gN)},
aQ5(d){var w=this
return function(){var v=d
var u=0,t=1,s=[],r,q,p
return function $async$KC(e,f,g){if(f===1){s.push(g)
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
Hj(a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=x.gR,a5=A.bH(a3.U,0,!1,a4),a6=A.bH(a3.U,0,!1,a4),a7=A.bH(a3.U,null,!1,x.cD)
for(w=a8.b,v=0,u=0,t=0,s=0;r=a3.U,s<r;++s){q=a3.a3.h(0,s)
if(q==null)q=a3.a4
p=a3.KC(s)
o=q.EB(p,w)
a5[s]=o
v+=o
a6[s]=q.EH(p,w)
n=q.Wn(0,p)
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
ak8(d){var w=this.bd
return new A.H(0,w[d],this.gC(0).a,w[d+1])},
eb(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.V*m.U===0)return l
w=m.Hj(d)
for(v=x.L,u=l,t=0;t<m.U;++t){s=m.B[t]
r=A.h3(l,w[t])
if(s==null)continue
q=s.b
q.toString
p=v.a(q).b
if(p==null)p=m.aQ
A:{q=l
if(D.aAH===p){q=s.gwN()
o=C.fL.e6(s.dy,new A.aI(r,e),q)
q=o
break A}if(D.aAF===p||D.Z6===p||D.aAG===p||D.Z7===p||D.aAI===p)break A}if(q!=null)n=u==null||u<q
else n=!1
if(n)u=q}return u},
dD(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(l.V*l.U===0)return d.c2(C.ac)
w=l.Hj(d)
v=C.b.fA(w,0,new B.aW1())
for(u=x.L,t=0,s=0;s<l.V;++s){for(r=0,q=0;p=l.U,q<p;++q){o=l.B[q+s*p]
if(o!=null){p=o.b
p.toString
p=u.a(p).b
switch((p==null?l.aQ:p).a){case 3:return C.ac
case 0:case 1:case 2:case 5:p=A.h3(null,w[q])
n=o.gdn()
m=C.am.e6(o.dy,p,n)
r=Math.max(r,m.b)
break
case 4:break}}}t+=r}return d.c2(new A.I(v,t))},
cA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2="RenderBox was not laid out: ",a3=x.cT.a(A.L.prototype.ga6.call(a1)),a4=a1.V,a5=a1.U
if(a4*a5===0){a1.R=0
a1.fy=a3.c2(C.ac)
return}w=a1.Hj(a3)
v=x.gR
u=A.bH(a5,0,!1,v)
switch(a1.ar.a){case 0:u[a5-1]=0
for(t=a5-2;t>=0;--t){s=t+1
u[t]=u[s]+w[s]}a1.S=new A.cA(u,A.af(u).i("cA<1>"))
a1.R=C.b.ga2(u)+C.b.ga2(w)
break
case 1:u[0]=0
for(t=1;t<a5;++t){s=t-1
u[t]=u[s]+w[s]}a1.S=u
a1.R=C.b.gaf(u)+C.b.gaf(w)
break}s=a1.bd
C.b.a8(s)
a1.dh=null
for(r=x.L,q=0,p=0;p<a4;++p,q=e){s.push(q)
o=A.bH(a5,0,!1,v)
for(n=p*a5,m=0,l=!1,k=0,j=0,t=0;t<a5;++t){i=a1.B[t+n]
if(i!=null){h=i.b
h.toString
r.a(h)
h.d=p
g=h.b
switch((g==null?a1.aQ:g).a){case 3:i.dM(A.h3(null,w[t]),!0)
g=a1.ci
g.toString
f=i.Aa(g,!0)
g=i.fy
if(f!=null){k=Math.max(k,f)
j=Math.max(j,(g==null?A.T(A.a0(a2+A.K(i).j(0)+"#"+A.c8(i))):g).b-f)
o[t]=f
l=!0}else{m=Math.max(m,(g==null?A.T(A.a0(a2+A.K(i).j(0)+"#"+A.c8(i))):g).b)
h.a=new A.r(u[t],q)}break
case 0:case 1:case 2:case 5:i.dM(A.h3(null,w[t]),!0)
h=i.fy
m=Math.max(m,(h==null?A.T(A.a0(a2+A.K(i).j(0)+"#"+A.c8(i))):h).b)
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
g.a=new A.r(d,q+(m-(a0==null?A.T(A.a0(a2+A.K(i).j(0)+"#"+A.c8(i))):a0).b)/2)
break
case 2:d=u[t]
a0=i.fy
g.a=new A.r(d,e-(a0==null?A.T(A.a0(a2+A.K(i).j(0)+"#"+A.c8(i))):a0).b)
break
case 4:case 5:i.is(A.h3(m,w[t]))
g.a=new A.r(u[t],q)
break}}}}s.push(q)
v=a1.R
v===$&&A.a()
a1.fy=a3.c2(new A.I(v,q))},
ed(d,e){var w,v,u,t
for(w=this.B.length-1,v=x.O;w>=0;--w){u=this.B[w]
if(u!=null){t=u.b
t.toString
if(d.lj(new B.aW2(u),v.a(t).a,e))return!0}}return!1},
aR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.V*k.U===0)return
if(k.aG!=null){w=d.gdv(0)
for(v=k.bd,u=e.a,t=e.b,s=k.ghg(),r=0;r<k.V;++r){q=k.aG
if(q.length<=r)break
q=q[r]
if(q!=null){p=k.bC
if(p[r]==null)p[r]=q.Dq(s)
q=k.bC[r]
q.toString
p=v[r]
o=k.b9
n=k.fy
if(n==null)n=A.T(A.a0("RenderBox was not laid out: "+A.K(k).j(0)+"#"+A.c8(k)))
q.ia(w,new A.r(u,t+p),o.KL(new A.I(n.a,v[r+1]-p)))}}}for(v=x.O,u=e.a,t=e.b,m=0;s=k.B,m<s.length;++m){l=s[m]
if(l!=null){s=l.b
s.toString
s=v.a(s).a
d.eH(l,new A.r(s.a+u,s.b+t))}}}}
B.Ig.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
if(!(e instanceof B.Ig))return!1
return this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.ml.prototype={
j(d){var w,v=this.a
v=v!=null?"TableRow("+(v.j(0)+", "):"TableRow("
v+=this.b.j(0)+", "
w=this.c
v=(w.length===0?v+"no children":v+A.i(w))+")"
return v.charCodeAt(0)==0?v:v}}
B.lu.prototype={}
B.S5.prototype={
d7(d){return new B.arW(D.alF,A.em(x.dk),this,C.bc)},
bl(d){var w,v,u,t,s,r,q=this,p=q.c,o=p.length
p=o!==0?p[0].c.length:0
w=d.O(x.Q).w
v=A.CG(d,null)
u=x.B
t=x.cQ
s=x.eV
r=A.b([],x.eQ)
p=new B.vZ(D.alE,p,o,q.d,D.BP,w,q.r,v,q.w,null,A.z(u,t),A.z(u,s),A.z(t,s),r,new A.bs(),A.aM(x.cn))
p.bk()
o=A.b([],x.V)
C.b.sp(o,p.U*p.V)
p.B=o
p.saih(q.y)
return p},
by(d,e){var w,v=this
e.saQ6(v.d)
e.saSd(D.BP)
w=d.O(x.Q).w
e.scH(w)
e.saPi(0,v.r)
e.saih(v.y)
e.soL(A.CG(d,null))
e.saSe(v.w)
e.sYQ(0,null)}}
B.arW.prototype={
gai(){return x.S.a(A.bW.prototype.gai.call(this))},
i8(d,e){var w,v,u=this,t={}
u.p2=!0
u.r8(d,e)
t.a=-1
w=u.e
w.toString
w=x.de.a(w).c
v=A.af(w).i("ad<1,lu>")
t=A.Q(new A.ad(w,new B.boW(t,u),v),v.i("aw.E"))
t.$flags=1
u.p1=t
u.aaP()
u.p2=!1},
m5(d,e){var w=x.S
w.a(A.bW.prototype.gai.call(this))
if(!(d.b instanceof B.qh))d.b=new B.qh(C.r)
if(!this.p2)w.a(A.bW.prototype.gai.call(this)).a_F(e.a,e.b,d)},
mc(d,e,f){},
ng(d,e){x.S.a(A.bW.prototype.gai.call(this)).a_F(e.a,e.b,null)},
dm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.p2=!0
w=x.am
v=A.z(x.f9,w)
for(u=f.p1,t=u.length,s=0;s<u.length;u.length===t||(0,A.G)(u),++s){r=u[s]
q=r.a
if(q!=null)v.m(0,q,r.b)}u=f.p1
t=C.b.gY(u)
p=new A.hf(t,new B.boX(),A.af(u).i("hf<1>"))
o=A.b([],x.R)
n=A.b2(w)
for(w=e.c,u=f.p3,q=x.bs,m=0;m<w.length;++m){r=w[m]
l=r.a
k=l==null
if(!k&&v.aE(0,l)){k=v.h(0,l)
k.toString
n.E(0,k)
j=k}else j=k&&p.t()?t.gN(0).b:D.alG
k=r.c
i=k.length
h=A.b(new Array(i),q)
for(g=0;g<i;++g)h[g]=new B.Jj(g,m)
o.push(new B.lu(l,f.Z7(j,k,u,h)))}while(p.t())f.Ot(t.gN(0).b,C.yB,u)
for(w=v.$ti.i("cj<2>"),t=new A.cj(v,w).gY(0),w=new A.hf(t,new B.boY(n),w.i("hf<t.E>"));w.t();)f.Ot(t.gN(0),C.yB,u)
f.p1=o
f.aaP()
u.a8(0)
f.pD(0,e)
f.p2=!1},
aaP(){var w=x.S.a(A.bW.prototype.gai.call(this)),v=this.p1,u=v.length!==0?v[0].b.length:0,t=A.af(v).i("hp<1,J>")
v=A.Q(new A.hp(v,new B.boU(),t),t.i("t.E"))
w.akT(u,v)},
cZ(d){var w,v,u,t
for(w=this.p1,v=A.af(w),w=new A.mX(C.b.gY(w),new B.boZ(),C.iW,v.i("mX<1,bM>")),u=this.p3,v=v.i("bM");w.t();){t=w.d
if(t==null)t=v.a(t)
if(!u.n(0,t))d.$1(t)}},
kH(d){this.p3.E(0,d)
this.lL(d)
return!0}}
B.S6.prototype={
u(d){var w=null
return new B.arV(this.c,A.bD(w,w,w,this.d,!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.zK,w,w,w,w,w,w,w,w,C.P,w),w)}}
B.arV.prototype={
uW(d){var w,v=d.b
v.toString
x.L.a(v)
w=this.f
if(v.b!=w){v.b=w
v=d.gbY(d)
if(v!=null)v.a7()}}}
B.Jj.prototype={
k(d,e){if(e==null)return!1
if(J.ai(e)!==A.K(this))return!1
return e instanceof B.Jj&&this.a===e.a&&this.b===e.b},
gA(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.auD.prototype={}
B.aJf.prototype={}
B.kc.prototype={
L(){return"PostgresChangeFilterType."+this.b},
gb0q(){var w,v=this
A:{if(D.X_===v){w="in"
break A}if(D.avl===v){w="is"
break A}if(D.ave===v){w="isdistinct"
break A}if(D.WZ===v||D.avb===v||D.avf===v||D.avg===v||D.avh===v||D.avi===v||D.avj===v||D.avk===v||D.avc===v||D.avd===v){w=v.b
break A}w=null}return w}}
B.aaw.prototype={
j(d){var w=this,v=w.a
if(v===D.X_)return w.b+"=in.("+A.i(x.hf.a(w.c).eQ(0,new B.aRn(),x.N).cg(0,","))+")"
return w.b+"="+v.gb0q()+"."+B.bGV(w.c)}}
var z=a.updateTypes(["R<~>()","~()","F(F)","A(r5)","R<~>(a3<f,@>,f{askNote:A})","xx(y)","A(fF)","Ci(y)","f(f?)","Bq(y)","~(u)","Bt(y)","wh(dl<wh>)","HG(y,u)","BB(y)","BT(y)","BK(y)","Im(y,D,bJ?)","zr(y)","BX(y)","C7(y)","BA(y)","Cj(y)","Cu(y)","+color,label(E,f)(f)","ml(u)","H()(J)","A(y)","R<v<a3<f,@>>>(ck<v<a3<f,@>>>,Al)","A(ml)","k_?(ml)","lu(ml)","A(lu)","t<J>(lu)","v<bM>(lu)","zt(f3<D?>)","+icon,label(a7,f)(f)","mH(dl<mH>)"])
B.bvu.prototype={
$1(d){return new B.wh(d.ao($.bL(),x.A))},
$S:z+12}
B.bt4.prototype={
$1(d){return this.ajo(d)},
ajo(d){var w=0,v=A.q(x.C),u
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:w=3
return A.k(d.ao($.um().gaeW(),x.fY),$async$$1)
case 3:if(f==null){u=A.b2(x.N)
w=1
break}u=d.ao($.qM(),x.cA).qB()
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:968}
B.buQ.prototype={
$1(d){return d.ao($.CM(),x.K).qH()},
$S:969}
B.btZ.prototype={
$2(d,e){return d.ao($.CM(),x.K).qy(e)},
$S:970}
B.buT.prototype={
$2(d,e){return d.ao($.CM(),x.K).MN(e.b,e.c,e.a,e.d)},
$S:z+28}
B.aLo.prototype={
$0(){return this.a.r.aD(0,$.CM(),x.K).k6(this.b,this.c)},
$S:2}
B.aLp.prototype={
$0(){var w=this
return w.a.r.aD(0,$.CM(),x.K).KR(w.d,w.b,w.c,w.e)},
$S:2}
B.aLq.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.k(u.b.r.aD(0,$.CM(),x.K).LE(u.d,u.c,u.e),$async$$0)
case 2:t.a=e
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.aLv.prototype={
$0(){return C.bF},
$S:21}
B.aLu.prototype={
$2(d,e){var w=null
return A.cZ(new A.ah(C.dd,A.j(A.i(d),w,w,w,A.C(C.aU,14,C.l),w,w,w),w),w,w)},
$S:33}
B.aLt.prototype={
$1(d){var w=this.a.at9(d)
if(w.length===0)return new B.akj(null)
return new B.ang(w,null)},
$S:971}
B.aLs.prototype={
$1(d){return d.e},
$S:z+6}
B.bhC.prototype={
$2(d,e){var w,v,u,t,s=e.b<500?2:3,r=A.b([],x.p)
for(w=this.a.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
r.push(new B.OW(t.c,t.a,t.b,new B.bhB(d,t),t.x,t.f,t.r,t.w,null))}return A.a5Z(1.05,r,s,12,12,C.jU,!0)},
$S:104}
B.bhB.prototype={
$0(){var w=x.z
return A.b4(this.a,!1).ep(A.eF(new B.bhA(this.b),null,w),w)},
$S:0}
B.bhA.prototype={
$1(d){return this.a.d},
$S:24}
B.buC.prototype={
$1(d){return J.d(J.Z(d,"kostenart"),this.a.a)},
$S:70}
B.buD.prototype={
$2(d,e){return d+B.JE(J.Z(e,"betrag_brutto"))},
$S:71}
B.b3B.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b3C.prototype={
$0(){var w=this.a
w.z=!0
w.Q=null},
$S:0}
B.b3D.prototype={
$0(){return this.a.z=!1},
$S:0}
B.b3x.prototype={
$0(){var w,v=this.a,u=v.x
u.toString
w=v.y
return B.bB7(v.gaMU(),u,"B\xf6rdesnack24 GbR",w,"102/178/01635","DE 458804058")},
$S:0}
B.b3A.prototype={
$1(d){var w=null,v=this.a,u=A.j("Die Anlage PKW-Kosten "+v.gpR()+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach beidseitiger Freigabe wird sie mit den hinterlegten Unterschriften abgeschlossen. Fortfahren?",w,w,w,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.b3y(v),w,w),A.dk(E.mp,new B.b3z(v),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,u,E.mq)},
$S:44}
B.b3y.prototype={
$0(){var w=this.a.c
w.toString
A.b4(w,!1).cC(!1)
return null},
$S:0}
B.b3z.prototype={
$0(){var w=this.a.c
w.toString
A.b4(w,!1).cC(!0)
return null},
$S:0}
B.bfN.prototype={
$1(d){return this.a.d.$1(this.b)},
$S:8}
B.bbW.prototype={
$0(){var w=this
return w.a.uA(w.b,w.c,w.d)},
$S:0}
B.bbX.prototype={
$0(){return this.a.x9(this.b,this.c)},
$S:0}
B.bbY.prototype={
$0(){return this.a.xa(this.b,this.c)},
$S:0}
B.bbP.prototype={
$1(d){return new A.li(new B.bbO(this.a,this.b,this.c),null)},
$S:65}
B.bbO.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=A.b([],x.I)
for(w=D.lW.ghZ(D.lW),w=w.gY(w),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dV(u.a,A.j(u.b,t,t,t,t,t,t,t),C.aW,t,v))}w=x.p
s=A.ac(A.b([A.k0(D.Fj,r,!1,q,new B.bbK(s,e),t,x.N),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dO(),this.b,t,t,t,t,t,2,D.Fh,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,C.ez,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.D,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ad,t,C.X,t,t,t,t),A.dH(t,C.aw,!1,t,!0,C.n,t,A.dO(),this.c,t,t,t,t,t,2,D.Fi,C.a4,!0,t,!0,t,!1,t,C.aA,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,C.D,t,t,t,t,t,t,t,t,t,t,t,t,!0,C.ad,t,C.X,t,t,t,t)],w),C.k,t,C.f,C.J,16)
return A.is(A.b([A.d9(D.Zo,t,t,new B.bbL(d),t,t),A.d9(C.c_,t,t,new B.bbM(d),t,t),A.dk(C.dt,new B.bbN(d),t)],w),t,s,D.aHM)},
$S:74}
B.bbK.prototype={
$1(d){return this.b.$1(new B.bbJ(this.a,d))},
$S:12}
B.bbJ.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bbL.prototype={
$0(){A.b4(this.a,!1).cC("streichen")
return null},
$S:0}
B.bbM.prototype={
$0(){A.b4(this.a,!1).cC("abbrechen")
return null},
$S:0}
B.bbN.prototype={
$0(){A.b4(this.a,!1).cC("speichern")
return null},
$S:0}
B.bbI.prototype={
$1(d){var w=null,v=A.j("Kilometerst\xe4nde "+this.a.f,w,w,w,w,w,w,w),u=x.p,t=A.ac(A.b([A.dH(w,C.aw,!1,w,!0,C.n,w,A.dO(),this.b,w,w,w,w,w,2,D.aey,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cZ,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w),A.dH(w,C.aw,!1,w,!0,C.n,w,A.dO(),this.c,w,w,w,w,w,2,D.aeI,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,C.cZ,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w)],u),C.k,w,C.f,C.J,16)
return A.is(A.b([A.d9(C.c_,w,w,new B.bbG(d),w,w),A.dk(C.dt,new B.bbH(d),w)],u),w,t,v)},
$S:44}
B.bbG.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.bbH.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.bbV.prototype={
$1(d){var w=this
return new A.li(new B.bbU(w.a,w.b,w.c,w.d),null)},
$S:65}
B.bbU.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=A.j("Kosten "+A.i(J.Z(t.b.e,"kennzeichen")),s,s,s,s,s,s,s),q=t.a,p=q.a,o=A.b([],x.I)
for(w=D.lW.ghZ(D.lW),w=w.gY(w),v=x.r;w.t();){u=w.gN(w)
o.push(new A.dV(u.a,A.j(u.b,s,s,s,s,s,s,s),C.aW,s,v))}w=x.p
q=A.ac(A.b([A.k0(D.Fj,p,!1,o,new B.bbR(q,e),s,x.N),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dO(),t.c,s,s,s,s,s,2,D.Fh,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,C.ez,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.D,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ad,s,C.X,s,s,s,s),A.dH(s,C.aw,!1,s,!0,C.n,s,A.dO(),t.d,s,s,s,s,s,2,D.Fi,C.a4,!0,s,!0,s,!1,s,C.aA,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.D,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ad,s,C.X,s,s,s,s)],w),C.k,s,C.f,C.J,16)
return A.is(A.b([A.d9(C.c_,s,s,new B.bbS(d),s,s),A.dk(D.Zv,new B.bbT(d),s)],w),s,q,r)},
$S:74}
B.bbR.prototype={
$1(d){return this.b.$1(new B.bbQ(this.a,d))},
$S:12}
B.bbQ.prototype={
$0(){var w=this.b
if(w==null)w=this.a.a
return this.a.a=w},
$S:0}
B.bbS.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.bbT.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.bbE.prototype={
$0(){return this.a.x_(this.b,this.c)},
$S:0}
B.bbF.prototype={
$1(d){var w=this
return w.a.ux(w.b,w.c,w.d)},
$S:68}
B.bbv.prototype={
$1(d){var w=this
return new A.li(new B.bbu(w.a,w.b,w.c,w.d),null)},
$S:65}
B.bbu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fR(D.Fb,A.j($.dp().al(k),n,n,n,n,n,n,n),new B.bbp(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dO(),o.c,n,n,n,n,n,2,D.Fn,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dO(),o.d,n,n,n,n,n,2,D.Fk,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.ez,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.b8(l,l.gp(0),s.i("b8<an.E>")),r=x.r,s=s.i("an.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dV(A.i(p.h(q,"id")),A.j(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.ev(A.ac(A.b([k,w,v,A.k0(D.Fl,u,!1,t,new B.bbq(m,e),n,x.N)],l),C.a9,n,C.f,C.J,16),n,n,n,C.M)
return A.is(A.b([A.d9(D.Zo,n,n,new B.bbr(d),n,n),A.d9(C.c_,n,n,new B.bbs(d),n,n),A.dk(C.dt,new B.bbt(d),n)],l),n,m,D.aGv)},
$S:74}
B.bbp.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.k(A.pb(u.c,A.bC(r,1,1,0,0,0,0),null,s,A.bC(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbo(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbo.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbq.prototype={
$1(d){return this.b.$1(new B.bbn(this.a,d))},
$S:12}
B.bbn.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbr.prototype={
$0(){A.b4(this.a,!1).cC("streichen")
return null},
$S:0}
B.bbs.prototype={
$0(){A.b4(this.a,!1).cC("abbrechen")
return null},
$S:0}
B.bbt.prototype={
$0(){A.b4(this.a,!1).cC("speichern")
return null},
$S:0}
B.bbD.prototype={
$1(d){var w=this
return new A.li(new B.bbC(w.a,w.b,w.c,w.d),null)},
$S:65}
B.bbC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=m.a
k=A.fR(D.Fb,A.j($.dp().al(k),n,n,n,n,n,n,n),new B.bby(m,l,d,e),n)
w=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dO(),o.c,n,n,n,n,n,2,D.Fn,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
v=A.dH(n,C.aw,!1,n,!0,C.n,n,A.dO(),o.d,n,n,n,n,n,2,D.Fk,C.a4,!0,n,!0,n,!1,n,C.aA,n,n,n,n,n,C.ez,n,n,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,C.D,n,n,n,n,n,n,n,n,n,n,n,n,!0,C.ad,n,C.X,n,n,n,n)
u=m.b
t=A.b([],x.I)
for(l=l.f,s=l.$ti,l=new A.b8(l,l.gp(0),s.i("b8<an.E>")),r=x.r,s=s.i("an.E");l.t();){q=l.d
if(q==null)q=s.a(q)
p=J.V(q)
t.push(new A.dV(A.i(p.h(q,"id")),A.j(A.i(p.h(q,"kennzeichen")),n,n,n,n,n,n,n),C.aW,n,r))}l=x.p
m=A.ev(A.ac(A.b([k,w,v,A.k0(D.Fl,u,!1,t,new B.bbz(m,e),n,x.N)],l),C.a9,n,C.f,C.J,16),n,n,n,C.M)
return A.is(A.b([A.d9(C.c_,n,n,new B.bbA(d),n,n),A.dk(D.Zv,new B.bbB(d),n)],l),n,m,D.aG7)},
$S:74}
B.bby.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
r=u.b.r
w=2
return A.k(A.pb(u.c,A.bC(r,1,1,0,0,0,0),null,s,A.bC(r,12,31,0,0,0,0),null),$async$$0)
case 2:q=e
if(q!=null)u.d.$1(new B.bbx(t,q))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bbx.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bbz.prototype={
$1(d){return this.b.$1(new B.bbw(this.a,d))},
$S:12}
B.bbw.prototype={
$0(){var w=this.b
if(w==null)w=this.a.b
return this.a.b=w},
$S:0}
B.bbA.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.bbB.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.bq7.prototype={
$1(d){var w=J.Z(d,"image_url")
return A.i(w==null?"":w).length===0},
$S:70}
B.bq8.prototype={
$1(d){return A.i(J.Z(d,"full_name"))},
$S:41}
B.boa.prototype={
$1(d){var w=J.Z(x.f.a(d),"name")
return A.i(w==null?"":w)},
$S:39}
B.bob.prototype={
$1(d){return d.length!==0},
$S:16}
B.awp.prototype={
$0(){var w=x.z
return A.b4(this.a,!1).ep(A.eF(new B.awo(),null,w),w)},
$S:0}
B.awo.prototype={
$1(d){return D.a_F},
$S:z+5}
B.bra.prototype={
$1(d){return new F.mH(d.ao($.bL(),x.A))},
$S:z+37}
B.br9.prototype={
$1(d){return d.ao($.bw_(),x.u).aWR(0)},
$S:52}
B.aCc.prototype={
$0(){return C.bF},
$S:21}
B.aCb.prototype={
$2(d,e){var w=null
return A.cZ(new A.ah(C.dd,A.j(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:33}
B.aCa.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMS
else{w=A.b([],x.p)
for(v=v.gY(d);v.t();)w.push(new B.ah5(v.gN(v),null))
v=A.ie(A.dF(w,C.D,null,C.M,!1),C.m,new B.aC9(this.a))}return v},
$S:85}
B.aC9.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bvZ()
if(s.e==null)A.T(A.a0(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b3O.prototype={
$1(d){return d==null?null:A.eQ(J.al(d))},
$S:976}
B.b3N.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(!j.b){w=j.c.O(x.q).f
v=j.d
if(v==="rejected")v="Diese Freigabe wurde abgelehnt."
else v=v==="cancelled"?"Diese Freigabe wurde abgebrochen.":"Signiertes PDF wird noch erzeugt \u2026"
w.b2(A.c6(i,i,i,i,i,C.n,i,A.j(v,i,i,i,i,i,i,i),i,C.I,i,i,i,i,i,i,i,i,i,i))
return}if(j.e==="inventory_fifo"){w=j.a.e
v=J.V(w)
u=v.h(w,"snapshot")
if(x.f.b(u)){t=J.V(u)
s=x.g
r=s.a(t.h(u,"movements"))
if(r==null)r=C.bl
q=x.P
p=J.cE(r,q)
t=s.a(t.h(u,"lots"))
o=J.cE(t==null?C.bl:t,q)
t=s.a(v.h(w,"partner_signatures"))
n=J.cE(t==null?C.bl:t,q)
t=s.a(v.h(w,"decisions"))
m=J.cE(t==null?C.bl:t,q)
t=v.h(w,"period_from")
t=t==null?i:J.al(t)
l=A.eQ(t==null?"":t)
if(l==null)l=new A.aZ(Date.now(),0,!1)
w=v.h(w,"period_to")
w=w==null?i:J.al(w)
k=A.eQ(w==null?"":w)
B.buE(m,l,o,p,n,k==null?new A.aZ(Date.now(),0,!1):k)
return}}w=j.f
if(w!=null&&w.length!==0)A.mC(A.cm(w,0,i),C.en,"_blank")
else j.a.Cb(j.c,j.r,j.w)},
$S:0}
B.b3L.prototype={
$0(){return this.a.uo(this.b,this.c,"approved")},
$S:0}
B.b3M.prototype={
$0(){return this.a.uo(this.b,this.c,"rejected")},
$S:0}
B.b3K.prototype={
$0(){return A.uG(new A.ps(this.a))},
$S:0}
B.b3I.prototype={
$1(d){var w=null,v=this.a,u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dO(),v,w,w,w,w,w,2,D.aeA,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w),t=this.b
return A.is(A.b([A.d9(C.c_,w,w,new B.b3G(t),w,w),A.dk(C.mr,new B.b3H(v,t),w)],x.p),w,u,D.aGn)},
$S:44}
B.b3G.prototype={
$0(){A.b4(this.a,!1).cC(null)
return null},
$S:0}
B.b3H.prototype={
$0(){var w=C.c.aK(this.a.a.a)
if(w.length<3)return
A.b4(this.b,!1).cC(w)},
$S:0}
B.b3J.prototype={
$1(d){return D.aPb},
$S:z+7}
B.bnn.prototype={
$0(){var w=this.a,v=this.b
w.w=!v.gZ(v)?v.ga2(v):null
w.x=!1},
$S:0}
B.bno.prototype={
$0(){var w=this.a
w.z=A.i(this.b)
w.x=!1},
$S:0}
B.bns.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bnt.prototype={
$0(){var w=this.b,v=this.c
w=w==null?v:v+"\n"+w
return this.a.z=w},
$S:0}
B.bnu.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bnv.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bnw.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bnx.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bny.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bnz.prototype={
$0(){return this.a.z=A.i(this.b)},
$S:0}
B.bnA.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bnE.prototype={
$3(d,e,f){return D.aHx},
$S:977}
B.bnF.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.bnG.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.b4f.prototype={
$0(){return this.a.x=!0},
$S:0}
B.b4g.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.b4h.prototype={
$0(){return this.a.x=!1},
$S:0}
B.b5R.prototype={
$0(){var w=this.a
return w.w=w.wL()},
$S:0}
B.b5Q.prototype={
$1(d){return C.c.cX(C.e.j(d),2,"0")},
$S:62}
B.b5W.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b5S(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b5S.prototype={
$0(){var w=this.a
return w.w=w.wL()},
$S:0}
B.b5V.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.c
if(p!=null)return A.dF(A.b([A.bz(C.ak,A.j("K\xfcndigungen konnten nicht geladen werden: "+A.i(p),q,q,q,q,q,q,q),C.eI,q,C.D,q,3)],x.p),C.aj,q,C.M,!1)
p=e.b
if(p==null)return C.bF
w=J.cy(p)
v=w.ig(p,new B.b5T()).gp(0)
u=A.j("Eingegangene K\xfcndigungen",q,q,q,A.c0(C.j,22,C.p),q,q,q)
t=w.gZ(p)?"Bisher sind keine K\xfcndigungen eingegangen.":""+v+" offen \xb7 "+w.gp(p)+" gesamt. Der Zugang wurde jeweils automatisch per E-Mail best\xe4tigt (\xa7 312k Abs. 2 BGB)."
s=x.p
t=A.b([D.a8C,C.bV,u,C.Q,A.j(t,q,q,q,A.C(C.q,13,C.l),q,q,q),C.K],s)
for(p=w.gY(p),w=this.a,u=w.gaxT();p.t();){r=p.gN(p)
C.b.K(t,A.b([new B.ai1(r,u,new B.b5U(w,r),q),C.u],s))}return A.dF(t,C.aj,q,C.M,!1)},
$S:348}
B.b5T.prototype={
$1(d){return J.Z(d,"processed_at")==null},
$S:70}
B.b5U.prototype={
$0(){return this.a.Ir(A.aG(J.Z(this.b,"id")))},
$S:0}
B.ayU.prototype={
$1(d){return"Netto: "+A.i(J.Z(d,"net_amount"))+" \u20ac"},
$S:41}
B.ayT.prototype={
$1(d){var w=J.V(d),v=w.h(d,"collected_at")
v=v==null?"":C.c.a_(C.c.iI(J.al(v),"T"," "),0,16)
return v+" \xb7 Brutto "+A.i(w.h(d,"amount_gross"))+" \u20ac \xb7 Wechselgeld "+A.i(w.h(d,"change_amount"))+" \u20ac"},
$S:41}
B.ayV.prototype={
$2(d,e){return A.kC(null,new B.ayS(),d,!0,null,null,x.P)},
$S:83}
B.ayS.prototype={
$1(d){return D.aM6},
$S:z+9}
B.b6_.prototype={
$1(d){var w=this.a
return w.J(new B.b5Z(w,d))},
$S:12}
B.b5Z.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b60.prototype={
$1(d){var w=d==null?"":d
return A.fT(A.ax(w,",","."))==null?"Betrag eingeben":null},
$S:15}
B.azz.prototype={
$1(d){var w="cleaning_type",v=J.V(d),u=D.apK.h(0,v.h(d,w))
return u==null?A.i(v.h(d,w)):u},
$S:41}
B.azy.prototype={
$1(d){var w,v=J.V(d),u=v.h(d,"cleaned_at")
u=u==null?"":C.c.a_(C.c.iI(J.al(u),"T"," "),0,16)
w=v.h(d,"agent")!=null?" \xb7 "+A.i(v.h(d,"agent")):""
v=v.h(d,"notes")!=null?"\n"+A.i(v.h(d,"notes")):""
return u+w+v},
$S:41}
B.azA.prototype={
$2(d,e){return A.kC(null,new B.azx(),d,!0,null,null,x.P)},
$S:83}
B.azx.prototype={
$1(d){return D.aMg},
$S:z+11}
B.b6N.prototype={
$1(d){var w=this.a
return w.J(new B.b6M(w,d))},
$S:12}
B.b6M.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b6O.prototype={
$1(d){var w=this.a
return w.J(new B.b6L(w,d))},
$S:12}
B.b6L.prototype={
$0(){var w=this.b
if(w==null)w="exterior"
return this.a.Q=w},
$S:0}
B.b6P.prototype={
$1(d){return this.a.as=d},
$S:31}
B.b70.prototype={
$1(d){var w=null,v=A.j(this.a==="resolved"?"Reklamation erledigen":"Reklamation ablehnen",w,w,w,w,w,w,w),u=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dO(),this.b,w,w,w,w,w,2,D.aed,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,w,w,300,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.b6Z(d),w,w),A.dk(C.dt,new B.b7_(d),w)],x.p),w,u,v)},
$S:44}
B.b6Z.prototype={
$0(){return A.b4(this.a,!1).cC(!1)},
$S:0}
B.b7_.prototype={
$0(){return A.b4(this.a,!1).cC(!0)},
$S:0}
B.b71.prototype={
$0(){var w=this.a
return w.w=w.wM()},
$S:0}
B.b76.prototype={
$2(d,e){var w,v,u,t=null
if(e.a!==C.j4)return C.bF
w=e.c
if(w!=null)return A.cZ(new A.ah(C.D,A.j("Fehler: "+A.i(w),t,t,t,A.C(C.j,13,C.l),t,t,t),t),t,t)
v=e.b
if(v==null)v=C.co
w=J.V(v)
if(w.gZ(v))return A.cZ(A.j("Keine Reklamationen \u2014 sehr gut!",t,t,t,A.C(C.q,13,C.l),t,t,t),t,t)
u=this.a
return A.ie(A.zo(t,new B.b73(u,v),w.gp(v),C.aj,new B.b74()),C.m,new B.b75(u))},
$S:348}
B.b75.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
u=s.J(new B.b72(s))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b72.prototype={
$0(){var w=this.a
return w.w=w.wM()},
$S:0}
B.b74.prototype={
$2(d,e){return C.u},
$S:127}
B.b73.prototype={
$2(d,e){return new B.HG(J.Z(this.b,e),B.c4H(),B.c4I(),this.a.gaL6(),null)},
$S:z+13}
B.b6W.prototype={
$0(){var w=this.a
return w.f.$2(w.c,"in_progress")},
$S:0}
B.b6X.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"resolved",!0)},
$S:0}
B.b6Y.prototype={
$0(){var w=this.a
return w.f.$3$askNote(w.c,"rejected",!0)},
$S:0}
B.aC7.prototype={
$1(d){var w=J.V(d),v=w.h(d,"product_label")
return A.i(v==null?"Ware":v)+" \xb7 "+A.i(w.h(d,"quantity"))+" Stk."},
$S:41}
B.aC6.prototype={
$1(d){var w,v="mhd_date",u=J.V(d),t=u.h(d,"disposed_at")
t=t==null?"":C.c.a_(C.c.iI(J.al(t),"T"," "),0,16)
w=D.apL.h(0,u.h(d,"reason"))
w=A.i(w==null?u.h(d,"reason"):w)
u=u.h(d,v)!=null?" \xb7 MHD "+A.i(u.h(d,v)):""
return t+" \xb7 "+w+u},
$S:41}
B.aC8.prototype={
$2(d,e){return A.kC(null,new B.aC5(),d,!0,null,null,x.P)},
$S:83}
B.aC5.prototype={
$1(d){return D.aMD},
$S:z+14}
B.b9Q.prototype={
$1(d){var w=this.a
return w.J(new B.b9P(w,d))},
$S:12}
B.b9P.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b9R.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.Q,o=A.b([D.a6M],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aG(t.h(u,"id"))
u=A.ak(t.h(u,"name"))
o.push(new A.dV(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.k0(D.aeE,p,!0,o,new B.b9O(q,d),r,x.N)},
$S:159}
B.b9O.prototype={
$1(d){var w=this.a
return w.J(new B.b9L(w,d,this.b))},
$S:12}
B.b9L.prototype={
$0(){var w=this.a,v=w.Q=this.b
if(v!=null){v=A.ak(J.Z(J.bQv(this.c,new B.b9K(v)),"name"))
if(v==null)v=""
w.y.ses(0,v)}},
$S:0}
B.b9K.prototype={
$1(d){return J.d(J.Z(d,"id"),this.a)},
$S:70}
B.b9S.prototype={
$0(){return C.ar},
$S:96}
B.b9T.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflichtfeld":null},
$S:15}
B.b9U.prototype={
$1(d){var w=A.iz(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.b9V.prototype={
$1(d){var w=this.a
return w.J(new B.b9N(w,d))},
$S:12}
B.b9N.prototype={
$0(){var w=this.b
if(w==null)w="mhd"
return this.a.as=w},
$S:0}
B.b9W.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=new A.aZ(Date.now(),0,!1)
w=2
return A.k(A.pb(u.b,A.bC(A.aU(s)-2,1,1,0,0,0,0),null,s,A.bC(A.aU(s)+2,1,1,0,0,0,0),C.er),$async$$0)
case 2:r=e
if(r!=null){t=u.a
t.J(new B.b9M(t,r))}return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.b9M.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.b9X.prototype={
$1(d){return this.a.ax=d},
$S:31}
B.bry.prototype={
$1(d){return this.ajf(d)},
ajf(d){var w=0,v=A.q(x.D),u,t,s,r,q,p
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
return A.k(A.kV(new A.ad(r,new B.brx(s.cW("documents")),r.$ti.i("ad<an.E,R<bp>>")),x.a),$async$$1)
case 4:u=r
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:52}
B.brx.prototype={
$1(d){return this.aje(d)},
aje(d){var w=0,v=A.q(x.a),u,t=2,s=[],r=this,q,p,o,n,m,l,k
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
B.brL.prototype={
$1(d){return this.ajh(d)},
ajh(d){var w=0,v=A.q(x.D),u,t,s
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
$S:52}
B.bsA.prototype={
$2(d,e){return this.ajm(d,e)},
ajm(d,e){var w=0,v=A.q(x.D),u,t,s,r
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
B.baH.prototype={
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
return A.k(n.hx("documents-init-templates",A.z(m,l)),$async$$0)
case 6:n=q.aD(0,p,o).ax
n===$&&A.a()
w=7
return A.k(n.hx("documents-install-branded-set",A.z(m,l)),$async$$0)
case 7:o=q.aD(0,p,o).ax
o===$&&A.a()
w=8
return A.k(o.hx("documents-install-haccp-set",A.z(m,l)),$async$$0)
case 8:if(r.c!=null){r=$.K_()
if(q.e==null)A.T(A.a0(y.b))
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
B.baD.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:362}
B.baE.prototype={
$0(){return!1},
$S:48}
B.baF.prototype={
$0(){var w=this.a
return w.Bf(this.b,w.gc8())},
$S:0}
B.baG.prototype={
$0(){var w=this.a
return w.wY(this.b,w.gc8())},
$S:0}
B.bai.prototype={
$1(d){return d.n(0,"documents.edit")},
$S:362}
B.baj.prototype={
$0(){return!1},
$S:48}
B.bal.prototype={
$0(){return C.bF},
$S:21}
B.bak.prototype={
$2(d,e){var w=null
return new A.ah(C.D,A.j(A.i(d),w,w,w,w,w,w,w),w)},
$S:91}
B.bah.prototype={
$1(d){var w=this
return A.dz(w.b,new B.bae(w.a,d,w.c,w.d,w.e),new B.baf(),new B.bag(),!1,!0,!1,x.D,x.l)},
$S:85}
B.bag.prototype={
$0(){return C.ar},
$S:96}
B.baf.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:133}
B.bae.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=J.qP(m.b,new B.ba3(k)),i=A.Q(j,j.$ti.i("t.E")),h=A.z(x.N,x.D)
for(j=i.length,w=0;w<i.length;i.length===j||(0,A.G)(i),++w){v=i[w]
u=A.ak(J.Z(v,"category"))
if(u==null)u="sonstiges"
J.e2(h.cl(0,u,new B.ba4()),v)}if(k.x==null)t=d
else{j=J.qP(d,new B.ba5(k))
t=A.Q(j,j.$ti.i("t.E"))}j=m.c
s=A.b([new B.aqz(new B.ba6(k),l),C.u,new B.al4(d,k.x,new B.ba7(k),l),C.K],x.p)
for(r=J.bh(t),q=m.d,p=m.e;r.t();){o=r.gN(r)
n=h.h(0,J.Z(o,"slug"))
if(n==null)n=C.co
s.push(new B.al5(o,n,q,new B.ba8(k,p,j),new B.ba9(k,p,j),new B.baa(k,p,j),new B.bab(k,p,j),new B.bac(k,p,j),l))}s.push(D.azw)
return A.ie(A.dF(s,C.aj,l,C.M,!1),C.m,new B.bad(j))},
$S:343}
B.ba3.prototype={
$1(d){var w,v=J.V(d),u=A.ak(v.h(d,"title"))
if(u==null)u=""
v=A.ak(v.h(d,"category"))
if(v==null)v=""
w=this.a.w.toLowerCase()
return w.length===0||C.c.n(u.toLowerCase(),w)||C.c.n(v.toLowerCase(),w)},
$S:70}
B.ba4.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.ba5.prototype={
$1(d){return J.d(J.Z(d,"slug"),this.a.x)},
$S:70}
B.bad.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=u.a
s=$.K_()
if(t.e==null)A.T(A.a0(y.b))
t.gcv().cs(s)
s=$.bw0()
if(t.e==null)A.T(A.a0(y.b))
t.gcv().cs(s)
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.ba6.prototype={
$1(d){var w=this.a
return w.J(new B.ba2(w,d))},
$S:31}
B.ba2.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ba7.prototype={
$1(d){var w=this.a
return w.J(new B.ba1(w,d))},
$S:12}
B.ba1.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ba8.prototype={
$1(d){return this.a.wS(0,this.b,this.c,d)},
$S:87}
B.ba9.prototype={
$1(d){return this.a.wI(this.b,this.c,A.aG(J.Z(d,"id")))},
$S:87}
B.baa.prototype={
$1(d){return this.a.Cz(this.b,this.c,d)},
$S:87}
B.bab.prototype={
$1(d){return this.a.Cu(this.b,this.c,d)},
$S:87}
B.bac.prototype={
$1(d){return this.a.x8(this.b,this.c,d)},
$S:87}
B.baC.prototype={
$1(d){var w=null,v=this.a,u=J.V(v)
v=A.j("\u201e"+A.i(u.h(v,"title"))+'" (v'+A.i(u.h(v,"current_version"))+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.",w,w,w,w,w,w,w)
u=this.b
return A.is(A.b([A.d9(C.c_,w,w,new B.baA(u),w,w),A.dk(E.mp,new B.baB(u),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,v,E.mq)},
$S:44}
B.baA.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.baB.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.baz.prototype={
$1(d){return new A.li(new B.bay(this.a,this.b),null)},
$S:65}
B.bay.prototype={
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
n.push(A.bE7(p,p,p,p,p,new B.bav(e,t,u),A.j(s==null?"":s,p,p,p,p,p,p,p),q,r))}n=A.ce(A.dF(n,p,p,C.M,!0),p,400)
return A.is(A.b([A.d9(C.c_,p,p,new B.baw(d),p,p),A.dk(D.An,new B.bax(d),A.dK(C.m,C.B,p,p,p,p,p))],o),p,n,D.aHF)},
$S:74}
B.bav.prototype={
$1(d){return this.a.$1(new B.bau(this.b,d,this.c))},
$S:68}
B.bau.prototype={
$0(){var w=A.aG(J.Z(this.a,"id")),v=this.c
if(this.b===!0)v.E(0,w)
else v.H(0,w)},
$S:0}
B.baw.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.bax.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.bas.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bat.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bar.prototype={
$1(d){return new A.li(new B.baq(this.a,this.b,this.c),null)},
$S:65}
B.baq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=A.dH(r,C.aw,!1,r,!0,C.n,r,A.dO(),this.b,r,r,r,r,r,2,D.aeh,C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ad,r,C.X,r,r,r,r),p=this.a,o=p.a,n=A.b([],x.I)
for(w=J.bh(this.c),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aG(t.h(u,"slug"))
u=t.h(u,"label")
u=u==null?r:J.al(u)
n.push(new A.dV(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}w=x.p
p=A.ce(A.ac(A.b([q,C.u,A.k0(D.aeL,o,!1,n,new B.ban(p,e),r,x.N)],w),C.k,r,C.f,C.J,0),r,400)
return A.is(A.b([A.d9(C.c_,r,r,new B.bao(d),r,r),A.dk(D.Zq,new B.bap(d),r)],w),r,p,D.aHK)},
$S:74}
B.ban.prototype={
$1(d){return this.b.$1(new B.bam(this.a,d))},
$S:12}
B.bam.prototype={
$0(){return this.a.a=this.b},
$S:0}
B.bao.prototype={
$0(){A.b4(this.a,!1).cC(!1)
return null},
$S:0}
B.bap.prototype={
$0(){A.b4(this.a,!1).cC(!0)
return null},
$S:0}
B.bd0.prototype={
$0(){return this.a.e.$1(null)},
$S:0}
B.bd1.prototype={
$0(){return this.a.e.$1(A.ak(J.Z(this.b,"slug")))},
$S:0}
B.bd2.prototype={
$2(d,e){var w,v,u="is_template",t="updated_at",s=J.V(d),r=J.d(s.h(d,u),!0)?1:0,q=J.V(e),p=J.d(q.h(e,u),!0)?1:0
if(r!==p)return p-r
s=s.h(d,t)
w=s==null?null:J.al(s)
if(w==null)w=""
s=q.h(e,t)
v=s==null?null:J.al(s)
return C.c.cw(v==null?"":v,w)},
$S:986}
B.bd3.prototype={
$0(){return this.a.f.$1(this.b)},
$S:0}
B.bd4.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
B.bd5.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.bd6.prototype={
$0(){return this.a.x.$1(this.b)},
$S:0}
B.bd7.prototype={
$0(){return this.a.y.$1(this.b)},
$S:0}
B.ba0.prototype={
$0(){return D.aud},
$S:135}
B.ba_.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,A.C(C.ak,11,C.l),w,w,w)},
$S:133}
B.b9Z.prototype={
$1(d){var w,v=null,u=J.V(d)
if(u.gZ(d))return A.j("Noch keine Mitarbeiter eingeladen.",v,v,v,A.C(C.q,11,C.l),v,v,v)
w=A.b([A.j("Mitarbeiter-Signaturen",v,v,v,A.C(C.q,11,C.p),v,v,v),C.b6],x.p)
for(u=u.gY(d);u.t();)w.push(new B.ar3(u.gN(u),v))
return A.ac(w,C.C,v,C.f,C.h,0)},
$S:85}
B.bnj.prototype={
$0(){var w=this
return w.a.Bg(w.b,w.c,w.d)},
$S:0}
B.bsp.prototype={
$1(d){return this.ajk(d)},
ajk(d){var w=0,v=A.q(x.D),u,t,s,r
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.aD(0,$.bL(),x.A).cW("profiles").hj(0,"id, email, full_name, role, status").X4("role",D.ani)
s=t.q2("status","neq.archived")
t=A.m8(t.oo(s),t.$ti.c)
r=J
w=3
return A.k(A.m8(t.oo(t.q2("deleted_at","is.null")),t.$ti.c).pf(0,"created_at"),$async$$1)
case 3:u=r.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:52}
B.aDS.prototype={
$0(){return this.a.BR(this.b,this.c)},
$S:0}
B.aDV.prototype={
$0(){return C.fM},
$S:21}
B.aDU.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.aDT.prototype={
$1(d){return A.zo(null,new B.aDQ(d),J.cg(d),null,new B.aDR())},
$S:988}
B.aDR.prototype={
$2(d,e){return D.kW},
$S:136}
B.aDQ.prototype={
$2(d,e){var w=null,v=J.Z(this.a,e),u=J.V(v),t=A.ak(u.h(v,"full_name"))
t=A.j(t==null?A.aG(u.h(v,"email")):t,w,w,w,w,w,w,w)
return A.rG(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,A.j(A.i(u.h(v,"email"))+" \xb7 "+B.c7n(A.ak(u.h(v,"role"))),w,w,w,w,w,w,w),w,t,w,B.bEb(w,A.j(B.c7J(A.ak(u.h(v,"status"))),w,w,w,w,w,w,w),w),w)},
$S:137}
B.aDP.prototype={
$1(d){return D.aNJ},
$S:z+15}
B.bfv.prototype={
$1(d){return d==null||!C.c.n(d,"@")?"G\xfcltige E-Mail":null},
$S:15}
B.bfw.prototype={
$1(d){var w=this.a
return w.J(new B.bfu(w,d,this.b))},
$S:68}
B.bfu.prototype={
$0(){var w=this.a.r,v=this.c.a
if(this.b===!0)w.E(0,v)
else w.H(0,v)},
$S:0}
B.aFd.prototype={
$1(d){var w="removed_spoiled",v=J.V(d),u=A.i(v.h(d,"quantity")),t=v.h(d,w)
v=!J.d(t==null?0:t,0)?" \xb7 Verderb: "+A.i(v.h(d,w)):""
return"Menge: "+u+v},
$S:41}
B.aFc.prototype={
$1(d){var w=J.V(d),v=w.h(d,"filled_at")
v=v==null?"":C.c.a_(C.c.iI(J.al(v),"T"," "),0,16)
return v+(J.d(w.h(d,"mhd_checked"),!0)?" \xb7 MHD gepr\xfcft":"")},
$S:41}
B.aFe.prototype={
$2(d,e){return A.kC(null,new B.aFb(),d,!0,null,null,x.P)},
$S:83}
B.aFb.prototype={
$1(d){return D.aNq},
$S:z+16}
B.bcf.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.bcg.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.bcm.prototype={
$1(d){var w=this.a
return w.J(new B.bcl(w,d))},
$S:12}
B.bcl.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bcn.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.at,o=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
s=A.aG(t.h(u,"id"))
u=A.ak(t.h(u,"name"))
o.push(new A.dV(s,A.j(u==null?"":u,r,r,r,r,r,r,r),C.aW,r,v))}return A.k0(D.Fm,p,!0,o,new B.bcj(q),new B.bck(),x.N)},
$S:159}
B.bcj.prototype={
$1(d){var w=this.a
return w.J(new B.bch(w,d))},
$S:12}
B.bch.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bck.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.bco.prototype={
$0(){return D.yh},
$S:76}
B.bcp.prototype={
$1(d){var w=A.iz(d==null?"":d,null)
return w==null||w<=0?"Menge > 0":null},
$S:15}
B.bcq.prototype={
$1(d){var w
if(d==null||C.c.aK(d).length===0)return"Pflichtfeld"
w=A.fT(A.ax(d,",","."))
return w==null||w<=0?"EK > 0":null},
$S:15}
B.bcr.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflichtfeld":null},
$S:15}
B.bcs.prototype={
$1(d){var w=this.a
return w.J(new B.bci(w,d))},
$S:8}
B.bci.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.buF.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.buG.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.buN.prototype={
$2(d,e){return J.bDd(d,0,new B.buO(e))},
$S:991}
B.buO.prototype={
$2(d,e){var w=A.b3(J.Z(e,this.a))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.buL.prototype={
$2(d,e){return J.bDd(d,0,new B.buM(e))},
$S:992}
B.buM.prototype={
$2(d,e){var w=A.b3(J.Z(e,this.a))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:198}
B.buJ.prototype={
$1(d){var w,v,u
if(d==null||J.al(d).length===0)return"\u2014"
try{v=A.o8(J.al(d))
v=$.dp().al(v)
return v}catch(u){w=J.al(d)
v=J.cg(w)>10?10:J.cg(w)
return J.bDq(w,0,v)}},
$S:39}
B.buK.prototype={
$1(d){var w
A:{if("refill"===d){w="Zugang"
break A}if("sale"===d){w="Verkauf"
break A}if("disposal"===d){w="Vernichtung"
break A}if("correction"===d){w="Korrektur"
break A}w=d
break A}return w},
$S:35}
B.buH.prototype={
$1(d){var w=J.Z(d,"product_id")
return w==null?null:J.al(w)},
$S:294}
B.buI.prototype={
$1(d){return J.d(J.Z(d,"decision"),"approved")},
$S:70}
B.bfl.prototype={
$0(){var w=this.a
w.as=!0
w.at=null},
$S:0}
B.bfm.prototype={
$0(){return this.a.as=!1},
$S:0}
B.bfn.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bfo.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bfr.prototype={
$1(d){var w=null,v=this.a,u=v.w,t=$.dp()
t=A.j("Die Inventur f\xfcr "+t.al(u)+" \u2013 "+t.al(v.x)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt.  Nach 2-of-2-Freigabe wird der Report mit den DocuSign-Signaturen finalisiert. Fortfahren?",w,w,w,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.bfp(v),w,w),A.dk(E.mp,new B.bfq(v),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,t,E.mq)},
$S:44}
B.bfp.prototype={
$0(){var w=this.a.c
w.toString
A.b4(w,!1).cC(!1)
return null},
$S:0}
B.bfq.prototype={
$0(){var w=this.a.c
w.toString
A.b4(w,!1).cC(!0)
return null},
$S:0}
B.bfk.prototype={
$0(){return A.b([],x.t)},
$S:134}
B.bfs.prototype={
$0(){var w,v,u=this.a,t=u.y
t.toString
w=u.z
if(w==null)w=C.co
v=u.Q
if(v==null)v=C.co
return B.buE(null,u.w,w,t,v,u.x)},
$S:0}
B.bft.prototype={
$1(d){var w=J.Z(d,"product_id")
w=w==null?null:J.al(w)
return w===this.a.a},
$S:70}
B.bjE.prototype={
$2(d,e){var w=A.b3(J.Z(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:198}
B.bjF.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.bjG.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.bjH.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.be0.prototype={
$2(d,e){var w=A.b3(J.Z(e,"remaining_qty"))
w=w==null?null:C.d.a0(w)
return d+(w==null?0:w)},
$S:198}
B.be1.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_gross"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.be2.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_discount"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.be3.prototype={
$2(d,e){var w=A.b3(J.Z(e,"lot_net"))
if(w==null)w=null
return d+(w==null?0:w)},
$S:71}
B.be4.prototype={
$1(d){var w=J.Z(d,"product_id")
return w==null?null:J.al(w)},
$S:294}
B.bnH.prototype={
$3(d,e,f){return D.a_8},
$S:z+17}
B.aK1.prototype={
$0(){return C.fM},
$S:21}
B.aK0.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.aK_.prototype={
$1(d){return A.zo(null,new B.aJY(d),J.cg(d),null,new B.aJZ())},
$S:995}
B.aJZ.prototype={
$2(d,e){return D.kW},
$S:136}
B.aJY.prototype={
$2(d,e){var w=null,v=J.Z(this.a,e),u=A.cp(v.e?C.xV:D.a9X,w,w,w),t=A.j(v.b+" \xb7 "+v.c,w,w,w,w,w,w,w),s=v.f
return A.rG(!1,w,w,w,!0,w,w,w,!0,w,u,w,w,w,w,new B.aJX(d,v),!1,w,w,w,w,A.j(s==null?"":s,w,w,w,w,w,w,w),w,t,w,D.adn,w)},
$S:137}
B.aJX.prototype={
$0(){var w=x.z
return A.b4(this.a,!1).ep(A.eF(new B.aJW(this.b),null,w),w)},
$S:0}
B.aJW.prototype={
$1(d){var w=this.a
return new B.zr(w.a,w.b+" \xb7 "+w.c,null)},
$S:z+18}
B.bgI.prototype={
$1(d){var w,v=this.a
if(v.c!=null){w=v.gc8()
v=$.bwh().$1(v.a.d)
if(w.e==null)A.T(A.a0(y.b))
w.gcv().cs(v)}},
$S:996}
B.bgH.prototype={
$0(){return C.fM},
$S:21}
B.bgG.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.bgF.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a31
else{w=this.a
w=A.ie(A.zo(null,new B.bgC(w,d),v.gp(d),null,new B.bgD()),null,new B.bgE(w))
v=w}return v},
$S:997}
B.bgE.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc8()
s=$.bwh().$1(s.a.d)
if(r.e==null)A.T(A.a0(y.b))
r.gcv().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bgD.prototype={
$2(d,e){return D.kW},
$S:136}
B.bgC.prototype={
$2(d,e){var w=null,v=J.Z(this.b,e),u=A.j(v.c,w,w,w,w,w,w,w),t=A.j("Bestand: "+v.d+" (Schwelle "+v.e+")",w,w,w,w,w,w,w),s=this.a,r=v.r,q=A.j(s.aES(r),w,w,w,w,w,w,w)
return A.rG(!1,w,w,w,!0,w,w,w,!0,w,w,w,w,w,w,new B.bgB(s,d,v),!1,w,w,w,w,t,w,u,w,B.bEb(s.a6G(0,d,r).fl(0.15),q,new A.bm(s.a6G(0,d,r),1,C.U,-1)),w)},
$S:137}
B.bgB.prototype={
$0(){return this.a.B8(this.b,this.c)},
$S:0}
B.bgA.prototype={
$1(d){var w=null,v=A.j("Korrektur: "+this.a.c,w,w,w,w,w,w,w),u=this.b,t=A.dH(w,C.aw,!1,w,!0,C.n,w,A.dO(),u,w,w,w,w,w,2,D.aeO,C.a4,!0,w,!0,w,!1,w,C.aA,w,w,w,w,w,D.aB3,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.D,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ad,w,C.X,w,w,w,w),s=this.c
return A.is(A.b([A.d9(C.c_,w,w,new B.bgy(s),w,w),A.dk(D.aHs,new B.bgz(s,u),w)],x.p),w,t,v)},
$S:44}
B.bgy.prototype={
$0(){A.b4(this.a,!1).cC(null)
return null},
$S:0}
B.bgz.prototype={
$0(){var w=A.iz(this.b.a.a,null)
A.b4(this.a,!1).cC(w)
return null},
$S:0}
B.aLl.prototype={
$1(d){return A.i(J.Z(d,"issue"))},
$S:41}
B.aLk.prototype={
$1(d){var w,v="performed_by",u=J.V(d),t=u.h(d,"reported_at")
t=t==null?"":C.c.a_(C.c.iI(J.al(t),"T"," "),0,16)
w=J.d(u.h(d,"resolved"),!0)?" \xb7 erledigt":" \xb7 offen"
u=u.h(d,v)!=null?" \xb7 "+A.i(u.h(d,v)):""
return t+w+u},
$S:41}
B.aLm.prototype={
$2(d,e){return A.kC(null,new B.aLj(),d,!0,null,null,x.P)},
$S:83}
B.aLj.prototype={
$1(d){return D.aO0},
$S:z+19}
B.bgL.prototype={
$1(d){var w=this.a
return w.J(new B.bgK(w,d))},
$S:12}
B.bgK.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.bgM.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflichtfeld":null},
$S:15}
B.bgN.prototype={
$1(d){var w=this.a
return w.J(new B.bgJ(w,d))},
$S:8}
B.bgJ.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bp4.prototype={
$1(d){var w=this.a
return w.J(new B.bp3(w,d))},
$S:998}
B.bp3.prototype={
$0(){var w=this.b
return this.a.w=w.ga2(w)},
$S:0}
B.brS.prototype={
$1(d){return this.aji(d)},
aji(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ao($.bL(),x.A).cW("machine_health").hj(0,"machine_id, last_seen_at, last_heartbeat_at, temperature_c, door_state, cash_balance_net, active_alarms, updated_at, machine:machines(id, code, name, is_cooled)").qE(0,"updated_at",!1),$async$$1)
case 3:u=t.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:52}
B.bgr.prototype={
$0(){return C.bF},
$S:21}
B.bgq.prototype={
$2(d,e){var w=null
return A.cZ(new A.ah(C.dd,A.j(A.i(d),w,w,w,w,w,w,w),w),w,w)},
$S:33}
B.bgp.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMR
else{w=A.b([],x.p)
for(v=v.gY(d);v.t();)w.push(new B.alq(v.gN(v),null))
v=A.ie(A.dF(w,C.D,null,C.M,!1),C.m,new B.bgo(this.a))}return v},
$S:85}
B.bgo.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCh()
if(s.e==null)A.T(A.a0(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bsq.prototype={
$1(d){return this.ajl(d)},
ajl(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ao($.bL(),x.A).cW("telemetry_providers").hj(0,"id, name, adapter, is_active, time_skew_max_s, notes, created_at, updated_at").pf(0,"name"),$async$$1)
case 3:u=t.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:52}
B.bjY.prototype={
$0(){return this.a.IH(this.b,this.c)},
$S:0}
B.bk0.prototype={
$0(){return C.bF},
$S:21}
B.bk_.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.bjZ.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMQ
else{w=A.b([],x.p)
for(v=v.gY(d);v.t();)w.push(new B.aoS(v.gN(v),null))
v=A.dF(w,C.D,null,C.M,!1)}return v},
$S:346}
B.bjX.prototype={
$1(d){return D.aOP},
$S:z+20}
B.bjU.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflicht":null},
$S:15}
B.bjV.prototype={
$1(d){var w=this.a
return w.J(new B.bjT(w,d))},
$S:12}
B.bjT.prototype={
$0(){var w=this.b
if(w==null)w="generic"
return this.a.Q=w},
$S:0}
B.bjW.prototype={
$1(d){return d==null||C.c.aK(d).length<16?"Min. 16 Zeichen":null},
$S:15}
B.brw.prototype={
$1(d){return this.ajd(d)},
ajd(d){var w=0,v=A.q(x.D),u,t
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.k(d.ao($.bL(),x.A).cW("machine_devices").hj(0,"id, external_device_id, firmware_version, last_seen_at, is_active, installed_at, machine:machines(id, code, name), provider:telemetry_providers(id, name, adapter)").qE(0,"installed_at",!1),$async$$1)
case 3:u=t.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:52}
B.b9w.prototype={
$0(){return this.a.IJ(this.b,this.c)},
$S:0}
B.b9z.prototype={
$0(){return C.bF},
$S:21}
B.b9y.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.b9x.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMP
else{w=A.b([],x.p)
for(v=v.gY(d);v.t();)w.push(new B.ajC(v.gN(v),null))
v=A.dF(w,C.D,null,C.M,!1)}return v},
$S:346}
B.b9v.prototype={
$1(d){return D.aMx},
$S:z+21}
B.b9q.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.b9p.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.z
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dV(A.aG(q.h(r,"id")),A.j(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.k0(D.aef,v,!1,u,new B.b9n(w),new B.b9o(),x.N)},
$S:186}
B.b9n.prototype={
$1(d){var w=this.a
return w.J(new B.b9k(w,d))},
$S:12}
B.b9k.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.b9o.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9t.prototype={
$0(){return D.yh},
$S:76}
B.b9s.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:133}
B.b9r.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.Q,p=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
t=J.V(u)
p.push(new A.dV(A.aG(t.h(u,"id")),A.j(A.i(t.h(u,"name"))+" ("+A.i(t.h(u,"adapter"))+")",s,s,s,s,s,s,s),C.aW,s,v))}return A.k0(D.adW,q,!1,p,new B.b9l(r),new B.b9m(),x.N)},
$S:159}
B.b9l.prototype={
$1(d){var w=this.a
return w.J(new B.b9j(w,d))},
$S:12}
B.b9j.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.b9m.prototype={
$1(d){return d==null?"Pflicht":null},
$S:15}
B.b9u.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflicht":null},
$S:15}
B.bnW.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.bnV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.w
u=A.b([],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dV(A.aG(q.h(r,"id")),A.j(A.i(q.h(r,"code"))+" \xb7 "+A.i(q.h(r,"name")),p,p,p,p,p,p,p),C.aW,p,s))}return A.k0(D.aes,v,!1,u,new B.bnU(w),p,x.N)},
$S:186}
B.bnU.prototype={
$1(d){var w=this.a
return w.J(new B.bnT(w,d))},
$S:12}
B.bnT.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bnS.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.bnR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=e.b
if(p==null)p=A.b([],x.t)
w=this.a
v=this.b
u=A.h8(D.o0,D.aI5,new B.bnP(w,d,v),A.dK(C.m,C.B,q,q,q,q,q))
t=J.V(p)
if(t.gZ(p))w=D.aMO
else{s=A.b([],x.p)
for(t=t.gY(p);t.t();){r=t.gN(t)
s.push(new B.arj(r,new B.bnQ(w,d,v,r),q))}w=A.dF(s,C.D,q,C.M,!1)}return A.ac(A.b([new A.ah(D.a7S,u,q),A.aA(w,1)],x.p),C.k,q,C.f,C.h,0)},
$S:1002}
B.bnP.prototype={
$0(){return this.a.Ce(this.b,this.c,null)},
$S:0}
B.bnQ.prototype={
$0(){var w=this
return w.a.Ce(w.b,w.c,w.d)},
$S:0}
B.bnO.prototype={
$1(d){return new B.Cj(this.a.e,this.b,null)},
$S:z+22}
B.bnL.prototype={
$1(d){return d==null||C.c.aK(d).length===0?"Pflicht":null},
$S:15}
B.bnN.prototype={
$1(d){return J.cE(d,x.P)},
$S:138}
B.bnM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=e.b
if(o==null)o=A.b([],x.t)
w=this.a
v=w.Q
u=A.b([D.a6K],x.I)
for(t=J.bh(o),s=x.r;t.t();){r=t.gN(t)
q=J.V(r)
u.push(new A.dV(A.aG(q.h(r,"id")),A.j(A.i(q.h(r,"name"))+" ("+A.i(q.h(r,"sku"))+")",p,p,p,p,p,p,p),C.aW,p,s))}return A.k0(D.Fm,v,!1,u,new B.bnK(w),p,x.N)},
$S:186}
B.bnK.prototype={
$1(d){var w=this.a
return w.J(new B.bnJ(w,d))},
$S:12}
B.bnJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.brD.prototype={
$1(d){return this.ajg(d)},
ajg(d){var w=0,v=A.q(x.D),u,t,s
var $async$$1=A.m(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:t=d.ao($.bL(),x.A).cW("machine_telemetry_events").hj(0,"id, event_type, status, event_uid, occurred_at, received_at, processed_at, quantity, unit_price_net, dispense_confirmed, temperature_c, error_reason, slot_code, machine:machines(code, name), provider:telemetry_providers(name, adapter)").qE(0,"received_at",!1)
s=J
w=3
return A.k(A.aax(t.Vv(t.Y3("limit","200")),t.$ti.c),$async$$1)
case 3:u=s.cE(f,x.P)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$1,v)},
$S:52}
B.bbj.prototype={
$0(){return C.bF},
$S:21}
B.bbi.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.bbh.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.aMT
else{w=A.b([],x.p)
for(v=v.gY(d);v.t();)w.push(new B.akn(v.gN(v),null))
v=A.ie(A.dF(w,C.D,null,C.M,!1),C.m,new B.bbg(this.a))}return v},
$S:85}
B.bbg.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCf()
if(s.e==null)A.T(A.a0(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.b0J.prototype={
$1(d){var w=J.V(d),v=A.i(w.h(d,"temperature_c"))
w=J.d(w.h(d,"within_limit"),!1)?"  \u26a0\ufe0f \xfcber Grenzwert":""
return v+" \xb0C"+w},
$S:41}
B.b0I.prototype={
$1(d){var w="corrective_action",v=J.V(d),u=v.h(d,"measured_at")
u=u==null?"":C.c.a_(C.c.iI(J.al(u),"T"," "),0,16)
return u+(v.h(d,w)!=null?"\n"+A.i(v.h(d,w)):"")},
$S:41}
B.b0K.prototype={
$2(d,e){return A.kC(null,new B.b0H(),d,!0,null,null,x.P)},
$S:83}
B.b0H.prototype={
$1(d){return D.aPl},
$S:z+23}
B.bp6.prototype={
$1(d){var w=this.a
return w.J(new B.bp5(w,d))},
$S:12}
B.bp5.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bp7.prototype={
$1(d){var w=d==null?"":d
return A.fT(A.ax(w,",","."))==null?"Bitte Temperatur eingeben":null},
$S:15}
B.aLh.prototype={
$0(){return D.yh},
$S:76}
B.aLg.prototype={
$2(d,e){var w=null
return A.j(A.i(d),w,w,w,w,w,w,w)},
$S:133}
B.aLf.prototype={
$1(d){var w,v,u,t=null,s=this.a,r=A.eE(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,"Automat",!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),q=A.b([],x.I)
for(w=J.bh(d),v=x.r;w.t();){u=w.gN(w)
q.push(new A.dV(u.a,A.j(u.b+" \xb7 "+u.c,t,t,t,t,t,t,t),C.aW,t,v))}return A.k0(r,s.e,!0,q,s.f,new B.aLe(),x.N)},
$S:1003}
B.aLe.prototype={
$1(d){return d==null?"Pflichtfeld":null},
$S:15}
B.biL.prototype={
$0(){return this.a.w=!0},
$S:0}
B.biM.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.biN.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bjK.prototype={
$1(d){var w=null,v=this.a,u=v.a.d,t=v.gjY(),s=$.dp()
s=A.j("Das "+u+"-Protokoll ("+s.al(t.a)+" \u2013 "+s.al(v.gjY().b)+") wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird das signierte PDF automatisch abgelegt.",w,w,w,w,w,w,w)
return A.is(A.b([A.d9(C.c_,w,w,new B.bjI(v),w,w),A.dk(E.mp,new B.bjJ(v),A.dK(C.m,C.B,w,w,w,w,w))],x.p),w,s,E.mq)},
$S:44}
B.bjI.prototype={
$0(){var w=this.a.c
w.toString
A.b4(w,!1).cC(!1)
return null},
$S:0}
B.bjJ.prototype={
$0(){var w=this.a.c
w.toString
A.b4(w,!1).cC(!0)
return null},
$S:0}
B.bjP.prototype={
$0(){var w=0,v=A.q(x.H),u=this,t,s,r,q,p
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:t=new A.aZ(Date.now(),0,!1)
s=A.bC(A.aU(t)-5,1,1,0,0,0,0)
r=A.bC(A.aU(t)+1,1,1,0,0,0,0)
q=u.a
w=2
return A.k(F.avt(null,u.b,s,new A.lK(q.gjY().a,q.gjY().b,x.bz),r,C.er),$async$$0)
case 2:p=e
if(p!=null)q.J(new B.bjO(q,p))
return A.o(null,v)}})
return A.p($async$$0,v)},
$S:2}
B.bjO.prototype={
$0(){var w=this.b
return this.a.w=new F.lP(w.a,w.b)},
$S:0}
B.bjS.prototype={
$0(){return C.fM},
$S:21}
B.bjR.prototype={
$2(d,e){var w=null
return A.cZ(A.j(A.i(d),w,w,w,w,w,w,w),w,w)},
$S:33}
B.bjQ.prototype={
$1(d){var w,v=J.V(d)
if(v.gZ(d))v=D.a34
else{w=this.a
w=A.ie(A.zo(null,new B.bjL(w,d),v.gp(d),null,new B.bjM()),null,new B.bjN(w))
v=w}return v},
$S:85}
B.bjN.prototype={
$0(){var w=0,v=A.q(x.H),u,t=this,s,r
var $async$$0=A.m(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gc8()
s=$.avW().$1(s.gIX())
if(r.e==null)A.T(A.a0(y.b))
r.gcv().cs(s)
u=null
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$$0,v)},
$S:2}
B.bjM.prototype={
$2(d,e){return D.kW},
$S:136}
B.bjL.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=t.a
s.toString
w=this.b
v=J.V(w)
s=A.j(s.aWz(v.h(w,e)),u,u,u,u,u,u,u)
t=t.a
t.toString
return A.rG(!1,u,u,u,!0,u,u,u,!0,u,u,u,u,u,u,u,!1,u,u,u,u,A.j(t.aWy(v.h(w,e)),u,u,u,u,u,u,u),u,s,u,u,u)},
$S:137}
B.b6E.prototype={
$1(d){var w,v,u=this
if(d.n(0,C.T)&&d.n(0,C.H)){w=u.a
if(w.go===D.hC){w=w.gii().k3
w=A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}else{w=w.gii().k3
w=A.aC(31,w.v()>>>16&255,w.v()>>>8&255,w.v()&255)}return w}if(d.n(0,C.H)){w=u.a
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
B.aB9.prototype={
$1(d){if(d.n(0,C.T))return this.a.ax.b.bz(0.08)
return null},
$S:23}
B.aB5.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aB6.prototype={
$1(d){return d.b!=null},
$S:z+3}
B.aB7.prototype={
$1(d){return!1},
$S:z+3}
B.aB8.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=d>0,n=o&&q.b&&q.a.CW[d-1].b==null,m=x.k,l=A.b2(m)
if(n)l.E(0,C.H)
if(o){w=q.a.CW[d-1].r
if(w==null)w=q.c
v=w==null?p:w.X(l)}else v=p
w=q.d
u=w==null?p:w.X(A.b2(m))
t=o?v:u
o=q.f.z
if(o==null)o=q.r.y2.z
if(o==null)o=1
s=A.bxe(q.e,p,o)
r=d===0?p:new A.fb(s,C.L,C.L,C.L)
o=d===0?$.bMF():p
m=t==null?q.w.a.$1(l):t
return new B.ml(o,new A.b7(m,p,r,p,p,p,C.G),A.bH(q.x.length,D.aOE,!1,x.l))},
$S:z+25}
B.aBa.prototype={
$1(d){return this.a.aCv(d,this.b)},
$S:68}
B.aBb.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.aBc.prototype={
$0(){var w=this.a.b
return w==null?null:w.$1(!0)},
$S:0}
B.b0s.prototype={
$0(){var w,v,u,t,s=this.a,r=s.gbY(s),q=A.fQ()
for(;;){if(!(r instanceof A.L&&!(r instanceof B.vZ)))break
r.f_(s,q)
w=r.gbY(r)
s=r
r=w}if(r instanceof B.vZ){v=s.b
v.toString
v=x.L.a(v).d
v.toString
u=r.ak8(v)
r.f_(s,q)
t=A.zE(q)
if(t!=null)return u.e7(new A.r(-t.a,-t.b))}return C.aP},
$S:118}
B.bnX.prototype={
$0(){this.a.d=!0},
$S:0}
B.bo_.prototype={
$0(){var w,v=this,u=v.a
u.a.toString
w=v.b.b
if(w!=null){if(w instanceof A.u9)return w}else{w=v.c
w.grP()
if(w.grP() instanceof A.u9)return x.av.a(w.grP())}return A.Jv(new B.bo0(u,v.b,v.c))},
$S:1004}
B.bo0.prototype={
$1(d){var w,v=this
if(d.n(0,C.H)){v.a.a.toString
w=v.b.c
return w==null?v.c.gDD():w}v.a.a.toString
w=v.b.b
return w==null?v.c.grP():w},
$S:5}
B.bnY.prototype={
$0(){var w,v,u=this.a
u.a.toString
w=this.b
v=w.as
if(v instanceof A.u9)return v
return A.Jv(new B.bnZ(u,w))},
$S:1005}
B.bnZ.prototype={
$1(d){var w,v=this
if(d.n(0,C.H)){v.a.a.toString
w=v.b.at
return w==null?C.F:w}v.a.a.toString
w=v.b.as
return w==null?C.F:w},
$S:5}
B.aW_.prototype={
$1(d){var w=d.d,v=w!=null?A.zE(w):null
if(v==null)v=C.r
return d.f.e7(v)},
$S:1006}
B.aVZ.prototype={
$1(d){var w,v
for(w=this.a,v=w.V-1,w=w.bd;v>=0;--v)if(w[v]<=d)return v
return-1},
$S:313}
B.aVY.prototype={
$1(d){var w,v=this.a,u=v.S
if(u==null)return-1
for(w=J.cg(u)-1;w>=0;--w){u=v.S
u.toString
if(J.lE(u,w)<=d)return w}return-1},
$S:313}
B.aW0.prototype={
$3(d,e,f){var w=d.d,v=w!=null?A.zE(w):null
if(v==null)v=C.r
d.se2(0,A.pX(v.a+e,v.b+f,0))},
$S:1008}
B.aVW.prototype={
$0(){var w=this.a
w.r4(w,this.b)},
$S:0}
B.aVX.prototype={
$0(){return A.wb(null,null)},
$S:1009}
B.aW1.prototype={
$2(d,e){return d+e},
$S:47}
B.aW2.prototype={
$2(d,e){return this.a.dL(d,e)},
$S:22}
B.b0t.prototype={
$1(d){return!0},
$S:z+29}
B.b0u.prototype={
$1(d){return d.b},
$S:z+30}
B.boW.prototype={
$1(d){var w,v,u,t={}
t.a=0
w=this.a;++w.a
v=d.c
u=A.af(v).i("ad<1,bM>")
t=A.Q(new A.ad(v,new B.boV(t,w,this.b),u),u.i("aw.E"))
t.$flags=1
return new B.lu(d.a,t)},
$S:z+31}
B.boV.prototype={
$1(d){return this.c.yT(d,new B.Jj(this.a.a++,this.b.a))},
$S:1010}
B.boX.prototype={
$1(d){return d.a==null},
$S:z+32}
B.boY.prototype={
$1(d){return!this.a.n(0,d)},
$S:1011}
B.boU.prototype={
$1(d){var w=d.b
return new A.ad(w,new B.boT(),A.af(w).i("ad<1,J>"))},
$S:z+33}
B.boT.prototype={
$1(d){var w=d.gai()
w.toString
return x.Y.a(w)},
$S:1012}
B.boZ.prototype={
$1(d){return d.b},
$S:z+34}
B.aRn.prototype={
$1(d){return B.bGV(d)},
$S:39}
B.ax7.prototype={
$2(d,e){return this.a.$0()},
$S(){return this.b.i("0(D,bJ)")}}
B.ax8.prototype={
$0(){return this.a.$0()},
$S(){return this.b.i("0()")}};(function installTearOffs(){var w=a._static_1,v=a._instance_1u,u=a._instance_0u,t=a.installInstanceTearOff
w(B,"c6G","bVw",35)
var s
v(s=B.Tk.prototype,"gaEL","aEM",10)
u(s,"gaET","xb",0)
u(s,"gay9","By",0)
u(s=B.Y6.prototype,"gaM1","Jx",0)
u(s,"gaNK","uS",0)
u(s=B.Tw.prototype,"gasE","H9",0)
u(s,"gawC","HB",0)
v(B.TQ.prototype,"gaxT","axU",8)
u(B.TT.prototype,"gatS","atT",1)
u(B.U3.prototype,"gauu","auv",1)
w(B,"c4H","c_u",36)
w(B,"c4I","c_v",24)
t(B.U5.prototype,"gaL6",0,2,null,["$3$askNote","$2"],["xv","aL7"],4,0,0)
u(B.UL.prototype,"gawi","awj",1)
u(B.VN.prototype,"gawY","awZ",1)
u(s=B.V5.prototype,"gaIq","IP",0)
u(s,"gaIr","IQ",0)
u(s,"gaxs","axt",1)
u(s=B.VM.prototype,"ga6g","Ic",0)
u(s,"gaIp","IO",0)
u(s,"gaIw","IT",0)
u(s,"gaJA","Cs",0)
u(B.VV.prototype,"gaFk","aFl",1)
u(B.WL.prototype,"gCG","lf",0)
u(B.UI.prototype,"gCG","lf",0)
u(B.Y7.prototype,"gCG","lf",0)
u(B.YB.prototype,"gaM8","aM9",1)
u(B.Ww.prototype,"gaIl","xj",0)
u(s=B.WH.prototype,"gaIM","Cj",0)
u(s,"gaIN","Ck",0)
u(s,"gaIO","Cl",0)
v(s=B.S7.prototype,"gOQ","Aj",26)
v(s,"gady","L4",27)
u(B.Ya.prototype,"gaC9","aCa",1)
v(s=B.vZ.prototype,"gcB","cf",2)
v(s,"gcm","cd",2)
v(s,"gcL","ce",2)
v(s,"gcK","ck",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.D,[B.wh,B.pM,B.Al,B.fF,B.amb,B.wT,B.fk,B.r5,B.fw,B.wj,B.Ig,B.ml,B.lu,B.auD,B.aJf,B.aaw])
v(A.o4,[B.bvu,B.bt4,B.buQ,B.aLt,B.aLs,B.bhA,B.buC,B.b3A,B.bfN,B.bbP,B.bbK,B.bbI,B.bbV,B.bbR,B.bbF,B.bbv,B.bbq,B.bbD,B.bbz,B.bq7,B.bq8,B.boa,B.bob,B.awo,B.bra,B.br9,B.aCa,B.b3O,B.b3I,B.b3J,B.bnE,B.b5Q,B.b5T,B.ayU,B.ayT,B.ayS,B.b6_,B.b60,B.azz,B.azy,B.azx,B.b6N,B.b6O,B.b6P,B.b70,B.aC7,B.aC6,B.aC5,B.b9Q,B.b9R,B.b9O,B.b9K,B.b9T,B.b9U,B.b9V,B.b9X,B.bry,B.brx,B.brL,B.baD,B.bai,B.bah,B.bae,B.ba3,B.ba5,B.ba6,B.ba7,B.ba8,B.ba9,B.baa,B.bab,B.bac,B.baC,B.baz,B.bav,B.bar,B.ban,B.b9Z,B.bsp,B.aDT,B.aDP,B.bfv,B.bfw,B.aFd,B.aFc,B.aFb,B.bcm,B.bcn,B.bcj,B.bck,B.bcp,B.bcq,B.bcr,B.bcs,B.buJ,B.buK,B.buH,B.buI,B.bfr,B.bft,B.be4,B.bnH,B.aK_,B.aJW,B.bgI,B.bgF,B.bgA,B.aLl,B.aLk,B.aLj,B.bgL,B.bgM,B.bgN,B.bp4,B.brS,B.bgp,B.bsq,B.bjZ,B.bjX,B.bjU,B.bjV,B.bjW,B.brw,B.b9x,B.b9v,B.b9q,B.b9n,B.b9o,B.b9r,B.b9l,B.b9m,B.b9u,B.bnW,B.bnU,B.bnS,B.bnO,B.bnL,B.bnN,B.bnK,B.brD,B.bbh,B.b0J,B.b0I,B.b0H,B.bp6,B.bp7,B.aLf,B.aLe,B.bjK,B.bjQ,B.b6E,B.aB9,B.aB5,B.aB6,B.aB7,B.aB8,B.aBa,B.bo0,B.bnZ,B.aW_,B.aVZ,B.aVY,B.aW0,B.b0t,B.b0u,B.boW,B.boV,B.boX,B.boY,B.boU,B.boT,B.boZ,B.aRn])
v(A.U,[B.yR,B.alr,B.OW,B.ang,B.akj,B.ajh,B.aml,B.ath,B.amm,B.arq,B.Cy,B.aie,B.Vw,B.a0e,B.aki,B.ajp,B.ai1,B.a1t,B.a1P,B.HG,B.a4F,B.aqz,B.al4,B.al5,B.aks,B.a59,B.aoP,B.alm,B.wQ,B.an9,B.ar4,B.ar6,B.Im,B.a7o,B.alq,B.BW,B.aoS,B.ajC,B.arj,B.akn,B.tP,B.adE,B.a1y,B.a1z,B.a48,B.S6])
v(A.xW,[B.btZ,B.buT,B.aLu,B.bhC,B.buD,B.bbO,B.bbU,B.bbu,B.bbC,B.aCb,B.b5V,B.ayV,B.azA,B.b76,B.b74,B.b73,B.aC8,B.bsA,B.bak,B.baf,B.bay,B.baq,B.bd2,B.ba_,B.aDU,B.aDR,B.aDQ,B.aFe,B.buN,B.buO,B.buL,B.buM,B.bjE,B.bjF,B.bjG,B.bjH,B.be0,B.be1,B.be2,B.be3,B.aK0,B.aJZ,B.aJY,B.bgG,B.bgD,B.bgC,B.aLm,B.bgq,B.bk_,B.b9y,B.b9p,B.b9s,B.bnV,B.bnR,B.bnM,B.bbi,B.b0K,B.aLg,B.bjR,B.bjM,B.bjL,B.aW1,B.aW2,B.ax7])
u(B.zt,A.fC)
v(A.xV,[B.aLo,B.aLp,B.aLq,B.aLv,B.bhB,B.b3B,B.b3C,B.b3D,B.b3x,B.b3y,B.b3z,B.bbW,B.bbX,B.bbY,B.bbJ,B.bbL,B.bbM,B.bbN,B.bbG,B.bbH,B.bbQ,B.bbS,B.bbT,B.bbE,B.bbp,B.bbo,B.bbn,B.bbr,B.bbs,B.bbt,B.bby,B.bbx,B.bbw,B.bbA,B.bbB,B.awp,B.aCc,B.aC9,B.b3N,B.b3L,B.b3M,B.b3K,B.b3G,B.b3H,B.bnn,B.bno,B.bns,B.bnt,B.bnu,B.bnv,B.bnw,B.bnx,B.bny,B.bnz,B.bnA,B.bnF,B.bnG,B.b4f,B.b4g,B.b4h,B.b5R,B.b5W,B.b5S,B.b5U,B.b5Z,B.b6M,B.b6L,B.b6Z,B.b7_,B.b71,B.b75,B.b72,B.b6W,B.b6X,B.b6Y,B.b9P,B.b9L,B.b9S,B.b9N,B.b9W,B.b9M,B.baH,B.baE,B.baF,B.baG,B.baj,B.bal,B.bag,B.ba4,B.bad,B.ba2,B.ba1,B.baA,B.baB,B.bau,B.baw,B.bax,B.bas,B.bat,B.bam,B.bao,B.bap,B.bd0,B.bd1,B.bd3,B.bd4,B.bd5,B.bd6,B.bd7,B.ba0,B.bnj,B.aDS,B.aDV,B.bfu,B.bcf,B.bcg,B.bcl,B.bch,B.bco,B.bci,B.buF,B.buG,B.bfl,B.bfm,B.bfn,B.bfo,B.bfp,B.bfq,B.bfk,B.bfs,B.aK1,B.aJX,B.bgH,B.bgE,B.bgB,B.bgy,B.bgz,B.bgK,B.bgJ,B.bp3,B.bgr,B.bgo,B.bjY,B.bk0,B.bjT,B.b9w,B.b9z,B.b9k,B.b9t,B.b9j,B.bnT,B.bnP,B.bnQ,B.bnJ,B.bbj,B.bbg,B.bp5,B.aLh,B.biL,B.biM,B.biN,B.bjI,B.bjJ,B.bjP,B.bjO,B.bjS,B.bjN,B.aBb,B.aBc,B.b0s,B.bnX,B.bo_,B.bnY,B.aVW,B.aVX,B.ax8])
v(A.y2,[B.zu,B.akx,B.akw,B.akv,B.a4G,B.ah5,B.ajR,B.ar3,B.a4R,B.a6M,B.amJ,B.aoT,B.ajD,B.ark,B.ako,B.a7l])
v(A.bf,[B.xx,B.Ci,B.KM,B.Lb,B.Bq,B.Bt,B.LK,B.BB,B.Mr,B.BK,B.O1,B.zr,B.BX,B.Sf,B.C7,B.BA,B.Y8,B.Cj,B.Cu,B.Fy,B.PP])
v(A.y1,[B.Tk,B.Y6,B.Tw,B.TQ,B.TT,B.U3,B.U5,B.UL,B.ajS,B.V5,B.VM,B.amT,B.VV,B.as4,B.WL,B.UI,B.arl,B.Y7,B.YB,B.Ww,B.WH])
v(A.M,[B.BT,B.GC])
v(A.a1,[B.VN,B.Ya])
v(A.HZ,[B.b6C,B.wi,B.kc])
u(B.b6D,A.xU)
u(B.S7,A.vd)
v(B.wj,[B.anG,B.O_,B.a5d,B.a5s])
u(B.anL,A.c)
u(B.qh,A.hL)
u(B.vZ,A.J)
u(B.S5,A.aX)
u(B.arW,A.bW)
u(B.arV,A.fS)
u(B.Jj,B.auD)
w(B.auD,A.aO)})()
A.bq5(b.typeUniverse,JSON.parse('{"yR":{"U":[],"c":[]},"alr":{"U":[],"c":[]},"OW":{"U":[],"c":[]},"zt":{"fC":["be<~>"],"fC.T":"be<~>"},"zu":{"bf":[],"M":[],"c":[]},"ang":{"U":[],"c":[]},"akj":{"U":[],"c":[]},"ajh":{"U":[],"c":[]},"xx":{"bf":[],"M":[],"c":[]},"Tk":{"a1":["xx"]},"aml":{"U":[],"c":[]},"akx":{"bf":[],"M":[],"c":[]},"akw":{"bf":[],"M":[],"c":[]},"akv":{"bf":[],"M":[],"c":[]},"ath":{"U":[],"c":[]},"amm":{"U":[],"c":[]},"arq":{"U":[],"c":[]},"Cy":{"U":[],"c":[]},"aie":{"U":[],"c":[]},"Vw":{"U":[],"c":[]},"a0e":{"U":[],"c":[]},"Ci":{"bf":[],"M":[],"c":[]},"a4G":{"bf":[],"M":[],"c":[]},"aki":{"U":[],"c":[]},"ah5":{"bf":[],"M":[],"c":[]},"Y6":{"a1":["Ci"]},"ajp":{"U":[],"c":[]},"KM":{"bf":[],"M":[],"c":[]},"Tw":{"a1":["KM"]},"Lb":{"bf":[],"M":[],"c":[]},"TQ":{"a1":["Lb"]},"ai1":{"U":[],"c":[]},"Bq":{"bf":[],"M":[],"c":[]},"a1t":{"U":[],"c":[]},"TT":{"a1":["Bq"]},"Bt":{"bf":[],"M":[],"c":[]},"a1P":{"U":[],"c":[]},"U3":{"a1":["Bt"]},"LK":{"bf":[],"M":[],"c":[]},"HG":{"U":[],"c":[]},"U5":{"a1":["LK"]},"BB":{"bf":[],"M":[],"c":[]},"a4F":{"U":[],"c":[]},"UL":{"a1":["BB"]},"Mr":{"bf":[],"M":[],"c":[]},"ajS":{"a1":["Mr"]},"aqz":{"U":[],"c":[]},"al4":{"U":[],"c":[]},"al5":{"U":[],"c":[]},"ajR":{"bf":[],"M":[],"c":[]},"ar3":{"bf":[],"M":[],"c":[]},"aks":{"U":[],"c":[]},"BT":{"M":[],"c":[]},"a4R":{"bf":[],"M":[],"c":[]},"VN":{"a1":["BT"]},"BK":{"bf":[],"M":[],"c":[]},"a59":{"U":[],"c":[]},"V5":{"a1":["BK"]},"O1":{"bf":[],"M":[],"c":[]},"Im":{"U":[],"c":[]},"VM":{"a1":["O1"]},"aoP":{"U":[],"c":[]},"alm":{"U":[],"c":[]},"wQ":{"U":[],"c":[]},"an9":{"U":[],"c":[]},"ar4":{"U":[],"c":[]},"ar6":{"U":[],"c":[]},"a6M":{"bf":[],"M":[],"c":[]},"zr":{"bf":[],"M":[],"c":[]},"amT":{"a1":["zr"]},"BX":{"bf":[],"M":[],"c":[]},"a7o":{"U":[],"c":[]},"VV":{"a1":["BX"]},"Sf":{"bf":[],"M":[],"c":[]},"C7":{"bf":[],"M":[],"c":[]},"BA":{"bf":[],"M":[],"c":[]},"Y8":{"bf":[],"M":[],"c":[]},"Cj":{"bf":[],"M":[],"c":[]},"as4":{"a1":["Sf"]},"amJ":{"bf":[],"M":[],"c":[]},"alq":{"U":[],"c":[]},"BW":{"U":[],"c":[]},"aoT":{"bf":[],"M":[],"c":[]},"aoS":{"U":[],"c":[]},"WL":{"a1":["C7"]},"ajD":{"bf":[],"M":[],"c":[]},"ajC":{"U":[],"c":[]},"UI":{"a1":["BA"]},"arl":{"a1":["Y8"]},"ark":{"bf":[],"M":[],"c":[]},"arj":{"U":[],"c":[]},"Y7":{"a1":["Cj"]},"ako":{"bf":[],"M":[],"c":[]},"akn":{"U":[],"c":[]},"tP":{"U":[],"c":[]},"Cu":{"bf":[],"M":[],"c":[]},"adE":{"U":[],"c":[]},"YB":{"a1":["Cu"]},"a7l":{"bf":[],"M":[],"c":[]},"Fy":{"bf":[],"M":[],"c":[]},"Ww":{"a1":["Fy"]},"PP":{"bf":[],"M":[],"c":[]},"WH":{"a1":["PP"]},"a1y":{"U":[],"c":[]},"a1z":{"U":[],"c":[]},"a48":{"U":[],"c":[]},"S7":{"U":[],"c":[]},"anG":{"wj":[]},"anL":{"c":[]},"GC":{"M":[],"c":[]},"Ya":{"a1":["GC"]},"qh":{"hL":[],"e1":[]},"O_":{"wj":[]},"a5d":{"wj":[]},"a5s":{"wj":[]},"vZ":{"J":[],"L":[],"aT":[]},"S5":{"aX":[],"c":[]},"arW":{"bW":[],"bM":[],"y":[]},"S6":{"U":[],"c":[]},"arV":{"fS":["qh"],"bq":[],"c":[],"fS.T":"qh"},"bSv":{"bA":[],"bq":[],"c":[]}}'))
var y={k:'<h2 style="margin-top:14pt">Bilanzwert der Vorr\xe4te</h2>',c:'<section class="matrix-block"><h2 style="margin-top:14pt">Bewertungsansatz MHD-Abschlag</h2><p class="matrix-intro">Je Rest-Laufzeit am Bilanzstichtag wird folgender Abschlag auf den Anschaffungskosten-wert eines FIFO-Restlots angesetzt. Die Bandbreite orientiert sich an branchen\xfcblichen Ans\xe4tzen f\xfcr verderbliche Handelswaren; angesetzt wird der Mittelwert.</p>',b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.at
return{u:w("mH"),c:w("be<v<hS>>"),w:w("be<v<a3<f,@>>>"),bj:w("be<v<kl>>"),i:w("be<br<f>>"),cA:w("a0G"),cT:w("av"),O:w("hL"),fl:w("jm<u>"),o:w("a5<f,f>"),cn:w("hM"),cu:w("a47"),d:w("bSv"),bz:w("lK<aZ>"),f0:w("o9"),Q:w("js"),r:w("dV<f>"),dk:w("bM"),fY:w("R<jj?>"),hf:w("t<@>"),hc:w("B<jm<u>>"),F:w("B<fw>"),G:w("B<fk>"),_:w("B<r5>"),I:w("B<dV<f>>"),x:w("B<pM>"),cV:w("B<v<cY>>"),t:w("B<a3<f,@>>"),U:w("B<FI<@>>"),aO:w("B<cY>"),s:w("B<f>"),p:w("B<c>"),ew:w("B<fF>"),R:w("B<lu>"),bs:w("B<Jj>"),eQ:w("B<F>"),V:w("B<J?>"),n:w("bl<Eo>"),aA:w("iw<p3<be<~>>>"),am:w("v<bM>"),d7:w("v<v<cY>>"),W:w("v<hS>"),D:w("v<a3<f,@>>"),e:w("v<kl>"),j:w("v<@>"),f9:w("l3"),M:w("zt"),K:w("a7q"),J:w("bt<f,f>"),P:w("a3<f,@>"),f:w("a3<@,@>"),m:w("k8"),a:w("bp"),aU:w("D"),bX:w("rP"),Y:w("J"),S:w("vZ"),eV:w("cY"),C:w("br<f>"),Z:w("wh"),N:w("f"),A:w("np"),de:w("S5"),L:w("qh"),eA:w("wj"),cZ:w("ml"),af:w("bd<fF>"),l:w("c"),k:w("d6"),av:w("qr"),v:w("bF<E?>"),cQ:w("Ig"),dr:w("amb"),q:w("x1"),gN:w("iq<J>"),b:w("bo<E?>"),y:w("A"),gR:w("F"),z:w("@"),B:w("u"),ea:w("uC?"),g:w("v<@>?"),h:w("a3<f,@>?"),X:w("D?"),dE:w("J?"),T:w("f?"),aD:w("io?"),E:w("c?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_F=new B.xx(null)
D.a_G=new B.a0e(null)
D.a_P=new B.KM(null)
D.Bk=new A.bm(C.ak,1,C.U,-1)
D.a0e=new A.bm(C.m,1.5,C.U,-1)
D.a0v=new A.av(0,180,0,1/0)
D.mL=new A.av(34,1/0,34,1/0)
D.BP=new B.a5s()
D.a2H=new B.anG()
D.a2S=new B.Lb(null)
D.a2Y=new B.a1t(null)
D.ad5=new A.aH(E.fS,40,C.q,null,null)
D.aH1=new A.ab("Keine Freigabe-Anfragen offen.",null,null,null,null,null,null,null,null,null)
D.aiK=w([D.ad5,C.Q,D.aH1],x.p)
D.a5d=new A.jX(C.M,C.f,C.J,C.k,null,C.bA,null,0,D.aiK,null)
D.aue=new A.ah(C.dd,D.a5d,null)
D.a30=new A.ft(C.W,null,null,D.aue,null)
D.aHl=new A.ab("Kein Bestand erfasst.",null,null,null,null,null,null,null,null,null)
D.a31=new A.ft(C.W,null,null,D.aHl,null)
D.aHE=new A.ab("Keine Eintr\xe4ge im Zeitraum.",null,null,null,null,null,null,null,null,null)
D.a34=new A.ft(C.W,null,null,D.aHE,null)
D.a3c=new B.a1P(null)
D.a5f=new B.LK(null)
D.aGD=new A.ab("",null,null,null,null,null,null,null,null,null)
D.kS=new B.fw(D.aGD)
D.aFH=new A.ab("Anlass",null,null,null,null,null,null,null,null,null)
D.a5Y=new B.fk(D.aFH,!1)
D.aGF=new A.ab("Betrag",null,null,null,null,null,null,null,null,null)
D.a5Z=new B.fk(D.aGF,!0)
D.aGM=new A.ab("Datum",null,null,null,null,null,null,null,null,null)
D.D6=new B.fk(D.aGM,!1)
D.aHc=new A.ab("km",null,null,null,null,null,null,null,null,null)
D.a66=new B.fk(D.aHc,!0)
D.a6t=new B.a4F(null)
D.kW=new A.mV(1,null,null)
D.a6y=new B.a4G(null)
D.a6z=new B.Mr(null)
D.aG_=new A.ab("\u2014 kein Produkt \u2014",null,null,null,null,null,null,null,null,null)
D.a6K=new A.dV(null,D.aG_,C.aW,null,x.r)
D.aFX=new A.ab("\u2014 freie Eingabe \u2014",null,null,null,null,null,null,null,null,null)
D.a6M=new A.dV(null,D.aFX,C.aW,null,x.r)
D.a7m=new A.aj(0,0,0,16)
D.a7n=new A.aj(0,0,0,2)
D.a7x=new A.aj(0,28,0,6)
D.Du=new A.aj(0,3,0,3)
D.a7C=new A.aj(0,5,0,5)
D.a7F=new A.aj(10,5,10,5)
D.a7S=new A.aj(20,0,20,0)
D.x1=new A.aj(20,12,20,0)
D.a87=new A.aj(7,3,7,3)
D.a8b=new B.a4R(null)
D.a8o=new A.e6("Betriebliche Fahrten",!1,null)
D.a8h=new A.kQ(1,C.dW,D.a8o,null)
D.a8p=new A.e6("Fahrzeugkosten",!1,null)
D.a8q=new A.e6("Freigabe",!1,null)
D.a8C=new A.e6("Abo-Verwaltung",!1,null)
D.a8O=new B.a59(null)
D.aGp=new A.ab("Freigaben",null,null,null,null,null,null,null,null,null)
D.a95=new A.et(D.aGp,null,null)
D.aHn=new A.ab("K\xfcndigungen",null,null,null,null,null,null,null,null,null)
D.a97=new A.et(D.aHn,null,null)
D.aIc=new A.ab("Anlage PKW-Kosten",null,null,null,null,null,null,null,null,null)
D.a9a=new A.et(D.aIc,null,null)
D.aHO=new A.ab("B2B-Kunden \u2014 sevDesk-Export",null,null,null,null,null,null,null,null,null)
D.a9b=new A.et(D.aHO,null,null)
D.aGd=new A.ab("Mitarbeiter",null,null,null,null,null,null,null,null,null)
D.a9c=new A.et(D.aGd,null,null)
D.aHh=new A.ab("Reklamationen",null,null,null,null,null,null,null,null,null)
D.a9h=new A.et(D.aHh,null,null)
D.aI4=new A.ab("Inventur \u2014 FIFO-Bewegungsreport",null,null,null,null,null,null,null,null,null)
D.a9l=new A.et(D.aI4,null,null)
D.aGb=new A.ab("Inventur",null,null,null,null,null,null,null,null,null)
D.a9n=new A.et(D.aGb,null,null)
D.aGX=new A.ab("Anlagen",null,null,null,null,null,null,null,null,null)
D.a9r=new A.et(D.aGX,null,null)
D.aFz=new A.ab("Dokumente",null,null,null,null,null,null,null,null,null)
D.a9t=new A.et(D.aFz,null,null)
D.aFu=new A.ab("Telemetrie / IoT",null,null,null,null,null,null,null,null,null)
D.a9u=new A.et(D.aFu,null,null)
D.a9U=new A.a7(58147,"MaterialIcons",null,!1)
D.a9X=new A.a7(58206,"MaterialIcons",null,!1)
D.aa9=new A.a7(58550,"MaterialIcons",null,!1)
D.aaf=new A.a7(58742,"MaterialIcons",null,!1)
D.aak=new A.a7(58966,"MaterialIcons",null,!1)
D.aap=new A.a7(59084,"MaterialIcons",null,!1)
D.aaq=new A.a7(59124,"MaterialIcons",null,!1)
D.Ey=new A.a7(61190,"MaterialIcons",null,!1)
D.EC=new A.a7(61270,"MaterialIcons",null,!1)
D.aaE=new A.a7(61358,"MaterialIcons",null,!1)
D.ED=new A.a7(61382,"MaterialIcons",null,!1)
D.aaN=new A.a7(61584,"MaterialIcons",null,!1)
D.EE=new A.a7(61585,"MaterialIcons",null,!1)
D.aaP=new A.a7(61657,"MaterialIcons",null,!1)
D.aaR=new A.a7(61682,"MaterialIcons",null,!1)
D.aaY=new A.a7(61838,"MaterialIcons",null,!1)
D.ab0=new A.a7(62003,"MaterialIcons",null,!1)
D.ab8=new A.a7(62295,"MaterialIcons",null,!1)
D.abd=new A.a7(62446,"MaterialIcons",null,!1)
D.abe=new A.a7(62522,"MaterialIcons",null,!1)
D.abh=new A.a7(62579,"MaterialIcons",null,!1)
D.abv=new A.a7(984578,"MaterialIcons",null,!1)
D.abw=new A.a7(984664,"MaterialIcons",null,!1)
D.aby=new A.a7(984828,"MaterialIcons",null,!1)
D.EZ=new A.aH(C.i4,16,C.m,null,null)
D.abX=new A.aH(C.lf,32,C.j,null,null)
D.ac_=new A.aH(C.a9V,16,null,null,null)
D.F3=new A.aH(C.Es,null,null,null,null)
D.ac9=new A.aH(C.i4,14,C.m,null,null)
D.Eu=new A.a7(59030,"MaterialIcons",null,!1)
D.acc=new A.aH(D.Eu,null,null,null,null)
D.aa1=new A.a7(58442,"MaterialIcons",null,!1)
D.acn=new A.aH(D.aa1,null,null,null,null)
D.Ee=new A.a7(57415,"MaterialIcons",null,!1)
D.o0=new A.aH(D.Ee,null,null,null,null)
D.lj=new A.aH(E.Ek,null,null,null,null)
D.acw=new A.aH(C.ji,16,null,null,null)
D.aaj=new A.a7(58950,"MaterialIcons",null,!1)
D.acz=new A.aH(D.aaj,18,null,null,null)
D.acA=new A.aH(C.i3,16,null,null,null)
D.Fa=new A.aH(D.Ee,18,null,null,null)
D.aa8=new A.a7(58516,"MaterialIcons",null,!1)
D.acI=new A.aH(D.aa8,20,null,null,null)
D.acJ=new A.aH(C.lf,null,C.aE,null,null)
D.a9P=new A.a7(57918,"MaterialIcons",null,!1)
D.Fb=new A.aH(D.a9P,18,null,null,null)
D.acQ=new A.aH(C.xY,null,C.q,null,null)
D.a9Q=new A.a7(57919,"MaterialIcons",null,!1)
D.acW=new A.aH(D.a9Q,20,null,null,null)
D.acX=new A.aH(E.fS,20,null,null,null)
D.aay=new A.a7(61280,"MaterialIcons",null,!1)
D.ad0=new A.aH(D.aay,null,null,null,null)
D.ad3=new A.aH(D.Eu,20,null,null,null)
D.ad7=new A.aH(C.le,18,C.m,null,null)
D.aa7=new A.a7(58514,"MaterialIcons",null,!1)
D.ada=new A.aH(D.aa7,null,null,null,null)
D.adj=new A.aH(C.lh,16,C.q,null,null)
D.abb=new A.a7(62403,"MaterialIcons",null,!1)
D.adm=new A.aH(D.abb,18,null,null,null)
D.adn=new A.aH(C.le,null,null,null,null)
D.adW=new A.c_(null,null,null,"Provider",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.adX=new A.c_(null,null,null,"Rechnungsdatum",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae_=new A.c_(null,null,null,"Entnommener Betrag brutto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae1=new A.c_(null,null,null,"Name (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae2=new A.c_(null,null,null,"Kosten (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae3=new A.c_(null,null,null,"Wechselgeld (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae4=new A.c_(null,null,null,"Produktbezeichnung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fh=new A.c_(null,null,null,"Betrag brutto in Euro",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fi=new A.c_(null,null,null,"Bezeichnung (freiwillig)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fj=new A.c_(null,null,null,"Kostenart",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae5=new A.c_(null,null,null,"Ma\xdfnahme",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae7=new A.c_(null,null,null,"Adapter",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ae8=new A.c_(null,null,null,"Bemerkung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aea=new A.c_(null,null,null,"Korrekturma\xdfnahme (bei \xdcberschreitung)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeb=new A.c_(null,null,null,"HMAC-Secret",null,null,null,"Wird zur Signaturpr\xfcfung genutzt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fk=new A.c_(null,null,null,"Kilometer (Hin- und R\xfcckweg)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aec=new A.c_(null,null,null,"Slot-Code (z. B. A3)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aed=new A.c_(null,null,null,"Antwort an den Kunden",null,null,null,"Wird dem Kunden im Verlauf angezeigt.",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.up,!0,null,null,null,null)
D.aef=new A.c_(null,null,null,"Automat",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeg=new A.c_(null,null,null,"Rechnungsnummer",null,null,null,"Nummer der Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeh=new A.c_(null,null,null,"Titel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aej=new A.c_(null,null,null,"Eingelegte Menge",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aen=new A.c_(null,null,null,"MHD des Lots (empfohlen)",null,null,null,"Wird f\xfcr die MHD-Bewertung im Inventurreport genutzt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeo=new A.c_(null,null,null,"Reinigungsmittel",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fl=new A.c_(null,null,null,"Fahrzeug",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aep=new A.c_(null,null,null,"Anzeigename",null,null,null,'z. B. \u201eCleverMetrics-Prod"',null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeq=new A.c_(null,null,null,"Fehlerbeschreibung",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aer=new A.c_(null,null,null,"Ist-Temperatur (\xb0C)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\xb0C",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fm=new A.c_(null,null,null,"Produkt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aes=new A.c_(null,null,null,"Automat w\xe4hlen",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aew=new A.c_(null,null,null,"VK-Preis netto (\u20ac)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aey=new A.c_(null,null,null,"Kilometerstand am 01.01.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.Fn=new A.c_(null,null,null,"Anlass der Fahrt",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aez=new A.c_(null,null,null,"Menge (St\xfcck)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeA=new A.c_(null,null,null,null,null,null,null,null,null,null,"Kommentar (Pflicht)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeB=new A.c_(null,null,null,"Entnommener Verderb",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeC=new A.c_(null,null,null,"Grund",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeD=new A.c_(null,null,null,"Externe Ger\xe4t-ID / Serien-Nummer",null,null,null,"Wie beim Provider hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeE=new A.c_(null,null,null,"Produkt (optional, koppelt Inventur)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeF=new A.c_(null,null,null,"EK-Preis netto \u20ac/St\xfcck",null,null,null,"Aus Lieferantenrechnung",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeG=new A.c_(null,null,null,"Firmware (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeH=new A.c_(null,null,null,"Notizen (optional)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeI=new A.c_(null,null,null,"Kilometerstand am 31.12.",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"km",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeK=new A.c_(null,null,null,"E-Mail",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeL=new A.c_(null,null,null,"Ordner",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeM=new A.c_(null,null,null,"Kapazit\xe4t",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeN=new A.c_(null,null,null,"Art",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeO=new A.c_(null,null,null,"Differenz (+ auff\xfcllen / \u2212 abziehen)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aeR=new A.c_(null,null,null,"Erledigt durch (Name/Firma)",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.afb=new B.O_(1)
D.afc=new B.O_(null)
D.afd=new B.O1(null)
D.afe=new B.a6M(null)
D.yh=new A.rC(null,null,null,null,null,null,null,null)
D.apw=new A.bt("tanken","Tanken",x.J)
D.apz=new A.bt("versicherung","Versicherung",x.J)
D.apy=new A.bt("kfz_steuer","Kfz-Steuer",x.J)
D.apx=new A.bt("waesche","Autow\xe4sche",x.J)
D.apu=new A.bt("reparatur","Reparaturen",x.J)
D.apt=new A.bt("leasing","Leasingraten",x.J)
D.aps=new A.bt("abschreibung","Abschreibung",x.J)
D.apv=new A.bt("sonstiges","Sonstiges",x.J)
D.ahw=w([D.apw,D.apz,D.apy,D.apx,D.apu,D.apt,D.aps,D.apv],A.at("B<bt<f,f>>"))
D.aFK=new A.ab("Rechnung",null,null,null,null,null,null,null,null,null)
D.D5=new B.fk(D.aFK,!1)
D.aG2=new A.ab("Rg-Datum",null,null,null,null,null,null,null,null,null)
D.a60=new B.fk(D.aG2,!1)
D.aHS=new A.ab("Rest",null,null,null,null,null,null,null,null,null)
D.a62=new B.fk(D.aHS,!0)
D.aHw=new A.ab("EK/Stk.",null,null,null,null,null,null,null,null,null)
D.D3=new B.fk(D.aHw,!0)
D.aGV=new A.ab("MHD",null,null,null,null,null,null,null,null,null)
D.D4=new B.fk(D.aGV,!1)
D.aGt=new A.ab("Restlaufzeit",null,null,null,null,null,null,null,null,null)
D.a63=new B.fk(D.aGt,!0)
D.aHY=new A.ab("Abschlag %",null,null,null,null,null,null,null,null,null)
D.a5U=new B.fk(D.aHY,!0)
D.aGe=new A.ab("AK-Wert",null,null,null,null,null,null,null,null,null)
D.a68=new B.fk(D.aGe,!0)
D.aHZ=new A.ab("Abschlag \u20ac",null,null,null,null,null,null,null,null,null)
D.a5V=new B.fk(D.aHZ,!0)
D.aHv=new A.ab("Bilanz",null,null,null,null,null,null,null,null,null)
D.a5T=new B.fk(D.aHv,!0)
D.aj7=w([D.D5,D.a60,D.a62,D.D3,D.D4,D.a63,D.a5U,D.a68,D.a5V,D.a5T],x.G)
D.aFW=new A.ab("Vorgang",null,null,null,null,null,null,null,null,null)
D.a64=new B.fk(D.aFW,!1)
D.aG5=new A.ab("Menge",null,null,null,null,null,null,null,null,null)
D.a5W=new B.fk(D.aG5,!0)
D.aH3=new A.ab("Bemerkung",null,null,null,null,null,null,null,null,null)
D.a5X=new B.fk(D.aH3,!1)
D.ajm=w([D.D6,D.a64,D.a5W,D.D3,D.D5,D.D4,D.a5X],x.G)
D.aG8=new A.ab("Au\xdfenreinigung",null,null,null,null,null,null,null,null,null)
D.a6E=new A.dV("exterior",D.aG8,C.aW,null,x.r)
D.aFU=new A.ab("Innenreinigung",null,null,null,null,null,null,null,null,null)
D.a6L=new A.dV("interior",D.aFU,C.aW,null,x.r)
D.aG1=new A.ab("Vollreinigung + Desinfektion",null,null,null,null,null,null,null,null,null)
D.a6H=new A.dV("full",D.aG1,C.aW,null,x.r)
D.ajQ=w([D.a6E,D.a6L,D.a6H],x.I)
D.aFV=new A.ab("MHD \xfcberschritten",null,null,null,null,null,null,null,null,null)
D.a6I=new A.dV("mhd",D.aFV,C.aW,null,x.r)
D.aGg=new A.ab("Besch\xe4digung",null,null,null,null,null,null,null,null,null)
D.a6P=new A.dV("damage",D.aGg,C.aW,null,x.r)
D.aHf=new A.ab("Hygienemangel",null,null,null,null,null,null,null,null,null)
D.a6N=new A.dV("hygiene",D.aHf,C.aW,null,x.r)
D.aGr=new A.ab("Sonstiges",null,null,null,null,null,null,null,null,null)
D.a6Q=new A.dV("other",D.aGr,C.aW,null,x.r)
D.ak5=w([D.a6I,D.a6P,D.a6N,D.a6Q],x.I)
D.am7=w(["> 4 Wochen","0 % Abschlag","0 %","normale Verwertbarkeit"],x.s)
D.anz=w(["2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit, ggf. erh\xf6hte Preisaktionen"],x.s)
D.alz=w(["1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck"],x.s)
D.aiz=w(["< 1 Woche","50\u201380 %","65 %","Risiko des Nichtverkaufs deutlich erh\xf6ht"],x.s)
D.ans=w(["MHD \xfcberschritten","100 % Abschreibung","100 %","keine wirtschaftliche Verwertbarkeit"],x.s)
D.akx=w([D.am7,D.anz,D.alz,D.aiz,D.ans],A.at("B<v<f>>"))
D.akW=w(["Live","Provider","Ger\xe4te","Slots","Events"],x.s)
D.aH7=new A.ab("Generic (kanonisch)",null,null,null,null,null,null,null,null,null)
D.a6F=new A.dV("generic",D.aH7,C.aW,null,x.r)
D.aHA=new A.ab("CleverMetrics",null,null,null,null,null,null,null,null,null)
D.a6O=new A.dV("clevermetrics",D.aHA,C.aW,null,x.r)
D.aHz=new A.ab("Nayax",null,null,null,null,null,null,null,null,null)
D.a6G=new A.dV("nayax",D.aHz,C.aW,null,x.r)
D.aFO=new A.ab("Custom",null,null,null,null,null,null,null,null,null)
D.a6J=new A.dV("custom",D.aFO,C.aW,null,x.r)
D.alf=w([D.a6F,D.a6O,D.a6G,D.a6J],x.I)
D.alG=w([],A.at("B<bM>"))
D.aQ2=w([],A.at("B<ml>"))
D.alF=w([],x.R)
D.alE=w([],x.V)
D.ani=w(["system_admin","shareholder","employee"],x.s)
D.aO9=new B.wT("> 4 Wochen","0 %","0 %","normale Verwertbarkeit")
D.aOb=new B.wT("2\u20134 Wochen","10\u201330 %","20 %","eingeschr\xe4nkte Verkaufszeit")
D.aO8=new B.wT("1\u20132 Wochen","30\u201350 %","40 %","erheblicher Verkaufsdruck")
D.aO7=new B.wT("< 1 Woche","50\u201380 %","65 %","Risiko Nichtverkauf deutlich erh\xf6ht")
D.aOa=new B.wT("MHD \xfcberschritten","100 %","100 %","keine wirtschaftl. Verwertbarkeit")
D.ann=w([D.aO9,D.aOb,D.aO8,D.aO7,D.aOa],A.at("B<wT>"))
D.aHe=new A.ab("Rest-MHD am Stichtag",null,null,null,null,null,null,null,null,null)
D.a6_=new B.fk(D.aHe,!1)
D.aHQ=new A.ab("Typischer Ansatz",null,null,null,null,null,null,null,null,null)
D.a61=new B.fk(D.aHQ,!1)
D.aH9=new A.ab("B\xf6rdesnack24 wendet an",null,null,null,null,null,null,null,null,null)
D.a65=new B.fk(D.aH9,!0)
D.aGf=new A.ab("Begr\xfcndung",null,null,null,null,null,null,null,null,null)
D.a67=new B.fk(D.aGf,!1)
D.anI=w([D.a6_,D.a61,D.a65,D.a67],x.G)
D.anM=w(["pdf","docx","doc","jpg","jpeg","png"],x.s)
D.apr=new B.a7o(null)
D.atb={tanken:0,versicherung:1,kfz_steuer:2,waesche:3,reparatur:4,leasing:5,abschreibung:6,sonstiges:7}
D.lW=new A.a5(D.atb,["Tanken","Versicherung","Kfz-Steuer","Autow\xe4sche","Reparaturen","Leasingraten","Abschreibung","Sonstiges"],x.o)
D.at1={exterior:0,interior:1,full:2}
D.apK=new A.a5(D.at1,["Au\xdfenreinigung","Innenreinigung","Vollreinigung + Desinfektion"],x.o)
D.atd={mhd:0,damage:1,hygiene:2,other:3}
D.apL=new A.a5(D.atd,["MHD \xfcberschritten","Besch\xe4digung","Hygienemangel","Sonstiges"],x.o)
D.asS={temperature:0,cleaning:1,disposal:2,filling:3,maintenance:4,cash:5,training:6}
D.apM=new A.a5(D.asS,["haccp_temperature","haccp_cleaning","haccp_disposal","haccp_filling","haccp_maintenance","haccp_cash","haccp_training"],x.o)
D.at8={"inventory.view":0,"inventory.edit":1,"haccp.fill":2,"haccp.temperature":3,"haccp.cleaning":4,"haccp.disposal":5,"haccp.maintenance":6,"cash.collect":7,"documents.view":8}
D.Sj=new A.a5(D.at8,["Inventur ansehen","Inventur bearbeiten","Bef\xfcllung","Temperatur","Reinigung","Vernichtung","Wartung","Geldentnahme","Dokumente ansehen"],x.o)
D.a3P=new A.E(1,1,0.9529411764705882,0.8784313725490196,C.i)
D.a4B=new A.E(1,1,0.8784313725490196,0.6980392156862745,C.i)
D.a5b=new A.E(1,1,0.8,0.5019607843137255,C.i)
D.a3p=new A.E(1,1,0.7176470588235294,0.30196078431372547,C.i)
D.a43=new A.E(1,1,0.6549019607843137,0.14901960784313725,C.i)
D.a4s=new A.E(1,1,0.596078431372549,0,C.i)
D.a4L=new A.E(1,0.984313725490196,0.5490196078431373,0,C.i)
D.a3Y=new A.E(1,0.9607843137254902,0.48627450980392156,0,C.i)
D.a4J=new A.E(1,0.9372549019607843,0.4235294117647059,0,C.i)
D.a3C=new A.E(1,0.9019607843137255,0.3176470588235294,0,C.i)
D.as7=new A.dg([50,D.a3P,100,D.a4B,200,D.a5b,300,D.a3p,400,D.a43,500,D.a4s,600,D.a4L,700,D.a3Y,800,D.a4J,900,D.a3C],A.at("dg<u,E>"))
D.asi=new A.rI(D.as7,1,1,0.596078431372549,0,C.i)
D.a7z=new A.aj(0,2,6,0)
D.aab=new A.a7(58612,"MaterialIcons",null,!1)
D.acZ=new A.aH(D.aab,16,C.m,null,null)
D.aua=new A.ah(D.a7z,D.acZ,null)
D.aud=new A.ah(C.nr,C.ls,null)
D.WZ=new B.kc(0,"eq")
D.avb=new B.kc(1,"neq")
D.avc=new B.kc(10,"match")
D.avd=new B.kc(11,"imatch")
D.ave=new B.kc(12,"isDistinct")
D.avf=new B.kc(2,"lt")
D.avg=new B.kc(3,"lte")
D.avh=new B.kc(4,"gt")
D.avi=new B.kc(5,"gte")
D.X_=new B.kc(6,"inFilter")
D.avj=new B.kc(7,"like")
D.avk=new B.kc(8,"ilike")
D.avl=new B.kc(9,"isFilter")
D.aah=new A.a7(58871,"MaterialIcons",null,!1)
D.acK=new A.aH(D.aah,18,C.j,null,null)
D.a8x=new A.e6("Bilanzwert der Vorr\xe4te",!1,null)
D.amU=w([D.acK,C.b2,D.a8x],x.p)
D.awL=new A.iB(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.amU,null)
D.EW=new A.a7(984557,"MaterialIcons",null,!1)
D.ad2=new A.aH(D.EW,18,C.j,null,null)
D.a8J=new A.e6("Freigabe / Unterschriften",!1,null)
D.aie=w([D.ad2,C.b2,D.a8J],x.p)
D.awM=new A.iB(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.aie,null)
D.adf=new A.aH(E.fS,18,C.j,null,null)
D.a8H=new A.e6("Bewertungsansatz MHD-Abschlag",!1,null)
D.ai8=w([D.adf,C.b2,D.a8H],x.p)
D.awQ=new A.iB(C.ay,C.f,C.h,C.k,null,C.bA,null,0,D.ai8,null)
D.ax3=new A.fh("Steuern","Anlagen zum Jahresabschluss",null,null)
D.axb=new A.fh("Verwaltung","Betriebsprotokolle",null,null)
D.azr=new A.cN(16,16,C.Cb,null)
D.azw=new A.cN(null,48,null,null)
D.azz=new A.oK(0,"action")
D.aGE=new A.ab("F\xfcr dieses Dokument ist noch keine Version hochgeladen.",null,null,null,null,null,null,null,null,null)
D.azK=new A.dG(D.aGE,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHo=new A.ab("Signiertes PDF wird ge\xf6ffnet \u2026",null,null,null,null,null,null,null,null,null)
D.azP=new A.dG(D.aHo,null,null,null,null,null,null,null,null,null,null,null,null,C.kX,!1,null,null,null,C.n,null)
D.aFL=new A.ab("Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azR=new A.dG(D.aFL,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aFQ=new A.ab("Bitte einen Betrag \xfcber null angeben.",null,null,null,null,null,null,null,null,null)
D.YT=new A.dG(D.aFQ,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHB=new A.ab("Einladung versendet.",null,null,null,null,null,null,null,null,null)
D.azU=new A.dG(D.aHB,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aFY=new A.ab("Anlass und eine Strecke \xfcber null sind n\xf6tig.",null,null,null,null,null,null,null,null,null)
D.YU=new A.dG(D.aFY,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aGT=new A.ab("Eintrag gespeichert.",null,null,null,null,null,null,null,null,null)
D.azW=new A.dG(D.aGT,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHN=new A.ab("Speichern fehlgeschlagen (Berechtigung?).",null,null,null,null,null,null,null,null,null)
D.azX=new A.dG(D.aHN,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHg=new A.ab("Format nicht direkt anzeigbar \u2014 Datei wurde heruntergeladen. Tipp: k\xfcnftige Versionen als PDF hochladen f\xfcr Inline-Vorschau.",null,null,null,null,null,null,null,null,null)
D.a77=new A.bI(5e6)
D.azZ=new A.dG(D.aHg,null,null,null,null,null,null,null,null,null,null,null,null,D.a77,!1,null,null,null,C.n,null)
D.aHi=new A.ab('Keine Mitarbeiter angelegt \u2014 zuerst \xfcber \u201eMitarbeiter" einladen.',null,null,null,null,null,null,null,null,null)
D.aA2=new A.dG(D.aHi,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aI2=new A.ab("Der Stand am 31.12. kann nicht kleiner sein als der am 01.01.",null,null,null,null,null,null,null,null,null)
D.aA4=new A.dG(D.aI2,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aAh=new A.j7("l\xe4uft bald",C.kb,null,null)
D.aAi=new A.j7("g\xfcltig",C.fB,null,null)
D.aAj=new A.j7("abgelaufen",C.mk,null,null)
D.aAk=new A.j7("Vorlage",C.kb,null,null)
D.aAF=new B.wi(0,"top")
D.Z6=new B.wi(1,"middle")
D.aAG=new B.wi(2,"bottom")
D.aAH=new B.wi(3,"baseline")
D.Z7=new B.wi(4,"fill")
D.aAI=new B.wi(5,"intrinsicHeight")
D.aAJ=new B.Sf(null)
D.aAK=new B.adE(null)
D.aB3=new A.iF(2,!0,!1)
D.aB4=new A.iF(2,!0,!0)
D.aCQ=new A.O(!0,C.m,null,null,null,null,11,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBi=new A.O(!0,C.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFt=new A.ab("Nachweis",null,D.aBi,null,null,null,null,null,null,null)
D.aFw=new A.ab("MHD gepr\xfcft",null,null,null,null,null,null,null,null,null)
D.aEi=new A.O(!0,C.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Zo=new A.ab("Streichen",null,D.aEi,null,null,null,null,null,null,null)
D.aFB=new A.ab("In Bearbeitung",null,null,null,null,null,null,null,null,null)
D.aFE=new A.ab("setzen",null,null,null,null,null,null,null,null,null)
D.aFM=new A.ab("Provider anlegen",null,null,null,null,null,null,null,null,null)
D.aFS=new A.ab("Bild hochladen",null,null,null,null,null,null,null,null,null)
D.aG6=new A.ab("PDF konnte nicht ge\xf6ffnet werden.",null,null,null,null,null,null,null,null,null)
D.aG7=new A.ab("Betriebliche Fahrt",null,null,null,null,null,null,null,null,null)
D.An=new A.ab("Einladen",null,null,null,null,null,null,null,null,null)
D.aGj=new A.ab("Als bearbeitet markieren",null,null,null,null,null,null,null,null,null)
D.aGk=new A.ab("Fahrt",null,null,null,null,null,null,null,null,null)
D.aGl=new A.ab("CSV herunterladen (b2b_customers.csv)",null,null,null,null,null,null,null,null,null)
D.aGn=new A.ab("Ablehnung begr\xfcnden",null,null,null,null,null,null,null,null,null)
D.aGo=new A.ab("Freigeben",null,null,null,null,null,null,null,null,null)
D.aGs=new A.ab("Datens\xe4tze laden",null,null,null,null,null,null,null,null,null)
D.aGv=new A.ab("Fahrt korrigieren",null,null,null,null,null,null,null,null,null)
D.aGw=new A.ab("Kosten erfassen",null,null,null,null,null,null,null,null,null)
D.Zq=new A.ab("Anlegen",null,null,null,null,null,null,null,null,null)
D.aGW=new A.ab("Aus DocuSign holen",null,null,null,null,null,null,null,null,null)
D.aHd=new A.ab("\xe4ndern",null,null,null,null,null,null,null,null,null)
D.aHs=new A.ab("Buchen",null,null,null,null,null,null,null,null,null)
D.aHx=new A.ab("Bild nicht geladen",null,null,null,null,null,null,null,null,null)
D.aHy=new A.ab("Kilometerst\xe4nde",null,null,null,null,null,null,null,null,null)
D.aHF=new A.ab("Mitarbeiter zur Signatur einladen",null,null,null,null,null,null,null,null,null)
D.aHK=new A.ab("Neues Dokument",null,null,null,null,null,null,null,null,null)
D.aHL=new A.ab("Zeitraum",null,null,null,null,null,null,null,null,null)
D.aHM=new A.ab("Kostenposition korrigieren",null,null,null,null,null,null,null,null,null)
D.Zt=new A.ab("Erledigt",null,null,null,null,null,null,null,null,null)
D.aHR=new A.ab("Registrieren",null,null,null,null,null,null,null,null,null)
D.Zu=new A.ab("Neu",null,null,null,null,null,null,null,null,null)
D.Zv=new A.ab("Hinzuf\xfcgen",null,null,null,null,null,null,null,null,null)
D.aI5=new A.ab("Slot anlegen / bearbeiten",null,null,null,null,null,null,null,null,null)
D.aI8=new A.ab("Ger\xe4t registrieren",null,null,null,null,null,null,null,null,null)
D.aId=new A.ab("Inventur berechnen",null,null,null,null,null,null,null,null,null)
D.aM6=new B.Bq(null)
D.hC=new B.b6C(0,"flat")
D.aMg=new B.Bt(null)
D.aMp=new B.ajh(null)
D.aMx=new B.BA(null)
D.aMy=new B.ajD(null)
D.aMD=new B.BB(null)
D.a9S=new A.a7(58090,"MaterialIcons",null,!1)
D.aMN=new B.tP(D.a9S,"Automat w\xe4hlen, um die Slot-Belegung zu bearbeiten.",null)
D.aaO=new A.a7(61653,"MaterialIcons",null,!1)
D.aMO=new B.tP(D.aaO,"F\xfcr diesen Automaten sind noch keine Slots konfiguriert.",null)
D.aaF=new A.a7(61364,"MaterialIcons",null,!1)
D.aMP=new B.tP(D.aaF,"Noch kein IoT-Ger\xe4t verkn\xfcpft. Registriere das Gateway eines Automaten mit seiner externen Serien-Nummer beim jeweiligen Provider.",null)
D.a9G=new A.a7(57630,"MaterialIcons",null,!1)
D.aMQ=new B.tP(D.a9G,'Noch kein Telemetrie-Provider registriert. Lege einen an (z. B. \u201eCleverMetrics-Prod") und trage seinen Webhook-Endpoint bei uns hinterlegten HMAC-Secret ein.',null)
D.aag=new A.a7(58743,"MaterialIcons",null,!1)
D.aMR=new B.tP(D.aag,"Noch keine Telemetrie-Daten empfangen. Automat mit IoT-Modul verkn\xfcpfen und Webhook des Anbieters auf /iot-webhook zeigen lassen.",null)
D.aMS=new B.aki(null)
D.a9T=new A.a7(58134,"MaterialIcons",null,!1)
D.aMT=new B.tP(D.a9T,"Noch keine Telemetrie-Events empfangen.",null)
D.aMU=new B.ako(null)
D.aNq=new B.BK(null)
D.aNJ=new B.BT(null)
D.a_8=new B.Im(null)
D.aO_=new B.amJ(null)
D.aO0=new B.BX(null)
D.aOc=new B.an9(null)
D.aOz=new B.fF("Zu signieren","Belehrungen & Nachweise",D.EW,C.T5,!0,null,null,null,null)
D.aOE=new B.anL(null)
D.aOP=new B.C7(null)
D.aOQ=new B.aoT(null)
D.aPb=new B.Ci(null)
D.aPc=new B.Y8(null)
D.aPl=new B.Cu(null)})();(function staticFields(){$.bIX=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cgp","bD3",()=>A.ic(new B.bvu(),x.Z))
w($,"cfa","bwa",()=>A.Nj(new B.bt4(),x.C))
w($,"cgg","bD1",()=>A.Nj(new B.buQ(),x.D))
w($,"cfG","bwh",()=>C.aM.yv(0,new B.btZ(),x.e,x.N))
w($,"cgh","avW",()=>C.aM.yv(0,new B.buT(),x.D,A.at("Al")))
w($,"cfI","bwi",()=>A.b_C(B.c6G(),x.M,A.at("be<~>")))
w($,"ccQ","bw_",()=>A.ic(new B.bra(),x.u))
w($,"ccP","bvZ",()=>C.aM.$1$1(new B.br9(),x.D))
w($,"cd5","K_",()=>C.aM.$1$1(new B.bry(),x.D))
w($,"cdg","bw0",()=>C.aM.$1$1(new B.brL(),x.D))
w($,"cei","bCw",()=>C.aM.yv(0,new B.bsA(),x.D,x.N))
w($,"ce7","bCu",()=>C.aM.$1$1(new B.bsp(),x.D))
w($,"cdm","bCh",()=>C.aM.$1$1(new B.brS(),x.D))
w($,"ce8","bw5",()=>C.aM.$1$1(new B.bsq(),x.D))
w($,"cd4","bCe",()=>C.aM.$1$1(new B.brw(),x.D))
w($,"cd8","bCf",()=>C.aM.$1$1(new B.brD(),x.D))
w($,"c8V","bMF",()=>A.bZQ())})()};
(a=>{a["7mtVT0GsRxW6N+cItO5b1TAyKXs="]=a.current})($__dart_deferred_initializers__);