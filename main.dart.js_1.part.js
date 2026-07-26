((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NH(d,e,f,g,h){return new A.a61(f,g,d,h,e,null)},
a61:function a61(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uF:function uF(d){this.a=d},
DK:function DK(d){this.a=d},
bQc(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.T_
w=x.f
v=x.N
u=x.z
t=A.aDR(B.dq(w.a(e.h(a0,"current")),v,u))
s=A.aDR(B.dq(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDR(B.dq(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c7
p=J.cW(p,new A.aDz(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c7
o=J.cW(o,new A.aDA(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c7
q=J.cW(q,new A.aDB(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.dq(w.a(e.h(a0,"customer")),v,u)
m=B.bg(n.h(0,"purchases_count"))
m=m==null?null:C.d.a2(m)
if(m==null)m=0
l=A.oT(n.h(0,"app_gross"))
k=B.bg(n.h(0,"active_customers"))
k=k==null?null:C.d.a2(k)
if(k==null)k=0
n=A.oT(n.h(0,"avg_basket"))
u=B.dq(w.a(e.h(a0,"derived")),v,u)
v=A.oT(u.h(0,"gross_margin_pct"))
e=A.oT(u.h(0,"net_margin_pct"))
w=A.oT(u.h(0,"ebitda_margin_pct"))
j=A.oT(u.h(0,"cashflow_operating"))
i=A.bpE(u.h(0,"revenue_growth_yoy_pct"))
h=A.bpE(u.h(0,"revenue_growth_mom_pct"))
g=A.bpE(u.h(0,"result_growth_yoy_pct"))
u=A.bpE(u.h(0,"result_growth_mom_pct"))
f=B.bg(J.a3(d,"days"))
f=f==null?null:C.d.a2(f)
if(f==null)f=1
return new A.o1(t,s,r,p,o,q,new A.az1(m,l,k,n),new A.aA8(v,e,w,j,i,h,g,u),f)},
oT(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k1(J.am(d))
return w==null?0:w},
bpE(d){if(d==null)return null
if(typeof d=="number")return d
return B.k1(J.am(d))},
q8:function q8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vi:function vi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wa:function wa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az1:function az1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA8:function aA8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o1:function o1(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aDz:function aDz(){},
aDA:function aDA(){},
aDB:function aDB(){},
aDR(d){var w=J.Y(d),v=A.tY(w.h(d,"revenue_net_7")),u=A.tY(w.h(d,"revenue_net_19")),t=A.tY(w.h(d,"revenue_net")),s=A.tY(w.h(d,"expense_net")),r=A.tY(w.h(d,"result_net")),q=A.tY(w.h(d,"vat_collected")),p=A.tY(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.c7
w=J.cW(w,new A.aDS(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.o2(v,u,t,s,r,q,p,w)},
tY(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.k1(J.am(d))
return w==null?0:w},
Ck:function Ck(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o2:function o2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDS:function aDS(){},
bQb(d){return new A.yd(d,new B.ij(x.c_),C.dD)},
bqr:function bqr(){},
bqs:function bqs(){},
bsm:function bsm(){},
bqt:function bqt(){},
bqq:function bqq(){},
bqp:function bqp(){},
yd:function yd(d,e,f){this.r=d
this.a=e
this.f=f},
aDy:function aDy(d,e,f){this.a=d
this.b=e
this.c=f},
aDx:function aDx(d,e,f){this.a=d
this.b=e
this.c=f},
bQd(){return new A.ye(null)},
akI(d,e,f,g,h){return new A.akH(e,h,g,f,d,null)},
ye:function ye(d){this.a=d},
aDQ:function aDQ(d){this.a=d},
aDI:function aDI(d,e,f){this.a=d
this.b=e
this.c=f},
aDJ:function aDJ(d,e,f){this.a=d
this.b=e
this.c=f},
aDK:function aDK(d){this.a=d},
aDH:function aDH(){},
aDL:function aDL(d){this.a=d},
aDM:function aDM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDP:function aDP(){},
aDO:function aDO(){},
aDN:function aDN(){},
aDG:function aDG(d,e){this.a=d
this.b=e},
aDE:function aDE(d){this.a=d},
aDF:function aDF(d){this.a=d},
afx:function afx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
akH:function akH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amT:function amT(d,e){this.e=d
this.a=e},
bfq:function bfq(d){this.a=d},
bfr:function bfr(d){this.a=d},
bfs:function bfs(d,e,f){this.a=d
this.b=e
this.c=f},
bfp:function bfp(){},
Iw:function Iw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J_:function J_(d,e){this.c=d
this.a=e},
blw:function blw(d){this.a=d},
afv:function afv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HF:function HF(d,e){this.c=d
this.a=e},
bx3(d,e,f,g,h){var w=null
return B.j5(w,w,!0,w,new A.bpz(h,g,e,f),d,w,!0,!0,x.H)},
jB(d,e,f,g,h,i,j,k,l,m,n){return new A.ald(g,n,i,e,d,m,f,k,l,j,null)},
atO(d,e,f){var w=0,v=B.q(x.H)
var $async$atO=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j5(null,null,!0,null,new A.bpx(f,e,e.aI(0,$.c_(),x.A)),d,null,!0,!0,x.H),$async$atO)
case 2:return B.o(null,v)}})
return B.p($async$atO,v)},
a62:function a62(d){this.a=d},
aIG:function aIG(){},
aIF:function aIF(){},
aIE:function aIE(){},
HZ:function HZ(d,e){this.c=d
this.a=e},
bcZ:function bcZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcO:function bcO(){},
bcP:function bcP(){},
bcQ:function bcQ(){},
bcR:function bcR(){},
bcS:function bcS(){},
bcT:function bcT(){},
bcU:function bcU(){},
bcV:function bcV(){},
bcW:function bcW(d){this.a=d},
bcX:function bcX(d){this.a=d},
bcY:function bcY(d){this.a=d},
bd_:function bd_(d,e){this.a=d
this.b=e},
bd0:function bd0(d,e){this.a=d
this.b=e},
bpz:function bpz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpy:function bpy(d){this.a=d},
ak0:function ak0(d){this.a=d},
ald:function ald(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bd1:function bd1(d,e){this.a=d
this.b=e},
U2:function U2(d,e,f){this.c=d
this.d=e
this.a=f},
XB:function XB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkL:function bkL(){},
bkM:function bkM(){},
bkN:function bkN(d){this.a=d},
Tg:function Tg(d,e,f){this.c=d
this.d=e
this.a=f},
b3Z:function b3Z(){},
b40:function b40(d){this.a=d},
b41:function b41(d){this.a=d},
b4_:function b4_(){},
Ts:function Ts(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4M:function b4M(){},
b4N:function b4N(){},
b4O:function b4O(){},
b4P:function b4P(d){this.a=d},
alH:function alH(d,e){this.c=d
this.a=e},
bdv:function bdv(){},
bdw:function bdw(){},
ai3:function ai3(d,e){this.c=d
this.a=e},
BR:function BR(d,e,f){this.c=d
this.d=e
this.a=f},
arh:function arh(d,e){this.c=d
this.a=e},
bmN:function bmN(){},
bmO:function bmO(){},
ws:function ws(d,e){this.c=d
this.a=e},
agl:function agl(d,e){this.e=d
this.a=e},
b2t:function b2t(){},
b2s:function b2s(){},
b2r:function b2r(d,e,f){this.a=d
this.b=e
this.c=f},
b2n:function b2n(d,e){this.a=d
this.b=e},
b2u:function b2u(d){this.a=d},
b2v:function b2v(d){this.a=d},
b2o:function b2o(){},
b2p:function b2p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2q:function b2q(d,e,f){this.a=d
this.b=e
this.c=f},
bpx:function bpx(d,e,f){this.a=d
this.b=e
this.c=f},
bpw:function bpw(d){this.a=d},
AW:function AW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SU:function SU(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b2i:function b2i(d){this.a=d},
b2j:function b2j(d){this.a=d},
b2l:function b2l(d,e){this.a=d
this.b=e},
b2k:function b2k(d,e){this.a=d
this.b=e},
b2m:function b2m(d){this.a=d},
bf:function bf(){},
bAo(d){return new A.Kq(d,C.au,C.dt,null,null)},
Kq:function Kq(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SV:function SV(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ft$=f
_.cS$=g
_.c=_.a=null},
b2w:function b2w(d,e){this.a=d
this.b=e},
b2x:function b2x(d){this.a=d},
awk(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akH:f,p=a0==null?16:a0,o=d==null?D.a_x:d,n=g==null,m=n?A.bty(r,r,r,r,r,r,r,r):g,l=a3==null?D.XG:a3
n=n?A.bty(r,r,r,r,r,r,r,r):g
w=j==null?D.Dt:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nM(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Br,s,w,i,n)},
awr(d,e,f,g,h){var w=d==null?D.akI:d,v=e==null?2:e,u=g==null?C.ll:g
return new A.fA(h,f===!0,w,v,u)},
bNw(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.awr(A.ko(d.c,e.c,f,A.c0q(),x.fj),B.ab(d.d,e.d,f),!1,A.ko(d.e,e.e,f,A.ZJ(),x.S),w)},
a07(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T7
else w=h
v=m==null
u=v?8:m
t=$.ls()
s=t.aWo(f,v?8:m)
t=t.aWp(g,v?8:m)
v=d==null?A.bAm(r,r,r,r,r):d
return new A.id(q,l,w,j,u,s,e,t,v,k==null?D.akJ:k)},
bNx(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mx(d.f,e.f,f),p=A.ko(d.r,e.r,f,A.ZJ(),x.S),o=B.bW(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a07(A.bAm(v,u,null,!1,t),p,q,o,s,n,null,A.ko(d.y,e.y,f,A.c0r(),x.G),m,r)},
bNy(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mv(u,w,v,B.bW(d.d,e.d,f))},
bAm(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dk
else w=d
return new A.a03(g===!0,v,u,w,f)},
bty(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a09(4,C.hK,16,D.xq,0,120,A.c0t(),!1,!1,D.Zy,0,C.A,A.c0s())
else w=k
v=j==null?C.kS:j
return new A.a08(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c1e(d,e,f,g){var w=null,v=B.iX(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.K,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CC(C.d.j(f.b),v)},
c1d(d){return A.ays(D.dk,15)},
nM:function nM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
awj:function awj(d,e){this.a=d
this.b=e},
fA:function fA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aws:function aws(){},
awt:function awt(){},
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
mv:function mv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a03:function a03(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a08:function a08(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acZ:function acZ(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CC:function CC(d,e){this.a=d
this.b=e},
Kr:function Kr(d){this.a=d},
a0a:function a0a(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xp:function xp(d,e){this.a=d
this.b=e},
agh:function agh(){},
ago:function ago(){},
agp:function agp(){},
agr:function agr(){},
ags:function ags(){},
agt:function agt(){},
agu:function agu(){},
agv:function agv(){},
agw:function agw(){},
awu:function awu(d){this.a=d},
awv:function awv(){},
ui:function ui(d,e,f){this.a=d
this.b=e
this.c=f},
agq:function agq(){},
aww:function aww(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
awx:function awx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awy:function awy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a54:function a54(d){this.b=d},
a06:function a06(d,e,f){this.d=d
this.e=e
this.a=f},
aa8:function aa8(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i1=e
_.cV=f
_.fW=g
_.B=h
_.a3=_.U=_.V=null
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
c1f(d,e){var w=null
return new A.QX(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
awd(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p5(t,e.b,new A.q_(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bBK(d,e,f){var w=A.awd(d.b,e.b,f),v=A.awd(d.d,e.d,f),u=A.awd(d.e,e.e,f)
return new A.uH(e.a,w,A.awd(d.c,e.c,f),v,u)},
bQf(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ew(w,v)},
bBI(d,e,f){return new A.yg(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c3E(d){return!0},
c1i(d){return D.a8r},
bBJ(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pr(w,f,g,e)},
bDD(d,e,f){var w,v=A.ko(d.a,e.a,f,A.c0m(),x.dv)
v.toString
w=A.ko(d.b,e.b,f,A.c0o(),x.bN)
w.toString
return new A.Pw(v,w)},
bR0(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r7(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mQ(t,w,v,u)},
bWd(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r7(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.ni(t,w,v,u)},
bR_(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pl(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bQY(B.btp(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r7(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.ko(d.d,e.d,f,A.ZJ(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kK(r,e.f,e.r,t,e.x,u,v,w,s)},
bWc(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pl(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bWa(B.btp(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r7(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.ko(d.d,e.d,f,A.ZJ(),x.S)
if(u==null)u=v==null?C.C:null
return new A.l9(r,e.f,e.r,t,e.x,u,v,w,s)},
bQY(d,e,f,g,h,i){return new A.a5f(f,!1,g,i,d,e)},
bQZ(d){return C.d.al(d.e,1)},
bWa(d,e,f,g,h,i){return new A.ado(f,!1,g,i,d,e)},
bWb(d){return C.d.al(d.e,1)},
bBF(d,e,f){var w,v=A.ko(d.a,e.a,f,A.c0l(),x.cm)
v.toString
w=A.ko(d.b,e.b,f,A.c0n(),x.es)
w.toString
return new A.Ml(v,w,!0)},
bQe(d,e,f){return new A.Mw(d,e==null?4:e,f)},
a_X:function a_X(){},
CB:function CB(d,e){this.a=d
this.b=e},
tj:function tj(d,e){this.r=d
this.w=e},
q_:function q_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abx:function abx(){},
p5:function p5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uH:function uH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ew:function ew(d,e){this.a=d
this.b=e},
yg:function yg(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pr:function pr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad0:function ad0(){},
Pw:function Pw(d,e){this.a=d
this.b=e},
mQ:function mQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ni:function ni(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kK:function kK(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
l9:function l9(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a5f:function a5f(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ado:function ado(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Ml:function Ml(d,e,f){this.a=d
this.b=e
this.c=f},
uG:function uG(){},
Mw:function Mw(d,e,f){this.a=d
this.b=e
this.c=f},
agc:function agc(){},
agg:function agg(){},
ajq:function ajq(){},
ajG:function ajG(){},
ajH:function ajH(){},
ajJ:function ajJ(){},
ajK:function ajK(){},
akx:function akx(){},
akw:function akw(){},
aky:function aky(){},
anY:function anY(){},
apK:function apK(){},
apL:function apL(){},
arl:function arl(){},
arY:function arY(){},
arX:function arX(){},
arZ:function arZ(){},
aw9:function aw9(){},
Kk:function Kk(){},
Kl:function Kl(d,e,f){this.c=d
this.d=e
this.a=f},
awb:function awb(d){this.a=d},
awa:function awa(d){this.a=d},
QX:function QX(d,e,f){this.c=d
this.e=e
this.a=f},
Xq:function Xq(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bUL(d,e,f){var w=B.ac(f),v=w.i("aa<1,jK>")
v=B.P(new B.aa(f,new A.aXV(),v),v.i("av.E"))
w=w.i("aa<1,c>")
w=B.P(new B.aa(f,new A.aXW(),w),w.i("av.E"))
return new A.aby(e,d,v,w,null)},
bNt(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a5T(4,x.er)
for(w=0;w<4;++w)t[w]=new B.th(v,C.ap,C.w,new B.ki(1),v,v,v,v,C.bv,v)
u=new A.a_Y(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aJ(x.v))
u.bk()
return u},
aby:function aby(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aXV:function aXV(){},
aXW:function aXW(){},
a_Y:function a_Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a3=g
_.VN$=h
_.aS8$=i
_.dm$=j
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
bd7:function bd7(d,e){this.a=d
this.b=e},
awc:function awc(){},
jK:function jK(d,e){this.a=d
this.b=e},
nL:function nL(d,e){this.a=d
this.b=e},
agd:function agd(){},
age:function age(){},
agf:function agf(){},
SS:function SS(){},
An:function An(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXX:function aXX(d){this.a=d},
aXY:function aXY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXZ:function aXZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4o(d,e){var w=d==null?B.d5(C.C,1):d
return new A.a4n(e!==!1,w)},
a0c:function a0c(){},
a4n:function a4n(d,e){this.a=d
this.b=e},
MD:function MD(){},
a4p:function a4p(){},
awH:function awH(){},
aD_:function aD_(d,e){this.a=d
this.b=e},
agz:function agz(){},
ajD:function ajD(){},
ajE:function ajE(){},
ajL:function ajL(){},
Ku:function Ku(){},
vu:function vu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4t:function a4t(d){this.a=d},
a4u:function a4u(d){this.a=d},
a4v:function a4v(d){this.a=d},
My:function My(){},
Mz:function Mz(){},
a4y:function a4y(d){this.a=d},
MB:function MB(){},
MC:function MC(d){this.a=d},
a4s:function a4s(d){this.a=d},
a4r:function a4r(d){this.a=d},
Mx:function Mx(d){this.a=d},
a4w:function a4w(d){this.a=d},
a4x:function a4x(d){this.a=d},
MA:function MA(d){this.a=d},
FL:function FL(){},
aT9:function aT9(d){this.a=d},
aTa:function aTa(d){this.a=d},
aTb:function aTb(d){this.a=d},
aTc:function aTc(d){this.a=d},
aTd:function aTd(d){this.a=d},
aTe:function aTe(d){this.a=d},
aTf:function aTf(d){this.a=d},
aTg:function aTg(d){this.a=d},
aTh:function aTh(d){this.a=d},
aTi:function aTi(d){this.a=d},
aTj:function aTj(d){this.a=d},
aTk:function aTk(d){this.a=d},
aTl:function aTl(d){this.a=d},
NV:function NV(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vd:function Vd(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ft$=g
_.cS$=h
_.c=_.a=null},
bdc:function bdc(d,e){this.a=d
this.b=e},
bda:function bda(d){this.a=d},
bdb:function bdb(d,e){this.a=d
this.b=e},
bd9:function bd9(){},
bdd:function bdd(d){this.a=d},
buO(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pE(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T7:u
else w=g
v=f==null?A.awi(!1,u,0,u,!1,D.vS):f
w=new A.e9(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.awi(!1,u,0,u,!1,D.vS):d,j,a0,i,s,!1,p)
w.aqm(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bRv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bAn(d.ay,e.ay,f)
v=A.bAn(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.ko(d.cy,e.cy,f,A.ZJ(),x.S)
r=B.Z(d.r,e.r,f)
q=B.r7(d.w,e.w,f)
p=A.ko(d.a,e.a,f,A.c0k(),x.cw)
p.toString
o=B.bE6(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aIV(v,m,w,r,e.z,s,new A.yf(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NW(n),!1,u,o,!0,e.cx,p)},
awi(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.b0(127.5),D.dk.A()>>>16&255,D.dk.A()>>>8&255,D.dk.A()&255):null
else w=e
return new A.a05(h,w,g,i,f,!1)},
bAn(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.r7(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bBJ(t,A.ko(v.d,u.d,f,A.ZJ(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.r7(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.awi(!1,s,v,u,e.a,new A.Kp(!1,r,w.c,!0))},
bNA(d,e,f){var w=B.Z(d.c,e.c,f),v=B.r7(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.b0(127.5),D.dk.A()>>>16&255,D.dk.A()>>>8&255,D.dk.A()&255):null
return new A.mw(e.a,e.b,w,v)},
c3F(d){return!0},
bwS(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kS)return A.bxC(w.a,A.bus(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dk:w},
bYZ(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kS)w=A.bxC(v.a,A.bus(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dk}return A.ays(w,40)},
bGB(d,e,f,g,h){var w,v=A.bwS(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kS)w=A.bxC(u.a,A.bus(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dk}u=A.ays(w,40)
return new A.Mw(v,h==null?4:h,u)},
c3D(d,e){return!0},
c07(d,e){return Math.abs(d.a-e.a)},
c1l(d,e){var w=J.cW(e,new A.bqf(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c1h(d,e){return-1/0},
c1g(d,e){return d.a[e].b},
bHN(d){var w=J.cW(d,new A.bqc(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bHM(d){return A.ays(D.dk,15)},
pE:function pE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aIW:function aIW(){},
NW:function NW(d){this.a=d},
a05:function a05(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mw:function mw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yf:function yf(d,e,f){this.a=d
this.b=e
this.c=f},
aIH:function aIH(d,e){this.a=d
this.b=e},
a4q:function a4q(){},
Ep:function Ep(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bqf:function bqf(d){this.a=d},
bqe:function bqe(d){this.a=d},
a6g:function a6g(){},
bqc:function bqc(){},
mV:function mV(){},
q6:function q6(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rn:function rn(d,e){this.a=d
this.b=e},
tk:function tk(d,e){this.a=d
this.b=e},
Gc:function Gc(d){this.a=d},
NX:function NX(d){this.a=d},
z_:function z_(d,e){this.a=d
this.b=e},
agm:function agm(){},
agn:function agn(){},
agB:function agB(){},
ajF:function ajF(){},
ajI:function ajI(){},
alk:function alk(){},
all:function all(){},
alm:function alm(){},
alo:function alo(){},
alp:function alp(){},
alq:function alq(){},
alr:function alr(){},
apJ:function apJ(){},
ark:function ark(){},
aIX:function aIX(d){this.a=d},
aIY:function aIY(){},
aIZ:function aIZ(){},
z0:function z0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aln:function aln(){},
aJ_:function aJ_(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aJ2:function aJ2(){},
aJ0:function aJ0(d,e,f){this.a=d
this.b=e
this.c=f},
aJ1:function aJ1(d,e,f){this.a=d
this.b=e
this.c=f},
aJ3:function aJ3(){},
vd:function vd(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6f:function a6f(d,e,f){this.d=d
this.e=e
this.a=f},
aal:function aal(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i1=e
_.cV=f
_.fW=g
_.B=h
_.a3=_.U=_.V=null
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
btx(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ac(o),l=new B.aa(o,new A.awl(),m.i("aa<1,L>")).km(0,new A.awm()),k=e-l,j=new A.awp(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdr(0)/2
s=u===o.length-1?0:w
v+=t.gdr(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdr(0)/2
s=u===o.length-1?0:w
v+=t.gdr(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdr(0)/2
s=u===o.length-1?0:w
v+=t.gdr(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iN(o,m.i("iN<1>")).au(0,new A.awn(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iN(o,m.i("iN<1>")).au(0,new A.awo(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
awl:function awl(){},
awm:function awm(){},
awp:function awp(d,e,f){this.a=d
this.b=e
this.c=f},
awq:function awq(d,e,f){this.a=d
this.b=e
this.c=f},
awn:function awn(d,e,f){this.a=d
this.b=e
this.c=f},
awo:function awo(d,e,f){this.a=d
this.b=e
this.c=f},
bus(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iN(w,B.ac(w).i("iN<1>")).au(0,new A.aG4(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aG4:function aG4(d,e){this.a=d
this.b=e},
azC(d,e){var w,v
if(e!=null){w=B.ac(e).i("aa<1,L>")
v=B.P(new B.aa(e,new A.azD(),w),w.i("av.E"))
return A.c19(d,new A.a0K(v,x.cX))}else return d},
azD:function azD(){},
bVk(d,e){var w=!0
if(d!==C.f2)if(!(d===C.ap&&e===C.w))w=d===C.il&&e===C.b_
if(w)return D.DH
else{w=!0
if(d!==C.hp)if(!(d===C.il&&e===C.w))w=d===C.ap&&e===C.b_
if(w)return D.DI
else return D.a98}},
N1:function N1(d,e){this.a=d
this.b=e},
a0A:function a0A(d,e){this.a=d
this.b=e},
z3:function z3(d,e){this.a=d
this.$ti=e},
aly:function aly(){},
c19(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cD($.an().r)
for(w=B.b([],x.C),v=new B.NP(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.W(B.fr('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.NO(v,s)
v.CT()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CT()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.JO(d.aS4(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.hI(m)}p+=n
o=!o}}return l},
a0K:function a0K(d,e){this.a=d
this.b=0
this.$ti=e},
b0r:function b0r(){},
PQ:function PQ(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.ds=f
_.cQ=_.D=null
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
aTu:function aTu(d){this.a=d},
a4j:function a4j(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
bug(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bND(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gei(v)===0){v=d.a.a
if(v.gei(v)===0){v=d.b.a
if(v.gei(v)===0){v=d.c.a
v=v.gei(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
ays(d,e){var w=1-e/100
return B.aF(d.gfF(d),C.d.b0(d.gNw()*w),C.d.b0(d.gFS()*w),C.d.b0(d.gK0()*w))},
bBH(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ah(v,u,t,w?d.b.c.b:0)},
buh(d){var w=d.a,v=w?A.aXU(d.b):0,u=w?A.aXU(d.c):0,t=w?A.aXU(d.d):0
return new B.ah(v,u,t,w?A.aXU(d.e):0)},
bSK(d){var w
if(d.c===0){d.seT(null)
w=B.c0(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bv9(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seT(f.mK(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seT(null)}},
aXU(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ko(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kQ(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kQ(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c2t(d,e,f){return C.d.b0(d+(e-d)*f)},
bxC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kQ(m,x.i)
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
A.a61.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.n
r=r?C.l:C.ag
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cs(t.x,C.l,s,18),C.aW],w))
v.push(B.aD(new B.e7(t.c,!1,s),1))
v=B.ak(v,C.B,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.j(t.d,1,C.aj,s,B.bJ(u==null?C.h:u,22,C.K),s,s,s)],w)
return B.bt(r,B.ad(w,C.B,C.i7,C.i),q,s,C.ad,s,3)}}
A.uF.prototype={
Ln(d){return this.aS7(d)},
aS7(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Ln=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ew("finance_summary",B.a4(["p_from",E.r1(d.a),"p_to",E.r1(d.b)],s,r),r),$async$Ln)
case 3:q=f
if(q==null){u=D.aon
w=1
break}if(x.f.b(q)){u=B.dq(q,s,r)
w=1
break}u=D.aoP
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ln,v)},
Lm(d){return this.aS6(d)},
aS6(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lm=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ew("finance_kpis",B.a4(["p_from",E.r1(d.a),"p_to",E.r1(d.b)],s,r),r),$async$Lm)
case 3:q=f
if(x.f.b(q)){u=B.dq(q,s,r)
w=1
break}u=D.ao6
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lm,v)},
pz(d){return this.aq4(d)},
aq4(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hf("sevdesk-sync",B.a4(["from",E.r1(d.a),"to",E.r1(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a2(B.fx(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pz,v)},
Li(d){return this.aRX(d)},
aRX(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Li=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hf("finance-export-pdf",B.a4(["from",E.r1(d.a),"to",E.r1(d.b)],s,s)),$async$Li)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.az(J.a3(r,"base64"))
w=1
break}throw B.e(B.dz("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Li,v)}}
A.DK.prototype={
FM(d){return this.ajg(d)},
ajg(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FM=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ln(d),$async$FM)
case 7:q=f
o=A.aDR(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hn(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FM,v)},
FI(d){return this.aj1(d)},
aj1(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FI=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lm(d),$async$FI)
case 7:q=f
o=A.bQc(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hn(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FI,v)},
pz(d){return this.aq5(d)},
aq5(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pz=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pz(d),$async$pz)
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
p=r.Hn(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pz,v)},
Lh(d){return this.aRW(d)},
aRW(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lh=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Li(d),$async$Lh)
case 7:q=f
o=C.hB.cL(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hn(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lh,v)},
Hn(d){if(d instanceof B.ya)return d
if(d instanceof B.lZ){if(d.b==="42501")return new B.vy(d.a)
return new B.t1(d.a)}if(d instanceof B.MR)return new B.t1("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AO("Unerwarteter Fehler: "+B.i(d))},
$iaDD:1}
A.q8.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vi.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wa.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.az1.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aA8.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o1.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ck.prototype={
gbC(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o2.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yd.prototype={
GI(d){return this.aq3(0)},
aq3(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se5(0,C.dq)
s=t.r
r=s.aI(0,$.x8(),x.P)
p.a=null
w=3
return B.k(B.p4(new A.aDy(p,t,r),x.H),$async$GI)
case 3:t.se5(0,f)
q=t.f
if(q.ghq(q)==null){q=$.bt4()
s=s.e
s===$&&B.a()
s.cl(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GI,v)},
Lg(){return this.aRV()},
aRV(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lg=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se5(0,C.dq)
s=t.r.aI(0,$.x8(),x.P)
q.a=null
w=3
return B.k(B.p4(new A.aDx(q,t,s),x.H),$async$Lg)
case 3:t.se5(0,e)
r=t.f
u=r.ghq(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lg,v)}}
A.ye.prototype={
dv(d,e){var w=null,v=e.ap($.x8(),x.P),u=e.ap($.bt4(),x.aN)
return B.il(B.dB(B.b([new B.fs("Finanzen","Dashboard",new A.afx(e.ap($.bt3(),x.b).gja(),new A.aDI(this,d,e),new A.aDJ(this,d,e),new A.aDK(d),new A.aDL(d),new A.aDM(this,d,e,v),w),w),C.ax,new A.amT(v,w),C.c9,D.aeR,C.c9,B.dl(u,new A.aDN(),new A.aDO(),new A.aDP(),!1,!0,!1,x.d,x.l)],x.p),C.cz,w,C.H,!1),C.l,new A.aDQ(e))},
Jb(d,e){return this.aKr(d,e)},
aKr(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jb=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bt3()
w=3
return B.k(e.aI(0,s.ghO(),x.F).GI(0),$async$Jb)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghq(s)
t=d.P(x.q).f
t.bo(B.c8(null,null,null,null,null,C.t,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jb,v)},
B5(d,e){return this.aw1(d,e)},
aw1(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$B5=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bt3().ghO(),x.F).Lg(),$async$B5)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bo(D.awn)
w=1
break}t=B.pU(C.u,10)
w=4
return B.k($.bJS().tW(s,"finanzauswertung.pdf",t,null,null,null),$async$B5)
case 4:case 1:return B.o(u,v)}})
return B.p($async$B5,v)},
B6(d,e,f){return this.aI7(d,e,f)},
aI7(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B6=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j5(null,null,!0,null,new A.aDG(f,d),d,null,!0,!0,x.cJ),$async$B6)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nF(e.aI(0,$.c_(),x.A))
p=f.a
o=f.b
n=$.dx()
m=n.ak(p)
n=n.ak(o)
w=8
return B.k(r.zl("finance_period",p,o,B.a4(["period_from",p.ej()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B6)
case 8:if(d.e!=null)d.P(x.q).f.bo(F.uU)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bo(B.c8(null,null,null,null,null,C.t,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$B6,v)}}
A.afx.prototype={
u(d){var w=this,v=null,u=A.akI(C.l,F.hQ,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akI(v,D.aaU,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akI(v,D.a9U,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akI(C.ab,C.j9,C.ab,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aW,t,C.aW,r,C.aW,q,C.aW,A.akI(C.al,C.eg,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.m,C.f,C.Q,0,v,v)}}
A.akH.prototype={
u(d){var w,v=this,u=null,t=B.aO(12),s=B.aO(12),r=B.aO(12),q=v.w
if(q==null)q=C.ag
q=B.d5(q,1)
w=v.r
if(w==null)w=C.h
return B.GP(B.dR(!1,C.Z,!0,t,B.eL(!1,s,!0,B.b1(u,B.cs(v.c,w,u,20),C.r,u,u,new B.b_(u,u,q,r,u,u,C.E),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.ac,0,u,u,u,u,u,C.bz),u,v.d,u,u)}}
A.amT.prototype={
dv(d,e){var w=null,v=this.e,u=$.dx(),t=x.p
return B.bt(w,B.ad(B.b([D.a8b,C.I,B.ak(B.b([D.abI,C.aX,B.aD(B.j(u.ak(v.a)+" \u2013 "+u.ak(v.b),w,w,w,B.y(C.h,16,C.K),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.v,B.mi(C.cG,B.b([new A.Iw("Monat",new A.bfq(e),w,w),new A.Iw("Jahr (YTD)",new A.bfr(e),w,w),new A.Iw("Zeitraum w\xe4hlen \u2026",new A.bfs(this,d,e),D.a9Z,w)],t),C.e2,6,8)],t),C.B,C.f,C.i),w,w,C.D,w,3)},
IA(d,e){return this.aH1(d,e)},
aH1(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IA=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.au6(new A.bfp(),d,B.bK(B.aV(t)-5,1,1,0,0,0,0),new B.lz(s.a,s.b,x.bz),B.bK(B.aV(t)+1,1,1,0,0,0,0),C.ek),$async$IA)
case 2:r=g
if(r!=null)e.aI(0,$.x8().ghO(),x.V).wn(0,new E.lE(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IA,v)}}
A.Iw.prototype={
u(d){var w=null,v=B.aO(9999),u=B.aO(9999),t=B.aO(9999),s=B.d5(C.ag,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cs(p,C.h,w,14),C.aW],r))
q.push(B.j(this.c,w,w,w,B.y(C.h,13,C.K),w,w,w))
return B.dR(!1,C.Z,!0,v,B.eL(!1,u,!0,B.b1(w,B.ak(q,C.m,C.f,C.Q,0,w,w),C.r,w,w,new B.b_(w,w,s,t,w,w,C.E),w,w,w,w,C.kR,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.ac,0,w,w,w,w,w,C.bz)}}
A.J_.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jj(new A.blw(this)),C.c9,D.a8f,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bt(s,B.ak(B.b([D.ac5,C.aA,B.aD(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.p,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.ac,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afv(t.a,t.b,t.c==="revenue",t.d,s),C.I],r))}q.push(B.ad(w,C.m,C.f,C.i))}return B.ad(q,C.ae,C.f,C.i)}}
A.afv.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aK:C.ac,s=B.d5(u?C.l:C.ag,1),r=B.aO(4),q=w.c
r=B.b1(C.a0,B.j(C.c.a_(q,0,1),v,v,v,B.bJ(C.h,14,C.o),v,v,v),C.r,v,v,new B.b_(t,v,s,r,v,v,C.E),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.aj,v,B.y(C.h,14,C.K),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aD(B.ad(B.b([q,B.j(t,v,v,v,B.y(C.p,12,C.k),v,v,v)],s),C.B,C.f,C.i),1)
q=$.dt().ak(w.f)
return B.bt(v,B.ak(B.b([r,C.aA,t,B.j(q,v,v,v,B.y(u?C.al:C.h,15,C.K),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.dL,v,3)}}
A.HF.prototype={
u(d){var w=null
return B.bt(C.ab,B.ak(B.b([D.acE,C.aA,B.aD(B.j(this.c,w,w,w,B.y(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fI,w,C.D,w,3)}}
A.a62.prototype={
dv(d,e){return B.dl(e.ap($.bMk(),x.e),new A.aIE(),new A.aIF(),new A.aIG(),!1,!0,!1,x.X,x.l)}}
A.HZ.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.atP,C.v,B.jj(new A.bcZ(v,q,100-t.w.a,w,p)),C.v,new A.ak0(u),C.ax,D.atO,C.v,new A.agl(t,u),C.ax,D.atJ,C.v,B.bE(u,!0,u,B.mP(u,B.bt(u,new A.Tg(t,220,u),u,u,C.D,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bd_(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.ax,D.atD,C.v,B.bE(u,!0,u,B.mP(u,new A.Ts(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bd0(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.ax,D.atH,C.v,new A.alH(t,u),C.ax,D.atF,C.v,new A.ai3(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.ax,D.atL,C.v,new A.arh(t,u)],s))
return B.ad(r,C.ae,C.f,C.i)}}
A.ak0.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.p,11,C.k).dg(1.35),w,w,w)}}
A.ald.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ab:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bd1(m,d):l
r=x.p
q=B.b([B.aD(B.j(m.c.toUpperCase(),l,l,l,B.y(C.p,10,C.o).fq(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d5(C.ab,0.8)
n=B.aO(4)
q.push(B.b1(l,B.j("Ziel "+p,l,l,l,B.y(C.ab,9,C.o),l,l,l),C.r,l,l,new B.b_(l,l,o,n,l,l,C.E),l,l,l,l,C.n8,l,l,l))}q=B.b([B.ak(q,C.m,C.f,C.i,0,l,l),C.aY,new A.a4j(C.Bd,C.ex,B.j(m.d,l,l,l,B.bJ(w,22,C.o),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.aj,l,B.y(C.p,10,C.aB),l,l,l))
q.push(C.ca)
q.push(B.ak(B.b([new A.U2("Vormonat",m.r,l),C.cp,new A.U2("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.ca)
q.push(B.aD(new A.XB(v,m.y,m.z,l),1))
return B.bE(l,u,l,B.mP(l,B.bt(l,B.ad(q,C.B,C.f,C.i),l,l,C.da,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.P,l)}}
A.U2.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aO(4)
return B.b1(r,B.j(this.c+" \u2014",r,r,r,B.y(C.p,9,C.o),r,r,r),C.r,r,r,new B.b_(C.ag,r,r,q,r,r,C.E),r,r,r,r,C.n8,r,r,r)}w=q>=0
v=w?C.al:C.ab
u=v.fL(0.12)
t=B.d5(v,0.7)
s=B.aO(4)
return B.b1(r,B.ak(B.b([B.cs(w?F.a9e:D.a9d,v,r,10),F.aw2,B.j(this.c+" "+C.d.al(q,1)+" %",r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.m,C.f,C.Q,0,r,r),C.r,r,r,new B.b_(u,r,t,s,r,r,C.E),r,r,r,r,C.n8,r,r,r)}}
A.XB.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ew(v,j[v]))
u=C.b.km(j,new A.bkL())
t=C.b.km(j,new A.bkM())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bkN(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4o(k,!1)
w=B.b([A.aIV(k,2,A.awi(!1,C.l.fL(0.16),0,k,!0,D.vS),C.l,0.35,k,D.Dy,k,!0,!1,!0,!1,D.EX,!1,10,D.Yl,!0,C.ll,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NV(A.buO(k,k,k,D.akK,l,D.Br,D.Dt,D.Dz,w,D.aeV,k,m,k,n,D.XG,D.akL,D.a8u),C.au,C.ah,k,k)}}
A.Tg.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aJ3
w=C.b.fv(p,0,new A.b3Z())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.awr(B.b([A.a07(q,q,D.AS,q,C.l,q,q,q,r.b,6),A.a07(q,q,D.AS,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c4(A.bAo(A.awk(q,q,u,q,q,A.a4o(q,!1),q,new A.yg(!0,!0,q,new A.b4_(),A.ZE(),!1,q,A.atQ(),A.ZE()),q,v,q,q,new A.uH(!0,new A.p5(16,q,new A.q_(!0,new A.b40(this),46,q),!0),D.kk,D.kk,new A.p5(16,q,new A.q_(!0,new A.b41(p),26,q),!0)))),this.d,q)},
aJJ(d){if(Math.abs(d)>=1000)return C.d.al(d/1000,1)+" k"
return C.d.al(d,0)}}
A.Ts.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.aa(v,new A.b4M(),w),x.i)
C.b.M(o,new B.aa(u,new A.b4N(),w))
t=C.b.fv(o,0,new A.b4O())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.awr(B.b([A.a07(q,q,q,q,C.l,q,q,q,v[s],14),A.a07(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c4(A.bAo(A.awk(q,q,n,q,q,A.a4o(q,!1),q,D.Dz,q,o,q,q,new A.uH(!0,D.kk,D.kk,D.kk,new A.p5(16,q,new A.q_(!0,new A.b4P(p),26,q),!0)))),this.d,q)
return this.e?r:B.bt(q,r,q,q,C.D,q,3)}}
A.alH.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aJ2
w=new B.aa(l,new A.bdv(),B.ac(l).i("aa<1,L>")).km(0,new A.bdw())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dt()
o=r.d
n=new B.aW(4,4)
o=B.b([B.ak(B.b([new B.kE(1,C.dN,B.ad(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ak(r.f),m,m,m,B.y(C.p,12,C.aB),m,m,m)],v),C.B,C.f,C.i),m),C.aX,B.j(p.ak(o),m,m,m,B.bJ(C.h,16,C.o),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.ca,new B.D3(new B.d4(n,n,n,n),C.bD,B.Eq(C.ag,8,C.d.c1(o/w,0,1),D.AG),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.ZH(r.gbC(),q.gbC())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.bt(m,B.ad(u,C.m,C.f,C.i),m,m,C.D,m,3)}}
A.ai3.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aD(new A.BR("Aktive Kunden",""+s,u),1)
w=B.aD(new A.BR("K\xe4ufe",""+t.a,u),1)
v=$.dt()
return B.bt(u,B.ak(B.b([s,w,B.aD(new A.BR("\xd8-Warenkorb",v.ak(t.d),u),1),B.aD(new A.BR("Umsatz/Kunde",v.ak(r),u),1)],x.p),C.m,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.BR.prototype={
u(d){var w=null
return B.ad(B.b([B.j(this.c.toUpperCase(),w,w,w,B.y(C.p,10,C.o).fq(0.6),w,w,w),C.bN,B.j(this.d,w,w,w,B.bJ(C.h,20,C.o),w,w,w)],x.p),C.B,C.f,C.Q)}}
A.arh.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.bmN(),B.ac(q).i("aa<1,L>")).km(0,new A.bmO()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.ak(B.b([new B.kE(1,C.dN,B.j(u.b,1,C.aj,r,B.y(C.h,13,C.o),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.y(C.p,12,C.K),r,r,r),B.j($.dt().ak(t),r,r,r,B.y(C.h,13,C.o),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.aY,new B.D3(new B.d4(s,s,s,s),C.bD,B.Eq(C.ag,6,C.d.c1(t/p,0,1),D.AG),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.ZH(u.gbC(),s.gbC())
else s=!0
if(!s)t.push(C.I)
C.b.M(n,t)}return B.bt(r,B.ad(n,C.m,C.f,C.i),r,r,C.D,r,3)}}
A.ws.prototype={
u(d){var w=null
return B.bt(w,B.j(this.c,w,w,w,B.y(C.p,13,C.k),w,w,w),C.ac,w,C.D,w,3)}}
A.agl.prototype={
dv(d,e){return B.dl(e.ap($.bzk(),x.fM),new A.b2r(this,d,e),new A.b2s(),new A.b2t(),!1,!0,!1,x.h,x.l)}}
A.AW.prototype={
X(){return new A.SU()},
aX2(){return this.d.$0()}}
A.SU.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fg(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.Hb[t].a
if(v)r=""
else{r=B.bg(J.a3(w,s))
if(r==null)r=null
r=C.d.al(r==null?0:r,2)
r=B.b2(r,".",",")}u.m(0,s,new B.bH(new B.cT(r,C.bK,C.aS),$.ag()))}q.e!==$&&B.b8()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c6(v,v.r,v.e,B.l(v).i("c6<2>"))
while(v.t()){w=v.d
w.R$=$.ag()
w.S$=0}this.aq()},
rg(d){var w=this.e
w===$&&B.a()
w=C.c.bi(w.h(0,d).a.a)
w=B.b2(w,".","")
w=B.k1(B.b2(w,",","."))
return w==null?0:w},
I_(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I_=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b2i(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZt("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ej(),0,10),"p_cash_and_bank",q.rg("cash_and_bank"),"p_receivables",q.rg("receivables"),"p_inventory_value",q.rg("inventory_value"),"p_other_current_assets",q.rg("other_current_assets"),"p_fixed_assets",q.rg("fixed_assets"),"p_current_liabilities",q.rg("current_liabilities"),"p_long_term_liabilities",q.rg("long_term_liabilities"),"p_equity",q.rg("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I_)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aX2()
o=q.c
o.toString
B.bb(o,!1).f1()
q.c.P(x.q).f.bo(D.awo)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bo(B.c8(null,null,null,null,null,C.t,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b2j(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I_,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bJ(C.h,18,C.o),r,r,r),p=s.f?r:new A.b2l(s,d),o=s.d
o===$&&B.a()
w=x.p
p=B.b([B.hH(D.abK,B.j("Stichtag: "+C.c.a_(o.ej(),0,10),r,r,r,r,r,r,r),p,r),C.v],w)
for(v=0;v<8;++v){o=D.Hb[v]
u=s.e
u===$&&B.a()
C.b.M(p,B.b([B.f_(r,C.aT,!1,r,!0,C.t,r,B.fe(),u.h(0,o.a),r,r,r,r,r,2,new B.cg(r,r,r,o.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.b0,r,r,r,r,C.io,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a2,r,r,r,r),C.I],w))}p.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.p,11,C.k),r,r,r))
p=B.c4(B.fa(B.ad(p,C.ae,C.f,C.Q),r,C.H),r,380)
o=s.f
u=B.dJ(C.cV,r,r,o?r:new A.b2m(d),r,r)
o=o?r:s.gaDs()
t=B.dG(C.l,C.h,r,r,r,r,r)
return B.lv(B.b([u,B.dQ(s.f?F.YS:C.et,o,t)],w),C.n,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.ZH(this.gbC(),e.gbC())
else w=!0
return w},
gv(d){return(B.eA(B.H(this))^B.bIh(this.gbC()))>>>0},
j(d){B.bBD()
return B.H(this).j(0)}}
A.Kq.prototype={
X(){return new A.SV(B.A(x.S,x.I),new A.awu(B.A(x.x,x.T)),null,null)}}
A.SV.prototype={
u(d){var w,v=this,u=v.a1w(),t=v.CW
t.toString
t=v.a1x(t.av(0,v.ghF().gp(0)))
w=v.a1x(u)
v.a.toString
return new A.Kl(new A.a06(t,w,null),u,null)},
a1x(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.awr(s.c,s.d,!1,r,s.a))}return d.aOY(w)},
a1w(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Un(t.ch)
if(r)s=w.a
r=t.y
t=t.aPT(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOZ(A.bty(!1,!0,!0,v.d,v.c,u.garB(),v.f,v.e))}return t},
arC(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf5()||e==null||e.a==null){w=v.cy
v.J(w.gaOn(w))
return}v.J(new A.b2w(v,e))},
nQ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1w(),new A.b2x(w)))}}
A.nM.prototype={
UX(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.awk(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPT(d,e){return this.UX(null,null,d,e)},
aOZ(d){return this.UX(null,d,null,null)},
aOY(d){return this.UX(d,null,null,null)},
WT(d,e,f){var w,v,u,t=A.ko(d.ch,e.ch,f,A.c0p(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bBK(d.d,e.d,f),q=A.bDD(d.e,e.e,f),p=A.bBI(d.c,e.c,f),o=e.a
o=A.a4o(B.a0n(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.awk(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bBF(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbC(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.awj.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fA.prototype={
gdr(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.aws(),B.ac(v).i("aa<1,L>")).km(0,new A.awt())
v=v.length
return w+(v-1)*this.d},
gbC(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.id.prototype={
gbC(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mv.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a03.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a08.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acZ.prototype={
L(){return"TooltipDirection."+this.b}}
A.a09.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CC.prototype={
gbC(){return[this.a,this.b,C.cD,C.w,null]}}
A.Kr.prototype={}
A.a0a.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xp.prototype={
hg(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WT(v,w,d)}}
A.agh.prototype={}
A.ago.prototype={}
A.agp.prototype={}
A.agr.prototype={}
A.ags.prototype={}
A.agt.prototype={}
A.agu.prototype={}
A.agv.prototype={}
A.agw.prototype={}
A.awu.prototype={
Un(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ui(0,0,!1)
v=new A.z3(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ui(t,u,!0)}w=null
try{w=C.b.qe(d,new A.awv())}catch(s){return new A.ui(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ui(q,r,!1)
u.m(0,v,j)
return j}}
A.ui.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.agq.prototype={}
A.aww.prototype={
i7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_C(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abF(t,A.btx(w,t.a),u)
l.y=u
l.aRe(e,u,f)
l.alc(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRn(d,e,m,t,r,s,n,o,f)}}},
abF(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dz("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iN(p,B.ac(p).i("iN<1>")).au(0,new A.awx(t,q,r,s))
w.push(new A.a54(q))}return w},
aRe(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
a4=B.Ps(h,Math.min(b3.dF(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dF(Math.min(t,a2),b5,b8)
a4=B.Ps(h,a5,g,Math.max(b3.dF(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seT(null)
a6=b3.f.eo()
u.drawRRect(B.mq(a4),a6)
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
u.clipRect(B.dN(b1),$.oX()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mq(a4),a6)
a6.delete()
u.restore()
b3.aRl(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gei(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cD($.an().r)
n=new B.hb(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.hI(k)
v.fV(A.azC(b2,o.r),b3.r)}}}},
aRn(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AD(a5,a5,a5,a5,B.da(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.ls().ZC(a8,a7.b),a7.a),C.cD,C.w,a5,b6.c,C.bv)
w.afo(b1.f)
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
m=v+4+(o.gcZ(0)+o.gd0(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aEK)j=v===D.Zy&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZD(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Fz(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.ls().Ka(new B.F(v,t),d).b
s=$.ls()
q=w.b
p=q.c
q=q.a.c
a0=s.Ka(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahG()
a1=b1.Q
if(!a1.k(0,C.A)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vz(d,new A.awy(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aRl(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gei(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dF(w,j,k)
u=e.a
t=n.dF(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a1
s=w?new B.aW(i.x,i.y):C.a1
r=w?C.a1:new B.aW(i.e,i.f)
w=w?C.a1:new B.aW(i.r,i.w)
q=B.Ps(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dF(v,j,k),i.b)
r=n.dF(t,j,k)
v=t<v
t=v?C.a1:new B.aW(i.z,i.Q)
p=v?C.a1:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a1
q=B.Ps(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a1)}else q=B.bvu(w,n.dF(v,j,k),u,n.dF(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
We(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abF(b2,A.btx(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0a(d,q,a0,o,a2,a1,new A.ew(d.a,v),new B.r(n,t))}}return null}}
A.a54.prototype={}
A.a06.prototype={
bm(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcO(),t=new A.aww()
t.a0O()
$.an()
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
t=new A.aa8(this.d,v,u,t,d,C.bo,new B.bq(),B.aJ(x.v))
t.bk()
t.Yy(v.cy)
t.aex()
return t},
by(d,e){e.sik(0,this.d)
e.sYj(this.e)
e.scO(B.bw(d,null,x.w).w.gcO())
e.B=d
e.bc()}}
A.aa8.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYj(d){var w=this
if(w.i1.k(0,d))return
w.i1=d
w.a0m(d.cy)
w.bc()},
scO(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.aZ(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i7(w,new A.a0A(t,v),new A.vu(u.aC,u.i1,u.cV,x.Q))
s.restore()},
Zw(d){var w=this,v=w.gC(0)
return new A.Kr(w.fW.We(d,v,new A.vu(w.aC,w.i1,w.cV,x.Q)))}}
A.a_X.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CB.prototype={
L(){return"AxisSide."+this.b}}
A.tj.prototype={}
A.q_.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abx.prototype={
gbC(){return[!1,0,0,0]}}
A.p5.prototype={
gbC(){return[this.b,this.a,this.c,!0]}}
A.uH.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ew.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ew))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yg.prototype={
gbC(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pr.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad0.prototype={
gbC(){return[this.a,this.b]}}
A.Pw.prototype={
gbC(){return[this.a,this.b]}}
A.mQ.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ni.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kK.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l9.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5f.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ado.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Ml.prototype={
gbC(){return[this.a,this.b,!0]}}
A.uG.prototype={}
A.Mw.prototype={
ad3(d,e,f){var w,v
$.an()
w=B.aT()
v=this.a
w.r=v.gp(v)
w.b=C.bg
d.iP(f,this.b,w)},
gbC(){return[this.a,this.b,this.c,0]}}
A.agc.prototype={}
A.agg.prototype={}
A.ajq.prototype={}
A.ajG.prototype={}
A.ajH.prototype={}
A.ajJ.prototype={}
A.ajK.prototype={}
A.akx.prototype={}
A.akw.prototype={}
A.aky.prototype={}
A.anY.prototype={}
A.apK.prototype={}
A.apL.prototype={}
A.arl.prototype={}
A.arY.prototype={}
A.arX.prototype={}
A.arZ.prototype={}
A.aw9.prototype={
Mj(d,e,f,g,h,i){return new B.iy(this.aV4(d,e,f,g,h,i),x.g4)},
aV3(d,e,f,g){return this.Mj(d,e,f,!0,g,!0)},
aV4(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mj(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.ls().aiO(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fR(u-s,v)*v===u
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
A.Kk.prototype={
a0O(){var w,v=this
$.an()
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
w.a_D(d,e,f)
w.aRa(e,f)
w.aRk(e,f)
w.aRj(e,f)},
aRj(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.ls().Op(w.a,a1.r-a1.f)
u=$.bsH().Mj(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kZ(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seT(j.mK(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seT(a0)}k=l.c
p.c=k
if(k===0){p.seT(a0)
k=B.c0(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Do(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.ls().Op(w.b,a1.y-a1.x)
u=$.bsH().Mj(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dF(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kZ(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seT(k.mK(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seT(a0)}p=f.c
q.c=p
if(p===0){q.seT(a0)
p=B.c0(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Do(n,m,d.a,f.d)}},
aRa(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hb(new B.G(0,0,0+w.a,0+w.b),this.b)},
aRk(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.kZ(new B.r(n.fc(t.a,m,e),0),new B.r(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seT(p.mK(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seT(null)}o=n.e.eo()
w.drawRect(B.dN(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.kZ(new B.r(0,n.dF(t.a,m,e)),new B.r(w,n.dF(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seT(q.mK(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seT(null)}o=n.e.eo()
j.drawRect(B.dN(s),o)
o.delete()}},
aRi(d,e,f){var w,v
this.a_D(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad4(d,e,f,w)
if(v.b.length!==0)this.aRp(d,e,f,w)},
ad4(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=f.dF(o,a1,a0)
m=new B.r(0,n)
o=f.dF(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kZ(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seT(j.mK(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c0(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Do(m,l,f.c,p.d)
n=p.r
h=n.gdr(n).eE(0,2)
g=C.d.an(o,n.gbS(n).eE(0,2))
J.aZ(r.save())
r.translate(h,g)
n=n.gNg().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdr(n).eE(0,2)
o=C.d.an(o,n.gbS(n).eE(0,2))
k=f.d
k===$&&B.a()
s.ad5(0,n,new B.r(h,o),k)}}},
aRp(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fc(o,a3,a2)
m=new B.r(n,0)
o=d.fc(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kZ(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seT(j.mK(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c0(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Do(m,l,d.c,p.d)
n=p.r
h=n.gdr(n).eE(0,2)
g=n.gbS(n).eE(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.aZ(r.save())
r.translate(f,e)
n=n.gNg().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdr(n).eE(0,2)
g=n.gbS(n).ad(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.ad5(0,n,new B.r(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dF(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZD(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kl.prototype={
gakx(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gaky(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakz(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakv(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akT(d){var w,v=this,u=null,t=v.d,s=A.buh(t.d),r=t.a
r=r.a&&A.bND(r.b)?r.b:u
w=B.b([B.b1(u,v.c,C.r,u,u,new B.b_(u,u,r,u,u,u,C.E),u,u,u,s,u,u,u,u)],x.p)
s=new A.awb(w)
if(v.gakx())C.b.hw(w,s.$1(!0),new A.An(D.AN,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakz())C.b.hw(w,s.$1(!0),new A.An(D.mr,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gaky())C.b.hw(w,s.$1(!0),new A.An(D.AO,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakv())C.b.hw(w,s.$1(!0),new A.An(D.dE,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
return w},
u(d){return B.jj(new A.awa(this))}}
A.QX.prototype={
X(){return new A.Xq(new B.bh(null,x.eF))}}
A.Xq.prototype={
ax1(){switch(this.a.c.a){case 0:return C.e5
case 1:return C.fB
case 2:return C.ex
case 3:return C.fC}},
axx(){switch(this.a.c.a){case 0:return new B.ah(0,0,8,0)
case 1:return new B.ah(0,0,0,8)
case 2:return new B.ah(8,0,0,0)
case 3:return new B.ah(0,8,0,0)}},
ax3(d){this.a.toString
return},
aA(){this.aO()
$.cx.x1$.push(this.ga3Y())},
be(d){this.bF(d)
$.cx.x1$.push(this.ga3Y())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axx()
return B.bw3(B.b00(0,B.b1(v.ax1(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.aby.prototype={
bm(d){return A.bNt(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_Y.prototype={
hm(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.u)},
hV(d){if(this.B===C.aF)return this.xW(d)
return this.acG(d)},
aJU(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8A(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a8z(d,B.hz())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8z(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aF?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fW(u,null)
break
case 1:q=B.fW(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8A(p)
t=Math.max(t,o.aJU(p))
m=r.aG$}return new A.bd7(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.J.prototype.ga6.call(p)),n=p.a8z(o,B.mp()),m=n.a,l=n.b
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
q=s.b-p.a8A(r==null?B.W(B.a_("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c5(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
ea(d,e){return this.xX(d,e)},
aN(d,e){if(this.gC(0).gZ(0))return
this.a3.sbh(0,null)
this.uT(d,e)},
l(){this.a3.sbh(0,null)
this.anP()}}
A.bd7.prototype={}
A.awc.prototype={}
A.jK.prototype={
gbC(){return[this.a,this.b]}}
A.nL.prototype={}
A.agd.prototype={}
A.age.prototype={
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
A.agf.prototype={}
A.SS.prototype={
l(){var w,v,u
for(w=this.VN$,v=w.length,u=0;u<v;++u)w[u].l()
this.ix()}}
A.An.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.ex
case 1:return C.fC
case 2:return C.e5
case 3:return C.fB}},
gaZG(){var w=this.d,v=A.buh(w.d),u=A.bBH(w.a)
switch(this.c.a){case 2:case 0:return new B.ah(0,v.b,0,v.d).ad(0,new B.ah(0,u.b,0,u.d))
case 1:case 3:return new B.ah(v.a,0,v.c,0).ad(0,new B.ah(u.a,0,u.c,0))}},
gahu(){var w=this.d,v=A.bBH(w.a),u=A.buh(w.d)
switch(this.c.a){case 2:case 0:return u.gcZ(0)+u.gd0(0)+(v.gcZ(0)+v.gd0(0))
case 1:case 3:return u.ger()+v.ger()}},
aVO(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.ls().Op(d,f-e)
w=p.c
v=w!==D.mr
if((!v||w===D.dE)&&p.d instanceof A.nM){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.btx(u,d)
w=new B.iN(t,B.ac(t).i("iN<1>"))
s=w.giD(w).f0(0,new A.aXX(u),x.W).fY(0)}else{r=$.bsH()
w=!v||w===D.dE
v=p.d
q=r.aV3(w?v.w:v.z,o,f,e)
v=B.oe(q,new A.aXY(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.l(v).i("t.E"))}w=B.ac(s).i("aa<1,nL>")
w=B.P(new B.aa(s,new A.aXZ(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b1(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mr
u=!v
t=!u||w===D.dE
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dE?C.H:C.aF
q=B.b([],x.p)
if(w===D.AN||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dE?r:j.gow().c.c
p=!u||w===D.dE?j.gow().c.c:r
o=j.gaZG()
n=!u||w===D.dE?C.aF:C.H
j.gahu()
m=j.gahu()
l=!u||w===D.dE
k=j.d
l=l?k.f:k.x
u=!u||w===D.dE?k.r:k.y
q.push(B.b1(i,A.bUL(new A.awc(),n,j.aVO(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AO||w===D.dE)j.gow()
return new B.f3(t,i,i,B.bQg(q,C.m,s,i,C.f,C.Q,0,i,i,C.c_),i)}}
A.a0c.prototype={
gbC(){return[this.a,this.b]}}
A.a4n.prototype={
gbC(){return[this.a,this.b]}}
A.MD.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4p.prototype={
gab_(d){return!1},
gbC(){return[!1,!1,!1,!1]}}
A.awH.prototype={}
A.aD_.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.agz.prototype={}
A.ajD.prototype={}
A.ajE.prototype={}
A.ajL.prototype={}
A.Ku.prototype={
i7(d,e,f){}}
A.vu.prototype={}
A.hi.prototype={
gdJ(){return null},
gaf5(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.MC
if(w)return!0
return!(v instanceof A.Mz)&&!(v instanceof A.My)&&!(v instanceof A.MA)&&!(v instanceof A.Mx)&&!w&&!(v instanceof A.MB)}}
A.a4t.prototype={
gdJ(){return this.a.b}}
A.a4u.prototype={
gdJ(){return this.a.b}}
A.a4v.prototype={
gdJ(){return this.a.b}}
A.My.prototype={}
A.Mz.prototype={}
A.a4y.prototype={
gdJ(){return this.a.b}}
A.MB.prototype={}
A.MC.prototype={
gdJ(){return this.a.b}}
A.a4s.prototype={
gdJ(){return this.a.b}}
A.a4r.prototype={
gdJ(){return this.a.b}}
A.Mx.prototype={
gdJ(){return this.a.b}}
A.a4w.prototype={
gdJ(){return this.a.gdJ()}}
A.a4x.prototype={
gdJ(){return this.a.gdJ()}}
A.MA.prototype={
gdJ(){return this.a.gdJ()}}
A.FL.prototype={
Yy(d){this.V=d.b
this.U=d.c
this.a3=d.d},
aex(){var w=this,v=null,u=w.ac=B.bva(v,v)
u.ay=new A.aT9(w)
u.ch=new A.aTa(w)
u.CW=new A.aTb(w)
u.cy=new A.aTc(w)
u.cx=new A.aTd(w)
u=w.aE=B.GA(v,-1,v)
u.B=new A.aTe(w)
u.a4=new A.aTf(w)
u.V=new A.aTg(w)
u=w.bA=B.a6n(v,w.a3,v)
u.p3=new A.aTh(w)
u.p4=new A.aTi(w)
u.RG=new A.aTj(w)},
cv(){var w=x.k.a(B.J.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dD(d){return new B.F(d.b,d.d)},
kJ(d){return!0},
mU(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bA
w===$&&B.a()
w.rD(d)
w=v.aE
w===$&&B.a()
w.rD(d)
w=v.ac
w===$&&B.a()
w.rD(d)}else if(x.gJ.b(d))v.l6(new A.a4x(d))},
gMN(d){return new A.aTk(this)},
gMP(d){return new A.aTl(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdJ()
v=w!=null?u.Zw(w):null
u.V.$2(d,v)
u.a4=C.bo},
gKG(d){return this.a4},
gFl(){var w=this.ao
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.ao=!0},
aF(d){this.ao=!1
this.fg(0)},
$ijl:1}
A.NV.prototype={
X(){return new A.Vd(B.b([],x.r),B.A(x.S,x.I),new A.aIX(B.A(x.y,x.dj)),null,null)}}
A.Vd.prototype={
u(d){var w,v=this,u=v.a4_(),t=v.CW
t.toString
t=v.aaz(t.av(0,v.ghF().gp(0)))
w=v.aaz(u)
v.a.toString
return new A.Kl(new A.a6f(t,w,null),u,null)},
aaz(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ac(w).i("aa<1,e9>")
w=B.P(new B.aa(w,new A.bdc(this,d),v),v.i("av.E"))
return d.aPQ(w,this.cy)},
a4_(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Un(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQ4(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPu(new A.Ep(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayl(),t.c,t.d))}return r},
aym(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf5())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bda(v))
return}v.J(new A.bdb(v,e))},
nQ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4_(),new A.bdd(w)))}}
A.pE.prototype={
WT(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4o(B.a0n(d.a.b,j.b,f),j.a)
w=A.bBF(d.at,e.at,f)
v=A.bBI(d.c,e.c,f)
u=A.bBK(d.d,e.d,f)
t=A.bDD(d.e,e.e,f)
s=A.ko(d.ch,e.ch,f,A.c2v(),x.cz)
s.toString
r=A.ko(d.CW,e.CW,f,A.c2u(),x.J)
r.toString
u=A.buO(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UY(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.buO(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQ4(d,e,f,g){return this.UY(null,null,d,e,f,g,null)},
aPu(d){var w=null
return this.UY(w,d,w,w,w,w,w)},
aPQ(d,e){var w=null
return this.UY(d,w,w,w,w,w,e)},
gbC(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e9.prototype={
aqm(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aIW())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fK))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b8()
n.b=q
r.toString
n.c!==$&&B.b8()
n.c=r
s.toString
n.d!==$&&B.b8()
n.d=s
t.toString
n.e!==$&&B.b8()
n.e=t}},
acm(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aIV(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPB(d){return this.acm(d,null)},
aPD(d){return this.acm(null,d)},
gbC(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NW.prototype={
gbC(){return[this.a]}}
A.a05.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mw.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kp.prototype={
gbC(){return[!1,this.b,this.c,!0]}}
A.yf.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.aIH.prototype={
L(){return"LabelDirection."+this.b}}
A.a4q.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ep.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6g.prototype={
gbC(){return[4,C.hK,16,D.xq,0,120,A.c2x(),!1,!1,!1,0,C.A,A.c2w()]}}
A.mV.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q6.prototype={}
A.rn.prototype={
gbC(){return[this.a,this.b,C.cD,C.w,null]}}
A.tk.prototype={
gbC(){return[this.a,this.b]}}
A.Gc.prototype={
gbC(){return[this.a]}}
A.NX.prototype={}
A.z_.prototype={
hg(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WT(v,w,d)}}
A.agm.prototype={}
A.agn.prototype={}
A.agB.prototype={}
A.ajF.prototype={}
A.ajI.prototype={}
A.alk.prototype={}
A.all.prototype={}
A.alm.prototype={}
A.alo.prototype={}
A.alp.prototype={}
A.alq.prototype={}
A.alr.prototype={}
A.apJ.prototype={}
A.ark.prototype={}
A.aIX.prototype={
Un(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xW
u=new A.z3(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.z0(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aIY())}catch(p){return D.xW}v=null
try{v=C.b.qe(w.a,new A.aIZ())}catch(p){return D.xW}o=v.a
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
if(f<m)m=f}e=new A.z0(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.z0.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.aln.prototype={}
A.aJ_.prototype={
i7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gab_(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aT())
a3.aOu(new B.G(0,0,u,v))}d.a_C(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aRg(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRc(a3,q,a4)
d.aRh(a3,q,a4)
d.alb(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dz("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vd(q,i,j,k))}}d.aRo(a3,s,a4)
if(w.gab_(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRm(a2,a3,v,f,new A.Gc(g),a4)}},
aRc(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bug(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Z5(o,e,u,f)
s=p.aiG(o,e,t,u,f)
r=p.Z7(o,e,t,u,f,!0)
q=p.aiF(o,e,t,u,f)
p.aRf(d,s,p.Z4(o,e,t,u,f,!0),f,e)
p.aR9(d,q,r,f,e)
p.aRd(d,t,e)
p.aRb(d,t,e,f)}},
aRg(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bug(a6.a),a9=A.bug(a7.a)
if(a8.length!==a9.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bV.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ac(m).i("cG<1>")
k=B.P(new B.cG(m,l),l.i("av.E"))
j=a3.Z5(a4,a6,n,b3)
i=a3.Z6(a4,a7.aPD(k),k,b3,j)
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
a1.seT(u.mK(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seT(null)}$.an()
a2=new B.mz(C.dr,C.bg,C.dY,C.er,C.dM).eo()
m=B.dN(new B.G(0,0,s,r))
l=$.bV.b
if(l===$.bV)B.W(B.va(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fV(i,a3.r)
w.restore()}},
aRh(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zb(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dF(q.b,w,f)
n.$4(q,p/v*100,e,r).ad3(s,q,new B.r(p,o))}}},
aRo(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h2(b3,new A.aJ2())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zb(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dF(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.W(B.rm(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lo(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lo(q.$2(m,k))))
f=b1.dF(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dF(a2,w,b4)
a5=new B.r(h,a4)
a6=a0/2
a7=g-a6
a8=g+a6
if(a4>a7&&a4<a8)a5=f<a4?new B.r(h,a4-(a4-a7)):new B.r(h+0,a4+(a8-a4))
a9=i.a
f=b1.y
f===$&&B.a()
a4=a9.a
a6=a9.b
b0=B.kZ(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seT(a6.mK(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seT(null)}a4=a9.c
f.c=a4
if(a4===0){f.seT(null)
a4=B.c0(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Do(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.W(B.rm(d.a))
f.ad3(t,j,new B.r(h,g))}}},
Z6(d,e,f,g,h){var w=this.aiH(d,e,f,g,h)
return w},
Z5(d,e,f,g){return this.Z6(d,e,f,g,null)},
aiH(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cD($.an().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dF(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.f8(d,a0))
if(e===1)g.aB(new B.ct(d,a0))}else g.aB(new B.ct(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.u,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
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
j=new B.r(n,l)
s=new B.Lo(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.hI(r)}return g},
Z7(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.buM(f)
v=J.Y(g)
u=s.fc(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.ct(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,t))
w.aB(new B.ct(s.fc(v.h(g,0).a,d,h),s.dF(v.h(g,0).b,d,h)))
w.aB(new B.pd())
return w},
aiG(d,e,f,g,h){return this.Z7(d,e,f,g,h,!1)},
Z4(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.buM(f)
v=J.Y(g)
u=t.fc(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.ct(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aB(new B.ct(u,0))
w.aB(new B.ct(t.fc(v.h(g,0).a,d,h),t.dF(v.h(g,0).b,d,h)))
w.aB(new B.pd())
return w},
aiF(d,e,f,g,h){return this.Z4(d,e,f,g,h,!1)},
aRf(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bv9(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.fV(e,r.r)},
aR9(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bv9(s,q.b,q.c,new B.G(v,0,u,t))
d.a.fV(e,r.r)},
aRd(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.NP(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k4:C.dY
u.e=C.er
u.r=v.gp(0)
u.seT(null)
u.c=f.x
u.r=v.gp(0)
$.ls()
u.z=new B.z8(C.aG,w.c*0.57735+0.5)
d.a.fV(B.buN(A.azC(e,f.cy),w.b),this.f)},
aRb(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k4:C.dY
q.e=C.er
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
A.bv9(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bSK(t)
d.a.fV(A.azC(e,f.cy),s.f)},
aRm(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bHN(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dz("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.ls().ZC(b4,u.b)
s=u.a
r=w.k(0,C.iL)?new B.ki(1):w
q=new B.th(new B.hM(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.cD,C.w,r,a8,a8,a8,a8,C.bv,a8)
q.afo(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dF(b7.b,a9,b9)
l=p+C.hK.ger()
k=o+(w-1)*4+(C.hK.gcZ(0)+C.hK.gd0(0))
j=t-k-16
i=a7.ZD(b3,l,D.xq,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Fz(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bHM(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.ls().Ka(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.ls().Ka(new B.F(t,w),0)
if(!C.A.k(0,C.A)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.Vz(0,new A.aJ0(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bVk(q.r,q.w)
A:{if(D.DH===a5){a6=a3
break A}if(D.DI===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vz(0,new A.aJ1(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Zb(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
We(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj7(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h2(t,new A.aJ3())
return t.length===0?null:t},
aj7(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.r(this.fc(q.a,d,h),this.dF(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hw(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q6(s,f,g,C.b.iq(w,v),v.a,v.b)}else return null}}
A.vd.prototype={}
A.a6f.prototype={
bm(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcO(),t=new A.aJ_()
t.a0O()
$.an()
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
w.a=D.a_G
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
t=new A.aal(this.d,v,u,t,d,C.bo,new B.bq(),B.aJ(x.v))
t.bk()
t.Yy(v.cx)
t.aex()
return t},
by(d,e){e.sik(0,this.d)
e.sYj(this.e)
e.scO(B.bw(d,null,x.w).w.gcO())
e.B=d
e.bc()}}
A.aal.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYj(d){var w=this
if(w.i1.k(0,d))return
w.i1=d
w.a0m(d.cx)
w.bc()},
scO(d){if(this.cV.k(0,d))return
this.cV=d
this.bc()},
aN(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.aZ(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i7(w,new A.a0A(t,v),new A.vu(u.aC,u.i1,u.cV,x.o))
s.restore()},
Zw(d){var w=this,v=w.gC(0)
return new A.NX(w.fW.We(d,v,new A.vu(w.aC,w.i1,w.cV,x.o)))}}
A.N1.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a0A.prototype={
aOu(d){this.a.a.clipRect(B.dN(d),$.oX()[1],!0)
return null},
adb(d,e){d.aN(this.a,e)},
Vz(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aZ(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.ls()
s.Yh(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Do(d,e,f,g){var w=B.cD($.an().r)
w.aB(new B.f8(d.a,d.b))
w.aB(new B.ct(e.a,e.b))
this.a.fV(A.azC(w,g),f)}}
A.z3.prototype={
gbC(){return[this.a]}}
A.aly.prototype={}
A.a0K.prototype={}
A.b0r.prototype={
Ka(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWo(d,e){var w,v,u,t,s
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
aWp(d,e){var w,v
if(d==null)return D.a_R
w=d.b
v=e/2
return d.aPG(w>v?v:w)},
Op(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZq(w)},
aZq(d){if(d<1)return this.aIs(d)
return this.a7E(d)},
aIs(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7E(d*q)/q},
a7E(d){var w,v=C.e.j(C.d.a2(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a2(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a2(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a2(Math.pow(10,v))
else return C.d.a2(Math.pow(10,v))},
aiW(d){if(d>=1)return 1
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
ZC(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iR
w=e.a?u.w.c3(e):e
v=B.bS(d,C.vo)
v=v==null?null:v.ay
return v===!0?w.c3(C.m9):w},
aiO(d,e,f,g){var w=C.d.ah(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.PQ.prototype={
a3C(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st4(d){var w=this,v=w.ae
if(v===d)return
w.ae=d
if(w.a3C(v)||w.a3C(d))w.a7()
else{w.cQ=w.D=null
w.bc()}},
shH(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cQ=w.D=null
w.bc()},
scC(d){var w=this
if(w.ds==d)return
w.ds=d
w.G=w.cQ=w.D=null
w.bc()},
dD(d){var w,v=this.D$
if(v!=null){w=v.ar(C.ai,C.iF,v.gdk())
switch(this.ae.a){case 6:return d.c2(new B.at(0,d.b,0,d.d).xI(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xI(w)}}else return new B.F(B.M(0,d.a,d.b),B.M(0,d.c,d.d))},
e8(d,e){var w=this.D$
return w==null?null:w.fN(C.iF,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dI(C.iF,!0)
switch(u.ae.a){case 6:t=x.k
w=t.a(B.J.prototype.ga6.call(u))
v=new B.at(0,w.b,0,w.d).xI(u.D$.gC(0))
u.fy=t.a(B.J.prototype.ga6.call(u)).c2(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.J.prototype.ga6.call(u)).xI(u.D$.gC(0))
break}u.cQ=u.D=null}else{t=x.k.a(B.J.prototype.ga6.call(u))
u.fy=new B.F(B.M(0,t.a,t.b),B.M(0,t.c,t.d))}},
TA(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cQ!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c3(new Float64Array(16))
w.h0()
m.cQ=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bx6(m.ae,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yA(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yA(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pI(n.a,n.b,0)
q.qQ(w.a/s.a,w.b/s.b,1,1)
q.fZ(-o,-p.b,0,1)
m.cQ=q}},
a6z(d,e){var w,v,u,t,s=this,r=s.cQ
r.toString
w=B.zi(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cQ
v.toString
u=B.i3.prototype.gi6.call(s)
t=s.ch.a
return d.z9(r,e,v,u,t instanceof B.q7?t:null)}else s.ks(d,e.ad(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gZ(0)||s.D$.gC(0).gZ(0))return
s.TA()
w=s.D
w.toString
if(w&&s.eX!==C.r){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.uq?t:null
u.sbh(0,d.o1(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaG4(),s.eX,t))}else s.ch.sbh(0,s.a6z(d,e))},
ea(d,e){var w,v=this
if(!v.gC(0).gZ(0)){w=v.D$
w=w==null?null:w.gC(0).gZ(0)
w=w===!0}else w=!0
if(w)return!1
v.TA()
return d.JU(new A.aTu(v),e,v.cQ)},
tr(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eV(d,e){var w
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OS()
else{this.TA()
w=this.cQ
w.toString
e.fX(0,w)}}}
A.a4j.prototype={
bm(d){var w=new A.PQ(this.e,this.f,B.e6(d),C.r,null,new B.bq(),B.aJ(x.v))
w.bk()
w.sc8(null)
return w},
by(d,e){e.st4(this.e)
e.shH(this.f)
e.scC(B.e6(d))
if(C.r!==e.eX){e.eX=C.r
e.bc()
e.cu()}}}
var z=a.updateTypes(["L(q8)","C(ew)","~(w,fA)","L(e9,w)","L(L,q8)","bM(L,tj)","pr(L)","w(q6,q6)","~(hi,Kr?)","xR(z)","HF(B,bF)","J_(o2)","HZ(o1)","vi(@)","e9(L)","wa(@)","ai(L,tj)","Ck(@)","uF(dI<uF>)","L(vi)","L(wa)","ws(B,bF)","AW(z)","Q<~>()","q8(@)","xp(@)","L(id)","C(fA)","~(w,id)","~(@)","jK(nL)","c(nL)","jK(bD<w,L>)","jK(L)","nL(jK)","~(hi,NX?)","e9(e9)","DK(dI<aDD>)","z_(@)","lE(Gn<lE>)","tk(w)","uG(ew,L,e9,w)","rn(mV)","C(e9)","w(vd,vd)","L(fA)","Q<o2>(ce<o2>)","q7?(rD,r)","w(w,w,L)","fA(fA,fA,L)","id(id,id,L)","mv(mv,mv,L)","CC?(fA,w,id,w)","E(fA)","c(L,tj)","ew(ew,ew,L)","C(L)","mQ(mQ,mQ,L)","ni(ni,ni,L)","kK(kK,kK,L)","l9(l9,l9,L)","f(kK)","f(l9)","e9(e9,e9,L)","mw(mw,mw,L)","uG(ew,L,e9,w{size:L?})","C(ew,e9)","L(r,r)","u<tk>(e9,u<w>)","Q<o1>(ce<o1>)","u<rn>(u<mV>)","E(mV)","yd(eY<B?>)"])
A.aDz.prototype={
$1(d){var w=B.dq(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q8(J.am(v==null?"":v),A.oT(w.h(0,"revenue_net")),A.oT(w.h(0,"expense_net")),A.oT(w.h(0,"result_net")))},
$S:z+24}
A.aDA.prototype={
$1(d){var w,v,u,t=B.dq(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.oT(t.h(0,"gross"))
u=B.bg(t.h(0,"purchases_count"))
u=u==null?null:C.d.a2(u)
if(u==null)u=0
return new A.vi(s,r,w,v,u,A.oT(t.h(0,"avg_basket")))},
$S:z+13}
A.aDB.prototype={
$1(d){var w,v=B.dq(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bg(v.h(0,"quantity"))
w=w==null?null:C.d.a2(w)
if(w==null)w=0
return new A.wa(u,t,w,A.oT(v.h(0,"gross")))},
$S:z+15}
A.aDS.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.Ck(v,u,J.am(t==null?"expense":t),A.tY(w.h(d,"net")),A.tY(w.h(d,"tax")),A.tY(w.h(d,"gross")))},
$S:z+17}
A.bqr.prototype={
$1(d){return new A.uF(d.ap($.c_(),x.A))},
$S:z+18}
A.bqs.prototype={
$1(d){return new A.DK(d.ap($.bMl(),x.D))},
$S:z+37}
A.bsm.prototype={
$1(d){return E.aDC()},
$S:z+39}
A.bqt.prototype={
$1(d){var w=d.ap($.x8(),x.P)
return d.ap($.auv(),x.a).FM(w)},
$S:z+46}
A.bqq.prototype={
$1(d){var w=d.ap($.x8(),x.P)
return d.ap($.auv(),x.a).FI(w)},
$S:z+69}
A.bqp.prototype={
$1(d){return this.aix(d)},
aix(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ap($.c_(),x.A).hl("finance_balance_kpis",t),$async$$1)
case 3:s=r.dq(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:215}
A.aDy.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.auv(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDx.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.auv(),x.a).Lh(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDQ.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bt4()
if(s.e==null)B.W(B.a_(y.b))
s.gcq().cl(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDI.prototype={
$0(){return this.a.Jb(this.b,this.c)},
$S:0}
A.aDJ.prototype={
$0(){return this.a.B5(this.b,this.c)},
$S:0}
A.aDK.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).e4(B.ea(new A.aDH(),null,w),w)},
$S:0}
A.aDH.prototype={
$1(d){return F.CL},
$S:z+9}
A.aDL.prototype={
$0(){return B.o7(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDM.prototype={
$0(){var w=this
return w.a.B6(w.b,w.c,w.d)},
$S:0}
A.aDP.prototype={
$0(){return D.aqP},
$S:93}
A.aDO.prototype={
$2(d,e){return new A.HF(B.i(d),null)},
$S:z+10}
A.aDN.prototype={
$1(d){return new A.J_(d,null)},
$S:z+11}
A.aDG.prototype={
$1(d){var w=null,v=this.a,u=$.dx()
v=B.j("Die Finanzauswertung f\xfcr "+u.ak(v.a)+" \u2013 "+u.ak(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.lv(B.b([B.dJ(C.cV,w,w,new A.aDE(u),w,w),B.dQ(F.v0,new A.aDF(u),B.dG(C.l,C.h,w,w,w,w,w))],x.p),w,v,F.v1)},
$S:51}
A.aDE.prototype={
$0(){B.bb(this.a,!1).df(!1)
return null},
$S:0}
A.aDF.prototype={
$0(){B.bb(this.a,!1).df(!0)
return null},
$S:0}
A.bfq.prototype={
$0(){var w=this.a.aI(0,$.x8().ghO(),x.V),v=E.aDC()
w.wn(0,v)
return v},
$S:0}
A.bfr.prototype={
$0(){var w=this.a.aI(0,$.x8().ghO(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lE(B.bK(B.aV(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.bfs.prototype={
$0(){return this.a.IA(this.b,this.c)},
$S:0}
A.bfp.prototype={
$2(d,e){return new B.oz(B.V(d).aP1(B.V(d).ax.aPV(C.h,C.l)),e,null)},
$S:1006}
A.blw.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dt(),s=A.NH(!1,C.l5,"Umsatz 7 %",t.ak(u.a),w),r=A.NH(!1,C.l5,"Umsatz 19 %",t.ak(u.b),w),q=A.NH(!0,D.a9Y,"Umsatz netto",t.ak(u.c),w),p=A.NH(!1,D.a9X,"Aufwand",t.ak(u.d),w),o=u.e,n=t.ak(o)
return B.a53(1.7,B.b([s,r,q,p,A.NH(!0,C.nC,"Ergebnis",n,o<0?C.ab:C.al),A.NH(!1,C.eg,"USt-Saldo",t.ak(u.f-u.r),w)],x.p),v,12,12,C.jN,!0)},
$S:101}
A.aIG.prototype={
$0(){return D.aqM},
$S:93}
A.aIF.prototype={
$2(d,e){var w=null
return B.bt(C.ab,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.y(C.h,13,C.k),w,w,w),C.fI,w,C.D,w,3)},
$S:273}
A.aIE.prototype={
$1(d){return new A.HZ(d,null)},
$S:z+12}
A.bcZ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dt(),i=j.ak(k.c),h=l.w,g=l.d,f=B.ac(g).i("aa<1,L>"),e=f.i("av.E"),d=B.P(new B.aa(g,new A.bcO(),f),e)
i=A.jB(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ak(r.b)
w=B.P(new B.aa(g,new A.bcP(),f),e)
d=A.jB(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ak(k.e)
w=B.P(new B.aa(g,new A.bcQ(),f),e)
k=A.jB(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.al(h.b,1)
v=B.P(new B.aa(g,new A.bcR(),f),e)
w=A.jB(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.al(h.a,1)
u=B.P(new B.aa(g,new A.bcS(),f),e)
v=A.jB(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.al(r.c,1)
t=B.P(new B.aa(g,new A.bcT(),f),e)
u=A.jB(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.al(h.c,1)
s=B.P(new B.aa(g,new A.bcU(),f),e)
t=A.jB(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ak(h.d)
s=B.P(new B.aa(g,new A.bcV(),f),e)
h=A.jB(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ak(l.r.d)
m=B.P(new B.aa(g,new A.bcW(m),f),e)
m=A.jB(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ak(l)
l=B.P(new B.aa(g,new A.bcX(l),f),e)
l=A.jB(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.al(j,1)
j=B.P(new B.aa(g,new A.bcY(j),f),e)
return B.a53(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jB(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jN,!0)},
$S:101}
A.bcO.prototype={
$1(d){return d.b},
$S:z+0}
A.bcP.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bcQ.prototype={
$1(d){return d.d},
$S:z+0}
A.bcR.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcS.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bcT.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bcU.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcV.prototype={
$1(d){return d.d},
$S:z+0}
A.bcW.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bcX.prototype={
$1(d){return this.a},
$S:z+0}
A.bcY.prototype={
$1(d){return this.a},
$S:z+0}
A.bd_.prototype={
$0(){return A.bx3(this.b,1.45,new A.Tg(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bd0.prototype={
$0(){return A.bx3(this.b,1.6,new A.Ts(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bpz.prototype={
$1(d){var w=this,v=null,u=B.aO(16),t=x.p,s=B.b([B.ak(B.b([B.aD(B.j(w.a,v,v,v,B.bJ(C.h,18,C.o),v,v,v),1),B.fh(v,v,D.ac4,v,v,new A.bpy(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.y(C.p,12,C.aB),v,v,v),C.I],t))
s.push(C.v)
s.push(B.c4(new B.mt(w.c,w.d,v),v,17976931348623157e292))
return B.a3F(v,C.n,new B.ae(C.ad,B.ad(s,C.B,C.f,C.Q),v),v,v,v,C.fi,C.uL,v,new B.d6(u,C.A),v)},
$S:1007}
A.bpy.prototype={
$0(){return B.bb(this.a,!1).f1()},
$S:0}
A.bd1.prototype={
$0(){var w=this.a,v=B.b2(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bx3(this.b,2.4,new A.XB(w.w,w.y,w.z,null),C.b.ci(u," \xb7 "),v)
return null},
$S:0}
A.bkL.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bkM.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bkN.prototype={
$1(d){return A.aIV(null,1.4,null,C.ab,0.35,D.agj,D.Dy,null,!1,!1,!1,!1,D.EX,!1,10,D.Yl,!0,C.ll,B.b([new A.ew(0,d),new A.ew(this.a,d)],x.U))},
$S:z+14}
A.b3Z.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+4}
A.b40.prototype={
$2(d,e){var w=null
return B.j(this.a.aJJ(d),w,w,w,B.y(C.p,10,C.K),w,w,w)},
$S:z+16}
A.b41.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=this.a.length)return C.uT
return new B.ae(C.kQ,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.y(C.p,9,C.K),w,w,w),w)},
$S:z+5}
A.b4_.prototype={
$1(d){return D.a8s},
$S:z+6}
A.b4M.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4N.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4O.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b4P.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=3)return C.uT
return new B.ae(C.kQ,B.j(this.a[v],w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+5}
A.bdv.prototype={
$1(d){return d.d},
$S:z+19}
A.bdw.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bmN.prototype={
$1(d){return d.d},
$S:z+20}
A.bmO.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b2t.prototype={
$0(){return D.aqU},
$S:93}
A.b2s.prototype={
$2(d,e){return new A.ws("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b2r.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=null
if(d==null)return B.bt(o,B.ad(B.b([B.j("Noch keine Bilanzdaten erfasst.",o,o,o,B.y(C.h,14,C.K),o,o,o),C.I,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",o,o,o,B.y(C.p,12.5,C.k),o,o,o),C.v,B.hH(C.Ev,D.aE8,new A.b2n(p.b,p.c),o)],x.p),C.B,C.f,C.i),C.ac,o,C.D,o,3)
w=new A.b2u(d)
v=C.b.fv(p.a.e.d,0,new A.b2o())
u=w.$1("equity")
if(u==null)u=0
t=u>0?v/u*100:o
w=B.jj(new A.b2p(new A.b2v(w),t,w,u))
s=J.Y(d)
r=B.i(s.h(d,"as_of"))
s=J.d(s.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=x.p
return B.ad(B.b([w,C.I,B.ak(B.b([B.aD(B.j("Stand: "+r+" \xb7 Quelle: "+s,o,o,o,B.y(C.p,11,C.k),o,o,o),1),B.nc(D.acx,D.aDb,new A.b2q(p.b,p.c,d),o)],q),C.m,C.f,C.i,0,o,o)],q),C.ae,C.f,C.i)},
$S:259}
A.b2n.prototype={
$0(){return A.atO(this.a,this.b,null)},
$S:0}
A.b2u.prototype={
$1(d){var w=B.bg(J.a3(this.a,d))
return w==null?null:w},
$S:1008}
A.b2v.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.al(v,1)
w=B.b2(w,".",",")+" %"}return w},
$S:30}
A.b2o.prototype={
$2(d,e){return d+e.d},
$S:z+4}
A.b2p.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jB(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fm,o.$1("liquidity1_pct")),m=A.jB(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fm,o.$1("liquidity2_pct")),l=A.jB(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fm,o.$1("liquidity3_pct"))
o=A.jB(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fm,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.al(w,1)
w=B.b2(w,".",",")+" %"}w=A.jB(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fm,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dt()
v=u.ak(v)
return B.a53(p,B.b([n,m,l,o,w,A.jB(s,s,!1,"Bilanzsumme",!1,"EK "+u.ak(t.d),s,s,s,C.fm,v)],x.p),q,12,12,C.jN,!0)},
$S:101}
A.b2q.prototype={
$0(){return A.atO(this.a,this.b,this.c)},
$S:0}
A.bpx.prototype={
$1(d){return new A.AW(this.a,new A.bpw(this.b),this.c,null)},
$S:z+22}
A.bpw.prototype={
$0(){var w=this.a,v=$.bzk()
if(w.e==null)B.W(B.a_(y.b))
w.gcq().cl(v)},
$S:0}
A.b2i.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b2j.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b2l.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.u3(u.b,B.bK(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b2k(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b2k.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b2m.prototype={
$0(){return B.bb(this.a,!1).f1()},
$S:0}
A.b2w.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b2x.prototype={
$1(d){return new A.xp(x.B.a(d),this.a.a.r)},
$S:z+25}
A.aws.prototype={
$1(d){return d.e},
$S:z+26}
A.awt.prototype={
$2(d,e){return d+e},
$S:45}
A.awv.prototype={
$1(d){return d.c.length!==0},
$S:z+27}
A.awx.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdr(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+28}
A.awy.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.adb(v.d,v.e)},
$S:0}
A.awb.prototype={
$1(d){return 0},
$S:1009}
A.awa.prototype={
$2(d,e){return B.fk(C.bU,this.a.akT(e),C.t,C.bu,null)},
$S:1010}
A.aXV.prototype={
$1(d){return d.a},
$S:z+30}
A.aXW.prototype={
$1(d){return d.b},
$S:z+31}
A.aXX.prototype={
$1(d){return new A.jK(this.a.ch[d.a].a,d.b)},
$S:z+32}
A.aXY.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mr||v===D.dE))t=1-t
return new A.jK(d,t*w.d)},
$S:z+33}
A.aXZ.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.ls()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.al(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.al(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.al(v/1000,1)
t="K"}else{u=C.d.al(v,r.aiW(Math.abs(s.b-s.c)))
t=""}if(C.c.hK(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nL(d,q.c.b.$2(p,new A.tj(u+t,s.e)))},
$S:z+34}
A.aT9.prototype={
$1(d){this.a.l6(new A.a4t(d))},
$S:173}
A.aTa.prototype={
$1(d){this.a.l6(new A.a4u(d))},
$S:41}
A.aTb.prototype={
$1(d){this.a.l6(new A.a4v(d))},
$S:27}
A.aTc.prototype={
$0(){this.a.l6(D.a1s)},
$S:0}
A.aTd.prototype={
$1(d){this.a.l6(new A.Mz())},
$S:43}
A.aTe.prototype={
$1(d){this.a.l6(new A.a4y(d))},
$S:42}
A.aTf.prototype={
$0(){this.a.l6(D.a1t)},
$S:0}
A.aTg.prototype={
$1(d){this.a.l6(new A.MC(d))},
$S:98}
A.aTh.prototype={
$1(d){this.a.l6(new A.a4s(d))},
$S:172}
A.aTi.prototype={
$1(d){this.a.l6(new A.a4r(d))},
$S:171}
A.aTj.prototype={
$1(d){return this.a.l6(new A.Mx(d))},
$S:170}
A.aTk.prototype={
$1(d){return this.a.l6(new A.a4w(d))},
$S:58}
A.aTl.prototype={
$1(d){return this.a.l6(new A.MA(d))},
$S:55}
A.bdc.prototype={
$1(d){var w=this.a.db.h(0,C.b.iq(this.b.ch,d))
return d.aPB(w==null?B.b([],x.t):w)},
$S:z+36}
A.bda.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bdb.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h2(w,new A.bd9())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gc(w))},
$S:0}
A.bd9.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+7}
A.bdd.prototype={
$1(d){return new A.z_(x.hf.a(d),this.a.a.r)},
$S:z+38}
A.aIW.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.bqf.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bBJ(t?A.bwS(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tk(w,new A.yf(!0,A.bxD(),new A.bqe(v)))},
$S:z+40}
A.bqe.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bQe(A.bwS(d,e,f),w,A.bYZ(d,e,f))},
$S:z+41}
A.bqc.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iX(v,v,u==null?D.dk:u,v,v,v,v,v,v,v,v,14,v,v,C.K,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rn(C.d.j(d.b),w)},
$S:z+42}
A.aIY.prototype={
$1(d){return d.a.length!==0},
$S:z+43}
A.aIZ.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aJ2.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+44}
A.aJ0.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aJ1.prototype={
$0(){this.a.adb(this.b,this.c)},
$S:0}
A.aJ3.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+7}
A.awl.prototype={
$1(d){return d.gdr(0)},
$S:z+45}
A.awm.prototype={
$2(d,e){return d+e},
$S:45}
A.awp.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iN(v,B.ac(v).i("iN<1>")).au(0,new A.awq(w,this.a/(u+1),this.c))},
$S:0}
A.awq.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdr(0)/2
this.c[d]=v
w.a=v+e.gdr(0)/2},
$S:z+2}
A.awn.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdr(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdr(0)/2},
$S:z+2}
A.awo.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdr(0)/2
this.c[d]=u
u+=e.gdr(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aG4.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1011}
A.azD.prototype={
$1(d){return d},
$S:1012}
A.aTu.prototype={
$2(d,e){return this.a.At(d,e)},
$S:20};(function aliases(){var w=A.Kk.prototype
w.a_C=w.i7
w.alb=w.aRi
w.alc=w.ad4
w=A.SS.prototype
w.anP=w.l
w=A.Ku.prototype
w.a_D=w.i7
w=A.FL.prototype
w.a0m=w.Yy})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c1B","bQb",72)
v(A.SU.prototype,"gaDs","I_",23)
u(A.SV.prototype,"garB","arC",8)
t(A,"c0p",3,null,["$3"],["bNw"],49,0)
t(A,"c0q",3,null,["$3"],["bNx"],50,0)
t(A,"c0r",3,null,["$3"],["bNy"],51,0)
t(A,"c0t",4,null,["$4"],["c1e"],52,0)
w(A,"c0s","c1d",53)
s(A,"bx7","c1f",54)
t(A,"c0k",3,null,["$3"],["bQf"],55,0)
w(A,"ZE","c3E",56)
w(A,"atQ","c1i",6)
t(A,"c0m",3,null,["$3"],["bR0"],57,0)
t(A,"c0o",3,null,["$3"],["bWd"],58,0)
t(A,"c0l",3,null,["$3"],["bR_"],59,0)
t(A,"c0n",3,null,["$3"],["bWc"],60,0)
w(A,"caL","bQZ",61)
w(A,"caM","bWb",62)
r(A.Xq.prototype,"ga3Y","ax3",29)
u(A.Vd.prototype,"gayl","aym",35)
t(A,"c2v",3,null,["$3"],["bRv"],63,0)
t(A,"c2u",3,null,["$3"],["bNA"],64,0)
w(A,"c2y","c3F",1)
t(A,"bI9",4,null,["$5$size","$4"],["bGB",function(d,e,f,g){return A.bGB(d,e,f,g,null)}],65,0)
s(A,"bxD","c3D",66)
s(A,"bIa","c07",67)
s(A,"bId","c1l",68)
s(A,"bIc","c1h",3)
s(A,"bIb","c1g",3)
w(A,"c2x","bHN",70)
w(A,"c2w","bHM",71)
u(A.PQ.prototype,"gaG4","a6z",47)
t(A,"ZJ",3,null,["$3"],["c2t"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.U,[A.a61,A.afx,A.akH,A.Iw,A.J_,A.afv,A.HF,A.HZ,A.ak0,A.ald,A.U2,A.XB,A.Tg,A.Ts,A.alH,A.ai3,A.BR,A.arh,A.ws,A.Kl,A.An])
u(B.B,[A.uF,A.DK,A.bf,A.agz,A.agp,A.agr,A.ags,A.agh,A.ajL,A.agv,A.agt,A.awH,A.arl,A.awu,A.agq,A.Ku,A.a54,A.tj,A.apL,A.apK,A.agg,A.ajK,A.ew,A.ajH,A.ajJ,A.anY,A.aky,A.arZ,A.ajI,A.ajq,A.ajG,A.aw9,A.bd7,A.awc,A.agd,A.nL,A.ajD,A.ajE,A.vu,A.hi,A.all,A.alo,A.agm,A.agB,A.agn,A.ajF,A.alr,A.alp,A.ark,A.apJ,A.aIX,A.aln,A.vd,A.a0A,A.aly,A.a0K,A.b0r])
u(B.uD,[A.q8,A.vi,A.wa,A.az1,A.aA8,A.o1,A.Ck,A.o2])
u(B.nQ,[A.aDz,A.aDA,A.aDB,A.aDS,A.bqr,A.bqs,A.bsm,A.bqt,A.bqq,A.bqp,A.aDH,A.aDN,A.aDG,A.aIE,A.bcO,A.bcP,A.bcQ,A.bcR,A.bcS,A.bcT,A.bcU,A.bcV,A.bcW,A.bcX,A.bcY,A.bpz,A.bkN,A.b4_,A.b4M,A.b4N,A.bdv,A.bmN,A.b2r,A.b2u,A.b2v,A.bpx,A.b2x,A.aws,A.awv,A.awb,A.aXV,A.aXW,A.aXX,A.aXY,A.aXZ,A.aT9,A.aTa,A.aTb,A.aTd,A.aTe,A.aTg,A.aTh,A.aTi,A.aTj,A.aTk,A.aTl,A.bdc,A.bdd,A.aIW,A.bqf,A.bqe,A.bqc,A.aIY,A.aIZ,A.awl,A.azD])
t(A.yd,B.fv)
u(B.xE,[A.aDy,A.aDx,A.aDQ,A.aDI,A.aDJ,A.aDK,A.aDL,A.aDM,A.aDP,A.aDE,A.aDF,A.bfq,A.bfr,A.bfs,A.aIG,A.bd_,A.bd0,A.bpy,A.bd1,A.b2t,A.b2n,A.b2q,A.bpw,A.b2i,A.b2j,A.b2l,A.b2k,A.b2m,A.b2w,A.awy,A.aTc,A.aTf,A.bda,A.bdb,A.aJ0,A.aJ1,A.awp])
u(B.xM,[A.ye,A.amT,A.a62,A.agl])
u(B.xF,[A.aDO,A.bfp,A.blw,A.aIF,A.bcZ,A.bkL,A.bkM,A.b3Z,A.b40,A.b41,A.b4O,A.b4P,A.bdw,A.bmO,A.b2s,A.b2o,A.b2p,A.awt,A.awx,A.awa,A.bd9,A.aJ2,A.aJ3,A.awm,A.awq,A.awn,A.awo,A.aG4,A.aTu])
u(B.O,[A.AW,A.QX])
u(B.a1,[A.SU,A.Xq])
u(B.Ne,[A.Kq,A.NV])
u(B.xh,[A.SV,A.Vd])
t(A.a0c,A.agz)
t(A.agc,A.a0c)
t(A.a_X,A.agc)
u(A.a_X,[A.ago,A.alm])
t(A.nM,A.ago)
u(B.Us,[A.awj,A.acZ,A.CB,A.aD_,A.aIH,A.N1])
t(A.fA,A.agp)
t(A.id,A.agr)
t(A.mv,A.ags)
t(A.a03,A.agh)
t(A.MD,A.ajL)
u(A.MD,[A.agu,A.alq])
t(A.a08,A.agu)
t(A.a09,A.agv)
t(A.CC,A.agt)
u(A.awH,[A.Kr,A.NX])
t(A.ad0,A.arl)
t(A.agw,A.ad0)
t(A.a0a,A.agw)
u(B.bd,[A.xp,A.z_])
t(A.ui,A.agq)
t(A.Kk,A.Ku)
u(A.Kk,[A.aww,A.aJ_])
u(B.NR,[A.a06,A.a6f])
u(B.K,[A.FL,A.age])
u(A.FL,[A.aa8,A.aal])
t(A.q_,A.apL)
t(A.abx,A.apK)
t(A.p5,A.agg)
t(A.uH,A.ajK)
t(A.yg,A.ajH)
t(A.pr,A.ajJ)
t(A.Pw,A.anY)
t(A.mQ,A.aky)
t(A.ni,A.arZ)
u(A.pr,[A.akx,A.arY])
t(A.kK,A.akx)
t(A.l9,A.arY)
t(A.a4q,A.ajI)
u(A.a4q,[A.akw,A.arX])
t(A.a5f,A.akw)
t(A.ado,A.arX)
t(A.Ml,A.ajq)
t(A.uG,A.ajG)
t(A.Mw,A.uG)
t(A.aby,B.h0)
t(A.agf,A.age)
t(A.SS,A.agf)
t(A.a_Y,A.SS)
t(A.jK,A.agd)
t(A.a4n,A.ajD)
t(A.a4p,A.ajE)
u(A.hi,[A.a4t,A.a4u,A.a4v,A.My,A.Mz,A.a4y,A.MB,A.MC,A.a4s,A.a4r,A.Mx,A.a4w,A.a4x,A.MA])
t(A.pE,A.alm)
t(A.e9,A.all)
t(A.NW,A.alo)
t(A.a05,A.agm)
t(A.mw,A.agB)
t(A.Kp,A.agn)
t(A.yf,A.ajF)
t(A.Ep,A.alq)
t(A.a6g,A.alr)
t(A.alk,A.ew)
t(A.mV,A.alk)
t(A.q6,A.mV)
t(A.rn,A.alp)
t(A.tk,A.ark)
t(A.Gc,A.apJ)
t(A.z0,A.aln)
t(A.z3,A.aly)
t(A.PQ,B.Q2)
t(A.a4j,B.bM)
w(A.agh,A.bf)
w(A.ago,A.bf)
w(A.agp,A.bf)
w(A.agr,A.bf)
w(A.ags,A.bf)
w(A.agt,A.bf)
w(A.agu,A.bf)
w(A.agv,A.bf)
w(A.agw,A.bf)
w(A.agq,A.bf)
w(A.agc,A.bf)
w(A.agg,A.bf)
w(A.ajq,A.bf)
w(A.ajG,A.bf)
w(A.ajH,A.bf)
w(A.ajJ,A.bf)
w(A.ajK,A.bf)
w(A.akx,A.bf)
w(A.akw,A.bf)
w(A.aky,A.bf)
w(A.anY,A.bf)
w(A.apK,A.bf)
w(A.apL,A.bf)
w(A.arl,A.bf)
w(A.arY,A.bf)
w(A.arX,A.bf)
w(A.arZ,A.bf)
w(A.agd,A.bf)
v(A.age,B.aC)
w(A.agf,B.e4)
v(A.SS,B.a3o)
w(A.agz,A.bf)
w(A.ajD,A.bf)
w(A.ajE,A.bf)
w(A.ajL,A.bf)
w(A.agm,A.bf)
w(A.agn,A.bf)
w(A.agB,A.bf)
w(A.ajF,A.bf)
w(A.ajI,A.bf)
w(A.alk,A.bf)
w(A.all,A.bf)
w(A.alm,A.bf)
w(A.alo,A.bf)
w(A.alp,A.bf)
w(A.alq,A.bf)
w(A.alr,A.bf)
w(A.apJ,A.bf)
w(A.ark,A.bf)
w(A.aln,A.bf)
w(A.aly,A.bf)})()
B.bn_(b.typeUniverse,JSON.parse('{"a61":{"U":[],"c":[]},"DK":{"aDD":[]},"yd":{"fv":["be<~>"],"fv.T":"be<~>"},"J_":{"U":[],"c":[]},"HF":{"U":[],"c":[]},"ye":{"bk":[],"O":[],"c":[]},"afx":{"U":[],"c":[]},"akH":{"U":[],"c":[]},"amT":{"bk":[],"O":[],"c":[]},"Iw":{"U":[],"c":[]},"afv":{"U":[],"c":[]},"HZ":{"U":[],"c":[]},"ws":{"U":[],"c":[]},"AW":{"O":[],"c":[]},"a62":{"bk":[],"O":[],"c":[]},"ak0":{"U":[],"c":[]},"ald":{"U":[],"c":[]},"U2":{"U":[],"c":[]},"XB":{"U":[],"c":[]},"Tg":{"U":[],"c":[]},"Ts":{"U":[],"c":[]},"alH":{"U":[],"c":[]},"ai3":{"U":[],"c":[]},"BR":{"U":[],"c":[]},"arh":{"U":[],"c":[]},"agl":{"bk":[],"O":[],"c":[]},"SU":{"a1":["AW"]},"Kq":{"O":[],"c":[]},"SV":{"a1":["Kq"]},"nM":{"bf":[]},"fA":{"bf":[]},"id":{"bf":[]},"mv":{"bf":[]},"CC":{"bf":[]},"xp":{"bd":["nM"],"b3":["nM"],"b3.T":"nM","bd.T":"nM"},"a03":{"bf":[]},"a08":{"bf":[]},"a09":{"bf":[]},"a0a":{"bf":[]},"ui":{"bf":[]},"a06":{"aX":[],"c":[]},"aa8":{"K":[],"J":[],"jl":[],"aS":[]},"pr":{"bf":[]},"mQ":{"bf":[]},"ni":{"bf":[]},"kK":{"bf":[]},"l9":{"bf":[]},"uG":{"bf":[]},"a_X":{"bf":[]},"q_":{"bf":[]},"abx":{"bf":[]},"p5":{"bf":[]},"uH":{"bf":[]},"yg":{"bf":[]},"ad0":{"bf":[]},"Pw":{"bf":[]},"a5f":{"bf":[]},"ado":{"bf":[]},"Ml":{"bf":[]},"Mw":{"bf":[]},"Kl":{"U":[],"c":[]},"QX":{"O":[],"c":[]},"Xq":{"a1":["QX"]},"jK":{"bf":[]},"aby":{"h0":[],"aX":[],"c":[]},"a_Y":{"e4":["K","hj"],"K":[],"aC":["K","hj"],"J":[],"aS":[],"aC.1":"hj","e4.1":"hj","aC.0":"K"},"An":{"U":[],"c":[]},"a0c":{"bf":[]},"a4n":{"bf":[]},"MD":{"bf":[]},"a4p":{"bf":[]},"a4t":{"hi":[]},"a4u":{"hi":[]},"a4v":{"hi":[]},"My":{"hi":[]},"Mz":{"hi":[]},"a4y":{"hi":[]},"MB":{"hi":[]},"MC":{"hi":[]},"a4s":{"hi":[]},"a4r":{"hi":[]},"Mx":{"hi":[]},"a4w":{"hi":[]},"a4x":{"hi":[]},"MA":{"hi":[]},"FL":{"K":[],"J":[],"jl":[],"aS":[]},"NV":{"O":[],"c":[]},"Vd":{"a1":["NV"]},"pE":{"bf":[]},"e9":{"bf":[]},"mw":{"bf":[]},"mV":{"ew":[],"bf":[]},"q6":{"mV":[],"ew":[],"bf":[]},"rn":{"bf":[]},"tk":{"bf":[]},"Gc":{"bf":[]},"z_":{"bd":["pE"],"b3":["pE"],"b3.T":"pE","bd.T":"pE"},"NW":{"bf":[]},"a05":{"bf":[]},"Kp":{"bf":[]},"yf":{"bf":[]},"a4q":{"bf":[]},"Ep":{"bf":[]},"a6g":{"bf":[]},"z0":{"bf":[]},"a6f":{"aX":[],"c":[]},"aal":{"K":[],"J":[],"jl":[],"aS":[]},"z3":{"bf":[]},"PQ":{"K":[],"bv":["K"],"J":[],"aS":[]},"a4j":{"bM":[],"aX":[],"c":[]}}'))
B.bG5(b.typeUniverse,JSON.parse('{"Kk":1,"MD":1,"Ku":1,"FL":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("Ck"),e:w("be<o1>"),aN:w("be<o2>"),fM:w("be<a0<f,@>?>"),b:w("be<~>"),W:w("jK"),B:w("nM"),dB:w("fA"),T:w("ui"),fj:w("id"),G:w("mv"),J:w("mw"),k:w("at"),cX:w("a0K<L>"),dO:w("uq"),R:w("al<f,@>"),v:w("hU"),bz:w("lz<b9>"),f0:w("nV"),E:w("bf"),F:w("yd"),X:w("o1"),P:w("lE"),D:w("uF"),a:w("aDD"),d:w("o2"),cw:w("ew"),L:w("hj"),m:w("di<w,E>"),cm:w("kK"),dv:w("mQ"),g:w("D<nL>"),O:w("D<fA>"),Y:w("D<id>"),C:w("D<bu1>"),U:w("D<ew>"),K:w("D<a54>"),u:w("D<e9>"),bC:w("D<vd>"),aA:w("D<u<ew>>"),r:w("D<Gc>"),s:w("D<f>"),eg:w("D<th>"),df:w("D<q6>"),p:w("D<c>"),n:w("D<L>"),t:w("D<w>"),eF:w("bh<a1<O>>"),Z:w("mV"),cz:w("e9"),hf:w("pE"),dj:w("z0"),fT:w("rn"),c_:w("ij<oM<be<~>>>"),x:w("z3<fA>"),y:w("z3<e9>"),I:w("u<w>"),ef:w("vi"),c:w("a0<f,@>"),f:w("a0<@,@>"),gj:w("aa<L,L>"),w:w("jY"),aU:w("B"),Q:w("vu<nM>"),o:w("vu<pE>"),eo:w("pQ"),gJ:w("pR"),V:w("n9<lE>"),N:w("f"),A:w("nb"),bO:w("bH"),er:w("th"),j:w("wa"),dw:w("q6"),bY:w("tk"),cZ:w("q8"),gc:w("kg"),es:w("l9"),bN:w("ni"),l:w("c"),q:w("wM"),g4:w("iy<L>"),cJ:w("C"),i:w("L"),z:w("@"),S:w("w"),bn:w("xp?"),f3:w("z_?"),M:w("u<@>?"),h:w("a0<f,@>?"),fF:w("a0<@,@>?"),cK:w("B?"),aD:w("kg?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AG=new B.nD(C.l,B.aw("nD<E>"))
D.AN=new A.CB(0,"left")
D.mr=new A.CB(1,"top")
D.AO=new A.CB(2,"right")
D.dE=new A.CB(3,"bottom")
D.auI=new A.q_(!1,A.bx7(),22,null)
D.kk=new A.p5(16,null,D.auI,!0)
D.a8t=new A.pr(C.C,null,2,null)
D.vS=new A.Kp(!1,D.a8t,A.c2y(),!0)
D.a_x=new A.awj(3,"spaceEvenly")
D.a_G=new B.xt(6,"dstIn")
D.XF=new B.aW(3,3)
D.AS=new B.d4(D.XF,D.XF,C.a1,C.a1)
D.a_R=new B.ba(C.C,0,C.T,-1)
D.Br=new A.a4p()
D.a1s=new A.My()
D.a1t=new A.MB()
D.aLT=new A.abx()
D.akV=w([],B.aw("D<kK>"))
D.akW=w([],B.aw("D<l9>"))
D.Dt=new A.Ml(D.akV,D.akW,!0)
D.a8b=new B.e7("Zeitraum",!1,null)
D.a8f=new B.e7("Konten (SKR 03)",!1,null)
D.xq=new A.aD_(0,"center")
D.aM4=new A.yf(!0,A.bxD(),A.bI9())
D.Dy=new A.yf(!1,A.bxD(),A.bI9())
D.Dz=new A.yg(!1,!0,null,A.atQ(),A.ZE(),!0,null,A.atQ(),A.ZE())
D.aM5=new A.yg(!0,!0,null,A.atQ(),A.ZE(),!0,null,A.atQ(),A.ZE())
D.a3L=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3x=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3U=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3P=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3i=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3h=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4e=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3E=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4h=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4b=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aoT=new B.di([50,D.a3L,100,D.a3x,200,D.a3U,300,D.a3P,400,D.a3i,500,D.a3h,600,D.a4e,700,D.a3E,800,D.a4h,900,D.a4b],x.m)
D.dk=new B.rv(D.aoT,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ahe=w([8,4],x.t)
D.a8r=new A.pr(D.dk,null,0.4,D.ahe)
D.a8s=new A.pr(C.ag,null,0.5,null)
D.fK=new A.ew(0/0,0/0)
D.auK=new A.q_(!0,A.bx7(),44,null)
D.ms=new A.p5(16,null,D.auK,!0)
D.auJ=new A.q_(!0,A.bx7(),30,null)
D.mt=new A.p5(16,null,D.auJ,!0)
D.a8u=new A.uH(!1,D.ms,D.mt,D.ms,D.mt)
D.aM6=new A.uH(!0,D.ms,D.mt,D.ms,D.mt)
D.DH=new A.N1(0,"left")
D.a98=new A.N1(1,"center")
D.DI=new A.N1(2,"right")
D.a9d=new B.a8(57495,"MaterialIcons",null,!1)
D.a9U=new B.a8(58927,"MaterialIcons",null,!1)
D.a9X=new B.a8(59005,"MaterialIcons",null,!0)
D.a9Y=new B.a8(59007,"MaterialIcons",null,!0)
D.a9Z=new B.a8(59011,"MaterialIcons",null,!1)
D.aaU=new B.a8(62589,"MaterialIcons",null,!1)
D.aab=new B.a8(61349,"MaterialIcons",null,!1)
D.abI=new B.aH(D.aab,20,C.h,null,null)
D.aai=new B.a8(61487,"MaterialIcons",null,!1)
D.abK=new B.aH(D.aai,18,null,null,null)
D.ac4=new B.aH(C.j8,null,C.h,null,null)
D.ac5=new B.aH(C.nD,null,C.p,null,null)
D.acx=new B.aH(C.nH,16,null,null,null)
D.a9p=new B.a8(57912,"MaterialIcons",null,!1)
D.acE=new B.aH(D.a9p,null,C.ab,null,null)
D.aeR=new A.a62(null)
D.aMb=new A.aIH(0,"horizontal")
D.xW=new A.z0(0,0,0,0,!1)
D.EX=new A.NW(0.5)
D.Bv=new A.a6g()
D.aeV=new A.Ep(D.Bv,A.bId(),10,A.bIa(),!0,A.bIc(),A.bIb(),!1,null,null,null)
D.aMd=new A.Ep(D.Bv,A.bId(),10,A.bIa(),!0,A.bIc(),A.bIb(),!0,null,null,null)
D.agj=w([4,3],x.t)
D.asU=new B.aB("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.asK=new B.aB("receivables","Forderungen (kurzfristig)")
D.asx=new B.aB("inventory_value","Vorr\xe4te (Warenbestand)")
D.asv=new B.aB("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.ash=new B.aB("fixed_assets","Anlageverm\xf6gen")
D.asp=new B.aB("current_liabilities","Kurzfristige Verbindlichkeiten")
D.asR=new B.aB("long_term_liabilities","Langfristige Verbindlichkeiten")
D.asJ=new B.aB("equity","Eigenkapital")
D.Hb=w([D.asU,D.asK,D.asx,D.asv,D.ash,D.asp,D.asR,D.asJ],B.aw("D<+(f,f)>"))
D.aMh=w([],x.g)
D.akH=w([],x.O)
D.akI=w([],x.Y)
D.akJ=w([],B.aw("D<mv>"))
D.akK=w([],B.aw("D<mw>"))
D.aMi=w([],x.U)
D.aMj=w([],x.u)
D.akL=w([],x.r)
D.apu={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Ti={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yA=new B.al(D.Ti,[0,0,0,0,0,0,0,C.c7],B.aw("al<f,B>"))
D.aps={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aoO=new B.al(D.aps,[0,0,0,0],B.aw("al<f,w>"))
D.apI={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoa=new B.al(D.apI,[0,0,0,0,null,null,null,null],B.aw("al<f,w?>"))
D.ao6=new B.al(D.apu,[D.yA,D.yA,D.yA,C.c7,C.c7,C.c7,D.aoO,D.aoa],x.R)
D.aon=new B.al(D.Ti,[0,0,0,0,0,0,0,C.cB],x.R)
D.apr={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aoP=new B.al(D.apr,[0,0,0,0,0,0,0,C.cB],x.R)
D.a4m=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4u=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3l=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3H=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3R=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4I=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a38=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3J=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3T=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4c=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aoU=new B.di([50,D.a4m,100,D.a4u,200,D.a3l,300,D.a3H,400,D.a3R,500,D.a4I,600,D.a38,700,D.a3J,800,D.a3T,900,D.a4c],x.m)
D.T7=new B.rv(D.aoU,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7y=new B.ah(32,32,32,32)
D.aqM=new B.ae(D.a7y,C.bp,null)
D.a7A=new B.ah(48,48,48,48)
D.aqP=new B.ae(D.a7A,C.bp,null)
D.aqU=new B.ae(C.ad,C.bp,null)
D.akX=w([],B.aw("D<mQ>"))
D.akY=w([],B.aw("D<ni>"))
D.XG=new A.Pw(D.akX,D.akY)
D.atD=new B.fs("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.atF=new B.fs("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.atH=new B.fs("Automaten-Business","Umsatz je Automat",null,null)
D.atJ=new B.fs("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.atL=new B.fs("Top","Meistverkaufte Produkte",null,null)
D.atO=new B.fs("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.atP=new B.fs("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yl=new B.t2(C.G,C.u,0)
D.aDR=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.awn=new B.ee(D.aDR,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aDl=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.awo=new B.ee(D.aDl,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aMs=new B.R(!0,C.C,null,null,null,null,14,C.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDb=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aE8=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zy=new A.acZ(0,"auto")
D.aEK=new A.acZ(1,"top")
D.aJ2=new A.ws("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aJ3=new A.ws("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cba","bMl",()=>B.jq(new A.bqr(),x.D))
w($,"cbb","auv",()=>B.jq(new A.bqs(),x.a))
w($,"cc9","x8",()=>B.bvR(new A.bsm(),x.P))
w($,"cbc","bt4",()=>C.aH.$1$1(new A.bqt(),x.d))
w($,"cb9","bMk",()=>C.aH.$1$1(new A.bqq(),x.X))
w($,"cb8","bzk",()=>C.aH.$1$1(new A.bqp(),x.h))
w($,"cb7","bt3",()=>B.aYN(A.c1B(),x.F,x.b))
w($,"c4p","bsH",()=>new A.aw9())
v($,"c7E","ls",()=>new A.b0r())})()};
(a=>{a["z6HNGOVvIHZ4N80C14PJmGn6YAo="]=a.current})($__dart_deferred_initializers__);