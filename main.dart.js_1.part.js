((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NC(d,e,f,g,h){return new A.a5S(f,g,d,h,e,null)},
a5S:function a5S(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uB:function uB(d){this.a=d},
DB:function DB(d){this.a=d},
bPp(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.T_
w=x.f
v=x.N
u=x.z
t=A.aDA(B.dx(w.a(e.h(a0,"current")),v,u))
s=A.aDA(B.dx(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDA(B.dx(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cj
p=J.d_(p,new A.aDi(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cj
o=J.d_(o,new A.aDj(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cj
q=J.d_(q,new A.aDk(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
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
i=A.boV(u.h(0,"revenue_growth_yoy_pct"))
h=A.boV(u.h(0,"revenue_growth_mom_pct"))
g=A.boV(u.h(0,"result_growth_yoy_pct"))
u=A.boV(u.h(0,"result_growth_mom_pct"))
f=B.bn(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.nY(t,s,r,p,o,q,new A.ayL(m,l,k,n),new A.azS(v,e,w,j,i,h,g,u),f)},
oS(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k_(J.am(d))
return w==null?0:w},
boV(d){if(d==null)return null
if(typeof d=="number")return d
return B.k_(J.am(d))},
q6:function q6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ve:function ve(d,e,f,g,h,i){var _=this
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
ayL:function ayL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azS:function azS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nY:function nY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aDi:function aDi(){},
aDj:function aDj(){},
aDk:function aDk(){},
aDA(d){var w=J.Y(d),v=A.tV(w.h(d,"revenue_net_7")),u=A.tV(w.h(d,"revenue_net_19")),t=A.tV(w.h(d,"revenue_net")),s=A.tV(w.h(d,"expense_net")),r=A.tV(w.h(d,"result_net")),q=A.tV(w.h(d,"vat_collected")),p=A.tV(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cj
w=J.d_(w,new A.aDB(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.nZ(v,u,t,s,r,q,p,w)},
tV(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k_(J.am(d))
return w==null?0:w},
Cc:function Cc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nZ:function nZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDB:function aDB(){},
bPo(d){return new A.y9(d,new B.ij(x.c_),C.dE)},
bpI:function bpI(){},
bpJ:function bpJ(){},
brB:function brB(){},
bpK:function bpK(){},
bpH:function bpH(){},
bpG:function bpG(){},
y9:function y9(d,e,f){this.r=d
this.a=e
this.f=f},
aDh:function aDh(d,e,f){this.a=d
this.b=e
this.c=f},
aDg:function aDg(d,e,f){this.a=d
this.b=e
this.c=f},
bPq(){return new A.ya(null)},
akw(d,e,f,g,h){return new A.akv(e,h,g,f,d,null)},
ya:function ya(d){this.a=d},
aDz:function aDz(d){this.a=d},
aDr:function aDr(d,e,f){this.a=d
this.b=e
this.c=f},
aDs:function aDs(d,e,f){this.a=d
this.b=e
this.c=f},
aDt:function aDt(d){this.a=d},
aDq:function aDq(){},
aDu:function aDu(d){this.a=d},
aDv:function aDv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDy:function aDy(){},
aDx:function aDx(){},
aDw:function aDw(){},
aDp:function aDp(d,e){this.a=d
this.b=e},
aDn:function aDn(d){this.a=d},
aDo:function aDo(d){this.a=d},
afn:function afn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
akv:function akv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amH:function amH(d,e){this.e=d
this.a=e},
bf5:function bf5(d){this.a=d},
bf6:function bf6(d){this.a=d},
bf7:function bf7(d,e,f){this.a=d
this.b=e
this.c=f},
bf4:function bf4(){},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IV:function IV(d,e){this.c=d
this.a=e},
bkN:function bkN(d){this.a=d},
afl:function afl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hz:function Hz(d,e){this.c=d
this.a=e},
bwj(d,e,f,g,h){var w=null
return B.j4(w,w,!0,w,new A.boQ(h,g,e,f),d,w,!0,!0,x.H)},
jA(d,e,f,g,h,i,j,k,l,m,n){return new A.al1(g,n,i,e,d,m,f,k,l,j,null)},
atz(d,e,f){var w=0,v=B.r(x.H)
var $async$atz=B.m(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.l(B.j4(null,null,!0,null,new A.boO(f,e,e.aJ(0,$.c1(),x.A)),d,null,!0,!0,x.H),$async$atz)
case 2:return B.p(null,v)}})
return B.q($async$atz,v)},
a5T:function a5T(d){this.a=d},
aIp:function aIp(){},
aIo:function aIo(){},
aIn:function aIn(){},
HT:function HT(d,e){this.c=d
this.a=e},
bcE:function bcE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bct:function bct(){},
bcu:function bcu(){},
bcv:function bcv(){},
bcw:function bcw(){},
bcx:function bcx(){},
bcy:function bcy(){},
bcz:function bcz(){},
bcA:function bcA(){},
bcB:function bcB(d){this.a=d},
bcC:function bcC(d){this.a=d},
bcD:function bcD(d){this.a=d},
bcF:function bcF(d,e){this.a=d
this.b=e},
bcG:function bcG(d,e){this.a=d
this.b=e},
boQ:function boQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boP:function boP(d){this.a=d},
ajP:function ajP(d){this.a=d},
al1:function al1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bcH:function bcH(d,e){this.a=d
this.b=e},
TW:function TW(d,e,f){this.c=d
this.d=e
this.a=f},
Xr:function Xr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk4:function bk4(){},
bk5:function bk5(){},
bk6:function bk6(d){this.a=d},
Ta:function Ta(d,e,f){this.c=d
this.d=e
this.a=f},
b3E:function b3E(){},
b3G:function b3G(d){this.a=d},
b3H:function b3H(d){this.a=d},
b3F:function b3F(){},
Tl:function Tl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4r:function b4r(){},
b4s:function b4s(){},
b4t:function b4t(){},
b4u:function b4u(d){this.a=d},
alv:function alv(d,e){this.c=d
this.a=e},
bda:function bda(){},
bdb:function bdb(){},
ahS:function ahS(d,e){this.c=d
this.a=e},
BK:function BK(d,e,f){this.c=d
this.d=e
this.a=f},
ar2:function ar2(d,e){this.c=d
this.a=e},
bm3:function bm3(){},
bm4:function bm4(){},
wn:function wn(d,e){this.c=d
this.a=e},
agb:function agb(d,e){this.e=d
this.a=e},
b28:function b28(){},
b27:function b27(){},
b26:function b26(d,e,f){this.a=d
this.b=e
this.c=f},
b22:function b22(d,e){this.a=d
this.b=e},
b29:function b29(d){this.a=d},
b2a:function b2a(d){this.a=d},
b23:function b23(){},
b24:function b24(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b25:function b25(d,e,f){this.a=d
this.b=e
this.c=f},
boO:function boO(d,e,f){this.a=d
this.b=e
this.c=f},
boN:function boN(d){this.a=d},
AQ:function AQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SP:function SP(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1Y:function b1Y(d){this.a=d},
b1Z:function b1Z(d){this.a=d},
b20:function b20(d,e){this.a=d
this.b=e},
b2_:function b2_(d,e){this.a=d
this.b=e},
b21:function b21(d){this.a=d},
bc:function bc(){},
bzC(d){return new A.Kl(d,C.au,C.dt,null,null)},
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
_.fs$=f
_.cS$=g
_.c=_.a=null},
b2b:function b2b(d,e){this.a=d
this.b=e},
b2c:function b2c(d){this.a=d},
aw3(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akf:f,p=a0==null?16:a0,o=d==null?D.a_u:d,n=g==null,m=n?A.bsO(r,r,r,r,r,r,r,r):g,l=a3==null?D.XG:a3
n=n?A.bsO(r,r,r,r,r,r,r,r):g
w=j==null?D.Dq:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nH(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bm,s,w,i,n)},
awa(d,e,f,g,h){var w=d==null?D.akg:d,v=e==null?2:e,u=g==null?C.lh:g
return new A.fy(h,f===!0,w,v,u)},
bMJ(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.awa(A.kk(d.c,e.c,f,A.c_B(),x.fj),B.ab(d.d,e.d,f),!1,A.kk(d.e,e.e,f,A.Zz(),x.S),w)},
a_Y(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T7
else w=h
v=m==null
u=v?8:m
t=$.lp()
s=t.aWd(f,v?8:m)
t=t.aWe(g,v?8:m)
v=d==null?A.bzA(r,r,r,r,r):d
return new A.id(q,l,w,j,u,s,e,t,v,k==null?D.akh:k)},
bMK(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mu(d.f,e.f,f),p=A.kk(d.r,e.r,f,A.Zz(),x.S),o=B.bV(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a_Y(A.bzA(v,u,null,!1,t),p,q,o,s,n,null,A.kk(d.y,e.y,f,A.c_C(),x.G),m,r)},
bML(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.ms(u,w,v,B.bV(d.d,e.d,f))},
bzA(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dk
else w=d
return new A.a_U(g===!0,v,u,w,f)},
bsO(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0_(4,C.hJ,16,D.xk,0,120,A.c_E(),!1,!1,D.Zx,0,C.A,A.c_D())
else w=k
v=j==null?C.kQ:j
return new A.a_Z(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c0p(d,e,f,g){var w=null,v=B.iW(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.M,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Ct(C.d.j(f.b),v)},
c0o(d){return A.ayb(D.dk,15)},
nH:function nH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aw2:function aw2(d,e){this.a=d
this.b=e},
fy:function fy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
awb:function awb(){},
awc:function awc(){},
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
ms:function ms(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_U:function a_U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_Z:function a_Z(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acP:function acP(d,e){this.a=d
this.b=e},
a0_:function a0_(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Ct:function Ct(d,e){this.a=d
this.b=e},
Km:function Km(d){this.a=d},
a00:function a00(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xl:function xl(d,e){this.a=d
this.b=e},
ag7:function ag7(){},
age:function age(){},
agf:function agf(){},
agh:function agh(){},
agi:function agi(){},
agj:function agj(){},
agk:function agk(){},
agl:function agl(){},
agm:function agm(){},
awd:function awd(d){this.a=d},
awe:function awe(){},
ue:function ue(d,e,f){this.a=d
this.b=e
this.c=f},
agg:function agg(){},
awf:function awf(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
awg:function awg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awh:function awh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4V:function a4V(d){this.b=d},
a_X:function a_X(d,e,f){this.d=d
this.e=e
this.a=f},
a9Z:function a9Z(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i1=e
_.cV=f
_.fV=g
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
c0q(d,e){var w=null
return new A.QS(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
avX(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p3(t,e.b,new A.pY(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bAY(d,e,f){var w=A.avX(d.b,e.b,f),v=A.avX(d.d,e.d,f),u=A.avX(d.e,e.e,f)
return new A.uD(e.a,w,A.avX(d.c,e.c,f),v,u)},
bPs(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bAW(d,e,f){return new A.yc(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c2O(d){return!0},
c0t(d){return D.a8b},
bAX(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pp(w,f,g,e)},
bCR(d,e,f){var w,v=A.kk(d.a,e.a,f,A.c_x(),x.dv)
v.toString
w=A.kk(d.b,e.b,f,A.c_z(),x.bN)
w.toString
return new A.Pr(v,w)},
bQd(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r5(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mN(t,w,v,u)},
bVp(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r5(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nd(t,w,v,u)},
bQc(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pj(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bQa(B.bsF(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r5(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kk(d.d,e.d,f,A.Zz(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kF(r,e.f,e.r,t,e.x,u,v,w,s)},
bVo(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pj(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bVm(B.bsF(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r5(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kk(d.d,e.d,f,A.Zz(),x.S)
if(u==null)u=v==null?C.C:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
bQa(d,e,f,g,h,i){return new A.a55(f,!1,g,i,d,e)},
bQb(d){return C.d.ak(d.e,1)},
bVm(d,e,f,g,h,i){return new A.ade(f,!1,g,i,d,e)},
bVn(d){return C.d.ak(d.e,1)},
bAT(d,e,f){var w,v=A.kk(d.a,e.a,f,A.c_w(),x.cm)
v.toString
w=A.kk(d.b,e.b,f,A.c_y(),x.es)
w.toString
return new A.Mg(v,w,!0)},
bPr(d,e,f){return new A.Mr(d,e==null?4:e,f)},
a_N:function a_N(){},
Cs:function Cs(d,e){this.a=d
this.b=e},
th:function th(d,e){this.r=d
this.w=e},
pY:function pY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abn:function abn(){},
p3:function p3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uD:function uD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev:function ev(d,e){this.a=d
this.b=e},
yc:function yc(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pp:function pp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acR:function acR(){},
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
a55:function a55(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ade:function ade(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Mg:function Mg(d,e,f){this.a=d
this.b=e
this.c=f},
uC:function uC(){},
Mr:function Mr(d,e,f){this.a=d
this.b=e
this.c=f},
ag2:function ag2(){},
ag6:function ag6(){},
aje:function aje(){},
aju:function aju(){},
ajv:function ajv(){},
ajx:function ajx(){},
ajy:function ajy(){},
akl:function akl(){},
akk:function akk(){},
akm:function akm(){},
anL:function anL(){},
apv:function apv(){},
apw:function apw(){},
ar6:function ar6(){},
arJ:function arJ(){},
arI:function arI(){},
arK:function arK(){},
avT:function avT(){},
Kf:function Kf(){},
Kg:function Kg(d,e,f){this.c=d
this.d=e
this.a=f},
avV:function avV(d){this.a=d},
avU:function avU(d){this.a=d},
QS:function QS(d,e,f){this.c=d
this.e=e
this.a=f},
Xg:function Xg(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bTX(d,e,f){var w=B.ac(f),v=w.i("aa<1,jJ>")
v=B.Q(new B.aa(f,new A.aXA(),v),v.i("aw.E"))
w=w.i("aa<1,c>")
w=B.Q(new B.aa(f,new A.aXB(),w),w.i("aw.E"))
return new A.abo(e,d,v,w,null)},
bMG(d,e,f){var w,v=null,u=B.aI(x.dO),t=J.a5J(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tf(v,C.ap,C.w,new B.kf(1),v,v,v,v,C.bu,v)
u=new A.a_O(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aI(x.v))
u.bk()
return u},
abo:function abo(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aXA:function aXA(){},
aXB:function aXB(){},
a_O:function a_O(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VK$=h
_.aRZ$=i
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
bcN:function bcN(d,e){this.a=d
this.b=e},
avW:function avW(){},
jJ:function jJ(d,e){this.a=d
this.b=e},
nG:function nG(d,e){this.a=d
this.b=e},
ag3:function ag3(){},
ag4:function ag4(){},
ag5:function ag5(){},
SN:function SN(){},
Ah:function Ah(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXC:function aXC(d){this.a=d},
aXD:function aXD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXE:function aXE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4e(d,e){var w=d==null?B.d4(C.C,1):d
return new A.a4d(e!==!1,w)},
a02:function a02(){},
a4d:function a4d(d,e){this.a=d
this.b=e},
My:function My(){},
a4f:function a4f(){},
awq:function awq(){},
aCJ:function aCJ(d,e){this.a=d
this.b=e},
agp:function agp(){},
ajr:function ajr(){},
ajs:function ajs(){},
ajz:function ajz(){},
Kp:function Kp(){},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4j:function a4j(d){this.a=d},
a4k:function a4k(d){this.a=d},
a4l:function a4l(d){this.a=d},
Mt:function Mt(){},
Mu:function Mu(){},
a4o:function a4o(d){this.a=d},
Mw:function Mw(){},
Mx:function Mx(d){this.a=d},
a4i:function a4i(d){this.a=d},
a4h:function a4h(d){this.a=d},
Ms:function Ms(d){this.a=d},
a4m:function a4m(d){this.a=d},
a4n:function a4n(d){this.a=d},
Mv:function Mv(d){this.a=d},
FD:function FD(){},
aSP:function aSP(d){this.a=d},
aSQ:function aSQ(d){this.a=d},
aSR:function aSR(d){this.a=d},
aSS:function aSS(d){this.a=d},
aST:function aST(d){this.a=d},
aSU:function aSU(d){this.a=d},
aSV:function aSV(d){this.a=d},
aSW:function aSW(d){this.a=d},
aSX:function aSX(d){this.a=d},
aSY:function aSY(d){this.a=d},
aSZ:function aSZ(d){this.a=d},
aT_:function aT_(d){this.a=d},
aT0:function aT0(d){this.a=d},
NQ:function NQ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V4:function V4(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cS$=h
_.c=_.a=null},
bcS:function bcS(d,e){this.a=d
this.b=e},
bcQ:function bcQ(d){this.a=d},
bcR:function bcR(d,e){this.a=d
this.b=e},
bcP:function bcP(){},
bcT:function bcT(d){this.a=d},
bu3(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pC(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T7:u
else w=g
v=f==null?A.aw1(!1,u,0,u,!1,D.vO):f
w=new A.e9(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aw1(!1,u,0,u,!1,D.vO):d,j,a0,i,s,!1,p)
w.aqh(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bQI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bzB(d.ay,e.ay,f)
v=A.bzB(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.kk(d.cy,e.cy,f,A.Zz(),x.S)
r=B.Z(d.r,e.r,f)
q=B.r5(d.w,e.w,f)
p=A.kk(d.a,e.a,f,A.c_v(),x.cw)
p.toString
o=B.bDk(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aIE(v,m,w,r,e.z,s,new A.yb(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NR(n),!1,u,o,!0,e.cx,p)},
aw1(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aE(C.d.b0(127.5),D.dk.A()>>>16&255,D.dk.A()>>>8&255,D.dk.A()&255):null
else w=e
return new A.a_W(h,w,g,i,f,!1)},
bzB(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.r5(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bAX(t,A.kk(v.d,u.d,f,A.Zz(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.r5(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.aw1(!1,s,v,u,e.a,new A.Kk(!1,r,w.c,!0))},
bMN(d,e,f){var w=B.Z(d.c,e.c,f),v=B.r5(d.d,e.d,f)
if(w==null)w=v==null?B.aE(C.d.b0(127.5),D.dk.A()>>>16&255,D.dk.A()>>>8&255,D.dk.A()&255):null
return new A.mt(e.a,e.b,w,v)},
c2P(d){return!0},
bw7(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kN)return A.bwS(w.a,A.btI(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dk:w},
bY9(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kN)w=A.bwS(v.a,A.btI(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dk}return A.ayb(w,40)},
bFO(d,e,f,g,h){var w,v=A.bw7(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kN)w=A.bwS(u.a,A.btI(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dk}u=A.ayb(w,40)
return new A.Mr(v,h==null?4:h,u)},
c2N(d,e){return!0},
c_i(d,e){return Math.abs(d.a-e.a)},
c0w(d,e){var w=J.d_(e,new A.bpw(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c0s(d,e){return-1/0},
c0r(d,e){return d.a[e].b},
bH_(d){var w=J.d_(d,new A.bpt(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bGZ(d){return A.ayb(D.dk,15)},
pC:function pC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aIF:function aIF(){},
NR:function NR(d){this.a=d},
a_W:function a_W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mt:function mt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kk:function Kk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yb:function yb(d,e,f){this.a=d
this.b=e
this.c=f},
aIq:function aIq(d,e){this.a=d
this.b=e},
a4g:function a4g(){},
Eg:function Eg(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bpw:function bpw(d){this.a=d},
bpv:function bpv(d){this.a=d},
a66:function a66(){},
bpt:function bpt(){},
mS:function mS(){},
q4:function q4(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rl:function rl(d,e){this.a=d
this.b=e},
ti:function ti(d,e){this.a=d
this.b=e},
G4:function G4(d){this.a=d},
NS:function NS(d){this.a=d},
yW:function yW(d,e){this.a=d
this.b=e},
agc:function agc(){},
agd:function agd(){},
agr:function agr(){},
ajt:function ajt(){},
ajw:function ajw(){},
al8:function al8(){},
al9:function al9(){},
ala:function ala(){},
alc:function alc(){},
ald:function ald(){},
ale:function ale(){},
alf:function alf(){},
apu:function apu(){},
ar5:function ar5(){},
aIG:function aIG(d){this.a=d},
aIH:function aIH(){},
aII:function aII(){},
yX:function yX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alb:function alb(){},
aIJ:function aIJ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIM:function aIM(){},
aIK:function aIK(d,e,f){this.a=d
this.b=e
this.c=f},
aIL:function aIL(d,e,f){this.a=d
this.b=e
this.c=f},
aIN:function aIN(){},
v9:function v9(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a65:function a65(d,e,f){this.d=d
this.e=e
this.a=f},
aab:function aab(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i1=e
_.cV=f
_.fV=g
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
bsN(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ac(o),l=new B.aa(o,new A.aw4(),m.i("aa<1,L>")).km(0,new A.aw5()),k=e-l,j=new A.aw8(k,d,n)
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
new B.iL(o,m.i("iL<1>")).au(0,new A.aw6(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iL(o,m.i("iL<1>")).au(0,new A.aw7(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aw4:function aw4(){},
aw5:function aw5(){},
aw8:function aw8(d,e,f){this.a=d
this.b=e
this.c=f},
aw9:function aw9(d,e,f){this.a=d
this.b=e
this.c=f},
aw6:function aw6(d,e,f){this.a=d
this.b=e
this.c=f},
aw7:function aw7(d,e,f){this.a=d
this.b=e
this.c=f},
btI(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iL(w,B.ac(w).i("iL<1>")).au(0,new A.aFO(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFO:function aFO(d,e){this.a=d
this.b=e},
azl(d,e){var w,v
if(e!=null){w=B.ac(e).i("aa<1,L>")
v=B.Q(new B.aa(e,new A.azm(),w),w.i("aw.E"))
return A.c0k(d,new A.a0A(v,x.cX))}else return d},
azm:function azm(){},
bUw(d,e){var w=!0
if(d!==C.f2)if(!(d===C.ap&&e===C.w))w=d===C.ij&&e===C.aY
if(w)return D.DE
else{w=!0
if(d!==C.hp)if(!(d===C.ij&&e===C.w))w=d===C.ap&&e===C.aY
if(w)return D.DF
else return D.a8R}},
MX:function MX(d,e){this.a=d
this.b=e},
a0q:function a0q(d,e){this.a=d
this.b=e},
z_:function z_(d,e){this.a=d
this.$ti=e},
alm:function alm(){},
c0k(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cD($.al().r)
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
if(o){q=new B.JJ(d.aRV(r,p,p+n,!0),C.q,null)
t.push(q)
m=l.d
if(m!=null)q.hI(m)}p+=n
o=!o}}return l},
a0A:function a0A(d,e){this.a=d
this.b=0
this.$ti=e},
b06:function b06(){},
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
aT9:function aT9(d){this.a=d},
a49:function a49(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
btw(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bMQ(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geh(v)===0){v=d.a.a
if(v.geh(v)===0){v=d.b.a
if(v.geh(v)===0){v=d.c.a
v=v.geh(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
ayb(d,e){var w=1-e/100
return B.aE(d.gfD(d),C.d.b0(d.gNu()*w),C.d.b0(d.gFR()*w),C.d.b0(d.gJZ()*w))},
bAV(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
btx(d){var w=d.a,v=w?A.aXz(d.b):0,u=w?A.aXz(d.c):0,t=w?A.aXz(d.d):0
return new B.ak(v,u,t,w?A.aXz(d.e):0)},
bRX(d){var w
if(d.c===0){d.seT(null)
w=B.c_(d.r)
d.r=B.aE(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bup(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seT(f.mJ(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seT(null)}},
aXz(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kk(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kL(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kL(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c1E(d,e,f){return C.d.b0(d+(e-d)*f)},
bwS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a5S.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.n
r=r?C.l:C.ak
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cC(t.x,C.l,s,18),C.b0],w))
v.push(B.aH(new B.e7(t.c,!1,s),1))
v=B.an(v,C.B,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.j(t.d,1,C.ai,s,B.bY(u==null?C.h:u,22,C.M),s,s,s)],w)
return B.bx(r,B.ae(w,C.B,C.i5,C.i),q,s,C.ae,s,3)}}
A.uB.prototype={
Ll(d){return this.aRY(d)},
aRY(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Ll=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_summary",B.a4(["p_from",E.r_(d.a),"p_to",E.r_(d.b)],s,r),r),$async$Ll)
case 3:q=f
if(q==null){u=D.anV
w=1
break}if(x.f.b(q)){u=B.dx(q,s,r)
w=1
break}u=D.aom
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Ll,v)},
Lk(d){return this.aRX(d)},
aRX(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lk=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_kpis",B.a4(["p_from",E.r_(d.a),"p_to",E.r_(d.b)],s,r),r),$async$Lk)
case 3:q=f
if(x.f.b(q)){u=B.dx(q,s,r)
w=1
break}u=D.anE
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lk,v)},
pz(d){return this.aq_(d)},
aq_(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hu("sevdesk-sync",B.a4(["from",E.r_(d.a),"to",E.r_(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fv(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$pz,v)},
Lg(d){return this.aRN(d)},
aRN(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lg=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hu("finance-export-pdf",B.a4(["from",E.r_(d.a),"to",E.r_(d.b)],s,s)),$async$Lg)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aA(J.a3(r,"base64"))
w=1
break}throw B.e(B.dz("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Lg,v)}}
A.DB.prototype={
FL(d){return this.ajc(d)},
ajc(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Ll(d),$async$FL)
case 7:q=f
o=A.aDA(q)
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
FH(d){return this.aiY(d)},
aiY(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FH=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lk(d),$async$FH)
case 7:q=f
o=A.bPp(q)
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
pz(d){return this.aq0(d)},
aq0(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
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
Lf(d){return this.aRM(d)},
aRM(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lf=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lg(d),$async$Lf)
case 7:q=f
o=C.iF.cQ(q)
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
Hl(d){if(d instanceof B.y6)return d
if(d instanceof B.lW){if(d.b==="42501")return new B.vu(d.a)
return new B.t_(d.a)}if(d instanceof B.MM)return new B.t_("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AI("Unerwarteter Fehler: "+B.i(d))},
$iaDm:1}
A.q6.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ve.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayL.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azS.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nY.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Cc.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nZ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y9.prototype={
GH(d){return this.apZ(0)},
apZ(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GH=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dq)
s=t.r
r=s.aJ(0,$.x3(),x.P)
p.a=null
w=3
return B.l(B.p2(new A.aDh(p,t,r),x.H),$async$GH)
case 3:t.se4(0,f)
q=t.f
if(q.ghn(q)==null){q=$.bsk()
s=s.e
s===$&&B.a()
s.cm(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GH,v)},
Le(){return this.aRL()},
aRL(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$Le=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dq)
s=t.r.aJ(0,$.x3(),x.P)
q.a=null
w=3
return B.l(B.p2(new A.aDg(q,t,s),x.H),$async$Le)
case 3:t.se4(0,e)
r=t.f
u=r.ghn(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Le,v)}}
A.ya.prototype={
dv(d,e){var w=null,v=e.aq($.x3(),x.P),u=e.aq($.bsk(),x.aN)
return B.iO(B.dN(B.b([new B.fK("Finanzen","Dashboard",new A.afn(e.aq($.bsj(),x.b).gja(),new A.aDr(this,d,e),new A.aDs(this,d,e),new A.aDt(d),new A.aDu(d),new A.aDv(this,d,e,v),w),w),C.ax,new A.amH(v,w),C.c6,D.aer,C.c6,B.dr(u,new A.aDw(),new A.aDx(),new A.aDy(),!1,!0,!1,x.d,x.l)],x.p),C.cJ,w,!1),C.l,new A.aDz(e))},
J9(d,e){return this.aKi(d,e)},
aKi(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J9=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.bsj()
w=3
return B.l(e.aJ(0,s.ghO(),x.F).GH(0),$async$J9)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ghn(s)
t=d.P(x.q).f
t.bu(B.cf(null,null,null,null,null,C.u,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J9,v)},
B5(d,e){return this.avX(d,e)},
avX(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B5=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.l(e.aJ(0,$.bsj().ghO(),x.F).Le(),$async$B5)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bu(D.avS)
w=1
break}t=B.pS(C.q,10)
w=4
return B.l($.bJ4().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B5)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B5,v)},
B6(d,e,f){return this.aI_(d,e,f)},
aI_(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B6=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.l(B.j4(null,null,!0,null,new A.aDp(f,d),d,null,!0,!0,x.cJ),$async$B6)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nA(e.aJ(0,$.c1(),x.A))
p=f.a
o=f.b
n=$.e_()
m=n.an(p)
n=n.an(o)
w=8
return B.l(r.zl("finance_period",p,o,B.a4(["period_from",p.ej()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B6)
case 8:if(d.e!=null)d.P(x.q).f.bu(F.uR)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bu(B.cf(null,null,null,null,null,C.u,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B6,v)}}
A.afn.prototype={
u(d){var w=this,v=null,u=A.akw(C.l,F.hO,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akw(v,D.aaz,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akw(v,D.a9A,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akw(C.ad,C.j7,C.ad,s?v:w.e,"PDF-Export")
return B.an(B.b([u,C.b0,t,C.b0,r,C.b0,q,C.b0,A.akw(C.al,C.eG,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.m,C.f,C.P,0,v,v)}}
A.akv.prototype={
u(d){var w,v=this,u=null,t=B.aR(12),s=B.aR(12),r=B.aR(12),q=v.w
if(q==null)q=C.ak
q=B.d4(q,1)
w=v.r
if(w==null)w=C.h
return B.GH(B.dX(!1,C.Z,!0,t,B.eW(!1,s,!0,B.b4(u,B.cC(v.c,w,u,20),C.t,u,u,new B.b0(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ah,0,u,u,u,u,u,C.bD),u,v.d,u,u)}}
A.amH.prototype={
dv(d,e){var w=null,v=this.e,u=$.e_(),t=x.p
return B.bx(w,B.ae(B.b([D.a7V,C.I,B.an(B.b([D.abk,C.b1,B.aH(B.j(u.an(v.a)+" \u2013 "+u.an(v.b),w,w,w,B.y(C.h,16,C.M),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.v,B.oD(C.d5,B.b([new A.Ir("Monat",new A.bf5(e),w,w),new A.Ir("Jahr (YTD)",new A.bf6(e),w,w),new A.Ir("Zeitraum w\xe4hlen \u2026",new A.bf7(this,d,e),D.a9F,w)],t),C.es,6,8)],t),C.B,C.f,C.i),w,w,C.D,w,3)},
Iy(d,e){return this.aGV(d,e)},
aGV(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iy=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bb(Date.now(),0,!1)
s=u.e
w=2
return B.l(E.atR(new A.bf4(),d,B.bJ(B.aV(t)-5,1,1,0,0,0,0),new B.lw(s.a,s.b,x.bz),B.bJ(B.aV(t)+1,1,1,0,0,0,0),C.eh),$async$Iy)
case 2:r=g
if(r!=null)e.aJ(0,$.x3().ghO(),x.V).wn(0,new E.lB(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iy,v)}}
A.Ir.prototype={
u(d){var w=null,v=B.aR(9999),u=B.aR(9999),t=B.aR(9999),s=B.d4(C.ak,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cC(p,C.h,w,14),C.b0],r))
q.push(B.j(this.c,w,w,w,B.y(C.h,13,C.M),w,w,w))
return B.dX(!1,C.Z,!0,v,B.eW(!1,u,!0,B.b4(w,B.an(q,C.m,C.f,C.P,0,w,w),C.t,w,w,new B.b0(w,w,s,t,w,w,C.F),w,w,w,w,C.kP,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ah,0,w,w,w,w,w,C.bD)}}
A.IV.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ji(new A.bkN(this)),C.c6,D.a8_,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bx(s,B.an(B.b([D.abI,C.aA,B.aH(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.r,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.ah,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afl(t.a,t.b,t.c==="revenue",t.d,s),C.I],r))}q.push(B.ae(w,C.m,C.f,C.i))}return B.ae(q,C.ab,C.f,C.i)}}
A.afl.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aN:C.ah,s=B.d4(u?C.l:C.ak,1),r=B.aR(4),q=w.c
r=B.b4(C.a_,B.j(C.c.a_(q,0,1),v,v,v,B.bY(C.h,14,C.p),v,v,v),C.t,v,v,new B.b0(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ai,v,B.y(C.h,14,C.M),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aH(B.ae(B.b([q,B.j(t,v,v,v,B.y(C.r,12,C.k),v,v,v)],s),C.B,C.f,C.i),1)
q=$.dK().an(w.f)
return B.bx(v,B.an(B.b([r,C.aA,t,B.j(q,v,v,v,B.y(u?C.al:C.h,15,C.M),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.ea,v,3)}}
A.Hz.prototype={
u(d){var w=null
return B.bx(C.ad,B.an(B.b([D.acf,C.aA,B.aH(B.j(this.c,w,w,w,B.y(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fI,w,C.D,w,3)}}
A.a5T.prototype={
dv(d,e){return B.dr(e.aq($.bLx(),x.e),new A.aIn(),new A.aIo(),new A.aIp(),!1,!0,!1,x.X,x.l)}}
A.HT.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.atl,C.v,B.ji(new A.bcE(v,q,100-t.w.a,w,p)),C.v,new A.ajP(u),C.ax,D.atk,C.v,new A.agb(t,u),C.ax,D.atf,C.v,B.bE(u,!0,u,B.mM(u,B.bx(u,new A.Ta(t,220,u),u,u,C.D,u,3),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcF(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.L,u),C.ax,D.ata,C.v,B.bE(u,!0,u,B.mM(u,new A.Tl(t,200,!1,u),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcG(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.L,u),C.ax,D.ate,C.v,new A.alv(t,u),C.ax,D.atc,C.v,new A.ahS(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.ax,D.ath,C.v,new A.ar2(t,u)],s))
return B.ae(r,C.ab,C.f,C.i)}}
A.ajP.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.r,11,C.k).dr(1.35),w,w,w)}}
A.al1.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ad:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bcH(m,d):l
r=x.p
q=B.b([B.aH(B.j(m.c.toUpperCase(),l,l,l,B.y(C.r,10,C.p).fE(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d4(C.ad,0.8)
n=B.aR(4)
q.push(B.b4(l,B.j("Ziel "+p,l,l,l,B.y(C.ad,9,C.p),l,l,l),C.t,l,l,new B.b0(l,l,o,n,l,l,C.F),l,l,l,l,C.n5,l,l,l))}q=B.b([B.an(q,C.m,C.f,C.i,0,l,l),C.aW,new A.a49(C.B8,C.dD,B.j(m.d,l,l,l,B.bY(w,22,C.p),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ai,l,B.y(C.r,10,C.aD),l,l,l))
q.push(C.cn)
q.push(B.an(B.b([new A.TW("Vormonat",m.r,l),C.cm,new A.TW("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cn)
q.push(B.aH(new A.Xr(v,m.y,m.z,l),1))
return B.bE(l,u,l,B.mM(l,B.bx(l,B.ae(q,C.B,C.f,C.i),l,l,C.da,l,3),C.a9,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.L,l)}}
A.TW.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aR(4)
return B.b4(r,B.j(this.c+" \u2014",r,r,r,B.y(C.r,9,C.p),r,r,r),C.t,r,r,new B.b0(C.ak,r,r,q,r,r,C.F),r,r,r,r,C.n5,r,r,r)}w=q>=0
v=w?C.al:C.ad
u=v.hB(0.12)
t=B.d4(v,0.7)
s=B.aR(4)
return B.b4(r,B.an(B.b([B.cC(w?F.a8X:D.a8W,v,r,10),F.avz,B.j(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.y(v,9,C.p),r,r,r)],x.p),C.m,C.f,C.P,0,r,r),C.t,r,r,new B.b0(u,r,t,s,r,r,C.F),r,r,r,r,C.n5,r,r,r)}}
A.Xr.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.km(j,new A.bk4())
t=C.b.km(j,new A.bk5())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bk6(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4e(k,!1)
w=B.b([A.aIE(k,2,A.aw1(!1,C.l.hB(0.16),0,k,!0,D.vO),C.l,0.35,k,D.Dv,k,!0,!1,!0,!1,D.EX,!1,10,D.Yk,!0,C.lh,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NQ(A.bu3(k,k,k,D.aki,l,D.Bm,D.Dq,D.Dw,w,D.aev,k,m,k,n,D.XG,D.akj,D.a8e),C.au,C.af,k,k)}}
A.Ta.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aIo
w=C.b.fG(p,0,new A.b3E())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.awa(B.b([A.a_Y(q,q,D.AN,q,C.l,q,q,q,r.b,6),A.a_Y(q,q,D.AN,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.ci(A.bzC(A.aw3(q,q,u,q,q,A.a4e(q,!1),q,new A.yc(!0,!0,q,new A.b3F(),A.Zu(),!1,q,A.atB(),A.Zu()),q,v,q,q,new A.uD(!0,new A.p3(16,q,new A.pY(!0,new A.b3G(this),46,q),!0),D.ki,D.ki,new A.p3(16,q,new A.pY(!0,new A.b3H(p),26,q),!0)))),this.d,q)},
aJB(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.Tl.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.aa(v,new A.b4r(),w),x.i)
C.b.M(o,new B.aa(u,new A.b4s(),w))
t=C.b.fG(o,0,new A.b4t())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.awa(B.b([A.a_Y(q,q,q,q,C.l,q,q,q,v[s],14),A.a_Y(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ci(A.bzC(A.aw3(q,q,n,q,q,A.a4e(q,!1),q,D.Dw,q,o,q,q,new A.uD(!0,D.ki,D.ki,D.ki,new A.p3(16,q,new A.pY(!0,new A.b4u(p),26,q),!0)))),this.d,q)
return this.e?r:B.bx(q,r,q,q,C.D,q,3)}}
A.alv.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aIn
w=new B.aa(l,new A.bda(),B.ac(l).i("aa<1,L>")).km(0,new A.bdb())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.y(C.h,14,C.p),m,m,m)
p=$.dK()
o=r.d
n=new B.aW(4,4)
o=B.b([B.an(B.b([new B.mH(1,C.eD,B.ae(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.an(r.f),m,m,m,B.y(C.r,12,C.aD),m,m,m)],v),C.B,C.f,C.i),m),C.b1,B.j(p.an(o),m,m,m,B.bY(C.h,16,C.p),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cn,new B.CV(new B.d3(n,n,n,n),C.bC,B.Eh(C.ak,8,C.d.c1(o/w,0,1),D.AB),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zx(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.bx(m,B.ae(u,C.m,C.f,C.i),m,m,C.D,m,3)}}
A.ahS.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aH(new A.BK("Aktive Kunden",""+s,u),1)
w=B.aH(new A.BK("K\xe4ufe",""+t.a,u),1)
v=$.dK()
return B.bx(u,B.an(B.b([s,w,B.aH(new A.BK("\xd8-Warenkorb",v.an(t.d),u),1),B.aH(new A.BK("Umsatz/Kunde",v.an(r),u),1)],x.p),C.m,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.BK.prototype={
u(d){var w=null
return B.ae(B.b([B.j(this.c.toUpperCase(),w,w,w,B.y(C.r,10,C.p).fE(0.6),w,w,w),C.bQ,B.j(this.d,w,w,w,B.bY(C.h,20,C.p),w,w,w)],x.p),C.B,C.f,C.P)}}
A.ar2.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.bm3(),B.ac(q).i("aa<1,L>")).km(0,new A.bm4()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.an(B.b([new B.mH(1,C.eD,B.j(u.b,1,C.ai,r,B.y(C.h,13,C.p),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.y(C.r,12,C.M),r,r,r),B.j($.dK().an(t),r,r,r,B.y(C.h,13,C.p),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aW,new B.CV(new B.d3(s,s,s,s),C.bC,B.Eh(C.ak,6,C.d.c1(t/p,0,1),D.AB),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zx(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.I)
C.b.M(n,t)}return B.bx(r,B.ae(n,C.m,C.f,C.i),r,r,C.D,r,3)}}
A.wn.prototype={
u(d){var w=null
return B.bx(w,B.j(this.c,w,w,w,B.y(C.r,13,C.k),w,w,w),C.ah,w,C.D,w,3)}}
A.agb.prototype={
dv(d,e){return B.dr(e.aq($.byz(),x.fM),new A.b26(this,d,e),new A.b27(),new A.b28(),!1,!0,!1,x.h,x.l)}}
A.AQ.prototype={
X(){return new A.SP()},
aWS(){return this.d.$0()}}
A.SP.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bb(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fE(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.Hb[t].a
if(v)r=""
else{r=B.bn(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b6(r,".",",")}u.m(0,s,new B.bH(new B.cS(r,C.bK,C.aS),$.af()))}q.e!==$&&B.b7()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c5(v,v.r,v.e,B.k(v).i("c5<2>"))
while(v.t()){w=v.d
w.R$=$.af()
w.S$=0}this.ap()},
rg(d){var w=this.e
w===$&&B.a()
w=C.c.bi(w.h(0,d).a.a)
w=B.b6(w,".","")
w=B.k_(B.b6(w,",","."))
return w==null?0:w},
HY(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HY=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b1Y(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZi("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ej(),0,10),"p_cash_and_bank",q.rg("cash_and_bank"),"p_receivables",q.rg("receivables"),"p_inventory_value",q.rg("inventory_value"),"p_other_current_assets",q.rg("other_current_assets"),"p_fixed_assets",q.rg("fixed_assets"),"p_current_liabilities",q.rg("current_liabilities"),"p_long_term_liabilities",q.rg("long_term_liabilities"),"p_equity",q.rg("equity")],x.N,x.aU))
w=7
return B.l(n,$async$HY)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWS()
o=q.c
o.toString
B.bg(o,!1).fb()
q.c.P(x.q).f.bu(D.avT)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bu(B.cf(null,null,null,null,null,C.u,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b1Z(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HY,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bY(C.h,18,C.p),r,r,r),p=s.f?r:new A.b20(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.hG(D.abm,B.j("Stichtag: "+C.c.a_(o.ej(),0,10),r,r,r,r,r,r,r),p,r),C.v],w)
for(v=0;v<8;++v){o=D.Hb[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.fa(r,C.aU,!1,r,!0,C.u,r,B.fl(),u.h(0,o.a),r,r,r,r,r,2,new B.cd(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a9,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.il,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a1,r,r,r,r),C.I],w))}p.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.r,11,C.k),r,r,r))
p=B.ci(B.f9(B.ae(p,C.ab,C.f,C.P),r,C.a5),r,380)
o=s.f
u=B.dF(C.cU,r,r,o?r:new A.b21(d),r,r)
o=o?r:s.gaDm()
t=B.dU(C.l,C.h,r,r,r,r,r)
return B.ls(B.b([u,B.dT(s.f?F.YR:C.eq,o,t)],w),C.n,p,q)}}
A.bc.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zx(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ez(B.H(this))^B.bHu(this.gbI()))>>>0},
j(d){B.bAR()
return B.H(this).j(0)}}
A.Kl.prototype={
X(){return new A.SQ(B.A(x.S,x.I),new A.awd(B.A(x.x,x.T)),null,null)}}
A.SQ.prototype={
u(d){var w,v=this,u=v.a1t(),t=v.CW
t.toString
t=v.a1u(t.av(0,v.ghF().gp(0)))
w=v.a1u(u)
v.a.toString
return new A.Kg(new A.a_X(t,w,null),u,null)},
a1u(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.awa(s.c,s.d,!1,r,s.a))}return d.aOO(w)},
a1t(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uk(t.ch)
if(r)s=w.a
r=t.y
t=t.aPJ(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOP(A.bsO(!1,!0,!0,v.d,v.c,u.garw(),v.f,v.e))}return t},
arx(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf1()||e==null||e.a==null){w=v.cy
v.J(w.gaOd(w))
return}v.J(new A.b2b(v,e))},
nQ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1t(),new A.b2c(w)))}}
A.nH.prototype={
UU(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aw3(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPJ(d,e){return this.UU(null,null,d,e)},
aOP(d){return this.UU(null,d,null,null)},
aOO(d){return this.UU(d,null,null,null)},
WQ(d,e,f){var w,v,u,t=A.kk(d.ch,e.ch,f,A.c_A(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bAY(d.d,e.d,f),q=A.bCR(d.e,e.e,f),p=A.bAW(d.c,e.c,f),o=e.a
o=A.a4e(B.a0d(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.aw3(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bAT(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aw2.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fy.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.awb(),B.ac(v).i("aa<1,L>")).km(0,new A.awc())
v=v.length
return w+(v-1)*this.d},
gbI(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.id.prototype={
gbI(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.ms.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_U.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_Z.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acP.prototype={
L(){return"TooltipDirection."+this.b}}
A.a0_.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Ct.prototype={
gbI(){return[this.a,this.b,C.cA,C.w,null]}}
A.Km.prototype={}
A.a00.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xl.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.ag7.prototype={}
A.age.prototype={}
A.agf.prototype={}
A.agh.prototype={}
A.agi.prototype={}
A.agj.prototype={}
A.agk.prototype={}
A.agl.prototype={}
A.agm.prototype={}
A.awd.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ue(0,0,!1)
v=new A.z_(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ue(t,u,!0)}w=null
try{w=C.b.qe(d,new A.awe())}catch(s){return new A.ue(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ue(q,r,!1)
u.m(0,v,j)
return j}}
A.ue.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.agg.prototype={}
A.awf.prototype={
i7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_z(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abB(t,A.bsN(w,t.a),u)
l.y=u
l.aR4(e,u,f)
l.al7(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRd(d,e,m,t,r,s,n,o,f)}}},
abB(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dz("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iL(p,B.ac(p).i("iL<1>")).au(0,new A.awg(t,q,r,s))
w.push(new A.a4V(q))}return w},
aR4(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
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
if(a1!==a2){if(a1>a2){a3=b3.dF(Math.max(s,a2),b5,b8)
a4=B.Pn(h,Math.min(b3.dF(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dF(Math.min(t,a2),b5,b8)
a4=B.Pn(h,a5,g,Math.max(b3.dF(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seT(null)
a6=b3.f.eo()
u.drawRRect(B.mn(a4),a6)
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
u.clipRect(B.dJ(b1),$.oW()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mn(a4),a6)
a6.delete()
u.restore()
b3.aRb(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.geh(k)>0}else k=!1
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
v.fU(A.azl(b2,o.r),b3.r)}}}},
aRd(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Ax(a5,a5,a5,a5,B.d8(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lp().Zz(a8,a7.b),a7.a),C.cA,C.w,a5,b6.c,C.bu)
w.afk(b1.f)
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
if(v!==D.aE9)j=v===D.Zx&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZA(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Fr(g,f,f,f,f)
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
s=g.gahD()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vw(d,new A.awh(a4,a9,e,w,new B.n(q.a-p/2,s.b+o.b-a0.b+r)),new B.n(e.a,e.b),new B.n(0,r),new B.F(v,t))},
aRb(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geh(w)===0}else w=!0
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
q=B.Pn(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a0)}else q=B.buK(w,n.dF(v,j,k),u,n.dF(t,j,k),C.a0)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
Wb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abB(b2,A.bsN(a8,b2.a),a8.ch)
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
break}++a3}return new A.a00(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.n(n,t))}}return null}}
A.a4V.prototype={}
A.a_X.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.awf()
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
t=new A.a9Z(this.d,v,u,t,d,C.bo,new B.bq(),B.aI(x.v))
t.bk()
t.Yv(v.cy)
t.aet()
return t},
by(d,e){e.sik(0,this.d)
e.sYg(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9Z.prototype={
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
u.fV.i7(w,new A.a0q(t,v),new A.vq(u.aC,u.i1,u.cV,x.Q))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.Km(w.fV.Wb(d,v,new A.vq(w.aC,w.i1,w.cV,x.Q)))}}
A.a_N.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cs.prototype={
L(){return"AxisSide."+this.b}}
A.th.prototype={}
A.pY.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abn.prototype={
gbI(){return[!1,0,0,0]}}
A.p3.prototype={
gbI(){return[this.b,this.a,this.c,!0]}}
A.uD.prototype={
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
A.yc.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pp.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acR.prototype={
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
A.a55.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ade.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Mg.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uC.prototype={}
A.Mr.prototype={
ad_(d,e,f){var w,v
$.al()
w=B.aT()
v=this.a
w.r=v.gp(v)
w.b=C.bg
d.iP(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.ag2.prototype={}
A.ag6.prototype={}
A.aje.prototype={}
A.aju.prototype={}
A.ajv.prototype={}
A.ajx.prototype={}
A.ajy.prototype={}
A.akl.prototype={}
A.akk.prototype={}
A.akm.prototype={}
A.anL.prototype={}
A.apv.prototype={}
A.apw.prototype={}
A.ar6.prototype={}
A.arJ.prototype={}
A.arI.prototype={}
A.arK.prototype={}
A.avT.prototype={
Mh(d,e,f,g,h,i){return new B.iw(this.aUV(d,e,f,g,h,i),x.g4)},
aUU(d,e,f,g){return this.Mh(d,e,f,!0,g,!0)},
aUV(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mh(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lp().aiK(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fP(u-s,v)*v===u
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
w.aR0(e,f)
w.aRa(e,f)
w.aR9(e,f)},
aR9(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lp().Om(w.a,a1.r-a1.f)
u=$.brX().Mh(a1.w,v,a1.r,!1,a1.f,!1)
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
u=$.brX().Mh(a1.z,h,a1.y,!1,a1.x,!1)
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
aR0(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aRa(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.kU(new B.n(n.fc(t.a,m,e),0),new B.n(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seT(p.mJ(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seT(null)}o=n.e.eo()
w.drawRect(B.dJ(s),o)
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
j.drawRect(B.dJ(s),o)
o.delete()}},
aR8(d,e,f){var w,v
this.a_A(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad0(d,e,f,w)
if(v.b.length!==0)this.aRf(d,e,f,w)},
ad0(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
s.ad1(0,n,new B.n(h,o),k)}}},
aRf(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
s.ad1(0,n,new B.n(o,k),j)}}},
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
gakt(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gaku(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakv(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakr(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akO(d){var w,v=this,u=null,t=v.d,s=A.btx(t.d),r=t.a
r=r.a&&A.bMQ(r.b)?r.b:u
w=B.b([B.b4(u,v.c,C.t,u,u,new B.b0(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.avV(w)
if(v.gakt())C.b.ht(w,s.$1(!0),new A.Ah(D.AI,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakv())C.b.ht(w,s.$1(!0),new A.Ah(D.mn,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gaku())C.b.ht(w,s.$1(!0),new A.Ah(D.AJ,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakr())C.b.ht(w,s.$1(!0),new A.Ah(D.dF,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
return w},
u(d){return B.ji(new A.avU(this))}}
A.QS.prototype={
X(){return new A.Xg(new B.bf(null,x.eF))}}
A.Xg.prototype={
awW(){switch(this.a.c.a){case 0:return C.e3
case 1:return C.fB
case 2:return C.dD
case 3:return C.fC}},
axr(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
awY(d){this.a.toString
return},
aA(){this.aO()
$.cw.x1$.push(this.ga3V())},
be(d){this.bE(d)
$.cw.x1$.push(this.ga3V())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axr()
return B.bvj(B.b_G(0,B.b4(v.awW(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.q)}}
A.abo.prototype={
bm(d){return A.bMG(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_O.prototype={
hj(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.q)},
hV(d){if(this.B===C.aI)return this.xW(d)
return this.acC(d)},
aJL(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8w(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a8v(d,B.hy())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8v(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aI?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fW(u,null)
break
case 1:q=B.fW(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8w(p)
t=Math.max(t,o.aJL(p))
m=r.aG$}return new A.bcN(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8v(o,B.mm()),m=n.a,l=n.b
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
q=s.b-p.a8w(r==null?B.V(B.a_("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c4(w))):r)/2
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
this.anK()}}
A.bcN.prototype={}
A.avW.prototype={}
A.jJ.prototype={
gbI(){return[this.a,this.b]}}
A.nG.prototype={}
A.ag3.prototype={}
A.ag4.prototype={
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
A.ag5.prototype={}
A.SN.prototype={
l(){var w,v,u
for(w=this.VK$,v=w.length,u=0;u<v;++u)w[u].l()
this.ix()}}
A.Ah.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.dD
case 1:return C.fC
case 2:return C.e3
case 3:return C.fB}},
gaZv(){var w=this.d,v=A.btx(w.d),u=A.bAV(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gahq(){var w=this.d,v=A.bAV(w.a),u=A.btx(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.ger()+v.ger()}},
aVE(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.lp().Om(d,f-e)
w=p.c
v=w!==D.mn
if((!v||w===D.dF)&&p.d instanceof A.nH){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bsN(u,d)
w=new B.iL(t,B.ac(t).i("iL<1>"))
s=w.giD(w).f0(0,new A.aXC(u),x.W).fX(0)}else{r=$.brX()
w=!v||w===D.dF
v=p.d
q=r.aUU(w?v.w:v.z,o,f,e)
v=B.oa(q,new A.aXD(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.k(v).i("t.E"))}w=B.ac(s).i("aa<1,nG>")
w=B.Q(new B.aa(s,new A.aXE(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b4(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mn
u=!v
t=!u||w===D.dF
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dF?C.a5:C.aI
q=B.b([],x.p)
if(w===D.AI||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dF?r:j.gow().c.c
p=!u||w===D.dF?j.gow().c.c:r
o=j.gaZv()
n=!u||w===D.dF?C.aI:C.a5
j.gahq()
m=j.gahq()
l=!u||w===D.dF
k=j.d
l=l?k.f:k.x
u=!u||w===D.dF?k.r:k.y
q.push(B.b4(i,A.bTX(new A.avW(),n,j.aVE(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AJ||w===D.dF)j.gow()
return new B.eF(t,i,i,B.bPt(q,C.m,s,i,C.f,C.P,0,i,i,C.c7),i)}}
A.a02.prototype={
gbI(){return[this.a,this.b]}}
A.a4d.prototype={
gbI(){return[this.a,this.b]}}
A.My.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4f.prototype={
gaaW(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.awq.prototype={}
A.aCJ.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.agp.prototype={}
A.ajr.prototype={}
A.ajs.prototype={}
A.ajz.prototype={}
A.Kp.prototype={
i7(d,e,f){}}
A.vq.prototype={}
A.hi.prototype={
gdJ(){return null},
gaf1(){var w,v=this
B.bw()
B.bw()
B.bw()
w=v instanceof A.Mx
if(w)return!0
return!(v instanceof A.Mu)&&!(v instanceof A.Mt)&&!(v instanceof A.Mv)&&!(v instanceof A.Ms)&&!w&&!(v instanceof A.Mw)}}
A.a4j.prototype={
gdJ(){return this.a.b}}
A.a4k.prototype={
gdJ(){return this.a.b}}
A.a4l.prototype={
gdJ(){return this.a.b}}
A.Mt.prototype={}
A.Mu.prototype={}
A.a4o.prototype={
gdJ(){return this.a.b}}
A.Mw.prototype={}
A.Mx.prototype={
gdJ(){return this.a.b}}
A.a4i.prototype={
gdJ(){return this.a.b}}
A.a4h.prototype={
gdJ(){return this.a.b}}
A.Ms.prototype={
gdJ(){return this.a.b}}
A.a4m.prototype={
gdJ(){return this.a.gdJ()}}
A.a4n.prototype={
gdJ(){return this.a.gdJ()}}
A.Mv.prototype={
gdJ(){return this.a.gdJ()}}
A.FD.prototype={
Yv(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aet(){var w=this,v=null,u=w.ac=B.buq(v,v)
u.ay=new A.aSP(w)
u.ch=new A.aSQ(w)
u.CW=new A.aSR(w)
u.cy=new A.aSS(w)
u.cx=new A.aST(w)
u=w.aE=B.Gs(v,-1,v)
u.B=new A.aSU(w)
u.a4=new A.aSV(w)
u.V=new A.aSW(w)
u=w.bA=B.a6d(v,w.a2,v)
u.p3=new A.aSX(w)
u.p4=new A.aSY(w)
u.RG=new A.aSZ(w)},
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
w.rD(d)}else if(x.gJ.b(d))v.l6(new A.a4n(d))},
gML(d){return new A.aT_(this)},
gMN(d){return new A.aT0(this)},
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
X(){return new A.V4(B.b([],x.r),B.A(x.S,x.I),new A.aIG(B.A(x.y,x.dj)),null,null)}}
A.V4.prototype={
u(d){var w,v=this,u=v.a3X(),t=v.CW
t.toString
t=v.aav(t.av(0,v.ghF().gp(0)))
w=v.aav(u)
v.a.toString
return new A.Kg(new A.a65(t,w,null),u,null)},
aav(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ac(w).i("aa<1,e9>")
w=B.Q(new B.aa(w,new A.bcS(this,d),v),v.i("aw.E"))
return d.aPG(w,this.cy)},
a3X(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uk(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPV(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPk(new A.Eg(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayf(),t.c,t.d))}return r},
ayg(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf1())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bcQ(v))
return}v.J(new A.bcR(v,e))},
nQ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3X(),new A.bcT(w)))}}
A.pC.prototype={
WQ(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4e(B.a0d(d.a.b,j.b,f),j.a)
w=A.bAT(d.at,e.at,f)
v=A.bAW(d.c,e.c,f)
u=A.bAY(d.d,e.d,f)
t=A.bCR(d.e,e.e,f)
s=A.kk(d.ch,e.ch,f,A.c1G(),x.cz)
s.toString
r=A.kk(d.CW,e.CW,f,A.c1F(),x.J)
r.toString
u=A.bu3(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UV(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bu3(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPV(d,e,f,g){return this.UV(null,null,d,e,f,g,null)},
aPk(d){var w=null
return this.UV(w,d,w,w,w,w,w)},
aPG(d,e){var w=null
return this.UV(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e9.prototype={
aqh(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aIF())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
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
aci(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aIE(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPr(d){return this.aci(d,null)},
aPt(d){return this.aci(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NR.prototype={
gbI(){return[this.a]}}
A.a_W.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mt.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kk.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.yb.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aIq.prototype={
L(){return"LabelDirection."+this.b}}
A.a4g.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Eg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a66.prototype={
gbI(){return[4,C.hJ,16,D.xk,0,120,A.c1I(),!1,!1,!1,0,C.A,A.c1H()]}}
A.mS.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q4.prototype={}
A.rl.prototype={
gbI(){return[this.a,this.b,C.cA,C.w,null]}}
A.ti.prototype={
gbI(){return[this.a,this.b]}}
A.G4.prototype={
gbI(){return[this.a]}}
A.NS.prototype={}
A.yW.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.agc.prototype={}
A.agd.prototype={}
A.agr.prototype={}
A.ajt.prototype={}
A.ajw.prototype={}
A.al8.prototype={}
A.al9.prototype={}
A.ala.prototype={}
A.alc.prototype={}
A.ald.prototype={}
A.ale.prototype={}
A.alf.prototype={}
A.apu.prototype={}
A.ar5.prototype={}
A.aIG.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xP
u=new A.z_(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yX(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aIH())}catch(p){return D.xP}v=null
try{v=C.b.qe(w.a,new A.aII())}catch(p){return D.xP}o=v.a
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
if(f<m)m=f}e=new A.yX(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yX.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.alb.prototype={}
A.aIJ.prototype={
i7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaW(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aT())
a3.aOk(new B.G(0,0,u,v))}d.a_z(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aR6(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aR2(a3,q,a4)
d.aR7(a3,q,a4)
d.al6(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dz("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v9(q,i,j,k))}}d.aRe(a3,s,a4)
if(w.gaaW(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRc(a2,a3,v,f,new A.G4(g),a4)}},
aR2(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.btw(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Z2(o,e,u,f)
s=p.aiC(o,e,t,u,f)
r=p.Z4(o,e,t,u,f,!0)
q=p.aiB(o,e,t,u,f)
p.aR5(d,s,p.Z1(o,e,t,u,f,!0),f,e)
p.aR_(d,q,r,f,e)
p.aR3(d,t,e)
p.aR1(d,t,e,f)}},
aR6(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.btw(a6.a),a9=A.btw(a7.a)
if(a8.length!==a9.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ac(m).i("cF<1>")
k=B.Q(new B.cF(m,l),l.i("aw.E"))
j=a3.Z2(a4,a6,n,b3)
i=a3.Z3(a4,a7.aPt(k),k,b3,j)
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
a2=new B.mw(C.dr,C.bg,C.dX,C.eo,C.dM).eo()
m=B.dJ(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v6(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fU(i,a3.r)
w.restore()}},
aR7(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z8(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dF(q.b,w,f)
n.$4(q,p/v*100,e,r).ad_(s,q,new B.n(p,o))}}},
aRe(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h1(b3,new A.aIM())
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
if(f===d)B.V(B.rk(d.a))
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
if(f===d)B.V(B.rk(d.a))
f.ad_(t,j,new B.n(h,g))}}},
Z3(d,e,f,g,h){var w=this.aiD(d,e,f,g,h)
return w},
Z2(d,e,f,g){return this.Z3(d,e,f,g,null)},
aiD(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cD($.al().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dF(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f7(d,a0))
if(e===1)g.aB(new B.cs(d,a0))}else g.aB(new B.cs(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.q,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
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
w=B.bu1(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,t))
w.aB(new B.cs(s.fc(v.h(g,0).a,d,h),s.dF(v.h(g,0).b,d,h)))
w.aB(new B.pb())
return w},
aiC(d,e,f,g,h){return this.Z4(d,e,f,g,h,!1)},
Z1(d,e,f,g,h,i){var w,v,u,t=this
$.al()
w=B.bu1(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,0))
w.aB(new B.cs(t.fc(v.h(g,0).a,d,h),t.dF(v.h(g,0).b,d,h)))
w.aB(new B.pb())
return w},
aiB(d,e,f,g,h){return this.Z1(d,e,f,g,h,!1)},
aR5(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bup(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fU(e,r.r)},
aR_(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bup(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fU(e,r.r)},
aR3(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.NK(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k2:C.dX
u.e=C.eo
u.r=v.gp(0)
u.seT(null)
u.c=f.x
u.r=v.gp(0)
$.lp()
u.z=new B.z4(C.aF,w.c*0.57735+0.5)
d.a.fU(B.bu2(A.azl(e,f.cy),w.b),this.f)},
aR1(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k2:C.dX
q.e=C.eo
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
A.bup(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bRX(t)
d.a.fU(A.azl(e,f.cy),s.f)},
aRc(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bH_(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dz("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lp().Zz(b4,u.b)
s=u.a
r=w.k(0,C.iK)?new B.kf(1):w
q=new B.tf(new B.hK(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.cA,C.w,r,a8,a8,a8,a8,C.bu,a8)
q.afk(120)
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
i=a7.ZA(b3,l,D.xk,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Fr(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bGZ(f)
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
s.c=0}b5.Vw(0,new A.aIK(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bUw(q.r,q.w)
A:{if(D.DE===a5){a6=a3
break A}if(D.DF===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vw(0,new A.aIL(b5,q,new B.n(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z8(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
Wb(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj3(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h1(t,new A.aIN())
return t.length===0?null:t},
aj3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.n(this.fc(q.a,d,h),this.dF(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.ht(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q4(s,f,g,C.b.iq(w,v),v.a,v.b)}else return null}}
A.v9.prototype={}
A.a65.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aIJ()
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
w.a=D.a_D
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
t=new A.aab(this.d,v,u,t,d,C.bo,new B.bq(),B.aI(x.v))
t.bk()
t.Yv(v.cx)
t.aet()
return t},
by(d,e){e.sik(0,this.d)
e.sYg(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.aab.prototype={
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
u.fV.i7(w,new A.a0q(t,v),new A.vq(u.aC,u.i1,u.cV,x.o))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.NS(w.fV.Wb(d,v,new A.vq(w.aC,w.i1,w.cV,x.o)))}}
A.MX.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a0q.prototype={
aOk(d){this.a.a.clipRect(B.dJ(d),$.oW()[1],!0)
return null},
ad7(d,e){d.aN(this.a,e)},
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
w.aB(new B.cs(e.a,e.b))
this.a.fU(A.azl(w,g),f)}}
A.z_.prototype={
gbI(){return[this.a]}}
A.alm.prototype={}
A.a0A.prototype={}
A.b06.prototype={
K8(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.n((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWd(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d3(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aWe(d,e){var w,v
if(d==null)return D.a_O
w=d.b
v=e/2
return d.aPw(w>v?v:w)},
Om(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZf(w)},
aZf(d){if(d<1)return this.aIk(d)
return this.a7A(d)},
aIk(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7A(d*q)/q},
a7A(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
aiS(d){if(d>=1)return 1
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
if(u==null)u=C.iQ
w=e.a?u.w.c3(e):e
v=B.bR(d,C.vk)
v=v==null?null:v.ay
return v===!0?w.c3(C.m5):w},
aiK(d,e,f,g){var w=C.d.ah(g-d,f)
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
if(v!=null){w=v.ar(C.ag,C.iD,v.gdj())
switch(this.ae.a){case 6:return d.c2(new B.at(0,d.b,0,d.d).xI(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xI(w)}}else return new B.F(B.M(0,d.a,d.b),B.M(0,d.c,d.d))},
e7(d,e){var w=this.D$
return w==null?null:w.fL(C.iD,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dI(C.iD,!0)
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
w.h_()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bwm(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yA(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yA(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pG(n.a,n.b,0)
q.qQ(w.a/s.a,w.b/s.b,1,1)
q.fY(-o,-p.b,0,1)
m.cP=q}},
a6v(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.ze(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i3.prototype.gi6.call(s)
t=s.ch.a
return d.z9(r,e,v,u,t instanceof B.q5?t:null)}else s.ks(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tx()
w=s.D
w.toString
if(w&&s.eX!==C.t){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.um?t:null
u.sbh(0,d.o1(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFY(),s.eX,t))}else s.ch.sbh(0,s.a6v(d,e))},
e9(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tx()
return d.JS(new A.aT9(v),e,v.cP)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OP()
else{this.Tx()
w=this.cP
w.toString
e.fW(0,w)}}}
A.a49.prototype={
bm(d){var w=new A.PL(this.e,this.f,B.e6(d),C.t,null,new B.bq(),B.aI(x.v))
w.bk()
w.sc8(null)
return w},
by(d,e){e.st4(this.e)
e.shH(this.f)
e.scC(B.e6(d))
if(C.t!==e.eX){e.eX=C.t
e.bc()
e.cu()}}}
var z=a.updateTypes(["L(q6)","D(ev)","~(w,fy)","L(e9,w)","L(L,q6)","bL(L,th)","pp(L)","w(q4,q4)","~(hi,Km?)","xN(z)","Hz(B,bF)","IV(nZ)","HT(nY)","ve(@)","e9(L)","w5(@)","ai(L,th)","Cc(@)","uB(dE<uB>)","L(ve)","L(w5)","wn(B,bF)","AQ(z)","P<~>()","q6(@)","xl(@)","L(id)","D(fy)","~(w,id)","~(@)","jJ(nG)","c(nG)","jJ(bD<w,L>)","jJ(L)","nG(jJ)","~(hi,NS?)","e9(e9)","DB(dE<aDm>)","yW(@)","lB(Gf<lB>)","ti(w)","uC(ev,L,e9,w)","rl(mS)","D(e9)","w(v9,v9)","L(fy)","P<nZ>(ch<nZ>)","q5?(rB,n)","w(w,w,L)","fy(fy,fy,L)","id(id,id,L)","ms(ms,ms,L)","Ct?(fy,w,id,w)","E(fy)","c(L,th)","ev(ev,ev,L)","D(L)","mN(mN,mN,L)","nd(nd,nd,L)","kF(kF,kF,L)","l4(l4,l4,L)","f(kF)","f(l4)","e9(e9,e9,L)","mt(mt,mt,L)","uC(ev,L,e9,w{size:L?})","D(ev,e9)","L(n,n)","u<ti>(e9,u<w>)","P<nY>(ch<nY>)","u<rl>(u<mS>)","E(mS)","y9(eY<B?>)"])
A.aDi.prototype={
$1(d){var w=B.dx(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q6(J.am(v==null?"":v),A.oS(w.h(0,"revenue_net")),A.oS(w.h(0,"expense_net")),A.oS(w.h(0,"result_net")))},
$S:z+24}
A.aDj.prototype={
$1(d){var w,v,u,t=B.dx(x.f.a(d),x.N,x.z),s=B.ah(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ah(t.h(0,"code"))
v=A.oS(t.h(0,"gross"))
u=B.bn(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.ve(s,r,w,v,u,A.oS(t.h(0,"avg_basket")))},
$S:z+13}
A.aDk.prototype={
$1(d){var w,v=B.dx(x.f.a(d),x.N,x.z),u=B.ah(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bn(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.w5(u,t,w,A.oS(v.h(0,"gross")))},
$S:z+15}
A.aDB.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.Cc(v,u,J.am(t==null?"expense":t),A.tV(w.h(d,"net")),A.tV(w.h(d,"tax")),A.tV(w.h(d,"gross")))},
$S:z+17}
A.bpI.prototype={
$1(d){return new A.uB(d.aq($.c1(),x.A))},
$S:z+18}
A.bpJ.prototype={
$1(d){return new A.DB(d.aq($.bLy(),x.D))},
$S:z+37}
A.brB.prototype={
$1(d){return E.aDl()},
$S:z+39}
A.bpK.prototype={
$1(d){var w=d.aq($.x3(),x.P)
return d.aq($.auf(),x.a).FL(w)},
$S:z+46}
A.bpH.prototype={
$1(d){var w=d.aq($.x3(),x.P)
return d.aq($.auf(),x.a).FH(w)},
$S:z+69}
A.bpG.prototype={
$1(d){return this.aiu(d)},
aiu(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.l(d.aq($.c1(),x.A).hz("finance_balance_kpis",t),$async$$1)
case 3:s=r.dx(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:211}
A.aDh.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.auf(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDg.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.auf(),x.a).Lf(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDz.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bsk()
if(s.e==null)B.V(B.a_(y.b))
s.gcr().cm(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDr.prototype={
$0(){return this.a.J9(this.b,this.c)},
$S:0}
A.aDs.prototype={
$0(){return this.a.B5(this.b,this.c)},
$S:0}
A.aDt.prototype={
$0(){var w=x.z
return B.bg(this.a,!1).ei(B.ep(new A.aDq(),null,w),w)},
$S:0}
A.aDq.prototype={
$1(d){return F.CH},
$S:z+9}
A.aDu.prototype={
$0(){return B.o3(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDv.prototype={
$0(){var w=this
return w.a.B6(w.b,w.c,w.d)},
$S:0}
A.aDy.prototype={
$0(){return D.aqm},
$S:94}
A.aDx.prototype={
$2(d,e){return new A.Hz(B.i(d),null)},
$S:z+10}
A.aDw.prototype={
$1(d){return new A.IV(d,null)},
$S:z+11}
A.aDp.prototype={
$1(d){var w=null,v=this.a,u=$.e_()
v=B.j("Die Finanzauswertung f\xfcr "+u.an(v.a)+" \u2013 "+u.an(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.ls(B.b([B.dF(C.cU,w,w,new A.aDn(u),w,w),B.dT(F.uY,new A.aDo(u),B.dU(C.l,C.h,w,w,w,w,w))],x.p),w,v,F.uZ)},
$S:50}
A.aDn.prototype={
$0(){B.bg(this.a,!1).df(!1)
return null},
$S:0}
A.aDo.prototype={
$0(){B.bg(this.a,!1).df(!0)
return null},
$S:0}
A.bf5.prototype={
$0(){var w=this.a.aJ(0,$.x3().ghO(),x.V),v=E.aDl()
w.wn(0,v)
return v},
$S:0}
A.bf6.prototype={
$0(){var w=this.a.aJ(0,$.x3().ghO(),x.V),v=new B.bb(Date.now(),0,!1),u=new E.lB(B.bJ(B.aV(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.bf7.prototype={
$0(){return this.a.Iy(this.b,this.c)},
$S:0}
A.bf4.prototype={
$2(d,e){return new B.ox(B.U(d).aOS(B.U(d).ax.aPL(C.h,C.l)),e,null)},
$S:995}
A.bkN.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dK(),s=A.NC(!1,C.nI,"Umsatz 7 %",t.an(u.a),w),r=A.NC(!1,C.nI,"Umsatz 19 %",t.an(u.b),w),q=A.NC(!0,D.a9E,"Umsatz netto",t.an(u.c),w),p=A.NC(!1,D.a9D,"Aufwand",t.an(u.d),w),o=u.e,n=t.an(o)
return B.a4U(1.7,B.b([s,r,q,p,A.NC(!0,C.nA,"Ergebnis",n,o<0?C.ad:C.al),A.NC(!1,C.eG,"USt-Saldo",t.an(u.f-u.r),w)],x.p),v,12,12,C.jL,!0)},
$S:99}
A.aIp.prototype={
$0(){return D.aqj},
$S:94}
A.aIo.prototype={
$2(d,e){var w=null
return B.bx(C.ad,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.y(C.h,13,C.k),w,w,w),C.fI,w,C.D,w,3)},
$S:269}
A.aIn.prototype={
$1(d){return new A.HT(d,null)},
$S:z+12}
A.bcE.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dK(),i=j.an(k.c),h=l.w,g=l.d,f=B.ac(g).i("aa<1,L>"),e=f.i("aw.E"),d=B.Q(new B.aa(g,new A.bct(),f),e)
i=A.jA(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.an(r.b)
w=B.Q(new B.aa(g,new A.bcu(),f),e)
d=A.jA(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.an(k.e)
w=B.Q(new B.aa(g,new A.bcv(),f),e)
k=A.jA(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.aa(g,new A.bcw(),f),e)
w=A.jA(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.aa(g,new A.bcx(),f),e)
v=A.jA(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.aa(g,new A.bcy(),f),e)
u=A.jA(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.aa(g,new A.bcz(),f),e)
t=A.jA(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.an(h.d)
s=B.Q(new B.aa(g,new A.bcA(),f),e)
h=A.jA(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.an(l.r.d)
m=B.Q(new B.aa(g,new A.bcB(m),f),e)
m=A.jA(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.an(l)
l=B.Q(new B.aa(g,new A.bcC(l),f),e)
l=A.jA(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.aa(g,new A.bcD(j),f),e)
return B.a4U(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jA(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jL,!0)},
$S:99}
A.bct.prototype={
$1(d){return d.b},
$S:z+0}
A.bcu.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bcv.prototype={
$1(d){return d.d},
$S:z+0}
A.bcw.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcx.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bcy.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bcz.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcA.prototype={
$1(d){return d.d},
$S:z+0}
A.bcB.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bcC.prototype={
$1(d){return this.a},
$S:z+0}
A.bcD.prototype={
$1(d){return this.a},
$S:z+0}
A.bcF.prototype={
$0(){return A.bwj(this.b,1.45,new A.Ta(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bcG.prototype={
$0(){return A.bwj(this.b,1.6,new A.Tl(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.boQ.prototype={
$1(d){var w=this,v=null,u=B.aR(16),t=x.p,s=B.b([B.an(B.b([B.aH(B.j(w.a,v,v,v,B.bY(C.h,18,C.p),v,v,v),1),B.ff(v,v,D.abH,v,v,new A.boP(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.y(C.r,12,C.aD),v,v,v),C.I],t))
s.push(C.v)
s.push(B.ci(new B.mq(w.c,w.d,v),v,17976931348623157e292))
return B.a3v(v,C.n,new B.ag(C.ae,B.ae(s,C.B,C.f,C.P),v),v,v,v,C.fi,C.uJ,v,new B.db(u,C.A),v)},
$S:996}
A.boP.prototype={
$0(){return B.bg(this.a,!1).fb()},
$S:0}
A.bcH.prototype={
$0(){var w=this.a,v=B.b6(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bwj(this.b,2.4,new A.Xr(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.bk4.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bk5.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bk6.prototype={
$1(d){return A.aIE(null,1.4,null,C.ad,0.35,D.afU,D.Dv,null,!1,!1,!1,!1,D.EX,!1,10,D.Yk,!0,C.lh,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+14}
A.b3E.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b3G.prototype={
$2(d,e){var w=null
return B.j(this.a.aJB(d),w,w,w,B.y(C.r,10,C.M),w,w,w)},
$S:z+16}
A.b3H.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.zI
return new B.ag(C.kO,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.y(C.r,9,C.M),w,w,w),w)},
$S:z+5}
A.b3F.prototype={
$1(d){return D.a8c},
$S:z+6}
A.b4r.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4s.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4t.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b4u.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.zI
return new B.ag(C.kO,B.j(this.a[v],w,w,w,B.y(C.h,12,C.p),w,w,w),w)},
$S:z+5}
A.bda.prototype={
$1(d){return d.d},
$S:z+19}
A.bdb.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bm3.prototype={
$1(d){return d.d},
$S:z+20}
A.bm4.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b28.prototype={
$0(){return D.aqr},
$S:94}
A.b27.prototype={
$2(d,e){return new A.wn("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b26.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bx(o,B.ae(B.b([B.j("Noch keine Bilanzdaten erfasst.",o,o,o,B.y(C.h,14,C.M),o,o,o),C.I,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.y(C.r,12.5,C.k),o,o,o),C.v,B.hG(C.Eu,D.aDz,new A.b22(p.b,p.c),o)],x.p),C.B,C.f,C.i),C.ah,o,C.D,o,3)
w=new A.b29(d)
v=C.b.fG(p.a.e.d,0,new A.b23())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.ji(new A.b24(new A.b2a(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ae(B.b([w,C.I,B.an(B.b([B.aH(B.j("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.y(C.r,11,C.k),o,o,o),1),B.ou(D.ac8,D.aCD,new A.b25(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:255}
A.b22.prototype={
$0(){return A.atz(this.a,this.b,null)},
$S:0}
A.b29.prototype={
$1(d){var w=B.bn(J.a3(this.a,d))
return w==null?null:w},
$S:997}
A.b2a.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b6(w,".",",")+" %"}return w},
$S:31}
A.b23.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b24.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jA(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fm,o.$1("liquidity1_pct")),m=A.jA(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fm,o.$1("liquidity2_pct")),l=A.jA(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fm,o.$1("liquidity3_pct"))
o=A.jA(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fm,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b6(w,".",",")+" %"}w=A.jA(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fm,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dK()
v=u.an(v)
return B.a4U(p,B.b([n,m,l,o,w,A.jA(s,s,!1,"Bilanzsumme",!1,"EK "+u.an(t.d),s,s,s,C.fm,v)],x.p),q,12,12,C.jL,!0)},
$S:99}
A.b25.prototype={
$0(){return A.atz(this.a,this.b,this.c)},
$S:0}
A.boO.prototype={
$1(d){return new A.AQ(this.a,new A.boN(this.b),this.c,null)},
$S:z+22}
A.boN.prototype={
$0(){var w=this.a,v=$.byz()
if(w.e==null)B.V(B.a_(y.b))
w.gcr().cm(v)},
$S:0}
A.b1Y.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1Z.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b20.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.l(B.u0(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bb(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b2_(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b2_.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b21.prototype={
$0(){return B.bg(this.a,!1).fb()},
$S:0}
A.b2b.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b2c.prototype={
$1(d){return new A.xl(x.B.a(d),this.a.a.r)},
$S:z+25}
A.awb.prototype={
$1(d){return d.e},
$S:z+26}
A.awc.prototype={
$2(d,e){return d+e},
$S:45}
A.awe.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.awg.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.awh.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.ad7(v.d,v.e)},
$S:0}
A.avV.prototype={
$1(d){return 0},
$S:998}
A.avU.prototype={
$2(d,e){return B.fi(C.bT,this.a.akO(e),C.u,C.bt,null)},
$S:999}
A.aXA.prototype={
$1(d){return d.a},
$S:z+30}
A.aXB.prototype={
$1(d){return d.b},
$S:z+31}
A.aXC.prototype={
$1(d){return new A.jJ(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aXD.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mn||v===D.dF))t=1-t
return new A.jJ(d,t*w.d)},
$S:z+33}
A.aXE.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.lp()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.aiS(Math.abs(s.b-s.c)))
t=""}if(C.c.hK(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nG(d,q.c.b.$2(p,new A.th(u+t,s.e)))},
$S:z+34}
A.aSP.prototype={
$1(d){this.a.l6(new A.a4j(d))},
$S:171}
A.aSQ.prototype={
$1(d){this.a.l6(new A.a4k(d))},
$S:40}
A.aSR.prototype={
$1(d){this.a.l6(new A.a4l(d))},
$S:29}
A.aSS.prototype={
$0(){this.a.l6(D.a1m)},
$S:0}
A.aST.prototype={
$1(d){this.a.l6(new A.Mu())},
$S:42}
A.aSU.prototype={
$1(d){this.a.l6(new A.a4o(d))},
$S:43}
A.aSV.prototype={
$0(){this.a.l6(D.a1n)},
$S:0}
A.aSW.prototype={
$1(d){this.a.l6(new A.Mx(d))},
$S:97}
A.aSX.prototype={
$1(d){this.a.l6(new A.a4i(d))},
$S:170}
A.aSY.prototype={
$1(d){this.a.l6(new A.a4h(d))},
$S:169}
A.aSZ.prototype={
$1(d){return this.a.l6(new A.Ms(d))},
$S:168}
A.aT_.prototype={
$1(d){return this.a.l6(new A.a4m(d))},
$S:61}
A.aT0.prototype={
$1(d){return this.a.l6(new A.Mv(d))},
$S:54}
A.bcS.prototype={
$1(d){var w=this.a.db.h(0,C.b.iq(this.b.ch,d))
return d.aPr(w==null?B.b([],x.t):w)},
$S:z+36}
A.bcQ.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bcR.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h1(w,new A.bcP())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.G4(w))},
$S:0}
A.bcP.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bcT.prototype={
$1(d){return new A.yW(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIF.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.bpw.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bAX(t?A.bw7(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.ti(w,new A.yb(!0,A.bwT(),new A.bpv(v)))},
$S:z+40}
A.bpv.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bPr(A.bw7(d,e,f),w,A.bY9(d,e,f))},
$S:z+41}
A.bpt.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iW(v,v,u==null?D.dk:u,v,v,v,v,v,v,v,v,14,v,v,C.M,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rl(C.d.j(d.b),w)},
$S:z+42}
A.aIH.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aII.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aIM.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aIK.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aIL.prototype={
$0(){this.a.ad7(this.b,this.c)},
$S:0}
A.aIN.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.aw4.prototype={
$1(d){return d.gdq(0)},
$S:z+45}
A.aw5.prototype={
$2(d,e){return d+e},
$S:45}
A.aw8.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iL(v,B.ac(v).i("iL<1>")).au(0,new A.aw9(w,this.a/(u+1),this.c))},
$S:0}
A.aw9.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.aw6.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.aw7.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFO.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1000}
A.azm.prototype={
$1(d){return d},
$S:1001}
A.aT9.prototype={
$2(d,e){return this.a.At(d,e)},
$S:22};(function aliases(){var w=A.Kf.prototype
w.a_z=w.i7
w.al6=w.aR8
w.al7=w.ad0
w=A.SN.prototype
w.anK=w.l
w=A.Kp.prototype
w.a_A=w.i7
w=A.FD.prototype
w.a0j=w.Yv})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c0M","bPo",72)
v(A.SP.prototype,"gaDm","HY",23)
u(A.SQ.prototype,"garw","arx",8)
t(A,"c_A",3,null,["$3"],["bMJ"],49,0)
t(A,"c_B",3,null,["$3"],["bMK"],50,0)
t(A,"c_C",3,null,["$3"],["bML"],51,0)
t(A,"c_E",4,null,["$4"],["c0p"],52,0)
w(A,"c_D","c0o",53)
s(A,"bwn","c0q",54)
t(A,"c_v",3,null,["$3"],["bPs"],55,0)
w(A,"Zu","c2O",56)
w(A,"atB","c0t",6)
t(A,"c_x",3,null,["$3"],["bQd"],57,0)
t(A,"c_z",3,null,["$3"],["bVp"],58,0)
t(A,"c_w",3,null,["$3"],["bQc"],59,0)
t(A,"c_y",3,null,["$3"],["bVo"],60,0)
w(A,"c9V","bQb",61)
w(A,"c9W","bVn",62)
r(A.Xg.prototype,"ga3V","awY",29)
u(A.V4.prototype,"gayf","ayg",35)
t(A,"c1G",3,null,["$3"],["bQI"],63,0)
t(A,"c1F",3,null,["$3"],["bMN"],64,0)
w(A,"c1J","c2P",1)
t(A,"bHm",4,null,["$5$size","$4"],["bFO",function(d,e,f,g){return A.bFO(d,e,f,g,null)}],65,0)
s(A,"bwT","c2N",66)
s(A,"bHn","c_i",67)
s(A,"bHq","c0w",68)
s(A,"bHp","c0s",3)
s(A,"bHo","c0r",3)
w(A,"c1I","bH_",70)
w(A,"c1H","bGZ",71)
u(A.PL.prototype,"gaFY","a6v",47)
t(A,"Zz",3,null,["$3"],["c1E"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.X,[A.a5S,A.afn,A.akv,A.Ir,A.IV,A.afl,A.Hz,A.HT,A.ajP,A.al1,A.TW,A.Xr,A.Ta,A.Tl,A.alv,A.ahS,A.BK,A.ar2,A.wn,A.Kg,A.Ah])
u(B.B,[A.uB,A.DB,A.bc,A.agp,A.agf,A.agh,A.agi,A.ag7,A.ajz,A.agl,A.agj,A.awq,A.ar6,A.awd,A.agg,A.Kp,A.a4V,A.th,A.apw,A.apv,A.ag6,A.ajy,A.ev,A.ajv,A.ajx,A.anL,A.akm,A.arK,A.ajw,A.aje,A.aju,A.avT,A.bcN,A.avW,A.ag3,A.nG,A.ajr,A.ajs,A.vq,A.hi,A.al9,A.alc,A.agc,A.agr,A.agd,A.ajt,A.alf,A.ald,A.ar5,A.apu,A.aIG,A.alb,A.v9,A.a0q,A.alm,A.a0A,A.b06])
u(B.uz,[A.q6,A.ve,A.w5,A.ayL,A.azS,A.nY,A.Cc,A.nZ])
u(B.nL,[A.aDi,A.aDj,A.aDk,A.aDB,A.bpI,A.bpJ,A.brB,A.bpK,A.bpH,A.bpG,A.aDq,A.aDw,A.aDp,A.aIn,A.bct,A.bcu,A.bcv,A.bcw,A.bcx,A.bcy,A.bcz,A.bcA,A.bcB,A.bcC,A.bcD,A.boQ,A.bk6,A.b3F,A.b4r,A.b4s,A.bda,A.bm3,A.b26,A.b29,A.b2a,A.boO,A.b2c,A.awb,A.awe,A.avV,A.aXA,A.aXB,A.aXC,A.aXD,A.aXE,A.aSP,A.aSQ,A.aSR,A.aST,A.aSU,A.aSW,A.aSX,A.aSY,A.aSZ,A.aT_,A.aT0,A.bcS,A.bcT,A.aIF,A.bpw,A.bpv,A.bpt,A.aIH,A.aII,A.aw4,A.azm])
t(A.y9,B.ft)
u(B.xA,[A.aDh,A.aDg,A.aDz,A.aDr,A.aDs,A.aDt,A.aDu,A.aDv,A.aDy,A.aDn,A.aDo,A.bf5,A.bf6,A.bf7,A.aIp,A.bcF,A.bcG,A.boP,A.bcH,A.b28,A.b22,A.b25,A.boN,A.b1Y,A.b1Z,A.b20,A.b2_,A.b21,A.b2b,A.awh,A.aSS,A.aSV,A.bcQ,A.bcR,A.aIK,A.aIL,A.aw8])
u(B.xI,[A.ya,A.amH,A.a5T,A.agb])
u(B.xB,[A.aDx,A.bf4,A.bkN,A.aIo,A.bcE,A.bk4,A.bk5,A.b3E,A.b3G,A.b3H,A.b4t,A.b4u,A.bdb,A.bm4,A.b27,A.b23,A.b24,A.awc,A.awg,A.avU,A.bcP,A.aIM,A.aIN,A.aw5,A.aw9,A.aw6,A.aw7,A.aFO,A.aT9])
u(B.O,[A.AQ,A.QS])
u(B.a1,[A.SP,A.Xg])
u(B.N9,[A.Kl,A.NQ])
u(B.xd,[A.SQ,A.V4])
t(A.a02,A.agp)
t(A.ag2,A.a02)
t(A.a_N,A.ag2)
u(A.a_N,[A.age,A.ala])
t(A.nH,A.age)
u(B.Ul,[A.aw2,A.acP,A.Cs,A.aCJ,A.aIq,A.MX])
t(A.fy,A.agf)
t(A.id,A.agh)
t(A.ms,A.agi)
t(A.a_U,A.ag7)
t(A.My,A.ajz)
u(A.My,[A.agk,A.ale])
t(A.a_Z,A.agk)
t(A.a0_,A.agl)
t(A.Ct,A.agj)
u(A.awq,[A.Km,A.NS])
t(A.acR,A.ar6)
t(A.agm,A.acR)
t(A.a00,A.agm)
u(B.b9,[A.xl,A.yW])
t(A.ue,A.agg)
t(A.Kf,A.Kp)
u(A.Kf,[A.awf,A.aIJ])
u(B.NM,[A.a_X,A.a65])
u(B.K,[A.FD,A.ag4])
u(A.FD,[A.a9Z,A.aab])
t(A.pY,A.apw)
t(A.abn,A.apv)
t(A.p3,A.ag6)
t(A.uD,A.ajy)
t(A.yc,A.ajv)
t(A.pp,A.ajx)
t(A.Pr,A.anL)
t(A.mN,A.akm)
t(A.nd,A.arK)
u(A.pp,[A.akl,A.arJ])
t(A.kF,A.akl)
t(A.l4,A.arJ)
t(A.a4g,A.ajw)
u(A.a4g,[A.akk,A.arI])
t(A.a55,A.akk)
t(A.ade,A.arI)
t(A.Mg,A.aje)
t(A.uC,A.aju)
t(A.Mr,A.uC)
t(A.abo,B.h_)
t(A.ag5,A.ag4)
t(A.SN,A.ag5)
t(A.a_O,A.SN)
t(A.jJ,A.ag3)
t(A.a4d,A.ajr)
t(A.a4f,A.ajs)
u(A.hi,[A.a4j,A.a4k,A.a4l,A.Mt,A.Mu,A.a4o,A.Mw,A.Mx,A.a4i,A.a4h,A.Ms,A.a4m,A.a4n,A.Mv])
t(A.pC,A.ala)
t(A.e9,A.al9)
t(A.NR,A.alc)
t(A.a_W,A.agc)
t(A.mt,A.agr)
t(A.Kk,A.agd)
t(A.yb,A.ajt)
t(A.Eg,A.ale)
t(A.a66,A.alf)
t(A.al8,A.ev)
t(A.mS,A.al8)
t(A.q4,A.mS)
t(A.rl,A.ald)
t(A.ti,A.ar5)
t(A.G4,A.apu)
t(A.yX,A.alb)
t(A.z_,A.alm)
t(A.PL,B.PY)
t(A.a49,B.bL)
w(A.ag7,A.bc)
w(A.age,A.bc)
w(A.agf,A.bc)
w(A.agh,A.bc)
w(A.agi,A.bc)
w(A.agj,A.bc)
w(A.agk,A.bc)
w(A.agl,A.bc)
w(A.agm,A.bc)
w(A.agg,A.bc)
w(A.ag2,A.bc)
w(A.ag6,A.bc)
w(A.aje,A.bc)
w(A.aju,A.bc)
w(A.ajv,A.bc)
w(A.ajx,A.bc)
w(A.ajy,A.bc)
w(A.akl,A.bc)
w(A.akk,A.bc)
w(A.akm,A.bc)
w(A.anL,A.bc)
w(A.apv,A.bc)
w(A.apw,A.bc)
w(A.ar6,A.bc)
w(A.arJ,A.bc)
w(A.arI,A.bc)
w(A.arK,A.bc)
w(A.ag3,A.bc)
v(A.ag4,B.aC)
w(A.ag5,B.e4)
v(A.SN,B.a3e)
w(A.agp,A.bc)
w(A.ajr,A.bc)
w(A.ajs,A.bc)
w(A.ajz,A.bc)
w(A.agc,A.bc)
w(A.agd,A.bc)
w(A.agr,A.bc)
w(A.ajt,A.bc)
w(A.ajw,A.bc)
w(A.al8,A.bc)
w(A.al9,A.bc)
w(A.ala,A.bc)
w(A.alc,A.bc)
w(A.ald,A.bc)
w(A.ale,A.bc)
w(A.alf,A.bc)
w(A.apu,A.bc)
w(A.ar5,A.bc)
w(A.alb,A.bc)
w(A.alm,A.bc)})()
B.bmg(b.typeUniverse,JSON.parse('{"a5S":{"X":[],"c":[]},"DB":{"aDm":[]},"y9":{"ft":["be<~>"],"ft.T":"be<~>"},"IV":{"X":[],"c":[]},"Hz":{"X":[],"c":[]},"ya":{"bl":[],"O":[],"c":[]},"afn":{"X":[],"c":[]},"akv":{"X":[],"c":[]},"amH":{"bl":[],"O":[],"c":[]},"Ir":{"X":[],"c":[]},"afl":{"X":[],"c":[]},"HT":{"X":[],"c":[]},"wn":{"X":[],"c":[]},"AQ":{"O":[],"c":[]},"a5T":{"bl":[],"O":[],"c":[]},"ajP":{"X":[],"c":[]},"al1":{"X":[],"c":[]},"TW":{"X":[],"c":[]},"Xr":{"X":[],"c":[]},"Ta":{"X":[],"c":[]},"Tl":{"X":[],"c":[]},"alv":{"X":[],"c":[]},"ahS":{"X":[],"c":[]},"BK":{"X":[],"c":[]},"ar2":{"X":[],"c":[]},"agb":{"bl":[],"O":[],"c":[]},"SP":{"a1":["AQ"]},"Kl":{"O":[],"c":[]},"SQ":{"a1":["Kl"]},"nH":{"bc":[]},"fy":{"bc":[]},"id":{"bc":[]},"ms":{"bc":[]},"Ct":{"bc":[]},"xl":{"b9":["nH"],"b1":["nH"],"b1.T":"nH","b9.T":"nH"},"a_U":{"bc":[]},"a_Z":{"bc":[]},"a0_":{"bc":[]},"a00":{"bc":[]},"ue":{"bc":[]},"a_X":{"aX":[],"c":[]},"a9Z":{"K":[],"I":[],"jk":[],"aS":[]},"pp":{"bc":[]},"mN":{"bc":[]},"nd":{"bc":[]},"kF":{"bc":[]},"l4":{"bc":[]},"uC":{"bc":[]},"a_N":{"bc":[]},"pY":{"bc":[]},"abn":{"bc":[]},"p3":{"bc":[]},"uD":{"bc":[]},"yc":{"bc":[]},"acR":{"bc":[]},"Pr":{"bc":[]},"a55":{"bc":[]},"ade":{"bc":[]},"Mg":{"bc":[]},"Mr":{"bc":[]},"Kg":{"X":[],"c":[]},"QS":{"O":[],"c":[]},"Xg":{"a1":["QS"]},"jJ":{"bc":[]},"abo":{"h_":[],"aX":[],"c":[]},"a_O":{"e4":["K","hj"],"K":[],"aC":["K","hj"],"I":[],"aS":[],"aC.1":"hj","e4.1":"hj","aC.0":"K"},"Ah":{"X":[],"c":[]},"a02":{"bc":[]},"a4d":{"bc":[]},"My":{"bc":[]},"a4f":{"bc":[]},"a4j":{"hi":[]},"a4k":{"hi":[]},"a4l":{"hi":[]},"Mt":{"hi":[]},"Mu":{"hi":[]},"a4o":{"hi":[]},"Mw":{"hi":[]},"Mx":{"hi":[]},"a4i":{"hi":[]},"a4h":{"hi":[]},"Ms":{"hi":[]},"a4m":{"hi":[]},"a4n":{"hi":[]},"Mv":{"hi":[]},"FD":{"K":[],"I":[],"jk":[],"aS":[]},"NQ":{"O":[],"c":[]},"V4":{"a1":["NQ"]},"pC":{"bc":[]},"e9":{"bc":[]},"mt":{"bc":[]},"mS":{"ev":[],"bc":[]},"q4":{"mS":[],"ev":[],"bc":[]},"rl":{"bc":[]},"ti":{"bc":[]},"G4":{"bc":[]},"yW":{"b9":["pC"],"b1":["pC"],"b1.T":"pC","b9.T":"pC"},"NR":{"bc":[]},"a_W":{"bc":[]},"Kk":{"bc":[]},"yb":{"bc":[]},"a4g":{"bc":[]},"Eg":{"bc":[]},"a66":{"bc":[]},"yX":{"bc":[]},"a65":{"aX":[],"c":[]},"aab":{"K":[],"I":[],"jk":[],"aS":[]},"z_":{"bc":[]},"PL":{"K":[],"bu":["K"],"I":[],"aS":[]},"a49":{"bL":[],"aX":[],"c":[]}}'))
B.bFi(b.typeUniverse,JSON.parse('{"Kf":1,"My":1,"Kp":1,"FD":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.av
return{_:w("Cc"),e:w("be<nY>"),aN:w("be<nZ>"),fM:w("be<a0<f,@>?>"),b:w("be<~>"),W:w("jJ"),B:w("nH"),dB:w("fy"),T:w("ue"),fj:w("id"),G:w("ms"),J:w("mt"),k:w("at"),cX:w("a0A<L>"),dO:w("um"),R:w("aj<f,@>"),v:w("hS"),bz:w("lw<bb>"),f0:w("nQ"),E:w("bc"),F:w("y9"),X:w("nY"),P:w("lB"),D:w("uB"),a:w("aDm"),d:w("nZ"),cw:w("ev"),L:w("hj"),m:w("dh<w,E>"),cm:w("kF"),dv:w("mN"),g:w("C<nG>"),O:w("C<fy>"),Y:w("C<id>"),C:w("C<bth>"),U:w("C<ev>"),K:w("C<a4V>"),u:w("C<e9>"),bC:w("C<v9>"),aA:w("C<u<ev>>"),r:w("C<G4>"),s:w("C<f>"),eg:w("C<tf>"),df:w("C<q4>"),p:w("C<c>"),n:w("C<L>"),t:w("C<w>"),eF:w("bf<a1<O>>"),Z:w("mS"),cz:w("e9"),hf:w("pC"),dj:w("yX"),fT:w("rl"),c_:w("ij<oL<be<~>>>"),x:w("z_<fy>"),y:w("z_<e9>"),I:w("u<w>"),ef:w("ve"),c:w("a0<f,@>"),f:w("a0<@,@>"),gj:w("aa<L,L>"),w:w("jW"),aU:w("B"),Q:w("vq<nH>"),o:w("vq<pC>"),eo:w("pO"),gJ:w("pP"),V:w("n6<lB>"),N:w("f"),A:w("n8"),bO:w("bH"),er:w("tf"),j:w("w5"),dw:w("q4"),bY:w("ti"),cZ:w("q6"),gc:w("kd"),es:w("l4"),bN:w("nd"),l:w("c"),q:w("wH"),g4:w("iw<L>"),cJ:w("D"),i:w("L"),z:w("@"),S:w("w"),bn:w("xl?"),f3:w("yW?"),M:w("u<@>?"),h:w("a0<f,@>?"),fF:w("a0<@,@>?"),cK:w("B?"),aD:w("kd?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AB=new B.ny(C.l,B.av("ny<E>"))
D.AI=new A.Cs(0,"left")
D.mn=new A.Cs(1,"top")
D.AJ=new A.Cs(2,"right")
D.dF=new A.Cs(3,"bottom")
D.aue=new A.pY(!1,A.bwn(),22,null)
D.ki=new A.p3(16,null,D.aue,!0)
D.a8d=new A.pp(C.C,null,2,null)
D.vO=new A.Kk(!1,D.a8d,A.c1J(),!0)
D.a_u=new A.aw2(3,"spaceEvenly")
D.a_D=new B.xp(6,"dstIn")
D.XF=new B.aW(3,3)
D.AN=new B.d3(D.XF,D.XF,C.a0,C.a0)
D.a_O=new B.ba(C.C,0,C.S,-1)
D.Bm=new A.a4f()
D.a1m=new A.Mt()
D.a1n=new A.Mw()
D.aLa=new A.abn()
D.akt=w([],B.av("C<kF>"))
D.aku=w([],B.av("C<l4>"))
D.Dq=new A.Mg(D.akt,D.aku,!0)
D.a7V=new B.e7("Zeitraum",!1,null)
D.a8_=new B.e7("Konten (SKR 03)",!1,null)
D.xk=new A.aCJ(0,"center")
D.aLm=new A.yb(!0,A.bwT(),A.bHm())
D.Dv=new A.yb(!1,A.bwT(),A.bHm())
D.Dw=new A.yc(!1,!0,null,A.atB(),A.Zu(),!0,null,A.atB(),A.Zu())
D.aLn=new A.yc(!0,!0,null,A.atB(),A.Zu(),!0,null,A.atB(),A.Zu())
D.a3F=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3r=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3O=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3J=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3c=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3b=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a48=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3y=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4b=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a45=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aoq=new B.dh([50,D.a3F,100,D.a3r,200,D.a3O,300,D.a3J,400,D.a3c,500,D.a3b,600,D.a48,700,D.a3y,800,D.a4b,900,D.a45],x.m)
D.dk=new B.rt(D.aoq,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.agP=w([8,4],x.t)
D.a8b=new A.pp(D.dk,null,0.4,D.agP)
D.a8c=new A.pp(C.ak,null,0.5,null)
D.fK=new A.ev(0/0,0/0)
D.aug=new A.pY(!0,A.bwn(),44,null)
D.mo=new A.p3(16,null,D.aug,!0)
D.auf=new A.pY(!0,A.bwn(),30,null)
D.mp=new A.p3(16,null,D.auf,!0)
D.a8e=new A.uD(!1,D.mo,D.mp,D.mo,D.mp)
D.aLo=new A.uD(!0,D.mo,D.mp,D.mo,D.mp)
D.DE=new A.MX(0,"left")
D.a8R=new A.MX(1,"center")
D.DF=new A.MX(2,"right")
D.a8W=new B.a8(57495,"MaterialIcons",null,!1)
D.a9A=new B.a8(58927,"MaterialIcons",null,!1)
D.a9D=new B.a8(59005,"MaterialIcons",null,!0)
D.a9E=new B.a8(59007,"MaterialIcons",null,!0)
D.a9F=new B.a8(59011,"MaterialIcons",null,!1)
D.aaz=new B.a8(62589,"MaterialIcons",null,!1)
D.a9S=new B.a8(61349,"MaterialIcons",null,!1)
D.abk=new B.aO(D.a9S,20,C.h,null,null)
D.a9Z=new B.a8(61487,"MaterialIcons",null,!1)
D.abm=new B.aO(D.a9Z,18,null,null,null)
D.abH=new B.aO(C.j6,null,C.h,null,null)
D.abI=new B.aO(C.nB,null,C.r,null,null)
D.ac8=new B.aO(C.nE,16,null,null,null)
D.a96=new B.a8(57912,"MaterialIcons",null,!1)
D.acf=new B.aO(D.a96,null,C.ad,null,null)
D.aer=new A.a5T(null)
D.aLt=new A.aIq(0,"horizontal")
D.xP=new A.yX(0,0,0,0,!1)
D.EX=new A.NR(0.5)
D.Bq=new A.a66()
D.aev=new A.Eg(D.Bq,A.bHq(),10,A.bHn(),!0,A.bHp(),A.bHo(),!1,null,null,null)
D.aLv=new A.Eg(D.Bq,A.bHq(),10,A.bHn(),!0,A.bHp(),A.bHo(),!0,null,null,null)
D.afU=w([4,3],x.t)
D.asq=new B.aB("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.asg=new B.aB("receivables","Forderungen (kurzfristig)")
D.as3=new B.aB("inventory_value","Vorr\xe4te (Warenbestand)")
D.as1=new B.aB("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.arO=new B.aB("fixed_assets","Anlageverm\xf6gen")
D.arW=new B.aB("current_liabilities","Kurzfristige Verbindlichkeiten")
D.asn=new B.aB("long_term_liabilities","Langfristige Verbindlichkeiten")
D.asf=new B.aB("equity","Eigenkapital")
D.Hb=w([D.asq,D.asg,D.as3,D.as1,D.arO,D.arW,D.asn,D.asf],B.av("C<+(f,f)>"))
D.aLz=w([],x.g)
D.akf=w([],x.O)
D.akg=w([],x.Y)
D.akh=w([],B.av("C<ms>"))
D.aki=w([],B.av("C<mt>"))
D.aLA=w([],x.U)
D.aLB=w([],x.u)
D.akj=w([],x.r)
D.ap1={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Ti={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yt=new B.aj(D.Ti,[0,0,0,0,0,0,0,C.cj],B.av("aj<f,B>"))
D.ap_={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aol=new B.aj(D.ap_,[0,0,0,0],B.av("aj<f,w>"))
D.apf={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.anI=new B.aj(D.apf,[0,0,0,0,null,null,null,null],B.av("aj<f,w?>"))
D.anE=new B.aj(D.ap1,[D.yt,D.yt,D.yt,C.cj,C.cj,C.cj,D.aol,D.anI],x.R)
D.anV=new B.aj(D.Ti,[0,0,0,0,0,0,0,C.cy],x.R)
D.aoZ={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aom=new B.aj(D.aoZ,[0,0,0,0,0,0,0,C.cy],x.R)
D.a4g=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4o=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3f=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3B=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3L=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4C=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a32=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3D=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3N=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a46=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aor=new B.dh([50,D.a4g,100,D.a4o,200,D.a3f,300,D.a3B,400,D.a3L,500,D.a4C,600,D.a32,700,D.a3D,800,D.a3N,900,D.a46],x.m)
D.T7=new B.rt(D.aor,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7k=new B.ak(32,32,32,32)
D.aqj=new B.ag(D.a7k,C.bx,null)
D.a7m=new B.ak(48,48,48,48)
D.aqm=new B.ag(D.a7m,C.bx,null)
D.aqr=new B.ag(C.ae,C.bx,null)
D.akv=w([],B.av("C<mN>"))
D.akw=w([],B.av("C<nd>"))
D.XG=new A.Pr(D.akv,D.akw)
D.ata=new B.fK("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.atc=new B.fK("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ate=new B.fK("Automaten-Business","Umsatz je Automat",null,null)
D.atf=new B.fK("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ath=new B.fK("Top","Meistverkaufte Produkte",null,null)
D.atk=new B.fK("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.atl=new B.fK("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yk=new B.t0(C.G,C.q,0)
D.aDh=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.avS=new B.ed(D.aDh,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.u,null)
D.aCN=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.avT=new B.ed(D.aCN,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.u,null)
D.aLK=new B.R(!0,C.C,null,null,null,null,14,C.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCD=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aDz=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zx=new A.acP(0,"auto")
D.aE9=new A.acP(1,"top")
D.aIn=new A.wn("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aIo=new A.wn("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cak","bLy",()=>B.jp(new A.bpI(),x.D))
w($,"cal","auf",()=>B.jp(new A.bpJ(),x.a))
w($,"cbi","x3",()=>B.bv6(new A.brB(),x.P))
w($,"cam","bsk",()=>C.aJ.$1$1(new A.bpK(),x.d))
w($,"caj","bLx",()=>C.aJ.$1$1(new A.bpH(),x.X))
w($,"cai","byz",()=>C.aJ.$1$1(new A.bpG(),x.h))
w($,"cah","bsj",()=>B.aYs(A.c0M(),x.F,x.b))
w($,"c3z","brX",()=>new A.avT())
v($,"c6O","lp",()=>new A.b06())})()};
(a=>{a["xoaXltV4o6tnRn41e3upWM4bTYg="]=a.current})($__dart_deferred_initializers__);