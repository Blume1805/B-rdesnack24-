((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nv(d,e,f,g,h){return new A.a5J(f,g,d,h,e,null)},
a5J:function a5J(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uB:function uB(d){this.a=d},
Dz:function Dz(d){this.a=d},
bOY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.ST
w=x.f
v=x.N
u=x.z
t=A.aDl(B.e8(w.a(e.h(a0,"current")),v,u))
s=A.aDl(B.e8(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDl(B.e8(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cL
p=J.d2(p,new A.aD3(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cL
o=J.d2(o,new A.aD4(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cL
q=J.d2(q,new A.aD5(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.e8(w.a(e.h(a0,"customer")),v,u)
m=B.bx(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oN(n.h(0,"app_gross"))
k=B.bx(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oN(n.h(0,"avg_basket"))
u=B.e8(w.a(e.h(a0,"derived")),v,u)
v=A.oN(u.h(0,"gross_margin_pct"))
e=A.oN(u.h(0,"net_margin_pct"))
w=A.oN(u.h(0,"ebitda_margin_pct"))
j=A.oN(u.h(0,"cashflow_operating"))
i=A.boy(u.h(0,"revenue_growth_yoy_pct"))
h=A.boy(u.h(0,"revenue_growth_mom_pct"))
g=A.boy(u.h(0,"result_growth_yoy_pct"))
u=A.boy(u.h(0,"result_growth_mom_pct"))
f=B.bx(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nU(t,s,r,p,o,q,new A.ayw(m,l,k,n),new A.azD(v,e,w,j,i,h,g,u),f)},
oN(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k_(J.am(d))
return w==null?0:w},
boy(d){if(d==null)return null
if(typeof d=="number")return d
return B.k_(J.am(d))},
q4:function q4(d,e,f,g){var _=this
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
ayw:function ayw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azD:function azD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nU:function nU(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aD3:function aD3(){},
aD4:function aD4(){},
aD5:function aD5(){},
aDl(d){var w=J.Y(d),v=A.tV(w.h(d,"revenue_net_7")),u=A.tV(w.h(d,"revenue_net_19")),t=A.tV(w.h(d,"revenue_net")),s=A.tV(w.h(d,"expense_net")),r=A.tV(w.h(d,"result_net")),q=A.tV(w.h(d,"vat_collected")),p=A.tV(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cL
w=J.d2(w,new A.aDm(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.nV(v,u,t,s,r,q,p,w)},
tV(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k_(J.am(d))
return w==null?0:w},
Ca:function Ca(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nV:function nV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDm:function aDm(){},
bOX(d){return new A.y8(d,new B.ij(x.c_),C.dB)},
bpl:function bpl(){},
bpm:function bpm(){},
brc:function brc(){},
bpn:function bpn(){},
bpk:function bpk(){},
bpj:function bpj(){},
y8:function y8(d,e,f){this.r=d
this.a=e
this.f=f},
aD2:function aD2(d,e,f){this.a=d
this.b=e
this.c=f},
aD1:function aD1(d,e,f){this.a=d
this.b=e
this.c=f},
bOZ(){return new A.y9(null)},
akj(d,e,f,g,h){return new A.aki(e,h,g,f,d,null)},
y9:function y9(d){this.a=d},
aDk:function aDk(d){this.a=d},
aDc:function aDc(d,e,f){this.a=d
this.b=e
this.c=f},
aDd:function aDd(d,e,f){this.a=d
this.b=e
this.c=f},
aDe:function aDe(d){this.a=d},
aDb:function aDb(){},
aDf:function aDf(d){this.a=d},
aDg:function aDg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDj:function aDj(){},
aDi:function aDi(){},
aDh:function aDh(){},
aDa:function aDa(d,e){this.a=d
this.b=e},
aD8:function aD8(d){this.a=d},
aD9:function aD9(d){this.a=d},
aff:function aff(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aki:function aki(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amu:function amu(d,e){this.e=d
this.a=e},
beK:function beK(d){this.a=d},
beL:function beL(d){this.a=d},
beM:function beM(d,e,f){this.a=d
this.b=e
this.c=f},
beJ:function beJ(){},
Im:function Im(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IQ:function IQ(d,e){this.c=d
this.a=e},
bkq:function bkq(d){this.a=d},
afd:function afd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hu:function Hu(d,e){this.c=d
this.a=e},
bvU(d,e,f,g,h){var w=null
return B.j3(w,w,!0,w,new A.bot(h,g,e,f),d,w,!0,!0,x.H)},
jz(d,e,f,g,h,i,j,k,l,m,n){return new A.akP(g,n,i,e,d,m,f,k,l,j,null)},
atl(d,e,f){var w=0,v=B.r(x.H)
var $async$atl=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.l(B.j3(null,null,!0,null,new A.bor(f,e,e.aJ(0,$.c3(),x.A)),d,null,!0,!0,x.H),$async$atl)
case 2:return B.p(null,v)}})
return B.q($async$atl,v)},
a5K:function a5K(d){this.a=d},
aIb:function aIb(){},
aIa:function aIa(){},
aI9:function aI9(){},
HO:function HO(d,e){this.c=d
this.a=e},
bci:function bci(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bc7:function bc7(){},
bc8:function bc8(){},
bc9:function bc9(){},
bca:function bca(){},
bcb:function bcb(){},
bcc:function bcc(){},
bcd:function bcd(){},
bce:function bce(){},
bcf:function bcf(d){this.a=d},
bcg:function bcg(d){this.a=d},
bch:function bch(d){this.a=d},
bcj:function bcj(d,e){this.a=d
this.b=e},
bck:function bck(d,e){this.a=d
this.b=e},
bot:function bot(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bos:function bos(d){this.a=d},
ajC:function ajC(d){this.a=d},
akP:function akP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bcl:function bcl(d,e){this.a=d
this.b=e},
TR:function TR(d,e,f){this.c=d
this.d=e
this.a=f},
Xl:function Xl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjJ:function bjJ(){},
bjK:function bjK(){},
bjL:function bjL(d){this.a=d},
T5:function T5(d,e,f){this.c=d
this.d=e
this.a=f},
b3i:function b3i(){},
b3k:function b3k(d){this.a=d},
b3l:function b3l(d){this.a=d},
b3j:function b3j(){},
Tg:function Tg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b45:function b45(){},
b46:function b46(){},
b47:function b47(){},
b48:function b48(d){this.a=d},
ali:function ali(d,e){this.c=d
this.a=e},
bcP:function bcP(){},
bcQ:function bcQ(){},
ahG:function ahG(d,e){this.c=d
this.a=e},
BG:function BG(d,e,f){this.c=d
this.d=e
this.a=f},
aqP:function aqP(d,e){this.c=d
this.a=e},
blH:function blH(){},
blI:function blI(){},
wo:function wo(d,e){this.c=d
this.a=e},
ag1:function ag1(d,e){this.e=d
this.a=e},
b1N:function b1N(){},
b1M:function b1M(){},
b1L:function b1L(d,e,f){this.a=d
this.b=e
this.c=f},
b1H:function b1H(d,e){this.a=d
this.b=e},
b1O:function b1O(d){this.a=d},
b1P:function b1P(d){this.a=d},
b1I:function b1I(){},
b1J:function b1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1K:function b1K(d,e,f){this.a=d
this.b=e
this.c=f},
bor:function bor(d,e,f){this.a=d
this.b=e
this.c=f},
boq:function boq(d){this.a=d},
AM:function AM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SK:function SK(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1C:function b1C(d){this.a=d},
b1D:function b1D(d){this.a=d},
b1F:function b1F(d,e){this.a=d
this.b=e},
b1E:function b1E(d,e){this.a=d
this.b=e},
b1G:function b1G(d){this.a=d},
bc:function bc(){},
bzb(d){return new A.Ke(d,C.au,C.dr,null,null)},
Ke:function Ke(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SL:function SL(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cS$=g
_.c=_.a=null},
b1Q:function b1Q(d,e){this.a=d
this.b=e},
b1R:function b1R(d){this.a=d},
avP(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ak_:f,p=a0==null?16:a0,o=d==null?D.a_n:d,n=g==null,m=n?A.bso(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xz:a3
n=n?A.bso(r,r,r,r,r,r,r,r):g
w=j==null?D.Dk:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.nC(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bh,s,w,i,n)},
avW(d,e,f,g,h){var w=d==null?D.ak0:d,v=e==null?2:e,u=g==null?C.lf:g
return new A.fy(h,f===!0,w,v,u)},
bMh(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.avW(A.kk(d.c,e.c,f,A.c_6(),x.fj),B.aa(d.d,e.d,f),!1,A.kk(d.e,e.e,f,A.Zs(),x.S),w)},
a_Q(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T0
else w=h
v=m==null
u=v?8:m
t=$.ln()
s=t.aWb(f,v?8:m)
t=t.aWc(g,v?8:m)
v=d==null?A.bz9(r,r,r,r,r):d
return new A.id(q,l,w,j,u,s,e,t,v,k==null?D.ak1:k)},
bMi(d,e,f){var w,v,u,t,s=B.X(d.c,e.c,f),r=B.aa(d.e,e.e,f),q=B.mt(d.f,e.f,f),p=A.kk(d.r,e.r,f,A.Zs(),x.S),o=B.bV(d.w,e.w,f),n=B.aa(d.a,e.a,f),m=B.aa(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aa(w.b,v.b,f)
t=B.aa(w.c,v.c,f)
v=B.X(w.d,v.d,f)
return A.a_Q(A.bz9(v,u,null,!1,t),p,q,o,s,n,null,A.kk(d.y,e.y,f,A.c_7(),x.G),m,r)},
bMj(d,e,f){var w,v,u=B.aa(d.a,e.a,f)
u.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
v.toString
return new A.mr(u,w,v,B.bV(d.d,e.d,f))},
bz9(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.di
else w=d
return new A.a_M(g===!0,v,u,w,f)},
bso(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_S(4,C.hJ,16,D.xj,0,120,A.c_9(),!1,!1,D.Zq,0,C.A,A.c_8())
else w=k
v=j==null?C.kO:j
return new A.a_R(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c_V(d,e,f,g){var w=null,v=B.iV(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cr(C.d.j(f.b),v)},
c_U(d){return A.axX(D.di,15)},
nC:function nC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avO:function avO(d,e){this.a=d
this.b=e},
fy:function fy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avX:function avX(){},
avY:function avY(){},
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
mr:function mr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_M:function a_M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_R:function a_R(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acH:function acH(d,e){this.a=d
this.b=e},
a_S:function a_S(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cr:function Cr(d,e){this.a=d
this.b=e},
Kf:function Kf(d){this.a=d},
a_T:function a_T(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xk:function xk(d,e){this.a=d
this.b=e},
ag_:function ag_(){},
ag4:function ag4(){},
ag5:function ag5(){},
ag7:function ag7(){},
ag8:function ag8(){},
ag9:function ag9(){},
aga:function aga(){},
agb:function agb(){},
agc:function agc(){},
avZ:function avZ(d){this.a=d},
aw_:function aw_(){},
ue:function ue(d,e,f){this.a=d
this.b=e
this.c=f},
ag6:function ag6(){},
aw0:function aw0(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aw1:function aw1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aw2:function aw2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4M:function a4M(d){this.b=d},
a_P:function a_P(d,e,f){this.d=d
this.e=e
this.a=f},
a9R:function a9R(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i_=e
_.cV=f
_.fV=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bA=_.aE=_.ac=_.an=$
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
c_W(d,e){var w=null
return new A.QN(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
avI(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aa(w.c,v.c,f)
u.toString
return new A.oZ(t,e.b,new A.pU(v.a,v.b,u,B.aa(w.d,v.d,f)),!0)},
bAx(d,e,f){var w=A.avI(d.b,e.b,f),v=A.avI(d.d,e.d,f),u=A.avI(d.e,e.e,f)
return new A.uD(e.a,w,A.avI(d.c,e.c,f),v,u)},
bP0(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.aa(d.a,e.a,f)
w.toString
v=B.aa(d.b,e.b,f)
v.toString
return new A.eu(w,v)},
bAv(d,e,f){return new A.yb(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c2i(d){return!0},
c_Z(d){return D.a82},
bAw(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.pl(w,f,g,e)},
bCq(d,e,f){var w,v=A.kk(d.a,e.a,f,A.c_2(),x.dv)
v.toString
w=A.kk(d.b,e.b,f,A.c_4(),x.bN)
w.toString
return new A.Pm(v,w)},
bPM(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r5(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mK(t,w,v,u)},
bUV(d,e,f){var w,v,u,t=B.aa(d.a,e.a,f)
t.toString
w=B.aa(d.b,e.b,f)
w.toString
v=B.X(d.c,e.c,f)
u=B.r5(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.na(t,w,v,u)},
bPL(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pf(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bPJ(B.bsf(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r5(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kk(d.d,e.d,f,A.Zs(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kF(r,e.f,e.r,t,e.x,u,v,w,s)},
bUU(d,e,f){var w,v,u,t,s,r=B.aa(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pf(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bUS(B.bsf(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.X(d.a,e.a,f)
v=B.r5(d.b,e.b,f)
w=B.aa(d.c,e.c,f)
w.toString
s=A.kk(d.d,e.d,f,A.Zs(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
bPJ(d,e,f,g,h,i){return new A.a4X(f,!1,g,i,d,e)},
bPK(d){return C.d.am(d.e,1)},
bUS(d,e,f,g,h,i){return new A.ad6(f,!1,g,i,d,e)},
bUT(d){return C.d.am(d.e,1)},
bAs(d,e,f){var w,v=A.kk(d.a,e.a,f,A.c_1(),x.cm)
v.toString
w=A.kk(d.b,e.b,f,A.c_3(),x.es)
w.toString
return new A.M9(v,w,!0)},
bP_(d,e,f){return new A.Mk(d,e==null?4:e,f)},
a_F:function a_F(){},
Cq:function Cq(d,e){this.a=d
this.b=e},
th:function th(d,e){this.r=d
this.w=e},
pU:function pU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abf:function abf(){},
oZ:function oZ(d,e,f,g){var _=this
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
eu:function eu(d,e){this.a=d
this.b=e},
yb:function yb(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pl:function pl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acJ:function acJ(){},
Pm:function Pm(d,e){this.a=d
this.b=e},
mK:function mK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
na:function na(d,e,f,g){var _=this
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
a4X:function a4X(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ad6:function ad6(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
M9:function M9(d,e,f){this.a=d
this.b=e
this.c=f},
uC:function uC(){},
Mk:function Mk(d,e,f){this.a=d
this.b=e
this.c=f},
afV:function afV(){},
afZ:function afZ(){},
aj1:function aj1(){},
ajh:function ajh(){},
aji:function aji(){},
ajk:function ajk(){},
ajl:function ajl(){},
ak8:function ak8(){},
ak7:function ak7(){},
ak9:function ak9(){},
any:function any(){},
api:function api(){},
apj:function apj(){},
aqT:function aqT(){},
arv:function arv(){},
aru:function aru(){},
arw:function arw(){},
avE:function avE(){},
K8:function K8(){},
K9:function K9(d,e,f){this.c=d
this.d=e
this.a=f},
avG:function avG(d){this.a=d},
avF:function avF(d){this.a=d},
QN:function QN(d,e,f){this.c=d
this.e=e
this.a=f},
Xa:function Xa(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bTs(d,e,f){var w=B.ab(f),v=w.i("a9<1,jI>")
v=B.P(new B.a9(f,new A.aXf(),v),v.i("av.E"))
w=w.i("a9<1,c>")
w=B.P(new B.a9(f,new A.aXg(),w),w.i("av.E"))
return new A.abg(e,d,v,w,null)},
bMe(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5A(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tf(v,C.ap,C.w,new B.kf(1),v,v,v,v,C.bu,v)
u=new A.a_G(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aH(x.v))
u.bk()
return u},
abg:function abg(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aXf:function aXf(){},
aXg:function aXg(){},
a_G:function a_G(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VK$=h
_.aRW$=i
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
bcr:function bcr(d,e){this.a=d
this.b=e},
avH:function avH(){},
jI:function jI(d,e){this.a=d
this.b=e},
nB:function nB(d,e){this.a=d
this.b=e},
afW:function afW(){},
afX:function afX(){},
afY:function afY(){},
SI:function SI(){},
Ad:function Ad(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXh:function aXh(d){this.a=d},
aXi:function aXi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXj:function aXj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a46(d,e){var w=d==null?B.d4(C.B,1):d
return new A.a45(e!==!1,w)},
a_V:function a_V(){},
a45:function a45(d,e){this.a=d
this.b=e},
Mr:function Mr(){},
a47:function a47(){},
awb:function awb(){},
aCu:function aCu(d,e){this.a=d
this.b=e},
agf:function agf(){},
aje:function aje(){},
ajf:function ajf(){},
ajm:function ajm(){},
Ki:function Ki(){},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4b:function a4b(d){this.a=d},
a4c:function a4c(d){this.a=d},
a4d:function a4d(d){this.a=d},
Mm:function Mm(){},
Mn:function Mn(){},
a4g:function a4g(d){this.a=d},
Mp:function Mp(){},
Mq:function Mq(d){this.a=d},
a4a:function a4a(d){this.a=d},
a49:function a49(d){this.a=d},
Ml:function Ml(d){this.a=d},
a4e:function a4e(d){this.a=d},
a4f:function a4f(d){this.a=d},
Mo:function Mo(d){this.a=d},
FA:function FA(){},
aSz:function aSz(d){this.a=d},
aSA:function aSA(d){this.a=d},
aSB:function aSB(d){this.a=d},
aSC:function aSC(d){this.a=d},
aSD:function aSD(d){this.a=d},
aSE:function aSE(d){this.a=d},
aSF:function aSF(d){this.a=d},
aSG:function aSG(d){this.a=d},
aSH:function aSH(d){this.a=d},
aSI:function aSI(d){this.a=d},
aSJ:function aSJ(d){this.a=d},
aSK:function aSK(d){this.a=d},
aSL:function aSL(d){this.a=d},
NJ:function NJ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V_:function V_(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cS$=h
_.c=_.a=null},
bcw:function bcw(d,e){this.a=d
this.b=e},
bcu:function bcu(d){this.a=d},
bcv:function bcv(d,e){this.a=d
this.b=e},
bct:function bct(){},
bcx:function bcx(d){this.a=d},
btE(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.py(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T0:u
else w=g
v=f==null?A.avN(!1,u,0,u,!1,D.vM):f
w=new A.e7(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avN(!1,u,0,u,!1,D.vM):d,j,a0,i,s,!1,p)
w.aqe(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bQg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aa(d.x,e.x,f)
m.toString
w=A.bza(d.ay,e.ay,f)
v=A.bza(d.ch,e.ch,f)
u=B.aa(d.as,e.as,f)
u.toString
t=e.CW
s=A.kk(d.cy,e.cy,f,A.Zs(),x.S)
r=B.X(d.r,e.r,f)
q=B.r5(d.w,e.w,f)
p=A.kk(d.a,e.a,f,A.c_0(),x.cw)
p.toString
o=B.bCU(d.db,e.db,f)
o.toString
n=B.aa(d.dy.a,e.dy.a,f)
n.toString
return A.aIq(v,m,w,r,e.z,s,new A.ya(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NK(n),!1,u,o,!0,e.cx,p)},
avN(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
else w=e
return new A.a_O(h,w,g,i,f,!1)},
bza(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.X(v.a,u.a,f),s=B.r5(v.b,u.b,f),r=B.aa(v.c,u.c,f)
r.toString
r=A.bAw(t,A.kk(v.d,u.d,f,A.Zs(),x.S),s,r)
s=B.X(d.b,e.b,f)
u=B.r5(d.c,e.c,f)
v=B.aa(d.e,e.e,f)
v.toString
return A.avN(!1,s,v,u,e.a,new A.Kd(!1,r,w.c,!0))},
bMl(d,e,f){var w=B.X(d.c,e.c,f),v=B.r5(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
return new A.ms(e.a,e.b,w,v)},
c2j(d){return!0},
bvI(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kN)return A.bws(w.a,A.bti(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.di:w},
bXF(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kN)w=A.bws(v.a,A.bti(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.di}return A.axX(w,40)},
bFn(d,e,f,g,h){var w,v=A.bvI(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kN)w=A.bws(u.a,A.bti(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.di}u=A.axX(w,40)
return new A.Mk(v,h==null?4:h,u)},
c2h(d,e){return!0},
bZO(d,e){return Math.abs(d.a-e.a)},
c01(d,e){var w=J.d2(e,new A.bp9(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c_Y(d,e){return-1/0},
c_X(d,e){return d.a[e].b},
bGz(d){var w=J.d2(d,new A.bp6(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bGy(d){return A.axX(D.di,15)},
py:function py(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e7:function e7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aIr:function aIr(){},
NK:function NK(d){this.a=d},
a_O:function a_O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ms:function ms(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kd:function Kd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ya:function ya(d,e,f){this.a=d
this.b=e
this.c=f},
aIc:function aIc(d,e){this.a=d
this.b=e},
a48:function a48(){},
Ef:function Ef(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bp9:function bp9(d){this.a=d},
bp8:function bp8(d){this.a=d},
a5Y:function a5Y(){},
bp6:function bp6(){},
mP:function mP(){},
q2:function q2(d,e,f,g,h,i){var _=this
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
G0:function G0(d){this.a=d},
NL:function NL(d){this.a=d},
yU:function yU(d,e){this.a=d
this.b=e},
ag2:function ag2(){},
ag3:function ag3(){},
agg:function agg(){},
ajg:function ajg(){},
ajj:function ajj(){},
akW:function akW(){},
akX:function akX(){},
akY:function akY(){},
al_:function al_(){},
al0:function al0(){},
al1:function al1(){},
al2:function al2(){},
aph:function aph(){},
aqS:function aqS(){},
aIs:function aIs(d){this.a=d},
aIt:function aIt(){},
aIu:function aIu(){},
yV:function yV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akZ:function akZ(){},
aIv:function aIv(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIy:function aIy(){},
aIw:function aIw(d,e,f){this.a=d
this.b=e
this.c=f},
aIx:function aIx(d,e,f){this.a=d
this.b=e
this.c=f},
aIz:function aIz(){},
v9:function v9(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5X:function a5X(d,e,f){this.d=d
this.e=e
this.a=f},
aa3:function aa3(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i_=e
_.cV=f
_.fV=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bA=_.aE=_.ac=_.an=$
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
bsn(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bA(o.length,0,!1,x.i),m=B.ab(o),l=new B.a9(o,new A.avQ(),m.i("a9<1,M>")).km(0,new A.avR()),k=e-l,j=new A.avU(k,d,n)
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
new B.iL(o,m.i("iL<1>")).ar(0,new A.avS(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iL(o,m.i("iL<1>")).ar(0,new A.avT(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avQ:function avQ(){},
avR:function avR(){},
avU:function avU(d,e,f){this.a=d
this.b=e
this.c=f},
avV:function avV(d,e,f){this.a=d
this.b=e
this.c=f},
avS:function avS(d,e,f){this.a=d
this.b=e
this.c=f},
avT:function avT(d,e,f){this.a=d
this.b=e
this.c=f},
bti(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iL(w,B.ab(w).i("iL<1>")).ar(0,new A.aFz(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFz:function aFz(d,e){this.a=d
this.b=e},
az6(d,e){var w,v
if(e!=null){w=B.ab(e).i("a9<1,M>")
v=B.P(new B.a9(e,new A.az7(),w),w.i("av.E"))
return A.c_Q(d,new A.a0s(v,x.cX))}else return d},
az7:function az7(){},
bU1(d,e){var w=!0
if(d!==C.f_)if(!(d===C.ap&&e===C.w))w=d===C.ij&&e===C.aX
if(w)return D.Dy
else{w=!0
if(d!==C.hp)if(!(d===C.ij&&e===C.w))w=d===C.ap&&e===C.aX
if(w)return D.Dz
else return D.a8H}},
MQ:function MQ(d,e){this.a=d
this.b=e},
a0i:function a0i(d,e){this.a=d
this.b=e},
yY:function yY(d,e){this.a=d
this.$ti=e},
al9:function al9(){},
c_Q(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.aj().r)
for(w=B.b([],x.C),v=new B.ND(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.V(B.fq('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.NC(v,s)
v.CQ()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CQ()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.JE(d.aRS(r,p,p+n,!0),C.q,null)
t.push(q)
m=l.d
if(m!=null)q.hG(m)}p+=n
o=!o}}return l},
a0s:function a0s(d,e){this.a=d
this.b=0
this.$ti=e},
b_M:function b_M(){},
PG:function PG(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.dr=f
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
aSU:function aSU(d){this.a=d},
a41:function a41(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bt6(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bMo(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geh(v)===0){v=d.a.a
if(v.geh(v)===0){v=d.b.a
if(v.geh(v)===0){v=d.c.a
v=v.geh(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
axX(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNu()*w),C.d.b0(d.gFP()*w),C.d.b0(d.gJZ()*w))},
bAu(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bt7(d){var w=d.a,v=w?A.aXe(d.b):0,u=w?A.aXe(d.c):0,t=w?A.aXe(d.d):0
return new B.ai(v,u,t,w?A.aXe(d.e):0)},
bRv(d){var w
if(d.c===0){d.seT(null)
w=B.bZ(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bu_(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seT(f.mJ(0,g))}else{w=e==null?C.F:e
d.r=w.gp(w)
d.seT(null)}},
aXe(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kk(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kL(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kL(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c19(d,e,f){return C.d.b0(d+(e-d)*f)},
bws(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a5J.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.n
r=r?C.m:C.ao
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cS(t.x,C.m,s,18),C.b9],w))
v.push(B.aN(new B.eg(t.c,!1,s),1))
v=B.aq(v,C.C,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.L,B.j(t.d,1,C.ah,s,B.c_(u==null?C.h:u,22,C.Q),s,s,s)],w)
return B.bE(r,B.af(w,C.C,C.i5,C.i),q,s,C.aj,s,3)}}
A.uB.prototype={
Ll(d){return this.aRV(d)},
aRV(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Ll=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_summary",B.a4(["p_from",E.r_(d.a),"p_to",E.r_(d.b)],s,r),r),$async$Ll)
case 3:q=f
if(q==null){u=D.anD
w=1
break}if(x.f.b(q)){u=B.e8(q,s,r)
w=1
break}u=D.ao3
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Ll,v)},
Lk(d){return this.aRU(d)},
aRU(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lk=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_kpis",B.a4(["p_from",E.r_(d.a),"p_to",E.r_(d.b)],s,r),r),$async$Lk)
case 3:q=f
if(x.f.b(q)){u=B.e8(q,s,r)
w=1
break}u=D.anm
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lk,v)},
pz(d){return this.apX(d)},
apX(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$pz=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hu("sevdesk-sync",B.a4(["from",E.r_(d.a),"to",E.r_(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a4(B.fv(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$pz,v)},
Lg(d){return this.aRK(d)},
aRK(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lg=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hu("finance-export-pdf",B.a4(["from",E.r_(d.a),"to",E.r_(d.b)],s,s)),$async$Lg)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aA(J.a3(r,"base64"))
w=1
break}throw B.e(B.dy("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$Lg,v)}}
A.Dz.prototype={
FJ(d){return this.aj9(d)},
aj9(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FJ=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Ll(d),$async$FJ)
case 7:q=f
o=A.aDl(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FJ,v)},
FF(d){return this.aiV(d)},
aiV(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FF=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lk(d),$async$FF)
case 7:q=f
o=A.bOY(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FF,v)},
pz(d){return this.apY(d)},
apY(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pz=B.n(function(e,f){if(e===1){s.push(f)
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
q=B.a1(n)
p=r.Hk(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$pz,v)},
Lf(d){return this.aRJ(d)},
aRJ(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lf=B.n(function(e,f){if(e===1){s.push(f)
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
p=B.a1(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lf,v)},
Hk(d){if(d instanceof B.y5)return d
if(d instanceof B.lU){if(d.b==="42501")return new B.vu(d.a)
return new B.t_(d.a)}if(d instanceof B.MF)return new B.t_("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AE("Unerwarteter Fehler: "+B.i(d))},
$iaD7:1}
A.q4.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ve.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w6.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayw.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azD.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nU.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ca.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nV.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y8.prototype={
GG(d){return this.apW(0)},
apW(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GG=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dn)
s=t.r
r=s.aJ(0,$.x2(),x.P)
p.a=null
w=3
return B.l(B.oY(new A.aD2(p,t,r),x.H),$async$GG)
case 3:t.se4(0,f)
q=t.f
if(q.ghn(q)==null){q=$.brW()
s=s.e
s===$&&B.a()
s.co(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GG,v)},
Le(){return this.aRI()},
aRI(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$Le=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dn)
s=t.r.aJ(0,$.x2(),x.P)
q.a=null
w=3
return B.l(B.oY(new A.aD1(q,t,s),x.H),$async$Le)
case 3:t.se4(0,e)
r=t.f
u=r.ghn(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Le,v)}}
A.y9.prototype={
du(d,e){var w=null,v=e.au($.x2(),x.P),u=e.au($.brW(),x.aN)
return B.jq(B.dT(B.b([new B.fK("Finanzen","Dashboard",new A.aff(e.au($.brV(),x.b).gja(),new A.aDc(this,d,e),new A.aDd(this,d,e),new A.aDe(d),new A.aDf(d),new A.aDg(this,d,e,v),w),w),C.ay,new A.amu(v,w),C.c5,D.aea,C.c5,B.dt(u,new A.aDh(),new A.aDi(),new A.aDj(),!1,!0,!1,x.d,x.l)],x.p),C.cG,w,!1),C.m,new A.aDk(e))},
J9(d,e){return this.aKf(d,e)},
aKf(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J9=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.brV()
w=3
return B.l(e.aJ(0,s.ghM(),x.F).GG(0),$async$J9)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ghn(s)
t=d.P(x.q).f
t.bu(B.cf(null,null,null,null,null,C.r,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J9,v)},
B4(d,e){return this.avU(d,e)},
avU(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B4=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.l(e.aJ(0,$.brV().ghM(),x.F).Le(),$async$B4)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bu(D.avp)
w=1
break}t=B.pO(C.q,10)
w=4
return B.l($.bIE().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B4)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B4,v)},
B5(d,e,f){return this.aHX(d,e,f)},
aHX(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B5=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.l(B.j3(null,null,!0,null,new A.aDa(f,d),d,null,!0,!0,x.cJ),$async$B5)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nw(e.aJ(0,$.c3(),x.A))
p=f.a
o=f.b
n=$.dY()
m=n.ao(p)
n=n.ao(o)
w=8
return B.l(r.zl("finance_period",p,o,B.a4(["period_from",p.ei()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B5)
case 8:if(d.e!=null)d.P(x.q).f.bu(F.uP)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bu(B.cf(null,null,null,null,null,C.r,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B5,v)}}
A.aff.prototype={
u(d){var w=this,v=null,u=A.akj(C.m,F.hO,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akj(v,D.aai,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akj(v,D.a9q,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akj(C.ad,C.j6,C.ad,s?v:w.e,"PDF-Export")
return B.aq(B.b([u,C.b9,t,C.b9,r,C.b9,q,C.b9,A.akj(C.am,C.fh,C.am,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.O,0,v,v)}}
A.aki.prototype={
u(d){var w,v=this,u=null,t=B.aX(12),s=B.aX(12),r=B.aX(12),q=v.w
if(q==null)q=C.ao
q=B.d4(q,1)
w=v.r
if(w==null)w=C.h
return B.RY(B.dU(!1,C.Z,!0,t,B.eW(!1,s,!0,B.b6(u,B.cS(v.c,w,u,20),C.t,u,u,new B.b3(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ai,0,u,u,u,u,u,C.bC),u,v.d,u,u)}}
A.amu.prototype={
du(d,e){var w=null,v=this.e,u=$.dY(),t=x.p
return B.bE(w,B.af(B.b([D.a7M,C.L,B.aq(B.b([D.ab4,C.b3,B.aN(B.j(u.ao(v.a)+" \u2013 "+u.ao(v.b),w,w,w,B.A(C.h,16,C.Q),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.v,B.oy(C.d4,B.b([new A.Im("Monat",new A.beK(e),w,w),new A.Im("Jahr (YTD)",new A.beL(e),w,w),new A.Im("Zeitraum w\xe4hlen \u2026",new A.beM(this,d,e),D.a9v,w)],t),C.er,6,8)],t),C.C,C.f,C.i),w,w,C.D,w,3)},
Iy(d,e){return this.aGS(d,e)},
aGS(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iy=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bb(Date.now(),0,!1)
s=u.e
w=2
return B.l(E.atD(new A.beJ(),d,B.bJ(B.aU(t)-5,1,1,0,0,0,0),new B.lu(s.a,s.b,x.bz),B.bJ(B.aU(t)+1,1,1,0,0,0,0),C.ef),$async$Iy)
case 2:r=g
if(r!=null)e.aJ(0,$.x2().ghM(),x.V).wn(0,new E.lz(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iy,v)}}
A.Im.prototype={
u(d){var w=null,v=B.aX(9999),u=B.aX(9999),t=B.aX(9999),s=B.d4(C.ao,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cS(p,C.h,w,14),C.b9],r))
q.push(B.j(this.c,w,w,w,B.A(C.h,13,C.Q),w,w,w))
return B.dU(!1,C.Z,!0,v,B.eW(!1,u,!0,B.b6(w,B.aq(q,C.l,C.f,C.O,0,w,w),C.t,w,w,new B.b3(w,w,s,t,w,w,C.G),w,w,w,w,C.kN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ai,0,w,w,w,w,w,C.bC)}}
A.IQ.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jV(new A.bkq(this)),C.c5,D.a7R,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bE(s,B.aq(B.b([D.abs,C.aD,B.aN(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.A(C.u,14,C.k),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.ai,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afd(t.a,t.b,t.c==="revenue",t.d,s),C.L],r))}q.push(B.af(w,C.l,C.f,C.i))}return B.af(q,C.ab,C.f,C.i)}}
A.afd.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aN:C.ai,s=B.d4(u?C.m:C.ao,1),r=B.aX(4),q=w.c
r=B.b6(C.a_,B.j(C.c.a_(q,0,1),v,v,v,B.c_(C.h,14,C.p),v,v,v),C.t,v,v,new B.b3(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ah,v,B.A(C.h,14,C.Q),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aN(B.af(B.b([q,B.j(t,v,v,v,B.A(C.u,12,C.k),v,v,v)],s),C.C,C.f,C.i),1)
q=$.dL().ao(w.f)
return B.bE(v,B.aq(B.b([r,C.aD,t,B.j(q,v,v,v,B.A(u?C.am:C.h,15,C.Q),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.e8,v,3)}}
A.Hu.prototype={
u(d){var w=null
return B.bE(C.ad,B.aq(B.b([D.ac_,C.aD,B.aN(B.j(this.c,w,w,w,B.A(C.h,14,C.k),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.fH,w,C.D,w,3)}}
A.a5K.prototype={
du(d,e){return B.dt(e.au($.bL5(),x.e),new A.aI9(),new A.aIa(),new A.aIb(),!1,!0,!1,x.X,x.l)}}
A.HO.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.asT,C.v,B.jV(new A.bci(v,q,100-t.w.a,w,p)),C.v,new A.ajC(u),C.ay,D.asS,C.v,new A.ag1(t,u),C.ay,D.asN,C.v,B.bD(u,!0,u,B.mJ(u,B.bE(u,new A.T5(t,220,u),u,u,C.D,u,3),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcj(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.K,u),C.ay,D.asI,C.v,B.bD(u,!0,u,B.mJ(u,new A.Tg(t,200,!1,u),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bck(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.K,u),C.ay,D.asM,C.v,new A.ali(t,u),C.ay,D.asK,C.v,new A.ahG(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.ay,D.asP,C.v,new A.aqP(t,u)],s))
return B.af(r,C.ab,C.f,C.i)}}
A.ajC.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.A(C.u,11,C.k).dM(1.35),w,w,w)}}
A.akP.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ad:C.am
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bcl(m,d):l
r=x.p
q=B.b([B.aN(B.j(m.c.toUpperCase(),l,l,l,B.A(C.u,10,C.p).fE(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d4(C.ad,0.8)
n=B.aX(4)
q.push(B.b6(l,B.j("Ziel "+p,l,l,l,B.A(C.ad,9,C.p),l,l,l),C.t,l,l,new B.b3(l,l,o,n,l,l,C.G),l,l,l,l,C.n3,l,l,l))}q=B.b([B.aq(q,C.l,C.f,C.i,0,l,l),C.b_,new A.a41(C.B3,C.e1,B.j(m.d,l,l,l,B.c_(w,22,C.p),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ah,l,B.A(C.u,10,C.aG),l,l,l))
q.push(C.cy)
q.push(B.aq(B.b([new A.TR("Vormonat",m.r,l),C.cx,new A.TR("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.cy)
q.push(B.aN(new A.Xl(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.mJ(l,B.bE(l,B.af(q,C.C,C.f,C.i),l,l,C.ds,l,3),C.a9,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.K,l)}}
A.TR.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aX(4)
return B.b6(r,B.j(this.c+" \u2014",r,r,r,B.A(C.u,9,C.p),r,r,r),C.t,r,r,new B.b3(C.ao,r,r,q,r,r,C.G),r,r,r,r,C.n3,r,r,r)}w=q>=0
v=w?C.am:C.ad
u=v.iH(0.12)
t=B.d4(v,0.7)
s=B.aX(4)
return B.b6(r,B.aq(B.b([B.cS(w?F.a8N:D.a8M,v,r,10),F.av6,B.j(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.A(v,9,C.p),r,r,r)],x.p),C.l,C.f,C.O,0,r,r),C.t,r,r,new B.b3(u,r,t,s,r,r,C.G),r,r,r,r,C.n3,r,r,r)}}
A.Xl.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eu(v,j[v]))
u=C.b.km(j,new A.bjJ())
t=C.b.km(j,new A.bjK())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bjL(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a46(k,!1)
w=B.b([A.aIq(k,2,A.avN(!1,C.m.iH(0.16),0,k,!0,D.vM),C.m,0.35,k,D.Dp,k,!0,!1,!0,!1,D.EQ,!1,10,D.Yd,!0,C.lf,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NJ(A.btE(k,k,k,D.ak2,l,D.Bh,D.Dk,D.Dq,w,D.aee,k,m,k,n,D.Xz,D.ak3,D.a85),C.au,C.ae,k,k)}}
A.T5.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aHT
w=C.b.fG(p,0,new A.b3i())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.avW(B.b([A.a_Q(q,q,D.AI,q,C.m,q,q,q,r.b,6),A.a_Q(q,q,D.AI,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.ch(A.bzb(A.avP(q,q,u,q,q,A.a46(q,!1),q,new A.yb(!0,!0,q,new A.b3j(),A.Zn(),!1,q,A.atn(),A.Zn()),q,v,q,q,new A.uD(!0,new A.oZ(16,q,new A.pU(!0,new A.b3k(this),46,q),!0),D.kg,D.kg,new A.oZ(16,q,new A.pU(!0,new A.b3l(p),26,q),!0)))),this.d,q)},
aJy(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.Tg.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.a9(v,new A.b45(),w),x.i)
C.b.M(o,new B.a9(u,new A.b46(),w))
t=C.b.fG(o,0,new A.b47())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.avW(B.b([A.a_Q(q,q,q,q,C.m,q,q,q,v[s],14),A.a_Q(q,q,q,q,C.am,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ch(A.bzb(A.avP(q,q,n,q,q,A.a46(q,!1),q,D.Dq,q,o,q,q,new A.uD(!0,D.kg,D.kg,D.kg,new A.oZ(16,q,new A.pU(!0,new A.b48(p),26,q),!0)))),this.d,q)
return this.e?r:B.bE(q,r,q,q,C.D,q,3)}}
A.ali.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aHS
w=new B.a9(l,new A.bcP(),B.ab(l).i("a9<1,M>")).km(0,new A.bcQ())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.A(C.h,14,C.p),m,m,m)
p=$.dL()
o=r.d
n=new B.aV(4,4)
o=B.b([B.aq(B.b([new B.nS(1,C.fg,B.af(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ao(r.f),m,m,m,B.A(C.u,12,C.aG),m,m,m)],v),C.C,C.f,C.i),m),C.b3,B.j(p.ao(o),m,m,m,B.c_(C.h,16,C.p),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.cy,new B.CT(new B.d3(n,n,n,n),C.bK,B.a5Z(C.ao,8,C.d.c4(o/w,0,1),D.Aw),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zq(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.bE(m,B.af(u,C.l,C.f,C.i),m,m,C.D,m,3)}}
A.ahG.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aN(new A.BG("Aktive Kunden",""+s,u),1)
w=B.aN(new A.BG("K\xe4ufe",""+t.a,u),1)
v=$.dL()
return B.bE(u,B.aq(B.b([s,w,B.aN(new A.BG("\xd8-Warenkorb",v.ao(t.d),u),1),B.aN(new A.BG("Umsatz/Kunde",v.ao(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.BG.prototype={
u(d){var w=null
return B.af(B.b([B.j(this.c.toUpperCase(),w,w,w,B.A(C.u,10,C.p).fE(0.6),w,w,w),C.c6,B.j(this.d,w,w,w,B.c_(C.h,20,C.p),w,w,w)],x.p),C.C,C.f,C.O)}}
A.aqP.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.a9(q,new A.blH(),B.ab(q).i("a9<1,M>")).km(0,new A.blI()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aV(4,4)
t=B.b([B.aq(B.b([new B.nS(1,C.fg,B.j(u.b,1,C.ah,r,B.A(C.h,13,C.p),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.A(C.u,12,C.Q),r,r,r),B.j($.dL().ao(t),r,r,r,B.A(C.h,13,C.p),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.b_,new B.CT(new B.d3(s,s,s,s),C.bK,B.a5Z(C.ao,6,C.d.c4(t/p,0,1),D.Aw),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zq(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.L)
C.b.M(n,t)}return B.bE(r,B.af(n,C.l,C.f,C.i),r,r,C.D,r,3)}}
A.wo.prototype={
u(d){var w=null
return B.bE(w,B.j(this.c,w,w,w,B.A(C.u,13,C.k),w,w,w),C.ai,w,C.D,w,3)}}
A.ag1.prototype={
du(d,e){return B.dt(e.au($.by9(),x.fM),new A.b1L(this,d,e),new A.b1M(),new A.b1N(),!1,!0,!1,x.h,x.l)}}
A.AM.prototype={
X(){return new A.SK()},
aWQ(){return this.d.$0()}}
A.SK.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bb(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fE(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.z(x.N,x.bO)
for(t=0;t<8;++t){s=D.H4[t].a
if(v)r=""
else{r=B.bx(J.a3(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.b9(r,".",",")}u.m(0,s,new B.bH(new B.cR(r,C.bJ,C.aS),$.ae()))}q.e!==$&&B.b5()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c5(v,v.r,v.e,B.k(v).i("c5<2>"))
while(v.t()){w=v.d
w.R$=$.ae()
w.S$=0}this.ap()},
rg(d){var w=this.e
w===$&&B.a()
w=C.c.bi(w.h(0,d).a.a)
w=B.b9(w,".","")
w=B.k_(B.b9(w,",","."))
return w==null?0:w},
HX(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HX=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b1C(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZg("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ei(),0,10),"p_cash_and_bank",q.rg("cash_and_bank"),"p_receivables",q.rg("receivables"),"p_inventory_value",q.rg("inventory_value"),"p_other_current_assets",q.rg("other_current_assets"),"p_fixed_assets",q.rg("fixed_assets"),"p_current_liabilities",q.rg("current_liabilities"),"p_long_term_liabilities",q.rg("long_term_liabilities"),"p_equity",q.rg("equity")],x.N,x.aU))
w=7
return B.l(n,$async$HX)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWQ()
o=q.c
o.toString
B.bh(o,!1).fb()
q.c.P(x.q).f.bu(D.avq)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bu(B.cf(null,null,null,null,null,C.r,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b1D(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HX,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.c_(C.h,18,C.p),r,r,r),p=s.f?r:new A.b1F(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.hE(D.ab6,B.j("Stichtag: "+C.c.a_(o.ei(),0,10),r,r,r,r,r,r,r),p,r),C.v],w)
for(v=0;v<8;++v){o=D.H4[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.f8(r,C.aU,!1,r,!0,C.r,r,B.fl(),u.h(0,o.a),r,r,r,r,r,2,new B.cd(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a9,!0,r,!0,r,!1,r,C.b0,r,r,r,r,C.il,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a1,r,r,r,r),C.L],w))}p.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.A(C.u,11,C.k),r,r,r))
p=B.ch(B.f7(B.af(p,C.ab,C.f,C.O),r,C.a5),r,380)
o=s.f
u=B.dD(C.cT,r,r,o?r:new A.b1G(d),r,r)
o=o?r:s.gaDj()
t=B.dQ(C.m,C.h,r,r,r,r,r)
return B.lq(B.b([u,B.dP(s.f?F.YK:C.ep,o,t)],w),C.n,p,q)}}
A.bc.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zq(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ez(B.H(this))^B.bH3(this.gbI()))>>>0},
j(d){B.bAq()
return B.H(this).j(0)}}
A.Ke.prototype={
X(){return new A.SL(B.z(x.S,x.I),new A.avZ(B.z(x.x,x.T)),null,null)}}
A.SL.prototype={
u(d){var w,v=this,u=v.a1t(),t=v.CW
t.toString
t=v.a1u(t.av(0,v.ghD().gp(0)))
w=v.a1u(u)
v.a.toString
return new A.K9(new A.a_P(t,w,null),u,null)},
a1u(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.avW(s.c,s.d,!1,r,s.a))}return d.aOL(w)},
a1t(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uk(t.ch)
if(r)s=w.a
r=t.y
t=t.aPG(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOM(A.bso(!1,!0,!0,v.d,v.c,u.gart(),v.f,v.e))}return t},
aru(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf_()||e==null||e.a==null){w=v.cy
v.J(w.gaOa(w))
return}v.J(new A.b1Q(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1t(),new A.b1R(w)))}}
A.nC.prototype={
UU(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avP(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPG(d,e){return this.UU(null,null,d,e)},
aOM(d){return this.UU(null,d,null,null)},
aOL(d){return this.UU(d,null,null,null)},
WQ(d,e,f){var w,v,u,t=A.kk(d.ch,e.ch,f,A.c_5(),x.dB),s=B.aa(d.CW,e.CW,f),r=A.bAx(d.d,e.d,f),q=A.bCq(d.e,e.e,f),p=A.bAv(d.c,e.c,f),o=e.a
o=A.a46(B.a05(d.a.b,o.b,f),o.a)
w=B.aa(d.y,e.y,f)
v=B.aa(d.x,e.x,f)
u=B.aa(d.z,e.z,f)
r=A.avP(e.cx,B.X(d.as,e.as,f),t,e.cy,u,o,A.bAs(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avO.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fy.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.a9(v,new A.avX(),B.ab(v).i("a9<1,M>")).km(0,new A.avY())
v=v.length
return w+(v-1)*this.d},
gbI(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.id.prototype={
gbI(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mr.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_M.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_R.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acH.prototype={
L(){return"TooltipDirection."+this.b}}
A.a_S.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Cr.prototype={
gbI(){return[this.a,this.b,C.cS,C.w,null]}}
A.Kf.prototype={}
A.a_T.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xk.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.ag_.prototype={}
A.ag4.prototype={}
A.ag5.prototype={}
A.ag7.prototype={}
A.ag8.prototype={}
A.ag9.prototype={}
A.aga.prototype={}
A.agb.prototype={}
A.agc.prototype={}
A.avZ.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ue(0,0,!1)
v=new A.yY(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ue(t,u,!0)}w=null
try{w=C.b.qe(d,new A.aw_())}catch(s){return new A.ue(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ag6.prototype={}
A.aw0.prototype={
i5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_z(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abA(t,A.bsn(w,t.a),u)
l.y=u
l.aR1(e,u,f)
l.al4(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRa(d,e,m,t,r,s,n,o,f)}}},
abA(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dy("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iL(p,B.ab(p).i("iL<1>")).ar(0,new A.aw1(t,q,r,s))
w.push(new A.a4M(q))}return w},
aR1(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
if(a1!==a2){if(a1>a2){a3=b3.dE(Math.max(s,a2),b5,b8)
a4=B.Pi(h,Math.min(b3.dE(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dE(Math.min(t,a2),b5,b8)
a4=B.Pi(h,a5,g,Math.max(b3.dE(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gp(0)
k.seT(null)
a6=b3.f.eo()
u.drawRRect(B.mm(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dE(f,b5,b8)
e=a8.b
b0=b3.dE(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.aZ(u.save())
u.clipRect(B.dH(b1),$.oR()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mm(a4),a6)
a6.delete()
u.restore()
b3.aR8(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.geh(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cB($.aj().r)
n=new B.ha(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hG(k)
v.fU(A.az6(b2,o.r),b3.r)}}}},
aRa(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.At(a5,a5,a5,a5,B.d8(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.ln().Zz(a8,a7.b),a7.a),C.cS,C.w,a5,b6.c,C.bu)
w.afi(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbS(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dE(s,a6,b6)
q=b4.a
p=a4.dE(q,a6,b6)
o=b1.b
n=u+o.ger()
m=v+4+(o.gcY(0)+o.gd_(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aDF)j=v===D.Zq&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZA(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.Fo(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.ln().K8(new B.F(v,t),d).b
s=$.ln()
q=w.b
p=q.c
q=q.a.c
a0=s.K8(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahB()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vw(d,new A.aw2(a4,a9,e,w,new B.m(q.a-p/2,s.b+o.b-a0.b+r)),new B.m(e.a,e.b),new B.m(0,r),new B.F(v,t))},
aR8(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geh(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dE(w,j,k)
u=e.a
t=n.dE(u,j,k)
w=u<w
u=w?new B.aV(i.z,i.Q):C.a0
s=w?new B.aV(i.x,i.y):C.a0
r=w?C.a0:new B.aV(i.e,i.f)
w=w?C.a0:new B.aV(i.r,i.w)
q=B.Pi(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dE(v,j,k),i.b)
r=n.dE(t,j,k)
v=t<v
t=v?C.a0:new B.aV(i.z,i.Q)
p=v?C.a0:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a0
q=B.Pi(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a0)}else q=B.buk(w,n.dE(v,j,k),u,n.dE(t,j,k),C.a0)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
Wb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abA(b2,A.bsn(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dE(k,b2,b3)
m=b0[q].c[o]
g=a7.dE(m.a+m.x.b,b2,b3)}else{h=a7.dE(j+m.x.b,b2,b3)
g=a7.dE(b0[q].c[o].b,b2,b3)}a7.dE(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dE(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dE(a4.a,b2,b3)
a6=a7.dE(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a_T(d,q,a0,o,a2,a1,new A.eu(d.a,v),new B.m(n,t))}}return null}}
A.a4M.prototype={}
A.a_P.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aw0()
t.a0L()
$.aj()
w=B.aS()
w.b=C.bg
t.f=w
w=B.aS()
w.b=C.aV
t.r=w
w=B.aS()
w.b=C.bg
w.r=C.n.gp(0)
t.w=w
w=B.aS()
w.b=C.aV
w.r=C.F.gp(0)
w.c=1
t.x=w
t=new A.a9R(this.d,v,u,t,d,C.bo,new B.bp(),B.aH(x.v))
t.bk()
t.Yv(v.cy)
t.aer()
return t},
by(d,e){e.sij(0,this.d)
e.sYg(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9R.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYg(d){var w=this
if(w.i_.k(0,d))return
w.i_=d
w.a0j(d.cy)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdv(0),s=t.a
J.aZ(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fV.i5(w,new A.a0i(t,v),new A.vq(u.aC,u.i_,u.cV,x.Q))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.Kf(w.fV.Wb(d,v,new A.vq(w.aC,w.i_,w.cV,x.Q)))}}
A.a_F.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cq.prototype={
L(){return"AxisSide."+this.b}}
A.th.prototype={}
A.pU.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abf.prototype={
gbI(){return[!1,0,0,0]}}
A.oZ.prototype={
gbI(){return[this.b,this.a,this.c,!0]}}
A.uD.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eu.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eu))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yb.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pl.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acJ.prototype={
gbI(){return[this.a,this.b]}}
A.Pm.prototype={
gbI(){return[this.a,this.b]}}
A.mK.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.na.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kF.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l4.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a4X.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ad6.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.M9.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uC.prototype={}
A.Mk.prototype={
acZ(d,e,f){var w,v
$.aj()
w=B.aS()
v=this.a
w.r=v.gp(v)
w.b=C.bg
d.iP(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afV.prototype={}
A.afZ.prototype={}
A.aj1.prototype={}
A.ajh.prototype={}
A.aji.prototype={}
A.ajk.prototype={}
A.ajl.prototype={}
A.ak8.prototype={}
A.ak7.prototype={}
A.ak9.prototype={}
A.any.prototype={}
A.api.prototype={}
A.apj.prototype={}
A.aqT.prototype={}
A.arv.prototype={}
A.aru.prototype={}
A.arw.prototype={}
A.avE.prototype={
Mh(d,e,f,g,h,i){return new B.iw(this.aUT(d,e,f,g,h,i),x.g4)},
aUS(d,e,f,g){return this.Mh(d,e,f,!0,g,!0)},
aUT(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mh(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.ln().aiH(s,u,v,w)
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
A.K8.prototype={
a0L(){var w,v=this
$.aj()
w=B.aS()
w.b=C.aV
v.a=w
w=B.aS()
w.b=C.bg
v.b=w
w=B.aS()
w.b=C.bg
v.e=w
w=B.aS()
w.b=C.aV
v.c=w
v.d=B.aS()},
i5(d,e,f){var w=this
w.a_A(d,e,f)
w.aQY(e,f)
w.aR7(e,f)
w.aR6(e,f)},
aR6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.ln().Om(w.a,a1.r-a1.f)
u=$.bry().Mh(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.m(o,0)
m=new B.m(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kU(n,m)
if(j!=null){p.r=C.B.gp(0)
p.seT(j.mJ(0,i))}else{if(k==null)k=C.F
p.r=k.gp(k)
p.seT(a0)}k=l.c
p.c=k
if(k===0){p.seT(a0)
k=B.bZ(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dl(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.ln().Om(w.b,a1.y-a1.x)
u=$.bry().Mh(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dE(q,w,a4)
n=new B.m(0,e)
m=new B.m(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kU(n,m)
if(k!=null){q.r=C.B.gp(0)
q.seT(k.mJ(0,i))}else{if(p==null)p=C.F
q.r=p.gp(p)
q.seT(a0)}p=f.c
q.c=p
if(p===0){q.seT(a0)
p=B.bZ(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dl(n,m,d.a,f.d)}},
aQY(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aR7(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.kU(new B.m(n.fc(t.a,m,e),0),new B.m(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.B.gp(0)
r.seT(p.mJ(0,s))}else{r.r=(q==null?C.F:q).gp(0)
r.seT(null)}o=n.e.eo()
w.drawRect(B.dH(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.K)(l),++u){t=l[u]
s=B.kU(new B.m(0,n.dE(t.a,m,e)),new B.m(w,n.dE(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.B.gp(0)
v.seT(q.mJ(0,s))}else{v.r=(r==null?C.F:r).gp(0)
v.seT(null)}o=n.e.eo()
j.drawRect(B.dH(s),o)
o.delete()}},
aR5(d,e,f){var w,v
this.a_A(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad_(d,e,f,w)
if(v.b.length!==0)this.aRc(d,e,f,w)},
ad_(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=f.dE(o,a1,a0)
m=new B.m(0,n)
o=f.dE(o,a1,a0)
l=new B.m(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kU(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seT(j.mJ(0,i))}else{if(k==null)k=C.F
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.bZ(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dl(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=C.d.al(o,n.gbS(n).eE(0,2))
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
o=C.d.al(o,n.gbS(n).eE(0,2))
k=f.d
k===$&&B.a()
s.ad0(0,n,new B.m(h,o),k)}}},
aRc(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.kU(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seT(j.mJ(0,i))}else{if(k==null)k=C.F
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.bZ(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dl(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=n.gbS(n).eE(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
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
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.ad0(0,n,new B.m(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dE(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZA(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.K9.prototype={
gakq(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakr(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gaks(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gako(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akL(d){var w,v=this,u=null,t=v.d,s=A.bt7(t.d),r=t.a
r=r.a&&A.bMo(r.b)?r.b:u
w=B.b([B.b6(u,v.c,C.t,u,u,new B.b3(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.avG(w)
if(v.gakq())C.b.ht(w,s.$1(!0),new A.Ad(D.AD,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gaks())C.b.ht(w,s.$1(!0),new A.Ad(D.mm,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakr())C.b.ht(w,s.$1(!0),new A.Ad(D.AE,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gako())C.b.ht(w,s.$1(!0),new A.Ad(D.dC,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.jV(new A.avF(this))}}
A.QN.prototype={
X(){return new A.Xa(new B.bf(null,x.eF))}}
A.Xa.prototype={
awT(){switch(this.a.c.a){case 0:return C.e0
case 1:return C.fA
case 2:return C.e1
case 3:return C.fB}},
axo(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
awV(d){this.a.toString
return},
aA(){this.aO()
$.cv.x1$.push(this.ga3V())},
be(d){this.bE(d)
$.cv.x1$.push(this.ga3V())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axo()
return B.buU(B.b_l(0,B.b6(v.awT(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.q)}}
A.abg.prototype={
bm(d){return A.bMe(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_G.prototype={
hj(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.q)},
hT(d){if(this.B===C.aI)return this.xW(d)
return this.acB(d)},
aJI(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8v(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a8u(d,B.hw())
switch(this.B.a){case 0:return d.c1(new B.F(w.a,w.b))
case 1:return d.c1(new B.F(w.b,w.a))}},
a8u(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aI?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fW(u,null)
break
case 1:q=B.fW(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8v(p)
t=Math.max(t,o.aJI(p))
m=r.aG$}return new A.bcr(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8u(o,B.ml()),m=n.a,l=n.b
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
q=s.b-p.a8v(r==null?B.V(B.Z("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c4(w))):r)/2
switch(p.B.a){case 0:r=new B.m(q,0)
break
case 1:r=new B.m(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e9(d,e){return this.xX(d,e)},
aN(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uT(d,e)},
l(){this.a2.sbh(0,null)
this.anH()}}
A.bcr.prototype={}
A.avH.prototype={}
A.jI.prototype={
gbI(){return[this.a,this.b]}}
A.nB.prototype={}
A.afW.prototype={}
A.afX.prototype={
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
A.afY.prototype={}
A.SI.prototype={
l(){var w,v,u
for(w=this.VK$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.Ad.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghF(){switch(this.c.a){case 0:return C.e1
case 1:return C.fB
case 2:return C.e0
case 3:return C.fA}},
gaZt(){var w=this.d,v=A.bt7(w.d),u=A.bAu(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ad(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ad(0,new B.ai(u.a,0,u.c,0))}},
gaho(){var w=this.d,v=A.bAu(w.a),u=A.bt7(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.ger()+v.ger()}},
aVC(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.ln().Om(d,f-e)
w=p.c
v=w!==D.mm
if((!v||w===D.dC)&&p.d instanceof A.nC){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bsn(u,d)
w=new B.iL(t,B.ab(t).i("iL<1>"))
s=w.giC(w).f0(0,new A.aXh(u),x.W).fX(0)}else{r=$.bry()
w=!v||w===D.dC
v=p.d
q=r.aUS(w?v.w:v.z,o,f,e)
v=B.o6(q,new A.aXi(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.k(v).i("t.E"))}w=B.ab(s).i("a9<1,nB>")
w=B.P(new B.a9(s,new A.aXj(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b6(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mm
u=!v
t=!u||w===D.dC
s=j.e
r=t?s.a:s.b
t=j.ghF()
s=!u||w===D.dC?C.a5:C.aI
q=B.b([],x.p)
if(w===D.AD||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dC?r:j.gow().c.c
p=!u||w===D.dC?j.gow().c.c:r
o=j.gaZt()
n=!u||w===D.dC?C.aI:C.a5
j.gaho()
m=j.gaho()
l=!u||w===D.dC
k=j.d
l=l?k.f:k.x
u=!u||w===D.dC?k.r:k.y
q.push(B.b6(i,A.bTs(new A.avH(),n,j.aVC(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AE||w===D.dC)j.gow()
return new B.eR(t,i,i,B.bP1(q,C.l,s,i,C.f,C.O,0,i,i,C.c7),i)}}
A.a_V.prototype={
gbI(){return[this.a,this.b]}}
A.a45.prototype={
gbI(){return[this.a,this.b]}}
A.Mr.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a47.prototype={
gaaV(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.awb.prototype={}
A.aCu.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.agf.prototype={}
A.aje.prototype={}
A.ajf.prototype={}
A.ajm.prototype={}
A.Ki.prototype={
i5(d,e,f){}}
A.vq.prototype={}
A.hi.prototype={
gdI(){return null},
gaf_(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.Mq
if(w)return!0
return!(v instanceof A.Mn)&&!(v instanceof A.Mm)&&!(v instanceof A.Mo)&&!(v instanceof A.Ml)&&!w&&!(v instanceof A.Mp)}}
A.a4b.prototype={
gdI(){return this.a.b}}
A.a4c.prototype={
gdI(){return this.a.b}}
A.a4d.prototype={
gdI(){return this.a.b}}
A.Mm.prototype={}
A.Mn.prototype={}
A.a4g.prototype={
gdI(){return this.a.b}}
A.Mp.prototype={}
A.Mq.prototype={
gdI(){return this.a.b}}
A.a4a.prototype={
gdI(){return this.a.b}}
A.a49.prototype={
gdI(){return this.a.b}}
A.Ml.prototype={
gdI(){return this.a.b}}
A.a4e.prototype={
gdI(){return this.a.gdI()}}
A.a4f.prototype={
gdI(){return this.a.gdI()}}
A.Mo.prototype={
gdI(){return this.a.gdI()}}
A.FA.prototype={
Yv(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aer(){var w=this,v=null,u=w.ac=B.bu0(v,v)
u.ay=new A.aSz(w)
u.ch=new A.aSA(w)
u.CW=new A.aSB(w)
u.cy=new A.aSC(w)
u.cx=new A.aSD(w)
u=w.aE=B.Go(v,-1,v)
u.B=new A.aSE(w)
u.a3=new A.aSF(w)
u.V=new A.aSG(w)
u=w.bA=B.a65(v,w.a2,v)
u.p3=new A.aSH(w)
u.p4=new A.aSI(w)
u.RG=new A.aSJ(w)},
cv(){var w=x.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dC(d){return new B.F(d.b,d.d)},
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
w.rD(d)}else if(x.gJ.b(d))v.l6(new A.a4f(d))},
gML(d){return new A.aSK(this)},
gMN(d){return new A.aSL(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdI()
v=w!=null?u.Zt(w):null
u.V.$2(d,v)
u.a3=C.bo},
gKE(d){return this.a3},
gFi(){var w=this.an
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.fg(0)},
$iji:1}
A.NJ.prototype={
X(){return new A.V_(B.b([],x.r),B.z(x.S,x.I),new A.aIs(B.z(x.y,x.dj)),null,null)}}
A.V_.prototype={
u(d){var w,v=this,u=v.a3X(),t=v.CW
t.toString
t=v.aau(t.av(0,v.ghD().gp(0)))
w=v.aau(u)
v.a.toString
return new A.K9(new A.a5X(t,w,null),u,null)},
aau(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ab(w).i("a9<1,e7>")
w=B.P(new B.a9(w,new A.bcw(this,d),v),v.i("av.E"))
return d.aPD(w,this.cy)},
a3X(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uk(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPS(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPh(new A.Ef(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayc(),t.c,t.d))}return r},
ayd(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf_())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bcu(v))
return}v.J(new A.bcv(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3X(),new A.bcx(w)))}}
A.py.prototype={
WQ(d,e,f){var w,v,u,t,s,r,q=B.aa(d.f,e.f,f),p=B.aa(d.r,e.r,f),o=B.aa(d.w,e.w,f),n=B.aa(d.x,e.x,f),m=B.aa(d.y,e.y,f),l=B.aa(d.z,e.z,f),k=B.X(d.as,e.as,f),j=e.a
j=A.a46(B.a05(d.a.b,j.b,f),j.a)
w=A.bAs(d.at,e.at,f)
v=A.bAv(d.c,e.c,f)
u=A.bAx(d.d,e.d,f)
t=A.bCq(d.e,e.e,f)
s=A.kk(d.ch,e.ch,f,A.c1b(),x.cz)
s.toString
r=A.kk(d.CW,e.CW,f,A.c1a(),x.J)
r.toString
u=A.btE(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UV(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.btE(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPS(d,e,f,g){return this.UV(null,null,d,e,f,g,null)},
aPh(d){var w=null
return this.UV(w,d,w,w,w,w,w)},
aPD(d,e){var w=null
return this.UV(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e7.prototype={
aqe(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aIr())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.fK))continue
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
ach(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aIq(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPo(d){return this.ach(d,null)},
aPq(d){return this.ach(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NK.prototype={
gbI(){return[this.a]}}
A.a_O.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.ms.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kd.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.ya.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aIc.prototype={
L(){return"LabelDirection."+this.b}}
A.a48.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ef.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a5Y.prototype={
gbI(){return[4,C.hJ,16,D.xj,0,120,A.c1d(),!1,!1,!1,0,C.A,A.c1c()]}}
A.mP.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q2.prototype={}
A.rl.prototype={
gbI(){return[this.a,this.b,C.cS,C.w,null]}}
A.ti.prototype={
gbI(){return[this.a,this.b]}}
A.G0.prototype={
gbI(){return[this.a]}}
A.NL.prototype={}
A.yU.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.ag2.prototype={}
A.ag3.prototype={}
A.agg.prototype={}
A.ajg.prototype={}
A.ajj.prototype={}
A.akW.prototype={}
A.akX.prototype={}
A.akY.prototype={}
A.al_.prototype={}
A.al0.prototype={}
A.al1.prototype={}
A.al2.prototype={}
A.aph.prototype={}
A.aqS.prototype={}
A.aIs.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xK
u=new A.yY(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yV(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aIt())}catch(p){return D.xK}v=null
try{v=C.b.qe(w.a,new A.aIu())}catch(p){return D.xK}o=v.a
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
if(f<m)m=f}e=new A.yV(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yV.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.akZ.prototype={}
A.aIv.prototype={
i5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaV(0)){v=a3.b
u=v.a
v=v.b
$.aj()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aS())
a3.aOh(new B.G(0,0,u,v))}d.a_z(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aR3(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aR_(a3,q,a4)
d.aR4(a3,q,a4)
d.al3(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dy("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v9(q,i,j,k))}}d.aRb(a3,s,a4)
if(w.gaaV(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aR9(a2,a3,v,f,new A.G0(g),a4)}},
aR_(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bt6(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.Z2(o,e,u,f)
s=p.aiz(o,e,t,u,f)
r=p.Z4(o,e,t,u,f,!0)
q=p.aiy(o,e,t,u,f)
p.aR2(d,s,p.Z1(o,e,t,u,f,!0),f,e)
p.aQX(d,q,r,f,e)
p.aR0(d,t,e)
p.aQZ(d,t,e,f)}},
aR3(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bt6(a6.a),a9=A.bt6(a7.a)
if(a8.length!==a9.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ab(m).i("cE<1>")
k=B.P(new B.cE(m,l),l.i("av.E"))
j=a3.Z2(a4,a6,n,b3)
i=a3.Z3(a4,a7.aPq(k),k,b3,j)
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
l=a3.dE(g,a4,b3)
d=a3.fc(f,a4,b3)
a0=a3.dE(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.B.gp(0)
a1.seT(u.mJ(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.F:v).gp(0)
a1.seT(null)}$.aj()
a2=new B.mv(C.dp,C.bg,C.dU,C.en,C.dJ).eo()
m=B.dH(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v6(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fU(i,a3.r)
w.restore()}},
aR4(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z8(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dE(q.b,w,f)
n.$4(q,p/v*100,e,r).acZ(s,q,new B.m(p,o))}}},
aRb(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h1(b3,new A.aIy())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.Z8(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dE(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.V(B.rk(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lj(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lj(q.$2(m,k))))
f=b1.dE(a1,w,b4)
a3=new B.m(h,f)
a4=b1.dE(a2,w,b4)
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
b0=B.kU(a3,a5)
if(a6!=null){f.r=C.B.gp(0)
f.seT(a6.mJ(0,b0))}else{if(a4==null)a4=C.F
f.r=a4.gp(a4)
f.seT(null)}a4=a9.c
f.c=a4
if(a4===0){f.seT(null)
a4=B.bZ(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dl(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.rk(d.a))
f.acZ(t,j,new B.m(h,g))}}},
Z3(d,e,f,g,h){var w=this.aiA(d,e,f,g,h)
return w},
Z2(d,e,f,g){return this.Z3(d,e,f,g,null)},
aiA(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.aj().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dE(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f5(d,a0))
if(e===1)g.aB(new B.cs(d,a0))}else g.aB(new B.cs(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.q,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dE(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dE(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dE(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.m(n,l)
s=new B.Lc(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hG(r)}return g},
Z4(d,e,f,g,h,i){var w,v,u,t,s=this
$.aj()
w=B.btC(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,t))
w.aB(new B.cs(s.fc(v.h(g,0).a,d,h),s.dE(v.h(g,0).b,d,h)))
w.aB(new B.p7())
return w},
aiz(d,e,f,g,h){return this.Z4(d,e,f,g,h,!1)},
Z1(d,e,f,g,h,i){var w,v,u,t=this
$.aj()
w=B.btC(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,0))
w.aB(new B.cs(t.fc(v.h(g,0).a,d,h),t.dE(v.h(g,0).b,d,h)))
w.aB(new B.p7())
return w},
aiy(d,e,f,g,h){return this.Z1(d,e,f,g,h,!1)},
aR2(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dE(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.bu_(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fU(e,r.r)},
aQX(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dE(t.b,w,g)
s=r.r
s===$&&B.a()
A.bu_(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fU(e,r.r)},
aR0(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.ND(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k0:C.dU
u.e=C.en
u.r=v.gp(0)
u.seT(null)
u.c=f.x
u.r=v.gp(0)
$.ln()
u.z=new B.z2(C.aE,w.c*0.57735+0.5)
d.a.fU(B.btD(A.az6(e,f.cy),w.b),this.f)},
aQZ(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k0:C.dU
q.e=C.en
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dE(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dE(u.b,r,g)
t=s.f
A.bu_(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bRv(t)
d.a.fU(A.az6(e,f.cy),s.f)},
aR9(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bGz(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dy("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.ln().Zz(b4,u.b)
s=u.a
r=w.k(0,C.iK)?new B.kf(1):w
q=new B.tf(new B.hK(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.cS,C.w,r,a8,a8,a8,a8,C.bu,a8)
q.afi(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.K)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dE(b7.b,a9,b9)
l=p+C.hJ.ger()
k=o+(w-1)*4+(C.hJ.gcY(0)+C.hJ.gd_(0))
j=t-k-16
i=a7.ZA(b3,l,D.xj,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.Fo(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bGy(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.ln().K8(new B.F(t,w),0).b
d=new B.m(0,b1)
a0=new B.m(g.a,g.b)
a1=$.ln().K8(new B.F(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vw(0,new A.aIw(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.bU1(q.r,q.w)
A:{if(D.Dy===a5){a6=a3
break A}if(D.Dz===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vw(0,new A.aIx(b5,q,new B.m(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z8(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
Wb(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj0(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h1(t,new A.aIz())
return t.length===0?null:t},
aj0(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.m(this.fc(q.a,d,h),this.dE(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.ht(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q2(s,f,g,C.b.ip(w,v),v.a,v.b)}else return null}}
A.v9.prototype={}
A.a5X.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcN(),t=new A.aIv()
t.a0L()
$.aj()
w=B.aS()
w.b=C.aV
t.f=w
w=B.aS()
w.b=C.bg
t.r=w
w=B.aS()
w.b=C.aV
t.w=w
w=B.aS()
w.b=C.bg
w.r=C.F.gp(0)
w.a=D.a_w
t.x=w
w=B.aS()
w.b=C.aV
w.r=C.B.gp(0)
t.y=w
w=B.aS()
w.b=C.bg
w.r=C.n.gp(0)
t.z=w
w=B.aS()
w.b=C.aV
w.r=C.F.gp(0)
w.c=1
t.Q=w
t=new A.aa3(this.d,v,u,t,d,C.bo,new B.bp(),B.aH(x.v))
t.bk()
t.Yv(v.cx)
t.aer()
return t},
by(d,e){e.sij(0,this.d)
e.sYg(this.e)
e.scN(B.bu(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.aa3.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYg(d){var w=this
if(w.i_.k(0,d))return
w.i_=d
w.a0j(d.cx)
w.bc()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdv(0),s=t.a
J.aZ(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fV.i5(w,new A.a0i(t,v),new A.vq(u.aC,u.i_,u.cV,x.o))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.NL(w.fV.Wb(d,v,new A.vq(w.aC,w.i_,w.cV,x.o)))}}
A.MQ.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a0i.prototype={
aOh(d){this.a.a.clipRect(B.dH(d),$.oR()[1],!0)
return null},
ad6(d,e){d.aN(this.a,e)},
Vw(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aZ(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.ln()
s.Ye(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dl(d,e,f,g){var w=B.cB($.aj().r)
w.aB(new B.f5(d.a,d.b))
w.aB(new B.cs(e.a,e.b))
this.a.fU(A.az6(w,g),f)}}
A.yY.prototype={
gbI(){return[this.a]}}
A.al9.prototype={}
A.a0s.prototype={}
A.b_M.prototype={
K8(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.m((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWb(d,e){var w,v,u,t,s
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
aWc(d,e){var w,v
if(d==null)return D.a_H
w=d.b
v=e/2
return d.aPt(w>v?v:w)},
Om(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZd(w)},
aZd(d){if(d<1)return this.aIh(d)
return this.a7z(d)},
aIh(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7z(d*q)/q},
a7z(d){var w,v=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a4(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a4(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a4(Math.pow(10,v))
else return C.d.a4(Math.pow(10,v))},
aiP(d){if(d>=1)return 1
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
w=e.a?u.w.c2(e):e
v=B.bR(d,C.vi)
v=v==null?null:v.ay
return v===!0?w.c2(C.m4):w},
aiH(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.PG.prototype={
a3z(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st4(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3z(v)||w.a3z(d))w.a7()
else{w.cP=w.D=null
w.bc()}},
shF(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cP=w.D=null
w.bc()},
scC(d){var w=this
if(w.dr==d)return
w.dr=d
w.G=w.cP=w.D=null
w.bc()},
dC(d){var w,v=this.D$
if(v!=null){w=v.aq(C.af,C.iD,v.gdj())
switch(this.ae.a){case 6:return d.c1(new B.at(0,d.b,0,d.d).xI(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xI(w)}}else return new B.F(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e7(d,e){var w=this.D$
return w==null?null:w.fL(C.iD,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dH(C.iD,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.I.prototype.ga6.call(u))
v=new B.at(0,w.b,0,w.d).xI(u.D$.gC(0))
u.fy=t.a(B.I.prototype.ga6.call(u)).c1(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.I.prototype.ga6.call(u)).xI(u.D$.gC(0))
break}u.cP=u.D=null}else{t=x.k.a(B.I.prototype.ga6.call(u))
u.fy=new B.F(B.L(0,t.a,t.b),B.L(0,t.c,t.d))}},
Tx(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c2(new Float64Array(16))
w.h_()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bvX(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yA(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yA(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pC(n.a,n.b,0)
q.qQ(w.a/s.a,w.b/s.b,1,1)
q.fY(-o,-p.b,0,1)
m.cP=q}},
a6v(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.zc(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i3.prototype.gi4.call(s)
t=s.ch.a
return d.z9(r,e,v,u,t instanceof B.q3?t:null)}else s.ks(d,e.ad(0,w))
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
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFV(),s.eX,t))}else s.ch.sbh(0,s.a6v(d,e))},
e9(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tx()
return d.JS(new A.aSU(v),e,v.cP)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OP()
else{this.Tx()
w=this.cP
w.toString
e.fW(0,w)}}}
A.a41.prototype={
bm(d){var w=new A.PG(this.e,this.f,B.e5(d),C.t,null,new B.bp(),B.aH(x.v))
w.bk()
w.sc8(null)
return w},
by(d,e){e.st4(this.e)
e.shF(this.f)
e.scC(B.e5(d))
if(C.t!==e.eX){e.eX=C.t
e.bc()
e.cu()}}}
var z=a.updateTypes(["M(q4)","D(eu)","~(w,fy)","M(e7,w)","M(M,q4)","bL(M,th)","pl(M)","w(q2,q2)","~(hi,Kf?)","xM(y)","Hu(B,bF)","IQ(nV)","HO(nU)","ve(@)","e7(M)","w6(@)","ah(M,th)","Ca(@)","uB(dW<uB>)","M(ve)","M(w6)","wo(B,bF)","AM(y)","Q<~>()","q4(@)","xk(@)","M(id)","D(fy)","~(w,id)","~(@)","jI(nB)","c(nB)","jI(bC<w,M>)","jI(M)","nB(jI)","~(hi,NL?)","e7(e7)","Dz(dW<aD7>)","yU(@)","lz(Gb<lz>)","ti(w)","uC(eu,M,e7,w)","rl(mP)","D(e7)","w(v9,v9)","M(fy)","Q<nV>(cj<nV>)","q3?(rB,m)","w(w,w,M)","fy(fy,fy,M)","id(id,id,M)","mr(mr,mr,M)","Cr?(fy,w,id,w)","E(fy)","c(M,th)","eu(eu,eu,M)","D(M)","mK(mK,mK,M)","na(na,na,M)","kF(kF,kF,M)","l4(l4,l4,M)","h(kF)","h(l4)","e7(e7,e7,M)","ms(ms,ms,M)","uC(eu,M,e7,w{size:M?})","D(eu,e7)","M(m,m)","u<ti>(e7,u<w>)","Q<nU>(cj<nU>)","u<rl>(u<mP>)","E(mP)","y8(fg<B?>)"])
A.aD3.prototype={
$1(d){var w=B.e8(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q4(J.am(v==null?"":v),A.oN(w.h(0,"revenue_net")),A.oN(w.h(0,"expense_net")),A.oN(w.h(0,"result_net")))},
$S:z+24}
A.aD4.prototype={
$1(d){var w,v,u,t=B.e8(x.f.a(d),x.N,x.z),s=B.al(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.al(t.h(0,"code"))
v=A.oN(t.h(0,"gross"))
u=B.bx(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.ve(s,r,w,v,u,A.oN(t.h(0,"avg_basket")))},
$S:z+13}
A.aD5.prototype={
$1(d){var w,v=B.e8(x.f.a(d),x.N,x.z),u=B.al(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bx(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w6(u,t,w,A.oN(v.h(0,"gross")))},
$S:z+15}
A.aDm.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.Ca(v,u,J.am(t==null?"expense":t),A.tV(w.h(d,"net")),A.tV(w.h(d,"tax")),A.tV(w.h(d,"gross")))},
$S:z+17}
A.bpl.prototype={
$1(d){return new A.uB(d.au($.c3(),x.A))},
$S:z+18}
A.bpm.prototype={
$1(d){return new A.Dz(d.au($.bL6(),x.D))},
$S:z+37}
A.brc.prototype={
$1(d){return E.aD6()},
$S:z+39}
A.bpn.prototype={
$1(d){var w=d.au($.x2(),x.P)
return d.au($.au1(),x.a).FJ(w)},
$S:z+46}
A.bpk.prototype={
$1(d){var w=d.au($.x2(),x.P)
return d.au($.au1(),x.a).FF(w)},
$S:z+69}
A.bpj.prototype={
$1(d){return this.ais(d)},
ais(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.l(d.au($.c3(),x.A).i8("finance_balance_kpis",t),$async$$1)
case 3:s=r.e8(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:207}
A.aD2.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.au1(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD1.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.au1(),x.a).Lf(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDk.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.brW()
if(s.e==null)B.V(B.Z(y.b))
s.gcs().co(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDc.prototype={
$0(){return this.a.J9(this.b,this.c)},
$S:0}
A.aDd.prototype={
$0(){return this.a.B4(this.b,this.c)},
$S:0}
A.aDe.prototype={
$0(){var w=x.z
return B.bh(this.a,!1).em(B.ew(new A.aDb(),null,w),w)},
$S:0}
A.aDb.prototype={
$1(d){return F.CB},
$S:z+9}
A.aDf.prototype={
$0(){return B.o_(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDg.prototype={
$0(){var w=this
return w.a.B5(w.b,w.c,w.d)},
$S:0}
A.aDj.prototype={
$0(){return D.aq2},
$S:100}
A.aDi.prototype={
$2(d,e){return new A.Hu(B.i(d),null)},
$S:z+10}
A.aDh.prototype={
$1(d){return new A.IQ(d,null)},
$S:z+11}
A.aDa.prototype={
$1(d){var w=null,v=this.a,u=$.dY()
v=B.j("Die Finanzauswertung f\xfcr "+u.ao(v.a)+" \u2013 "+u.ao(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.lq(B.b([B.dD(C.cT,w,w,new A.aD8(u),w,w),B.dP(F.uW,new A.aD9(u),B.dQ(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.uX)},
$S:52}
A.aD8.prototype={
$0(){B.bh(this.a,!1).df(!1)
return null},
$S:0}
A.aD9.prototype={
$0(){B.bh(this.a,!1).df(!0)
return null},
$S:0}
A.beK.prototype={
$0(){var w=this.a.aJ(0,$.x2().ghM(),x.V),v=E.aD6()
w.wn(0,v)
return v},
$S:0}
A.beL.prototype={
$0(){var w=this.a.aJ(0,$.x2().ghM(),x.V),v=new B.bb(Date.now(),0,!1),u=new E.lz(B.bJ(B.aU(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.beM.prototype={
$0(){return this.a.Iy(this.b,this.c)},
$S:0}
A.beJ.prototype={
$2(d,e){return new B.os(B.U(d).aOP(B.U(d).ax.aPI(C.h,C.m)),e,null)},
$S:990}
A.bkq.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dL(),s=A.Nv(!1,C.xC,"Umsatz 7 %",t.ao(u.a),w),r=A.Nv(!1,C.xC,"Umsatz 19 %",t.ao(u.b),w),q=A.Nv(!0,D.a9u,"Umsatz netto",t.ao(u.c),w),p=A.Nv(!1,D.a9t,"Aufwand",t.ao(u.d),w),o=u.e,n=t.ao(o)
return E.aFA(1.7,B.b([s,r,q,p,A.Nv(!0,C.ny,"Ergebnis",n,o<0?C.ad:C.am),A.Nv(!1,C.fh,"USt-Saldo",t.ao(u.f-u.r),w)],x.p),v,12,12,F.lD,!0)},
$S:137}
A.aIb.prototype={
$0(){return D.aq_},
$S:100}
A.aIa.prototype={
$2(d,e){var w=null
return B.bE(C.ad,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.A(C.h,13,C.k),w,w,w),C.fH,w,C.D,w,3)},
$S:219}
A.aI9.prototype={
$1(d){return new A.HO(d,null)},
$S:z+12}
A.bci.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dL(),i=j.ao(k.c),h=l.w,g=l.d,f=B.ab(g).i("a9<1,M>"),e=f.i("av.E"),d=B.P(new B.a9(g,new A.bc7(),f),e)
i=A.jz(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ao(r.b)
w=B.P(new B.a9(g,new A.bc8(),f),e)
d=A.jz(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ao(k.e)
w=B.P(new B.a9(g,new A.bc9(),f),e)
k=A.jz(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.P(new B.a9(g,new A.bca(),f),e)
w=A.jz(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.P(new B.a9(g,new A.bcb(),f),e)
v=A.jz(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.P(new B.a9(g,new A.bcc(),f),e)
u=A.jz(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.P(new B.a9(g,new A.bcd(),f),e)
t=A.jz(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ao(h.d)
s=B.P(new B.a9(g,new A.bce(),f),e)
h=A.jz(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ao(l.r.d)
m=B.P(new B.a9(g,new A.bcf(m),f),e)
m=A.jz(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ao(l)
l=B.P(new B.a9(g,new A.bcg(l),f),e)
l=A.jz(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.am(j,1)
j=B.P(new B.a9(g,new A.bch(j),f),e)
return E.aFA(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jz(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,F.lD,!0)},
$S:137}
A.bc7.prototype={
$1(d){return d.b},
$S:z+0}
A.bc8.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bc9.prototype={
$1(d){return d.d},
$S:z+0}
A.bca.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcb.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bcc.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bcd.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bce.prototype={
$1(d){return d.d},
$S:z+0}
A.bcf.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bcg.prototype={
$1(d){return this.a},
$S:z+0}
A.bch.prototype={
$1(d){return this.a},
$S:z+0}
A.bcj.prototype={
$0(){return A.bvU(this.b,1.45,new A.T5(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bck.prototype={
$0(){return A.bvU(this.b,1.6,new A.Tg(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bot.prototype={
$1(d){var w=this,v=null,u=B.aX(16),t=x.p,s=B.b([B.aq(B.b([B.aN(B.j(w.a,v,v,v,B.c_(C.h,18,C.p),v,v,v),1),B.fe(v,v,D.abr,v,v,new A.bos(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.A(C.u,12,C.aG),v,v,v),C.L],t))
s.push(C.v)
s.push(B.ch(new B.mp(w.c,w.d,v),v,17976931348623157e292))
return B.a3n(v,C.n,new B.ag(C.aj,B.af(s,C.C,C.f,C.O),v),v,v,v,C.fJ,C.uH,v,new B.db(u,C.A),v)},
$S:991}
A.bos.prototype={
$0(){return B.bh(this.a,!1).fb()},
$S:0}
A.bcl.prototype={
$0(){var w=this.a,v=B.b9(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bvU(this.b,2.4,new A.Xl(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.bjJ.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.bjK.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bjL.prototype={
$1(d){return A.aIq(null,1.4,null,C.ad,0.35,D.afE,D.Dp,null,!1,!1,!1,!1,D.EQ,!1,10,D.Yd,!0,C.lf,B.b([new A.eu(0,d),new A.eu(this.a,d)],x.U))},
$S:z+14}
A.b3i.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b3k.prototype={
$2(d,e){var w=null
return B.j(this.a.aJy(d),w,w,w,B.A(C.u,10,C.Q),w,w,w)},
$S:z+16}
A.b3l.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zD
return new B.ag(C.kM,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.A(C.u,9,C.Q),w,w,w),w)},
$S:z+5}
A.b3j.prototype={
$1(d){return D.a83},
$S:z+6}
A.b45.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b46.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b47.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b48.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zD
return new B.ag(C.kM,B.j(this.a[v],w,w,w,B.A(C.h,12,C.p),w,w,w),w)},
$S:z+5}
A.bcP.prototype={
$1(d){return d.d},
$S:z+19}
A.bcQ.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.blH.prototype={
$1(d){return d.d},
$S:z+20}
A.blI.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b1N.prototype={
$0(){return D.aq7},
$S:100}
A.b1M.prototype={
$2(d,e){return new A.wo("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b1L.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bE(o,B.af(B.b([B.j("Noch keine Bilanzdaten erfasst.",o,o,o,B.A(C.h,14,C.Q),o,o,o),C.L,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.A(C.u,12.5,C.k),o,o,o),C.v,B.hE(C.Eo,D.aD4,new A.b1H(p.b,p.c),o)],x.p),C.C,C.f,C.i),C.ai,o,C.D,o,3)
w=new A.b1O(d)
v=C.b.fG(p.a.e.d,0,new A.b1I())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jV(new A.b1J(new A.b1P(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.af(B.b([w,C.L,B.aq(B.b([B.aN(B.j("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.A(C.u,11,C.k),o,o,o),1),B.q_(D.abT,D.aCa,new A.b1K(p.b,p.c,d),o)],q),C.l,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:216}
A.b1H.prototype={
$0(){return A.atl(this.a,this.b,null)},
$S:0}
A.b1O.prototype={
$1(d){var w=B.bx(J.a3(this.a,d))
return w==null?null:w},
$S:992}
A.b1P.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.b9(w,".",",")+" %"}return w},
$S:31}
A.b1I.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1J.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jz(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fl,o.$1("liquidity1_pct")),m=A.jz(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fl,o.$1("liquidity2_pct")),l=A.jz(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fl,o.$1("liquidity3_pct"))
o=A.jz(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fl,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.b9(w,".",",")+" %"}w=A.jz(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fl,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dL()
v=u.ao(v)
return E.aFA(p,B.b([n,m,l,o,w,A.jz(s,s,!1,"Bilanzsumme",!1,"EK "+u.ao(t.d),s,s,s,C.fl,v)],x.p),q,12,12,F.lD,!0)},
$S:137}
A.b1K.prototype={
$0(){return A.atl(this.a,this.b,this.c)},
$S:0}
A.bor.prototype={
$1(d){return new A.AM(this.a,new A.boq(this.b),this.c,null)},
$S:z+22}
A.boq.prototype={
$0(){var w=this.a,v=$.by9()
if(w.e==null)B.V(B.Z(y.b))
w.gcs().co(v)},
$S:0}
A.b1C.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1D.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1F.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.l(B.u0(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bb(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b1E(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1E.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1G.prototype={
$0(){return B.bh(this.a,!1).fb()},
$S:0}
A.b1Q.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b1R.prototype={
$1(d){return new A.xk(x.B.a(d),this.a.a.r)},
$S:z+25}
A.avX.prototype={
$1(d){return d.e},
$S:z+26}
A.avY.prototype={
$2(d,e){return d+e},
$S:43}
A.aw_.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.aw1.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.aw2.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.ad6(v.d,v.e)},
$S:0}
A.avG.prototype={
$1(d){return 0},
$S:993}
A.avF.prototype={
$2(d,e){return B.fi(C.bS,this.a.akL(e),C.r,C.bt,null)},
$S:994}
A.aXf.prototype={
$1(d){return d.a},
$S:z+30}
A.aXg.prototype={
$1(d){return d.b},
$S:z+31}
A.aXh.prototype={
$1(d){return new A.jI(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aXi.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mm||v===D.dC))t=1-t
return new A.jI(d,t*w.d)},
$S:z+33}
A.aXj.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.ln()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.am(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.am(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.am(v/1000,1)
t="K"}else{u=C.d.am(v,r.aiP(Math.abs(s.b-s.c)))
t=""}if(C.c.hI(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nB(d,q.c.b.$2(p,new A.th(u+t,s.e)))},
$S:z+34}
A.aSz.prototype={
$1(d){this.a.l6(new A.a4b(d))},
$S:158}
A.aSA.prototype={
$1(d){this.a.l6(new A.a4c(d))},
$S:41}
A.aSB.prototype={
$1(d){this.a.l6(new A.a4d(d))},
$S:28}
A.aSC.prototype={
$0(){this.a.l6(D.a1e)},
$S:0}
A.aSD.prototype={
$1(d){this.a.l6(new A.Mn())},
$S:44}
A.aSE.prototype={
$1(d){this.a.l6(new A.a4g(d))},
$S:45}
A.aSF.prototype={
$0(){this.a.l6(D.a1f)},
$S:0}
A.aSG.prototype={
$1(d){this.a.l6(new A.Mq(d))},
$S:110}
A.aSH.prototype={
$1(d){this.a.l6(new A.a4a(d))},
$S:162}
A.aSI.prototype={
$1(d){this.a.l6(new A.a49(d))},
$S:163}
A.aSJ.prototype={
$1(d){return this.a.l6(new A.Ml(d))},
$S:164}
A.aSK.prototype={
$1(d){return this.a.l6(new A.a4e(d))},
$S:59}
A.aSL.prototype={
$1(d){return this.a.l6(new A.Mo(d))},
$S:49}
A.bcw.prototype={
$1(d){var w=this.a.db.h(0,C.b.ip(this.b.ch,d))
return d.aPo(w==null?B.b([],x.t):w)},
$S:z+36}
A.bcu.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bcv.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h1(w,new A.bct())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.G0(w))},
$S:0}
A.bct.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bcx.prototype={
$1(d){return new A.yU(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIr.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.bp9.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bAw(t?A.bvI(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.ti(w,new A.ya(!0,A.bwt(),new A.bp8(v)))},
$S:z+40}
A.bp8.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bP_(A.bvI(d,e,f),w,A.bXF(d,e,f))},
$S:z+41}
A.bp6.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iV(v,v,u==null?D.di:u,v,v,v,v,v,v,v,v,14,v,v,C.Q,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rl(C.d.j(d.b),w)},
$S:z+42}
A.aIt.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aIu.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aIy.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aIw.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aIx.prototype={
$0(){this.a.ad6(this.b,this.c)},
$S:0}
A.aIz.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avQ.prototype={
$1(d){return d.gdq(0)},
$S:z+45}
A.avR.prototype={
$2(d,e){return d+e},
$S:43}
A.avU.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iL(v,B.ab(v).i("iL<1>")).ar(0,new A.avV(w,this.a/(u+1),this.c))},
$S:0}
A.avV.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.avS.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.avT.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFz.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:995}
A.az7.prototype={
$1(d){return d},
$S:996}
A.aSU.prototype={
$2(d,e){return this.a.As(d,e)},
$S:21};(function aliases(){var w=A.K8.prototype
w.a_z=w.i5
w.al3=w.aR5
w.al4=w.ad_
w=A.SI.prototype
w.anH=w.l
w=A.Ki.prototype
w.a_A=w.i5
w=A.FA.prototype
w.a0j=w.Yv})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c0h","bOX",72)
v(A.SK.prototype,"gaDj","HX",23)
u(A.SL.prototype,"gart","aru",8)
t(A,"c_5",3,null,["$3"],["bMh"],49,0)
t(A,"c_6",3,null,["$3"],["bMi"],50,0)
t(A,"c_7",3,null,["$3"],["bMj"],51,0)
t(A,"c_9",4,null,["$4"],["c_V"],52,0)
w(A,"c_8","c_U",53)
s(A,"bvY","c_W",54)
t(A,"c_0",3,null,["$3"],["bP0"],55,0)
w(A,"Zn","c2i",56)
w(A,"atn","c_Z",6)
t(A,"c_2",3,null,["$3"],["bPM"],57,0)
t(A,"c_4",3,null,["$3"],["bUV"],58,0)
t(A,"c_1",3,null,["$3"],["bPL"],59,0)
t(A,"c_3",3,null,["$3"],["bUU"],60,0)
w(A,"c9o","bPK",61)
w(A,"c9p","bUT",62)
r(A.Xa.prototype,"ga3V","awV",29)
u(A.V_.prototype,"gayc","ayd",35)
t(A,"c1b",3,null,["$3"],["bQg"],63,0)
t(A,"c1a",3,null,["$3"],["bMl"],64,0)
w(A,"c1e","c2j",1)
t(A,"bGW",4,null,["$5$size","$4"],["bFn",function(d,e,f,g){return A.bFn(d,e,f,g,null)}],65,0)
s(A,"bwt","c2h",66)
s(A,"bGX","bZO",67)
s(A,"bH_","c01",68)
s(A,"bGZ","c_Y",3)
s(A,"bGY","c_X",3)
w(A,"c1d","bGz",70)
w(A,"c1c","bGy",71)
u(A.PG.prototype,"gaFV","a6v",47)
t(A,"Zs",3,null,["$3"],["c19"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.a_,[A.a5J,A.aff,A.aki,A.Im,A.IQ,A.afd,A.Hu,A.HO,A.ajC,A.akP,A.TR,A.Xl,A.T5,A.Tg,A.ali,A.ahG,A.BG,A.aqP,A.wo,A.K9,A.Ad])
u(B.B,[A.uB,A.Dz,A.bc,A.agf,A.ag5,A.ag7,A.ag8,A.ag_,A.ajm,A.agb,A.ag9,A.awb,A.aqT,A.avZ,A.ag6,A.Ki,A.a4M,A.th,A.apj,A.api,A.afZ,A.ajl,A.eu,A.aji,A.ajk,A.any,A.ak9,A.arw,A.ajj,A.aj1,A.ajh,A.avE,A.bcr,A.avH,A.afW,A.nB,A.aje,A.ajf,A.vq,A.hi,A.akX,A.al_,A.ag2,A.agg,A.ag3,A.ajg,A.al2,A.al0,A.aqS,A.aph,A.aIs,A.akZ,A.v9,A.a0i,A.al9,A.a0s,A.b_M])
u(B.uz,[A.q4,A.ve,A.w6,A.ayw,A.azD,A.nU,A.Ca,A.nV])
u(B.nG,[A.aD3,A.aD4,A.aD5,A.aDm,A.bpl,A.bpm,A.brc,A.bpn,A.bpk,A.bpj,A.aDb,A.aDh,A.aDa,A.aI9,A.bc7,A.bc8,A.bc9,A.bca,A.bcb,A.bcc,A.bcd,A.bce,A.bcf,A.bcg,A.bch,A.bot,A.bjL,A.b3j,A.b45,A.b46,A.bcP,A.blH,A.b1L,A.b1O,A.b1P,A.bor,A.b1R,A.avX,A.aw_,A.avG,A.aXf,A.aXg,A.aXh,A.aXi,A.aXj,A.aSz,A.aSA,A.aSB,A.aSD,A.aSE,A.aSG,A.aSH,A.aSI,A.aSJ,A.aSK,A.aSL,A.bcw,A.bcx,A.aIr,A.bp9,A.bp8,A.bp6,A.aIt,A.aIu,A.avQ,A.az7])
t(A.y8,B.ft)
u(B.xz,[A.aD2,A.aD1,A.aDk,A.aDc,A.aDd,A.aDe,A.aDf,A.aDg,A.aDj,A.aD8,A.aD9,A.beK,A.beL,A.beM,A.aIb,A.bcj,A.bck,A.bos,A.bcl,A.b1N,A.b1H,A.b1K,A.boq,A.b1C,A.b1D,A.b1F,A.b1E,A.b1G,A.b1Q,A.aw2,A.aSC,A.aSF,A.bcu,A.bcv,A.aIw,A.aIx,A.avU])
u(B.xH,[A.y9,A.amu,A.a5K,A.ag1])
u(B.xA,[A.aDi,A.beJ,A.bkq,A.aIa,A.bci,A.bjJ,A.bjK,A.b3i,A.b3k,A.b3l,A.b47,A.b48,A.bcQ,A.blI,A.b1M,A.b1I,A.b1J,A.avY,A.aw1,A.avF,A.bct,A.aIy,A.aIz,A.avR,A.avV,A.avS,A.avT,A.aFz,A.aSU])
u(B.O,[A.AM,A.QN])
u(B.a0,[A.SK,A.Xa])
u(B.N2,[A.Ke,A.NJ])
u(B.xc,[A.SL,A.V_])
t(A.a_V,A.agf)
t(A.afV,A.a_V)
t(A.a_F,A.afV)
u(A.a_F,[A.ag4,A.akY])
t(A.nC,A.ag4)
u(B.Ug,[A.avO,A.acH,A.Cq,A.aCu,A.aIc,A.MQ])
t(A.fy,A.ag5)
t(A.id,A.ag7)
t(A.mr,A.ag8)
t(A.a_M,A.ag_)
t(A.Mr,A.ajm)
u(A.Mr,[A.aga,A.al1])
t(A.a_R,A.aga)
t(A.a_S,A.agb)
t(A.Cr,A.ag9)
u(A.awb,[A.Kf,A.NL])
t(A.acJ,A.aqT)
t(A.agc,A.acJ)
t(A.a_T,A.agc)
u(B.b8,[A.xk,A.yU])
t(A.ue,A.ag6)
t(A.K8,A.Ki)
u(A.K8,[A.aw0,A.aIv])
u(B.NF,[A.a_P,A.a5X])
u(B.J,[A.FA,A.afX])
u(A.FA,[A.a9R,A.aa3])
t(A.pU,A.apj)
t(A.abf,A.api)
t(A.oZ,A.afZ)
t(A.uD,A.ajl)
t(A.yb,A.aji)
t(A.pl,A.ajk)
t(A.Pm,A.any)
t(A.mK,A.ak9)
t(A.na,A.arw)
u(A.pl,[A.ak8,A.arv])
t(A.kF,A.ak8)
t(A.l4,A.arv)
t(A.a48,A.ajj)
u(A.a48,[A.ak7,A.aru])
t(A.a4X,A.ak7)
t(A.ad6,A.aru)
t(A.M9,A.aj1)
t(A.uC,A.ajh)
t(A.Mk,A.uC)
t(A.abg,B.h_)
t(A.afY,A.afX)
t(A.SI,A.afY)
t(A.a_G,A.SI)
t(A.jI,A.afW)
t(A.a45,A.aje)
t(A.a47,A.ajf)
u(A.hi,[A.a4b,A.a4c,A.a4d,A.Mm,A.Mn,A.a4g,A.Mp,A.Mq,A.a4a,A.a49,A.Ml,A.a4e,A.a4f,A.Mo])
t(A.py,A.akY)
t(A.e7,A.akX)
t(A.NK,A.al_)
t(A.a_O,A.ag2)
t(A.ms,A.agg)
t(A.Kd,A.ag3)
t(A.ya,A.ajg)
t(A.Ef,A.al1)
t(A.a5Y,A.al2)
t(A.akW,A.eu)
t(A.mP,A.akW)
t(A.q2,A.mP)
t(A.rl,A.al0)
t(A.ti,A.aqS)
t(A.G0,A.aph)
t(A.yV,A.akZ)
t(A.yY,A.al9)
t(A.PG,B.PT)
t(A.a41,B.bL)
w(A.ag_,A.bc)
w(A.ag4,A.bc)
w(A.ag5,A.bc)
w(A.ag7,A.bc)
w(A.ag8,A.bc)
w(A.ag9,A.bc)
w(A.aga,A.bc)
w(A.agb,A.bc)
w(A.agc,A.bc)
w(A.ag6,A.bc)
w(A.afV,A.bc)
w(A.afZ,A.bc)
w(A.aj1,A.bc)
w(A.ajh,A.bc)
w(A.aji,A.bc)
w(A.ajk,A.bc)
w(A.ajl,A.bc)
w(A.ak8,A.bc)
w(A.ak7,A.bc)
w(A.ak9,A.bc)
w(A.any,A.bc)
w(A.api,A.bc)
w(A.apj,A.bc)
w(A.aqT,A.bc)
w(A.arv,A.bc)
w(A.aru,A.bc)
w(A.arw,A.bc)
w(A.afW,A.bc)
v(A.afX,B.aB)
w(A.afY,B.e3)
v(A.SI,B.a36)
w(A.agf,A.bc)
w(A.aje,A.bc)
w(A.ajf,A.bc)
w(A.ajm,A.bc)
w(A.ag2,A.bc)
w(A.ag3,A.bc)
w(A.agg,A.bc)
w(A.ajg,A.bc)
w(A.ajj,A.bc)
w(A.akW,A.bc)
w(A.akX,A.bc)
w(A.akY,A.bc)
w(A.al_,A.bc)
w(A.al0,A.bc)
w(A.al1,A.bc)
w(A.al2,A.bc)
w(A.aph,A.bc)
w(A.aqS,A.bc)
w(A.akZ,A.bc)
w(A.al9,A.bc)})()
B.blU(b.typeUniverse,JSON.parse('{"a5J":{"a_":[],"c":[]},"Dz":{"aD7":[]},"y8":{"ft":["be<~>"],"ft.T":"be<~>"},"IQ":{"a_":[],"c":[]},"Hu":{"a_":[],"c":[]},"y9":{"bm":[],"O":[],"c":[]},"aff":{"a_":[],"c":[]},"aki":{"a_":[],"c":[]},"amu":{"bm":[],"O":[],"c":[]},"Im":{"a_":[],"c":[]},"afd":{"a_":[],"c":[]},"HO":{"a_":[],"c":[]},"wo":{"a_":[],"c":[]},"AM":{"O":[],"c":[]},"a5K":{"bm":[],"O":[],"c":[]},"ajC":{"a_":[],"c":[]},"akP":{"a_":[],"c":[]},"TR":{"a_":[],"c":[]},"Xl":{"a_":[],"c":[]},"T5":{"a_":[],"c":[]},"Tg":{"a_":[],"c":[]},"ali":{"a_":[],"c":[]},"ahG":{"a_":[],"c":[]},"BG":{"a_":[],"c":[]},"aqP":{"a_":[],"c":[]},"ag1":{"bm":[],"O":[],"c":[]},"SK":{"a0":["AM"]},"Ke":{"O":[],"c":[]},"SL":{"a0":["Ke"]},"nC":{"bc":[]},"fy":{"bc":[]},"id":{"bc":[]},"mr":{"bc":[]},"Cr":{"bc":[]},"xk":{"b8":["nC"],"b0":["nC"],"b0.T":"nC","b8.T":"nC"},"a_M":{"bc":[]},"a_R":{"bc":[]},"a_S":{"bc":[]},"a_T":{"bc":[]},"ue":{"bc":[]},"a_P":{"aW":[],"c":[]},"a9R":{"J":[],"I":[],"ji":[],"aR":[]},"pl":{"bc":[]},"mK":{"bc":[]},"na":{"bc":[]},"kF":{"bc":[]},"l4":{"bc":[]},"uC":{"bc":[]},"a_F":{"bc":[]},"pU":{"bc":[]},"abf":{"bc":[]},"oZ":{"bc":[]},"uD":{"bc":[]},"yb":{"bc":[]},"acJ":{"bc":[]},"Pm":{"bc":[]},"a4X":{"bc":[]},"ad6":{"bc":[]},"M9":{"bc":[]},"Mk":{"bc":[]},"K9":{"a_":[],"c":[]},"QN":{"O":[],"c":[]},"Xa":{"a0":["QN"]},"jI":{"bc":[]},"abg":{"h_":[],"aW":[],"c":[]},"a_G":{"e3":["J","hj"],"J":[],"aB":["J","hj"],"I":[],"aR":[],"aB.1":"hj","e3.1":"hj","aB.0":"J"},"Ad":{"a_":[],"c":[]},"a_V":{"bc":[]},"a45":{"bc":[]},"Mr":{"bc":[]},"a47":{"bc":[]},"a4b":{"hi":[]},"a4c":{"hi":[]},"a4d":{"hi":[]},"Mm":{"hi":[]},"Mn":{"hi":[]},"a4g":{"hi":[]},"Mp":{"hi":[]},"Mq":{"hi":[]},"a4a":{"hi":[]},"a49":{"hi":[]},"Ml":{"hi":[]},"a4e":{"hi":[]},"a4f":{"hi":[]},"Mo":{"hi":[]},"FA":{"J":[],"I":[],"ji":[],"aR":[]},"NJ":{"O":[],"c":[]},"V_":{"a0":["NJ"]},"py":{"bc":[]},"e7":{"bc":[]},"ms":{"bc":[]},"mP":{"eu":[],"bc":[]},"q2":{"mP":[],"eu":[],"bc":[]},"rl":{"bc":[]},"ti":{"bc":[]},"G0":{"bc":[]},"yU":{"b8":["py"],"b0":["py"],"b0.T":"py","b8.T":"py"},"NK":{"bc":[]},"a_O":{"bc":[]},"Kd":{"bc":[]},"ya":{"bc":[]},"a48":{"bc":[]},"Ef":{"bc":[]},"a5Y":{"bc":[]},"yV":{"bc":[]},"a5X":{"aW":[],"c":[]},"aa3":{"J":[],"I":[],"ji":[],"aR":[]},"yY":{"bc":[]},"PG":{"J":[],"bt":["J"],"I":[],"aR":[]},"a41":{"bL":[],"aW":[],"c":[]}}'))
B.bES(b.typeUniverse,JSON.parse('{"K8":1,"Mr":1,"Ki":1,"FA":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("Ca"),e:w("be<nU>"),aN:w("be<nV>"),fM:w("be<a2<h,@>?>"),b:w("be<~>"),W:w("jI"),B:w("nC"),dB:w("fy"),T:w("ue"),fj:w("id"),G:w("mr"),J:w("ms"),k:w("at"),cX:w("a0s<M>"),dO:w("um"),R:w("ak<h,@>"),v:w("hS"),bz:w("lu<bb>"),f0:w("nL"),E:w("bc"),F:w("y8"),X:w("nU"),P:w("lz"),D:w("uB"),a:w("aD7"),d:w("nV"),cw:w("eu"),L:w("hj"),m:w("dh<w,E>"),cm:w("kF"),dv:w("mK"),g:w("C<nB>"),O:w("C<fy>"),Y:w("C<id>"),C:w("C<bsS>"),U:w("C<eu>"),K:w("C<a4M>"),u:w("C<e7>"),bC:w("C<v9>"),aA:w("C<u<eu>>"),r:w("C<G0>"),s:w("C<h>"),eg:w("C<tf>"),df:w("C<q2>"),p:w("C<c>"),n:w("C<M>"),t:w("C<w>"),eF:w("bf<a0<O>>"),Z:w("mP"),cz:w("e7"),hf:w("py"),dj:w("yV"),fT:w("rl"),c_:w("ij<oG<be<~>>>"),x:w("yY<fy>"),y:w("yY<e7>"),I:w("u<w>"),ef:w("ve"),c:w("a2<h,@>"),f:w("a2<@,@>"),gj:w("a9<M,M>"),w:w("jW"),aU:w("B"),Q:w("vq<nC>"),o:w("vq<py>"),eo:w("pK"),gJ:w("pL"),V:w("n3<lz>"),N:w("h"),A:w("n5"),bO:w("bH"),er:w("tf"),j:w("w6"),dw:w("q2"),bY:w("ti"),cZ:w("q4"),gc:w("kd"),es:w("l4"),bN:w("na"),l:w("c"),q:w("wI"),g4:w("iw<M>"),cJ:w("D"),i:w("M"),z:w("@"),S:w("w"),bn:w("xk?"),f3:w("yU?"),M:w("u<@>?"),h:w("a2<h,@>?"),fF:w("a2<@,@>?"),cK:w("B?"),aD:w("kd?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Aw=new B.qx(C.m,B.aw("qx<E>"))
D.AD=new A.Cq(0,"left")
D.mm=new A.Cq(1,"top")
D.AE=new A.Cq(2,"right")
D.dC=new A.Cq(3,"bottom")
D.atM=new A.pU(!1,A.bvY(),22,null)
D.kg=new A.oZ(16,null,D.atM,!0)
D.a84=new A.pl(C.B,null,2,null)
D.vM=new A.Kd(!1,D.a84,A.c1e(),!0)
D.a_n=new A.avO(3,"spaceEvenly")
D.a_w=new B.xo(6,"dstIn")
D.Xy=new B.aV(3,3)
D.AI=new B.d3(D.Xy,D.Xy,C.a0,C.a0)
D.a_H=new B.ba(C.B,0,C.S,-1)
D.Bh=new A.a47()
D.a1e=new A.Mm()
D.a1f=new A.Mp()
D.aKD=new A.abf()
D.akd=w([],B.aw("C<kF>"))
D.ake=w([],B.aw("C<l4>"))
D.Dk=new A.M9(D.akd,D.ake,!0)
D.a7M=new B.eg("Zeitraum",!1,null)
D.a7R=new B.eg("Konten (SKR 03)",!1,null)
D.xj=new A.aCu(0,"center")
D.aKP=new A.ya(!0,A.bwt(),A.bGW())
D.Dp=new A.ya(!1,A.bwt(),A.bGW())
D.Dq=new A.yb(!1,!0,null,A.atn(),A.Zn(),!0,null,A.atn(),A.Zn())
D.aKQ=new A.yb(!0,!0,null,A.atn(),A.Zn(),!0,null,A.atn(),A.Zn())
D.a3x=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3j=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3G=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3B=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a34=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a33=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a40=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3q=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a43=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3Y=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.ao7=new B.dh([50,D.a3x,100,D.a3j,200,D.a3G,300,D.a3B,400,D.a34,500,D.a33,600,D.a40,700,D.a3q,800,D.a43,900,D.a3Y],x.m)
D.di=new B.rt(D.ao7,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.agA=w([8,4],x.t)
D.a82=new A.pl(D.di,null,0.4,D.agA)
D.a83=new A.pl(C.ao,null,0.5,null)
D.fK=new A.eu(0/0,0/0)
D.atO=new A.pU(!0,A.bvY(),44,null)
D.mn=new A.oZ(16,null,D.atO,!0)
D.atN=new A.pU(!0,A.bvY(),30,null)
D.mo=new A.oZ(16,null,D.atN,!0)
D.a85=new A.uD(!1,D.mn,D.mo,D.mn,D.mo)
D.aKR=new A.uD(!0,D.mn,D.mo,D.mn,D.mo)
D.Dy=new A.MQ(0,"left")
D.a8H=new A.MQ(1,"center")
D.Dz=new A.MQ(2,"right")
D.a8M=new B.ac(57495,"MaterialIcons",null,!1)
D.a9q=new B.ac(58927,"MaterialIcons",null,!1)
D.a9t=new B.ac(59005,"MaterialIcons",null,!0)
D.a9u=new B.ac(59007,"MaterialIcons",null,!0)
D.a9v=new B.ac(59011,"MaterialIcons",null,!1)
D.aai=new B.ac(62589,"MaterialIcons",null,!1)
D.a9H=new B.ac(61349,"MaterialIcons",null,!1)
D.ab4=new B.aO(D.a9H,20,C.h,null,null)
D.a9N=new B.ac(61487,"MaterialIcons",null,!1)
D.ab6=new B.aO(D.a9N,18,null,null,null)
D.abr=new B.aO(C.j5,null,C.h,null,null)
D.abs=new B.aO(C.nz,null,C.u,null,null)
D.abT=new B.aO(C.nD,16,null,null,null)
D.a8X=new B.ac(57912,"MaterialIcons",null,!1)
D.ac_=new B.aO(D.a8X,null,C.ad,null,null)
D.aea=new A.a5K(null)
D.aKW=new A.aIc(0,"horizontal")
D.xK=new A.yV(0,0,0,0,!1)
D.EQ=new A.NK(0.5)
D.Bl=new A.a5Y()
D.aee=new A.Ef(D.Bl,A.bH_(),10,A.bGX(),!0,A.bGZ(),A.bGY(),!1,null,null,null)
D.aKY=new A.Ef(D.Bl,A.bH_(),10,A.bGX(),!0,A.bGZ(),A.bGY(),!0,null,null,null)
D.afE=w([4,3],x.t)
D.as0=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.arR=new B.aG("receivables","Forderungen (kurzfristig)")
D.arG=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.arE=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aru=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.arz=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.arY=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.arQ=new B.aG("equity","Eigenkapital")
D.H4=w([D.as0,D.arR,D.arG,D.arE,D.aru,D.arz,D.arY,D.arQ],B.aw("C<+(h,h)>"))
D.aL1=w([],x.g)
D.ak_=w([],x.O)
D.ak0=w([],x.Y)
D.ak1=w([],B.aw("C<mr>"))
D.ak2=w([],B.aw("C<ms>"))
D.aL2=w([],x.U)
D.aL3=w([],x.u)
D.ak3=w([],x.r)
D.aoJ={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Tb={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yo=new B.ak(D.Tb,[0,0,0,0,0,0,0,C.cL],B.aw("ak<h,B>"))
D.aoH={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ao2=new B.ak(D.aoH,[0,0,0,0],B.aw("ak<h,w>"))
D.aoW={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.anq=new B.ak(D.aoW,[0,0,0,0,null,null,null,null],B.aw("ak<h,w?>"))
D.anm=new B.ak(D.aoJ,[D.yo,D.yo,D.yo,C.cL,C.cL,C.cL,D.ao2,D.anq],x.R)
D.anD=new B.ak(D.Tb,[0,0,0,0,0,0,0,C.cv],x.R)
D.aoG={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ao3=new B.ak(D.aoG,[0,0,0,0,0,0,0,C.cv],x.R)
D.a48=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4g=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a37=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3t=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3D=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4t=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2V=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3v=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3F=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3Z=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.ao8=new B.dh([50,D.a48,100,D.a4g,200,D.a37,300,D.a3t,400,D.a3D,500,D.a4t,600,D.a2V,700,D.a3v,800,D.a3F,900,D.a3Z],x.m)
D.T0=new B.rt(D.ao8,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7b=new B.ai(32,32,32,32)
D.aq_=new B.ag(D.a7b,C.bB,null)
D.a7d=new B.ai(48,48,48,48)
D.aq2=new B.ag(D.a7d,C.bB,null)
D.aq7=new B.ag(C.aj,C.bB,null)
D.akf=w([],B.aw("C<mK>"))
D.akg=w([],B.aw("C<na>"))
D.Xz=new A.Pm(D.akf,D.akg)
D.asI=new B.fK("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.asK=new B.fK("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.asM=new B.fK("Automaten-Business","Umsatz je Automat",null,null)
D.asN=new B.fK("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.asP=new B.fK("Top","Meistverkaufte Produkte",null,null)
D.asS=new B.fK("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.asT=new B.fK("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yd=new B.t0(C.F,C.q,0)
D.aCP=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.avp=new B.eb(D.aCP,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.r,null)
D.aCk=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.avq=new B.eb(D.aCk,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.r,null)
D.aLc=new B.R(!0,C.B,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCa=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aD4=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zq=new A.acH(0,"auto")
D.aDF=new A.acH(1,"top")
D.aHS=new A.wo("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aHT=new A.wo("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"c9O","bL6",()=>B.jn(new A.bpl(),x.D))
w($,"c9P","au1",()=>B.jn(new A.bpm(),x.a))
w($,"caK","x2",()=>B.buH(new A.brc(),x.P))
w($,"c9Q","brW",()=>C.aM.$1$1(new A.bpn(),x.d))
w($,"c9N","bL5",()=>C.aM.$1$1(new A.bpk(),x.X))
w($,"c9M","by9",()=>C.aM.$1$1(new A.bpj(),x.h))
w($,"c9L","brV",()=>B.aY7(A.c0h(),x.F,x.b))
w($,"c33","bry",()=>new A.avE())
v($,"c6i","ln",()=>new A.b_M())})()};
(a=>{a["bzukNEdCevRId/tiXs77eO63KyU="]=a.current})($__dart_deferred_initializers__);