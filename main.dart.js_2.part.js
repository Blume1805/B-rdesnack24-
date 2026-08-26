((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
caR(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q="0",p=new A.aW(Date.now(),0,!1),o=C.c.cM(C.e.j(A.be(p)),2,q),n=C.c.cM(C.e.j(A.c_(p)),2,q),m=C.c.cM(C.e.j(A.hJ(p)),2,q),l=C.c.cM(C.e.j(A.AA(p)),2,q),k=C.c.cM(C.e.j(A.acg(p)),2,q),j=new B.byT(),i=e.length===0?q:e,h=d.length===0?q:d,g=y.s,f=A.b([C.b.c6(A.b(['"EXTF"',"700","21",'"Buchungsstapel"',"13",""+A.aV(p)+o+n+m+l+k+"000","",'"BS"','"Boerdesnack24 App"',"",i,h,""+A.aV(a0)+"0101","4",j.$1(a0),j.$1(a2),'"Automatenumsaetze App"',"","1","0","0",'"EUR"'],g),";"),'"Umsatz (ohne Soll/Haben-Kz)";"Soll/Haben-Kennzeichen";"WKZ Umsatz";"Kurs";"Basis-Umsatz";"WKZ Basis-Umsatz";"Konto";"Gegenkonto (ohne BU-Schl\xfcssel)";"BU-Schl\xfcssel";"Belegdatum";"Belegfeld 1";"Belegfeld 2";"Skonto";"Buchungstext"'],g)
for(o=a1.length,x=0;x<a1.length;a1.length===o||(0,A.J)(a1),++x){w=a1[x]
v=w.b<10
u=v?"8300":"8400"
n=w.a
m=C.c.cM(C.e.j(A.c_(n)),2,q)
l=C.c.cM(C.e.j(A.be(n)),2,q)
k=A.f(j.$1(n))
i=v?"7":"19"
h=v?"7":"19"
t=C.c.cM(C.e.j(A.c_(n)),2,q)
s=C.c.cM(C.e.j(A.be(n)),2,q)
r=C.d.aa(w.c,2)
f.push(C.b.c6(A.b([A.ag(r,".",","),'"S"','"EUR"',"","","","1000",u,"",m+l,'"'+("TL"+k+"-"+i)+'"',"","",'"'+("Tageslosung App-Verkaeufe "+h+" % "+t+"."+s+"."+A.aV(n))+'"'],g),";"))}return C.b.c6(f,"\r\n")},
Ex:function Ex(d,e,f){this.a=d
this.b=e
this.c=f},
byT:function byT(){},
bzw(d,e,f){var x,w=new B.bzx(f<0)
if(d==="expense")return w.$1(D.fw)
if(d==="revenue")return w.$1(D.lo)
x=A.ih(C.c.au(e),null)
if(x!=null&&x>=1800&&x<=1999)return w.$1(C.e.ai(x,100)>=90?D.lo:D.fw)
return D.aaP},
bHf(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rE:function rE(d,e){this.a=d
this.b=e},
bzx:function bzx(d){this.a=d},
aHZ(){var x=new A.aW(Date.now(),0,!1)
return new B.m0(A.bv(A.aV(x),A.be(x),1,0,0,0,0),A.bv(A.aV(x),A.be(x)+1,0,0,0,0,0))},
ou(d){return C.c.cM(C.e.j(A.aV(d)),4,"0")+"-"+C.c.cM(C.e.j(A.be(d)),2,"0")+"-"+C.c.cM(C.e.j(A.c_(d)),2,"0")},
m0:function m0(d,e){this.a=d
this.b=e},
ro:function ro(d){this.a=d},
W2:function W2(d,e){var _=this
_.w=$
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bbL:function bbL(d,e){this.a=d
this.b=e},
bbI:function bbI(d){this.a=d},
bbJ:function bbJ(){},
bbK:function bbK(d){this.a=d},
bGs(d,e){var x=$.cA().a4(Math.abs(d))
return e===D.fw?"-"+x:x},
bRi(d,e){var x
if(e===D.fw)return d==="revenue"||d==="expense"?C.Q:C.l
if(e===D.lo)x=d==="revenue"||d==="expense"
else x=!1
if(x)return C.am
return C.l},
cbX(d,e){if(d==="expense")return e===D.fw?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fw?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fw)return"Privatentnahme"
if(e===D.lo)return"Privateinlage"
return B.bHf(d)},
DM:function DM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
mS:function mS(d){this.a=d},
azj:function azj(d){this.a=d},
azk:function azk(){},
azl:function azl(d){this.a=d},
azm:function azm(){},
ay3(d,e,f,g,h,i){return B.ce_(d,e,f,g,h,i)},
ce_(d,e,f,g,h,i){var x=0,w=A.q(y.X),v,u,t,s,r,q
var $async$ay3=A.m(function(j,k){if(j===1)return A.n(k,w)
for(;;)switch(x){case 0:r={}
q=g.a
q=A.bv(A.aV(q),A.be(q),A.c_(q),0,0,0,0)
u=g.b
u=A.bv(A.aV(u),A.be(u),A.c_(u),0,0,0,0)
f=A.bv(A.aV(f),A.be(f),A.c_(f),0,0,0,0)
h=A.bv(A.aV(h),A.be(h),A.c_(h),0,0,0,0)
t=new A.aW(Date.now(),0,!1)
s=new B.Np(new A.lW(q,u,y.S.i("lW<DR.T>")),f,h,A.bv(A.aV(t),A.be(t),A.c_(t),0,0,0,0),C.e2,null,null,null,null,null,null,null,null,null,null,null,C.fg,null,null,null,C.Cq,null)
r.a=s
r.a=A.bMf(s,e,i)
v=A.f4(null,null,!0,null,new B.bBx(r,d),e,null,!0,!1,y.T)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$ay3,w)},
bQu(d,e,f,g){var x
if(f==null)x=d.gbz()
else x=g==null||A.aV(f)===A.aV(g)?d.Xg(f):d.Xf(f)
return x},
bQt(d,e,f,g,h){var x
if(g==null)x=d.gbx()
else x=f!=null&&A.aV(f)===A.aV(g)&&A.aV(f)===A.aV(h)?d.Xg(g):d.Xf(g)
return x},
bBx:function bBx(d,e){this.a=d
this.b=e},
Np:function Np(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
W1:function W1(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.cZ$=g
_.i6$=h
_.oY$=i
_.fn$=j
_.i7$=k
_.c=_.a=null},
bbF:function bbF(d){this.a=d},
bbE:function bbE(d){this.a=d},
bbG:function bbG(d,e){this.a=d
this.b=e},
bbD:function bbD(d,e){this.a=d
this.b=e},
bbH:function bbH(d){this.a=d},
ajR:function ajR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Vb:function Vb(d,e,f,g,h,i,j,k,l,m){var _=this
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
Vc:function Vc(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
b8u:function b8u(d){this.a=d},
b8v:function b8v(d){this.a=d},
b8w:function b8w(d,e){this.a=d
this.b=e},
b8x:function b8x(d){this.a=d},
b8y:function b8y(d){this.a=d},
Vd:function Vd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Ve:function Ve(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
b8A:function b8A(d,e){this.a=d
this.b=e},
b8z:function b8z(d,e){this.a=d
this.b=e},
WN:function WN(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
alb:function alb(d){this.a=d},
bmi:function bmi(){},
bmm:function bmm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XM:function XM(d,e,f,g,h,i,j,k,l,m){var _=this
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
XN:function XN(){this.d=$
this.c=this.a=null},
W5:function W5(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alc:function alc(d){this.d=d
this.c=this.a=null},
bbS:function bbS(d,e){this.a=d
this.b=e},
bbT:function bbT(d){this.a=d},
bbU:function bbU(d,e,f){this.a=d
this.b=e
this.c=f},
bbN:function bbN(){},
bbO:function bbO(){},
bbR:function bbR(d,e){this.a=d
this.b=e},
bbM:function bbM(d,e){this.a=d
this.b=e},
bbP:function bbP(){},
bbQ:function bbQ(d){this.a=d},
Jj:function Jj(d,e){this.a=d
this.b=e},
X6:function X6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ao7:function ao7(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
biH:function biH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Xm:function Xm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Jo:function Jo(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
biK:function biK(d,e,f){this.a=d
this.b=e
this.c=f},
biJ:function biJ(d,e){this.a=d
this.b=e},
biI:function biI(d,e){this.a=d
this.b=e},
bx_:function bx_(){},
a0x:function a0x(){},
b1w:function b1w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKs(d,e,f,g,h,i,j){var x=null,w=A.aex(e,!0,!0,!0),v=e.length
return new A.vA(new B.b1w(f,h,g,d,x),w,x,C.G,!1,x,x,i,x,!0,x,0,x,x,v,C.hG,C.T,x,x,C.o,C.br,x)},
a5Y:function a5Y(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bGJ(d,e){var x=0,w=A.q(y.H),v,u,t,s,r,q
var $async$bGJ=A.m(function(f,g){if(f===1)return A.n(g,w)
for(;;)switch(x){case 0:u=A.b([A.eK(65279)+d],y.s)
t=b.G
s=new t.Blob(u,{type:"text/csv;charset=utf-8"})
r=t.URL.createObjectURL(s)
q=A.aKw()
q.href=r
q.download=e
v=t.document.body
if(v!=null)v.append(q)
q.click()
q.remove()
t.URL.revokeObjectURL(r)
return A.o(null,w)}})
return A.p($async$bGJ,w)},
bNU(d,e,f){return new A.T0(new A.Bd(d,e,!0,!0,!0,0,A.bBm(),null),f)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[7]
B.Ex.prototype={}
B.rE.prototype={
L(){return"Geldfluss."+this.b}}
B.m0.prototype={
gbt(){return[B.ou(this.a),B.ou(this.b)]}}
B.ro.prototype={
U(){var x=$.ah()
return new B.W2(new A.bg(C.aa,x),new A.bg(C.aa,x))}}
B.W2.prototype={
gou(){var x=this.w
return x===$?this.w=B.aHZ():x},
l(){var x=this.x,w=$.ah()
x.S$=w
x.R$=0
x=this.y
x.S$=w
x.R$=0
this.am()},
Jn(){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$Jn=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:t=new A.aW(Date.now(),0,!1)
s=v.c
s.toString
x=2
return A.k(B.ay3(null,s,A.bv(A.aV(t)-5,1,1,0,0,0,0),new A.lW(v.gou().a,v.gou().b,y.T),t,C.ee),$async$Jn)
case 2:u=e
if(u!=null)v.G(new B.bbL(v,u))
return A.o(null,w)}})
return A.p($async$Jn,w)},
BD(){var x=0,w=A.q(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$BD=A.m(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.G(new B.bbI(r))
u=4
l=y.z
f=y.j
x=7
return A.k(r.gbq().aw(0,$.bA(),y.F).dJ("datev_export_rows",A.a4(["p_from",C.c.a1(r.gou().a.dR(),0,10),"p_to",C.c.a1(r.gou().b.dR(),0,10)],y.N,l),l),$async$BD)
case 7:q=f.a(e)
l=J.cT(q,new B.bbJ(),y.i)
k=A.Q(l,l.$ti.i("ax.E"))
p=k
l=r.c
if(l==null){s=[1]
x=5
break}if(J.cf(p)===0){l.N(y.q).f.aG(D.aE4)
s=[1]
x=5
break}l=r.gou()
j=r.gou()
i=C.c.au(r.x.a.a)
o=B.caR(C.c.au(r.y.a.a),i,l.a,p,j.b)
n="EXTF_Buchungsstapel_"+C.c.a1(r.gou().a.dR(),0,10)+"_"+C.c.a1(r.gou().b.dR(),0,10)+".csv"
x=8
return A.k(B.bGJ(o,n),$async$BD)
case 8:l=r.c
if(l==null){s=[1]
x=5
break}l.N(y.q).f.aG(A.bO(null,null,null,null,null,C.o,null,A.d("DATEV-Datei erstellt ("+J.cf(p)+" Buchungen).",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
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
if(r.c!=null)r.G(new B.bbK(r))
x=s.pop()
break
case 6:case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$BD,w)},
p(d){var x,w,v,u,t=this,s=null,r=C.am.dG(0.14),q=A.ar(4),p=A.c5(C.am.dG(0.5),1),o=y.p
q=A.a9(A.b([D.a9R,A.aD(s,A.a9(A.b([D.adS,C.c4,A.d("DATEV",s,s,s,s,A.t(C.am,11,C.r).fm(0.4),s,s,s)],o),C.k,s,C.f,C.H,0,s,s),C.p,s,s,new A.aB(r,s,p,q,s,s,C.B),s,s,s,s,C.lg,s,s,s)],o),C.k,s,C.f,C.i,0,s,s)
p=A.d("Erzeugt eine CSV-Datei im DATEV-Format (EXTF-Buchungsstapel, SKR 03). Enthalten sind die Tageslosungen der App-Verk\xe4ufe je Steuersatz: Kasse (1000) an Erl\xf6se 7 % (8300) bzw. 19 % (8400) \u2014 entsprechend der GoBD-Verfahrensdokumentation. Buchhaltung und Steuererkl\xe4rungen erstellt Gesellschafter Philipp Blume; die Datei l\xe4sst sich direkt in eine DATEV-f\xe4hige Buchhaltungssoftware importieren.",s,s,s,s,A.t(C.l,13,C.j).cC(1.4),s,s,s)
r=t.z?s:t.gaJH()
x=t.gou()
w=$.cQ()
r=A.ev(D.afo,A.d("Zeitraum: "+w.a4(x.a)+" \u2013 "+w.a4(t.gou().b),s,s,s,s,s,s,s,s),r,s)
w=A.cG(s,C.ae,!1,s,!0,C.o,s,A.cM(),t.x,s,s,s,s,s,2,D.agS,C.T,!0,s,!0,s,!1,s,C.ah,s,s,s,s,C.cN,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.y,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.S,s,s,s,s)
x=A.cG(s,C.ae,!1,s,!0,C.o,s,A.cM(),t.y,s,s,s,s,s,2,D.ah1,C.T,!0,s,!0,s,!1,s,C.ah,s,s,s,s,C.cN,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.y,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.S,s,s,s,s)
v=t.z?s:t.gawK()
u=A.dL(C.n,C.h,s,C.es,s,s,s)
return A.d7(D.abd,s,A.d4(A.b([q,C.E,p,C.L,A.b5(s,A.a3(A.b([r,C.t,w,C.E,x,C.L,A.fq(t.z?D.ZH:D.FH,D.aMT,v,u)],o),C.ab,C.f,C.i),s,s,C.y,s,s,3),C.t,A.d("Hinweis: Bargeld-Entnahmen und Bankbewegungen bucht Philipp Blume weiterhin \xfcber sevDesk/Kontoauszug \u2014 diese Datei deckt bewusst nur die Erl\xf6sseite ab, damit keine Buchungen doppelt entstehen.",s,s,s,s,A.t(C.l,11,C.j).cC(1.35),s,s,s)],o),s,C.y,s,C.G,!1),s,s,s)}}
B.DM.prototype={
p(d){var x=this,w=null,v=x.d,u=x.c,t=B.bzw(v,x.e,u),s=B.bGs(u,t),r=A.t(B.bRi(v,t),x.f,C.C)
return A.d(s,w,w,w,B.cbX(v,t)+" "+$.cA().a4(Math.abs(u)),r,w,w,w)}}
B.mS.prototype={
wj(d,e,f,g,h){return this.b0X(d,e,f,g,h)},
b0X(d,e,f,g,h){var x=0,w=A.q(y.N),v,u=this,t,s,r,q
var $async$wj=A.m(function(i,j){if(i===1)return A.n(j,w)
for(;;)switch(x){case 0:t=u.a
s=y.N
r=y.z
x=3
return A.k(t.dJ("request_document_approval",A.a4(["p_document_kind",d,"p_period_from",C.c.a1(e.dR(),0,10),"p_period_to",C.c.a1(f.dR(),0,10),"p_title",h,"p_snapshot",g,"p_draft_path",null],s,r),r),$async$wj)
case 3:q=j
t=t.ax
t===$&&A.a()
r=J.nX(q)
t.fN("approval-notify",A.a4(["approval_id",r.j(q),"phase","requested"],s,s))
v=r.j(q)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$wj,w)},
LM(d,e,f){return this.aTr(d,e,f)},
aTr(d,e,f){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$LM=A.m(function(g,h){if(g===1)return A.n(h,w)
for(;;)switch(x){case 0:u=v.a
t=y.N
s=y.z
x=2
return A.k(u.dJ("decide_document_approval",A.a4(["p_approval_id",d,"p_decision",f,"p_comment",e],t,s),s),$async$LM)
case 2:u=u.ax
u===$&&A.a()
u.fN("approval-notify",A.a4(["approval_id",d,"phase",f==="approved"?"approved":"rejected"],t,t))
u.fN("document-finalize",A.a4(["approval_id",d],t,t))
return A.o(null,w)}})
return A.p($async$LM,w)},
Ha(d){return this.amB(d)},
amB(d){var x=0,w=A.q(y.u),v,u=this,t
var $async$Ha=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:t=u.a.ay
t===$&&A.a()
x=3
return A.k(t.cP("signed-documents").nM(d,86400),$async$Ha)
case 3:v=f
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$Ha,w)},
zm(d,e){return this.aY6(0,!1)},
aY5(d){return this.zm(0,!1)},
aY6(a8,a9){var x=0,w=A.q(y.D),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$zm=A.m(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:e=s.a
d=y.N
a0=y.z
a1=y.j
a2=y.P
a6=J
a7=a1
x=3
return A.k(e.dJ("list_document_approvals",A.a4(["p_mine_only",!1],d,a0),a0),$async$zm)
case 3:a3=a6.cl(a7.a(b1),a2)
a4=C.bU
u=5
x=8
return A.k(e.fd("list_partner_signatures",a0),$async$zm)
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
f=A.FG(null,null,d,d)
f.H(0,l.b)
p.push(new A.af3(l.a,f,"signed-documents",l.d,g).nM(k,86400).cr(new B.azj(n),a2).iG(new B.azk()))}if(m&&h==="inventory_fifo"&&i!=null&&i.length!==0)p.push(e.cP("document_approvals").fU(0,"snapshot").i3("id",i).tD().cr(new B.azl(n),o).iG(new B.azm()))}x=p.length!==0?9:10
break
case 9:x=11
return A.k(A.l0(p,a2),$async$zm)
case 11:case 10:v=a3
x=1
break
case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$zm,w)}}
B.Np.prototype={
gaem(){var x=this.f
return A.bv(A.aV(x),A.be(x),A.c_(x),0,0,0,0)},
U(){var x=null
return new B.W1(new A.tv(!1,$.ah()),new A.bp(x,y.A),new A.bp(x,y.t),x,A.B(y.U,y.Z),x,!0,x)}}
B.W1.prototype={
gl7(){var x=this.d
return x===$?this.d=new A.Za(this.a.r,$.ah()):x},
grQ(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.Hd(x,$.ah())}return w},
gnz(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.Hd(x,$.ah())}return w},
gik(){this.a.toString
return null},
j2(d,e){var x=this
x.jj(x.gl7(),"entry_mode")
x.jj(x.grQ(),"selected_start")
x.jj(x.gnz(),"selected_end")
x.jj(x.r,"autovalidate")},
l(){var x=this
x.gl7().l()
x.grQ().l()
x.gnz().l()
x.r.l()
x.arm()},
SG(){var x,w=this,v=w.gl7(),u=v.y,t=u==null
if((t?A.l(v).i("bq.T").a(u):u)!==C.dI)v=(t?A.l(v).i("bq.T").a(u):u)===C.eO
else v=!0
if(v)if(!w.x.ga3().hU()){w.G(new B.bbF(w))
return}if(w.ga6K()){v=w.grQ()
u=v.y
v=u==null?A.l(v).i("bq.T").a(u):u
v.toString
u=w.gnz()
t=u.y
u=t==null?A.l(u).i("bq.T").a(t):t
u.toString
x=new A.lW(v,u,y.T)}else x=null
v=w.c
v.toString
A.aI(v,!1).c8(x)},
Sy(){var x=this.c
x.toString
A.aI(x,!1).c8(null)},
SD(){this.G(new B.bbE(this))},
IK(d){var x=this.a
if(d.n6(x.d)||d.kO(x.e))return!1
return!0},
aEe(d){this.G(new B.bbG(this,d))},
aBE(d){this.G(new B.bbD(this,d))},
ga6K(){var x=this.grQ(),w=x.y
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
if((q?A.l(s).i("bq.T").a(r):r)!==C.e2)p=(q?A.l(s).i("bq.T").a(r):r)===C.dI
else p=!0
switch(q?A.l(s).i("bq.T").a(r):r){case C.e2:case C.i1:s=b1.a.fr
r=b1.grQ()
q=r.y
r=q==null?A.l(r).i("bq.T").a(q):q
q=b1.gnz()
o=q.y
q=o==null?A.l(q).i("bq.T").a(o):o
o=b1.a
n=o.d
m=o.e
l=o.dy
o=o.gaem()
k=b1.ga6K()?b1.gIx():b2
if(p){j=b1.a.db
j=A.bN(C.lt,b2,b2,b2)
j=A.eW(b2,b2,j,b2,b2,b1.gCa(),C.a1,b2,v.gaW(),b2)}else j=b2
i=b1.a.y
i=v.gbG()
h=b1.a.z
v=v.gaU()
b3.a=new B.ajR(r,q,n,m,l,o,b1.ga6v(),b1.ga6b(),k,b1.gIq(),i,v,s,j,b1.w)
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
a1=C.a1
break
case C.dI:case C.eO:x=b1.a.fr
s=b1.grQ()
r=s.y
if(r==null)r=A.l(s).i("bq.T").a(r)
q=b1.gnz()
o=q.y
if(o==null)o=A.l(q).i("bq.T").a(o)
n=b1.a.gaem()
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
s=s==null?b2:A.bv(A.aV(s),A.be(s),A.c_(s),0,0,0,0)
q=q==null?b2:A.bv(A.aV(q),A.be(q),A.c_(q),0,0,0,0)
l=A.bQ(new A.ab(C.xu,A.a3(A.b([C.cL,new B.Xm(s,q,A.bv(A.aV(i),A.be(i),A.c_(i),0,0,0,0),A.bv(A.aV(h),A.be(h),A.c_(h),0,0,0,0),b1.ga6v(),b1.ga6b(),a5,a6,a4,a7,a8,a9,b0,!0,a3,k,a2,j,b1.x),C.cL],y.p),C.k,C.f,C.i),b2),l,b2)
if(p){b1.a.toString
s=A.eW(b2,b2,C.yF,b2,b2,b1.gCa(),C.a1,b2,v.gaX(),b2)}else s=b2
b1.a.toString
q=v.gbQ()
k=b1.a.w
k=v.gbP()
j=b1.a.z
v=v.gaU()
b3.a=new B.ao7(r,o,n,l,b1.gIx(),b1.gIq(),q,k,v,s,x,b2)
if(m)g=C.AJ
else g=D.aCV
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
return A.a6o(b2,x,A.o3(b2,A.Ab(new A.eB(new B.bbH(b3),b2),1.3),C.p,b2,C.e1,b2,C.Y,s,b2,b2,v),C.bv,b2,f,a1,C.vl,e,a0,d)}}
B.ajR.prototype={
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
j=B.bQu(x,n,l,k)
i=B.bQt(x,n,l,k,new A.aW(Date.now(),0,!1))
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
d.push(a0)}d.push(A.cO(A.d(a1.as,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a1.z,a2,f))
d.push(C.ak)
a0=a1.at
x=A.b([A.bQ(a2,a2,A.bE(a3,C.w_,w).w.a.a<360?42:72),A.an(A.br(a2,a2,a2,A.a3(A.b([A.d(a0,a2,1,C.ag,a2,m,a2,a2,a2),C.E,A.a9(A.b([A.d(j,a2,1,C.ag,a2,h,a2,a2,a2),A.d(" \u2013 ",a2,a2,a2,a2,h,a2,a2,a2),new A.hc(1,C.cu,A.d(i,a2,1,C.ag,a2,g,a2,a2,a2),a2)],x),C.k,a2,C.f,C.i,0,a2,a2),C.L],x),C.x,C.f,C.i),!1,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,C.N,a2),1)],x)
if(v===C.dA&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.ab(C.eR,A.zv(w,e,a2),a2))}x=A.bJC(d,e,r,new A.GH(A.a9(x,C.k,a2,C.f,C.i,0,a2,a2),D.aCI,a2),0,e,new A.MK(C.ZR,a2,a2,a2,C.CO,a2,a1.Q,a2,a2,a2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.bv(A.aV(l),A.be(l),A.c_(l),0,0,0,0):a2
k=k!=null?A.bv(A.aV(k),A.be(k),A.c_(k),0,0,0,0):a2
w=A.bv(A.aV(w),A.be(w),A.c_(w),0,0,0,0)
d=A.bv(A.aV(d),A.be(d),A.c_(d),0,0,0,0)
return A.jM(!0,A.d7(x,s,new B.Vb(l,k,w,d,a1.r,A.bv(A.aV(a0),A.be(a0),A.c_(a0),0,0,0,0),a1.x,a1.y,n,a2),a2,a2,a2),!1,!1,C.a1,!1,!1)}}
B.Vb.prototype={
U(){return new B.Vc(new A.bp(null,y.A),new A.nC())}}
B.Vc.prototype={
ap(){var x,w,v,u=this
u.aF()
x=A.wD(0,null,null)
u.x=x
x.ab(0,u.gaLG())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.n6(v)&&!w.kO(x.f))u.w=A.a66(v,w)
u.y=u.w!==0},
l(){var x=this.x
x===$&&A.a()
x.l()
this.am()},
aLH(){var x,w=this,v=w.x
v===$&&A.a()
v=v.gc9(0).at
v.toString
x=C.b.gcz(w.x.f).z
x.toString
if(v<=x)w.G(new B.b8u(w))
else{v=w.y
v===$&&A.a()
if(!v)w.G(new B.b8v(w))}},
aPb(){var x=this.c
x.toString
switch(A.W(x).w.a){case 0:case 1:A.OB()
break
case 2:case 3:case 4:case 5:break}},
aON(d){this.aPb()
this.G(new B.b8w(this,d))},
a3_(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.bv(A.aV(u),A.be(u)+t,1,0,0,0,0)
u=v.a
w=u.z
return new B.XM(v.f,v.r,u.w,v.gaOM(),u.e,u.f,x,u.r,w,null)},
p(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.b([D.aRk],p),n=r.y
n===$&&A.a()
if(n)o.push(D.a7K)
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
p=A.b([B.bNU(new B.b8x(r),s,q),B.bNU(new B.b8y(r),A.a66(w,v)+1-s,t)],p)
o.push(A.an(new B.Vd(new B.a5Y(p,C.G,!1,u,q,q,q,!1,t,0,q,q,q,C.hG,C.T,q,q,C.o,C.br,r.d),w,v,n,x,q),1))
return A.a3(o,C.k,C.f,C.i)}}
B.Vd.prototype={
U(){return new B.Ve()}}
B.Ve.prototype={
ap(){var x,w,v=this
v.aF()
x=y.k
w=y.c
v.e=A.a4([C.B4,new A.dJ(v.gaC5(),new A.c7(A.b([],x),w),y.M),C.B5,new A.dJ(v.gaC7(),new A.c7(A.b([],x),w),y.O),C.vK,new A.dJ(v.gaBf(),new A.c7(A.b([],x),w),y.Y)],y.n,y.V)
v.f=A.jx(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.a()
x.l()
this.am()},
aC4(d){this.G(new B.b8A(this,d))},
aC6(d){var x,w=this.f
w===$&&A.a()
w.ij()
w=this.f
x=w.e
x.toString
A.nb(x).ot(w,!0)},
aC8(d){var x,w=this.f
w===$&&A.a()
w.ij()
w=this.f
x=w.e
x.toString
A.nb(x).ot(w,!1)},
aBg(d){this.G(new B.b8z(this,d))},
aHj(d,e){var x,w,v,u=this.c.N(y.I).w
this.a.toString
if(u===C.b6)if(e===C.fP)x=C.hK
else x=e===C.hK?C.fP:e
else x=e
w=C.TM.h(0,x)
w.toString
v=A.bv(A.aV(d),A.be(d),A.c_(d)+w,0,0,0,0)
w=this.a
if(!v.n6(w.d)&&!v.kO(w.e))return v
return null},
p(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.a()
x=t.f
x===$&&A.a()
w=t.a.r
v=x.gda()?t.w:s
u=t.f.gda()?t.r:s
return A.aIK(r,!1,new B.WN(w,v,u,t.a.c,s),!0,x,C.bc,t.gaC3(),s,s,C.Ta)}}
B.WN.prototype={
dS(d){return!this.f.vT(this.r,d.r)||this.w!=d.w}}
B.alb.prototype={
azG(d,e){var x,w=null,v=A.b([],y.p)
for(x=e.gMD();v.length<7;x=(x+1)%7)v.push(new A.jw(!0,new A.h8(C.W,w,w,A.d(e.gYx()[x],w,w,w,w,d,w,w,w),w),w))
return v},
p(d){var x,w=A.W(d),v=w.ok.x.kE(w.ax.k3),u=A.cC(d,C.aJ,y.y)
u.toString
x=this.azG(v,u)
C.b.hB(x,0,C.at)
x.push(C.at)
u=A.bE(d,C.dT,y.w).w.gj0(0)===C.fa?384:480
return new A.dX(new A.aw(0,u,0,42),A.bDL(A.aex(x,!0,!1,!0),D.CG,null,!0),null)}}
B.bmi.prototype={
Ax(d){return new B.bmm(9,Math.max((d.w-16)/7,0),8,A.uK(d.x))},
l_(d){return!1}}
B.bmm.prototype={
a_G(d){return this.a*C.d.cA(d,50)},
a_E(d){return Math.max(0,this.a*C.d.hb(d/50)-1)},
azE(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Gt(d){var x,w=this,v=w.a,u=C.e.ai(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=C.e.h4(d,v)
x=w.azE(q,t)
if(t)s=r
return new A.aeC(v*50,x,42,s)},
W_(d){return 50*(C.e.h4(d-1,this.a)+1)-8}}
B.XM.prototype={
U(){return new B.XN()}}
B.XN.prototype={
ap(){var x,w,v,u,t
this.aF()
x=this.a.x
w=A.Nq(A.aV(x),A.be(x))
v=J.kg(w,y.E)
for(u=0;u<w;u=t){t=u+1
v[u]=A.jx(!0,"Day "+t,!0,!0,null,null,!0)}this.d=v},
cw(){var x,w,v=this
v.e0()
x=v.c.N(y.Q)
w=x==null?null:x.r
if(w!=null){x=v.a
x=x.z.vU(x.x,w)}else x=!1
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
awO(d){var x,w,v
if(d){x=this.c.N(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=C.fd
break
case 1:case 2:v=C.fc
break
default:v=C.YE}x=$.au.aE$.d.c.e
x.toString
A.bEX(x,0,v,C.cj,C.Y)}}},
p(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.W(b5),b4=A.cC(b5,C.aJ,y.y)
b4.toString
x=b1.a.x
w=A.aV(x)
v=A.be(x)
u=A.Nq(w,v)
b1.a.toString
t=A.bKJ(w,v,b4)
s=C.d.hb((u+t)/7)
x=y.p
r=A.b([],x)
for(q=0-t+1,p=b1.gawN(),o=y.v;q<=u;++q)if(q<1)r.push(C.lE)
else{b1.a.toString
n=A.bv(w,v,q,0,0,0,0)
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
a0=m.z.vT(m.e,n)
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
j=j.gwa()}r.push(new B.W5(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.b([],x)
for(p=t>0,a2=0;a2<s;++a2){a3=a2*7
a4=Math.min(a3+7,r.length)
a5=C.b.e5(r,a3,a4)
b1.a.toString
a6=A.bv(w,v,a3-t+1,0,0,0,0)
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
m=m.gwa()}m=new A.Ef(m,!0,C.lE,b2)}else m=C.lE
C.b.hB(a5,0,m)
m=r.length
if(!(a4<m))m=a4===m&&C.e.ai(m,7)===0
else m=!0
if(m){b1.a.toString
a8=A.bv(w,v,a4-t,0,0,0,0)
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
m=m.gwa()}m=new A.Ef(m,!0,C.lE,b2)}else m=C.lE
a5.push(m)}C.b.H(a1,a5)}b0=A.bE(b5,C.dT,y.w).w.gj0(0)===C.fa?384:480
return A.a3(A.b([new A.dX(new A.aw(0,b0,0,1/0).OR(58),new A.ab(C.i4,new A.ef(C.aU,b2,b2,new A.jw(!0,A.d(b4.EF(b1.a.x),b2,b2,b2,b2,b3.ok.z.kE(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.dX(new A.aw(0,b0,0,s*42+(s-1)*8),A.bDL(A.aex(a1,!0,!1,!0),D.CG,C.iw,!1),b2),C.t],x),C.k,C.f,C.i)}}
B.W5.prototype={
U(){return new B.alc(A.x6())},
w4(d){return this.e.$1(d)}}
B.alc.prototype={
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
r=new B.bbS(x,w)
q=new B.bbT(r)
p=A.bc(y.C)
if(u.w)p.E(0,C.O)
u=d.a
if(u.y||u.z)p.E(0,C.U)
u=d.d
u.st(0,p)
o=y._
n=q.$1$2(new B.bbN(),p,o)
m=q.$1$2(new B.bbO(),p,o)
l=q.$1$2(new B.bbP(),p,y.W)
if(l==null)l=C.dZ
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.kE(n)
j=new A.i1(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new B.X6(t,q.y?D.Bp:D.a_U,v,a0)}else{j=a0
i=a0
if(q.Q){k=new B.X6(t,D.a_V,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kE(A.aG(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kE(A.aG(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}else if(q.at){s=s==null?a0:s.kE(a2.b)
q=x.CW
if(q==null)q=w.gwp()
j=new A.i1(a0,a0,a0,a0,l.jc(q.cN(a2.b)))}}h=a3.MH(A.c_(d.a.c))
g=d.a.at?", "+a3.gbK():""
f=h+", "+a3.EE(d.a.c)+g
q=d.a
if(q.y)f=a3.aeq(f)
else if(q.z)f=a3.aep(f)
a3=d.a
q=a3.y||a3.z
e=A.aD(C.W,A.br(a0,a0,a0,new A.jw(!0,A.d(h,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,C.N,a0),C.p,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.fW(e,a0,a0,k,C.ao)
return!a3.w?A.bDX(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,C.d9,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new B.bbQ(d),a0,a0,a0,new A.bt(new B.bbR(d,r),y.b),a0,a0,a0,u):e}}
B.Jj.prototype={
L(){return"_HighlightPainterStyle."+this.b}}
B.X6.prototype={
aO(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.aSC)return
$.aq()
x=A.b4()
w=this.b
x.r=w.gt(w)
x.b=C.bm
v=this.d
A:{if(C.b6===v){w=!0
break A}if(C.z===v){w=!1
break A}w=null}B:{u=D.a_U===r
t=!(u&&w)
if(t){s=D.Bp===r
w=s&&!w}else{s=null
w=!0}if(w){r=e.a/2
d.he(new A.K(r,0,r+r,0+e.b),x)
break B}if(!u)w=t?s:D.Bp===r
else w=!0
if(w){d.he(new A.K(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a_V===r){d.he(new A.K(0,0,0+e.a,0+e.b),x)
break B}break B}},
fh(d){return!1}}
B.ao7.prototype={
azf(d,e,f,g){var x,w,v,u=A.cC(d,C.aJ,y.y)
u.toString
x=this.as
w=B.bQu(u,x,e,f)
v=B.bQt(u,x,e,f,g)
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
s=t==null?u.gz5():t}else s=A.W(d).ok.f
r=v.r
if(r==null)r=u.gvP()
s=s==null?j:s.cN(r)
t=k.c
q=k.d
p=k.azf(d,t,q,k.e)
o=t!=null&&q!=null?x.MI(t)+" \u2013 "+x.MI(q):""
n=A.bP_(k.Q,k.z,w===C.fa,w,o,s,p)
x=A.cO(A.d(k.y,j,j,j,j,j,j,j,j),j,j,k.w,j,j)
t=y.p
m=new A.dX(C.C5,new A.ab(C.eR,new A.ef(C.mY,j,j,A.bEp(j,A.b([x,A.cO(A.d(k.x,j,j,j,j,j,j,j,j),j,j,k.r,j,j)],t),C.Ud,C.aX,0,8),j),j),j)
x=A.ba(d,C.b7)
x=x==null?j:x.gcQ()
x=(x==null?C.aS:x).mM(0,1.3).bi(0,14)
l=C.AJ.aA(0,x/14)
switch(w.a){case 0:return A.jA(new B.biH(k,!0,l,n,m))
case 1:return A.a9(A.b([n,new A.hc(1,C.cu,A.a3(A.b([A.an(k.f,1),m],t),C.ab,C.f,C.H),j)],t),C.ab,j,C.f,C.H,0,j,j)}}}
B.Xm.prototype={
U(){return new B.Jo()}}
B.Jo.prototype={
ap(){var x,w,v=this
v.aF()
x=v.a
v.f=x.c
w=$.ah()
v.w=new A.bg(C.aa,w)
v.r=x.d
v.x=new A.bg(C.aa,w)},
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
w=x.MG(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.a()
t.abk(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.MG(w)
t.e=x
w=t.x
w===$&&A.a()
t.abk(w,x,!1)}},
hU(){var x,w,v,u=this,t={},s=u.ac5(u.f)
t.a=s
x=u.ac5(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kO(v)){s=u.a.Q
w=u.c
w.toString
w=A.cC(w,C.aJ,y.y)
w.toString
t.a=w.gba()}}u.G(new B.biK(t,u,x))
return t.a==null&&x==null},
a8k(d){var x=this.c
x.toString
x=A.cC(x,C.aJ,y.y)
x.toString
this.a.toString
return x.YU(d)},
ac5(d){var x,w,v=this
if(d==null){x=v.a.y
w=v.c
w.toString
w=A.cC(w,C.aJ,y.y)
w.toString
return w.gb4()}else if(!v.IK(d)){x=v.a.z
w=v.c
w.toString
w=A.cC(w,C.aJ,y.y)
w.toString
return w.gaY()}return null},
IK(d){var x=this.a
if(d.n6(x.e)||d.kO(x.f))return!1
return!0},
abk(d,e,f){var x=d.a.ae3(e)
d.jY(0,f?x.lm(A.dI(C.F,0,e.length,!1)):x)},
aEd(d){var x=this
x.G(new B.biJ(x,d))
if(x.a.CW)x.hU()},
aBD(d){var x=this
x.G(new B.biI(x,d))
if(x.a.CW)x.hU()},
p(d){var x,w,v,u,t,s,r,q=this,p=null
A.W(d)
x=A.cC(d,C.aJ,y.y)
x.toString
w=A.vM(d)
v=w.p1
if(v==null)v=C.uW
u=q.w
u===$&&A.a()
t=w.dy
q.a.toString
s=x.gbs()
q.a.toString
r=x.gbz()
u=A.an(A.cG(p,C.ae,!0,p,!0,C.o,p,A.cM(),u,p,p,p,p,p,2,A.fa(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.y,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,s,p,p,p,p,p,p,p,p,r,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.T,!0,p,!0,p,!1,p,C.ah,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaEc(),p,p,p,!1,p,p,!1,p,!0,p,C.y,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.a3,p,C.S,p,p,p,p),1)
s=q.x
s===$&&A.a()
q.a.toString
r=x.gbs()
q.a.toString
x=x.gbx()
return A.a9(A.b([u,C.ak,A.an(A.cG(p,C.ae,!1,p,!0,C.o,p,A.cM(),s,p,p,p,p,p,2,A.fa(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.z,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,p,p,p,p,p,p,p,p,x,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.T,!0,p,!0,p,!1,p,C.ah,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaBC(),p,p,p,!1,p,p,!1,p,!0,p,C.y,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.a3,p,C.S,p,p,p,p),1)],y.p),C.x,p,C.f,C.i,0,p,p)}}
B.a0x.prototype={
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
u=t.oA(v,w)
if(w){t.j2(x,t.fn$)
t.fn$=!1}if(u)if(x!=null)x.l()},
l(){var x,w=this
w.i6$.aD(0,new B.bx_())
x=w.cZ$
if(x!=null)x.l()
w.cZ$=null
w.am()}}
B.b1w.prototype={
Ax(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.T_(v,t+x.b,u+w,t,u,A.uK(d.x))},
l_(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
B.a5Y.prototype={
adh(d){return this.dx}}
var z=a.updateTypes(["~()","T<~>()","~(aW?)","~(D)","~(i)","rE(rE)","Ex(@)","~(aW)","~(mi)","~(mm)","~(js)"])
B.byT.prototype={
$1(d){return""+A.aV(d)+C.c.cM(C.e.j(A.be(d)),2,"0")+C.c.cM(C.e.j(A.c_(d)),2,"0")},
$S:988}
B.bzx.prototype={
$1(d){if(!this.a)return d
return d===D.fw?D.lo:D.fw},
$S:z+5}
B.bbL.prototype={
$0(){var x=this.b
return this.a.w=new B.m0(x.a,x.b)},
$S:0}
B.bbI.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bbJ.prototype={
$1(d){var x=A.co(y.f.a(d),y.N,y.z),w=A.ok(J.aj(x.h(0,"booking_date"))),v=A.aY(x.h(0,"tax_rate"))
if(v==null)v=null
if(v==null)v=19
x=A.aY(x.h(0,"gross"))
if(x==null)x=null
return new B.Ex(w,v,x==null?0:x)},
$S:z+6}
B.bbK.prototype={
$0(){return this.a.z=!1},
$S:0}
B.azj.prototype={
$1(d){J.fA(this.a,"signed_url",d)},
$S:213}
B.azk.prototype={
$1(d){},
$S:27}
B.azl.prototype={
$1(d){var x,w="snapshot"
if(d!=null){x=J.R(d,w)
if(y.f.b(x))J.fA(this.a,w,x)}},
$S:233}
B.azm.prototype={
$1(d){},
$S:27}
B.bBx.prototype={
$1(d){var x=this.b,w=this.a.a
return x==null?w:x.$2(d,w)},
$S:24}
B.bbF.prototype={
$0(){this.a.r.Hr(0,!0)},
$S:0}
B.bbE.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gl7(),q=r.y
switch(q==null?A.l(r).i("bq.T").a(q):q){case C.e2:s.r.Hr(0,!1)
r.st(0,C.dI)
break
case C.dI:q=s.grQ()
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
x=!s.IK(x)}else x=!1
if(x){q.st(0,t)
s.gnz().st(0,t)}else{q=s.gnz()
x=q.y
w=x==null
if((w?A.l(q).i("bq.T").a(x):x)!=null){if(w)x=A.l(q).i("bq.T").a(x)
x.toString
x=!s.IK(x)
s=x}else s=!1
if(s)q.st(0,t)}r.st(0,C.e2)
break
case C.i1:case C.eO:break}},
$S:0}
B.bbG.prototype={
$0(){var x=this.b
this.a.grQ().st(0,x)
return x},
$S:0}
B.bbD.prototype={
$0(){var x=this.b
this.a.gnz().st(0,x)
return x},
$S:0}
B.bbH.prototype={
$1(d){return this.a.a},
$S:24}
B.b8u.prototype={
$0(){this.a.y=!1},
$S:0}
B.b8v.prototype={
$0(){this.a.y=!0},
$S:0}
B.b8w.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.n6(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
B.b8x.prototype={
$2(d,e){return this.a.a3_(d,e,!0)},
$S:87}
B.b8y.prototype={
$2(d,e){return this.a.a3_(d,e,!1)},
$S:87}
B.b8A.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
B.b8z.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.aHj(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
B.bbS.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:204}
B.bbT.prototype={
$1$2(d,e,f){return this.a.$1$1(new B.bbU(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:199}
B.bbU.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.Z(this.b)},
$S(){return this.c.i("0?(hX?)")}}
B.bbN.prototype={
$1(d){var x=d.gyt()
return x},
$S:85}
B.bbO.prototype={
$1(d){var x=d.gvn()
return x},
$S:85}
B.bbR.prototype={
$1(d){return this.b.$1$1(new B.bbM(this.a,d),y.G)},
$S:22}
B.bbM.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gFK()
w=x==null?null:x.Z(this.b)}else{x=d.gyu()
w=x==null?null:x.Z(this.b)}return w},
$S:195}
B.bbP.prototype={
$1(d){return d.ax},
$S:193}
B.bbQ.prototype={
$0(){var x=this.a.a
return x.w4(x.c)},
$S:0}
B.biH.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.b([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.an(x.a.f,1))
v.push(x.e)
return A.a3(v,C.ab,C.f,C.H)},
$S:989}
B.biK.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
B.biJ.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.a8k(w)
x.f=w
x.a.r.$1(w)},
$S:0}
B.biI.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.a8k(w)
x.r=w
x.a.w.$1(w)},
$S:0}
B.bx_.prototype={
$2(d,e){if(!d.a)d.T(0,e)},
$S:62};(function aliases(){var x=B.a0x.prototype
x.arm=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.W2.prototype,"gaJH","Jn",1)
x(v,"gawK","BD",1)
x(v=B.W1.prototype,"gIx","SG",0)
x(v,"gIq","Sy",0)
x(v,"gCa","SD",0)
w(v,"ga6v","aEe",2)
w(v,"ga6b","aBE",2)
x(v=B.Vc.prototype,"gaLG","aLH",0)
w(v,"gaOM","aON",7)
w(v=B.Ve.prototype,"gaC3","aC4",3)
w(v,"gaC5","aC6",8)
w(v,"gaC7","aC8",9)
w(v,"gaBf","aBg",10)
w(B.XN.prototype,"gawN","awO",3)
w(v=B.Jo.prototype,"gaEc","aEd",4)
w(v,"gaBC","aBD",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.C,[B.Ex,B.mS])
w(A.of,[B.byT,B.bzx,B.bbJ,B.azj,B.azk,B.azl,B.azm,B.bBx,B.bbH,B.bbS,B.bbT,B.bbU,B.bbN,B.bbO,B.bbR,B.bbM,B.bbP])
w(A.J3,[B.rE,B.Jj])
v(B.m0,A.vm)
v(B.ro,A.b7)
v(B.W2,A.vd)
w(A.yr,[B.bbL,B.bbI,B.bbK,B.bbF,B.bbE,B.bbG,B.bbD,B.b8u,B.b8v,B.b8w,B.b8A,B.b8z,B.bbQ,B.biK,B.biJ,B.biI])
w(A.A,[B.DM,B.ajR,B.alb,B.ao7])
w(A.H,[B.Np,B.Vb,B.Vd,B.XM,B.W5,B.Xm])
w(A.Y,[B.a0x,B.Vc,B.Ve,B.XN,B.alc,B.Jo])
v(B.W1,B.a0x)
w(A.ys,[B.b8x,B.b8y,B.biH,B.bx_])
v(B.WN,A.bJ)
w(A.aeB,[B.bmi,B.b1w])
v(B.bmm,A.aeD)
v(B.X6,A.Nl)
v(B.a5Y,A.Sq)
x(B.a0x,A.ll)})()
A.bw_(b.typeUniverse,JSON.parse('{"ro":{"b7":[],"H":[],"c":[]},"W2":{"Y":["ro"]},"DM":{"A":[],"c":[]},"Np":{"H":[],"c":[]},"Vb":{"H":[],"c":[]},"Vd":{"H":[],"c":[]},"WN":{"bJ":[],"by":[],"c":[]},"XM":{"H":[],"c":[]},"W5":{"H":[],"c":[]},"Xm":{"H":[],"c":[]},"Jo":{"Y":["Xm"]},"W1":{"Y":["Np"]},"ajR":{"A":[],"c":[]},"Vc":{"Y":["Vb"]},"Ve":{"Y":["Vd"]},"alb":{"A":[],"c":[]},"XN":{"Y":["XM"]},"alc":{"Y":["W5"]},"X6":{"aE":[]},"ao7":{"A":[],"c":[]},"a5Y":{"A":[],"c":[]}}'))
var y=(function rtii(){var x=A.ay
return{V:x("ch<ce>"),Y:x("dJ<js>"),M:x("dJ<mi>"),O:x("dJ<mm>"),G:x("F"),v:x("bKH"),T:x("lW<aW>"),i:x("Ex"),I:x("jt"),E:x("eH"),S:x("Oz"),R:x("E<T<~>>"),s:x("E<i>"),p:x("E<c>"),k:x("E<~(ch<ce>)>"),A:x("bp<Y<H>>"),t:x("bp<Jo>"),D:x("v<a6<i,@>>"),j:x("v<@>"),P:x("a6<i,@>"),f:x("a6<@,@>"),y:x("aP"),w:x("kh"),a:x("bx"),c:x("c7<~(ch<ce>)>"),U:x("eZ<C?>"),N:x("i"),F:x("nz"),n:x("jd"),C:x("di"),Q:x("WN"),q:x("xA"),b:x("bt<F?>"),z:x("@"),_:x("F?"),X:x("lW<aW>?"),W:x("eX?"),u:x("i?"),H:x("~"),Z:x("~()")}})();(function constants(){D.CG=new B.bmi()
D.h1=new A.a5(62250,"MaterialIcons",null,!1)
D.DF=new B.ro(null)
D.a7K=new A.kV(0,null,null,null)
D.aAG=new A.f_("Schnittstelle","Buchungsstapel f\xfcr die Buchhaltung",null,null)
D.a9R=new A.iy(1,C.cU,D.aAG,null)
D.fw=new B.rE(0,"hinaus")
D.lo=new B.rE(1,"herein")
D.aaP=new B.rE(2,"weder")
D.aJE=new A.a7("DATEV-Export",null,null,null,null,null,null,null,null,null)
D.abd=new A.e1(D.aJE,null,null)
D.abt=new A.a5(57504,"MaterialIcons",null,!1)
D.lr=new A.a5(57912,"MaterialIcons",null,!1)
D.F6=new A.a5(59011,"MaterialIcons",null,!1)
D.Fx=new A.a5(62584,"MaterialIcons",null,!1)
D.adS=new A.as(C.fz,14,C.am,null,null)
D.FH=new A.as(C.yr,null,null,null,null)
D.Fm=new A.a5(61487,"MaterialIcons",null,!1)
D.EZ=new A.a5(57782,"MaterialIcons",null,!1)
D.afo=new A.as(D.EZ,18,null,null,null)
D.agS=new A.bw(null,null,null,"Beraternummer (optional)",null,null,null,"Nur falls in der Buchhaltungssoftware hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.ah1=new A.bw(null,null,null,"Mandantennummer (optional)",null,null,null,"Bleibt sie leer, beim Import in der Software erg\xe4nzen",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.a9y=new A.ai(48,48,48,48)
D.k6=new A.ab(D.a9y,C.bD,null)
D.aCI=new A.I(1/0,64)
D.aCV=new A.I(496,164)
D.ZH=new A.cp(18,18,C.ng,null)
D.aKs=new A.a7("Freigabe angefordert.",null,null,null,null,null,null,null,null,null)
D.mA=new A.dl(D.aKs,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLs=new A.a7("Keine Ums\xe4tze im gew\xe4hlten Zeitraum.",null,null,null,null,null,null,null,null,null)
D.aE4=new A.dl(D.aLs,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.kp=new A.a7("Anfordern",null,null,null,null,null,null,null,null,null)
D.mL=new A.a7("Freigabe anfordern",null,null,null,null,null,null,null,null,null)
D.aMT=new A.a7("DATEV-Datei herunterladen",null,null,null,null,null,null,null,null,null)
D.aRk=new B.alb(null)
D.aSC=new B.Jj(0,"none")
D.a_U=new B.Jj(1,"highlightLeading")
D.Bp=new B.Jj(2,"highlightTrailing")
D.a_V=new B.Jj(3,"highlightAll")})()};
(a=>{a["YZqquUqOCHMd670jtTQidvrj4eA="]=a.current})($__dart_deferred_initializers__);