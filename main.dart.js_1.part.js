((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nl(d,e,f,g,h){return new A.a5w(f,g,d,h,e,null)},
a5w:function a5w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uA:function uA(d){this.a=d},
Dr:function Dr(d){this.a=d},
bOf(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SJ
w=x.f
v=x.N
u=x.z
t=A.aCZ(B.eg(w.a(e.h(a0,"current")),v,u))
s=A.aCZ(B.eg(w.a(e.h(a0,"prior_year")),v,u))
r=A.aCZ(B.eg(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cF
p=J.d3(p,new A.aCK(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cF
o=J.d3(o,new A.aCL(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cF
q=J.d3(q,new A.aCM(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.eg(w.a(e.h(a0,"customer")),v,u)
m=B.bD(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oI(n.h(0,"app_gross"))
k=B.bD(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oI(n.h(0,"avg_basket"))
u=B.eg(w.a(e.h(a0,"derived")),v,u)
v=A.oI(u.h(0,"gross_margin_pct"))
e=A.oI(u.h(0,"net_margin_pct"))
w=A.oI(u.h(0,"ebitda_margin_pct"))
j=A.oI(u.h(0,"cashflow_operating"))
i=A.bnM(u.h(0,"revenue_growth_yoy_pct"))
h=A.bnM(u.h(0,"revenue_growth_mom_pct"))
g=A.bnM(u.h(0,"result_growth_yoy_pct"))
u=A.bnM(u.h(0,"result_growth_mom_pct"))
f=B.bD(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nR(t,s,r,p,o,q,new A.ayd(m,l,k,n),new A.azk(v,e,w,j,i,h,g,u),f)},
oI(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jX(J.ak(d))
return w==null?0:w},
bnM(d){if(d==null)return null
if(typeof d=="number")return d
return B.jX(J.ak(d))},
q0:function q0(d,e,f,g){var _=this
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
w6:function w6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayd:function ayd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azk:function azk(d,e,f,g,h,i,j,k){var _=this
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
aCK:function aCK(){},
aCL:function aCL(){},
aCM:function aCM(){},
aCZ(d){var w=J.Y(d),v=A.tS(w.h(d,"revenue_net_7")),u=A.tS(w.h(d,"revenue_net_19")),t=A.tS(w.h(d,"revenue_net")),s=A.tS(w.h(d,"expense_net")),r=A.tS(w.h(d,"result_net")),q=A.tS(w.h(d,"vat_collected")),p=A.tS(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cF
w=J.d3(w,new A.aD_(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.nS(v,u,t,s,r,q,p,w)},
tS(d){var w
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
nS:function nS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aD_:function aD_(){},
bOe(d){return new A.y4(d,new B.ig(x.c_),C.dA)},
boy:function boy(){},
boz:function boz(){},
bqn:function bqn(){},
boA:function boA(){},
box:function box(){},
bow:function bow(){},
y4:function y4(d,e,f){this.r=d
this.a=e
this.f=f},
aCJ:function aCJ(d,e,f){this.a=d
this.b=e
this.c=f},
aCI:function aCI(d,e,f){this.a=d
this.b=e
this.c=f},
bOg(){return new A.y5(null)},
bas(d,e,f,g,h){return new A.ak3(e,h,g,f,d,null)},
y5:function y5(d){this.a=d},
aCY:function aCY(d){this.a=d},
aCR:function aCR(d,e,f){this.a=d
this.b=e
this.c=f},
aCS:function aCS(d,e,f){this.a=d
this.b=e
this.c=f},
aCT:function aCT(d){this.a=d},
aCU:function aCU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCX:function aCX(){},
aCW:function aCW(){},
aCV:function aCV(){},
aCQ:function aCQ(d,e){this.a=d
this.b=e},
aCO:function aCO(d){this.a=d},
aCP:function aCP(d){this.a=d},
af2:function af2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ak3:function ak3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ame:function ame(d,e){this.e=d
this.a=e},
be9:function be9(d){this.a=d},
bea:function bea(d){this.a=d},
beb:function beb(d,e,f){this.a=d
this.b=e
this.c=f},
be8:function be8(){},
Ia:function Ia(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IF:function IF(d,e){this.c=d
this.a=e},
bjE:function bjE(d){this.a=d},
af0:function af0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hi:function Hi(d,e){this.c=d
this.a=e},
bvb(d,e,f,g,h){var w=null
return B.jC(w,w,!0,w,new A.bnH(h,g,e,f),d,w,!0,!0,x.H)},
kd(d,e,f,g,h,i,j,k,l,m,n){return new A.akz(g,n,i,e,d,m,f,k,l,j,null)},
at6(d,e,f){var w=0,v=B.r(x.H)
var $async$at6=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jC(null,null,!0,null,new A.bnF(f,e,e.aL(0,$.cd(),x.A)),d,null,!0,!0,x.H),$async$at6)
case 2:return B.p(null,v)}})
return B.q($async$at6,v)},
a5x:function a5x(d){this.a=d},
aHS:function aHS(){},
aHR:function aHR(){},
aHQ:function aHQ(){},
HC:function HC(d,e){this.c=d
this.a=e},
bbI:function bbI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bby:function bby(){},
bbz:function bbz(){},
bbA:function bbA(){},
bbB:function bbB(){},
bbC:function bbC(){},
bbD:function bbD(){},
bbE:function bbE(){},
bbF:function bbF(){},
bbG:function bbG(d){this.a=d},
bbH:function bbH(d){this.a=d},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbK:function bbK(d,e){this.a=d
this.b=e},
bnH:function bnH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnG:function bnG(d){this.a=d},
ajo:function ajo(d){this.a=d},
akz:function akz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbL:function bbL(d,e){this.a=d
this.b=e},
TF:function TF(d,e,f){this.c=d
this.d=e
this.a=f},
X7:function X7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bj0:function bj0(){},
bj1:function bj1(){},
bj2:function bj2(d){this.a=d},
SW:function SW(d,e,f){this.c=d
this.d=e
this.a=f},
b3_:function b3_(){},
b31:function b31(d){this.a=d},
b32:function b32(d){this.a=d},
b30:function b30(){},
T6:function T6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3N:function b3N(){},
b3O:function b3O(){},
b3P:function b3P(){},
b3Q:function b3Q(d){this.a=d},
al2:function al2(d,e){this.c=d
this.a=e},
bce:function bce(){},
bcf:function bcf(){},
ahu:function ahu(d,e){this.c=d
this.a=e},
Iu:function Iu(d,e,f){this.c=d
this.d=e
this.a=f},
aqA:function aqA(d,e){this.c=d
this.a=e},
bkV:function bkV(){},
bkW:function bkW(){},
wo:function wo(d,e){this.c=d
this.a=e},
afP:function afP(d,e){this.e=d
this.a=e},
b1u:function b1u(){},
b1t:function b1t(){},
b1s:function b1s(d,e,f){this.a=d
this.b=e
this.c=f},
b1o:function b1o(d,e){this.a=d
this.b=e},
b1v:function b1v(d){this.a=d},
b1w:function b1w(d){this.a=d},
b1p:function b1p(){},
b1q:function b1q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1r:function b1r(d,e,f){this.a=d
this.b=e
this.c=f},
bnF:function bnF(d,e,f){this.a=d
this.b=e
this.c=f},
bnE:function bnE(d){this.a=d},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SA:function SA(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1j:function b1j(d){this.a=d},
b1k:function b1k(d){this.a=d},
b1m:function b1m(d,e){this.a=d
this.b=e},
b1l:function b1l(d,e){this.a=d
this.b=e},
b1n:function b1n(d){this.a=d},
b9:function b9(){},
byq(d){return new A.K3(d,C.ar,C.dr,null,null)},
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
b1x:function b1x(d,e){this.a=d
this.b=e},
b1y:function b1y(d){this.a=d},
avx(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ajt:f,p=a0==null?16:a0,o=d==null?D.a_c:d,n=g==null,m=n?A.brF(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xr:a3
n=n?A.brF(r,r,r,r,r,r,r,r):g
w=j==null?D.Dg:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.nz(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bf,s,w,i,n)},
avE(d,e,f,g,h){var w=d==null?D.aju:d,v=e==null?2:e,u=g==null?C.ld:g
return new A.fw(h,f===!0,w,v,u)},
bLz(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avE(A.kj(d.c,e.c,f,A.bZl(),x.fj),B.ab(d.d,e.d,f),!1,A.kj(d.e,e.e,f,A.Ze(),x.S),w)},
a_D(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SR
else w=h
v=m==null
u=v?8:m
t=$.lm()
s=t.aVW(f,v?8:m)
t=t.aVX(g,v?8:m)
v=d==null?A.byo(r,r,r,r,r):d
return new A.i9(q,l,w,j,u,s,e,t,v,k==null?D.ajv:k)},
bLA(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mp(d.f,e.f,f),p=A.kj(d.r,e.r,f,A.Ze(),x.S),o=B.bV(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_D(A.byo(v,u,null,!1,t),p,q,o,s,n,null,A.kj(d.y,e.y,f,A.bZm(),x.G),m,r)},
bLB(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mn(u,w,v,B.bV(d.d,e.d,f))},
byo(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dh
else w=d
return new A.a_z(g===!0,v,u,w,f)},
brF(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_F(4,C.hF,16,D.xi,0,120,A.bZo(),!1,!1,D.Zf,0,C.A,A.bZn())
else w=k
v=j==null?C.kJ:j
return new A.a_E(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c_6(d,e,f,g){var w=null,v=B.iU(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Ck(C.d.j(f.b),v)},
c_5(d){return A.axE(D.dh,15)},
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
avw:function avw(d,e){this.a=d
this.b=e},
fw:function fw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avF:function avF(){},
avG:function avG(){},
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
mn:function mn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_z:function a_z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_E:function a_E(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acu:function acu(d,e){this.a=d
this.b=e},
a_F:function a_F(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_G:function a_G(d,e,f,g,h,i,j,k){var _=this
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
afN:function afN(){},
afS:function afS(){},
afT:function afT(){},
afV:function afV(){},
afW:function afW(){},
afX:function afX(){},
afY:function afY(){},
afZ:function afZ(){},
ag_:function ag_(){},
avH:function avH(d){this.a=d},
avI:function avI(){},
uc:function uc(d,e,f){this.a=d
this.b=e
this.c=f},
afU:function afU(){},
avJ:function avJ(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avK:function avK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avL:function avL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4z:function a4z(d){this.b=d},
a_C:function a_C(d,e,f){this.d=d
this.e=e
this.a=f},
a9D:function a9D(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.hY=e
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
c_7(d,e){var w=null
return new A.QE(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
avq(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.oU(t,e.b,new A.pP(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bzM(d,e,f){var w=A.avq(d.b,e.b,f),v=A.avq(d.d,e.d,f),u=A.avq(d.e,e.e,f)
return new A.uC(e.a,w,A.avq(d.c,e.c,f),v,u)},
bOi(d,e,f){var w,v
if(d.k(0,D.fG))return e
if(e.k(0,D.fG))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bzK(d,e,f){return new A.y7(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c1u(d){return!0},
c_a(d){return D.a7O},
bzL(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.pg(w,f,g,e)},
bBI(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZh(),x.dv)
v.toString
w=A.kj(d.b,e.b,f,A.bZj(),x.bN)
w.toString
return new A.Pd(v,w)},
bP3(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.mH(t,w,v,u)},
bUc(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.n5(t,w,v,u)},
bP2(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.p9(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bP0(B.brv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Ze(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kF(r,e.f,e.r,t,e.x,u,v,w,s)},
bUb(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.p9(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bU9(B.brv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Ze(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
bP0(d,e,f,g,h,i){return new A.a4K(f,!1,g,i,d,e)},
bP1(d){return C.d.am(d.e,1)},
bU9(d,e,f,g,h,i){return new A.acU(f,!1,g,i,d,e)},
bUa(d){return C.d.am(d.e,1)},
bzH(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZg(),x.cm)
v.toString
w=A.kj(d.b,e.b,f,A.bZi(),x.es)
w.toString
return new A.LZ(v,w,!0)},
bOh(d,e,f){return new A.M9(d,e==null?4:e,f)},
a_s:function a_s(){},
Cj:function Cj(d,e){this.a=d
this.b=e},
te:function te(d,e){this.r=d
this.w=e},
pP:function pP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab1:function ab1(){},
oU:function oU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uC:function uC(d,e,f,g,h){var _=this
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
pg:function pg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acw:function acw(){},
Pd:function Pd(d,e){this.a=d
this.b=e},
mH:function mH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n5:function n5(d,e,f,g){var _=this
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
a4K:function a4K(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acU:function acU(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
LZ:function LZ(d,e,f){this.a=d
this.b=e
this.c=f},
uB:function uB(){},
M9:function M9(d,e,f){this.a=d
this.b=e
this.c=f},
afI:function afI(){},
afM:function afM(){},
aiO:function aiO(){},
aj3:function aj3(){},
aj4:function aj4(){},
aj6:function aj6(){},
aj7:function aj7(){},
ajU:function ajU(){},
ajT:function ajT(){},
ajV:function ajV(){},
anj:function anj(){},
ap3:function ap3(){},
ap4:function ap4(){},
aqE:function aqE(){},
arg:function arg(){},
arf:function arf(){},
arh:function arh(){},
avm:function avm(){},
JY:function JY(){},
JZ:function JZ(d,e,f){this.c=d
this.d=e
this.a=f},
avo:function avo(d){this.a=d},
avn:function avn(d){this.a=d},
QE:function QE(d,e,f){this.c=d
this.e=e
this.a=f},
WX:function WX(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bSK(d,e,f){var w=B.aa(f),v=w.i("a9<1,jE>")
v=B.P(new B.a9(f,new A.aWX(),v),v.i("av.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aWY(),w),w.i("av.E"))
return new A.ab2(e,d,v,w,null)},
bLw(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5n(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tc(v,C.aw,C.v,new B.ke(1),v,v,v,v,C.bu,v)
u=new A.a_t(f,d,e,u,t,!0,0,v,v,new B.bo(),B.aH(x.v))
u.bj()
return u},
ab2:function ab2(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWX:function aWX(){},
aWY:function aWY(){},
a_t:function a_t(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VH$=h
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
bbR:function bbR(d,e){this.a=d
this.b=e},
avp:function avp(){},
jE:function jE(d,e){this.a=d
this.b=e},
ny:function ny(d,e){this.a=d
this.b=e},
afJ:function afJ(){},
afK:function afK(){},
afL:function afL(){},
Sy:function Sy(){},
A8:function A8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWZ:function aWZ(d){this.a=d},
aX_:function aX_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aX0:function aX0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3U(d,e){var w=d==null?B.ds(C.B,1):d
return new A.a3T(e!==!1,w)},
a_I:function a_I(){},
a3T:function a3T(d,e){this.a=d
this.b=e},
Mg:function Mg(){},
a3V:function a3V(){},
avU:function avU(){},
aCa:function aCa(d,e){this.a=d
this.b=e},
ag2:function ag2(){},
aj0:function aj0(){},
aj1:function aj1(){},
aj8:function aj8(){},
K7:function K7(){},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
he:function he(){},
a3Z:function a3Z(d){this.a=d},
a4_:function a4_(d){this.a=d},
a40:function a40(d){this.a=d},
Mb:function Mb(){},
Mc:function Mc(){},
a43:function a43(d){this.a=d},
Me:function Me(){},
Mf:function Mf(d){this.a=d},
a3Y:function a3Y(d){this.a=d},
a3X:function a3X(d){this.a=d},
Ma:function Ma(d){this.a=d},
a41:function a41(d){this.a=d},
a42:function a42(d){this.a=d},
Md:function Md(d){this.a=d},
Fp:function Fp(){},
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
aSs:function aSs(d){this.a=d},
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
bbW:function bbW(d,e){this.a=d
this.b=e},
bbU:function bbU(d){this.a=d},
bbV:function bbV(d,e){this.a=d
this.b=e},
bbT:function bbT(){},
bbX:function bbX(d){this.a=d},
bsX(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.ps(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aI6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SR:u
else w=g
v=f==null?A.avv(!1,u,0,u,!1,D.vI):f
w=new A.e6(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avv(!1,u,0,u,!1,D.vI):d,j,a0,i,s,!1,p)
w.aq7(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bPy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.byp(d.ay,e.ay,f)
v=A.byp(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.kj(d.cy,e.cy,f,A.Ze(),x.S)
r=B.X(d.r,e.r,f)
q=B.r3(d.w,e.w,f)
p=A.kj(d.a,e.a,f,A.bZf(),x.cw)
p.toString
o=B.bCb(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aI6(v,m,w,r,e.z,s,new A.y6(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NA(n),!1,u,o,!0,e.cx,p)},
avv(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
else w=e
return new A.a_B(h,w,g,i,f,!1)},
byp(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r3(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bzL(t,A.kj(v.d,u.d,f,A.Ze(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r3(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.avv(!1,s,v,u,e.a,new A.K2(!1,r,w.c,!0))},
bLD(d,e,f){var w=B.X(d.c,e.c,f),v=B.r3(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
return new A.mo(e.a,e.b,w,v)},
c1v(d){return!0},
bv_(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kN)return A.bvJ(w.a,A.bsB(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dh:w},
bWU(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kN)w=A.bvJ(v.a,A.bsB(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dh}return A.axE(w,40)},
bEF(d,e,f,g,h){var w,v=A.bv_(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kN)w=A.bvJ(u.a,A.bsB(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dh}u=A.axE(w,40)
return new A.M9(v,h==null?4:h,u)},
c1t(d,e){return!0},
bZ2(d,e){return Math.abs(d.a-e.a)},
c_d(d,e){var w=J.d3(e,new A.bom(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c_9(d,e){return-1/0},
c_8(d,e){return d.a[e].b},
bFR(d){var w=J.d3(d,new A.boj(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bFQ(d){return A.axE(D.dh,15)},
ps:function ps(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aI7:function aI7(){},
NA:function NA(d){this.a=d},
a_B:function a_B(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mo:function mo(d,e,f,g){var _=this
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
aHT:function aHT(d,e){this.a=d
this.b=e},
a3W:function a3W(){},
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
bom:function bom(d){this.a=d},
bol:function bol(d){this.a=d},
a5L:function a5L(){},
boj:function boj(){},
mM:function mM(){},
pZ:function pZ(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
ri:function ri(d,e){this.a=d
this.b=e},
tf:function tf(d,e){this.a=d
this.b=e},
FQ:function FQ(d){this.a=d},
NB:function NB(d){this.a=d},
yP:function yP(d,e){this.a=d
this.b=e},
afQ:function afQ(){},
afR:function afR(){},
ag3:function ag3(){},
aj2:function aj2(){},
aj5:function aj5(){},
akG:function akG(){},
akH:function akH(){},
akI:function akI(){},
akK:function akK(){},
akL:function akL(){},
akM:function akM(){},
akN:function akN(){},
ap2:function ap2(){},
aqD:function aqD(){},
aI8:function aI8(d){this.a=d},
aI9:function aI9(){},
aIa:function aIa(){},
yQ:function yQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akJ:function akJ(){},
aIb:function aIb(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIe:function aIe(){},
aIc:function aIc(d,e,f){this.a=d
this.b=e
this.c=f},
aId:function aId(d,e,f){this.a=d
this.b=e
this.c=f},
aIf:function aIf(){},
v8:function v8(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5K:function a5K(d,e,f){this.d=d
this.e=e
this.a=f},
a9Q:function a9Q(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.hY=e
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
brE(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bz(o.length,0,!1,x.i),m=B.aa(o),l=new B.a9(o,new A.avy(),m.i("a9<1,M>")).kk(0,new A.avz()),k=e-l,j=new A.avC(k,d,n)
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
new B.iK(o,m.i("iK<1>")).aq(0,new A.avA(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).aq(0,new A.avB(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avy:function avy(){},
avz:function avz(){},
avC:function avC(d,e,f){this.a=d
this.b=e
this.c=f},
avD:function avD(d,e,f){this.a=d
this.b=e
this.c=f},
avA:function avA(d,e,f){this.a=d
this.b=e
this.c=f},
avB:function avB(d,e,f){this.a=d
this.b=e
this.c=f},
bsB(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iK(w,B.aa(w).i("iK<1>")).aq(0,new A.aFf(v,d))
else throw B.e(B.bF('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFf:function aFf(d,e){this.a=d
this.b=e},
ayO(d,e){var w,v
if(e!=null){w=B.aa(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.ayP(),w),w.i("av.E"))
return A.c_1(d,new A.a0f(v,x.cX))}else return d},
ayP:function ayP(){},
bTj(d,e){var w=!0
if(d!==C.eX)if(!(d===C.aw&&e===C.v))w=d===C.ie&&e===C.aW
if(w)return D.Du
else{w=!0
if(d!==C.hm)if(!(d===C.ie&&e===C.v))w=d===C.aw&&e===C.aW
if(w)return D.Dv
else return D.a8n}},
MG:function MG(d,e){this.a=d
this.b=e},
a05:function a05(d,e){this.a=d
this.b=e},
yT:function yT(d,e){this.a=d
this.$ti=e},
akU:function akU(){},
c_1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.ah().r)
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
if(o){q=new B.Jt(d.aRC(r,p,p+n,!0),C.p,null)
t.push(q)
m=l.d
if(m!=null)q.hD(m)}p+=n
o=!o}}return l},
a0f:function a0f(d,e){this.a=d
this.b=0
this.$ti=e},
b_t:function b_t(){},
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
aSB:function aSB(d){this.a=d},
a3P:function a3P(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bsp(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fG))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bLG(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geg(v)===0){v=d.a.a
if(v.geg(v)===0){v=d.b.a
if(v.geg(v)===0){v=d.c.a
v=v.geg(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axE(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNt()*w),C.d.b0(d.gFN()*w),C.d.b0(d.gJW()*w))},
bzJ(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bsq(d){var w=d.a,v=w?A.aWW(d.b):0,u=w?A.aWW(d.c):0,t=w?A.aWW(d.d):0
return new B.aj(v,u,t,w?A.aWW(d.e):0)},
bQN(d){var w
if(d.c===0){d.seS(null)
w=B.bY(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bti(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seS(f.mJ(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seS(null)}},
aWW(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kj(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kL(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kL(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c0l(d,e,f){return C.d.b0(d+(e-d)*f)},
bvJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kL(m,x.i)
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
A.a5w.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aR:C.l
r=r?C.n:C.al
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cX(t.x,C.n,s,18),C.bs],w))
v.push(B.aP(new B.eu(t.c,!1,s),1))
v=B.au(v,C.D,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.a_,B.l(t.d,1,C.ag,s,B.c7(u==null?C.h:u,22,C.O),s,s,s)],w)
return B.bN(r,B.ag(w,C.D,C.i1,C.i),q,s,C.am,s,3)}}
A.uA.prototype={
Li(d){return this.aRF(d)},
aRF(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Li=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eB("finance_summary",B.a5(["p_from",E.qX(d.a),"p_to",E.qX(d.b)],s,r),r),$async$Li)
case 3:q=f
if(q==null){u=D.an6
w=1
break}if(x.f.b(q)){u=B.eg(q,s,r)
w=1
break}u=D.anx
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Li,v)},
Lh(d){return this.aRE(d)},
aRE(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lh=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eB("finance_kpis",B.a5(["p_from",E.qX(d.a),"p_to",E.qX(d.b)],s,r),r),$async$Lh)
case 3:q=f
if(x.f.b(q)){u=B.eg(q,s,r)
w=1
break}u=D.amQ
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lh,v)},
px(d){return this.apQ(d)},
apQ(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$px=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.i0("sevdesk-sync",B.a5(["from",E.qX(d.a),"to",E.qX(d.b)],s,s)),$async$px)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a4(B.ft(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$px,v)},
Ld(d){return this.aRu(d)},
aRu(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Ld=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.i0("finance-export-pdf",B.a5(["from",E.qX(d.a),"to",E.qX(d.b)],s,s)),$async$Ld)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aB(J.a3(r,"base64"))
w=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Ld,v)}}
A.Dr.prototype={
FH(d){return this.aj2(d)},
aj2(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FH=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Li(d),$async$FH)
case 7:q=f
o=A.aCZ(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hi(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FH,v)},
FD(d){return this.aiO(d)},
aiO(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FD=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lh(d),$async$FD)
case 7:q=f
o=A.bOf(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hi(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FD,v)},
px(d){return this.apR(d)},
apR(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.Hi(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$px,v)},
Lc(d){return this.aRt(d)},
aRt(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lc=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ld(d),$async$Lc)
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
o=r.Hi(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lc,v)},
Hi(d){if(d instanceof B.y1)return d
if(d instanceof B.lP){if(d.b==="42501")return new B.vu(d.a)
return new B.rW(d.a)}if(d instanceof B.Mu)return new B.rW("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Ay("Unerwarteter Fehler: "+B.i(d))},
$iaCN:1}
A.q0.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ve.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w6.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayd.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azk.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nR.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.C3.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nS.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y4.prototype={
GE(d){return this.apP(0)},
apP(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GE=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dn)
s=t.r
r=s.aL(0,$.x0(),x.P)
p.a=null
w=3
return B.k(B.oT(new A.aCJ(p,t,r),x.H),$async$GE)
case 3:t.se3(0,f)
q=t.f
if(q.ghm(q)==null){q=$.brb()
s=s.e
s===$&&B.a()
s.cr(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GE,v)},
Lb(){return this.aRs()},
aRs(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$Lb=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dn)
s=t.r.aL(0,$.x0(),x.P)
q.a=null
w=3
return B.k(B.oT(new A.aCI(q,t,s),x.H),$async$Lb)
case 3:t.se3(0,e)
r=t.f
u=r.ghm(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lb,v)}}
A.y5.prototype={
ds(d,e){var w=null,v=e.aA($.x0(),x.P),u=e.aA($.brb(),x.aN)
return B.jZ(B.e7(B.b([new B.fX("Finanzen","Dashboard",new A.af2(e.aA($.bra(),x.b).gj9(),new A.aCR(this,d,e),new A.aCS(this,d,e),new A.aCT(d),new A.aCU(this,d,e,v),w),w),C.ay,new A.ame(v,w),C.c5,D.adG,C.c5,B.dr(u,new A.aCV(),new A.aCW(),new A.aCX(),!1,!0,!1,x.d,x.l)],x.p),C.cS,w,!1),C.n,new A.aCY(e))},
J6(d,e){return this.aK_(d,e)},
aK_(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J6=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.bra()
w=3
return B.k(e.aL(0,s.ghK(),x.F).GE(0),$async$J6)
case 3:r=g
if(d.e==null){w=1
break}s=e.aL(0,s,x.b)
s=s.ghm(s)
t=d.P(x.q).f
t.bE(B.ck(null,null,null,null,null,C.t,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J6,v)},
B1(d,e){return this.avM(d,e)},
avM(d,e){var w=0,v=B.r(x.H),u,t
var $async$B1=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aL(0,$.bra().ghK(),x.F).Lb(),$async$B1)
case 3:t=g
if(d.e==null){w=1
break}if(t==null){d.P(x.q).f.bE(D.auO)
w=1
break}w=4
return B.k(E.bBz(t,"finanzauswertung.pdf"),$async$B1)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B1,v)},
B2(d,e,f){return this.aHK(d,e,f)},
aHK(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B2=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jC(null,null,!0,null,new A.aCQ(f,d),d,null,!0,!0,x.cJ),$async$B2)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nt(e.aL(0,$.cd(),x.A))
p=f.a
o=f.b
n=$.ep()
m=n.ar(p)
n=n.ar(o)
w=8
return B.k(r.zh("finance_period",p,o,B.a5(["period_from",p.eJ()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B2)
case 8:if(d.e!=null)d.P(x.q).f.bE(F.uM)
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
A.af2.prototype={
u(d){var w=this,v=null,u=A.bas(C.n,F.j1,C.n,w.r,"Freigabe f\xfcr Auswertung anfordern"),t=A.bas(v,D.a9X,v,w.f,"Gesellschafter-Freigaben"),s=w.c,r=A.bas(v,D.a96,v,s?v:w.d,"sevDesk synchronisieren")
return B.au(B.b([u,C.bs,t,C.bs,r,C.bs,A.bas(C.ak,C.kY,C.ak,s?v:w.e,"PDF-Export")],x.p),C.m,C.f,C.N,0,v,v)}}
A.ak3.prototype={
u(d){var w,v=this,u=null,t=B.b0(12),s=B.b0(12),r=B.b0(12),q=v.w
if(q==null)q=C.al
q=B.ds(q,1)
w=v.r
if(w==null)w=C.h
return B.act(B.dZ(!1,C.Y,!0,t,B.fe(!1,s,!0,B.bj(u,B.cX(v.c,w,u,20),C.r,u,u,new B.bb(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.as,0,u,u,u,u,u,C.bF),u,v.d,u,u)}}
A.ame.prototype={
ds(d,e){var w=null,v=this.e,u=$.ep(),t=x.p
return B.bN(w,B.ag(B.b([D.a7y,C.a_,B.au(B.b([D.aaF,C.ba,B.aP(B.l(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.D(C.h,16,C.O),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.x,B.q3(C.dl,B.b([new A.Ia("Monat",new A.be9(e),w,w),new A.Ia("Jahr (YTD)",new A.bea(e),w,w),new A.Ia("Zeitraum w\xe4hlen \u2026",new A.beb(this,d,e),D.a9b,w)],t),C.f0,6,8)],t),C.D,C.f,C.i),w,w,C.G,w,3)},
Iv(d,e){return this.aGI(d,e)},
aGI(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iv=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.bqs(new A.be8(),d,B.bJ(B.aY(t)-5,1,1,0,0,0,0),new B.mw(s.a,s.b,x.bz),B.bJ(B.aY(t)+1,1,1,0,0,0,0),C.eO),$async$Iv)
case 2:r=g
if(r!=null)e.aL(0,$.x0().ghK(),x.V).wm(0,new E.mC(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iv,v)}}
A.Ia.prototype={
u(d){var w=null,v=B.b0(9999),u=B.b0(9999),t=B.b0(9999),s=B.ds(C.al,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cX(p,C.h,w,14),C.bs],r))
q.push(B.l(this.c,w,w,w,B.D(C.h,13,C.O),w,w,w))
return B.dZ(!1,C.Y,!0,v,B.fe(!1,u,!0,B.bj(w,B.au(q,C.m,C.f,C.N,0,w,w),C.r,w,w,new B.bb(w,w,s,t,w,w,C.H),w,w,w,w,C.kI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.as,0,w,w,w,w,w,C.bF)}}
A.IF.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jR(new A.bjE(this)),C.c5,D.a7D,C.x],r),p=this.c.w
if(p.length===0)q.push(B.bN(s,B.au(B.b([D.ab3,C.aF,B.aP(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.u,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.as,s,C.G,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.af0(t.a,t.b,t.c==="revenue",t.d,s),C.a_],r))}q.push(B.ag(w,C.m,C.f,C.i))}return B.ag(q,C.ab,C.f,C.i)}}
A.af0.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aR:C.as,s=B.ds(u?C.n:C.al,1),r=B.b0(4),q=w.c
r=B.bj(C.a0,B.l(C.c.a0(q,0,1),v,v,v,B.c7(C.h,14,C.q),v,v,v),C.r,v,v,new B.bb(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.ag,v,B.D(C.h,14,C.O),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aP(B.ag(B.b([q,B.l(t,v,v,v,B.D(C.u,12,C.k),v,v,v)],s),C.D,C.f,C.i),1)
q=$.e1().ar(w.f)
return B.bN(v,B.au(B.b([r,C.aF,t,B.l(q,v,v,v,B.D(u?C.aQ:C.h,15,C.O),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.e6,v,3)}}
A.Hi.prototype={
u(d){var w=null
return B.bN(C.ak,B.au(B.b([D.abx,C.aF,B.aP(B.l(this.c,w,w,w,B.D(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fD,w,C.G,w,3)}}
A.a5x.prototype={
ds(d,e){return B.dr(e.aA($.bKn(),x.e),new A.aHQ(),new A.aHR(),new A.aHS(),!1,!0,!1,x.X,x.l)}}
A.HC.prototype={
u(d){var w=this,v=null,u=w.c,t=u.x,s=t>0,r=s?u.a.c/t:0,q=s?u.r.a/t:0
t=x.p
s=B.b([D.asf,C.x,B.jR(new A.bbI(w,r,100-u.w.a,q)),C.x,new A.ajo(v),C.ay,D.ase,C.x,new A.afP(u,v),C.ay,D.as9,C.x,B.bC(v,!0,v,B.mG(v,B.bN(v,new A.SW(u,220,v),v,v,C.G,v,3),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbJ(w,d),v,v,v,v,v,v),!1,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.K,v),C.ay,D.as4,C.x,B.bC(v,!0,v,B.mG(v,new A.T6(u,200,!1,v),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbK(w,d),v,v,v,v,v,v),!1,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.K,v),C.ay,D.as8,C.x,new A.al2(u,v),C.ay,D.as6,C.x,new A.ahu(u,v)],t)
if(u.f.length!==0)C.b.M(s,B.b([C.ay,D.asb,C.x,new A.aqA(u,v)],t))
return B.ag(s,C.ab,C.f,C.i)}}
A.ajo.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.u,11,C.k).eV(1.35),w,w,w)}}
A.akz.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ak:C.aQ
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bbL(m,d):l
r=x.p
q=B.b([B.aP(B.l(m.c.toUpperCase(),l,l,l,B.D(C.u,10,C.q).hF(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.ds(C.ak,0.8)
n=B.b0(4)
q.push(B.bj(l,B.l("Ziel "+p,l,l,l,B.D(C.ak,9,C.q),l,l,l),C.r,l,l,new B.bb(l,l,o,n,l,l,C.H),l,l,l,l,C.n2,l,l,l))}q=B.b([B.au(q,C.m,C.f,C.i,0,l,l),C.aZ,new A.a3P(C.B1,C.e0,B.l(m.d,l,l,l,B.c7(w,22,C.q),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.ag,l,B.D(C.u,10,C.aL),l,l,l))
q.push(C.cN)
q.push(B.au(B.b([new A.TF("Vormonat",m.r,l),C.cX,new A.TF("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cN)
q.push(B.aP(new A.X7(v,m.y,m.z,l),1))
return B.bC(l,u,l,B.mG(l,B.bN(l,B.ag(q,C.D,C.f,C.i),l,l,C.ds,l,3),C.ac,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.K,l)}}
A.TF.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.b0(4)
return B.bj(r,B.l(this.c+" \u2014",r,r,r,B.D(C.u,9,C.q),r,r,r),C.r,r,r,new B.bb(C.al,r,r,q,r,r,C.H),r,r,r,r,C.n2,r,r,r)}w=q>=0
v=w?C.aQ:C.ak
u=v.lE(0.12)
t=B.ds(v,0.7)
s=B.b0(4)
return B.bj(r,B.au(B.b([B.cX(w?F.a8t:D.a8s,v,r,10),F.aut,B.l(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.D(v,9,C.q),r,r,r)],x.p),C.m,C.f,C.N,0,r,r),C.r,r,r,new B.bb(u,r,t,s,r,r,C.H),r,r,r,r,C.n2,r,r,r)}}
A.X7.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.kk(j,new A.bj0())
t=C.b.kk(j,new A.bj1())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bj2(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a3U(k,!1)
w=B.b([A.aI6(k,2,A.avv(!1,C.n.lE(0.16),0,k,!0,D.vI),C.n,0.35,k,D.Dl,k,!0,!1,!0,!1,D.EF,!1,10,D.Y5,!0,C.ld,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Nz(A.bsX(k,k,k,D.ajw,l,D.Bf,D.Dg,D.Dm,w,D.adK,k,m,k,n,D.Xr,D.ajx,D.a7R),C.ar,C.ad,k,k)}}
A.SW.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aH6
w=C.b.fF(p,0,new A.b3_())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avE(B.b([A.a_D(q,q,D.AI,q,C.n,q,q,q,r.b,6),A.a_D(q,q,D.AI,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.cg(A.byq(A.avx(q,q,u,q,q,A.a3U(q,!1),q,new A.y7(!0,!0,q,new A.b30(),A.Z9(),!1,q,A.at8(),A.Z9()),q,v,q,q,new A.uC(!0,new A.oU(16,q,new A.pP(!0,new A.b31(this),46,q),!0),D.ka,D.ka,new A.oU(16,q,new A.pP(!0,new A.b32(p),26,q),!0)))),this.d,q)},
aJi(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.T6.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b3N(),w),x.i)
C.b.M(o,new B.a9(u,new A.b3O(),w))
t=C.b.fF(o,0,new A.b3P())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avE(B.b([A.a_D(q,q,q,q,C.n,q,q,q,v[s],14),A.a_D(q,q,q,q,C.aQ,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cg(A.byq(A.avx(q,q,n,q,q,A.a3U(q,!1),q,D.Dm,q,o,q,q,new A.uC(!0,D.ka,D.ka,D.ka,new A.oU(16,q,new A.pP(!0,new A.b3Q(p),26,q),!0)))),this.d,q)
return this.e?r:B.bN(q,r,q,q,C.G,q,3)}}
A.al2.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aH5
w=new B.a9(l,new A.bce(),B.aa(l).i("a9<1,M>")).kk(0,new A.bcf())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.l(r.b,m,m,m,B.D(C.h,14,C.q),m,m,m)
p=$.e1()
o=r.d
n=new B.aU(4,4)
o=B.b([B.au(B.b([new B.pd(1,C.fH,B.ag(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ar(r.f),m,m,m,B.D(C.u,12,C.aL),m,m,m)],v),C.D,C.f,C.i),m),C.ba,B.l(p.ar(o),m,m,m,B.c7(C.h,16,C.q),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cN,new B.CM(new B.d2(n,n,n,n),C.bJ,B.a5M(C.al,8,C.d.c4(o/w,0,1),D.Aw),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zc(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.x)
C.b.M(u,o)}return B.bN(m,B.ag(u,C.m,C.f,C.i),m,m,C.G,m,3)}}
A.ahu.prototype={
u(d){var w=null,v=this.c.r
return B.bN(w,B.au(B.b([B.aP(new A.Iu("Aktive Kunden",""+v.c,w),1),B.aP(new A.Iu("K\xe4ufe",""+v.a,w),1),B.aP(new A.Iu("\xd8-Warenkorb",$.e1().ar(v.d),w),1)],x.p),C.m,C.f,C.i,0,w,w),w,w,C.G,w,3)}}
A.Iu.prototype={
u(d){var w=null
return B.ag(B.b([B.l(this.c.toUpperCase(),w,w,w,B.D(C.u,10,C.q).hF(0.6),w,w,w),C.cM,B.l(this.d,w,w,w,B.c7(C.h,20,C.q),w,w,w)],x.p),C.D,C.f,C.N)}}
A.aqA.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.bkV(),B.aa(q).i("a9<1,M>")).kk(0,new A.bkW()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aU(4,4)
t=B.b([B.au(B.b([new B.pd(1,C.fH,B.l(u.b,1,C.ag,r,B.D(C.h,13,C.q),r,r,r),r),B.l(""+u.c+"\xd7 ",r,r,r,B.D(C.u,12,C.O),r,r,r),B.l($.e1().ar(t),r,r,r,B.D(C.h,13,C.q),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aZ,new B.CM(new B.d2(s,s,s,s),C.bJ,B.a5M(C.al,6,C.d.c4(t/p,0,1),D.Aw),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zc(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.a_)
C.b.M(n,t)}return B.bN(r,B.ag(n,C.m,C.f,C.i),r,r,C.G,r,3)}}
A.wo.prototype={
u(d){var w=null
return B.bN(w,B.l(this.c,w,w,w,B.D(C.u,13,C.k),w,w,w),C.as,w,C.G,w,3)}}
A.afP.prototype={
ds(d,e){return B.dr(e.aA($.bxo(),x.fM),new A.b1s(this,d,e),new A.b1t(),new A.b1u(),!1,!0,!1,x.h,x.l)}}
A.AG.prototype={
Y(){return new A.SA()},
aWA(){return this.d.$0()}}
A.SA.prototype={
az(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.ha(J.ak(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bO)
for(t=0;t<8;++t){s=D.GV[t].a
if(v)r=""
else{r=B.bD(J.a3(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.ba(r,".",",")}u.m(0,s,new B.bT(new B.cR(r,C.bN,C.aS),$.ae()))}q.e!==$&&B.b5()
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
HV(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HV=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.L(new A.b1j(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZ0("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eJ(),0,10),"p_cash_and_bank",q.re("cash_and_bank"),"p_receivables",q.re("receivables"),"p_inventory_value",q.re("inventory_value"),"p_other_current_assets",q.re("other_current_assets"),"p_fixed_assets",q.re("fixed_assets"),"p_current_liabilities",q.re("current_liabilities"),"p_long_term_liabilities",q.re("long_term_liabilities"),"p_equity",q.re("equity")],x.N,x.aU))
w=7
return B.k(n,$async$HV)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWA()
o=q.c
o.toString
B.bl(o,!1).f1()
q.c.P(x.q).f.bE(D.auP)
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
if(q.c!=null)q.L(new A.b1k(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HV,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c7(C.h,18,C.q),r,r,r),p=s.f?r:new A.b1m(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.jU(D.aaH,B.l("Stichtag: "+C.c.a0(o.eJ(),0,10),r,r,r,r,r,r,r),p,r),C.x],w)
for(v=0;v<8;++v){o=D.GV[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.h_(r,C.b8,!1,r,!0,C.t,r,B.hu(),u.h(0,o.a),r,r,r,r,r,2,new B.ci(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ac,!0,r,!0,r,!1,r,C.bf,r,r,r,r,C.ig,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.G,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aw,r,C.a3,r,r,r,r),C.a_],w))}p.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.u,11,C.k),r,r,r))
p=B.cg(B.f7(B.ag(p,C.ab,C.f,C.N),r,C.a6),r,380)
o=s.f
u=B.dI(C.d1,r,r,o?r:new A.b1n(d),r,r)
o=o?r:s.gaDb()
t=B.ee(C.n,C.h,r,r,r,r,r)
return B.mj(B.b([u,B.dW(s.f?D.aux:C.f_,o,t)],w),C.l,p,q)}}
A.b9.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zc(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ez(B.H(this))^B.bGl(this.gbI()))>>>0},
j(d){B.bzF()
return B.H(this).j(0)}}
A.K3.prototype={
Y(){return new A.SB(B.y(x.S,x.I),new A.avH(B.y(x.x,x.T)),null,null)}}
A.SB.prototype={
u(d){var w,v=this,u=v.a1p(),t=v.CW
t.toString
t=v.a1q(t.au(0,v.ghA().gp(0)))
w=v.a1q(u)
v.a.toString
return new A.JZ(new A.a_C(t,w,null),u,null)},
a1q(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avE(s.c,s.d,!1,r,s.a))}return d.aOv(w)},
a1p(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uh(t.ch)
if(r)s=w.a
r=t.y
t=t.aPq(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOw(A.brF(!1,!0,!0,v.d,v.c,u.garm(),v.f,v.e))}return t},
arn(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaeU()||e==null||e.a==null){w=v.cy
v.L(w.gaNV(w))
return}v.L(new A.b1x(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1p(),new A.b1y(w)))}}
A.nz.prototype={
UR(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avx(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPq(d,e){return this.UR(null,null,d,e)},
aOw(d){return this.UR(null,d,null,null)},
aOv(d){return this.UR(d,null,null,null)},
WM(d,e,f){var w,v,u,t=A.kj(d.ch,e.ch,f,A.bZk(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bzM(d.d,e.d,f),q=A.bBI(d.e,e.e,f),p=A.bzK(d.c,e.c,f),o=e.a
o=A.a3U(B.a_T(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.avx(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bzH(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avw.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fw.prototype={
gdm(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avF(),B.aa(v).i("a9<1,M>")).kk(0,new A.avG())
v=v.length
return w+(v-1)*this.d},
gbI(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.i9.prototype={
gbI(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mn.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_z.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_E.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acu.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_F.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Ck.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.K4.prototype={}
A.a_G.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xi.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WM(v,w,d)}}
A.afN.prototype={}
A.afS.prototype={}
A.afT.prototype={}
A.afV.prototype={}
A.afW.prototype={}
A.afX.prototype={}
A.afY.prototype={}
A.afZ.prototype={}
A.ag_.prototype={}
A.avH.prototype={
Uh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uc(0,0,!1)
v=new A.yT(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uc(t,u,!0)}w=null
try{w=C.b.qc(d,new A.avI())}catch(s){return new A.uc(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uc(q,r,!1)
u.m(0,v,j)
return j}}
A.uc.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.afU.prototype={}
A.avJ.prototype={
i4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_v(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abu(t,A.brE(w,t.a),u)
l.y=u
l.aQM(e,u,f)
l.akY(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aQV(d,e,m,t,r,s,n,o,f)}}},
abu(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iK(p,B.aa(p).i("iK<1>")).aq(0,new A.avK(t,q,r,s))
w.push(new A.a4z(q))}return w},
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
a4=B.P9(h,Math.min(b3.dC(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dC(Math.min(t,a2),b5,b8)
a4=B.P9(h,a5,g,Math.max(b3.dC(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.E:f).gp(0)
k.seS(null)
a6=b3.f.ek()
u.drawRRect(B.mh(a4),a6)
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
u.clipRect(B.dG(b1),$.oM()[1],!0)
a6=b3.f.ek()
u.drawRRect(B.mh(a4),a6)
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
v.fT(A.ayO(b2,o.r),b3.r)}}}},
aQV(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.An(a5,a5,a5,a5,B.d6(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lm().Zv(a8,a7.b),a7.a),C.d_,C.v,a5,b6.c,C.bu)
w.afc(b1.f)
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
if(v!==D.aCU)j=v===D.Zf&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.Zw(t,n,b1.d,b1.e)
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
r=$.lm().K5(new B.F(v,t),d).b
s=$.lm()
q=w.b
p=q.c
q=q.a.c
a0=s.K5(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahv()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vt(d,new A.avL(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.F(v,t))},
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
q=B.P9(w,s,u,r,t,p,o,v?new B.aU(i.r,i.w):C.Z)}else q=B.btD(w,n.dC(v,j,k),u,n.dC(t,j,k),C.Z)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eN(q,n.r)},
W8(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abu(b2,A.brE(a8,b2.a),a8.ch)
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
break}++a3}return new A.a_G(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.m(n,t))}}return null}}
A.a4z.prototype={}
A.a_C.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.avJ()
t.a0H()
$.ah()
w=B.aS()
w.b=C.be
t.f=w
w=B.aS()
w.b=C.aU
t.r=w
w=B.aS()
w.b=C.be
w.r=C.l.gp(0)
t.w=w
w=B.aS()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.x=w
t=new A.a9D(this.d,v,u,t,d,C.bn,new B.bo(),B.aH(x.v))
t.bj()
t.Yr(v.cy)
t.ael()
return t},
bx(d,e){e.sij(0,this.d)
e.sYc(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bd()}}
A.a9D.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYc(d){var w=this
if(w.hY.k(0,d))return
w.hY=d
w.a0f(d.cy)
w.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a05(t,v),new A.vq(u.aC,u.hY,u.cV,x.Q))
s.restore()},
Zp(d){var w=this,v=w.gC(0)
return new A.K4(w.fU.W8(d,v,new A.vq(w.aC,w.hY,w.cV,x.Q)))}}
A.a_s.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cj.prototype={
K(){return"AxisSide."+this.b}}
A.te.prototype={}
A.pP.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ab1.prototype={
gbI(){return[!1,0,0,0]}}
A.oU.prototype={
gbI(){return[this.b,this.a,this.c,!0]}}
A.uC.prototype={
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
A.pg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acw.prototype={
gbI(){return[this.a,this.b]}}
A.Pd.prototype={
gbI(){return[this.a,this.b]}}
A.mH.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.n5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kF.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l4.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a4K.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.acU.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.LZ.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uB.prototype={}
A.M9.prototype={
acT(d,e,f){var w,v
$.ah()
w=B.aS()
v=this.a
w.r=v.gp(v)
w.b=C.be
d.iO(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afI.prototype={}
A.afM.prototype={}
A.aiO.prototype={}
A.aj3.prototype={}
A.aj4.prototype={}
A.aj6.prototype={}
A.aj7.prototype={}
A.ajU.prototype={}
A.ajT.prototype={}
A.ajV.prototype={}
A.anj.prototype={}
A.ap3.prototype={}
A.ap4.prototype={}
A.aqE.prototype={}
A.arg.prototype={}
A.arf.prototype={}
A.arh.prototype={}
A.avm.prototype={
Mf(d,e,f,g,h,i){return new B.iv(this.aUD(d,e,f,g,h,i),x.g4)},
aUC(d,e,f,g){return this.Mf(d,e,f,!0,g,!0)},
aUD(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mf(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lm().aiA(s,u,v,w)
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
a0H(){var w,v=this
$.ah()
w=B.aS()
w.b=C.aU
v.a=w
w=B.aS()
w.b=C.be
v.b=w
w=B.aS()
w.b=C.be
v.e=w
w=B.aS()
w.b=C.aU
v.c=w
v.d=B.aS()},
i4(d,e,f){var w=this
w.a_w(d,e,f)
w.aQI(e,f)
w.aQS(e,f)
w.aQR(e,f)},
aQR(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lm().Oj(w.a,a1.r-a1.f)
u=$.bqN().Mf(a1.w,v,a1.r,!1,a1.f,!1)
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
i=B.kT(n,m)
if(j!=null){p.r=C.B.gp(0)
p.seS(j.mJ(0,i))}else{if(k==null)k=C.E
p.r=k.gp(k)
p.seS(a0)}k=l.c
p.c=k
if(k===0){p.seS(a0)
k=B.bY(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dh(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lm().Oj(w.b,a1.y-a1.x)
u=$.bqN().Mf(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.kT(n,m)
if(k!=null){q.r=C.B.gp(0)
q.seS(k.mJ(0,i))}else{if(p==null)p=C.E
q.r=p.gp(p)
q.seS(a0)}p=f.c
q.c=p
if(p===0){q.seS(a0)
p=B.bY(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dh(n,m,d.a,f.d)}},
aQI(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.h9(new B.G(0,0,0+w.a,0+w.b),this.b)},
aQS(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.kT(new B.m(n.fc(t.a,m,e),0),new B.m(n.fc(t.b,m,e),v))
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
s=B.kT(new B.m(0,n.dC(t.a,m,e)),new B.m(w,n.dC(t.b,m,e)))
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
this.a_w(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.acU(d,e,f,w)
if(v.b.length!==0)this.aQX(d,e,f,w)},
acU(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.kT(m,l)
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
h=n.gdm(n).eC(0,2)
g=C.d.al(o,n.gbS(n).eC(0,2))
J.aX(r.save())
r.translate(h,g)
n=n.gNd().b
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
s.acV(0,n,new B.m(h,o),k)}}},
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
i=B.kT(m,l)
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
h=n.gdm(n).eC(0,2)
g=n.gbS(n).eC(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.aX(r.save())
r.translate(f,e)
n=n.gNd().b
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
s.acV(0,n,new B.m(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dC(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
Zw(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.JZ.prototype={
gakj(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakk(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakl(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakh(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akE(d){var w,v=this,u=null,t=v.d,s=A.bsq(t.d),r=t.a
r=r.a&&A.bLG(r.b)?r.b:u
w=B.b([B.bj(u,v.c,C.r,u,u,new B.bb(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.avo(w)
if(v.gakj())C.b.hs(w,s.$1(!0),new A.A8(D.AD,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakl())C.b.hs(w,s.$1(!0),new A.A8(D.ml,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakk())C.b.hs(w,s.$1(!0),new A.A8(D.AE,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakh())C.b.hs(w,s.$1(!0),new A.A8(D.dB,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jR(new A.avn(this))}}
A.QE.prototype={
Y(){return new A.WX(new B.bd(null,x.eF))}}
A.WX.prototype={
awL(){switch(this.a.c.a){case 0:return C.e_
case 1:return C.fw
case 2:return C.e0
case 3:return C.fx}},
axg(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awN(d){this.a.toString
return},
az(){this.aO()
$.cw.x1$.push(this.ga3P())},
bb(d){this.bB(d)
$.cw.x1$.push(this.ga3P())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axg()
return B.bub(B.b_2(0,B.bj(v.awL(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ab2.prototype={
bl(d){return A.bLw(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_t.prototype={
hi(d){if(!(d.b instanceof B.hf))d.b=new B.hf(null,null,C.p)},
hR(d){if(this.B===C.aG)return this.xS(d)
return this.acv(d)},
aJs(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8p(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dz(d){var w=this.a8o(d,B.hs())
switch(this.B.a){case 0:return d.c1(new B.F(w.a,w.b))
case 1:return d.c1(new B.F(w.b,w.a))}},
a8o(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aG?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fS(u,null)
break
case 1:q=B.fS(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8p(p)
t=Math.max(t,o.aJs(p))
m=r.aG$}return new A.bbR(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8o(o,B.mf()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c1(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c1(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.ag$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a8p(r==null?B.V(B.Z("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c2(w))):r)/2
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
this.anA()}}
A.bbR.prototype={}
A.avp.prototype={}
A.jE.prototype={
gbI(){return[this.a,this.b]}}
A.ny.prototype={}
A.afJ.prototype={}
A.afK.prototype={
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
A.afL.prototype={}
A.Sy.prototype={
l(){var w,v,u
for(w=this.VH$,v=w.length,u=0;u<v;++u)w[u].l()
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
gaZd(){var w=this.d,v=A.bsq(w.d),u=A.bzJ(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahi(){var w=this.d,v=A.bzJ(w.a),u=A.bsq(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.gen()+v.gen()}},
aVm(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gov().c.d
if(o==null)o=$.lm().Oj(d,f-e)
w=p.c
v=w!==D.ml
if((!v||w===D.dB)&&p.d instanceof A.nz){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.brE(u,d)
w=new B.iK(t,B.aa(t).i("iK<1>"))
s=w.giC(w).f0(0,new A.aWZ(u),x.W).fW(0)}else{r=$.bqN()
w=!v||w===D.dB
v=p.d
q=r.aUC(w?v.w:v.z,o,f,e)
v=B.o3(q,new A.aX_(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.j(v).i("t.E"))}w=B.aa(s).i("a9<1,ny>")
w=B.P(new B.a9(s,new A.aX0(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gov()
w=j.gov()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bj(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.ml
u=!v
t=!u||w===D.dB
s=j.e
r=t?s.a:s.b
t=j.ghC()
s=!u||w===D.dB?C.a6:C.aG
q=B.b([],x.p)
if(w===D.AD||v)j.gov()
if(j.gov().c.a){v=!u||w===D.dB?r:j.gov().c.c
p=!u||w===D.dB?j.gov().c.c:r
o=j.gaZd()
n=!u||w===D.dB?C.aG:C.a6
j.gahi()
m=j.gahi()
l=!u||w===D.dB
k=j.d
l=l?k.f:k.x
u=!u||w===D.dB?k.r:k.y
q.push(B.bj(i,A.bSK(new A.avp(),n,j.aVm(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AE||w===D.dB)j.gov()
return new B.eT(t,i,i,B.bOj(q,C.m,s,i,C.f,C.N,0,i,i,C.c6),i)}}
A.a_I.prototype={
gbI(){return[this.a,this.b]}}
A.a3T.prototype={
gbI(){return[this.a,this.b]}}
A.Mg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a3V.prototype={
gaaP(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.avU.prototype={}
A.aCa.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ag2.prototype={}
A.aj0.prototype={}
A.aj1.prototype={}
A.aj8.prototype={}
A.K7.prototype={
i4(d,e,f){}}
A.vq.prototype={}
A.he.prototype={
gdH(){return null},
gaeU(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.Mf
if(w)return!0
return!(v instanceof A.Mc)&&!(v instanceof A.Mb)&&!(v instanceof A.Md)&&!(v instanceof A.Ma)&&!w&&!(v instanceof A.Me)}}
A.a3Z.prototype={
gdH(){return this.a.b}}
A.a4_.prototype={
gdH(){return this.a.b}}
A.a40.prototype={
gdH(){return this.a.b}}
A.Mb.prototype={}
A.Mc.prototype={}
A.a43.prototype={
gdH(){return this.a.b}}
A.Me.prototype={}
A.Mf.prototype={
gdH(){return this.a.b}}
A.a3Y.prototype={
gdH(){return this.a.b}}
A.a3X.prototype={
gdH(){return this.a.b}}
A.Ma.prototype={
gdH(){return this.a.b}}
A.a41.prototype={
gdH(){return this.a.gdH()}}
A.a42.prototype={
gdH(){return this.a.gdH()}}
A.Md.prototype={
gdH(){return this.a.gdH()}}
A.Fp.prototype={
Yr(d){this.V=d.b
this.U=d.c
this.a2=d.d},
ael(){var w=this,v=null,u=w.ac=B.btj(v,v)
u.ay=new A.aSg(w)
u.ch=new A.aSh(w)
u.CW=new A.aSi(w)
u.cy=new A.aSj(w)
u.cx=new A.aSk(w)
u=w.aE=B.Gd(v,-1,v)
u.B=new A.aSl(w)
u.a3=new A.aSm(w)
u.V=new A.aSn(w)
u=w.bz=B.a5T(v,w.a2,v)
u.p3=new A.aSo(w)
u.p4=new A.aSp(w)
u.RG=new A.aSq(w)},
cv(){var w=x.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dz(d){return new B.F(d.b,d.d)},
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
w.rB(d)}else if(x.gJ.b(d))v.l5(new A.a42(d))},
gMK(d){return new A.aSr(this)},
gMM(d){return new A.aSs(this)},
l5(d){var w,v,u=this
if(u.V==null)return
w=d.gdH()
v=w!=null?u.Zp(w):null
u.V.$2(d,v)
u.a3=C.bn},
gKB(d){return this.a3},
gFg(){var w=this.an
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.fg(0)},
$ijg:1}
A.Nz.prototype={
Y(){return new A.UO(B.b([],x.r),B.y(x.S,x.I),new A.aI8(B.y(x.y,x.dj)),null,null)}}
A.UO.prototype={
u(d){var w,v=this,u=v.a3R(),t=v.CW
t.toString
t=v.aao(t.au(0,v.ghA().gp(0)))
w=v.aao(u)
v.a.toString
return new A.JZ(new A.a5K(t,w,null),u,null)},
aao(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.aa(w).i("a9<1,e6>")
w=B.P(new B.a9(w,new A.bbW(this,d),v),v.i("av.E"))
return d.aPn(w,this.cy)},
a3R(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uh(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPC(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aP1(new A.E5(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gay4(),t.c,t.d))}return r},
ay5(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaeU())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.L(new A.bbU(v))
return}v.L(new A.bbV(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3R(),new A.bbX(w)))}}
A.ps.prototype={
WM(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a3U(B.a_T(d.a.b,j.b,f),j.a)
w=A.bzH(d.at,e.at,f)
v=A.bzK(d.c,e.c,f)
u=A.bzM(d.d,e.d,f)
t=A.bBI(d.e,e.e,f)
s=A.kj(d.ch,e.ch,f,A.c0n(),x.cz)
s.toString
r=A.kj(d.CW,e.CW,f,A.c0m(),x.J)
r.toString
u=A.bsX(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
US(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bsX(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPC(d,e,f,g){return this.US(null,null,d,e,f,g,null)},
aP1(d){var w=null
return this.US(w,d,w,w,w,w,w)},
aPn(d,e){var w=null
return this.US(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e6.prototype={
aq7(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qc(n.a,new A.aI7())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.fG))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b5()
n.b=q
r.toString
n.c!==$&&B.b5()
n.c=r
s.toString
n.d!==$&&B.b5()
n.d=s
t.toString
n.e!==$&&B.b5()
n.e=t}},
acb(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aI6(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aP8(d){return this.acb(d,null)},
aPa(d){return this.acb(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NA.prototype={
gbI(){return[this.a]}}
A.a_B.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mo.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.K2.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.y6.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aHT.prototype={
K(){return"LabelDirection."+this.b}}
A.a3W.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.E5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5L.prototype={
gbI(){return[4,C.hF,16,D.xi,0,120,A.c0p(),!1,!1,!1,0,C.A,A.c0o()]}}
A.mM.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.pZ.prototype={}
A.ri.prototype={
gbI(){return[this.a,this.b,C.d_,C.v,null]}}
A.tf.prototype={
gbI(){return[this.a,this.b]}}
A.FQ.prototype={
gbI(){return[this.a]}}
A.NB.prototype={}
A.yP.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WM(v,w,d)}}
A.afQ.prototype={}
A.afR.prototype={}
A.ag3.prototype={}
A.aj2.prototype={}
A.aj5.prototype={}
A.akG.prototype={}
A.akH.prototype={}
A.akI.prototype={}
A.akK.prototype={}
A.akL.prototype={}
A.akM.prototype={}
A.akN.prototype={}
A.ap2.prototype={}
A.aqD.prototype={}
A.aI8.prototype={
Uh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xK
u=new A.yT(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yQ(s,r,q,t,!0)}w=null
try{w=C.b.qc(d,new A.aI9())}catch(p){return D.xK}v=null
try{v=C.b.qc(w.a,new A.aIa())}catch(p){return D.xK}o=v.a
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
A.akJ.prototype={}
A.aIb.prototype={
i4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaP(0)){v=a3.b
u=v.a
v=v.b
$.ah()
a3.a.jm(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aS())
a3.aO1(new B.G(0,0,u,v))}d.a_v(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aQO(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aQK(a3,q,a4)
d.aQP(a3,q,a4)
d.akX(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dB("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v8(q,i,j,k))}}d.aQW(a3,s,a4)
if(w.gaaP(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aQU(a2,a3,v,f,new A.FQ(g),a4)}},
aQK(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bsp(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.YZ(o,e,u,f)
s=p.ais(o,e,t,u,f)
r=p.Z0(o,e,t,u,f,!0)
q=p.air(o,e,t,u,f)
p.aQN(d,s,p.YY(o,e,t,u,f,!0),f,e)
p.aQH(d,q,r,f,e)
p.aQL(d,t,e)
p.aQJ(d,t,e,f)}},
aQO(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bsp(a6.a),a9=A.bsp(a7.a)
if(a8.length!==a9.length)throw B.e(B.bF("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.aa(m).i("cE<1>")
k=B.P(new B.cE(m,l),l.i("av.E"))
j=a3.YZ(a4,a6,n,b3)
i=a3.Z_(a4,a7.aPa(k),k,b3,j)
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
a2=new B.mr(C.dp,C.be,C.dT,C.ek,C.dI).ek()
m=B.dG(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v5(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fT(i,a3.r)
w.restore()}},
aQP(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z4(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fG)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dC(q.b,w,f)
n.$4(q,p/v*100,e,r).acT(s,q,new B.m(p,o))}}},
aQW(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h0(b3,new A.aIe())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.Z4(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dC(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.V(B.rh(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lj(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lj(q.$2(m,k))))
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
b0=B.kT(a3,a5)
if(a6!=null){f.r=C.B.gp(0)
f.seS(a6.mJ(0,b0))}else{if(a4==null)a4=C.E
f.r=a4.gp(a4)
f.seS(null)}a4=a9.c
f.c=a4
if(a4===0){f.seS(null)
a4=B.bY(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dh(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.rh(d.a))
f.acT(t,j,new B.m(h,g))}}},
Z_(d,e,f,g,h){var w=this.ait(d,e,f,g,h)
return w},
YZ(d,e,f,g){return this.Z_(d,e,f,g,null)},
ait(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.ah().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dC(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f5(d,a0))
if(e===1)g.aB(new B.ct(d,a0))}else g.aB(new B.ct(d,a0))
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
Z0(d,e,f,g,h,i){var w,v,u,t,s=this
$.ah()
w=B.bsV(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.ct(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,t))
w.aB(new B.ct(s.fc(v.h(g,0).a,d,h),s.dC(v.h(g,0).b,d,h)))
w.aB(new B.p2())
return w},
ais(d,e,f,g,h){return this.Z0(d,e,f,g,h,!1)},
YY(d,e,f,g,h,i){var w,v,u,t=this
$.ah()
w=B.bsV(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.ct(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,0))
w.aB(new B.ct(t.fc(v.h(g,0).a,d,h),t.dC(v.h(g,0).b,d,h)))
w.aB(new B.p2())
return w},
air(d,e,f,g,h){return this.YY(d,e,f,g,h,!1)},
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
A.bti(s,q.b,q.c,new B.G(v,u,t,w.b))
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
A.bti(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fT(e,r.r)},
aQL(d,e,f){var w=f.db,v=w.a,u=v.A()
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
$.lm()
u.z=new B.yY(C.aC,w.c*0.57735+0.5)
d.a.fT(B.bsW(A.ayO(e,f.cy),w.b),this.f)},
aQJ(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
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
A.bti(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bQN(t)
d.a.fT(A.ayO(e,f.cy),s.f)},
aQU(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bFR(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lm().Zv(b4,u.b)
s=u.a
r=w.k(0,C.iF)?new B.ke(1):w
q=new B.tc(new B.hH(s,a8,a8,C.bn,a8,a8,a8,a8,a8,a8,t),C.d_,C.v,r,a8,a8,a8,a8,C.bu,a8)
q.afc(120)
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
i=a7.Zw(b3,l,D.xi,0)
b3=i+l
w=j+k
h=new B.aU(4,4)
g=B.Fd(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bFQ(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lm().K5(new B.F(t,w),0).b
d=new B.m(0,b1)
a0=new B.m(g.a,g.b)
a1=$.lm().K5(new B.F(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vt(0,new A.aIc(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bTj(q.r,q.w)
A:{if(D.Du===a5){a6=a3
break A}if(D.Dv===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vt(0,new A.aId(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z4(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
W8(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aiU(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h0(t,new A.aIf())
return t.length===0?null:t},
aiU(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fG))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dC(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hs(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.pZ(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v8.prototype={}
A.a5K.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aIb()
t.a0H()
$.ah()
w=B.aS()
w.b=C.aU
t.f=w
w=B.aS()
w.b=C.be
t.r=w
w=B.aS()
w.b=C.aU
t.w=w
w=B.aS()
w.b=C.be
w.r=C.E.gp(0)
w.a=D.a_l
t.x=w
w=B.aS()
w.b=C.aU
w.r=C.B.gp(0)
t.y=w
w=B.aS()
w.b=C.be
w.r=C.l.gp(0)
t.z=w
w=B.aS()
w.b=C.aU
w.r=C.E.gp(0)
w.c=1
t.Q=w
t=new A.a9Q(this.d,v,u,t,d,C.bn,new B.bo(),B.aH(x.v))
t.bj()
t.Yr(v.cx)
t.ael()
return t},
bx(d,e){e.sij(0,this.d)
e.sYc(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bd()}}
A.a9Q.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYc(d){var w=this
if(w.hY.k(0,d))return
w.hY=d
w.a0f(d.cx)
w.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a05(t,v),new A.vq(u.aC,u.hY,u.cV,x.o))
s.restore()},
Zp(d){var w=this,v=w.gC(0)
return new A.NB(w.fU.W8(d,v,new A.vq(w.aC,w.hY,w.cV,x.o)))}}
A.MG.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a05.prototype={
aO1(d){this.a.a.clipRect(B.dG(d),$.oM()[1],!0)
return null},
ad0(d,e){d.aN(this.a,e)},
Vt(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aX(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lm()
s.Ya(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dh(d,e,f,g){var w=B.cB($.ah().r)
w.aB(new B.f5(d.a,d.b))
w.aB(new B.ct(e.a,e.b))
this.a.fT(A.ayO(w,g),f)}}
A.yT.prototype={
gbI(){return[this.a]}}
A.akU.prototype={}
A.a0f.prototype={}
A.b_t.prototype={
K5(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
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
if(d==null)return D.a_x
w=d.b
v=e/2
return d.aPd(w>v?v:w)},
Oj(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aYY(w)},
aYY(d){if(d<1)return this.aI4(d)
return this.a7u(d)},
aI4(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7u(d*q)/q},
a7u(d){var w,v=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a4(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a4(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a4(Math.pow(10,v))
else return C.d.a4(Math.pow(10,v))},
aiI(d){if(d>=1)return 1
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
v=B.bQ(d,C.ve)
v=v==null?null:v.ay
return v===!0?w.c2(C.m3):w},
aiA(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.Px.prototype={
a3t(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st2(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3t(v)||w.a3t(d))w.a7()
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
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xF(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xF(w)}}else return new B.F(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var w=this.D$
return w==null?null:w.fK(C.iz,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dG(C.iz,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.I.prototype.ga6.call(u))
v=new B.as(0,w.b,0,w.d).xF(u.D$.gC(0))
u.fy=t.a(B.I.prototype.ga6.call(u)).c1(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.I.prototype.ga6.call(u)).xF(u.D$.gC(0))
break}u.cP=u.D=null}else{t=x.k.a(B.I.prototype.ga6.call(u))
u.fy=new B.F(B.L(0,t.a,t.b),B.L(0,t.c,t.d))}},
Tu(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c1(new Float64Array(16))
w.fZ()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bve(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yw(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yw(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pw(n.a,n.b,0)
q.qO(w.a/s.a,w.b/s.b,1,1)
q.fX(-o,-p.b,0,1)
m.cP=q}},
a6q(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.z7(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i_.prototype.gi3.call(s)
t=s.ch.a
return d.z5(r,e,v,u,t instanceof B.q_?t:null)}else s.kq(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.Tu()
w=s.D
w.toString
if(w&&s.eX!==C.r){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uk?t:null
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFM(),s.eX,t))}else s.ch.sbh(0,s.a6q(d,e))},
e8(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tu()
return d.JP(new A.aSB(v),e,v.cP)},
tq(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eU(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OM()
else{this.Tu()
w=this.cP
w.toString
e.fV(0,w)}}}
A.a3P.prototype={
bl(d){var w=new A.Px(this.e,this.f,B.e3(d),C.r,null,new B.bo(),B.aH(x.v))
w.bj()
w.sc8(null)
return w},
bx(d,e){e.st2(this.e)
e.shC(this.f)
e.scC(B.e3(d))
if(C.r!==e.eX){e.eX=C.r
e.bd()
e.cu()}}}
var z=a.updateTypes(["M(q0)","C(ev)","~(w,fw)","M(e6,w)","M(M,q0)","bI(M,te)","pg(M)","w(pZ,pZ)","~(he,K4?)","Hi(A,bE)","IF(nS)","HC(nR)","ve(@)","e6(M)","w6(@)","al(M,te)","C3(@)","uA(dS<uA>)","M(ve)","M(w6)","wo(A,bE)","AG(z)","U<~>()","q0(@)","xi(@)","M(i9)","C(fw)","~(w,i9)","~(@)","jE(ny)","c(ny)","jE(bB<w,M>)","jE(M)","ny(jE)","~(he,NB?)","e6(e6)","Dr(dS<aCN>)","yP(@)","mC(G0<mC>)","tf(w)","uB(ev,M,e6,w)","ri(mM)","C(e6)","w(v8,v8)","M(fw)","U<nS>(cn<nS>)","q_?(rx,m)","w(w,w,M)","fw(fw,fw,M)","i9(i9,i9,M)","mn(mn,mn,M)","Ck?(fw,w,i9,w)","E(fw)","c(M,te)","ev(ev,ev,M)","C(M)","mH(mH,mH,M)","n5(n5,n5,M)","kF(kF,kF,M)","l4(l4,l4,M)","h(kF)","h(l4)","e6(e6,e6,M)","mo(mo,mo,M)","uB(ev,M,e6,w{size:M?})","C(ev,e6)","M(m,m)","u<tf>(e6,u<w>)","U<nR>(cn<nR>)","u<ri>(u<mM>)","E(mM)","y4(ff<A?>)"])
A.aCK.prototype={
$1(d){var w=B.eg(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q0(J.ak(v==null?"":v),A.oI(w.h(0,"revenue_net")),A.oI(w.h(0,"expense_net")),A.oI(w.h(0,"result_net")))},
$S:z+23}
A.aCL.prototype={
$1(d){var w,v,u,t=B.eg(x.f.a(d),x.N,x.z),s=B.ap(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.ap(t.h(0,"code"))
v=A.oI(t.h(0,"gross"))
u=B.bD(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.ve(s,r,w,v,u,A.oI(t.h(0,"avg_basket")))},
$S:z+12}
A.aCM.prototype={
$1(d){var w,v=B.eg(x.f.a(d),x.N,x.z),u=B.ap(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.bD(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w6(u,t,w,A.oI(v.h(0,"gross")))},
$S:z+14}
A.aD_.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.C3(v,u,J.ak(t==null?"expense":t),A.tS(w.h(d,"net")),A.tS(w.h(d,"tax")),A.tS(w.h(d,"gross")))},
$S:z+16}
A.boy.prototype={
$1(d){return new A.uA(d.aA($.cd(),x.A))},
$S:z+17}
A.boz.prototype={
$1(d){return new A.Dr(d.aA($.bKo(),x.D))},
$S:z+36}
A.bqn.prototype={
$1(d){return E.bso()},
$S:z+38}
A.boA.prototype={
$1(d){var w=d.aA($.x0(),x.P)
return d.aA($.atM(),x.a).FH(w)},
$S:z+45}
A.box.prototype={
$1(d){var w=d.aA($.x0(),x.P)
return d.aA($.atM(),x.a).FD(w)},
$S:z+68}
A.bow.prototype={
$1(d){return this.ail(d)},
ail(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aA($.cd(),x.A).i7("finance_balance_kpis",t),$async$$1)
case 3:s=r.eg(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:207}
A.aCJ.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aL(0,$.atM(),x.a).px(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCI.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aL(0,$.atM(),x.a).Lc(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCY.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.brb()
if(s.e==null)B.V(B.Z(y.b))
s.gct().cr(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCR.prototype={
$0(){return this.a.J6(this.b,this.c)},
$S:0}
A.aCS.prototype={
$0(){return this.a.B1(this.b,this.c)},
$S:0}
A.aCT.prototype={
$0(){return B.nX(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aCU.prototype={
$0(){var w=this
return w.a.B2(w.b,w.c,w.d)},
$S:0}
A.aCX.prototype={
$0(){return D.apw},
$S:105}
A.aCW.prototype={
$2(d,e){return new A.Hi(B.i(d),null)},
$S:z+9}
A.aCV.prototype={
$1(d){return new A.IF(d,null)},
$S:z+10}
A.aCQ.prototype={
$1(d){var w=null,v=this.a,u=$.ep()
v=B.l("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mj(B.b([B.dI(C.d1,w,w,new A.aCO(u),w,w),B.dW(F.uT,new A.aCP(u),B.ee(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.uU)},
$S:57}
A.aCO.prototype={
$0(){B.bl(this.a,!1).dr(!1)
return null},
$S:0}
A.aCP.prototype={
$0(){B.bl(this.a,!1).dr(!0)
return null},
$S:0}
A.be9.prototype={
$0(){var w=this.a.aL(0,$.x0().ghK(),x.V),v=E.bso()
w.wm(0,v)
return v},
$S:0}
A.bea.prototype={
$0(){var w=this.a.aL(0,$.x0().ghK(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.mC(B.bJ(B.aY(v),1,1,0,0,0,0),v)
w.wm(0,u)
return u},
$S:0}
A.beb.prototype={
$0(){return this.a.Iv(this.b,this.c)},
$S:0}
A.be8.prototype={
$2(d,e){return new B.op(B.T(d).aOz(B.T(d).ax.aPs(C.h,C.n)),e,null)},
$S:987}
A.bjE.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.e1(),s=A.Nl(!1,C.xA,"Umsatz 7 %",t.ar(u.a),w),r=A.Nl(!1,C.xA,"Umsatz 19 %",t.ar(u.b),w),q=A.Nl(!0,D.a9a,"Umsatz netto",t.ar(u.c),w),p=A.Nl(!1,D.a99,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return E.aFg(1.7,B.b([s,r,q,p,A.Nl(!0,C.nx,"Ergebnis",n,o<0?C.ak:C.aQ),A.Nl(!1,C.j0,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,F.lC,!0)},
$S:131}
A.aHS.prototype={
$0(){return D.apt},
$S:105}
A.aHR.prototype={
$2(d,e){var w=null
return B.bN(C.ak,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.h,13,C.k),w,w,w),C.fD,w,C.G,w,3)},
$S:262}
A.aHQ.prototype={
$1(d){return new A.HC(d,null)},
$S:z+11}
A.bbI.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.e1(),i=j.ar(k.c),h=l.w,g=l.d,f=B.aa(g).i("a9<1,M>"),e=f.i("av.E"),d=B.P(new B.a9(g,new A.bby(),f),e)
i=A.kd(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.P(new B.a9(g,new A.bbz(),f),e)
d=A.kd(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.P(new B.a9(g,new A.bbA(),f),e)
k=A.kd(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bbB(),f),e)
w=A.kd(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bbC(),f),e)
v=A.kd(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bbD(),f),e)
u=A.kd(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bbE(),f),e)
t=A.kd(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.P(new B.a9(g,new A.bbF(),f),e)
h=A.kd(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.P(new B.a9(g,new A.bbG(m),f),e)
m=A.kd(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=C.d.am(l,1)
l=B.P(new B.a9(g,new A.bbH(l),f),e)
return E.aFg(n,B.b([i,d,k,w,v,u,t,h,m,A.kd(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,l,j)],x.p),o,12,12,F.lC,!0)},
$S:131}
A.bby.prototype={
$1(d){return d.b},
$S:z+0}
A.bbz.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bbA.prototype={
$1(d){return d.d},
$S:z+0}
A.bbB.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbC.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bbD.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bbE.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbF.prototype={
$1(d){return d.d},
$S:z+0}
A.bbG.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbH.prototype={
$1(d){return this.a},
$S:z+0}
A.bbJ.prototype={
$0(){return A.bvb(this.b,1.45,new A.SW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbK.prototype={
$0(){return A.bvb(this.b,1.6,new A.T6(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bnH.prototype={
$1(d){var w=this,v=null,u=B.b0(16),t=x.p,s=B.b([B.au(B.b([B.aP(B.l(w.a,v,v,v,B.c7(C.h,18,C.q),v,v,v),1),B.e5(v,v,D.ab1,v,v,new A.bnG(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.l(w.b,v,v,v,B.D(C.u,12,C.aL),v,v,v),C.a_],t))
s.push(C.x)
s.push(B.cg(new B.ml(w.c,w.d,v),v,17976931348623157e292))
return B.a3a(v,C.l,new B.af(C.am,B.ag(s,C.D,C.f,C.N),v),v,v,v,C.hG,C.uE,v,new B.dg(u,C.A),v)},
$S:988}
A.bnG.prototype={
$0(){return B.bl(this.a,!1).f1()},
$S:0}
A.bbL.prototype={
$0(){var w=this.a,v=B.ba(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bvb(this.b,2.4,new A.X7(w.w,w.y,w.z,null),C.b.co(u," \xb7 "),v)
return null},
$S:0}
A.bj0.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bj1.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bj2.prototype={
$1(d){return A.aI6(null,1.4,null,C.ak,0.35,D.af9,D.Dl,null,!1,!1,!1,!1,D.EF,!1,10,D.Y5,!0,C.ld,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+13}
A.b3_.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b31.prototype={
$2(d,e){var w=null
return B.l(this.a.aJi(d),w,w,w,B.D(C.u,10,C.O),w,w,w)},
$S:z+15}
A.b32.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zC
return new B.af(C.kH,B.l(C.c.cT(this.a[v].a,5),w,w,w,B.D(C.u,9,C.O),w,w,w),w)},
$S:z+5}
A.b30.prototype={
$1(d){return D.a7P},
$S:z+6}
A.b3N.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3O.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3P.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b3Q.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zC
return new B.af(C.kH,B.l(this.a[v],w,w,w,B.D(C.h,12,C.q),w,w,w),w)},
$S:z+5}
A.bce.prototype={
$1(d){return d.d},
$S:z+18}
A.bcf.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bkV.prototype={
$1(d){return d.d},
$S:z+19}
A.bkW.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b1u.prototype={
$0(){return D.apB},
$S:105}
A.b1t.prototype={
$2(d,e){return new A.wo("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+20}
A.b1s.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bN(o,B.ag(B.b([B.l("Noch keine Bilanzdaten erfasst.",o,o,o,B.D(C.h,14,C.O),o,o,o),C.a_,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.D(C.u,12.5,C.k),o,o,o),C.x,B.jU(C.Ee,D.aCn,new A.b1o(p.b,p.c),o)],x.p),C.D,C.f,C.i),C.as,o,C.G,o,3)
w=new A.b1v(d)
v=C.b.fF(p.a.e.d,0,new A.b1p())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jR(new A.b1q(new A.b1w(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ag(B.b([w,C.a_,B.au(B.b([B.aP(B.l("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.D(C.u,11,C.k),o,o,o),1),B.pW(D.abq,D.aBv,new A.b1r(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:248}
A.b1o.prototype={
$0(){return A.at6(this.a,this.b,null)},
$S:0}
A.b1v.prototype={
$1(d){var w=B.bD(J.a3(this.a,d))
return w==null?null:w},
$S:989}
A.b1w.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.ba(w,".",",")+" %"}return w},
$S:31}
A.b1p.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1q.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.kd(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fh,o.$1("liquidity1_pct")),m=A.kd(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fh,o.$1("liquidity2_pct")),l=A.kd(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fh,o.$1("liquidity3_pct"))
o=A.kd(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fh,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.ba(w,".",",")+" %"}w=A.kd(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fh,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.e1()
v=u.ar(v)
return E.aFg(p,B.b([n,m,l,o,w,A.kd(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.fh,v)],x.p),q,12,12,F.lC,!0)},
$S:131}
A.b1r.prototype={
$0(){return A.at6(this.a,this.b,this.c)},
$S:0}
A.bnF.prototype={
$1(d){return new A.AG(this.a,new A.bnE(this.b),this.c,null)},
$S:z+21}
A.bnE.prototype={
$0(){var w=this.a,v=$.bxo()
if(w.e==null)B.V(B.Z(y.b))
w.gct().cr(v)},
$S:0}
A.b1j.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1k.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1m.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.tY(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.L(new A.b1l(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1l.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1n.prototype={
$0(){return B.bl(this.a,!1).f1()},
$S:0}
A.b1x.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1y.prototype={
$1(d){return new A.xi(x.B.a(d),this.a.a.r)},
$S:z+24}
A.avF.prototype={
$1(d){return d.e},
$S:z+25}
A.avG.prototype={
$2(d,e){return d+e},
$S:45}
A.avI.prototype={
$1(d){return d.c.length!==0},
$S:z+26}
A.avK.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdm(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+27}
A.avL.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eN(t,r)
s=s.x
s===$&&B.a()
w.eN(t,s)
u.ad0(v.d,v.e)},
$S:0}
A.avo.prototype={
$1(d){return 0},
$S:990}
A.avn.prototype={
$2(d,e){return B.fh(C.bS,this.a.akE(e),C.t,C.bt,null)},
$S:991}
A.aWX.prototype={
$1(d){return d.a},
$S:z+29}
A.aWY.prototype={
$1(d){return d.b},
$S:z+30}
A.aWZ.prototype={
$1(d){return new A.jE(this.a.ch[d.a].a,d.b)},
$S:z+31}
A.aX_.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.ml||v===D.dB))t=1-t
return new A.jE(d,t*w.d)},
$S:z+32}
A.aX0.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gov(),p=d.a
r.gov()
r=$.lm()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.am(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.am(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.am(v/1000,1)
t="K"}else{u=C.d.am(v,r.aiI(Math.abs(s.b-s.c)))
t=""}if(C.c.hG(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.ny(d,q.c.b.$2(p,new A.te(u+t,s.e)))},
$S:z+33}
A.aSg.prototype={
$1(d){this.a.l5(new A.a3Z(d))},
$S:148}
A.aSh.prototype={
$1(d){this.a.l5(new A.a4_(d))},
$S:41}
A.aSi.prototype={
$1(d){this.a.l5(new A.a40(d))},
$S:28}
A.aSj.prototype={
$0(){this.a.l5(D.a15)},
$S:0}
A.aSk.prototype={
$1(d){this.a.l5(new A.Mc())},
$S:42}
A.aSl.prototype={
$1(d){this.a.l5(new A.a43(d))},
$S:43}
A.aSm.prototype={
$0(){this.a.l5(D.a16)},
$S:0}
A.aSn.prototype={
$1(d){this.a.l5(new A.Mf(d))},
$S:90}
A.aSo.prototype={
$1(d){this.a.l5(new A.a3Y(d))},
$S:147}
A.aSp.prototype={
$1(d){this.a.l5(new A.a3X(d))},
$S:146}
A.aSq.prototype={
$1(d){return this.a.l5(new A.Ma(d))},
$S:145}
A.aSr.prototype={
$1(d){return this.a.l5(new A.a41(d))},
$S:59}
A.aSs.prototype={
$1(d){return this.a.l5(new A.Md(d))},
$S:52}
A.bbW.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aP8(w==null?B.b([],x.t):w)},
$S:z+35}
A.bbU.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bbV.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h0(w,new A.bbT())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.FQ(w))},
$S:0}
A.bbT.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bbX.prototype={
$1(d){return new A.yP(x.hf.a(d),this.a.a.r)},
$S:z+37}
A.aI7.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.bom.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bzL(t?A.bv_(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tf(w,new A.y6(!0,A.bvK(),new A.bol(v)))},
$S:z+39}
A.bol.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bOh(A.bv_(d,e,f),w,A.bWU(d,e,f))},
$S:z+40}
A.boj.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iU(v,v,u==null?D.dh:u,v,v,v,v,v,v,v,v,14,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v)
return new A.ri(C.d.j(d.b),w)},
$S:z+41}
A.aI9.prototype={
$1(d){return d.a.length!==0},
$S:z+42}
A.aIa.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.aIe.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+43}
A.aIc.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eN(v,t)
u=u.Q
u===$&&B.a()
w.eN(v,u)},
$S:0}
A.aId.prototype={
$0(){this.a.ad0(this.b,this.c)},
$S:0}
A.aIf.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avy.prototype={
$1(d){return d.gdm(0)},
$S:z+44}
A.avz.prototype={
$2(d,e){return d+e},
$S:45}
A.avC.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iK(v,B.aa(v).i("iK<1>")).aq(0,new A.avD(w,this.a/(u+1),this.c))},
$S:0}
A.avD.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdm(0)/2
this.c[d]=v
w.a=v+e.gdm(0)/2},
$S:z+2}
A.avA.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdm(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdm(0)/2},
$S:z+2}
A.avB.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdm(0)/2
this.c[d]=u
u+=e.gdm(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFf.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:992}
A.ayP.prototype={
$1(d){return d},
$S:993}
A.aSB.prototype={
$2(d,e){return this.a.Ao(d,e)},
$S:19};(function aliases(){var w=A.JY.prototype
w.a_v=w.i4
w.akX=w.aQQ
w.akY=w.acU
w=A.Sy.prototype
w.anA=w.l
w=A.K7.prototype
w.a_w=w.i4
w=A.Fp.prototype
w.a0f=w.Yr})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c_t","bOe",71)
v(A.SA.prototype,"gaDb","HV",22)
u(A.SB.prototype,"garm","arn",8)
t(A,"bZk",3,null,["$3"],["bLz"],48,0)
t(A,"bZl",3,null,["$3"],["bLA"],49,0)
t(A,"bZm",3,null,["$3"],["bLB"],50,0)
t(A,"bZo",4,null,["$4"],["c_6"],51,0)
w(A,"bZn","c_5",52)
s(A,"bvf","c_7",53)
t(A,"bZf",3,null,["$3"],["bOi"],54,0)
w(A,"Z9","c1u",55)
w(A,"at8","c_a",6)
t(A,"bZh",3,null,["$3"],["bP3"],56,0)
t(A,"bZj",3,null,["$3"],["bUc"],57,0)
t(A,"bZg",3,null,["$3"],["bP2"],58,0)
t(A,"bZi",3,null,["$3"],["bUb"],59,0)
w(A,"c8A","bP1",60)
w(A,"c8B","bUa",61)
r(A.WX.prototype,"ga3P","awN",28)
u(A.UO.prototype,"gay4","ay5",34)
t(A,"c0n",3,null,["$3"],["bPy"],62,0)
t(A,"c0m",3,null,["$3"],["bLD"],63,0)
w(A,"c0q","c1v",1)
t(A,"bGd",4,null,["$5$size","$4"],["bEF",function(d,e,f,g){return A.bEF(d,e,f,g,null)}],64,0)
s(A,"bvK","c1t",65)
s(A,"bGe","bZ2",66)
s(A,"bGh","c_d",67)
s(A,"bGg","c_9",3)
s(A,"bGf","c_8",3)
w(A,"c0p","bFR",69)
w(A,"c0o","bFQ",70)
u(A.Px.prototype,"gaFM","a6q",46)
t(A,"Ze",3,null,["$3"],["c0l"],47,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5w,A.af2,A.ak3,A.Ia,A.IF,A.af0,A.Hi,A.HC,A.ajo,A.akz,A.TF,A.X7,A.SW,A.T6,A.al2,A.ahu,A.Iu,A.aqA,A.wo,A.JZ,A.A8])
u(B.A,[A.uA,A.Dr,A.b9,A.ag2,A.afT,A.afV,A.afW,A.afN,A.aj8,A.afZ,A.afX,A.avU,A.aqE,A.avH,A.afU,A.K7,A.a4z,A.te,A.ap4,A.ap3,A.afM,A.aj7,A.ev,A.aj4,A.aj6,A.anj,A.ajV,A.arh,A.aj5,A.aiO,A.aj3,A.avm,A.bbR,A.avp,A.afJ,A.ny,A.aj0,A.aj1,A.vq,A.he,A.akH,A.akK,A.afQ,A.ag3,A.afR,A.aj2,A.akN,A.akL,A.aqD,A.ap2,A.aI8,A.akJ,A.v8,A.a05,A.akU,A.a0f,A.b_t])
u(B.uy,[A.q0,A.ve,A.w6,A.ayd,A.azk,A.nR,A.C3,A.nS])
u(B.nD,[A.aCK,A.aCL,A.aCM,A.aD_,A.boy,A.boz,A.bqn,A.boA,A.box,A.bow,A.aCV,A.aCQ,A.aHQ,A.bby,A.bbz,A.bbA,A.bbB,A.bbC,A.bbD,A.bbE,A.bbF,A.bbG,A.bbH,A.bnH,A.bj2,A.b30,A.b3N,A.b3O,A.bce,A.bkV,A.b1s,A.b1v,A.b1w,A.bnF,A.b1y,A.avF,A.avI,A.avo,A.aWX,A.aWY,A.aWZ,A.aX_,A.aX0,A.aSg,A.aSh,A.aSi,A.aSk,A.aSl,A.aSn,A.aSo,A.aSp,A.aSq,A.aSr,A.aSs,A.bbW,A.bbX,A.aI7,A.bom,A.bol,A.boj,A.aI9,A.aIa,A.avy,A.ayP])
t(A.y4,B.fr)
u(B.xx,[A.aCJ,A.aCI,A.aCY,A.aCR,A.aCS,A.aCT,A.aCU,A.aCX,A.aCO,A.aCP,A.be9,A.bea,A.beb,A.aHS,A.bbJ,A.bbK,A.bnG,A.bbL,A.b1u,A.b1o,A.b1r,A.bnE,A.b1j,A.b1k,A.b1m,A.b1l,A.b1n,A.b1x,A.avL,A.aSj,A.aSm,A.bbU,A.bbV,A.aIc,A.aId,A.avC])
u(B.xE,[A.y5,A.ame,A.a5x,A.afP])
u(B.xy,[A.aCW,A.be8,A.bjE,A.aHR,A.bbI,A.bj0,A.bj1,A.b3_,A.b31,A.b32,A.b3P,A.b3Q,A.bcf,A.bkW,A.b1t,A.b1p,A.b1q,A.avG,A.avK,A.avn,A.bbT,A.aIe,A.aIf,A.avz,A.avD,A.avA,A.avB,A.aFf,A.aSB])
u(B.O,[A.AG,A.QE])
u(B.a0,[A.SA,A.WX])
u(B.MT,[A.K3,A.Nz])
u(B.xa,[A.SB,A.UO])
t(A.a_I,A.ag2)
t(A.afI,A.a_I)
t(A.a_s,A.afI)
u(A.a_s,[A.afS,A.akI])
t(A.nz,A.afS)
u(B.U4,[A.avw,A.acu,A.Cj,A.aCa,A.aHT,A.MG])
t(A.fw,A.afT)
t(A.i9,A.afV)
t(A.mn,A.afW)
t(A.a_z,A.afN)
t(A.Mg,A.aj8)
u(A.Mg,[A.afY,A.akM])
t(A.a_E,A.afY)
t(A.a_F,A.afZ)
t(A.Ck,A.afX)
u(A.avU,[A.K4,A.NB])
t(A.acw,A.aqE)
t(A.ag_,A.acw)
t(A.a_G,A.ag_)
u(B.b7,[A.xi,A.yP])
t(A.uc,A.afU)
t(A.JY,A.K7)
u(A.JY,[A.avJ,A.aIb])
u(B.Nv,[A.a_C,A.a5K])
u(B.J,[A.Fp,A.afK])
u(A.Fp,[A.a9D,A.a9Q])
t(A.pP,A.ap4)
t(A.ab1,A.ap3)
t(A.oU,A.afM)
t(A.uC,A.aj7)
t(A.y7,A.aj4)
t(A.pg,A.aj6)
t(A.Pd,A.anj)
t(A.mH,A.ajV)
t(A.n5,A.arh)
u(A.pg,[A.ajU,A.arg])
t(A.kF,A.ajU)
t(A.l4,A.arg)
t(A.a3W,A.aj5)
u(A.a3W,[A.ajT,A.arf])
t(A.a4K,A.ajT)
t(A.acU,A.arf)
t(A.LZ,A.aiO)
t(A.uB,A.aj3)
t(A.M9,A.uB)
t(A.ab2,B.fW)
t(A.afL,A.afK)
t(A.Sy,A.afL)
t(A.a_t,A.Sy)
t(A.jE,A.afJ)
t(A.a3T,A.aj0)
t(A.a3V,A.aj1)
u(A.he,[A.a3Z,A.a4_,A.a40,A.Mb,A.Mc,A.a43,A.Me,A.Mf,A.a3Y,A.a3X,A.Ma,A.a41,A.a42,A.Md])
t(A.ps,A.akI)
t(A.e6,A.akH)
t(A.NA,A.akK)
t(A.a_B,A.afQ)
t(A.mo,A.ag3)
t(A.K2,A.afR)
t(A.y6,A.aj2)
t(A.E5,A.akM)
t(A.a5L,A.akN)
t(A.akG,A.ev)
t(A.mM,A.akG)
t(A.pZ,A.mM)
t(A.ri,A.akL)
t(A.tf,A.aqD)
t(A.FQ,A.ap2)
t(A.yQ,A.akJ)
t(A.yT,A.akU)
t(A.Px,B.PK)
t(A.a3P,B.bI)
w(A.afN,A.b9)
w(A.afS,A.b9)
w(A.afT,A.b9)
w(A.afV,A.b9)
w(A.afW,A.b9)
w(A.afX,A.b9)
w(A.afY,A.b9)
w(A.afZ,A.b9)
w(A.ag_,A.b9)
w(A.afU,A.b9)
w(A.afI,A.b9)
w(A.afM,A.b9)
w(A.aiO,A.b9)
w(A.aj3,A.b9)
w(A.aj4,A.b9)
w(A.aj6,A.b9)
w(A.aj7,A.b9)
w(A.ajU,A.b9)
w(A.ajT,A.b9)
w(A.ajV,A.b9)
w(A.anj,A.b9)
w(A.ap3,A.b9)
w(A.ap4,A.b9)
w(A.aqE,A.b9)
w(A.arg,A.b9)
w(A.arf,A.b9)
w(A.arh,A.b9)
w(A.afJ,A.b9)
v(A.afK,B.aA)
w(A.afL,B.e_)
v(A.Sy,B.a2U)
w(A.ag2,A.b9)
w(A.aj0,A.b9)
w(A.aj1,A.b9)
w(A.aj8,A.b9)
w(A.afQ,A.b9)
w(A.afR,A.b9)
w(A.ag3,A.b9)
w(A.aj2,A.b9)
w(A.aj5,A.b9)
w(A.akG,A.b9)
w(A.akH,A.b9)
w(A.akI,A.b9)
w(A.akK,A.b9)
w(A.akL,A.b9)
w(A.akM,A.b9)
w(A.akN,A.b9)
w(A.ap2,A.b9)
w(A.aqD,A.b9)
w(A.akJ,A.b9)
w(A.akU,A.b9)})()
B.bl7(b.typeUniverse,JSON.parse('{"a5w":{"a_":[],"c":[]},"Dr":{"aCN":[]},"y4":{"fr":["be<~>"],"fr.T":"be<~>"},"IF":{"a_":[],"c":[]},"Hi":{"a_":[],"c":[]},"y5":{"bp":[],"O":[],"c":[]},"af2":{"a_":[],"c":[]},"ak3":{"a_":[],"c":[]},"ame":{"bp":[],"O":[],"c":[]},"Ia":{"a_":[],"c":[]},"af0":{"a_":[],"c":[]},"HC":{"a_":[],"c":[]},"wo":{"a_":[],"c":[]},"AG":{"O":[],"c":[]},"a5x":{"bp":[],"O":[],"c":[]},"ajo":{"a_":[],"c":[]},"akz":{"a_":[],"c":[]},"TF":{"a_":[],"c":[]},"X7":{"a_":[],"c":[]},"SW":{"a_":[],"c":[]},"T6":{"a_":[],"c":[]},"al2":{"a_":[],"c":[]},"ahu":{"a_":[],"c":[]},"Iu":{"a_":[],"c":[]},"aqA":{"a_":[],"c":[]},"afP":{"bp":[],"O":[],"c":[]},"SA":{"a0":["AG"]},"K3":{"O":[],"c":[]},"SB":{"a0":["K3"]},"nz":{"b9":[]},"fw":{"b9":[]},"i9":{"b9":[]},"mn":{"b9":[]},"Ck":{"b9":[]},"xi":{"b7":["nz"],"b_":["nz"],"b_.T":"nz","b7.T":"nz"},"a_z":{"b9":[]},"a_E":{"b9":[]},"a_F":{"b9":[]},"a_G":{"b9":[]},"uc":{"b9":[]},"a_C":{"aV":[],"c":[]},"a9D":{"J":[],"I":[],"jg":[],"aQ":[]},"pg":{"b9":[]},"mH":{"b9":[]},"n5":{"b9":[]},"kF":{"b9":[]},"l4":{"b9":[]},"uB":{"b9":[]},"a_s":{"b9":[]},"pP":{"b9":[]},"ab1":{"b9":[]},"oU":{"b9":[]},"uC":{"b9":[]},"y7":{"b9":[]},"acw":{"b9":[]},"Pd":{"b9":[]},"a4K":{"b9":[]},"acU":{"b9":[]},"LZ":{"b9":[]},"M9":{"b9":[]},"JZ":{"a_":[],"c":[]},"QE":{"O":[],"c":[]},"WX":{"a0":["QE"]},"jE":{"b9":[]},"ab2":{"fW":[],"aV":[],"c":[]},"a_t":{"e_":["J","hf"],"J":[],"aA":["J","hf"],"I":[],"aQ":[],"aA.1":"hf","e_.1":"hf","aA.0":"J"},"A8":{"a_":[],"c":[]},"a_I":{"b9":[]},"a3T":{"b9":[]},"Mg":{"b9":[]},"a3V":{"b9":[]},"a3Z":{"he":[]},"a4_":{"he":[]},"a40":{"he":[]},"Mb":{"he":[]},"Mc":{"he":[]},"a43":{"he":[]},"Me":{"he":[]},"Mf":{"he":[]},"a3Y":{"he":[]},"a3X":{"he":[]},"Ma":{"he":[]},"a41":{"he":[]},"a42":{"he":[]},"Md":{"he":[]},"Fp":{"J":[],"I":[],"jg":[],"aQ":[]},"Nz":{"O":[],"c":[]},"UO":{"a0":["Nz"]},"ps":{"b9":[]},"e6":{"b9":[]},"mo":{"b9":[]},"mM":{"ev":[],"b9":[]},"pZ":{"mM":[],"ev":[],"b9":[]},"ri":{"b9":[]},"tf":{"b9":[]},"FQ":{"b9":[]},"yP":{"b7":["ps"],"b_":["ps"],"b_.T":"ps","b7.T":"ps"},"NA":{"b9":[]},"a_B":{"b9":[]},"K2":{"b9":[]},"y6":{"b9":[]},"a3W":{"b9":[]},"E5":{"b9":[]},"a5L":{"b9":[]},"yQ":{"b9":[]},"a5K":{"aV":[],"c":[]},"a9Q":{"J":[],"I":[],"jg":[],"aQ":[]},"yT":{"b9":[]},"Px":{"J":[],"bt":["J"],"I":[],"aQ":[]},"a3P":{"bI":[],"aV":[],"c":[]}}'))
B.bE9(b.typeUniverse,JSON.parse('{"JY":1,"Mg":1,"K7":1,"Fp":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("C3"),e:w("be<nR>"),aN:w("be<nS>"),fM:w("be<a2<h,@>?>"),b:w("be<~>"),W:w("jE"),B:w("nz"),dB:w("fw"),T:w("uc"),fj:w("i9"),G:w("mn"),J:w("mo"),k:w("as"),cX:w("a0f<M>"),dO:w("uk"),R:w("ai<h,@>"),v:w("hP"),bz:w("mw<bc>"),f0:w("nJ"),E:w("b9"),F:w("y4"),X:w("nR"),P:w("mC"),D:w("uA"),a:w("aCN"),d:w("nS"),cw:w("ev"),L:w("hf"),m:w("df<w,E>"),cm:w("kF"),dv:w("mH"),g:w("B<ny>"),O:w("B<fw>"),Y:w("B<i9>"),C:w("B<bs9>"),U:w("B<ev>"),K:w("B<a4z>"),u:w("B<e6>"),bC:w("B<v8>"),aA:w("B<u<ev>>"),r:w("B<FQ>"),s:w("B<h>"),eg:w("B<tc>"),df:w("B<pZ>"),p:w("B<c>"),n:w("B<M>"),t:w("B<w>"),eF:w("bd<a0<O>>"),Z:w("mM"),cz:w("e6"),hf:w("ps"),dj:w("yQ"),fT:w("ri"),c_:w("ig<oC<be<~>>>"),x:w("yT<fw>"),y:w("yT<e6>"),I:w("u<w>"),ef:w("ve"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jS"),aU:w("A"),Q:w("vq<nz>"),o:w("vq<ps>"),eo:w("pF"),gJ:w("pG"),V:w("n_<mC>"),N:w("h"),A:w("ol"),bO:w("bT"),er:w("tc"),j:w("w6"),dw:w("pZ"),bY:w("tf"),cZ:w("q0"),gc:w("kb"),es:w("l4"),bN:w("n5"),l:w("c"),q:w("Bu"),g4:w("iv<M>"),cJ:w("C"),i:w("M"),z:w("@"),S:w("w"),bn:w("xi?"),f3:w("yP?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("kb?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Aw=new B.qu(C.n,B.aw("qu<E>"))
D.AD=new A.Cj(0,"left")
D.ml=new A.Cj(1,"top")
D.AE=new A.Cj(2,"right")
D.dB=new A.Cj(3,"bottom")
D.at8=new A.pP(!1,A.bvf(),22,null)
D.ka=new A.oU(16,null,D.at8,!0)
D.a7Q=new A.pg(C.B,null,2,null)
D.vI=new A.K2(!1,D.a7Q,A.c0q(),!0)
D.a_c=new A.avw(3,"spaceEvenly")
D.a_l=new B.xm(6,"dstIn")
D.Xq=new B.aU(3,3)
D.AI=new B.d2(D.Xq,D.Xq,C.Z,C.Z)
D.a_x=new B.b8(C.B,0,C.P,-1)
D.Bf=new A.a3V()
D.a15=new A.Mb()
D.a16=new A.Me()
D.aJN=new A.ab1()
D.ajH=w([],B.aw("B<kF>"))
D.ajI=w([],B.aw("B<l4>"))
D.Dg=new A.LZ(D.ajH,D.ajI,!0)
D.a7y=new B.eu("Zeitraum",!1,null)
D.a7D=new B.eu("Konten (SKR 03)",!1,null)
D.xi=new A.aCa(0,"center")
D.aJZ=new A.y6(!0,A.bvK(),A.bGd())
D.Dl=new A.y6(!1,A.bvK(),A.bGd())
D.Dm=new A.y7(!1,!0,null,A.at8(),A.Z9(),!0,null,A.at8(),A.Z9())
D.aK_=new A.y7(!0,!0,null,A.at8(),A.Z9(),!0,null,A.at8(),A.Z9())
D.a3o=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3a=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3x=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3s=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2W=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2V=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3S=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3h=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3V=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3P=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.anB=new B.df([50,D.a3o,100,D.a3a,200,D.a3x,300,D.a3s,400,D.a2W,500,D.a2V,600,D.a3S,700,D.a3h,800,D.a3V,900,D.a3P],x.m)
D.dh=new B.rp(D.anB,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ag5=w([8,4],x.t)
D.a7O=new A.pg(D.dh,null,0.4,D.ag5)
D.a7P=new A.pg(C.al,null,0.5,null)
D.fG=new A.ev(0/0,0/0)
D.ata=new A.pP(!0,A.bvf(),44,null)
D.mm=new A.oU(16,null,D.ata,!0)
D.at9=new A.pP(!0,A.bvf(),30,null)
D.mn=new A.oU(16,null,D.at9,!0)
D.a7R=new A.uC(!1,D.mm,D.mn,D.mm,D.mn)
D.aK0=new A.uC(!0,D.mm,D.mn,D.mm,D.mn)
D.Du=new A.MG(0,"left")
D.a8n=new A.MG(1,"center")
D.Dv=new A.MG(2,"right")
D.a8s=new B.ad(57495,"MaterialIcons",null,!1)
D.a96=new B.ad(58927,"MaterialIcons",null,!1)
D.a99=new B.ad(59005,"MaterialIcons",null,!0)
D.a9a=new B.ad(59007,"MaterialIcons",null,!0)
D.a9b=new B.ad(59011,"MaterialIcons",null,!1)
D.a9X=new B.ad(62589,"MaterialIcons",null,!1)
D.a9n=new B.ad(61349,"MaterialIcons",null,!1)
D.aaF=new B.aR(D.a9n,20,C.h,null,null)
D.a9t=new B.ad(61487,"MaterialIcons",null,!1)
D.aaH=new B.aR(D.a9t,18,null,null,null)
D.ab1=new B.aR(C.kX,null,C.h,null,null)
D.ab3=new B.aR(C.xu,null,C.u,null,null)
D.abq=new B.aR(C.nB,16,null,null,null)
D.a8E=new B.ad(57912,"MaterialIcons",null,!1)
D.abx=new B.aR(D.a8E,null,C.ak,null,null)
D.adG=new A.a5x(null)
D.aK5=new A.aHT(0,"horizontal")
D.xK=new A.yQ(0,0,0,0,!1)
D.EF=new A.NA(0.5)
D.Bj=new A.a5L()
D.adK=new A.E5(D.Bj,A.bGh(),10,A.bGe(),!0,A.bGg(),A.bGf(),!1,null,null,null)
D.aK7=new A.E5(D.Bj,A.bGh(),10,A.bGe(),!0,A.bGg(),A.bGf(),!0,null,null,null)
D.af9=w([4,3],x.t)
D.art=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.arj=new B.aG("receivables","Forderungen (kurzfristig)")
D.ar8=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.ar6=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aqX=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.ar1=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arq=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ari=new B.aG("equity","Eigenkapital")
D.GV=w([D.art,D.arj,D.ar8,D.ar6,D.aqX,D.ar1,D.arq,D.ari],B.aw("B<+(h,h)>"))
D.aKb=w([],x.g)
D.ajt=w([],x.O)
D.aju=w([],x.Y)
D.ajv=w([],B.aw("B<mn>"))
D.ajw=w([],B.aw("B<mo>"))
D.aKc=w([],x.U)
D.aKd=w([],x.u)
D.ajx=w([],x.r)
D.aoc={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T1={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yn=new B.ai(D.T1,[0,0,0,0,0,0,0,C.cF],B.aw("ai<h,A>"))
D.aoa={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.anw=new B.ai(D.aoa,[0,0,0,0],B.aw("ai<h,w>"))
D.aop={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.amU=new B.ai(D.aop,[0,0,0,0,null,null,null,null],B.aw("ai<h,w?>"))
D.amQ=new B.ai(D.aoc,[D.yn,D.yn,D.yn,C.cF,C.cF,C.cF,D.anw,D.amU],x.R)
D.an6=new B.ai(D.T1,[0,0,0,0,0,0,0,C.cE],x.R)
D.ao9={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.anx=new B.ai(D.ao9,[0,0,0,0,0,0,0,C.cE],x.R)
D.a40=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a48=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2Z=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3k=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3u=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4l=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2M=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3m=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3w=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3Q=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.anC=new B.df([50,D.a40,100,D.a48,200,D.a2Z,300,D.a3k,400,D.a3u,500,D.a4l,600,D.a2M,700,D.a3m,800,D.a3w,900,D.a3Q],x.m)
D.SR=new B.rp(D.anC,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a72=new B.aj(32,32,32,32)
D.apt=new B.af(D.a72,C.bC,null)
D.a74=new B.aj(48,48,48,48)
D.apw=new B.af(D.a74,C.bC,null)
D.apB=new B.af(C.am,C.bC,null)
D.ajJ=w([],B.aw("B<mH>"))
D.ajK=w([],B.aw("B<n5>"))
D.Xr=new A.Pd(D.ajJ,D.ajK)
D.as4=new B.fX("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.as6=new B.fX("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.as8=new B.fX("Automaten-Business","Umsatz je Automat",null,null)
D.as9=new B.fX("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.asb=new B.fX("Top","Meistverkaufte Produkte",null,null)
D.ase=new B.fX("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asf=new B.fX("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y5=new B.rX(C.E,C.p,0)
D.aux=new B.cT(18,18,C.mx,null)
D.aC7=new B.al("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.auO=new B.eo(D.aC7,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aBE=new B.al("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.auP=new B.eo(D.aBE,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aKm=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBv=new B.al("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aCn=new B.al("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zf=new A.acu(0,"auto")
D.aCU=new A.acu(1,"top")
D.aH5=new A.wo("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aH6=new A.wo("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c9_","bKo",()=>B.jl(new A.boy(),x.D))
w($,"c90","atM",()=>B.jl(new A.boz(),x.a))
w($,"c9V","x0",()=>B.btZ(new A.bqn(),x.P))
w($,"c91","brb",()=>C.aO.$1$1(new A.boA(),x.d))
w($,"c8Z","bKn",()=>C.aO.$1$1(new A.box(),x.X))
w($,"c8Y","bxo",()=>C.aO.$1$1(new A.bow(),x.h))
w($,"c8X","bra",()=>B.aXP(A.c_t(),x.F,x.b))
w($,"c2f","bqN",()=>new A.avm())
v($,"c5t","lm",()=>new A.b_t())})()};
(a=>{a["ZSydqw3uhjysbUEqcnkmtkycbE0="]=a.current})($__dart_deferred_initializers__);