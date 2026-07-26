((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Ny(d,e,f,g,h){return new A.a5N(f,g,d,h,e,null)},
a5N:function a5N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uB:function uB(d){this.a=d},
Dz:function Dz(d){this.a=d},
bPe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SX
w=x.f
v=x.N
u=x.z
t=A.aDt(B.dE(w.a(e.h(a0,"current")),v,u))
s=A.aDt(B.dE(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDt(B.dE(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cj
p=J.d_(p,new A.aDb(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cj
o=J.d_(o,new A.aDc(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cj
q=J.d_(q,new A.aDd(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.dE(w.a(e.h(a0,"customer")),v,u)
m=B.br(n.h(0,"purchases_count"))
m=m==null?null:C.d.a4(m)
if(m==null)m=0
l=A.oP(n.h(0,"app_gross"))
k=B.br(n.h(0,"active_customers"))
k=k==null?null:C.d.a4(k)
if(k==null)k=0
n=A.oP(n.h(0,"avg_basket"))
u=B.dE(w.a(e.h(a0,"derived")),v,u)
v=A.oP(u.h(0,"gross_margin_pct"))
e=A.oP(u.h(0,"net_margin_pct"))
w=A.oP(u.h(0,"ebitda_margin_pct"))
j=A.oP(u.h(0,"cashflow_operating"))
i=A.boN(u.h(0,"revenue_growth_yoy_pct"))
h=A.boN(u.h(0,"revenue_growth_mom_pct"))
g=A.boN(u.h(0,"result_growth_yoy_pct"))
u=A.boN(u.h(0,"result_growth_mom_pct"))
f=B.br(J.a3(d,"days"))
f=f==null?null:C.d.a4(f)
if(f==null)f=1
return new A.nX(t,s,r,p,o,q,new A.ayE(m,l,k,n),new A.azL(v,e,w,j,i,h,g,u),f)},
oP(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k_(J.am(d))
return w==null?0:w},
boN(d){if(d==null)return null
if(typeof d=="number")return d
return B.k_(J.am(d))},
q5:function q5(d,e,f,g){var _=this
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
ayE:function ayE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azL:function azL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nX:function nX(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aDb:function aDb(){},
aDc:function aDc(){},
aDd:function aDd(){},
aDt(d){var w=J.Y(d),v=A.tV(w.h(d,"revenue_net_7")),u=A.tV(w.h(d,"revenue_net_19")),t=A.tV(w.h(d,"revenue_net")),s=A.tV(w.h(d,"expense_net")),r=A.tV(w.h(d,"result_net")),q=A.tV(w.h(d,"vat_collected")),p=A.tV(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cj
w=J.d_(w,new A.aDu(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.nY(v,u,t,s,r,q,p,w)},
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
nY:function nY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDu:function aDu(){},
bPd(d){return new A.y7(d,new B.ij(x.c_),C.dC)},
bpA:function bpA(){},
bpB:function bpB(){},
brs:function brs(){},
bpC:function bpC(){},
bpz:function bpz(){},
bpy:function bpy(){},
y7:function y7(d,e,f){this.r=d
this.a=e
this.f=f},
aDa:function aDa(d,e,f){this.a=d
this.b=e
this.c=f},
aD9:function aD9(d,e,f){this.a=d
this.b=e
this.c=f},
bPf(){return new A.y8(null)},
akq(d,e,f,g,h){return new A.akp(e,h,g,f,d,null)},
y8:function y8(d){this.a=d},
aDs:function aDs(d){this.a=d},
aDk:function aDk(d,e,f){this.a=d
this.b=e
this.c=f},
aDl:function aDl(d,e,f){this.a=d
this.b=e
this.c=f},
aDm:function aDm(d){this.a=d},
aDj:function aDj(){},
aDn:function aDn(d){this.a=d},
aDo:function aDo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDr:function aDr(){},
aDq:function aDq(){},
aDp:function aDp(){},
aDi:function aDi(d,e){this.a=d
this.b=e},
aDg:function aDg(d){this.a=d},
aDh:function aDh(d){this.a=d},
afi:function afi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
akp:function akp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amB:function amB(d,e){this.e=d
this.a=e},
beZ:function beZ(d){this.a=d},
bf_:function bf_(d){this.a=d},
bf0:function bf0(d,e,f){this.a=d
this.b=e
this.c=f},
beY:function beY(){},
Ip:function Ip(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IT:function IT(d,e){this.c=d
this.a=e},
bkF:function bkF(d){this.a=d},
afg:function afg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hx:function Hx(d,e){this.c=d
this.a=e},
bw9(d,e,f,g,h){var w=null
return B.j4(w,w,!0,w,new A.boI(h,g,e,f),d,w,!0,!0,x.H)},
jA(d,e,f,g,h,i,j,k,l,m,n){return new A.akW(g,n,i,e,d,m,f,k,l,j,null)},
att(d,e,f){var w=0,v=B.r(x.H)
var $async$att=B.m(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.l(B.j4(null,null,!0,null,new A.boG(f,e,e.aJ(0,$.c1(),x.A)),d,null,!0,!0,x.H),$async$att)
case 2:return B.p(null,v)}})
return B.q($async$att,v)},
a5O:function a5O(d){this.a=d},
aIi:function aIi(){},
aIh:function aIh(){},
aIg:function aIg(){},
HR:function HR(d,e){this.c=d
this.a=e},
bcx:function bcx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcm:function bcm(){},
bcn:function bcn(){},
bco:function bco(){},
bcp:function bcp(){},
bcq:function bcq(){},
bcr:function bcr(){},
bcs:function bcs(){},
bct:function bct(){},
bcu:function bcu(d){this.a=d},
bcv:function bcv(d){this.a=d},
bcw:function bcw(d){this.a=d},
bcy:function bcy(d,e){this.a=d
this.b=e},
bcz:function bcz(d,e){this.a=d
this.b=e},
boI:function boI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boH:function boH(d){this.a=d},
ajJ:function ajJ(d){this.a=d},
akW:function akW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bcA:function bcA(d,e){this.a=d
this.b=e},
TT:function TT(d,e,f){this.c=d
this.d=e
this.a=f},
Xo:function Xo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjY:function bjY(){},
bjZ:function bjZ(){},
bk_:function bk_(d){this.a=d},
T7:function T7(d,e,f){this.c=d
this.d=e
this.a=f},
b3x:function b3x(){},
b3z:function b3z(d){this.a=d},
b3A:function b3A(d){this.a=d},
b3y:function b3y(){},
Ti:function Ti(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4k:function b4k(){},
b4l:function b4l(){},
b4m:function b4m(){},
b4n:function b4n(d){this.a=d},
alp:function alp(d,e){this.c=d
this.a=e},
bd3:function bd3(){},
bd4:function bd4(){},
ahN:function ahN(d,e){this.c=d
this.a=e},
BG:function BG(d,e,f){this.c=d
this.d=e
this.a=f},
aqX:function aqX(d,e){this.c=d
this.a=e},
blW:function blW(){},
blX:function blX(){},
wn:function wn(d,e){this.c=d
this.a=e},
ag6:function ag6(d,e){this.e=d
this.a=e},
b21:function b21(){},
b20:function b20(){},
b2_:function b2_(d,e,f){this.a=d
this.b=e
this.c=f},
b1W:function b1W(d,e){this.a=d
this.b=e},
b22:function b22(d){this.a=d},
b23:function b23(d){this.a=d},
b1X:function b1X(){},
b1Y:function b1Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1Z:function b1Z(d,e,f){this.a=d
this.b=e
this.c=f},
boG:function boG(d,e,f){this.a=d
this.b=e
this.c=f},
boF:function boF(d){this.a=d},
AM:function AM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SM:function SM(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b1R:function b1R(d){this.a=d},
b1S:function b1S(d){this.a=d},
b1U:function b1U(d,e){this.a=d
this.b=e},
b1T:function b1T(d,e){this.a=d
this.b=e},
b1V:function b1V(d){this.a=d},
bc:function bc(){},
bzs(d){return new A.Kh(d,C.au,C.ds,null,null)},
Kh:function Kh(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SN:function SN(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cS$=g
_.c=_.a=null},
b24:function b24(d,e){this.a=d
this.b=e},
b25:function b25(d){this.a=d},
avX(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akc:f,p=a0==null?16:a0,o=d==null?D.a_r:d,n=g==null,m=n?A.bsE(r,r,r,r,r,r,r,r):g,l=a3==null?D.XD:a3
n=n?A.bsE(r,r,r,r,r,r,r,r):g
w=j==null?D.Dn:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nF(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bk,s,w,i,n)},
aw3(d,e,f,g,h){var w=d==null?D.akd:d,v=e==null?2:e,u=g==null?C.lg:g
return new A.fy(h,f===!0,w,v,u)},
bMy(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.aw3(A.kk(d.c,e.c,f,A.c_o(),x.fj),B.ab(d.d,e.d,f),!1,A.kk(d.e,e.e,f,A.Zv(),x.S),w)},
a_T(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T4
else w=h
v=m==null
u=v?8:m
t=$.lo()
s=t.aWc(f,v?8:m)
t=t.aWd(g,v?8:m)
v=d==null?A.bzq(r,r,r,r,r):d
return new A.id(q,l,w,j,u,s,e,t,v,k==null?D.ake:k)},
bMz(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mu(d.f,e.f,f),p=A.kk(d.r,e.r,f,A.Zv(),x.S),o=B.bV(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a_T(A.bzq(v,u,null,!1,t),p,q,o,s,n,null,A.kk(d.y,e.y,f,A.c_p(),x.G),m,r)},
bMA(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.ms(u,w,v,B.bV(d.d,e.d,f))},
bzq(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.di
else w=d
return new A.a_P(g===!0,v,u,w,f)},
bsE(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a_V(4,C.hJ,16,D.xj,0,120,A.c_r(),!1,!1,D.Zu,0,C.A,A.c_q())
else w=k
v=j==null?C.kQ:j
return new A.a_U(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c0c(d,e,f,g){var w=null,v=B.iW(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.M,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cr(C.d.j(f.b),v)},
c0b(d){return A.ay4(D.di,15)},
nF:function nF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avW:function avW(d,e){this.a=d
this.b=e},
fy:function fy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aw4:function aw4(){},
aw5:function aw5(){},
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
a_P:function a_P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_U:function a_U(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acK:function acK(d,e){this.a=d
this.b=e},
a_V:function a_V(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Ki:function Ki(d){this.a=d},
a_W:function a_W(d,e,f,g,h,i,j,k){var _=this
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
ag2:function ag2(){},
ag9:function ag9(){},
aga:function aga(){},
agc:function agc(){},
agd:function agd(){},
age:function age(){},
agf:function agf(){},
agg:function agg(){},
agh:function agh(){},
aw6:function aw6(d){this.a=d},
aw7:function aw7(){},
ue:function ue(d,e,f){this.a=d
this.b=e
this.c=f},
agb:function agb(){},
aw8:function aw8(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aw9:function aw9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awa:function awa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4Q:function a4Q(d){this.b=d},
a_S:function a_S(d,e,f){this.d=d
this.e=e
this.a=f},
a9U:function a9U(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i0=e
_.cV=f
_.fV=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
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
c0d(d,e){var w=null
return new A.QQ(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
avQ(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p0(t,e.b,new A.pV(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bAO(d,e,f){var w=A.avQ(d.b,e.b,f),v=A.avQ(d.d,e.d,f),u=A.avQ(d.e,e.e,f)
return new A.uD(e.a,w,A.avQ(d.c,e.c,f),v,u)},
bPh(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bAM(d,e,f){return new A.ya(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c2B(d){return!0},
c0g(d){return D.a89},
bAN(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pm(w,f,g,e)},
bCH(d,e,f){var w,v=A.kk(d.a,e.a,f,A.c_k(),x.dv)
v.toString
w=A.kk(d.b,e.b,f,A.c_m(),x.bN)
w.toString
return new A.Pp(v,w)},
bQ2(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r5(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mM(t,w,v,u)},
bVc(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r5(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nc(t,w,v,u)},
bQ1(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pg(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bQ_(B.bsv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r5(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kk(d.d,e.d,f,A.Zv(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kF(r,e.f,e.r,t,e.x,u,v,w,s)},
bVb(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pg(w.b,v.b,f)
u.toString
t=B.co(w.c,v.c,f)
t=A.bV9(B.bsv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r5(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kk(d.d,e.d,f,A.Zv(),x.S)
if(u==null)u=v==null?C.C:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
bQ_(d,e,f,g,h,i){return new A.a50(f,!1,g,i,d,e)},
bQ0(d){return C.d.al(d.e,1)},
bV9(d,e,f,g,h,i){return new A.ad9(f,!1,g,i,d,e)},
bVa(d){return C.d.al(d.e,1)},
bAJ(d,e,f){var w,v=A.kk(d.a,e.a,f,A.c_j(),x.cm)
v.toString
w=A.kk(d.b,e.b,f,A.c_l(),x.es)
w.toString
return new A.Mc(v,w,!0)},
bPg(d,e,f){return new A.Mn(d,e==null?4:e,f)},
a_I:function a_I(){},
Cq:function Cq(d,e){this.a=d
this.b=e},
th:function th(d,e){this.r=d
this.w=e},
pV:function pV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abi:function abi(){},
p0:function p0(d,e,f,g){var _=this
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
pm:function pm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acM:function acM(){},
Pp:function Pp(d,e){this.a=d
this.b=e},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nc:function nc(d,e,f,g){var _=this
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
a50:function a50(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ad9:function ad9(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Mc:function Mc(d,e,f){this.a=d
this.b=e
this.c=f},
uC:function uC(){},
Mn:function Mn(d,e,f){this.a=d
this.b=e
this.c=f},
afY:function afY(){},
ag1:function ag1(){},
aj8:function aj8(){},
ajo:function ajo(){},
ajp:function ajp(){},
ajr:function ajr(){},
ajs:function ajs(){},
akf:function akf(){},
ake:function ake(){},
akg:function akg(){},
anF:function anF(){},
app:function app(){},
apq:function apq(){},
ar0:function ar0(){},
arD:function arD(){},
arC:function arC(){},
arE:function arE(){},
avM:function avM(){},
Kb:function Kb(){},
Kc:function Kc(d,e,f){this.c=d
this.d=e
this.a=f},
avO:function avO(d){this.a=d},
avN:function avN(d){this.a=d},
QQ:function QQ(d,e,f){this.c=d
this.e=e
this.a=f},
Xd:function Xd(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bTK(d,e,f){var w=B.ac(f),v=w.i("aa<1,jJ>")
v=B.Q(new B.aa(f,new A.aXt(),v),v.i("av.E"))
w=w.i("aa<1,c>")
w=B.Q(new B.aa(f,new A.aXu(),w),w.i("av.E"))
return new A.abj(e,d,v,w,null)},
bMv(d,e,f){var w,v=null,u=B.aH(x.dO),t=J.a5E(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tf(v,C.ap,C.w,new B.kf(1),v,v,v,v,C.bu,v)
u=new A.a_J(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aH(x.v))
u.bk()
return u},
abj:function abj(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aXt:function aXt(){},
aXu:function aXu(){},
a_J:function a_J(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VK$=h
_.aRX$=i
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
bcG:function bcG(d,e){this.a=d
this.b=e},
avP:function avP(){},
jJ:function jJ(d,e){this.a=d
this.b=e},
nE:function nE(d,e){this.a=d
this.b=e},
afZ:function afZ(){},
ag_:function ag_(){},
ag0:function ag0(){},
SK:function SK(){},
Ad:function Ad(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXv:function aXv(d){this.a=d},
aXw:function aXw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXx:function aXx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a49(d,e){var w=d==null?B.d4(C.C,1):d
return new A.a48(e!==!1,w)},
a_Y:function a_Y(){},
a48:function a48(d,e){this.a=d
this.b=e},
Mu:function Mu(){},
a4a:function a4a(){},
awj:function awj(){},
aCC:function aCC(d,e){this.a=d
this.b=e},
agk:function agk(){},
ajl:function ajl(){},
ajm:function ajm(){},
ajt:function ajt(){},
Kl:function Kl(){},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4e:function a4e(d){this.a=d},
a4f:function a4f(d){this.a=d},
a4g:function a4g(d){this.a=d},
Mp:function Mp(){},
Mq:function Mq(){},
a4j:function a4j(d){this.a=d},
Ms:function Ms(){},
Mt:function Mt(d){this.a=d},
a4d:function a4d(d){this.a=d},
a4c:function a4c(d){this.a=d},
Mo:function Mo(d){this.a=d},
a4h:function a4h(d){this.a=d},
a4i:function a4i(d){this.a=d},
Mr:function Mr(d){this.a=d},
FB:function FB(){},
aSI:function aSI(d){this.a=d},
aSJ:function aSJ(d){this.a=d},
aSK:function aSK(d){this.a=d},
aSL:function aSL(d){this.a=d},
aSM:function aSM(d){this.a=d},
aSN:function aSN(d){this.a=d},
aSO:function aSO(d){this.a=d},
aSP:function aSP(d){this.a=d},
aSQ:function aSQ(d){this.a=d},
aSR:function aSR(d){this.a=d},
aSS:function aSS(d){this.a=d},
aST:function aST(d){this.a=d},
aSU:function aSU(d){this.a=d},
NM:function NM(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V1:function V1(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cS$=h
_.c=_.a=null},
bcL:function bcL(d,e){this.a=d
this.b=e},
bcJ:function bcJ(d){this.a=d},
bcK:function bcK(d,e){this.a=d
this.b=e},
bcI:function bcI(){},
bcM:function bcM(d){this.a=d},
btU(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pz(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T4:u
else w=g
v=f==null?A.avV(!1,u,0,u,!1,D.vM):f
w=new A.e9(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.avV(!1,u,0,u,!1,D.vM):d,j,a0,i,s,!1,p)
w.aqf(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bQx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bzr(d.ay,e.ay,f)
v=A.bzr(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.kk(d.cy,e.cy,f,A.Zv(),x.S)
r=B.Z(d.r,e.r,f)
q=B.r5(d.w,e.w,f)
p=A.kk(d.a,e.a,f,A.c_i(),x.cw)
p.toString
o=B.bDa(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aIx(v,m,w,r,e.z,s,new A.y9(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NN(n),!1,u,o,!0,e.cx,p)},
avV(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
else w=e
return new A.a_R(h,w,g,i,f,!1)},
bzr(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.r5(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bAN(t,A.kk(v.d,u.d,f,A.Zv(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.r5(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.avV(!1,s,v,u,e.a,new A.Kg(!1,r,w.c,!0))},
bMC(d,e,f){var w=B.Z(d.c,e.c,f),v=B.r5(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
return new A.mt(e.a,e.b,w,v)},
c2C(d){return!0},
bvY(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kN)return A.bwI(w.a,A.bty(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.di:w},
bXX(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kN)w=A.bwI(v.a,A.bty(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.di}return A.ay4(w,40)},
bFE(d,e,f,g,h){var w,v=A.bvY(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kN)w=A.bwI(u.a,A.bty(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.di}u=A.ay4(w,40)
return new A.Mn(v,h==null?4:h,u)},
c2A(d,e){return!0},
c_5(d,e){return Math.abs(d.a-e.a)},
c0j(d,e){var w=J.d_(e,new A.bpo(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c0f(d,e){return-1/0},
c0e(d,e){return d.a[e].b},
bGQ(d){var w=J.d_(d,new A.bpl(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bGP(d){return A.ay4(D.di,15)},
pz:function pz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aIy:function aIy(){},
NN:function NN(d){this.a=d},
a_R:function a_R(d,e,f,g,h,i){var _=this
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
Kg:function Kg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y9:function y9(d,e,f){this.a=d
this.b=e
this.c=f},
aIj:function aIj(d,e){this.a=d
this.b=e},
a4b:function a4b(){},
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
bpo:function bpo(d){this.a=d},
bpn:function bpn(d){this.a=d},
a61:function a61(){},
bpl:function bpl(){},
mR:function mR(){},
q3:function q3(d,e,f,g,h,i){var _=this
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
G2:function G2(d){this.a=d},
NO:function NO(d){this.a=d},
yT:function yT(d,e){this.a=d
this.b=e},
ag7:function ag7(){},
ag8:function ag8(){},
agl:function agl(){},
ajn:function ajn(){},
ajq:function ajq(){},
al2:function al2(){},
al3:function al3(){},
al4:function al4(){},
al6:function al6(){},
al7:function al7(){},
al8:function al8(){},
al9:function al9(){},
apo:function apo(){},
ar_:function ar_(){},
aIz:function aIz(d){this.a=d},
aIA:function aIA(){},
aIB:function aIB(){},
yU:function yU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
al5:function al5(){},
aIC:function aIC(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIF:function aIF(){},
aID:function aID(d,e,f){this.a=d
this.b=e
this.c=f},
aIE:function aIE(d,e,f){this.a=d
this.b=e
this.c=f},
aIG:function aIG(){},
v9:function v9(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a60:function a60(d,e,f){this.d=d
this.e=e
this.a=f},
aa6:function aa6(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i0=e
_.cV=f
_.fV=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
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
bsD(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ac(o),l=new B.aa(o,new A.avY(),m.i("aa<1,M>")).km(0,new A.avZ()),k=e-l,j=new A.aw1(k,d,n)
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
new B.iL(o,m.i("iL<1>")).au(0,new A.aw_(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iL(o,m.i("iL<1>")).au(0,new A.aw0(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
avY:function avY(){},
avZ:function avZ(){},
aw1:function aw1(d,e,f){this.a=d
this.b=e
this.c=f},
aw2:function aw2(d,e,f){this.a=d
this.b=e
this.c=f},
aw_:function aw_(d,e,f){this.a=d
this.b=e
this.c=f},
aw0:function aw0(d,e,f){this.a=d
this.b=e
this.c=f},
bty(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iL(w,B.ac(w).i("iL<1>")).au(0,new A.aFH(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFH:function aFH(d,e){this.a=d
this.b=e},
aze(d,e){var w,v
if(e!=null){w=B.ac(e).i("aa<1,M>")
v=B.Q(new B.aa(e,new A.azf(),w),w.i("av.E"))
return A.c07(d,new A.a0v(v,x.cX))}else return d},
azf:function azf(){},
bUj(d,e){var w=!0
if(d!==C.f0)if(!(d===C.ap&&e===C.w))w=d===C.ij&&e===C.aX
if(w)return D.DB
else{w=!0
if(d!==C.hp)if(!(d===C.ij&&e===C.w))w=d===C.ap&&e===C.aX
if(w)return D.DC
else return D.a8P}},
MT:function MT(d,e){this.a=d
this.b=e},
a0l:function a0l(d,e){this.a=d
this.b=e},
yX:function yX(d,e){this.a=d
this.$ti=e},
alg:function alg(){},
c07(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cB($.al().r)
for(w=B.b([],x.C),v=new B.NG(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.V(B.fq('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.NF(v,s)
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
if(o){q=new B.JH(d.aRT(r,p,p+n,!0),C.q,null)
t.push(q)
m=l.d
if(m!=null)q.hG(m)}p+=n
o=!o}}return l},
a0v:function a0v(d,e){this.a=d
this.b=0
this.$ti=e},
b0_:function b0_(){},
PJ:function PJ(d,e,f,g,h,i,j){var _=this
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
aT2:function aT2(d){this.a=d},
a44:function a44(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
btm(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bMF(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geh(v)===0){v=d.a.a
if(v.geh(v)===0){v=d.b.a
if(v.geh(v)===0){v=d.c.a
v=v.geh(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
ay4(d,e){var w=1-e/100
return B.aD(d.gfD(d),C.d.b0(d.gNu()*w),C.d.b0(d.gFP()*w),C.d.b0(d.gJZ()*w))},
bAL(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
btn(d){var w=d.a,v=w?A.aXs(d.b):0,u=w?A.aXs(d.c):0,t=w?A.aXs(d.d):0
return new B.ak(v,u,t,w?A.aXs(d.e):0)},
bRM(d){var w
if(d.c===0){d.seT(null)
w=B.c_(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
buf(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seT(f.mJ(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seT(null)}},
aXs(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kk(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kL(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kL(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c1r(d,e,f){return C.d.b0(d+(e-d)*f)},
bwI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a5N.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.n
r=r?C.l:C.ak
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cI(t.x,C.l,s,18),C.b3],w))
v.push(B.aK(new B.e7(t.c,!1,s),1))
v=B.an(v,C.B,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.j(t.d,1,C.ai,s,B.bY(u==null?C.h:u,22,C.M),s,s,s)],w)
return B.by(r,B.ae(w,C.B,C.i5,C.i),q,s,C.ae,s,3)}}
A.uB.prototype={
Ll(d){return this.aRW(d)},
aRW(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Ll=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_summary",B.a4(["p_from",E.r_(d.a),"p_to",E.r_(d.b)],s,r),r),$async$Ll)
case 3:q=f
if(q==null){u=D.anQ
w=1
break}if(x.f.b(q)){u=B.dE(q,s,r)
w=1
break}u=D.aog
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Ll,v)},
Lk(d){return this.aRV(d)},
aRV(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$Lk=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_kpis",B.a4(["p_from",E.r_(d.a),"p_to",E.r_(d.b)],s,r),r),$async$Lk)
case 3:q=f
if(x.f.b(q)){u=B.dE(q,s,r)
w=1
break}u=D.anz
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Lk,v)},
pz(d){return this.apY(d)},
apY(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.o(f,v)
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
Lg(d){return this.aRL(d)},
aRL(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$Lg=B.m(function(e,f){if(e===1)return B.o(f,v)
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
FJ(d){return this.aja(d)},
aja(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FJ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Ll(d),$async$FJ)
case 7:q=f
o=A.aDt(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FJ,v)},
FF(d){return this.aiW(d)},
aiW(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FF=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lk(d),$async$FF)
case 7:q=f
o=A.bPe(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$FF,v)},
pz(d){return this.apZ(d)},
apZ(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.Hk(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$pz,v)},
Lf(d){return this.aRK(d)},
aRK(d){var w=0,v=B.r(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
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
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lf,v)},
Hk(d){if(d instanceof B.y4)return d
if(d instanceof B.lV){if(d.b==="42501")return new B.vu(d.a)
return new B.t_(d.a)}if(d instanceof B.MI)return new B.t_("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AE("Unerwarteter Fehler: "+B.i(d))},
$iaDf:1}
A.q5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ve.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w5.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayE.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azL.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.nX.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ca.prototype={
gbI(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.nY.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.y7.prototype={
GG(d){return this.apX(0)},
apX(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$GG=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dn)
s=t.r
r=s.aJ(0,$.x1(),x.P)
p.a=null
w=3
return B.l(B.p_(new A.aDa(p,t,r),x.H),$async$GG)
case 3:t.se4(0,f)
q=t.f
if(q.ghn(q)==null){q=$.bsb()
s=s.e
s===$&&B.a()
s.cm(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$GG,v)},
Le(){return this.aRJ()},
aRJ(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$Le=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dn)
s=t.r.aJ(0,$.x1(),x.P)
q.a=null
w=3
return B.l(B.p_(new A.aD9(q,t,s),x.H),$async$Le)
case 3:t.se4(0,e)
r=t.f
u=r.ghn(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$Le,v)}}
A.y8.prototype={
du(d,e){var w=null,v=e.ar($.x1(),x.P),u=e.ar($.bsb(),x.aN)
return B.iO(B.dL(B.b([new B.fK("Finanzen","Dashboard",new A.afi(e.ar($.bsa(),x.b).gja(),new A.aDk(this,d,e),new A.aDl(this,d,e),new A.aDm(d),new A.aDn(d),new A.aDo(this,d,e,v),w),w),C.ax,new A.amB(v,w),C.c6,D.aen,C.c6,B.dq(u,new A.aDp(),new A.aDq(),new A.aDr(),!1,!0,!1,x.d,x.l)],x.p),C.cI,w,!1),C.l,new A.aDs(e))},
J9(d,e){return this.aKg(d,e)},
aKg(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$J9=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.bsa()
w=3
return B.l(e.aJ(0,s.ghM(),x.F).GG(0),$async$J9)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ghn(s)
t=d.P(x.q).f
t.bu(B.cf(null,null,null,null,null,C.t,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$J9,v)},
B4(d,e){return this.avV(d,e)},
avV(d,e){var w=0,v=B.r(x.H),u,t,s
var $async$B4=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=3
return B.l(e.aJ(0,$.bsa().ghM(),x.F).Le(),$async$B4)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bu(D.avF)
w=1
break}t=B.pP(C.q,10)
w=4
return B.l($.bIV().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B4)
case 4:case 1:return B.p(u,v)}})
return B.q($async$B4,v)},
B5(d,e,f){return this.aHY(d,e,f)},
aHY(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B5=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.l(B.j4(null,null,!0,null,new A.aDi(f,d),d,null,!0,!0,x.cJ),$async$B5)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nz(e.aJ(0,$.c1(),x.A))
p=f.a
o=f.b
n=$.dZ()
m=n.an(p)
n=n.an(o)
w=8
return B.l(r.zl("finance_period",p,o,B.a4(["period_from",p.ej()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B5)
case 8:if(d.e!=null)d.P(x.q).f.bu(F.uP)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bu(B.cf(null,null,null,null,null,C.t,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$B5,v)}}
A.afi.prototype={
u(d){var w=this,v=null,u=A.akq(C.l,F.hO,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akq(v,D.aau,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akq(v,D.a9z,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akq(C.ad,C.j7,C.ad,s?v:w.e,"PDF-Export")
return B.an(B.b([u,C.b3,t,C.b3,r,C.b3,q,C.b3,A.akq(C.al,C.fi,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.m,C.f,C.P,0,v,v)}}
A.akp.prototype={
u(d){var w,v=this,u=null,t=B.aS(12),s=B.aS(12),r=B.aS(12),q=v.w
if(q==null)q=C.ak
q=B.d4(q,1)
w=v.r
if(w==null)w=C.h
return B.GF(B.dV(!1,C.Z,!0,t,B.eW(!1,s,!0,B.b6(u,B.cI(v.c,w,u,20),C.r,u,u,new B.b1(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.ah,0,u,u,u,u,u,C.bD),u,v.d,u,u)}}
A.amB.prototype={
du(d,e){var w=null,v=this.e,u=$.dZ(),t=x.p
return B.by(w,B.ae(B.b([D.a7T,C.I,B.an(B.b([D.abf,C.b4,B.aK(B.j(u.an(v.a)+" \u2013 "+u.an(v.b),w,w,w,B.y(C.h,16,C.M),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.v,B.oA(C.d4,B.b([new A.Ip("Monat",new A.beZ(e),w,w),new A.Ip("Jahr (YTD)",new A.bf_(e),w,w),new A.Ip("Zeitraum w\xe4hlen \u2026",new A.bf0(this,d,e),D.a9E,w)],t),C.es,6,8)],t),C.B,C.f,C.i),w,w,C.D,w,3)},
Iy(d,e){return this.aGT(d,e)},
aGT(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$Iy=B.m(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.bb(Date.now(),0,!1)
s=u.e
w=2
return B.l(E.atL(new A.beY(),d,B.bJ(B.aV(t)-5,1,1,0,0,0,0),new B.lv(s.a,s.b,x.bz),B.bJ(B.aV(t)+1,1,1,0,0,0,0),C.eh),$async$Iy)
case 2:r=g
if(r!=null)e.aJ(0,$.x1().ghM(),x.V).wn(0,new E.lA(r.a,r.b))
return B.p(null,v)}})
return B.q($async$Iy,v)}}
A.Ip.prototype={
u(d){var w=null,v=B.aS(9999),u=B.aS(9999),t=B.aS(9999),s=B.d4(C.ak,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cI(p,C.h,w,14),C.b3],r))
q.push(B.j(this.c,w,w,w,B.y(C.h,13,C.M),w,w,w))
return B.dV(!1,C.Z,!0,v,B.eW(!1,u,!0,B.b6(w,B.an(q,C.m,C.f,C.P,0,w,w),C.r,w,w,new B.b1(w,w,s,t,w,w,C.F),w,w,w,w,C.kP,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.ah,0,w,w,w,w,w,C.bD)}}
A.IT.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ji(new A.bkF(this)),C.c6,D.a7Y,C.v],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.an(B.b([D.abD,C.aA,B.aK(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.u,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.ah,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afg(t.a,t.b,t.c==="revenue",t.d,s),C.I],r))}q.push(B.ae(w,C.m,C.f,C.i))}return B.ae(q,C.ab,C.f,C.i)}}
A.afg.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aN:C.ah,s=B.d4(u?C.l:C.ak,1),r=B.aS(4),q=w.c
r=B.b6(C.a_,B.j(C.c.a_(q,0,1),v,v,v,B.bY(C.h,14,C.p),v,v,v),C.r,v,v,new B.b1(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ai,v,B.y(C.h,14,C.M),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aK(B.ae(B.b([q,B.j(t,v,v,v,B.y(C.u,12,C.k),v,v,v)],s),C.B,C.f,C.i),1)
q=$.dB().an(w.f)
return B.by(v,B.an(B.b([r,C.aA,t,B.j(q,v,v,v,B.y(u?C.al:C.h,15,C.M),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.ea,v,3)}}
A.Hx.prototype={
u(d){var w=null
return B.by(C.ad,B.an(B.b([D.acc,C.aA,B.aK(B.j(this.c,w,w,w,B.y(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fI,w,C.D,w,3)}}
A.a5O.prototype={
du(d,e){return B.dq(e.ar($.bLm(),x.e),new A.aIg(),new A.aIh(),new A.aIi(),!1,!0,!1,x.X,x.l)}}
A.HR.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.at8,C.v,B.ji(new A.bcx(v,q,100-t.w.a,w,p)),C.v,new A.ajJ(u),C.ax,D.at7,C.v,new A.ag6(t,u),C.ax,D.at2,C.v,B.bE(u,!0,u,B.mL(u,B.by(u,new A.T7(t,220,u),u,u,C.D,u,3),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcy(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.L,u),C.ax,D.asY,C.v,B.bE(u,!0,u,B.mL(u,new A.Ti(t,200,!1,u),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcz(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.L,u),C.ax,D.at1,C.v,new A.alp(t,u),C.ax,D.at_,C.v,new A.ahN(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.ax,D.at4,C.v,new A.aqX(t,u)],s))
return B.ae(r,C.ab,C.f,C.i)}}
A.ajJ.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.u,11,C.k).dw(1.35),w,w,w)}}
A.akW.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ad:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bcA(m,d):l
r=x.p
q=B.b([B.aK(B.j(m.c.toUpperCase(),l,l,l,B.y(C.u,10,C.p).fE(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d4(C.ad,0.8)
n=B.aS(4)
q.push(B.b6(l,B.j("Ziel "+p,l,l,l,B.y(C.ad,9,C.p),l,l,l),C.r,l,l,new B.b1(l,l,o,n,l,l,C.F),l,l,l,l,C.n3,l,l,l))}q=B.b([B.an(q,C.m,C.f,C.i,0,l,l),C.b_,new A.a44(C.B6,C.e3,B.j(m.d,l,l,l,B.bY(w,22,C.p),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ai,l,B.y(C.u,10,C.aG),l,l,l))
q.push(C.cn)
q.push(B.an(B.b([new A.TT("Vormonat",m.r,l),C.cm,new A.TT("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cn)
q.push(B.aK(new A.Xo(v,m.y,m.z,l),1))
return B.bE(l,u,l,B.mL(l,B.by(l,B.ae(q,C.B,C.f,C.i),l,l,C.dt,l,3),C.a9,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.L,l)}}
A.TT.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aS(4)
return B.b6(r,B.j(this.c+" \u2014",r,r,r,B.y(C.u,9,C.p),r,r,r),C.r,r,r,new B.b1(C.ak,r,r,q,r,r,C.F),r,r,r,r,C.n3,r,r,r)}w=q>=0
v=w?C.al:C.ad
u=v.ic(0.12)
t=B.d4(v,0.7)
s=B.aS(4)
return B.b6(r,B.an(B.b([B.cI(w?F.a8V:D.a8U,v,r,10),F.avm,B.j(this.c+" "+C.d.al(q,1)+" %",r,r,r,B.y(v,9,C.p),r,r,r)],x.p),C.m,C.f,C.P,0,r,r),C.r,r,r,new B.b1(u,r,t,s,r,r,C.F),r,r,r,r,C.n3,r,r,r)}}
A.Xo.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.km(j,new A.bjY())
t=C.b.km(j,new A.bjZ())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bk_(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a49(k,!1)
w=B.b([A.aIx(k,2,A.avV(!1,C.l.ic(0.16),0,k,!0,D.vM),C.l,0.35,k,D.Ds,k,!0,!1,!0,!1,D.EU,!1,10,D.Yh,!0,C.lg,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NM(A.btU(k,k,k,D.akf,l,D.Bk,D.Dn,D.Dt,w,D.aer,k,m,k,n,D.XD,D.akg,D.a8c),C.au,C.af,k,k)}}
A.T7.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aI9
w=C.b.fG(p,0,new A.b3x())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aw3(B.b([A.a_T(q,q,D.AL,q,C.l,q,q,q,r.b,6),A.a_T(q,q,D.AL,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.ci(A.bzs(A.avX(q,q,u,q,q,A.a49(q,!1),q,new A.ya(!0,!0,q,new A.b3y(),A.Zq(),!1,q,A.atv(),A.Zq()),q,v,q,q,new A.uD(!0,new A.p0(16,q,new A.pV(!0,new A.b3z(this),46,q),!0),D.ki,D.ki,new A.p0(16,q,new A.pV(!0,new A.b3A(p),26,q),!0)))),this.d,q)},
aJz(d){if(Math.abs(d)>=1000)return C.d.al(d/1000,1)+" k"
return C.d.al(d,0)}}
A.Ti.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.aa(v,new A.b4k(),w),x.i)
C.b.M(o,new B.aa(u,new A.b4l(),w))
t=C.b.fG(o,0,new A.b4m())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aw3(B.b([A.a_T(q,q,q,q,C.l,q,q,q,v[s],14),A.a_T(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ci(A.bzs(A.avX(q,q,n,q,q,A.a49(q,!1),q,D.Dt,q,o,q,q,new A.uD(!0,D.ki,D.ki,D.ki,new A.p0(16,q,new A.pV(!0,new A.b4n(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.D,q,3)}}
A.alp.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aI8
w=new B.aa(l,new A.bd3(),B.ac(l).i("aa<1,M>")).km(0,new A.bd4())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.y(C.h,14,C.p),m,m,m)
p=$.dB()
o=r.d
n=new B.aW(4,4)
o=B.b([B.an(B.b([new B.nV(1,C.fh,B.ae(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.an(r.f),m,m,m,B.y(C.u,12,C.aG),m,m,m)],v),C.B,C.f,C.i),m),C.b4,B.j(p.an(o),m,m,m,B.bY(C.h,16,C.p),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cn,new B.CT(new B.d3(n,n,n,n),C.bC,B.Eg(C.ak,8,C.d.c1(o/w,0,1),D.Az),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.Zt(r.gbI(),q.gbI())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.by(m,B.ae(u,C.m,C.f,C.i),m,m,C.D,m,3)}}
A.ahN.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aK(new A.BG("Aktive Kunden",""+s,u),1)
w=B.aK(new A.BG("K\xe4ufe",""+t.a,u),1)
v=$.dB()
return B.by(u,B.an(B.b([s,w,B.aK(new A.BG("\xd8-Warenkorb",v.an(t.d),u),1),B.aK(new A.BG("Umsatz/Kunde",v.an(r),u),1)],x.p),C.m,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.BG.prototype={
u(d){var w=null
return B.ae(B.b([B.j(this.c.toUpperCase(),w,w,w,B.y(C.u,10,C.p).fE(0.6),w,w,w),C.bQ,B.j(this.d,w,w,w,B.bY(C.h,20,C.p),w,w,w)],x.p),C.B,C.f,C.P)}}
A.aqX.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.blW(),B.ac(q).i("aa<1,M>")).km(0,new A.blX()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.an(B.b([new B.nV(1,C.fh,B.j(u.b,1,C.ai,r,B.y(C.h,13,C.p),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.y(C.u,12,C.M),r,r,r),B.j($.dB().an(t),r,r,r,B.y(C.h,13,C.p),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.b_,new B.CT(new B.d3(s,s,s,s),C.bC,B.Eg(C.ak,6,C.d.c1(t/p,0,1),D.Az),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.Zt(u.gbI(),s.gbI())
else s=!0
if(!s)t.push(C.I)
C.b.M(n,t)}return B.by(r,B.ae(n,C.m,C.f,C.i),r,r,C.D,r,3)}}
A.wn.prototype={
u(d){var w=null
return B.by(w,B.j(this.c,w,w,w,B.y(C.u,13,C.k),w,w,w),C.ah,w,C.D,w,3)}}
A.ag6.prototype={
du(d,e){return B.dq(e.ar($.byp(),x.fM),new A.b2_(this,d,e),new A.b20(),new A.b21(),!1,!0,!1,x.h,x.l)}}
A.AM.prototype={
X(){return new A.SM()},
aWR(){return this.d.$0()}}
A.SM.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.bb(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fE(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.H8[t].a
if(v)r=""
else{r=B.br(J.a3(w,s))
if(r==null)r=null
r=C.d.al(r==null?0:r,2)
r=B.b9(r,".",",")}u.m(0,s,new B.bH(new B.cS(r,C.bK,C.aS),$.af()))}q.e!==$&&B.b5()
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
w=B.b9(w,".","")
w=B.k_(B.b9(w,",","."))
return w==null?0:w},
HX(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HX=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b1R(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZh("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ej(),0,10),"p_cash_and_bank",q.rg("cash_and_bank"),"p_receivables",q.rg("receivables"),"p_inventory_value",q.rg("inventory_value"),"p_other_current_assets",q.rg("other_current_assets"),"p_fixed_assets",q.rg("fixed_assets"),"p_current_liabilities",q.rg("current_liabilities"),"p_long_term_liabilities",q.rg("long_term_liabilities"),"p_equity",q.rg("equity")],x.N,x.aU))
w=7
return B.l(n,$async$HX)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWR()
o=q.c
o.toString
B.bg(o,!1).fb()
q.c.P(x.q).f.bu(D.avG)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bu(B.cf(null,null,null,null,null,C.t,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b1S(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$HX,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bY(C.h,18,C.p),r,r,r),p=s.f?r:new A.b1U(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.hE(D.abh,B.j("Stichtag: "+C.c.a_(o.ej(),0,10),r,r,r,r,r,r,r),p,r),C.v],w)
for(v=0;v<8;++v){o=D.H8[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.f8(r,C.aU,!1,r,!0,C.t,r,B.fl(),u.h(0,o.a),r,r,r,r,r,2,new B.cd(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a9,!0,r,!0,r,!1,r,C.b0,r,r,r,r,C.il,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a1,r,r,r,r),C.I],w))}p.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.u,11,C.k),r,r,r))
p=B.ci(B.f7(B.ae(p,C.ab,C.f,C.P),r,C.a5),r,380)
o=s.f
u=B.dF(C.cT,r,r,o?r:new A.b1V(d),r,r)
o=o?r:s.gaDk()
t=B.dS(C.l,C.h,r,r,r,r,r)
return B.lr(B.b([u,B.dR(s.f?F.YO:C.eq,o,t)],w),C.n,p,q)}}
A.bc.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.Zt(this.gbI(),e.gbI())
else w=!0
return w},
gv(d){return(B.ez(B.H(this))^B.bHk(this.gbI()))>>>0},
j(d){B.bAH()
return B.H(this).j(0)}}
A.Kh.prototype={
X(){return new A.SN(B.A(x.S,x.I),new A.aw6(B.A(x.x,x.T)),null,null)}}
A.SN.prototype={
u(d){var w,v=this,u=v.a1t(),t=v.CW
t.toString
t=v.a1u(t.av(0,v.ghD().gp(0)))
w=v.a1u(u)
v.a.toString
return new A.Kc(new A.a_S(t,w,null),u,null)},
a1u(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aw3(s.c,s.d,!1,r,s.a))}return d.aOM(w)},
a1t(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uk(t.ch)
if(r)s=w.a
r=t.y
t=t.aPH(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aON(A.bsE(!1,!0,!0,v.d,v.c,u.garu(),v.f,v.e))}return t},
arv(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf_()||e==null||e.a==null){w=v.cy
v.J(w.gaOb(w))
return}v.J(new A.b24(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1t(),new A.b25(w)))}}
A.nF.prototype={
UU(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.avX(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPH(d,e){return this.UU(null,null,d,e)},
aON(d){return this.UU(null,d,null,null)},
aOM(d){return this.UU(d,null,null,null)},
WQ(d,e,f){var w,v,u,t=A.kk(d.ch,e.ch,f,A.c_n(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bAO(d.d,e.d,f),q=A.bCH(d.e,e.e,f),p=A.bAM(d.c,e.c,f),o=e.a
o=A.a49(B.a08(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.avX(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bAJ(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbI(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.avW.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fy.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.aw4(),B.ac(v).i("aa<1,M>")).km(0,new A.aw5())
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
A.a_P.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a_U.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acK.prototype={
L(){return"TooltipDirection."+this.b}}
A.a_V.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Cr.prototype={
gbI(){return[this.a,this.b,C.cA,C.w,null]}}
A.Ki.prototype={}
A.a_W.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xj.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.ag2.prototype={}
A.ag9.prototype={}
A.aga.prototype={}
A.agc.prototype={}
A.agd.prototype={}
A.age.prototype={}
A.agf.prototype={}
A.agg.prototype={}
A.agh.prototype={}
A.aw6.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ue(0,0,!1)
v=new A.yX(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ue(t,u,!0)}w=null
try{w=C.b.qe(d,new A.aw7())}catch(s){return new A.ue(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.agb.prototype={}
A.aw8.prototype={
i6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_z(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abA(t,A.bsD(w,t.a),u)
l.y=u
l.aR2(e,u,f)
l.al5(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRb(d,e,m,t,r,s,n,o,f)}}},
abA(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dy("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iL(p,B.ac(p).i("iL<1>")).au(0,new A.aw9(t,q,r,s))
w.push(new A.a4Q(q))}return w},
aR2(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
a4=B.Pl(h,Math.min(b3.dF(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dF(Math.min(t,a2),b5,b8)
a4=B.Pl(h,a5,g,Math.max(b3.dF(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
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
u.clipRect(B.dJ(b1),$.oT()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mn(a4),a6)
a6.delete()
u.restore()
b3.aR9(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.geh(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cB($.al().r)
n=new B.ha(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hG(k)
v.fU(A.aze(b2,o.r),b3.r)}}}},
aRb(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.At(a5,a5,a5,a5,B.d8(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lo().Zz(a8,a7.b),a7.a),C.cA,C.w,a5,b6.c,C.bu)
w.afi(b1.f)
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
if(v!==D.aDW)j=v===D.Zu&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZA(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Fp(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lo().K8(new B.F(v,t),d).b
s=$.lo()
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
a2.c=a1.b}a9.Vw(d,new A.awa(a4,a9,e,w,new B.n(q.a-p/2,s.b+o.b-a0.b+r)),new B.n(e.a,e.b),new B.n(0,r),new B.F(v,t))},
aR9(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Pl(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dF(v,j,k),i.b)
r=n.dF(t,j,k)
v=t<v
t=v?C.a0:new B.aW(i.z,i.Q)
p=v?C.a0:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a0
q=B.Pl(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a0)}else q=B.buA(w,n.dF(v,j,k),u,n.dF(t,j,k),C.a0)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
Wb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abA(b2,A.bsD(a8,b2.a),a8.ch)
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
break}++a3}return new A.a_W(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.n(n,t))}}return null}}
A.a4Q.prototype={}
A.a_S.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aw8()
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
t=new A.a9U(this.d,v,u,t,d,C.bo,new B.bp(),B.aH(x.v))
t.bk()
t.Yv(v.cy)
t.aer()
return t},
by(d,e){e.sik(0,this.d)
e.sYg(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.a9U.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYg(d){var w=this
if(w.i0.k(0,d))return
w.i0=d
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
u.fV.i6(w,new A.a0l(t,v),new A.vq(u.aC,u.i0,u.cV,x.Q))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.Ki(w.fV.Wb(d,v,new A.vq(w.aC,w.i0,w.cV,x.Q)))}}
A.a_I.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cq.prototype={
L(){return"AxisSide."+this.b}}
A.th.prototype={}
A.pV.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abi.prototype={
gbI(){return[!1,0,0,0]}}
A.p0.prototype={
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
A.ya.prototype={
gbI(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pm.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acM.prototype={
gbI(){return[this.a,this.b]}}
A.Pp.prototype={
gbI(){return[this.a,this.b]}}
A.mM.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nc.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kF.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l4.prototype={
gbI(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a50.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ad9.prototype={
gbI(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Mc.prototype={
gbI(){return[this.a,this.b,!0]}}
A.uC.prototype={}
A.Mn.prototype={
acZ(d,e,f){var w,v
$.al()
w=B.aT()
v=this.a
w.r=v.gp(v)
w.b=C.bg
d.iP(f,this.b,w)},
gbI(){return[this.a,this.b,this.c,0]}}
A.afY.prototype={}
A.ag1.prototype={}
A.aj8.prototype={}
A.ajo.prototype={}
A.ajp.prototype={}
A.ajr.prototype={}
A.ajs.prototype={}
A.akf.prototype={}
A.ake.prototype={}
A.akg.prototype={}
A.anF.prototype={}
A.app.prototype={}
A.apq.prototype={}
A.ar0.prototype={}
A.arD.prototype={}
A.arC.prototype={}
A.arE.prototype={}
A.avM.prototype={
Mh(d,e,f,g,h,i){return new B.iw(this.aUU(d,e,f,g,h,i),x.g4)},
aUT(d,e,f,g){return this.Mh(d,e,f,!0,g,!0)},
aUU(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mh(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lo().aiI(s,u,v,w)
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
A.Kb.prototype={
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
i6(d,e,f){var w=this
w.a_A(d,e,f)
w.aQZ(e,f)
w.aR8(e,f)
w.aR7(e,f)},
aR7(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lo().Om(w.a,a1.r-a1.f)
u=$.brO().Mh(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
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
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dl(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lo().Om(w.b,a1.y-a1.x)
u=$.brO().Mh(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
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
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dl(n,m,d.a,f.d)}},
aQZ(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aR8(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
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
aR6(d,e,f){var w,v
this.a_A(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad_(d,e,f,w)
if(v.b.length!==0)this.aRd(d,e,f,w)},
ad_(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dl(m,l,f.c,p.d)
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
s.ad0(0,n,new B.n(h,o),k)}}},
aRd(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dl(m,l,d.c,p.d)
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
s.ad0(0,n,new B.n(o,k),j)}}},
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
A.Kc.prototype={
gakr(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gaks(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakt(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakp(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akM(d){var w,v=this,u=null,t=v.d,s=A.btn(t.d),r=t.a
r=r.a&&A.bMF(r.b)?r.b:u
w=B.b([B.b6(u,v.c,C.r,u,u,new B.b1(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.avO(w)
if(v.gakr())C.b.ht(w,s.$1(!0),new A.Ad(D.AG,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakt())C.b.ht(w,s.$1(!0),new A.Ad(D.mm,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gaks())C.b.ht(w,s.$1(!0),new A.Ad(D.AH,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
if(v.gakp())C.b.ht(w,s.$1(!0),new A.Ad(D.dD,t,new B.F(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),u))
return w},
u(d){return B.ji(new A.avN(this))}}
A.QQ.prototype={
X(){return new A.Xd(new B.bf(null,x.eF))}}
A.Xd.prototype={
awU(){switch(this.a.c.a){case 0:return C.e2
case 1:return C.fB
case 2:return C.e3
case 3:return C.fC}},
axp(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
awW(d){this.a.toString
return},
aA(){this.aO()
$.cv.x1$.push(this.ga3V())},
be(d){this.bE(d)
$.cv.x1$.push(this.ga3V())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axp()
return B.bv9(B.b_z(0,B.b6(v.awU(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.q)}}
A.abj.prototype={
bm(d){return A.bMv(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_J.prototype={
hj(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.q)},
hU(d){if(this.B===C.aI)return this.xW(d)
return this.acB(d)},
aJJ(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8v(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a8u(d,B.hw())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
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
t=Math.max(t,o.aJJ(p))
m=r.aG$}return new A.bcG(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.I.prototype.ga6.call(p)),n=p.a8u(o,B.mm()),m=n.a,l=n.b
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
q=s.b-p.a8v(r==null?B.V(B.a_("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c4(w))):r)/2
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
this.anI()}}
A.bcG.prototype={}
A.avP.prototype={}
A.jJ.prototype={
gbI(){return[this.a,this.b]}}
A.nE.prototype={}
A.afZ.prototype={}
A.ag_.prototype={
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
A.ag0.prototype={}
A.SK.prototype={
l(){var w,v,u
for(w=this.VK$,v=w.length,u=0;u<v;++u)w[u].l()
this.ix()}}
A.Ad.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghF(){switch(this.c.a){case 0:return C.e3
case 1:return C.fC
case 2:return C.e2
case 3:return C.fB}},
gaZu(){var w=this.d,v=A.btn(w.d),u=A.bAL(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gaho(){var w=this.d,v=A.bAL(w.a),u=A.btn(w.d)
switch(this.c.a){case 2:case 0:return u.gcY(0)+u.gd_(0)+(v.gcY(0)+v.gd_(0))
case 1:case 3:return u.ger()+v.ger()}},
aVD(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.lo().Om(d,f-e)
w=p.c
v=w!==D.mm
if((!v||w===D.dD)&&p.d instanceof A.nF){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bsD(u,d)
w=new B.iL(t,B.ac(t).i("iL<1>"))
s=w.giD(w).f0(0,new A.aXv(u),x.W).fX(0)}else{r=$.brO()
w=!v||w===D.dD
v=p.d
q=r.aUT(w?v.w:v.z,o,f,e)
v=B.o9(q,new A.aXw(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.k(v).i("t.E"))}w=B.ac(s).i("aa<1,nE>")
w=B.Q(new B.aa(s,new A.aXx(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b6(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mm
u=!v
t=!u||w===D.dD
s=j.e
r=t?s.a:s.b
t=j.ghF()
s=!u||w===D.dD?C.a5:C.aI
q=B.b([],x.p)
if(w===D.AG||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dD?r:j.gow().c.c
p=!u||w===D.dD?j.gow().c.c:r
o=j.gaZu()
n=!u||w===D.dD?C.aI:C.a5
j.gaho()
m=j.gaho()
l=!u||w===D.dD
k=j.d
l=l?k.f:k.x
u=!u||w===D.dD?k.r:k.y
q.push(B.b6(i,A.bTK(new A.avP(),n,j.aVD(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AH||w===D.dD)j.gow()
return new B.eS(t,i,i,B.bPi(q,C.m,s,i,C.f,C.P,0,i,i,C.c7),i)}}
A.a_Y.prototype={
gbI(){return[this.a,this.b]}}
A.a48.prototype={
gbI(){return[this.a,this.b]}}
A.Mu.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4a.prototype={
gaaV(d){return!1},
gbI(){return[!1,!1,!1,!1]}}
A.awj.prototype={}
A.aCC.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.agk.prototype={}
A.ajl.prototype={}
A.ajm.prototype={}
A.ajt.prototype={}
A.Kl.prototype={
i6(d,e,f){}}
A.vq.prototype={}
A.hi.prototype={
gdJ(){return null},
gaf_(){var w,v=this
B.bw()
B.bw()
B.bw()
w=v instanceof A.Mt
if(w)return!0
return!(v instanceof A.Mq)&&!(v instanceof A.Mp)&&!(v instanceof A.Mr)&&!(v instanceof A.Mo)&&!w&&!(v instanceof A.Ms)}}
A.a4e.prototype={
gdJ(){return this.a.b}}
A.a4f.prototype={
gdJ(){return this.a.b}}
A.a4g.prototype={
gdJ(){return this.a.b}}
A.Mp.prototype={}
A.Mq.prototype={}
A.a4j.prototype={
gdJ(){return this.a.b}}
A.Ms.prototype={}
A.Mt.prototype={
gdJ(){return this.a.b}}
A.a4d.prototype={
gdJ(){return this.a.b}}
A.a4c.prototype={
gdJ(){return this.a.b}}
A.Mo.prototype={
gdJ(){return this.a.b}}
A.a4h.prototype={
gdJ(){return this.a.gdJ()}}
A.a4i.prototype={
gdJ(){return this.a.gdJ()}}
A.Mr.prototype={
gdJ(){return this.a.gdJ()}}
A.FB.prototype={
Yv(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aer(){var w=this,v=null,u=w.ac=B.bug(v,v)
u.ay=new A.aSI(w)
u.ch=new A.aSJ(w)
u.CW=new A.aSK(w)
u.cy=new A.aSL(w)
u.cx=new A.aSM(w)
u=w.aE=B.Gq(v,-1,v)
u.B=new A.aSN(w)
u.a3=new A.aSO(w)
u.V=new A.aSP(w)
u=w.bA=B.a68(v,w.a2,v)
u.p3=new A.aSQ(w)
u.p4=new A.aSR(w)
u.RG=new A.aSS(w)},
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
w.rD(d)}else if(x.gJ.b(d))v.l6(new A.a4i(d))},
gML(d){return new A.aST(this)},
gMN(d){return new A.aSU(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdJ()
v=w!=null?u.Zt(w):null
u.V.$2(d,v)
u.a3=C.bo},
gKE(d){return this.a3},
gFi(){var w=this.ao
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.ao=!0},
aF(d){this.ao=!1
this.fg(0)},
$ijk:1}
A.NM.prototype={
X(){return new A.V1(B.b([],x.r),B.A(x.S,x.I),new A.aIz(B.A(x.y,x.dj)),null,null)}}
A.V1.prototype={
u(d){var w,v=this,u=v.a3X(),t=v.CW
t.toString
t=v.aau(t.av(0,v.ghD().gp(0)))
w=v.aau(u)
v.a.toString
return new A.Kc(new A.a60(t,w,null),u,null)},
aau(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ac(w).i("aa<1,e9>")
w=B.Q(new B.aa(w,new A.bcL(this,d),v),v.i("av.E"))
return d.aPE(w,this.cy)},
a3X(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uk(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aPT(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPi(new A.Ef(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayd(),t.c,t.d))}return r},
aye(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf_())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bcJ(v))
return}v.J(new A.bcK(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3X(),new A.bcM(w)))}}
A.pz.prototype={
WQ(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a49(B.a08(d.a.b,j.b,f),j.a)
w=A.bAJ(d.at,e.at,f)
v=A.bAM(d.c,e.c,f)
u=A.bAO(d.d,e.d,f)
t=A.bCH(d.e,e.e,f)
s=A.kk(d.ch,e.ch,f,A.c1t(),x.cz)
s.toString
r=A.kk(d.CW,e.CW,f,A.c1s(),x.J)
r.toString
u=A.btU(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UV(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.btU(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aPT(d,e,f,g){return this.UV(null,null,d,e,f,g,null)},
aPi(d){var w=null
return this.UV(w,d,w,w,w,w,w)},
aPE(d,e){var w=null
return this.UV(d,w,w,w,w,w,e)},
gbI(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e9.prototype={
aqf(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aIy())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
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
return A.aIx(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPp(d){return this.ach(d,null)},
aPr(d){return this.ach(null,d)},
gbI(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NN.prototype={
gbI(){return[this.a]}}
A.a_R.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mt.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kg.prototype={
gbI(){return[!1,this.b,this.c,!0]}}
A.y9.prototype={
gbI(){return[this.a,this.b,this.c]}}
A.aIj.prototype={
L(){return"LabelDirection."+this.b}}
A.a4b.prototype={
gbI(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ef.prototype={
gbI(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a61.prototype={
gbI(){return[4,C.hJ,16,D.xj,0,120,A.c1v(),!1,!1,!1,0,C.A,A.c1u()]}}
A.mR.prototype={
gbI(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q3.prototype={}
A.rl.prototype={
gbI(){return[this.a,this.b,C.cA,C.w,null]}}
A.ti.prototype={
gbI(){return[this.a,this.b]}}
A.G2.prototype={
gbI(){return[this.a]}}
A.NO.prototype={}
A.yT.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WQ(v,w,d)}}
A.ag7.prototype={}
A.ag8.prototype={}
A.agl.prototype={}
A.ajn.prototype={}
A.ajq.prototype={}
A.al2.prototype={}
A.al3.prototype={}
A.al4.prototype={}
A.al6.prototype={}
A.al7.prototype={}
A.al8.prototype={}
A.al9.prototype={}
A.apo.prototype={}
A.ar_.prototype={}
A.aIz.prototype={
Uk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xN
u=new A.yX(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yU(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aIA())}catch(p){return D.xN}v=null
try{v=C.b.qe(w.a,new A.aIB())}catch(p){return D.xN}o=v.a
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
A.al5.prototype={}
A.aIC.prototype={
i6(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaV(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aT())
a3.aOi(new B.G(0,0,u,v))}d.a_z(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aR4(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aR0(a3,q,a4)
d.aR5(a3,q,a4)
d.al4(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dy("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.v9(q,i,j,k))}}d.aRc(a3,s,a4)
if(w.gaaV(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRa(a2,a3,v,f,new A.G2(g),a4)}},
aR0(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.btm(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Z2(o,e,u,f)
s=p.aiA(o,e,t,u,f)
r=p.Z4(o,e,t,u,f,!0)
q=p.aiz(o,e,t,u,f)
p.aR3(d,s,p.Z1(o,e,t,u,f,!0),f,e)
p.aQY(d,q,r,f,e)
p.aR1(d,t,e)
p.aR_(d,t,e,f)}},
aR4(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.btm(a6.a),a9=A.btm(a7.a)
if(a8.length!==a9.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bU.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ac(m).i("cE<1>")
k=B.Q(new B.cE(m,l),l.i("av.E"))
j=a3.Z2(a4,a6,n,b3)
i=a3.Z3(a4,a7.aPr(k),k,b3,j)
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
a2=new B.mw(C.dp,C.bg,C.dW,C.eo,C.dK).eo()
m=B.dJ(new B.G(0,0,s,r))
l=$.bU.b
if(l===$.bU)B.V(B.v6(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fU(i,a3.r)
w.restore()}},
aR5(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z8(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dF(q.b,w,f)
n.$4(q,p/v*100,e,r).acZ(s,q,new B.n(p,o))}}},
aRc(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h1(b3,new A.aIF())
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
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dl(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.V(B.rk(d.a))
f.acZ(t,j,new B.n(h,g))}}},
Z3(d,e,f,g,h){var w=this.aiB(d,e,f,g,h)
return w},
Z2(d,e,f,g){return this.Z3(d,e,f,g,null)},
aiB(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cB($.al().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dF(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f5(d,a0))
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
s=new B.Lf(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hG(r)}return g},
Z4(d,e,f,g,h,i){var w,v,u,t,s=this
$.al()
w=B.btS(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,t))
w.aB(new B.cs(s.fc(v.h(g,0).a,d,h),s.dF(v.h(g,0).b,d,h)))
w.aB(new B.p8())
return w},
aiA(d,e,f,g,h){return this.Z4(d,e,f,g,h,!1)},
Z1(d,e,f,g,h,i){var w,v,u,t=this
$.al()
w=B.btS(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.cs(u,0))
w.aB(new B.cs(t.fc(v.h(g,0).a,d,h),t.dF(v.h(g,0).b,d,h)))
w.aB(new B.p8())
return w},
aiz(d,e,f,g,h){return this.Z1(d,e,f,g,h,!1)},
aR3(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.buf(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fU(e,r.r)},
aQY(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.buf(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fU(e,r.r)},
aR1(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.NG(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k2:C.dW
u.e=C.eo
u.r=v.gp(0)
u.seT(null)
u.c=f.x
u.r=v.gp(0)
$.lo()
u.z=new B.z1(C.aE,w.c*0.57735+0.5)
d.a.fU(B.btT(A.aze(e,f.cy),w.b),this.f)},
aR_(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k2:C.dW
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
A.buf(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bRM(t)
d.a.fU(A.aze(e,f.cy),s.f)},
aRa(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bGQ(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dy("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lo().Zz(b4,u.b)
s=u.a
r=w.k(0,C.iK)?new B.kf(1):w
q=new B.tf(new B.hK(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.cA,C.w,r,a8,a8,a8,a8,C.bu,a8)
q.afi(120)
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
i=a7.ZA(b3,l,D.xj,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Fp(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bGP(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lo().K8(new B.F(t,w),0).b
d=new B.n(0,b1)
a0=new B.n(g.a,g.b)
a1=$.lo().K8(new B.F(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.Vw(0,new A.aID(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bUj(q.r,q.w)
A:{if(D.DB===a5){a6=a3
break A}if(D.DC===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vw(0,new A.aIE(b5,q,new B.n(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z8(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
Wb(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj1(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h1(t,new A.aIG())
return t.length===0?null:t},
aj1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.n(this.fc(q.a,d,h),this.dF(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.ht(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q3(s,f,g,C.b.iq(w,v),v.a,v.b)}else return null}}
A.v9.prototype={}
A.a60.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aIC()
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
w.a=D.a_A
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
t=new A.aa6(this.d,v,u,t,d,C.bo,new B.bp(),B.aH(x.v))
t.bk()
t.Yv(v.cx)
t.aer()
return t},
by(d,e){e.sik(0,this.d)
e.sYg(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.B=d
e.bc()}}
A.aa6.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYg(d){var w=this
if(w.i0.k(0,d))return
w.i0=d
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
u.fV.i6(w,new A.a0l(t,v),new A.vq(u.aC,u.i0,u.cV,x.o))
s.restore()},
Zt(d){var w=this,v=w.gC(0)
return new A.NO(w.fV.Wb(d,v,new A.vq(w.aC,w.i0,w.cV,x.o)))}}
A.MT.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a0l.prototype={
aOi(d){this.a.a.clipRect(B.dJ(d),$.oT()[1],!0)
return null},
ad6(d,e){d.aN(this.a,e)},
Vw(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aZ(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lo()
s.Ye(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dl(d,e,f,g){var w=B.cB($.al().r)
w.aB(new B.f5(d.a,d.b))
w.aB(new B.cs(e.a,e.b))
this.a.fU(A.aze(w,g),f)}}
A.yX.prototype={
gbI(){return[this.a]}}
A.alg.prototype={}
A.a0v.prototype={}
A.b0_.prototype={
K8(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.n((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWc(d,e){var w,v,u,t,s
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
aWd(d,e){var w,v
if(d==null)return D.a_L
w=d.b
v=e/2
return d.aPu(w>v?v:w)},
Om(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZe(w)},
aZe(d){if(d<1)return this.aIi(d)
return this.a7z(d)},
aIi(d){var w,v,u,t,s,r,q
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
aiQ(d){if(d>=1)return 1
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
v=B.bR(d,C.vi)
v=v==null?null:v.ay
return v===!0?w.c3(C.m4):w},
aiI(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.PJ.prototype={
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
dD(d){var w,v=this.D$
if(v!=null){w=v.aq(C.ag,C.iD,v.gdj())
switch(this.ae.a){case 6:return d.c2(new B.at(0,d.b,0,d.d).xI(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xI(w)}}else return new B.F(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
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
u.fy=new B.F(B.L(0,t.a,t.b),B.L(0,t.c,t.d))}},
Tx(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cP!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c3(new Float64Array(16))
w.h_()
m.cP=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bwc(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yA(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yA(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pD(n.a,n.b,0)
q.qQ(w.a/s.a,w.b/s.b,1,1)
q.fY(-o,-p.b,0,1)
m.cP=q}},
a6v(d,e){var w,v,u,t,s=this,r=s.cP
r.toString
w=B.zb(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cP
v.toString
u=B.i3.prototype.gi5.call(s)
t=s.ch.a
return d.z9(r,e,v,u,t instanceof B.q4?t:null)}else s.ks(d,e.ad(0,w))
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
t=t instanceof B.um?t:null
u.sbh(0,d.o0(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaFW(),s.eX,t))}else s.ch.sbh(0,s.a6v(d,e))},
e9(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.Tx()
return d.JS(new A.aT2(v),e,v.cP)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OP()
else{this.Tx()
w=this.cP
w.toString
e.fW(0,w)}}}
A.a44.prototype={
bm(d){var w=new A.PJ(this.e,this.f,B.e6(d),C.r,null,new B.bp(),B.aH(x.v))
w.bk()
w.sc8(null)
return w},
by(d,e){e.st4(this.e)
e.shF(this.f)
e.scC(B.e6(d))
if(C.r!==e.eX){e.eX=C.r
e.bc()
e.cu()}}}
var z=a.updateTypes(["M(q5)","D(ev)","~(w,fy)","M(e9,w)","M(M,q5)","bL(M,th)","pm(M)","w(q3,q3)","~(hi,Ki?)","xL(z)","Hx(B,bF)","IT(nY)","HR(nX)","ve(@)","e9(M)","w5(@)","ai(M,th)","Ca(@)","uB(dX<uB>)","M(ve)","M(w5)","wn(B,bF)","AM(z)","P<~>()","q5(@)","xj(@)","M(id)","D(fy)","~(w,id)","~(@)","jJ(nE)","c(nE)","jJ(bD<w,M>)","jJ(M)","nE(jJ)","~(hi,NO?)","e9(e9)","Dz(dX<aDf>)","yT(@)","lA(Gd<lA>)","ti(w)","uC(ev,M,e9,w)","rl(mR)","D(e9)","w(v9,v9)","M(fy)","P<nY>(ch<nY>)","q4?(rB,n)","w(w,w,M)","fy(fy,fy,M)","id(id,id,M)","ms(ms,ms,M)","Cr?(fy,w,id,w)","E(fy)","c(M,th)","ev(ev,ev,M)","D(M)","mM(mM,mM,M)","nc(nc,nc,M)","kF(kF,kF,M)","l4(l4,l4,M)","f(kF)","f(l4)","e9(e9,e9,M)","mt(mt,mt,M)","uC(ev,M,e9,w{size:M?})","D(ev,e9)","M(n,n)","u<ti>(e9,u<w>)","P<nX>(ch<nX>)","u<rl>(u<mR>)","E(mR)","y7(fg<B?>)"])
A.aDb.prototype={
$1(d){var w=B.dE(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q5(J.am(v==null?"":v),A.oP(w.h(0,"revenue_net")),A.oP(w.h(0,"expense_net")),A.oP(w.h(0,"result_net")))},
$S:z+24}
A.aDc.prototype={
$1(d){var w,v,u,t=B.dE(x.f.a(d),x.N,x.z),s=B.ah(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ah(t.h(0,"code"))
v=A.oP(t.h(0,"gross"))
u=B.br(t.h(0,"purchases_count"))
u=u==null?null:C.d.a4(u)
if(u==null)u=0
return new A.ve(s,r,w,v,u,A.oP(t.h(0,"avg_basket")))},
$S:z+13}
A.aDd.prototype={
$1(d){var w,v=B.dE(x.f.a(d),x.N,x.z),u=B.ah(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.br(v.h(0,"quantity"))
w=w==null?null:C.d.a4(w)
if(w==null)w=0
return new A.w5(u,t,w,A.oP(v.h(0,"gross")))},
$S:z+15}
A.aDu.prototype={
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
A.bpA.prototype={
$1(d){return new A.uB(d.ar($.c1(),x.A))},
$S:z+18}
A.bpB.prototype={
$1(d){return new A.Dz(d.ar($.bLn(),x.D))},
$S:z+37}
A.brs.prototype={
$1(d){return E.aDe()},
$S:z+39}
A.bpC.prototype={
$1(d){var w=d.ar($.x1(),x.P)
return d.ar($.au9(),x.a).FJ(w)},
$S:z+46}
A.bpz.prototype={
$1(d){var w=d.ar($.x1(),x.P)
return d.ar($.au9(),x.a).FF(w)},
$S:z+69}
A.bpy.prototype={
$1(d){return this.ais(d)},
ais(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.l(d.ar($.c1(),x.A).hO("finance_balance_kpis",t),$async$$1)
case 3:s=r.dE(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:210}
A.aDa.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.au9(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aD9.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aJ(0,$.au9(),x.a).Lf(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDs.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bsb()
if(s.e==null)B.V(B.a_(y.b))
s.gcr().cm(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aDk.prototype={
$0(){return this.a.J9(this.b,this.c)},
$S:0}
A.aDl.prototype={
$0(){return this.a.B4(this.b,this.c)},
$S:0}
A.aDm.prototype={
$0(){var w=x.z
return B.bg(this.a,!1).ei(B.ep(new A.aDj(),null,w),w)},
$S:0}
A.aDj.prototype={
$1(d){return F.CE},
$S:z+9}
A.aDn.prototype={
$0(){return B.o2(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDo.prototype={
$0(){var w=this
return w.a.B5(w.b,w.c,w.d)},
$S:0}
A.aDr.prototype={
$0(){return D.aqh},
$S:94}
A.aDq.prototype={
$2(d,e){return new A.Hx(B.i(d),null)},
$S:z+10}
A.aDp.prototype={
$1(d){return new A.IT(d,null)},
$S:z+11}
A.aDi.prototype={
$1(d){var w=null,v=this.a,u=$.dZ()
v=B.j("Die Finanzauswertung f\xfcr "+u.an(v.a)+" \u2013 "+u.an(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.lr(B.b([B.dF(C.cT,w,w,new A.aDg(u),w,w),B.dR(F.uW,new A.aDh(u),B.dS(C.l,C.h,w,w,w,w,w))],x.p),w,v,F.uX)},
$S:50}
A.aDg.prototype={
$0(){B.bg(this.a,!1).df(!1)
return null},
$S:0}
A.aDh.prototype={
$0(){B.bg(this.a,!1).df(!0)
return null},
$S:0}
A.beZ.prototype={
$0(){var w=this.a.aJ(0,$.x1().ghM(),x.V),v=E.aDe()
w.wn(0,v)
return v},
$S:0}
A.bf_.prototype={
$0(){var w=this.a.aJ(0,$.x1().ghM(),x.V),v=new B.bb(Date.now(),0,!1),u=new E.lA(B.bJ(B.aV(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.bf0.prototype={
$0(){return this.a.Iy(this.b,this.c)},
$S:0}
A.beY.prototype={
$2(d,e){return new B.ou(B.U(d).aOQ(B.U(d).ax.aPJ(C.h,C.l)),e,null)},
$S:994}
A.bkF.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dB(),s=A.Ny(!1,C.xE,"Umsatz 7 %",t.an(u.a),w),r=A.Ny(!1,C.xE,"Umsatz 19 %",t.an(u.b),w),q=A.Ny(!0,D.a9D,"Umsatz netto",t.an(u.c),w),p=A.Ny(!1,D.a9C,"Aufwand",t.an(u.d),w),o=u.e,n=t.an(o)
return B.a4P(1.7,B.b([s,r,q,p,A.Ny(!0,C.ny,"Ergebnis",n,o<0?C.ad:C.al),A.Ny(!1,C.fi,"USt-Saldo",t.an(u.f-u.r),w)],x.p),v,12,12,C.jL,!0)},
$S:99}
A.aIi.prototype={
$0(){return D.aqe},
$S:94}
A.aIh.prototype={
$2(d,e){var w=null
return B.by(C.ad,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.y(C.h,13,C.k),w,w,w),C.fI,w,C.D,w,3)},
$S:268}
A.aIg.prototype={
$1(d){return new A.HR(d,null)},
$S:z+12}
A.bcx.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dB(),i=j.an(k.c),h=l.w,g=l.d,f=B.ac(g).i("aa<1,M>"),e=f.i("av.E"),d=B.Q(new B.aa(g,new A.bcm(),f),e)
i=A.jA(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.an(r.b)
w=B.Q(new B.aa(g,new A.bcn(),f),e)
d=A.jA(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.an(k.e)
w=B.Q(new B.aa(g,new A.bco(),f),e)
k=A.jA(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.al(h.b,1)
v=B.Q(new B.aa(g,new A.bcp(),f),e)
w=A.jA(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.al(h.a,1)
u=B.Q(new B.aa(g,new A.bcq(),f),e)
v=A.jA(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.al(r.c,1)
t=B.Q(new B.aa(g,new A.bcr(),f),e)
u=A.jA(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.al(h.c,1)
s=B.Q(new B.aa(g,new A.bcs(),f),e)
t=A.jA(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.an(h.d)
s=B.Q(new B.aa(g,new A.bct(),f),e)
h=A.jA(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.an(l.r.d)
m=B.Q(new B.aa(g,new A.bcu(m),f),e)
m=A.jA(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.an(l)
l=B.Q(new B.aa(g,new A.bcv(l),f),e)
l=A.jA(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.al(j,1)
j=B.Q(new B.aa(g,new A.bcw(j),f),e)
return B.a4P(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jA(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jL,!0)},
$S:99}
A.bcm.prototype={
$1(d){return d.b},
$S:z+0}
A.bcn.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bco.prototype={
$1(d){return d.d},
$S:z+0}
A.bcp.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcq.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bcr.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bcs.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bct.prototype={
$1(d){return d.d},
$S:z+0}
A.bcu.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bcv.prototype={
$1(d){return this.a},
$S:z+0}
A.bcw.prototype={
$1(d){return this.a},
$S:z+0}
A.bcy.prototype={
$0(){return A.bw9(this.b,1.45,new A.T7(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bcz.prototype={
$0(){return A.bw9(this.b,1.6,new A.Ti(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.boI.prototype={
$1(d){var w=this,v=null,u=B.aS(16),t=x.p,s=B.b([B.an(B.b([B.aK(B.j(w.a,v,v,v,B.bY(C.h,18,C.p),v,v,v),1),B.fe(v,v,D.abC,v,v,new A.boH(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.y(C.u,12,C.aG),v,v,v),C.I],t))
s.push(C.v)
s.push(B.ci(new B.mq(w.c,w.d,v),v,17976931348623157e292))
return B.a3q(v,C.n,new B.ag(C.ae,B.ae(s,C.B,C.f,C.P),v),v,v,v,C.fg,C.uH,v,new B.db(u,C.A),v)},
$S:995}
A.boH.prototype={
$0(){return B.bg(this.a,!1).fb()},
$S:0}
A.bcA.prototype={
$0(){var w=this.a,v=B.b9(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bw9(this.b,2.4,new A.Xo(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.bjY.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bjZ.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bk_.prototype={
$1(d){return A.aIx(null,1.4,null,C.ad,0.35,D.afR,D.Ds,null,!1,!1,!1,!1,D.EU,!1,10,D.Yh,!0,C.lg,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+14}
A.b3x.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b3z.prototype={
$2(d,e){var w=null
return B.j(this.a.aJz(d),w,w,w,B.y(C.u,10,C.M),w,w,w)},
$S:z+16}
A.b3A.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=this.a.length)return C.zG
return new B.ag(C.kO,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.y(C.u,9,C.M),w,w,w),w)},
$S:z+5}
A.b3y.prototype={
$1(d){return D.a8a},
$S:z+6}
A.b4k.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4l.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4m.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b4n.prototype={
$2(d,e){var w=null,v=C.d.a4(d)
if(v<0||v>=3)return C.zG
return new B.ag(C.kO,B.j(this.a[v],w,w,w,B.y(C.h,12,C.p),w,w,w),w)},
$S:z+5}
A.bd3.prototype={
$1(d){return d.d},
$S:z+19}
A.bd4.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.blW.prototype={
$1(d){return d.d},
$S:z+20}
A.blX.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b21.prototype={
$0(){return D.aqm},
$S:94}
A.b20.prototype={
$2(d,e){return new A.wn("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b2_.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.by(o,B.ae(B.b([B.j("Noch keine Bilanzdaten erfasst.",o,o,o,B.y(C.h,14,C.M),o,o,o),C.I,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.y(C.u,12.5,C.k),o,o,o),C.v,B.hE(C.Es,D.aDl,new A.b1W(p.b,p.c),o)],x.p),C.B,C.f,C.i),C.ah,o,C.D,o,3)
w=new A.b22(d)
v=C.b.fG(p.a.e.d,0,new A.b1X())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.ji(new A.b1Y(new A.b23(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ae(B.b([w,C.I,B.an(B.b([B.aK(B.j("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.y(C.u,11,C.k),o,o,o),1),B.q0(D.ac4,D.aCq,new A.b1Z(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ab,C.f,C.i)},
$S:254}
A.b1W.prototype={
$0(){return A.att(this.a,this.b,null)},
$S:0}
A.b22.prototype={
$1(d){var w=B.br(J.a3(this.a,d))
return w==null?null:w},
$S:996}
A.b23.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.al(v,1)
w=B.b9(w,".",",")+" %"}return w},
$S:31}
A.b1X.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b1Y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jA(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fm,o.$1("liquidity1_pct")),m=A.jA(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fm,o.$1("liquidity2_pct")),l=A.jA(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fm,o.$1("liquidity3_pct"))
o=A.jA(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fm,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.al(w,1)
w=B.b9(w,".",",")+" %"}w=A.jA(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fm,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dB()
v=u.an(v)
return B.a4P(p,B.b([n,m,l,o,w,A.jA(s,s,!1,"Bilanzsumme",!1,"EK "+u.an(t.d),s,s,s,C.fm,v)],x.p),q,12,12,C.jL,!0)},
$S:99}
A.b1Z.prototype={
$0(){return A.att(this.a,this.b,this.c)},
$S:0}
A.boG.prototype={
$1(d){return new A.AM(this.a,new A.boF(this.b),this.c,null)},
$S:z+22}
A.boF.prototype={
$0(){var w=this.a,v=$.byp()
if(w.e==null)B.V(B.a_(y.b))
w.gcr().cm(v)},
$S:0}
A.b1R.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b1S.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b1U.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.l(B.u0(u.b,B.bJ(2024,1,1,0,0,0,0),null,r,new B.bb(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b1T(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.b1T.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b1V.prototype={
$0(){return B.bg(this.a,!1).fb()},
$S:0}
A.b24.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b25.prototype={
$1(d){return new A.xj(x.B.a(d),this.a.a.r)},
$S:z+25}
A.aw4.prototype={
$1(d){return d.e},
$S:z+26}
A.aw5.prototype={
$2(d,e){return d+e},
$S:45}
A.aw7.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.aw9.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.awa.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.ad6(v.d,v.e)},
$S:0}
A.avO.prototype={
$1(d){return 0},
$S:997}
A.avN.prototype={
$2(d,e){return B.fi(C.bT,this.a.akM(e),C.t,C.bt,null)},
$S:998}
A.aXt.prototype={
$1(d){return d.a},
$S:z+30}
A.aXu.prototype={
$1(d){return d.b},
$S:z+31}
A.aXv.prototype={
$1(d){return new A.jJ(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aXw.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mm||v===D.dD))t=1-t
return new A.jJ(d,t*w.d)},
$S:z+33}
A.aXx.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.lo()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.al(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.al(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.al(v/1000,1)
t="K"}else{u=C.d.al(v,r.aiQ(Math.abs(s.b-s.c)))
t=""}if(C.c.hI(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nE(d,q.c.b.$2(p,new A.th(u+t,s.e)))},
$S:z+34}
A.aSI.prototype={
$1(d){this.a.l6(new A.a4e(d))},
$S:171}
A.aSJ.prototype={
$1(d){this.a.l6(new A.a4f(d))},
$S:40}
A.aSK.prototype={
$1(d){this.a.l6(new A.a4g(d))},
$S:29}
A.aSL.prototype={
$0(){this.a.l6(D.a1i)},
$S:0}
A.aSM.prototype={
$1(d){this.a.l6(new A.Mq())},
$S:42}
A.aSN.prototype={
$1(d){this.a.l6(new A.a4j(d))},
$S:43}
A.aSO.prototype={
$0(){this.a.l6(D.a1j)},
$S:0}
A.aSP.prototype={
$1(d){this.a.l6(new A.Mt(d))},
$S:97}
A.aSQ.prototype={
$1(d){this.a.l6(new A.a4d(d))},
$S:170}
A.aSR.prototype={
$1(d){this.a.l6(new A.a4c(d))},
$S:169}
A.aSS.prototype={
$1(d){return this.a.l6(new A.Mo(d))},
$S:168}
A.aST.prototype={
$1(d){return this.a.l6(new A.a4h(d))},
$S:61}
A.aSU.prototype={
$1(d){return this.a.l6(new A.Mr(d))},
$S:54}
A.bcL.prototype={
$1(d){var w=this.a.db.h(0,C.b.iq(this.b.ch,d))
return d.aPp(w==null?B.b([],x.t):w)},
$S:z+36}
A.bcJ.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bcK.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h1(w,new A.bcI())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.G2(w))},
$S:0}
A.bcI.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bcM.prototype={
$1(d){return new A.yT(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIy.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.bpo.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bAN(t?A.bvY(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.ti(w,new A.y9(!0,A.bwJ(),new A.bpn(v)))},
$S:z+40}
A.bpn.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bPg(A.bvY(d,e,f),w,A.bXX(d,e,f))},
$S:z+41}
A.bpl.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iW(v,v,u==null?D.di:u,v,v,v,v,v,v,v,v,14,v,v,C.M,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rl(C.d.j(d.b),w)},
$S:z+42}
A.aIA.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aIB.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aIF.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aID.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aIE.prototype={
$0(){this.a.ad6(this.b,this.c)},
$S:0}
A.aIG.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.avY.prototype={
$1(d){return d.gdq(0)},
$S:z+45}
A.avZ.prototype={
$2(d,e){return d+e},
$S:45}
A.aw1.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iL(v,B.ac(v).i("iL<1>")).au(0,new A.aw2(w,this.a/(u+1),this.c))},
$S:0}
A.aw2.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.aw_.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.aw0.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFH.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:999}
A.azf.prototype={
$1(d){return d},
$S:1000}
A.aT2.prototype={
$2(d,e){return this.a.As(d,e)},
$S:22};(function aliases(){var w=A.Kb.prototype
w.a_z=w.i6
w.al4=w.aR6
w.al5=w.ad_
w=A.SK.prototype
w.anI=w.l
w=A.Kl.prototype
w.a_A=w.i6
w=A.FB.prototype
w.a0j=w.Yv})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c0z","bPd",72)
v(A.SM.prototype,"gaDk","HX",23)
u(A.SN.prototype,"garu","arv",8)
t(A,"c_n",3,null,["$3"],["bMy"],49,0)
t(A,"c_o",3,null,["$3"],["bMz"],50,0)
t(A,"c_p",3,null,["$3"],["bMA"],51,0)
t(A,"c_r",4,null,["$4"],["c0c"],52,0)
w(A,"c_q","c0b",53)
s(A,"bwd","c0d",54)
t(A,"c_i",3,null,["$3"],["bPh"],55,0)
w(A,"Zq","c2B",56)
w(A,"atv","c0g",6)
t(A,"c_k",3,null,["$3"],["bQ2"],57,0)
t(A,"c_m",3,null,["$3"],["bVc"],58,0)
t(A,"c_j",3,null,["$3"],["bQ1"],59,0)
t(A,"c_l",3,null,["$3"],["bVb"],60,0)
w(A,"c9H","bQ0",61)
w(A,"c9I","bVa",62)
r(A.Xd.prototype,"ga3V","awW",29)
u(A.V1.prototype,"gayd","aye",35)
t(A,"c1t",3,null,["$3"],["bQx"],63,0)
t(A,"c1s",3,null,["$3"],["bMC"],64,0)
w(A,"c1w","c2C",1)
t(A,"bHc",4,null,["$5$size","$4"],["bFE",function(d,e,f,g){return A.bFE(d,e,f,g,null)}],65,0)
s(A,"bwJ","c2A",66)
s(A,"bHd","c_5",67)
s(A,"bHg","c0j",68)
s(A,"bHf","c0f",3)
s(A,"bHe","c0e",3)
w(A,"c1v","bGQ",70)
w(A,"c1u","bGP",71)
u(A.PJ.prototype,"gaFW","a6v",47)
t(A,"Zv",3,null,["$3"],["c1r"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.X,[A.a5N,A.afi,A.akp,A.Ip,A.IT,A.afg,A.Hx,A.HR,A.ajJ,A.akW,A.TT,A.Xo,A.T7,A.Ti,A.alp,A.ahN,A.BG,A.aqX,A.wn,A.Kc,A.Ad])
u(B.B,[A.uB,A.Dz,A.bc,A.agk,A.aga,A.agc,A.agd,A.ag2,A.ajt,A.agg,A.age,A.awj,A.ar0,A.aw6,A.agb,A.Kl,A.a4Q,A.th,A.apq,A.app,A.ag1,A.ajs,A.ev,A.ajp,A.ajr,A.anF,A.akg,A.arE,A.ajq,A.aj8,A.ajo,A.avM,A.bcG,A.avP,A.afZ,A.nE,A.ajl,A.ajm,A.vq,A.hi,A.al3,A.al6,A.ag7,A.agl,A.ag8,A.ajn,A.al9,A.al7,A.ar_,A.apo,A.aIz,A.al5,A.v9,A.a0l,A.alg,A.a0v,A.b0_])
u(B.uz,[A.q5,A.ve,A.w5,A.ayE,A.azL,A.nX,A.Ca,A.nY])
u(B.nJ,[A.aDb,A.aDc,A.aDd,A.aDu,A.bpA,A.bpB,A.brs,A.bpC,A.bpz,A.bpy,A.aDj,A.aDp,A.aDi,A.aIg,A.bcm,A.bcn,A.bco,A.bcp,A.bcq,A.bcr,A.bcs,A.bct,A.bcu,A.bcv,A.bcw,A.boI,A.bk_,A.b3y,A.b4k,A.b4l,A.bd3,A.blW,A.b2_,A.b22,A.b23,A.boG,A.b25,A.aw4,A.aw7,A.avO,A.aXt,A.aXu,A.aXv,A.aXw,A.aXx,A.aSI,A.aSJ,A.aSK,A.aSM,A.aSN,A.aSP,A.aSQ,A.aSR,A.aSS,A.aST,A.aSU,A.bcL,A.bcM,A.aIy,A.bpo,A.bpn,A.bpl,A.aIA,A.aIB,A.avY,A.azf])
t(A.y7,B.ft)
u(B.xy,[A.aDa,A.aD9,A.aDs,A.aDk,A.aDl,A.aDm,A.aDn,A.aDo,A.aDr,A.aDg,A.aDh,A.beZ,A.bf_,A.bf0,A.aIi,A.bcy,A.bcz,A.boH,A.bcA,A.b21,A.b1W,A.b1Z,A.boF,A.b1R,A.b1S,A.b1U,A.b1T,A.b1V,A.b24,A.awa,A.aSL,A.aSO,A.bcJ,A.bcK,A.aID,A.aIE,A.aw1])
u(B.xG,[A.y8,A.amB,A.a5O,A.ag6])
u(B.xz,[A.aDq,A.beY,A.bkF,A.aIh,A.bcx,A.bjY,A.bjZ,A.b3x,A.b3z,A.b3A,A.b4m,A.b4n,A.bd4,A.blX,A.b20,A.b1X,A.b1Y,A.aw5,A.aw9,A.avN,A.bcI,A.aIF,A.aIG,A.avZ,A.aw2,A.aw_,A.aw0,A.aFH,A.aT2])
u(B.O,[A.AM,A.QQ])
u(B.a1,[A.SM,A.Xd])
u(B.N5,[A.Kh,A.NM])
u(B.xb,[A.SN,A.V1])
t(A.a_Y,A.agk)
t(A.afY,A.a_Y)
t(A.a_I,A.afY)
u(A.a_I,[A.ag9,A.al4])
t(A.nF,A.ag9)
u(B.Ui,[A.avW,A.acK,A.Cq,A.aCC,A.aIj,A.MT])
t(A.fy,A.aga)
t(A.id,A.agc)
t(A.ms,A.agd)
t(A.a_P,A.ag2)
t(A.Mu,A.ajt)
u(A.Mu,[A.agf,A.al8])
t(A.a_U,A.agf)
t(A.a_V,A.agg)
t(A.Cr,A.age)
u(A.awj,[A.Ki,A.NO])
t(A.acM,A.ar0)
t(A.agh,A.acM)
t(A.a_W,A.agh)
u(B.b8,[A.xj,A.yT])
t(A.ue,A.agb)
t(A.Kb,A.Kl)
u(A.Kb,[A.aw8,A.aIC])
u(B.NI,[A.a_S,A.a60])
u(B.K,[A.FB,A.ag_])
u(A.FB,[A.a9U,A.aa6])
t(A.pV,A.apq)
t(A.abi,A.app)
t(A.p0,A.ag1)
t(A.uD,A.ajs)
t(A.ya,A.ajp)
t(A.pm,A.ajr)
t(A.Pp,A.anF)
t(A.mM,A.akg)
t(A.nc,A.arE)
u(A.pm,[A.akf,A.arD])
t(A.kF,A.akf)
t(A.l4,A.arD)
t(A.a4b,A.ajq)
u(A.a4b,[A.ake,A.arC])
t(A.a50,A.ake)
t(A.ad9,A.arC)
t(A.Mc,A.aj8)
t(A.uC,A.ajo)
t(A.Mn,A.uC)
t(A.abj,B.h_)
t(A.ag0,A.ag_)
t(A.SK,A.ag0)
t(A.a_J,A.SK)
t(A.jJ,A.afZ)
t(A.a48,A.ajl)
t(A.a4a,A.ajm)
u(A.hi,[A.a4e,A.a4f,A.a4g,A.Mp,A.Mq,A.a4j,A.Ms,A.Mt,A.a4d,A.a4c,A.Mo,A.a4h,A.a4i,A.Mr])
t(A.pz,A.al4)
t(A.e9,A.al3)
t(A.NN,A.al6)
t(A.a_R,A.ag7)
t(A.mt,A.agl)
t(A.Kg,A.ag8)
t(A.y9,A.ajn)
t(A.Ef,A.al8)
t(A.a61,A.al9)
t(A.al2,A.ev)
t(A.mR,A.al2)
t(A.q3,A.mR)
t(A.rl,A.al7)
t(A.ti,A.ar_)
t(A.G2,A.apo)
t(A.yU,A.al5)
t(A.yX,A.alg)
t(A.PJ,B.PW)
t(A.a44,B.bL)
w(A.ag2,A.bc)
w(A.ag9,A.bc)
w(A.aga,A.bc)
w(A.agc,A.bc)
w(A.agd,A.bc)
w(A.age,A.bc)
w(A.agf,A.bc)
w(A.agg,A.bc)
w(A.agh,A.bc)
w(A.agb,A.bc)
w(A.afY,A.bc)
w(A.ag1,A.bc)
w(A.aj8,A.bc)
w(A.ajo,A.bc)
w(A.ajp,A.bc)
w(A.ajr,A.bc)
w(A.ajs,A.bc)
w(A.akf,A.bc)
w(A.ake,A.bc)
w(A.akg,A.bc)
w(A.anF,A.bc)
w(A.app,A.bc)
w(A.apq,A.bc)
w(A.ar0,A.bc)
w(A.arD,A.bc)
w(A.arC,A.bc)
w(A.arE,A.bc)
w(A.afZ,A.bc)
v(A.ag_,B.aB)
w(A.ag0,B.e4)
v(A.SK,B.a39)
w(A.agk,A.bc)
w(A.ajl,A.bc)
w(A.ajm,A.bc)
w(A.ajt,A.bc)
w(A.ag7,A.bc)
w(A.ag8,A.bc)
w(A.agl,A.bc)
w(A.ajn,A.bc)
w(A.ajq,A.bc)
w(A.al2,A.bc)
w(A.al3,A.bc)
w(A.al4,A.bc)
w(A.al6,A.bc)
w(A.al7,A.bc)
w(A.al8,A.bc)
w(A.al9,A.bc)
w(A.apo,A.bc)
w(A.ar_,A.bc)
w(A.al5,A.bc)
w(A.alg,A.bc)})()
B.bm8(b.typeUniverse,JSON.parse('{"a5N":{"X":[],"c":[]},"Dz":{"aDf":[]},"y7":{"ft":["be<~>"],"ft.T":"be<~>"},"IT":{"X":[],"c":[]},"Hx":{"X":[],"c":[]},"y8":{"bl":[],"O":[],"c":[]},"afi":{"X":[],"c":[]},"akp":{"X":[],"c":[]},"amB":{"bl":[],"O":[],"c":[]},"Ip":{"X":[],"c":[]},"afg":{"X":[],"c":[]},"HR":{"X":[],"c":[]},"wn":{"X":[],"c":[]},"AM":{"O":[],"c":[]},"a5O":{"bl":[],"O":[],"c":[]},"ajJ":{"X":[],"c":[]},"akW":{"X":[],"c":[]},"TT":{"X":[],"c":[]},"Xo":{"X":[],"c":[]},"T7":{"X":[],"c":[]},"Ti":{"X":[],"c":[]},"alp":{"X":[],"c":[]},"ahN":{"X":[],"c":[]},"BG":{"X":[],"c":[]},"aqX":{"X":[],"c":[]},"ag6":{"bl":[],"O":[],"c":[]},"SM":{"a1":["AM"]},"Kh":{"O":[],"c":[]},"SN":{"a1":["Kh"]},"nF":{"bc":[]},"fy":{"bc":[]},"id":{"bc":[]},"ms":{"bc":[]},"Cr":{"bc":[]},"xj":{"b8":["nF"],"b0":["nF"],"b0.T":"nF","b8.T":"nF"},"a_P":{"bc":[]},"a_U":{"bc":[]},"a_V":{"bc":[]},"a_W":{"bc":[]},"ue":{"bc":[]},"a_S":{"aX":[],"c":[]},"a9U":{"K":[],"I":[],"jk":[],"aR":[]},"pm":{"bc":[]},"mM":{"bc":[]},"nc":{"bc":[]},"kF":{"bc":[]},"l4":{"bc":[]},"uC":{"bc":[]},"a_I":{"bc":[]},"pV":{"bc":[]},"abi":{"bc":[]},"p0":{"bc":[]},"uD":{"bc":[]},"ya":{"bc":[]},"acM":{"bc":[]},"Pp":{"bc":[]},"a50":{"bc":[]},"ad9":{"bc":[]},"Mc":{"bc":[]},"Mn":{"bc":[]},"Kc":{"X":[],"c":[]},"QQ":{"O":[],"c":[]},"Xd":{"a1":["QQ"]},"jJ":{"bc":[]},"abj":{"h_":[],"aX":[],"c":[]},"a_J":{"e4":["K","hj"],"K":[],"aB":["K","hj"],"I":[],"aR":[],"aB.1":"hj","e4.1":"hj","aB.0":"K"},"Ad":{"X":[],"c":[]},"a_Y":{"bc":[]},"a48":{"bc":[]},"Mu":{"bc":[]},"a4a":{"bc":[]},"a4e":{"hi":[]},"a4f":{"hi":[]},"a4g":{"hi":[]},"Mp":{"hi":[]},"Mq":{"hi":[]},"a4j":{"hi":[]},"Ms":{"hi":[]},"Mt":{"hi":[]},"a4d":{"hi":[]},"a4c":{"hi":[]},"Mo":{"hi":[]},"a4h":{"hi":[]},"a4i":{"hi":[]},"Mr":{"hi":[]},"FB":{"K":[],"I":[],"jk":[],"aR":[]},"NM":{"O":[],"c":[]},"V1":{"a1":["NM"]},"pz":{"bc":[]},"e9":{"bc":[]},"mt":{"bc":[]},"mR":{"ev":[],"bc":[]},"q3":{"mR":[],"ev":[],"bc":[]},"rl":{"bc":[]},"ti":{"bc":[]},"G2":{"bc":[]},"yT":{"b8":["pz"],"b0":["pz"],"b0.T":"pz","b8.T":"pz"},"NN":{"bc":[]},"a_R":{"bc":[]},"Kg":{"bc":[]},"y9":{"bc":[]},"a4b":{"bc":[]},"Ef":{"bc":[]},"a61":{"bc":[]},"yU":{"bc":[]},"a60":{"aX":[],"c":[]},"aa6":{"K":[],"I":[],"jk":[],"aR":[]},"yX":{"bc":[]},"PJ":{"K":[],"bu":["K"],"I":[],"aR":[]},"a44":{"bL":[],"aX":[],"c":[]}}'))
B.bF8(b.typeUniverse,JSON.parse('{"Kb":1,"Mu":1,"Kl":1,"FB":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("Ca"),e:w("be<nX>"),aN:w("be<nY>"),fM:w("be<a0<f,@>?>"),b:w("be<~>"),W:w("jJ"),B:w("nF"),dB:w("fy"),T:w("ue"),fj:w("id"),G:w("ms"),J:w("mt"),k:w("at"),cX:w("a0v<M>"),dO:w("um"),R:w("aj<f,@>"),v:w("hS"),bz:w("lv<bb>"),f0:w("nO"),E:w("bc"),F:w("y7"),X:w("nX"),P:w("lA"),D:w("uB"),a:w("aDf"),d:w("nY"),cw:w("ev"),L:w("hj"),m:w("dh<w,E>"),cm:w("kF"),dv:w("mM"),g:w("C<nE>"),O:w("C<fy>"),Y:w("C<id>"),C:w("C<bt7>"),U:w("C<ev>"),K:w("C<a4Q>"),u:w("C<e9>"),bC:w("C<v9>"),aA:w("C<u<ev>>"),r:w("C<G2>"),s:w("C<f>"),eg:w("C<tf>"),df:w("C<q3>"),p:w("C<c>"),n:w("C<M>"),t:w("C<w>"),eF:w("bf<a1<O>>"),Z:w("mR"),cz:w("e9"),hf:w("pz"),dj:w("yU"),fT:w("rl"),c_:w("ij<oI<be<~>>>"),x:w("yX<fy>"),y:w("yX<e9>"),I:w("u<w>"),ef:w("ve"),c:w("a0<f,@>"),f:w("a0<@,@>"),gj:w("aa<M,M>"),w:w("jW"),aU:w("B"),Q:w("vq<nF>"),o:w("vq<pz>"),eo:w("pL"),gJ:w("pM"),V:w("n5<lA>"),N:w("f"),A:w("n7"),bO:w("bH"),er:w("tf"),j:w("w5"),dw:w("q3"),bY:w("ti"),cZ:w("q5"),gc:w("kd"),es:w("l4"),bN:w("nc"),l:w("c"),q:w("wH"),g4:w("iw<M>"),cJ:w("D"),i:w("M"),z:w("@"),S:w("w"),bn:w("xj?"),f3:w("yT?"),M:w("u<@>?"),h:w("a0<f,@>?"),fF:w("a0<@,@>?"),cK:w("B?"),aD:w("kd?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Az=new B.nx(C.l,B.aw("nx<E>"))
D.AG=new A.Cq(0,"left")
D.mm=new A.Cq(1,"top")
D.AH=new A.Cq(2,"right")
D.dD=new A.Cq(3,"bottom")
D.au1=new A.pV(!1,A.bwd(),22,null)
D.ki=new A.p0(16,null,D.au1,!0)
D.a8b=new A.pm(C.C,null,2,null)
D.vM=new A.Kg(!1,D.a8b,A.c1w(),!0)
D.a_r=new A.avW(3,"spaceEvenly")
D.a_A=new B.xn(6,"dstIn")
D.XC=new B.aW(3,3)
D.AL=new B.d3(D.XC,D.XC,C.a0,C.a0)
D.a_L=new B.ba(C.C,0,C.S,-1)
D.Bk=new A.a4a()
D.a1i=new A.Mp()
D.a1j=new A.Ms()
D.aKW=new A.abi()
D.akq=w([],B.aw("C<kF>"))
D.akr=w([],B.aw("C<l4>"))
D.Dn=new A.Mc(D.akq,D.akr,!0)
D.a7T=new B.e7("Zeitraum",!1,null)
D.a7Y=new B.e7("Konten (SKR 03)",!1,null)
D.xj=new A.aCC(0,"center")
D.aL7=new A.y9(!0,A.bwJ(),A.bHc())
D.Ds=new A.y9(!1,A.bwJ(),A.bHc())
D.Dt=new A.ya(!1,!0,null,A.atv(),A.Zq(),!0,null,A.atv(),A.Zq())
D.aL8=new A.ya(!0,!0,null,A.atv(),A.Zq(),!0,null,A.atv(),A.Zq())
D.a3C=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3o=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3L=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3G=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a38=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a37=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a46=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3v=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a49=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a43=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aok=new B.dh([50,D.a3C,100,D.a3o,200,D.a3L,300,D.a3G,400,D.a38,500,D.a37,600,D.a46,700,D.a3v,800,D.a49,900,D.a43],x.m)
D.di=new B.rt(D.aok,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.agN=w([8,4],x.t)
D.a89=new A.pm(D.di,null,0.4,D.agN)
D.a8a=new A.pm(C.ak,null,0.5,null)
D.fK=new A.ev(0/0,0/0)
D.au3=new A.pV(!0,A.bwd(),44,null)
D.mn=new A.p0(16,null,D.au3,!0)
D.au2=new A.pV(!0,A.bwd(),30,null)
D.mo=new A.p0(16,null,D.au2,!0)
D.a8c=new A.uD(!1,D.mn,D.mo,D.mn,D.mo)
D.aL9=new A.uD(!0,D.mn,D.mo,D.mn,D.mo)
D.DB=new A.MT(0,"left")
D.a8P=new A.MT(1,"center")
D.DC=new A.MT(2,"right")
D.a8U=new B.a9(57495,"MaterialIcons",null,!1)
D.a9z=new B.a9(58927,"MaterialIcons",null,!1)
D.a9C=new B.a9(59005,"MaterialIcons",null,!0)
D.a9D=new B.a9(59007,"MaterialIcons",null,!0)
D.a9E=new B.a9(59011,"MaterialIcons",null,!1)
D.aau=new B.a9(62589,"MaterialIcons",null,!1)
D.a9Q=new B.a9(61349,"MaterialIcons",null,!1)
D.abf=new B.aO(D.a9Q,20,C.h,null,null)
D.a9X=new B.a9(61487,"MaterialIcons",null,!1)
D.abh=new B.aO(D.a9X,18,null,null,null)
D.abC=new B.aO(C.j6,null,C.h,null,null)
D.abD=new B.aO(C.nz,null,C.u,null,null)
D.ac4=new B.aO(C.nD,16,null,null,null)
D.a95=new B.a9(57912,"MaterialIcons",null,!1)
D.acc=new B.aO(D.a95,null,C.ad,null,null)
D.aen=new A.a5O(null)
D.aLe=new A.aIj(0,"horizontal")
D.xN=new A.yU(0,0,0,0,!1)
D.EU=new A.NN(0.5)
D.Bo=new A.a61()
D.aer=new A.Ef(D.Bo,A.bHg(),10,A.bHd(),!0,A.bHf(),A.bHe(),!1,null,null,null)
D.aLg=new A.Ef(D.Bo,A.bHg(),10,A.bHd(),!0,A.bHf(),A.bHe(),!0,null,null,null)
D.afR=w([4,3],x.t)
D.asf=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.as5=new B.aG("receivables","Forderungen (kurzfristig)")
D.arV=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.arT=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.arJ=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.arO=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.asc=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.as4=new B.aG("equity","Eigenkapital")
D.H8=w([D.asf,D.as5,D.arV,D.arT,D.arJ,D.arO,D.asc,D.as4],B.aw("C<+(f,f)>"))
D.aLk=w([],x.g)
D.akc=w([],x.O)
D.akd=w([],x.Y)
D.ake=w([],B.aw("C<ms>"))
D.akf=w([],B.aw("C<mt>"))
D.aLl=w([],x.U)
D.aLm=w([],x.u)
D.akg=w([],x.r)
D.aoX={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Tf={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yr=new B.aj(D.Tf,[0,0,0,0,0,0,0,C.cj],B.aw("aj<f,B>"))
D.aoV={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aof=new B.aj(D.aoV,[0,0,0,0],B.aw("aj<f,w>"))
D.ap9={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.anD=new B.aj(D.ap9,[0,0,0,0,null,null,null,null],B.aw("aj<f,w?>"))
D.anz=new B.aj(D.aoX,[D.yr,D.yr,D.yr,C.cj,C.cj,C.cj,D.aof,D.anD],x.R)
D.anQ=new B.aj(D.Tf,[0,0,0,0,0,0,0,C.cy],x.R)
D.aoU={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aog=new B.aj(D.aoU,[0,0,0,0,0,0,0,C.cy],x.R)
D.a4e=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4m=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3b=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3y=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3I=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4A=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2Z=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3A=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3K=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a44=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aol=new B.dh([50,D.a4e,100,D.a4m,200,D.a3b,300,D.a3y,400,D.a3I,500,D.a4A,600,D.a2Z,700,D.a3A,800,D.a3K,900,D.a44],x.m)
D.T4=new B.rt(D.aol,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7i=new B.ak(32,32,32,32)
D.aqe=new B.ag(D.a7i,C.bx,null)
D.a7k=new B.ak(48,48,48,48)
D.aqh=new B.ag(D.a7k,C.bx,null)
D.aqm=new B.ag(C.ae,C.bx,null)
D.aks=w([],B.aw("C<mM>"))
D.akt=w([],B.aw("C<nc>"))
D.XD=new A.Pp(D.aks,D.akt)
D.asY=new B.fK("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.at_=new B.fK("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.at1=new B.fK("Automaten-Business","Umsatz je Automat",null,null)
D.at2=new B.fK("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.at4=new B.fK("Top","Meistverkaufte Produkte",null,null)
D.at7=new B.fK("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.at8=new B.fK("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yh=new B.t0(C.G,C.q,0)
D.aD4=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.avF=new B.ec(D.aD4,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aCA=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.avG=new B.ec(D.aCA,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aLv=new B.R(!0,C.C,null,null,null,null,14,C.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCq=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aDl=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zu=new A.acK(0,"auto")
D.aDW=new A.acK(1,"top")
D.aI8=new A.wn("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aI9=new A.wn("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ca6","bLn",()=>B.jp(new A.bpA(),x.D))
w($,"ca7","au9",()=>B.jp(new A.bpB(),x.a))
w($,"cb3","x1",()=>B.buX(new A.brs(),x.P))
w($,"ca8","bsb",()=>C.aJ.$1$1(new A.bpC(),x.d))
w($,"ca5","bLm",()=>C.aJ.$1$1(new A.bpz(),x.X))
w($,"ca4","byp",()=>C.aJ.$1$1(new A.bpy(),x.h))
w($,"ca3","bsa",()=>B.aYl(A.c0z(),x.F,x.b))
w($,"c3m","brO",()=>new A.avM())
v($,"c6B","lo",()=>new A.b0_())})()};
(a=>{a["4RIyk9knfmjHC6jrgC9UQ5Qrn1E="]=a.current})($__dart_deferred_initializers__);