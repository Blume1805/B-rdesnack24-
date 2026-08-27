((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
caZ(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q="0",p=new A.aW(Date.now(),0,!1),o=C.c.cN(C.f.j(A.be(p)),2,q),n=C.c.cN(C.f.j(A.c_(p)),2,q),m=C.c.cN(C.f.j(A.hJ(p)),2,q),l=C.c.cN(C.f.j(A.AC(p)),2,q),k=C.c.cN(C.f.j(A.ach(p)),2,q),j=new B.byZ(),i=e.length===0?q:e,h=d.length===0?q:d,g=y.s,f=A.b([C.b.bX(A.b(['"EXTF"',"700","21",'"Buchungsstapel"',"13",""+A.aV(p)+o+n+m+l+k+"000","",'"BS"','"Boerdesnack24 App"',"",i,h,""+A.aV(a0)+"0101","4",j.$1(a0),j.$1(a2),'"Automatenumsaetze App"',"","1","0","0",'"EUR"'],g),";"),'"Umsatz (ohne Soll/Haben-Kz)";"Soll/Haben-Kennzeichen";"WKZ Umsatz";"Kurs";"Basis-Umsatz";"WKZ Basis-Umsatz";"Konto";"Gegenkonto (ohne BU-Schl\xfcssel)";"BU-Schl\xfcssel";"Belegdatum";"Belegfeld 1";"Belegfeld 2";"Skonto";"Buchungstext"'],g)
for(o=a1.length,x=0;x<a1.length;a1.length===o||(0,A.J)(a1),++x){w=a1[x]
v=w.b<10
u=v?"8300":"8400"
n=w.a
m=C.c.cN(C.f.j(A.c_(n)),2,q)
l=C.c.cN(C.f.j(A.be(n)),2,q)
k=A.f(j.$1(n))
i=v?"7":"19"
h=v?"7":"19"
t=C.c.cN(C.f.j(A.c_(n)),2,q)
s=C.c.cN(C.f.j(A.be(n)),2,q)
r=C.d.aa(w.c,2)
f.push(C.b.bX(A.b([A.ag(r,".",","),'"S"','"EUR"',"","","","1000",u,"",m+l,'"'+("TL"+k+"-"+i)+'"',"","",'"'+("Tageslosung App-Verkaeufe "+h+" % "+t+"."+s+"."+A.aV(n))+'"'],g),";"))}return C.b.bX(f,"\r\n")},
Ey:function Ey(d,e,f){this.a=d
this.b=e
this.c=f},
byZ:function byZ(){},
bzD(d,e,f){var x,w=new B.bzE(f<0)
if(d==="expense")return w.$1(D.fw)
if(d==="revenue")return w.$1(D.lo)
x=A.ih(C.c.aq(e),null)
if(x!=null&&x>=1800&&x<=1999)return w.$1(C.f.ai(x,100)>=90?D.lo:D.fw)
return D.aaQ},
bHm(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rF:function rF(d,e){this.a=d
this.b=e},
bzE:function bzE(d){this.a=d},
aI1(){var x=new A.aW(Date.now(),0,!1)
return new B.m1(A.bw(A.aV(x),A.be(x),1,0,0,0,0),A.bw(A.aV(x),A.be(x)+1,0,0,0,0,0))},
ou(d){return C.c.cN(C.f.j(A.aV(d)),4,"0")+"-"+C.c.cN(C.f.j(A.be(d)),2,"0")+"-"+C.c.cN(C.f.j(A.c_(d)),2,"0")},
m1:function m1(d,e){this.a=d
this.b=e},
rp:function rp(d){this.a=d},
W4:function W4(d,e){var _=this
_.w=$
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bbO:function bbO(d,e){this.a=d
this.b=e},
bbL:function bbL(d){this.a=d},
bbM:function bbM(){},
bbN:function bbN(d){this.a=d},
bGz(d,e){var x=$.cA().a4(Math.abs(d))
return e===D.fw?"-"+x:x},
bRp(d,e){var x
if(e===D.fw)return d==="revenue"||d==="expense"?C.R:C.l
if(e===D.lo)x=d==="revenue"||d==="expense"
else x=!1
if(x)return C.am
return C.l},
cc4(d,e){if(d==="expense")return e===D.fw?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fw?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fw)return"Privatentnahme"
if(e===D.lo)return"Privateinlage"
return B.bHm(d)},
DN:function DN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
mS:function mS(d){this.a=d},
azm:function azm(d){this.a=d},
azn:function azn(){},
azo:function azo(d){this.a=d},
azp:function azp(){},
ay6(d,e,f,g,h,i){return B.ce7(d,e,f,g,h,i)},
ce7(d,e,f,g,h,i){var x=0,w=A.q(y.X),v,u,t,s,r,q
var $async$ay6=A.m(function(j,k){if(j===1)return A.n(k,w)
for(;;)switch(x){case 0:r={}
q=g.a
q=A.bw(A.aV(q),A.be(q),A.c_(q),0,0,0,0)
u=g.b
u=A.bw(A.aV(u),A.be(u),A.c_(u),0,0,0,0)
f=A.bw(A.aV(f),A.be(f),A.c_(f),0,0,0,0)
h=A.bw(A.aV(h),A.be(h),A.c_(h),0,0,0,0)
t=new A.aW(Date.now(),0,!1)
s=new B.Nr(new A.lX(q,u,y.S.i("lX<DS.T>")),f,h,A.bw(A.aV(t),A.be(t),A.c_(t),0,0,0,0),C.e3,null,null,null,null,null,null,null,null,null,null,null,C.fg,null,null,null,C.Cr,null)
r.a=s
r.a=A.bMm(s,e,i)
v=A.f4(null,null,!0,null,new B.bBE(r,d),e,null,!0,!1,y.T)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$ay6,w)},
bQB(d,e,f,g){var x
if(f==null)x=d.gbz()
else x=g==null||A.aV(f)===A.aV(g)?d.Xh(f):d.Xg(f)
return x},
bQA(d,e,f,g,h){var x
if(g==null)x=d.gbx()
else x=f!=null&&A.aV(f)===A.aV(g)&&A.aV(f)===A.aV(h)?d.Xh(g):d.Xg(g)
return x},
bBE:function bBE(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
_.db=u
_.dx=v
_.dy=w
_.fr=x
_.a=a0},
W3:function W3(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.cZ$=g
_.i6$=h
_.oZ$=i
_.fn$=j
_.i7$=k
_.c=_.a=null},
bbI:function bbI(d){this.a=d},
bbH:function bbH(d){this.a=d},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbG:function bbG(d,e){this.a=d
this.b=e},
bbK:function bbK(d){this.a=d},
ajS:function ajS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.a=r},
Vd:function Vd(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
Ve:function Ve(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
b8x:function b8x(d){this.a=d},
b8y:function b8y(d){this.a=d},
b8z:function b8z(d,e){this.a=d
this.b=e},
b8A:function b8A(d){this.a=d},
b8B:function b8B(d){this.a=d},
Vf:function Vf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Vg:function Vg(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
b8D:function b8D(d,e){this.a=d
this.b=e},
b8C:function b8C(d,e){this.a=d
this.b=e},
WP:function WP(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
alc:function alc(d){this.a=d},
bml:function bml(){},
bmp:function bmp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XN:function XN(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
XO:function XO(){this.d=$
this.c=this.a=null},
W7:function W7(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.a=q},
ald:function ald(d){this.d=d
this.c=this.a=null},
bbV:function bbV(d,e){this.a=d
this.b=e},
bbW:function bbW(d){this.a=d},
bbX:function bbX(d,e,f){this.a=d
this.b=e
this.c=f},
bbQ:function bbQ(){},
bbR:function bbR(){},
bbU:function bbU(d,e){this.a=d
this.b=e},
bbP:function bbP(d,e){this.a=d
this.b=e},
bbS:function bbS(){},
bbT:function bbT(d){this.a=d},
Jk:function Jk(d,e){this.a=d
this.b=e},
X8:function X8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ao9:function ao9(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.a=o},
biK:function biK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Xo:function Xo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=t
_.db=u
_.a=v},
Jp:function Jp(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
biN:function biN(d,e,f){this.a=d
this.b=e
this.c=f},
biM:function biM(d,e){this.a=d
this.b=e},
biL:function biL(d,e){this.a=d
this.b=e},
bx5:function bx5(){},
a0y:function a0y(){},
b1z:function b1z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKv(d,e,f,g,h,i,j){var x=null,w=A.aey(e,!0,!0,!0),v=e.length
return new A.vB(new B.b1z(f,h,g,d,x),w,x,C.G,!1,x,x,i,x,!0,x,0,x,x,v,C.hG,C.S,x,x,C.o,C.br,x)},
a5Z:function a5Z(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
_.dx=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.CW=t
_.cx=u
_.cy=v
_.a=w},
bGQ(d,e){var x=0,w=A.q(y.H),v,u,t,s,r,q
var $async$bGQ=A.m(function(f,g){if(f===1)return A.n(g,w)
for(;;)switch(x){case 0:u=A.b([A.eK(65279)+d],y.s)
t=b.G
s=new t.Blob(u,{type:"text/csv;charset=utf-8"})
r=t.URL.createObjectURL(s)
q=A.aKz()
q.href=r
q.download=e
v=t.document.body
if(v!=null)v.append(q)
q.click()
q.remove()
t.URL.revokeObjectURL(r)
return A.o(null,w)}})
return A.p($async$bGQ,w)},
bO0(d,e,f){return new A.T2(new A.Bf(d,e,!0,!0,!0,0,A.bBt(),null),f)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[7]
B.Ey.prototype={}
B.rF.prototype={
L(){return"Geldfluss."+this.b}}
B.m1.prototype={
gbt(){return[B.ou(this.a),B.ou(this.b)]}}
B.rp.prototype={
U(){var x=$.ah()
return new B.W4(new A.bl(C.ae,x),new A.bl(C.ae,x))}}
B.W4.prototype={
gou(){var x=this.w
return x===$?this.w=B.aI1():x},
l(){var x=this.x,w=$.ah()
x.S$=w
x.R$=0
x=this.y
x.S$=w
x.R$=0
this.am()},
Jo(){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$Jo=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:t=new A.aW(Date.now(),0,!1)
s=v.c
s.toString
x=2
return A.k(B.ay6(null,s,A.bw(A.aV(t)-5,1,1,0,0,0,0),new A.lX(v.gou().a,v.gou().b,y.T),t,C.ef),$async$Jo)
case 2:u=e
if(u!=null)v.G(new B.bbO(v,u))
return A.o(null,w)}})
return A.p($async$Jo,w)},
BC(){var x=0,w=A.q(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$BC=A.m(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.G(new B.bbL(r))
u=4
l=y.z
f=y.j
x=7
return A.k(r.gbq().aw(0,$.bA(),y.F).dJ("datev_export_rows",A.a4(["p_from",C.c.a1(r.gou().a.dR(),0,10),"p_to",C.c.a1(r.gou().b.dR(),0,10)],y.N,l),l),$async$BC)
case 7:q=f.a(e)
l=J.cU(q,new B.bbM(),y.i)
k=A.R(l,l.$ti.i("ax.E"))
p=k
l=r.c
if(l==null){s=[1]
x=5
break}if(J.cg(p)===0){l.N(y.q).f.aG(D.aE9)
s=[1]
x=5
break}l=r.gou()
j=r.gou()
i=C.c.aq(r.x.a.a)
o=B.caZ(C.c.aq(r.y.a.a),i,l.a,p,j.b)
n="EXTF_Buchungsstapel_"+C.c.a1(r.gou().a.dR(),0,10)+"_"+C.c.a1(r.gou().b.dR(),0,10)+".csv"
x=8
return A.k(B.bGQ(o,n),$async$BC)
case 8:l=r.c
if(l==null){s=[1]
x=5
break}l.N(y.q).f.aG(A.bO(null,null,null,null,null,C.o,null,A.d("DATEV-Datei erstellt ("+J.cg(p)+" Buchungen).",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
g=t.pop()
m=A.a_(g)
l=r.c
if(l==null){s=[1]
x=5
break}l.N(y.q).f.aG(A.bO(null,null,null,null,null,C.o,null,A.d("Export fehlgeschlagen: "+A.f(m),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.G(new B.bbN(r))
x=s.pop()
break
case 6:case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$BC,w)},
p(d){var x,w,v,u,t=this,s=null,r=C.am.dz(0.14),q=A.ar(4),p=A.c5(C.am.dz(0.5),1),o=y.p
q=A.a9(A.b([D.a9S,A.aD(s,A.a9(A.b([D.adU,C.c4,A.d("DATEV",s,s,s,s,A.t(C.am,11,C.r).fm(0.4),s,s,s)],o),C.k,s,C.e,C.H,0,s,s),C.p,s,s,new A.aB(r,s,p,q,s,s,C.B),s,s,s,s,C.lg,s,s,s)],o),C.k,s,C.e,C.i,0,s,s)
p=A.d("Erzeugt eine CSV-Datei im DATEV-Format (EXTF-Buchungsstapel, SKR 03). Enthalten sind die Tageslosungen der App-Verk\xe4ufe je Steuersatz: Kasse (1000) an Erl\xf6se 7 % (8300) bzw. 19 % (8400) \u2014 entsprechend der GoBD-Verfahrensdokumentation. Buchhaltung und Steuererkl\xe4rungen erstellt Gesellschafter Philipp Blume; die Datei l\xe4sst sich direkt in eine DATEV-f\xe4hige Buchhaltungssoftware importieren.",s,s,s,s,A.t(C.l,13,C.j).cC(1.4),s,s,s)
r=t.z?s:t.gaJK()
x=t.gou()
w=$.cQ()
r=A.ev(D.afr,A.d("Zeitraum: "+w.a4(x.a)+" \u2013 "+w.a4(t.gou().b),s,s,s,s,s,s,s,s),r,s)
w=A.cE(s,C.ad,!1,s,!0,C.o,s,A.cI(),t.x,s,s,s,s,s,2,D.agV,C.S,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,C.cE,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.y,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a0,s,C.Q,s,s,s,s)
x=A.cE(s,C.ad,!1,s,!0,C.o,s,A.cI(),t.y,s,s,s,s,s,2,D.ah4,C.S,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,C.cE,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.y,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a0,s,C.Q,s,s,s,s)
v=t.z?s:t.gawM()
u=A.dL(C.n,C.h,s,C.es,s,s,s)
return A.d8(D.abe,s,A.d5(A.b([q,C.D,p,C.L,A.b4(s,A.a3(A.b([r,C.t,w,C.D,x,C.L,A.fq(t.z?D.ZG:D.FH,D.aMY,v,u)],o),C.aa,C.e,C.i),s,s,C.y,s,s,3),C.t,A.d("Hinweis: Bargeld-Entnahmen und Bankbewegungen bucht Philipp Blume weiterhin \xfcber sevDesk/Kontoauszug \u2014 diese Datei deckt bewusst nur die Erl\xf6sseite ab, damit keine Buchungen doppelt entstehen.",s,s,s,s,A.t(C.l,11,C.j).cC(1.35),s,s,s)],o),s,C.y,s,C.G,!1),s,s,s)}}
B.DN.prototype={
p(d){var x=this,w=null,v=x.d,u=x.c,t=B.bzD(v,x.e,u),s=B.bGz(u,t),r=A.t(B.bRp(v,t),x.f,C.C)
return A.d(s,w,w,w,B.cc4(v,t)+" "+$.cA().a4(Math.abs(u)),r,w,w,w)}}
B.mS.prototype={
wi(d,e,f,g,h){return this.b10(d,e,f,g,h)},
b10(d,e,f,g,h){var x=0,w=A.q(y.N),v,u=this,t,s,r,q
var $async$wi=A.m(function(i,j){if(i===1)return A.n(j,w)
for(;;)switch(x){case 0:t=u.a
s=y.N
r=y.z
x=3
return A.k(t.dJ("request_document_approval",A.a4(["p_document_kind",d,"p_period_from",C.c.a1(e.dR(),0,10),"p_period_to",C.c.a1(f.dR(),0,10),"p_title",h,"p_snapshot",g,"p_draft_path",null],s,r),r),$async$wi)
case 3:q=j
t=t.ax
t===$&&A.a()
r=J.nX(q)
t.fO("approval-notify",A.a4(["approval_id",r.j(q),"phase","requested"],s,s))
v=r.j(q)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$wi,w)},
LN(d,e,f){return this.aTv(d,e,f)},
aTv(d,e,f){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$LN=A.m(function(g,h){if(g===1)return A.n(h,w)
for(;;)switch(x){case 0:u=v.a
t=y.N
s=y.z
x=2
return A.k(u.dJ("decide_document_approval",A.a4(["p_approval_id",d,"p_decision",f,"p_comment",e],t,s),s),$async$LN)
case 2:u=u.ax
u===$&&A.a()
u.fO("approval-notify",A.a4(["approval_id",d,"phase",f==="approved"?"approved":"rejected"],t,t))
u.fO("document-finalize",A.a4(["approval_id",d],t,t))
return A.o(null,w)}})
return A.p($async$LN,w)},
Ha(d){return this.amD(d)},
amD(d){var x=0,w=A.q(y.u),v,u=this,t
var $async$Ha=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:t=u.a.ay
t===$&&A.a()
x=3
return A.k(t.cM("signed-documents").nM(d,86400),$async$Ha)
case 3:v=f
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$Ha,w)},
zl(d,e){return this.aYa(0,!1)},
aY9(d){return this.zl(0,!1)},
aYa(a8,a9){var x=0,w=A.q(y.D),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$zl=A.m(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:e=s.a
d=y.N
a0=y.z
a1=y.j
a2=y.P
a6=J
a7=a1
x=3
return A.k(e.dJ("list_document_approvals",A.a4(["p_mine_only",!1],d,a0),a0),$async$zl)
case 3:a3=a6.cl(a7.a(b1),a2)
a4=C.bU
u=5
x=8
return A.k(e.fd("list_partner_signatures",a0),$async$zl)
case 8:r=b1
a4=J.cl(a1.a(r),a2)
u=2
x=7
break
case 5:u=4
a5=t.pop()
x=7
break
case 4:x=2
break
case 7:p=A.b([],y.R)
for(a0=a3.$ti,a1=new A.b2(a3,a3.gq(0),a0.i("b2<ap.E>")),a0=a0.i("ap.E"),a2=y.H,o=y.a;a1.u();){n=a1.d
if(n==null)n=a0.a(n)
m=J.S(n)
l=m.h(n,"final_pdf_path")
k=l==null?null:J.aj(l)
l=m.h(n,"status")
j=l==null?null:J.aj(l)
l=m.h(n,"id")
i=l==null?null:J.aj(l)
l=m.h(n,"document_kind")
h=l==null?null:J.aj(l)
m.m(n,"partner_signatures",a4)
m=j==="approved"
if(m&&k!=null&&k.length!==0){l=e.ay
l===$&&A.a()
g=l.c
g===$&&A.a()
f=A.FH(null,null,d,d)
f.H(0,l.b)
p.push(new A.af4(l.a,f,"signed-documents",l.d,g).nM(k,86400).cr(new B.azm(n),a2).iG(new B.azn()))}if(m&&h==="inventory_fifo"&&i!=null&&i.length!==0)p.push(e.cM("document_approvals").fI(0,"snapshot").hM("id",i).qH().cr(new B.azo(n),o).iG(new B.azp()))}x=p.length!==0?9:10
break
case 9:x=11
return A.k(A.l0(p,a2),$async$zl)
case 11:case 10:v=a3
x=1
break
case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$zl,w)}}
B.Nr.prototype={
gaeo(){var x=this.f
return A.bw(A.aV(x),A.be(x),A.c_(x),0,0,0,0)},
U(){var x=null
return new B.W3(new A.tw(!1,$.ah()),new A.bp(x,y.A),new A.bp(x,y.t),x,A.B(y.U,y.Z),x,!0,x)}}
B.W3.prototype={
gl7(){var x=this.d
return x===$?this.d=new A.Zb(this.a.r,$.ah()):x},
grR(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.He(x,$.ah())}return w},
gnz(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.He(x,$.ah())}return w},
gik(){this.a.toString
return null},
j2(d,e){var x=this
x.jj(x.gl7(),"entry_mode")
x.jj(x.grR(),"selected_start")
x.jj(x.gnz(),"selected_end")
x.jj(x.r,"autovalidate")},
l(){var x=this
x.gl7().l()
x.grR().l()
x.gnz().l()
x.r.l()
x.aro()},
SH(){var x,w=this,v=w.gl7(),u=v.y,t=u==null
if((t?A.l(v).i("bq.T").a(u):u)!==C.dI)v=(t?A.l(v).i("bq.T").a(u):u)===C.eO
else v=!0
if(v)if(!w.x.ga3().hV()){w.G(new B.bbI(w))
return}if(w.ga6M()){v=w.grR()
u=v.y
v=u==null?A.l(v).i("bq.T").a(u):u
v.toString
u=w.gnz()
t=u.y
u=t==null?A.l(u).i("bq.T").a(t):t
u.toString
x=new A.lX(v,u,y.T)}else x=null
v=w.c
v.toString
A.aI(v,!1).c7(x)},
Sz(){var x=this.c
x.toString
A.aI(x,!1).c7(null)},
SE(){this.G(new B.bbH(this))},
IL(d){var x=this.a
if(d.n7(x.d)||d.kO(x.e))return!1
return!0},
aEh(d){this.G(new B.bbJ(this,d))},
aBH(d){this.G(new B.bbG(this,d))},
ga6M(){var x=this.grR(),w=x.y
if((w==null?A.l(x).i("bq.T").a(w):w)!=null){x=this.gnz()
w=x.y
x=(w==null?A.l(x).i("bq.T").a(w):w)!=null}else x=!1
return x},
p(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3={}
A.W(b4)
x=y.w
w=A.bE(b4,C.dT,x).w.gj0(0)
v=A.cC(b4,C.aJ,y.y)
v.toString
u=A.oi(b4)
A.W(b4)
t=A.mG(b4)
b3.a=null
s=b1.gl7()
r=s.y
q=r==null
if((q?A.l(s).i("bq.T").a(r):r)!==C.e3)p=(q?A.l(s).i("bq.T").a(r):r)===C.dI
else p=!0
switch(q?A.l(s).i("bq.T").a(r):r){case C.e3:case C.i1:s=b1.a.fr
r=b1.grR()
q=r.y
r=q==null?A.l(r).i("bq.T").a(q):q
q=b1.gnz()
o=q.y
q=o==null?A.l(q).i("bq.T").a(o):o
o=b1.a
n=o.d
m=o.e
l=o.dy
o=o.gaeo()
k=b1.ga6M()?b1.gIy():b2
if(p){j=b1.a.db
j=A.bN(C.lt,b2,b2,b2)
j=A.eW(b2,b2,j,b2,b2,b1.gC9(),C.a2,b2,v.gaW(),b2)}else j=b2
i=b1.a.y
i=v.gbG()
h=b1.a.z
v=v.gaU()
b3.a=new B.ajS(r,q,n,m,l,o,b1.ga6x(),b1.ga6d(),k,b1.gIr(),i,v,s,j,b1.w)
g=A.bE(b4,C.mU,x).w.a
f=u.fx
if(f==null){x=t.fx
x.toString
f=x}e=u.fy
if(e==null)e=t.gFI()
d=u.go
if(d==null)d=t.gFJ()
a0=u.id
if(a0==null)a0=t.id
a1=C.a2
break
case C.dI:case C.eO:x=b1.a.fr
s=b1.grR()
r=s.y
if(r==null)r=A.l(s).i("bq.T").a(r)
q=b1.gnz()
o=q.y
if(o==null)o=A.l(q).i("bq.T").a(o)
n=b1.a.gaeo()
m=w===C.dA
l=m?98:108
k=b1.a
j=k.fr
i=s.y
s=i==null?A.l(s).i("bq.T").a(i):i
i=q.y
q=i==null?A.l(q).i("bq.T").a(i):i
i=k.d
h=k.e
a2=k.dy
a3=b1.r
a4=a3.y
a3=a4==null?A.l(a3).i("bq.T").a(a4):a4
a4=k.Q
a5=k.as
a6=k.at
a7=k.ax
a8=k.ay
a9=k.ch
b0=k.CW
k=k.cx
s=s==null?b2:A.bw(A.aV(s),A.be(s),A.c_(s),0,0,0,0)
q=q==null?b2:A.bw(A.aV(q),A.be(q),A.c_(q),0,0,0,0)
l=A.bP(new A.ab(C.xv,A.a3(A.b([C.cM,new B.Xo(s,q,A.bw(A.aV(i),A.be(i),A.c_(i),0,0,0,0),A.bw(A.aV(h),A.be(h),A.c_(h),0,0,0,0),b1.ga6x(),b1.ga6d(),a5,a6,a4,a7,a8,a9,b0,!0,a3,k,a2,j,b1.x),C.cM],y.p),C.k,C.e,C.i),b2),l,b2)
if(p){b1.a.toString
s=A.eW(b2,b2,C.yH,b2,b2,b1.gC9(),C.a2,b2,v.gaX(),b2)}else s=b2
b1.a.toString
q=v.gbQ()
k=b1.a.w
k=v.gbP()
j=b1.a.z
v=v.gaU()
b3.a=new B.ao9(r,o,n,l,b1.gIy(),b1.gIr(),q,k,v,s,x,b2)
if(m)g=C.AL
else g=D.aD_
x=u.b
if(x==null){x=t.b
x.toString
f=x}else f=x
e=u.c
if(e==null)e=t.gcf(0)
d=u.d
if(d==null)d=t.gct()
x=u.e
a0=x==null?t.e:x
a1=C.E9
break
default:a1=b2
a0=a1
d=a0
e=d
f=e
g=f}x=u.a
if(x==null)x=t.gcd(0)
v=g.a
s=g.b
return A.a6p(b2,x,A.o3(b2,A.Ad(new A.eB(new B.bbK(b3),b2),1.3),C.p,b2,C.e2,b2,C.Y,s,b2,b2,v),C.bv,b2,f,a1,C.vl,e,a0,d)}}
B.ajS.prototype={
p(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.W(a3)
x=A.cC(a3,C.aJ,y.y)
x.toString
w=y.w
v=A.bE(a3,C.dT,w).w.gj0(0)
u=A.oi(a3)
A.W(a3)
t=A.mG(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gFE()
q=u.k2
if(q==null)q=t.gFF()
p=q.bC(0.38)
o=u.k3
if(o==null)o=t.gFG()
n=u.k4
if(n==null)n=t.gFH()
m=n==null?a2:n.kE(q)
n=a1.ax
l=a1.c
k=a1.d
j=B.bQB(x,n,l,k)
i=B.bQA(x,n,l,k,new A.aW(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.kE(l!=null?q:p)
if(x)g=a2
else g=o.kE(k!=null?q:p)
f=A.qz(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.dM(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.b([],x)
if(v===C.fa&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.cL(A.d(a1.as,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a1.z,a2,f))
d.push(C.aj)
a0=a1.at
x=A.b([A.bP(a2,a2,A.bE(a3,C.w_,w).w.a.a<360?42:72),A.an(A.br(a2,a2,a2,A.a3(A.b([A.d(a0,a2,1,C.ag,a2,m,a2,a2,a2),C.D,A.a9(A.b([A.d(j,a2,1,C.ag,a2,h,a2,a2,a2),A.d(" \u2013 ",a2,a2,a2,a2,h,a2,a2,a2),new A.hc(1,C.cu,A.d(i,a2,1,C.ag,a2,g,a2,a2,a2),a2)],x),C.k,a2,C.e,C.i,0,a2,a2),C.L],x),C.x,C.e,C.i),!1,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,C.N,a2),1)],x)
if(v===C.dA&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.ab(C.eR,A.zx(w,e,a2),a2))}x=A.bJJ(d,e,r,new A.GI(A.a9(x,C.k,a2,C.e,C.i,0,a2,a2),D.aCN,a2),0,e,new A.MM(C.ZQ,a2,a2,a2,C.CP,a2,a1.Q,a2,a2,a2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.bw(A.aV(l),A.be(l),A.c_(l),0,0,0,0):a2
k=k!=null?A.bw(A.aV(k),A.be(k),A.c_(k),0,0,0,0):a2
w=A.bw(A.aV(w),A.be(w),A.c_(w),0,0,0,0)
d=A.bw(A.aV(d),A.be(d),A.c_(d),0,0,0,0)
return A.jM(!0,A.d8(x,s,new B.Vd(l,k,w,d,a1.r,A.bw(A.aV(a0),A.be(a0),A.c_(a0),0,0,0,0),a1.x,a1.y,n,a2),a2,a2,a2),!1,!1,C.a2,!1,!1)}}
B.Vd.prototype={
U(){return new B.Ve(new A.bp(null,y.A),new A.nC())}}
B.Ve.prototype={
ap(){var x,w,v,u=this
u.aF()
x=A.wE(0,null,null)
u.x=x
x.ab(0,u.gaLJ())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.n7(v)&&!w.kO(x.f))u.w=A.a67(v,w)
u.y=u.w!==0},
l(){var x=this.x
x===$&&A.a()
x.l()
this.am()},
aLK(){var x,w=this,v=w.x
v===$&&A.a()
v=v.gc9(0).at
v.toString
x=C.b.gcz(w.x.f).z
x.toString
if(v<=x)w.G(new B.b8x(w))
else{v=w.y
v===$&&A.a()
if(!v)w.G(new B.b8y(w))}},
aPf(){var x=this.c
x.toString
switch(A.W(x).w.a){case 0:case 1:A.OD()
break
case 2:case 3:case 4:case 5:break}},
aOR(d){this.aPf()
this.G(new B.b8z(this,d))},
a30(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.bw(A.aV(u),A.be(u)+t,1,0,0,0,0)
u=v.a
w=u.z
return new B.XN(v.f,v.r,u.w,v.gaOQ(),u.e,u.f,x,u.r,w,null)},
p(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.b([D.aRy],p),n=r.y
n===$&&A.a()
if(n)o.push(D.a7L)
n=r.a
x=n.z
w=n.e
v=n.f
u=r.f
if(u==null)u=n.c
n=u==null?n.w:u
u=r.x
u===$&&A.a()
t=r.e
s=r.w
p=A.b([B.bO0(new B.b8A(r),s,q),B.bO0(new B.b8B(r),A.a67(w,v)+1-s,t)],p)
o.push(A.an(new B.Vf(new B.a5Z(p,C.G,!1,u,q,q,q,!1,t,0,q,q,q,C.hG,C.S,q,q,C.o,C.br,r.d),w,v,n,x,q),1))
return A.a3(o,C.k,C.e,C.i)}}
B.Vf.prototype={
U(){return new B.Vg()}}
B.Vg.prototype={
ap(){var x,w,v=this
v.aF()
x=y.k
w=y.c
v.e=A.a4([C.B5,new A.dJ(v.gaC8(),new A.c7(A.b([],x),w),y.M),C.B6,new A.dJ(v.gaCa(),new A.c7(A.b([],x),w),y.O),C.vK,new A.dJ(v.gaBi(),new A.c7(A.b([],x),w),y.Y)],y.n,y.V)
v.f=A.jx(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.a()
x.l()
this.am()},
aC7(d){this.G(new B.b8D(this,d))},
aC9(d){var x,w=this.f
w===$&&A.a()
w.ij()
w=this.f
x=w.e
x.toString
A.nb(x).ot(w,!0)},
aCb(d){var x,w=this.f
w===$&&A.a()
w.ij()
w=this.f
x=w.e
x.toString
A.nb(x).ot(w,!1)},
aBj(d){this.G(new B.b8C(this,d))},
aHm(d,e){var x,w,v,u=this.c.N(y.I).w
this.a.toString
if(u===C.b6)if(e===C.fP)x=C.hK
else x=e===C.hK?C.fP:e
else x=e
w=C.TL.h(0,x)
w.toString
v=A.bw(A.aV(d),A.be(d),A.c_(d)+w,0,0,0,0)
w=this.a
if(!v.n7(w.d)&&!v.kO(w.e))return v
return null},
p(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.a()
x=t.f
x===$&&A.a()
w=t.a.r
v=x.gda()?t.w:s
u=t.f.gda()?t.r:s
return A.aIN(r,!1,new B.WP(w,v,u,t.a.c,s),!0,x,C.bc,t.gaC6(),s,s,C.T9)}}
B.WP.prototype={
dS(d){return!this.f.vS(this.r,d.r)||this.w!=d.w}}
B.alc.prototype={
azJ(d,e){var x,w=null,v=A.b([],y.p)
for(x=e.gME();v.length<7;x=(x+1)%7)v.push(new A.jw(!0,new A.h8(C.W,w,w,A.d(e.gYy()[x],w,w,w,w,d,w,w,w),w),w))
return v},
p(d){var x,w=A.W(d),v=w.ok.x.kE(w.ax.k3),u=A.cC(d,C.aJ,y.y)
u.toString
x=this.azJ(v,u)
C.b.hB(x,0,C.au)
x.push(C.au)
u=A.bE(d,C.dT,y.w).w.gj0(0)===C.fa?384:480
return new A.dX(new A.aw(0,u,0,42),A.bDS(A.aey(x,!0,!1,!0),D.CH,null,!0),null)}}
B.bml.prototype={
Aw(d){return new B.bmp(9,Math.max((d.w-16)/7,0),8,A.uL(d.x))},
l_(d){return!1}}
B.bmp.prototype={
a_H(d){return this.a*C.d.cA(d,50)},
a_F(d){return Math.max(0,this.a*C.d.hb(d/50)-1)},
azH(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Gt(d){var x,w=this,v=w.a,u=C.f.ai(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=C.f.h4(d,v)
x=w.azH(q,t)
if(t)s=r
return new A.aeD(v*50,x,42,s)},
W0(d){return 50*(C.f.h4(d-1,this.a)+1)-8}}
B.XN.prototype={
U(){return new B.XO()}}
B.XO.prototype={
ap(){var x,w,v,u,t
this.aF()
x=this.a.x
w=A.Ns(A.aV(x),A.be(x))
v=J.kg(w,y.E)
for(u=0;u<w;u=t){t=u+1
v[u]=A.jx(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
cw(){var x,w,v=this
v.e0()
x=v.c.N(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.vT(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.a()
x[A.c_(w)-1].ij()}},
l(){var x,w,v,u,t=this.d
t===$&&A.a()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.J)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aI(0)
v.fj()}this.am()},
awQ(d){var x,w,v
if(d){x=this.c.N(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=C.fd
break
case 1:case 2:v=C.fc
break
default:v=C.YD}x=$.au.aE$.d.c.e
x.toString
A.bF3(x,0,v,C.cj,C.Y)}}},
p(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.W(b5),b4=A.cC(b5,C.aJ,y.y)
b4.toString
x=b1.a.x
w=A.aV(x)
v=A.be(x)
u=A.Ns(w,v)
b1.a.toString
t=A.bKQ(w,v,b4)
s=C.d.hb((u+t)/7)
x=y.p
r=A.b([],x)
for(q=0-t+1,p=b1.gawP(),o=y.v;q<=u;++q)if(q<1)r.push(C.lE)
else{b1.a.toString
n=A.bw(w,v,q,0,0,0,0)
m=b1.a
l=m.w
k=n.a
j=l.a
if(k<=j)l=k===j&&n.b>l.b
else l=!0
i=!0
if(!l){l=m.r
j=l.a
if(k>=j){l=k===j&&n.b<l.b
i=l}}l=m.c
j=l!=null
h=j&&m.d!=null
g=j&&k===l.a&&n.b===l.b
m=m.d
f=m!=null&&k===m.a&&n.b===m.b
e=!1
if(h){j=l.a
if(k<=j)j=k===j&&n.b>l.b
else j=!0
if(j){j=m.a
if(k>=j)k=k===j&&n.b<m.b
else k=!0
e=k}}d=h&&l.k(0,m)
m=b1.a
a0=m.z.vS(m.e,n)
m=b1.a
l=m.z
k=b1.d
k===$&&A.a()
k=k[A.c_(n)-1]
m=m.f
b5.N(o)
j=A.W(b5)
j=j.bn.ok
if(j==null){A.W(b5)
j=A.mG(b5)
j=j.gw9()}r.push(new B.W7(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.b([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=C.b.e5(r,a3,a4)
b1.a.toString
a6=A.bw(w,v,a3-t+1,0,0,0,0)
a7=!1
if(!(p&&a2===0)){m=b1.a
l=m.c
if(l!=null){m=m.d
if(m!=null){k=a6.a
j=l.a
if(k<=j)l=k===j&&a6.b>l.b
else l=!0
if(l){l=m.a
if(k<=l)m=k===l&&a6.b>m.b
else m=!0
m=!m}else m=a7}else m=a7
a7=m}}if(a7){b5.N(o)
m=A.W(b5)
m=m.bn.ok
if(m==null){A.W(b5)
m=A.mG(b5)
m=m.gw9()}m=new A.Eg(m,!0,C.lE,b2)}else m=C.lE
C.b.hB(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&C.f.ai(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.bw(w,v,a4-t,0,0,0,0)
m=b1.a
l=m.c
a9=!1
if(l!=null){m=m.d
if(m!=null){k=a8.a
j=l.a
if(k>=j)l=k===j&&a8.b<l.b
else l=!0
if(!l){l=m.a
if(k>=l)m=k===l&&a8.b<m.b
else m=!0}else m=a9
a9=m}}if(a9){b5.N(o)
m=A.W(b5)
m=m.bn.ok
if(m==null){A.W(b5)
m=A.mG(b5)
m=m.gw9()}m=new A.Eg(m,!0,C.lE,b2)}else m=C.lE
a5.push(m)}C.b.H(a1,a5)}b0=A.bE(b5,C.dT,y.w).w.gj0(0)===C.fa?384:480
return A.a3(A.b([new A.dX(new A.aw(0,b0,0,1/0).OS(58),new A.ab(C.i4,new A.eb(C.aU,b2,b2,new A.jw(!0,A.d(b4.EF(b1.a.x),b2,b2,b2,b2,b3.ok.z.kE(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.dX(new A.aw(0,b0,0,s*42+(s-1)*8),A.bDS(A.aey(a1,!0,!1,!0),D.CH,C.iw,!1),b2),C.t],x),C.k,C.e,C.i)}}
B.W7.prototype={
U(){return new B.ald(A.x7())},
w3(d){return this.e.$1(d)}}
B.ald.prototype={
l(){var x=this.d
x.S$=$.ah()
x.R$=0
this.am()},
p(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.W(a4),a2=a1.ax,a3=A.cC(a4,C.aJ,y.y)
a3.toString
x=A.oi(a4)
A.W(a4)
w=A.mG(a4)
v=a4.N(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new B.bbV(x,w)
q=new B.bbW(r)
p=A.bc(y.C)
if(u.w)p.E(0,C.O)
u=d.a
if(u.y||u.z)p.E(0,C.U)
u=d.d
u.st(0,p)
o=y._
n=q.$1$2(new B.bbQ(),p,o)
m=q.$1$2(new B.bbR(),p,o)
l=q.$1$2(new B.bbS(),p,y.W)
if(l==null)l=C.e_
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.kE(n)
j=new A.i1(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new B.X8(t,q.y?D.Bq:D.a_V,v,a0)}else{j=a0
i=a0
if(q.Q){k=new B.X8(t,D.a_W,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kE(A.aG(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kE(A.aG(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}else if(q.at){s=s==null?a0:s.kE(a2.b)
q=x.CW
if(q==null)q=w.gwo()
j=new A.i1(a0,a0,a0,a0,l.jc(q.cO(a2.b)))}}h=a3.MI(A.c_(d.a.c))
g=d.a.at?", "+a3.gbK():""
f=h+", "+a3.EE(d.a.c)+g
q=d.a
if(q.y)f=a3.aes(f)
else if(q.z)f=a3.aer(f)
a3=d.a
q=a3.y||a3.z
e=A.aD(C.W,A.br(a0,a0,a0,new A.jw(!0,A.d(h,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,C.N,a0),C.p,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.fW(e,a0,a0,k,C.ao)
return!a3.w?A.bE3(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,C.d9,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new B.bbT(d),a0,a0,a0,new A.bt(new B.bbU(d,r),y.b),a0,a0,a0,u):e}}
B.Jk.prototype={
L(){return"_HighlightPainterStyle."+this.b}}
B.X8.prototype={
aO(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.aSP)return
$.aq()
x=A.b5()
w=this.b
x.r=w.gt(w)
x.b=C.bm
v=this.d
A:{if(C.b6===v){w=!0
break A}if(C.z===v){w=!1
break A}w=null}B:{u=D.a_V===r
t=!(u&&w)
if(t){s=D.Bq===r
w=s&&!w}else{s=null
w=!0}if(w){r=e.a/2
d.he(new A.K(r,0,r+r,0+e.b),x)
break B}if(!u)w=t?s:D.Bq===r
else w=!0
if(w){d.he(new A.K(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a_W===r){d.he(new A.K(0,0,0+e.a,0+e.b),x)
break B}break B}},
fh(d){return!1}}
B.ao9.prototype={
azi(d,e,f,g){var x,w,v,u=A.cC(d,C.aJ,y.y)
u.toString
x=this.as
w=B.bQB(u,x,e,f)
v=B.bQA(u,x,e,f,g)
if(e==null||f==null)return u.gaR()
switch(d.N(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
p(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.W(d)
x=A.cC(d,C.aJ,y.y)
x.toString
w=A.bE(d,C.dT,y.w).w.gj0(0)
v=A.oi(d)
A.W(d)
u=A.mG(d)
if(w===C.dA){t=v.w
s=t==null?u.gz4():t}else s=A.W(d).ok.f
r=v.r
if(r==null)r=u.gvO()
s=s==null?j:s.cO(r)
t=k.c
q=k.d
p=k.azi(d,t,q,k.e)
o=t!=null&&q!=null?x.MJ(t)+" \u2013 "+x.MJ(q):""
n=A.bP6(k.Q,k.z,w===C.fa,w,o,s,p)
x=A.cL(A.d(k.y,j,j,j,j,j,j,j,j),j,j,k.w,j,j)
t=y.p
m=new A.dX(C.C6,new A.ab(C.eR,new A.eb(C.mY,j,j,A.bEw(j,A.b([x,A.cL(A.d(k.x,j,j,j,j,j,j,j,j),j,j,k.r,j,j)],t),C.Uc,C.aX,0,8),j),j),j)
x=A.ba(d,C.b7)
x=x==null?j:x.gcQ()
x=(x==null?C.aS:x).mN(0,1.3).bi(0,14)
l=C.AL.aA(0,x/14)
switch(w.a){case 0:return A.jA(new B.biK(k,!0,l,n,m))
case 1:return A.a9(A.b([n,new A.hc(1,C.cu,A.a3(A.b([A.an(k.f,1),m],t),C.aa,C.e,C.H),j)],t),C.aa,j,C.e,C.H,0,j,j)}}}
B.Xo.prototype={
U(){return new B.Jp()}}
B.Jp.prototype={
ap(){var x,w,v=this
v.aF()
x=v.a
v.f=x.c
w=$.ah()
v.w=new A.bl(C.ae,w)
v.r=x.d
v.x=new A.bl(C.ae,w)},
l(){var x,w=this.w
w===$&&A.a()
x=$.ah()
w.S$=x
w.R$=0
w=this.x
w===$&&A.a()
w.S$=x
w.R$=0
this.am()},
cw(){var x,w,v,u,t=this
t.e0()
x=t.c
x.toString
x=A.cC(x,C.aJ,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.MH(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.a()
t.abm(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.MH(w)
t.e=x
w=t.x
w===$&&A.a()
t.abm(w,x,!1)}},
hV(){var x,w,v,u=this,t={},s=u.ac7(u.f)
t.a=s
x=u.ac7(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kO(v)){s=u.a.Q
w=u.c
w.toString
w=A.cC(w,C.aJ,y.y)
w.toString
t.a=w.gba()}}u.G(new B.biN(t,u,x))
return t.a==null&&x==null},
a8m(d){var x=this.c
x.toString
x=A.cC(x,C.aJ,y.y)
x.toString
this.a.toString
return x.YV(d)},
ac7(d){var x,w,v=this
if(d==null){x=v.a.y
w=v.c
w.toString
w=A.cC(w,C.aJ,y.y)
w.toString
return w.gb4()}else if(!v.IL(d)){x=v.a.z
w=v.c
w.toString
w=A.cC(w,C.aJ,y.y)
w.toString
return w.gaY()}return null},
IL(d){var x=this.a
if(d.n7(x.e)||d.kO(x.f))return!1
return!0},
abm(d,e,f){var x=d.a.ae5(e)
d.jY(0,f?x.lm(A.dI(C.F,0,e.length,!1)):x)},
aEg(d){var x=this
x.G(new B.biM(x,d))
if(x.a.CW)x.hV()},
aBG(d){var x=this
x.G(new B.biL(x,d))
if(x.a.CW)x.hV()},
p(d){var x,w,v,u,t,s,r,q=this,p=null
A.W(d)
x=A.cC(d,C.aJ,y.y)
x.toString
w=A.vN(d)
v=w.p1
if(v==null)v=C.uW
u=q.w
u===$&&A.a()
t=w.dy
q.a.toString
s=x.gbs()
q.a.toString
r=x.gbz()
u=A.an(A.cE(p,C.ad,!0,p,!0,C.o,p,A.cI(),u,p,p,p,p,p,2,A.fa(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.y,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,s,p,p,p,p,p,p,p,p,r,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.S,!0,p,!0,p,!1,p,C.ah,p,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaEf(),p,p,p,!1,p,p,!1,p,!0,p,C.y,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.a0,p,C.Q,p,p,p,p),1)
s=q.x
s===$&&A.a()
q.a.toString
r=x.gbs()
q.a.toString
x=x.gbx()
return A.a9(A.b([u,C.aj,A.an(A.cE(p,C.ad,!1,p,!0,C.o,p,A.cI(),s,p,p,p,p,p,2,A.fa(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.z,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,p,p,p,p,p,p,p,p,x,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.S,!0,p,!0,p,!1,p,C.ah,p,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaBF(),p,p,p,!1,p,p,!1,p,!0,p,C.y,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.a0,p,C.Q,p,p,p,p),1)],y.p),C.x,p,C.e,C.i,0,p,p)}}
B.a0y.prototype={
bc(d){this.bF(d)
this.ql()},
cw(){var x,w,v,u,t=this
t.e0()
x=t.cZ$
w=t.gmn()
v=t.c
v.toString
v=A.qo(v)
t.i7$=v
u=t.oB(v,w)
if(w){t.j2(x,t.fn$)
t.fn$=!1}if(u)if(x!=null)x.l()},
l(){var x,w=this
w.i6$.aD(0,new B.bx5())
x=w.cZ$
if(x!=null)x.l()
w.cZ$=null
w.am()}}
B.b1z.prototype={
Aw(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.T1(v,t+x.b,u+w,t,u,A.uL(d.x))},
l_(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
B.a5Z.prototype={
adj(d){return this.dx}}
var z=a.updateTypes(["~()","T<~>()","~(aW?)","~(D)","~(i)","rF(rF)","Ey(@)","~(aW)","~(mj)","~(mn)","~(js)"])
B.byZ.prototype={
$1(d){return""+A.aV(d)+C.c.cN(C.f.j(A.be(d)),2,"0")+C.c.cN(C.f.j(A.c_(d)),2,"0")},
$S:988}
B.bzE.prototype={
$1(d){if(!this.a)return d
return d===D.fw?D.lo:D.fw},
$S:z+5}
B.bbO.prototype={
$0(){var x=this.b
return this.a.w=new B.m1(x.a,x.b)},
$S:0}
B.bbL.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bbM.prototype={
$1(d){var x=A.cm(y.f.a(d),y.N,y.z),w=A.ok(J.aj(x.h(0,"booking_date"))),v=A.aZ(x.h(0,"tax_rate"))
if(v==null)v=null
if(v==null)v=19
x=A.aZ(x.h(0,"gross"))
if(x==null)x=null
return new B.Ey(w,v,x==null?0:x)},
$S:z+6}
B.bbN.prototype={
$0(){return this.a.z=!1},
$S:0}
B.azm.prototype={
$1(d){J.fA(this.a,"signed_url",d)},
$S:213}
B.azn.prototype={
$1(d){},
$S:27}
B.azo.prototype={
$1(d){var x,w="snapshot"
if(d!=null){x=J.P(d,w)
if(y.f.b(x))J.fA(this.a,w,x)}},
$S:233}
B.azp.prototype={
$1(d){},
$S:27}
B.bBE.prototype={
$1(d){var x=this.b,w=this.a.a
return x==null?w:x.$2(d,w)},
$S:24}
B.bbI.prototype={
$0(){this.a.r.Hr(0,!0)},
$S:0}
B.bbH.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gl7(),q=r.y
switch(q==null?A.l(r).i("bq.T").a(q):q){case C.e3:s.r.Hr(0,!1)
r.st(0,C.dI)
break
case C.dI:q=s.grR()
x=q.y
w=!1
if((x==null?A.l(q).i("bq.T").a(x):x)!=null){x=s.gnz()
v=x.y
u=v==null
if((u?A.l(x).i("bq.T").a(v):v)!=null){w=q.y
if(w==null)w=A.l(q).i("bq.T").a(w)
w.toString
x=u?A.l(x).i("bq.T").a(v):v
x.toString
x=w.kO(x)}else x=w}else x=w
if(x)s.gnz().st(0,t)
x=q.y
w=x==null
if((w?A.l(q).i("bq.T").a(x):x)!=null){if(w)x=A.l(q).i("bq.T").a(x)
x.toString
x=!s.IL(x)}else x=!1
if(x){q.st(0,t)
s.gnz().st(0,t)}else{q=s.gnz()
x=q.y
w=x==null
if((w?A.l(q).i("bq.T").a(x):x)!=null){if(w)x=A.l(q).i("bq.T").a(x)
x.toString
x=!s.IL(x)
s=x}else s=!1
if(s)q.st(0,t)}r.st(0,C.e3)
break
case C.i1:case C.eO:break}},
$S:0}
B.bbJ.prototype={
$0(){var x=this.b
this.a.grR().st(0,x)
return x},
$S:0}
B.bbG.prototype={
$0(){var x=this.b
this.a.gnz().st(0,x)
return x},
$S:0}
B.bbK.prototype={
$1(d){return this.a.a},
$S:24}
B.b8x.prototype={
$0(){this.a.y=!1},
$S:0}
B.b8y.prototype={
$0(){this.a.y=!0},
$S:0}
B.b8z.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.n7(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
B.b8A.prototype={
$2(d,e){return this.a.a30(d,e,!0)},
$S:87}
B.b8B.prototype={
$2(d,e){return this.a.a30(d,e,!1)},
$S:87}
B.b8D.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
B.b8C.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.aHm(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
B.bbV.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:204}
B.bbW.prototype={
$1$2(d,e,f){return this.a.$1$1(new B.bbX(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:199}
B.bbX.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.Z(this.b)},
$S(){return this.c.i("0?(hX?)")}}
B.bbQ.prototype={
$1(d){var x=d.gys()
return x},
$S:85}
B.bbR.prototype={
$1(d){var x=d.gvm()
return x},
$S:85}
B.bbU.prototype={
$1(d){return this.b.$1$1(new B.bbP(this.a,d),y.G)},
$S:22}
B.bbP.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gFK()
w=x==null?null:x.Z(this.b)}else{x=d.gyt()
w=x==null?null:x.Z(this.b)}return w},
$S:195}
B.bbS.prototype={
$1(d){return d.ax},
$S:193}
B.bbT.prototype={
$0(){var x=this.a.a
return x.w3(x.c)},
$S:0}
B.biK.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.b([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.an(x.a.f,1))
v.push(x.e)
return A.a3(v,C.aa,C.e,C.H)},
$S:989}
B.biN.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
B.biM.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.a8m(w)
x.f=w
x.a.r.$1(w)},
$S:0}
B.biL.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.a8m(w)
x.r=w
x.a.w.$1(w)},
$S:0}
B.bx5.prototype={
$2(d,e){if(!d.a)d.T(0,e)},
$S:62};(function aliases(){var x=B.a0y.prototype
x.aro=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.W4.prototype,"gaJK","Jo",1)
x(v,"gawM","BC",1)
x(v=B.W3.prototype,"gIy","SH",0)
x(v,"gIr","Sz",0)
x(v,"gC9","SE",0)
w(v,"ga6x","aEh",2)
w(v,"ga6d","aBH",2)
x(v=B.Ve.prototype,"gaLJ","aLK",0)
w(v,"gaOQ","aOR",7)
w(v=B.Vg.prototype,"gaC6","aC7",3)
w(v,"gaC8","aC9",8)
w(v,"gaCa","aCb",9)
w(v,"gaBi","aBj",10)
w(B.XO.prototype,"gawP","awQ",3)
w(v=B.Jp.prototype,"gaEf","aEg",4)
w(v,"gaBF","aBG",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.C,[B.Ey,B.mS])
w(A.of,[B.byZ,B.bzE,B.bbM,B.azm,B.azn,B.azo,B.azp,B.bBE,B.bbK,B.bbV,B.bbW,B.bbX,B.bbQ,B.bbR,B.bbU,B.bbP,B.bbS])
w(A.J4,[B.rF,B.Jk])
v(B.m1,A.vn)
v(B.rp,A.b7)
v(B.W4,A.ve)
w(A.yt,[B.bbO,B.bbL,B.bbN,B.bbI,B.bbH,B.bbJ,B.bbG,B.b8x,B.b8y,B.b8z,B.b8D,B.b8C,B.bbT,B.biN,B.biM,B.biL])
w(A.A,[B.DN,B.ajS,B.alc,B.ao9])
w(A.H,[B.Nr,B.Vd,B.Vf,B.XN,B.W7,B.Xo])
w(A.Y,[B.a0y,B.Ve,B.Vg,B.XO,B.ald,B.Jp])
v(B.W3,B.a0y)
w(A.yu,[B.b8A,B.b8B,B.biK,B.bx5])
v(B.WP,A.bJ)
w(A.aeC,[B.bml,B.b1z])
v(B.bmp,A.aeE)
v(B.X8,A.Nn)
v(B.a5Z,A.Ss)
x(B.a0y,A.ll)})()
A.bw5(b.typeUniverse,JSON.parse('{"rp":{"b7":[],"H":[],"c":[]},"W4":{"Y":["rp"]},"DN":{"A":[],"c":[]},"Nr":{"H":[],"c":[]},"Vd":{"H":[],"c":[]},"Vf":{"H":[],"c":[]},"WP":{"bJ":[],"by":[],"c":[]},"XN":{"H":[],"c":[]},"W7":{"H":[],"c":[]},"Xo":{"H":[],"c":[]},"Jp":{"Y":["Xo"]},"W3":{"Y":["Nr"]},"ajS":{"A":[],"c":[]},"Ve":{"Y":["Vd"]},"Vg":{"Y":["Vf"]},"alc":{"A":[],"c":[]},"XO":{"Y":["XN"]},"ald":{"Y":["W7"]},"X8":{"aE":[]},"ao9":{"A":[],"c":[]},"a5Z":{"A":[],"c":[]}}'))
var y=(function rtii(){var x=A.ay
return{V:x("cj<ce>"),Y:x("dJ<js>"),M:x("dJ<mj>"),O:x("dJ<mn>"),G:x("F"),v:x("bKO"),T:x("lX<aW>"),i:x("Ey"),I:x("jt"),E:x("eH"),S:x("OB"),R:x("E<T<~>>"),s:x("E<i>"),p:x("E<c>"),k:x("E<~(cj<ce>)>"),A:x("bp<Y<H>>"),t:x("bp<Jp>"),D:x("v<a6<i,@>>"),j:x("v<@>"),P:x("a6<i,@>"),f:x("a6<@,@>"),y:x("aP"),w:x("kh"),a:x("bx"),c:x("c7<~(cj<ce>)>"),U:x("eZ<C?>"),N:x("i"),F:x("nz"),n:x("jd"),C:x("dj"),Q:x("WP"),q:x("xC"),b:x("bt<F?>"),z:x("@"),_:x("F?"),X:x("lX<aW>?"),W:x("eX?"),u:x("i?"),H:x("~"),Z:x("~()")}})();(function constants(){D.CH=new B.bml()
D.h1=new A.a5(62250,"MaterialIcons",null,!1)
D.DG=new B.rp(null)
D.a7L=new A.kV(0,null,null,null)
D.aAL=new A.f_("Schnittstelle","Buchungsstapel f\xfcr die Buchhaltung",null,null)
D.a9S=new A.iy(1,C.cU,D.aAL,null)
D.fw=new B.rF(0,"hinaus")
D.lo=new B.rF(1,"herein")
D.aaQ=new B.rF(2,"weder")
D.aJJ=new A.a7("DATEV-Export",null,null,null,null,null,null,null,null,null)
D.abe=new A.e1(D.aJJ,null,null)
D.abu=new A.a5(57504,"MaterialIcons",null,!1)
D.lr=new A.a5(57912,"MaterialIcons",null,!1)
D.F6=new A.a5(59011,"MaterialIcons",null,!1)
D.Fx=new A.a5(62584,"MaterialIcons",null,!1)
D.adU=new A.as(C.fz,14,C.am,null,null)
D.FH=new A.as(C.ys,null,null,null,null)
D.Fm=new A.a5(61487,"MaterialIcons",null,!1)
D.EZ=new A.a5(57782,"MaterialIcons",null,!1)
D.afr=new A.as(D.EZ,18,null,null,null)
D.agV=new A.bu(null,null,null,"Beraternummer (optional)",null,null,null,"Nur falls in der Buchhaltungssoftware hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ah4=new A.bu(null,null,null,"Mandantennummer (optional)",null,null,null,"Bleibt sie leer, beim Import in der Software erg\xe4nzen",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.a9z=new A.ai(48,48,48,48)
D.k6=new A.ab(D.a9z,C.bF,null)
D.aCN=new A.I(1/0,64)
D.aD_=new A.I(496,164)
D.ZG=new A.cp(18,18,C.ng,null)
D.aKx=new A.a7("Freigabe angefordert.",null,null,null,null,null,null,null,null,null)
D.mA=new A.dm(D.aKx,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLy=new A.a7("Keine Ums\xe4tze im gew\xe4hlten Zeitraum.",null,null,null,null,null,null,null,null,null)
D.aE9=new A.dm(D.aLy,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.kp=new A.a7("Anfordern",null,null,null,null,null,null,null,null,null)
D.mL=new A.a7("Freigabe anfordern",null,null,null,null,null,null,null,null,null)
D.aMY=new A.a7("DATEV-Datei herunterladen",null,null,null,null,null,null,null,null,null)
D.aRy=new B.alc(null)
D.aSP=new B.Jk(0,"none")
D.a_V=new B.Jk(1,"highlightLeading")
D.Bq=new B.Jk(2,"highlightTrailing")
D.a_W=new B.Jk(3,"highlightAll")})()};
(a=>{a["qqHdJKPx3q+vaaF+80MYUiF8+Bs="]=a.current})($__dart_deferred_initializers__);