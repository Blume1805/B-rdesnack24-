((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nn(d,e,f,g,h){return new A.a5y(f,g,d,h,e,null)},
a5y:function a5y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uz:function uz(d){this.a=d},
Dt:function Dt(d){this.a=d},
bOa(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SF
w=x.f
v=x.N
u=x.z
t=A.aD0(B.ee(w.a(e.h(a0,"current")),v,u))
s=A.aD0(B.ee(w.a(e.h(a0,"prior_year")),v,u))
r=A.aD0(B.ee(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cF
p=J.d3(p,new A.aCM(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cF
o=J.d3(o,new A.aCN(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cF
q=J.d3(q,new A.aCO(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.ee(w.a(e.h(a0,"customer")),v,u)
m=B.bD(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oJ(n.h(0,"app_gross"))
k=B.bD(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oJ(n.h(0,"avg_basket"))
u=B.ee(w.a(e.h(a0,"derived")),v,u)
v=A.oJ(u.h(0,"gross_margin_pct"))
e=A.oJ(u.h(0,"net_margin_pct"))
w=A.oJ(u.h(0,"ebitda_margin_pct"))
j=A.oJ(u.h(0,"cashflow_operating"))
i=A.bnN(u.h(0,"revenue_growth_yoy_pct"))
h=A.bnN(u.h(0,"revenue_growth_mom_pct"))
g=A.bnN(u.h(0,"result_growth_yoy_pct"))
u=A.bnN(u.h(0,"result_growth_mom_pct"))
f=B.bD(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nR(t,s,r,p,o,q,new A.ayf(m,l,k,n),new A.azm(v,e,w,j,i,h,g,u),f)},
oJ(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jX(J.ak(d))
return w==null?0:w},
bnN(d){if(d==null)return null
if(typeof d=="number")return d
return B.jX(J.ak(d))},
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
ayf:function ayf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azm:function azm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nR:function nR(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCM:function aCM(){},
aCN:function aCN(){},
aCO:function aCO(){},
aD0(d){var w=J.Y(d),v=A.tS(w.h(d,"revenue_net_7")),u=A.tS(w.h(d,"revenue_net_19")),t=A.tS(w.h(d,"revenue_net")),s=A.tS(w.h(d,"expense_net")),r=A.tS(w.h(d,"result_net")),q=A.tS(w.h(d,"vat_collected")),p=A.tS(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cF
w=J.d3(w,new A.aD1(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.nS(v,u,t,s,r,q,p,w)},
tS(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jX(J.ak(d))
return w==null?0:w},
C5:function C5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nS:function nS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aD1:function aD1(){},
bO9(d){return new A.y4(d,new B.ig(x.c_),C.dA)},
boz:function boz(){},
boA:function boA(){},
bqo:function bqo(){},
boB:function boB(){},
boy:function boy(){},
box:function box(){},
y4:function y4(d,e,f){this.r=d
this.a=e
this.f=f},
aCL:function aCL(d,e,f){this.a=d
this.b=e
this.c=f},
aCK:function aCK(d,e,f){this.a=d
this.b=e
this.c=f},
bOb(){return new A.y5(null)},
bat(d,e,f,g,h){return new A.ak4(e,h,g,f,d,null)},
y5:function y5(d){this.a=d},
aD_:function aD_(d){this.a=d},
aCT:function aCT(d,e,f){this.a=d
this.b=e
this.c=f},
aCU:function aCU(d,e,f){this.a=d
this.b=e
this.c=f},
aCV:function aCV(d){this.a=d},
aCW:function aCW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCZ:function aCZ(){},
aCY:function aCY(){},
aCX:function aCX(){},
aCS:function aCS(d,e){this.a=d
this.b=e},
aCQ:function aCQ(d){this.a=d},
aCR:function aCR(d){this.a=d},
af3:function af3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ak4:function ak4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amf:function amf(d,e){this.e=d
this.a=e},
bea:function bea(d){this.a=d},
beb:function beb(d){this.a=d},
bec:function bec(d,e,f){this.a=d
this.b=e
this.c=f},
be9:function be9(){},
Id:function Id(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
II:function II(d,e){this.c=d
this.a=e},
bjF:function bjF(d){this.a=d},
af1:function af1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hl:function Hl(d,e){this.c=d
this.a=e},
bv6(d,e,f,g,h){var w=null
return B.jC(w,w,!0,w,new A.bnI(h,g,e,f),d,w,!0,!0,x.H)},
kd(d,e,f,g,h,i,j,k,l,m,n){return new A.akA(g,n,i,e,d,m,f,k,l,j,null)},
at7(d,e,f){var w=0,v=B.r(x.H)
var $async$at7=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jC(null,null,!0,null,new A.bnG(f,e,e.aK(0,$.cd(),x.A)),d,null,!0,!0,x.H),$async$at7)
case 2:return B.p(null,v)}})
return B.q($async$at7,v)},
a5z:function a5z(d){this.a=d},
aHR:function aHR(){},
aHQ:function aHQ(){},
aHP:function aHP(){},
HF:function HF(d,e){this.c=d
this.a=e},
bbJ:function bbJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbz:function bbz(){},
bbA:function bbA(){},
bbB:function bbB(){},
bbC:function bbC(){},
bbD:function bbD(){},
bbE:function bbE(){},
bbF:function bbF(){},
bbG:function bbG(){},
bbH:function bbH(d){this.a=d},
bbI:function bbI(d){this.a=d},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbL:function bbL(d,e){this.a=d
this.b=e},
bnI:function bnI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnH:function bnH(d){this.a=d},
ajo:function ajo(d){this.a=d},
akA:function akA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbM:function bbM(d,e){this.a=d
this.b=e},
TI:function TI(d,e,f){this.c=d
this.d=e
this.a=f},
Xa:function Xa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bj1:function bj1(){},
bj2:function bj2(){},
bj3:function bj3(d){this.a=d},
SZ:function SZ(d,e,f){this.c=d
this.d=e
this.a=f},
b2Z:function b2Z(){},
b30:function b30(d){this.a=d},
b31:function b31(d){this.a=d},
b3_:function b3_(){},
T9:function T9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3M:function b3M(){},
b3N:function b3N(){},
b3O:function b3O(){},
b3P:function b3P(d){this.a=d},
al3:function al3(d,e){this.c=d
this.a=e},
bcf:function bcf(){},
bcg:function bcg(){},
ahu:function ahu(d,e){this.c=d
this.a=e},
Ix:function Ix(d,e,f){this.c=d
this.d=e
this.a=f},
aqB:function aqB(d,e){this.c=d
this.a=e},
bkW:function bkW(){},
bkX:function bkX(){},
wn:function wn(d,e){this.c=d
this.a=e},
afQ:function afQ(d,e){this.e=d
this.a=e},
b1t:function b1t(){},
b1s:function b1s(){},
b1r:function b1r(d,e,f){this.a=d
this.b=e
this.c=f},
b1n:function b1n(d,e){this.a=d
this.b=e},
b1u:function b1u(d){this.a=d},
b1v:function b1v(d){this.a=d},
b1o:function b1o(){},
b1p:function b1p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1q:function b1q(d,e,f){this.a=d
this.b=e
this.c=f},
bnG:function bnG(d,e,f){this.a=d
this.b=e
this.c=f},
bnF:function bnF(d){this.a=d},
AI:function AI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SD:function SD(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1i:function b1i(d){this.a=d},
b1j:function b1j(d){this.a=d},
b1l:function b1l(d,e){this.a=d
this.b=e},
b1k:function b1k(d,e){this.a=d
this.b=e},
b1m:function b1m(d){this.a=d},
b7:function b7(){},
byo(d){return new A.K6(d,C.as,C.dr,null,null)},
K6:function K6(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SE:function SE(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cR$=g
_.c=_.a=null},
b1w:function b1w(d,e){this.a=d
this.b=e},
b1x:function b1x(d){this.a=d},
avz(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ajs:f,p=a0==null?16:a0,o=d==null?D.a_8:d,n=g==null,m=n?A.brA(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xm:a3
n=n?A.brA(r,r,r,r,r,r,r,r):g
w=j==null?D.Dd:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.nz(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bc,s,w,i,n)},
avG(d,e,f,g,h){var w=d==null?D.ajt:d,v=e==null?2:e,u=g==null?C.lc:g
return new A.fw(h,f===!0,w,v,u)},
bLu(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avG(A.kj(d.c,e.c,f,A.bZg(),x.fj),B.aa(d.d,e.d,f),!1,A.kj(d.e,e.e,f,A.Zh(),x.S),w)},
a_F(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SN
else w=h
v=m==null
u=v?8:m
t=$.lk()
s=t.aVW(f,v?8:m)
t=t.aVX(g,v?8:m)
v=d==null?A.bym(r,r,r,r,r):d
return new A.i9(q,l,w,j,u,s,e,t,v,k==null?D.aju:k)},
bLv(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.aa(d.e,e.e,f),q=B.mo(d.f,e.f,f),p=A.kj(d.r,e.r,f,A.Zh(),x.S),o=B.bV(d.w,e.w,f),n=B.aa(d.a,e.a,f),m=B.aa(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aa(w.b,v.b,f)
t=B.aa(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_F(A.bym(v,u,null,!1,t),p,q,o,s,n,null,A.kj(d.y,e.y,f,A.bZh(),x.G),m,r)},
bLw(d,e,f){var w,v,u=B.aa(d.a,e.a,f)
u.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mm(u,w,v,B.bV(d.d,e.d,f))},
bym(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dh
else w=d
return new A.a_B(g===!0,v,u,w,f)},
brA(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_H(4,C.hF,16,D.xg,0,120,A.bZj(),!1,!1,D.Zb,0,C.A,A.bZi())
else w=k
v=j==null?C.kK:j
return new A.a_G(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c_1(d,e,f,g){var w=null,v=B.iU(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cm(C.d.j(f.b),v)},
c_0(d){return A.axG(D.dh,15)},
nz:function nz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avy:function avy(d,e){this.a=d
this.b=e},
fw:function fw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avH:function avH(){},
avI:function avI(){},
i9:function i9(d,e,f,g,h,i,j,k,l,m){var _=this
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
mm:function mm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_B:function a_B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_G:function a_G(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acv:function acv(d,e){this.a=d
this.b=e},
a_H:function a_H(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cm:function Cm(d,e){this.a=d
this.b=e},
K7:function K7(d){this.a=d},
a_I:function a_I(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xi:function xi(d,e){this.a=d
this.b=e},
afO:function afO(){},
afT:function afT(){},
afU:function afU(){},
afW:function afW(){},
afX:function afX(){},
afY:function afY(){},
afZ:function afZ(){},
ag_:function ag_(){},
ag0:function ag0(){},
avJ:function avJ(d){this.a=d},
avK:function avK(){},
ub:function ub(d,e,f){this.a=d
this.b=e
this.c=f},
afV:function afV(){},
avL:function avL(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avM:function avM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avN:function avN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4B:function a4B(d){this.b=d},
a_E:function a_E(d,e,f){this.d=d
this.e=e
this.a=f},
a9F:function a9F(d,e,f,g,h,i,j,k){var _=this
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
c_2(d,e){var w=null
return new A.QG(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
avs(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aa(w.c,v.c,f)
u.toString
return new A.oV(t,e.b,new A.pQ(v.a,v.b,u,B.aa(w.d,v.d,f)),!0)},
bzK(d,e,f){var w=A.avs(d.b,e.b,f),v=A.avs(d.d,e.d,f),u=A.avs(d.e,e.e,f)
return new A.uB(e.a,w,A.avs(d.c,e.c,f),v,u)},
bOd(d,e,f){var w,v
if(d.k(0,D.fG))return e
if(e.k(0,D.fG))return d
w=B.aa(d.a,e.a,f)
w.toString
v=B.aa(d.b,e.b,f)
v.toString
return new A.et(w,v)},
bzI(d,e,f){return new A.y7(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c1p(d){return!0},
c_5(d){return D.a7L},
bzJ(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.ph(w,f,g,e)},
bBE(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZc(),x.dv)
v.toString
w=A.kj(d.b,e.b,f,A.bZe(),x.bN)
w.toString
return new A.Pf(v,w)},
bOZ(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.mG(t,w,v,u)},
bU7(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.n5(t,w,v,u)},
bOY(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pa(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bOW(B.brr(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Zh(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kE(r,e.f,e.r,t,e.x,u,v,w,s)},
bU6(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pa(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bU4(B.brr(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Zh(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l2(r,e.f,e.r,t,e.x,u,v,w,s)},
bOW(d,e,f,g,h,i){return new A.a4M(f,!1,g,i,d,e)},
bOX(d){return C.d.am(d.e,1)},
bU4(d,e,f,g,h,i){return new A.acV(f,!1,g,i,d,e)},
bU5(d){return C.d.am(d.e,1)},
bzF(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZb(),x.cm)
v.toString
w=A.kj(d.b,e.b,f,A.bZd(),x.es)
w.toString
return new A.M0(v,w,!0)},
bOc(d,e,f){return new A.Mb(d,e==null?4:e,f)},
a_u:function a_u(){},
Cl:function Cl(d,e){this.a=d
this.b=e},
te:function te(d,e){this.r=d
this.w=e},
pQ:function pQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab3:function ab3(){},
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
y7:function y7(d,e,f,g,h,i,j,k,l){var _=this
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
acx:function acx(){},
Pf:function Pf(d,e){this.a=d
this.b=e},
mG:function mG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n5:function n5(d,e,f,g){var _=this
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
a4M:function a4M(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acV:function acV(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
M0:function M0(d,e,f){this.a=d
this.b=e
this.c=f},
uA:function uA(){},
Mb:function Mb(d,e,f){this.a=d
this.b=e
this.c=f},
afJ:function afJ(){},
afN:function afN(){},
aiO:function aiO(){},
aj3:function aj3(){},
aj4:function aj4(){},
aj6:function aj6(){},
aj7:function aj7(){},
ajV:function ajV(){},
ajU:function ajU(){},
ajW:function ajW(){},
ank:function ank(){},
ap4:function ap4(){},
ap5:function ap5(){},
aqF:function aqF(){},
arh:function arh(){},
arg:function arg(){},
ari:function ari(){},
avo:function avo(){},
K0:function K0(){},
K1:function K1(d,e,f){this.c=d
this.d=e
this.a=f},
avq:function avq(d){this.a=d},
avp:function avp(d){this.a=d},
QG:function QG(d,e,f){this.c=d
this.e=e
this.a=f},
X_:function X_(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bSF(d,e,f){var w=B.ab(f),v=w.i("a9<1,jE>")
v=B.P(new B.a9(f,new A.aWW(),v),v.i("av.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aWX(),w),w.i("av.E"))
return new A.ab4(e,d,v,w,null)},
bLr(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5p(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tc(v,C.aw,C.v,new B.ke(1),v,v,v,v,C.bu,v)
u=new A.a_v(f,d,e,u,t,!0,0,v,v,new B.bn(),B.aH(x.v))
u.bj()
return u},
ab4:function ab4(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWW:function aWW(){},
aWX:function aWX(){},
a_v:function a_v(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VD$=h
_.aRG$=i
_.dj$=j
_.ag$=k
_.dM$=l
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
bbS:function bbS(d,e){this.a=d
this.b=e},
avr:function avr(){},
jE:function jE(d,e){this.a=d
this.b=e},
ny:function ny(d,e){this.a=d
this.b=e},
afK:function afK(){},
afL:function afL(){},
afM:function afM(){},
SB:function SB(){},
A9:function A9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWY:function aWY(d){this.a=d},
aWZ:function aWZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aX_:function aX_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3W(d,e){var w=d==null?B.dn(C.B,1):d
return new A.a3V(e!==!1,w)},
a_K:function a_K(){},
a3V:function a3V(d,e){this.a=d
this.b=e},
Mi:function Mi(){},
a3X:function a3X(){},
avW:function avW(){},
aCc:function aCc(d,e){this.a=d
this.b=e},
ag3:function ag3(){},
aj0:function aj0(){},
aj1:function aj1(){},
aj8:function aj8(){},
Ka:function Ka(){},
vp:function vp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
he:function he(){},
a40:function a40(d){this.a=d},
a41:function a41(d){this.a=d},
a42:function a42(d){this.a=d},
Md:function Md(){},
Me:function Me(){},
a45:function a45(d){this.a=d},
Mg:function Mg(){},
Mh:function Mh(d){this.a=d},
a4_:function a4_(d){this.a=d},
a3Z:function a3Z(d){this.a=d},
Mc:function Mc(d){this.a=d},
a43:function a43(d){this.a=d},
a44:function a44(d){this.a=d},
Mf:function Mf(d){this.a=d},
Fs:function Fs(){},
aSf:function aSf(d){this.a=d},
aSg:function aSg(d){this.a=d},
aSh:function aSh(d){this.a=d},
aSi:function aSi(d){this.a=d},
aSj:function aSj(d){this.a=d},
aSk:function aSk(d){this.a=d},
aSl:function aSl(d){this.a=d},
aSm:function aSm(d){this.a=d},
aSn:function aSn(d){this.a=d},
aSo:function aSo(d){this.a=d},
aSp:function aSp(d){this.a=d},
aSq:function aSq(d){this.a=d},
aSr:function aSr(d){this.a=d},
NB:function NB(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UR:function UR(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cR$=h
_.c=_.a=null},
bbX:function bbX(d,e){this.a=d
this.b=e},
bbV:function bbV(d){this.a=d},
bbW:function bbW(d,e){this.a=d
this.b=e},
bbU:function bbU(){},
bbY:function bbY(d){this.a=d},
bsS(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.pu(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aI5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SN:u
else w=g
v=f==null?A.avx(!1,u,0,u,!1,D.vF):f
w=new A.e4(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avx(!1,u,0,u,!1,D.vF):d,j,a0,i,s,!1,p)
w.aq6(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bPt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aa(d.x,e.x,f)
m.toString
w=A.byn(d.ay,e.ay,f)
v=A.byn(d.ch,e.ch,f)
u=B.aa(d.as,e.as,f)
u.toString
t=e.CW
s=A.kj(d.cy,e.cy,f,A.Zh(),x.S)
r=B.X(d.r,e.r,f)
q=B.r3(d.w,e.w,f)
p=A.kj(d.a,e.a,f,A.bZa(),x.cw)
p.toString
o=B.bC7(d.db,e.db,f)
o.toString
n=B.aa(d.dy.a,e.dy.a,f)
n.toString
return A.aI5(v,m,w,r,e.z,s,new A.y6(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NC(n),!1,u,o,!0,e.cx,p)},
avx(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
else w=e
return new A.a_D(h,w,g,i,f,!1)},
byn(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r3(v.b,u.b,f),r=B.aa(v.c,u.c,f)
r.toString
r=A.bzJ(t,A.kj(v.d,u.d,f,A.Zh(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r3(d.c,e.c,f)
v=B.aa(d.e,e.e,f)
v.toString
return A.avx(!1,s,v,u,e.a,new A.K5(!1,r,w.c,!0))},
bLy(d,e,f){var w=B.X(d.c,e.c,f),v=B.r3(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
return new A.mn(e.a,e.b,w,v)},
c1q(d){return!0},
buV(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kM)return A.bvE(w.a,A.bsw(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dh:w},
bWP(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kM)w=A.bvE(v.a,A.bsw(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dh}return A.axG(w,40)},
bEB(d,e,f,g,h){var w,v=A.buV(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kM)w=A.bvE(u.a,A.bsw(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dh}u=A.axG(w,40)
return new A.Mb(v,h==null?4:h,u)},
c1o(d,e){return!0},
bYY(d,e){return Math.abs(d.a-e.a)},
c_8(d,e){var w=J.d3(e,new A.bon(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c_4(d,e){return-1/0},
c_3(d,e){return d.a[e].b},
bFN(d){var w=J.d3(d,new A.bok(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bFM(d){return A.axG(D.dh,15)},
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
e4:function e4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aI6:function aI6(){},
NC:function NC(d){this.a=d},
a_D:function a_D(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mn:function mn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
K5:function K5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y6:function y6(d,e,f){this.a=d
this.b=e
this.c=f},
aHS:function aHS(d,e){this.a=d
this.b=e},
a3Y:function a3Y(){},
E8:function E8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bon:function bon(d){this.a=d},
bom:function bom(d){this.a=d},
a5N:function a5N(){},
bok:function bok(){},
mL:function mL(){},
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
FT:function FT(d){this.a=d},
ND:function ND(d){this.a=d},
yQ:function yQ(d,e){this.a=d
this.b=e},
afR:function afR(){},
afS:function afS(){},
ag4:function ag4(){},
aj2:function aj2(){},
aj5:function aj5(){},
akH:function akH(){},
akI:function akI(){},
akJ:function akJ(){},
akL:function akL(){},
akM:function akM(){},
akN:function akN(){},
akO:function akO(){},
ap3:function ap3(){},
aqE:function aqE(){},
aI7:function aI7(d){this.a=d},
aI8:function aI8(){},
aI9:function aI9(){},
yR:function yR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akK:function akK(){},
aIa:function aIa(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aId:function aId(){},
aIb:function aIb(d,e,f){this.a=d
this.b=e
this.c=f},
aIc:function aIc(d,e,f){this.a=d
this.b=e
this.c=f},
aIe:function aIe(){},
v7:function v7(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5M:function a5M(d,e,f){this.d=d
this.e=e
this.a=f},
a9S:function a9S(d,e,f,g,h,i,j,k){var _=this
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
brz(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bz(o.length,0,!1,x.i),m=B.ab(o),l=new B.a9(o,new A.avA(),m.i("a9<1,M>")).kk(0,new A.avB()),k=e-l,j=new A.avE(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdm(0)/2
s=u===o.length-1?0:w
v+=t.gdm(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdm(0)/2
s=u===o.length-1?0:w
v+=t.gdm(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdm(0)/2
s=u===o.length-1?0:w
v+=t.gdm(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).aq(0,new A.avC(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).aq(0,new A.avD(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avA:function avA(){},
avB:function avB(){},
avE:function avE(d,e,f){this.a=d
this.b=e
this.c=f},
avF:function avF(d,e,f){this.a=d
this.b=e
this.c=f},
avC:function avC(d,e,f){this.a=d
this.b=e
this.c=f},
avD:function avD(d,e,f){this.a=d
this.b=e
this.c=f},
bsw(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iK(w,B.ab(w).i("iK<1>")).aq(0,new A.aFe(v,d))
else throw B.e(B.bF('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFe:function aFe(d,e){this.a=d
this.b=e},
ayQ(d,e){var w,v
if(e!=null){w=B.ab(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.ayR(),w),w.i("av.E"))
return A.bZX(d,new A.a0h(v,x.cX))}else return d},
ayR:function ayR(){},
bTe(d,e){var w=!0
if(d!==C.eX)if(!(d===C.aw&&e===C.v))w=d===C.ig&&e===C.aW
if(w)return D.Dr
else{w=!0
if(d!==C.hm)if(!(d===C.ig&&e===C.v))w=d===C.aw&&e===C.aW
if(w)return D.Ds
else return D.a8m}},
MI:function MI(d,e){this.a=d
this.b=e},
a07:function a07(d,e){this.a=d
this.b=e},
yU:function yU(d,e){this.a=d
this.$ti=e},
akV:function akV(){},
bZX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.ah().r)
for(w=B.b([],x.C),v=new B.Nv(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.V(B.fo('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Nu(v,s)
v.CJ()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CJ()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.Jw(d.aRC(r,p,p+n,!0),C.p,null)
t.push(q)
m=l.d
if(m!=null)q.hD(m)}p+=n
o=!o}}return l},
a0h:function a0h(d,e){this.a=d
this.b=0
this.$ti=e},
b_s:function b_s(){},
Pz:function Pz(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.dn=f
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
aSA:function aSA(d){this.a=d},
a3R:function a3R(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bsk(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fG))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bLB(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geg(v)===0){v=d.a.a
if(v.geg(v)===0){v=d.b.a
if(v.geg(v)===0){v=d.c.a
v=v.geg(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axG(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNn()*w),C.d.b0(d.gFJ()*w),C.d.b0(d.gJS()*w))},
bzH(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bsl(d){var w=d.a,v=w?A.aWV(d.b):0,u=w?A.aWV(d.c):0,t=w?A.aWV(d.d):0
return new B.aj(v,u,t,w?A.aWV(d.e):0)},
bQI(d){var w
if(d.c===0){d.seS(null)
w=B.bY(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
btd(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seS(f.mJ(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seS(null)}},
aWV(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kj(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kK(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kK(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c0g(d,e,f){return C.d.b0(d+(e-d)*f)},
bvE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a5y.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aR:C.l
r=r?C.n:C.al
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cV(t.x,C.n,s,18),C.bk],w))
v.push(B.aP(new B.es(t.c,!1,s),1))
v=B.au(v,C.D,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.a0,B.l(t.d,1,C.aj,s,B.c7(u==null?C.h:u,22,C.O),s,s,s)],w)
return B.bO(r,B.ag(w,C.D,C.i2,C.i),q,s,C.am,s,3)}}
A.uz.prototype={
Le(d){return this.aRF(d)},
aRF(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Le=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eB("finance_summary",B.a5(["p_from",E.qY(d.a),"p_to",E.qY(d.b)],s,r),r),$async$Le)
case 3:q=f
if(q==null){u=D.an5
w=1
break}if(x.f.b(q)){u=B.ee(q,s,r)
w=1
break}u=D.anw
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Le,v)},
Ld(d){return this.aRE(d)},
aRE(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Ld=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eB("finance_kpis",B.a5(["p_from",E.qY(d.a),"p_to",E.qY(d.b)],s,r),r),$async$Ld)
case 3:q=f
if(x.f.b(q)){u=B.ee(q,s,r)
w=1
break}u=D.amP
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Ld,v)},
px(d){return this.apP(d)},
apP(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$px=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hJ("sevdesk-sync",B.a5(["from",E.qY(d.a),"to",E.qY(d.b)],s,s)),$async$px)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a4(B.ft(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$px,v)},
L9(d){return this.aRu(d)},
aRu(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$L9=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hJ("finance-export-pdf",B.a5(["from",E.qY(d.a),"to",E.qY(d.b)],s,s)),$async$L9)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aB(J.a3(r,"base64"))
w=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$L9,v)}}
A.Dt.prototype={
FD(d){return this.aj1(d)},
aj1(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FD=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Le(d),$async$FD)
case 7:q=f
o=A.aD0(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.He(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FD,v)},
Fz(d){return this.aiN(d)},
aiN(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Fz=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ld(d),$async$Fz)
case 7:q=f
o=A.bOa(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.He(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Fz,v)},
px(d){return this.apQ(d)},
apQ(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$px=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.px(d),$async$px)
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
p=r.He(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$px,v)},
L8(d){return this.aRt(d)},
aRt(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$L8=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.L9(d),$async$L8)
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
o=r.He(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$L8,v)},
He(d){if(d instanceof B.y1)return d
if(d instanceof B.lO){if(d.b==="42501")return new B.vt(d.a)
return new B.rX(d.a)}if(d instanceof B.Mw)return new B.rX("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AA("Unerwarteter Fehler: "+B.i(d))},
$iaCP:1}
A.q1.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vd.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayf.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azm.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nR.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.C5.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nS.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y4.prototype={
GA(d){return this.apO(0)},
apO(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GA=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dn)
s=t.r
r=s.aK(0,$.x0(),x.P)
p.a=null
w=3
return B.k(B.oU(new A.aCL(p,t,r),x.H),$async$GA)
case 3:t.se3(0,f)
q=t.f
if(q.ghm(q)==null){q=$.br7()
s=s.e
s===$&&B.a()
s.cq(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GA,v)},
L7(){return this.aRs()},
aRs(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$L7=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dn)
s=t.r.aK(0,$.x0(),x.P)
q.a=null
w=3
return B.k(B.oU(new A.aCK(q,t,s),x.H),$async$L7)
case 3:t.se3(0,e)
r=t.f
u=r.ghm(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$L7,v)}}
A.y5.prototype={
ds(d,e){var w=null,v=e.aA($.x0(),x.P),u=e.aA($.br7(),x.aN)
return B.jZ(B.e5(B.b([new B.fW("Finanzen","Dashboard",new A.af3(e.aA($.br6(),x.b).gj9(),new A.aCT(this,d,e),new A.aCU(this,d,e),new A.aCV(d),new A.aCW(this,d,e,v),w),w),C.ay,new A.amf(v,w),C.c5,D.adE,C.c5,B.ds(u,new A.aCX(),new A.aCY(),new A.aCZ(),!1,!0,!1,x.d,x.l)],x.p),C.cS,w,!1),C.n,new A.aD_(e))},
J2(d,e){return this.aK_(d,e)},
aK_(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J2=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.br6()
w=3
return B.k(e.aK(0,s.ghL(),x.F).GA(0),$async$J2)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ghm(s)
t=d.P(x.q).f
t.bD(B.ck(null,null,null,null,null,C.t,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J2,v)},
B0(d,e){return this.avM(d,e)},
avM(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B0=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aK(0,$.br6().ghL(),x.F).L7(),$async$B0)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bD(D.auM)
w=1
break}t=B.pK(C.p,10)
w=4
return B.k($.bHR().tV(s,"finanzauswertung.pdf",t,null,null,null),$async$B0)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B0,v)},
B1(d,e,f){return this.aHK(d,e,f)},
aHK(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B1=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jC(null,null,!0,null,new A.aCS(f,d),d,null,!0,!0,x.cJ),$async$B1)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nt(e.aK(0,$.cd(),x.A))
p=f.a
o=f.b
n=$.en()
m=n.ar(p)
n=n.ar(o)
w=8
return B.k(r.zh("finance_period",p,o,B.a5(["period_from",p.eJ()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B1)
case 8:if(d.e!=null)d.P(x.q).f.bD(F.uJ)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bD(B.ck(null,null,null,null,null,C.t,null,B.l("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B1,v)}}
A.af3.prototype={
u(d){var w=this,v=null,u=A.bat(C.n,F.hL,C.n,w.r,"Freigabe f\xfcr Auswertung anfordern"),t=A.bat(v,D.a9X,v,w.f,"Gesellschafter-Freigaben"),s=w.c,r=A.bat(v,D.a96,v,s?v:w.d,"sevDesk synchronisieren")
return B.au(B.b([u,C.bk,t,C.bk,r,C.bk,A.bat(C.ag,C.j_,C.ag,s?v:w.e,"PDF-Export")],x.p),C.m,C.f,C.N,0,v,v)}}
A.ak4.prototype={
u(d){var w,v=this,u=null,t=B.aZ(12),s=B.aZ(12),r=B.aZ(12),q=v.w
if(q==null)q=C.al
q=B.dn(q,1)
w=v.r
if(w==null)w=C.h
return B.RR(B.dQ(!1,C.Y,!0,t,B.f2(!1,s,!0,B.bi(u,B.cV(v.c,w,u,20),C.q,u,u,new B.ba(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.aq,0,u,u,u,u,u,C.bB),u,v.d,u,u)}}
A.amf.prototype={
ds(d,e){var w=null,v=this.e,u=$.en(),t=x.p
return B.bO(w,B.ag(B.b([D.a7u,C.a0,B.au(B.b([D.aaF,C.ba,B.aP(B.l(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.D(C.h,16,C.O),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.x,B.q4(C.dl,B.b([new A.Id("Monat",new A.bea(e),w,w),new A.Id("Jahr (YTD)",new A.beb(e),w,w),new A.Id("Zeitraum w\xe4hlen \u2026",new A.bec(this,d,e),D.a9b,w)],t),C.f0,6,8)],t),C.D,C.f,C.i),w,w,C.G,w,3)},
Ir(d,e){return this.aGI(d,e)},
aGI(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Ir=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bb(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.bqu(new A.be9(),d,B.bJ(B.aY(t)-5,1,1,0,0,0,0),new B.mv(s.a,s.b,x.bz),B.bJ(B.aY(t)+1,1,1,0,0,0,0),C.eO),$async$Ir)
case 2:r=g
if(r!=null)e.aK(0,$.x0().ghL(),x.V).wm(0,new E.mB(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Ir,v)}}
A.Id.prototype={
u(d){var w=null,v=B.aZ(9999),u=B.aZ(9999),t=B.aZ(9999),s=B.dn(C.al,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cV(p,C.h,w,14),C.bk],r))
q.push(B.l(this.c,w,w,w,B.D(C.h,13,C.O),w,w,w))
return B.dQ(!1,C.Y,!0,v,B.f2(!1,u,!0,B.bi(w,B.au(q,C.m,C.f,C.N,0,w,w),C.q,w,w,new B.ba(w,w,s,t,w,w,C.H),w,w,w,w,C.kJ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.aq,0,w,w,w,w,w,C.bB)}}
A.II.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jR(new A.bjF(this)),C.c5,D.a7z,C.x],r),p=this.c.w
if(p.length===0)q.push(B.bO(s,B.au(B.b([D.ab3,C.aF,B.aP(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.u,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.aq,s,C.G,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.af1(t.a,t.b,t.c==="revenue",t.d,s),C.a0],r))}q.push(B.ag(w,C.m,C.f,C.i))}return B.ag(q,C.ab,C.f,C.i)}}
A.af1.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aR:C.aq,s=B.dn(u?C.n:C.al,1),r=B.aZ(4),q=w.c
r=B.bi(C.a_,B.l(C.c.a0(q,0,1),v,v,v,B.c7(C.h,14,C.r),v,v,v),C.q,v,v,new B.ba(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.aj,v,B.D(C.h,14,C.O),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aP(B.ag(B.b([q,B.l(t,v,v,v,B.D(C.u,12,C.k),v,v,v)],s),C.D,C.f,C.i),1)
q=$.e0().ar(w.f)
return B.bO(v,B.au(B.b([r,C.aF,t,B.l(q,v,v,v,B.D(u?C.aQ:C.h,15,C.O),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.e5,v,3)}}
A.Hl.prototype={
u(d){var w=null
return B.bO(C.ag,B.au(B.b([D.abx,C.aF,B.aP(B.l(this.c,w,w,w,B.D(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fE,w,C.G,w,3)}}
A.a5z.prototype={
ds(d,e){return B.ds(e.aA($.bKi(),x.e),new A.aHP(),new A.aHQ(),new A.aHR(),!1,!0,!1,x.X,x.l)}}
A.HF.prototype={
u(d){var w=this,v=null,u=w.c,t=u.x,s=t>0,r=s?u.a.c/t:0,q=s?u.r.a/t:0
t=x.p
s=B.b([D.asf,C.x,B.jR(new A.bbJ(w,r,100-u.w.a,q)),C.x,new A.ajo(v),C.ay,D.ase,C.x,new A.afQ(u,v),C.ay,D.as9,C.x,B.bC(v,!0,v,B.mF(v,B.bO(v,new A.SZ(u,220,v),v,v,C.G,v,3),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbK(w,d),v,v,v,v,v,v),!1,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.K,v),C.ay,D.as4,C.x,B.bC(v,!0,v,B.mF(v,new A.T9(u,200,!1,v),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbL(w,d),v,v,v,v,v,v),!1,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.K,v),C.ay,D.as8,C.x,new A.al3(u,v),C.ay,D.as6,C.x,new A.ahu(u,v)],t)
if(u.f.length!==0)C.b.M(s,B.b([C.ay,D.asb,C.x,new A.aqB(u,v)],t))
return B.ag(s,C.ab,C.f,C.i)}}
A.ajo.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.u,11,C.k).eV(1.35),w,w,w)}}
A.akA.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ag:C.aQ
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bbM(m,d):l
r=x.p
q=B.b([B.aP(B.l(m.c.toUpperCase(),l,l,l,B.D(C.u,10,C.r).hF(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.dn(C.ag,0.8)
n=B.aZ(4)
q.push(B.bi(l,B.l("Ziel "+p,l,l,l,B.D(C.ag,9,C.r),l,l,l),C.q,l,l,new B.ba(l,l,o,n,l,l,C.H),l,l,l,l,C.n0,l,l,l))}q=B.b([B.au(q,C.m,C.f,C.i,0,l,l),C.aZ,new A.a3R(C.AZ,C.e_,B.l(m.d,l,l,l,B.c7(w,22,C.r),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.aj,l,B.D(C.u,10,C.aL),l,l,l))
q.push(C.cN)
q.push(B.au(B.b([new A.TI("Vormonat",m.r,l),C.cX,new A.TI("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cN)
q.push(B.aP(new A.Xa(v,m.y,m.z,l),1))
return B.bC(l,u,l,B.mF(l,B.bO(l,B.ag(q,C.D,C.f,C.i),l,l,C.ds,l,3),C.ac,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.K,l)}}
A.TI.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aZ(4)
return B.bi(r,B.l(this.c+" \u2014",r,r,r,B.D(C.u,9,C.r),r,r,r),C.q,r,r,new B.ba(C.al,r,r,q,r,r,C.H),r,r,r,r,C.n0,r,r,r)}w=q>=0
v=w?C.aQ:C.ag
u=v.lE(0.12)
t=B.dn(v,0.7)
s=B.aZ(4)
return B.bi(r,B.au(B.b([B.cV(w?F.a8s:D.a8r,v,r,10),F.aut,B.l(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.D(v,9,C.r),r,r,r)],x.p),C.m,C.f,C.N,0,r,r),C.q,r,r,new B.ba(u,r,t,s,r,r,C.H),r,r,r,r,C.n0,r,r,r)}}
A.Xa.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.et(v,j[v]))
u=C.b.kk(j,new A.bj1())
t=C.b.kk(j,new A.bj2())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bj3(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a3W(k,!1)
w=B.b([A.aI5(k,2,A.avx(!1,C.n.lE(0.16),0,k,!0,D.vF),C.n,0.35,k,D.Di,k,!0,!1,!0,!1,D.EB,!1,10,D.Y0,!0,C.lc,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NB(A.bsS(k,k,k,D.ajv,l,D.Bc,D.Dd,D.Dj,w,D.adI,k,m,k,n,D.Xm,D.ajw,D.a7O),C.as,C.ad,k,k)}}
A.SZ.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aH3
w=C.b.fF(p,0,new A.b2Z())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avG(B.b([A.a_F(q,q,D.AF,q,C.n,q,q,q,r.b,6),A.a_F(q,q,D.AF,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.cg(A.byo(A.avz(q,q,u,q,q,A.a3W(q,!1),q,new A.y7(!0,!0,q,new A.b3_(),A.Zc(),!1,q,A.at9(),A.Zc()),q,v,q,q,new A.uB(!0,new A.oV(16,q,new A.pQ(!0,new A.b30(this),46,q),!0),D.kb,D.kb,new A.oV(16,q,new A.pQ(!0,new A.b31(p),26,q),!0)))),this.d,q)},
aJi(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.T9.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b3M(),w),x.i)
C.b.M(o,new B.a9(u,new A.b3N(),w))
t=C.b.fF(o,0,new A.b3O())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avG(B.b([A.a_F(q,q,q,q,C.n,q,q,q,v[s],14),A.a_F(q,q,q,q,C.aQ,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cg(A.byo(A.avz(q,q,n,q,q,A.a3W(q,!1),q,D.Dj,q,o,q,q,new A.uB(!0,D.kb,D.kb,D.kb,new A.oV(16,q,new A.pQ(!0,new A.b3P(p),26,q),!0)))),this.d,q)
return this.e?r:B.bO(q,r,q,q,C.G,q,3)}}
A.al3.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aH2
w=new B.a9(l,new A.bcf(),B.ab(l).i("a9<1,M>")).kk(0,new A.bcg())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.l(r.b,m,m,m,B.D(C.h,14,C.r),m,m,m)
p=$.e0()
o=r.d
n=new B.aU(4,4)
o=B.b([B.au(B.b([new B.pe(1,C.fH,B.ag(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ar(r.f),m,m,m,B.D(C.u,12,C.aL),m,m,m)],v),C.D,C.f,C.i),m),C.ba,B.l(p.ar(o),m,m,m,B.c7(C.h,16,C.r),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cN,new B.CO(new B.d2(n,n,n,n),C.bJ,B.a5O(C.al,8,C.d.c4(o/w,0,1),D.At),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zf(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.x)
C.b.M(u,o)}return B.bO(m,B.ag(u,C.m,C.f,C.i),m,m,C.G,m,3)}}
A.ahu.prototype={
u(d){var w=null,v=this.c.r
return B.bO(w,B.au(B.b([B.aP(new A.Ix("Aktive Kunden",""+v.c,w),1),B.aP(new A.Ix("K\xe4ufe",""+v.a,w),1),B.aP(new A.Ix("\xd8-Warenkorb",$.e0().ar(v.d),w),1)],x.p),C.m,C.f,C.i,0,w,w),w,w,C.G,w,3)}}
A.Ix.prototype={
u(d){var w=null
return B.ag(B.b([B.l(this.c.toUpperCase(),w,w,w,B.D(C.u,10,C.r).hF(0.6),w,w,w),C.cM,B.l(this.d,w,w,w,B.c7(C.h,20,C.r),w,w,w)],x.p),C.D,C.f,C.N)}}
A.aqB.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.bkW(),B.ab(q).i("a9<1,M>")).kk(0,new A.bkX()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aU(4,4)
t=B.b([B.au(B.b([new B.pe(1,C.fH,B.l(u.b,1,C.aj,r,B.D(C.h,13,C.r),r,r,r),r),B.l(""+u.c+"\xd7 ",r,r,r,B.D(C.u,12,C.O),r,r,r),B.l($.e0().ar(t),r,r,r,B.D(C.h,13,C.r),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aZ,new B.CO(new B.d2(s,s,s,s),C.bJ,B.a5O(C.al,6,C.d.c4(t/p,0,1),D.At),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zf(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.a0)
C.b.M(n,t)}return B.bO(r,B.ag(n,C.m,C.f,C.i),r,r,C.G,r,3)}}
A.wn.prototype={
u(d){var w=null
return B.bO(w,B.l(this.c,w,w,w,B.D(C.u,13,C.k),w,w,w),C.aq,w,C.G,w,3)}}
A.afQ.prototype={
ds(d,e){return B.ds(e.aA($.bxm(),x.fM),new A.b1r(this,d,e),new A.b1s(),new A.b1t(),!1,!0,!1,x.h,x.l)}}
A.AI.prototype={
Y(){return new A.SD()},
aWA(){return this.d.$0()}}
A.SD.prototype={
az(){var w,v,u,t,s,r,q=this
q.aQ()
q.d=new B.bb(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.ha(J.ak(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bO)
for(t=0;t<8;++t){s=D.GR[t].a
if(v)r=""
else{r=B.bD(J.a3(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.b9(r,".",",")}u.m(0,s,new B.bT(new B.cR(r,C.bN,C.aS),$.ae()))}q.e!==$&&B.b4()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c3(v,v.r,v.e,B.j(v).i("c3<2>"))
while(v.t()){w=v.d
w.R$=$.ae()
w.S$=0}this.ao()},
re(d){var w=this.e
w===$&&B.a()
w=C.c.bp(w.h(0,d).a.a)
w=B.b9(w,".","")
w=B.jX(B.b9(w,",","."))
return w==null?0:w},
HR(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HR=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.L(new A.b1i(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZ0("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eJ(),0,10),"p_cash_and_bank",q.re("cash_and_bank"),"p_receivables",q.re("receivables"),"p_inventory_value",q.re("inventory_value"),"p_other_current_assets",q.re("other_current_assets"),"p_fixed_assets",q.re("fixed_assets"),"p_current_liabilities",q.re("current_liabilities"),"p_long_term_liabilities",q.re("long_term_liabilities"),"p_equity",q.re("equity")],x.N,x.aU))
w=7
return B.k(n,$async$HR)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWA()
o=q.c
o.toString
B.bo(o,!1).fb()
q.c.P(x.q).f.bD(D.auN)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bD(B.ck(null,null,null,null,null,C.t,null,B.l("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.L(new A.b1j(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HR,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c7(C.h,18,C.r),r,r,r),p=s.f?r:new A.b1l(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.jU(D.aaH,B.l("Stichtag: "+C.c.a0(o.eJ(),0,10),r,r,r,r,r,r,r),p,r),C.x],w)
for(v=0;v<8;++v){o=D.GR[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.fZ(r,C.b8,!1,r,!0,C.t,r,B.hu(),u.h(0,o.a),r,r,r,r,r,2,new B.ci(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ac,!0,r,!0,r,!1,r,C.bf,r,r,r,r,C.ih,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.G,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aw,r,C.a3,r,r,r,r),C.a0],w))}p.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.u,11,C.k),r,r,r))
p=B.cg(B.f6(B.ag(p,C.ab,C.f,C.N),r,C.a6),r,380)
o=s.f
u=B.dI(C.d1,r,r,o?r:new A.b1m(d),r,r)
o=o?r:s.gaDb()
t=B.ec(C.n,C.h,r,r,r,r,r)
return B.mi(B.b([u,B.dW(s.f?D.aux:C.f_,o,t)],w),C.l,p,q)}}
A.b7.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zf(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ex(B.H(this))^B.bGh(this.gbI()))>>>0},
j(d){B.bzD()
return B.H(this).j(0)}}
A.K6.prototype={
Y(){return new A.SE(B.y(x.S,x.I),new A.avJ(B.y(x.x,x.T)),null,null)}}
A.SE.prototype={
u(d){var w,v=this,u=v.a1m(),t=v.CW
t.toString
t=v.a1n(t.au(0,v.ghA().gp(0)))
w=v.a1n(u)
v.a.toString
return new A.K1(new A.a_E(t,w,null),u,null)},
a1n(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avG(s.c,s.d,!1,r,s.a))}return d.aOv(w)},
a1m(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Ud(t.ch)
if(r)s=w.a
r=t.y
t=t.aPq(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOw(A.brA(!1,!0,!0,v.d,v.c,u.garl(),v.f,v.e))}return t},
arm(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaeT()||e==null||e.a==null){w=v.cy
v.L(w.gaNV(w))
return}v.L(new A.b1w(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1m(),new A.b1x(w)))}}
A.nz.prototype={
UN(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avz(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPq(d,e){return this.UN(null,null,d,e)},
aOw(d){return this.UN(null,d,null,null)},
aOv(d){return this.UN(d,null,null,null)},
WJ(d,e,f){var w,v,u,t=A.kj(d.ch,e.ch,f,A.bZf(),x.dB),s=B.aa(d.CW,e.CW,f),r=A.bzK(d.d,e.d,f),q=A.bBE(d.e,e.e,f),p=A.bzI(d.c,e.c,f),o=e.a
o=A.a3W(B.a_V(d.a.b,o.b,f),o.a)
w=B.aa(d.y,e.y,f)
v=B.aa(d.x,e.x,f)
u=B.aa(d.z,e.z,f)
r=A.avz(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bzF(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avy.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fw.prototype={
gdm(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avH(),B.ab(v).i("a9<1,M>")).kk(0,new A.avI())
v=v.length
return w+(v-1)*this.d},
gbI(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.i9.prototype={
gbI(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mm.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_B.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_G.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acv.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_H.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Cm.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.K7.prototype={}
A.a_I.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xi.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WJ(v,w,d)}}
A.afO.prototype={}
A.afT.prototype={}
A.afU.prototype={}
A.afW.prototype={}
A.afX.prototype={}
A.afY.prototype={}
A.afZ.prototype={}
A.ag_.prototype={}
A.ag0.prototype={}
A.avJ.prototype={
Ud(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ub(0,0,!1)
v=new A.yU(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ub(t,u,!0)}w=null
try{w=C.b.qc(d,new A.avK())}catch(s){return new A.ub(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.afV.prototype={}
A.avL.prototype={
i4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_s(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abt(t,A.brz(w,t.a),u)
l.y=u
l.aQM(e,u,f)
l.akX(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aQV(d,e,m,t,r,s,n,o,f)}}},
abt(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iK(p,B.ab(p).i("iK<1>")).aq(0,new A.avM(t,q,r,s))
w.push(new A.a4B(q))}return w},
aQM(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aU(m,m)
l=new B.d2(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b3.dC(Math.max(s,a2),b5,b8)
a4=B.Pb(h,Math.min(b3.dC(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dC(Math.min(t,a2),b5,b8)
a4=B.Pb(h,a5,g,Math.max(b3.dC(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.E:f).gp(0)
k.seS(null)
a6=b3.f.ek()
u.drawRRect(B.mg(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dC(f,b5,b8)
e=a8.b
b0=b3.dC(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.aX(u.save())
u.clipRect(B.dG(b1),$.oN()[1],!0)
a6=b3.f.ek()
u.drawRRect(B.mg(a4),a6)
a6.delete()
u.restore()
b3.aQT(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.geg(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cB($.ah().r)
n=new B.h6(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hD(k)
v.fT(A.ayQ(b2,o.r),b3.r)}}}},
aQV(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Ap(a5,a5,a5,a5,B.d6(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lk().Zs(a8,a7.b),a7.a),C.d_,C.v,a5,b6.c,C.bu)
w.afb(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbS(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dC(s,a6,b6)
q=b4.a
p=a4.dC(q,a6,b6)
o=b1.b
n=u+o.gen()
m=v+4+(o.gcY(0)+o.gd_(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aCR)j=v===D.Zb&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.Zt(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aU(s,s)
e=B.Fg(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lk().K1(new B.E(v,t),d).b
s=$.lk()
q=w.b
p=q.c
q=q.a.c
a0=s.K1(new B.E(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahu()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vp(d,new A.avN(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.E(v,t))},
aQT(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geg(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dC(w,j,k)
u=e.a
t=n.dC(u,j,k)
w=u<w
u=w?new B.aU(i.z,i.Q):C.Z
s=w?new B.aU(i.x,i.y):C.Z
r=w?C.Z:new B.aU(i.e,i.f)
w=w?C.Z:new B.aU(i.r,i.w)
q=B.Pb(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dC(v,j,k),i.b)
r=n.dC(t,j,k)
v=t<v
t=v?C.Z:new B.aU(i.z,i.Q)
p=v?C.Z:new B.aU(i.x,i.y)
o=v?new B.aU(i.e,i.f):C.Z
q=B.Pb(w,s,u,r,t,p,o,v?new B.aU(i.r,i.w):C.Z)}else q=B.bty(w,n.dC(v,j,k),u,n.dC(t,j,k),C.Z)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eN(q,n.r)},
W4(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abt(b2,A.brz(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dC(k,b2,b3)
m=b0[q].c[o]
g=a7.dC(m.a+m.x.b,b2,b3)}else{h=a7.dC(j+m.x.b,b2,b3)
g=a7.dC(b0[q].c[o].b,b2,b3)}a7.dC(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dC(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dC(a4.a,b2,b3)
a6=a7.dC(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a_I(d,q,a0,o,a2,a1,new A.et(d.a,v),new B.m(n,t))}}return null}}
A.a4B.prototype={}
A.a_E.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.avL()
t.a0E()
$.ah()
w=B.aR()
w.b=C.be
t.f=w
w=B.aR()
w.b=C.aU
t.r=w
w=B.aR()
w.b=C.be
w.r=C.l.gp(0)
t.w=w
w=B.aR()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.x=w
t=new A.a9F(this.d,v,u,t,d,C.bo,new B.bn(),B.aH(x.v))
t.bj()
t.Yo(v.cy)
t.aek()
return t},
bx(d,e){e.sij(0,this.d)
e.sY9(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9F.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sY9(d){var w=this
if(w.hZ.k(0,d))return
w.hZ=d
w.a0c(d.cy)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a07(t,v),new A.vp(u.aC,u.hZ,u.cV,x.Q))
s.restore()},
Zm(d){var w=this,v=w.gC(0)
return new A.K7(w.fU.W4(d,v,new A.vp(w.aC,w.hZ,w.cV,x.Q)))}}
A.a_u.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cl.prototype={
K(){return"AxisSide."+this.b}}
A.te.prototype={}
A.pQ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ab3.prototype={
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
A.y7.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.ph.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acx.prototype={
gbI(){return[this.a,this.b]}}
A.Pf.prototype={
gbI(){return[this.a,this.b]}}
A.mG.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.n5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kE.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l2.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a4M.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.acV.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.M0.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uA.prototype={}
A.Mb.prototype={
acS(d,e,f){var w,v
$.ah()
w=B.aR()
v=this.a
w.r=v.gp(v)
w.b=C.be
d.iO(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afJ.prototype={}
A.afN.prototype={}
A.aiO.prototype={}
A.aj3.prototype={}
A.aj4.prototype={}
A.aj6.prototype={}
A.aj7.prototype={}
A.ajV.prototype={}
A.ajU.prototype={}
A.ajW.prototype={}
A.ank.prototype={}
A.ap4.prototype={}
A.ap5.prototype={}
A.aqF.prototype={}
A.arh.prototype={}
A.arg.prototype={}
A.ari.prototype={}
A.avo.prototype={
Ma(d,e,f,g,h,i){return new B.iv(this.aUD(d,e,f,g,h,i),x.g4)},
aUC(d,e,f,g){return this.Ma(d,e,f,!0,g,!0)},
aUD(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Ma(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lk().aiz(s,u,v,w)
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
A.K0.prototype={
a0E(){var w,v=this
$.ah()
w=B.aR()
w.b=C.aU
v.a=w
w=B.aR()
w.b=C.be
v.b=w
w=B.aR()
w.b=C.be
v.e=w
w=B.aR()
w.b=C.aU
v.c=w
v.d=B.aR()},
i4(d,e,f){var w=this
w.a_t(d,e,f)
w.aQI(e,f)
w.aQS(e,f)
w.aQR(e,f)},
aQR(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lk().Of(w.a,a1.r-a1.f)
u=$.bqK().Ma(a1.w,v,a1.r,!1,a1.f,!1)
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
p.seS(j.mJ(0,i))}else{if(k==null)k=C.E
p.r=k.gp(k)
p.seS(a0)}k=l.c
p.c=k
if(k===0){p.seS(a0)
k=B.bY(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Df(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lk().Of(w.b,a1.y-a1.x)
u=$.bqK().Ma(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.f9(u.a(),u.$ti.i("f9<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dC(q,w,a4)
n=new B.m(0,e)
m=new B.m(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kS(n,m)
if(k!=null){q.r=C.B.gp(0)
q.seS(k.mJ(0,i))}else{if(p==null)p=C.E
q.r=p.gp(p)
q.seS(a0)}p=f.c
q.c=p
if(p===0){q.seS(a0)
p=B.bY(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Df(n,m,d.a,f.d)}},
aQI(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.h9(new B.G(0,0,0+w.a,0+w.b),this.b)},
aQS(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.kS(new B.m(n.fc(t.a,m,e),0),new B.m(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.B.gp(0)
r.seS(p.mJ(0,s))}else{r.r=(q==null?C.E:q).gp(0)
r.seS(null)}o=n.e.ek()
w.drawRect(B.dG(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.K)(l),++u){t=l[u]
s=B.kS(new B.m(0,n.dC(t.a,m,e)),new B.m(w,n.dC(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.B.gp(0)
v.seS(q.mJ(0,s))}else{v.r=(r==null?C.E:r).gp(0)
v.seS(null)}o=n.e.ek()
j.drawRect(B.dG(s),o)
o.delete()}},
aQQ(d,e,f){var w,v
this.a_t(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.acT(d,e,f,w)
if(v.b.length!==0)this.aQX(d,e,f,w)},
acT(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=f.dC(o,a1,a0)
m=new B.m(0,n)
o=f.dC(o,a1,a0)
l=new B.m(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kS(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seS(j.mJ(0,i))}else{if(k==null)k=C.E
n.r=k.gp(k)
n.seS(null)}k=p.c
n.c=k
if(k===0){n.seS(null)
k=B.bY(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Df(m,l,f.c,p.d)
n=p.r
h=n.gdm(n).eC(0,2)
g=C.d.al(o,n.gbS(n).eC(0,2))
J.aX(r.save())
r.translate(h,g)
n=n.gN7().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdm(n).eC(0,2)
o=C.d.al(o,n.gbS(n).eC(0,2))
k=f.d
k===$&&B.a()
s.acU(0,n,new B.m(h,o),k)}}},
aQX(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
n.seS(j.mJ(0,i))}else{if(k==null)k=C.E
n.r=k.gp(k)
n.seS(null)}k=p.c
n.c=k
if(k===0){n.seS(null)
k=B.bY(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Df(m,l,d.c,p.d)
n=p.r
h=n.gdm(n).eC(0,2)
g=n.gbS(n).eC(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.aX(r.save())
r.translate(f,e)
n=n.gN7().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdm(n).eC(0,2)
g=n.gbS(n).ad(0,2)
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.acU(0,n,new B.m(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dC(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
Zt(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.K1.prototype={
gaki(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakj(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakk(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakg(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akD(d){var w,v=this,u=null,t=v.d,s=A.bsl(t.d),r=t.a
r=r.a&&A.bLB(r.b)?r.b:u
w=B.b([B.bi(u,v.c,C.q,u,u,new B.ba(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.avq(w)
if(v.gaki())C.b.hs(w,s.$1(!0),new A.A9(D.AA,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakk())C.b.hs(w,s.$1(!0),new A.A9(D.mj,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakj())C.b.hs(w,s.$1(!0),new A.A9(D.AB,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakg())C.b.hs(w,s.$1(!0),new A.A9(D.dB,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jR(new A.avp(this))}}
A.QG.prototype={
Y(){return new A.X_(new B.bc(null,x.eF))}}
A.X_.prototype={
awL(){switch(this.a.c.a){case 0:return C.dZ
case 1:return C.fx
case 2:return C.e_
case 3:return C.fy}},
axg(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awN(d){this.a.toString
return},
az(){this.aQ()
$.cv.x1$.push(this.ga3O())},
be(d){this.bE(d)
$.cv.x1$.push(this.ga3O())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axg()
return B.bu6(B.b_1(0,B.bi(v.awL(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ab4.prototype={
bl(d){return A.bLr(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_v.prototype={
hi(d){if(!(d.b instanceof B.hf))d.b=new B.hf(null,null,C.p)},
hS(d){if(this.B===C.aG)return this.xS(d)
return this.acu(d)},
aJs(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8o(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dz(d){var w=this.a8n(d,B.hs())
switch(this.B.a){case 0:return d.c1(new B.E(w.a,w.b))
case 1:return d.c1(new B.E(w.b,w.a))}},
a8n(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aG?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fR(u,null)
break
case 1:q=B.fR(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8o(p)
t=Math.max(t,o.aJs(p))
m=r.aG$}return new A.bbS(n<1/0?n:s,t)},
cu(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8n(o,B.me()),m=n.a,l=n.b
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
q=s.b-p.a8o(r==null?B.V(B.Z("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c2(w))):r)/2
switch(p.B.a){case 0:r=new B.m(q,0)
break
case 1:r=new B.m(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e8(d,e){return this.xT(d,e)},
aN(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uS(d,e)},
l(){this.a2.sbh(0,null)
this.anz()}}
A.bbS.prototype={}
A.avr.prototype={}
A.jE.prototype={
gbI(){return[this.a,this.b]}}
A.ny.prototype={}
A.afK.prototype={}
A.afL.prototype={
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
A.afM.prototype={}
A.SB.prototype={
l(){var w,v,u
for(w=this.VD$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.A9.prototype={
gov(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghC(){switch(this.c.a){case 0:return C.e_
case 1:return C.fy
case 2:return C.dZ
case 3:return C.fx}},
gaZd(){var w=this.d,v=A.bsl(w.d),u=A.bzH(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahh(){var w=this.d,v=A.bzH(w.a),u=A.bsl(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.gen()+v.gen()}},
aVm(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gov().c.d
if(o==null)o=$.lk().Of(d,f-e)
w=p.c
v=w!==D.mj
if((!v||w===D.dB)&&p.d instanceof A.nz){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.brz(u,d)
w=new B.iK(t,B.ab(t).i("iK<1>"))
s=w.giC(w).f0(0,new A.aWY(u),x.W).fW(0)}else{r=$.bqK()
w=!v||w===D.dB
v=p.d
q=r.aUC(w?v.w:v.z,o,f,e)
v=B.o3(q,new A.aWZ(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.j(v).i("t.E"))}w=B.ab(s).i("a9<1,ny>")
w=B.P(new B.a9(s,new A.aX_(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gov()
w=j.gov()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bi(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mj
u=!v
t=!u||w===D.dB
s=j.e
r=t?s.a:s.b
t=j.ghC()
s=!u||w===D.dB?C.a6:C.aG
q=B.b([],x.p)
if(w===D.AA||v)j.gov()
if(j.gov().c.a){v=!u||w===D.dB?r:j.gov().c.c
p=!u||w===D.dB?j.gov().c.c:r
o=j.gaZd()
n=!u||w===D.dB?C.aG:C.a6
j.gahh()
m=j.gahh()
l=!u||w===D.dB
k=j.d
l=l?k.f:k.x
u=!u||w===D.dB?k.r:k.y
q.push(B.bi(i,A.bSF(new A.avr(),n,j.aVm(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AB||w===D.dB)j.gov()
return new B.eQ(t,i,i,B.bOe(q,C.m,s,i,C.f,C.N,0,i,i,C.c6),i)}}
A.a_K.prototype={
gbI(){return[this.a,this.b]}}
A.a3V.prototype={
gbI(){return[this.a,this.b]}}
A.Mi.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a3X.prototype={
gaaO(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.avW.prototype={}
A.aCc.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ag3.prototype={}
A.aj0.prototype={}
A.aj1.prototype={}
A.aj8.prototype={}
A.Ka.prototype={
i4(d,e,f){}}
A.vp.prototype={}
A.he.prototype={
gdH(){return null},
gaeT(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.Mh
if(w)return!0
return!(v instanceof A.Me)&&!(v instanceof A.Md)&&!(v instanceof A.Mf)&&!(v instanceof A.Mc)&&!w&&!(v instanceof A.Mg)}}
A.a40.prototype={
gdH(){return this.a.b}}
A.a41.prototype={
gdH(){return this.a.b}}
A.a42.prototype={
gdH(){return this.a.b}}
A.Md.prototype={}
A.Me.prototype={}
A.a45.prototype={
gdH(){return this.a.b}}
A.Mg.prototype={}
A.Mh.prototype={
gdH(){return this.a.b}}
A.a4_.prototype={
gdH(){return this.a.b}}
A.a3Z.prototype={
gdH(){return this.a.b}}
A.Mc.prototype={
gdH(){return this.a.b}}
A.a43.prototype={
gdH(){return this.a.gdH()}}
A.a44.prototype={
gdH(){return this.a.gdH()}}
A.Mf.prototype={
gdH(){return this.a.gdH()}}
A.Fs.prototype={
Yo(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aek(){var w=this,v=null,u=w.ac=B.bte(v,v)
u.ay=new A.aSf(w)
u.ch=new A.aSg(w)
u.CW=new A.aSh(w)
u.cy=new A.aSi(w)
u.cx=new A.aSj(w)
u=w.aE=B.Gg(v,-1,v)
u.B=new A.aSk(w)
u.a3=new A.aSl(w)
u.V=new A.aSm(w)
u=w.bz=B.a5V(v,w.a2,v)
u.p3=new A.aSn(w)
u.p4=new A.aSo(w)
u.RG=new A.aSp(w)},
cu(){var w=x.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.E(w.b,w.d)},
dz(d){return new B.E(d.b,d.d)},
kI(d){return!0},
mT(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bz
w===$&&B.a()
w.rB(d)
w=v.aE
w===$&&B.a()
w.rB(d)
w=v.ac
w===$&&B.a()
w.rB(d)}else if(x.gJ.b(d))v.l5(new A.a44(d))},
gME(d){return new A.aSq(this)},
gMG(d){return new A.aSr(this)},
l5(d){var w,v,u=this
if(u.V==null)return
w=d.gdH()
v=w!=null?u.Zm(w):null
u.V.$2(d,v)
u.a3=C.bo},
gKx(d){return this.a3},
gFc(){var w=this.an
w===$&&B.a()
return w},
aO(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.fg(0)},
$ijg:1}
A.NB.prototype={
Y(){return new A.UR(B.b([],x.r),B.y(x.S,x.I),new A.aI7(B.y(x.y,x.dj)),null,null)}}
A.UR.prototype={
u(d){var w,v=this,u=v.a3Q(),t=v.CW
t.toString
t=v.aan(t.au(0,v.ghA().gp(0)))
w=v.aan(u)
v.a.toString
return new A.K1(new A.a5M(t,w,null),u,null)},
aan(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ab(w).i("a9<1,e4>")
w=B.P(new B.a9(w,new A.bbX(this,d),v),v.i("av.E"))
return d.aPn(w,this.cy)},
a3Q(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Ud(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPC(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aP1(new A.E8(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gay4(),t.c,t.d))}return r},
ay5(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaeT())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.L(new A.bbV(v))
return}v.L(new A.bbW(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3Q(),new A.bbY(w)))}}
A.pu.prototype={
WJ(d,e,f){var w,v,u,t,s,r,q=B.aa(d.f,e.f,f),p=B.aa(d.r,e.r,f),o=B.aa(d.w,e.w,f),n=B.aa(d.x,e.x,f),m=B.aa(d.y,e.y,f),l=B.aa(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a3W(B.a_V(d.a.b,j.b,f),j.a)
w=A.bzF(d.at,e.at,f)
v=A.bzI(d.c,e.c,f)
u=A.bzK(d.d,e.d,f)
t=A.bBE(d.e,e.e,f)
s=A.kj(d.ch,e.ch,f,A.c0i(),x.cz)
s.toString
r=A.kj(d.CW,e.CW,f,A.c0h(),x.J)
r.toString
u=A.bsS(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UO(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bsS(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPC(d,e,f,g){return this.UO(null,null,d,e,f,g,null)},
aP1(d){var w=null
return this.UO(w,d,w,w,w,w,w)},
aPn(d,e){var w=null
return this.UO(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e4.prototype={
aq6(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qc(n.a,new A.aI6())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
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
aca(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aI5(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aP8(d){return this.aca(d,null)},
aPa(d){return this.aca(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NC.prototype={
gbI(){return[this.a]}}
A.a_D.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mn.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.K5.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.y6.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aHS.prototype={
K(){return"LabelDirection."+this.b}}
A.a3Y.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.E8.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5N.prototype={
gbI(){return[4,C.hF,16,D.xg,0,120,A.c0k(),!1,!1,!1,0,C.A,A.c0j()]}}
A.mL.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q_.prototype={}
A.rj.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.tf.prototype={
gbI(){return[this.a,this.b]}}
A.FT.prototype={
gbI(){return[this.a]}}
A.ND.prototype={}
A.yQ.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WJ(v,w,d)}}
A.afR.prototype={}
A.afS.prototype={}
A.ag4.prototype={}
A.aj2.prototype={}
A.aj5.prototype={}
A.akH.prototype={}
A.akI.prototype={}
A.akJ.prototype={}
A.akL.prototype={}
A.akM.prototype={}
A.akN.prototype={}
A.akO.prototype={}
A.ap3.prototype={}
A.aqE.prototype={}
A.aI7.prototype={
Ud(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xH
u=new A.yU(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yR(s,r,q,t,!0)}w=null
try{w=C.b.qc(d,new A.aI8())}catch(p){return D.xH}v=null
try{v=C.b.qc(w.a,new A.aI9())}catch(p){return D.xH}o=v.a
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
if(f<m)m=f}e=new A.yR(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yR.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.akK.prototype={}
A.aIa.prototype={
i4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaO(0)){v=a3.b
u=v.a
v=v.b
$.ah()
a3.a.jm(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aR())
a3.aO1(new B.G(0,0,u,v))}d.a_s(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aQO(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aQK(a3,q,a4)
d.aQP(a3,q,a4)
d.akW(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dB("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v7(q,i,j,k))}}d.aQW(a3,s,a4)
if(w.gaaO(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aQU(a2,a3,v,f,new A.FT(g),a4)}},
aQK(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bsk(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.YW(o,e,u,f)
s=p.air(o,e,t,u,f)
r=p.YY(o,e,t,u,f,!0)
q=p.aiq(o,e,t,u,f)
p.aQN(d,s,p.YV(o,e,t,u,f,!0),f,e)
p.aQH(d,q,r,f,e)
p.aQL(d,t,e)
p.aQJ(d,t,e,f)}},
aQO(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bsk(a6.a),a9=A.bsk(a7.a)
if(a8.length!==a9.length)throw B.e(B.bF("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ab(m).i("cE<1>")
k=B.P(new B.cE(m,l),l.i("av.E"))
j=a3.YW(a4,a6,n,b3)
i=a3.YX(a4,a7.aPa(k),k,b3,j)
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
l=a3.dC(g,a4,b3)
d=a3.fc(f,a4,b3)
a0=a3.dC(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.B.gp(0)
a1.seS(u.mJ(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.E:v).gp(0)
a1.seS(null)}$.ah()
a2=new B.mq(C.dp,C.be,C.dS,C.ek,C.dI).ek()
m=B.dG(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v4(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fT(i,a3.r)
w.restore()}},
aQP(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z1(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fG)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dC(q.b,w,f)
n.$4(q,p/v*100,e,r).acS(s,q,new B.m(p,o))}}},
aQW(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h0(b3,new A.aId())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.Z1(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dC(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.V(B.ri(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lh(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lh(q.$2(m,k))))
f=b1.dC(a1,w,b4)
a3=new B.m(h,f)
a4=b1.dC(a2,w,b4)
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
f.seS(a6.mJ(0,b0))}else{if(a4==null)a4=C.E
f.r=a4.gp(a4)
f.seS(null)}a4=a9.c
f.c=a4
if(a4===0){f.seS(null)
a4=B.bY(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Df(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.ri(d.a))
f.acS(t,j,new B.m(h,g))}}},
YX(d,e,f,g,h){var w=this.ais(d,e,f,g,h)
return w},
YW(d,e,f,g){return this.YX(d,e,f,g,null)},
ais(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.ah().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dC(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f4(d,a0))
if(e===1)g.aB(new B.cs(d,a0))}else g.aB(new B.cs(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.p,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dC(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dC(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dC(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.m(n,l)
s=new B.L3(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hD(r)}return g},
YY(d,e,f,g,h,i){var w,v,u,t,s=this
$.ah()
w=B.bsQ(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,t))
w.aB(new B.cs(s.fc(v.h(g,0).a,d,h),s.dC(v.h(g,0).b,d,h)))
w.aB(new B.p3())
return w},
air(d,e,f,g,h){return this.YY(d,e,f,g,h,!1)},
YV(d,e,f,g,h,i){var w,v,u,t=this
$.ah()
w=B.bsQ(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,0))
w.aB(new B.cs(t.fc(v.h(g,0).a,d,h),t.dC(v.h(g,0).b,d,h)))
w.aB(new B.p3())
return w},
aiq(d,e,f,g,h){return this.YV(d,e,f,g,h,!1)},
aQN(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dC(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.btd(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fT(e,r.r)},
aQH(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dC(t.b,w,g)
s=r.r
s===$&&B.a()
A.btd(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fT(e,r.r)},
aQL(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Nv(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.jV:C.dS
u.e=C.ek
u.r=v.gp(0)
u.seS(null)
u.c=f.x
u.r=v.gp(0)
$.lk()
u.z=new B.yZ(C.aC,w.c*0.57735+0.5)
d.a.fT(B.bsR(A.ayQ(e,f.cy),w.b),this.f)},
aQJ(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.jV:C.dS
q.e=C.ek
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dC(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dC(u.b,r,g)
t=s.f
A.btd(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bQI(t)
d.a.fT(A.ayQ(e,f.cy),s.f)},
aQU(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bFN(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lk().Zs(b4,u.b)
s=u.a
r=w.k(0,C.iG)?new B.ke(1):w
q=new B.tc(new B.hH(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.d_,C.v,r,a8,a8,a8,a8,C.bu,a8)
q.afb(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.K)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dC(b7.b,a9,b9)
l=p+C.hF.gen()
k=o+(w-1)*4+(C.hF.gcY(0)+C.hF.gd_(0))
j=t-k-16
i=a7.Zt(b3,l,D.xg,0)
b3=i+l
w=j+k
h=new B.aU(4,4)
g=B.Fg(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bFM(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lk().K1(new B.E(t,w),0).b
d=new B.m(0,b1)
a0=new B.m(g.a,g.b)
a1=$.lk().K1(new B.E(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vp(0,new A.aIb(a7,b5,g),a0,d,new B.E(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bTe(q.r,q.w)
A:{if(D.Dr===a5){a6=a3
break A}if(D.Ds===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vp(0,new A.aIc(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.E(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z1(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
W4(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aiT(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h0(t,new A.aIe())
return t.length===0?null:t},
aiT(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fG))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dC(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hs(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q_(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v7.prototype={}
A.a5M.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aIa()
t.a0E()
$.ah()
w=B.aR()
w.b=C.aU
t.f=w
w=B.aR()
w.b=C.be
t.r=w
w=B.aR()
w.b=C.aU
t.w=w
w=B.aR()
w.b=C.be
w.r=C.E.gp(0)
w.a=D.a_h
t.x=w
w=B.aR()
w.b=C.aU
w.r=C.B.gp(0)
t.y=w
w=B.aR()
w.b=C.be
w.r=C.l.gp(0)
t.z=w
w=B.aR()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.Q=w
t=new A.a9S(this.d,v,u,t,d,C.bo,new B.bn(),B.aH(x.v))
t.bj()
t.Yo(v.cx)
t.aek()
return t},
bx(d,e){e.sij(0,this.d)
e.sY9(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9S.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sY9(d){var w=this
if(w.hZ.k(0,d))return
w.hZ=d
w.a0c(d.cx)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a07(t,v),new A.vp(u.aC,u.hZ,u.cV,x.o))
s.restore()},
Zm(d){var w=this,v=w.gC(0)
return new A.ND(w.fU.W4(d,v,new A.vp(w.aC,w.hZ,w.cV,x.o)))}}
A.MI.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a07.prototype={
aO1(d){this.a.a.clipRect(B.dG(d),$.oN()[1],!0)
return null},
ad_(d,e){d.aN(this.a,e)},
Vp(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aX(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lk()
s.Y7(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Df(d,e,f,g){var w=B.cB($.ah().r)
w.aB(new B.f4(d.a,d.b))
w.aB(new B.cs(e.a,e.b))
this.a.fT(A.ayQ(w,g),f)}}
A.yU.prototype={
gbI(){return[this.a]}}
A.akV.prototype={}
A.a0h.prototype={}
A.b_s.prototype={
K1(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.m((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aVW(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aU(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aU(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aU(v,v)
s=d.d
return new B.d2(w,u,t,s.a>v||s.b>v?new B.aU(v,v):s)},
aVX(d,e){var w,v
if(d==null)return D.a_t
w=d.b
v=e/2
return d.aPd(w>v?v:w)},
Of(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aYY(w)},
aYY(d){if(d<1)return this.aI4(d)
return this.a7s(d)},
aI4(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7s(d*q)/q},
a7s(d){var w,v=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a4(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a4(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a4(Math.pow(10,v))
else return C.d.a4(Math.pow(10,v))},
aiH(d){if(d>=1)return 1
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
Zs(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iM
w=e.a?u.w.c2(e):e
v=B.bQ(d,C.vb)
v=v==null?null:v.ay
return v===!0?w.c2(C.m1):w},
aiz(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.Pz.prototype={
a3s(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st2(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3s(v)||w.a3s(d))w.a7()
else{w.cP=w.D=null
w.bc()}},
shC(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cP=w.D=null
w.bc()},
scC(d){var w=this
if(w.dn==d)return
w.dn=d
w.G=w.cP=w.D=null
w.bc()},
dz(d){var w,v=this.D$
if(v!=null){w=v.ap(C.ae,C.iA,v.gdh())
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xF(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xF(w)}}else return new B.E(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var w=this.D$
return w==null?null:w.fK(C.iA,e)},
cu(){var w,v,u=this,t=u.D$
if(t!=null){t.dG(C.iA,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.I.prototype.ga6.call(u))
v=new B.as(0,w.b,0,w.d).xF(u.D$.gC(0))
u.fy=t.a(B.I.prototype.ga6.call(u)).c1(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.I.prototype.ga6.call(u)).xF(u.D$.gC(0))
break}u.cP=u.D=null}else{t=x.k.a(B.I.prototype.ga6.call(u))
u.fy=new B.E(B.L(0,t.a,t.b),B.L(0,t.c,t.d))}},
Tq(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c1(new Float64Array(16))
w.fZ()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bv9(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yw(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yw(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.py(n.a,n.b,0)
q.qO(w.a/s.a,w.b/s.b,1,1)
q.fX(-o,-p.b,0,1)
m.cP=q}},
a6o(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.z8(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i_.prototype.gi3.call(s)
t=s.ch.a
return d.z5(r,e,v,u,t instanceof B.q0?t:null)}else s.kq(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tq()
w=s.D
w.toString
if(w&&s.eX!==C.q){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uj?t:null
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFM(),s.eX,t))}else s.ch.sbh(0,s.a6o(d,e))},
e8(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tq()
return d.JL(new A.aSA(v),e,v.cP)},
tq(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eU(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OI()
else{this.Tq()
w=this.cP
w.toString
e.fV(0,w)}}}
A.a3R.prototype={
bl(d){var w=new A.Pz(this.e,this.f,B.e2(d),C.q,null,new B.bn(),B.aH(x.v))
w.bj()
w.sc8(null)
return w},
bx(d,e){e.st2(this.e)
e.shC(this.f)
e.scC(B.e2(d))
if(C.q!==e.eX){e.eX=C.q
e.bc()
e.ct()}}}
var z=a.updateTypes(["M(q1)","C(et)","~(w,fw)","M(e4,w)","M(M,q1)","bI(M,te)","ph(M)","w(q_,q_)","~(he,K7?)","Hl(A,bE)","II(nS)","HF(nR)","vd(@)","e4(M)","w5(@)","al(M,te)","C5(@)","uz(dS<uz>)","M(vd)","M(w5)","wn(A,bE)","AI(z)","U<~>()","q1(@)","xi(@)","M(i9)","C(fw)","~(w,i9)","~(@)","jE(ny)","c(ny)","jE(bB<w,M>)","jE(M)","ny(jE)","~(he,ND?)","e4(e4)","Dt(dS<aCP>)","yQ(@)","mB(G3<mB>)","tf(w)","uA(et,M,e4,w)","rj(mL)","C(e4)","w(v7,v7)","M(fw)","U<nS>(cn<nS>)","q0?(ry,m)","w(w,w,M)","fw(fw,fw,M)","i9(i9,i9,M)","mm(mm,mm,M)","Cm?(fw,w,i9,w)","F(fw)","c(M,te)","et(et,et,M)","C(M)","mG(mG,mG,M)","n5(n5,n5,M)","kE(kE,kE,M)","l2(l2,l2,M)","h(kE)","h(l2)","e4(e4,e4,M)","mn(mn,mn,M)","uA(et,M,e4,w{size:M?})","C(et,e4)","M(m,m)","u<tf>(e4,u<w>)","U<nR>(cn<nR>)","u<rj>(u<mL>)","F(mL)","y4(fe<A?>)"])
A.aCM.prototype={
$1(d){var w=B.ee(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q1(J.ak(v==null?"":v),A.oJ(w.h(0,"revenue_net")),A.oJ(w.h(0,"expense_net")),A.oJ(w.h(0,"result_net")))},
$S:z+23}
A.aCN.prototype={
$1(d){var w,v,u,t=B.ee(x.f.a(d),x.N,x.z),s=B.ap(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.ap(t.h(0,"code"))
v=A.oJ(t.h(0,"gross"))
u=B.bD(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.vd(s,r,w,v,u,A.oJ(t.h(0,"avg_basket")))},
$S:z+12}
A.aCO.prototype={
$1(d){var w,v=B.ee(x.f.a(d),x.N,x.z),u=B.ap(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.bD(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w5(u,t,w,A.oJ(v.h(0,"gross")))},
$S:z+14}
A.aD1.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.C5(v,u,J.ak(t==null?"expense":t),A.tS(w.h(d,"net")),A.tS(w.h(d,"tax")),A.tS(w.h(d,"gross")))},
$S:z+16}
A.boz.prototype={
$1(d){return new A.uz(d.aA($.cd(),x.A))},
$S:z+17}
A.boA.prototype={
$1(d){return new A.Dt(d.aA($.bKj(),x.D))},
$S:z+36}
A.bqo.prototype={
$1(d){return E.bsj()},
$S:z+38}
A.boB.prototype={
$1(d){var w=d.aA($.x0(),x.P)
return d.aA($.atN(),x.a).FD(w)},
$S:z+45}
A.boy.prototype={
$1(d){var w=d.aA($.x0(),x.P)
return d.aA($.atN(),x.a).Fz(w)},
$S:z+68}
A.box.prototype={
$1(d){return this.aik(d)},
aik(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aA($.cd(),x.A).i7("finance_balance_kpis",t),$async$$1)
case 3:s=r.ee(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:207}
A.aCL.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.atN(),x.a).px(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCK.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.atN(),x.a).L8(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD_.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.br7()
if(s.e==null)B.V(B.Z(y.b))
s.gcs().cq(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCT.prototype={
$0(){return this.a.J2(this.b,this.c)},
$S:0}
A.aCU.prototype={
$0(){return this.a.B0(this.b,this.c)},
$S:0}
A.aCV.prototype={
$0(){return B.nX(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aCW.prototype={
$0(){var w=this
return w.a.B1(w.b,w.c,w.d)},
$S:0}
A.aCZ.prototype={
$0(){return D.apv},
$S:100}
A.aCY.prototype={
$2(d,e){return new A.Hl(B.i(d),null)},
$S:z+9}
A.aCX.prototype={
$1(d){return new A.II(d,null)},
$S:z+10}
A.aCS.prototype={
$1(d){var w=null,v=this.a,u=$.en()
v=B.l("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mi(B.b([B.dI(C.d1,w,w,new A.aCQ(u),w,w),B.dW(F.uQ,new A.aCR(u),B.ec(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.uR)},
$S:62}
A.aCQ.prototype={
$0(){B.bo(this.a,!1).dr(!1)
return null},
$S:0}
A.aCR.prototype={
$0(){B.bo(this.a,!1).dr(!0)
return null},
$S:0}
A.bea.prototype={
$0(){var w=this.a.aK(0,$.x0().ghL(),x.V),v=E.bsj()
w.wm(0,v)
return v},
$S:0}
A.beb.prototype={
$0(){var w=this.a.aK(0,$.x0().ghL(),x.V),v=new B.bb(Date.now(),0,!1),u=new E.mB(B.bJ(B.aY(v),1,1,0,0,0,0),v)
w.wm(0,u)
return u},
$S:0}
A.bec.prototype={
$0(){return this.a.Ir(this.b,this.c)},
$S:0}
A.be9.prototype={
$2(d,e){return new B.oq(B.T(d).aOz(B.T(d).ax.aPs(C.h,C.n)),e,null)},
$S:984}
A.bjF.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.e0(),s=A.Nn(!1,C.xz,"Umsatz 7 %",t.ar(u.a),w),r=A.Nn(!1,C.xz,"Umsatz 19 %",t.ar(u.b),w),q=A.Nn(!0,D.a9a,"Umsatz netto",t.ar(u.c),w),p=A.Nn(!1,D.a99,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return E.aFf(1.7,B.b([s,r,q,p,A.Nn(!0,C.nu,"Ergebnis",n,o<0?C.ag:C.aQ),A.Nn(!1,C.j1,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,F.lA,!0)},
$S:119}
A.aHR.prototype={
$0(){return D.aps},
$S:100}
A.aHQ.prototype={
$2(d,e){var w=null
return B.bO(C.ag,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.h,13,C.k),w,w,w),C.fE,w,C.G,w,3)},
$S:262}
A.aHP.prototype={
$1(d){return new A.HF(d,null)},
$S:z+11}
A.bbJ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.e0(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ab(g).i("a9<1,M>"),e=f.i("av.E"),d=B.P(new B.a9(g,new A.bbz(),f),e)
i=A.kd(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.P(new B.a9(g,new A.bbA(),f),e)
d=A.kd(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.P(new B.a9(g,new A.bbB(),f),e)
k=A.kd(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bbC(),f),e)
w=A.kd(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bbD(),f),e)
v=A.kd(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bbE(),f),e)
u=A.kd(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bbF(),f),e)
t=A.kd(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.P(new B.a9(g,new A.bbG(),f),e)
h=A.kd(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.P(new B.a9(g,new A.bbH(m),f),e)
m=A.kd(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=C.d.am(l,1)
l=B.P(new B.a9(g,new A.bbI(l),f),e)
return E.aFf(n,B.b([i,d,k,w,v,u,t,h,m,A.kd(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,l,j)],x.p),o,12,12,F.lA,!0)},
$S:119}
A.bbz.prototype={
$1(d){return d.b},
$S:z+0}
A.bbA.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bbB.prototype={
$1(d){return d.d},
$S:z+0}
A.bbC.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbD.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bbE.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bbF.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbG.prototype={
$1(d){return d.d},
$S:z+0}
A.bbH.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbI.prototype={
$1(d){return this.a},
$S:z+0}
A.bbK.prototype={
$0(){return A.bv6(this.b,1.45,new A.SZ(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbL.prototype={
$0(){return A.bv6(this.b,1.6,new A.T9(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bnI.prototype={
$1(d){var w=this,v=null,u=B.aZ(16),t=x.p,s=B.b([B.au(B.b([B.aP(B.l(w.a,v,v,v,B.c7(C.h,18,C.r),v,v,v),1),B.fc(v,v,D.ab1,v,v,new A.bnH(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.l(w.b,v,v,v,B.D(C.u,12,C.aL),v,v,v),C.a0],t))
s.push(C.x)
s.push(B.cg(new B.mk(w.c,w.d,v),v,17976931348623157e292))
return B.a3c(v,C.l,new B.af(C.am,B.ag(s,C.D,C.f,C.N),v),v,v,v,C.hG,C.uB,v,new B.dg(u,C.A),v)},
$S:985}
A.bnH.prototype={
$0(){return B.bo(this.a,!1).fb()},
$S:0}
A.bbM.prototype={
$0(){var w=this.a,v=B.b9(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bv6(this.b,2.4,new A.Xa(w.w,w.y,w.z,null),C.b.cn(u," \xb7 "),v)
return null},
$S:0}
A.bj1.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bj2.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bj3.prototype={
$1(d){return A.aI5(null,1.4,null,C.ag,0.35,D.af7,D.Di,null,!1,!1,!1,!1,D.EB,!1,10,D.Y0,!0,C.lc,B.b([new A.et(0,d),new A.et(this.a,d)],x.U))},
$S:z+13}
A.b2Z.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b30.prototype={
$2(d,e){var w=null
return B.l(this.a.aJi(d),w,w,w,B.D(C.u,10,C.O),w,w,w)},
$S:z+15}
A.b31.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zz
return new B.af(C.kI,B.l(C.c.cT(this.a[v].a,5),w,w,w,B.D(C.u,9,C.O),w,w,w),w)},
$S:z+5}
A.b3_.prototype={
$1(d){return D.a7M},
$S:z+6}
A.b3M.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3N.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3O.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3P.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zz
return new B.af(C.kI,B.l(this.a[v],w,w,w,B.D(C.h,12,C.r),w,w,w),w)},
$S:z+5}
A.bcf.prototype={
$1(d){return d.d},
$S:z+18}
A.bcg.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bkW.prototype={
$1(d){return d.d},
$S:z+19}
A.bkX.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b1t.prototype={
$0(){return D.apA},
$S:100}
A.b1s.prototype={
$2(d,e){return new A.wn("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+20}
A.b1r.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bO(o,B.ag(B.b([B.l("Noch keine Bilanzdaten erfasst.",o,o,o,B.D(C.h,14,C.O),o,o,o),C.a0,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.D(C.u,12.5,C.k),o,o,o),C.x,B.jU(C.Eb,D.aCk,new A.b1n(p.b,p.c),o)],x.p),C.D,C.f,C.i),C.aq,o,C.G,o,3)
w=new A.b1u(d)
v=C.b.fF(p.a.e.d,0,new A.b1o())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jR(new A.b1p(new A.b1v(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ag(B.b([w,C.a0,B.au(B.b([B.aP(B.l("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.D(C.u,11,C.k),o,o,o),1),B.pX(D.abq,D.aBs,new A.b1q(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:248}
A.b1n.prototype={
$0(){return A.at7(this.a,this.b,null)},
$S:0}
A.b1u.prototype={
$1(d){var w=B.bD(J.a3(this.a,d))
return w==null?null:w},
$S:986}
A.b1v.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.b9(w,".",",")+" %"}return w},
$S:31}
A.b1o.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1p.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.kd(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fi,o.$1("liquidity1_pct")),m=A.kd(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fi,o.$1("liquidity2_pct")),l=A.kd(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fi,o.$1("liquidity3_pct"))
o=A.kd(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fi,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.b9(w,".",",")+" %"}w=A.kd(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fi,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.e0()
v=u.ar(v)
return E.aFf(p,B.b([n,m,l,o,w,A.kd(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.fi,v)],x.p),q,12,12,F.lA,!0)},
$S:119}
A.b1q.prototype={
$0(){return A.at7(this.a,this.b,this.c)},
$S:0}
A.bnG.prototype={
$1(d){return new A.AI(this.a,new A.bnF(this.b),this.c,null)},
$S:z+21}
A.bnF.prototype={
$0(){var w=this.a,v=$.bxm()
if(w.e==null)B.V(B.Z(y.b))
w.gcs().cq(v)},
$S:0}
A.b1i.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1j.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1l.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.tY(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bb(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.L(new A.b1k(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1k.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1m.prototype={
$0(){return B.bo(this.a,!1).fb()},
$S:0}
A.b1w.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1x.prototype={
$1(d){return new A.xi(x.B.a(d),this.a.a.r)},
$S:z+24}
A.avH.prototype={
$1(d){return d.e},
$S:z+25}
A.avI.prototype={
$2(d,e){return d+e},
$S:44}
A.avK.prototype={
$1(d){return d.c.length!==0},
$S:z+26}
A.avM.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdm(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+27}
A.avN.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eN(t,r)
s=s.x
s===$&&B.a()
w.eN(t,s)
u.ad_(v.d,v.e)},
$S:0}
A.avq.prototype={
$1(d){return 0},
$S:987}
A.avp.prototype={
$2(d,e){return B.fg(C.bS,this.a.akD(e),C.t,C.bt,null)},
$S:988}
A.aWW.prototype={
$1(d){return d.a},
$S:z+29}
A.aWX.prototype={
$1(d){return d.b},
$S:z+30}
A.aWY.prototype={
$1(d){return new A.jE(this.a.ch[d.a].a,d.b)},
$S:z+31}
A.aWZ.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mj||v===D.dB))t=1-t
return new A.jE(d,t*w.d)},
$S:z+32}
A.aX_.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gov(),p=d.a
r.gov()
r=$.lk()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.am(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.am(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.am(v/1000,1)
t="K"}else{u=C.d.am(v,r.aiH(Math.abs(s.b-s.c)))
t=""}if(C.c.hG(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.ny(d,q.c.b.$2(p,new A.te(u+t,s.e)))},
$S:z+33}
A.aSf.prototype={
$1(d){this.a.l5(new A.a40(d))},
$S:151}
A.aSg.prototype={
$1(d){this.a.l5(new A.a41(d))},
$S:41}
A.aSh.prototype={
$1(d){this.a.l5(new A.a42(d))},
$S:27}
A.aSi.prototype={
$0(){this.a.l5(D.a11)},
$S:0}
A.aSj.prototype={
$1(d){this.a.l5(new A.Me())},
$S:42}
A.aSk.prototype={
$1(d){this.a.l5(new A.a45(d))},
$S:43}
A.aSl.prototype={
$0(){this.a.l5(D.a12)},
$S:0}
A.aSm.prototype={
$1(d){this.a.l5(new A.Mh(d))},
$S:95}
A.aSn.prototype={
$1(d){this.a.l5(new A.a4_(d))},
$S:148}
A.aSo.prototype={
$1(d){this.a.l5(new A.a3Z(d))},
$S:146}
A.aSp.prototype={
$1(d){return this.a.l5(new A.Mc(d))},
$S:145}
A.aSq.prototype={
$1(d){return this.a.l5(new A.a43(d))},
$S:63}
A.aSr.prototype={
$1(d){return this.a.l5(new A.Mf(d))},
$S:50}
A.bbX.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aP8(w==null?B.b([],x.t):w)},
$S:z+35}
A.bbV.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bbW.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h0(w,new A.bbU())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.FT(w))},
$S:0}
A.bbU.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bbY.prototype={
$1(d){return new A.yQ(x.hf.a(d),this.a.a.r)},
$S:z+37}
A.aI6.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.bon.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bzJ(t?A.buV(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tf(w,new A.y6(!0,A.bvF(),new A.bom(v)))},
$S:z+39}
A.bom.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bOc(A.buV(d,e,f),w,A.bWP(d,e,f))},
$S:z+40}
A.bok.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iU(v,v,u==null?D.dh:u,v,v,v,v,v,v,v,v,14,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rj(C.d.j(d.b),w)},
$S:z+41}
A.aI8.prototype={
$1(d){return d.a.length!==0},
$S:z+42}
A.aI9.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.aId.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+43}
A.aIb.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eN(v,t)
u=u.Q
u===$&&B.a()
w.eN(v,u)},
$S:0}
A.aIc.prototype={
$0(){this.a.ad_(this.b,this.c)},
$S:0}
A.aIe.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avA.prototype={
$1(d){return d.gdm(0)},
$S:z+44}
A.avB.prototype={
$2(d,e){return d+e},
$S:44}
A.avE.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iK(v,B.ab(v).i("iK<1>")).aq(0,new A.avF(w,this.a/(u+1),this.c))},
$S:0}
A.avF.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdm(0)/2
this.c[d]=v
w.a=v+e.gdm(0)/2},
$S:z+2}
A.avC.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdm(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdm(0)/2},
$S:z+2}
A.avD.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdm(0)/2
this.c[d]=u
u+=e.gdm(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFe.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:989}
A.ayR.prototype={
$1(d){return d},
$S:990}
A.aSA.prototype={
$2(d,e){return this.a.Ao(d,e)},
$S:22};(function aliases(){var w=A.K0.prototype
w.a_s=w.i4
w.akW=w.aQQ
w.akX=w.acT
w=A.SB.prototype
w.anz=w.l
w=A.Ka.prototype
w.a_t=w.i4
w=A.Fs.prototype
w.a0c=w.Yo})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c_o","bO9",71)
v(A.SD.prototype,"gaDb","HR",22)
u(A.SE.prototype,"garl","arm",8)
t(A,"bZf",3,null,["$3"],["bLu"],48,0)
t(A,"bZg",3,null,["$3"],["bLv"],49,0)
t(A,"bZh",3,null,["$3"],["bLw"],50,0)
t(A,"bZj",4,null,["$4"],["c_1"],51,0)
w(A,"bZi","c_0",52)
s(A,"bva","c_2",53)
t(A,"bZa",3,null,["$3"],["bOd"],54,0)
w(A,"Zc","c1p",55)
w(A,"at9","c_5",6)
t(A,"bZc",3,null,["$3"],["bOZ"],56,0)
t(A,"bZe",3,null,["$3"],["bU7"],57,0)
t(A,"bZb",3,null,["$3"],["bOY"],58,0)
t(A,"bZd",3,null,["$3"],["bU6"],59,0)
w(A,"c8u","bOX",60)
w(A,"c8v","bU5",61)
r(A.X_.prototype,"ga3O","awN",28)
u(A.UR.prototype,"gay4","ay5",34)
t(A,"c0i",3,null,["$3"],["bPt"],62,0)
t(A,"c0h",3,null,["$3"],["bLy"],63,0)
w(A,"c0l","c1q",1)
t(A,"bG9",4,null,["$5$size","$4"],["bEB",function(d,e,f,g){return A.bEB(d,e,f,g,null)}],64,0)
s(A,"bvF","c1o",65)
s(A,"bGa","bYY",66)
s(A,"bGd","c_8",67)
s(A,"bGc","c_4",3)
s(A,"bGb","c_3",3)
w(A,"c0k","bFN",69)
w(A,"c0j","bFM",70)
u(A.Pz.prototype,"gaFM","a6o",46)
t(A,"Zh",3,null,["$3"],["c0g"],47,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5y,A.af3,A.ak4,A.Id,A.II,A.af1,A.Hl,A.HF,A.ajo,A.akA,A.TI,A.Xa,A.SZ,A.T9,A.al3,A.ahu,A.Ix,A.aqB,A.wn,A.K1,A.A9])
u(B.A,[A.uz,A.Dt,A.b7,A.ag3,A.afU,A.afW,A.afX,A.afO,A.aj8,A.ag_,A.afY,A.avW,A.aqF,A.avJ,A.afV,A.Ka,A.a4B,A.te,A.ap5,A.ap4,A.afN,A.aj7,A.et,A.aj4,A.aj6,A.ank,A.ajW,A.ari,A.aj5,A.aiO,A.aj3,A.avo,A.bbS,A.avr,A.afK,A.ny,A.aj0,A.aj1,A.vp,A.he,A.akI,A.akL,A.afR,A.ag4,A.afS,A.aj2,A.akO,A.akM,A.aqE,A.ap3,A.aI7,A.akK,A.v7,A.a07,A.akV,A.a0h,A.b_s])
u(B.ux,[A.q1,A.vd,A.w5,A.ayf,A.azm,A.nR,A.C5,A.nS])
u(B.nD,[A.aCM,A.aCN,A.aCO,A.aD1,A.boz,A.boA,A.bqo,A.boB,A.boy,A.box,A.aCX,A.aCS,A.aHP,A.bbz,A.bbA,A.bbB,A.bbC,A.bbD,A.bbE,A.bbF,A.bbG,A.bbH,A.bbI,A.bnI,A.bj3,A.b3_,A.b3M,A.b3N,A.bcf,A.bkW,A.b1r,A.b1u,A.b1v,A.bnG,A.b1x,A.avH,A.avK,A.avq,A.aWW,A.aWX,A.aWY,A.aWZ,A.aX_,A.aSf,A.aSg,A.aSh,A.aSj,A.aSk,A.aSm,A.aSn,A.aSo,A.aSp,A.aSq,A.aSr,A.bbX,A.bbY,A.aI6,A.bon,A.bom,A.bok,A.aI8,A.aI9,A.avA,A.ayR])
t(A.y4,B.fr)
u(B.xx,[A.aCL,A.aCK,A.aD_,A.aCT,A.aCU,A.aCV,A.aCW,A.aCZ,A.aCQ,A.aCR,A.bea,A.beb,A.bec,A.aHR,A.bbK,A.bbL,A.bnH,A.bbM,A.b1t,A.b1n,A.b1q,A.bnF,A.b1i,A.b1j,A.b1l,A.b1k,A.b1m,A.b1w,A.avN,A.aSi,A.aSl,A.bbV,A.bbW,A.aIb,A.aIc,A.avE])
u(B.xE,[A.y5,A.amf,A.a5z,A.afQ])
u(B.xy,[A.aCY,A.be9,A.bjF,A.aHQ,A.bbJ,A.bj1,A.bj2,A.b2Z,A.b30,A.b31,A.b3O,A.b3P,A.bcg,A.bkX,A.b1s,A.b1o,A.b1p,A.avI,A.avM,A.avp,A.bbU,A.aId,A.aIe,A.avB,A.avF,A.avC,A.avD,A.aFe,A.aSA])
u(B.O,[A.AI,A.QG])
u(B.a0,[A.SD,A.X_])
u(B.MV,[A.K6,A.NB])
u(B.xa,[A.SE,A.UR])
t(A.a_K,A.ag3)
t(A.afJ,A.a_K)
t(A.a_u,A.afJ)
u(A.a_u,[A.afT,A.akJ])
t(A.nz,A.afT)
u(B.U7,[A.avy,A.acv,A.Cl,A.aCc,A.aHS,A.MI])
t(A.fw,A.afU)
t(A.i9,A.afW)
t(A.mm,A.afX)
t(A.a_B,A.afO)
t(A.Mi,A.aj8)
u(A.Mi,[A.afZ,A.akN])
t(A.a_G,A.afZ)
t(A.a_H,A.ag_)
t(A.Cm,A.afY)
u(A.avW,[A.K7,A.ND])
t(A.acx,A.aqF)
t(A.ag0,A.acx)
t(A.a_I,A.ag0)
u(B.b5,[A.xi,A.yQ])
t(A.ub,A.afV)
t(A.K0,A.Ka)
u(A.K0,[A.avL,A.aIa])
u(B.Nx,[A.a_E,A.a5M])
u(B.J,[A.Fs,A.afL])
u(A.Fs,[A.a9F,A.a9S])
t(A.pQ,A.ap5)
t(A.ab3,A.ap4)
t(A.oV,A.afN)
t(A.uB,A.aj7)
t(A.y7,A.aj4)
t(A.ph,A.aj6)
t(A.Pf,A.ank)
t(A.mG,A.ajW)
t(A.n5,A.ari)
u(A.ph,[A.ajV,A.arh])
t(A.kE,A.ajV)
t(A.l2,A.arh)
t(A.a3Y,A.aj5)
u(A.a3Y,[A.ajU,A.arg])
t(A.a4M,A.ajU)
t(A.acV,A.arg)
t(A.M0,A.aiO)
t(A.uA,A.aj3)
t(A.Mb,A.uA)
t(A.ab4,B.fV)
t(A.afM,A.afL)
t(A.SB,A.afM)
t(A.a_v,A.SB)
t(A.jE,A.afK)
t(A.a3V,A.aj0)
t(A.a3X,A.aj1)
u(A.he,[A.a40,A.a41,A.a42,A.Md,A.Me,A.a45,A.Mg,A.Mh,A.a4_,A.a3Z,A.Mc,A.a43,A.a44,A.Mf])
t(A.pu,A.akJ)
t(A.e4,A.akI)
t(A.NC,A.akL)
t(A.a_D,A.afR)
t(A.mn,A.ag4)
t(A.K5,A.afS)
t(A.y6,A.aj2)
t(A.E8,A.akN)
t(A.a5N,A.akO)
t(A.akH,A.et)
t(A.mL,A.akH)
t(A.q_,A.mL)
t(A.rj,A.akM)
t(A.tf,A.aqE)
t(A.FT,A.ap3)
t(A.yR,A.akK)
t(A.yU,A.akV)
t(A.Pz,B.PM)
t(A.a3R,B.bI)
w(A.afO,A.b7)
w(A.afT,A.b7)
w(A.afU,A.b7)
w(A.afW,A.b7)
w(A.afX,A.b7)
w(A.afY,A.b7)
w(A.afZ,A.b7)
w(A.ag_,A.b7)
w(A.ag0,A.b7)
w(A.afV,A.b7)
w(A.afJ,A.b7)
w(A.afN,A.b7)
w(A.aiO,A.b7)
w(A.aj3,A.b7)
w(A.aj4,A.b7)
w(A.aj6,A.b7)
w(A.aj7,A.b7)
w(A.ajV,A.b7)
w(A.ajU,A.b7)
w(A.ajW,A.b7)
w(A.ank,A.b7)
w(A.ap4,A.b7)
w(A.ap5,A.b7)
w(A.aqF,A.b7)
w(A.arh,A.b7)
w(A.arg,A.b7)
w(A.ari,A.b7)
w(A.afK,A.b7)
v(A.afL,B.aA)
w(A.afM,B.dZ)
v(A.SB,B.a2W)
w(A.ag3,A.b7)
w(A.aj0,A.b7)
w(A.aj1,A.b7)
w(A.aj8,A.b7)
w(A.afR,A.b7)
w(A.afS,A.b7)
w(A.ag4,A.b7)
w(A.aj2,A.b7)
w(A.aj5,A.b7)
w(A.akH,A.b7)
w(A.akI,A.b7)
w(A.akJ,A.b7)
w(A.akL,A.b7)
w(A.akM,A.b7)
w(A.akN,A.b7)
w(A.akO,A.b7)
w(A.ap3,A.b7)
w(A.aqE,A.b7)
w(A.akK,A.b7)
w(A.akV,A.b7)})()
B.bl8(b.typeUniverse,JSON.parse('{"a5y":{"a_":[],"c":[]},"Dt":{"aCP":[]},"y4":{"fr":["be<~>"],"fr.T":"be<~>"},"II":{"a_":[],"c":[]},"Hl":{"a_":[],"c":[]},"y5":{"bp":[],"O":[],"c":[]},"af3":{"a_":[],"c":[]},"ak4":{"a_":[],"c":[]},"amf":{"bp":[],"O":[],"c":[]},"Id":{"a_":[],"c":[]},"af1":{"a_":[],"c":[]},"HF":{"a_":[],"c":[]},"wn":{"a_":[],"c":[]},"AI":{"O":[],"c":[]},"a5z":{"bp":[],"O":[],"c":[]},"ajo":{"a_":[],"c":[]},"akA":{"a_":[],"c":[]},"TI":{"a_":[],"c":[]},"Xa":{"a_":[],"c":[]},"SZ":{"a_":[],"c":[]},"T9":{"a_":[],"c":[]},"al3":{"a_":[],"c":[]},"ahu":{"a_":[],"c":[]},"Ix":{"a_":[],"c":[]},"aqB":{"a_":[],"c":[]},"afQ":{"bp":[],"O":[],"c":[]},"SD":{"a0":["AI"]},"K6":{"O":[],"c":[]},"SE":{"a0":["K6"]},"nz":{"b7":[]},"fw":{"b7":[]},"i9":{"b7":[]},"mm":{"b7":[]},"Cm":{"b7":[]},"xi":{"b5":["nz"],"b0":["nz"],"b0.T":"nz","b5.T":"nz"},"a_B":{"b7":[]},"a_G":{"b7":[]},"a_H":{"b7":[]},"a_I":{"b7":[]},"ub":{"b7":[]},"a_E":{"aV":[],"c":[]},"a9F":{"J":[],"I":[],"jg":[],"aQ":[]},"ph":{"b7":[]},"mG":{"b7":[]},"n5":{"b7":[]},"kE":{"b7":[]},"l2":{"b7":[]},"uA":{"b7":[]},"a_u":{"b7":[]},"pQ":{"b7":[]},"ab3":{"b7":[]},"oV":{"b7":[]},"uB":{"b7":[]},"y7":{"b7":[]},"acx":{"b7":[]},"Pf":{"b7":[]},"a4M":{"b7":[]},"acV":{"b7":[]},"M0":{"b7":[]},"Mb":{"b7":[]},"K1":{"a_":[],"c":[]},"QG":{"O":[],"c":[]},"X_":{"a0":["QG"]},"jE":{"b7":[]},"ab4":{"fV":[],"aV":[],"c":[]},"a_v":{"dZ":["J","hf"],"J":[],"aA":["J","hf"],"I":[],"aQ":[],"aA.1":"hf","dZ.1":"hf","aA.0":"J"},"A9":{"a_":[],"c":[]},"a_K":{"b7":[]},"a3V":{"b7":[]},"Mi":{"b7":[]},"a3X":{"b7":[]},"a40":{"he":[]},"a41":{"he":[]},"a42":{"he":[]},"Md":{"he":[]},"Me":{"he":[]},"a45":{"he":[]},"Mg":{"he":[]},"Mh":{"he":[]},"a4_":{"he":[]},"a3Z":{"he":[]},"Mc":{"he":[]},"a43":{"he":[]},"a44":{"he":[]},"Mf":{"he":[]},"Fs":{"J":[],"I":[],"jg":[],"aQ":[]},"NB":{"O":[],"c":[]},"UR":{"a0":["NB"]},"pu":{"b7":[]},"e4":{"b7":[]},"mn":{"b7":[]},"mL":{"et":[],"b7":[]},"q_":{"mL":[],"et":[],"b7":[]},"rj":{"b7":[]},"tf":{"b7":[]},"FT":{"b7":[]},"yQ":{"b5":["pu"],"b0":["pu"],"b0.T":"pu","b5.T":"pu"},"NC":{"b7":[]},"a_D":{"b7":[]},"K5":{"b7":[]},"y6":{"b7":[]},"a3Y":{"b7":[]},"E8":{"b7":[]},"a5N":{"b7":[]},"yR":{"b7":[]},"a5M":{"aV":[],"c":[]},"a9S":{"J":[],"I":[],"jg":[],"aQ":[]},"yU":{"b7":[]},"Pz":{"J":[],"bt":["J"],"I":[],"aQ":[]},"a3R":{"bI":[],"aV":[],"c":[]}}'))
B.bE5(b.typeUniverse,JSON.parse('{"K0":1,"Mi":1,"Ka":1,"Fs":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("C5"),e:w("be<nR>"),aN:w("be<nS>"),fM:w("be<a2<h,@>?>"),b:w("be<~>"),W:w("jE"),B:w("nz"),dB:w("fw"),T:w("ub"),fj:w("i9"),G:w("mm"),J:w("mn"),k:w("as"),cX:w("a0h<M>"),dO:w("uj"),R:w("ai<h,@>"),v:w("hP"),bz:w("mv<bb>"),f0:w("nJ"),E:w("b7"),F:w("y4"),X:w("nR"),P:w("mB"),D:w("uz"),a:w("aCP"),d:w("nS"),cw:w("et"),L:w("hf"),m:w("df<w,F>"),cm:w("kE"),dv:w("mG"),g:w("B<ny>"),O:w("B<fw>"),Y:w("B<i9>"),C:w("B<bs4>"),U:w("B<et>"),K:w("B<a4B>"),u:w("B<e4>"),bC:w("B<v7>"),aA:w("B<u<et>>"),r:w("B<FT>"),s:w("B<h>"),eg:w("B<tc>"),df:w("B<q_>"),p:w("B<c>"),n:w("B<M>"),t:w("B<w>"),eF:w("bc<a0<O>>"),Z:w("mL"),cz:w("e4"),hf:w("pu"),dj:w("yR"),fT:w("rj"),c_:w("ig<oD<be<~>>>"),x:w("yU<fw>"),y:w("yU<e4>"),I:w("u<w>"),ef:w("vd"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jS"),aU:w("A"),Q:w("vp<nz>"),o:w("vp<pu>"),eo:w("pG"),gJ:w("pH"),V:w("n_<mB>"),N:w("h"),A:w("om"),bO:w("bT"),er:w("tc"),j:w("w5"),dw:w("q_"),bY:w("tf"),cZ:w("q1"),gc:w("kb"),es:w("l2"),bN:w("n5"),l:w("c"),q:w("Bw"),g4:w("iv<M>"),cJ:w("C"),i:w("M"),z:w("@"),S:w("w"),bn:w("xi?"),f3:w("yQ?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("kb?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.At=new B.qv(C.n,B.aw("qv<F>"))
D.AA=new A.Cl(0,"left")
D.mj=new A.Cl(1,"top")
D.AB=new A.Cl(2,"right")
D.dB=new A.Cl(3,"bottom")
D.at8=new A.pQ(!1,A.bva(),22,null)
D.kb=new A.oV(16,null,D.at8,!0)
D.a7N=new A.ph(C.B,null,2,null)
D.vF=new A.K5(!1,D.a7N,A.c0l(),!0)
D.a_8=new A.avy(3,"spaceEvenly")
D.a_h=new B.xm(6,"dstIn")
D.Xl=new B.aU(3,3)
D.AF=new B.d2(D.Xl,D.Xl,C.Z,C.Z)
D.a_t=new B.b6(C.B,0,C.P,-1)
D.Bc=new A.a3X()
D.a11=new A.Md()
D.a12=new A.Mg()
D.aJK=new A.ab3()
D.ajG=w([],B.aw("B<kE>"))
D.ajH=w([],B.aw("B<l2>"))
D.Dd=new A.M0(D.ajG,D.ajH,!0)
D.a7u=new B.es("Zeitraum",!1,null)
D.a7z=new B.es("Konten (SKR 03)",!1,null)
D.xg=new A.aCc(0,"center")
D.aJW=new A.y6(!0,A.bvF(),A.bG9())
D.Di=new A.y6(!1,A.bvF(),A.bG9())
D.Dj=new A.y7(!1,!0,null,A.at9(),A.Zc(),!0,null,A.at9(),A.Zc())
D.aJX=new A.y7(!0,!0,null,A.at9(),A.Zc(),!0,null,A.at9(),A.Zc())
D.a3l=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a37=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3u=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3p=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2T=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2S=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3P=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3e=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3S=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3M=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.anA=new B.df([50,D.a3l,100,D.a37,200,D.a3u,300,D.a3p,400,D.a2T,500,D.a2S,600,D.a3P,700,D.a3e,800,D.a3S,900,D.a3M],x.m)
D.dh=new B.rq(D.anA,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ag3=w([8,4],x.t)
D.a7L=new A.ph(D.dh,null,0.4,D.ag3)
D.a7M=new A.ph(C.al,null,0.5,null)
D.fG=new A.et(0/0,0/0)
D.ata=new A.pQ(!0,A.bva(),44,null)
D.mk=new A.oV(16,null,D.ata,!0)
D.at9=new A.pQ(!0,A.bva(),30,null)
D.ml=new A.oV(16,null,D.at9,!0)
D.a7O=new A.uB(!1,D.mk,D.ml,D.mk,D.ml)
D.aJY=new A.uB(!0,D.mk,D.ml,D.mk,D.ml)
D.Dr=new A.MI(0,"left")
D.a8m=new A.MI(1,"center")
D.Ds=new A.MI(2,"right")
D.a8r=new B.ad(57495,"MaterialIcons",null,!1)
D.a96=new B.ad(58927,"MaterialIcons",null,!1)
D.a99=new B.ad(59005,"MaterialIcons",null,!0)
D.a9a=new B.ad(59007,"MaterialIcons",null,!0)
D.a9b=new B.ad(59011,"MaterialIcons",null,!1)
D.a9X=new B.ad(62589,"MaterialIcons",null,!1)
D.a9n=new B.ad(61349,"MaterialIcons",null,!1)
D.aaF=new B.aS(D.a9n,20,C.h,null,null)
D.a9t=new B.ad(61487,"MaterialIcons",null,!1)
D.aaH=new B.aS(D.a9t,18,null,null,null)
D.ab1=new B.aS(C.kX,null,C.h,null,null)
D.ab3=new B.aS(C.xt,null,C.u,null,null)
D.abq=new B.aS(C.ny,16,null,null,null)
D.a8D=new B.ad(57912,"MaterialIcons",null,!1)
D.abx=new B.aS(D.a8D,null,C.ag,null,null)
D.adE=new A.a5z(null)
D.aK2=new A.aHS(0,"horizontal")
D.xH=new A.yR(0,0,0,0,!1)
D.EB=new A.NC(0.5)
D.Bg=new A.a5N()
D.adI=new A.E8(D.Bg,A.bGd(),10,A.bGa(),!0,A.bGc(),A.bGb(),!1,null,null,null)
D.aK4=new A.E8(D.Bg,A.bGd(),10,A.bGa(),!0,A.bGc(),A.bGb(),!0,null,null,null)
D.af7=w([4,3],x.t)
D.art=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.arj=new B.aG("receivables","Forderungen (kurzfristig)")
D.ar8=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.ar6=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aqX=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.ar1=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arq=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ari=new B.aG("equity","Eigenkapital")
D.GR=w([D.art,D.arj,D.ar8,D.ar6,D.aqX,D.ar1,D.arq,D.ari],B.aw("B<+(h,h)>"))
D.aK8=w([],x.g)
D.ajs=w([],x.O)
D.ajt=w([],x.Y)
D.aju=w([],B.aw("B<mm>"))
D.ajv=w([],B.aw("B<mn>"))
D.aK9=w([],x.U)
D.aKa=w([],x.u)
D.ajw=w([],x.r)
D.aob={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SY={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yk=new B.ai(D.SY,[0,0,0,0,0,0,0,C.cF],B.aw("ai<h,A>"))
D.ao9={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.anv=new B.ai(D.ao9,[0,0,0,0],B.aw("ai<h,w>"))
D.aoo={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.amT=new B.ai(D.aoo,[0,0,0,0,null,null,null,null],B.aw("ai<h,w?>"))
D.amP=new B.ai(D.aob,[D.yk,D.yk,D.yk,C.cF,C.cF,C.cF,D.anv,D.amT],x.R)
D.an5=new B.ai(D.SY,[0,0,0,0,0,0,0,C.cE],x.R)
D.ao8={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.anw=new B.ai(D.ao8,[0,0,0,0,0,0,0,C.cE],x.R)
D.a3X=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a44=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2W=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3h=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3r=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4h=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2J=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3j=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3t=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3N=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.anB=new B.df([50,D.a3X,100,D.a44,200,D.a2W,300,D.a3h,400,D.a3r,500,D.a4h,600,D.a2J,700,D.a3j,800,D.a3t,900,D.a3N],x.m)
D.SN=new B.rq(D.anB,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6Z=new B.aj(32,32,32,32)
D.aps=new B.af(D.a6Z,C.bD,null)
D.a70=new B.aj(48,48,48,48)
D.apv=new B.af(D.a70,C.bD,null)
D.apA=new B.af(C.am,C.bD,null)
D.ajI=w([],B.aw("B<mG>"))
D.ajJ=w([],B.aw("B<n5>"))
D.Xm=new A.Pf(D.ajI,D.ajJ)
D.as4=new B.fW("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.as6=new B.fW("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.as8=new B.fW("Automaten-Business","Umsatz je Automat",null,null)
D.as9=new B.fW("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.asb=new B.fW("Top","Meistverkaufte Produkte",null,null)
D.ase=new B.fW("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asf=new B.fW("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y0=new B.rY(C.E,C.p,0)
D.aux=new B.cX(18,18,C.mv,null)
D.aC4=new B.al("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.auM=new B.em(D.aC4,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aBB=new B.al("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.auN=new B.em(D.aBB,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aKj=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBs=new B.al("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aCk=new B.al("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zb=new A.acv(0,"auto")
D.aCR=new A.acv(1,"top")
D.aH2=new A.wn("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aH3=new A.wn("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c8U","bKj",()=>B.jl(new A.boz(),x.D))
w($,"c8V","atN",()=>B.jl(new A.boA(),x.a))
w($,"c9P","x0",()=>B.btU(new A.bqo(),x.P))
w($,"c8W","br7",()=>C.aO.$1$1(new A.boB(),x.d))
w($,"c8T","bKi",()=>C.aO.$1$1(new A.boy(),x.X))
w($,"c8S","bxm",()=>C.aO.$1$1(new A.box(),x.h))
w($,"c8R","br6",()=>B.aXO(A.c_o(),x.F,x.b))
w($,"c2a","bqK",()=>new A.avo())
v($,"c5o","lk",()=>new A.b_s())})()};
(a=>{a["+rqjb8gvUXh7W139Lgq1P8uDufA="]=a.current})($__dart_deferred_initializers__);