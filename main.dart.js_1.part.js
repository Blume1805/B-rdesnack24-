((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
OU(d,e,f,g,h){return new A.a82(f,g,d,h,e,null)},
a82:function a82(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vi:function vi(d){this.a=d},
c8s(d){var w
if(x.f.b(d)){w=J.a2(d,"error")
if(typeof w=="string"&&C.c.aL(w).length!==0)return C.c.aL(w)}if(typeof d=="string"&&C.c.aL(d).length!==0)return C.c.aL(d)
return null},
EH:function EH(d){this.a=d},
bWD(d){var w=J.Y(d),v=B.b0(w.h(d,"total"))
v=v==null?null:C.d.Y(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.c0
w=J.cP(w,new A.aGH(),x.aI)
w=B.Q(w,w.$ti.i("au.E"))
return new A.ok(v,w)},
bvf(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iu(J.am(d))
return w==null?0:w},
pM:function pM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p},
ok:function ok(d,e){this.a=d
this.b=e},
aGH:function aGH(){},
bwa(d,e,f){var w,v=new A.bwb(f<0)
if(d==="expense")return v.$1(D.fs)
if(d==="revenue")return v.$1(D.lf)
w=B.iY(C.c.aL(e),null)
if(w!=null&&w>=1800&&w<=1999)return v.$1(C.e.ag(w,100)>=90?D.lf:D.fs)
return D.a9W},
bDM(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rw:function rw(d,e){this.a=d
this.b=e},
bwb:function bwb(d){this.a=d},
bWE(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.zj
w=x.f
v=x.N
u=x.z
t=A.aH1(B.cW(w.a(e.h(a0,"current")),v,u))
s=A.aH1(B.cW(w.a(e.h(a0,"prior_year")),v,u))
r=A.aH1(B.cW(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c0
p=J.cP(p,new A.aGI(),x.cZ)
p=B.Q(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c0
o=J.cP(o,new A.aGJ(),x.ef)
o=B.Q(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c0
q=J.cP(q,new A.aGK(),x.fB)
q=B.Q(q,q.$ti.i("au.E"))
n=B.cW(w.a(e.h(a0,"customer")),v,u)
m=B.b0(n.h(0,"purchases_count"))
m=m==null?null:C.d.Y(m)
if(m==null)m=0
l=A.pg(n.h(0,"app_gross"))
k=B.b0(n.h(0,"active_customers"))
k=k==null?null:C.d.Y(k)
if(k==null)k=0
n=A.pg(n.h(0,"avg_basket"))
u=B.cW(w.a(e.h(a0,"derived")),v,u)
v=A.pg(u.h(0,"gross_margin_pct"))
e=A.pg(u.h(0,"net_margin_pct"))
w=A.pg(u.h(0,"ebitda_margin_pct"))
j=A.pg(u.h(0,"cashflow_operating"))
i=A.bvg(u.h(0,"revenue_growth_yoy_pct"))
h=A.bvg(u.h(0,"revenue_growth_mom_pct"))
g=A.bvg(u.h(0,"result_growth_yoy_pct"))
u=A.bvg(u.h(0,"result_growth_mom_pct"))
f=B.b0(J.a2(d,"days"))
f=f==null?null:C.d.Y(f)
if(f==null)f=1
return new A.ol(t,s,r,p,o,q,new A.aBS(m,l,k,n),new A.aD_(v,e,w,j,i,h,g,u),f)},
pg(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iu(J.am(d))
return w==null?0:w},
bvg(d){if(d==null)return null
if(typeof d=="number")return d
return B.iu(J.am(d))},
qx:function qx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vU:function vU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wS:function wS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBS:function aBS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD_:function aD_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ol:function ol(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aGI:function aGI(){},
aGJ:function aGJ(){},
aGK:function aGK(){},
aH1(d){var w=J.Y(d),v=A.uy(w.h(d,"revenue_net_7")),u=A.uy(w.h(d,"revenue_net_19")),t=A.uy(w.h(d,"revenue_net")),s=A.uy(w.h(d,"expense_net")),r=A.uy(w.h(d,"result_net")),q=A.uy(w.h(d,"vat_collected")),p=A.uy(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.c0
w=J.cP(w,new A.aH2(),x._)
w=B.Q(w,w.$ti.i("au.E"))
return new A.on(v,u,t,s,r,q,p,w)},
uy(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iu(J.am(d))
return w==null?0:w},
D7:function D7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
on:function on(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aH2:function aH2(){},
bWC(d){return new A.yP(d,new B.it(x.c_),C.dQ)},
bw4:function bw4(){},
bw5:function bw5(){},
bxZ:function bxZ(){},
bw6:function bw6(){},
bw2:function bw2(){},
bw3:function bw3(){},
bw1:function bw1(){},
yP:function yP(d,e,f){this.r=d
this.a=e
this.f=f},
aGG:function aGG(d,e,f){this.a=d
this.b=e
this.c=f},
aGF:function aGF(d,e,f){this.a=d
this.b=e
this.c=f},
vh:function vh(d,e){this.d=d
this.a=e},
xb:function xb(d,e){this.a=d
this.b=e},
alT:function alT(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bdr:function bdr(d){this.a=d},
bdm:function bdm(d){this.a=d},
bdl:function bdl(d,e){this.a=d
this.b=e},
bdn:function bdn(d){this.a=d},
bdk:function bdk(d){this.a=d},
bdq:function bdq(){},
bdp:function bdp(){},
bdo:function bdo(d){this.a=d},
bdj:function bdj(d){this.a=d},
alS:function alS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bdf:function bdf(d){this.a=d},
bdg:function bdg(d){this.a=d},
bdh:function bdh(d){this.a=d},
bdi:function bdi(d){this.a=d},
x5:function x5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J6:function J6(d,e,f){this.c=d
this.d=e
this.a=f},
bhg:function bhg(){},
bhh:function bhh(){},
bhi:function bhi(){},
bhj:function bhj(){},
bhk:function bhk(){},
bhl:function bhl(){},
bhm:function bhm(){},
aj0:function aj0(d,e){this.c=d
this.a=e},
xe:function xe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bWF(){return new A.yQ(null)},
Wz(d,e,f,g,h){return new A.an1(e,h,g,f,d,null)},
yQ:function yQ(d){this.a=d},
aH0:function aH0(d){this.a=d},
aGS:function aGS(d,e,f){this.a=d
this.b=e
this.c=f},
aGT:function aGT(d,e,f){this.a=d
this.b=e
this.c=f},
aGU:function aGU(d){this.a=d},
aGR:function aGR(){},
aGV:function aGV(d){this.a=d},
aGW:function aGW(d){this.a=d},
aGQ:function aGQ(){},
aGX:function aGX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aH_:function aH_(){},
aGZ:function aGZ(){},
aGY:function aGY(){},
aGP:function aGP(d,e){this.a=d
this.b=e},
aGN:function aGN(d){this.a=d},
aGO:function aGO(d){this.a=d},
ahz:function ahz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
an1:function an1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
apl:function apl(d,e){this.e=d
this.a=e},
bkv:function bkv(d){this.a=d},
bkw:function bkw(d){this.a=d},
bkx:function bkx(d,e,f){this.a=d
this.b=e
this.c=f},
bku:function bku(){},
JB:function JB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
K0:function K0(d,e){this.c=d
this.a=e},
brd:function brd(d){this.a=d},
bre:function bre(d,e){this.a=d
this.b=e},
brc:function brc(d){this.a=d},
ahx:function ahx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
IH:function IH(d,e){this.c=d
this.a=e},
bGr(d,e,f){return new A.a2j(e,f,d,null)},
bD2(d,e){var w=$.de().al(Math.abs(d))
return e===D.fs?"-"+w:w},
bNJ(d,e){var w
if(e===D.fs)return d==="revenue"||d==="expense"?C.a6:C.n
if(e===D.lf)w=d==="revenue"||d==="expense"
else w=!1
if(w)return C.am
return C.n},
c8i(d,e){if(d==="expense")return e===D.fs?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fs?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fs)return"Privatentnahme"
if(e===D.lf)return"Privateinlage"
return A.bDM(d)},
a2j:function a2j(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bCY(d,e,f,g,h){var w=null
return B.jf(w,w,!0,w,new A.bva(h,g,e,f),d,w,!0,!0,x.H)},
jU(d,e,f,g,h,i,j,k,l,m,n){return new A.anC(g,n,i,e,d,m,f,k,l,j,null)},
awz(d,e){return A.c6f(d,e)},
c6f(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$awz=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bb(D.aBA)
t=4
o=e.aF(0,$.bW(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fY("finance-balance-sync",B.A(n,n)),$async$awz)
case 7:r=g
q=B.cW(x.f.a(r.a),x.N,n)
l.MA()
if(J.d(J.a2(q,"configured"),!1)){l.bb(D.aBE)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.byT()
if(e.e==null)B.S(B.X(y.b))
e.gcd().c_(o)
l.bb(B.c2(null,null,null,null,null,C.r,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.bb(B.c2(null,null,null,null,null,C.r,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.MA()
l.bb(B.c2(null,null,null,null,null,C.r,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$awz,v)},
awC(d,e,f){var w=0,v=B.q(x.H)
var $async$awC=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jf(null,null,!0,null,new A.bv8(f,e,e.aF(0,$.bW(),x.A)),d,null,!0,!0,x.H),$async$awC)
case 2:return B.o(null,v)}})
return B.p($async$awC,v)},
a83:function a83(d){this.a=d},
aLQ:function aLQ(){},
aLP:function aLP(){},
aLO:function aLO(){},
J1:function J1(d,e){this.c=d
this.a=e},
bgR:function bgR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgG:function bgG(){},
bgH:function bgH(){},
bgI:function bgI(){},
bgJ:function bgJ(){},
bgK:function bgK(){},
bgL:function bgL(){},
bgM:function bgM(){},
bgN:function bgN(){},
bgO:function bgO(d){this.a=d},
bgP:function bgP(d){this.a=d},
bgQ:function bgQ(d){this.a=d},
bgS:function bgS(d,e){this.a=d
this.b=e},
bgT:function bgT(d,e){this.a=d
this.b=e},
bva:function bva(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bv9:function bv9(d){this.a=d},
amj:function amj(d){this.a=d},
anC:function anC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.a=n},
bgU:function bgU(d,e){this.a=d
this.b=e},
VE:function VE(d,e,f){this.c=d
this.d=e
this.a=f},
Zm:function Zm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bqh:function bqh(){},
bqi:function bqi(){},
bqj:function bqj(d){this.a=d},
UO:function UO(d,e,f){this.c=d
this.d=e
this.a=f},
b7b:function b7b(){},
b7d:function b7d(d){this.a=d},
b7e:function b7e(d){this.a=d},
b7c:function b7c(){},
V4:function V4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8b:function b8b(){},
b8c:function b8c(){},
b8d:function b8d(){},
b8e:function b8e(d){this.a=d},
ao7:function ao7(d,e){this.c=d
this.a=e},
bhA:function bhA(){},
bhB:function bhB(){},
akj:function akj(d,e){this.c=d
this.a=e},
Cz:function Cz(d,e,f){this.c=d
this.d=e
this.a=f},
au_:function au_(d,e){this.c=d
this.a=e},
bsw:function bsw(){},
bsx:function bsx(){},
x9:function x9(d,e){this.c=d
this.a=e},
ait:function ait(d,e){this.e=d
this.a=e},
b5v:function b5v(){},
b5u:function b5u(){},
b5t:function b5t(d,e,f){this.a=d
this.b=e
this.c=f},
b5n:function b5n(d,e){this.a=d
this.b=e},
b5o:function b5o(d,e){this.a=d
this.b=e},
b5w:function b5w(d){this.a=d},
b5x:function b5x(d){this.a=d},
b5p:function b5p(){},
b5q:function b5q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5r:function b5r(d,e){this.a=d
this.b=e},
b5s:function b5s(d,e,f){this.a=d
this.b=e
this.c=f},
bv8:function bv8(d,e,f){this.a=d
this.b=e
this.c=f},
bv7:function bv7(d){this.a=d},
Bz:function Bz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uq:function Uq(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b5h:function b5h(){},
b5i:function b5i(d){this.a=d},
b5j:function b5j(d){this.a=d},
b5l:function b5l(d,e){this.a=d
this.b=e},
b5k:function b5k(d,e){this.a=d
this.b=e},
b5m:function b5m(d){this.a=d},
bk:function bk(){},
bGp(d){return new A.LD(d,C.an,C.bY,null,null)},
LD:function LD(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ur:function Ur(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e5$=f
_.c5$=g
_.c=_.a=null},
b5y:function b5y(d,e){this.a=d
this.b=e},
b5z:function b5z(d){this.a=d},
az9(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.an9:f,p=a0==null?16:a0,o=d==null?D.a_W:d,n=g==null,m=n?A.bzm(r,r,r,r,r,r,r,r):g,l=a3==null?D.XR:a3
n=n?A.bzm(r,r,r,r,r,r,r,r):g
w=j==null?D.Eg:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.K:e
return new A.o2(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.C8,s,w,i,n)},
azg(d,e,f,g,h){var w=d==null?D.ana:d,v=e==null?2:e,u=g==null?C.lC:g
return new A.fN(h,f===!0,w,v,u)},
bTU(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.azg(A.kE(d.c,e.c,f,A.c70(),x.fj),B.ag(d.d,e.d,f),!1,A.kE(d.e,e.e,f,A.a0H(),x.S),w)},
a2a(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Te
else w=h
v=m==null
u=v?8:m
t=$.lE()
s=t.aY_(f,v?8:m)
t=t.aY0(g,v?8:m)
v=d==null?A.bGn(r,r,r,r,r):d
return new A.iq(q,l,w,j,u,s,e,t,v,k==null?D.anb:k)},
bTV(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ag(d.e,e.e,f),q=B.mQ(d.f,e.f,f),p=A.kE(d.r,e.r,f,A.a0H(),x.S),o=B.bZ(d.w,e.w,f),n=B.ag(d.a,e.a,f),m=B.ag(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ag(w.b,v.b,f)
t=B.ag(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a2a(A.bGn(v,u,null,!1,t),p,q,o,s,n,null,A.kE(d.y,e.y,f,A.c71(),x.G),m,r)},
bTW(d,e,f){var w,v,u=B.ag(d.a,e.a,f)
u.toString
w=B.ag(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mO(u,w,v,B.bZ(d.d,e.d,f))},
bGn(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dw
else w=d
return new A.a26(g===!0,v,u,w,f)},
bzm(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2c(4,C.fP,16,D.xW,0,120,A.c73(),!1,!1,D.ZM,0,C.J,A.c72())
else w=k
v=j==null?C.l5:j
return new A.a2b(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c7R(d,e,f,g){var w=null,v=B.j5(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.D,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dp(C.d.j(f.b),v)},
c7Q(d){return A.aBg(D.dw,15)},
o2:function o2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.ch=d
_.CW=e
_.cx=f
_.cy=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.w=m
_.x=n
_.y=o
_.z=p
_.Q=q
_.as=r
_.at=s
_.a=t
_.b=u},
az8:function az8(d,e){this.a=d
this.b=e},
fN:function fN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
azh:function azh(){},
azi:function azi(){},
iq:function iq(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
mO:function mO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a26:function a26(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2b:function a2b(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
af0:function af0(d,e){this.a=d
this.b=e},
a2c:function a2c(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p},
Dp:function Dp(d,e){this.a=d
this.b=e},
LE:function LE(d){this.a=d},
a2d:function a2d(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
y1:function y1(d,e){this.a=d
this.b=e},
aip:function aip(){},
aiw:function aiw(){},
aix:function aix(){},
aiz:function aiz(){},
aiA:function aiA(){},
aiB:function aiB(){},
aiC:function aiC(){},
aiD:function aiD(){},
aiE:function aiE(){},
azj:function azj(d){this.a=d},
azk:function azk(){},
uU:function uU(d,e,f){this.a=d
this.b=e
this.c=f},
aiy:function aiy(){},
azl:function azl(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
azm:function azm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azn:function azn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a76:function a76(d){this.b=d},
a29:function a29(d,e,f){this.d=d
this.e=e
this.a=f},
aca:function aca(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aG=_.ak=_.ar=$
_.dy=j
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=k
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
c7S(d,e){var w=null
return new A.Sn(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
az1(d,e,f){var w,v,u,t=B.ag(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ag(w.c,v.c,f)
u.toString
return new A.pp(t,e.b,new A.qm(v.a,v.b,u,B.ag(w.d,v.d,f)),!0)},
bHN(d,e,f){var w=A.az1(d.b,e.b,f),v=A.az1(d.d,e.d,f),u=A.az1(d.e,e.e,f)
return new A.vk(e.a,w,A.az1(d.c,e.c,f),v,u)},
bWH(d,e,f){var w,v
if(d.k(0,D.fR))return e
if(e.k(0,D.fR))return d
w=B.ag(d.a,e.a,f)
w.toString
v=B.ag(d.b,e.b,f)
v.toString
return new A.eC(w,v)},
bHL(d,e,f){return new A.yS(e.a,!0,B.ag(d.c,e.c,f),e.d,e.e,e.f,B.ag(d.r,e.r,f),e.w,e.x)},
cah(d){return!0},
c7V(d){return D.a9K},
bHM(d,e,f,g){var w
if(d==null)w=f==null?C.F:null
else w=d
return new A.pN(w,f,g,e)},
bJK(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c6X(),x.dv)
v.toString
w=A.kE(d.b,e.b,f,A.c6Z(),x.bN)
w.toString
return new A.QW(v,w)},
bXt(d,e,f){var w,v,u,t=B.ag(d.a,e.a,f)
t.toString
w=B.ag(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.ry(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.n7(t,w,v,u)},
c1L(d,e,f){var w,v,u,t=B.ag(d.a,e.a,f)
t.toString
w=B.ag(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.ry(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.nx(t,w,v,u)},
bXs(d,e,f){var w,v,u,t,s,r=B.ag(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pG(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.bXq(B.bze(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.ry(d.b,e.b,f)
w=B.ag(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0H(),x.S)
if(u==null)u=v==null?C.F:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c1K(d,e,f){var w,v,u,t,s,r=B.ag(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pG(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.c1I(B.bze(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.ry(d.b,e.b,f)
w=B.ag(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0H(),x.S)
if(u==null)u=v==null?C.F:null
return new A.lm(r,e.f,e.r,t,e.x,u,v,w,s)},
bXq(d,e,f,g,h,i){return new A.a7h(f,!1,g,i,d,e)},
bXr(d){return C.d.ai(d.e,1)},
c1I(d,e,f,g,h,i){return new A.afq(f,!1,g,i,d,e)},
c1J(d){return C.d.ai(d.e,1)},
bHH(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c6W(),x.cm)
v.toString
w=A.kE(d.b,e.b,f,A.c6Y(),x.es)
w.toString
return new A.Nx(v,w,!0)},
bWG(d,e,f){return new A.NG(d,e==null?4:e,f)},
a2_:function a2_(){},
Do:function Do(d,e){this.a=d
this.b=e},
tN:function tN(d,e){this.r=d
this.w=e},
qm:function qm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adB:function adB(){},
pp:function pp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vk:function vk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eC:function eC(d,e){this.a=d
this.b=e},
yS:function yS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pN:function pN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af2:function af2(){},
QW:function QW(d,e){this.a=d
this.b=e},
n7:function n7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kW:function kW(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lm:function lm(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a7h:function a7h(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afq:function afq(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Nx:function Nx(d,e,f){this.a=d
this.b=e
this.c=f},
vj:function vj(){},
NG:function NG(d,e,f){this.a=d
this.b=e
this.c=f},
aik:function aik(){},
aio:function aio(){},
alD:function alD(){},
alZ:function alZ(){},
am_:function am_(){},
am1:function am1(){},
am2:function am2(){},
amS:function amS(){},
amR:function amR(){},
amT:function amT(){},
aqw:function aqw(){},
asp:function asp(){},
asq:function asq(){},
au3:function au3(){},
auL:function auL(){},
auK:function auK(){},
auM:function auM(){},
ayY:function ayY(){},
Ly:function Ly(){},
Lz:function Lz(d,e,f){this.c=d
this.d=e
this.a=f},
az_:function az_(d){this.a=d},
ayZ:function ayZ(d){this.a=d},
Sn:function Sn(d,e,f){this.c=d
this.e=e
this.a=f},
Za:function Za(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c0f(d,e,f){var w=B.af(f),v=w.i("ac<1,k0>")
v=B.Q(new B.ac(f,new A.b_J(),v),v.i("au.E"))
w=w.i("ac<1,c>")
w=B.Q(new B.ac(f,new A.b_K(),w),w.i("au.E"))
return new A.adC(e,d,v,w,null)},
bTS(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a7U(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tK(v,C.av,C.x,new B.kx(1),v,v,v,v,C.bE,v)
u=new A.a20(f,d,e,u,t,!0,0,v,v,new B.br(),B.aL(x.j))
u.bl()
return u},
adC:function adC(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_J:function b_J(){},
b_K:function b_K(){},
a20:function a20(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.Wx$=h
_.aTS$=i
_.dq$=j
_.ah$=k
_.dS$=l
_.dy=m
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=n
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
bh_:function bh_(d,e){this.a=d
this.b=e},
az0:function az0(){},
k0:function k0(d,e){this.a=d
this.b=e},
o1:function o1(d,e){this.a=d
this.b=e},
ail:function ail(){},
aim:function aim(){},
ain:function ain(){},
Uo:function Uo(){},
AY:function AY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_L:function b_L(d){this.a=d},
b_M:function b_M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_N:function b_N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6o(d,e){var w=d==null?B.cj(C.F,1):d
return new A.a6n(e!==!1,w)},
a2f:function a2f(){},
a6n:function a6n(d,e){this.a=d
this.b=e},
NN:function NN(){},
a6p:function a6p(){},
azw:function azw(){},
aFW:function aFW(d,e){this.a=d
this.b=e},
aiH:function aiH(){},
alW:function alW(){},
alX:function alX(){},
am3:function am3(){},
LH:function LH(){},
w7:function w7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hw:function hw(){},
a6t:function a6t(d){this.a=d},
a6u:function a6u(d){this.a=d},
a6v:function a6v(d){this.a=d},
NI:function NI(){},
NJ:function NJ(){},
a6y:function a6y(d){this.a=d},
NL:function NL(){},
NM:function NM(d){this.a=d},
a6s:function a6s(d){this.a=d},
a6r:function a6r(d){this.a=d},
NH:function NH(d){this.a=d},
a6w:function a6w(d){this.a=d},
a6x:function a6x(d){this.a=d},
NK:function NK(d){this.a=d},
GM:function GM(){},
aVY:function aVY(d){this.a=d},
aVZ:function aVZ(d){this.a=d},
aW_:function aW_(d){this.a=d},
aW0:function aW0(d){this.a=d},
aW1:function aW1(d){this.a=d},
aW2:function aW2(d){this.a=d},
aW3:function aW3(d){this.a=d},
aW4:function aW4(d){this.a=d},
aW5:function aW5(d){this.a=d},
aW6:function aW6(d){this.a=d},
aW7:function aW7(d){this.a=d},
aW8:function aW8(d){this.a=d},
aW9:function aW9(d){this.a=d},
P6:function P6(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
WU:function WU(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e5$=g
_.c5$=h
_.c=_.a=null},
bh5:function bh5(d,e){this.a=d
this.b=e},
bh3:function bh3(d){this.a=d},
bh4:function bh4(d,e){this.a=d
this.b=e},
bh2:function bh2(){},
bh6:function bh6(d){this.a=d},
bAF(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.K:d
return new A.q0(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aM0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Te:u
else w=g
v=f==null?A.az7(!1,u,0,u,!1,D.wg):f
w=new A.eb(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.az7(!1,u,0,u,!1,D.wg):d,j,a0,i,s,!1,p)
w.arK(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bXV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ag(d.x,e.x,f)
m.toString
w=A.bGo(d.ay,e.ay,f)
v=A.bGo(d.ch,e.ch,f)
u=B.ag(d.as,e.as,f)
u.toString
t=e.CW
s=A.kE(d.cy,e.cy,f,A.a0H(),x.S)
r=B.a0(d.r,e.r,f)
q=B.ry(d.w,e.w,f)
p=A.kE(d.a,e.a,f,A.c6V(),x.cw)
p.toString
o=B.bKi(d.db,e.db,f)
o.toString
n=B.ag(d.dy.a,e.dy.a,f)
n.toString
return A.aM0(v,m,w,r,e.z,s,new A.yR(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.P7(n),!1,u,o,!0,e.cx,p)},
az7(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aH(C.d.aN(127.5),D.dw.A()>>>16&255,D.dw.A()>>>8&255,D.dw.A()&255):null
else w=e
return new A.a28(h,w,g,i,f,!1)},
bGo(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.ry(v.b,u.b,f),r=B.ag(v.c,u.c,f)
r.toString
r=A.bHM(t,A.kE(v.d,u.d,f,A.a0H(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.ry(d.c,e.c,f)
v=B.ag(d.e,e.e,f)
v.toString
return A.az7(!1,s,v,u,e.a,new A.LC(!1,r,w.c,!0))},
bTX(d,e,f){var w=B.a0(d.c,e.c,f),v=B.ry(d.d,e.d,f)
if(w==null)w=v==null?B.aH(C.d.aN(127.5),D.dw.A()>>>16&255,D.dw.A()>>>8&255,D.dw.A()&255):null
return new A.mP(e.a,e.b,w,v)},
cai(d){return!0},
bCJ(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jy)return A.bDy(w.a,A.bAj(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dw:w},
c4E(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jy)w=A.bDy(v.a,A.bAj(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dw}return A.aBg(w,40)},
bMP(d,e,f,g,h){var w,v=A.bCJ(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jy)w=A.bDy(u.a,A.bAj(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dw}u=A.aBg(w,40)
return new A.NG(v,h==null?4:h,u)},
cag(d,e){return!0},
c6I(d,e){return Math.abs(d.a-e.a)},
c7Y(d,e){var w=J.cP(e,new A.bvT(d),x.bY)
w=B.Q(w,w.$ti.i("au.E"))
return w},
c7U(d,e){return-1/0},
c7T(d,e){return d.a[e].b},
bO_(d){var w=J.cP(d,new A.bvQ(),x.fT)
w=B.Q(w,w.$ti.i("au.E"))
return w},
bNZ(d){return A.aBg(D.dw,15)},
q0:function q0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.ch=d
_.CW=e
_.cx=f
_.cy=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.w=m
_.x=n
_.y=o
_.z=p
_.Q=q
_.as=r
_.at=s
_.a=t
_.b=u},
eb:function eb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=t
_.dx=u
_.dy=v},
aM1:function aM1(){},
P7:function P7(d){this.a=d},
a28:function a28(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mP:function mP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LC:function LC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yR:function yR(d,e,f){this.a=d
this.b=e
this.c=f},
aLR:function aLR(d,e){this.a=d
this.b=e},
a6q:function a6q(){},
Fj:function Fj(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.a=k
_.b=l
_.c=m
_.d=n},
bvT:function bvT(d){this.a=d},
bvS:function bvS(d){this.a=d},
a8g:function a8g(){},
bvQ:function bvQ(){},
na:function na(){},
qv:function qv(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rL:function rL(d,e){this.a=d
this.b=e},
tP:function tP(d,e){this.a=d
this.b=e},
Hd:function Hd(d){this.a=d},
P8:function P8(d){this.a=d},
zF:function zF(d,e){this.a=d
this.b=e},
aiu:function aiu(){},
aiv:function aiv(){},
aiJ:function aiJ(){},
alY:function alY(){},
am0:function am0(){},
anK:function anK(){},
anL:function anL(){},
anM:function anM(){},
anO:function anO(){},
anP:function anP(){},
anQ:function anQ(){},
anR:function anR(){},
aso:function aso(){},
au2:function au2(){},
aM2:function aM2(d){this.a=d},
aM3:function aM3(){},
aM4:function aM4(){},
zG:function zG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
anN:function anN(){},
aM5:function aM5(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aM8:function aM8(){},
aM6:function aM6(d,e,f){this.a=d
this.b=e
this.c=f},
aM7:function aM7(d,e,f){this.a=d
this.b=e
this.c=f},
aM9:function aM9(){},
vQ:function vQ(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8f:function a8f(d,e,f){this.d=d
this.e=e
this.a=f},
acn:function acn(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aG=_.ak=_.ar=$
_.dy=j
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=k
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
bzl(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.af(o),l=new B.ac(o,new A.aza(),m.i("ac<1,G>")).jJ(0,new A.azb()),k=e-l,j=new A.aze(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aB(0,new A.azc(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aB(0,new A.azd(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aza:function aza(){},
azb:function azb(){},
aze:function aze(d,e,f){this.a=d
this.b=e
this.c=f},
azf:function azf(d,e,f){this.a=d
this.b=e
this.c=f},
azc:function azc(d,e,f){this.a=d
this.b=e
this.c=f},
azd:function azd(d,e,f){this.a=d
this.b=e
this.c=f},
bAj(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.af(w).i("iX<1>")).aB(0,new A.aJd(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aJd:function aJd(d,e){this.a=d
this.b=e},
aCt(d,e){var w,v
if(e!=null){w=B.af(e).i("ac<1,G>")
v=B.Q(new B.ac(e,new A.aCu(),w),w.i("au.E"))
return A.c7L(d,new A.a2O(v,x.cX))}else return d},
aCu:function aCu(){},
c0S(d,e){var w=!0
if(d!==C.f8)if(!(d===C.av&&e===C.x))w=d===C.iA&&e===C.b1
if(w)return D.Et
else{w=!0
if(d!==C.hy)if(!(d===C.iA&&e===C.x))w=d===C.av&&e===C.b1
if(w)return D.Eu
else return D.aar}},
Ob:function Ob(d,e){this.a=d
this.b=e},
a2F:function a2F(d,e){this.a=d
this.b=e},
zK:function zK(d,e){this.a=d
this.$ti=e},
anY:function anY(){},
c7L(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.co(j.r,C.ag,k,k,h)
for(j=B.Nr(d),w=B.b([],x.I),v=new B.Nt(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.S(B.fE('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Ns(v,r)
v.Dk()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dk()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eq(B.b([],i),!0,s)
p=new B.KT(new B.co(t,p,k,new B.aqU([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a2O:function a2O(d,e){this.a=d
this.b=0
this.$ti=e},
b3f:function b3f(){},
bA7(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fR))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bU_(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gen(v)===0){v=d.a.a
if(v.gen(v)===0){v=d.b.a
if(v.gen(v)===0){v=d.c.a
v=v.gen(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aBg(d,e){var w=1-e/100
return B.aH(d.gfH(d),C.d.aN(d.gO4()*w),C.d.aN(d.gGj()*w),C.d.aN(d.gKv()*w))},
bHK(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bA8(d){var w=d.a,v=w?A.b_I(d.b):0,u=w?A.b_I(d.c):0,t=w?A.b_I(d.d):0
return new B.ai(v,u,t,w?A.b_I(d.e):0)},
bZ8(d){var w
if(d.c===0){d.seX(null)
w=B.c4(d.r)
d.r=B.aH(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
bB1(d,e,f,g){var w
if(f!=null){d.r=C.F.gq(0)
d.seX(f.mN(0,g))}else{w=e==null?C.K:e
d.r=w.gq(w)
d.seX(null)}},
b_I(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kE(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.ke(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.ke(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c94(d,e,f){return C.d.aN(d+(e-d)*f)},
bDy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.ke(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gae(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a82.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aJ:C.o
r=r?C.m:C.a4
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bQ(t.x,C.m,s,18),C.aN],w))
v.push(B.as(new B.dL(t.c,!1,s),1))
v=B.ah(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.i(t.d,s,1,C.ac,s,B.by(u==null?C.h:u,22,C.D),s,s,s)],w)
return B.bj(r,B.a7(w,C.z,C.ij,C.i),q,s,C.aj,s,s,3)}}
A.vi.prototype={
LR(d){return this.aTR(d)},
aTR(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LR=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ea("finance_summary",B.a6(["p_from",E.om(d.a),"p_to",E.om(d.b)],s,r),r),$async$LR)
case 3:q=f
if(q==null){u=D.ari
w=1
break}if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.atx
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LR,v)},
LQ(d){return this.aTQ(d)},
aTQ(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LQ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ea("finance_kpis",B.a6(["p_from",E.om(d.a),"p_to",E.om(d.b)],s,r),r),$async$LQ)
case 3:q=f
if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.aqZ
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LQ,v)},
LP(d){return this.aTP(d)},
aTP(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LP=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ea("finance_bookings_list",B.a6(["p_from",E.om(d.a),"p_to",E.om(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$LP)
case 3:q=f
if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.arn
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LP,v)},
pG(d){return this.ars(d)},
ars(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fY("sevdesk-sync",B.a6(["from",E.om(d.a),"to",E.om(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.Y(B.fs(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
LL(d){return this.aTG(d)},
aTG(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fY("finance-export-pdf",B.a6(["from",E.om(d.a),"to",E.om(d.b)],s,s)),$async$LL)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aF(J.a2(r,"base64"))
w=1
break}throw B.e(B.dY("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LL,v)}}
A.EH.prototype={
Gd(d){return this.akt(d)},
akt(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gd=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LR(d),$async$Gd)
case 7:q=f
o=A.aH1(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gd,v)},
G8(d){return this.ake(d)},
ake(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G8=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LQ(d),$async$G8)
case 7:q=f
o=A.bWE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G8,v)},
FZ(d){return this.ak0(d)},
ak0(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FZ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LP(d),$async$FZ)
case 7:q=f
o=A.bWD(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FZ,v)},
pG(d){return this.art(d)},
art(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pG=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pG(d),$async$pG)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.a1(n)
p=r.Bv(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
LK(d){return this.aTF(d)},
aTF(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LK=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LL(d),$async$LK)
case 7:q=f
o=C.iW.cG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LK,v)},
Bv(d){var w,v
if(d instanceof B.vg)return d
if(d instanceof B.mg){if(d.b==="42501")return new B.wb(d.a)
return new B.ts(d.a)}if(d instanceof B.O_){w=A.c8s(d.b)
v=""+d.a
return new B.ts(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.Bq("Unerwarteter Fehler: "+B.j(d))},
$iaGM:1}
A.pM.prototype={
gam7(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbs(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.ok.prototype={
gbs(){return[this.a,this.b]}}
A.rw.prototype={
L(){return"Geldfluss."+this.b}}
A.qx.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vU.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wS.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBS.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aD_.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ol.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.D7.prototype={
gbs(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.on.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yP.prototype={
H8(d){return this.arr(0)},
arr(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H8=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sec(0,C.dD)
s=t.r
r=s.aF(0,$.qW(),x.P)
p.a=null
w=3
return B.k(B.po(new A.aGG(p,t,r),x.H),$async$H8)
case 3:t.sec(0,f)
q=t.f
if(q.ghe(q)==null){q=$.byV()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bFf())
s.c_($.byU())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$H8,v)},
LJ(){return this.aTE()},
aTE(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LJ=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sec(0,C.dD)
s=t.r.aF(0,$.qW(),x.P)
q.a=null
w=3
return B.k(B.po(new A.aGF(q,t,s),x.H),$async$LJ)
case 3:t.sec(0,e)
r=t.f
u=r.ghe(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LJ,v)}}
A.vh.prototype={
U(){return new A.alT(D.B8)}}
A.xb.prototype={
L(){return"_Filter."+this.b}}
A.alT.prototype={
gSt(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbK(),t=u.aj($.qW(),x.P),s=u.aj($.byU(),x.e)
u=$.dC()
return B.dh(D.aai,v,B.qg(B.dl(B.b([new B.fF("Zeitraum",u.al(t.a)+" \u2013 "+u.al(t.b),v,v),C.O,new A.alS(w.w,w.gSt(),new A.bdm(w),new A.bdn(w),v),C.aC,B.dd(s,new A.bdo(w),new A.bdp(),new A.bdq(),!1,!0,!1,x.m,x.l)],x.p),v,C.cI,v,C.G,!1),C.m,new A.bdr(w)),v,v,v)},
asN(d){var w=B.af(d).i("b_<1>")
w=B.Q(new B.b_(d,new A.bdj(this),w),w.i("t.E"))
return w}}
A.alS.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.x5("Alle",t===D.B8,new A.bdf(v),u),new A.x5("Ausgaben",t===D.a_b,new A.bdg(v),u),new A.x5("Erl\xf6se",t===D.a_c,new A.bdh(v),u),new A.x5("Privat",t===D.a_d,new A.bdi(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.x5("Konto "+w+" \xd7",!0,v.f,u))
return B.jS(C.cb,t,C.df,6,8)}}
A.x5.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aJ:C.a5,s=B.ao(9999),r=B.ao(9999),q=B.ao(9999),p=B.cj(v?C.m:C.a4,1)
return B.bv(w,!0,w,B.dm(!1,C.V,!0,s,B.dV(!1,r,!0,B.aK(w,B.i(u,w,w,w,w,B.x(C.h,13,C.D),w,w,w),C.q,w,w,new B.aD(w,w,p,q,w,w,C.A),w,w,w,w,C.fO,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.b6),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.J6.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aPD
w=this.d
if(w.length===0)return D.aPE
v=B.af(w).i("b_<1>")
u=new B.b_(w,new A.bhg(),v).fa(0,0,new A.bhh())
t=new B.b_(w,new A.bhi(),v).fa(0,0,new A.bhj())
s=new B.b_(w,new A.bhk(),v).fa(0,0,new A.bhl())
r=new B.b_(w,new A.bhm(),v).gt(0)
v=w.length
q=$.de()
p=q.al(t)
o=A.bD2(u,A.bwa("expense","",u))
q=s===0?"":" \xb7 Privat "+q.al(s)
n=x.p
q=B.b([B.i(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.x(C.h,14,C.D),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.K(q,B.b([C.aK,B.i(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.x(C.n,12,C.l),l,l,l)],n))
if(r>0)C.b.K(q,B.b([C.aK,B.i(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.x(C.a6,12,C.l),l,l,l)],n))
k=B.b([B.bj(l,B.a7(q,C.z,C.f,C.i),C.a5,l,C.E,l,l,3),C.O],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.K(k,B.b([new A.aj0(w[m],l),C.I],n))
return B.a7(k,C.a8,C.f,C.i)}}
A.aj0.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.aL(n).length!==0)===!0){n.toString
n=C.c.aL(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.ah(B.b([B.as(B.i(n,p,2,C.ac,p,B.x(C.h,14,C.D),p,p,p),1),C.al,A.bGr(v,o.r,w)],u),C.z,p,C.f,C.i,0,p,p)
w=B.i($.dC().al(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+A.bDM(w),p,1,C.ac,p,B.x(C.n,12,C.l),p,p,p)
v=C.d.ai(o.y,1)
t=$.de()
s=t.al(o.w)
t=t.al(o.x)
r=o.gam7()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aK,w,C.b7,B.i("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ac,p,B.x(C.n,12,C.l),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.K(q,B.b([C.aK,B.ah(B.b([D.adH,C.c2,B.as(B.i("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.x(C.a6,11,C.l),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.bj(p,B.a7(q,C.z,C.f,C.i),p,p,C.cH,p,p,3)}}
A.xe.prototype={
p(d){var w=null
return B.bj(w,B.ah(B.b([B.bQ(this.e,this.d,w,w),C.al,B.as(B.i(this.c,w,w,w,w,B.x(C.h,14,C.l),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a5,w,C.E,w,w,3)}}
A.yQ.prototype={
dk(d,e){var w=null,v=e.aj($.qW(),x.P),u=e.aj($.byV(),x.aN)
return B.qg(B.dl(B.b([new B.fF("Finanzen","Dashboard",new A.ahz(e.aj($.byS(),x.c).gje(),new A.aGS(this,d,e),new A.aGT(this,d,e),new A.aGU(d),new A.aGV(d),new A.aGW(d),new A.aGX(this,d,e,v),w),w),C.aC,new A.apl(v,w),C.ca,D.agH,C.ca,B.dd(u,new A.aGY(),new A.aGZ(),new A.aH_(),!1,!0,!1,x.d,x.l)],x.p),w,C.cI,w,C.G,!1),C.m,new A.aH0(e))},
JD(d,e){return this.aMg(d,e)},
aMg(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$JD=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.byS()
w=3
return B.k(e.aF(0,n.ghP(),x.F).H8(0),$async$JD)
case 3:m=g
if(d.e==null){w=1
break}t=e.aF(0,n,x.c)
s=t.ghe(t)==null
r=t.ghe(t)
if(r instanceof B.vg)q=r.a
else q=r==null?null:J.am(r)
if(s)p="sevDesk synchronisiert: "+B.j(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.P(x.q).f
o=s?C.L:D.a7S
n.bb(B.c2(null,null,null,null,null,C.r,null,B.i(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JD,v)},
Bw(d,e){return this.axB(d,e)},
axB(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bw=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aF(0,$.byS().ghP(),x.F).LJ(),$async$Bw)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bb(D.aBG)
w=1
break}t=B.oM(C.v,10)
w=4
return B.k($.bQc().u2(s,"finanzauswertung.pdf",t,null,null,null),$async$Bw)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bw,v)},
Bx(d,e,f){return this.aJQ(d,e,f)},
aJQ(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bx=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jf(null,null,!0,null,new A.aGP(f,d),d,null,!0,!0,x.cJ),$async$Bx)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nX(e.aF(0,$.bW(),x.A))
p=f.a
o=f.b
n=$.dC()
m=n.al(p)
n=n.al(o)
w=8
return B.k(r.zD("finance_period",p,o,B.a6(["period_from",p.el()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bx)
case 8:if(d.e!=null)d.P(x.q).f.bb(F.vi)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bb(B.c2(null,null,null,null,null,C.r,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bx,v)}}
A.ahz.prototype={
p(d){var w=this,v=null,u=A.Wz(C.m,F.i0,C.m,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Wz(v,D.acq,v,w.r,"Gesellschafter-Freigaben"),s=A.Wz(v,D.aaJ,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Wz(v,D.yc,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Wz(C.a6,C.jn,C.a6,r?v:w.e,"PDF-Export")
return B.ah(B.b([u,C.aN,t,C.aN,s,C.aN,q,C.aN,p,C.aN,A.Wz(C.am,C.fS,C.am,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.an1.prototype={
p(d){var w,v=this,u=null,t=B.ao(12),s=B.ao(12),r=B.ao(12),q=v.w
if(q==null)q=C.a4
q=B.cj(q,1)
w=v.r
if(w==null)w=C.h
return B.tO(B.dm(!1,C.V,!0,t,B.dV(!1,s,!0,B.aK(u,B.bQ(v.c,w,u,20),C.q,u,u,new B.aD(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a5,0,u,u,u,u,u,C.b6),u,v.d,u,u)}}
A.apl.prototype={
dk(d,e){var w=null,v=this.e,u=$.dC(),t=x.p
return B.bj(w,B.a7(B.b([D.a9q,C.I,B.ah(B.b([D.adk,C.at,B.as(B.i(u.al(v.a)+" \u2013 "+u.al(v.b),w,w,w,w,B.x(C.h,16,C.D),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jS(C.cb,B.b([new A.JB("Monat",new A.bkv(e),w,w),new A.JB("Jahr (YTD)",new A.bkw(e),w,w),new A.JB("Zeitraum w\xe4hlen \u2026",new A.bkx(this,d,e),D.abn,w)],t),C.df,6,8)],t),C.z,C.f,C.i),w,w,C.E,w,w,3)},
IY(d,e){return this.aIK(d,e)},
aIK(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IY=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.bb(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.awV(new A.bku(),d,B.bS(B.b2(t)-5,1,1,0,0,0,0),new B.lP(s.a,s.b,x.bz),B.bS(B.b2(t)+1,1,1,0,0,0,0),C.e6),$async$IY)
case 2:r=g
if(r!=null)e.aF(0,$.qW().ghP(),x.V).uk(0,new E.lV(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IY,v)}}
A.JB.prototype={
p(d){var w=null,v=B.ao(9999),u=B.ao(9999),t=B.ao(9999),s=B.cj(C.a4,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bQ(p,C.h,w,14),C.aN],r))
q.push(B.i(this.c,w,w,w,w,B.x(C.h,13,C.D),w,w,w))
return B.dm(!1,C.V,!0,v,B.dV(!1,u,!0,B.aK(w,B.ah(q,C.j,w,C.f,C.H,0,w,w),C.q,w,w,new B.aD(w,w,s,t,w,w,C.A),w,w,w,w,C.fO,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a5,0,w,w,w,w,w,C.b6)}}
A.K0.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jx(new A.brd(this)),C.ca,D.a9w,C.t],q),o=this.c.w
if(o.length===0)p.push(B.bj(r,B.ah(B.b([D.adN,C.al,B.as(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.x(C.n,14,C.l),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a5,r,C.E,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.K(w,B.b([new A.ahx(t.a,t.b,s,A.bDM(s),t.d,new A.bre(d,t),r),C.I],q))}p.push(B.a7(w,C.j,C.f,C.i))}return B.a7(p,C.a8,C.f,C.i)}}
A.ahx.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aJ:C.a5,q=B.cj(s?C.m:C.a4,1),p=B.ao(4),o=v.c,n=x.p
t=B.b([B.aK(C.R,B.i(C.c.a1(o,0,1),u,u,u,u,B.by(C.h,14,C.p),u,u,u),C.q,u,u,new B.aD(r,u,q,p,u,u,C.A),u,36,u,u,u,u,u,36),C.al,B.as(B.a7(B.b([B.i(o+" \xb7 "+v.d,u,1,C.ac,u,B.x(C.h,14,C.D),u,u,u),B.i(v.f,u,u,u,u,B.x(C.n,12,C.l),u,u,u)],n),C.z,C.f,C.i),1),A.bGr(o,v.r,t)],n)
C.b.K(t,B.b([C.c2,C.Fi],n))
w=B.bj(u,B.ah(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cH,u,u,3)
return B.bv(u,!0,u,B.dV(!1,B.ao(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.IH.prototype={
p(d){var w=null
return B.bj(C.a6,B.ah(B.b([D.ael,C.al,B.as(B.i(this.c,w,w,w,w,B.x(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fi,w,C.E,w,w,3)}}
A.a2j.prototype={
p(d){var w=null,v=this.d,u=this.c,t=A.bwa(v,this.e,u),s=A.bD2(u,t),r=B.x(A.bNJ(v,t),15,C.D)
return B.i(s,w,w,w,A.c8i(v,t)+" "+$.de().al(Math.abs(u)),r,w,w,w)}}
A.a83.prototype={
dk(d,e){return B.dd(e.aj($.bFf(),x.cn),new A.aLO(),new A.aLP(),new A.aLQ(),!1,!0,!1,x.X,x.l)}}
A.J1.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.ayZ,C.t,B.jx(new A.bgR(v,q,100-t.w.a,w,p)),C.t,new A.amj(u),C.aC,D.ayY,C.t,new A.ait(t,u),C.aC,D.ayT,C.t,B.bv(u,!0,u,B.kb(u,B.bj(u,new A.UO(t,220,u),u,u,C.E,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgS(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aC,D.ayM,C.t,B.bv(u,!0,u,B.kb(u,new A.V4(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgT(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aC,D.ayQ,C.t,new A.ao7(t,u),C.aC,D.ayO,C.t,new A.akj(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aC,D.ayV,C.t,new A.au_(t,u)],s))
return B.a7(r,C.a8,C.f,C.i)}}
A.amj.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.x(C.n,11,C.l).cB(1.35),w,w,w)}}
A.anC.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cF(m.d,"-")?C.a6:C.am
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bgU(m,d):l
r=x.p
q=B.b([B.as(B.i(m.c.toUpperCase(),l,l,l,l,B.x(C.n,10,C.p).fI(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cj(C.a6,0.8)
n=B.ao(4)
q.push(B.aK(l,B.i("Ziel "+p,l,l,l,l,B.x(C.a6,9,C.p),l,l,l),C.q,l,l,new B.aD(l,l,o,n,l,l,C.A),l,l,l,l,C.nC,l,l,l))}q=B.b([B.ah(q,C.j,l,C.f,C.i,0,l,l),C.aK,B.NE(C.d1,B.i(m.d,l,l,l,l,B.by(w,22,C.p),l,l,l),C.hJ)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ac,l,B.x(C.n,10,C.aG),l,l,l))
q.push(C.cY)
q.push(B.ah(B.b([new A.VE("Vormonat",m.r,l),C.c2,new A.VE("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.cY)
q.push(B.as(new A.Zm(v,m.y,m.z,l),1))
return B.bv(l,u,l,B.kb(l,B.bj(l,B.a7(q,C.z,C.f,C.i),l,l,C.bZ,l,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.VE.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ao(4)
return B.aK(r,B.i(this.c+" \u2014",r,r,r,r,B.x(C.n,9,C.p),r,r,r),C.q,r,r,new B.aD(C.a4,r,r,q,r,r,C.A),r,r,r,r,C.nC,r,r,r)}w=q>=0
v=w?C.am:C.a6
u=v.ez(0.12)
t=B.cj(v,0.7)
s=B.ao(4)
return B.aK(r,B.ah(B.b([B.bQ(w?F.aaw:D.aav,v,r,10),C.Z3,B.i(this.c+" "+C.d.ai(q,1)+" %",r,r,r,r,B.x(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.q,r,r,new B.aD(u,r,t,s,r,r,C.A),r,r,r,r,C.nC,r,r,r)}}
A.Zm.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eC(v,j[v]))
u=C.b.jJ(j,new A.bqh())
t=C.b.jJ(j,new A.bqi())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bqj(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6o(k,!1)
w=B.b([A.aM0(k,2,A.az7(!1,C.m.ez(0.16),0,k,!0,D.wg),C.m,0.35,k,D.Ek,k,!0,!1,!0,!1,D.FJ,!1,10,D.Yw,!0,C.lC,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.P6(A.bAF(k,k,k,D.anc,l,D.C8,D.Eg,D.El,w,D.agU,k,m,k,n,D.XR,D.and,D.a9N),C.an,C.a1,k,k)}}
A.UO.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aOK
w=C.b.fa(p,0,new A.b7b())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.azg(B.b([A.a2a(q,q,D.BA,q,C.m,q,q,q,r.b,6),A.a2a(q,q,D.BA,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bO(A.bGp(A.az9(q,q,u,q,q,A.a6o(q,!1),q,new A.yS(!0,!0,q,new A.b7c(),A.a0B(),!1,q,A.awF(),A.a0B()),q,v,q,q,new A.vk(!0,new A.pp(16,q,new A.qm(!0,new A.b7d(this),46,q),!0),D.kz,D.kz,new A.pp(16,q,new A.qm(!0,new A.b7e(p),26,q),!0)))),this.d,q)},
aLw(d){if(Math.abs(d)>=1000)return C.d.ai(d/1000,1)+" k"
return C.d.ai(d,0)}}
A.V4.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ac(v,new A.b8b(),w),x.i)
C.b.K(o,new B.ac(u,new A.b8c(),w))
t=C.b.fa(o,0,new A.b8d())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.azg(B.b([A.a2a(q,q,q,q,C.m,q,q,q,v[s],14),A.a2a(q,q,q,q,C.am,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bO(A.bGp(A.az9(q,q,n,q,q,A.a6o(q,!1),q,D.El,q,o,q,q,new A.vk(!0,D.kz,D.kz,D.kz,new A.pp(16,q,new A.qm(!0,new A.b8e(p),26,q),!0)))),this.d,q)
return this.e?r:B.bj(q,r,q,q,C.E,q,q,3)}}
A.ao7.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aOJ
w=new B.ac(l,new A.bhA(),B.af(l).i("ac<1,G>")).jJ(0,new A.bhB())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.x(C.h,14,C.p),m,m,m)
p=$.de()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.hX(C.ai,C.f,C.i,C.j,m,C.aR,m,0,B.b([new B.jt(1,C.dk,B.a7(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.al(r.f),m,m,m,m,B.x(C.n,12,C.aG),m,m,m)],v),C.z,C.f,C.i),m),C.at,B.i(p.al(o),m,m,m,m,B.by(C.h,16,C.p),m,m,m)],v),m),C.cY,new B.DP(new B.d5(n,n,n,n),C.br,B.zH(C.a4,m,8,C.d.bo(o/w,0,1),D.Bp),m)],v)
q=C.b.gae(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a0F(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bj(m,B.a7(u,C.j,C.f,C.i),m,m,C.E,m,m,3)}}
A.akj.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.as(new A.Cz("Aktive Kunden",""+s,u),1)
w=B.as(new A.Cz("K\xe4ufe",""+t.a,u),1)
v=$.de()
return B.bj(u,B.ah(B.b([s,w,B.as(new A.Cz("\xd8-Warenkorb",v.al(t.d),u),1),B.as(new A.Cz("Umsatz/Kunde",v.al(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.E,u,u,3)}}
A.Cz.prototype={
p(d){var w=null
return B.a7(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.x(C.n,10,C.p).fI(0.6),w,w,w),C.b7,B.i(this.d,w,w,w,w,B.by(C.h,20,C.p),w,w,w)],x.p),C.z,C.f,C.H)}}
A.au_.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ac(q,new A.bsw(),B.af(q).i("ac<1,G>")).jJ(0,new A.bsx()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.hX(C.ai,C.f,C.i,C.j,r,C.aR,r,0,B.b([new B.jt(1,C.dk,B.i(u.b,r,1,C.ac,r,B.x(C.h,13,C.p),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.x(C.n,12,C.D),r,r,r),B.i($.de().al(t),r,r,r,r,B.x(C.h,13,C.p),r,r,r)],o),r),C.aK,new B.DP(new B.d5(s,s,s,s),C.br,B.zH(C.a4,r,6,C.d.bo(t/p,0,1),D.Bp),r)],o)
s=C.b.gae(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a0F(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.I)
C.b.K(n,t)}return B.bj(r,B.a7(n,C.j,C.f,C.i),r,r,C.E,r,r,3)}}
A.x9.prototype={
p(d){var w=null
return B.bj(w,B.i(this.c,w,w,w,w,B.x(C.n,13,C.l),w,w,w),C.a5,w,C.E,w,w,3)}}
A.ait.prototype={
dk(d,e){return B.dd(e.aj($.byT(),x.fM),new A.b5t(this,d,e),new A.b5u(),new A.b5v(),!1,!0,!1,x.h,x.l)}}
A.Bz.prototype={
U(){return new A.Uq()},
aYD(){return this.d.$0()}}
A.Uq.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aJ()
q.d=new B.bb(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.ej(J.am(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pO[t].a
if(v)r=""
else{r=B.b0(J.a2(w,s))
if(r==null)r=null
r=C.d.ai(r==null?0:r,2)
r=B.b7(r,".",",")}u.m(0,s,new B.bK(new B.cX(r,C.bM,C.aV),$.al()))}q.e!==$&&B.aY()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ci(v,v.r,v.e,B.l(v).i("ci<2>"))
while(v.u()){w=v.d
w.T$=$.al()
w.S$=0}this.ao()},
rv(d){var w=this.e
w===$&&B.a()
w=C.c.aL(w.h(0,d).a.a)
w=B.b7(w,".","")
w=B.iu(B.b7(w,",","."))
return w==null?0:w},
a4i(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pO[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ai(u,2)
s=B.b7(s,".",",")
t.kt(0,t.a.y5(C.aV,C.bM,s))}}this.J(new A.b5h())},
aFk(){this.a4i(D.ark)
this.c.P(x.q).f.bb(D.aC0)},
Ie(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ie=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b6(a1)
for(e=0;e<8;++e)a2.E(0,D.pO[e].a)
q=a2
t=4
w=7
return B.k($.a6g.ce().vV(B.b(["csv","txt"],x.s),C.nM,!0),$async$Ie)
case 7:p=a5
a2=p
o=a2==null?null:J.KP(a2.a).c
if(o==null){w=1
break}n=C.aH.adQ(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Cd.cG(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.axs(l,B.bN("[;,\t]",!0,!1,!1))
if(J.cd(k)<2)continue
j=C.c.aL(J.a2(k,0)).toLowerCase()
i=J.D2(q,j)?j:D.aty.h(0,j)
if(i==null)continue
d=C.c.aL(C.b.ma(J.bTp(k,1)))
d=B.b7(d,"\u20ac","")
d=B.b7(d," ","")
d=B.b7(d,".","")
h=B.b7(d,",",".")
g=B.iu(h)
if(g!=null)J.ft(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bb(D.aBD)
w=1
break}r.a4i(m)
r.c.P(x.q).f.bb(B.c2(null,null,null,null,null,C.r,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bb(B.c2(null,null,null,null,null,C.r,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ie,v)},
Ip(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ip=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b5i(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0a("upsert_finance_balance",B.a6(["p_as_of",C.c.a1(n.el(),0,10),"p_cash_and_bank",q.rv("cash_and_bank"),"p_receivables",q.rv("receivables"),"p_inventory_value",q.rv("inventory_value"),"p_other_current_assets",q.rv("other_current_assets"),"p_fixed_assets",q.rv("fixed_assets"),"p_current_liabilities",q.rv("current_liabilities"),"p_long_term_liabilities",q.rv("long_term_liabilities"),"p_equity",q.rv("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ip)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYD()
o=q.c
o.toString
B.b9(o,!1).eU()
q.c.P(x.q).f.bb(D.aBH)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bb(B.c2(null,null,null,null,null,C.r,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b5j(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ip,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.by(C.h,18,C.p),r,r,r),p=s.f?r:new A.b5l(s,d),o=s.d
o===$&&B.a()
p=B.fS(D.adm,B.i("Stichtag: "+C.c.a1(o.el(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.as(B.fS(D.aew,D.aHO,o?r:s.gaEm(),r),1)
v=x.p
w=B.b([p,C.I,B.ah(B.b([w,C.at,B.as(B.fS(D.aei,D.aHD,o?r:s.gaFj(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pO[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f6(r,C.aY,!1,r,!0,C.r,r,B.fj(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.iC,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.av,r,C.a7,r,r,r,r),C.I],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.x(C.n,11,C.l),r,r,r))
p=B.bO(B.f5(B.a7(w,C.a8,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.dN(C.cZ,r,r,o?r:new A.b5m(d),r,r)
o=o?r:s.gaF3()
t=B.dF(C.m,C.h,r,r,r,r,r)
return B.lH(B.b([w,B.e_(s.f?F.Z6:C.eB,o,t)],v),C.o,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a0F(this.gbs(),e.gbs())
else w=!0
return w},
gv(d){return(B.f3(B.N(this))^B.bOw(this.gbs()))>>>0},
j(d){B.bHF()
return B.N(this).j(0)}}
A.LD.prototype={
U(){return new A.Ur(B.A(x.S,x.J),new A.azj(B.A(x.x,x.T)),null,null)}}
A.Ur.prototype={
p(d){var w,v=this,u=v.a2b(),t=v.CW
t.toString
t=v.a2c(t.au(0,v.gfk().gq(0)))
w=v.a2c(u)
v.a.toString
return new A.Lz(new A.a29(t,w,null),u,null)},
a2c(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.azg(s.c,s.d,!1,r,s.a))}return d.aQI(w)},
a2b(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.V4(t.ch)
if(r)s=w.a
r=t.y
t=t.aRC(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQJ(A.bzm(!1,!0,!0,v.d,v.c,u.gat3(),v.f,v.e))}return t},
at4(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagi()||e==null||e.a==null){w=v.cy
v.J(w.gaQ6(w))
return}v.J(new A.b5y(v,e))},
kH(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2b(),new A.b5z(w)))}}
A.o2.prototype={
VI(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.az9(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRC(d,e){return this.VI(null,null,d,e)},
aQJ(d){return this.VI(null,d,null,null)},
aQI(d){return this.VI(d,null,null,null)},
XD(d,e,f){var w,v,u,t=A.kE(d.ch,e.ch,f,A.c7_(),x.dB),s=B.ag(d.CW,e.CW,f),r=A.bHN(d.d,e.d,f),q=A.bJK(d.e,e.e,f),p=A.bHL(d.c,e.c,f),o=e.a
o=A.a6o(B.a2r(d.a.b,o.b,f),o.a)
w=B.ag(d.y,e.y,f)
v=B.ag(d.x,e.x,f)
u=B.ag(d.z,e.z,f)
r=A.az9(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bHH(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.az8.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fN.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ac(v,new A.azh(),B.af(v).i("ac<1,G>")).jJ(0,new A.azi())
v=v.length
return w+(v-1)*this.d},
gbs(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iq.prototype={
gbs(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mO.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a26.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2b.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.af0.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2c.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dp.prototype={
gbs(){return[this.a,this.b,C.bv,C.x,null]}}
A.LE.prototype={}
A.a2d.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.y1.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XD(v,w,d)}}
A.aip.prototype={}
A.aiw.prototype={}
A.aix.prototype={}
A.aiz.prototype={}
A.aiA.prototype={}
A.aiB.prototype={}
A.aiC.prototype={}
A.aiD.prototype={}
A.aiE.prototype={}
A.azj.prototype={
V4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uU(0,0,!1)
v=new A.zK(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uU(t,u,!0)}w=null
try{w=C.b.oY(d,new A.azk())}catch(s){return new A.uU(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uU(q,r,!1)
u.m(0,v,j)
return j}}
A.uU.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aiy.prototype={}
A.azl.prototype={
ic(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0j(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acN(t,A.bzl(w,t.a),u)
l.y=u
l.aSY(e,u,f)
l.amt(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aT6(d,e,m,t,r,s,n,o,f)}}},
acN(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dY("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.af(p).i("iX<1>")).aB(0,new A.azm(t,q,r,s))
w.push(new A.a76(q))}return w},
aSY(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d5(k,k,k,k)}j=o.w
i=b6[r].b[p]
h=i-m
g=i+m
k=l.a
f=l.b
e=l.c
d=l.d
a0=Math.max(k.b,f.b)+Math.max(e.b,d.b)
a1=o.b
a2=o.a
if(a1!==a2){if(a1>a2){a3=b2.dI(Math.max(t,a2),b4,b7)
a4=B.QS(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.QS(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.K:f).gq(0)
k.seX(null)
a6=b2.f.e_()
v.drawRRect(B.lC(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gq(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.be(v.save())
v.clipRect(B.dK(b1),$.mJ()[1],!0)
a6=b2.f.e_()
v.drawRRect(B.lC(a4),a6)
a6.delete()
v.restore()
b2.aT4(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gen(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.hm(a4))
n=A.aCt(new B.co(n.r,C.ag,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mT(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aT6(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Be(a5,a5,a5,a5,B.cS(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lE().a_m(a8,a7.b),a7.a),C.bv,C.x,a5,b6.c,C.bE)
w.agC(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dI(s,a6,b6)
q=b4.a
p=a4.dI(q,a6,b6)
o=b1.b
n=u+o.gev()
m=v+4+(o.gd3(0)+o.gd6(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aKi)j=v===D.ZM&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_n(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Gv(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lE().KG(new B.H(v,t),d).b
s=$.lE()
q=w.b
p=q.c
q=q.a.c
a0=s.KG(new B.H(p,q.gbU(q)),d)
q=g.gc8()
p=w.b.c
s=g.gaiQ()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.Wk(d,new A.azn(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aT4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gen(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a3
s=w?new B.aW(i.x,i.y):C.a3
r=w?C.a3:new B.aW(i.e,i.f)
w=w?C.a3:new B.aW(i.r,i.w)
q=B.QS(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a3:new B.aW(i.z,i.Q)
p=v?C.a3:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a3
q=B.QS(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a3)}else q=B.bBm(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
WZ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acN(b2,A.bzl(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dI(k,b2,b3)
m=b0[q].c[o]
g=a7.dI(m.a+m.x.b,b2,b3)}else{h=a7.dI(j+m.x.b,b2,b3)
g=a7.dI(b0[q].c[o].b,b2,b3)}a7.dI(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dI(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dI(a4.a,b2,b3)
a6=a7.dI(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a2d(d,q,a0,o,a2,a1,new A.eC(d.a,v),new B.r(n,t))}}return null}}
A.a76.prototype={}
A.a29.prototype={
bn(d){var w,v=this.e,u=B.bA(d,null,x.w).w.gcP(),t=new A.azl()
t.a1v()
$.an()
w=B.aX()
w.b=C.bj
t.f=w
w=B.aX()
w.b=C.b_
t.r=w
w=B.aX()
w.b=C.bj
w.r=C.o.gq(0)
t.w=w
w=B.aX()
w.b=C.b_
w.r=C.K.gq(0)
w.c=1
t.x=w
t=new A.aca(this.d,v,u,t,d,C.b9,new B.br(),B.aL(x.j))
t.bl()
t.Ze(v.cy)
t.afM()
return t},
bx(d,e){e.sij(0,this.d)
e.sYZ(this.e)
e.scP(B.bA(d,null,x.w).w.gcP())
e.B=d
e.bd()}}
A.aca.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYZ(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a13(d.cy)
w.bd()},
scP(d){if(this.d0.k(0,d))return
this.d0=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.be(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a2F(t,v),new A.w7(u.aC,u.i6,u.d0,x.Q))
s.restore()},
a_f(d){var w=this,v=w.gC(0)
return new A.LE(w.fX.WZ(d,v,new A.w7(w.aC,w.i6,w.d0,x.Q)))}}
A.a2_.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Do.prototype={
L(){return"AxisSide."+this.b}}
A.tN.prototype={}
A.qm.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adB.prototype={
gbs(){return[!1,0,0,0]}}
A.pp.prototype={
gbs(){return[this.b,this.a,this.c,!0]}}
A.vk.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eC.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eC))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yS.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pN.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.af2.prototype={
gbs(){return[this.a,this.b]}}
A.QW.prototype={
gbs(){return[this.a,this.b]}}
A.n7.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nx.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lm.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a7h.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afq.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Nx.prototype={
gbs(){return[this.a,this.b,!0]}}
A.vj.prototype={}
A.NG.prototype={
aef(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gq(v)
w.b=C.bj
d.iS(f,this.b,w)},
gbs(){return[this.a,this.b,this.c,0]}}
A.aik.prototype={}
A.aio.prototype={}
A.alD.prototype={}
A.alZ.prototype={}
A.am_.prototype={}
A.am1.prototype={}
A.am2.prototype={}
A.amS.prototype={}
A.amR.prototype={}
A.amT.prototype={}
A.aqw.prototype={}
A.asp.prototype={}
A.asq.prototype={}
A.au3.prototype={}
A.auL.prototype={}
A.auK.prototype={}
A.auM.prototype={}
A.ayY.prototype={
MR(d,e,f,g,h,i){return new B.ij(this.aWK(d,e,f,g,h,i),x.g4)},
aWJ(d,e,f,g){return this.MR(d,e,f,!0,g,!0)},
aWK(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MR(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lE().ak_(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h3(u-s,v)*v===u
a0=!t&&j?u-v:u
q=r&&!l?2:3
break
case 2:q=4
return a1.b=s,1
case 4:case 3:n=a0+v/1e5
case 5:if(!(k<=n)){q=6
break}q=7
return a1.b=k,1
case 7:k+=v
q=5
break
case 6:q=t&&!j?8:9
break
case 8:q=10
return a1.b=u,1
case 10:case 9:return 0
case 1:return a1.c=o.at(-1),3}}}}}
A.Ly.prototype={
a1v(){var w,v=this
$.an()
w=B.aX()
w.b=C.b_
v.a=w
w=B.aX()
w.b=C.bj
v.b=w
w=B.aX()
w.b=C.bj
v.e=w
w=B.aX()
w.b=C.b_
v.c=w
v.d=B.aX()},
ic(d,e,f){var w=this
w.a0k(d,e,f)
w.aSU(e,f)
w.aT3(e,f)
w.aT2(e,f)},
aT2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lE().OT(w.a,a1.r-a1.f)
u=$.byp().MR(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fe(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lb(n,m)
if(j!=null){p.r=C.F.gq(0)
p.seX(j.mN(0,i))}else{if(k==null)k=C.K
p.r=k.gq(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c4(p.r)
p.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.DP(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lE().OT(w.b,a1.y-a1.x)
u=$.byp().MR(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.lb(n,m)
if(k!=null){q.r=C.F.gq(0)
q.seX(k.mN(0,i))}else{if(p==null)p=C.K
q.r=p.gq(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c4(q.r)
q.r=B.aH(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gq(0)}a3.DP(n,m,d.a,f.d)}},
aSU(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hd(new B.I(0,0,0+w.a,0+w.b),this.b)},
aT3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.lb(new B.r(n.fe(t.a,m,e),0),new B.r(n.fe(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.F.gq(0)
r.seX(p.mN(0,s))}else{r.r=(q==null?C.K:q).gq(0)
r.seX(null)}o=n.e.e_()
w.drawRect(B.dK(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.lb(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.F.gq(0)
v.seX(q.mN(0,s))}else{v.r=(r==null?C.K:r).gq(0)
v.seX(null)}o=n.e.e_()
j.drawRect(B.dK(s),o)
o.delete()}},
aT1(d,e,f){var w,v
this.a0k(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeg(d,e,f,w)
if(v.b.length!==0)this.aT8(d,e,f,w)},
aeg(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lb(m,l)
if(j!=null){n.r=C.F.gq(0)
n.seX(j.mN(0,i))}else{if(k==null)k=C.K
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c4(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
e.DP(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eI(0,2)
g=C.d.an(o,n.gbU(n).eI(0,2))
J.be(r.save())
r.translate(h,g)
n=n.gNO().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eI(0,2)
o=C.d.an(o,n.gbU(n).eI(0,2))
k=f.d
k===$&&B.a()
s.aeh(0,n,new B.r(h,o),k)}}},
aT8(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=d.fe(o,a3,a2)
m=new B.r(n,0)
o=d.fe(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lb(m,l)
if(j!=null){n.r=C.F.gq(0)
n.seX(j.mN(0,i))}else{if(k==null)k=C.K
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c4(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
a1.DP(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eI(0,2)
g=n.gbU(n).eI(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.be(r.save())
r.translate(f,e)
n=n.gNO().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eI(0,2)
g=n.gbU(n).af(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.aeh(0,n,new B.r(o,k),j)}}},
fe(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_n(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Lz.prototype={
galO(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galP(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galQ(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galM(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
am9(d){var w,v=this,u=null,t=v.d,s=A.bA8(t.d),r=t.a
r=r.a&&A.bU_(r.b)?r.b:u
w=B.b([B.aK(u,v.c,C.q,u,u,new B.aD(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.az_(w)
if(v.galO())C.b.hB(w,s.$1(!0),new A.AY(D.Bw,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galQ())C.b.hB(w,s.$1(!0),new A.AY(D.mL,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galP())C.b.hB(w,s.$1(!0),new A.AY(D.Bx,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galM())C.b.hB(w,s.$1(!0),new A.AY(D.dR,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jx(new A.ayZ(this))}}
A.Sn.prototype={
U(){return new A.Za(new B.bm(null,x.eF))}}
A.Za.prototype={
ayC(){switch(this.a.c.a){case 0:return C.eh
case 1:return C.fd
case 2:return C.d1
case 3:return C.dC}},
az7(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
ayE(d){this.a.toString
return},
aq(){this.aJ()
$.cC.x1$.push(this.ga4L())},
bc(d){this.bE(d)
$.cC.x1$.push(this.ga4L())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.az7()
return B.Bn(B.b2O(0,B.aK(v.ayC(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.adC.prototype={
bn(d){return A.bTS(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.W!==w){e.W=w
e.a7()}}}
A.a20.prototype={
ho(d){if(!(d.b instanceof B.hx))d.b=new B.hx(null,null,C.v)},
hZ(d){if(this.B===C.ai)return this.yd(d)
return this.adU(d)},
aLI(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9C(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dF(d){var w=this.a9B(d,B.hL())
switch(this.B.a){case 0:return d.c4(new B.H(w.a,w.b))
case 1:return d.c4(new B.H(w.b,w.a))}},
a9B(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ai?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ho(u,null)
break
case 1:q=B.ho(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9C(p)
t=Math.max(t,o.aLI(p))
m=r.aH$}return new A.bh_(n<1/0?n:s,t)},
cD(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga6.call(p)),n=p.a9B(o,B.mI()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c4(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c4(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.a9C(r==null?B.S(B.X("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.c9(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aH$;++u}},
eh(d,e){return this.ye(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.va(d,e)},
l(){this.a4.sbh(0,null)
this.ap4()}}
A.bh_.prototype={}
A.az0.prototype={}
A.k0.prototype={
gbs(){return[this.a,this.b]}}
A.o1.prototype={}
A.ail.prototype={}
A.aim.prototype={
aO(d){var w,v,u
this.fs(d)
w=this.ah$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aH$}},
aE(d){var w,v,u
this.fj(0)
w=this.ah$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aH$}}}
A.ain.prototype={}
A.Uo.prototype={
l(){var w,v,u
for(w=this.Wx$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AY.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d1
case 1:return C.dC
case 2:return C.eh
case 3:return C.fd}},
gb0m(){var w=this.d,v=A.bA8(w.d),u=A.bHK(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).af(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).af(0,new B.ai(u.a,0,u.c,0))}},
gaiE(){var w=this.d,v=A.bHK(w.a),u=A.bA8(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd6(0)+(v.gd3(0)+v.gd6(0))
case 1:case 3:return u.gev()+v.gev()}},
aXq(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lE().OT(d,f-e)
w=p.c
v=w!==D.mL
if((!v||w===D.dR)&&p.d instanceof A.o2){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bzl(u,d)
w=new B.iX(t,B.af(t).i("iX<1>"))
s=w.giE(w).f2(0,new A.b_L(u),x.W).fZ(0)}else{r=$.byp()
w=!v||w===D.dR
v=p.d
q=r.aWJ(w?v.w:v.z,o,f,e)
v=B.oC(q,new A.b_M(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.af(s).i("ac<1,o1>")
w=B.Q(new B.ac(s,new A.b_N(p,e,f,o,g,d),w),w.i("au.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aK(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mL
u=!v
t=!u||w===D.dR
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dR?C.G:C.ai
q=B.b([],x.p)
if(w===D.Bw||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dR?r:j.goD().c.c
p=!u||w===D.dR?j.goD().c.c:r
o=j.gb0m()
n=!u||w===D.dR?C.ai:C.G
j.gaiE()
m=j.gaiE()
l=!u||w===D.dR
k=j.d
l=l?k.f:k.x
u=!u||w===D.dR?k.r:k.y
q.push(B.aK(i,A.c0f(new A.az0(),n,j.aXq(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bx||w===D.dR)j.goD()
return new B.e9(t,i,i,B.bWI(q,C.j,s,i,C.f,C.H,0,i,i,C.aR),i)}}
A.a2f.prototype={
gbs(){return[this.a,this.b]}}
A.a6n.prototype={
gbs(){return[this.a,this.b]}}
A.NN.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6p.prototype={
gac7(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.azw.prototype={}
A.aFW.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aiH.prototype={}
A.alW.prototype={}
A.alX.prototype={}
A.am3.prototype={}
A.LH.prototype={
ic(d,e,f){}}
A.w7.prototype={}
A.hw.prototype={
gdN(){return null},
gagi(){var w,v=this
B.bC()
B.bC()
B.bC()
w=v instanceof A.NM
if(w)return!0
return!(v instanceof A.NJ)&&!(v instanceof A.NI)&&!(v instanceof A.NK)&&!(v instanceof A.NH)&&!w&&!(v instanceof A.NL)}}
A.a6t.prototype={
gdN(){return this.a.b}}
A.a6u.prototype={
gdN(){return this.a.b}}
A.a6v.prototype={
gdN(){return this.a.b}}
A.NI.prototype={}
A.NJ.prototype={}
A.a6y.prototype={
gdN(){return this.a.b}}
A.NL.prototype={}
A.NM.prototype={
gdN(){return this.a.b}}
A.a6s.prototype={
gdN(){return this.a.b}}
A.a6r.prototype={
gdN(){return this.a.b}}
A.NH.prototype={
gdN(){return this.a.b}}
A.a6w.prototype={
gdN(){return this.a.gdN()}}
A.a6x.prototype={
gdN(){return this.a.gdN()}}
A.NK.prototype={
gdN(){return this.a.gdN()}}
A.GM.prototype={
Ze(d){this.V=d.b
this.W=d.c
this.a4=d.d},
afM(){var w=this,v=null,u=w.ak=B.bB2(v,v)
u.ay=new A.aVY(w)
u.ch=new A.aVZ(w)
u.CW=new A.aW_(w)
u.cy=new A.aW0(w)
u.cx=new A.aW1(w)
u=w.aG=B.HA(v,-1,v)
u.B=new A.aW2(w)
u.Z=new A.aW3(w)
u.V=new A.aW4(w)
u=w.bD=B.a8o(v,w.a4,v)
u.p3=new A.aW5(w)
u.p4=new A.aW6(w)
u.RG=new A.aW7(w)},
cD(){var w=x.k.a(B.M.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dF(d){return new B.H(d.b,d.d)},
kK(d){return!0},
mX(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.oB(d)
w=v.aG
w===$&&B.a()
w.oB(d)
w=v.ak
w===$&&B.a()
w.oB(d)}else if(x.gJ.b(d))v.l9(new A.a6x(d))},
gNk(d){return new A.aW8(this)},
gNm(d){return new A.aW9(this)},
l9(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_f(w):null
u.V.$2(d,v)
u.Z=C.b9},
gL8(d){return this.Z},
gFL(){var w=this.ar
w===$&&B.a()
return w},
aO(d){this.fs(d)
this.ar=!0},
aE(d){this.ar=!1
this.fj(0)},
$ijA:1}
A.P6.prototype={
U(){return new A.WU(B.b([],x.r),B.A(x.S,x.J),new A.aM2(B.A(x.y,x.dj)),null,null)}}
A.WU.prototype={
p(d){var w,v=this,u=v.a4N(),t=v.CW
t.toString
t=v.abE(t.au(0,v.gfk().gq(0)))
w=v.abE(u)
v.a.toString
return new A.Lz(new A.a8f(t,w,null),u,null)},
abE(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.af(w).i("ac<1,eb>")
w=B.Q(new B.ac(w,new A.bh5(this,d),v),v.i("au.E"))
return d.aRz(w,this.cy)},
a4N(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.V4(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRO(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRd(new A.Fj(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazV(),t.c,t.d))}return r},
azW(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagi())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bh3(v))
return}v.J(new A.bh4(v,e))},
kH(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4N(),new A.bh6(w)))}}
A.q0.prototype={
XD(d,e,f){var w,v,u,t,s,r,q=B.ag(d.f,e.f,f),p=B.ag(d.r,e.r,f),o=B.ag(d.w,e.w,f),n=B.ag(d.x,e.x,f),m=B.ag(d.y,e.y,f),l=B.ag(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a6o(B.a2r(d.a.b,j.b,f),j.a)
w=A.bHH(d.at,e.at,f)
v=A.bHL(d.c,e.c,f)
u=A.bHN(d.d,e.d,f)
t=A.bJK(d.e,e.e,f)
s=A.kE(d.ch,e.ch,f,A.c96(),x.cz)
s.toString
r=A.kE(d.CW,e.CW,f,A.c95(),x.bO)
r.toString
u=A.bAF(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VJ(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bAF(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRO(d,e,f,g){return this.VJ(null,null,d,e,f,g,null)},
aRd(d){var w=null
return this.VJ(w,d,w,w,w,w,w)},
aRz(d,e){var w=null
return this.VJ(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eb.prototype={
arK(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oY(n.a,new A.aM1())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fR))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aY()
n.b=q
r.toString
n.c!==$&&B.aY()
n.c=r
s.toString
n.d!==$&&B.aY()
n.d=s
t.toString
n.e!==$&&B.aY()
n.e=t}},
ady(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aM0(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRk(d){return this.ady(d,null)},
aRm(d){return this.ady(null,d)},
gbs(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.P7.prototype={
gbs(){return[this.a]}}
A.a28.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mP.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.LC.prototype={
gbs(){return[!1,this.b,this.c,!0]}}
A.yR.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aLR.prototype={
L(){return"LabelDirection."+this.b}}
A.a6q.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Fj.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8g.prototype={
gbs(){return[4,C.fP,16,D.xW,0,120,A.c98(),!1,!1,!1,0,C.J,A.c97()]}}
A.na.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qv.prototype={}
A.rL.prototype={
gbs(){return[this.a,this.b,C.bv,C.x,null]}}
A.tP.prototype={
gbs(){return[this.a,this.b]}}
A.Hd.prototype={
gbs(){return[this.a]}}
A.P8.prototype={}
A.zF.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XD(v,w,d)}}
A.aiu.prototype={}
A.aiv.prototype={}
A.aiJ.prototype={}
A.alY.prototype={}
A.am0.prototype={}
A.anK.prototype={}
A.anL.prototype={}
A.anM.prototype={}
A.anO.prototype={}
A.anP.prototype={}
A.anQ.prototype={}
A.anR.prototype={}
A.aso.prototype={}
A.au2.prototype={}
A.aM2.prototype={
V4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yy
u=new A.zK(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zG(s,r,q,t,!0)}w=null
try{w=C.b.oY(d,new A.aM3())}catch(p){return D.yy}v=null
try{v=C.b.oY(w.a,new A.aM4())}catch(p){return D.yy}o=v.a
n=v.a
m=v.b
l=v.b
for(s=d.length,k=0;k<s;++k){j=d[k]
if(j.a.length===0)continue
r=j.d
r===$&&B.a()
i=r.a
if(i>n)n=i
r=j.b
r===$&&B.a()
h=r.a
if(h<o)o=h
r=j.c
r===$&&B.a()
g=r.b
if(g>l)l=g
r=j.e
r===$&&B.a()
f=r.b
if(f<m)m=f}e=new A.zG(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zG.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.anN.prototype={}
A.aM5.prototype={
ic(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac7(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iN(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aQd(new B.I(0,0,u,v))}d.a0j(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aT_(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSW(a3,q,a4)
d.aT0(a3,q,a4)
d.ams(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dY("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vQ(q,i,j,k))}}d.aT7(a3,s,a4)
if(w.gac7(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aT5(a2,a3,v,f,new A.Hd(g),a4)}},
aSW(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bA7(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.ZP(o,e,u,f)
s=p.ajS(o,e,t,u,f)
r=p.ZR(o,e,t,u,f,!0)
q=p.ajR(o,e,t,u,f)
p.aSZ(d,s,p.ZO(o,e,t,u,f,!0),f,e)
p.aST(d,q,r,f,e)
p.aSX(d,t,e)
p.aSV(d,t,e,f)}},
aT_(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bA7(a5.a),a8=A.bA7(a6.a)
if(a7.length!==a8.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bV.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.af(n).i("cB<1>")
l=B.Q(new B.cB(n,m),m.i("au.E"))
k=a2.ZP(a3,a5,o,b2)
j=a2.ZQ(a3,a6.aRm(l),l,b2,k)
n=a5.b
n===$&&B.a()
m=a6.b
m===$&&B.a()
i=Math.min(n.a,m.a)
m=a5.c
m===$&&B.a()
n=a6.c
n===$&&B.a()
h=Math.max(m.b,n.b)
n=a5.d
n===$&&B.a()
m=a6.d
m===$&&B.a()
g=Math.max(n.a,m.a)
m=a5.e
m===$&&B.a()
n=a6.e
n===$&&B.a()
f=Math.min(m.b,n.b)
n=a2.fe(i,a3,b2)
m=a2.dI(h,a3,b2)
e=a2.fe(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.F.gq(0)
a0.seX(v.mN(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.K:w).gq(0)
a0.seX(null)}$.an()
a1=new B.mS(C.dE,C.bj,C.ea,C.ez,C.dZ).e_()
n=B.dK(new B.I(0,0,t,s))
m=$.bV.b
if(m===$.bV)B.S(B.vO(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e_()
n=j.e
a4.drawPath((n==null?j.e=new B.mT(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aT0(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZV(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fR)&&t.$2(q,e)){p=this.fe(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aef(s,q,new B.r(p,o))}}},
aT7(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fT(b3,new A.aM8())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.ZV(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fe(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rK(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lA(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lA(q.$2(m,k))))
f=b1.dI(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dI(a2,w,b4)
a5=new B.r(h,a4)
a6=a0/2
a7=g-a6
a8=g+a6
if(a4>a7&&a4<a8)a5=f<a4?new B.r(h,a4-(a4-a7)):new B.r(h+0,a4+(a8-a4))
a9=i.a
f=b1.y
f===$&&B.a()
a4=a9.a
a6=a9.b
b0=B.lb(a3,a5)
if(a6!=null){f.r=C.F.gq(0)
f.seX(a6.mN(0,b0))}else{if(a4==null)a4=C.K
f.r=a4.gq(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c4(f.r)
f.r=B.aH(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gq(0)}b2.DP(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rK(d.a))
f.aef(t,j,new B.r(h,g))}}},
ZQ(d,e,f,g,h){var w=this.ajT(d,e,f,g,h)
return w},
ZP(d,e,f,g){return this.ZQ(d,e,f,g,null)},
ajT(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.co($.an().r,C.ag,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gt(a3),d=i.fe(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.az(new B.fe(d,a0))
if(e===1)g.az(new B.ct(d,a0))}else g.az(new B.ct(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fe(f.h(a3,t).a,a1,a4)
r=i.dI(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fe(f.h(a3,q).a,a1,a4)
q=i.dI(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fe(f.h(a3,n?o:t).a,a1,a4)
l=i.dI(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.MD(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZR(d,e,f,g,h,i){var w=this,v=B.Nr(f),u=J.Y(g),t=w.fe(u.h(g,u.gt(g)-1).a,d,h),s=d.b
v.az(new B.ct(t,s))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,s))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.px())
return v},
ajS(d,e,f,g,h){return this.ZR(d,e,f,g,h,!1)},
ZO(d,e,f,g,h,i){var w=this,v=B.Nr(f),u=J.Y(g),t=w.fe(u.h(g,u.gt(g)-1).a,d,h)
v.az(new B.ct(t,0))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,0))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.px())
return v},
ajR(d,e,f,g,h){return this.ZO(d,e,f,g,h,!1)},
aSZ(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fe(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dI(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fe(t.a,w,g)
s=r.r
s===$&&B.a()
A.bB1(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.i0(e,r.r)},
aST(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fe(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fe(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dI(t.b,w,g)
s=r.r
s===$&&B.a()
A.bB1(s,q.b,q.c,new B.I(v,0,u,t))
d.a.i0(e,r.r)},
aSX(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Nt(B.Nr(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iy:C.ea
u.e=C.ez
u.r=v.gq(0)
u.seX(null)
u.c=f.x
u.r=v.gq(0)
$.lE()
u.z=new B.zO(C.aw,w.c*0.57735+0.5)
d.a.i0(A.aCt(e,f.cy).eb(w.b),this.f)},
aSV(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iy:C.ea
q.e=C.ez
q=f.b
q===$&&B.a()
q=s.fe(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dI(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fe(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dI(u.b,r,g)
t=s.f
A.bB1(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bZ8(t)
d.a.i0(A.aCt(e,f.cy),s.f)},
aT5(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bO_(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dY("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lE().a_m(b4,u.b)
s=u.a
r=w.k(0,C.j0)?new B.kx(1):w
q=new B.tK(new B.fp(s,a8,a8,C.b9,a8,a8,a8,a8,a8,a8,t),C.bv,C.x,r,a8,a8,a8,a8,C.bE,a8)
q.agC(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fe(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.fP.gev()
k=o+(w-1)*4+(C.fP.gd3(0)+C.fP.gd6(0))
j=t-k-16
i=a7.a_n(b3,l,D.xW,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Gv(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bNZ(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lE().KG(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lE().KG(new B.H(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.F.gq(0)
s.c=0}b5.Wk(0,new A.aM6(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c0S(q.r,q.w)
A:{if(D.Et===a5){a6=a3
break A}if(D.Eu===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wk(0,new A.aM7(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
ZV(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fe(v[0].a,e,f)
return this.fe(v[v.length-1].a,e,f)-w},
WZ(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akj(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fT(t,new A.aM9())
return t.length===0?null:t},
akj(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fR))continue
p=u.$2(e,new B.r(this.fe(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qv(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vQ.prototype={}
A.a8f.prototype={
bn(d){var w,v=this.e,u=B.bA(d,null,x.w).w.gcP(),t=new A.aM5()
t.a1v()
$.an()
w=B.aX()
w.b=C.b_
t.f=w
w=B.aX()
w.b=C.bj
t.r=w
w=B.aX()
w.b=C.b_
t.w=w
w=B.aX()
w.b=C.bj
w.r=C.K.gq(0)
w.a=D.a04
t.x=w
w=B.aX()
w.b=C.b_
w.r=C.F.gq(0)
t.y=w
w=B.aX()
w.b=C.bj
w.r=C.o.gq(0)
t.z=w
w=B.aX()
w.b=C.b_
w.r=C.K.gq(0)
w.c=1
t.Q=w
t=new A.acn(this.d,v,u,t,d,C.b9,new B.br(),B.aL(x.j))
t.bl()
t.Ze(v.cx)
t.afM()
return t},
bx(d,e){e.sij(0,this.d)
e.sYZ(this.e)
e.scP(B.bA(d,null,x.w).w.gcP())
e.B=d
e.bd()}}
A.acn.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYZ(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a13(d.cx)
w.bd()},
scP(d){if(this.d0.k(0,d))return
this.d0=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.be(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a2F(t,v),new A.w7(u.aC,u.i6,u.d0,x.C))
s.restore()},
a_f(d){var w=this,v=w.gC(0)
return new A.P8(w.fX.WZ(d,v,new A.w7(w.aC,w.i6,w.d0,x.C)))}}
A.Ob.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a2F.prototype={
aQd(d){this.a.a.clipRect(B.dK(d),$.mJ()[1],!0)
return null},
aen(d,e){d.aM(this.a,e)},
Wk(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.be(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lE()
s.YX(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DP(d,e,f,g){var w=new B.co($.an().r,C.ag,null,null,B.b([],x.v))
w.az(new B.fe(d.a,d.b))
w.az(new B.ct(e.a,e.b))
this.a.i0(A.aCt(w,g),f)}}
A.zK.prototype={
gbs(){return[this.a]}}
A.anY.prototype={}
A.a2O.prototype={}
A.b3f.prototype={
KG(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aY_(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d5(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aY0(d,e){var w,v
if(d==null)return D.a0f
w=d.b
v=e/2
return d.aRp(w>v?v:w)},
OT(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b07(w)},
b07(d){if(d<1)return this.aKb(d)
return this.a8E(d)},
aKb(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8E(d*q)/q},
a8E(d){var w,v=C.e.j(C.d.Y(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.Y(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.Y(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.Y(Math.pow(10,v))
else return C.d.Y(Math.pow(10,v))},
ak8(d){if(d>=1)return 1
else if(d>=0.1)return 2
else if(d>=0.01)return 3
else if(d>=0.001)return 4
else if(d>=0.0001)return 5
else if(d>=0.00001)return 6
else if(d>=0.000001)return 7
else if(d>=1e-7)return 8
else if(d>=1e-8)return 9
else if(d>=1e-9)return 10
return 1},
a_m(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j6
w=e.a?u.w.c6(e):e
v=B.b4(d,C.vP)
v=v==null?null:v.ay
return v===!0?w.c6(C.mt):w},
ak_(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qx)","B(pM)","G(G,pM)","B(eC)","~(v,fN)","G(eb,v)","pN(G)","vh(z)","G(G,qx)","bR(G,tN)","R<~>()","v(qv,qv)","xe(C,bE)","rw(rw)","J6(ok)","qx(@)","vU(@)","rg(z)","wS(@)","IH(C,bE)","K0(on)","J1(ol)","D7(@)","eb(G)","vi(dH<vi>)","aj(G,tN)","EH(dH<aGM>)","pM(@)","G(vU)","G(wS)","x9(C,bE)","Bz(z)","~()","lV(wJ<lV>)","~(hw,LE?)","y1(@)","G(iq)","B(fN)","~(v,iq)","~(@)","k0(o1)","c(o1)","k0(bH<v,G>)","k0(G)","o1(k0)","~(hw,P8?)","eb(eb)","R<on>(c3<on>)","zF(@)","R<ok>(c3<ok>)","tP(v)","vj(eC,G,eb,v)","rL(na)","v(v,v,G)","v(vQ,vQ)","G(fN)","R<ol>(c3<ol>)","yP(es<C?>)","fN(fN,fN,G)","iq(iq,iq,G)","mO(mO,mO,G)","Dp?(fN,v,iq,v)","E(fN)","c(G,tN)","eC(eC,eC,G)","B(G)","n7(n7,n7,G)","nx(nx,nx,G)","kW(kW,kW,G)","lm(lm,lm,G)","f(kW)","f(lm)","eb(eb,eb,G)","mP(mP,mP,G)","vj(eC,G,eb,v{size:G?})","B(eC,eb)","G(r,r)","u<tP>(eb,u<v>)","~(xb)","u<rL>(u<na>)","E(na)","B(eb)"])
A.aGH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cW(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.am(k==null?"":k)
w=l.h(0,"booking_date")
w=B.ej(J.am(w==null?"":w))
if(w==null)w=B.bS(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.am(v==null?"":v)
u=l.h(0,"account_name")
u=J.am(u==null?"":u)
t=l.h(0,"direction")
t=J.am(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.am(s)
r=A.bvf(l.h(0,"amount_net"))
q=A.bvf(l.h(0,"amount_tax"))
p=A.bvf(l.h(0,"amount_gross"))
o=A.bvf(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.am(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.am(m)
l=l.h(0,"source_account_code")
return new A.pM(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.am(l))},
$S:z+27}
A.bwb.prototype={
$1(d){if(!this.a)return d
return d===D.fs?D.lf:D.fs},
$S:z+13}
A.aGI.prototype={
$1(d){var w=B.cW(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qx(J.am(v==null?"":v),A.pg(w.h(0,"revenue_net")),A.pg(w.h(0,"expense_net")),A.pg(w.h(0,"result_net")))},
$S:z+15}
A.aGJ.prototype={
$1(d){var w,v,u,t=B.cW(x.f.a(d),x.N,x.z),s=B.ae(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ae(t.h(0,"code"))
v=A.pg(t.h(0,"gross"))
u=B.b0(t.h(0,"purchases_count"))
u=u==null?null:C.d.Y(u)
if(u==null)u=0
return new A.vU(s,r,w,v,u,A.pg(t.h(0,"avg_basket")))},
$S:z+16}
A.aGK.prototype={
$1(d){var w,v=B.cW(x.f.a(d),x.N,x.z),u=B.ae(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b0(v.h(0,"quantity"))
w=w==null?null:C.d.Y(w)
if(w==null)w=0
return new A.wS(u,t,w,A.pg(v.h(0,"gross")))},
$S:z+18}
A.aH2.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.D7(v,u,J.am(t==null?"expense":t),A.uy(w.h(d,"net")),A.uy(w.h(d,"tax")),A.uy(w.h(d,"gross")))},
$S:z+22}
A.bw4.prototype={
$1(d){return new A.vi(d.aj($.bW(),x.A))},
$S:z+24}
A.bw5.prototype={
$1(d){return new A.EH(d.aj($.bSG(),x.D))},
$S:z+26}
A.bxZ.prototype={
$1(d){return E.aGL()},
$S:z+33}
A.bw6.prototype={
$1(d){var w=d.aj($.qW(),x.P)
return d.aj($.a18(),x.a).Gd(w)},
$S:z+47}
A.bw2.prototype={
$1(d){var w=d.aj($.qW(),x.P)
return d.aj($.a18(),x.a).FZ(w)},
$S:z+49}
A.bw3.prototype={
$1(d){var w=d.aj($.qW(),x.P)
return d.aj($.a18(),x.a).G8(w)},
$S:z+56}
A.bw1.prototype={
$1(d){return this.ajI(d)},
ajI(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aj($.bW(),x.A).fD("finance_balance_kpis",t),$async$$1)
case 3:s=r.cW(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aGG.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aF(0,$.a18(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGF.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aF(0,$.a18(),x.a).LK(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bdr.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbK()
r=$.byU()
if(s.e==null)B.S(B.X(y.b))
s.gcd().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bdm.prototype={
$1(d){var w=this.a
return w.J(new A.bdl(w,d))},
$S:z+78}
A.bdl.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bdn.prototype={
$0(){var w=this.a
return w.J(new A.bdk(w))},
$S:0}
A.bdk.prototype={
$0(){return this.a.x=null},
$S:0}
A.bdq.prototype={
$0(){return D.TE},
$S:96}
A.bdp.prototype={
$2(d,e){return new A.xe("Buchungen konnten nicht geladen werden: "+B.j(d),C.a6,D.EF,null)},
$S:z+12}
A.bdo.prototype={
$1(d){return new A.J6(d,this.a.asN(d.b),null)},
$S:z+14}
A.bdj.prototype={
$1(d){var w=this.a
if(w.gSt()!=null&&d.c!==w.gSt())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bdf.prototype={
$0(){return this.a.e.$1(D.B8)},
$S:0}
A.bdg.prototype={
$0(){return this.a.e.$1(D.a_b)},
$S:0}
A.bdh.prototype={
$0(){return this.a.e.$1(D.a_c)},
$S:0}
A.bdi.prototype={
$0(){return this.a.e.$1(D.a_d)},
$S:0}
A.bhg.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bhh.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bhi.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bhj.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bhk.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bhl.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bhm.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aH0.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.byV()
if(s.e==null)B.S(B.X(y.b))
s.gcd().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGS.prototype={
$0(){return this.a.JD(this.b,this.c)},
$S:0}
A.aGT.prototype={
$0(){return this.a.Bw(this.b,this.c)},
$S:0}
A.aGU.prototype={
$0(){var w=x.z
return B.b9(this.a,!1).dH(B.dB(new A.aGR(),null,w),w)},
$S:0}
A.aGR.prototype={
$1(d){return F.Dp},
$S:z+17}
A.aGV.prototype={
$0(){return B.pS(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aGW.prototype={
$0(){var w=x.z
return B.b9(this.a,!1).dH(B.dB(new A.aGQ(),null,w),w)},
$S:0}
A.aGQ.prototype={
$1(d){return D.a9H},
$S:z+7}
A.aGX.prototype={
$0(){var w=this
return w.a.Bx(w.b,w.c,w.d)},
$S:0}
A.aH_.prototype={
$0(){return D.TE},
$S:96}
A.aGZ.prototype={
$2(d,e){return new A.IH(B.j(d),null)},
$S:z+19}
A.aGY.prototype={
$1(d){return new A.K0(d,null)},
$S:z+20}
A.aGP.prototype={
$1(d){var w=null,v=this.a,u=$.dC()
v=B.i("Die Finanzauswertung f\xfcr "+u.al(v.a)+" \u2013 "+u.al(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lH(B.b([B.dN(C.cZ,w,w,new A.aGN(u),w,w),B.e_(F.vr,new A.aGO(u),B.dF(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vs)},
$S:55}
A.aGN.prototype={
$0(){B.b9(this.a,!1).df(!1)
return null},
$S:0}
A.aGO.prototype={
$0(){B.b9(this.a,!1).df(!0)
return null},
$S:0}
A.bkv.prototype={
$0(){var w=this.a.aF(0,$.qW().ghP(),x.V),v=E.aGL()
w.uk(0,v)
return v},
$S:0}
A.bkw.prototype={
$0(){var w=this.a.aF(0,$.qW().ghP(),x.V),v=new B.bb(Date.now(),0,!1),u=new E.lV(B.bS(B.b2(v),1,1,0,0,0,0),v)
w.uk(0,u)
return u},
$S:0}
A.bkx.prototype={
$0(){return this.a.IY(this.b,this.c)},
$S:0}
A.bku.prototype={
$2(d,e){return new B.oY(B.V(d).aQM(B.V(d).ax.aRE(C.h,C.m)),e,null)},
$S:1033}
A.brd.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.de(),p=A.OU(!1,C.ll,"Umsatz 7 %",q.al(r.a),u),o=A.OU(!1,C.ll,"Umsatz 19 %",q.al(r.b),u),n=A.OU(!0,D.abm,"Umsatz netto",q.al(r.c),u),m=r.d
m=A.OU(!1,D.abl,"Aufwand",A.bD2(m,A.bwa(t,"",m)),A.bNJ(t,A.bwa(t,"",m)))
w=r.e
v=q.al(w)
return E.aJe(1.7,B.b([p,o,n,m,A.OU(!0,C.o2,"Ergebnis",v,w<0?C.a6:C.am),A.OU(!1,C.fS,"USt-Saldo",q.al(r.f-r.r),u)],x.p),s,12,12,C.il,!0)},
$S:114}
A.bre.prototype={
$0(){var w=x.z
return B.b9(this.a,!1).dH(B.dB(new A.brc(this.b),null,w),w)},
$S:0}
A.brc.prototype={
$1(d){return new A.vh(this.a.a,null)},
$S:z+7}
A.aLQ.prototype={
$0(){return D.avE},
$S:96}
A.aLP.prototype={
$2(d,e){var w=null
return B.bj(C.a6,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.x(C.h,13,C.l),w,w,w),C.fi,w,C.E,w,w,3)},
$S:180}
A.aLO.prototype={
$1(d){return new A.J1(d,null)},
$S:z+21}
A.bgR.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.de(),i=j.al(k.c),h=l.w,g=l.d,f=B.af(g).i("ac<1,G>"),e=f.i("au.E"),d=B.Q(new B.ac(g,new A.bgG(),f),e)
i=A.jU(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.al(r.b)
w=B.Q(new B.ac(g,new A.bgH(),f),e)
d=A.jU(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.al(k.e)
w=B.Q(new B.ac(g,new A.bgI(),f),e)
k=A.jU(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ai(h.b,1)
v=B.Q(new B.ac(g,new A.bgJ(),f),e)
w=A.jU(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ai(h.a,1)
u=B.Q(new B.ac(g,new A.bgK(),f),e)
v=A.jU(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ai(r.c,1)
t=B.Q(new B.ac(g,new A.bgL(),f),e)
u=A.jU(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ai(h.c,1)
s=B.Q(new B.ac(g,new A.bgM(),f),e)
t=A.jU(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.al(h.d)
s=B.Q(new B.ac(g,new A.bgN(),f),e)
h=A.jU(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.al(l.r.d)
m=B.Q(new B.ac(g,new A.bgO(m),f),e)
m=A.jU(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.al(l)
l=B.Q(new B.ac(g,new A.bgP(l),f),e)
l=A.jU(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ai(j,1)
j=B.Q(new B.ac(g,new A.bgQ(j),f),e)
return E.aJe(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jU(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.il,!0)},
$S:114}
A.bgG.prototype={
$1(d){return d.b},
$S:z+0}
A.bgH.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bgI.prototype={
$1(d){return d.d},
$S:z+0}
A.bgJ.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgK.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bgL.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bgM.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgN.prototype={
$1(d){return d.d},
$S:z+0}
A.bgO.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bgP.prototype={
$1(d){return this.a},
$S:z+0}
A.bgQ.prototype={
$1(d){return this.a},
$S:z+0}
A.bgS.prototype={
$0(){return A.bCY(this.b,1.45,new A.UO(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bgT.prototype={
$0(){return A.bCY(this.b,1.6,new A.V4(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bva.prototype={
$1(d){var w=this,v=null,u=B.ao(16),t=x.p,s=B.b([B.ah(B.b([B.as(B.i(w.a,v,v,v,v,B.by(C.h,18,C.p),v,v,v),1),B.fc(v,v,D.adM,v,v,new A.bv9(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.x(C.n,12,C.aG),v,v,v),C.I],t))
s.push(C.t)
s.push(B.bO(new B.mN(w.c,w.d,v),v,17976931348623157e292))
return B.a5G(v,C.o,new B.ad(C.aj,B.a7(s,C.z,C.f,C.H),v),v,v,v,C.fQ,C.v6,v,new B.d_(u,C.J),v)},
$S:1034}
A.bv9.prototype={
$0(){return B.b9(this.a,!1).eU()},
$S:0}
A.bgU.prototype={
$0(){var w=this.a,v=B.b7(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bCY(this.b,2.4,new A.Zm(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.bqh.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.bqi.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bqj.prototype={
$1(d){return A.aM0(null,1.4,null,C.a6,0.35,D.ail,D.Ek,null,!1,!1,!1,!1,D.FJ,!1,10,D.Yw,!0,C.lC,B.b([new A.eC(0,d),new A.eC(this.a,d)],x.U))},
$S:z+23}
A.b7b.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+8}
A.b7d.prototype={
$2(d,e){var w=null
return B.i(this.a.aLw(d),w,w,w,w,B.x(C.n,10,C.D),w,w,w)},
$S:z+25}
A.b7e.prototype={
$2(d,e){var w=null,v=C.d.Y(d)
if(v<0||v>=this.a.length)return C.vf
return new B.ad(C.l3,B.i(C.c.cM(this.a[v].a,5),w,w,w,w,B.x(C.n,9,C.D),w,w,w),w)},
$S:z+9}
A.b7c.prototype={
$1(d){return D.a9L},
$S:z+6}
A.b8b.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b8c.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b8d.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b8e.prototype={
$2(d,e){var w=null,v=C.d.Y(d)
if(v<0||v>=3)return C.vf
return new B.ad(C.l3,B.i(this.a[v],w,w,w,w,B.x(C.h,12,C.p),w,w,w),w)},
$S:z+9}
A.bhA.prototype={
$1(d){return d.d},
$S:z+28}
A.bhB.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bsw.prototype={
$1(d){return d.d},
$S:z+29}
A.bsx.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b5v.prototype={
$0(){return D.avM},
$S:96}
A.b5u.prototype={
$2(d,e){return new A.x9("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+30}
A.b5t.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bj(m,B.a7(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.x(C.h,14,C.D),m,m,m),C.I,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.x(C.n,12.5,C.l),m,m,m),C.t,B.jS(C.cb,B.b([B.fS(C.Fh,D.aJG,new A.b5n(w,v),m),B.fS(D.adn,D.aIB,new A.b5o(w,v),m)],u),C.df,8,8)],u),C.z,C.f,C.i),C.a5,m,C.E,m,m,3)}w=new A.b5w(d)
t=C.b.fa(n.a.e.d,0,new A.b5p())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jx(new A.b5q(new A.b5x(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.I,B.ah(B.b([B.as(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.x(C.n,11,C.l),m,m,m),1),B.qs(D.aeC,D.aIW,new A.b5r(q,p),m),B.qs(D.aec,D.aIH,new A.b5s(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a8,C.f,C.i)},
$S:225}
A.b5n.prototype={
$0(){return A.awC(this.a,this.b,null)},
$S:0}
A.b5o.prototype={
$0(){return A.awz(this.a,this.b)},
$S:0}
A.b5w.prototype={
$1(d){var w=B.b0(J.a2(this.a,d))
return w==null?null:w},
$S:1035}
A.b5x.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ai(v,1)
w=B.b7(w,".",",")+" %"}return w},
$S:32}
A.b5p.prototype={
$2(d,e){return d+e.d},
$S:z+8}
A.b5q.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jU(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i5,o.$1("liquidity1_pct")),m=A.jU(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i5,o.$1("liquidity2_pct")),l=A.jU(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i5,o.$1("liquidity3_pct"))
o=A.jU(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i5,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ai(w,1)
w=B.b7(w,".",",")+" %"}w=A.jU(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i5,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.de()
v=u.al(v)
return E.aJe(p,B.b([n,m,l,o,w,A.jU(s,s,!1,"Bilanzsumme",!1,"EK "+u.al(t.d),s,s,s,C.i5,v)],x.p),q,12,12,C.il,!0)},
$S:114}
A.b5r.prototype={
$0(){return A.awz(this.a,this.b)},
$S:0}
A.b5s.prototype={
$0(){return A.awC(this.a,this.b,this.c)},
$S:0}
A.bv8.prototype={
$1(d){return new A.Bz(this.a,new A.bv7(this.b),this.c,null)},
$S:z+31}
A.bv7.prototype={
$0(){var w=this.a,v=$.byT()
if(w.e==null)B.S(B.X(y.b))
w.gcd().c_(v)},
$S:0}
A.b5h.prototype={
$0(){},
$S:0}
A.b5i.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b5j.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b5l.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uF(u.b,B.bS(2024,1,1,0,0,0,0),null,r,new B.bb(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b5k(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b5k.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b5m.prototype={
$0(){return B.b9(this.a,!1).eU()},
$S:0}
A.b5y.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b5z.prototype={
$1(d){return new A.y1(x.B.a(d),this.a.a.r)},
$S:z+35}
A.azh.prototype={
$1(d){return d.e},
$S:z+36}
A.azi.prototype={
$2(d,e){return d+e},
$S:46}
A.azk.prototype={
$1(d){return d.c.length!==0},
$S:z+37}
A.azm.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+38}
A.azn.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aen(v.d,v.e)},
$S:0}
A.az_.prototype={
$1(d){return 0},
$S:1036}
A.ayZ.prototype={
$2(d,e){return B.eV(C.bW,this.a.am9(e),C.r,C.bl,null)},
$S:1037}
A.b_J.prototype={
$1(d){return d.a},
$S:z+40}
A.b_K.prototype={
$1(d){return d.b},
$S:z+41}
A.b_L.prototype={
$1(d){return new A.k0(this.a.ch[d.a].a,d.b)},
$S:z+42}
A.b_M.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mL||v===D.dR))t=1-t
return new A.k0(d,t*w.d)},
$S:z+43}
A.b_N.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lE()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ai(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ai(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ai(v/1000,1)
t="K"}else{u=C.d.ai(v,r.ak8(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o1(d,q.c.b.$2(p,new A.tN(u+t,s.e)))},
$S:z+44}
A.aVY.prototype={
$1(d){this.a.l9(new A.a6t(d))},
$S:169}
A.aVZ.prototype={
$1(d){this.a.l9(new A.a6u(d))},
$S:42}
A.aW_.prototype={
$1(d){this.a.l9(new A.a6v(d))},
$S:30}
A.aW0.prototype={
$0(){this.a.l9(D.a24)},
$S:0}
A.aW1.prototype={
$1(d){this.a.l9(new A.NJ())},
$S:45}
A.aW2.prototype={
$1(d){this.a.l9(new A.a6y(d))},
$S:43}
A.aW3.prototype={
$0(){this.a.l9(D.a25)},
$S:0}
A.aW4.prototype={
$1(d){this.a.l9(new A.NM(d))},
$S:78}
A.aW5.prototype={
$1(d){this.a.l9(new A.a6s(d))},
$S:172}
A.aW6.prototype={
$1(d){this.a.l9(new A.a6r(d))},
$S:173}
A.aW7.prototype={
$1(d){return this.a.l9(new A.NH(d))},
$S:174}
A.aW8.prototype={
$1(d){return this.a.l9(new A.a6w(d))},
$S:66}
A.aW9.prototype={
$1(d){return this.a.l9(new A.NK(d))},
$S:59}
A.bh5.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aRk(w==null?B.b([],x.t):w)},
$S:z+46}
A.bh3.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bh4.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fT(w,new A.bh2())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.Hd(w))},
$S:0}
A.bh2.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+11}
A.bh6.prototype={
$1(d){return new A.zF(x.hf.a(d),this.a.a.r)},
$S:z+48}
A.aM1.prototype={
$1(d){return!d.k(0,D.fR)},
$S:z+3}
A.bvT.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bHM(t?A.bCJ(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tP(w,new A.yR(!0,A.bDz(),new A.bvS(v)))},
$S:z+50}
A.bvS.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bWG(A.bCJ(d,e,f),w,A.c4E(d,e,f))},
$S:z+51}
A.bvQ.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j5(v,v,u==null?D.dw:u,v,v,v,v,v,v,v,v,14,v,v,C.D,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rL(C.d.j(d.b),w)},
$S:z+52}
A.aM3.prototype={
$1(d){return d.a.length!==0},
$S:z+81}
A.aM4.prototype={
$1(d){return!d.k(0,D.fR)},
$S:z+3}
A.aM8.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+54}
A.aM6.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aM7.prototype={
$0(){this.a.aen(this.b,this.c)},
$S:0}
A.aM9.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+11}
A.aza.prototype={
$1(d){return d.gdt(0)},
$S:z+55}
A.azb.prototype={
$2(d,e){return d+e},
$S:46}
A.aze.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.af(v).i("iX<1>")).aB(0,new A.azf(w,this.a/(u+1),this.c))},
$S:0}
A.azf.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+4}
A.azc.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+4}
A.azd.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aJd.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1038}
A.aCu.prototype={
$1(d){return d},
$S:1039};(function aliases(){var w=A.Ly.prototype
w.a0j=w.ic
w.ams=w.aT1
w.amt=w.aeg
w=A.Uo.prototype
w.ap4=w.l
w=A.LH.prototype
w.a0k=w.ic
w=A.GM.prototype
w.a13=w.Ze})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c8d","bWC",57)
var q
v(q=A.Uq.prototype,"gaFj","aFk",32)
v(q,"gaEm","Ie",10)
v(q,"gaF3","Ip",10)
u(A.Ur.prototype,"gat3","at4",34)
t(A,"c7_",3,null,["$3"],["bTU"],58,0)
t(A,"c70",3,null,["$3"],["bTV"],59,0)
t(A,"c71",3,null,["$3"],["bTW"],60,0)
t(A,"c73",4,null,["$4"],["c7R"],61,0)
w(A,"c72","c7Q",62)
s(A,"bD1","c7S",63)
t(A,"c6V",3,null,["$3"],["bWH"],64,0)
w(A,"a0B","cah",65)
w(A,"awF","c7V",6)
t(A,"c6X",3,null,["$3"],["bXt"],66,0)
t(A,"c6Z",3,null,["$3"],["c1L"],67,0)
t(A,"c6W",3,null,["$3"],["bXs"],68,0)
t(A,"c6Y",3,null,["$3"],["c1K"],69,0)
w(A,"chz","bXr",70)
w(A,"chA","c1J",71)
r(A.Za.prototype,"ga4L","ayE",39)
u(A.WU.prototype,"gazV","azW",45)
t(A,"c96",3,null,["$3"],["bXV"],72,0)
t(A,"c95",3,null,["$3"],["bTX"],73,0)
w(A,"c99","cai",3)
t(A,"bOo",4,null,["$5$size","$4"],["bMP",function(d,e,f,g){return A.bMP(d,e,f,g,null)}],74,0)
s(A,"bDz","cag",75)
s(A,"bOp","c6I",76)
s(A,"bOs","c7Y",77)
s(A,"bOr","c7U",5)
s(A,"bOq","c7T",5)
w(A,"c98","bO_",79)
w(A,"c97","bNZ",80)
t(A,"a0H",3,null,["$3"],["c94"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.F,[A.a82,A.alS,A.x5,A.J6,A.aj0,A.xe,A.ahz,A.an1,A.JB,A.K0,A.ahx,A.IH,A.a2j,A.J1,A.amj,A.anC,A.VE,A.Zm,A.UO,A.V4,A.ao7,A.akj,A.Cz,A.au_,A.x9,A.Lz,A.AY])
u(B.C,[A.vi,A.EH,A.bk,A.aiH,A.aix,A.aiz,A.aiA,A.aip,A.am3,A.aiD,A.aiB,A.azw,A.au3,A.azj,A.aiy,A.LH,A.a76,A.tN,A.asq,A.asp,A.aio,A.am2,A.eC,A.am_,A.am1,A.aqw,A.amT,A.auM,A.am0,A.alD,A.alZ,A.ayY,A.bh_,A.az0,A.ail,A.o1,A.alW,A.alX,A.w7,A.hw,A.anL,A.anO,A.aiu,A.aiJ,A.aiv,A.alY,A.anR,A.anP,A.au2,A.aso,A.aM2,A.anN,A.vQ,A.a2F,A.anY,A.a2O,A.b3f])
u(B.ve,[A.pM,A.ok,A.qx,A.vU,A.wS,A.aBS,A.aD_,A.ol,A.D7,A.on])
u(B.o7,[A.aGH,A.bwb,A.aGI,A.aGJ,A.aGK,A.aH2,A.bw4,A.bw5,A.bxZ,A.bw6,A.bw2,A.bw3,A.bw1,A.bdm,A.bdo,A.bdj,A.bhg,A.bhi,A.bhk,A.bhm,A.aGR,A.aGQ,A.aGY,A.aGP,A.brc,A.aLO,A.bgG,A.bgH,A.bgI,A.bgJ,A.bgK,A.bgL,A.bgM,A.bgN,A.bgO,A.bgP,A.bgQ,A.bva,A.bqj,A.b7c,A.b8b,A.b8c,A.bhA,A.bsw,A.b5t,A.b5w,A.b5x,A.bv8,A.b5z,A.azh,A.azk,A.az_,A.b_J,A.b_K,A.b_L,A.b_M,A.b_N,A.aVY,A.aVZ,A.aW_,A.aW1,A.aW2,A.aW4,A.aW5,A.aW6,A.aW7,A.aW8,A.aW9,A.bh5,A.bh6,A.aM1,A.bvT,A.bvS,A.bvQ,A.aM3,A.aM4,A.aza,A.aCu])
u(B.IG,[A.rw,A.xb,A.az8,A.af0,A.Do,A.aFW,A.aLR,A.Ob])
t(A.yP,B.fI)
u(B.yg,[A.aGG,A.aGF,A.bdr,A.bdl,A.bdn,A.bdk,A.bdq,A.bdf,A.bdg,A.bdh,A.bdi,A.aH0,A.aGS,A.aGT,A.aGU,A.aGV,A.aGW,A.aGX,A.aH_,A.aGN,A.aGO,A.bkv,A.bkw,A.bkx,A.bre,A.aLQ,A.bgS,A.bgT,A.bv9,A.bgU,A.b5v,A.b5n,A.b5o,A.b5r,A.b5s,A.bv7,A.b5h,A.b5i,A.b5j,A.b5l,A.b5k,A.b5m,A.b5y,A.azn,A.aW0,A.aW3,A.bh3,A.bh4,A.aM6,A.aM7,A.aze])
t(A.vh,B.bc)
t(A.alT,B.v4)
u(B.yh,[A.bdp,A.bhh,A.bhj,A.bhl,A.aGZ,A.bku,A.brd,A.aLP,A.bgR,A.bqh,A.bqi,A.b7b,A.b7d,A.b7e,A.b8d,A.b8e,A.bhB,A.bsx,A.b5u,A.b5p,A.b5q,A.azi,A.azm,A.ayZ,A.bh2,A.aM8,A.aM9,A.azb,A.azf,A.azc,A.azd,A.aJd])
u(B.yo,[A.yQ,A.apl,A.a83,A.ait])
u(B.L,[A.Bz,A.Sn])
u(B.Z,[A.Uq,A.Za])
u(B.F8,[A.LD,A.P6])
u(B.uO,[A.Ur,A.WU])
t(A.a2f,A.aiH)
t(A.aik,A.a2f)
t(A.a2_,A.aik)
u(A.a2_,[A.aiw,A.anM])
t(A.o2,A.aiw)
t(A.fN,A.aix)
t(A.iq,A.aiz)
t(A.mO,A.aiA)
t(A.a26,A.aip)
t(A.NN,A.am3)
u(A.NN,[A.aiC,A.anQ])
t(A.a2b,A.aiC)
t(A.a2c,A.aiD)
t(A.Dp,A.aiB)
u(A.azw,[A.LE,A.P8])
t(A.af2,A.au3)
t(A.aiE,A.af2)
t(A.a2d,A.aiE)
u(B.b1,[A.y1,A.zF])
t(A.uU,A.aiy)
t(A.Ly,A.LH)
u(A.Ly,[A.azl,A.aM5])
u(B.P1,[A.a29,A.a8f])
u(B.K,[A.GM,A.aim])
u(A.GM,[A.aca,A.acn])
t(A.qm,A.asq)
t(A.adB,A.asp)
t(A.pp,A.aio)
t(A.vk,A.am2)
t(A.yS,A.am_)
t(A.pN,A.am1)
t(A.QW,A.aqw)
t(A.n7,A.amT)
t(A.nx,A.auM)
u(A.pN,[A.amS,A.auL])
t(A.kW,A.amS)
t(A.lm,A.auL)
t(A.a6q,A.am0)
u(A.a6q,[A.amR,A.auK])
t(A.a7h,A.amR)
t(A.afq,A.auK)
t(A.Nx,A.alD)
t(A.vj,A.alZ)
t(A.NG,A.vj)
t(A.adC,B.ha)
t(A.ain,A.aim)
t(A.Uo,A.ain)
t(A.a20,A.Uo)
t(A.k0,A.ail)
t(A.a6n,A.alW)
t(A.a6p,A.alX)
u(A.hw,[A.a6t,A.a6u,A.a6v,A.NI,A.NJ,A.a6y,A.NL,A.NM,A.a6s,A.a6r,A.NH,A.a6w,A.a6x,A.NK])
t(A.q0,A.anM)
t(A.eb,A.anL)
t(A.P7,A.anO)
t(A.a28,A.aiu)
t(A.mP,A.aiJ)
t(A.LC,A.aiv)
t(A.yR,A.alY)
t(A.Fj,A.anQ)
t(A.a8g,A.anR)
t(A.anK,A.eC)
t(A.na,A.anK)
t(A.qv,A.na)
t(A.rL,A.anP)
t(A.tP,A.au2)
t(A.Hd,A.aso)
t(A.zG,A.anN)
t(A.zK,A.anY)
w(A.aip,A.bk)
w(A.aiw,A.bk)
w(A.aix,A.bk)
w(A.aiz,A.bk)
w(A.aiA,A.bk)
w(A.aiB,A.bk)
w(A.aiC,A.bk)
w(A.aiD,A.bk)
w(A.aiE,A.bk)
w(A.aiy,A.bk)
w(A.aik,A.bk)
w(A.aio,A.bk)
w(A.alD,A.bk)
w(A.alZ,A.bk)
w(A.am_,A.bk)
w(A.am1,A.bk)
w(A.am2,A.bk)
w(A.amS,A.bk)
w(A.amR,A.bk)
w(A.amT,A.bk)
w(A.aqw,A.bk)
w(A.asp,A.bk)
w(A.asq,A.bk)
w(A.au3,A.bk)
w(A.auL,A.bk)
w(A.auK,A.bk)
w(A.auM,A.bk)
w(A.ail,A.bk)
v(A.aim,B.aE)
w(A.ain,B.e8)
v(A.Uo,B.a5p)
w(A.aiH,A.bk)
w(A.alW,A.bk)
w(A.alX,A.bk)
w(A.am3,A.bk)
w(A.aiu,A.bk)
w(A.aiv,A.bk)
w(A.aiJ,A.bk)
w(A.alY,A.bk)
w(A.am0,A.bk)
w(A.anK,A.bk)
w(A.anL,A.bk)
w(A.anM,A.bk)
w(A.anO,A.bk)
w(A.anP,A.bk)
w(A.anQ,A.bk)
w(A.anR,A.bk)
w(A.aso,A.bk)
w(A.au2,A.bk)
w(A.anN,A.bk)
w(A.anY,A.bk)})()
B.bsL(b.typeUniverse,JSON.parse('{"a82":{"F":[],"c":[]},"EH":{"aGM":[]},"yP":{"fI":["bg<~>"],"fI.T":"bg<~>"},"vh":{"bc":[],"L":[],"c":[]},"J6":{"F":[],"c":[]},"xe":{"F":[],"c":[]},"alT":{"Z":["vh"]},"alS":{"F":[],"c":[]},"x5":{"F":[],"c":[]},"aj0":{"F":[],"c":[]},"K0":{"F":[],"c":[]},"IH":{"F":[],"c":[]},"yQ":{"bc":[],"L":[],"c":[]},"ahz":{"F":[],"c":[]},"an1":{"F":[],"c":[]},"apl":{"bc":[],"L":[],"c":[]},"JB":{"F":[],"c":[]},"ahx":{"F":[],"c":[]},"a2j":{"F":[],"c":[]},"J1":{"F":[],"c":[]},"x9":{"F":[],"c":[]},"Bz":{"L":[],"c":[]},"a83":{"bc":[],"L":[],"c":[]},"amj":{"F":[],"c":[]},"anC":{"F":[],"c":[]},"VE":{"F":[],"c":[]},"Zm":{"F":[],"c":[]},"UO":{"F":[],"c":[]},"V4":{"F":[],"c":[]},"ao7":{"F":[],"c":[]},"akj":{"F":[],"c":[]},"Cz":{"F":[],"c":[]},"au_":{"F":[],"c":[]},"ait":{"bc":[],"L":[],"c":[]},"Uq":{"Z":["Bz"]},"LD":{"L":[],"c":[]},"Ur":{"Z":["LD"]},"o2":{"bk":[]},"fN":{"bk":[]},"iq":{"bk":[]},"mO":{"bk":[]},"Dp":{"bk":[]},"y1":{"b1":["o2"],"b8":["o2"],"b8.T":"o2","b1.T":"o2"},"a26":{"bk":[]},"a2b":{"bk":[]},"a2c":{"bk":[]},"a2d":{"bk":[]},"uU":{"bk":[]},"a29":{"aV":[],"c":[]},"aca":{"K":[],"M":[],"jA":[],"aU":[]},"pN":{"bk":[]},"n7":{"bk":[]},"nx":{"bk":[]},"kW":{"bk":[]},"lm":{"bk":[]},"vj":{"bk":[]},"a2_":{"bk":[]},"qm":{"bk":[]},"adB":{"bk":[]},"pp":{"bk":[]},"vk":{"bk":[]},"yS":{"bk":[]},"af2":{"bk":[]},"QW":{"bk":[]},"a7h":{"bk":[]},"afq":{"bk":[]},"Nx":{"bk":[]},"NG":{"bk":[]},"Lz":{"F":[],"c":[]},"Sn":{"L":[],"c":[]},"Za":{"Z":["Sn"]},"k0":{"bk":[]},"adC":{"ha":[],"aV":[],"c":[]},"a20":{"e8":["K","hx"],"K":[],"aE":["K","hx"],"M":[],"aU":[],"aE.1":"hx","e8.1":"hx","aE.0":"K"},"AY":{"F":[],"c":[]},"a2f":{"bk":[]},"a6n":{"bk":[]},"NN":{"bk":[]},"a6p":{"bk":[]},"a6t":{"hw":[]},"a6u":{"hw":[]},"a6v":{"hw":[]},"NI":{"hw":[]},"NJ":{"hw":[]},"a6y":{"hw":[]},"NL":{"hw":[]},"NM":{"hw":[]},"a6s":{"hw":[]},"a6r":{"hw":[]},"NH":{"hw":[]},"a6w":{"hw":[]},"a6x":{"hw":[]},"NK":{"hw":[]},"GM":{"K":[],"M":[],"jA":[],"aU":[]},"P6":{"L":[],"c":[]},"WU":{"Z":["P6"]},"q0":{"bk":[]},"eb":{"bk":[]},"mP":{"bk":[]},"na":{"eC":[],"bk":[]},"qv":{"na":[],"eC":[],"bk":[]},"rL":{"bk":[]},"tP":{"bk":[]},"Hd":{"bk":[]},"zF":{"b1":["q0"],"b8":["q0"],"b8.T":"q0","b1.T":"q0"},"P7":{"bk":[]},"a28":{"bk":[]},"LC":{"bk":[]},"yR":{"bk":[]},"a6q":{"bk":[]},"Fj":{"bk":[]},"a8g":{"bk":[]},"zG":{"bk":[]},"a8f":{"aV":[],"c":[]},"acn":{"K":[],"M":[],"jA":[],"aU":[]},"zK":{"bk":[]}}'))
B.bMi(b.typeUniverse,JSON.parse('{"Ly":1,"NN":1,"LH":1,"GM":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.av
return{_:w("D7"),e:w("bg<ok>"),cn:w("bg<ol>"),aN:w("bg<on>"),fM:w("bg<a3<f,@>?>"),c:w("bg<~>"),W:w("k0"),B:w("o2"),dB:w("fN"),T:w("uU"),fj:w("iq"),G:w("mO"),bO:w("mP"),k:w("at"),cX:w("a2O<G>"),dO:w("v0"),R:w("a5<f,@>"),j:w("hr"),bz:w("lP<bb>"),f0:w("od"),E:w("bk"),F:w("yP"),aI:w("pM"),m:w("ok"),X:w("ol"),P:w("lV"),D:w("vi"),a:w("aGM"),d:w("on"),cw:w("eC"),L:w("hx"),o:w("dw<v,E>"),cm:w("kW"),dv:w("n7"),M:w("D<o1>"),I:w("D<bGm>"),O:w("D<fN>"),Y:w("D<iq>"),U:w("D<eC>"),K:w("D<a76>"),u:w("D<eb>"),bC:w("D<vQ>"),aA:w("D<u<eC>>"),v:w("D<ed>"),r:w("D<Hd>"),s:w("D<f>"),eg:w("D<tK>"),df:w("D<qv>"),p:w("D<c>"),n:w("D<G>"),t:w("D<v>"),eF:w("bm<Z<L>>"),Z:w("na"),cz:w("eb"),hf:w("q0"),dj:w("zG"),fT:w("rL"),c_:w("it<pa<bg<~>>>"),x:w("zK<fN>"),y:w("zK<eb>"),J:w("u<v>"),ef:w("vU"),b:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ac<G,G>"),w:w("kf"),aU:w("C"),Q:w("w7<o2>"),C:w("w7<q0>"),dc:w("ed"),eo:w("qb"),gJ:w("qc"),V:w("kq<lV>"),N:w("f"),A:w("ns"),bP:w("bK"),er:w("tK"),fB:w("wS"),dw:w("qv"),bY:w("tP"),cZ:w("qx"),gc:w("ja"),es:w("lm"),bN:w("nx"),l:w("c"),q:w("xu"),g4:w("ij<G>"),cJ:w("B"),i:w("G"),z:w("@"),S:w("v"),bn:w("y1?"),f3:w("zF?"),g:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("C?"),aD:w("ja?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bp=new B.lI(C.m,B.av("lI<E>"))
D.Bw=new A.Do(0,"left")
D.mL=new A.Do(1,"top")
D.Bx=new A.Do(2,"right")
D.dR=new A.Do(3,"bottom")
D.azN=new A.qm(!1,A.bD1(),22,null)
D.kz=new A.pp(16,null,D.azN,!0)
D.a9M=new A.pN(C.F,null,2,null)
D.wg=new A.LC(!1,D.a9M,A.c99(),!0)
D.a_W=new A.az8(3,"spaceEvenly")
D.a04=new B.y5(6,"dstIn")
D.XP=new B.aW(3,3)
D.BA=new B.d5(D.XP,D.XP,C.a3,C.a3)
D.a0f=new B.bl(C.F,0,C.S,-1)
D.C8=new A.a6p()
D.a24=new A.NI()
D.a25=new A.NL()
D.aRX=new A.adB()
D.a7S=new B.bu(8e6)
D.anm=w([],B.av("D<kW>"))
D.ann=w([],B.av("D<lm>"))
D.Eg=new A.Nx(D.anm,D.ann,!0)
D.a9q=new B.dL("Zeitraum",!1,null)
D.a9w=new B.dL("Konten (SKR 03)",!1,null)
D.xW=new A.aFW(0,"center")
D.a9H=new A.vh(null,null)
D.aS9=new A.yR(!0,A.bDz(),A.bOo())
D.Ek=new A.yR(!1,A.bDz(),A.bOo())
D.El=new A.yS(!1,!0,null,A.awF(),A.a0B(),!0,null,A.awF(),A.a0B())
D.aSa=new A.yS(!0,!0,null,A.awF(),A.a0B(),!0,null,A.awF(),A.a0B())
D.a4t=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a4d=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4D=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a4x=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a3U=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a3T=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a51=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a4m=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a54=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a4Z=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.atC=new B.dw([50,D.a4t,100,D.a4d,200,D.a4D,300,D.a4x,400,D.a3U,500,D.a3T,600,D.a51,700,D.a4m,800,D.a54,900,D.a4Z],x.o)
D.dw=new B.rS(D.atC,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.ajm=w([8,4],x.t)
D.a9K=new A.pN(D.dw,null,0.4,D.ajm)
D.a9L=new A.pN(C.a4,null,0.5,null)
D.fR=new A.eC(0/0,0/0)
D.azP=new A.qm(!0,A.bD1(),44,null)
D.mM=new A.pp(16,null,D.azP,!0)
D.azO=new A.qm(!0,A.bD1(),30,null)
D.mN=new A.pp(16,null,D.azO,!0)
D.a9N=new A.vk(!1,D.mM,D.mN,D.mM,D.mN)
D.aSb=new A.vk(!0,D.mM,D.mN,D.mM,D.mN)
D.fs=new A.rw(0,"hinaus")
D.lf=new A.rw(1,"herein")
D.a9W=new A.rw(2,"weder")
D.aJ3=new B.aj("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.aai=new B.eo(D.aJ3,null,null)
D.Et=new A.Ob(0,"left")
D.aar=new A.Ob(1,"center")
D.Eu=new A.Ob(2,"right")
D.aav=new B.a4(57495,"MaterialIcons",null,!1)
D.EF=new B.a4(57912,"MaterialIcons",null,!1)
D.aaJ=new B.a4(58040,"MaterialIcons",null,!0)
D.yc=new B.a4(58927,"MaterialIcons",null,!1)
D.abl=new B.a4(59005,"MaterialIcons",null,!0)
D.abm=new B.a4(59007,"MaterialIcons",null,!0)
D.abn=new B.a4(59011,"MaterialIcons",null,!1)
D.acq=new B.a4(62589,"MaterialIcons",null,!1)
D.abE=new B.a4(61349,"MaterialIcons",null,!1)
D.adk=new B.az(D.abE,20,C.h,null,null)
D.abK=new B.a4(61487,"MaterialIcons",null,!1)
D.adm=new B.az(D.abK,18,null,null,null)
D.adn=new B.az(D.yc,18,null,null,null)
D.adH=new B.az(C.o3,14,C.a6,null,null)
D.adM=new B.az(C.hZ,null,C.h,null,null)
D.adN=new B.az(C.li,null,C.n,null,null)
D.aec=new B.az(C.oa,16,null,null,null)
D.aei=new B.az(C.yn,16,null,null,null)
D.ael=new B.az(D.EF,null,C.a6,null,null)
D.aew=new B.az(F.F7,16,null,null,null)
D.aeC=new B.az(D.yc,16,null,null,null)
D.agH=new A.a83(null)
D.aSg=new A.aLR(0,"horizontal")
D.yy=new A.zG(0,0,0,0,!1)
D.FJ=new A.P7(0.5)
D.Ce=new A.a8g()
D.agU=new A.Fj(D.Ce,A.bOs(),10,A.bOp(),!0,A.bOr(),A.bOq(),!1,null,null,null)
D.aSi=new A.Fj(D.Ce,A.bOs(),10,A.bOp(),!0,A.bOr(),A.bOq(),!0,null,null,null)
D.ail=w([4,3],x.t)
D.axZ=new B.aJ("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.axO=new B.aJ("receivables","Forderungen (kurzfristig)")
D.axC=new B.aJ("inventory_value","Vorr\xe4te (Warenbestand)")
D.axA=new B.aJ("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.axn=new B.aJ("fixed_assets","Anlageverm\xf6gen")
D.axu=new B.aJ("current_liabilities","Kurzfristige Verbindlichkeiten")
D.axV=new B.aJ("long_term_liabilities","Langfristige Verbindlichkeiten")
D.axN=new B.aJ("equity","Eigenkapital")
D.pO=w([D.axZ,D.axO,D.axC,D.axA,D.axn,D.axu,D.axV,D.axN],B.av("D<+(f,f)>"))
D.aSl=w([],x.M)
D.an9=w([],x.O)
D.ana=w([],x.Y)
D.anb=w([],B.av("D<mO>"))
D.anc=w([],B.av("D<mP>"))
D.aSm=w([],x.U)
D.aSn=w([],x.u)
D.and=w([],x.r)
D.auh={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Tt={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ze=new B.a5(D.Tt,[0,0,0,0,0,0,0,C.c0],B.av("a5<f,C>"))
D.aue={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.atw=new B.a5(D.aue,[0,0,0,0],B.av("a5<f,v>"))
D.auw={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.ar5=new B.a5(D.auw,[0,0,0,0,null,null,null,null],B.av("a5<f,v?>"))
D.aqZ=new B.a5(D.auh,[D.ze,D.ze,D.ze,C.c0,C.c0,C.c0,D.atw,D.ar5],x.R)
D.ari=new B.a5(D.Tt,[0,0,0,0,0,0,0,C.ci],x.R)
D.aui={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.ark=new B.a5(D.aui,[8500,1200,3400,300,22e3,4200,9000,22200],B.av("a5<f,G>"))
D.auG={total:0,rows:1}
D.arn=new B.a5(D.auG,[0,C.ci],x.R)
D.aud={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.atx=new B.a5(D.aud,[0,0,0,0,0,0,0,C.ci],x.R)
D.auJ={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aty=new B.a5(D.auJ,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.av("a5<f,f>"))
D.a5a=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a5i=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3X=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a4p=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a4z=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a5y=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a3I=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a4r=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a4C=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a5_=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.atD=new B.dw([50,D.a5a,100,D.a5i,200,D.a3X,300,D.a4p,400,D.a4z,500,D.a5y,600,D.a3I,700,D.a4r,800,D.a4C,900,D.a5_],x.o)
D.Te=new B.rS(D.atD,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8I=new B.ai(32,32,32,32)
D.avE=new B.ad(D.a8I,C.bz,null)
D.a8K=new B.ai(48,48,48,48)
D.TE=new B.ad(D.a8K,C.bz,null)
D.avM=new B.ad(C.aj,C.bz,null)
D.ano=w([],B.av("D<n7>"))
D.anp=w([],B.av("D<nx>"))
D.XR=new A.QW(D.ano,D.anp)
D.ayM=new B.fF("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ayO=new B.fF("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ayQ=new B.fF("Automaten-Business","Umsatz je Automat",null,null)
D.ayT=new B.fF("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ayV=new B.fF("Top","Meistverkaufte Produkte",null,null)
D.ayY=new B.fF("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.ayZ=new B.fF("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yw=new B.tt(C.K,C.v,0)
D.aHs=new B.aj("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aBA=new B.dW(D.aHs,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aJu=new B.aj('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aBD=new B.dW(D.aJu,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aHG=new B.aj("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aBE=new B.dW(D.aHG,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aJn=new B.aj("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aBG=new B.dW(D.aJn,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIS=new B.aj("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aBH=new B.dW(D.aIS,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIP=new B.aj("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aC0=new B.dW(D.aIP,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aSx=new B.T(!0,C.F,null,null,null,null,14,C.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHD=new B.aj("Demo",null,null,null,null,null,null,null,null,null)
D.aHO=new B.aj("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aIB=new B.aj("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aIH=new B.aj("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aIW=new B.aj("sevDesk",null,null,null,null,null,null,null,null,null)
D.aJG=new B.aj("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZM=new A.af0(0,"auto")
D.aKi=new A.af0(1,"top")
D.aOJ=new A.x9("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aOK=new A.x9("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.B8=new A.xb(0,"alle")
D.a_b=new A.xb(1,"aufwand")
D.a_c=new A.xb(2,"erloes")
D.a_d=new A.xb(3,"privat")
D.aPD=new A.xe('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.n,C.li,null)
D.acC=new B.a4(984570,"MaterialIcons",null,!1)
D.aPE=new A.xe("Keine Buchung passt zu dieser Auswahl.",C.n,D.acC,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ci2","bSG",()=>B.j_(new A.bw4(),x.D))
w($,"ci3","a18",()=>B.j_(new A.bw5(),x.a))
w($,"cj3","qW",()=>B.bBH(new A.bxZ(),x.P))
w($,"ci4","byV",()=>C.aF.$1$1(new A.bw6(),x.d))
w($,"ci0","byU",()=>C.aF.$1$1(new A.bw2(),x.m))
w($,"ci1","bFf",()=>C.aF.$1$1(new A.bw3(),x.X))
w($,"ci_","byT",()=>C.aF.$1$1(new A.bw1(),x.h))
w($,"chZ","byS",()=>B.b0z(A.c8d(),x.F,x.c))
w($,"cb4","byp",()=>new A.ayY())
v($,"ceq","lE",()=>new A.b3f())})()};
(a=>{a["7VMjZtU6s3/ipgknSl6WK+s3nak="]=a.current})($__dart_deferred_initializers__);