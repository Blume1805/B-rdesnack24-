((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nq(d,e,f,g,h){return new A.a5B(f,g,d,h,e,null)},
a5B:function a5B(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uz:function uz(d){this.a=d},
Dw:function Dw(d){this.a=d},
bOn(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SI
w=x.f
v=x.N
u=x.z
t=A.aDa(B.e7(w.a(e.h(a0,"current")),v,u))
s=A.aDa(B.e7(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDa(B.e7(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cF
p=J.d2(p,new A.aCT(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cF
o=J.d2(o,new A.aCU(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cF
q=J.d2(q,new A.aCV(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.e7(w.a(e.h(a0,"customer")),v,u)
m=B.bB(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oK(n.h(0,"app_gross"))
k=B.bB(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oK(n.h(0,"avg_basket"))
u=B.e7(w.a(e.h(a0,"derived")),v,u)
v=A.oK(u.h(0,"gross_margin_pct"))
e=A.oK(u.h(0,"net_margin_pct"))
w=A.oK(u.h(0,"ebitda_margin_pct"))
j=A.oK(u.h(0,"cashflow_operating"))
i=A.bo_(u.h(0,"revenue_growth_yoy_pct"))
h=A.bo_(u.h(0,"revenue_growth_mom_pct"))
g=A.bo_(u.h(0,"result_growth_yoy_pct"))
u=A.bo_(u.h(0,"result_growth_mom_pct"))
f=B.bB(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nT(t,s,r,p,o,q,new A.aym(m,l,k,n),new A.azt(v,e,w,j,i,h,g,u),f)},
oK(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jY(J.al(d))
return w==null?0:w},
bo_(d){if(d==null)return null
if(typeof d=="number")return d
return B.jY(J.al(d))},
q1:function q1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vd:function vd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
w5:function w5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aym:function aym(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azt:function azt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nT:function nT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCT:function aCT(){},
aCU:function aCU(){},
aCV:function aCV(){},
aDa(d){var w=J.Y(d),v=A.tS(w.h(d,"revenue_net_7")),u=A.tS(w.h(d,"revenue_net_19")),t=A.tS(w.h(d,"revenue_net")),s=A.tS(w.h(d,"expense_net")),r=A.tS(w.h(d,"result_net")),q=A.tS(w.h(d,"vat_collected")),p=A.tS(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cF
w=J.d2(w,new A.aDb(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.nU(v,u,t,s,r,q,p,w)},
tS(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jY(J.al(d))
return w==null?0:w},
C8:function C8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nU:function nU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDb:function aDb(){},
bOm(d){return new A.y7(d,new B.ih(x.c_),C.dB)},
boN:function boN(){},
boO:function boO(){},
bqC:function bqC(){},
boP:function boP(){},
boM:function boM(){},
boL:function boL(){},
y7:function y7(d,e,f){this.r=d
this.a=e
this.f=f},
aCS:function aCS(d,e,f){this.a=d
this.b=e
this.c=f},
aCR:function aCR(d,e,f){this.a=d
this.b=e
this.c=f},
bOo(){return new A.y8(null)},
aka(d,e,f,g,h){return new A.ak9(e,h,g,f,d,null)},
y8:function y8(d){this.a=d},
aD9:function aD9(d){this.a=d},
aD1:function aD1(d,e,f){this.a=d
this.b=e
this.c=f},
aD2:function aD2(d,e,f){this.a=d
this.b=e
this.c=f},
aD3:function aD3(d){this.a=d},
aD0:function aD0(){},
aD4:function aD4(d){this.a=d},
aD5:function aD5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD8:function aD8(){},
aD7:function aD7(){},
aD6:function aD6(){},
aD_:function aD_(d,e){this.a=d
this.b=e},
aCY:function aCY(d){this.a=d},
aCZ:function aCZ(d){this.a=d},
af7:function af7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ak9:function ak9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aml:function aml(d,e){this.e=d
this.a=e},
ben:function ben(d){this.a=d},
beo:function beo(d){this.a=d},
bep:function bep(d,e,f){this.a=d
this.b=e
this.c=f},
bem:function bem(){},
Ih:function Ih(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IL:function IL(d,e){this.c=d
this.a=e},
bjS:function bjS(d){this.a=d},
af5:function af5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hp:function Hp(d,e){this.c=d
this.a=e},
bvi(d,e,f,g,h){var w=null
return B.jE(w,w,!0,w,new A.bnV(h,g,e,f),d,w,!0,!0,x.H)},
jx(d,e,f,g,h,i,j,k,l,m,n){return new A.akG(g,n,i,e,d,m,f,k,l,j,null)},
atd(d,e,f){var w=0,v=B.r(x.H)
var $async$atd=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jE(null,null,!0,null,new A.bnT(f,e,e.aK(0,$.cb(),x.A)),d,null,!0,!0,x.H),$async$atd)
case 2:return B.p(null,v)}})
return B.q($async$atd,v)},
a5C:function a5C(d){this.a=d},
aI0:function aI0(){},
aI_:function aI_(){},
aHZ:function aHZ(){},
HJ:function HJ(d,e){this.c=d
this.a=e},
bbW:function bbW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bbL:function bbL(){},
bbM:function bbM(){},
bbN:function bbN(){},
bbO:function bbO(){},
bbP:function bbP(){},
bbQ:function bbQ(){},
bbR:function bbR(){},
bbS:function bbS(){},
bbT:function bbT(d){this.a=d},
bbU:function bbU(d){this.a=d},
bbV:function bbV(d){this.a=d},
bbX:function bbX(d,e){this.a=d
this.b=e},
bbY:function bbY(d,e){this.a=d
this.b=e},
bnV:function bnV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnU:function bnU(d){this.a=d},
ajt:function ajt(d){this.a=d},
akG:function akG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbZ:function bbZ(d,e){this.a=d
this.b=e},
TL:function TL(d,e,f){this.c=d
this.d=e
this.a=f},
Xd:function Xd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bje:function bje(){},
bjf:function bjf(){},
bjg:function bjg(d){this.a=d},
T0:function T0(d,e,f){this.c=d
this.d=e
this.a=f},
b37:function b37(){},
b39:function b39(d){this.a=d},
b3a:function b3a(d){this.a=d},
b38:function b38(){},
Tb:function Tb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3V:function b3V(){},
b3W:function b3W(){},
b3X:function b3X(){},
b3Y:function b3Y(d){this.a=d},
al9:function al9(d,e){this.c=d
this.a=e},
bcs:function bcs(){},
bct:function bct(){},
ahy:function ahy(d,e){this.c=d
this.a=e},
BE:function BE(d,e,f){this.c=d
this.d=e
this.a=f},
aqH:function aqH(d,e){this.c=d
this.a=e},
bl8:function bl8(){},
bl9:function bl9(){},
wn:function wn(d,e){this.c=d
this.a=e},
afU:function afU(d,e){this.e=d
this.a=e},
b1C:function b1C(){},
b1B:function b1B(){},
b1A:function b1A(d,e,f){this.a=d
this.b=e
this.c=f},
b1w:function b1w(d,e){this.a=d
this.b=e},
b1D:function b1D(d){this.a=d},
b1E:function b1E(d){this.a=d},
b1x:function b1x(){},
b1y:function b1y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1z:function b1z(d,e,f){this.a=d
this.b=e
this.c=f},
bnT:function bnT(d,e,f){this.a=d
this.b=e
this.c=f},
bnS:function bnS(d){this.a=d},
AL:function AL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SF:function SF(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1r:function b1r(d){this.a=d},
b1s:function b1s(d){this.a=d},
b1u:function b1u(d,e){this.a=d
this.b=e},
b1t:function b1t(d,e){this.a=d
this.b=e},
b1v:function b1v(d){this.a=d},
bb:function bb(){},
byB(d){return new A.K9(d,C.au,C.dr,null,null)},
K9:function K9(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SG:function SG(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cR$=g
_.c=_.a=null},
b1F:function b1F(d,e){this.a=d
this.b=e},
b1G:function b1G(d){this.a=d},
avG(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ajB:f,p=a0==null?16:a0,o=d==null?D.a_c:d,n=g==null,m=n?A.brN(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xp:a3
n=n?A.brN(r,r,r,r,r,r,r,r):g
w=j==null?D.De:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.nB(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bc,s,w,i,n)},
avN(d,e,f,g,h){var w=d==null?D.ajC:d,v=e==null?2:e,u=g==null?C.lc:g
return new A.fx(h,f===!0,w,v,u)},
bLH(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avN(A.kj(d.c,e.c,f,A.bZt(),x.fj),B.aa(d.d,e.d,f),!1,A.kj(d.e,e.e,f,A.Zk(),x.S),w)},
a_I(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SQ
else w=h
v=m==null
u=v?8:m
t=$.lk()
s=t.aW0(f,v?8:m)
t=t.aW1(g,v?8:m)
v=d==null?A.byz(r,r,r,r,r):d
return new A.ib(q,l,w,j,u,s,e,t,v,k==null?D.ajD:k)},
bLI(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.aa(d.e,e.e,f),q=B.mq(d.f,e.f,f),p=A.kj(d.r,e.r,f,A.Zk(),x.S),o=B.bV(d.w,e.w,f),n=B.aa(d.a,e.a,f),m=B.aa(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aa(w.b,v.b,f)
t=B.aa(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_I(A.byz(v,u,null,!1,t),p,q,o,s,n,null,A.kj(d.y,e.y,f,A.bZu(),x.G),m,r)},
bLJ(d,e,f){var w,v,u=B.aa(d.a,e.a,f)
u.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mo(u,w,v,B.bV(d.d,e.d,f))},
byz(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dh
else w=d
return new A.a_E(g===!0,v,u,w,f)},
brN(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_K(4,C.hG,16,D.xg,0,120,A.bZw(),!1,!1,D.Zf,0,C.A,A.bZv())
else w=k
v=j==null?C.kK:j
return new A.a_J(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c_f(d,e,f,g){var w=null,v=B.iU(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cp(C.d.j(f.b),v)},
c_e(d){return A.axN(D.dh,15)},
nB:function nB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avF:function avF(d,e){this.a=d
this.b=e},
fx:function fx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avO:function avO(){},
avP:function avP(){},
ib:function ib(d,e,f,g,h,i,j,k,l,m){var _=this
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
mo:function mo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_E:function a_E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_J:function a_J(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acz:function acz(d,e){this.a=d
this.b=e},
a_K:function a_K(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cp:function Cp(d,e){this.a=d
this.b=e},
Ka:function Ka(d){this.a=d},
a_L:function a_L(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xj:function xj(d,e){this.a=d
this.b=e},
afS:function afS(){},
afX:function afX(){},
afY:function afY(){},
ag_:function ag_(){},
ag0:function ag0(){},
ag1:function ag1(){},
ag2:function ag2(){},
ag3:function ag3(){},
ag4:function ag4(){},
avQ:function avQ(d){this.a=d},
avR:function avR(){},
ub:function ub(d,e,f){this.a=d
this.b=e
this.c=f},
afZ:function afZ(){},
avS:function avS(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avT:function avT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avU:function avU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4E:function a4E(d){this.b=d},
a_H:function a_H(d,e,f){this.d=d
this.e=e
this.a=f},
a9J:function a9J(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.hZ=e
_.cV=f
_.fU=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bz=_.aE=_.ac=_.an=$
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
c_g(d,e){var w=null
return new A.QI(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
avz(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aa(w.c,v.c,f)
u.toString
return new A.oW(t,e.b,new A.pQ(v.a,v.b,u,B.aa(w.d,v.d,f)),!0)},
bzX(d,e,f){var w=A.avz(d.b,e.b,f),v=A.avz(d.d,e.d,f),u=A.avz(d.e,e.e,f)
return new A.uB(e.a,w,A.avz(d.c,e.c,f),v,u)},
bOq(d,e,f){var w,v
if(d.k(0,D.fI))return e
if(e.k(0,D.fI))return d
w=B.aa(d.a,e.a,f)
w.toString
v=B.aa(d.b,e.b,f)
v.toString
return new A.et(w,v)},
bzV(d,e,f){return new A.ya(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c1D(d){return!0},
c_j(d){return D.a7R},
bzW(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.ph(w,f,g,e)},
bBR(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZp(),x.dv)
v.toString
w=A.kj(d.b,e.b,f,A.bZr(),x.bN)
w.toString
return new A.Ph(v,w)},
bPb(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.mH(t,w,v,u)},
bUk(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.n7(t,w,v,u)},
bPa(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pb(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bP8(B.brE(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Zk(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kE(r,e.f,e.r,t,e.x,u,v,w,s)},
bUj(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pb(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bUh(B.brE(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Zk(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l2(r,e.f,e.r,t,e.x,u,v,w,s)},
bP8(d,e,f,g,h,i){return new A.a4P(f,!1,g,i,d,e)},
bP9(d){return C.d.am(d.e,1)},
bUh(d,e,f,g,h,i){return new A.acZ(f,!1,g,i,d,e)},
bUi(d){return C.d.am(d.e,1)},
bzS(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZo(),x.cm)
v.toString
w=A.kj(d.b,e.b,f,A.bZq(),x.es)
w.toString
return new A.M3(v,w,!0)},
bOp(d,e,f){return new A.Me(d,e==null?4:e,f)},
a_x:function a_x(){},
Co:function Co(d,e){this.a=d
this.b=e},
te:function te(d,e){this.r=d
this.w=e},
pQ:function pQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab7:function ab7(){},
oW:function oW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uB:function uB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
et:function et(d,e){this.a=d
this.b=e},
ya:function ya(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ph:function ph(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acB:function acB(){},
Ph:function Ph(d,e){this.a=d
this.b=e},
mH:function mH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n7:function n7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kE:function kE(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
l2:function l2(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a4P:function a4P(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acZ:function acZ(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
M3:function M3(d,e,f){this.a=d
this.b=e
this.c=f},
uA:function uA(){},
Me:function Me(d,e,f){this.a=d
this.b=e
this.c=f},
afN:function afN(){},
afR:function afR(){},
aiT:function aiT(){},
aj8:function aj8(){},
aj9:function aj9(){},
ajb:function ajb(){},
ajc:function ajc(){},
ak_:function ak_(){},
ajZ:function ajZ(){},
ak0:function ak0(){},
anq:function anq(){},
apa:function apa(){},
apb:function apb(){},
aqL:function aqL(){},
arn:function arn(){},
arm:function arm(){},
aro:function aro(){},
avv:function avv(){},
K3:function K3(){},
K4:function K4(d,e,f){this.c=d
this.d=e
this.a=f},
avx:function avx(d){this.a=d},
avw:function avw(d){this.a=d},
QI:function QI(d,e,f){this.c=d
this.e=e
this.a=f},
X2:function X2(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bSS(d,e,f){var w=B.ab(f),v=w.i("a9<1,jG>")
v=B.P(new B.a9(f,new A.aX4(),v),v.i("av.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aX5(),w),w.i("av.E"))
return new A.ab8(e,d,v,w,null)},
bLE(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5s(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tc(v,C.at,C.v,new B.ke(1),v,v,v,v,C.bu,v)
u=new A.a_y(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aH(x.v))
u.bj()
return u},
ab8:function ab8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aX4:function aX4(){},
aX5:function aX5(){},
a_y:function a_y(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VG$=h
_.aRL$=i
_.dk$=j
_.ag$=k
_.dN$=l
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
bc4:function bc4(d,e){this.a=d
this.b=e},
avy:function avy(){},
jG:function jG(d,e){this.a=d
this.b=e},
nA:function nA(d,e){this.a=d
this.b=e},
afO:function afO(){},
afP:function afP(){},
afQ:function afQ(){},
SD:function SD(){},
Ac:function Ac(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aX6:function aX6(d){this.a=d},
aX7:function aX7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aX8:function aX8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3Z(d,e){var w=d==null?B.dc(C.B,1):d
return new A.a3Y(e!==!1,w)},
a_N:function a_N(){},
a3Y:function a3Y(d,e){this.a=d
this.b=e},
Ml:function Ml(){},
a4_:function a4_(){},
aw2:function aw2(){},
aCj:function aCj(d,e){this.a=d
this.b=e},
ag7:function ag7(){},
aj5:function aj5(){},
aj6:function aj6(){},
ajd:function ajd(){},
Kd:function Kd(){},
vp:function vp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hg:function hg(){},
a43:function a43(d){this.a=d},
a44:function a44(d){this.a=d},
a45:function a45(d){this.a=d},
Mg:function Mg(){},
Mh:function Mh(){},
a48:function a48(d){this.a=d},
Mj:function Mj(){},
Mk:function Mk(d){this.a=d},
a42:function a42(d){this.a=d},
a41:function a41(d){this.a=d},
Mf:function Mf(d){this.a=d},
a46:function a46(d){this.a=d},
a47:function a47(d){this.a=d},
Mi:function Mi(d){this.a=d},
Fw:function Fw(){},
aSo:function aSo(d){this.a=d},
aSp:function aSp(d){this.a=d},
aSq:function aSq(d){this.a=d},
aSr:function aSr(d){this.a=d},
aSs:function aSs(d){this.a=d},
aSt:function aSt(d){this.a=d},
aSu:function aSu(d){this.a=d},
aSv:function aSv(d){this.a=d},
aSw:function aSw(d){this.a=d},
aSx:function aSx(d){this.a=d},
aSy:function aSy(d){this.a=d},
aSz:function aSz(d){this.a=d},
aSA:function aSA(d){this.a=d},
NE:function NE(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UU:function UU(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cR$=h
_.c=_.a=null},
bc9:function bc9(d,e){this.a=d
this.b=e},
bc7:function bc7(d){this.a=d},
bc8:function bc8(d,e){this.a=d
this.b=e},
bc6:function bc6(){},
bca:function bca(d){this.a=d},
bt3(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.pu(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SQ:u
else w=g
v=f==null?A.avE(!1,u,0,u,!1,D.vG):f
w=new A.e6(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avE(!1,u,0,u,!1,D.vG):d,j,a0,i,s,!1,p)
w.aq9(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bPG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aa(d.x,e.x,f)
m.toString
w=A.byA(d.ay,e.ay,f)
v=A.byA(d.ch,e.ch,f)
u=B.aa(d.as,e.as,f)
u.toString
t=e.CW
s=A.kj(d.cy,e.cy,f,A.Zk(),x.S)
r=B.X(d.r,e.r,f)
q=B.r3(d.w,e.w,f)
p=A.kj(d.a,e.a,f,A.bZn(),x.cw)
p.toString
o=B.bCk(d.db,e.db,f)
o.toString
n=B.aa(d.dy.a,e.dy.a,f)
n.toString
return A.aIf(v,m,w,r,e.z,s,new A.y9(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NF(n),!1,u,o,!0,e.cx,p)},
avE(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
else w=e
return new A.a_G(h,w,g,i,f,!1)},
byA(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r3(v.b,u.b,f),r=B.aa(v.c,u.c,f)
r.toString
r=A.bzW(t,A.kj(v.d,u.d,f,A.Zk(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r3(d.c,e.c,f)
v=B.aa(d.e,e.e,f)
v.toString
return A.avE(!1,s,v,u,e.a,new A.K8(!1,r,w.c,!0))},
bLL(d,e,f){var w=B.X(d.c,e.c,f),v=B.r3(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
return new A.mp(e.a,e.b,w,v)},
c1E(d){return!0},
bv6(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kM)return A.bvR(w.a,A.bsI(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dh:w},
bX1(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kM)w=A.bvR(v.a,A.bsI(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dh}return A.axN(w,40)},
bEO(d,e,f,g,h){var w,v=A.bv6(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kM)w=A.bvR(u.a,A.bsI(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dh}u=A.axN(w,40)
return new A.Me(v,h==null?4:h,u)},
c1C(d,e){return!0},
bZa(d,e){return Math.abs(d.a-e.a)},
c_m(d,e){var w=J.d2(e,new A.boB(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c_i(d,e){return-1/0},
c_h(d,e){return d.a[e].b},
bG_(d){var w=J.d2(d,new A.boy(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bFZ(d){return A.axN(D.dh,15)},
pu:function pu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e6:function e6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aIg:function aIg(){},
NF:function NF(d){this.a=d},
a_G:function a_G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mp:function mp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
K8:function K8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y9:function y9(d,e,f){this.a=d
this.b=e
this.c=f},
aI1:function aI1(d,e){this.a=d
this.b=e},
a40:function a40(){},
Eb:function Eb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
boB:function boB(d){this.a=d},
boA:function boA(d){this.a=d},
a5Q:function a5Q(){},
boy:function boy(){},
mM:function mM(){},
q_:function q_(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rj:function rj(d,e){this.a=d
this.b=e},
tf:function tf(d,e){this.a=d
this.b=e},
FX:function FX(d){this.a=d},
NG:function NG(d){this.a=d},
yT:function yT(d,e){this.a=d
this.b=e},
afV:function afV(){},
afW:function afW(){},
ag8:function ag8(){},
aj7:function aj7(){},
aja:function aja(){},
akN:function akN(){},
akO:function akO(){},
akP:function akP(){},
akR:function akR(){},
akS:function akS(){},
akT:function akT(){},
akU:function akU(){},
ap9:function ap9(){},
aqK:function aqK(){},
aIh:function aIh(d){this.a=d},
aIi:function aIi(){},
aIj:function aIj(){},
yU:function yU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akQ:function akQ(){},
aIk:function aIk(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIn:function aIn(){},
aIl:function aIl(d,e,f){this.a=d
this.b=e
this.c=f},
aIm:function aIm(d,e,f){this.a=d
this.b=e
this.c=f},
aIo:function aIo(){},
v7:function v7(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5P:function a5P(d,e,f){this.d=d
this.e=e
this.a=f},
a9W:function a9W(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.hZ=e
_.cV=f
_.fU=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bz=_.aE=_.ac=_.an=$
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
brM(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bz(o.length,0,!1,x.i),m=B.ab(o),l=new B.a9(o,new A.avH(),m.i("a9<1,M>")).kl(0,new A.avI()),k=e-l,j=new A.avL(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdn(0)/2
s=u===o.length-1?0:w
v+=t.gdn(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdn(0)/2
s=u===o.length-1?0:w
v+=t.gdn(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdn(0)/2
s=u===o.length-1?0:w
v+=t.gdn(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).ar(0,new A.avJ(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).ar(0,new A.avK(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avH:function avH(){},
avI:function avI(){},
avL:function avL(d,e,f){this.a=d
this.b=e
this.c=f},
avM:function avM(d,e,f){this.a=d
this.b=e
this.c=f},
avJ:function avJ(d,e,f){this.a=d
this.b=e
this.c=f},
avK:function avK(d,e,f){this.a=d
this.b=e
this.c=f},
bsI(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iK(w,B.ab(w).i("iK<1>")).ar(0,new A.aFo(v,d))
else throw B.e(B.bF('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFo:function aFo(d,e){this.a=d
this.b=e},
ayX(d,e){var w,v
if(e!=null){w=B.ab(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.ayY(),w),w.i("av.E"))
return A.c_a(d,new A.a0k(v,x.cX))}else return d},
ayY:function ayY(){},
bTr(d,e){var w=!0
if(d!==C.eX)if(!(d===C.at&&e===C.v))w=d===C.ih&&e===C.aW
if(w)return D.Ds
else{w=!0
if(d!==C.hn)if(!(d===C.ih&&e===C.v))w=d===C.at&&e===C.aW
if(w)return D.Dt
else return D.a8t}},
ML:function ML(d,e){this.a=d
this.b=e},
a0a:function a0a(d,e){this.a=d
this.b=e},
yX:function yX(d,e){this.a=d
this.$ti=e},
al0:function al0(){},
c_a(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.ah().r)
for(w=B.b([],x.C),v=new B.Ny(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.V(B.fo('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Nx(v,s)
v.CL()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CL()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.Jz(d.aRH(r,p,p+n,!0),C.p,null)
t.push(q)
m=l.d
if(m!=null)q.hE(m)}p+=n
o=!o}}return l},
a0k:function a0k(d,e){this.a=d
this.b=0
this.$ti=e},
b_B:function b_B(){},
PB:function PB(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.dq=f
_.cP=_.D=null
_.eX=g
_.D$=h
_.dy=i
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aSJ:function aSJ(d){this.a=d},
a3U:function a3U(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bsw(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fI))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bLO(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geg(v)===0){v=d.a.a
if(v.geg(v)===0){v=d.b.a
if(v.geg(v)===0){v=d.c.a
v=v.geg(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axN(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNq()*w),C.d.b0(d.gFL()*w),C.d.b0(d.gJV()*w))},
bzU(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bsx(d){var w=d.a,v=w?A.aX3(d.b):0,u=w?A.aX3(d.c):0,t=w?A.aX3(d.d):0
return new B.aj(v,u,t,w?A.aX3(d.e):0)},
bQV(d){var w
if(d.c===0){d.seT(null)
w=B.bZ(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
btp(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seT(f.mJ(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seT(null)}},
aX3(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kj(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kK(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kK(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c0u(d,e,f){return C.d.b0(d+(e-d)*f)},
bvR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kK(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.X(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a5B.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aR:C.m
r=r?C.n:C.al
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cV(t.x,C.n,s,18),C.bg],w))
v.push(B.aO(new B.es(t.c,!1,s),1))
v=B.au(v,C.D,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.Z,B.l(t.d,1,C.aj,s,B.c8(u==null?C.h:u,22,C.P),s,s,s)],w)
return B.bK(r,B.af(w,C.D,C.i3,C.i),q,s,C.an,s,3)}}
A.uz.prototype={
Lh(d){return this.aRK(d)},
aRK(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lh=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eu("finance_summary",B.a5(["p_from",E.qY(d.a),"p_to",E.qY(d.b)],s,r),r),$async$Lh)
case 3:q=f
if(q==null){u=D.ane
w=1
break}if(x.f.b(q)){u=B.e7(q,s,r)
w=1
break}u=D.anF
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lh,v)},
Lg(d){return this.aRJ(d)},
aRJ(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lg=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eu("finance_kpis",B.a5(["p_from",E.qY(d.a),"p_to",E.qY(d.b)],s,r),r),$async$Lg)
case 3:q=f
if(x.f.b(q)){u=B.e7(q,s,r)
w=1
break}u=D.amY
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lg,v)},
py(d){return this.apS(d)},
apS(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$py=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hJ("sevdesk-sync",B.a5(["from",E.qY(d.a),"to",E.qY(d.b)],s,s)),$async$py)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a4(B.fu(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$py,v)},
Lc(d){return this.aRz(d)},
aRz(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lc=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hJ("finance-export-pdf",B.a5(["from",E.qY(d.a),"to",E.qY(d.b)],s,s)),$async$Lc)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aB(J.a3(r,"base64"))
w=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Lc,v)}}
A.Dw.prototype={
FF(d){return this.aj4(d)},
aj4(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FF=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lh(d),$async$FF)
case 7:q=f
o=A.aDa(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hg(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FF,v)},
FB(d){return this.aiQ(d)},
aiQ(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FB=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lg(d),$async$FB)
case 7:q=f
o=A.bOn(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hg(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FB,v)},
py(d){return this.apT(d)},
apT(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$py=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.py(d),$async$py)
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
p=r.Hg(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$py,v)},
Lb(d){return this.aRy(d)},
aRy(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lb=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lc(d),$async$Lb)
case 7:q=f
o=C.ke.cU(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hg(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lb,v)},
Hg(d){if(d instanceof B.y4)return d
if(d instanceof B.lQ){if(d.b==="42501")return new B.vt(d.a)
return new B.rX(d.a)}if(d instanceof B.Mz)return new B.rX("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AD("Unerwarteter Fehler: "+B.i(d))},
$iaCX:1}
A.q1.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vd.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aym.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azt.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nT.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.C8.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nU.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y7.prototype={
GC(d){return this.apR(0)},
apR(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GC=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dn)
s=t.r
r=s.aK(0,$.x1(),x.P)
p.a=null
w=3
return B.k(B.oV(new A.aCS(p,t,r),x.H),$async$GC)
case 3:t.se3(0,f)
q=t.f
if(q.ghn(q)==null){q=$.brk()
s=s.e
s===$&&B.a()
s.cq(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GC,v)},
La(){return this.aRx()},
aRx(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$La=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dn)
s=t.r.aK(0,$.x1(),x.P)
q.a=null
w=3
return B.k(B.oV(new A.aCR(q,t,s),x.H),$async$La)
case 3:t.se3(0,e)
r=t.f
u=r.ghn(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$La,v)}}
A.y8.prototype={
dt(d,e){var w=null,v=e.aA($.x1(),x.P),u=e.aA($.brk(),x.aN)
return B.k_(B.dZ(B.b([new B.fI("Finanzen","Dashboard",new A.af7(e.aA($.brj(),x.b).gja(),new A.aD1(this,d,e),new A.aD2(this,d,e),new A.aD3(d),new A.aD4(d),new A.aD5(this,d,e,v),w),w),C.az,new A.aml(v,w),C.c5,D.adN,C.c5,B.ds(u,new A.aD6(),new A.aD7(),new A.aD8(),!1,!0,!1,x.d,x.l)],x.p),C.cT,w,!1),C.n,new A.aD9(e))},
J5(d,e){return this.aK4(d,e)},
aK4(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J5=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.brj()
w=3
return B.k(e.aK(0,s.ghL(),x.F).GC(0),$async$J5)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ghn(s)
t=d.P(x.q).f
t.bA(B.cg(null,null,null,null,null,C.r,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J5,v)},
B1(d,e){return this.avP(d,e)},
avP(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B1=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aK(0,$.brj().ghL(),x.F).La(),$async$B1)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bA(D.auV)
w=1
break}t=B.pK(C.p,10)
w=4
return B.k($.bI3().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B1)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B1,v)},
B2(d,e,f){return this.aHP(d,e,f)},
aHP(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B2=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jE(null,null,!0,null,new A.aD_(f,d),d,null,!0,!0,x.cJ),$async$B2)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nv(e.aK(0,$.cb(),x.A))
p=f.a
o=f.b
n=$.ei()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zi("finance_period",p,o,B.a5(["period_from",p.eh()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B2)
case 8:if(d.e!=null)d.P(x.q).f.bA(F.uK)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bA(B.cg(null,null,null,null,null,C.r,null,B.l("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B2,v)}}
A.af7.prototype={
u(d){var w=this,v=null,u=A.aka(C.n,F.hM,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.aka(v,D.aa2,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.aka(v,D.a9c,v,s?v:w.d,"sevDesk synchronisieren"),q=A.aka(C.ag,C.j0,C.ag,s?v:w.e,"PDF-Export")
return B.au(B.b([u,C.bg,t,C.bg,r,C.bg,q,C.bg,A.aka(C.am,C.fg,C.am,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.N,0,v,v)}}
A.ak9.prototype={
u(d){var w,v=this,u=null,t=B.aZ(12),s=B.aZ(12),r=B.aZ(12),q=v.w
if(q==null)q=C.al
q=B.dc(q,1)
w=v.r
if(w==null)w=C.h
return B.RT(B.dQ(!1,C.Y,!0,t,B.f2(!1,s,!0,B.bd(u,B.cV(v.c,w,u,20),C.q,u,u,new B.b5(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.ar,0,u,u,u,u,u,C.bB),u,v.d,u,u)}}
A.aml.prototype={
dt(d,e){var w=null,v=this.e,u=$.ei(),t=x.p
return B.bK(w,B.af(B.b([D.a7A,C.Z,B.au(B.b([D.aaL,C.bb,B.aO(B.l(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,B.D(C.h,16,C.P),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.w,B.q4(C.dl,B.b([new A.Ih("Monat",new A.ben(e),w,w),new A.Ih("Jahr (YTD)",new A.beo(e),w,w),new A.Ih("Zeitraum w\xe4hlen \u2026",new A.bep(this,d,e),D.a9h,w)],t),C.f0,6,8)],t),C.D,C.f,C.i),w,w,C.F,w,3)},
Iu(d,e){return this.aGM(d,e)},
aGM(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iu=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.ba(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.atv(new A.bem(),d,B.bH(B.aU(t)-5,1,1,0,0,0,0),new B.lq(s.a,s.b,x.bz),B.bH(B.aU(t)+1,1,1,0,0,0,0),C.ef),$async$Iu)
case 2:r=g
if(r!=null)e.aK(0,$.x1().ghL(),x.V).wn(0,new E.lv(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iu,v)}}
A.Ih.prototype={
u(d){var w=null,v=B.aZ(9999),u=B.aZ(9999),t=B.aZ(9999),s=B.dc(C.al,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cV(p,C.h,w,14),C.bg],r))
q.push(B.l(this.c,w,w,w,B.D(C.h,13,C.P),w,w,w))
return B.dQ(!1,C.Y,!0,v,B.f2(!1,u,!0,B.bd(w,B.au(q,C.l,C.f,C.N,0,w,w),C.q,w,w,new B.b5(w,w,s,t,w,w,C.H),w,w,w,w,C.kJ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.ar,0,w,w,w,w,w,C.bB)}}
A.IL.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jT(new A.bjS(this)),C.c5,D.a7F,C.w],r),p=this.c.w
if(p.length===0)q.push(B.bK(s,B.au(B.b([D.ab9,C.aG,B.aO(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.u,14,C.k),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.ar,s,C.F,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.af5(t.a,t.b,t.c==="revenue",t.d,s),C.Z],r))}q.push(B.af(w,C.l,C.f,C.i))}return B.af(q,C.aa,C.f,C.i)}}
A.af5.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aR:C.ar,s=B.dc(u?C.n:C.al,1),r=B.aZ(4),q=w.c
r=B.bd(C.a0,B.l(C.c.a_(q,0,1),v,v,v,B.c8(C.h,14,C.t),v,v,v),C.q,v,v,new B.b5(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.aj,v,B.D(C.h,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aO(B.af(B.b([q,B.l(t,v,v,v,B.D(C.u,12,C.k),v,v,v)],s),C.D,C.f,C.i),1)
q=$.e1().ap(w.f)
return B.bK(v,B.au(B.b([r,C.aG,t,B.l(q,v,v,v,B.D(u?C.am:C.h,15,C.P),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.e7,v,3)}}
A.Hp.prototype={
u(d){var w=null
return B.bK(C.ag,B.au(B.b([D.abE,C.aG,B.aO(B.l(this.c,w,w,w,B.D(C.h,14,C.k),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.fG,w,C.F,w,3)}}
A.a5C.prototype={
dt(d,e){return B.ds(e.aA($.bKv(),x.e),new A.aHZ(),new A.aI_(),new A.aI0(),!1,!0,!1,x.X,x.l)}}
A.HJ.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.asp,C.w,B.jT(new A.bbW(v,q,100-t.w.a,w,p)),C.w,new A.ajt(u),C.az,D.aso,C.w,new A.afU(t,u),C.az,D.asj,C.w,B.bD(u,!0,u,B.mG(u,B.bK(u,new A.T0(t,220,u),u,u,C.F,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bbX(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.K,u),C.az,D.ase,C.w,B.bD(u,!0,u,B.mG(u,new A.Tb(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bbY(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.K,u),C.az,D.asi,C.w,new A.al9(t,u),C.az,D.asg,C.w,new A.ahy(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.az,D.asl,C.w,new A.aqH(t,u)],s))
return B.af(r,C.aa,C.f,C.i)}}
A.ajt.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.u,11,C.k).eH(1.35),w,w,w)}}
A.akG.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ag:C.am
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bbZ(m,d):l
r=x.p
q=B.b([B.aO(B.l(m.c.toUpperCase(),l,l,l,B.D(C.u,10,C.t).h7(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.dc(C.ag,0.8)
n=B.aZ(4)
q.push(B.bd(l,B.l("Ziel "+p,l,l,l,B.D(C.ag,9,C.t),l,l,l),C.q,l,l,new B.b5(l,l,o,n,l,l,C.H),l,l,l,l,C.n0,l,l,l))}q=B.b([B.au(q,C.l,C.f,C.i,0,l,l),C.aZ,new A.a3U(C.AZ,C.e0,B.l(m.d,l,l,l,B.c8(w,22,C.t),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.aj,l,B.D(C.u,10,C.aM),l,l,l))
q.push(C.cO)
q.push(B.au(B.b([new A.TL("Vormonat",m.r,l),C.cM,new A.TL("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.cO)
q.push(B.aO(new A.Xd(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.mG(l,B.bK(l,B.af(q,C.D,C.f,C.i),l,l,C.ds,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.K,l)}}
A.TL.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aZ(4)
return B.bd(r,B.l(this.c+" \u2014",r,r,r,B.D(C.u,9,C.t),r,r,r),C.q,r,r,new B.b5(C.al,r,r,q,r,r,C.H),r,r,r,r,C.n0,r,r,r)}w=q>=0
v=w?C.am:C.ag
u=v.iH(0.12)
t=B.dc(v,0.7)
s=B.aZ(4)
return B.bd(r,B.au(B.b([B.cV(w?F.a8z:D.a8y,v,r,10),F.auD,B.l(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.D(v,9,C.t),r,r,r)],x.p),C.l,C.f,C.N,0,r,r),C.q,r,r,new B.b5(u,r,t,s,r,r,C.H),r,r,r,r,C.n0,r,r,r)}}
A.Xd.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.et(v,j[v]))
u=C.b.kl(j,new A.bje())
t=C.b.kl(j,new A.bjf())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bjg(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a3Z(k,!1)
w=B.b([A.aIf(k,2,A.avE(!1,C.n.iH(0.16),0,k,!0,D.vG),C.n,0.35,k,D.Dj,k,!0,!1,!0,!1,D.EE,!1,10,D.Y3,!0,C.lc,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NE(A.bt3(k,k,k,D.ajE,l,D.Bc,D.De,D.Dk,w,D.adR,k,m,k,n,D.Xp,D.ajF,D.a7U),C.au,C.ad,k,k)}}
A.T0.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aHh
w=C.b.fF(p,0,new A.b37())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avN(B.b([A.a_I(q,q,D.AF,q,C.n,q,q,q,r.b,6),A.a_I(q,q,D.AF,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.ci(A.byB(A.avG(q,q,u,q,q,A.a3Z(q,!1),q,new A.ya(!0,!0,q,new A.b38(),A.Zf(),!1,q,A.atf(),A.Zf()),q,v,q,q,new A.uB(!0,new A.oW(16,q,new A.pQ(!0,new A.b39(this),46,q),!0),D.kb,D.kb,new A.oW(16,q,new A.pQ(!0,new A.b3a(p),26,q),!0)))),this.d,q)},
aJn(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.Tb.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b3V(),w),x.i)
C.b.M(o,new B.a9(u,new A.b3W(),w))
t=C.b.fF(o,0,new A.b3X())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avN(B.b([A.a_I(q,q,q,q,C.n,q,q,q,v[s],14),A.a_I(q,q,q,q,C.am,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ci(A.byB(A.avG(q,q,n,q,q,A.a3Z(q,!1),q,D.Dk,q,o,q,q,new A.uB(!0,D.kb,D.kb,D.kb,new A.oW(16,q,new A.pQ(!0,new A.b3Y(p),26,q),!0)))),this.d,q)
return this.e?r:B.bK(q,r,q,q,C.F,q,3)}}
A.al9.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aHg
w=new B.a9(l,new A.bcs(),B.ab(l).i("a9<1,M>")).kl(0,new A.bct())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.l(r.b,m,m,m,B.D(C.h,14,C.t),m,m,m)
p=$.e1()
o=r.d
n=new B.aV(4,4)
o=B.b([B.au(B.b([new B.nR(1,C.ff,B.af(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,B.D(C.u,12,C.aM),m,m,m)],v),C.D,C.f,C.i),m),C.bb,B.l(p.ap(o),m,m,m,B.c8(C.h,16,C.t),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.cO,new B.CR(new B.d3(n,n,n,n),C.bJ,B.a5R(C.al,8,C.d.c4(o/w,0,1),D.At),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zi(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.w)
C.b.M(u,o)}return B.bK(m,B.af(u,C.l,C.f,C.i),m,m,C.F,m,3)}}
A.ahy.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aO(new A.BE("Aktive Kunden",""+s,u),1)
w=B.aO(new A.BE("K\xe4ufe",""+t.a,u),1)
v=$.e1()
return B.bK(u,B.au(B.b([s,w,B.aO(new A.BE("\xd8-Warenkorb",v.ap(t.d),u),1),B.aO(new A.BE("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.F,u,3)}}
A.BE.prototype={
u(d){var w=null
return B.af(B.b([B.l(this.c.toUpperCase(),w,w,w,B.D(C.u,10,C.t).h7(0.6),w,w,w),C.cN,B.l(this.d,w,w,w,B.c8(C.h,20,C.t),w,w,w)],x.p),C.D,C.f,C.N)}}
A.aqH.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.bl8(),B.ab(q).i("a9<1,M>")).kl(0,new A.bl9()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aV(4,4)
t=B.b([B.au(B.b([new B.nR(1,C.ff,B.l(u.b,1,C.aj,r,B.D(C.h,13,C.t),r,r,r),r),B.l(""+u.c+"\xd7 ",r,r,r,B.D(C.u,12,C.P),r,r,r),B.l($.e1().ap(t),r,r,r,B.D(C.h,13,C.t),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.aZ,new B.CR(new B.d3(s,s,s,s),C.bJ,B.a5R(C.al,6,C.d.c4(t/p,0,1),D.At),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zi(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.Z)
C.b.M(n,t)}return B.bK(r,B.af(n,C.l,C.f,C.i),r,r,C.F,r,3)}}
A.wn.prototype={
u(d){var w=null
return B.bK(w,B.l(this.c,w,w,w,B.D(C.u,13,C.k),w,w,w),C.ar,w,C.F,w,3)}}
A.afU.prototype={
dt(d,e){return B.ds(e.aA($.bxz(),x.fM),new A.b1A(this,d,e),new A.b1B(),new A.b1C(),!1,!0,!1,x.h,x.l)}}
A.AL.prototype={
Y(){return new A.SF()},
aWF(){return this.d.$0()}}
A.SF.prototype={
az(){var w,v,u,t,s,r,q=this
q.aQ()
q.d=new B.ba(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.hc(J.al(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bO)
for(t=0;t<8;++t){s=D.GU[t].a
if(v)r=""
else{r=B.bB(J.a3(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.b8(r,".",",")}u.m(0,s,new B.bP(new B.cR(r,C.bN,C.aS),$.ad()))}q.e!==$&&B.b4()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c3(v,v.r,v.e,B.j(v).i("c3<2>"))
while(v.t()){w=v.d
w.R$=$.ad()
w.S$=0}this.ao()},
rf(d){var w=this.e
w===$&&B.a()
w=C.c.bn(w.h(0,d).a.a)
w=B.b8(w,".","")
w=B.jY(B.b8(w,",","."))
return w==null?0:w},
HT(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HT=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.L(new A.b1r(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZ5("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.eh(),0,10),"p_cash_and_bank",q.rf("cash_and_bank"),"p_receivables",q.rf("receivables"),"p_inventory_value",q.rf("inventory_value"),"p_other_current_assets",q.rf("other_current_assets"),"p_fixed_assets",q.rf("fixed_assets"),"p_current_liabilities",q.rf("current_liabilities"),"p_long_term_liabilities",q.rf("long_term_liabilities"),"p_equity",q.rf("equity")],x.N,x.aU))
w=7
return B.k(n,$async$HT)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWF()
o=q.c
o.toString
B.bm(o,!1).fb()
q.c.P(x.q).f.bA(D.auW)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bA(B.cg(null,null,null,null,null,C.r,null,B.l("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.L(new A.b1s(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HT,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c8(C.h,18,C.t),r,r,r),p=s.f?r:new A.b1u(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.jj(D.aaN,B.l("Stichtag: "+C.c.a_(o.eh(),0,10),r,r,r,r,r,r,r),p,r),C.w],w)
for(v=0;v<8;++v){o=D.GU[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.fs(r,C.b1,!1,r,!0,C.r,r,B.fP(),u.h(0,o.a),r,r,r,r,r,2,new B.cf(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b7,r,r,r,r,C.ii,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.F,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.at,r,C.a3,r,r,r,r),C.Z],w))}p.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.u,11,C.k),r,r,r))
p=B.ci(B.f6(B.af(p,C.aa,C.f,C.N),r,C.a6),r,380)
o=s.f
u=B.dI(C.d1,r,r,o?r:new A.b1v(d),r,r)
o=o?r:s.gaDe()
t=B.e5(C.n,C.h,r,r,r,r,r)
return B.mk(B.b([u,B.dW(s.f?F.YA:C.f_,o,t)],w),C.m,p,q)}}
A.bb.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zi(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ex(B.H(this))^B.bGu(this.gbI()))>>>0},
j(d){B.bzQ()
return B.H(this).j(0)}}
A.K9.prototype={
Y(){return new A.SG(B.y(x.S,x.I),new A.avQ(B.y(x.x,x.T)),null,null)}}
A.SG.prototype={
u(d){var w,v=this,u=v.a1p(),t=v.CW
t.toString
t=v.a1q(t.au(0,v.ghB().gp(0)))
w=v.a1q(u)
v.a.toString
return new A.K4(new A.a_H(t,w,null),u,null)},
a1q(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avN(s.c,s.d,!1,r,s.a))}return d.aOA(w)},
a1p(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Ug(t.ch)
if(r)s=w.a
r=t.y
t=t.aPv(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOB(A.brN(!1,!0,!0,v.d,v.c,u.garo(),v.f,v.e))}return t},
arp(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaeW()||e==null||e.a==null){w=v.cy
v.L(w.gaO_(w))
return}v.L(new A.b1F(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1p(),new A.b1G(w)))}}
A.nB.prototype={
UQ(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avG(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPv(d,e){return this.UQ(null,null,d,e)},
aOB(d){return this.UQ(null,d,null,null)},
aOA(d){return this.UQ(d,null,null,null)},
WM(d,e,f){var w,v,u,t=A.kj(d.ch,e.ch,f,A.bZs(),x.dB),s=B.aa(d.CW,e.CW,f),r=A.bzX(d.d,e.d,f),q=A.bBR(d.e,e.e,f),p=A.bzV(d.c,e.c,f),o=e.a
o=A.a3Z(B.a_Y(d.a.b,o.b,f),o.a)
w=B.aa(d.y,e.y,f)
v=B.aa(d.x,e.x,f)
u=B.aa(d.z,e.z,f)
r=A.avG(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bzS(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avF.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fx.prototype={
gdn(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avO(),B.ab(v).i("a9<1,M>")).kl(0,new A.avP())
v=v.length
return w+(v-1)*this.d},
gbI(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ib.prototype={
gbI(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mo.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_E.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_J.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acz.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_K.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Cp.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.Ka.prototype={}
A.a_L.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xj.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WM(v,w,d)}}
A.afS.prototype={}
A.afX.prototype={}
A.afY.prototype={}
A.ag_.prototype={}
A.ag0.prototype={}
A.ag1.prototype={}
A.ag2.prototype={}
A.ag3.prototype={}
A.ag4.prototype={}
A.avQ.prototype={
Ug(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ub(0,0,!1)
v=new A.yX(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ub(t,u,!0)}w=null
try{w=C.b.qd(d,new A.avR())}catch(s){return new A.ub(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ub(q,r,!1)
u.m(0,v,j)
return j}}
A.ub.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.afZ.prototype={}
A.avS.prototype={
i4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_v(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abw(t,A.brM(w,t.a),u)
l.y=u
l.aQR(e,u,f)
l.al_(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aR_(d,e,m,t,r,s,n,o,f)}}},
abw(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iK(p,B.ab(p).i("iK<1>")).ar(0,new A.avT(t,q,r,s))
w.push(new A.a4E(q))}return w},
aQR(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aV(m,m)
l=new B.d3(k,k,k,k)}j=o.w
i=b7[r].b[p]
h=i-m
g=i+m
k=l.a
f=l.b
e=l.c
d=l.d
a0=Math.max(k.b,f.b)+Math.max(e.b,d.b)
a1=o.b
a2=o.a
if(a1!==a2){if(a1>a2){a3=b3.dD(Math.max(s,a2),b5,b8)
a4=B.Pd(h,Math.min(b3.dD(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dD(Math.min(t,a2),b5,b8)
a4=B.Pd(h,a5,g,Math.max(b3.dD(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.E:f).gp(0)
k.seT(null)
a6=b3.f.el()
u.drawRRect(B.mi(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dD(f,b5,b8)
e=a8.b
b0=b3.dD(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.aY(u.save())
u.clipRect(B.dG(b1),$.oO()[1],!0)
a6=b3.f.el()
u.drawRRect(B.mi(a4),a6)
a6.delete()
u.restore()
b3.aQY(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.geg(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cB($.ah().r)
n=new B.h8(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hE(k)
v.fT(A.ayX(b2,o.r),b3.r)}}}},
aR_(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.As(a5,a5,a5,a5,B.d6(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lk().Zv(a8,a7.b),a7.a),C.d_,C.v,a5,b6.c,C.bu)
w.afe(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbS(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dD(s,a6,b6)
q=b4.a
p=a4.dD(q,a6,b6)
o=b1.b
n=u+o.geo()
m=v+4+(o.gcY(0)+o.gd_(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aD3)j=v===D.Zf&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.Zw(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.Fk(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lk().K4(new B.E(v,t),d).b
s=$.lk()
q=w.b
p=q.c
q=q.a.c
a0=s.K4(new B.E(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahx()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vs(d,new A.avU(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.E(v,t))},
aQY(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geg(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dD(w,j,k)
u=e.a
t=n.dD(u,j,k)
w=u<w
u=w?new B.aV(i.z,i.Q):C.a_
s=w?new B.aV(i.x,i.y):C.a_
r=w?C.a_:new B.aV(i.e,i.f)
w=w?C.a_:new B.aV(i.r,i.w)
q=B.Pd(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dD(v,j,k),i.b)
r=n.dD(t,j,k)
v=t<v
t=v?C.a_:new B.aV(i.z,i.Q)
p=v?C.a_:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a_
q=B.Pd(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a_)}else q=B.btK(w,n.dD(v,j,k),u,n.dD(t,j,k),C.a_)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
W7(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abw(b2,A.brM(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dD(k,b2,b3)
m=b0[q].c[o]
g=a7.dD(m.a+m.x.b,b2,b3)}else{h=a7.dD(j+m.x.b,b2,b3)
g=a7.dD(b0[q].c[o].b,b2,b3)}a7.dD(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dD(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dD(a4.a,b2,b3)
a6=a7.dD(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a_L(d,q,a0,o,a2,a1,new A.et(d.a,v),new B.m(n,t))}}return null}}
A.a4E.prototype={}
A.a_H.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.avS()
t.a0H()
$.ah()
w=B.aS()
w.b=C.bf
t.f=w
w=B.aS()
w.b=C.aU
t.r=w
w=B.aS()
w.b=C.bf
w.r=C.m.gp(0)
t.w=w
w=B.aS()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.x=w
t=new A.a9J(this.d,v,u,t,d,C.bo,new B.bp(),B.aH(x.v))
t.bj()
t.Yr(v.cy)
t.aen()
return t},
bx(d,e){e.sij(0,this.d)
e.sYc(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9J.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYc(d){var w=this
if(w.hZ.k(0,d))return
w.hZ=d
w.a0f(d.cy)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.aY(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a0a(t,v),new A.vp(u.aC,u.hZ,u.cV,x.Q))
s.restore()},
Zp(d){var w=this,v=w.gC(0)
return new A.Ka(w.fU.W7(d,v,new A.vp(w.aC,w.hZ,w.cV,x.Q)))}}
A.a_x.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Co.prototype={
K(){return"AxisSide."+this.b}}
A.te.prototype={}
A.pQ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ab7.prototype={
gbI(){return[!1,0,0,0]}}
A.oW.prototype={
gbI(){return[this.b,this.a,this.c,!0]}}
A.uB.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.et.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.et))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.ya.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.ph.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acB.prototype={
gbI(){return[this.a,this.b]}}
A.Ph.prototype={
gbI(){return[this.a,this.b]}}
A.mH.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.n7.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kE.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l2.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a4P.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.acZ.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.M3.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uA.prototype={}
A.Me.prototype={
acV(d,e,f){var w,v
$.ah()
w=B.aS()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iP(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afN.prototype={}
A.afR.prototype={}
A.aiT.prototype={}
A.aj8.prototype={}
A.aj9.prototype={}
A.ajb.prototype={}
A.ajc.prototype={}
A.ak_.prototype={}
A.ajZ.prototype={}
A.ak0.prototype={}
A.anq.prototype={}
A.apa.prototype={}
A.apb.prototype={}
A.aqL.prototype={}
A.arn.prototype={}
A.arm.prototype={}
A.aro.prototype={}
A.avv.prototype={
Md(d,e,f,g,h,i){return new B.iv(this.aUI(d,e,f,g,h,i),x.g4)},
aUH(d,e,f,g){return this.Md(d,e,f,!0,g,!0)},
aUI(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Md(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lk().aiC(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fO(u-s,v)*v===u
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
A.K3.prototype={
a0H(){var w,v=this
$.ah()
w=B.aS()
w.b=C.aU
v.a=w
w=B.aS()
w.b=C.bf
v.b=w
w=B.aS()
w.b=C.bf
v.e=w
w=B.aS()
w.b=C.aU
v.c=w
v.d=B.aS()},
i4(d,e,f){var w=this
w.a_w(d,e,f)
w.aQN(e,f)
w.aQX(e,f)
w.aQW(e,f)},
aQW(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lk().Oi(w.a,a1.r-a1.f)
u=$.bqX().Md(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.f9(u.a(),u.$ti.i("f9<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.m(o,0)
m=new B.m(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kS(n,m)
if(j!=null){p.r=C.B.gp(0)
p.seT(j.mJ(0,i))}else{if(k==null)k=C.E
p.r=k.gp(k)
p.seT(a0)}k=l.c
p.c=k
if(k===0){p.seT(a0)
k=B.bZ(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dh(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lk().Oi(w.b,a1.y-a1.x)
u=$.bqX().Md(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.f9(u.a(),u.$ti.i("f9<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dD(q,w,a4)
n=new B.m(0,e)
m=new B.m(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kS(n,m)
if(k!=null){q.r=C.B.gp(0)
q.seT(k.mJ(0,i))}else{if(p==null)p=C.E
q.r=p.gp(p)
q.seT(a0)}p=f.c
q.c=p
if(p===0){q.seT(a0)
p=B.bZ(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dh(n,m,d.a,f.d)}},
aQN(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aQX(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.kS(new B.m(n.fc(t.a,m,e),0),new B.m(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.B.gp(0)
r.seT(p.mJ(0,s))}else{r.r=(q==null?C.E:q).gp(0)
r.seT(null)}o=n.e.el()
w.drawRect(B.dG(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.K)(l),++u){t=l[u]
s=B.kS(new B.m(0,n.dD(t.a,m,e)),new B.m(w,n.dD(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.B.gp(0)
v.seT(q.mJ(0,s))}else{v.r=(r==null?C.E:r).gp(0)
v.seT(null)}o=n.e.el()
j.drawRect(B.dG(s),o)
o.delete()}},
aQV(d,e,f){var w,v
this.a_w(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.acW(d,e,f,w)
if(v.b.length!==0)this.aR1(d,e,f,w)},
acW(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=f.dD(o,a1,a0)
m=new B.m(0,n)
o=f.dD(o,a1,a0)
l=new B.m(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kS(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seT(j.mJ(0,i))}else{if(k==null)k=C.E
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.bZ(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dh(m,l,f.c,p.d)
n=p.r
h=n.gdn(n).eD(0,2)
g=C.d.al(o,n.gbS(n).eD(0,2))
J.aY(r.save())
r.translate(h,g)
n=n.gNa().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdn(n).eD(0,2)
o=C.d.al(o,n.gbS(n).eD(0,2))
k=f.d
k===$&&B.a()
s.acX(0,n,new B.m(h,o),k)}}},
aR1(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=d.fc(o,a3,a2)
m=new B.m(n,0)
o=d.fc(o,a3,a2)
l=new B.m(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kS(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seT(j.mJ(0,i))}else{if(k==null)k=C.E
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.bZ(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dh(m,l,d.c,p.d)
n=p.r
h=n.gdn(n).eD(0,2)
g=n.gbS(n).eD(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.aY(r.save())
r.translate(f,e)
n=n.gNa().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdn(n).eD(0,2)
g=n.gbS(n).ad(0,2)
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.acX(0,n,new B.m(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dD(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
Zw(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.K4.prototype={
gakl(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakm(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakn(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakj(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akG(d){var w,v=this,u=null,t=v.d,s=A.bsx(t.d),r=t.a
r=r.a&&A.bLO(r.b)?r.b:u
w=B.b([B.bd(u,v.c,C.q,u,u,new B.b5(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.avx(w)
if(v.gakl())C.b.ht(w,s.$1(!0),new A.Ac(D.AA,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakn())C.b.ht(w,s.$1(!0),new A.Ac(D.mj,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakm())C.b.ht(w,s.$1(!0),new A.Ac(D.AB,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakj())C.b.ht(w,s.$1(!0),new A.Ac(D.dC,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jT(new A.avw(this))}}
A.QI.prototype={
Y(){return new A.X2(new B.be(null,x.eF))}}
A.X2.prototype={
awO(){switch(this.a.c.a){case 0:return C.e_
case 1:return C.fz
case 2:return C.e0
case 3:return C.fA}},
axj(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awQ(d){this.a.toString
return},
az(){this.aQ()
$.cv.x1$.push(this.ga3R())},
be(d){this.bE(d)
$.cv.x1$.push(this.ga3R())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axj()
return B.bui(B.b_a(0,B.bd(v.awO(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ab8.prototype={
bl(d){return A.bLE(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_y.prototype={
hj(d){if(!(d.b instanceof B.hh))d.b=new B.hh(null,null,C.p)},
hS(d){if(this.B===C.aH)return this.xT(d)
return this.acx(d)},
aJx(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8r(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dA(d){var w=this.a8q(d,B.ht())
switch(this.B.a){case 0:return d.c1(new B.E(w.a,w.b))
case 1:return d.c1(new B.E(w.b,w.a))}},
a8q(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aH?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fU(u,null)
break
case 1:q=B.fU(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8r(p)
t=Math.max(t,o.aJx(p))
m=r.aG$}return new A.bc4(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8q(o,B.mg()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c1(new B.E(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c1(new B.E(l,m))
p.gC(0)
p.gC(0)
break}w=p.ag$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a8r(r==null?B.V(B.Z("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c2(w))):r)/2
switch(p.B.a){case 0:r=new B.m(q,0)
break
case 1:r=new B.m(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e8(d,e){return this.xU(d,e)},
aN(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uT(d,e)},
l(){this.a2.sbh(0,null)
this.anC()}}
A.bc4.prototype={}
A.avy.prototype={}
A.jG.prototype={
gbI(){return[this.a,this.b]}}
A.nA.prototype={}
A.afO.prototype={}
A.afP.prototype={
aO(d){var w,v,u
this.fm(d)
w=this.ag$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fg(0)
w=this.ag$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.afQ.prototype={}
A.SD.prototype={
l(){var w,v,u
for(w=this.VG$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.Ac.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghD(){switch(this.c.a){case 0:return C.e0
case 1:return C.fA
case 2:return C.e_
case 3:return C.fz}},
gaZi(){var w=this.d,v=A.bsx(w.d),u=A.bzU(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahk(){var w=this.d,v=A.bzU(w.a),u=A.bsx(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.geo()+v.geo()}},
aVr(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.lk().Oi(d,f-e)
w=p.c
v=w!==D.mj
if((!v||w===D.dC)&&p.d instanceof A.nB){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.brM(u,d)
w=new B.iK(t,B.ab(t).i("iK<1>"))
s=w.giC(w).f0(0,new A.aX6(u),x.W).fW(0)}else{r=$.bqX()
w=!v||w===D.dC
v=p.d
q=r.aUH(w?v.w:v.z,o,f,e)
v=B.o5(q,new A.aX7(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.j(v).i("t.E"))}w=B.ab(s).i("a9<1,nA>")
w=B.P(new B.a9(s,new A.aX8(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bd(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mj
u=!v
t=!u||w===D.dC
s=j.e
r=t?s.a:s.b
t=j.ghD()
s=!u||w===D.dC?C.a6:C.aH
q=B.b([],x.p)
if(w===D.AA||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dC?r:j.gow().c.c
p=!u||w===D.dC?j.gow().c.c:r
o=j.gaZi()
n=!u||w===D.dC?C.aH:C.a6
j.gahk()
m=j.gahk()
l=!u||w===D.dC
k=j.d
l=l?k.f:k.x
u=!u||w===D.dC?k.r:k.y
q.push(B.bd(i,A.bSS(new A.avy(),n,j.aVr(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AB||w===D.dC)j.gow()
return new B.eR(t,i,i,B.bOr(q,C.l,s,i,C.f,C.N,0,i,i,C.c6),i)}}
A.a_N.prototype={
gbI(){return[this.a,this.b]}}
A.a3Y.prototype={
gbI(){return[this.a,this.b]}}
A.Ml.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4_.prototype={
gaaR(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.aw2.prototype={}
A.aCj.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ag7.prototype={}
A.aj5.prototype={}
A.aj6.prototype={}
A.ajd.prototype={}
A.Kd.prototype={
i4(d,e,f){}}
A.vp.prototype={}
A.hg.prototype={
gdI(){return null},
gaeW(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.Mk
if(w)return!0
return!(v instanceof A.Mh)&&!(v instanceof A.Mg)&&!(v instanceof A.Mi)&&!(v instanceof A.Mf)&&!w&&!(v instanceof A.Mj)}}
A.a43.prototype={
gdI(){return this.a.b}}
A.a44.prototype={
gdI(){return this.a.b}}
A.a45.prototype={
gdI(){return this.a.b}}
A.Mg.prototype={}
A.Mh.prototype={}
A.a48.prototype={
gdI(){return this.a.b}}
A.Mj.prototype={}
A.Mk.prototype={
gdI(){return this.a.b}}
A.a42.prototype={
gdI(){return this.a.b}}
A.a41.prototype={
gdI(){return this.a.b}}
A.Mf.prototype={
gdI(){return this.a.b}}
A.a46.prototype={
gdI(){return this.a.gdI()}}
A.a47.prototype={
gdI(){return this.a.gdI()}}
A.Mi.prototype={
gdI(){return this.a.gdI()}}
A.Fw.prototype={
Yr(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aen(){var w=this,v=null,u=w.ac=B.btq(v,v)
u.ay=new A.aSo(w)
u.ch=new A.aSp(w)
u.CW=new A.aSq(w)
u.cy=new A.aSr(w)
u.cx=new A.aSs(w)
u=w.aE=B.Gk(v,-1,v)
u.B=new A.aSt(w)
u.a3=new A.aSu(w)
u.V=new A.aSv(w)
u=w.bz=B.a5Y(v,w.a2,v)
u.p3=new A.aSw(w)
u.p4=new A.aSx(w)
u.RG=new A.aSy(w)},
cv(){var w=x.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.E(w.b,w.d)},
dA(d){return new B.E(d.b,d.d)},
kJ(d){return!0},
mT(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bz
w===$&&B.a()
w.rC(d)
w=v.aE
w===$&&B.a()
w.rC(d)
w=v.ac
w===$&&B.a()
w.rC(d)}else if(x.gJ.b(d))v.l6(new A.a47(d))},
gMH(d){return new A.aSz(this)},
gMJ(d){return new A.aSA(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdI()
v=w!=null?u.Zp(w):null
u.V.$2(d,v)
u.a3=C.bo},
gKA(d){return this.a3},
gFe(){var w=this.an
w===$&&B.a()
return w},
aO(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.fg(0)},
$ijg:1}
A.NE.prototype={
Y(){return new A.UU(B.b([],x.r),B.y(x.S,x.I),new A.aIh(B.y(x.y,x.dj)),null,null)}}
A.UU.prototype={
u(d){var w,v=this,u=v.a3T(),t=v.CW
t.toString
t=v.aaq(t.au(0,v.ghB().gp(0)))
w=v.aaq(u)
v.a.toString
return new A.K4(new A.a5P(t,w,null),u,null)},
aaq(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ab(w).i("a9<1,e6>")
w=B.P(new B.a9(w,new A.bc9(this,d),v),v.i("av.E"))
return d.aPs(w,this.cy)},
a3T(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Ug(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPH(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aP6(new A.Eb(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gay7(),t.c,t.d))}return r},
ay8(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaeW())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.L(new A.bc7(v))
return}v.L(new A.bc8(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3T(),new A.bca(w)))}}
A.pu.prototype={
WM(d,e,f){var w,v,u,t,s,r,q=B.aa(d.f,e.f,f),p=B.aa(d.r,e.r,f),o=B.aa(d.w,e.w,f),n=B.aa(d.x,e.x,f),m=B.aa(d.y,e.y,f),l=B.aa(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a3Z(B.a_Y(d.a.b,j.b,f),j.a)
w=A.bzS(d.at,e.at,f)
v=A.bzV(d.c,e.c,f)
u=A.bzX(d.d,e.d,f)
t=A.bBR(d.e,e.e,f)
s=A.kj(d.ch,e.ch,f,A.c0w(),x.cz)
s.toString
r=A.kj(d.CW,e.CW,f,A.c0v(),x.J)
r.toString
u=A.bt3(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UR(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bt3(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPH(d,e,f,g){return this.UR(null,null,d,e,f,g,null)},
aP6(d){var w=null
return this.UR(w,d,w,w,w,w,w)},
aPs(d,e){var w=null
return this.UR(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e6.prototype={
aq9(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qd(n.a,new A.aIg())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.fI))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b4()
n.b=q
r.toString
n.c!==$&&B.b4()
n.c=r
s.toString
n.d!==$&&B.b4()
n.d=s
t.toString
n.e!==$&&B.b4()
n.e=t}},
acd(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aIf(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPd(d){return this.acd(d,null)},
aPf(d){return this.acd(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NF.prototype={
gbI(){return[this.a]}}
A.a_G.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mp.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.K8.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.y9.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aI1.prototype={
K(){return"LabelDirection."+this.b}}
A.a40.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Eb.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5Q.prototype={
gbI(){return[4,C.hG,16,D.xg,0,120,A.c0y(),!1,!1,!1,0,C.A,A.c0x()]}}
A.mM.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q_.prototype={}
A.rj.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.tf.prototype={
gbI(){return[this.a,this.b]}}
A.FX.prototype={
gbI(){return[this.a]}}
A.NG.prototype={}
A.yT.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WM(v,w,d)}}
A.afV.prototype={}
A.afW.prototype={}
A.ag8.prototype={}
A.aj7.prototype={}
A.aja.prototype={}
A.akN.prototype={}
A.akO.prototype={}
A.akP.prototype={}
A.akR.prototype={}
A.akS.prototype={}
A.akT.prototype={}
A.akU.prototype={}
A.ap9.prototype={}
A.aqK.prototype={}
A.aIh.prototype={
Ug(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xH
u=new A.yX(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yU(s,r,q,t,!0)}w=null
try{w=C.b.qd(d,new A.aIi())}catch(p){return D.xH}v=null
try{v=C.b.qd(w.a,new A.aIj())}catch(p){return D.xH}o=v.a
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
if(f<m)m=f}e=new A.yU(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yU.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.akQ.prototype={}
A.aIk.prototype={
i4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaR(0)){v=a3.b
u=v.a
v=v.b
$.ah()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aS())
a3.aO6(new B.G(0,0,u,v))}d.a_v(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aQT(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aQP(a3,q,a4)
d.aQU(a3,q,a4)
d.akZ(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dB("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v7(q,i,j,k))}}d.aR0(a3,s,a4)
if(w.gaaR(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aQZ(a2,a3,v,f,new A.FX(g),a4)}},
aQP(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bsw(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.YZ(o,e,u,f)
s=p.aiu(o,e,t,u,f)
r=p.Z0(o,e,t,u,f,!0)
q=p.ait(o,e,t,u,f)
p.aQS(d,s,p.YY(o,e,t,u,f,!0),f,e)
p.aQM(d,q,r,f,e)
p.aQQ(d,t,e)
p.aQO(d,t,e,f)}},
aQT(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bsw(a6.a),a9=A.bsw(a7.a)
if(a8.length!==a9.length)throw B.e(B.bF("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ab(m).i("cE<1>")
k=B.P(new B.cE(m,l),l.i("av.E"))
j=a3.YZ(a4,a6,n,b3)
i=a3.Z_(a4,a7.aPf(k),k,b3,j)
m=a6.b
m===$&&B.a()
l=a7.b
l===$&&B.a()
h=Math.min(m.a,l.a)
l=a6.c
l===$&&B.a()
m=a7.c
m===$&&B.a()
g=Math.max(l.b,m.b)
m=a6.d
m===$&&B.a()
l=a7.d
l===$&&B.a()
f=Math.max(m.a,l.a)
l=a6.e
l===$&&B.a()
m=a7.e
m===$&&B.a()
e=Math.min(l.b,m.b)
m=a3.fc(h,a4,b3)
l=a3.dD(g,a4,b3)
d=a3.fc(f,a4,b3)
a0=a3.dD(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.B.gp(0)
a1.seT(u.mJ(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.E:v).gp(0)
a1.seT(null)}$.ah()
a2=new B.ms(C.dp,C.bf,C.dT,C.en,C.dJ).el()
m=B.dG(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v4(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fT(i,a3.r)
w.restore()}},
aQU(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z4(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fI)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dD(q.b,w,f)
n.$4(q,p/v*100,e,r).acV(s,q,new B.m(p,o))}}},
aR0(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h0(b3,new A.aIn())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.Z4(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dD(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.V(B.ri(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lh(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lh(q.$2(m,k))))
f=b1.dD(a1,w,b4)
a3=new B.m(h,f)
a4=b1.dD(a2,w,b4)
a5=new B.m(h,a4)
a6=a0/2
a7=g-a6
a8=g+a6
if(a4>a7&&a4<a8)a5=f<a4?new B.m(h,a4-(a4-a7)):new B.m(h+0,a4+(a8-a4))
a9=i.a
f=b1.y
f===$&&B.a()
a4=a9.a
a6=a9.b
b0=B.kS(a3,a5)
if(a6!=null){f.r=C.B.gp(0)
f.seT(a6.mJ(0,b0))}else{if(a4==null)a4=C.E
f.r=a4.gp(a4)
f.seT(null)}a4=a9.c
f.c=a4
if(a4===0){f.seT(null)
a4=B.bZ(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dh(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.ri(d.a))
f.acV(t,j,new B.m(h,g))}}},
Z_(d,e,f,g,h){var w=this.aiv(d,e,f,g,h)
return w},
YZ(d,e,f,g){return this.Z_(d,e,f,g,null)},
aiv(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.ah().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dD(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f4(d,a0))
if(e===1)g.aB(new B.cs(d,a0))}else g.aB(new B.cs(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.p,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dD(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dD(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dD(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.m(n,l)
s=new B.L6(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hE(r)}return g},
Z0(d,e,f,g,h,i){var w,v,u,t,s=this
$.ah()
w=B.bt1(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,t))
w.aB(new B.cs(s.fc(v.h(g,0).a,d,h),s.dD(v.h(g,0).b,d,h)))
w.aB(new B.p4())
return w},
aiu(d,e,f,g,h){return this.Z0(d,e,f,g,h,!1)},
YY(d,e,f,g,h,i){var w,v,u,t=this
$.ah()
w=B.bt1(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,0))
w.aB(new B.cs(t.fc(v.h(g,0).a,d,h),t.dD(v.h(g,0).b,d,h)))
w.aB(new B.p4())
return w},
ait(d,e,f,g,h){return this.YY(d,e,f,g,h,!1)},
aQS(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dD(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.btp(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fT(e,r.r)},
aQM(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fc(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dD(t.b,w,g)
s=r.r
s===$&&B.a()
A.btp(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fT(e,r.r)},
aQQ(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Ny(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.jV:C.dT
u.e=C.en
u.r=v.gp(0)
u.seT(null)
u.c=f.x
u.r=v.gp(0)
$.lk()
u.z=new B.z1(C.aD,w.c*0.57735+0.5)
d.a.fT(B.bt2(A.ayX(e,f.cy),w.b),this.f)},
aQO(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.jV:C.dT
q.e=C.en
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dD(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dD(u.b,r,g)
t=s.f
A.btp(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bQV(t)
d.a.fT(A.ayX(e,f.cy),s.f)},
aQZ(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bG_(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lk().Zv(b4,u.b)
s=u.a
r=w.k(0,C.iH)?new B.ke(1):w
q=new B.tc(new B.hH(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.d_,C.v,r,a8,a8,a8,a8,C.bu,a8)
q.afe(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.K)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dD(b7.b,a9,b9)
l=p+C.hG.geo()
k=o+(w-1)*4+(C.hG.gcY(0)+C.hG.gd_(0))
j=t-k-16
i=a7.Zw(b3,l,D.xg,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.Fk(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bFZ(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lk().K4(new B.E(t,w),0).b
d=new B.m(0,b1)
a0=new B.m(g.a,g.b)
a1=$.lk().K4(new B.E(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vs(0,new A.aIl(a7,b5,g),a0,d,new B.E(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bTr(q.r,q.w)
A:{if(D.Ds===a5){a6=a3
break A}if(D.Dt===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vs(0,new A.aIm(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.E(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z4(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
W7(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aiW(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h0(t,new A.aIo())
return t.length===0?null:t},
aiW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fI))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dD(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.ht(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q_(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v7.prototype={}
A.a5P.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aIk()
t.a0H()
$.ah()
w=B.aS()
w.b=C.aU
t.f=w
w=B.aS()
w.b=C.bf
t.r=w
w=B.aS()
w.b=C.aU
t.w=w
w=B.aS()
w.b=C.bf
w.r=C.E.gp(0)
w.a=D.a_l
t.x=w
w=B.aS()
w.b=C.aU
w.r=C.B.gp(0)
t.y=w
w=B.aS()
w.b=C.bf
w.r=C.m.gp(0)
t.z=w
w=B.aS()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.Q=w
t=new A.a9W(this.d,v,u,t,d,C.bo,new B.bp(),B.aH(x.v))
t.bj()
t.Yr(v.cx)
t.aen()
return t},
bx(d,e){e.sij(0,this.d)
e.sYc(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9W.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYc(d){var w=this
if(w.hZ.k(0,d))return
w.hZ=d
w.a0f(d.cx)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.aY(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a0a(t,v),new A.vp(u.aC,u.hZ,u.cV,x.o))
s.restore()},
Zp(d){var w=this,v=w.gC(0)
return new A.NG(w.fU.W7(d,v,new A.vp(w.aC,w.hZ,w.cV,x.o)))}}
A.ML.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a0a.prototype={
aO6(d){this.a.a.clipRect(B.dG(d),$.oO()[1],!0)
return null},
ad2(d,e){d.aN(this.a,e)},
Vs(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aY(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lk()
s.Ya(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dh(d,e,f,g){var w=B.cB($.ah().r)
w.aB(new B.f4(d.a,d.b))
w.aB(new B.cs(e.a,e.b))
this.a.fT(A.ayX(w,g),f)}}
A.yX.prototype={
gbI(){return[this.a]}}
A.al0.prototype={}
A.a0k.prototype={}
A.b_B.prototype={
K4(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.m((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aW0(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aV(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aV(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aV(v,v)
s=d.d
return new B.d3(w,u,t,s.a>v||s.b>v?new B.aV(v,v):s)},
aW1(d,e){var w,v
if(d==null)return D.a_x
w=d.b
v=e/2
return d.aPi(w>v?v:w)},
Oi(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZ2(w)},
aZ2(d){if(d<1)return this.aI9(d)
return this.a7v(d)},
aI9(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7v(d*q)/q},
a7v(d){var w,v=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a4(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a4(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a4(Math.pow(10,v))
else return C.d.a4(Math.pow(10,v))},
aiK(d){if(d>=1)return 1
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
Zv(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iN
w=e.a?u.w.c2(e):e
v=B.bR(d,C.vc)
v=v==null?null:v.ay
return v===!0?w.c2(C.m1):w},
aiC(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.PB.prototype={
a3v(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st3(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3v(v)||w.a3v(d))w.a7()
else{w.cP=w.D=null
w.bc()}},
shD(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cP=w.D=null
w.bc()},
scC(d){var w=this
if(w.dq==d)return
w.dq=d
w.G=w.cP=w.D=null
w.bc()},
dA(d){var w,v=this.D$
if(v!=null){w=v.aq(C.ae,C.iB,v.gdi())
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xG(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xG(w)}}else return new B.E(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var w=this.D$
return w==null?null:w.fK(C.iB,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dH(C.iB,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.I.prototype.ga6.call(u))
v=new B.as(0,w.b,0,w.d).xG(u.D$.gC(0))
u.fy=t.a(B.I.prototype.ga6.call(u)).c1(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.I.prototype.ga6.call(u)).xG(u.D$.gC(0))
break}u.cP=u.D=null}else{t=x.k.a(B.I.prototype.ga6.call(u))
u.fy=new B.E(B.L(0,t.a,t.b),B.L(0,t.c,t.d))}},
Tt(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c1(new Float64Array(16))
w.fZ()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bvl(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yx(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yx(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.py(n.a,n.b,0)
q.qP(w.a/s.a,w.b/s.b,1,1)
q.fX(-o,-p.b,0,1)
m.cP=q}},
a6r(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.zb(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i1.prototype.gi3.call(s)
t=s.ch.a
return d.z6(r,e,v,u,t instanceof B.q0?t:null)}else s.kr(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tt()
w=s.D
w.toString
if(w&&s.eX!==C.q){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uj?t:null
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFP(),s.eX,t))}else s.ch.sbh(0,s.a6r(d,e))},
e8(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tt()
return d.JO(new A.aSJ(v),e,v.cP)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OL()
else{this.Tt()
w=this.cP
w.toString
e.fV(0,w)}}}
A.a3U.prototype={
bl(d){var w=new A.PB(this.e,this.f,B.e3(d),C.q,null,new B.bp(),B.aH(x.v))
w.bj()
w.sc8(null)
return w},
bx(d,e){e.st3(this.e)
e.shD(this.f)
e.scC(B.e3(d))
if(C.q!==e.eX){e.eX=C.q
e.bc()
e.cu()}}}
var z=a.updateTypes(["M(q1)","C(et)","~(w,fx)","M(e6,w)","M(M,q1)","bJ(M,te)","ph(M)","w(q_,q_)","~(hg,Ka?)","xL(z)","Hp(A,bE)","IL(nU)","HJ(nT)","vd(@)","e6(M)","w5(@)","ak(M,te)","C8(@)","uz(dS<uz>)","M(vd)","M(w5)","wn(A,bE)","AL(z)","S<~>()","q1(@)","xj(@)","M(ib)","C(fx)","~(w,ib)","~(@)","jG(nA)","c(nA)","jG(bC<w,M>)","jG(M)","nA(jG)","~(hg,NG?)","e6(e6)","Dw(dS<aCX>)","yT(@)","lv(G7<lv>)","tf(w)","uA(et,M,e6,w)","rj(mM)","C(e6)","w(v7,v7)","M(fx)","S<nU>(cn<nU>)","q0?(ry,m)","w(w,w,M)","fx(fx,fx,M)","ib(ib,ib,M)","mo(mo,mo,M)","Cp?(fx,w,ib,w)","F(fx)","c(M,te)","et(et,et,M)","C(M)","mH(mH,mH,M)","n7(n7,n7,M)","kE(kE,kE,M)","l2(l2,l2,M)","h(kE)","h(l2)","e6(e6,e6,M)","mp(mp,mp,M)","uA(et,M,e6,w{size:M?})","C(et,e6)","M(m,m)","u<tf>(e6,u<w>)","S<nT>(cn<nT>)","u<rj>(u<mM>)","F(mM)","y7(ff<A?>)"])
A.aCT.prototype={
$1(d){var w=B.e7(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q1(J.al(v==null?"":v),A.oK(w.h(0,"revenue_net")),A.oK(w.h(0,"expense_net")),A.oK(w.h(0,"result_net")))},
$S:z+24}
A.aCU.prototype={
$1(d){var w,v,u,t=B.e7(x.f.a(d),x.N,x.z),s=B.ap(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.ap(t.h(0,"code"))
v=A.oK(t.h(0,"gross"))
u=B.bB(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.vd(s,r,w,v,u,A.oK(t.h(0,"avg_basket")))},
$S:z+13}
A.aCV.prototype={
$1(d){var w,v=B.e7(x.f.a(d),x.N,x.z),u=B.ap(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.bB(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w5(u,t,w,A.oK(v.h(0,"gross")))},
$S:z+15}
A.aDb.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.C8(v,u,J.al(t==null?"expense":t),A.tS(w.h(d,"net")),A.tS(w.h(d,"tax")),A.tS(w.h(d,"gross")))},
$S:z+17}
A.boN.prototype={
$1(d){return new A.uz(d.aA($.cb(),x.A))},
$S:z+18}
A.boO.prototype={
$1(d){return new A.Dw(d.aA($.bKw(),x.D))},
$S:z+37}
A.bqC.prototype={
$1(d){return E.aCW()},
$S:z+39}
A.boP.prototype={
$1(d){var w=d.aA($.x1(),x.P)
return d.aA($.atU(),x.a).FF(w)},
$S:z+46}
A.boM.prototype={
$1(d){var w=d.aA($.x1(),x.P)
return d.aA($.atU(),x.a).FB(w)},
$S:z+69}
A.boL.prototype={
$1(d){return this.aio(d)},
aio(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aA($.cb(),x.A).i7("finance_balance_kpis",t),$async$$1)
case 3:s=r.e7(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:207}
A.aCS.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.atU(),x.a).py(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCR.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.atU(),x.a).Lb(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD9.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.brk()
if(s.e==null)B.V(B.Z(y.b))
s.gct().cq(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD1.prototype={
$0(){return this.a.J5(this.b,this.c)},
$S:0}
A.aD2.prototype={
$0(){return this.a.B1(this.b,this.c)},
$S:0}
A.aD3.prototype={
$0(){var w=x.z
return B.bm(this.a,!1).eq(B.eJ(new A.aD0(),null,w),w)},
$S:0}
A.aD0.prototype={
$1(d){return F.Cv},
$S:z+9}
A.aD4.prototype={
$0(){return B.nZ(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aD5.prototype={
$0(){var w=this
return w.a.B2(w.b,w.c,w.d)},
$S:0}
A.aD8.prototype={
$0(){return D.apE},
$S:110}
A.aD7.prototype={
$2(d,e){return new A.Hp(B.i(d),null)},
$S:z+10}
A.aD6.prototype={
$1(d){return new A.IL(d,null)},
$S:z+11}
A.aD_.prototype={
$1(d){var w=null,v=this.a,u=$.ei()
v=B.l("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mk(B.b([B.dI(C.d1,w,w,new A.aCY(u),w,w),B.dW(F.uR,new A.aCZ(u),B.e5(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.uS)},
$S:62}
A.aCY.prototype={
$0(){B.bm(this.a,!1).ds(!1)
return null},
$S:0}
A.aCZ.prototype={
$0(){B.bm(this.a,!1).ds(!0)
return null},
$S:0}
A.ben.prototype={
$0(){var w=this.a.aK(0,$.x1().ghL(),x.V),v=E.aCW()
w.wn(0,v)
return v},
$S:0}
A.beo.prototype={
$0(){var w=this.a.aK(0,$.x1().ghL(),x.V),v=new B.ba(Date.now(),0,!1),u=new E.lv(B.bH(B.aU(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.bep.prototype={
$0(){return this.a.Iu(this.b,this.c)},
$S:0}
A.bem.prototype={
$2(d,e){return new B.or(B.U(d).aOE(B.U(d).ax.aPx(C.h,C.n)),e,null)},
$S:985}
A.bjS.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.e1(),s=A.Nq(!1,C.xz,"Umsatz 7 %",t.ap(u.a),w),r=A.Nq(!1,C.xz,"Umsatz 19 %",t.ap(u.b),w),q=A.Nq(!0,D.a9g,"Umsatz netto",t.ap(u.c),w),p=A.Nq(!1,D.a9f,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aFp(1.7,B.b([s,r,q,p,A.Nq(!0,C.nv,"Ergebnis",n,o<0?C.ag:C.am),A.Nq(!1,C.fg,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,F.lA,!0)},
$S:132}
A.aI0.prototype={
$0(){return D.apB},
$S:110}
A.aI_.prototype={
$2(d,e){var w=null
return B.bK(C.ag,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.h,13,C.k),w,w,w),C.fG,w,C.F,w,3)},
$S:262}
A.aHZ.prototype={
$1(d){return new A.HJ(d,null)},
$S:z+12}
A.bbW.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.e1(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ab(g).i("a9<1,M>"),e=f.i("av.E"),d=B.P(new B.a9(g,new A.bbL(),f),e)
i=A.jx(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.P(new B.a9(g,new A.bbM(),f),e)
d=A.jx(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.P(new B.a9(g,new A.bbN(),f),e)
k=A.jx(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bbO(),f),e)
w=A.jx(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bbP(),f),e)
v=A.jx(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bbQ(),f),e)
u=A.jx(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bbR(),f),e)
t=A.jx(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.P(new B.a9(g,new A.bbS(),f),e)
h=A.jx(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.P(new B.a9(g,new A.bbT(m),f),e)
m=A.jx(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.P(new B.a9(g,new A.bbU(l),f),e)
l=A.jx(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.am(j,1)
j=B.P(new B.a9(g,new A.bbV(j),f),e)
return E.aFp(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jx(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,F.lA,!0)},
$S:132}
A.bbL.prototype={
$1(d){return d.b},
$S:z+0}
A.bbM.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bbN.prototype={
$1(d){return d.d},
$S:z+0}
A.bbO.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbP.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bbQ.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bbR.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbS.prototype={
$1(d){return d.d},
$S:z+0}
A.bbT.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbU.prototype={
$1(d){return this.a},
$S:z+0}
A.bbV.prototype={
$1(d){return this.a},
$S:z+0}
A.bbX.prototype={
$0(){return A.bvi(this.b,1.45,new A.T0(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbY.prototype={
$0(){return A.bvi(this.b,1.6,new A.Tb(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bnV.prototype={
$1(d){var w=this,v=null,u=B.aZ(16),t=x.p,s=B.b([B.au(B.b([B.aO(B.l(w.a,v,v,v,B.c8(C.h,18,C.t),v,v,v),1),B.fd(v,v,D.ab7,v,v,new A.bnU(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.l(w.b,v,v,v,B.D(C.u,12,C.aM),v,v,v),C.Z],t))
s.push(C.w)
s.push(B.ci(new B.mm(w.c,w.d,v),v,17976931348623157e292))
return B.a3f(v,C.m,new B.ag(C.an,B.af(s,C.D,C.f,C.N),v),v,v,v,C.hH,C.uC,v,new B.dh(u,C.A),v)},
$S:986}
A.bnU.prototype={
$0(){return B.bm(this.a,!1).fb()},
$S:0}
A.bbZ.prototype={
$0(){var w=this.a,v=B.b8(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bvi(this.b,2.4,new A.Xd(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bje.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bjf.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bjg.prototype={
$1(d){return A.aIf(null,1.4,null,C.ag,0.35,D.afg,D.Dj,null,!1,!1,!1,!1,D.EE,!1,10,D.Y3,!0,C.lc,B.b([new A.et(0,d),new A.et(this.a,d)],x.U))},
$S:z+14}
A.b37.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b39.prototype={
$2(d,e){var w=null
return B.l(this.a.aJn(d),w,w,w,B.D(C.u,10,C.P),w,w,w)},
$S:z+16}
A.b3a.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zz
return new B.ag(C.kI,B.l(C.c.cT(this.a[v].a,5),w,w,w,B.D(C.u,9,C.P),w,w,w),w)},
$S:z+5}
A.b38.prototype={
$1(d){return D.a7S},
$S:z+6}
A.b3V.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3W.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3X.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3Y.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zz
return new B.ag(C.kI,B.l(this.a[v],w,w,w,B.D(C.h,12,C.t),w,w,w),w)},
$S:z+5}
A.bcs.prototype={
$1(d){return d.d},
$S:z+19}
A.bct.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bl8.prototype={
$1(d){return d.d},
$S:z+20}
A.bl9.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b1C.prototype={
$0(){return D.apJ},
$S:110}
A.b1B.prototype={
$2(d,e){return new A.wn("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b1A.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bK(o,B.af(B.b([B.l("Noch keine Bilanzdaten erfasst.",o,o,o,B.D(C.h,14,C.P),o,o,o),C.Z,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.D(C.u,12.5,C.k),o,o,o),C.w,B.jj(C.Ee,D.aCw,new A.b1w(p.b,p.c),o)],x.p),C.D,C.f,C.i),C.ar,o,C.F,o,3)
w=new A.b1D(d)
v=C.b.fF(p.a.e.d,0,new A.b1x())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jT(new A.b1y(new A.b1E(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.af(B.b([w,C.Z,B.au(B.b([B.aO(B.l("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.D(C.u,11,C.k),o,o,o),1),B.pX(D.abx,D.aBD,new A.b1z(p.b,p.c,d),o)],q),C.l,C.f,C.i,0,o,o)],q),C.aa,C.f,C.i)},
$S:248}
A.b1w.prototype={
$0(){return A.atd(this.a,this.b,null)},
$S:0}
A.b1D.prototype={
$1(d){var w=B.bB(J.a3(this.a,d))
return w==null?null:w},
$S:987}
A.b1E.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.b8(w,".",",")+" %"}return w},
$S:31}
A.b1x.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jx(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fk,o.$1("liquidity1_pct")),m=A.jx(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fk,o.$1("liquidity2_pct")),l=A.jx(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fk,o.$1("liquidity3_pct"))
o=A.jx(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fk,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.b8(w,".",",")+" %"}w=A.jx(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fk,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.e1()
v=u.ap(v)
return E.aFp(p,B.b([n,m,l,o,w,A.jx(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.fk,v)],x.p),q,12,12,F.lA,!0)},
$S:132}
A.b1z.prototype={
$0(){return A.atd(this.a,this.b,this.c)},
$S:0}
A.bnT.prototype={
$1(d){return new A.AL(this.a,new A.bnS(this.b),this.c,null)},
$S:z+22}
A.bnS.prototype={
$0(){var w=this.a,v=$.bxz()
if(w.e==null)B.V(B.Z(y.b))
w.gct().cq(v)},
$S:0}
A.b1r.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1s.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1u.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.tY(u.b,B.bH(2024,1,1,0,0,0,0),null,r,new B.ba(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.L(new A.b1t(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1t.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1v.prototype={
$0(){return B.bm(this.a,!1).fb()},
$S:0}
A.b1F.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1G.prototype={
$1(d){return new A.xj(x.B.a(d),this.a.a.r)},
$S:z+25}
A.avO.prototype={
$1(d){return d.e},
$S:z+26}
A.avP.prototype={
$2(d,e){return d+e},
$S:44}
A.avR.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.avT.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdn(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.avU.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.ad2(v.d,v.e)},
$S:0}
A.avx.prototype={
$1(d){return 0},
$S:988}
A.avw.prototype={
$2(d,e){return B.fh(C.bS,this.a.akG(e),C.r,C.bt,null)},
$S:989}
A.aX4.prototype={
$1(d){return d.a},
$S:z+30}
A.aX5.prototype={
$1(d){return d.b},
$S:z+31}
A.aX6.prototype={
$1(d){return new A.jG(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aX7.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mj||v===D.dC))t=1-t
return new A.jG(d,t*w.d)},
$S:z+33}
A.aX8.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.lk()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.am(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.am(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.am(v/1000,1)
t="K"}else{u=C.d.am(v,r.aiK(Math.abs(s.b-s.c)))
t=""}if(C.c.hG(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nA(d,q.c.b.$2(p,new A.te(u+t,s.e)))},
$S:z+34}
A.aSo.prototype={
$1(d){this.a.l6(new A.a43(d))},
$S:150}
A.aSp.prototype={
$1(d){this.a.l6(new A.a44(d))},
$S:41}
A.aSq.prototype={
$1(d){this.a.l6(new A.a45(d))},
$S:27}
A.aSr.prototype={
$0(){this.a.l6(D.a15)},
$S:0}
A.aSs.prototype={
$1(d){this.a.l6(new A.Mh())},
$S:42}
A.aSt.prototype={
$1(d){this.a.l6(new A.a48(d))},
$S:43}
A.aSu.prototype={
$0(){this.a.l6(D.a16)},
$S:0}
A.aSv.prototype={
$1(d){this.a.l6(new A.Mk(d))},
$S:93}
A.aSw.prototype={
$1(d){this.a.l6(new A.a42(d))},
$S:148}
A.aSx.prototype={
$1(d){this.a.l6(new A.a41(d))},
$S:146}
A.aSy.prototype={
$1(d){return this.a.l6(new A.Mf(d))},
$S:145}
A.aSz.prototype={
$1(d){return this.a.l6(new A.a46(d))},
$S:60}
A.aSA.prototype={
$1(d){return this.a.l6(new A.Mi(d))},
$S:51}
A.bc9.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aPd(w==null?B.b([],x.t):w)},
$S:z+36}
A.bc7.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bc8.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h0(w,new A.bc6())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.FX(w))},
$S:0}
A.bc6.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bca.prototype={
$1(d){return new A.yT(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIg.prototype={
$1(d){return!d.k(0,D.fI)},
$S:z+1}
A.boB.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bzW(t?A.bv6(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tf(w,new A.y9(!0,A.bvS(),new A.boA(v)))},
$S:z+40}
A.boA.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bOp(A.bv6(d,e,f),w,A.bX1(d,e,f))},
$S:z+41}
A.boy.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iU(v,v,u==null?D.dh:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rj(C.d.j(d.b),w)},
$S:z+42}
A.aIi.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aIj.prototype={
$1(d){return!d.k(0,D.fI)},
$S:z+1}
A.aIn.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aIl.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aIm.prototype={
$0(){this.a.ad2(this.b,this.c)},
$S:0}
A.aIo.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avH.prototype={
$1(d){return d.gdn(0)},
$S:z+45}
A.avI.prototype={
$2(d,e){return d+e},
$S:44}
A.avL.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iK(v,B.ab(v).i("iK<1>")).ar(0,new A.avM(w,this.a/(u+1),this.c))},
$S:0}
A.avM.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdn(0)/2
this.c[d]=v
w.a=v+e.gdn(0)/2},
$S:z+2}
A.avJ.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdn(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdn(0)/2},
$S:z+2}
A.avK.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdn(0)/2
this.c[d]=u
u+=e.gdn(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFo.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:990}
A.ayY.prototype={
$1(d){return d},
$S:991}
A.aSJ.prototype={
$2(d,e){return this.a.Ap(d,e)},
$S:22};(function aliases(){var w=A.K3.prototype
w.a_v=w.i4
w.akZ=w.aQV
w.al_=w.acW
w=A.SD.prototype
w.anC=w.l
w=A.Kd.prototype
w.a_w=w.i4
w=A.Fw.prototype
w.a0f=w.Yr})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c_C","bOm",72)
v(A.SF.prototype,"gaDe","HT",23)
u(A.SG.prototype,"garo","arp",8)
t(A,"bZs",3,null,["$3"],["bLH"],49,0)
t(A,"bZt",3,null,["$3"],["bLI"],50,0)
t(A,"bZu",3,null,["$3"],["bLJ"],51,0)
t(A,"bZw",4,null,["$4"],["c_f"],52,0)
w(A,"bZv","c_e",53)
s(A,"bvm","c_g",54)
t(A,"bZn",3,null,["$3"],["bOq"],55,0)
w(A,"Zf","c1D",56)
w(A,"atf","c_j",6)
t(A,"bZp",3,null,["$3"],["bPb"],57,0)
t(A,"bZr",3,null,["$3"],["bUk"],58,0)
t(A,"bZo",3,null,["$3"],["bPa"],59,0)
t(A,"bZq",3,null,["$3"],["bUj"],60,0)
w(A,"c8I","bP9",61)
w(A,"c8J","bUi",62)
r(A.X2.prototype,"ga3R","awQ",29)
u(A.UU.prototype,"gay7","ay8",35)
t(A,"c0w",3,null,["$3"],["bPG"],63,0)
t(A,"c0v",3,null,["$3"],["bLL"],64,0)
w(A,"c0z","c1E",1)
t(A,"bGm",4,null,["$5$size","$4"],["bEO",function(d,e,f,g){return A.bEO(d,e,f,g,null)}],65,0)
s(A,"bvS","c1C",66)
s(A,"bGn","bZa",67)
s(A,"bGq","c_m",68)
s(A,"bGp","c_i",3)
s(A,"bGo","c_h",3)
w(A,"c0y","bG_",70)
w(A,"c0x","bFZ",71)
u(A.PB.prototype,"gaFP","a6r",47)
t(A,"Zk",3,null,["$3"],["c0u"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5B,A.af7,A.ak9,A.Ih,A.IL,A.af5,A.Hp,A.HJ,A.ajt,A.akG,A.TL,A.Xd,A.T0,A.Tb,A.al9,A.ahy,A.BE,A.aqH,A.wn,A.K4,A.Ac])
u(B.A,[A.uz,A.Dw,A.bb,A.ag7,A.afY,A.ag_,A.ag0,A.afS,A.ajd,A.ag3,A.ag1,A.aw2,A.aqL,A.avQ,A.afZ,A.Kd,A.a4E,A.te,A.apb,A.apa,A.afR,A.ajc,A.et,A.aj9,A.ajb,A.anq,A.ak0,A.aro,A.aja,A.aiT,A.aj8,A.avv,A.bc4,A.avy,A.afO,A.nA,A.aj5,A.aj6,A.vp,A.hg,A.akO,A.akR,A.afV,A.ag8,A.afW,A.aj7,A.akU,A.akS,A.aqK,A.ap9,A.aIh,A.akQ,A.v7,A.a0a,A.al0,A.a0k,A.b_B])
u(B.ux,[A.q1,A.vd,A.w5,A.aym,A.azt,A.nT,A.C8,A.nU])
u(B.nF,[A.aCT,A.aCU,A.aCV,A.aDb,A.boN,A.boO,A.bqC,A.boP,A.boM,A.boL,A.aD0,A.aD6,A.aD_,A.aHZ,A.bbL,A.bbM,A.bbN,A.bbO,A.bbP,A.bbQ,A.bbR,A.bbS,A.bbT,A.bbU,A.bbV,A.bnV,A.bjg,A.b38,A.b3V,A.b3W,A.bcs,A.bl8,A.b1A,A.b1D,A.b1E,A.bnT,A.b1G,A.avO,A.avR,A.avx,A.aX4,A.aX5,A.aX6,A.aX7,A.aX8,A.aSo,A.aSp,A.aSq,A.aSs,A.aSt,A.aSv,A.aSw,A.aSx,A.aSy,A.aSz,A.aSA,A.bc9,A.bca,A.aIg,A.boB,A.boA,A.boy,A.aIi,A.aIj,A.avH,A.ayY])
t(A.y7,B.fr)
u(B.xy,[A.aCS,A.aCR,A.aD9,A.aD1,A.aD2,A.aD3,A.aD4,A.aD5,A.aD8,A.aCY,A.aCZ,A.ben,A.beo,A.bep,A.aI0,A.bbX,A.bbY,A.bnU,A.bbZ,A.b1C,A.b1w,A.b1z,A.bnS,A.b1r,A.b1s,A.b1u,A.b1t,A.b1v,A.b1F,A.avU,A.aSr,A.aSu,A.bc7,A.bc8,A.aIl,A.aIm,A.avL])
u(B.xG,[A.y8,A.aml,A.a5C,A.afU])
u(B.xz,[A.aD7,A.bem,A.bjS,A.aI_,A.bbW,A.bje,A.bjf,A.b37,A.b39,A.b3a,A.b3X,A.b3Y,A.bct,A.bl9,A.b1B,A.b1x,A.b1y,A.avP,A.avT,A.avw,A.bc6,A.aIn,A.aIo,A.avI,A.avM,A.avJ,A.avK,A.aFo,A.aSJ])
u(B.O,[A.AL,A.QI])
u(B.a0,[A.SF,A.X2])
u(B.MY,[A.K9,A.NE])
u(B.xb,[A.SG,A.UU])
t(A.a_N,A.ag7)
t(A.afN,A.a_N)
t(A.a_x,A.afN)
u(A.a_x,[A.afX,A.akP])
t(A.nB,A.afX)
u(B.Ua,[A.avF,A.acz,A.Co,A.aCj,A.aI1,A.ML])
t(A.fx,A.afY)
t(A.ib,A.ag_)
t(A.mo,A.ag0)
t(A.a_E,A.afS)
t(A.Ml,A.ajd)
u(A.Ml,[A.ag2,A.akT])
t(A.a_J,A.ag2)
t(A.a_K,A.ag3)
t(A.Cp,A.ag1)
u(A.aw2,[A.Ka,A.NG])
t(A.acB,A.aqL)
t(A.ag4,A.acB)
t(A.a_L,A.ag4)
u(B.b7,[A.xj,A.yT])
t(A.ub,A.afZ)
t(A.K3,A.Kd)
u(A.K3,[A.avS,A.aIk])
u(B.NA,[A.a_H,A.a5P])
u(B.J,[A.Fw,A.afP])
u(A.Fw,[A.a9J,A.a9W])
t(A.pQ,A.apb)
t(A.ab7,A.apa)
t(A.oW,A.afR)
t(A.uB,A.ajc)
t(A.ya,A.aj9)
t(A.ph,A.ajb)
t(A.Ph,A.anq)
t(A.mH,A.ak0)
t(A.n7,A.aro)
u(A.ph,[A.ak_,A.arn])
t(A.kE,A.ak_)
t(A.l2,A.arn)
t(A.a40,A.aja)
u(A.a40,[A.ajZ,A.arm])
t(A.a4P,A.ajZ)
t(A.acZ,A.arm)
t(A.M3,A.aiT)
t(A.uA,A.aj8)
t(A.Me,A.uA)
t(A.ab8,B.fY)
t(A.afQ,A.afP)
t(A.SD,A.afQ)
t(A.a_y,A.SD)
t(A.jG,A.afO)
t(A.a3Y,A.aj5)
t(A.a4_,A.aj6)
u(A.hg,[A.a43,A.a44,A.a45,A.Mg,A.Mh,A.a48,A.Mj,A.Mk,A.a42,A.a41,A.Mf,A.a46,A.a47,A.Mi])
t(A.pu,A.akP)
t(A.e6,A.akO)
t(A.NF,A.akR)
t(A.a_G,A.afV)
t(A.mp,A.ag8)
t(A.K8,A.afW)
t(A.y9,A.aj7)
t(A.Eb,A.akT)
t(A.a5Q,A.akU)
t(A.akN,A.et)
t(A.mM,A.akN)
t(A.q_,A.mM)
t(A.rj,A.akS)
t(A.tf,A.aqK)
t(A.FX,A.ap9)
t(A.yU,A.akQ)
t(A.yX,A.al0)
t(A.PB,B.PO)
t(A.a3U,B.bJ)
w(A.afS,A.bb)
w(A.afX,A.bb)
w(A.afY,A.bb)
w(A.ag_,A.bb)
w(A.ag0,A.bb)
w(A.ag1,A.bb)
w(A.ag2,A.bb)
w(A.ag3,A.bb)
w(A.ag4,A.bb)
w(A.afZ,A.bb)
w(A.afN,A.bb)
w(A.afR,A.bb)
w(A.aiT,A.bb)
w(A.aj8,A.bb)
w(A.aj9,A.bb)
w(A.ajb,A.bb)
w(A.ajc,A.bb)
w(A.ak_,A.bb)
w(A.ajZ,A.bb)
w(A.ak0,A.bb)
w(A.anq,A.bb)
w(A.apa,A.bb)
w(A.apb,A.bb)
w(A.aqL,A.bb)
w(A.arn,A.bb)
w(A.arm,A.bb)
w(A.aro,A.bb)
w(A.afO,A.bb)
v(A.afP,B.aA)
w(A.afQ,B.e_)
v(A.SD,B.a2Z)
w(A.ag7,A.bb)
w(A.aj5,A.bb)
w(A.aj6,A.bb)
w(A.ajd,A.bb)
w(A.afV,A.bb)
w(A.afW,A.bb)
w(A.ag8,A.bb)
w(A.aj7,A.bb)
w(A.aja,A.bb)
w(A.akN,A.bb)
w(A.akO,A.bb)
w(A.akP,A.bb)
w(A.akR,A.bb)
w(A.akS,A.bb)
w(A.akT,A.bb)
w(A.akU,A.bb)
w(A.ap9,A.bb)
w(A.aqK,A.bb)
w(A.akQ,A.bb)
w(A.al0,A.bb)})()
B.bll(b.typeUniverse,JSON.parse('{"a5B":{"a_":[],"c":[]},"Dw":{"aCX":[]},"y7":{"fr":["bg<~>"],"fr.T":"bg<~>"},"IL":{"a_":[],"c":[]},"Hp":{"a_":[],"c":[]},"y8":{"bl":[],"O":[],"c":[]},"af7":{"a_":[],"c":[]},"ak9":{"a_":[],"c":[]},"aml":{"bl":[],"O":[],"c":[]},"Ih":{"a_":[],"c":[]},"af5":{"a_":[],"c":[]},"HJ":{"a_":[],"c":[]},"wn":{"a_":[],"c":[]},"AL":{"O":[],"c":[]},"a5C":{"bl":[],"O":[],"c":[]},"ajt":{"a_":[],"c":[]},"akG":{"a_":[],"c":[]},"TL":{"a_":[],"c":[]},"Xd":{"a_":[],"c":[]},"T0":{"a_":[],"c":[]},"Tb":{"a_":[],"c":[]},"al9":{"a_":[],"c":[]},"ahy":{"a_":[],"c":[]},"BE":{"a_":[],"c":[]},"aqH":{"a_":[],"c":[]},"afU":{"bl":[],"O":[],"c":[]},"SF":{"a0":["AL"]},"K9":{"O":[],"c":[]},"SG":{"a0":["K9"]},"nB":{"bb":[]},"fx":{"bb":[]},"ib":{"bb":[]},"mo":{"bb":[]},"Cp":{"bb":[]},"xj":{"b7":["nB"],"b0":["nB"],"b0.T":"nB","b7.T":"nB"},"a_E":{"bb":[]},"a_J":{"bb":[]},"a_K":{"bb":[]},"a_L":{"bb":[]},"ub":{"bb":[]},"a_H":{"aW":[],"c":[]},"a9J":{"J":[],"I":[],"jg":[],"aQ":[]},"ph":{"bb":[]},"mH":{"bb":[]},"n7":{"bb":[]},"kE":{"bb":[]},"l2":{"bb":[]},"uA":{"bb":[]},"a_x":{"bb":[]},"pQ":{"bb":[]},"ab7":{"bb":[]},"oW":{"bb":[]},"uB":{"bb":[]},"ya":{"bb":[]},"acB":{"bb":[]},"Ph":{"bb":[]},"a4P":{"bb":[]},"acZ":{"bb":[]},"M3":{"bb":[]},"Me":{"bb":[]},"K4":{"a_":[],"c":[]},"QI":{"O":[],"c":[]},"X2":{"a0":["QI"]},"jG":{"bb":[]},"ab8":{"fY":[],"aW":[],"c":[]},"a_y":{"e_":["J","hh"],"J":[],"aA":["J","hh"],"I":[],"aQ":[],"aA.1":"hh","e_.1":"hh","aA.0":"J"},"Ac":{"a_":[],"c":[]},"a_N":{"bb":[]},"a3Y":{"bb":[]},"Ml":{"bb":[]},"a4_":{"bb":[]},"a43":{"hg":[]},"a44":{"hg":[]},"a45":{"hg":[]},"Mg":{"hg":[]},"Mh":{"hg":[]},"a48":{"hg":[]},"Mj":{"hg":[]},"Mk":{"hg":[]},"a42":{"hg":[]},"a41":{"hg":[]},"Mf":{"hg":[]},"a46":{"hg":[]},"a47":{"hg":[]},"Mi":{"hg":[]},"Fw":{"J":[],"I":[],"jg":[],"aQ":[]},"NE":{"O":[],"c":[]},"UU":{"a0":["NE"]},"pu":{"bb":[]},"e6":{"bb":[]},"mp":{"bb":[]},"mM":{"et":[],"bb":[]},"q_":{"mM":[],"et":[],"bb":[]},"rj":{"bb":[]},"tf":{"bb":[]},"FX":{"bb":[]},"yT":{"b7":["pu"],"b0":["pu"],"b0.T":"pu","b7.T":"pu"},"NF":{"bb":[]},"a_G":{"bb":[]},"K8":{"bb":[]},"y9":{"bb":[]},"a40":{"bb":[]},"Eb":{"bb":[]},"a5Q":{"bb":[]},"yU":{"bb":[]},"a5P":{"aW":[],"c":[]},"a9W":{"J":[],"I":[],"jg":[],"aQ":[]},"yX":{"bb":[]},"PB":{"J":[],"bt":["J"],"I":[],"aQ":[]},"a3U":{"bJ":[],"aW":[],"c":[]}}'))
B.bEi(b.typeUniverse,JSON.parse('{"K3":1,"Ml":1,"Kd":1,"Fw":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("C8"),e:w("bg<nT>"),aN:w("bg<nU>"),fM:w("bg<a2<h,@>?>"),b:w("bg<~>"),W:w("jG"),B:w("nB"),dB:w("fx"),T:w("ub"),fj:w("ib"),G:w("mo"),J:w("mp"),k:w("as"),cX:w("a0k<M>"),dO:w("uj"),R:w("ai<h,@>"),v:w("hP"),bz:w("lq<ba>"),f0:w("nK"),E:w("bb"),F:w("y7"),X:w("nT"),P:w("lv"),D:w("uz"),a:w("aCX"),d:w("nU"),cw:w("et"),L:w("hh"),m:w("dg<w,F>"),cm:w("kE"),dv:w("mH"),g:w("B<nA>"),O:w("B<fx>"),Y:w("B<ib>"),C:w("B<bsh>"),U:w("B<et>"),K:w("B<a4E>"),u:w("B<e6>"),bC:w("B<v7>"),aA:w("B<u<et>>"),r:w("B<FX>"),s:w("B<h>"),eg:w("B<tc>"),df:w("B<q_>"),p:w("B<c>"),n:w("B<M>"),t:w("B<w>"),eF:w("be<a0<O>>"),Z:w("mM"),cz:w("e6"),hf:w("pu"),dj:w("yU"),fT:w("rj"),c_:w("ih<oE<bg<~>>>"),x:w("yX<fx>"),y:w("yX<e6>"),I:w("u<w>"),ef:w("vd"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jU"),aU:w("A"),Q:w("vp<nB>"),o:w("vp<pu>"),eo:w("pG"),gJ:w("pH"),V:w("n0<lv>"),N:w("h"),A:w("n2"),bO:w("bP"),er:w("tc"),j:w("w5"),dw:w("q_"),bY:w("tf"),cZ:w("q1"),gc:w("kc"),es:w("l2"),bN:w("n7"),l:w("c"),q:w("wH"),g4:w("iv<M>"),cJ:w("C"),i:w("M"),z:w("@"),S:w("w"),bn:w("xj?"),f3:w("yT?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("kc?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.At=new B.qv(C.n,B.aw("qv<F>"))
D.AA=new A.Co(0,"left")
D.mj=new A.Co(1,"top")
D.AB=new A.Co(2,"right")
D.dC=new A.Co(3,"bottom")
D.ati=new A.pQ(!1,A.bvm(),22,null)
D.kb=new A.oW(16,null,D.ati,!0)
D.a7T=new A.ph(C.B,null,2,null)
D.vG=new A.K8(!1,D.a7T,A.c0z(),!0)
D.a_c=new A.avF(3,"spaceEvenly")
D.a_l=new B.xn(6,"dstIn")
D.Xo=new B.aV(3,3)
D.AF=new B.d3(D.Xo,D.Xo,C.a_,C.a_)
D.a_x=new B.b9(C.B,0,C.R,-1)
D.Bc=new A.a4_()
D.a15=new A.Mg()
D.a16=new A.Mj()
D.aJY=new A.ab7()
D.ajP=w([],B.aw("B<kE>"))
D.ajQ=w([],B.aw("B<l2>"))
D.De=new A.M3(D.ajP,D.ajQ,!0)
D.a7A=new B.es("Zeitraum",!1,null)
D.a7F=new B.es("Konten (SKR 03)",!1,null)
D.xg=new A.aCj(0,"center")
D.aK9=new A.y9(!0,A.bvS(),A.bGm())
D.Dj=new A.y9(!1,A.bvS(),A.bGm())
D.Dk=new A.ya(!1,!0,null,A.atf(),A.Zf(),!0,null,A.atf(),A.Zf())
D.aKa=new A.ya(!0,!0,null,A.atf(),A.Zf(),!0,null,A.atf(),A.Zf())
D.a3p=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3b=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3y=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3t=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2X=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2W=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3T=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3i=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3W=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3Q=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.anJ=new B.dg([50,D.a3p,100,D.a3b,200,D.a3y,300,D.a3t,400,D.a2X,500,D.a2W,600,D.a3T,700,D.a3i,800,D.a3W,900,D.a3Q],x.m)
D.dh=new B.rq(D.anJ,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.agc=w([8,4],x.t)
D.a7R=new A.ph(D.dh,null,0.4,D.agc)
D.a7S=new A.ph(C.al,null,0.5,null)
D.fI=new A.et(0/0,0/0)
D.atk=new A.pQ(!0,A.bvm(),44,null)
D.mk=new A.oW(16,null,D.atk,!0)
D.atj=new A.pQ(!0,A.bvm(),30,null)
D.ml=new A.oW(16,null,D.atj,!0)
D.a7U=new A.uB(!1,D.mk,D.ml,D.mk,D.ml)
D.aKb=new A.uB(!0,D.mk,D.ml,D.mk,D.ml)
D.Ds=new A.ML(0,"left")
D.a8t=new A.ML(1,"center")
D.Dt=new A.ML(2,"right")
D.a8y=new B.ae(57495,"MaterialIcons",null,!1)
D.a9c=new B.ae(58927,"MaterialIcons",null,!1)
D.a9f=new B.ae(59005,"MaterialIcons",null,!0)
D.a9g=new B.ae(59007,"MaterialIcons",null,!0)
D.a9h=new B.ae(59011,"MaterialIcons",null,!1)
D.aa2=new B.ae(62589,"MaterialIcons",null,!1)
D.a9t=new B.ae(61349,"MaterialIcons",null,!1)
D.aaL=new B.aR(D.a9t,20,C.h,null,null)
D.a9z=new B.ae(61487,"MaterialIcons",null,!1)
D.aaN=new B.aR(D.a9z,18,null,null,null)
D.ab7=new B.aR(C.kX,null,C.h,null,null)
D.ab9=new B.aR(C.xt,null,C.u,null,null)
D.abx=new B.aR(C.nz,16,null,null,null)
D.a8J=new B.ae(57912,"MaterialIcons",null,!1)
D.abE=new B.aR(D.a8J,null,C.ag,null,null)
D.adN=new A.a5C(null)
D.aKg=new A.aI1(0,"horizontal")
D.xH=new A.yU(0,0,0,0,!1)
D.EE=new A.NF(0.5)
D.Bg=new A.a5Q()
D.adR=new A.Eb(D.Bg,A.bGq(),10,A.bGn(),!0,A.bGp(),A.bGo(),!1,null,null,null)
D.aKi=new A.Eb(D.Bg,A.bGq(),10,A.bGn(),!0,A.bGp(),A.bGo(),!0,null,null,null)
D.afg=w([4,3],x.t)
D.arC=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ars=new B.aG("receivables","Forderungen (kurzfristig)")
D.arh=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.arf=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.ar5=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.ara=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arz=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.arr=new B.aG("equity","Eigenkapital")
D.GU=w([D.arC,D.ars,D.arh,D.arf,D.ar5,D.ara,D.arz,D.arr],B.aw("B<+(h,h)>"))
D.aKm=w([],x.g)
D.ajB=w([],x.O)
D.ajC=w([],x.Y)
D.ajD=w([],B.aw("B<mo>"))
D.ajE=w([],B.aw("B<mp>"))
D.aKn=w([],x.U)
D.aKo=w([],x.u)
D.ajF=w([],x.r)
D.aok={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T0={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yk=new B.ai(D.T0,[0,0,0,0,0,0,0,C.cF],B.aw("ai<h,A>"))
D.aoi={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.anE=new B.ai(D.aoi,[0,0,0,0],B.aw("ai<h,w>"))
D.aox={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.an1=new B.ai(D.aox,[0,0,0,0,null,null,null,null],B.aw("ai<h,w?>"))
D.amY=new B.ai(D.aok,[D.yk,D.yk,D.yk,C.cF,C.cF,C.cF,D.anE,D.an1],x.R)
D.ane=new B.ai(D.T0,[0,0,0,0,0,0,0,C.cE],x.R)
D.aoh={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.anF=new B.ai(D.aoh,[0,0,0,0,0,0,0,C.cE],x.R)
D.a40=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a48=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3_=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3l=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3v=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4l=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2N=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3n=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3x=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3R=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.anK=new B.dg([50,D.a40,100,D.a48,200,D.a3_,300,D.a3l,400,D.a3v,500,D.a4l,600,D.a2N,700,D.a3n,800,D.a3x,900,D.a3R],x.m)
D.SQ=new B.rq(D.anK,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a72=new B.aj(32,32,32,32)
D.apB=new B.ag(D.a72,C.bD,null)
D.a74=new B.aj(48,48,48,48)
D.apE=new B.ag(D.a74,C.bD,null)
D.apJ=new B.ag(C.an,C.bD,null)
D.ajR=w([],B.aw("B<mH>"))
D.ajS=w([],B.aw("B<n7>"))
D.Xp=new A.Ph(D.ajR,D.ajS)
D.ase=new B.fI("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.asg=new B.fI("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.asi=new B.fI("Automaten-Business","Umsatz je Automat",null,null)
D.asj=new B.fI("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.asl=new B.fI("Top","Meistverkaufte Produkte",null,null)
D.aso=new B.fI("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asp=new B.fI("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y3=new B.rY(C.E,C.p,0)
D.aCg=new B.ak("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.auV=new B.eg(D.aCg,null,null,null,null,null,null,null,null,null,null,null,null,C.O,!1,null,null,null,C.r,null)
D.aBN=new B.ak("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.auW=new B.eg(D.aBN,null,null,null,null,null,null,null,null,null,null,null,null,C.O,!1,null,null,null,C.r,null)
D.aKx=new B.Q(!0,C.B,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBD=new B.ak("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aCw=new B.ak("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zf=new A.acz(0,"auto")
D.aD3=new A.acz(1,"top")
D.aHg=new A.wn("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aHh=new A.wn("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c97","bKw",()=>B.jm(new A.boN(),x.D))
w($,"c98","atU",()=>B.jm(new A.boO(),x.a))
w($,"ca2","x1",()=>B.bu5(new A.bqC(),x.P))
w($,"c99","brk",()=>C.aP.$1$1(new A.boP(),x.d))
w($,"c96","bKv",()=>C.aP.$1$1(new A.boM(),x.X))
w($,"c95","bxz",()=>C.aP.$1$1(new A.boL(),x.h))
w($,"c94","brj",()=>B.aXX(A.c_C(),x.F,x.b))
w($,"c2o","bqX",()=>new A.avv())
v($,"c5C","lk",()=>new A.b_B())})()};
(a=>{a["VWzKbKK8WfmLPcO+SgYjtWuPdX8="]=a.current})($__dart_deferred_initializers__);