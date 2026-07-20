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
bOm(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SJ
w=x.f
v=x.N
u=x.z
t=A.aD9(B.e7(w.a(e.h(a0,"current")),v,u))
s=A.aD9(B.e7(w.a(e.h(a0,"prior_year")),v,u))
r=A.aD9(B.e7(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cF
p=J.d2(p,new A.aCS(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cF
o=J.d2(o,new A.aCT(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cF
q=J.d2(q,new A.aCU(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.e7(w.a(e.h(a0,"customer")),v,u)
m=B.bB(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oJ(n.h(0,"app_gross"))
k=B.bB(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oJ(n.h(0,"avg_basket"))
u=B.e7(w.a(e.h(a0,"derived")),v,u)
v=A.oJ(u.h(0,"gross_margin_pct"))
e=A.oJ(u.h(0,"net_margin_pct"))
w=A.oJ(u.h(0,"ebitda_margin_pct"))
j=A.oJ(u.h(0,"cashflow_operating"))
i=A.bnZ(u.h(0,"revenue_growth_yoy_pct"))
h=A.bnZ(u.h(0,"revenue_growth_mom_pct"))
g=A.bnZ(u.h(0,"result_growth_yoy_pct"))
u=A.bnZ(u.h(0,"result_growth_mom_pct"))
f=B.bB(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nS(t,s,r,p,o,q,new A.ayl(m,l,k,n),new A.azs(v,e,w,j,i,h,g,u),f)},
oJ(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jY(J.al(d))
return w==null?0:w},
bnZ(d){if(d==null)return null
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
ayl:function ayl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azs:function azs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nS:function nS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCS:function aCS(){},
aCT:function aCT(){},
aCU:function aCU(){},
aD9(d){var w=J.Y(d),v=A.tS(w.h(d,"revenue_net_7")),u=A.tS(w.h(d,"revenue_net_19")),t=A.tS(w.h(d,"revenue_net")),s=A.tS(w.h(d,"expense_net")),r=A.tS(w.h(d,"result_net")),q=A.tS(w.h(d,"vat_collected")),p=A.tS(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cF
w=J.d2(w,new A.aDa(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.nT(v,u,t,s,r,q,p,w)},
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
nT:function nT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDa:function aDa(){},
bOl(d){return new A.y7(d,new B.ih(x.c_),C.dB)},
boM:function boM(){},
boN:function boN(){},
bqB:function bqB(){},
boO:function boO(){},
boL:function boL(){},
boK:function boK(){},
y7:function y7(d,e,f){this.r=d
this.a=e
this.f=f},
aCR:function aCR(d,e,f){this.a=d
this.b=e
this.c=f},
aCQ:function aCQ(d,e,f){this.a=d
this.b=e
this.c=f},
bOn(){return new A.y8(null)},
ak9(d,e,f,g,h){return new A.ak8(e,h,g,f,d,null)},
y8:function y8(d){this.a=d},
aD8:function aD8(d){this.a=d},
aD0:function aD0(d,e,f){this.a=d
this.b=e
this.c=f},
aD1:function aD1(d,e,f){this.a=d
this.b=e
this.c=f},
aD2:function aD2(d){this.a=d},
aD_:function aD_(){},
aD3:function aD3(d){this.a=d},
aD4:function aD4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD7:function aD7(){},
aD6:function aD6(){},
aD5:function aD5(){},
aCZ:function aCZ(d,e){this.a=d
this.b=e},
aCX:function aCX(d){this.a=d},
aCY:function aCY(d){this.a=d},
af7:function af7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ak8:function ak8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amk:function amk(d,e){this.e=d
this.a=e},
bem:function bem(d){this.a=d},
ben:function ben(d){this.a=d},
beo:function beo(d,e,f){this.a=d
this.b=e
this.c=f},
bel:function bel(){},
Ih:function Ih(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IL:function IL(d,e){this.c=d
this.a=e},
bjR:function bjR(d){this.a=d},
af5:function af5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hp:function Hp(d,e){this.c=d
this.a=e},
bvh(d,e,f,g,h){var w=null
return B.jE(w,w,!0,w,new A.bnU(h,g,e,f),d,w,!0,!0,x.H)},
jx(d,e,f,g,h,i,j,k,l,m,n){return new A.akF(g,n,i,e,d,m,f,k,l,j,null)},
atc(d,e,f){var w=0,v=B.r(x.H)
var $async$atc=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jE(null,null,!0,null,new A.bnS(f,e,e.aK(0,$.cb(),x.A)),d,null,!0,!0,x.H),$async$atc)
case 2:return B.p(null,v)}})
return B.q($async$atc,v)},
a5C:function a5C(d){this.a=d},
aI_:function aI_(){},
aHZ:function aHZ(){},
aHY:function aHY(){},
HJ:function HJ(d,e){this.c=d
this.a=e},
bbV:function bbV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bbK:function bbK(){},
bbL:function bbL(){},
bbM:function bbM(){},
bbN:function bbN(){},
bbO:function bbO(){},
bbP:function bbP(){},
bbQ:function bbQ(){},
bbR:function bbR(){},
bbS:function bbS(d){this.a=d},
bbT:function bbT(d){this.a=d},
bbU:function bbU(d){this.a=d},
bbW:function bbW(d,e){this.a=d
this.b=e},
bbX:function bbX(d,e){this.a=d
this.b=e},
bnU:function bnU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnT:function bnT(d){this.a=d},
ajs:function ajs(d){this.a=d},
akF:function akF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbY:function bbY(d,e){this.a=d
this.b=e},
TL:function TL(d,e,f){this.c=d
this.d=e
this.a=f},
Xd:function Xd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjd:function bjd(){},
bje:function bje(){},
bjf:function bjf(d){this.a=d},
T0:function T0(d,e,f){this.c=d
this.d=e
this.a=f},
b36:function b36(){},
b38:function b38(d){this.a=d},
b39:function b39(d){this.a=d},
b37:function b37(){},
Tb:function Tb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3U:function b3U(){},
b3V:function b3V(){},
b3W:function b3W(){},
b3X:function b3X(d){this.a=d},
al8:function al8(d,e){this.c=d
this.a=e},
bcr:function bcr(){},
bcs:function bcs(){},
ahy:function ahy(d,e){this.c=d
this.a=e},
BE:function BE(d,e,f){this.c=d
this.d=e
this.a=f},
aqG:function aqG(d,e){this.c=d
this.a=e},
bl7:function bl7(){},
bl8:function bl8(){},
wn:function wn(d,e){this.c=d
this.a=e},
afU:function afU(d,e){this.e=d
this.a=e},
b1B:function b1B(){},
b1A:function b1A(){},
b1z:function b1z(d,e,f){this.a=d
this.b=e
this.c=f},
b1v:function b1v(d,e){this.a=d
this.b=e},
b1C:function b1C(d){this.a=d},
b1D:function b1D(d){this.a=d},
b1w:function b1w(){},
b1x:function b1x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1y:function b1y(d,e,f){this.a=d
this.b=e
this.c=f},
bnS:function bnS(d,e,f){this.a=d
this.b=e
this.c=f},
bnR:function bnR(d){this.a=d},
AL:function AL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SF:function SF(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1q:function b1q(d){this.a=d},
b1r:function b1r(d){this.a=d},
b1t:function b1t(d,e){this.a=d
this.b=e},
b1s:function b1s(d,e){this.a=d
this.b=e},
b1u:function b1u(d){this.a=d},
ba:function ba(){},
byA(d){return new A.K9(d,C.at,C.dr,null,null)},
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
b1E:function b1E(d,e){this.a=d
this.b=e},
b1F:function b1F(d){this.a=d},
avF(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ajz:f,p=a0==null?16:a0,o=d==null?D.a_d:d,n=g==null,m=n?A.brM(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xq:a3
n=n?A.brM(r,r,r,r,r,r,r,r):g
w=j==null?D.De:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.nB(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bc,s,w,i,n)},
avM(d,e,f,g,h){var w=d==null?D.ajA:d,v=e==null?2:e,u=g==null?C.lc:g
return new A.fx(h,f===!0,w,v,u)},
bLG(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avM(A.kj(d.c,e.c,f,A.bZs(),x.fj),B.aa(d.d,e.d,f),!1,A.kj(d.e,e.e,f,A.Zk(),x.S),w)},
a_I(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SR
else w=h
v=m==null
u=v?8:m
t=$.lk()
s=t.aW0(f,v?8:m)
t=t.aW1(g,v?8:m)
v=d==null?A.byy(r,r,r,r,r):d
return new A.ib(q,l,w,j,u,s,e,t,v,k==null?D.ajB:k)},
bLH(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.aa(d.e,e.e,f),q=B.mq(d.f,e.f,f),p=A.kj(d.r,e.r,f,A.Zk(),x.S),o=B.bV(d.w,e.w,f),n=B.aa(d.a,e.a,f),m=B.aa(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aa(w.b,v.b,f)
t=B.aa(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_I(A.byy(v,u,null,!1,t),p,q,o,s,n,null,A.kj(d.y,e.y,f,A.bZt(),x.G),m,r)},
bLI(d,e,f){var w,v,u=B.aa(d.a,e.a,f)
u.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mo(u,w,v,B.bV(d.d,e.d,f))},
byy(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dh
else w=d
return new A.a_E(g===!0,v,u,w,f)},
brM(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_K(4,C.hF,16,D.xg,0,120,A.bZv(),!1,!1,D.Zg,0,C.A,A.bZu())
else w=k
v=j==null?C.kK:j
return new A.a_J(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c_e(d,e,f,g){var w=null,v=B.iU(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cp(C.d.j(f.b),v)},
c_d(d){return A.axM(D.dh,15)},
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
avE:function avE(d,e){this.a=d
this.b=e},
fx:function fx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avN:function avN(){},
avO:function avO(){},
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
avP:function avP(d){this.a=d},
avQ:function avQ(){},
ub:function ub(d,e,f){this.a=d
this.b=e
this.c=f},
afZ:function afZ(){},
avR:function avR(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avS:function avS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avT:function avT(d,e,f,g,h){var _=this
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
c_f(d,e){var w=null
return new A.QI(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
avy(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aa(w.c,v.c,f)
u.toString
return new A.oV(t,e.b,new A.pQ(v.a,v.b,u,B.aa(w.d,v.d,f)),!0)},
bzW(d,e,f){var w=A.avy(d.b,e.b,f),v=A.avy(d.d,e.d,f),u=A.avy(d.e,e.e,f)
return new A.uB(e.a,w,A.avy(d.c,e.c,f),v,u)},
bOp(d,e,f){var w,v
if(d.k(0,D.fG))return e
if(e.k(0,D.fG))return d
w=B.aa(d.a,e.a,f)
w.toString
v=B.aa(d.b,e.b,f)
v.toString
return new A.et(w,v)},
bzU(d,e,f){return new A.ya(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c1C(d){return!0},
c_i(d){return D.a7Q},
bzV(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.ph(w,f,g,e)},
bBQ(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZo(),x.dv)
v.toString
w=A.kj(d.b,e.b,f,A.bZq(),x.bN)
w.toString
return new A.Ph(v,w)},
bPa(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.mH(t,w,v,u)},
bUj(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.n7(t,w,v,u)},
bP9(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pa(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bP7(B.brD(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Zk(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kE(r,e.f,e.r,t,e.x,u,v,w,s)},
bUi(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pa(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bUg(B.brD(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Zk(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l2(r,e.f,e.r,t,e.x,u,v,w,s)},
bP7(d,e,f,g,h,i){return new A.a4P(f,!1,g,i,d,e)},
bP8(d){return C.d.am(d.e,1)},
bUg(d,e,f,g,h,i){return new A.acZ(f,!1,g,i,d,e)},
bUh(d){return C.d.am(d.e,1)},
bzR(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZn(),x.cm)
v.toString
w=A.kj(d.b,e.b,f,A.bZp(),x.es)
w.toString
return new A.M3(v,w,!0)},
bOo(d,e,f){return new A.Me(d,e==null?4:e,f)},
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
oV:function oV(d,e,f,g){var _=this
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
aiS:function aiS(){},
aj7:function aj7(){},
aj8:function aj8(){},
aja:function aja(){},
ajb:function ajb(){},
ajZ:function ajZ(){},
ajY:function ajY(){},
ak_:function ak_(){},
anp:function anp(){},
ap9:function ap9(){},
apa:function apa(){},
aqK:function aqK(){},
arm:function arm(){},
arl:function arl(){},
arn:function arn(){},
avu:function avu(){},
K3:function K3(){},
K4:function K4(d,e,f){this.c=d
this.d=e
this.a=f},
avw:function avw(d){this.a=d},
avv:function avv(d){this.a=d},
QI:function QI(d,e,f){this.c=d
this.e=e
this.a=f},
X2:function X2(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bSR(d,e,f){var w=B.ab(f),v=w.i("a9<1,jG>")
v=B.P(new B.a9(f,new A.aX3(),v),v.i("av.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aX4(),w),w.i("av.E"))
return new A.ab8(e,d,v,w,null)},
bLD(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5s(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tc(v,C.as,C.v,new B.ke(1),v,v,v,v,C.bu,v)
u=new A.a_y(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aH(x.v))
u.bj()
return u},
ab8:function ab8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aX3:function aX3(){},
aX4:function aX4(){},
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
bc3:function bc3(d,e){this.a=d
this.b=e},
avx:function avx(){},
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
aX5:function aX5(d){this.a=d},
aX6:function aX6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aX7:function aX7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3Z(d,e){var w=d==null?B.dn(C.B,1):d
return new A.a3Y(e!==!1,w)},
a_N:function a_N(){},
a3Y:function a3Y(d,e){this.a=d
this.b=e},
Ml:function Ml(){},
a4_:function a4_(){},
aw1:function aw1(){},
aCi:function aCi(d,e){this.a=d
this.b=e},
ag7:function ag7(){},
aj4:function aj4(){},
aj5:function aj5(){},
ajc:function ajc(){},
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
aSn:function aSn(d){this.a=d},
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
bc8:function bc8(d,e){this.a=d
this.b=e},
bc6:function bc6(d){this.a=d},
bc7:function bc7(d,e){this.a=d
this.b=e},
bc5:function bc5(){},
bc9:function bc9(d){this.a=d},
bt2(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.pu(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SR:u
else w=g
v=f==null?A.avD(!1,u,0,u,!1,D.vF):f
w=new A.e6(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avD(!1,u,0,u,!1,D.vF):d,j,a0,i,s,!1,p)
w.aq9(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bPF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aa(d.x,e.x,f)
m.toString
w=A.byz(d.ay,e.ay,f)
v=A.byz(d.ch,e.ch,f)
u=B.aa(d.as,e.as,f)
u.toString
t=e.CW
s=A.kj(d.cy,e.cy,f,A.Zk(),x.S)
r=B.X(d.r,e.r,f)
q=B.r3(d.w,e.w,f)
p=A.kj(d.a,e.a,f,A.bZm(),x.cw)
p.toString
o=B.bCj(d.db,e.db,f)
o.toString
n=B.aa(d.dy.a,e.dy.a,f)
n.toString
return A.aIe(v,m,w,r,e.z,s,new A.y9(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NF(n),!1,u,o,!0,e.cx,p)},
avD(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
else w=e
return new A.a_G(h,w,g,i,f,!1)},
byz(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r3(v.b,u.b,f),r=B.aa(v.c,u.c,f)
r.toString
r=A.bzV(t,A.kj(v.d,u.d,f,A.Zk(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r3(d.c,e.c,f)
v=B.aa(d.e,e.e,f)
v.toString
return A.avD(!1,s,v,u,e.a,new A.K8(!1,r,w.c,!0))},
bLK(d,e,f){var w=B.X(d.c,e.c,f),v=B.r3(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
return new A.mp(e.a,e.b,w,v)},
c1D(d){return!0},
bv5(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kM)return A.bvQ(w.a,A.bsH(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dh:w},
bX0(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kM)w=A.bvQ(v.a,A.bsH(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dh}return A.axM(w,40)},
bEN(d,e,f,g,h){var w,v=A.bv5(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kM)w=A.bvQ(u.a,A.bsH(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dh}u=A.axM(w,40)
return new A.Me(v,h==null?4:h,u)},
c1B(d,e){return!0},
bZ9(d,e){return Math.abs(d.a-e.a)},
c_l(d,e){var w=J.d2(e,new A.boA(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c_h(d,e){return-1/0},
c_g(d,e){return d.a[e].b},
bFZ(d){var w=J.d2(d,new A.box(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bFY(d){return A.axM(D.dh,15)},
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
aIf:function aIf(){},
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
aI0:function aI0(d,e){this.a=d
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
boA:function boA(d){this.a=d},
boz:function boz(d){this.a=d},
a5Q:function a5Q(){},
box:function box(){},
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
aj6:function aj6(){},
aj9:function aj9(){},
akM:function akM(){},
akN:function akN(){},
akO:function akO(){},
akQ:function akQ(){},
akR:function akR(){},
akS:function akS(){},
akT:function akT(){},
ap8:function ap8(){},
aqJ:function aqJ(){},
aIg:function aIg(d){this.a=d},
aIh:function aIh(){},
aIi:function aIi(){},
yU:function yU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akP:function akP(){},
aIj:function aIj(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIm:function aIm(){},
aIk:function aIk(d,e,f){this.a=d
this.b=e
this.c=f},
aIl:function aIl(d,e,f){this.a=d
this.b=e
this.c=f},
aIn:function aIn(){},
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
brL(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bz(o.length,0,!1,x.i),m=B.ab(o),l=new B.a9(o,new A.avG(),m.i("a9<1,M>")).kk(0,new A.avH()),k=e-l,j=new A.avK(k,d,n)
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
new B.iK(o,m.i("iK<1>")).ar(0,new A.avI(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).ar(0,new A.avJ(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avG:function avG(){},
avH:function avH(){},
avK:function avK(d,e,f){this.a=d
this.b=e
this.c=f},
avL:function avL(d,e,f){this.a=d
this.b=e
this.c=f},
avI:function avI(d,e,f){this.a=d
this.b=e
this.c=f},
avJ:function avJ(d,e,f){this.a=d
this.b=e
this.c=f},
bsH(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iK(w,B.ab(w).i("iK<1>")).ar(0,new A.aFn(v,d))
else throw B.e(B.bF('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFn:function aFn(d,e){this.a=d
this.b=e},
ayW(d,e){var w,v
if(e!=null){w=B.ab(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.ayX(),w),w.i("av.E"))
return A.c_9(d,new A.a0k(v,x.cX))}else return d},
ayX:function ayX(){},
bTq(d,e){var w=!0
if(d!==C.eX)if(!(d===C.as&&e===C.v))w=d===C.ig&&e===C.aW
if(w)return D.Ds
else{w=!0
if(d!==C.hm)if(!(d===C.ig&&e===C.v))w=d===C.as&&e===C.aW
if(w)return D.Dt
else return D.a8s}},
ML:function ML(d,e){this.a=d
this.b=e},
a0a:function a0a(d,e){this.a=d
this.b=e},
yX:function yX(d,e){this.a=d
this.$ti=e},
al_:function al_(){},
c_9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.ah().r)
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
if(m!=null)q.hD(m)}p+=n
o=!o}}return l},
a0k:function a0k(d,e){this.a=d
this.b=0
this.$ti=e},
b_A:function b_A(){},
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
aSI:function aSI(d){this.a=d},
a3U:function a3U(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bsv(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fG))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bLN(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geg(v)===0){v=d.a.a
if(v.geg(v)===0){v=d.b.a
if(v.geg(v)===0){v=d.c.a
v=v.geg(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axM(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNq()*w),C.d.b0(d.gFL()*w),C.d.b0(d.gJV()*w))},
bzT(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bsw(d){var w=d.a,v=w?A.aX2(d.b):0,u=w?A.aX2(d.c):0,t=w?A.aX2(d.d):0
return new B.aj(v,u,t,w?A.aX2(d.e):0)},
bQU(d){var w
if(d.c===0){d.seT(null)
w=B.bZ(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bto(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seT(f.mJ(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seT(null)}},
aX2(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kj(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kK(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kK(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c0t(d,e,f){return C.d.b0(d+(e-d)*f)},
bvQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aR:C.l
r=r?C.n:C.al
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cV(t.x,C.n,s,18),C.bg],w))
v.push(B.aO(new B.es(t.c,!1,s),1))
v=B.au(v,C.D,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.Z,B.l(t.d,1,C.aj,s,B.c8(u==null?C.h:u,22,C.P),s,s,s)],w)
return B.bK(r,B.af(w,C.D,C.i2,C.i),q,s,C.am,s,3)}}
A.uz.prototype={
Lh(d){return this.aRK(d)},
aRK(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lh=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eu("finance_summary",B.a5(["p_from",E.qY(d.a),"p_to",E.qY(d.b)],s,r),r),$async$Lh)
case 3:q=f
if(q==null){u=D.anc
w=1
break}if(x.f.b(q)){u=B.e7(q,s,r)
w=1
break}u=D.anD
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
break}u=D.amW
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
o=A.aD9(q)
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
o=A.bOm(q)
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
$iaCW:1}
A.q1.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vd.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayl.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azs.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nS.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.C8.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nT.prototype={
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
return B.k(B.oU(new A.aCR(p,t,r),x.H),$async$GC)
case 3:t.se3(0,f)
q=t.f
if(q.ghm(q)==null){q=$.brj()
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
return B.k(B.oU(new A.aCQ(q,t,s),x.H),$async$La)
case 3:t.se3(0,e)
r=t.f
u=r.ghm(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$La,v)}}
A.y8.prototype={
dt(d,e){var w=null,v=e.aA($.x1(),x.P),u=e.aA($.brj(),x.aN)
return B.k_(B.dZ(B.b([new B.fI("Finanzen","Dashboard",new A.af7(e.aA($.bri(),x.b).gj9(),new A.aD0(this,d,e),new A.aD1(this,d,e),new A.aD2(d),new A.aD3(d),new A.aD4(this,d,e,v),w),w),C.ay,new A.amk(v,w),C.c5,D.adL,C.c5,B.ds(u,new A.aD5(),new A.aD6(),new A.aD7(),!1,!0,!1,x.d,x.l)],x.p),C.cS,w,!1),C.n,new A.aD8(e))},
J5(d,e){return this.aK4(d,e)},
aK4(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J5=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.bri()
w=3
return B.k(e.aK(0,s.ghL(),x.F).GC(0),$async$J5)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ghm(s)
t=d.P(x.q).f
t.bA(B.cg(null,null,null,null,null,C.q,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J5,v)},
B1(d,e){return this.avP(d,e)},
avP(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B1=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aK(0,$.bri().ghL(),x.F).La(),$async$B1)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bA(D.auT)
w=1
break}t=B.pK(C.p,10)
w=4
return B.k($.bI2().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B1)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B1,v)},
B2(d,e,f){return this.aHP(d,e,f)},
aHP(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B2=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jE(null,null,!0,null,new A.aCZ(f,d),d,null,!0,!0,x.cJ),$async$B2)
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
case 8:if(d.e!=null)d.P(x.q).f.bA(F.uJ)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bA(B.cg(null,null,null,null,null,C.q,null,B.l("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B2,v)}}
A.af7.prototype={
u(d){var w=this,v=null,u=A.ak9(C.n,F.hL,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.ak9(v,D.aa1,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.ak9(v,D.a9b,v,s?v:w.d,"sevDesk synchronisieren"),q=A.ak9(C.ag,C.j_,C.ag,s?v:w.e,"PDF-Export")
return B.au(B.b([u,C.bg,t,C.bg,r,C.bg,q,C.bg,A.ak9(v,F.DM,v,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.m,C.f,C.O,0,v,v)}}
A.ak8.prototype={
u(d){var w,v=this,u=null,t=B.aZ(12),s=B.aZ(12),r=B.aZ(12),q=v.w
if(q==null)q=C.al
q=B.dn(q,1)
w=v.r
if(w==null)w=C.h
return B.RT(B.dQ(!1,C.Y,!0,t,B.f2(!1,s,!0,B.bi(u,B.cV(v.c,w,u,20),C.r,u,u,new B.bc(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.aq,0,u,u,u,u,u,C.bB),u,v.d,u,u)}}
A.amk.prototype={
dt(d,e){var w=null,v=this.e,u=$.ei(),t=x.p
return B.bK(w,B.af(B.b([D.a7z,C.Z,B.au(B.b([D.aaJ,C.bb,B.aO(B.l(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,B.D(C.h,16,C.P),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.w,B.q4(C.dl,B.b([new A.Ih("Monat",new A.bem(e),w,w),new A.Ih("Jahr (YTD)",new A.ben(e),w,w),new A.Ih("Zeitraum w\xe4hlen \u2026",new A.beo(this,d,e),D.a9g,w)],t),C.f0,6,8)],t),C.D,C.f,C.i),w,w,C.F,w,3)},
Iu(d,e){return this.aGM(d,e)},
aGM(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iu=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.atu(new A.bel(),d,B.bH(B.aU(t)-5,1,1,0,0,0,0),new B.lq(s.a,s.b,x.bz),B.bH(B.aU(t)+1,1,1,0,0,0,0),C.ef),$async$Iu)
case 2:r=g
if(r!=null)e.aK(0,$.x1().ghL(),x.V).wn(0,new E.lv(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iu,v)}}
A.Ih.prototype={
u(d){var w=null,v=B.aZ(9999),u=B.aZ(9999),t=B.aZ(9999),s=B.dn(C.al,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cV(p,C.h,w,14),C.bg],r))
q.push(B.l(this.c,w,w,w,B.D(C.h,13,C.P),w,w,w))
return B.dQ(!1,C.Y,!0,v,B.f2(!1,u,!0,B.bi(w,B.au(q,C.m,C.f,C.O,0,w,w),C.r,w,w,new B.bc(w,w,s,t,w,w,C.H),w,w,w,w,C.kJ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.aq,0,w,w,w,w,w,C.bB)}}
A.IL.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jT(new A.bjR(this)),C.c5,D.a7E,C.w],r),p=this.c.w
if(p.length===0)q.push(B.bK(s,B.au(B.b([D.ab7,C.aF,B.aO(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.u,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.aq,s,C.F,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.af5(t.a,t.b,t.c==="revenue",t.d,s),C.Z],r))}q.push(B.af(w,C.m,C.f,C.i))}return B.af(q,C.aa,C.f,C.i)}}
A.af5.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aR:C.aq,s=B.dn(u?C.n:C.al,1),r=B.aZ(4),q=w.c
r=B.bi(C.a0,B.l(C.c.a_(q,0,1),v,v,v,B.c8(C.h,14,C.t),v,v,v),C.r,v,v,new B.bc(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.aj,v,B.D(C.h,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aO(B.af(B.b([q,B.l(t,v,v,v,B.D(C.u,12,C.k),v,v,v)],s),C.D,C.f,C.i),1)
q=$.e1().ap(w.f)
return B.bK(v,B.au(B.b([r,C.aF,t,B.l(q,v,v,v,B.D(u?C.aQ:C.h,15,C.P),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.e7,v,3)}}
A.Hp.prototype={
u(d){var w=null
return B.bK(C.ag,B.au(B.b([D.abC,C.aF,B.aO(B.l(this.c,w,w,w,B.D(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fE,w,C.F,w,3)}}
A.a5C.prototype={
dt(d,e){return B.ds(e.aA($.bKu(),x.e),new A.aHY(),new A.aHZ(),new A.aI_(),!1,!0,!1,x.X,x.l)}}
A.HJ.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.asn,C.w,B.jT(new A.bbV(v,q,100-t.w.a,w,p)),C.w,new A.ajs(u),C.ay,D.asm,C.w,new A.afU(t,u),C.ay,D.ash,C.w,B.bD(u,!0,u,B.mG(u,B.bK(u,new A.T0(t,220,u),u,u,C.F,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bbW(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.K,u),C.ay,D.asb,C.w,B.bD(u,!0,u,B.mG(u,new A.Tb(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bbX(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.K,u),C.ay,D.asg,C.w,new A.al8(t,u),C.ay,D.ase,C.w,new A.ahy(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.ay,D.asj,C.w,new A.aqG(t,u)],s))
return B.af(r,C.aa,C.f,C.i)}}
A.ajs.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.u,11,C.k).eH(1.35),w,w,w)}}
A.akF.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ag:C.aQ
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bbY(m,d):l
r=x.p
q=B.b([B.aO(B.l(m.c.toUpperCase(),l,l,l,B.D(C.u,10,C.t).hF(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.dn(C.ag,0.8)
n=B.aZ(4)
q.push(B.bi(l,B.l("Ziel "+p,l,l,l,B.D(C.ag,9,C.t),l,l,l),C.r,l,l,new B.bc(l,l,o,n,l,l,C.H),l,l,l,l,C.n0,l,l,l))}q=B.b([B.au(q,C.m,C.f,C.i,0,l,l),C.aZ,new A.a3U(C.AZ,C.e0,B.l(m.d,l,l,l,B.c8(w,22,C.t),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.aj,l,B.D(C.u,10,C.aL),l,l,l))
q.push(C.cN)
q.push(B.au(B.b([new A.TL("Vormonat",m.r,l),C.cX,new A.TL("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cN)
q.push(B.aO(new A.Xd(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.mG(l,B.bK(l,B.af(q,C.D,C.f,C.i),l,l,C.ds,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.K,l)}}
A.TL.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aZ(4)
return B.bi(r,B.l(this.c+" \u2014",r,r,r,B.D(C.u,9,C.t),r,r,r),C.r,r,r,new B.bc(C.al,r,r,q,r,r,C.H),r,r,r,r,C.n0,r,r,r)}w=q>=0
v=w?C.aQ:C.ag
u=v.lE(0.12)
t=B.dn(v,0.7)
s=B.aZ(4)
return B.bi(r,B.au(B.b([B.cV(w?F.a8y:D.a8x,v,r,10),F.auB,B.l(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.D(v,9,C.t),r,r,r)],x.p),C.m,C.f,C.O,0,r,r),C.r,r,r,new B.bc(u,r,t,s,r,r,C.H),r,r,r,r,C.n0,r,r,r)}}
A.Xd.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.et(v,j[v]))
u=C.b.kk(j,new A.bjd())
t=C.b.kk(j,new A.bje())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bjf(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a3Z(k,!1)
w=B.b([A.aIe(k,2,A.avD(!1,C.n.lE(0.16),0,k,!0,D.vF),C.n,0.35,k,D.Dj,k,!0,!1,!0,!1,D.EF,!1,10,D.Y4,!0,C.lc,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NE(A.bt2(k,k,k,D.ajC,l,D.Bc,D.De,D.Dk,w,D.adP,k,m,k,n,D.Xq,D.ajD,D.a7T),C.at,C.ad,k,k)}}
A.T0.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aHe
w=C.b.fF(p,0,new A.b36())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avM(B.b([A.a_I(q,q,D.AF,q,C.n,q,q,q,r.b,6),A.a_I(q,q,D.AF,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.ci(A.byA(A.avF(q,q,u,q,q,A.a3Z(q,!1),q,new A.ya(!0,!0,q,new A.b37(),A.Zf(),!1,q,A.ate(),A.Zf()),q,v,q,q,new A.uB(!0,new A.oV(16,q,new A.pQ(!0,new A.b38(this),46,q),!0),D.kb,D.kb,new A.oV(16,q,new A.pQ(!0,new A.b39(p),26,q),!0)))),this.d,q)},
aJn(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.Tb.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b3U(),w),x.i)
C.b.M(o,new B.a9(u,new A.b3V(),w))
t=C.b.fF(o,0,new A.b3W())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avM(B.b([A.a_I(q,q,q,q,C.n,q,q,q,v[s],14),A.a_I(q,q,q,q,C.aQ,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ci(A.byA(A.avF(q,q,n,q,q,A.a3Z(q,!1),q,D.Dk,q,o,q,q,new A.uB(!0,D.kb,D.kb,D.kb,new A.oV(16,q,new A.pQ(!0,new A.b3X(p),26,q),!0)))),this.d,q)
return this.e?r:B.bK(q,r,q,q,C.F,q,3)}}
A.al8.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aHd
w=new B.a9(l,new A.bcr(),B.ab(l).i("a9<1,M>")).kk(0,new A.bcs())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.l(r.b,m,m,m,B.D(C.h,14,C.t),m,m,m)
p=$.e1()
o=r.d
n=new B.aV(4,4)
o=B.b([B.au(B.b([new B.pe(1,C.fH,B.af(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,B.D(C.u,12,C.aL),m,m,m)],v),C.D,C.f,C.i),m),C.bb,B.l(p.ap(o),m,m,m,B.c8(C.h,16,C.t),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cN,new B.CR(new B.d3(n,n,n,n),C.bJ,B.a5R(C.al,8,C.d.c4(o/w,0,1),D.At),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zi(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.w)
C.b.M(u,o)}return B.bK(m,B.af(u,C.m,C.f,C.i),m,m,C.F,m,3)}}
A.ahy.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aO(new A.BE("Aktive Kunden",""+s,u),1)
w=B.aO(new A.BE("K\xe4ufe",""+t.a,u),1)
v=$.e1()
return B.bK(u,B.au(B.b([s,w,B.aO(new A.BE("\xd8-Warenkorb",v.ap(t.d),u),1),B.aO(new A.BE("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.m,C.f,C.i,0,u,u),u,u,C.F,u,3)}}
A.BE.prototype={
u(d){var w=null
return B.af(B.b([B.l(this.c.toUpperCase(),w,w,w,B.D(C.u,10,C.t).hF(0.6),w,w,w),C.cM,B.l(this.d,w,w,w,B.c8(C.h,20,C.t),w,w,w)],x.p),C.D,C.f,C.O)}}
A.aqG.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.bl7(),B.ab(q).i("a9<1,M>")).kk(0,new A.bl8()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aV(4,4)
t=B.b([B.au(B.b([new B.pe(1,C.fH,B.l(u.b,1,C.aj,r,B.D(C.h,13,C.t),r,r,r),r),B.l(""+u.c+"\xd7 ",r,r,r,B.D(C.u,12,C.P),r,r,r),B.l($.e1().ap(t),r,r,r,B.D(C.h,13,C.t),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aZ,new B.CR(new B.d3(s,s,s,s),C.bJ,B.a5R(C.al,6,C.d.c4(t/p,0,1),D.At),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zi(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.Z)
C.b.M(n,t)}return B.bK(r,B.af(n,C.m,C.f,C.i),r,r,C.F,r,3)}}
A.wn.prototype={
u(d){var w=null
return B.bK(w,B.l(this.c,w,w,w,B.D(C.u,13,C.k),w,w,w),C.aq,w,C.F,w,3)}}
A.afU.prototype={
dt(d,e){return B.ds(e.aA($.bxy(),x.fM),new A.b1z(this,d,e),new A.b1A(),new A.b1B(),!1,!0,!1,x.h,x.l)}}
A.AL.prototype={
Y(){return new A.SF()},
aWF(){return this.d.$0()}}
A.SF.prototype={
az(){var w,v,u,t,s,r,q=this
q.aQ()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.hc(J.al(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bO)
for(t=0;t<8;++t){s=D.GV[t].a
if(v)r=""
else{r=B.bB(J.a3(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.b7(r,".",",")}u.m(0,s,new B.bP(new B.cR(r,C.bN,C.aS),$.ae()))}q.e!==$&&B.b4()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c3(v,v.r,v.e,B.j(v).i("c3<2>"))
while(v.t()){w=v.d
w.R$=$.ae()
w.S$=0}this.ao()},
rf(d){var w=this.e
w===$&&B.a()
w=C.c.bn(w.h(0,d).a.a)
w=B.b7(w,".","")
w=B.jY(B.b7(w,",","."))
return w==null?0:w},
HT(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HT=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.L(new A.b1q(q))
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
q.c.P(x.q).f.bA(D.auU)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bA(B.cg(null,null,null,null,null,C.q,null,B.l("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.L(new A.b1r(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HT,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c8(C.h,18,C.t),r,r,r),p=s.f?r:new A.b1t(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.jj(D.aaL,B.l("Stichtag: "+C.c.a_(o.eh(),0,10),r,r,r,r,r,r,r),p,r),C.w],w)
for(v=0;v<8;++v){o=D.GV[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.fs(r,C.b1,!1,r,!0,C.q,r,B.fP(),u.h(0,o.a),r,r,r,r,r,2,new B.cf(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b7,r,r,r,r,C.ih,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.F,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.as,r,C.a3,r,r,r,r),C.Z],w))}p.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.u,11,C.k),r,r,r))
p=B.ci(B.f6(B.af(p,C.aa,C.f,C.O),r,C.a6),r,380)
o=s.f
u=B.dI(C.d1,r,r,o?r:new A.b1u(d),r,r)
o=o?r:s.gaDe()
t=B.e5(C.n,C.h,r,r,r,r,r)
return B.mk(B.b([u,B.dW(s.f?F.YB:C.f_,o,t)],w),C.l,p,q)}}
A.ba.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zi(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ex(B.H(this))^B.bGt(this.gbI()))>>>0},
j(d){B.bzP()
return B.H(this).j(0)}}
A.K9.prototype={
Y(){return new A.SG(B.y(x.S,x.I),new A.avP(B.y(x.x,x.T)),null,null)}}
A.SG.prototype={
u(d){var w,v=this,u=v.a1p(),t=v.CW
t.toString
t=v.a1q(t.au(0,v.ghA().gp(0)))
w=v.a1q(u)
v.a.toString
return new A.K4(new A.a_H(t,w,null),u,null)},
a1q(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avM(s.c,s.d,!1,r,s.a))}return d.aOA(w)},
a1p(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Ug(t.ch)
if(r)s=w.a
r=t.y
t=t.aPv(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOB(A.brM(!1,!0,!0,v.d,v.c,u.garo(),v.f,v.e))}return t},
arp(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaeW()||e==null||e.a==null){w=v.cy
v.L(w.gaO_(w))
return}v.L(new A.b1E(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1p(),new A.b1F(w)))}}
A.nB.prototype={
UQ(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avF(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPv(d,e){return this.UQ(null,null,d,e)},
aOB(d){return this.UQ(null,d,null,null)},
aOA(d){return this.UQ(d,null,null,null)},
WM(d,e,f){var w,v,u,t=A.kj(d.ch,e.ch,f,A.bZr(),x.dB),s=B.aa(d.CW,e.CW,f),r=A.bzW(d.d,e.d,f),q=A.bBQ(d.e,e.e,f),p=A.bzU(d.c,e.c,f),o=e.a
o=A.a3Z(B.a_Y(d.a.b,o.b,f),o.a)
w=B.aa(d.y,e.y,f)
v=B.aa(d.x,e.x,f)
u=B.aa(d.z,e.z,f)
r=A.avF(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bzR(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avE.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fx.prototype={
gdn(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avN(),B.ab(v).i("a9<1,M>")).kk(0,new A.avO())
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
hd(d){var w,v=this.a
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
A.avP.prototype={
Ug(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ub(0,0,!1)
v=new A.yX(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ub(t,u,!0)}w=null
try{w=C.b.qd(d,new A.avQ())}catch(s){return new A.ub(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.avR.prototype={
i4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_v(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abw(t,A.brL(w,t.a),u)
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
new B.iK(p,B.ab(p).i("iK<1>")).ar(0,new A.avS(t,q,r,s))
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
u.clipRect(B.dG(b1),$.oN()[1],!0)
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
if(k!=null)n.hD(k)
v.fT(A.ayW(b2,o.r),b3.r)}}}},
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
if(v!==D.aD1)j=v===D.Zg&&s>=q
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
a2.c=a1.b}a9.Vs(d,new A.avT(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.E(v,t))},
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
q=B.Pd(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a_)}else q=B.btJ(w,n.dD(v,j,k),u,n.dD(t,j,k),C.a_)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
W7(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abw(b2,A.brL(a8,b2.a),a8.ch)
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
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.avR()
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
w.r=C.l.gp(0)
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
A.oV.prototype={
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
d.iO(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afN.prototype={}
A.afR.prototype={}
A.aiS.prototype={}
A.aj7.prototype={}
A.aj8.prototype={}
A.aja.prototype={}
A.ajb.prototype={}
A.ajZ.prototype={}
A.ajY.prototype={}
A.ak_.prototype={}
A.anp.prototype={}
A.ap9.prototype={}
A.apa.prototype={}
A.aqK.prototype={}
A.arm.prototype={}
A.arl.prototype={}
A.arn.prototype={}
A.avu.prototype={
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
u=$.bqW().Md(a1.w,v,a1.r,!1,a1.f,!1)
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
u=$.bqW().Md(a1.z,h,a1.y,!1,a1.x,!1)
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
d.a.h9(new B.G(0,0,0+w.a,0+w.b),this.b)},
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
akG(d){var w,v=this,u=null,t=v.d,s=A.bsw(t.d),r=t.a
r=r.a&&A.bLN(r.b)?r.b:u
w=B.b([B.bi(u,v.c,C.r,u,u,new B.bc(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.avw(w)
if(v.gakl())C.b.hs(w,s.$1(!0),new A.Ac(D.AA,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakn())C.b.hs(w,s.$1(!0),new A.Ac(D.mj,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakm())C.b.hs(w,s.$1(!0),new A.Ac(D.AB,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakj())C.b.hs(w,s.$1(!0),new A.Ac(D.dC,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jT(new A.avv(this))}}
A.QI.prototype={
Y(){return new A.X2(new B.bd(null,x.eF))}}
A.X2.prototype={
awO(){switch(this.a.c.a){case 0:return C.e_
case 1:return C.fx
case 2:return C.e0
case 3:return C.fy}},
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
return B.buh(B.b_9(0,B.bi(v.awO(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ab8.prototype={
bl(d){return A.bLD(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_y.prototype={
hi(d){if(!(d.b instanceof B.hh))d.b=new B.hh(null,null,C.p)},
hS(d){if(this.B===C.aG)return this.xT(d)
return this.acx(d)},
aJx(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8r(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dA(d){var w=this.a8q(d,B.ht())
switch(this.B.a){case 0:return d.c1(new B.E(w.a,w.b))
case 1:return d.c1(new B.E(w.b,w.a))}},
a8q(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aG?d.b:d.d,m=o.ag$
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
m=r.aG$}return new A.bc3(n<1/0?n:s,t)},
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
A.bc3.prototype={}
A.avx.prototype={}
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
ghC(){switch(this.c.a){case 0:return C.e0
case 1:return C.fy
case 2:return C.e_
case 3:return C.fx}},
gaZi(){var w=this.d,v=A.bsw(w.d),u=A.bzT(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahk(){var w=this.d,v=A.bzT(w.a),u=A.bsw(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.geo()+v.geo()}},
aVr(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.lk().Oi(d,f-e)
w=p.c
v=w!==D.mj
if((!v||w===D.dC)&&p.d instanceof A.nB){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.brL(u,d)
w=new B.iK(t,B.ab(t).i("iK<1>"))
s=w.giC(w).f0(0,new A.aX5(u),x.W).fW(0)}else{r=$.bqW()
w=!v||w===D.dC
v=p.d
q=r.aUH(w?v.w:v.z,o,f,e)
v=B.o4(q,new A.aX6(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.j(v).i("t.E"))}w=B.ab(s).i("a9<1,nA>")
w=B.P(new B.a9(s,new A.aX7(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bi(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mj
u=!v
t=!u||w===D.dC
s=j.e
r=t?s.a:s.b
t=j.ghC()
s=!u||w===D.dC?C.a6:C.aG
q=B.b([],x.p)
if(w===D.AA||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dC?r:j.gow().c.c
p=!u||w===D.dC?j.gow().c.c:r
o=j.gaZi()
n=!u||w===D.dC?C.aG:C.a6
j.gahk()
m=j.gahk()
l=!u||w===D.dC
k=j.d
l=l?k.f:k.x
u=!u||w===D.dC?k.r:k.y
q.push(B.bi(i,A.bSR(new A.avx(),n,j.aVr(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AB||w===D.dC)j.gow()
return new B.eR(t,i,i,B.bOq(q,C.m,s,i,C.f,C.O,0,i,i,C.c6),i)}}
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
A.aw1.prototype={}
A.aCi.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ag7.prototype={}
A.aj4.prototype={}
A.aj5.prototype={}
A.ajc.prototype={}
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
aen(){var w=this,v=null,u=w.ac=B.btp(v,v)
u.ay=new A.aSn(w)
u.ch=new A.aSo(w)
u.CW=new A.aSp(w)
u.cy=new A.aSq(w)
u.cx=new A.aSr(w)
u=w.aE=B.Gk(v,-1,v)
u.B=new A.aSs(w)
u.a3=new A.aSt(w)
u.V=new A.aSu(w)
u=w.bz=B.a5Y(v,w.a2,v)
u.p3=new A.aSv(w)
u.p4=new A.aSw(w)
u.RG=new A.aSx(w)},
cv(){var w=x.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.E(w.b,w.d)},
dA(d){return new B.E(d.b,d.d)},
kI(d){return!0},
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
w.rC(d)}else if(x.gJ.b(d))v.l5(new A.a47(d))},
gMH(d){return new A.aSy(this)},
gMJ(d){return new A.aSz(this)},
l5(d){var w,v,u=this
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
Y(){return new A.UU(B.b([],x.r),B.y(x.S,x.I),new A.aIg(B.y(x.y,x.dj)),null,null)}}
A.UU.prototype={
u(d){var w,v=this,u=v.a3T(),t=v.CW
t.toString
t=v.aaq(t.au(0,v.ghA().gp(0)))
w=v.aaq(u)
v.a.toString
return new A.K4(new A.a5P(t,w,null),u,null)},
aaq(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ab(w).i("a9<1,e6>")
w=B.P(new B.a9(w,new A.bc8(this,d),v),v.i("av.E"))
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
if(w){v.L(new A.bc6(v))
return}v.L(new A.bc7(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3T(),new A.bc9(w)))}}
A.pu.prototype={
WM(d,e,f){var w,v,u,t,s,r,q=B.aa(d.f,e.f,f),p=B.aa(d.r,e.r,f),o=B.aa(d.w,e.w,f),n=B.aa(d.x,e.x,f),m=B.aa(d.y,e.y,f),l=B.aa(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a3Z(B.a_Y(d.a.b,j.b,f),j.a)
w=A.bzR(d.at,e.at,f)
v=A.bzU(d.c,e.c,f)
u=A.bzW(d.d,e.d,f)
t=A.bBQ(d.e,e.e,f)
s=A.kj(d.ch,e.ch,f,A.c0v(),x.cz)
s.toString
r=A.kj(d.CW,e.CW,f,A.c0u(),x.J)
r.toString
u=A.bt2(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UR(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bt2(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPH(d,e,f,g){return this.UR(null,null,d,e,f,g,null)},
aP6(d){var w=null
return this.UR(w,d,w,w,w,w,w)},
aPs(d,e){var w=null
return this.UR(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e6.prototype={
aq9(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qd(n.a,new A.aIf())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.fG))continue
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
return A.aIe(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
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
A.aI0.prototype={
K(){return"LabelDirection."+this.b}}
A.a40.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Eb.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5Q.prototype={
gbI(){return[4,C.hF,16,D.xg,0,120,A.c0x(),!1,!1,!1,0,C.A,A.c0w()]}}
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
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WM(v,w,d)}}
A.afV.prototype={}
A.afW.prototype={}
A.ag8.prototype={}
A.aj6.prototype={}
A.aj9.prototype={}
A.akM.prototype={}
A.akN.prototype={}
A.akO.prototype={}
A.akQ.prototype={}
A.akR.prototype={}
A.akS.prototype={}
A.akT.prototype={}
A.ap8.prototype={}
A.aqJ.prototype={}
A.aIg.prototype={
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
try{w=C.b.qd(d,new A.aIh())}catch(p){return D.xH}v=null
try{v=C.b.qd(w.a,new A.aIi())}catch(p){return D.xH}o=v.a
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
A.akP.prototype={}
A.aIj.prototype={
i4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaR(0)){v=a3.b
u=v.a
v=v.b
$.ah()
a3.a.jm(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aS())
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
aQP(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bsv(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.YZ(o,e,u,f)
s=p.aiu(o,e,t,u,f)
r=p.Z0(o,e,t,u,f,!0)
q=p.ait(o,e,t,u,f)
p.aQS(d,s,p.YY(o,e,t,u,f,!0),f,e)
p.aQM(d,q,r,f,e)
p.aQQ(d,t,e)
p.aQO(d,t,e,f)}},
aQT(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bsv(a6.a),a9=A.bsv(a7.a)
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
if(!q.k(0,D.fG)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dD(q.b,w,f)
n.$4(q,p/v*100,e,r).acV(s,q,new B.m(p,o))}}},
aR0(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h0(b3,new A.aIm())
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
if(r!=null)s.hD(r)}return g},
Z0(d,e,f,g,h,i){var w,v,u,t,s=this
$.ah()
w=B.bt0(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,t))
w.aB(new B.cs(s.fc(v.h(g,0).a,d,h),s.dD(v.h(g,0).b,d,h)))
w.aB(new B.p3())
return w},
aiu(d,e,f,g,h){return this.Z0(d,e,f,g,h,!1)},
YY(d,e,f,g,h,i){var w,v,u,t=this
$.ah()
w=B.bt0(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,0))
w.aB(new B.cs(t.fc(v.h(g,0).a,d,h),t.dD(v.h(g,0).b,d,h)))
w.aB(new B.p3())
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
A.bto(s,q.b,q.c,new B.G(v,u,t,w.b))
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
A.bto(s,q.b,q.c,new B.G(v,0,u,t))
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
u.z=new B.z1(C.aC,w.c*0.57735+0.5)
d.a.fT(B.bt1(A.ayW(e,f.cy),w.b),this.f)},
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
A.bto(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bQU(t)
d.a.fT(A.ayW(e,f.cy),s.f)},
aQZ(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bFZ(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lk().Zv(b4,u.b)
s=u.a
r=w.k(0,C.iG)?new B.ke(1):w
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
l=p+C.hF.geo()
k=o+(w-1)*4+(C.hF.gcY(0)+C.hF.gd_(0))
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
t=A.bFY(f)
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
s.c=0}b5.Vs(0,new A.aIk(a7,b5,g),a0,d,new B.E(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bTq(q.r,q.w)
A:{if(D.Ds===a5){a6=a3
break A}if(D.Dt===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vs(0,new A.aIl(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.E(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z4(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
W7(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aiW(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h0(t,new A.aIn())
return t.length===0?null:t},
aiW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fG))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dD(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hs(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q_(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v7.prototype={}
A.a5P.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aIj()
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
w.a=D.a_m
t.x=w
w=B.aS()
w.b=C.aU
w.r=C.B.gp(0)
t.y=w
w=B.aS()
w.b=C.bf
w.r=C.l.gp(0)
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
aO6(d){this.a.a.clipRect(B.dG(d),$.oN()[1],!0)
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
this.a.fT(A.ayW(w,g),f)}}
A.yX.prototype={
gbI(){return[this.a]}}
A.al_.prototype={}
A.a0k.prototype={}
A.b_A.prototype={
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
if(d==null)return D.a_y
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
if(u==null)u=C.iM
w=e.a?u.w.c2(e):e
v=B.bR(d,C.vb)
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
shC(d){var w=this
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
if(v!=null){w=v.aq(C.ae,C.iA,v.gdi())
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xG(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xG(w)}}else return new B.E(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var w=this.D$
return w==null?null:w.fK(C.iA,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dH(C.iA,!0)
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
t=B.bvk(m.ae,u,m.gC(0))
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
return d.z6(r,e,v,u,t instanceof B.q0?t:null)}else s.kq(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tt()
w=s.D
w.toString
if(w&&s.eX!==C.r){w=s.cx
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
return d.JO(new A.aSI(v),e,v.cP)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OL()
else{this.Tt()
w=this.cP
w.toString
e.fV(0,w)}}}
A.a3U.prototype={
bl(d){var w=new A.PB(this.e,this.f,B.e3(d),C.r,null,new B.bp(),B.aH(x.v))
w.bj()
w.sc8(null)
return w},
bx(d,e){e.st3(this.e)
e.shC(this.f)
e.scC(B.e3(d))
if(C.r!==e.eX){e.eX=C.r
e.bc()
e.cu()}}}
var z=a.updateTypes(["M(q1)","C(et)","~(w,fx)","M(e6,w)","M(M,q1)","bJ(M,te)","ph(M)","w(q_,q_)","~(hg,Ka?)","xL(z)","Hp(A,bE)","IL(nT)","HJ(nS)","vd(@)","e6(M)","w5(@)","ak(M,te)","C8(@)","uz(dS<uz>)","M(vd)","M(w5)","wn(A,bE)","AL(z)","S<~>()","q1(@)","xj(@)","M(ib)","C(fx)","~(w,ib)","~(@)","jG(nA)","c(nA)","jG(bC<w,M>)","jG(M)","nA(jG)","~(hg,NG?)","e6(e6)","Dw(dS<aCW>)","yT(@)","lv(G7<lv>)","tf(w)","uA(et,M,e6,w)","rj(mM)","C(e6)","w(v7,v7)","M(fx)","S<nT>(cn<nT>)","q0?(ry,m)","w(w,w,M)","fx(fx,fx,M)","ib(ib,ib,M)","mo(mo,mo,M)","Cp?(fx,w,ib,w)","F(fx)","c(M,te)","et(et,et,M)","C(M)","mH(mH,mH,M)","n7(n7,n7,M)","kE(kE,kE,M)","l2(l2,l2,M)","h(kE)","h(l2)","e6(e6,e6,M)","mp(mp,mp,M)","uA(et,M,e6,w{size:M?})","C(et,e6)","M(m,m)","u<tf>(e6,u<w>)","S<nS>(cn<nS>)","u<rj>(u<mM>)","F(mM)","y7(ff<A?>)"])
A.aCS.prototype={
$1(d){var w=B.e7(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q1(J.al(v==null?"":v),A.oJ(w.h(0,"revenue_net")),A.oJ(w.h(0,"expense_net")),A.oJ(w.h(0,"result_net")))},
$S:z+24}
A.aCT.prototype={
$1(d){var w,v,u,t=B.e7(x.f.a(d),x.N,x.z),s=B.ap(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.ap(t.h(0,"code"))
v=A.oJ(t.h(0,"gross"))
u=B.bB(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.vd(s,r,w,v,u,A.oJ(t.h(0,"avg_basket")))},
$S:z+13}
A.aCU.prototype={
$1(d){var w,v=B.e7(x.f.a(d),x.N,x.z),u=B.ap(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.bB(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w5(u,t,w,A.oJ(v.h(0,"gross")))},
$S:z+15}
A.aDa.prototype={
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
A.boM.prototype={
$1(d){return new A.uz(d.aA($.cb(),x.A))},
$S:z+18}
A.boN.prototype={
$1(d){return new A.Dw(d.aA($.bKv(),x.D))},
$S:z+37}
A.bqB.prototype={
$1(d){return E.aCV()},
$S:z+39}
A.boO.prototype={
$1(d){var w=d.aA($.x1(),x.P)
return d.aA($.atT(),x.a).FF(w)},
$S:z+46}
A.boL.prototype={
$1(d){var w=d.aA($.x1(),x.P)
return d.aA($.atT(),x.a).FB(w)},
$S:z+69}
A.boK.prototype={
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
A.aCR.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.atT(),x.a).py(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCQ.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.atT(),x.a).Lb(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD8.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.brj()
if(s.e==null)B.V(B.Z(y.b))
s.gct().cq(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD0.prototype={
$0(){return this.a.J5(this.b,this.c)},
$S:0}
A.aD1.prototype={
$0(){return this.a.B1(this.b,this.c)},
$S:0}
A.aD2.prototype={
$0(){var w=x.z
return B.bm(this.a,!1).eq(B.eJ(new A.aD_(),null,w),w)},
$S:0}
A.aD_.prototype={
$1(d){return F.Cv},
$S:z+9}
A.aD3.prototype={
$0(){return B.nY(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aD4.prototype={
$0(){var w=this
return w.a.B2(w.b,w.c,w.d)},
$S:0}
A.aD7.prototype={
$0(){return D.apC},
$S:110}
A.aD6.prototype={
$2(d,e){return new A.Hp(B.i(d),null)},
$S:z+10}
A.aD5.prototype={
$1(d){return new A.IL(d,null)},
$S:z+11}
A.aCZ.prototype={
$1(d){var w=null,v=this.a,u=$.ei()
v=B.l("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mk(B.b([B.dI(C.d1,w,w,new A.aCX(u),w,w),B.dW(F.uQ,new A.aCY(u),B.e5(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.uR)},
$S:62}
A.aCX.prototype={
$0(){B.bm(this.a,!1).ds(!1)
return null},
$S:0}
A.aCY.prototype={
$0(){B.bm(this.a,!1).ds(!0)
return null},
$S:0}
A.bem.prototype={
$0(){var w=this.a.aK(0,$.x1().ghL(),x.V),v=E.aCV()
w.wn(0,v)
return v},
$S:0}
A.ben.prototype={
$0(){var w=this.a.aK(0,$.x1().ghL(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lv(B.bH(B.aU(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.beo.prototype={
$0(){return this.a.Iu(this.b,this.c)},
$S:0}
A.bel.prototype={
$2(d,e){return new B.oq(B.U(d).aOE(B.U(d).ax.aPx(C.h,C.n)),e,null)},
$S:985}
A.bjR.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.e1(),s=A.Nq(!1,C.xz,"Umsatz 7 %",t.ap(u.a),w),r=A.Nq(!1,C.xz,"Umsatz 19 %",t.ap(u.b),w),q=A.Nq(!0,D.a9f,"Umsatz netto",t.ap(u.c),w),p=A.Nq(!1,D.a9e,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aFo(1.7,B.b([s,r,q,p,A.Nq(!0,C.nu,"Ergebnis",n,o<0?C.ag:C.aQ),A.Nq(!1,C.j1,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,F.lA,!0)},
$S:132}
A.aI_.prototype={
$0(){return D.apz},
$S:110}
A.aHZ.prototype={
$2(d,e){var w=null
return B.bK(C.ag,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.h,13,C.k),w,w,w),C.fE,w,C.F,w,3)},
$S:262}
A.aHY.prototype={
$1(d){return new A.HJ(d,null)},
$S:z+12}
A.bbV.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.e1(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ab(g).i("a9<1,M>"),e=f.i("av.E"),d=B.P(new B.a9(g,new A.bbK(),f),e)
i=A.jx(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.P(new B.a9(g,new A.bbL(),f),e)
d=A.jx(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.P(new B.a9(g,new A.bbM(),f),e)
k=A.jx(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bbN(),f),e)
w=A.jx(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bbO(),f),e)
v=A.jx(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bbP(),f),e)
u=A.jx(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bbQ(),f),e)
t=A.jx(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.P(new B.a9(g,new A.bbR(),f),e)
h=A.jx(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.P(new B.a9(g,new A.bbS(m),f),e)
m=A.jx(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.P(new B.a9(g,new A.bbT(l),f),e)
l=A.jx(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.am(j,1)
j=B.P(new B.a9(g,new A.bbU(j),f),e)
return E.aFo(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jx(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,F.lA,!0)},
$S:132}
A.bbK.prototype={
$1(d){return d.b},
$S:z+0}
A.bbL.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bbM.prototype={
$1(d){return d.d},
$S:z+0}
A.bbN.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbO.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bbP.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bbQ.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbR.prototype={
$1(d){return d.d},
$S:z+0}
A.bbS.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbT.prototype={
$1(d){return this.a},
$S:z+0}
A.bbU.prototype={
$1(d){return this.a},
$S:z+0}
A.bbW.prototype={
$0(){return A.bvh(this.b,1.45,new A.T0(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbX.prototype={
$0(){return A.bvh(this.b,1.6,new A.Tb(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bnU.prototype={
$1(d){var w=this,v=null,u=B.aZ(16),t=x.p,s=B.b([B.au(B.b([B.aO(B.l(w.a,v,v,v,B.c8(C.h,18,C.t),v,v,v),1),B.fd(v,v,D.ab5,v,v,new A.bnT(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.l(w.b,v,v,v,B.D(C.u,12,C.aL),v,v,v),C.Z],t))
s.push(C.w)
s.push(B.ci(new B.mm(w.c,w.d,v),v,17976931348623157e292))
return B.a3f(v,C.l,new B.ag(C.am,B.af(s,C.D,C.f,C.O),v),v,v,v,C.hG,C.uB,v,new B.dg(u,C.A),v)},
$S:986}
A.bnT.prototype={
$0(){return B.bm(this.a,!1).fb()},
$S:0}
A.bbY.prototype={
$0(){var w=this.a,v=B.b7(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bvh(this.b,2.4,new A.Xd(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bjd.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bje.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bjf.prototype={
$1(d){return A.aIe(null,1.4,null,C.ag,0.35,D.afe,D.Dj,null,!1,!1,!1,!1,D.EF,!1,10,D.Y4,!0,C.lc,B.b([new A.et(0,d),new A.et(this.a,d)],x.U))},
$S:z+14}
A.b36.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b38.prototype={
$2(d,e){var w=null
return B.l(this.a.aJn(d),w,w,w,B.D(C.u,10,C.P),w,w,w)},
$S:z+16}
A.b39.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zz
return new B.ag(C.kI,B.l(C.c.cT(this.a[v].a,5),w,w,w,B.D(C.u,9,C.P),w,w,w),w)},
$S:z+5}
A.b37.prototype={
$1(d){return D.a7R},
$S:z+6}
A.b3U.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3V.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3W.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3X.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zz
return new B.ag(C.kI,B.l(this.a[v],w,w,w,B.D(C.h,12,C.t),w,w,w),w)},
$S:z+5}
A.bcr.prototype={
$1(d){return d.d},
$S:z+19}
A.bcs.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bl7.prototype={
$1(d){return d.d},
$S:z+20}
A.bl8.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b1B.prototype={
$0(){return D.apH},
$S:110}
A.b1A.prototype={
$2(d,e){return new A.wn("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b1z.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bK(o,B.af(B.b([B.l("Noch keine Bilanzdaten erfasst.",o,o,o,B.D(C.h,14,C.P),o,o,o),C.Z,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.D(C.u,12.5,C.k),o,o,o),C.w,B.jj(C.Ef,D.aCu,new A.b1v(p.b,p.c),o)],x.p),C.D,C.f,C.i),C.aq,o,C.F,o,3)
w=new A.b1C(d)
v=C.b.fF(p.a.e.d,0,new A.b1w())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jT(new A.b1x(new A.b1D(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.af(B.b([w,C.Z,B.au(B.b([B.aO(B.l("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.D(C.u,11,C.k),o,o,o),1),B.pX(D.abv,D.aBB,new A.b1y(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.aa,C.f,C.i)},
$S:248}
A.b1v.prototype={
$0(){return A.atc(this.a,this.b,null)},
$S:0}
A.b1C.prototype={
$1(d){var w=B.bB(J.a3(this.a,d))
return w==null?null:w},
$S:987}
A.b1D.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.b7(w,".",",")+" %"}return w},
$S:31}
A.b1w.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1x.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jx(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fi,o.$1("liquidity1_pct")),m=A.jx(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fi,o.$1("liquidity2_pct")),l=A.jx(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fi,o.$1("liquidity3_pct"))
o=A.jx(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fi,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.b7(w,".",",")+" %"}w=A.jx(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fi,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.e1()
v=u.ap(v)
return E.aFo(p,B.b([n,m,l,o,w,A.jx(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.fi,v)],x.p),q,12,12,F.lA,!0)},
$S:132}
A.b1y.prototype={
$0(){return A.atc(this.a,this.b,this.c)},
$S:0}
A.bnS.prototype={
$1(d){return new A.AL(this.a,new A.bnR(this.b),this.c,null)},
$S:z+22}
A.bnR.prototype={
$0(){var w=this.a,v=$.bxy()
if(w.e==null)B.V(B.Z(y.b))
w.gct().cq(v)},
$S:0}
A.b1q.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1r.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1t.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.tY(u.b,B.bH(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.L(new A.b1s(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1s.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1u.prototype={
$0(){return B.bm(this.a,!1).fb()},
$S:0}
A.b1E.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1F.prototype={
$1(d){return new A.xj(x.B.a(d),this.a.a.r)},
$S:z+25}
A.avN.prototype={
$1(d){return d.e},
$S:z+26}
A.avO.prototype={
$2(d,e){return d+e},
$S:44}
A.avQ.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.avS.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdn(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.avT.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.ad2(v.d,v.e)},
$S:0}
A.avw.prototype={
$1(d){return 0},
$S:988}
A.avv.prototype={
$2(d,e){return B.fh(C.bS,this.a.akG(e),C.q,C.bt,null)},
$S:989}
A.aX3.prototype={
$1(d){return d.a},
$S:z+30}
A.aX4.prototype={
$1(d){return d.b},
$S:z+31}
A.aX5.prototype={
$1(d){return new A.jG(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aX6.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mj||v===D.dC))t=1-t
return new A.jG(d,t*w.d)},
$S:z+33}
A.aX7.prototype={
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
A.aSn.prototype={
$1(d){this.a.l5(new A.a43(d))},
$S:150}
A.aSo.prototype={
$1(d){this.a.l5(new A.a44(d))},
$S:41}
A.aSp.prototype={
$1(d){this.a.l5(new A.a45(d))},
$S:27}
A.aSq.prototype={
$0(){this.a.l5(D.a16)},
$S:0}
A.aSr.prototype={
$1(d){this.a.l5(new A.Mh())},
$S:42}
A.aSs.prototype={
$1(d){this.a.l5(new A.a48(d))},
$S:43}
A.aSt.prototype={
$0(){this.a.l5(D.a17)},
$S:0}
A.aSu.prototype={
$1(d){this.a.l5(new A.Mk(d))},
$S:93}
A.aSv.prototype={
$1(d){this.a.l5(new A.a42(d))},
$S:148}
A.aSw.prototype={
$1(d){this.a.l5(new A.a41(d))},
$S:146}
A.aSx.prototype={
$1(d){return this.a.l5(new A.Mf(d))},
$S:145}
A.aSy.prototype={
$1(d){return this.a.l5(new A.a46(d))},
$S:60}
A.aSz.prototype={
$1(d){return this.a.l5(new A.Mi(d))},
$S:51}
A.bc8.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aPd(w==null?B.b([],x.t):w)},
$S:z+36}
A.bc6.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bc7.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h0(w,new A.bc5())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.FX(w))},
$S:0}
A.bc5.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bc9.prototype={
$1(d){return new A.yT(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIf.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.boA.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bzV(t?A.bv5(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tf(w,new A.y9(!0,A.bvR(),new A.boz(v)))},
$S:z+40}
A.boz.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bOo(A.bv5(d,e,f),w,A.bX0(d,e,f))},
$S:z+41}
A.box.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iU(v,v,u==null?D.dh:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rj(C.d.j(d.b),w)},
$S:z+42}
A.aIh.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aIi.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.aIm.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aIk.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aIl.prototype={
$0(){this.a.ad2(this.b,this.c)},
$S:0}
A.aIn.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avG.prototype={
$1(d){return d.gdn(0)},
$S:z+45}
A.avH.prototype={
$2(d,e){return d+e},
$S:44}
A.avK.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iK(v,B.ab(v).i("iK<1>")).ar(0,new A.avL(w,this.a/(u+1),this.c))},
$S:0}
A.avL.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdn(0)/2
this.c[d]=v
w.a=v+e.gdn(0)/2},
$S:z+2}
A.avI.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdn(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdn(0)/2},
$S:z+2}
A.avJ.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdn(0)/2
this.c[d]=u
u+=e.gdn(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFn.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:990}
A.ayX.prototype={
$1(d){return d},
$S:991}
A.aSI.prototype={
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
w(A,"c_B","bOl",72)
v(A.SF.prototype,"gaDe","HT",23)
u(A.SG.prototype,"garo","arp",8)
t(A,"bZr",3,null,["$3"],["bLG"],49,0)
t(A,"bZs",3,null,["$3"],["bLH"],50,0)
t(A,"bZt",3,null,["$3"],["bLI"],51,0)
t(A,"bZv",4,null,["$4"],["c_e"],52,0)
w(A,"bZu","c_d",53)
s(A,"bvl","c_f",54)
t(A,"bZm",3,null,["$3"],["bOp"],55,0)
w(A,"Zf","c1C",56)
w(A,"ate","c_i",6)
t(A,"bZo",3,null,["$3"],["bPa"],57,0)
t(A,"bZq",3,null,["$3"],["bUj"],58,0)
t(A,"bZn",3,null,["$3"],["bP9"],59,0)
t(A,"bZp",3,null,["$3"],["bUi"],60,0)
w(A,"c8H","bP8",61)
w(A,"c8I","bUh",62)
r(A.X2.prototype,"ga3R","awQ",29)
u(A.UU.prototype,"gay7","ay8",35)
t(A,"c0v",3,null,["$3"],["bPF"],63,0)
t(A,"c0u",3,null,["$3"],["bLK"],64,0)
w(A,"c0y","c1D",1)
t(A,"bGl",4,null,["$5$size","$4"],["bEN",function(d,e,f,g){return A.bEN(d,e,f,g,null)}],65,0)
s(A,"bvR","c1B",66)
s(A,"bGm","bZ9",67)
s(A,"bGp","c_l",68)
s(A,"bGo","c_h",3)
s(A,"bGn","c_g",3)
w(A,"c0x","bFZ",70)
w(A,"c0w","bFY",71)
u(A.PB.prototype,"gaFP","a6r",47)
t(A,"Zk",3,null,["$3"],["c0t"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5B,A.af7,A.ak8,A.Ih,A.IL,A.af5,A.Hp,A.HJ,A.ajs,A.akF,A.TL,A.Xd,A.T0,A.Tb,A.al8,A.ahy,A.BE,A.aqG,A.wn,A.K4,A.Ac])
u(B.A,[A.uz,A.Dw,A.ba,A.ag7,A.afY,A.ag_,A.ag0,A.afS,A.ajc,A.ag3,A.ag1,A.aw1,A.aqK,A.avP,A.afZ,A.Kd,A.a4E,A.te,A.apa,A.ap9,A.afR,A.ajb,A.et,A.aj8,A.aja,A.anp,A.ak_,A.arn,A.aj9,A.aiS,A.aj7,A.avu,A.bc3,A.avx,A.afO,A.nA,A.aj4,A.aj5,A.vp,A.hg,A.akN,A.akQ,A.afV,A.ag8,A.afW,A.aj6,A.akT,A.akR,A.aqJ,A.ap8,A.aIg,A.akP,A.v7,A.a0a,A.al_,A.a0k,A.b_A])
u(B.ux,[A.q1,A.vd,A.w5,A.ayl,A.azs,A.nS,A.C8,A.nT])
u(B.nF,[A.aCS,A.aCT,A.aCU,A.aDa,A.boM,A.boN,A.bqB,A.boO,A.boL,A.boK,A.aD_,A.aD5,A.aCZ,A.aHY,A.bbK,A.bbL,A.bbM,A.bbN,A.bbO,A.bbP,A.bbQ,A.bbR,A.bbS,A.bbT,A.bbU,A.bnU,A.bjf,A.b37,A.b3U,A.b3V,A.bcr,A.bl7,A.b1z,A.b1C,A.b1D,A.bnS,A.b1F,A.avN,A.avQ,A.avw,A.aX3,A.aX4,A.aX5,A.aX6,A.aX7,A.aSn,A.aSo,A.aSp,A.aSr,A.aSs,A.aSu,A.aSv,A.aSw,A.aSx,A.aSy,A.aSz,A.bc8,A.bc9,A.aIf,A.boA,A.boz,A.box,A.aIh,A.aIi,A.avG,A.ayX])
t(A.y7,B.fr)
u(B.xy,[A.aCR,A.aCQ,A.aD8,A.aD0,A.aD1,A.aD2,A.aD3,A.aD4,A.aD7,A.aCX,A.aCY,A.bem,A.ben,A.beo,A.aI_,A.bbW,A.bbX,A.bnT,A.bbY,A.b1B,A.b1v,A.b1y,A.bnR,A.b1q,A.b1r,A.b1t,A.b1s,A.b1u,A.b1E,A.avT,A.aSq,A.aSt,A.bc6,A.bc7,A.aIk,A.aIl,A.avK])
u(B.xG,[A.y8,A.amk,A.a5C,A.afU])
u(B.xz,[A.aD6,A.bel,A.bjR,A.aHZ,A.bbV,A.bjd,A.bje,A.b36,A.b38,A.b39,A.b3W,A.b3X,A.bcs,A.bl8,A.b1A,A.b1w,A.b1x,A.avO,A.avS,A.avv,A.bc5,A.aIm,A.aIn,A.avH,A.avL,A.avI,A.avJ,A.aFn,A.aSI])
u(B.O,[A.AL,A.QI])
u(B.a0,[A.SF,A.X2])
u(B.MY,[A.K9,A.NE])
u(B.xb,[A.SG,A.UU])
t(A.a_N,A.ag7)
t(A.afN,A.a_N)
t(A.a_x,A.afN)
u(A.a_x,[A.afX,A.akO])
t(A.nB,A.afX)
u(B.Ua,[A.avE,A.acz,A.Co,A.aCi,A.aI0,A.ML])
t(A.fx,A.afY)
t(A.ib,A.ag_)
t(A.mo,A.ag0)
t(A.a_E,A.afS)
t(A.Ml,A.ajc)
u(A.Ml,[A.ag2,A.akS])
t(A.a_J,A.ag2)
t(A.a_K,A.ag3)
t(A.Cp,A.ag1)
u(A.aw1,[A.Ka,A.NG])
t(A.acB,A.aqK)
t(A.ag4,A.acB)
t(A.a_L,A.ag4)
u(B.b6,[A.xj,A.yT])
t(A.ub,A.afZ)
t(A.K3,A.Kd)
u(A.K3,[A.avR,A.aIj])
u(B.NA,[A.a_H,A.a5P])
u(B.J,[A.Fw,A.afP])
u(A.Fw,[A.a9J,A.a9W])
t(A.pQ,A.apa)
t(A.ab7,A.ap9)
t(A.oV,A.afR)
t(A.uB,A.ajb)
t(A.ya,A.aj8)
t(A.ph,A.aja)
t(A.Ph,A.anp)
t(A.mH,A.ak_)
t(A.n7,A.arn)
u(A.ph,[A.ajZ,A.arm])
t(A.kE,A.ajZ)
t(A.l2,A.arm)
t(A.a40,A.aj9)
u(A.a40,[A.ajY,A.arl])
t(A.a4P,A.ajY)
t(A.acZ,A.arl)
t(A.M3,A.aiS)
t(A.uA,A.aj7)
t(A.Me,A.uA)
t(A.ab8,B.fY)
t(A.afQ,A.afP)
t(A.SD,A.afQ)
t(A.a_y,A.SD)
t(A.jG,A.afO)
t(A.a3Y,A.aj4)
t(A.a4_,A.aj5)
u(A.hg,[A.a43,A.a44,A.a45,A.Mg,A.Mh,A.a48,A.Mj,A.Mk,A.a42,A.a41,A.Mf,A.a46,A.a47,A.Mi])
t(A.pu,A.akO)
t(A.e6,A.akN)
t(A.NF,A.akQ)
t(A.a_G,A.afV)
t(A.mp,A.ag8)
t(A.K8,A.afW)
t(A.y9,A.aj6)
t(A.Eb,A.akS)
t(A.a5Q,A.akT)
t(A.akM,A.et)
t(A.mM,A.akM)
t(A.q_,A.mM)
t(A.rj,A.akR)
t(A.tf,A.aqJ)
t(A.FX,A.ap8)
t(A.yU,A.akP)
t(A.yX,A.al_)
t(A.PB,B.PO)
t(A.a3U,B.bJ)
w(A.afS,A.ba)
w(A.afX,A.ba)
w(A.afY,A.ba)
w(A.ag_,A.ba)
w(A.ag0,A.ba)
w(A.ag1,A.ba)
w(A.ag2,A.ba)
w(A.ag3,A.ba)
w(A.ag4,A.ba)
w(A.afZ,A.ba)
w(A.afN,A.ba)
w(A.afR,A.ba)
w(A.aiS,A.ba)
w(A.aj7,A.ba)
w(A.aj8,A.ba)
w(A.aja,A.ba)
w(A.ajb,A.ba)
w(A.ajZ,A.ba)
w(A.ajY,A.ba)
w(A.ak_,A.ba)
w(A.anp,A.ba)
w(A.ap9,A.ba)
w(A.apa,A.ba)
w(A.aqK,A.ba)
w(A.arm,A.ba)
w(A.arl,A.ba)
w(A.arn,A.ba)
w(A.afO,A.ba)
v(A.afP,B.aA)
w(A.afQ,B.e_)
v(A.SD,B.a2Z)
w(A.ag7,A.ba)
w(A.aj4,A.ba)
w(A.aj5,A.ba)
w(A.ajc,A.ba)
w(A.afV,A.ba)
w(A.afW,A.ba)
w(A.ag8,A.ba)
w(A.aj6,A.ba)
w(A.aj9,A.ba)
w(A.akM,A.ba)
w(A.akN,A.ba)
w(A.akO,A.ba)
w(A.akQ,A.ba)
w(A.akR,A.ba)
w(A.akS,A.ba)
w(A.akT,A.ba)
w(A.ap8,A.ba)
w(A.aqJ,A.ba)
w(A.akP,A.ba)
w(A.al_,A.ba)})()
B.blk(b.typeUniverse,JSON.parse('{"a5B":{"a_":[],"c":[]},"Dw":{"aCW":[]},"y7":{"fr":["bf<~>"],"fr.T":"bf<~>"},"IL":{"a_":[],"c":[]},"Hp":{"a_":[],"c":[]},"y8":{"bl":[],"O":[],"c":[]},"af7":{"a_":[],"c":[]},"ak8":{"a_":[],"c":[]},"amk":{"bl":[],"O":[],"c":[]},"Ih":{"a_":[],"c":[]},"af5":{"a_":[],"c":[]},"HJ":{"a_":[],"c":[]},"wn":{"a_":[],"c":[]},"AL":{"O":[],"c":[]},"a5C":{"bl":[],"O":[],"c":[]},"ajs":{"a_":[],"c":[]},"akF":{"a_":[],"c":[]},"TL":{"a_":[],"c":[]},"Xd":{"a_":[],"c":[]},"T0":{"a_":[],"c":[]},"Tb":{"a_":[],"c":[]},"al8":{"a_":[],"c":[]},"ahy":{"a_":[],"c":[]},"BE":{"a_":[],"c":[]},"aqG":{"a_":[],"c":[]},"afU":{"bl":[],"O":[],"c":[]},"SF":{"a0":["AL"]},"K9":{"O":[],"c":[]},"SG":{"a0":["K9"]},"nB":{"ba":[]},"fx":{"ba":[]},"ib":{"ba":[]},"mo":{"ba":[]},"Cp":{"ba":[]},"xj":{"b6":["nB"],"b0":["nB"],"b0.T":"nB","b6.T":"nB"},"a_E":{"ba":[]},"a_J":{"ba":[]},"a_K":{"ba":[]},"a_L":{"ba":[]},"ub":{"ba":[]},"a_H":{"aW":[],"c":[]},"a9J":{"J":[],"I":[],"jg":[],"aQ":[]},"ph":{"ba":[]},"mH":{"ba":[]},"n7":{"ba":[]},"kE":{"ba":[]},"l2":{"ba":[]},"uA":{"ba":[]},"a_x":{"ba":[]},"pQ":{"ba":[]},"ab7":{"ba":[]},"oV":{"ba":[]},"uB":{"ba":[]},"ya":{"ba":[]},"acB":{"ba":[]},"Ph":{"ba":[]},"a4P":{"ba":[]},"acZ":{"ba":[]},"M3":{"ba":[]},"Me":{"ba":[]},"K4":{"a_":[],"c":[]},"QI":{"O":[],"c":[]},"X2":{"a0":["QI"]},"jG":{"ba":[]},"ab8":{"fY":[],"aW":[],"c":[]},"a_y":{"e_":["J","hh"],"J":[],"aA":["J","hh"],"I":[],"aQ":[],"aA.1":"hh","e_.1":"hh","aA.0":"J"},"Ac":{"a_":[],"c":[]},"a_N":{"ba":[]},"a3Y":{"ba":[]},"Ml":{"ba":[]},"a4_":{"ba":[]},"a43":{"hg":[]},"a44":{"hg":[]},"a45":{"hg":[]},"Mg":{"hg":[]},"Mh":{"hg":[]},"a48":{"hg":[]},"Mj":{"hg":[]},"Mk":{"hg":[]},"a42":{"hg":[]},"a41":{"hg":[]},"Mf":{"hg":[]},"a46":{"hg":[]},"a47":{"hg":[]},"Mi":{"hg":[]},"Fw":{"J":[],"I":[],"jg":[],"aQ":[]},"NE":{"O":[],"c":[]},"UU":{"a0":["NE"]},"pu":{"ba":[]},"e6":{"ba":[]},"mp":{"ba":[]},"mM":{"et":[],"ba":[]},"q_":{"mM":[],"et":[],"ba":[]},"rj":{"ba":[]},"tf":{"ba":[]},"FX":{"ba":[]},"yT":{"b6":["pu"],"b0":["pu"],"b0.T":"pu","b6.T":"pu"},"NF":{"ba":[]},"a_G":{"ba":[]},"K8":{"ba":[]},"y9":{"ba":[]},"a40":{"ba":[]},"Eb":{"ba":[]},"a5Q":{"ba":[]},"yU":{"ba":[]},"a5P":{"aW":[],"c":[]},"a9W":{"J":[],"I":[],"jg":[],"aQ":[]},"yX":{"ba":[]},"PB":{"J":[],"bt":["J"],"I":[],"aQ":[]},"a3U":{"bJ":[],"aW":[],"c":[]}}'))
B.bEh(b.typeUniverse,JSON.parse('{"K3":1,"Ml":1,"Kd":1,"Fw":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("C8"),e:w("bf<nS>"),aN:w("bf<nT>"),fM:w("bf<a2<h,@>?>"),b:w("bf<~>"),W:w("jG"),B:w("nB"),dB:w("fx"),T:w("ub"),fj:w("ib"),G:w("mo"),J:w("mp"),k:w("as"),cX:w("a0k<M>"),dO:w("uj"),R:w("ai<h,@>"),v:w("hP"),bz:w("lq<b9>"),f0:w("nK"),E:w("ba"),F:w("y7"),X:w("nS"),P:w("lv"),D:w("uz"),a:w("aCW"),d:w("nT"),cw:w("et"),L:w("hh"),m:w("df<w,F>"),cm:w("kE"),dv:w("mH"),g:w("B<nA>"),O:w("B<fx>"),Y:w("B<ib>"),C:w("B<bsg>"),U:w("B<et>"),K:w("B<a4E>"),u:w("B<e6>"),bC:w("B<v7>"),aA:w("B<u<et>>"),r:w("B<FX>"),s:w("B<h>"),eg:w("B<tc>"),df:w("B<q_>"),p:w("B<c>"),n:w("B<M>"),t:w("B<w>"),eF:w("bd<a0<O>>"),Z:w("mM"),cz:w("e6"),hf:w("pu"),dj:w("yU"),fT:w("rj"),c_:w("ih<oD<bf<~>>>"),x:w("yX<fx>"),y:w("yX<e6>"),I:w("u<w>"),ef:w("vd"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jU"),aU:w("A"),Q:w("vp<nB>"),o:w("vp<pu>"),eo:w("pG"),gJ:w("pH"),V:w("n0<lv>"),N:w("h"),A:w("n2"),bO:w("bP"),er:w("tc"),j:w("w5"),dw:w("q_"),bY:w("tf"),cZ:w("q1"),gc:w("kc"),es:w("l2"),bN:w("n7"),l:w("c"),q:w("wH"),g4:w("iv<M>"),cJ:w("C"),i:w("M"),z:w("@"),S:w("w"),bn:w("xj?"),f3:w("yT?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("kc?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.At=new B.qv(C.n,B.aw("qv<F>"))
D.AA=new A.Co(0,"left")
D.mj=new A.Co(1,"top")
D.AB=new A.Co(2,"right")
D.dC=new A.Co(3,"bottom")
D.atg=new A.pQ(!1,A.bvl(),22,null)
D.kb=new A.oV(16,null,D.atg,!0)
D.a7S=new A.ph(C.B,null,2,null)
D.vF=new A.K8(!1,D.a7S,A.c0y(),!0)
D.a_d=new A.avE(3,"spaceEvenly")
D.a_m=new B.xn(6,"dstIn")
D.Xp=new B.aV(3,3)
D.AF=new B.d3(D.Xp,D.Xp,C.a_,C.a_)
D.a_y=new B.b8(C.B,0,C.R,-1)
D.Bc=new A.a4_()
D.a16=new A.Mg()
D.a17=new A.Mj()
D.aJV=new A.ab7()
D.ajN=w([],B.aw("B<kE>"))
D.ajO=w([],B.aw("B<l2>"))
D.De=new A.M3(D.ajN,D.ajO,!0)
D.a7z=new B.es("Zeitraum",!1,null)
D.a7E=new B.es("Konten (SKR 03)",!1,null)
D.xg=new A.aCi(0,"center")
D.aK6=new A.y9(!0,A.bvR(),A.bGl())
D.Dj=new A.y9(!1,A.bvR(),A.bGl())
D.Dk=new A.ya(!1,!0,null,A.ate(),A.Zf(),!0,null,A.ate(),A.Zf())
D.aK7=new A.ya(!0,!0,null,A.ate(),A.Zf(),!0,null,A.ate(),A.Zf())
D.a3q=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3c=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3z=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3u=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2Y=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2X=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3U=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3j=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3X=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3R=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.anH=new B.df([50,D.a3q,100,D.a3c,200,D.a3z,300,D.a3u,400,D.a2Y,500,D.a2X,600,D.a3U,700,D.a3j,800,D.a3X,900,D.a3R],x.m)
D.dh=new B.rq(D.anH,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aga=w([8,4],x.t)
D.a7Q=new A.ph(D.dh,null,0.4,D.aga)
D.a7R=new A.ph(C.al,null,0.5,null)
D.fG=new A.et(0/0,0/0)
D.ati=new A.pQ(!0,A.bvl(),44,null)
D.mk=new A.oV(16,null,D.ati,!0)
D.ath=new A.pQ(!0,A.bvl(),30,null)
D.ml=new A.oV(16,null,D.ath,!0)
D.a7T=new A.uB(!1,D.mk,D.ml,D.mk,D.ml)
D.aK8=new A.uB(!0,D.mk,D.ml,D.mk,D.ml)
D.Ds=new A.ML(0,"left")
D.a8s=new A.ML(1,"center")
D.Dt=new A.ML(2,"right")
D.a8x=new B.ad(57495,"MaterialIcons",null,!1)
D.a9b=new B.ad(58927,"MaterialIcons",null,!1)
D.a9e=new B.ad(59005,"MaterialIcons",null,!0)
D.a9f=new B.ad(59007,"MaterialIcons",null,!0)
D.a9g=new B.ad(59011,"MaterialIcons",null,!1)
D.aa1=new B.ad(62589,"MaterialIcons",null,!1)
D.a9s=new B.ad(61349,"MaterialIcons",null,!1)
D.aaJ=new B.aR(D.a9s,20,C.h,null,null)
D.a9y=new B.ad(61487,"MaterialIcons",null,!1)
D.aaL=new B.aR(D.a9y,18,null,null,null)
D.ab5=new B.aR(C.kX,null,C.h,null,null)
D.ab7=new B.aR(C.xt,null,C.u,null,null)
D.abv=new B.aR(C.ny,16,null,null,null)
D.a8I=new B.ad(57912,"MaterialIcons",null,!1)
D.abC=new B.aR(D.a8I,null,C.ag,null,null)
D.adL=new A.a5C(null)
D.aKd=new A.aI0(0,"horizontal")
D.xH=new A.yU(0,0,0,0,!1)
D.EF=new A.NF(0.5)
D.Bg=new A.a5Q()
D.adP=new A.Eb(D.Bg,A.bGp(),10,A.bGm(),!0,A.bGo(),A.bGn(),!1,null,null,null)
D.aKf=new A.Eb(D.Bg,A.bGp(),10,A.bGm(),!0,A.bGo(),A.bGn(),!0,null,null,null)
D.afe=w([4,3],x.t)
D.arA=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.arq=new B.aG("receivables","Forderungen (kurzfristig)")
D.arf=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.ard=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.ar3=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.ar8=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arx=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.arp=new B.aG("equity","Eigenkapital")
D.GV=w([D.arA,D.arq,D.arf,D.ard,D.ar3,D.ar8,D.arx,D.arp],B.aw("B<+(h,h)>"))
D.aKj=w([],x.g)
D.ajz=w([],x.O)
D.ajA=w([],x.Y)
D.ajB=w([],B.aw("B<mo>"))
D.ajC=w([],B.aw("B<mp>"))
D.aKk=w([],x.U)
D.aKl=w([],x.u)
D.ajD=w([],x.r)
D.aoi={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T1={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yk=new B.ai(D.T1,[0,0,0,0,0,0,0,C.cF],B.aw("ai<h,A>"))
D.aog={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.anC=new B.ai(D.aog,[0,0,0,0],B.aw("ai<h,w>"))
D.aov={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.an_=new B.ai(D.aov,[0,0,0,0,null,null,null,null],B.aw("ai<h,w?>"))
D.amW=new B.ai(D.aoi,[D.yk,D.yk,D.yk,C.cF,C.cF,C.cF,D.anC,D.an_],x.R)
D.anc=new B.ai(D.T1,[0,0,0,0,0,0,0,C.cE],x.R)
D.aof={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.anD=new B.ai(D.aof,[0,0,0,0,0,0,0,C.cE],x.R)
D.a41=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a49=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a30=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3m=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3w=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4m=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2O=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3o=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3y=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3S=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.anI=new B.df([50,D.a41,100,D.a49,200,D.a30,300,D.a3m,400,D.a3w,500,D.a4m,600,D.a2O,700,D.a3o,800,D.a3y,900,D.a3S],x.m)
D.SR=new B.rq(D.anI,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a73=new B.aj(32,32,32,32)
D.apz=new B.ag(D.a73,C.bD,null)
D.a75=new B.aj(48,48,48,48)
D.apC=new B.ag(D.a75,C.bD,null)
D.apH=new B.ag(C.am,C.bD,null)
D.ajP=w([],B.aw("B<mH>"))
D.ajQ=w([],B.aw("B<n7>"))
D.Xq=new A.Ph(D.ajP,D.ajQ)
D.asb=new B.fI("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ase=new B.fI("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.asg=new B.fI("Automaten-Business","Umsatz je Automat",null,null)
D.ash=new B.fI("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.asj=new B.fI("Top","Meistverkaufte Produkte",null,null)
D.asm=new B.fI("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asn=new B.fI("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y4=new B.rY(C.E,C.p,0)
D.aCe=new B.ak("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.auT=new B.eg(D.aCe,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.q,null)
D.aBL=new B.ak("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.auU=new B.eg(D.aBL,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.q,null)
D.aKu=new B.Q(!0,C.B,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBB=new B.ak("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aCu=new B.ak("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zg=new A.acz(0,"auto")
D.aD1=new A.acz(1,"top")
D.aHd=new A.wn("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aHe=new A.wn("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c96","bKv",()=>B.jm(new A.boM(),x.D))
w($,"c97","atT",()=>B.jm(new A.boN(),x.a))
w($,"ca1","x1",()=>B.bu4(new A.bqB(),x.P))
w($,"c98","brj",()=>C.aO.$1$1(new A.boO(),x.d))
w($,"c95","bKu",()=>C.aO.$1$1(new A.boL(),x.X))
w($,"c94","bxy",()=>C.aO.$1$1(new A.boK(),x.h))
w($,"c93","bri",()=>B.aXW(A.c_B(),x.F,x.b))
w($,"c2n","bqW",()=>new A.avu())
v($,"c5B","lk",()=>new A.b_A())})()};
(a=>{a["6KnwlGrL9UTjDnvPXWW5bpvCApg="]=a.current})($__dart_deferred_initializers__);