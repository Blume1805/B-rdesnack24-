((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nl(d,e,f,g,h){return new A.a5v(f,g,d,h,e,null)},
a5v:function a5v(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uA:function uA(d){this.a=d},
Dr:function Dr(d){this.a=d},
bOb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SI
w=x.f
v=x.N
u=x.z
t=A.aCY(B.eg(w.a(e.h(a0,"current")),v,u))
s=A.aCY(B.eg(w.a(e.h(a0,"prior_year")),v,u))
r=A.aCY(B.eg(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cF
p=J.d3(p,new A.aCJ(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cF
o=J.d3(o,new A.aCK(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cF
q=J.d3(q,new A.aCL(),x.j)
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
i=A.bnI(u.h(0,"revenue_growth_yoy_pct"))
h=A.bnI(u.h(0,"revenue_growth_mom_pct"))
g=A.bnI(u.h(0,"result_growth_yoy_pct"))
u=A.bnI(u.h(0,"result_growth_mom_pct"))
f=B.bD(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nR(t,s,r,p,o,q,new A.ayc(m,l,k,n),new A.azj(v,e,w,j,i,h,g,u),f)},
oI(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jX(J.ak(d))
return w==null?0:w},
bnI(d){if(d==null)return null
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
ayc:function ayc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azj:function azj(d,e,f,g,h,i,j,k){var _=this
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
aCJ:function aCJ(){},
aCK:function aCK(){},
aCL:function aCL(){},
aCY(d){var w=J.Y(d),v=A.tS(w.h(d,"revenue_net_7")),u=A.tS(w.h(d,"revenue_net_19")),t=A.tS(w.h(d,"revenue_net")),s=A.tS(w.h(d,"expense_net")),r=A.tS(w.h(d,"result_net")),q=A.tS(w.h(d,"vat_collected")),p=A.tS(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cF
w=J.d3(w,new A.aCZ(),x._)
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
aCZ:function aCZ(){},
bOa(d){return new A.y4(d,new B.ig(x.c_),C.dA)},
bou:function bou(){},
bov:function bov(){},
bqj:function bqj(){},
bow:function bow(){},
bot:function bot(){},
bos:function bos(){},
y4:function y4(d,e,f){this.r=d
this.a=e
this.f=f},
aCI:function aCI(d,e,f){this.a=d
this.b=e
this.c=f},
aCH:function aCH(d,e,f){this.a=d
this.b=e
this.c=f},
bOc(){return new A.y5(null)},
bao(d,e,f,g,h){return new A.ak2(e,h,g,f,d,null)},
y5:function y5(d){this.a=d},
aCX:function aCX(d){this.a=d},
aCQ:function aCQ(d,e,f){this.a=d
this.b=e
this.c=f},
aCR:function aCR(d,e,f){this.a=d
this.b=e
this.c=f},
aCS:function aCS(d){this.a=d},
aCT:function aCT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCW:function aCW(){},
aCV:function aCV(){},
aCU:function aCU(){},
aCP:function aCP(d,e){this.a=d
this.b=e},
aCN:function aCN(d){this.a=d},
aCO:function aCO(d){this.a=d},
af1:function af1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ak2:function ak2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amd:function amd(d,e){this.e=d
this.a=e},
be5:function be5(d){this.a=d},
be6:function be6(d){this.a=d},
be7:function be7(d,e,f){this.a=d
this.b=e
this.c=f},
be4:function be4(){},
Ia:function Ia(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IF:function IF(d,e){this.c=d
this.a=e},
bjA:function bjA(d){this.a=d},
af_:function af_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hi:function Hi(d,e){this.c=d
this.a=e},
bv7(d,e,f,g,h){var w=null
return B.jC(w,w,!0,w,new A.bnD(h,g,e,f),d,w,!0,!0,x.H)},
kd(d,e,f,g,h,i,j,k,l,m,n){return new A.aky(g,n,i,e,d,m,f,k,l,j,null)},
at5(d,e,f){var w=0,v=B.r(x.H)
var $async$at5=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jC(null,null,!0,null,new A.bnB(f,e,e.aL(0,$.cd(),x.A)),d,null,!0,!0,x.H),$async$at5)
case 2:return B.p(null,v)}})
return B.q($async$at5,v)},
a5w:function a5w(d){this.a=d},
aHO:function aHO(){},
aHN:function aHN(){},
aHM:function aHM(){},
HC:function HC(d,e){this.c=d
this.a=e},
bbE:function bbE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbu:function bbu(){},
bbv:function bbv(){},
bbw:function bbw(){},
bbx:function bbx(){},
bby:function bby(){},
bbz:function bbz(){},
bbA:function bbA(){},
bbB:function bbB(){},
bbC:function bbC(d){this.a=d},
bbD:function bbD(d){this.a=d},
bbF:function bbF(d,e){this.a=d
this.b=e},
bbG:function bbG(d,e){this.a=d
this.b=e},
bnD:function bnD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnC:function bnC(d){this.a=d},
ajn:function ajn(d){this.a=d},
aky:function aky(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbH:function bbH(d,e){this.a=d
this.b=e},
TF:function TF(d,e,f){this.c=d
this.d=e
this.a=f},
X7:function X7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biX:function biX(){},
biY:function biY(){},
biZ:function biZ(d){this.a=d},
SW:function SW(d,e,f){this.c=d
this.d=e
this.a=f},
b2W:function b2W(){},
b2Y:function b2Y(d){this.a=d},
b2Z:function b2Z(d){this.a=d},
b2X:function b2X(){},
T6:function T6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3J:function b3J(){},
b3K:function b3K(){},
b3L:function b3L(){},
b3M:function b3M(d){this.a=d},
al1:function al1(d,e){this.c=d
this.a=e},
bca:function bca(){},
bcb:function bcb(){},
aht:function aht(d,e){this.c=d
this.a=e},
Iu:function Iu(d,e,f){this.c=d
this.d=e
this.a=f},
aqz:function aqz(d,e){this.c=d
this.a=e},
bkR:function bkR(){},
bkS:function bkS(){},
wo:function wo(d,e){this.c=d
this.a=e},
afO:function afO(d,e){this.e=d
this.a=e},
b1q:function b1q(){},
b1p:function b1p(){},
b1o:function b1o(d,e,f){this.a=d
this.b=e
this.c=f},
b1k:function b1k(d,e){this.a=d
this.b=e},
b1r:function b1r(d){this.a=d},
b1s:function b1s(d){this.a=d},
b1l:function b1l(){},
b1m:function b1m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1n:function b1n(d,e,f){this.a=d
this.b=e
this.c=f},
bnB:function bnB(d,e,f){this.a=d
this.b=e
this.c=f},
bnA:function bnA(d){this.a=d},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SA:function SA(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1f:function b1f(d){this.a=d},
b1g:function b1g(d){this.a=d},
b1i:function b1i(d,e){this.a=d
this.b=e},
b1h:function b1h(d,e){this.a=d
this.b=e},
b1j:function b1j(d){this.a=d},
b8:function b8(){},
bym(d){return new A.K3(d,C.ar,C.dr,null,null)},
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
b1t:function b1t(d,e){this.a=d
this.b=e},
b1u:function b1u(d){this.a=d},
avw(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.aju:f,p=a0==null?16:a0,o=d==null?D.a_b:d,n=g==null,m=n?A.brB(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xq:a3
n=n?A.brB(r,r,r,r,r,r,r,r):g
w=j==null?D.Df:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.nz(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Be,s,w,i,n)},
avD(d,e,f,g,h){var w=d==null?D.ajv:d,v=e==null?2:e,u=g==null?C.lc:g
return new A.fw(h,f===!0,w,v,u)},
bLv(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avD(A.kj(d.c,e.c,f,A.bZh(),x.fj),B.aa(d.d,e.d,f),!1,A.kj(d.e,e.e,f,A.Ze(),x.S),w)},
a_C(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SQ
else w=h
v=m==null
u=v?8:m
t=$.lm()
s=t.aVV(f,v?8:m)
t=t.aVW(g,v?8:m)
v=d==null?A.byk(r,r,r,r,r):d
return new A.i9(q,l,w,j,u,s,e,t,v,k==null?D.ajw:k)},
bLw(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.aa(d.e,e.e,f),q=B.mp(d.f,e.f,f),p=A.kj(d.r,e.r,f,A.Ze(),x.S),o=B.bV(d.w,e.w,f),n=B.aa(d.a,e.a,f),m=B.aa(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aa(w.b,v.b,f)
t=B.aa(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_C(A.byk(v,u,null,!1,t),p,q,o,s,n,null,A.kj(d.y,e.y,f,A.bZi(),x.G),m,r)},
bLx(d,e,f){var w,v,u=B.aa(d.a,e.a,f)
u.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mn(u,w,v,B.bV(d.d,e.d,f))},
byk(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dh
else w=d
return new A.a_y(g===!0,v,u,w,f)},
brB(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_E(4,C.hF,16,D.xg,0,120,A.bZk(),!1,!1,D.Ze,0,C.A,A.bZj())
else w=k
v=j==null?C.kJ:j
return new A.a_D(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c_2(d,e,f,g){var w=null,v=B.iU(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Ck(C.d.j(f.b),v)},
c_1(d){return A.axD(D.dh,15)},
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
avv:function avv(d,e){this.a=d
this.b=e},
fw:function fw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avE:function avE(){},
avF:function avF(){},
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
act:function act(d,e){this.a=d
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
afM:function afM(){},
afR:function afR(){},
afS:function afS(){},
afU:function afU(){},
afV:function afV(){},
afW:function afW(){},
afX:function afX(){},
afY:function afY(){},
afZ:function afZ(){},
avG:function avG(d){this.a=d},
avH:function avH(){},
uc:function uc(d,e,f){this.a=d
this.b=e
this.c=f},
afT:function afT(){},
avI:function avI(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avJ:function avJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avK:function avK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4y:function a4y(d){this.b=d},
a_B:function a_B(d,e,f){this.d=d
this.e=e
this.a=f},
a9C:function a9C(d,e,f,g,h,i,j,k){var _=this
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
c_3(d,e){var w=null
return new A.QE(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
avp(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aa(w.c,v.c,f)
u.toString
return new A.oU(t,e.b,new A.pP(v.a,v.b,u,B.aa(w.d,v.d,f)),!0)},
bzI(d,e,f){var w=A.avp(d.b,e.b,f),v=A.avp(d.d,e.d,f),u=A.avp(d.e,e.e,f)
return new A.uC(e.a,w,A.avp(d.c,e.c,f),v,u)},
bOe(d,e,f){var w,v
if(d.k(0,D.fG))return e
if(e.k(0,D.fG))return d
w=B.aa(d.a,e.a,f)
w.toString
v=B.aa(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bzG(d,e,f){return new A.y7(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c1q(d){return!0},
c_6(d){return D.a7O},
bzH(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.pg(w,f,g,e)},
bBE(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZd(),x.dv)
v.toString
w=A.kj(d.b,e.b,f,A.bZf(),x.bN)
w.toString
return new A.Pd(v,w)},
bP_(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.mH(t,w,v,u)},
bU8(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r3(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.n5(t,w,v,u)},
bOZ(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.p9(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bOX(B.brr(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Ze(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kF(r,e.f,e.r,t,e.x,u,v,w,s)},
bU7(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.p9(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bU5(B.brr(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r3(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kj(d.d,e.d,f,A.Ze(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
bOX(d,e,f,g,h,i){return new A.a4J(f,!1,g,i,d,e)},
bOY(d){return C.d.am(d.e,1)},
bU5(d,e,f,g,h,i){return new A.acT(f,!1,g,i,d,e)},
bU6(d){return C.d.am(d.e,1)},
bzD(d,e,f){var w,v=A.kj(d.a,e.a,f,A.bZc(),x.cm)
v.toString
w=A.kj(d.b,e.b,f,A.bZe(),x.es)
w.toString
return new A.LZ(v,w,!0)},
bOd(d,e,f){return new A.M9(d,e==null?4:e,f)},
a_r:function a_r(){},
Cj:function Cj(d,e){this.a=d
this.b=e},
te:function te(d,e){this.r=d
this.w=e},
pP:function pP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab0:function ab0(){},
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
acv:function acv(){},
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
a4J:function a4J(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acT:function acT(d,e,f,g,h,i){var _=this
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
afH:function afH(){},
afL:function afL(){},
aiN:function aiN(){},
aj2:function aj2(){},
aj3:function aj3(){},
aj5:function aj5(){},
aj6:function aj6(){},
ajT:function ajT(){},
ajS:function ajS(){},
ajU:function ajU(){},
ani:function ani(){},
ap2:function ap2(){},
ap3:function ap3(){},
aqD:function aqD(){},
arf:function arf(){},
are:function are(){},
arg:function arg(){},
avl:function avl(){},
JY:function JY(){},
JZ:function JZ(d,e,f){this.c=d
this.d=e
this.a=f},
avn:function avn(d){this.a=d},
avm:function avm(d){this.a=d},
QE:function QE(d,e,f){this.c=d
this.e=e
this.a=f},
WX:function WX(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bSG(d,e,f){var w=B.ab(f),v=w.i("a9<1,jE>")
v=B.P(new B.a9(f,new A.aWT(),v),v.i("av.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aWU(),w),w.i("av.E"))
return new A.ab1(e,d,v,w,null)},
bLs(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5m(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tc(v,C.aw,C.v,new B.ke(1),v,v,v,v,C.bu,v)
u=new A.a_s(f,d,e,u,t,!0,0,v,v,new B.bo(),B.aH(x.v))
u.bj()
return u},
ab1:function ab1(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWT:function aWT(){},
aWU:function aWU(){},
a_s:function a_s(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VF$=h
_.aRF$=i
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
bbN:function bbN(d,e){this.a=d
this.b=e},
avo:function avo(){},
jE:function jE(d,e){this.a=d
this.b=e},
ny:function ny(d,e){this.a=d
this.b=e},
afI:function afI(){},
afJ:function afJ(){},
afK:function afK(){},
Sy:function Sy(){},
A8:function A8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWV:function aWV(d){this.a=d},
aWW:function aWW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWX:function aWX(d,e,f,g,h,i){var _=this
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
avT:function avT(){},
aC9:function aC9(d,e){this.a=d
this.b=e},
ag1:function ag1(){},
aj_:function aj_(){},
aj0:function aj0(){},
aj7:function aj7(){},
K7:function K7(){},
vq:function vq(d,e,f,g){var _=this
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
aSn:function aSn(d){this.a=d},
aSo:function aSo(d){this.a=d},
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
bbS:function bbS(d,e){this.a=d
this.b=e},
bbQ:function bbQ(d){this.a=d},
bbR:function bbR(d,e){this.a=d
this.b=e},
bbP:function bbP(){},
bbT:function bbT(d){this.a=d},
bsT(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.ps(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aI2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SQ:u
else w=g
v=f==null?A.avu(!1,u,0,u,!1,D.vG):f
w=new A.e6(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avu(!1,u,0,u,!1,D.vG):d,j,a0,i,s,!1,p)
w.aq6(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bPu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aa(d.x,e.x,f)
m.toString
w=A.byl(d.ay,e.ay,f)
v=A.byl(d.ch,e.ch,f)
u=B.aa(d.as,e.as,f)
u.toString
t=e.CW
s=A.kj(d.cy,e.cy,f,A.Ze(),x.S)
r=B.X(d.r,e.r,f)
q=B.r3(d.w,e.w,f)
p=A.kj(d.a,e.a,f,A.bZb(),x.cw)
p.toString
o=B.bC7(d.db,e.db,f)
o.toString
n=B.aa(d.dy.a,e.dy.a,f)
n.toString
return A.aI2(v,m,w,r,e.z,s,new A.y6(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NA(n),!1,u,o,!0,e.cx,p)},
avu(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
else w=e
return new A.a_A(h,w,g,i,f,!1)},
byl(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r3(v.b,u.b,f),r=B.aa(v.c,u.c,f)
r.toString
r=A.bzH(t,A.kj(v.d,u.d,f,A.Ze(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r3(d.c,e.c,f)
v=B.aa(d.e,e.e,f)
v.toString
return A.avu(!1,s,v,u,e.a,new A.K2(!1,r,w.c,!0))},
bLz(d,e,f){var w=B.X(d.c,e.c,f),v=B.r3(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.dh.A()>>>16&255,D.dh.A()>>>8&255,D.dh.A()&255):null
return new A.mo(e.a,e.b,w,v)},
c1r(d){return!0},
buW(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kN)return A.bvF(w.a,A.bsx(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dh:w},
bWQ(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kN)w=A.bvF(v.a,A.bsx(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dh}return A.axD(w,40)},
bEB(d,e,f,g,h){var w,v=A.buW(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kN)w=A.bvF(u.a,A.bsx(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dh}u=A.axD(w,40)
return new A.M9(v,h==null?4:h,u)},
c1p(d,e){return!0},
bYZ(d,e){return Math.abs(d.a-e.a)},
c_9(d,e){var w=J.d3(e,new A.boi(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c_5(d,e){return-1/0},
c_4(d,e){return d.a[e].b},
bFN(d){var w=J.d3(d,new A.bof(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bFM(d){return A.axD(D.dh,15)},
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
aI3:function aI3(){},
NA:function NA(d){this.a=d},
a_A:function a_A(d,e,f,g,h,i){var _=this
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
aHP:function aHP(d,e){this.a=d
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
boi:function boi(d){this.a=d},
boh:function boh(d){this.a=d},
a5K:function a5K(){},
bof:function bof(){},
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
afP:function afP(){},
afQ:function afQ(){},
ag2:function ag2(){},
aj1:function aj1(){},
aj4:function aj4(){},
akF:function akF(){},
akG:function akG(){},
akH:function akH(){},
akJ:function akJ(){},
akK:function akK(){},
akL:function akL(){},
akM:function akM(){},
ap1:function ap1(){},
aqC:function aqC(){},
aI4:function aI4(d){this.a=d},
aI5:function aI5(){},
aI6:function aI6(){},
yQ:function yQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akI:function akI(){},
aI7:function aI7(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIa:function aIa(){},
aI8:function aI8(d,e,f){this.a=d
this.b=e
this.c=f},
aI9:function aI9(d,e,f){this.a=d
this.b=e
this.c=f},
aIb:function aIb(){},
v8:function v8(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5J:function a5J(d,e,f){this.d=d
this.e=e
this.a=f},
a9P:function a9P(d,e,f,g,h,i,j,k){var _=this
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
brA(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bz(o.length,0,!1,x.i),m=B.ab(o),l=new B.a9(o,new A.avx(),m.i("a9<1,M>")).kk(0,new A.avy()),k=e-l,j=new A.avB(k,d,n)
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
new B.iK(o,m.i("iK<1>")).aq(0,new A.avz(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iK(o,m.i("iK<1>")).aq(0,new A.avA(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avx:function avx(){},
avy:function avy(){},
avB:function avB(d,e,f){this.a=d
this.b=e
this.c=f},
avC:function avC(d,e,f){this.a=d
this.b=e
this.c=f},
avz:function avz(d,e,f){this.a=d
this.b=e
this.c=f},
avA:function avA(d,e,f){this.a=d
this.b=e
this.c=f},
bsx(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iK(w,B.ab(w).i("iK<1>")).aq(0,new A.aFb(v,d))
else throw B.e(B.bF('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFb:function aFb(d,e){this.a=d
this.b=e},
ayN(d,e){var w,v
if(e!=null){w=B.ab(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.ayO(),w),w.i("av.E"))
return A.bZY(d,new A.a0e(v,x.cX))}else return d},
ayO:function ayO(){},
bTf(d,e){var w=!0
if(d!==C.eX)if(!(d===C.aw&&e===C.v))w=d===C.ie&&e===C.aW
if(w)return D.Dt
else{w=!0
if(d!==C.hm)if(!(d===C.ie&&e===C.v))w=d===C.aw&&e===C.aW
if(w)return D.Du
else return D.a8n}},
MG:function MG(d,e){this.a=d
this.b=e},
a04:function a04(d,e){this.a=d
this.b=e},
yT:function yT(d,e){this.a=d
this.$ti=e},
akT:function akT(){},
bZY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.ah().r)
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
if(o){q=new B.Jt(d.aRB(r,p,p+n,!0),C.p,null)
t.push(q)
m=l.d
if(m!=null)q.hD(m)}p+=n
o=!o}}return l},
a0e:function a0e(d,e){this.a=d
this.b=0
this.$ti=e},
b_p:function b_p(){},
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
aSx:function aSx(d){this.a=d},
a3O:function a3O(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bsl(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fG))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bLC(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geg(v)===0){v=d.a.a
if(v.geg(v)===0){v=d.b.a
if(v.geg(v)===0){v=d.c.a
v=v.geg(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axD(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNq()*w),C.d.b0(d.gFM()*w),C.d.b0(d.gJV()*w))},
bzF(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bsm(d){var w=d.a,v=w?A.aWS(d.b):0,u=w?A.aWS(d.c):0,t=w?A.aWS(d.d):0
return new B.aj(v,u,t,w?A.aWS(d.e):0)},
bQJ(d){var w
if(d.c===0){d.seS(null)
w=B.bY(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bte(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seS(f.mJ(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seS(null)}},
aWS(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kj(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kL(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kL(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c0h(d,e,f){return C.d.b0(d+(e-d)*f)},
bvF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a5v.prototype={
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
Lh(d){return this.aRE(d)},
aRE(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lh=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eB("finance_summary",B.a5(["p_from",E.qX(d.a),"p_to",E.qX(d.b)],s,r),r),$async$Lh)
case 3:q=f
if(q==null){u=D.an7
w=1
break}if(x.f.b(q)){u=B.eg(q,s,r)
w=1
break}u=D.any
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lh,v)},
Lg(d){return this.aRD(d)},
aRD(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lg=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eB("finance_kpis",B.a5(["p_from",E.qX(d.a),"p_to",E.qX(d.b)],s,r),r),$async$Lg)
case 3:q=f
if(x.f.b(q)){u=B.eg(q,s,r)
w=1
break}u=D.amR
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lg,v)},
px(d){return this.apP(d)},
apP(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
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
Lc(d){return this.aRt(d)},
aRt(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lc=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.i0("finance-export-pdf",B.a5(["from",E.qX(d.a),"to",E.qX(d.b)],s,s)),$async$Lc)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aB(J.a3(r,"base64"))
w=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Lc,v)}}
A.Dr.prototype={
FG(d){return this.aj1(d)},
aj1(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FG=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lh(d),$async$FG)
case 7:q=f
o=A.aCY(q)
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
FC(d){return this.aiN(d)},
aiN(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FC=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lg(d),$async$FC)
case 7:q=f
o=A.bOb(q)
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
p=r.Hh(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$px,v)},
Lb(d){return this.aRs(d)},
aRs(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
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
if(d instanceof B.lP){if(d.b==="42501")return new B.vu(d.a)
return new B.rW(d.a)}if(d instanceof B.Mu)return new B.rW("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Ay("Unerwarteter Fehler: "+B.i(d))},
$iaCM:1}
A.q0.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ve.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w6.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayc.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azj.prototype={
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
GD(d){return this.apO(0)},
apO(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GD=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dn)
s=t.r
r=s.aL(0,$.x0(),x.P)
p.a=null
w=3
return B.k(B.oT(new A.aCI(p,t,r),x.H),$async$GD)
case 3:t.se3(0,f)
q=t.f
if(q.ghm(q)==null){q=$.br7()
s=s.e
s===$&&B.a()
s.cr(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GD,v)},
La(){return this.aRr()},
aRr(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$La=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dn)
s=t.r.aL(0,$.x0(),x.P)
q.a=null
w=3
return B.k(B.oT(new A.aCH(q,t,s),x.H),$async$La)
case 3:t.se3(0,e)
r=t.f
u=r.ghm(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$La,v)}}
A.y5.prototype={
ds(d,e){var w=null,v=e.aA($.x0(),x.P),u=e.aA($.br7(),x.aN)
return B.jZ(B.e7(B.b([new B.fX("Finanzen","Dashboard",new A.af1(e.aA($.br6(),x.b).gj9(),new A.aCQ(this,d,e),new A.aCR(this,d,e),new A.aCS(d),new A.aCT(this,d,e,v),w),w),C.ay,new A.amd(v,w),C.c5,D.adG,C.c5,B.dr(u,new A.aCU(),new A.aCV(),new A.aCW(),!1,!0,!1,x.d,x.l)],x.p),C.cS,w,!1),C.n,new A.aCX(e))},
J5(d,e){return this.aJZ(d,e)},
aJZ(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J5=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.br6()
w=3
return B.k(e.aL(0,s.ghK(),x.F).GD(0),$async$J5)
case 3:r=g
if(d.e==null){w=1
break}s=e.aL(0,s,x.b)
s=s.ghm(s)
t=d.P(x.q).f
t.bE(B.ck(null,null,null,null,null,C.t,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J5,v)},
B1(d,e){return this.avL(d,e)},
avL(d,e){var w=0,v=B.r(x.H),u,t
var $async$B1=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aL(0,$.br6().ghK(),x.F).La(),$async$B1)
case 3:t=g
if(d.e==null){w=1
break}if(t==null){d.P(x.q).f.bE(D.auP)
w=1
break}w=4
return B.k(E.bBv(t,"finanzauswertung.pdf"),$async$B1)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B1,v)},
B2(d,e,f){return this.aHJ(d,e,f)},
aHJ(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B2=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jC(null,null,!0,null,new A.aCP(f,d),d,null,!0,!0,x.cJ),$async$B2)
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
case 8:if(d.e!=null)d.P(x.q).f.bE(F.uK)
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
A.af1.prototype={
u(d){var w=this,v=null,u=A.bao(C.n,F.j1,C.n,w.r,"Freigabe f\xfcr Auswertung anfordern"),t=A.bao(v,D.a9X,v,w.f,"Gesellschafter-Freigaben"),s=w.c,r=A.bao(v,D.a96,v,s?v:w.d,"sevDesk synchronisieren")
return B.au(B.b([u,C.bs,t,C.bs,r,C.bs,A.bao(C.ak,C.kX,C.ak,s?v:w.e,"PDF-Export")],x.p),C.m,C.f,C.N,0,v,v)}}
A.ak2.prototype={
u(d){var w,v=this,u=null,t=B.b0(12),s=B.b0(12),r=B.b0(12),q=v.w
if(q==null)q=C.al
q=B.ds(q,1)
w=v.r
if(w==null)w=C.h
return B.acs(B.dZ(!1,C.Y,!0,t,B.fe(!1,s,!0,B.bj(u,B.cX(v.c,w,u,20),C.r,u,u,new B.bb(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.as,0,u,u,u,u,u,C.bF),u,v.d,u,u)}}
A.amd.prototype={
ds(d,e){var w=null,v=this.e,u=$.ep(),t=x.p
return B.bN(w,B.ag(B.b([D.a7x,C.a_,B.au(B.b([D.aaF,C.ba,B.aP(B.l(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.D(C.h,16,C.O),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.x,B.q3(C.dl,B.b([new A.Ia("Monat",new A.be5(e),w,w),new A.Ia("Jahr (YTD)",new A.be6(e),w,w),new A.Ia("Zeitraum w\xe4hlen \u2026",new A.be7(this,d,e),D.a9b,w)],t),C.f0,6,8)],t),C.D,C.f,C.i),w,w,C.G,w,3)},
Iu(d,e){return this.aGH(d,e)},
aGH(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iu=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.bqo(new A.be4(),d,B.bJ(B.aY(t)-5,1,1,0,0,0,0),new B.mw(s.a,s.b,x.bz),B.bJ(B.aY(t)+1,1,1,0,0,0,0),C.eO),$async$Iu)
case 2:r=g
if(r!=null)e.aL(0,$.x0().ghK(),x.V).wm(0,new E.mC(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iu,v)}}
A.Ia.prototype={
u(d){var w=null,v=B.b0(9999),u=B.b0(9999),t=B.b0(9999),s=B.ds(C.al,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cX(p,C.h,w,14),C.bs],r))
q.push(B.l(this.c,w,w,w,B.D(C.h,13,C.O),w,w,w))
return B.dZ(!1,C.Y,!0,v,B.fe(!1,u,!0,B.bj(w,B.au(q,C.m,C.f,C.N,0,w,w),C.r,w,w,new B.bb(w,w,s,t,w,w,C.H),w,w,w,w,C.kI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.as,0,w,w,w,w,w,C.bF)}}
A.IF.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jR(new A.bjA(this)),C.c5,D.a7C,C.x],r),p=this.c.w
if(p.length===0)q.push(B.bN(s,B.au(B.b([D.ab3,C.aF,B.aP(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.u,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.as,s,C.G,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.af_(t.a,t.b,t.c==="revenue",t.d,s),C.a_],r))}q.push(B.ag(w,C.m,C.f,C.i))}return B.ag(q,C.ab,C.f,C.i)}}
A.af_.prototype={
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
A.a5w.prototype={
ds(d,e){return B.dr(e.aA($.bKj(),x.e),new A.aHM(),new A.aHN(),new A.aHO(),!1,!0,!1,x.X,x.l)}}
A.HC.prototype={
u(d){var w=this,v=null,u=w.c,t=u.x,s=t>0,r=s?u.a.c/t:0,q=s?u.r.a/t:0
t=x.p
s=B.b([D.asg,C.x,B.jR(new A.bbE(w,r,100-u.w.a,q)),C.x,new A.ajn(v),C.ay,D.asf,C.x,new A.afO(u,v),C.ay,D.asa,C.x,B.bC(v,!0,v,B.mG(v,B.bN(v,new A.SW(u,220,v),v,v,C.G,v,3),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbF(w,d),v,v,v,v,v,v),!1,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.K,v),C.ay,D.as5,C.x,B.bC(v,!0,v,B.mG(v,new A.T6(u,200,!1,v),C.ac,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.bbG(w,d),v,v,v,v,v,v),!1,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.K,v),C.ay,D.as9,C.x,new A.al1(u,v),C.ay,D.as7,C.x,new A.aht(u,v)],t)
if(u.f.length!==0)C.b.M(s,B.b([C.ay,D.asc,C.x,new A.aqz(u,v)],t))
return B.ag(s,C.ab,C.f,C.i)}}
A.ajn.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.u,11,C.k).eV(1.35),w,w,w)}}
A.aky.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ak:C.aQ
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bbH(m,d):l
r=x.p
q=B.b([B.aP(B.l(m.c.toUpperCase(),l,l,l,B.D(C.u,10,C.q).hF(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.ds(C.ak,0.8)
n=B.b0(4)
q.push(B.bj(l,B.l("Ziel "+p,l,l,l,B.D(C.ak,9,C.q),l,l,l),C.r,l,l,new B.bb(l,l,o,n,l,l,C.H),l,l,l,l,C.n1,l,l,l))}q=B.b([B.au(q,C.m,C.f,C.i,0,l,l),C.aZ,new A.a3O(C.B0,C.e0,B.l(m.d,l,l,l,B.c7(w,22,C.q),l,l,l),l)],r)
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
return B.bj(r,B.l(this.c+" \u2014",r,r,r,B.D(C.u,9,C.q),r,r,r),C.r,r,r,new B.bb(C.al,r,r,q,r,r,C.H),r,r,r,r,C.n1,r,r,r)}w=q>=0
v=w?C.aQ:C.ak
u=v.lE(0.12)
t=B.ds(v,0.7)
s=B.b0(4)
return B.bj(r,B.au(B.b([B.cX(w?F.a8t:D.a8s,v,r,10),F.auu,B.l(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.D(v,9,C.q),r,r,r)],x.p),C.m,C.f,C.N,0,r,r),C.r,r,r,new B.bb(u,r,t,s,r,r,C.H),r,r,r,r,C.n1,r,r,r)}}
A.X7.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.kk(j,new A.biX())
t=C.b.kk(j,new A.biY())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.biZ(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a3T(k,!1)
w=B.b([A.aI2(k,2,A.avu(!1,C.n.lE(0.16),0,k,!0,D.vG),C.n,0.35,k,D.Dk,k,!0,!1,!0,!1,D.EE,!1,10,D.Y4,!0,C.lc,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Nz(A.bsT(k,k,k,D.ajx,l,D.Be,D.Df,D.Dl,w,D.adK,k,m,k,n,D.Xq,D.ajy,D.a7R),C.ar,C.ad,k,k)}}
A.SW.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aH7
w=C.b.fF(p,0,new A.b2W())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avD(B.b([A.a_C(q,q,D.AH,q,C.n,q,q,q,r.b,6),A.a_C(q,q,D.AH,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.cg(A.bym(A.avw(q,q,u,q,q,A.a3T(q,!1),q,new A.y7(!0,!0,q,new A.b2X(),A.Z9(),!1,q,A.at7(),A.Z9()),q,v,q,q,new A.uC(!0,new A.oU(16,q,new A.pP(!0,new A.b2Y(this),46,q),!0),D.ka,D.ka,new A.oU(16,q,new A.pP(!0,new A.b2Z(p),26,q),!0)))),this.d,q)},
aJh(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.T6.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b3J(),w),x.i)
C.b.M(o,new B.a9(u,new A.b3K(),w))
t=C.b.fF(o,0,new A.b3L())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avD(B.b([A.a_C(q,q,q,q,C.n,q,q,q,v[s],14),A.a_C(q,q,q,q,C.aQ,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cg(A.bym(A.avw(q,q,n,q,q,A.a3T(q,!1),q,D.Dl,q,o,q,q,new A.uC(!0,D.ka,D.ka,D.ka,new A.oU(16,q,new A.pP(!0,new A.b3M(p),26,q),!0)))),this.d,q)
return this.e?r:B.bN(q,r,q,q,C.G,q,3)}}
A.al1.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aH6
w=new B.a9(l,new A.bca(),B.ab(l).i("a9<1,M>")).kk(0,new A.bcb())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.l(r.b,m,m,m,B.D(C.h,14,C.q),m,m,m)
p=$.e1()
o=r.d
n=new B.aU(4,4)
o=B.b([B.au(B.b([new B.pd(1,C.fH,B.ag(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ar(r.f),m,m,m,B.D(C.u,12,C.aL),m,m,m)],v),C.D,C.f,C.i),m),C.ba,B.l(p.ar(o),m,m,m,B.c7(C.h,16,C.q),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cN,new B.CM(new B.d2(n,n,n,n),C.bJ,B.a5L(C.al,8,C.d.c4(o/w,0,1),D.Av),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zc(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.x)
C.b.M(u,o)}return B.bN(m,B.ag(u,C.m,C.f,C.i),m,m,C.G,m,3)}}
A.aht.prototype={
u(d){var w=null,v=this.c.r
return B.bN(w,B.au(B.b([B.aP(new A.Iu("Aktive Kunden",""+v.c,w),1),B.aP(new A.Iu("K\xe4ufe",""+v.a,w),1),B.aP(new A.Iu("\xd8-Warenkorb",$.e1().ar(v.d),w),1)],x.p),C.m,C.f,C.i,0,w,w),w,w,C.G,w,3)}}
A.Iu.prototype={
u(d){var w=null
return B.ag(B.b([B.l(this.c.toUpperCase(),w,w,w,B.D(C.u,10,C.q).hF(0.6),w,w,w),C.cM,B.l(this.d,w,w,w,B.c7(C.h,20,C.q),w,w,w)],x.p),C.D,C.f,C.N)}}
A.aqz.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.bkR(),B.ab(q).i("a9<1,M>")).kk(0,new A.bkS()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aU(4,4)
t=B.b([B.au(B.b([new B.pd(1,C.fH,B.l(u.b,1,C.ag,r,B.D(C.h,13,C.q),r,r,r),r),B.l(""+u.c+"\xd7 ",r,r,r,B.D(C.u,12,C.O),r,r,r),B.l($.e1().ar(t),r,r,r,B.D(C.h,13,C.q),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aZ,new B.CM(new B.d2(s,s,s,s),C.bJ,B.a5L(C.al,6,C.d.c4(t/p,0,1),D.Av),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zc(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.a_)
C.b.M(n,t)}return B.bN(r,B.ag(n,C.m,C.f,C.i),r,r,C.G,r,3)}}
A.wo.prototype={
u(d){var w=null
return B.bN(w,B.l(this.c,w,w,w,B.D(C.u,13,C.k),w,w,w),C.as,w,C.G,w,3)}}
A.afO.prototype={
ds(d,e){return B.dr(e.aA($.bxk(),x.fM),new A.b1o(this,d,e),new A.b1p(),new A.b1q(),!1,!0,!1,x.h,x.l)}}
A.AG.prototype={
Y(){return new A.SA()},
aWz(){return this.d.$0()}}
A.SA.prototype={
az(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.ha(J.ak(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bO)
for(t=0;t<8;++t){s=D.GU[t].a
if(v)r=""
else{r=B.bD(J.a3(w,s))
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
w=t}for(;;)switch(w){case 0:q.L(new A.b1f(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZ_("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eJ(),0,10),"p_cash_and_bank",q.re("cash_and_bank"),"p_receivables",q.re("receivables"),"p_inventory_value",q.re("inventory_value"),"p_other_current_assets",q.re("other_current_assets"),"p_fixed_assets",q.re("fixed_assets"),"p_current_liabilities",q.re("current_liabilities"),"p_long_term_liabilities",q.re("long_term_liabilities"),"p_equity",q.re("equity")],x.N,x.aU))
w=7
return B.k(n,$async$HU)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWz()
o=q.c
o.toString
B.bl(o,!1).f1()
q.c.P(x.q).f.bE(D.auQ)
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
if(q.c!=null)q.L(new A.b1g(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HU,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c7(C.h,18,C.q),r,r,r),p=s.f?r:new A.b1i(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.jU(D.aaH,B.l("Stichtag: "+C.c.a0(o.eJ(),0,10),r,r,r,r,r,r,r),p,r),C.x],w)
for(v=0;v<8;++v){o=D.GU[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.h_(r,C.b8,!1,r,!0,C.t,r,B.hu(),u.h(0,o.a),r,r,r,r,r,2,new B.ci(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ac,!0,r,!0,r,!1,r,C.bf,r,r,r,r,C.ig,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.G,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aw,r,C.a3,r,r,r,r),C.a_],w))}p.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.u,11,C.k),r,r,r))
p=B.cg(B.f7(B.ag(p,C.ab,C.f,C.N),r,C.a6),r,380)
o=s.f
u=B.dI(C.d1,r,r,o?r:new A.b1j(d),r,r)
o=o?r:s.gaDa()
t=B.ee(C.n,C.h,r,r,r,r,r)
return B.mj(B.b([u,B.dW(s.f?D.auy:C.f_,o,t)],w),C.l,p,q)}}
A.b8.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zc(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ez(B.H(this))^B.bGh(this.gbI()))>>>0},
j(d){B.bzB()
return B.H(this).j(0)}}
A.K3.prototype={
Y(){return new A.SB(B.y(x.S,x.I),new A.avG(B.y(x.x,x.T)),null,null)}}
A.SB.prototype={
u(d){var w,v=this,u=v.a1o(),t=v.CW
t.toString
t=v.a1p(t.au(0,v.ghA().gp(0)))
w=v.a1p(u)
v.a.toString
return new A.JZ(new A.a_B(t,w,null),u,null)},
a1p(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avD(s.c,s.d,!1,r,s.a))}return d.aOu(w)},
a1o(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uf(t.ch)
if(r)s=w.a
r=t.y
t=t.aPp(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOv(A.brB(!1,!0,!0,v.d,v.c,u.garl(),v.f,v.e))}return t},
arm(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaeT()||e==null||e.a==null){w=v.cy
v.L(w.gaNU(w))
return}v.L(new A.b1t(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1o(),new A.b1u(w)))}}
A.nz.prototype={
UP(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avw(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPp(d,e){return this.UP(null,null,d,e)},
aOv(d){return this.UP(null,d,null,null)},
aOu(d){return this.UP(d,null,null,null)},
WL(d,e,f){var w,v,u,t=A.kj(d.ch,e.ch,f,A.bZg(),x.dB),s=B.aa(d.CW,e.CW,f),r=A.bzI(d.d,e.d,f),q=A.bBE(d.e,e.e,f),p=A.bzG(d.c,e.c,f),o=e.a
o=A.a3T(B.a_S(d.a.b,o.b,f),o.a)
w=B.aa(d.y,e.y,f)
v=B.aa(d.x,e.x,f)
u=B.aa(d.z,e.z,f)
r=A.avw(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bzD(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avv.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fw.prototype={
gdm(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avE(),B.ab(v).i("a9<1,M>")).kk(0,new A.avF())
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
A.a_y.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_D.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.act.prototype={
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
return v.WL(v,w,d)}}
A.afM.prototype={}
A.afR.prototype={}
A.afS.prototype={}
A.afU.prototype={}
A.afV.prototype={}
A.afW.prototype={}
A.afX.prototype={}
A.afY.prototype={}
A.afZ.prototype={}
A.avG.prototype={
Uf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uc(0,0,!1)
v=new A.yT(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uc(t,u,!0)}w=null
try{w=C.b.qc(d,new A.avH())}catch(s){return new A.uc(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.afT.prototype={}
A.avI.prototype={
i4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_u(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abt(t,A.brA(w,t.a),u)
l.y=u
l.aQL(e,u,f)
l.akX(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aQU(d,e,m,t,r,s,n,o,f)}}},
abt(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iK(p,B.ab(p).i("iK<1>")).aq(0,new A.avJ(t,q,r,s))
w.push(new A.a4y(q))}return w},
aQL(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
b3.aQS(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
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
v.fT(A.ayN(b2,o.r),b3.r)}}}},
aQU(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.An(a5,a5,a5,a5,B.d6(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lm().Zu(a8,a7.b),a7.a),C.d_,C.v,a5,b6.c,C.bu)
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
if(v!==D.aCV)j=v===D.Ze&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.Zv(t,n,b1.d,b1.e)
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
r=$.lm().K4(new B.F(v,t),d).b
s=$.lm()
q=w.b
p=q.c
q=q.a.c
a0=s.K4(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahu()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vr(d,new A.avK(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.F(v,t))},
aQS(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.P9(w,s,u,r,t,p,o,v?new B.aU(i.r,i.w):C.Z)}else q=B.btz(w,n.dC(v,j,k),u,n.dC(t,j,k),C.Z)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eN(q,n.r)},
W6(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abt(b2,A.brA(a8,b2.a),a8.ch)
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
A.a4y.prototype={}
A.a_B.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.avI()
t.a0G()
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
t=new A.a9C(this.d,v,u,t,d,C.bn,new B.bo(),B.aH(x.v))
t.bj()
t.Yq(v.cy)
t.aek()
return t},
bx(d,e){e.sij(0,this.d)
e.sYb(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bd()}}
A.a9C.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYb(d){var w=this
if(w.hY.k(0,d))return
w.hY=d
w.a0e(d.cy)
w.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a04(t,v),new A.vq(u.aC,u.hY,u.cV,x.Q))
s.restore()},
Zo(d){var w=this,v=w.gC(0)
return new A.K4(w.fU.W6(d,v,new A.vq(w.aC,w.hY,w.cV,x.Q)))}}
A.a_r.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cj.prototype={
K(){return"AxisSide."+this.b}}
A.te.prototype={}
A.pP.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ab0.prototype={
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
A.acv.prototype={
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
A.a4J.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.acT.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.LZ.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uB.prototype={}
A.M9.prototype={
acS(d,e,f){var w,v
$.ah()
w=B.aS()
v=this.a
w.r=v.gp(v)
w.b=C.be
d.iO(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afH.prototype={}
A.afL.prototype={}
A.aiN.prototype={}
A.aj2.prototype={}
A.aj3.prototype={}
A.aj5.prototype={}
A.aj6.prototype={}
A.ajT.prototype={}
A.ajS.prototype={}
A.ajU.prototype={}
A.ani.prototype={}
A.ap2.prototype={}
A.ap3.prototype={}
A.aqD.prototype={}
A.arf.prototype={}
A.are.prototype={}
A.arg.prototype={}
A.avl.prototype={
Md(d,e,f,g,h,i){return new B.iv(this.aUC(d,e,f,g,h,i),x.g4)},
aUB(d,e,f,g){return this.Md(d,e,f,!0,g,!0)},
aUC(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Md(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lm().aiz(s,u,v,w)
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
a0G(){var w,v=this
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
w.a_v(d,e,f)
w.aQH(e,f)
w.aQR(e,f)
w.aQQ(e,f)},
aQQ(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lm().Oh(w.a,a1.r-a1.f)
u=$.bqJ().Md(a1.w,v,a1.r,!1,a1.f,!1)
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
if(h==null)h=$.lm().Oh(w.b,a1.y-a1.x)
u=$.bqJ().Md(a1.z,h,a1.y,!1,a1.x,!1)
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
aQH(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.h9(new B.G(0,0,0+w.a,0+w.b),this.b)},
aQR(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
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
aQP(d,e,f){var w,v
this.a_v(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.acT(d,e,f,w)
if(v.b.length!==0)this.aQW(d,e,f,w)},
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
n=n.gNa().b
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
aQW(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
n=n.gNa().b
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
Zv(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.JZ.prototype={
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
akD(d){var w,v=this,u=null,t=v.d,s=A.bsm(t.d),r=t.a
r=r.a&&A.bLC(r.b)?r.b:u
w=B.b([B.bj(u,v.c,C.r,u,u,new B.bb(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.avn(w)
if(v.gaki())C.b.hs(w,s.$1(!0),new A.A8(D.AC,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakk())C.b.hs(w,s.$1(!0),new A.A8(D.mk,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakj())C.b.hs(w,s.$1(!0),new A.A8(D.AD,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakg())C.b.hs(w,s.$1(!0),new A.A8(D.dB,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jR(new A.avm(this))}}
A.QE.prototype={
Y(){return new A.WX(new B.bd(null,x.eF))}}
A.WX.prototype={
awK(){switch(this.a.c.a){case 0:return C.e_
case 1:return C.fw
case 2:return C.e0
case 3:return C.fx}},
axf(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awM(d){this.a.toString
return},
az(){this.aO()
$.cw.x1$.push(this.ga3P())},
bb(d){this.bB(d)
$.cw.x1$.push(this.ga3P())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axf()
return B.bu7(B.aZZ(0,B.bj(v.awK(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ab1.prototype={
bl(d){return A.bLs(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_s.prototype={
hi(d){if(!(d.b instanceof B.hf))d.b=new B.hf(null,null,C.p)},
hR(d){if(this.B===C.aG)return this.xS(d)
return this.acu(d)},
aJr(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8o(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dz(d){var w=this.a8n(d,B.hs())
switch(this.B.a){case 0:return d.c1(new B.F(w.a,w.b))
case 1:return d.c1(new B.F(w.b,w.a))}},
a8n(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aG?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fS(u,null)
break
case 1:q=B.fS(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8o(p)
t=Math.max(t,o.aJr(p))
m=r.aG$}return new A.bbN(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8n(o,B.mf()),m=n.a,l=n.b
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
A.bbN.prototype={}
A.avo.prototype={}
A.jE.prototype={
gbI(){return[this.a,this.b]}}
A.ny.prototype={}
A.afI.prototype={}
A.afJ.prototype={
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
A.afK.prototype={}
A.Sy.prototype={
l(){var w,v,u
for(w=this.VF$,v=w.length,u=0;u<v;++u)w[u].l()
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
gaZc(){var w=this.d,v=A.bsm(w.d),u=A.bzF(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahh(){var w=this.d,v=A.bzF(w.a),u=A.bsm(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.gen()+v.gen()}},
aVl(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gov().c.d
if(o==null)o=$.lm().Oh(d,f-e)
w=p.c
v=w!==D.mk
if((!v||w===D.dB)&&p.d instanceof A.nz){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.brA(u,d)
w=new B.iK(t,B.ab(t).i("iK<1>"))
s=w.giC(w).f0(0,new A.aWV(u),x.W).fW(0)}else{r=$.bqJ()
w=!v||w===D.dB
v=p.d
q=r.aUB(w?v.w:v.z,o,f,e)
v=B.o3(q,new A.aWW(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.j(v).i("t.E"))}w=B.ab(s).i("a9<1,ny>")
w=B.P(new B.a9(s,new A.aWX(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gov()
w=j.gov()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bj(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mk
u=!v
t=!u||w===D.dB
s=j.e
r=t?s.a:s.b
t=j.ghC()
s=!u||w===D.dB?C.a6:C.aG
q=B.b([],x.p)
if(w===D.AC||v)j.gov()
if(j.gov().c.a){v=!u||w===D.dB?r:j.gov().c.c
p=!u||w===D.dB?j.gov().c.c:r
o=j.gaZc()
n=!u||w===D.dB?C.aG:C.a6
j.gahh()
m=j.gahh()
l=!u||w===D.dB
k=j.d
l=l?k.f:k.x
u=!u||w===D.dB?k.r:k.y
q.push(B.bj(i,A.bSG(new A.avo(),n,j.aVl(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AD||w===D.dB)j.gov()
return new B.eT(t,i,i,B.bOf(q,C.m,s,i,C.f,C.N,0,i,i,C.c6),i)}}
A.a_H.prototype={
gbI(){return[this.a,this.b]}}
A.a3S.prototype={
gbI(){return[this.a,this.b]}}
A.Mg.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a3U.prototype={
gaaO(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.avT.prototype={}
A.aC9.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ag1.prototype={}
A.aj_.prototype={}
A.aj0.prototype={}
A.aj7.prototype={}
A.K7.prototype={
i4(d,e,f){}}
A.vq.prototype={}
A.he.prototype={
gdH(){return null},
gaeT(){var w,v=this
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
Yq(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aek(){var w=this,v=null,u=w.ac=B.btf(v,v)
u.ay=new A.aSc(w)
u.ch=new A.aSd(w)
u.CW=new A.aSe(w)
u.cy=new A.aSf(w)
u.cx=new A.aSg(w)
u=w.aE=B.Gd(v,-1,v)
u.B=new A.aSh(w)
u.a3=new A.aSi(w)
u.V=new A.aSj(w)
u=w.bz=B.a5S(v,w.a2,v)
u.p3=new A.aSk(w)
u.p4=new A.aSl(w)
u.RG=new A.aSm(w)},
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
w.rB(d)}else if(x.gJ.b(d))v.l5(new A.a41(d))},
gMH(d){return new A.aSn(this)},
gMJ(d){return new A.aSo(this)},
l5(d){var w,v,u=this
if(u.V==null)return
w=d.gdH()
v=w!=null?u.Zo(w):null
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
$ijg:1}
A.Nz.prototype={
Y(){return new A.UO(B.b([],x.r),B.y(x.S,x.I),new A.aI4(B.y(x.y,x.dj)),null,null)}}
A.UO.prototype={
u(d){var w,v=this,u=v.a3R(),t=v.CW
t.toString
t=v.aan(t.au(0,v.ghA().gp(0)))
w=v.aan(u)
v.a.toString
return new A.JZ(new A.a5J(t,w,null),u,null)},
aan(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ab(w).i("a9<1,e6>")
w=B.P(new B.a9(w,new A.bbS(this,d),v),v.i("av.E"))
return d.aPm(w,this.cy)},
a3R(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uf(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPB(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aP0(new A.E5(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gay3(),t.c,t.d))}return r},
ay4(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaeT())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.L(new A.bbQ(v))
return}v.L(new A.bbR(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3R(),new A.bbT(w)))}}
A.ps.prototype={
WL(d,e,f){var w,v,u,t,s,r,q=B.aa(d.f,e.f,f),p=B.aa(d.r,e.r,f),o=B.aa(d.w,e.w,f),n=B.aa(d.x,e.x,f),m=B.aa(d.y,e.y,f),l=B.aa(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a3T(B.a_S(d.a.b,j.b,f),j.a)
w=A.bzD(d.at,e.at,f)
v=A.bzG(d.c,e.c,f)
u=A.bzI(d.d,e.d,f)
t=A.bBE(d.e,e.e,f)
s=A.kj(d.ch,e.ch,f,A.c0j(),x.cz)
s.toString
r=A.kj(d.CW,e.CW,f,A.c0i(),x.J)
r.toString
u=A.bsT(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UQ(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bsT(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPB(d,e,f,g){return this.UQ(null,null,d,e,f,g,null)},
aP0(d){var w=null
return this.UQ(w,d,w,w,w,w,w)},
aPm(d,e){var w=null
return this.UQ(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e6.prototype={
aq6(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qc(n.a,new A.aI3())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
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
return A.aI2(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aP7(d){return this.aca(d,null)},
aP9(d){return this.aca(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NA.prototype={
gbI(){return[this.a]}}
A.a_A.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mo.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.K2.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.y6.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aHP.prototype={
K(){return"LabelDirection."+this.b}}
A.a3V.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.E5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5K.prototype={
gbI(){return[4,C.hF,16,D.xg,0,120,A.c0l(),!1,!1,!1,0,C.A,A.c0k()]}}
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
return v.WL(v,w,d)}}
A.afP.prototype={}
A.afQ.prototype={}
A.ag2.prototype={}
A.aj1.prototype={}
A.aj4.prototype={}
A.akF.prototype={}
A.akG.prototype={}
A.akH.prototype={}
A.akJ.prototype={}
A.akK.prototype={}
A.akL.prototype={}
A.akM.prototype={}
A.ap1.prototype={}
A.aqC.prototype={}
A.aI4.prototype={
Uf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xJ
u=new A.yT(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yQ(s,r,q,t,!0)}w=null
try{w=C.b.qc(d,new A.aI5())}catch(p){return D.xJ}v=null
try{v=C.b.qc(w.a,new A.aI6())}catch(p){return D.xJ}o=v.a
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
A.akI.prototype={}
A.aI7.prototype={
i4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaO(0)){v=a3.b
u=v.a
v=v.b
$.ah()
a3.a.jm(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aS())
a3.aO0(new B.G(0,0,u,v))}d.a_u(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aQN(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aQJ(a3,q,a4)
d.aQO(a3,q,a4)
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
s.push(new A.v8(q,i,j,k))}}d.aQV(a3,s,a4)
if(w.gaaO(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aQT(a2,a3,v,f,new A.FQ(g),a4)}},
aQJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bsl(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.YY(o,e,u,f)
s=p.air(o,e,t,u,f)
r=p.Z_(o,e,t,u,f,!0)
q=p.aiq(o,e,t,u,f)
p.aQM(d,s,p.YX(o,e,t,u,f,!0),f,e)
p.aQG(d,q,r,f,e)
p.aQK(d,t,e)
p.aQI(d,t,e,f)}},
aQN(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bsl(a6.a),a9=A.bsl(a7.a)
if(a8.length!==a9.length)throw B.e(B.bF("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ab(m).i("cE<1>")
k=B.P(new B.cE(m,l),l.i("av.E"))
j=a3.YY(a4,a6,n,b3)
i=a3.YZ(a4,a7.aP9(k),k,b3,j)
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
aQO(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z3(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fG)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dC(q.b,w,f)
n.$4(q,p/v*100,e,r).acS(s,q,new B.m(p,o))}}},
aQV(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h0(b3,new A.aIa())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.Z3(m,w,b4)
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
f.acS(t,j,new B.m(h,g))}}},
YZ(d,e,f,g,h){var w=this.ais(d,e,f,g,h)
return w},
YY(d,e,f,g){return this.YZ(d,e,f,g,null)},
ais(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.ah().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dC(f.h(a3,0).b,a1,a4)
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
Z_(d,e,f,g,h,i){var w,v,u,t,s=this
$.ah()
w=B.bsR(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.ct(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,t))
w.aB(new B.ct(s.fc(v.h(g,0).a,d,h),s.dC(v.h(g,0).b,d,h)))
w.aB(new B.p2())
return w},
air(d,e,f,g,h){return this.Z_(d,e,f,g,h,!1)},
YX(d,e,f,g,h,i){var w,v,u,t=this
$.ah()
w=B.bsR(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.ct(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,0))
w.aB(new B.ct(t.fc(v.h(g,0).a,d,h),t.dC(v.h(g,0).b,d,h)))
w.aB(new B.p2())
return w},
aiq(d,e,f,g,h){return this.YX(d,e,f,g,h,!1)},
aQM(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bte(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fT(e,r.r)},
aQG(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bte(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fT(e,r.r)},
aQK(d,e,f){var w=f.db,v=w.a,u=v.A()
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
d.a.fT(B.bsS(A.ayN(e,f.cy),w.b),this.f)},
aQI(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
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
A.bte(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bQJ(t)
d.a.fT(A.ayN(e,f.cy),s.f)},
aQT(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bFN(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lm().Zu(b4,u.b)
s=u.a
r=w.k(0,C.iF)?new B.ke(1):w
q=new B.tc(new B.hH(s,a8,a8,C.bn,a8,a8,a8,a8,a8,a8,t),C.d_,C.v,r,a8,a8,a8,a8,C.bu,a8)
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
i=a7.Zv(b3,l,D.xg,0)
b3=i+l
w=j+k
h=new B.aU(4,4)
g=B.Fd(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bFM(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lm().K4(new B.F(t,w),0).b
d=new B.m(0,b1)
a0=new B.m(g.a,g.b)
a1=$.lm().K4(new B.F(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vr(0,new A.aI8(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bTf(q.r,q.w)
A:{if(D.Dt===a5){a6=a3
break A}if(D.Du===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vr(0,new A.aI9(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z3(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
W6(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aiT(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h0(t,new A.aIb())
return t.length===0?null:t},
aiT(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fG))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dC(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hs(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.pZ(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v8.prototype={}
A.a5J.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aI7()
t.a0G()
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
w.a=D.a_k
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
t=new A.a9P(this.d,v,u,t,d,C.bn,new B.bo(),B.aH(x.v))
t.bj()
t.Yq(v.cx)
t.aek()
return t},
bx(d,e){e.sij(0,this.d)
e.sYb(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bd()}}
A.a9P.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYb(d){var w=this
if(w.hY.k(0,d))return
w.hY=d
w.a0e(d.cx)
w.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdt(0),s=t.a
J.aX(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fU.i4(w,new A.a04(t,v),new A.vq(u.aC,u.hY,u.cV,x.o))
s.restore()},
Zo(d){var w=this,v=w.gC(0)
return new A.NB(w.fU.W6(d,v,new A.vq(w.aC,w.hY,w.cV,x.o)))}}
A.MG.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a04.prototype={
aO0(d){this.a.a.clipRect(B.dG(d),$.oM()[1],!0)
return null},
ad_(d,e){d.aN(this.a,e)},
Vr(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aX(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lm()
s.Y9(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dh(d,e,f,g){var w=B.cB($.ah().r)
w.aB(new B.f5(d.a,d.b))
w.aB(new B.ct(e.a,e.b))
this.a.fT(A.ayN(w,g),f)}}
A.yT.prototype={
gbI(){return[this.a]}}
A.akT.prototype={}
A.a0e.prototype={}
A.b_p.prototype={
K4(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.m((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aVV(d,e){var w,v,u,t,s
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
aVW(d,e){var w,v
if(d==null)return D.a_w
w=d.b
v=e/2
return d.aPc(w>v?v:w)},
Oh(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aYX(w)},
aYX(d){if(d<1)return this.aI3(d)
return this.a7t(d)},
aI3(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7t(d*q)/q},
a7t(d){var w,v=C.e.j(C.d.a4(d)).length-1
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
Zu(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iM
w=e.a?u.w.c2(e):e
v=B.bQ(d,C.vc)
v=v==null?null:v.ay
return v===!0?w.c2(C.m2):w},
aiz(d,e,f,g){var w=C.d.aj(g-d,f)
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
Ts(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c1(new Float64Array(16))
w.fZ()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bva(m.ae,u,m.gC(0))
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
a6p(d,e){var w,v,u,t,s=this,r=s.cP
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
s.Ts()
w=s.D
w.toString
if(w&&s.eX!==C.r){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uk?t:null
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFL(),s.eX,t))}else s.ch.sbh(0,s.a6p(d,e))},
e8(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Ts()
return d.JO(new A.aSx(v),e,v.cP)},
tq(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eU(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OK()
else{this.Ts()
w=this.cP
w.toString
e.fV(0,w)}}}
A.a3O.prototype={
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
var z=a.updateTypes(["M(q0)","C(ev)","~(w,fw)","M(e6,w)","M(M,q0)","bI(M,te)","pg(M)","w(pZ,pZ)","~(he,K4?)","Hi(A,bE)","IF(nS)","HC(nR)","ve(@)","e6(M)","w6(@)","al(M,te)","C3(@)","uA(dS<uA>)","M(ve)","M(w6)","wo(A,bE)","AG(z)","U<~>()","q0(@)","xi(@)","M(i9)","C(fw)","~(w,i9)","~(@)","jE(ny)","c(ny)","jE(bB<w,M>)","jE(M)","ny(jE)","~(he,NB?)","e6(e6)","Dr(dS<aCM>)","yP(@)","mC(G0<mC>)","tf(w)","uB(ev,M,e6,w)","ri(mM)","C(e6)","w(v8,v8)","M(fw)","U<nS>(cn<nS>)","q_?(rx,m)","w(w,w,M)","fw(fw,fw,M)","i9(i9,i9,M)","mn(mn,mn,M)","Ck?(fw,w,i9,w)","E(fw)","c(M,te)","ev(ev,ev,M)","C(M)","mH(mH,mH,M)","n5(n5,n5,M)","kF(kF,kF,M)","l4(l4,l4,M)","h(kF)","h(l4)","e6(e6,e6,M)","mo(mo,mo,M)","uB(ev,M,e6,w{size:M?})","C(ev,e6)","M(m,m)","u<tf>(e6,u<w>)","U<nR>(cn<nR>)","u<ri>(u<mM>)","E(mM)","y4(ff<A?>)"])
A.aCJ.prototype={
$1(d){var w=B.eg(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q0(J.ak(v==null?"":v),A.oI(w.h(0,"revenue_net")),A.oI(w.h(0,"expense_net")),A.oI(w.h(0,"result_net")))},
$S:z+23}
A.aCK.prototype={
$1(d){var w,v,u,t=B.eg(x.f.a(d),x.N,x.z),s=B.ap(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.ap(t.h(0,"code"))
v=A.oI(t.h(0,"gross"))
u=B.bD(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.ve(s,r,w,v,u,A.oI(t.h(0,"avg_basket")))},
$S:z+12}
A.aCL.prototype={
$1(d){var w,v=B.eg(x.f.a(d),x.N,x.z),u=B.ap(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.bD(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w6(u,t,w,A.oI(v.h(0,"gross")))},
$S:z+14}
A.aCZ.prototype={
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
A.bou.prototype={
$1(d){return new A.uA(d.aA($.cd(),x.A))},
$S:z+17}
A.bov.prototype={
$1(d){return new A.Dr(d.aA($.bKk(),x.D))},
$S:z+36}
A.bqj.prototype={
$1(d){return E.bsk()},
$S:z+38}
A.bow.prototype={
$1(d){var w=d.aA($.x0(),x.P)
return d.aA($.atL(),x.a).FG(w)},
$S:z+45}
A.bot.prototype={
$1(d){var w=d.aA($.x0(),x.P)
return d.aA($.atL(),x.a).FC(w)},
$S:z+68}
A.bos.prototype={
$1(d){return this.aik(d)},
aik(d){var w=0,v=B.r(x.h),u,t,s,r,q
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
A.aCI.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aL(0,$.atL(),x.a).px(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCH.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aL(0,$.atL(),x.a).Lb(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCX.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.br7()
if(s.e==null)B.V(B.Z(y.b))
s.gct().cr(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aCQ.prototype={
$0(){return this.a.J5(this.b,this.c)},
$S:0}
A.aCR.prototype={
$0(){return this.a.B1(this.b,this.c)},
$S:0}
A.aCS.prototype={
$0(){return B.nX(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aCT.prototype={
$0(){var w=this
return w.a.B2(w.b,w.c,w.d)},
$S:0}
A.aCW.prototype={
$0(){return D.apx},
$S:104}
A.aCV.prototype={
$2(d,e){return new A.Hi(B.i(d),null)},
$S:z+9}
A.aCU.prototype={
$1(d){return new A.IF(d,null)},
$S:z+10}
A.aCP.prototype={
$1(d){var w=null,v=this.a,u=$.ep()
v=B.l("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mj(B.b([B.dI(C.d1,w,w,new A.aCN(u),w,w),B.dW(F.uR,new A.aCO(u),B.ee(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.uS)},
$S:62}
A.aCN.prototype={
$0(){B.bl(this.a,!1).dr(!1)
return null},
$S:0}
A.aCO.prototype={
$0(){B.bl(this.a,!1).dr(!0)
return null},
$S:0}
A.be5.prototype={
$0(){var w=this.a.aL(0,$.x0().ghK(),x.V),v=E.bsk()
w.wm(0,v)
return v},
$S:0}
A.be6.prototype={
$0(){var w=this.a.aL(0,$.x0().ghK(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.mC(B.bJ(B.aY(v),1,1,0,0,0,0),v)
w.wm(0,u)
return u},
$S:0}
A.be7.prototype={
$0(){return this.a.Iu(this.b,this.c)},
$S:0}
A.be4.prototype={
$2(d,e){return new B.op(B.T(d).aOy(B.T(d).ax.aPr(C.h,C.n)),e,null)},
$S:987}
A.bjA.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.e1(),s=A.Nl(!1,C.xz,"Umsatz 7 %",t.ar(u.a),w),r=A.Nl(!1,C.xz,"Umsatz 19 %",t.ar(u.b),w),q=A.Nl(!0,D.a9a,"Umsatz netto",t.ar(u.c),w),p=A.Nl(!1,D.a99,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return E.aFc(1.7,B.b([s,r,q,p,A.Nl(!0,C.nv,"Ergebnis",n,o<0?C.ak:C.aQ),A.Nl(!1,C.j0,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,F.lB,!0)},
$S:119}
A.aHO.prototype={
$0(){return D.apu},
$S:104}
A.aHN.prototype={
$2(d,e){var w=null
return B.bN(C.ak,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.h,13,C.k),w,w,w),C.fD,w,C.G,w,3)},
$S:262}
A.aHM.prototype={
$1(d){return new A.HC(d,null)},
$S:z+11}
A.bbE.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.e1(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ab(g).i("a9<1,M>"),e=f.i("av.E"),d=B.P(new B.a9(g,new A.bbu(),f),e)
i=A.kd(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.P(new B.a9(g,new A.bbv(),f),e)
d=A.kd(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.P(new B.a9(g,new A.bbw(),f),e)
k=A.kd(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bbx(),f),e)
w=A.kd(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bby(),f),e)
v=A.kd(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bbz(),f),e)
u=A.kd(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bbA(),f),e)
t=A.kd(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.P(new B.a9(g,new A.bbB(),f),e)
h=A.kd(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.P(new B.a9(g,new A.bbC(m),f),e)
m=A.kd(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=C.d.am(l,1)
l=B.P(new B.a9(g,new A.bbD(l),f),e)
return E.aFc(n,B.b([i,d,k,w,v,u,t,h,m,A.kd(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,l,j)],x.p),o,12,12,F.lB,!0)},
$S:119}
A.bbu.prototype={
$1(d){return d.b},
$S:z+0}
A.bbv.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bbw.prototype={
$1(d){return d.d},
$S:z+0}
A.bbx.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bby.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bbz.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bbA.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bbB.prototype={
$1(d){return d.d},
$S:z+0}
A.bbC.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbD.prototype={
$1(d){return this.a},
$S:z+0}
A.bbF.prototype={
$0(){return A.bv7(this.b,1.45,new A.SW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbG.prototype={
$0(){return A.bv7(this.b,1.6,new A.T6(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bnD.prototype={
$1(d){var w=this,v=null,u=B.b0(16),t=x.p,s=B.b([B.au(B.b([B.aP(B.l(w.a,v,v,v,B.c7(C.h,18,C.q),v,v,v),1),B.e5(v,v,D.ab1,v,v,new A.bnC(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.l(w.b,v,v,v,B.D(C.u,12,C.aL),v,v,v),C.a_],t))
s.push(C.x)
s.push(B.cg(new B.ml(w.c,w.d,v),v,17976931348623157e292))
return B.a39(v,C.l,new B.af(C.am,B.ag(s,C.D,C.f,C.N),v),v,v,v,C.hG,C.uC,v,new B.dg(u,C.A),v)},
$S:988}
A.bnC.prototype={
$0(){return B.bl(this.a,!1).f1()},
$S:0}
A.bbH.prototype={
$0(){var w=this.a,v=B.ba(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bv7(this.b,2.4,new A.X7(w.w,w.y,w.z,null),C.b.co(u," \xb7 "),v)
return null},
$S:0}
A.biX.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.biY.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.biZ.prototype={
$1(d){return A.aI2(null,1.4,null,C.ak,0.35,D.af9,D.Dk,null,!1,!1,!1,!1,D.EE,!1,10,D.Y4,!0,C.lc,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+13}
A.b2W.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b2Y.prototype={
$2(d,e){var w=null
return B.l(this.a.aJh(d),w,w,w,B.D(C.u,10,C.O),w,w,w)},
$S:z+15}
A.b2Z.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zB
return new B.af(C.kH,B.l(C.c.cT(this.a[v].a,5),w,w,w,B.D(C.u,9,C.O),w,w,w),w)},
$S:z+5}
A.b2X.prototype={
$1(d){return D.a7P},
$S:z+6}
A.b3J.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3K.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3L.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b3M.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zB
return new B.af(C.kH,B.l(this.a[v],w,w,w,B.D(C.h,12,C.q),w,w,w),w)},
$S:z+5}
A.bca.prototype={
$1(d){return d.d},
$S:z+18}
A.bcb.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bkR.prototype={
$1(d){return d.d},
$S:z+19}
A.bkS.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b1q.prototype={
$0(){return D.apC},
$S:104}
A.b1p.prototype={
$2(d,e){return new A.wo("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+20}
A.b1o.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bN(o,B.ag(B.b([B.l("Noch keine Bilanzdaten erfasst.",o,o,o,B.D(C.h,14,C.O),o,o,o),C.a_,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.D(C.u,12.5,C.k),o,o,o),C.x,B.jU(C.Ed,D.aCo,new A.b1k(p.b,p.c),o)],x.p),C.D,C.f,C.i),C.as,o,C.G,o,3)
w=new A.b1r(d)
v=C.b.fF(p.a.e.d,0,new A.b1l())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jR(new A.b1m(new A.b1s(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ag(B.b([w,C.a_,B.au(B.b([B.aP(B.l("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.D(C.u,11,C.k),o,o,o),1),B.pW(D.abq,D.aBw,new A.b1n(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:248}
A.b1k.prototype={
$0(){return A.at5(this.a,this.b,null)},
$S:0}
A.b1r.prototype={
$1(d){var w=B.bD(J.a3(this.a,d))
return w==null?null:w},
$S:989}
A.b1s.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.ba(w,".",",")+" %"}return w},
$S:31}
A.b1l.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1m.prototype={
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
return E.aFc(p,B.b([n,m,l,o,w,A.kd(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.fh,v)],x.p),q,12,12,F.lB,!0)},
$S:119}
A.b1n.prototype={
$0(){return A.at5(this.a,this.b,this.c)},
$S:0}
A.bnB.prototype={
$1(d){return new A.AG(this.a,new A.bnA(this.b),this.c,null)},
$S:z+21}
A.bnA.prototype={
$0(){var w=this.a,v=$.bxk()
if(w.e==null)B.V(B.Z(y.b))
w.gct().cr(v)},
$S:0}
A.b1f.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1g.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1i.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.tY(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.L(new A.b1h(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1h.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1j.prototype={
$0(){return B.bl(this.a,!1).f1()},
$S:0}
A.b1t.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1u.prototype={
$1(d){return new A.xi(x.B.a(d),this.a.a.r)},
$S:z+24}
A.avE.prototype={
$1(d){return d.e},
$S:z+25}
A.avF.prototype={
$2(d,e){return d+e},
$S:43}
A.avH.prototype={
$1(d){return d.c.length!==0},
$S:z+26}
A.avJ.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdm(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+27}
A.avK.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eN(t,r)
s=s.x
s===$&&B.a()
w.eN(t,s)
u.ad_(v.d,v.e)},
$S:0}
A.avn.prototype={
$1(d){return 0},
$S:990}
A.avm.prototype={
$2(d,e){return B.fh(C.bS,this.a.akD(e),C.t,C.bt,null)},
$S:991}
A.aWT.prototype={
$1(d){return d.a},
$S:z+29}
A.aWU.prototype={
$1(d){return d.b},
$S:z+30}
A.aWV.prototype={
$1(d){return new A.jE(this.a.ch[d.a].a,d.b)},
$S:z+31}
A.aWW.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mk||v===D.dB))t=1-t
return new A.jE(d,t*w.d)},
$S:z+32}
A.aWX.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gov(),p=d.a
r.gov()
r=$.lm()
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
A.aSc.prototype={
$1(d){this.a.l5(new A.a3Y(d))},
$S:147}
A.aSd.prototype={
$1(d){this.a.l5(new A.a3Z(d))},
$S:41}
A.aSe.prototype={
$1(d){this.a.l5(new A.a4_(d))},
$S:28}
A.aSf.prototype={
$0(){this.a.l5(D.a14)},
$S:0}
A.aSg.prototype={
$1(d){this.a.l5(new A.Mc())},
$S:42}
A.aSh.prototype={
$1(d){this.a.l5(new A.a42(d))},
$S:45}
A.aSi.prototype={
$0(){this.a.l5(D.a15)},
$S:0}
A.aSj.prototype={
$1(d){this.a.l5(new A.Mf(d))},
$S:109}
A.aSk.prototype={
$1(d){this.a.l5(new A.a3X(d))},
$S:146}
A.aSl.prototype={
$1(d){this.a.l5(new A.a3W(d))},
$S:145}
A.aSm.prototype={
$1(d){return this.a.l5(new A.Ma(d))},
$S:144}
A.aSn.prototype={
$1(d){return this.a.l5(new A.a40(d))},
$S:59}
A.aSo.prototype={
$1(d){return this.a.l5(new A.Md(d))},
$S:50}
A.bbS.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aP7(w==null?B.b([],x.t):w)},
$S:z+35}
A.bbQ.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bbR.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h0(w,new A.bbP())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.FQ(w))},
$S:0}
A.bbP.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bbT.prototype={
$1(d){return new A.yP(x.hf.a(d),this.a.a.r)},
$S:z+37}
A.aI3.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.boi.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bzH(t?A.buW(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tf(w,new A.y6(!0,A.bvG(),new A.boh(v)))},
$S:z+39}
A.boh.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bOd(A.buW(d,e,f),w,A.bWQ(d,e,f))},
$S:z+40}
A.bof.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iU(v,v,u==null?D.dh:u,v,v,v,v,v,v,v,v,14,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v)
return new A.ri(C.d.j(d.b),w)},
$S:z+41}
A.aI5.prototype={
$1(d){return d.a.length!==0},
$S:z+42}
A.aI6.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.aIa.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+43}
A.aI8.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eN(v,t)
u=u.Q
u===$&&B.a()
w.eN(v,u)},
$S:0}
A.aI9.prototype={
$0(){this.a.ad_(this.b,this.c)},
$S:0}
A.aIb.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avx.prototype={
$1(d){return d.gdm(0)},
$S:z+44}
A.avy.prototype={
$2(d,e){return d+e},
$S:43}
A.avB.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iK(v,B.ab(v).i("iK<1>")).aq(0,new A.avC(w,this.a/(u+1),this.c))},
$S:0}
A.avC.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdm(0)/2
this.c[d]=v
w.a=v+e.gdm(0)/2},
$S:z+2}
A.avz.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdm(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdm(0)/2},
$S:z+2}
A.avA.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdm(0)/2
this.c[d]=u
u+=e.gdm(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFb.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:992}
A.ayO.prototype={
$1(d){return d},
$S:993}
A.aSx.prototype={
$2(d,e){return this.a.Ao(d,e)},
$S:19};(function aliases(){var w=A.JY.prototype
w.a_u=w.i4
w.akW=w.aQP
w.akX=w.acT
w=A.Sy.prototype
w.anz=w.l
w=A.K7.prototype
w.a_v=w.i4
w=A.Fp.prototype
w.a0e=w.Yq})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c_p","bOa",71)
v(A.SA.prototype,"gaDa","HU",22)
u(A.SB.prototype,"garl","arm",8)
t(A,"bZg",3,null,["$3"],["bLv"],48,0)
t(A,"bZh",3,null,["$3"],["bLw"],49,0)
t(A,"bZi",3,null,["$3"],["bLx"],50,0)
t(A,"bZk",4,null,["$4"],["c_2"],51,0)
w(A,"bZj","c_1",52)
s(A,"bvb","c_3",53)
t(A,"bZb",3,null,["$3"],["bOe"],54,0)
w(A,"Z9","c1q",55)
w(A,"at7","c_6",6)
t(A,"bZd",3,null,["$3"],["bP_"],56,0)
t(A,"bZf",3,null,["$3"],["bU8"],57,0)
t(A,"bZc",3,null,["$3"],["bOZ"],58,0)
t(A,"bZe",3,null,["$3"],["bU7"],59,0)
w(A,"c8w","bOY",60)
w(A,"c8x","bU6",61)
r(A.WX.prototype,"ga3P","awM",28)
u(A.UO.prototype,"gay3","ay4",34)
t(A,"c0j",3,null,["$3"],["bPu"],62,0)
t(A,"c0i",3,null,["$3"],["bLz"],63,0)
w(A,"c0m","c1r",1)
t(A,"bG9",4,null,["$5$size","$4"],["bEB",function(d,e,f,g){return A.bEB(d,e,f,g,null)}],64,0)
s(A,"bvG","c1p",65)
s(A,"bGa","bYZ",66)
s(A,"bGd","c_9",67)
s(A,"bGc","c_5",3)
s(A,"bGb","c_4",3)
w(A,"c0l","bFN",69)
w(A,"c0k","bFM",70)
u(A.Px.prototype,"gaFL","a6p",46)
t(A,"Ze",3,null,["$3"],["c0h"],47,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5v,A.af1,A.ak2,A.Ia,A.IF,A.af_,A.Hi,A.HC,A.ajn,A.aky,A.TF,A.X7,A.SW,A.T6,A.al1,A.aht,A.Iu,A.aqz,A.wo,A.JZ,A.A8])
u(B.A,[A.uA,A.Dr,A.b8,A.ag1,A.afS,A.afU,A.afV,A.afM,A.aj7,A.afY,A.afW,A.avT,A.aqD,A.avG,A.afT,A.K7,A.a4y,A.te,A.ap3,A.ap2,A.afL,A.aj6,A.ev,A.aj3,A.aj5,A.ani,A.ajU,A.arg,A.aj4,A.aiN,A.aj2,A.avl,A.bbN,A.avo,A.afI,A.ny,A.aj_,A.aj0,A.vq,A.he,A.akG,A.akJ,A.afP,A.ag2,A.afQ,A.aj1,A.akM,A.akK,A.aqC,A.ap1,A.aI4,A.akI,A.v8,A.a04,A.akT,A.a0e,A.b_p])
u(B.uy,[A.q0,A.ve,A.w6,A.ayc,A.azj,A.nR,A.C3,A.nS])
u(B.nD,[A.aCJ,A.aCK,A.aCL,A.aCZ,A.bou,A.bov,A.bqj,A.bow,A.bot,A.bos,A.aCU,A.aCP,A.aHM,A.bbu,A.bbv,A.bbw,A.bbx,A.bby,A.bbz,A.bbA,A.bbB,A.bbC,A.bbD,A.bnD,A.biZ,A.b2X,A.b3J,A.b3K,A.bca,A.bkR,A.b1o,A.b1r,A.b1s,A.bnB,A.b1u,A.avE,A.avH,A.avn,A.aWT,A.aWU,A.aWV,A.aWW,A.aWX,A.aSc,A.aSd,A.aSe,A.aSg,A.aSh,A.aSj,A.aSk,A.aSl,A.aSm,A.aSn,A.aSo,A.bbS,A.bbT,A.aI3,A.boi,A.boh,A.bof,A.aI5,A.aI6,A.avx,A.ayO])
t(A.y4,B.fr)
u(B.xx,[A.aCI,A.aCH,A.aCX,A.aCQ,A.aCR,A.aCS,A.aCT,A.aCW,A.aCN,A.aCO,A.be5,A.be6,A.be7,A.aHO,A.bbF,A.bbG,A.bnC,A.bbH,A.b1q,A.b1k,A.b1n,A.bnA,A.b1f,A.b1g,A.b1i,A.b1h,A.b1j,A.b1t,A.avK,A.aSf,A.aSi,A.bbQ,A.bbR,A.aI8,A.aI9,A.avB])
u(B.xE,[A.y5,A.amd,A.a5w,A.afO])
u(B.xy,[A.aCV,A.be4,A.bjA,A.aHN,A.bbE,A.biX,A.biY,A.b2W,A.b2Y,A.b2Z,A.b3L,A.b3M,A.bcb,A.bkS,A.b1p,A.b1l,A.b1m,A.avF,A.avJ,A.avm,A.bbP,A.aIa,A.aIb,A.avy,A.avC,A.avz,A.avA,A.aFb,A.aSx])
u(B.O,[A.AG,A.QE])
u(B.a0,[A.SA,A.WX])
u(B.MT,[A.K3,A.Nz])
u(B.xa,[A.SB,A.UO])
t(A.a_H,A.ag1)
t(A.afH,A.a_H)
t(A.a_r,A.afH)
u(A.a_r,[A.afR,A.akH])
t(A.nz,A.afR)
u(B.U4,[A.avv,A.act,A.Cj,A.aC9,A.aHP,A.MG])
t(A.fw,A.afS)
t(A.i9,A.afU)
t(A.mn,A.afV)
t(A.a_y,A.afM)
t(A.Mg,A.aj7)
u(A.Mg,[A.afX,A.akL])
t(A.a_D,A.afX)
t(A.a_E,A.afY)
t(A.Ck,A.afW)
u(A.avT,[A.K4,A.NB])
t(A.acv,A.aqD)
t(A.afZ,A.acv)
t(A.a_F,A.afZ)
u(B.b6,[A.xi,A.yP])
t(A.uc,A.afT)
t(A.JY,A.K7)
u(A.JY,[A.avI,A.aI7])
u(B.Nv,[A.a_B,A.a5J])
u(B.J,[A.Fp,A.afJ])
u(A.Fp,[A.a9C,A.a9P])
t(A.pP,A.ap3)
t(A.ab0,A.ap2)
t(A.oU,A.afL)
t(A.uC,A.aj6)
t(A.y7,A.aj3)
t(A.pg,A.aj5)
t(A.Pd,A.ani)
t(A.mH,A.ajU)
t(A.n5,A.arg)
u(A.pg,[A.ajT,A.arf])
t(A.kF,A.ajT)
t(A.l4,A.arf)
t(A.a3V,A.aj4)
u(A.a3V,[A.ajS,A.are])
t(A.a4J,A.ajS)
t(A.acT,A.are)
t(A.LZ,A.aiN)
t(A.uB,A.aj2)
t(A.M9,A.uB)
t(A.ab1,B.fW)
t(A.afK,A.afJ)
t(A.Sy,A.afK)
t(A.a_s,A.Sy)
t(A.jE,A.afI)
t(A.a3S,A.aj_)
t(A.a3U,A.aj0)
u(A.he,[A.a3Y,A.a3Z,A.a4_,A.Mb,A.Mc,A.a42,A.Me,A.Mf,A.a3X,A.a3W,A.Ma,A.a40,A.a41,A.Md])
t(A.ps,A.akH)
t(A.e6,A.akG)
t(A.NA,A.akJ)
t(A.a_A,A.afP)
t(A.mo,A.ag2)
t(A.K2,A.afQ)
t(A.y6,A.aj1)
t(A.E5,A.akL)
t(A.a5K,A.akM)
t(A.akF,A.ev)
t(A.mM,A.akF)
t(A.pZ,A.mM)
t(A.ri,A.akK)
t(A.tf,A.aqC)
t(A.FQ,A.ap1)
t(A.yQ,A.akI)
t(A.yT,A.akT)
t(A.Px,B.PK)
t(A.a3O,B.bI)
w(A.afM,A.b8)
w(A.afR,A.b8)
w(A.afS,A.b8)
w(A.afU,A.b8)
w(A.afV,A.b8)
w(A.afW,A.b8)
w(A.afX,A.b8)
w(A.afY,A.b8)
w(A.afZ,A.b8)
w(A.afT,A.b8)
w(A.afH,A.b8)
w(A.afL,A.b8)
w(A.aiN,A.b8)
w(A.aj2,A.b8)
w(A.aj3,A.b8)
w(A.aj5,A.b8)
w(A.aj6,A.b8)
w(A.ajT,A.b8)
w(A.ajS,A.b8)
w(A.ajU,A.b8)
w(A.ani,A.b8)
w(A.ap2,A.b8)
w(A.ap3,A.b8)
w(A.aqD,A.b8)
w(A.arf,A.b8)
w(A.are,A.b8)
w(A.arg,A.b8)
w(A.afI,A.b8)
v(A.afJ,B.aA)
w(A.afK,B.e_)
v(A.Sy,B.a2T)
w(A.ag1,A.b8)
w(A.aj_,A.b8)
w(A.aj0,A.b8)
w(A.aj7,A.b8)
w(A.afP,A.b8)
w(A.afQ,A.b8)
w(A.ag2,A.b8)
w(A.aj1,A.b8)
w(A.aj4,A.b8)
w(A.akF,A.b8)
w(A.akG,A.b8)
w(A.akH,A.b8)
w(A.akJ,A.b8)
w(A.akK,A.b8)
w(A.akL,A.b8)
w(A.akM,A.b8)
w(A.ap1,A.b8)
w(A.aqC,A.b8)
w(A.akI,A.b8)
w(A.akT,A.b8)})()
B.bl3(b.typeUniverse,JSON.parse('{"a5v":{"a_":[],"c":[]},"Dr":{"aCM":[]},"y4":{"fr":["be<~>"],"fr.T":"be<~>"},"IF":{"a_":[],"c":[]},"Hi":{"a_":[],"c":[]},"y5":{"bp":[],"O":[],"c":[]},"af1":{"a_":[],"c":[]},"ak2":{"a_":[],"c":[]},"amd":{"bp":[],"O":[],"c":[]},"Ia":{"a_":[],"c":[]},"af_":{"a_":[],"c":[]},"HC":{"a_":[],"c":[]},"wo":{"a_":[],"c":[]},"AG":{"O":[],"c":[]},"a5w":{"bp":[],"O":[],"c":[]},"ajn":{"a_":[],"c":[]},"aky":{"a_":[],"c":[]},"TF":{"a_":[],"c":[]},"X7":{"a_":[],"c":[]},"SW":{"a_":[],"c":[]},"T6":{"a_":[],"c":[]},"al1":{"a_":[],"c":[]},"aht":{"a_":[],"c":[]},"Iu":{"a_":[],"c":[]},"aqz":{"a_":[],"c":[]},"afO":{"bp":[],"O":[],"c":[]},"SA":{"a0":["AG"]},"K3":{"O":[],"c":[]},"SB":{"a0":["K3"]},"nz":{"b8":[]},"fw":{"b8":[]},"i9":{"b8":[]},"mn":{"b8":[]},"Ck":{"b8":[]},"xi":{"b6":["nz"],"b_":["nz"],"b_.T":"nz","b6.T":"nz"},"a_y":{"b8":[]},"a_D":{"b8":[]},"a_E":{"b8":[]},"a_F":{"b8":[]},"uc":{"b8":[]},"a_B":{"aV":[],"c":[]},"a9C":{"J":[],"I":[],"jg":[],"aQ":[]},"pg":{"b8":[]},"mH":{"b8":[]},"n5":{"b8":[]},"kF":{"b8":[]},"l4":{"b8":[]},"uB":{"b8":[]},"a_r":{"b8":[]},"pP":{"b8":[]},"ab0":{"b8":[]},"oU":{"b8":[]},"uC":{"b8":[]},"y7":{"b8":[]},"acv":{"b8":[]},"Pd":{"b8":[]},"a4J":{"b8":[]},"acT":{"b8":[]},"LZ":{"b8":[]},"M9":{"b8":[]},"JZ":{"a_":[],"c":[]},"QE":{"O":[],"c":[]},"WX":{"a0":["QE"]},"jE":{"b8":[]},"ab1":{"fW":[],"aV":[],"c":[]},"a_s":{"e_":["J","hf"],"J":[],"aA":["J","hf"],"I":[],"aQ":[],"aA.1":"hf","e_.1":"hf","aA.0":"J"},"A8":{"a_":[],"c":[]},"a_H":{"b8":[]},"a3S":{"b8":[]},"Mg":{"b8":[]},"a3U":{"b8":[]},"a3Y":{"he":[]},"a3Z":{"he":[]},"a4_":{"he":[]},"Mb":{"he":[]},"Mc":{"he":[]},"a42":{"he":[]},"Me":{"he":[]},"Mf":{"he":[]},"a3X":{"he":[]},"a3W":{"he":[]},"Ma":{"he":[]},"a40":{"he":[]},"a41":{"he":[]},"Md":{"he":[]},"Fp":{"J":[],"I":[],"jg":[],"aQ":[]},"Nz":{"O":[],"c":[]},"UO":{"a0":["Nz"]},"ps":{"b8":[]},"e6":{"b8":[]},"mo":{"b8":[]},"mM":{"ev":[],"b8":[]},"pZ":{"mM":[],"ev":[],"b8":[]},"ri":{"b8":[]},"tf":{"b8":[]},"FQ":{"b8":[]},"yP":{"b6":["ps"],"b_":["ps"],"b_.T":"ps","b6.T":"ps"},"NA":{"b8":[]},"a_A":{"b8":[]},"K2":{"b8":[]},"y6":{"b8":[]},"a3V":{"b8":[]},"E5":{"b8":[]},"a5K":{"b8":[]},"yQ":{"b8":[]},"a5J":{"aV":[],"c":[]},"a9P":{"J":[],"I":[],"jg":[],"aQ":[]},"yT":{"b8":[]},"Px":{"J":[],"bt":["J"],"I":[],"aQ":[]},"a3O":{"bI":[],"aV":[],"c":[]}}'))
B.bE5(b.typeUniverse,JSON.parse('{"JY":1,"Mg":1,"K7":1,"Fp":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("C3"),e:w("be<nR>"),aN:w("be<nS>"),fM:w("be<a2<h,@>?>"),b:w("be<~>"),W:w("jE"),B:w("nz"),dB:w("fw"),T:w("uc"),fj:w("i9"),G:w("mn"),J:w("mo"),k:w("as"),cX:w("a0e<M>"),dO:w("uk"),R:w("ai<h,@>"),v:w("hP"),bz:w("mw<bc>"),f0:w("nJ"),E:w("b8"),F:w("y4"),X:w("nR"),P:w("mC"),D:w("uA"),a:w("aCM"),d:w("nS"),cw:w("ev"),L:w("hf"),m:w("df<w,E>"),cm:w("kF"),dv:w("mH"),g:w("B<ny>"),O:w("B<fw>"),Y:w("B<i9>"),C:w("B<bs5>"),U:w("B<ev>"),K:w("B<a4y>"),u:w("B<e6>"),bC:w("B<v8>"),aA:w("B<u<ev>>"),r:w("B<FQ>"),s:w("B<h>"),eg:w("B<tc>"),df:w("B<pZ>"),p:w("B<c>"),n:w("B<M>"),t:w("B<w>"),eF:w("bd<a0<O>>"),Z:w("mM"),cz:w("e6"),hf:w("ps"),dj:w("yQ"),fT:w("ri"),c_:w("ig<oC<be<~>>>"),x:w("yT<fw>"),y:w("yT<e6>"),I:w("u<w>"),ef:w("ve"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jS"),aU:w("A"),Q:w("vq<nz>"),o:w("vq<ps>"),eo:w("pF"),gJ:w("pG"),V:w("n_<mC>"),N:w("h"),A:w("ol"),bO:w("bT"),er:w("tc"),j:w("w6"),dw:w("pZ"),bY:w("tf"),cZ:w("q0"),gc:w("kb"),es:w("l4"),bN:w("n5"),l:w("c"),q:w("Bu"),g4:w("iv<M>"),cJ:w("C"),i:w("M"),z:w("@"),S:w("w"),bn:w("xi?"),f3:w("yP?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("kb?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Av=new B.qu(C.n,B.aw("qu<E>"))
D.AC=new A.Cj(0,"left")
D.mk=new A.Cj(1,"top")
D.AD=new A.Cj(2,"right")
D.dB=new A.Cj(3,"bottom")
D.at9=new A.pP(!1,A.bvb(),22,null)
D.ka=new A.oU(16,null,D.at9,!0)
D.a7Q=new A.pg(C.B,null,2,null)
D.vG=new A.K2(!1,D.a7Q,A.c0m(),!0)
D.a_b=new A.avv(3,"spaceEvenly")
D.a_k=new B.xm(6,"dstIn")
D.Xp=new B.aU(3,3)
D.AH=new B.d2(D.Xp,D.Xp,C.Z,C.Z)
D.a_w=new B.b7(C.B,0,C.P,-1)
D.Be=new A.a3U()
D.a14=new A.Mb()
D.a15=new A.Me()
D.aJO=new A.ab0()
D.ajI=w([],B.aw("B<kF>"))
D.ajJ=w([],B.aw("B<l4>"))
D.Df=new A.LZ(D.ajI,D.ajJ,!0)
D.a7x=new B.eu("Zeitraum",!1,null)
D.a7C=new B.eu("Konten (SKR 03)",!1,null)
D.xg=new A.aC9(0,"center")
D.aK_=new A.y6(!0,A.bvG(),A.bG9())
D.Dk=new A.y6(!1,A.bvG(),A.bG9())
D.Dl=new A.y7(!1,!0,null,A.at7(),A.Z9(),!0,null,A.at7(),A.Z9())
D.aK0=new A.y7(!0,!0,null,A.at7(),A.Z9(),!0,null,A.at7(),A.Z9())
D.a3n=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a39=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3w=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3r=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2V=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2U=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3R=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3g=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3U=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3O=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.anC=new B.df([50,D.a3n,100,D.a39,200,D.a3w,300,D.a3r,400,D.a2V,500,D.a2U,600,D.a3R,700,D.a3g,800,D.a3U,900,D.a3O],x.m)
D.dh=new B.rp(D.anC,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ag5=w([8,4],x.t)
D.a7O=new A.pg(D.dh,null,0.4,D.ag5)
D.a7P=new A.pg(C.al,null,0.5,null)
D.fG=new A.ev(0/0,0/0)
D.atb=new A.pP(!0,A.bvb(),44,null)
D.ml=new A.oU(16,null,D.atb,!0)
D.ata=new A.pP(!0,A.bvb(),30,null)
D.mm=new A.oU(16,null,D.ata,!0)
D.a7R=new A.uC(!1,D.ml,D.mm,D.ml,D.mm)
D.aK1=new A.uC(!0,D.ml,D.mm,D.ml,D.mm)
D.Dt=new A.MG(0,"left")
D.a8n=new A.MG(1,"center")
D.Du=new A.MG(2,"right")
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
D.ab1=new B.aR(C.kW,null,C.h,null,null)
D.ab3=new B.aR(C.xt,null,C.u,null,null)
D.abq=new B.aR(C.nz,16,null,null,null)
D.a8E=new B.ad(57912,"MaterialIcons",null,!1)
D.abx=new B.aR(D.a8E,null,C.ak,null,null)
D.adG=new A.a5w(null)
D.aK6=new A.aHP(0,"horizontal")
D.xJ=new A.yQ(0,0,0,0,!1)
D.EE=new A.NA(0.5)
D.Bi=new A.a5K()
D.adK=new A.E5(D.Bi,A.bGd(),10,A.bGa(),!0,A.bGc(),A.bGb(),!1,null,null,null)
D.aK8=new A.E5(D.Bi,A.bGd(),10,A.bGa(),!0,A.bGc(),A.bGb(),!0,null,null,null)
D.af9=w([4,3],x.t)
D.aru=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ark=new B.aG("receivables","Forderungen (kurzfristig)")
D.ar9=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.ar7=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aqY=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.ar2=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arr=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.arj=new B.aG("equity","Eigenkapital")
D.GU=w([D.aru,D.ark,D.ar9,D.ar7,D.aqY,D.ar2,D.arr,D.arj],B.aw("B<+(h,h)>"))
D.aKc=w([],x.g)
D.aju=w([],x.O)
D.ajv=w([],x.Y)
D.ajw=w([],B.aw("B<mn>"))
D.ajx=w([],B.aw("B<mo>"))
D.aKd=w([],x.U)
D.aKe=w([],x.u)
D.ajy=w([],x.r)
D.aod={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T0={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ym=new B.ai(D.T0,[0,0,0,0,0,0,0,C.cF],B.aw("ai<h,A>"))
D.aob={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.anx=new B.ai(D.aob,[0,0,0,0],B.aw("ai<h,w>"))
D.aoq={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.amV=new B.ai(D.aoq,[0,0,0,0,null,null,null,null],B.aw("ai<h,w?>"))
D.amR=new B.ai(D.aod,[D.ym,D.ym,D.ym,C.cF,C.cF,C.cF,D.anx,D.amV],x.R)
D.an7=new B.ai(D.T0,[0,0,0,0,0,0,0,C.cE],x.R)
D.aoa={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.any=new B.ai(D.aoa,[0,0,0,0,0,0,0,C.cE],x.R)
D.a4_=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a47=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2Y=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3j=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3t=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4k=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2L=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3l=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3v=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3P=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.anD=new B.df([50,D.a4_,100,D.a47,200,D.a2Y,300,D.a3j,400,D.a3t,500,D.a4k,600,D.a2L,700,D.a3l,800,D.a3v,900,D.a3P],x.m)
D.SQ=new B.rp(D.anD,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a71=new B.aj(32,32,32,32)
D.apu=new B.af(D.a71,C.bC,null)
D.a73=new B.aj(48,48,48,48)
D.apx=new B.af(D.a73,C.bC,null)
D.apC=new B.af(C.am,C.bC,null)
D.ajK=w([],B.aw("B<mH>"))
D.ajL=w([],B.aw("B<n5>"))
D.Xq=new A.Pd(D.ajK,D.ajL)
D.as5=new B.fX("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.as7=new B.fX("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.as9=new B.fX("Automaten-Business","Umsatz je Automat",null,null)
D.asa=new B.fX("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.asc=new B.fX("Top","Meistverkaufte Produkte",null,null)
D.asf=new B.fX("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asg=new B.fX("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y4=new B.rX(C.E,C.p,0)
D.auy=new B.cT(18,18,C.mw,null)
D.aC8=new B.al("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.auP=new B.eo(D.aC8,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aBF=new B.al("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.auQ=new B.eo(D.aBF,null,null,null,null,null,null,null,null,null,null,null,null,C.Q,!1,null,null,null,C.t,null)
D.aKn=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBw=new B.al("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aCo=new B.al("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Ze=new A.act(0,"auto")
D.aCV=new A.act(1,"top")
D.aH6=new A.wo("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aH7=new A.wo("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c8W","bKk",()=>B.jl(new A.bou(),x.D))
w($,"c8X","atL",()=>B.jl(new A.bov(),x.a))
w($,"c9R","x0",()=>B.btV(new A.bqj(),x.P))
w($,"c8Y","br7",()=>C.aO.$1$1(new A.bow(),x.d))
w($,"c8V","bKj",()=>C.aO.$1$1(new A.bot(),x.X))
w($,"c8U","bxk",()=>C.aO.$1$1(new A.bos(),x.h))
w($,"c8T","br6",()=>B.aXL(A.c_p(),x.F,x.b))
w($,"c2b","bqJ",()=>new A.avl())
v($,"c5p","lm",()=>new A.b_p())})()};
(a=>{a["5GqJHQuzIanrAvtsSfOrYCiSR+k="]=a.current})($__dart_deferred_initializers__);