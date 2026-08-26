((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
P_(d,e,f,g,h){return new A.a8c(f,g,d,h,e,null)},
a8c:function a8c(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vk:function vk(d){this.a=d},
c9s(d){var w
if(x.f.b(d)){w=J.Y(d,"error")
if(typeof w=="string"&&C.c.aH(w).length!==0)return C.c.aH(w)}if(typeof d=="string"&&C.c.aH(d).length!==0)return C.c.aH(d)
return null},
EM:function EM(d){this.a=d},
bXB(d){var w=J.V(d),v=B.b3(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.bq
w=J.cS(w,new A.aGZ(),x.aI)
w=B.Q(w,w.$ti.i("av.E"))
return new A.on(v,w)},
bw8(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.he(J.am(d))
return w==null?0:w},
pO:function pO(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
on:function on(d,e){this.a=d
this.b=e},
aGZ:function aGZ(){},
bx3(d,e,f){var w,v=new A.bx4(f<0)
if(d==="expense")return v.$1(D.ft)
if(d==="revenue")return v.$1(D.lh)
w=B.ie(C.c.aH(e),null)
if(w!=null&&w>=1800&&w<=1999)return v.$1(C.e.ai(w,100)>=90?D.lh:D.ft)
return D.aac},
bEK(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rA:function rA(d,e){this.a=d
this.b=e},
bx4:function bx4(d){this.a=d},
bXC(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.V(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.zn
w=x.f
v=x.N
u=x.z
t=A.aHj(B.cU(w.a(e.h(a0,"current")),v,u))
s=A.aHj(B.cU(w.a(e.h(a0,"prior_year")),v,u))
r=A.aHj(B.cU(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bq
p=J.cS(p,new A.aH_(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bq
o=J.cS(o,new A.aH0(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bq
q=J.cS(q,new A.aH1(),x.fB)
q=B.Q(q,q.$ti.i("av.E"))
n=B.cU(w.a(e.h(a0,"customer")),v,u)
m=B.b3(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.pk(n.h(0,"app_gross"))
k=B.b3(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.pk(n.h(0,"avg_basket"))
u=B.cU(w.a(e.h(a0,"derived")),v,u)
v=A.pk(u.h(0,"gross_margin_pct"))
e=A.pk(u.h(0,"net_margin_pct"))
w=A.pk(u.h(0,"ebitda_margin_pct"))
j=A.pk(u.h(0,"cashflow_operating"))
i=A.bw9(u.h(0,"revenue_growth_yoy_pct"))
h=A.bw9(u.h(0,"revenue_growth_mom_pct"))
g=A.bw9(u.h(0,"result_growth_yoy_pct"))
u=A.bw9(u.h(0,"result_growth_mom_pct"))
f=B.b3(J.Y(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.oo(t,s,r,p,o,q,new A.aC8(m,l,k,n),new A.aDh(v,e,w,j,i,h,g,u),f)},
pk(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.he(J.am(d))
return w==null?0:w},
bw9(d){if(d==null)return null
if(typeof d=="number")return d
return B.he(J.am(d))},
qz:function qz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vV:function vV(d,e,f,g,h,i){var _=this
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
aC8:function aC8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDh:function aDh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oo:function oo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aH_:function aH_(){},
aH0:function aH0(){},
aH1:function aH1(){},
aHj(d){var w=J.V(d),v=A.uC(w.h(d,"revenue_net_7")),u=A.uC(w.h(d,"revenue_net_19")),t=A.uC(w.h(d,"revenue_net")),s=A.uC(w.h(d,"expense_net")),r=A.uC(w.h(d,"result_net")),q=A.uC(w.h(d,"vat_collected")),p=A.uC(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.bq
w=J.cS(w,new A.aHk(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.oq(v,u,t,s,r,q,p,w)},
uC(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.he(J.am(d))
return w==null?0:w},
Dc:function Dc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oq:function oq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHk:function aHk(){},
bXA(d){return new A.yS(d,new B.ix(x.c_),C.dQ)},
bwY:function bwY(){},
bwZ:function bwZ(){},
byU:function byU(){},
bx_:function bx_(){},
bwW:function bwW(){},
bwX:function bwX(){},
bwV:function bwV(){},
yS:function yS(d,e,f){this.r=d
this.a=e
this.f=f},
aGY:function aGY(d,e,f){this.a=d
this.b=e
this.c=f},
aGX:function aGX(d,e,f){this.a=d
this.b=e
this.c=f},
vj:function vj(d,e){this.d=d
this.a=e},
xb:function xb(d,e){this.a=d
this.b=e},
am5:function am5(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bec:function bec(d){this.a=d},
be7:function be7(d){this.a=d},
be6:function be6(d,e){this.a=d
this.b=e},
be8:function be8(d){this.a=d},
be5:function be5(d){this.a=d},
beb:function beb(){},
bea:function bea(){},
be9:function be9(d){this.a=d},
be4:function be4(d){this.a=d},
am4:function am4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
be0:function be0(d){this.a=d},
be1:function be1(d){this.a=d},
be2:function be2(d){this.a=d},
be3:function be3(d){this.a=d},
x5:function x5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jb:function Jb(d,e,f){this.c=d
this.d=e
this.a=f},
bi2:function bi2(){},
bi3:function bi3(){},
bi4:function bi4(){},
bi5:function bi5(){},
bi6:function bi6(){},
bi7:function bi7(){},
bi8:function bi8(){},
aj9:function aj9(d,e){this.c=d
this.a=e},
xe:function xe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bXD(){return new A.yT(null)},
WI(d,e,f,g,h){return new A.ane(e,h,g,f,d,null)},
yT:function yT(d){this.a=d},
aHi:function aHi(d){this.a=d},
aH9:function aH9(d,e,f){this.a=d
this.b=e
this.c=f},
aHa:function aHa(d,e,f){this.a=d
this.b=e
this.c=f},
aHb:function aHb(d){this.a=d},
aH8:function aH8(){},
aHc:function aHc(d){this.a=d},
aHd:function aHd(d){this.a=d},
aH7:function aH7(){},
aHe:function aHe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHh:function aHh(){},
aHg:function aHg(){},
aHf:function aHf(){},
aH6:function aH6(d,e){this.a=d
this.b=e},
aH4:function aH4(d){this.a=d},
aH5:function aH5(d){this.a=d},
ahI:function ahI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ane:function ane(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
apz:function apz(d,e){this.e=d
this.a=e},
blj:function blj(d){this.a=d},
blk:function blk(d){this.a=d},
bll:function bll(d,e,f){this.a=d
this.b=e
this.c=f},
bli:function bli(){},
JG:function JG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
K5:function K5(d,e){this.c=d
this.a=e},
bs2:function bs2(d){this.a=d},
bs3:function bs3(d,e){this.a=d
this.b=e},
bs1:function bs1(d){this.a=d},
ahG:function ahG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
IM:function IM(d,e){this.c=d
this.a=e},
bHp(d,e,f){return new A.a2s(e,f,d,null)},
bE_(d,e){var w=$.cR().aa(Math.abs(d))
return e===D.ft?"-"+w:w},
bOH(d,e){var w
if(e===D.ft)return d==="revenue"||d==="expense"?C.a0:C.n
if(e===D.lh)w=d==="revenue"||d==="expense"
else w=!1
if(w)return C.am
return C.n},
c9i(d,e){if(d==="expense")return e===D.ft?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.ft?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.ft)return"Privatentnahme"
if(e===D.lh)return"Privateinlage"
return A.bEK(d)},
a2s:function a2s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bDV(d,e,f,g,h){var w=null
return B.hP(w,w,!0,w,new A.bw3(h,g,e,f),d,w,!0,!0,x.H)},
jV(d,e,f,g,h,i,j,k,l,m,n){return new A.anQ(g,n,i,e,d,m,f,k,l,j,null)},
awO(d,e){return A.c7e(d,e)},
c7e(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$awO=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aR(D.aCi)
t=4
o=e.aC(0,$.bL(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fZ("finance-balance-sync",B.A(n,n)),$async$awO)
case 7:r=g
q=B.cU(x.f.a(r.a),x.N,n)
l.MI()
if(J.d(J.Y(q,"configured"),!1)){l.aR(D.aCm)
w=1
break}if(J.d(J.Y(q,"ok"),!0)){o=$.bzO()
if(e.e==null)B.S(B.Z(y.b))
e.gce().c_(o)
l.aR(B.bY(null,null,null,null,null,C.r,null,B.f("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.Y(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}else{o=J.Y(q,"error")
l.aR(B.bY(null,null,null,null,null,C.r,null,B.f("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.MI()
l.aR(B.bY(null,null,null,null,null,C.r,null,B.f("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$awO,v)},
awR(d,e,f){var w=0,v=B.q(x.H)
var $async$awR=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.hP(null,null,!0,null,new A.bw1(f,e,e.aC(0,$.bL(),x.A)),d,null,!0,!0,x.H),$async$awR)
case 2:return B.o(null,v)}})
return B.p($async$awR,v)},
a8d:function a8d(d){this.a=d},
aM7:function aM7(){},
aM6:function aM6(){},
aM5:function aM5(){},
J6:function J6(d,e){this.c=d
this.a=e},
bhD:function bhD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhs:function bhs(){},
bht:function bht(){},
bhu:function bhu(){},
bhv:function bhv(){},
bhw:function bhw(){},
bhx:function bhx(){},
bhy:function bhy(){},
bhz:function bhz(){},
bhA:function bhA(d){this.a=d},
bhB:function bhB(d){this.a=d},
bhC:function bhC(d){this.a=d},
bhE:function bhE(d,e){this.a=d
this.b=e},
bhF:function bhF(d,e){this.a=d
this.b=e},
bw3:function bw3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bw2:function bw2(d){this.a=d},
amw:function amw(d){this.a=d},
anQ:function anQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bhG:function bhG(d,e){this.a=d
this.b=e},
VM:function VM(d,e,f){this.c=d
this.d=e
this.a=f},
Zv:function Zv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
br6:function br6(){},
br7:function br7(){},
br8:function br8(d){this.a=d},
UW:function UW(d,e,f){this.c=d
this.d=e
this.a=f},
b7A:function b7A(){},
b7C:function b7C(d){this.a=d},
b7D:function b7D(d){this.a=d},
b7B:function b7B(){},
Vc:function Vc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8D:function b8D(){},
b8E:function b8E(){},
b8F:function b8F(){},
b8G:function b8G(d){this.a=d},
aol:function aol(d,e){this.c=d
this.a=e},
bim:function bim(){},
bin:function bin(){},
akt:function akt(d,e){this.c=d
this.a=e},
CD:function CD(d,e,f){this.c=d
this.d=e
this.a=f},
aud:function aud(d,e){this.c=d
this.a=e},
btl:function btl(){},
btm:function btm(){},
x9:function x9(d,e){this.c=d
this.a=e},
aiC:function aiC(d,e){this.e=d
this.a=e},
b5U:function b5U(){},
b5T:function b5T(){},
b5S:function b5S(d,e,f){this.a=d
this.b=e
this.c=f},
b5M:function b5M(d,e){this.a=d
this.b=e},
b5N:function b5N(d,e){this.a=d
this.b=e},
b5V:function b5V(d){this.a=d},
b5W:function b5W(d){this.a=d},
b5O:function b5O(){},
b5P:function b5P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5Q:function b5Q(d,e){this.a=d
this.b=e},
b5R:function b5R(d,e,f){this.a=d
this.b=e
this.c=f},
bw1:function bw1(d,e,f){this.a=d
this.b=e
this.c=f},
bw0:function bw0(d){this.a=d},
BD:function BD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uy:function Uy(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b5G:function b5G(){},
b5H:function b5H(d){this.a=d},
b5I:function b5I(d){this.a=d},
b5K:function b5K(d,e){this.a=d
this.b=e},
b5J:function b5J(d,e){this.a=d
this.b=e},
b5L:function b5L(d){this.a=d},
bm:function bm(){},
bHn(d){return new A.LJ(d,C.an,C.bZ,null,null)},
LJ:function LJ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Uz:function Uz(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e6$=f
_.c5$=g
_.c=_.a=null},
b5X:function b5X(d,e){this.a=d
this.b=e},
b5Y:function b5Y(d){this.a=d},
azq(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.anI:f,p=a0==null?16:a0,o=d==null?D.a06:d,n=g==null,m=n?A.bAh(r,r,r,r,r,r,r,r):g,l=a3==null?D.XZ:a3
n=n?A.bAh(r,r,r,r,r,r,r,r):g
w=j==null?D.Eq:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.L:e
return new A.o5(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cf,s,w,i,n)},
azx(d,e,f,g,h){var w=d==null?D.anJ:d,v=e==null?2:e,u=g==null?C.lE:g
return new A.fR(h,f===!0,w,v,u)},
bUS(d,e,f){var w=d.a
w=C.d.aM(w+(e.a-w)*f)
return A.azx(A.kF(d.c,e.c,f,A.c80(),x.fj),B.ai(d.d,e.d,f),!1,A.kF(d.e,e.e,f,A.a0Q(),x.S),w)},
a2j(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Tn
else w=h
v=m==null
u=v?8:m
t=$.lG()
s=t.aYg(f,v?8:m)
t=t.aYh(g,v?8:m)
v=d==null?A.bHl(r,r,r,r,r):d
return new A.it(q,l,w,j,u,s,e,t,v,k==null?D.anK:k)},
bUT(d,e,f){var w,v,u,t,s=B.a1(d.c,e.c,f),r=B.ai(d.e,e.e,f),q=B.mT(d.f,e.f,f),p=A.kF(d.r,e.r,f,A.a0Q(),x.S),o=B.c_(d.w,e.w,f),n=B.ai(d.a,e.a,f),m=B.ai(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ai(w.b,v.b,f)
t=B.ai(w.c,v.c,f)
v=B.a1(w.d,v.d,f)
return A.a2j(A.bHl(v,u,null,!1,t),p,q,o,s,n,null,A.kF(d.y,e.y,f,A.c81(),x.G),m,r)},
bUU(d,e,f){var w,v,u=B.ai(d.a,e.a,f)
u.toString
w=B.ai(d.b,e.b,f)
w.toString
v=B.a1(d.c,e.c,f)
v.toString
return new A.mR(u,w,v,B.c_(d.d,e.d,f))},
bHl(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dx
else w=d
return new A.a2f(g===!0,v,u,w,f)},
bAh(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2l(4,C.fR,16,D.xZ,0,120,A.c83(),!1,!1,D.ZU,0,C.J,A.c82())
else w=k
v=j==null?C.l7:j
return new A.a2k(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c8R(d,e,f,g){var w=null,v=B.j8(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dv(C.d.j(f.b),v)},
c8Q(d){return A.aBx(D.dx,15)},
o5:function o5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
azp:function azp(d,e){this.a=d
this.b=e},
fR:function fR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
azy:function azy(){},
azz:function azz(){},
it:function it(d,e,f,g,h,i,j,k,l,m){var _=this
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
mR:function mR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2f:function a2f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2k:function a2k(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
af9:function af9(d,e){this.a=d
this.b=e},
a2l:function a2l(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Dv:function Dv(d,e){this.a=d
this.b=e},
LK:function LK(d){this.a=d},
a2m:function a2m(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
y3:function y3(d,e){this.a=d
this.b=e},
aiy:function aiy(){},
aiF:function aiF(){},
aiG:function aiG(){},
aiI:function aiI(){},
aiJ:function aiJ(){},
aiK:function aiK(){},
aiL:function aiL(){},
aiM:function aiM(){},
aiN:function aiN(){},
azA:function azA(d){this.a=d},
azB:function azB(){},
uX:function uX(d,e,f){this.a=d
this.b=e
this.c=f},
aiH:function aiH(){},
azC:function azC(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
azD:function azD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azE:function azE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7g:function a7g(d){this.b=d},
a2i:function a2i(d,e,f){this.d=d
this.e=e
this.a=f},
acj:function acj(d,e,f,g,h,i,j,k){var _=this
_.aD=d
_.i7=e
_.d1=f
_.fY=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aG=_.al=_.ar=$
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
c8S(d,e){var w=null
return new A.Su(e.w,B.f(e.r,w,w,w,w,w,w,w,w),w)},
azi(d,e,f){var w,v,u,t=B.ai(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ai(w.c,v.c,f)
u.toString
return new A.ps(t,e.b,new A.qp(v.a,v.b,u,B.ai(w.d,v.d,f)),!0)},
bIL(d,e,f){var w=A.azi(d.b,e.b,f),v=A.azi(d.d,e.d,f),u=A.azi(d.e,e.e,f)
return new A.vm(e.a,w,A.azi(d.c,e.c,f),v,u)},
bXF(d,e,f){var w,v
if(d.k(0,D.fS))return e
if(e.k(0,D.fS))return d
w=B.ai(d.a,e.a,f)
w.toString
v=B.ai(d.b,e.b,f)
v.toString
return new A.eE(w,v)},
bIJ(d,e,f){return new A.yV(e.a,!0,B.ai(d.c,e.c,f),e.d,e.e,e.f,B.ai(d.r,e.r,f),e.w,e.x)},
cbh(d){return!0},
c8V(d){return D.aa0},
bIK(d,e,f,g){var w
if(d==null)w=f==null?C.I:null
else w=d
return new A.pP(w,f,g,e)},
bKI(d,e,f){var w,v=A.kF(d.a,e.a,f,A.c7X(),x.dv)
v.toString
w=A.kF(d.b,e.b,f,A.c7Z(),x.bN)
w.toString
return new A.R2(v,w)},
bYr(d,e,f){var w,v,u,t=B.ai(d.a,e.a,f)
t.toString
w=B.ai(d.b,e.b,f)
w.toString
v=B.a1(d.c,e.c,f)
u=B.rC(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.na(t,w,v,u)},
c2K(d,e,f){var w,v,u,t=B.ai(d.a,e.a,f)
t.toString
w=B.ai(d.b,e.b,f)
w.toString
v=B.a1(d.c,e.c,f)
u=B.rC(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.nA(t,w,v,u)},
bYq(d,e,f){var w,v,u,t,s,r=B.ai(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oj(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.bYo(B.bA9(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a1(d.a,e.a,f)
v=B.rC(d.b,e.b,f)
w=B.ai(d.c,e.c,f)
w.toString
s=A.kF(d.d,e.d,f,A.a0Q(),x.S)
if(u==null)u=v==null?C.I:null
return new A.kY(r,e.f,e.r,t,e.x,u,v,w,s)},
c2J(d,e,f){var w,v,u,t,s,r=B.ai(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oj(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.c2H(B.bA9(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a1(d.a,e.a,f)
v=B.rC(d.b,e.b,f)
w=B.ai(d.c,e.c,f)
w.toString
s=A.kF(d.d,e.d,f,A.a0Q(),x.S)
if(u==null)u=v==null?C.I:null
return new A.lo(r,e.f,e.r,t,e.x,u,v,w,s)},
bYo(d,e,f,g,h,i){return new A.a7r(f,!1,g,i,d,e)},
bYp(d){return C.d.ag(d.e,1)},
c2H(d,e,f,g,h,i){return new A.afz(f,!1,g,i,d,e)},
c2I(d){return C.d.ag(d.e,1)},
bIF(d,e,f){var w,v=A.kF(d.a,e.a,f,A.c7W(),x.cm)
v.toString
w=A.kF(d.b,e.b,f,A.c7Y(),x.es)
w.toString
return new A.ND(v,w,!0)},
bXE(d,e,f){return new A.NM(d,e==null?4:e,f)},
a28:function a28(){},
Du:function Du(d,e){this.a=d
this.b=e},
tR:function tR(d,e){this.r=d
this.w=e},
qp:function qp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adK:function adK(){},
ps:function ps(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vm:function vm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eE:function eE(d,e){this.a=d
this.b=e},
yV:function yV(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pP:function pP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afb:function afb(){},
R2:function R2(d,e){this.a=d
this.b=e},
na:function na(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nA:function nA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kY:function kY(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lo:function lo(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a7r:function a7r(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afz:function afz(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ND:function ND(d,e,f){this.a=d
this.b=e
this.c=f},
vl:function vl(){},
NM:function NM(d,e,f){this.a=d
this.b=e
this.c=f},
ait:function ait(){},
aix:function aix(){},
alN:function alN(){},
amb:function amb(){},
amc:function amc(){},
ame:function ame(){},
amf:function amf(){},
an4:function an4(){},
an3:function an3(){},
an5:function an5(){},
aqK:function aqK(){},
asD:function asD(){},
asE:function asE(){},
auh:function auh(){},
av_:function av_(){},
auZ:function auZ(){},
av0:function av0(){},
aze:function aze(){},
LE:function LE(){},
LF:function LF(d,e,f){this.c=d
this.d=e
this.a=f},
azg:function azg(d){this.a=d},
azf:function azf(d){this.a=d},
Su:function Su(d,e,f){this.c=d
this.e=e
this.a=f},
Zj:function Zj(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c1e(d,e,f){var w=B.ag(f),v=w.i("ad<1,k1>")
v=B.Q(new B.ad(f,new A.b00(),v),v.i("av.E"))
w=w.i("ad<1,c>")
w=B.Q(new B.ad(f,new A.b01(),w),w.i("av.E"))
return new A.adL(e,d,v,w,null)},
bUQ(d,e,f){var w,v=null,u=B.aM(x.dO),t=J.a83(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tO(v,C.ao,C.x,new B.ky(1),v,v,v,v,C.bG,v)
u=new A.a29(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aM(x.j))
u.bl()
return u},
adL:function adL(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b00:function b00(){},
b01:function b01(){},
a29:function a29(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.WE$=h
_.aU8$=i
_.dr$=j
_.aj$=k
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
bhM:function bhM(d,e){this.a=d
this.b=e},
azh:function azh(){},
k1:function k1(d,e){this.a=d
this.b=e},
o4:function o4(d,e){this.a=d
this.b=e},
aiu:function aiu(){},
aiv:function aiv(){},
aiw:function aiw(){},
Uw:function Uw(){},
B1:function B1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b02:function b02(d){this.a=d},
b03:function b03(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b04:function b04(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6y(d,e){var w=d==null?B.cj(C.I,1):d
return new A.a6x(e!==!1,w)},
a2o:function a2o(){},
a6x:function a6x(d,e){this.a=d
this.b=e},
NT:function NT(){},
a6z:function a6z(){},
azN:function azN(){},
aGd:function aGd(d,e){this.a=d
this.b=e},
aiQ:function aiQ(){},
am8:function am8(){},
am9:function am9(){},
amg:function amg(){},
LN:function LN(){},
w8:function w8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hy:function hy(){},
a6D:function a6D(d){this.a=d},
a6E:function a6E(d){this.a=d},
a6F:function a6F(d){this.a=d},
NO:function NO(){},
NP:function NP(){},
a6I:function a6I(d){this.a=d},
NR:function NR(){},
NS:function NS(d){this.a=d},
a6C:function a6C(d){this.a=d},
a6B:function a6B(d){this.a=d},
NN:function NN(d){this.a=d},
a6G:function a6G(d){this.a=d},
a6H:function a6H(d){this.a=d},
NQ:function NQ(d){this.a=d},
GQ:function GQ(){},
aWf:function aWf(d){this.a=d},
aWg:function aWg(d){this.a=d},
aWh:function aWh(d){this.a=d},
aWi:function aWi(d){this.a=d},
aWj:function aWj(d){this.a=d},
aWk:function aWk(d){this.a=d},
aWl:function aWl(d){this.a=d},
aWm:function aWm(d){this.a=d},
aWn:function aWn(d){this.a=d},
aWo:function aWo(d){this.a=d},
aWp:function aWp(d){this.a=d},
aWq:function aWq(d){this.a=d},
aWr:function aWr(d){this.a=d},
Pc:function Pc(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
X2:function X2(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e6$=g
_.c5$=h
_.c=_.a=null},
bhS:function bhS(d,e){this.a=d
this.b=e},
bhQ:function bhQ(d){this.a=d},
bhR:function bhR(d,e){this.a=d
this.b=e},
bhP:function bhP(){},
bhT:function bhT(d){this.a=d},
bBA(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.L:d
return new A.q3(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aMi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Tn:u
else w=g
v=f==null?A.azo(!1,u,0,u,!1,D.wj):f
w=new A.ef(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.azo(!1,u,0,u,!1,D.wj):d,j,a0,i,s,!1,p)
w.arT(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bYT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ai(d.x,e.x,f)
m.toString
w=A.bHm(d.ay,e.ay,f)
v=A.bHm(d.ch,e.ch,f)
u=B.ai(d.as,e.as,f)
u.toString
t=e.CW
s=A.kF(d.cy,e.cy,f,A.a0Q(),x.S)
r=B.a1(d.r,e.r,f)
q=B.rC(d.w,e.w,f)
p=A.kF(d.a,e.a,f,A.c7V(),x.cw)
p.toString
o=B.bLf(d.db,e.db,f)
o.toString
n=B.ai(d.dy.a,e.dy.a,f)
n.toString
return A.aMi(v,m,w,r,e.z,s,new A.yU(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Pd(n),!1,u,o,!0,e.cx,p)},
azo(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aM(127.5),D.dx.v()>>>16&255,D.dx.v()>>>8&255,D.dx.v()&255):null
else w=e
return new A.a2h(h,w,g,i,f,!1)},
bHm(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a1(v.a,u.a,f),s=B.rC(v.b,u.b,f),r=B.ai(v.c,u.c,f)
r.toString
r=A.bIK(t,A.kF(v.d,u.d,f,A.a0Q(),x.S),s,r)
s=B.a1(d.b,e.b,f)
u=B.rC(d.c,e.c,f)
v=B.ai(d.e,e.e,f)
v.toString
return A.azo(!1,s,v,u,e.a,new A.LI(!1,r,w.c,!0))},
bUV(d,e,f){var w=B.a1(d.c,e.c,f),v=B.rC(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aM(127.5),D.dx.v()>>>16&255,D.dx.v()>>>8&255,D.dx.v()&255):null
return new A.mS(e.a,e.b,w,v)},
cbi(d){return!0},
bDF(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jA)return A.bEv(w.a,A.bBe(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dx:w},
c5D(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jA)w=A.bEv(v.a,A.bBe(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dx}return A.aBx(w,40)},
bNM(d,e,f,g,h){var w,v=A.bDF(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jA)w=A.bEv(u.a,A.bBe(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dx}u=A.aBx(w,40)
return new A.NM(v,h==null?4:h,u)},
cbg(d,e){return!0},
c7I(d,e){return Math.abs(d.a-e.a)},
c8Y(d,e){var w=J.cS(e,new A.bwM(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c8U(d,e){return-1/0},
c8T(d,e){return d.a[e].b},
bOY(d){var w=J.cS(d,new A.bwJ(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bOX(d){return A.aBx(D.dx,15)},
q3:function q3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ef:function ef(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aMj:function aMj(){},
Pd:function Pd(d){this.a=d},
a2h:function a2h(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mS:function mS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LI:function LI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
aM8:function aM8(d,e){this.a=d
this.b=e},
a6A:function a6A(){},
Fn:function Fn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bwM:function bwM(d){this.a=d},
bwL:function bwL(d){this.a=d},
a8q:function a8q(){},
bwJ:function bwJ(){},
nd:function nd(){},
qx:function qx(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rP:function rP(d,e){this.a=d
this.b=e},
tT:function tT(d,e){this.a=d
this.b=e},
Hh:function Hh(d){this.a=d},
Pe:function Pe(d){this.a=d},
zJ:function zJ(d,e){this.a=d
this.b=e},
aiD:function aiD(){},
aiE:function aiE(){},
aiS:function aiS(){},
ama:function ama(){},
amd:function amd(){},
anY:function anY(){},
anZ:function anZ(){},
ao_:function ao_(){},
ao1:function ao1(){},
ao2:function ao2(){},
ao3:function ao3(){},
ao4:function ao4(){},
asC:function asC(){},
aug:function aug(){},
aMk:function aMk(d){this.a=d},
aMl:function aMl(){},
aMm:function aMm(){},
zK:function zK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ao0:function ao0(){},
aMn:function aMn(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aMq:function aMq(){},
aMo:function aMo(d,e,f){this.a=d
this.b=e
this.c=f},
aMp:function aMp(d,e,f){this.a=d
this.b=e
this.c=f},
aMr:function aMr(){},
vR:function vR(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8p:function a8p(d,e,f){this.d=d
this.e=e
this.a=f},
acw:function acw(d,e,f,g,h,i,j,k){var _=this
_.aD=d
_.i7=e
_.d1=f
_.fY=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aG=_.al=_.ar=$
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
bAg(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.ag(o),l=new B.ad(o,new A.azr(),m.i("ad<1,G>")).jL(0,new A.azs()),k=e-l,j=new A.azv(k,d,n)
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
new B.j0(o,m.i("j0<1>")).aB(0,new A.azt(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j0(o,m.i("j0<1>")).aB(0,new A.azu(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
azr:function azr(){},
azs:function azs(){},
azv:function azv(d,e,f){this.a=d
this.b=e
this.c=f},
azw:function azw(d,e,f){this.a=d
this.b=e
this.c=f},
azt:function azt(d,e,f){this.a=d
this.b=e
this.c=f},
azu:function azu(d,e,f){this.a=d
this.b=e
this.c=f},
bBe(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j0(w,B.ag(w).i("j0<1>")).aB(0,new A.aJv(v,d))
else throw B.e(B.bM('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aJv:function aJv(d,e){this.a=d
this.b=e},
aCK(d,e){var w,v
if(e!=null){w=B.ag(e).i("ad<1,G>")
v=B.Q(new B.ad(e,new A.aCL(),w),w.i("av.E"))
return A.c8L(d,new A.a2Y(v,x.cX))}else return d},
aCL:function aCL(){},
c1R(d,e){var w=!0
if(d!==C.fa)if(!(d===C.ao&&e===C.x))w=d===C.iE&&e===C.b2
if(w)return D.ED
else{w=!0
if(d!==C.hA)if(!(d===C.iE&&e===C.x))w=d===C.ao&&e===C.b2
if(w)return D.EE
else return D.aaK}},
Oh:function Oh(d,e){this.a=d
this.b=e},
a2O:function a2O(d,e){this.a=d
this.b=e},
zO:function zO(d,e){this.a=d
this.$ti=e},
aob:function aob(){},
c8L(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.co(j.r,C.ah,k,k,h)
for(j=B.Nx(d),w=B.b([],x.I),v=new B.Nz(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.S(B.fJ('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Ny(v,r)
v.Dt()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dt()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.es(B.b([],i),!0,s)
p=new B.KZ(new B.co(t,p,k,new B.ar7([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iE(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a2Y:function a2Y(d,e){this.a=d
this.b=0
this.$ti=e},
b3x:function b3x(){},
bB2(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fS))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bUY(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aBx(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aM(d.gOc()*w),C.d.aM(d.gGq()*w),C.d.aM(d.gKD()*w))},
bII(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bB3(d){var w=d.a,v=w?A.b0_(d.b):0,u=w?A.b0_(d.c):0,t=w?A.b0_(d.d):0
return new B.aj(v,u,t,w?A.b0_(d.e):0)},
c_7(d){var w
if(d.c===0){d.seX(null)
w=B.c5(d.r)
d.r=B.aF(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bBX(d,e,f,g){var w
if(f!=null){d.r=C.I.gt(0)
d.seX(f.mP(0,g))}else{w=e==null?C.L:e
d.r=w.gt(w)
d.seX(null)}},
b0_(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kF(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kf(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kf(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
ca4(d,e,f){return C.d.aM(d+(e-d)*f)},
bEv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kf(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a1(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a8c.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aI:C.o
r=r?C.m:C.a7
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bP(t.x,C.m,s,18),C.aO],w))
v.push(B.ao(new B.dy(t.c,!1,s),1))
v=B.af(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.F,B.f(t.d,s,1,C.ad,s,B.bA(u==null?C.h:u,22,C.E),s,s,s)],w)
return B.bg(r,B.a5(w,C.z,C.im,C.i),q,s,C.ak,s,s,3)}}
A.vk.prototype={
LZ(d){return this.aU7(d)},
aU7(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LZ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e1("finance_summary",B.a7(["p_from",E.op(d.a),"p_to",E.op(d.b)],s,r),r),$async$LZ)
case 3:q=f
if(q==null){u=D.arZ
w=1
break}if(x.f.b(q)){u=B.cU(q,s,r)
w=1
break}u=D.aud
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LZ,v)},
LY(d){return this.aU6(d)},
aU6(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LY=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e1("finance_kpis",B.a7(["p_from",E.op(d.a),"p_to",E.op(d.b)],s,r),r),$async$LY)
case 3:q=f
if(x.f.b(q)){u=B.cU(q,s,r)
w=1
break}u=D.arF
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LY,v)},
LX(d){return this.aU5(d)},
aU5(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LX=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e1("finance_bookings_list",B.a7(["p_from",E.op(d.a),"p_to",E.op(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$LX)
case 3:q=f
if(x.f.b(q)){u=B.cU(q,s,r)
w=1
break}u=D.as3
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LX,v)},
pI(d){return this.arB(d)},
arB(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fZ("sevdesk-sync",B.a7(["from",E.op(d.a),"to",E.op(d.b)],s,s)),$async$pI)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Y(r,"upserted")=="number"){u=C.d.X(B.fw(J.Y(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pI,v)},
LT(d){return this.aTX(d)},
aTX(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LT=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fZ("finance-export-pdf",B.a7(["from",E.op(d.a),"to",E.op(d.b)],s,s)),$async$LT)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Y(r,"base64")=="string"){u=B.aH(J.Y(r,"base64"))
w=1
break}throw B.e(B.dZ("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LT,v)}}
A.EM.prototype={
Gk(d){return this.akC(d)},
akC(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gk=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LZ(d),$async$Gk)
case 7:q=f
o=A.aHj(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.BD(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gk,v)},
Gf(d){return this.akn(d)},
akn(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gf=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LY(d),$async$Gf)
case 7:q=f
o=A.bXC(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.BD(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gf,v)},
G5(d){return this.ak9(d)},
ak9(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G5=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LX(d),$async$G5)
case 7:q=f
o=A.bXB(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.BD(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G5,v)},
pI(d){return this.arC(d)},
arC(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pI=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pI(d),$async$pI)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.a2(n)
p=r.BD(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pI,v)},
LS(d){return this.aTW(d)},
aTW(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LS=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LT(d),$async$LS)
case 7:q=f
o=C.iZ.cG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.BD(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LS,v)},
BD(d){var w,v
if(d instanceof B.vi)return d
if(d instanceof B.mh){if(d.b==="42501")return new B.wc(d.a)
return new B.tw(d.a)}if(d instanceof B.O5){w=A.c9s(d.b)
v=""+d.a
return new B.tw(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.Bu("Unerwarteter Fehler: "+B.j(d))},
$iaH3:1}
A.pO.prototype={
gamg(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbs(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.on.prototype={
gbs(){return[this.a,this.b]}}
A.rA.prototype={
L(){return"Geldfluss."+this.b}}
A.qz.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vV.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wS.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aC8.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aDh.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oo.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Dc.prototype={
gbs(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oq.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yS.prototype={
Hf(d){return this.arA(0)},
arA(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hf=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sed(0,C.dE)
s=t.r
r=s.aC(0,$.qZ(),x.P)
p.a=null
w=3
return B.k(B.pr(new A.aGY(p,t,r),x.H),$async$Hf)
case 3:t.sed(0,f)
q=t.f
if(q.ghe(q)==null){q=$.bzQ()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bGd())
s.c_($.bzP())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hf,v)},
LR(){return this.aTV()},
aTV(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LR=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sed(0,C.dE)
s=t.r.aC(0,$.qZ(),x.P)
q.a=null
w=3
return B.k(B.pr(new A.aGX(q,t,s),x.H),$async$LR)
case 3:t.sed(0,e)
r=t.f
u=r.ghe(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LR,v)}}
A.vj.prototype={
U(){return new A.am5(D.Be)}}
A.xb.prototype={
L(){return"_Filter."+this.b}}
A.am5.prototype={
gSA(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbE(),t=u.ak($.qZ(),x.P),s=u.ak($.bzP(),x.e)
u=$.dm()
return B.de(D.aaA,v,B.oR(B.dg(B.b([new B.fi("Zeitraum",u.aa(t.a)+" \u2013 "+u.aa(t.b),v,v),C.O,new A.am4(w.w,w.gSA(),new A.be7(w),new A.be8(w),v),C.aB,B.df(s,new A.be9(w),new A.bea(),new A.beb(),!1,!0,!1,x.m,x.l)],x.p),v,C.cj,v,C.G,!1),C.m,new A.bec(w)),v,v,v)},
asX(d){var w=B.ag(d).i("aX<1>")
w=B.Q(new B.aX(d,new A.be4(this),w),w.i("t.E"))
return w}}
A.am4.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.x5("Alle",t===D.Be,new A.be0(v),u),new A.x5("Ausgaben",t===D.a_k,new A.be1(v),u),new A.x5("Erl\xf6se",t===D.a_l,new A.be2(v),u),new A.x5("Privat",t===D.a_m,new A.be3(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.x5("Konto "+w+" \xd7",!0,v.f,u))
return B.jh(C.c5,t,C.d0,6,8)}}
A.x5.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aI:C.a4,s=B.aq(9999),r=B.aq(9999),q=B.aq(9999),p=B.cj(v?C.m:C.a7,1)
return B.bx(w,!0,w,B.dn(!1,C.V,!0,s,B.dX(!1,r,!0,B.aL(w,B.f(u,w,w,w,w,B.w(C.h,13,C.E),w,w,w),C.q,w,w,new B.aC(w,w,p,q,w,w,C.A),w,w,w,w,C.fQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.b7),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.Jb.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aQA
w=this.d
if(w.length===0)return D.aQB
v=B.ag(w).i("aX<1>")
u=new B.aX(w,new A.bi2(),v).f0(0,0,new A.bi3())
t=new B.aX(w,new A.bi4(),v).f0(0,0,new A.bi5())
s=new B.aX(w,new A.bi6(),v).f0(0,0,new A.bi7())
r=new B.aX(w,new A.bi8(),v).gq(0)
v=w.length
q=$.cR()
p=q.aa(t)
o=A.bE_(u,A.bx3("expense","",u))
q=s===0?"":" \xb7 Privat "+q.aa(s)
n=x.p
q=B.b([B.f(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.w(C.h,14,C.E),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.K(q,B.b([C.aL,B.f(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.w(C.n,12,C.k),l,l,l)],n))
if(r>0)C.b.K(q,B.b([C.aL,B.f(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.w(C.a0,12,C.k),l,l,l)],n))
k=B.b([B.bg(l,B.a5(q,C.z,C.f,C.i),C.a4,l,C.D,l,l,3),C.O],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.K)(w),++m)C.b.K(k,B.b([new A.aj9(w[m],l),C.F],n))
return B.a5(k,C.a8,C.f,C.i)}}
A.aj9.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.aH(n).length!==0)===!0){n.toString
n=C.c.aH(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.af(B.b([B.ao(B.f(n,p,2,C.ad,p,B.w(C.h,14,C.E),p,p,p),1),C.aj,A.bHp(v,o.r,w)],u),C.z,p,C.f,C.i,0,p,p)
w=B.f($.dm().aa(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+A.bEK(w),p,1,C.ad,p,B.w(C.n,12,C.k),p,p,p)
v=C.d.ag(o.y,1)
t=$.cR()
s=t.aa(o.w)
t=t.aa(o.x)
r=o.gamg()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aL,w,C.b8,B.f("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ad,p,B.w(C.n,12,C.k),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.K(q,B.b([C.aL,B.af(B.b([D.ae4,C.c3,B.ao(B.f("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.w(C.a0,11,C.k),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.bg(p,B.a5(q,C.z,C.f,C.i),p,p,C.cJ,p,p,3)}}
A.xe.prototype={
p(d){var w=null
return B.bg(w,B.af(B.b([B.bP(this.e,this.d,w,w),C.aj,B.ao(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a4,w,C.D,w,w,3)}}
A.yT.prototype={
d8(d,e){var w=null,v=e.ak($.qZ(),x.P),u=e.ak($.bzQ(),x.aN)
return B.oR(B.dg(B.b([new B.fi("Finanzen","Dashboard",new A.ahI(e.ak($.bzN(),x.c).gjf(),new A.aH9(this,d,e),new A.aHa(this,d,e),new A.aHb(d),new A.aHc(d),new A.aHd(d),new A.aHe(this,d,e,v),w),w),C.aB,new A.apz(v,w),C.c1,D.ahe,C.c1,B.df(u,new A.aHf(),new A.aHg(),new A.aHh(),!1,!0,!1,x.d,x.l)],x.p),w,C.cj,w,C.G,!1),C.m,new A.aHi(e))},
JL(d,e){return this.aMx(d,e)},
aMx(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$JL=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bzN()
w=3
return B.k(e.aC(0,n.ghP(),x.F).Hf(0),$async$JL)
case 3:m=g
if(d.e==null){w=1
break}t=e.aC(0,n,x.c)
s=t.ghe(t)==null
r=t.ghe(t)
if(r instanceof B.vi)q=r.a
else q=r==null?null:J.am(r)
if(s)p="sevDesk synchronisiert: "+B.j(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.O(x.q).f
o=s?C.K:D.a83
n.aR(B.bY(null,null,null,null,null,C.r,null,B.f(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JL,v)},
BE(d,e){return this.axL(d,e)},
axL(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BE=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aC(0,$.bzN().ghP(),x.F).LR(),$async$BE)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aR(D.aCo)
w=1
break}t=B.oP(C.v,10)
w=4
return B.k($.bRa().u5(s,"finanzauswertung.pdf",t,null,null,null),$async$BE)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BE,v)},
BF(d,e,f){return this.aK6(d,e,f)},
aK6(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BF=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.hP(null,null,!0,null,new A.aH6(f,d),d,null,!0,!0,x.cJ),$async$BF)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mP(e.aC(0,$.bL(),x.A))
p=f.a
o=f.b
n=$.dm()
m=n.aa(p)
n=n.aa(o)
w=8
return B.k(r.w9("finance_period",p,o,B.a7(["period_from",p.eb()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BF)
case 8:if(d.e!=null)d.O(x.q).f.aR(F.mr)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.O(x.q).f.aR(B.bY(null,null,null,null,null,C.r,null,B.f("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BF,v)}}
A.ahI.prototype={
p(d){var w=this,v=null,u=A.WI(C.m,F.fU,C.m,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.WI(v,D.acN,v,w.r,"Gesellschafter-Freigaben"),s=A.WI(v,D.ab2,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.WI(v,D.yg,v,r?v:w.d,"sevDesk synchronisieren"),p=A.WI(C.a0,C.i3,C.a0,r?v:w.e,"PDF-Export")
return B.af(B.b([u,C.aO,t,C.aO,s,C.aO,q,C.aO,p,C.aO,A.WI(C.am,C.fT,C.am,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.ane.prototype={
p(d){var w,v=this,u=null,t=B.aq(12),s=B.aq(12),r=B.aq(12),q=v.w
if(q==null)q=C.a7
q=B.cj(q,1)
w=v.r
if(w==null)w=C.h
return B.tS(B.dn(!1,C.V,!0,t,B.dX(!1,s,!0,B.aL(u,B.bP(v.c,w,u,20),C.q,u,u,new B.aC(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a4,0,u,u,u,u,u,C.b7),u,v.d,u,u)}}
A.apz.prototype={
d8(d,e){var w=null,v=this.e,u=$.dm(),t=x.p
return B.bg(w,B.a5(B.b([D.a9H,C.F,B.af(B.b([D.adI,C.at,B.ao(B.f(u.aa(v.a)+" \u2013 "+u.aa(v.b),w,w,w,w,B.w(C.h,16,C.E),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jh(C.c5,B.b([new A.JG("Monat",new A.blj(e),w,w),new A.JG("Jahr (YTD)",new A.blk(e),w,w),new A.JG("Zeitraum w\xe4hlen \u2026",new A.bll(this,d,e),D.abH,w)],t),C.d0,6,8)],t),C.z,C.f,C.i),w,w,C.D,w,w,3)},
J5(d,e){return this.aJ0(d,e)},
aJ0(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$J5=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b5(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.ax9(new A.bli(),d,B.bJ(B.b2(t)-5,1,1,0,0,0,0),new B.lQ(s.a,s.b,x.bz),B.bJ(B.b2(t)+1,1,1,0,0,0,0),C.e9),$async$J5)
case 2:r=g
if(r!=null)e.aC(0,$.qZ().ghP(),x.V).un(0,new E.lX(r.a,r.b))
return B.o(null,v)}})
return B.p($async$J5,v)}}
A.JG.prototype={
p(d){var w=null,v=B.aq(9999),u=B.aq(9999),t=B.aq(9999),s=B.cj(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bP(p,C.h,w,14),C.aO],r))
q.push(B.f(this.c,w,w,w,w,B.w(C.h,13,C.E),w,w,w))
return B.dn(!1,C.V,!0,v,B.dX(!1,u,!0,B.aL(w,B.af(q,C.j,w,C.f,C.H,0,w,w),C.q,w,w,new B.aC(w,w,s,t,w,w,C.A),w,w,w,w,C.fQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a4,0,w,w,w,w,w,C.b7)}}
A.K5.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jz(new A.bs2(this)),C.c1,D.a9N,C.t],q),o=this.c.w
if(o.length===0)p.push(B.bg(r,B.af(B.b([D.aea,C.aj,B.ao(B.f("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.w(C.n,14,C.k),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a4,r,C.D,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.K)(o),++u){t=o[u]
s=t.c
C.b.K(w,B.b([new A.ahG(t.a,t.b,s,A.bEK(s),t.d,new A.bs3(d,t),r),C.F],q))}p.push(B.a5(w,C.j,C.f,C.i))}return B.a5(p,C.a8,C.f,C.i)}}
A.ahG.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aI:C.a4,q=B.cj(s?C.m:C.a7,1),p=B.aq(4),o=v.c,n=x.p
t=B.b([B.aL(C.T,B.f(C.c.a1(o,0,1),u,u,u,u,B.bA(C.h,14,C.p),u,u,u),C.q,u,u,new B.aC(r,u,q,p,u,u,C.A),u,36,u,u,u,u,u,36),C.aj,B.ao(B.a5(B.b([B.f(o+" \xb7 "+v.d,u,1,C.ad,u,B.w(C.h,14,C.E),u,u,u),B.f(v.f,u,u,u,u,B.w(C.n,12,C.k),u,u,u)],n),C.z,C.f,C.i),1),A.bHp(o,v.r,t)],n)
C.b.K(t,B.b([C.c3,C.Fq],n))
w=B.bg(u,B.af(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cJ,u,u,3)
return B.bx(u,!0,u,B.dX(!1,B.aq(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.IM.prototype={
p(d){var w=null
return B.bg(C.a0,B.af(B.b([D.aeK,C.aj,B.ao(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fk,w,C.D,w,w,3)}}
A.a2s.prototype={
p(d){var w=null,v=this.d,u=this.c,t=A.bx3(v,this.e,u),s=A.bE_(u,t),r=B.w(A.bOH(v,t),15,C.E)
return B.f(s,w,w,w,A.c9i(v,t)+" "+$.cR().aa(Math.abs(u)),r,w,w,w)}}
A.a8d.prototype={
d8(d,e){return B.df(e.ak($.bGd(),x.cn),new A.aM5(),new A.aM6(),new A.aM7(),!1,!0,!1,x.X,x.l)}}
A.J6.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.azH,C.t,B.jz(new A.bhD(v,q,100-t.w.a,w,p)),C.t,new A.amw(u),C.aB,D.azG,C.t,new A.aiC(t,u),C.aB,D.azB,C.t,B.bx(u,!0,u,B.kc(u,B.bg(u,new A.UW(t,220,u),u,u,C.D,u,u,3),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bhE(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aB,D.azt,C.t,B.bx(u,!0,u,B.kc(u,new A.Vc(t,200,!1,u),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bhF(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aB,D.azy,C.t,new A.aol(t,u),C.aB,D.azv,C.t,new A.akt(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aB,D.azD,C.t,new A.aud(t,u)],s))
return B.a5(r,C.a8,C.f,C.i)}}
A.amw.prototype={
p(d){var w=null
return B.f("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.w(C.n,11,C.k).cB(1.35),w,w,w)}}
A.anQ.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cF(m.d,"-")?C.a0:C.am
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bhG(m,d):l
r=x.p
q=B.b([B.ao(B.f(m.c.toUpperCase(),l,l,l,l,B.w(C.n,10,C.p).fI(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cj(C.a0,0.8)
n=B.aq(4)
q.push(B.aL(l,B.f("Ziel "+p,l,l,l,l,B.w(C.a0,9,C.p),l,l,l),C.q,l,l,new B.aC(l,l,o,n,l,l,C.A),l,l,l,l,C.nH,l,l,l))}q=B.b([B.af(q,C.j,l,C.f,C.i,0,l,l),C.aL,B.NK(C.d3,B.f(m.d,l,l,l,l,B.bA(w,22,C.p),l,l,l),C.hM)],r)
p=m.e
if(p!=null)q.push(B.f(p,l,2,C.ad,l,B.w(C.n,10,C.aD),l,l,l))
q.push(C.d_)
q.push(B.af(B.b([new A.VM("Vormonat",m.r,l),C.c3,new A.VM("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.d_)
q.push(B.ao(new A.Zv(v,m.y,m.z,l),1))
return B.bx(l,u,l,B.kc(l,B.bg(l,B.a5(q,C.z,C.f,C.i),l,l,C.c_,l,l,3),C.a9,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.VM.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aq(4)
return B.aL(r,B.f(this.c+" \u2014",r,r,r,r,B.w(C.n,9,C.p),r,r,r),C.q,r,r,new B.aC(C.a7,r,r,q,r,r,C.A),r,r,r,r,C.nH,r,r,r)}w=q>=0
v=w?C.am:C.a0
u=v.es(0.12)
t=B.cj(v,0.7)
s=B.aq(4)
return B.aL(r,B.af(B.b([B.bP(w?F.aaP:D.aaO,v,r,10),C.Za,B.f(this.c+" "+C.d.ag(q,1)+" %",r,r,r,r,B.w(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.q,r,r,new B.aC(u,r,t,s,r,r,C.A),r,r,r,r,C.nH,r,r,r)}}
A.Zv.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eE(v,j[v]))
u=C.b.jL(j,new A.br6())
t=C.b.jL(j,new A.br7())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.br8(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6y(k,!1)
w=B.b([A.aMi(k,2,A.azo(!1,C.m.es(0.16),0,k,!0,D.wj),C.m,0.35,k,D.Eu,k,!0,!1,!0,!1,D.FS,!1,10,D.YD,!0,C.lE,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Pc(A.bBA(k,k,k,D.anL,l,D.Cf,D.Eq,D.Ev,w,D.ahr,k,m,k,n,D.XZ,D.anM,D.aa3),C.an,C.a2,k,k)}}
A.UW.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aPH
w=C.b.f0(p,0,new A.b7A())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.azx(B.b([A.a2j(q,q,D.BG,q,C.m,q,q,q,r.b,6),A.a2j(q,q,D.BG,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bR(A.bHn(A.azq(q,q,u,q,q,A.a6y(q,!1),q,new A.yV(!0,!0,q,new A.b7B(),A.a0K(),!1,q,A.awU(),A.a0K()),q,v,q,q,new A.vm(!0,new A.ps(16,q,new A.qp(!0,new A.b7C(this),46,q),!0),D.kB,D.kB,new A.ps(16,q,new A.qp(!0,new A.b7D(p),26,q),!0)))),this.d,q)},
aLN(d){if(Math.abs(d)>=1000)return C.d.ag(d/1000,1)+" k"
return C.d.ag(d,0)}}
A.Vc.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ad(v,new A.b8D(),w),x.i)
C.b.K(o,new B.ad(u,new A.b8E(),w))
t=C.b.f0(o,0,new A.b8F())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.azx(B.b([A.a2j(q,q,q,q,C.m,q,q,q,v[s],14),A.a2j(q,q,q,q,C.am,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bR(A.bHn(A.azq(q,q,n,q,q,A.a6y(q,!1),q,D.Ev,q,o,q,q,new A.vm(!0,D.kB,D.kB,D.kB,new A.ps(16,q,new A.qp(!0,new A.b8G(p),26,q),!0)))),this.d,q)
return this.e?r:B.bg(q,r,q,q,C.D,q,q,3)}}
A.aol.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aPG
w=new B.ad(l,new A.bim(),B.ag(l).i("ad<1,G>")).jL(0,new A.bin())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.f(r.b,m,m,m,m,B.w(C.h,14,C.p),m,m,m)
p=$.cR()
o=r.d
n=new B.aZ(4,4)
o=B.b([new B.i_(C.ag,C.f,C.i,C.j,m,C.aU,m,0,B.b([new B.iv(1,C.cR,B.a5(B.b([q,B.f(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aa(r.f),m,m,m,m,B.w(C.n,12,C.aD),m,m,m)],v),C.z,C.f,C.i),m),C.at,B.f(p.aa(o),m,m,m,m,B.bA(C.h,16,C.p),m,m,m)],v),m),C.d_,new B.DU(new B.d7(n,n,n,n),C.bs,B.zL(C.a7,m,8,C.d.bo(o/w,0,1),D.Bv),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a0O(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bg(m,B.a5(u,C.j,C.f,C.i),m,m,C.D,m,m,3)}}
A.akt.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ao(new A.CD("Aktive Kunden",""+s,u),1)
w=B.ao(new A.CD("K\xe4ufe",""+t.a,u),1)
v=$.cR()
return B.bg(u,B.af(B.b([s,w,B.ao(new A.CD("\xd8-Warenkorb",v.aa(t.d),u),1),B.ao(new A.CD("Umsatz/Kunde",v.aa(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.D,u,u,3)}}
A.CD.prototype={
p(d){var w=null
return B.a5(B.b([B.f(this.c.toUpperCase(),w,w,w,w,B.w(C.n,10,C.p).fI(0.6),w,w,w),C.b8,B.f(this.d,w,w,w,w,B.bA(C.h,20,C.p),w,w,w)],x.p),C.z,C.f,C.H)}}
A.aud.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ad(q,new A.btl(),B.ag(q).i("ad<1,G>")).jL(0,new A.btm()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aZ(4,4)
t=B.b([new B.i_(C.ag,C.f,C.i,C.j,r,C.aU,r,0,B.b([new B.iv(1,C.cR,B.f(u.b,r,1,C.ad,r,B.w(C.h,13,C.p),r,r,r),r),B.f(""+u.c+"\xd7 ",r,r,r,r,B.w(C.n,12,C.E),r,r,r),B.f($.cR().aa(t),r,r,r,r,B.w(C.h,13,C.p),r,r,r)],o),r),C.aL,new B.DU(new B.d7(s,s,s,s),C.bs,B.zL(C.a7,r,6,C.d.bo(t/p,0,1),D.Bv),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a0O(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.F)
C.b.K(n,t)}return B.bg(r,B.a5(n,C.j,C.f,C.i),r,r,C.D,r,r,3)}}
A.x9.prototype={
p(d){var w=null
return B.bg(w,B.f(this.c,w,w,w,w,B.w(C.n,13,C.k),w,w,w),C.a4,w,C.D,w,w,3)}}
A.aiC.prototype={
d8(d,e){return B.df(e.ak($.bzO(),x.fM),new A.b5S(this,d,e),new A.b5T(),new A.b5U(),!1,!0,!1,x.h,x.l)}}
A.BD.prototype={
U(){return new A.Uy()},
aYU(){return this.d.$0()}}
A.Uy.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.b5(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.Y(w,"as_of"))!=null){w.toString
u=B.e6(J.am(J.Y(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pU[t].a
if(v)r=""
else{r=B.b3(J.Y(w,s))
if(r==null)r=null
r=C.d.ag(r==null?0:r,2)
r=B.aB(r,".",",")}u.m(0,s,new B.bE(new B.cQ(r,C.bF,C.aT),$.ak()))}q.e!==$&&B.b0()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ci(v,v.r,v.e,B.l(v).i("ci<2>"))
while(v.u()){w=v.d
w.T$=$.ak()
w.S$=0}this.ao()},
rA(d){var w=this.e
w===$&&B.a()
w=C.c.aH(w.h(0,d).a.a)
w=B.aB(w,".","")
w=B.he(B.aB(w,",","."))
return w==null?0:w},
a4q(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pU[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ag(u,2)
s=B.aB(s,".",",")
t.kv(0,t.a.yc(C.aT,C.bF,s))}}this.I(new A.b5G())},
aFB(){this.a4q(D.as0)
this.c.O(x.q).f.aR(D.aCM)},
Im(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Im=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pU[e].a)
q=a2
t=4
w=7
return B.k($.a6q.cf().vZ(B.b(["csv","txt"],x.s),C.nR,!0),$async$Im)
case 7:p=a5
a2=p
o=a2==null?null:J.KV(a2.a).c
if(o==null){w=1
break}n=C.aH.adY(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Ck.cG(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.K)(a1),++e){l=a1[e]
k=J.axH(l,B.bQ("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.aH(J.Y(k,0)).toLowerCase()
i=J.D7(q,j)?j:D.aue.h(0,j)
if(i==null)continue
d=C.c.aH(C.b.mb(J.bUn(k,1)))
d=B.aB(d,"\u20ac","")
d=B.aB(d," ","")
d=B.aB(d,".","")
h=B.aB(d,",",".")
g=B.he(h)
if(g!=null)J.fx(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aR(D.aCl)
w=1
break}r.a4q(m)
r.c.O(x.q).f.aR(B.bY(null,null,null,null,null,C.r,null,B.f(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aR(B.bY(null,null,null,null,null,C.r,null,B.f("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Im,v)},
Ix(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ix=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.I(new A.b5H(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0r("upsert_finance_balance",B.a7(["p_as_of",C.c.a1(n.eb(),0,10),"p_cash_and_bank",q.rA("cash_and_bank"),"p_receivables",q.rA("receivables"),"p_inventory_value",q.rA("inventory_value"),"p_other_current_assets",q.rA("other_current_assets"),"p_fixed_assets",q.rA("fixed_assets"),"p_current_liabilities",q.rA("current_liabilities"),"p_long_term_liabilities",q.rA("long_term_liabilities"),"p_equity",q.rA("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ix)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYU()
o=q.c
o.toString
B.aY(o,!1).eU()
q.c.O(x.q).f.aR(D.aCp)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aR(B.bY(null,null,null,null,null,C.r,null,B.f("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.I(new A.b5I(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ix,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.f("Bilanzwerte erfassen",r,r,r,r,B.bA(C.h,18,C.p),r,r,r),p=s.f?r:new A.b5K(s,d),o=s.d
o===$&&B.a()
p=B.fg(D.adK,B.f("Stichtag: "+C.c.a1(o.eb(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ao(B.fg(D.aeV,D.aIB,o?r:s.gaEy(),r),1)
v=x.p
w=B.b([p,C.F,B.af(B.b([w,C.at,B.ao(B.fg(D.aeH,D.aIo,o?r:s.gaFA(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pU[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.ec(r,C.aJ,!1,r,!0,C.r,r,B.em(),o.h(0,p.a),r,r,r,r,r,2,new B.c2(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a9,!0,r,!0,r,!1,r,C.aP,r,r,r,r,C.fF,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ao,r,C.a3,r,r,r,r),C.F],v))}w.push(B.f("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.w(C.n,11,C.k),r,r,r))
p=B.bR(B.eK(B.a5(w,C.a8,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.dt(C.cd,r,r,o?r:new A.b5L(d),r,r)
o=o?r:s.gaFj()
t=B.dF(C.m,C.h,r,r,r,r,r)
return B.iM(B.b([w,B.dJ(s.f?F.Zd:C.ef,o,t)],v),C.o,p,q)}}
A.bm.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a0O(this.gbs(),e.gbs())
else w=!0
return w},
gA(d){return(B.f6(B.N(this))^B.bPu(this.gbs()))>>>0},
j(d){B.bID()
return B.N(this).j(0)}}
A.LJ.prototype={
U(){return new A.Uz(B.A(x.S,x.J),new A.azA(B.A(x.x,x.T)),null,null)}}
A.Uz.prototype={
p(d){var w,v=this,u=v.a2i(),t=v.CW
t.toString
t=v.a2j(t.au(0,v.gfk().gt(0)))
w=v.a2j(u)
v.a.toString
return new A.LF(new A.a2i(t,w,null),u,null)},
a2j(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.azx(s.c,s.d,!1,r,s.a))}return d.aQZ(w)},
a2i(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vb(t.ch)
if(r)s=w.a
r=t.y
t=t.aRT(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aR_(A.bAh(!1,!0,!0,v.d,v.c,u.gatd(),v.f,v.e))}return t},
ate(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagq()||e==null||e.a==null){w=v.cy
v.I(w.gaQn(w))
return}v.I(new A.b5X(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2i(),new A.b5Y(w)))}}
A.o5.prototype={
VP(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.azq(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRT(d,e){return this.VP(null,null,d,e)},
aR_(d){return this.VP(null,d,null,null)},
aQZ(d){return this.VP(d,null,null,null)},
XK(d,e,f){var w,v,u,t=A.kF(d.ch,e.ch,f,A.c8_(),x.dB),s=B.ai(d.CW,e.CW,f),r=A.bIL(d.d,e.d,f),q=A.bKI(d.e,e.e,f),p=A.bIJ(d.c,e.c,f),o=e.a
o=A.a6y(B.a2A(d.a.b,o.b,f),o.a)
w=B.ai(d.y,e.y,f)
v=B.ai(d.x,e.x,f)
u=B.ai(d.z,e.z,f)
r=A.azq(e.cx,B.a1(d.as,e.as,f),t,e.cy,u,o,A.bIF(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.azp.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fR.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ad(v,new A.azy(),B.ag(v).i("ad<1,G>")).jL(0,new A.azz())
v=v.length
return w+(v-1)*this.d},
gbs(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.it.prototype={
gbs(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mR.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a2f.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2k.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.af9.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2l.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dv.prototype={
gbs(){return[this.a,this.b,C.bw,C.x,null]}}
A.LK.prototype={}
A.a2m.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.y3.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XK(v,w,d)}}
A.aiy.prototype={}
A.aiF.prototype={}
A.aiG.prototype={}
A.aiI.prototype={}
A.aiJ.prototype={}
A.aiK.prototype={}
A.aiL.prototype={}
A.aiM.prototype={}
A.aiN.prototype={}
A.azA.prototype={
Vb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uX(0,0,!1)
v=new A.zO(d,x.x)
u=this.a
if(u.aE(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uX(t,u,!0)}w=null
try{w=C.b.oZ(d,new A.azB())}catch(s){return new A.uX(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uX(q,r,!1)
u.m(0,v,j)
return j}}
A.uX.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aiH.prototype={}
A.azC.prototype={
ig(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0q(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acV(t,A.bAg(w,t.a),u)
l.y=u
l.aTe(e,u,f)
l.amC(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTn(d,e,m,t,r,s,n,o,f)}}},
acV(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dZ("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j0(p,B.ag(p).i("j0<1>")).aB(0,new A.azD(t,q,r,s))
w.push(new A.a7g(q))}return w},
aTe(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aZ(m,m)
l=new B.d7(k,k,k,k)}j=o.w
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
a4=B.QZ(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.QZ(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.L:f).gt(0)
k.seX(null)
a6=b2.f.e_()
v.drawRRect(B.lE(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.J(h,a9,g,b0):new B.J(h,b0,g,a9)
J.be(v.save())
v.clipRect(B.dO(b1),$.mL()[1],!0)
a6=b2.f.e_()
v.drawRRect(B.lE(a4),a6)
a6.delete()
v.restore()
b2.aTl(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geo(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gt(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.hp(a4))
n=A.aCK(new B.co(n.r,C.ah,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mW(n.gju().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTn(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bi(a5,a5,a5,a5,B.cW(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lG().a_t(a8,a7.b),a7.a),C.bw,C.x,a5,b6.c,C.bG)
w.agK(b1.f)
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
n=u+o.gey()
m=v+4+(o.gd4(0)+o.gd7(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aLf)j=v===D.ZU&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_u(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.J(h,i,v,t)
s=b1.a
f=new B.aZ(s,s)
e=B.Gz(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.lG().KO(new B.H(v,t),d).b
s=$.lG()
q=w.b
p=q.c
q=q.a.c
a0=s.KO(new B.H(p,q.gbU(q)),d)
q=g.gc8()
p=w.b.c
s=g.gaiZ()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.Wr(d,new A.azE(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aTl(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geo(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aZ(i.z,i.Q):C.a6
s=w?new B.aZ(i.x,i.y):C.a6
r=w?C.a6:new B.aZ(i.e,i.f)
w=w?C.a6:new B.aZ(i.r,i.w)
q=B.QZ(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a6:new B.aZ(i.z,i.Q)
p=v?C.a6:new B.aZ(i.x,i.y)
o=v?new B.aZ(i.e,i.f):C.a6
q=B.QZ(w,s,u,r,t,p,o,v?new B.aZ(i.r,i.w):C.a6)}else q=B.bCh(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a6)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
X5(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acV(b2,A.bAg(a8,b2.a),a8.ch)
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
break}++a3}return new A.a2m(d,q,a0,o,a2,a1,new A.eE(d.a,v),new B.r(n,t))}}return null}}
A.a7g.prototype={}
A.a2i.prototype={
bn(d){var w,v=this.e,u=B.bC(d,null,x.w).w.gcO(),t=new A.azC()
t.a1C()
$.an()
w=B.b_()
w.b=C.bj
t.f=w
w=B.b_()
w.b=C.b0
t.r=w
w=B.b_()
w.b=C.bj
w.r=C.o.gt(0)
t.w=w
w=B.b_()
w.b=C.b0
w.r=C.L.gt(0)
w.c=1
t.x=w
t=new A.acj(this.d,v,u,t,d,C.ba,new B.bs(),B.aM(x.j))
t.bl()
t.Zl(v.cy)
t.afU()
return t},
bx(d,e){e.sio(0,this.d)
e.sZ5(this.e)
e.scO(B.bC(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acj.prototype={
sio(d,e){if(this.aD.k(0,e))return
this.aD=e
this.bd()},
sZ5(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a1a(d.cy)
w.bd()},
scO(d){if(this.d1.k(0,d))return
this.d1=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.be(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fY.ig(w,new A.a2O(t,v),new A.w8(u.aD,u.i7,u.d1,x.Q))
s.restore()},
a_m(d){var w=this,v=w.gC(0)
return new A.LK(w.fY.X5(d,v,new A.w8(w.aD,w.i7,w.d1,x.Q)))}}
A.a28.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Du.prototype={
L(){return"AxisSide."+this.b}}
A.tR.prototype={}
A.qp.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adK.prototype={
gbs(){return[!1,0,0,0]}}
A.ps.prototype={
gbs(){return[this.b,this.a,this.c,!0]}}
A.vm.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eE.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eE))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.d.gA(this.a)^C.d.gA(this.b)}}
A.yV.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pP.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afb.prototype={
gbs(){return[this.a,this.b]}}
A.R2.prototype={
gbs(){return[this.a,this.b]}}
A.na.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nA.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kY.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lo.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a7r.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afz.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ND.prototype={
gbs(){return[this.a,this.b,!0]}}
A.vl.prototype={}
A.NM.prototype={
aen(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gt(v)
w.b=C.bj
d.iT(f,this.b,w)},
gbs(){return[this.a,this.b,this.c,0]}}
A.ait.prototype={}
A.aix.prototype={}
A.alN.prototype={}
A.amb.prototype={}
A.amc.prototype={}
A.ame.prototype={}
A.amf.prototype={}
A.an4.prototype={}
A.an3.prototype={}
A.an5.prototype={}
A.aqK.prototype={}
A.asD.prototype={}
A.asE.prototype={}
A.auh.prototype={}
A.av_.prototype={}
A.auZ.prototype={}
A.av0.prototype={}
A.aze.prototype={
MZ(d,e,f,g,h,i){return new B.im(this.aX0(d,e,f,g,h,i),x.g4)},
aX_(d,e,f,g){return this.MZ(d,e,f,!0,g,!0)},
aX0(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MZ(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lG().ak8(s,u,v,w)
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
A.LE.prototype={
a1C(){var w,v=this
$.an()
w=B.b_()
w.b=C.b0
v.a=w
w=B.b_()
w.b=C.bj
v.b=w
w=B.b_()
w.b=C.bj
v.e=w
w=B.b_()
w.b=C.b0
v.c=w
v.d=B.b_()},
ig(d,e,f){var w=this
w.a0r(d,e,f)
w.aTa(e,f)
w.aTk(e,f)
w.aTj(e,f)},
aTj(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lG().P0(w.a,a1.r-a1.f)
u=$.bzk().MZ(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fe(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.ld(n,m)
if(j!=null){p.r=C.I.gt(0)
p.seX(j.mP(0,i))}else{if(k==null)k=C.L
p.r=k.gt(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c5(p.r)
p.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.DX(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lG().P0(w.b,a1.y-a1.x)
u=$.bzk().MZ(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.ld(n,m)
if(k!=null){q.r=C.I.gt(0)
q.seX(k.mP(0,i))}else{if(p==null)p=C.L
q.r=p.gt(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c5(q.r)
q.r=B.aF(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gt(0)}a3.DX(n,m,d.a,f.d)}},
aTa(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.hd(new B.J(0,0,0+w.a,0+w.b),this.b)},
aTk(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.ld(new B.r(n.fe(t.a,m,e),0),new B.r(n.fe(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.I.gt(0)
r.seX(p.mP(0,s))}else{r.r=(q==null?C.L:q).gt(0)
r.seX(null)}o=n.e.e_()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.K)(l),++u){t=l[u]
s=B.ld(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.I.gt(0)
v.seX(q.mP(0,s))}else{v.r=(r==null?C.L:r).gt(0)
v.seX(null)}o=n.e.e_()
j.drawRect(B.dO(s),o)
o.delete()}},
aTi(d,e,f){var w,v
this.a0r(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeo(d,e,f,w)
if(v.b.length!==0)this.aTp(d,e,f,w)},
aeo(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.ld(m,l)
if(j!=null){n.r=C.I.gt(0)
n.seX(j.mP(0,i))}else{if(k==null)k=C.L
n.r=k.gt(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c5(n.r)
n.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
e.DX(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eI(0,2)
g=C.d.an(o,n.gbU(n).eI(0,2))
J.be(r.save())
r.translate(h,g)
n=n.gNW().b
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
s.aep(0,n,new B.r(h,o),k)}}},
aTp(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=d.fe(o,a3,a2)
m=new B.r(n,0)
o=d.fe(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.ld(m,l)
if(j!=null){n.r=C.I.gt(0)
n.seX(j.mP(0,i))}else{if(k==null)k=C.L
n.r=k.gt(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c5(n.r)
n.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
a1.DX(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eI(0,2)
g=n.gbU(n).eI(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.be(r.save())
r.translate(f,e)
n=n.gNW().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eI(0,2)
g=n.gbU(n).ah(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.aep(0,n,new B.r(o,k),j)}}},
fe(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_u(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.LF.prototype={
galX(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galY(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galZ(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galV(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
ami(d){var w,v=this,u=null,t=v.d,s=A.bB3(t.d),r=t.a
r=r.a&&A.bUY(r.b)?r.b:u
w=B.b([B.aL(u,v.c,C.q,u,u,new B.aC(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.azg(w)
if(v.galX())C.b.hB(w,s.$1(!0),new A.B1(D.BC,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galZ())C.b.hB(w,s.$1(!0),new A.B1(D.mR,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galY())C.b.hB(w,s.$1(!0),new A.B1(D.BD,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galV())C.b.hB(w,s.$1(!0),new A.B1(D.dR,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jz(new A.azf(this))}}
A.Su.prototype={
U(){return new A.Zj(new B.bo(null,x.eF))}}
A.Zj.prototype={
ayO(){switch(this.a.c.a){case 0:return C.el
case 1:return C.ff
case 2:return C.d3
case 3:return C.dD}},
azj(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
ayQ(d){this.a.toString
return},
aq(){this.aI()
$.cD.x1$.push(this.ga4T())},
bc(d){this.bF(d)
$.cD.x1$.push(this.ga4T())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azj()
return B.Br(B.b35(0,B.aL(v.ayO(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.adL.prototype={
bn(d){return A.bUQ(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.W!==w){e.W=w
e.a7()}}}
A.a29.prototype={
ho(d){if(!(d.b instanceof B.hz))d.b=new B.hz(null,null,C.v)},
hZ(d){if(this.B===C.ag)return this.yk(d)
return this.ae1(d)},
aLZ(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9K(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dG(d){var w=this.a9J(d,B.hN())
switch(this.B.a){case 0:return d.c4(new B.H(w.a,w.b))
case 1:return d.c4(new B.H(w.b,w.a))}},
a9J(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ag?d.b:d.d,m=o.aj$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hr(u,null)
break
case 1:q=B.hr(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9K(p)
t=Math.max(t,o.aLZ(p))
m=r.aJ$}return new A.bhM(n<1/0?n:s,t)},
cD(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga6.call(p)),n=p.a9J(o,B.mK()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c4(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c4(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.aj$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.a9K(r==null?B.S(B.Z("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.ca(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aJ$;++u}},
ei(d,e){return this.yl(d,e)},
aN(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.ve(d,e)},
l(){this.a4.sbh(0,null)
this.apd()}}
A.bhM.prototype={}
A.azh.prototype={}
A.k1.prototype={
gbs(){return[this.a,this.b]}}
A.o4.prototype={}
A.aiu.prototype={}
A.aiv.prototype={
aO(d){var w,v,u
this.fu(d)
w=this.aj$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aJ$}},
aF(d){var w,v,u
this.fj(0)
w=this.aj$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aJ$}}}
A.aiw.prototype={}
A.Uw.prototype={
l(){var w,v,u
for(w=this.WE$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.B1.prototype={
goE(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d3
case 1:return C.dD
case 2:return C.el
case 3:return C.ff}},
gb0D(){var w=this.d,v=A.bB3(w.d),u=A.bII(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ah(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ah(0,new B.aj(u.a,0,u.c,0))}},
gaiN(){var w=this.d,v=A.bII(w.a),u=A.bB3(w.d)
switch(this.c.a){case 2:case 0:return u.gd4(0)+u.gd7(0)+(v.gd4(0)+v.gd7(0))
case 1:case 3:return u.gey()+v.gey()}},
aXH(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goE().c.d
if(o==null)o=$.lG().P0(d,f-e)
w=p.c
v=w!==D.mR
if((!v||w===D.dR)&&p.d instanceof A.o5){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bAg(u,d)
w=new B.j0(t,B.ag(t).i("j0<1>"))
s=w.gi1(w).f3(0,new A.b02(u),x.W).fO(0)}else{r=$.bzk()
w=!v||w===D.dR
v=p.d
q=r.aX_(w?v.w:v.z,o,f,e)
v=B.oF(q,new A.b03(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ag(s).i("ad<1,o4>")
w=B.Q(new B.ad(s,new A.b04(p,e,f,o,g,d),w),w.i("av.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goE()
w=j.goE()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aL(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mR
u=!v
t=!u||w===D.dR
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dR?C.G:C.ag
q=B.b([],x.p)
if(w===D.BC||v)j.goE()
if(j.goE().c.a){v=!u||w===D.dR?r:j.goE().c.c
p=!u||w===D.dR?j.goE().c.c:r
o=j.gb0D()
n=!u||w===D.dR?C.ag:C.G
j.gaiN()
m=j.gaiN()
l=!u||w===D.dR
k=j.d
l=l?k.f:k.x
u=!u||w===D.dR?k.r:k.y
q.push(B.aL(i,A.c1e(new A.azh(),n,j.aXH(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BD||w===D.dR)j.goE()
return new B.ed(t,i,i,B.bXG(q,C.j,s,i,C.f,C.H,0,i,i,C.aU),i)}}
A.a2o.prototype={
gbs(){return[this.a,this.b]}}
A.a6x.prototype={
gbs(){return[this.a,this.b]}}
A.NT.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6z.prototype={
gacf(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.azN.prototype={}
A.aGd.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aiQ.prototype={}
A.am8.prototype={}
A.am9.prototype={}
A.amg.prototype={}
A.LN.prototype={
ig(d,e,f){}}
A.w8.prototype={}
A.hy.prototype={
gdN(){return null},
gagq(){var w,v=this
B.bF()
B.bF()
B.bF()
w=v instanceof A.NS
if(w)return!0
return!(v instanceof A.NP)&&!(v instanceof A.NO)&&!(v instanceof A.NQ)&&!(v instanceof A.NN)&&!w&&!(v instanceof A.NR)}}
A.a6D.prototype={
gdN(){return this.a.b}}
A.a6E.prototype={
gdN(){return this.a.b}}
A.a6F.prototype={
gdN(){return this.a.b}}
A.NO.prototype={}
A.NP.prototype={}
A.a6I.prototype={
gdN(){return this.a.b}}
A.NR.prototype={}
A.NS.prototype={
gdN(){return this.a.b}}
A.a6C.prototype={
gdN(){return this.a.b}}
A.a6B.prototype={
gdN(){return this.a.b}}
A.NN.prototype={
gdN(){return this.a.b}}
A.a6G.prototype={
gdN(){return this.a.gdN()}}
A.a6H.prototype={
gdN(){return this.a.gdN()}}
A.NQ.prototype={
gdN(){return this.a.gdN()}}
A.GQ.prototype={
Zl(d){this.V=d.b
this.W=d.c
this.a4=d.d},
afU(){var w=this,v=null,u=w.al=B.bBY(v,v)
u.ay=new A.aWf(w)
u.ch=new A.aWg(w)
u.CW=new A.aWh(w)
u.cy=new A.aWi(w)
u.cx=new A.aWj(w)
u=w.aG=B.HE(v,-1,v)
u.B=new A.aWk(w)
u.Z=new A.aWl(w)
u.V=new A.aWm(w)
u=w.bD=B.a8y(v,w.a4,v)
u.p3=new A.aWn(w)
u.p4=new A.aWo(w)
u.RG=new A.aWp(w)},
cD(){var w=x.k.a(B.M.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dG(d){return new B.H(d.b,d.d)},
kM(d){return!0},
mZ(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.oC(d)
w=v.aG
w===$&&B.a()
w.oC(d)
w=v.al
w===$&&B.a()
w.oC(d)}else if(x.gJ.b(d))v.la(new A.a6H(d))},
gNs(d){return new A.aWq(this)},
gNu(d){return new A.aWr(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_m(w):null
u.V.$2(d,v)
u.Z=C.ba},
gLg(d){return this.Z},
gFS(){var w=this.ar
w===$&&B.a()
return w},
aO(d){this.fu(d)
this.ar=!0},
aF(d){this.ar=!1
this.fj(0)},
$ijC:1}
A.Pc.prototype={
U(){return new A.X2(B.b([],x.r),B.A(x.S,x.J),new A.aMk(B.A(x.y,x.dj)),null,null)}}
A.X2.prototype={
p(d){var w,v=this,u=v.a4V(),t=v.CW
t.toString
t=v.abM(t.au(0,v.gfk().gt(0)))
w=v.abM(u)
v.a.toString
return new A.LF(new A.a8p(t,w,null),u,null)},
abM(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ag(w).i("ad<1,ef>")
w=B.Q(new B.ad(w,new A.bhS(this,d),v),v.i("av.E"))
return d.aRQ(w,this.cy)},
a4V(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Vb(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aS4(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRu(new A.Fn(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaA6(),t.c,t.d))}return r},
aA7(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagq())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.I(new A.bhQ(v))
return}v.I(new A.bhR(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4V(),new A.bhT(w)))}}
A.q3.prototype={
XK(d,e,f){var w,v,u,t,s,r,q=B.ai(d.f,e.f,f),p=B.ai(d.r,e.r,f),o=B.ai(d.w,e.w,f),n=B.ai(d.x,e.x,f),m=B.ai(d.y,e.y,f),l=B.ai(d.z,e.z,f),k=B.a1(d.as,e.as,f),j=e.a
j=A.a6y(B.a2A(d.a.b,j.b,f),j.a)
w=A.bIF(d.at,e.at,f)
v=A.bIJ(d.c,e.c,f)
u=A.bIL(d.d,e.d,f)
t=A.bKI(d.e,e.e,f)
s=A.kF(d.ch,e.ch,f,A.ca6(),x.cz)
s.toString
r=A.kF(d.CW,e.CW,f,A.ca5(),x.bO)
r.toString
u=A.bBA(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VQ(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bBA(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aS4(d,e,f,g){return this.VQ(null,null,d,e,f,g,null)},
aRu(d){var w=null
return this.VQ(w,d,w,w,w,w,w)},
aRQ(d,e){var w=null
return this.VQ(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ef.prototype={
arT(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oZ(n.a,new A.aMj())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.fS))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b0()
n.b=q
r.toString
n.c!==$&&B.b0()
n.c=r
s.toString
n.d!==$&&B.b0()
n.d=s
t.toString
n.e!==$&&B.b0()
n.e=t}},
adG(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aMi(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRB(d){return this.adG(d,null)},
aRD(d){return this.adG(null,d)},
gbs(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Pd.prototype={
gbs(){return[this.a]}}
A.a2h.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mS.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.LI.prototype={
gbs(){return[!1,this.b,this.c,!0]}}
A.yU.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aM8.prototype={
L(){return"LabelDirection."+this.b}}
A.a6A.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Fn.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8q.prototype={
gbs(){return[4,C.fR,16,D.xZ,0,120,A.ca8(),!1,!1,!1,0,C.J,A.ca7()]}}
A.nd.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qx.prototype={}
A.rP.prototype={
gbs(){return[this.a,this.b,C.bw,C.x,null]}}
A.tT.prototype={
gbs(){return[this.a,this.b]}}
A.Hh.prototype={
gbs(){return[this.a]}}
A.Pe.prototype={}
A.zJ.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XK(v,w,d)}}
A.aiD.prototype={}
A.aiE.prototype={}
A.aiS.prototype={}
A.ama.prototype={}
A.amd.prototype={}
A.anY.prototype={}
A.anZ.prototype={}
A.ao_.prototype={}
A.ao1.prototype={}
A.ao2.prototype={}
A.ao3.prototype={}
A.ao4.prototype={}
A.asC.prototype={}
A.aug.prototype={}
A.aMk.prototype={
Vb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yC
u=new A.zO(d,x.y)
t=this.a
if(t.aE(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zK(s,r,q,t,!0)}w=null
try{w=C.b.oZ(d,new A.aMl())}catch(p){return D.yC}v=null
try{v=C.b.oZ(w.a,new A.aMm())}catch(p){return D.yC}o=v.a
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
if(f<m)m=f}e=new A.zK(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zK.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ao0.prototype={}
A.aMn.prototype={
ig(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacf(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iO(new B.J(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aQu(new B.J(0,0,u,v))}d.a0q(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aTg(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTc(a3,q,a4)
d.aTh(a3,q,a4)
d.amB(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.V(o)
if(n.gq(o)!==p.length)throw B.e(B.dZ("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vR(q,i,j,k))}}d.aTo(a3,s,a4)
if(w.gacf(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTm(a2,a3,v,f,new A.Hh(g),a4)}},
aTc(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bB2(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.ZW(o,e,u,f)
s=p.ak0(o,e,t,u,f)
r=p.ZY(o,e,t,u,f,!0)
q=p.ak_(o,e,t,u,f)
p.aTf(d,s,p.ZV(o,e,t,u,f,!0),f,e)
p.aT9(d,q,r,f,e)
p.aTd(d,t,e)
p.aTb(d,t,e,f)}},
aTg(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bB2(a5.a),a8=A.bB2(a6.a)
if(a7.length!==a8.length)throw B.e(B.bM("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bW.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ag(n).i("cC<1>")
l=B.Q(new B.cC(n,m),m.i("av.E"))
k=a2.ZW(a3,a5,o,b2)
j=a2.ZX(a3,a6.aRD(l),l,b2,k)
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
if(q){a0.r=C.I.gt(0)
a0.seX(v.mP(0,new B.J(n,m,e,d)))}else{a0.r=(r?C.L:w).gt(0)
a0.seX(null)}$.an()
a1=new B.mV(C.dF,C.bj,C.ed,C.eB,C.e1).e_()
n=B.dO(new B.J(0,0,t,s))
m=$.bW.b
if(m===$.bW)B.S(B.vP(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e_()
n=j.e
a4.drawPath((n==null?j.e=new B.mW(j.gju().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aTh(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_1(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fS)&&t.$2(q,e)){p=this.fe(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aen(s,q,new B.r(p,o))}}},
aTo(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fU(b3,new A.aMq())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.a_1(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fe(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rO(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lC(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lC(q.$2(m,k))))
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
b0=B.ld(a3,a5)
if(a6!=null){f.r=C.I.gt(0)
f.seX(a6.mP(0,b0))}else{if(a4==null)a4=C.L
f.r=a4.gt(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c5(f.r)
f.r=B.aF(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.DX(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rO(d.a))
f.aen(t,j,new B.r(h,g))}}},
ZX(d,e,f,g,h){var w=this.ak1(d,e,f,g,h)
return w},
ZW(d,e,f,g){return this.ZX(d,e,f,g,null)},
ak1(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.co($.an().r,C.ah,null,null,B.b([],x.v)):a5,f=J.V(a3),e=f.gq(a3),d=i.fe(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.az(new B.ff(d,a0))
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
s=new B.MJ(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iE(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZY(d,e,f,g,h,i){var w=this,v=B.Nx(f),u=J.V(g),t=w.fe(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.az(new B.ct(t,s))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,s))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pA())
return v},
ak0(d,e,f,g,h){return this.ZY(d,e,f,g,h,!1)},
ZV(d,e,f,g,h,i){var w=this,v=B.Nx(f),u=J.V(g),t=w.fe(u.h(g,u.gq(g)-1).a,d,h)
v.az(new B.ct(t,0))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,0))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pA())
return v},
ak_(d,e,f,g,h){return this.ZV(d,e,f,g,h,!1)},
aTf(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bBX(s,q.b,q.c,new B.J(v,u,t,w.b))
d.a.i0(e,r.r)},
aT9(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bBX(s,q.b,q.c,new B.J(v,0,u,t))
d.a.i0(e,r.r)},
aTd(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.Nz(B.Nx(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iC:C.ed
u.e=C.eB
u.r=v.gt(0)
u.seX(null)
u.c=f.x
u.r=v.gt(0)
$.lG()
u.z=new B.zS(C.aw,w.c*0.57735+0.5)
d.a.i0(A.aCK(e,f.cy).ec(w.b),this.f)},
aTb(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iC:C.ed
q.e=C.eB
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
A.bBX(t,f.r,f.w,new B.J(q,w,v,u))
t.z=null
t.c=f.x
A.c_7(t)
d.a.i0(A.aCK(e,f.cy),s.f)},
aTm(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bOY(b1),b3=J.V(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dZ("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lG().a_t(b4,u.b)
s=u.a
r=w.k(0,C.j3)?new B.ky(1):w
q=new B.tO(new B.fu(s,a8,a8,C.ba,a8,a8,a8,a8,a8,a8,t),C.bw,C.x,r,a8,a8,a8,a8,C.bG,a8)
q.agK(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.K)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fe(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.fR.gey()
k=o+(w-1)*4+(C.fR.gd4(0)+C.fR.gd7(0))
j=t-k-16
i=a7.a_u(b3,l,D.xZ,0)
b3=i+l
w=j+k
h=new B.aZ(4,4)
g=B.Gz(new B.J(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bOX(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lG().KO(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lG().KO(new B.H(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.I.gt(0)
s.c=0}b5.Wr(0,new A.aMo(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.c1R(q.r,q.w)
A:{if(D.ED===a5){a6=a3
break A}if(D.EE===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wr(0,new A.aMp(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_1(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fe(v[0].a,e,f)
return this.fe(v[v.length-1].a,e,f)-w},
X5(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aks(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fU(t,new A.aMr())
return t.length===0?null:t},
aks(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fS))continue
p=u.$2(e,new B.r(this.fe(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qx(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vR.prototype={}
A.a8p.prototype={
bn(d){var w,v=this.e,u=B.bC(d,null,x.w).w.gcO(),t=new A.aMn()
t.a1C()
$.an()
w=B.b_()
w.b=C.b0
t.f=w
w=B.b_()
w.b=C.bj
t.r=w
w=B.b_()
w.b=C.b0
t.w=w
w=B.b_()
w.b=C.bj
w.r=C.L.gt(0)
w.a=D.a0f
t.x=w
w=B.b_()
w.b=C.b0
w.r=C.I.gt(0)
t.y=w
w=B.b_()
w.b=C.bj
w.r=C.o.gt(0)
t.z=w
w=B.b_()
w.b=C.b0
w.r=C.L.gt(0)
w.c=1
t.Q=w
t=new A.acw(this.d,v,u,t,d,C.ba,new B.bs(),B.aM(x.j))
t.bl()
t.Zl(v.cx)
t.afU()
return t},
bx(d,e){e.sio(0,this.d)
e.sZ5(this.e)
e.scO(B.bC(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acw.prototype={
sio(d,e){if(this.aD.k(0,e))return
this.aD=e
this.bd()},
sZ5(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a1a(d.cx)
w.bd()},
scO(d){if(this.d1.k(0,d))return
this.d1=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.be(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fY.ig(w,new A.a2O(t,v),new A.w8(u.aD,u.i7,u.d1,x.C))
s.restore()},
a_m(d){var w=this,v=w.gC(0)
return new A.Pe(w.fY.X5(d,v,new A.w8(w.aD,w.i7,w.d1,x.C)))}}
A.Oh.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a2O.prototype={
aQu(d){this.a.a.clipRect(B.dO(d),$.mL()[1],!0)
return null},
aev(d,e){d.aN(this.a,e)},
Wr(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.be(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lG()
s.Z3(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DX(d,e,f,g){var w=new B.co($.an().r,C.ah,null,null,B.b([],x.v))
w.az(new B.ff(d.a,d.b))
w.az(new B.ct(e.a,e.b))
this.a.i0(A.aCK(w,g),f)}}
A.zO.prototype={
gbs(){return[this.a]}}
A.aob.prototype={}
A.a2Y.prototype={}
A.b3x.prototype={
KO(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aYg(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aZ(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aZ(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aZ(v,v)
s=d.d
return new B.d7(w,u,t,s.a>v||s.b>v?new B.aZ(v,v):s)},
aYh(d,e){var w,v
if(d==null)return D.a0q
w=d.b
v=e/2
return d.aRG(w>v?v:w)},
P0(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0o(w)},
b0o(d){if(d<1)return this.aKs(d)
return this.a8M(d)},
aKs(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8M(d*q)/q},
a8M(d){var w,v=C.e.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aM(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
akh(d){if(d>=1)return 1
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
a_t(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.ja
w=e.a?u.w.c6(e):e
v=B.b7(d,C.vS)
v=v==null?null:v.ay
return v===!0?w.c6(C.mx):w},
ak8(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qz)","C(pO)","G(G,pO)","C(eE)","~(v,fR)","G(ef,v)","pP(G)","vj(z)","G(G,qz)","bT(G,tR)","R<~>()","v(qx,qx)","xe(B,bH)","rA(rA)","Jb(on)","qz(@)","vV(@)","rk(z)","wS(@)","IM(B,bH)","K5(oq)","J6(oo)","Dc(@)","ef(G)","vk(dK<vk>)","ae(G,tR)","EM(dK<aH3>)","pO(@)","G(vV)","G(wS)","x9(B,bH)","BD(z)","~()","lX(wJ<lX>)","~(hy,LK?)","y3(@)","G(it)","C(fR)","~(v,it)","~(@)","k1(o4)","c(o4)","k1(bw<v,G>)","k1(G)","o4(k1)","~(hy,Pe?)","ef(ef)","R<oq>(c4<oq>)","zJ(@)","R<on>(c4<on>)","tT(v)","vl(eE,G,ef,v)","rP(nd)","v(v,v,G)","v(vR,vR)","G(fR)","R<oo>(c4<oo>)","yS(eu<B?>)","fR(fR,fR,G)","it(it,it,G)","mR(mR,mR,G)","Dv?(fR,v,it,v)","E(fR)","c(G,tR)","eE(eE,eE,G)","C(G)","na(na,na,G)","nA(nA,nA,G)","kY(kY,kY,G)","lo(lo,lo,G)","h(kY)","h(lo)","ef(ef,ef,G)","mS(mS,mS,G)","vl(eE,G,ef,v{size:G?})","C(eE,ef)","G(r,r)","u<tT>(ef,u<v>)","~(xb)","u<rP>(u<nd>)","E(nd)","C(ef)"])
A.aGZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cU(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.am(k==null?"":k)
w=l.h(0,"booking_date")
w=B.e6(J.am(w==null?"":w))
if(w==null)w=B.bJ(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.am(v==null?"":v)
u=l.h(0,"account_name")
u=J.am(u==null?"":u)
t=l.h(0,"direction")
t=J.am(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.am(s)
r=A.bw8(l.h(0,"amount_net"))
q=A.bw8(l.h(0,"amount_tax"))
p=A.bw8(l.h(0,"amount_gross"))
o=A.bw8(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.am(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.am(m)
l=l.h(0,"source_account_code")
return new A.pO(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.am(l))},
$S:z+27}
A.bx4.prototype={
$1(d){if(!this.a)return d
return d===D.ft?D.lh:D.ft},
$S:z+13}
A.aH_.prototype={
$1(d){var w=B.cU(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qz(J.am(v==null?"":v),A.pk(w.h(0,"revenue_net")),A.pk(w.h(0,"expense_net")),A.pk(w.h(0,"result_net")))},
$S:z+15}
A.aH0.prototype={
$1(d){var w,v,u,t=B.cU(x.f.a(d),x.N,x.z),s=B.ah(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ah(t.h(0,"code"))
v=A.pk(t.h(0,"gross"))
u=B.b3(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.vV(s,r,w,v,u,A.pk(t.h(0,"avg_basket")))},
$S:z+16}
A.aH1.prototype={
$1(d){var w,v=B.cU(x.f.a(d),x.N,x.z),u=B.ah(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b3(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wS(u,t,w,A.pk(v.h(0,"gross")))},
$S:z+18}
A.aHk.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.V(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.Dc(v,u,J.am(t==null?"expense":t),A.uC(w.h(d,"net")),A.uC(w.h(d,"tax")),A.uC(w.h(d,"gross")))},
$S:z+22}
A.bwY.prototype={
$1(d){return new A.vk(d.ak($.bL(),x.A))},
$S:z+24}
A.bwZ.prototype={
$1(d){return new A.EM(d.ak($.bTE(),x.D))},
$S:z+26}
A.byU.prototype={
$1(d){return E.aH2()},
$S:z+33}
A.bx_.prototype={
$1(d){var w=d.ak($.qZ(),x.P)
return d.ak($.a1h(),x.a).Gk(w)},
$S:z+47}
A.bwW.prototype={
$1(d){var w=d.ak($.qZ(),x.P)
return d.ak($.a1h(),x.a).G5(w)},
$S:z+49}
A.bwX.prototype={
$1(d){var w=d.ak($.qZ(),x.P)
return d.ak($.a1h(),x.a).Gf(w)},
$S:z+56}
A.bwV.prototype={
$1(d){return this.ajR(d)},
ajR(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ak($.bL(),x.A).fo("finance_balance_kpis",t),$async$$1)
case 3:s=r.cU(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aGY.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1h(),x.a).pI(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGX.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1h(),x.a).LS(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bec.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbE()
r=$.bzP()
if(s.e==null)B.S(B.Z(y.b))
s.gce().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.be7.prototype={
$1(d){var w=this.a
return w.I(new A.be6(w,d))},
$S:z+78}
A.be6.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.be8.prototype={
$0(){var w=this.a
return w.I(new A.be5(w))},
$S:0}
A.be5.prototype={
$0(){return this.a.x=null},
$S:0}
A.beb.prototype={
$0(){return F.zG},
$S:84}
A.bea.prototype={
$2(d,e){return new A.xe("Buchungen konnten nicht geladen werden: "+B.j(d),C.a0,F.yd,null)},
$S:z+12}
A.be9.prototype={
$1(d){return new A.Jb(d,this.a.asX(d.b),null)},
$S:z+14}
A.be4.prototype={
$1(d){var w=this.a
if(w.gSA()!=null&&d.c!==w.gSA())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.be0.prototype={
$0(){return this.a.e.$1(D.Be)},
$S:0}
A.be1.prototype={
$0(){return this.a.e.$1(D.a_k)},
$S:0}
A.be2.prototype={
$0(){return this.a.e.$1(D.a_l)},
$S:0}
A.be3.prototype={
$0(){return this.a.e.$1(D.a_m)},
$S:0}
A.bi2.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bi3.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bi4.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bi5.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bi6.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bi7.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bi8.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aHi.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bzQ()
if(s.e==null)B.S(B.Z(y.b))
s.gce().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aH9.prototype={
$0(){return this.a.JL(this.b,this.c)},
$S:0}
A.aHa.prototype={
$0(){return this.a.BE(this.b,this.c)},
$S:0}
A.aHb.prototype={
$0(){var w=x.z
return B.aY(this.a,!1).dD(B.dB(new A.aH8(),null,w),w)},
$S:0}
A.aH8.prototype={
$1(d){return F.Dx},
$S:z+17}
A.aHc.prototype={
$0(){return B.pU(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aHd.prototype={
$0(){var w=x.z
return B.aY(this.a,!1).dD(B.dB(new A.aH7(),null,w),w)},
$S:0}
A.aH7.prototype={
$1(d){return D.a9Y},
$S:z+7}
A.aHe.prototype={
$0(){var w=this
return w.a.BF(w.b,w.c,w.d)},
$S:0}
A.aHh.prototype={
$0(){return F.zG},
$S:84}
A.aHg.prototype={
$2(d,e){return new A.IM(B.j(d),null)},
$S:z+19}
A.aHf.prototype={
$1(d){return new A.K5(d,null)},
$S:z+20}
A.aH6.prototype={
$1(d){var w=null,v=this.a,u=$.dm()
v=B.f("Die Finanzauswertung f\xfcr "+u.aa(v.a)+" \u2013 "+u.aa(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.iM(B.b([B.dt(C.cd,w,w,new A.aH4(u),w,w),B.dJ(F.my,new A.aH5(u),B.dF(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.mz)},
$S:47}
A.aH4.prototype={
$0(){B.aY(this.a,!1).cN(!1)
return null},
$S:0}
A.aH5.prototype={
$0(){B.aY(this.a,!1).cN(!0)
return null},
$S:0}
A.blj.prototype={
$0(){var w=this.a.aC(0,$.qZ().ghP(),x.V),v=E.aH2()
w.un(0,v)
return v},
$S:0}
A.blk.prototype={
$0(){var w=this.a.aC(0,$.qZ().ghP(),x.V),v=new B.b5(Date.now(),0,!1),u=new E.lX(B.bJ(B.b2(v),1,1,0,0,0,0),v)
w.un(0,u)
return u},
$S:0}
A.bll.prototype={
$0(){return this.a.J5(this.b,this.c)},
$S:0}
A.bli.prototype={
$2(d,e){return new B.p1(B.T(d).aR2(B.T(d).ax.aRV(C.h,C.m)),e,null)},
$S:1033}
A.bs2.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cR(),p=A.P_(!1,C.ln,"Umsatz 7 %",q.aa(r.a),u),o=A.P_(!1,C.ln,"Umsatz 19 %",q.aa(r.b),u),n=A.P_(!0,D.abG,"Umsatz netto",q.aa(r.c),u),m=r.d
m=A.P_(!1,D.abF,"Aufwand",A.bE_(m,A.bx3(t,"",m)),A.bOH(t,A.bx3(t,"",m)))
w=r.e
v=q.aa(w)
return E.aJw(1.7,B.b([p,o,n,m,A.P_(!0,C.o8,"Ergebnis",v,w<0?C.a0:C.am),A.P_(!1,C.fT,"USt-Saldo",q.aa(r.f-r.r),u)],x.p),s,12,12,C.iq,!0)},
$S:119}
A.bs3.prototype={
$0(){var w=x.z
return B.aY(this.a,!1).dD(B.dB(new A.bs1(this.b),null,w),w)},
$S:0}
A.bs1.prototype={
$1(d){return new A.vj(this.a.a,null)},
$S:z+7}
A.aM7.prototype={
$0(){return D.awl},
$S:84}
A.aM6.prototype={
$2(d,e){var w=null
return B.bg(C.a0,B.f("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.w(C.h,13,C.k),w,w,w),C.fk,w,C.D,w,w,3)},
$S:177}
A.aM5.prototype={
$1(d){return new A.J6(d,null)},
$S:z+21}
A.bhD.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cR(),i=j.aa(k.c),h=l.w,g=l.d,f=B.ag(g).i("ad<1,G>"),e=f.i("av.E"),d=B.Q(new B.ad(g,new A.bhs(),f),e)
i=A.jV(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aa(r.b)
w=B.Q(new B.ad(g,new A.bht(),f),e)
d=A.jV(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aa(k.e)
w=B.Q(new B.ad(g,new A.bhu(),f),e)
k=A.jV(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ag(h.b,1)
v=B.Q(new B.ad(g,new A.bhv(),f),e)
w=A.jV(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ag(h.a,1)
u=B.Q(new B.ad(g,new A.bhw(),f),e)
v=A.jV(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ag(r.c,1)
t=B.Q(new B.ad(g,new A.bhx(),f),e)
u=A.jV(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ag(h.c,1)
s=B.Q(new B.ad(g,new A.bhy(),f),e)
t=A.jV(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aa(h.d)
s=B.Q(new B.ad(g,new A.bhz(),f),e)
h=A.jV(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aa(l.r.d)
m=B.Q(new B.ad(g,new A.bhA(m),f),e)
m=A.jV(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aa(l)
l=B.Q(new B.ad(g,new A.bhB(l),f),e)
l=A.jV(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ag(j,1)
j=B.Q(new B.ad(g,new A.bhC(j),f),e)
return E.aJw(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jV(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.iq,!0)},
$S:119}
A.bhs.prototype={
$1(d){return d.b},
$S:z+0}
A.bht.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bhu.prototype={
$1(d){return d.d},
$S:z+0}
A.bhv.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bhw.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bhx.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bhy.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bhz.prototype={
$1(d){return d.d},
$S:z+0}
A.bhA.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bhB.prototype={
$1(d){return this.a},
$S:z+0}
A.bhC.prototype={
$1(d){return this.a},
$S:z+0}
A.bhE.prototype={
$0(){return A.bDV(this.b,1.45,new A.UW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bhF.prototype={
$0(){return A.bDV(this.b,1.6,new A.Vc(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bw3.prototype={
$1(d){var w=this,v=null,u=B.aq(16),t=x.p,s=B.b([B.af(B.b([B.ao(B.f(w.a,v,v,v,v,B.bA(C.h,18,C.p),v,v,v),1),B.fd(v,v,D.ae9,v,v,new A.bw2(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.f(w.b,v,v,v,v,B.w(C.n,12,C.aD),v,v,v),C.F],t))
s.push(C.t)
s.push(B.bR(new B.mQ(w.c,w.d,v),v,17976931348623157e292))
return B.a5Q(v,C.o,new B.ab(C.ak,B.a5(s,C.z,C.f,C.H),v),v,v,v,C.fs,C.vc,v,new B.d0(u,C.J),v)},
$S:1034}
A.bw2.prototype={
$0(){return B.aY(this.a,!1).eU()},
$S:0}
A.bhG.prototype={
$0(){var w=this.a,v=B.aB(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bDV(this.b,2.4,new A.Zv(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.br6.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.br7.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.br8.prototype={
$1(d){return A.aMi(null,1.4,null,C.a0,0.35,D.aiT,D.Eu,null,!1,!1,!1,!1,D.FS,!1,10,D.YD,!0,C.lE,B.b([new A.eE(0,d),new A.eE(this.a,d)],x.U))},
$S:z+23}
A.b7A.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+8}
A.b7C.prototype={
$2(d,e){var w=null
return B.f(this.a.aLN(d),w,w,w,w,B.w(C.n,10,C.E),w,w,w)},
$S:z+25}
A.b7D.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vl
return new B.ab(C.l5,B.f(C.c.cP(this.a[v].a,5),w,w,w,w,B.w(C.n,9,C.E),w,w,w),w)},
$S:z+9}
A.b7B.prototype={
$1(d){return D.aa1},
$S:z+6}
A.b8D.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b8E.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b8F.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b8G.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vl
return new B.ab(C.l5,B.f(this.a[v],w,w,w,w,B.w(C.h,12,C.p),w,w,w),w)},
$S:z+9}
A.bim.prototype={
$1(d){return d.d},
$S:z+28}
A.bin.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.btl.prototype={
$1(d){return d.d},
$S:z+29}
A.btm.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b5U.prototype={
$0(){return D.awt},
$S:84}
A.b5T.prototype={
$2(d,e){return new A.x9("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+30}
A.b5S.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bg(m,B.a5(B.b([B.f("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.w(C.h,14,C.E),m,m,m),C.F,B.f("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.w(C.n,12.5,C.k),m,m,m),C.t,B.jh(C.c5,B.b([B.fg(C.Fp,D.aKB,new A.b5M(w,v),m),B.fg(D.adL,D.aJs,new A.b5N(w,v),m)],u),C.d0,8,8)],u),C.z,C.f,C.i),C.a4,m,C.D,m,m,3)}w=new A.b5V(d)
t=C.b.f0(n.a.e.d,0,new A.b5O())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jz(new A.b5P(new A.b5W(w),r,w,s))
v=J.V(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a5(B.b([w,C.F,B.af(B.b([B.ao(B.f("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.w(C.n,11,C.k),m,m,m),1),B.p_(D.af0,D.aJP,new A.b5Q(q,p),m),B.p_(D.aeB,D.aJz,new A.b5R(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a8,C.f,C.i)},
$S:225}
A.b5M.prototype={
$0(){return A.awR(this.a,this.b,null)},
$S:0}
A.b5N.prototype={
$0(){return A.awO(this.a,this.b)},
$S:0}
A.b5V.prototype={
$1(d){var w=B.b3(J.Y(this.a,d))
return w==null?null:w},
$S:1035}
A.b5W.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ag(v,1)
w=B.aB(w,".",",")+" %"}return w},
$S:31}
A.b5O.prototype={
$2(d,e){return d+e.d},
$S:z+8}
A.b5P.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jV(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i8,o.$1("liquidity1_pct")),m=A.jV(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i8,o.$1("liquidity2_pct")),l=A.jV(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i8,o.$1("liquidity3_pct"))
o=A.jV(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i8,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ag(w,1)
w=B.aB(w,".",",")+" %"}w=A.jV(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i8,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cR()
v=u.aa(v)
return E.aJw(p,B.b([n,m,l,o,w,A.jV(s,s,!1,"Bilanzsumme",!1,"EK "+u.aa(t.d),s,s,s,C.i8,v)],x.p),q,12,12,C.iq,!0)},
$S:119}
A.b5Q.prototype={
$0(){return A.awO(this.a,this.b)},
$S:0}
A.b5R.prototype={
$0(){return A.awR(this.a,this.b,this.c)},
$S:0}
A.bw1.prototype={
$1(d){return new A.BD(this.a,new A.bw0(this.b),this.c,null)},
$S:z+31}
A.bw0.prototype={
$0(){var w=this.a,v=$.bzO()
if(w.e==null)B.S(B.Z(y.b))
w.gce().c_(v)},
$S:0}
A.b5G.prototype={
$0(){},
$S:0}
A.b5H.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b5I.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b5K.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.qW(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.b5(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.I(new A.b5J(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b5J.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b5L.prototype={
$0(){return B.aY(this.a,!1).eU()},
$S:0}
A.b5X.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ab(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b5Y.prototype={
$1(d){return new A.y3(x.B.a(d),this.a.a.r)},
$S:z+35}
A.azy.prototype={
$1(d){return d.e},
$S:z+36}
A.azz.prototype={
$2(d,e){return d+e},
$S:45}
A.azB.prototype={
$1(d){return d.c.length!==0},
$S:z+37}
A.azD.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+38}
A.azE.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aev(v.d,v.e)},
$S:0}
A.azg.prototype={
$1(d){return 0},
$S:1036}
A.azf.prototype={
$2(d,e){return B.eY(C.bX,this.a.ami(e),C.r,C.bl,null)},
$S:1037}
A.b00.prototype={
$1(d){return d.a},
$S:z+40}
A.b01.prototype={
$1(d){return d.b},
$S:z+41}
A.b02.prototype={
$1(d){return new A.k1(this.a.ch[d.a].a,d.b)},
$S:z+42}
A.b03.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mR||v===D.dR))t=1-t
return new A.k1(d,t*w.d)},
$S:z+43}
A.b04.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goE(),p=d.a
r.goE()
r=$.lG()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ag(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ag(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ag(v/1000,1)
t="K"}else{u=C.d.ag(v,r.akh(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o4(d,q.c.b.$2(p,new A.tR(u+t,s.e)))},
$S:z+44}
A.aWf.prototype={
$1(d){this.a.la(new A.a6D(d))},
$S:169}
A.aWg.prototype={
$1(d){this.a.la(new A.a6E(d))},
$S:43}
A.aWh.prototype={
$1(d){this.a.la(new A.a6F(d))},
$S:29}
A.aWi.prototype={
$0(){this.a.la(D.a2f)},
$S:0}
A.aWj.prototype={
$1(d){this.a.la(new A.NP())},
$S:48}
A.aWk.prototype={
$1(d){this.a.la(new A.a6I(d))},
$S:44}
A.aWl.prototype={
$0(){this.a.la(D.a2g)},
$S:0}
A.aWm.prototype={
$1(d){this.a.la(new A.NS(d))},
$S:90}
A.aWn.prototype={
$1(d){this.a.la(new A.a6C(d))},
$S:172}
A.aWo.prototype={
$1(d){this.a.la(new A.a6B(d))},
$S:173}
A.aWp.prototype={
$1(d){return this.a.la(new A.NN(d))},
$S:174}
A.aWq.prototype={
$1(d){return this.a.la(new A.a6G(d))},
$S:64}
A.aWr.prototype={
$1(d){return this.a.la(new A.NQ(d))},
$S:56}
A.bhS.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aRB(w==null?B.b([],x.t):w)},
$S:z+46}
A.bhQ.prototype={
$0(){var w=this.a
C.b.ab(w.cy)
w.db.ab(0)},
$S:0}
A.bhR.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fU(w,new A.bhP())
v=this.a
u=v.db
u.ab(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ab(q)
q.push(new A.Hh(w))},
$S:0}
A.bhP.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+11}
A.bhT.prototype={
$1(d){return new A.zJ(x.hf.a(d),this.a.a.r)},
$S:z+48}
A.aMj.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.bwM.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bIK(t?A.bDF(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tT(w,new A.yU(!0,A.bEw(),new A.bwL(v)))},
$S:z+50}
A.bwL.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bXE(A.bDF(d,e,f),w,A.c5D(d,e,f))},
$S:z+51}
A.bwJ.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j8(v,v,u==null?D.dx:u,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rP(C.d.j(d.b),w)},
$S:z+52}
A.aMl.prototype={
$1(d){return d.a.length!==0},
$S:z+81}
A.aMm.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.aMq.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+54}
A.aMo.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aMp.prototype={
$0(){this.a.aev(this.b,this.c)},
$S:0}
A.aMr.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+11}
A.azr.prototype={
$1(d){return d.gdt(0)},
$S:z+55}
A.azs.prototype={
$2(d,e){return d+e},
$S:45}
A.azv.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j0(v,B.ag(v).i("j0<1>")).aB(0,new A.azw(w,this.a/(u+1),this.c))},
$S:0}
A.azw.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+4}
A.azt.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+4}
A.azu.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aJv.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1038}
A.aCL.prototype={
$1(d){return d},
$S:1039};(function aliases(){var w=A.LE.prototype
w.a0q=w.ig
w.amB=w.aTi
w.amC=w.aeo
w=A.Uw.prototype
w.apd=w.l
w=A.LN.prototype
w.a0r=w.ig
w=A.GQ.prototype
w.a1a=w.Zl})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c9d","bXA",57)
var q
v(q=A.Uy.prototype,"gaFA","aFB",32)
v(q,"gaEy","Im",10)
v(q,"gaFj","Ix",10)
u(A.Uz.prototype,"gatd","ate",34)
t(A,"c8_",3,null,["$3"],["bUS"],58,0)
t(A,"c80",3,null,["$3"],["bUT"],59,0)
t(A,"c81",3,null,["$3"],["bUU"],60,0)
t(A,"c83",4,null,["$4"],["c8R"],61,0)
w(A,"c82","c8Q",62)
s(A,"bDZ","c8S",63)
t(A,"c7V",3,null,["$3"],["bXF"],64,0)
w(A,"a0K","cbh",65)
w(A,"awU","c8V",6)
t(A,"c7X",3,null,["$3"],["bYr"],66,0)
t(A,"c7Z",3,null,["$3"],["c2K"],67,0)
t(A,"c7W",3,null,["$3"],["bYq"],68,0)
t(A,"c7Y",3,null,["$3"],["c2J"],69,0)
w(A,"ciz","bYp",70)
w(A,"ciA","c2I",71)
r(A.Zj.prototype,"ga4T","ayQ",39)
u(A.X2.prototype,"gaA6","aA7",45)
t(A,"ca6",3,null,["$3"],["bYT"],72,0)
t(A,"ca5",3,null,["$3"],["bUV"],73,0)
w(A,"ca9","cbi",3)
t(A,"bPm",4,null,["$5$size","$4"],["bNM",function(d,e,f,g){return A.bNM(d,e,f,g,null)}],74,0)
s(A,"bEw","cbg",75)
s(A,"bPn","c7I",76)
s(A,"bPq","c8Y",77)
s(A,"bPp","c8U",5)
s(A,"bPo","c8T",5)
w(A,"ca8","bOY",79)
w(A,"ca7","bOX",80)
t(A,"a0Q",3,null,["$3"],["ca4"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.F,[A.a8c,A.am4,A.x5,A.Jb,A.aj9,A.xe,A.ahI,A.ane,A.JG,A.K5,A.ahG,A.IM,A.a2s,A.J6,A.amw,A.anQ,A.VM,A.Zv,A.UW,A.Vc,A.aol,A.akt,A.CD,A.aud,A.x9,A.LF,A.B1])
u(B.B,[A.vk,A.EM,A.bm,A.aiQ,A.aiG,A.aiI,A.aiJ,A.aiy,A.amg,A.aiM,A.aiK,A.azN,A.auh,A.azA,A.aiH,A.LN,A.a7g,A.tR,A.asE,A.asD,A.aix,A.amf,A.eE,A.amc,A.ame,A.aqK,A.an5,A.av0,A.amd,A.alN,A.amb,A.aze,A.bhM,A.azh,A.aiu,A.o4,A.am8,A.am9,A.w8,A.hy,A.anZ,A.ao1,A.aiD,A.aiS,A.aiE,A.ama,A.ao4,A.ao2,A.aug,A.asC,A.aMk,A.ao0,A.vR,A.a2O,A.aob,A.a2Y,A.b3x])
u(B.vg,[A.pO,A.on,A.qz,A.vV,A.wS,A.aC8,A.aDh,A.oo,A.Dc,A.oq])
u(B.oa,[A.aGZ,A.bx4,A.aH_,A.aH0,A.aH1,A.aHk,A.bwY,A.bwZ,A.byU,A.bx_,A.bwW,A.bwX,A.bwV,A.be7,A.be9,A.be4,A.bi2,A.bi4,A.bi6,A.bi8,A.aH8,A.aH7,A.aHf,A.aH6,A.bs1,A.aM5,A.bhs,A.bht,A.bhu,A.bhv,A.bhw,A.bhx,A.bhy,A.bhz,A.bhA,A.bhB,A.bhC,A.bw3,A.br8,A.b7B,A.b8D,A.b8E,A.bim,A.btl,A.b5S,A.b5V,A.b5W,A.bw1,A.b5Y,A.azy,A.azB,A.azg,A.b00,A.b01,A.b02,A.b03,A.b04,A.aWf,A.aWg,A.aWh,A.aWj,A.aWk,A.aWm,A.aWn,A.aWo,A.aWp,A.aWq,A.aWr,A.bhS,A.bhT,A.aMj,A.bwM,A.bwL,A.bwJ,A.aMl,A.aMm,A.azr,A.aCL])
u(B.IL,[A.rA,A.xb,A.azp,A.af9,A.Du,A.aGd,A.aM8,A.Oh])
t(A.yS,B.fM)
u(B.yj,[A.aGY,A.aGX,A.bec,A.be6,A.be8,A.be5,A.beb,A.be0,A.be1,A.be2,A.be3,A.aHi,A.aH9,A.aHa,A.aHb,A.aHc,A.aHd,A.aHe,A.aHh,A.aH4,A.aH5,A.blj,A.blk,A.bll,A.bs3,A.aM7,A.bhE,A.bhF,A.bw2,A.bhG,A.b5U,A.b5M,A.b5N,A.b5Q,A.b5R,A.bw0,A.b5G,A.b5H,A.b5I,A.b5K,A.b5J,A.b5L,A.b5X,A.azE,A.aWi,A.aWl,A.bhQ,A.bhR,A.aMo,A.aMp,A.azv])
t(A.vj,B.b9)
t(A.am5,B.v7)
u(B.yk,[A.bea,A.bi3,A.bi5,A.bi7,A.aHg,A.bli,A.bs2,A.aM6,A.bhD,A.br6,A.br7,A.b7A,A.b7C,A.b7D,A.b8F,A.b8G,A.bin,A.btm,A.b5T,A.b5O,A.b5P,A.azz,A.azD,A.azf,A.bhP,A.aMq,A.aMr,A.azs,A.azw,A.azt,A.azu,A.aJv])
u(B.yr,[A.yT,A.apz,A.a8d,A.aiC])
u(B.I,[A.BD,A.Su])
u(B.a_,[A.Uy,A.Zj])
u(B.Fc,[A.LJ,A.Pc])
u(B.uR,[A.Uz,A.X2])
t(A.a2o,A.aiQ)
t(A.ait,A.a2o)
t(A.a28,A.ait)
u(A.a28,[A.aiF,A.ao_])
t(A.o5,A.aiF)
t(A.fR,A.aiG)
t(A.it,A.aiI)
t(A.mR,A.aiJ)
t(A.a2f,A.aiy)
t(A.NT,A.amg)
u(A.NT,[A.aiL,A.ao3])
t(A.a2k,A.aiL)
t(A.a2l,A.aiM)
t(A.Dv,A.aiK)
u(A.azN,[A.LK,A.Pe])
t(A.afb,A.auh)
t(A.aiN,A.afb)
t(A.a2m,A.aiN)
u(B.b4,[A.y3,A.zJ])
t(A.uX,A.aiH)
t(A.LE,A.LN)
u(A.LE,[A.azC,A.aMn])
u(B.P7,[A.a2i,A.a8p])
u(B.L,[A.GQ,A.aiv])
u(A.GQ,[A.acj,A.acw])
t(A.qp,A.asE)
t(A.adK,A.asD)
t(A.ps,A.aix)
t(A.vm,A.amf)
t(A.yV,A.amc)
t(A.pP,A.ame)
t(A.R2,A.aqK)
t(A.na,A.an5)
t(A.nA,A.av0)
u(A.pP,[A.an4,A.av_])
t(A.kY,A.an4)
t(A.lo,A.av_)
t(A.a6A,A.amd)
u(A.a6A,[A.an3,A.auZ])
t(A.a7r,A.an3)
t(A.afz,A.auZ)
t(A.ND,A.alN)
t(A.vl,A.amb)
t(A.NM,A.vl)
t(A.adL,B.hc)
t(A.aiw,A.aiv)
t(A.Uw,A.aiw)
t(A.a29,A.Uw)
t(A.k1,A.aiu)
t(A.a6x,A.am8)
t(A.a6z,A.am9)
u(A.hy,[A.a6D,A.a6E,A.a6F,A.NO,A.NP,A.a6I,A.NR,A.NS,A.a6C,A.a6B,A.NN,A.a6G,A.a6H,A.NQ])
t(A.q3,A.ao_)
t(A.ef,A.anZ)
t(A.Pd,A.ao1)
t(A.a2h,A.aiD)
t(A.mS,A.aiS)
t(A.LI,A.aiE)
t(A.yU,A.ama)
t(A.Fn,A.ao3)
t(A.a8q,A.ao4)
t(A.anY,A.eE)
t(A.nd,A.anY)
t(A.qx,A.nd)
t(A.rP,A.ao2)
t(A.tT,A.aug)
t(A.Hh,A.asC)
t(A.zK,A.ao0)
t(A.zO,A.aob)
w(A.aiy,A.bm)
w(A.aiF,A.bm)
w(A.aiG,A.bm)
w(A.aiI,A.bm)
w(A.aiJ,A.bm)
w(A.aiK,A.bm)
w(A.aiL,A.bm)
w(A.aiM,A.bm)
w(A.aiN,A.bm)
w(A.aiH,A.bm)
w(A.ait,A.bm)
w(A.aix,A.bm)
w(A.alN,A.bm)
w(A.amb,A.bm)
w(A.amc,A.bm)
w(A.ame,A.bm)
w(A.amf,A.bm)
w(A.an4,A.bm)
w(A.an3,A.bm)
w(A.an5,A.bm)
w(A.aqK,A.bm)
w(A.asD,A.bm)
w(A.asE,A.bm)
w(A.auh,A.bm)
w(A.av_,A.bm)
w(A.auZ,A.bm)
w(A.av0,A.bm)
w(A.aiu,A.bm)
v(A.aiv,B.aG)
w(A.aiw,B.eb)
v(A.Uw,B.a5z)
w(A.aiQ,A.bm)
w(A.am8,A.bm)
w(A.am9,A.bm)
w(A.amg,A.bm)
w(A.aiD,A.bm)
w(A.aiE,A.bm)
w(A.aiS,A.bm)
w(A.ama,A.bm)
w(A.amd,A.bm)
w(A.anY,A.bm)
w(A.anZ,A.bm)
w(A.ao_,A.bm)
w(A.ao1,A.bm)
w(A.ao2,A.bm)
w(A.ao3,A.bm)
w(A.ao4,A.bm)
w(A.asC,A.bm)
w(A.aug,A.bm)
w(A.ao0,A.bm)
w(A.aob,A.bm)})()
B.btA(b.typeUniverse,JSON.parse('{"a8c":{"F":[],"c":[]},"EM":{"aH3":[]},"yS":{"fM":["bh<~>"],"fM.T":"bh<~>"},"vj":{"b9":[],"I":[],"c":[]},"Jb":{"F":[],"c":[]},"xe":{"F":[],"c":[]},"am5":{"a_":["vj"]},"am4":{"F":[],"c":[]},"x5":{"F":[],"c":[]},"aj9":{"F":[],"c":[]},"K5":{"F":[],"c":[]},"IM":{"F":[],"c":[]},"yT":{"b9":[],"I":[],"c":[]},"ahI":{"F":[],"c":[]},"ane":{"F":[],"c":[]},"apz":{"b9":[],"I":[],"c":[]},"JG":{"F":[],"c":[]},"ahG":{"F":[],"c":[]},"a2s":{"F":[],"c":[]},"J6":{"F":[],"c":[]},"x9":{"F":[],"c":[]},"BD":{"I":[],"c":[]},"a8d":{"b9":[],"I":[],"c":[]},"amw":{"F":[],"c":[]},"anQ":{"F":[],"c":[]},"VM":{"F":[],"c":[]},"Zv":{"F":[],"c":[]},"UW":{"F":[],"c":[]},"Vc":{"F":[],"c":[]},"aol":{"F":[],"c":[]},"akt":{"F":[],"c":[]},"CD":{"F":[],"c":[]},"aud":{"F":[],"c":[]},"aiC":{"b9":[],"I":[],"c":[]},"Uy":{"a_":["BD"]},"LJ":{"I":[],"c":[]},"Uz":{"a_":["LJ"]},"o5":{"bm":[]},"fR":{"bm":[]},"it":{"bm":[]},"mR":{"bm":[]},"Dv":{"bm":[]},"y3":{"b4":["o5"],"bb":["o5"],"bb.T":"o5","b4.T":"o5"},"a2f":{"bm":[]},"a2k":{"bm":[]},"a2l":{"bm":[]},"a2m":{"bm":[]},"uX":{"bm":[]},"a2i":{"aW":[],"c":[]},"acj":{"L":[],"M":[],"jC":[],"aV":[]},"pP":{"bm":[]},"na":{"bm":[]},"nA":{"bm":[]},"kY":{"bm":[]},"lo":{"bm":[]},"vl":{"bm":[]},"a28":{"bm":[]},"qp":{"bm":[]},"adK":{"bm":[]},"ps":{"bm":[]},"vm":{"bm":[]},"yV":{"bm":[]},"afb":{"bm":[]},"R2":{"bm":[]},"a7r":{"bm":[]},"afz":{"bm":[]},"ND":{"bm":[]},"NM":{"bm":[]},"LF":{"F":[],"c":[]},"Su":{"I":[],"c":[]},"Zj":{"a_":["Su"]},"k1":{"bm":[]},"adL":{"hc":[],"aW":[],"c":[]},"a29":{"eb":["L","hz"],"L":[],"aG":["L","hz"],"M":[],"aV":[],"aG.1":"hz","eb.1":"hz","aG.0":"L"},"B1":{"F":[],"c":[]},"a2o":{"bm":[]},"a6x":{"bm":[]},"NT":{"bm":[]},"a6z":{"bm":[]},"a6D":{"hy":[]},"a6E":{"hy":[]},"a6F":{"hy":[]},"NO":{"hy":[]},"NP":{"hy":[]},"a6I":{"hy":[]},"NR":{"hy":[]},"NS":{"hy":[]},"a6C":{"hy":[]},"a6B":{"hy":[]},"NN":{"hy":[]},"a6G":{"hy":[]},"a6H":{"hy":[]},"NQ":{"hy":[]},"GQ":{"L":[],"M":[],"jC":[],"aV":[]},"Pc":{"I":[],"c":[]},"X2":{"a_":["Pc"]},"q3":{"bm":[]},"ef":{"bm":[]},"mS":{"bm":[]},"nd":{"eE":[],"bm":[]},"qx":{"nd":[],"eE":[],"bm":[]},"rP":{"bm":[]},"tT":{"bm":[]},"Hh":{"bm":[]},"zJ":{"b4":["q3"],"bb":["q3"],"bb.T":"q3","b4.T":"q3"},"Pd":{"bm":[]},"a2h":{"bm":[]},"LI":{"bm":[]},"yU":{"bm":[]},"a6A":{"bm":[]},"Fn":{"bm":[]},"a8q":{"bm":[]},"zK":{"bm":[]},"a8p":{"aW":[],"c":[]},"acw":{"L":[],"M":[],"jC":[],"aV":[]},"zO":{"bm":[]}}'))
B.bNf(b.typeUniverse,JSON.parse('{"LE":1,"NT":1,"LN":1,"GQ":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("Dc"),e:w("bh<on>"),cn:w("bh<oo>"),aN:w("bh<oq>"),fM:w("bh<a3<h,@>?>"),c:w("bh<~>"),W:w("k1"),B:w("o5"),dB:w("fR"),T:w("uX"),fj:w("it"),G:w("mR"),bO:w("mS"),k:w("au"),cX:w("a2Y<G>"),dO:w("v3"),R:w("a6<h,@>"),j:w("hu"),bz:w("lQ<b5>"),f0:w("og"),E:w("bm"),F:w("yS"),aI:w("pO"),m:w("on"),X:w("oo"),P:w("lX"),D:w("vk"),a:w("aH3"),d:w("oq"),cw:w("eE"),L:w("hz"),o:w("dz<v,E>"),cm:w("kY"),dv:w("na"),M:w("D<o4>"),I:w("D<bHk>"),O:w("D<fR>"),Y:w("D<it>"),U:w("D<eE>"),K:w("D<a7g>"),u:w("D<ef>"),bC:w("D<vR>"),aA:w("D<u<eE>>"),v:w("D<eh>"),r:w("D<Hh>"),s:w("D<h>"),eg:w("D<tO>"),df:w("D<qx>"),p:w("D<c>"),n:w("D<G>"),t:w("D<v>"),eF:w("bo<a_<I>>"),Z:w("nd"),cz:w("ef"),hf:w("q3"),dj:w("zK"),fT:w("rP"),c_:w("ix<pe<bh<~>>>"),x:w("zO<fR>"),y:w("zO<ef>"),J:w("u<v>"),ef:w("vV"),b:w("a3<h,@>"),f:w("a3<@,@>"),gj:w("ad<G,G>"),w:w("kg"),aU:w("B"),Q:w("w8<o5>"),C:w("w8<q3>"),dc:w("eh"),eo:w("qe"),gJ:w("qf"),V:w("kr<lX>"),N:w("h"),A:w("nv"),bP:w("bE"),er:w("tO"),fB:w("wS"),dw:w("qx"),bY:w("tT"),cZ:w("qz"),gc:w("jd"),es:w("lo"),bN:w("nA"),l:w("c"),q:w("xu"),g4:w("im<G>"),cJ:w("C"),i:w("G"),z:w("@"),S:w("v"),bn:w("y3?"),f3:w("zJ?"),g:w("u<@>?"),h:w("a3<h,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("jd?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bv=new B.lJ(C.m,B.aw("lJ<E>"))
D.BC=new A.Du(0,"left")
D.mR=new A.Du(1,"top")
D.BD=new A.Du(2,"right")
D.dR=new A.Du(3,"bottom")
D.aAv=new A.qp(!1,A.bDZ(),22,null)
D.kB=new A.ps(16,null,D.aAv,!0)
D.aa2=new A.pP(C.I,null,2,null)
D.wj=new A.LI(!1,D.aa2,A.ca9(),!0)
D.a06=new A.azp(3,"spaceEvenly")
D.a0f=new B.y7(6,"dstIn")
D.XX=new B.aZ(3,3)
D.BG=new B.d7(D.XX,D.XX,C.a6,C.a6)
D.a0q=new B.bl(C.I,0,C.S,-1)
D.Cf=new A.a6z()
D.a2f=new A.NO()
D.a2g=new A.NR()
D.aSU=new A.adK()
D.a83=new B.bv(8e6)
D.anV=w([],B.aw("D<kY>"))
D.anW=w([],B.aw("D<lo>"))
D.Eq=new A.ND(D.anV,D.anW,!0)
D.a9H=new B.dy("Zeitraum",!1,null)
D.a9N=new B.dy("Konten (SKR 03)",!1,null)
D.xZ=new A.aGd(0,"center")
D.a9Y=new A.vj(null,null)
D.aT6=new A.yU(!0,A.bEw(),A.bPm())
D.Eu=new A.yU(!1,A.bEw(),A.bPm())
D.Ev=new A.yV(!1,!0,null,A.awU(),A.a0K(),!0,null,A.awU(),A.a0K())
D.aT7=new A.yV(!0,!0,null,A.awU(),A.a0K(),!0,null,A.awU(),A.a0K())
D.a4E=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.l)
D.a4o=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.l)
D.a4O=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.l)
D.a4I=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.l)
D.a44=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.l)
D.a43=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.a5c=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.l)
D.a4x=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.l)
D.a5f=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.l)
D.a59=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.l)
D.aui=new B.dz([50,D.a4E,100,D.a4o,200,D.a4O,300,D.a4I,400,D.a44,500,D.a43,600,D.a5c,700,D.a4x,800,D.a5f,900,D.a59],x.o)
D.dx=new B.rW(D.aui,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.ajV=w([8,4],x.t)
D.aa0=new A.pP(D.dx,null,0.4,D.ajV)
D.aa1=new A.pP(C.a7,null,0.5,null)
D.fS=new A.eE(0/0,0/0)
D.aAx=new A.qp(!0,A.bDZ(),44,null)
D.mS=new A.ps(16,null,D.aAx,!0)
D.aAw=new A.qp(!0,A.bDZ(),30,null)
D.mT=new A.ps(16,null,D.aAw,!0)
D.aa3=new A.vm(!1,D.mS,D.mT,D.mS,D.mT)
D.aT8=new A.vm(!0,D.mS,D.mT,D.mS,D.mT)
D.ft=new A.rA(0,"hinaus")
D.lh=new A.rA(1,"herein")
D.aac=new A.rA(2,"weder")
D.aJY=new B.ae("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.aaA=new B.e8(D.aJY,null,null)
D.ED=new A.Oh(0,"left")
D.aaK=new A.Oh(1,"center")
D.EE=new A.Oh(2,"right")
D.aaO=new B.a4(57495,"MaterialIcons",null,!1)
D.ab2=new B.a4(58040,"MaterialIcons",null,!0)
D.yg=new B.a4(58927,"MaterialIcons",null,!1)
D.abF=new B.a4(59005,"MaterialIcons",null,!0)
D.abG=new B.a4(59007,"MaterialIcons",null,!0)
D.abH=new B.a4(59011,"MaterialIcons",null,!1)
D.acN=new B.a4(62589,"MaterialIcons",null,!1)
D.abZ=new B.a4(61349,"MaterialIcons",null,!1)
D.adI=new B.az(D.abZ,20,C.h,null,null)
D.ac5=new B.a4(61487,"MaterialIcons",null,!1)
D.adK=new B.az(D.ac5,18,null,null,null)
D.adL=new B.az(D.yg,18,null,null,null)
D.ae4=new B.az(C.o9,14,C.a0,null,null)
D.ae9=new B.az(C.i1,null,C.h,null,null)
D.aea=new B.az(C.lk,null,C.n,null,null)
D.aeB=new B.az(C.og,16,null,null,null)
D.aeH=new B.az(C.yr,16,null,null,null)
D.aeK=new B.az(F.yd,null,C.a0,null,null)
D.aeV=new B.az(F.Ff,16,null,null,null)
D.af0=new B.az(D.yg,16,null,null,null)
D.ahe=new A.a8d(null)
D.aTd=new A.aM8(0,"horizontal")
D.yC=new A.zK(0,0,0,0,!1)
D.FS=new A.Pd(0.5)
D.Cl=new A.a8q()
D.ahr=new A.Fn(D.Cl,A.bPq(),10,A.bPn(),!0,A.bPp(),A.bPo(),!1,null,null,null)
D.aTf=new A.Fn(D.Cl,A.bPq(),10,A.bPn(),!0,A.bPp(),A.bPo(),!0,null,null,null)
D.aiT=w([4,3],x.t)
D.ayG=new B.aK("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ayv=new B.aK("receivables","Forderungen (kurzfristig)")
D.ayj=new B.aK("inventory_value","Vorr\xe4te (Warenbestand)")
D.ayh=new B.aK("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.ay4=new B.aK("fixed_assets","Anlageverm\xf6gen")
D.ayb=new B.aK("current_liabilities","Kurzfristige Verbindlichkeiten")
D.ayC=new B.aK("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ayu=new B.aK("equity","Eigenkapital")
D.pU=w([D.ayG,D.ayv,D.ayj,D.ayh,D.ay4,D.ayb,D.ayC,D.ayu],B.aw("D<+(h,h)>"))
D.aTi=w([],x.M)
D.anI=w([],x.O)
D.anJ=w([],x.Y)
D.anK=w([],B.aw("D<mR>"))
D.anL=w([],B.aw("D<mS>"))
D.aTj=w([],x.U)
D.aTk=w([],x.u)
D.anM=w([],x.r)
D.auY={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TC={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zi=new B.a6(D.TC,[0,0,0,0,0,0,0,C.bq],B.aw("a6<h,B>"))
D.auV={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.auc=new B.a6(D.auV,[0,0,0,0],B.aw("a6<h,v>"))
D.avc={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.arM=new B.a6(D.avc,[0,0,0,0,null,null,null,null],B.aw("a6<h,v?>"))
D.arF=new B.a6(D.auY,[D.zi,D.zi,D.zi,C.bq,C.bq,C.bq,D.auc,D.arM],x.R)
D.arZ=new B.a6(D.TC,[0,0,0,0,0,0,0,C.ca],x.R)
D.auZ={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.as0=new B.a6(D.auZ,[8500,1200,3400,300,22e3,4200,9000,22200],B.aw("a6<h,G>"))
D.avm={total:0,rows:1}
D.as3=new B.a6(D.avm,[0,C.ca],x.R)
D.auU={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aud=new B.a6(D.auU,[0,0,0,0,0,0,0,C.ca],x.R)
D.avq={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aue=new B.a6(D.avq,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.aw("a6<h,h>"))
D.a5l=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.l)
D.a5t=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.l)
D.a47=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.l)
D.a4A=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.l)
D.a4K=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.l)
D.a5J=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a3T=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.l)
D.a4C=new B.E(1,0,0.592156862745098,0.6549019607843137,C.l)
D.a4N=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.l)
D.a5a=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.l)
D.auj=new B.dz([50,D.a5l,100,D.a5t,200,D.a47,300,D.a4A,400,D.a4K,500,D.a5J,600,D.a3T,700,D.a4C,800,D.a4N,900,D.a5a],x.o)
D.Tn=new B.rW(D.auj,1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a8V=new B.aj(32,32,32,32)
D.awl=new B.ab(D.a8V,C.bA,null)
D.awt=new B.ab(C.ak,C.bA,null)
D.anX=w([],B.aw("D<na>"))
D.anY=w([],B.aw("D<nA>"))
D.XZ=new A.R2(D.anX,D.anY)
D.azt=new B.fi("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.azv=new B.fi("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.azy=new B.fi("Automaten-Business","Umsatz je Automat",null,null)
D.azB=new B.fi("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.azD=new B.fi("Top","Meistverkaufte Produkte",null,null)
D.azG=new B.fi("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.azH=new B.fi("Kennzahlen","Rentabilit\xe4t",null,null)
D.YD=new B.tx(C.L,C.v,0)
D.aId=new B.ae("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aCi=new B.dL(D.aId,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKp=new B.ae('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aCl=new B.dL(D.aKp,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aIs=new B.ae("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aCm=new B.dL(D.aIs,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKi=new B.ae("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aCo=new B.dL(D.aKi,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aJL=new B.ae("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aCp=new B.dL(D.aJL,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aJI=new B.ae("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aCM=new B.dL(D.aJI,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aTu=new B.U(!0,C.I,null,null,null,null,14,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIo=new B.ae("Demo",null,null,null,null,null,null,null,null,null)
D.aIB=new B.ae("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aJs=new B.ae("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aJz=new B.ae("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aJP=new B.ae("sevDesk",null,null,null,null,null,null,null,null,null)
D.aKB=new B.ae("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZU=new A.af9(0,"auto")
D.aLf=new A.af9(1,"top")
D.aPG=new A.x9("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aPH=new A.x9("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Be=new A.xb(0,"alle")
D.a_k=new A.xb(1,"aufwand")
D.a_l=new A.xb(2,"erloes")
D.a_m=new A.xb(3,"privat")
D.aQA=new A.xe('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.n,C.lk,null)
D.acZ=new B.a4(984570,"MaterialIcons",null,!1)
D.aQB=new A.xe("Keine Buchung passt zu dieser Auswahl.",C.n,D.acZ,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cj2","bTE",()=>B.j2(new A.bwY(),x.D))
w($,"cj3","a1h",()=>B.j2(new A.bwZ(),x.a))
w($,"ck3","qZ",()=>B.bCD(new A.byU(),x.P))
w($,"cj4","bzQ",()=>C.aG.$1$1(new A.bx_(),x.d))
w($,"cj0","bzP",()=>C.aG.$1$1(new A.bwW(),x.m))
w($,"cj1","bGd",()=>C.aG.$1$1(new A.bwX(),x.X))
w($,"cj_","bzO",()=>C.aG.$1$1(new A.bwV(),x.h))
w($,"ciZ","bzN",()=>B.b0R(A.c9d(),x.F,x.c))
w($,"cc4","bzk",()=>new A.aze())
v($,"cfq","lG",()=>new A.b3x())})()};
(a=>{a["J24nq3jLS2Gp3gDJSD4RCFTJjKg="]=a.current})($__dart_deferred_initializers__);