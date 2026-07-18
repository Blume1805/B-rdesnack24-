((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
N9(d,e,f,g,h){return new A.a5b(f,g,d,h,e,null)},
a5b:function a5b(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
ur:function ur(d){this.a=d},
Dj:function Dj(d){this.a=d},
bMV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=J.Y(d),e=y.fF.a(f.h(d,"period"))
if(e==null)e=C.So
x=y.f
w=y.N
v=y.z
u=A.aCE(B.eq(x.a(f.h(d,"current")),w,v))
t=A.aCE(B.eq(x.a(f.h(d,"prior_year")),w,v))
s=A.aCE(B.eq(x.a(f.h(d,"prior_period")),w,v))
r=y.M
q=r.a(f.h(d,"trend"))
if(q==null)q=C.cB
q=J.d3(q,new A.aCp(),y.cZ)
q=B.P(q,q.$ti.i("au.E"))
p=r.a(f.h(d,"machines"))
if(p==null)p=C.cB
p=J.d3(p,new A.aCq(),y.ef)
p=B.P(p,p.$ti.i("au.E"))
r=r.a(f.h(d,"top_products"))
if(r==null)r=C.cB
r=J.d3(r,new A.aCr(),y.fB)
r=B.P(r,r.$ti.i("au.E"))
o=B.eq(x.a(f.h(d,"customer")),w,v)
n=B.bS(o.h(0,"purchases_count"))
n=n==null?null:C.d.a4(n)
if(n==null)n=0
m=A.oA(o.h(0,"app_gross"))
l=B.bS(o.h(0,"active_customers"))
l=l==null?null:C.d.a4(l)
if(l==null)l=0
o=A.oA(o.h(0,"avg_basket"))
v=B.eq(x.a(f.h(d,"derived")),w,v)
w=A.oA(v.h(0,"gross_margin_pct"))
f=A.oA(v.h(0,"net_margin_pct"))
x=A.oA(v.h(0,"ebitda_margin_pct"))
k=A.oA(v.h(0,"cashflow_operating"))
j=A.bmB(v.h(0,"revenue_growth_yoy_pct"))
i=A.bmB(v.h(0,"revenue_growth_mom_pct"))
h=A.bmB(v.h(0,"result_growth_yoy_pct"))
v=A.bmB(v.h(0,"result_growth_mom_pct"))
g=B.bS(J.a5(e,"days"))
g=g==null?null:C.d.a4(g)
if(g==null)g=1
return new A.nI(u,t,s,q,p,r,new A.axS(n,m,l,o),new A.ayZ(w,f,x,k,j,i,h,v),g)},
oA(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kK(J.an(d))
return x==null?0:x},
bmB(d){if(d==null)return null
if(typeof d=="number")return d
return B.kK(J.an(d))},
pR:function pR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v6:function v6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
vZ:function vZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axS:function axS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayZ:function ayZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nI:function nI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCp:function aCp(){},
aCq:function aCq(){},
aCr:function aCr(){},
aCE(d){var x=J.Y(d),w=A.tM(x.h(d,"revenue_net_7")),v=A.tM(x.h(d,"revenue_net_19")),u=A.tM(x.h(d,"revenue_net")),t=A.tM(x.h(d,"expense_net")),s=A.tM(x.h(d,"result_net")),r=A.tM(x.h(d,"vat_collected")),q=A.tM(x.h(d,"vat_paid"))
x=y.M.a(x.h(d,"accounts"))
if(x==null)x=C.cB
x=J.d3(x,new A.aCF(),y._)
x=B.P(x,x.$ti.i("au.E"))
return new A.nJ(w,v,u,t,s,r,q,x)},
tM(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kK(J.an(d))
return x==null?0:x},
BW:function BW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nJ:function nJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aCF:function aCF(){},
bMU(d){return new A.xZ(d,new B.id(y.c_),C.du)},
bnm:function bnm(){},
bnn:function bnn(){},
bp8:function bp8(){},
bno:function bno(){},
bnl:function bnl(){},
xZ:function xZ(d,e,f){this.r=d
this.a=e
this.f=f},
aCo:function aCo(d,e,f){this.a=d
this.b=e
this.c=f},
aCn:function aCn(d,e,f){this.a=d
this.b=e
this.c=f},
bMW(){return new A.y_(null)},
b9x(d,e,f,g,h){return new A.ajK(e,h,g,f,d,null)},
y_:function y_(d){this.a=d},
aCD:function aCD(d){this.a=d},
aCw:function aCw(d,e,f){this.a=d
this.b=e
this.c=f},
aCx:function aCx(d,e,f){this.a=d
this.b=e
this.c=f},
aCy:function aCy(d){this.a=d},
aCz:function aCz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCC:function aCC(){},
aCB:function aCB(){},
aCA:function aCA(){},
aCv:function aCv(d,e){this.a=d
this.b=e},
aCt:function aCt(d){this.a=d},
aCu:function aCu(d){this.a=d},
aeK:function aeK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ajK:function ajK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
alU:function alU(d,e){this.e=d
this.a=e},
bd9:function bd9(d){this.a=d},
bda:function bda(d){this.a=d},
bdb:function bdb(d,e,f){this.a=d
this.b=e
this.c=f},
bd8:function bd8(){},
I1:function I1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ix:function Ix(d,e){this.c=d
this.a=e},
bix:function bix(d){this.a=d},
aeI:function aeI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
H9:function H9(d,e){this.c=d
this.a=e},
tt(d,e,f,g,h,i,j,k,l,m,n){return new A.akf(g,n,i,e,d,m,f,k,l,j,null)},
a5c:function a5c(d){this.a=d},
aHr:function aHr(){},
aHq:function aHq(){},
aHp:function aHp(){},
Ht:function Ht(d,e){this.c=d
this.a=e},
baN:function baN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baD:function baD(){},
baE:function baE(){},
baF:function baF(){},
baG:function baG(){},
baH:function baH(){},
baI:function baI(){},
baJ:function baJ(){},
baK:function baK(){},
baL:function baL(d){this.a=d},
baM:function baM(d){this.a=d},
aj4:function aj4(d){this.a=d},
akf:function akf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Tm:function Tm(d,e,f){this.c=d
this.d=e
this.a=f},
ap2:function ap2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi0:function bi0(){},
bi1:function bi1(){},
bi2:function bi2(d){this.a=d},
ag7:function ag7(d,e){this.c=d
this.a=e},
b26:function b26(){},
b28:function b28(d){this.a=d},
b29:function b29(d){this.a=d},
b27:function b27(){},
ago:function ago(d,e){this.c=d
this.a=e},
b2S:function b2S(){},
b2T:function b2T(){},
b2U:function b2U(){},
b2V:function b2V(d){this.a=d},
akJ:function akJ(d,e){this.c=d
this.a=e},
bbg:function bbg(){},
bbh:function bbh(){},
aha:function aha(d,e){this.c=d
this.a=e},
Il:function Il(d,e,f){this.c=d
this.d=e
this.a=f},
aqe:function aqe(d,e){this.c=d
this.a=e},
bjO:function bjO(){},
bjP:function bjP(){},
TL:function TL(d,e){this.c=d
this.a=e},
b8:function b8(){},
bx6(d){return new A.JV(d,C.ao,C.dl,null,null)},
JV:function JV(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Sl:function Sl(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fo$=f
_.cR$=g
_.c=_.a=null},
b0N:function b0N(d,e){this.a=d
this.b=e},
b0O:function b0O(d){this.a=d},
avb(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3){var x,w,v,u,t,s=null,r=f==null?D.aii:f,q=l==null?16:l,p=d==null?D.ZQ:d,o=g==null,n=o?A.bqp(s,s,s,s,s,s,s,s):g,m=a2==null?D.X5:a2
o=o?A.bqp(s,s,s,s,s,s,s,s):g
x=j==null?D.D0:j
w=a0==null?0/0:a0
v=a1==null?0/0:a1
u=h==null?0:h
t=e==null?C.D:e
return new A.nr(r,q,p,n,k,a3,m,0,1,0,v,w,u,D.B0,t,x,i,o)},
avi(d,e,f,g,h){var x=d==null?D.aij:d,w=e==null?2:e,v=g==null?C.l5:g
return new A.fs(h,f===!0,x,w,v)},
bKe(d,e,f){var x=d.a
x=C.d.b5(x+(e.a-x)*f)
return A.avi(A.kd(d.c,e.c,f,A.bY_(),y.fj),B.aa(d.d,e.d,f),!1,A.kd(d.e,e.e,f,A.YU(),y.S),x)},
a_h(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s=null,r=i==null?0:i
if(h==null)x=D.Sw
else x=h
w=m==null
v=w?8:m
u=$.lg()
t=u.aVF(f,w?8:m)
u=u.aVG(g,w?8:m)
w=d==null?A.bx4(s,s,s,s,s):d
return new A.i7(r,l,x,j,v,t,e,u,w,k==null?D.aik:k)},
bKf(d,e,f){var x,w,v,u,t=B.X(d.c,e.c,f),s=B.aa(d.e,e.e,f),r=B.ml(d.f,e.f,f),q=A.kd(d.r,e.r,f,A.YU(),y.S),p=B.bT(d.w,e.w,f),o=B.aa(d.a,e.a,f),n=B.aa(d.b,e.b,f)
n.toString
x=d.x
w=e.x
v=B.aa(x.b,w.b,f)
u=B.aa(x.c,w.c,f)
w=B.X(x.d,w.d,f)
return A.a_h(A.bx4(w,v,null,!1,u),q,r,p,t,o,null,A.kd(d.y,e.y,f,A.bY0(),y.G),n,s)},
bKg(d,e,f){var x,w,v=B.aa(d.a,e.a,f)
v.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
w.toString
return new A.mj(v,x,w,B.bT(d.d,e.d,f))},
bx4(d,e,f,g,h){var x,w=e==null?0:e,v=h==null?0:h
if(d==null)x=D.da
else x=d
return new A.a_d(g===!0,w,v,x,f)},
bqp(d,e,f,g,h,i,j,k){var x,w
if(k==null)x=new A.a_j(4,C.hD,16,D.x3,0,120,A.bY2(),!1,!1,D.YU,0,C.A,A.bY1())
else x=k
w=j==null?C.kE:j
return new A.a_i(x,w,d===!0,f!==!1,e!==!1,i,h,g)},
bYL(d,e,f,g){var x=null,w=B.iS(x,x,f.c,x,x,x,x,x,x,x,x,14,x,x,C.Q,x,x,!0,x,x,x,x,x,x,x,x)
return new A.Cc(C.d.j(f.b),w)},
bYK(d){return A.axi(D.da,15)},
nr:function nr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ava:function ava(d,e){this.a=d
this.b=e},
fs:function fs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avj:function avj(){},
avk:function avk(){},
i7:function i7(d,e,f,g,h,i,j,k,l,m){var _=this
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
mj:function mj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_d:function a_d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_i:function a_i(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acb:function acb(d,e){this.a=d
this.b=e},
a_j:function a_j(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cc:function Cc(d,e){this.a=d
this.b=e},
JW:function JW(d){this.a=d},
a_k:function a_k(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xc:function xc(d,e){this.a=d
this.b=e},
afu:function afu(){},
afy:function afy(){},
afz:function afz(){},
afB:function afB(){},
afC:function afC(){},
afD:function afD(){},
afE:function afE(){},
afF:function afF(){},
afG:function afG(){},
avl:function avl(d){this.a=d},
avm:function avm(){},
u4:function u4(d,e,f){this.a=d
this.b=e
this.c=f},
afA:function afA(){},
avn:function avn(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avo:function avo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avp:function avp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4d:function a4d(d){this.b=d},
a_g:function a_g(d,e,f){this.d=d
this.e=e
this.a=f},
a9j:function a9j(d,e,f,g,h,i,j,k){var _=this
_.aA=d
_.hW=e
_.cV=f
_.fP=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bz=_.aC=_.ad=_.am=$
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
bYM(d,e){var x=null
return new A.Qp(e.w,B.m(e.r,x,x,x,x,x,x,x),x)},
av4(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=d.c
w=e.c
v=B.aa(x.c,w.c,f)
v.toString
return new A.oO(u,e.b,new A.pI(w.a,w.b,v,B.aa(x.d,w.d,f)),!0)},
byt(d,e,f){var x=A.av4(d.b,e.b,f),w=A.av4(d.d,e.d,f),v=A.av4(d.e,e.e,f)
return new A.ut(e.a,x,A.av4(d.c,e.c,f),w,v)},
bMY(d,e,f){var x,w
if(d.k(0,D.fB))return e
if(e.k(0,D.fB))return d
x=B.aa(d.a,e.a,f)
x.toString
w=B.aa(d.b,e.b,f)
w.toString
return new A.en(x,w)},
byr(d,e,f){return new A.y1(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c08(d){return!0},
bYP(d){return D.a7e},
bys(d,e,f,g){var x
if(d==null)x=f==null?C.B:null
else x=d
return new A.pb(x,f,g,e)},
bAp(d,e,f){var x,w=A.kd(d.a,e.a,f,A.bXW(),y.dv)
w.toString
x=A.kd(d.b,e.b,f,A.bXY(),y.bN)
x.toString
return new A.OZ(w,x)},
bNJ(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qU(d.d,e.d,f)
if(w==null)w=v==null?C.k:null
return new A.mB(u,x,w,v)},
bSR(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qU(d.d,e.d,f)
if(w==null)w=v==null?C.k:null
return new A.mY(u,x,w,v)},
bNI(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p5(x.b,w.b,f)
v.toString
u=B.cn(x.c,w.c,f)
u=A.bNG(B.bqf(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qU(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.kd(d.d,e.d,f,A.YU(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kw(s,e.f,e.r,u,e.x,v,w,x,t)},
bSQ(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p5(x.b,w.b,f)
v.toString
u=B.cn(x.c,w.c,f)
u=A.bSO(B.bqf(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qU(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.kd(d.d,e.d,f,A.YU(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kY(s,e.f,e.r,u,e.x,v,w,x,t)},
bNG(d,e,f,g,h,i){return new A.a4o(f,!1,g,i,d,e)},
bNH(d){return C.d.an(d.e,1)},
bSO(d,e,f,g,h,i){return new A.acB(f,!1,g,i,d,e)},
bSP(d){return C.d.an(d.e,1)},
byo(d,e,f){var x,w=A.kd(d.a,e.a,f,A.bXV(),y.cm)
w.toString
x=A.kd(d.b,e.b,f,A.bXX(),y.es)
x.toString
return new A.LP(w,x,!0)},
bMX(d,e,f){return new A.M_(d,e==null?4:e,f)},
a_6:function a_6(){},
Cb:function Cb(d,e){this.a=d
this.b=e},
t6:function t6(d,e){this.r=d
this.w=e},
pI:function pI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaI:function aaI(){},
oO:function oO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ut:function ut(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
en:function en(d,e){this.a=d
this.b=e},
y1:function y1(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pb:function pb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acd:function acd(){},
OZ:function OZ(d,e){this.a=d
this.b=e},
mB:function mB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mY:function mY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kw:function kw(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
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
a4o:function a4o(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acB:function acB(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
LP:function LP(d,e,f){this.a=d
this.b=e
this.c=f},
us:function us(){},
M_:function M_(d,e,f){this.a=d
this.b=e
this.c=f},
afp:function afp(){},
aft:function aft(){},
aiu:function aiu(){},
aiK:function aiK(){},
aiL:function aiL(){},
aiN:function aiN(){},
aiO:function aiO(){},
ajA:function ajA(){},
ajz:function ajz(){},
ajB:function ajB(){},
amX:function amX(){},
aoH:function aoH(){},
aoI:function aoI(){},
aqi:function aqi(){},
aqV:function aqV(){},
aqU:function aqU(){},
aqW:function aqW(){},
av0:function av0(){},
JP:function JP(){},
JQ:function JQ(d,e,f){this.c=d
this.d=e
this.a=f},
av2:function av2(d){this.a=d},
av1:function av1(d){this.a=d},
Qp:function Qp(d,e,f){this.c=d
this.e=e
this.a=f},
WD:function WD(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bRo(d,e,f){var x=B.ab(f),w=x.i("a9<1,jC>")
w=B.P(new B.a9(f,new A.aWt(),w),w.i("au.E"))
x=x.i("a9<1,c>")
x=B.P(new B.a9(f,new A.aWu(),x),x.i("au.E"))
return new A.aaJ(e,d,w,x,null)},
bKb(d,e,f){var x,w=null,v=B.aG(y.dO),u=J.a52(4,y.er)
for(x=0;x<4;++x)u[x]=new B.t4(w,C.aw,C.t,new B.k8(1),w,w,w,w,C.bw,w)
v=new A.a_7(f,d,e,v,u,!0,0,w,w,new B.bl(),B.aG(y.v))
v.bj()
return v},
aaJ:function aaJ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWt:function aWt(){},
aWu:function aWu(){},
a_7:function a_7(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.Vy$=h
_.aRo$=i
_.dj$=j
_.ag$=k
_.dL$=l
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
baT:function baT(d,e){this.a=d
this.b=e},
av3:function av3(){},
jC:function jC(d,e){this.a=d
this.b=e},
nq:function nq(d,e){this.a=d
this.b=e},
afq:function afq(){},
afr:function afr(){},
afs:function afs(){},
Sj:function Sj(){},
A2:function A2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWv:function aWv(d){this.a=d},
aWw:function aWw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWx:function aWx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3y(d,e){var x=d==null?B.dw(C.B,1):d
return new A.a3x(e!==!1,x)},
a_m:function a_m(){},
a3x:function a3x(d,e){this.a=d
this.b=e},
M6:function M6(){},
a3z:function a3z(){},
avy:function avy(){},
aBQ:function aBQ(d,e){this.a=d
this.b=e},
afJ:function afJ(){},
aiH:function aiH(){},
aiI:function aiI(){},
aiP:function aiP(){},
JZ:function JZ(){},
vi:function vi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
ha:function ha(){},
a3D:function a3D(d){this.a=d},
a3E:function a3E(d){this.a=d},
a3F:function a3F(d){this.a=d},
M1:function M1(){},
M2:function M2(){},
a3I:function a3I(d){this.a=d},
M4:function M4(){},
M5:function M5(d){this.a=d},
a3C:function a3C(d){this.a=d},
a3B:function a3B(d){this.a=d},
M0:function M0(d){this.a=d},
a3G:function a3G(d){this.a=d},
a3H:function a3H(d){this.a=d},
M3:function M3(d){this.a=d},
Fh:function Fh(){},
aRN:function aRN(d){this.a=d},
aRO:function aRO(d){this.a=d},
aRP:function aRP(d){this.a=d},
aRQ:function aRQ(d){this.a=d},
aRR:function aRR(d){this.a=d},
aRS:function aRS(d){this.a=d},
aRT:function aRT(d){this.a=d},
aRU:function aRU(d){this.a=d},
aRV:function aRV(d){this.a=d},
aRW:function aRW(d){this.a=d},
aRX:function aRX(d){this.a=d},
aRY:function aRY(d){this.a=d},
aRZ:function aRZ(d){this.a=d},
Nn:function Nn(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Uv:function Uv(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fo$=g
_.cR$=h
_.c=_.a=null},
baY:function baY(d,e){this.a=d
this.b=e},
baW:function baW(d){this.a=d},
baX:function baX(d,e){this.a=d
this.b=e},
baV:function baV(){},
baZ:function baZ(d){this.a=d},
brH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,a0,a1,a2){var x=p==null?0/0:p,w=n==null?0/0:n,v=q==null?0/0:q,u=o==null?0/0:o,t=e==null?0:e,s=f==null?0:f,r=d==null?C.D:d
return new A.pm(l,g,m,a1,k,a2,a0,x,w,t,v,u,s,i,r,j,h,m)},
aHG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0){var x,w,v=null
if(g==null)x=k==null?D.Sw:v
else x=g
w=f==null?A.av9(!1,v,0,v,!1,D.vv):f
x=new A.e_(a0,!0,x,k,e,l,h,!1,r,n,!1,w,d==null?A.av9(!1,v,0,v,!1,D.vv):d,j,u,i,s,!1,p)
x.apV(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,u,a0)
return x},
bOd(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=B.aa(d.x,e.x,f)
n.toString
x=A.bx5(d.ay,e.ay,f)
w=A.bx5(d.ch,e.ch,f)
v=B.aa(d.as,e.as,f)
v.toString
u=e.CW
t=A.kd(d.cy,e.cy,f,A.YU(),y.S)
s=B.X(d.r,e.r,f)
r=B.qU(d.w,e.w,f)
q=A.kd(d.a,e.a,f,A.bXU(),y.cw)
q.toString
p=B.bAT(d.db,e.db,f)
p.toString
o=B.aa(d.dy.a,e.dy.a,f)
o.toString
return A.aHG(w,n,x,s,e.z,t,new A.y0(u.a,u.b,u.c),r,e.y,!1,e.at,!1,new A.No(o),!1,v,p,!0,e.cx,q)},
av9(d,e,f,g,h,i){var x
if(e==null)x=g==null?B.aA(C.d.b5(127.5),D.da.v()>>>16&255,D.da.v()>>>8&255,D.da.v()&255):null
else x=e
return new A.a_f(h,x,g,i,f,!1)},
bx5(d,e,f){var x=e.d,w=d.d.b,v=x.b,u=B.X(w.a,v.a,f),t=B.qU(w.b,v.b,f),s=B.aa(w.c,v.c,f)
s.toString
s=A.bys(u,A.kd(w.d,v.d,f,A.YU(),y.S),t,s)
t=B.X(d.b,e.b,f)
v=B.qU(d.c,e.c,f)
w=B.aa(d.e,e.e,f)
w.toString
return A.av9(!1,t,w,v,e.a,new A.JU(!1,s,x.c,!0))},
bKi(d,e,f){var x=B.X(d.c,e.c,f),w=B.qU(d.d,e.d,f)
if(x==null)x=w==null?B.aA(C.d.b5(127.5),D.da.v()>>>16&255,D.da.v()>>>8&255,D.da.v()&255):null
return new A.mk(e.a,e.b,x,w)},
c09(d){return!0},
btJ(d,e,f){var x=f.w,w=x==null
if(!w&&x instanceof B.lD)return A.bus(x.a,A.brk(x),e/100)
x=w?null:C.b.ga0(x.a)
if(x==null)x=f.r
return x==null?D.da:x},
bVy(d,e,f){var x,w=f.w,v=w==null
if(!v&&w instanceof B.lD)x=A.bus(w.a,A.brk(w),e/100)
else{w=v?null:C.b.ga0(w.a)
x=w==null?f.r:w
if(x==null)x=D.da}return A.axi(x,40)},
bDn(d,e,f,g,h){var x,w=A.btJ(d,e,f),v=f.w,u=v==null
if(!u&&v instanceof B.lD)x=A.bus(v.a,A.brk(v),e/100)
else{v=u?null:C.b.ga0(v.a)
x=v==null?f.r:v
if(x==null)x=D.da}v=A.axi(x,40)
return new A.M_(w,h==null?4:h,v)},
c07(d,e){return!0},
bXH(d,e){return Math.abs(d.a-e.a)},
bYS(d,e){var x=J.d3(e,new A.bnb(d),y.bY)
x=B.P(x,x.$ti.i("au.E"))
return x},
bYO(d,e){return-1/0},
bYN(d,e){return d.a[e].b},
bEy(d){var x=J.d3(d,new A.bn8(),y.fT)
x=B.P(x,x.$ti.i("au.E"))
return x},
bEx(d){return A.axi(D.da,15)},
pm:function pm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e_:function e_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aHH:function aHH(){},
No:function No(d){this.a=d},
a_f:function a_f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mk:function mk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
JU:function JU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y0:function y0(d,e,f){this.a=d
this.b=e
this.c=f},
aHs:function aHs(d,e){this.a=d
this.b=e},
a3A:function a3A(){},
DZ:function DZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bnb:function bnb(d){this.a=d},
bna:function bna(d){this.a=d},
a5q:function a5q(){},
bn8:function bn8(){},
mF:function mF(){},
pP:function pP(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
r8:function r8(d,e){this.a=d
this.b=e},
t7:function t7(d,e){this.a=d
this.b=e},
FK:function FK(d){this.a=d},
Np:function Np(d){this.a=d},
yJ:function yJ(d,e){this.a=d
this.b=e},
afw:function afw(){},
afx:function afx(){},
afK:function afK(){},
aiJ:function aiJ(){},
aiM:function aiM(){},
akm:function akm(){},
akn:function akn(){},
ako:function ako(){},
akq:function akq(){},
akr:function akr(){},
aks:function aks(){},
akt:function akt(){},
aoG:function aoG(){},
aqh:function aqh(){},
aHI:function aHI(d){this.a=d},
aHJ:function aHJ(){},
aHK:function aHK(){},
yK:function yK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akp:function akp(){},
aHL:function aHL(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aHO:function aHO(){},
aHM:function aHM(d,e,f){this.a=d
this.b=e
this.c=f},
aHN:function aHN(d,e,f){this.a=d
this.b=e
this.c=f},
aHP:function aHP(){},
v0:function v0(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5p:function a5p(d,e,f){this.d=d
this.e=e
this.a=f},
a9w:function a9w(d,e,f,g,h,i,j,k){var _=this
_.aA=d
_.hW=e
_.cV=f
_.fP=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bz=_.aC=_.ad=_.am=$
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
bqo(d,e){var x,w,v,u,t,s,r,q,p=d.ch,o=B.by(p.length,0,!1,y.i),n=B.ab(p),m=new B.a9(p,new A.avc(),n.i("a9<1,L>")).kk(0,new A.avd()),l=e-m,k=new A.avg(l,d,o)
switch(d.cx.a){case 0:for(x=d.CW,w=0,v=0;v<p.length;++v){u=p[v]
o[v]=w+u.gdm(0)/2
t=v===p.length-1?0:x
w+=u.gdm(0)+t}if(w>e)k.$0()
break
case 1:x=d.CW
s=e-(m+x*(p.length-1))
for(w=0,v=0;v<p.length;++v){u=p[v]
o[v]=s+w+u.gdm(0)/2
t=v===p.length-1?0:x
w+=u.gdm(0)+t}if(w>e)k.$0()
break
case 2:x=d.CW
s=(e-(m+x*(p.length-1)))/2
for(w=0,v=0;v<p.length;++v){u=p[v]
o[v]=s+w+u.gdm(0)/2
t=v===p.length-1?0:x
w+=u.gdm(0)+t}if(w>e)k.$0()
break
case 5:r={}
q=p.length
r.a=0
new B.iH(p,n.i("iH<1>")).aq(0,new A.ave(r,l/(q-1),o))
break
case 4:r={}
q=p.length
r.a=0
new B.iH(p,n.i("iH<1>")).aq(0,new A.avf(r,l/(q*2),o))
break
case 3:k.$0()
break}return o},
avc:function avc(){},
avd:function avd(){},
avg:function avg(d,e,f){this.a=d
this.b=e
this.c=f},
avh:function avh(d,e,f){this.a=d
this.b=e
this.c=f},
ave:function ave(d,e,f){this.a=d
this.b=e
this.c=f},
avf:function avf(d,e,f){this.a=d
this.b=e
this.c=f},
brk(d){var x,w={}
w.a=B.b([],y.n)
x=d.b
if(x==null||x.length!==d.a.length){x=d.a
if(x.length>1)new B.iH(x,B.ab(x).i("iH<1>")).aq(0,new A.aET(w,d))
else throw B.e(B.bC('"colors" must have length > 1.',null))}else w.a=x
return w.a},
aET:function aET(d,e){this.a=d
this.b=e},
ays(d,e){var x,w
if(e!=null){x=B.ab(e).i("a9<1,L>")
w=B.P(new B.a9(e,new A.ayt(),x),x.i("au.E"))
return A.bYG(d,new A.a_U(w,y.cX))}else return d},
ayt:function ayt(){},
bRY(d,e){var x=!0
if(d!==C.eT)if(!(d===C.aw&&e===C.t))x=d===C.jQ&&e===C.aQ
if(x)return D.Dd
else{x=!0
if(d!==C.hh)if(!(d===C.jQ&&e===C.t))x=d===C.aw&&e===C.aQ
if(x)return D.De
else return D.a7w}},
Mv:function Mv(d,e){this.a=d
this.b=e},
a_K:function a_K(d,e){this.a=d
this.b=e},
yN:function yN(d,e){this.a=d
this.$ti=e},
akA:function akA(){},
bYG(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=B.cC($.af().r)
for(x=B.b([],y.C),w=new B.Nh(d,!1,x),v=e.a,u=m.e;w.t();){t=w.c
if(t===0||w.f)B.V(B.fk('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--t
s=new B.Ng(w,t)
w.CE()
r=x[t].b
r===$&&B.a()
r.a.length()
q=0
p=!0
for(;;){w.CE()
r=x[t].b
r===$&&B.a()
if(!(q<r.a.length()))break
r=e.b
if(r>=v.length)r=e.b=0
e.b=r+1
o=v[r]
if(p){r=new B.Jk(d.aRk(s,q,q+o,!0),C.p,null)
u.push(r)
n=m.d
if(n!=null)r.hD(n)}q+=o
p=!p}}return m},
a_U:function a_U(d,e){this.a=d
this.b=0
this.$ti=e},
aZX:function aZX(){},
Pi:function Pi(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aF=e
_.dn=f
_.cP=_.D=null
_.eU=g
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
aS7:function aS7(d){this.a=d},
a3t:function a3t(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
oc:function oc(d,e,f){this.a=d
this.f=e
this.$ti=f},
bX3(d,e){return new B.rB(d,new A.bmp(e),e.i("@<0>").co(e.i("oc<0>")).i("rB<1,2>"))},
bmp:function bmp(d){this.a=d},
Im:function Im(){},
QL:function QL(d,e,f,g,h,i,j){var _=this
_.ay=d
_.ch=$
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i
_.$ti=j},
FU:function FU(d,e,f,g,h,i){var _=this
_.go=d
_.id=e
_.k1=null
_.c=$
_.d=f
_.e=$
_.r=g
_.y=_.x=_.w=null
_.z=h
_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=null
_.fx=_.dy=_.dx=_.db=_.cy=_.cx=!1
_.fy=null
_.$ti=i},
aXo:function aXo(d){this.a=d},
WW:function WW(){},
br8(d){var x,w,v,u=y.U,t=B.b([B.b([],u)],y.aA)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.J)(d),++w){v=d[w]
if(!v.k(0,D.fB))C.b.gaf(t).push(v)
else if(C.b.gaf(t).length!==0)t.push(B.b([],u))}if(C.b.gaf(t).length===0)t.pop()
return t},
bKl(d){var x,w=d.d
if(w.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
w=w.a
x=!1
if(w.geg(w)===0){w=d.a.a
if(w.geg(w)===0){w=d.b.a
if(w.geg(w)===0){w=d.c.a
w=w.geg(w)===0}else w=x}else w=x}else w=x
if(w)return!1
return!0},
axi(d,e){var x=1-e/100
return B.aA(d.gfB(d),C.d.b5(d.gNd()*x),C.d.b5(d.gFD()*x),C.d.b5(d.gJL()*x))},
byq(d){var x=d.a,w=x?d.b.d.b:0,v=x?d.b.a.b:0,u=x?d.b.b.b:0
return new B.ai(w,v,u,x?d.b.c.b:0)},
br9(d){var x=d.a,w=x?A.aWs(d.b):0,v=x?A.aWs(d.c):0,u=x?A.aWs(d.d):0
return new B.ai(w,v,u,x?A.aWs(d.e):0)},
bPs(d){var x
if(d.c===0){d.seQ(null)
x=B.bX(d.r)
d.r=B.aA(0,x.v()>>>16&255,x.v()>>>8&255,x.v()&255).gp(0)}},
bs2(d,e,f,g){var x
if(f!=null){d.r=C.B.gp(0)
d.seQ(f.mI(0,g))}else{x=e==null?C.D:e
d.r=x.gp(x)
d.seQ(null)}},
aWs(d){var x=d.c
return x.a&&x.c!==0?0+x.c:0},
kd(d,e,f,g,h){var x,w,v,u=d!=null
if(u&&e!=null&&d.length===e.length){x=d.length
w=J.kC(x,h)
for(v=0;v<x;++v)w[v]=g.$3(d[v],e[v],f)
return w}else if(u&&e!=null){x=e.length
w=J.kC(x,h)
for(v=0;v<x;++v){u=v>=d.length?e[v]:d[v]
w[v]=g.$3(u,e[v],f)}return w}else return e},
c__(d,e,f){return C.d.b5(d+(e-d)*f)},
bus(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=d.length
if(e.length!==n){x=J.kC(n,y.i)
for(w=0;w<n;w=v){v=w+1
x[w]=v/n}e=x}for(u=e.length-1,t=0;t<u;t=r){s=e[t]
r=t+1
q=e[r]
p=d[t]
o=d[r]
if(f<=s)return p
else if(f<q){u=B.X(p,o,(f-s)/(q-s))
u.toString
return u}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a5b.prototype={
A(d){var x,w,v,u=this,t=null,s=u.r,r=s?C.aX:C.k
s=s?C.m:C.ap
x=y.p
w=B.b([],x)
C.b.M(w,B.b([B.cW(u.x,C.m,t,18),C.br],x))
w.push(B.b0(new B.f8(u.c,t),1))
w=B.az(w,C.G,C.f,C.i,0,t,t)
v=u.w
x=B.b([w,C.a8,B.m(u.d,1,C.aj,t,B.cl(v==null?C.h:v,22,C.Q),t,t,t)],x)
return B.c1(s,B.aj(x,C.G,C.h8,C.i),r,t,C.au,t,3)}}
A.ur.prototype={
L5(d){return this.aRn(d)},
aRn(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$L5=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eG("finance_summary",B.a7(["p_from",E.qN(d.a),"p_to",E.qN(d.b)],t,s),s),$async$L5)
case 3:r=f
if(r==null){v=D.alW
x=1
break}if(y.f.b(r)){v=B.eq(r,t,s)
x=1
break}v=D.amm
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L5,w)},
L4(d){return this.aRm(d)},
aRm(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$L4=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eG("finance_kpis",B.a7(["p_from",E.qN(d.a),"p_to",E.qN(d.b)],t,s),s),$async$L4)
case 3:r=f
if(y.f.b(r)){v=B.eq(r,t,s)
x=1
break}v=D.alF
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L4,w)},
pw(d){return this.apD(d)},
apD(d){var x=0,w=B.r(y.S),v,u=this,t,s,r
var $async$pw=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:r=u.a.as
r===$&&B.a()
t=y.N
x=3
return B.k(r.hZ("sevdesk-sync",B.a7(["from",E.qN(d.a),"to",E.qN(d.b)],t,t)),$async$pw)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a5(s,"upserted")=="number"){v=C.d.a4(B.fp(J.a5(s,"upserted")))
x=1
break}v=0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$pw,w)},
L0(d){return this.aRc(d)},
aRc(d){var x=0,w=B.r(y.N),v,u=this,t,s,r
var $async$L0=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:r=u.a.as
r===$&&B.a()
t=y.N
x=3
return B.k(r.hZ("finance-export-pdf",B.a7(["from",E.qN(d.a),"to",E.qN(d.b)],t,t)),$async$L0)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a5(s,"base64")=="string"){v=B.aD(J.a5(s,"base64"))
x=1
break}throw B.e(B.dA("PDF-Export fehlgeschlagen"))
case 1:return B.p(v,w)}})
return B.q($async$L0,w)}}
A.Dj.prototype={
Fx(d){return this.aiQ(d)},
aiQ(d){var x=0,w=B.r(y.d),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Fx=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L5(d),$async$Fx)
case 7:r=f
p=A.aCE(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.H7(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$Fx,w)},
Ft(d){return this.aiB(d)},
aiB(d){var x=0,w=B.r(y.X),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Ft=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L4(d),$async$Ft)
case 7:r=f
p=A.bMV(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.H7(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$Ft,w)},
pw(d){return this.apE(d)},
apE(d){var x=0,w=B.r(y.S),v,u=2,t=[],s=this,r,q,p,o
var $async$pw=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.pw(d),$async$pw)
case 7:q=f
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=B.a1(o)
q=s.H7(r)
throw B.e(q)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$pw,w)},
L_(d){return this.aRb(d)},
aRb(d){var x=0,w=B.r(y.gc),v,u=2,t=[],s=this,r,q,p,o,n
var $async$L_=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L0(d),$async$L_)
case 7:r=f
p=C.ka.cU(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.H7(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$L_,w)},
H7(d){if(d instanceof B.xW)return d
if(d instanceof B.lO){if(d.b==="42501")return new B.vm(d.a)
return new B.rN(d.a)}if(d instanceof B.Mk)return new B.rN("Edge Function fehlgeschlagen ("+d.a+")")
return new B.At("Unerwarteter Fehler: "+B.i(d))},
$iaCs:1}
A.pR.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.v6.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f]}}
A.vZ.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.axS.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.ayZ.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w]}}
A.nI.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.BW.prototype={
gbH(){var x=this
return[x.a,x.d,x.e,x.f]}}
A.nJ.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.xZ.prototype={
Gu(d){return this.apC(0)},
apC(d){var x=0,w=B.r(y.h6),v,u=this,t,s,r,q
var $async$Gu=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:q={}
u.se3(0,C.di)
t=u.r
s=t.aZ(0,$.wV(),y.P)
q.a=null
x=3
return B.k(B.oN(new A.aCo(q,u,s),y.H),$async$Gu)
case 3:u.se3(0,f)
r=u.f
if(r.ghm(r)==null){r=$.bpX()
t=t.e
t===$&&B.a()
t.cr(r)}v=q.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$Gu,w)},
KZ(){return this.aRa()},
aRa(){var x=0,w=B.r(y.aD),v,u=this,t,s,r
var $async$KZ=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:r={}
u.se3(0,C.di)
t=u.r.aZ(0,$.wV(),y.P)
r.a=null
x=3
return B.k(B.oN(new A.aCn(r,u,t),y.H),$async$KZ)
case 3:u.se3(0,e)
s=u.f
v=s.ghm(s)!=null?null:r.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$KZ,w)}}
A.y_.prototype={
dJ(d,e){var x=null,w=e.aH($.wV(),y.P),v=e.aH($.bpX(),y.h)
return B.kM(B.er(B.b([new B.hz("Finanzen","Dashboard",new A.aeK(e.aH($.bpW(),y.b).gj9(),new A.aCw(this,d,e),new A.aCx(this,d,e),new A.aCy(d),new A.aCz(this,d,e,w),x),x),C.aI,new A.alU(w,x),C.cg,D.acD,C.cg,B.dv(v,new A.aCA(),new A.aCB(),new A.aCC(),!1,!0,!1,y.d,y.l)],y.p),C.d0,x,!1),C.m,new A.aCD(e))},
IW(d,e){return this.aJK(d,e)},
aJK(d,e){var x=0,w=B.r(y.H),v,u,t,s
var $async$IW=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:t=$.bpW()
x=3
return B.k(e.aZ(0,t.giE(),y.F).Gu(0),$async$IW)
case 3:s=g
if(d.e==null){x=1
break}t=e.aZ(0,t,y.b)
t=t.ghm(t)
u=d.P(y.q).f
u.bR(B.cg(null,null,null,null,null,C.r,null,B.m(t==null?"sevDesk synchronisiert: "+B.i(s)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.P,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(v,w)}})
return B.q($async$IW,w)},
AW(d,e){return this.avB(d,e)},
avB(d,e){var x=0,w=B.r(y.H),v,u
var $async$AW=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:x=3
return B.k(e.aZ(0,$.bpW().giE(),y.F).KZ(),$async$AW)
case 3:u=g
if(d.e==null){x=1
break}if(u==null){d.P(y.q).f.bR(D.atj)
x=1
break}x=4
return B.k(E.bAg(u,"finanzauswertung.pdf"),$async$AW)
case 4:case 1:return B.p(v,w)}})
return B.q($async$AW,w)},
AX(d,e,f){return this.aHw(d,e,f)},
aHw(d,e,f){var x=0,w=B.r(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$AX=B.n(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:x=3
return B.k(B.le(null,null,!0,null,new A.aCv(f,d),d,null,!0,!0,y.y),$async$AX)
case 3:if(h!==!0){x=1
break}u=5
s=new E.nk(e.aZ(0,$.ci(),y.A))
q=f.a
p=f.b
o=$.eh()
n=o.aG(q)
o=o.aG(p)
x=8
return B.k(s.zc("finance_period",q,p,B.a7(["period_from",q.hg()],y.N,y.z),"Finanzauswertung "+n+" \u2013 "+o),$async$AX)
case 8:if(d.e!=null)d.P(y.q).f.bR(F.uC)
u=2
x=7
break
case 5:u=4
l=t.pop()
r=B.a1(l)
if(d.e!=null)d.P(y.q).f.bR(B.cg(null,null,null,null,null,C.r,null,B.m("Fehler: "+B.i(r),null,null,null,null,null,null,null),null,C.P,null,null,null,null,null,null,null,null,null,null))
x=7
break
case 4:x=2
break
case 7:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$AX,w)}}
A.aeK.prototype={
A(d){var x=this,w=null,v=A.b9x(C.m,F.iX,C.m,x.r,"Freigabe f\xfcr Auswertung anfordern"),u=A.b9x(w,D.a91,w,x.f,"Gesellschafter-Freigaben"),t=x.c,s=A.b9x(w,D.a8g,w,t?w:x.d,"sevDesk synchronisieren")
return B.az(B.b([v,C.br,u,C.br,s,C.br,A.b9x(C.ak,C.kQ,C.ak,t?w:x.e,"PDF-Export")],y.p),C.o,C.f,C.O,0,w,w)}}
A.ajK.prototype={
A(d){var x,w=this,v=null,u=B.b2(12),t=B.b2(12),s=B.b2(12),r=w.w
if(r==null)r=C.ap
r=B.dw(r,1)
x=w.r
if(x==null)x=C.h
return B.aca(B.e0(!1,C.Y,!0,u,B.fh(!1,t,!0,B.bn(v,B.cW(w.c,x,v,20),C.q,v,v,new B.bd(v,v,r,s,v,v,C.H),v,40,v,v,v,v,v,40),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),C.q,C.az,0,v,v,v,v,v,C.bK),v,w.d,v,v)}}
A.alU.prototype={
dJ(d,e){var x=null,w=this.e,v=$.eh(),u=y.p
return B.c1(x,B.aj(B.b([D.a6X,C.a8,B.az(B.b([D.a9G,C.bz,B.b0(B.m(v.aG(w.a)+" \u2013 "+v.aG(w.b),x,x,x,B.N(C.h,16,C.Q),x,x,x),1)],u),C.o,C.f,C.i,0,x,x),C.w,B.tg(C.dg,B.b([new A.I1("Monat",new A.bd9(e),x,x),new A.I1("Jahr (YTD)",new A.bda(e),x,x),new A.I1("Zeitraum w\xe4hlen \u2026",new A.bdb(this,d,e),D.a8k,x)],u),C.eW,6,8)],u),C.G,C.f,C.i),x,x,C.J,x,3)},
Ij(d,e){return this.aGu(d,e)},
aGu(d,e){var x=0,w=B.r(y.H),v=this,u,t,s
var $async$Ij=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=new B.bi(Date.now(),0,!1)
t=v.e
x=2
return B.k(E.bpd(new A.bd8(),d,B.bK(B.aX(u)-5,1,1,0,0,0,0),new B.ms(t.a,t.b,y.bz),B.bK(B.aX(u)+1,1,1,0,0,0,0),C.eK),$async$Ij)
case 2:s=g
if(s!=null)e.aZ(0,$.wV().giE(),y.V).OY(0,new E.ls(s.a,s.b))
return B.p(null,w)}})
return B.q($async$Ij,w)}}
A.I1.prototype={
A(d){var x=null,w=B.b2(9999),v=B.b2(9999),u=B.b2(9999),t=B.dw(C.ap,1),s=y.p,r=B.b([],s),q=this.e
if(q!=null)C.b.M(r,B.b([B.cW(q,C.h,x,14),C.br],s))
r.push(B.m(this.c,x,x,x,B.N(C.h,13,C.Q),x,x,x))
return B.e0(!1,C.Y,!0,w,B.fh(!1,v,!0,B.bn(x,B.az(r,C.o,C.f,C.O,0,x,x),C.q,x,x,new B.bd(x,x,t,u,x,x,C.H),x,x,x,x,C.kD,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x),C.q,C.az,0,x,x,x,x,x,C.bK)}}
A.Ix.prototype={
A(d){var x,w,v,u,t=null,s=y.p,r=B.b([B.kE(new A.bix(this)),C.cg,D.a6R,C.w],s),q=this.c.w
if(q.length===0)r.push(B.c1(t,B.az(B.b([D.aad,C.aL,B.b0(B.m("Keine Buchungen im gew\xe4hlten Zeitraum.",t,t,t,B.N(C.x,14,C.n),t,t,t),1)],s),C.o,C.f,C.i,0,t,t),C.az,t,C.J,t,3))
else{x=B.b([],s)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
C.b.M(x,B.b([new A.aeI(u.a,u.b,u.c==="revenue",u.d,t),C.a8],s))}r.push(B.aj(x,C.o,C.f,C.i))}return B.aj(r,C.ab,C.f,C.i)}}
A.aeI.prototype={
A(d){var x=this,w=null,v=x.e,u=v?C.aX:C.az,t=B.dw(v?C.m:C.ap,1),s=B.b2(4),r=x.c
s=B.bn(C.a_,B.m(C.c.a1(r,0,1),w,w,w,B.cl(C.h,14,C.v),w,w,w),C.q,w,w,new B.bd(u,w,t,s,w,w,C.H),w,36,w,w,w,w,w,36)
r=B.m(r+" \xb7 "+x.d,1,C.aj,w,B.N(C.h,14,C.Q),w,w,w)
u=v?"Erl\xf6s":"Aufwand"
t=y.p
u=B.b0(B.aj(B.b([r,B.m(u,w,w,w,B.N(C.x,12,C.n),w,w,w)],t),C.G,C.f,C.i),1)
r=$.eN().aG(x.f)
return B.c1(w,B.az(B.b([s,C.aL,u,B.m(r,w,w,w,B.N(v?C.b0:C.h,15,C.Q),w,w,w)],t),C.o,C.f,C.i,0,w,w),w,w,C.fa,w,3)}}
A.H9.prototype={
A(d){var x=null
return B.c1(C.ak,B.az(B.b([D.aax,C.aL,B.b0(B.m(this.c,x,x,x,B.N(C.h,14,C.n),x,x,x),1)],y.p),C.o,C.f,C.i,0,x,x),C.hy,x,C.J,x,3)}}
A.a5c.prototype={
dJ(d,e){return B.dv(e.aH($.bJ3(),y.e),new A.aHp(),new A.aHq(),new A.aHr(),!1,!0,!1,y.X,y.l)}}
A.Ht.prototype={
A(d){var x=null,w=this.c,v=w.x,u=v>0,t=u?w.a.c/v:0,s=u?w.r.a/v:0
v=y.p
u=B.b([D.aqO,C.w,B.kE(new A.baN(this,t,100-w.w.a,s)),C.w,new A.aj4(x),C.aI,D.aqK,C.w,B.c1(x,new A.ag7(w,x),x,x,C.J,x,3),C.aI,D.aqF,C.w,new A.ago(w,x),C.aI,D.aqJ,C.w,new A.akJ(w,x),C.aI,D.aqH,C.w,new A.aha(w,x)],v)
if(w.f.length!==0)C.b.M(u,B.b([C.aI,D.aqL,C.w,new A.aqe(w,x)],v))
return B.aj(u,C.ab,C.f,C.i)}}
A.aj4.prototype={
A(d){var x=null
return B.m("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",x,x,x,B.N(C.x,11,C.n).h4(1.35),x,x,x)}}
A.akf.prototype={
A(d){var x,w,v,u,t,s,r=this,q=null
if(r.x)x=C.c.cG(r.d,"-")?C.ak:C.b0
else x=C.h
w=y.p
v=B.b([B.b0(B.m(r.c.toUpperCase(),q,q,q,B.N(C.x,10,C.v).iz(0.6),q,q,q),1)],w)
u=r.Q
if(u!=null){t=B.dw(C.ak,0.8)
s=B.b2(4)
v.push(B.bn(q,B.m("Ziel "+u,q,q,q,B.N(C.ak,9,C.v),q,q,q),C.q,q,q,new B.bd(q,q,t,s,q,q,C.H),q,q,q,q,C.mW,q,q,q))}v=B.b([B.az(v,C.o,C.f,C.i,0,q,q),C.aV,new A.a3t(C.AN,C.ej,B.m(r.d,q,q,q,B.cl(x,22,C.v),q,q,q),q)],w)
u=r.e
if(u!=null)v.push(B.m(u,2,C.aj,q,B.N(C.x,10,C.bf),q,q,q))
v.push(C.cI)
v.push(B.az(B.b([new A.Tm("Vormonat",r.r,q),C.de,new A.Tm("Vorjahr",r.f,q)],w),C.o,C.f,C.i,0,q,q))
v.push(C.cI)
v.push(B.b0(new A.ap2(r.w,r.y,r.z,q),1))
return B.c1(q,B.aj(v,C.G,C.f,C.i),q,q,C.dA,q,3)}}
A.Tm.prototype={
A(d){var x,w,v,u,t,s=null,r=this.d
if(r==null){r=B.b2(4)
return B.bn(s,B.m(this.c+" \u2014",s,s,s,B.N(C.x,9,C.v),s,s,s),C.q,s,s,new B.bd(C.ap,s,s,r,s,s,C.H),s,s,s,s,C.mW,s,s,s)}x=r>=0
w=x?C.b0:C.ak
v=w.o5(0.12)
u=B.dw(w,0.7)
t=B.b2(4)
return B.bn(s,B.az(B.b([B.cW(x?F.a7C:D.a7B,w,s,10),F.at_,B.m(this.c+" "+C.d.an(r,1)+" %",s,s,s,B.N(w,9,C.v),s,s,s)],y.p),C.o,C.f,C.O,0,s,s),C.q,s,s,new B.bd(v,s,u,t,s,s,C.H),s,s,s,s,C.mW,s,s,s)}}
A.ap2.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
if(k.length<2)return C.av
x=B.b([],y.U)
for(w=0;w<k.length;++w)x.push(new A.en(w,k[w]))
v=C.b.kk(k,new A.bi0())
u=C.b.kk(k,new A.bi1())
t=this.d
s=t!=null
if(s){if(t<v)v=t
if(t>u)u=t}r=this.e
q=r!=null
if(q){if(r<v)v=r
if(r>u)u=r}p=Math.abs(u-v)<0.001
k=new A.bi2(k.length-1)
o=p?v-1:v
n=p?u+1:u
m=A.a3y(l,!1)
x=B.b([A.aHG(l,2,A.av9(!1,C.m.o5(0.16),0,l,!0,D.vv),C.m,0.35,l,D.D4,l,!0,!1,!0,!1,D.En,!1,10,D.XK,!0,C.l5,x)],y.u)
if(s)x.push(k.$1(t))
if(q)x.push(k.$1(r))
return new A.Nn(A.brH(l,l,l,D.ail,m,D.B0,D.D0,D.D5,x,D.acH,l,n,l,o,D.X5,D.aim,D.a7h),C.ao,C.ac,l,l)}}
A.ag7.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c.d
if(q.length===0)return new A.TL("Noch keine Trend-Daten f\xfcr den Zeitraum.",r)
x=C.b.fQ(q,0,new A.b26())
w=x>0?x*1.15:10
v=B.b([],y.O)
for(u=y.Y,t=0;t<q.length;++t){s=q[t]
v.push(A.avi(B.b([A.a_h(r,r,D.Au,r,C.m,r,r,r,s.b,6),A.a_h(r,r,D.Au,r,C.h,r,r,r,s.c,6)],u),2,r,r,t))}return B.cu(A.bx6(A.avb(r,r,v,r,r,A.a3y(r,!1),r,new A.y1(!0,!0,r,new A.b27(),A.YP(),!1,r,A.asM(),A.YP()),r,w,r,r,new A.ut(!0,new A.oO(16,r,new A.pI(!0,new A.b28(this),46,r),!0),D.k6,D.k6,new A.oO(16,r,new A.pI(!0,new A.b29(q),26,r),!0)))),220,r)},
aJ2(d){if(Math.abs(d)>=1000)return C.d.an(d/1000,1)+" k"
return C.d.an(d,0)}}
A.ago.prototype={
A(d){var x,w,v,u,t,s=null,r=B.b(["Aktuell","Vormonat","Vorjahr"],y.gM),q=this.c,p=q.a,o=q.c
q=q.b
x=y.n
w=B.b([p.c,o.c,q.c],x)
v=B.b([p.e,o.e,q.e],x)
x=y.gj
q=B.P(new B.a9(w,new A.b2S(),x),y.i)
C.b.M(q,new B.a9(v,new A.b2T(),x))
u=C.b.fQ(q,0,new A.b2U())
q=u>0?u*1.2:10
p=B.b([],y.O)
for(o=y.Y,t=0;t<3;++t)p.push(A.avi(B.b([A.a_h(s,s,s,s,C.m,s,s,s,w[t],14),A.a_h(s,s,s,s,C.b0,s,s,s,v[t],14)],o),4,s,s,t))
return B.c1(s,B.cu(A.bx6(A.avb(s,s,p,s,s,A.a3y(s,!1),s,D.D5,s,q,s,s,new A.ut(!0,D.k6,D.k6,D.k6,new A.oO(16,s,new A.pI(!0,new A.b2V(r),26,s),!0)))),200,s),s,s,C.J,s,3)}}
A.akJ.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c.e
if(m.length===0)return D.aFl
x=new B.a9(m,new A.bbg(),B.ab(m).i("a9<1,L>")).kk(0,new A.bbh())
w=y.p
v=B.b([],w)
for(u=m.length,t=0;t<m.length;m.length===u||(0,B.J)(m),++t){s=m[t]
r=B.m(s.b,n,n,n,B.N(C.h,14,C.v),n,n,n)
q=$.eN()
p=s.d
o=new B.aS(4,4)
p=B.b([B.az(B.b([new B.qG(1,C.hG,B.aj(B.b([r,B.m(""+s.e+" Verk\xe4ufe \xb7 \xd8 "+q.aG(s.f),n,n,n,B.N(C.x,12,C.bf),n,n,n)],w),C.G,C.f,C.i),n),C.bz,B.m(q.aG(p),n,n,n,B.cl(C.h,16,C.v),n,n,n)],w),C.o,C.f,C.i,0,n,n),C.cI,new B.CE(new B.d2(o,o,o,o),C.bH,B.a5r(C.ap,8,C.d.c4(p/x,0,1),D.Ai),n)],w)
r=C.b.gaf(m)
if(s!==r)r=B.G(s)===B.G(r)&&B.YS(s.gbH(),r.gbH())
else r=!0
if(!r)p.push(C.w)
C.b.M(v,p)}return B.c1(n,B.aj(v,C.o,C.f,C.i),n,n,C.J,n,3)}}
A.aha.prototype={
A(d){var x=null,w=this.c.r
return B.c1(x,B.az(B.b([B.b0(new A.Il("Aktive Kunden",""+w.c,x),1),B.b0(new A.Il("K\xe4ufe",""+w.a,x),1),B.b0(new A.Il("\xd8-Warenkorb",$.eN().aG(w.d),x),1)],y.p),C.o,C.f,C.i,0,x,x),x,x,C.J,x,3)}}
A.Il.prototype={
A(d){var x=null
return B.aj(B.b([B.m(this.c.toUpperCase(),x,x,x,B.N(C.x,10,C.v).iz(0.6),x,x,x),C.cT,B.m(this.d,x,x,x,B.cl(C.h,20,C.v),x,x,x)],y.p),C.G,C.f,C.O)}}
A.aqe.prototype={
A(d){var x,w,v,u,t,s=null,r=this.c.f,q=new B.a9(r,new A.bjO(),B.ab(r).i("a9<1,L>")).kk(0,new A.bjP()),p=y.p,o=B.b([],p)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.J)(r),++w){v=r[w]
u=v.d
t=new B.aS(4,4)
u=B.b([B.az(B.b([new B.qG(1,C.hG,B.m(v.b,1,C.aj,s,B.N(C.h,13,C.v),s,s,s),s),B.m(""+v.c+"\xd7 ",s,s,s,B.N(C.x,12,C.Q),s,s,s),B.m($.eN().aG(u),s,s,s,B.N(C.h,13,C.v),s,s,s)],p),C.o,C.f,C.i,0,s,s),C.aV,new B.CE(new B.d2(t,t,t,t),C.bH,B.a5r(C.ap,6,C.d.c4(u/q,0,1),D.Ai),s)],p)
t=C.b.gaf(r)
if(v!==t)t=B.G(v)===B.G(t)&&B.YS(v.gbH(),t.gbH())
else t=!0
if(!t)u.push(C.a8)
C.b.M(o,u)}return B.c1(s,B.aj(o,C.o,C.f,C.i),s,s,C.J,s,3)}}
A.TL.prototype={
A(d){var x=null
return B.c1(x,B.m(this.c,x,x,x,B.N(C.x,13,C.n),x,x,x),C.az,x,C.J,x,3)}}
A.b8.prototype={
k(d,e){var x
if(e==null)return!1
if(this!==e)x=y.E.b(e)&&B.G(this)===B.G(e)&&B.YS(this.gbH(),e.gbH())
else x=!0
return x},
gu(d){return(B.et(B.G(this))^B.bF2(this.gbH()))>>>0},
j(d){B.bym()
return B.G(this).j(0)}}
A.JV.prototype={
Y(){return new A.Sl(B.y(y.S,y.I),new A.avl(B.y(y.s,y.T)),null,null)}}
A.Sl.prototype={
A(d){var x,w=this,v=w.a1h(),u=w.CW
u.toString
u=w.a1i(u.ar(0,w.ghA().gp(0)))
x=w.a1i(v)
w.a.toString
return new A.JQ(new A.a_g(u,x,null),v,null)},
a1i(d){var x,w,v,u,t,s
if(!d.cy.a)return d
x=B.b([],y.O)
for(w=d.ch,v=this.cy,u=0;u<w.length;++u){t=w[u]
s=v.h(0,u)
if(s==null)s=t.e
x.push(A.avi(t.c,t.d,!1,s,t.a))}return d.aOd(x)},
a1h(){var x,w,v=this,u=v.a.r,t=u.x,s=isNaN(t)
if(s||isNaN(u.y)){x=v.db.U5(u.ch)
if(s)t=x.a
s=u.y
u=u.aP8(isNaN(s)?x.b:s,t)}w=u.cy
if(w.a){v.cx=w.b
return u.aOe(A.bqp(!1,!0,!0,w.d,w.c,v.gar9(),w.f,w.e))}return u},
ara(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(!d.gaeL()||e==null||e.a==null){x=w.cy
w.L(x.gaND(x))
return}w.L(new A.b0N(w,e))},
nO(d){var x=this
x.CW=y.bn.a(d.$3(x.CW,x.a1h(),new A.b0O(x)))}}
A.nr.prototype={
UI(d,e,f,g){var x=this,w=d==null?x.ch:d,v=e==null?x.cy:e,u=f==null?x.y:f,t=g==null?x.x:g
return A.avb(x.cx,x.as,w,v,x.z,x.a,x.at,x.c,x.CW,u,t,x.e,x.d)},
aP8(d,e){return this.UI(null,null,d,e)},
aOe(d){return this.UI(null,d,null,null)},
aOd(d){return this.UI(d,null,null,null)},
WD(d,e,f){var x,w,v,u=A.kd(d.ch,e.ch,f,A.bXZ(),y.dB),t=B.aa(d.CW,e.CW,f),s=A.byt(d.d,e.d,f),r=A.bAp(d.e,e.e,f),q=A.byr(d.c,e.c,f),p=e.a
p=A.a3y(B.a_x(d.a.b,p.b,f),p.a)
x=B.aa(d.y,e.y,f)
w=B.aa(d.x,e.x,f)
v=B.aa(d.z,e.z,f)
s=A.avb(e.cx,B.X(d.as,e.as,f),u,e.cy,v,p,A.byo(d.at,e.at,f),q,t,x,w,r,s)
return s},
gbH(){var x=this
return[x.ch,x.CW,x.cx,x.d,x.cy,x.y,x.x,x.z,x.c,x.a,x.e,x.as,x.at]}}
A.ava.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fs.prototype={
gdm(d){var x,w=this.c
if(w.length===0)return 0
x=new B.a9(w,new A.avj(),B.ab(w).i("a9<1,L>")).kk(0,new A.avk())
w=w.length
return x+(w-1)*this.d},
gbH(){var x=this
return[x.a,!1,x.c,x.d,x.e]}}
A.i7.prototype={
gbH(){var x=this
return[x.a,x.b,x.e,x.f,x.r,x.w,x.x,x.y,x.c,x.d]}}
A.mj.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a_d.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.a_i.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,!1,!0]}}
A.acb.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_j.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,!1,!1,x.z,x.Q,x.as]}}
A.Cc.prototype={
gbH(){return[this.a,this.b,C.cV,C.t,null]}}
A.JW.prototype={}
A.a_k.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.a,x.b]}}
A.xc.prototype={
hb(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WD(w,x,d)}}
A.afu.prototype={}
A.afy.prototype={}
A.afz.prototype={}
A.afB.prototype={}
A.afC.prototype={}
A.afD.prototype={}
A.afE.prototype={}
A.afF.prototype={}
A.afG.prototype={}
A.avl.prototype={
U5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(d.length===0)return new A.u4(0,0,!1)
w=new A.yN(d,y.s)
v=this.a
if(v.aB(0,w)){v=v.h(0,w)
u=v.a
v=v.b
return new A.u4(u,v,!0)}x=null
try{x=C.b.qc(d,new A.avm())}catch(t){return new A.u4(0,0,!1)}s=Math.max(x.c[0].a,x.c[0].b)
r=Math.min(x.c[0].a,x.c[0].b)
for(u=d.length,q=0;q<u;++q)for(p=d[q].c,o=p.length,n=0;n<o;++n){m=p[n]
l=m.a
s=Math.max(s,l)
r=Math.min(r,l)
l=m.b
s=Math.max(s,l)
r=Math.min(r,l)}k=new A.u4(r,s,!1)
v.m(0,w,k)
return k}}
A.u4.prototype={
gbH(){return[this.a,this.b,this.c]}}
A.afA.prototype={}
A.avn.prototype={
i2(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a_n(d,e,f)
x=f.a
w=f.b
v=x.ch
if(v.length===0)return
u=e.b
v=m.abm(u,A.bqo(x,u.a),v)
m.y=v
m.aQu(e,v,f)
m.akL(d,e,f,u)
for(v=w.ch,u=w.cy.e,t=0;t<v.length;++t){s=v[t]
for(r=s.c,q=s.e,p=0;p<r.length;++p){if(!C.b.n(q,p))continue
o=r[p]
n=m.y
n.toString
m.aQD(d,e,n,u,s,t,o,p,f)}}},
abm(d,e,f){var x,w,v,u,t,s,r,q
if(e.length!==f.length)throw B.e(B.dA("inconsistent state groupsX.length != barGroups.length"))
x=B.b([],y.K)
for(w=y.n,v=0;v<f.length;++v){u={}
t=f[v]
s=e[v]
u.a=0
r=B.b([],w)
q=t.c
new B.iH(q,B.ab(q).i("iH<1>")).aq(0,new A.avo(u,r,s,t))
x.push(new A.a4d(r))}return x},
aQu(b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(x=b3.ch,w=b5.a,v=w.a,u=b3.y,t=b3.x,s=0;s<x.length;++s)for(r=x[s].c,q=0;q<r.length;++q){p=r[q]
o=p.e
n=o/2
m=p.f
if(m==null){l=new B.aS(n,n)
m=new B.d2(l,l,l,l)}k=p.w
j=b6[s].b[q]
i=j-n
h=j+n
l=m.a
g=m.b
f=m.c
e=m.d
d=Math.max(l.b,g.b)+Math.max(f.b,e.b)
a0=p.b
a1=p.a
if(a0!==a1){if(a0>a1){a2=b2.dA(Math.max(t,a1),b4,b7)
a3=B.OV(i,Math.min(b2.dA(a0,b4,b7),a2-d),h,a2,f,e,l,g)}else{a4=b2.dA(Math.min(u,a1),b4,b7)
a3=B.OV(i,a4,h,Math.max(b2.dA(a0,b4,b7),a4+d),f,e,l,g)}l=b2.f
l===$&&B.a()
g=p.c
l.r=(g==null?C.D:g).gp(0)
l.seQ(null)
a5=b2.f.ek()
v.drawRRect(B.mf(a3),a5)
a5.delete()
l=p.y
if(l.length!==0)for(a6=0;a6<l.length;++a6){a7=l[a6]
g=a7.a
a8=b2.dA(g,b4,b7)
f=a7.b
a9=b2.dA(f,b4,b7)
b2.f.r=a7.c.gp(0)
b0=f<g?new B.D(i,a8,h,a9):new B.D(i,a9,h,a8)
J.aV(v.save())
v.clipRect(B.dF(b0),$.oG()[1],!0)
a5=b2.f.ek()
v.drawRRect(B.mf(a3),a5)
a5.delete()
v.restore()
b2.aQB(b5,a7,a6,l.length,o,a3,b4,b7)}o=k.b
if(o>0){l=k.a
l=l.geg(l)>0}else l=!1
if(l){l=b2.r
l===$&&B.a()
g=k.a
l.r=g.gp(g)
l.c=o
b1=B.cC($.af().r)
o=new B.h2(a3)
b1.e.push(o)
l=b1.d
if(l!=null)o.hD(l)
w.fO(A.ays(b1,p.r),b2.r)}}}},
aQD(a7,a8,a9,b0,b1,b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=a8.b,a6=b0.r.$4(b1,b2,b3,b4)
if(a6==null)return
x=B.Ai(a4,a4,a4,a4,B.d6(a4,a4,a4,a4,a4,a4,a4,a4,a4,$.lg().Zn(a7,a6.b),a6.a),C.cV,C.t,a4,b5.c,C.bw)
x.af2(b0.f)
w=x.b
v=w.c
w=w.a.c
w=w.gbS(w)
u=a9[b2].b[b4]
t=b3.b
s=a3.dA(t,a5,b5)
r=b3.a
q=a3.dA(r,a5,b5)
p=b0.b
o=v+p.gen()
n=w+4+(p.gcY(0)+p.gd_(0))
m=Math.min(s,q)
l=Math.max(s,q)
w=b0.y
if(w!==D.aBe)k=w===D.YU&&t>=r
else k=!0
w=b0.c
j=k?m-n-w:l+w
i=a3.Zo(u,o,b0.d,b0.e)
w=i+o
u=j+n
h=new B.D(i,j,w,u)
t=b0.a
g=new B.aS(t,t)
f=B.F5(h,g,g,g,g)
t=a3.w
t===$&&B.a()
s=b0.as.$1(b1)
t.r=s.gp(s)
e=b0.z
w-=i
u-=j
s=$.lg().JV(new B.E(w,u),e).b
t=$.lg()
r=x.b
q=r.c
r=r.a.c
d=t.JV(new B.E(q,r.gbS(r)),e)
r=h.gc7()
q=x.b.c
t=h.gahk()
a0=b0.Q
if(!a0.k(0,C.A)){a1=a3.x
a1===$&&B.a()
a2=a0.a
a1.r=a2.gp(a2)
a1.c=a0.b}a8.Vk(e,new A.avp(a3,a8,f,x,new B.l(r.a-q/2,t.b+p.b-d.b+s)),new B.l(f.a,f.b),new B.l(0,s),new B.E(w,u))},
aQB(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r,q,p,o=this,n=e.d,m=n.b
if(m!==0){x=n.a
x=x.geg(x)===0}else x=!0
if(x)return
if(f===0){x=e.b
w=o.dA(x,j,k)
v=e.a
u=o.dA(v,j,k)
x=v<x
v=x?new B.aS(i.z,i.Q):C.Z
t=x?new B.aS(i.x,i.y):C.Z
s=x?C.Z:new B.aS(i.e,i.f)
x=x?C.Z:new B.aS(i.r,i.w)
r=B.OV(i.a,w,i.c,u,v,t,s,x)}else{x=i.a
w=e.b
v=i.c
u=e.a
if(f===g-1){t=Math.max(o.dA(w,j,k),i.b)
s=o.dA(u,j,k)
w=u<w
u=w?C.Z:new B.aS(i.z,i.Q)
q=w?C.Z:new B.aS(i.x,i.y)
p=w?new B.aS(i.e,i.f):C.Z
r=B.OV(x,t,v,s,u,q,p,w?new B.aS(i.r,i.w):C.Z)}else r=B.bso(x,o.dA(w,j,k),v,o.dA(u,j,k),C.Z)}x=o.r
x===$&&B.a()
n=n.a
x.r=n.gp(n)
x.c=Math.min(m,h/2)
d.a.eL(r,o.r)},
W_(b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b2.a,a8=b2.b,a9=a8.ch
if(a9.length===0)return null
if(a6.y==null)a6.y=a6.abm(b1,A.bqo(a7,b1.a),a7.ch)
for(x=b0.b,w=b0.a,v=a8.cy.f,u=v.a,t=v.d,s=v.b,r=0;q=a6.y,r<q.length;++r)for(q=q[r].b,p=0;p<q.length;++p){o=q[p]
n=a9[r].c[p]
m=n.e/2
l=n.b
k=n.a
j=l>=k
if(j){i=a6.dA(l,b1,b2)
n=a9[r].c[p]
h=a6.dA(n.a+n.x.b,b1,b2)}else{i=a6.dA(k+n.x.b,b1,b2)
h=a6.dA(a9[r].c[p].b,b1,b2)}a6.dA(a9[r].c[p].x.c,b1,b2)
g=w<=o+m+v.c&&w>=o-m-u
if(j)f=x<=h+t&&x>=i-s
else f=x>=i-s&&x<=h+t
if(g&&f){e=a9[r]
d=e.c[p]
w=d.b
u=a6.dA(w,b1,b2)
a9=d.y
a2=0
for(;;){if(!(a2<a9.length)){a0=-1
a1=null
break}a3=a9[a2]
a4=a6.dA(a3.a,b1,b2)
a5=a6.dA(a3.b,b1,b2)
if(x<=a4&&x>=a5){a1=a3
a0=a2
break}++a2}return new A.a_k(e,r,d,p,a1,a0,new A.en(e.a,w),new B.l(o,u))}}return null}}
A.a4d.prototype={}
A.a_g.prototype={
bl(d){var x,w=this.e,v=B.bA(d,null,y.w).w.gcN(),u=new A.avn()
u.a0z()
$.af()
x=B.aQ()
x.b=C.bc
u.f=x
x=B.aQ()
x.b=C.aO
u.r=x
x=B.aQ()
x.b=C.bc
x.r=C.k.gp(0)
u.w=x
x=B.aQ()
x.b=C.aO
x.r=C.D.gp(0)
x.c=1
u.x=x
u=new A.a9j(this.d,w,v,u,d,C.bm,new B.bl(),B.aG(y.v))
u.bj()
u.Yj(w.cy)
u.aec()
return u},
bx(d,e){e.sic(0,this.d)
e.sY4(this.e)
e.scN(B.bA(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9j.prototype={
sic(d,e){if(this.aA.k(0,e))return
this.aA=e
this.bd()},
sY4(d){var x=this
if(x.hW.k(0,d))return
x.hW=d
x.a07(d.cy)
x.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var x,w,v=this,u=d.gds(0),t=u.a
J.aV(t.save())
t.translate(e.a,e.b)
x=v.B
w=v.gC(0)
v.fP.i2(x,new A.a_K(u,w),new A.vi(v.aA,v.hW,v.cV,y.Q))
t.restore()},
Zh(d){var x=this,w=x.gC(0)
return new A.JW(x.fP.W_(d,w,new A.vi(x.aA,x.hW,x.cV,y.Q)))}}
A.a_6.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as,x.a,x.b,x.at]}}
A.Cb.prototype={
K(){return"AxisSide."+this.b}}
A.t6.prototype={}
A.pI.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.aaI.prototype={
gbH(){return[!1,0,0,0]}}
A.oO.prototype={
gbH(){return[this.b,this.a,this.c,!0]}}
A.ut.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.en.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.en))return!1
x=w.a
if(isNaN(x)&&isNaN(w.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===x&&e.b===w.b},
gu(d){return C.d.gu(this.a)^C.d.gu(this.b)}}
A.y1.prototype={
gbH(){var x=this
return[x.a,!0,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.pb.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.acd.prototype={
gbH(){return[this.a,this.b]}}
A.OZ.prototype={
gbH(){return[this.a,this.b]}}
A.mB.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.mY.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.kw.prototype={
gbH(){var x=this
return[x.e,x.w,x.a,x.c,x.d,x.f,x.r,x.x]}}
A.kY.prototype={
gbH(){var x=this
return[x.e,x.w,x.a,x.c,x.d,x.f,x.r,x.x]}}
A.a4o.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.acB.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.LP.prototype={
gbH(){return[this.a,this.b,!0]}}
A.us.prototype={}
A.M_.prototype={
acL(d,e,f){var x,w
$.af()
x=B.aQ()
w=this.a
x.r=w.gp(w)
x.b=C.bc
d.iO(f,this.b,x)},
gbH(){return[this.a,this.b,this.c,0]}}
A.afp.prototype={}
A.aft.prototype={}
A.aiu.prototype={}
A.aiK.prototype={}
A.aiL.prototype={}
A.aiN.prototype={}
A.aiO.prototype={}
A.ajA.prototype={}
A.ajz.prototype={}
A.ajB.prototype={}
A.amX.prototype={}
A.aoH.prototype={}
A.aoI.prototype={}
A.aqi.prototype={}
A.aqV.prototype={}
A.aqU.prototype={}
A.aqW.prototype={}
A.av0.prototype={
M0(d,e,f,g,h,i){return new B.is(this.aUl(d,e,f,g,h,i),y.g4)},
aUk(d,e,f,g){return this.M0(d,e,f,!0,g,!0)},
aUl(d,e,f,g,h,i){return function(){var x=d,w=e,v=f,u=g,t=h,s=i
var r=0,q=1,p=[],o,n,m,l,k,j
return function $async$M0(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)switch(r){case 0:n=$.lg().aim(t,v,w,x)
m=n===t
l=!s&&m?n+w:n
k=n+C.d.fK(v-t,w)*w===v
j=!u&&k?v-w:v
r=s&&!m?2:3
break
case 2:r=4
return a0.b=t,1
case 4:case 3:o=j+w/1e5
case 5:if(!(l<=o)){r=6
break}r=7
return a0.b=l,1
case 7:l+=w
r=5
break
case 6:r=u&&!k?8:9
break
case 8:r=10
return a0.b=v,1
case 10:case 9:return 0
case 1:return a0.c=p.at(-1),3}}}}}
A.JP.prototype={
a0z(){var x,w=this
$.af()
x=B.aQ()
x.b=C.aO
w.a=x
x=B.aQ()
x.b=C.bc
w.b=x
x=B.aQ()
x.b=C.bc
w.e=x
x=B.aQ()
x.b=C.aO
w.c=x
w.d=B.aQ()},
i2(d,e,f){var x=this
x.a_o(d,e,f)
x.aQq(e,f)
x.aQA(e,f)
x.aQz(e,f)},
aQz(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a3.a,a1=a0.c
if(!a1.a)return
x=a2.b
if(a1.f){w=a1.r
if(w==null)w=$.lg().O5(x.a,a0.r-a0.f)
v=$.bpy().M0(a0.w,w,a0.r,!1,a0.f,!1)
for(u=new B.f6(v.a(),v.$ti.i("f6<1>")),t=x.b,s=a1.w,r=a1.x;u.t();){q=u.b
if(!r.$1(q))continue
p=e.f8(q,x,a3)
o=new B.l(p,0)
n=new B.l(p,t)
m=s.$1(q)
q=e.a
q===$&&B.a()
l=m.a
k=m.b
j=B.kL(o,n)
if(k!=null){q.r=C.B.gp(0)
q.seQ(k.mI(0,j))}else{if(l==null)l=C.D
q.r=l.gp(l)
q.seQ(d)}l=m.c
q.c=l
if(l===0){q.seQ(d)
l=B.bX(q.r)
q.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}a2.D9(o,n,e.a,m.d)}}i=a1.c
if(i==null)i=$.lg().O5(x.b,a0.y-a0.x)
v=$.bpy().M0(a0.z,i,a0.y,!1,a0.x,!1)
for(u=new B.f6(v.a(),v.$ti.i("f6<1>")),s=a1.d,h=x.a,a1=a1.e;u.t();){r=u.b
if(!a1.$1(r))continue
g=s.$1(r)
f=e.dA(r,x,a3)
o=new B.l(0,f)
n=new B.l(h,f)
r=e.a
r===$&&B.a()
q=g.a
l=g.b
j=B.kL(o,n)
if(l!=null){r.r=C.B.gp(0)
r.seQ(l.mI(0,j))}else{if(q==null)q=C.D
r.r=q.gp(q)
r.seQ(d)}q=g.c
r.c=q
if(q===0){r.seQ(d)
q=B.bX(r.r)
r.r=B.aA(0,q.v()>>>16&255,q.v()>>>8&255,q.v()&255).gp(0)}a2.D9(o,n,e.a,g.d)}},
aQq(d,e){var x,w,v=e.a.as
if((v.v()>>>24&255)/255===0)return
x=d.b
w=this.b
w===$&&B.a()
w.r=v.gp(0)
d.a.h7(new B.D(0,0,0+x.a,0+x.b),this.b)},
aQA(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=d.b,m=e.a.e,l=m.b,k=l.length
if(k!==0)for(x=d.a.a,w=n.b,v=0;v<l.length;l.length===k||(0,B.J)(l),++v){u=l[v]
t=B.kL(new B.l(o.f8(u.a,n,e),0),new B.l(o.f8(u.b,n,e),w))
s=o.e
s===$&&B.a()
r=u.c
q=u.d
if(q!=null){s.r=C.B.gp(0)
s.seQ(q.mI(0,t))}else{s.r=(r==null?C.D:r).gp(0)
s.seQ(null)}p=o.e.ek()
x.drawRect(B.dF(t),p)
p.delete()}m=m.a
l=m.length
if(l!==0)for(k=d.a.a,x=n.a,v=0;v<m.length;m.length===l||(0,B.J)(m),++v){u=m[v]
t=B.kL(new B.l(0,o.dA(u.a,n,e)),new B.l(x,o.dA(u.b,n,e)))
w=o.e
w===$&&B.a()
s=u.c
r=u.d
if(r!=null){w.r=C.B.gp(0)
w.seQ(r.mI(0,t))}else{w.r=(s==null?C.D:s).gp(0)
w.seQ(null)}p=o.e.ek()
k.drawRect(B.dF(t),p)
p.delete()}},
aQy(d,e,f){var x,w
this.a_o(d,e,f)
x=e.b
w=f.a.at
if(w.a.length!==0)this.acM(d,e,f,x)
if(w.b.length!==0)this.aQF(d,e,f,x)},
acM(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=f.a.at.a,w=x.length,v=a0.a,u=a0.b,t=e.a,s=t.a,r=0;r<x.length;x.length===w||(0,B.J)(x),++r){q=x[r]
p=q.e
o=g.dA(p,a0,f)
n=new B.l(0,o)
p=g.dA(p,a0,f)
m=new B.l(v,p)
if(!(o<0||p<0||o>u||p>u)){o=g.c
o===$&&B.a()
l=q.a
k=q.b
j=B.kL(n,m)
if(k!=null){o.r=C.B.gp(0)
o.seQ(k.mI(0,j))}else{if(l==null)l=C.D
o.r=l.gp(l)
o.seQ(null)}l=q.c
o.c=l
if(l===0){o.seQ(null)
l=B.bX(o.r)
o.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}o.d=q.x
e.D9(n,m,g.c,q.d)
o=q.r
i=o.gdm(o).ez(0,2)
h=C.d.al(p,o.gbS(o).ez(0,2))
J.aV(s.save())
s.translate(i,h)
o=o.gMY().b
o===$&&B.a()
o=o.a
o===$&&B.a()
o=o.a
o.toString
s.drawPicture(o)
s.restore()
o=q.f
i=o.gdm(o).ez(0,2)
p=C.d.al(p,o.gbS(o).ez(0,2))
l=g.d
l===$&&B.a()
t.acN(0,o,new B.l(i,p),l)}}},
aQF(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(x=a1.a.at.b,w=x.length,v=a2.b,u=a2.a,t=a0.a,s=t.a,r=0;r<x.length;x.length===w||(0,B.J)(x),++r){q=x[r]
p=q.e
o=e.f8(p,a2,a1)
n=new B.l(o,0)
p=e.f8(p,a2,a1)
m=new B.l(p,v)
if(!(o<0||p<0||o>u||p>u)){o=e.c
o===$&&B.a()
l=q.a
k=q.b
j=B.kL(n,m)
if(k!=null){o.r=C.B.gp(0)
o.seQ(k.mI(0,j))}else{if(l==null)l=C.D
o.r=l.gp(l)
o.seQ(null)}l=q.c
o.c=l
if(l===0){o.seQ(null)
l=B.bX(o.r)
o.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}o.d=q.x
a0.D9(n,m,e.c,q.d)
o=q.r
i=o.gdm(o).ez(0,2)
h=o.gbS(o).ez(0,2)
g=C.d.al(p,i)
f=C.d.al(v,h)
J.aV(s.save())
s.translate(g,f)
o=o.gMY().b
o===$&&B.a()
o=o.a
o===$&&B.a()
o=o.a
o.toString
s.drawPicture(o)
s.restore()
o=q.f
i=o.gdm(o).ez(0,2)
h=o.gbS(o).ac(0,2)
p=C.d.al(p,i)
l=C.d.al(v,h)
k=e.d
k===$&&B.a()
t.acN(0,o,new B.l(p,l),k)}}},
f8(d,e,f){var x=f.a,w=x.f,v=x.r-w
if(v===0)return 0
return(d-w)/v*e.a},
dA(d,e,f){var x,w=f.a,v=w.x,u=w.y-v
if(u===0)return e.b
x=e.b
return x-(d-v)/u*x},
Zo(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.JQ.prototype={
gak6(){var x,w=this.d.d
if(!w.a)return!1
w=w.b.c
x=w.a&&w.c!==0
return x},
gak7(){var x,w=this.d.d
if(!w.a)return!1
w=w.d.c
x=w.a&&w.c!==0
return x},
gak8(){var x,w=this.d.d
if(!w.a)return!1
w=w.c.c
x=w.a&&w.c!==0
return x},
gak4(){var x,w=this.d.d
if(!w.a)return!1
w=w.e.c
x=w.a&&w.c!==0
return x},
akr(d){var x,w=this,v=null,u=w.d,t=A.br9(u.d),s=u.a
s=s.a&&A.bKl(s.b)?s.b:v
x=B.b([B.bn(v,w.c,C.q,v,v,new B.bd(v,v,s,v,v,v,C.H),v,v,v,t,v,v,v,v)],y.p)
t=new A.av2(x)
if(w.gak6())C.b.hs(x,t.$1(!0),new A.A2(D.Ap,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
if(w.gak8())C.b.hs(x,t.$1(!0),new A.A2(D.md,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
if(w.gak7())C.b.hs(x,t.$1(!0),new A.A2(D.Aq,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
if(w.gak4())C.b.hs(x,t.$1(!0),new A.A2(D.dv,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
return x},
A(d){return B.kE(new A.av1(this))}}
A.Qp.prototype={
Y(){return new A.WD(new B.ba(null,y.eF))}}
A.WD.prototype={
awy(){switch(this.a.c.a){case 0:return C.f_
case 1:return C.hn
case 2:return C.ej
case 3:return C.ho}},
ax3(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
awA(d){this.a.toString
return},
aw(){this.aP()
$.cx.x1$.push(this.ga3J())},
bb(d){this.bB(d)
$.cx.x1$.push(this.ga3J())},
A(d){var x,w=this,v=null,u=w.a
u.toString
x=w.ax3()
return B.bsW(B.aZw(0,B.bn(w.awy(),u.e,C.q,v,v,v,v,v,w.d,x,v,v,v,v)),C.p)}}
A.aaJ.prototype={
bl(d){return A.bKb(this.f,this.r,this.e)},
bx(d,e){var x=this.e
if(e.B!==x){e.B=x
e.a7()}x=this.f
if(e.V!==x){e.V=x
e.a7()}x=this.r
if(e.U!==x){e.U=x
e.a7()}}}
A.a_7.prototype={
hi(d){if(!(d.b instanceof B.hb))d.b=new B.hb(null,null,C.p)},
hP(d){if(this.B===C.aW)return this.xO(d)
return this.acn(d)},
aJc(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8i(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dw(d){var x=this.a8h(d,B.hp())
switch(this.B.a){case 0:return d.c1(new B.E(x.a,x.b))
case 1:return d.c1(new B.E(x.b,x.a))}},
a8h(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.B===C.aW?d.b:d.d,n=p.ag$
for(x=y.L,w=d.b,v=d.d,u=0,t=0;n!=null;){s=n.b
s.toString
x.a(s)
switch(p.B.a){case 0:r=B.fQ(v,null)
break
case 1:r=B.fQ(null,w)
break
default:r=null}q=e.$2(n,r)
t+=p.a8i(q)
u=Math.max(u,p.aJc(q))
n=s.aE$}return new A.baT(o<1/0?o:t,u)},
cu(){var x,w,v,u,t,s,r,q=this,p=y.k.a(B.H.prototype.ga6.call(q)),o=q.a8h(p,B.md()),n=o.a,m=o.b
switch(q.B.a){case 0:q.fy=p.c1(new B.E(n,m))
q.gC(0)
q.gC(0)
break
case 1:q.fy=p.c1(new B.E(m,n))
q.gC(0)
q.gC(0)
break}x=q.ag$
for(w=y.L,v=0;x!=null;){u=x.b
u.toString
w.a(u)
t=q.U[v]
s=x.fy
r=t.b-q.a8i(s==null?B.V(B.Z("RenderBox was not laid out: "+B.G(x).j(0)+"#"+B.c2(x))):s)/2
switch(q.B.a){case 0:s=new B.l(r,0)
break
case 1:s=new B.l(0,r)
break
default:s=null}u.a=s
x=u.aE$;++v}},
e8(d,e){return this.xP(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uP(d,e)},
l(){this.a2.sbh(0,null)
this.ann()}}
A.baT.prototype={}
A.av3.prototype={}
A.jC.prototype={
gbH(){return[this.a,this.b]}}
A.nq.prototype={}
A.afq.prototype={}
A.afr.prototype={
aN(d){var x,w,v
this.fj(d)
x=this.ag$
for(w=y.L;x!=null;){x.aN(d)
v=x.b
v.toString
x=w.a(v).aE$}},
aD(d){var x,w,v
this.fc(0)
x=this.ag$
for(w=y.L;x!=null;){x.aD(0)
v=x.b
v.toString
x=w.a(v).aE$}}}
A.afs.prototype={}
A.Sj.prototype={
l(){var x,w,v
for(x=this.Vy$,w=x.length,v=0;v<w;++v)x[v].l()
this.iu()}}
A.A2.prototype={
gov(){var x=this
switch(x.c.a){case 0:return x.d.d.b
case 1:return x.d.d.c
case 2:return x.d.d.d
case 3:return x.d.d.e}},
ghC(){switch(this.c.a){case 0:return C.ej
case 1:return C.ho
case 2:return C.f_
case 3:return C.hn}},
gaYV(){var x=this.d,w=A.br9(x.d),v=A.byq(x.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,w.b,0,w.d).ac(0,new B.ai(0,v.b,0,v.d))
case 1:case 3:return new B.ai(w.a,0,w.c,0).ac(0,new B.ai(v.a,0,v.c,0))}},
gah8(){var x=this.d,w=A.byq(x.a),v=A.br9(x.d)
switch(this.c.a){case 2:case 0:return v.gcY(0)+v.gd_(0)+(w.gcY(0)+w.gd_(0))
case 1:case 3:return v.gen()+w.gen()}},
aV5(d,e,f,g){var x,w,v,u,t,s,r,q=this,p=q.gov().c.d
if(p==null)p=$.lg().O5(d,f-e)
x=q.c
w=x!==D.md
if((!w||x===D.dv)&&q.d instanceof A.nr){v=y.B.a(q.d)
if(v.ch.length===0)return B.b([],y.g)
u=A.bqo(v,d)
x=new B.iH(u,B.ab(u).i("iH<1>"))
t=x.giB(x).eY(0,new A.aWv(v),y.W).fS(0)}else{s=$.bpy()
x=!w||x===D.dv
w=q.d
r=s.aUk(x?w.w:w.z,p,f,e)
w=B.nV(r,new A.aWw(q,f,e,d),r.$ti.i("t.E"),y.W)
t=B.P(w,B.j(w).i("t.E"))}x=B.ab(t).i("a9<1,nq>")
x=B.P(new B.a9(t,new A.aWx(q,e,f,p,g,d),x),x.i("au.E"))
return x},
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.gov()
x=k.gov()
x=x.c
x=!(x.a&&x.c!==0)
if(x)return B.bn(j,j,C.q,j,j,j,j,j,j,j,j,j,j,j)
x=k.c
w=x===D.md
v=!w
u=!v||x===D.dv
t=k.e
s=u?t.a:t.b
u=k.ghC()
t=!v||x===D.dv?C.aa:C.aW
r=B.b([],y.p)
if(x===D.Ap||w)k.gov()
if(k.gov().c.a){w=!v||x===D.dv?s:k.gov().c.c
q=!v||x===D.dv?k.gov().c.c:s
p=k.gaYV()
o=!v||x===D.dv?C.aW:C.aa
k.gah8()
n=k.gah8()
m=!v||x===D.dv
l=k.d
m=m?l.f:l.x
v=!v||x===D.dv?l.r:l.y
r.push(B.bn(j,A.bRo(new A.av3(),o,k.aV5(s-n,m,v,x)),C.q,j,j,j,j,q,j,p,j,j,j,w))}if(x===D.Aq||x===D.dv)k.gov()
return new B.eY(u,j,j,B.bMZ(r,C.o,t,j,C.f,C.O,0,j,j,C.dR),j)}}
A.a_m.prototype={
gbH(){return[this.a,this.b]}}
A.a3x.prototype={
gbH(){return[this.a,this.b]}}
A.M6.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a3z.prototype={
gaaH(d){return!1},
gbH(){return[!1,!1,!1,!1]}}
A.avy.prototype={}
A.aBQ.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.afJ.prototype={}
A.aiH.prototype={}
A.aiI.prototype={}
A.aiP.prototype={}
A.JZ.prototype={
i2(d,e,f){}}
A.vi.prototype={}
A.ha.prototype={
gdE(){return null},
gaeL(){var x,w=this
B.bu()
B.bu()
B.bu()
x=w instanceof A.M5
if(x)return!0
return!(w instanceof A.M2)&&!(w instanceof A.M1)&&!(w instanceof A.M3)&&!(w instanceof A.M0)&&!x&&!(w instanceof A.M4)}}
A.a3D.prototype={
gdE(){return this.a.b}}
A.a3E.prototype={
gdE(){return this.a.b}}
A.a3F.prototype={
gdE(){return this.a.b}}
A.M1.prototype={}
A.M2.prototype={}
A.a3I.prototype={
gdE(){return this.a.b}}
A.M4.prototype={}
A.M5.prototype={
gdE(){return this.a.b}}
A.a3C.prototype={
gdE(){return this.a.b}}
A.a3B.prototype={
gdE(){return this.a.b}}
A.M0.prototype={
gdE(){return this.a.b}}
A.a3G.prototype={
gdE(){return this.a.gdE()}}
A.a3H.prototype={
gdE(){return this.a.gdE()}}
A.M3.prototype={
gdE(){return this.a.gdE()}}
A.Fh.prototype={
Yj(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aec(){var x=this,w=null,v=x.ad=B.bs3(w,w)
v.ay=new A.aRN(x)
v.ch=new A.aRO(x)
v.CW=new A.aRP(x)
v.cy=new A.aRQ(x)
v.cx=new A.aRR(x)
v=x.aC=B.G5(w,-1,w)
v.B=new A.aRS(x)
v.a3=new A.aRT(x)
v.V=new A.aRU(x)
v=x.bz=B.a5y(w,x.a2,w)
v.p3=new A.aRV(x)
v.p4=new A.aRW(x)
v.RG=new A.aRX(x)},
cu(){var x=y.k.a(B.H.prototype.ga6.call(this))
this.fy=new B.E(x.b,x.d)},
dw(d){return new B.E(d.b,d.d)},
kH(d){return!0},
mS(d,e){var x,w=this
if(w.V==null)return
if(y.eo.b(d)){x=w.bz
x===$&&B.a()
x.rA(d)
x=w.aC
x===$&&B.a()
x.rA(d)
x=w.ad
x===$&&B.a()
x.rA(d)}else if(y.gJ.b(d))w.l4(new A.a3H(d))},
gMu(d){return new A.aRY(this)},
gMw(d){return new A.aRZ(this)},
l4(d){var x,w,v=this
if(v.V==null)return
x=d.gdE()
w=x!=null?v.Zh(x):null
v.V.$2(d,w)
v.a3=C.bm},
gKo(d){return this.a3},
gF6(){var x=this.am
x===$&&B.a()
return x},
aN(d){this.fj(d)
this.am=!0},
aD(d){this.am=!1
this.fc(0)},
$ije:1}
A.Nn.prototype={
Y(){return new A.Uv(B.b([],y.r),B.y(y.S,y.I),new A.aHI(B.y(y.x,y.dj)),null,null)}}
A.Uv.prototype={
A(d){var x,w=this,v=w.a3L(),u=w.CW
u.toString
u=w.aag(u.ar(0,w.ghA().gp(0)))
x=w.aag(v)
w.a.toString
return new A.JQ(new A.a5p(u,x,null),v,null)},
aag(d){var x,w
if(!d.cx.a)return d
x=d.ch
w=B.ab(x).i("a9<1,e_>")
x=B.P(new B.a9(x,new A.baY(this,d),w),w.i("au.E"))
return d.aP5(x,this.cy)},
a3L(){var x,w,v,u,t=this,s=t.a.r,r=s.f,q=isNaN(r)
if(q||isNaN(s.r)||isNaN(s.x)||isNaN(s.y)){x=t.dx.U5(s.ch)
if(q)r=x.a
q=s.r
if(isNaN(q))q=x.b
w=s.x
if(isNaN(w))w=x.c
v=s.y
s=s.aPk(q,isNaN(v)?x.d:v,r,w)}u=s.cx
if(u.a){t.cx=u.b
s=s.aOK(new A.DZ(u.e,u.f,u.r,u.w,!0,u.y,u.z,!0,t.gaxS(),u.c,u.d))}return s},
axT(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(d.gaeL())x=(e==null?null:e.a)==null||e.a.length===0
else x=!0
if(x){w.L(new A.baW(w))
return}w.L(new A.baX(w,e))},
nO(d){var x=this
x.CW=y.f3.a(d.$3(x.CW,x.a3L(),new A.baZ(x)))}}
A.pm.prototype={
WD(d,e,f){var x,w,v,u,t,s,r=B.aa(d.f,e.f,f),q=B.aa(d.r,e.r,f),p=B.aa(d.w,e.w,f),o=B.aa(d.x,e.x,f),n=B.aa(d.y,e.y,f),m=B.aa(d.z,e.z,f),l=B.X(d.as,e.as,f),k=e.a
k=A.a3y(B.a_x(d.a.b,k.b,f),k.a)
x=A.byo(d.at,e.at,f)
w=A.byr(d.c,e.c,f)
v=A.byt(d.d,e.d,f)
u=A.bAp(d.e,e.e,f)
t=A.kd(d.ch,e.ch,f,A.c_1(),y.cz)
t.toString
s=A.kd(d.CW,e.CW,f,A.c_0(),y.J)
s.toString
v=A.brH(l,p,m,s,k,e.Q,x,w,t,e.cx,q,n,r,o,u,e.cy,v)
return v},
UJ(d,e,f,g,h,i,j){var x=this,w=d==null?x.ch:d,v=e==null?x.cx:e,u=j==null?x.cy:j,t=h==null?x.f:h,s=f==null?x.r:f,r=i==null?x.x:i,q=g==null?x.y:g
return A.brH(x.as,x.w,x.z,x.CW,x.a,x.Q,x.at,x.c,w,v,s,q,t,r,x.e,u,x.d)},
aPk(d,e,f,g){return this.UJ(null,null,d,e,f,g,null)},
aOK(d){var x=null
return this.UJ(x,d,x,x,x,x,x)},
aP5(d,e){var x=null
return this.UJ(d,x,x,x,x,x,e)},
gbH(){var x=this
return[x.ch,x.CW,x.d,x.at,x.cx,x.cy,x.c,x.a,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as]}}
A.e_.prototype={
apV(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=null
try{m=C.b.qc(o.a,new A.aHH())}catch(x){}if(m!=null){for(w=o.a,v=w.length,u=n,t=u,s=t,r=s,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
if(p.k(0,D.fB))continue
if(r==null||p.a<r.a)r=p
if(t==null||p.a>t.a)t=p
if(s==null||p.b>s.b)s=p
if(u==null||p.b<u.b)u=p}r.toString
o.b!==$&&B.b4()
o.b=r
s.toString
o.c!==$&&B.b4()
o.c=s
t.toString
o.d!==$&&B.b4()
o.d=t
u.toString
o.e!==$&&B.b4()
o.e=u}},
ac3(d,e){var x=this,w=e==null?x.a:e,v=d==null?x.cx:d
return A.aHG(x.ch,x.x,x.ay,x.r,x.z,x.cy,x.CW,x.w,x.y,!1,x.at,!1,x.dy,!1,x.as,x.db,!0,v,w)},
aOR(d){return this.ac3(d,null)},
aOT(d){return this.ac3(null,d)},
gbH(){var x=this
return[x.a,!0,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,!1,x.ay,x.ch,x.CW,x.cx,x.cy,x.db,!1,x.dy]}}
A.No.prototype={
gbH(){return[this.a]}}
A.a_f.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,!1]}}
A.mk.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.JU.prototype={
gbH(){return[!1,this.b,this.c,!0]}}
A.y0.prototype={
gbH(){return[this.a,this.b,this.c]}}
A.aHs.prototype={
K(){return"LabelDirection."+this.b}}
A.a3A.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.DZ.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,!0,x.y,x.z]}}
A.a5q.prototype={
gbH(){return[4,C.hD,16,D.x3,0,120,A.c_3(),!1,!1,!1,0,C.A,A.c_2()]}}
A.mF.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.a,x.b]}}
A.pP.prototype={}
A.r8.prototype={
gbH(){return[this.a,this.b,C.cV,C.t,null]}}
A.t7.prototype={
gbH(){return[this.a,this.b]}}
A.FK.prototype={
gbH(){return[this.a]}}
A.Np.prototype={}
A.yJ.prototype={
hb(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WD(w,x,d)}}
A.afw.prototype={}
A.afx.prototype={}
A.afK.prototype={}
A.aiJ.prototype={}
A.aiM.prototype={}
A.akm.prototype={}
A.akn.prototype={}
A.ako.prototype={}
A.akq.prototype={}
A.akr.prototype={}
A.aks.prototype={}
A.akt.prototype={}
A.aoG.prototype={}
A.aqh.prototype={}
A.aHI.prototype={
U5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length===0)return D.xv
v=new A.yN(d,y.x)
u=this.a
if(u.aB(0,v)){u=u.h(0,v)
t=u.a
s=u.b
r=u.c
u=u.d
return new A.yK(t,s,r,u,!0)}x=null
try{x=C.b.qc(d,new A.aHJ())}catch(q){return D.xv}w=null
try{w=C.b.qc(x.a,new A.aHK())}catch(q){return D.xv}p=w.a
o=w.a
n=w.b
m=w.b
for(t=d.length,l=0;l<t;++l){k=d[l]
if(k.a.length===0)continue
s=k.d
s===$&&B.a()
j=s.a
if(j>o)o=j
s=k.b
s===$&&B.a()
i=s.a
if(i<p)p=i
s=k.c
s===$&&B.a()
h=s.b
if(h>m)m=h
s=k.e
s===$&&B.a()
g=s.b
if(g<n)n=g}f=new A.yK(p,o,n,m,!1)
u.m(0,v,f)
return f}}
A.yK.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.akp.prototype={}
A.aHL.prototype={
i2(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a3.a,a0=d.ch
if(a0.length===0)return
x=d.Q
if(x.gaaH(0)){w=a2.b
v=w.a
w=w.b
$.af()
a2.a.jm(new B.D(0,-40,0+(v+40),-40+(w+40)),B.aQ())
a2.aNK(new B.D(0,0,v,w))}e.a_n(a1,a2,a3)
for(w=d.CW,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)e.aQw(a2,d,w[u],a3)
t=B.b([],y.bC)
for(w=d.cx,v=w.f,s=0;s<a0.length;++s){r=a0[s]
e.aQs(a2,r,a3)
e.aQx(a2,r,a3)
e.akK(a1,a2,a3)
q=r.cx
p=v.$2(r,q)
o=J.Y(p)
if(o.gq(p)!==q.length)throw B.e(B.dA("indicatorsData and touchedSpotOffsets size should be same"))
for(n=r.a,m=0;m<q.length;++m){l=o.h(p,m)
k=q[m]
if(k<0||k>=n.length)continue
j=n[k]
if(l==null)continue
t.push(new A.v0(r,j,k,l))}}e.aQE(a2,t,a3)
if(x.gaaH(0))a2.a.a.restore()
for(a0=d.cy,w=w.e,x=y.Z,s=0;s<a0.length;++s){i=a0[s].a
if(i.length===0)continue
h=B.P(i,x)
g=h[0]
for(v=h.length,u=0;u<v;++u){f=h[u]
if(f.b>g.b)g=f}e.aQC(a1,a2,w,g,new A.FK(h),a3)}},
aQs(d,e,f){var x,w,v,u,t,s,r,q=this,p=d.b,o=A.br8(e.a)
for(x=o.length,w=0;w<o.length;o.length===x||(0,B.J)(o),++w){v=o[w]
u=q.YR(p,e,v,f)
t=q.aie(p,e,u,v,f)
s=q.YT(p,e,u,v,f,!0)
r=q.aid(p,e,u,v,f)
q.aQv(d,t,q.YQ(p,e,u,v,f,!0),f,e)
q.aQp(d,r,s,f,e)
q.aQt(d,u,e)
q.aQr(d,u,e,f)}},
aQw(a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.br8(a5.a),a8=A.br8(a6.a)
if(a7.length!==a8.length)throw B.e(B.bC("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a,x=a4.a,w=b1.c,v=b1.d,u=$.bR.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ab(n).i("cE<1>")
l=B.P(new B.cE(n,m),m.i("au.E"))
k=a2.YR(a3,a5,o,b2)
j=a2.YS(a3,a6.aOT(l),l,b2,k)
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
n=a2.f8(i,a3,b2)
m=a2.dA(h,a3,b2)
e=a2.f8(g,a3,b2)
d=a2.dA(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.B.gp(0)
a0.seQ(v.mI(0,new B.D(n,m,e,d)))}else{a0.r=(r?C.D:w).gp(0)
a0.seQ(null)}$.af()
a1=new B.mn(C.dj,C.bc,C.dO,C.ec,C.dB).ek()
n=B.dF(new B.D(0,0,t,s))
m=$.bR.b
if(m===$.bR)B.V(B.uY(u))
m=m.TileMode.Clamp
x.saveLayer.apply(x,[a1,n,null,null,m])
a1.delete()
a4.fO(j,a2.r)
x.restore()}},
aQx(d,e,f){var x,w,v,u,t,s,r,q,p,o=e.CW
if(!o.a||e.a.length===0)return
x=d.b
w=this.YX(e,x,f)
for(v=e.a,u=o.b,o=o.c,t=d.a,s=0;s<v.length;++s){r=v[s]
if(!r.k(0,D.fB)&&u.$2(r,e)){q=this.f8(r.a,x,f)
p=this.dA(r.b,x,f)
o.$4(r,q/w*100,e,s).acL(t,r,new B.l(q,p))}}},
aQE(b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b2.length===0)return
x=b1.b
C.b.fX(b2,new A.aHO())
for(w=b2.length,v=b3.a,u=b1.a,t=v.y,s=v.x,r=v.cx,q=r.y,r=r.z,p=0;p<b2.length;b2.length===w||(0,B.J)(b2),++p){o=b2[p]
n=o.a
m=b0.YX(n,x,b3)
l=o.d
k=o.c
j=o.e
i=b0.f8(k.a,x,b3)
h=b0.dA(k.b,x,b3)
g=j.b
f=g.a
e=B.ch()
if(f){g=e.b=g.c.$4(k,i/m*100,n,l)
if(g===e)B.V(B.r7(e.a))
d=g.b*2}else d=0
a0=Math.min(t,Math.max(s,B.lc(q.$2(n,l))))
a1=Math.min(t,Math.max(s,B.lc(r.$2(n,l))))
g=b0.dA(a0,x,b3)
a2=new B.l(i,g)
a3=b0.dA(a1,x,b3)
a4=new B.l(i,a3)
a5=d/2
a6=h-a5
a7=h+a5
if(a3>a6&&a3<a7)a4=g<a3?new B.l(i,a3-(a3-a6)):new B.l(i+0,a3+(a7-a3))
a8=j.a
g=b0.y
g===$&&B.a()
a3=a8.a
a5=a8.b
a9=B.kL(a2,a4)
if(a5!=null){g.r=C.B.gp(0)
g.seQ(a5.mI(0,a9))}else{if(a3==null)a3=C.D
g.r=a3.gp(a3)
g.seQ(null)}a3=a8.c
g.c=a3
if(a3===0){g.seQ(null)
a3=B.bX(g.r)
g.r=B.aA(0,a3.v()>>>16&255,a3.v()>>>8&255,a3.v()&255).gp(0)}b1.D9(a2,a4,b0.y,a8.d)
if(f){g=e.b
if(g===e)B.V(B.r7(e.a))
g.acL(u,k,new B.l(i,h))}}},
YS(d,e,f,g,h){var x=this.aif(d,e,f,g,h)
return x},
YR(d,e,f,g){return this.YS(d,e,f,g,null)},
aif(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a4==null,h=i?B.cC($.af().r):a4,g=J.Y(a2),f=g.gq(a2),e=j.f8(g.h(a2,0).a,a0,a3),d=j.dA(g.h(a2,0).b,a0,a3)
if(i){h.az(new B.f2(e,d))
if(f===1)h.az(new B.cs(e,d))}else h.az(new B.cs(e,d))
for(i=h.e,x=a1.y,w=a1.z,v=C.p,u=1;u<f;u=p,v=k){t=j.f8(g.h(a2,u).a,a0,a3)
s=j.dA(g.h(a2,u).b,a0,a3)
r=u-1
q=j.f8(g.h(a2,r).a,a0,a3)
r=j.dA(g.h(a2,r).b,a0,a3)
p=u+1
o=p<f
n=j.f8(g.h(a2,o?p:u).a,a0,a3)
m=j.dA(g.h(a2,o?p:u).b,a0,a3)
l=x?w:0
o=(n-q)/2*l
m=(m-r)/2*l
k=new B.l(o,m)
t=new B.KR(q+v.a,r+v.b,t-o,s-m,t,s)
i.push(t)
s=h.d
if(s!=null)t.hD(s)}return h},
YT(d,e,f,g,h,i){var x,w,v,u,t=this
$.af()
x=B.brF(f)
w=J.Y(g)
v=t.f8(w.h(g,w.gq(g)-1).a,d,h)
u=d.b
x.az(new B.cs(v,u))
v=t.f8(w.h(g,0).a,d,h)
x.az(new B.cs(v,u))
x.az(new B.cs(t.f8(w.h(g,0).a,d,h),t.dA(w.h(g,0).b,d,h)))
x.az(new B.oX())
return x},
aie(d,e,f,g,h){return this.YT(d,e,f,g,h,!1)},
YQ(d,e,f,g,h,i){var x,w,v,u=this
$.af()
x=B.brF(f)
w=J.Y(g)
v=u.f8(w.h(g,w.gq(g)-1).a,d,h)
x.az(new B.cs(v,0))
v=u.f8(w.h(g,0).a,d,h)
x.az(new B.cs(v,0))
x.az(new B.cs(u.f8(w.h(g,0).a,d,h),u.dA(w.h(g,0).b,d,h)))
x.az(new B.oX())
return x},
aid(d,e,f,g,h){return this.YQ(d,e,f,g,h,!1)},
aQv(d,e,f,g,h){var x,w,v,u,t,s=this,r=h.ay
if(!r.a)return
x=d.b
w=h.b
w===$&&B.a()
w=s.f8(w.a,x,g)
v=h.c
v===$&&B.a()
v=s.dA(v.b,x,g)
u=h.d
u===$&&B.a()
u=s.f8(u.a,x,g)
t=s.r
t===$&&B.a()
A.bs2(t,r.b,r.c,new B.D(w,v,u,x.b))
d.a.fO(e,s.r)},
aQp(d,e,f,g,h){var x,w,v,u,t,s=this,r=h.ch
if(!r.a)return
x=d.b
w=h.b
w===$&&B.a()
w=s.f8(w.a,x,g)
v=h.d
v===$&&B.a()
v=s.f8(v.a,x,g)
u=h.e
u===$&&B.a()
u=s.dA(u.b,x,g)
t=s.r
t===$&&B.a()
A.bs2(t,r.b,r.c,new B.D(w,0,v,u))
d.a.fO(e,s.r)},
aQt(d,e,f){var x=f.db,w=x.a,v=w.v()
if((v>>>24&255)/255===0)return
if(!new B.Nh(e,!1,B.b([],y.C)).t())return
v=this.f
v===$&&B.a()
v.d=f.at?C.jP:C.dO
v.e=C.ec
v.r=w.gp(0)
v.seQ(null)
v.c=f.x
v.r=w.gp(0)
$.lg()
v.z=new B.yS(C.aB,x.c*0.57735+0.5)
d.a.fO(B.brG(A.ays(e,f.cy),x.b),this.f)},
aQr(d,e,f,g){var x,w,v,u,t=this,s=d.b,r=t.f
r===$&&B.a()
r.d=f.at?C.jP:C.dO
r.e=C.ec
r=f.b
r===$&&B.a()
r=t.f8(r.a,s,g)
x=f.c
x===$&&B.a()
x=t.dA(x.b,s,g)
w=f.d
w===$&&B.a()
w=t.f8(w.a,s,g)
v=f.e
v===$&&B.a()
v=t.dA(v.b,s,g)
u=t.f
A.bs2(u,f.r,f.w,new B.D(r,x,w,v))
u.z=null
u.c=f.x
A.bPs(u)
d.a.fO(A.ays(e,f.cy),t.f)},
aQC(b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=b4.b,a9=B.b([],y.eg),b0=b7.a,b1=A.bEy(b0),b2=J.Y(b1)
if(b2.gq(b1)!==b0.length)throw B.e(B.dA("tooltipItems and touchedSpots size should be same"))
for(x=b8.c,w=0;w<b0.length;++w){v=b2.h(b1,w)
if(v==null)continue
u=$.lg().Zn(b3,v.b)
t=v.a
s=x.k(0,C.iz)?new B.k8(1):x
r=new B.t4(new B.hD(t,a7,a7,C.bm,a7,a7,a7,a7,a7,a7,u),C.cV,C.t,s,a7,a7,a7,a7,C.bw,a7)
r.af2(120)
a9.push(r)}b2=a9.length
if(b2===0)return
for(q=0,p=0,o=0;x=a9.length,o<x;a9.length===b2||(0,B.J)(a9),++o){x=a9[o].b
n=x.c
if(n>q)q=n
x=x.a.c
p+=x.gbS(x)}b2=a6.f8(b6.a,a8,b8)
u=a6.dA(b6.b,a8,b8)
m=q+C.hD.gen()
l=p+(x-1)*4+(C.hD.gcY(0)+C.hD.gd_(0))
k=u-l-16
j=a6.Zo(b2,m,D.x3,0)
b2=j+m
x=k+l
i=new B.aS(4,4)
h=B.F5(new B.D(j,k,b2,x),i,i,i,i)
g=b0[0]
for(u=b0.length,o=0;o<u;++o){f=b0[o]
if(f.b>g.b)g=f}b0=a6.z
b0===$&&B.a()
u=A.bEx(g)
b0.r=u.gp(u)
u=b2-j
x-=k
b0=$.lg().JV(new B.E(u,x),0).b
e=new B.l(0,b0)
d=new B.l(h.a,h.b)
a0=$.lg().JV(new B.E(u,x),0)
if(!C.A.k(0,C.A)){t=a6.Q
t===$&&B.a()
t.r=C.B.gp(0)
t.c=0}b4.Vk(0,new A.aHM(a6,b4,h),d,e,new B.E(u,x))
for(t=a9.length,s=j+u/2,a1=a0.b,b2-=16,a2=j+16,a3=8,o=0;o<a9.length;a9.length===t||(0,B.J)(a9),++o){r=a9[o]
a4=A.bRY(r.r,r.w)
A:{if(D.Dd===a4){a5=a2
break A}if(D.De===a4){a5=b2-r.b.c
break A}a5=s-r.b.c/2
break A}b4.Vk(0,new A.aHN(b4,r,new B.l(a5,k+a3-a1+b0)),d,e,new B.E(u,x))
a5=r.b.a.c
a3=a3+a5.gbS(a5)+4}},
YX(d,e,f){var x,w=d.a
if(w.length===0)return 0
x=this.f8(w[0].a,e,f)
return this.f8(w[w.length-1].a,e,f)-x},
W_(d,e,f){var x,w,v,u=B.b([],y.df)
for(x=f.a.ch,w=0;w<x.length;++w){v=this.aiH(e,d,x[w],w,f)
if(v!=null)u.push(v)}C.b.fX(u,new A.aHP())
return u.length===0?null:u},
aiH(d,e,f,g,h){var x,w,v,u,t,s,r,q,p=B.b([],y.U)
for(x=f.a,w=x.length,v=h.a.cx,u=v.r,v=v.w,t=null,s=0;s<x.length;x.length===w||(0,B.J)(x),++s){r=x[s]
if(r.k(0,D.fB))continue
q=v.$2(e,new B.l(this.f8(r.a,d,h),this.dA(r.b,d,h)))
if(q<=u){if(t==null)t=q
if(q<t){C.b.hs(p,0,r)
t=q}else p.push(r)}}if(p.length!==0){w=C.b.ga0(p)
t.toString
return new A.pP(t,f,g,C.b.ij(x,w),w.a,w.b)}else return null}}
A.v0.prototype={}
A.a5p.prototype={
bl(d){var x,w=this.e,v=B.bA(d,null,y.w).w.gcN(),u=new A.aHL()
u.a0z()
$.af()
x=B.aQ()
x.b=C.aO
u.f=x
x=B.aQ()
x.b=C.bc
u.r=x
x=B.aQ()
x.b=C.aO
u.w=x
x=B.aQ()
x.b=C.bc
x.r=C.D.gp(0)
x.a=D.ZZ
u.x=x
x=B.aQ()
x.b=C.aO
x.r=C.B.gp(0)
u.y=x
x=B.aQ()
x.b=C.bc
x.r=C.k.gp(0)
u.z=x
x=B.aQ()
x.b=C.aO
x.r=C.D.gp(0)
x.c=1
u.Q=x
u=new A.a9w(this.d,w,v,u,d,C.bm,new B.bl(),B.aG(y.v))
u.bj()
u.Yj(w.cx)
u.aec()
return u},
bx(d,e){e.sic(0,this.d)
e.sY4(this.e)
e.scN(B.bA(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9w.prototype={
sic(d,e){if(this.aA.k(0,e))return
this.aA=e
this.bd()},
sY4(d){var x=this
if(x.hW.k(0,d))return
x.hW=d
x.a07(d.cx)
x.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var x,w,v=this,u=d.gds(0),t=u.a
J.aV(t.save())
t.translate(e.a,e.b)
x=v.B
w=v.gC(0)
v.fP.i2(x,new A.a_K(u,w),new A.vi(v.aA,v.hW,v.cV,y.o))
t.restore()},
Zh(d){var x=this,w=x.gC(0)
return new A.Np(x.fP.W_(d,w,new A.vi(x.aA,x.hW,x.cV,y.o)))}}
A.Mv.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a_K.prototype={
aNK(d){this.a.a.clipRect(B.dF(d),$.oG()[1],!0)
return null},
acT(d,e){d.aM(this.a,e)},
Vk(d,e,f,g,h){var x,w,v,u,t=this.a,s=t.a
J.aV(s.save())
x=f.a
w=h.a/2
v=f.b
u=h.b/2
s.translate(g.a+x+w,g.b+v+u)
$.lg()
t.Y2(0,d*0.017453292519943295)
s.translate(-x-w,-v-u)
e.$0()
s.restore()},
D9(d,e,f,g){var x=B.cC($.af().r)
x.az(new B.f2(d.a,d.b))
x.az(new B.cs(e.a,e.b))
this.a.fO(A.ays(x,g),f)}}
A.yN.prototype={
gbH(){return[this.a]}}
A.akA.prototype={}
A.a_U.prototype={}
A.aZX.prototype={
JV(d,e){var x=d.a,w=e*0.017453292519943295,v=Math.sin(w),u=d.b,t=Math.cos(w)
return new B.l((x-(Math.abs(x*Math.cos(w))+Math.abs(u*Math.sin(w))))/2,(u-(Math.abs(x*v)+Math.abs(u*t)))/2)},
aVF(d,e){var x,w,v,u,t
if(d==null)return null
x=d.a
w=e/2
if(x.a>w||x.b>w)x=new B.aS(w,w)
v=d.b
if(v.a>w||v.b>w)v=new B.aS(w,w)
u=d.c
if(u.a>w||u.b>w)u=new B.aS(w,w)
t=d.d
return new B.d2(x,v,u,t.a>w||t.b>w?new B.aS(w,w):t)},
aVG(d,e){var x,w
if(d==null)return D.a_a
x=d.b
w=e/2
return d.aOW(x>w?w:x)},
O5(d,e){var x,w=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
x=e/w
if(w<=2)return x
return this.aYG(x)},
aYG(d){if(d<1)return this.aHR(d)
return this.a7n(d)},
aHR(d){var x,w,v,u,t,s,r
if(d<0.000001)return d
x=C.d.j(d)
w=x.length
v=w-2
for(u=0,t=2;t<=w;++t){if(x[t]!=="0")break;++u}s=v-u
if(s>2)v-=s-2
r=Math.pow(10,v)
return this.a7n(d*r)/r},
a7n(d){var x,w=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,w)
x=d>=10?C.d.b5(d)/10:d
if(x>=7.6)return 10*C.d.a4(Math.pow(10,w))
else if(x>=2.6)return 5*C.d.a4(Math.pow(10,w))
else if(x>=1.6)return 2*C.d.a4(Math.pow(10,w))
else return C.d.a4(Math.pow(10,w))},
aiv(d){if(d>=1)return 1
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
Zn(d,e){var x,w,v=d.P(y.f0)
if(v==null)v=C.iG
x=e.a?v.w.c2(e):e
w=B.bN(d,C.v1)
w=w==null?null:w.ay
return w===!0?x.c2(C.lW):x},
aim(d,e,f,g){var x=C.d.aj(g-d,f)
if(Math.abs(e-d)<=x)return d
if(x===0)return d
return d+x}}
A.Pi.prototype={
a3n(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st0(d){var x=this,w=x.ae
if(w===d)return
x.ae=d
if(x.a3n(w)||x.a3n(d))x.a7()
else{x.cP=x.D=null
x.bd()}},
shC(d){var x=this
if(x.aF.k(0,d))return
x.aF=d
x.G=x.cP=x.D=null
x.bd()},
scC(d){var x=this
if(x.dn==d)return
x.dn=d
x.G=x.cP=x.D=null
x.bd()},
dw(d){var x,w=this.D$
if(w!=null){x=w.ap(C.ad,C.iu,w.gdh())
switch(this.ae.a){case 6:return d.c1(new B.ar(0,d.b,0,d.d).xB(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xB(x)}}else return new B.E(B.K(0,d.a,d.b),B.K(0,d.c,d.d))},
e6(d,e){var x=this.D$
return x==null?null:x.fG(C.iu,e)},
cu(){var x,w,v=this,u=v.D$
if(u!=null){u.dD(C.iu,!0)
switch(v.ae.a){case 6:u=y.k
x=u.a(B.H.prototype.ga6.call(v))
w=new B.ar(0,x.b,0,x.d).xB(v.D$.gC(0))
v.fy=u.a(B.H.prototype.ga6.call(v)).c1(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:v.fy=y.k.a(B.H.prototype.ga6.call(v)).xB(v.D$.gC(0))
break}v.cP=v.D=null}else{u=y.k.a(B.H.prototype.ga6.call(v))
v.fy=new B.E(B.K(0,u.a,u.b),B.K(0,u.c,u.d))}},
Ti(){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.cP!=null)return
x=n.D$
if(x==null){n.D=!1
x=new B.c_(new Float64Array(16))
x.fV()
n.cP=x}else{w=n.G
if(w==null)w=n.G=n.aF
v=x.gC(0)
u=B.btX(n.ae,v,n.gC(0))
x=u.b
t=u.a
s=v.a
r=v.b
q=w.ys(t,new B.D(0,0,0+s,0+r))
p=n.gC(0)
o=w.ys(x,new B.D(0,0,0+p.a,0+p.b))
p=q.a
n.D=q.c-p<s||q.d-q.b<r
r=B.pq(o.a,o.b,0)
r.qO(x.a/t.a,x.b/t.b,1,1)
r.fT(-p,-q.b,0,1)
n.cP=r}},
a6j(d,e){var x,w,v,u,t=this,s=t.cP
s.toString
x=B.z1(s)
if(x==null){s=t.cx
s===$&&B.a()
w=t.cP
w.toString
v=B.hZ.prototype.gi1.call(t)
u=t.ch.a
return d.z0(s,e,w,v,u instanceof B.pQ?u:null)}else t.kq(d,e.ac(0,x))
return null},
aM(d,e){var x,w,v,u,t=this
if(t.D$==null||t.gC(0).gZ(0)||t.D$.gC(0).gZ(0))return
t.Ti()
x=t.D
x.toString
if(x&&t.eU!==C.q){x=t.cx
x===$&&B.a()
w=t.gC(0)
v=t.ch
u=v.a
u=u instanceof B.uc?u:null
v.sbh(0,d.o_(x,e,new B.D(0,0,0+w.a,0+w.b),t.gaFz(),t.eU,u))}else t.ch.sbh(0,t.a6j(d,e))},
e8(d,e){var x,w=this
if(!w.gC(0).gZ(0)){x=w.D$
x=x==null?null:x.gC(0).gZ(0)
x=x===!0}else x=!0
if(x)return!1
w.Ti()
return d.JE(new A.aS7(w),e,w.cP)},
tm(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eS(d,e){var x
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.Oy()
else{this.Ti()
x=this.cP
x.toString
e.fR(0,x)}}}
A.a3t.prototype={
bl(d){var x=new A.Pi(this.e,this.f,B.dY(d),C.q,null,new B.bl(),B.aG(y.v))
x.bj()
x.sc8(null)
return x},
bx(d,e){e.st0(this.e)
e.shC(this.f)
e.scC(B.dY(d))
if(C.q!==e.eU){e.eU=C.q
e.bd()
e.ct()}}}
A.oc.prototype={
ge3(d){return B.fn.prototype.ge3.call(this,0)}}
A.Im.prototype={}
A.QL.prototype={
d2(d){var x=null,w=this.$ti,v=w.i("iY<oc<1>>?"),u=w.i("fC<oc<1>>")
return new A.FU(new B.fC(B.by(0,x,!1,v),u),new B.fC(B.by(0,x,!1,v),u),this,B.f9(x,x,x,y.cB,y.aU),B.b([],y.j),w.i("FU<1>"))},
giE(){var x=this,w=x.ch
return w===$?x.ch=A.bX3(x,x.$ti.c):w}}
A.FU.prototype={
xI(d,e){var x=this,w=x.$ti,v=new A.oc(new B.id(w.i("id<ou<1>>")),w.i("Im<1>").a(x.d).ay.$1(x),w.i("oc<1>"))
x.go.sqA(0,new B.eU(v,w.i("eU<oc<1>>")))
x.k1=v.aaw(0,new A.aXo(x),!0)},
F4(d,e){return d==null?e!=null:d!==e},
o1(){var x,w,v=this
v.Gj()
x=v.k1
if(x!=null)x.$0()
v.k1=null
x=v.go
w=x.f
if(w!=null){w=w.gwb()
if(w!=null)w.l()}x.sqA(0,null)},
pi(d,e){this.Gk(d,e)
e.$1(this.id)
e.$1(this.go)},
$iabr:1}
A.WW.prototype={}
var z=a.updateTypes(["L(pR)","C(en)","~(w,fs)","L(e_,w)","bG(L,t6)","pb(L)","w(pP,pP)","C(fs)","U<nI>(cm<nI>)","H9(z,bO)","Ix(nJ)","Ht(nI)","v6(@)","e_(L)","L(L,pR)","at(L,t6)","vZ(@)","BW(@)","L(v6)","L(vZ)","~(ha,JW?)","xc(@)","L(i7)","pR(@)","~(w,i7)","~(@)","jC(nq)","c(nq)","jC(bB<w,L>)","jC(L)","nq(jC)","~(ha,Np?)","e_(e_)","ur(dO<ur>)","yJ(@)","Dj(dO<aCs>)","t7(w)","us(en,L,e_,w)","r8(mF)","C(e_)","w(v0,v0)","L(fs)","ls(abr<ls>)","pQ?(rn,l)","xZ(fb<z?>)","w(w,w,L)","i7(i7,i7,L)","mj(mj,mj,L)","Cc?(fs,w,i7,w)","F(fs)","c(L,t6)","en(en,en,L)","C(L)","mB(mB,mB,L)","mY(mY,mY,L)","kw(kw,kw,L)","kY(kY,kY,L)","h(kw)","h(kY)","e_(e_,e_,L)","mk(mk,mk,L)","us(en,L,e_,w{size:L?})","C(en,e_)","L(l,l)","u<t7>(e_,u<w>)","U<nJ>(cm<nJ>)","u<r8>(u<mF>)","F(mF)","fs(fs,fs,L)"])
A.aCp.prototype={
$1(d){var x=B.eq(y.f.a(d),y.N,y.z),w=x.h(0,"month")
return new A.pR(J.an(w==null?"":w),A.oA(x.h(0,"revenue_net")),A.oA(x.h(0,"expense_net")),A.oA(x.h(0,"result_net")))},
$S:z+23}
A.aCq.prototype={
$1(d){var x,w,v,u=B.eq(y.f.a(d),y.N,y.z),t=B.aq(u.h(0,"machine_id")),s=u.h(0,"label")
s=J.an(s==null?"unbekannt":s)
x=B.aq(u.h(0,"code"))
w=A.oA(u.h(0,"gross"))
v=B.bS(u.h(0,"purchases_count"))
v=v==null?null:C.d.a4(v)
if(v==null)v=0
return new A.v6(t,s,x,w,v,A.oA(u.h(0,"avg_basket")))},
$S:z+12}
A.aCr.prototype={
$1(d){var x,w=B.eq(y.f.a(d),y.N,y.z),v=B.aq(w.h(0,"product_id")),u=w.h(0,"name")
u=J.an(u==null?"unbekannt":u)
x=B.bS(w.h(0,"quantity"))
x=x==null?null:C.d.a4(x)
if(x==null)x=0
return new A.vZ(v,u,x,A.oA(w.h(0,"gross")))},
$S:z+16}
A.aCF.prototype={
$1(d){var x,w,v,u
y.c.a(d)
x=J.Y(d)
w=x.h(d,"code")
w=J.an(w==null?"":w)
v=x.h(d,"name")
v=J.an(v==null?"":v)
u=x.h(d,"direction")
return new A.BW(w,v,J.an(u==null?"expense":u),A.tM(x.h(d,"net")),A.tM(x.h(d,"tax")),A.tM(x.h(d,"gross")))},
$S:z+17}
A.bnm.prototype={
$1(d){return new A.ur(d.aH($.ci(),y.A))},
$S:z+33}
A.bnn.prototype={
$1(d){return new A.Dj(d.aH($.bJ4(),y.D))},
$S:z+35}
A.bp8.prototype={
$1(d){return E.br7()},
$S:z+42}
A.bno.prototype={
$1(d){var x=d.aH($.wV(),y.P)
return d.aH($.atq(),y.a).Fx(x)},
$S:z+65}
A.bnl.prototype={
$1(d){var x=d.aH($.wV(),y.P)
return d.aH($.atq(),y.a).Ft(x)},
$S:z+8}
A.aCo.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aZ(0,$.atq(),y.a).pw(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCn.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aZ(0,$.atq(),y.a).L_(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCD.prototype={
$0(){var x=0,w=B.r(y.H),v,u=this,t,s
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:t=u.a
s=$.bpX()
if(t.e==null)B.V(B.Z('Cannot use "ref" after the widget was disposed.'))
t.gcv().cr(s)
v=null
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCw.prototype={
$0(){return this.a.IW(this.b,this.c)},
$S:0}
A.aCx.prototype={
$0(){return this.a.AW(this.b,this.c)},
$S:0}
A.aCy.prototype={
$0(){return B.nO(this.a,"/finance/approvals",y.cK)},
$S:0}
A.aCz.prototype={
$0(){var x=this
return x.a.AX(x.b,x.c,x.d)},
$S:0}
A.aCC.prototype={
$0(){return D.aok},
$S:127}
A.aCB.prototype={
$2(d,e){return new A.H9(B.i(d),null)},
$S:z+9}
A.aCA.prototype={
$1(d){return new A.Ix(d,null)},
$S:z+10}
A.aCv.prototype={
$1(d){var x=null,w=this.a,v=$.eh()
w=B.m("Die Finanzauswertung f\xfcr "+v.aG(w.a)+" \u2013 "+v.aG(w.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",x,x,x,x,x,x,x)
v=this.b
return B.ni(B.b([B.dW(C.df,x,x,new A.aCt(v),x,x),B.e9(F.uH,new A.aCu(v),B.em(C.m,C.h,x,x,x,x,x))],y.p),w,F.uI)},
$S:54}
A.aCt.prototype={
$0(){B.bt(this.a,!1).dr(!1)
return null},
$S:0}
A.aCu.prototype={
$0(){B.bt(this.a,!1).dr(!0)
return null},
$S:0}
A.bd9.prototype={
$0(){var x=this.a.aZ(0,$.wV().giE(),y.V),w=E.br7()
x.OY(0,w)
return w},
$S:0}
A.bda.prototype={
$0(){var x=this.a.aZ(0,$.wV().giE(),y.V),w=new B.bi(Date.now(),0,!1),v=new E.ls(B.bK(B.aX(w),1,1,0,0,0,0),w)
x.OY(0,v)
return v},
$S:0}
A.bdb.prototype={
$0(){return this.a.Ij(this.b,this.c)},
$S:0}
A.bd8.prototype={
$2(d,e){return new B.oi(B.T(d).aOh(B.T(d).ax.aPa(C.h,C.m)),e,null)},
$S:980}
A.bix.prototype={
$2(d,e){var x=null,w=e.b<380?1:2,v=this.a.c,u=$.eN(),t=A.N9(!1,D.DV,"Umsatz 7 %",u.aG(v.a),x),s=A.N9(!1,D.DV,"Umsatz 19 %",u.aG(v.b),x),r=A.N9(!0,D.a8j,"Umsatz netto",u.aG(v.c),x),q=A.N9(!1,D.a8i,"Aufwand",u.aG(v.d),x),p=v.e,o=u.aG(p)
return E.brm(1.7,B.b([t,s,r,q,A.N9(!0,C.nq,"Ergebnis",o,p<0?C.ak:C.b0),A.N9(!1,C.iW,"USt-Saldo",u.aG(v.f-v.r),x)],y.p),w,12,12,F.u0,!0)},
$S:180}
A.aHr.prototype={
$0(){return D.aoi},
$S:127}
A.aHq.prototype={
$2(d,e){var x=null
return B.c1(C.ak,B.m("KPIs konnten nicht geladen werden: "+B.i(d),x,x,x,B.N(C.h,13,C.n),x,x,x),C.hy,x,C.J,x,3)},
$S:328}
A.aHp.prototype={
$1(d){return new A.Ht(d,null)},
$S:z+11}
A.baN.prototype={
$2(d,a0){var x,w,v,u,t,s=this,r=null,q=a0.b<480,p=q?2:3,o=q?1.05:1.1,n=s.a,m=n.c,l=m.a,k=$.eN(),j=k.aG(l.c),i=m.w,h=m.d,g=B.ab(h).i("a9<1,L>"),f=g.i("au.E"),e=B.P(new B.a9(h,new A.baD(),g),f)
j=A.tt(i.f,i.e,!1,"Umsatz (netto)",!1,r,r,r,r,e,j)
e=k.aG(s.b)
x=B.P(new B.a9(h,new A.baE(),g),f)
e=A.tt(r,r,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,x,e)
l=k.aG(l.e)
x=B.P(new B.a9(h,new A.baF(),g),f)
l=A.tt(i.w,i.r,!0,"Ergebnis (netto)",!1,r,r,r,r,x,l)
x=C.d.an(i.b,1)
w=B.P(new B.a9(h,new A.baG(),g),f)
x=A.tt(r,r,!1,"Umsatzrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,w,x+" %")
w=C.d.an(i.a,1)
v=B.P(new B.a9(h,new A.baH(),g),f)
w=A.tt(r,r,!1,"Rohertragsmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,v,w+" %")
v=C.d.an(s.c,1)
u=B.P(new B.a9(h,new A.baI(),g),f)
v=A.tt(r,r,!1,"Wareneinsatzquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,u,v+" %")
u=C.d.an(i.c,1)
t=B.P(new B.a9(h,new A.baJ(),g),f)
u=A.tt(r,r,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",r,r,r,t,u+" %")
i=k.aG(i.d)
t=B.P(new B.a9(h,new A.baK(),g),f)
i=A.tt(r,r,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",r,r,r,t,i)
m=k.aG(m.r.d)
n=B.P(new B.a9(h,new A.baL(n),g),f)
n=A.tt(r,r,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,n,m)
m=s.d
k=C.d.an(m,1)
m=B.P(new B.a9(h,new A.baM(m),g),f)
return E.brm(o,B.b([j,e,l,x,w,v,u,i,n,A.tt(r,r,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,m,k)],y.p),p,12,12,F.u0,!0)},
$S:180}
A.baD.prototype={
$1(d){return d.b},
$S:z+0}
A.baE.prototype={
$1(d){return d.b/30},
$S:z+0}
A.baF.prototype={
$1(d){return d.d},
$S:z+0}
A.baG.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.baH.prototype={
$1(d){var x=d.b
return x>0?(x-d.c)/x*100:0},
$S:z+0}
A.baI.prototype={
$1(d){var x=d.b
return x>0?d.c/x*100:0},
$S:z+0}
A.baJ.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.baK.prototype={
$1(d){return d.d},
$S:z+0}
A.baL.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.baM.prototype={
$1(d){return this.a},
$S:z+0}
A.bi0.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bi1.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bi2.prototype={
$1(d){return A.aHG(null,1.4,null,C.ak,0.35,D.ae2,D.D4,null,!1,!1,!1,!1,D.En,!1,10,D.XK,!0,C.l5,B.b([new A.en(0,d),new A.en(this.a,d)],y.U))},
$S:z+13}
A.b26.prototype={
$2(d,e){var x=e.b,w=e.c,v=x>w?x:w
return v>d?v:d},
$S:z+14}
A.b28.prototype={
$2(d,e){var x=null
return B.m(this.a.aJ2(d),x,x,x,B.N(C.x,10,C.Q),x,x,x)},
$S:z+15}
A.b29.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=this.a.length)return C.zp
return new B.ah(C.kC,B.m(C.c.cT(this.a[w].a,5),x,x,x,B.N(C.x,9,C.Q),x,x,x),x)},
$S:z+4}
A.b27.prototype={
$1(d){return D.a7f},
$S:z+5}
A.b2S.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b2T.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b2U.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b2V.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=3)return C.zp
return new B.ah(C.kC,B.m(this.a[w],x,x,x,B.N(C.h,12,C.v),x,x,x),x)},
$S:z+4}
A.bbg.prototype={
$1(d){return d.d},
$S:z+18}
A.bbh.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bjO.prototype={
$1(d){return d.d},
$S:z+19}
A.bjP.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b0N.prototype={
$0(){var x=this.b.a,w=x.d,v=x.f,u=this.a.cy
u.a8(0)
u.m(0,w,B.b([v],y.t))},
$S:0}
A.b0O.prototype={
$1(d){return new A.xc(y.B.a(d),this.a.a.r)},
$S:z+21}
A.avj.prototype={
$1(d){return d.e},
$S:z+22}
A.avk.prototype={
$2(d,e){return d+e},
$S:45}
A.avm.prototype={
$1(d){return d.c.length!==0},
$S:z+7}
A.avo.prototype={
$2(d,e){var x=this,w=e.e,v=x.d,u=x.a
x.b.push(x.c-v.gdm(0)/2+u.a+w/2)
u.a=u.a+(w+v.d)},
$S:z+24}
A.avp.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=w.a,s=t.w
s===$&&B.a()
x=v.a
x.eL(u,s)
t=t.x
t===$&&B.a()
x.eL(u,t)
v.acT(w.d,w.e)},
$S:0}
A.av2.prototype={
$1(d){return 0},
$S:981}
A.av1.prototype={
$2(d,e){return B.fF(C.c3,this.a.akr(e),C.r,C.bA,null)},
$S:982}
A.aWt.prototype={
$1(d){return d.a},
$S:z+26}
A.aWu.prototype={
$1(d){return d.b},
$S:z+27}
A.aWv.prototype={
$1(d){return new A.jC(this.a.ch[d.a].a,d.b)},
$S:z+28}
A.aWw.prototype={
$1(d){var x=this,w=x.c,v=x.b-w,u=v>0?(d-w)/v:0
w=x.a.c
if(!(w===D.md||w===D.dv))u=1-u
return new A.jC(d,u*x.d)},
$S:z+29}
A.aWx.prototype={
$1(d){var x,w,v,u,t=this,s=t.a,r=s.gov(),q=d.a
s.gov()
s=$.lg()
x=q<0
w=x?Math.abs(q):q
if(w>=1e9){v=C.d.an(w/1e9,1)
u="B"}else if(w>=1e6){v=C.d.an(w/1e6,1)
u="M"}else if(w>=1000){v=C.d.an(w/1000,1)
u="K"}else{v=C.d.an(w,s.aiv(Math.abs(t.b-t.c)))
u=""}if(C.c.hF(v,".0"))v=C.c.a1(v,0,v.length-2)
if(x)v="-"+v
if(v==="-0")v="0"
return new A.nq(d,r.c.b.$2(q,new A.t6(v+u,t.e)))},
$S:z+30}
A.aRN.prototype={
$1(d){this.a.l4(new A.a3D(d))},
$S:156}
A.aRO.prototype={
$1(d){this.a.l4(new A.a3E(d))},
$S:41}
A.aRP.prototype={
$1(d){this.a.l4(new A.a3F(d))},
$S:28}
A.aRQ.prototype={
$0(){this.a.l4(D.a0J)},
$S:0}
A.aRR.prototype={
$1(d){this.a.l4(new A.M2())},
$S:42}
A.aRS.prototype={
$1(d){this.a.l4(new A.a3I(d))},
$S:44}
A.aRT.prototype={
$0(){this.a.l4(D.a0K)},
$S:0}
A.aRU.prototype={
$1(d){this.a.l4(new A.M5(d))},
$S:102}
A.aRV.prototype={
$1(d){this.a.l4(new A.a3C(d))},
$S:145}
A.aRW.prototype={
$1(d){this.a.l4(new A.a3B(d))},
$S:141}
A.aRX.prototype={
$1(d){return this.a.l4(new A.M0(d))},
$S:139}
A.aRY.prototype={
$1(d){return this.a.l4(new A.a3G(d))},
$S:60}
A.aRZ.prototype={
$1(d){return this.a.l4(new A.M3(d))},
$S:55}
A.baY.prototype={
$1(d){var x=this.a.db.h(0,C.b.ij(this.b.ch,d))
return d.aOR(x==null?B.b([],y.t):x)},
$S:z+32}
A.baW.prototype={
$0(){var x=this.a
C.b.a8(x.cy)
x.db.a8(0)},
$S:0}
A.baX.prototype={
$0(){var x,w,v,u,t,s,r=this.b.a
r.toString
x=B.P(r,y.dw)
C.b.fX(x,new A.baV())
w=this.a
v=w.db
v.a8(0)
for(u=y.t,t=0;t<r.length;++t){s=r[t]
v.m(0,s.d,B.b([s.e],u))}r=w.cy
C.b.a8(r)
r.push(new A.FK(x))},
$S:0}
A.baV.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+6}
A.baZ.prototype={
$1(d){return new A.yJ(y.hf.a(d),this.a.a.r)},
$S:z+34}
A.aHH.prototype={
$1(d){return!d.k(0,D.fB)},
$S:z+1}
A.bnb.prototype={
$1(d){var x,w={},v=this.a,u=v.w,t=u==null?null:C.b.ga0(u.a)
if(t==null)t=v.r
u=v.CW.a
x=A.bys(u?A.btJ(v.a[d],0,v):t,null,null,4)
w.a=10
if(u)w.a=7.2
return new A.t7(x,new A.y0(!0,A.but(),new A.bna(w)))},
$S:z+36}
A.bna.prototype={
$4(d,e,f,g){var x=this.a.a
return A.bMX(A.btJ(d,e,f),x,A.bVy(d,e,f))},
$S:z+37}
A.bn8.prototype={
$1(d){var x,w=null,v=d.c,u=v.w
u=u==null?w:C.b.ga0(u.a)
v=u==null?v.r:u
x=B.iS(w,w,v==null?D.da:v,w,w,w,w,w,w,w,w,14,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w)
return new A.r8(C.d.j(d.b),x)},
$S:z+38}
A.aHJ.prototype={
$1(d){return d.a.length!==0},
$S:z+39}
A.aHK.prototype={
$1(d){return!d.k(0,D.fB)},
$S:z+1}
A.aHO.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+40}
A.aHM.prototype={
$0(){var x,w=this.c,v=this.a,u=v.z
u===$&&B.a()
x=this.b.a
x.eL(w,u)
v=v.Q
v===$&&B.a()
x.eL(w,v)},
$S:0}
A.aHN.prototype={
$0(){this.a.acT(this.b,this.c)},
$S:0}
A.aHP.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+6}
A.avc.prototype={
$1(d){return d.gdm(0)},
$S:z+41}
A.avd.prototype={
$2(d,e){return d+e},
$S:45}
A.avg.prototype={
$0(){var x={},w=this.b.ch,v=w.length
x.a=0
new B.iH(w,B.ab(w).i("iH<1>")).aq(0,new A.avh(x,this.a/(v+1),this.c))},
$S:0}
A.avh.prototype={
$2(d,e){var x=this.a,w=x.a+this.b
x.a=w
w=x.a=w+e.gdm(0)/2
this.c[d]=w
x.a=w+e.gdm(0)/2},
$S:z+2}
A.ave.prototype={
$2(d,e){var x=this.a,w=x.a=x.a+e.gdm(0)/2,v=d!==0?x.a=w+this.b:w
this.c[d]=v
x.a=v+e.gdm(0)/2},
$S:z+2}
A.avf.prototype={
$2(d,e){var x=this.a,w=this.b,v=x.a+w
x.a=v
v=x.a=v+e.gdm(0)/2
this.c[d]=v
v+=e.gdm(0)/2
x.a=v
x.a=v+w},
$S:z+2}
A.aET.prototype={
$2(d,e){var x=this.b.a.length
C.b.E(this.a.a,1/(x-1)*d)},
$S:983}
A.ayt.prototype={
$1(d){return d},
$S:984}
A.aS7.prototype={
$2(d,e){return this.a.Ai(d,e)},
$S:20}
A.bmp.prototype={
$1(d){return this.a.i("FU<0>").a(d).go},
$S(){return this.a.i("fC<oc<0>>(cp<0>)")}}
A.aXo.prototype={
$1(d){var x=this.a
x.id.sqA(0,x.go.f)
x.L(d)},
$S(){return this.a.$ti.i("~(1)")}};(function aliases(){var x=A.JP.prototype
x.a_n=x.i2
x.akK=x.aQy
x.akL=x.acM
x=A.Sj.prototype
x.ann=x.l
x=A.JZ.prototype
x.a_o=x.i2
x=A.Fh.prototype
x.a07=x.Yj})();(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff,u=a._static_2,t=a._instance_1u
x(A,"bZ7","bMU",44)
w(A.Sl.prototype,"gar9","ara",20)
v(A,"bXZ",3,null,["$3"],["bKe"],68,0)
v(A,"bY_",3,null,["$3"],["bKf"],46,0)
v(A,"bY0",3,null,["$3"],["bKg"],47,0)
v(A,"bY2",4,null,["$4"],["bYL"],48,0)
x(A,"bY1","bYK",49)
u(A,"btY","bYM",50)
v(A,"bXU",3,null,["$3"],["bMY"],51,0)
x(A,"YP","c08",52)
x(A,"asM","bYP",5)
v(A,"bXW",3,null,["$3"],["bNJ"],53,0)
v(A,"bXY",3,null,["$3"],["bSR"],54,0)
v(A,"bXV",3,null,["$3"],["bNI"],55,0)
v(A,"bXX",3,null,["$3"],["bSQ"],56,0)
x(A,"c7d","bNH",57)
x(A,"c7e","bSP",58)
t(A.WD.prototype,"ga3J","awA",25)
w(A.Uv.prototype,"gaxS","axT",31)
v(A,"c_1",3,null,["$3"],["bOd"],59,0)
v(A,"c_0",3,null,["$3"],["bKi"],60,0)
x(A,"c_4","c09",1)
v(A,"bEV",4,null,["$5$size","$4"],["bDn",function(d,e,f,g){return A.bDn(d,e,f,g,null)}],61,0)
u(A,"but","c07",62)
u(A,"bEW","bXH",63)
u(A,"bEZ","bYS",64)
u(A,"bEY","bYO",3)
u(A,"bEX","bYN",3)
x(A,"c_3","bEy",66)
x(A,"c_2","bEx",67)
w(A.Pi.prototype,"gaFz","a6j",43)
v(A,"YU",3,null,["$3"],["c__"],45,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.a_,[A.a5b,A.aeK,A.ajK,A.I1,A.Ix,A.aeI,A.H9,A.Ht,A.aj4,A.akf,A.Tm,A.ap2,A.ag7,A.ago,A.akJ,A.aha,A.Il,A.aqe,A.TL,A.JQ,A.A2])
v(B.z,[A.ur,A.Dj,A.b8,A.afJ,A.afz,A.afB,A.afC,A.afu,A.aiP,A.afF,A.afD,A.avy,A.aqi,A.avl,A.afA,A.JZ,A.a4d,A.t6,A.aoI,A.aoH,A.aft,A.aiO,A.en,A.aiL,A.aiN,A.amX,A.ajB,A.aqW,A.aiM,A.aiu,A.aiK,A.av0,A.baT,A.av3,A.afq,A.nq,A.aiH,A.aiI,A.vi,A.ha,A.akn,A.akq,A.afw,A.afK,A.afx,A.aiJ,A.akt,A.akr,A.aqh,A.aoG,A.aHI,A.akp,A.v0,A.a_K,A.akA,A.a_U,A.aZX])
v(B.up,[A.pR,A.v6,A.vZ,A.axS,A.ayZ,A.nI,A.BW,A.nJ])
v(B.nv,[A.aCp,A.aCq,A.aCr,A.aCF,A.bnm,A.bnn,A.bp8,A.bno,A.bnl,A.aCA,A.aCv,A.aHp,A.baD,A.baE,A.baF,A.baG,A.baH,A.baI,A.baJ,A.baK,A.baL,A.baM,A.bi2,A.b27,A.b2S,A.b2T,A.bbg,A.bjO,A.b0O,A.avj,A.avm,A.av2,A.aWt,A.aWu,A.aWv,A.aWw,A.aWx,A.aRN,A.aRO,A.aRP,A.aRR,A.aRS,A.aRU,A.aRV,A.aRW,A.aRX,A.aRY,A.aRZ,A.baY,A.baZ,A.aHH,A.bnb,A.bna,A.bn8,A.aHJ,A.aHK,A.avc,A.ayt,A.bmp,A.aXo])
v(B.fn,[A.xZ,A.oc])
v(B.xr,[A.aCo,A.aCn,A.aCD,A.aCw,A.aCx,A.aCy,A.aCz,A.aCC,A.aCt,A.aCu,A.bd9,A.bda,A.bdb,A.aHr,A.b0N,A.avp,A.aRQ,A.aRT,A.baW,A.baX,A.aHM,A.aHN,A.avg])
v(B.xy,[A.y_,A.alU,A.a5c])
v(B.xs,[A.aCB,A.bd8,A.bix,A.aHq,A.baN,A.bi0,A.bi1,A.b26,A.b28,A.b29,A.b2U,A.b2V,A.bbh,A.bjP,A.avk,A.avo,A.av1,A.baV,A.aHO,A.aHP,A.avd,A.avh,A.ave,A.avf,A.aET,A.aS7])
v(B.MI,[A.JV,A.Nn])
v(B.x4,[A.Sl,A.Uv])
u(A.a_m,A.afJ)
u(A.afp,A.a_m)
u(A.a_6,A.afp)
v(A.a_6,[A.afy,A.ako])
u(A.nr,A.afy)
v(B.H8,[A.ava,A.acb,A.Cb,A.aBQ,A.aHs,A.Mv])
u(A.fs,A.afz)
u(A.i7,A.afB)
u(A.mj,A.afC)
u(A.a_d,A.afu)
u(A.M6,A.aiP)
v(A.M6,[A.afE,A.aks])
u(A.a_i,A.afE)
u(A.a_j,A.afF)
u(A.Cc,A.afD)
v(A.avy,[A.JW,A.Np])
u(A.acd,A.aqi)
u(A.afG,A.acd)
u(A.a_k,A.afG)
v(B.b6,[A.xc,A.yJ])
u(A.u4,A.afA)
u(A.JP,A.JZ)
v(A.JP,[A.avn,A.aHL])
v(B.Nj,[A.a_g,A.a5p])
v(B.I,[A.Fh,A.afr])
v(A.Fh,[A.a9j,A.a9w])
u(A.pI,A.aoI)
u(A.aaI,A.aoH)
u(A.oO,A.aft)
u(A.ut,A.aiO)
u(A.y1,A.aiL)
u(A.pb,A.aiN)
u(A.OZ,A.amX)
u(A.mB,A.ajB)
u(A.mY,A.aqW)
v(A.pb,[A.ajA,A.aqV])
u(A.kw,A.ajA)
u(A.kY,A.aqV)
u(A.a3A,A.aiM)
v(A.a3A,[A.ajz,A.aqU])
u(A.a4o,A.ajz)
u(A.acB,A.aqU)
u(A.LP,A.aiu)
u(A.us,A.aiK)
u(A.M_,A.us)
u(A.Qp,B.O)
u(A.WD,B.a0)
u(A.aaJ,B.fU)
u(A.afs,A.afr)
u(A.Sj,A.afs)
u(A.a_7,A.Sj)
u(A.jC,A.afq)
u(A.a3x,A.aiH)
u(A.a3z,A.aiI)
v(A.ha,[A.a3D,A.a3E,A.a3F,A.M1,A.M2,A.a3I,A.M4,A.M5,A.a3C,A.a3B,A.M0,A.a3G,A.a3H,A.M3])
u(A.pm,A.ako)
u(A.e_,A.akn)
u(A.No,A.akq)
u(A.a_f,A.afw)
u(A.mk,A.afK)
u(A.JU,A.afx)
u(A.y0,A.aiJ)
u(A.DZ,A.aks)
u(A.a5q,A.akt)
u(A.akm,A.en)
u(A.mF,A.akm)
u(A.pP,A.mF)
u(A.r8,A.akr)
u(A.t7,A.aqh)
u(A.FK,A.aoG)
u(A.yK,A.akp)
u(A.yN,A.akA)
u(A.Pi,B.Pv)
u(A.a3t,B.bG)
u(A.Im,B.dq)
u(A.WW,A.Im)
u(A.QL,A.WW)
u(A.FU,B.cp)
x(A.afu,A.b8)
x(A.afy,A.b8)
x(A.afz,A.b8)
x(A.afB,A.b8)
x(A.afC,A.b8)
x(A.afD,A.b8)
x(A.afE,A.b8)
x(A.afF,A.b8)
x(A.afG,A.b8)
x(A.afA,A.b8)
x(A.afp,A.b8)
x(A.aft,A.b8)
x(A.aiu,A.b8)
x(A.aiK,A.b8)
x(A.aiL,A.b8)
x(A.aiN,A.b8)
x(A.aiO,A.b8)
x(A.ajA,A.b8)
x(A.ajz,A.b8)
x(A.ajB,A.b8)
x(A.amX,A.b8)
x(A.aoH,A.b8)
x(A.aoI,A.b8)
x(A.aqi,A.b8)
x(A.aqV,A.b8)
x(A.aqU,A.b8)
x(A.aqW,A.b8)
x(A.afq,A.b8)
w(A.afr,B.aB)
x(A.afs,B.dV)
w(A.Sj,B.a2y)
x(A.afJ,A.b8)
x(A.aiH,A.b8)
x(A.aiI,A.b8)
x(A.aiP,A.b8)
x(A.afw,A.b8)
x(A.afx,A.b8)
x(A.afK,A.b8)
x(A.aiJ,A.b8)
x(A.aiM,A.b8)
x(A.akm,A.b8)
x(A.akn,A.b8)
x(A.ako,A.b8)
x(A.akq,A.b8)
x(A.akr,A.b8)
x(A.aks,A.b8)
x(A.akt,A.b8)
x(A.aoG,A.b8)
x(A.aqh,A.b8)
x(A.akp,A.b8)
x(A.akA,A.b8)
x(A.WW,B.qj)})()
B.bk0(b.typeUniverse,JSON.parse('{"a5b":{"a_":[],"c":[]},"Dj":{"aCs":[]},"xZ":{"fn":["bc<~>"],"fn.T":"bc<~>"},"Ix":{"a_":[],"c":[]},"H9":{"a_":[],"c":[]},"y_":{"bs":[],"O":[],"c":[]},"aeK":{"a_":[],"c":[]},"ajK":{"a_":[],"c":[]},"alU":{"bs":[],"O":[],"c":[]},"I1":{"a_":[],"c":[]},"aeI":{"a_":[],"c":[]},"Ht":{"a_":[],"c":[]},"a5c":{"bs":[],"O":[],"c":[]},"aj4":{"a_":[],"c":[]},"akf":{"a_":[],"c":[]},"Tm":{"a_":[],"c":[]},"ap2":{"a_":[],"c":[]},"ag7":{"a_":[],"c":[]},"ago":{"a_":[],"c":[]},"akJ":{"a_":[],"c":[]},"aha":{"a_":[],"c":[]},"Il":{"a_":[],"c":[]},"aqe":{"a_":[],"c":[]},"TL":{"a_":[],"c":[]},"JV":{"O":[],"c":[]},"Sl":{"a0":["JV"]},"nr":{"b8":[]},"fs":{"b8":[]},"i7":{"b8":[]},"mj":{"b8":[]},"Cc":{"b8":[]},"xc":{"b6":["nr"],"aZ":["nr"],"aZ.T":"nr","b6.T":"nr"},"a_d":{"b8":[]},"a_i":{"b8":[]},"a_j":{"b8":[]},"a_k":{"b8":[]},"u4":{"b8":[]},"a_g":{"aT":[],"c":[]},"a9j":{"I":[],"H":[],"je":[],"aP":[]},"pb":{"b8":[]},"mB":{"b8":[]},"mY":{"b8":[]},"kw":{"b8":[]},"kY":{"b8":[]},"us":{"b8":[]},"a_6":{"b8":[]},"pI":{"b8":[]},"aaI":{"b8":[]},"oO":{"b8":[]},"ut":{"b8":[]},"y1":{"b8":[]},"acd":{"b8":[]},"OZ":{"b8":[]},"a4o":{"b8":[]},"acB":{"b8":[]},"LP":{"b8":[]},"M_":{"b8":[]},"JQ":{"a_":[],"c":[]},"Qp":{"O":[],"c":[]},"WD":{"a0":["Qp"]},"jC":{"b8":[]},"aaJ":{"fU":[],"aT":[],"c":[]},"a_7":{"dV":["I","hb"],"I":[],"aB":["I","hb"],"H":[],"aP":[],"aB.1":"hb","dV.1":"hb","aB.0":"I"},"A2":{"a_":[],"c":[]},"a_m":{"b8":[]},"a3x":{"b8":[]},"M6":{"b8":[]},"a3z":{"b8":[]},"a3D":{"ha":[]},"a3E":{"ha":[]},"a3F":{"ha":[]},"M1":{"ha":[]},"M2":{"ha":[]},"a3I":{"ha":[]},"M4":{"ha":[]},"M5":{"ha":[]},"a3C":{"ha":[]},"a3B":{"ha":[]},"M0":{"ha":[]},"a3G":{"ha":[]},"a3H":{"ha":[]},"M3":{"ha":[]},"Fh":{"I":[],"H":[],"je":[],"aP":[]},"Nn":{"O":[],"c":[]},"Uv":{"a0":["Nn"]},"pm":{"b8":[]},"e_":{"b8":[]},"mk":{"b8":[]},"mF":{"en":[],"b8":[]},"pP":{"mF":[],"en":[],"b8":[]},"r8":{"b8":[]},"t7":{"b8":[]},"FK":{"b8":[]},"yJ":{"b6":["pm"],"aZ":["pm"],"aZ.T":"pm","b6.T":"pm"},"No":{"b8":[]},"a_f":{"b8":[]},"JU":{"b8":[]},"y0":{"b8":[]},"a3A":{"b8":[]},"DZ":{"b8":[]},"a5q":{"b8":[]},"yK":{"b8":[]},"a5p":{"aT":[],"c":[]},"a9w":{"I":[],"H":[],"je":[],"aP":[]},"yN":{"b8":[]},"Pi":{"I":[],"br":["I"],"H":[],"aP":[]},"a3t":{"bG":[],"aT":[],"c":[]},"oc":{"fn":["1"],"fn.T":"1"},"abr":{"fb":["1"]},"Im":{"dq":["1"],"eb":[],"hy":["1"],"hx":[]},"QL":{"Im":["1"],"dq":["1"],"eb":[],"hy":["1"],"hx":[],"dq.0":"1"},"FU":{"cp":["1"],"abr":["1"],"fb":["1"],"cp.0":"1"}}'))
B.bCS(b.typeUniverse,JSON.parse('{"JP":1,"M6":1,"JZ":1,"Fh":1,"abr":1,"WW":1}'))
var y=(function rtii(){var x=B.av
return{_:x("BW"),e:x("bc<nI>"),h:x("bc<nJ>"),b:x("bc<~>"),W:x("jC"),B:x("nr"),dB:x("fs"),T:x("u4"),fj:x("i7"),G:x("mj"),J:x("mk"),k:x("ar"),cX:x("a_U<L>"),dO:x("uc"),R:x("ag<h,@>"),v:x("hN"),bz:x("ms<bi>"),f0:x("nA"),E:x("b8"),F:x("xZ"),X:x("nI"),P:x("ls"),D:x("ur"),a:x("aCs"),d:x("nJ"),cw:x("en"),L:x("hb"),m:x("df<w,F>"),cm:x("kw"),dv:x("mB"),g:x("B<nq>"),O:x("B<fs>"),Y:x("B<i7>"),C:x("B<bqT>"),U:x("B<en>"),K:x("B<a4d>"),u:x("B<e_>"),bC:x("B<v0>"),aA:x("B<u<en>>"),j:x("B<cp<z?>>"),r:x("B<FK>"),gM:x("B<h>"),eg:x("B<t4>"),df:x("B<pP>"),p:x("B<c>"),n:x("B<L>"),t:x("B<w>"),eF:x("ba<a0<O>>"),Z:x("mF"),cz:x("e_"),hf:x("pm"),dj:x("yK"),fT:x("r8"),c_:x("id<ou<bc<~>>>"),s:x("yN<fs>"),x:x("yN<e_>"),I:x("u<w>"),ef:x("v6"),c:x("a2<h,@>"),f:x("a2<@,@>"),gj:x("a9<L,L>"),w:x("jP"),aU:x("z"),Q:x("vi<nr>"),o:x("vi<pm>"),eo:x("pz"),gJ:x("pA"),cB:x("cp<z?>"),V:x("oc<ls>"),N:x("h"),A:x("oe"),er:x("t4"),fB:x("vZ"),dw:x("pP"),bY:x("t7"),cZ:x("pR"),gc:x("k6"),es:x("kY"),bN:x("mY"),l:x("c"),q:x("Bo"),g4:x("is<L>"),y:x("C"),i:x("L"),z:x("@"),S:x("w"),bn:x("xc?"),f3:x("yJ?"),M:x("u<@>?"),fF:x("a2<@,@>?"),cK:x("z?"),aD:x("k6?"),h6:x("w?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Ai=new B.qk(C.m,B.av("qk<F>"))
D.Ap=new A.Cb(0,"left")
D.md=new A.Cb(1,"top")
D.Aq=new A.Cb(2,"right")
D.dv=new A.Cb(3,"bottom")
D.arH=new A.pI(!1,A.btY(),22,null)
D.k6=new A.oO(16,null,D.arH,!0)
D.a7g=new A.pb(C.B,null,2,null)
D.vv=new A.JU(!1,D.a7g,A.c_4(),!0)
D.ZQ=new A.ava(3,"spaceEvenly")
D.ZZ=new B.xg(6,"dstIn")
D.X4=new B.aS(3,3)
D.Au=new B.d2(D.X4,D.X4,C.Z,C.Z)
D.a_a=new B.b7(C.B,0,C.N,-1)
D.B0=new A.a3z()
D.a0J=new A.M1()
D.a0K=new A.M4()
D.aHE=new A.aaI()
D.aiw=x([],B.av("B<kw>"))
D.aix=x([],B.av("B<kY>"))
D.D0=new A.LP(D.aiw,D.aix,!0)
D.a6R=new B.f8("Konten (SKR 03)",null)
D.a6X=new B.f8("Zeitraum",null)
D.x3=new A.aBQ(0,"center")
D.aHQ=new A.y0(!0,A.but(),A.bEV())
D.D4=new A.y0(!1,A.but(),A.bEV())
D.D5=new A.y1(!1,!0,null,A.asM(),A.YP(),!0,null,A.asM(),A.YP())
D.aHR=new A.y1(!0,!0,null,A.asM(),A.YP(),!0,null,A.asM(),A.YP())
D.a3_=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a2M=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a38=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a33=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2x=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2w=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3u=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a2T=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3x=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3r=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.amq=new B.df([50,D.a3_,100,D.a2M,200,D.a38,300,D.a33,400,D.a2x,500,D.a2w,600,D.a3u,700,D.a2T,800,D.a3x,900,D.a3r],y.m)
D.da=new B.rf(D.amq,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aeY=x([8,4],y.t)
D.a7e=new A.pb(D.da,null,0.4,D.aeY)
D.a7f=new A.pb(C.ap,null,0.5,null)
D.fB=new A.en(0/0,0/0)
D.arJ=new A.pI(!0,A.btY(),44,null)
D.me=new A.oO(16,null,D.arJ,!0)
D.arI=new A.pI(!0,A.btY(),30,null)
D.mf=new A.oO(16,null,D.arI,!0)
D.a7h=new A.ut(!1,D.me,D.mf,D.me,D.mf)
D.aHS=new A.ut(!0,D.me,D.mf,D.me,D.mf)
D.Dd=new A.Mv(0,"left")
D.a7w=new A.Mv(1,"center")
D.De=new A.Mv(2,"right")
D.a7B=new B.ae(57495,"MaterialIcons",null,!1)
D.a8g=new B.ae(58927,"MaterialIcons",null,!1)
D.a8i=new B.ae(59005,"MaterialIcons",null,!0)
D.a8j=new B.ae(59007,"MaterialIcons",null,!0)
D.a8k=new B.ae(59011,"MaterialIcons",null,!1)
D.a91=new B.ae(62589,"MaterialIcons",null,!1)
D.DV=new B.ae(984391,"MaterialIcons",null,!1)
D.a8v=new B.ae(61349,"MaterialIcons",null,!1)
D.a9G=new B.aW(D.a8v,20,C.h,null,null)
D.aad=new B.aW(C.xh,null,C.x,null,null)
D.a7N=new B.ae(57912,"MaterialIcons",null,!1)
D.aax=new B.aW(D.a7N,null,C.ak,null,null)
D.acD=new A.a5c(null)
D.aHX=new A.aHs(0,"horizontal")
D.xv=new A.yK(0,0,0,0,!1)
D.En=new A.No(0.5)
D.B4=new A.a5q()
D.acH=new A.DZ(D.B4,A.bEZ(),10,A.bEW(),!0,A.bEY(),A.bEX(),!1,null,null,null)
D.aHZ=new A.DZ(D.B4,A.bEZ(),10,A.bEW(),!0,A.bEY(),A.bEX(),!0,null,null,null)
D.ae2=x([4,3],y.t)
D.aI2=x([],y.g)
D.aii=x([],y.O)
D.aij=x([],y.Y)
D.aik=x([],B.av("B<mj>"))
D.ail=x([],B.av("B<mk>"))
D.aI3=x([],y.U)
D.aI4=x([],y.u)
D.aim=x([],y.r)
D.an1={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SH={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.y9=new B.ag(D.SH,[0,0,0,0,0,0,0,C.cB],B.av("ag<h,z>"))
D.an_={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aml=new B.ag(D.an_,[0,0,0,0],B.av("ag<h,w>"))
D.ane={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.alJ=new B.ag(D.ane,[0,0,0,0,null,null,null,null],B.av("ag<h,w?>"))
D.alF=new B.ag(D.an1,[D.y9,D.y9,D.y9,C.cB,C.cB,C.cB,D.aml,D.alJ],y.R)
D.alW=new B.ag(D.SH,[0,0,0,0,0,0,0,C.cA],y.R)
D.amZ={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.amm=new B.ag(D.amZ,[0,0,0,0,0,0,0,C.cA],y.R)
D.a3E=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a3L=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2A=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a2W=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a35=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a3Y=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2n=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a2Y=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a37=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3s=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.amr=new B.df([50,D.a3E,100,D.a3L,200,D.a2A,300,D.a2W,400,D.a35,500,D.a3Y,600,D.a2n,700,D.a2Y,800,D.a37,900,D.a3s],y.m)
D.Sw=new B.rf(D.amr,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6A=new B.ai(32,32,32,32)
D.aoi=new B.ah(D.a6A,C.bN,null)
D.a6C=new B.ai(48,48,48,48)
D.aok=new B.ah(D.a6C,C.bN,null)
D.aiy=x([],B.av("B<mB>"))
D.aiz=x([],B.av("B<mY>"))
D.X5=new A.OZ(D.aiy,D.aiz)
D.aqF=new B.hz("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aqH=new B.hz("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aqJ=new B.hz("Automaten-Business","Umsatz je Automat",null,null)
D.aqK=new B.hz("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aqL=new B.hz("Top","Meistverkaufte Produkte",null,null)
D.aqO=new B.hz("Kennzahlen","Rentabilit\xe4t",null,null)
D.XK=new B.rO(C.D,C.p,0)
D.aAu=new B.at("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.atj=new B.eJ(D.aAu,null,null,null,null,null,null,null,null,null,null,null,null,C.P,!1,null,null,null,C.r,null)
D.aId=new B.Q(!0,C.B,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.YU=new A.acb(0,"auto")
D.aBe=new A.acb(1,"top")
D.aFl=new A.TL("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"c7C","bJ4",()=>B.jj(new A.bnm(),y.D))
x($,"c7D","atq",()=>B.jj(new A.bnn(),y.a))
x($,"c8u","wV",()=>{var v=null
B.bub()
return new A.QL(new A.bp8(),v,v,v,v,B.BL(v),B.av("QL<ls>"))})
x($,"c7E","bpX",()=>C.aM.$1$1(new A.bno(),y.d))
x($,"c7B","bJ3",()=>C.aM.$1$1(new A.bnl(),y.X))
x($,"c7A","bpW",()=>B.aXl(A.bZ7(),y.F,y.b))
x($,"c0U","bpy",()=>new A.av0())
w($,"c46","lg",()=>new A.aZX())})()};
(a=>{a["B8oOMr3pBSeiJSx8esfXDKlu6FQ="]=a.current})($__dart_deferred_initializers__);