((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ccB(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q="0",p=new A.aT(Date.now(),0,!1),o=C.c.cz(C.f.j(A.bb(p)),2,q),n=C.c.cz(C.f.j(A.bV(p)),2,q),m=C.c.cz(C.f.j(A.hN(p)),2,q),l=C.c.cz(C.f.j(A.AF(p)),2,q),k=C.c.cz(C.f.j(A.acx(p)),2,q),j=new B.bAt(),i=e.length===0?q:e,h=d.length===0?q:d,g=y.s,f=A.a([C.b.bS(A.a(['"EXTF"',"700","21",'"Buchungsstapel"',"13",""+A.aS(p)+o+n+m+l+k+"000","",'"BS"','"Boerdesnack24 App"',"",i,h,""+A.aS(a0)+"0101","4",j.$1(a0),j.$1(a2),'"Automatenumsaetze App"',"","1","0","0",'"EUR"'],g),";"),'"Umsatz (ohne Soll/Haben-Kz)";"Soll/Haben-Kennzeichen";"WKZ Umsatz";"Kurs";"Basis-Umsatz";"WKZ Basis-Umsatz";"Konto";"Gegenkonto (ohne BU-Schl\xfcssel)";"BU-Schl\xfcssel";"Belegdatum";"Belegfeld 1";"Belegfeld 2";"Skonto";"Buchungstext"'],g)
for(o=a1.length,x=0;x<a1.length;a1.length===o||(0,A.K)(a1),++x){w=a1[x]
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
f.push(C.b.bS(A.a([A.ah(r,".",","),'"S"','"EUR"',"","","","1000",u,"",m+l,'"'+("TL"+k+"-"+i)+'"',"","",'"'+("Tageslosung App-Verkaeufe "+h+" % "+t+"."+s+"."+A.aS(n))+'"'],g),";"))}return C.b.bS(f,"\r\n")},
EF:function EF(d,e,f){this.a=d
this.b=e
this.c=f},
bAt:function bAt(){},
bB7(d,e,f){var x,w=new B.bB8(f<0)
if(d==="expense")return w.$1(D.fz)
if(d==="revenue")return w.$1(D.ls)
x=A.hk(C.c.ah(e),null)
if(x!=null&&x>=1800&&x<=1999)return w.$1(C.f.ak(x,100)>=90?D.ls:D.fz)
return D.aaZ},
bIT(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rI:function rI(d,e){this.a=d
this.b=e},
bB8:function bB8(d){this.a=d},
aIv(){var x=new A.aT(Date.now(),0,!1)
return new B.m4(A.bs(A.aS(x),A.bb(x),1,0,0,0,0),A.bs(A.aS(x),A.bb(x)+1,0,0,0,0,0))},
ox(d){return C.c.cz(C.f.j(A.aS(d)),4,"0")+"-"+C.c.cz(C.f.j(A.bb(d)),2,"0")+"-"+C.c.cz(C.f.j(A.bV(d)),2,"0")},
m4:function m4(d,e){this.a=d
this.b=e},
rs:function rs(d){this.a=d},
Wg:function Wg(d,e){var _=this
_.w=$
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bcp:function bcp(d,e){this.a=d
this.b=e},
bcm:function bcm(d){this.a=d},
bcn:function bcn(){},
bco:function bco(d){this.a=d},
bI5(d,e){var x=$.cx().a3(Math.abs(d))
return e===D.fz?"-"+x:x},
bT0(d,e){var x
if(e===D.fz)return d==="revenue"||d==="expense"?C.R:C.l
if(e===D.ls)x=d==="revenue"||d==="expense"
else x=!1
if(x)return C.aj
return C.l},
cdH(d,e){if(d==="expense")return e===D.fz?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fz?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fz)return"Privatentnahme"
if(e===D.ls)return"Privateinlage"
return B.bIT(d)},
DU:function DU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
mW:function mW(d){this.a=d},
azR:function azR(d){this.a=d},
azS:function azS(){},
azT:function azT(d){this.a=d},
azU:function azU(){},
ayB(d,e,f,g,h,i){return B.cfK(d,e,f,g,h,i)},
cfK(d,e,f,g,h,i){var x=0,w=A.p(y.X),v,u,t,s,r,q
var $async$ayB=A.l(function(j,k){if(j===1)return A.m(k,w)
for(;;)switch(x){case 0:r={}
q=g.a
q=A.bs(A.aS(q),A.bb(q),A.bV(q),0,0,0,0)
u=g.b
u=A.bs(A.aS(u),A.bb(u),A.bV(u),0,0,0,0)
f=A.bs(A.aS(f),A.bb(f),A.bV(f),0,0,0,0)
h=A.bs(A.aS(h),A.bb(h),A.bV(h),0,0,0,0)
t=new A.aT(Date.now(),0,!1)
s=new B.NA(new A.m_(q,u,y.S.i("m_<DZ.T>")),f,h,A.bs(A.aS(t),A.bb(t),A.bV(t),0,0,0,0),C.e3,null,null,null,null,null,null,null,null,null,null,null,C.fi,null,null,null,C.CA,null)
r.a=s
r.a=A.bNW(s,e,i)
v=A.eq(null,null,!0,null,new B.bD9(r,d),e,null,!0,!1,y.T)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$ayB,w)},
bS9(d,e,f,g){var x
if(f==null)x=d.gbA()
else x=g==null||A.aS(f)===A.aS(g)?d.XE(f):d.XD(f)
return x},
bS8(d,e,f,g,h){var x
if(g==null)x=d.gbz()
else x=f!=null&&A.aS(f)===A.aS(g)&&A.aS(f)===A.aS(h)?d.XE(g):d.XD(g)
return x},
bD9:function bD9(d,e){this.a=d
this.b=e},
NA:function NA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
Wf:function Wf(d,e,f,g,h,i,j,k){var _=this
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
bcj:function bcj(d){this.a=d},
bci:function bci(d){this.a=d},
bck:function bck(d,e){this.a=d
this.b=e},
bch:function bch(d,e){this.a=d
this.b=e},
bcl:function bcl(d){this.a=d},
akc:function akc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Vp:function Vp(d,e,f,g,h,i,j,k,l,m){var _=this
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
Vq:function Vq(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
b98:function b98(d){this.a=d},
b99:function b99(d){this.a=d},
b9a:function b9a(d,e){this.a=d
this.b=e},
b9b:function b9b(d){this.a=d},
b9c:function b9c(d){this.a=d},
Vr:function Vr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Vs:function Vs(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
b9e:function b9e(d,e){this.a=d
this.b=e},
b9d:function b9d(d,e){this.a=d
this.b=e},
X1:function X1(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
aly:function aly(d){this.a=d},
bnl:function bnl(){},
bnp:function bnp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y_:function Y_(d,e,f,g,h,i,j,k,l,m){var _=this
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
Y0:function Y0(){this.d=$
this.c=this.a=null},
Wk:function Wk(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alz:function alz(d){this.d=d
this.c=this.a=null},
bcx:function bcx(d,e){this.a=d
this.b=e},
bcy:function bcy(d){this.a=d},
bcz:function bcz(d,e,f){this.a=d
this.b=e
this.c=f},
bcs:function bcs(){},
bct:function bct(){},
bcw:function bcw(d,e){this.a=d
this.b=e},
bcr:function bcr(d,e){this.a=d
this.b=e},
bcu:function bcu(){},
bcv:function bcv(d){this.a=d},
Jq:function Jq(d,e){this.a=d
this.b=e},
Xl:function Xl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aow:function aow(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bjI:function bjI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
XB:function XB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bjL:function bjL(d,e,f){this.a=d
this.b=e
this.c=f},
bjK:function bjK(d,e){this.a=d
this.b=e},
bjJ:function bjJ(d,e){this.a=d
this.b=e},
byz:function byz(){},
a0M:function a0M(){},
b2a:function b2a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKZ(d,e,f,g,h,i,j){var x=null,w=A.aeQ(e,!0,!0,!0),v=e.length
return new A.vG(new B.b2a(f,h,g,d,x),w,x,C.F,!1,x,x,i,x,!0,x,0,x,x,v,C.hI,C.P,x,x,C.m,C.bx,x)},
a6c:function a6c(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bIm(d,e){var x=0,w=A.p(y.H),v,u,t,s,r,q
var $async$bIm=A.l(function(f,g){if(f===1)return A.m(g,w)
for(;;)switch(x){case 0:u=A.a([A.eN(65279)+d],y.s)
t=b.G
s=new t.Blob(u,{type:"text/csv;charset=utf-8"})
r=t.URL.createObjectURL(s)
q=A.aL2()
q.href=r
q.download=e
v=t.document.body
if(v!=null)v.append(q)
q.click()
q.remove()
t.URL.revokeObjectURL(r)
return A.n(null,w)}})
return A.o($async$bIm,w)},
bPA(d,e,f){return new A.Td(new A.Bi(d,e,!0,!0,!0,0,A.bCZ(),null),f)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[7]
B.EF.prototype={}
B.rI.prototype={
L(){return"Geldfluss."+this.b}}
B.m4.prototype={
gbu(){return[B.ox(this.a),B.ox(this.b)]}}
B.rs.prototype={
U(){var x=$.ad()
return new B.Wg(new A.bc(C.ad,x),new A.bc(C.ad,x))}}
B.Wg.prototype={
gow(){var x=this.w
return x===$?this.w=B.aIv():x},
l(){var x=this.x,w=$.ad()
x.S$=w
x.R$=0
x=this.y
x.S$=w
x.R$=0
this.am()},
JB(){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$JB=A.l(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:t=new A.aT(Date.now(),0,!1)
s=v.c
s.toString
x=2
return A.j(B.ayB(null,s,A.bs(A.aS(t)-5,1,1,0,0,0,0),new A.m_(v.gow().a,v.gow().b,y.T),t,C.ef),$async$JB)
case 2:u=e
if(u!=null)v.F(new B.bcp(v,u))
return A.n(null,w)}})
return A.o($async$JB,w)},
BH(){var x=0,w=A.p(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$BH=A.l(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.F(new B.bcm(r))
u=4
l=y.z
f=y.j
x=7
return A.j(r.gbp().az(0,$.bx(),y.F).dB("datev_export_rows",A.a3(["p_from",C.c.a1(r.gow().a.dS(),0,10),"p_to",C.c.a1(r.gow().b.dS(),0,10)],y.N,l),l),$async$BH)
case 7:q=f.a(e)
l=J.cV(q,new B.bcn(),y.i)
k=A.S(l,l.$ti.i("ax.E"))
p=k
l=r.c
if(l==null){s=[1]
x=5
break}if(J.cj(p)===0){l.M(y.q).f.aE(D.aER)
s=[1]
x=5
break}l=r.gow()
j=r.gow()
i=C.c.ah(r.x.a.a)
o=B.ccB(C.c.ah(r.y.a.a),i,l.a,p,j.b)
n="EXTF_Buchungsstapel_"+C.c.a1(r.gow().a.dS(),0,10)+"_"+C.c.a1(r.gow().b.dS(),0,10)+".csv"
x=8
return A.j(B.bIm(o,n),$async$BH)
case 8:l=r.c
if(l==null){s=[1]
x=5
break}l.M(y.q).f.aE(A.bL(null,null,null,null,null,C.m,null,A.d("DATEV-Datei erstellt ("+J.cj(p)+" Buchungen).",null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
g=t.pop()
m=A.a0(g)
l=r.c
if(l==null){s=[1]
x=5
break}l.M(y.q).f.aE(A.bL(null,null,null,null,null,C.m,null,A.d("Export fehlgeschlagen: "+A.e(m),null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.F(new B.bco(r))
x=s.pop()
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$BH,w)},
p(d){var x,w,v,u,t=this,s=null,r=C.aj.dm(0.14),q=A.aq(4),p=A.c5(C.aj.dm(0.5),1),o=y.p
q=A.a8(A.a([D.aa0,A.aD(s,A.a8(A.a([D.ae8,C.c4,A.d("DATEV",s,s,s,s,A.r(C.aj,11,C.r).fo(0.4),s,s,s)],o),C.k,s,C.e,C.I,0,s,s),C.p,s,s,new A.aB(r,s,p,q,s,s,C.B),s,s,s,s,C.lk,s,s,s)],o),C.k,s,C.e,C.i,0,s,s)
p=A.d("Erzeugt eine CSV-Datei im DATEV-Format (EXTF-Buchungsstapel, SKR 03). Enthalten sind die Tageslosungen der App-Verk\xe4ufe je Steuersatz: Kasse (1000) an Erl\xf6se 7 % (8300) bzw. 19 % (8400) \u2014 entsprechend der GoBD-Verfahrensdokumentation. Buchhaltung und Steuererkl\xe4rungen erstellt Gesellschafter Philipp Blume; die Datei l\xe4sst sich direkt in eine DATEV-f\xe4hige Buchhaltungssoftware importieren.",s,s,s,s,A.r(C.l,13,C.j).cH(1.4),s,s,s)
r=t.z?s:t.gaKg()
x=t.gow()
w=$.cI()
r=A.ex(D.afM,A.d("Zeitraum: "+w.a3(x.a)+" \u2013 "+w.a3(t.gow().b),s,s,s,s,s,s,s,s),r,s)
w=A.ck(s,C.a6,!1,s,!0,C.m,s,A.co(),t.x,s,s,s,s,s,2,D.ahj,C.P,!0,s,!0,s,!1,s,C.ab,s,s,s,s,s,C.c7,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.w,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.W,s,C.O,s,s,s,s)
x=A.ck(s,C.a6,!1,s,!0,C.m,s,A.co(),t.y,s,s,s,s,s,2,D.ahs,C.P,!0,s,!0,s,!1,s,C.ab,s,s,s,s,s,C.c7,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.w,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.W,s,C.O,s,s,s,s)
v=t.z?s:t.gaxe()
u=A.dL(C.n,C.h,s,C.es,s,s,s)
return A.d9(D.abn,s,A.cS(A.a([q,C.D,p,C.K,A.aZ(s,A.a1(A.a([r,C.t,w,C.D,x,C.K,A.ft(t.z?D.ZM:D.FM,D.aNU,v,u)],o),C.ac,C.e,C.i),s,s,C.w,s,s,3),C.t,A.d("Hinweis: Bargeld-Entnahmen und Bankbewegungen bucht Philipp Blume weiterhin \xfcber sevDesk/Kontoauszug \u2014 diese Datei deckt bewusst nur die Erl\xf6sseite ab, damit keine Buchungen doppelt entstehen.",s,s,s,s,A.r(C.l,11,C.j).cH(1.35),s,s,s)],o),s,C.w,s,C.F,!1),s,s,s)}}
B.DU.prototype={
p(d){var x=this,w=null,v=x.d,u=x.c,t=B.bB7(v,x.e,u),s=B.bI5(u,t),r=A.r(B.bT0(v,t),x.f,C.C)
return A.d(s,w,w,w,B.cdH(v,t)+" "+$.cx().a3(Math.abs(u)),r,w,w,w)}}
B.mW.prototype={
wo(d,e,f,g,h){return this.b1C(d,e,f,g,h)},
b1C(d,e,f,g,h){var x=0,w=A.p(y.N),v,u=this,t,s,r,q
var $async$wo=A.l(function(i,j){if(i===1)return A.m(j,w)
for(;;)switch(x){case 0:t=u.a
s=y.N
r=y.z
x=3
return A.j(t.dB("request_document_approval",A.a3(["p_document_kind",d,"p_period_from",C.c.a1(e.dS(),0,10),"p_period_to",C.c.a1(f.dS(),0,10),"p_title",h,"p_snapshot",g,"p_draft_path",null],s,r),r),$async$wo)
case 3:q=j
t=t.ax
t===$&&A.b()
r=J.o0(q)
t.fO("approval-notify",A.a3(["approval_id",r.j(q),"phase","requested"],s,s))
v=r.j(q)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$wo,w)},
M0(d,e,f){return this.aU6(d,e,f)},
aU6(d,e,f){var x=0,w=A.p(y.H),v=this,u,t,s
var $async$M0=A.l(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:u=v.a
t=y.N
s=y.z
x=2
return A.j(u.dB("decide_document_approval",A.a3(["p_approval_id",d,"p_decision",f,"p_comment",e],t,s),s),$async$M0)
case 2:u=u.ax
u===$&&A.b()
u.fO("approval-notify",A.a3(["approval_id",d,"phase",f==="approved"?"approved":"rejected"],t,t))
u.fO("document-finalize",A.a3(["approval_id",d],t,t))
return A.n(null,w)}})
return A.o($async$M0,w)},
Hl(d){return this.an4(d)},
an4(d){var x=0,w=A.p(y.u),v,u=this,t
var $async$Hl=A.l(function(e,f){if(e===1)return A.m(f,w)
for(;;)switch(x){case 0:t=u.a.ay
t===$&&A.b()
x=3
return A.j(t.cJ("signed-documents").nO(d,86400),$async$Hl)
case 3:v=f
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$Hl,w)},
zq(d,e){return this.aYM(0,!1)},
aYL(d){return this.zq(0,!1)},
aYM(a8,a9){var x=0,w=A.p(y.D),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$zq=A.l(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:e=s.a
d=y.N
a0=y.z
a1=y.j
a2=y.P
a6=J
a7=a1
x=3
return A.j(e.dB("list_document_approvals",A.a3(["p_mine_only",!1],d,a0),a0),$async$zq)
case 3:a3=a6.ce(a7.a(b1),a2)
a4=C.bL
u=5
x=8
return A.j(e.fe("list_partner_signatures",a0),$async$zq)
case 8:r=b1
a4=J.ce(a1.a(r),a2)
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
for(a0=a3.$ti,a1=new A.b_(a3,a3.gq(0),a0.i("b_<ap.E>")),a0=a0.i("ap.E"),a2=y.H,o=y.a;a1.t();){n=a1.d
if(n==null)n=a0.a(n)
m=J.Q(n)
l=m.h(n,"final_pdf_path")
k=l==null?null:J.ak(l)
l=m.h(n,"status")
j=l==null?null:J.ak(l)
l=m.h(n,"id")
i=l==null?null:J.ak(l)
l=m.h(n,"document_kind")
h=l==null?null:J.ak(l)
m.m(n,"partner_signatures",a4)
m=j==="approved"
if(m&&k!=null&&k.length!==0){l=e.ay
l===$&&A.b()
g=l.c
g===$&&A.b()
f=A.FN(null,null,d,d)
f.H(0,l.b)
p.push(new A.afm(l.a,f,"signed-documents",l.d,g).nO(k,86400).cr(new B.azR(n),a2).iG(new B.azS()))}if(m&&h==="inventory_fifo"&&i!=null&&i.length!==0)p.push(e.cJ("document_approvals").fi(0,"snapshot").hN("id",i).qN().cr(new B.azT(n),o).iG(new B.azU()))}x=p.length!==0?9:10
break
case 9:x=11
return A.j(A.l5(p,a2),$async$zq)
case 11:case 10:v=a3
x=1
break
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$zq,w)}}
B.NA.prototype={
gaeR(){var x=this.f
return A.bs(A.aS(x),A.bb(x),A.bV(x),0,0,0,0)},
U(){var x=null
return new B.Wf(new A.tx(!1,$.ad()),new A.br(x,y.A),new A.br(x,y.t),x,A.B(y.U,y.Z),x,!0,x)}}
B.Wf.prototype={
gl7(){var x=this.d
return x===$?this.d=new A.Zo(this.a.r,$.ad()):x},
grX(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.Hk(x,$.ad())}return w},
gnC(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.Hk(x,$.ad())}return w},
gik(){this.a.toString
return null},
j2(d,e){var x=this
x.jj(x.gl7(),"entry_mode")
x.jj(x.grX(),"selected_start")
x.jj(x.gnC(),"selected_end")
x.jj(x.r,"autovalidate")},
l(){var x=this
x.gl7().l()
x.grX().l()
x.gnC().l()
x.r.l()
x.arQ()},
SZ(){var x,w=this,v=w.gl7(),u=v.y,t=u==null
if((t?A.q(v).i("bt.T").a(u):u)!==C.dL)v=(t?A.q(v).i("bt.T").a(u):u)===C.eP
else v=!0
if(v)if(!w.x.ga4().hW()){w.F(new B.bcj(w))
return}if(w.ga7a()){v=w.grX()
u=v.y
v=u==null?A.q(v).i("bt.T").a(u):u
v.toString
u=w.gnC()
t=u.y
u=t==null?A.q(u).i("bt.T").a(t):t
u.toString
x=new A.m_(v,u,y.T)}else x=null
v=w.c
v.toString
A.aC(v,!1).bq(x)},
SR(){var x=this.c
x.toString
A.aC(x,!1).bq(null)},
SW(){this.F(new B.bci(this))},
IY(d){var x=this.a
if(d.na(x.d)||d.kO(x.e))return!1
return!0},
aEN(d){this.F(new B.bck(this,d))},
aCc(d){this.F(new B.bch(this,d))},
ga7a(){var x=this.grX(),w=x.y
if((w==null?A.q(x).i("bt.T").a(w):w)!=null){x=this.gnC()
w=x.y
x=(w==null?A.q(x).i("bt.T").a(w):w)!=null}else x=!1
return x},
p(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3={}
A.X(b4)
x=y.w
w=A.bB(b4,C.dU,x).w.gj0(0)
v=A.cB(b4,C.aJ,y.y)
v.toString
u=A.ol(b4)
A.X(b4)
t=A.mK(b4)
b3.a=null
s=b1.gl7()
r=s.y
q=r==null
if((q?A.q(s).i("bt.T").a(r):r)!==C.e3)p=(q?A.q(s).i("bt.T").a(r):r)===C.dL
else p=!0
switch(q?A.q(s).i("bt.T").a(r):r){case C.e3:case C.i3:s=b1.a.fr
r=b1.grX()
q=r.y
r=q==null?A.q(r).i("bt.T").a(q):q
q=b1.gnC()
o=q.y
q=o==null?A.q(q).i("bt.T").a(o):o
o=b1.a
n=o.d
m=o.e
l=o.dy
o=o.gaeR()
k=b1.ga7a()?b1.gIL():b2
if(p){j=b1.a.db
j=A.bI(C.jz,b2,b2,b2)
j=A.eK(b2,b2,j,b2,b2,b1.gCf(),C.a0,b2,v.gaW(),b2)}else j=b2
i=b1.a.y
i=v.gbI()
h=b1.a.z
v=v.gaU()
b3.a=new B.akc(r,q,n,m,l,o,b1.ga6W(),b1.ga6C(),k,b1.gIE(),i,v,s,j,b1.w)
g=A.bB(b4,C.mX,x).w.a
f=u.fx
if(f==null){x=t.fx
x.toString
f=x}e=u.fy
if(e==null)e=t.gFT()
d=u.go
if(d==null)d=t.gFU()
a0=u.id
if(a0==null)a0=t.id
a1=C.a0
break
case C.dL:case C.eP:x=b1.a.fr
s=b1.grX()
r=s.y
if(r==null)r=A.q(s).i("bt.T").a(r)
q=b1.gnC()
o=q.y
if(o==null)o=A.q(q).i("bt.T").a(o)
n=b1.a.gaeR()
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
l=A.bP(new A.aa(C.xA,A.a1(A.a([C.cq,new B.XB(s,q,A.bs(A.aS(i),A.bb(i),A.bV(i),0,0,0,0),A.bs(A.aS(h),A.bb(h),A.bV(h),0,0,0,0),b1.ga6W(),b1.ga6C(),a5,a6,a4,a7,a8,a9,b0,!0,a3,k,a2,j,b1.x),C.cq],y.p),C.k,C.e,C.i),b2),l,b2)
if(p){b1.a.toString
s=A.eK(b2,b2,C.yN,b2,b2,b1.gCf(),C.a0,b2,v.gaX(),b2)}else s=b2
b1.a.toString
q=v.gbT()
k=b1.a.w
k=v.gbR()
j=b1.a.z
v=v.gaU()
b3.a=new B.aow(r,o,n,l,b1.gIL(),b1.gIE(),q,k,v,s,x,b2)
if(m)g=C.AS
else g=D.aDC
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
return A.NG(b2,x,A.o6(b2,A.Ag(new A.eC(new B.bcl(b3),b2),1.3),C.p,b2,C.e2,b2,C.Z,s,b2,b2,v),C.bA,b2,f,a1,C.mq,e,a0,d)}}
B.akc.prototype={
p(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.X(a3)
x=A.cB(a3,C.aJ,y.y)
x.toString
w=y.w
v=A.bB(a3,C.dU,w).w.gj0(0)
u=A.ol(a3)
A.X(a3)
t=A.mK(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gFP()
q=u.k2
if(q==null)q=t.gFQ()
p=q.bD(0.38)
o=u.k3
if(o==null)o=t.gFR()
n=u.k4
if(n==null)n=t.gFS()
m=n==null?a2:n.kF(q)
n=a1.ax
l=a1.c
k=a1.d
j=B.bS9(x,n,l,k)
i=B.bS8(x,n,l,k,new A.aT(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.kF(l!=null?q:p)
if(x)g=a2
else g=o.kF(k!=null?q:p)
f=A.qD(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.dM(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.a([],x)
if(v===C.fc&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.cs(A.d(a1.as,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a1.z,a2,f))
d.push(C.ah)
a0=a1.at
x=A.a([A.bP(a2,a2,A.bB(a3,C.w4,w).w.a.a<360?42:72),A.aj(A.bq(a2,a2,a2,A.a1(A.a([A.d(a0,a2,1,C.ai,a2,m,a2,a2,a2),C.D,A.a8(A.a([A.d(j,a2,1,C.ai,a2,h,a2,a2,a2),A.d(" \u2013 ",a2,a2,a2,a2,h,a2,a2,a2),new A.fL(1,C.cd,A.d(i,a2,1,C.ai,a2,g,a2,a2,a2),a2)],x),C.k,a2,C.e,C.i,0,a2,a2),C.K],x),C.x,C.e,C.i),!1,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,C.M,a2),1)],x)
if(v===C.dC&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.aa(C.eS,A.zA(w,e,a2),a2))}x=A.bLh(d,e,r,new A.GO(A.a8(x,C.k,a2,C.e,C.i,0,a2,a2),D.aDp,a2),0,e,new A.MV(C.ZW,a2,a2,a2,C.CY,a2,a1.Q,a2,a2,a2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.bs(A.aS(l),A.bb(l),A.bV(l),0,0,0,0):a2
k=k!=null?A.bs(A.aS(k),A.bb(k),A.bV(k),0,0,0,0):a2
w=A.bs(A.aS(w),A.bb(w),A.bV(w),0,0,0,0)
d=A.bs(A.aS(d),A.bb(d),A.bV(d),0,0,0,0)
return A.iF(!0,A.d9(x,s,new B.Vp(l,k,w,d,a1.r,A.bs(A.aS(a0),A.bb(a0),A.bV(a0),0,0,0,0),a1.x,a1.y,n,a2),a2,a2,a2),!1,!1,C.a0,!1,!1)}}
B.Vp.prototype={
U(){return new B.Vq(new A.br(null,y.A),new A.nG())}}
B.Vq.prototype={
ap(){var x,w,v,u=this
u.aH()
x=A.wJ(0,null,null)
u.x=x
x.ac(0,u.gaMg())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.na(v)&&!w.kO(x.f))u.w=A.a6l(v,w)
u.y=u.w!==0},
l(){var x=this.x
x===$&&A.b()
x.l()
this.am()},
aMh(){var x,w=this,v=w.x
v===$&&A.b()
v=v.gc9(0).at
v.toString
x=C.b.gcC(w.x.f).z
x.toString
if(v<=x)w.F(new B.b98(w))
else{v=w.y
v===$&&A.b()
if(!v)w.F(new B.b99(w))}},
aPR(){var x=this.c
x.toString
switch(A.X(x).w.a){case 0:case 1:A.ON()
break
case 2:case 3:case 4:case 5:break}},
aPq(d){this.aPR()
this.F(new B.b9a(this,d))},
a3o(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.bs(A.aS(u),A.bb(u)+t,1,0,0,0,0)
u=v.a
w=u.z
return new B.Y_(v.f,v.r,u.w,v.gaPp(),u.e,u.f,x,u.r,w,null)},
p(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.a([D.aSB],p),n=r.y
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
p=A.a([B.bPA(new B.b9b(r),s,q),B.bPA(new B.b9c(r),A.a6l(w,v)+1-s,t)],p)
o.push(A.aj(new B.Vr(new B.a6c(p,C.F,!1,u,q,q,q,!1,t,0,q,q,q,C.hI,C.P,q,q,C.m,C.bx,r.d),w,v,n,x,q),1))
return A.a1(o,C.k,C.e,C.i)}}
B.Vr.prototype={
U(){return new B.Vs()}}
B.Vs.prototype={
ap(){var x,w,v=this
v.aH()
x=y.k
w=y.c
v.e=A.a3([C.Be,new A.dJ(v.gaCE(),new A.c9(A.a([],x),w),y.M),C.Bf,new A.dJ(v.gaCG(),new A.c9(A.a([],x),w),y.O),C.vP,new A.dJ(v.gaBO(),new A.c9(A.a([],x),w),y.Y)],y.n,y.V)
v.f=A.jA(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.b()
x.l()
this.am()},
aCD(d){this.F(new B.b9e(this,d))},
aCF(d){var x,w=this.f
w===$&&A.b()
w.ij()
w=this.f
x=w.e
x.toString
A.nf(x).ov(w,!0)},
aCH(d){var x,w=this.f
w===$&&A.b()
w.ij()
w=this.f
x=w.e
x.toString
A.nf(x).ov(w,!1)},
aBP(d){this.F(new B.b9d(this,d))},
aHT(d,e){var x,w,v,u=this.c.M(y.I).w
this.a.toString
if(u===C.b7)if(e===C.fS)x=C.hM
else x=e===C.hM?C.fS:e
else x=e
w=C.TS.h(0,x)
w.toString
v=A.bs(A.aS(d),A.bb(d),A.bV(d)+w,0,0,0,0)
w=this.a
if(!v.na(w.d)&&!v.kO(w.e))return v
return null},
p(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.b()
x=t.f
x===$&&A.b()
w=t.a.r
v=x.gda()?t.w:s
u=t.f.gda()?t.r:s
return A.aJg(r,!1,new B.X1(w,v,u,t.a.c,s),!0,x,C.be,t.gaCC(),s,s,C.Tg)}}
B.X1.prototype={
dT(d){return!this.f.vY(this.r,d.r)||this.w!=d.w}}
B.aly.prototype={
aAe(d,e){var x,w=null,v=A.a([],y.p)
for(x=e.gMS();v.length<7;x=(x+1)%7)v.push(new A.jz(!0,new A.hc(C.X,w,w,A.d(e.gYV()[x],w,w,w,w,d,w,w,w),w),w))
return v},
p(d){var x,w=A.X(d),v=w.ok.x.kF(w.ax.k3),u=A.cB(d,C.aJ,y.y)
u.toString
x=this.aAe(v,u)
C.b.hB(x,0,C.aw)
x.push(C.aw)
u=A.bB(d,C.dU,y.w).w.gj0(0)===C.fc?384:480
return new A.dX(new A.aw(0,u,0,42),A.bFm(A.aeQ(x,!0,!1,!0),D.CQ,null,!0),null)}}
B.bnl.prototype={
AB(d){return new B.bnp(9,Math.max((d.w-16)/7,0),8,A.uP(d.x))},
l_(d){return!1}}
B.bnp.prototype={
a03(d){return this.a*C.d.cD(d,50)},
a01(d){return Math.max(0,this.a*C.d.h_(d/50)-1)},
aAc(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
GE(d){var x,w=this,v=w.a,u=C.f.ak(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=C.f.h6(d,v)
x=w.aAc(q,t)
if(t)s=r
return new A.aeV(v*50,x,42,s)},
Wm(d){return 50*(C.f.h6(d-1,this.a)+1)-8}}
B.Y_.prototype={
U(){return new B.Y0()}}
B.Y0.prototype={
ap(){var x,w,v,u,t
this.aH()
x=this.a.x
w=A.NB(A.aS(x),A.bb(x))
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
for(;w<t.length;t.length===x||(0,A.K)(t),++w){v=t[w]
u=v.ax
if(u!=null)u.aI(0)
v.fl()}this.am()},
axi(d){var x,w,v
if(d){x=this.c.M(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=C.ff
break
case 1:case 2:v=C.fe
break
default:v=C.YJ}x=$.au.aG$.d.c.e
x.toString
A.bGy(x,0,v,C.cl,C.Z)}}},
p(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.X(b5),b4=A.cB(b5,C.aJ,y.y)
b4.toString
x=b1.a.x
w=A.aS(x)
v=A.bb(x)
u=A.NB(w,v)
b1.a.toString
t=A.bMo(w,v,b4)
s=C.d.h_((u+t)/7)
x=y.p
r=A.a([],x)
for(q=0-t+1,p=b1.gaxh(),o=y.v;q<=u;++q)if(q<1)r.push(C.lG)
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
j=j.gwf()}r.push(new B.Wk(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.a([],x)
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
m=m.gwf()}m=new A.En(m,!0,C.lG,b2)}else m=C.lG
C.b.hB(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&C.f.ak(m,7)===0
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
m=m.gwf()}m=new A.En(m,!0,C.lG,b2)}else m=C.lG
a5.push(m)}C.b.H(a1,a5)}b0=A.bB(b5,C.dU,y.w).w.gj0(0)===C.fc?384:480
return A.a1(A.a([new A.dX(new A.aw(0,b0,0,1/0).P5(58),new A.aa(C.i6,new A.ec(C.aL,b2,b2,new A.jz(!0,A.d(b4.EQ(b1.a.x),b2,b2,b2,b2,b3.ok.z.kF(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.dX(new A.aw(0,b0,0,s*42+(s-1)*8),A.bFm(A.aeQ(a1,!0,!1,!0),D.CQ,C.iy,!1),b2),C.t],x),C.k,C.e,C.i)}}
B.Wk.prototype={
U(){return new B.alz(A.xb())},
w9(d){return this.e.$1(d)}}
B.alz.prototype={
l(){var x=this.d
x.S$=$.ad()
x.R$=0
this.am()},
p(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.X(a4),a2=a1.ax,a3=A.cB(a4,C.aJ,y.y)
a3.toString
x=A.ol(a4)
A.X(a4)
w=A.mK(a4)
v=a4.M(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new B.bcx(x,w)
q=new B.bcy(r)
p=A.be(y.C)
if(u.w)p.E(0,C.Q)
u=d.a
if(u.y||u.z)p.E(0,C.U)
u=d.d
u.su(0,p)
o=y._
n=q.$1$2(new B.bcs(),p,o)
m=q.$1$2(new B.bct(),p,o)
l=q.$1$2(new B.bcu(),p,y.W)
if(l==null)l=C.e0
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.kF(n)
j=new A.i4(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new B.Xl(t,q.y?D.Bz:D.a00,v,a0)}else{j=a0
i=a0
if(q.Q){k=new B.Xl(t,D.a01,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kF(A.aJ(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kF(A.aJ(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}else if(q.at){s=s==null?a0:s.kF(a2.b)
q=x.CW
if(q==null)q=w.gwu()
j=new A.i4(a0,a0,a0,a0,l.jc(q.cP(a2.b)))}}h=a3.MW(A.bV(d.a.c))
g=d.a.at?", "+a3.gbM():""
f=h+", "+a3.EP(d.a.c)+g
q=d.a
if(q.y)f=a3.aeV(f)
else if(q.z)f=a3.aeU(f)
a3=d.a
q=a3.y||a3.z
e=A.aD(C.X,A.bq(a0,a0,a0,new A.jz(!0,A.d(h,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,C.M,a0),C.p,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.h_(e,a0,a0,k,C.ap)
return!a3.w?A.bFy(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,C.d9,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new B.bcv(d),a0,a0,a0,new A.bv(new B.bcw(d,r),y.b),a0,a0,a0,u):e}}
B.Jq.prototype={
L(){return"_HighlightPainterStyle."+this.b}}
B.Xl.prototype={
aP(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.aTS)return
$.as()
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
B.aow.prototype={
azO(d,e,f,g){var x,w,v,u=A.cB(d,C.aJ,y.y)
u.toString
x=this.as
w=B.bS9(u,x,e,f)
v=B.bS8(u,x,e,f,g)
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
v=A.ol(d)
A.X(d)
u=A.mK(d)
if(w===C.dC){t=v.w
s=t==null?u.gz9():t}else s=A.X(d).ok.f
r=v.r
if(r==null)r=u.gvU()
s=s==null?j:s.cP(r)
t=k.c
q=k.d
p=k.azO(d,t,q,k.e)
o=t!=null&&q!=null?x.MX(t)+" \u2013 "+x.MX(q):""
n=A.bQG(k.Q,k.z,w===C.fc,w,o,s,p)
x=A.cs(A.d(k.y,j,j,j,j,j,j,j,j),j,j,k.w,j,j)
t=y.p
m=new A.dX(C.Cf,new A.aa(C.eS,new A.ec(C.n0,j,j,A.bG0(j,A.a([x,A.cs(A.d(k.x,j,j,j,j,j,j,j,j),j,j,k.r,j,j)],t),C.Uj,C.aZ,0,8),j),j),j)
x=A.b8(d,C.b3)
x=x==null?j:x.gcO()
x=(x==null?C.aQ:x).mP(0,1.3).bh(0,14)
l=C.AS.aB(0,x/14)
switch(w.a){case 0:return A.jD(new B.bjI(k,!0,l,n,m))
case 1:return A.a8(A.a([n,new A.fL(1,C.cd,A.a1(A.a([A.aj(k.f,1),m],t),C.ac,C.e,C.I),j)],t),C.ac,j,C.e,C.I,0,j,j)}}}
B.XB.prototype={
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
w=x.MV(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.b()
t.abO(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.MV(w)
t.e=x
w=t.x
w===$&&A.b()
t.abO(w,x,!1)}},
hW(){var x,w,v,u=this,t={},s=u.acz(u.f)
t.a=s
x=u.acz(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kO(v)){s=u.a.Q
w=u.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
t.a=w.gba()}}u.F(new B.bjL(t,u,x))
return t.a==null&&x==null},
a8N(d){var x=this.c
x.toString
x=A.cB(x,C.aJ,y.y)
x.toString
this.a.toString
return x.Zh(d)},
acz(d){var x,w,v=this
if(d==null){x=v.a.y
w=v.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
return w.gb4()}else if(!v.IY(d)){x=v.a.z
w=v.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
return w.gaY()}return null},
IY(d){var x=this.a
if(d.na(x.e)||d.kO(x.f))return!1
return!0},
abO(d,e,f){var x=d.a.aey(e)
d.jZ(0,f?x.lm(A.dI(C.H,0,e.length,!1)):x)},
aEM(d){var x=this
x.F(new B.bjK(x,d))
if(x.a.CW)x.hW()},
aCb(d){var x=this
x.F(new B.bjJ(x,d))
if(x.a.CW)x.hW()},
p(d){var x,w,v,u,t,s,r,q=this,p=null
A.X(d)
x=A.cB(d,C.aJ,y.y)
x.toString
w=A.vS(d)
v=w.p1
if(v==null)v=C.v1
u=q.w
u===$&&A.b()
t=w.dy
q.a.toString
s=x.gbt()
q.a.toString
r=x.gbA()
u=A.aj(A.ck(p,C.a6,!0,p,!0,C.m,p,A.co(),u,p,p,p,p,p,2,A.fd(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.y,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,s,p,p,p,p,p,p,p,p,r,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.P,!0,p,!0,p,!1,p,C.ab,p,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaEL(),p,p,p,!1,p,p,!1,p,!0,p,C.w,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.W,p,C.O,p,p,p,p),1)
s=q.x
s===$&&A.b()
q.a.toString
r=x.gbt()
q.a.toString
x=x.gbz()
return A.a8(A.a([u,C.ah,A.aj(A.ck(p,C.a6,!1,p,!0,C.m,p,A.co(),s,p,p,p,p,p,2,A.fd(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.z,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,p,p,p,p,p,p,p,p,x,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.P,!0,p,!0,p,!1,p,C.ab,p,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaCa(),p,p,p,!1,p,p,!1,p,!0,p,C.w,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.W,p,C.O,p,p,p,p),1)],y.p),C.x,p,C.e,C.i,0,p,p)}}
B.a0M.prototype={
bc(d){this.bG(d)
this.qr()},
cw(){var x,w,v,u,t=this
t.e1()
x=t.cZ$
w=t.gmp()
v=t.c
v.toString
v=A.qs(v)
t.i7$=v
u=t.oC(v,w)
if(w){t.j2(x,t.fp$)
t.fp$=!1}if(u)if(x!=null)x.l()},
l(){var x,w=this
w.i6$.aF(0,new B.byz())
x=w.cZ$
if(x!=null)x.l()
w.cZ$=null
w.am()}}
B.b2a.prototype={
AB(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.Tc(v,t+x.b,u+w,t,u,A.uP(d.x))},
l_(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
B.a6c.prototype={
adM(d){return this.dx}}
var z=a.updateTypes(["~()","U<~>()","~(aT?)","~(D)","~(i)","rI(rI)","EF(@)","~(aT)","~(mm)","~(mr)","~(jv)"])
B.bAt.prototype={
$1(d){return""+A.aS(d)+C.c.cz(C.f.j(A.bb(d)),2,"0")+C.c.cz(C.f.j(A.bV(d)),2,"0")},
$S:988}
B.bB8.prototype={
$1(d){if(!this.a)return d
return d===D.fz?D.ls:D.fz},
$S:z+5}
B.bcp.prototype={
$0(){var x=this.b
return this.a.w=new B.m4(x.a,x.b)},
$S:0}
B.bcm.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bcn.prototype={
$1(d){var x=A.cn(y.f.a(d),y.N,y.z),w=A.on(J.ak(x.h(0,"booking_date"))),v=A.aX(x.h(0,"tax_rate"))
if(v==null)v=null
if(v==null)v=19
x=A.aX(x.h(0,"gross"))
if(x==null)x=null
return new B.EF(w,v,x==null?0:x)},
$S:z+6}
B.bco.prototype={
$0(){return this.a.z=!1},
$S:0}
B.azR.prototype={
$1(d){J.fD(this.a,"signed_url",d)},
$S:199}
B.azS.prototype={
$1(d){},
$S:27}
B.azT.prototype={
$1(d){var x,w="snapshot"
if(d!=null){x=J.I(d,w)
if(y.f.b(x))J.fD(this.a,w,x)}},
$S:234}
B.azU.prototype={
$1(d){},
$S:27}
B.bD9.prototype={
$1(d){var x=this.b,w=this.a.a
return x==null?w:x.$2(d,w)},
$S:25}
B.bcj.prototype={
$0(){this.a.r.HC(0,!0)},
$S:0}
B.bci.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gl7(),q=r.y
switch(q==null?A.q(r).i("bt.T").a(q):q){case C.e3:s.r.HC(0,!1)
r.su(0,C.dL)
break
case C.dL:q=s.grX()
x=q.y
w=!1
if((x==null?A.q(q).i("bt.T").a(x):x)!=null){x=s.gnC()
v=x.y
u=v==null
if((u?A.q(x).i("bt.T").a(v):v)!=null){w=q.y
if(w==null)w=A.q(q).i("bt.T").a(w)
w.toString
x=u?A.q(x).i("bt.T").a(v):v
x.toString
x=w.kO(x)}else x=w}else x=w
if(x)s.gnC().su(0,t)
x=q.y
w=x==null
if((w?A.q(q).i("bt.T").a(x):x)!=null){if(w)x=A.q(q).i("bt.T").a(x)
x.toString
x=!s.IY(x)}else x=!1
if(x){q.su(0,t)
s.gnC().su(0,t)}else{q=s.gnC()
x=q.y
w=x==null
if((w?A.q(q).i("bt.T").a(x):x)!=null){if(w)x=A.q(q).i("bt.T").a(x)
x.toString
x=!s.IY(x)
s=x}else s=!1
if(s)q.su(0,t)}r.su(0,C.e3)
break
case C.i3:case C.eP:break}},
$S:0}
B.bck.prototype={
$0(){var x=this.b
this.a.grX().su(0,x)
return x},
$S:0}
B.bch.prototype={
$0(){var x=this.b
this.a.gnC().su(0,x)
return x},
$S:0}
B.bcl.prototype={
$1(d){return this.a.a},
$S:25}
B.b98.prototype={
$0(){this.a.y=!1},
$S:0}
B.b99.prototype={
$0(){this.a.y=!0},
$S:0}
B.b9a.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.na(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
B.b9b.prototype={
$2(d,e){return this.a.a3o(d,e,!0)},
$S:95}
B.b9c.prototype={
$2(d,e){return this.a.a3o(d,e,!1)},
$S:95}
B.b9e.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
B.b9d.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.aHT(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
B.bcx.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:164}
B.bcy.prototype={
$1$2(d,e,f){return this.a.$1$1(new B.bcz(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:165}
B.bcz.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.Z(this.b)},
$S(){return this.c.i("0?(i0?)")}}
B.bcs.prototype={
$1(d){var x=d.gyy()
return x},
$S:81}
B.bct.prototype={
$1(d){var x=d.gvs()
return x},
$S:81}
B.bcw.prototype={
$1(d){return this.b.$1$1(new B.bcr(this.a,d),y.G)},
$S:23}
B.bcr.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gFV()
w=x==null?null:x.Z(this.b)}else{x=d.gyz()
w=x==null?null:x.Z(this.b)}return w},
$S:171}
B.bcu.prototype={
$1(d){return d.ax},
$S:172}
B.bcv.prototype={
$0(){var x=this.a.a
return x.w9(x.c)},
$S:0}
B.bjI.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.a([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.aj(x.a.f,1))
v.push(x.e)
return A.a1(v,C.ac,C.e,C.I)},
$S:989}
B.bjL.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
B.bjK.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.a8N(w)
x.f=w
x.a.r.$1(w)},
$S:0}
B.bjJ.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.a8N(w)
x.r=w
x.a.w.$1(w)},
$S:0}
B.byz.prototype={
$2(d,e){if(!d.a)d.T(0,e)},
$S:59};(function aliases(){var x=B.a0M.prototype
x.arQ=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.Wg.prototype,"gaKg","JB",1)
x(v,"gaxe","BH",1)
x(v=B.Wf.prototype,"gIL","SZ",0)
x(v,"gIE","SR",0)
x(v,"gCf","SW",0)
w(v,"ga6W","aEN",2)
w(v,"ga6C","aCc",2)
x(v=B.Vq.prototype,"gaMg","aMh",0)
w(v,"gaPp","aPq",7)
w(v=B.Vs.prototype,"gaCC","aCD",3)
w(v,"gaCE","aCF",8)
w(v,"gaCG","aCH",9)
w(v,"gaBO","aBP",10)
w(B.Y0.prototype,"gaxh","axi",3)
w(v=B.Jv.prototype,"gaEL","aEM",4)
w(v,"gaCa","aCb",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.C,[B.EF,B.mW])
w(A.oi,[B.bAt,B.bB8,B.bcn,B.azR,B.azS,B.azT,B.azU,B.bD9,B.bcl,B.bcx,B.bcy,B.bcz,B.bcs,B.bct,B.bcw,B.bcr,B.bcu])
w(A.J9,[B.rI,B.Jq])
v(B.m4,A.vs)
v(B.rs,A.b7)
v(B.Wg,A.vj)
w(A.yv,[B.bcp,B.bcm,B.bco,B.bcj,B.bci,B.bck,B.bch,B.b98,B.b99,B.b9a,B.b9e,B.b9d,B.bcv,B.bjL,B.bjK,B.bjJ])
w(A.A,[B.DU,B.akc,B.aly,B.aow])
w(A.H,[B.NA,B.Vp,B.Vr,B.Y_,B.Wk,B.XB])
w(A.V,[B.a0M,B.Vq,B.Vs,B.Y0,B.alz,B.Jv])
v(B.Wf,B.a0M)
w(A.yw,[B.b9b,B.b9c,B.bjI,B.byz])
v(B.X1,A.bK)
w(A.aeU,[B.bnl,B.b2a])
v(B.bnp,A.aeW)
v(B.Xl,A.Nw)
v(B.a6c,A.SD)
x(B.a0M,A.lp)})()
A.bxa(b.typeUniverse,JSON.parse('{"rs":{"b7":[],"H":[],"c":[]},"Wg":{"V":["rs"]},"DU":{"A":[],"c":[]},"NA":{"H":[],"c":[]},"Vp":{"H":[],"c":[]},"Vr":{"H":[],"c":[]},"X1":{"bK":[],"bz":[],"c":[]},"Y_":{"H":[],"c":[]},"Wk":{"H":[],"c":[]},"XB":{"H":[],"c":[]},"Jv":{"V":["XB"]},"Wf":{"V":["NA"]},"akc":{"A":[],"c":[]},"Vq":{"V":["Vp"]},"Vs":{"V":["Vr"]},"aly":{"A":[],"c":[]},"Y0":{"V":["Y_"]},"alz":{"V":["Wk"]},"Xl":{"aH":[]},"aow":{"A":[],"c":[]},"a6c":{"A":[],"c":[]}}'))
var y=(function rtii(){var x=A.ay
return{V:x("cl<ch>"),Y:x("dJ<jv>"),M:x("dJ<mm>"),O:x("dJ<mr>"),G:x("F"),v:x("bMm"),T:x("m_<aT>"),i:x("EF"),I:x("jw"),E:x("eJ"),S:x("OL"),R:x("E<U<~>>"),s:x("E<i>"),p:x("E<c>"),k:x("E<~(cl<ch>)>"),A:x("br<V<H>>"),t:x("br<Jv>"),D:x("v<a7<i,@>>"),j:x("v<@>"),P:x("a7<i,@>"),f:x("a7<@,@>"),y:x("aP"),w:x("kl"),a:x("by"),c:x("c9<~(cl<ch>)>"),U:x("f3<C?>"),N:x("i"),F:x("nD"),n:x("jf"),C:x("dl"),Q:x("X1"),q:x("xF"),b:x("bv<F?>"),z:x("@"),_:x("F?"),X:x("m_<aT>?"),W:x("f0?"),u:x("i?"),H:x("~"),Z:x("~()")}})();(function constants(){D.CQ=new B.bnl()
D.h2=new A.a5(62250,"MaterialIcons",null,!1)
D.DP=new B.rs(null)
D.a7R=new A.k9(0,null,null,null)
D.aBm=new A.eP("Schnittstelle","Buchungsstapel f\xfcr die Buchhaltung",null,null)
D.aa0=new A.iA(1,C.cU,D.aBm,null)
D.fz=new B.rI(0,"hinaus")
D.ls=new B.rI(1,"herein")
D.aaZ=new B.rI(2,"weder")
D.aKr=new A.a6("DATEV-Export",null,null,null,null,null,null,null,null,null)
D.abn=new A.dY(D.aKr,null,null)
D.abE=new A.a5(57504,"MaterialIcons",null,!1)
D.lv=new A.a5(57912,"MaterialIcons",null,!1)
D.Fc=new A.a5(59011,"MaterialIcons",null,!1)
D.FD=new A.a5(62584,"MaterialIcons",null,!1)
D.ae8=new A.ar(C.fD,14,C.aj,null,null)
D.FM=new A.ar(C.yx,null,null,null,null)
D.yy=new A.a5(61487,"MaterialIcons",null,!1)
D.F5=new A.a5(57782,"MaterialIcons",null,!1)
D.afM=new A.ar(D.F5,18,null,null,null)
D.ahj=new A.bl(null,null,null,"Beraternummer (optional)",null,null,null,"Nur falls in der Buchhaltungssoftware hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ahs=new A.bl(null,null,null,"Mandantennummer (optional)",null,null,null,"Bleibt sie leer, beim Import in der Software erg\xe4nzen",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.a9I=new A.af(48,48,48,48)
D.iA=new A.aa(D.a9I,C.bG,null)
D.aDp=new A.J(1/0,64)
D.aDC=new A.J(496,164)
D.ZM=new A.cr(18,18,C.nj,null)
D.aLg=new A.a6("Freigabe angefordert.",null,null,null,null,null,null,null,null,null)
D.mD=new A.d6(D.aLg,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aMm=new A.a6("Keine Ums\xe4tze im gew\xe4hlten Zeitraum.",null,null,null,null,null,null,null,null,null)
D.aER=new A.d6(D.aMm,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.ku=new A.a6("Anfordern",null,null,null,null,null,null,null,null,null)
D.mO=new A.a6("Freigabe anfordern",null,null,null,null,null,null,null,null,null)
D.aNU=new A.a6("DATEV-Datei herunterladen",null,null,null,null,null,null,null,null,null)
D.aSB=new B.aly(null)
D.aTS=new B.Jq(0,"none")
D.a00=new B.Jq(1,"highlightLeading")
D.Bz=new B.Jq(2,"highlightTrailing")
D.a01=new B.Jq(3,"highlightAll")})()};
(a=>{a["Uf/JoDjRIazp1BCC8C3IPb8ixTY="]=a.current})($__dart_deferred_initializers__);