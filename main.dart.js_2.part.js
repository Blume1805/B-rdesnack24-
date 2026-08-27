((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ccp(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q="0",p=new A.aT(Date.now(),0,!1),o=C.c.cz(C.f.j(A.bb(p)),2,q),n=C.c.cz(C.f.j(A.bV(p)),2,q),m=C.c.cz(C.f.j(A.hN(p)),2,q),l=C.c.cz(C.f.j(A.AF(p)),2,q),k=C.c.cz(C.f.j(A.acw(p)),2,q),j=new B.bAh(),i=e.length===0?q:e,h=d.length===0?q:d,g=y.s,f=A.a([C.b.bX(A.a(['"EXTF"',"700","21",'"Buchungsstapel"',"13",""+A.aS(p)+o+n+m+l+k+"000","",'"BS"','"Boerdesnack24 App"',"",i,h,""+A.aS(a0)+"0101","4",j.$1(a0),j.$1(a2),'"Automatenumsaetze App"',"","1","0","0",'"EUR"'],g),";"),'"Umsatz (ohne Soll/Haben-Kz)";"Soll/Haben-Kennzeichen";"WKZ Umsatz";"Kurs";"Basis-Umsatz";"WKZ Basis-Umsatz";"Konto";"Gegenkonto (ohne BU-Schl\xfcssel)";"BU-Schl\xfcssel";"Belegdatum";"Belegfeld 1";"Belegfeld 2";"Skonto";"Buchungstext"'],g)
for(o=a1.length,x=0;x<a1.length;a1.length===o||(0,A.L)(a1),++x){w=a1[x]
v=w.b<10
u=v?"8300":"8400"
n=w.a
m=C.c.cz(C.f.j(A.bV(n)),2,q)
l=C.c.cz(C.f.j(A.bb(n)),2,q)
k=A.e(j.$1(n))
i=v?"7":"19"
h=v?"7":"19"
t=C.c.cz(C.f.j(A.bV(n)),2,q)
s=C.c.cz(C.f.j(A.bb(n)),2,q)
r=C.d.aa(w.c,2)
f.push(C.b.bX(A.a([A.ah(r,".",","),'"S"','"EUR"',"","","","1000",u,"",m+l,'"'+("TL"+k+"-"+i)+'"',"","",'"'+("Tageslosung App-Verkaeufe "+h+" % "+t+"."+s+"."+A.aS(n))+'"'],g),";"))}return C.b.bX(f,"\r\n")},
EF:function EF(d,e,f){this.a=d
this.b=e
this.c=f},
bAh:function bAh(){},
bAW(d,e,f){var x,w=new B.bAX(f<0)
if(d==="expense")return w.$1(D.fz)
if(d==="revenue")return w.$1(D.lq)
x=A.hk(C.c.ak(e),null)
if(x!=null&&x>=1800&&x<=1999)return w.$1(C.f.aj(x,100)>=90?D.lq:D.fz)
return D.aaZ},
bIH(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rI:function rI(d,e){this.a=d
this.b=e},
bAX:function bAX(d){this.a=d},
aIs(){var x=new A.aT(Date.now(),0,!1)
return new B.m4(A.bs(A.aS(x),A.bb(x),1,0,0,0,0),A.bs(A.aS(x),A.bb(x)+1,0,0,0,0,0))},
ow(d){return C.c.cz(C.f.j(A.aS(d)),4,"0")+"-"+C.c.cz(C.f.j(A.bb(d)),2,"0")+"-"+C.c.cz(C.f.j(A.bV(d)),2,"0")},
m4:function m4(d,e){this.a=d
this.b=e},
rs:function rs(d){this.a=d},
Wf:function Wf(d,e){var _=this
_.w=$
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bcm:function bcm(d,e){this.a=d
this.b=e},
bcj:function bcj(d){this.a=d},
bck:function bck(){},
bcl:function bcl(d){this.a=d},
bHU(d,e){var x=$.cx().a3(Math.abs(d))
return e===D.fz?"-"+x:x},
bSP(d,e){var x
if(e===D.fz)return d==="revenue"||d==="expense"?C.R:C.l
if(e===D.lq)x=d==="revenue"||d==="expense"
else x=!1
if(x)return C.aj
return C.l},
cdv(d,e){if(d==="expense")return e===D.fz?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fz?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fz)return"Privatentnahme"
if(e===D.lq)return"Privateinlage"
return B.bIH(d)},
DU:function DU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
mW:function mW(d){this.a=d},
azO:function azO(d){this.a=d},
azP:function azP(){},
azQ:function azQ(d){this.a=d},
azR:function azR(){},
ayy(d,e,f,g,h,i){return B.cfy(d,e,f,g,h,i)},
cfy(d,e,f,g,h,i){var x=0,w=A.p(y.X),v,u,t,s,r,q
var $async$ayy=A.l(function(j,k){if(j===1)return A.m(k,w)
for(;;)switch(x){case 0:r={}
q=g.a
q=A.bs(A.aS(q),A.bb(q),A.bV(q),0,0,0,0)
u=g.b
u=A.bs(A.aS(u),A.bb(u),A.bV(u),0,0,0,0)
f=A.bs(A.aS(f),A.bb(f),A.bV(f),0,0,0,0)
h=A.bs(A.aS(h),A.bb(h),A.bV(h),0,0,0,0)
t=new A.aT(Date.now(),0,!1)
s=new B.Nz(new A.m_(q,u,y.S.i("m_<DZ.T>")),f,h,A.bs(A.aS(t),A.bb(t),A.bV(t),0,0,0,0),C.e3,null,null,null,null,null,null,null,null,null,null,null,C.fi,null,null,null,C.CA,null)
r.a=s
r.a=A.bNK(s,e,i)
v=A.eB(null,null,!0,null,new B.bCY(r,d),e,null,!0,!1,y.T)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$ayy,w)},
bRY(d,e,f,g){var x
if(f==null)x=d.gbA()
else x=g==null||A.aS(f)===A.aS(g)?d.XB(f):d.XA(f)
return x},
bRX(d,e,f,g,h){var x
if(g==null)x=d.gbz()
else x=f!=null&&A.aS(f)===A.aS(g)&&A.aS(f)===A.aS(h)?d.XB(g):d.XA(g)
return x},
bCY:function bCY(d,e){this.a=d
this.b=e},
Nz:function Nz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
We:function We(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.cZ$=g
_.i6$=h
_.p0$=i
_.fp$=j
_.i7$=k
_.c=_.a=null},
bcg:function bcg(d){this.a=d},
bcf:function bcf(d){this.a=d},
bch:function bch(d,e){this.a=d
this.b=e},
bce:function bce(d,e){this.a=d
this.b=e},
bci:function bci(d){this.a=d},
akb:function akb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Vo:function Vo(d,e,f,g,h,i,j,k,l,m){var _=this
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
Vp:function Vp(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
b95:function b95(d){this.a=d},
b96:function b96(d){this.a=d},
b97:function b97(d,e){this.a=d
this.b=e},
b98:function b98(d){this.a=d},
b99:function b99(d){this.a=d},
Vq:function Vq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Vr:function Vr(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
b9b:function b9b(d,e){this.a=d
this.b=e},
b9a:function b9a(d,e){this.a=d
this.b=e},
X0:function X0(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
alx:function alx(d){this.a=d},
bna:function bna(){},
bne:function bne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XZ:function XZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
Y_:function Y_(){this.d=$
this.c=this.a=null},
Wj:function Wj(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aly:function aly(d){this.d=d
this.c=this.a=null},
bcu:function bcu(d,e){this.a=d
this.b=e},
bcv:function bcv(d){this.a=d},
bcw:function bcw(d,e,f){this.a=d
this.b=e
this.c=f},
bcp:function bcp(){},
bcq:function bcq(){},
bct:function bct(d,e){this.a=d
this.b=e},
bco:function bco(d,e){this.a=d
this.b=e},
bcr:function bcr(){},
bcs:function bcs(d){this.a=d},
Jq:function Jq(d,e){this.a=d
this.b=e},
Xk:function Xk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aov:function aov(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bjx:function bjx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
XA:function XA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Jv:function Jv(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
bjA:function bjA(d,e,f){this.a=d
this.b=e
this.c=f},
bjz:function bjz(d,e){this.a=d
this.b=e},
bjy:function bjy(d,e){this.a=d
this.b=e},
byn:function byn(){},
a0L:function a0L(){},
b27:function b27(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKW(d,e,f,g,h,i,j){var x=null,w=A.aeP(e,!0,!0,!0),v=e.length
return new A.vF(new B.b27(f,h,g,d,x),w,x,C.F,!1,x,x,i,x,!0,x,0,x,x,v,C.hH,C.P,x,x,C.m,C.bw,x)},
a6b:function a6b(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bIa(d,e){var x=0,w=A.p(y.H),v,u,t,s,r,q
var $async$bIa=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:u=A.a([A.eM(65279)+d],y.s)
t=b.G
s=new t.Blob(u,{type:"text/csv;charset=utf-8"})
r=t.URL.createObjectURL(s)
q=A.aL_()
q.href=r
q.download=e
v=t.document.body
if(v!=null)v.append(q)
q.click()
q.remove()
t.URL.revokeObjectURL(r)
return A.n(null,w)}})
return A.o($async$bIa,w)},
bPo(d,e,f){return new A.Tc(new A.Bi(d,e,!0,!0,!0,0,A.bCN(),null),f)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[7]
B.EF.prototype={}
B.rI.prototype={
L(){return"Geldfluss."+this.b}}
B.m4.prototype={
gbu(){return[B.ow(this.a),B.ow(this.b)]}}
B.rs.prototype={
U(){var x=$.ad()
return new B.Wf(new A.bc(C.ad,x),new A.bc(C.ad,x))}}
B.Wf.prototype={
gow(){var x=this.w
return x===$?this.w=B.aIs():x},
l(){var x=this.x,w=$.ad()
x.S$=w
x.R$=0
x=this.y
x.S$=w
x.R$=0
this.am()},
Jz(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$Jz=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:t=new A.aT(Date.now(),0,!1)
s=v.c
s.toString
x=2
return A.j(B.ayy(null,s,A.bs(A.aS(t)-5,1,1,0,0,0,0),new A.m_(v.gow().a,v.gow().b,y.T),t,C.ef),$async$Jz)
case 2:u=e
if(u!=null)v.F(new B.bcm(v,u))
return A.n(null,w)}})
return A.o($async$Jz,w)},
BH(){var x=0,w=A.p(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$BH=A.l(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.F(new B.bcj(r))
u=4
l=y.z
f=y.j
x=7
return A.j(r.gbp().az(0,$.bx(),y.F).dF("datev_export_rows",A.a4(["p_from",C.c.a1(r.gow().a.dS(),0,10),"p_to",C.c.a1(r.gow().b.dS(),0,10)],y.N,l),l),$async$BH)
case 7:q=f.a(e)
l=J.cU(q,new B.bck(),y.i)
k=A.S(l,l.$ti.i("ax.E"))
p=k
l=r.c
if(l==null){s=[1]
x=5
break}if(J.cj(p)===0){l.M(y.q).f.aF(D.aEK)
s=[1]
x=5
break}l=r.gow()
j=r.gow()
i=C.c.ak(r.x.a.a)
o=B.ccp(C.c.ak(r.y.a.a),i,l.a,p,j.b)
n="EXTF_Buchungsstapel_"+C.c.a1(r.gow().a.dS(),0,10)+"_"+C.c.a1(r.gow().b.dS(),0,10)+".csv"
x=8
return A.j(B.bIa(o,n),$async$BH)
case 8:l=r.c
if(l==null){s=[1]
x=5
break}l.M(y.q).f.aF(A.bL(null,null,null,null,null,C.m,null,A.d("DATEV-Datei erstellt ("+J.cj(p)+" Buchungen).",null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
g=t.pop()
m=A.a0(g)
l=r.c
if(l==null){s=[1]
x=5
break}l.M(y.q).f.aF(A.bL(null,null,null,null,null,C.m,null,A.d("Export fehlgeschlagen: "+A.e(m),null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.F(new B.bcl(r))
x=s.pop()
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$BH,w)},
p(d){var x,w,v,u,t=this,s=null,r=C.aj.dt(0.14),q=A.aq(4),p=A.c7(C.aj.dt(0.5),1),o=y.p
q=A.a9(A.a([D.aa0,A.aE(s,A.a9(A.a([D.ae6,C.c4,A.d("DATEV",s,s,s,s,A.r(C.aj,11,C.r).fo(0.4),s,s,s)],o),C.k,s,C.e,C.I,0,s,s),C.p,s,s,new A.aB(r,s,p,q,s,s,C.B),s,s,s,s,C.li,s,s,s)],o),C.k,s,C.e,C.i,0,s,s)
p=A.d("Erzeugt eine CSV-Datei im DATEV-Format (EXTF-Buchungsstapel, SKR 03). Enthalten sind die Tageslosungen der App-Verk\xe4ufe je Steuersatz: Kasse (1000) an Erl\xf6se 7 % (8300) bzw. 19 % (8400) \u2014 entsprechend der GoBD-Verfahrensdokumentation. Buchhaltung und Steuererkl\xe4rungen erstellt Gesellschafter Philipp Blume; die Datei l\xe4sst sich direkt in eine DATEV-f\xe4hige Buchhaltungssoftware importieren.",s,s,s,s,A.r(C.l,13,C.j).cH(1.4),s,s,s)
r=t.z?s:t.gaKd()
x=t.gow()
w=$.cI()
r=A.ew(D.afI,A.d("Zeitraum: "+w.a3(x.a)+" \u2013 "+w.a3(t.gow().b),s,s,s,s,s,s,s,s),r,s)
w=A.ck(s,C.a6,!1,s,!0,C.m,s,A.co(),t.x,s,s,s,s,s,2,D.ahf,C.P,!0,s,!0,s,!1,s,C.ab,s,s,s,s,s,C.c7,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.w,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.W,s,C.O,s,s,s,s)
x=A.ck(s,C.a6,!1,s,!0,C.m,s,A.co(),t.y,s,s,s,s,s,2,D.aho,C.P,!0,s,!0,s,!1,s,C.ab,s,s,s,s,s,C.c7,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.w,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.W,s,C.O,s,s,s,s)
v=t.z?s:t.gaxb()
u=A.dL(C.n,C.h,s,C.es,s,s,s)
return A.d8(D.abn,s,A.cY(A.a([q,C.D,p,C.K,A.b_(s,A.a1(A.a([r,C.t,w,C.D,x,C.K,A.ft(t.z?D.ZM:D.FM,D.aNJ,v,u)],o),C.ac,C.e,C.i),s,s,C.w,s,s,3),C.t,A.d("Hinweis: Bargeld-Entnahmen und Bankbewegungen bucht Philipp Blume weiterhin \xfcber sevDesk/Kontoauszug \u2014 diese Datei deckt bewusst nur die Erl\xf6sseite ab, damit keine Buchungen doppelt entstehen.",s,s,s,s,A.r(C.l,11,C.j).cH(1.35),s,s,s)],o),s,C.w,s,C.F,!1),s,s,s)}}
B.DU.prototype={
p(d){var x=this,w=null,v=x.d,u=x.c,t=B.bAW(v,x.e,u),s=B.bHU(u,t),r=A.r(B.bSP(v,t),x.f,C.C)
return A.d(s,w,w,w,B.cdv(v,t)+" "+$.cx().a3(Math.abs(u)),r,w,w,w)}}
B.mW.prototype={
wo(d,e,f,g,h){return this.b1x(d,e,f,g,h)},
b1x(d,e,f,g,h){var x=0,w=A.p(y.N),v,u=this,t,s,r,q
var $async$wo=A.l(function(i,j){if(i===1)return A.m(j,w)
for(;;)switch(x){case 0:t=u.a
s=y.N
r=y.z
x=3
return A.j(t.dF("request_document_approval",A.a4(["p_document_kind",d,"p_period_from",C.c.a1(e.dS(),0,10),"p_period_to",C.c.a1(f.dS(),0,10),"p_title",h,"p_snapshot",g,"p_draft_path",null],s,r),r),$async$wo)
case 3:q=j
t=t.ax
t===$&&A.b()
r=J.o0(q)
t.fO("approval-notify",A.a4(["approval_id",r.j(q),"phase","requested"],s,s))
v=r.j(q)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$wo,w)},
LZ(d,e,f){return this.aU1(d,e,f)},
aU1(d,e,f){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$LZ=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:u=v.a
t=y.N
s=y.z
x=2
return A.j(u.dF("decide_document_approval",A.a4(["p_approval_id",d,"p_decision",f,"p_comment",e],t,s),s),$async$LZ)
case 2:u=u.ax
u===$&&A.b()
u.fO("approval-notify",A.a4(["approval_id",d,"phase",f==="approved"?"approved":"rejected"],t,t))
u.fO("document-finalize",A.a4(["approval_id",d],t,t))
return A.n(null,w)}})
return A.o($async$LZ,w)},
Hj(d){return this.an1(d)},
an1(d){var x=0,w=A.p(y.u),v,u=this,t
var $async$Hj=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.a.ay
t===$&&A.b()
x=3
return A.j(t.cJ("signed-documents").nN(d,86400),$async$Hj)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Hj,w)},
zq(d,e){return this.aYH(0,!1)},
aYG(d){return this.zq(0,!1)},
aYH(a8,a9){var x=0,w=A.p(y.D),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$zq=A.l(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:e=s.a
d=y.N
a0=y.z
a1=y.j
a2=y.P
a6=J
a7=a1
x=3
return A.j(e.dF("list_document_approvals",A.a4(["p_mine_only",!1],d,a0),a0),$async$zq)
case 3:a3=a6.ci(a7.a(b1),a2)
a4=C.bO
u=5
x=8
return A.j(e.fe("list_partner_signatures",a0),$async$zq)
case 8:r=b1
a4=J.ci(a1.a(r),a2)
u=2
x=7
break
case 5:u=4
a5=t.pop()
x=7
break
case 4:x=2
break
case 7:p=A.a([],y.R)
for(a0=a3.$ti,a1=new A.aY(a3,a3.gq(0),a0.i("aY<ap.E>")),a0=a0.i("ap.E"),a2=y.H,o=y.a;a1.t();){n=a1.d
if(n==null)n=a0.a(n)
m=J.Q(n)
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
l===$&&A.b()
g=l.c
g===$&&A.b()
f=A.FN(null,null,d,d)
f.H(0,l.b)
p.push(new A.afl(l.a,f,"signed-documents",l.d,g).nN(k,86400).cr(new B.azO(n),a2).iG(new B.azP()))}if(m&&h==="inventory_fifo"&&i!=null&&i.length!==0)p.push(e.cJ("document_approvals").fi(0,"snapshot").hN("id",i).qN().cr(new B.azQ(n),o).iG(new B.azR()))}x=p.length!==0?9:10
break
case 9:x=11
return A.j(A.l3(p,a2),$async$zq)
case 11:case 10:v=a3
x=1
break
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$zq,w)}}
B.Nz.prototype={
gaeO(){var x=this.f
return A.bs(A.aS(x),A.bb(x),A.bV(x),0,0,0,0)},
U(){var x=null
return new B.We(new A.tx(!1,$.ad()),new A.br(x,y.A),new A.br(x,y.t),x,A.B(y.U,y.Z),x,!0,x)}}
B.We.prototype={
gl7(){var x=this.d
return x===$?this.d=new A.Zn(this.a.r,$.ad()):x},
grX(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.Hk(x,$.ad())}return w},
gnB(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.Hk(x,$.ad())}return w},
gik(){this.a.toString
return null},
j2(d,e){var x=this
x.jj(x.gl7(),"entry_mode")
x.jj(x.grX(),"selected_start")
x.jj(x.gnB(),"selected_end")
x.jj(x.r,"autovalidate")},
l(){var x=this
x.gl7().l()
x.grX().l()
x.gnB().l()
x.r.l()
x.arN()},
SX(){var x,w=this,v=w.gl7(),u=v.y,t=u==null
if((t?A.q(v).i("bt.T").a(u):u)!==C.dL)v=(t?A.q(v).i("bt.T").a(u):u)===C.eP
else v=!0
if(v)if(!w.x.ga4().hW()){w.F(new B.bcg(w))
return}if(w.ga77()){v=w.grX()
u=v.y
v=u==null?A.q(v).i("bt.T").a(u):u
v.toString
u=w.gnB()
t=u.y
u=t==null?A.q(u).i("bt.T").a(t):t
u.toString
x=new A.m_(v,u,y.T)}else x=null
v=w.c
v.toString
A.aC(v,!1).bt(x)},
SP(){var x=this.c
x.toString
A.aC(x,!1).bt(null)},
SU(){this.F(new B.bcf(this))},
IW(d){var x=this.a
if(d.n9(x.d)||d.kO(x.e))return!1
return!0},
aEK(d){this.F(new B.bch(this,d))},
aC9(d){this.F(new B.bce(this,d))},
ga77(){var x=this.grX(),w=x.y
if((w==null?A.q(x).i("bt.T").a(w):w)!=null){x=this.gnB()
w=x.y
x=(w==null?A.q(x).i("bt.T").a(w):w)!=null}else x=!1
return x},
p(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3={}
A.X(b4)
x=y.w
w=A.bB(b4,C.dU,x).w.gj0(0)
v=A.cB(b4,C.aJ,y.y)
v.toString
u=A.ok(b4)
A.X(b4)
t=A.mK(b4)
b3.a=null
s=b1.gl7()
r=s.y
q=r==null
if((q?A.q(s).i("bt.T").a(r):r)!==C.e3)p=(q?A.q(s).i("bt.T").a(r):r)===C.dL
else p=!0
switch(q?A.q(s).i("bt.T").a(r):r){case C.e3:case C.i2:s=b1.a.fr
r=b1.grX()
q=r.y
r=q==null?A.q(r).i("bt.T").a(q):q
q=b1.gnB()
o=q.y
q=o==null?A.q(q).i("bt.T").a(o):o
o=b1.a
n=o.d
m=o.e
l=o.dy
o=o.gaeO()
k=b1.ga77()?b1.gIJ():b2
if(p){j=b1.a.db
j=A.bK(C.jy,b2,b2,b2)
j=A.f_(b2,b2,j,b2,b2,b1.gCf(),C.a0,b2,v.gaW(),b2)}else j=b2
i=b1.a.y
i=v.gbI()
h=b1.a.z
v=v.gaU()
b3.a=new B.akb(r,q,n,m,l,o,b1.ga6T(),b1.ga6z(),k,b1.gIC(),i,v,s,j,b1.w)
g=A.bB(b4,C.mX,x).w.a
f=u.fx
if(f==null){x=t.fx
x.toString
f=x}e=u.fy
if(e==null)e=t.gFR()
d=u.go
if(d==null)d=t.gFS()
a0=u.id
if(a0==null)a0=t.id
a1=C.a0
break
case C.dL:case C.eP:x=b1.a.fr
s=b1.grX()
r=s.y
if(r==null)r=A.q(s).i("bt.T").a(r)
q=b1.gnB()
o=q.y
if(o==null)o=A.q(q).i("bt.T").a(o)
n=b1.a.gaeO()
m=w===C.dC
l=m?98:108
k=b1.a
j=k.fr
i=s.y
s=i==null?A.q(s).i("bt.T").a(i):i
i=q.y
q=i==null?A.q(q).i("bt.T").a(i):i
i=k.d
h=k.e
a2=k.dy
a3=b1.r
a4=a3.y
a3=a4==null?A.q(a3).i("bt.T").a(a4):a4
a4=k.Q
a5=k.as
a6=k.at
a7=k.ax
a8=k.ay
a9=k.ch
b0=k.CW
k=k.cx
s=s==null?b2:A.bs(A.aS(s),A.bb(s),A.bV(s),0,0,0,0)
q=q==null?b2:A.bs(A.aS(q),A.bb(q),A.bV(q),0,0,0,0)
l=A.bP(new A.aa(C.xA,A.a1(A.a([C.cq,new B.XA(s,q,A.bs(A.aS(i),A.bb(i),A.bV(i),0,0,0,0),A.bs(A.aS(h),A.bb(h),A.bV(h),0,0,0,0),b1.ga6T(),b1.ga6z(),a5,a6,a4,a7,a8,a9,b0,!0,a3,k,a2,j,b1.x),C.cq],y.p),C.k,C.e,C.i),b2),l,b2)
if(p){b1.a.toString
s=A.f_(b2,b2,C.yN,b2,b2,b1.gCf(),C.a0,b2,v.gaX(),b2)}else s=b2
b1.a.toString
q=v.gbS()
k=b1.a.w
k=v.gbR()
j=b1.a.z
v=v.gaU()
b3.a=new B.aov(r,o,n,l,b1.gIJ(),b1.gIC(),q,k,v,s,x,b2)
if(m)g=C.AS
else g=D.aDw
x=u.b
if(x==null){x=t.b
x.toString
f=x}else f=x
e=u.c
if(e==null)e=t.gcj(0)
d=u.d
if(d==null)d=t.gct()
x=u.e
a0=x==null?t.e:x
a1=C.Ei
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
return A.NF(b2,x,A.o5(b2,A.Ag(new A.eC(new B.bci(b3),b2),1.3),C.p,b2,C.e2,b2,C.Z,s,b2,b2,v),C.bz,b2,f,a1,C.mq,e,a0,d)}}
B.akb.prototype={
p(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.X(a3)
x=A.cB(a3,C.aJ,y.y)
x.toString
w=y.w
v=A.bB(a3,C.dU,w).w.gj0(0)
u=A.ok(a3)
A.X(a3)
t=A.mK(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gFN()
q=u.k2
if(q==null)q=t.gFO()
p=q.bD(0.38)
o=u.k3
if(o==null)o=t.gFP()
n=u.k4
if(n==null)n=t.gFQ()
m=n==null?a2:n.kF(q)
n=a1.ax
l=a1.c
k=a1.d
j=B.bRY(x,n,l,k)
i=B.bRX(x,n,l,k,new A.aT(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.kF(l!=null?q:p)
if(x)g=a2
else g=o.kF(k!=null?q:p)
f=A.qC(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.dM(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.a([],x)
if(v===C.fc&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.cv(A.d(a1.as,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a1.z,a2,f))
d.push(C.ai)
a0=a1.at
x=A.a([A.bP(a2,a2,A.bB(a3,C.w4,w).w.a.a<360?42:72),A.ak(A.bq(a2,a2,a2,A.a1(A.a([A.d(a0,a2,1,C.ah,a2,m,a2,a2,a2),C.D,A.a9(A.a([A.d(j,a2,1,C.ah,a2,h,a2,a2,a2),A.d(" \u2013 ",a2,a2,a2,a2,h,a2,a2,a2),new A.fZ(1,C.cm,A.d(i,a2,1,C.ah,a2,g,a2,a2,a2),a2)],x),C.k,a2,C.e,C.i,0,a2,a2),C.K],x),C.x,C.e,C.i),!1,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,C.M,a2),1)],x)
if(v===C.dC&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.aa(C.eS,A.zA(w,e,a2),a2))}x=A.bL5(d,e,r,new A.GO(A.a9(x,C.k,a2,C.e,C.i,0,a2,a2),D.aDj,a2),0,e,new A.MU(C.ZW,a2,a2,a2,C.CY,a2,a1.Q,a2,a2,a2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.bs(A.aS(l),A.bb(l),A.bV(l),0,0,0,0):a2
k=k!=null?A.bs(A.aS(k),A.bb(k),A.bV(k),0,0,0,0):a2
w=A.bs(A.aS(w),A.bb(w),A.bV(w),0,0,0,0)
d=A.bs(A.aS(d),A.bb(d),A.bV(d),0,0,0,0)
return A.j7(!0,A.d8(x,s,new B.Vo(l,k,w,d,a1.r,A.bs(A.aS(a0),A.bb(a0),A.bV(a0),0,0,0,0),a1.x,a1.y,n,a2),a2,a2,a2),!1,!1,C.a0,!1,!1)}}
B.Vo.prototype={
U(){return new B.Vp(new A.br(null,y.A),new A.nG())}}
B.Vp.prototype={
ap(){var x,w,v,u=this
u.aH()
x=A.wI(0,null,null)
u.x=x
x.ac(0,u.gaMd())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.n9(v)&&!w.kO(x.f))u.w=A.a6k(v,w)
u.y=u.w!==0},
l(){var x=this.x
x===$&&A.b()
x.l()
this.am()},
aMe(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gc9(0).at
v.toString
x=C.b.gcC(w.x.f).z
x.toString
if(v<=x)w.F(new B.b95(w))
else{v=w.y
v===$&&A.b()
if(!v)w.F(new B.b96(w))}},
aPM(){var x=this.c
x.toString
switch(A.X(x).w.a){case 0:case 1:A.OM()
break
case 2:case 3:case 4:case 5:break}},
aPl(d){this.aPM()
this.F(new B.b97(this,d))},
a3l(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.bs(A.aS(u),A.bb(u)+t,1,0,0,0,0)
u=v.a
w=u.z
return new B.XZ(v.f,v.r,u.w,v.gaPk(),u.e,u.f,x,u.r,w,null)},
p(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.a([D.aSq],p),n=r.y
n===$&&A.b()
if(n)o.push(D.a7R)
n=r.a
x=n.z
w=n.e
v=n.f
u=r.f
if(u==null)u=n.c
n=u==null?n.w:u
u=r.x
u===$&&A.b()
t=r.e
s=r.w
p=A.a([B.bPo(new B.b98(r),s,q),B.bPo(new B.b99(r),A.a6k(w,v)+1-s,t)],p)
o.push(A.ak(new B.Vq(new B.a6b(p,C.F,!1,u,q,q,q,!1,t,0,q,q,q,C.hH,C.P,q,q,C.m,C.bw,r.d),w,v,n,x,q),1))
return A.a1(o,C.k,C.e,C.i)}}
B.Vq.prototype={
U(){return new B.Vr()}}
B.Vr.prototype={
ap(){var x,w,v=this
v.aH()
x=y.k
w=y.c
v.e=A.a4([C.Be,new A.dJ(v.gaCB(),new A.c9(A.a([],x),w),y.M),C.Bf,new A.dJ(v.gaCD(),new A.c9(A.a([],x),w),y.O),C.vP,new A.dJ(v.gaBL(),new A.c9(A.a([],x),w),y.Y)],y.n,y.V)
v.f=A.jA(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.b()
x.l()
this.am()},
aCA(d){this.F(new B.b9b(this,d))},
aCC(d){var x,w=this.f
w===$&&A.b()
w.ij()
w=this.f
x=w.e
x.toString
A.nf(x).ov(w,!0)},
aCE(d){var x,w=this.f
w===$&&A.b()
w.ij()
w=this.f
x=w.e
x.toString
A.nf(x).ov(w,!1)},
aBM(d){this.F(new B.b9a(this,d))},
aHQ(d,e){var x,w,v,u=this.c.M(y.I).w
this.a.toString
if(u===C.b7)if(e===C.fR)x=C.hL
else x=e===C.hL?C.fR:e
else x=e
w=C.TS.h(0,x)
w.toString
v=A.bs(A.aS(d),A.bb(d),A.bV(d)+w,0,0,0,0)
w=this.a
if(!v.n9(w.d)&&!v.kO(w.e))return v
return null},
p(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.b()
x=t.f
x===$&&A.b()
w=t.a.r
v=x.gda()?t.w:s
u=t.f.gda()?t.r:s
return A.aJd(r,!1,new B.X0(w,v,u,t.a.c,s),!0,x,C.bd,t.gaCz(),s,s,C.Tg)}}
B.X0.prototype={
dT(d){return!this.f.vY(this.r,d.r)||this.w!=d.w}}
B.alx.prototype={
aAb(d,e){var x,w=null,v=A.a([],y.p)
for(x=e.gMQ();v.length<7;x=(x+1)%7)v.push(new A.jz(!0,new A.hc(C.X,w,w,A.d(e.gYS()[x],w,w,w,w,d,w,w,w),w),w))
return v},
p(d){var x,w=A.X(d),v=w.ok.x.kF(w.ax.k3),u=A.cB(d,C.aJ,y.y)
u.toString
x=this.aAb(v,u)
C.b.hB(x,0,C.aw)
x.push(C.aw)
u=A.bB(d,C.dU,y.w).w.gj0(0)===C.fc?384:480
return new A.dX(new A.aw(0,u,0,42),A.bFa(A.aeP(x,!0,!1,!0),D.CQ,null,!0),null)}}
B.bna.prototype={
AB(d){return new B.bne(9,Math.max((d.w-16)/7,0),8,A.uO(d.x))},
l_(d){return!1}}
B.bne.prototype={
a00(d){return this.a*C.d.cD(d,50)},
a_Z(d){return Math.max(0,this.a*C.d.h_(d/50)-1)},
aA9(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
GC(d){var x,w=this,v=w.a,u=C.f.aj(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=C.f.h6(d,v)
x=w.aA9(q,t)
if(t)s=r
return new A.aeU(v*50,x,42,s)},
Wj(d){return 50*(C.f.h6(d-1,this.a)+1)-8}}
B.XZ.prototype={
U(){return new B.Y_()}}
B.Y_.prototype={
ap(){var x,w,v,u,t
this.aH()
x=this.a.x
w=A.NA(A.aS(x),A.bb(x))
v=J.kj(w,y.E)
for(u=0;u<w;u=t){t=u+1
v[u]=A.jA(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
cw(){var x,w,v=this
v.e1()
x=v.c.M(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.vZ(x.x,w)}else x=!1
if(x){x=v.d
x===$&&A.b()
x[A.bV(w)-1].ij()}},
l(){var x,w,v,u,t=this.d
t===$&&A.b()
x=t.length
w=0
for(;w<t.length;t.length===x||(0,A.L)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aI(0)
v.fl()}this.am()},
axf(d){var x,w,v
if(d){x=this.c.M(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=C.ff
break
case 1:case 2:v=C.fe
break
default:v=C.YJ}x=$.au.aG$.d.c.e
x.toString
A.bGm(x,0,v,C.ck,C.Z)}}},
p(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.X(b5),b4=A.cB(b5,C.aJ,y.y)
b4.toString
x=b1.a.x
w=A.aS(x)
v=A.bb(x)
u=A.NA(w,v)
b1.a.toString
t=A.bMc(w,v,b4)
s=C.d.h_((u+t)/7)
x=y.p
r=A.a([],x)
for(q=0-t+1,p=b1.gaxe(),o=y.v;q<=u;++q)if(q<1)r.push(C.lF)
else{b1.a.toString
n=A.bs(w,v,q,0,0,0,0)
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
a0=m.z.vY(m.e,n)
m=b1.a
l=m.z
k=b1.d
k===$&&A.b()
k=k[A.bV(n)-1]
m=m.f
b5.M(o)
j=A.X(b5)
j=j.bo.ok
if(j==null){A.X(b5)
j=A.mK(b5)
j=j.gwf()}r.push(new B.Wj(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.a([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=C.b.e6(r,a3,a4)
b1.a.toString
a6=A.bs(w,v,a3-t+1,0,0,0,0)
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
a7=m}}if(a7){b5.M(o)
m=A.X(b5)
m=m.bo.ok
if(m==null){A.X(b5)
m=A.mK(b5)
m=m.gwf()}m=new A.En(m,!0,C.lF,b2)}else m=C.lF
C.b.hB(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&C.f.aj(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.bs(w,v,a4-t,0,0,0,0)
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
a9=m}}if(a9){b5.M(o)
m=A.X(b5)
m=m.bo.ok
if(m==null){A.X(b5)
m=A.mK(b5)
m=m.gwf()}m=new A.En(m,!0,C.lF,b2)}else m=C.lF
a5.push(m)}C.b.H(a1,a5)}b0=A.bB(b5,C.dU,y.w).w.gj0(0)===C.fc?384:480
return A.a1(A.a([new A.dX(new A.aw(0,b0,0,1/0).P3(58),new A.aa(C.i5,new A.ec(C.aL,b2,b2,new A.jz(!0,A.d(b4.EO(b1.a.x),b2,b2,b2,b2,b3.ok.z.kF(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.dX(new A.aw(0,b0,0,s*42+(s-1)*8),A.bFa(A.aeP(a1,!0,!1,!0),D.CQ,C.ix,!1),b2),C.t],x),C.k,C.e,C.i)}}
B.Wj.prototype={
U(){return new B.aly(A.xa())},
w9(d){return this.e.$1(d)}}
B.aly.prototype={
l(){var x=this.d
x.S$=$.ad()
x.R$=0
this.am()},
p(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.X(a4),a2=a1.ax,a3=A.cB(a4,C.aJ,y.y)
a3.toString
x=A.ok(a4)
A.X(a4)
w=A.mK(a4)
v=a4.M(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new B.bcu(x,w)
q=new B.bcv(r)
p=A.be(y.C)
if(u.w)p.E(0,C.Q)
u=d.a
if(u.y||u.z)p.E(0,C.U)
u=d.d
u.su(0,p)
o=y._
n=q.$1$2(new B.bcp(),p,o)
m=q.$1$2(new B.bcq(),p,o)
l=q.$1$2(new B.bcr(),p,y.W)
if(l==null)l=C.e0
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.kF(n)
j=new A.i4(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new B.Xk(t,q.y?D.Bz:D.a00,v,a0)}else{j=a0
i=a0
if(q.Q){k=new B.Xk(t,D.a01,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kF(A.aJ(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kF(A.aJ(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}else if(q.at){s=s==null?a0:s.kF(a2.b)
q=x.CW
if(q==null)q=w.gwu()
j=new A.i4(a0,a0,a0,a0,l.jc(q.cP(a2.b)))}}h=a3.MU(A.bV(d.a.c))
g=d.a.at?", "+a3.gbM():""
f=h+", "+a3.EN(d.a.c)+g
q=d.a
if(q.y)f=a3.aeS(f)
else if(q.z)f=a3.aeR(f)
a3=d.a
q=a3.y||a3.z
e=A.aE(C.X,A.bq(a0,a0,a0,new A.jz(!0,A.d(h,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,C.M,a0),C.p,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.fY(e,a0,a0,k,C.ap)
return!a3.w?A.bFm(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,C.d9,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new B.bcs(d),a0,a0,a0,new A.bv(new B.bct(d,r),y.b),a0,a0,a0,u):e}}
B.Jq.prototype={
L(){return"_HighlightPainterStyle."+this.b}}
B.Xk.prototype={
aP(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.aTH)return
$.ar()
x=A.b5()
w=this.b
x.r=w.gu(w)
x.b=C.bp
v=this.d
A:{if(C.b7===v){w=!0
break A}if(C.z===v){w=!1
break A}w=null}B:{u=D.a00===r
t=!(u&&w)
if(t){s=D.Bz===r
w=s&&!w}else{s=null
w=!0}if(w){r=e.a/2
d.hf(new A.N(r,0,r+r,0+e.b),x)
break B}if(!u)w=t?s:D.Bz===r
else w=!0
if(w){d.hf(new A.N(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a01===r){d.hf(new A.N(0,0,0+e.a,0+e.b),x)
break B}break B}},
fj(d){return!1}}
B.aov.prototype={
azL(d,e,f,g){var x,w,v,u=A.cB(d,C.aJ,y.y)
u.toString
x=this.as
w=B.bRY(u,x,e,f)
v=B.bRX(u,x,e,f,g)
if(e==null||f==null)return u.gaR()
switch(d.M(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
p(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.X(d)
x=A.cB(d,C.aJ,y.y)
x.toString
w=A.bB(d,C.dU,y.w).w.gj0(0)
v=A.ok(d)
A.X(d)
u=A.mK(d)
if(w===C.dC){t=v.w
s=t==null?u.gz9():t}else s=A.X(d).ok.f
r=v.r
if(r==null)r=u.gvU()
s=s==null?j:s.cP(r)
t=k.c
q=k.d
p=k.azL(d,t,q,k.e)
o=t!=null&&q!=null?x.MV(t)+" \u2013 "+x.MV(q):""
n=A.bQu(k.Q,k.z,w===C.fc,w,o,s,p)
x=A.cv(A.d(k.y,j,j,j,j,j,j,j,j),j,j,k.w,j,j)
t=y.p
m=new A.dX(C.Cf,new A.aa(C.eS,new A.ec(C.n0,j,j,A.bFP(j,A.a([x,A.cv(A.d(k.x,j,j,j,j,j,j,j,j),j,j,k.r,j,j)],t),C.Uj,C.aY,0,8),j),j),j)
x=A.b8(d,C.b3)
x=x==null?j:x.gcO()
x=(x==null?C.aQ:x).mO(0,1.3).bh(0,14)
l=C.AS.aB(0,x/14)
switch(w.a){case 0:return A.jD(new B.bjx(k,!0,l,n,m))
case 1:return A.a9(A.a([n,new A.fZ(1,C.cm,A.a1(A.a([A.ak(k.f,1),m],t),C.ac,C.e,C.I),j)],t),C.ac,j,C.e,C.I,0,j,j)}}}
B.XA.prototype={
U(){return new B.Jv()}}
B.Jv.prototype={
ap(){var x,w,v=this
v.aH()
x=v.a
v.f=x.c
w=$.ad()
v.w=new A.bc(C.ad,w)
v.r=x.d
v.x=new A.bc(C.ad,w)},
l(){var x,w=this.w
w===$&&A.b()
x=$.ad()
w.S$=x
w.R$=0
w=this.x
w===$&&A.b()
w.S$=x
w.R$=0
this.am()},
cw(){var x,w,v,u,t=this
t.e1()
x=t.c
x.toString
x=A.cB(x,C.aJ,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.MT(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.abL(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.MT(w)
t.e=x
w=t.x
w===$&&A.b()
t.abL(w,x,!1)}},
hW(){var x,w,v,u=this,t={},s=u.acw(u.f)
t.a=s
x=u.acw(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kO(v)){s=u.a.Q
w=u.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
t.a=w.gba()}}u.F(new B.bjA(t,u,x))
return t.a==null&&x==null},
a8K(d){var x=this.c
x.toString
x=A.cB(x,C.aJ,y.y)
x.toString
this.a.toString
return x.Ze(d)},
acw(d){var x,w,v=this
if(d==null){x=v.a.y
w=v.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
return w.gb4()}else if(!v.IW(d)){x=v.a.z
w=v.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
return w.gaY()}return null},
IW(d){var x=this.a
if(d.n9(x.e)||d.kO(x.f))return!1
return!0},
abL(d,e,f){var x=d.a.aev(e)
d.jZ(0,f?x.lm(A.dI(C.G,0,e.length,!1)):x)},
aEJ(d){var x=this
x.F(new B.bjz(x,d))
if(x.a.CW)x.hW()},
aC8(d){var x=this
x.F(new B.bjy(x,d))
if(x.a.CW)x.hW()},
p(d){var x,w,v,u,t,s,r,q=this,p=null
A.X(d)
x=A.cB(d,C.aJ,y.y)
x.toString
w=A.vR(d)
v=w.p1
if(v==null)v=C.v1
u=q.w
u===$&&A.b()
t=w.dy
q.a.toString
s=x.gbs()
q.a.toString
r=x.gbA()
u=A.ak(A.ck(p,C.a6,!0,p,!0,C.m,p,A.co(),u,p,p,p,p,p,2,A.fc(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.y,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,s,p,p,p,p,p,p,p,p,r,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.P,!0,p,!0,p,!1,p,C.ab,p,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaEI(),p,p,p,!1,p,p,!1,p,!0,p,C.w,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.W,p,C.O,p,p,p,p),1)
s=q.x
s===$&&A.b()
q.a.toString
r=x.gbs()
q.a.toString
x=x.gbz()
return A.a9(A.a([u,C.ai,A.ak(A.ck(p,C.a6,!1,p,!0,C.m,p,A.co(),s,p,p,p,p,p,2,A.fc(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.z,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,p,p,p,p,p,p,p,p,x,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.P,!0,p,!0,p,!1,p,C.ab,p,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaC7(),p,p,p,!1,p,p,!1,p,!0,p,C.w,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.W,p,C.O,p,p,p,p),1)],y.p),C.x,p,C.e,C.i,0,p,p)}}
B.a0L.prototype={
bc(d){this.bG(d)
this.qr()},
cw(){var x,w,v,u,t=this
t.e1()
x=t.cZ$
w=t.gmo()
v=t.c
v.toString
v=A.qr(v)
t.i7$=v
u=t.oC(v,w)
if(w){t.j2(x,t.fp$)
t.fp$=!1}if(u)if(x!=null)x.l()},
l(){var x,w=this
w.i6$.aE(0,new B.byn())
x=w.cZ$
if(x!=null)x.l()
w.cZ$=null
w.am()}}
B.b27.prototype={
AB(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.Tb(v,t+x.b,u+w,t,u,A.uO(d.x))},
l_(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
B.a6b.prototype={
adJ(d){return this.dx}}
var z=a.updateTypes(["~()","U<~>()","~(aT?)","~(D)","~(i)","rI(rI)","EF(@)","~(aT)","~(mm)","~(mr)","~(jv)"])
B.bAh.prototype={
$1(d){return""+A.aS(d)+C.c.cz(C.f.j(A.bb(d)),2,"0")+C.c.cz(C.f.j(A.bV(d)),2,"0")},
$S:988}
B.bAX.prototype={
$1(d){if(!this.a)return d
return d===D.fz?D.lq:D.fz},
$S:z+5}
B.bcm.prototype={
$0(){var x=this.b
return this.a.w=new B.m4(x.a,x.b)},
$S:0}
B.bcj.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bck.prototype={
$1(d){var x=A.cn(y.f.a(d),y.N,y.z),w=A.om(J.aj(x.h(0,"booking_date"))),v=A.b1(x.h(0,"tax_rate"))
if(v==null)v=null
if(v==null)v=19
x=A.b1(x.h(0,"gross"))
if(x==null)x=null
return new B.EF(w,v,x==null?0:x)},
$S:z+6}
B.bcl.prototype={
$0(){return this.a.z=!1},
$S:0}
B.azO.prototype={
$1(d){J.fD(this.a,"signed_url",d)},
$S:199}
B.azP.prototype={
$1(d){},
$S:27}
B.azQ.prototype={
$1(d){var x,w="snapshot"
if(d!=null){x=J.J(d,w)
if(y.f.b(x))J.fD(this.a,w,x)}},
$S:234}
B.azR.prototype={
$1(d){},
$S:27}
B.bCY.prototype={
$1(d){var x=this.b,w=this.a.a
return x==null?w:x.$2(d,w)},
$S:25}
B.bcg.prototype={
$0(){this.a.r.HA(0,!0)},
$S:0}
B.bcf.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gl7(),q=r.y
switch(q==null?A.q(r).i("bt.T").a(q):q){case C.e3:s.r.HA(0,!1)
r.su(0,C.dL)
break
case C.dL:q=s.grX()
x=q.y
w=!1
if((x==null?A.q(q).i("bt.T").a(x):x)!=null){x=s.gnB()
v=x.y
u=v==null
if((u?A.q(x).i("bt.T").a(v):v)!=null){w=q.y
if(w==null)w=A.q(q).i("bt.T").a(w)
w.toString
x=u?A.q(x).i("bt.T").a(v):v
x.toString
x=w.kO(x)}else x=w}else x=w
if(x)s.gnB().su(0,t)
x=q.y
w=x==null
if((w?A.q(q).i("bt.T").a(x):x)!=null){if(w)x=A.q(q).i("bt.T").a(x)
x.toString
x=!s.IW(x)}else x=!1
if(x){q.su(0,t)
s.gnB().su(0,t)}else{q=s.gnB()
x=q.y
w=x==null
if((w?A.q(q).i("bt.T").a(x):x)!=null){if(w)x=A.q(q).i("bt.T").a(x)
x.toString
x=!s.IW(x)
s=x}else s=!1
if(s)q.su(0,t)}r.su(0,C.e3)
break
case C.i2:case C.eP:break}},
$S:0}
B.bch.prototype={
$0(){var x=this.b
this.a.grX().su(0,x)
return x},
$S:0}
B.bce.prototype={
$0(){var x=this.b
this.a.gnB().su(0,x)
return x},
$S:0}
B.bci.prototype={
$1(d){return this.a.a},
$S:25}
B.b95.prototype={
$0(){this.a.y=!1},
$S:0}
B.b96.prototype={
$0(){this.a.y=!0},
$S:0}
B.b97.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.n9(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
B.b98.prototype={
$2(d,e){return this.a.a3l(d,e,!0)},
$S:95}
B.b99.prototype={
$2(d,e){return this.a.a3l(d,e,!1)},
$S:95}
B.b9b.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
B.b9a.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.aHQ(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
B.bcu.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:164}
B.bcv.prototype={
$1$2(d,e,f){return this.a.$1$1(new B.bcw(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:165}
B.bcw.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.Z(this.b)},
$S(){return this.c.i("0?(i0?)")}}
B.bcp.prototype={
$1(d){var x=d.gyy()
return x},
$S:81}
B.bcq.prototype={
$1(d){var x=d.gvs()
return x},
$S:81}
B.bct.prototype={
$1(d){return this.b.$1$1(new B.bco(this.a,d),y.G)},
$S:23}
B.bco.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gFT()
w=x==null?null:x.Z(this.b)}else{x=d.gyz()
w=x==null?null:x.Z(this.b)}return w},
$S:171}
B.bcr.prototype={
$1(d){return d.ax},
$S:172}
B.bcs.prototype={
$0(){var x=this.a.a
return x.w9(x.c)},
$S:0}
B.bjx.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.a([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.ak(x.a.f,1))
v.push(x.e)
return A.a1(v,C.ac,C.e,C.I)},
$S:989}
B.bjA.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
B.bjz.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.a8K(w)
x.f=w
x.a.r.$1(w)},
$S:0}
B.bjy.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.a8K(w)
x.r=w
x.a.w.$1(w)},
$S:0}
B.byn.prototype={
$2(d,e){if(!d.a)d.T(0,e)},
$S:58};(function aliases(){var x=B.a0L.prototype
x.arN=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.Wf.prototype,"gaKd","Jz",1)
x(v,"gaxb","BH",1)
x(v=B.We.prototype,"gIJ","SX",0)
x(v,"gIC","SP",0)
x(v,"gCf","SU",0)
w(v,"ga6T","aEK",2)
w(v,"ga6z","aC9",2)
x(v=B.Vp.prototype,"gaMd","aMe",0)
w(v,"gaPk","aPl",7)
w(v=B.Vr.prototype,"gaCz","aCA",3)
w(v,"gaCB","aCC",8)
w(v,"gaCD","aCE",9)
w(v,"gaBL","aBM",10)
w(B.Y_.prototype,"gaxe","axf",3)
w(v=B.Jv.prototype,"gaEI","aEJ",4)
w(v,"gaC7","aC8",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.C,[B.EF,B.mW])
w(A.oh,[B.bAh,B.bAX,B.bck,B.azO,B.azP,B.azQ,B.azR,B.bCY,B.bci,B.bcu,B.bcv,B.bcw,B.bcp,B.bcq,B.bct,B.bco,B.bcr])
w(A.J9,[B.rI,B.Jq])
v(B.m4,A.vr)
v(B.rs,A.b7)
v(B.Wf,A.vi)
w(A.yv,[B.bcm,B.bcj,B.bcl,B.bcg,B.bcf,B.bch,B.bce,B.b95,B.b96,B.b97,B.b9b,B.b9a,B.bcs,B.bjA,B.bjz,B.bjy])
w(A.A,[B.DU,B.akb,B.alx,B.aov])
w(A.H,[B.Nz,B.Vo,B.Vq,B.XZ,B.Wj,B.XA])
w(A.V,[B.a0L,B.Vp,B.Vr,B.Y_,B.aly,B.Jv])
v(B.We,B.a0L)
w(A.yw,[B.b98,B.b99,B.bjx,B.byn])
v(B.X0,A.bJ)
w(A.aeT,[B.bna,B.b27])
v(B.bne,A.aeV)
v(B.Xk,A.Nv)
v(B.a6b,A.SC)
x(B.a0L,A.lo)})()
A.bwZ(b.typeUniverse,JSON.parse('{"rs":{"b7":[],"H":[],"c":[]},"Wf":{"V":["rs"]},"DU":{"A":[],"c":[]},"Nz":{"H":[],"c":[]},"Vo":{"H":[],"c":[]},"Vq":{"H":[],"c":[]},"X0":{"bJ":[],"bz":[],"c":[]},"XZ":{"H":[],"c":[]},"Wj":{"H":[],"c":[]},"XA":{"H":[],"c":[]},"Jv":{"V":["XA"]},"We":{"V":["Nz"]},"akb":{"A":[],"c":[]},"Vp":{"V":["Vo"]},"Vr":{"V":["Vq"]},"alx":{"A":[],"c":[]},"Y_":{"V":["XZ"]},"aly":{"V":["Wj"]},"Xk":{"aH":[]},"aov":{"A":[],"c":[]},"a6b":{"A":[],"c":[]}}'))
var y=(function rtii(){var x=A.ay
return{V:x("cl<cg>"),Y:x("dJ<jv>"),M:x("dJ<mm>"),O:x("dJ<mr>"),G:x("F"),v:x("bMa"),T:x("m_<aT>"),i:x("EF"),I:x("jw"),E:x("eJ"),S:x("OK"),R:x("E<U<~>>"),s:x("E<i>"),p:x("E<c>"),k:x("E<~(cl<cg>)>"),A:x("br<V<H>>"),t:x("br<Jv>"),D:x("v<a7<i,@>>"),j:x("v<@>"),P:x("a7<i,@>"),f:x("a7<@,@>"),y:x("aP"),w:x("kk"),a:x("by"),c:x("c9<~(cl<cg>)>"),U:x("f3<C?>"),N:x("i"),F:x("nD"),n:x("jf"),C:x("dl"),Q:x("X0"),q:x("xF"),b:x("bv<F?>"),z:x("@"),_:x("F?"),X:x("m_<aT>?"),W:x("f0?"),u:x("i?"),H:x("~"),Z:x("~()")}})();(function constants(){D.CQ=new B.bna()
D.h1=new A.a5(62250,"MaterialIcons",null,!1)
D.DP=new B.rs(null)
D.a7R=new A.k9(0,null,null,null)
D.aBg=new A.eO("Schnittstelle","Buchungsstapel f\xfcr die Buchhaltung",null,null)
D.aa0=new A.iA(1,C.cU,D.aBg,null)
D.fz=new B.rI(0,"hinaus")
D.lq=new B.rI(1,"herein")
D.aaZ=new B.rI(2,"weder")
D.aKk=new A.a6("DATEV-Export",null,null,null,null,null,null,null,null,null)
D.abn=new A.dY(D.aKk,null,null)
D.abE=new A.a5(57504,"MaterialIcons",null,!1)
D.lt=new A.a5(57912,"MaterialIcons",null,!1)
D.Fc=new A.a5(59011,"MaterialIcons",null,!1)
D.FD=new A.a5(62584,"MaterialIcons",null,!1)
D.ae6=new A.as(C.fC,14,C.aj,null,null)
D.FM=new A.as(C.yx,null,null,null,null)
D.yy=new A.a5(61487,"MaterialIcons",null,!1)
D.F5=new A.a5(57782,"MaterialIcons",null,!1)
D.afI=new A.as(D.F5,18,null,null,null)
D.ahf=new A.bl(null,null,null,"Beraternummer (optional)",null,null,null,"Nur falls in der Buchhaltungssoftware hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aho=new A.bl(null,null,null,"Mandantennummer (optional)",null,null,null,"Bleibt sie leer, beim Import in der Software erg\xe4nzen",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.a9I=new A.af(48,48,48,48)
D.iz=new A.aa(D.a9I,C.bG,null)
D.aDj=new A.I(1/0,64)
D.aDw=new A.I(496,164)
D.ZM=new A.cr(18,18,C.nj,null)
D.aL9=new A.a6("Freigabe angefordert.",null,null,null,null,null,null,null,null,null)
D.mD=new A.d9(D.aL9,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aMf=new A.a6("Keine Ums\xe4tze im gew\xe4hlten Zeitraum.",null,null,null,null,null,null,null,null,null)
D.aEK=new A.d9(D.aMf,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.kr=new A.a6("Anfordern",null,null,null,null,null,null,null,null,null)
D.mO=new A.a6("Freigabe anfordern",null,null,null,null,null,null,null,null,null)
D.aNJ=new A.a6("DATEV-Datei herunterladen",null,null,null,null,null,null,null,null,null)
D.aSq=new B.alx(null)
D.aTH=new B.Jq(0,"none")
D.a00=new B.Jq(1,"highlightLeading")
D.Bz=new B.Jq(2,"highlightTrailing")
D.a01=new B.Jq(3,"highlightAll")})()};
(a=>{a["CDxX7ZKlurZDYy3NgzA2K+my8yA="]=a.current})($__dart_deferred_initializers__);