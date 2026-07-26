((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NC(d,e,f,g,h){return new A.a5V(f,g,d,h,e,null)},
a5V:function a5V(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uD:function uD(d){this.a=d},
DE:function DE(d){this.a=d},
bPz(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.T_
w=x.f
v=x.N
u=x.z
t=A.aDH(B.dx(w.a(e.h(a0,"current")),v,u))
s=A.aDH(B.dx(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDH(B.dx(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cj
p=J.d0(p,new A.aDp(),x.cZ)
p=B.P(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cj
o=J.d0(o,new A.aDq(),x.ef)
o=B.P(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cj
q=J.d0(q,new A.aDr(),x.j)
q=B.P(q,q.$ti.i("aw.E"))
n=B.dx(w.a(e.h(a0,"customer")),v,u)
m=B.bn(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.oS(n.h(0,"app_gross"))
k=B.bn(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.oS(n.h(0,"avg_basket"))
u=B.dx(w.a(e.h(a0,"derived")),v,u)
v=A.oS(u.h(0,"gross_margin_pct"))
e=A.oS(u.h(0,"net_margin_pct"))
w=A.oS(u.h(0,"ebitda_margin_pct"))
j=A.oS(u.h(0,"cashflow_operating"))
i=A.bp4(u.h(0,"revenue_growth_yoy_pct"))
h=A.bp4(u.h(0,"revenue_growth_mom_pct"))
g=A.bp4(u.h(0,"result_growth_yoy_pct"))
u=A.bp4(u.h(0,"result_growth_mom_pct"))
f=B.bn(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.nZ(t,s,r,p,o,q,new A.ayS(m,l,k,n),new A.azZ(v,e,w,j,i,h,g,u),f)},
oS(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k0(J.an(d))
return w==null?0:w},
bp4(d){if(d==null)return null
if(typeof d=="number")return d
return B.k0(J.an(d))},
q7:function q7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vg:function vg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
w7:function w7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayS:function ayS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azZ:function azZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nZ:function nZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aDp:function aDp(){},
aDq:function aDq(){},
aDr:function aDr(){},
aDH(d){var w=J.Y(d),v=A.tX(w.h(d,"revenue_net_7")),u=A.tX(w.h(d,"revenue_net_19")),t=A.tX(w.h(d,"revenue_net")),s=A.tX(w.h(d,"expense_net")),r=A.tX(w.h(d,"result_net")),q=A.tX(w.h(d,"vat_collected")),p=A.tX(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cj
w=J.d0(w,new A.aDI(),x._)
w=B.P(w,w.$ti.i("aw.E"))
return new A.o_(v,u,t,s,r,q,p,w)},
tX(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k0(J.an(d))
return w==null?0:w},
Ce:function Ce(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o_:function o_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDI:function aDI(){},
bPy(d){return new A.yb(d,new B.ij(x.c_),C.dD)},
bpS:function bpS(){},
bpT:function bpT(){},
brL:function brL(){},
bpU:function bpU(){},
bpR:function bpR(){},
bpQ:function bpQ(){},
yb:function yb(d,e,f){this.r=d
this.a=e
this.f=f},
aDo:function aDo(d,e,f){this.a=d
this.b=e
this.c=f},
aDn:function aDn(d,e,f){this.a=d
this.b=e
this.c=f},
bPA(){return new A.yc(null)},
akB(d,e,f,g,h){return new A.akA(e,h,g,f,d,null)},
yc:function yc(d){this.a=d},
aDG:function aDG(d){this.a=d},
aDy:function aDy(d,e,f){this.a=d
this.b=e
this.c=f},
aDz:function aDz(d,e,f){this.a=d
this.b=e
this.c=f},
aDA:function aDA(d){this.a=d},
aDx:function aDx(){},
aDB:function aDB(d){this.a=d},
aDC:function aDC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDF:function aDF(){},
aDE:function aDE(){},
aDD:function aDD(){},
aDw:function aDw(d,e){this.a=d
this.b=e},
aDu:function aDu(d){this.a=d},
aDv:function aDv(d){this.a=d},
afq:function afq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
akA:function akA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amM:function amM(d,e){this.e=d
this.a=e},
bfc:function bfc(d){this.a=d},
bfd:function bfd(d){this.a=d},
bfe:function bfe(d,e,f){this.a=d
this.b=e
this.c=f},
bfb:function bfb(){},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IV:function IV(d,e){this.c=d
this.a=e},
bkX:function bkX(d){this.a=d},
afo:function afo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HA:function HA(d,e){this.c=d
this.a=e},
bwt(d,e,f,g,h){var w=null
return B.j4(w,w,!0,w,new A.bp_(h,g,e,f),d,w,!0,!0,x.H)},
jA(d,e,f,g,h,i,j,k,l,m,n){return new A.al6(g,n,i,e,d,m,f,k,l,j,null)},
atF(d,e,f){var w=0,v=B.r(x.H)
var $async$atF=B.m(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.l(B.j4(null,null,!0,null,new A.boY(f,e,e.aJ(0,$.c1(),x.A)),d,null,!0,!0,x.H),$async$atF)
case 2:return B.p(null,v)}})
return B.q($async$atF,v)},
a5W:function a5W(d){this.a=d},
aIw:function aIw(){},
aIv:function aIv(){},
aIu:function aIu(){},
HU:function HU(d,e){this.c=d
this.a=e},
bcL:function bcL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcA:function bcA(){},
bcB:function bcB(){},
bcC:function bcC(){},
bcD:function bcD(){},
bcE:function bcE(){},
bcF:function bcF(){},
bcG:function bcG(){},
bcH:function bcH(){},
bcI:function bcI(d){this.a=d},
bcJ:function bcJ(d){this.a=d},
bcK:function bcK(d){this.a=d},
bcM:function bcM(d,e){this.a=d
this.b=e},
bcN:function bcN(d,e){this.a=d
this.b=e},
bp_:function bp_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boZ:function boZ(d){this.a=d},
ajU:function ajU(d){this.a=d},
al6:function al6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bcO:function bcO(d,e){this.a=d
this.b=e},
TY:function TY(d,e,f){this.c=d
this.d=e
this.a=f},
Xu:function Xu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkb:function bkb(){},
bkc:function bkc(){},
bkd:function bkd(d){this.a=d},
Tb:function Tb(d,e,f){this.c=d
this.d=e
this.a=f},
b3L:function b3L(){},
b3N:function b3N(d){this.a=d},
b3O:function b3O(d){this.a=d},
b3M:function b3M(){},
Tn:function Tn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4y:function b4y(){},
b4z:function b4z(){},
b4A:function b4A(){},
b4B:function b4B(d){this.a=d},
alA:function alA(d,e){this.c=d
this.a=e},
bdh:function bdh(){},
bdi:function bdi(){},
ahX:function ahX(d,e){this.c=d
this.a=e},
BM:function BM(d,e,f){this.c=d
this.d=e
this.a=f},
ar8:function ar8(d,e){this.c=d
this.a=e},
bmd:function bmd(){},
bme:function bme(){},
wp:function wp(d,e){this.c=d
this.a=e},
age:function age(d,e){this.e=d
this.a=e},
b2f:function b2f(){},
b2e:function b2e(){},
b2d:function b2d(d,e,f){this.a=d
this.b=e
this.c=f},
b29:function b29(d,e){this.a=d
this.b=e},
b2g:function b2g(d){this.a=d},
b2h:function b2h(d){this.a=d},
b2a:function b2a(){},
b2b:function b2b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2c:function b2c(d,e,f){this.a=d
this.b=e
this.c=f},
boY:function boY(d,e,f){this.a=d
this.b=e
this.c=f},
boX:function boX(d){this.a=d},
AS:function AS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SP:function SP(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b24:function b24(d){this.a=d},
b25:function b25(d){this.a=d},
b27:function b27(d,e){this.a=d
this.b=e},
b26:function b26(d,e){this.a=d
this.b=e},
b28:function b28(d){this.a=d},
bd:function bd(){},
bzM(d){return new A.Kl(d,C.au,C.dt,null,null)},
Kl:function Kl(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SQ:function SQ(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ft$=f
_.cS$=g
_.c=_.a=null},
b2i:function b2i(d,e){this.a=d
this.b=e},
b2j:function b2j(d){this.a=d},
awa(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akx:f,p=a0==null?16:a0,o=d==null?D.a_w:d,n=g==null,m=n?A.bsY(r,r,r,r,r,r,r,r):g,l=a3==null?D.XG:a3
n=n?A.bsY(r,r,r,r,r,r,r,r):g
w=j==null?D.Dq:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nI(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bn,s,w,i,n)},
awh(d,e,f,g,h){var w=d==null?D.aky:d,v=e==null?2:e,u=g==null?C.lj:g
return new A.fy(h,f===!0,w,v,u)},
bMT(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.awh(A.kl(d.c,e.c,f,A.c_L(),x.fj),B.ab(d.d,e.d,f),!1,A.kl(d.e,e.e,f,A.ZC(),x.S),w)},
a00(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T7
else w=h
v=m==null
u=v?8:m
t=$.lp()
s=t.aWf(f,v?8:m)
t=t.aWg(g,v?8:m)
v=d==null?A.bzK(r,r,r,r,r):d
return new A.id(q,l,w,j,u,s,e,t,v,k==null?D.akz:k)},
bMU(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mv(d.f,e.f,f),p=A.kl(d.r,e.r,f,A.ZC(),x.S),o=B.bW(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a00(A.bzK(v,u,null,!1,t),p,q,o,s,n,null,A.kl(d.y,e.y,f,A.c_M(),x.G),m,r)},
bMV(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mt(u,w,v,B.bW(d.d,e.d,f))},
bzK(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dk
else w=d
return new A.a_X(g===!0,v,u,w,f)},
bsY(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a02(4,C.hJ,16,D.xo,0,120,A.c_O(),!1,!1,D.Zx,0,C.A,A.c_N())
else w=k
v=j==null?C.kR:j
return new A.a01(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c0z(d,e,f,g){var w=null,v=B.iW(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cw(C.d.j(f.b),v)},
c0y(d){return A.ayi(D.dk,15)},
nI:function nI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aw9:function aw9(d,e){this.a=d
this.b=e},
fy:function fy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
awi:function awi(){},
awj:function awj(){},
id:function id(d,e,f,g,h,i,j,k,l,m){var _=this
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
mt:function mt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_X:function a_X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a01:function a01(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acS:function acS(d,e){this.a=d
this.b=e},
a02:function a02(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cw:function Cw(d,e){this.a=d
this.b=e},
Km:function Km(d){this.a=d},
a03:function a03(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xn:function xn(d,e){this.a=d
this.b=e},
aga:function aga(){},
agh:function agh(){},
agi:function agi(){},
agk:function agk(){},
agl:function agl(){},
agm:function agm(){},
agn:function agn(){},
ago:function ago(){},
agp:function agp(){},
awk:function awk(d){this.a=d},
awl:function awl(){},
ug:function ug(d,e,f){this.a=d
this.b=e
this.c=f},
agj:function agj(){},
awm:function awm(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
awn:function awn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awo:function awo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4Y:function a4Y(d){this.b=d},
a0_:function a0_(d,e,f){this.d=d
this.e=e
this.a=f},
aa1:function aa1(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i1=e
_.cV=f
_.fW=g
_.B=h
_.a2=_.U=_.V=null
_.a4=i
_.bA=_.aE=_.ac=_.ao=$
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
c0A(d,e){var w=null
return new A.QS(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
aw3(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p4(t,e.b,new A.pZ(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bB7(d,e,f){var w=A.aw3(d.b,e.b,f),v=A.aw3(d.d,e.d,f),u=A.aw3(d.e,e.e,f)
return new A.uF(e.a,w,A.aw3(d.c,e.c,f),v,u)},
bPC(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bB5(d,e,f){return new A.ye(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c2Y(d){return!0},
c0D(d){return D.a8m},
bB6(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pq(w,f,g,e)},
bD0(d,e,f){var w,v=A.kl(d.a,e.a,f,A.c_H(),x.dv)
v.toString
w=A.kl(d.b,e.b,f,A.c_J(),x.bN)
w.toString
return new A.Pr(v,w)},
bQn(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r6(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mN(t,w,v,u)},
bVz(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r6(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nd(t,w,v,u)},
bQm(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pk(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bQk(B.bsP(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r6(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kl(d.d,e.d,f,A.ZC(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kF(r,e.f,e.r,t,e.x,u,v,w,s)},
bVy(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pk(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bVw(B.bsP(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r6(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kl(d.d,e.d,f,A.ZC(),x.S)
if(u==null)u=v==null?C.C:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
bQk(d,e,f,g,h,i){return new A.a58(f,!1,g,i,d,e)},
bQl(d){return C.d.ak(d.e,1)},
bVw(d,e,f,g,h,i){return new A.adh(f,!1,g,i,d,e)},
bVx(d){return C.d.ak(d.e,1)},
bB2(d,e,f){var w,v=A.kl(d.a,e.a,f,A.c_G(),x.cm)
v.toString
w=A.kl(d.b,e.b,f,A.c_I(),x.es)
w.toString
return new A.Mg(v,w,!0)},
bPB(d,e,f){return new A.Mr(d,e==null?4:e,f)},
a_Q:function a_Q(){},
Cv:function Cv(d,e){this.a=d
this.b=e},
ti:function ti(d,e){this.r=d
this.w=e},
pZ:function pZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abq:function abq(){},
p4:function p4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uF:function uF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev:function ev(d,e){this.a=d
this.b=e},
ye:function ye(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pq:function pq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acU:function acU(){},
Pr:function Pr(d,e){this.a=d
this.b=e},
mN:function mN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nd:function nd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kF:function kF(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
l4:function l4(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a58:function a58(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
adh:function adh(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Mg:function Mg(d,e,f){this.a=d
this.b=e
this.c=f},
uE:function uE(){},
Mr:function Mr(d,e,f){this.a=d
this.b=e
this.c=f},
ag5:function ag5(){},
ag9:function ag9(){},
ajj:function ajj(){},
ajz:function ajz(){},
ajA:function ajA(){},
ajC:function ajC(){},
ajD:function ajD(){},
akq:function akq(){},
akp:function akp(){},
akr:function akr(){},
anR:function anR(){},
apB:function apB(){},
apC:function apC(){},
arc:function arc(){},
arP:function arP(){},
arO:function arO(){},
arQ:function arQ(){},
aw_:function aw_(){},
Kf:function Kf(){},
Kg:function Kg(d,e,f){this.c=d
this.d=e
this.a=f},
aw1:function aw1(d){this.a=d},
aw0:function aw0(d){this.a=d},
QS:function QS(d,e,f){this.c=d
this.e=e
this.a=f},
Xj:function Xj(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bU6(d,e,f){var w=B.ac(f),v=w.i("aa<1,jJ>")
v=B.P(new B.aa(f,new A.aXH(),v),v.i("aw.E"))
w=w.i("aa<1,c>")
w=B.P(new B.aa(f,new A.aXI(),w),w.i("aw.E"))
return new A.abr(e,d,v,w,null)},
bMQ(d,e,f){var w,v=null,u=B.aI(x.dO),t=J.a5M(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tg(v,C.ap,C.w,new B.kg(1),v,v,v,v,C.bu,v)
u=new A.a_R(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aI(x.v))
u.bk()
return u},
abr:function abr(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aXH:function aXH(){},
aXI:function aXI(){},
a_R:function a_R(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VK$=h
_.aS0$=i
_.dl$=j
_.ag$=k
_.dO$=l
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
bcU:function bcU(d,e){this.a=d
this.b=e},
aw2:function aw2(){},
jJ:function jJ(d,e){this.a=d
this.b=e},
nH:function nH(d,e){this.a=d
this.b=e},
ag6:function ag6(){},
ag7:function ag7(){},
ag8:function ag8(){},
SN:function SN(){},
Aj:function Aj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXJ:function aXJ(d){this.a=d},
aXK:function aXK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXL:function aXL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4h(d,e){var w=d==null?B.d5(C.C,1):d
return new A.a4g(e!==!1,w)},
a05:function a05(){},
a4g:function a4g(d,e){this.a=d
this.b=e},
My:function My(){},
a4i:function a4i(){},
awx:function awx(){},
aCQ:function aCQ(d,e){this.a=d
this.b=e},
ags:function ags(){},
ajw:function ajw(){},
ajx:function ajx(){},
ajE:function ajE(){},
Kp:function Kp(){},
vs:function vs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4m:function a4m(d){this.a=d},
a4n:function a4n(d){this.a=d},
a4o:function a4o(d){this.a=d},
Mt:function Mt(){},
Mu:function Mu(){},
a4r:function a4r(d){this.a=d},
Mw:function Mw(){},
Mx:function Mx(d){this.a=d},
a4l:function a4l(d){this.a=d},
a4k:function a4k(d){this.a=d},
Ms:function Ms(d){this.a=d},
a4p:function a4p(d){this.a=d},
a4q:function a4q(d){this.a=d},
Mv:function Mv(d){this.a=d},
FG:function FG(){},
aSW:function aSW(d){this.a=d},
aSX:function aSX(d){this.a=d},
aSY:function aSY(d){this.a=d},
aSZ:function aSZ(d){this.a=d},
aT_:function aT_(d){this.a=d},
aT0:function aT0(d){this.a=d},
aT1:function aT1(d){this.a=d},
aT2:function aT2(d){this.a=d},
aT3:function aT3(d){this.a=d},
aT4:function aT4(d){this.a=d},
aT5:function aT5(d){this.a=d},
aT6:function aT6(d){this.a=d},
aT7:function aT7(d){this.a=d},
NQ:function NQ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V7:function V7(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ft$=g
_.cS$=h
_.c=_.a=null},
bcZ:function bcZ(d,e){this.a=d
this.b=e},
bcX:function bcX(d){this.a=d},
bcY:function bcY(d,e){this.a=d
this.b=e},
bcW:function bcW(){},
bd_:function bd_(d){this.a=d},
bud(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pD(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T7:u
else w=g
v=f==null?A.aw8(!1,u,0,u,!1,D.vR):f
w=new A.e9(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aw8(!1,u,0,u,!1,D.vR):d,j,a0,i,s,!1,p)
w.aqi(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bQS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bzL(d.ay,e.ay,f)
v=A.bzL(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.kl(d.cy,e.cy,f,A.ZC(),x.S)
r=B.Z(d.r,e.r,f)
q=B.r6(d.w,e.w,f)
p=A.kl(d.a,e.a,f,A.c_F(),x.cw)
p.toString
o=B.bDu(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aIL(v,m,w,r,e.z,s,new A.yd(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NR(n),!1,u,o,!0,e.cx,p)},
aw8(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aE(C.d.b0(127.5),D.dk.A()>>>16&255,D.dk.A()>>>8&255,D.dk.A()&255):null
else w=e
return new A.a_Z(h,w,g,i,f,!1)},
bzL(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.r6(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bB6(t,A.kl(v.d,u.d,f,A.ZC(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.r6(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.aw8(!1,s,v,u,e.a,new A.Kk(!1,r,w.c,!0))},
bMX(d,e,f){var w=B.Z(d.c,e.c,f),v=B.r6(d.d,e.d,f)
if(w==null)w=v==null?B.aE(C.d.b0(127.5),D.dk.A()>>>16&255,D.dk.A()>>>8&255,D.dk.A()&255):null
return new A.mu(e.a,e.b,w,v)},
c2Z(d){return!0},
bwh(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kN)return A.bx1(w.a,A.btS(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dk:w},
bYj(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kN)w=A.bx1(v.a,A.btS(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dk}return A.ayi(w,40)},
bFY(d,e,f,g,h){var w,v=A.bwh(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kN)w=A.bx1(u.a,A.btS(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dk}u=A.ayi(w,40)
return new A.Mr(v,h==null?4:h,u)},
c2X(d,e){return!0},
c_s(d,e){return Math.abs(d.a-e.a)},
c0G(d,e){var w=J.d0(e,new A.bpG(d),x.bY)
w=B.P(w,w.$ti.i("aw.E"))
return w},
c0C(d,e){return-1/0},
c0B(d,e){return d.a[e].b},
bH9(d){var w=J.d0(d,new A.bpD(),x.fT)
w=B.P(w,w.$ti.i("aw.E"))
return w},
bH8(d){return A.ayi(D.dk,15)},
pD:function pD(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e9:function e9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aIM:function aIM(){},
NR:function NR(d){this.a=d},
a_Z:function a_Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mu:function mu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kk:function Kk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yd:function yd(d,e,f){this.a=d
this.b=e
this.c=f},
aIx:function aIx(d,e){this.a=d
this.b=e},
a4j:function a4j(){},
Ej:function Ej(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bpG:function bpG(d){this.a=d},
bpF:function bpF(d){this.a=d},
a69:function a69(){},
bpD:function bpD(){},
mS:function mS(){},
q5:function q5(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rm:function rm(d,e){this.a=d
this.b=e},
tj:function tj(d,e){this.a=d
this.b=e},
G7:function G7(d){this.a=d},
NS:function NS(d){this.a=d},
yY:function yY(d,e){this.a=d
this.b=e},
agf:function agf(){},
agg:function agg(){},
agu:function agu(){},
ajy:function ajy(){},
ajB:function ajB(){},
ald:function ald(){},
ale:function ale(){},
alf:function alf(){},
alh:function alh(){},
ali:function ali(){},
alj:function alj(){},
alk:function alk(){},
apA:function apA(){},
arb:function arb(){},
aIN:function aIN(d){this.a=d},
aIO:function aIO(){},
aIP:function aIP(){},
yZ:function yZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alg:function alg(){},
aIQ:function aIQ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIT:function aIT(){},
aIR:function aIR(d,e,f){this.a=d
this.b=e
this.c=f},
aIS:function aIS(d,e,f){this.a=d
this.b=e
this.c=f},
aIU:function aIU(){},
vb:function vb(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a68:function a68(d,e,f){this.d=d
this.e=e
this.a=f},
aae:function aae(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i1=e
_.cV=f
_.fW=g
_.B=h
_.a2=_.U=_.V=null
_.a4=i
_.bA=_.aE=_.ac=_.ao=$
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
bsX(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ac(o),l=new B.aa(o,new A.awb(),m.i("aa<1,L>")).km(0,new A.awc()),k=e-l,j=new A.awf(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdq(0)/2
s=u===o.length-1?0:w
v+=t.gdq(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdq(0)/2
s=u===o.length-1?0:w
v+=t.gdq(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdq(0)/2
s=u===o.length-1?0:w
v+=t.gdq(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iL(o,m.i("iL<1>")).au(0,new A.awd(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iL(o,m.i("iL<1>")).au(0,new A.awe(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
awb:function awb(){},
awc:function awc(){},
awf:function awf(d,e,f){this.a=d
this.b=e
this.c=f},
awg:function awg(d,e,f){this.a=d
this.b=e
this.c=f},
awd:function awd(d,e,f){this.a=d
this.b=e
this.c=f},
awe:function awe(d,e,f){this.a=d
this.b=e
this.c=f},
btS(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iL(w,B.ac(w).i("iL<1>")).au(0,new A.aFV(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFV:function aFV(d,e){this.a=d
this.b=e},
azs(d,e){var w,v
if(e!=null){w=B.ac(e).i("aa<1,L>")
v=B.P(new B.aa(e,new A.azt(),w),w.i("aw.E"))
return A.c0u(d,new A.a0D(v,x.cX))}else return d},
azt:function azt(){},
bUG(d,e){var w=!0
if(d!==C.f2)if(!(d===C.ap&&e===C.w))w=d===C.ik&&e===C.aY
if(w)return D.DE
else{w=!0
if(d!==C.hp)if(!(d===C.ik&&e===C.w))w=d===C.ap&&e===C.aY
if(w)return D.DF
else return D.a92}},
MX:function MX(d,e){this.a=d
this.b=e},
a0t:function a0t(d,e){this.a=d
this.b=e},
z1:function z1(d,e){this.a=d
this.$ti=e},
alr:function alr(){},
c0u(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cD($.al().r)
for(w=B.b([],x.C),v=new B.NK(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.V(B.fq('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.NJ(v,s)
v.CS()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CS()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.JJ(d.aRX(r,p,p+n,!0),C.t,null)
t.push(q)
m=l.d
if(m!=null)q.hI(m)}p+=n
o=!o}}return l},
a0D:function a0D(d,e){this.a=d
this.b=0
this.$ti=e},
b0d:function b0d(){},
PL:function PL(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.ds=f
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
aTg:function aTg(d){this.a=d},
a4c:function a4c(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
btG(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bN_(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gei(v)===0){v=d.a.a
if(v.gei(v)===0){v=d.b.a
if(v.gei(v)===0){v=d.c.a
v=v.gei(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
ayi(d,e){var w=1-e/100
return B.aE(d.gfE(d),C.d.b0(d.gNu()*w),C.d.b0(d.gFR()*w),C.d.b0(d.gJZ()*w))},
bB4(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
btH(d){var w=d.a,v=w?A.aXG(d.b):0,u=w?A.aXG(d.c):0,t=w?A.aXG(d.d):0
return new B.aj(v,u,t,w?A.aXG(d.e):0)},
bS6(d){var w
if(d.c===0){d.seT(null)
w=B.c_(d.r)
d.r=B.aE(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
buz(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seT(f.mJ(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seT(null)}},
aXG(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kl(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kL(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kL(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c1O(d,e,f){return C.d.b0(d+(e-d)*f)},
bx1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kL(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.Z(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a5V.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.n
r=r?C.l:C.ai
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cs(t.x,C.l,s,18),C.b0],w))
v.push(B.aG(new B.e7(t.c,!1,s),1))
v=B.am(v,C.B,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.H,B.j(t.d,1,C.aj,s,B.bS(u==null?C.h:u,22,C.N),s,s,s)],w)
return B.bv(r,B.ad(w,C.B,C.i6,C.i),q,s,C.ac,s,3)}}
A.uD.prototype={
Ll(d){return this.aS_(d)},
aS_(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Ll=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_summary",B.a4(["p_from",E.r0(d.a),"p_to",E.r0(d.b)],s,r),r),$async$Ll)
case 3:q=f
if(q==null){u=D.aod
w=1
break}if(x.f.b(q)){u=B.dx(q,s,r)
w=1
break}u=D.aoF
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Ll,v)},
Lk(d){return this.aRZ(d)},
aRZ(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lk=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_kpis",B.a4(["p_from",E.r0(d.a),"p_to",E.r0(d.b)],s,r),r),$async$Lk)
case 3:q=f
if(x.f.b(q)){u=B.dx(q,s,r)
w=1
break}u=D.anX
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lk,v)},
pz(d){return this.aq0(d)},
aq0(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hv("sevdesk-sync",B.a4(["from",E.r0(d.a),"to",E.r0(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fv(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$pz,v)},
Lg(d){return this.aRP(d)},
aRP(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lg=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hv("finance-export-pdf",B.a4(["from",E.r0(d.a),"to",E.r0(d.b)],s,s)),$async$Lg)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aA(J.a3(r,"base64"))
w=1
break}throw B.e(B.dz("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Lg,v)}}
A.DE.prototype={
FL(d){return this.ajd(d)},
ajd(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Ll(d),$async$FL)
case 7:q=f
o=A.aDH(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hl(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FL,v)},
FH(d){return this.aiZ(d)},
aiZ(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FH=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lk(d),$async$FH)
case 7:q=f
o=A.bPz(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hl(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FH,v)},
pz(d){return this.aq1(d)},
aq1(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pz=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.pz(d),$async$pz)
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
p=r.Hl(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$pz,v)},
Lf(d){return this.aRO(d)},
aRO(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lf=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lg(d),$async$Lf)
case 7:q=f
o=C.iG.cQ(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hl(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lf,v)},
Hl(d){if(d instanceof B.y8)return d
if(d instanceof B.lX){if(d.b==="42501")return new B.vw(d.a)
return new B.t0(d.a)}if(d instanceof B.MM)return new B.t0("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AK("Unerwarteter Fehler: "+B.i(d))},
$iaDt:1}
A.q7.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w7.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayS.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azZ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nZ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ce.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o_.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yb.prototype={
GH(d){return this.aq_(0)},
aq_(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GH=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dq)
s=t.r
r=s.aJ(0,$.x5(),x.P)
p.a=null
w=3
return B.l(B.p3(new A.aDo(p,t,r),x.H),$async$GH)
case 3:t.se4(0,f)
q=t.f
if(q.gho(q)==null){q=$.bsu()
s=s.e
s===$&&B.a()
s.cm(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GH,v)},
Le(){return this.aRN()},
aRN(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$Le=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dq)
s=t.r.aJ(0,$.x5(),x.P)
q.a=null
w=3
return B.l(B.p3(new A.aDn(q,t,s),x.H),$async$Le)
case 3:t.se4(0,e)
r=t.f
u=r.gho(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Le,v)}}
A.yc.prototype={
dv(d,e){var w=null,v=e.aq($.x5(),x.P),u=e.aq($.bsu(),x.aN)
return B.iO(B.dE(B.b([new B.fK("Finanzen","Dashboard",new A.afq(e.aq($.bst(),x.b).gja(),new A.aDy(this,d,e),new A.aDz(this,d,e),new A.aDA(d),new A.aDB(d),new A.aDC(this,d,e,v),w),w),C.ax,new A.amM(v,w),C.c7,D.aeH,C.c7,B.dr(u,new A.aDD(),new A.aDE(),new A.aDF(),!1,!0,!1,x.d,x.l)],x.p),C.cJ,w,!1),C.l,new A.aDG(e))},
J9(d,e){return this.aKj(d,e)},
aKj(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J9=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.bst()
w=3
return B.l(e.aJ(0,s.ghO(),x.F).GH(0),$async$J9)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.gho(s)
t=d.P(x.q).f
t.bu(B.cg(null,null,null,null,null,C.u,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J9,v)},
B5(d,e){return this.avY(d,e)},
avY(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B5=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.l(e.aJ(0,$.bst().ghO(),x.F).Le(),$async$B5)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bu(D.awb)
w=1
break}t=B.pT(C.t,10)
w=4
return B.l($.bJe().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B5)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B5,v)},
B6(d,e,f){return this.aI0(d,e,f)},
aI0(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B6=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.l(B.j4(null,null,!0,null,new A.aDw(f,d),d,null,!0,!0,x.cJ),$async$B6)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nB(e.aJ(0,$.c1(),x.A))
p=f.a
o=f.b
n=$.e_()
m=n.an(p)
n=n.an(o)
w=8
return B.l(r.zl("finance_period",p,o,B.a4(["period_from",p.ej()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B6)
case 8:if(d.e!=null)d.P(x.q).f.bu(F.uU)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bu(B.cg(null,null,null,null,null,C.u,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B6,v)}}
A.afq.prototype={
u(d){var w=this,v=null,u=A.akB(C.l,F.hP,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akB(v,D.aaN,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akB(v,D.a9O,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akB(C.ae,C.j8,C.ae,s?v:w.e,"PDF-Export")
return B.am(B.b([u,C.b0,t,C.b0,r,C.b0,q,C.b0,A.akB(C.al,C.eG,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.m,C.f,C.Q,0,v,v)}}
A.akA.prototype={
u(d){var w,v=this,u=null,t=B.aQ(12),s=B.aQ(12),r=B.aQ(12),q=v.w
if(q==null)q=C.ai
q=B.d5(q,1)
w=v.r
if(w==null)w=C.h
return B.GK(B.dX(!1,C.Z,!0,t,B.eW(!1,s,!0,B.b1(u,B.cs(v.c,w,u,20),C.r,u,u,new B.b_(u,u,q,r,u,u,C.E),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.af,0,u,u,u,u,u,C.bD),u,v.d,u,u)}}
A.amM.prototype={
dv(d,e){var w=null,v=this.e,u=$.e_(),t=x.p
return B.bv(w,B.ad(B.b([D.a86,C.H,B.am(B.b([D.abz,C.b1,B.aG(B.j(u.an(v.a)+" \u2013 "+u.an(v.b),w,w,w,B.y(C.h,16,C.N),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.v,B.nf(C.cV,B.b([new A.Ir("Monat",new A.bfc(e),w,w),new A.Ir("Jahr (YTD)",new A.bfd(e),w,w),new A.Ir("Zeitraum w\xe4hlen \u2026",new A.bfe(this,d,e),D.a9T,w)],t),C.e1,6,8)],t),C.B,C.f,C.i),w,w,C.D,w,3)},
Iy(d,e){return this.aGW(d,e)},
aGW(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iy=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.l(E.atX(new A.bfb(),d,B.bJ(B.aV(t)-5,1,1,0,0,0,0),new B.lw(s.a,s.b,x.bz),B.bJ(B.aV(t)+1,1,1,0,0,0,0),C.ej),$async$Iy)
case 2:r=g
if(r!=null)e.aJ(0,$.x5().ghO(),x.V).wn(0,new E.lC(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iy,v)}}
A.Ir.prototype={
u(d){var w=null,v=B.aQ(9999),u=B.aQ(9999),t=B.aQ(9999),s=B.d5(C.ai,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cs(p,C.h,w,14),C.b0],r))
q.push(B.j(this.c,w,w,w,B.y(C.h,13,C.N),w,w,w))
return B.dX(!1,C.Z,!0,v,B.eW(!1,u,!0,B.b1(w,B.am(q,C.m,C.f,C.Q,0,w,w),C.r,w,w,new B.b_(w,w,s,t,w,w,C.E),w,w,w,w,C.kQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.af,0,w,w,w,w,w,C.bD)}}
A.IV.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ji(new A.bkX(this)),C.c7,D.a8a,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bv(s,B.am(B.b([D.abX,C.aA,B.aG(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.q,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.af,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afo(t.a,t.b,t.c==="revenue",t.d,s),C.H],r))}q.push(B.ad(w,C.m,C.f,C.i))}return B.ad(q,C.ab,C.f,C.i)}}
A.afo.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aN:C.af,s=B.d5(u?C.l:C.ai,1),r=B.aQ(4),q=w.c
r=B.b1(C.a_,B.j(C.c.a_(q,0,1),v,v,v,B.bS(C.h,14,C.o),v,v,v),C.r,v,v,new B.b_(t,v,s,r,v,v,C.E),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.aj,v,B.y(C.h,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aG(B.ad(B.b([q,B.j(t,v,v,v,B.y(C.q,12,C.k),v,v,v)],s),C.B,C.f,C.i),1)
q=$.dL().an(w.f)
return B.bv(v,B.am(B.b([r,C.aA,t,B.j(q,v,v,v,B.y(u?C.al:C.h,15,C.N),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.dL,v,3)}}
A.HA.prototype={
u(d){var w=null
return B.bv(C.ae,B.am(B.b([D.acv,C.aA,B.aG(B.j(this.c,w,w,w,B.y(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fI,w,C.D,w,3)}}
A.a5W.prototype={
dv(d,e){return B.dr(e.aq($.bLH(),x.e),new A.aIu(),new A.aIv(),new A.aIw(),!1,!0,!1,x.X,x.l)}}
A.HU.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.atE,C.v,B.ji(new A.bcL(v,q,100-t.w.a,w,p)),C.v,new A.ajU(u),C.ax,D.atD,C.v,new A.age(t,u),C.ax,D.aty,C.v,B.bE(u,!0,u,B.mM(u,B.bv(u,new A.Tb(t,220,u),u,u,C.D,u,3),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcM(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.L,u),C.ax,D.att,C.v,B.bE(u,!0,u,B.mM(u,new A.Tn(t,200,!1,u),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcN(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.L,u),C.ax,D.atx,C.v,new A.alA(t,u),C.ax,D.atv,C.v,new A.ahX(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.ax,D.atA,C.v,new A.ar8(t,u)],s))
return B.ad(r,C.ab,C.f,C.i)}}
A.ajU.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.q,11,C.k).dr(1.35),w,w,w)}}
A.al6.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ae:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bcO(m,d):l
r=x.p
q=B.b([B.aG(B.j(m.c.toUpperCase(),l,l,l,B.y(C.q,10,C.o).fq(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d5(C.ae,0.8)
n=B.aQ(4)
q.push(B.b1(l,B.j("Ziel "+p,l,l,l,B.y(C.ae,9,C.o),l,l,l),C.r,l,l,new B.b_(l,l,o,n,l,l,C.E),l,l,l,l,C.n7,l,l,l))}q=B.b([B.am(q,C.m,C.f,C.i,0,l,l),C.aW,new A.a4c(C.B9,C.ew,B.j(m.d,l,l,l,B.bS(w,22,C.o),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.aj,l,B.y(C.q,10,C.aB),l,l,l))
q.push(C.cn)
q.push(B.am(B.b([new A.TY("Vormonat",m.r,l),C.cm,new A.TY("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cn)
q.push(B.aG(new A.Xu(v,m.y,m.z,l),1))
return B.bE(l,u,l,B.mM(l,B.bv(l,B.ad(q,C.B,C.f,C.i),l,l,C.da,l,3),C.a9,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.L,l)}}
A.TY.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aQ(4)
return B.b1(r,B.j(this.c+" \u2014",r,r,r,B.y(C.q,9,C.o),r,r,r),C.r,r,r,new B.b_(C.ai,r,r,q,r,r,C.E),r,r,r,r,C.n7,r,r,r)}w=q>=0
v=w?C.al:C.ae
u=v.fK(0.12)
t=B.d5(v,0.7)
s=B.aQ(4)
return B.b1(r,B.am(B.b([B.cs(w?F.a98:D.a97,v,r,10),F.avS,B.j(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.m,C.f,C.Q,0,r,r),C.r,r,r,new B.b_(u,r,t,s,r,r,C.E),r,r,r,r,C.n7,r,r,r)}}
A.Xu.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.km(j,new A.bkb())
t=C.b.km(j,new A.bkc())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bkd(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4h(k,!1)
w=B.b([A.aIL(k,2,A.aw8(!1,C.l.fK(0.16),0,k,!0,D.vR),C.l,0.35,k,D.Dv,k,!0,!1,!0,!1,D.EX,!1,10,D.Yk,!0,C.lj,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NQ(A.bud(k,k,k,D.akA,l,D.Bn,D.Dq,D.Dw,w,D.aeL,k,m,k,n,D.XG,D.akB,D.a8p),C.au,C.ag,k,k)}}
A.Tb.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aIP
w=C.b.fG(p,0,new A.b3L())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.awh(B.b([A.a00(q,q,D.AO,q,C.l,q,q,q,r.b,6),A.a00(q,q,D.AO,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c7(A.bzM(A.awa(q,q,u,q,q,A.a4h(q,!1),q,new A.ye(!0,!0,q,new A.b3M(),A.Zx(),!1,q,A.atH(),A.Zx()),q,v,q,q,new A.uF(!0,new A.p4(16,q,new A.pZ(!0,new A.b3N(this),46,q),!0),D.kj,D.kj,new A.p4(16,q,new A.pZ(!0,new A.b3O(p),26,q),!0)))),this.d,q)},
aJC(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.Tn.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.aa(v,new A.b4y(),w),x.i)
C.b.M(o,new B.aa(u,new A.b4z(),w))
t=C.b.fG(o,0,new A.b4A())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.awh(B.b([A.a00(q,q,q,q,C.l,q,q,q,v[s],14),A.a00(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c7(A.bzM(A.awa(q,q,n,q,q,A.a4h(q,!1),q,D.Dw,q,o,q,q,new A.uF(!0,D.kj,D.kj,D.kj,new A.p4(16,q,new A.pZ(!0,new A.b4B(p),26,q),!0)))),this.d,q)
return this.e?r:B.bv(q,r,q,q,C.D,q,3)}}
A.alA.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aIO
w=new B.aa(l,new A.bdh(),B.ac(l).i("aa<1,L>")).km(0,new A.bdi())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dL()
o=r.d
n=new B.aW(4,4)
o=B.b([B.am(B.b([new B.lA(1,C.ee,B.ad(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.an(r.f),m,m,m,B.y(C.q,12,C.aB),m,m,m)],v),C.B,C.f,C.i),m),C.b1,B.j(p.an(o),m,m,m,B.bS(C.h,16,C.o),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cn,new B.CY(new B.d4(n,n,n,n),C.bC,B.Ek(C.ai,8,C.d.c1(o/w,0,1),D.AC),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.ZA(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.bv(m,B.ad(u,C.m,C.f,C.i),m,m,C.D,m,3)}}
A.ahX.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aG(new A.BM("Aktive Kunden",""+s,u),1)
w=B.aG(new A.BM("K\xe4ufe",""+t.a,u),1)
v=$.dL()
return B.bv(u,B.am(B.b([s,w,B.aG(new A.BM("\xd8-Warenkorb",v.an(t.d),u),1),B.aG(new A.BM("Umsatz/Kunde",v.an(r),u),1)],x.p),C.m,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.BM.prototype={
u(d){var w=null
return B.ad(B.b([B.j(this.c.toUpperCase(),w,w,w,B.y(C.q,10,C.o).fq(0.6),w,w,w),C.bQ,B.j(this.d,w,w,w,B.bS(C.h,20,C.o),w,w,w)],x.p),C.B,C.f,C.Q)}}
A.ar8.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.bmd(),B.ac(q).i("aa<1,L>")).km(0,new A.bme()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.am(B.b([new B.lA(1,C.ee,B.j(u.b,1,C.aj,r,B.y(C.h,13,C.o),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.y(C.q,12,C.N),r,r,r),B.j($.dL().an(t),r,r,r,B.y(C.h,13,C.o),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aW,new B.CY(new B.d4(s,s,s,s),C.bC,B.Ek(C.ai,6,C.d.c1(t/p,0,1),D.AC),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.ZA(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.H)
C.b.M(n,t)}return B.bv(r,B.ad(n,C.m,C.f,C.i),r,r,C.D,r,3)}}
A.wp.prototype={
u(d){var w=null
return B.bv(w,B.j(this.c,w,w,w,B.y(C.q,13,C.k),w,w,w),C.af,w,C.D,w,3)}}
A.age.prototype={
dv(d,e){return B.dr(e.aq($.byJ(),x.fM),new A.b2d(this,d,e),new A.b2e(),new A.b2f(),!1,!0,!1,x.h,x.l)}}
A.AS.prototype={
X(){return new A.SP()},
aWU(){return this.d.$0()}}
A.SP.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fE(J.an(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.Hb[t].a
if(v)r=""
else{r=B.bn(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b6(r,".",",")}u.m(0,s,new B.bH(new B.cS(r,C.bK,C.aS),$.ag()))}q.e!==$&&B.b7()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c5(v,v.r,v.e,B.k(v).i("c5<2>"))
while(v.t()){w=v.d
w.R$=$.ag()
w.S$=0}this.ap()},
rg(d){var w=this.e
w===$&&B.a()
w=C.c.bi(w.h(0,d).a.a)
w=B.b6(w,".","")
w=B.k0(B.b6(w,",","."))
return w==null?0:w},
HY(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HY=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b24(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZk("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ej(),0,10),"p_cash_and_bank",q.rg("cash_and_bank"),"p_receivables",q.rg("receivables"),"p_inventory_value",q.rg("inventory_value"),"p_other_current_assets",q.rg("other_current_assets"),"p_fixed_assets",q.rg("fixed_assets"),"p_current_liabilities",q.rg("current_liabilities"),"p_long_term_liabilities",q.rg("long_term_liabilities"),"p_equity",q.rg("equity")],x.N,x.aU))
w=7
return B.l(n,$async$HY)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWU()
o=q.c
o.toString
B.be(o,!1).f1()
q.c.P(x.q).f.bu(D.awc)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bu(B.cg(null,null,null,null,null,C.u,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.O,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b25(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HY,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bS(C.h,18,C.o),r,r,r),p=s.f?r:new A.b27(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.hG(D.abB,B.j("Stichtag: "+C.c.a_(o.ej(),0,10),r,r,r,r,r,r,r),p,r),C.v],w)
for(v=0;v<8;++v){o=D.Hb[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.fa(r,C.aU,!1,r,!0,C.u,r,B.fl(),u.h(0,o.a),r,r,r,r,r,2,new B.ce(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a9,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.im,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a1,r,r,r,r),C.H],w))}p.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.q,11,C.k),r,r,r))
p=B.c7(B.f9(B.ad(p,C.ab,C.f,C.Q),r,C.a5),r,380)
o=s.f
u=B.dG(C.cU,r,r,o?r:new A.b28(d),r,r)
o=o?r:s.gaDn()
t=B.dP(C.l,C.h,r,r,r,r,r)
return B.ls(B.b([u,B.dO(s.f?F.YR:C.es,o,t)],w),C.n,p,q)}}
A.bd.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.ZA(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.eA(B.H(this))^B.bHE(this.gbI()))>>>0},
j(d){B.bB0()
return B.H(this).j(0)}}
A.Kl.prototype={
X(){return new A.SQ(B.A(x.S,x.I),new A.awk(B.A(x.x,x.T)),null,null)}}
A.SQ.prototype={
u(d){var w,v=this,u=v.a1t(),t=v.CW
t.toString
t=v.a1u(t.av(0,v.ghF().gp(0)))
w=v.a1u(u)
v.a.toString
return new A.Kg(new A.a0_(t,w,null),u,null)},
a1u(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.awh(s.c,s.d,!1,r,s.a))}return d.aOQ(w)},
a1t(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uk(t.ch)
if(r)s=w.a
r=t.y
t=t.aPL(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOR(A.bsY(!1,!0,!0,v.d,v.c,u.garx(),v.f,v.e))}return t},
ary(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf2()||e==null||e.a==null){w=v.cy
v.J(w.gaOf(w))
return}v.J(new A.b2i(v,e))},
nQ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1t(),new A.b2j(w)))}}
A.nI.prototype={
UU(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.awa(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPL(d,e){return this.UU(null,null,d,e)},
aOR(d){return this.UU(null,d,null,null)},
aOQ(d){return this.UU(d,null,null,null)},
WQ(d,e,f){var w,v,u,t=A.kl(d.ch,e.ch,f,A.c_K(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bB7(d.d,e.d,f),q=A.bD0(d.e,e.e,f),p=A.bB5(d.c,e.c,f),o=e.a
o=A.a4h(B.a0g(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.awa(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bB2(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aw9.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fy.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.awi(),B.ac(v).i("aa<1,L>")).km(0,new A.awj())
v=v.length
return w+(v-1)*this.d},
gbI(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.id.prototype={
gbI(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mt.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_X.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a01.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acS.prototype={
L(){return"TooltipDirection."+this.b}}
A.a02.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Cw.prototype={
gbI(){return[this.a,this.b,C.cB,C.w,null]}}
A.Km.prototype={}
A.a03.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xn.prototype={
hf(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.aga.prototype={}
A.agh.prototype={}
A.agi.prototype={}
A.agk.prototype={}
A.agl.prototype={}
A.agm.prototype={}
A.agn.prototype={}
A.ago.prototype={}
A.agp.prototype={}
A.awk.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ug(0,0,!1)
v=new A.z1(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ug(t,u,!0)}w=null
try{w=C.b.qe(d,new A.awl())}catch(s){return new A.ug(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ug(q,r,!1)
u.m(0,v,j)
return j}}
A.ug.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.agj.prototype={}
A.awm.prototype={
i7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_z(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abC(t,A.bsX(w,t.a),u)
l.y=u
l.aR6(e,u,f)
l.al8(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRf(d,e,m,t,r,s,n,o,f)}}},
abC(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dz("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iL(p,B.ac(p).i("iL<1>")).au(0,new A.awn(t,q,r,s))
w.push(new A.a4Y(q))}return w},
aR6(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d4(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b3.dF(Math.max(s,a2),b5,b8)
a4=B.Pn(h,Math.min(b3.dF(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dF(Math.min(t,a2),b5,b8)
a4=B.Pn(h,a5,g,Math.max(b3.dF(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seT(null)
a6=b3.f.eo()
u.drawRRect(B.mo(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dF(f,b5,b8)
e=a8.b
b0=b3.dF(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.aZ(u.save())
u.clipRect(B.dK(b1),$.oW()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mo(a4),a6)
a6.delete()
u.restore()
b3.aRd(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gei(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cD($.al().r)
n=new B.ha(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hI(k)
v.fV(A.azs(b2,o.r),b3.r)}}}},
aRf(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Az(a5,a5,a5,a5,B.d9(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lp().Zz(a8,a7.b),a7.a),C.cB,C.w,a5,b6.c,C.bu)
w.afl(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbS(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dF(s,a6,b6)
q=b4.a
p=a4.dF(q,a6,b6)
o=b1.b
n=u+o.ger()
m=v+4+(o.gcY(0)+o.gd_(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aEv)j=v===D.Zx&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZA(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Fu(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lp().K8(new B.F(v,t),d).b
s=$.lp()
q=w.b
p=q.c
q=q.a.c
a0=s.K8(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahE()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vw(d,new A.awo(a4,a9,e,w,new B.n(q.a-p/2,s.b+o.b-a0.b+r)),new B.n(e.a,e.b),new B.n(0,r),new B.F(v,t))},
aRd(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gei(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dF(w,j,k)
u=e.a
t=n.dF(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a0
s=w?new B.aW(i.x,i.y):C.a0
r=w?C.a0:new B.aW(i.e,i.f)
w=w?C.a0:new B.aW(i.r,i.w)
q=B.Pn(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dF(v,j,k),i.b)
r=n.dF(t,j,k)
v=t<v
t=v?C.a0:new B.aW(i.z,i.Q)
p=v?C.a0:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a0
q=B.Pn(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a0)}else q=B.buU(w,n.dF(v,j,k),u,n.dF(t,j,k),C.a0)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
Wb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abC(b2,A.bsX(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dF(k,b2,b3)
m=b0[q].c[o]
g=a7.dF(m.a+m.x.b,b2,b3)}else{h=a7.dF(j+m.x.b,b2,b3)
g=a7.dF(b0[q].c[o].b,b2,b3)}a7.dF(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dF(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dF(a4.a,b2,b3)
a6=a7.dF(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a03(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.n(n,t))}}return null}}
A.a4Y.prototype={}
A.a0_.prototype={
bm(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcN(),t=new A.awm()
t.a0L()
$.al()
w=B.aT()
w.b=C.bg
t.f=w
w=B.aT()
w.b=C.aV
t.r=w
w=B.aT()
w.b=C.bg
w.r=C.n.gp(0)
t.w=w
w=B.aT()
w.b=C.aV
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aa1(this.d,v,u,t,d,C.bo,new B.bq(),B.aI(x.v))
t.bk()
t.Yv(v.cy)
t.aeu()
return t},
by(d,e){e.sik(0,this.d)
e.sYg(this.e)
e.scN(B.bw(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.aa1.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYg(d){var w=this
if(w.i1.k(0,d))return
w.i1=d
w.a0j(d.cy)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.aZ(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i7(w,new A.a0t(t,v),new A.vs(u.aC,u.i1,u.cV,x.Q))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.Km(w.fW.Wb(d,v,new A.vs(w.aC,w.i1,w.cV,x.Q)))}}
A.a_Q.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cv.prototype={
L(){return"AxisSide."+this.b}}
A.ti.prototype={}
A.pZ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abq.prototype={
gbI(){return[!1,0,0,0]}}
A.p4.prototype={
gbI(){return[this.b,this.a,this.c,!0]}}
A.uF.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ev.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ev))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.ye.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pq.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acU.prototype={
gbI(){return[this.a,this.b]}}
A.Pr.prototype={
gbI(){return[this.a,this.b]}}
A.mN.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nd.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kF.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l4.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a58.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.adh.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Mg.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uE.prototype={}
A.Mr.prototype={
ad0(d,e,f){var w,v
$.al()
w=B.aT()
v=this.a
w.r=v.gp(v)
w.b=C.bg
d.iP(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.ag5.prototype={}
A.ag9.prototype={}
A.ajj.prototype={}
A.ajz.prototype={}
A.ajA.prototype={}
A.ajC.prototype={}
A.ajD.prototype={}
A.akq.prototype={}
A.akp.prototype={}
A.akr.prototype={}
A.anR.prototype={}
A.apB.prototype={}
A.apC.prototype={}
A.arc.prototype={}
A.arP.prototype={}
A.arO.prototype={}
A.arQ.prototype={}
A.aw_.prototype={
Mh(d,e,f,g,h,i){return new B.iw(this.aUX(d,e,f,g,h,i),x.g4)},
aUW(d,e,f,g){return this.Mh(d,e,f,!0,g,!0)},
aUX(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mh(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lp().aiL(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fQ(u-s,v)*v===u
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
A.Kf.prototype={
a0L(){var w,v=this
$.al()
w=B.aT()
w.b=C.aV
v.a=w
w=B.aT()
w.b=C.bg
v.b=w
w=B.aT()
w.b=C.bg
v.e=w
w=B.aT()
w.b=C.aV
v.c=w
v.d=B.aT()},
i7(d,e,f){var w=this
w.a_A(d,e,f)
w.aR2(e,f)
w.aRc(e,f)
w.aRb(e,f)},
aRb(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lp().Om(w.a,a1.r-a1.f)
u=$.bs6().Mh(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.n(o,0)
m=new B.n(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kU(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seT(j.mJ(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seT(a0)}k=l.c
p.c=k
if(k===0){p.seT(a0)
k=B.c_(p.r)
p.r=B.aE(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dn(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lp().Om(w.b,a1.y-a1.x)
u=$.bs6().Mh(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dF(q,w,a4)
n=new B.n(0,e)
m=new B.n(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kU(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seT(k.mJ(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seT(a0)}p=f.c
q.c=p
if(p===0){q.seT(a0)
p=B.c_(q.r)
q.r=B.aE(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dn(n,m,d.a,f.d)}},
aR2(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hb(new B.G(0,0,0+w.a,0+w.b),this.b)},
aRc(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.kU(new B.n(n.fc(t.a,m,e),0),new B.n(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seT(p.mJ(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seT(null)}o=n.e.eo()
w.drawRect(B.dK(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.kU(new B.n(0,n.dF(t.a,m,e)),new B.n(w,n.dF(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seT(q.mJ(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seT(null)}o=n.e.eo()
j.drawRect(B.dK(s),o)
o.delete()}},
aRa(d,e,f){var w,v
this.a_A(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad1(d,e,f,w)
if(v.b.length!==0)this.aRh(d,e,f,w)},
ad1(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dF(o,a1,a0)
m=new B.n(0,n)
o=f.dF(o,a1,a0)
l=new B.n(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kU(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seT(j.mJ(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c_(n.r)
n.r=B.aE(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dn(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=C.d.am(o,n.gbS(n).eE(0,2))
J.aZ(r.save())
r.translate(h,g)
n=n.gNe().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdq(n).eE(0,2)
o=C.d.am(o,n.gbS(n).eE(0,2))
k=f.d
k===$&&B.a()
s.ad2(0,n,new B.n(h,o),k)}}},
aRh(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=d.fc(o,a3,a2)
m=new B.n(n,0)
o=d.fc(o,a3,a2)
l=new B.n(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kU(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seT(j.mJ(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c_(n.r)
n.r=B.aE(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dn(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=n.gbS(n).eE(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.aZ(r.save())
r.translate(f,e)
n=n.gNe().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdq(n).eE(0,2)
g=n.gbS(n).ad(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.ad2(0,n,new B.n(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dF(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZA(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kg.prototype={
gaku(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakv(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakw(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gaks(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akP(d){var w,v=this,u=null,t=v.d,s=A.btH(t.d),r=t.a
r=r.a&&A.bN_(r.b)?r.b:u
w=B.b([B.b1(u,v.c,C.r,u,u,new B.b_(u,u,r,u,u,u,C.E),u,u,u,s,u,u,u,u)],x.p)
s=new A.aw1(w)
if(v.gaku())C.b.hu(w,s.$1(!0),new A.Aj(D.AJ,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakw())C.b.hu(w,s.$1(!0),new A.Aj(D.mp,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakv())C.b.hu(w,s.$1(!0),new A.Aj(D.AK,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gaks())C.b.hu(w,s.$1(!0),new A.Aj(D.dE,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
return w},
u(d){return B.ji(new A.aw0(this))}}
A.QS.prototype={
X(){return new A.Xj(new B.bg(null,x.eF))}}
A.Xj.prototype={
awX(){switch(this.a.c.a){case 0:return C.e4
case 1:return C.fB
case 2:return C.ew
case 3:return C.fC}},
axs(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awZ(d){this.a.toString
return},
aA(){this.aO()
$.cx.x1$.push(this.ga3V())},
be(d){this.bE(d)
$.cx.x1$.push(this.ga3V())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axs()
return B.bvt(B.b_N(0,B.b1(v.awX(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.t)}}
A.abr.prototype={
bm(d){return A.bMQ(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_R.prototype={
hk(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.t)},
hV(d){if(this.B===C.aI)return this.xW(d)
return this.acD(d)},
aJM(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8x(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a8w(d,B.hy())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8w(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aI?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fW(u,null)
break
case 1:q=B.fW(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8x(p)
t=Math.max(t,o.aJM(p))
m=r.aG$}return new A.bcU(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8w(o,B.mn()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.ag$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a8x(r==null?B.V(B.a_("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c4(w))):r)/2
switch(p.B.a){case 0:r=new B.n(q,0)
break
case 1:r=new B.n(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e9(d,e){return this.xX(d,e)},
aN(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uT(d,e)},
l(){this.a2.sbh(0,null)
this.anL()}}
A.bcU.prototype={}
A.aw2.prototype={}
A.jJ.prototype={
gbI(){return[this.a,this.b]}}
A.nH.prototype={}
A.ag6.prototype={}
A.ag7.prototype={
aP(d){var w,v,u
this.fm(d)
w=this.ag$
for(v=x.L;w!=null;){w.aP(d)
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
A.ag8.prototype={}
A.SN.prototype={
l(){var w,v,u
for(w=this.VK$,v=w.length,u=0;u<v;++u)w[u].l()
this.ix()}}
A.Aj.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.ew
case 1:return C.fC
case 2:return C.e4
case 3:return C.fB}},
gaZx(){var w=this.d,v=A.btH(w.d),u=A.bB4(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahr(){var w=this.d,v=A.bB4(w.a),u=A.btH(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.ger()+v.ger()}},
aVG(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.lp().Om(d,f-e)
w=p.c
v=w!==D.mp
if((!v||w===D.dE)&&p.d instanceof A.nI){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bsX(u,d)
w=new B.iL(t,B.ac(t).i("iL<1>"))
s=w.giD(w).f0(0,new A.aXJ(u),x.W).fY(0)}else{r=$.bs6()
w=!v||w===D.dE
v=p.d
q=r.aUW(w?v.w:v.z,o,f,e)
v=B.ob(q,new A.aXK(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.k(v).i("t.E"))}w=B.ac(s).i("aa<1,nH>")
w=B.P(new B.aa(s,new A.aXL(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b1(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mp
u=!v
t=!u||w===D.dE
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dE?C.a5:C.aI
q=B.b([],x.p)
if(w===D.AJ||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dE?r:j.gow().c.c
p=!u||w===D.dE?j.gow().c.c:r
o=j.gaZx()
n=!u||w===D.dE?C.aI:C.a5
j.gahr()
m=j.gahr()
l=!u||w===D.dE
k=j.d
l=l?k.f:k.x
u=!u||w===D.dE?k.r:k.y
q.push(B.b1(i,A.bU6(new A.aw2(),n,j.aVG(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AK||w===D.dE)j.gow()
return new B.f2(t,i,i,B.bPD(q,C.m,s,i,C.f,C.Q,0,i,i,C.c_),i)}}
A.a05.prototype={
gbI(){return[this.a,this.b]}}
A.a4g.prototype={
gbI(){return[this.a,this.b]}}
A.My.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4i.prototype={
gaaX(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.awx.prototype={}
A.aCQ.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ags.prototype={}
A.ajw.prototype={}
A.ajx.prototype={}
A.ajE.prototype={}
A.Kp.prototype={
i7(d,e,f){}}
A.vs.prototype={}
A.hi.prototype={
gdJ(){return null},
gaf2(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.Mx
if(w)return!0
return!(v instanceof A.Mu)&&!(v instanceof A.Mt)&&!(v instanceof A.Mv)&&!(v instanceof A.Ms)&&!w&&!(v instanceof A.Mw)}}
A.a4m.prototype={
gdJ(){return this.a.b}}
A.a4n.prototype={
gdJ(){return this.a.b}}
A.a4o.prototype={
gdJ(){return this.a.b}}
A.Mt.prototype={}
A.Mu.prototype={}
A.a4r.prototype={
gdJ(){return this.a.b}}
A.Mw.prototype={}
A.Mx.prototype={
gdJ(){return this.a.b}}
A.a4l.prototype={
gdJ(){return this.a.b}}
A.a4k.prototype={
gdJ(){return this.a.b}}
A.Ms.prototype={
gdJ(){return this.a.b}}
A.a4p.prototype={
gdJ(){return this.a.gdJ()}}
A.a4q.prototype={
gdJ(){return this.a.gdJ()}}
A.Mv.prototype={
gdJ(){return this.a.gdJ()}}
A.FG.prototype={
Yv(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aeu(){var w=this,v=null,u=w.ac=B.buA(v,v)
u.ay=new A.aSW(w)
u.ch=new A.aSX(w)
u.CW=new A.aSY(w)
u.cy=new A.aSZ(w)
u.cx=new A.aT_(w)
u=w.aE=B.Gv(v,-1,v)
u.B=new A.aT0(w)
u.a4=new A.aT1(w)
u.V=new A.aT2(w)
u=w.bA=B.a6g(v,w.a2,v)
u.p3=new A.aT3(w)
u.p4=new A.aT4(w)
u.RG=new A.aT5(w)},
cv(){var w=x.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dD(d){return new B.F(d.b,d.d)},
kJ(d){return!0},
mT(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bA
w===$&&B.a()
w.rD(d)
w=v.aE
w===$&&B.a()
w.rD(d)
w=v.ac
w===$&&B.a()
w.rD(d)}else if(x.gJ.b(d))v.l6(new A.a4q(d))},
gML(d){return new A.aT6(this)},
gMN(d){return new A.aT7(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdJ()
v=w!=null?u.Zt(w):null
u.V.$2(d,v)
u.a4=C.bo},
gKE(d){return this.a4},
gFk(){var w=this.ao
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.ao=!0},
aF(d){this.ao=!1
this.fg(0)},
$ijk:1}
A.NQ.prototype={
X(){return new A.V7(B.b([],x.r),B.A(x.S,x.I),new A.aIN(B.A(x.y,x.dj)),null,null)}}
A.V7.prototype={
u(d){var w,v=this,u=v.a3X(),t=v.CW
t.toString
t=v.aaw(t.av(0,v.ghF().gp(0)))
w=v.aaw(u)
v.a.toString
return new A.Kg(new A.a68(t,w,null),u,null)},
aaw(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ac(w).i("aa<1,e9>")
w=B.P(new B.aa(w,new A.bcZ(this,d),v),v.i("aw.E"))
return d.aPI(w,this.cy)},
a3X(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uk(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPX(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPm(new A.Ej(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayg(),t.c,t.d))}return r},
ayh(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf2())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bcX(v))
return}v.J(new A.bcY(v,e))},
nQ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3X(),new A.bd_(w)))}}
A.pD.prototype={
WQ(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4h(B.a0g(d.a.b,j.b,f),j.a)
w=A.bB2(d.at,e.at,f)
v=A.bB5(d.c,e.c,f)
u=A.bB7(d.d,e.d,f)
t=A.bD0(d.e,e.e,f)
s=A.kl(d.ch,e.ch,f,A.c1Q(),x.cz)
s.toString
r=A.kl(d.CW,e.CW,f,A.c1P(),x.J)
r.toString
u=A.bud(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UV(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bud(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPX(d,e,f,g){return this.UV(null,null,d,e,f,g,null)},
aPm(d){var w=null
return this.UV(w,d,w,w,w,w,w)},
aPI(d,e){var w=null
return this.UV(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e9.prototype={
aqi(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aIM())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fK))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b7()
n.b=q
r.toString
n.c!==$&&B.b7()
n.c=r
s.toString
n.d!==$&&B.b7()
n.d=s
t.toString
n.e!==$&&B.b7()
n.e=t}},
acj(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aIL(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPt(d){return this.acj(d,null)},
aPv(d){return this.acj(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NR.prototype={
gbI(){return[this.a]}}
A.a_Z.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mu.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kk.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.yd.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aIx.prototype={
L(){return"LabelDirection."+this.b}}
A.a4j.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ej.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a69.prototype={
gbI(){return[4,C.hJ,16,D.xo,0,120,A.c1S(),!1,!1,!1,0,C.A,A.c1R()]}}
A.mS.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q5.prototype={}
A.rm.prototype={
gbI(){return[this.a,this.b,C.cB,C.w,null]}}
A.tj.prototype={
gbI(){return[this.a,this.b]}}
A.G7.prototype={
gbI(){return[this.a]}}
A.NS.prototype={}
A.yY.prototype={
hf(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.agf.prototype={}
A.agg.prototype={}
A.agu.prototype={}
A.ajy.prototype={}
A.ajB.prototype={}
A.ald.prototype={}
A.ale.prototype={}
A.alf.prototype={}
A.alh.prototype={}
A.ali.prototype={}
A.alj.prototype={}
A.alk.prototype={}
A.apA.prototype={}
A.arb.prototype={}
A.aIN.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xR
u=new A.z1(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yZ(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aIO())}catch(p){return D.xR}v=null
try{v=C.b.qe(w.a,new A.aIP())}catch(p){return D.xR}o=v.a
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
if(f<m)m=f}e=new A.yZ(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yZ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.alg.prototype={}
A.aIQ.prototype={
i7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaX(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aT())
a3.aOm(new B.G(0,0,u,v))}d.a_z(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aR8(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aR4(a3,q,a4)
d.aR9(a3,q,a4)
d.al7(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dz("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vb(q,i,j,k))}}d.aRg(a3,s,a4)
if(w.gaaX(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRe(a2,a3,v,f,new A.G7(g),a4)}},
aR4(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.btG(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Z2(o,e,u,f)
s=p.aiD(o,e,t,u,f)
r=p.Z4(o,e,t,u,f,!0)
q=p.aiC(o,e,t,u,f)
p.aR7(d,s,p.Z1(o,e,t,u,f,!0),f,e)
p.aR1(d,q,r,f,e)
p.aR5(d,t,e)
p.aR3(d,t,e,f)}},
aR8(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.btG(a6.a),a9=A.btG(a7.a)
if(a8.length!==a9.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bV.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ac(m).i("cF<1>")
k=B.P(new B.cF(m,l),l.i("aw.E"))
j=a3.Z2(a4,a6,n,b3)
i=a3.Z3(a4,a7.aPv(k),k,b3,j)
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
l=a3.dF(g,a4,b3)
d=a3.fc(f,a4,b3)
a0=a3.dF(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.C.gp(0)
a1.seT(u.mJ(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seT(null)}$.al()
a2=new B.mx(C.dr,C.bg,C.dX,C.eq,C.dM).eo()
m=B.dK(new B.G(0,0,s,r))
l=$.bV.b
if(l===$.bV)B.V(B.v8(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fV(i,a3.r)
w.restore()}},
aR9(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z8(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dF(q.b,w,f)
n.$4(q,p/v*100,e,r).ad0(s,q,new B.n(p,o))}}},
aRg(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h2(b3,new A.aIT())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.Z8(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dF(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.V(B.rl(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lk(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lk(q.$2(m,k))))
f=b1.dF(a1,w,b4)
a3=new B.n(h,f)
a4=b1.dF(a2,w,b4)
a5=new B.n(h,a4)
a6=a0/2
a7=g-a6
a8=g+a6
if(a4>a7&&a4<a8)a5=f<a4?new B.n(h,a4-(a4-a7)):new B.n(h+0,a4+(a8-a4))
a9=i.a
f=b1.y
f===$&&B.a()
a4=a9.a
a6=a9.b
b0=B.kU(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seT(a6.mJ(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seT(null)}a4=a9.c
f.c=a4
if(a4===0){f.seT(null)
a4=B.c_(f.r)
f.r=B.aE(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dn(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.rl(d.a))
f.ad0(t,j,new B.n(h,g))}}},
Z3(d,e,f,g,h){var w=this.aiE(d,e,f,g,h)
return w},
Z2(d,e,f,g){return this.Z3(d,e,f,g,null)},
aiE(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cD($.al().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dF(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f7(d,a0))
if(e===1)g.aB(new B.ct(d,a0))}else g.aB(new B.ct(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.t,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dF(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dF(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dF(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.n(n,l)
s=new B.Lj(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hI(r)}return g},
Z4(d,e,f,g,h,i){var w,v,u,t,s=this
$.al()
w=B.bub(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.ct(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,t))
w.aB(new B.ct(s.fc(v.h(g,0).a,d,h),s.dF(v.h(g,0).b,d,h)))
w.aB(new B.pc())
return w},
aiD(d,e,f,g,h){return this.Z4(d,e,f,g,h,!1)},
Z1(d,e,f,g,h,i){var w,v,u,t=this
$.al()
w=B.bub(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.ct(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,0))
w.aB(new B.ct(t.fc(v.h(g,0).a,d,h),t.dF(v.h(g,0).b,d,h)))
w.aB(new B.pc())
return w},
aiC(d,e,f,g,h){return this.Z1(d,e,f,g,h,!1)},
aR7(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dF(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.buz(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fV(e,r.r)},
aR1(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dF(t.b,w,g)
s=r.r
s===$&&B.a()
A.buz(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fV(e,r.r)},
aR5(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.NK(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k3:C.dX
u.e=C.eq
u.r=v.gp(0)
u.seT(null)
u.c=f.x
u.r=v.gp(0)
$.lp()
u.z=new B.z6(C.aF,w.c*0.57735+0.5)
d.a.fV(B.buc(A.azs(e,f.cy),w.b),this.f)},
aR3(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k3:C.dX
q.e=C.eq
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dF(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dF(u.b,r,g)
t=s.f
A.buz(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bS6(t)
d.a.fV(A.azs(e,f.cy),s.f)},
aRe(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bH9(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dz("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lp().Zz(b4,u.b)
s=u.a
r=w.k(0,C.iL)?new B.kg(1):w
q=new B.tg(new B.hK(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.cB,C.w,r,a8,a8,a8,a8,C.bu,a8)
q.afl(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dF(b7.b,a9,b9)
l=p+C.hJ.ger()
k=o+(w-1)*4+(C.hJ.gcY(0)+C.hJ.gd_(0))
j=t-k-16
i=a7.ZA(b3,l,D.xo,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Fu(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bH8(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lp().K8(new B.F(t,w),0).b
d=new B.n(0,b1)
a0=new B.n(g.a,g.b)
a1=$.lp().K8(new B.F(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.Vw(0,new A.aIR(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bUG(q.r,q.w)
A:{if(D.DE===a5){a6=a3
break A}if(D.DF===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vw(0,new A.aIS(b5,q,new B.n(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z8(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
Wb(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj4(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h2(t,new A.aIU())
return t.length===0?null:t},
aj4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.n(this.fc(q.a,d,h),this.dF(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hu(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q5(s,f,g,C.b.iq(w,v),v.a,v.b)}else return null}}
A.vb.prototype={}
A.a68.prototype={
bm(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcN(),t=new A.aIQ()
t.a0L()
$.al()
w=B.aT()
w.b=C.aV
t.f=w
w=B.aT()
w.b=C.bg
t.r=w
w=B.aT()
w.b=C.aV
t.w=w
w=B.aT()
w.b=C.bg
w.r=C.G.gp(0)
w.a=D.a_F
t.x=w
w=B.aT()
w.b=C.aV
w.r=C.C.gp(0)
t.y=w
w=B.aT()
w.b=C.bg
w.r=C.n.gp(0)
t.z=w
w=B.aT()
w.b=C.aV
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.aae(this.d,v,u,t,d,C.bo,new B.bq(),B.aI(x.v))
t.bk()
t.Yv(v.cx)
t.aeu()
return t},
by(d,e){e.sik(0,this.d)
e.sYg(this.e)
e.scN(B.bw(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.aae.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYg(d){var w=this
if(w.i1.k(0,d))return
w.i1=d
w.a0j(d.cx)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.aZ(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i7(w,new A.a0t(t,v),new A.vs(u.aC,u.i1,u.cV,x.o))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.NS(w.fW.Wb(d,v,new A.vs(w.aC,w.i1,w.cV,x.o)))}}
A.MX.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a0t.prototype={
aOm(d){this.a.a.clipRect(B.dK(d),$.oW()[1],!0)
return null},
ad8(d,e){d.aN(this.a,e)},
Vw(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aZ(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lp()
s.Ye(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dn(d,e,f,g){var w=B.cD($.al().r)
w.aB(new B.f7(d.a,d.b))
w.aB(new B.ct(e.a,e.b))
this.a.fV(A.azs(w,g),f)}}
A.z1.prototype={
gbI(){return[this.a]}}
A.alr.prototype={}
A.a0D.prototype={}
A.b0d.prototype={
K8(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.n((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWf(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d4(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aWg(d,e){var w,v
if(d==null)return D.a_Q
w=d.b
v=e/2
return d.aPy(w>v?v:w)},
Om(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZh(w)},
aZh(d){if(d<1)return this.aIl(d)
return this.a7B(d)},
aIl(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7B(d*q)/q},
a7B(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
aiT(d){if(d>=1)return 1
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
Zz(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iR
w=e.a?u.w.c3(e):e
v=B.bR(d,C.vn)
v=v==null?null:v.ay
return v===!0?w.c3(C.m7):w},
aiL(d,e,f,g){var w=C.d.ah(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.PL.prototype={
a3z(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st4(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3z(v)||w.a3z(d))w.a7()
else{w.cP=w.D=null
w.bc()}},
shH(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cP=w.D=null
w.bc()},
scC(d){var w=this
if(w.ds==d)return
w.ds=d
w.G=w.cP=w.D=null
w.bc()},
dD(d){var w,v=this.D$
if(v!=null){w=v.ar(C.ah,C.iE,v.gdj())
switch(this.ae.a){case 6:return d.c2(new B.at(0,d.b,0,d.d).xI(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xI(w)}}else return new B.F(B.M(0,d.a,d.b),B.M(0,d.c,d.d))},
e7(d,e){var w=this.D$
return w==null?null:w.fM(C.iE,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dI(C.iE,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.I.prototype.ga6.call(u))
v=new B.at(0,w.b,0,w.d).xI(u.D$.gC(0))
u.fy=t.a(B.I.prototype.ga6.call(u)).c2(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.I.prototype.ga6.call(u)).xI(u.D$.gC(0))
break}u.cP=u.D=null}else{t=x.k.a(B.I.prototype.ga6.call(u))
u.fy=new B.F(B.M(0,t.a,t.b),B.M(0,t.c,t.d))}},
Tx(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c3(new Float64Array(16))
w.h0()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bww(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yA(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yA(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pH(n.a,n.b,0)
q.qQ(w.a/s.a,w.b/s.b,1,1)
q.fZ(-o,-p.b,0,1)
m.cP=q}},
a6w(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.zg(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i3.prototype.gi6.call(s)
t=s.ch.a
return d.z9(r,e,v,u,t instanceof B.q6?t:null)}else s.ks(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tx()
w=s.D
w.toString
if(w&&s.eX!==C.r){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uo?t:null
u.sbh(0,d.o1(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFZ(),s.eX,t))}else s.ch.sbh(0,s.a6w(d,e))},
e9(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tx()
return d.JS(new A.aTg(v),e,v.cP)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OP()
else{this.Tx()
w=this.cP
w.toString
e.fX(0,w)}}}
A.a4c.prototype={
bm(d){var w=new A.PL(this.e,this.f,B.e6(d),C.r,null,new B.bq(),B.aI(x.v))
w.bk()
w.sc8(null)
return w},
by(d,e){e.st4(this.e)
e.shH(this.f)
e.scC(B.e6(d))
if(C.r!==e.eX){e.eX=C.r
e.bc()
e.cu()}}}
var z=a.updateTypes(["L(q7)","D(ev)","~(w,fy)","L(e9,w)","L(L,q7)","bL(L,ti)","pq(L)","w(q5,q5)","~(hi,Km?)","xP(z)","HA(B,bF)","IV(o_)","HU(nZ)","vg(@)","e9(L)","w7(@)","ai(L,ti)","Ce(@)","uD(dF<uD>)","L(vg)","L(w7)","wp(B,bF)","AS(z)","Q<~>()","q7(@)","xn(@)","L(id)","D(fy)","~(w,id)","~(@)","jJ(nH)","c(nH)","jJ(bD<w,L>)","jJ(L)","nH(jJ)","~(hi,NS?)","e9(e9)","DE(dF<aDt>)","yY(@)","lC(Gi<lC>)","tj(w)","uE(ev,L,e9,w)","rm(mS)","D(e9)","w(vb,vb)","L(fy)","Q<o_>(ci<o_>)","q6?(rC,n)","w(w,w,L)","fy(fy,fy,L)","id(id,id,L)","mt(mt,mt,L)","Cw?(fy,w,id,w)","E(fy)","c(L,ti)","ev(ev,ev,L)","D(L)","mN(mN,mN,L)","nd(nd,nd,L)","kF(kF,kF,L)","l4(l4,l4,L)","f(kF)","f(l4)","e9(e9,e9,L)","mu(mu,mu,L)","uE(ev,L,e9,w{size:L?})","D(ev,e9)","L(n,n)","u<tj>(e9,u<w>)","Q<nZ>(ci<nZ>)","u<rm>(u<mS>)","E(mS)","yb(eY<B?>)"])
A.aDp.prototype={
$1(d){var w=B.dx(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q7(J.an(v==null?"":v),A.oS(w.h(0,"revenue_net")),A.oS(w.h(0,"expense_net")),A.oS(w.h(0,"result_net")))},
$S:z+24}
A.aDq.prototype={
$1(d){var w,v,u,t=B.dx(x.f.a(d),x.N,x.z),s=B.ah(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.an(r==null?"unbekannt":r)
w=B.ah(t.h(0,"code"))
v=A.oS(t.h(0,"gross"))
u=B.bn(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vg(s,r,w,v,u,A.oS(t.h(0,"avg_basket")))},
$S:z+13}
A.aDr.prototype={
$1(d){var w,v=B.dx(x.f.a(d),x.N,x.z),u=B.ah(v.h(0,"product_id")),t=v.h(0,"name")
t=J.an(t==null?"unbekannt":t)
w=B.bn(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.w7(u,t,w,A.oS(v.h(0,"gross")))},
$S:z+15}
A.aDI.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.an(v==null?"":v)
u=w.h(d,"name")
u=J.an(u==null?"":u)
t=w.h(d,"direction")
return new A.Ce(v,u,J.an(t==null?"expense":t),A.tX(w.h(d,"net")),A.tX(w.h(d,"tax")),A.tX(w.h(d,"gross")))},
$S:z+17}
A.bpS.prototype={
$1(d){return new A.uD(d.aq($.c1(),x.A))},
$S:z+18}
A.bpT.prototype={
$1(d){return new A.DE(d.aq($.bLI(),x.D))},
$S:z+37}
A.brL.prototype={
$1(d){return E.aDs()},
$S:z+39}
A.bpU.prototype={
$1(d){var w=d.aq($.x5(),x.P)
return d.aq($.aul(),x.a).FL(w)},
$S:z+46}
A.bpR.prototype={
$1(d){var w=d.aq($.x5(),x.P)
return d.aq($.aul(),x.a).FH(w)},
$S:z+69}
A.bpQ.prototype={
$1(d){return this.aiv(d)},
aiv(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.l(d.aq($.c1(),x.A).hA("finance_balance_kpis",t),$async$$1)
case 3:s=r.dx(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:318}
A.aDo.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.aul(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDn.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.aul(),x.a).Lf(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDG.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bsu()
if(s.e==null)B.V(B.a_(y.b))
s.gcr().cm(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDy.prototype={
$0(){return this.a.J9(this.b,this.c)},
$S:0}
A.aDz.prototype={
$0(){return this.a.B5(this.b,this.c)},
$S:0}
A.aDA.prototype={
$0(){var w=x.z
return B.be(this.a,!1).ed(B.ej(new A.aDx(),null,w),w)},
$S:0}
A.aDx.prototype={
$1(d){return F.CI},
$S:z+9}
A.aDB.prototype={
$0(){return B.o4(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDC.prototype={
$0(){var w=this
return w.a.B6(w.b,w.c,w.d)},
$S:0}
A.aDF.prototype={
$0(){return D.aqF},
$S:95}
A.aDE.prototype={
$2(d,e){return new A.HA(B.i(d),null)},
$S:z+10}
A.aDD.prototype={
$1(d){return new A.IV(d,null)},
$S:z+11}
A.aDw.prototype={
$1(d){var w=null,v=this.a,u=$.e_()
v=B.j("Die Finanzauswertung f\xfcr "+u.an(v.a)+" \u2013 "+u.an(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.ls(B.b([B.dG(C.cU,w,w,new A.aDu(u),w,w),B.dO(F.v0,new A.aDv(u),B.dP(C.l,C.h,w,w,w,w,w))],x.p),w,v,F.v1)},
$S:52}
A.aDu.prototype={
$0(){B.be(this.a,!1).df(!1)
return null},
$S:0}
A.aDv.prototype={
$0(){B.be(this.a,!1).df(!0)
return null},
$S:0}
A.bfc.prototype={
$0(){var w=this.a.aJ(0,$.x5().ghO(),x.V),v=E.aDs()
w.wn(0,v)
return v},
$S:0}
A.bfd.prototype={
$0(){var w=this.a.aJ(0,$.x5().ghO(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.lC(B.bJ(B.aV(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.bfe.prototype={
$0(){return this.a.Iy(this.b,this.c)},
$S:0}
A.bfb.prototype={
$2(d,e){return new B.oy(B.U(d).aOU(B.U(d).ax.aPN(C.h,C.l)),e,null)},
$S:997}
A.bkX.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dL(),s=A.NC(!1,C.l3,"Umsatz 7 %",t.an(u.a),w),r=A.NC(!1,C.l3,"Umsatz 19 %",t.an(u.b),w),q=A.NC(!0,D.a9S,"Umsatz netto",t.an(u.c),w),p=A.NC(!1,D.a9R,"Aufwand",t.an(u.d),w),o=u.e,n=t.an(o)
return B.a4X(1.7,B.b([s,r,q,p,A.NC(!0,C.nC,"Ergebnis",n,o<0?C.ae:C.al),A.NC(!1,C.eG,"USt-Saldo",t.an(u.f-u.r),w)],x.p),v,12,12,C.jM,!0)},
$S:100}
A.aIw.prototype={
$0(){return D.aqC},
$S:95}
A.aIv.prototype={
$2(d,e){var w=null
return B.bv(C.ae,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.y(C.h,13,C.k),w,w,w),C.fI,w,C.D,w,3)},
$S:303}
A.aIu.prototype={
$1(d){return new A.HU(d,null)},
$S:z+12}
A.bcL.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dL(),i=j.an(k.c),h=l.w,g=l.d,f=B.ac(g).i("aa<1,L>"),e=f.i("aw.E"),d=B.P(new B.aa(g,new A.bcA(),f),e)
i=A.jA(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.an(r.b)
w=B.P(new B.aa(g,new A.bcB(),f),e)
d=A.jA(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.an(k.e)
w=B.P(new B.aa(g,new A.bcC(),f),e)
k=A.jA(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.P(new B.aa(g,new A.bcD(),f),e)
w=A.jA(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.P(new B.aa(g,new A.bcE(),f),e)
v=A.jA(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.P(new B.aa(g,new A.bcF(),f),e)
u=A.jA(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.P(new B.aa(g,new A.bcG(),f),e)
t=A.jA(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.an(h.d)
s=B.P(new B.aa(g,new A.bcH(),f),e)
h=A.jA(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.an(l.r.d)
m=B.P(new B.aa(g,new A.bcI(m),f),e)
m=A.jA(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.an(l)
l=B.P(new B.aa(g,new A.bcJ(l),f),e)
l=A.jA(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.P(new B.aa(g,new A.bcK(j),f),e)
return B.a4X(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jA(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jM,!0)},
$S:100}
A.bcA.prototype={
$1(d){return d.b},
$S:z+0}
A.bcB.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bcC.prototype={
$1(d){return d.d},
$S:z+0}
A.bcD.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcE.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bcF.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bcG.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcH.prototype={
$1(d){return d.d},
$S:z+0}
A.bcI.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bcJ.prototype={
$1(d){return this.a},
$S:z+0}
A.bcK.prototype={
$1(d){return this.a},
$S:z+0}
A.bcM.prototype={
$0(){return A.bwt(this.b,1.45,new A.Tb(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bcN.prototype={
$0(){return A.bwt(this.b,1.6,new A.Tn(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bp_.prototype={
$1(d){var w=this,v=null,u=B.aQ(16),t=x.p,s=B.b([B.am(B.b([B.aG(B.j(w.a,v,v,v,B.bS(C.h,18,C.o),v,v,v),1),B.ff(v,v,D.abW,v,v,new A.boZ(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.y(C.q,12,C.aB),v,v,v),C.H],t))
s.push(C.v)
s.push(B.c7(new B.mr(w.c,w.d,v),v,17976931348623157e292))
return B.a3y(v,C.n,new B.af(C.ac,B.ad(s,C.B,C.f,C.Q),v),v,v,v,C.fi,C.uL,v,new B.d8(u,C.A),v)},
$S:998}
A.boZ.prototype={
$0(){return B.be(this.a,!1).f1()},
$S:0}
A.bcO.prototype={
$0(){var w=this.a,v=B.b6(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bwt(this.b,2.4,new A.Xu(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.bkb.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bkc.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bkd.prototype={
$1(d){return A.aIL(null,1.4,null,C.ae,0.35,D.ag9,D.Dv,null,!1,!1,!1,!1,D.EX,!1,10,D.Yk,!0,C.lj,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+14}
A.b3L.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b3N.prototype={
$2(d,e){var w=null
return B.j(this.a.aJC(d),w,w,w,B.y(C.q,10,C.N),w,w,w)},
$S:z+16}
A.b3O.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.uT
return new B.af(C.kP,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.y(C.q,9,C.N),w,w,w),w)},
$S:z+5}
A.b3M.prototype={
$1(d){return D.a8n},
$S:z+6}
A.b4y.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4z.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4A.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b4B.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.uT
return new B.af(C.kP,B.j(this.a[v],w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+5}
A.bdh.prototype={
$1(d){return d.d},
$S:z+19}
A.bdi.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bmd.prototype={
$1(d){return d.d},
$S:z+20}
A.bme.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b2f.prototype={
$0(){return D.aqK},
$S:95}
A.b2e.prototype={
$2(d,e){return new A.wp("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b2d.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bv(o,B.ad(B.b([B.j("Noch keine Bilanzdaten erfasst.",o,o,o,B.y(C.h,14,C.N),o,o,o),C.H,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.y(C.q,12.5,C.k),o,o,o),C.v,B.hG(C.Eu,D.aDV,new A.b29(p.b,p.c),o)],x.p),C.B,C.f,C.i),C.af,o,C.D,o,3)
w=new A.b2g(d)
v=C.b.fG(p.a.e.d,0,new A.b2a())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.ji(new A.b2b(new A.b2h(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ad(B.b([w,C.H,B.am(B.b([B.aG(B.j("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.y(C.q,11,C.k),o,o,o),1),B.ov(D.aco,D.aCZ,new A.b2c(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:305}
A.b29.prototype={
$0(){return A.atF(this.a,this.b,null)},
$S:0}
A.b2g.prototype={
$1(d){var w=B.bn(J.a3(this.a,d))
return w==null?null:w},
$S:999}
A.b2h.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b6(w,".",",")+" %"}return w},
$S:31}
A.b2a.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b2b.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jA(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fm,o.$1("liquidity1_pct")),m=A.jA(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fm,o.$1("liquidity2_pct")),l=A.jA(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fm,o.$1("liquidity3_pct"))
o=A.jA(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fm,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b6(w,".",",")+" %"}w=A.jA(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fm,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dL()
v=u.an(v)
return B.a4X(p,B.b([n,m,l,o,w,A.jA(s,s,!1,"Bilanzsumme",!1,"EK "+u.an(t.d),s,s,s,C.fm,v)],x.p),q,12,12,C.jM,!0)},
$S:100}
A.b2c.prototype={
$0(){return A.atF(this.a,this.b,this.c)},
$S:0}
A.boY.prototype={
$1(d){return new A.AS(this.a,new A.boX(this.b),this.c,null)},
$S:z+22}
A.boX.prototype={
$0(){var w=this.a,v=$.byJ()
if(w.e==null)B.V(B.a_(y.b))
w.gcr().cm(v)},
$S:0}
A.b24.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b25.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b27.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.l(B.u2(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b26(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b26.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b28.prototype={
$0(){return B.be(this.a,!1).f1()},
$S:0}
A.b2i.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b2j.prototype={
$1(d){return new A.xn(x.B.a(d),this.a.a.r)},
$S:z+25}
A.awi.prototype={
$1(d){return d.e},
$S:z+26}
A.awj.prototype={
$2(d,e){return d+e},
$S:44}
A.awl.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.awn.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.awo.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.ad8(v.d,v.e)},
$S:0}
A.aw1.prototype={
$1(d){return 0},
$S:1000}
A.aw0.prototype={
$2(d,e){return B.fi(C.bT,this.a.akP(e),C.u,C.bt,null)},
$S:1001}
A.aXH.prototype={
$1(d){return d.a},
$S:z+30}
A.aXI.prototype={
$1(d){return d.b},
$S:z+31}
A.aXJ.prototype={
$1(d){return new A.jJ(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aXK.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mp||v===D.dE))t=1-t
return new A.jJ(d,t*w.d)},
$S:z+33}
A.aXL.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.lp()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.aiT(Math.abs(s.b-s.c)))
t=""}if(C.c.hK(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nH(d,q.c.b.$2(p,new A.ti(u+t,s.e)))},
$S:z+34}
A.aSW.prototype={
$1(d){this.a.l6(new A.a4m(d))},
$S:144}
A.aSX.prototype={
$1(d){this.a.l6(new A.a4n(d))},
$S:41}
A.aSY.prototype={
$1(d){this.a.l6(new A.a4o(d))},
$S:29}
A.aSZ.prototype={
$0(){this.a.l6(D.a1r)},
$S:0}
A.aT_.prototype={
$1(d){this.a.l6(new A.Mu())},
$S:42}
A.aT0.prototype={
$1(d){this.a.l6(new A.a4r(d))},
$S:43}
A.aT1.prototype={
$0(){this.a.l6(D.a1s)},
$S:0}
A.aT2.prototype={
$1(d){this.a.l6(new A.Mx(d))},
$S:92}
A.aT3.prototype={
$1(d){this.a.l6(new A.a4l(d))},
$S:166}
A.aT4.prototype={
$1(d){this.a.l6(new A.a4k(d))},
$S:173}
A.aT5.prototype={
$1(d){return this.a.l6(new A.Ms(d))},
$S:175}
A.aT6.prototype={
$1(d){return this.a.l6(new A.a4p(d))},
$S:64}
A.aT7.prototype={
$1(d){return this.a.l6(new A.Mv(d))},
$S:49}
A.bcZ.prototype={
$1(d){var w=this.a.db.h(0,C.b.iq(this.b.ch,d))
return d.aPt(w==null?B.b([],x.t):w)},
$S:z+36}
A.bcX.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bcY.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h2(w,new A.bcW())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.G7(w))},
$S:0}
A.bcW.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bd_.prototype={
$1(d){return new A.yY(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIM.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.bpG.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bB6(t?A.bwh(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tj(w,new A.yd(!0,A.bx2(),new A.bpF(v)))},
$S:z+40}
A.bpF.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bPB(A.bwh(d,e,f),w,A.bYj(d,e,f))},
$S:z+41}
A.bpD.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iW(v,v,u==null?D.dk:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rm(C.d.j(d.b),w)},
$S:z+42}
A.aIO.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aIP.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aIT.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aIR.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aIS.prototype={
$0(){this.a.ad8(this.b,this.c)},
$S:0}
A.aIU.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.awb.prototype={
$1(d){return d.gdq(0)},
$S:z+45}
A.awc.prototype={
$2(d,e){return d+e},
$S:44}
A.awf.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iL(v,B.ac(v).i("iL<1>")).au(0,new A.awg(w,this.a/(u+1),this.c))},
$S:0}
A.awg.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.awd.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.awe.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFV.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1002}
A.azt.prototype={
$1(d){return d},
$S:1003}
A.aTg.prototype={
$2(d,e){return this.a.At(d,e)},
$S:23};(function aliases(){var w=A.Kf.prototype
w.a_z=w.i7
w.al7=w.aRa
w.al8=w.ad1
w=A.SN.prototype
w.anL=w.l
w=A.Kp.prototype
w.a_A=w.i7
w=A.FG.prototype
w.a0j=w.Yv})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c0W","bPy",72)
v(A.SP.prototype,"gaDn","HY",23)
u(A.SQ.prototype,"garx","ary",8)
t(A,"c_K",3,null,["$3"],["bMT"],49,0)
t(A,"c_L",3,null,["$3"],["bMU"],50,0)
t(A,"c_M",3,null,["$3"],["bMV"],51,0)
t(A,"c_O",4,null,["$4"],["c0z"],52,0)
w(A,"c_N","c0y",53)
s(A,"bwx","c0A",54)
t(A,"c_F",3,null,["$3"],["bPC"],55,0)
w(A,"Zx","c2Y",56)
w(A,"atH","c0D",6)
t(A,"c_H",3,null,["$3"],["bQn"],57,0)
t(A,"c_J",3,null,["$3"],["bVz"],58,0)
t(A,"c_G",3,null,["$3"],["bQm"],59,0)
t(A,"c_I",3,null,["$3"],["bVy"],60,0)
w(A,"ca4","bQl",61)
w(A,"ca5","bVx",62)
r(A.Xj.prototype,"ga3V","awZ",29)
u(A.V7.prototype,"gayg","ayh",35)
t(A,"c1Q",3,null,["$3"],["bQS"],63,0)
t(A,"c1P",3,null,["$3"],["bMX"],64,0)
w(A,"c1T","c2Z",1)
t(A,"bHw",4,null,["$5$size","$4"],["bFY",function(d,e,f,g){return A.bFY(d,e,f,g,null)}],65,0)
s(A,"bx2","c2X",66)
s(A,"bHx","c_s",67)
s(A,"bHA","c0G",68)
s(A,"bHz","c0C",3)
s(A,"bHy","c0B",3)
w(A,"c1S","bH9",70)
w(A,"c1R","bH8",71)
u(A.PL.prototype,"gaFZ","a6w",47)
t(A,"ZC",3,null,["$3"],["c1O"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.W,[A.a5V,A.afq,A.akA,A.Ir,A.IV,A.afo,A.HA,A.HU,A.ajU,A.al6,A.TY,A.Xu,A.Tb,A.Tn,A.alA,A.ahX,A.BM,A.ar8,A.wp,A.Kg,A.Aj])
u(B.B,[A.uD,A.DE,A.bd,A.ags,A.agi,A.agk,A.agl,A.aga,A.ajE,A.ago,A.agm,A.awx,A.arc,A.awk,A.agj,A.Kp,A.a4Y,A.ti,A.apC,A.apB,A.ag9,A.ajD,A.ev,A.ajA,A.ajC,A.anR,A.akr,A.arQ,A.ajB,A.ajj,A.ajz,A.aw_,A.bcU,A.aw2,A.ag6,A.nH,A.ajw,A.ajx,A.vs,A.hi,A.ale,A.alh,A.agf,A.agu,A.agg,A.ajy,A.alk,A.ali,A.arb,A.apA,A.aIN,A.alg,A.vb,A.a0t,A.alr,A.a0D,A.b0d])
u(B.uB,[A.q7,A.vg,A.w7,A.ayS,A.azZ,A.nZ,A.Ce,A.o_])
u(B.nM,[A.aDp,A.aDq,A.aDr,A.aDI,A.bpS,A.bpT,A.brL,A.bpU,A.bpR,A.bpQ,A.aDx,A.aDD,A.aDw,A.aIu,A.bcA,A.bcB,A.bcC,A.bcD,A.bcE,A.bcF,A.bcG,A.bcH,A.bcI,A.bcJ,A.bcK,A.bp_,A.bkd,A.b3M,A.b4y,A.b4z,A.bdh,A.bmd,A.b2d,A.b2g,A.b2h,A.boY,A.b2j,A.awi,A.awl,A.aw1,A.aXH,A.aXI,A.aXJ,A.aXK,A.aXL,A.aSW,A.aSX,A.aSY,A.aT_,A.aT0,A.aT2,A.aT3,A.aT4,A.aT5,A.aT6,A.aT7,A.bcZ,A.bd_,A.aIM,A.bpG,A.bpF,A.bpD,A.aIO,A.aIP,A.awb,A.azt])
t(A.yb,B.ft)
u(B.xC,[A.aDo,A.aDn,A.aDG,A.aDy,A.aDz,A.aDA,A.aDB,A.aDC,A.aDF,A.aDu,A.aDv,A.bfc,A.bfd,A.bfe,A.aIw,A.bcM,A.bcN,A.boZ,A.bcO,A.b2f,A.b29,A.b2c,A.boX,A.b24,A.b25,A.b27,A.b26,A.b28,A.b2i,A.awo,A.aSZ,A.aT1,A.bcX,A.bcY,A.aIR,A.aIS,A.awf])
u(B.xK,[A.yc,A.amM,A.a5W,A.age])
u(B.xD,[A.aDE,A.bfb,A.bkX,A.aIv,A.bcL,A.bkb,A.bkc,A.b3L,A.b3N,A.b3O,A.b4A,A.b4B,A.bdi,A.bme,A.b2e,A.b2a,A.b2b,A.awj,A.awn,A.aw0,A.bcW,A.aIT,A.aIU,A.awc,A.awg,A.awd,A.awe,A.aFV,A.aTg])
u(B.O,[A.AS,A.QS])
u(B.a1,[A.SP,A.Xj])
u(B.N9,[A.Kl,A.NQ])
u(B.xf,[A.SQ,A.V7])
t(A.a05,A.ags)
t(A.ag5,A.a05)
t(A.a_Q,A.ag5)
u(A.a_Q,[A.agh,A.alf])
t(A.nI,A.agh)
u(B.Un,[A.aw9,A.acS,A.Cv,A.aCQ,A.aIx,A.MX])
t(A.fy,A.agi)
t(A.id,A.agk)
t(A.mt,A.agl)
t(A.a_X,A.aga)
t(A.My,A.ajE)
u(A.My,[A.agn,A.alj])
t(A.a01,A.agn)
t(A.a02,A.ago)
t(A.Cw,A.agm)
u(A.awx,[A.Km,A.NS])
t(A.acU,A.arc)
t(A.agp,A.acU)
t(A.a03,A.agp)
u(B.bb,[A.xn,A.yY])
t(A.ug,A.agj)
t(A.Kf,A.Kp)
u(A.Kf,[A.awm,A.aIQ])
u(B.NM,[A.a0_,A.a68])
u(B.K,[A.FG,A.ag7])
u(A.FG,[A.aa1,A.aae])
t(A.pZ,A.apC)
t(A.abq,A.apB)
t(A.p4,A.ag9)
t(A.uF,A.ajD)
t(A.ye,A.ajA)
t(A.pq,A.ajC)
t(A.Pr,A.anR)
t(A.mN,A.akr)
t(A.nd,A.arQ)
u(A.pq,[A.akq,A.arP])
t(A.kF,A.akq)
t(A.l4,A.arP)
t(A.a4j,A.ajB)
u(A.a4j,[A.akp,A.arO])
t(A.a58,A.akp)
t(A.adh,A.arO)
t(A.Mg,A.ajj)
t(A.uE,A.ajz)
t(A.Mr,A.uE)
t(A.abr,B.h_)
t(A.ag8,A.ag7)
t(A.SN,A.ag8)
t(A.a_R,A.SN)
t(A.jJ,A.ag6)
t(A.a4g,A.ajw)
t(A.a4i,A.ajx)
u(A.hi,[A.a4m,A.a4n,A.a4o,A.Mt,A.Mu,A.a4r,A.Mw,A.Mx,A.a4l,A.a4k,A.Ms,A.a4p,A.a4q,A.Mv])
t(A.pD,A.alf)
t(A.e9,A.ale)
t(A.NR,A.alh)
t(A.a_Z,A.agf)
t(A.mu,A.agu)
t(A.Kk,A.agg)
t(A.yd,A.ajy)
t(A.Ej,A.alj)
t(A.a69,A.alk)
t(A.ald,A.ev)
t(A.mS,A.ald)
t(A.q5,A.mS)
t(A.rm,A.ali)
t(A.tj,A.arb)
t(A.G7,A.apA)
t(A.yZ,A.alg)
t(A.z1,A.alr)
t(A.PL,B.PY)
t(A.a4c,B.bL)
w(A.aga,A.bd)
w(A.agh,A.bd)
w(A.agi,A.bd)
w(A.agk,A.bd)
w(A.agl,A.bd)
w(A.agm,A.bd)
w(A.agn,A.bd)
w(A.ago,A.bd)
w(A.agp,A.bd)
w(A.agj,A.bd)
w(A.ag5,A.bd)
w(A.ag9,A.bd)
w(A.ajj,A.bd)
w(A.ajz,A.bd)
w(A.ajA,A.bd)
w(A.ajC,A.bd)
w(A.ajD,A.bd)
w(A.akq,A.bd)
w(A.akp,A.bd)
w(A.akr,A.bd)
w(A.anR,A.bd)
w(A.apB,A.bd)
w(A.apC,A.bd)
w(A.arc,A.bd)
w(A.arP,A.bd)
w(A.arO,A.bd)
w(A.arQ,A.bd)
w(A.ag6,A.bd)
v(A.ag7,B.aC)
w(A.ag8,B.e4)
v(A.SN,B.a3h)
w(A.ags,A.bd)
w(A.ajw,A.bd)
w(A.ajx,A.bd)
w(A.ajE,A.bd)
w(A.agf,A.bd)
w(A.agg,A.bd)
w(A.agu,A.bd)
w(A.ajy,A.bd)
w(A.ajB,A.bd)
w(A.ald,A.bd)
w(A.ale,A.bd)
w(A.alf,A.bd)
w(A.alh,A.bd)
w(A.ali,A.bd)
w(A.alj,A.bd)
w(A.alk,A.bd)
w(A.apA,A.bd)
w(A.arb,A.bd)
w(A.alg,A.bd)
w(A.alr,A.bd)})()
B.bmq(b.typeUniverse,JSON.parse('{"a5V":{"W":[],"c":[]},"DE":{"aDt":[]},"yb":{"ft":["bf<~>"],"ft.T":"bf<~>"},"IV":{"W":[],"c":[]},"HA":{"W":[],"c":[]},"yc":{"bl":[],"O":[],"c":[]},"afq":{"W":[],"c":[]},"akA":{"W":[],"c":[]},"amM":{"bl":[],"O":[],"c":[]},"Ir":{"W":[],"c":[]},"afo":{"W":[],"c":[]},"HU":{"W":[],"c":[]},"wp":{"W":[],"c":[]},"AS":{"O":[],"c":[]},"a5W":{"bl":[],"O":[],"c":[]},"ajU":{"W":[],"c":[]},"al6":{"W":[],"c":[]},"TY":{"W":[],"c":[]},"Xu":{"W":[],"c":[]},"Tb":{"W":[],"c":[]},"Tn":{"W":[],"c":[]},"alA":{"W":[],"c":[]},"ahX":{"W":[],"c":[]},"BM":{"W":[],"c":[]},"ar8":{"W":[],"c":[]},"age":{"bl":[],"O":[],"c":[]},"SP":{"a1":["AS"]},"Kl":{"O":[],"c":[]},"SQ":{"a1":["Kl"]},"nI":{"bd":[]},"fy":{"bd":[]},"id":{"bd":[]},"mt":{"bd":[]},"Cw":{"bd":[]},"xn":{"bb":["nI"],"b2":["nI"],"b2.T":"nI","bb.T":"nI"},"a_X":{"bd":[]},"a01":{"bd":[]},"a02":{"bd":[]},"a03":{"bd":[]},"ug":{"bd":[]},"a0_":{"aX":[],"c":[]},"aa1":{"K":[],"I":[],"jk":[],"aS":[]},"pq":{"bd":[]},"mN":{"bd":[]},"nd":{"bd":[]},"kF":{"bd":[]},"l4":{"bd":[]},"uE":{"bd":[]},"a_Q":{"bd":[]},"pZ":{"bd":[]},"abq":{"bd":[]},"p4":{"bd":[]},"uF":{"bd":[]},"ye":{"bd":[]},"acU":{"bd":[]},"Pr":{"bd":[]},"a58":{"bd":[]},"adh":{"bd":[]},"Mg":{"bd":[]},"Mr":{"bd":[]},"Kg":{"W":[],"c":[]},"QS":{"O":[],"c":[]},"Xj":{"a1":["QS"]},"jJ":{"bd":[]},"abr":{"h_":[],"aX":[],"c":[]},"a_R":{"e4":["K","hj"],"K":[],"aC":["K","hj"],"I":[],"aS":[],"aC.1":"hj","e4.1":"hj","aC.0":"K"},"Aj":{"W":[],"c":[]},"a05":{"bd":[]},"a4g":{"bd":[]},"My":{"bd":[]},"a4i":{"bd":[]},"a4m":{"hi":[]},"a4n":{"hi":[]},"a4o":{"hi":[]},"Mt":{"hi":[]},"Mu":{"hi":[]},"a4r":{"hi":[]},"Mw":{"hi":[]},"Mx":{"hi":[]},"a4l":{"hi":[]},"a4k":{"hi":[]},"Ms":{"hi":[]},"a4p":{"hi":[]},"a4q":{"hi":[]},"Mv":{"hi":[]},"FG":{"K":[],"I":[],"jk":[],"aS":[]},"NQ":{"O":[],"c":[]},"V7":{"a1":["NQ"]},"pD":{"bd":[]},"e9":{"bd":[]},"mu":{"bd":[]},"mS":{"ev":[],"bd":[]},"q5":{"mS":[],"ev":[],"bd":[]},"rm":{"bd":[]},"tj":{"bd":[]},"G7":{"bd":[]},"yY":{"bb":["pD"],"b2":["pD"],"b2.T":"pD","bb.T":"pD"},"NR":{"bd":[]},"a_Z":{"bd":[]},"Kk":{"bd":[]},"yd":{"bd":[]},"a4j":{"bd":[]},"Ej":{"bd":[]},"a69":{"bd":[]},"yZ":{"bd":[]},"a68":{"aX":[],"c":[]},"aae":{"K":[],"I":[],"jk":[],"aS":[]},"z1":{"bd":[]},"PL":{"K":[],"bu":["K"],"I":[],"aS":[]},"a4c":{"bL":[],"aX":[],"c":[]}}'))
B.bFs(b.typeUniverse,JSON.parse('{"Kf":1,"My":1,"Kp":1,"FG":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.av
return{_:w("Ce"),e:w("bf<nZ>"),aN:w("bf<o_>"),fM:w("bf<a0<f,@>?>"),b:w("bf<~>"),W:w("jJ"),B:w("nI"),dB:w("fy"),T:w("ug"),fj:w("id"),G:w("mt"),J:w("mu"),k:w("at"),cX:w("a0D<L>"),dO:w("uo"),R:w("ak<f,@>"),v:w("hS"),bz:w("lw<bc>"),f0:w("nR"),E:w("bd"),F:w("yb"),X:w("nZ"),P:w("lC"),D:w("uD"),a:w("aDt"),d:w("o_"),cw:w("ev"),L:w("hj"),m:w("di<w,E>"),cm:w("kF"),dv:w("mN"),g:w("C<nH>"),O:w("C<fy>"),Y:w("C<id>"),C:w("C<btr>"),U:w("C<ev>"),K:w("C<a4Y>"),u:w("C<e9>"),bC:w("C<vb>"),aA:w("C<u<ev>>"),r:w("C<G7>"),s:w("C<f>"),eg:w("C<tg>"),df:w("C<q5>"),p:w("C<c>"),n:w("C<L>"),t:w("C<w>"),eF:w("bg<a1<O>>"),Z:w("mS"),cz:w("e9"),hf:w("pD"),dj:w("yZ"),fT:w("rm"),c_:w("ij<oL<bf<~>>>"),x:w("z1<fy>"),y:w("z1<e9>"),I:w("u<w>"),ef:w("vg"),c:w("a0<f,@>"),f:w("a0<@,@>"),gj:w("aa<L,L>"),w:w("jX"),aU:w("B"),Q:w("vs<nI>"),o:w("vs<pD>"),eo:w("pP"),gJ:w("pQ"),V:w("n6<lC>"),N:w("f"),A:w("n8"),bO:w("bH"),er:w("tg"),j:w("w7"),dw:w("q5"),bY:w("tj"),cZ:w("q7"),gc:w("ke"),es:w("l4"),bN:w("nd"),l:w("c"),q:w("wJ"),g4:w("iw<L>"),cJ:w("D"),i:w("L"),z:w("@"),S:w("w"),bn:w("xn?"),f3:w("yY?"),M:w("u<@>?"),h:w("a0<f,@>?"),fF:w("a0<@,@>?"),cK:w("B?"),aD:w("ke?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AC=new B.nz(C.l,B.av("nz<E>"))
D.AJ=new A.Cv(0,"left")
D.mp=new A.Cv(1,"top")
D.AK=new A.Cv(2,"right")
D.dE=new A.Cv(3,"bottom")
D.aux=new A.pZ(!1,A.bwx(),22,null)
D.kj=new A.p4(16,null,D.aux,!0)
D.a8o=new A.pq(C.C,null,2,null)
D.vR=new A.Kk(!1,D.a8o,A.c1T(),!0)
D.a_w=new A.aw9(3,"spaceEvenly")
D.a_F=new B.xr(6,"dstIn")
D.XF=new B.aW(3,3)
D.AO=new B.d4(D.XF,D.XF,C.a0,C.a0)
D.a_Q=new B.b9(C.C,0,C.S,-1)
D.Bn=new A.a4i()
D.a1r=new A.Mt()
D.a1s=new A.Mw()
D.aLE=new A.abq()
D.akL=w([],B.av("C<kF>"))
D.akM=w([],B.av("C<l4>"))
D.Dq=new A.Mg(D.akL,D.akM,!0)
D.a86=new B.e7("Zeitraum",!1,null)
D.a8a=new B.e7("Konten (SKR 03)",!1,null)
D.xo=new A.aCQ(0,"center")
D.aLQ=new A.yd(!0,A.bx2(),A.bHw())
D.Dv=new A.yd(!1,A.bx2(),A.bHw())
D.Dw=new A.ye(!1,!0,null,A.atH(),A.Zx(),!0,null,A.atH(),A.Zx())
D.aLR=new A.ye(!0,!0,null,A.atH(),A.Zx(),!0,null,A.atH(),A.Zx())
D.a3K=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3w=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3T=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3O=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3h=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3g=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4d=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3D=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4g=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4a=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aoJ=new B.di([50,D.a3K,100,D.a3w,200,D.a3T,300,D.a3O,400,D.a3h,500,D.a3g,600,D.a4d,700,D.a3D,800,D.a4g,900,D.a4a],x.m)
D.dk=new B.ru(D.aoJ,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ah4=w([8,4],x.t)
D.a8m=new A.pq(D.dk,null,0.4,D.ah4)
D.a8n=new A.pq(C.ai,null,0.5,null)
D.fK=new A.ev(0/0,0/0)
D.auz=new A.pZ(!0,A.bwx(),44,null)
D.mq=new A.p4(16,null,D.auz,!0)
D.auy=new A.pZ(!0,A.bwx(),30,null)
D.mr=new A.p4(16,null,D.auy,!0)
D.a8p=new A.uF(!1,D.mq,D.mr,D.mq,D.mr)
D.aLS=new A.uF(!0,D.mq,D.mr,D.mq,D.mr)
D.DE=new A.MX(0,"left")
D.a92=new A.MX(1,"center")
D.DF=new A.MX(2,"right")
D.a97=new B.a8(57495,"MaterialIcons",null,!1)
D.a9O=new B.a8(58927,"MaterialIcons",null,!1)
D.a9R=new B.a8(59005,"MaterialIcons",null,!0)
D.a9S=new B.a8(59007,"MaterialIcons",null,!0)
D.a9T=new B.a8(59011,"MaterialIcons",null,!1)
D.aaN=new B.a8(62589,"MaterialIcons",null,!1)
D.aa5=new B.a8(61349,"MaterialIcons",null,!1)
D.abz=new B.aL(D.aa5,20,C.h,null,null)
D.aac=new B.a8(61487,"MaterialIcons",null,!1)
D.abB=new B.aL(D.aac,18,null,null,null)
D.abW=new B.aL(C.j7,null,C.h,null,null)
D.abX=new B.aL(C.nD,null,C.q,null,null)
D.aco=new B.aL(C.nH,16,null,null,null)
D.a9j=new B.a8(57912,"MaterialIcons",null,!1)
D.acv=new B.aL(D.a9j,null,C.ae,null,null)
D.aeH=new A.a5W(null)
D.aLX=new A.aIx(0,"horizontal")
D.xR=new A.yZ(0,0,0,0,!1)
D.EX=new A.NR(0.5)
D.Br=new A.a69()
D.aeL=new A.Ej(D.Br,A.bHA(),10,A.bHx(),!0,A.bHz(),A.bHy(),!1,null,null,null)
D.aLZ=new A.Ej(D.Br,A.bHA(),10,A.bHx(),!0,A.bHz(),A.bHy(),!0,null,null,null)
D.ag9=w([4,3],x.t)
D.asJ=new B.aB("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.asz=new B.aB("receivables","Forderungen (kurzfristig)")
D.asm=new B.aB("inventory_value","Vorr\xe4te (Warenbestand)")
D.ask=new B.aB("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.as6=new B.aB("fixed_assets","Anlageverm\xf6gen")
D.ase=new B.aB("current_liabilities","Kurzfristige Verbindlichkeiten")
D.asG=new B.aB("long_term_liabilities","Langfristige Verbindlichkeiten")
D.asy=new B.aB("equity","Eigenkapital")
D.Hb=w([D.asJ,D.asz,D.asm,D.ask,D.as6,D.ase,D.asG,D.asy],B.av("C<+(f,f)>"))
D.aM2=w([],x.g)
D.akx=w([],x.O)
D.aky=w([],x.Y)
D.akz=w([],B.av("C<mt>"))
D.akA=w([],B.av("C<mu>"))
D.aM3=w([],x.U)
D.aM4=w([],x.u)
D.akB=w([],x.r)
D.apk={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Ti={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yv=new B.ak(D.Ti,[0,0,0,0,0,0,0,C.cj],B.av("ak<f,B>"))
D.api={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aoE=new B.ak(D.api,[0,0,0,0],B.av("ak<f,w>"))
D.apy={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.ao0=new B.ak(D.apy,[0,0,0,0,null,null,null,null],B.av("ak<f,w?>"))
D.anX=new B.ak(D.apk,[D.yv,D.yv,D.yv,C.cj,C.cj,C.cj,D.aoE,D.ao0],x.R)
D.aod=new B.ak(D.Ti,[0,0,0,0,0,0,0,C.cz],x.R)
D.aph={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aoF=new B.ak(D.aph,[0,0,0,0,0,0,0,C.cz],x.R)
D.a4l=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4t=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3k=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3G=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3Q=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4H=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a37=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3I=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3S=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4b=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aoK=new B.di([50,D.a4l,100,D.a4t,200,D.a3k,300,D.a3G,400,D.a3Q,500,D.a4H,600,D.a37,700,D.a3I,800,D.a3S,900,D.a4b],x.m)
D.T7=new B.ru(D.aoK,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7t=new B.aj(32,32,32,32)
D.aqC=new B.af(D.a7t,C.bx,null)
D.a7v=new B.aj(48,48,48,48)
D.aqF=new B.af(D.a7v,C.bx,null)
D.aqK=new B.af(C.ac,C.bx,null)
D.akN=w([],B.av("C<mN>"))
D.akO=w([],B.av("C<nd>"))
D.XG=new A.Pr(D.akN,D.akO)
D.att=new B.fK("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.atv=new B.fK("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.atx=new B.fK("Automaten-Business","Umsatz je Automat",null,null)
D.aty=new B.fK("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.atA=new B.fK("Top","Meistverkaufte Produkte",null,null)
D.atD=new B.fK("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.atE=new B.fK("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yk=new B.t1(C.G,C.t,0)
D.aDE=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.awb=new B.ed(D.aDE,null,null,null,null,null,null,null,null,null,null,null,null,C.O,!1,null,null,null,C.u,null)
D.aD8=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.awc=new B.ed(D.aD8,null,null,null,null,null,null,null,null,null,null,null,null,C.O,!1,null,null,null,C.u,null)
D.aMd=new B.R(!0,C.C,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCZ=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aDV=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zx=new A.acS(0,"auto")
D.aEv=new A.acS(1,"top")
D.aIO=new A.wp("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aIP=new A.wp("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cau","bLI",()=>B.jp(new A.bpS(),x.D))
w($,"cav","aul",()=>B.jp(new A.bpT(),x.a))
w($,"cbs","x5",()=>B.bvg(new A.brL(),x.P))
w($,"caw","bsu",()=>C.aJ.$1$1(new A.bpU(),x.d))
w($,"cat","bLH",()=>C.aJ.$1$1(new A.bpR(),x.X))
w($,"cas","byJ",()=>C.aJ.$1$1(new A.bpQ(),x.h))
w($,"car","bst",()=>B.aYz(A.c0W(),x.F,x.b))
w($,"c3J","bs6",()=>new A.aw_())
v($,"c6Y","lp",()=>new A.b0d())})()};
(a=>{a["3zMvcYuzz9aWxXnlVEiydDkLZi0="]=a.current})($__dart_deferred_initializers__);