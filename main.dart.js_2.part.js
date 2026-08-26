((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
caI(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q="0",p=new A.aV(Date.now(),0,!1),o=C.c.cM(C.e.j(A.be(p)),2,q),n=C.c.cM(C.e.j(A.c_(p)),2,q),m=C.c.cM(C.e.j(A.hJ(p)),2,q),l=C.c.cM(C.e.j(A.AA(p)),2,q),k=C.c.cM(C.e.j(A.ace(p)),2,q),j=new B.byK(),i=e.length===0?q:e,h=d.length===0?q:d,g=y.s,f=A.b([C.b.c6(A.b(['"EXTF"',"700","21",'"Buchungsstapel"',"13",""+A.aW(p)+o+n+m+l+k+"000","",'"BS"','"Boerdesnack24 App"',"",i,h,""+A.aW(a0)+"0101","4",j.$1(a0),j.$1(a2),'"Automatenumsaetze App"',"","1","0","0",'"EUR"'],g),";"),'"Umsatz (ohne Soll/Haben-Kz)";"Soll/Haben-Kennzeichen";"WKZ Umsatz";"Kurs";"Basis-Umsatz";"WKZ Basis-Umsatz";"Konto";"Gegenkonto (ohne BU-Schl\xfcssel)";"BU-Schl\xfcssel";"Belegdatum";"Belegfeld 1";"Belegfeld 2";"Skonto";"Buchungstext"'],g)
for(o=a1.length,x=0;x<a1.length;a1.length===o||(0,A.J)(a1),++x){w=a1[x]
v=w.b<10
u=v?"8300":"8400"
n=w.a
m=C.c.cM(C.e.j(A.c_(n)),2,q)
l=C.c.cM(C.e.j(A.be(n)),2,q)
k=A.h(j.$1(n))
i=v?"7":"19"
h=v?"7":"19"
t=C.c.cM(C.e.j(A.c_(n)),2,q)
s=C.c.cM(C.e.j(A.be(n)),2,q)
r=C.d.aa(w.c,2)
f.push(C.b.c6(A.b([A.ag(r,".",","),'"S"','"EUR"',"","","","1000",u,"",m+l,'"'+("TL"+k+"-"+i)+'"',"","",'"'+("Tageslosung App-Verkaeufe "+h+" % "+t+"."+s+"."+A.aW(n))+'"'],g),";"))}return C.b.c6(f,"\r\n")},
Ew:function Ew(d,e,f){this.a=d
this.b=e
this.c=f},
byK:function byK(){},
bzn(d,e,f){var x,w=new B.bzo(f<0)
if(d==="expense")return w.$1(D.fw)
if(d==="revenue")return w.$1(D.lm)
x=A.ih(C.c.au(e),null)
if(x!=null&&x>=1800&&x<=1999)return w.$1(C.e.ai(x,100)>=90?D.lm:D.fw)
return D.aaN},
bH5(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rD:function rD(d,e){this.a=d
this.b=e},
bzo:function bzo(d){this.a=d},
aHX(){var x=new A.aV(Date.now(),0,!1)
return new B.m0(A.bv(A.aW(x),A.be(x),1,0,0,0,0),A.bv(A.aW(x),A.be(x)+1,0,0,0,0,0))},
ot(d){return C.c.cM(C.e.j(A.aW(d)),4,"0")+"-"+C.c.cM(C.e.j(A.be(d)),2,"0")+"-"+C.c.cM(C.e.j(A.c_(d)),2,"0")},
m0:function m0(d,e){this.a=d
this.b=e},
rn:function rn(d){this.a=d},
W1:function W1(d,e){var _=this
_.w=$
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbG:function bbG(d){this.a=d},
bbH:function bbH(){},
bbI:function bbI(d){this.a=d},
bGj(d,e){var x=$.cH().a5(Math.abs(d))
return e===D.fw?"-"+x:x},
bR8(d,e){var x
if(e===D.fw)return d==="revenue"||d==="expense"?C.V:C.l
if(e===D.lm)x=d==="revenue"||d==="expense"
else x=!1
if(x)return C.ao
return C.l},
cbO(d,e){if(d==="expense")return e===D.fw?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fw?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fw)return"Privatentnahme"
if(e===D.lm)return"Privateinlage"
return B.bH5(d)},
DL:function DL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
mR:function mR(d){this.a=d},
azh:function azh(d){this.a=d},
azi:function azi(){},
azj:function azj(d){this.a=d},
azk:function azk(){},
ay1(d,e,f,g,h,i){return B.cdR(d,e,f,g,h,i)},
cdR(d,e,f,g,h,i){var x=0,w=A.q(y.X),v,u,t,s,r,q
var $async$ay1=A.m(function(j,k){if(j===1)return A.n(k,w)
for(;;)switch(x){case 0:r={}
q=g.a
q=A.bv(A.aW(q),A.be(q),A.c_(q),0,0,0,0)
u=g.b
u=A.bv(A.aW(u),A.be(u),A.c_(u),0,0,0,0)
f=A.bv(A.aW(f),A.be(f),A.c_(f),0,0,0,0)
h=A.bv(A.aW(h),A.be(h),A.c_(h),0,0,0,0)
t=new A.aV(Date.now(),0,!1)
s=new B.Nn(new A.lW(q,u,y.S.i("lW<DQ.T>")),f,h,A.bv(A.aW(t),A.be(t),A.c_(t),0,0,0,0),C.e2,null,null,null,null,null,null,null,null,null,null,null,C.fg,null,null,null,C.Cp,null)
r.a=s
r.a=A.bM5(s,e,i)
v=A.fg(null,null,!0,null,new B.bBo(r,d),e,null,!0,!1,y.T)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$ay1,w)},
bQk(d,e,f,g){var x
if(f==null)x=d.gbz()
else x=g==null||A.aW(f)===A.aW(g)?d.Xd(f):d.Xc(f)
return x},
bQj(d,e,f,g,h){var x
if(g==null)x=d.gbx()
else x=f!=null&&A.aW(f)===A.aW(g)&&A.aW(f)===A.aW(h)?d.Xd(g):d.Xc(g)
return x},
bBo:function bBo(d,e){this.a=d
this.b=e},
Nn:function Nn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
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
W0:function W0(d,e,f,g,h,i,j,k){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.cZ$=g
_.i6$=h
_.oX$=i
_.fn$=j
_.i7$=k
_.c=_.a=null},
bbD:function bbD(d){this.a=d},
bbC:function bbC(d){this.a=d},
bbE:function bbE(d,e){this.a=d
this.b=e},
bbB:function bbB(d,e){this.a=d
this.b=e},
bbF:function bbF(d){this.a=d},
ajP:function ajP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Va:function Va(d,e,f,g,h,i,j,k,l,m){var _=this
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
Vb:function Vb(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=0
_.y=_.x=$
_.c=_.a=null},
b8s:function b8s(d){this.a=d},
b8t:function b8t(d){this.a=d},
b8u:function b8u(d,e){this.a=d
this.b=e},
b8v:function b8v(d){this.a=d},
b8w:function b8w(d){this.a=d},
Vc:function Vc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Vd:function Vd(){var _=this
_.f=_.e=$
_.c=_.a=_.w=_.r=null},
b8y:function b8y(d,e){this.a=d
this.b=e},
b8x:function b8x(d,e){this.a=d
this.b=e},
WM:function WM(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.w=f
_.b=g
_.a=h},
al9:function al9(d){this.a=d},
bm9:function bm9(){},
bmd:function bmd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XL:function XL(d,e,f,g,h,i,j,k,l,m){var _=this
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
XM:function XM(){this.d=$
this.c=this.a=null},
W4:function W4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ala:function ala(d){this.d=d
this.c=this.a=null},
bbQ:function bbQ(d,e){this.a=d
this.b=e},
bbR:function bbR(d){this.a=d},
bbS:function bbS(d,e,f){this.a=d
this.b=e
this.c=f},
bbL:function bbL(){},
bbM:function bbM(){},
bbP:function bbP(d,e){this.a=d
this.b=e},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbN:function bbN(){},
bbO:function bbO(d){this.a=d},
Ji:function Ji(d,e){this.a=d
this.b=e},
X5:function X5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ao5:function ao5(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
biy:function biy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Xl:function Xl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Jn:function Jn(){var _=this
_.e=_.d=$
_.r=_.f=null
_.x=_.w=$
_.z=_.y=null
_.Q=!1
_.c=_.a=null},
biB:function biB(d,e,f){this.a=d
this.b=e
this.c=f},
biA:function biA(d,e){this.a=d
this.b=e},
biz:function biz(d,e){this.a=d
this.b=e},
bwR:function bwR(){},
a0w:function a0w(){},
b1u:function b1u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKq(d,e,f,g,h,i,j){var x=null,w=A.aev(e,!0,!0,!0),v=e.length
return new A.vz(new B.b1u(f,h,g,d,x),w,x,C.G,!1,x,x,i,x,!0,x,0,x,x,v,C.hG,C.S,x,x,C.o,C.br,x)},
a5W:function a5W(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bGz(d,e){var x=0,w=A.q(y.H),v,u,t,s,r,q
var $async$bGz=A.m(function(f,g){if(f===1)return A.n(g,w)
for(;;)switch(x){case 0:u=A.b([A.eK(65279)+d],y.s)
t=b.G
s=new t.Blob(u,{type:"text/csv;charset=utf-8"})
r=t.URL.createObjectURL(s)
q=A.aKu()
q.href=r
q.download=e
v=t.document.body
if(v!=null)v.append(q)
q.click()
q.remove()
t.URL.revokeObjectURL(r)
return A.o(null,w)}})
return A.p($async$bGz,w)},
bNK(d,e,f){return new A.SZ(new A.Bd(d,e,!0,!0,!0,0,A.bBd(),null),f)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[5],B)
D=c[7]
B.Ew.prototype={}
B.rD.prototype={
L(){return"Geldfluss."+this.b}}
B.m0.prototype={
gbt(){return[B.ot(this.a),B.ot(this.b)]}}
B.rn.prototype={
U(){var x=$.ah()
return new B.W1(new A.bg(C.aa,x),new A.bg(C.aa,x))}}
B.W1.prototype={
got(){var x=this.w
return x===$?this.w=B.aHX():x},
l(){var x=this.x,w=$.ah()
x.S$=w
x.R$=0
x=this.y
x.S$=w
x.R$=0
this.am()},
Jl(){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$Jl=A.m(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:t=new A.aV(Date.now(),0,!1)
s=v.c
s.toString
x=2
return A.k(B.ay1(null,s,A.bv(A.aW(t)-5,1,1,0,0,0,0),new A.lW(v.got().a,v.got().b,y.T),t,C.ee),$async$Jl)
case 2:u=e
if(u!=null)v.G(new B.bbJ(v,u))
return A.o(null,w)}})
return A.p($async$Jl,w)},
BC(){var x=0,w=A.q(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$BC=A.m(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:r.G(new B.bbG(r))
u=4
l=y.z
f=y.j
x=7
return A.k(r.gbq().aw(0,$.bC(),y.F).dQ("datev_export_rows",A.a5(["p_from",C.c.a1(r.got().a.dR(),0,10),"p_to",C.c.a1(r.got().b.dR(),0,10)],y.N,l),l),$async$BC)
case 7:q=f.a(e)
l=J.cT(q,new B.bbH(),y.i)
k=A.Q(l,l.$ti.i("ax.E"))
p=k
l=r.c
if(l==null){s=[1]
x=5
break}if(J.cf(p)===0){l.N(y.q).f.aI(D.aDU)
s=[1]
x=5
break}l=r.got()
j=r.got()
i=C.c.au(r.x.a.a)
o=B.caI(C.c.au(r.y.a.a),i,l.a,p,j.b)
n="EXTF_Buchungsstapel_"+C.c.a1(r.got().a.dR(),0,10)+"_"+C.c.a1(r.got().b.dR(),0,10)+".csv"
x=8
return A.k(B.bGz(o,n),$async$BC)
case 8:l=r.c
if(l==null){s=[1]
x=5
break}l.N(y.q).f.aI(A.bO(null,null,null,null,null,C.o,null,A.e("DATEV-Datei erstellt ("+J.cf(p)+" Buchungen).",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
g=t.pop()
m=A.a_(g)
l=r.c
if(l==null){s=[1]
x=5
break}l.N(y.q).f.aI(A.bO(null,null,null,null,null,C.o,null,A.e("Export fehlgeschlagen: "+A.h(m),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.G(new B.bbI(r))
x=s.pop()
break
case 6:case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$BC,w)},
p(d){var x,w,v,u,t=this,s=null,r=C.ao.dG(0.14),q=A.ar(4),p=A.c7(C.ao.dG(0.5),1),o=y.p
q=A.aa(A.b([D.a9P,A.aF(s,A.aa(A.b([D.adQ,C.c4,A.e("DATEV",s,s,s,s,A.t(C.ao,11,C.r).fm(0.4),s,s,s)],o),C.j,s,C.f,C.H,0,s,s),C.p,s,s,new A.aB(r,s,p,q,s,s,C.B),s,s,s,s,C.le,s,s,s)],o),C.j,s,C.f,C.i,0,s,s)
p=A.e("Erzeugt eine CSV-Datei im DATEV-Format (EXTF-Buchungsstapel, SKR 03). Enthalten sind die Tageslosungen der App-Verk\xe4ufe je Steuersatz: Kasse (1000) an Erl\xf6se 7 % (8300) bzw. 19 % (8400) \u2014 entsprechend der GoBD-Verfahrensdokumentation. Buchhaltung und Steuererkl\xe4rungen erstellt Gesellschafter Philipp Blume; die Datei l\xe4sst sich direkt in eine DATEV-f\xe4hige Buchhaltungssoftware importieren.",s,s,s,s,A.t(C.l,13,C.k).cC(1.4),s,s,s)
r=t.z?s:t.gaJC()
x=t.got()
w=$.cP()
r=A.eB(D.afk,A.e("Zeitraum: "+w.a5(x.a)+" \u2013 "+w.a5(t.got().b),s,s,s,s,s,s,s,s),r,s)
w=A.cF(s,C.ae,!1,s,!0,C.o,s,A.cM(),t.x,s,s,s,s,s,2,D.agM,C.S,!0,s,!0,s,!1,s,C.ah,s,s,s,s,C.cN,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.x,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.R,s,s,s,s)
x=A.cF(s,C.ae,!1,s,!0,C.o,s,A.cM(),t.y,s,s,s,s,s,2,D.agW,C.S,!0,s,!0,s,!1,s,C.ah,s,s,s,s,C.cN,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.x,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.R,s,s,s,s)
v=t.z?s:t.gawG()
u=A.dL(C.n,C.h,s,C.es,s,s,s)
return A.d7(D.abb,s,A.d4(A.b([q,C.E,p,C.L,A.b6(s,A.a3(A.b([r,C.t,w,C.E,x,C.L,A.fI(t.z?D.ZG:D.FG,D.aMG,v,u)],o),C.ab,C.f,C.i),s,s,C.x,s,s,3),C.t,A.e("Hinweis: Bargeld-Entnahmen und Bankbewegungen bucht Philipp Blume weiterhin \xfcber sevDesk/Kontoauszug \u2014 diese Datei deckt bewusst nur die Erl\xf6sseite ab, damit keine Buchungen doppelt entstehen.",s,s,s,s,A.t(C.l,11,C.k).cC(1.35),s,s,s)],o),s,C.x,s,C.G,!1),s,s,s)}}
B.DL.prototype={
p(d){var x=this,w=null,v=x.d,u=x.c,t=B.bzn(v,x.e,u),s=B.bGj(u,t),r=A.t(B.bR8(v,t),x.f,C.C)
return A.e(s,w,w,w,B.cbO(v,t)+" "+$.cH().a5(Math.abs(u)),r,w,w,w)}}
B.mR.prototype={
wj(d,e,f,g,h){return this.b0R(d,e,f,g,h)},
b0R(d,e,f,g,h){var x=0,w=A.q(y.N),v,u=this,t,s,r,q
var $async$wj=A.m(function(i,j){if(i===1)return A.n(j,w)
for(;;)switch(x){case 0:t=u.a
s=y.N
r=y.z
x=3
return A.k(t.dQ("request_document_approval",A.a5(["p_document_kind",d,"p_period_from",C.c.a1(e.dR(),0,10),"p_period_to",C.c.a1(f.dR(),0,10),"p_title",h,"p_snapshot",g,"p_draft_path",null],s,r),r),$async$wj)
case 3:q=j
t=t.ax
t===$&&A.a()
r=J.nX(q)
t.h0("approval-notify",A.a5(["approval_id",r.j(q),"phase","requested"],s,s))
v=r.j(q)
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$wj,w)},
LJ(d,e,f){return this.aTl(d,e,f)},
aTl(d,e,f){var x=0,w=A.q(y.H),v=this,u,t,s
var $async$LJ=A.m(function(g,h){if(g===1)return A.n(h,w)
for(;;)switch(x){case 0:u=v.a
t=y.N
s=y.z
x=2
return A.k(u.dQ("decide_document_approval",A.a5(["p_approval_id",d,"p_decision",f,"p_comment",e],t,s),s),$async$LJ)
case 2:u=u.ax
u===$&&A.a()
u.h0("approval-notify",A.a5(["approval_id",d,"phase",f==="approved"?"approved":"rejected"],t,t))
u.h0("document-finalize",A.a5(["approval_id",d],t,t))
return A.o(null,w)}})
return A.p($async$LJ,w)},
H8(d){return this.amy(d)},
amy(d){var x=0,w=A.q(y.u),v,u=this,t
var $async$H8=A.m(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:t=u.a.ay
t===$&&A.a()
x=3
return A.k(t.cP("signed-documents").nL(d,86400),$async$H8)
case 3:v=f
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$H8,w)},
zl(d,e){return this.aY0(0,!1)},
aY_(d){return this.zl(0,!1)},
aY0(a8,a9){var x=0,w=A.q(y.D),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$zl=A.m(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:e=s.a
d=y.N
a0=y.z
a1=y.j
a2=y.P
a6=J
a7=a1
x=3
return A.k(e.dQ("list_document_approvals",A.a5(["p_mine_only",!1],d,a0),a0),$async$zl)
case 3:a3=a6.cl(a7.a(b1),a2)
a4=C.c3
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
f=A.FF(null,null,d,d)
f.I(0,l.b)
p.push(new A.af1(l.a,f,"signed-documents",l.d,g).nL(k,86400).cr(new B.azh(n),a2).iG(new B.azi()))}if(m&&h==="inventory_fifo"&&i!=null&&i.length!==0)p.push(e.cP("document_approvals").fT(0,"snapshot").i3("id",i).tC().cr(new B.azj(n),o).iG(new B.azk()))}x=p.length!==0?9:10
break
case 9:x=11
return A.k(A.l0(p,a2),$async$zl)
case 11:case 10:v=a3
x=1
break
case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$zl,w)}}
B.Nn.prototype={
gaej(){var x=this.f
return A.bv(A.aW(x),A.be(x),A.c_(x),0,0,0,0)},
U(){var x=null
return new B.W0(new A.tu(!1,$.ah()),new A.bp(x,y.A),new A.bp(x,y.t),x,A.A(y.U,y.Z),x,!0,x)}}
B.W0.prototype={
gl7(){var x=this.d
return x===$?this.d=new A.Z9(this.a.r,$.ah()):x},
grP(){var x,w=this.e
if(w===$){x=this.a.c
x=x==null?null:x.a
w=this.e=new A.Hc(x,$.ah())}return w},
gny(){var x,w=this.f
if(w===$){x=this.a.c
x=x==null?null:x.b
w=this.f=new A.Hc(x,$.ah())}return w},
gik(){this.a.toString
return null},
j2(d,e){var x=this
x.jj(x.gl7(),"entry_mode")
x.jj(x.grP(),"selected_start")
x.jj(x.gny(),"selected_end")
x.jj(x.r,"autovalidate")},
l(){var x=this
x.gl7().l()
x.grP().l()
x.gny().l()
x.r.l()
x.arj()},
SD(){var x,w=this,v=w.gl7(),u=v.y,t=u==null
if((t?A.l(v).i("bq.T").a(u):u)!==C.dI)v=(t?A.l(v).i("bq.T").a(u):u)===C.eN
else v=!0
if(v)if(!w.x.ga3().hU()){w.G(new B.bbD(w))
return}if(w.ga6H()){v=w.grP()
u=v.y
v=u==null?A.l(v).i("bq.T").a(u):u
v.toString
u=w.gny()
t=u.y
u=t==null?A.l(u).i("bq.T").a(t):t
u.toString
x=new A.lW(v,u,y.T)}else x=null
v=w.c
v.toString
A.aK(v,!1).c9(x)},
Sv(){var x=this.c
x.toString
A.aK(x,!1).c9(null)},
SA(){this.G(new B.bbC(this))},
II(d){var x=this.a
if(d.n5(x.d)||d.kO(x.e))return!1
return!0},
aE9(d){this.G(new B.bbE(this,d))},
aBz(d){this.G(new B.bbB(this,d))},
ga6H(){var x=this.grP(),w=x.y
if((w==null?A.l(x).i("bq.T").a(w):w)!=null){x=this.gny()
w=x.y
x=(w==null?A.l(x).i("bq.T").a(w):w)!=null}else x=!1
return x},
p(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3={}
A.W(b4)
x=y.w
w=A.bE(b4,C.dT,x).w.gj0(0)
v=A.cB(b4,C.aJ,y.y)
v.toString
u=A.oh(b4)
A.W(b4)
t=A.mF(b4)
b3.a=null
s=b1.gl7()
r=s.y
q=r==null
if((q?A.l(s).i("bq.T").a(r):r)!==C.e2)p=(q?A.l(s).i("bq.T").a(r):r)===C.dI
else p=!0
switch(q?A.l(s).i("bq.T").a(r):r){case C.e2:case C.i1:s=b1.a.fr
r=b1.grP()
q=r.y
r=q==null?A.l(r).i("bq.T").a(q):q
q=b1.gny()
o=q.y
q=o==null?A.l(q).i("bq.T").a(o):o
o=b1.a
n=o.d
m=o.e
l=o.dy
o=o.gaej()
k=b1.ga6H()?b1.gIv():b2
if(p){j=b1.a.db
j=A.bN(C.ls,b2,b2,b2)
j=A.eW(b2,b2,j,b2,b2,b1.gC8(),C.a1,b2,v.gaW(),b2)}else j=b2
i=b1.a.y
i=v.gbG()
h=b1.a.z
v=v.gaU()
b3.a=new B.ajP(r,q,n,m,l,o,b1.ga6s(),b1.ga68(),k,b1.gIo(),i,v,s,j,b1.w)
g=A.bE(b4,C.mU,x).w.a
f=u.fx
if(f==null){x=t.fx
x.toString
f=x}e=u.fy
if(e==null)e=t.gFG()
d=u.go
if(d==null)d=t.gFH()
a0=u.id
if(a0==null)a0=t.id
a1=C.a1
break
case C.dI:case C.eN:x=b1.a.fr
s=b1.grP()
r=s.y
if(r==null)r=A.l(s).i("bq.T").a(r)
q=b1.gny()
o=q.y
if(o==null)o=A.l(q).i("bq.T").a(o)
n=b1.a.gaej()
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
s=s==null?b2:A.bv(A.aW(s),A.be(s),A.c_(s),0,0,0,0)
q=q==null?b2:A.bv(A.aW(q),A.be(q),A.c_(q),0,0,0,0)
l=A.bQ(new A.ab(C.xt,A.a3(A.b([C.cL,new B.Xl(s,q,A.bv(A.aW(i),A.be(i),A.c_(i),0,0,0,0),A.bv(A.aW(h),A.be(h),A.c_(h),0,0,0,0),b1.ga6s(),b1.ga68(),a5,a6,a4,a7,a8,a9,b0,!0,a3,k,a2,j,b1.x),C.cL],y.p),C.j,C.f,C.i),b2),l,b2)
if(p){b1.a.toString
s=A.eW(b2,b2,C.yE,b2,b2,b1.gC8(),C.a1,b2,v.gaX(),b2)}else s=b2
b1.a.toString
q=v.gbQ()
k=b1.a.w
k=v.gbP()
j=b1.a.z
v=v.gaU()
b3.a=new B.ao5(r,o,n,l,b1.gIv(),b1.gIo(),q,k,v,s,x,b2)
if(m)g=C.AI
else g=D.aCL
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
return A.a6m(b2,x,A.o2(b2,A.Ab(new A.eA(new B.bbF(b3),b2),1.3),C.p,b2,C.e1,b2,C.Y,s,b2,b2,v),C.bu,b2,f,a1,C.vl,e,a0,d)}}
B.ajP.prototype={
p(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
A.W(a3)
x=A.cB(a3,C.aJ,y.y)
x.toString
w=y.w
v=A.bE(a3,C.dT,w).w.gj0(0)
u=A.oh(a3)
A.W(a3)
t=A.mF(a3)
s=u.fr
if(s==null)s=t.fr
r=u.k1
if(r==null)r=t.gFC()
q=u.k2
if(q==null)q=t.gFD()
p=q.bC(0.38)
o=u.k3
if(o==null)o=t.gFE()
n=u.k4
if(n==null)n=t.gFF()
m=n==null?a2:n.kE(q)
n=a1.ax
l=a1.c
k=a1.d
j=B.bQk(x,n,l,k)
i=B.bQj(x,n,l,k,new A.aV(Date.now(),0,!1))
x=o==null
if(x)h=a2
else h=o.kE(l!=null?q:p)
if(x)g=a2
else g=o.kE(k!=null?q:p)
f=A.qy(a2,a2,a2,a2,p,a2,a2,a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
e=new A.dM(a2,a2,a2,a2,a2,q,a2,a2,a2)
x=y.p
d=A.b([],x)
if(v===C.fa&&a1.ay!=null){a0=a1.ay
a0.toString
d.push(a0)}d.push(A.cR(A.e(a1.as,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a1.z,a2,f))
d.push(C.an)
a0=a1.at
x=A.b([A.bQ(a2,a2,A.bE(a3,C.w_,w).w.a.a<360?42:72),A.ao(A.br(a2,a2,a2,A.a3(A.b([A.e(a0,a2,1,C.ag,a2,m,a2,a2,a2),C.E,A.aa(A.b([A.e(j,a2,1,C.ag,a2,h,a2,a2,a2),A.e(" \u2013 ",a2,a2,a2,a2,h,a2,a2,a2),new A.hc(1,C.cu,A.e(i,a2,1,C.ag,a2,g,a2,a2,a2),a2)],x),C.j,a2,C.f,C.i,0,a2,a2),C.L],x),C.y,C.f,C.i),!1,a2,a2,!0,a2,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a0+" "+j+" to "+i,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,C.N,a2),1)],x)
if(v===C.dA&&a1.ay!=null){w=a1.ay
w.toString
x.push(new A.ab(C.eQ,A.zv(w,e,a2),a2))}x=A.bJs(d,e,r,new A.GG(A.aa(x,C.j,a2,C.f,C.i,0,a2,a2),D.aCy,a2),0,e,new A.MI(C.ZQ,a2,a2,a2,C.CN,a2,a1.Q,a2,a2,a2,a2),0,a2)
w=a1.e
d=a1.f
a0=a1.w
l=l!=null?A.bv(A.aW(l),A.be(l),A.c_(l),0,0,0,0):a2
k=k!=null?A.bv(A.aW(k),A.be(k),A.c_(k),0,0,0,0):a2
w=A.bv(A.aW(w),A.be(w),A.c_(w),0,0,0,0)
d=A.bv(A.aW(d),A.be(d),A.c_(d),0,0,0,0)
return A.jM(!0,A.d7(x,s,new B.Va(l,k,w,d,a1.r,A.bv(A.aW(a0),A.be(a0),A.c_(a0),0,0,0,0),a1.x,a1.y,n,a2),a2,a2,a2),!1,!1,C.a1,!1,!1)}}
B.Va.prototype={
U(){return new B.Vb(new A.bp(null,y.A),new A.nC())}}
B.Vb.prototype={
ap(){var x,w,v,u=this
u.aF()
x=A.wC(0,null,null)
u.x=x
x.ab(0,u.gaLA())
x=u.a
w=u.f=x.c
u.r=x.d
if(w==null)w=x.w
v=x.e
if(!w.n5(v)&&!w.kO(x.f))u.w=A.a64(v,w)
u.y=u.w!==0},
l(){var x=this.x
x===$&&A.a()
x.l()
this.am()},
aLB(){var x,w=this,v=w.x
v===$&&A.a()
v=v.gc8(0).at
v.toString
x=C.b.gcz(w.x.f).z
x.toString
if(v<=x)w.G(new B.b8s(w))
else{v=w.y
v===$&&A.a()
if(!v)w.G(new B.b8t(w))}},
aP5(){var x=this.c
x.toString
switch(A.W(x).w.a){case 0:case 1:A.Oz()
break
case 2:case 3:case 4:case 5:break}},
aOH(d){this.aP5()
this.G(new B.b8u(this,d))},
a2X(d,e,f){var x,w,v=this,u=v.w,t=f?u-e-1:u+e
u=v.a.e
x=A.bv(A.aW(u),A.be(u)+t,1,0,0,0,0)
u=v.a
w=u.z
return new B.XL(v.f,v.r,u.w,v.gaOG(),u.e,u.f,x,u.r,w,null)},
p(d){var x,w,v,u,t,s,r=this,q=null,p=y.p,o=A.b([D.aR7],p),n=r.y
n===$&&A.a()
if(n)o.push(D.a7I)
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
p=A.b([B.bNK(new B.b8v(r),s,q),B.bNK(new B.b8w(r),A.a64(w,v)+1-s,t)],p)
o.push(A.ao(new B.Vc(new B.a5W(p,C.G,!1,u,q,q,q,!1,t,0,q,q,q,C.hG,C.S,q,q,C.o,C.br,r.d),w,v,n,x,q),1))
return A.a3(o,C.j,C.f,C.i)}}
B.Vc.prototype={
U(){return new B.Vd()}}
B.Vd.prototype={
ap(){var x,w,v=this
v.aF()
x=y.k
w=y.c
v.e=A.a5([C.B3,new A.dJ(v.gaC0(),new A.c6(A.b([],x),w),y.M),C.B4,new A.dJ(v.gaC2(),new A.c6(A.b([],x),w),y.O),C.vK,new A.dJ(v.gaBa(),new A.c6(A.b([],x),w),y.Y)],y.n,y.V)
v.f=A.jx(!0,"Day Grid",!0,!0,null,null,!1)},
l(){var x=this.f
x===$&&A.a()
x.l()
this.am()},
aC_(d){this.G(new B.b8y(this,d))},
aC1(d){var x,w=this.f
w===$&&A.a()
w.ij()
w=this.f
x=w.e
x.toString
A.na(x).os(w,!0)},
aC3(d){var x,w=this.f
w===$&&A.a()
w.ij()
w=this.f
x=w.e
x.toString
A.na(x).os(w,!1)},
aBb(d){this.G(new B.b8x(this,d))},
aHe(d,e){var x,w,v,u=this.c.N(y.I).w
this.a.toString
if(u===C.b6)if(e===C.fO)x=C.hK
else x=e===C.hK?C.fO:e
else x=e
w=C.TL.h(0,x)
w.toString
v=A.bv(A.aW(d),A.be(d),A.c_(d)+w,0,0,0,0)
w=this.a
if(!v.n5(w.d)&&!v.kO(w.e))return v
return null},
p(d){var x,w,v,u,t=this,s=null,r=t.e
r===$&&A.a()
x=t.f
x===$&&A.a()
w=t.a.r
v=x.gda()?t.w:s
u=t.f.gda()?t.r:s
return A.aII(r,!1,new B.WM(w,v,u,t.a.c,s),!0,x,C.bc,t.gaBZ(),s,s,C.T9)}}
B.WM.prototype={
dS(d){return!this.f.vT(this.r,d.r)||this.w!=d.w}}
B.al9.prototype={
azB(d,e){var x,w=null,v=A.b([],y.p)
for(x=e.gMA();v.length<7;x=(x+1)%7)v.push(new A.jw(!0,new A.h8(C.W,w,w,A.e(e.gYu()[x],w,w,w,w,d,w,w,w),w),w))
return v},
p(d){var x,w=A.W(d),v=w.ok.x.kE(w.ax.k3),u=A.cB(d,C.aJ,y.y)
u.toString
x=this.azB(v,u)
C.b.hB(x,0,C.at)
x.push(C.at)
u=A.bE(d,C.dT,y.w).w.gj0(0)===C.fa?384:480
return new A.dX(new A.aw(0,u,0,42),A.bDC(A.aev(x,!0,!1,!0),D.CF,null,!0),null)}}
B.bm9.prototype={
Aw(d){return new B.bmd(9,Math.max((d.w-16)/7,0),8,A.uJ(d.x))},
l_(d){return!1}}
B.bmd.prototype={
a_D(d){return this.a*C.d.cA(d,50)},
a_B(d){return Math.max(0,this.a*C.d.hb(d/50)-1)},
azz(d,e){var x,w,v,u=this
if(u.d){x=u.b
w=u.c
v=e?w:x
return(u.a-2)*x+2*w-d-v}return d},
Gr(d){var x,w=this,v=w.a,u=C.e.ai(d,v),t=u===0||u===v-1,s=w.b,r=w.c,q=Math.max(0,(u-1)*s+r)
v=C.e.h4(d,v)
x=w.azz(q,t)
if(t)s=r
return new A.aeA(v*50,x,42,s)},
VX(d){return 50*(C.e.h4(d-1,this.a)+1)-8}}
B.XL.prototype={
U(){return new B.XM()}}
B.XM.prototype={
ap(){var x,w,v,u,t
this.aF()
x=this.a.x
w=A.No(A.aW(x),A.be(x))
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
if(u!=null)u.aH(0)
v.fj()}this.am()},
awK(d){var x,w,v
if(d){x=this.c.N(y.Q)
w=x==null?null:x.w
if(w!=null){switch(w.a){case 0:case 3:v=C.fd
break
case 1:case 2:v=C.fc
break
default:v=C.YD}x=$.au.aE$.d.c.e
x.toString
A.bEO(x,0,v,C.cj,C.Y)}}},
p(b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=A.W(b5),b4=A.cB(b5,C.aJ,y.y)
b4.toString
x=b1.a.x
w=A.aW(x)
v=A.be(x)
u=A.No(w,v)
b1.a.toString
t=A.bKz(w,v,b4)
s=C.d.hb((u+t)/7)
x=y.p
r=A.b([],x)
for(q=0-t+1,p=b1.gawJ(),o=y.v;q<=u;++q)if(q<1)r.push(C.lD)
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
j=j.bm.ok
if(j==null){A.W(b5)
j=A.mF(b5)
j=j.gwa()}r.push(new B.W4(n,k,m,p,j,i,h,g,f,e,d,a0,l,b2))}a1=A.b([],x)
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
m=m.bm.ok
if(m==null){A.W(b5)
m=A.mF(b5)
m=m.gwa()}m=new A.Ee(m,!0,C.lD,b2)}else m=C.lD
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
m=m.bm.ok
if(m==null){A.W(b5)
m=A.mF(b5)
m=m.gwa()}m=new A.Ee(m,!0,C.lD,b2)}else m=C.lD
a5.push(m)}C.b.I(a1,a5)}b0=A.bE(b5,C.dT,y.w).w.gj0(0)===C.fa?384:480
return A.a3(A.b([new A.dX(new A.aw(0,b0,0,1/0).OO(58),new A.ab(C.i4,new A.ee(C.aU,b2,b2,new A.jw(!0,A.e(b4.ED(b1.a.x),b2,b2,b2,b2,b3.ok.z.kE(b3.ax.k3),b2,b2,b2),b2),b2),b2),b2),new A.dX(new A.aw(0,b0,0,s*42+(s-1)*8),A.bDC(A.aev(a1,!0,!1,!0),D.CF,C.iw,!1),b2),C.t],x),C.j,C.f,C.i)}}
B.W4.prototype={
U(){return new B.ala(A.x5())},
w4(d){return this.e.$1(d)}}
B.ala.prototype={
l(){var x=this.d
x.S$=$.ah()
x.R$=0
this.am()},
p(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=A.W(a4),a2=a1.ax,a3=A.cB(a4,C.aJ,y.y)
a3.toString
x=A.oh(a4)
A.W(a4)
w=A.mF(a4)
v=a4.N(y.I).w
u=d.a
t=u.r
s=a1.ok.z
r=new B.bbQ(x,w)
q=new B.bbR(r)
p=A.bc(y.C)
if(u.w)p.E(0,C.O)
u=d.a
if(u.y||u.z)p.E(0,C.T)
u=d.d
u.st(0,p)
o=y._
n=q.$1$2(new B.bbL(),p,o)
m=q.$1$2(new B.bbM(),p,o)
l=q.$1$2(new B.bbN(),p,y.W)
if(l==null)l=C.dZ
q=d.a
k=a0
if(q.y||q.z){s=s==null?a0:s.kE(n)
j=new A.i1(m,a0,a0,a0,l)
q=d.a
if(q.x&&!q.as)k=new B.X5(t,q.y?D.Bo:D.a_S,v,a0)}else{j=a0
i=a0
if(q.Q){k=new B.X5(t,D.a_T,v,a0)
if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kE(A.aG(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}}else if(q.w)if(s==null)s=i
else{q=a2.k3
s=s.kE(A.aG(97,q.v()>>>16&255,q.v()>>>8&255,q.v()&255))}else if(q.at){s=s==null?a0:s.kE(a2.b)
q=x.CW
if(q==null)q=w.gwp()
j=new A.i1(a0,a0,a0,a0,l.jc(q.cN(a2.b)))}}h=a3.ME(A.c_(d.a.c))
g=d.a.at?", "+a3.gbK():""
f=h+", "+a3.EC(d.a.c)+g
q=d.a
if(q.y)f=a3.aen(f)
else if(q.z)f=a3.aem(f)
a3=d.a
q=a3.y||a3.z
e=A.aF(C.W,A.br(a0,a0,a0,new A.jw(!0,A.e(h,a0,a0,a0,a0,s,a0,a0,a0),a0),!1,a0,a0,!1,a0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,f,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,q,a0,a0,a0,a0,a0,a0,C.N,a0),C.p,a0,a0,j,a0,a0,a0,a0,a0,a0,a0,a0)
if(k!=null)e=A.fW(e,a0,a0,k,C.am)
return!a3.w?A.bDO(!1,a0,!0,e,!0,l,!0,!1,a0,a3.d,a0,C.d9,a0,a0,a0,a0,a0,a3.f,a0,a0,a0,a0,a0,a0,a0,a0,new B.bbO(d),a0,a0,a0,new A.bt(new B.bbP(d,r),y.b),a0,a0,a0,u):e}}
B.Ji.prototype={
L(){return"_HighlightPainterStyle."+this.b}}
B.X5.prototype={
aO(d,e){var x,w,v,u,t,s,r=this.c
if(r===D.aSp)return
$.aq()
x=A.b4()
w=this.b
x.r=w.gt(w)
x.b=C.bm
v=this.d
A:{if(C.b6===v){w=!0
break A}if(C.z===v){w=!1
break A}w=null}B:{u=D.a_S===r
t=!(u&&w)
if(t){s=D.Bo===r
w=s&&!w}else{s=null
w=!0}if(w){r=e.a/2
d.he(new A.K(r,0,r+r,0+e.b),x)
break B}if(!u)w=t?s:D.Bo===r
else w=!0
if(w){d.he(new A.K(0,0,0+e.a/2,0+e.b),x)
break B}if(D.a_T===r){d.he(new A.K(0,0,0+e.a,0+e.b),x)
break B}break B}},
fh(d){return!1}}
B.ao5.prototype={
azb(d,e,f,g){var x,w,v,u=A.cB(d,C.aJ,y.y)
u.toString
x=this.as
w=B.bQk(u,x,e,f)
v=B.bQj(u,x,e,f,g)
if(e==null||f==null)return u.gaR()
switch(d.N(y.I).w.a){case 0:u=v+" \u2013 "+w
break
case 1:u=w+" \u2013 "+v
break
default:u=null}return u},
p(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
A.W(d)
x=A.cB(d,C.aJ,y.y)
x.toString
w=A.bE(d,C.dT,y.w).w.gj0(0)
v=A.oh(d)
A.W(d)
u=A.mF(d)
if(w===C.dA){t=v.w
s=t==null?u.gz4():t}else s=A.W(d).ok.f
r=v.r
if(r==null)r=u.gvP()
s=s==null?j:s.cN(r)
t=k.c
q=k.d
p=k.azb(d,t,q,k.e)
o=t!=null&&q!=null?x.MF(t)+" \u2013 "+x.MF(q):""
n=A.bOQ(k.Q,k.z,w===C.fa,w,o,s,p)
x=A.cR(A.e(k.y,j,j,j,j,j,j,j,j),j,j,k.w,j,j)
t=y.p
m=new A.dX(C.C4,new A.ab(C.eQ,new A.ee(C.mY,j,j,A.bEg(j,A.b([x,A.cR(A.e(k.x,j,j,j,j,j,j,j,j),j,j,k.r,j,j)],t),C.Uc,C.aX,0,8),j),j),j)
x=A.ba(d,C.b7)
x=x==null?j:x.gcQ()
x=(x==null?C.aS:x).mL(0,1.3).bi(0,14)
l=C.AI.aA(0,x/14)
switch(w.a){case 0:return A.jA(new B.biy(k,!0,l,n,m))
case 1:return A.aa(A.b([n,new A.hc(1,C.cu,A.a3(A.b([A.ao(k.f,1),m],t),C.ab,C.f,C.H),j)],t),C.ab,j,C.f,C.H,0,j,j)}}}
B.Xl.prototype={
U(){return new B.Jn()}}
B.Jn.prototype={
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
x=A.cB(x,C.aJ,y.y)
x.toString
w=t.f
if(w!=null){t.a.toString
w=x.MD(w)
t.d=w
t.a.toString
v=!t.Q
u=t.w
u===$&&A.a()
t.abh(u,w,v)
t.Q=v}w=t.r
if(w!=null){t.a.toString
x=x.MD(w)
t.e=x
w=t.x
w===$&&A.a()
t.abh(w,x,!1)}},
hU(){var x,w,v,u=this,t={},s=u.ac2(u.f)
t.a=s
x=u.ac2(u.r)
if(s==null&&x==null){w=u.f
w.toString
v=u.r
v.toString
if(w.kO(v)){s=u.a.Q
w=u.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
t.a=w.gba()}}u.G(new B.biB(t,u,x))
return t.a==null&&x==null},
a8h(d){var x=this.c
x.toString
x=A.cB(x,C.aJ,y.y)
x.toString
this.a.toString
return x.YR(d)},
ac2(d){var x,w,v=this
if(d==null){x=v.a.y
w=v.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
return w.gb4()}else if(!v.II(d)){x=v.a.z
w=v.c
w.toString
w=A.cB(w,C.aJ,y.y)
w.toString
return w.gaY()}return null},
II(d){var x=this.a
if(d.n5(x.e)||d.kO(x.f))return!1
return!0},
abh(d,e,f){var x=d.a.ae0(e)
d.jY(0,f?x.lm(A.dI(C.F,0,e.length,!1)):x)},
aE8(d){var x=this
x.G(new B.biA(x,d))
if(x.a.CW)x.hU()},
aBy(d){var x=this
x.G(new B.biz(x,d))
if(x.a.CW)x.hU()},
p(d){var x,w,v,u,t,s,r,q=this,p=null
A.W(d)
x=A.cB(d,C.aJ,y.y)
x.toString
w=A.vL(d)
v=w.p1
if(v==null)v=C.uW
u=q.w
u===$&&A.a()
t=w.dy
q.a.toString
s=x.gbs()
q.a.toString
r=x.gbz()
u=A.ao(A.cF(p,C.ae,!0,p,!0,C.o,p,A.cM(),u,p,p,p,p,p,2,A.f9(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.y,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,s,p,p,p,p,p,p,p,p,r,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.S,!0,p,!0,p,!1,p,C.ah,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaE7(),p,p,p,!1,p,p,!1,p,!0,p,C.x,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.a3,p,C.R,p,p,p,p),1)
s=q.x
s===$&&A.a()
q.a.toString
r=x.gbs()
q.a.toString
x=x.gbx()
return A.aa(A.b([u,C.an,A.ao(A.cF(p,C.ae,!1,p,!0,C.o,p,A.cM(),s,p,p,p,p,p,2,A.f9(p,v,p,p,p,p,p,p,!0,p,p,p,p,p,q.z,p,t,p,p,p,p,p,p,p,p,p,p,p,p,p,p,r,p,p,p,p,p,p,p,p,x,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),C.S,!0,p,!0,p,!1,p,C.ah,p,p,p,p,q.a.cx,p,p,p,1,p,p,!1,"\u2022",p,q.gaBx(),p,p,p,!1,p,p,!1,p,!0,p,C.x,p,p,p,p,p,p,p,p,p,p,p,p,!0,C.a3,p,C.R,p,p,p,p),1)],y.p),C.y,p,C.f,C.i,0,p,p)}}
B.a0w.prototype={
bc(d){this.bF(d)
this.qj()},
cw(){var x,w,v,u,t=this
t.e0()
x=t.cZ$
w=t.gmm()
v=t.c
v.toString
v=A.qn(v)
t.i7$=v
u=t.oz(v,w)
if(w){t.j2(x,t.fn$)
t.fn$=!1}if(u)if(x!=null)x.l()},
l(){var x,w=this
w.i6$.aD(0,new B.bwR())
x=w.cZ$
if(x!=null)x.l()
w.cZ$=null
w.am()}}
B.b1u.prototype={
Aw(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.SY(v,t+x.b,u+w,t,u,A.uJ(d.x))},
l_(d){var x=this,w=!0
if(d.a===x.a)if(d.b===x.b)if(d.c===x.c)w=d.d!==x.d
return w}}
B.a5W.prototype={
ade(d){return this.dx}}
var z=a.updateTypes(["~()","T<~>()","~(aV?)","~(D)","~(i)","rD(rD)","Ew(@)","~(aV)","~(mi)","~(mm)","~(js)"])
B.byK.prototype={
$1(d){return""+A.aW(d)+C.c.cM(C.e.j(A.be(d)),2,"0")+C.c.cM(C.e.j(A.c_(d)),2,"0")},
$S:988}
B.bzo.prototype={
$1(d){if(!this.a)return d
return d===D.fw?D.lm:D.fw},
$S:z+5}
B.bbJ.prototype={
$0(){var x=this.b
return this.a.w=new B.m0(x.a,x.b)},
$S:0}
B.bbG.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bbH.prototype={
$1(d){var x=A.co(y.f.a(d),y.N,y.z),w=A.oj(J.aj(x.h(0,"booking_date"))),v=A.b_(x.h(0,"tax_rate"))
if(v==null)v=null
if(v==null)v=19
x=A.b_(x.h(0,"gross"))
if(x==null)x=null
return new B.Ew(w,v,x==null?0:x)},
$S:z+6}
B.bbI.prototype={
$0(){return this.a.z=!1},
$S:0}
B.azh.prototype={
$1(d){J.fz(this.a,"signed_url",d)},
$S:213}
B.azi.prototype={
$1(d){},
$S:27}
B.azj.prototype={
$1(d){var x,w="snapshot"
if(d!=null){x=J.R(d,w)
if(y.f.b(x))J.fz(this.a,w,x)}},
$S:233}
B.azk.prototype={
$1(d){},
$S:27}
B.bBo.prototype={
$1(d){var x=this.b,w=this.a.a
return x==null?w:x.$2(d,w)},
$S:24}
B.bbD.prototype={
$0(){this.a.r.Hp(0,!0)},
$S:0}
B.bbC.prototype={
$0(){var x,w,v,u,t=null,s=this.a,r=s.gl7(),q=r.y
switch(q==null?A.l(r).i("bq.T").a(q):q){case C.e2:s.r.Hp(0,!1)
r.st(0,C.dI)
break
case C.dI:q=s.grP()
x=q.y
w=!1
if((x==null?A.l(q).i("bq.T").a(x):x)!=null){x=s.gny()
v=x.y
u=v==null
if((u?A.l(x).i("bq.T").a(v):v)!=null){w=q.y
if(w==null)w=A.l(q).i("bq.T").a(w)
w.toString
x=u?A.l(x).i("bq.T").a(v):v
x.toString
x=w.kO(x)}else x=w}else x=w
if(x)s.gny().st(0,t)
x=q.y
w=x==null
if((w?A.l(q).i("bq.T").a(x):x)!=null){if(w)x=A.l(q).i("bq.T").a(x)
x.toString
x=!s.II(x)}else x=!1
if(x){q.st(0,t)
s.gny().st(0,t)}else{q=s.gny()
x=q.y
w=x==null
if((w?A.l(q).i("bq.T").a(x):x)!=null){if(w)x=A.l(q).i("bq.T").a(x)
x.toString
x=!s.II(x)
s=x}else s=!1
if(s)q.st(0,t)}r.st(0,C.e2)
break
case C.i1:case C.eN:break}},
$S:0}
B.bbE.prototype={
$0(){var x=this.b
this.a.grP().st(0,x)
return x},
$S:0}
B.bbB.prototype={
$0(){var x=this.b
this.a.gny().st(0,x)
return x},
$S:0}
B.bbF.prototype={
$1(d){return this.a.a},
$S:24}
B.b8s.prototype={
$0(){this.a.y=!1},
$S:0}
B.b8t.prototype={
$0(){this.a.y=!0},
$S:0}
B.b8u.prototype={
$0(){var x,w=this.a,v=w.f
v=v!=null&&w.r==null&&!this.b.n5(v)
x=this.b
if(v){w.r=x
w.a.y.$1(x)}else{w.f=x
w.a.x.$1(x)
if(w.r!=null){w.r=null
w.a.y.$1(null)}}},
$S:0}
B.b8v.prototype={
$2(d,e){return this.a.a2X(d,e,!0)},
$S:87}
B.b8w.prototype={
$2(d,e){return this.a.a2X(d,e,!1)},
$S:87}
B.b8y.prototype={
$0(){if(this.b){var x=this.a
if(x.w==null)x.w=x.a.f}},
$S:0}
B.b8x.prototype={
$0(){var x,w,v=this.a,u=v.w
u.toString
x=this.b.a
w=v.aHe(u,x)
if(w!=null){v.w=w
v.r=x}},
$S:0}
B.bbQ.prototype={
$1$1(d,e){var x=d.$1(this.a)
return x==null?d.$1(this.b):x},
$1(d){return this.$1$1(d,y.z)},
$S:204}
B.bbR.prototype={
$1$2(d,e,f){return this.a.$1$1(new B.bbS(d,e,f),f)},
$2(d,e){return this.$1$2(d,e,y.z)},
$S:199}
B.bbS.prototype={
$1(d){var x=this.a.$1(d)
return x==null?null:x.Z(this.b)},
$S(){return this.c.i("0?(hX?)")}}
B.bbL.prototype={
$1(d){var x=d.gys()
return x},
$S:85}
B.bbM.prototype={
$1(d){var x=d.gvn()
return x},
$S:85}
B.bbP.prototype={
$1(d){return this.b.$1$1(new B.bbK(this.a,d),y.G)},
$S:22}
B.bbK.prototype={
$1(d){var x,w=null
if(this.a.a.Q){x=d.gFI()
w=x==null?null:x.Z(this.b)}else{x=d.gyt()
w=x==null?null:x.Z(this.b)}return w},
$S:195}
B.bbN.prototype={
$1(d){return d.ax},
$S:193}
B.bbO.prototype={
$0(){var x=this.a.a
return x.w4(x.c)},
$S:0}
B.biy.prototype={
$2(d,e){var x=this,w=Math.min(x.c.b,270),v=A.b([],y.p)
if(e.d>=w)v.push(x.d)
v.push(A.ao(x.a.f,1))
v.push(x.e)
return A.a3(v,C.ab,C.f,C.H)},
$S:989}
B.biB.prototype={
$0(){var x=this.b
x.y=this.a.a
x.z=this.c},
$S:0}
B.biA.prototype={
$0(){var x=this.a,w=this.b
x.d=w
w=x.a8h(w)
x.f=w
x.a.r.$1(w)},
$S:0}
B.biz.prototype={
$0(){var x=this.a,w=this.b
x.e=w
w=x.a8h(w)
x.r=w
x.a.w.$1(w)},
$S:0}
B.bwR.prototype={
$2(d,e){if(!d.a)d.T(0,e)},
$S:62};(function aliases(){var x=B.a0w.prototype
x.arj=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.W1.prototype,"gaJC","Jl",1)
x(v,"gawG","BC",1)
x(v=B.W0.prototype,"gIv","SD",0)
x(v,"gIo","Sv",0)
x(v,"gC8","SA",0)
w(v,"ga6s","aE9",2)
w(v,"ga68","aBz",2)
x(v=B.Vb.prototype,"gaLA","aLB",0)
w(v,"gaOG","aOH",7)
w(v=B.Vd.prototype,"gaBZ","aC_",3)
w(v,"gaC0","aC1",8)
w(v,"gaC2","aC3",9)
w(v,"gaBa","aBb",10)
w(B.XM.prototype,"gawJ","awK",3)
w(v=B.Jn.prototype,"gaE7","aE8",4)
w(v,"gaBx","aBy",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.C,[B.Ew,B.mR])
w(A.oe,[B.byK,B.bzo,B.bbH,B.azh,B.azi,B.azj,B.azk,B.bBo,B.bbF,B.bbQ,B.bbR,B.bbS,B.bbL,B.bbM,B.bbP,B.bbK,B.bbN])
w(A.J2,[B.rD,B.Ji])
v(B.m0,A.vl)
v(B.rn,A.b7)
v(B.W1,A.vc)
w(A.yr,[B.bbJ,B.bbG,B.bbI,B.bbD,B.bbC,B.bbE,B.bbB,B.b8s,B.b8t,B.b8u,B.b8y,B.b8x,B.bbO,B.biB,B.biA,B.biz])
w(A.B,[B.DL,B.ajP,B.al9,B.ao5])
w(A.H,[B.Nn,B.Va,B.Vc,B.XL,B.W4,B.Xl])
w(A.Y,[B.a0w,B.Vb,B.Vd,B.XM,B.ala,B.Jn])
v(B.W0,B.a0w)
w(A.ys,[B.b8v,B.b8w,B.biy,B.bwR])
v(B.WM,A.bJ)
w(A.aez,[B.bm9,B.b1u])
v(B.bmd,A.aeB)
v(B.X5,A.Nj)
v(B.a5W,A.So)
x(B.a0w,A.ll)})()
A.bvR(b.typeUniverse,JSON.parse('{"rn":{"b7":[],"H":[],"c":[]},"W1":{"Y":["rn"]},"DL":{"B":[],"c":[]},"Nn":{"H":[],"c":[]},"Va":{"H":[],"c":[]},"Vc":{"H":[],"c":[]},"WM":{"bJ":[],"by":[],"c":[]},"XL":{"H":[],"c":[]},"W4":{"H":[],"c":[]},"Xl":{"H":[],"c":[]},"Jn":{"Y":["Xl"]},"W0":{"Y":["Nn"]},"ajP":{"B":[],"c":[]},"Vb":{"Y":["Va"]},"Vd":{"Y":["Vc"]},"al9":{"B":[],"c":[]},"XM":{"Y":["XL"]},"ala":{"Y":["W4"]},"X5":{"aD":[]},"ao5":{"B":[],"c":[]},"a5W":{"B":[],"c":[]}}'))
var y=(function rtii(){var x=A.ay
return{V:x("ch<ce>"),Y:x("dJ<js>"),M:x("dJ<mi>"),O:x("dJ<mm>"),G:x("F"),v:x("bKx"),T:x("lW<aV>"),i:x("Ew"),I:x("jt"),E:x("eH"),S:x("Ox"),R:x("E<T<~>>"),s:x("E<i>"),p:x("E<c>"),k:x("E<~(ch<ce>)>"),A:x("bp<Y<H>>"),t:x("bp<Jn>"),D:x("v<a6<i,@>>"),j:x("v<@>"),P:x("a6<i,@>"),f:x("a6<@,@>"),y:x("aP"),w:x("kh"),a:x("bx"),c:x("c6<~(ch<ce>)>"),U:x("eZ<C?>"),N:x("i"),F:x("ny"),n:x("jd"),C:x("di"),Q:x("WM"),q:x("xz"),b:x("bt<F?>"),z:x("@"),_:x("F?"),X:x("lW<aV>?"),W:x("eX?"),u:x("i?"),H:x("~"),Z:x("~()")}})();(function constants(){D.CF=new B.bm9()
D.h1=new A.a4(62250,"MaterialIcons",null,!1)
D.DF=new B.rn(null)
D.a7I=new A.kV(0,null,null,null)
D.aAw=new A.f_("Schnittstelle","Buchungsstapel f\xfcr die Buchhaltung",null,null)
D.a9P=new A.iy(1,C.cU,D.aAw,null)
D.fw=new B.rD(0,"hinaus")
D.lm=new B.rD(1,"herein")
D.aaN=new B.rD(2,"weder")
D.aJs=new A.a8("DATEV-Export",null,null,null,null,null,null,null,null,null)
D.abb=new A.e1(D.aJs,null,null)
D.abr=new A.a4(57504,"MaterialIcons",null,!1)
D.lp=new A.a4(57912,"MaterialIcons",null,!1)
D.F6=new A.a4(59011,"MaterialIcons",null,!1)
D.Fx=new A.a4(62584,"MaterialIcons",null,!1)
D.adQ=new A.as(C.h0,14,C.ao,null,null)
D.FG=new A.as(C.yq,null,null,null,null)
D.Fm=new A.a4(61487,"MaterialIcons",null,!1)
D.EZ=new A.a4(57782,"MaterialIcons",null,!1)
D.afk=new A.as(D.EZ,18,null,null,null)
D.agM=new A.bw(null,null,null,"Beraternummer (optional)",null,null,null,"Nur falls in der Buchhaltungssoftware hinterlegt",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.agW=new A.bw(null,null,null,"Mandantennummer (optional)",null,null,null,"Bleibt sie leer, beim Import in der Software erg\xe4nzen",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.a9w=new A.ai(48,48,48,48)
D.k5=new A.ab(D.a9w,C.bD,null)
D.aCy=new A.I(1/0,64)
D.aCL=new A.I(496,164)
D.ZG=new A.cp(18,18,C.ng,null)
D.aKg=new A.a8("Freigabe angefordert.",null,null,null,null,null,null,null,null,null)
D.mz=new A.dm(D.aKg,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLf=new A.a8("Keine Ums\xe4tze im gew\xe4hlten Zeitraum.",null,null,null,null,null,null,null,null,null)
D.aDU=new A.dm(D.aLf,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.mK=new A.a8("Anfordern",null,null,null,null,null,null,null,null,null)
D.mL=new A.a8("Freigabe anfordern",null,null,null,null,null,null,null,null,null)
D.aMG=new A.a8("DATEV-Datei herunterladen",null,null,null,null,null,null,null,null,null)
D.aR7=new B.al9(null)
D.aSp=new B.Ji(0,"none")
D.a_S=new B.Ji(1,"highlightLeading")
D.Bo=new B.Ji(2,"highlightTrailing")
D.a_T=new B.Ji(3,"highlightAll")})()};
(a=>{a["drM60ob84nepQV4K+xuVBbBHd90="]=a.current})($__dart_deferred_initializers__);