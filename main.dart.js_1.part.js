((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nl(d,e,f,g,h){return new A.a5u(f,g,d,h,e,null)},
a5u:function a5u(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
ux:function ux(d){this.a=d},
Dr:function Dr(d){this.a=d},
bO3(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SF
w=x.f
v=x.N
u=x.z
t=A.aCV(B.eg(w.a(e.h(a0,"current")),v,u))
s=A.aCV(B.eg(w.a(e.h(a0,"prior_year")),v,u))
r=A.aCV(B.eg(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cF
p=J.d3(p,new A.aCG(),x.cZ)
p=B.P(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cF
o=J.d3(o,new A.aCH(),x.ef)
o=B.P(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cF
q=J.d3(q,new A.aCI(),x.j)
q=B.P(q,q.$ti.i("au.E"))
n=B.eg(w.a(e.h(a0,"customer")),v,u)
m=B.bC(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oH(n.h(0,"app_gross"))
k=B.bC(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oH(n.h(0,"avg_basket"))
u=B.eg(w.a(e.h(a0,"derived")),v,u)
v=A.oH(u.h(0,"gross_margin_pct"))
e=A.oH(u.h(0,"net_margin_pct"))
w=A.oH(u.h(0,"ebitda_margin_pct"))
j=A.oH(u.h(0,"cashflow_operating"))
i=A.bnE(u.h(0,"revenue_growth_yoy_pct"))
h=A.bnE(u.h(0,"revenue_growth_mom_pct"))
g=A.bnE(u.h(0,"result_growth_yoy_pct"))
u=A.bnE(u.h(0,"result_growth_mom_pct"))
f=B.bC(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nQ(t,s,r,p,o,q,new A.ay9(m,l,k,n),new A.azg(v,e,w,j,i,h,g,u),f)},
oH(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jX(J.ak(d))
return w==null?0:w},
bnE(d){if(d==null)return null
if(typeof d=="number")return d
return B.jX(J.ak(d))},
q_:function q_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vc:function vc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
w4:function w4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay9:function ay9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azg:function azg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nQ:function nQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCG:function aCG(){},
aCH:function aCH(){},
aCI:function aCI(){},
aCV(d){var w=J.Y(d),v=A.tR(w.h(d,"revenue_net_7")),u=A.tR(w.h(d,"revenue_net_19")),t=A.tR(w.h(d,"revenue_net")),s=A.tR(w.h(d,"expense_net")),r=A.tR(w.h(d,"result_net")),q=A.tR(w.h(d,"vat_collected")),p=A.tR(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cF
w=J.d3(w,new A.aCW(),x._)
w=B.P(w,w.$ti.i("au.E"))
return new A.nR(v,u,t,s,r,q,p,w)},
tR(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jX(J.ak(d))
return w==null?0:w},
C3:function C3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nR:function nR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aCW:function aCW(){},
bO2(d){return new A.y4(d,new B.ig(x.c_),C.dA)},
boq:function boq(){},
bor:function bor(){},
bqd:function bqd(){},
bos:function bos(){},
bop:function bop(){},
boo:function boo(){},
y4:function y4(d,e,f){this.r=d
this.a=e
this.f=f},
aCF:function aCF(d,e,f){this.a=d
this.b=e
this.c=f},
aCE:function aCE(d,e,f){this.a=d
this.b=e
this.c=f},
bO4(){return new A.y5(null)},
bam(d,e,f,g,h){return new A.ak1(e,h,g,f,d,null)},
y5:function y5(d){this.a=d},
aCU:function aCU(d){this.a=d},
aCN:function aCN(d,e,f){this.a=d
this.b=e
this.c=f},
aCO:function aCO(d,e,f){this.a=d
this.b=e
this.c=f},
aCP:function aCP(d){this.a=d},
aCQ:function aCQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCT:function aCT(){},
aCS:function aCS(){},
aCR:function aCR(){},
aCM:function aCM(d,e){this.a=d
this.b=e},
aCK:function aCK(d){this.a=d},
aCL:function aCL(d){this.a=d},
af0:function af0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ak1:function ak1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amb:function amb(d,e){this.e=d
this.a=e},
be1:function be1(d){this.a=d},
be2:function be2(d){this.a=d},
be3:function be3(d,e,f){this.a=d
this.b=e
this.c=f},
be0:function be0(){},
Ia:function Ia(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IF:function IF(d,e){this.c=d
this.a=e},
bjw:function bjw(d){this.a=d},
aeZ:function aeZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hi:function Hi(d,e){this.c=d
this.a=e},
bv0(d,e,f,g,h){var w=null
return B.jB(w,w,!0,w,new A.bnz(h,g,e,f),d,w,!0,!0,x.H)},
kd(d,e,f,g,h,i,j,k,l,m,n){return new A.akx(g,n,i,e,d,m,f,k,l,j,null)},
at3(d,e,f){var w=0,v=B.r(x.H)
var $async$at3=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jB(null,null,!0,null,new A.bnx(f,e,e.aN(0,$.cd(),x.A)),d,null,!0,!0,x.H),$async$at3)
case 2:return B.p(null,v)}})
return B.q($async$at3,v)},
a5v:function a5v(d){this.a=d},
aHM:function aHM(){},
aHL:function aHL(){},
aHK:function aHK(){},
HC:function HC(d,e){this.c=d
this.a=e},
bbC:function bbC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbs:function bbs(){},
bbt:function bbt(){},
bbu:function bbu(){},
bbv:function bbv(){},
bbw:function bbw(){},
bbx:function bbx(){},
bby:function bby(){},
bbz:function bbz(){},
bbA:function bbA(d){this.a=d},
bbB:function bbB(d){this.a=d},
bbD:function bbD(d,e){this.a=d
this.b=e},
bbE:function bbE(d,e){this.a=d
this.b=e},
bnz:function bnz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bny:function bny(d){this.a=d},
ajm:function ajm(d){this.a=d},
akx:function akx(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbF:function bbF(d,e){this.a=d
this.b=e},
TF:function TF(d,e,f){this.c=d
this.d=e
this.a=f},
X7:function X7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biT:function biT(){},
biU:function biU(){},
biV:function biV(d){this.a=d},
SW:function SW(d,e,f){this.c=d
this.d=e
this.a=f},
b2U:function b2U(){},
b2W:function b2W(d){this.a=d},
b2X:function b2X(d){this.a=d},
b2V:function b2V(){},
T6:function T6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3H:function b3H(){},
b3I:function b3I(){},
b3J:function b3J(){},
b3K:function b3K(d){this.a=d},
al0:function al0(d,e){this.c=d
this.a=e},
bc8:function bc8(){},
bc9:function bc9(){},
ahs:function ahs(d,e){this.c=d
this.a=e},
Iu:function Iu(d,e,f){this.c=d
this.d=e
this.a=f},
aqx:function aqx(d,e){this.c=d
this.a=e},
bkN:function bkN(){},
bkO:function bkO(){},
wm:function wm(d,e){this.c=d
this.a=e},
afN:function afN(d,e){this.e=d
this.a=e},
b1o:function b1o(){},
b1n:function b1n(){},
b1m:function b1m(d,e,f){this.a=d
this.b=e
this.c=f},
b1i:function b1i(d,e){this.a=d
this.b=e},
b1p:function b1p(d){this.a=d},
b1q:function b1q(d){this.a=d},
b1j:function b1j(){},
b1k:function b1k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1l:function b1l(d,e,f){this.a=d
this.b=e
this.c=f},
bnx:function bnx(d,e,f){this.a=d
this.b=e
this.c=f},
bnw:function bnw(d){this.a=d},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SA:function SA(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1d:function b1d(d){this.a=d},
b1e:function b1e(d){this.a=d},
b1g:function b1g(d,e){this.a=d
this.b=e},
b1f:function b1f(d,e){this.a=d
this.b=e},
b1h:function b1h(d){this.a=d},
b8:function b8(){},
bye(d){return new A.K3(d,C.aq,C.dr,null,null)},
K3:function K3(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SB:function SB(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cR$=g
_.c=_.a=null},
b1r:function b1r(d,e){this.a=d
this.b=e},
b1s:function b1s(d){this.a=d},
avt(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ajq:f,p=a0==null?16:a0,o=d==null?D.a_8:d,n=g==null,m=n?A.brv(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xn:a3
n=n?A.brv(r,r,r,r,r,r,r,r):g
w=j==null?D.De:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.ny(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bd,s,w,i,n)},
avA(d,e,f,g,h){var w=d==null?D.ajr:d,v=e==null?2:e,u=g==null?C.lb:g
return new A.fw(h,f===!0,w,v,u)},
bLn(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avA(A.kj(d.c,e.c,f,A.bZ9(),x.fj),B.aa(d.d,e.d,f),!1,A.kj(d.e,e.e,f,A.Ze(),x.S),w)},
a_C(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SN
else w=h
v=m==null
u=v?8:m
t=$.ll()
s=t.aVR(f,v?8:m)
t=t.aVS(g,v?8:m)
v=d==null?A.byc(r,r,r,r,r):d
return new A.i9(q,l,w,j,u,s,e,t,v,k==null?D.ajs:k)},
bLo(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.aa(d.e,e.e,f),q=B.mo(d.f,e.f,f),p=A.kj(d.r,e.r,f,A.Ze(),x.S),o=B.bV(d.w,e.w,f),n=B.aa(d.a,e.a,f),m=B.aa(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aa(w.b,v.b,f)
t=B.aa(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_C(A.byc(v,u,null,!1,t),p,q,o,s,n,null,A.kj(d.y,e.y,f,A.bZa(),x.G),m,r)},
bLp(d,e,f){var w,v,u=B.aa(d.a,e.a,f)
u.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mm(u,w,v,B.bV(d.d,e.d,f))},
byc(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dh
else w=d
return new A.a_y(g===!0,v,u,w,f)},
brv(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_E(4,C.hF,16,D.xd,0,120,A.bZc(),!1,!1,D.Zb,0,C.A,A.bZb())
else w=k
v=j==null?C.kJ:j
return new A.a_D(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
bZV(d,e,f,g){var w=null,v=B.iU(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Ck(C.d.j(f.b),v)},
bZU(d){return A.axA(D.dh,15)},
ny:function ny(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avs:function avs(d,e){this.a=d
this.b=e},
fw:function fw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avB:function avB(){},
avC:function avC(){},
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
a_y:function a_y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_D:function a_D(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acs:function acs(d,e){this.a=d
this.b=e},
a_E:function a_E(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Ck:function Ck(d,e){this.a=d
this.b=e},
K4:function K4(d){this.a=d},
a_F:function a_F(d,e,f,g,h,i,j,k){var _=this
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
afL:function afL(){},
afQ:function afQ(){},
afR:function afR(){},
afT:function afT(){},
afU:function afU(){},
afV:function afV(){},
afW:function afW(){},
afX:function afX(){},
afY:function afY(){},
avD:function avD(d){this.a=d},
avE:function avE(){},
u9:function u9(d,e,f){this.a=d
this.b=e
this.c=f},
afS:function afS(){},
avF:function avF(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avG:function avG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avH:function avH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4x:function a4x(d){this.b=d},
a_B:function a_B(d,e,f){this.d=d
this.e=e
this.a=f},
a9B:function a9B(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.hX=e
_.cV=f
_.fT=g
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
bZW(d,e){var w=null
return new A.QE(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
avm(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aa(w.c,v.c,f)
u.toString
return new A.oT(t,e.b,new A.pO(v.a,v.b,u,B.aa(w.d,v.d,f)),!0)},
bzA(d,e,f){var w=A.avm(d.b,e.b,f),v=A.avm(d.d,e.d,f),u=A.avm(d.e,e.e,f)
return new A.uz(e.a,w,A.avm(d.c,e.c,f),v,u)},
bO6(d,e,f){var w,v
if(d.k(0,D.fG))return e
if(e.k(0,D.fG))return d
w=B.aa(d.a,e.a,f)
w.toString
v=B.aa(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bzy(d,e,f){return new A.y7(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c1i(d){return!0},
bZZ(d){return D.a7L},
bzz(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.pf(w,f,g,e)},
bBw(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZ5(),x.dv)
v.toString
w=A.kj(d.b,e.b,f,A.bZ7(),x.bN)
w.toString
return new A.Pd(v,w)},
bOS(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r2(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.mG(t,w,v,u)},
bU0(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r2(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.n4(t,w,v,u)},
bOR(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.p8(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bOP(B.brl(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r2(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Ze(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kE(r,e.f,e.r,t,e.x,u,v,w,s)},
bU_(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.p8(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bTY(B.brl(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r2(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Ze(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l3(r,e.f,e.r,t,e.x,u,v,w,s)},
bOP(d,e,f,g,h,i){return new A.a4I(f,!1,g,i,d,e)},
bOQ(d){return C.d.am(d.e,1)},
bTY(d,e,f,g,h,i){return new A.acS(f,!1,g,i,d,e)},
bTZ(d){return C.d.am(d.e,1)},
bzv(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZ4(),x.cm)
v.toString
w=A.kj(d.b,e.b,f,A.bZ6(),x.es)
w.toString
return new A.LZ(v,w,!0)},
bO5(d,e,f){return new A.M9(d,e==null?4:e,f)},
a_r:function a_r(){},
Cj:function Cj(d,e){this.a=d
this.b=e},
td:function td(d,e){this.r=d
this.w=e},
pO:function pO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab_:function ab_(){},
oT:function oT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uz:function uz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev:function ev(d,e){this.a=d
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
pf:function pf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acu:function acu(){},
Pd:function Pd(d,e){this.a=d
this.b=e},
mG:function mG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n4:function n4(d,e,f,g){var _=this
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
l3:function l3(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a4I:function a4I(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acS:function acS(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
LZ:function LZ(d,e,f){this.a=d
this.b=e
this.c=f},
uy:function uy(){},
M9:function M9(d,e,f){this.a=d
this.b=e
this.c=f},
afG:function afG(){},
afK:function afK(){},
aiM:function aiM(){},
aj1:function aj1(){},
aj2:function aj2(){},
aj4:function aj4(){},
aj5:function aj5(){},
ajS:function ajS(){},
ajR:function ajR(){},
ajT:function ajT(){},
ang:function ang(){},
ap0:function ap0(){},
ap1:function ap1(){},
aqB:function aqB(){},
ard:function ard(){},
arc:function arc(){},
are:function are(){},
avi:function avi(){},
JY:function JY(){},
JZ:function JZ(d,e,f){this.c=d
this.d=e
this.a=f},
avk:function avk(d){this.a=d},
avj:function avj(d){this.a=d},
QE:function QE(d,e,f){this.c=d
this.e=e
this.a=f},
WX:function WX(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bSy(d,e,f){var w=B.ab(f),v=w.i("a9<1,jE>")
v=B.P(new B.a9(f,new A.aWR(),v),v.i("au.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aWS(),w),w.i("au.E"))
return new A.ab0(e,d,v,w,null)},
bLk(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5l(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tb(v,C.aw,C.v,new B.ke(1),v,v,v,v,C.bu,v)
u=new A.a_s(f,d,e,u,t,!0,0,v,v,new B.bo(),B.aH(x.v))
u.bj()
return u},
ab0:function ab0(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWR:function aWR(){},
aWS:function aWS(){},
a_s:function a_s(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VD$=h
_.aRB$=i
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
bbL:function bbL(d,e){this.a=d
this.b=e},
avl:function avl(){},
jE:function jE(d,e){this.a=d
this.b=e},
nx:function nx(d,e){this.a=d
this.b=e},
afH:function afH(){},
afI:function afI(){},
afJ:function afJ(){},
Sy:function Sy(){},
A8:function A8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWT:function aWT(d){this.a=d},
aWU:function aWU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWV:function aWV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3T(d,e){var w=d==null?B.ds(C.B,1):d
return new A.a3S(e!==!1,w)},
a_H:function a_H(){},
a3S:function a3S(d,e){this.a=d
this.b=e},
Mg:function Mg(){},
a3U:function a3U(){},
avQ:function avQ(){},
aC6:function aC6(d,e){this.a=d
this.b=e},
ag0:function ag0(){},
aiZ:function aiZ(){},
aj_:function aj_(){},
aj6:function aj6(){},
K7:function K7(){},
vo:function vo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
he:function he(){},
a3Y:function a3Y(d){this.a=d},
a3Z:function a3Z(d){this.a=d},
a4_:function a4_(d){this.a=d},
Mb:function Mb(){},
Mc:function Mc(){},
a42:function a42(d){this.a=d},
Me:function Me(){},
Mf:function Mf(d){this.a=d},
a3X:function a3X(d){this.a=d},
a3W:function a3W(d){this.a=d},
Ma:function Ma(d){this.a=d},
a40:function a40(d){this.a=d},
a41:function a41(d){this.a=d},
Md:function Md(d){this.a=d},
Fp:function Fp(){},
aSa:function aSa(d){this.a=d},
aSb:function aSb(d){this.a=d},
aSc:function aSc(d){this.a=d},
aSd:function aSd(d){this.a=d},
aSe:function aSe(d){this.a=d},
aSf:function aSf(d){this.a=d},
aSg:function aSg(d){this.a=d},
aSh:function aSh(d){this.a=d},
aSi:function aSi(d){this.a=d},
aSj:function aSj(d){this.a=d},
aSk:function aSk(d){this.a=d},
aSl:function aSl(d){this.a=d},
aSm:function aSm(d){this.a=d},
Nz:function Nz(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UO:function UO(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cR$=h
_.c=_.a=null},
bbQ:function bbQ(d,e){this.a=d
this.b=e},
bbO:function bbO(d){this.a=d},
bbP:function bbP(d,e){this.a=d
this.b=e},
bbN:function bbN(){},
bbR:function bbR(d){this.a=d},
bsN(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.pr(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aI0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SN:u
else w=g
v=f==null?A.avr(!1,u,0,u,!1,D.vE):f
w=new A.e3(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avr(!1,u,0,u,!1,D.vE):d,j,a0,i,s,!1,p)
w.aq2(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bPm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aa(d.x,e.x,f)
m.toString
w=A.byd(d.ay,e.ay,f)
v=A.byd(d.ch,e.ch,f)
u=B.aa(d.as,e.as,f)
u.toString
t=e.CW
s=A.kj(d.cy,e.cy,f,A.Ze(),x.S)
r=B.X(d.r,e.r,f)
q=B.r2(d.w,e.w,f)
p=A.kj(d.a,e.a,f,A.bZ3(),x.cw)
p.toString
o=B.bC_(d.db,e.db,f)
o.toString
n=B.aa(d.dy.a,e.dy.a,f)
n.toString
return A.aI0(v,m,w,r,e.z,s,new A.y6(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NA(n),!1,u,o,!0,e.cx,p)},
avr(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
else w=e
return new A.a_A(h,w,g,i,f,!1)},
byd(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r2(v.b,u.b,f),r=B.aa(v.c,u.c,f)
r.toString
r=A.bzz(t,A.kj(v.d,u.d,f,A.Ze(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r2(d.c,e.c,f)
v=B.aa(d.e,e.e,f)
v.toString
return A.avr(!1,s,v,u,e.a,new A.K2(!1,r,w.c,!0))},
bLr(d,e,f){var w=B.X(d.c,e.c,f),v=B.r2(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
return new A.mn(e.a,e.b,w,v)},
c1j(d){return!0},
buP(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kM)return A.bvy(w.a,A.bsr(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dh:w},
bWI(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kM)w=A.bvy(v.a,A.bsr(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dh}return A.axA(w,40)},
bEu(d,e,f,g,h){var w,v=A.buP(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kM)w=A.bvy(u.a,A.bsr(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dh}u=A.axA(w,40)
return new A.M9(v,h==null?4:h,u)},
c1h(d,e){return!0},
bYR(d,e){return Math.abs(d.a-e.a)},
c_1(d,e){var w=J.d3(e,new A.boe(d),x.bY)
w=B.P(w,w.$ti.i("au.E"))
return w},
bZY(d,e){return-1/0},
bZX(d,e){return d.a[e].b},
bFG(d){var w=J.d3(d,new A.bob(),x.fT)
w=B.P(w,w.$ti.i("au.E"))
return w},
bFF(d){return A.axA(D.dh,15)},
pr:function pr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e3:function e3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aI1:function aI1(){},
NA:function NA(d){this.a=d},
a_A:function a_A(d,e,f,g,h,i){var _=this
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
K2:function K2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y6:function y6(d,e,f){this.a=d
this.b=e
this.c=f},
aHN:function aHN(d,e){this.a=d
this.b=e},
a3V:function a3V(){},
E5:function E5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
boe:function boe(d){this.a=d},
bod:function bod(d){this.a=d},
a5J:function a5J(){},
bob:function bob(){},
mL:function mL(){},
pY:function pY(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rh:function rh(d,e){this.a=d
this.b=e},
te:function te(d,e){this.a=d
this.b=e},
FQ:function FQ(d){this.a=d},
NB:function NB(d){this.a=d},
yP:function yP(d,e){this.a=d
this.b=e},
afO:function afO(){},
afP:function afP(){},
ag1:function ag1(){},
aj0:function aj0(){},
aj3:function aj3(){},
akE:function akE(){},
akF:function akF(){},
akG:function akG(){},
akI:function akI(){},
akJ:function akJ(){},
akK:function akK(){},
akL:function akL(){},
ap_:function ap_(){},
aqA:function aqA(){},
aI2:function aI2(d){this.a=d},
aI3:function aI3(){},
aI4:function aI4(){},
yQ:function yQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akH:function akH(){},
aI5:function aI5(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aI8:function aI8(){},
aI6:function aI6(d,e,f){this.a=d
this.b=e
this.c=f},
aI7:function aI7(d,e,f){this.a=d
this.b=e
this.c=f},
aI9:function aI9(){},
v6:function v6(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5I:function a5I(d,e,f){this.d=d
this.e=e
this.a=f},
a9O:function a9O(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.hX=e
_.cV=f
_.fT=g
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
bru(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bz(o.length,0,!1,x.i),m=B.ab(o),l=new B.a9(o,new A.avu(),m.i("a9<1,M>")).kk(0,new A.avv()),k=e-l,j=new A.avy(k,d,n)
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
new B.iK(o,m.i("iK<1>")).aq(0,new A.avw(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).aq(0,new A.avx(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avu:function avu(){},
avv:function avv(){},
avy:function avy(d,e,f){this.a=d
this.b=e
this.c=f},
avz:function avz(d,e,f){this.a=d
this.b=e
this.c=f},
avw:function avw(d,e,f){this.a=d
this.b=e
this.c=f},
avx:function avx(d,e,f){this.a=d
this.b=e
this.c=f},
bsr(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iK(w,B.ab(w).i("iK<1>")).aq(0,new A.aF9(v,d))
else throw B.e(B.bE('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aF9:function aF9(d,e){this.a=d
this.b=e},
ayK(d,e){var w,v
if(e!=null){w=B.ab(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.ayL(),w),w.i("au.E"))
return A.bZQ(d,new A.a0e(v,x.cX))}else return d},
ayL:function ayL(){},
bT7(d,e){var w=!0
if(d!==C.eX)if(!(d===C.aw&&e===C.v))w=d===C.ie&&e===C.aW
if(w)return D.Dr
else{w=!0
if(d!==C.hm)if(!(d===C.ie&&e===C.v))w=d===C.aw&&e===C.aW
if(w)return D.Ds
else return D.a8k}},
MG:function MG(d,e){this.a=d
this.b=e},
a04:function a04(d,e){this.a=d
this.b=e},
yT:function yT(d,e){this.a=d
this.$ti=e},
akS:function akS(){},
bZQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.ah().r)
for(w=B.b([],x.C),v=new B.Nt(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.V(B.fo('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ns(v,s)
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
if(o){q=new B.Jt(d.aRx(r,p,p+n,!0),C.p,null)
t.push(q)
m=l.d
if(m!=null)q.hD(m)}p+=n
o=!o}}return l},
a0e:function a0e(d,e){this.a=d
this.b=0
this.$ti=e},
b_n:function b_n(){},
Px:function Px(d,e,f,g,h,i,j){var _=this
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
aSv:function aSv(d){this.a=d},
a3O:function a3O(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bsf(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fG))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bLu(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geg(v)===0){v=d.a.a
if(v.geg(v)===0){v=d.b.a
if(v.geg(v)===0){v=d.c.a
v=v.geg(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axA(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNo()*w),C.d.b0(d.gFM()*w),C.d.b0(d.gJV()*w))},
bzx(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bsg(d){var w=d.a,v=w?A.aWQ(d.b):0,u=w?A.aWQ(d.c):0,t=w?A.aWQ(d.d):0
return new B.aj(v,u,t,w?A.aWQ(d.e):0)},
bQB(d){var w
if(d.c===0){d.seS(null)
w=B.bY(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bt8(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seS(f.mJ(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seS(null)}},
aWQ(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kj(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kK(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kK(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c09(d,e,f){return C.d.b0(d+(e-d)*f)},
bvy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a5u.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aR:C.l
r=r?C.n:C.al
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cX(t.x,C.n,s,18),C.bs],w))
v.push(B.aR(new B.eu(t.c,s),1))
v=B.av(v,C.D,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.a_,B.l(t.d,1,C.ag,s,B.c7(u==null?C.h:u,22,C.O),s,s,s)],w)
return B.bN(r,B.ag(w,C.D,C.i1,C.i),q,s,C.am,s,3)}}
A.ux.prototype={
Lh(d){return this.aRA(d)},
aRA(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lh=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ez("finance_summary",B.a5(["p_from",E.qX(d.a),"p_to",E.qX(d.b)],s,r),r),$async$Lh)
case 3:q=f
if(q==null){u=D.an3
w=1
break}if(x.f.b(q)){u=B.eg(q,s,r)
w=1
break}u=D.anu
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lh,v)},
Lg(d){return this.aRz(d)},
aRz(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lg=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ez("finance_kpis",B.a5(["p_from",E.qX(d.a),"p_to",E.qX(d.b)],s,r),r),$async$Lg)
case 3:q=f
if(x.f.b(q)){u=B.eg(q,s,r)
w=1
break}u=D.amN
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lg,v)},
px(d){return this.apL(d)},
apL(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$px=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.i_("sevdesk-sync",B.a5(["from",E.qX(d.a),"to",E.qX(d.b)],s,s)),$async$px)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a4(B.ft(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$px,v)},
Lc(d){return this.aRp(d)},
aRp(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lc=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.i_("finance-export-pdf",B.a5(["from",E.qX(d.a),"to",E.qX(d.b)],s,s)),$async$Lc)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aB(J.a3(r,"base64"))
w=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Lc,v)}}
A.Dr.prototype={
FG(d){return this.aiY(d)},
aiY(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FG=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lh(d),$async$FG)
case 7:q=f
o=A.aCV(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hh(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FG,v)},
FC(d){return this.aiJ(d)},
aiJ(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FC=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lg(d),$async$FC)
case 7:q=f
o=A.bO3(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hh(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FC,v)},
px(d){return this.apM(d)},
apM(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.Hh(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$px,v)},
Lb(d){return this.aRo(d)},
aRo(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lb=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lc(d),$async$Lb)
case 7:q=f
o=C.kd.cU(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hh(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lb,v)},
Hh(d){if(d instanceof B.y1)return d
if(d instanceof B.lO){if(d.b==="42501")return new B.vs(d.a)
return new B.rV(d.a)}if(d instanceof B.Mu)return new B.rV("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Ay("Unerwarteter Fehler: "+B.i(d))},
$iaCJ:1}
A.q_.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vc.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w4.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ay9.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nQ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.C3.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nR.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y4.prototype={
GD(d){return this.apK(0)},
apK(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GD=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dn)
s=t.r
r=s.aN(0,$.x0(),x.P)
p.a=null
w=3
return B.k(B.oS(new A.aCF(p,t,r),x.H),$async$GD)
case 3:t.se3(0,f)
q=t.f
if(q.ghm(q)==null){q=$.br1()
s=s.e
s===$&&B.a()
s.cr(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GD,v)},
La(){return this.aRn()},
aRn(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$La=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dn)
s=t.r.aN(0,$.x0(),x.P)
q.a=null
w=3
return B.k(B.oS(new A.aCE(q,t,s),x.H),$async$La)
case 3:t.se3(0,e)
r=t.f
u=r.ghm(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$La,v)}}
A.y5.prototype={
ds(d,e){var w=null,v=e.aC($.x0(),x.P),u=e.aC($.br1(),x.aN)
return B.jZ(B.e4(B.b([new B.fW("Finanzen","Dashboard",new A.af0(e.aC($.br0(),x.b).gj9(),new A.aCN(this,d,e),new A.aCO(this,d,e),new A.aCP(d),new A.aCQ(this,d,e,v),w),w),C.ay,new A.amb(v,w),C.c5,D.adD,C.c5,B.dr(u,new A.aCR(),new A.aCS(),new A.aCT(),!1,!0,!1,x.d,x.l)],x.p),C.cS,w,!1),C.n,new A.aCU(e))},
J5(d,e){return this.aJV(d,e)},
aJV(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J5=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.br0()
w=3
return B.k(e.aN(0,s.gi2(),x.F).GD(0),$async$J5)
case 3:r=g
if(d.e==null){w=1
break}s=e.aN(0,s,x.b)
s=s.ghm(s)
t=d.P(x.q).f
t.bE(B.ck(null,null,null,null,null,C.t,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J5,v)},
B1(d,e){return this.avH(d,e)},
avH(d,e){var w=0,v=B.r(x.H),u,t
var $async$B1=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aN(0,$.br0().gi2(),x.F).La(),$async$B1)
case 3:t=g
if(d.e==null){w=1
break}if(t==null){d.P(x.q).f.bE(D.auL)
w=1
break}w=4
return B.k(E.bBn(t,"finanzauswertung.pdf"),$async$B1)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B1,v)},
B2(d,e,f){return this.aHF(d,e,f)},
aHF(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B2=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jB(null,null,!0,null,new A.aCM(f,d),d,null,!0,!0,x.cJ),$async$B2)
case 3:if(h!==!0){w=1
break}t=5
r=new E.ns(e.aN(0,$.cd(),x.A))
p=f.a
o=f.b
n=$.ep()
m=n.ar(p)
n=n.ar(o)
w=8
return B.k(r.zg("finance_period",p,o,B.a5(["period_from",p.eJ()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B2)
case 8:if(d.e!=null)d.P(x.q).f.bE(F.uJ)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bE(B.ck(null,null,null,null,null,C.t,null,B.l("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B2,v)}}
A.af0.prototype={
u(d){var w=this,v=null,u=A.bam(C.n,F.j1,C.n,w.r,"Freigabe f\xfcr Auswertung anfordern"),t=A.bam(v,D.a9U,v,w.f,"Gesellschafter-Freigaben"),s=w.c,r=A.bam(v,D.a93,v,s?v:w.d,"sevDesk synchronisieren")
return B.av(B.b([u,C.bs,t,C.bs,r,C.bs,A.bam(C.ak,C.kW,C.ak,s?v:w.e,"PDF-Export")],x.p),C.m,C.f,C.N,0,v,v)}}
A.ak1.prototype={
u(d){var w,v=this,u=null,t=B.b0(12),s=B.b0(12),r=B.b0(12),q=v.w
if(q==null)q=C.al
q=B.ds(q,1)
w=v.r
if(w==null)w=C.h
return B.acr(B.e5(!1,C.Y,!0,t,B.fe(!1,s,!0,B.bj(u,B.cX(v.c,w,u,20),C.r,u,u,new B.bb(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.ar,0,u,u,u,u,u,C.bL),u,v.d,u,u)}}
A.amb.prototype={
ds(d,e){var w=null,v=this.e,u=$.ep(),t=x.p
return B.bN(w,B.ag(B.b([D.a7r,C.a_,B.av(B.b([D.aaA,C.be,B.aR(B.l(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.D(C.h,16,C.O),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.x,B.q2(C.dl,B.b([new A.Ia("Monat",new A.be1(e),w,w),new A.Ia("Jahr (YTD)",new A.be2(e),w,w),new A.Ia("Zeitraum w\xe4hlen \u2026",new A.be3(this,d,e),D.a98,w)],t),C.f0,6,8)],t),C.D,C.f,C.i),w,w,C.G,w,3)},
Iu(d,e){return this.aGD(d,e)},
aGD(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iu=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.bqi(new A.be0(),d,B.bJ(B.aY(t)-5,1,1,0,0,0,0),new B.mv(s.a,s.b,x.bz),B.bJ(B.aY(t)+1,1,1,0,0,0,0),C.eO),$async$Iu)
case 2:r=g
if(r!=null)e.aN(0,$.x0().gi2(),x.V).Aq(0,new E.mA(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iu,v)}}
A.Ia.prototype={
u(d){var w=null,v=B.b0(9999),u=B.b0(9999),t=B.b0(9999),s=B.ds(C.al,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cX(p,C.h,w,14),C.bs],r))
q.push(B.l(this.c,w,w,w,B.D(C.h,13,C.O),w,w,w))
return B.e5(!1,C.Y,!0,v,B.fe(!1,u,!0,B.bj(w,B.av(q,C.m,C.f,C.N,0,w,w),C.r,w,w,new B.bb(w,w,s,t,w,w,C.H),w,w,w,w,C.kI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.ar,0,w,w,w,w,w,C.bL)}}
A.IF.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jR(new A.bjw(this)),C.c5,D.a7f,C.x],r),p=this.c.w
if(p.length===0)q.push(B.bN(s,B.av(B.b([D.aba,C.aF,B.aR(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.u,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.ar,s,C.G,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.aeZ(t.a,t.b,t.c==="revenue",t.d,s),C.a_],r))}q.push(B.ag(w,C.m,C.f,C.i))}return B.ag(q,C.ab,C.f,C.i)}}
A.aeZ.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aR:C.ar,s=B.ds(u?C.n:C.al,1),r=B.b0(4),q=w.c
r=B.bj(C.a0,B.l(C.c.a0(q,0,1),v,v,v,B.c7(C.h,14,C.q),v,v,v),C.r,v,v,new B.bb(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.ag,v,B.D(C.h,14,C.O),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aR(B.ag(B.b([q,B.l(t,v,v,v,B.D(C.u,12,C.k),v,v,v)],s),C.D,C.f,C.i),1)
q=$.e0().ar(w.f)
return B.bN(v,B.av(B.b([r,C.aF,t,B.l(q,v,v,v,B.D(u?C.aQ:C.h,15,C.O),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.e6,v,3)}}
A.Hi.prototype={
u(d){var w=null
return B.bN(C.ak,B.av(B.b([D.abw,C.aF,B.aR(B.l(this.c,w,w,w,B.D(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fD,w,C.G,w,3)}}
A.a5v.prototype={
ds(d,e){return B.dr(e.aC($.bKc(),x.e),new A.aHK(),new A.aHL(),new A.aHM(),!1,!0,!1,x.X,x.l)}}
A.HC.prototype={
u(d){var w=this,v=null,u=w.c,t=u.x,s=t>0,r=s?u.a.c/t:0,q=s?u.r.a/t:0
t=x.p
s=B.b([D.asc,C.x,B.jR(new A.bbC(w,r,100-u.w.a,q)),C.x,new A.ajm(v),C.ay,D.asb,C.x,new A.afN(u,v),C.ay,D.as6,C.x,B.mF(v,B.bN(v,new A.SW(u,220,v),v,v,C.G,v,3),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbD(w,d),v,v,v,v,v,v),C.ay,D.as1,C.x,B.mF(v,new A.T6(u,200,!1,v),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbE(w,d),v,v,v,v,v,v),C.ay,D.as5,C.x,new A.al0(u,v),C.ay,D.as3,C.x,new A.ahs(u,v)],t)
if(u.f.length!==0)C.b.M(s,B.b([C.ay,D.as8,C.x,new A.aqx(u,v)],t))
return B.ag(s,C.ab,C.f,C.i)}}
A.ajm.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.u,11,C.k).eV(1.35),w,w,w)}}
A.akx.prototype={
u(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x)w=C.c.cG(o.d,"-")?C.ak:C.aQ
else w=C.h
v=o.w
u=v.length>=2?new A.bbF(o,d):n
t=x.p
s=B.b([B.aR(B.l(o.c.toUpperCase(),n,n,n,B.D(C.u,10,C.q).hF(0.6),n,n,n),1)],t)
r=o.Q
if(r!=null){q=B.ds(C.ak,0.8)
p=B.b0(4)
s.push(B.bj(n,B.l("Ziel "+r,n,n,n,B.D(C.ak,9,C.q),n,n,n),C.r,n,n,new B.bb(n,n,q,p,n,n,C.H),n,n,n,n,C.n0,n,n,n))}s=B.b([B.av(s,C.m,C.f,C.i,0,n,n),C.aZ,new A.a3O(C.B_,C.e0,B.l(o.d,n,n,n,B.c7(w,22,C.q),n,n,n),n)],t)
r=o.e
if(r!=null)s.push(B.l(r,2,C.ag,n,B.D(C.u,10,C.aP),n,n,n))
s.push(C.cN)
s.push(B.av(B.b([new A.TF("Vormonat",o.r,n),C.cX,new A.TF("Vorjahr",o.f,n)],t),C.m,C.f,C.i,0,n,n))
s.push(C.cN)
s.push(B.aR(new A.X7(v,o.y,o.z,n),1))
return B.mF(n,B.bN(n,B.ag(s,C.D,C.f,C.i),n,n,C.ds,n,3),C.ac,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,u,n,n,n,n,n,n)}}
A.TF.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.b0(4)
return B.bj(r,B.l(this.c+" \u2014",r,r,r,B.D(C.u,9,C.q),r,r,r),C.r,r,r,new B.bb(C.al,r,r,q,r,r,C.H),r,r,r,r,C.n0,r,r,r)}w=q>=0
v=w?C.aQ:C.ak
u=v.lE(0.12)
t=B.ds(v,0.7)
s=B.b0(4)
return B.bj(r,B.av(B.b([B.cX(w?F.a8q:D.a8p,v,r,10),F.auq,B.l(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.D(v,9,C.q),r,r,r)],x.p),C.m,C.f,C.N,0,r,r),C.r,r,r,new B.bb(u,r,t,s,r,r,C.H),r,r,r,r,C.n0,r,r,r)}}
A.X7.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.au
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.kk(j,new A.biT())
t=C.b.kk(j,new A.biU())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.biV(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a3T(k,!1)
w=B.b([A.aI0(k,2,A.avr(!1,C.n.lE(0.16),0,k,!0,D.vE),C.n,0.35,k,D.Di,k,!0,!1,!0,!1,D.EB,!1,10,D.Y1,!0,C.lb,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Nz(A.bsN(k,k,k,D.ajt,l,D.Bd,D.De,D.Dj,w,D.adH,k,m,k,n,D.Xn,D.aju,D.a7O),C.aq,C.ad,k,k)}}
A.SW.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aH2
w=C.b.fF(p,0,new A.b2U())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avA(B.b([A.a_C(q,q,D.AG,q,C.n,q,q,q,r.b,6),A.a_C(q,q,D.AG,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.cg(A.bye(A.avt(q,q,u,q,q,A.a3T(q,!1),q,new A.y7(!0,!0,q,new A.b2V(),A.Z9(),!1,q,A.at5(),A.Z9()),q,v,q,q,new A.uz(!0,new A.oT(16,q,new A.pO(!0,new A.b2W(this),46,q),!0),D.ka,D.ka,new A.oT(16,q,new A.pO(!0,new A.b2X(p),26,q),!0)))),this.d,q)},
aJd(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.T6.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b3H(),w),x.i)
C.b.M(o,new B.a9(u,new A.b3I(),w))
t=C.b.fF(o,0,new A.b3J())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avA(B.b([A.a_C(q,q,q,q,C.n,q,q,q,v[s],14),A.a_C(q,q,q,q,C.aQ,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cg(A.bye(A.avt(q,q,n,q,q,A.a3T(q,!1),q,D.Dj,q,o,q,q,new A.uz(!0,D.ka,D.ka,D.ka,new A.oT(16,q,new A.pO(!0,new A.b3K(p),26,q),!0)))),this.d,q)
return this.e?r:B.bN(q,r,q,q,C.G,q,3)}}
A.al0.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aH1
w=new B.a9(l,new A.bc8(),B.ab(l).i("a9<1,M>")).kk(0,new A.bc9())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.l(r.b,m,m,m,B.D(C.h,14,C.q),m,m,m)
p=$.e0()
o=r.d
n=new B.aU(4,4)
o=B.b([B.av(B.b([new B.pc(1,C.fH,B.ag(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ar(r.f),m,m,m,B.D(C.u,12,C.aP),m,m,m)],v),C.D,C.f,C.i),m),C.be,B.l(p.ar(o),m,m,m,B.c7(C.h,16,C.q),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cN,new B.CM(new B.d2(n,n,n,n),C.bI,B.a5K(C.al,8,C.d.c4(o/w,0,1),D.Au),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zc(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.x)
C.b.M(u,o)}return B.bN(m,B.ag(u,C.m,C.f,C.i),m,m,C.G,m,3)}}
A.ahs.prototype={
u(d){var w=null,v=this.c.r
return B.bN(w,B.av(B.b([B.aR(new A.Iu("Aktive Kunden",""+v.c,w),1),B.aR(new A.Iu("K\xe4ufe",""+v.a,w),1),B.aR(new A.Iu("\xd8-Warenkorb",$.e0().ar(v.d),w),1)],x.p),C.m,C.f,C.i,0,w,w),w,w,C.G,w,3)}}
A.Iu.prototype={
u(d){var w=null
return B.ag(B.b([B.l(this.c.toUpperCase(),w,w,w,B.D(C.u,10,C.q).hF(0.6),w,w,w),C.cM,B.l(this.d,w,w,w,B.c7(C.h,20,C.q),w,w,w)],x.p),C.D,C.f,C.N)}}
A.aqx.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.bkN(),B.ab(q).i("a9<1,M>")).kk(0,new A.bkO()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aU(4,4)
t=B.b([B.av(B.b([new B.pc(1,C.fH,B.l(u.b,1,C.ag,r,B.D(C.h,13,C.q),r,r,r),r),B.l(""+u.c+"\xd7 ",r,r,r,B.D(C.u,12,C.O),r,r,r),B.l($.e0().ar(t),r,r,r,B.D(C.h,13,C.q),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aZ,new B.CM(new B.d2(s,s,s,s),C.bI,B.a5K(C.al,6,C.d.c4(t/p,0,1),D.Au),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zc(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.a_)
C.b.M(n,t)}return B.bN(r,B.ag(n,C.m,C.f,C.i),r,r,C.G,r,3)}}
A.wm.prototype={
u(d){var w=null
return B.bN(w,B.l(this.c,w,w,w,B.D(C.u,13,C.k),w,w,w),C.ar,w,C.G,w,3)}}
A.afN.prototype={
ds(d,e){return B.dr(e.aC($.bxd(),x.fM),new A.b1m(this,d,e),new A.b1n(),new A.b1o(),!1,!0,!1,x.h,x.l)}}
A.AG.prototype={
Y(){return new A.SA()},
aWv(){return this.d.$0()}}
A.SA.prototype={
az(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.ha(J.ak(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bO)
for(t=0;t<8;++t){s=D.GR[t].a
if(v)r=""
else{r=B.bC(J.a3(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.ba(r,".",",")}u.m(0,s,new B.bT(new B.cR(r,C.bN,C.aS),$.ae()))}q.e!==$&&B.b4()
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
w=B.ba(w,".","")
w=B.jX(B.ba(w,",","."))
return w==null?0:w},
HU(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HU=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.L(new A.b1d(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aYW("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eJ(),0,10),"p_cash_and_bank",q.re("cash_and_bank"),"p_receivables",q.re("receivables"),"p_inventory_value",q.re("inventory_value"),"p_other_current_assets",q.re("other_current_assets"),"p_fixed_assets",q.re("fixed_assets"),"p_current_liabilities",q.re("current_liabilities"),"p_long_term_liabilities",q.re("long_term_liabilities"),"p_equity",q.re("equity")],x.N,x.aU))
w=7
return B.k(n,$async$HU)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWv()
o=q.c
o.toString
B.bl(o,!1).f1()
q.c.P(x.q).f.bE(D.auM)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bE(B.ck(null,null,null,null,null,C.t,null,B.l("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.L(new A.b1e(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HU,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c7(C.h,18,C.q),r,r,r),p=s.f?r:new A.b1g(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.jU(D.aaC,B.l("Stichtag: "+C.c.a0(o.eJ(),0,10),r,r,r,r,r,r,r),p,r),C.x],w)
for(v=0;v<8;++v){o=D.GR[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.fZ(r,C.b8,!1,r,!0,C.t,r,B.hu(),u.h(0,o.a),r,r,r,r,r,2,new B.ci(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ac,!0,r,!0,r,!1,r,C.bf,r,r,r,r,C.ig,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.G,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aw,r,C.a3,r,r,r,r),C.a_],w))}p.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.u,11,C.k),r,r,r))
p=B.cg(B.f7(B.ag(p,C.ab,C.f,C.N),r,C.a6),r,380)
o=s.f
u=B.dT(C.d1,r,r,o?r:new A.b1h(d),r,r)
o=o?r:s.gaD6()
t=B.ed(C.n,C.h,r,r,r,r,r)
return B.mi(B.b([u,B.dW(s.f?D.auu:C.f_,o,t)],w),C.l,p,q)}}
A.b8.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zc(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ez(B.H(this))^B.bGa(this.gbI()))>>>0},
j(d){B.bzt()
return B.H(this).j(0)}}
A.K3.prototype={
Y(){return new A.SB(B.y(x.S,x.I),new A.avD(B.y(x.x,x.T)),null,null)}}
A.SB.prototype={
u(d){var w,v=this,u=v.a1m(),t=v.CW
t.toString
t=v.a1n(t.au(0,v.ghA().gp(0)))
w=v.a1n(u)
v.a.toString
return new A.JZ(new A.a_B(t,w,null),u,null)},
a1n(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avA(s.c,s.d,!1,r,s.a))}return d.aOq(w)},
a1m(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Ud(t.ch)
if(r)s=w.a
r=t.y
t=t.aPl(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOr(A.brv(!1,!0,!0,v.d,v.c,u.garh(),v.f,v.e))}return t},
ari(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaeQ()||e==null||e.a==null){w=v.cy
v.L(w.gaNQ(w))
return}v.L(new A.b1r(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1m(),new A.b1s(w)))}}
A.ny.prototype={
UN(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avt(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPl(d,e){return this.UN(null,null,d,e)},
aOr(d){return this.UN(null,d,null,null)},
aOq(d){return this.UN(d,null,null,null)},
WI(d,e,f){var w,v,u,t=A.kj(d.ch,e.ch,f,A.bZ8(),x.dB),s=B.aa(d.CW,e.CW,f),r=A.bzA(d.d,e.d,f),q=A.bBw(d.e,e.e,f),p=A.bzy(d.c,e.c,f),o=e.a
o=A.a3T(B.a_S(d.a.b,o.b,f),o.a)
w=B.aa(d.y,e.y,f)
v=B.aa(d.x,e.x,f)
u=B.aa(d.z,e.z,f)
r=A.avt(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bzv(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avs.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fw.prototype={
gdm(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avB(),B.ab(v).i("a9<1,M>")).kk(0,new A.avC())
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
A.a_y.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_D.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acs.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_E.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Ck.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.K4.prototype={}
A.a_F.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xi.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WI(v,w,d)}}
A.afL.prototype={}
A.afQ.prototype={}
A.afR.prototype={}
A.afT.prototype={}
A.afU.prototype={}
A.afV.prototype={}
A.afW.prototype={}
A.afX.prototype={}
A.afY.prototype={}
A.avD.prototype={
Ud(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.u9(0,0,!1)
v=new A.yT(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.u9(t,u,!0)}w=null
try{w=C.b.qc(d,new A.avE())}catch(s){return new A.u9(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.u9(q,r,!1)
u.m(0,v,j)
return j}}
A.u9.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.afS.prototype={}
A.avF.prototype={
i4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_s(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abr(t,A.bru(w,t.a),u)
l.y=u
l.aQH(e,u,f)
l.akT(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aQQ(d,e,m,t,r,s,n,o,f)}}},
abr(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iK(p,B.ab(p).i("iK<1>")).aq(0,new A.avG(t,q,r,s))
w.push(new A.a4x(q))}return w},
aQH(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
a4=B.P9(h,Math.min(b3.dC(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dC(Math.min(t,a2),b5,b8)
a4=B.P9(h,a5,g,Math.max(b3.dC(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
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
u.clipRect(B.dG(b1),$.oL()[1],!0)
a6=b3.f.ek()
u.drawRRect(B.mg(a4),a6)
a6.delete()
u.restore()
b3.aQO(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.geg(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cB($.ah().r)
n=new B.h5(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hD(k)
v.fS(A.ayK(b2,o.r),b3.r)}}}},
aQQ(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.An(a5,a5,a5,a5,B.d6(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.ll().Zs(a8,a7.b),a7.a),C.d_,C.v,a5,b6.c,C.bu)
w.af8(b1.f)
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
if(v!==D.aCQ)j=v===D.Zb&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.Zt(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aU(s,s)
e=B.Fd(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.ll().K4(new B.E(v,t),d).b
s=$.ll()
q=w.b
p=q.c
q=q.a.c
a0=s.K4(new B.E(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahr()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vp(d,new A.avH(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.E(v,t))},
aQO(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.P9(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dC(v,j,k),i.b)
r=n.dC(t,j,k)
v=t<v
t=v?C.Z:new B.aU(i.z,i.Q)
p=v?C.Z:new B.aU(i.x,i.y)
o=v?new B.aU(i.e,i.f):C.Z
q=B.P9(w,s,u,r,t,p,o,v?new B.aU(i.r,i.w):C.Z)}else q=B.btt(w,n.dC(v,j,k),u,n.dC(t,j,k),C.Z)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eN(q,n.r)},
W4(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abr(b2,A.bru(a8,b2.a),a8.ch)
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
break}++a3}return new A.a_F(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.m(n,t))}}return null}}
A.a4x.prototype={}
A.a_B.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.avF()
t.a0E()
$.ah()
w=B.aS()
w.b=C.bd
t.f=w
w=B.aS()
w.b=C.aU
t.r=w
w=B.aS()
w.b=C.bd
w.r=C.l.gp(0)
t.w=w
w=B.aS()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.x=w
t=new A.a9B(this.d,v,u,t,d,C.bn,new B.bo(),B.aH(x.v))
t.bj()
t.Yo(v.cy)
t.aeh()
return t},
bx(d,e){e.sij(0,this.d)
e.sY9(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bd()}}
A.a9B.prototype={
sij(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bd()},
sY9(d){var w=this
if(w.hX.k(0,d))return
w.hX=d
w.a0c(d.cy)
w.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fT.i4(w,new A.a04(t,v),new A.vo(u.aB,u.hX,u.cV,x.Q))
s.restore()},
Zm(d){var w=this,v=w.gC(0)
return new A.K4(w.fT.W4(d,v,new A.vo(w.aB,w.hX,w.cV,x.Q)))}}
A.a_r.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cj.prototype={
K(){return"AxisSide."+this.b}}
A.td.prototype={}
A.pO.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ab_.prototype={
gbI(){return[!1,0,0,0]}}
A.oT.prototype={
gbI(){return[this.b,this.a,this.c,!0]}}
A.uz.prototype={
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
A.y7.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pf.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acu.prototype={
gbI(){return[this.a,this.b]}}
A.Pd.prototype={
gbI(){return[this.a,this.b]}}
A.mG.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.n4.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kE.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l3.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a4I.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.acS.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.LZ.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uy.prototype={}
A.M9.prototype={
acQ(d,e,f){var w,v
$.ah()
w=B.aS()
v=this.a
w.r=v.gp(v)
w.b=C.bd
d.iO(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afG.prototype={}
A.afK.prototype={}
A.aiM.prototype={}
A.aj1.prototype={}
A.aj2.prototype={}
A.aj4.prototype={}
A.aj5.prototype={}
A.ajS.prototype={}
A.ajR.prototype={}
A.ajT.prototype={}
A.ang.prototype={}
A.ap0.prototype={}
A.ap1.prototype={}
A.aqB.prototype={}
A.ard.prototype={}
A.arc.prototype={}
A.are.prototype={}
A.avi.prototype={
Mc(d,e,f,g,h,i){return new B.iv(this.aUy(d,e,f,g,h,i),x.g4)},
aUx(d,e,f,g){return this.Mc(d,e,f,!0,g,!0)},
aUy(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mc(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.ll().aiv(s,u,v,w)
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
A.JY.prototype={
a0E(){var w,v=this
$.ah()
w=B.aS()
w.b=C.aU
v.a=w
w=B.aS()
w.b=C.bd
v.b=w
w=B.aS()
w.b=C.bd
v.e=w
w=B.aS()
w.b=C.aU
v.c=w
v.d=B.aS()},
i4(d,e,f){var w=this
w.a_t(d,e,f)
w.aQD(e,f)
w.aQN(e,f)
w.aQM(e,f)},
aQM(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.ll().Of(w.a,a1.r-a1.f)
u=$.bqD().Mc(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fa(u.a(),u.$ti.i("fa<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
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
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dh(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.ll().Of(w.b,a1.y-a1.x)
u=$.bqD().Mc(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fa(u.a(),u.$ti.i("fa<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
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
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dh(n,m,d.a,f.d)}},
aQD(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.h9(new B.G(0,0,0+w.a,0+w.b),this.b)},
aQN(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
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
aQL(d,e,f){var w,v
this.a_t(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.acR(d,e,f,w)
if(v.b.length!==0)this.aQS(d,e,f,w)},
acR(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
e.Dh(m,l,f.c,p.d)
n=p.r
h=n.gdm(n).eA(0,2)
g=C.d.al(o,n.gbS(n).eA(0,2))
J.aX(r.save())
r.translate(h,g)
n=n.gN9().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdm(n).eA(0,2)
o=C.d.al(o,n.gbS(n).eA(0,2))
k=f.d
k===$&&B.a()
s.acS(0,n,new B.m(h,o),k)}}},
aQS(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
a1.Dh(m,l,d.c,p.d)
n=p.r
h=n.gdm(n).eA(0,2)
g=n.gbS(n).eA(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.aX(r.save())
r.translate(f,e)
n=n.gN9().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdm(n).eA(0,2)
g=n.gbS(n).ad(0,2)
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.acS(0,n,new B.m(o,k),j)}}},
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
A.JZ.prototype={
gake(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakf(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakg(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakc(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akz(d){var w,v=this,u=null,t=v.d,s=A.bsg(t.d),r=t.a
r=r.a&&A.bLu(r.b)?r.b:u
w=B.b([B.bj(u,v.c,C.r,u,u,new B.bb(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.avk(w)
if(v.gake())C.b.hs(w,s.$1(!0),new A.A8(D.AB,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakg())C.b.hs(w,s.$1(!0),new A.A8(D.mj,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakf())C.b.hs(w,s.$1(!0),new A.A8(D.AC,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakc())C.b.hs(w,s.$1(!0),new A.A8(D.dB,t,new B.E(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jR(new A.avj(this))}}
A.QE.prototype={
Y(){return new A.WX(new B.bd(null,x.eF))}}
A.WX.prototype={
awG(){switch(this.a.c.a){case 0:return C.e_
case 1:return C.fw
case 2:return C.e0
case 3:return C.fx}},
axb(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awI(d){this.a.toString
return},
az(){this.aO()
$.cw.x1$.push(this.ga3N())},
bb(d){this.bB(d)
$.cw.x1$.push(this.ga3N())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axb()
return B.bu0(B.aZX(0,B.bj(v.awG(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ab0.prototype={
bl(d){return A.bLk(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_s.prototype={
hi(d){if(!(d.b instanceof B.hf))d.b=new B.hf(null,null,C.p)},
hQ(d){if(this.B===C.aG)return this.xR(d)
return this.acs(d)},
aJn(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8m(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dz(d){var w=this.a8l(d,B.hs())
switch(this.B.a){case 0:return d.c1(new B.E(w.a,w.b))
case 1:return d.c1(new B.E(w.b,w.a))}},
a8l(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aG?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fR(u,null)
break
case 1:q=B.fR(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8m(p)
t=Math.max(t,o.aJn(p))
m=r.aG$}return new A.bbL(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8l(o,B.me()),m=n.a,l=n.b
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
q=s.b-p.a8m(r==null?B.V(B.Z("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c2(w))):r)/2
switch(p.B.a){case 0:r=new B.m(q,0)
break
case 1:r=new B.m(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e8(d,e){return this.xS(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uS(d,e)},
l(){this.a2.sbh(0,null)
this.anv()}}
A.bbL.prototype={}
A.avl.prototype={}
A.jE.prototype={
gbI(){return[this.a,this.b]}}
A.nx.prototype={}
A.afH.prototype={}
A.afI.prototype={
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
A.afJ.prototype={}
A.Sy.prototype={
l(){var w,v,u
for(w=this.VD$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.A8.prototype={
gov(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghC(){switch(this.c.a){case 0:return C.e0
case 1:return C.fx
case 2:return C.e_
case 3:return C.fw}},
gaZ8(){var w=this.d,v=A.bsg(w.d),u=A.bzx(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahe(){var w=this.d,v=A.bzx(w.a),u=A.bsg(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.gen()+v.gen()}},
aVh(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gov().c.d
if(o==null)o=$.ll().Of(d,f-e)
w=p.c
v=w!==D.mj
if((!v||w===D.dB)&&p.d instanceof A.ny){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bru(u,d)
w=new B.iK(t,B.ab(t).i("iK<1>"))
s=w.giC(w).f0(0,new A.aWT(u),x.W).fV(0)}else{r=$.bqD()
w=!v||w===D.dB
v=p.d
q=r.aUx(w?v.w:v.z,o,f,e)
v=B.o2(q,new A.aWU(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.j(v).i("t.E"))}w=B.ab(s).i("a9<1,nx>")
w=B.P(new B.a9(s,new A.aWV(p,e,f,o,g,d),w),w.i("au.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gov()
w=j.gov()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bj(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mj
u=!v
t=!u||w===D.dB
s=j.e
r=t?s.a:s.b
t=j.ghC()
s=!u||w===D.dB?C.a6:C.aG
q=B.b([],x.p)
if(w===D.AB||v)j.gov()
if(j.gov().c.a){v=!u||w===D.dB?r:j.gov().c.c
p=!u||w===D.dB?j.gov().c.c:r
o=j.gaZ8()
n=!u||w===D.dB?C.aG:C.a6
j.gahe()
m=j.gahe()
l=!u||w===D.dB
k=j.d
l=l?k.f:k.x
u=!u||w===D.dB?k.r:k.y
q.push(B.bj(i,A.bSy(new A.avl(),n,j.aVh(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AC||w===D.dB)j.gov()
return new B.eT(t,i,i,B.bO7(q,C.m,s,i,C.f,C.N,0,i,i,C.c6),i)}}
A.a_H.prototype={
gbI(){return[this.a,this.b]}}
A.a3S.prototype={
gbI(){return[this.a,this.b]}}
A.Mg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a3U.prototype={
gaaM(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.avQ.prototype={}
A.aC6.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ag0.prototype={}
A.aiZ.prototype={}
A.aj_.prototype={}
A.aj6.prototype={}
A.K7.prototype={
i4(d,e,f){}}
A.vo.prototype={}
A.he.prototype={
gdH(){return null},
gaeQ(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.Mf
if(w)return!0
return!(v instanceof A.Mc)&&!(v instanceof A.Mb)&&!(v instanceof A.Md)&&!(v instanceof A.Ma)&&!w&&!(v instanceof A.Me)}}
A.a3Y.prototype={
gdH(){return this.a.b}}
A.a3Z.prototype={
gdH(){return this.a.b}}
A.a4_.prototype={
gdH(){return this.a.b}}
A.Mb.prototype={}
A.Mc.prototype={}
A.a42.prototype={
gdH(){return this.a.b}}
A.Me.prototype={}
A.Mf.prototype={
gdH(){return this.a.b}}
A.a3X.prototype={
gdH(){return this.a.b}}
A.a3W.prototype={
gdH(){return this.a.b}}
A.Ma.prototype={
gdH(){return this.a.b}}
A.a40.prototype={
gdH(){return this.a.gdH()}}
A.a41.prototype={
gdH(){return this.a.gdH()}}
A.Md.prototype={
gdH(){return this.a.gdH()}}
A.Fp.prototype={
Yo(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aeh(){var w=this,v=null,u=w.ac=B.bt9(v,v)
u.ay=new A.aSa(w)
u.ch=new A.aSb(w)
u.CW=new A.aSc(w)
u.cy=new A.aSd(w)
u.cx=new A.aSe(w)
u=w.aE=B.Gd(v,-1,v)
u.B=new A.aSf(w)
u.a3=new A.aSg(w)
u.V=new A.aSh(w)
u=w.bz=B.a5R(v,w.a2,v)
u.p3=new A.aSi(w)
u.p4=new A.aSj(w)
u.RG=new A.aSk(w)},
cv(){var w=x.k.a(B.I.prototype.ga6.call(this))
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
w.rB(d)}else if(x.gJ.b(d))v.l5(new A.a41(d))},
gMG(d){return new A.aSl(this)},
gMI(d){return new A.aSm(this)},
l5(d){var w,v,u=this
if(u.V==null)return
w=d.gdH()
v=w!=null?u.Zm(w):null
u.V.$2(d,v)
u.a3=C.bn},
gKA(d){return this.a3},
gFf(){var w=this.an
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.fg(0)},
$ijf:1}
A.Nz.prototype={
Y(){return new A.UO(B.b([],x.r),B.y(x.S,x.I),new A.aI2(B.y(x.y,x.dj)),null,null)}}
A.UO.prototype={
u(d){var w,v=this,u=v.a3P(),t=v.CW
t.toString
t=v.aal(t.au(0,v.ghA().gp(0)))
w=v.aal(u)
v.a.toString
return new A.JZ(new A.a5I(t,w,null),u,null)},
aal(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ab(w).i("a9<1,e3>")
w=B.P(new B.a9(w,new A.bbQ(this,d),v),v.i("au.E"))
return d.aPi(w,this.cy)},
a3P(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Ud(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPx(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aOX(new A.E5(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gay_(),t.c,t.d))}return r},
ay0(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaeQ())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.L(new A.bbO(v))
return}v.L(new A.bbP(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3P(),new A.bbR(w)))}}
A.pr.prototype={
WI(d,e,f){var w,v,u,t,s,r,q=B.aa(d.f,e.f,f),p=B.aa(d.r,e.r,f),o=B.aa(d.w,e.w,f),n=B.aa(d.x,e.x,f),m=B.aa(d.y,e.y,f),l=B.aa(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a3T(B.a_S(d.a.b,j.b,f),j.a)
w=A.bzv(d.at,e.at,f)
v=A.bzy(d.c,e.c,f)
u=A.bzA(d.d,e.d,f)
t=A.bBw(d.e,e.e,f)
s=A.kj(d.ch,e.ch,f,A.c0b(),x.cz)
s.toString
r=A.kj(d.CW,e.CW,f,A.c0a(),x.J)
r.toString
u=A.bsN(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UO(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bsN(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPx(d,e,f,g){return this.UO(null,null,d,e,f,g,null)},
aOX(d){var w=null
return this.UO(w,d,w,w,w,w,w)},
aPi(d,e){var w=null
return this.UO(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e3.prototype={
aq2(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qc(n.a,new A.aI1())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
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
ac8(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aI0(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aP3(d){return this.ac8(d,null)},
aP5(d){return this.ac8(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NA.prototype={
gbI(){return[this.a]}}
A.a_A.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mn.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.K2.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.y6.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aHN.prototype={
K(){return"LabelDirection."+this.b}}
A.a3V.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.E5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5J.prototype={
gbI(){return[4,C.hF,16,D.xd,0,120,A.c0d(),!1,!1,!1,0,C.A,A.c0c()]}}
A.mL.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.pY.prototype={}
A.rh.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.te.prototype={
gbI(){return[this.a,this.b]}}
A.FQ.prototype={
gbI(){return[this.a]}}
A.NB.prototype={}
A.yP.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WI(v,w,d)}}
A.afO.prototype={}
A.afP.prototype={}
A.ag1.prototype={}
A.aj0.prototype={}
A.aj3.prototype={}
A.akE.prototype={}
A.akF.prototype={}
A.akG.prototype={}
A.akI.prototype={}
A.akJ.prototype={}
A.akK.prototype={}
A.akL.prototype={}
A.ap_.prototype={}
A.aqA.prototype={}
A.aI2.prototype={
Ud(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xH
u=new A.yT(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yQ(s,r,q,t,!0)}w=null
try{w=C.b.qc(d,new A.aI3())}catch(p){return D.xH}v=null
try{v=C.b.qc(w.a,new A.aI4())}catch(p){return D.xH}o=v.a
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
if(f<m)m=f}e=new A.yQ(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yQ.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.akH.prototype={}
A.aI5.prototype={
i4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaM(0)){v=a3.b
u=v.a
v=v.b
$.ah()
a3.a.jm(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aS())
a3.aNX(new B.G(0,0,u,v))}d.a_s(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aQJ(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aQF(a3,q,a4)
d.aQK(a3,q,a4)
d.akS(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dB("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v6(q,i,j,k))}}d.aQR(a3,s,a4)
if(w.gaaM(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aQP(a2,a3,v,f,new A.FQ(g),a4)}},
aQF(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bsf(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.YW(o,e,u,f)
s=p.aim(o,e,t,u,f)
r=p.YY(o,e,t,u,f,!0)
q=p.ail(o,e,t,u,f)
p.aQI(d,s,p.YV(o,e,t,u,f,!0),f,e)
p.aQC(d,q,r,f,e)
p.aQG(d,t,e)
p.aQE(d,t,e,f)}},
aQJ(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bsf(a6.a),a9=A.bsf(a7.a)
if(a8.length!==a9.length)throw B.e(B.bE("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ab(m).i("cE<1>")
k=B.P(new B.cE(m,l),l.i("au.E"))
j=a3.YW(a4,a6,n,b3)
i=a3.YX(a4,a7.aP5(k),k,b3,j)
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
a2=new B.mq(C.dp,C.bd,C.dT,C.ek,C.dI).ek()
m=B.dG(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v3(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fS(i,a3.r)
w.restore()}},
aQK(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z1(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fG)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dC(q.b,w,f)
n.$4(q,p/v*100,e,r).acQ(s,q,new B.m(p,o))}}},
aQR(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h_(b3,new A.aI8())
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
if(f===d)B.V(B.rg(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.li(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.li(q.$2(m,k))))
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
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dh(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.rg(d.a))
f.acQ(t,j,new B.m(h,g))}}},
YX(d,e,f,g,h){var w=this.aio(d,e,f,g,h)
return w},
YW(d,e,f,g){return this.YX(d,e,f,g,null)},
aio(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.ah().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dC(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.f5(d,a0))
if(e===1)g.aA(new B.ct(d,a0))}else g.aA(new B.ct(d,a0))
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
s=new B.L0(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hD(r)}return g},
YY(d,e,f,g,h,i){var w,v,u,t,s=this
$.ah()
w=B.bsL(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aA(new B.ct(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aA(new B.ct(u,t))
w.aA(new B.ct(s.fc(v.h(g,0).a,d,h),s.dC(v.h(g,0).b,d,h)))
w.aA(new B.p1())
return w},
aim(d,e,f,g,h){return this.YY(d,e,f,g,h,!1)},
YV(d,e,f,g,h,i){var w,v,u,t=this
$.ah()
w=B.bsL(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aA(new B.ct(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aA(new B.ct(u,0))
w.aA(new B.ct(t.fc(v.h(g,0).a,d,h),t.dC(v.h(g,0).b,d,h)))
w.aA(new B.p1())
return w},
ail(d,e,f,g,h){return this.YV(d,e,f,g,h,!1)},
aQI(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bt8(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fS(e,r.r)},
aQC(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bt8(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fS(e,r.r)},
aQG(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Nt(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.jU:C.dT
u.e=C.ek
u.r=v.gp(0)
u.seS(null)
u.c=f.x
u.r=v.gp(0)
$.ll()
u.z=new B.yY(C.aC,w.c*0.57735+0.5)
d.a.fS(B.bsM(A.ayK(e,f.cy),w.b),this.f)},
aQE(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.jU:C.dT
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
A.bt8(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bQB(t)
d.a.fS(A.ayK(e,f.cy),s.f)},
aQP(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bFG(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.ll().Zs(b4,u.b)
s=u.a
r=w.k(0,C.iF)?new B.ke(1):w
q=new B.tb(new B.hH(s,a8,a8,C.bn,a8,a8,a8,a8,a8,a8,t),C.d_,C.v,r,a8,a8,a8,a8,C.bu,a8)
q.af8(120)
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
i=a7.Zt(b3,l,D.xd,0)
b3=i+l
w=j+k
h=new B.aU(4,4)
g=B.Fd(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bFF(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.ll().K4(new B.E(t,w),0).b
d=new B.m(0,b1)
a0=new B.m(g.a,g.b)
a1=$.ll().K4(new B.E(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vp(0,new A.aI6(a7,b5,g),a0,d,new B.E(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bT7(q.r,q.w)
A:{if(D.Dr===a5){a6=a3
break A}if(D.Ds===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vp(0,new A.aI7(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.E(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z1(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
W4(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aiP(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h_(t,new A.aI9())
return t.length===0?null:t},
aiP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fG))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dC(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hs(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.pY(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v6.prototype={}
A.a5I.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aI5()
t.a0E()
$.ah()
w=B.aS()
w.b=C.aU
t.f=w
w=B.aS()
w.b=C.bd
t.r=w
w=B.aS()
w.b=C.aU
t.w=w
w=B.aS()
w.b=C.bd
w.r=C.E.gp(0)
w.a=D.a_h
t.x=w
w=B.aS()
w.b=C.aU
w.r=C.B.gp(0)
t.y=w
w=B.aS()
w.b=C.bd
w.r=C.l.gp(0)
t.z=w
w=B.aS()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.Q=w
t=new A.a9O(this.d,v,u,t,d,C.bn,new B.bo(),B.aH(x.v))
t.bj()
t.Yo(v.cx)
t.aeh()
return t},
bx(d,e){e.sij(0,this.d)
e.sY9(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bd()}}
A.a9O.prototype={
sij(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bd()},
sY9(d){var w=this
if(w.hX.k(0,d))return
w.hX=d
w.a0c(d.cx)
w.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fT.i4(w,new A.a04(t,v),new A.vo(u.aB,u.hX,u.cV,x.o))
s.restore()},
Zm(d){var w=this,v=w.gC(0)
return new A.NB(w.fT.W4(d,v,new A.vo(w.aB,w.hX,w.cV,x.o)))}}
A.MG.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a04.prototype={
aNX(d){this.a.a.clipRect(B.dG(d),$.oL()[1],!0)
return null},
acY(d,e){d.aM(this.a,e)},
Vp(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aX(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.ll()
s.Y7(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dh(d,e,f,g){var w=B.cB($.ah().r)
w.aA(new B.f5(d.a,d.b))
w.aA(new B.ct(e.a,e.b))
this.a.fS(A.ayK(w,g),f)}}
A.yT.prototype={
gbI(){return[this.a]}}
A.akS.prototype={}
A.a0e.prototype={}
A.b_n.prototype={
K4(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.m((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aVR(d,e){var w,v,u,t,s
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
aVS(d,e){var w,v
if(d==null)return D.a_t
w=d.b
v=e/2
return d.aP8(w>v?v:w)},
Of(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aYT(w)},
aYT(d){if(d<1)return this.aI_(d)
return this.a7r(d)},
aI_(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7r(d*q)/q},
a7r(d){var w,v=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a4(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a4(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a4(Math.pow(10,v))
else return C.d.a4(Math.pow(10,v))},
aiD(d){if(d>=1)return 1
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
v=B.bQ(d,C.va)
v=v==null?null:v.ay
return v===!0?w.c2(C.m1):w},
aiv(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.Px.prototype={
a3r(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st2(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3r(v)||w.a3r(d))w.a7()
else{w.cP=w.D=null
w.bd()}},
shC(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cP=w.D=null
w.bd()},
scC(d){var w=this
if(w.dn==d)return
w.dn=d
w.G=w.cP=w.D=null
w.bd()},
dz(d){var w,v=this.D$
if(v!=null){w=v.ap(C.ae,C.iz,v.gdh())
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xE(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xE(w)}}else return new B.E(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var w=this.D$
return w==null?null:w.fK(C.iz,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dG(C.iz,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.I.prototype.ga6.call(u))
v=new B.as(0,w.b,0,w.d).xE(u.D$.gC(0))
u.fy=t.a(B.I.prototype.ga6.call(u)).c1(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.I.prototype.ga6.call(u)).xE(u.D$.gC(0))
break}u.cP=u.D=null}else{t=x.k.a(B.I.prototype.ga6.call(u))
u.fy=new B.E(B.L(0,t.a,t.b),B.L(0,t.c,t.d))}},
Tq(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c1(new Float64Array(16))
w.fY()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bv3(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yv(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yv(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pv(n.a,n.b,0)
q.qO(w.a/s.a,w.b/s.b,1,1)
q.fW(-o,-p.b,0,1)
m.cP=q}},
a6n(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.z7(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i_.prototype.gi3.call(s)
t=s.ch.a
return d.z4(r,e,v,u,t instanceof B.pZ?t:null)}else s.kq(d,e.ad(0,w))
return null},
aM(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tq()
w=s.D
w.toString
if(w&&s.eX!==C.r){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uh?t:null
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFH(),s.eX,t))}else s.ch.sbh(0,s.a6n(d,e))},
e8(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tq()
return d.JO(new A.aSv(v),e,v.cP)},
tq(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eU(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OI()
else{this.Tq()
w=this.cP
w.toString
e.fU(0,w)}}}
A.a3O.prototype={
bl(d){var w=new A.Px(this.e,this.f,B.e1(d),C.r,null,new B.bo(),B.aH(x.v))
w.bj()
w.sc8(null)
return w},
bx(d,e){e.st2(this.e)
e.shC(this.f)
e.scC(B.e1(d))
if(C.r!==e.eX){e.eX=C.r
e.bd()
e.cu()}}}
var z=a.updateTypes(["M(q_)","C(ev)","~(w,fw)","M(e3,w)","M(M,q_)","bI(M,td)","pf(M)","w(pY,pY)","~(he,K4?)","Hi(A,bD)","IF(nR)","HC(nQ)","vc(@)","e3(M)","w4(@)","am(M,td)","C3(@)","ux(dR<ux>)","M(vc)","M(w4)","wm(A,bD)","AG(z)","U<~>()","q_(@)","xi(@)","M(i9)","C(fw)","~(w,i9)","~(@)","jE(nx)","c(nx)","jE(bB<w,M>)","jE(M)","nx(jE)","~(he,NB?)","e3(e3)","Dr(dR<aCJ>)","yP(@)","mA(G0<mA>)","te(w)","uy(ev,M,e3,w)","rh(mL)","C(e3)","w(v6,v6)","M(fw)","U<nR>(cn<nR>)","pZ?(rw,m)","w(w,w,M)","fw(fw,fw,M)","i9(i9,i9,M)","mm(mm,mm,M)","Ck?(fw,w,i9,w)","F(fw)","c(M,td)","ev(ev,ev,M)","C(M)","mG(mG,mG,M)","n4(n4,n4,M)","kE(kE,kE,M)","l3(l3,l3,M)","h(kE)","h(l3)","e3(e3,e3,M)","mn(mn,mn,M)","uy(ev,M,e3,w{size:M?})","C(ev,e3)","M(m,m)","u<te>(e3,u<w>)","U<nQ>(cn<nQ>)","u<rh>(u<mL>)","F(mL)","y4(ff<A?>)"])
A.aCG.prototype={
$1(d){var w=B.eg(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q_(J.ak(v==null?"":v),A.oH(w.h(0,"revenue_net")),A.oH(w.h(0,"expense_net")),A.oH(w.h(0,"result_net")))},
$S:z+23}
A.aCH.prototype={
$1(d){var w,v,u,t=B.eg(x.f.a(d),x.N,x.z),s=B.ap(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.ap(t.h(0,"code"))
v=A.oH(t.h(0,"gross"))
u=B.bC(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.vc(s,r,w,v,u,A.oH(t.h(0,"avg_basket")))},
$S:z+12}
A.aCI.prototype={
$1(d){var w,v=B.eg(x.f.a(d),x.N,x.z),u=B.ap(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.bC(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w4(u,t,w,A.oH(v.h(0,"gross")))},
$S:z+14}
A.aCW.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.C3(v,u,J.ak(t==null?"expense":t),A.tR(w.h(d,"net")),A.tR(w.h(d,"tax")),A.tR(w.h(d,"gross")))},
$S:z+16}
A.boq.prototype={
$1(d){return new A.ux(d.aC($.cd(),x.A))},
$S:z+17}
A.bor.prototype={
$1(d){return new A.Dr(d.aC($.bKd(),x.D))},
$S:z+36}
A.bqd.prototype={
$1(d){return E.bse()},
$S:z+38}
A.bos.prototype={
$1(d){var w=d.aC($.x0(),x.P)
return d.aC($.atJ(),x.a).FG(w)},
$S:z+45}
A.bop.prototype={
$1(d){var w=d.aC($.x0(),x.P)
return d.aC($.atJ(),x.a).FC(w)},
$S:z+68}
A.boo.prototype={
$1(d){return this.aih(d)},
aih(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aC($.cd(),x.A).i7("finance_balance_kpis",t),$async$$1)
case 3:s=r.eg(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:343}
A.aCF.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aN(0,$.atJ(),x.a).px(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCE.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aN(0,$.atJ(),x.a).Lb(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCU.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.br1()
if(s.e==null)B.V(B.Z(y.b))
s.gct().cr(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCN.prototype={
$0(){return this.a.J5(this.b,this.c)},
$S:0}
A.aCO.prototype={
$0(){return this.a.B1(this.b,this.c)},
$S:0}
A.aCP.prototype={
$0(){return B.nW(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aCQ.prototype={
$0(){var w=this
return w.a.B2(w.b,w.c,w.d)},
$S:0}
A.aCT.prototype={
$0(){return D.aps},
$S:95}
A.aCS.prototype={
$2(d,e){return new A.Hi(B.i(d),null)},
$S:z+9}
A.aCR.prototype={
$1(d){return new A.IF(d,null)},
$S:z+10}
A.aCM.prototype={
$1(d){var w=null,v=this.a,u=$.ep()
v=B.l("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mi(B.b([B.dT(C.d1,w,w,new A.aCK(u),w,w),B.dW(F.uQ,new A.aCL(u),B.ed(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.uR)},
$S:59}
A.aCK.prototype={
$0(){B.bl(this.a,!1).dr(!1)
return null},
$S:0}
A.aCL.prototype={
$0(){B.bl(this.a,!1).dr(!0)
return null},
$S:0}
A.be1.prototype={
$0(){var w=this.a.aN(0,$.x0().gi2(),x.V),v=E.bse()
w.Aq(0,v)
return v},
$S:0}
A.be2.prototype={
$0(){var w=this.a.aN(0,$.x0().gi2(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.mA(B.bJ(B.aY(v),1,1,0,0,0,0),v)
w.Aq(0,u)
return u},
$S:0}
A.be3.prototype={
$0(){return this.a.Iu(this.b,this.c)},
$S:0}
A.be0.prototype={
$2(d,e){return new B.oo(B.T(d).aOu(B.T(d).ax.aPn(C.h,C.n)),e,null)},
$S:985}
A.bjw.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.e0(),s=A.Nl(!1,C.xx,"Umsatz 7 %",t.ar(u.a),w),r=A.Nl(!1,C.xx,"Umsatz 19 %",t.ar(u.b),w),q=A.Nl(!0,D.a97,"Umsatz netto",t.ar(u.c),w),p=A.Nl(!1,D.a96,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return E.aFa(1.7,B.b([s,r,q,p,A.Nl(!0,C.nv,"Ergebnis",n,o<0?C.ak:C.aQ),A.Nl(!1,C.j0,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,F.lA,!0)},
$S:130}
A.aHM.prototype={
$0(){return D.apq},
$S:95}
A.aHL.prototype={
$2(d,e){var w=null
return B.bN(C.ak,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.h,13,C.k),w,w,w),C.fD,w,C.G,w,3)},
$S:276}
A.aHK.prototype={
$1(d){return new A.HC(d,null)},
$S:z+11}
A.bbC.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.e0(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ab(g).i("a9<1,M>"),e=f.i("au.E"),d=B.P(new B.a9(g,new A.bbs(),f),e)
i=A.kd(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.P(new B.a9(g,new A.bbt(),f),e)
d=A.kd(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.P(new B.a9(g,new A.bbu(),f),e)
k=A.kd(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bbv(),f),e)
w=A.kd(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bbw(),f),e)
v=A.kd(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bbx(),f),e)
u=A.kd(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bby(),f),e)
t=A.kd(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.P(new B.a9(g,new A.bbz(),f),e)
h=A.kd(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.P(new B.a9(g,new A.bbA(m),f),e)
m=A.kd(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=C.d.am(l,1)
l=B.P(new B.a9(g,new A.bbB(l),f),e)
return E.aFa(n,B.b([i,d,k,w,v,u,t,h,m,A.kd(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,l,j)],x.p),o,12,12,F.lA,!0)},
$S:130}
A.bbs.prototype={
$1(d){return d.b},
$S:z+0}
A.bbt.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bbu.prototype={
$1(d){return d.d},
$S:z+0}
A.bbv.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbw.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bbx.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bby.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbz.prototype={
$1(d){return d.d},
$S:z+0}
A.bbA.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbB.prototype={
$1(d){return this.a},
$S:z+0}
A.bbD.prototype={
$0(){return A.bv0(this.b,1.45,new A.SW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbE.prototype={
$0(){return A.bv0(this.b,1.6,new A.T6(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bnz.prototype={
$1(d){var w=this,v=null,u=B.b0(16),t=x.p,s=B.b([B.av(B.b([B.aR(B.l(w.a,v,v,v,B.c7(C.h,18,C.q),v,v,v),1),B.ef(v,v,D.aaZ,v,v,new A.bny(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.l(w.b,v,v,v,B.D(C.u,12,C.aP),v,v,v),C.a_],t))
s.push(C.x)
s.push(B.cg(new B.mk(w.c,w.d,v),v,17976931348623157e292))
return B.a39(v,C.l,new B.af(C.am,B.ag(s,C.D,C.f,C.N),v),v,v,v,C.hG,C.uB,v,new B.dg(u,C.A),v)},
$S:986}
A.bny.prototype={
$0(){return B.bl(this.a,!1).f1()},
$S:0}
A.bbF.prototype={
$0(){var w=this.a,v=B.ba(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bv0(this.b,2.4,new A.X7(w.w,w.y,w.z,null),C.b.co(u," \xb7 "),v)
return null},
$S:0}
A.biT.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.biU.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.biV.prototype={
$1(d){return A.aI0(null,1.4,null,C.ak,0.35,D.af6,D.Di,null,!1,!1,!1,!1,D.EB,!1,10,D.Y1,!0,C.lb,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+13}
A.b2U.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b2W.prototype={
$2(d,e){var w=null
return B.l(this.a.aJd(d),w,w,w,B.D(C.u,10,C.O),w,w,w)},
$S:z+15}
A.b2X.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zz
return new B.af(C.kH,B.l(C.c.cT(this.a[v].a,5),w,w,w,B.D(C.u,9,C.O),w,w,w),w)},
$S:z+5}
A.b2V.prototype={
$1(d){return D.a7M},
$S:z+6}
A.b3H.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3I.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3J.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b3K.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zz
return new B.af(C.kH,B.l(this.a[v],w,w,w,B.D(C.h,12,C.q),w,w,w),w)},
$S:z+5}
A.bc8.prototype={
$1(d){return d.d},
$S:z+18}
A.bc9.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bkN.prototype={
$1(d){return d.d},
$S:z+19}
A.bkO.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b1o.prototype={
$0(){return D.apy},
$S:95}
A.b1n.prototype={
$2(d,e){return new A.wm("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+20}
A.b1m.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bN(o,B.ag(B.b([B.l("Noch keine Bilanzdaten erfasst.",o,o,o,B.D(C.h,14,C.O),o,o,o),C.a_,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.D(C.u,12.5,C.k),o,o,o),C.x,B.jU(C.Eb,D.aCj,new A.b1i(p.b,p.c),o)],x.p),C.D,C.f,C.i),C.ar,o,C.G,o,3)
w=new A.b1p(d)
v=C.b.fF(p.a.e.d,0,new A.b1j())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jR(new A.b1k(new A.b1q(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ag(B.b([w,C.a_,B.av(B.b([B.aR(B.l("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.D(C.u,11,C.k),o,o,o),1),B.pV(D.abp,D.aBr,new A.b1l(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:217}
A.b1i.prototype={
$0(){return A.at3(this.a,this.b,null)},
$S:0}
A.b1p.prototype={
$1(d){var w=B.bC(J.a3(this.a,d))
return w==null?null:w},
$S:987}
A.b1q.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.ba(w,".",",")+" %"}return w},
$S:31}
A.b1j.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1k.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.kd(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fh,o.$1("liquidity1_pct")),m=A.kd(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fh,o.$1("liquidity2_pct")),l=A.kd(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fh,o.$1("liquidity3_pct"))
o=A.kd(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fh,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.ba(w,".",",")+" %"}w=A.kd(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fh,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.e0()
v=u.ar(v)
return E.aFa(p,B.b([n,m,l,o,w,A.kd(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.fh,v)],x.p),q,12,12,F.lA,!0)},
$S:130}
A.b1l.prototype={
$0(){return A.at3(this.a,this.b,this.c)},
$S:0}
A.bnx.prototype={
$1(d){return new A.AG(this.a,new A.bnw(this.b),this.c,null)},
$S:z+21}
A.bnw.prototype={
$0(){var w=this.a,v=$.bxd()
if(w.e==null)B.V(B.Z(y.b))
w.gct().cr(v)},
$S:0}
A.b1d.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1e.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1g.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.tX(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.L(new A.b1f(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1f.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1h.prototype={
$0(){return B.bl(this.a,!1).f1()},
$S:0}
A.b1r.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1s.prototype={
$1(d){return new A.xi(x.B.a(d),this.a.a.r)},
$S:z+24}
A.avB.prototype={
$1(d){return d.e},
$S:z+25}
A.avC.prototype={
$2(d,e){return d+e},
$S:43}
A.avE.prototype={
$1(d){return d.c.length!==0},
$S:z+26}
A.avG.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdm(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+27}
A.avH.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eN(t,r)
s=s.x
s===$&&B.a()
w.eN(t,s)
u.acY(v.d,v.e)},
$S:0}
A.avk.prototype={
$1(d){return 0},
$S:988}
A.avj.prototype={
$2(d,e){return B.fh(C.bS,this.a.akz(e),C.t,C.bt,null)},
$S:989}
A.aWR.prototype={
$1(d){return d.a},
$S:z+29}
A.aWS.prototype={
$1(d){return d.b},
$S:z+30}
A.aWT.prototype={
$1(d){return new A.jE(this.a.ch[d.a].a,d.b)},
$S:z+31}
A.aWU.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mj||v===D.dB))t=1-t
return new A.jE(d,t*w.d)},
$S:z+32}
A.aWV.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gov(),p=d.a
r.gov()
r=$.ll()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.am(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.am(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.am(v/1000,1)
t="K"}else{u=C.d.am(v,r.aiD(Math.abs(s.b-s.c)))
t=""}if(C.c.hG(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nx(d,q.c.b.$2(p,new A.td(u+t,s.e)))},
$S:z+33}
A.aSa.prototype={
$1(d){this.a.l5(new A.a3Y(d))},
$S:180}
A.aSb.prototype={
$1(d){this.a.l5(new A.a3Z(d))},
$S:40}
A.aSc.prototype={
$1(d){this.a.l5(new A.a4_(d))},
$S:29}
A.aSd.prototype={
$0(){this.a.l5(D.a11)},
$S:0}
A.aSe.prototype={
$1(d){this.a.l5(new A.Mc())},
$S:44}
A.aSf.prototype={
$1(d){this.a.l5(new A.a42(d))},
$S:42}
A.aSg.prototype={
$0(){this.a.l5(D.a12)},
$S:0}
A.aSh.prototype={
$1(d){this.a.l5(new A.Mf(d))},
$S:101}
A.aSi.prototype={
$1(d){this.a.l5(new A.a3X(d))},
$S:182}
A.aSj.prototype={
$1(d){this.a.l5(new A.a3W(d))},
$S:204}
A.aSk.prototype={
$1(d){return this.a.l5(new A.Ma(d))},
$S:184}
A.aSl.prototype={
$1(d){return this.a.l5(new A.a40(d))},
$S:57}
A.aSm.prototype={
$1(d){return this.a.l5(new A.Md(d))},
$S:55}
A.bbQ.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aP3(w==null?B.b([],x.t):w)},
$S:z+35}
A.bbO.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bbP.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h_(w,new A.bbN())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.FQ(w))},
$S:0}
A.bbN.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bbR.prototype={
$1(d){return new A.yP(x.hf.a(d),this.a.a.r)},
$S:z+37}
A.aI1.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.boe.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bzz(t?A.buP(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.te(w,new A.y6(!0,A.bvz(),new A.bod(v)))},
$S:z+39}
A.bod.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bO5(A.buP(d,e,f),w,A.bWI(d,e,f))},
$S:z+40}
A.bob.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iU(v,v,u==null?D.dh:u,v,v,v,v,v,v,v,v,14,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rh(C.d.j(d.b),w)},
$S:z+41}
A.aI3.prototype={
$1(d){return d.a.length!==0},
$S:z+42}
A.aI4.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.aI8.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+43}
A.aI6.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eN(v,t)
u=u.Q
u===$&&B.a()
w.eN(v,u)},
$S:0}
A.aI7.prototype={
$0(){this.a.acY(this.b,this.c)},
$S:0}
A.aI9.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avu.prototype={
$1(d){return d.gdm(0)},
$S:z+44}
A.avv.prototype={
$2(d,e){return d+e},
$S:43}
A.avy.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iK(v,B.ab(v).i("iK<1>")).aq(0,new A.avz(w,this.a/(u+1),this.c))},
$S:0}
A.avz.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdm(0)/2
this.c[d]=v
w.a=v+e.gdm(0)/2},
$S:z+2}
A.avw.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdm(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdm(0)/2},
$S:z+2}
A.avx.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdm(0)/2
this.c[d]=u
u+=e.gdm(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aF9.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:990}
A.ayL.prototype={
$1(d){return d},
$S:991}
A.aSv.prototype={
$2(d,e){return this.a.An(d,e)},
$S:19};(function aliases(){var w=A.JY.prototype
w.a_s=w.i4
w.akS=w.aQL
w.akT=w.acR
w=A.Sy.prototype
w.anv=w.l
w=A.K7.prototype
w.a_t=w.i4
w=A.Fp.prototype
w.a0c=w.Yo})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c_h","bO2",71)
v(A.SA.prototype,"gaD6","HU",22)
u(A.SB.prototype,"garh","ari",8)
t(A,"bZ8",3,null,["$3"],["bLn"],48,0)
t(A,"bZ9",3,null,["$3"],["bLo"],49,0)
t(A,"bZa",3,null,["$3"],["bLp"],50,0)
t(A,"bZc",4,null,["$4"],["bZV"],51,0)
w(A,"bZb","bZU",52)
s(A,"bv4","bZW",53)
t(A,"bZ3",3,null,["$3"],["bO6"],54,0)
w(A,"Z9","c1i",55)
w(A,"at5","bZZ",6)
t(A,"bZ5",3,null,["$3"],["bOS"],56,0)
t(A,"bZ7",3,null,["$3"],["bU0"],57,0)
t(A,"bZ4",3,null,["$3"],["bOR"],58,0)
t(A,"bZ6",3,null,["$3"],["bU_"],59,0)
w(A,"c8o","bOQ",60)
w(A,"c8p","bTZ",61)
r(A.WX.prototype,"ga3N","awI",28)
u(A.UO.prototype,"gay_","ay0",34)
t(A,"c0b",3,null,["$3"],["bPm"],62,0)
t(A,"c0a",3,null,["$3"],["bLr"],63,0)
w(A,"c0e","c1j",1)
t(A,"bG2",4,null,["$5$size","$4"],["bEu",function(d,e,f,g){return A.bEu(d,e,f,g,null)}],64,0)
s(A,"bvz","c1h",65)
s(A,"bG3","bYR",66)
s(A,"bG6","c_1",67)
s(A,"bG5","bZY",3)
s(A,"bG4","bZX",3)
w(A,"c0d","bFG",69)
w(A,"c0c","bFF",70)
u(A.Px.prototype,"gaFH","a6n",46)
t(A,"Ze",3,null,["$3"],["c09"],47,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5u,A.af0,A.ak1,A.Ia,A.IF,A.aeZ,A.Hi,A.HC,A.ajm,A.akx,A.TF,A.X7,A.SW,A.T6,A.al0,A.ahs,A.Iu,A.aqx,A.wm,A.JZ,A.A8])
u(B.A,[A.ux,A.Dr,A.b8,A.ag0,A.afR,A.afT,A.afU,A.afL,A.aj6,A.afX,A.afV,A.avQ,A.aqB,A.avD,A.afS,A.K7,A.a4x,A.td,A.ap1,A.ap0,A.afK,A.aj5,A.ev,A.aj2,A.aj4,A.ang,A.ajT,A.are,A.aj3,A.aiM,A.aj1,A.avi,A.bbL,A.avl,A.afH,A.nx,A.aiZ,A.aj_,A.vo,A.he,A.akF,A.akI,A.afO,A.ag1,A.afP,A.aj0,A.akL,A.akJ,A.aqA,A.ap_,A.aI2,A.akH,A.v6,A.a04,A.akS,A.a0e,A.b_n])
u(B.uv,[A.q_,A.vc,A.w4,A.ay9,A.azg,A.nQ,A.C3,A.nR])
u(B.nC,[A.aCG,A.aCH,A.aCI,A.aCW,A.boq,A.bor,A.bqd,A.bos,A.bop,A.boo,A.aCR,A.aCM,A.aHK,A.bbs,A.bbt,A.bbu,A.bbv,A.bbw,A.bbx,A.bby,A.bbz,A.bbA,A.bbB,A.bnz,A.biV,A.b2V,A.b3H,A.b3I,A.bc8,A.bkN,A.b1m,A.b1p,A.b1q,A.bnx,A.b1s,A.avB,A.avE,A.avk,A.aWR,A.aWS,A.aWT,A.aWU,A.aWV,A.aSa,A.aSb,A.aSc,A.aSe,A.aSf,A.aSh,A.aSi,A.aSj,A.aSk,A.aSl,A.aSm,A.bbQ,A.bbR,A.aI1,A.boe,A.bod,A.bob,A.aI3,A.aI4,A.avu,A.ayL])
t(A.y4,B.fr)
u(B.xx,[A.aCF,A.aCE,A.aCU,A.aCN,A.aCO,A.aCP,A.aCQ,A.aCT,A.aCK,A.aCL,A.be1,A.be2,A.be3,A.aHM,A.bbD,A.bbE,A.bny,A.bbF,A.b1o,A.b1i,A.b1l,A.bnw,A.b1d,A.b1e,A.b1g,A.b1f,A.b1h,A.b1r,A.avH,A.aSd,A.aSg,A.bbO,A.bbP,A.aI6,A.aI7,A.avy])
u(B.xE,[A.y5,A.amb,A.a5v,A.afN])
u(B.xy,[A.aCS,A.be0,A.bjw,A.aHL,A.bbC,A.biT,A.biU,A.b2U,A.b2W,A.b2X,A.b3J,A.b3K,A.bc9,A.bkO,A.b1n,A.b1j,A.b1k,A.avC,A.avG,A.avj,A.bbN,A.aI8,A.aI9,A.avv,A.avz,A.avw,A.avx,A.aF9,A.aSv])
u(B.O,[A.AG,A.QE])
u(B.a0,[A.SA,A.WX])
u(B.MT,[A.K3,A.Nz])
u(B.xa,[A.SB,A.UO])
t(A.a_H,A.ag0)
t(A.afG,A.a_H)
t(A.a_r,A.afG)
u(A.a_r,[A.afQ,A.akG])
t(A.ny,A.afQ)
u(B.U4,[A.avs,A.acs,A.Cj,A.aC6,A.aHN,A.MG])
t(A.fw,A.afR)
t(A.i9,A.afT)
t(A.mm,A.afU)
t(A.a_y,A.afL)
t(A.Mg,A.aj6)
u(A.Mg,[A.afW,A.akK])
t(A.a_D,A.afW)
t(A.a_E,A.afX)
t(A.Ck,A.afV)
u(A.avQ,[A.K4,A.NB])
t(A.acu,A.aqB)
t(A.afY,A.acu)
t(A.a_F,A.afY)
u(B.b6,[A.xi,A.yP])
t(A.u9,A.afS)
t(A.JY,A.K7)
u(A.JY,[A.avF,A.aI5])
u(B.Nv,[A.a_B,A.a5I])
u(B.J,[A.Fp,A.afI])
u(A.Fp,[A.a9B,A.a9O])
t(A.pO,A.ap1)
t(A.ab_,A.ap0)
t(A.oT,A.afK)
t(A.uz,A.aj5)
t(A.y7,A.aj2)
t(A.pf,A.aj4)
t(A.Pd,A.ang)
t(A.mG,A.ajT)
t(A.n4,A.are)
u(A.pf,[A.ajS,A.ard])
t(A.kE,A.ajS)
t(A.l3,A.ard)
t(A.a3V,A.aj3)
u(A.a3V,[A.ajR,A.arc])
t(A.a4I,A.ajR)
t(A.acS,A.arc)
t(A.LZ,A.aiM)
t(A.uy,A.aj1)
t(A.M9,A.uy)
t(A.ab0,B.fV)
t(A.afJ,A.afI)
t(A.Sy,A.afJ)
t(A.a_s,A.Sy)
t(A.jE,A.afH)
t(A.a3S,A.aiZ)
t(A.a3U,A.aj_)
u(A.he,[A.a3Y,A.a3Z,A.a4_,A.Mb,A.Mc,A.a42,A.Me,A.Mf,A.a3X,A.a3W,A.Ma,A.a40,A.a41,A.Md])
t(A.pr,A.akG)
t(A.e3,A.akF)
t(A.NA,A.akI)
t(A.a_A,A.afO)
t(A.mn,A.ag1)
t(A.K2,A.afP)
t(A.y6,A.aj0)
t(A.E5,A.akK)
t(A.a5J,A.akL)
t(A.akE,A.ev)
t(A.mL,A.akE)
t(A.pY,A.mL)
t(A.rh,A.akJ)
t(A.te,A.aqA)
t(A.FQ,A.ap_)
t(A.yQ,A.akH)
t(A.yT,A.akS)
t(A.Px,B.PK)
t(A.a3O,B.bI)
w(A.afL,A.b8)
w(A.afQ,A.b8)
w(A.afR,A.b8)
w(A.afT,A.b8)
w(A.afU,A.b8)
w(A.afV,A.b8)
w(A.afW,A.b8)
w(A.afX,A.b8)
w(A.afY,A.b8)
w(A.afS,A.b8)
w(A.afG,A.b8)
w(A.afK,A.b8)
w(A.aiM,A.b8)
w(A.aj1,A.b8)
w(A.aj2,A.b8)
w(A.aj4,A.b8)
w(A.aj5,A.b8)
w(A.ajS,A.b8)
w(A.ajR,A.b8)
w(A.ajT,A.b8)
w(A.ang,A.b8)
w(A.ap0,A.b8)
w(A.ap1,A.b8)
w(A.aqB,A.b8)
w(A.ard,A.b8)
w(A.arc,A.b8)
w(A.are,A.b8)
w(A.afH,A.b8)
v(A.afI,B.aA)
w(A.afJ,B.dZ)
v(A.Sy,B.a2T)
w(A.ag0,A.b8)
w(A.aiZ,A.b8)
w(A.aj_,A.b8)
w(A.aj6,A.b8)
w(A.afO,A.b8)
w(A.afP,A.b8)
w(A.ag1,A.b8)
w(A.aj0,A.b8)
w(A.aj3,A.b8)
w(A.akE,A.b8)
w(A.akF,A.b8)
w(A.akG,A.b8)
w(A.akI,A.b8)
w(A.akJ,A.b8)
w(A.akK,A.b8)
w(A.akL,A.b8)
w(A.ap_,A.b8)
w(A.aqA,A.b8)
w(A.akH,A.b8)
w(A.akS,A.b8)})()
B.bl_(b.typeUniverse,JSON.parse('{"a5u":{"a_":[],"c":[]},"Dr":{"aCJ":[]},"y4":{"fr":["be<~>"],"fr.T":"be<~>"},"IF":{"a_":[],"c":[]},"Hi":{"a_":[],"c":[]},"y5":{"bq":[],"O":[],"c":[]},"af0":{"a_":[],"c":[]},"ak1":{"a_":[],"c":[]},"amb":{"bq":[],"O":[],"c":[]},"Ia":{"a_":[],"c":[]},"aeZ":{"a_":[],"c":[]},"HC":{"a_":[],"c":[]},"wm":{"a_":[],"c":[]},"AG":{"O":[],"c":[]},"a5v":{"bq":[],"O":[],"c":[]},"ajm":{"a_":[],"c":[]},"akx":{"a_":[],"c":[]},"TF":{"a_":[],"c":[]},"X7":{"a_":[],"c":[]},"SW":{"a_":[],"c":[]},"T6":{"a_":[],"c":[]},"al0":{"a_":[],"c":[]},"ahs":{"a_":[],"c":[]},"Iu":{"a_":[],"c":[]},"aqx":{"a_":[],"c":[]},"afN":{"bq":[],"O":[],"c":[]},"SA":{"a0":["AG"]},"K3":{"O":[],"c":[]},"SB":{"a0":["K3"]},"ny":{"b8":[]},"fw":{"b8":[]},"i9":{"b8":[]},"mm":{"b8":[]},"Ck":{"b8":[]},"xi":{"b6":["ny"],"b_":["ny"],"b_.T":"ny","b6.T":"ny"},"a_y":{"b8":[]},"a_D":{"b8":[]},"a_E":{"b8":[]},"a_F":{"b8":[]},"u9":{"b8":[]},"a_B":{"aV":[],"c":[]},"a9B":{"J":[],"I":[],"jf":[],"aP":[]},"pf":{"b8":[]},"mG":{"b8":[]},"n4":{"b8":[]},"kE":{"b8":[]},"l3":{"b8":[]},"uy":{"b8":[]},"a_r":{"b8":[]},"pO":{"b8":[]},"ab_":{"b8":[]},"oT":{"b8":[]},"uz":{"b8":[]},"y7":{"b8":[]},"acu":{"b8":[]},"Pd":{"b8":[]},"a4I":{"b8":[]},"acS":{"b8":[]},"LZ":{"b8":[]},"M9":{"b8":[]},"JZ":{"a_":[],"c":[]},"QE":{"O":[],"c":[]},"WX":{"a0":["QE"]},"jE":{"b8":[]},"ab0":{"fV":[],"aV":[],"c":[]},"a_s":{"dZ":["J","hf"],"J":[],"aA":["J","hf"],"I":[],"aP":[],"aA.1":"hf","dZ.1":"hf","aA.0":"J"},"A8":{"a_":[],"c":[]},"a_H":{"b8":[]},"a3S":{"b8":[]},"Mg":{"b8":[]},"a3U":{"b8":[]},"a3Y":{"he":[]},"a3Z":{"he":[]},"a4_":{"he":[]},"Mb":{"he":[]},"Mc":{"he":[]},"a42":{"he":[]},"Me":{"he":[]},"Mf":{"he":[]},"a3X":{"he":[]},"a3W":{"he":[]},"Ma":{"he":[]},"a40":{"he":[]},"a41":{"he":[]},"Md":{"he":[]},"Fp":{"J":[],"I":[],"jf":[],"aP":[]},"Nz":{"O":[],"c":[]},"UO":{"a0":["Nz"]},"pr":{"b8":[]},"e3":{"b8":[]},"mn":{"b8":[]},"mL":{"ev":[],"b8":[]},"pY":{"mL":[],"ev":[],"b8":[]},"rh":{"b8":[]},"te":{"b8":[]},"FQ":{"b8":[]},"yP":{"b6":["pr"],"b_":["pr"],"b_.T":"pr","b6.T":"pr"},"NA":{"b8":[]},"a_A":{"b8":[]},"K2":{"b8":[]},"y6":{"b8":[]},"a3V":{"b8":[]},"E5":{"b8":[]},"a5J":{"b8":[]},"yQ":{"b8":[]},"a5I":{"aV":[],"c":[]},"a9O":{"J":[],"I":[],"jf":[],"aP":[]},"yT":{"b8":[]},"Px":{"J":[],"bt":["J"],"I":[],"aP":[]},"a3O":{"bI":[],"aV":[],"c":[]}}'))
B.bDZ(b.typeUniverse,JSON.parse('{"JY":1,"Mg":1,"K7":1,"Fp":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("C3"),e:w("be<nQ>"),aN:w("be<nR>"),fM:w("be<a2<h,@>?>"),b:w("be<~>"),W:w("jE"),B:w("ny"),dB:w("fw"),T:w("u9"),fj:w("i9"),G:w("mm"),J:w("mn"),k:w("as"),cX:w("a0e<M>"),dO:w("uh"),R:w("ai<h,@>"),v:w("hP"),bz:w("mv<bc>"),f0:w("nI"),E:w("b8"),F:w("y4"),X:w("nQ"),P:w("mA"),D:w("ux"),a:w("aCJ"),d:w("nR"),cw:w("ev"),L:w("hf"),m:w("df<w,F>"),cm:w("kE"),dv:w("mG"),g:w("B<nx>"),O:w("B<fw>"),Y:w("B<i9>"),C:w("B<bs_>"),U:w("B<ev>"),K:w("B<a4x>"),u:w("B<e3>"),bC:w("B<v6>"),aA:w("B<u<ev>>"),r:w("B<FQ>"),s:w("B<h>"),eg:w("B<tb>"),df:w("B<pY>"),p:w("B<c>"),n:w("B<M>"),t:w("B<w>"),eF:w("bd<a0<O>>"),Z:w("mL"),cz:w("e3"),hf:w("pr"),dj:w("yQ"),fT:w("rh"),c_:w("ig<oB<be<~>>>"),x:w("yT<fw>"),y:w("yT<e3>"),I:w("u<w>"),ef:w("vc"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jS"),aU:w("A"),Q:w("vo<ny>"),o:w("vo<pr>"),eo:w("pE"),gJ:w("pF"),V:w("mZ<mA>"),N:w("h"),A:w("ok"),bO:w("bT"),er:w("tb"),j:w("w4"),dw:w("pY"),bY:w("te"),cZ:w("q_"),gc:w("kb"),es:w("l3"),bN:w("n4"),l:w("c"),q:w("Bu"),g4:w("iv<M>"),cJ:w("C"),i:w("M"),z:w("@"),S:w("w"),bn:w("xi?"),f3:w("yP?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("kb?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Au=new B.qt(C.n,B.aw("qt<F>"))
D.AB=new A.Cj(0,"left")
D.mj=new A.Cj(1,"top")
D.AC=new A.Cj(2,"right")
D.dB=new A.Cj(3,"bottom")
D.at5=new A.pO(!1,A.bv4(),22,null)
D.ka=new A.oT(16,null,D.at5,!0)
D.a7N=new A.pf(C.B,null,2,null)
D.vE=new A.K2(!1,D.a7N,A.c0e(),!0)
D.a_8=new A.avs(3,"spaceEvenly")
D.a_h=new B.xm(6,"dstIn")
D.Xm=new B.aU(3,3)
D.AG=new B.d2(D.Xm,D.Xm,C.Z,C.Z)
D.a_t=new B.b7(C.B,0,C.P,-1)
D.Bd=new A.a3U()
D.a11=new A.Mb()
D.a12=new A.Me()
D.aJI=new A.ab_()
D.ajE=w([],B.aw("B<kE>"))
D.ajF=w([],B.aw("B<l3>"))
D.De=new A.LZ(D.ajE,D.ajF,!0)
D.a7f=new B.eu("Konten (SKR 03)",null)
D.a7r=new B.eu("Zeitraum",null)
D.xd=new A.aC6(0,"center")
D.aJU=new A.y6(!0,A.bvz(),A.bG2())
D.Di=new A.y6(!1,A.bvz(),A.bG2())
D.Dj=new A.y7(!1,!0,null,A.at5(),A.Z9(),!0,null,A.at5(),A.Z9())
D.aJV=new A.y7(!0,!0,null,A.at5(),A.Z9(),!0,null,A.at5(),A.Z9())
D.a3k=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a36=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3t=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3o=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2S=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2R=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3O=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3d=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3R=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3L=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.any=new B.df([50,D.a3k,100,D.a36,200,D.a3t,300,D.a3o,400,D.a2S,500,D.a2R,600,D.a3O,700,D.a3d,800,D.a3R,900,D.a3L],x.m)
D.dh=new B.ro(D.any,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ag2=w([8,4],x.t)
D.a7L=new A.pf(D.dh,null,0.4,D.ag2)
D.a7M=new A.pf(C.al,null,0.5,null)
D.fG=new A.ev(0/0,0/0)
D.at7=new A.pO(!0,A.bv4(),44,null)
D.mk=new A.oT(16,null,D.at7,!0)
D.at6=new A.pO(!0,A.bv4(),30,null)
D.ml=new A.oT(16,null,D.at6,!0)
D.a7O=new A.uz(!1,D.mk,D.ml,D.mk,D.ml)
D.aJW=new A.uz(!0,D.mk,D.ml,D.mk,D.ml)
D.Dr=new A.MG(0,"left")
D.a8k=new A.MG(1,"center")
D.Ds=new A.MG(2,"right")
D.a8p=new B.ad(57495,"MaterialIcons",null,!1)
D.a93=new B.ad(58927,"MaterialIcons",null,!1)
D.a96=new B.ad(59005,"MaterialIcons",null,!0)
D.a97=new B.ad(59007,"MaterialIcons",null,!0)
D.a98=new B.ad(59011,"MaterialIcons",null,!1)
D.a9U=new B.ad(62589,"MaterialIcons",null,!1)
D.a9k=new B.ad(61349,"MaterialIcons",null,!1)
D.aaA=new B.aQ(D.a9k,20,C.h,null,null)
D.a9q=new B.ad(61487,"MaterialIcons",null,!1)
D.aaC=new B.aQ(D.a9q,18,null,null,null)
D.aaZ=new B.aQ(C.kV,null,C.h,null,null)
D.aba=new B.aQ(C.xq,null,C.u,null,null)
D.abp=new B.aQ(C.nz,16,null,null,null)
D.a8B=new B.ad(57912,"MaterialIcons",null,!1)
D.abw=new B.aQ(D.a8B,null,C.ak,null,null)
D.adD=new A.a5v(null)
D.aK0=new A.aHN(0,"horizontal")
D.xH=new A.yQ(0,0,0,0,!1)
D.EB=new A.NA(0.5)
D.Bh=new A.a5J()
D.adH=new A.E5(D.Bh,A.bG6(),10,A.bG3(),!0,A.bG5(),A.bG4(),!1,null,null,null)
D.aK2=new A.E5(D.Bh,A.bG6(),10,A.bG3(),!0,A.bG5(),A.bG4(),!0,null,null,null)
D.af6=w([4,3],x.t)
D.arq=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.arg=new B.aG("receivables","Forderungen (kurzfristig)")
D.ar5=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.ar3=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aqU=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.aqZ=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arn=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.arf=new B.aG("equity","Eigenkapital")
D.GR=w([D.arq,D.arg,D.ar5,D.ar3,D.aqU,D.aqZ,D.arn,D.arf],B.aw("B<+(h,h)>"))
D.aK6=w([],x.g)
D.ajq=w([],x.O)
D.ajr=w([],x.Y)
D.ajs=w([],B.aw("B<mm>"))
D.ajt=w([],B.aw("B<mn>"))
D.aK7=w([],x.U)
D.aK8=w([],x.u)
D.aju=w([],x.r)
D.ao9={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SY={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yk=new B.ai(D.SY,[0,0,0,0,0,0,0,C.cF],B.aw("ai<h,A>"))
D.ao7={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ant=new B.ai(D.ao7,[0,0,0,0],B.aw("ai<h,w>"))
D.aom={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.amR=new B.ai(D.aom,[0,0,0,0,null,null,null,null],B.aw("ai<h,w?>"))
D.amN=new B.ai(D.ao9,[D.yk,D.yk,D.yk,C.cF,C.cF,C.cF,D.ant,D.amR],x.R)
D.an3=new B.ai(D.SY,[0,0,0,0,0,0,0,C.cE],x.R)
D.ao6={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.anu=new B.ai(D.ao6,[0,0,0,0,0,0,0,C.cE],x.R)
D.a3X=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a44=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2V=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3g=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3q=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4h=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2I=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3i=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3s=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3M=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.anz=new B.df([50,D.a3X,100,D.a44,200,D.a2V,300,D.a3g,400,D.a3q,500,D.a4h,600,D.a2I,700,D.a3i,800,D.a3s,900,D.a3M],x.m)
D.SN=new B.ro(D.anz,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6Y=new B.aj(32,32,32,32)
D.apq=new B.af(D.a6Y,C.bC,null)
D.a7_=new B.aj(48,48,48,48)
D.aps=new B.af(D.a7_,C.bC,null)
D.apy=new B.af(C.am,C.bC,null)
D.ajG=w([],B.aw("B<mG>"))
D.ajH=w([],B.aw("B<n4>"))
D.Xn=new A.Pd(D.ajG,D.ajH)
D.as1=new B.fW("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.as3=new B.fW("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.as5=new B.fW("Automaten-Business","Umsatz je Automat",null,null)
D.as6=new B.fW("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.as8=new B.fW("Top","Meistverkaufte Produkte",null,null)
D.asb=new B.fW("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asc=new B.fW("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y1=new B.rW(C.E,C.p,0)
D.auu=new B.cT(18,18,C.mv,null)
D.aC3=new B.am("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.auL=new B.eo(D.aC3,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aBA=new B.am("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.auM=new B.eo(D.aBA,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aKh=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBr=new B.am("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aCj=new B.am("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zb=new A.acs(0,"auto")
D.aCQ=new A.acs(1,"top")
D.aH1=new A.wm("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aH2=new A.wm("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c8O","bKd",()=>B.jk(new A.boq(),x.D))
w($,"c8P","atJ",()=>B.jk(new A.bor(),x.a))
w($,"c9H","x0",()=>B.bCd(new A.bqd(),x.P))
w($,"c8Q","br1",()=>C.aN.$1$1(new A.bos(),x.d))
w($,"c8N","bKc",()=>C.aN.$1$1(new A.bop(),x.X))
w($,"c8M","bxd",()=>C.aN.$1$1(new A.boo(),x.h))
w($,"c8L","br0",()=>B.aXJ(A.c_h(),x.F,x.b))
w($,"c23","bqD",()=>new A.avi())
v($,"c5h","ll",()=>new A.b_n())})()};
(a=>{a["zymoFLoKOVCBgSVfbIIjGvoWY34="]=a.current})($__dart_deferred_initializers__);